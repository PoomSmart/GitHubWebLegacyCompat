"use strict";
(globalThis.webpackChunk_github_ui_github_ui =
    globalThis.webpackChunk_github_ui_github_ui || []).push([
    [
        "vendors-node_modules_mdast-util-gfm_lib_index_js-node_modules_micromark-extension-gfm_index_js",
    ],
    {
        95459: (e, t, n) => {
            n.d(t, { T: () => o });
            var i = n(76814),
                r = n(69143);
            function o(e, t, n) {
                let o = (0, r.C)((n || {}).ignore || []),
                    l = (function (e) {
                        let t = [];
                        if (!Array.isArray(e))
                            throw TypeError(
                                "Expected find and replace tuple or list of tuples"
                            );
                        let n = !e[0] || Array.isArray(e[0]) ? e : [e],
                            i = -1;
                        for (; ++i < n.length; ) {
                            var r;
                            let e = n[i];
                            t.push([
                                "string" == typeof (r = e[0])
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
                                          })(r),
                                          "g"
                                      )
                                    : r,
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
                for (; ++a < l.length; ) (0, i.VG)(e, "text", s);
                function s(e, t) {
                    let n,
                        i = -1;
                    for (; ++i < t.length; ) {
                        let e = t[i],
                            r = n ? n.children : void 0;
                        if (o(e, r ? r.indexOf(e) : void 0, n)) return;
                        n = e;
                    }
                    if (n)
                        return (function (e, t) {
                            let n = t[t.length - 1],
                                i = l[a][0],
                                r = l[a][1],
                                o = 0,
                                s = n.children.indexOf(e),
                                u = !1,
                                c = [];
                            i.lastIndex = 0;
                            let f = i.exec(e.value);
                            for (; f; ) {
                                let n = f.index,
                                    l = {
                                        index: f.index,
                                        input: f.input,
                                        stack: [...t, e],
                                    },
                                    a = r(...f, l);
                                if (
                                    ("string" == typeof a &&
                                        (a =
                                            a.length > 0
                                                ? { type: "text", value: a }
                                                : void 0),
                                    !1 === a
                                        ? (i.lastIndex = n + 1)
                                        : (o !== n &&
                                              c.push({
                                                  type: "text",
                                                  value: e.value.slice(o, n),
                                              }),
                                          Array.isArray(a)
                                              ? c.push(...a)
                                              : a && c.push(a),
                                          (o = n + f[0].length),
                                          (u = !0)),
                                    !i.global)
                                )
                                    break;
                                f = i.exec(e.value);
                            }
                            return (
                                u
                                    ? (o < e.value.length &&
                                          c.push({
                                              type: "text",
                                              value: e.value.slice(o),
                                          }),
                                      n.children.splice(s, 1, ...c))
                                    : (c = [e]),
                                s + c.length
                            );
                        })(e, t);
                }
            }
        },
        54157: (e, t, n) => {
            function i(e, t) {
                let n = String(e);
                if ("string" != typeof t) throw TypeError("Expected character");
                let i = 0,
                    r = n.indexOf(t);
                for (; -1 !== r; ) (i++, (r = n.indexOf(t, r + t.length)));
                return i;
            }
            n.d(t, { C: () => G, H: () => J });
            var r = n(97471),
                o = n(40574),
                l = n(95459);
            let a = "phrasing",
                s = ["autolink", "link", "image", "label"];
            function u(e) {
                this.enter(
                    { type: "link", title: null, url: "", children: [] },
                    e
                );
            }
            function c(e) {
                this.config.enter.autolinkProtocol.call(this, e);
            }
            function f(e) {
                this.config.exit.autolinkProtocol.call(this, e);
            }
            function h(e) {
                this.config.exit.data.call(this, e);
                let t = this.stack[this.stack.length - 1];
                ((0, r.ok)("link" === t.type),
                    (t.url = "http://" + this.sliceSerialize(e)));
            }
            function d(e) {
                this.config.exit.autolinkEmail.call(this, e);
            }
            function g(e) {
                this.exit(e);
            }
            function p(e) {
                (0, l.T)(
                    e,
                    [
                        [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, m],
                        [
                            /(^|[\s\p{P}\p{S}])([-\w.+]+)@([-\w]+(?:\.[-\w]+)+)/gu,
                            (_, prefix, local, domain) =>
                                prefix + b(`${local}@${domain}`),
                        ],
                    ],
                    { ignore: ["link", "linkReference"] }
                );
            }
            function m(e, t, n, r, o) {
                let l = "";
                if (
                    !k(o) ||
                    (/^w/i.test(t) && ((n = t + n), (t = ""), (l = "http://")),
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
                        r = n.indexOf(")"),
                        o = i(e, "("),
                        l = i(e, ")");
                    for (; -1 !== r && o > l; )
                        ((e += n.slice(0, r + 1)),
                            (r = (n = n.slice(r + 1)).indexOf(")")),
                            l++);
                    return [e, n];
                })(n + r);
                if (!a[0]) return !1;
                let s = {
                    type: "link",
                    title: null,
                    url: l + t + a[0],
                    children: [{ type: "text", value: t + a[0] }],
                };
                return a[1] ? [s, { type: "text", value: a[1] }] : s;
            }
            function b(e, t, n, i) {
                return (
                    !(!k(i, !0) || /[-\d_]$/.test(n)) && {
                        type: "link",
                        title: null,
                        url: "mailto:" + t + "@" + n,
                        children: [{ type: "text", value: t + "@" + n }],
                    }
                );
            }
            function k(e, t) {
                let n = e.input.charCodeAt(e.index - 1);
                return (
                    (0 === e.index || (0, o.Ny)(n) || (0, o.es)(n)) &&
                    (!t || 47 !== n)
                );
            }
            var x = n(9638);
            function v(e) {
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
            function C() {
                this.buffer();
            }
            function y(e) {
                let t = this.resume(),
                    n = this.stack[this.stack.length - 1];
                ((0, r.ok)("footnoteDefinition" === n.type),
                    (n.label = t),
                    (n.identifier = (0, x.B)(
                        this.sliceSerialize(e)
                    ).toLowerCase()));
            }
            function D(e) {
                this.exit(e);
            }
            function w(e) {
                this.enter(
                    { type: "footnoteReference", identifier: "", label: "" },
                    e
                );
            }
            function F() {
                this.buffer();
            }
            function E(e) {
                let t = this.resume(),
                    n = this.stack[this.stack.length - 1];
                ((0, r.ok)("footnoteReference" === n.type),
                    (n.label = t),
                    (n.identifier = (0, x.B)(
                        this.sliceSerialize(e)
                    ).toLowerCase()));
            }
            function S(e) {
                this.exit(e);
            }
            function A(e, t, n, i) {
                let r = n.createTracker(i),
                    o = r.move("[^"),
                    l = n.enter("footnoteReference"),
                    a = n.enter("reference");
                return (
                    (o += r.move(
                        n.safe(n.associationId(e), {
                            ...r.current(),
                            before: o,
                            after: "]",
                        })
                    )),
                    a(),
                    l(),
                    (o += r.move("]"))
                );
            }
            function L(e, t, n, i) {
                let r = n.createTracker(i),
                    o = r.move("[^"),
                    l = n.enter("footnoteDefinition"),
                    a = n.enter("label");
                return (
                    (o += r.move(
                        n.safe(n.associationId(e), {
                            ...r.current(),
                            before: o,
                            after: "]",
                        })
                    )),
                    a(),
                    (o += r.move(
                        "]:" + (e.children && e.children.length > 0 ? " " : "")
                    )),
                    r.shift(4),
                    (o += r.move(
                        n.indentLines(n.containerFlow(e, r.current()), T)
                    )),
                    l(),
                    o
                );
            }
            function T(e, t, n) {
                return 0 === t ? e : (n ? "" : "    ") + e;
            }
            A.peek = function () {
                return "[";
            };
            let I = [
                "autolink",
                "destinationLiteral",
                "destinationRaw",
                "reference",
                "titleQuote",
                "titleApostrophe",
            ];
            function O(e) {
                this.enter({ type: "delete", children: [] }, e);
            }
            function z(e) {
                this.exit(e);
            }
            function M(e, t, n, i) {
                let r = n.createTracker(i),
                    o = n.enter("strikethrough"),
                    l = r.move("~~");
                return (
                    (l += n.containerPhrasing(e, {
                        ...r.current(),
                        before: l,
                        after: "~",
                    })),
                    (l += r.move("~~")),
                    o(),
                    l
                );
            }
            function R(e) {
                return e.length;
            }
            function _(e) {
                let t = "string" == typeof e ? e.codePointAt(0) : 0;
                return 67 === t || 99 === t
                    ? 99
                    : 76 === t || 108 === t
                      ? 108
                      : 114 * (82 === t || 114 === t);
            }
            M.peek = function () {
                return "~";
            };
            var j = n(56177);
            function N(e) {
                let t = e._align;
                ((0, r.ok)(t, "expected `_align` on table"),
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
            function P(e) {
                (this.exit(e), (this.data.inTable = void 0));
            }
            function H(e) {
                this.enter({ type: "tableRow", children: [] }, e);
            }
            function B(e) {
                this.exit(e);
            }
            function $(e) {
                this.enter({ type: "tableCell", children: [] }, e);
            }
            function W(e) {
                let t = this.resume();
                this.data.inTable && (t = t.replace(/\\([\\|])/g, q));
                let n = this.stack[this.stack.length - 1];
                ((0, r.ok)("inlineCode" === n.type),
                    (n.value = t),
                    this.exit(e));
            }
            function q(e, t) {
                return "|" === t ? t : e;
            }
            function V(e) {
                let t = this.stack[this.stack.length - 2];
                ((0, r.ok)("listItem" === t.type),
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
                    (0, r.ok)("paragraph" === e.type);
                    let n = e.children[0];
                    if (n && "text" === n.type) {
                        let i,
                            r = t.children,
                            o = -1;
                        for (; ++o < r.length; ) {
                            let e = r[o];
                            if ("paragraph" === e.type) {
                                i = e;
                                break;
                            }
                        }
                        i === e &&
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
            function U(e, t, n, i) {
                let r = e.children[0],
                    o =
                        "boolean" == typeof e.checked &&
                        r &&
                        "paragraph" === r.type,
                    l = "[" + (e.checked ? "x" : " ") + "] ",
                    a = n.createTracker(i);
                o && a.move(l);
                let s = j.p.listItem(e, t, n, { ...i, ...a.current() });
                return (
                    o &&
                        (s = s.replace(
                            /^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,
                            function (e) {
                                return e + l;
                            }
                        )),
                    s
                );
            }
            function G() {
                return [
                    {
                        transforms: [p],
                        enter: {
                            literalAutolink: u,
                            literalAutolinkEmail: c,
                            literalAutolinkHttp: c,
                            literalAutolinkWww: c,
                        },
                        exit: {
                            literalAutolink: g,
                            literalAutolinkEmail: d,
                            literalAutolinkHttp: f,
                            literalAutolinkWww: h,
                        },
                    },
                    {
                        enter: {
                            gfmFootnoteDefinition: v,
                            gfmFootnoteDefinitionLabelString: C,
                            gfmFootnoteCall: w,
                            gfmFootnoteCallString: F,
                        },
                        exit: {
                            gfmFootnoteDefinition: D,
                            gfmFootnoteDefinitionLabelString: y,
                            gfmFootnoteCall: S,
                            gfmFootnoteCallString: E,
                        },
                    },
                    {
                        canContainEols: ["delete"],
                        enter: { strikethrough: O },
                        exit: { strikethrough: z },
                    },
                    {
                        enter: {
                            table: N,
                            tableData: $,
                            tableHeader: $,
                            tableRow: H,
                        },
                        exit: {
                            codeText: W,
                            table: P,
                            tableData: B,
                            tableHeader: B,
                            tableRow: B,
                        },
                    },
                    {
                        exit: {
                            taskListCheckValueChecked: V,
                            taskListCheckValueUnchecked: V,
                            paragraph: Q,
                        },
                    },
                ];
            }
            function J(e) {
                return {
                    extensions: [
                        {
                            unsafe: [
                                {
                                    character: "@",
                                    before: "[+\\-.\\w]",
                                    after: "[\\-.\\w]",
                                    inConstruct: a,
                                    notInConstruct: s,
                                },
                                {
                                    character: ".",
                                    before: "[Ww]",
                                    after: "[\\-.\\w]",
                                    inConstruct: a,
                                    notInConstruct: s,
                                },
                                {
                                    character: ":",
                                    before: "[ps]",
                                    after: "\\/",
                                    inConstruct: a,
                                    notInConstruct: s,
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
                                footnoteDefinition: L,
                                footnoteReference: A,
                            },
                        },
                        {
                            unsafe: [
                                {
                                    character: "~",
                                    inConstruct: "phrasing",
                                    notInConstruct: I,
                                },
                            ],
                            handlers: { delete: M },
                        },
                        (function (e) {
                            let t = e || {},
                                n = t.tableCellPadding,
                                i = t.tablePipeAlign,
                                r = t.stringLength,
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
                                    { atBreak: !0, character: ":", after: "-" },
                                    {
                                        atBreak: !0,
                                        character: "-",
                                        after: "[:|-]",
                                    },
                                ],
                                handlers: {
                                    inlineCode: function (e, t, n) {
                                        let i = j.p.inlineCode(e, t, n);
                                        return (
                                            n.stack.includes("tableCell") &&
                                                (i = i.replace(/\|/g, "\\$&")),
                                            i
                                        );
                                    },
                                    table: function (e, t, n, i) {
                                        return a(
                                            (function (e, t, n) {
                                                let i = e.children,
                                                    r = -1,
                                                    o = [],
                                                    l = t.enter("table");
                                                for (; ++r < i.length; )
                                                    o[r] = s(i[r], t, n);
                                                return (l(), o);
                                            })(e, n, i),
                                            e.align
                                        );
                                    },
                                    tableCell: l,
                                    tableRow: function (e, t, n, i) {
                                        let r = a([s(e, n, i)]);
                                        return r.slice(
                                            0,
                                            r.indexOf(`
`)
                                        );
                                    },
                                },
                            };
                            function l(e, t, n, i) {
                                let r = n.enter("tableCell"),
                                    l = n.enter("phrasing"),
                                    a = n.containerPhrasing(e, {
                                        ...i,
                                        before: o,
                                        after: o,
                                    });
                                return (l(), r(), a);
                            }
                            function a(e, t) {
                                return (function (e, t) {
                                    let n = t || {},
                                        i = (n.align || []).concat(),
                                        r = n.stringLength || R,
                                        o = [],
                                        l = [],
                                        a = [],
                                        s = [],
                                        u = 0,
                                        c = -1;
                                    for (; ++c < e.length; ) {
                                        let t = [],
                                            i = [],
                                            o = -1;
                                        for (
                                            e[c].length > u &&
                                            (u = e[c].length);
                                            ++o < e[c].length;

                                        ) {
                                            var f;
                                            let l =
                                                null == (f = e[c][o])
                                                    ? ""
                                                    : String(f);
                                            if (!1 !== n.alignDelimiters) {
                                                let e = r(l);
                                                ((i[o] = e),
                                                    (void 0 === s[o] ||
                                                        e > s[o]) &&
                                                        (s[o] = e));
                                            }
                                            t.push(l);
                                        }
                                        ((l[c] = t), (a[c] = i));
                                    }
                                    let h = -1;
                                    if ("object" == typeof i && "length" in i)
                                        for (; ++h < u; ) o[h] = _(i[h]);
                                    else {
                                        let e = _(i);
                                        for (; ++h < u; ) o[h] = e;
                                    }
                                    h = -1;
                                    let d = [],
                                        g = [];
                                    for (; ++h < u; ) {
                                        let e = o[h],
                                            t = "",
                                            i = "";
                                        99 === e
                                            ? ((t = ":"), (i = ":"))
                                            : 108 === e
                                              ? (t = ":")
                                              : 114 === e && (i = ":");
                                        let r =
                                                !1 === n.alignDelimiters
                                                    ? 1
                                                    : Math.max(
                                                          1,
                                                          s[h] -
                                                              t.length -
                                                              i.length
                                                      ),
                                            l = t + "-".repeat(r) + i;
                                        (!1 !== n.alignDelimiters &&
                                            ((r = t.length + r + i.length) >
                                                s[h] && (s[h] = r),
                                            (g[h] = r)),
                                            (d[h] = l));
                                    }
                                    (l.splice(1, 0, d),
                                        a.splice(1, 0, g),
                                        (c = -1));
                                    let p = [];
                                    for (; ++c < l.length; ) {
                                        let e = l[c],
                                            t = a[c];
                                        h = -1;
                                        let i = [];
                                        for (; ++h < u; ) {
                                            let r = e[h] || "",
                                                l = "",
                                                a = "";
                                            if (!1 !== n.alignDelimiters) {
                                                let e = s[h] - (t[h] || 0),
                                                    n = o[h];
                                                114 === n
                                                    ? (l = " ".repeat(e))
                                                    : 99 === n
                                                      ? e % 2
                                                          ? ((l = " ".repeat(
                                                                e / 2 + 0.5
                                                            )),
                                                            (a = " ".repeat(
                                                                e / 2 - 0.5
                                                            )))
                                                          : (a = l =
                                                                " ".repeat(
                                                                    e / 2
                                                                ))
                                                      : (a = " ".repeat(e));
                                            }
                                            (!1 === n.delimiterStart ||
                                                h ||
                                                i.push("|"),
                                                !1 !== n.padding &&
                                                    (!1 !== n.alignDelimiters ||
                                                        "" !== r) &&
                                                    (!1 !== n.delimiterStart ||
                                                        h) &&
                                                    i.push(" "),
                                                !1 !== n.alignDelimiters &&
                                                    i.push(l),
                                                i.push(r),
                                                !1 !== n.alignDelimiters &&
                                                    i.push(a),
                                                !1 !== n.padding && i.push(" "),
                                                (!1 !== n.delimiterEnd ||
                                                    h !== u - 1) &&
                                                    i.push("|"));
                                        }
                                        p.push(
                                            !1 === n.delimiterEnd
                                                ? i.join("").replace(/ +$/, "")
                                                : i.join("")
                                        );
                                    }
                                    return p.join(`
`);
                                })(e, {
                                    align: t,
                                    alignDelimiters: i,
                                    padding: n,
                                    stringLength: r,
                                });
                            }
                            function s(e, t, n) {
                                let i = e.children,
                                    r = -1,
                                    o = [],
                                    a = t.enter("tableRow");
                                for (; ++r < i.length; )
                                    o[r] = l(i[r], e, t, n);
                                return (a(), o);
                            }
                        })(e),
                        {
                            unsafe: [
                                { atBreak: !0, character: "-", after: "[:|-]" },
                            ],
                            handlers: { listItem: U },
                        },
                    ],
                };
            }
        },
        56177: (e, t, n) => {
            function i(e, t, n) {
                return ">" + (n ? "" : " ") + e;
            }
            n.d(t, { p: () => E });
            var r = n(69384);
            function o(e, t, n, i) {
                let o = -1;
                for (; ++o < n.unsafe.length; )
                    if (
                        `
` === n.unsafe[o].character &&
                        (0, r.q)(n.stack, n.unsafe[o])
                    )
                        return /[ \t]/.test(i.before) ? "" : " ";
                return `\\
`;
            }
            var l = n(35857);
            function a(e, t, n) {
                return (n ? "" : "    ") + e;
            }
            function s(e) {
                let t = e.options.quote || '"';
                if ('"' !== t && "'" !== t)
                    throw Error(
                        "Cannot serialize title with `" +
                            t +
                            "` for `options.quote`, expected `\"`, or `'`"
                    );
                return t;
            }
            var u = n(23503),
                c = n(10691);
            function f(e, t, n) {
                let i = (0, c.S)(e),
                    r = (0, c.S)(t);
                return void 0 === i
                    ? void 0 === r
                        ? "_" === n
                            ? { inside: !0, outside: !0 }
                            : { inside: !1, outside: !1 }
                        : 1 === r
                          ? { inside: !0, outside: !0 }
                          : { inside: !1, outside: !0 }
                    : 1 === i
                      ? void 0 === r
                          ? { inside: !1, outside: !1 }
                          : 1 === r
                            ? { inside: !0, outside: !0 }
                            : { inside: !1, outside: !1 }
                      : void 0 === r
                        ? { inside: !1, outside: !1 }
                        : 1 === r
                          ? { inside: !0, outside: !1 }
                          : { inside: !1, outside: !1 };
            }
            function h(e, t, n, i) {
                let r = (function (e) {
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
                    l = n.createTracker(i),
                    a = l.move(r),
                    s = l.move(
                        n.containerPhrasing(e, {
                            after: r,
                            before: a,
                            ...l.current(),
                        })
                    ),
                    c = s.charCodeAt(0),
                    h = f(i.before.charCodeAt(i.before.length - 1), c, r);
                h.inside && (s = (0, u.T)(c) + s.slice(1));
                let d = s.charCodeAt(s.length - 1),
                    g = f(i.after.charCodeAt(0), d, r);
                g.inside && (s = s.slice(0, -1) + (0, u.T)(d));
                let p = l.move(r);
                return (
                    o(),
                    (n.attentionEncodeSurroundingInfo = {
                        after: g.outside,
                        before: h.outside,
                    }),
                    a + s + p
                );
            }
            h.peek = function (e, t, n) {
                return n.options.emphasis || "*";
            };
            var d = n(5594);
            function g(e) {
                return e.value || "";
            }
            function p(e, t, n, i) {
                let r = s(n),
                    o = '"' === r ? "Quote" : "Apostrophe",
                    l = n.enter("image"),
                    a = n.enter("label"),
                    u = n.createTracker(i),
                    c = u.move("![");
                return (
                    (c += u.move(
                        n.safe(e.alt, { before: c, after: "]", ...u.current() })
                    )),
                    (c += u.move("](")),
                    a(),
                    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
                        ? ((a = n.enter("destinationLiteral")),
                          (c += u.move("<")),
                          (c += u.move(
                              n.safe(e.url, {
                                  before: c,
                                  after: ">",
                                  ...u.current(),
                              })
                          )),
                          (c += u.move(">")))
                        : ((a = n.enter("destinationRaw")),
                          (c += u.move(
                              n.safe(e.url, {
                                  before: c,
                                  after: e.title ? " " : ")",
                                  ...u.current(),
                              })
                          ))),
                    a(),
                    e.title &&
                        ((a = n.enter(`title${o}`)),
                        (c += u.move(" " + r)),
                        (c += u.move(
                            n.safe(e.title, {
                                before: c,
                                after: r,
                                ...u.current(),
                            })
                        )),
                        (c += u.move(r)),
                        a()),
                    (c += u.move(")")),
                    l(),
                    c
                );
            }
            function m(e, t, n, i) {
                let r = e.referenceType,
                    o = n.enter("imageReference"),
                    l = n.enter("label"),
                    a = n.createTracker(i),
                    s = a.move("!["),
                    u = n.safe(e.alt, {
                        before: s,
                        after: "]",
                        ...a.current(),
                    });
                ((s += a.move(u + "][")), l());
                let c = n.stack;
                ((n.stack = []), (l = n.enter("reference")));
                let f = n.safe(n.associationId(e), {
                    before: s,
                    after: "]",
                    ...a.current(),
                });
                return (
                    l(),
                    (n.stack = c),
                    o(),
                    "full" !== r && u && u === f
                        ? "shortcut" === r
                            ? (s = s.slice(0, -1))
                            : (s += a.move("]"))
                        : (s += a.move(f + "]")),
                    s
                );
            }
            function b(e, t, n) {
                let i = e.value || "",
                    r = "`",
                    o = -1;
                for (; RegExp("(^|[^`])" + r + "([^`]|$)").test(i); ) r += "`";
                for (
                    /[^ \r\n]/.test(i) &&
                    ((/^[ \r\n]/.test(i) && /[ \r\n]$/.test(i)) ||
                        /^`|`$/.test(i)) &&
                    (i = " " + i + " ");
                    ++o < n.unsafe.length;

                ) {
                    let e,
                        t = n.unsafe[o],
                        r = n.compilePattern(t);
                    if (t.atBreak)
                        for (; (e = r.exec(i)); ) {
                            let t = e.index;
                            (10 === i.charCodeAt(t) &&
                                13 === i.charCodeAt(t - 1) &&
                                t--,
                                (i =
                                    i.slice(0, t) +
                                    " " +
                                    i.slice(e.index + 1)));
                        }
                }
                return r + i + r;
            }
            ((g.peek = function () {
                return "<";
            }),
                (p.peek = function () {
                    return "!";
                }),
                (m.peek = function () {
                    return "!";
                }),
                (b.peek = function () {
                    return "`";
                }));
            var k = n(72534);
            function x(e, t) {
                let n = (0, k.d)(e);
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
            function v(e, t, n, i) {
                let r,
                    o,
                    l = s(n),
                    a = '"' === l ? "Quote" : "Apostrophe",
                    u = n.createTracker(i);
                if (x(e, n)) {
                    let t = n.stack;
                    ((n.stack = []), (r = n.enter("autolink")));
                    let i = u.move("<");
                    return (
                        (i += u.move(
                            n.containerPhrasing(e, {
                                before: i,
                                after: ">",
                                ...u.current(),
                            })
                        )),
                        (i += u.move(">")),
                        r(),
                        (n.stack = t),
                        i
                    );
                }
                ((r = n.enter("link")), (o = n.enter("label")));
                let c = u.move("[");
                return (
                    (c += u.move(
                        n.containerPhrasing(e, {
                            before: c,
                            after: "](",
                            ...u.current(),
                        })
                    )),
                    (c += u.move("](")),
                    o(),
                    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
                        ? ((o = n.enter("destinationLiteral")),
                          (c += u.move("<")),
                          (c += u.move(
                              n.safe(e.url, {
                                  before: c,
                                  after: ">",
                                  ...u.current(),
                              })
                          )),
                          (c += u.move(">")))
                        : ((o = n.enter("destinationRaw")),
                          (c += u.move(
                              n.safe(e.url, {
                                  before: c,
                                  after: e.title ? " " : ")",
                                  ...u.current(),
                              })
                          ))),
                    o(),
                    e.title &&
                        ((o = n.enter(`title${a}`)),
                        (c += u.move(" " + l)),
                        (c += u.move(
                            n.safe(e.title, {
                                before: c,
                                after: l,
                                ...u.current(),
                            })
                        )),
                        (c += u.move(l)),
                        o()),
                    (c += u.move(")")),
                    r(),
                    c
                );
            }
            function C(e, t, n, i) {
                let r = e.referenceType,
                    o = n.enter("linkReference"),
                    l = n.enter("label"),
                    a = n.createTracker(i),
                    s = a.move("["),
                    u = n.containerPhrasing(e, {
                        before: s,
                        after: "]",
                        ...a.current(),
                    });
                ((s += a.move(u + "][")), l());
                let c = n.stack;
                ((n.stack = []), (l = n.enter("reference")));
                let f = n.safe(n.associationId(e), {
                    before: s,
                    after: "]",
                    ...a.current(),
                });
                return (
                    l(),
                    (n.stack = c),
                    o(),
                    "full" !== r && u && u === f
                        ? "shortcut" === r
                            ? (s = s.slice(0, -1))
                            : (s += a.move("]"))
                        : (s += a.move(f + "]")),
                    s
                );
            }
            function y(e) {
                let t = e.options.bullet || "*";
                if ("*" !== t && "+" !== t && "-" !== t)
                    throw Error(
                        "Cannot serialize items with `" +
                            t +
                            "` for `options.bullet`, expected `*`, `+`, or `-`"
                    );
                return t;
            }
            function D(e) {
                let t = e.options.rule || "*";
                if ("*" !== t && "-" !== t && "_" !== t)
                    throw Error(
                        "Cannot serialize rules with `" +
                            t +
                            "` for `options.rule`, expected `*`, `-`, or `_`"
                    );
                return t;
            }
            ((v.peek = function (e, t, n) {
                return x(e, n) ? "<" : "[";
            }),
                (C.peek = function () {
                    return "[";
                }));
            let w = (0, n(69143).C)([
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
            function F(e, t, n, i) {
                let r = (function (e) {
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
                    l = n.createTracker(i),
                    a = l.move(r + r),
                    s = l.move(
                        n.containerPhrasing(e, {
                            after: r,
                            before: a,
                            ...l.current(),
                        })
                    ),
                    c = s.charCodeAt(0),
                    h = f(i.before.charCodeAt(i.before.length - 1), c, r);
                h.inside && (s = (0, u.T)(c) + s.slice(1));
                let d = s.charCodeAt(s.length - 1),
                    g = f(i.after.charCodeAt(0), d, r);
                g.inside && (s = s.slice(0, -1) + (0, u.T)(d));
                let p = l.move(r + r);
                return (
                    o(),
                    (n.attentionEncodeSurroundingInfo = {
                        after: g.outside,
                        before: h.outside,
                    }),
                    a + s + p
                );
            }
            F.peek = function (e, t, n) {
                return n.options.strong || "*";
            };
            let E = {
                blockquote: function (e, t, n, r) {
                    let o = n.enter("blockquote"),
                        l = n.createTracker(r);
                    (l.move("> "), l.shift(2));
                    let a = n.indentLines(n.containerFlow(e, l.current()), i);
                    return (o(), a);
                },
                break: o,
                code: function (e, t, n, i) {
                    let r = (function (e) {
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
                        s = "`" === r ? "GraveAccent" : "Tilde";
                    if ((0, l.m)(e, n)) {
                        let e = n.enter("codeIndented"),
                            t = n.indentLines(o, a);
                        return (e(), t);
                    }
                    let u = n.createTracker(i),
                        c = r.repeat(
                            Math.max(
                                (function (e, t) {
                                    let n = String(e),
                                        i = n.indexOf(t),
                                        r = i,
                                        o = 0,
                                        l = 0;
                                    if ("string" != typeof t)
                                        throw TypeError("Expected substring");
                                    for (; -1 !== i; )
                                        (i === r ? ++o > l && (l = o) : (o = 1),
                                            (r = i + t.length),
                                            (i = n.indexOf(t, r)));
                                    return l;
                                })(o, r) + 1,
                                3
                            )
                        ),
                        f = n.enter("codeFenced"),
                        h = u.move(c);
                    if (e.lang) {
                        let t = n.enter(`codeFencedLang${s}`);
                        ((h += u.move(
                            n.safe(e.lang, {
                                before: h,
                                after: " ",
                                encode: ["`"],
                                ...u.current(),
                            })
                        )),
                            t());
                    }
                    if (e.lang && e.meta) {
                        let t = n.enter(`codeFencedMeta${s}`);
                        ((h += u.move(" ")),
                            (h += u.move(
                                n.safe(e.meta, {
                                    before: h,
                                    after: `
`,
                                    encode: ["`"],
                                    ...u.current(),
                                })
                            )),
                            t());
                    }
                    return (
                        (h += u.move(`
`)),
                        o &&
                            (h += u.move(
                                o +
                                    `
`
                            )),
                        (h += u.move(c)),
                        f(),
                        h
                    );
                },
                definition: function (e, t, n, i) {
                    let r = s(n),
                        o = '"' === r ? "Quote" : "Apostrophe",
                        l = n.enter("definition"),
                        a = n.enter("label"),
                        u = n.createTracker(i),
                        c = u.move("[");
                    return (
                        (c += u.move(
                            n.safe(n.associationId(e), {
                                before: c,
                                after: "]",
                                ...u.current(),
                            })
                        )),
                        (c += u.move("]: ")),
                        a(),
                        !e.url || /[\0- \u007F]/.test(e.url)
                            ? ((a = n.enter("destinationLiteral")),
                              (c += u.move("<")),
                              (c += u.move(
                                  n.safe(e.url, {
                                      before: c,
                                      after: ">",
                                      ...u.current(),
                                  })
                              )),
                              (c += u.move(">")))
                            : ((a = n.enter("destinationRaw")),
                              (c += u.move(
                                  n.safe(e.url, {
                                      before: c,
                                      after: e.title
                                          ? " "
                                          : `
`,
                                      ...u.current(),
                                  })
                              ))),
                        a(),
                        e.title &&
                            ((a = n.enter(`title${o}`)),
                            (c += u.move(" " + r)),
                            (c += u.move(
                                n.safe(e.title, {
                                    before: c,
                                    after: r,
                                    ...u.current(),
                                })
                            )),
                            (c += u.move(r)),
                            a()),
                        l(),
                        c
                    );
                },
                emphasis: h,
                hardBreak: o,
                heading: function (e, t, n, i) {
                    let r = Math.max(Math.min(6, e.depth || 1), 1),
                        o = n.createTracker(i);
                    if ((0, d.f)(e, n)) {
                        let t = n.enter("headingSetext"),
                            i = n.enter("phrasing"),
                            l = n.containerPhrasing(e, {
                                ...o.current(),
                                before: `
`,
                                after: `
`,
                            });
                        return (
                            i(),
                            t(),
                            l +
                                `
` +
                                (1 === r ? "=" : "-").repeat(
                                    l.length -
                                        (Math.max(
                                            l.lastIndexOf("\r"),
                                            l.lastIndexOf(`
`)
                                        ) +
                                            1)
                                )
                        );
                    }
                    let l = "#".repeat(r),
                        a = n.enter("headingAtx"),
                        s = n.enter("phrasing");
                    o.move(l + " ");
                    let c = n.containerPhrasing(e, {
                        before: "# ",
                        after: `
`,
                        ...o.current(),
                    });
                    return (
                        /^[\t ]/.test(c) &&
                            (c = (0, u.T)(c.charCodeAt(0)) + c.slice(1)),
                        (c = c ? l + " " + c : l),
                        n.options.closeAtx && (c += " " + l),
                        s(),
                        a(),
                        c
                    );
                },
                html: g,
                image: p,
                imageReference: m,
                inlineCode: b,
                link: v,
                linkReference: C,
                list: function (e, t, n, i) {
                    let r = n.enter("list"),
                        o = n.bulletCurrent,
                        l = e.ordered
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
                            : y(n),
                        a = e.ordered
                            ? "." === l
                                ? ")"
                                : "."
                            : (function (e) {
                                  let t = y(e),
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
                        s = !!t && !!n.bulletLastUsed && l === n.bulletLastUsed;
                    if (!e.ordered) {
                        let t = e.children ? e.children[0] : void 0;
                        if (
                            (("*" !== l && "-" !== l) ||
                                !t ||
                                (t.children && t.children[0]) ||
                                "list" !== n.stack[n.stack.length - 1] ||
                                "listItem" !== n.stack[n.stack.length - 2] ||
                                "list" !== n.stack[n.stack.length - 3] ||
                                "listItem" !== n.stack[n.stack.length - 4] ||
                                0 !== n.indexStack[n.indexStack.length - 1] ||
                                0 !== n.indexStack[n.indexStack.length - 2] ||
                                0 !== n.indexStack[n.indexStack.length - 3] ||
                                (s = !0),
                            D(n) === l && t)
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
                                    s = !0;
                                    break;
                                }
                            }
                        }
                    }
                    (s && (l = a), (n.bulletCurrent = l));
                    let u = n.containerFlow(e, i);
                    return (
                        (n.bulletLastUsed = l),
                        (n.bulletCurrent = o),
                        r(),
                        u
                    );
                },
                listItem: function (e, t, n, i) {
                    let r = (function (e) {
                            let t = e.options.listItemIndent || "one";
                            if ("tab" !== t && "one" !== t && "mixed" !== t)
                                throw Error(
                                    "Cannot serialize items with `" +
                                        t +
                                        "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
                                );
                            return t;
                        })(n),
                        o = n.bulletCurrent || y(n);
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
                    let l = o.length + 1;
                    ("tab" === r ||
                        ("mixed" === r &&
                            ((t && "list" === t.type && t.spread) ||
                                e.spread))) &&
                        (l = 4 * Math.ceil(l / 4));
                    let a = n.createTracker(i);
                    (a.move(o + " ".repeat(l - o.length)), a.shift(l));
                    let s = n.enter("listItem"),
                        u = n.indentLines(
                            n.containerFlow(e, a.current()),
                            function (e, t, n) {
                                return t
                                    ? (n ? "" : " ".repeat(l)) + e
                                    : (n ? o : o + " ".repeat(l - o.length)) +
                                          e;
                            }
                        );
                    return (s(), u);
                },
                paragraph: function (e, t, n, i) {
                    let r = n.enter("paragraph"),
                        o = n.enter("phrasing"),
                        l = n.containerPhrasing(e, i);
                    return (o(), r(), l);
                },
                root: function (e, t, n, i) {
                    return (
                        e.children.some(function (e) {
                            return w(e);
                        })
                            ? n.containerPhrasing
                            : n.containerFlow
                    ).call(n, e, i);
                },
                strong: F,
                text: function (e, t, n, i) {
                    return n.safe(e.value, i);
                },
                thematicBreak: function (e, t, n) {
                    let i = (D(n) + (n.options.ruleSpaces ? " " : "")).repeat(
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
                    return n.options.ruleSpaces ? i.slice(0, -1) : i;
                },
            };
        },
        23503: (e, t, n) => {
            n.d(t, { T: () => i });
            function i(e) {
                return "&#x" + e.toString(16).toUpperCase() + ";";
            }
        },
        35857: (e, t, n) => {
            n.d(t, { m: () => i });
            function i(e, t) {
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
            n.d(t, { f: () => l });
            var i = n(47970),
                r = n(76814),
                o = n(72534);
            function l(e, t) {
                let n = !1;
                return (
                    (0, i.YR)(e, function (e) {
                        if (
                            ("value" in e && /\r?\n|\r/.test(e.value)) ||
                            "break" === e.type
                        )
                            return ((n = !0), r.dc);
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
            function i(e, t) {
                return r(e, t.inConstruct, !0) && !r(e, t.notInConstruct, !1);
            }
            function r(e, t, n) {
                if (("string" == typeof t && (t = [t]), !t || 0 === t.length))
                    return n;
                let i = -1;
                for (; ++i < t.length; ) if (e.includes(t[i])) return !0;
                return !1;
            }
            n.d(t, { q: () => i });
        },
        84600: (e, t, n) => {
            n.d(t, { T: () => X, I: () => ee });
            var i = n(5389),
                r = n(40574);
            let o = {
                    tokenize: function (e, t, n) {
                        let i = 0;
                        return function t(o) {
                            return (87 === o || 119 === o) && i < 3
                                ? (i++, e.consume(o), t)
                                : 46 === o && 3 === i
                                  ? (e.consume(o), r)
                                  : n(o);
                        };
                        function r(e) {
                            return null === e ? n(e) : t(e);
                        }
                    },
                    partial: !0,
                },
                l = {
                    tokenize: function (e, t, n) {
                        let i, o, l;
                        return a;
                        function a(t) {
                            return 46 === t || 95 === t
                                ? e.check(s, c, u)(t)
                                : null === t ||
                                    (0, r.Ee)(t) ||
                                    (0, r.Ny)(t) ||
                                    (45 !== t && (0, r.es)(t))
                                  ? c(t)
                                  : ((l = !0), e.consume(t), a);
                        }
                        function u(t) {
                            return (
                                95 === t ? (i = !0) : ((o = i), (i = void 0)),
                                e.consume(t),
                                a
                            );
                        }
                        function c(e) {
                            return o || i || !l ? n(e) : t(e);
                        }
                    },
                    partial: !0,
                },
                a = {
                    tokenize: function (e, t) {
                        let n = 0,
                            i = 0;
                        return o;
                        function o(a) {
                            return 40 === a
                                ? (n++, e.consume(a), o)
                                : 41 === a && i < n
                                  ? l(a)
                                  : 33 === a ||
                                      34 === a ||
                                      38 === a ||
                                      39 === a ||
                                      41 === a ||
                                      42 === a ||
                                      44 === a ||
                                      46 === a ||
                                      58 === a ||
                                      59 === a ||
                                      60 === a ||
                                      63 === a ||
                                      93 === a ||
                                      95 === a ||
                                      126 === a
                                    ? e.check(s, t, l)(a)
                                    : null === a || (0, r.Ee)(a) || (0, r.Ny)(a)
                                      ? t(a)
                                      : (e.consume(a), o);
                        }
                        function l(t) {
                            return (41 === t && i++, e.consume(t), o);
                        }
                    },
                    partial: !0,
                },
                s = {
                    tokenize: function (e, t, n) {
                        return i;
                        function i(a) {
                            return 33 === a ||
                                34 === a ||
                                39 === a ||
                                41 === a ||
                                42 === a ||
                                44 === a ||
                                46 === a ||
                                58 === a ||
                                59 === a ||
                                63 === a ||
                                95 === a ||
                                126 === a
                                ? (e.consume(a), i)
                                : 38 === a
                                  ? (e.consume(a), l)
                                  : 93 === a
                                    ? (e.consume(a), o)
                                    : 60 === a ||
                                        null === a ||
                                        (0, r.Ee)(a) ||
                                        (0, r.Ny)(a)
                                      ? t(a)
                                      : n(a);
                        }
                        function o(e) {
                            return null === e ||
                                40 === e ||
                                91 === e ||
                                (0, r.Ee)(e) ||
                                (0, r.Ny)(e)
                                ? t(e)
                                : i(e);
                        }
                        function l(t) {
                            return (0, r.CW)(t)
                                ? (function t(o) {
                                      return 59 === o
                                          ? (e.consume(o), i)
                                          : (0, r.CW)(o)
                                            ? (e.consume(o), t)
                                            : n(o);
                                  })(t)
                                : n(t);
                        }
                    },
                    partial: !0,
                },
                u = {
                    tokenize: function (e, t, n) {
                        return function (t) {
                            return (e.consume(t), i);
                        };
                        function i(e) {
                            return (0, r.lV)(e) ? n(e) : t(e);
                        }
                    },
                    partial: !0,
                },
                c = {
                    name: "wwwAutolink",
                    tokenize: function (e, t, n) {
                        let i = this;
                        return function (t) {
                            return (87 !== t && 119 !== t) ||
                                !p.call(i, i.previous) ||
                                x(i.events)
                                ? n(t)
                                : (e.enter("literalAutolink"),
                                  e.enter("literalAutolinkWww"),
                                  e.check(
                                      o,
                                      e.attempt(l, e.attempt(a, r), n),
                                      n
                                  )(t));
                        };
                        function r(n) {
                            return (
                                e.exit("literalAutolinkWww"),
                                e.exit("literalAutolink"),
                                t(n)
                            );
                        }
                    },
                    previous: p,
                },
                f = {
                    name: "protocolAutolink",
                    tokenize: function (e, t, n) {
                        let i = this,
                            o = "",
                            s = !1;
                        return function (t) {
                            return (72 === t || 104 === t) &&
                                m.call(i, i.previous) &&
                                !x(i.events)
                                ? (e.enter("literalAutolink"),
                                  e.enter("literalAutolinkHttp"),
                                  (o += String.fromCodePoint(t)),
                                  e.consume(t),
                                  u)
                                : n(t);
                        };
                        function u(t) {
                            if ((0, r.CW)(t) && o.length < 5)
                                return (
                                    (o += String.fromCodePoint(t)),
                                    e.consume(t),
                                    u
                                );
                            if (58 === t) {
                                let n = o.toLowerCase();
                                if ("http" === n || "https" === n)
                                    return (e.consume(t), c);
                            }
                            return n(t);
                        }
                        function c(t) {
                            return 47 === t
                                ? (e.consume(t), s)
                                    ? f
                                    : ((s = !0), c)
                                : n(t);
                        }
                        function f(t) {
                            return null === t ||
                                (0, r.JQ)(t) ||
                                (0, r.Ee)(t) ||
                                (0, r.Ny)(t) ||
                                (0, r.es)(t)
                                ? n(t)
                                : e.attempt(l, e.attempt(a, h), n)(t);
                        }
                        function h(n) {
                            return (
                                e.exit("literalAutolinkHttp"),
                                e.exit("literalAutolink"),
                                t(n)
                            );
                        }
                    },
                    previous: m,
                },
                h = {
                    name: "emailAutolink",
                    tokenize: function (e, t, n) {
                        let i,
                            o,
                            l = this;
                        return function (t) {
                            return !k(t) ||
                                !b.call(l, l.previous) ||
                                x(l.events)
                                ? n(t)
                                : (e.enter("literalAutolink"),
                                  e.enter("literalAutolinkEmail"),
                                  (function t(i) {
                                      return k(i)
                                          ? (e.consume(i), t)
                                          : 64 === i
                                            ? (e.consume(i), a)
                                            : n(i);
                                  })(t));
                        };
                        function a(t) {
                            return 46 === t
                                ? e.check(u, c, s)(t)
                                : 45 === t || 95 === t || (0, r.lV)(t)
                                  ? ((o = !0), e.consume(t), a)
                                  : c(t);
                        }
                        function s(t) {
                            return (e.consume(t), (i = !0), a);
                        }
                        function c(a) {
                            return o && i && (0, r.CW)(l.previous)
                                ? (e.exit("literalAutolinkEmail"),
                                  e.exit("literalAutolink"),
                                  t(a))
                                : n(a);
                        }
                    },
                    previous: b,
                },
                d = {},
                g = 48;
            for (; g < 123; )
                ((d[g] = h), 58 == ++g ? (g = 65) : 91 === g && (g = 97));
            function p(e) {
                return (
                    null === e ||
                    40 === e ||
                    42 === e ||
                    95 === e ||
                    91 === e ||
                    93 === e ||
                    126 === e ||
                    (0, r.Ee)(e)
                );
            }
            function m(e) {
                return !(0, r.CW)(e);
            }
            function b(e) {
                return !(47 === e || k(e));
            }
            function k(e) {
                return (
                    43 === e || 45 === e || 46 === e || 95 === e || (0, r.lV)(e)
                );
            }
            function x(e) {
                let t = e.length,
                    n = !1;
                for (; t--; ) {
                    let i = e[t][1];
                    if (
                        ("labelLink" === i.type || "labelImage" === i.type) &&
                        !i._balanced
                    ) {
                        n = !0;
                        break;
                    }
                    if (i._gfmAutolinkLiteralWalkedInto) {
                        n = !1;
                        break;
                    }
                }
                return (
                    e.length > 0 &&
                        !n &&
                        (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
                    n
                );
            }
            ((d[43] = h),
                (d[45] = h),
                (d[46] = h),
                (d[95] = h),
                (d[72] = [h, f]),
                (d[104] = [h, f]),
                (d[87] = [h, c]),
                (d[119] = [h, c]));
            var v = n(63215);
            function C(e) {
                w.call(this, e, "http://");
            }
            function y(e) {
                w.call(this, e, "mailto:");
            }
            function D(e) {
                w.call(this, e);
            }
            function w(e, t) {
                let n = this.sliceSerialize(e);
                (this.tag('<a href="' + (0, v.Q)((t || "") + n) + '">'),
                    this.raw(this.encode(n)),
                    this.tag("</a>"));
            }
            var F = n(9283),
                E = n(40433),
                S = n(9638);
            let A = {
                tokenize: function (e, t, n) {
                    let i = this;
                    return (0, E.N)(
                        e,
                        function (e) {
                            let r = i.events[i.events.length - 1];
                            return r &&
                                "gfmFootnoteDefinitionIndent" === r[1].type &&
                                4 === r[2].sliceSerialize(r[1], !0).length
                                ? t(e)
                                : n(e);
                        },
                        "gfmFootnoteDefinitionIndent",
                        5
                    );
                },
                partial: !0,
            };
            function L(e, t, n) {
                let i,
                    r = this,
                    o = r.events.length,
                    l = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
                for (; o--; ) {
                    let e = r.events[o][1];
                    if ("labelImage" === e.type) {
                        i = e;
                        break;
                    }
                    if (
                        "gfmFootnoteCall" === e.type ||
                        "labelLink" === e.type ||
                        "label" === e.type ||
                        "image" === e.type ||
                        "link" === e.type
                    )
                        break;
                }
                return function (o) {
                    if (!i || !i._balanced) return n(o);
                    let a = (0, S.B)(
                        r.sliceSerialize({ start: i.end, end: r.now() })
                    );
                    return 94 === a.codePointAt(0) && l.includes(a.slice(1))
                        ? (e.enter("gfmFootnoteCallLabelMarker"),
                          e.consume(o),
                          e.exit("gfmFootnoteCallLabelMarker"),
                          t(o))
                        : n(o);
                };
            }
            function T(e, t) {
                let n = e.length;
                for (; n--; )
                    if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
                        e[n][1];
                        break;
                    }
                ((e[n + 1][1].type = "data"),
                    (e[n + 3][1].type = "gfmFootnoteCallLabelMarker"));
                let i = {
                        type: "gfmFootnoteCall",
                        start: Object.assign({}, e[n + 3][1].start),
                        end: Object.assign({}, e[e.length - 1][1].end),
                    },
                    r = {
                        type: "gfmFootnoteCallMarker",
                        start: Object.assign({}, e[n + 3][1].end),
                        end: Object.assign({}, e[n + 3][1].end),
                    };
                (r.end.column++, r.end.offset++, r.end._bufferIndex++);
                let o = {
                        type: "gfmFootnoteCallString",
                        start: Object.assign({}, r.end),
                        end: Object.assign({}, e[e.length - 1][1].start),
                    },
                    l = {
                        type: "chunkString",
                        contentType: "string",
                        start: Object.assign({}, o.start),
                        end: Object.assign({}, o.end),
                    },
                    a = [
                        e[n + 1],
                        e[n + 2],
                        ["enter", i, t],
                        e[n + 3],
                        e[n + 4],
                        ["enter", r, t],
                        ["exit", r, t],
                        ["enter", o, t],
                        ["enter", l, t],
                        ["exit", l, t],
                        ["exit", o, t],
                        e[e.length - 2],
                        e[e.length - 1],
                        ["exit", i, t],
                    ];
                return (e.splice(n, e.length - n + 1, ...a), e);
            }
            function I(e, t, n) {
                let i,
                    o = this,
                    l = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []),
                    a = 0;
                return function (t) {
                    return (
                        e.enter("gfmFootnoteCall"),
                        e.enter("gfmFootnoteCallLabelMarker"),
                        e.consume(t),
                        e.exit("gfmFootnoteCallLabelMarker"),
                        s
                    );
                };
                function s(t) {
                    return 94 !== t
                        ? n(t)
                        : (e.enter("gfmFootnoteCallMarker"),
                          e.consume(t),
                          e.exit("gfmFootnoteCallMarker"),
                          e.enter("gfmFootnoteCallString"),
                          (e.enter("chunkString").contentType = "string"),
                          u);
                }
                function u(s) {
                    if (
                        a > 999 ||
                        (93 === s && !i) ||
                        null === s ||
                        91 === s ||
                        (0, r.Ee)(s)
                    )
                        return n(s);
                    if (93 === s) {
                        e.exit("chunkString");
                        let i = e.exit("gfmFootnoteCallString");
                        return l.includes((0, S.B)(o.sliceSerialize(i)))
                            ? (e.enter("gfmFootnoteCallLabelMarker"),
                              e.consume(s),
                              e.exit("gfmFootnoteCallLabelMarker"),
                              e.exit("gfmFootnoteCall"),
                              t)
                            : n(s);
                    }
                    return (
                        (0, r.Ee)(s) || (i = !0),
                        a++,
                        e.consume(s),
                        92 === s ? c : u
                    );
                }
                function c(t) {
                    return 91 === t || 92 === t || 93 === t
                        ? (e.consume(t), a++, u)
                        : u(t);
                }
            }
            function O(e, t, n) {
                let i,
                    o,
                    l = this,
                    a = l.parser.gfmFootnotes || (l.parser.gfmFootnotes = []),
                    s = 0;
                return function (t) {
                    return (
                        (e.enter("gfmFootnoteDefinition")._container = !0),
                        e.enter("gfmFootnoteDefinitionLabel"),
                        e.enter("gfmFootnoteDefinitionLabelMarker"),
                        e.consume(t),
                        e.exit("gfmFootnoteDefinitionLabelMarker"),
                        u
                    );
                };
                function u(t) {
                    return 94 === t
                        ? (e.enter("gfmFootnoteDefinitionMarker"),
                          e.consume(t),
                          e.exit("gfmFootnoteDefinitionMarker"),
                          e.enter("gfmFootnoteDefinitionLabelString"),
                          (e.enter("chunkString").contentType = "string"),
                          c)
                        : n(t);
                }
                function c(t) {
                    if (
                        s > 999 ||
                        (93 === t && !o) ||
                        null === t ||
                        91 === t ||
                        (0, r.Ee)(t)
                    )
                        return n(t);
                    if (93 === t) {
                        e.exit("chunkString");
                        let n = e.exit("gfmFootnoteDefinitionLabelString");
                        return (
                            (i = (0, S.B)(l.sliceSerialize(n))),
                            e.enter("gfmFootnoteDefinitionLabelMarker"),
                            e.consume(t),
                            e.exit("gfmFootnoteDefinitionLabelMarker"),
                            e.exit("gfmFootnoteDefinitionLabel"),
                            h
                        );
                    }
                    return (
                        (0, r.Ee)(t) || (o = !0),
                        s++,
                        e.consume(t),
                        92 === t ? f : c
                    );
                }
                function f(t) {
                    return 91 === t || 92 === t || 93 === t
                        ? (e.consume(t), s++, c)
                        : c(t);
                }
                function h(t) {
                    return 58 === t
                        ? (e.enter("definitionMarker"),
                          e.consume(t),
                          e.exit("definitionMarker"),
                          a.includes(i) || a.push(i),
                          (0, E.N)(e, d, "gfmFootnoteDefinitionWhitespace"))
                        : n(t);
                }
                function d(e) {
                    return t(e);
                }
            }
            function z(e, t, n) {
                return e.check(F.B, t, e.attempt(A, t, n));
            }
            function M(e) {
                e.exit("gfmFootnoteDefinition");
            }
            let R = {}.hasOwnProperty,
                _ = {};
            function j(e, t) {
                return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
            }
            var N = n(82777),
                P = n(10691),
                H = n(45535);
            let EditMap = class EditMap {
                constructor() {
                    this.map = [];
                }
                add(e, t, n) {
                    !(function (e, t, n, i) {
                        let r = 0;
                        if (0 !== n || 0 !== i.length) {
                            for (; r < e.map.length; ) {
                                if (e.map[r][0] === t) {
                                    ((e.map[r][1] += n),
                                        e.map[r][2].push(...i));
                                    return;
                                }
                                r += 1;
                            }
                            e.map.push([t, n, i]);
                        }
                    })(this, e, t, n);
                }
                consume(e) {
                    if (
                        (this.map.sort(function (e, t) {
                            return e[0] - t[0];
                        }),
                        0 === this.map.length)
                    )
                        return;
                    let t = this.map.length,
                        n = [];
                    for (; t > 0; )
                        ((t -= 1),
                            n.push(
                                e.slice(this.map[t][0] + this.map[t][1]),
                                this.map[t][2]
                            ),
                            (e.length = this.map[t][0]));
                    (n.push([...e]), (e.length = 0));
                    let i = n.pop();
                    for (; i; ) (e.push(...i), (i = n.pop()));
                    this.map.length = 0;
                }
            };
            function B(e, t, n) {
                let i,
                    o = this,
                    l = 0,
                    a = 0;
                return function (e) {
                    let t = o.events.length - 1;
                    for (; t > -1; ) {
                        let e = o.events[t][1].type;
                        if ("lineEnding" === e || "linePrefix" === e) t--;
                        else break;
                    }
                    let i = t > -1 ? o.events[t][1].type : null,
                        r = "tableHead" === i || "tableRow" === i ? x : s;
                    return r === x && o.parser.lazy[o.now().line] ? n(e) : r(e);
                };
                function s(t) {
                    var n;
                    return (
                        e.enter("tableHead"),
                        e.enter("tableRow"),
                        124 === (n = t) || ((i = !0), (a += 1)),
                        u(n)
                    );
                }
                function u(t) {
                    return null === t
                        ? n(t)
                        : (0, r.HP)(t)
                          ? a > 1
                              ? ((a = 0),
                                (o.interrupt = !0),
                                e.exit("tableRow"),
                                e.enter("lineEnding"),
                                e.consume(t),
                                e.exit("lineEnding"),
                                h)
                              : n(t)
                          : (0, r.On)(t)
                            ? (0, E.N)(e, u, "whitespace")(t)
                            : ((a += 1), i && ((i = !1), (l += 1)), 124 === t)
                              ? (e.enter("tableCellDivider"),
                                e.consume(t),
                                e.exit("tableCellDivider"),
                                (i = !0),
                                u)
                              : (e.enter("data"), c(t));
                }
                function c(t) {
                    return null === t || 124 === t || (0, r.Ee)(t)
                        ? (e.exit("data"), u(t))
                        : (e.consume(t), 92 === t ? f : c);
                }
                function f(t) {
                    return 92 === t || 124 === t ? (e.consume(t), c) : c(t);
                }
                function h(t) {
                    return ((o.interrupt = !1), o.parser.lazy[o.now().line])
                        ? n(t)
                        : (e.enter("tableDelimiterRow"), (i = !1), (0, r.On)(t))
                          ? (0, E.N)(
                                e,
                                d,
                                "linePrefix",
                                o.parser.constructs.disable.null.includes(
                                    "codeIndented"
                                )
                                    ? void 0
                                    : 4
                            )(t)
                          : d(t);
                }
                function d(t) {
                    return 45 === t || 58 === t
                        ? p(t)
                        : 124 === t
                          ? ((i = !0),
                            e.enter("tableCellDivider"),
                            e.consume(t),
                            e.exit("tableCellDivider"),
                            g)
                          : n(t);
                }
                function g(t) {
                    return (0, r.On)(t)
                        ? (0, E.N)(e, p, "whitespace")(t)
                        : p(t);
                }
                function p(t) {
                    return 58 === t
                        ? ((a += 1),
                          (i = !0),
                          e.enter("tableDelimiterMarker"),
                          e.consume(t),
                          e.exit("tableDelimiterMarker"),
                          m)
                        : 45 === t
                          ? ((a += 1), m(t))
                          : null === t || (0, r.HP)(t)
                            ? k(t)
                            : n(t);
                }
                function m(t) {
                    return 45 === t
                        ? (e.enter("tableDelimiterFiller"),
                          (function t(n) {
                              return 45 === n
                                  ? (e.consume(n), t)
                                  : 58 === n
                                    ? ((i = !0),
                                      e.exit("tableDelimiterFiller"),
                                      e.enter("tableDelimiterMarker"),
                                      e.consume(n),
                                      e.exit("tableDelimiterMarker"),
                                      b)
                                    : (e.exit("tableDelimiterFiller"), b(n));
                          })(t))
                        : n(t);
                }
                function b(t) {
                    return (0, r.On)(t)
                        ? (0, E.N)(e, k, "whitespace")(t)
                        : k(t);
                }
                function k(o) {
                    if (124 === o) return d(o);
                    if (null === o || (0, r.HP)(o))
                        return i && l === a
                            ? (e.exit("tableDelimiterRow"),
                              e.exit("tableHead"),
                              t(o))
                            : n(o);
                    return n(o);
                }
                function x(t) {
                    return (e.enter("tableRow"), v(t));
                }
                function v(n) {
                    return 124 === n
                        ? (e.enter("tableCellDivider"),
                          e.consume(n),
                          e.exit("tableCellDivider"),
                          v)
                        : null === n || (0, r.HP)(n)
                          ? (e.exit("tableRow"), t(n))
                          : (0, r.On)(n)
                            ? (0, E.N)(e, v, "whitespace")(n)
                            : (e.enter("data"), C(n));
                }
                function C(t) {
                    return null === t || 124 === t || (0, r.Ee)(t)
                        ? (e.exit("data"), v(t))
                        : (e.consume(t), 92 === t ? y : C);
                }
                function y(t) {
                    return 92 === t || 124 === t ? (e.consume(t), C) : C(t);
                }
            }
            function $(e, t) {
                let n,
                    i,
                    r,
                    o = -1,
                    l = !0,
                    a = 0,
                    s = [0, 0, 0, 0],
                    u = [0, 0, 0, 0],
                    c = !1,
                    f = 0,
                    h = new EditMap();
                for (; ++o < e.length; ) {
                    let d = e[o],
                        g = d[1];
                    "enter" === d[0]
                        ? "tableHead" === g.type
                            ? ((c = !1),
                              0 !== f &&
                                  (q(h, t, f, n, i), (i = void 0), (f = 0)),
                              (n = {
                                  type: "table",
                                  start: Object.assign({}, g.start),
                                  end: Object.assign({}, g.end),
                              }),
                              h.add(o, 0, [["enter", n, t]]))
                            : "tableRow" === g.type ||
                                "tableDelimiterRow" === g.type
                              ? ((l = !0),
                                (r = void 0),
                                (s = [0, 0, 0, 0]),
                                (u = [0, o + 1, 0, 0]),
                                c &&
                                    ((c = !1),
                                    (i = {
                                        type: "tableBody",
                                        start: Object.assign({}, g.start),
                                        end: Object.assign({}, g.end),
                                    }),
                                    h.add(o, 0, [["enter", i, t]])),
                                (a =
                                    "tableDelimiterRow" === g.type
                                        ? 2
                                        : i
                                          ? 3
                                          : 1))
                              : a &&
                                  ("data" === g.type ||
                                      "tableDelimiterMarker" === g.type ||
                                      "tableDelimiterFiller" === g.type)
                                ? ((l = !1),
                                  0 === u[2] &&
                                      (0 !== s[1] &&
                                          ((u[0] = u[1]),
                                          (r = W(h, t, s, a, void 0, r)),
                                          (s = [0, 0, 0, 0])),
                                      (u[2] = o)))
                                : "tableCellDivider" === g.type &&
                                  (l
                                      ? (l = !1)
                                      : (0 !== s[1] &&
                                            ((u[0] = u[1]),
                                            (r = W(h, t, s, a, void 0, r))),
                                        (u = [(s = u)[1], o, 0, 0])))
                        : "tableHead" === g.type
                          ? ((c = !0), (f = o))
                          : "tableRow" === g.type ||
                              "tableDelimiterRow" === g.type
                            ? ((f = o),
                              0 !== s[1]
                                  ? ((u[0] = u[1]), (r = W(h, t, s, a, o, r)))
                                  : 0 !== u[1] && (r = W(h, t, u, a, o, r)),
                              (a = 0))
                            : a &&
                              ("data" === g.type ||
                                  "tableDelimiterMarker" === g.type ||
                                  "tableDelimiterFiller" === g.type) &&
                              (u[3] = o);
                }
                for (
                    0 !== f && q(h, t, f, n, i), h.consume(t.events), o = -1;
                    ++o < t.events.length;

                ) {
                    let e = t.events[o];
                    "enter" === e[0] &&
                        "table" === e[1].type &&
                        (e[1]._align = (function (e, t) {
                            let n = !1,
                                i = [];
                            for (; t < e.length; ) {
                                let r = e[t];
                                if (n) {
                                    if ("enter" === r[0])
                                        "tableContent" === r[1].type &&
                                            i.push(
                                                "tableDelimiterMarker" ===
                                                    e[t + 1][1].type
                                                    ? "left"
                                                    : "none"
                                            );
                                    else if ("tableContent" === r[1].type) {
                                        if (
                                            "tableDelimiterMarker" ===
                                            e[t - 1][1].type
                                        ) {
                                            let e = i.length - 1;
                                            i[e] =
                                                "left" === i[e]
                                                    ? "center"
                                                    : "right";
                                        }
                                    } else if (
                                        "tableDelimiterRow" === r[1].type
                                    )
                                        break;
                                } else
                                    "enter" === r[0] &&
                                        "tableDelimiterRow" === r[1].type &&
                                        (n = !0);
                                t += 1;
                            }
                            return i;
                        })(t.events, o));
                }
                return e;
            }
            function W(e, t, n, i, r, o) {
                0 !== n[0] &&
                    ((o.end = Object.assign({}, V(t.events, n[0]))),
                    e.add(n[0], 0, [["exit", o, t]]));
                let l = V(t.events, n[1]);
                if (
                    ((o = {
                        type:
                            1 === i
                                ? "tableHeader"
                                : 2 === i
                                  ? "tableDelimiter"
                                  : "tableData",
                        start: Object.assign({}, l),
                        end: Object.assign({}, l),
                    }),
                    e.add(n[1], 0, [["enter", o, t]]),
                    0 !== n[2])
                ) {
                    let r = V(t.events, n[2]),
                        o = V(t.events, n[3]),
                        l = {
                            type: "tableContent",
                            start: Object.assign({}, r),
                            end: Object.assign({}, o),
                        };
                    if ((e.add(n[2], 0, [["enter", l, t]]), 2 !== i)) {
                        let i = t.events[n[2]],
                            r = t.events[n[3]];
                        if (
                            ((i[1].end = Object.assign({}, r[1].end)),
                            (i[1].type = "chunkText"),
                            (i[1].contentType = "text"),
                            n[3] > n[2] + 1)
                        ) {
                            let t = n[2] + 1,
                                i = n[3] - n[2] - 1;
                            e.add(t, i, []);
                        }
                    }
                    e.add(n[3] + 1, 0, [["exit", l, t]]);
                }
                return (
                    void 0 !== r &&
                        ((o.end = Object.assign({}, V(t.events, r))),
                        e.add(r, 0, [["exit", o, t]]),
                        (o = void 0)),
                    o
                );
            }
            function q(e, t, n, i, r) {
                let o = [],
                    l = V(t.events, n);
                (r && ((r.end = Object.assign({}, l)), o.push(["exit", r, t])),
                    (i.end = Object.assign({}, l)),
                    o.push(["exit", i, t]),
                    e.add(n + 1, 0, o));
            }
            function V(e, t) {
                let n = e[t],
                    i = "enter" === n[0] ? "start" : "end";
                return n[1][i];
            }
            let Q = {
                none: "",
                left: ' align="left"',
                right: ' align="right"',
                center: ' align="center"',
            };
            function U(e, t) {
                return "|" === t ? t : e;
            }
            let G =
                    /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi,
                J = RegExp("^" + G.source, "i");
            function Z(e, t) {
                let n = this.sliceSerialize(e);
                (this.options.allowDangerousHtml &&
                    (n = n.replace(t, "&lt;$1$2")),
                    this.raw(this.encode(n)));
            }
            let Y = {
                name: "tasklistCheck",
                tokenize: function (e, t, n) {
                    let i = this;
                    return function (t) {
                        return null === i.previous &&
                            i._gfmTasklistFirstContentOfListItem
                            ? (e.enter("taskListCheck"),
                              e.enter("taskListCheckMarker"),
                              e.consume(t),
                              e.exit("taskListCheckMarker"),
                              o)
                            : n(t);
                    };
                    function o(t) {
                        return (0, r.Ee)(t)
                            ? (e.enter("taskListCheckValueUnchecked"),
                              e.consume(t),
                              e.exit("taskListCheckValueUnchecked"),
                              l)
                            : 88 === t || 120 === t
                              ? (e.enter("taskListCheckValueChecked"),
                                e.consume(t),
                                e.exit("taskListCheckValueChecked"),
                                l)
                              : n(t);
                    }
                    function l(t) {
                        return 93 === t
                            ? (e.enter("taskListCheckMarker"),
                              e.consume(t),
                              e.exit("taskListCheckMarker"),
                              e.exit("taskListCheck"),
                              a)
                            : n(t);
                    }
                    function a(i) {
                        return (0, r.HP)(i)
                            ? t(i)
                            : (0, r.On)(i)
                              ? e.check({ tokenize: K }, t, n)(i)
                              : n(i);
                    }
                },
            };
            function K(e, t, n) {
                return (0, E.N)(
                    e,
                    function (e) {
                        return null === e ? n(e) : t(e);
                    },
                    "whitespace"
                );
            }
            function X(e) {
                return (0, i.y)([
                    { text: d },
                    {
                        document: {
                            91: {
                                name: "gfmFootnoteDefinition",
                                tokenize: O,
                                continuation: { tokenize: z },
                                exit: M,
                            },
                        },
                        text: {
                            91: { name: "gfmFootnoteCall", tokenize: I },
                            93: {
                                name: "gfmPotentialFootnoteCall",
                                add: "after",
                                tokenize: L,
                                resolveTo: T,
                            },
                        },
                    },
                    (function (e) {
                        let t = (e || {}).singleTilde,
                            n = {
                                name: "strikethrough",
                                tokenize: function (e, n, i) {
                                    let r = this.previous,
                                        o = this.events,
                                        l = 0;
                                    return function (a) {
                                        return 126 === r &&
                                            "characterEscape" !==
                                                o[o.length - 1][1].type
                                            ? i(a)
                                            : (e.enter(
                                                  "strikethroughSequenceTemporary"
                                              ),
                                              (function o(a) {
                                                  let s = (0, P.S)(r);
                                                  if (126 === a)
                                                      return l > 1
                                                          ? i(a)
                                                          : (e.consume(a),
                                                            l++,
                                                            o);
                                                  if (l < 2 && !t) return i(a);
                                                  let u = e.exit(
                                                          "strikethroughSequenceTemporary"
                                                      ),
                                                      c = (0, P.S)(a);
                                                  return (
                                                      (u._open =
                                                          !c ||
                                                          (2 === c && !!s)),
                                                      (u._close =
                                                          !s ||
                                                          (2 === s && !!c)),
                                                      n(a)
                                                  );
                                              })(a));
                                    };
                                },
                                resolveAll: function (e, t) {
                                    let n = -1;
                                    for (; ++n < e.length; )
                                        if (
                                            "enter" === e[n][0] &&
                                            "strikethroughSequenceTemporary" ===
                                                e[n][1].type &&
                                            e[n][1]._close
                                        ) {
                                            let i = n;
                                            for (; i--; )
                                                if (
                                                    "exit" === e[i][0] &&
                                                    "strikethroughSequenceTemporary" ===
                                                        e[i][1].type &&
                                                    e[i][1]._open &&
                                                    e[n][1].end.offset -
                                                        e[n][1].start.offset ==
                                                        e[i][1].end.offset -
                                                            e[i][1].start.offset
                                                ) {
                                                    ((e[n][1].type =
                                                        "strikethroughSequence"),
                                                        (e[i][1].type =
                                                            "strikethroughSequence"));
                                                    let r = {
                                                            type: "strikethrough",
                                                            start: Object.assign(
                                                                {},
                                                                e[i][1].start
                                                            ),
                                                            end: Object.assign(
                                                                {},
                                                                e[n][1].end
                                                            ),
                                                        },
                                                        o = {
                                                            type: "strikethroughText",
                                                            start: Object.assign(
                                                                {},
                                                                e[i][1].end
                                                            ),
                                                            end: Object.assign(
                                                                {},
                                                                e[n][1].start
                                                            ),
                                                        },
                                                        l = [
                                                            ["enter", r, t],
                                                            [
                                                                "enter",
                                                                e[i][1],
                                                                t,
                                                            ],
                                                            [
                                                                "exit",
                                                                e[i][1],
                                                                t,
                                                            ],
                                                            ["enter", o, t],
                                                        ],
                                                        a =
                                                            t.parser.constructs
                                                                .insideSpan
                                                                .null;
                                                    (a &&
                                                        (0, N.m)(
                                                            l,
                                                            l.length,
                                                            0,
                                                            (0, H.W)(
                                                                a,
                                                                e.slice(
                                                                    i + 1,
                                                                    n
                                                                ),
                                                                t
                                                            )
                                                        ),
                                                        (0, N.m)(
                                                            l,
                                                            l.length,
                                                            0,
                                                            [
                                                                ["exit", o, t],
                                                                [
                                                                    "enter",
                                                                    e[n][1],
                                                                    t,
                                                                ],
                                                                [
                                                                    "exit",
                                                                    e[n][1],
                                                                    t,
                                                                ],
                                                                ["exit", r, t],
                                                            ]
                                                        ),
                                                        (0, N.m)(
                                                            e,
                                                            i - 1,
                                                            n - i + 3,
                                                            l
                                                        ),
                                                        (n = i + l.length - 2));
                                                    break;
                                                }
                                        }
                                    for (n = -1; ++n < e.length; )
                                        "strikethroughSequenceTemporary" ===
                                            e[n][1].type &&
                                            (e[n][1].type = "data");
                                    return e;
                                },
                            };
                        return (
                            null == t && (t = !0),
                            {
                                text: { 126: n },
                                insideSpan: { null: [n] },
                                attentionMarkers: { null: [126] },
                            }
                        );
                    })(e),
                    {
                        flow: {
                            null: { name: "table", tokenize: B, resolveAll: $ },
                        },
                    },
                    { text: { 91: Y } },
                ]);
            }
            function ee(e) {
                return (0, i.v)([
                    {
                        exit: {
                            literalAutolinkEmail: y,
                            literalAutolinkHttp: D,
                            literalAutolinkWww: C,
                        },
                    },
                    (function (e) {
                        let t = e || _,
                            n = t.label || "Footnotes",
                            i = t.labelTagName || "h2",
                            r =
                                null === t.labelAttributes ||
                                void 0 === t.labelAttributes
                                    ? 'class="sr-only"'
                                    : t.labelAttributes,
                            o = t.backLabel || j,
                            l =
                                null === t.clobberPrefix ||
                                void 0 === t.clobberPrefix
                                    ? "user-content-"
                                    : t.clobberPrefix;
                        return {
                            enter: {
                                gfmFootnoteDefinition() {
                                    this.getData("tightStack").push(!1);
                                },
                                gfmFootnoteDefinitionLabelString() {
                                    this.buffer();
                                },
                                gfmFootnoteCallString() {
                                    this.buffer();
                                },
                            },
                            exit: {
                                gfmFootnoteDefinition() {
                                    let e = this.getData(
                                            "gfmFootnoteDefinitions"
                                        ),
                                        t = this.getData(
                                            "gfmFootnoteDefinitionStack"
                                        ),
                                        n = this.getData("tightStack"),
                                        i = t.pop(),
                                        r = this.resume();
                                    (e ||
                                        this.setData(
                                            "gfmFootnoteDefinitions",
                                            (e = {})
                                        ),
                                        R.call(e, i) || (e[i] = r),
                                        n.pop(),
                                        this.setData("slurpOneLineEnding", !0),
                                        this.setData("lastWasTag"));
                                },
                                gfmFootnoteDefinitionLabelString(e) {
                                    let t = this.getData(
                                        "gfmFootnoteDefinitionStack"
                                    );
                                    (t ||
                                        this.setData(
                                            "gfmFootnoteDefinitionStack",
                                            (t = [])
                                        ),
                                        t.push(
                                            (0, S.B)(this.sliceSerialize(e))
                                        ),
                                        this.resume(),
                                        this.buffer());
                                },
                                gfmFootnoteCallString(e) {
                                    let t,
                                        n = this.getData(
                                            "gfmFootnoteCallOrder"
                                        ),
                                        i = this.getData(
                                            "gfmFootnoteCallCounts"
                                        ),
                                        r = (0, S.B)(this.sliceSerialize(e));
                                    (this.resume(),
                                        n ||
                                            this.setData(
                                                "gfmFootnoteCallOrder",
                                                (n = [])
                                            ),
                                        i ||
                                            this.setData(
                                                "gfmFootnoteCallCounts",
                                                (i = {})
                                            ));
                                    let o = n.indexOf(r),
                                        a = (0, v.Q)(r.toLowerCase());
                                    -1 === o
                                        ? (n.push(r),
                                          (i[r] = 1),
                                          (t = n.length))
                                        : (i[r]++, (t = o + 1));
                                    let s = i[r];
                                    this.tag(
                                        '<sup><a href="#' +
                                            l +
                                            "fn-" +
                                            a +
                                            '" id="' +
                                            l +
                                            "fnref-" +
                                            a +
                                            (s > 1 ? "-" + s : "") +
                                            '" data-footnote-ref="" aria-describedby="footnote-label">' +
                                            String(t) +
                                            "</a></sup>"
                                    );
                                },
                                null() {
                                    let e =
                                            this.getData(
                                                "gfmFootnoteCallOrder"
                                            ) || [],
                                        t =
                                            this.getData(
                                                "gfmFootnoteCallCounts"
                                            ) || {},
                                        a =
                                            this.getData(
                                                "gfmFootnoteDefinitions"
                                            ) || {},
                                        s = -1;
                                    for (
                                        e.length > 0 &&
                                        (this.lineEndingIfNeeded(),
                                        this.tag(
                                            '<section data-footnotes="" class="footnotes"><' +
                                                i +
                                                ' id="footnote-label"' +
                                                (r ? " " + r : "") +
                                                ">"
                                        ),
                                        this.raw(this.encode(n)),
                                        this.tag("</" + i + ">"),
                                        this.lineEndingIfNeeded(),
                                        this.tag("<ol>"));
                                        ++s < e.length;

                                    ) {
                                        let n = e[s],
                                            i = (0, v.Q)(n.toLowerCase()),
                                            r = 0,
                                            u = [];
                                        for (; ++r <= t[n]; )
                                            u.push(
                                                '<a href="#' +
                                                    l +
                                                    "fnref-" +
                                                    i +
                                                    (r > 1 ? "-" + r : "") +
                                                    '" data-footnote-backref="" aria-label="' +
                                                    this.encode(
                                                        "string" == typeof o
                                                            ? o
                                                            : o(s, r)
                                                    ) +
                                                    '" class="data-footnote-backref">\u21A9' +
                                                    (r > 1
                                                        ? "<sup>" + r + "</sup>"
                                                        : "") +
                                                    "</a>"
                                            );
                                        let c = u.join(" "),
                                            f = !1;
                                        (this.lineEndingIfNeeded(),
                                            this.tag(
                                                '<li id="' +
                                                    l +
                                                    "fn-" +
                                                    i +
                                                    '">'
                                            ),
                                            this.lineEndingIfNeeded(),
                                            this.tag(
                                                a[n].replace(
                                                    /<\/p>(?:\r?\n|\r)?$/,
                                                    function (e) {
                                                        return (
                                                            (f = !0),
                                                            " " + c + e
                                                        );
                                                    }
                                                )
                                            ),
                                            f ||
                                                (this.lineEndingIfNeeded(),
                                                this.tag(c)),
                                            this.lineEndingIfNeeded(),
                                            this.tag("</li>"));
                                    }
                                    e.length > 0 &&
                                        (this.lineEndingIfNeeded(),
                                        this.tag("</ol>"),
                                        this.lineEndingIfNeeded(),
                                        this.tag("</section>"));
                                },
                            },
                        };
                    })(e),
                    {
                        enter: {
                            strikethrough() {
                                this.tag("<del>");
                            },
                        },
                        exit: {
                            strikethrough() {
                                this.tag("</del>");
                            },
                        },
                    },
                    {
                        enter: {
                            table(e) {
                                let t = e._align;
                                (this.lineEndingIfNeeded(),
                                    this.tag("<table>"),
                                    this.setData("tableAlign", t));
                            },
                            tableBody() {
                                this.tag("<tbody>");
                            },
                            tableData() {
                                let e =
                                    Q[
                                        this.getData("tableAlign")[
                                            this.getData("tableColumn")
                                        ]
                                    ];
                                void 0 === e
                                    ? this.buffer()
                                    : (this.lineEndingIfNeeded(),
                                      this.tag("<td" + e + ">"));
                            },
                            tableHead() {
                                (this.lineEndingIfNeeded(),
                                    this.tag("<thead>"));
                            },
                            tableHeader() {
                                let e =
                                    Q[
                                        this.getData("tableAlign")[
                                            this.getData("tableColumn")
                                        ]
                                    ];
                                (this.lineEndingIfNeeded(),
                                    this.tag("<th" + e + ">"));
                            },
                            tableRow() {
                                (this.setData("tableColumn", 0),
                                    this.lineEndingIfNeeded(),
                                    this.tag("<tr>"));
                            },
                        },
                        exit: {
                            codeTextData(e) {
                                let t = this.sliceSerialize(e);
                                (this.getData("tableAlign") &&
                                    (t = t.replace(/\\([\\|])/g, U)),
                                    this.raw(this.encode(t)));
                            },
                            table() {
                                (this.setData("tableAlign"),
                                    this.setData("slurpAllLineEndings"),
                                    this.lineEndingIfNeeded(),
                                    this.tag("</table>"));
                            },
                            tableBody() {
                                (this.lineEndingIfNeeded(),
                                    this.tag("</tbody>"));
                            },
                            tableData() {
                                let e = this.getData("tableAlign"),
                                    t = this.getData("tableColumn");
                                t in e
                                    ? (this.tag("</td>"),
                                      this.setData("tableColumn", t + 1))
                                    : this.resume();
                            },
                            tableHead() {
                                (this.lineEndingIfNeeded(),
                                    this.tag("</thead>"));
                            },
                            tableHeader() {
                                let e = this.getData("tableColumn");
                                (this.tag("</th>"),
                                    this.setData("tableColumn", e + 1));
                            },
                            tableRow() {
                                let e = this.getData("tableAlign"),
                                    t = this.getData("tableColumn");
                                for (; t < e.length; )
                                    (this.lineEndingIfNeeded(),
                                        this.tag("<td" + Q[e[t]] + "></td>"),
                                        t++);
                                (this.setData("tableColumn", t),
                                    this.lineEndingIfNeeded(),
                                    this.tag("</tr>"));
                            },
                        },
                    },
                    {
                        exit: {
                            htmlFlowData(e) {
                                Z.call(this, e, G);
                            },
                            htmlTextData(e) {
                                Z.call(this, e, J);
                            },
                        },
                    },
                    {
                        enter: {
                            taskListCheck() {
                                this.tag('<input type="checkbox" disabled="" ');
                            },
                        },
                        exit: {
                            taskListCheck() {
                                this.tag("/>");
                            },
                            taskListCheckValueChecked() {
                                this.tag('checked="" ');
                            },
                        },
                    },
                ]);
            }
        },
    },
]);
//# sourceMappingURL=vendors-node_modules_mdast-util-gfm_lib_index_js-node_modules_micromark-extension-gfm_index_js-7a27fc832e45.js.map
