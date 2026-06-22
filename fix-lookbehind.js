/**
 * Rewrites RegExp patterns that use lookbehind so they run on iOS < 16.4 WebKit.
 *
 * Negative: (?<!LB)REST  →  (?!(?:LB)(?=REST))REST
 * Positive: (?<=LB)REST  →  (?:LB)(?=REST)REST   (when LB ends with a consuming branch)
 */

function findBalancedClose(str, openIndex) {
    if (str[openIndex] !== "(") return -1;
    let depth = 0;
    for (let i = openIndex; i < str.length; i++) {
        if (str[i] === "\\") {
            i++;
            continue;
        }
        if (str[i] === "(") depth++;
        else if (str[i] === ")") {
            depth--;
            if (depth === 0) return i;
        }
    }
    return -1;
}

function readLookbehind(pattern, index) {
    if (pattern.slice(index, index + 3) !== "(?<") return null;

    const kind = pattern[index + 3];
    if (kind !== "!" && kind !== "=") return null;

    const lbOpen = index;
    const lbEnd = findBalancedClose(pattern, lbOpen);
    if (lbEnd === -1) return null;

    return {
        kind: kind === "!" ? "negative" : "positive",
        start: index,
        end: lbEnd + 1,
        body: pattern.slice(index + 4, lbEnd),
    };
}

