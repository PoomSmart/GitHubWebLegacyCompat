#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// For Node.js < 18, we need to use a fetch polyfill or alternative
let fetch;
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

const SCRIPTS_DIR = path.join(__dirname, "scripts");
const TEMP_DIR = path.join(__dirname, "temp-downloads");

// File patterns to search for
const FILE_PATTERNS = {
    "issues-react": /issues-react-[a-f0-9]+\.js$/,
    "issue-viewer": /ui_packages_issue-viewer_.*-[a-f0-9]+\.js$/,
    "list-view": /ui_packages_list-view_.*-[a-f0-9]+\.js$/,
    "react-core": /react-core-[a-f0-9]+\.js$/,
};

// Alternative patterns if primary ones don't match
const ALTERNATIVE_PATTERNS = {
    "issue-viewer": /issue-viewer.*-[a-f0-9]+\.js$/,
    "list-view": /list-view.*-[a-f0-9]+\.js$/,
};

// Target files in scripts directory
const TARGET_FILES = {
    "issues-react": "16.4-issues-react.js",
    "issue-viewer": "16.4-issue-viewer.js",
    "list-view": "16.4-list-view.js",
    "react-core": "16.4-react-core.js",
};

async function fetchGitHubPage() {
    console.log("Fetching GitHub issues page to find asset URLs...");

    try {
        let html;
        if (fetch) {
            // Use built-in fetch
            const response = await fetch(
                "https://github.com/microsoft/vscode/issues"
            );
            html = await response.text();
        } else {
            // Use curl as fallback
            html = execSync(
                'curl -s "https://github.com/microsoft/vscode/issues"',
                { encoding: "utf8" }
            );
        }

        // Extract all GitHub assets URLs from the page
        const assetRegex =
            /https:\/\/github\.githubassets\.com\/assets\/[^"']+\.js/g;
        const assets = [...html.matchAll(assetRegex)].map((match) => match[0]);

        console.log(`Found ${assets.length} JavaScript asset URLs`);
        return assets;
    } catch (error) {
        console.error("Error fetching GitHub page:", error);
        process.exit(1);
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
        // Run Prettier on the downloaded file using local config
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

function readPatchFile(filename) {
    const filePath = path.join(__dirname, filename);
    if (!fs.existsSync(filePath)) {
        console.warn(`Patch file ${filename} not found`);
        return null;
    }

    const content = fs.readFileSync(filePath, "utf8");
    const lines = content.split("\n");

    let isOldSection = false;
    let isNewSection = false;
    let oldPattern = "";
    let newReplacement = "";

    for (const line of lines) {
        if (line.startsWith("# Old")) {
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

    return {
        oldPattern: oldPattern.trim(),
        newReplacement: newReplacement.trim(),
    };
}

function applyTextPatches(content, patchFile) {
    const patch = readPatchFile(patchFile);
    if (!patch || !patch.oldPattern || !patch.newReplacement) {
        console.warn(`Invalid or missing patch in ${patchFile}`);
        return content;
    }

    console.log(`Applying patch from ${patchFile}:`);
    console.log(
        `  Old: ${patch.oldPattern.substring(0, 60)}${patch.oldPattern.length > 60 ? "..." : ""}`
    );
    console.log(
        `  New: ${patch.newReplacement.substring(0, 60)}${patch.newReplacement.length > 60 ? "..." : ""}`
    );

    const originalLength = content.length;
    let modifiedContent = content;

    // Handle special cases based on the patch content
    if (patch.oldPattern.includes("(?<!\\.)")) {
        // Handle negative lookbehind for dot patterns (issue-viewer.txt and list-view.txt)
        // Use direct string replacement since the pattern is now simplified
        modifiedContent = content.replace(
            patch.oldPattern,
            patch.newReplacement
        );
    } else if (patch.oldPattern.includes("coreLoader: async function e({")) {
        // Handle function parameter renaming (issues-react.txt)
        modifiedContent = content.replace(
            /coreLoader: async function e\(/g,
            "coreLoader: async function e_("
        );
    } else {
        // Default: simple string replacement
        modifiedContent = content.replace(
            patch.oldPattern,
            patch.newReplacement
        );
    }

    console.log(
        `  Patch result: ${originalLength} → ${modifiedContent.length} chars (${modifiedContent.length - originalLength >= 0 ? "+" : ""}${modifiedContent.length - originalLength})`
    );

    return modifiedContent;
}

async function applyDiffPatch(filePath) {
    console.log(`Applying react-core.diff to ${filePath}...`);

    try {
        // Create a temporary copy for patching
        const tempFile = path.join(TEMP_DIR, "react-core-temp.js");
        fs.copyFileSync(filePath, tempFile);

        // Apply the patch using the patch command
        const diffPath = path.join(__dirname, "react-core.diff");

        try {
            execSync(`patch --fuzz=3 "${tempFile}" < "${diffPath}"`, {
                cwd: __dirname,
                stdio: "pipe", // Capture output to handle errors gracefully
            });

            console.log("  ✅ react-core.diff applied successfully");
        } catch (patchError) {
            // Try with more aggressive fuzzy matching
            console.log("  🔄 Trying patch with more fuzzy matching...");
            try {
                execSync(
                    `patch --fuzz=5 --force "${tempFile}" < "${diffPath}"`,
                    {
                        cwd: __dirname,
                        stdio: "pipe",
                    }
                );
                console.log("  ✅ react-core.diff applied with fuzzy matching");
            } catch (patchError2) {
                // If patch fails, fall back to manual transformations
                console.log(
                    "  ⚠️  react-core.diff failed to apply, falling back to manual transformations..."
                );
                console.log(`  📁 Keeping ${tempFile} for debugging`);
                console.log(
                    `  📁 Keeping ${filePath} (formatted) for debugging`
                );

                let content = fs.readFileSync(filePath, "utf8");

                // Fallback transformations based on the exact patterns in react-core.diff
                const transformations = [
                    // Main function declarations: function e( -> function e_(
                    { from: /function e\(/g, to: "function e_(" },

                    // Prototype assignments: var t = e.prototype -> var t = e_.prototype
                    {
                        from: /var t = e\.prototype/g,
                        to: "var t = e_.prototype",
                    },

                    // Function assignments: = function e( -> = function e_(
                    { from: /= function e\(/g, to: "= function e_(" },

                    // Recursive calls: n[r] = e( -> n[r] = e_(
                    { from: /n\[r\] = e\(/g, to: "n[r] = e_(" },

                    // Return statements: return e -> return e_
                    { from: /return e$/gm, to: "return e_" },
                    { from: /return e;/g, to: "return e_;" },

                    // Function calls within returns: return e( -> return e_(
                    { from: /return e\(/g, to: "return e_(" },

                    // New instances: new e( -> new e_(
                    { from: /new e\(/g, to: "new e_(" },

                    // Method calls: e.registerId -> e_.registerId
                    { from: /e\.registerId/g, to: "e_.registerId" },

                    // Prototype method definitions: e.prototype. -> e_.prototype.
                    { from: /e\.prototype\./g, to: "e_.prototype." },

                    // Function parameter shadowing: function (e, t) with first param -> function (e__, t)
                    {
                        from: /\(t\.insertRule = function \(e, t\)/g,
                        to: "(t.insertRule = function (e__, t)",
                    },
                    {
                        from: /this\.sheet\.insertRule\(t, e\)/g,
                        to: "this.sheet.insertRule(t, e__)",
                    },

                    // Set function parameter: set: function (e) -> set: function (e_)
                    { from: /set: function \(e\)/g, to: "set: function (e_)" },
                    { from: /: e;$/gm, to: ": e_;" },

                    // Async function: async function e({ -> async function e_({
                    {
                        from: /coreLoader: async function e\(/g,
                        to: "coreLoader: async function e_(",
                    },
                ];

                let changesApplied = 0;

                for (const transform of transformations) {
                    const before = content;
                    content = content.replace(transform.from, transform.to);
                    if (content !== before) {
                        changesApplied++;
                    }
                }

                console.log(
                    `  Applied ${changesApplied} fallback transformations`
                );
                fs.writeFileSync(tempFile, content);
            }
        }

        // Read the patched content
        const patchedContent = fs.readFileSync(tempFile, "utf8");

        // Only clean up temp file if patch was successful
        if (fs.existsSync(tempFile) && !tempFile.includes("debug")) {
            fs.unlinkSync(tempFile);
        }

        return patchedContent;
    } catch (error) {
        console.error("Error applying react-core patches:", error);
        throw error;
    }
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

    try {
        // Step 1: Fetch GitHub page and find assets
        const assets = await fetchGitHubPage();
        const matches = findMatchingAssets(assets);

        if (Object.keys(matches).length === 0) {
            throw new Error(
                "No matching asset files found. GitHub might have changed their asset naming scheme."
            );
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

        console.log("\n--- Formatting Files ---");

        // Step 3: Format downloaded files with Prettier
        const formattedFiles = {};
        for (const [key, downloadPath] of Object.entries(downloadedFiles)) {
            console.log(`Formatting ${key}...`);
            const formattedContent = formatWithPrettier(downloadPath);
            formattedFiles[key] = formattedContent;
        }

        console.log("\n--- Applying Patches ---");

        // Step 4: Apply patches to formatted files
        const processedFiles = {};

        for (const [key, content] of Object.entries(formattedFiles)) {
            const originalLength = content.length;
            let modifiedContent = content;

            if (key === "react-core") {
                // For react-core, try applying the diff before formatting for better compatibility
                const unformattedPath = downloadedFiles[key];

                // Try to apply diff to unformatted file first
                const tempFile = path.join(
                    TEMP_DIR,
                    "react-core-temp-unformatted.js"
                );
                fs.copyFileSync(unformattedPath, tempFile);

                const diffPath = path.join(__dirname, "react-core.diff");
                let diffApplied = false;

                try {
                    execSync(`patch "${tempFile}" < "${diffPath}"`, {
                        cwd: __dirname,
                        stdio: "pipe",
                    });

                    console.log(
                        "  ✅ react-core.diff applied to unformatted file"
                    );

                    // Now format the patched file
                    modifiedContent = formatWithPrettier(tempFile);
                    diffApplied = true;
                } catch (patchError) {
                    console.log(
                        "  🔄 Patch failed on unformatted file, trying formatted file..."
                    );

                    // Fall back to the original approach - format first, then patch
                    const tempPath = path.join(TEMP_DIR, `${key}-formatted.js`);
                    fs.writeFileSync(tempPath, content);
                    modifiedContent = await applyDiffPatch(tempPath);
                }

                // Clean up temporary file
                if (fs.existsSync(tempFile)) {
                    fs.unlinkSync(tempFile);
                }
            } else {
                // Apply text patches for other files
                const patchFile = `${key}.txt`;
                modifiedContent = applyTextPatches(content, patchFile);
            }

            console.log(
                `  Processed ${key}: ${originalLength} → ${modifiedContent.length} chars`
            );
            processedFiles[key] = modifiedContent;
        }

        console.log("\n--- Updating Script Files ---");

        // Step 4: Replace files in scripts directory
        for (const [key, content] of Object.entries(processedFiles)) {
            const targetFile = path.join(SCRIPTS_DIR, TARGET_FILES[key]);

            if (isDryRun) {
                console.log(
                    `Would update: ${TARGET_FILES[key]} (${content.length} chars)`
                );
                continue;
            }

            const backupFile = `${targetFile}.backup.${Date.now()}`;

            // Create backup
            if (fs.existsSync(targetFile)) {
                fs.copyFileSync(targetFile, backupFile);
                console.log(`Created backup: ${path.basename(backupFile)}`);
            }

            // Write new content
            fs.writeFileSync(targetFile, content);
            console.log(`Updated: ${TARGET_FILES[key]}`);
        }
        console.log("\n--- Cleanup ---");

        // Cleanup temp directory, but preserve debug files if they exist
        if (fs.existsSync(TEMP_DIR)) {
            const debugFiles = fs
                .readdirSync(TEMP_DIR)
                .filter(
                    (file) =>
                        file.includes("react-core-formatted.js") ||
                        file.includes("react-core-temp.js")
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
