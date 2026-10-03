#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

let fetch;
let prettier;

try {
    fetch = globalThis.fetch;
    if (!fetch) throw new Error("fetch not available");
} catch (_) {
    console.log("Using curl as fetch fallback...");
}

try {
    prettier = require("prettier");
} catch (_) {}

const STYLES_DIR = path.join(__dirname, "styles");
const TEMP_DIR = path.join(__dirname, "temp-downloads");

const CSS_PATTERNS = {
    "primer-react-css": /primer-react-css\.[a-f0-9]+\.module\.css$/,
    "primer-css": /primer-[a-f0-9]+\.css$/,
    "issues-react-css": /issues-react\.[a-f0-9]+\.module\.css$/,
};

const CSS_ALTERNATIVE_PATTERNS = {
    "primer-css": /primer.*\.css$/,
    "issues-react-css": /issues-react.*\.module\.css$/,
    "primer-react-css": /primer-react.*\.module\.css$/,
};

const CSS_TARGET_FILES = {
    "primer-react-css": "15.4-primer-react.css",
    "primer-css": "15.4-primer.css",
    "issues-react-css": "15.4-issues-react.css",
};

const LAYER_FIX_FILE = "15.4-layer-fix.css";
const GLOBAL_NAV_CSS_RE = /global-nav-bar\.[a-f0-9]+\.module\.css/;
// Logged-out pages do not link this sheet. Used until a scrape finds the new hash.
const GLOBAL_NAV_CSS_FALLBACK =
    "https://github.githubassets.com/assets/global-nav-bar.718c0a62fde79b18.module.css";

// iOS < 15.4 drops @layer. The polyfill puts those rules back at their old
// specificity, so an unlayered class loses to any stronger layered selector.
// One :not(#\#) on every unlayered class beats that, and repeating it on every
// class in the sheet keeps their order. A layered class that also has a
// :where(button) or :where(a) reset is repeated once so the component rule
// still beats the reset, and still loses to :not(#\#).

const SCRAPE_PAGES = [
    "https://github.com/microsoft/vscode/issues",
    "https://github.com/microsoft/vscode",
];

function normalizeGithubAssetUrl(url) {
    if (!url || !url.includes("github.githubassets.com/assets/")) {
        return null;
    }
    try {
        const parsed = new URL(url);
        if (!/\.css$/i.test(parsed.pathname)) {
            return null;
        }
        return `${parsed.origin}${parsed.pathname}`;
    } catch (_) {
        return null;
    }
}

function extractCssAssetsFromHtml(html) {
    const assetRegex =
        /https:\/\/github\.githubassets\.com\/assets\/[^"']+\.css/g;
    return [...html.matchAll(assetRegex)]
        .map((match) => normalizeGithubAssetUrl(match[0]))
        .filter(Boolean);
}

async function fetchPageHtml(url) {
    if (fetch) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return response.text();
    }
    return execSync(`curl -sL "${url}"`, { encoding: "utf8" });
}

async function collectCssAssetUrls() {
    console.log("Fetching GitHub pages for CSS asset URLs...");
    const assets = new Set();

    for (const url of SCRAPE_PAGES) {
        try {
            const html = await fetchPageHtml(url);
            const found = extractCssAssetsFromHtml(html);
            console.log(`  ${url}: ${found.length} CSS URL(s)`);
            for (const asset of found) {
                assets.add(asset);
            }
        } catch (error) {
            console.log(`  Warning: ${url}: ${error.message}`);
        }
    }

    const list = [...assets];
    console.log(`Found ${list.length} unique CSS asset URL(s) total`);
    return list;
}

