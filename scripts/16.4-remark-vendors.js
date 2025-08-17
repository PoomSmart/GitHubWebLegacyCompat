"use strict";
(globalThis.webpackChunk_github_ui_github_ui =
    globalThis.webpackChunk_github_ui_github_ui || []).push([
    [
        "vendors-node_modules_remark-gfm_lib_index_js-node_modules_remark-parse_lib_index_js-node_modu-44d0fc",
    ],
    {
        92849: (e) => {
            var t = Object.prototype.hasOwnProperty,
                n = Object.prototype.toString,
                r = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = function (e) {
                    return "function" == typeof Array.isArray
                        ? Array.isArray(e)
                        : "[object Array]" === n.call(e);
                },
                s = function (e) {
                    if (!e || "[object Object]" !== n.call(e)) return !1;
                    var r,
                        i = t.call(e, "constructor"),
                        o =
                            e.constructor &&
                            e.constructor.prototype &&
                            t.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !i && !o) return !1;
                    for (r in e);
                    return void 0 === r || t.call(e, r);
                },
                a = function (e, t) {
                    r && "__proto__" === t.name
                        ? r(e, t.name, {
                              enumerable: !0,
                              configurable: !0,
                              value: t.newValue,
                              writable: !0,
                          })
                        : (e[t.name] = t.newValue);
                },
                l = function (e, n) {
                    if ("__proto__" === n) {
                        if (!t.call(e, n)) return;
                        else if (i) return i(e, n).value;
                    }
                    return e[n];
                };
            e.exports = function e() {
                var t,
                    n,
                    r,
                    i,
                    c,
                    u,
                    f = arguments[0],
                    h = 1,
                    d = arguments.length,
                    p = !1;
                for (
                    "boolean" == typeof f &&
                        ((p = f), (f = arguments[1] || {}), (h = 2)),
                        (null == f ||
                            ("object" != typeof f && "function" != typeof f)) &&
                            (f = {});
                    h < d;
                    ++h
                )
                    if (((t = arguments[h]), null != t))
                        for (n in t)
                            ((r = l(f, n)),
                                f !== (i = l(t, n)) &&
                                    (p && i && (s(i) || (c = o(i)))
                                        ? (c
                                              ? ((c = !1),
                                                (u = r && o(r) ? r : []))
                                              : (u = r && s(r) ? r : {}),
                                          a(f, {
                                              name: n,
                                              newValue: e(p, u, i),
                                          }))
                                        : void 0 !== i &&
                                          a(f, { name: n, newValue: i })));
                return f;
            };
        },
        97471: (e, t, n) => {
            function r() {}
            function i() {}
            n.d(t, { HB: () => i, ok: () => r });
        },
        95459: (e, t, n) => {
            n.d(t, { T: () => o });
            var r = n(76814),
                i = n(69143);
            function o(e, t, n) {
                let o = (0, i.C)((n || {}).ignore || []),
                    s = (function (e) {
                        let t = [];
                        if (!Array.isArray(e))
                            throw TypeError(
                                "Expected find and replace tuple or list of tuples"
                            );
                        let n = !e[0] || Array.isArray(e[0]) ? e : [e],
                            r = -1;
                        for (; ++r < n.length; ) {
                            var i;
                            let e = n[r];
                            t.push([
                                "string" == typeof (i = e[0])
                                    ? RegExp(
                                          (function (e) {
                                              if ("string" != typeof e)
                                                  throw TypeError(
                                                      "Expected a string"
                                                  );
                                              return e
                                                  .replace(
                                                      /[|\\{}()[\]^$+*?.]/g,
                                                      "\\$&"
                                                  )
                                                  .replace(/-/g, "\\x2d");
                                          })(i),
                                          "g"
                                      )
                                    : i,
                                (function (e) {
                                    return "function" == typeof e
                                        ? e
                                        : function () {
                                              return e;
                                          };
                                })(e[1]),
                            ]);
                        }
                        return t;
                    })(t),
                    a = -1;
                for (; ++a < s.length; ) (0, r.VG)(e, "text", l);
                function l(e, t) {
                    let n,
                        r = -1;
                    for (; ++r < t.length; ) {
                        let e = t[r],
                            i = n ? n.children : void 0;
                        if (o(e, i ? i.indexOf(e) : void 0, n)) return;
                        n = e;
                    }
                    if (n)
                        return (function (e, t) {
                            let n = t[t.length - 1],
                                r = s[a][0],
                                i = s[a][1],
                                o = 0,
                                l = n.children.indexOf(e),
                                c = !1,
                                u = [];
                            r.lastIndex = 0;
                            let f = r.exec(e.value);
                            for (; f; ) {
                                let n = f.index,
                                    s = {
                                        index: f.index,
                                        input: f.input,
                                        stack: [...t, e],
                                    },
                                    a = i(...f, s);
                                if (
                                    ("string" == typeof a &&
                                        (a =
                                            a.length > 0
                                                ? { type: "text", value: a }
                                                : void 0),
                                    !1 === a
                                        ? (r.lastIndex = n + 1)
                                        : (o !== n &&
                                              u.push({
                                                  type: "text",
                                                  value: e.value.slice(o, n),
                                              }),
                                          Array.isArray(a)
                                              ? u.push(...a)
                                              : a && u.push(a),
                                          (o = n + f[0].length),
                                          (c = !0)),
                                    !r.global)
                                )
                                    break;
                                f = r.exec(e.value);
                            }
                            return (
                                c
                                    ? (o < e.value.length &&
                                          u.push({
                                              type: "text",
                                              value: e.value.slice(o),
                                          }),
                                      n.children.splice(l, 1, ...u))
                                    : (u = [e]),
                                l + u.length
                            );
                        })(e, t);
                }
            }
        },
        56177: (e, t, n) => {
            function r(e, t, n) {
                return ">" + (n ? "" : " ") + e;
            }
            n.d(t, { p: () => A });
            var i = n(69384);
            function o(e, t, n, r) {
                let o = -1;
                for (; ++o < n.unsafe.length; )
                    if (
                        `
` === n.unsafe[o].character &&
                        (0, i.q)(n.stack, n.unsafe[o])
                    )
                        return /[ \t]/.test(r.before) ? "" : " ";
                return `\\
`;
            }
            var s = n(35857);
            function a(e, t, n) {
                return (n ? "" : "    ") + e;
            }
            function l(e) {
                let t = e.options.quote || '"';
                if ('"' !== t && "'" !== t)
                    throw Error(
                        "Cannot serialize title with `" +
                            t +
                            "` for `options.quote`, expected `\"`, or `'`"
                    );
                return t;
            }
            var c = n(23503),
                u = n(10691);
            function f(e, t, n) {
                let r = (0, u.S)(e),
                    i = (0, u.S)(t);
                return void 0 === r
                    ? void 0 === i
                        ? "_" === n
                            ? { inside: !0, outside: !0 }
                            : { inside: !1, outside: !1 }
                        : 1 === i
                          ? { inside: !0, outside: !0 }
                          : { inside: !1, outside: !0 }
                    : 1 === r
                      ? void 0 === i
                          ? { inside: !1, outside: !1 }
                          : 1 === i
                            ? { inside: !0, outside: !0 }
                            : { inside: !1, outside: !1 }
                      : void 0 === i
                        ? { inside: !1, outside: !1 }
                        : 1 === i
                          ? { inside: !0, outside: !1 }
                          : { inside: !1, outside: !1 };
            }
            function h(e, t, n, r) {
                let i = (function (e) {
                        let t = e.options.emphasis || "*";
                        if ("*" !== t && "_" !== t)
                            throw Error(
                                "Cannot serialize emphasis with `" +
                                    t +
                                    "` for `options.emphasis`, expected `*`, or `_`"
                            );
                        return t;
                    })(n),
                    o = n.enter("emphasis"),
                    s = n.createTracker(r),
                    a = s.move(i),
                    l = s.move(
                        n.containerPhrasing(e, {
                            after: i,
                            before: a,
                            ...s.current(),
                        })
                    ),
                    u = l.charCodeAt(0),
                    h = f(r.before.charCodeAt(r.before.length - 1), u, i);
                h.inside && (l = (0, c.T)(u) + l.slice(1));
                let d = l.charCodeAt(l.length - 1),
                    p = f(r.after.charCodeAt(0), d, i);
                p.inside && (l = l.slice(0, -1) + (0, c.T)(d));
                let g = s.move(i);
                return (
                    o(),
                    (n.attentionEncodeSurroundingInfo = {
                        after: p.outside,
                        before: h.outside,
                    }),
                    a + l + g
                );
            }
            h.peek = function (e, t, n) {
                return n.options.emphasis || "*";
            };
            var d = n(5594);
            function p(e) {
                return e.value || "";
            }
            function g(e, t, n, r) {
                let i = l(n),
                    o = '"' === i ? "Quote" : "Apostrophe",
                    s = n.enter("image"),
                    a = n.enter("label"),
                    c = n.createTracker(r),
                    u = c.move("![");
                return (
                    (u += c.move(
                        n.safe(e.alt, { before: u, after: "]", ...c.current() })
                    )),
                    (u += c.move("](")),
                    a(),
                    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
                        ? ((a = n.enter("destinationLiteral")),
                          (u += c.move("<")),
                          (u += c.move(
                              n.safe(e.url, {
                                  before: u,
                                  after: ">",
                                  ...c.current(),
                              })
                          )),
                          (u += c.move(">")))
                        : ((a = n.enter("destinationRaw")),
                          (u += c.move(
                              n.safe(e.url, {
                                  before: u,
                                  after: e.title ? " " : ")",
                                  ...c.current(),
                              })
                          ))),
                    a(),
                    e.title &&
                        ((a = n.enter(`title${o}`)),
                        (u += c.move(" " + i)),
                        (u += c.move(
                            n.safe(e.title, {
                                before: u,
                                after: i,
                                ...c.current(),
                            })
                        )),
                        (u += c.move(i)),
                        a()),
                    (u += c.move(")")),
                    s(),
                    u
                );
            }
            function m(e, t, n, r) {
                let i = e.referenceType,
                    o = n.enter("imageReference"),
                    s = n.enter("label"),
                    a = n.createTracker(r),
                    l = a.move("!["),
                    c = n.safe(e.alt, {
                        before: l,
                        after: "]",
                        ...a.current(),
                    });
                ((l += a.move(c + "][")), s());
                let u = n.stack;
                ((n.stack = []), (s = n.enter("reference")));
                let f = n.safe(n.associationId(e), {
                    before: l,
                    after: "]",
                    ...a.current(),
                });
                return (
                    s(),
                    (n.stack = u),
                    o(),
                    "full" !== i && c && c === f
                        ? "shortcut" === i
                            ? (l = l.slice(0, -1))
                            : (l += a.move("]"))
                        : (l += a.move(f + "]")),
                    l
                );
            }
            function k(e, t, n) {
                let r = e.value || "",
                    i = "`",
                    o = -1;
                for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
                for (
                    /[^ \r\n]/.test(r) &&
                    ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) ||
                        /^`|`$/.test(r)) &&
                    (r = " " + r + " ");
                    ++o < n.unsafe.length;

                ) {
                    let e,
                        t = n.unsafe[o],
                        i = n.compilePattern(t);
                    if (t.atBreak)
                        for (; (e = i.exec(r)); ) {
                            let t = e.index;
                            (10 === r.charCodeAt(t) &&
                                13 === r.charCodeAt(t - 1) &&
                                t--,
                                (r =
                                    r.slice(0, t) +
                                    " " +
                                    r.slice(e.index + 1)));
                        }
                }
                return i + r + i;
            }
            ((p.peek = function () {
                return "<";
            }),
                (g.peek = function () {
                    return "!";
                }),
                (m.peek = function () {
                    return "!";
                }),
                (k.peek = function () {
                    return "`";
                }));
            var y = n(72534);
            function v(e, t) {
                let n = (0, y.d)(e);
                return !!(
                    !t.options.resourceLink &&
                    e.url &&
                    !e.title &&
                    e.children &&
                    1 === e.children.length &&
                    "text" === e.children[0].type &&
                    (n === e.url || "mailto:" + n === e.url) &&
                    /^[a-z][a-z+.-]+:/i.test(e.url) &&
                    !/[\0- <>\u007F]/.test(e.url)
                );
            }
            function b(e, t, n, r) {
                let i,
                    o,
                    s = l(n),
                    a = '"' === s ? "Quote" : "Apostrophe",
                    c = n.createTracker(r);
                if (v(e, n)) {
                    let t = n.stack;
                    ((n.stack = []), (i = n.enter("autolink")));
                    let r = c.move("<");
                    return (
                        (r += c.move(
                            n.containerPhrasing(e, {
                                before: r,
                                after: ">",
                                ...c.current(),
                            })
                        )),
                        (r += c.move(">")),
                        i(),
                        (n.stack = t),
                        r
                    );
                }
                ((i = n.enter("link")), (o = n.enter("label")));
                let u = c.move("[");
                return (
                    (u += c.move(
                        n.containerPhrasing(e, {
                            before: u,
                            after: "](",
                            ...c.current(),
                        })
                    )),
                    (u += c.move("](")),
                    o(),
                    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
                        ? ((o = n.enter("destinationLiteral")),
                          (u += c.move("<")),
                          (u += c.move(
                              n.safe(e.url, {
                                  before: u,
                                  after: ">",
                                  ...c.current(),
                              })
                          )),
                          (u += c.move(">")))
                        : ((o = n.enter("destinationRaw")),
                          (u += c.move(
                              n.safe(e.url, {
                                  before: u,
                                  after: e.title ? " " : ")",
                                  ...c.current(),
                              })
                          ))),
                    o(),
                    e.title &&
                        ((o = n.enter(`title${a}`)),
                        (u += c.move(" " + s)),
                        (u += c.move(
                            n.safe(e.title, {
                                before: u,
                                after: s,
                                ...c.current(),
                            })
                        )),
                        (u += c.move(s)),
                        o()),
                    (u += c.move(")")),
                    i(),
                    u
                );
            }
            function x(e, t, n, r) {
                let i = e.referenceType,
                    o = n.enter("linkReference"),
                    s = n.enter("label"),
                    a = n.createTracker(r),
                    l = a.move("["),
                    c = n.containerPhrasing(e, {
                        before: l,
                        after: "]",
                        ...a.current(),
                    });
                ((l += a.move(c + "][")), s());
                let u = n.stack;
                ((n.stack = []), (s = n.enter("reference")));
                let f = n.safe(n.associationId(e), {
                    before: l,
                    after: "]",
                    ...a.current(),
                });
                return (
                    s(),
                    (n.stack = u),
                    o(),
                    "full" !== i && c && c === f
                        ? "shortcut" === i
                            ? (l = l.slice(0, -1))
                            : (l += a.move("]"))
                        : (l += a.move(f + "]")),
                    l
                );
            }
            function w(e) {
                let t = e.options.bullet || "*";
                if ("*" !== t && "+" !== t && "-" !== t)
                    throw Error(
                        "Cannot serialize items with `" +
                            t +
                            "` for `options.bullet`, expected `*`, `+`, or `-`"
                    );
                return t;
            }
            function E(e) {
                let t = e.options.rule || "*";
                if ("*" !== t && "-" !== t && "_" !== t)
                    throw Error(
                        "Cannot serialize rules with `" +
                            t +
                            "` for `options.rule`, expected `*`, `-`, or `_`"
                    );
                return t;
            }
            ((b.peek = function (e, t, n) {
                return v(e, n) ? "<" : "[";
            }),
                (x.peek = function () {
                    return "[";
                }));
            let C = (0, n(69143).C)([
                "break",
                "delete",
                "emphasis",
                "footnote",
                "footnoteReference",
                "image",
                "imageReference",
                "inlineCode",
                "inlineMath",
                "link",
                "linkReference",
                "mdxJsxTextElement",
                "mdxTextExpression",
                "strong",
                "text",
                "textDirective",
            ]);
            function T(e, t, n, r) {
                let i = (function (e) {
                        let t = e.options.strong || "*";
                        if ("*" !== t && "_" !== t)
                            throw Error(
                                "Cannot serialize strong with `" +
                                    t +
                                    "` for `options.strong`, expected `*`, or `_`"
                            );
                        return t;
                    })(n),
                    o = n.enter("strong"),
                    s = n.createTracker(r),
                    a = s.move(i + i),
                    l = s.move(
                        n.containerPhrasing(e, {
                            after: i,
                            before: a,
                            ...s.current(),
                        })
                    ),
                    u = l.charCodeAt(0),
                    h = f(r.before.charCodeAt(r.before.length - 1), u, i);
                h.inside && (l = (0, c.T)(u) + l.slice(1));
                let d = l.charCodeAt(l.length - 1),
                    p = f(r.after.charCodeAt(0), d, i);
                p.inside && (l = l.slice(0, -1) + (0, c.T)(d));
                let g = s.move(i + i);
                return (
                    o(),
                    (n.attentionEncodeSurroundingInfo = {
                        after: p.outside,
                        before: h.outside,
                    }),
                    a + l + g
                );
            }
            T.peek = function (e, t, n) {
                return n.options.strong || "*";
            };
            let A = {
                blockquote: function (e, t, n, i) {
                    let o = n.enter("blockquote"),
                        s = n.createTracker(i);
                    (s.move("> "), s.shift(2));
                    let a = n.indentLines(n.containerFlow(e, s.current()), r);
                    return (o(), a);
                },
                break: o,
                code: function (e, t, n, r) {
                    let i = (function (e) {
                            let t = e.options.fence || "`";
                            if ("`" !== t && "~" !== t)
                                throw Error(
                                    "Cannot serialize code with `" +
                                        t +
                                        "` for `options.fence`, expected `` ` `` or `~`"
                                );
                            return t;
                        })(n),
                        o = e.value || "",
                        l = "`" === i ? "GraveAccent" : "Tilde";
                    if ((0, s.m)(e, n)) {
                        let e = n.enter("codeIndented"),
                            t = n.indentLines(o, a);
                        return (e(), t);
                    }
                    let c = n.createTracker(r),
                        u = i.repeat(
                            Math.max(
                                (function (e, t) {
                                    let n = String(e),
                                        r = n.indexOf(t),
                                        i = r,
                                        o = 0,
                                        s = 0;
                                    if ("string" != typeof t)
                                        throw TypeError("Expected substring");
                                    for (; -1 !== r; )
                                        (r === i ? ++o > s && (s = o) : (o = 1),
                                            (i = r + t.length),
                                            (r = n.indexOf(t, i)));
                                    return s;
                                })(o, i) + 1,
                                3
                            )
                        ),
                        f = n.enter("codeFenced"),
                        h = c.move(u);
                    if (e.lang) {
                        let t = n.enter(`codeFencedLang${l}`);
                        ((h += c.move(
                            n.safe(e.lang, {
                                before: h,
                                after: " ",
                                encode: ["`"],
                                ...c.current(),
                            })
                        )),
                            t());
                    }
                    if (e.lang && e.meta) {
                        let t = n.enter(`codeFencedMeta${l}`);
                        ((h += c.move(" ")),
                            (h += c.move(
                                n.safe(e.meta, {
                                    before: h,
                                    after: `
`,
                                    encode: ["`"],
                                    ...c.current(),
                                })
                            )),
                            t());
                    }
                    return (
                        (h += c.move(`
`)),
                        o &&
                            (h += c.move(
                                o +
                                    `
`
                            )),
                        (h += c.move(u)),
                        f(),
                        h
                    );
                },
                definition: function (e, t, n, r) {
                    let i = l(n),
                        o = '"' === i ? "Quote" : "Apostrophe",
                        s = n.enter("definition"),
                        a = n.enter("label"),
                        c = n.createTracker(r),
                        u = c.move("[");
                    return (
                        (u += c.move(
                            n.safe(n.associationId(e), {
                                before: u,
                                after: "]",
                                ...c.current(),
                            })
                        )),
                        (u += c.move("]: ")),
                        a(),
                        !e.url || /[\0- \u007F]/.test(e.url)
                            ? ((a = n.enter("destinationLiteral")),
                              (u += c.move("<")),
                              (u += c.move(
                                  n.safe(e.url, {
                                      before: u,
                                      after: ">",
                                      ...c.current(),
                                  })
                              )),
                              (u += c.move(">")))
                            : ((a = n.enter("destinationRaw")),
                              (u += c.move(
                                  n.safe(e.url, {
                                      before: u,
                                      after: e.title
                                          ? " "
                                          : `
`,
                                      ...c.current(),
                                  })
                              ))),
                        a(),
                        e.title &&
                            ((a = n.enter(`title${o}`)),
                            (u += c.move(" " + i)),
                            (u += c.move(
                                n.safe(e.title, {
                                    before: u,
                                    after: i,
                                    ...c.current(),
                                })
                            )),
                            (u += c.move(i)),
                            a()),
                        s(),
                        u
                    );
                },
                emphasis: h,
                hardBreak: o,
                heading: function (e, t, n, r) {
                    let i = Math.max(Math.min(6, e.depth || 1), 1),
                        o = n.createTracker(r);
                    if ((0, d.f)(e, n)) {
                        let t = n.enter("headingSetext"),
                            r = n.enter("phrasing"),
                            s = n.containerPhrasing(e, {
                                ...o.current(),
                                before: `
`,
                                after: `
`,
                            });
                        return (
                            r(),
                            t(),
                            s +
                                `
` +
                                (1 === i ? "=" : "-").repeat(
                                    s.length -
                                        (Math.max(
                                            s.lastIndexOf("\r"),
                                            s.lastIndexOf(`
`)
                                        ) +
                                            1)
                                )
                        );
                    }
                    let s = "#".repeat(i),
                        a = n.enter("headingAtx"),
                        l = n.enter("phrasing");
                    o.move(s + " ");
                    let u = n.containerPhrasing(e, {
                        before: "# ",
                        after: `
`,
                        ...o.current(),
                    });
                    return (
                        /^[\t ]/.test(u) &&
                            (u = (0, c.T)(u.charCodeAt(0)) + u.slice(1)),
                        (u = u ? s + " " + u : s),
                        n.options.closeAtx && (u += " " + s),
                        l(),
                        a(),
                        u
                    );
                },
                html: p,
                image: g,
                imageReference: m,
                inlineCode: k,
                link: b,
                linkReference: x,
                list: function (e, t, n, r) {
                    let i = n.enter("list"),
                        o = n.bulletCurrent,
                        s = e.ordered
                            ? (function (e) {
                                  let t = e.options.bulletOrdered || ".";
                                  if ("." !== t && ")" !== t)
                                      throw Error(
                                          "Cannot serialize items with `" +
                                              t +
                                              "` for `options.bulletOrdered`, expected `.` or `)`"
                                      );
                                  return t;
                              })(n)
                            : w(n),
                        a = e.ordered
                            ? "." === s
                                ? ")"
                                : "."
                            : (function (e) {
                                  let t = w(e),
                                      n = e.options.bulletOther;
                                  if (!n) return "*" === t ? "-" : "*";
                                  if ("*" !== n && "+" !== n && "-" !== n)
                                      throw Error(
                                          "Cannot serialize items with `" +
                                              n +
                                              "` for `options.bulletOther`, expected `*`, `+`, or `-`"
                                      );
                                  if (n === t)
                                      throw Error(
                                          "Expected `bullet` (`" +
                                              t +
                                              "`) and `bulletOther` (`" +
                                              n +
                                              "`) to be different"
                                      );
                                  return n;
                              })(n),
                        l = !!t && !!n.bulletLastUsed && s === n.bulletLastUsed;
                    if (!e.ordered) {
                        let t = e.children ? e.children[0] : void 0;
                        if (
                            (("*" !== s && "-" !== s) ||
                                !t ||
                                (t.children && t.children[0]) ||
                                "list" !== n.stack[n.stack.length - 1] ||
                                "listItem" !== n.stack[n.stack.length - 2] ||
                                "list" !== n.stack[n.stack.length - 3] ||
                                "listItem" !== n.stack[n.stack.length - 4] ||
                                0 !== n.indexStack[n.indexStack.length - 1] ||
                                0 !== n.indexStack[n.indexStack.length - 2] ||
                                0 !== n.indexStack[n.indexStack.length - 3] ||
                                (l = !0),
                            E(n) === s && t)
                        ) {
                            let t = -1;
                            for (; ++t < e.children.length; ) {
                                let n = e.children[t];
                                if (
                                    n &&
                                    "listItem" === n.type &&
                                    n.children &&
                                    n.children[0] &&
                                    "thematicBreak" === n.children[0].type
                                ) {
                                    l = !0;
                                    break;
                                }
                            }
                        }
                    }
                    (l && (s = a), (n.bulletCurrent = s));
                    let c = n.containerFlow(e, r);
                    return (
                        (n.bulletLastUsed = s),
                        (n.bulletCurrent = o),
                        i(),
                        c
                    );
                },
                listItem: function (e, t, n, r) {
                    let i = (function (e) {
                            let t = e.options.listItemIndent || "one";
                            if ("tab" !== t && "one" !== t && "mixed" !== t)
                                throw Error(
                                    "Cannot serialize items with `" +
                                        t +
                                        "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
                                );
                            return t;
                        })(n),
                        o = n.bulletCurrent || w(n);
                    t &&
                        "list" === t.type &&
                        t.ordered &&
                        (o =
                            ("number" == typeof t.start && t.start > -1
                                ? t.start
                                : 1) +
                            (!1 === n.options.incrementListMarker
                                ? 0
                                : t.children.indexOf(e)) +
                            o);
                    let s = o.length + 1;
                    ("tab" === i ||
                        ("mixed" === i &&
                            ((t && "list" === t.type && t.spread) ||
                                e.spread))) &&
                        (s = 4 * Math.ceil(s / 4));
                    let a = n.createTracker(r);
                    (a.move(o + " ".repeat(s - o.length)), a.shift(s));
                    let l = n.enter("listItem"),
                        c = n.indentLines(
                            n.containerFlow(e, a.current()),
                            function (e, t, n) {
                                return t
                                    ? (n ? "" : " ".repeat(s)) + e
                                    : (n ? o : o + " ".repeat(s - o.length)) +
                                          e;
                            }
                        );
                    return (l(), c);
                },
                paragraph: function (e, t, n, r) {
                    let i = n.enter("paragraph"),
                        o = n.enter("phrasing"),
                        s = n.containerPhrasing(e, r);
                    return (o(), i(), s);
                },
                root: function (e, t, n, r) {
                    return (
                        e.children.some(function (e) {
                            return C(e);
                        })
                            ? n.containerPhrasing
                            : n.containerFlow
                    ).call(n, e, r);
                },
                strong: T,
                text: function (e, t, n, r) {
                    return n.safe(e.value, r);
                },
                thematicBreak: function (e, t, n) {
                    let r = (E(n) + (n.options.ruleSpaces ? " " : "")).repeat(
                        (function (e) {
                            let t = e.options.ruleRepetition || 3;
                            if (t < 3)
                                throw Error(
                                    "Cannot serialize rules with repetition `" +
                                        t +
                                        "` for `options.ruleRepetition`, expected `3` or more"
                                );
                            return t;
                        })(n)
                    );
                    return n.options.ruleSpaces ? r.slice(0, -1) : r;
                },
            };
        },
        23503: (e, t, n) => {
            n.d(t, { T: () => r });
            function r(e) {
                return "&#x" + e.toString(16).toUpperCase() + ";";
            }
        },
        35857: (e, t, n) => {
            n.d(t, { m: () => r });
            function r(e, t) {
                return !!(
                    !1 === t.options.fences &&
                    e.value &&
                    !e.lang &&
                    /[^ \r\n]/.test(e.value) &&
                    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
                );
            }
        },
        5594: (e, t, n) => {
            n.d(t, { f: () => s });
            var r = n(47970),
                i = n(76814),
                o = n(72534);
            function s(e, t) {
                let n = !1;
                return (
                    (0, r.YR)(e, function (e) {
                        if (
                            ("value" in e && /\r?\n|\r/.test(e.value)) ||
                            "break" === e.type
                        )
                            return ((n = !0), i.dc);
                    }),
                    !!(
                        (!e.depth || e.depth < 3) &&
                        (0, o.d)(e) &&
                        (t.options.setext || n)
                    )
                );
            }
        },
        69384: (e, t, n) => {
            function r(e, t) {
                return i(e, t.inConstruct, !0) && !i(e, t.notInConstruct, !1);
            }
            function i(e, t, n) {
                if (("string" == typeof t && (t = [t]), !t || 0 === t.length))
                    return n;
                let r = -1;
                for (; ++r < t.length; ) if (e.includes(t[r])) return !0;
                return !1;
            }
            n.d(t, { q: () => r });
        },
        72534: (e, t, n) => {
            n.d(t, { d: () => i });
            let r = {};
            function i(e, t) {
                let n = t || r;
                return o(
                    e,
                    "boolean" != typeof n.includeImageAlt || n.includeImageAlt,
                    "boolean" != typeof n.includeHtml || n.includeHtml
                );
            }
            function o(e, t, n) {
                var r;
                if ((r = e) && "object" == typeof r) {
                    if ("value" in e)
                        return "html" !== e.type || n ? e.value : "";
                    if (t && "alt" in e && e.alt) return e.alt;
                    if ("children" in e) return s(e.children, t, n);
                }
                return Array.isArray(e) ? s(e, t, n) : "";
            }
            function s(e, t, n) {
                let r = [],
                    i = -1;
                for (; ++i < e.length; ) r[i] = o(e[i], t, n);
                return r.join("");
            }
        },
        43589: (e, t, n) => {
            n.d(t, { C: () => r });
            function r(e, t) {
                let n = Number.parseInt(e, t);
                return n < 9 ||
                    11 === n ||
                    (n > 13 && n < 32) ||
                    (n > 126 && n < 160) ||
                    (n > 55295 && n < 57344) ||
                    (n > 64975 && n < 65008) ||
                    (65535 & n) == 65535 ||
                    (65535 & n) == 65534 ||
                    n > 1114111
                    ? "\uFFFD"
                    : String.fromCodePoint(n);
            }
        },
        22177: (e, t, n) => {
            n.d(t, { s: () => s });
            var r = n(96206),
                i = n(43589);
            let o =
                /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
            function s(e) {
                return e.replace(o, a);
            }
            function a(e, t, n) {
                if (t) return t;
                if (35 === n.charCodeAt(0)) {
                    let e = n.charCodeAt(1),
                        t = 120 === e || 88 === e;
                    return (0, i.C)(n.slice(t ? 2 : 1), t ? 16 : 10);
                }
                return (0, r.s)(n) || e;
            }
        },
        75486: (e, t, n) => {
            function r(e, t) {
                let n = String(e);
                if ("string" != typeof t) throw TypeError("Expected character");
                let r = 0,
                    i = n.indexOf(t);
                for (; -1 !== i; ) (r++, (i = n.indexOf(t, i + t.length)));
                return r;
            }
            n.d(t, { A: () => Z });
            var i = n(97471),
                o = n(40574),
                s = n(95459);
            let a = "phrasing",
                l = ["autolink", "link", "image", "label"];
            function c(e) {
                this.enter(
                    { type: "link", title: null, url: "", children: [] },
                    e
                );
            }
            function u(e) {
                this.config.enter.autolinkProtocol.call(this, e);
            }
            function f(e) {
                this.config.exit.autolinkProtocol.call(this, e);
            }
            function h(e) {
                this.config.exit.data.call(this, e);
                let t = this.stack[this.stack.length - 1];
                ((0, i.ok)("link" === t.type),
                    (t.url = "http://" + this.sliceSerialize(e)));
            }
            function d(e) {
                this.config.exit.autolinkEmail.call(this, e);
            }
            function p(e) {
                this.exit(e);
            }
            function g(e) {
                (0, s.T)(
                    e,
                    [
                        [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, m],
                        [
                            /(^|[\s\p{P}\p{S}])([-\w.+]+)@([-\w]+(?:\.[-\w]+)+)/gu,
                            (_, prefix, local, domain) =>
                                prefix + k(`${local}@${domain}`),
                        ],
                    ],
                    { ignore: ["link", "linkReference"] }
                );
            }
            function m(e, t, n, i, o) {
                let s = "";
                if (
                    !y(o) ||
                    (/^w/i.test(t) && ((n = t + n), (t = ""), (s = "http://")),
                    !(function (e) {
                        let t = e.split(".");
                        return !(
                            t.length < 2 ||
                            (t[t.length - 1] &&
                                (/_/.test(t[t.length - 1]) ||
                                    !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
                            (t[t.length - 2] &&
                                (/_/.test(t[t.length - 2]) ||
                                    !/[a-zA-Z\d]/.test(t[t.length - 2])))
                        );
                    })(n))
                )
                    return !1;
                let a = (function (e) {
                    let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
                    if (!t) return [e, void 0];
                    e = e.slice(0, t.index);
                    let n = t[0],
                        i = n.indexOf(")"),
                        o = r(e, "("),
                        s = r(e, ")");
                    for (; -1 !== i && o > s; )
                        ((e += n.slice(0, i + 1)),
                            (i = (n = n.slice(i + 1)).indexOf(")")),
                            s++);
                    return [e, n];
                })(n + i);
                if (!a[0]) return !1;
                let l = {
                    type: "link",
                    title: null,
                    url: s + t + a[0],
                    children: [{ type: "text", value: t + a[0] }],
                };
                return a[1] ? [l, { type: "text", value: a[1] }] : l;
            }
            function k(e, t, n, r) {
                return (
                    !(!y(r, !0) || /[-\d_]$/.test(n)) && {
                        type: "link",
                        title: null,
                        url: "mailto:" + t + "@" + n,
                        children: [{ type: "text", value: t + "@" + n }],
                    }
                );
            }
            function y(e, t) {
                let n = e.input.charCodeAt(e.index - 1);
                return (
                    (0 === e.index || (0, o.Ny)(n) || (0, o.es)(n)) &&
                    (!t || 47 !== n)
                );
            }
            var v = n(9638);
            function b(e) {
                this.enter(
                    {
                        type: "footnoteDefinition",
                        identifier: "",
                        label: "",
                        children: [],
                    },
                    e
                );
            }
            function x() {
                this.buffer();
            }
            function w(e) {
                let t = this.resume(),
                    n = this.stack[this.stack.length - 1];
                ((0, i.ok)("footnoteDefinition" === n.type),
                    (n.label = t),
                    (n.identifier = (0, v.B)(
                        this.sliceSerialize(e)
                    ).toLowerCase()));
            }
            function E(e) {
                this.exit(e);
            }
            function C(e) {
                this.enter(
                    { type: "footnoteReference", identifier: "", label: "" },
                    e
                );
            }
            function T() {
                this.buffer();
            }
            function A(e) {
                let t = this.resume(),
                    n = this.stack[this.stack.length - 1];
                ((0, i.ok)("footnoteReference" === n.type),
                    (n.label = t),
                    (n.identifier = (0, v.B)(
                        this.sliceSerialize(e)
                    ).toLowerCase()));
            }
            function S(e) {
                this.exit(e);
            }
            function I(e, t, n, r) {
                let i = n.createTracker(r),
                    o = i.move("[^"),
                    s = n.enter("footnoteReference"),
                    a = n.enter("reference");
                return (
                    (o += i.move(
                        n.safe(n.associationId(e), {
                            ...i.current(),
                            before: o,
                            after: "]",
                        })
                    )),
                    a(),
                    s(),
                    (o += i.move("]"))
                );
            }
            function P(e, t, n, r) {
                let i = n.createTracker(r),
                    o = i.move("[^"),
                    s = n.enter("footnoteDefinition"),
                    a = n.enter("label");
                return (
                    (o += i.move(
                        n.safe(n.associationId(e), {
                            ...i.current(),
                            before: o,
                            after: "]",
                        })
                    )),
                    a(),
                    (o += i.move(
                        "]:" + (e.children && e.children.length > 0 ? " " : "")
                    )),
                    i.shift(4),
                    (o += i.move(
                        n.indentLines(n.containerFlow(e, i.current()), F)
                    )),
                    s(),
                    o
                );
            }
            function F(e, t, n) {
                return 0 === t ? e : (n ? "" : "    ") + e;
            }
            I.peek = function () {
                return "[";
            };
            let R = [
                "autolink",
                "destinationLiteral",
                "destinationRaw",
                "reference",
                "titleQuote",
                "titleApostrophe",
            ];
            function _(e) {
                this.enter({ type: "delete", children: [] }, e);
            }
            function L(e) {
                this.exit(e);
            }
            function O(e, t, n, r) {
                let i = n.createTracker(r),
                    o = n.enter("strikethrough"),
                    s = i.move("~~");
                return (
                    (s += n.containerPhrasing(e, {
                        ...i.current(),
                        before: s,
                        after: "~",
                    })),
                    (s += i.move("~~")),
                    o(),
                    s
                );
            }
            function z(e) {
                return e.length;
            }
            function j(e) {
                let t = "string" == typeof e ? e.codePointAt(0) : 0;
                return 67 === t || 99 === t
                    ? 99
                    : 76 === t || 108 === t
                      ? 108
                      : 114 * (82 === t || 114 === t);
            }
            O.peek = function () {
                return "~";
            };
            var V = n(56177);
            function M(e) {
                let t = e._align;
                ((0, i.ok)(t, "expected `_align` on table"),
                    this.enter(
                        {
                            type: "table",
                            align: t.map(function (e) {
                                return "none" === e ? null : e;
                            }),
                            children: [],
                        },
                        e
                    ),
                    (this.data.inTable = !0));
            }
            function D(e) {
                (this.exit(e), (this.data.inTable = void 0));
            }
            function B(e) {
                this.enter({ type: "tableRow", children: [] }, e);
            }
            function H(e) {
                this.exit(e);
            }
            function U(e) {
                this.enter({ type: "tableCell", children: [] }, e);
            }
            function $(e) {
                let t = this.resume();
                this.data.inTable && (t = t.replace(/\\([\\|])/g, N));
                let n = this.stack[this.stack.length - 1];
                ((0, i.ok)("inlineCode" === n.type),
                    (n.value = t),
                    this.exit(e));
            }
            function N(e, t) {
                return "|" === t ? t : e;
            }
            function q(e) {
                let t = this.stack[this.stack.length - 2];
                ((0, i.ok)("listItem" === t.type),
                    (t.checked = "taskListCheckValueChecked" === e.type));
            }
            function Q(e) {
                let t = this.stack[this.stack.length - 2];
                if (
                    t &&
                    "listItem" === t.type &&
                    "boolean" == typeof t.checked
                ) {
                    let e = this.stack[this.stack.length - 1];
                    (0, i.ok)("paragraph" === e.type);
                    let n = e.children[0];
                    if (n && "text" === n.type) {
                        let r,
                            i = t.children,
                            o = -1;
                        for (; ++o < i.length; ) {
                            let e = i[o];
                            if ("paragraph" === e.type) {
                                r = e;
                                break;
                            }
                        }
                        r === e &&
                            ((n.value = n.value.slice(1)),
                            0 === n.value.length
                                ? e.children.shift()
                                : e.position &&
                                  n.position &&
                                  "number" == typeof n.position.start.offset &&
                                  (n.position.start.column++,
                                  n.position.start.offset++,
                                  (e.position.start = Object.assign(
                                      {},
                                      n.position.start
                                  ))));
                    }
                }
                this.exit(e);
            }
            function G(e, t, n, r) {
                let i = e.children[0],
                    o =
                        "boolean" == typeof e.checked &&
                        i &&
                        "paragraph" === i.type,
                    s = "[" + (e.checked ? "x" : " ") + "] ",
                    a = n.createTracker(r);
                o && a.move(s);
                let l = V.p.listItem(e, t, n, { ...r, ...a.current() });
                return (
                    o &&
                        (l = l.replace(
                            /^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,
                            function (e) {
                                return e + s;
                            }
                        )),
                    l
                );
            }
            var W = n(84600);
            let Y = {};
            function Z(e) {
                let t = e || Y,
                    n = this.data(),
                    r = n.micromarkExtensions || (n.micromarkExtensions = []),
                    i =
                        n.fromMarkdownExtensions ||
                        (n.fromMarkdownExtensions = []),
                    o = n.toMarkdownExtensions || (n.toMarkdownExtensions = []);
                (r.push((0, W.T)(t)),
                    i.push([
                        {
                            transforms: [g],
                            enter: {
                                literalAutolink: c,
                                literalAutolinkEmail: u,
                                literalAutolinkHttp: u,
                                literalAutolinkWww: u,
                            },
                            exit: {
                                literalAutolink: p,
                                literalAutolinkEmail: d,
                                literalAutolinkHttp: f,
                                literalAutolinkWww: h,
                            },
                        },
                        {
                            enter: {
                                gfmFootnoteDefinition: b,
                                gfmFootnoteDefinitionLabelString: x,
                                gfmFootnoteCall: C,
                                gfmFootnoteCallString: T,
                            },
                            exit: {
                                gfmFootnoteDefinition: E,
                                gfmFootnoteDefinitionLabelString: w,
                                gfmFootnoteCall: S,
                                gfmFootnoteCallString: A,
                            },
                        },
                        {
                            canContainEols: ["delete"],
                            enter: { strikethrough: _ },
                            exit: { strikethrough: L },
                        },
                        {
                            enter: {
                                table: M,
                                tableData: U,
                                tableHeader: U,
                                tableRow: B,
                            },
                            exit: {
                                codeText: $,
                                table: D,
                                tableData: H,
                                tableHeader: H,
                                tableRow: H,
                            },
                        },
                        {
                            exit: {
                                taskListCheckValueChecked: q,
                                taskListCheckValueUnchecked: q,
                                paragraph: Q,
                            },
                        },
                    ]),
                    o.push({
                        extensions: [
                            {
                                unsafe: [
                                    {
                                        character: "@",
                                        before: "[+\\-.\\w]",
                                        after: "[\\-.\\w]",
                                        inConstruct: a,
                                        notInConstruct: l,
                                    },
                                    {
                                        character: ".",
                                        before: "[Ww]",
                                        after: "[\\-.\\w]",
                                        inConstruct: a,
                                        notInConstruct: l,
                                    },
                                    {
                                        character: ":",
                                        before: "[ps]",
                                        after: "\\/",
                                        inConstruct: a,
                                        notInConstruct: l,
                                    },
                                ],
                            },
                            {
                                unsafe: [
                                    {
                                        character: "[",
                                        inConstruct: [
                                            "phrasing",
                                            "label",
                                            "reference",
                                        ],
                                    },
                                ],
                                handlers: {
                                    footnoteDefinition: P,
                                    footnoteReference: I,
                                },
                            },
                            {
                                unsafe: [
                                    {
                                        character: "~",
                                        inConstruct: "phrasing",
                                        notInConstruct: R,
                                    },
                                ],
                                handlers: { delete: O },
                            },
                            (function (e) {
                                let t = e || {},
                                    n = t.tableCellPadding,
                                    r = t.tablePipeAlign,
                                    i = t.stringLength,
                                    o = n ? " " : "|";
                                return {
                                    unsafe: [
                                        {
                                            character: "\r",
                                            inConstruct: "tableCell",
                                        },
                                        {
                                            character: `
`,
                                            inConstruct: "tableCell",
                                        },
                                        {
                                            atBreak: !0,
                                            character: "|",
                                            after: "[	 :-]",
                                        },
                                        {
                                            character: "|",
                                            inConstruct: "tableCell",
                                        },
                                        {
                                            atBreak: !0,
                                            character: ":",
                                            after: "-",
                                        },
                                        {
                                            atBreak: !0,
                                            character: "-",
                                            after: "[:|-]",
                                        },
                                    ],
                                    handlers: {
                                        inlineCode: function (e, t, n) {
                                            let r = V.p.inlineCode(e, t, n);
                                            return (
                                                n.stack.includes("tableCell") &&
                                                    (r = r.replace(
                                                        /\|/g,
                                                        "\\$&"
                                                    )),
                                                r
                                            );
                                        },
                                        table: function (e, t, n, r) {
                                            return a(
                                                (function (e, t, n) {
                                                    let r = e.children,
                                                        i = -1,
                                                        o = [],
                                                        s = t.enter("table");
                                                    for (; ++i < r.length; )
                                                        o[i] = l(r[i], t, n);
                                                    return (s(), o);
                                                })(e, n, r),
                                                e.align
                                            );
                                        },
                                        tableCell: s,
                                        tableRow: function (e, t, n, r) {
                                            let i = a([l(e, n, r)]);
                                            return i.slice(
                                                0,
                                                i.indexOf(`
`)
                                            );
                                        },
                                    },
                                };
                                function s(e, t, n, r) {
                                    let i = n.enter("tableCell"),
                                        s = n.enter("phrasing"),
                                        a = n.containerPhrasing(e, {
                                            ...r,
                                            before: o,
                                            after: o,
                                        });
                                    return (s(), i(), a);
                                }
                                function a(e, t) {
                                    return (function (e, t) {
                                        let n = t || {},
                                            r = (n.align || []).concat(),
                                            i = n.stringLength || z,
                                            o = [],
                                            s = [],
                                            a = [],
                                            l = [],
                                            c = 0,
                                            u = -1;
                                        for (; ++u < e.length; ) {
                                            let t = [],
                                                r = [],
                                                o = -1;
                                            for (
                                                e[u].length > c &&
                                                (c = e[u].length);
                                                ++o < e[u].length;

                                            ) {
                                                var f;
                                                let s =
                                                    null == (f = e[u][o])
                                                        ? ""
                                                        : String(f);
                                                if (!1 !== n.alignDelimiters) {
                                                    let e = i(s);
                                                    ((r[o] = e),
                                                        (void 0 === l[o] ||
                                                            e > l[o]) &&
                                                            (l[o] = e));
                                                }
                                                t.push(s);
                                            }
                                            ((s[u] = t), (a[u] = r));
                                        }
                                        let h = -1;
                                        if (
                                            "object" == typeof r &&
                                            "length" in r
                                        )
                                            for (; ++h < c; ) o[h] = j(r[h]);
                                        else {
                                            let e = j(r);
                                            for (; ++h < c; ) o[h] = e;
                                        }
                                        h = -1;
                                        let d = [],
                                            p = [];
                                        for (; ++h < c; ) {
                                            let e = o[h],
                                                t = "",
                                                r = "";
                                            99 === e
                                                ? ((t = ":"), (r = ":"))
                                                : 108 === e
                                                  ? (t = ":")
                                                  : 114 === e && (r = ":");
                                            let i =
                                                    !1 === n.alignDelimiters
                                                        ? 1
                                                        : Math.max(
                                                              1,
                                                              l[h] -
                                                                  t.length -
                                                                  r.length
                                                          ),
                                                s = t + "-".repeat(i) + r;
                                            (!1 !== n.alignDelimiters &&
                                                ((i = t.length + i + r.length) >
                                                    l[h] && (l[h] = i),
                                                (p[h] = i)),
                                                (d[h] = s));
                                        }
                                        (s.splice(1, 0, d),
                                            a.splice(1, 0, p),
                                            (u = -1));
                                        let g = [];
                                        for (; ++u < s.length; ) {
                                            let e = s[u],
                                                t = a[u];
                                            h = -1;
                                            let r = [];
                                            for (; ++h < c; ) {
                                                let i = e[h] || "",
                                                    s = "",
                                                    a = "";
                                                if (!1 !== n.alignDelimiters) {
                                                    let e = l[h] - (t[h] || 0),
                                                        n = o[h];
                                                    114 === n
                                                        ? (s = " ".repeat(e))
                                                        : 99 === n
                                                          ? e % 2
                                                              ? ((s =
                                                                    " ".repeat(
                                                                        e / 2 +
                                                                            0.5
                                                                    )),
                                                                (a = " ".repeat(
                                                                    e / 2 - 0.5
                                                                )))
                                                              : (a = s =
                                                                    " ".repeat(
                                                                        e / 2
                                                                    ))
                                                          : (a = " ".repeat(e));
                                                }
                                                (!1 === n.delimiterStart ||
                                                    h ||
                                                    r.push("|"),
                                                    !1 !== n.padding &&
                                                        (!1 !==
                                                            n.alignDelimiters ||
                                                            "" !== i) &&
                                                        (!1 !==
                                                            n.delimiterStart ||
                                                            h) &&
                                                        r.push(" "),
                                                    !1 !== n.alignDelimiters &&
                                                        r.push(s),
                                                    r.push(i),
                                                    !1 !== n.alignDelimiters &&
                                                        r.push(a),
                                                    !1 !== n.padding &&
                                                        r.push(" "),
                                                    (!1 !== n.delimiterEnd ||
                                                        h !== c - 1) &&
                                                        r.push("|"));
                                            }
                                            g.push(
                                                !1 === n.delimiterEnd
                                                    ? r
                                                          .join("")
                                                          .replace(/ +$/, "")
                                                    : r.join("")
                                            );
                                        }
                                        return g.join(`
`);
                                    })(e, {
                                        align: t,
                                        alignDelimiters: r,
                                        padding: n,
                                        stringLength: i,
                                    });
                                }
                                function l(e, t, n) {
                                    let r = e.children,
                                        i = -1,
                                        o = [],
                                        a = t.enter("tableRow");
                                    for (; ++i < r.length; )
                                        o[i] = s(r[i], e, t, n);
                                    return (a(), o);
                                }
                            })(t),
                            {
                                unsafe: [
                                    {
                                        atBreak: !0,
                                        character: "-",
                                        after: "[:|-]",
                                    },
                                ],
                                handlers: { listItem: G },
                            },
                        ],
                    }));
            }
        },
        15560: (e, t, n) => {
            n.d(t, { A: () => g });
            var r = n(72534),
                i = n(43926),
                o = n(87647),
                s = n(2611),
                a = n(43589),
                l = n(22177),
                c = n(9638),
                u = n(96206),
                f = n(47188);
            let h = {}.hasOwnProperty;
            function d(e) {
                return { line: e.line, column: e.column, offset: e.offset };
            }
            function p(e, t) {
                if (e)
                    throw Error(
                        "Cannot close `" +
                            e.type +
                            "` (" +
                            (0, f.L)({ start: e.start, end: e.end }) +
                            "): a different token (`" +
                            t.type +
                            "`, " +
                            (0, f.L)({ start: t.start, end: t.end }) +
                            ") is open"
                    );
                throw Error(
                    "Cannot close document, a token (`" +
                        t.type +
                        "`, " +
                        (0, f.L)({ start: t.start, end: t.end }) +
                        ") is still open"
                );
            }
            function g(e) {
                let t = this;
                t.parser = function (n) {
                    var g, m;
                    return (
                        "string" !=
                            typeof (g = {
                                ...t.data("settings"),
                                ...e,
                                extensions: t.data("micromarkExtensions") || [],
                                mdastExtensions:
                                    t.data("fromMarkdownExtensions") || [],
                            }) && ((m = g), (g = void 0)),
                        (function (e) {
                            let t = {
                                transforms: [],
                                canContainEols: [
                                    "emphasis",
                                    "fragment",
                                    "heading",
                                    "paragraph",
                                    "strong",
                                ],
                                enter: {
                                    autolink: i(A),
                                    autolinkProtocol: y,
                                    autolinkEmail: y,
                                    atxHeading: i(E),
                                    blockQuote: i(function () {
                                        return {
                                            type: "blockquote",
                                            children: [],
                                        };
                                    }),
                                    characterEscape: y,
                                    characterReference: y,
                                    codeFenced: i(w),
                                    codeFencedFenceInfo: o,
                                    codeFencedFenceMeta: o,
                                    codeIndented: i(w, o),
                                    codeText: i(function () {
                                        return {
                                            type: "inlineCode",
                                            value: "",
                                        };
                                    }, o),
                                    codeTextData: y,
                                    data: y,
                                    codeFlowValue: y,
                                    definition: i(function () {
                                        return {
                                            type: "definition",
                                            identifier: "",
                                            label: null,
                                            title: null,
                                            url: "",
                                        };
                                    }),
                                    definitionDestinationString: o,
                                    definitionLabelString: o,
                                    definitionTitleString: o,
                                    emphasis: i(function () {
                                        return {
                                            type: "emphasis",
                                            children: [],
                                        };
                                    }),
                                    hardBreakEscape: i(C),
                                    hardBreakTrailing: i(C),
                                    htmlFlow: i(T, o),
                                    htmlFlowData: y,
                                    htmlText: i(T, o),
                                    htmlTextData: y,
                                    image: i(function () {
                                        return {
                                            type: "image",
                                            title: null,
                                            url: "",
                                            alt: null,
                                        };
                                    }),
                                    label: o,
                                    link: i(A),
                                    listItem: i(function (e) {
                                        return {
                                            type: "listItem",
                                            spread: e._spread,
                                            checked: null,
                                            children: [],
                                        };
                                    }),
                                    listItemValue: function (e) {
                                        this.data.expectingFirstListItemValue &&
                                            ((this.stack[
                                                this.stack.length - 2
                                            ].start = Number.parseInt(
                                                this.sliceSerialize(e),
                                                10
                                            )),
                                            (this.data.expectingFirstListItemValue =
                                                void 0));
                                    },
                                    listOrdered: i(S, function () {
                                        this.data.expectingFirstListItemValue =
                                            !0;
                                    }),
                                    listUnordered: i(S),
                                    paragraph: i(function () {
                                        return {
                                            type: "paragraph",
                                            children: [],
                                        };
                                    }),
                                    reference: function () {
                                        this.data.referenceType = "collapsed";
                                    },
                                    referenceString: o,
                                    resourceDestinationString: o,
                                    resourceTitleString: o,
                                    setextHeading: i(E),
                                    strong: i(function () {
                                        return { type: "strong", children: [] };
                                    }),
                                    thematicBreak: i(function () {
                                        return { type: "thematicBreak" };
                                    }),
                                },
                                exit: {
                                    atxHeading: g(),
                                    atxHeadingSequence: function (e) {
                                        let t =
                                            this.stack[this.stack.length - 1];
                                        t.depth ||
                                            (t.depth =
                                                this.sliceSerialize(e).length);
                                    },
                                    autolink: g(),
                                    autolinkEmail: function (e) {
                                        (v.call(this, e),
                                            (this.stack[
                                                this.stack.length - 1
                                            ].url =
                                                "mailto:" +
                                                this.sliceSerialize(e)));
                                    },
                                    autolinkProtocol: function (e) {
                                        (v.call(this, e),
                                            (this.stack[
                                                this.stack.length - 1
                                            ].url = this.sliceSerialize(e)));
                                    },
                                    blockQuote: g(),
                                    characterEscapeValue: v,
                                    characterReferenceMarkerHexadecimal: x,
                                    characterReferenceMarkerNumeric: x,
                                    characterReferenceValue: function (e) {
                                        let t,
                                            n = this.sliceSerialize(e),
                                            r =
                                                this.data
                                                    .characterReferenceType;
                                        r
                                            ? ((t = (0, a.C)(
                                                  n,
                                                  "characterReferenceMarkerNumeric" ===
                                                      r
                                                      ? 10
                                                      : 16
                                              )),
                                              (this.data.characterReferenceType =
                                                  void 0))
                                            : (t = (0, u.s)(n));
                                        let i =
                                            this.stack[this.stack.length - 1];
                                        i.value += t;
                                    },
                                    characterReference: function (e) {
                                        this.stack.pop().position.end = d(
                                            e.end
                                        );
                                    },
                                    codeFenced: g(function () {
                                        let e = this.resume();
                                        ((this.stack[
                                            this.stack.length - 1
                                        ].value = e.replace(
                                            /^(\r?\n|\r)|(\r?\n|\r)$/g,
                                            ""
                                        )),
                                            (this.data.flowCodeInside =
                                                void 0));
                                    }),
                                    codeFencedFence: function () {
                                        this.data.flowCodeInside ||
                                            (this.buffer(),
                                            (this.data.flowCodeInside = !0));
                                    },
                                    codeFencedFenceInfo: function () {
                                        let e = this.resume();
                                        this.stack[this.stack.length - 1].lang =
                                            e;
                                    },
                                    codeFencedFenceMeta: function () {
                                        let e = this.resume();
                                        this.stack[this.stack.length - 1].meta =
                                            e;
                                    },
                                    codeFlowValue: v,
                                    codeIndented: g(function () {
                                        let e = this.resume();
                                        this.stack[
                                            this.stack.length - 1
                                        ].value = e.replace(/(\r?\n|\r)$/g, "");
                                    }),
                                    codeText: g(function () {
                                        let e = this.resume();
                                        this.stack[
                                            this.stack.length - 1
                                        ].value = e;
                                    }),
                                    codeTextData: v,
                                    data: v,
                                    definition: g(),
                                    definitionDestinationString: function () {
                                        let e = this.resume();
                                        this.stack[this.stack.length - 1].url =
                                            e;
                                    },
                                    definitionLabelString: function (e) {
                                        let t = this.resume(),
                                            n =
                                                this.stack[
                                                    this.stack.length - 1
                                                ];
                                        ((n.label = t),
                                            (n.identifier = (0, c.B)(
                                                this.sliceSerialize(e)
                                            ).toLowerCase()));
                                    },
                                    definitionTitleString: function () {
                                        let e = this.resume();
                                        this.stack[
                                            this.stack.length - 1
                                        ].title = e;
                                    },
                                    emphasis: g(),
                                    hardBreakEscape: g(b),
                                    hardBreakTrailing: g(b),
                                    htmlFlow: g(function () {
                                        let e = this.resume();
                                        this.stack[
                                            this.stack.length - 1
                                        ].value = e;
                                    }),
                                    htmlFlowData: v,
                                    htmlText: g(function () {
                                        let e = this.resume();
                                        this.stack[
                                            this.stack.length - 1
                                        ].value = e;
                                    }),
                                    htmlTextData: v,
                                    image: g(function () {
                                        let e =
                                            this.stack[this.stack.length - 1];
                                        if (this.data.inReference) {
                                            let t =
                                                this.data.referenceType ||
                                                "shortcut";
                                            ((e.type += "Reference"),
                                                (e.referenceType = t),
                                                delete e.url,
                                                delete e.title);
                                        } else
                                            (delete e.identifier,
                                                delete e.label);
                                        this.data.referenceType = void 0;
                                    }),
                                    label: function () {
                                        let e =
                                                this.stack[
                                                    this.stack.length - 1
                                                ],
                                            t = this.resume(),
                                            n =
                                                this.stack[
                                                    this.stack.length - 1
                                                ];
                                        ((this.data.inReference = !0),
                                            "link" === n.type
                                                ? (n.children = e.children)
                                                : (n.alt = t));
                                    },
                                    labelText: function (e) {
                                        let t = this.sliceSerialize(e),
                                            n =
                                                this.stack[
                                                    this.stack.length - 2
                                                ];
                                        ((n.label = (0, l.s)(t)),
                                            (n.identifier = (0, c.B)(
                                                t
                                            ).toLowerCase()));
                                    },
                                    lineEnding: function (e) {
                                        let n =
                                            this.stack[this.stack.length - 1];
                                        if (this.data.atHardBreak) {
                                            ((n.children[
                                                n.children.length - 1
                                            ].position.end = d(e.end)),
                                                (this.data.atHardBreak =
                                                    void 0));
                                            return;
                                        }
                                        !this.data
                                            .setextHeadingSlurpLineEnding &&
                                            t.canContainEols.includes(n.type) &&
                                            (y.call(this, e), v.call(this, e));
                                    },
                                    link: g(function () {
                                        let e =
                                            this.stack[this.stack.length - 1];
                                        if (this.data.inReference) {
                                            let t =
                                                this.data.referenceType ||
                                                "shortcut";
                                            ((e.type += "Reference"),
                                                (e.referenceType = t),
                                                delete e.url,
                                                delete e.title);
                                        } else
                                            (delete e.identifier,
                                                delete e.label);
                                        this.data.referenceType = void 0;
                                    }),
                                    listItem: g(),
                                    listOrdered: g(),
                                    listUnordered: g(),
                                    paragraph: g(),
                                    referenceString: function (e) {
                                        let t = this.resume(),
                                            n =
                                                this.stack[
                                                    this.stack.length - 1
                                                ];
                                        ((n.label = t),
                                            (n.identifier = (0, c.B)(
                                                this.sliceSerialize(e)
                                            ).toLowerCase()),
                                            (this.data.referenceType = "full"));
                                    },
                                    resourceDestinationString: function () {
                                        let e = this.resume();
                                        this.stack[this.stack.length - 1].url =
                                            e;
                                    },
                                    resourceTitleString: function () {
                                        let e = this.resume();
                                        this.stack[
                                            this.stack.length - 1
                                        ].title = e;
                                    },
                                    resource: function () {
                                        this.data.inReference = void 0;
                                    },
                                    setextHeading: g(function () {
                                        this.data.setextHeadingSlurpLineEnding =
                                            void 0;
                                    }),
                                    setextHeadingLineSequence: function (e) {
                                        this.stack[
                                            this.stack.length - 1
                                        ].depth =
                                            61 ===
                                            this.sliceSerialize(e).codePointAt(
                                                0
                                            )
                                                ? 1
                                                : 2;
                                    },
                                    setextHeadingText: function () {
                                        this.data.setextHeadingSlurpLineEnding =
                                            !0;
                                    },
                                    strong: g(),
                                    thematicBreak: g(),
                                },
                            };
                            !(function e(t, n) {
                                let r = -1;
                                for (; ++r < n.length; ) {
                                    let i = n[r];
                                    Array.isArray(i)
                                        ? e(t, i)
                                        : (function (e, t) {
                                              let n;
                                              for (n in t)
                                                  if (h.call(t, n))
                                                      switch (n) {
                                                          case "canContainEols": {
                                                              let r = t[n];
                                                              r &&
                                                                  e[n].push(
                                                                      ...r
                                                                  );
                                                              break;
                                                          }
                                                          case "transforms": {
                                                              let r = t[n];
                                                              r &&
                                                                  e[n].push(
                                                                      ...r
                                                                  );
                                                              break;
                                                          }
                                                          case "enter":
                                                          case "exit": {
                                                              let r = t[n];
                                                              r &&
                                                                  Object.assign(
                                                                      e[n],
                                                                      r
                                                                  );
                                                          }
                                                      }
                                          })(t, i);
                                }
                            })(t, (e || {}).mdastExtensions || []);
                            let n = {};
                            return function (e) {
                                let r = { type: "root", children: [] },
                                    i = {
                                        stack: [r],
                                        tokenStack: [],
                                        config: t,
                                        enter: s,
                                        exit: m,
                                        buffer: o,
                                        resume: k,
                                        data: n,
                                    },
                                    a = [],
                                    l = -1;
                                for (; ++l < e.length; )
                                    ("listOrdered" === e[l][1].type ||
                                        "listUnordered" === e[l][1].type) &&
                                        ("enter" === e[l][0]
                                            ? a.push(l)
                                            : (l = (function (e, t, n) {
                                                  let r,
                                                      i,
                                                      o,
                                                      s,
                                                      a = t - 1,
                                                      l = -1,
                                                      c = !1;
                                                  for (; ++a <= n; ) {
                                                      let t = e[a];
                                                      switch (t[1].type) {
                                                          case "listUnordered":
                                                          case "listOrdered":
                                                          case "blockQuote":
                                                              ("enter" === t[0]
                                                                  ? l++
                                                                  : l--,
                                                                  (s = void 0));
                                                              break;
                                                          case "lineEndingBlank":
                                                              "enter" ===
                                                                  t[0] &&
                                                                  (!r ||
                                                                      s ||
                                                                      l ||
                                                                      o ||
                                                                      (o = a),
                                                                  (s = void 0));
                                                              break;
                                                          case "linePrefix":
                                                          case "listItemValue":
                                                          case "listItemMarker":
                                                          case "listItemPrefix":
                                                          case "listItemPrefixWhitespace":
                                                              break;
                                                          default:
                                                              s = void 0;
                                                      }
                                                      if (
                                                          (!l &&
                                                              "enter" ===
                                                                  t[0] &&
                                                              "listItemPrefix" ===
                                                                  t[1].type) ||
                                                          (-1 === l &&
                                                              "exit" === t[0] &&
                                                              ("listUnordered" ===
                                                                  t[1].type ||
                                                                  "listOrdered" ===
                                                                      t[1]
                                                                          .type))
                                                      ) {
                                                          if (r) {
                                                              let s = a;
                                                              for (
                                                                  i = void 0;
                                                                  s--;

                                                              ) {
                                                                  let t = e[s];
                                                                  if (
                                                                      "lineEnding" ===
                                                                          t[1]
                                                                              .type ||
                                                                      "lineEndingBlank" ===
                                                                          t[1]
                                                                              .type
                                                                  ) {
                                                                      if (
                                                                          "exit" ===
                                                                          t[0]
                                                                      )
                                                                          continue;
                                                                      (i &&
                                                                          ((e[
                                                                              i
                                                                          ][1].type =
                                                                              "lineEndingBlank"),
                                                                          (c =
                                                                              !0)),
                                                                          (t[1].type =
                                                                              "lineEnding"),
                                                                          (i =
                                                                              s));
                                                                  } else if (
                                                                      "linePrefix" ===
                                                                          t[1]
                                                                              .type ||
                                                                      "blockQuotePrefix" ===
                                                                          t[1]
                                                                              .type ||
                                                                      "blockQuotePrefixWhitespace" ===
                                                                          t[1]
                                                                              .type ||
                                                                      "blockQuoteMarker" ===
                                                                          t[1]
                                                                              .type ||
                                                                      "listItemIndent" ===
                                                                          t[1]
                                                                              .type
                                                                  );
                                                                  else break;
                                                              }
                                                              (o &&
                                                                  (!i ||
                                                                      o < i) &&
                                                                  (r._spread =
                                                                      !0),
                                                                  (r.end =
                                                                      Object.assign(
                                                                          {},
                                                                          i
                                                                              ? e[
                                                                                    i
                                                                                ][1]
                                                                                    .start
                                                                              : t[1]
                                                                                    .end
                                                                      )),
                                                                  e.splice(
                                                                      i || a,
                                                                      0,
                                                                      [
                                                                          "exit",
                                                                          r,
                                                                          t[2],
                                                                      ]
                                                                  ),
                                                                  a++,
                                                                  n++);
                                                          }
                                                          if (
                                                              "listItemPrefix" ===
                                                              t[1].type
                                                          ) {
                                                              let i = {
                                                                  type: "listItem",
                                                                  _spread: !1,
                                                                  start: Object.assign(
                                                                      {},
                                                                      t[1].start
                                                                  ),
                                                                  end: void 0,
                                                              };
                                                              ((r = i),
                                                                  e.splice(
                                                                      a,
                                                                      0,
                                                                      [
                                                                          "enter",
                                                                          i,
                                                                          t[2],
                                                                      ]
                                                                  ),
                                                                  a++,
                                                                  n++,
                                                                  (o = void 0),
                                                                  (s = !0));
                                                          }
                                                      }
                                                  }
                                                  return (
                                                      (e[t][1]._spread = c),
                                                      n
                                                  );
                                              })(e, a.pop(), l)));
                                for (l = -1; ++l < e.length; ) {
                                    let n = t[e[l][0]];
                                    h.call(n, e[l][1].type) &&
                                        n[e[l][1].type].call(
                                            Object.assign(
                                                {
                                                    sliceSerialize:
                                                        e[l][2].sliceSerialize,
                                                },
                                                i
                                            ),
                                            e[l][1]
                                        );
                                }
                                if (i.tokenStack.length > 0) {
                                    let e =
                                        i.tokenStack[i.tokenStack.length - 1];
                                    (e[1] || p).call(i, void 0, e[0]);
                                }
                                for (
                                    r.position = {
                                        start: d(
                                            e.length > 0
                                                ? e[0][1].start
                                                : {
                                                      line: 1,
                                                      column: 1,
                                                      offset: 0,
                                                  }
                                        ),
                                        end: d(
                                            e.length > 0
                                                ? e[e.length - 2][1].end
                                                : {
                                                      line: 1,
                                                      column: 1,
                                                      offset: 0,
                                                  }
                                        ),
                                    },
                                        l = -1;
                                    ++l < t.transforms.length;

                                )
                                    r = t.transforms[l](r) || r;
                                return r;
                            };
                            function i(e, t) {
                                return function (n) {
                                    (s.call(this, e(n), n),
                                        t && t.call(this, n));
                                };
                            }
                            function o() {
                                this.stack.push({
                                    type: "fragment",
                                    children: [],
                                });
                            }
                            function s(e, t, n) {
                                (this.stack[
                                    this.stack.length - 1
                                ].children.push(e),
                                    this.stack.push(e),
                                    this.tokenStack.push([t, n || void 0]),
                                    (e.position = {
                                        start: d(t.start),
                                        end: void 0,
                                    }));
                            }
                            function g(e) {
                                return function (t) {
                                    (e && e.call(this, t), m.call(this, t));
                                };
                            }
                            function m(e, t) {
                                let n = this.stack.pop(),
                                    r = this.tokenStack.pop();
                                if (r)
                                    r[0].type !== e.type &&
                                        (t
                                            ? t.call(this, e, r[0])
                                            : (r[1] || p).call(this, e, r[0]));
                                else
                                    throw Error(
                                        "Cannot close `" +
                                            e.type +
                                            "` (" +
                                            (0, f.L)({
                                                start: e.start,
                                                end: e.end,
                                            }) +
                                            "): it\u2019s not open"
                                    );
                                n.position.end = d(e.end);
                            }
                            function k() {
                                return (0, r.d)(this.stack.pop());
                            }
                            function y(e) {
                                let t =
                                        this.stack[this.stack.length - 1]
                                            .children,
                                    n = t[t.length - 1];
                                ((n && "text" === n.type) ||
                                    (((n = {
                                        type: "text",
                                        value: "",
                                    }).position = {
                                        start: d(e.start),
                                        end: void 0,
                                    }),
                                    t.push(n)),
                                    this.stack.push(n));
                            }
                            function v(e) {
                                let t = this.stack.pop();
                                ((t.value += this.sliceSerialize(e)),
                                    (t.position.end = d(e.end)));
                            }
                            function b() {
                                this.data.atHardBreak = !0;
                            }
                            function x(e) {
                                this.data.characterReferenceType = e.type;
                            }
                            function w() {
                                return {
                                    type: "code",
                                    lang: null,
                                    meta: null,
                                    value: "",
                                };
                            }
                            function E() {
                                return {
                                    type: "heading",
                                    depth: 0,
                                    children: [],
                                };
                            }
                            function C() {
                                return { type: "break" };
                            }
                            function T() {
                                return { type: "html", value: "" };
                            }
                            function A() {
                                return {
                                    type: "link",
                                    title: null,
                                    url: "",
                                    children: [],
                                };
                            }
                            function S(e) {
                                return {
                                    type: "list",
                                    ordered: "listOrdered" === e.type,
                                    start: null,
                                    spread: e._spread,
                                    children: [],
                                };
                            }
                        })(m)(
                            (0, i._)(
                                (0, o.q)(m)
                                    .document()
                                    .write((0, s.v)()(n, g, !0))
                            )
                        )
                    );
                };
            }
        },
        7277: (e, t, n) => {
            function r(e) {
                if (e) throw e;
            }
            n.d(t, { l: () => u });
            var i = n(92849),
                o = n(97471);
            function s(e) {
                if ("object" != typeof e || null === e) return !1;
                let t = Object.getPrototypeOf(e);
                return (
                    (null === t ||
                        t === Object.prototype ||
                        null === Object.getPrototypeOf(t)) &&
                    !(Symbol.toStringTag in e) &&
                    !(Symbol.iterator in e)
                );
            }
            var a = n(7711);
            let l = function (e) {
                    let t = this.constructor.prototype,
                        n = t[e],
                        r = function () {
                            return n.apply(r, arguments);
                        };
                    return (Object.setPrototypeOf(r, t), r);
                },
                c = {}.hasOwnProperty;
            let Processor = class Processor extends l {
                constructor() {
                    (super("copy"),
                        (this.Compiler = void 0),
                        (this.Parser = void 0),
                        (this.attachers = []),
                        (this.compiler = void 0),
                        (this.freezeIndex = -1),
                        (this.frozen = void 0),
                        (this.namespace = {}),
                        (this.parser = void 0),
                        (this.transformers = (function () {
                            let e = [],
                                t = {
                                    run: function (...t) {
                                        let n = -1,
                                            r = t.pop();
                                        if ("function" != typeof r)
                                            throw TypeError(
                                                "Expected function as last argument, not " +
                                                    r
                                            );
                                        !(function i(o, ...s) {
                                            let a = e[++n],
                                                l = -1;
                                            if (o) return void r(o);
                                            for (; ++l < t.length; )
                                                (null === s[l] ||
                                                    void 0 === s[l]) &&
                                                    (s[l] = t[l]);
                                            ((t = s),
                                                a
                                                    ? (function (e, t) {
                                                          let n;
                                                          return function (
                                                              ...t
                                                          ) {
                                                              let o,
                                                                  s =
                                                                      e.length >
                                                                      t.length;
                                                              s && t.push(r);
                                                              try {
                                                                  o = e.apply(
                                                                      this,
                                                                      t
                                                                  );
                                                              } catch (e) {
                                                                  if (s && n)
                                                                      throw e;
                                                                  return r(e);
                                                              }
                                                              s ||
                                                                  (o instanceof
                                                                  Promise
                                                                      ? o.then(
                                                                            i,
                                                                            r
                                                                        )
                                                                      : o instanceof
                                                                          Error
                                                                        ? r(o)
                                                                        : i(o));
                                                          };
                                                          function r(e, ...i) {
                                                              n ||
                                                                  ((n = !0),
                                                                  t(e, ...i));
                                                          }
                                                          function i(e) {
                                                              r(null, e);
                                                          }
                                                      })(
                                                          a,
                                                          i
                                                      )(...s)
                                                    : r(null, ...s));
                                        })(null, ...t);
                                    },
                                    use: function (n) {
                                        if ("function" != typeof n)
                                            throw TypeError(
                                                "Expected `middelware` to be a function, not " +
                                                    n
                                            );
                                        return (e.push(n), t);
                                    },
                                };
                            return t;
                        })()));
                }
                copy() {
                    let e = new Processor(),
                        t = -1;
                    for (; ++t < this.attachers.length; ) {
                        let n = this.attachers[t];
                        e.use(...n);
                    }
                    return (e.data(i(!0, {}, this.namespace)), e);
                }
                data(e, t) {
                    return "string" == typeof e
                        ? 2 == arguments.length
                            ? (d("data", this.frozen),
                              (this.namespace[e] = t),
                              this)
                            : (c.call(this.namespace, e) &&
                                  this.namespace[e]) ||
                              void 0
                        : e
                          ? (d("data", this.frozen), (this.namespace = e), this)
                          : this.namespace;
                }
                freeze() {
                    if (this.frozen) return this;
                    for (; ++this.freezeIndex < this.attachers.length; ) {
                        let [e, ...t] = this.attachers[this.freezeIndex];
                        if (!1 === t[0]) continue;
                        !0 === t[0] && (t[0] = void 0);
                        let n = e.call(this, ...t);
                        "function" == typeof n && this.transformers.use(n);
                    }
                    return (
                        (this.frozen = !0),
                        (this.freezeIndex = 1 / 0),
                        this
                    );
                }
                parse(e) {
                    this.freeze();
                    let t = m(e),
                        n = this.parser || this.Parser;
                    return (f("parse", n), n(String(t), t));
                }
                process(e, t) {
                    let n = this;
                    return (
                        this.freeze(),
                        f("process", this.parser || this.Parser),
                        h("process", this.compiler || this.Compiler),
                        t ? r(void 0, t) : new Promise(r)
                    );
                    function r(r, i) {
                        let s = m(e),
                            a = n.parse(s);
                        function l(e, n) {
                            e || !n
                                ? i(e)
                                : r
                                  ? r(n)
                                  : ((0, o.ok)(
                                        t,
                                        "`done` is defined if `resolve` is not"
                                    ),
                                    t(void 0, n));
                        }
                        n.run(a, s, function (e, t, r) {
                            var i, o;
                            if (e || !t || !r) return l(e);
                            let s = n.stringify(t, r);
                            ("string" == typeof (i = s) ||
                            ((o = i) &&
                                "object" == typeof o &&
                                "byteLength" in o &&
                                "byteOffset" in o)
                                ? (r.value = s)
                                : (r.result = s),
                                l(e, r));
                        });
                    }
                }
                processSync(e) {
                    let t,
                        n = !1;
                    return (
                        this.freeze(),
                        f("processSync", this.parser || this.Parser),
                        h("processSync", this.compiler || this.Compiler),
                        this.process(e, function (e, i) {
                            ((n = !0), r(e), (t = i));
                        }),
                        g("processSync", "process", n),
                        (0, o.ok)(
                            t,
                            "we either bailed on an error or have a tree"
                        ),
                        t
                    );
                }
                run(e, t, n) {
                    (p(e), this.freeze());
                    let r = this.transformers;
                    return (
                        n || "function" != typeof t || ((n = t), (t = void 0)),
                        n ? i(void 0, n) : new Promise(i)
                    );
                    function i(i, s) {
                        (0, o.ok)(
                            "function" != typeof t,
                            "`file` can\u2019t be a `done` anymore, we checked"
                        );
                        let a = m(t);
                        r.run(e, a, function (t, r, a) {
                            let l = r || e;
                            t
                                ? s(t)
                                : i
                                  ? i(l)
                                  : ((0, o.ok)(
                                        n,
                                        "`done` is defined if `resolve` is not"
                                    ),
                                    n(void 0, l, a));
                        });
                    }
                }
                runSync(e, t) {
                    let n,
                        i = !1;
                    return (
                        this.run(e, t, function (e, t) {
                            (r(e), (n = t), (i = !0));
                        }),
                        g("runSync", "run", i),
                        (0, o.ok)(
                            n,
                            "we either bailed on an error or have a tree"
                        ),
                        n
                    );
                }
                stringify(e, t) {
                    this.freeze();
                    let n = m(t),
                        r = this.compiler || this.Compiler;
                    return (h("stringify", r), p(e), r(e, n));
                }
                use(e, ...t) {
                    let n = this.attachers,
                        r = this.namespace;
                    if ((d("use", this.frozen), null == e));
                    else if ("function" == typeof e) l(e, t);
                    else if ("object" == typeof e)
                        Array.isArray(e) ? a(e) : o(e);
                    else
                        throw TypeError(
                            "Expected usable value, not `" + e + "`"
                        );
                    return this;
                    function o(e) {
                        if (!("plugins" in e) && !("settings" in e))
                            throw Error(
                                "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
                            );
                        (a(e.plugins),
                            e.settings &&
                                (r.settings = i(!0, r.settings, e.settings)));
                    }
                    function a(e) {
                        let t = -1;
                        if (null == e);
                        else if (Array.isArray(e))
                            for (; ++t < e.length; ) {
                                var n = e[t];
                                if ("function" == typeof n) l(n, []);
                                else if ("object" == typeof n)
                                    if (Array.isArray(n)) {
                                        let [e, ...t] = n;
                                        l(e, t);
                                    } else o(n);
                                else
                                    throw TypeError(
                                        "Expected usable value, not `" + n + "`"
                                    );
                            }
                        else
                            throw TypeError(
                                "Expected a list of plugins, not `" + e + "`"
                            );
                    }
                    function l(e, t) {
                        let r = -1,
                            o = -1;
                        for (; ++r < n.length; )
                            if (n[r][0] === e) {
                                o = r;
                                break;
                            }
                        if (-1 === o) n.push([e, ...t]);
                        else if (t.length > 0) {
                            let [r, ...a] = t,
                                l = n[o][1];
                            (s(l) && s(r) && (r = i(!0, l, r)),
                                (n[o] = [e, r, ...a]));
                        }
                    }
                }
            };
            let u = new Processor().freeze();
            function f(e, t) {
                if ("function" != typeof t)
                    throw TypeError("Cannot `" + e + "` without `parser`");
            }
            function h(e, t) {
                if ("function" != typeof t)
                    throw TypeError("Cannot `" + e + "` without `compiler`");
            }
            function d(e, t) {
                if (t)
                    throw Error(
                        "Cannot call `" +
                            e +
                            `\` on a frozen processor.
Create a new processor first, by calling it: use \`processor()\` instead of \`processor\`.`
                    );
            }
            function p(e) {
                if (!s(e) || "string" != typeof e.type)
                    throw TypeError("Expected node, got `" + e + "`");
            }
            function g(e, t, n) {
                if (!n)
                    throw Error(
                        "`" + e + "` finished async. Use `" + t + "` instead"
                    );
            }
            function m(e) {
                var t;
                return (t = e) &&
                    "object" == typeof t &&
                    "message" in t &&
                    "messages" in t
                    ? e
                    : new a.T(e);
            }
        },
        69143: (e, t, n) => {
            n.d(t, { C: () => r });
            let r = function (e) {
                var t, n;
                if (null == e) return o;
                if ("function" == typeof e) return i(e);
                if ("object" == typeof e) {
                    return Array.isArray(e)
                        ? (function (e) {
                              let t = [],
                                  n = -1;
                              for (; ++n < e.length; ) t[n] = r(e[n]);
                              return i(function (...e) {
                                  let n = -1;
                                  for (; ++n < t.length; )
                                      if (t[n].apply(this, e)) return !0;
                                  return !1;
                              });
                          })(e)
                        : ((t = e),
                          i(function (e) {
                              let n;
                              for (n in t) if (e[n] !== t[n]) return !1;
                              return !0;
                          }));
                }
                if ("string" == typeof e) {
                    return (
                        (n = e),
                        i(function (e) {
                            return e && e.type === n;
                        })
                    );
                }
                throw Error("Expected function, string, or object as test");
            };
            function i(e) {
                return function (t, n, r) {
                    return !!(
                        (function (e) {
                            return (
                                null !== e &&
                                "object" == typeof e &&
                                "type" in e
                            );
                        })(t) &&
                        e.call(
                            this,
                            t,
                            "number" == typeof n ? n : void 0,
                            r || void 0
                        )
                    );
                };
            }
            function o() {
                return !0;
            }
        },
        47188: (e, t, n) => {
            function r(e) {
                return e && "object" == typeof e
                    ? "position" in e || "type" in e
                        ? o(e.position)
                        : "start" in e || "end" in e
                          ? o(e)
                          : "line" in e || "column" in e
                            ? i(e)
                            : ""
                    : "";
            }
            function i(e) {
                return s(e && e.line) + ":" + s(e && e.column);
            }
            function o(e) {
                return i(e && e.start) + "-" + i(e && e.end);
            }
            function s(e) {
                return e && "number" == typeof e ? e : 1;
            }
            n.d(t, { L: () => r });
        },
        76814: (e, t, n) => {
            n.d(t, { dc: () => o, _Z: () => s, VG: () => a });
            var r = n(69143);
            let i = [],
                o = !1,
                s = "skip";
            function a(e, t, n, a) {
                let l;
                "function" == typeof t && "function" != typeof n
                    ? ((a = n), (n = t))
                    : (l = t);
                let c = (0, r.C)(l),
                    u = a ? -1 : 1;
                (function e(r, l, f) {
                    let h = r && "object" == typeof r ? r : {};
                    if ("string" == typeof h.type) {
                        let e =
                            "string" == typeof h.tagName
                                ? h.tagName
                                : "string" == typeof h.name
                                  ? h.name
                                  : void 0;
                        Object.defineProperty(d, "name", {
                            value:
                                "node (" +
                                r.type +
                                (e ? "<" + e + ">" : "") +
                                ")",
                        });
                    }
                    return d;
                    function d() {
                        var h;
                        let d,
                            p,
                            g,
                            m = i;
                        if (
                            (!t || c(r, l, f[f.length - 1] || void 0)) &&
                            (m = Array.isArray((h = n(r, f)))
                                ? h
                                : "number" == typeof h
                                  ? [!0, h]
                                  : null == h
                                    ? i
                                    : [h])[0] === o
                        )
                            return m;
                        if (
                            "children" in r &&
                            r.children &&
                            r.children &&
                            m[0] !== s
                        )
                            for (
                                p = (a ? r.children.length : -1) + u,
                                    g = f.concat(r);
                                p > -1 && p < r.children.length;

                            ) {
                                if ((d = e(r.children[p], p, g)())[0] === o)
                                    return d;
                                p = "number" == typeof d[1] ? d[1] : p + u;
                            }
                        return m;
                    }
                })(e, void 0, [])();
            }
        },
        47970: (e, t, n) => {
            n.d(t, { YR: () => i });
            var r = n(76814);
            function i(e, t, n, i) {
                let o, s, a;
                ("function" == typeof t && "function" != typeof n
                    ? ((s = void 0), (a = t), (o = n))
                    : ((s = t), (a = n), (o = i)),
                    (0, r.VG)(
                        e,
                        s,
                        function (e, t) {
                            let n = t[t.length - 1],
                                r = n ? n.children.indexOf(e) : void 0;
                            return a(e, r, n);
                        },
                        o
                    ));
            }
        },
        15946: (e, t, n) => {
            n.d(t, { o: () => VFileMessage });
            var r = n(47188);
            let VFileMessage = class VFileMessage extends Error {
                constructor(e, t, n) {
                    (super(), "string" == typeof t && ((n = t), (t = void 0)));
                    let i = "",
                        o = {},
                        s = !1;
                    if (
                        (t &&
                            (o =
                                ("line" in t && "column" in t) ||
                                ("start" in t && "end" in t)
                                    ? { place: t }
                                    : "type" in t
                                      ? { ancestors: [t], place: t.position }
                                      : { ...t }),
                        "string" == typeof e
                            ? (i = e)
                            : !o.cause &&
                              e &&
                              ((s = !0), (i = e.message), (o.cause = e)),
                        !o.ruleId && !o.source && "string" == typeof n)
                    ) {
                        let e = n.indexOf(":");
                        -1 === e
                            ? (o.ruleId = n)
                            : ((o.source = n.slice(0, e)),
                              (o.ruleId = n.slice(e + 1)));
                    }
                    if (!o.place && o.ancestors && o.ancestors) {
                        let e = o.ancestors[o.ancestors.length - 1];
                        e && (o.place = e.position);
                    }
                    let a =
                        o.place && "start" in o.place ? o.place.start : o.place;
                    ((this.ancestors = o.ancestors || void 0),
                        (this.cause = o.cause || void 0),
                        (this.column = a ? a.column : void 0),
                        (this.fatal = void 0),
                        this.file,
                        (this.message = i),
                        (this.line = a ? a.line : void 0),
                        (this.name = (0, r.L)(o.place) || "1:1"),
                        (this.place = o.place || void 0),
                        (this.reason = this.message),
                        (this.ruleId = o.ruleId || void 0),
                        (this.source = o.source || void 0),
                        (this.stack =
                            s && o.cause && "string" == typeof o.cause.stack
                                ? o.cause.stack
                                : ""),
                        this.actual,
                        this.expected,
                        this.note,
                        this.url);
                }
            };
            ((VFileMessage.prototype.file = ""),
                (VFileMessage.prototype.name = ""),
                (VFileMessage.prototype.reason = ""),
                (VFileMessage.prototype.message = ""),
                (VFileMessage.prototype.stack = ""),
                (VFileMessage.prototype.column = void 0),
                (VFileMessage.prototype.line = void 0),
                (VFileMessage.prototype.ancestors = void 0),
                (VFileMessage.prototype.cause = void 0),
                (VFileMessage.prototype.fatal = void 0),
                (VFileMessage.prototype.place = void 0),
                (VFileMessage.prototype.ruleId = void 0),
                (VFileMessage.prototype.source = void 0));
        },
        7711: (e, t, n) => {
            n.d(t, { T: () => VFile });
            var r = n(15946);
            let i = {
                basename: function (e, t) {
                    let n;
                    if (void 0 !== t && "string" != typeof t)
                        throw TypeError('"ext" argument must be a string');
                    o(e);
                    let r = 0,
                        i = -1,
                        s = e.length;
                    if (void 0 === t || 0 === t.length || t.length > e.length) {
                        for (; s--; )
                            if (47 === e.codePointAt(s)) {
                                if (n) {
                                    r = s + 1;
                                    break;
                                }
                            } else i < 0 && ((n = !0), (i = s + 1));
                        return i < 0 ? "" : e.slice(r, i);
                    }
                    if (t === e) return "";
                    let a = -1,
                        l = t.length - 1;
                    for (; s--; )
                        if (47 === e.codePointAt(s)) {
                            if (n) {
                                r = s + 1;
                                break;
                            }
                        } else
                            (a < 0 && ((n = !0), (a = s + 1)),
                                l > -1 &&
                                    (e.codePointAt(s) === t.codePointAt(l--)
                                        ? l < 0 && (i = s)
                                        : ((l = -1), (i = a))));
                    return (
                        r === i ? (i = a) : i < 0 && (i = e.length),
                        e.slice(r, i)
                    );
                },
                dirname: function (e) {
                    let t;
                    if ((o(e), 0 === e.length)) return ".";
                    let n = -1,
                        r = e.length;
                    for (; --r; )
                        if (47 === e.codePointAt(r)) {
                            if (t) {
                                n = r;
                                break;
                            }
                        } else t || (t = !0);
                    return n < 0
                        ? 47 === e.codePointAt(0)
                            ? "/"
                            : "."
                        : 1 === n && 47 === e.codePointAt(0)
                          ? "//"
                          : e.slice(0, n);
                },
                extname: function (e) {
                    let t;
                    o(e);
                    let n = e.length,
                        r = -1,
                        i = 0,
                        s = -1,
                        a = 0;
                    for (; n--; ) {
                        let o = e.codePointAt(n);
                        if (47 === o) {
                            if (t) {
                                i = n + 1;
                                break;
                            }
                            continue;
                        }
                        (r < 0 && ((t = !0), (r = n + 1)),
                            46 === o
                                ? s < 0
                                    ? (s = n)
                                    : 1 !== a && (a = 1)
                                : s > -1 && (a = -1));
                    }
                    return s < 0 ||
                        r < 0 ||
                        0 === a ||
                        (1 === a && s === r - 1 && s === i + 1)
                        ? ""
                        : e.slice(s, r);
                },
                join: function (...e) {
                    let t,
                        n = -1;
                    for (; ++n < e.length; )
                        (o(e[n]),
                            e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]));
                    return void 0 === t
                        ? "."
                        : (function (e) {
                              o(e);
                              let t = 47 === e.codePointAt(0),
                                  n = (function (e, t) {
                                      let n,
                                          r,
                                          i = "",
                                          o = 0,
                                          s = -1,
                                          a = 0,
                                          l = -1;
                                      for (; ++l <= e.length; ) {
                                          if (l < e.length)
                                              n = e.codePointAt(l);
                                          else if (47 === n) break;
                                          else n = 47;
                                          if (47 === n) {
                                              if (s === l - 1 || 1 === a);
                                              else if (s !== l - 1 && 2 === a) {
                                                  if (
                                                      i.length < 2 ||
                                                      2 !== o ||
                                                      46 !==
                                                          i.codePointAt(
                                                              i.length - 1
                                                          ) ||
                                                      46 !==
                                                          i.codePointAt(
                                                              i.length - 2
                                                          )
                                                  ) {
                                                      if (i.length > 2) {
                                                          if (
                                                              (r =
                                                                  i.lastIndexOf(
                                                                      "/"
                                                                  )) !==
                                                              i.length - 1
                                                          ) {
                                                              (r < 0
                                                                  ? ((i = ""),
                                                                    (o = 0))
                                                                  : (o =
                                                                        (i =
                                                                            i.slice(
                                                                                0,
                                                                                r
                                                                            ))
                                                                            .length -
                                                                        1 -
                                                                        i.lastIndexOf(
                                                                            "/"
                                                                        )),
                                                                  (s = l),
                                                                  (a = 0));
                                                              continue;
                                                          }
                                                      } else if (i.length > 0) {
                                                          ((i = ""),
                                                              (o = 0),
                                                              (s = l),
                                                              (a = 0));
                                                          continue;
                                                      }
                                                  }
                                                  t &&
                                                      ((i =
                                                          i.length > 0
                                                              ? i + "/.."
                                                              : ".."),
                                                      (o = 2));
                                              } else
                                                  (i.length > 0
                                                      ? (i +=
                                                            "/" +
                                                            e.slice(s + 1, l))
                                                      : (i = e.slice(s + 1, l)),
                                                      (o = l - s - 1));
                                              ((s = l), (a = 0));
                                          } else
                                              46 === n && a > -1
                                                  ? a++
                                                  : (a = -1);
                                      }
                                      return i;
                                  })(e, !t);
                              return (
                                  0 !== n.length || t || (n = "."),
                                  n.length > 0 &&
                                      47 === e.codePointAt(e.length - 1) &&
                                      (n += "/"),
                                  t ? "/" + n : n
                              );
                          })(t);
                },
                sep: "/",
            };
            function o(e) {
                if ("string" != typeof e)
                    throw TypeError(
                        "Path must be a string. Received " + JSON.stringify(e)
                    );
            }
            let s = {
                cwd: function () {
                    return "/";
                },
            };
            function a(e) {
                return !!(
                    null !== e &&
                    "object" == typeof e &&
                    "href" in e &&
                    e.href &&
                    "protocol" in e &&
                    e.protocol &&
                    void 0 === e.auth
                );
            }
            let l = [
                "history",
                "path",
                "basename",
                "stem",
                "extname",
                "dirname",
            ];
            let VFile = class VFile {
                constructor(e) {
                    let t, n;
                    ((t = e
                        ? a(e)
                            ? { path: e }
                            : "string" == typeof e ||
                                (function (e) {
                                    return !!(
                                        e &&
                                        "object" == typeof e &&
                                        "byteLength" in e &&
                                        "byteOffset" in e
                                    );
                                })(e)
                              ? { value: e }
                              : e
                        : {}),
                        (this.cwd = "cwd" in t ? "" : s.cwd()),
                        (this.data = {}),
                        (this.history = []),
                        (this.messages = []),
                        this.value,
                        this.map,
                        this.result,
                        this.stored);
                    let r = -1;
                    for (; ++r < l.length; ) {
                        let e = l[r];
                        e in t &&
                            void 0 !== t[e] &&
                            null !== t[e] &&
                            (this[e] = "history" === e ? [...t[e]] : t[e]);
                    }
                    for (n in t) l.includes(n) || (this[n] = t[n]);
                }
                get basename() {
                    return "string" == typeof this.path
                        ? i.basename(this.path)
                        : void 0;
                }
                set basename(e) {
                    (u(e, "basename"),
                        c(e, "basename"),
                        (this.path = i.join(this.dirname || "", e)));
                }
                get dirname() {
                    return "string" == typeof this.path
                        ? i.dirname(this.path)
                        : void 0;
                }
                set dirname(e) {
                    (f(this.basename, "dirname"),
                        (this.path = i.join(e || "", this.basename)));
                }
                get extname() {
                    return "string" == typeof this.path
                        ? i.extname(this.path)
                        : void 0;
                }
                set extname(e) {
                    if ((c(e, "extname"), f(this.dirname, "extname"), e)) {
                        if (46 !== e.codePointAt(0))
                            throw Error("`extname` must start with `.`");
                        if (e.includes(".", 1))
                            throw Error(
                                "`extname` cannot contain multiple dots"
                            );
                    }
                    this.path = i.join(this.dirname, this.stem + (e || ""));
                }
                get path() {
                    return this.history[this.history.length - 1];
                }
                set path(e) {
                    (a(e) &&
                        (e = (function (e) {
                            if ("string" == typeof e) e = new URL(e);
                            else if (!a(e)) {
                                let t = TypeError(
                                    'The "path" argument must be of type string or an instance of URL. Received `' +
                                        e +
                                        "`"
                                );
                                throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
                            }
                            if ("file:" !== e.protocol) {
                                let e = TypeError(
                                    "The URL must be of scheme file"
                                );
                                throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
                            }
                            return (function (e) {
                                if ("" !== e.hostname) {
                                    let e = TypeError(
                                        'File URL host must be "localhost" or empty on darwin'
                                    );
                                    throw (
                                        (e.code = "ERR_INVALID_FILE_URL_HOST"),
                                        e
                                    );
                                }
                                let t = e.pathname,
                                    n = -1;
                                for (; ++n < t.length; )
                                    if (
                                        37 === t.codePointAt(n) &&
                                        50 === t.codePointAt(n + 1)
                                    ) {
                                        let e = t.codePointAt(n + 2);
                                        if (70 === e || 102 === e) {
                                            let e = TypeError(
                                                "File URL path must not include encoded / characters"
                                            );
                                            throw (
                                                (e.code =
                                                    "ERR_INVALID_FILE_URL_PATH"),
                                                e
                                            );
                                        }
                                    }
                                return decodeURIComponent(t);
                            })(e);
                        })(e)),
                        u(e, "path"),
                        this.path !== e && this.history.push(e));
                }
                get stem() {
                    return "string" == typeof this.path
                        ? i.basename(this.path, this.extname)
                        : void 0;
                }
                set stem(e) {
                    (u(e, "stem"),
                        c(e, "stem"),
                        (this.path = i.join(
                            this.dirname || "",
                            e + (this.extname || "")
                        )));
                }
                fail(e, t, n) {
                    let r = this.message(e, t, n);
                    throw ((r.fatal = !0), r);
                }
                info(e, t, n) {
                    let r = this.message(e, t, n);
                    return ((r.fatal = void 0), r);
                }
                message(e, t, n) {
                    let i = new r.o(e, t, n);
                    return (
                        this.path &&
                            ((i.name = this.path + ":" + i.name),
                            (i.file = this.path)),
                        (i.fatal = !1),
                        this.messages.push(i),
                        i
                    );
                }
                toString(e) {
                    return void 0 === this.value
                        ? ""
                        : "string" == typeof this.value
                          ? this.value
                          : new TextDecoder(e || void 0).decode(this.value);
                }
            };
            function c(e, t) {
                if (e && e.includes(i.sep))
                    throw Error(
                        "`" +
                            t +
                            "` cannot be a path: did not expect `" +
                            i.sep +
                            "`"
                    );
            }
            function u(e, t) {
                if (!e) throw Error("`" + t + "` cannot be empty");
            }
            function f(e, t) {
                if (!e)
                    throw Error(
                        "Setting `" + t + "` requires `path` to be set too"
                    );
            }
        },
    },
]);
//# sourceMappingURL=vendors-node_modules_remark-gfm_lib_index_js-node_modules_remark-parse_lib_index_js-node_modu-44d0fc-3e698f7a6f0a.js.map
