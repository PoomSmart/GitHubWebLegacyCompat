"use strict";
(globalThis.webpackChunk_github_ui_github_ui =
    globalThis.webpackChunk_github_ui_github_ui || []).push([
    ["react-core"],
    {
        43581: (e, t, r) => {
            r.d(t, { A: () => i, T: () => a });
            var n = r(49236),
                o = {
                    background: !0,
                    backgroundImage: !0,
                    backgroundSize: !0,
                    backgroundPosition: !0,
                    backgroundRepeat: !0,
                };
            ((o.bgImage = o.backgroundImage),
                (o.bgSize = o.backgroundSize),
                (o.bgPosition = o.backgroundPosition),
                (o.bgRepeat = o.backgroundRepeat));
            var a = (0, n.qU)(o);
            let i = a;
        },
        84995: (e, t, r) => {
            r.d(t, { A: () => i, P: () => a });
            var n = r(49236),
                o = {
                    border: { property: "border", scale: "borders" },
                    borderWidth: {
                        property: "borderWidth",
                        scale: "borderWidths",
                    },
                    borderStyle: {
                        property: "borderStyle",
                        scale: "borderStyles",
                    },
                    borderColor: { property: "borderColor", scale: "colors" },
                    borderRadius: { property: "borderRadius", scale: "radii" },
                    borderTop: { property: "borderTop", scale: "borders" },
                    borderTopLeftRadius: {
                        property: "borderTopLeftRadius",
                        scale: "radii",
                    },
                    borderTopRightRadius: {
                        property: "borderTopRightRadius",
                        scale: "radii",
                    },
                    borderRight: { property: "borderRight", scale: "borders" },
                    borderBottom: {
                        property: "borderBottom",
                        scale: "borders",
                    },
                    borderBottomLeftRadius: {
                        property: "borderBottomLeftRadius",
                        scale: "radii",
                    },
                    borderBottomRightRadius: {
                        property: "borderBottomRightRadius",
                        scale: "radii",
                    },
                    borderLeft: { property: "borderLeft", scale: "borders" },
                    borderX: {
                        properties: ["borderLeft", "borderRight"],
                        scale: "borders",
                    },
                    borderY: {
                        properties: ["borderTop", "borderBottom"],
                        scale: "borders",
                    },
                };
            ((o.borderTopWidth = {
                property: "borderTopWidth",
                scale: "borderWidths",
            }),
                (o.borderTopColor = {
                    property: "borderTopColor",
                    scale: "colors",
                }),
                (o.borderTopStyle = {
                    property: "borderTopStyle",
                    scale: "borderStyles",
                }),
                (o.borderTopLeftRadius = {
                    property: "borderTopLeftRadius",
                    scale: "radii",
                }),
                (o.borderTopRightRadius = {
                    property: "borderTopRightRadius",
                    scale: "radii",
                }),
                (o.borderBottomWidth = {
                    property: "borderBottomWidth",
                    scale: "borderWidths",
                }),
                (o.borderBottomColor = {
                    property: "borderBottomColor",
                    scale: "colors",
                }),
                (o.borderBottomStyle = {
                    property: "borderBottomStyle",
                    scale: "borderStyles",
                }),
                (o.borderBottomLeftRadius = {
                    property: "borderBottomLeftRadius",
                    scale: "radii",
                }),
                (o.borderBottomRightRadius = {
                    property: "borderBottomRightRadius",
                    scale: "radii",
                }),
                (o.borderLeftWidth = {
                    property: "borderLeftWidth",
                    scale: "borderWidths",
                }),
                (o.borderLeftColor = {
                    property: "borderLeftColor",
                    scale: "colors",
                }),
                (o.borderLeftStyle = {
                    property: "borderLeftStyle",
                    scale: "borderStyles",
                }),
                (o.borderRightWidth = {
                    property: "borderRightWidth",
                    scale: "borderWidths",
                }),
                (o.borderRightColor = {
                    property: "borderRightColor",
                    scale: "colors",
                }),
                (o.borderRightStyle = {
                    property: "borderRightStyle",
                    scale: "borderStyles",
                }));
            var a = (0, n.qU)(o);
            let i = a;
        },
        77638: (e, t, r) => {
            r.d(t, { A: () => i, y: () => a });
            var n = r(49236),
                o = {
                    color: { property: "color", scale: "colors" },
                    backgroundColor: {
                        property: "backgroundColor",
                        scale: "colors",
                    },
                    opacity: !0,
                };
            o.bg = o.backgroundColor;
            var a = (0, n.qU)(o);
            let i = a;
        },
        49236: (e, t, r) => {
            r.d(t, {
                Cp: () => d,
                Jt: () => c,
                Zz: () => y,
                oK: () => f,
                qU: () => m,
            });
            var n = r(45228),
                o = r.n(n),
                a = function (e, t) {
                    var r,
                        n = o()({}, e, t);
                    for (var a in e)
                        e[a] &&
                            "object" == typeof t[a] &&
                            o()(n, (((r = {})[a] = o()(e[a], t[a])), r));
                    return n;
                },
                i = function (e) {
                    var t = {};
                    return (
                        Object.keys(e)
                            .sort(function (e, t) {
                                return e.localeCompare(t, void 0, {
                                    numeric: !0,
                                    sensitivity: "base",
                                });
                            })
                            .forEach(function (r) {
                                t[r] = e[r];
                            }),
                        t
                    );
                },
                s = {
                    breakpoints: [40, 52, 64].map(function (e) {
                        return e + "em";
                    }),
                },
                l = function (e) {
                    return "@media screen and (min-width: " + e + ")";
                },
                u = function (e, t) {
                    return c(t, e, e);
                },
                c = function (e, t, r, n, o) {
                    for (
                        n = 0, t = t && t.split ? t.split(".") : [t];
                        n < t.length;
                        n++
                    )
                        e = e ? e[t[n]] : o;
                    return e === o ? r : e;
                },
                d = function e(t) {
                    var r = {},
                        n = function (e) {
                            var n = {},
                                u = !1,
                                d = e.theme && e.theme.disableStyledSystemCache;
                            for (var f in e)
                                if (t[f]) {
                                    var m = t[f],
                                        y = e[f],
                                        g = c(e.theme, m.scale, m.defaults);
                                    if ("object" == typeof y) {
                                        if (
                                            ((r.breakpoints =
                                                (!d && r.breakpoints) ||
                                                c(
                                                    e.theme,
                                                    "breakpoints",
                                                    s.breakpoints
                                                )),
                                            Array.isArray(y))
                                        ) {
                                            ((r.media =
                                                (!d && r.media) ||
                                                [null].concat(
                                                    r.breakpoints.map(l)
                                                )),
                                                (n = a(
                                                    n,
                                                    h(r.media, m, g, y, e)
                                                )));
                                            continue;
                                        }
                                        null !== y &&
                                            ((n = a(
                                                n,
                                                p(r.breakpoints, m, g, y, e)
                                            )),
                                            (u = !0));
                                        continue;
                                    }
                                    o()(n, m(y, g, e));
                                }
                            return (u && (n = i(n)), n);
                        };
                    ((n.config = t),
                        (n.propNames = Object.keys(t)),
                        (n.cache = r));
                    var u = Object.keys(t).filter(function (e) {
                        return "config" !== e;
                    });
                    return (
                        u.length > 1 &&
                            u.forEach(function (r) {
                                var o;
                                n[r] = e((((o = {})[r] = t[r]), o));
                            }),
                        n
                    );
                },
                h = function (e, t, r, n, a) {
                    var i = {};
                    return (
                        n.slice(0, e.length).forEach(function (n, s) {
                            var l,
                                u = e[s],
                                c = t(n, r, a);
                            u
                                ? o()(i, (((l = {})[u] = o()({}, i[u], c)), l))
                                : o()(i, c);
                        }),
                        i
                    );
                },
                p = function (e, t, r, n, a) {
                    var i = {};
                    for (var s in n) {
                        var u = e[s],
                            c = t(n[s], r, a);
                        if (u) {
                            var d,
                                h = l(u);
                            o()(i, (((d = {})[h] = o()({}, i[h], c)), d));
                        } else o()(i, c);
                    }
                    return i;
                },
                f = function (e) {
                    var t = e.properties,
                        r = e.property,
                        n = e.scale,
                        o = e.transform,
                        a = void 0 === o ? u : o,
                        i = e.defaultScale;
                    t = t || [r];
                    var s = function (e, r, n) {
                        var o = {},
                            i = a(e, r, n);
                        if (null !== i)
                            return (
                                t.forEach(function (e) {
                                    o[e] = i;
                                }),
                                o
                            );
                    };
                    return ((s.scale = n), (s.defaults = i), s);
                },
                m = function (e) {
                    void 0 === e && (e = {});
                    var t = {};
                    return (
                        Object.keys(e).forEach(function (r) {
                            var n = e[r];
                            if (!0 === n) {
                                t[r] = f({ property: r, scale: r });
                                return;
                            }
                            if ("function" == typeof n) {
                                t[r] = n;
                                return;
                            }
                            t[r] = f(n);
                        }),
                        d(t)
                    );
                },
                y = function () {
                    for (
                        var e = {}, t = arguments.length, r = Array(t), n = 0;
                        n < t;
                        n++
                    )
                        r[n] = arguments[n];
                    return (
                        r.forEach(function (t) {
                            t && t.config && o()(e, t.config);
                        }),
                        d(e)
                    );
                };
        },
        50402: (e, t, r) => {
            function n() {
                return (n =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            r.d(t, { Ay: () => h });
            var o = function (e, t, r, n, o) {
                    for (
                        n = 0, t = t && t.split ? t.split(".") : [t];
                        n < t.length;
                        n++
                    )
                        e = e ? e[t[n]] : o;
                    return e === o ? r : e;
                },
                a = [40, 52, 64].map(function (e) {
                    return e + "em";
                }),
                i = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
                    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
                },
                s = {
                    bg: "backgroundColor",
                    m: "margin",
                    mt: "marginTop",
                    mr: "marginRight",
                    mb: "marginBottom",
                    ml: "marginLeft",
                    mx: "marginX",
                    my: "marginY",
                    p: "padding",
                    pt: "paddingTop",
                    pr: "paddingRight",
                    pb: "paddingBottom",
                    pl: "paddingLeft",
                    px: "paddingX",
                    py: "paddingY",
                },
                l = {
                    marginX: ["marginLeft", "marginRight"],
                    marginY: ["marginTop", "marginBottom"],
                    paddingX: ["paddingLeft", "paddingRight"],
                    paddingY: ["paddingTop", "paddingBottom"],
                    size: ["width", "height"],
                },
                u = {
                    color: "colors",
                    backgroundColor: "colors",
                    borderColor: "colors",
                    margin: "space",
                    marginTop: "space",
                    marginRight: "space",
                    marginBottom: "space",
                    marginLeft: "space",
                    marginX: "space",
                    marginY: "space",
                    padding: "space",
                    paddingTop: "space",
                    paddingRight: "space",
                    paddingBottom: "space",
                    paddingLeft: "space",
                    paddingX: "space",
                    paddingY: "space",
                    top: "space",
                    right: "space",
                    bottom: "space",
                    left: "space",
                    gridGap: "space",
                    gridColumnGap: "space",
                    gridRowGap: "space",
                    gap: "space",
                    columnGap: "space",
                    rowGap: "space",
                    fontFamily: "fonts",
                    fontSize: "fontSizes",
                    fontWeight: "fontWeights",
                    lineHeight: "lineHeights",
                    letterSpacing: "letterSpacings",
                    border: "borders",
                    borderTop: "borders",
                    borderRight: "borders",
                    borderBottom: "borders",
                    borderLeft: "borders",
                    borderWidth: "borderWidths",
                    borderStyle: "borderStyles",
                    borderRadius: "radii",
                    borderTopRightRadius: "radii",
                    borderTopLeftRadius: "radii",
                    borderBottomRightRadius: "radii",
                    borderBottomLeftRadius: "radii",
                    borderTopWidth: "borderWidths",
                    borderTopColor: "colors",
                    borderTopStyle: "borderStyles",
                    borderBottomWidth: "borderWidths",
                    borderBottomColor: "colors",
                    borderBottomStyle: "borderStyles",
                    borderLeftWidth: "borderWidths",
                    borderLeftColor: "colors",
                    borderLeftStyle: "borderStyles",
                    borderRightWidth: "borderWidths",
                    borderRightColor: "colors",
                    borderRightStyle: "borderStyles",
                    outlineColor: "colors",
                    boxShadow: "shadows",
                    textShadow: "shadows",
                    zIndex: "zIndices",
                    width: "sizes",
                    minWidth: "sizes",
                    maxWidth: "sizes",
                    height: "sizes",
                    minHeight: "sizes",
                    maxHeight: "sizes",
                    flexBasis: "sizes",
                    size: "sizes",
                    fill: "colors",
                    stroke: "colors",
                },
                c = function (e, t) {
                    if ("number" != typeof t || t >= 0) return o(e, t, t);
                    var r = Math.abs(t),
                        n = o(e, r, r);
                    return "string" == typeof n ? "-" + n : -1 * n;
                },
                d = [
                    "margin",
                    "marginTop",
                    "marginRight",
                    "marginBottom",
                    "marginLeft",
                    "marginX",
                    "marginY",
                    "top",
                    "bottom",
                    "left",
                    "right",
                ].reduce(function (e, t) {
                    var r;
                    return n({}, e, (((r = {})[t] = c), r));
                }, {});
            let h = function e(t) {
                return function (r) {
                    void 0 === r && (r = {});
                    var c,
                        h = n({}, i, {}, r.theme || r),
                        p = {},
                        f = ((c = "function" == typeof t ? t(h) : t),
                        function (e) {
                            var t = {},
                                r = [null].concat(
                                    o(e, "breakpoints", a).map(function (e) {
                                        return (
                                            "@media screen and (min-width: " +
                                            e +
                                            ")"
                                        );
                                    })
                                );
                            for (var n in c) {
                                var i =
                                    "function" == typeof c[n] ? c[n](e) : c[n];
                                if (null != i) {
                                    if (!Array.isArray(i)) {
                                        t[n] = i;
                                        continue;
                                    }
                                    for (
                                        var s = 0;
                                        s < i.slice(0, r.length).length;
                                        s++
                                    ) {
                                        var l = r[s];
                                        if (!l) {
                                            t[n] = i[s];
                                            continue;
                                        }
                                        ((t[l] = t[l] || {}),
                                            null != i[s] && (t[l][n] = i[s]));
                                    }
                                }
                            }
                            return t;
                        })(h);
                    for (var m in f) {
                        var y = f[m],
                            g = "function" == typeof y ? y(h) : y;
                        if ("variant" === m) {
                            var v = e(o(h, g))(h);
                            p = n({}, p, {}, v);
                            continue;
                        }
                        if (g && "object" == typeof g) {
                            p[m] = e(g)(h);
                            continue;
                        }
                        var b = o(s, m, m),
                            w = o(u, b),
                            S = o(h, w, o(h, b, {})),
                            R = o(d, b, o)(S, g, g);
                        if (l[b])
                            for (var E = l[b], x = 0; x < E.length; x++)
                                p[E[x]] = R;
                        else p[b] = R;
                    }
                    return p;
                };
            };
        },
        58523: (e, t, r) => {
            r.d(t, { A: () => o, p: () => n });
            var n = (0, r(49236).qU)({
                alignItems: !0,
                alignContent: !0,
                justifyItems: !0,
                justifyContent: !0,
                flexWrap: !0,
                flexDirection: !0,
                flex: !0,
                flexGrow: !0,
                flexShrink: !0,
                flexBasis: !0,
                justifySelf: !0,
                alignSelf: !0,
                order: !0,
            });
            let o = n;
        },
        96069: (e, t, r) => {
            r.d(t, { A: () => s, V: () => i });
            var n = r(49236),
                o = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
                a = {
                    gridGap: {
                        property: "gridGap",
                        scale: "space",
                        defaultScale: o.space,
                    },
                    gridColumnGap: {
                        property: "gridColumnGap",
                        scale: "space",
                        defaultScale: o.space,
                    },
                    gridRowGap: {
                        property: "gridRowGap",
                        scale: "space",
                        defaultScale: o.space,
                    },
                    gridColumn: !0,
                    gridRow: !0,
                    gridAutoFlow: !0,
                    gridAutoColumns: !0,
                    gridAutoRows: !0,
                    gridTemplateColumns: !0,
                    gridTemplateRows: !0,
                    gridTemplateAreas: !0,
                    gridArea: !0,
                },
                i = (0, n.qU)(a);
            let s = i;
        },
        75447: (e, t, r) => {
            r.d(t, { A: () => a, Z: () => o });
            var n = r(49236),
                o = (0, n.qU)({
                    width: {
                        property: "width",
                        scale: "sizes",
                        transform: function (e, t) {
                            return (0, n.Jt)(
                                t,
                                e,
                                !("number" == typeof e && !isNaN(e)) || e > 1
                                    ? e
                                    : 100 * e + "%"
                            );
                        },
                    },
                    height: { property: "height", scale: "sizes" },
                    minWidth: { property: "minWidth", scale: "sizes" },
                    minHeight: { property: "minHeight", scale: "sizes" },
                    maxWidth: { property: "maxWidth", scale: "sizes" },
                    maxHeight: { property: "maxHeight", scale: "sizes" },
                    size: { properties: ["width", "height"], scale: "sizes" },
                    overflow: !0,
                    overflowX: !0,
                    overflowY: !0,
                    display: !0,
                    verticalAlign: !0,
                });
            let a = o;
        },
        59756: (e, t, r) => {
            r.d(t, { A: () => s, G: () => i });
            var n = r(49236),
                o = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
                a = {
                    position: !0,
                    zIndex: { property: "zIndex", scale: "zIndices" },
                    top: {
                        property: "top",
                        scale: "space",
                        defaultScale: o.space,
                    },
                    right: {
                        property: "right",
                        scale: "space",
                        defaultScale: o.space,
                    },
                    bottom: {
                        property: "bottom",
                        scale: "space",
                        defaultScale: o.space,
                    },
                    left: {
                        property: "left",
                        scale: "space",
                        defaultScale: o.space,
                    },
                },
                i = (0, n.qU)(a);
            let s = i;
        },
        83317: (e, t, r) => {
            r.d(t, { c: () => a });
            var n = r(57304),
                o = RegExp(
                    "^(" +
                        (0, n.Zz)(
                            n.xe,
                            n.Il,
                            n.yW,
                            n.Zp,
                            n.pn,
                            n.PQ,
                            n.Tp,
                            n.G1,
                            n.Vg,
                            n.r7,
                            n.i9,
                            n.XC,
                            n.NW
                        ).propNames.join("|") +
                        ")$"
                ),
                a = function (e) {
                    var t = {};
                    for (var r in e) o.test(r) || (t[r] = e[r]);
                    return t;
                };
        },
        42049: (e, t, r) => {
            r.d(t, { r: () => n });
            var n = (0, r(49236).qU)({
                boxShadow: { property: "boxShadow", scale: "shadows" },
                textShadow: { property: "textShadow", scale: "shadows" },
            });
        },
        89165: (e, t, r) => {
            r.d(t, { xe: () => c });
            var n = r(49236),
                o = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
                a = function (e) {
                    return "number" == typeof e && !isNaN(e);
                },
                i = function (e, t) {
                    if (!a(e)) return (0, n.Jt)(t, e, e);
                    var r = e < 0,
                        o = Math.abs(e),
                        i = (0, n.Jt)(t, o, o);
                    return a(i) ? i * (r ? -1 : 1) : r ? "-" + i : i;
                },
                s = {};
            ((s.margin = {
                margin: {
                    property: "margin",
                    scale: "space",
                    transform: i,
                    defaultScale: o.space,
                },
                marginTop: {
                    property: "marginTop",
                    scale: "space",
                    transform: i,
                    defaultScale: o.space,
                },
                marginRight: {
                    property: "marginRight",
                    scale: "space",
                    transform: i,
                    defaultScale: o.space,
                },
                marginBottom: {
                    property: "marginBottom",
                    scale: "space",
                    transform: i,
                    defaultScale: o.space,
                },
                marginLeft: {
                    property: "marginLeft",
                    scale: "space",
                    transform: i,
                    defaultScale: o.space,
                },
                marginX: {
                    properties: ["marginLeft", "marginRight"],
                    scale: "space",
                    transform: i,
                    defaultScale: o.space,
                },
                marginY: {
                    properties: ["marginTop", "marginBottom"],
                    scale: "space",
                    transform: i,
                    defaultScale: o.space,
                },
            }),
                (s.margin.m = s.margin.margin),
                (s.margin.mt = s.margin.marginTop),
                (s.margin.mr = s.margin.marginRight),
                (s.margin.mb = s.margin.marginBottom),
                (s.margin.ml = s.margin.marginLeft),
                (s.margin.mx = s.margin.marginX),
                (s.margin.my = s.margin.marginY),
                (s.padding = {
                    padding: {
                        property: "padding",
                        scale: "space",
                        defaultScale: o.space,
                    },
                    paddingTop: {
                        property: "paddingTop",
                        scale: "space",
                        defaultScale: o.space,
                    },
                    paddingRight: {
                        property: "paddingRight",
                        scale: "space",
                        defaultScale: o.space,
                    },
                    paddingBottom: {
                        property: "paddingBottom",
                        scale: "space",
                        defaultScale: o.space,
                    },
                    paddingLeft: {
                        property: "paddingLeft",
                        scale: "space",
                        defaultScale: o.space,
                    },
                    paddingX: {
                        properties: ["paddingLeft", "paddingRight"],
                        scale: "space",
                        defaultScale: o.space,
                    },
                    paddingY: {
                        properties: ["paddingTop", "paddingBottom"],
                        scale: "space",
                        defaultScale: o.space,
                    },
                }),
                (s.padding.p = s.padding.padding),
                (s.padding.pt = s.padding.paddingTop),
                (s.padding.pr = s.padding.paddingRight),
                (s.padding.pb = s.padding.paddingBottom),
                (s.padding.pl = s.padding.paddingLeft),
                (s.padding.px = s.padding.paddingX),
                (s.padding.py = s.padding.paddingY));
            var l = (0, n.qU)(s.margin),
                u = (0, n.qU)(s.padding),
                c = (0, n.Zz)(l, u);
        },
        57227: (e, t, r) => {
            r.d(t, { y: () => o });
            var n = r(49236),
                o = function (e, t) {
                    return (
                        void 0 === t && (t = null),
                        function (r) {
                            return (0, n.Jt)(r.theme, e, t);
                        }
                    );
                };
        },
        3962: (e, t, r) => {
            r.d(t, { A: () => o, I: () => n });
            var n = (0, r(49236).qU)({
                fontFamily: { property: "fontFamily", scale: "fonts" },
                fontSize: {
                    property: "fontSize",
                    scale: "fontSizes",
                    defaultScale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
                },
                fontWeight: { property: "fontWeight", scale: "fontWeights" },
                lineHeight: { property: "lineHeight", scale: "lineHeights" },
                letterSpacing: {
                    property: "letterSpacing",
                    scale: "letterSpacings",
                },
                textAlign: !0,
                fontStyle: !0,
            });
            let o = n;
        },
        38144: (e, t, r) => {
            r.d(t, { NW: () => l, Ox: () => a, XC: () => s, i9: () => i });
            var n = r(49236),
                o = r(50402),
                a = function (e) {
                    var t,
                        r,
                        a = e.scale,
                        i = e.prop,
                        s = e.variants,
                        l = void 0 === s ? {} : s,
                        u = e.key;
                    (((r = Object.keys(l).length
                        ? function (e, t, r) {
                              return (0, o.Ay)((0, n.Jt)(t, e, null))(r.theme);
                          }
                        : function (e, t) {
                              return (0, n.Jt)(t, e, null);
                          }).scale = a || u),
                        (r.defaults = l));
                    var c = (((t = {})[void 0 === i ? "variant" : i] = r), t);
                    return (0, n.Cp)(c);
                },
                i = a({ key: "buttons" }),
                s = a({ key: "textStyles", prop: "textStyle" }),
                l = a({ key: "colorStyles", prop: "colors" });
        },
        57971: (e, t, r) => {
            r.d(t, { Rr: () => a });
            var n,
                o = n || (n = {});
            function a(e) {
                var t = {};
                if (e) {
                    var r = e.indexOf("#");
                    (0 <= r && ((t.hash = e.substr(r)), (e = e.substr(0, r))),
                        0 <= (r = e.indexOf("?")) &&
                            ((t.search = e.substr(r)), (e = e.substr(0, r))),
                        e && (t.pathname = e));
                }
                return t;
            }
            ((o.Pop = "POP"), (o.Push = "PUSH"), (o.Replace = "REPLACE"));
        },
        16069: (e, t) => {
            Object.prototype.toString;
        },
        38267: (e, t, r) => {
            r.d(t, {
                AH: () => ep,
                Ay: () => eC,
                Dx: () => ew,
                NP: () => eS,
                i7: () => ex,
            });
            var n = r(44363),
                o = r(96540),
                a = r(2833),
                i = r.n(a),
                s = r(8887),
                l = r(17103),
                u = r(15455),
                c = r(4146),
                d = r.n(c);
            function h() {
                return (h =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            var p = function (e, t) {
                    for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
                        r.push(t[n], e[n + 1]);
                    return r;
                },
                f = function (e) {
                    return (
                        null !== e &&
                        "object" == typeof e &&
                        "[object Object]" ===
                            (e.toString
                                ? e.toString()
                                : Object.prototype.toString.call(e)) &&
                        !(0, n.typeOf)(e)
                    );
                },
                m = Object.freeze([]),
                y = Object.freeze({});
            function g(e) {
                return "function" == typeof e;
            }
            function v(e) {
                return e.displayName || e.name || "Component";
            }
            function b(e) {
                return e && "string" == typeof e.styledComponentId;
            }
            var w =
                    ("undefined" != typeof process &&
                        void 0 !== process.env &&
                        (process.env.REACT_APP_SC_ATTR ||
                            process.env.SC_ATTR)) ||
                    "data-styled",
                S = "undefined" != typeof window && "HTMLElement" in window;
            function R(e) {
                for (
                    var t = arguments.length,
                        r = Array(t > 1 ? t - 1 : 0),
                        n = 1;
                    n < t;
                    n++
                )
                    r[n - 1] = arguments[n];
                throw Error(
                    "An error occurred. See https://git.io/JUIaE#" +
                        e +
                        " for more information." +
                        (r.length > 0 ? " Args: " + r.join(", ") : "")
                );
            }
            var E = (function () {
                    function e(e) {
                        ((this.groupSizes = new Uint32Array(512)),
                            (this.length = 512),
                            (this.tag = e));
                    }
                    var t = e.prototype;
                    return (
                        (t.indexOfGroup = function (e) {
                            for (var t = 0, r = 0; r < e; r++)
                                t += this.groupSizes[r];
                            return t;
                        }),
                        (t.insertRules = function (e, t) {
                            if (e >= this.groupSizes.length) {
                                for (
                                    var r = this.groupSizes,
                                        n = r.length,
                                        o = n;
                                    e >= o;

                                )
                                    (o <<= 1) < 0 && R(16, "" + e);
                                ((this.groupSizes = new Uint32Array(o)),
                                    this.groupSizes.set(r),
                                    (this.length = o));
                                for (var a = n; a < o; a++)
                                    this.groupSizes[a] = 0;
                            }
                            for (
                                var i = this.indexOfGroup(e + 1),
                                    s = 0,
                                    l = t.length;
                                s < l;
                                s++
                            )
                                this.tag.insertRule(i, t[s]) &&
                                    (this.groupSizes[e]++, i++);
                        }),
                        (t.clearGroup = function (e) {
                            if (e < this.length) {
                                var t = this.groupSizes[e],
                                    r = this.indexOfGroup(e),
                                    n = r + t;
                                this.groupSizes[e] = 0;
                                for (var o = r; o < n; o++)
                                    this.tag.deleteRule(r);
                            }
                        }),
                        (t.getGroup = function (e) {
                            var t = "";
                            if (e >= this.length || 0 === this.groupSizes[e])
                                return t;
                            for (
                                var r = this.groupSizes[e],
                                    n = this.indexOfGroup(e),
                                    o = n + r,
                                    a = n;
                                a < o;
                                a++
                            )
                                t +=
                                    this.tag.getRule(a) +
                                    `/*!sc*/
`;
                            return t;
                        }),
                        e
                    );
                })(),
                x = new Map(),
                C = new Map(),
                P = 1,
                L = function (e) {
                    if (x.has(e)) return x.get(e);
                    for (; C.has(P); ) P++;
                    var t = P++;
                    return (x.set(e, t), C.set(t, e), t);
                },
                k = function (e, t) {
                    (t >= P && (P = t + 1), x.set(e, t), C.set(t, e));
                },
                T = "style[" + w + '][data-styled-version="5.3.11"]',
                A = RegExp(
                    "^" + w + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
                ),
                O = function (e, t, r) {
                    for (
                        var n, o = r.split(","), a = 0, i = o.length;
                        a < i;
                        a++
                    )
                        (n = o[a]) && e.registerName(t, n);
                },
                M = function (e, t) {
                    for (
                        var r = (t.textContent || "").split(`/*!sc*/
`),
                            n = [],
                            o = 0,
                            a = r.length;
                        o < a;
                        o++
                    ) {
                        var i = r[o].trim();
                        if (i) {
                            var s = i.match(A);
                            if (s) {
                                var l = 0 | parseInt(s[1], 10),
                                    u = s[2];
                                (0 !== l &&
                                    (k(u, l),
                                    O(e, u, s[3]),
                                    e.getTag().insertRules(l, n)),
                                    (n.length = 0));
                            } else n.push(i);
                        }
                    }
                },
                $ = function () {
                    return r.nc;
                },
                j = function (e) {
                    var t = document.head,
                        r = e || t,
                        n = document.createElement("style"),
                        o = (function (e) {
                            for (
                                var t = e.childNodes, r = t.length;
                                r >= 0;
                                r--
                            ) {
                                var n = t[r];
                                if (n && 1 === n.nodeType && n.hasAttribute(w))
                                    return n;
                            }
                        })(r),
                        a = void 0 !== o ? o.nextSibling : null;
                    (n.setAttribute(w, "active"),
                        n.setAttribute("data-styled-version", "5.3.11"));
                    var i = $();
                    return (
                        i && n.setAttribute("nonce", i),
                        r.insertBefore(n, a),
                        n
                    );
                },
                z = (function () {
                    function e(e) {
                        var t = (this.element = j(e));
                        (t.appendChild(document.createTextNode("")),
                            (this.sheet = (function (e) {
                                if (e.sheet) return e.sheet;
                                for (
                                    var t = document.styleSheets,
                                        r = 0,
                                        n = t.length;
                                    r < n;
                                    r++
                                ) {
                                    var o = t[r];
                                    if (o.ownerNode === e) return o;
                                }
                                R(17);
                            })(t)),
                            (this.length = 0));
                    }
                    var t = e.prototype;
                    return (
                        (t.insertRule = function (e, t) {
                            try {
                                return (
                                    this.sheet.insertRule(t, e),
                                    this.length++,
                                    !0
                                );
                            } catch (e) {
                                return !1;
                            }
                        }),
                        (t.deleteRule = function (e) {
                            (this.sheet.deleteRule(e), this.length--);
                        }),
                        (t.getRule = function (e) {
                            var t = this.sheet.cssRules[e];
                            return void 0 !== t && "string" == typeof t.cssText
                                ? t.cssText
                                : "";
                        }),
                        e
                    );
                })(),
                D = (function () {
                    function e(e) {
                        var t = (this.element = j(e));
                        ((this.nodes = t.childNodes), (this.length = 0));
                    }
                    var t = e.prototype;
                    return (
                        (t.insertRule = function (e, t) {
                            if (e <= this.length && e >= 0) {
                                var r = document.createTextNode(t),
                                    n = this.nodes[e];
                                return (
                                    this.element.insertBefore(r, n || null),
                                    this.length++,
                                    !0
                                );
                            }
                            return !1;
                        }),
                        (t.deleteRule = function (e) {
                            (this.element.removeChild(this.nodes[e]),
                                this.length--);
                        }),
                        (t.getRule = function (e) {
                            return e < this.length
                                ? this.nodes[e].textContent
                                : "";
                        }),
                        e
                    );
                })(),
                I = (function () {
                    function e(e) {
                        ((this.rules = []), (this.length = 0));
                    }
                    var t = e.prototype;
                    return (
                        (t.insertRule = function (e, t) {
                            return (
                                e <= this.length &&
                                (this.rules.splice(e, 0, t), this.length++, !0)
                            );
                        }),
                        (t.deleteRule = function (e) {
                            (this.rules.splice(e, 1), this.length--);
                        }),
                        (t.getRule = function (e) {
                            return e < this.length ? this.rules[e] : "";
                        }),
                        e
                    );
                })(),
                N = S,
                B = { isServer: !S, useCSSOMInjection: !0 },
                _ = (function () {
                    function e(e, t, r) {
                        (void 0 === e && (e = y),
                            void 0 === t && (t = {}),
                            (this.options = h({}, B, {}, e)),
                            (this.gs = t),
                            (this.names = new Map(r)),
                            (this.server = !!e.isServer),
                            !this.server &&
                                S &&
                                N &&
                                ((N = !1),
                                (function (e) {
                                    for (
                                        var t = document.querySelectorAll(T),
                                            r = 0,
                                            n = t.length;
                                        r < n;
                                        r++
                                    ) {
                                        var o = t[r];
                                        o &&
                                            "active" !== o.getAttribute(w) &&
                                            (M(e, o),
                                            o.parentNode &&
                                                o.parentNode.removeChild(o));
                                    }
                                })(this)));
                    }
                    e.registerId = function (e) {
                        return L(e);
                    };
                    var t = e.prototype;
                    return (
                        (t.reconstructWithOptions = function (t, r) {
                            return (
                                void 0 === r && (r = !0),
                                new e(
                                    h({}, this.options, {}, t),
                                    this.gs,
                                    (r && this.names) || void 0
                                )
                            );
                        }),
                        (t.allocateGSInstance = function (e) {
                            return (this.gs[e] = (this.gs[e] || 0) + 1);
                        }),
                        (t.getTag = function () {
                            var e, t, r, n;
                            return (
                                this.tag ||
                                (this.tag =
                                    ((t = (e = this.options).isServer),
                                    (r = e.useCSSOMInjection),
                                    (n = e.target),
                                    new E(
                                        t ? new I(n) : r ? new z(n) : new D(n)
                                    )))
                            );
                        }),
                        (t.hasNameForId = function (e, t) {
                            return (
                                this.names.has(e) && this.names.get(e).has(t)
                            );
                        }),
                        (t.registerName = function (e, t) {
                            if ((L(e), this.names.has(e)))
                                this.names.get(e).add(t);
                            else {
                                var r = new Set();
                                (r.add(t), this.names.set(e, r));
                            }
                        }),
                        (t.insertRules = function (e, t, r) {
                            (this.registerName(e, t),
                                this.getTag().insertRules(L(e), r));
                        }),
                        (t.clearNames = function (e) {
                            this.names.has(e) && this.names.get(e).clear();
                        }),
                        (t.clearRules = function (e) {
                            (this.getTag().clearGroup(L(e)),
                                this.clearNames(e));
                        }),
                        (t.clearTag = function () {
                            this.tag = void 0;
                        }),
                        (t.toString = function () {
                            return (function (e) {
                                for (
                                    var t = e.getTag(),
                                        r = t.length,
                                        n = "",
                                        o = 0;
                                    o < r;
                                    o++
                                ) {
                                    var a,
                                        i = ((a = o), C.get(a));
                                    if (void 0 !== i) {
                                        var s = e.names.get(i),
                                            l = t.getGroup(o);
                                        if (s && l && s.size) {
                                            var u =
                                                    w +
                                                    ".g" +
                                                    o +
                                                    '[id="' +
                                                    i +
                                                    '"]',
                                                c = "";
                                            (void 0 !== s &&
                                                s.forEach(function (e) {
                                                    e.length > 0 &&
                                                        (c += e + ",");
                                                }),
                                                (n +=
                                                    "" +
                                                    l +
                                                    u +
                                                    '{content:"' +
                                                    c +
                                                    `"}/*!sc*/
`));
                                        }
                                    }
                                }
                                return n;
                            })(this);
                        }),
                        e
                    );
                })(),
                W = /(a)(d)/gi,
                U = function (e) {
                    return String.fromCharCode(e + (e > 25 ? 39 : 97));
                };
            function F(e) {
                var t,
                    r = "";
                for (t = Math.abs(e); t > 52; t = (t / 52) | 0)
                    r = U(t % 52) + r;
                return (U(t % 52) + r).replace(W, "$1-$2");
            }
            var H = function (e, t) {
                    for (var r = t.length; r; )
                        e = (33 * e) ^ t.charCodeAt(--r);
                    return e;
                },
                Y = function (e) {
                    return H(5381, e);
                };
            function q(e) {
                for (var t = 0; t < e.length; t += 1) {
                    var r = e[t];
                    if (g(r) && !b(r)) return !1;
                }
                return !0;
            }
            var G = Y("5.3.11"),
                J = (function () {
                    function e(e, t, r) {
                        ((this.rules = e),
                            (this.staticRulesId = ""),
                            (this.isStatic =
                                (void 0 === r || r.isStatic) && q(e)),
                            (this.componentId = t),
                            (this.baseHash = H(G, t)),
                            (this.baseStyle = r),
                            _.registerId(t));
                    }
                    return (
                        (e.prototype.generateAndInjectStyles = function (
                            e,
                            t,
                            r
                        ) {
                            var n = this.componentId,
                                o = [];
                            if (
                                (this.baseStyle &&
                                    o.push(
                                        this.baseStyle.generateAndInjectStyles(
                                            e,
                                            t,
                                            r
                                        )
                                    ),
                                this.isStatic && !r.hash)
                            )
                                if (
                                    this.staticRulesId &&
                                    t.hasNameForId(n, this.staticRulesId)
                                )
                                    o.push(this.staticRulesId);
                                else {
                                    var a = ed(this.rules, e, t, r).join(""),
                                        i = F(H(this.baseHash, a) >>> 0);
                                    if (!t.hasNameForId(n, i)) {
                                        var s = r(a, "." + i, void 0, n);
                                        t.insertRules(n, i, s);
                                    }
                                    (o.push(i), (this.staticRulesId = i));
                                }
                            else {
                                for (
                                    var l = this.rules.length,
                                        u = H(this.baseHash, r.hash),
                                        c = "",
                                        d = 0;
                                    d < l;
                                    d++
                                ) {
                                    var h = this.rules[d];
                                    if ("string" == typeof h) c += h;
                                    else if (h) {
                                        var p = ed(h, e, t, r),
                                            f = Array.isArray(p)
                                                ? p.join("")
                                                : p;
                                        ((u = H(u, f + d)), (c += f));
                                    }
                                }
                                if (c) {
                                    var m = F(u >>> 0);
                                    if (!t.hasNameForId(n, m)) {
                                        var y = r(c, "." + m, void 0, n);
                                        t.insertRules(n, m, y);
                                    }
                                    o.push(m);
                                }
                            }
                            return o.join(" ");
                        }),
                        e
                    );
                })(),
                V = /^\s*\/\/.*$/gm,
                X = [":", "[", ".", "#"];
            function K(e) {
                var t,
                    r,
                    n,
                    o,
                    a = void 0 === e ? y : e,
                    i = a.options,
                    l = void 0 === i ? y : i,
                    u = a.plugins,
                    c = void 0 === u ? m : u,
                    d = new s.A(l),
                    h = [],
                    p = (function (e) {
                        function t(t) {
                            if (t)
                                try {
                                    e(t + "}");
                                } catch (e) {}
                        }
                        return function (r, n, o, a, i, s, l, u, c, d) {
                            switch (r) {
                                case 1:
                                    if (0 === c && 64 === n.charCodeAt(0))
                                        return (e(n + ";"), "");
                                    break;
                                case 2:
                                    if (0 === u) return n + "/*|*/";
                                    break;
                                case 3:
                                    switch (u) {
                                        case 102:
                                        case 112:
                                            return (e(o[0] + n), "");
                                        default:
                                            return n + (0 === d ? "/*|*/" : "");
                                    }
                                case -2:
                                    n.split("/*|*/}").forEach(t);
                            }
                        };
                    })(function (e) {
                        h.push(e);
                    }),
                    f = function (e, n, a) {
                        return (0 === n && -1 !== X.indexOf(a[r.length])) ||
                            a.match(o)
                            ? e
                            : "." + t;
                    };
                function g(e, a, i, s) {
                    void 0 === s && (s = "&");
                    var l = e.replace(V, ""),
                        u = a && i ? i + " " + a + " { " + l + " }" : l;
                    return (
                        (t = s),
                        (n = RegExp("\\" + (r = a) + "\\b", "g")),
                        (o = RegExp("(\\" + r + "\\b){2,}")),
                        d(i || !a ? "" : a, u)
                    );
                }
                return (
                    d.use(
                        [].concat(c, [
                            function (e, t, o) {
                                2 === e &&
                                    o.length &&
                                    o[0].lastIndexOf(r) > 0 &&
                                    (o[0] = o[0].replace(n, f));
                            },
                            p,
                            function (e) {
                                if (-2 === e) {
                                    var t = h;
                                    return ((h = []), t);
                                }
                            },
                        ])
                    ),
                    (g.hash = c.length
                        ? c
                              .reduce(function (e, t) {
                                  return (t.name || R(15), H(e, t.name));
                              }, 5381)
                              .toString()
                        : ""),
                    g
                );
            }
            var Z = o.createContext(),
                Q = (Z.Consumer, o.createContext()),
                ee = (Q.Consumer, new _()),
                et = K();
            function er() {
                return (0, o.useContext)(Z) || ee;
            }
            function en(e) {
                var t = (0, o.useState)(e.stylisPlugins),
                    r = t[0],
                    n = t[1],
                    a = er(),
                    s = (0, o.useMemo)(
                        function () {
                            var t = a;
                            return (
                                e.sheet
                                    ? (t = e.sheet)
                                    : e.target &&
                                      (t = t.reconstructWithOptions(
                                          { target: e.target },
                                          !1
                                      )),
                                e.disableCSSOMInjection &&
                                    (t = t.reconstructWithOptions({
                                        useCSSOMInjection: !1,
                                    })),
                                t
                            );
                        },
                        [e.disableCSSOMInjection, e.sheet, e.target]
                    ),
                    l = (0, o.useMemo)(
                        function () {
                            return K({
                                options: { prefix: !e.disableVendorPrefixes },
                                plugins: r,
                            });
                        },
                        [e.disableVendorPrefixes, r]
                    );
                return (
                    (0, o.useEffect)(
                        function () {
                            i()(r, e.stylisPlugins) || n(e.stylisPlugins);
                        },
                        [e.stylisPlugins]
                    ),
                    o.createElement(
                        Z.Provider,
                        { value: s },
                        o.createElement(Q.Provider, { value: l }, e.children)
                    )
                );
            }
            var eo = (function () {
                    function e(e, t) {
                        var r = this;
                        ((this.inject = function (e, t) {
                            void 0 === t && (t = et);
                            var n = r.name + t.hash;
                            e.hasNameForId(r.id, n) ||
                                e.insertRules(
                                    r.id,
                                    n,
                                    t(r.rules, n, "@keyframes")
                                );
                        }),
                            (this.toString = function () {
                                return R(12, String(r.name));
                            }),
                            (this.name = e),
                            (this.id = "sc-keyframes-" + e),
                            (this.rules = t));
                    }
                    return (
                        (e.prototype.getName = function (e) {
                            return (
                                void 0 === e && (e = et),
                                this.name + e.hash
                            );
                        }),
                        e
                    );
                })(),
                ea = /([A-Z])/,
                ei = /([A-Z])/g,
                es = /^ms-/,
                el = function (e) {
                    return "-" + e.toLowerCase();
                };
            function eu(e) {
                return ea.test(e) ? e.replace(ei, el).replace(es, "-ms-") : e;
            }
            var ec = function (e) {
                return null == e || !1 === e || "" === e;
            };
            function ed(e, t, r, n) {
                if (Array.isArray(e)) {
                    for (var o, a = [], i = 0, s = e.length; i < s; i += 1)
                        "" !== (o = ed(e[i], t, r, n)) &&
                            (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
                    return a;
                }
                return ec(e)
                    ? ""
                    : b(e)
                      ? "." + e.styledComponentId
                      : g(e)
                        ? "function" != typeof e ||
                          (e.prototype && e.prototype.isReactComponent) ||
                          !t
                            ? e
                            : ed(e(t), t, r, n)
                        : e instanceof eo
                          ? r
                              ? (e.inject(r, n), e.getName(n))
                              : e
                          : f(e)
                            ? (function e(t, r) {
                                  var n,
                                      o = [];
                                  for (var a in t)
                                      t.hasOwnProperty(a) &&
                                          !ec(t[a]) &&
                                          ((Array.isArray(t[a]) &&
                                              t[a].isCss) ||
                                          g(t[a])
                                              ? o.push(eu(a) + ":", t[a], ";")
                                              : f(t[a])
                                                ? o.push.apply(o, e(t[a], a))
                                                : o.push(
                                                      eu(a) +
                                                          ": " +
                                                          (null == (n = t[a]) ||
                                                          "boolean" ==
                                                              typeof n ||
                                                          "" === n
                                                              ? ""
                                                              : "number" !=
                                                                      typeof n ||
                                                                  0 === n ||
                                                                  a in l.A ||
                                                                  a.startsWith(
                                                                      "--"
                                                                  )
                                                                ? String(
                                                                      n
                                                                  ).trim()
                                                                : n + "px") +
                                                          ";"
                                                  ));
                                  return r ? [r + " {"].concat(o, ["}"]) : o;
                              })(e)
                            : e.toString();
            }
            var eh = function (e) {
                return (Array.isArray(e) && (e.isCss = !0), e);
            };
            function ep(e) {
                for (
                    var t = arguments.length,
                        r = Array(t > 1 ? t - 1 : 0),
                        n = 1;
                    n < t;
                    n++
                )
                    r[n - 1] = arguments[n];
                return g(e) || f(e)
                    ? eh(ed(p(m, [e].concat(r))))
                    : 0 === r.length &&
                        1 === e.length &&
                        "string" == typeof e[0]
                      ? e
                      : eh(ed(p(e, r)));
            }
            var ef = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
                em = /(^-|-$)/g;
            function ey(e) {
                return e.replace(ef, "-").replace(em, "");
            }
            var eg = function (e) {
                return F(Y(e) >>> 0);
            };
            function ev(e) {
                return "string" == typeof e;
            }
            var eb = function (e) {
                    return (
                        "function" == typeof e ||
                        ("object" == typeof e &&
                            null !== e &&
                            !Array.isArray(e))
                    );
                },
                ew = o.createContext();
            function eS(e) {
                var t = (0, o.useContext)(ew),
                    r = (0, o.useMemo)(
                        function () {
                            var r;
                            return (
                                (r = e.theme),
                                r
                                    ? g(r)
                                        ? r(t)
                                        : Array.isArray(r) ||
                                            "object" != typeof r
                                          ? R(8)
                                          : t
                                            ? h({}, t, {}, r)
                                            : r
                                    : R(14)
                            );
                        },
                        [e.theme, t]
                    );
                return e.children
                    ? o.createElement(ew.Provider, { value: r }, e.children)
                    : null;
            }
            ew.Consumer;
            var eR = {},
                eE = function (e) {
                    return (function e(t, r, o) {
                        if (
                            (void 0 === o && (o = y),
                            !(0, n.isValidElementType)(r))
                        )
                            return R(1, String(r));
                        var a = function () {
                            return t(r, o, ep.apply(void 0, arguments));
                        };
                        return (
                            (a.withConfig = function (n) {
                                return e(t, r, h({}, o, {}, n));
                            }),
                            (a.attrs = function (n) {
                                return e(
                                    t,
                                    r,
                                    h({}, o, {
                                        attrs: Array.prototype
                                            .concat(o.attrs, n)
                                            .filter(Boolean),
                                    })
                                );
                            }),
                            a
                        );
                    })(function e(t, r, n) {
                        var a = b(t),
                            i = !ev(t),
                            s = r.attrs,
                            l = void 0 === s ? m : s,
                            c = r.componentId,
                            p =
                                void 0 === c
                                    ? ((x = r.displayName),
                                      (C = r.parentComponentId),
                                      (eR[
                                          (P =
                                              "string" != typeof x
                                                  ? "sc"
                                                  : ey(x))
                                      ] = (eR[P] || 0) + 1),
                                      (L = P + "-" + eg("5.3.11" + P + eR[P])),
                                      C ? C + "-" + L : L)
                                    : c,
                            f = r.displayName,
                            w =
                                void 0 === f
                                    ? ev(t)
                                        ? "styled." + t
                                        : "Styled(" + v(t) + ")"
                                    : f,
                            S =
                                r.displayName && r.componentId
                                    ? ey(r.displayName) + "-" + r.componentId
                                    : r.componentId || p,
                            R =
                                a && t.attrs
                                    ? Array.prototype
                                          .concat(t.attrs, l)
                                          .filter(Boolean)
                                    : l,
                            E = r.shouldForwardProp;
                        a &&
                            t.shouldForwardProp &&
                            (E = r.shouldForwardProp
                                ? function (e, n, o) {
                                      return (
                                          t.shouldForwardProp(e, n, o) &&
                                          r.shouldForwardProp(e, n, o)
                                      );
                                  }
                                : t.shouldForwardProp);
                        var x,
                            C,
                            P,
                            L,
                            k,
                            T = new J(n, S, a ? t.componentStyle : void 0),
                            A = T.isStatic && 0 === l.length,
                            O = function (e, t) {
                                return (function (e, t, r, n) {
                                    var a,
                                        i,
                                        s,
                                        l,
                                        c,
                                        d,
                                        p,
                                        f = e.attrs,
                                        m = e.componentStyle,
                                        v = e.defaultProps,
                                        b = e.foldedComponentIds,
                                        w = e.shouldForwardProp,
                                        S = e.styledComponentId,
                                        R = e.target,
                                        E =
                                            ((a = (0, o.useContext)(ew)),
                                            void 0 === (i = v) && (i = y),
                                            (s =
                                                (t.theme !== i.theme &&
                                                    t.theme) ||
                                                a ||
                                                i.theme ||
                                                y),
                                            void 0 === s && (s = y),
                                            (l = h({}, t, { theme: s })),
                                            (c = {}),
                                            f.forEach(function (e) {
                                                var t,
                                                    r,
                                                    n,
                                                    o = e;
                                                for (t in (g(o) && (o = o(l)),
                                                o))
                                                    l[t] = c[t] =
                                                        "className" === t
                                                            ? ((r = c[t]),
                                                              (n = o[t]),
                                                              r && n
                                                                  ? r + " " + n
                                                                  : r || n)
                                                            : o[t];
                                            }),
                                            [l, c]),
                                        x = E[0],
                                        C = E[1],
                                        P =
                                            ((d = er()),
                                            (p = (0, o.useContext)(Q) || et),
                                            n
                                                ? m.generateAndInjectStyles(
                                                      y,
                                                      d,
                                                      p
                                                  )
                                                : m.generateAndInjectStyles(
                                                      x,
                                                      d,
                                                      p
                                                  )),
                                        L = C.$as || t.$as || C.as || t.as || R,
                                        k = ev(L),
                                        T = C !== t ? h({}, t, {}, C) : t,
                                        A = {};
                                    for (var O in T)
                                        "$" !== O[0] &&
                                            "as" !== O &&
                                            ("forwardedAs" === O
                                                ? (A.as = T[O])
                                                : (w
                                                      ? w(O, u.A, L)
                                                      : !k || (0, u.A)(O)) &&
                                                  (A[O] = T[O]));
                                    return (
                                        t.style &&
                                            C.style !== t.style &&
                                            (A.style = h(
                                                {},
                                                t.style,
                                                {},
                                                C.style
                                            )),
                                        (A.className = Array.prototype
                                            .concat(
                                                b,
                                                S,
                                                P !== S ? P : null,
                                                t.className,
                                                C.className
                                            )
                                            .filter(Boolean)
                                            .join(" ")),
                                        (A.ref = r),
                                        (0, o.createElement)(L, A)
                                    );
                                })(k, e, t, A);
                            };
                        return (
                            (O.displayName = w),
                            ((k = o.forwardRef(O)).attrs = R),
                            (k.componentStyle = T),
                            (k.displayName = w),
                            (k.shouldForwardProp = E),
                            (k.foldedComponentIds = a
                                ? Array.prototype.concat(
                                      t.foldedComponentIds,
                                      t.styledComponentId
                                  )
                                : m),
                            (k.styledComponentId = S),
                            (k.target = a ? t.target : t),
                            (k.withComponent = function (t) {
                                var o = r.componentId,
                                    a = (function (e, t) {
                                        if (null == e) return {};
                                        var r,
                                            n,
                                            o = {},
                                            a = Object.keys(e);
                                        for (n = 0; n < a.length; n++)
                                            t.indexOf((r = a[n])) >= 0 ||
                                                (o[r] = e[r]);
                                        return o;
                                    })(r, ["componentId"]),
                                    i = o && o + "-" + (ev(t) ? t : ey(v(t)));
                                return e(
                                    t,
                                    h({}, a, { attrs: R, componentId: i }),
                                    n
                                );
                            }),
                            Object.defineProperty(k, "defaultProps", {
                                get: function () {
                                    return this._foldedDefaultProps;
                                },
                                set: function (e) {
                                    this._foldedDefaultProps = a
                                        ? (function e(t) {
                                              for (
                                                  var r = arguments.length,
                                                      n = Array(
                                                          r > 1 ? r - 1 : 0
                                                      ),
                                                      o = 1;
                                                  o < r;
                                                  o++
                                              )
                                                  n[o - 1] = arguments[o];
                                              for (
                                                  var a = 0;
                                                  a < n.length;
                                                  a++
                                              ) {
                                                  var i = n[a];
                                                  if (eb(i))
                                                      for (var s in i)
                                                          "__proto__" !== s &&
                                                              "constructor" !==
                                                                  s &&
                                                              "prototype" !==
                                                                  s &&
                                                              (function (
                                                                  t,
                                                                  r,
                                                                  n
                                                              ) {
                                                                  var o = t[n];
                                                                  eb(r) && eb(o)
                                                                      ? e(o, r)
                                                                      : (t[n] =
                                                                            r);
                                                              })(t, i[s], s);
                                              }
                                              return t;
                                          })({}, t.defaultProps, e)
                                        : e;
                                },
                            }),
                            Object.defineProperty(k, "toString", {
                                value: function () {
                                    return "." + k.styledComponentId;
                                },
                            }),
                            i &&
                                d()(k, t, {
                                    attrs: !0,
                                    componentStyle: !0,
                                    displayName: !0,
                                    foldedComponentIds: !0,
                                    shouldForwardProp: !0,
                                    styledComponentId: !0,
                                    target: !0,
                                    withComponent: !0,
                                }),
                            k
                        );
                    }, e);
                };
            function ex(e) {
                for (
                    var t = arguments.length,
                        r = Array(t > 1 ? t - 1 : 0),
                        n = 1;
                    n < t;
                    n++
                )
                    r[n - 1] = arguments[n];
                var o = ep.apply(void 0, [e].concat(r)).join("");
                return new eo(eg(o), o);
            }
            ([
                "a",
                "abbr",
                "address",
                "area",
                "article",
                "aside",
                "audio",
                "b",
                "base",
                "bdi",
                "bdo",
                "big",
                "blockquote",
                "body",
                "br",
                "button",
                "canvas",
                "caption",
                "cite",
                "code",
                "col",
                "colgroup",
                "data",
                "datalist",
                "dd",
                "del",
                "details",
                "dfn",
                "dialog",
                "div",
                "dl",
                "dt",
                "em",
                "embed",
                "fieldset",
                "figcaption",
                "figure",
                "footer",
                "form",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "head",
                "header",
                "hgroup",
                "hr",
                "html",
                "i",
                "iframe",
                "img",
                "input",
                "ins",
                "kbd",
                "keygen",
                "label",
                "legend",
                "li",
                "link",
                "main",
                "map",
                "mark",
                "marquee",
                "menu",
                "menuitem",
                "meta",
                "meter",
                "nav",
                "noscript",
                "object",
                "ol",
                "optgroup",
                "option",
                "output",
                "p",
                "param",
                "picture",
                "pre",
                "progress",
                "q",
                "rp",
                "rt",
                "ruby",
                "s",
                "samp",
                "script",
                "section",
                "select",
                "small",
                "source",
                "span",
                "strong",
                "style",
                "sub",
                "summary",
                "sup",
                "table",
                "tbody",
                "td",
                "textarea",
                "tfoot",
                "th",
                "thead",
                "time",
                "title",
                "tr",
                "track",
                "u",
                "ul",
                "var",
                "video",
                "wbr",
                "circle",
                "clipPath",
                "defs",
                "ellipse",
                "foreignObject",
                "g",
                "image",
                "line",
                "linearGradient",
                "marker",
                "mask",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialGradient",
                "rect",
                "stop",
                "svg",
                "text",
                "textPath",
                "tspan",
            ].forEach(function (e) {
                eE[e] = eE(e);
            }),
                (function () {
                    var e = function (e, t) {
                        ((this.rules = e),
                            (this.componentId = t),
                            (this.isStatic = q(e)),
                            _.registerId(this.componentId + 1));
                    }.prototype;
                    ((e.createStyles = function (e, t, r, n) {
                        var o = n(ed(this.rules, t, r, n).join(""), ""),
                            a = this.componentId + e;
                        r.insertRules(a, a, o);
                    }),
                        (e.removeStyles = function (e, t) {
                            t.clearRules(this.componentId + e);
                        }),
                        (e.renderStyles = function (e, t, r, n) {
                            (e > 2 && _.registerId(this.componentId + e),
                                this.removeStyles(e, r),
                                this.createStyles(e, t, r, n));
                        }));
                })(),
                (function () {
                    var e = function () {
                        var e = this;
                        ((this._emitSheetCSS = function () {
                            var t = e.instance.toString();
                            if (!t) return "";
                            var r = $();
                            return (
                                "<style " +
                                [
                                    r && 'nonce="' + r + '"',
                                    w + '="true"',
                                    'data-styled-version="5.3.11"',
                                ]
                                    .filter(Boolean)
                                    .join(" ") +
                                ">" +
                                t +
                                "</style>"
                            );
                        }),
                            (this.getStyleTags = function () {
                                return e.sealed ? R(2) : e._emitSheetCSS();
                            }),
                            (this.getStyleElement = function () {
                                if (e.sealed) return R(2);
                                var t,
                                    r =
                                        (((t = {})[w] = ""),
                                        (t["data-styled-version"] = "5.3.11"),
                                        (t.dangerouslySetInnerHTML = {
                                            __html: e.instance.toString(),
                                        }),
                                        t),
                                    n = $();
                                return (
                                    n && (r.nonce = n),
                                    [
                                        o.createElement(
                                            "style",
                                            h({}, r, { key: "sc-0-0" })
                                        ),
                                    ]
                                );
                            }),
                            (this.seal = function () {
                                e.sealed = !0;
                            }),
                            (this.instance = new _({ isServer: !0 })),
                            (this.sealed = !1));
                    }.prototype;
                    ((e.collectStyles = function (e) {
                        return this.sealed
                            ? R(2)
                            : o.createElement(en, { sheet: this.instance }, e);
                    }),
                        (e.interleaveWithNodeStream = function (e) {
                            return R(3);
                        }));
                })());
            let eC = eE;
        },
        85788: (e, t, r) => {
            r.d(t, {
                AO: () => f,
                B6: () => L,
                BV: () => tx,
                C5: () => tw,
                Ew: () => ts,
                FE: () => ta,
                Gy: () => t1,
                Ix: () => tE,
                K: () => t9,
                KP: () => tc,
                Kd: () => tJ,
                LG: () => ti,
                N_: () => tX,
                OA: () => tZ,
                PI: () => tk,
                RQ: () => eZ,
                Ye: () => e5,
                Ys: () => tG,
                Zp: () => e1,
                _3: () => eY,
                cq: () => to,
                g: () => e4,
                k2: () => tK,
                o1: () => A,
                ok: () => t2,
                pX: () => _,
                pg: () => tv,
                qh: () => tR,
                r5: () => tl,
                rc: () => s,
                sv: () => tS,
                tW: () => P,
                ue: () => S,
                wQ: () => eK,
                x$: () => e3,
                zR: () => u,
                zy: () => eX,
            });
            var n,
                o = r(96540);
            r(16069);
            var a = (e) => {
                    throw TypeError(e);
                },
                i = (e, t, r) => (
                    t.has(e) || a("Cannot read from private field"),
                    r ? r.call(e) : t.get(e)
                ),
                s = ((e) => (
                    (e.Pop = "POP"),
                    (e.Push = "PUSH"),
                    (e.Replace = "REPLACE"),
                    e
                ))(s || {}),
                l = "popstate";
            function u(e = {}) {
                return (function (e, t, r, n = {}) {
                    let { window: o = document.defaultView, v5Compat: a = !1 } =
                            n,
                        i = o.history,
                        s = "POP",
                        u = null,
                        c = d();
                    function d() {
                        return (i.state || { idx: null }).idx;
                    }
                    function f() {
                        s = "POP";
                        let e = d(),
                            t = null == e ? null : e - c;
                        ((c = e),
                            u &&
                                u({
                                    action: s,
                                    location: m.location,
                                    delta: t,
                                }));
                    }
                    null == c &&
                        ((c = 0), i.replaceState({ ...i.state, idx: c }, ""));
                    let m = {
                        get action() {
                            return s;
                        },
                        get location() {
                            return e(o, i);
                        },
                        listen(e) {
                            if (u)
                                throw Error(
                                    "A history only accepts one active listener"
                                );
                            return (
                                o.addEventListener(l, f),
                                (u = e),
                                () => {
                                    (o.removeEventListener(l, f), (u = null));
                                }
                            );
                        },
                        createHref: (e) => t(o, e),
                        createURL: function (e) {
                            return y(e);
                        },
                        encodeLocation(e) {
                            let t = y(e);
                            return {
                                pathname: t.pathname,
                                search: t.search,
                                hash: t.hash,
                            };
                        },
                        push: function (e, t) {
                            s = "PUSH";
                            let r = p(m.location, e, t);
                            let n = h(r, (c = d() + 1)),
                                l = m.createHref(r);
                            try {
                                i.pushState(n, "", l);
                            } catch (e) {
                                if (
                                    e instanceof DOMException &&
                                    "DataCloneError" === e.name
                                )
                                    throw e;
                                o.location.assign(l);
                            }
                            a &&
                                u &&
                                u({
                                    action: s,
                                    location: m.location,
                                    delta: 1,
                                });
                        },
                        replace: function (e, t) {
                            s = "REPLACE";
                            let n = p(m.location, e, t);
                            r && r(n, e);
                            let o = h(n, (c = d())),
                                l = m.createHref(n);
                            (i.replaceState(o, "", l),
                                a &&
                                    u &&
                                    u({
                                        action: s,
                                        location: m.location,
                                        delta: 0,
                                    }));
                        },
                        go: (e) => i.go(e),
                    };
                    return m;
                })(
                    function (e, t) {
                        let { pathname: r, search: n, hash: o } = e.location;
                        return p(
                            "",
                            { pathname: r, search: n, hash: o },
                            (t.state && t.state.usr) || null,
                            (t.state && t.state.key) || "default"
                        );
                    },
                    function (e, t) {
                        return "string" == typeof t ? t : f(t);
                    },
                    null,
                    e
                );
            }
            function c(e, t) {
                if (!1 === e || null == e) throw Error(t);
            }
            function d(e, t) {
                if (!e) {
                    "undefined" != typeof console && console.warn(t);
                    try {
                        throw Error(t);
                    } catch (e) {}
                }
            }
            function h(e, t) {
                return { usr: e.state, key: e.key, idx: t };
            }
            function p(e, t, r = null, n) {
                return {
                    pathname: "string" == typeof e ? e : e.pathname,
                    search: "",
                    hash: "",
                    ...("string" == typeof t ? m(t) : t),
                    state: r,
                    key:
                        (t && t.key) ||
                        n ||
                        Math.random().toString(36).substring(2, 10),
                };
            }
            function f({ pathname: e = "/", search: t = "", hash: r = "" }) {
                return (
                    t && "?" !== t && (e += "?" === t.charAt(0) ? t : "?" + t),
                    r && "#" !== r && (e += "#" === r.charAt(0) ? r : "#" + r),
                    e
                );
            }
            function m(e) {
                let t = {};
                if (e) {
                    let r = e.indexOf("#");
                    r >= 0 &&
                        ((t.hash = e.substring(r)), (e = e.substring(0, r)));
                    let n = e.indexOf("?");
                    (n >= 0 &&
                        ((t.search = e.substring(n)), (e = e.substring(0, n))),
                        e && (t.pathname = e));
                }
                return t;
            }
            function y(e, t = !1) {
                let r = "http://localhost";
                ("undefined" != typeof window &&
                    (r =
                        "null" !== window.location.origin
                            ? window.location.origin
                            : window.location.href),
                    c(
                        r,
                        "No window.location.(origin|href) available to create URL"
                    ));
                let n = "string" == typeof e ? e : f(e);
                return (
                    (n = n.replace(/ $/, "%20")),
                    !t && n.startsWith("//") && (n = r + n),
                    new URL(n, r)
                );
            }
            var g = class {
                constructor(e) {
                    if (
                        (((e, t, r) =>
                            t.has(e)
                                ? a(
                                      "Cannot add the same private member more than once"
                                  )
                                : t instanceof WeakSet
                                  ? t.add(e)
                                  : t.set(e, r))(this, n, new Map()),
                        e)
                    )
                        for (let [t, r] of e) this.set(t, r);
                }
                get(e) {
                    if (i(this, n).has(e)) return i(this, n).get(e);
                    if (void 0 !== e.defaultValue) return e.defaultValue;
                    throw Error("No value found for context");
                }
                set(e, t) {
                    i(this, n).set(e, t);
                }
            };
            n = new WeakMap();
            var v = new Set([
                    "lazy",
                    "caseSensitive",
                    "path",
                    "id",
                    "index",
                    "children",
                ]),
                b = new Set([
                    "lazy",
                    "caseSensitive",
                    "path",
                    "id",
                    "index",
                    "unstable_middleware",
                    "children",
                ]);
            function w(e, t, r = [], n = {}) {
                return e.map((e, o) => {
                    let a = [...r, String(o)],
                        i = "string" == typeof e.id ? e.id : a.join("-");
                    if (
                        (c(
                            !0 !== e.index || !e.children,
                            "Cannot specify children on an index route"
                        ),
                        c(
                            !n[i],
                            `Found a route id collision on id "${i}".  Route id's must be globally unique within Data Router usages`
                        ),
                        !0 === e.index)
                    ) {
                        let r = { ...e, ...t(e), id: i };
                        return ((n[i] = r), r);
                    }
                    {
                        let r = { ...e, ...t(e), id: i, children: void 0 };
                        return (
                            (n[i] = r),
                            e.children && (r.children = w(e.children, t, a, n)),
                            r
                        );
                    }
                });
            }
            function S(e, t, r = "/") {
                return R(e, t, r, !1);
            }
            function R(e, t, r, n) {
                let o = T(("string" == typeof t ? m(t) : t).pathname || "/", r);
                if (null == o) return null;
                let a = (function e(t, r = [], n = [], o = "") {
                    let a = (t, a, i) => {
                        var s, l;
                        let u,
                            d,
                            h = {
                                relativePath: void 0 === i ? t.path || "" : i,
                                caseSensitive: !0 === t.caseSensitive,
                                childrenIndex: a,
                                route: t,
                            };
                        h.relativePath.startsWith("/") &&
                            (c(
                                h.relativePath.startsWith(o),
                                `Absolute route path "${h.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
                            ),
                            (h.relativePath = h.relativePath.slice(o.length)));
                        let p = z([o, h.relativePath]),
                            f = n.concat(h);
                        (t.children &&
                            t.children.length > 0 &&
                            (c(
                                !0 !== t.index,
                                `Index routes must not have child routes. Please remove all child routes from route path "${p}".`
                            ),
                            e(t.children, r, f, p)),
                            (null != t.path || t.index) &&
                                r.push({
                                    path: p,
                                    score:
                                        ((s = p),
                                        (l = t.index),
                                        (d = (u = s.split("/")).length),
                                        u.some(C) && (d += -2),
                                        l && (d += 2),
                                        u
                                            .filter((e) => !C(e))
                                            .reduce(
                                                (e, t) =>
                                                    e +
                                                    (x.test(t)
                                                        ? 3
                                                        : "" === t
                                                          ? 1
                                                          : 10),
                                                d
                                            )),
                                    routesMeta: f,
                                }));
                    };
                    return (
                        t.forEach((e, t) => {
                            if ("" !== e.path && e.path?.includes("?"))
                                for (let r of (function e(t) {
                                    let r = t.split("/");
                                    if (0 === r.length) return [];
                                    let [n, ...o] = r,
                                        a = n.endsWith("?"),
                                        i = n.replace(/\?$/, "");
                                    if (0 === o.length)
                                        return a ? [i, ""] : [i];
                                    let s = e(o.join("/")),
                                        l = [];
                                    return (
                                        l.push(
                                            ...s.map((e) =>
                                                "" === e ? i : [i, e].join("/")
                                            )
                                        ),
                                        a && l.push(...s),
                                        l.map((e) =>
                                            t.startsWith("/") && "" === e
                                                ? "/"
                                                : e
                                        )
                                    );
                                })(e.path))
                                    a(e, t, r);
                            else a(e, t);
                        }),
                        r
                    );
                })(e);
                a.sort((e, t) => {
                    var r, n;
                    return e.score !== t.score
                        ? t.score - e.score
                        : ((r = e.routesMeta.map((e) => e.childrenIndex)),
                          (n = t.routesMeta.map((e) => e.childrenIndex)),
                          r.length === n.length &&
                          r.slice(0, -1).every((e, t) => e === n[t])
                              ? r[r.length - 1] - n[n.length - 1]
                              : 0);
                });
                let i = null;
                for (let e = 0; null == i && e < a.length; ++e) {
                    let t = k(o);
                    i = (function (e, t, r = !1) {
                        let { routesMeta: n } = e,
                            o = {},
                            a = "/",
                            i = [];
                        for (let e = 0; e < n.length; ++e) {
                            let s = n[e],
                                l = e === n.length - 1,
                                u = "/" === a ? t : t.slice(a.length) || "/",
                                c = L(
                                    {
                                        path: s.relativePath,
                                        caseSensitive: s.caseSensitive,
                                        end: l,
                                    },
                                    u
                                ),
                                d = s.route;
                            if (
                                (!c &&
                                    l &&
                                    r &&
                                    !n[n.length - 1].route.index &&
                                    (c = L(
                                        {
                                            path: s.relativePath,
                                            caseSensitive: s.caseSensitive,
                                            end: !1,
                                        },
                                        u
                                    )),
                                !c)
                            )
                                return null;
                            (Object.assign(o, c.params),
                                i.push({
                                    params: o,
                                    pathname: z([a, c.pathname]),
                                    pathnameBase: D(z([a, c.pathnameBase])),
                                    route: d,
                                }),
                                "/" !== c.pathnameBase &&
                                    (a = z([a, c.pathnameBase])));
                        }
                        return i;
                    })(a[e], t, n);
                }
                return i;
            }
            function E(e, t) {
                let { route: r, pathname: n, params: o } = e;
                return {
                    id: r.id,
                    pathname: n,
                    params: o,
                    data: t[r.id],
                    handle: r.handle,
                };
            }
            var x = /^:[\w-]+$/,
                C = (e) => "*" === e;
            function P(e, t = {}) {
                let r = e;
                r.endsWith("*") &&
                    "*" !== r &&
                    !r.endsWith("/*") &&
                    (d(
                        !1,
                        `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`
                    ),
                    (r = r.replace(/\*$/, "/*")));
                let n = r.startsWith("/") ? "/" : "",
                    o = (e) =>
                        null == e ? "" : "string" == typeof e ? e : String(e);
                return (
                    n +
                    r
                        .split(/\/+/)
                        .map((e, r, n) => {
                            if (r === n.length - 1 && "*" === e)
                                return o(t["*"]);
                            let a = e.match(/^:([\w-]+)(\??)$/);
                            if (a) {
                                let [, e, r] = a,
                                    n = t[e];
                                return (
                                    c(
                                        "?" === r || null != n,
                                        `Missing ":${e}" param`
                                    ),
                                    o(n)
                                );
                            }
                            return e.replace(/\?$/g, "");
                        })
                        .filter((e) => !!e)
                        .join("/")
                );
            }
            function L(e, t) {
                "string" == typeof e &&
                    (e = { path: e, caseSensitive: !1, end: !0 });
                let [r, n] = (function (e, t = !1, r = !0) {
                        d(
                            "*" === e || !e.endsWith("*") || e.endsWith("/*"),
                            `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
                        );
                        let n = [],
                            o =
                                "^" +
                                e
                                    .replace(/\/*\*?$/, "")
                                    .replace(/^\/*/, "/")
                                    .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                                    .replace(
                                        /\/:([\w-]+)(\?)?/g,
                                        (e, t, r) => (
                                            n.push({
                                                paramName: t,
                                                isOptional: null != r,
                                            }),
                                            r ? "/?([^\\/]+)?" : "/([^\\/]+)"
                                        )
                                    );
                        return (
                            e.endsWith("*")
                                ? (n.push({ paramName: "*" }),
                                  (o +=
                                      "*" === e || "/*" === e
                                          ? "(.*)$"
                                          : "(?:\\/(.+)|\\/*)$"))
                                : r
                                  ? (o += "\\/*$")
                                  : "" !== e &&
                                    "/" !== e &&
                                    (o += "(?:(?=\\/|$))"),
                            [new RegExp(o, t ? void 0 : "i"), n]
                        );
                    })(e.path, e.caseSensitive, e.end),
                    o = t.match(r);
                if (!o) return null;
                let a = o[0],
                    i = a.replace(/(.)\/+$/, "$1"),
                    s = o.slice(1);
                return {
                    params: n.reduce(
                        (e, { paramName: t, isOptional: r }, n) => {
                            if ("*" === t) {
                                let e = s[n] || "";
                                i = a
                                    .slice(0, a.length - e.length)
                                    .replace(/(.)\/+$/, "$1");
                            }
                            let o = s[n];
                            return (
                                r && !o
                                    ? (e[t] = void 0)
                                    : (e[t] = (o || "").replace(/%2F/g, "/")),
                                e
                            );
                        },
                        {}
                    ),
                    pathname: a,
                    pathnameBase: i,
                    pattern: e,
                };
            }
            function k(e) {
                try {
                    return e
                        .split("/")
                        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
                        .join("/");
                } catch (t) {
                    return (
                        d(
                            !1,
                            `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
                        ),
                        e
                    );
                }
            }
            function T(e, t) {
                if ("/" === t) return e;
                if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
                let r = t.endsWith("/") ? t.length - 1 : t.length,
                    n = e.charAt(r);
                return n && "/" !== n ? null : e.slice(r) || "/";
            }
            function A(e, t = "/") {
                var r;
                let n,
                    {
                        pathname: o,
                        search: a = "",
                        hash: i = "",
                    } = "string" == typeof e ? m(e) : e;
                return {
                    pathname: o
                        ? o.startsWith("/")
                            ? o
                            : ((r = o),
                              (n = t.replace(/\/+$/, "").split("/")),
                              r.split("/").forEach((e) => {
                                  ".." === e
                                      ? n.length > 1 && n.pop()
                                      : "." !== e && n.push(e);
                              }),
                              n.length > 1 ? n.join("/") : "/")
                        : t,
                    search: I(a),
                    hash: N(i),
                };
            }
            function O(e, t, r, n) {
                return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
            }
            function M(e) {
                return e.filter(
                    (e, t) =>
                        0 === t || (e.route.path && e.route.path.length > 0)
                );
            }
            function $(e) {
                let t = M(e);
                return t.map((e, r) =>
                    r === t.length - 1 ? e.pathname : e.pathnameBase
                );
            }
            function j(e, t, r, n = !1) {
                let o, a;
                "string" == typeof e
                    ? (o = m(e))
                    : (c(
                          !(o = { ...e }).pathname || !o.pathname.includes("?"),
                          O("?", "pathname", "search", o)
                      ),
                      c(
                          !o.pathname || !o.pathname.includes("#"),
                          O("#", "pathname", "hash", o)
                      ),
                      c(
                          !o.search || !o.search.includes("#"),
                          O("#", "search", "hash", o)
                      ));
                let i = "" === e || "" === o.pathname,
                    s = i ? "/" : o.pathname;
                if (null == s) a = r;
                else {
                    let e = t.length - 1;
                    if (!n && s.startsWith("..")) {
                        let t = s.split("/");
                        for (; ".." === t[0]; ) (t.shift(), (e -= 1));
                        o.pathname = t.join("/");
                    }
                    a = e >= 0 ? t[e] : "/";
                }
                let l = A(o, a),
                    u = s && "/" !== s && s.endsWith("/"),
                    d = (i || "." === s) && r.endsWith("/");
                return (
                    !l.pathname.endsWith("/") &&
                        (u || d) &&
                        (l.pathname += "/"),
                    l
                );
            }
            var z = (e) => e.join("/").replace(/\/\/+/g, "/"),
                D = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
                I = (e) =>
                    e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "",
                N = (e) =>
                    e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "",
                B = class {
                    constructor(e, t, r, n = !1) {
                        ((this.status = e),
                            (this.statusText = t || ""),
                            (this.internal = n),
                            r instanceof Error
                                ? ((this.data = r.toString()), (this.error = r))
                                : (this.data = r));
                    }
                };
            function _(e) {
                return (
                    null != e &&
                    "number" == typeof e.status &&
                    "string" == typeof e.statusText &&
                    "boolean" == typeof e.internal &&
                    "data" in e
                );
            }
            var W = ["POST", "PUT", "PATCH", "DELETE"],
                U = new Set(W),
                F = new Set(["GET", ...W]),
                H = new Set([301, 302, 303, 307, 308]),
                Y = new Set([307, 308]),
                q = {
                    state: "idle",
                    location: void 0,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                },
                G = {
                    state: "idle",
                    data: void 0,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                },
                J = {
                    state: "unblocked",
                    proceed: void 0,
                    reset: void 0,
                    location: void 0,
                },
                V = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                X = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
                K = "remix-router-transitions",
                Z = Symbol("ResetLoaderData");
            function Q(e, t, r, n, o, a) {
                let i, s;
                if (o) {
                    for (let e of ((i = []), t))
                        if ((i.push(e), e.route.id === o)) {
                            s = e;
                            break;
                        }
                } else ((i = t), (s = t[t.length - 1]));
                let l = j(
                    n || ".",
                    $(i),
                    T(e.pathname, r) || e.pathname,
                    "path" === a
                );
                if (
                    (null == n && ((l.search = e.search), (l.hash = e.hash)),
                    (null == n || "" === n || "." === n) && s)
                ) {
                    let e = ez(l.search);
                    if (s.route.index && !e)
                        l.search = l.search
                            ? l.search.replace(/^\?/, "?index&")
                            : "?index";
                    else if (!s.route.index && e) {
                        let e = new URLSearchParams(l.search),
                            t = e.getAll("index");
                        (e.delete("index"),
                            t
                                .filter((e) => e)
                                .forEach((t) => e.append("index", t)));
                        let r = e.toString();
                        l.search = r ? `?${r}` : "";
                    }
                }
                return (
                    "/" !== r &&
                        (l.pathname =
                            "/" === l.pathname ? r : z([r, l.pathname])),
                    f(l)
                );
            }
            function ee(e, t, r) {
                var n;
                let o, a;
                if (
                    !r ||
                    !(
                        null != r &&
                        (("formData" in r && null != r.formData) ||
                            ("body" in r && void 0 !== r.body))
                    )
                )
                    return { path: t };
                if (
                    r.formMethod &&
                    ((n = r.formMethod), !F.has(n.toUpperCase()))
                )
                    return {
                        path: t,
                        error: eL(405, { method: r.formMethod }),
                    };
                let i = () => ({
                        path: t,
                        error: eL(400, { type: "invalid-body" }),
                    }),
                    s = (r.formMethod || "get").toUpperCase(),
                    l = eT(t);
                if (void 0 !== r.body) {
                    if ("text/plain" === r.formEncType) {
                        if (!ej(s)) return i();
                        let e =
                            "string" == typeof r.body
                                ? r.body
                                : r.body instanceof FormData ||
                                    r.body instanceof URLSearchParams
                                  ? Array.from(r.body.entries()).reduce(
                                        (e, [t, r]) => `${e}${t}=${r}
`,
                                        ""
                                    )
                                  : String(r.body);
                        return {
                            path: t,
                            submission: {
                                formMethod: s,
                                formAction: l,
                                formEncType: r.formEncType,
                                formData: void 0,
                                json: void 0,
                                text: e,
                            },
                        };
                    } else if ("application/json" === r.formEncType) {
                        if (!ej(s)) return i();
                        try {
                            let e =
                                "string" == typeof r.body
                                    ? JSON.parse(r.body)
                                    : r.body;
                            return {
                                path: t,
                                submission: {
                                    formMethod: s,
                                    formAction: l,
                                    formEncType: r.formEncType,
                                    formData: void 0,
                                    json: e,
                                    text: void 0,
                                },
                            };
                        } catch (e) {
                            return i();
                        }
                    }
                }
                if (
                    (c(
                        "function" == typeof FormData,
                        "FormData is not available in this environment"
                    ),
                    r.formData)
                )
                    ((o = ew(r.formData)), (a = r.formData));
                else if (r.body instanceof FormData)
                    ((o = ew(r.body)), (a = r.body));
                else if (r.body instanceof URLSearchParams)
                    a = eS((o = r.body));
                else if (null == r.body)
                    ((o = new URLSearchParams()), (a = new FormData()));
                else
                    try {
                        ((o = new URLSearchParams(r.body)), (a = eS(o)));
                    } catch (e) {
                        return i();
                    }
                let u = {
                    formMethod: s,
                    formAction: l,
                    formEncType:
                        (r && r.formEncType) ||
                        "application/x-www-form-urlencoded",
                    formData: a,
                    json: void 0,
                    text: void 0,
                };
                if (ej(u.formMethod)) return { path: t, submission: u };
                let d = m(t);
                return (
                    e && d.search && ez(d.search) && o.append("index", ""),
                    (d.search = `?${o}`),
                    { path: f(d), submission: u }
                );
            }
            function et(
                e,
                t,
                r,
                n,
                o,
                a,
                i,
                s,
                l,
                u,
                c,
                d,
                h,
                p,
                f,
                m,
                y,
                g,
                v,
                b
            ) {
                let w,
                    R = b ? (eA(b[1]) ? b[1].error : b[1].data) : void 0,
                    E = o.createURL(a.location),
                    x = o.createURL(l);
                if (c && a.errors) {
                    let e = Object.keys(a.errors)[0];
                    w = i.findIndex((t) => t.route.id === e);
                } else if (b && eA(b[1])) {
                    let e = b[0];
                    w = i.findIndex((t) => t.route.id === e) - 1;
                }
                let C = b ? b[1].statusCode : void 0,
                    P = C && C >= 400,
                    L = {
                        currentUrl: E,
                        currentParams: a.matches[0]?.params || {},
                        nextUrl: x,
                        nextParams: i[0].params,
                        ...s,
                        actionResult: R,
                        actionStatus: C,
                    },
                    k = i.map((o, i) => {
                        var s, l, h, p, f;
                        let m,
                            y,
                            g,
                            { route: v } = o,
                            b = null;
                        if (
                            (null != w && i > w
                                ? (b = !1)
                                : v.lazy
                                  ? (b = !0)
                                  : null == v.loader
                                    ? (b = !1)
                                    : c
                                      ? (b = er(v, a.loaderData, a.errors))
                                      : ((s = a.loaderData),
                                        (l = a.matches[i]),
                                        (h = o),
                                        (m = !l || h.route.id !== l.route.id),
                                        (y = !s.hasOwnProperty(h.route.id)),
                                        (m || y) && (b = !0)),
                            null !== b)
                        )
                            return ep(r, n, e, o, u, t, b);
                        let S =
                                !P &&
                                (d ||
                                    E.pathname + E.search ===
                                        x.pathname + x.search ||
                                    E.search !== x.search ||
                                    ((p = a.matches[i]),
                                    (f = o),
                                    (g = p.route.path),
                                    p.pathname !== f.pathname ||
                                        (null != g &&
                                            g.endsWith("*") &&
                                            p.params["*"] !== f.params["*"]))),
                            R = { ...L, defaultShouldRevalidate: S },
                            C = en(o, R);
                        return ep(r, n, e, o, u, t, C, R);
                    }),
                    T = [];
                return (
                    f.forEach((e, s) => {
                        if (
                            c ||
                            !i.some((t) => t.route.id === e.routeId) ||
                            p.has(s)
                        )
                            return;
                        let l = a.fetchers.get(s),
                            f = l && "idle" !== l.state && void 0 === l.data,
                            b = S(y, e.path, g);
                        if (!b) {
                            if (v && f) return;
                            T.push({
                                key: s,
                                routeId: e.routeId,
                                path: e.path,
                                matches: null,
                                match: null,
                                request: null,
                                controller: null,
                            });
                            return;
                        }
                        if (m.has(s)) return;
                        let w = eD(b, e.path),
                            R = new AbortController(),
                            E = eb(o, e.path, R.signal),
                            x = null;
                        if (h.has(s))
                            (h.delete(s), (x = ef(r, n, E, b, w, u, t)));
                        else if (f) d && (x = ef(r, n, E, b, w, u, t));
                        else {
                            let e = { ...L, defaultShouldRevalidate: !P && d };
                            en(w, e) && (x = ef(r, n, E, b, w, u, t, e));
                        }
                        x &&
                            T.push({
                                key: s,
                                routeId: e.routeId,
                                path: e.path,
                                matches: x,
                                match: w,
                                request: E,
                                controller: R,
                            });
                    }),
                    { dsMatches: k, revalidatingFetchers: T }
                );
            }
            function er(e, t, r) {
                if (e.lazy) return !0;
                if (!e.loader) return !1;
                let n = null != t && e.id in t,
                    o = null != r && void 0 !== r[e.id];
                return (
                    (!!n || !o) &&
                    (("function" == typeof e.loader &&
                        !0 === e.loader.hydrate) ||
                        (!n && !o))
                );
            }
            function en(e, t) {
                if (e.route.shouldRevalidate) {
                    let r = e.route.shouldRevalidate(t);
                    if ("boolean" == typeof r) return r;
                }
                return t.defaultShouldRevalidate;
            }
            function eo(e, t, r, n, o) {
                let a;
                if (e) {
                    let t = n[e];
                    (c(
                        t,
                        `No route found to patch children into: routeId = ${e}`
                    ),
                        t.children || (t.children = []),
                        (a = t.children));
                } else a = r;
                let i = w(
                    t.filter(
                        (e) =>
                            !a.some((t) =>
                                (function e(t, r) {
                                    return (
                                        ("id" in t &&
                                            "id" in r &&
                                            t.id === r.id) ||
                                        (t.index === r.index &&
                                            t.path === r.path &&
                                            t.caseSensitive ===
                                                r.caseSensitive &&
                                            (((!t.children ||
                                                0 === t.children.length) &&
                                                (!r.children ||
                                                    0 === r.children.length)) ||
                                                t.children.every((t, n) =>
                                                    r.children?.some((r) =>
                                                        e(t, r)
                                                    )
                                                )))
                                    );
                                })(e, t)
                            )
                    ),
                    o,
                    [e || "_", "patch", String(a?.length || "0")],
                    n
                );
                a.push(...i);
            }
            var ea = new WeakMap(),
                ei = ({
                    key: e,
                    route: t,
                    manifest: r,
                    mapRouteProperties: n,
                }) => {
                    let o = r[t.id];
                    if (
                        (c(o, "No route found in manifest"),
                        !o.lazy || "object" != typeof o.lazy)
                    )
                        return;
                    let a = o.lazy[e];
                    if (!a) return;
                    let i = ea.get(o);
                    i || ((i = {}), ea.set(o, i));
                    let s = i[e];
                    if (s) return s;
                    let l = (async () => {
                        let t = v.has(e),
                            r = void 0 !== o[e] && "hasErrorBoundary" !== e;
                        if (t)
                            (d(
                                !t,
                                "Route property " +
                                    e +
                                    " is not a supported lazy route property. This property will be ignored."
                            ),
                                (i[e] = Promise.resolve()));
                        else if (r)
                            d(
                                !1,
                                `Route "${o.id}" has a static property "${e}" defined. The lazy property will be ignored.`
                            );
                        else {
                            let t = await a();
                            null != t &&
                                (Object.assign(o, { [e]: t }),
                                Object.assign(o, n(o)));
                        }
                        "object" == typeof o.lazy &&
                            ((o.lazy[e] = void 0),
                            Object.values(o.lazy).every((e) => void 0 === e) &&
                                (o.lazy = void 0));
                    })();
                    return ((i[e] = l), l);
                },
                es = new WeakMap();
            async function el(e) {
                let t = e.matches.filter((e) => e.shouldLoad),
                    r = {};
                return (
                    (await Promise.all(t.map((e) => e.resolve()))).forEach(
                        (e, n) => {
                            r[t[n].route.id] = e;
                        }
                    ),
                    r
                );
            }
            async function eu(e) {
                return e.matches.some((e) => e.route.unstable_middleware)
                    ? ec(
                          e,
                          !1,
                          () => el(e),
                          (e, t) => ({ [t]: { type: "error", result: e } })
                      )
                    : el(e);
            }
            async function ec(e, t, r, n) {
                let { matches: o, request: a, params: i, context: s } = e,
                    l = { handlerResult: void 0 };
                try {
                    let e = o.flatMap((e) =>
                            e.route.unstable_middleware
                                ? e.route.unstable_middleware.map((t) => [
                                      e.route.id,
                                      t,
                                  ])
                                : []
                        ),
                        n = await ed(
                            { request: a, params: i, context: s },
                            e,
                            t,
                            l,
                            r
                        );
                    return t ? n : l.handlerResult;
                } catch (r) {
                    if (!l.middlewareError) throw r;
                    let e = await n(
                        l.middlewareError.error,
                        l.middlewareError.routeId
                    );
                    if (t || !l.handlerResult) return e;
                    return Object.assign(l.handlerResult, e);
                }
            }
            async function ed(e, t, r, n, o, a = 0) {
                let i,
                    { request: s } = e;
                if (s.signal.aborted) {
                    if (s.signal.reason) throw s.signal.reason;
                    throw Error(
                        `Request aborted without an \`AbortSignal.reason\`: ${s.method} ${s.url}`
                    );
                }
                let l = t[a];
                if (!l) return ((n.handlerResult = await o()), n.handlerResult);
                let [u, c] = l,
                    d = !1,
                    h = async () => {
                        if (d)
                            throw Error(
                                "You may only call `next()` once per middleware"
                            );
                        d = !0;
                        let s = await ed(e, t, r, n, o, a + 1);
                        if (r) return (i = s);
                    };
                try {
                    let t = await c(
                        {
                            request: e.request,
                            params: e.params,
                            context: e.context,
                        },
                        h
                    );
                    if (!d) return h();
                    if (void 0 === t) return i;
                    return t;
                } catch (e) {
                    throw (
                        n.middlewareError
                            ? n.middlewareError.error !== e &&
                              (n.middlewareError = { routeId: u, error: e })
                            : (n.middlewareError = { routeId: u, error: e }),
                        e
                    );
                }
            }
            function eh(e, t, r, n, o) {
                let a = ei({
                        key: "unstable_middleware",
                        route: n.route,
                        manifest: t,
                        mapRouteProperties: e,
                    }),
                    i = (function (e, t, r, n, o) {
                        let a,
                            i = r[e.id];
                        if ((c(i, "No route found in manifest"), !e.lazy))
                            return {
                                lazyRoutePromise: void 0,
                                lazyHandlerPromise: void 0,
                            };
                        if ("function" == typeof e.lazy) {
                            let t = es.get(i);
                            if (t)
                                return {
                                    lazyRoutePromise: t,
                                    lazyHandlerPromise: t,
                                };
                            let r = (async () => {
                                c(
                                    "function" == typeof e.lazy,
                                    "No lazy route function found"
                                );
                                let t = await e.lazy(),
                                    r = {};
                                for (let e in t) {
                                    let n = t[e];
                                    if (void 0 === n) continue;
                                    let o = b.has(e),
                                        a =
                                            void 0 !== i[e] &&
                                            "hasErrorBoundary" !== e;
                                    o
                                        ? d(
                                              !o,
                                              "Route property " +
                                                  e +
                                                  " is not a supported property to be returned from a lazy route function. This property will be ignored."
                                          )
                                        : a
                                          ? d(
                                                !a,
                                                `Route "${i.id}" has a static property "${e}" defined but its lazy function is also returning a value for this property. The lazy route property "${e}" will be ignored.`
                                            )
                                          : (r[e] = n);
                                }
                                (Object.assign(i, r),
                                    Object.assign(i, {
                                        ...n(i),
                                        lazy: void 0,
                                    }));
                            })();
                            return (
                                es.set(i, r),
                                r.catch(() => {}),
                                { lazyRoutePromise: r, lazyHandlerPromise: r }
                            );
                        }
                        let s = Object.keys(e.lazy),
                            l = [];
                        for (let i of s) {
                            if (o && o.includes(i)) continue;
                            let s = ei({
                                key: i,
                                route: e,
                                manifest: r,
                                mapRouteProperties: n,
                            });
                            s && (l.push(s), i === t && (a = s));
                        }
                        let u =
                            l.length > 0
                                ? Promise.all(l).then(() => {})
                                : void 0;
                        return (
                            u?.catch(() => {}),
                            a?.catch(() => {}),
                            { lazyRoutePromise: u, lazyHandlerPromise: a }
                        );
                    })(n.route, ej(r.method) ? "action" : "loader", t, e, o);
                return {
                    middleware: a,
                    route: i.lazyRoutePromise,
                    handler: i.lazyHandlerPromise,
                };
            }
            function ep(e, t, r, n, o, a, i, s = null) {
                let l = !1,
                    u = eh(e, t, r, n, o);
                return {
                    ...n,
                    _lazyPromises: u,
                    shouldLoad: i,
                    unstable_shouldRevalidateArgs: s,
                    unstable_shouldCallHandler: (e) =>
                        ((l = !0), s)
                            ? "boolean" == typeof e
                                ? en(n, { ...s, defaultShouldRevalidate: e })
                                : en(n, s)
                            : i,
                    resolve: (e) =>
                        l ||
                        i ||
                        (e &&
                            "GET" === r.method &&
                            (n.route.lazy || n.route.loader))
                            ? ey({
                                  request: r,
                                  match: n,
                                  lazyHandlerPromise: u?.handler,
                                  lazyRoutePromise: u?.route,
                                  handlerOverride: e,
                                  scopedContext: a,
                              })
                            : Promise.resolve({ type: "data", result: void 0 }),
                };
            }
            function ef(e, t, r, n, o, a, i, s = null) {
                return n.map((n) =>
                    n.route.id !== o.route.id
                        ? {
                              ...n,
                              shouldLoad: !1,
                              unstable_shouldRevalidateArgs: s,
                              unstable_shouldCallHandler: () => !1,
                              _lazyPromises: eh(e, t, r, n, a),
                              resolve: () =>
                                  Promise.resolve({
                                      type: "data",
                                      result: void 0,
                                  }),
                          }
                        : ep(e, t, r, n, a, i, !0, s)
                );
            }
            async function em(e, t, r, n, o, a) {
                r.some((e) => e._lazyPromises?.middleware) &&
                    (await Promise.all(
                        r.map((e) => e._lazyPromises?.middleware)
                    ));
                let i = {
                        request: t,
                        params: r[0].params,
                        context: o,
                        matches: r,
                    },
                    s = a
                        ? () => {
                              throw Error(
                                  "You cannot call `unstable_runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`"
                              );
                          }
                        : (e) =>
                              ec(
                                  i,
                                  !1,
                                  () =>
                                      e({
                                          ...i,
                                          fetcherKey: n,
                                          unstable_runClientMiddleware: () => {
                                              throw Error(
                                                  "Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler"
                                              );
                                          },
                                      }),
                                  (e, t) => ({
                                      [t]: { type: "error", result: e },
                                  })
                              ),
                    l = await e({
                        ...i,
                        fetcherKey: n,
                        unstable_runClientMiddleware: s,
                    });
                try {
                    await Promise.all(
                        r.flatMap((e) => [
                            e._lazyPromises?.handler,
                            e._lazyPromises?.route,
                        ])
                    );
                } catch (e) {}
                return l;
            }
            async function ey({
                request: e,
                match: t,
                lazyHandlerPromise: r,
                lazyRoutePromise: n,
                handlerOverride: o,
                scopedContext: a,
            }) {
                let i,
                    s,
                    l = ej(e.method),
                    u = l ? "action" : "loader",
                    c = (r) => {
                        let n,
                            i = new Promise((e, t) => (n = t));
                        ((s = () => n()),
                            e.signal.addEventListener("abort", s));
                        let l = (n) =>
                            "function" != typeof r
                                ? Promise.reject(
                                      Error(
                                          `You cannot call the handler for a route which defines a boolean "${u}" [routeId: ${t.route.id}]`
                                      )
                                  )
                                : r(
                                      {
                                          request: e,
                                          params: t.params,
                                          context: a,
                                      },
                                      ...(void 0 !== n ? [n] : [])
                                  );
                        return Promise.race([
                            (async () => {
                                try {
                                    let e = await (o ? o((e) => l(e)) : l());
                                    return { type: "data", result: e };
                                } catch (e) {
                                    return { type: "error", result: e };
                                }
                            })(),
                            i,
                        ]);
                    };
                try {
                    let o = l ? t.route.action : t.route.loader;
                    if (r || n)
                        if (o) {
                            let e,
                                [t] = await Promise.all([
                                    c(o).catch((t) => {
                                        e = t;
                                    }),
                                    r,
                                    n,
                                ]);
                            if (void 0 !== e) throw e;
                            i = t;
                        } else {
                            await r;
                            let o = l ? t.route.action : t.route.loader;
                            if (o) [i] = await Promise.all([c(o), n]);
                            else {
                                if ("action" !== u)
                                    return { type: "data", result: void 0 };
                                let r = new URL(e.url),
                                    n = r.pathname + r.search;
                                throw eL(405, {
                                    method: e.method,
                                    pathname: n,
                                    routeId: t.route.id,
                                });
                            }
                        }
                    else if (o) i = await c(o);
                    else {
                        let t = new URL(e.url),
                            r = t.pathname + t.search;
                        throw eL(404, { pathname: r });
                    }
                } catch (e) {
                    return { type: "error", result: e };
                } finally {
                    s && e.signal.removeEventListener("abort", s);
                }
                return i;
            }
            async function eg(e) {
                let { result: t, type: r } = e;
                if (e$(t)) {
                    let e;
                    try {
                        let r = t.headers.get("Content-Type");
                        e =
                            r && /\bapplication\/json\b/.test(r)
                                ? null == t.body
                                    ? null
                                    : await t.json()
                                : await t.text();
                    } catch (e) {
                        return { type: "error", error: e };
                    }
                    return "error" === r
                        ? {
                              type: "error",
                              error: new B(t.status, t.statusText, e),
                              statusCode: t.status,
                              headers: t.headers,
                          }
                        : {
                              type: "data",
                              data: e,
                              statusCode: t.status,
                              headers: t.headers,
                          };
                }
                if ("error" === r)
                    return eM(t)
                        ? t.data instanceof Error
                            ? {
                                  type: "error",
                                  error: t.data,
                                  statusCode: t.init?.status,
                                  headers: t.init?.headers
                                      ? new Headers(t.init.headers)
                                      : void 0,
                              }
                            : {
                                  type: "error",
                                  error: new B(
                                      t.init?.status || 500,
                                      void 0,
                                      t.data
                                  ),
                                  statusCode: _(t) ? t.status : void 0,
                                  headers: t.init?.headers
                                      ? new Headers(t.init.headers)
                                      : void 0,
                              }
                        : {
                              type: "error",
                              error: t,
                              statusCode: _(t) ? t.status : void 0,
                          };
                return eM(t)
                    ? {
                          type: "data",
                          data: t.data,
                          statusCode: t.init?.status,
                          headers: t.init?.headers
                              ? new Headers(t.init.headers)
                              : void 0,
                      }
                    : { type: "data", data: t };
            }
            function ev(e, t, r) {
                if (V.test(e)) {
                    let n = new URL(e.startsWith("//") ? t.protocol + e : e),
                        o = null != T(n.pathname, r);
                    if (n.origin === t.origin && o)
                        return n.pathname + n.search + n.hash;
                }
                return e;
            }
            function eb(e, t, r, n) {
                let o = e.createURL(eT(t)).toString(),
                    a = { signal: r };
                if (n && ej(n.formMethod)) {
                    let { formMethod: e, formEncType: t } = n;
                    ((a.method = e.toUpperCase()),
                        "application/json" === t
                            ? ((a.headers = new Headers({ "Content-Type": t })),
                              (a.body = JSON.stringify(n.json)))
                            : "text/plain" === t
                              ? (a.body = n.text)
                              : "application/x-www-form-urlencoded" === t &&
                                  n.formData
                                ? (a.body = ew(n.formData))
                                : (a.body = n.formData));
                }
                return new Request(o, a);
            }
            function ew(e) {
                let t = new URLSearchParams();
                for (let [r, n] of e.entries())
                    t.append(r, "string" == typeof n ? n : n.name);
                return t;
            }
            function eS(e) {
                let t = new FormData();
                for (let [r, n] of e.entries()) t.append(r, n);
                return t;
            }
            function eR(e, t, r, n, o, a) {
                let { loaderData: i, errors: s } = (function (
                    e,
                    t,
                    r,
                    n = !1,
                    o = !1
                ) {
                    let a,
                        i = {},
                        s = null,
                        l = !1,
                        u = {},
                        d = r && eA(r[1]) ? r[1].error : void 0;
                    return (
                        e.forEach((r) => {
                            if (!(r.route.id in t)) return;
                            let h = r.route.id,
                                p = t[h];
                            if (
                                (c(
                                    !eO(p),
                                    "Cannot handle redirect results in processLoaderData"
                                ),
                                eA(p))
                            ) {
                                let t = p.error;
                                if (
                                    (void 0 !== d && ((t = d), (d = void 0)),
                                    (s = s || {}),
                                    o)
                                )
                                    s[h] = t;
                                else {
                                    let r = eC(e, h);
                                    null == s[r.route.id] &&
                                        (s[r.route.id] = t);
                                }
                                (n || (i[h] = Z),
                                    l ||
                                        ((l = !0),
                                        (a = _(p.error)
                                            ? p.error.status
                                            : 500)),
                                    p.headers && (u[h] = p.headers));
                            } else
                                ((i[h] = p.data),
                                    p.statusCode &&
                                        200 !== p.statusCode &&
                                        !l &&
                                        (a = p.statusCode),
                                    p.headers && (u[h] = p.headers));
                        }),
                        void 0 !== d &&
                            r &&
                            ((s = { [r[0]]: d }), r[2] && (i[r[2]] = void 0)),
                        {
                            loaderData: i,
                            errors: s,
                            statusCode: a || 200,
                            loaderHeaders: u,
                        }
                    );
                })(t, r, n);
                return (
                    o
                        .filter(
                            (e) =>
                                !e.matches ||
                                e.matches.some((e) => e.shouldLoad)
                        )
                        .forEach((t) => {
                            let { key: r, match: n, controller: o } = t,
                                i = a[r];
                            if (
                                (c(
                                    i,
                                    "Did not find corresponding fetcher result"
                                ),
                                !o || !o.signal.aborted)
                            )
                                if (eA(i)) {
                                    let t = eC(e.matches, n?.route.id);
                                    ((s && s[t.route.id]) ||
                                        (s = { ...s, [t.route.id]: i.error }),
                                        e.fetchers.delete(r));
                                } else if (eO(i))
                                    c(
                                        !1,
                                        "Unhandled fetcher revalidation redirect"
                                    );
                                else {
                                    let t = e_(i.data);
                                    e.fetchers.set(r, t);
                                }
                        }),
                    { loaderData: i, errors: s }
                );
            }
            function eE(e, t, r, n) {
                let o = Object.entries(t)
                    .filter(([, e]) => e !== Z)
                    .reduce((e, [t, r]) => ((e[t] = r), e), {});
                for (let a of r) {
                    let r = a.route.id;
                    if (
                        (!t.hasOwnProperty(r) &&
                            e.hasOwnProperty(r) &&
                            a.route.loader &&
                            (o[r] = e[r]),
                        n && n.hasOwnProperty(r))
                    )
                        break;
                }
                return o;
            }
            function ex(e) {
                return e
                    ? eA(e[1])
                        ? { actionData: {} }
                        : { actionData: { [e[0]]: e[1].data } }
                    : {};
            }
            function eC(e, t) {
                return (
                    (t
                        ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1)
                        : [...e]
                    )
                        .reverse()
                        .find((e) => !0 === e.route.hasErrorBoundary) || e[0]
                );
            }
            function eP(e) {
                let t =
                    1 === e.length
                        ? e[0]
                        : e.find(
                              (e) => e.index || !e.path || "/" === e.path
                          ) || { id: "__shim-error-route__" };
                return {
                    matches: [
                        {
                            params: {},
                            pathname: "",
                            pathnameBase: "",
                            route: t,
                        },
                    ],
                    route: t,
                };
            }
            function eL(
                e,
                { pathname: t, routeId: r, method: n, type: o, message: a } = {}
            ) {
                let i = "Unknown Server Error",
                    s = "Unknown @remix-run/router error";
                return (
                    400 === e
                        ? ((i = "Bad Request"),
                          n && t && r
                              ? (s = `You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`)
                              : "invalid-body" === o &&
                                (s = "Unable to encode submission body"))
                        : 403 === e
                          ? ((i = "Forbidden"),
                            (s = `Route "${r}" does not match URL "${t}"`))
                          : 404 === e
                            ? ((i = "Not Found"),
                              (s = `No route matches URL "${t}"`))
                            : 405 === e &&
                              ((i = "Method Not Allowed"),
                              n && t && r
                                  ? (s = `You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`)
                                  : n &&
                                    (s = `Invalid request method "${n.toUpperCase()}"`)),
                    new B(e || 500, i, Error(s), !0)
                );
            }
            function ek(e) {
                let t = Object.entries(e);
                for (let e = t.length - 1; e >= 0; e--) {
                    let [r, n] = t[e];
                    if (eO(n)) return { key: r, result: n };
                }
            }
            function eT(e) {
                return f({ ...("string" == typeof e ? m(e) : e), hash: "" });
            }
            function eA(e) {
                return "error" === e.type;
            }
            function eO(e) {
                return "redirect" === (e && e.type);
            }
            function eM(e) {
                return (
                    "object" == typeof e &&
                    null != e &&
                    "type" in e &&
                    "data" in e &&
                    "init" in e &&
                    "DataWithResponseInit" === e.type
                );
            }
            function e$(e) {
                return (
                    null != e &&
                    "number" == typeof e.status &&
                    "string" == typeof e.statusText &&
                    "object" == typeof e.headers &&
                    void 0 !== e.body
                );
            }
            function ej(e) {
                return U.has(e.toUpperCase());
            }
            function ez(e) {
                return new URLSearchParams(e)
                    .getAll("index")
                    .some((e) => "" === e);
            }
            function eD(e, t) {
                let r = "string" == typeof t ? m(t).search : t.search;
                if (e[e.length - 1].route.index && ez(r || ""))
                    return e[e.length - 1];
                let n = M(e);
                return n[n.length - 1];
            }
            function eI(e) {
                let {
                    formMethod: t,
                    formAction: r,
                    formEncType: n,
                    text: o,
                    formData: a,
                    json: i,
                } = e;
                if (t && r && n) {
                    if (null != o)
                        return {
                            formMethod: t,
                            formAction: r,
                            formEncType: n,
                            formData: void 0,
                            json: void 0,
                            text: o,
                        };
                    else if (null != a)
                        return {
                            formMethod: t,
                            formAction: r,
                            formEncType: n,
                            formData: a,
                            json: void 0,
                            text: void 0,
                        };
                    else if (void 0 !== i)
                        return {
                            formMethod: t,
                            formAction: r,
                            formEncType: n,
                            formData: void 0,
                            json: i,
                            text: void 0,
                        };
                }
            }
            function eN(e, t) {
                return t
                    ? {
                          state: "loading",
                          location: e,
                          formMethod: t.formMethod,
                          formAction: t.formAction,
                          formEncType: t.formEncType,
                          formData: t.formData,
                          json: t.json,
                          text: t.text,
                      }
                    : {
                          state: "loading",
                          location: e,
                          formMethod: void 0,
                          formAction: void 0,
                          formEncType: void 0,
                          formData: void 0,
                          json: void 0,
                          text: void 0,
                      };
            }
            function eB(e, t) {
                return e
                    ? {
                          state: "loading",
                          formMethod: e.formMethod,
                          formAction: e.formAction,
                          formEncType: e.formEncType,
                          formData: e.formData,
                          json: e.json,
                          text: e.text,
                          data: t,
                      }
                    : {
                          state: "loading",
                          formMethod: void 0,
                          formAction: void 0,
                          formEncType: void 0,
                          formData: void 0,
                          json: void 0,
                          text: void 0,
                          data: t,
                      };
            }
            function e_(e) {
                return {
                    state: "idle",
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                    data: e,
                };
            }
            var eW = o.createContext(null);
            eW.displayName = "DataRouter";
            var eU = o.createContext(null);
            eU.displayName = "DataRouterState";
            var eF = o.createContext({ isTransitioning: !1 });
            eF.displayName = "ViewTransition";
            var eH = o.createContext(new Map());
            ((eH.displayName = "Fetchers"),
                (o.createContext(null).displayName = "Await"));
            var eY = o.createContext(null);
            eY.displayName = "Navigation";
            var eq = o.createContext(null);
            eq.displayName = "Location";
            var eG = o.createContext({
                outlet: null,
                matches: [],
                isDataRoute: !1,
            });
            eG.displayName = "Route";
            var eJ = o.createContext(null);
            function eV() {
                return null != o.useContext(eq);
            }
            function eX() {
                return (
                    c(
                        eV(),
                        "useLocation() may be used only in the context of a <Router> component."
                    ),
                    o.useContext(eq).location
                );
            }
            function eK() {
                return o.useContext(eq).navigationType;
            }
            function eZ(e) {
                c(
                    eV(),
                    "useMatch() may be used only in the context of a <Router> component."
                );
                let { pathname: t } = eX();
                return o.useMemo(() => L(e, k(t)), [t, e]);
            }
            eJ.displayName = "RouteError";
            var eQ =
                "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
            function e0(e) {
                o.useContext(eY).static || o.useLayoutEffect(e);
            }
            function e1() {
                let { isDataRoute: e } = o.useContext(eG);
                return e
                    ? (function () {
                          let { router: e } = tt("useNavigate"),
                              t = tn("useNavigate"),
                              r = o.useRef(!1);
                          return (
                              e0(() => {
                                  r.current = !0;
                              }),
                              o.useCallback(
                                  async (n, o = {}) => {
                                      (d(r.current, eQ),
                                          r.current &&
                                              ("number" == typeof n
                                                  ? e.navigate(n)
                                                  : await e.navigate(n, {
                                                        fromRouteId: t,
                                                        ...o,
                                                    })));
                                  },
                                  [e, t]
                              )
                          );
                      })()
                    : (function () {
                          c(
                              eV(),
                              "useNavigate() may be used only in the context of a <Router> component."
                          );
                          let e = o.useContext(eW),
                              { basename: t, navigator: r } = o.useContext(eY),
                              { matches: n } = o.useContext(eG),
                              { pathname: a } = eX(),
                              i = JSON.stringify($(n)),
                              s = o.useRef(!1);
                          return (
                              e0(() => {
                                  s.current = !0;
                              }),
                              o.useCallback(
                                  (n, o = {}) => {
                                      if ((d(s.current, eQ), !s.current))
                                          return;
                                      if ("number" == typeof n)
                                          return void r.go(n);
                                      let l = j(
                                          n,
                                          JSON.parse(i),
                                          a,
                                          "path" === o.relative
                                      );
                                      (null == e &&
                                          "/" !== t &&
                                          (l.pathname =
                                              "/" === l.pathname
                                                  ? t
                                                  : z([t, l.pathname])),
                                          (o.replace ? r.replace : r.push)(
                                              l,
                                              o.state,
                                              o
                                          ));
                                  },
                                  [t, r, i, a, e]
                              )
                          );
                      })();
            }
            var e2 = o.createContext(null);
            function e4() {
                let { matches: e } = o.useContext(eG),
                    t = e[e.length - 1];
                return t ? t.params : {};
            }
            function e3(e, { relative: t } = {}) {
                let { matches: r } = o.useContext(eG),
                    { pathname: n } = eX(),
                    a = JSON.stringify($(r));
                return o.useMemo(
                    () => j(e, JSON.parse(a), n, "path" === t),
                    [e, a, n, t]
                );
            }
            function e5(e, t) {
                return e6(e, t);
            }
            function e6(e, t, r, n) {
                let a;
                c(
                    eV(),
                    "useRoutes() may be used only in the context of a <Router> component."
                );
                let { navigator: i } = o.useContext(eY),
                    { matches: s } = o.useContext(eG),
                    l = s[s.length - 1],
                    u = l ? l.params : {},
                    h = l ? l.pathname : "/",
                    p = l ? l.pathnameBase : "/",
                    f = l && l.route;
                {
                    let e = (f && f.path) || "";
                    th(
                        h,
                        !f || e.endsWith("*") || e.endsWith("*?"),
                        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${"/" === e ? "*" : `${e}/*`}">.`
                    );
                }
                let y = eX();
                if (t) {
                    let e = "string" == typeof t ? m(t) : t;
                    (c(
                        "/" === p || e.pathname?.startsWith(p),
                        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${e.pathname}" was given in the \`location\` prop.`
                    ),
                        (a = e));
                } else a = y;
                let g = a.pathname || "/",
                    v = g;
                if ("/" !== p) {
                    let e = p.replace(/^\//, "").split("/");
                    v =
                        "/" +
                        g
                            .replace(/^\//, "")
                            .split("/")
                            .slice(e.length)
                            .join("/");
                }
                let b = S(e, { pathname: v });
                (d(
                    f || null != b,
                    `No routes matched location "${a.pathname}${a.search}${a.hash}" `
                ),
                    d(
                        null == b ||
                            void 0 !== b[b.length - 1].route.element ||
                            void 0 !== b[b.length - 1].route.Component ||
                            void 0 !== b[b.length - 1].route.lazy,
                        `Matched leaf route at location "${a.pathname}${a.search}${a.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
                    ));
                let w = (function (e, t = [], r = null, n = null) {
                    if (null == e) {
                        if (!r) return null;
                        if (r.errors) e = r.matches;
                        else {
                            if (
                                0 !== t.length ||
                                r.initialized ||
                                !(r.matches.length > 0)
                            )
                                return null;
                            e = r.matches;
                        }
                    }
                    let a = e,
                        i = r?.errors;
                    if (null != i) {
                        let e = a.findIndex(
                            (e) => e.route.id && i?.[e.route.id] !== void 0
                        );
                        (c(
                            e >= 0,
                            `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`
                        ),
                            (a = a.slice(0, Math.min(a.length, e + 1))));
                    }
                    let s = !1,
                        l = -1;
                    if (r)
                        for (let e = 0; e < a.length; e++) {
                            let t = a[e];
                            if (
                                ((t.route.HydrateFallback ||
                                    t.route.hydrateFallbackElement) &&
                                    (l = e),
                                t.route.id)
                            ) {
                                let { loaderData: e, errors: n } = r,
                                    o =
                                        t.route.loader &&
                                        !e.hasOwnProperty(t.route.id) &&
                                        (!n || void 0 === n[t.route.id]);
                                if (t.route.lazy || o) {
                                    ((s = !0),
                                        (a =
                                            l >= 0
                                                ? a.slice(0, l + 1)
                                                : [a[0]]));
                                    break;
                                }
                            }
                        }
                    return a.reduceRight((e, n, u) => {
                        let c,
                            d = !1,
                            h = null,
                            p = null;
                        r &&
                            ((c = i && n.route.id ? i[n.route.id] : void 0),
                            (h = n.route.errorElement || e9),
                            s &&
                                (l < 0 && 0 === u
                                    ? (th(
                                          "route-fallback",
                                          !1,
                                          "No `HydrateFallback` element provided to render during initial hydration"
                                      ),
                                      (d = !0),
                                      (p = null))
                                    : l === u &&
                                      ((d = !0),
                                      (p =
                                          n.route.hydrateFallbackElement ||
                                          null))));
                        let f = t.concat(a.slice(0, u + 1)),
                            m = () => {
                                let t;
                                return (
                                    (t = c
                                        ? h
                                        : d
                                          ? p
                                          : n.route.Component
                                            ? o.createElement(
                                                  n.route.Component,
                                                  null
                                              )
                                            : n.route.element
                                              ? n.route.element
                                              : e),
                                    o.createElement(e7, {
                                        match: n,
                                        routeContext: {
                                            outlet: e,
                                            matches: f,
                                            isDataRoute: null != r,
                                        },
                                        children: t,
                                    })
                                );
                            };
                        return r &&
                            (n.route.ErrorBoundary ||
                                n.route.errorElement ||
                                0 === u)
                            ? o.createElement(e8, {
                                  location: r.location,
                                  revalidation: r.revalidation,
                                  component: h,
                                  error: c,
                                  children: m(),
                                  routeContext: {
                                      outlet: null,
                                      matches: f,
                                      isDataRoute: !0,
                                  },
                              })
                            : m();
                    }, null);
                })(
                    b &&
                        b.map((e) =>
                            Object.assign({}, e, {
                                params: Object.assign({}, u, e.params),
                                pathname: z([
                                    p,
                                    i.encodeLocation
                                        ? i.encodeLocation(e.pathname).pathname
                                        : e.pathname,
                                ]),
                                pathnameBase:
                                    "/" === e.pathnameBase
                                        ? p
                                        : z([
                                              p,
                                              i.encodeLocation
                                                  ? i.encodeLocation(
                                                        e.pathnameBase
                                                    ).pathname
                                                  : e.pathnameBase,
                                          ]),
                            })
                        ),
                    s,
                    r,
                    n
                );
                return t && w
                    ? o.createElement(
                          eq.Provider,
                          {
                              value: {
                                  location: {
                                      pathname: "/",
                                      search: "",
                                      hash: "",
                                      state: null,
                                      key: "default",
                                      ...a,
                                  },
                                  navigationType: "POP",
                              },
                          },
                          w
                      )
                    : w;
            }
            var e9 = o.createElement(function () {
                    let e = tl(),
                        t = _(e)
                            ? `${e.status} ${e.statusText}`
                            : e instanceof Error
                              ? e.message
                              : JSON.stringify(e),
                        r = e instanceof Error ? e.stack : null,
                        n = "rgba(200,200,200, 0.5)",
                        a = { padding: "2px 4px", backgroundColor: n },
                        i = null;
                    return (
                        console.error(
                            "Error handled by React Router default ErrorBoundary:",
                            e
                        ),
                        (i = o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(
                                "p",
                                null,
                                "\u{1F4BF} Hey developer \u{1F44B}"
                            ),
                            o.createElement(
                                "p",
                                null,
                                "You can provide a way better UX than this when your app throws errors by providing your own ",
                                o.createElement(
                                    "code",
                                    { style: a },
                                    "ErrorBoundary"
                                ),
                                " or",
                                " ",
                                o.createElement(
                                    "code",
                                    { style: a },
                                    "errorElement"
                                ),
                                " prop on your route."
                            )
                        )),
                        o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(
                                "h2",
                                null,
                                "Unexpected Application Error!"
                            ),
                            o.createElement(
                                "h3",
                                { style: { fontStyle: "italic" } },
                                t
                            ),
                            r
                                ? o.createElement(
                                      "pre",
                                      {
                                          style: {
                                              padding: "0.5rem",
                                              backgroundColor: n,
                                          },
                                      },
                                      r
                                  )
                                : null,
                            i
                        )
                    );
                }, null),
                e8 = class extends o.Component {
                    constructor(e) {
                        (super(e),
                            (this.state = {
                                location: e.location,
                                revalidation: e.revalidation,
                                error: e.error,
                            }));
                    }
                    static getDerivedStateFromError(e) {
                        return { error: e };
                    }
                    static getDerivedStateFromProps(e, t) {
                        return t.location !== e.location ||
                            ("idle" !== t.revalidation &&
                                "idle" === e.revalidation)
                            ? {
                                  error: e.error,
                                  location: e.location,
                                  revalidation: e.revalidation,
                              }
                            : {
                                  error: void 0 !== e.error ? e.error : t.error,
                                  location: t.location,
                                  revalidation:
                                      e.revalidation || t.revalidation,
                              };
                    }
                    componentDidCatch(e, t) {
                        console.error(
                            "React Router caught the following error during render",
                            e,
                            t
                        );
                    }
                    render() {
                        return void 0 !== this.state.error
                            ? o.createElement(
                                  eG.Provider,
                                  { value: this.props.routeContext },
                                  o.createElement(eJ.Provider, {
                                      value: this.state.error,
                                      children: this.props.component,
                                  })
                              )
                            : this.props.children;
                    }
                };
            function e7({ routeContext: e, match: t, children: r }) {
                let n = o.useContext(eW);
                return (
                    n &&
                        n.static &&
                        n.staticContext &&
                        (t.route.errorElement || t.route.ErrorBoundary) &&
                        (n.staticContext._deepestRenderedBoundaryId =
                            t.route.id),
                    o.createElement(eG.Provider, { value: e }, r)
                );
            }
            function te(e) {
                return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
            }
            function tt(e) {
                let t = o.useContext(eW);
                return (c(t, te(e)), t);
            }
            function tr(e) {
                let t = o.useContext(eU);
                return (c(t, te(e)), t);
            }
            function tn(e) {
                let t,
                    r = (c((t = o.useContext(eG)), te(e)), t),
                    n = r.matches[r.matches.length - 1];
                return (
                    c(
                        n.route.id,
                        `${e} can only be used on routes that contain a unique "id"`
                    ),
                    n.route.id
                );
            }
            function to() {
                return tr("useNavigation").navigation;
            }
            function ta() {
                let { matches: e, loaderData: t } = tr("useMatches");
                return o.useMemo(() => e.map((e) => E(e, t)), [e, t]);
            }
            function ti() {
                let e = tr("useLoaderData"),
                    t = tn("useLoaderData");
                return e.loaderData[t];
            }
            function ts(e) {
                return tr("useRouteLoaderData").loaderData[e];
            }
            function tl() {
                let e = o.useContext(eJ),
                    t = tr("useRouteError"),
                    r = tn("useRouteError");
                return void 0 !== e ? e : t.errors?.[r];
            }
            var tu = 0;
            function tc(e) {
                let { router: t, basename: r } = tt("useBlocker"),
                    n = tr("useBlocker"),
                    [a, i] = o.useState(""),
                    s = o.useCallback(
                        (t) => {
                            if ("function" != typeof e) return !!e;
                            if ("/" === r) return e(t);
                            let {
                                currentLocation: n,
                                nextLocation: o,
                                historyAction: a,
                            } = t;
                            return e({
                                currentLocation: {
                                    ...n,
                                    pathname: T(n.pathname, r) || n.pathname,
                                },
                                nextLocation: {
                                    ...o,
                                    pathname: T(o.pathname, r) || o.pathname,
                                },
                                historyAction: a,
                            });
                        },
                        [r, e]
                    );
                return (
                    o.useEffect(() => {
                        let e = String(++tu);
                        return (i(e), () => t.deleteBlocker(e));
                    }, [t]),
                    o.useEffect(() => {
                        "" !== a && t.getBlocker(a, s);
                    }, [t, a, s]),
                    a && n.blockers.has(a) ? n.blockers.get(a) : J
                );
            }
            var td = {};
            function th(e, t, r) {
                t || td[e] || ((td[e] = !0), d(!1, r));
            }
            var tp = {};
            function tf(e, t) {
                e || tp[t] || ((tp[t] = !0), console.warn(t));
            }
            function tm(e) {
                let t = {
                    hasErrorBoundary:
                        e.hasErrorBoundary ||
                        null != e.ErrorBoundary ||
                        null != e.errorElement,
                };
                return (
                    e.Component &&
                        (e.element &&
                            d(
                                !1,
                                "You should not include both `Component` and `element` on your route - `Component` will be used."
                            ),
                        Object.assign(t, {
                            element: o.createElement(e.Component),
                            Component: void 0,
                        })),
                    e.HydrateFallback &&
                        (e.hydrateFallbackElement &&
                            d(
                                !1,
                                "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
                            ),
                        Object.assign(t, {
                            hydrateFallbackElement: o.createElement(
                                e.HydrateFallback
                            ),
                            HydrateFallback: void 0,
                        })),
                    e.ErrorBoundary &&
                        (e.errorElement &&
                            d(
                                !1,
                                "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
                            ),
                        Object.assign(t, {
                            errorElement: o.createElement(e.ErrorBoundary),
                            ErrorBoundary: void 0,
                        })),
                    t
                );
            }
            var ty = ["HydrateFallback", "hydrateFallbackElement"],
                tg = class {
                    constructor() {
                        ((this.status = "pending"),
                            (this.promise = new Promise((e, t) => {
                                ((this.resolve = (t) => {
                                    "pending" === this.status &&
                                        ((this.status = "resolved"), e(t));
                                }),
                                    (this.reject = (e) => {
                                        "pending" === this.status &&
                                            ((this.status = "rejected"), t(e));
                                    }));
                            })));
                    }
                };
            function tv({ router: e, flushSync: t }) {
                let [r, n] = o.useState(e.state),
                    [a, i] = o.useState(),
                    [s, l] = o.useState({ isTransitioning: !1 }),
                    [u, c] = o.useState(),
                    [d, h] = o.useState(),
                    [p, f] = o.useState(),
                    m = o.useRef(new Map()),
                    y = o.useCallback(
                        (
                            r,
                            {
                                deletedFetchers: a,
                                flushSync: s,
                                viewTransitionOpts: p,
                            }
                        ) => {
                            (r.fetchers.forEach((e, t) => {
                                void 0 !== e.data && m.current.set(t, e.data);
                            }),
                                a.forEach((e) => m.current.delete(e)),
                                tf(
                                    !1 === s || null != t,
                                    'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
                                ));
                            let y =
                                null != e.window &&
                                null != e.window.document &&
                                "function" ==
                                    typeof e.window.document
                                        .startViewTransition;
                            if (
                                (tf(
                                    null == p || y,
                                    "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
                                ),
                                !p || !y)
                            )
                                return void (t && s
                                    ? t(() => n(r))
                                    : o.startTransition(() => n(r)));
                            if (t && s) {
                                t(() => {
                                    (d &&
                                        (u && u.resolve(), d.skipTransition()),
                                        l({
                                            isTransitioning: !0,
                                            flushSync: !0,
                                            currentLocation: p.currentLocation,
                                            nextLocation: p.nextLocation,
                                        }));
                                });
                                let o = e.window.document.startViewTransition(
                                    () => {
                                        t(() => n(r));
                                    }
                                );
                                (o.finished.finally(() => {
                                    t(() => {
                                        (c(void 0),
                                            h(void 0),
                                            i(void 0),
                                            l({ isTransitioning: !1 }));
                                    });
                                }),
                                    t(() => h(o)));
                                return;
                            }
                            d
                                ? (u && u.resolve(),
                                  d.skipTransition(),
                                  f({
                                      state: r,
                                      currentLocation: p.currentLocation,
                                      nextLocation: p.nextLocation,
                                  }))
                                : (i(r),
                                  l({
                                      isTransitioning: !0,
                                      flushSync: !1,
                                      currentLocation: p.currentLocation,
                                      nextLocation: p.nextLocation,
                                  }));
                        },
                        [e.window, t, d, u]
                    );
                (o.useLayoutEffect(() => e.subscribe(y), [e, y]),
                    o.useEffect(() => {
                        s.isTransitioning && !s.flushSync && c(new tg());
                    }, [s]),
                    o.useEffect(() => {
                        if (u && a && e.window) {
                            let t = u.promise,
                                r = e.window.document.startViewTransition(
                                    async () => {
                                        (o.startTransition(() => n(a)),
                                            await t);
                                    }
                                );
                            (r.finished.finally(() => {
                                (c(void 0),
                                    h(void 0),
                                    i(void 0),
                                    l({ isTransitioning: !1 }));
                            }),
                                h(r));
                        }
                    }, [a, u, e.window]),
                    o.useEffect(() => {
                        u &&
                            a &&
                            r.location.key === a.location.key &&
                            u.resolve();
                    }, [u, d, r.location, a]),
                    o.useEffect(() => {
                        !s.isTransitioning &&
                            p &&
                            (i(p.state),
                            l({
                                isTransitioning: !0,
                                flushSync: !1,
                                currentLocation: p.currentLocation,
                                nextLocation: p.nextLocation,
                            }),
                            f(void 0));
                    }, [s.isTransitioning, p]));
                let g = o.useMemo(
                        () => ({
                            createHref: e.createHref,
                            encodeLocation: e.encodeLocation,
                            go: (t) => e.navigate(t),
                            push: (t, r, n) =>
                                e.navigate(t, {
                                    state: r,
                                    preventScrollReset: n?.preventScrollReset,
                                }),
                            replace: (t, r, n) =>
                                e.navigate(t, {
                                    replace: !0,
                                    state: r,
                                    preventScrollReset: n?.preventScrollReset,
                                }),
                        }),
                        [e]
                    ),
                    v = e.basename || "/",
                    b = o.useMemo(
                        () => ({
                            router: e,
                            navigator: g,
                            static: !1,
                            basename: v,
                        }),
                        [e, g, v]
                    );
                return o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                        eW.Provider,
                        { value: b },
                        o.createElement(
                            eU.Provider,
                            { value: r },
                            o.createElement(
                                eH.Provider,
                                { value: m.current },
                                o.createElement(
                                    eF.Provider,
                                    { value: s },
                                    o.createElement(
                                        tE,
                                        {
                                            basename: v,
                                            location: r.location,
                                            navigationType: r.historyAction,
                                            navigator: g,
                                        },
                                        o.createElement(tb, {
                                            routes: e.routes,
                                            future: e.future,
                                            state: r,
                                        })
                                    )
                                )
                            )
                        )
                    ),
                    null
                );
            }
            var tb = o.memo(function ({ routes: e, future: t, state: r }) {
                return e6(e, void 0, r, t);
            });
            function tw({ to: e, replace: t, state: r, relative: n }) {
                c(
                    eV(),
                    "<Navigate> may be used only in the context of a <Router> component."
                );
                let { static: a } = o.useContext(eY);
                d(
                    !a,
                    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
                );
                let { matches: i } = o.useContext(eG),
                    { pathname: s } = eX(),
                    l = e1(),
                    u = JSON.stringify(j(e, $(i), s, "path" === n));
                return (
                    o.useEffect(() => {
                        l(JSON.parse(u), { replace: t, state: r, relative: n });
                    }, [l, u, n, t, r]),
                    null
                );
            }
            function tS(e) {
                var t;
                let r;
                return (
                    (t = e.context),
                    (r = o.useContext(eG).outlet)
                        ? o.createElement(e2.Provider, { value: t }, r)
                        : r
                );
            }
            function tR(e) {
                c(
                    !1,
                    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
                );
            }
            function tE({
                basename: e = "/",
                children: t = null,
                location: r,
                navigationType: n = "POP",
                navigator: a,
                static: i = !1,
            }) {
                c(
                    !eV(),
                    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
                );
                let s = e.replace(/^\/*/, "/"),
                    l = o.useMemo(
                        () => ({
                            basename: s,
                            navigator: a,
                            static: i,
                            future: {},
                        }),
                        [s, a, i]
                    );
                "string" == typeof r && (r = m(r));
                let {
                        pathname: u = "/",
                        search: h = "",
                        hash: p = "",
                        state: f = null,
                        key: y = "default",
                    } = r,
                    g = o.useMemo(() => {
                        let e = T(u, s);
                        return null == e
                            ? null
                            : {
                                  location: {
                                      pathname: e,
                                      search: h,
                                      hash: p,
                                      state: f,
                                      key: y,
                                  },
                                  navigationType: n,
                              };
                    }, [s, u, h, p, f, y, n]);
                return (d(
                    null != g,
                    `<Router basename="${s}"> is not able to match the URL "${u}${h}${p}" because it does not start with the basename, so the <Router> won't render anything.`
                ),
                null == g)
                    ? null
                    : o.createElement(
                          eY.Provider,
                          { value: l },
                          o.createElement(eq.Provider, {
                              children: t,
                              value: g,
                          })
                      );
            }
            function tx({ children: e, location: t }) {
                return e6(
                    (function e(t, r = []) {
                        let n = [];
                        return (
                            o.Children.forEach(t, (t, a) => {
                                if (!o.isValidElement(t)) return;
                                let i = [...r, a];
                                if (t.type === o.Fragment)
                                    return void n.push.apply(
                                        n,
                                        e(t.props.children, i)
                                    );
                                (c(
                                    t.type === tR,
                                    `[${"string" == typeof t.type ? t.type : t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
                                ),
                                    c(
                                        !t.props.index || !t.props.children,
                                        "An index route cannot have child routes."
                                    ));
                                let s = {
                                    id: t.props.id || i.join("-"),
                                    caseSensitive: t.props.caseSensitive,
                                    element: t.props.element,
                                    Component: t.props.Component,
                                    index: t.props.index,
                                    path: t.props.path,
                                    loader: t.props.loader,
                                    action: t.props.action,
                                    hydrateFallbackElement:
                                        t.props.hydrateFallbackElement,
                                    HydrateFallback: t.props.HydrateFallback,
                                    errorElement: t.props.errorElement,
                                    ErrorBoundary: t.props.ErrorBoundary,
                                    hasErrorBoundary:
                                        !0 === t.props.hasErrorBoundary ||
                                        null != t.props.ErrorBoundary ||
                                        null != t.props.errorElement,
                                    shouldRevalidate: t.props.shouldRevalidate,
                                    handle: t.props.handle,
                                    lazy: t.props.lazy,
                                };
                                (t.props.children &&
                                    (s.children = e(t.props.children, i)),
                                    n.push(s));
                            }),
                            n
                        );
                    })(e),
                    t
                );
            }
            o.Component;
            var tC = "get",
                tP = "application/x-www-form-urlencoded";
            function tL(e) {
                return null != e && "string" == typeof e.tagName;
            }
            function tk(e = "") {
                return new URLSearchParams(
                    "string" == typeof e ||
                    Array.isArray(e) ||
                    e instanceof URLSearchParams
                        ? e
                        : Object.keys(e).reduce((t, r) => {
                              let n = e[r];
                              return t.concat(
                                  Array.isArray(n)
                                      ? n.map((e) => [r, e])
                                      : [[r, n]]
                              );
                          }, [])
                );
            }
            var tT = null,
                tA = new Set([
                    "application/x-www-form-urlencoded",
                    "multipart/form-data",
                    "text/plain",
                ]);
            function tO(e) {
                return null == e || tA.has(e)
                    ? e
                    : (d(
                          !1,
                          `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tP}"`
                      ),
                      null);
            }
            function tM(e, t) {
                if (!1 === e || null == e) throw Error(t);
            }
            async function t$(e, t) {
                if (e.id in t) return t[e.id];
                try {
                    let r = await import(e.module);
                    return ((t[e.id] = r), r);
                } catch (t) {
                    return (
                        console.error(
                            `Error loading route module \`${e.module}\`, reloading page...`
                        ),
                        console.error(t),
                        window.__reactRouterContext &&
                            window.__reactRouterContext.isSpaMode,
                        window.location.reload(),
                        new Promise(() => {})
                    );
                }
            }
            function tj(e) {
                return (
                    null != e &&
                    (null == e.href
                        ? "preload" === e.rel &&
                          "string" == typeof e.imageSrcSet &&
                          "string" == typeof e.imageSizes
                        : "string" == typeof e.rel && "string" == typeof e.href)
                );
            }
            async function tz(e, t, r) {
                var n, o;
                let a, i;
                return (
                    (n = (
                        await Promise.all(
                            e.map(async (e) => {
                                let n = t.routes[e.route.id];
                                if (n) {
                                    let e = await t$(n, r);
                                    return e.links ? e.links() : [];
                                }
                                return [];
                            })
                        )
                    )
                        .flat(1)
                        .filter(tj)
                        .filter(
                            (e) => "stylesheet" === e.rel || "preload" === e.rel
                        )
                        .map((e) =>
                            "stylesheet" === e.rel
                                ? { ...e, rel: "prefetch", as: "style" }
                                : { ...e, rel: "prefetch" }
                        )),
                    (a = new Set()),
                    (i = new Set(void 0)),
                    n.reduce((e, t) => {
                        if (
                            o &&
                            (null == t || "string" != typeof t.page) &&
                            "script" === t.as &&
                            t.href &&
                            i.has(t.href)
                        )
                            return e;
                        let r = JSON.stringify(
                            (function (e) {
                                let t = {};
                                for (let r of Object.keys(e).sort())
                                    t[r] = e[r];
                                return t;
                            })(t)
                        );
                        return (
                            a.has(r) || (a.add(r), e.push({ key: r, link: t })),
                            e
                        );
                    }, [])
                );
            }
            function tD(e, t, r, n, o, a) {
                let i = (e, t) => !r[t] || e.route.id !== r[t].route.id,
                    s = (e, t) =>
                        r[t].pathname !== e.pathname ||
                        (r[t].route.path?.endsWith("*") &&
                            r[t].params["*"] !== e.params["*"]);
                return "assets" === a
                    ? t.filter((e, t) => i(e, t) || s(e, t))
                    : "data" === a
                      ? t.filter((t, a) => {
                            let l = n.routes[t.route.id];
                            if (!l || !l.hasLoader) return !1;
                            if (i(t, a) || s(t, a)) return !0;
                            if (t.route.shouldRevalidate) {
                                let n = t.route.shouldRevalidate({
                                    currentUrl: new URL(
                                        o.pathname + o.search + o.hash,
                                        window.origin
                                    ),
                                    currentParams: r[0]?.params || {},
                                    nextUrl: new URL(e, window.origin),
                                    nextParams: t.params,
                                    defaultShouldRevalidate: !0,
                                });
                                if ("boolean" == typeof n) return n;
                            }
                            return !0;
                        })
                      : [];
            }
            function tI(e, t, { includeHydrateFallback: r } = {}) {
                return [
                    ...new Set(
                        e
                            .map((e) => {
                                let n = t.routes[e.route.id];
                                if (!n) return [];
                                let o = [n.module];
                                return (
                                    n.clientActionModule &&
                                        (o = o.concat(n.clientActionModule)),
                                    n.clientLoaderModule &&
                                        (o = o.concat(n.clientLoaderModule)),
                                    r &&
                                        n.hydrateFallbackModule &&
                                        (o = o.concat(n.hydrateFallbackModule)),
                                    n.imports && (o = o.concat(n.imports)),
                                    o
                                );
                            })
                            .flat(1)
                    ),
                ];
            }
            (Object.getOwnPropertyNames(Object.prototype).sort().join("\0"),
                "undefined" != typeof window && window,
                Symbol("SingleFetchRedirect"));
            var tN = new Set([100, 101, 204, 205]);
            function tB() {
                let e = o.useContext(eW);
                return (
                    tM(
                        e,
                        "You must render this element inside a <DataRouterContext.Provider> element"
                    ),
                    e
                );
            }
            function t_() {
                let e = o.useContext(eU);
                return (
                    tM(
                        e,
                        "You must render this element inside a <DataRouterStateContext.Provider> element"
                    ),
                    e
                );
            }
            o.Component;
            var tW = o.createContext(void 0);
            function tU() {
                let e = o.useContext(tW);
                return (
                    tM(
                        e,
                        "You must render this element inside a <HydratedRouter> element"
                    ),
                    e
                );
            }
            function tF(e, t) {
                return (r) => {
                    (e && e(r), r.defaultPrevented || t(r));
                };
            }
            function tH({ page: e, ...t }) {
                let { router: r } = tB(),
                    n = o.useMemo(
                        () => S(r.routes, e, r.basename),
                        [r.routes, e, r.basename]
                    );
                return n
                    ? o.createElement(tY, { page: e, matches: n, ...t })
                    : null;
            }
            function tY({ page: e, matches: t, ...r }) {
                let n = eX(),
                    { manifest: a, routeModules: i } = tU(),
                    { basename: s } = tB(),
                    { loaderData: l, matches: u } = t_(),
                    c = o.useMemo(
                        () => tD(e, t, u, a, n, "data"),
                        [e, t, u, a, n]
                    ),
                    d = o.useMemo(
                        () => tD(e, t, u, a, n, "assets"),
                        [e, t, u, a, n]
                    ),
                    h = o.useMemo(() => {
                        let r;
                        if (e === n.pathname + n.search + n.hash) return [];
                        let o = new Set(),
                            u = !1;
                        if (
                            (t.forEach((e) => {
                                let t = a.routes[e.route.id];
                                t &&
                                    t.hasLoader &&
                                    ((!c.some(
                                        (t) => t.route.id === e.route.id
                                    ) &&
                                        e.route.id in l &&
                                        i[e.route.id]?.shouldRevalidate) ||
                                    t.hasClientLoader
                                        ? (u = !0)
                                        : o.add(e.route.id));
                            }),
                            0 === o.size)
                        )
                            return [];
                        let d =
                            ("/" ===
                            (r =
                                "string" == typeof e
                                    ? new URL(
                                          e,
                                          "undefined" == typeof window
                                              ? "server://singlefetch/"
                                              : window.location.origin
                                      )
                                    : e).pathname
                                ? (r.pathname = "_root.data")
                                : s && "/" === T(r.pathname, s)
                                  ? (r.pathname = `${s.replace(/\/$/, "")}/_root.data`)
                                  : (r.pathname = `${r.pathname.replace(/\/$/, "")}.data`),
                            r);
                        return (
                            u &&
                                o.size > 0 &&
                                d.searchParams.set(
                                    "_routes",
                                    t
                                        .filter((e) => o.has(e.route.id))
                                        .map((e) => e.route.id)
                                        .join(",")
                                ),
                            [d.pathname + d.search]
                        );
                    }, [s, l, n, a, c, t, e, i]),
                    p = o.useMemo(() => tI(d, a), [d, a]),
                    f = (function (e) {
                        let { manifest: t, routeModules: r } = tU(),
                            [n, a] = o.useState([]);
                        return (
                            o.useEffect(() => {
                                let n = !1;
                                return (
                                    tz(e, t, r).then((e) => {
                                        n || a(e);
                                    }),
                                    () => {
                                        n = !0;
                                    }
                                );
                            }, [e, t, r]),
                            n
                        );
                    })(d);
                return o.createElement(
                    o.Fragment,
                    null,
                    h.map((e) =>
                        o.createElement("link", {
                            key: e,
                            rel: "prefetch",
                            as: "fetch",
                            href: e,
                            ...r,
                        })
                    ),
                    p.map((e) =>
                        o.createElement("link", {
                            key: e,
                            rel: "modulepreload",
                            href: e,
                            ...r,
                        })
                    ),
                    f.map(({ key: e, link: t }) =>
                        o.createElement("link", { key: e, ...t })
                    )
                );
            }
            tW.displayName = "FrameworkContext";
            var tq =
                "undefined" != typeof window &&
                void 0 !== window.document &&
                void 0 !== window.document.createElement;
            try {
                tq && (window.__reactRouterVersion = "7.6.3");
            } catch (e) {}
            function tG(e, t) {
                let r;
                return (function (e) {
                    let t,
                        r,
                        n,
                        o,
                        a,
                        i = e.window
                            ? e.window
                            : "undefined" != typeof window
                              ? window
                              : void 0,
                        s =
                            void 0 !== i &&
                            void 0 !== i.document &&
                            void 0 !== i.document.createElement;
                    c(
                        e.routes.length > 0,
                        "You must provide a non-empty routes array to createRouter"
                    );
                    let l = e.hydrationRouteProperties || [],
                        u = e.mapRouteProperties || X,
                        h = {},
                        f = w(e.routes, u, void 0, h),
                        m = e.basename || "/",
                        v = e.dataStrategy || eu,
                        b = { unstable_middleware: !1, ...e.future },
                        x = null,
                        C = new Set(),
                        P = null,
                        L = null,
                        k = null,
                        A = null != e.hydrationData,
                        O = S(f, e.history.location, m),
                        M = !1,
                        $ = null;
                    if (null != O || e.patchRoutesOnNavigation)
                        if (
                            (O &&
                                !e.hydrationData &&
                                e8(O, f, e.history.location.pathname).active &&
                                (O = null),
                            O)
                        )
                            if (O.some((e) => e.route.lazy)) r = !1;
                            else if (O.some((e) => e.route.loader)) {
                                let t = e.hydrationData
                                        ? e.hydrationData.loaderData
                                        : null,
                                    n = e.hydrationData
                                        ? e.hydrationData.errors
                                        : null;
                                if (n) {
                                    let e = O.findIndex(
                                        (e) => void 0 !== n[e.route.id]
                                    );
                                    r = O.slice(0, e + 1).every(
                                        (e) => !er(e.route, t, n)
                                    );
                                } else r = O.every((e) => !er(e.route, t, n));
                            } else r = !0;
                        else {
                            ((r = !1), (O = []));
                            let t = e8(null, f, e.history.location.pathname);
                            t.active &&
                                t.matches &&
                                ((M = !0), (O = t.matches));
                        }
                    else {
                        let t = eL(404, {
                                pathname: e.history.location.pathname,
                            }),
                            { matches: n, route: o } = eP(f);
                        ((r = !0), (O = n), ($ = { [o.id]: t }));
                    }
                    let j = {
                            historyAction: e.history.action,
                            location: e.history.location,
                            matches: O,
                            initialized: r,
                            navigation: q,
                            restoreScrollPosition:
                                null == e.hydrationData && null,
                            preventScrollReset: !1,
                            revalidation: "idle",
                            loaderData:
                                (e.hydrationData &&
                                    e.hydrationData.loaderData) ||
                                {},
                            actionData:
                                (e.hydrationData &&
                                    e.hydrationData.actionData) ||
                                null,
                            errors:
                                (e.hydrationData && e.hydrationData.errors) ||
                                $,
                            fetchers: new Map(),
                            blockers: new Map(),
                        },
                        z = "POP",
                        D = !1,
                        I = !1,
                        N = new Map(),
                        B = null,
                        W = !1,
                        U = !1,
                        F = new Set(),
                        Z = new Map(),
                        en = 0,
                        ea = -1,
                        ei = new Map(),
                        es = new Set(),
                        el = new Map(),
                        ec = new Map(),
                        ed = new Set(),
                        eh = new Map(),
                        ep = null;
                    function ey(e, t = {}) {
                        j = { ...j, ...e };
                        let r = [],
                            n = [];
                        (j.fetchers.forEach((e, t) => {
                            "idle" === e.state &&
                                (ed.has(t) ? r.push(t) : n.push(t));
                        }),
                            ed.forEach((e) => {
                                j.fetchers.has(e) || Z.has(e) || r.push(e);
                            }),
                            [...C].forEach((e) =>
                                e(j, {
                                    deletedFetchers: r,
                                    viewTransitionOpts: t.viewTransitionOpts,
                                    flushSync: !0 === t.flushSync,
                                })
                            ),
                            r.forEach((e) => eK(e)),
                            n.forEach((e) => j.fetchers.delete(e)));
                    }
                    function ew(r, n, { flushSync: o } = {}) {
                        let a,
                            i,
                            s =
                                null != j.actionData &&
                                null != j.navigation.formMethod &&
                                ej(j.navigation.formMethod) &&
                                "loading" === j.navigation.state &&
                                r.state?._isRedirect !== !0;
                        a = n.actionData
                            ? Object.keys(n.actionData).length > 0
                                ? n.actionData
                                : null
                            : s
                              ? j.actionData
                              : null;
                        let l = n.loaderData
                                ? eE(
                                      j.loaderData,
                                      n.loaderData,
                                      n.matches || [],
                                      n.errors
                                  )
                                : j.loaderData,
                            u = j.blockers;
                        u.size > 0 &&
                            (u = new Map(u)).forEach((e, t) => u.set(t, J));
                        let c =
                            !0 === D ||
                            (null != j.navigation.formMethod &&
                                ej(j.navigation.formMethod) &&
                                r.state?._isRedirect !== !0);
                        if (
                            (t && ((f = t), (t = void 0)),
                            W ||
                                "POP" === z ||
                                ("PUSH" === z
                                    ? e.history.push(r, r.state)
                                    : "REPLACE" === z &&
                                      e.history.replace(r, r.state)),
                            "POP" === z)
                        ) {
                            let e = N.get(j.location.pathname);
                            e && e.has(r.pathname)
                                ? (i = {
                                      currentLocation: j.location,
                                      nextLocation: r,
                                  })
                                : N.has(r.pathname) &&
                                  (i = {
                                      currentLocation: r,
                                      nextLocation: j.location,
                                  });
                        } else if (I) {
                            let e = N.get(j.location.pathname);
                            (e
                                ? e.add(r.pathname)
                                : ((e = new Set([r.pathname])),
                                  N.set(j.location.pathname, e)),
                                (i = {
                                    currentLocation: j.location,
                                    nextLocation: r,
                                }));
                        }
                        (ey(
                            {
                                ...n,
                                actionData: a,
                                loaderData: l,
                                historyAction: z,
                                location: r,
                                initialized: !0,
                                navigation: q,
                                revalidation: "idle",
                                restoreScrollPosition: e9(
                                    r,
                                    n.matches || j.matches
                                ),
                                preventScrollReset: c,
                                blockers: u,
                            },
                            { viewTransitionOpts: i, flushSync: !0 === o }
                        ),
                            (z = "POP"),
                            (D = !1),
                            (I = !1),
                            (W = !1),
                            (U = !1),
                            ep?.resolve(),
                            (ep = null));
                    }
                    async function eS(t, r) {
                        if ("number" == typeof t) return void e.history.go(t);
                        let {
                                path: n,
                                submission: o,
                                error: a,
                            } = ee(
                                !1,
                                Q(
                                    j.location,
                                    j.matches,
                                    m,
                                    t,
                                    r?.fromRouteId,
                                    r?.relative
                                ),
                                r
                            ),
                            i = j.location,
                            s = p(j.location, n, r && r.state);
                        s = { ...s, ...e.history.encodeLocation(s) };
                        let l = r && null != r.replace ? r.replace : void 0,
                            u = "PUSH";
                        !0 === l
                            ? (u = "REPLACE")
                            : !1 === l ||
                              (null != o &&
                                  ej(o.formMethod) &&
                                  o.formAction ===
                                      j.location.pathname + j.location.search &&
                                  (u = "REPLACE"));
                        let c =
                                r && "preventScrollReset" in r
                                    ? !0 === r.preventScrollReset
                                    : void 0,
                            d = !0 === (r && r.flushSync),
                            h = e3({
                                currentLocation: i,
                                nextLocation: s,
                                historyAction: u,
                            });
                        if (h)
                            return void e4(h, {
                                state: "blocked",
                                location: s,
                                proceed() {
                                    (e4(h, {
                                        state: "proceeding",
                                        proceed: void 0,
                                        reset: void 0,
                                        location: s,
                                    }),
                                        eS(t, r));
                                },
                                reset() {
                                    let e = new Map(j.blockers);
                                    (e.set(h, J), ey({ blockers: e }));
                                },
                            });
                        await eT(u, s, {
                            submission: o,
                            pendingError: a,
                            preventScrollReset: c,
                            replace: r && r.replace,
                            enableViewTransition: r && r.viewTransition,
                            flushSync: d,
                        });
                    }
                    async function eT(r, n, a) {
                        var i, s, l, u;
                        let c;
                        (o && o.abort(),
                            (o = null),
                            (z = r),
                            (W =
                                !0 === (a && a.startUninterruptedRevalidation)),
                            (i = j.location),
                            (s = j.matches),
                            P && k && (P[e6(i, s)] = k()),
                            (D = !0 === (a && a.preventScrollReset)),
                            (I = !0 === (a && a.enableViewTransition)));
                        let d = t || f,
                            h = a && a.overrideNavigation,
                            p =
                                a?.initialHydration &&
                                j.matches &&
                                j.matches.length > 0 &&
                                !M
                                    ? j.matches
                                    : S(d, n, m),
                            y = !0 === (a && a.flushSync);
                        if (
                            p &&
                            j.initialized &&
                            !U &&
                            ((l = j.location),
                            (u = n),
                            l.pathname === u.pathname &&
                                l.search === u.search &&
                                ("" === l.hash
                                    ? "" !== u.hash
                                    : l.hash === u.hash ||
                                      "" !== u.hash ||
                                      !1)) &&
                            !(a && a.submission && ej(a.submission.formMethod))
                        )
                            return void ew(n, { matches: p }, { flushSync: y });
                        let v = e8(p, d, n.pathname);
                        if ((v.active && v.matches && (p = v.matches), !p)) {
                            let {
                                error: e,
                                notFoundMatches: t,
                                route: r,
                            } = e5(n.pathname);
                            ew(
                                n,
                                {
                                    matches: t,
                                    loaderData: {},
                                    errors: { [r.id]: e },
                                },
                                { flushSync: y }
                            );
                            return;
                        }
                        o = new AbortController();
                        let b = eb(e.history, n, o.signal, a && a.submission),
                            w = new g(
                                e.unstable_getContext
                                    ? await e.unstable_getContext()
                                    : void 0
                            );
                        if (a && a.pendingError)
                            c = [
                                eC(p).route.id,
                                { type: "error", error: a.pendingError },
                            ];
                        else if (
                            a &&
                            a.submission &&
                            ej(a.submission.formMethod)
                        ) {
                            let t = await eM(
                                b,
                                n,
                                a.submission,
                                p,
                                w,
                                v.active,
                                a && !0 === a.initialHydration,
                                { replace: a.replace, flushSync: y }
                            );
                            if (t.shortCircuited) return;
                            if (t.pendingActionResult) {
                                let [e, r] = t.pendingActionResult;
                                if (
                                    eA(r) &&
                                    _(r.error) &&
                                    404 === r.error.status
                                ) {
                                    ((o = null),
                                        ew(n, {
                                            matches: t.matches,
                                            loaderData: {},
                                            errors: { [e]: r.error },
                                        }));
                                    return;
                                }
                            }
                            ((p = t.matches || p),
                                (c = t.pendingActionResult),
                                (h = eN(n, a.submission)),
                                (y = !1),
                                (v.active = !1),
                                (b = eb(e.history, b.url, b.signal)));
                        }
                        let {
                            shortCircuited: R,
                            matches: E,
                            loaderData: x,
                            errors: C,
                        } = await ez(
                            b,
                            n,
                            p,
                            w,
                            v.active,
                            h,
                            a && a.submission,
                            a && a.fetcherSubmission,
                            a && a.replace,
                            a && !0 === a.initialHydration,
                            y,
                            c
                        );
                        R ||
                            ((o = null),
                            ew(n, {
                                matches: E || p,
                                ...ex(c),
                                loaderData: x,
                                errors: C,
                            }));
                    }
                    async function eM(e, t, r, n, o, a, i, s = {}) {
                        var c;
                        let d;
                        if (
                            (eG(),
                            ey(
                                {
                                    navigation: {
                                        state: "submitting",
                                        location: t,
                                        formMethod: (c = r).formMethod,
                                        formAction: c.formAction,
                                        formEncType: c.formEncType,
                                        formData: c.formData,
                                        json: c.json,
                                        text: c.text,
                                    },
                                },
                                { flushSync: !0 === s.flushSync }
                            ),
                            a)
                        ) {
                            let r = await e7(n, t.pathname, e.signal);
                            if ("aborted" === r.type)
                                return { shortCircuited: !0 };
                            if ("error" === r.type) {
                                let e = eC(r.partialMatches).route.id;
                                return {
                                    matches: r.partialMatches,
                                    pendingActionResult: [
                                        e,
                                        { type: "error", error: r.error },
                                    ],
                                };
                            }
                            if (r.matches) n = r.matches;
                            else {
                                let {
                                    notFoundMatches: e,
                                    error: r,
                                    route: n,
                                } = e5(t.pathname);
                                return {
                                    matches: e,
                                    pendingActionResult: [
                                        n.id,
                                        { type: "error", error: r },
                                    ],
                                };
                            }
                        }
                        let p = eD(n, t);
                        if (p.route.action || p.route.lazy) {
                            let t = ef(u, h, e, n, p, i ? [] : l, o),
                                r = await eY(e, t, o, null);
                            if (!(d = r[p.route.id])) {
                                for (let e of n)
                                    if (r[e.route.id]) {
                                        d = r[e.route.id];
                                        break;
                                    }
                            }
                            if (e.signal.aborted) return { shortCircuited: !0 };
                        } else
                            d = {
                                type: "error",
                                error: eL(405, {
                                    method: e.method,
                                    pathname: t.pathname,
                                    routeId: p.route.id,
                                }),
                            };
                        if (eO(d)) {
                            let t;
                            return (
                                (t =
                                    s && null != s.replace
                                        ? s.replace
                                        : ev(
                                              d.response.headers.get(
                                                  "Location"
                                              ),
                                              new URL(e.url),
                                              m
                                          ) ===
                                          j.location.pathname +
                                              j.location.search),
                                await eH(e, d, !0, {
                                    submission: r,
                                    replace: t,
                                }),
                                { shortCircuited: !0 }
                            );
                        }
                        if (eA(d)) {
                            let e = eC(n, p.route.id);
                            return (
                                !0 !== (s && s.replace) && (z = "PUSH"),
                                {
                                    matches: n,
                                    pendingActionResult: [
                                        e.route.id,
                                        d,
                                        p.route.id,
                                    ],
                                }
                            );
                        }
                        return {
                            matches: n,
                            pendingActionResult: [p.route.id, d],
                        };
                    }
                    async function ez(r, n, a, i, s, c, d, p, y, g, v, b) {
                        let w = c || eN(n, d),
                            S = d || p || eI(w),
                            R = !W && !g;
                        if (s) {
                            if (R) {
                                let e = eW(b);
                                ey(
                                    {
                                        navigation: w,
                                        ...(void 0 !== e
                                            ? { actionData: e }
                                            : {}),
                                    },
                                    { flushSync: v }
                                );
                            }
                            let e = await e7(a, n.pathname, r.signal);
                            if ("aborted" === e.type)
                                return { shortCircuited: !0 };
                            if ("error" === e.type) {
                                let t = eC(e.partialMatches).route.id;
                                return {
                                    matches: e.partialMatches,
                                    loaderData: {},
                                    errors: { [t]: e.error },
                                };
                            }
                            if (e.matches) a = e.matches;
                            else {
                                let {
                                    error: e,
                                    notFoundMatches: t,
                                    route: r,
                                } = e5(n.pathname);
                                return {
                                    matches: t,
                                    loaderData: {},
                                    errors: { [r.id]: e },
                                };
                            }
                        }
                        let E = t || f,
                            { dsMatches: x, revalidatingFetchers: C } = et(
                                r,
                                i,
                                u,
                                h,
                                e.history,
                                j,
                                a,
                                S,
                                n,
                                g ? [] : l,
                                !0 === g,
                                U,
                                F,
                                ed,
                                el,
                                es,
                                E,
                                m,
                                null != e.patchRoutesOnNavigation,
                                b
                            );
                        if (
                            ((ea = ++en),
                            !e.dataStrategy &&
                                !x.some((e) => e.shouldLoad) &&
                                0 === C.length)
                        ) {
                            let e = e0();
                            return (
                                ew(
                                    n,
                                    {
                                        matches: a,
                                        loaderData: {},
                                        errors:
                                            b && eA(b[1])
                                                ? { [b[0]]: b[1].error }
                                                : null,
                                        ...ex(b),
                                        ...(e
                                            ? { fetchers: new Map(j.fetchers) }
                                            : {}),
                                    },
                                    { flushSync: v }
                                ),
                                { shortCircuited: !0 }
                            );
                        }
                        if (R) {
                            let e = {};
                            if (!s) {
                                e.navigation = w;
                                let t = eW(b);
                                void 0 !== t && (e.actionData = t);
                            }
                            (C.length > 0 &&
                                (C.forEach((e) => {
                                    let t = j.fetchers.get(e.key),
                                        r = eB(void 0, t ? t.data : void 0);
                                    j.fetchers.set(e.key, r);
                                }),
                                (e.fetchers = new Map(j.fetchers))),
                                ey(e, { flushSync: v }));
                        }
                        C.forEach((e) => {
                            (eZ(e.key),
                                e.controller && Z.set(e.key, e.controller));
                        });
                        let P = () => C.forEach((e) => eZ(e.key));
                        o && o.signal.addEventListener("abort", P);
                        let { loaderResults: L, fetcherResults: k } = await eq(
                            x,
                            C,
                            r,
                            i
                        );
                        if (r.signal.aborted) return { shortCircuited: !0 };
                        (o && o.signal.removeEventListener("abort", P),
                            C.forEach((e) => Z.delete(e.key)));
                        let T = ek(L);
                        if (T)
                            return (
                                await eH(r, T.result, !0, { replace: y }),
                                { shortCircuited: !0 }
                            );
                        if ((T = ek(k)))
                            return (
                                es.add(T.key),
                                await eH(r, T.result, !0, { replace: y }),
                                { shortCircuited: !0 }
                            );
                        let { loaderData: A, errors: O } = eR(j, a, L, b, C, k);
                        g && j.errors && (O = { ...j.errors, ...O });
                        let M = e0(),
                            $ = e1(ea);
                        return {
                            matches: a,
                            loaderData: A,
                            errors: O,
                            ...(M || $ || C.length > 0
                                ? { fetchers: new Map(j.fetchers) }
                                : {}),
                        };
                    }
                    function eW(e) {
                        if (e && !eA(e[1])) return { [e[0]]: e[1].data };
                        if (j.actionData)
                            if (0 === Object.keys(j.actionData).length)
                                return null;
                            else return j.actionData;
                    }
                    async function eU(r, n, a, i, s, d, p, y, g, v) {
                        var b, w;
                        function R(e) {
                            if (!e.route.action && !e.route.lazy) {
                                let e = eL(405, {
                                    method: v.formMethod,
                                    pathname: a,
                                    routeId: n,
                                });
                                return (eV(r, n, e, { flushSync: y }), !0);
                            }
                            return !1;
                        }
                        if ((eG(), el.delete(r), !p && R(i))) return;
                        let E = j.fetchers.get(r);
                        eJ(
                            r,
                            ((b = v),
                            (w = E),
                            {
                                state: "submitting",
                                formMethod: b.formMethod,
                                formAction: b.formAction,
                                formEncType: b.formEncType,
                                formData: b.formData,
                                json: b.json,
                                text: b.text,
                                data: w ? w.data : void 0,
                            }),
                            { flushSync: y }
                        );
                        let x = new AbortController(),
                            C = eb(e.history, a, x.signal, v);
                        if (p) {
                            let e = await e7(s, a, C.signal, r);
                            if ("aborted" === e.type) return;
                            if ("error" === e.type)
                                return void eV(r, n, e.error, { flushSync: y });
                            if (!e.matches)
                                return void eV(r, n, eL(404, { pathname: a }), {
                                    flushSync: y,
                                });
                            if (R((i = eD((s = e.matches), a)))) return;
                        }
                        Z.set(r, x);
                        let P = en,
                            L = ef(u, h, C, s, i, l, d),
                            k = (await eY(C, L, d, r))[i.route.id];
                        if (C.signal.aborted) {
                            Z.get(r) === x && Z.delete(r);
                            return;
                        }
                        if (ed.has(r)) {
                            if (eO(k) || eA(k)) return void eJ(r, e_(void 0));
                        } else {
                            if (eO(k))
                                return (Z.delete(r), ea > P)
                                    ? void eJ(r, e_(void 0))
                                    : (es.add(r),
                                      eJ(r, eB(v)),
                                      eH(C, k, !1, {
                                          fetcherSubmission: v,
                                          preventScrollReset: g,
                                      }));
                            if (eA(k)) return void eV(r, n, k.error);
                        }
                        let T = j.navigation.location || j.location,
                            A = eb(e.history, T, x.signal),
                            O = t || f,
                            M =
                                "idle" !== j.navigation.state
                                    ? S(O, j.navigation.location, m)
                                    : j.matches;
                        c(M, "Didn't find any matches after fetcher action");
                        let $ = ++en;
                        ei.set(r, $);
                        let D = eB(v, k.data);
                        j.fetchers.set(r, D);
                        let { dsMatches: I, revalidatingFetchers: N } = et(
                            A,
                            d,
                            u,
                            h,
                            e.history,
                            j,
                            M,
                            v,
                            T,
                            l,
                            !1,
                            U,
                            F,
                            ed,
                            el,
                            es,
                            O,
                            m,
                            null != e.patchRoutesOnNavigation,
                            [i.route.id, k]
                        );
                        (N.filter((e) => e.key !== r).forEach((e) => {
                            let t = e.key,
                                r = j.fetchers.get(t),
                                n = eB(void 0, r ? r.data : void 0);
                            (j.fetchers.set(t, n),
                                eZ(t),
                                e.controller && Z.set(t, e.controller));
                        }),
                            ey({ fetchers: new Map(j.fetchers) }));
                        let B = () => N.forEach((e) => eZ(e.key));
                        x.signal.addEventListener("abort", B);
                        let { loaderResults: _, fetcherResults: W } = await eq(
                            I,
                            N,
                            A,
                            d
                        );
                        if (x.signal.aborted) return;
                        if (
                            (x.signal.removeEventListener("abort", B),
                            ei.delete(r),
                            Z.delete(r),
                            N.forEach((e) => Z.delete(e.key)),
                            j.fetchers.has(r))
                        ) {
                            let e = e_(k.data);
                            j.fetchers.set(r, e);
                        }
                        let H = ek(_);
                        if (H)
                            return eH(A, H.result, !1, {
                                preventScrollReset: g,
                            });
                        if ((H = ek(W)))
                            return (
                                es.add(H.key),
                                eH(A, H.result, !1, { preventScrollReset: g })
                            );
                        let { loaderData: Y, errors: q } = eR(
                            j,
                            M,
                            _,
                            void 0,
                            N,
                            W
                        );
                        (e1($),
                            "loading" === j.navigation.state && $ > ea
                                ? (c(z, "Expected pending action"),
                                  o && o.abort(),
                                  ew(j.navigation.location, {
                                      matches: M,
                                      loaderData: Y,
                                      errors: q,
                                      fetchers: new Map(j.fetchers),
                                  }))
                                : (ey({
                                      errors: q,
                                      loaderData: eE(j.loaderData, Y, M, q),
                                      fetchers: new Map(j.fetchers),
                                  }),
                                  (U = !1)));
                    }
                    async function eF(t, r, n, o, a, i, s, c, d, p) {
                        let f = j.fetchers.get(t);
                        eJ(t, eB(p, f ? f.data : void 0), { flushSync: c });
                        let m = new AbortController(),
                            y = eb(e.history, n, m.signal);
                        if (s) {
                            let e = await e7(a, n, y.signal, t);
                            if ("aborted" === e.type) return;
                            if ("error" === e.type)
                                return void eV(t, r, e.error, { flushSync: c });
                            if (!e.matches)
                                return void eV(t, r, eL(404, { pathname: n }), {
                                    flushSync: c,
                                });
                            o = eD((a = e.matches), n);
                        }
                        Z.set(t, m);
                        let g = en,
                            v = ef(u, h, y, a, o, l, i),
                            b = (await eY(y, v, i, t))[o.route.id];
                        if (
                            (Z.get(t) === m && Z.delete(t), !y.signal.aborted)
                        ) {
                            if (ed.has(t)) return void eJ(t, e_(void 0));
                            if (eO(b))
                                if (ea > g) return void eJ(t, e_(void 0));
                                else {
                                    (es.add(t),
                                        await eH(y, b, !1, {
                                            preventScrollReset: d,
                                        }));
                                    return;
                                }
                            if (eA(b)) return void eV(t, r, b.error);
                            eJ(t, e_(b.data));
                        }
                    }
                    async function eH(
                        e,
                        t,
                        r,
                        {
                            submission: n,
                            fetcherSubmission: a,
                            preventScrollReset: l,
                            replace: u,
                        } = {}
                    ) {
                        t.response.headers.has("X-Remix-Revalidate") &&
                            (U = !0);
                        let d = t.response.headers.get("Location");
                        (c(
                            d,
                            "Expected a Location header on the redirect Response"
                        ),
                            (d = ev(d, new URL(e.url), m)));
                        let h = p(j.location, d, { _isRedirect: !0 });
                        if (s) {
                            let e = !1;
                            if (
                                t.response.headers.has(
                                    "X-Remix-Reload-Document"
                                )
                            )
                                e = !0;
                            else if (V.test(d)) {
                                let t = y(d, !0);
                                e =
                                    t.origin !== i.location.origin ||
                                    null == T(t.pathname, m);
                            }
                            if (e)
                                return void (u
                                    ? i.location.replace(d)
                                    : i.location.assign(d));
                        }
                        o = null;
                        let f =
                                !0 === u ||
                                t.response.headers.has("X-Remix-Replace")
                                    ? "REPLACE"
                                    : "PUSH",
                            {
                                formMethod: g,
                                formAction: v,
                                formEncType: b,
                            } = j.navigation;
                        !n && !a && g && v && b && (n = eI(j.navigation));
                        let w = n || a;
                        if (Y.has(t.response.status) && w && ej(w.formMethod))
                            await eT(f, h, {
                                submission: { ...w, formAction: d },
                                preventScrollReset: l || D,
                                enableViewTransition: r ? I : void 0,
                            });
                        else {
                            let e = eN(h, n);
                            await eT(f, h, {
                                overrideNavigation: e,
                                fetcherSubmission: a,
                                preventScrollReset: l || D,
                                enableViewTransition: r ? I : void 0,
                            });
                        }
                    }
                    async function eY(e, t, r, n) {
                        let o,
                            a = {};
                        try {
                            o = await em(v, e, t, n, r, !1);
                        } catch (e) {
                            return (
                                t
                                    .filter((e) => e.shouldLoad)
                                    .forEach((t) => {
                                        a[t.route.id] = {
                                            type: "error",
                                            error: e,
                                        };
                                    }),
                                a
                            );
                        }
                        if (e.signal.aborted) return a;
                        for (let [r, n] of Object.entries(o)) {
                            var i;
                            if (e$((i = n).result) && H.has(i.result.status)) {
                                let o = n.result;
                                a[r] = {
                                    type: "redirect",
                                    response: (function (e, t, r, n, o) {
                                        let a = e.headers.get("Location");
                                        if (
                                            (c(
                                                a,
                                                "Redirects returned/thrown from loaders/actions must have a Location header"
                                            ),
                                            !V.test(a))
                                        ) {
                                            let i = n.slice(
                                                0,
                                                n.findIndex(
                                                    (e) => e.route.id === r
                                                ) + 1
                                            );
                                            ((a = Q(new URL(t.url), i, o, a)),
                                                e.headers.set("Location", a));
                                        }
                                        return e;
                                    })(o, e, r, t, m),
                                };
                            } else a[r] = await eg(n);
                        }
                        return a;
                    }
                    async function eq(e, t, r, n) {
                        let o = eY(r, e, n, null),
                            a = Promise.all(
                                t.map(async (e) => {
                                    if (
                                        !e.matches ||
                                        !e.match ||
                                        !e.request ||
                                        !e.controller
                                    )
                                        return Promise.resolve({
                                            [e.key]: {
                                                type: "error",
                                                error: eL(404, {
                                                    pathname: e.path,
                                                }),
                                            },
                                        });
                                    {
                                        let t = (
                                            await eY(
                                                e.request,
                                                e.matches,
                                                n,
                                                e.key
                                            )
                                        )[e.match.route.id];
                                        return { [e.key]: t };
                                    }
                                })
                            );
                        return {
                            loaderResults: await o,
                            fetcherResults: (await a).reduce(
                                (e, t) => Object.assign(e, t),
                                {}
                            ),
                        };
                    }
                    function eG() {
                        ((U = !0),
                            el.forEach((e, t) => {
                                (Z.has(t) && F.add(t), eZ(t));
                            }));
                    }
                    function eJ(e, t, r = {}) {
                        (j.fetchers.set(e, t),
                            ey(
                                { fetchers: new Map(j.fetchers) },
                                { flushSync: !0 === (r && r.flushSync) }
                            ));
                    }
                    function eV(e, t, r, n = {}) {
                        let o = eC(j.matches, t);
                        (eK(e),
                            ey(
                                {
                                    errors: { [o.route.id]: r },
                                    fetchers: new Map(j.fetchers),
                                },
                                { flushSync: !0 === (n && n.flushSync) }
                            ));
                    }
                    function eX(e) {
                        return (
                            ec.set(e, (ec.get(e) || 0) + 1),
                            ed.has(e) && ed.delete(e),
                            j.fetchers.get(e) || G
                        );
                    }
                    function eK(e) {
                        let t = j.fetchers.get(e);
                        (Z.has(e) &&
                            !(t && "loading" === t.state && ei.has(e)) &&
                            eZ(e),
                            el.delete(e),
                            ei.delete(e),
                            es.delete(e),
                            ed.delete(e),
                            F.delete(e),
                            j.fetchers.delete(e));
                    }
                    function eZ(e) {
                        let t = Z.get(e);
                        t && (t.abort(), Z.delete(e));
                    }
                    function eQ(e) {
                        for (let t of e) {
                            let e = e_(eX(t).data);
                            j.fetchers.set(t, e);
                        }
                    }
                    function e0() {
                        let e = [],
                            t = !1;
                        for (let r of es) {
                            let n = j.fetchers.get(r);
                            (c(n, `Expected fetcher: ${r}`),
                                "loading" === n.state &&
                                    (es.delete(r), e.push(r), (t = !0)));
                        }
                        return (eQ(e), t);
                    }
                    function e1(e) {
                        let t = [];
                        for (let [r, n] of ei)
                            if (n < e) {
                                let e = j.fetchers.get(r);
                                (c(e, `Expected fetcher: ${r}`),
                                    "loading" === e.state &&
                                        (eZ(r), ei.delete(r), t.push(r)));
                            }
                        return (eQ(t), t.length > 0);
                    }
                    function e2(e) {
                        (j.blockers.delete(e), eh.delete(e));
                    }
                    function e4(e, t) {
                        let r = j.blockers.get(e) || J;
                        c(
                            ("unblocked" === r.state &&
                                "blocked" === t.state) ||
                                ("blocked" === r.state &&
                                    "blocked" === t.state) ||
                                ("blocked" === r.state &&
                                    "proceeding" === t.state) ||
                                ("blocked" === r.state &&
                                    "unblocked" === t.state) ||
                                ("proceeding" === r.state &&
                                    "unblocked" === t.state),
                            `Invalid blocker state transition: ${r.state} -> ${t.state}`
                        );
                        let n = new Map(j.blockers);
                        (n.set(e, t), ey({ blockers: n }));
                    }
                    function e3({
                        currentLocation: e,
                        nextLocation: t,
                        historyAction: r,
                    }) {
                        if (0 === eh.size) return;
                        eh.size > 1 &&
                            d(
                                !1,
                                "A router only supports one blocker at a time"
                            );
                        let n = Array.from(eh.entries()),
                            [o, a] = n[n.length - 1],
                            i = j.blockers.get(o);
                        if (
                            (!i || "proceeding" !== i.state) &&
                            a({
                                currentLocation: e,
                                nextLocation: t,
                                historyAction: r,
                            })
                        )
                            return o;
                    }
                    function e5(e) {
                        let r = eL(404, { pathname: e }),
                            { matches: n, route: o } = eP(t || f);
                        return { notFoundMatches: n, route: o, error: r };
                    }
                    function e6(e, t) {
                        return (
                            (L &&
                                L(
                                    e,
                                    t.map((e) => E(e, j.loaderData))
                                )) ||
                            e.key
                        );
                    }
                    function e9(e, t) {
                        if (P) {
                            let r = P[e6(e, t)];
                            if ("number" == typeof r) return r;
                        }
                        return null;
                    }
                    function e8(t, r, n) {
                        if (e.patchRoutesOnNavigation) {
                            if (!t)
                                return {
                                    active: !0,
                                    matches: R(r, n, m, !0) || [],
                                };
                            else if (Object.keys(t[0].params).length > 0)
                                return { active: !0, matches: R(r, n, m, !0) };
                        }
                        return { active: !1, matches: null };
                    }
                    async function e7(r, n, o, a) {
                        if (!e.patchRoutesOnNavigation)
                            return { type: "success", matches: r };
                        let i = r;
                        for (;;) {
                            let r = null == t,
                                s = t || f,
                                l = h;
                            try {
                                await e.patchRoutesOnNavigation({
                                    signal: o,
                                    path: n,
                                    matches: i,
                                    fetcherKey: a,
                                    patch: (e, t) => {
                                        o.aborted || eo(e, t, s, l, u);
                                    },
                                });
                            } catch (e) {
                                return {
                                    type: "error",
                                    error: e,
                                    partialMatches: i,
                                };
                            } finally {
                                r && !o.aborted && (f = [...f]);
                            }
                            if (o.aborted) return { type: "aborted" };
                            let c = S(s, n, m);
                            if (c) return { type: "success", matches: c };
                            let d = R(s, n, m, !0);
                            if (
                                !d ||
                                (i.length === d.length &&
                                    i.every(
                                        (e, t) => e.route.id === d[t].route.id
                                    ))
                            )
                                return { type: "success", matches: null };
                            i = d;
                        }
                    }
                    return (n = {
                        get basename() {
                            return m;
                        },
                        get future() {
                            return b;
                        },
                        get state() {
                            return j;
                        },
                        get routes() {
                            return f;
                        },
                        get window() {
                            return i;
                        },
                        initialize: function () {
                            if (
                                ((x = e.history.listen(
                                    ({ action: t, location: r, delta: n }) => {
                                        if (a) {
                                            (a(), (a = void 0));
                                            return;
                                        }
                                        d(
                                            0 === eh.size || null != n,
                                            "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
                                        );
                                        let o = e3({
                                            currentLocation: j.location,
                                            nextLocation: r,
                                            historyAction: t,
                                        });
                                        if (o && null != n) {
                                            let t = new Promise((e) => {
                                                a = e;
                                            });
                                            (e.history.go(-1 * n),
                                                e4(o, {
                                                    state: "blocked",
                                                    location: r,
                                                    proceed() {
                                                        (e4(o, {
                                                            state: "proceeding",
                                                            proceed: void 0,
                                                            reset: void 0,
                                                            location: r,
                                                        }),
                                                            t.then(() =>
                                                                e.history.go(n)
                                                            ));
                                                    },
                                                    reset() {
                                                        let e = new Map(
                                                            j.blockers
                                                        );
                                                        (e.set(o, J),
                                                            ey({
                                                                blockers: e,
                                                            }));
                                                    },
                                                }));
                                            return;
                                        }
                                        return eT(t, r);
                                    }
                                )),
                                s)
                            ) {
                                var t = i,
                                    r = N;
                                try {
                                    let e = t.sessionStorage.getItem(K);
                                    if (e) {
                                        let t = JSON.parse(e);
                                        for (let [e, n] of Object.entries(
                                            t || {}
                                        ))
                                            n &&
                                                Array.isArray(n) &&
                                                r.set(e, new Set(n || []));
                                    }
                                } catch (e) {}
                                let e = () =>
                                    (function (e, t) {
                                        if (t.size > 0) {
                                            let r = {};
                                            for (let [e, n] of t) r[e] = [...n];
                                            try {
                                                e.sessionStorage.setItem(
                                                    K,
                                                    JSON.stringify(r)
                                                );
                                            } catch (e) {
                                                d(
                                                    !1,
                                                    `Failed to save applied view transitions in sessionStorage (${e}).`
                                                );
                                            }
                                        }
                                    })(i, N);
                                (i.addEventListener("pagehide", e),
                                    (B = () =>
                                        i.removeEventListener("pagehide", e)));
                            }
                            return (
                                j.initialized ||
                                    eT("POP", j.location, {
                                        initialHydration: !0,
                                    }),
                                n
                            );
                        },
                        subscribe: function (e) {
                            return (C.add(e), () => C.delete(e));
                        },
                        enableScrollRestoration: function (e, t, r) {
                            if (
                                ((P = e),
                                (k = t),
                                (L = r || null),
                                !A && j.navigation === q)
                            ) {
                                A = !0;
                                let e = e9(j.location, j.matches);
                                null != e && ey({ restoreScrollPosition: e });
                            }
                            return () => {
                                ((P = null), (k = null), (L = null));
                            };
                        },
                        navigate: eS,
                        fetch: async function r(r, n, o, a) {
                            eZ(r);
                            let i = !0 === (a && a.flushSync),
                                s = t || f,
                                l = Q(
                                    j.location,
                                    j.matches,
                                    m,
                                    o,
                                    n,
                                    a?.relative
                                ),
                                u = S(s, l, m),
                                c = e8(u, s, l);
                            if ((c.active && c.matches && (u = c.matches), !u))
                                return void eV(r, n, eL(404, { pathname: l }), {
                                    flushSync: i,
                                });
                            let {
                                path: d,
                                submission: h,
                                error: p,
                            } = ee(!0, l, a);
                            if (p) return void eV(r, n, p, { flushSync: i });
                            let y = eD(u, d),
                                v = new g(
                                    e.unstable_getContext
                                        ? await e.unstable_getContext()
                                        : void 0
                                ),
                                b = !0 === (a && a.preventScrollReset);
                            if (h && ej(h.formMethod))
                                return void (await eU(
                                    r,
                                    n,
                                    d,
                                    y,
                                    u,
                                    v,
                                    c.active,
                                    i,
                                    b,
                                    h
                                ));
                            (el.set(r, { routeId: n, path: d }),
                                await eF(r, n, d, y, u, v, c.active, i, b, h));
                        },
                        revalidate: function () {
                            let e, t, r;
                            (ep ||
                                (ep = {
                                    promise: (r = new Promise((n, o) => {
                                        ((e = async (e) => {
                                            n(e);
                                            try {
                                                await r;
                                            } catch (e) {}
                                        }),
                                            (t = async (e) => {
                                                o(e);
                                                try {
                                                    await r;
                                                } catch (e) {}
                                            }));
                                    })),
                                    resolve: e,
                                    reject: t,
                                }),
                                eG(),
                                ey({ revalidation: "loading" }));
                            let n = ep.promise;
                            return (
                                "submitting" === j.navigation.state ||
                                    ("idle" === j.navigation.state
                                        ? eT(j.historyAction, j.location, {
                                              startUninterruptedRevalidation:
                                                  !0,
                                          })
                                        : eT(
                                              z || j.historyAction,
                                              j.navigation.location,
                                              {
                                                  overrideNavigation:
                                                      j.navigation,
                                                  enableViewTransition:
                                                      !0 === I,
                                              }
                                          )),
                                n
                            );
                        },
                        createHref: (t) => e.history.createHref(t),
                        encodeLocation: (t) => e.history.encodeLocation(t),
                        getFetcher: eX,
                        deleteFetcher: function (e) {
                            let t = (ec.get(e) || 0) - 1;
                            (t <= 0 ? (ec.delete(e), ed.add(e)) : ec.set(e, t),
                                ey({ fetchers: new Map(j.fetchers) }));
                        },
                        dispose: function () {
                            (x && x(),
                                B && B(),
                                C.clear(),
                                o && o.abort(),
                                j.fetchers.forEach((e, t) => eK(t)),
                                j.blockers.forEach((e, t) => e2(t)));
                        },
                        getBlocker: function (e, t) {
                            let r = j.blockers.get(e) || J;
                            return (eh.get(e) !== t && eh.set(e, t), r);
                        },
                        deleteBlocker: e2,
                        patchRoutes: function (e, r) {
                            let n = null == t;
                            (eo(e, r, t || f, h, u),
                                n && ((f = [...f]), ey({})));
                        },
                        _internalFetchControllers: Z,
                        _internalSetRoutes: function (e) {
                            t = w(e, u, void 0, (h = {}));
                        },
                    });
                })({
                    basename: t?.basename,
                    unstable_getContext: t?.unstable_getContext,
                    future: t?.future,
                    history: u({ window: t?.window }),
                    hydrationData:
                        t?.hydrationData ||
                        ((r = window?.__staticRouterHydrationData) &&
                            r.errors &&
                            (r = {
                                ...r,
                                errors: (function (e) {
                                    if (!e) return null;
                                    let t = Object.entries(e),
                                        r = {};
                                    for (let [e, n] of t)
                                        if (
                                            n &&
                                            "RouteErrorResponse" === n.__type
                                        )
                                            r[e] = new B(
                                                n.status,
                                                n.statusText,
                                                n.data,
                                                !0 === n.internal
                                            );
                                        else if (n && "Error" === n.__type) {
                                            if (n.__subType) {
                                                let t = window[n.__subType];
                                                if ("function" == typeof t)
                                                    try {
                                                        let o = new t(
                                                            n.message
                                                        );
                                                        ((o.stack = ""),
                                                            (r[e] = o));
                                                    } catch (e) {}
                                            }
                                            if (null == r[e]) {
                                                let t = Error(n.message);
                                                ((t.stack = ""), (r[e] = t));
                                            }
                                        } else r[e] = n;
                                    return r;
                                })(r.errors),
                            }),
                        r),
                    routes: e,
                    mapRouteProperties: tm,
                    hydrationRouteProperties: ty,
                    dataStrategy: t?.dataStrategy,
                    patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
                    window: t?.window,
                }).initialize();
            }
            function tJ({ basename: e, children: t, window: r }) {
                let n = o.useRef();
                null == n.current &&
                    (n.current = u({ window: r, v5Compat: !0 }));
                let a = n.current,
                    [i, s] = o.useState({
                        action: a.action,
                        location: a.location,
                    }),
                    l = o.useCallback(
                        (e) => {
                            o.startTransition(() => s(e));
                        },
                        [s]
                    );
                return (
                    o.useLayoutEffect(() => a.listen(l), [a, l]),
                    o.createElement(tE, {
                        basename: e,
                        children: t,
                        location: i.location,
                        navigationType: i.action,
                        navigator: a,
                    })
                );
            }
            var tV = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                tX = o.forwardRef(function (
                    {
                        onClick: e,
                        discover: t = "render",
                        prefetch: r = "none",
                        relative: n,
                        reloadDocument: a,
                        replace: i,
                        state: s,
                        target: l,
                        to: u,
                        preventScrollReset: h,
                        viewTransition: p,
                        ...f
                    },
                    m
                ) {
                    let y,
                        { basename: g } = o.useContext(eY),
                        v = "string" == typeof u && tV.test(u),
                        b = !1;
                    if ("string" == typeof u && v && ((y = u), tq))
                        try {
                            let e = new URL(window.location.href),
                                t = new URL(
                                    u.startsWith("//") ? e.protocol + u : u
                                ),
                                r = T(t.pathname, g);
                            t.origin === e.origin && null != r
                                ? (u = r + t.search + t.hash)
                                : (b = !0);
                        } catch (e) {
                            d(
                                !1,
                                `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
                            );
                        }
                    let w = (function (e, { relative: t } = {}) {
                            c(
                                eV(),
                                "useHref() may be used only in the context of a <Router> component."
                            );
                            let { basename: r, navigator: n } =
                                    o.useContext(eY),
                                {
                                    hash: a,
                                    pathname: i,
                                    search: s,
                                } = e3(e, { relative: t }),
                                l = i;
                            return (
                                "/" !== r && (l = "/" === i ? r : z([r, i])),
                                n.createHref({
                                    pathname: l,
                                    search: s,
                                    hash: a,
                                })
                            );
                        })(u, { relative: n }),
                        [S, R, E] = (function (e, t) {
                            let r = o.useContext(tW),
                                [n, a] = o.useState(!1),
                                [i, s] = o.useState(!1),
                                {
                                    onFocus: l,
                                    onBlur: u,
                                    onMouseEnter: c,
                                    onMouseLeave: d,
                                    onTouchStart: h,
                                } = t,
                                p = o.useRef(null);
                            (o.useEffect(() => {
                                if (
                                    ("render" === e && s(!0), "viewport" === e)
                                ) {
                                    let e = new IntersectionObserver(
                                        (e) => {
                                            e.forEach((e) => {
                                                s(e.isIntersecting);
                                            });
                                        },
                                        { threshold: 0.5 }
                                    );
                                    return (
                                        p.current && e.observe(p.current),
                                        () => {
                                            e.disconnect();
                                        }
                                    );
                                }
                            }, [e]),
                                o.useEffect(() => {
                                    if (n) {
                                        let e = setTimeout(() => {
                                            s(!0);
                                        }, 100);
                                        return () => {
                                            clearTimeout(e);
                                        };
                                    }
                                }, [n]));
                            let f = () => {
                                    a(!0);
                                },
                                m = () => {
                                    (a(!1), s(!1));
                                };
                            return r
                                ? "intent" !== e
                                    ? [i, p, {}]
                                    : [
                                          i,
                                          p,
                                          {
                                              onFocus: tF(l, f),
                                              onBlur: tF(u, m),
                                              onMouseEnter: tF(c, f),
                                              onMouseLeave: tF(d, m),
                                              onTouchStart: tF(h, f),
                                          },
                                      ]
                                : [!1, p, {}];
                        })(r, f),
                        x = t1(u, {
                            replace: i,
                            state: s,
                            target: l,
                            preventScrollReset: h,
                            relative: n,
                            viewTransition: p,
                        }),
                        C = o.createElement("a", {
                            ...f,
                            ...E,
                            href: y || w,
                            onClick:
                                b || a
                                    ? e
                                    : function (t) {
                                          (e && e(t),
                                              t.defaultPrevented || x(t));
                                      },
                            ref: (function (...e) {
                                return (t) => {
                                    e.forEach((e) => {
                                        "function" == typeof e
                                            ? e(t)
                                            : null != e && (e.current = t);
                                    });
                                };
                            })(m, R),
                            target: l,
                            "data-discover":
                                v || "render" !== t ? void 0 : "true",
                        });
                    return S && !v
                        ? o.createElement(
                              o.Fragment,
                              null,
                              C,
                              o.createElement(tH, { page: w })
                          )
                        : C;
                });
            tX.displayName = "Link";
            var tK = o.forwardRef(function (
                {
                    "aria-current": e = "page",
                    caseSensitive: t = !1,
                    className: r = "",
                    end: n = !1,
                    style: a,
                    to: i,
                    viewTransition: s,
                    children: l,
                    ...u
                },
                d
            ) {
                let h,
                    p = e3(i, { relative: u.relative }),
                    f = eX(),
                    m = o.useContext(eU),
                    { navigator: y, basename: g } = o.useContext(eY),
                    v =
                        null != m &&
                        (function (e, t = {}) {
                            let r = o.useContext(eF);
                            c(
                                null != r,
                                "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
                            );
                            let { basename: n } = t0("useViewTransitionState"),
                                a = e3(e, { relative: t.relative });
                            if (!r.isTransitioning) return !1;
                            let i =
                                    T(r.currentLocation.pathname, n) ||
                                    r.currentLocation.pathname,
                                s =
                                    T(r.nextLocation.pathname, n) ||
                                    r.nextLocation.pathname;
                            return (
                                null != L(a.pathname, s) ||
                                null != L(a.pathname, i)
                            );
                        })(p) &&
                        !0 === s,
                    b = y.encodeLocation
                        ? y.encodeLocation(p).pathname
                        : p.pathname,
                    w = f.pathname,
                    S =
                        m && m.navigation && m.navigation.location
                            ? m.navigation.location.pathname
                            : null;
                (t ||
                    ((w = w.toLowerCase()),
                    (S = S ? S.toLowerCase() : null),
                    (b = b.toLowerCase())),
                    S && g && (S = T(S, g) || S));
                let R = "/" !== b && b.endsWith("/") ? b.length - 1 : b.length,
                    E =
                        w === b ||
                        (!n && w.startsWith(b) && "/" === w.charAt(R)),
                    x =
                        null != S &&
                        (S === b ||
                            (!n &&
                                S.startsWith(b) &&
                                "/" === S.charAt(b.length))),
                    C = { isActive: E, isPending: x, isTransitioning: v },
                    P = E ? e : void 0;
                h =
                    "function" == typeof r
                        ? r(C)
                        : [
                              r,
                              E ? "active" : null,
                              x ? "pending" : null,
                              v ? "transitioning" : null,
                          ]
                              .filter(Boolean)
                              .join(" ");
                let k = "function" == typeof a ? a(C) : a;
                return o.createElement(
                    tX,
                    {
                        ...u,
                        "aria-current": P,
                        className: h,
                        ref: d,
                        style: k,
                        to: i,
                        viewTransition: s,
                    },
                    "function" == typeof l ? l(C) : l
                );
            });
            function tZ({ getKey: e, storageKey: t, ...r }) {
                let n = o.useContext(tW),
                    { basename: a } = o.useContext(eY),
                    i = eX(),
                    s = ta();
                !(function ({ getKey: e, storageKey: t } = {}) {
                    let r,
                        { router: n } = t0("useScrollRestoration"),
                        { restoreScrollPosition: a, preventScrollReset: i } =
                            (c(
                                (r = o.useContext(eU)),
                                tQ("useScrollRestoration")
                            ),
                            r),
                        { basename: s } = o.useContext(eY),
                        l = eX(),
                        u = ta(),
                        h = to();
                    (o.useEffect(
                        () => (
                            (window.history.scrollRestoration = "manual"),
                            () => {
                                window.history.scrollRestoration = "auto";
                            }
                        ),
                        []
                    ),
                        (function (e, t) {
                            let { capture: r } = {};
                            o.useEffect(() => {
                                let t = null != r ? { capture: r } : void 0;
                                return (
                                    window.addEventListener("pagehide", e, t),
                                    () => {
                                        window.removeEventListener(
                                            "pagehide",
                                            e,
                                            t
                                        );
                                    }
                                );
                            }, [e, r]);
                        })(
                            o.useCallback(() => {
                                "idle" === h.state &&
                                    (t5[t6(l, u, s, e)] = window.scrollY);
                                try {
                                    sessionStorage.setItem(
                                        t || t3,
                                        JSON.stringify(t5)
                                    );
                                } catch (e) {
                                    d(
                                        !1,
                                        `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`
                                    );
                                }
                                window.history.scrollRestoration = "auto";
                            }, [h.state, e, s, l, u, t])
                        ),
                        "undefined" != typeof document &&
                            (o.useLayoutEffect(() => {
                                try {
                                    let e = sessionStorage.getItem(t || t3);
                                    e && (t5 = JSON.parse(e));
                                } catch (e) {}
                            }, [t]),
                            o.useLayoutEffect(() => {
                                let t = n?.enableScrollRestoration(
                                    t5,
                                    () => window.scrollY,
                                    e ? (t, r) => t6(t, r, s, e) : void 0
                                );
                                return () => t && t();
                            }, [n, s, e]),
                            o.useLayoutEffect(() => {
                                if (!1 !== a) {
                                    if ("number" == typeof a)
                                        return void window.scrollTo(0, a);
                                    if (l.hash) {
                                        let e = document.getElementById(
                                            decodeURIComponent(l.hash.slice(1))
                                        );
                                        if (e) return void e.scrollIntoView();
                                    }
                                    !0 !== i && window.scrollTo(0, 0);
                                }
                            }, [l, a, i])));
                })({ getKey: e, storageKey: t });
                let l = o.useMemo(() => {
                    if (!n || !e) return null;
                    let t = t6(i, s, a, e);
                    return t !== i.key ? t : null;
                }, []);
                if (!n || n.isSpaMode) return null;
                let u = ((e, t) => {
                    if (!window.history.state || !window.history.state.key) {
                        let e = Math.random().toString(32).slice(2);
                        window.history.replaceState({ key: e }, "");
                    }
                    try {
                        let r = JSON.parse(sessionStorage.getItem(e) || "{}")[
                            t || window.history.state.key
                        ];
                        "number" == typeof r && window.scrollTo(0, r);
                    } catch (t) {
                        (console.error(t), sessionStorage.removeItem(e));
                    }
                }).toString();
                return o.createElement("script", {
                    ...r,
                    suppressHydrationWarning: !0,
                    dangerouslySetInnerHTML: {
                        __html: `(${u})(${JSON.stringify(t || t3)}, ${JSON.stringify(l)})`,
                    },
                });
            }
            function tQ(e) {
                return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
            }
            function t0(e) {
                let t = o.useContext(eW);
                return (c(t, tQ(e)), t);
            }
            function t1(
                e,
                {
                    target: t,
                    replace: r,
                    state: n,
                    preventScrollReset: a,
                    relative: i,
                    viewTransition: s,
                } = {}
            ) {
                let l = e1(),
                    u = eX(),
                    c = e3(e, { relative: i });
                return o.useCallback(
                    (o) => {
                        0 !== o.button ||
                            (t && "_self" !== t) ||
                            o.metaKey ||
                            o.altKey ||
                            o.ctrlKey ||
                            o.shiftKey ||
                            (o.preventDefault(),
                            l(e, {
                                replace: void 0 !== r ? r : f(u) === f(c),
                                state: n,
                                preventScrollReset: a,
                                relative: i,
                                viewTransition: s,
                            }));
                    },
                    [u, l, c, r, n, t, e, a, i, s]
                );
            }
            function t2(e) {
                d(
                    "undefined" != typeof URLSearchParams,
                    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
                );
                let t = o.useRef(tk(e)),
                    r = o.useRef(!1),
                    n = eX(),
                    a = o.useMemo(() => {
                        var e, o;
                        let a;
                        return (
                            (e = n.search),
                            (o = r.current ? null : t.current),
                            (a = tk(e)),
                            o &&
                                o.forEach((e, t) => {
                                    a.has(t) ||
                                        o.getAll(t).forEach((e) => {
                                            a.append(t, e);
                                        });
                                }),
                            a
                        );
                    }, [n.search]),
                    i = e1(),
                    s = o.useCallback(
                        (e, t) => {
                            let n = tk("function" == typeof e ? e(a) : e);
                            ((r.current = !0), i("?" + n, t));
                        },
                        [i, a]
                    );
                return [a, s];
            }
            ((tK.displayName = "NavLink"),
                (o.forwardRef(
                    (
                        {
                            discover: e = "render",
                            fetcherKey: t,
                            navigate: r,
                            reloadDocument: n,
                            replace: a,
                            state: i,
                            method: s = tC,
                            action: l,
                            onSubmit: u,
                            relative: d,
                            preventScrollReset: h,
                            viewTransition: p,
                            ...m
                        },
                        y
                    ) => {
                        let g = (function () {
                                let { router: e } = t0("useSubmit"),
                                    { basename: t } = o.useContext(eY),
                                    r = tn("useRouteId");
                                return o.useCallback(
                                    async (n, o = {}) => {
                                        let {
                                            action: a,
                                            method: i,
                                            encType: s,
                                            formData: l,
                                            body: u,
                                        } = (function (e, t) {
                                            let r, n, o, a, i;
                                            if (
                                                tL(e) &&
                                                "form" ===
                                                    e.tagName.toLowerCase()
                                            ) {
                                                let i =
                                                    e.getAttribute("action");
                                                ((n = i ? T(i, t) : null),
                                                    (r =
                                                        e.getAttribute(
                                                            "method"
                                                        ) || tC),
                                                    (o =
                                                        tO(
                                                            e.getAttribute(
                                                                "enctype"
                                                            )
                                                        ) || tP),
                                                    (a = new FormData(e)));
                                            } else if (
                                                (tL(e) &&
                                                    "button" ===
                                                        e.tagName.toLowerCase()) ||
                                                (tL(e) &&
                                                    "input" ===
                                                        e.tagName.toLowerCase() &&
                                                    ("submit" === e.type ||
                                                        "image" === e.type))
                                            ) {
                                                let i = e.form;
                                                if (null == i)
                                                    throw Error(
                                                        'Cannot submit a <button> or <input type="submit"> without a <form>'
                                                    );
                                                let s =
                                                    e.getAttribute(
                                                        "formaction"
                                                    ) ||
                                                    i.getAttribute("action");
                                                if (
                                                    ((n = s ? T(s, t) : null),
                                                    (r =
                                                        e.getAttribute(
                                                            "formmethod"
                                                        ) ||
                                                        i.getAttribute(
                                                            "method"
                                                        ) ||
                                                        tC),
                                                    (o =
                                                        tO(
                                                            e.getAttribute(
                                                                "formenctype"
                                                            )
                                                        ) ||
                                                        tO(
                                                            i.getAttribute(
                                                                "enctype"
                                                            )
                                                        ) ||
                                                        tP),
                                                    (a = new FormData(i, e)),
                                                    !(function () {
                                                        if (null === tT)
                                                            try {
                                                                (new FormData(
                                                                    document.createElement(
                                                                        "form"
                                                                    ),
                                                                    0
                                                                ),
                                                                    (tT = !1));
                                                            } catch (e) {
                                                                tT = !0;
                                                            }
                                                        return tT;
                                                    })())
                                                ) {
                                                    let {
                                                        name: t,
                                                        type: r,
                                                        value: n,
                                                    } = e;
                                                    if ("image" === r) {
                                                        let e = t
                                                            ? `${t}.`
                                                            : "";
                                                        (a.append(`${e}x`, "0"),
                                                            a.append(
                                                                `${e}y`,
                                                                "0"
                                                            ));
                                                    } else t && a.append(t, n);
                                                }
                                            } else if (tL(e))
                                                throw Error(
                                                    'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
                                                );
                                            else
                                                ((r = tC),
                                                    (n = null),
                                                    (o = tP),
                                                    (i = e));
                                            return (
                                                a &&
                                                    "text/plain" === o &&
                                                    ((i = a), (a = void 0)),
                                                {
                                                    action: n,
                                                    method: r.toLowerCase(),
                                                    encType: o,
                                                    formData: a,
                                                    body: i,
                                                }
                                            );
                                        })(n, t);
                                        if (!1 === o.navigate) {
                                            let t =
                                                o.fetcherKey ||
                                                `__${String(++t4)}__`;
                                            await e.fetch(t, r, o.action || a, {
                                                preventScrollReset:
                                                    o.preventScrollReset,
                                                formData: l,
                                                body: u,
                                                formMethod: o.method || i,
                                                formEncType: o.encType || s,
                                                flushSync: o.flushSync,
                                            });
                                        } else
                                            await e.navigate(o.action || a, {
                                                preventScrollReset:
                                                    o.preventScrollReset,
                                                formData: l,
                                                body: u,
                                                formMethod: o.method || i,
                                                formEncType: o.encType || s,
                                                replace: o.replace,
                                                state: o.state,
                                                fromRouteId: r,
                                                flushSync: o.flushSync,
                                                viewTransition:
                                                    o.viewTransition,
                                            });
                                    },
                                    [e, t, r]
                                );
                            })(),
                            v = (function (e, { relative: t } = {}) {
                                let { basename: r } = o.useContext(eY),
                                    n = o.useContext(eG);
                                c(
                                    n,
                                    "useFormAction must be used inside a RouteContext"
                                );
                                let [a] = n.matches.slice(-1),
                                    i = { ...e3(e || ".", { relative: t }) },
                                    s = eX();
                                if (null == e) {
                                    i.search = s.search;
                                    let e = new URLSearchParams(i.search),
                                        t = e.getAll("index");
                                    if (t.some((e) => "" === e)) {
                                        (e.delete("index"),
                                            t
                                                .filter((e) => e)
                                                .forEach((t) =>
                                                    e.append("index", t)
                                                ));
                                        let r = e.toString();
                                        i.search = r ? `?${r}` : "";
                                    }
                                }
                                return (
                                    (!e || "." === e) &&
                                        a.route.index &&
                                        (i.search = i.search
                                            ? i.search.replace(/^\?/, "?index&")
                                            : "?index"),
                                    "/" !== r &&
                                        (i.pathname =
                                            "/" === i.pathname
                                                ? r
                                                : z([r, i.pathname])),
                                    f(i)
                                );
                            })(l, { relative: d }),
                            b = "get" === s.toLowerCase() ? "get" : "post",
                            w = "string" == typeof l && tV.test(l);
                        return o.createElement("form", {
                            ref: y,
                            method: b,
                            action: v,
                            onSubmit: n
                                ? u
                                : (e) => {
                                      if ((u && u(e), e.defaultPrevented))
                                          return;
                                      e.preventDefault();
                                      let n = e.nativeEvent.submitter,
                                          o =
                                              n?.getAttribute("formmethod") ||
                                              s;
                                      g(n || e.currentTarget, {
                                          fetcherKey: t,
                                          method: o,
                                          navigate: r,
                                          replace: a,
                                          state: i,
                                          relative: d,
                                          preventScrollReset: h,
                                          viewTransition: p,
                                      });
                                  },
                            ...m,
                            "data-discover":
                                w || "render" !== e ? void 0 : "true",
                        });
                    }
                ).displayName = "Form"),
                (tZ.displayName = "ScrollRestoration"));
            var t4 = 0,
                t3 = "react-router-scroll-positions",
                t5 = {};
            function t6(e, t, r, n) {
                let o = null;
                return (
                    n &&
                        (o = n(
                            "/" !== r
                                ? {
                                      ...e,
                                      pathname: T(e.pathname, r) || e.pathname,
                                  }
                                : e,
                            t
                        )),
                    null == o && (o = e.key),
                    o
                );
            }
            function t9(e, t) {
                let { capture: r } = t || {};
                o.useEffect(() => {
                    let t = null != r ? { capture: r } : void 0;
                    return (
                        window.addEventListener("beforeunload", e, t),
                        () => {
                            window.removeEventListener("beforeunload", e, t);
                        }
                    );
                }, [e, r]);
            }
            var t8 = ((e) => (
                (e.Development = "development"),
                (e.Production = "production"),
                (e.Test = "test"),
                e
            ))(t8 || {});
            [...tN];
        },
    },
]);
//# sourceMappingURL=react-core-384366110330.js.map