function findMatchingCssAssets(assets) {
    const matches = {};

    for (const [key, pattern] of Object.entries(CSS_PATTERNS)) {
        let matchingAsset = assets.find((url) =>
            pattern.test(path.basename(url))
        );

        if (!matchingAsset && CSS_ALTERNATIVE_PATTERNS[key]) {
            matchingAsset = assets.find((url) =>
                CSS_ALTERNATIVE_PATTERNS[key].test(path.basename(url))
            );
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

    if (fetch) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const content = await response.text();
        fs.writeFileSync(outputPath, content);
        console.log(`Downloaded to ${outputPath}`);
        return content;
    }

    execSync(`curl -sL "${url}" -o "${outputPath}"`, { encoding: "utf8" });
    const content = fs.readFileSync(outputPath, "utf8");
    console.log(`Downloaded to ${outputPath}`);
    return content;
}

function extractBlockContents(css, atKeyword) {
    let result = "";
    let pos = 0;
    while (true) {
        const idx = css.indexOf(atKeyword, pos);
        if (idx === -1) break;
        const openBrace = css.indexOf("{", idx);
        if (openBrace === -1) break;
        let depth = 0;
        let i = openBrace;
        for (; i < css.length; i++) {
            const ch = css[i];
            if (ch === "{") depth++;
            else if (ch === "}") {
                depth--;
                if (depth === 0) {
                    i++;
                    break;
                }
            }
        }
        const block = css.substring(openBrace + 1, i - 1);
        result += block.trim() + "\n";
        pos = i;
    }
    return result.trim();
}

function extractModernOnlyCss(css) {
    const layers = extractBlockContents(css, "@layer");
    const containers = extractBlockContents(css, "@container");
    const parts = [];
    if (layers) parts.push(layers);
    if (containers) parts.push(containers);
    const joined = parts.join("\n").trim();
    return joined ? joined + "\n" : "";
}

function stripUnsupportedCss(css) {
    if (!css.includes("::backdrop")) {
        return css.trim() + "\n";
    }

    let result = "";
    let i = 0;
    while (i < css.length) {
        const backdropIdx = css.indexOf("::backdrop", i);
        if (backdropIdx === -1) {
            result += css.slice(i);
            break;
        }

        let ruleStart = css.lastIndexOf("}", backdropIdx);
        ruleStart = ruleStart === -1 ? 0 : ruleStart + 1;
        const brace = css.indexOf("{", backdropIdx);
        if (brace === -1) {
            result += css.slice(i, backdropIdx);
            i = backdropIdx + "::backdrop".length;
            continue;
        }

        let depth = 0;
        let j = brace;
        for (; j < css.length; j++) {
            if (css[j] === "{") depth++;
            else if (css[j] === "}") {
                depth--;
                if (depth === 0) {
                    j++;
                    break;
                }
            }
        }

        result += css.slice(i, ruleStart);
        i = j;
    }

    return result.trim() + "\n";
}

async function formatCssWithPrettier(css) {
    if (!prettier) return css;
    try {
        return await prettier.format(css, { parser: "css" });
    } catch (error) {
        console.log(`  Prettier CSS formatting failed: ${error.message}`);
        return css;
    }
}

function skipCssWs(css, i) {
    while (i < css.length) {
        if (/\s/.test(css[i])) {
            i++;
            continue;
        }
        if (css[i] === "/" && css[i + 1] === "*") {
            const end = css.indexOf("*/", i + 2);
            i = end === -1 ? css.length : end + 2;
            continue;
        }
        break;
    }
    return i;
}

function findCssBlockEnd(css, openIdx) {
    let depth = 0;
    let quote = "";
    for (let j = openIdx; j < css.length; j++) {
        const ch = css[j];
        if (quote) {
            if (ch === "\\") {
                j++;
                continue;
            }
            if (ch === quote) quote = "";
            continue;
        }
        if (ch === '"' || ch === "'") {
            quote = ch;
            continue;
        }
        if (ch === "/" && css[j + 1] === "*") {
            const end = css.indexOf("*/", j + 2);
            j = end === -1 ? css.length : end + 1;
            continue;
        }
        if (ch === "{") depth++;
        else if (ch === "}") {
            depth--;
            if (depth === 0) return j + 1;
        }
    }
    return css.length;
}

function collectStyleRules(css, medias, layered, out) {
    let i = 0;
    while (i < css.length) {
        i = skipCssWs(css, i);
        if (i >= css.length) break;
        const open = css.indexOf("{", i);
        if (open === -1) break;
        const prelude = css.slice(i, open).trim();
        const close = findCssBlockEnd(css, open);
        const body = css.slice(open + 1, close - 1);
        if (/^@/i.test(prelude)) {
            if (/^@(?:media|supports|container)\b/i.test(prelude)) {
                collectStyleRules(body, medias.concat(prelude), layered, out);
            } else if (/^@layer\b/i.test(prelude)) {
                collectStyleRules(body, medias, true, out);
            }
        } else if (prelude) {
            out.push({
                medias: medias.slice(),
                layered: layered,
                selector: prelude,
                body: body.trim(),
            });
        }
        i = close;
    }
}

function splitSelectorList(selector) {
    const parts = [];
    let start = 0;
    let depth = 0;
    let quote = "";
    for (let i = 0; i < selector.length; i++) {
        const ch = selector[i];
        if (quote) {
            if (ch === "\\") {
                i++;
                continue;
            }
            if (ch === quote) quote = "";
            continue;
        }
        if (ch === '"' || ch === "'") {
            quote = ch;
            continue;
        }
        if (ch === "(" || ch === "[") depth++;
        else if (ch === ")" || ch === "]") depth = Math.max(0, depth - 1);
        else if (ch === "," && depth === 0) {
            parts.push(selector.slice(start, i).trim());
            start = i + 1;
        }
    }
    const tail = selector.slice(start).trim();
    if (tail) parts.push(tail);
    return parts;
}

function stripWhere(selector) {
    let out = "";
    let i = 0;
    while (i < selector.length) {
        if (selector.slice(i, i + 7).toLowerCase() === ":where(") {
            let depth = 1;
            i += 7;
            while (i < selector.length && depth) {
                if (selector[i] === "(") depth++;
                else if (selector[i] === ")") depth--;
                i++;
            }
            continue;
        }
        out += selector[i++];
    }
    return out;
}

function isSingleClass(selector) {
    const bare = stripWhere(selector);
    const classes = bare.match(/\.[A-Za-z_][\w-]*/g) || [];
    const attrs = bare.match(/\[[^\]]+\]/g) || [];
    return classes.length === 1 && attrs.length === 0;
}

