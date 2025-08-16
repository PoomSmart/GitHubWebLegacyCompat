#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// For Node.js < 18, we need to use a fetch polyfill or alternative
let fetch;
let puppeteer;
let prettier;

try {
    // Try to use built-in fetch
    fetch = globalThis.fetch;
    if (!fetch) {
        throw new Error("fetch not available");
    }
} catch (error) {
    // Fallback to using child_process to curl
    console.log("Using curl as fetch fallback...");
}

// Try to load Puppeteer for better JavaScript page rendering
try {
    puppeteer = require("puppeteer");
    console.log("Puppeteer available for JavaScript page rendering");
} catch (error) {
    console.log("Puppeteer not available, using basic fetch/curl");
}

// Try to load Prettier programmatically for CSS formatting
try {
    prettier = require("prettier");
} catch (e) {
    // Will fallback to manual beautifier later
}

const SCRIPTS_DIR = path.join(__dirname, "scripts");
const STYLES_DIR = path.join(__dirname, "styles");
const TEMP_DIR = path.join(__dirname, "temp-downloads");

// File patterns to search for
const FILE_PATTERNS = {
    "issues-react": /issues-react-[a-f0-9]+\.js$/,
    "issue-viewer": /ui_packages_issue-viewer_.*-[a-f0-9]+\.js$/,
    "list-view": /ui_packages_list-view_.*-[a-f0-9]+\.js$/,
    "react-core": /react-core-[a-f0-9]+\.js$/,
    "remark-vendors":
        /vendors-node_modules_remark-gfm_lib_index_js-node_modules_remark-parse_lib_index_js-node_modu-[a-f0-9]+-[a-f0-9]+\.js$/,
    "text-expander": /vendors-node_modules_github_text-expander-element_dist_index_js-[a-f0-9]+\.js$/,
    "emoji-element": /vendors-node_modules_github_emoji-element_dist_index_js-[a-f0-9]+\.js$/,
    "emotion-is-prop-valid": /vendors-node_modules_@?emotion[_-]is-prop-valid.*-[a-f0-9]+\.js$/,
    "environment": /ui_packages_environment_.*-[a-f0-9]+\.js$/,
    "tanstack-queryObserver": /vendors.*tanstack.*query.*observer.*-[a-f0-9]+\.js$/i,
    // "repos-overview": /chunk-lazy-react-partial-repos-overview-[a-f0-9]+\.js$/,
    // "wp-runtime": /wp-runtime-[a-f0-9]+\.js$/,
    // CSS
    "primer-react-css": /primer-react\.[a-f0-9]+\.module\.css$/,
};

// Alternative patterns if primary ones don't match
const ALTERNATIVE_PATTERNS = {
    "issue-viewer": /issue-viewer.*-[a-f0-9]+\.js$/,
    "list-view": /list-view.*-[a-f0-9]+\.js$/,
    "remark-vendors": /vendors.*remark.*-[a-f0-9]+\.js$/,
    "text-expander": /text-expander.*-[a-f0-9]+\.js$/,
    "emoji-element": /emoji-element.*-[a-f0-9]+\.js$/,
    "emotion-is-prop-valid": /is-prop-valid.*-[a-f0-9]+\.js$/,
    "environment": /environment.*-[a-f0-9]+\.js$/,
    "tanstack-queryObserver": /queryObserver.*-[a-f0-9]+\.js$/i,
    // "repos-overview": /chunk.*repos.*overview.*-[a-f0-9]+\.js$/,
    // "wp-runtime": /runtime.*-[a-f0-9]+\.js$/,
};