function readRegexTerm(pattern, index) {
    let i = index;
    if (i >= pattern.length) return null;

    let baseEnd = i;

    if (pattern[i] === "(") {
        if (pattern[i + 1] === "?") {
            const nested = readLookbehind(pattern, i);
            if (nested) {
                const after = readRegexSequenceUntilAlternation(
                    pattern,
                    nested.end
                );
                if (!after || !after.text) return null;
                return {
                    text: pattern.slice(i, after.end),
                    end: after.end,
                };
            }
            if (pattern[i + 2] === ":") {
                const close = findBalancedClose(pattern, i);
                if (close === -1) return null;
                baseEnd = close + 1;
            } else {
                return null;
            }
        } else {
            const close = findBalancedClose(pattern, i);
            if (close === -1) return null;
            baseEnd = close + 1;
        }
    } else if (pattern[i] === "[") {
        let j = i + 1;
        while (j < pattern.length) {
            if (pattern[j] === "\\") {
                j += 2;
                continue;
            }
            if (pattern[j] === "]") {
                baseEnd = j + 1;
                break;
            }
            j++;
        }
        if (baseEnd === i) return null;
    } else if (pattern[i] === "\\") {
        baseEnd = i + 2;
    } else if (pattern[i] === ".") {
        baseEnd = i + 1;
    } else {
        let j = i;
        while (j < pattern.length) {
            if (pattern[j] === "\\") {
                j += 2;
                continue;
            }
            if (/[?*+{|[|().]/.test(pattern[j])) break;
            j++;
        }
        baseEnd = j > i ? j : i + 1;
    }

    let end = baseEnd;
    while (end < pattern.length && /[?*+{]/.test(pattern[end])) {
        if (pattern[end] === "{") {
            const close = pattern.indexOf("}", end);
            if (close === -1) return null;
            end = close + 1;
        } else {
            end++;
        }
    }

    return { text: pattern.slice(i, end), end };
}

function readRegexSequenceUntilAlternation(pattern, index) {
    let pos = index;
    let text = "";

    while (pos < pattern.length) {
        if (pattern[pos] === "|" || pattern[pos] === ")") break;
        const term = readRegexTerm(pattern, pos);
        if (!term || term.end === pos) break;
        text += term.text;
        pos = term.end;
    }

    if (!text) return null;
    return { text, end: pos };
}

function rewritePatternOnce(pattern) {
    let result = "";
    let pos = 0;
    let changed = false;

    while (pos < pattern.length) {
        const lb = readLookbehind(pattern, pos);
        if (!lb) {
            result += pattern[pos];
            pos++;
            continue;
        }

        const rest = readRegexSequenceUntilAlternation(pattern, lb.end);
        if (!rest || !rest.text) {
            result += pattern[pos];
            pos++;
            continue;
        }

        if (
            lb.kind === "positive" &&
            lb.body === "^|\\s|\\p{P}|\\p{S}" &&
            /^\(\[-\.\\w+\]\+\)@/.test(rest.text)
        ) {
            result += `(?:^|[\\s\\p{P}\\p{S}])(?=[-.\w+]+@)${rest.text}`;
        } else if (lb.kind === "negative") {
            result += `(?!(?:${lb.body})(?=${rest.text}))${rest.text}`;
        } else {
            result += `(?:${lb.body})(?=${rest.text})${rest.text}`;
        }

        changed = true;
        pos = rest.end;
    }

    return { pattern: result, changed };
}

function rewritePattern(pattern) {
    let current = pattern;
    let changed = false;

    for (let i = 0; i < 20; i++) {
        const step = rewritePatternOnce(current);
        if (!step.changed) break;
        current = step.pattern;
        changed = true;
    }

    return { pattern: current, changed };
}

function extractRegexLiterals(code) {
    const literals = [];
    let i = 0;

    while (i < code.length) {
        if (code[i] !== "/") {
            i++;
            continue;
        }
        if (i === 0 || !/[\(=\[,!:;?&|{+\-*%<>]/.test(code[i - 1])) {
            i++;
            continue;
        }

        let j = i + 1;
        let inClass = false;
        let escaped = false;
        for (; j < code.length; j++) {
            const ch = code[j];
            if (escaped) {
                escaped = false;
                continue;
            }
            if (ch === "\\") {
                escaped = true;
                continue;
            }
            if (ch === "[") inClass = true;
            else if (ch === "]" && inClass) inClass = false;
            else if (ch === "/" && !inClass) break;
        }

        if (j >= code.length) {
            i++;
            continue;
        }

        let flagsEnd = j + 1;
        while (flagsEnd < code.length && /[dgimsuvy]/.test(code[flagsEnd])) {
            flagsEnd++;
        }

        const raw = code.slice(i, flagsEnd);
        const lastSlash = raw.lastIndexOf("/");
        const pattern = raw.slice(1, lastSlash);
        const flags = raw.slice(lastSlash + 1);

        if (/\(\?<[=!]/.test(pattern)) {
            literals.push({ start: i, end: flagsEnd, pattern, flags, raw });
        }

        i = flagsEnd;
    }

    return literals;
}

function extractRegExpStringLiterals(code) {
    const results = [];
    const re = /(?:new\s+RegExp|RegExp)\(\s*(["'`])((?:\\.|(?!\1)[^\\])*)\1/g;
    let match;

    while ((match = re.exec(code)) !== null) {
        const pattern = match[2].replace(/\\(.)/g, "$1");
        if (!/\(\?<[=!]/.test(pattern)) continue;

        results.push({
            start: match.index,
            end: re.lastIndex,
            quote: match[1],
            pattern: match[2],
            decodedPattern: pattern,
        });
    }

    return results;
}

function escapePatternForQuote(pattern, quote) {
    return pattern.replace(/\\/g, "\\\\").replace(new RegExp(quote, "g"), `\\${quote}`);
}

function fixTrailingDotsReplace(source) {
    const re =
        /(\b[\w$]+)\s*=\s*\1\.replace\(\/(?<!\.)\.\+\$\/([gimsuvy]*),\s*""\s*\)/g;
    let changed = false;
    const output = source.replace(re, (_, ident) => {
        changed = true;
        return `${ident}.endsWith("...")?${ident}:${ident}.replace(/\.+$/, "")`;
    });
    return { code: output, fixes: changed ? 1 : 0 };
}

let babelCore;
try {
    babelCore = require("@babel/core");
} catch (_) {}

function countNamedCaptureGroups(code) {
    return (code.match(/\(\?<[A-Za-z_$][\w$]*>/g) || []).length;
}

function auditLegacyRegexSyntax(code) {
    const lookbehind = (code.match(/\(\?<[=!]/g) || []).length;
    const namedCapture = countNamedCaptureGroups(code);
    const unicodeProperty = (code.match(/\\p\{/g) || []).length;
    const samples = [];

    let match;
    const sampleRe = /\(\?<[=![A-Za-z_$][^)]{0,60}/g;
    while ((match = sampleRe.exec(code)) !== null && samples.length < 5) {
        samples.push(match[0]);
    }

    return { lookbehind, namedCapture, unicodeProperty, samples };
}

function fixNamedCaptureGroupsInJs(code) {
    if (!babelCore || countNamedCaptureGroups(code) === 0) {
        return { code, fixes: 0 };
    }

    const plugin = require("@babel/plugin-transform-named-capturing-groups-regex");
    const result = babelCore.transformSync(code, {
        plugins: [plugin],
        compact: false,
        retainLines: true,
        parserOpts: { sourceType: "unambiguous" },
    });

    if (!result?.code) {
        return { code, fixes: 0 };
    }

    const remaining = countNamedCaptureGroups(result.code);
    return {
        code: result.code,
        fixes: remaining < countNamedCaptureGroups(code) ? 1 : 0,
        remaining,
    };
}

function fixLegacyRegexInJs(code) {
    let output = code;
    let fixes = 0;
    let remaining = 0;

    const namedFix = fixNamedCaptureGroupsInJs(output);
    output = namedFix.code;
    fixes += namedFix.fixes || 0;
    remaining += namedFix.remaining || 0;

    const lbFix = fixLookbehindInJs(output);
    output = lbFix.code;
    fixes += lbFix.fixes;
    remaining += lbFix.remaining;

    return { code: output, fixes, remaining };
}

function fixLookbehindInJs(code) {
    let output = code;
    let fixes = 0;

    const dotsFix = fixTrailingDotsReplace(output);
    output = dotsFix.code;
    fixes += dotsFix.fixes;

    const literals = extractRegexLiterals(output);
    for (let i = literals.length - 1; i >= 0; i--) {
        const lit = literals[i];
        const rewritten = rewritePattern(lit.pattern);
        if (!rewritten.changed) continue;

        if (/\(\?<[=!]/.test(rewritten.pattern)) continue;

        const newRaw = `/${rewritten.pattern}/${lit.flags}`;
        output = output.slice(0, lit.start) + newRaw + output.slice(lit.end);
        fixes++;
    }

    const regExpStrings = extractRegExpStringLiterals(output);
    for (let i = regExpStrings.length - 1; i >= 0; i--) {
        const item = regExpStrings[i];
        const rewritten = rewritePattern(item.decodedPattern);
        if (!rewritten.changed) continue;

        if (/\(\?<[=!]/.test(rewritten.pattern)) continue;

        const escaped = escapePatternForQuote(rewritten.pattern, item.quote);
        const newLiteral = `${item.quote}${escaped}${item.quote}`;
        const callPrefix = output.slice(item.start, item.end);
        const replacedCall = callPrefix.replace(
            `${item.quote}${item.pattern}${item.quote}`,
            newLiteral
        );

        output =
            output.slice(0, item.start) +
            replacedCall +
            output.slice(item.end);
        fixes++;
    }

    const remaining = (output.match(/\(\?<[=!]/g) || []).length;
    return { code: output, fixes, remaining };
}

module.exports = {
    auditLegacyRegexSyntax,
    fixLegacyRegexInJs,
    fixLookbehindInJs,
    fixNamedCaptureGroupsInJs,
    rewritePattern,
};
