"use strict";
(globalThis.webpackChunk_github_ui_github_ui =
    globalThis.webpackChunk_github_ui_github_ui || []).push([
    [
        "vendors-node_modules_fzy_js_index_js-node_modules_dom-input-range_dist_index_js",
        "vendors-node_modules_fzy_js_index_js-node_modules_github_g-emoji-element_dist_index_js-node_m-11dcf6",
    ],
    {
        91385: (e, t, n) => {
            n.d(t, { Xq: () => s, ai: () => i, fN: () => o, qA: () => l });
            var r = -1 / 0,
                i = 1 / 0;
            function a(e, t, n, i) {
                for (
                    var a = e.length,
                        o = t.length,
                        s = e.toLowerCase(),
                        l = t.toLowerCase(),
                        u = (function (e) {
                            for (
                                var t = e.length, n = Array(t), r = "/", i = 0;
                                i < t;
                                i++
                            ) {
                                var a,
                                    o = e[i];
                                ("/" === r
                                    ? (n[i] = 0.9)
                                    : "-" === r || "_" === r || " " === r
                                      ? (n[i] = 0.8)
                                      : "." === r
                                        ? (n[i] = 0.6)
                                        : (a = r).toLowerCase() === a &&
                                            o.toUpperCase() === o
                                          ? (n[i] = 0.7)
                                          : (n[i] = 0),
                                    (r = o));
                            }
                            return n;
                        })(t, u),
                        c = 0;
                    c < a;
                    c++
                ) {
                    ((n[c] = Array(o)), (i[c] = Array(o)));
                    for (
                        var d = r, f = c === a - 1 ? -0.005 : -0.01, h = 0;
                        h < o;
                        h++
                    )
                        if (s[c] === l[h]) {
                            var m = r;
                            (c
                                ? h &&
                                  (m = Math.max(
                                      i[c - 1][h - 1] + u[h],
                                      n[c - 1][h - 1] + 1
                                  ))
                                : (m = -0.005 * h + u[h]),
                                (n[c][h] = m),
                                (i[c][h] = d = Math.max(m, d + f)));
                        } else ((n[c][h] = r), (i[c][h] = d += f));
                }
            }
            function o(e, t) {
                var n = e.length,
                    o = t.length;
                if (!n || !o) return r;
                if (n === o) return i;
                if (o > 1024) return r;
                var s = Array(n),
                    l = Array(n);
                return (a(e, t, s, l), l[n - 1][o - 1]);
            }
            function s(e, t) {
                var n = e.length,
                    i = t.length,
                    o = Array(n);
                if (!n || !i) return o;
                if (n === i) {
                    for (var s = 0; s < n; s++) o[s] = s;
                    return o;
                }
                if (i > 1024) return o;
                var l = Array(n),
                    u = Array(n);
                a(e, t, l, u);
                for (var c = !1, s = n - 1, d = i - 1; s >= 0; s--)
                    for (; d >= 0; d--)
                        if (l[s][d] !== r && (c || l[s][d] === u[s][d])) {
                            ((c = s && d && u[s][d] === l[s - 1][d - 1] + 1),
                                (o[s] = d--));
                            break;
                        }
                return o;
            }
            function l(e, t) {
                ((e = e.toLowerCase()), (t = t.toLowerCase()));
                for (var n = e.length, r = 0, i = 0; r < n; r += 1)
                    if (0 === (i = t.indexOf(e[r], i) + 1)) return !1;
                return !0;
            }
        },
        90204: (e, t, n) => {
            n.d(t, { R3: () => a });
            let r = new Set([
                "\u{1F44B}",
                "\u{1F91A}",
                "\u{1F590}\uFE0F",
                "\u270B",
                "\u{1F596}",
                "\u{1F44C}",
                "\u{1F90F}",
                "\u270C\uFE0F",
                "\u{1F91E}",
                "\u{1F91F}",
                "\u{1F918}",
                "\u{1F919}",
                "\u{1F448}",
                "\u{1F449}",
                "\u{1F446}",
                "\u{1F595}",
                "\u{1F447}",
                "\u261D\uFE0F",
                "\u{1F44D}",
                "\u{1F44E}",
                "\u270A",
                "\u{1F44A}",
                "\u{1F91B}",
                "\u{1F91C}",
                "\u{1F44F}",
                "\u{1F64C}",
                "\u{1F450}",
                "\u{1F932}",
                "\u{1F64F}",
                "\u270D\uFE0F",
                "\u{1F485}",
                "\u{1F933}",
                "\u{1F4AA}",
                "\u{1F9B5}",
                "\u{1F9B6}",
                "\u{1F442}",
                "\u{1F9BB}",
                "\u{1F443}",
                "\u{1F476}",
                "\u{1F9D2}",
                "\u{1F466}",
                "\u{1F467}",
                "\u{1F9D1}",
                "\u{1F471}",
                "\u{1F468}",
                "\u{1F9D4}",
                "\u{1F471}\u200D\u2642\uFE0F",
                "\u{1F468}\u200D\u{1F9B0}",
                "\u{1F468}\u200D\u{1F9B1}",
                "\u{1F468}\u200D\u{1F9B3}",
                "\u{1F468}\u200D\u{1F9B2}",
                "\u{1F469}",
                "\u{1F471}\u200D\u2640\uFE0F",
                "\u{1F469}\u200D\u{1F9B0}",
                "\u{1F469}\u200D\u{1F9B1}",
                "\u{1F469}\u200D\u{1F9B3}",
                "\u{1F469}\u200D\u{1F9B2}",
                "\u{1F9D3}",
                "\u{1F474}",
                "\u{1F475}",
                "\u{1F64D}",
                "\u{1F64D}\u200D\u2642\uFE0F",
                "\u{1F64D}\u200D\u2640\uFE0F",
                "\u{1F64E}",
                "\u{1F64E}\u200D\u2642\uFE0F",
                "\u{1F64E}\u200D\u2640\uFE0F",
                "\u{1F645}",
                "\u{1F645}\u200D\u2642\uFE0F",
                "\u{1F645}\u200D\u2640\uFE0F",
                "\u{1F646}",
                "\u{1F646}\u200D\u2642\uFE0F",
                "\u{1F646}\u200D\u2640\uFE0F",
                "\u{1F481}",
                "\u{1F481}\u200D\u2642\uFE0F",
                "\u{1F481}\u200D\u2640\uFE0F",
                "\u{1F64B}",
                "\u{1F64B}\u200D\u2642\uFE0F",
                "\u{1F64B}\u200D\u2640\uFE0F",
                "\u{1F9CF}",
                "\u{1F9CF}\u200D\u2642\uFE0F",
                "\u{1F9CF}\u200D\u2640\uFE0F",
                "\u{1F647}",
                "\u{1F647}\u200D\u2642\uFE0F",
                "\u{1F647}\u200D\u2640\uFE0F",
                "\u{1F926}",
                "\u{1F926}\u200D\u2642\uFE0F",
                "\u{1F926}\u200D\u2640\uFE0F",
                "\u{1F937}",
                "\u{1F937}\u200D\u2642\uFE0F",
                "\u{1F937}\u200D\u2640\uFE0F",
                "\u{1F468}\u200D\u2695\uFE0F",
                "\u{1F469}\u200D\u2695\uFE0F",
                "\u{1F468}\u200D\u{1F393}",
                "\u{1F469}\u200D\u{1F393}",
                "\u{1F468}\u200D\u{1F3EB}",
                "\u{1F469}\u200D\u{1F3EB}",
                "\u{1F468}\u200D\u2696\uFE0F",
                "\u{1F469}\u200D\u2696\uFE0F",
                "\u{1F468}\u200D\u{1F33E}",
                "\u{1F469}\u200D\u{1F33E}",
                "\u{1F468}\u200D\u{1F373}",
                "\u{1F469}\u200D\u{1F373}",
                "\u{1F468}\u200D\u{1F527}",
                "\u{1F469}\u200D\u{1F527}",
                "\u{1F468}\u200D\u{1F3ED}",
                "\u{1F469}\u200D\u{1F3ED}",
                "\u{1F468}\u200D\u{1F4BC}",
                "\u{1F469}\u200D\u{1F4BC}",
                "\u{1F468}\u200D\u{1F52C}",
                "\u{1F469}\u200D\u{1F52C}",
                "\u{1F468}\u200D\u{1F4BB}",
                "\u{1F469}\u200D\u{1F4BB}",
                "\u{1F468}\u200D\u{1F3A4}",
                "\u{1F469}\u200D\u{1F3A4}",
                "\u{1F468}\u200D\u{1F3A8}",
                "\u{1F469}\u200D\u{1F3A8}",
                "\u{1F468}\u200D\u2708\uFE0F",
                "\u{1F469}\u200D\u2708\uFE0F",
                "\u{1F468}\u200D\u{1F680}",
                "\u{1F469}\u200D\u{1F680}",
                "\u{1F468}\u200D\u{1F692}",
                "\u{1F469}\u200D\u{1F692}",
                "\u{1F46E}",
                "\u{1F46E}\u200D\u2642\uFE0F",
                "\u{1F46E}\u200D\u2640\uFE0F",
                "\u{1F575}\uFE0F",
                "\u{1F575}\uFE0F\u200D\u2642\uFE0F",
                "\u{1F575}\uFE0F\u200D\u2640\uFE0F",
                "\u{1F482}",
                "\u{1F482}\u200D\u2642\uFE0F",
                "\u{1F482}\u200D\u2640\uFE0F",
                "\u{1F477}",
                "\u{1F477}\u200D\u2642\uFE0F",
                "\u{1F477}\u200D\u2640\uFE0F",
                "\u{1F934}",
                "\u{1F478}",
                "\u{1F473}",
                "\u{1F473}\u200D\u2642\uFE0F",
                "\u{1F473}\u200D\u2640\uFE0F",
                "\u{1F472}",
                "\u{1F9D5}",
                "\u{1F935}",
                "\u{1F470}",
                "\u{1F930}",
                "\u{1F931}",
                "\u{1F47C}",
                "\u{1F385}",
                "\u{1F936}",
                "\u{1F9B8}",
                "\u{1F9B8}\u200D\u2642\uFE0F",
                "\u{1F9B8}\u200D\u2640\uFE0F",
                "\u{1F9B9}",
                "\u{1F9B9}\u200D\u2642\uFE0F",
                "\u{1F9B9}\u200D\u2640\uFE0F",
                "\u{1F9D9}",
                "\u{1F9D9}\u200D\u2642\uFE0F",
                "\u{1F9D9}\u200D\u2640\uFE0F",
                "\u{1F9DA}",
                "\u{1F9DA}\u200D\u2642\uFE0F",
                "\u{1F9DA}\u200D\u2640\uFE0F",
                "\u{1F9DB}",
                "\u{1F9DB}\u200D\u2642\uFE0F",
                "\u{1F9DB}\u200D\u2640\uFE0F",
                "\u{1F9DC}",
                "\u{1F9DC}\u200D\u2642\uFE0F",
                "\u{1F9DC}\u200D\u2640\uFE0F",
                "\u{1F9DD}",
                "\u{1F9DD}\u200D\u2642\uFE0F",
                "\u{1F9DD}\u200D\u2640\uFE0F",
                "\u{1F486}",
                "\u{1F486}\u200D\u2642\uFE0F",
                "\u{1F486}\u200D\u2640\uFE0F",
                "\u{1F487}",
                "\u{1F487}\u200D\u2642\uFE0F",
                "\u{1F487}\u200D\u2640\uFE0F",
                "\u{1F6B6}",
                "\u{1F6B6}\u200D\u2642\uFE0F",
                "\u{1F6B6}\u200D\u2640\uFE0F",
                "\u{1F9CD}",
                "\u{1F9CD}\u200D\u2642\uFE0F",
                "\u{1F9CD}\u200D\u2640\uFE0F",
                "\u{1F9CE}",
                "\u{1F9CE}\u200D\u2642\uFE0F",
                "\u{1F9CE}\u200D\u2640\uFE0F",
                "\u{1F468}\u200D\u{1F9AF}",
                "\u{1F469}\u200D\u{1F9AF}",
                "\u{1F468}\u200D\u{1F9BC}",
                "\u{1F469}\u200D\u{1F9BC}",
                "\u{1F468}\u200D\u{1F9BD}",
                "\u{1F469}\u200D\u{1F9BD}",
                "\u{1F3C3}",
                "\u{1F3C3}\u200D\u2642\uFE0F",
                "\u{1F3C3}\u200D\u2640\uFE0F",
                "\u{1F483}",
                "\u{1F57A}",
                "\u{1F574}\uFE0F",
                "\u{1F9D6}",
                "\u{1F9D6}\u200D\u2642\uFE0F",
                "\u{1F9D6}\u200D\u2640\uFE0F",
                "\u{1F9D7}",
                "\u{1F9D7}\u200D\u2642\uFE0F",
                "\u{1F9D7}\u200D\u2640\uFE0F",
                "\u{1F3C7}",
                "\u{1F3C2}",
                "\u{1F3CC}\uFE0F",
                "\u{1F3CC}\uFE0F\u200D\u2642\uFE0F",
                "\u{1F3CC}\uFE0F\u200D\u2640\uFE0F",
                "\u{1F3C4}",
                "\u{1F3C4}\u200D\u2642\uFE0F",
                "\u{1F3C4}\u200D\u2640\uFE0F",
                "\u{1F6A3}",
                "\u{1F6A3}\u200D\u2642\uFE0F",
                "\u{1F6A3}\u200D\u2640\uFE0F",
                "\u{1F3CA}",
                "\u{1F3CA}\u200D\u2642\uFE0F",
                "\u{1F3CA}\u200D\u2640\uFE0F",
                "\u26F9\uFE0F",
                "\u26F9\uFE0F\u200D\u2642\uFE0F",
                "\u26F9\uFE0F\u200D\u2640\uFE0F",
                "\u{1F3CB}\uFE0F",
                "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F",
                "\u{1F3CB}\uFE0F\u200D\u2640\uFE0F",
                "\u{1F6B4}",
                "\u{1F6B4}\u200D\u2642\uFE0F",
                "\u{1F6B4}\u200D\u2640\uFE0F",
                "\u{1F6B5}",
                "\u{1F6B5}\u200D\u2642\uFE0F",
                "\u{1F6B5}\u200D\u2640\uFE0F",
                "\u{1F938}",
                "\u{1F938}\u200D\u2642\uFE0F",
                "\u{1F938}\u200D\u2640\uFE0F",
                "\u{1F93D}",
                "\u{1F93D}\u200D\u2642\uFE0F",
                "\u{1F93D}\u200D\u2640\uFE0F",
                "\u{1F93E}",
                "\u{1F93E}\u200D\u2642\uFE0F",
                "\u{1F93E}\u200D\u2640\uFE0F",
                "\u{1F939}",
                "\u{1F939}\u200D\u2642\uFE0F",
                "\u{1F939}\u200D\u2640\uFE0F",
                "\u{1F9D8}",
                "\u{1F9D8}\u200D\u2642\uFE0F",
                "\u{1F9D8}\u200D\u2640\uFE0F",
                "\u{1F6C0}",
                "\u{1F6CC}",
                "\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}",
                "\u{1F46D}",
                "\u{1F46B}",
                "\u{1F46C}",
            ]);
            function i(e) {
                return r.has(e);
            }
            function a(e, t) {
                let n = o(e);
                if (!i(n)) return e;
                let r = u(t);
                return r
                    ? n
                          .split("\u200D")
                          .map((e) => (i(e) ? s(e, r) : e))
                          .join("\u200D")
                    : e;
            }
            function o(e) {
                return [...e].filter((e) => !l(e.codePointAt(0))).join("");
            }
            function s(e, t) {
                let n = [...e].map((e) => e.codePointAt(0));
                return (
                    n[1] && (l(n[1]) || 65039 === n[1])
                        ? (n[1] = t)
                        : n.splice(1, 0, t),
                    String.fromCodePoint(...n)
                );
            }
            function l(e) {
                return e >= 127995 && e <= 127999;
            }
            function u(e) {
                switch (e) {
                    case 1:
                        return 127995;
                    case 2:
                        return 127996;
                    case 3:
                        return 127997;
                    case 4:
                        return 127998;
                    case 5:
                        return 127999;
                    default:
                        return null;
                }
            }
            let GEmojiElement = class GEmojiElement extends HTMLElement {
                get image() {
                    return this.firstElementChild instanceof HTMLImageElement
                        ? this.firstElementChild
                        : null;
                }
                get tone() {
                    return (this.getAttribute("tone") || "")
                        .split(" ")
                        .map((e) => {
                            let t = parseInt(e, 10);
                            return t >= 0 && t <= 5 ? t : 0;
                        })
                        .join(" ");
                }
                set tone(e) {
                    this.setAttribute("tone", e);
                }
                connectedCallback() {
                    if (
                        null === this.image &&
                        !GEmojiElement.emojiSupportFunction()
                    ) {
                        let e = this.getAttribute("fallback-src");
                        if (e) {
                            this.textContent = "";
                            let t = (function (e) {
                                let t = document.createElement("img");
                                return (
                                    (t.className = "emoji"),
                                    (t.alt = e.getAttribute("alias") || ""),
                                    (t.height = 20),
                                    (t.width = 20),
                                    t
                                );
                            })(this);
                            ((t.src = e), this.appendChild(t));
                        }
                    }
                    this.hasAttribute("tone") && c(this);
                }
                static get observedAttributes() {
                    return ["tone"];
                }
                attributeChangedCallback(e) {
                    "tone" === e && c(this);
                }
            };
            function c(e) {
                if (e.image) return;
                let t = e.tone.split(" ").map((e) => parseInt(e, 10));
                if (0 === t.length) e.textContent = o(e.textContent || "");
                else if (1 === t.length) {
                    let n = t[0];
                    e.textContent =
                        0 === n
                            ? o(e.textContent || "")
                            : a(e.textContent || "", n);
                } else
                    e.textContent = (function (e, t) {
                        let n = o(e);
                        if (!i(n)) return e;
                        let r = t.map((e) => u(e));
                        return n
                            .split("\u200D")
                            .map((e) => {
                                if (!i(e)) return e;
                                let t = r.shift();
                                return t ? s(e, t) : e;
                            })
                            .join("\u200D");
                    })(e.textContent || "", t);
            }
            ((GEmojiElement.emojiSupportFunction = function () {
                let e = /\bWindows NT 6.1\b/.test(navigator.userAgent),
                    t = /\bWindows NT 6.2\b/.test(navigator.userAgent),
                    n = /\bWindows NT 6.3\b/.test(navigator.userAgent),
                    r = /\bFreeBSD\b/.test(navigator.userAgent),
                    i =
                        /\bLinux\b/.test(navigator.userAgent) &&
                        !/\bAndroid\b/.test(navigator.userAgent);
                return !(e || t || n || i || r);
            }),
                window.customElements.get("g-emoji") ||
                    ((window.GEmojiElement = GEmojiElement),
                    window.customElements.define("g-emoji", GEmojiElement)));
        },
        44358: (e, t, n) => {
            function r(e, t) {
                var n, r, i;
                let a = e.value.slice(
                        0,
                        null != (n = e.selectionStart) ? n : void 0
                    ),
                    o = e.value.slice(
                        null != (r = e.selectionEnd) ? r : void 0
                    ),
                    s = !0;
                e.contentEditable = "true";
                try {
                    s = document.execCommand("insertText", !1, t);
                } catch (e) {
                    s = !1;
                }
                if (
                    ((e.contentEditable = "false"),
                    s &&
                        !e.value
                            .slice(
                                0,
                                null != (i = e.selectionStart) ? i : void 0
                            )
                            .endsWith(t) &&
                        (s = !1),
                    !s)
                ) {
                    try {
                        document.execCommand("ms-beginUndoUnit");
                    } catch (e) {}
                    e.value = a + t + o;
                    try {
                        document.execCommand("ms-endUndoUnit");
                    } catch (e) {}
                    e.dispatchEvent(
                        new CustomEvent("change", {
                            bubbles: !0,
                            cancelable: !0,
                        })
                    );
                }
            }
            n.d(t, { B1: () => I });
            let i = new WeakMap();
            function a(e) {
                let { currentTarget: t } = e,
                    n =
                        "KeyV" === e.code &&
                        (e.ctrlKey || e.metaKey) &&
                        e.shiftKey;
                (n || (n && e.altKey)) && i.set(t, !0);
            }
            function o(e) {
                let { currentTarget: t } = e;
                i.delete(t);
            }
            function s(e) {
                var t;
                return null != (t = i.get(e)) && t;
            }
            function l(e) {
                e.addEventListener("paste", u);
            }
            function u(e) {
                let t = e.clipboardData,
                    { currentTarget: n } = e;
                if (s(n) || !t || !t.types.includes("text/html")) return;
                let i = e.currentTarget;
                if (
                    !(i instanceof HTMLTextAreaElement) ||
                    (function (e) {
                        let t = e.selectionStart || 0;
                        return 0 !== t && "@" === e.value.substring(t - 1, t);
                    })(i)
                )
                    return;
                let a = t.getData("text/plain"),
                    o = t.getData("text/html"),
                    l = o.replace(/\u00A0/g, " ").replace(/\uC2A0/g, " ");
                if (!o || !(a = a.trim())) return;
                let u = new DOMParser().parseFromString(l, "text/html"),
                    d = (function (e, t) {
                        let n = t.firstChild(),
                            r = e,
                            i = 0,
                            a = 0;
                        for (; n && a < 1e4; ) {
                            var o;
                            a++;
                            let e = c(n)
                                ? (n.textContent || "").replace(
                                      /[\t\n\r ]+/g,
                                      " "
                                  )
                                : (null == n ? void 0 : n.wholeText) || "";
                            if (
                                !(o = e) ||
                                (null == o ? void 0 : o.trim().length) === 0
                            ) {
                                n = t.nextNode();
                                continue;
                            }
                            if (!c(n)) {
                                ((i += e
                                    .replace(/[\t\n\r ]+/g, " ")
                                    .trimStart().length),
                                    (n = t.nextNode()));
                                continue;
                            }
                            let s = r.indexOf(e, i);
                            if (s >= 0) {
                                let t = (function (e, t) {
                                    var n, r, i;
                                    let a = e.href || "";
                                    return (function (e) {
                                        var t;
                                        return (
                                            (null == (t = e.textContent)
                                                ? void 0
                                                : t.slice(0, 1)) === "@" &&
                                            "user" ===
                                                e.getAttribute(
                                                    "data-hovercard-type"
                                                )
                                        );
                                    })(e) ||
                                        (function (e) {
                                            var t;
                                            return (
                                                (null == (t = e.textContent)
                                                    ? void 0
                                                    : t.slice(0, 1)) === "@" &&
                                                "team" ===
                                                    e.getAttribute(
                                                        "data-hovercard-type"
                                                    )
                                            );
                                        })(e)
                                        ? t
                                        : (n = e).className.indexOf(
                                                "commit-link"
                                            ) >= 0 ||
                                            (n.getAttribute(
                                                "data-hovercard-type"
                                            ) &&
                                                "user" !==
                                                    n.getAttribute(
                                                        "data-hovercard-type"
                                                    )) ||
                                            ((r = a),
                                            (i = t),
                                            (r =
                                                "/" === r.slice(-1)
                                                    ? r.slice(0, -1)
                                                    : r),
                                            (i =
                                                "/" === i.slice(-1)
                                                    ? i.slice(0, -1)
                                                    : i),
                                            r.toLowerCase() === i.toLowerCase())
                                          ? a
                                          : `[${t}](${a})`;
                                })(n, e);
                                ((r =
                                    r.slice(0, s) + t + r.slice(s + e.length)),
                                    (i = s + t.length));
                            }
                            n = t.nextNode();
                        }
                        return 1e4 === a ? e : r;
                    })(
                        a,
                        u.createTreeWalker(u.body, NodeFilter.SHOW_ALL, (e) =>
                            e.parentNode && c(e.parentNode)
                                ? NodeFilter.FILTER_REJECT
                                : NodeFilter.FILTER_ACCEPT
                        )
                    );
                d !== a && (e.stopPropagation(), e.preventDefault(), r(i, d));
            }
            function c(e) {
                var t;
                return (
                    (null == (t = e.tagName) ? void 0 : t.toLowerCase()) ===
                        "a" && e.hasAttribute("href")
                );
            }
            function d(e) {
                (e.addEventListener("dragover", h),
                    e.addEventListener("drop", f),
                    e.addEventListener("paste", m));
            }
            function f(e) {
                let t = e.dataTransfer;
                if (!t || Array.from(t.types).indexOf("Files") >= 0 || !g(t))
                    return;
                let n = v(t);
                if (!n.some(y)) return;
                (e.stopPropagation(), e.preventDefault());
                let i = e.currentTarget;
                i instanceof HTMLTextAreaElement && r(i, n.map(p).join(""));
            }
            function h(e) {
                let t = e.dataTransfer;
                t && (t.dropEffect = "link");
            }
            function m(e) {
                let { currentTarget: t } = e;
                if (s(t)) return;
                let n = e.clipboardData;
                if (!n || !g(n)) return;
                let i = v(n);
                if (!i.some(y)) return;
                (e.stopPropagation(), e.preventDefault());
                let a = e.currentTarget;
                a instanceof HTMLTextAreaElement && r(a, i.map(p).join(""));
            }
            function p(e) {
                return y(e)
                    ? `
![](${e})
`
                    : e;
            }
            function g(e) {
                return Array.from(e.types).indexOf("text/uri-list") >= 0;
            }
            function v(e) {
                return (e.getData("text/uri-list") || "").split(`\r
`);
            }
            let E = /\.(gif|png|jpe?g)$/i;
            function y(e) {
                return E.test(e);
            }
            let b = new WeakMap();
            function C(e, t) {
                var n;
                (b.set(
                    e,
                    (null == (n = null == t ? void 0 : t.defaultPlainTextPaste)
                        ? void 0
                        : n.urlLinks) === !0
                ),
                    e.addEventListener("paste", x));
            }
            function x(e) {
                var t, n, i;
                let { currentTarget: a } = e,
                    o = null != (t = b.get(a)) && t,
                    l = s(a);
                if ((!o && l) || (o && !l)) return;
                let u = e.clipboardData;
                if (!u || !Array.from(u.types).includes("text/plain")) return;
                let c = e.currentTarget;
                if (!(c instanceof HTMLTextAreaElement)) return;
                let d = u.getData("text/plain");
                if (
                    !d ||
                    !A(d) ||
                    (function (e) {
                        let t = e.selectionStart || 0;
                        return t > 1 && "](" === e.value.substring(t - 2, t);
                    })(c)
                )
                    return;
                let f = c.value.substring(c.selectionStart, c.selectionEnd);
                if (f.length) {
                    A(f.trim()) ||
                        (e.stopPropagation(),
                        e.preventDefault(),
                        r(c, ((n = f), (i = d.trim()), `[${n}](${i})`)));
                }
            }
            function A(e) {
                try {
                    let t = new URL(e);
                    return L(t.href).trim() === L(e).trim();
                } catch (e) {
                    return !1;
                }
            }
            function L(e) {
                return e.endsWith("/") ? e.slice(0, e.length - 1) : e;
            }
            function O(e) {
                (e.addEventListener("dragover", T),
                    e.addEventListener("drop", w),
                    e.addEventListener("paste", S));
            }
            function w(e) {
                let t = e.dataTransfer;
                if (!t || Array.from(t.types).indexOf("Files") >= 0) return;
                let n = _(t);
                if (!n) return;
                (e.stopPropagation(), e.preventDefault());
                let i = e.currentTarget;
                i instanceof HTMLTextAreaElement && r(i, n);
            }
            function T(e) {
                let t = e.dataTransfer;
                t && (t.dropEffect = "copy");
            }
            function S(e) {
                let { currentTarget: t } = e;
                if (s(t) || !e.clipboardData) return;
                let n = _(e.clipboardData);
                if (!n) return;
                (e.stopPropagation(), e.preventDefault());
                let i = e.currentTarget;
                i instanceof HTMLTextAreaElement && r(i, n);
            }
            function R(e) {
                return (
                    (e.textContent || "")
                        .trim()
                        .replace(/\|/g, "\\|")
                        .replace(/\n/g, " ") || "\xa0"
                );
            }
            function _(e) {
                if (-1 === Array.from(e.types).indexOf("text/html")) return;
                let t = e.getData("text/html");
                if (!/<table/i.test(t)) return;
                let n = t.substring(0, t.indexOf("<table")),
                    r = t.lastIndexOf("</table>");
                if (!n || !r) return;
                let i = t.substring(r + 8),
                    a = new DOMParser()
                        .parseFromString(t, "text/html")
                        .querySelector("table");
                if (
                    !(a =
                        !a || a.closest("[data-paste-markdown-skip]")
                            ? null
                            : a)
                )
                    return;
                let o = (function (e) {
                    let t = Array.from(e.querySelectorAll("tr")),
                        n = t.shift();
                    if (!n) return "";
                    let r = Array.from(n.querySelectorAll("td, th")).map(R),
                        i = r.map(() => "--"),
                        a = `${r.join(" | ")}
${i.join(" | ")}
`,
                        o = t.map((e) =>
                            Array.from(e.querySelectorAll("td"))
                                .map(R)
                                .join(" | ")
                        ).join(`
`);
                    return `
${a}${o}

`;
                })(a);
                if (o) return [n, o, i].join("").replace(/<meta.*?>/, "");
            }
            function N(e) {
                e.addEventListener("paste", j);
            }
            function j(e) {
                let { currentTarget: t } = e;
                if (s(t)) return;
                let n = e.clipboardData;
                if (!n || !(Array.from(n.types).indexOf("text/x-gfm") >= 0))
                    return;
                let i = e.currentTarget;
                if (!(i instanceof HTMLTextAreaElement)) return;
                let a = n.getData("text/x-gfm");
                a && (e.stopPropagation(), e.preventDefault(), r(i, a));
            }
            function I(e, t) {
                for (let n of (e.addEventListener("keydown", a),
                [O, d, C, N, l]))
                    n(e, t);
                return (
                    e.addEventListener("paste", o),
                    {
                        unsubscribe: () => {
                            (e.removeEventListener("keydown", a),
                                e.removeEventListener("paste", o),
                                e.removeEventListener("dragover", T),
                                e.removeEventListener("drop", w),
                                e.removeEventListener("paste", S),
                                e.removeEventListener("paste", u),
                                e.removeEventListener("dragover", h),
                                e.removeEventListener("drop", f),
                                e.removeEventListener("paste", m),
                                e.removeEventListener("paste", x),
                                e.removeEventListener("paste", j));
                        },
                    }
                );
            }
        },
        24249: (e, t, n) => {
            n.d(t, { Qr: () => InputRange });
            let InputStyleCloneUpdateEvent = class InputStyleCloneUpdateEvent extends Event {
                constructor() {
                    super("update");
                }
            };
            let r = new WeakMap();
            let InputStyleClone = class InputStyleClone extends EventTarget {
                #e = new MutationObserver(() => this.#t());
                #n = new ResizeObserver(() => this.#r());
                #i;
                #a = document.createElement("div");
                #o = document.createElement("div");
                static for(e) {
                    let t = r.get(e);
                    return (
                        t || ((t = new InputStyleClone(e)), r.set(e, t)),
                        t
                    );
                }
                constructor(e) {
                    (super(),
                        (this.#i = new WeakRef(e)),
                        (this.#a.style.position = "absolute"),
                        (this.#a.style.pointerEvents = "none"),
                        this.#a.setAttribute("aria-hidden", "true"),
                        this.#a.appendChild(this.#o),
                        (this.#o.style.pointerEvents = "none"),
                        (this.#o.style.userSelect = "none"),
                        (this.#o.style.overflow = "hidden"),
                        (this.#o.style.display = "block"),
                        (this.#o.style.visibility = "hidden"),
                        e instanceof HTMLTextAreaElement
                            ? ((this.#o.style.whiteSpace = "pre-wrap"),
                              (this.#o.style.wordWrap = "break-word"))
                            : ((this.#o.style.whiteSpace = "nowrap"),
                              (this.#o.style.display = "table-cell"),
                              (this.#o.style.verticalAlign = "middle")),
                        e.after(this.#a),
                        this.#t(),
                        this.#s(),
                        this.#e.observe(e, {
                            attributeFilter: ["style", "dir"],
                        }),
                        this.#n.observe(e),
                        document.addEventListener("scroll", this.#l, {
                            capture: !0,
                        }),
                        window.addEventListener("resize", this.#l, {
                            capture: !0,
                        }),
                        e.addEventListener("input", this.#u, { capture: !0 }));
                }
                get element() {
                    return this.#o;
                }
                forceUpdate() {
                    (this.#t(), this.#s());
                }
                disconnect() {
                    (this.#a?.remove(),
                        this.#e.disconnect(),
                        this.#n.disconnect(),
                        document.removeEventListener("scroll", this.#l, {
                            capture: !0,
                        }),
                        window.removeEventListener("resize", this.#l, {
                            capture: !0,
                        }));
                    let e = this.#c;
                    e &&
                        (e.removeEventListener("input", this.#u, {
                            capture: !0,
                        }),
                        r.delete(e));
                }
                get #c() {
                    return this.#i?.deref();
                }
                #d(e) {
                    let t = this.#c;
                    return t ? e(t) : this.disconnect();
                }
                #f = 0;
                #h = 0;
                #m() {
                    this.#d((e) => {
                        let t = window.getComputedStyle(e);
                        ((this.#o.style.height = t.height),
                            (this.#o.style.width = t.width),
                            e.clientHeight !== this.#o.clientHeight &&
                                (this.#o.style.height = `calc(${t.height} + ${e.clientHeight - this.#o.clientHeight}px)`),
                            e.clientWidth !== this.#o.clientWidth &&
                                (this.#o.style.width = `calc(${t.width} + ${e.clientWidth - this.#o.clientWidth}px)`));
                        let n = e.getBoundingClientRect(),
                            r = this.#o.getBoundingClientRect();
                        ((this.#f = this.#f + n.left - r.left),
                            (this.#h = this.#h + n.top - r.top),
                            (this.#o.style.transform = `translate(${this.#f}px, ${this.#h}px)`),
                            (this.#o.scrollTop = e.scrollTop),
                            (this.#o.scrollLeft = e.scrollLeft),
                            this.dispatchEvent(
                                new InputStyleCloneUpdateEvent()
                            ));
                    });
                }
                #p = !1;
                #r() {
                    this.#p ||
                        ((this.#p = !0),
                        requestAnimationFrame(() => {
                            (this.#m(), (this.#p = !1));
                        }));
                }
                #t() {
                    this.#d((e) => {
                        let t = window.getComputedStyle(e);
                        for (let e of i) this.#o.style[e] = t[e];
                        this.#r();
                    });
                }
                #s() {
                    this.#d((e) => {
                        ((this.#o.textContent = e.value), this.#m());
                    });
                }
                #u = () => this.#s();
                #l = (e) => {
                    this.#d((t) => {
                        (e.target === document ||
                            e.target === window ||
                            (e.target instanceof Node &&
                                e.target.contains(t))) &&
                            this.#r();
                    });
                };
            };
            let i = [
                "direction",
                "writingMode",
                "unicodeBidi",
                "textOrientation",
                "boxSizing",
                "borderTopWidth",
                "borderRightWidth",
                "borderBottomWidth",
                "borderLeftWidth",
                "borderStyle",
                "paddingTop",
                "paddingRight",
                "paddingBottom",
                "paddingLeft",
                "fontStyle",
                "fontVariant",
                "fontWeight",
                "fontStretch",
                "fontSize",
                "fontSizeAdjust",
                "lineHeight",
                "fontFamily",
                "textAlign",
                "textTransform",
                "textIndent",
                "textDecoration",
                "letterSpacing",
                "wordSpacing",
                "tabSize",
                "MozTabSize",
            ];
            let InputRange = class InputRange {
                #g;
                #v;
                #E;
                constructor(e, t = 0, n = t) {
                    ((this.#g = e), (this.#v = t), (this.#E = n));
                }
                static fromSelection(e) {
                    let { selectionStart: t, selectionEnd: n } = e;
                    return new InputRange(e, t ?? void 0, n ?? void 0);
                }
                get collapsed() {
                    return this.startOffset === this.endOffset;
                }
                get commonAncestorContainer() {
                    return this.#g;
                }
                get endContainer() {
                    return this.#g;
                }
                get startContainer() {
                    return this.#g;
                }
                get startOffset() {
                    return this.#v;
                }
                get endOffset() {
                    return this.#E;
                }
                setStartOffset(e) {
                    this.#v = this.#y(e);
                }
                setEndOffset(e) {
                    this.#E = this.#y(e);
                }
                collapse(e = !1) {
                    e
                        ? this.setEndOffset(this.startOffset)
                        : this.setStartOffset(this.endOffset);
                }
                cloneContents() {
                    return this.#b().cloneContents();
                }
                cloneRange() {
                    return new InputRange(
                        this.#g,
                        this.startOffset,
                        this.endOffset
                    );
                }
                getBoundingClientRect() {
                    return this.#b().getBoundingClientRect();
                }
                getClientRects() {
                    return this.#b().getClientRects();
                }
                toString() {
                    return this.#b().toString();
                }
                getStyleClone() {
                    return this.#C;
                }
                get #C() {
                    return InputStyleClone.for(this.#g);
                }
                get #o() {
                    return this.#C;
                }
                #y(e) {
                    return Math.max(0, Math.min(e, this.#g.value.length));
                }
                #b() {
                    let e = document.createRange(),
                        t = this.#o.element.childNodes[0];
                    return (
                        t &&
                            (e.setStart(t, this.startOffset),
                            e.setEnd(t, this.endOffset)),
                        e
                    );
                }
            };
        },
        59518: (e, t, n) => {
            n.d(t, { L: () => c });
            let r = [
                    "AElig",
                    "AMP",
                    "Aacute",
                    "Acirc",
                    "Agrave",
                    "Aring",
                    "Atilde",
                    "Auml",
                    "COPY",
                    "Ccedil",
                    "ETH",
                    "Eacute",
                    "Ecirc",
                    "Egrave",
                    "Euml",
                    "GT",
                    "Iacute",
                    "Icirc",
                    "Igrave",
                    "Iuml",
                    "LT",
                    "Ntilde",
                    "Oacute",
                    "Ocirc",
                    "Ograve",
                    "Oslash",
                    "Otilde",
                    "Ouml",
                    "QUOT",
                    "REG",
                    "THORN",
                    "Uacute",
                    "Ucirc",
                    "Ugrave",
                    "Uuml",
                    "Yacute",
                    "aacute",
                    "acirc",
                    "acute",
                    "aelig",
                    "agrave",
                    "amp",
                    "aring",
                    "atilde",
                    "auml",
                    "brvbar",
                    "ccedil",
                    "cedil",
                    "cent",
                    "copy",
                    "curren",
                    "deg",
                    "divide",
                    "eacute",
                    "ecirc",
                    "egrave",
                    "eth",
                    "euml",
                    "frac12",
                    "frac14",
                    "frac34",
                    "gt",
                    "iacute",
                    "icirc",
                    "iexcl",
                    "igrave",
                    "iquest",
                    "iuml",
                    "laquo",
                    "lt",
                    "macr",
                    "micro",
                    "middot",
                    "nbsp",
                    "not",
                    "ntilde",
                    "oacute",
                    "ocirc",
                    "ograve",
                    "ordf",
                    "ordm",
                    "oslash",
                    "otilde",
                    "ouml",
                    "para",
                    "plusmn",
                    "pound",
                    "quot",
                    "raquo",
                    "reg",
                    "sect",
                    "shy",
                    "sup1",
                    "sup2",
                    "sup3",
                    "szlig",
                    "thorn",
                    "times",
                    "uacute",
                    "ucirc",
                    "ugrave",
                    "uml",
                    "uuml",
                    "yacute",
                    "yen",
                    "yuml",
                ],
                i = {
                    0: "\uFFFD",
                    128: "\u20AC",
                    130: "\u201A",
                    131: "\u0192",
                    132: "\u201E",
                    133: "\u2026",
                    134: "\u2020",
                    135: "\u2021",
                    136: "\u02C6",
                    137: "\u2030",
                    138: "\u0160",
                    139: "\u2039",
                    140: "\u0152",
                    142: "\u017D",
                    145: "\u2018",
                    146: "\u2019",
                    147: "\u201C",
                    148: "\u201D",
                    149: "\u2022",
                    150: "\u2013",
                    151: "\u2014",
                    152: "\u02DC",
                    153: "\u2122",
                    154: "\u0161",
                    155: "\u203A",
                    156: "\u0153",
                    158: "\u017E",
                    159: "\u0178",
                };
            function a(e) {
                let t = "string" == typeof e ? e.charCodeAt(0) : e;
                return t >= 48 && t <= 57;
            }
            function o(e) {
                let t = "string" == typeof e ? e.charCodeAt(0) : e;
                return (
                    (t >= 97 && t <= 102) ||
                    (t >= 65 && t <= 70) ||
                    (t >= 48 && t <= 57)
                );
            }
            function s(e) {
                return (
                    (function (e) {
                        let t = "string" == typeof e ? e.charCodeAt(0) : e;
                        return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
                    })(e) || a(e)
                );
            }
            var l = n(96206);
            let u = [
                "",
                "Named character references must be terminated by a semicolon",
                "Numeric character references must be terminated by a semicolon",
                "Named character references cannot be empty",
                "Numeric character references cannot be empty",
                "Named character references must be known",
                "Numeric character references cannot be disallowed",
                "Numeric character references cannot be outside the permissible Unicode range",
            ];
            function c(e, t) {
                let n,
                    c,
                    d,
                    f = t || {},
                    h =
                        "string" == typeof f.additional
                            ? f.additional.charCodeAt(0)
                            : f.additional,
                    m = [],
                    p = 0,
                    g = -1,
                    v = "";
                f.position &&
                    ("start" in f.position || "indent" in f.position
                        ? ((c = f.position.indent), (n = f.position.start))
                        : (n = f.position));
                let E = (n ? n.line : 0) || 1,
                    y = (n ? n.column : 0) || 1,
                    b = A();
                for (p--; ++p <= e.length; )
                    if (
                        (10 === d && (y = (c ? c[g] : 0) || 1),
                        38 === (d = e.charCodeAt(p)))
                    ) {
                        let t,
                            n = e.charCodeAt(p + 1);
                        if (
                            9 === n ||
                            10 === n ||
                            12 === n ||
                            32 === n ||
                            38 === n ||
                            60 === n ||
                            Number.isNaN(n) ||
                            (h && n === h)
                        ) {
                            ((v += String.fromCharCode(d)), y++);
                            continue;
                        }
                        let u = p + 1,
                            c = u,
                            g = u;
                        if (35 === n) {
                            g = ++c;
                            let n = e.charCodeAt(g);
                            88 === n || 120 === n
                                ? ((t = "hexadecimal"), (g = ++c))
                                : (t = "decimal");
                        } else t = "named";
                        let E = "",
                            w = "",
                            T = "",
                            S = "named" === t ? s : "decimal" === t ? a : o;
                        for (g--; ++g <= e.length; ) {
                            let n = e.charCodeAt(g);
                            if (!S(n)) break;
                            ((T += String.fromCharCode(n)),
                                "named" === t &&
                                    r.includes(T) &&
                                    ((E = T), (w = (0, l.s)(T))));
                        }
                        let R = 59 === e.charCodeAt(g);
                        if (R) {
                            g++;
                            let e = "named" === t && (0, l.s)(T);
                            e && ((E = T), (w = e));
                        }
                        let _ = 1 + g - u,
                            N = "";
                        if (R || !1 !== f.nonTerminated)
                            if (T)
                                if ("named" === t) {
                                    if (R && !w) L(5, 1);
                                    else if (
                                        (E !== T &&
                                            ((_ = 1 + (g = c + E.length) - c),
                                            (R = !1)),
                                        !R)
                                    ) {
                                        let t = E ? 1 : 3;
                                        if (f.attribute) {
                                            let n = e.charCodeAt(g);
                                            61 === n
                                                ? (L(t, _), (w = ""))
                                                : s(n)
                                                  ? (w = "")
                                                  : L(t, _);
                                        } else L(t, _);
                                    }
                                    N = w;
                                } else {
                                    var C, x;
                                    R || L(2, _);
                                    let e = Number.parseInt(
                                        T,
                                        "hexadecimal" === t ? 16 : 10
                                    );
                                    if (
                                        ((C = e) >= 55296 && C <= 57343) ||
                                        C > 1114111
                                    )
                                        (L(7, _),
                                            (N = String.fromCharCode(65533)));
                                    else if (e in i) (L(6, _), (N = i[e]));
                                    else {
                                        let t = "";
                                        ((((x = e) >= 1 && x <= 8) ||
                                            11 === x ||
                                            (x >= 13 && x <= 31) ||
                                            (x >= 127 && x <= 159) ||
                                            (x >= 64976 && x <= 65007) ||
                                            (65535 & x) == 65535 ||
                                            (65535 & x) == 65534) &&
                                            L(6, _),
                                            e > 65535 &&
                                                ((e -= 65536),
                                                (t += String.fromCharCode(
                                                    (e >>> 10) | 55296
                                                )),
                                                (e = 56320 | (1023 & e))),
                                            (N = t + String.fromCharCode(e)));
                                    }
                                }
                            else "named" !== t && L(4, _);
                        if (N) {
                            (O(),
                                (b = A()),
                                (p = g - 1),
                                (y += g - u + 1),
                                m.push(N));
                            let t = A();
                            (t.offset++,
                                f.reference &&
                                    f.reference.call(
                                        f.referenceContext || void 0,
                                        N,
                                        { start: b, end: t },
                                        e.slice(u - 1, g)
                                    ),
                                (b = t));
                        } else
                            ((T = e.slice(u - 1, g)),
                                (v += T),
                                (y += T.length),
                                (p = g - 1));
                    } else
                        (10 === d && (E++, g++, (y = 0)),
                            Number.isNaN(d)
                                ? O()
                                : ((v += String.fromCharCode(d)), y++));
                return m.join("");
                function A() {
                    return {
                        line: E,
                        column: y,
                        offset: p + ((n ? n.offset : 0) || 0),
                    };
                }
                function L(e, t) {
                    let n;
                    f.warning &&
                        ((n = A()),
                        (n.column += t),
                        (n.offset += t),
                        f.warning.call(f.warningContext || void 0, u[e], n, e));
                }
                function O() {
                    v &&
                        (m.push(v),
                        f.text &&
                            f.text.call(f.textContext || void 0, v, {
                                start: b,
                                end: A(),
                            }),
                        (v = ""));
                }
            }
        },
    },
]);
//# sourceMappingURL=vendors-node_modules_fzy_js_index_js-node_modules_github_g-emoji-element_dist_index_js-node_m-11dcf6-a0f9961ec4dc.js.map