// Target files in scripts directory
const TARGET_FILES = {
    "issues-react": "16.4-issues-react.js",
    "issue-viewer": "16.4-issue-viewer.js",
    "list-view": "16.4-list-view.js",
    "react-core": "16.4-a-react-core.js",
    "remark-vendors": "16.4-remark-vendors.js",
    "text-expander": "15.0-text-expander.js",
    "emoji-element": "15.0-emoji-element.js",
    "emotion-is-prop-valid": "15.0-emotion-is-prop-valid.js",
    "environment": "15.0-environment.js",
    "tanstack-queryObserver": "15.0-tanstack-queryObserver.js",
    // "repos-overview": "16.4-repos-overview.js",
    "primer-react-css": "15.4-primer-react.css",
};

async function fetchPageWithPuppeteer(url) {
    if (!puppeteer) {
        throw new Error("Puppeteer not available");
    }

    console.log(`    Using Puppeteer to render ${url}...`);

    let browser;
    try {
        browser = await puppeteer.launch({
            headless: "new",
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });

        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });

        await page.goto(url, {
            waitUntil: "networkidle2",
            timeout: 30000,
        });

        // Wait for potential lazy-loaded content
        await new Promise((resolve) => setTimeout(resolve, 1500));
        // Try to trigger lazy loading by scrolling to the bottom
        try {
            await page.evaluate(async () => {
                await new Promise((resolve) => {
                    let total = 0;
                    const step = () => {
                        const scrolled = Math.min(1000, document.body.scrollHeight - window.scrollY);
                        window.scrollBy(0, scrolled);
                        total += scrolled;
                        if (total > 3000 || window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                            resolve(null);
                        } else {
                            requestAnimationFrame(step);
                        }
                    };
                    requestAnimationFrame(step);
                });
            });
            await page.waitForNetworkIdle({ idleTime: 500, timeout: 5000 }).catch(() => {});
        } catch (_) {}

        // Get all script sources that were actually loaded
        const scriptSources = await page.evaluate(() => {
            const elements = [
                ...Array.from(document.querySelectorAll("script[src]")),
                ...Array.from(document.querySelectorAll('link[rel="stylesheet"][href]')),
            ];
            return elements
                .map((el) => el.src || el.href)
                .filter((src) =>
                    src &&
                    src.includes("github.githubassets.com/assets/") &&
                    (src.endsWith(".js") || src.endsWith(".css"))
                );
        });

        // Also get HTML content as backup
        const html = await page.content();
        const assetRegex =
            /https:\/\/github\.githubassets\.com\/assets\/[^"']+\.(?:js|css)/g;
        const htmlAssets = [...html.matchAll(assetRegex)].map(
            (match) => match[0]
        );

        // Combine and deduplicate
        const allAssets = [...new Set([...scriptSources, ...htmlAssets])];
        return allAssets;
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

async function fetchGitHubPage() {
    console.log("Fetching GitHub pages to find asset URLs...");

    try {
        let allAssets = [];

        const pages = [
            {
                name: "issues page",
                url: "https://github.com/microsoft/vscode/issues",
            },
            {
                name: "main repository page",
                url: "https://github.com/microsoft/vscode",
            },
            {
                name: "issue detail page",
                url: "https://github.com/microsoft/vscode/issues/1",
            },
        ];

    for (const { name, url } of pages) {
            console.log(`  - Fetching from ${name}...`);

            try {
                let assets = [];

                // Try Puppeteer first for better JS support
                if (puppeteer) {
                    try {
                        assets = await fetchPageWithPuppeteer(url);
                        console.log(
                            `    Found ${assets.length} JavaScript asset URLs from ${name} (via Puppeteer)`
                        );
                    } catch (puppeteerError) {
                        console.log(
                            `    Puppeteer failed for ${name}, falling back to basic fetch: ${puppeteerError.message}`
                        );
                        // Fall back to basic fetch
                        assets = await fetchPageBasic(url, name);
                    }
                } else {
                    // Use basic fetch/curl
                    assets = await fetchPageBasic(url, name);
                }

                allAssets.push(...assets);
            } catch (error) {
                console.log(
                    `    Warning: Could not fetch ${name}: ${error.message}`
                );
            }
        }

        // Remove duplicates
        const uniqueAssets = [...new Set(allAssets)];
        console.log(
            `Found ${uniqueAssets.length} unique JavaScript asset URLs total`
        );

        return uniqueAssets;
    } catch (error) {
        console.error("Error fetching GitHub pages:", error);
        process.exit(1);
    }
}

async function fetchPageBasic(url, pageName) {
    let html;
    if (fetch) {
        const response = await fetch(url);
        html = await response.text();
    } else {
        html = execSync(`curl -s "${url}"`, { encoding: "utf8" });
    }

    const assetRegex =
        /https:\/\/github\.githubassets\.com\/assets\/[^"']+\.(?:js|css)/g;
    const assets = [...html.matchAll(assetRegex)].map((match) => match[0]);
    console.log(
        `    Found ${assets.length} JavaScript/CSS asset URLs from ${pageName}`
    );

    return assets;
}

async function tryFetchReposOverviewDirectly(discoveredUrls) {
    try {
        console.log(
            "    Attempting to fetch repos-overview chunk directly from webpack runtime info..."
        );

        // First, try to get wp-runtime content from the live URL
        const wpRuntimeUrl = discoveredUrls.find((url) =>
            /wp-runtime-[a-f0-9]+\.js$/.test(url)
        );
        if (!wpRuntimeUrl) {
            console.log("    ❌ No wp-runtime URL found in discovered assets");
            return null;
        }

        console.log(`    📥 Fetching wp-runtime from: ${wpRuntimeUrl}`);

        let wpRuntimeContent;
        if (fetch) {
            const response = await fetch(wpRuntimeUrl);
            if (!response.ok) {
                console.log(
                    `    ❌ Could not fetch wp-runtime: HTTP ${response.status}`
                );
                return null;
            }
            wpRuntimeContent = await response.text();
        } else {
            try {
                wpRuntimeContent = execSync(`curl -s "${wpRuntimeUrl}"`, {
                    encoding: "utf8",
                });
                if (
                    wpRuntimeContent.includes("<html") ||
                    wpRuntimeContent.includes("<!DOCTYPE")
                ) {
                    console.log(
                        "    ❌ Could not fetch wp-runtime: Got HTML error page"
                    );
                    return null;
                }
            } catch (error) {
                console.log(
                    `    ❌ Could not fetch wp-runtime: ${error.message}`
                );
                return null;
            }
        }

        // Extract the current repos-overview hash from wp-runtime
        // Get all matches and try them in reverse order (newest first)
        const allMatches = [
            ...wpRuntimeContent.matchAll(
                /"lazy-react-partial-repos-overview":"([a-f0-9]+)"/g
            ),
        ];

        if (allMatches.length === 0) {
            console.log(
                "    ❌ Could not extract repos-overview hash from wp-runtime"
            );
            return null;
        }

        console.log(`    📋 Found ${allMatches.length} repos-overview hashes`);

        // Try both hashes starting with the newest
        for (let i = allMatches.length - 1; i >= 0; i--) {
            const hash = allMatches[i][1];
            const expectedFilename = `chunk-lazy-react-partial-repos-overview-${hash}.js`;
            const directUrl = `https://github.githubassets.com/assets/${expectedFilename}`;

            console.log(
                `    🔍 Trying direct fetch (${i + 1}/${allMatches.length}): ${expectedFilename}`
            );

            let content;
            if (fetch) {
                const response = await fetch(directUrl);
                if (!response.ok) {
                    console.log(
                        `    ❌ Direct fetch failed: HTTP ${response.status}`
                    );
                    continue; // Try next hash
                }
                content = await response.text();
            } else {
                try {
                    content = execSync(`curl -s "${directUrl}"`, {
                        encoding: "utf8",
                    });
                    // Basic check if curl succeeded (curl returns HTML error pages on 404)
                    if (
                        content.includes("<html") ||
                        content.includes("<!DOCTYPE")
                    ) {
                        console.log(
                            "    ❌ Direct fetch failed: Got HTML error page"
                        );
                        continue; // Try next hash
                    }
                } catch (error) {
                    console.log(`    ❌ Direct fetch failed: ${error.message}`);
                    continue; // Try next hash
                }
            }

            // Validate that this is the correct chunk
            if (
                content.includes('["lazy-react-partial-repos-overview"]') ||
                content.includes("lazy-react-partial-repos-overview") ||
                content.length > 1000
            ) {
                // Basic size check
                console.log(
                    `    ✅ Successfully fetched repos-overview chunk with hash: ${hash}`
                );

                // Save it to temp directory
                const tempPath = path.join(
                    TEMP_DIR,
                    "repos-overview-direct.js"
                );
                fs.writeFileSync(tempPath, content);

                return {
                    url: directUrl,
                    path: tempPath,
                    content: content,
                };
            } else {
                console.log(
                    "    ❌ Direct fetch succeeded but content validation failed"
                );
                continue; // Try next hash
            }
        }

        console.log("    ❌ All repos-overview hash attempts failed");
        return null;
    } catch (error) {
        console.log(`    ❌ Direct fetch attempt failed: ${error.message}`);
        return null;
    }
}

async function validateWpRuntimeContent(url) {
    try {
        console.log(
            `    Validating wp-runtime content of ${path.basename(url)}...`
        );

        let content;
        if (fetch) {
            const response = await fetch(url);
            if (!response.ok) return false;
            content = await response.text();
        } else {
            content = execSync(`curl -s "${url}"`, { encoding: "utf8" });
        }

        // Check if the wp-runtime references the repos-overview chunk
        const hasReposOverviewReference =
            content.includes("lazy-react-partial-repos-overview") ||
            content.includes("repos-overview") ||
            content.includes("repositories");

        if (hasReposOverviewReference) {
            console.log(
                `    ✅ wp-runtime validated - contains repos-overview references`
            );
            return true;
        } else {
            console.log(
                `    ❌ wp-runtime validation failed - no repos-overview references found`
            );
            return false;
        }
    } catch (error) {
        console.log(`    ❌ wp-runtime validation failed: ${error.message}`);
        return false;
    }
}

function findMatchingAssets(assets) {
    const matches = {};

    for (const [key, pattern] of Object.entries(FILE_PATTERNS)) {
        let matchingAsset = assets.find((url) => {
            const filename = path.basename(url);
            return pattern.test(filename);
        });

        // Try alternative patterns if primary pattern doesn't match
        if (!matchingAsset && ALTERNATIVE_PATTERNS[key]) {
            matchingAsset = assets.find((url) => {
                const filename = path.basename(url);
                return ALTERNATIVE_PATTERNS[key].test(filename);
            });
        }

        if (matchingAsset) {
            matches[key] = matchingAsset;
            console.log(`Found ${key}: ${matchingAsset}`);
        } else {
            console.warn(`Could not find asset matching pattern for ${key}`);
        }
    }

    return matches;
}

async function downloadFile(url, outputPath) {
    console.log(`Downloading ${url}...`);

    try {
        let content;
        if (fetch) {
            // Use built-in fetch
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status}: ${response.statusText}`
                );
            }
            content = await response.text();
        } else {
            // Use curl as fallback
            content = execSync(`curl -s "${url}"`, { encoding: "utf8" });
        }

        fs.writeFileSync(outputPath, content);
        console.log(`Downloaded to ${outputPath}`);
        return content;
    } catch (error) {
        console.error(`Error downloading ${url}:`, error);
        throw error;
    }
}

function formatWithPrettier(filePath) {
    console.log(`Formatting ${path.basename(filePath)} with Prettier...`);

    try {
        // Run Prettier using local config (.prettierrc)
        execSync(`npx prettier --write "${filePath}"`, {
            cwd: __dirname, // This ensures it uses the .prettierrc in the current directory
            stdio: "pipe", // Suppress output unless there's an error
        });

        console.log(`  Formatted successfully with project config`);
        return fs.readFileSync(filePath, "utf8");
    } catch (error) {
        console.warn(`  Warning: Prettier formatting failed: ${error.message}`);
        // Return the original content if Prettier fails
        return fs.readFileSync(filePath, "utf8");
    }
}

// Additional CSS beautifier when Prettier doesn't expand (e.g. minified remains single line)
function beautifyCss(css) {
    let result = "";
    let indent = 0;
    const indentStr = "  ";
    let i = 0;
    let inString = false;
    let stringChar = null;
    let inComment = false;
    while (i < css.length) {
        const ch = css[i];
        const next = css[i + 1];
        // Handle comment start/end
        if (!inString && !inComment && ch === "/" && next === "*") {
            inComment = true;
            result += "/*";
            i += 2;
            continue;
        }
        if (inComment && ch === "*" && next === "/") {
            inComment = false;
            result += "*/\n" + indentStr.repeat(indent);
            i += 2;
            continue;
        }
        if (inComment) {
            result += ch;
            i++;
            continue;
        }
        // Strings
        if (!inString && (ch === '"' || ch === "'")) {
            inString = true;
            stringChar = ch;
            result += ch;
            i++;
            continue;
        } else if (inString && ch === stringChar) {
            inString = false;
            stringChar = null;
            result += ch;
            i++;
            continue;
        }
        if (inString) {
            result += ch;
            i++;
            continue;
        }
        if (ch === '{') {
            result = result.trimEnd();
            result += ' {\n';
            indent++;
            result += indentStr.repeat(indent);
        } else if (ch === '}') {
            indent = Math.max(0, indent - 1);
            result = result.trimEnd();
            result += '\n' + indentStr.repeat(indent) + '}\n' + indentStr.repeat(indent);
        } else if (ch === ';') {
            result = result.trimEnd();
            result += ';\n' + indentStr.repeat(indent);
        } else if (ch === '\n' || ch === '\r') {
            // skip existing newlines (we control them)
        } else {
            result += ch;
        }
        i++;
    }
    // Collapse multiple blank lines
    return result
        .split('\n')
        .map((l) => l.trimEnd())
        .filter((_, idx, arr) => !(!_.trim() && arr[idx - 1] === ''))
        .join('\n')
        .trim() + '\n';
}

function formatCssFileIfNeeded(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        const longest = lines.reduce((m, l) => Math.max(m, l.length), 0);
        // Heuristic: if single (or very few) very long lines (> 400 chars) treat as minified
        if (lines.length < 10 && longest > 400) {
            console.log(`  Applying manual CSS beautifier to ${path.basename(filePath)}...`);
            const pretty = beautifyCss(content);
            fs.writeFileSync(filePath, pretty, 'utf8');
            console.log('  CSS beautified');
        }
    } catch (e) {
        console.warn(`  CSS beautify skipped: ${e.message}`);
    }
}

function readPatchFile(filename) {
    const filePath = path.join(__dirname, filename);
    if (!fs.existsSync(filePath)) {
        console.warn(`Patch file ${filename} not found`);
        return null;
    }

    const content = fs.readFileSync(filePath, "utf8");
    const lines = content.split("\n");

    const patches = [];
    let isOldSection = false;
    let isNewSection = false;
    let oldPattern = "";
    let newReplacement = "";

    const finalizePatch = () => {
        if (oldPattern.trim() && newReplacement.trim()) {
            patches.push({
                oldPattern: oldPattern.trim(),
                newReplacement: newReplacement.trim(),
            });
        }
        oldPattern = "";
        newReplacement = "";
    };

    for (const line of lines) {
        if (line.startsWith("# Old")) {
            // Finalize previous patch if it exists
            if (isNewSection) {
                finalizePatch();
            }
            isOldSection = true;
            isNewSection = false;
            continue;
        } else if (line.startsWith("# New")) {
            isOldSection = false;
            isNewSection = true;
            continue;
        }

        if (isOldSection && line.trim()) {
            oldPattern += (oldPattern ? "\n" : "") + line;
        } else if (isNewSection && line.trim()) {
            newReplacement += (newReplacement ? "\n" : "") + line;
        }
    }

    // Finalize the last patch
    finalizePatch();

    // Return array of patches, or null if no valid patches found
    return patches.length > 0 ? patches : null;
}

function applyTextPatches(content, patchFile) {
    const patches = readPatchFile(patchFile);
    if (!patches || patches.length === 0) {
        console.warn(`Invalid or missing patches in ${patchFile}`);
        return content;
    }

    console.log(`Applying ${patches.length} patch(es) from ${patchFile}:`);

    let modifiedContent = content;
    const originalLength = content.length;
    let totalChanges = 0;

    for (let i = 0; i < patches.length; i++) {
        const patch = patches[i];
        const beforeLength = modifiedContent.length;

        console.log(`  Patch ${i + 1}/${patches.length}:`);
        console.log(
            `    Old: ${patch.oldPattern.substring(0, 60)}${patch.oldPattern.length > 60 ? "..." : ""}`
        );
        console.log(
            `    New: ${patch.newReplacement.substring(0, 60)}${patch.newReplacement.length > 60 ? "..." : ""}`
        );

        // Apply the patch using simple string replacement
        const patchedContent = modifiedContent.replace(
            patch.oldPattern,
            patch.newReplacement
        );

        if (patchedContent === modifiedContent) {
            console.log(`    ⚠️  No match found for patch ${i + 1}`);
        } else {
            const changeSize = patchedContent.length - beforeLength;
            console.log(
                `    ✅ Applied patch ${i + 1}: ${beforeLength} → ${patchedContent.length} chars (${changeSize >= 0 ? "+" : ""}${changeSize})`
            );
            modifiedContent = patchedContent;
            totalChanges++;
        }
    }

    console.log(
        `  Total result: ${originalLength} → ${modifiedContent.length} chars (${modifiedContent.length - originalLength >= 0 ? "+" : ""}${modifiedContent.length - originalLength}), ${totalChanges}/${patches.length} patches applied`
    );

    return modifiedContent;
}

async function main() {
    const args = process.argv.slice(2);
    const isDryRun = args.includes("--dry-run") || args.includes("-n");

    console.log("Starting automated script update process...");
    if (isDryRun) {
        console.log("🔍 DRY RUN MODE - No files will be modified\n");
    } else {
        console.log("");
    }

    // Create temp directory
    if (!fs.existsSync(TEMP_DIR)) {
        fs.mkdirSync(TEMP_DIR);
    }
    // Ensure styles directory exists for CSS target file output
    if (!fs.existsSync(STYLES_DIR)) {
        try { fs.mkdirSync(STYLES_DIR); } catch (_) {}
    }

    try {
        // Step 1: Fetch GitHub page and find assets
        const assets = await fetchGitHubPage();
        const matches = findMatchingAssets(assets);

        if (Object.keys(matches).length === 0) {
            throw new Error(
                "No matching asset files found. GitHub might have changed their asset naming scheme."
            );
        }

        // Step 1.5: Handle repos-overview special case and validate content
        console.log("\n--- Validating content ---");

        // Special handling for repos-overview - try direct fetch if not found
        if (!matches["repos-overview"] && matches["wp-runtime"]) {
            console.log(
                "repos-overview not found in page assets, attempting direct fetch..."
            );
            const directResult = await tryFetchReposOverviewDirectly(assets);
            if (directResult) {
                matches["repos-overview"] = directResult.url;
                console.log(
                    `Found repos-overview via direct fetch: ${directResult.url}`
                );

                // Remove wp-runtime from matches since we only use it to get repos-overview
                delete matches["wp-runtime"];
                console.log(
                    "Removed wp-runtime from final output (used only for repos-overview discovery)"
                );
            } else {
                // If repos-overview discovery failed, still remove wp-runtime
                delete matches["wp-runtime"];
                console.log(
                    "Removed wp-runtime from final output (repos-overview discovery failed)"
                );
            }
        } else if (matches["wp-runtime"] && !matches["repos-overview"]) {
            // If we have wp-runtime but no repos-overview, remove wp-runtime
            delete matches["wp-runtime"];
            console.log(
                "Removed wp-runtime from final output (not needed without repos-overview discovery)"
            );
        }

        if (matches["wp-runtime"]) {
            const isValid = await validateWpRuntimeContent(
                matches["wp-runtime"]
            );
            if (!isValid) {
                console.warn(
                    "Warning: wp-runtime file does not contain repos-overview references"
                );
                console.warn(
                    "Continuing with download, but the file may not load the repos-overview chunk"
                );
            }
        }

    console.log("\n--- Downloading Files ---");

        // Step 2: Download matched files
        const downloadedFiles = {};
        for (const [key, url] of Object.entries(matches)) {
            const filename = `${key}-new.js`;
            const downloadPath = path.join(TEMP_DIR, filename);
            await downloadFile(url, downloadPath);
            downloadedFiles[key] = downloadPath;
        }

    console.log("\n--- Processing Files (Skipping Formatting) ---");

        // Step 3: Work directly with downloaded minified files
        const processedFiles = {};
    for (const [key, downloadPath] of Object.entries(downloadedFiles)) {
            console.log(`Processing ${key} (keeping minified format)...`);
            const content = fs.readFileSync(downloadPath, "utf8");
            processedFiles[key] = content;
        }

        console.log("\n--- Applying Patches ---");

        // Step 4: Apply patches to minified files
        // Helper to extract inner rules of all @layer blocks, removing wrappers
        function extractLayerContent(css) {
            let result = "";
            let pos = 0;
            while (true) {
                const idx = css.indexOf("@layer", pos);
                if (idx === -1) break;
                // Find opening brace of this layer block
                const openBrace = css.indexOf("{", idx);
                if (openBrace === -1) break; // malformed
                let depth = 0;
                let i = openBrace;
                for (; i < css.length; i++) {
                    const ch = css[i];
                    if (ch === '{') depth++;
                    else if (ch === '}') {
                        depth--;
                        if (depth === 0) { i++; break; }
                    }
                }
                const block = css.substring(openBrace + 1, i - 1); // contents inside layer braces
                result += block.trim() + "\n";
                pos = i;
            }
            return result.trim() + (result.endsWith("\n") ? "" : "\n");
        }

    for (const [key, content] of Object.entries(processedFiles)) {
            const originalLength = content.length;
            let modifiedContent = content;

            if (key === "primer-react-css") {
                // Extract only rules inside @layer blocks and drop the @layer wrapper for legacy compatibility
                const extracted = extractLayerContent(content);
                if (extracted && extracted.length > 0) {
                    console.log(`  Extracted @layer content: ${content.length} → ${extracted.length} chars`);
                    modifiedContent = extracted;
                    // Programmatic Prettier formatting (parser: css)
                    if (prettier) {
                        try {
                            const pretty = await prettier.format(modifiedContent, { parser: 'css' });
                            if (pretty && typeof pretty.then === 'function') {
                                // Shouldn't happen after await, but guard just in case
                                modifiedContent = await pretty;
                            } else {
                                modifiedContent = pretty;
                            }
                            console.log("  Applied Prettier CSS formatting (programmatic)");
                        } catch (e) {
                            console.log(`  Prettier CSS formatting failed: ${e.message}`);
                        }
                    }
                } else {
                    console.log("  ⚠️  No @layer content extracted; keeping original CSS");
                }
            } else {
                // Apply text patches to formatted content (if patch file exists)
                const patchFile = `${key}.txt`;
                const patchPath = path.join(__dirname, patchFile);

                if (fs.existsSync(patchPath)) {
                    modifiedContent = applyTextPatches(content, patchFile);
                } else {
                    console.log(
                        `No patch file found for ${key}, using original content`
                    );
                }
            }

            if (modifiedContent && typeof modifiedContent.then === 'function') {
                modifiedContent = await modifiedContent;
            }
            console.log(`  Processed ${key}: ${originalLength} → ${modifiedContent.length} chars`);
            processedFiles[key] = modifiedContent;
        }

        console.log("\n--- Updating Script Files ---");

        // Step 4: Replace files in scripts directory
    for (const [key, contentRaw] of Object.entries(processedFiles)) {
        let content = contentRaw;
        if (content && typeof content.then === 'function') {
            content = await content; // resolve any stray promise
        }
        const isCss = key === "primer-react-css";
        const targetDir = isCss ? STYLES_DIR : SCRIPTS_DIR;
        const targetFile = path.join(targetDir, TARGET_FILES[key]);

            if (isDryRun) {
                console.log(
            `Would update: ${TARGET_FILES[key]} (${content.length} chars) in ${path.relative(__dirname, targetDir)}`
                );
                continue;
            }

            const backupFile = `${targetFile}.backup.${Date.now()}`;

            // Create backup
            if (fs.existsSync(targetFile)) {
                fs.copyFileSync(targetFile, backupFile);
                console.log(`Created backup: ${path.basename(backupFile)}`);
            }

            // Write and format the final content
            if (typeof content !== 'string') {
                content = String(content || '');
            }
            fs.writeFileSync(targetFile, content, 'utf8');

            // Apply Prettier formatting to the final file
            try {
                formatWithPrettier(targetFile);
                if (isCss) {
                    formatCssFileIfNeeded(targetFile);
                }
                console.log(`Updated and formatted: ${TARGET_FILES[key]}`);
            } catch (formatError) {
                console.warn(
                    `  Warning: Final formatting failed for ${TARGET_FILES[key]}: ${formatError.message}`
                );
                if (isCss) {
                    formatCssFileIfNeeded(targetFile);
                }
                console.log(`Updated: ${TARGET_FILES[key]} (unformatted or partially formatted)`);
            }
        }
        console.log("\n--- Cleanup ---");

        // Cleanup temp directory, but preserve debug files if they exist
        if (fs.existsSync(TEMP_DIR)) {
            const debugFiles = fs.readdirSync(TEMP_DIR).filter(
                (file) =>
                    file.includes("react-core-formatted.js") ||
                    file.includes("react-core-temp.js") ||
                    file.includes("-new.js") // Preserve all downloaded files for debugging
            );

            if (debugFiles.length > 0) {
                console.log(
                    `Preserved debug files in temp-downloads: ${debugFiles.join(", ")}`
                );

                // Remove only non-debug files
                const allFiles = fs.readdirSync(TEMP_DIR);
                for (const file of allFiles) {
                    if (!debugFiles.includes(file)) {
                        const filePath = path.join(TEMP_DIR, file);
                        fs.unlinkSync(filePath);
                    }
                }
            } else {
                fs.rmSync(TEMP_DIR, { recursive: true });
                console.log("Cleaned up temporary files");
            }
        }

        if (isDryRun) {
            console.log(
                "\n✅ Dry run completed successfully! Run without --dry-run to apply changes."
            );
        } else {
            console.log("\n✅ Script update completed successfully!");
        }
    } catch (error) {
        console.error("\n❌ Script update failed:", error.message);
        if (error.stack) {
            console.error("\nStack trace:", error.stack);
        }
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = { main };
