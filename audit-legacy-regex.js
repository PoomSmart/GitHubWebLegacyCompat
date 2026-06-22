#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { auditLegacyRegexSyntax } = require("./fix-lookbehind");

const ROOT = __dirname;
const TARGETS = [
    { dir: path.join(ROOT, "scripts"), label: "scripts/", required: false },
    {
        dir: path.join(
            ROOT,
            "layout/Library/Application Support/GitHubWebLegacyCompat"
        ),
        label: "layout/ (injected by tweak)",
        required: true,
    },
];

let failed = false;

for (const { dir, label, required } of TARGETS) {
    if (!fs.existsSync(dir)) {
        console.log(`${label}: (missing)`);
        continue;
    }

    console.log(`\n${label}`);
    let ok = true;

    for (const file of fs.readdirSync(dir).filter((name) => name.endsWith(".js"))) {
        const content = fs.readFileSync(path.join(dir, file), "utf8");
        const audit = auditLegacyRegexSyntax(content);
        const issues =
            audit.lookbehind + audit.namedCapture + audit.unicodeProperty;

        if (issues === 0) continue;

        ok = false;
        console.log(
            `  ⚠️  ${file}: lookbehind=${audit.lookbehind}, namedCapture=${audit.namedCapture}, unicodeProperty=${audit.unicodeProperty}`
        );
        for (const sample of audit.samples) {
            console.log(`      ${sample}`);
        }
    }

    if (ok) {
        console.log("  OK");
    } else if (required) {
        failed = true;
        console.log('  FAIL — run "make assets" after update-scripts.js');
    }
}

if (failed) {
    process.exit(1);
}

console.log("\nAll checked injection bundles are safe for iOS <16.4 regex parsing.");