function repeatClass(selector, className, times) {
    const escaped = className.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp("\\." + escaped + "(?![A-Za-z0-9_-])", "g");
    const existing = selector.match(re);
    if (existing && existing.length >= times) return selector;
    const repeated = new Array(times).fill("." + className).join("");
    return selector.replace(re, repeated);
}

function legacyMediaPrelude(prelude) {
    return prelude
        .replace(/\(\s*width\s*<=\s*/gi, "(max-width:")
        .replace(/\(\s*width\s*>=\s*/gi, "(min-width:");
}

function findResetClasses(rules) {
    const names = new Set();
    const resets =
        /background\s*:\s*(?:0\b|none|transparent)|border\s*:\s*(?:0\b|none)|padding\s*:\s*0\b/;
    for (const rule of rules) {
        if (!rule.layered || !resets.test(rule.body)) continue;
        for (const part of splitSelectorList(rule.selector)) {
            if (!isSingleClass(part)) continue;
            if (
                !/:where\([^)]*\b(?:button|a)\b/i.test(part) &&
                !/^(?:button|a)\./i.test(part)
            ) {
                continue;
            }
            const match = stripWhere(part).match(/\.([A-Za-z_][\w-]*)/);
            if (match) names.add(match[1]);
        }
    }
    return names;
}

function promoteUnlayeredSelector(selector) {
    const parts = splitSelectorList(selector).filter(function (part) {
        return part.indexOf(":has(") === -1 && /\.[A-Za-z_]/.test(part);
    });
    if (!parts.length) return "";
    return parts
        .map(function (part) {
            if (part.indexOf(":not(#\\#)") !== -1) return part;
            return ":not(#\\#)" + part;
        })
        .join(", ");
}

function emitLayerFixCss(rules) {
    const chunks = [];
    for (const rule of rules) {
        if (!rule.selector) continue;
        let text = rule.selector + " {\n" + rule.body + "\n}";
        for (let i = rule.medias.length - 1; i >= 0; i--) {
            text = legacyMediaPrelude(rule.medias[i]) + " {\n" + text + "\n}";
        }
        chunks.push(text);
    }
    return chunks.join("\n\n") + (chunks.length ? "\n" : "");
}

function buildLayerFixCss(primerCss, navCss) {
    const primerRules = [];
    const navRules = [];
    if (primerCss) collectStyleRules(primerCss, [], false, primerRules);
    if (navCss) collectStyleRules(navCss, [], false, navRules);

    const resetClasses = findResetClasses(primerRules);
    const layeredOut = [];
    for (const rule of primerRules) {
        if (!rule.layered) continue;
        let selector = rule.selector;
        let hit = false;
        for (const name of resetClasses) {
            if (selector.indexOf("." + name) === -1) continue;
            selector = repeatClass(selector, name, 2);
            hit = true;
        }
        if (!hit) continue;
        layeredOut.push({
            medias: rule.medias,
            selector: selector,
            body: rule.body,
        });
    }

    const unlayeredOut = [];
    for (const rule of navRules) {
        if (rule.layered) continue;
        const selector = promoteUnlayeredSelector(rule.selector);
        if (!selector) continue;
        unlayeredOut.push({
            medias: rule.medias,
            selector: selector,
            body: rule.body,
        });
    }

    return emitLayerFixCss(layeredOut.concat(unlayeredOut));
}

function findGlobalNavAsset(assetUrls) {
    for (const url of assetUrls || []) {
        if (GLOBAL_NAV_CSS_RE.test(path.basename(url))) return url;
    }
    return null;
}

async function writeGeneratedLayerFix(primerCss, navCss, isDryRun) {
    if (!primerCss || !navCss) {
        console.warn(
            "  Skipping layer-fix. Need both primer-react CSS and global-nav CSS."
        );
        return;
    }
    let css = buildLayerFixCss(primerCss, navCss);
    if (!css.trim()) {
        console.warn("  No layer-fix rules extracted");
        return;
    }
    css = await formatCssWithPrettier(css);
    const resetCount = (css.match(/:where\(\s*(?:button|a)\b/g) || []).length;
    const bumpCount = (css.match(/:not\(#\\#\)/g) || []).length;
    console.log(
        "  Layer fix: " +
            resetCount +
            " element-reset rules, " +
            bumpCount +
            " unlayered bumps"
    );
    const targetFile = path.join(STYLES_DIR, LAYER_FIX_FILE);
    if (isDryRun) {
        console.log("Would update " + LAYER_FIX_FILE);
        return;
    }
    fs.writeFileSync(targetFile, css, "utf8");
    console.log("  Updated " + LAYER_FIX_FILE);
}

async function processCssContent(content) {
    const extracted = extractModernOnlyCss(content);
    if (extracted && extracted.length > 0) {
        console.log(
            `  Extracted modern CSS (@layer/@container): ${content.length} → ${extracted.length} chars`
        );
        const formatted = await formatCssWithPrettier(extracted);
        return { content: formatted, mode: "layer-extracted" };
    }

    const trimmed = content.trim();
    if (!trimmed) {
        console.log("  ⚠️  Empty CSS input");
        return { content: "", mode: "empty" };
    }

    const passthrough = stripUnsupportedCss(trimmed);
    console.log(
        `  No @layer/@container wrappers; keeping plain CSS (${content.length} → ${passthrough.length} chars)`
    );
    const formatted = await formatCssWithPrettier(passthrough);
    return { content: formatted, mode: "passthrough" };
}

function formatCssFileIfNeeded(filePath) {
    try {
        execSync(`npx prettier --write --parser css "${filePath}"`, {
            cwd: __dirname,
            stdio: "pipe",
        });
    } catch (error) {
        console.warn(
            `  Warning: Prettier formatting failed for ${path.basename(filePath)}: ${error.message}`
        );
    }
}

async function main() {
    const isDryRun =
        process.argv.includes("--dry-run") || process.argv.includes("-n");

    console.log("Starting CSS asset update...");
    if (isDryRun) {
        console.log("🔍 DRY RUN MODE - No files will be modified\n");
    }

    if (!fs.existsSync(STYLES_DIR)) {
        fs.mkdirSync(STYLES_DIR, { recursive: true });
    }
    if (!fs.existsSync(TEMP_DIR)) {
        fs.mkdirSync(TEMP_DIR);
    }

    try {
        const assets = await collectCssAssetUrls();
        const matches = findMatchingCssAssets(assets);

        if (Object.keys(matches).length === 0) {
            throw new Error(
                "No matching CSS assets found. GitHub may have changed asset URLs."
            );
        }

        console.log("\n--- Downloading and processing CSS ---");

        const rawByKey = {};
        for (const [key, url] of Object.entries(matches)) {
            const downloadPath = path.join(TEMP_DIR, `${key}-new.css`);
            const raw = await downloadFile(url, downloadPath);
            rawByKey[key] = raw;

            const targetFileName = CSS_TARGET_FILES[key];
            if (!targetFileName) continue;

            const processed = await processCssContent(raw);
            const targetFile = path.join(STYLES_DIR, targetFileName);

            if (isDryRun) {
                console.log(
                    `Would update ${targetFileName} (${processed.content.length} chars, ${processed.mode})`
                );
                continue;
            }

            const backupFile = `${targetFile}.backup.${Date.now()}`;
            if (fs.existsSync(targetFile)) {
                fs.copyFileSync(targetFile, backupFile);
                console.log(`  Backup: ${path.basename(backupFile)}`);
            }

            fs.writeFileSync(targetFile, processed.content, "utf8");
            formatCssFileIfNeeded(targetFile);
            console.log(`  Updated ${targetFileName}`);
        }

        const navUrl = findGlobalNavAsset(assets) || GLOBAL_NAV_CSS_FALLBACK;
        let navCss = "";
        try {
            navCss = await downloadFile(
                navUrl,
                path.join(TEMP_DIR, "global-nav-css-new.css")
            );
            if (!/\.[A-Za-z_][\w-]*\s*[{:]/.test(navCss)) {
                console.warn("  Global nav CSS has no class rules");
                navCss = "";
            } else if (!findGlobalNavAsset(assets)) {
                console.log("  Using fallback global nav URL");
            }
        } catch (error) {
            console.warn("  Could not download global nav CSS: " + error.message);
        }

        console.log("\n--- Layer fixup ---");
        await writeGeneratedLayerFix(
            rawByKey["primer-react-css"] || "",
            navCss,
            isDryRun
        );

        if (fs.existsSync(TEMP_DIR)) {
            fs.rmSync(TEMP_DIR, { recursive: true, force: true });
            console.log("\nCleaned up temporary files");
        }

        if (isDryRun) {
            console.log(
                "\n✅ Dry run completed. Run without --dry-run to apply changes."
            );
        } else {
            console.log("\n✅ CSS update completed.");
            console.log('Run "make assets" before packaging.');
        }
    } catch (error) {
        console.error("\n❌ Update failed:", error.message);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = {
    main,
    processCssContent,
    stripUnsupportedCss,
    buildLayerFixCss,
};
