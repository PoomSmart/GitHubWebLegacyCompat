"use strict";
(globalThis.webpackChunk_github_ui_github_ui =
    globalThis.webpackChunk_github_ui_github_ui || []).push([
    [
        "vendors-node_modules_hastscript_lib_index_js-node_modules_mdast-util-gfm_lib_index_js-node_mo-2895d2",
    ],
    {
        5594: (e, t, n) => {
            n.d(t, { f: () => l });
            var r = n(47970),
                i = n(76814),
                o = n(72534);
            function l(e, t) {
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
        54157: (e, t, n) => {
            function r(e, t) {
                let n = String(e);
                if ("string" != typeof t) throw TypeError("Expected character");
                let r = 0,
                    i = n.indexOf(t);
                for (; -1 !== i; ) (r++, (i = n.indexOf(t, i + t.length)));
                return r;
            }
            n.d(t, { C: () => U, H: () => J });
            var i = n(97471),
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
                ((0, i.ok)("link" === t.type),
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
            function m(e, t, n, i, o) {
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
                        i = n.indexOf(")"),
                        o = r(e, "("),
                        l = r(e, ")");
                    for (; -1 !== i && o > l; )
                        ((e += n.slice(0, i + 1)),
                            (i = (n = n.slice(i + 1)).indexOf(")")),
                            l++);
                    return [e, n];
                })(n + i);
                if (!a[0]) return !1;
                let s = {
                    type: "link",
                    title: null,
                    url: l + t + a[0],
                    children: [{ type: "text", value: t + a[0] }],
                };
                return a[1] ? [s, { type: "text", value: a[1] }] : s;
            }
            function b(e, t, n, r) {
                return (
                    !(!k(r, !0) || /[-\d_]$/.test(n)) && {
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
            function y(e) {
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
            function v() {
                this.buffer();
            }
            function C(e) {
                let t = this.resume(),
                    n = this.stack[this.stack.length - 1];
                ((0, i.ok)("footnoteDefinition" === n.type),
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
            function A(e) {
                let t = this.resume(),
                    n = this.stack[this.stack.length - 1];
                ((0, i.ok)("footnoteReference" === n.type),
                    (n.label = t),
                    (n.identifier = (0, x.B)(
                        this.sliceSerialize(e)
                    ).toLowerCase()));
            }
            function S(e) {
                this.exit(e);
            }
            function E(e, t, n, r) {
                let i = n.createTracker(r),
                    o = i.move("[^"),
                    l = n.enter("footnoteReference"),
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
                    l(),
                    (o += i.move("]"))
                );
            }
            function L(e, t, n, r) {
                let i = n.createTracker(r),
                    o = i.move("[^"),
                    l = n.enter("footnoteDefinition"),
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
                        n.indentLines(n.containerFlow(e, i.current()), O)
                    )),
                    l(),
                    o
                );
            }
            function O(e, t, n) {
                return 0 === t ? e : (n ? "" : "    ") + e;
            }
            E.peek = function () {
                return "[";
            };
            let N = [
                "autolink",
                "destinationLiteral",
                "destinationRaw",
                "reference",
                "titleQuote",
                "titleApostrophe",
            ];
            function T(e) {
                this.enter({ type: "delete", children: [] }, e);
            }
            function I(e) {
                this.exit(e);
            }
            function M(e, t, n, r) {
                let i = n.createTracker(r),
                    o = n.enter("strikethrough"),
                    l = i.move("~~");
                return (
                    (l += n.containerPhrasing(e, {
                        ...i.current(),
                        before: l,
                        after: "~",
                    })),
                    (l += i.move("~~")),
                    o(),
                    l
                );
            }
            function z(e) {
                return e.length;
            }
            function R(e) {
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
            var _ = n(56177);
            function j(e) {
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
            function P(e) {
                (this.exit(e), (this.data.inTable = void 0));
            }
            function B(e) {
                this.enter({ type: "tableRow", children: [] }, e);
            }
            function H(e) {
                this.exit(e);
            }
            function $(e) {
                this.enter({ type: "tableCell", children: [] }, e);
            }
            function q(e) {
                let t = this.resume();
                this.data.inTable && (t = t.replace(/\\([\\|])/g, W));
                let n = this.stack[this.stack.length - 1];
                ((0, i.ok)("inlineCode" === n.type),
                    (n.value = t),
                    this.exit(e));
            }
            function W(e, t) {
                return "|" === t ? t : e;
            }
            function V(e) {
                let t = this.stack[this.stack.length - 2];
                ((0, i.ok)("listItem" === t.type),
                    (t.checked = "taskListCheckValueChecked" === e.type));
            }
            function G(e) {
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
            function Q(e, t, n, r) {
                let i = e.children[0],
                    o =
                        "boolean" == typeof e.checked &&
                        i &&
                        "paragraph" === i.type,
                    l = "[" + (e.checked ? "x" : " ") + "] ",
                    a = n.createTracker(r);
                o && a.move(l);
                let s = _.p.listItem(e, t, n, { ...r, ...a.current() });
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
            function U() {
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
                            gfmFootnoteDefinition: y,
                            gfmFootnoteDefinitionLabelString: v,
                            gfmFootnoteCall: w,
                            gfmFootnoteCallString: F,
                        },
                        exit: {
                            gfmFootnoteDefinition: D,
                            gfmFootnoteDefinitionLabelString: C,
                            gfmFootnoteCall: S,
                            gfmFootnoteCallString: A,
                        },
                    },
                    {
                        canContainEols: ["delete"],
                        enter: { strikethrough: T },
                        exit: { strikethrough: I },
                    },
                    {
                        enter: {
                            table: j,
                            tableData: $,
                            tableHeader: $,
                            tableRow: B,
                        },
                        exit: {
                            codeText: q,
                            table: P,
                            tableData: H,
                            tableHeader: H,
                            tableRow: H,
                        },
                    },
                    {
                        exit: {
                            taskListCheckValueChecked: V,
                            taskListCheckValueUnchecked: V,
                            paragraph: G,
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
                                footnoteReference: E,
                            },
                        },
                        {
                            unsafe: [
                                {
                                    character: "~",
                                    inConstruct: "phrasing",
                                    notInConstruct: N,
                                },
                            ],
                            handlers: { delete: M },
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
                                    { atBreak: !0, character: ":", after: "-" },
                                    {
                                        atBreak: !0,
                                        character: "-",
                                        after: "[:|-]",
                                    },
                                ],
                                handlers: {
                                    inlineCode: function (e, t, n) {
                                        let r = _.p.inlineCode(e, t, n);
                                        return (
                                            n.stack.includes("tableCell") &&
                                                (r = r.replace(/\|/g, "\\$&")),
                                            r
                                        );
                                    },
                                    table: function (e, t, n, r) {
                                        return a(
                                            (function (e, t, n) {
                                                let r = e.children,
                                                    i = -1,
                                                    o = [],
                                                    l = t.enter("table");
                                                for (; ++i < r.length; )
                                                    o[i] = s(r[i], t, n);
                                                return (l(), o);
                                            })(e, n, r),
                                            e.align
                                        );
                                    },
                                    tableCell: l,
                                    tableRow: function (e, t, n, r) {
                                        let i = a([s(e, n, r)]);
                                        return i.slice(
                                            0,
                                            i.indexOf(`
`)
                                        );
                                    },
                                },
                            };
                            function l(e, t, n, r) {
                                let i = n.enter("tableCell"),
                                    l = n.enter("phrasing"),
                                    a = n.containerPhrasing(e, {
                                        ...r,
                                        before: o,
                                        after: o,
                                    });
                                return (l(), i(), a);
                            }
                            function a(e, t) {
                                return (function (e, t) {
                                    let n = t || {},
                                        r = (n.align || []).concat(),
                                        i = n.stringLength || z,
                                        o = [],
                                        l = [],
                                        a = [],
                                        s = [],
                                        u = 0,
                                        c = -1;
                                    for (; ++c < e.length; ) {
                                        let t = [],
                                            r = [],
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
                                                let e = i(l);
                                                ((r[o] = e),
                                                    (void 0 === s[o] ||
                                                        e > s[o]) &&
                                                        (s[o] = e));
                                            }
                                            t.push(l);
                                        }
                                        ((l[c] = t), (a[c] = r));
                                    }
                                    let h = -1;
                                    if ("object" == typeof r && "length" in r)
                                        for (; ++h < u; ) o[h] = R(r[h]);
                                    else {
                                        let e = R(r);
                                        for (; ++h < u; ) o[h] = e;
                                    }
                                    h = -1;
                                    let d = [],
                                        g = [];
                                    for (; ++h < u; ) {
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
                                                          s[h] -
                                                              t.length -
                                                              r.length
                                                      ),
                                            l = t + "-".repeat(i) + r;
                                        (!1 !== n.alignDelimiters &&
                                            ((i = t.length + i + r.length) >
                                                s[h] && (s[h] = i),
                                            (g[h] = i)),
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
                                        let r = [];
                                        for (; ++h < u; ) {
                                            let i = e[h] || "",
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
                                                r.push("|"),
                                                !1 !== n.padding &&
                                                    (!1 !== n.alignDelimiters ||
                                                        "" !== i) &&
                                                    (!1 !== n.delimiterStart ||
                                                        h) &&
                                                    r.push(" "),
                                                !1 !== n.alignDelimiters &&
                                                    r.push(l),
                                                r.push(i),
                                                !1 !== n.alignDelimiters &&
                                                    r.push(a),
                                                !1 !== n.padding && r.push(" "),
                                                (!1 !== n.delimiterEnd ||
                                                    h !== u - 1) &&
                                                    r.push("|"));
                                        }
                                        p.push(
                                            !1 === n.delimiterEnd
                                                ? r.join("").replace(/ +$/, "")
                                                : r.join("")
                                        );
                                    }
                                    return p.join(`
`);
                                })(e, {
                                    align: t,
                                    alignDelimiters: r,
                                    padding: n,
                                    stringLength: i,
                                });
                            }
                            function s(e, t, n) {
                                let r = e.children,
                                    i = -1,
                                    o = [],
                                    a = t.enter("tableRow");
                                for (; ++i < r.length; )
                                    o[i] = l(r[i], e, t, n);
                                return (a(), o);
                            }
                        })(e),
                        {
                            unsafe: [
                                { atBreak: !0, character: "-", after: "[:|-]" },
                            ],
                            handlers: { listItem: Q },
                        },
                    ],
                };
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
                let r = (0, c.S)(e),
                    i = (0, c.S)(t);
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
                    l = n.createTracker(r),
                    a = l.move(i),
                    s = l.move(
                        n.containerPhrasing(e, {
                            after: i,
                            before: a,
                            ...l.current(),
                        })
                    ),
                    c = s.charCodeAt(0),
                    h = f(r.before.charCodeAt(r.before.length - 1), c, i);
                h.inside && (s = (0, u.T)(c) + s.slice(1));
                let d = s.charCodeAt(s.length - 1),
                    g = f(r.after.charCodeAt(0), d, i);
                g.inside && (s = s.slice(0, -1) + (0, u.T)(d));
                let p = l.move(i);
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
            function p(e, t, n, r) {
                let i = s(n),
                    o = '"' === i ? "Quote" : "Apostrophe",
                    l = n.enter("image"),
                    a = n.enter("label"),
                    u = n.createTracker(r),
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
                        (c += u.move(" " + i)),
                        (c += u.move(
                            n.safe(e.title, {
                                before: c,
                                after: i,
                                ...u.current(),
                            })
                        )),
                        (c += u.move(i)),
                        a()),
                    (c += u.move(")")),
                    l(),
                    c
                );
            }
            function m(e, t, n, r) {
                let i = e.referenceType,
                    o = n.enter("imageReference"),
                    l = n.enter("label"),
                    a = n.createTracker(r),
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
                    "full" !== i && u && u === f
                        ? "shortcut" === i
                            ? (s = s.slice(0, -1))
                            : (s += a.move("]"))
                        : (s += a.move(f + "]")),
                    s
                );
            }
            function b(e, t, n) {
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
            function y(e, t, n, r) {
                let i,
                    o,
                    l = s(n),
                    a = '"' === l ? "Quote" : "Apostrophe",
                    u = n.createTracker(r);
                if (x(e, n)) {
                    let t = n.stack;
                    ((n.stack = []), (i = n.enter("autolink")));
                    let r = u.move("<");
                    return (
                        (r += u.move(
                            n.containerPhrasing(e, {
                                before: r,
                                after: ">",
                                ...u.current(),
                            })
                        )),
                        (r += u.move(">")),
                        i(),
                        (n.stack = t),
                        r
                    );
                }
                ((i = n.enter("link")), (o = n.enter("label")));
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
                    i(),
                    c
                );
            }
            function v(e, t, n, r) {
                let i = e.referenceType,
                    o = n.enter("linkReference"),
                    l = n.enter("label"),
                    a = n.createTracker(r),
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
                    "full" !== i && u && u === f
                        ? "shortcut" === i
                            ? (s = s.slice(0, -1))
                            : (s += a.move("]"))
                        : (s += a.move(f + "]")),
                    s
                );
            }
            function C(e) {
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
            ((y.peek = function (e, t, n) {
                return x(e, n) ? "<" : "[";
            }),
                (v.peek = function () {
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
            function F(e, t, n, r) {
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
                    l = n.createTracker(r),
                    a = l.move(i + i),
                    s = l.move(
                        n.containerPhrasing(e, {
                            after: i,
                            before: a,
                            ...l.current(),
                        })
                    ),
                    c = s.charCodeAt(0),
                    h = f(r.before.charCodeAt(r.before.length - 1), c, i);
                h.inside && (s = (0, u.T)(c) + s.slice(1));
                let d = s.charCodeAt(s.length - 1),
                    g = f(r.after.charCodeAt(0), d, i);
                g.inside && (s = s.slice(0, -1) + (0, u.T)(d));
                let p = l.move(i + i);
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
            let A = {
                blockquote: function (e, t, n, i) {
                    let o = n.enter("blockquote"),
                        l = n.createTracker(i);
                    (l.move("> "), l.shift(2));
                    let a = n.indentLines(n.containerFlow(e, l.current()), r);
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
                        s = "`" === i ? "GraveAccent" : "Tilde";
                    if ((0, l.m)(e, n)) {
                        let e = n.enter("codeIndented"),
                            t = n.indentLines(o, a);
                        return (e(), t);
                    }
                    let u = n.createTracker(r),
                        c = i.repeat(
                            Math.max(
                                (function (e, t) {
                                    let n = String(e),
                                        r = n.indexOf(t),
                                        i = r,
                                        o = 0,
                                        l = 0;
                                    if ("string" != typeof t)
                                        throw TypeError("Expected substring");
                                    for (; -1 !== r; )
                                        (r === i ? ++o > l && (l = o) : (o = 1),
                                            (i = r + t.length),
                                            (r = n.indexOf(t, i)));
                                    return l;
                                })(o, i) + 1,
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
                definition: function (e, t, n, r) {
                    let i = s(n),
                        o = '"' === i ? "Quote" : "Apostrophe",
                        l = n.enter("definition"),
                        a = n.enter("label"),
                        u = n.createTracker(r),
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
                            (c += u.move(" " + i)),
                            (c += u.move(
                                n.safe(e.title, {
                                    before: c,
                                    after: i,
                                    ...u.current(),
                                })
                            )),
                            (c += u.move(i)),
                            a()),
                        l(),
                        c
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
                            l = n.containerPhrasing(e, {
                                ...o.current(),
                                before: `
`,
                                after: `
`,
                            });
                        return (
                            r(),
                            t(),
                            l +
                                `
` +
                                (1 === i ? "=" : "-").repeat(
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
                    let l = "#".repeat(i),
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
                link: y,
                linkReference: v,
                list: function (e, t, n, r) {
                    let i = n.enter("list"),
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
                            : C(n),
                        a = e.ordered
                            ? "." === l
                                ? ")"
                                : "."
                            : (function (e) {
                                  let t = C(e),
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
                    let u = n.containerFlow(e, r);
                    return (
                        (n.bulletLastUsed = l),
                        (n.bulletCurrent = o),
                        i(),
                        u
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
                        o = n.bulletCurrent || C(n);
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
                    ("tab" === i ||
                        ("mixed" === i &&
                            ((t && "list" === t.type && t.spread) ||
                                e.spread))) &&
                        (l = 4 * Math.ceil(l / 4));
                    let a = n.createTracker(r);
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
                paragraph: function (e, t, n, r) {
                    let i = n.enter("paragraph"),
                        o = n.enter("phrasing"),
                        l = n.containerPhrasing(e, r);
                    return (o(), i(), l);
                },
                root: function (e, t, n, r) {
                    return (
                        e.children.some(function (e) {
                            return w(e);
                        })
                            ? n.containerPhrasing
                            : n.containerFlow
                    ).call(n, e, r);
                },
                strong: F,
                text: function (e, t, n, r) {
                    return n.safe(e.value, r);
                },
                thematicBreak: function (e, t, n) {
                    let r = (D(n) + (n.options.ruleSpaces ? " " : "")).repeat(
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
        74313: (e, t, n) => {
            n.d(t, { h: () => h, s: () => d });
            var r = n(55035),
                i = n(72282);
            let o = /[#.]/g;
            var l = n(91775),
                a = n(77457),
                s = n(72485);
            let u = {}.hasOwnProperty;
            function c(e, t, n) {
                let r =
                    n &&
                    (function (e) {
                        let t = {},
                            n = -1;
                        for (; ++n < e.length; ) t[e[n].toLowerCase()] = e[n];
                        return t;
                    })(n);
                return function (n, a, ...c) {
                    let h,
                        d = -1;
                    if (null == n)
                        ((h = { type: "root", children: [] }), c.unshift(a));
                    else if (
                        (((h = (function (e, t) {
                            let n,
                                r,
                                i = e || "",
                                l = {},
                                a = 0;
                            for (; a < i.length; ) {
                                o.lastIndex = a;
                                let e = o.exec(i),
                                    t = i.slice(a, e ? e.index : i.length);
                                (t &&
                                    (n
                                        ? "#" === n
                                            ? (l.id = t)
                                            : Array.isArray(l.className)
                                              ? l.className.push(t)
                                              : (l.className = [t])
                                        : (r = t),
                                    (a += t.length)),
                                    e && ((n = e[0]), a++));
                            }
                            return {
                                type: "element",
                                tagName: r || t || "div",
                                properties: l,
                                children: [],
                            };
                        })(n, t)).tagName = h.tagName.toLowerCase()),
                        r && u.call(r, h.tagName) && (h.tagName = r[h.tagName]),
                        (function (e) {
                            if (
                                null === e ||
                                "object" != typeof e ||
                                Array.isArray(e)
                            )
                                return !0;
                            if ("string" != typeof e.type) return !1;
                            for (let t of Object.keys(e)) {
                                let n = e[t];
                                if (n && "object" == typeof n) {
                                    if (!Array.isArray(n)) return !0;
                                    for (let e of n)
                                        if (
                                            "number" != typeof e &&
                                            "string" != typeof e
                                        )
                                            return !0;
                                }
                            }
                            return !!(
                                "children" in e && Array.isArray(e.children)
                            );
                        })(a))
                    )
                        c.unshift(a);
                    else {
                        let t;
                        for (t in a)
                            u.call(a, t) &&
                                (function (e, t, n, r) {
                                    let o,
                                        a = (0, l.I)(e, n),
                                        c = -1;
                                    if (null != r) {
                                        if ("number" == typeof r) {
                                            if (Number.isNaN(r)) return;
                                            o = r;
                                        } else
                                            o =
                                                "boolean" == typeof r
                                                    ? r
                                                    : "string" == typeof r
                                                      ? a.spaceSeparated
                                                          ? (0, s.q)(r)
                                                          : a.commaSeparated
                                                            ? (0, i.q)(r)
                                                            : a.commaOrSpaceSeparated
                                                              ? (0, s.q)(
                                                                    (0, i.q)(
                                                                        r
                                                                    ).join(" ")
                                                                )
                                                              : f(
                                                                    a,
                                                                    a.property,
                                                                    r
                                                                )
                                                      : Array.isArray(r)
                                                        ? r.concat()
                                                        : "style" === a.property
                                                          ? (function (e) {
                                                                let t,
                                                                    n = [];
                                                                for (t in e)
                                                                    u.call(
                                                                        e,
                                                                        t
                                                                    ) &&
                                                                        n.push(
                                                                            [
                                                                                t,
                                                                                e[
                                                                                    t
                                                                                ],
                                                                            ].join(
                                                                                ": "
                                                                            )
                                                                        );
                                                                return n.join(
                                                                    "; "
                                                                );
                                                            })(r)
                                                          : String(r);
                                        if (Array.isArray(o)) {
                                            let e = [];
                                            for (; ++c < o.length; ) {
                                                let t = f(a, a.property, o[c]);
                                                e[c] = t;
                                            }
                                            o = e;
                                        }
                                        if (
                                            "className" === a.property &&
                                            Array.isArray(t.className)
                                        ) {
                                            let e = o;
                                            o = t.className.concat(e);
                                        }
                                        t[a.property] = o;
                                    }
                                })(e, h.properties, t, a[t]);
                    }
                    for (; ++d < c.length; )
                        !(function e(t, n) {
                            let r = -1;
                            if (null == n);
                            else if (
                                "string" == typeof n ||
                                "number" == typeof n
                            )
                                t.push({ type: "text", value: String(n) });
                            else if (Array.isArray(n))
                                for (; ++r < n.length; ) e(t, n[r]);
                            else if ("object" == typeof n && "type" in n)
                                "root" === n.type
                                    ? e(t, n.children)
                                    : t.push(n);
                            else
                                throw Error(
                                    "Expected node, nodes, or string, got `" +
                                        n +
                                        "`"
                                );
                        })(h.children, c[d]);
                    return (
                        "element" === h.type &&
                            "template" === h.tagName &&
                            ((h.content = {
                                type: "root",
                                children: h.children,
                            }),
                            (h.children = [])),
                        h
                    );
                };
            }
            function f(e, t, n) {
                if ("string" == typeof n) {
                    if (e.number && n && !Number.isNaN(Number(n)))
                        return Number(n);
                    if (
                        (e.boolean || e.overloadedBoolean) &&
                        ("" === n || (0, a.S)(n) === (0, a.S)(t))
                    )
                        return !0;
                }
                return n;
            }
            let h = c(r.qy, "div"),
                d = c(r.JW, "g", [
                    "altGlyph",
                    "altGlyphDef",
                    "altGlyphItem",
                    "animateColor",
                    "animateMotion",
                    "animateTransform",
                    "clipPath",
                    "feBlend",
                    "feColorMatrix",
                    "feComponentTransfer",
                    "feComposite",
                    "feConvolveMatrix",
                    "feDiffuseLighting",
                    "feDisplacementMap",
                    "feDistantLight",
                    "feDropShadow",
                    "feFlood",
                    "feFuncA",
                    "feFuncB",
                    "feFuncG",
                    "feFuncR",
                    "feGaussianBlur",
                    "feImage",
                    "feMerge",
                    "feMergeNode",
                    "feMorphology",
                    "feOffset",
                    "fePointLight",
                    "feSpecularLighting",
                    "feSpotLight",
                    "feTile",
                    "feTurbulence",
                    "foreignObject",
                    "glyphRef",
                    "linearGradient",
                    "radialGradient",
                    "solidColor",
                    "textArea",
                    "textPath",
                ]);
        },
        77760: (e, t, n) => {
            function r(e) {
                let t = String(e),
                    n = [];
                return {
                    toOffset: function (e) {
                        if (
                            e &&
                            "number" == typeof e.line &&
                            "number" == typeof e.column &&
                            !Number.isNaN(e.line) &&
                            !Number.isNaN(e.column)
                        ) {
                            for (; n.length < e.line; ) {
                                let e = n[n.length - 1],
                                    r = i(t, e),
                                    o = -1 === r ? t.length + 1 : r + 1;
                                if (e === o) break;
                                n.push(o);
                            }
                            let r =
                                (e.line > 1 ? n[e.line - 2] : 0) + e.column - 1;
                            if (r < n[e.line - 1]) return r;
                        }
                    },
                    toPoint: function (e) {
                        if ("number" == typeof e && e > -1 && e <= t.length) {
                            let r = 0;
                            for (;;) {
                                let o = n[r];
                                if (void 0 === o) {
                                    let e = i(t, n[r - 1]);
                                    ((o = -1 === e ? t.length + 1 : e + 1),
                                        (n[r] = o));
                                }
                                if (o > e)
                                    return {
                                        line: r + 1,
                                        column: e - (r > 0 ? n[r - 1] : 0) + 1,
                                        offset: e,
                                    };
                                r++;
                            }
                        }
                    },
                };
            }
            function i(e, t) {
                let n = e.indexOf("\r", t),
                    r = e.indexOf(
                        `
`,
                        t
                    );
                return -1 === r
                    ? n
                    : -1 === n || n + 1 === r
                      ? r
                      : n < r
                        ? n
                        : r;
            }
            n.d(t, { C: () => r });
        },
        84600: (e, t, n) => {
            n.d(t, { T: () => X, I: () => ee });
            var r = n(5389),
                i = n(40574);
            let o = {
                    tokenize: function (e, t, n) {
                        let r = 0;
                        return function t(o) {
                            return (87 === o || 119 === o) && r < 3
                                ? (r++, e.consume(o), t)
                                : 46 === o && 3 === r
                                  ? (e.consume(o), i)
                                  : n(o);
                        };
                        function i(e) {
                            return null === e ? n(e) : t(e);
                        }
                    },
                    partial: !0,
                },
                l = {
                    tokenize: function (e, t, n) {
                        let r, o, l;
                        return a;
                        function a(t) {
                            return 46 === t || 95 === t
                                ? e.check(s, c, u)(t)
                                : null === t ||
                                    (0, i.Ee)(t) ||
                                    (0, i.Ny)(t) ||
                                    (45 !== t && (0, i.es)(t))
                                  ? c(t)
                                  : ((l = !0), e.consume(t), a);
                        }
                        function u(t) {
                            return (
                                95 === t ? (r = !0) : ((o = r), (r = void 0)),
                                e.consume(t),
                                a
                            );
                        }
                        function c(e) {
                            return o || r || !l ? n(e) : t(e);
                        }
                    },
                    partial: !0,
                },
                a = {
                    tokenize: function (e, t) {
                        let n = 0,
                            r = 0;
                        return o;
                        function o(a) {
                            return 40 === a
                                ? (n++, e.consume(a), o)
                                : 41 === a && r < n
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
                                    : null === a || (0, i.Ee)(a) || (0, i.Ny)(a)
                                      ? t(a)
                                      : (e.consume(a), o);
                        }
                        function l(t) {
                            return (41 === t && r++, e.consume(t), o);
                        }
                    },
                    partial: !0,
                },
                s = {
                    tokenize: function (e, t, n) {
                        return r;
                        function r(a) {
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
                                ? (e.consume(a), r)
                                : 38 === a
                                  ? (e.consume(a), l)
                                  : 93 === a
                                    ? (e.consume(a), o)
                                    : 60 === a ||
                                        null === a ||
                                        (0, i.Ee)(a) ||
                                        (0, i.Ny)(a)
                                      ? t(a)
                                      : n(a);
                        }
                        function o(e) {
                            return null === e ||
                                40 === e ||
                                91 === e ||
                                (0, i.Ee)(e) ||
                                (0, i.Ny)(e)
                                ? t(e)
                                : r(e);
                        }
                        function l(t) {
                            return (0, i.CW)(t)
                                ? (function t(o) {
                                      return 59 === o
                                          ? (e.consume(o), r)
                                          : (0, i.CW)(o)
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
                            return (e.consume(t), r);
                        };
                        function r(e) {
                            return (0, i.lV)(e) ? n(e) : t(e);
                        }
                    },
                    partial: !0,
                },
                c = {
                    name: "wwwAutolink",
                    tokenize: function (e, t, n) {
                        let r = this;
                        return function (t) {
                            return (87 !== t && 119 !== t) ||
                                !p.call(r, r.previous) ||
                                x(r.events)
                                ? n(t)
                                : (e.enter("literalAutolink"),
                                  e.enter("literalAutolinkWww"),
                                  e.check(
                                      o,
                                      e.attempt(l, e.attempt(a, i), n),
                                      n
                                  )(t));
                        };
                        function i(n) {
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
                        let r = this,
                            o = "",
                            s = !1;
                        return function (t) {
                            return (72 === t || 104 === t) &&
                                m.call(r, r.previous) &&
                                !x(r.events)
                                ? (e.enter("literalAutolink"),
                                  e.enter("literalAutolinkHttp"),
                                  (o += String.fromCodePoint(t)),
                                  e.consume(t),
                                  u)
                                : n(t);
                        };
                        function u(t) {
                            if ((0, i.CW)(t) && o.length < 5)
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
                                (0, i.JQ)(t) ||
                                (0, i.Ee)(t) ||
                                (0, i.Ny)(t) ||
                                (0, i.es)(t)
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
                        let r,
                            o,
                            l = this;
                        return function (t) {
                            return !k(t) ||
                                !b.call(l, l.previous) ||
                                x(l.events)
                                ? n(t)
                                : (e.enter("literalAutolink"),
                                  e.enter("literalAutolinkEmail"),
                                  (function t(r) {
                                      return k(r)
                                          ? (e.consume(r), t)
                                          : 64 === r
                                            ? (e.consume(r), a)
                                            : n(r);
                                  })(t));
                        };
                        function a(t) {
                            return 46 === t
                                ? e.check(u, c, s)(t)
                                : 45 === t || 95 === t || (0, i.lV)(t)
                                  ? ((o = !0), e.consume(t), a)
                                  : c(t);
                        }
                        function s(t) {
                            return (e.consume(t), (r = !0), a);
                        }
                        function c(a) {
                            return o && r && (0, i.CW)(l.previous)
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
                    (0, i.Ee)(e)
                );
            }
            function m(e) {
                return !(0, i.CW)(e);
            }
            function b(e) {
                return !(47 === e || k(e));
            }
            function k(e) {
                return (
                    43 === e || 45 === e || 46 === e || 95 === e || (0, i.lV)(e)
                );
            }
            function x(e) {
                let t = e.length,
                    n = !1;
                for (; t--; ) {
                    let r = e[t][1];
                    if (
                        ("labelLink" === r.type || "labelImage" === r.type) &&
                        !r._balanced
                    ) {
                        n = !0;
                        break;
                    }
                    if (r._gfmAutolinkLiteralWalkedInto) {
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
            var y = n(63215);
            function v(e) {
                w.call(this, e, "http://");
            }
            function C(e) {
                w.call(this, e, "mailto:");
            }
            function D(e) {
                w.call(this, e);
            }
            function w(e, t) {
                let n = this.sliceSerialize(e);
                (this.tag('<a href="' + (0, y.Q)((t || "") + n) + '">'),
                    this.raw(this.encode(n)),
                    this.tag("</a>"));
            }
            var F = n(9283),
                A = n(40433),
                S = n(9638);
            let E = {
                tokenize: function (e, t, n) {
                    let r = this;
                    return (0, A.N)(
                        e,
                        function (e) {
                            let i = r.events[r.events.length - 1];
                            return i &&
                                "gfmFootnoteDefinitionIndent" === i[1].type &&
                                4 === i[2].sliceSerialize(i[1], !0).length
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
                let r,
                    i = this,
                    o = i.events.length,
                    l = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
                for (; o--; ) {
                    let e = i.events[o][1];
                    if ("labelImage" === e.type) {
                        r = e;
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
                    if (!r || !r._balanced) return n(o);
                    let a = (0, S.B)(
                        i.sliceSerialize({ start: r.end, end: i.now() })
                    );
                    return 94 === a.codePointAt(0) && l.includes(a.slice(1))
                        ? (e.enter("gfmFootnoteCallLabelMarker"),
                          e.consume(o),
                          e.exit("gfmFootnoteCallLabelMarker"),
                          t(o))
                        : n(o);
                };
            }
            function O(e, t) {
                let n = e.length;
                for (; n--; )
                    if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
                        e[n][1];
                        break;
                    }
                ((e[n + 1][1].type = "data"),
                    (e[n + 3][1].type = "gfmFootnoteCallLabelMarker"));
                let r = {
                        type: "gfmFootnoteCall",
                        start: Object.assign({}, e[n + 3][1].start),
                        end: Object.assign({}, e[e.length - 1][1].end),
                    },
                    i = {
                        type: "gfmFootnoteCallMarker",
                        start: Object.assign({}, e[n + 3][1].end),
                        end: Object.assign({}, e[n + 3][1].end),
                    };
                (i.end.column++, i.end.offset++, i.end._bufferIndex++);
                let o = {
                        type: "gfmFootnoteCallString",
                        start: Object.assign({}, i.end),
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
                        ["enter", r, t],
                        e[n + 3],
                        e[n + 4],
                        ["enter", i, t],
                        ["exit", i, t],
                        ["enter", o, t],
                        ["enter", l, t],
                        ["exit", l, t],
                        ["exit", o, t],
                        e[e.length - 2],
                        e[e.length - 1],
                        ["exit", r, t],
                    ];
                return (e.splice(n, e.length - n + 1, ...a), e);
            }
            function N(e, t, n) {
                let r,
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
                        (93 === s && !r) ||
                        null === s ||
                        91 === s ||
                        (0, i.Ee)(s)
                    )
                        return n(s);
                    if (93 === s) {
                        e.exit("chunkString");
                        let r = e.exit("gfmFootnoteCallString");
                        return l.includes((0, S.B)(o.sliceSerialize(r)))
                            ? (e.enter("gfmFootnoteCallLabelMarker"),
                              e.consume(s),
                              e.exit("gfmFootnoteCallLabelMarker"),
                              e.exit("gfmFootnoteCall"),
                              t)
                            : n(s);
                    }
                    return (
                        (0, i.Ee)(s) || (r = !0),
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
            function T(e, t, n) {
                let r,
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
                        (0, i.Ee)(t)
                    )
                        return n(t);
                    if (93 === t) {
                        e.exit("chunkString");
                        let n = e.exit("gfmFootnoteDefinitionLabelString");
                        return (
                            (r = (0, S.B)(l.sliceSerialize(n))),
                            e.enter("gfmFootnoteDefinitionLabelMarker"),
                            e.consume(t),
                            e.exit("gfmFootnoteDefinitionLabelMarker"),
                            e.exit("gfmFootnoteDefinitionLabel"),
                            h
                        );
                    }
                    return (
                        (0, i.Ee)(t) || (o = !0),
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
                          a.includes(r) || a.push(r),
                          (0, A.N)(e, d, "gfmFootnoteDefinitionWhitespace"))
                        : n(t);
                }
                function d(e) {
                    return t(e);
                }
            }
            function I(e, t, n) {
                return e.check(F.B, t, e.attempt(E, t, n));
            }
            function M(e) {
                e.exit("gfmFootnoteDefinition");
            }
            let z = {}.hasOwnProperty,
                R = {};
            function _(e, t) {
                return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
            }
            var j = n(82777),
                P = n(10691),
                B = n(45535);
            let EditMap = class EditMap {
                constructor() {
                    this.map = [];
                }
                add(e, t, n) {
                    !(function (e, t, n, r) {
                        let i = 0;
                        if (0 !== n || 0 !== r.length) {
                            for (; i < e.map.length; ) {
                                if (e.map[i][0] === t) {
                                    ((e.map[i][1] += n),
                                        e.map[i][2].push(...r));
                                    return;
                                }
                                i += 1;
                            }
                            e.map.push([t, n, r]);
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
                    let r = n.pop();
                    for (; r; ) (e.push(...r), (r = n.pop()));
                    this.map.length = 0;
                }
            };
            function H(e, t, n) {
                let r,
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
                    let r = t > -1 ? o.events[t][1].type : null,
                        i = "tableHead" === r || "tableRow" === r ? x : s;
                    return i === x && o.parser.lazy[o.now().line] ? n(e) : i(e);
                };
                function s(t) {
                    var n;
                    return (
                        e.enter("tableHead"),
                        e.enter("tableRow"),
                        124 === (n = t) || ((r = !0), (a += 1)),
                        u(n)
                    );
                }
                function u(t) {
                    return null === t
                        ? n(t)
                        : (0, i.HP)(t)
                          ? a > 1
                              ? ((a = 0),
                                (o.interrupt = !0),
                                e.exit("tableRow"),
                                e.enter("lineEnding"),
                                e.consume(t),
                                e.exit("lineEnding"),
                                h)
                              : n(t)
                          : (0, i.On)(t)
                            ? (0, A.N)(e, u, "whitespace")(t)
                            : ((a += 1), r && ((r = !1), (l += 1)), 124 === t)
                              ? (e.enter("tableCellDivider"),
                                e.consume(t),
                                e.exit("tableCellDivider"),
                                (r = !0),
                                u)
                              : (e.enter("data"), c(t));
                }
                function c(t) {
                    return null === t || 124 === t || (0, i.Ee)(t)
                        ? (e.exit("data"), u(t))
                        : (e.consume(t), 92 === t ? f : c);
                }
                function f(t) {
                    return 92 === t || 124 === t ? (e.consume(t), c) : c(t);
                }
                function h(t) {
                    return ((o.interrupt = !1), o.parser.lazy[o.now().line])
                        ? n(t)
                        : (e.enter("tableDelimiterRow"), (r = !1), (0, i.On)(t))
                          ? (0, A.N)(
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
                          ? ((r = !0),
                            e.enter("tableCellDivider"),
                            e.consume(t),
                            e.exit("tableCellDivider"),
                            g)
                          : n(t);
                }
                function g(t) {
                    return (0, i.On)(t)
                        ? (0, A.N)(e, p, "whitespace")(t)
                        : p(t);
                }
                function p(t) {
                    return 58 === t
                        ? ((a += 1),
                          (r = !0),
                          e.enter("tableDelimiterMarker"),
                          e.consume(t),
                          e.exit("tableDelimiterMarker"),
                          m)
                        : 45 === t
                          ? ((a += 1), m(t))
                          : null === t || (0, i.HP)(t)
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
                                    ? ((r = !0),
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
                    return (0, i.On)(t)
                        ? (0, A.N)(e, k, "whitespace")(t)
                        : k(t);
                }
                function k(o) {
                    if (124 === o) return d(o);
                    if (null === o || (0, i.HP)(o))
                        return r && l === a
                            ? (e.exit("tableDelimiterRow"),
                              e.exit("tableHead"),
                              t(o))
                            : n(o);
                    return n(o);
                }
                function x(t) {
                    return (e.enter("tableRow"), y(t));
                }
                function y(n) {
                    return 124 === n
                        ? (e.enter("tableCellDivider"),
                          e.consume(n),
                          e.exit("tableCellDivider"),
                          y)
                        : null === n || (0, i.HP)(n)
                          ? (e.exit("tableRow"), t(n))
                          : (0, i.On)(n)
                            ? (0, A.N)(e, y, "whitespace")(n)
                            : (e.enter("data"), v(n));
                }
                function v(t) {
                    return null === t || 124 === t || (0, i.Ee)(t)
                        ? (e.exit("data"), y(t))
                        : (e.consume(t), 92 === t ? C : v);
                }
                function C(t) {
                    return 92 === t || 124 === t ? (e.consume(t), v) : v(t);
                }
            }
            function $(e, t) {
                let n,
                    r,
                    i,
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
                                  (W(h, t, f, n, r), (r = void 0), (f = 0)),
                              (n = {
                                  type: "table",
                                  start: Object.assign({}, g.start),
                                  end: Object.assign({}, g.end),
                              }),
                              h.add(o, 0, [["enter", n, t]]))
                            : "tableRow" === g.type ||
                                "tableDelimiterRow" === g.type
                              ? ((l = !0),
                                (i = void 0),
                                (s = [0, 0, 0, 0]),
                                (u = [0, o + 1, 0, 0]),
                                c &&
                                    ((c = !1),
                                    (r = {
                                        type: "tableBody",
                                        start: Object.assign({}, g.start),
                                        end: Object.assign({}, g.end),
                                    }),
                                    h.add(o, 0, [["enter", r, t]])),
                                (a =
                                    "tableDelimiterRow" === g.type
                                        ? 2
                                        : r
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
                                          (i = q(h, t, s, a, void 0, i)),
                                          (s = [0, 0, 0, 0])),
                                      (u[2] = o)))
                                : "tableCellDivider" === g.type &&
                                  (l
                                      ? (l = !1)
                                      : (0 !== s[1] &&
                                            ((u[0] = u[1]),
                                            (i = q(h, t, s, a, void 0, i))),
                                        (u = [(s = u)[1], o, 0, 0])))
                        : "tableHead" === g.type
                          ? ((c = !0), (f = o))
                          : "tableRow" === g.type ||
                              "tableDelimiterRow" === g.type
                            ? ((f = o),
                              0 !== s[1]
                                  ? ((u[0] = u[1]), (i = q(h, t, s, a, o, i)))
                                  : 0 !== u[1] && (i = q(h, t, u, a, o, i)),
                              (a = 0))
                            : a &&
                              ("data" === g.type ||
                                  "tableDelimiterMarker" === g.type ||
                                  "tableDelimiterFiller" === g.type) &&
                              (u[3] = o);
                }
                for (
                    0 !== f && W(h, t, f, n, r), h.consume(t.events), o = -1;
                    ++o < t.events.length;

                ) {
                    let e = t.events[o];
                    "enter" === e[0] &&
                        "table" === e[1].type &&
                        (e[1]._align = (function (e, t) {
                            let n = !1,
                                r = [];
                            for (; t < e.length; ) {
                                let i = e[t];
                                if (n) {
                                    if ("enter" === i[0])
                                        "tableContent" === i[1].type &&
                                            r.push(
                                                "tableDelimiterMarker" ===
                                                    e[t + 1][1].type
                                                    ? "left"
                                                    : "none"
                                            );
                                    else if ("tableContent" === i[1].type) {
                                        if (
                                            "tableDelimiterMarker" ===
                                            e[t - 1][1].type
                                        ) {
                                            let e = r.length - 1;
                                            r[e] =
                                                "left" === r[e]
                                                    ? "center"
                                                    : "right";
                                        }
                                    } else if (
                                        "tableDelimiterRow" === i[1].type
                                    )
                                        break;
                                } else
                                    "enter" === i[0] &&
                                        "tableDelimiterRow" === i[1].type &&
                                        (n = !0);
                                t += 1;
                            }
                            return r;
                        })(t.events, o));
                }
                return e;
            }
            function q(e, t, n, r, i, o) {
                0 !== n[0] &&
                    ((o.end = Object.assign({}, V(t.events, n[0]))),
                    e.add(n[0], 0, [["exit", o, t]]));
                let l = V(t.events, n[1]);
                if (
                    ((o = {
                        type:
                            1 === r
                                ? "tableHeader"
                                : 2 === r
                                  ? "tableDelimiter"
                                  : "tableData",
                        start: Object.assign({}, l),
                        end: Object.assign({}, l),
                    }),
                    e.add(n[1], 0, [["enter", o, t]]),
                    0 !== n[2])
                ) {
                    let i = V(t.events, n[2]),
                        o = V(t.events, n[3]),
                        l = {
                            type: "tableContent",
                            start: Object.assign({}, i),
                            end: Object.assign({}, o),
                        };
                    if ((e.add(n[2], 0, [["enter", l, t]]), 2 !== r)) {
                        let r = t.events[n[2]],
                            i = t.events[n[3]];
                        if (
                            ((r[1].end = Object.assign({}, i[1].end)),
                            (r[1].type = "chunkText"),
                            (r[1].contentType = "text"),
                            n[3] > n[2] + 1)
                        ) {
                            let t = n[2] + 1,
                                r = n[3] - n[2] - 1;
                            e.add(t, r, []);
                        }
                    }
                    e.add(n[3] + 1, 0, [["exit", l, t]]);
                }
                return (
                    void 0 !== i &&
                        ((o.end = Object.assign({}, V(t.events, i))),
                        e.add(i, 0, [["exit", o, t]]),
                        (o = void 0)),
                    o
                );
            }
            function W(e, t, n, r, i) {
                let o = [],
                    l = V(t.events, n);
                (i && ((i.end = Object.assign({}, l)), o.push(["exit", i, t])),
                    (r.end = Object.assign({}, l)),
                    o.push(["exit", r, t]),
                    e.add(n + 1, 0, o));
            }
            function V(e, t) {
                let n = e[t],
                    r = "enter" === n[0] ? "start" : "end";
                return n[1][r];
            }
            let G = {
                none: "",
                left: ' align="left"',
                right: ' align="right"',
                center: ' align="center"',
            };
            function Q(e, t) {
                return "|" === t ? t : e;
            }
            let U =
                    /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi,
                J = RegExp("^" + U.source, "i");
            function Z(e, t) {
                let n = this.sliceSerialize(e);
                (this.options.allowDangerousHtml &&
                    (n = n.replace(t, "&lt;$1$2")),
                    this.raw(this.encode(n)));
            }
            let Y = {
                name: "tasklistCheck",
                tokenize: function (e, t, n) {
                    let r = this;
                    return function (t) {
                        return null === r.previous &&
                            r._gfmTasklistFirstContentOfListItem
                            ? (e.enter("taskListCheck"),
                              e.enter("taskListCheckMarker"),
                              e.consume(t),
                              e.exit("taskListCheckMarker"),
                              o)
                            : n(t);
                    };
                    function o(t) {
                        return (0, i.Ee)(t)
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
                    function a(r) {
                        return (0, i.HP)(r)
                            ? t(r)
                            : (0, i.On)(r)
                              ? e.check({ tokenize: K }, t, n)(r)
                              : n(r);
                    }
                },
            };
            function K(e, t, n) {
                return (0, A.N)(
                    e,
                    function (e) {
                        return null === e ? n(e) : t(e);
                    },
                    "whitespace"
                );
            }
            function X(e) {
                return (0, r.y)([
                    { text: d },
                    {
                        document: {
                            91: {
                                name: "gfmFootnoteDefinition",
                                tokenize: T,
                                continuation: { tokenize: I },
                                exit: M,
                            },
                        },
                        text: {
                            91: { name: "gfmFootnoteCall", tokenize: N },
                            93: {
                                name: "gfmPotentialFootnoteCall",
                                add: "after",
                                tokenize: L,
                                resolveTo: O,
                            },
                        },
                    },
                    (function (e) {
                        let t = (e || {}).singleTilde,
                            n = {
                                name: "strikethrough",
                                tokenize: function (e, n, r) {
                                    let i = this.previous,
                                        o = this.events,
                                        l = 0;
                                    return function (a) {
                                        return 126 === i &&
                                            "characterEscape" !==
                                                o[o.length - 1][1].type
                                            ? r(a)
                                            : (e.enter(
                                                  "strikethroughSequenceTemporary"
                                              ),
                                              (function o(a) {
                                                  let s = (0, P.S)(i);
                                                  if (126 === a)
                                                      return l > 1
                                                          ? r(a)
                                                          : (e.consume(a),
                                                            l++,
                                                            o);
                                                  if (l < 2 && !t) return r(a);
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
                                            let r = n;
                                            for (; r--; )
                                                if (
                                                    "exit" === e[r][0] &&
                                                    "strikethroughSequenceTemporary" ===
                                                        e[r][1].type &&
                                                    e[r][1]._open &&
                                                    e[n][1].end.offset -
                                                        e[n][1].start.offset ==
                                                        e[r][1].end.offset -
                                                            e[r][1].start.offset
                                                ) {
                                                    ((e[n][1].type =
                                                        "strikethroughSequence"),
                                                        (e[r][1].type =
                                                            "strikethroughSequence"));
                                                    let i = {
                                                            type: "strikethrough",
                                                            start: Object.assign(
                                                                {},
                                                                e[r][1].start
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
                                                                e[r][1].end
                                                            ),
                                                            end: Object.assign(
                                                                {},
                                                                e[n][1].start
                                                            ),
                                                        },
                                                        l = [
                                                            ["enter", i, t],
                                                            [
                                                                "enter",
                                                                e[r][1],
                                                                t,
                                                            ],
                                                            [
                                                                "exit",
                                                                e[r][1],
                                                                t,
                                                            ],
                                                            ["enter", o, t],
                                                        ],
                                                        a =
                                                            t.parser.constructs
                                                                .insideSpan
                                                                .null;
                                                    (a &&
                                                        (0, j.m)(
                                                            l,
                                                            l.length,
                                                            0,
                                                            (0, B.W)(
                                                                a,
                                                                e.slice(
                                                                    r + 1,
                                                                    n
                                                                ),
                                                                t
                                                            )
                                                        ),
                                                        (0, j.m)(
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
                                                                ["exit", i, t],
                                                            ]
                                                        ),
                                                        (0, j.m)(
                                                            e,
                                                            r - 1,
                                                            n - r + 3,
                                                            l
                                                        ),
                                                        (n = r + l.length - 2));
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
                            null: { name: "table", tokenize: H, resolveAll: $ },
                        },
                    },
                    { text: { 91: Y } },
                ]);
            }
            function ee(e) {
                return (0, r.v)([
                    {
                        exit: {
                            literalAutolinkEmail: C,
                            literalAutolinkHttp: D,
                            literalAutolinkWww: v,
                        },
                    },
                    (function (e) {
                        let t = e || R,
                            n = t.label || "Footnotes",
                            r = t.labelTagName || "h2",
                            i =
                                null === t.labelAttributes ||
                                void 0 === t.labelAttributes
                                    ? 'class="sr-only"'
                                    : t.labelAttributes,
                            o = t.backLabel || _,
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
                                        r = t.pop(),
                                        i = this.resume();
                                    (e ||
                                        this.setData(
                                            "gfmFootnoteDefinitions",
                                            (e = {})
                                        ),
                                        z.call(e, r) || (e[r] = i),
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
                                        r = this.getData(
                                            "gfmFootnoteCallCounts"
                                        ),
                                        i = (0, S.B)(this.sliceSerialize(e));
                                    (this.resume(),
                                        n ||
                                            this.setData(
                                                "gfmFootnoteCallOrder",
                                                (n = [])
                                            ),
                                        r ||
                                            this.setData(
                                                "gfmFootnoteCallCounts",
                                                (r = {})
                                            ));
                                    let o = n.indexOf(i),
                                        a = (0, y.Q)(i.toLowerCase());
                                    -1 === o
                                        ? (n.push(i),
                                          (r[i] = 1),
                                          (t = n.length))
                                        : (r[i]++, (t = o + 1));
                                    let s = r[i];
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
                                                r +
                                                ' id="footnote-label"' +
                                                (i ? " " + i : "") +
                                                ">"
                                        ),
                                        this.raw(this.encode(n)),
                                        this.tag("</" + r + ">"),
                                        this.lineEndingIfNeeded(),
                                        this.tag("<ol>"));
                                        ++s < e.length;

                                    ) {
                                        let n = e[s],
                                            r = (0, y.Q)(n.toLowerCase()),
                                            i = 0,
                                            u = [];
                                        for (; ++i <= t[n]; )
                                            u.push(
                                                '<a href="#' +
                                                    l +
                                                    "fnref-" +
                                                    r +
                                                    (i > 1 ? "-" + i : "") +
                                                    '" data-footnote-backref="" aria-label="' +
                                                    this.encode(
                                                        "string" == typeof o
                                                            ? o
                                                            : o(s, i)
                                                    ) +
                                                    '" class="data-footnote-backref">\u21A9' +
                                                    (i > 1
                                                        ? "<sup>" + i + "</sup>"
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
                                                    r +
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
                                    G[
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
                                    G[
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
                                    (t = t.replace(/\\([\\|])/g, Q)),
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
                                        this.tag("<td" + G[e[t]] + "></td>"),
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
                                Z.call(this, e, U);
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
        95459: (e, t, n) => {
            n.d(t, { T: () => o });
            var r = n(76814),
                i = n(69143);
            function o(e, t, n) {
                let o = (0, i.C)((n || {}).ignore || []),
                    l = (function (e) {
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
                for (; ++a < l.length; ) (0, r.VG)(e, "text", s);
                function s(e, t) {
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
                                r = l[a][0],
                                i = l[a][1],
                                o = 0,
                                s = n.children.indexOf(e),
                                u = !1,
                                c = [];
                            r.lastIndex = 0;
                            let f = r.exec(e.value);
                            for (; f; ) {
                                let n = f.index,
                                    l = {
                                        index: f.index,
                                        input: f.input,
                                        stack: [...t, e],
                                    },
                                    a = i(...f, l);
                                if (
                                    ("string" == typeof a &&
                                        (a =
                                            a.length > 0
                                                ? { type: "text", value: a }
                                                : void 0),
                                    !1 === a
                                        ? (r.lastIndex = n + 1)
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
                                    !r.global)
                                )
                                    break;
                                f = r.exec(e.value);
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
    },
]);
//# sourceMappingURL=vendors-node_modules_hastscript_lib_index_js-node_modules_mdast-util-gfm_lib_index_js-node_mo-2895d2-d088fea9dc1c.js.map
