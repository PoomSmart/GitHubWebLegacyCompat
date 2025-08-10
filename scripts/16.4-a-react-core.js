"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["react-core"],
    {
        43581: (e, t, r) => {
            r.d(t, { A: () => i, T: () => o });
            var n = r(49236),
                a = {
                    background: !0,
                    backgroundImage: !0,
                    backgroundSize: !0,
                    backgroundPosition: !0,
                    backgroundRepeat: !0,
                };
            ((a.bgImage = a.backgroundImage),
                (a.bgSize = a.backgroundSize),
                (a.bgPosition = a.backgroundPosition),
                (a.bgRepeat = a.backgroundRepeat));
            var o = (0, n.qU)(a);
            let i = o;
        },
        84995: (e, t, r) => {
            r.d(t, { A: () => i, P: () => o });
            var n = r(49236),
                a = {
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
            ((a.borderTopWidth = {
                property: "borderTopWidth",
                scale: "borderWidths",
            }),
                (a.borderTopColor = {
                    property: "borderTopColor",
                    scale: "colors",
                }),
                (a.borderTopStyle = {
                    property: "borderTopStyle",
                    scale: "borderStyles",
                }),
                (a.borderTopLeftRadius = {
                    property: "borderTopLeftRadius",
                    scale: "radii",
                }),
                (a.borderTopRightRadius = {
                    property: "borderTopRightRadius",
                    scale: "radii",
                }),
                (a.borderBottomWidth = {
                    property: "borderBottomWidth",
                    scale: "borderWidths",
                }),
                (a.borderBottomColor = {
                    property: "borderBottomColor",
                    scale: "colors",
                }),
                (a.borderBottomStyle = {
                    property: "borderBottomStyle",
                    scale: "borderStyles",
                }),
                (a.borderBottomLeftRadius = {
                    property: "borderBottomLeftRadius",
                    scale: "radii",
                }),
                (a.borderBottomRightRadius = {
                    property: "borderBottomRightRadius",
                    scale: "radii",
                }),
                (a.borderLeftWidth = {
                    property: "borderLeftWidth",
                    scale: "borderWidths",
                }),
                (a.borderLeftColor = {
                    property: "borderLeftColor",
                    scale: "colors",
                }),
                (a.borderLeftStyle = {
                    property: "borderLeftStyle",
                    scale: "borderStyles",
                }),
                (a.borderRightWidth = {
                    property: "borderRightWidth",
                    scale: "borderWidths",
                }),
                (a.borderRightColor = {
                    property: "borderRightColor",
                    scale: "colors",
                }),
                (a.borderRightStyle = {
                    property: "borderRightStyle",
                    scale: "borderStyles",
                }));
            var o = (0, n.qU)(a);
            let i = o;
        },
        77638: (e, t, r) => {
            r.d(t, { A: () => i, y: () => o });
            var n = r(49236),
                a = {
                    color: { property: "color", scale: "colors" },
                    backgroundColor: {
                        property: "backgroundColor",
                        scale: "colors",
                    },
                    opacity: !0,
                };
            a.bg = a.backgroundColor;
            var o = (0, n.qU)(a);
            let i = o;
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
                a = r.n(n),
                o = function (e, t) {
                    var r,
                        n = a()({}, e, t);
                    for (var o in e)
                        e[o] &&
                            "object" == typeof t[o] &&
                            a()(n, (((r = {})[o] = a()(e[o], t[o])), r));
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
                c = function (e, t, r, n, a) {
                    for (
                        n = 0, t = t && t.split ? t.split(".") : [t];
                        n < t.length;
                        n++
                    )
                        e = e ? e[t[n]] : a;
                    return e === a ? r : e;
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
                                                (n = o(
                                                    n,
                                                    h(r.media, m, g, y, e)
                                                )));
                                            continue;
                                        }
                                        null !== y &&
                                            ((n = o(
                                                n,
                                                p(r.breakpoints, m, g, y, e)
                                            )),
                                            (u = !0));
                                        continue;
                                    }
                                    a()(n, m(y, g, e));
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
                                var a;
                                n[r] = e((((a = {})[r] = t[r]), a));
                            }),
                        n
                    );
                },
                h = function (e, t, r, n, o) {
                    var i = {};
                    return (
                        n.slice(0, e.length).forEach(function (n, s) {
                            var l,
                                u = e[s],
                                c = t(n, r, o);
                            u
                                ? a()(i, (((l = {})[u] = a()({}, i[u], c)), l))
                                : a()(i, c);
                        }),
                        i
                    );
                },
                p = function (e, t, r, n, o) {
                    var i = {};
                    for (var s in n) {
                        var u = e[s],
                            c = t(n[s], r, o);
                        if (u) {
                            var d,
                                h = l(u);
                            a()(i, (((d = {})[h] = a()({}, i[h], c)), d));
                        } else a()(i, c);
                    }
                    return i;
                },
                f = function (e) {
                    var t = e.properties,
                        r = e.property,
                        n = e.scale,
                        a = e.transform,
                        o = void 0 === a ? u : a,
                        i = e.defaultScale;
                    t = t || [r];
                    var s = function (e, r, n) {
                        var a = {},
                            i = o(e, r, n);
                        if (null !== i)
                            return (
                                t.forEach(function (e) {
                                    a[e] = i;
                                }),
                                a
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
                            t && t.config && a()(e, t.config);
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
            var a = function (e, t, r, n, a) {
                    for (
                        n = 0, t = t && t.split ? t.split(".") : [t];
                        n < t.length;
                        n++
                    )
                        e = e ? e[t[n]] : a;
                    return e === a ? r : e;
                },
                o = [40, 52, 64].map(function (e) {
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
                    if ("number" != typeof t || t >= 0) return a(e, t, t);
                    var r = Math.abs(t),
                        n = a(e, r, r);
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
                                    a(e, "breakpoints", o).map(function (e) {
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
                            var v = e(a(h, g))(h);
                            p = n({}, p, {}, v);
                            continue;
                        }
                        if (g && "object" == typeof g) {
                            p[m] = e(g)(h);
                            continue;
                        }
                        var b = a(s, m, m),
                            w = a(u, b),
                            S = a(h, w, a(h, b, {})),
                            R = a(d, b, a)(S, g, g);
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
            r.d(t, { A: () => a, p: () => n });
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
            let a = n;
        },
        96069: (e, t, r) => {
            r.d(t, { A: () => s, V: () => i });
            var n = r(49236),
                a = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
                o = {
                    gridGap: {
                        property: "gridGap",
                        scale: "space",
                        defaultScale: a.space,
                    },
                    gridColumnGap: {
                        property: "gridColumnGap",
                        scale: "space",
                        defaultScale: a.space,
                    },
                    gridRowGap: {
                        property: "gridRowGap",
                        scale: "space",
                        defaultScale: a.space,
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
                i = (0, n.qU)(o);
            let s = i;
        },
        75447: (e, t, r) => {
            r.d(t, { A: () => o, Z: () => a });
            var n = r(49236),
                a = (0, n.qU)({
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
            let o = a;
        },
        59756: (e, t, r) => {
            r.d(t, { A: () => s, G: () => i });
            var n = r(49236),
                a = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
                o = {
                    position: !0,
                    zIndex: { property: "zIndex", scale: "zIndices" },
                    top: {
                        property: "top",
                        scale: "space",
                        defaultScale: a.space,
                    },
                    right: {
                        property: "right",
                        scale: "space",
                        defaultScale: a.space,
                    },
                    bottom: {
                        property: "bottom",
                        scale: "space",
                        defaultScale: a.space,
                    },
                    left: {
                        property: "left",
                        scale: "space",
                        defaultScale: a.space,
                    },
                },
                i = (0, n.qU)(o);
            let s = i;
        },
        83317: (e, t, r) => {
            r.d(t, { c: () => o });
            var n = r(57304),
                a = RegExp(
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
                o = function (e) {
                    var t = {};
                    for (var r in e) a.test(r) || (t[r] = e[r]);
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
                a = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
                o = function (e) {
                    return "number" == typeof e && !isNaN(e);
                },
                i = function (e, t) {
                    if (!o(e)) return (0, n.Jt)(t, e, e);
                    var r = e < 0,
                        a = Math.abs(e),
                        i = (0, n.Jt)(t, a, a);
                    return o(i) ? i * (r ? -1 : 1) : r ? "-" + i : i;
                },
                s = {};
            ((s.margin = {
                margin: {
                    property: "margin",
                    scale: "space",
                    transform: i,
                    defaultScale: a.space,
                },
                marginTop: {
                    property: "marginTop",
                    scale: "space",
                    transform: i,
                    defaultScale: a.space,
                },
                marginRight: {
                    property: "marginRight",
                    scale: "space",
                    transform: i,
                    defaultScale: a.space,
                },
                marginBottom: {
                    property: "marginBottom",
                    scale: "space",
                    transform: i,
                    defaultScale: a.space,
                },
                marginLeft: {
                    property: "marginLeft",
                    scale: "space",
                    transform: i,
                    defaultScale: a.space,
                },
                marginX: {
                    properties: ["marginLeft", "marginRight"],
                    scale: "space",
                    transform: i,
                    defaultScale: a.space,
                },
                marginY: {
                    properties: ["marginTop", "marginBottom"],
                    scale: "space",
                    transform: i,
                    defaultScale: a.space,
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
                        defaultScale: a.space,
                    },
                    paddingTop: {
                        property: "paddingTop",
                        scale: "space",
                        defaultScale: a.space,
                    },
                    paddingRight: {
                        property: "paddingRight",
                        scale: "space",
                        defaultScale: a.space,
                    },
                    paddingBottom: {
                        property: "paddingBottom",
                        scale: "space",
                        defaultScale: a.space,
                    },
                    paddingLeft: {
                        property: "paddingLeft",
                        scale: "space",
                        defaultScale: a.space,
                    },
                    paddingX: {
                        properties: ["paddingLeft", "paddingRight"],
                        scale: "space",
                        defaultScale: a.space,
                    },
                    paddingY: {
                        properties: ["paddingTop", "paddingBottom"],
                        scale: "space",
                        defaultScale: a.space,
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
            r.d(t, { y: () => a });
            var n = r(49236),
                a = function (e, t) {
                    return (
                        void 0 === t && (t = null),
                        function (r) {
                            return (0, n.Jt)(r.theme, e, t);
                        }
                    );
                };
        },
        3962: (e, t, r) => {
            r.d(t, { A: () => a, I: () => n });
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
            let a = n;
        },
        38144: (e, t, r) => {
            r.d(t, { NW: () => l, Ox: () => o, XC: () => s, i9: () => i });
            var n = r(49236),
                a = r(50402),
                o = function (e) {
                    var t,
                        r,
                        o = e.scale,
                        i = e.prop,
                        s = e.variants,
                        l = void 0 === s ? {} : s,
                        u = e.key;
                    (((r = Object.keys(l).length
                        ? function (e, t, r) {
                              return (0, a.Ay)((0, n.Jt)(t, e, null))(r.theme);
                          }
                        : function (e, t) {
                              return (0, n.Jt)(t, e, null);
                          }).scale = o || u),
                        (r.defaults = l));
                    var c = (((t = {})[void 0 === i ? "variant" : i] = r), t);
                    return (0, n.Cp)(c);
                },
                i = o({ key: "buttons" }),
                s = o({ key: "textStyles", prop: "textStyle" }),
                l = o({ key: "colorStyles", prop: "colors" });
        },
        16069: (e, t) => {
            Object.prototype.toString;
        },
        38267: (e, t, r) => {
            r.d(t, {
                AH: () => em,
                Ay: () => ej,
                DU: () => eP,
                Dx: () => eE,
                NP: () => ex,
                i7: () => eT,
            });
            var n = r(44363),
                a = r(96540),
                o = r(2833),
                i = r.n(o),
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
                    for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1)
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
                S = "undefined" != typeof window && "HTMLElement" in window,
                R = {};
            function E(e) {
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
            var x = (function () {
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
                                        a = n;
                                    e >= a;

                                )
                                    (a <<= 1) < 0 && E(16, "" + e);
                                ((this.groupSizes = new Uint32Array(a)),
                                    this.groupSizes.set(r),
                                    (this.length = a));
                                for (var o = n; o < a; o++)
                                    this.groupSizes[o] = 0;
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
                                for (var a = r; a < n; a++)
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
                                    a = n + r,
                                    o = n;
                                o < a;
                                o++
                            )
                                t +=
                                    this.tag.getRule(o) +
                                    `/*!sc*/
`;
                            return t;
                        }),
                        e
                    );
                })(),
                C = new Map(),
                k = new Map(),
                N = 1,
                P = function (e) {
                    if (C.has(e)) return C.get(e);
                    for (; k.has(N); ) N++;
                    var t = N++;
                    return (C.set(e, t), k.set(t, e), t);
                },
                T = function (e, t) {
                    (t >= N && (N = t + 1), C.set(e, t), k.set(t, e));
                },
                j = "style[" + w + '][data-styled-version="5.3.11"]',
                L = RegExp(
                    "^" + w + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
                ),
                A = function (e, t, r) {
                    for (
                        var n, a = r.split(","), o = 0, i = a.length;
                        o < i;
                        o++
                    )
                        (n = a[o]) && e.registerName(t, n);
                },
                _ = function (e, t) {
                    for (
                        var r = (t.textContent || "").split(`/*!sc*/
`),
                            n = [],
                            a = 0,
                            o = r.length;
                        a < o;
                        a++
                    ) {
                        var i = r[a].trim();
                        if (i) {
                            var s = i.match(L);
                            if (s) {
                                var l = 0 | parseInt(s[1], 10),
                                    u = s[2];
                                (0 !== l &&
                                    (T(u, l),
                                    A(e, u, s[3]),
                                    e.getTag().insertRules(l, n)),
                                    (n.length = 0));
                            } else n.push(i);
                        }
                    }
                },
                D = function () {
                    return r.nc;
                },
                O = function (e) {
                    var t = document.head,
                        r = e || t,
                        n = document.createElement("style"),
                        a = (function (e) {
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
                        o = void 0 !== a ? a.nextSibling : null;
                    (n.setAttribute(w, "active"),
                        n.setAttribute("data-styled-version", "5.3.11"));
                    var i = D();
                    return (
                        i && n.setAttribute("nonce", i),
                        r.insertBefore(n, o),
                        n
                    );
                },
                I = (function () {
                    function e(e) {
                        var t = (this.element = O(e));
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
                                    var a = t[r];
                                    if (a.ownerNode === e) return a;
                                }
                                E(17);
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
                M = (function () {
                    function e(e) {
                        var t = (this.element = O(e));
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
                $ = (function () {
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
                z = S,
                W = { isServer: !S, useCSSOMInjection: !0 },
                U = (function () {
                    function e(e, t, r) {
                        (void 0 === e && (e = y),
                            void 0 === t && (t = {}),
                            (this.options = h({}, W, {}, e)),
                            (this.gs = t),
                            (this.names = new Map(r)),
                            (this.server = !!e.isServer),
                            !this.server &&
                                S &&
                                z &&
                                ((z = !1),
                                (function (e) {
                                    for (
                                        var t = document.querySelectorAll(j),
                                            r = 0,
                                            n = t.length;
                                        r < n;
                                        r++
                                    ) {
                                        var a = t[r];
                                        a &&
                                            "active" !== a.getAttribute(w) &&
                                            (_(e, a),
                                            a.parentNode &&
                                                a.parentNode.removeChild(a));
                                    }
                                })(this)));
                    }
                    e.registerId = function (e) {
                        return P(e);
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
                                    new x(
                                        t ? new $(n) : r ? new I(n) : new M(n)
                                    )))
                            );
                        }),
                        (t.hasNameForId = function (e, t) {
                            return (
                                this.names.has(e) && this.names.get(e).has(t)
                            );
                        }),
                        (t.registerName = function (e, t) {
                            if ((P(e), this.names.has(e)))
                                this.names.get(e).add(t);
                            else {
                                var r = new Set();
                                (r.add(t), this.names.set(e, r));
                            }
                        }),
                        (t.insertRules = function (e, t, r) {
                            (this.registerName(e, t),
                                this.getTag().insertRules(P(e), r));
                        }),
                        (t.clearNames = function (e) {
                            this.names.has(e) && this.names.get(e).clear();
                        }),
                        (t.clearRules = function (e) {
                            (this.getTag().clearGroup(P(e)),
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
                                        a = 0;
                                    a < r;
                                    a++
                                ) {
                                    var o,
                                        i = ((o = a), k.get(o));
                                    if (void 0 !== i) {
                                        var s = e.names.get(i),
                                            l = t.getGroup(a);
                                        if (s && l && s.size) {
                                            var u =
                                                    w +
                                                    ".g" +
                                                    a +
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
                B = /(a)(d)/gi,
                F = function (e) {
                    return String.fromCharCode(e + (e > 25 ? 39 : 97));
                };
            function H(e) {
                var t,
                    r = "";
                for (t = Math.abs(e); t > 52; t = (t / 52) | 0)
                    r = F(t % 52) + r;
                return (F(t % 52) + r).replace(B, "$1-$2");
            }
            var q = function (e, t) {
                    for (var r = t.length; r; )
                        e = (33 * e) ^ t.charCodeAt(--r);
                    return e;
                },
                Y = function (e) {
                    return q(5381, e);
                };
            function V(e) {
                for (var t = 0; t < e.length; t += 1) {
                    var r = e[t];
                    if (g(r) && !b(r)) return !1;
                }
                return !0;
            }
            var J = Y("5.3.11"),
                G = (function () {
                    function e(e, t, r) {
                        ((this.rules = e),
                            (this.staticRulesId = ""),
                            (this.isStatic =
                                (void 0 === r || r.isStatic) && V(e)),
                            (this.componentId = t),
                            (this.baseHash = q(J, t)),
                            (this.baseStyle = r),
                            U.registerId(t));
                    }
                    return (
                        (e.prototype.generateAndInjectStyles = function (
                            e,
                            t,
                            r
                        ) {
                            var n = this.componentId,
                                a = [];
                            if (
                                (this.baseStyle &&
                                    a.push(
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
                                    a.push(this.staticRulesId);
                                else {
                                    var o = ep(this.rules, e, t, r).join(""),
                                        i = H(q(this.baseHash, o) >>> 0);
                                    if (!t.hasNameForId(n, i)) {
                                        var s = r(o, "." + i, void 0, n);
                                        t.insertRules(n, i, s);
                                    }
                                    (a.push(i), (this.staticRulesId = i));
                                }
                            else {
                                for (
                                    var l = this.rules.length,
                                        u = q(this.baseHash, r.hash),
                                        c = "",
                                        d = 0;
                                    d < l;
                                    d++
                                ) {
                                    var h = this.rules[d];
                                    if ("string" == typeof h) c += h;
                                    else if (h) {
                                        var p = ep(h, e, t, r),
                                            f = Array.isArray(p)
                                                ? p.join("")
                                                : p;
                                        ((u = q(u, f + d)), (c += f));
                                    }
                                }
                                if (c) {
                                    var m = H(u >>> 0);
                                    if (!t.hasNameForId(n, m)) {
                                        var y = r(c, "." + m, void 0, n);
                                        t.insertRules(n, m, y);
                                    }
                                    a.push(m);
                                }
                            }
                            return a.join(" ");
                        }),
                        e
                    );
                })(),
                X = /^\s*\/\/.*$/gm,
                K = [":", "[", ".", "#"];
            function Q(e) {
                var t,
                    r,
                    n,
                    a,
                    o = void 0 === e ? y : e,
                    i = o.options,
                    l = void 0 === i ? y : i,
                    u = o.plugins,
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
                        return function (r, n, a, o, i, s, l, u, c, d) {
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
                                            return (e(a[0] + n), "");
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
                    f = function (e, n, o) {
                        return (0 === n && -1 !== K.indexOf(o[r.length])) ||
                            o.match(a)
                            ? e
                            : "." + t;
                    };
                function g(e, o, i, s) {
                    void 0 === s && (s = "&");
                    var l = e.replace(X, ""),
                        u = o && i ? i + " " + o + " { " + l + " }" : l;
                    return (
                        (t = s),
                        (n = RegExp("\\" + (r = o) + "\\b", "g")),
                        (a = RegExp("(\\" + r + "\\b){2,}")),
                        d(i || !o ? "" : o, u)
                    );
                }
                return (
                    d.use(
                        [].concat(c, [
                            function (e, t, a) {
                                2 === e &&
                                    a.length &&
                                    a[0].lastIndexOf(r) > 0 &&
                                    (a[0] = a[0].replace(n, f));
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
                                  return (t.name || E(15), q(e, t.name));
                              }, 5381)
                              .toString()
                        : ""),
                    g
                );
            }
            var Z = a.createContext(),
                ee = (Z.Consumer, a.createContext()),
                et = (ee.Consumer, new U()),
                er = Q();
            function en() {
                return (0, a.useContext)(Z) || et;
            }
            function ea() {
                return (0, a.useContext)(ee) || er;
            }
            function eo(e) {
                var t = (0, a.useState)(e.stylisPlugins),
                    r = t[0],
                    n = t[1],
                    o = en(),
                    s = (0, a.useMemo)(
                        function () {
                            var t = o;
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
                    l = (0, a.useMemo)(
                        function () {
                            return Q({
                                options: { prefix: !e.disableVendorPrefixes },
                                plugins: r,
                            });
                        },
                        [e.disableVendorPrefixes, r]
                    );
                return (
                    (0, a.useEffect)(
                        function () {
                            i()(r, e.stylisPlugins) || n(e.stylisPlugins);
                        },
                        [e.stylisPlugins]
                    ),
                    a.createElement(
                        Z.Provider,
                        { value: s },
                        a.createElement(ee.Provider, { value: l }, e.children)
                    )
                );
            }
            var ei = (function () {
                    function e(e, t) {
                        var r = this;
                        ((this.inject = function (e, t) {
                            void 0 === t && (t = er);
                            var n = r.name + t.hash;
                            e.hasNameForId(r.id, n) ||
                                e.insertRules(
                                    r.id,
                                    n,
                                    t(r.rules, n, "@keyframes")
                                );
                        }),
                            (this.toString = function () {
                                return E(12, String(r.name));
                            }),
                            (this.name = e),
                            (this.id = "sc-keyframes-" + e),
                            (this.rules = t));
                    }
                    return (
                        (e.prototype.getName = function (e) {
                            return (
                                void 0 === e && (e = er),
                                this.name + e.hash
                            );
                        }),
                        e
                    );
                })(),
                es = /([A-Z])/,
                el = /([A-Z])/g,
                eu = /^ms-/,
                ec = function (e) {
                    return "-" + e.toLowerCase();
                };
            function ed(e) {
                return es.test(e) ? e.replace(el, ec).replace(eu, "-ms-") : e;
            }
            var eh = function (e) {
                return null == e || !1 === e || "" === e;
            };
            function ep(e, t, r, n) {
                if (Array.isArray(e)) {
                    for (var a, o = [], i = 0, s = e.length; i < s; i += 1)
                        "" !== (a = ep(e[i], t, r, n)) &&
                            (Array.isArray(a) ? o.push.apply(o, a) : o.push(a));
                    return o;
                }
                return eh(e)
                    ? ""
                    : b(e)
                      ? "." + e.styledComponentId
                      : g(e)
                        ? "function" != typeof e ||
                          (e.prototype && e.prototype.isReactComponent) ||
                          !t
                            ? e
                            : ep(e(t), t, r, n)
                        : e instanceof ei
                          ? r
                              ? (e.inject(r, n), e.getName(n))
                              : e
                          : f(e)
                            ? (function e(t, r) {
                                  var n,
                                      a = [];
                                  for (var o in t)
                                      t.hasOwnProperty(o) &&
                                          !eh(t[o]) &&
                                          ((Array.isArray(t[o]) &&
                                              t[o].isCss) ||
                                          g(t[o])
                                              ? a.push(ed(o) + ":", t[o], ";")
                                              : f(t[o])
                                                ? a.push.apply(a, e(t[o], o))
                                                : a.push(
                                                      ed(o) +
                                                          ": " +
                                                          (null == (n = t[o]) ||
                                                          "boolean" ==
                                                              typeof n ||
                                                          "" === n
                                                              ? ""
                                                              : "number" !=
                                                                      typeof n ||
                                                                  0 === n ||
                                                                  o in l.A ||
                                                                  o.startsWith(
                                                                      "--"
                                                                  )
                                                                ? String(
                                                                      n
                                                                  ).trim()
                                                                : n + "px") +
                                                          ";"
                                                  ));
                                  return r ? [r + " {"].concat(a, ["}"]) : a;
                              })(e)
                            : e.toString();
            }
            var ef = function (e) {
                return (Array.isArray(e) && (e.isCss = !0), e);
            };
            function em(e) {
                for (
                    var t = arguments.length,
                        r = Array(t > 1 ? t - 1 : 0),
                        n = 1;
                    n < t;
                    n++
                )
                    r[n - 1] = arguments[n];
                return g(e) || f(e)
                    ? ef(ep(p(m, [e].concat(r))))
                    : 0 === r.length &&
                        1 === e.length &&
                        "string" == typeof e[0]
                      ? e
                      : ef(ep(p(e, r)));
            }
            var ey = function (e, t, r) {
                    return (
                        void 0 === r && (r = y),
                        (e.theme !== r.theme && e.theme) || t || r.theme
                    );
                },
                eg = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
                ev = /(^-|-$)/g;
            function eb(e) {
                return e.replace(eg, "-").replace(ev, "");
            }
            var ew = function (e) {
                return H(Y(e) >>> 0);
            };
            function eS(e) {
                return "string" == typeof e;
            }
            var eR = function (e) {
                    return (
                        "function" == typeof e ||
                        ("object" == typeof e &&
                            null !== e &&
                            !Array.isArray(e))
                    );
                },
                eE = a.createContext();
            function ex(e) {
                var t = (0, a.useContext)(eE),
                    r = (0, a.useMemo)(
                        function () {
                            var r;
                            return (
                                (r = e.theme),
                                r
                                    ? g(r)
                                        ? r(t)
                                        : Array.isArray(r) ||
                                            "object" != typeof r
                                          ? E(8)
                                          : t
                                            ? h({}, t, {}, r)
                                            : r
                                    : E(14)
                            );
                        },
                        [e.theme, t]
                    );
                return e.children
                    ? a.createElement(eE.Provider, { value: r }, e.children)
                    : null;
            }
            eE.Consumer;
            var eC = {},
                ek = function (e) {
                    return (function e(t, r, a) {
                        if (
                            (void 0 === a && (a = y),
                            !(0, n.isValidElementType)(r))
                        )
                            return E(1, String(r));
                        var o = function () {
                            return t(r, a, em.apply(void 0, arguments));
                        };
                        return (
                            (o.withConfig = function (n) {
                                return e(t, r, h({}, a, {}, n));
                            }),
                            (o.attrs = function (n) {
                                return e(
                                    t,
                                    r,
                                    h({}, a, {
                                        attrs: Array.prototype
                                            .concat(a.attrs, n)
                                            .filter(Boolean),
                                    })
                                );
                            }),
                            o
                        );
                    })(function e(t, r, n) {
                        var o = b(t),
                            i = !eS(t),
                            s = r.attrs,
                            l = void 0 === s ? m : s,
                            c = r.componentId,
                            p =
                                void 0 === c
                                    ? ((x = r.displayName),
                                      (C = r.parentComponentId),
                                      (eC[
                                          (k =
                                              "string" != typeof x
                                                  ? "sc"
                                                  : eb(x))
                                      ] = (eC[k] || 0) + 1),
                                      (N = k + "-" + ew("5.3.11" + k + eC[k])),
                                      C ? C + "-" + N : N)
                                    : c,
                            f = r.displayName,
                            w =
                                void 0 === f
                                    ? eS(t)
                                        ? "styled." + t
                                        : "Styled(" + v(t) + ")"
                                    : f,
                            S =
                                r.displayName && r.componentId
                                    ? eb(r.displayName) + "-" + r.componentId
                                    : r.componentId || p,
                            R =
                                o && t.attrs
                                    ? Array.prototype
                                          .concat(t.attrs, l)
                                          .filter(Boolean)
                                    : l,
                            E = r.shouldForwardProp;
                        o &&
                            t.shouldForwardProp &&
                            (E = r.shouldForwardProp
                                ? function (e, n, a) {
                                      return (
                                          t.shouldForwardProp(e, n, a) &&
                                          r.shouldForwardProp(e, n, a)
                                      );
                                  }
                                : t.shouldForwardProp);
                        var x,
                            C,
                            k,
                            N,
                            P,
                            T = new G(n, S, o ? t.componentStyle : void 0),
                            j = T.isStatic && 0 === l.length,
                            L = function (e, t) {
                                return (function (e, t, r, n) {
                                    var o,
                                        i,
                                        s,
                                        l,
                                        c,
                                        d = e.attrs,
                                        p = e.componentStyle,
                                        f = e.defaultProps,
                                        m = e.foldedComponentIds,
                                        v = e.shouldForwardProp,
                                        b = e.styledComponentId,
                                        w = e.target,
                                        S =
                                            ((o =
                                                ey(
                                                    t,
                                                    (0, a.useContext)(eE),
                                                    f
                                                ) || y),
                                            void 0 === o && (o = y),
                                            (i = h({}, t, { theme: o })),
                                            (s = {}),
                                            d.forEach(function (e) {
                                                var t,
                                                    r,
                                                    n,
                                                    a = e;
                                                for (t in (g(a) && (a = a(i)),
                                                a))
                                                    i[t] = s[t] =
                                                        "className" === t
                                                            ? ((r = s[t]),
                                                              (n = a[t]),
                                                              r && n
                                                                  ? r + " " + n
                                                                  : r || n)
                                                            : a[t];
                                            }),
                                            [i, s]),
                                        R = S[0],
                                        E = S[1],
                                        x =
                                            ((l = en()),
                                            (c = ea()),
                                            n
                                                ? p.generateAndInjectStyles(
                                                      y,
                                                      l,
                                                      c
                                                  )
                                                : p.generateAndInjectStyles(
                                                      R,
                                                      l,
                                                      c
                                                  )),
                                        C = E.$as || t.$as || E.as || t.as || w,
                                        k = eS(C),
                                        N = E !== t ? h({}, t, {}, E) : t,
                                        P = {};
                                    for (var T in N)
                                        "$" !== T[0] &&
                                            "as" !== T &&
                                            ("forwardedAs" === T
                                                ? (P.as = N[T])
                                                : (v
                                                      ? v(T, u.A, C)
                                                      : !k || (0, u.A)(T)) &&
                                                  (P[T] = N[T]));
                                    return (
                                        t.style &&
                                            E.style !== t.style &&
                                            (P.style = h(
                                                {},
                                                t.style,
                                                {},
                                                E.style
                                            )),
                                        (P.className = Array.prototype
                                            .concat(
                                                m,
                                                b,
                                                x !== b ? x : null,
                                                t.className,
                                                E.className
                                            )
                                            .filter(Boolean)
                                            .join(" ")),
                                        (P.ref = r),
                                        (0, a.createElement)(C, P)
                                    );
                                })(P, e, t, j);
                            };
                        return (
                            (L.displayName = w),
                            ((P = a.forwardRef(L)).attrs = R),
                            (P.componentStyle = T),
                            (P.displayName = w),
                            (P.shouldForwardProp = E),
                            (P.foldedComponentIds = o
                                ? Array.prototype.concat(
                                      t.foldedComponentIds,
                                      t.styledComponentId
                                  )
                                : m),
                            (P.styledComponentId = S),
                            (P.target = o ? t.target : t),
                            (P.withComponent = function (t) {
                                var a = r.componentId,
                                    o = (function (e, t) {
                                        if (null == e) return {};
                                        var r,
                                            n,
                                            a = {},
                                            o = Object.keys(e);
                                        for (n = 0; n < o.length; n++)
                                            t.indexOf((r = o[n])) >= 0 ||
                                                (a[r] = e[r]);
                                        return a;
                                    })(r, ["componentId"]),
                                    i = a && a + "-" + (eS(t) ? t : eb(v(t)));
                                return e(
                                    t,
                                    h({}, o, { attrs: R, componentId: i }),
                                    n
                                );
                            }),
                            Object.defineProperty(P, "defaultProps", {
                                get: function () {
                                    return this._foldedDefaultProps;
                                },
                                set: function (e) {
                                    this._foldedDefaultProps = o
                                        ? (function e(t) {
                                              for (
                                                  var r = arguments.length,
                                                      n = Array(
                                                          r > 1 ? r - 1 : 0
                                                      ),
                                                      a = 1;
                                                  a < r;
                                                  a++
                                              )
                                                  n[a - 1] = arguments[a];
                                              for (
                                                  var o = 0;
                                                  o < n.length;
                                                  o++
                                              ) {
                                                  var i = n[o];
                                                  if (eR(i))
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
                                                                  var a = t[n];
                                                                  eR(r) && eR(a)
                                                                      ? e(a, r)
                                                                      : (t[n] =
                                                                            r);
                                                              })(t, i[s], s);
                                              }
                                              return t;
                                          })({}, t.defaultProps, e)
                                        : e;
                                },
                            }),
                            Object.defineProperty(P, "toString", {
                                value: function () {
                                    return "." + P.styledComponentId;
                                },
                            }),
                            i &&
                                d()(P, t, {
                                    attrs: !0,
                                    componentStyle: !0,
                                    displayName: !0,
                                    foldedComponentIds: !0,
                                    shouldForwardProp: !0,
                                    styledComponentId: !0,
                                    target: !0,
                                    withComponent: !0,
                                }),
                            P
                        );
                    }, e);
                };
            [
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
                ek[e] = ek(e);
            });
            var eN = (function () {
                function e(e, t) {
                    ((this.rules = e),
                        (this.componentId = t),
                        (this.isStatic = V(e)),
                        U.registerId(this.componentId + 1));
                }
                var t = e.prototype;
                return (
                    (t.createStyles = function (e, t, r, n) {
                        var a = n(ep(this.rules, t, r, n).join(""), ""),
                            o = this.componentId + e;
                        r.insertRules(o, o, a);
                    }),
                    (t.removeStyles = function (e, t) {
                        t.clearRules(this.componentId + e);
                    }),
                    (t.renderStyles = function (e, t, r, n) {
                        (e > 2 && U.registerId(this.componentId + e),
                            this.removeStyles(e, r),
                            this.createStyles(e, t, r, n));
                    }),
                    e
                );
            })();
            function eP(e) {
                for (
                    var t = arguments.length,
                        r = Array(t > 1 ? t - 1 : 0),
                        n = 1;
                    n < t;
                    n++
                )
                    r[n - 1] = arguments[n];
                var o = em.apply(void 0, [e].concat(r)),
                    i = "sc-global-" + ew(JSON.stringify(o)),
                    s = new eN(o, i);
                function l(e) {
                    var t = en(),
                        r = ea(),
                        n = (0, a.useContext)(eE),
                        o = (0, a.useRef)(t.allocateGSInstance(i)).current;
                    return (
                        t.server && u(o, e, t, n, r),
                        (0, a.useLayoutEffect)(
                            function () {
                                if (!t.server)
                                    return (
                                        u(o, e, t, n, r),
                                        function () {
                                            return s.removeStyles(o, t);
                                        }
                                    );
                            },
                            [o, e, t, n, r]
                        ),
                        null
                    );
                }
                function u(e, t, r, n, a) {
                    if (s.isStatic) s.renderStyles(e, R, r, a);
                    else {
                        var o = h({}, t, { theme: ey(t, n, l.defaultProps) });
                        s.renderStyles(e, o, r, a);
                    }
                }
                return a.memo(l);
            }
            function eT(e) {
                for (
                    var t = arguments.length,
                        r = Array(t > 1 ? t - 1 : 0),
                        n = 1;
                    n < t;
                    n++
                )
                    r[n - 1] = arguments[n];
                var a = em.apply(void 0, [e].concat(r)).join("");
                return new ei(ew(a), a);
            }
            !(function () {
                var e = function () {
                    var e = this;
                    ((this._emitSheetCSS = function () {
                        var t = e.instance.toString();
                        if (!t) return "";
                        var r = D();
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
                            return e.sealed ? E(2) : e._emitSheetCSS();
                        }),
                        (this.getStyleElement = function () {
                            if (e.sealed) return E(2);
                            var t,
                                r =
                                    (((t = {})[w] = ""),
                                    (t["data-styled-version"] = "5.3.11"),
                                    (t.dangerouslySetInnerHTML = {
                                        __html: e.instance.toString(),
                                    }),
                                    t),
                                n = D();
                            return (
                                n && (r.nonce = n),
                                [
                                    a.createElement(
                                        "style",
                                        h({}, r, { key: "sc-0-0" })
                                    ),
                                ]
                            );
                        }),
                        (this.seal = function () {
                            e.sealed = !0;
                        }),
                        (this.instance = new U({ isServer: !0 })),
                        (this.sealed = !1));
                }.prototype;
                ((e.collectStyles = function (e) {
                    return this.sealed
                        ? E(2)
                        : a.createElement(eo, { sheet: this.instance }, e);
                }),
                    (e.interleaveWithNodeStream = function (e) {
                        return E(3);
                    }));
            })();
            let ej = ek;
        },
        32420: (e, t, r) => {
            r.d(t, { E: () => n });
            let n = {
                FETCH_THEN_TRANSITION: "fetch-then-transition",
                TRANSITION_WHILE_FETCHING: "transition-while-fetch",
                TRANSITION_WITHOUT_FETCH: "transition-without-fetch",
            };
        },
        63809: (e, t, r) => {
            r.d(t, { R: () => DeferredRegistry });
            var n = r(7531);
            function a(e, t) {
                var r = (function (e, t, r) {
                    if (!t.has(e))
                        throw TypeError(
                            "attempted to get private field on non-instance"
                        );
                    return t.get(e);
                })(e, t, 0);
                return r.get ? r.get.call(e) : r.value;
            }
            var o = new WeakMap();
            let DeferredRegistry = class DeferredRegistry {
                register(e, t) {
                    let r = a(this, o).get(e);
                    if (r) r.resolve(t);
                    else {
                        let r = (0, n.Y)();
                        (r.resolve(t), a(this, o).set(e, r));
                    }
                }
                getRegistration(e) {
                    let t = a(this, o).get(e);
                    if (t) return t;
                    let r = (0, n.Y)();
                    return (a(this, o).set(e, r), r);
                }
                constructor() {
                    !(function (e, t, r) {
                        if (t.has(e))
                            throw TypeError(
                                "Cannot initialize the same private elements twice on an object"
                            );
                        t.set(e, r);
                    })(this, o, { writable: !0, value: new Map() });
                }
            };
        },
        50888: (e, t, r) => {
            r.d(t, { z: () => n });
            let n = {
                "Workers not ready":
                    "Alloy is warming its workers. This is expected during deploys and should resolve shortly.",
            };
        },
        52807: (e, t, r) => {
            r.d(t, { $h: () => DataRouterApplicationBuilder });
            var n = r(12201);
            function a(e, t) {
                if (t.has(e))
                    throw TypeError(
                        "Cannot initialize the same private elements twice on an object"
                    );
            }
            function o(e, t, r) {
                if (!t.has(e))
                    throw TypeError(
                        "attempted to " + r + " private field on non-instance"
                    );
                return t.get(e);
            }
            function i(e, t) {
                var r = o(e, t, "get");
                return r.get ? r.get.call(e) : r.value;
            }
            function s(e, t, r) {
                (a(e, t), t.set(e, r));
            }
            function l(e, t, r) {
                var n = o(e, t, "set");
                if (n.set) n.set.call(e, r);
                else {
                    if (!n.writable)
                        throw TypeError(
                            "attempted to set read only private field"
                        );
                    n.value = r;
                }
                return r;
            }
            function u(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            var c = new WeakMap(),
                d = new WeakSet();
            let DataRouterApplication = class DataRouterApplication {
                registration(e) {
                    return (
                        (this.embeddedData = e?.embeddedData),
                        {
                            routes: (function (e, t, r) {
                                if (!t.has(e))
                                    throw TypeError(
                                        "attempted to get private field on non-instance"
                                    );
                                return r;
                            })(this, d, h).call(this),
                        }
                    );
                }
                constructor(e, t) {
                    (!(function (e, t) {
                        (a(e, t), t.add(e));
                    })(this, d),
                        u(this, "name", void 0),
                        s(this, c, { writable: !0, value: void 0 }),
                        u(this, "embeddedData", void 0),
                        (this.name = e),
                        l(this, c, t),
                        (this.registration = this.registration.bind(this)));
                }
            };
            function h() {
                if ("function" == typeof i(this, c)) {
                    let e = (e) => {
                        let t = this.embeddedData?.appPayload?.enabled_features;
                        if (t && e in t) return t[e];
                    };
                    return i(this, c).call(this, { isEnabled: e });
                }
                return i(this, c);
            }
            var p = new WeakMap();
            let DataRouterApplicationBuilder = class DataRouterApplicationBuilder {
                static create(e) {
                    return new DataRouterApplicationBuilder(e);
                }
                createDataRouterAppFromRoutes(e) {
                    return (
                        l(this, p, new DataRouterApplication(this.name, e)),
                        i(this, p)
                    );
                }
                createQueryRouteConfig(
                    e,
                    { path: t, index: r, queries: a = [] }
                ) {
                    return (
                        (function (e) {
                            if (e.length > 4) throw new m(e.length);
                        })(a),
                        (function (e) {
                            if (!/^[a-z][a-zA-Z0-9]*$/.test(e))
                                throw new InvalidIdentifierError(e);
                        })(e),
                        new n.Wy({
                            appName: this.name,
                            id: e,
                            path: t,
                            queries: (function (e) {
                                let t = new Set();
                                return Object.fromEntries(
                                    e.map(({ queryName: e, ...r }) => {
                                        if (t.has(e)) throw new f(e);
                                        return (t.add(e), [e, r]);
                                    })
                                );
                            })(a),
                            index: r ?? !1,
                            getEmbeddedData: this.getEmbeddedData,
                        })
                    );
                }
                constructor(e) {
                    (u(this, "name", void 0),
                        s(this, p, { writable: !0, value: void 0 }),
                        u(this, "getEmbeddedData", () => {
                            if (!i(this, p))
                                throw Error(
                                    "getEmbeddedData should only be called after createDataRouterAppFromRoutes"
                                );
                            return i(this, p).embeddedData;
                        }),
                        (this.name = e));
                }
            };
            let f = class DuplicateRouteQueryNameError extends Error {
                    constructor(e) {
                        (super(
                            `query names cannot be duplicated: \`${e}\` has already been defined for this route.`
                        ),
                            (this.name = "DuplicateRouteQueryNameError"));
                    }
                },
                m = class InvalidNumberOfQueryConfigsError extends Error {
                    constructor(e) {
                        (super(
                            `Invalid number of query configs error. ${e} queries supplied of a max 4 queries allowed.`
                        ),
                            (this.name = "InvalidNumberOfQueryConfigsError"));
                    }
                };
            let InvalidIdentifierError = class InvalidIdentifierError extends Error {
                constructor(e) {
                    (super(`\`${e}\` must be camel cased`),
                        (this.name = "InvalidIdentifierError"));
                }
            };
        },
        11608: (e, t, r) => {
            r.d(t, { g: () => n });
            let n = { Blocking: "Blocking", Deferred: "Deferred" };
        },
        8244: (e, t, r) => {
            r.d(t, { Y: () => i });
            var n = r(26559),
                a = r(11608),
                o = r(14518);
            function i({ ...e } = {}) {
                return {
                    queryName: "mainQuery",
                    queryDeps: ({ pathname: e }) => ({ pathname: e }),
                    queryFn: async ({ routeId: e, queryDeps: t }) => {
                        let r = (0, n.jC)("dataRouter"),
                            a = {
                                ...t,
                                init: {
                                    ...t?.init,
                                    headers: { ...r, ...t?.init?.headers },
                                },
                            };
                        var i = await (0, o.X)({ queryDeps: a }),
                            s = e;
                        let l = i.payload?.[s];
                        if (!l)
                            throw Error(
                                `Unable to find payload for route Id: ${s}`
                            );
                        return { meta: i.meta, payload: l };
                    },
                    type: a.g.Blocking,
                    select: (e) => e.payload,
                    ...e,
                };
            }
        },
        14518: (e, t, r) => {
            r.d(t, { X: () => i });
            var n = r(3785),
                a = r(60039),
                o = r(66300);
            async function i({
                queryDeps: { pathname: e, searchParams: t, init: r },
            }) {
                let i = (function (e, t) {
                        let r = [e],
                            n = (function (e) {
                                if (e instanceof URLSearchParams) return e;
                                if ("string" == typeof e)
                                    return new URLSearchParams(e);
                                let t = new URLSearchParams();
                                if (null == e) return t;
                                for (let [r, n] of Array.isArray(e)
                                    ? e
                                    : Object.entries(e))
                                    null != n && t.append(r, n);
                                return t;
                            })(t).toString();
                        return (n && r.push(n.toString()), r.join("?"));
                    })(e, t),
                    s = await (0, a.Sr)(i, r);
                if (!s.ok) throw new o.o(s.statusText, s);
                let l = await s.json();
                return ((0, n.Av)(l), l);
            }
        },
        12201: (e, t, r) => {
            r.d(t, { Wy: () => QueryRoute, yT: () => b });
            var n = r(85788),
                a = r(96679),
                o = r(31993),
                i = r(33957),
                s = r(11608),
                l = r(74848),
                u = r(58394);
            function c(e, { element: t, Component: r }) {
                if (!t && !r) return;
                let n = null;
                if (
                    (void 0 !== t
                        ? (n = (0, l.jsx)(l.Fragment, { children: t }))
                        : r && (n = (0, l.jsx)(r, {})),
                    n)
                )
                    return (0, l.jsx)(u.U, { id: e, children: n });
            }
            function d(e, t) {
                if (t.has(e))
                    throw TypeError(
                        "Cannot initialize the same private elements twice on an object"
                    );
            }
            function h(e, t, r) {
                if (!t.has(e))
                    throw TypeError(
                        "attempted to " + r + " private field on non-instance"
                    );
                return t.get(e);
            }
            function p(e, t) {
                var r = h(e, t, "get");
                return r.get ? r.get.call(e) : r.value;
            }
            function f(e, t, r) {
                (d(e, t), t.set(e, r));
            }
            function m(e, t, r) {
                var n = h(e, t, "set");
                if (n.set) n.set.call(e, r);
                else {
                    if (!n.writable)
                        throw TypeError(
                            "attempted to set read only private field"
                        );
                    n.value = r;
                }
                return r;
            }
            function y(e, t, r) {
                if (!t.has(e))
                    throw TypeError(
                        "attempted to get private field on non-instance"
                    );
                return r;
            }
            function g(e, t) {
                (d(e, t), t.add(e));
            }
            function v(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            function b() {
                return (0, n.FE)();
            }
            let w = {
                    refetchOnWindowFocus: !1,
                    retry: !1,
                    networkMode: "always",
                    staleTime: 864e5,
                },
                S = 200;
            var R = new WeakMap(),
                E = new WeakMap(),
                x = new WeakSet(),
                C = new WeakMap(),
                k = new WeakSet();
            let QueryRoute = class QueryRoute {
                isSameRoute(e) {
                    return !!(
                        "object" == typeof e &&
                        e &&
                        "id" in e &&
                        "string" == typeof e.id &&
                        e.id === this.id
                    );
                }
                generatePath(e, t) {
                    return (0, n.AO)({
                        pathname: (0, n.tW)(this.path, e),
                        search: t?.search
                            ? new URLSearchParams(t.search).toString()
                            : void 0,
                        hash: t?.hash,
                    });
                }
                constructor(e) {
                    (g(this, x),
                        g(this, k),
                        f(this, R, { writable: !0, value: void 0 }),
                        f(this, E, { writable: !0, value: void 0 }),
                        v(this, "id", void 0),
                        v(this, "path", void 0),
                        v(this, "queries", void 0),
                        v(this, "index", void 0),
                        f(this, C, {
                            writable: !0,
                            value: async ({ request: e, params: t }) => {
                                let r = [],
                                    { searchParams: l } = new URL(
                                        e.url,
                                        a.fV.origin
                                    ),
                                    u = (function (e, t) {
                                        return (0, n.tW)(
                                            e,
                                            Object.fromEntries(
                                                T(t).map(([e, t]) => [
                                                    e,
                                                    void 0 === t ? null : t,
                                                ])
                                            )
                                        );
                                    })(this.path, t),
                                    c = (0, i.S)(),
                                    d = T(this.queries).map(
                                        ([
                                            e,
                                            {
                                                queryFn: n,
                                                queryDeps: i,
                                                type: d = s.g.Deferred,
                                                staleTimeForNavigation: h = S,
                                                ...f
                                            },
                                        ]) => {
                                            let m =
                                                    i?.({
                                                        pathname: u,
                                                        params: t,
                                                        searchParams: l,
                                                    }) ?? {},
                                                g = {
                                                    appName: p(this, R),
                                                    routeId: this.id,
                                                    routePath: this.path,
                                                    queryName: e.toString(),
                                                    queryDeps: m,
                                                },
                                                v = (0, o.j)({
                                                    ...w,
                                                    queryKey: (function ({
                                                        appName: e,
                                                        routeId: t,
                                                        routePath: r,
                                                        queryName: n,
                                                        queryDeps: a,
                                                    }) {
                                                        return [e, t, r, n, a];
                                                    })(g),
                                                    queryFn: ({
                                                        signal: e,
                                                        meta: t,
                                                    }) =>
                                                        n(g, {
                                                            signal: e,
                                                            meta: t,
                                                        }),
                                                    ...f,
                                                });
                                            if (
                                                (y(this, x, N).call(
                                                    this,
                                                    e,
                                                    v.queryKey
                                                ),
                                                a.KJ)
                                            ) {
                                                let e = { ...v, staleTime: h };
                                                switch (d) {
                                                    case s.g.Deferred:
                                                        c.prefetchQuery(e);
                                                        break;
                                                    case s.g.Blocking: {
                                                        let t =
                                                            c.ensureQueryData({
                                                                ...e,
                                                                revalidateIfStale:
                                                                    !0,
                                                            });
                                                        r.push(t);
                                                        break;
                                                    }
                                                    default:
                                                        throw Error(
                                                            `Invalid QueryRouteQueryType defined, \`${d}\`. Valid QueryRouteQueryTypes are ${JSON.stringify(Object.keys(s.g))}`
                                                        );
                                                }
                                            }
                                            return [
                                                e,
                                                { queryConfig: v, type: d },
                                            ];
                                        }
                                    );
                                return (
                                    await Promise.all(r),
                                    {
                                        route: this,
                                        queries: Object.fromEntries(d),
                                    }
                                );
                            },
                        }),
                        v(
                            this,
                            "toRoute",
                            ({ Component: e, element: t, ...r }) =>
                                this.index
                                    ? {
                                          ...r,
                                          id: this.id,
                                          children: void 0,
                                          path: this.path,
                                          index: this.index,
                                          loader: p(this, C),
                                          element: c(this.id, {
                                              element: t,
                                              Component: e,
                                          }),
                                      }
                                    : {
                                          ...r,
                                          id: this.id,
                                          path: this.path,
                                          index: this.index,
                                          loader: p(this, C),
                                          element: c(this.id, {
                                              element: t,
                                              Component: e,
                                          }),
                                      }
                        ),
                        m(this, R, e.appName),
                        (this.id = e.id),
                        (this.path = e.path),
                        (this.queries = e.queries),
                        (this.index = e.index),
                        m(this, E, e.getEmbeddedData));
                }
            };
            function N(e, t) {
                let r = (0, i.S)(),
                    n = p(this, E).call(this),
                    a = n?.payload,
                    o = y(this, k, P).call(this, n, e);
                o &&
                    ("mainQuery" === e
                        ? delete a?.[this.id]
                        : delete a?.[this.id]?.[e],
                    r.setQueryData(t, o));
            }
            function P(e, t) {
                let r = e?.payload,
                    n = r?.[this.id];
                if (!n) return;
                if ("mainQuery" !== t) return n?.[t];
                let a = e?.title || e?.meta?.title;
                return { meta: a ? { title: a } : void 0, payload: n };
            }
            let T = (e) => Object.entries(e);
        },
        66300: (e, t, r) => {
            r.d(t, { c: () => n, o: () => ResponseError });
            let ResponseError = class ResponseError extends Error {
                constructor(e, t) {
                    (super(e),
                        (function (e, t, r) {
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                        })(this, "response", void 0),
                        (this.response = t),
                        (this.name = "ResponseError"));
                }
            };
            function n(e) {
                return e instanceof ResponseError;
            }
        },
        54757: (e, t, r) => {
            r.d(t, { E: () => o });
            var n = r(96540),
                a = r(30729);
            function o() {
                return (0, n.useContext)(a.e);
            }
        },
        67420: (e, t, r) => {
            r.d(t, { L: () => o });
            var n = r(21728),
                a = r(12201);
            function o(e) {
                let t,
                    r = (0, n.c)(5),
                    o = (0, a.yT)();
                if (r[0] !== o || r[1] !== e) {
                    let n;
                    (r[3] !== e
                        ? ((n = (t) => t.id === e.id), (r[3] = e), (r[4] = n))
                        : (n = r[4]),
                        (t = o.find(n)),
                        (r[0] = o),
                        (r[1] = e),
                        (r[2] = t));
                } else t = r[2];
                let s = t;
                if (!s) {
                    let t = o.map(i).join(", ");
                    throw Error(
                        `Cannot read params from unmounted route with ID "${e.id}". Mounted route IDs are: "${t}"`
                    );
                }
                return s.params;
            }
            function i(e) {
                return e.id;
            }
        },
        60244: (e, t, r) => {
            r.d(t, { B1: () => s, ks: () => c, pw: () => h, xX: () => d });
            var n = r(21728),
                a = r(85788),
                o = r(97286),
                i = r(12201);
            function s(e, t) {
                let { allowReadFromChildRoutes: r } = void 0 === t ? {} : t,
                    n = (0, i.yT)(),
                    o = n.findIndex((t) => t.id === e.id);
                if (-1 === o) {
                    let t = n.map(u).join(", ");
                    throw Error(
                        `Cannot read data from unmounted route with ID "${e.id}". Mounted route IDs are: ${t}`
                    );
                }
                let { route: s } = (0, a.LG)(),
                    { queries: c } = (0, a.Ew)(e.id),
                    d = n.findIndex((e) => e.id === s.id);
                if (!r && o > d) {
                    let t = n.map(l).join(", ");
                    throw Error(
                        `Cannot read data from child route with ID "${e.id}" from parent route "${s.id}". Use { allowReadFromChildRoutes: true } option to enable this.  Mounted route IDs are: ${t}`
                    );
                }
                return c;
            }
            function l(e) {
                return e.id;
            }
            function u(e) {
                return e.id;
            }
            function c(e, t, r) {
                return s(e, r)[t];
            }
            function d(e, t, r) {
                let a,
                    i,
                    s = (0, n.c)(6),
                    { queryConfig: l } = c(e, t);
                s[0] !== l || s[1] !== r
                    ? ((a = { ...l, ...r }), (s[0] = l), (s[1] = r), (s[2] = a))
                    : (a = s[2]);
                let u = (0, o.I)(a);
                return (
                    s[3] !== l.queryKey || s[4] !== u
                        ? ((i = { ...u, queryKey: l.queryKey }),
                          (s[3] = l.queryKey),
                          (s[4] = u),
                          (s[5] = i))
                        : (i = s[5]),
                    i
                );
            }
            function h(e, t, r) {
                let a,
                    i,
                    s,
                    l = (0, n.c)(7);
                l[0] === Symbol.for("react.memo_cache_sentinel")
                    ? ((a = { allowReadFromChildRoutes: !0 }), (l[0] = a))
                    : (a = l[0]);
                let { queryConfig: u } = c(e, t, a);
                l[1] !== u || l[2] !== r
                    ? ((i = { ...u, ...r }), (l[1] = u), (l[2] = r), (l[3] = i))
                    : (i = l[3]);
                let d = (0, o.I)(i);
                return (
                    l[4] !== u.queryKey || l[5] !== d
                        ? ((s = { ...d, queryKey: u.queryKey }),
                          (l[4] = u.queryKey),
                          (l[5] = d),
                          (l[6] = s))
                        : (s = l[6]),
                    s
                );
            }
        },
        62301: (e, t, r) => {
            r.d(t, { Y: () => a });
            var n = r(96540);
            function a(e) {
                return Object.assign((0, n.lazy)(e), {
                    preload: async () => {
                        await e();
                    },
                });
            }
        },
        32494: (e, t, r) => {
            r.d(t, { V: () => n });
            let n = "__gh__react-core-preventAutofocus";
        },
        33957: (e, t, r) => {
            let n;
            r.d(t, { S: () => s });
            var a = r(65490);
            function o(e) {
                return JSON.stringify(e, (e, t) =>
                    !(function (e) {
                        if (!i(e)) return !1;
                        let t = e.constructor;
                        if (void 0 === t) return !0;
                        let r = t.prototype;
                        return (
                            !!i(r) &&
                            !!r.hasOwnProperty("isPrototypeOf") &&
                            Object.getPrototypeOf(e) === Object.prototype
                        );
                    })(t)
                        ? t instanceof URLSearchParams
                            ? new URLSearchParams(
                                  [...t.entries()].sort(([e], [t]) =>
                                      e.localeCompare(t)
                                  )
                              ).toString()
                            : "bigint" == typeof t
                              ? `$bigint:${t}`
                              : t instanceof Set
                                ? Array.from(t).sort()
                                : t instanceof Map
                                  ? Array.from(t.entries())
                                        .sort(([e], [t]) => e.localeCompare(t))
                                        .reduce(
                                            (e, [t, r]) => ((e[t] = r), e),
                                            {}
                                        )
                                  : t
                        : Object.keys(t)
                              .sort()
                              .reduce((e, r) => ((e[r] = t[r]), e), {})
                );
            }
            function i(e) {
                return "[object Object]" === Object.prototype.toString.call(e);
            }
            function s() {
                return (
                    n ??
                    (n = new a.E({
                        defaultOptions: {
                            queries: {
                                refetchOnWindowFocus: !1,
                                retry: !1,
                                networkMode: "always",
                                queryKeyHashFn: o,
                            },
                            mutations: { networkMode: "always" },
                        },
                    }))
                );
            }
        },
        37573: (e, t, r) => {
            r.d(t, { Mm: () => i, QJ: () => s, b3: () => o });
            var n = r(21728),
                a = r(96540);
            function o(e) {
                let t = e?.anchor;
                if (!t) return {};
                let r =
                    t.getAttribute("data-inital-disabled")?.toLowerCase() ===
                    "true";
                return (
                    "disabled" in t && (t.disabled = r),
                    t.classList.remove("cursor-wait"),
                    { reactPartialAnchor: { __wrapperElement: e } }
                );
            }
            function i(e) {
                let t,
                    r,
                    o,
                    i,
                    l = (0, n.c)(7),
                    u = (0, a.useRef)(e.__wrapperElement.anchor || null),
                    [c, d] = (0, a.useState)(!1);
                l[0] !== c
                    ? ((t = () => {
                          d(!c);
                      }),
                      (l[0] = c),
                      (l[1] = t))
                    : (t = l[1]);
                let h = t;
                return (
                    l[2] !== c
                        ? ((r = () => {
                              u.current &&
                                  (u.current.setAttribute(
                                      "aria-expanded",
                                      c.toString()
                                  ),
                                  u.current.setAttribute(
                                      "aria-haspopup",
                                      "true"
                                  ));
                          }),
                          (o = [u, c]),
                          (l[2] = c),
                          (l[3] = r),
                          (l[4] = o))
                        : ((r = l[3]), (o = l[4])),
                    (0, a.useEffect)(r, o),
                    s(e, h),
                    l[5] !== c
                        ? ((i = { ref: u, open: c, setOpen: d }),
                          (l[5] = c),
                          (l[6] = i))
                        : (i = l[6]),
                    i
                );
            }
            function s(e, t) {
                let r,
                    o,
                    i = (0, n.c)(3),
                    s = (0, a.useRef)(e.__wrapperElement.anchor);
                (i[0] !== t
                    ? ((r = () => {
                          let e = s.current;
                          if (e)
                              return (
                                  e.addEventListener("click", t),
                                  () => e.removeEventListener("click", t)
                              );
                      }),
                      (o = [s, t]),
                      (i[0] = t),
                      (i[1] = r),
                      (i[2] = o))
                    : ((r = i[1]), (o = i[2])),
                    (0, a.useEffect)(r, o));
            }
        },
        48551: (e, t, r) => {
            r.d(t, { w: () => eF, o: () => eB });
            var n,
                a = r(74848),
                o = r(39595),
                i = r(13255),
                s = r(66871),
                l = r(85788),
                u = r(97396),
                c = n || (n = {});
            ((c.Pop = "POP"), (c.Push = "PUSH"), (c.Replace = "REPLACE"));
            var d = r(63809);
            let h = new d.R();
            async function p(e) {
                return h.getRegistration(e).promise;
            }
            var f = r(78448),
                m = r(34788),
                y = r(21728),
                g = r(96540),
                v = r(54757),
                b = r(38291);
            let w = (0, g.memo)(function (e) {
                    let t = (0, y.c)(4),
                        { routes: r } = e;
                    if ((0, v.E)()) {
                        let e;
                        return (
                            t[0] !== r
                                ? ((e = (0, a.jsx)(R, { routes: r })),
                                  (t[0] = r),
                                  (t[1] = e))
                                : (e = t[1]),
                            e
                        );
                    }
                    {
                        let e;
                        return (
                            t[2] !== r
                                ? ((e = (0, a.jsx)(S, { routes: r })),
                                  (t[2] = r),
                                  (t[3] = e))
                                : (e = t[3]),
                            e
                        );
                    }
                }),
                S = (0, g.memo)(function (e) {
                    let t,
                        r,
                        n,
                        a,
                        o,
                        i = (0, y.c)(9),
                        { routes: s } = e,
                        u = (0, l.zy)();
                    return (
                        i[0] !== u || i[1] !== s
                            ? ((r = (0, l.ue)(s, u)?.map(k) ?? []),
                              (i[0] = u),
                              (i[1] = s),
                              (i[2] = r))
                            : (r = i[2]),
                        (t = r),
                        i[3] !== s
                            ? ((a = C(s)), (i[3] = s), (i[4] = a))
                            : (a = i[4]),
                        (n = a),
                        i[5] !== u || i[6] !== t || i[7] !== n
                            ? ((o = { location: u, matches: t, routes: n }),
                              (i[5] = u),
                              (i[6] = t),
                              (i[7] = n),
                              (i[8] = o))
                            : (o = i[8]),
                        E(o),
                        null
                    );
                }),
                R = (0, g.memo)(function (e) {
                    let t,
                        r,
                        n,
                        a = (0, y.c)(6),
                        { routes: o } = e,
                        i = (0, l.zy)(),
                        s = (0, l.FE)();
                    return (
                        a[0] !== o
                            ? ((r = C(o)), (a[0] = o), (a[1] = r))
                            : (r = a[1]),
                        (t = r),
                        a[2] !== i || a[3] !== s || a[4] !== t
                            ? ((n = { location: i, matches: s, routes: t }),
                              (a[2] = i),
                              (a[3] = s),
                              (a[4] = t),
                              (a[5] = n))
                            : (n = a[5]),
                        E(n),
                        null
                    );
                });
            function E(e) {
                let t,
                    r,
                    n,
                    a,
                    o = (0, y.c)(10),
                    { location: i, matches: s, routes: l } = e;
                (o[0] !== i || o[1] !== s || o[2] !== l
                    ? ((t = () => {
                          let e = new AbortController();
                          return (
                              document.addEventListener(
                                  "turbo:load",
                                  () => {
                                      (0, b.n)().setState({
                                          location: i,
                                          matches: s,
                                          routes: l,
                                      });
                                  },
                                  { signal: e.signal }
                              ),
                              () => {
                                  e.abort();
                              }
                          );
                      }),
                      (r = [i, l, s]),
                      (o[0] = i),
                      (o[1] = s),
                      (o[2] = l),
                      (o[3] = t),
                      (o[4] = r))
                    : ((t = o[3]), (r = o[4])),
                    (0, g.useEffect)(t, r),
                    o[5] !== i || o[6] !== s || o[7] !== l
                        ? ((n = () => (
                              (0, b.n)().setState({
                                  location: i,
                                  matches: s,
                                  routes: l,
                              }),
                              x
                          )),
                          (a = [i, l, s]),
                          (o[5] = i),
                          (o[6] = s),
                          (o[7] = l),
                          (o[8] = n),
                          (o[9] = a))
                        : ((n = o[8]), (a = o[9])),
                    (0, g.useEffect)(n, a));
            }
            function x() {
                (0, b.n)().setState(null);
            }
            function C(e, t = "") {
                let r = [];
                for (let o of e) {
                    let e,
                        i = !0 === o.index,
                        s = o.path ?? "";
                    if (i)
                        e =
                            t.startsWith("/") && !t.endsWith("/")
                                ? t.endsWith("/")
                                    ? t
                                    : `${t}/`
                                : t || "/";
                    else {
                        var n, a;
                        e = s.startsWith("/")
                            ? s
                            : ((n = t),
                              (a = s),
                              n
                                  ? a
                                      ? `${n.replace(/\/+$/, "")}/${a.replace(/^\/+/, "")}`
                                      : n
                                  : a);
                    }
                    let l =
                        "id" in o && "string" == typeof o.id ? o.id : e || "/";
                    (r.push({ id: l, pathname: e || "/", route: o }),
                        o.children && r.push(...C(o.children, e)));
                }
                return r;
            }
            try {
                w.displayName || (w.displayName = "RouterDevTools");
            } catch {}
            try {
                S.displayName || (S.displayName = "NavigatorRouterDevTools");
            } catch {}
            try {
                R.displayName || (R.displayName = "DataRouterDevTools");
            } catch {}
            function k(e) {
                return (function ({ pathname: e, route: t, params: r }) {
                    return {
                        id: t.id ?? t.path ?? e,
                        pathname: e,
                        params: r,
                        data: void 0,
                        handle: t.handle,
                    };
                })(e);
            }
            var N = r(45499),
                P = r(64262),
                T = r(32494);
            function j(e, t, r) {
                let n,
                    a,
                    o,
                    i = (0, y.c)(8),
                    s = (0, g.useRef)(void 0),
                    l = (0, g.useRef)(t.state);
                (i[0] !== t.state
                    ? ((n = () => {
                          l.current = t.state;
                      }),
                      (i[0] = t.state),
                      (i[1] = n))
                    : (n = i[1]),
                    (0, g.useEffect)(n),
                    i[2] !== r ||
                    i[3] !== e ||
                    i[4] !== t.pathname ||
                    i[5] !== t.search
                        ? ((a = () => {
                              if ("POP" === r) return;
                              let n = t.pathname + t.search;
                              if (void 0 === s.current) s.current = n;
                              else if (s.current !== n && !e) {
                                  var a;
                                  if (
                                      !(
                                          "object" == typeof (a = l.current) &&
                                          null !== a &&
                                          T.V in a &&
                                          !0 === a[T.V]
                                      )
                                  ) {
                                      let e = document.querySelector(
                                          "[data-react-autofocus]"
                                      );
                                      (!e &&
                                          (e =
                                              document.querySelector(
                                                  "react-app h1"
                                              )) &&
                                          !e.hasAttribute("tabindex") &&
                                          e.setAttribute("tabindex", "-1"),
                                          e?.focus());
                                  }
                                  s.current = n;
                              }
                          }),
                          (o = [e, t.pathname, t.search, r]),
                          (i[2] = r),
                          (i[3] = e),
                          (i[4] = t.pathname),
                          (i[5] = t.search),
                          (i[6] = a),
                          (i[7] = o))
                        : ((a = i[6]), (o = i[7])),
                    (0, g.useEffect)(a, o));
            }
            function L() {
                return (j(!1, (0, l.zy)(), (0, l.wQ)()), null);
            }
            try {
                L.displayName || (L.displayName = "NavigationFocusListener");
            } catch {}
            var A = r(97665),
                _ = r(46320),
                D = r(21715),
                O = r(11608),
                I = r(12201);
            let M = D.z.INITIAL;
            function $() {
                let e,
                    t,
                    r,
                    n,
                    a = (0, y.c)(10),
                    o = (0, P.X)(),
                    i = (0, I.yT)(),
                    s = (0, A.jE)();
                return (
                    a[0] !== o || a[1] !== i || a[2] !== s
                        ? ((e = () => {
                              let e = z(i, s);
                              document.dispatchEvent(
                                  new _.gh({ payload: e, appPayload: o })
                              );
                          }),
                          (t = [i, o, s]),
                          (a[0] = o),
                          (a[1] = i),
                          (a[2] = s),
                          (a[3] = e),
                          (a[4] = t))
                        : ((e = a[3]), (t = a[4])),
                    (0, g.useEffect)(e, t),
                    a[5] !== o || a[6] !== i || a[7] !== s
                        ? ((r = () => {
                              let e = function () {
                                  let e = z(i, s);
                                  document.dispatchEvent(
                                      new _.gh({ payload: e, appPayload: o })
                                  );
                              };
                              return (
                                  document.addEventListener(M, e),
                                  () => {
                                      document.removeEventListener(M, e);
                                  }
                              );
                          }),
                          (n = [i, o, s]),
                          (a[5] = o),
                          (a[6] = i),
                          (a[7] = s),
                          (a[8] = r),
                          (a[9] = n))
                        : ((r = a[8]), (n = a[9])),
                    (0, g.useEffect)(r, n),
                    null
                );
            }
            function z(e, t) {
                let r = {};
                for (let n of e) {
                    if (!n.data) continue;
                    let e = n.data.route.id;
                    for (let a of Object.values(n.data.queries))
                        a.type === O.g.Blocking &&
                            (r[e] = t.getQueryData(a.queryConfig.queryKey));
                }
                return r;
            }
            try {
                $.displayName || ($.displayName = "PublishPayload");
            } catch {}
            var W = r(2604),
                U = r(13233),
                B = r(96679),
                F = r(17515);
            let H = new Map(),
                q = !1,
                Y = B.fV.href;
            async function V() {
                let { session: e } = await r
                    .e(
                        "vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js"
                    )
                    .then(r.bind(r, 7332));
                (document.addEventListener("turbo:click", (e) => {
                    Y = e.detail.url;
                }),
                    window.addEventListener("popstate", () => {
                        let { scrollPosition: t } =
                            e.history.getRestorationDataForIdentifier(
                                e.history.restorationIdentifier
                            ) || {};
                        t && H.set(window.location.href, t);
                    }));
            }
            async function J() {
                B.cg && (q || (await V(), (q = !0)));
            }
            function G() {
                let e = window.location.href;
                if (e === Y && e.includes("#")) return;
                Y = e;
                let t = H.get(e);
                if (!t) return;
                let r = setTimeout(() => {
                    window.scrollTo(t.x, t.y);
                }, 0);
                return () => {
                    clearTimeout(r);
                };
            }
            let X = B.cg
                ? function () {
                      (0, F.N)(G);
                  }
                : U.l;
            function K() {
                let e,
                    t = (0, y.c)(1);
                return (X(), "undefined" != typeof jest)
                    ? null
                    : (t[0] === Symbol.for("react.memo_cache_sentinel")
                          ? ((e = (0, a.jsx)(l.OA, {})), (t[0] = e))
                          : (e = t[0]),
                      e);
            }
            J();
            try {
                K.displayName || (K.displayName = "CombinedScrollRestoration");
            } catch {}
            var Q = r(78284),
                Z = r(7479);
            let ee = (e, t, r) => {
                    let n,
                        a,
                        o = (0, y.c)(6),
                        i = (0, g.useRef)(void 0);
                    (o[0] !== r ||
                    o[1] !== t ||
                    o[2] !== e.key ||
                    o[3] !== e.pathname
                        ? ((n = () => {
                              t ||
                                  (void 0 !== i.current &&
                                      i.current === e.key) ||
                                  ((0, Q.LM)()
                                      ? (et(r),
                                        (function (e) {
                                            let t = B.XC?.querySelector(
                                                "meta[name=visitor-payload]"
                                            );
                                            if (!t) return;
                                            let r = JSON.parse(atob(t.content));
                                            ((r.referrer = new URL(
                                                e,
                                                B.fV.origin
                                            ).href),
                                                (t.content = btoa(
                                                    JSON.stringify(r)
                                                )));
                                        })(e.pathname))
                                      : er(r),
                                  (i.current = e.key));
                          }),
                          (a = [e.key, e.pathname, t, r]),
                          (o[0] = r),
                          (o[1] = t),
                          (o[2] = e.key),
                          (o[3] = e.pathname),
                          (o[4] = n),
                          (o[5] = a))
                        : ((n = o[4]), (a = o[5])),
                        (0, g.useEffect)(n, a));
                },
                et = (e) => {
                    e ? (0, u.o4)() : ((0, u.rZ)(), (0, u.iS)());
                },
                er = (e) => {
                    if (e) return;
                    let t = (function () {
                        window.performance.measure(en);
                        let e = window.performance.getEntriesByName(en).pop();
                        return e ? e.duration : null;
                    })();
                    t &&
                        (0, Z.i)({
                            requestUrl: window.location.href,
                            distributionKey: "REACT_NAV_DURATION",
                            distributionValue: Math.round(t),
                            distributionTags: ["REACT_NAV_HARD"],
                        });
                },
                en = "react_nav_duration",
                ea = (0, g.memo)(function () {
                    return (
                        ee((0, l.zy)(), !!(0, l.cq)().location, null),
                        null
                    );
                });
            try {
                ea.displayName || (ea.displayName = "SoftNavLifecycleListener");
            } catch {}
            var eo = r(39627);
            function ei() {
                let e,
                    t,
                    r = (0, y.c)(4),
                    n = (0, I.yT)(),
                    a = (0, A.jE)();
                return (
                    r[0] !== n || r[1] !== a
                        ? ((e = () => {
                              for (let e of [...n].reverse()) {
                                  if (!e.data?.route) continue;
                                  let t = e.data?.queries.mainQuery;
                                  if (!t) continue;
                                  let r = (function (e, t) {
                                      let r = e.getQueryData(t.queryKey);
                                      return "title" in r && r.title
                                          ? r?.title
                                          : "meta" in r && r.meta
                                            ? r.meta.title
                                            : void 0;
                                  })(a, t.queryConfig);
                                  if (r) {
                                      (0, eo.D)((0, eo.Y)(r));
                                      break;
                                  }
                              }
                          }),
                          (t = [n, a]),
                          (r[0] = n),
                          (r[1] = a),
                          (r[2] = e),
                          (r[3] = t))
                        : ((e = r[2]), (t = r[3])),
                    (0, g.useEffect)(e, t),
                    null
                );
            }
            try {
                ei.displayName || (ei.displayName = "TitleManager");
            } catch {}
            let es = new d.R();
            async function el(e) {
                return es.getRegistration(e).promise;
            }
            var eu = r(25772);
            function ec(e) {
                let t,
                    r = (0, y.c)(2),
                    { App: n } = e;
                return (
                    !(function () {
                        let e,
                            t,
                            r,
                            n,
                            a = (0, y.c)(8),
                            o = (0, eu.B)(),
                            i = (0, P.X)();
                        (a[0] !== i || a[1] !== o
                            ? ((e = () => {
                                  let e = new AbortController();
                                  return (
                                      document.addEventListener(
                                          D.z.INITIAL,
                                          function () {
                                              document.dispatchEvent(
                                                  new _.gh({
                                                      payload: o,
                                                      appPayload: i,
                                                  })
                                              );
                                          },
                                          { signal: e.signal }
                                      ),
                                      () => {
                                          e.abort();
                                      }
                                  );
                              }),
                              (t = [i, o]),
                              (a[0] = i),
                              (a[1] = o),
                              (a[2] = e),
                              (a[3] = t))
                            : ((e = a[2]), (t = a[3])),
                            (0, g.useEffect)(e, t),
                            a[4] !== i || a[5] !== o
                                ? ((r = () => {
                                      document.dispatchEvent(
                                          new _.gh({
                                              payload: o,
                                              appPayload: i,
                                          })
                                      );
                                  }),
                                  (n = [i, o]),
                                  (a[4] = i),
                                  (a[5] = o),
                                  (a[6] = r),
                                  (a[7] = n))
                                : ((r = a[6]), (n = a[7])),
                            (0, g.useEffect)(r, n));
                    })(),
                    r[0] !== n
                        ? ((t = n
                              ? (0, a.jsx)(n, {
                                    children: (0, a.jsx)(l.sv, {}),
                                })
                              : (0, a.jsx)(l.sv, {})),
                          (r[0] = n),
                          (r[1] = t))
                        : (t = r[1]),
                    t
                );
            }
            try {
                ec.displayName || (ec.displayName = "AppWrapper");
            } catch {}
            var ed = r(70179),
                eh = r(11583),
                ep = r(32420);
            let ef = (e, t) =>
                null !== e &&
                null !== t &&
                e.pathname === t.pathname &&
                e.search === t.search &&
                !!t.hash;
            function em(e, t) {
                if (t.has(e))
                    throw TypeError(
                        "Cannot initialize the same private elements twice on an object"
                    );
            }
            function ey(e, t, r) {
                if (!t.has(e))
                    throw TypeError(
                        "attempted to " + r + " private field on non-instance"
                    );
                return t.get(e);
            }
            function eg(e, t) {
                var r = ey(e, t, "get");
                return r.get ? r.get.call(e) : r.value;
            }
            function ev(e, t, r) {
                (em(e, t), t.set(e, r));
            }
            function eb(e, t, r) {
                if (!t.has(e))
                    throw TypeError(
                        "attempted to get private field on non-instance"
                    );
                return r;
            }
            function ew(e, t) {
                (em(e, t), t.add(e));
            }
            function eS(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            var eR = new WeakMap(),
                eE = new WeakMap(),
                ex = new WeakSet(),
                eC = new WeakMap(),
                ek = new WeakSet();
            let eN = class Navigator {
                update(e) {
                    var t;
                    this.state = Object.assign({}, this.state, e);
                    let r = this.getAppNavigationState();
                    null == (t = eb(this, ex, eP)) || t.call(this, r);
                }
                subscribe(e) {
                    let t = eg(this, eE).push(e);
                    return () => {
                        eg(this, eE)[t] = null;
                    };
                }
                async handleHistoryUpdate(e) {
                    if (
                        "POP" === e.action &&
                        (0, s.JV)().turboCount !== this.state.turboCount
                    )
                        return;
                    if (this.isHashNavigation(e))
                        return void this.navigateWithCurrentPayload(e);
                    "POP" !== e.action && (0, u.SC)("react");
                    let t = this.state.routeStateMap[e.location.key],
                        r = void 0 !== t;
                    if ((t && t.isValid && (r = t.isValid()), r))
                        this.navigateFromHistory(e);
                    else {
                        let t = this.matchLocation(e.location);
                        if (!t)
                            throw Error(
                                "handleHistoryUpdate should only be called for matching routes"
                            );
                        if (
                            (t.route.transitionType ===
                                ep.E.TRANSITION_WHILE_FETCHING &&
                                this.navigateWithoutPayload(e),
                            t.route.transitionType ===
                                ep.E.TRANSITION_WITHOUT_FETCH)
                        )
                            return void this.navigateWithoutPayload(e);
                        let r = (0, s.JV)().usr?.__prefetched_data;
                        if (r)
                            return void this.leaveLoadingStateWithRouteData(
                                e,
                                r,
                                r.title
                            );
                        this.enterLoadingState(e);
                        let n = await t.route.coreLoader({
                            location: e.location,
                            pathParams: t.params,
                        });
                        if (
                            e.location !==
                            this.state.pendingNavigation?.update.location
                        )
                            return;
                        switch (n.type) {
                            case "loaded":
                                this.leaveLoadingStateWithRouteData(
                                    e,
                                    n.data,
                                    n.title,
                                    n.isValid
                                );
                                break;
                            case "error":
                                this.leaveLoadingStateWithError(e, n.error, !1);
                                break;
                            case "redirect":
                                window.location.replace(n.url + location.hash);
                                break;
                            case "route-handled-error":
                                this.leaveLoadingStateWithError(e, n.error, !0);
                                break;
                            default:
                                throw Error(
                                    `Unexpected loader result type: ${n.type}`
                                );
                        }
                    }
                }
                matchLocation(e) {
                    var t, r;
                    return (
                        (t = eg(this, eR)),
                        (r = e),
                        (0, l.ue)(t, r.pathname)?.[0]
                    );
                }
                isHashNavigation(e) {
                    return ef(this.state.location, e.location);
                }
                navigateFromHistory(e) {
                    this.update({
                        location: e.location,
                        pendingNavigation: null,
                        error: null,
                    });
                }
                enterLoadingState(e) {
                    this.update({ pendingNavigation: { update: e } });
                }
                leaveLoadingStateWithError(e, t, r) {
                    this.update({
                        location: e.location,
                        error: t,
                        pendingNavigation: null,
                        navigateOnError: r,
                    });
                }
                navigateWithoutPayload(e) {
                    this.update({ location: e.location, error: null });
                }
                navigateWithCurrentPayload(e) {
                    let t = this.state.location.key,
                        r = t + e.location.hash,
                        n = { ...e.location, key: r },
                        a = {
                            ...this.state.routeStateMap,
                            [r]: this.state.routeStateMap[t],
                        };
                    this.update({
                        ...e,
                        location: n,
                        routeStateMap: a,
                        error: null,
                    });
                }
                leaveLoadingStateWithRouteData(e, t, r, n) {
                    this.update({
                        location: e.location,
                        pendingNavigation: null,
                        routeStateMap: t
                            ? {
                                  ...this.state.routeStateMap,
                                  [e.location.key]: {
                                      type: "loaded",
                                      data: t,
                                      title: r,
                                      isValid: n,
                                  },
                              }
                            : this.state.routeStateMap,
                        error: null,
                    });
                }
                constructor(e, t, r, n) {
                    (ew(this, ex),
                        ew(this, ek),
                        eS(this, "state", void 0),
                        ev(this, eR, { writable: !0, value: void 0 }),
                        ev(this, eE, { writable: !0, value: [] }),
                        ev(this, eC, { writable: !0, value: new WeakMap() }),
                        eS(this, "getAppNavigationState", () => {
                            let e = eg(this, eC).get(this.state);
                            if (e) return e;
                            let {
                                    location: t,
                                    error: r,
                                    navigateOnError: n,
                                    routeStateMap: a,
                                    appPayload: o,
                                    pendingNavigation: i,
                                } = this.state,
                                s = {
                                    location: t,
                                    error: r,
                                    navigateOnError: n,
                                    routeStateMap: a,
                                    appPayload: o,
                                    isLoading: !!i,
                                };
                            return (eg(this, eC).set(this.state, s), s);
                        }),
                        (function (e, t, r) {
                            var n = ey(e, t, "set");
                            if (n.set) n.set.call(e, r);
                            else {
                                if (!n.writable)
                                    throw TypeError(
                                        "attempted to set read only private field"
                                    );
                                n.value = r;
                            }
                        })(this, eR, n));
                    let a = this.matchLocation(e);
                    if (!a)
                        throw Error(
                            `No route found for initial location: ${e.pathname} in [${eb(this, ek, eT).call(this)}]`
                        );
                    let {
                        data: o,
                        title: i,
                        isValid: l,
                    } = a.route.loadFromEmbeddedData({
                        embeddedData: t,
                        location: e,
                        pathParams: a.params,
                    });
                    this.state = {
                        location: e,
                        routeStateMap: {
                            [e.key]: {
                                type: "loaded",
                                data: o,
                                title: i,
                                isValid: l,
                            },
                        },
                        appPayload: r,
                        pendingNavigation: null,
                        error: null,
                        navigateOnError: !1,
                        turboCount: (0, s.JV)().turboCount || 0,
                    };
                }
            };
            function eP(e) {
                for (let t of eg(this, eE)) t?.(e);
            }
            function eT() {
                return eg(this, eR)
                    .map((e) => e.path)
                    .join(", ");
            }
            function ej(e) {
                let t,
                    r,
                    n,
                    o,
                    i,
                    s,
                    u,
                    c,
                    d,
                    h = (0, y.c)(33),
                    {
                        appName: p,
                        initialLocation: v,
                        history: b,
                        embeddedData: w,
                        routes: S,
                        App: R,
                        wasServerRendered: E,
                        ssrError: x,
                        onError: C,
                    } = e;
                h[0] !== p || h[1] !== w || h[2] !== v || h[3] !== S
                    ? ((t = {
                          initialLocation: v,
                          appName: p,
                          embeddedData: w,
                          routes: S,
                      }),
                      (h[0] = p),
                      (h[1] = w),
                      (h[2] = v),
                      (h[3] = S),
                      (h[4] = t))
                    : (t = h[4]);
                let [k, N] = (function (e) {
                        let t,
                            r,
                            n,
                            a,
                            o,
                            i = (0, y.c)(13),
                            {
                                initialLocation: s,
                                embeddedData: l,
                                routes: u,
                            } = e;
                        i[0] !== l || i[1] !== s || i[2] !== u
                            ? ((t = () => {
                                  let { appPayload: e, ...t } = l;
                                  return new eN(
                                      s,
                                      {
                                          ...t,
                                          enabled_features: e?.enabled_features
                                              ? e.enabled_features
                                              : {},
                                      },
                                      e,
                                      u
                                  );
                              }),
                              (i[0] = l),
                              (i[1] = s),
                              (i[2] = u),
                              (i[3] = t))
                            : (t = i[3]);
                        let [c] = (0, g.useState)(t);
                        i[4] !== c
                            ? ((r = (e) => {
                                  let t = c.subscribe(e);
                                  return () => {
                                      t();
                                  };
                              }),
                              (i[4] = c),
                              (i[5] = r))
                            : (r = i[5]);
                        let d = (0, g.useSyncExternalStore)(
                            r,
                            c.getAppNavigationState,
                            c.getAppNavigationState
                        );
                        i[6] !== c
                            ? ((n = (e) => {
                                  (0, g.startTransition)(() => {
                                      c.handleHistoryUpdate(e);
                                  });
                              }),
                              (i[6] = c),
                              (i[7] = n))
                            : (n = i[7]);
                        let h = n;
                        return (
                            i[8] !== h
                                ? ((a = { handleHistoryUpdate: h }),
                                  (i[8] = h),
                                  (i[9] = a))
                                : (a = i[9]),
                            i[10] !== d || i[11] !== a
                                ? ((o = [d, a]),
                                  (i[10] = d),
                                  (i[11] = a),
                                  (i[12] = o))
                                : (o = i[12]),
                            o
                        );
                    })(t),
                    {
                        location: P,
                        error: T,
                        routeStateMap: L,
                        appPayload: A,
                        navigateOnError: _,
                        isLoading: D,
                    } = k,
                    { handleHistoryUpdate: O } = N;
                return (
                    !(function (e, t, r) {
                        let n,
                            a,
                            o = (0, y.c)(5),
                            i = (0, g.useRef)(null);
                        (o[0] !== e || o[1] !== t || o[2] !== r
                            ? ((n = () => {
                                  if (
                                      (i.current || (i.current = r),
                                      !ef(i.current, r) && (t || e))
                                  )
                                      if (t) {
                                          let e = ((e) => {
                                              let t =
                                                  404 === e.httpStatus
                                                      ? "404 Page not found"
                                                      : 500 === e.httpStatus
                                                        ? "500 Internal server error"
                                                        : e.httpStatus
                                                          ? `Error ${e.httpStatus}`
                                                          : "Error";
                                              return (0, eo.Y)(t);
                                          })(t);
                                          (0, eo.D)(e);
                                      } else
                                          e?.type === "loaded" &&
                                              e.title &&
                                              (0, eo.D)((0, eo.Y)(e.title));
                                  i.current?.key !== r.key && (i.current = r);
                              }),
                              (a = [t, e, r]),
                              (o[0] = e),
                              (o[1] = t),
                              (o[2] = r),
                              (o[3] = n),
                              (o[4] = a))
                            : ((n = o[3]), (a = o[4])),
                            (0, g.useEffect)(n, a));
                    })(L[P.key], T, P),
                    j(D, P),
                    ee(P, D, T),
                    X(),
                    h[5] !== O || h[6] !== b
                        ? ((r = () => b.listen(O)),
                          (n = [b, O]),
                          (h[5] = O),
                          (h[6] = b),
                          (h[7] = r),
                          (h[8] = n))
                        : ((r = h[7]), (n = h[8])),
                    (0, F.N)(r, n),
                    h[9] !== R || h[10] !== S
                        ? ((o = (0, a.jsx)(eL, { routes: S, App: R })),
                          (h[9] = R),
                          (h[10] = S),
                          (h[11] = o))
                        : (o = h[11]),
                    h[12] !== b || h[13] !== P || h[14] !== o
                        ? ((i = (0, a.jsx)(l.Ix, {
                              location: P,
                              navigator: b,
                              children: o,
                          })),
                          (h[12] = b),
                          (h[13] = P),
                          (h[14] = o),
                          (h[15] = i))
                        : (i = h[15]),
                    h[16] !== x
                        ? ((s = (0, a.jsx)(m.h, { ssrError: x })),
                          (h[16] = x),
                          (h[17] = s))
                        : (s = h[17]),
                    h[18] !== A ||
                    h[19] !== T ||
                    h[20] !== _ ||
                    h[21] !== L ||
                    h[22] !== S ||
                    h[23] !== i ||
                    h[24] !== s
                        ? ((u = (0, a.jsxs)(eh.l, {
                              appPayload: A,
                              error: T,
                              navigateOnError: _,
                              routes: S,
                              routeStateMap: L,
                              children: [i, s],
                          })),
                          (h[18] = A),
                          (h[19] = T),
                          (h[20] = _),
                          (h[21] = L),
                          (h[22] = S),
                          (h[23] = i),
                          (h[24] = s),
                          (h[25] = u))
                        : (u = h[25]),
                    h[26] !== C || h[27] !== u
                        ? ((c = (0, a.jsx)(ed.t, {
                              onError: C,
                              critical: !0,
                              children: u,
                          })),
                          (h[26] = C),
                          (h[27] = u),
                          (h[28] = c))
                        : (c = h[28]),
                    h[29] !== p || h[30] !== c || h[31] !== E
                        ? ((d = (0, a.jsx)(f.U, {
                              appName: p,
                              wasServerRendered: E,
                              dataRouterEnabled: !1,
                              children: c,
                          })),
                          (h[29] = p),
                          (h[30] = c),
                          (h[31] = E),
                          (h[32] = d))
                        : (d = h[32]),
                    d
                );
            }
            function eL(e) {
                let t,
                    r,
                    n,
                    o,
                    i = (0, y.c)(10),
                    { App: s, routes: u } = e;
                return (
                    i[0] !== s
                        ? ((t = (0, a.jsx)(ec, { App: s })),
                          (i[0] = s),
                          (i[1] = t))
                        : (t = i[1]),
                    i[2] !== u
                        ? ((r = (0, a.jsx)(w, { routes: u })),
                          (i[2] = u),
                          (i[3] = r))
                        : (r = i[3]),
                    i[4] !== t || i[5] !== r
                        ? ((n = (0, a.jsxs)(a.Fragment, { children: [t, r] })),
                          (i[4] = t),
                          (i[5] = r),
                          (i[6] = n))
                        : (n = i[6]),
                    i[7] !== u || i[8] !== n
                        ? ((o = [{ element: n, children: u }]),
                          (i[7] = u),
                          (i[8] = n),
                          (i[9] = o))
                        : (o = i[9]),
                    (0, l.Ye)(o)
                );
            }
            J();
            try {
                ej.displayName || (ej.displayName = "NavigatorClientEntry");
            } catch {}
            try {
                eL.displayName || (eL.displayName = "AppRoutes");
            } catch {}
            var eA = r(58394),
                e_ = r(33957),
                eD = r(13856);
            function eO(e, t, r) {
                if (!t.has(e))
                    throw TypeError(
                        "attempted to get private field on non-instance"
                    );
                return r;
            }
            function eI(e, t) {
                if (t.has(e))
                    throw TypeError(
                        "Cannot initialize the same private elements twice on an object"
                    );
                t.add(e);
            }
            function eM(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r),
                    e
                );
            }
            var e$ = new WeakSet(),
                ez = new WeakSet();
            let ReactAppElement = class ReactAppElement extends eD.H {
                connectedCallback() {
                    (super.connectedCallback(),
                        (this.uuid = (0, i._S)()),
                        (0, i.cW)(this.uuid),
                        window.addEventListener(
                            "popstate",
                            this.popStateListener,
                            !0
                        ));
                }
                disconnectedCallback() {
                    (window.removeEventListener(
                        "popstate",
                        this.popStateListener,
                        !0
                    ),
                        this.routerOrHistory?.dispose(),
                        super.disconnectedCallback());
                }
                get isDataRouterEnabled() {
                    return (
                        "true" === this.getAttribute("data-data-router-enabled")
                    );
                }
                async getReactNode(e, t) {
                    if (this.isDataRouterEnabled) {
                        let r = await p(this.name);
                        return eO(this, e$, eW).call(
                            this,
                            e,
                            t,
                            r.registration
                        );
                    }
                    let r = await el(this.name);
                    return eO(this, ez, eU).call(this, e, t, r.registration);
                }
                get isLazy() {
                    return "true" === this.getAttribute("data-lazy");
                }
                constructor(...e) {
                    (super(...e),
                        eI(this, e$),
                        eI(this, ez),
                        eM(this, "nameAttribute", "app-name"),
                        eM(this, "popStateListener", (e) => {
                            e.state &&
                                this.uuid !== (0, s.JV)().appId &&
                                this.routerOrHistory?.dispose();
                        }));
                }
            };
            async function eW(e, t, r) {
                e && (0, e_.S)().removeQueries({ queryKey: [this.name] });
                let { routes: n } = r({ embeddedData: e });
                return (
                    (this.routerOrHistory = new Proxy(
                        (0, l.Ys)(
                            (function (
                                e,
                                {
                                    ssrError: t,
                                    appName: r,
                                    wasServerRendered: n,
                                    children: o,
                                    HydrateFallback: i,
                                    dataRouterEnabled: s,
                                    appPayload: u,
                                }
                            ) {
                                return [
                                    {
                                        id: "__DATA_ROUTER_ROOT__",
                                        errorElement: (0, a.jsx)(W.hw, {
                                            appName: r,
                                        }),
                                        HydrateFallback: i,
                                        element: (0, a.jsx)(f.U, {
                                            appName: r,
                                            wasServerRendered: n,
                                            dataRouterEnabled: s,
                                            children: (0, a.jsx)(P.z.Provider, {
                                                value: u,
                                                children: (0, a.jsxs)(N.d, {
                                                    routes: e,
                                                    children: [
                                                        (0, a.jsx)(l.sv, {}),
                                                        o,
                                                        (0, a.jsx)(m.h, {
                                                            ssrError: t,
                                                        }),
                                                        (0, a.jsx)(ea, {}),
                                                        (0, a.jsx)(L, {}),
                                                        (0, a.jsx)(K, {}),
                                                        (0, a.jsx)($, {}),
                                                        (0, a.jsx)(ei, {}),
                                                        (0, a.jsx)(w, {
                                                            routes: e,
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                        children: [
                                            {
                                                id: "__DATA_ROUTER_APPLICATION_ROUTES__",
                                                errorElement: (0, a.jsx)(W.Ly, {
                                                    appName: r,
                                                }),
                                                children: e,
                                            },
                                        ],
                                    },
                                ];
                            })(n, {
                                appPayload: e.appPayload,
                                ssrError: this.ssrError,
                                appName: this.name,
                                wasServerRendered: this.hasSSRContent,
                                dataRouterEnabled: !0,
                            })
                        ),
                        {
                            get: (e, t, r) =>
                                "navigate" === t
                                    ? function (t, r) {
                                          var n, a;
                                          if ("number" == typeof t)
                                              return e.navigate(t);
                                          ((n = e.state.location),
                                              ((a =
                                                  "string" == typeof t
                                                      ? (function (e) {
                                                            var t = {};
                                                            if (e) {
                                                                var r =
                                                                    e.indexOf(
                                                                        "#"
                                                                    );
                                                                (0 <= r &&
                                                                    ((t.hash =
                                                                        e.substr(
                                                                            r
                                                                        )),
                                                                    (e =
                                                                        e.substr(
                                                                            0,
                                                                            r
                                                                        ))),
                                                                    0 <=
                                                                        (r =
                                                                            e.indexOf(
                                                                                "?"
                                                                            )) &&
                                                                        ((t.search =
                                                                            e.substr(
                                                                                r
                                                                            )),
                                                                        (e =
                                                                            e.substr(
                                                                                0,
                                                                                r
                                                                            ))),
                                                                    e &&
                                                                        (t.pathname =
                                                                            e));
                                                            }
                                                            return t;
                                                        })(t)
                                                      : t) &&
                                                  (void 0 === a.pathname ||
                                                      a.pathname ===
                                                          n.pathname) &&
                                                  (void 0 === a.search ||
                                                      a.search === n.search) &&
                                                  void 0 !== a.hash &&
                                                  a.hash !== n.hash) ||
                                                  (0, u.SC)("react"));
                                          let o = !r?.replace,
                                              i = r?.state?.skipTurbo;
                                          return e.navigate(t, {
                                              ...r,
                                              state: {
                                                  ...r?.state,
                                                  skipTurbo: o ? (i ?? !0) : i,
                                              },
                                          });
                                      }
                                    : Reflect.get(e, t, r),
                        }
                    )),
                    (0, a.jsx)(eA.f, {
                        appName: this.name,
                        isDataRouterEnabled: !0,
                        children: (0, a.jsx)(eA.U, {
                            id: this.name,
                            children: (0, a.jsx)(l.pg, {
                                router: this.routerOrHistory,
                            }),
                        }),
                    })
                );
            }
            async function eU(e, t, r) {
                let { App: n, routes: o } = r(),
                    i = this.getAttribute("initial-path");
                if (this.isLazy) {
                    let t = await fetch(i, {
                            mode: "no-cors",
                            cache: "no-cache",
                            credentials: "include",
                        }),
                        { payload: r } = await t.json();
                    e.payload = r;
                }
                let u = globalThis.window,
                    {
                        pathname: c,
                        search: d,
                        hash: h,
                    } = new URL(
                        `${i}${u?.location.hash ?? ""}`,
                        u?.location.href ?? "https://github.com"
                    );
                (0, s.C3)({ key: Math.random().toString(36).substr(2, 8) });
                let p = (function (e = {}) {
                    let t,
                        r = (0, l.zR)({ ...e, v5Compat: !0 }),
                        n = [],
                        a = !1;
                    function o(e) {
                        if (n.length > 0)
                            for (let t of n)
                                t({
                                    retry() {
                                        e();
                                    },
                                });
                        else e();
                    }
                    return {
                        get action() {
                            return r.action;
                        },
                        get location() {
                            return r.location;
                        },
                        createHref: (e) => r.createHref(e),
                        createURL: (e) => r.createURL(e),
                        encodeLocation: (e) => r.encodeLocation(e),
                        push(e, t) {
                            o(() => r.push(e, t));
                        },
                        replace(e, t) {
                            o(() => r.replace(e, t));
                        },
                        go(e) {
                            o(() => r.go(e));
                        },
                        listen(e) {
                            if (t)
                                throw Error(
                                    "A history only accepts one active listener"
                                );
                            return (
                                (t = e),
                                () => {
                                    t = void 0;
                                }
                            );
                        },
                        dispose: r.listen((e) => {
                            if (a) {
                                a = !1;
                                return;
                            }
                            if (
                                e.action === l.rc.Pop &&
                                n.length &&
                                null !== e.delta &&
                                n.length > 0
                            ) {
                                let t = e.delta;
                                for (let e of ((a = !0), r.go(-1 * t), n))
                                    e({
                                        retry() {
                                            r.go(t);
                                        },
                                    });
                            } else t?.(e);
                        }),
                        block: (e) => (
                            n.push(e),
                            () => {
                                n = n.filter((t) => t !== e);
                            }
                        ),
                    };
                })({ window: u });
                this.routerOrHistory = p;
                let { key: f, state: m } = p.location;
                return (0, a.jsx)(eA.f, {
                    appName: this.name,
                    isDataRouterEnabled: !1,
                    children: (0, a.jsx)(eA.U, {
                        id: this.name,
                        children: (0, a.jsx)(ej, {
                            appName: this.name,
                            initialLocation: {
                                pathname: c,
                                search: d,
                                hash: h,
                                key: f,
                                state: m,
                            },
                            history: p,
                            embeddedData: e,
                            routes: o,
                            App: n,
                            wasServerRendered: this.hasSSRContent,
                            ssrError: this.ssrError,
                            onError: t,
                        }),
                    }),
                });
            }
            function eB(e, t) {
                es.register(e, { type: "NavigatorApp", registration: t });
            }
            function eF(e) {
                h.register(e.name, {
                    type: "DataRouterApp",
                    registration: e.registration,
                });
            }
            ReactAppElement = (function (e, t, r, n) {
                var a,
                    o = arguments.length,
                    i =
                        o < 3
                            ? t
                            : null === n
                              ? (n = Object.getOwnPropertyDescriptor(t, r))
                              : n;
                if (
                    "object" == typeof Reflect &&
                    "function" == typeof Reflect.decorate
                )
                    i = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)
                        (a = e[s]) &&
                            (i =
                                (o < 3 ? a(i) : o > 3 ? a(t, r, i) : a(t, r)) ||
                                i);
                return (o > 3 && i && Object.defineProperty(t, r, i), i);
            })([o.p_], ReactAppElement);
        },
        52497: (e, t, r) => {
            r.d(t, { k: () => h });
            var n = r(74848),
                a = r(39595),
                o = r(85788),
                i = r(9798),
                s = r(58394),
                l = r(37573);
            let u = new (r(63809).R)();
            var c = r(13856);
            let d = class ReactPartialElement extends c.H {
                async getReactNode(e, t) {
                    var r;
                    let { Component: a } = await ((r = this.name),
                        u.getRegistration(r).promise),
                        c = this.closest("react-partial-anchor"),
                        d = (0, l.b3)(c),
                        h = { ...e, props: { ...e.props, ...d } };
                    return (0, n.jsx)(s.f, {
                        appName: this.name,
                        isDataRouterEnabled: !1,
                        children: (0, n.jsx)(s.U, {
                            id: this.name,
                            children: (0, n.jsx)(i.c, {
                                partialName: this.name,
                                wasServerRendered: this.hasSSRContent,
                                onError: t,
                                ssrError: this.ssrError,
                                children: (0, n.jsx)(o.Kd, {
                                    children: (0, n.jsx)(o.BV, {
                                        children: (0, n.jsx)(o.qh, {
                                            path: "*",
                                            element: (0, n.jsx)(a, {
                                                ...h.props,
                                            }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    });
                }
                constructor(...e) {
                    (super(...e),
                        (function (e, t, r) {
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                        })(this, "nameAttribute", "partial-name"));
                }
            };
            function h(e, t) {
                return u.register(e, t);
            }
            d = (function (e, t, r, n) {
                var a,
                    o = arguments.length,
                    i =
                        o < 3
                            ? t
                            : null === n
                              ? (n = Object.getOwnPropertyDescriptor(t, r))
                              : n;
                if (
                    "object" == typeof Reflect &&
                    "function" == typeof Reflect.decorate
                )
                    i = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)
                        (a = e[s]) &&
                            (i =
                                (o < 3 ? a(i) : o > 3 ? a(t, r, i) : a(t, r)) ||
                                i);
                return (o > 3 && i && Object.defineProperty(t, r, i), i);
            })([a.p_], d);
        },
        11908: (e, t, r) => {
            r.d(t, { Y: () => n });
            let n = (0, r(96540).createContext)({});
        },
        38291: (e, t, r) => {
            function n(e, t) {
                return t.get ? t.get.call(e) : t.value;
            }
            function a(e, t, r) {
                if (t.set) t.set.call(e, r);
                else {
                    if (!t.writable)
                        throw TypeError(
                            "attempted to set read only private field"
                        );
                    t.value = r;
                }
            }
            function o(e, t) {
                if (void 0 === e)
                    throw TypeError(
                        "attempted to " +
                            t +
                            " private static field before its declaration"
                    );
            }
            function i(e, t, r) {
                if (!t.has(e))
                    throw TypeError(
                        "attempted to " + r + " private field on non-instance"
                    );
                return t.get(e);
            }
            function s(e, t) {
                var r = i(e, t, "get");
                return n(e, r);
            }
            function l(e, t, r) {
                return (u(e, t), o(r, "get"), n(e, r));
            }
            function u(e, t) {
                if (e !== t)
                    throw TypeError(
                        "Private static access of wrong provenance"
                    );
            }
            r.d(t, { n: () => m });
            let c = "@github-ui/react-core/router:state-update",
                d = class RouterStateUpdateEvent extends Event {
                    constructor() {
                        super(c);
                    }
                };
            var h = new WeakMap();
            let p = class RouterStore extends EventTarget {
                static getInstance() {
                    var e;
                    return (
                        l(RouterStore, RouterStore, f) ||
                            ((e = new RouterStore()),
                            u(RouterStore, RouterStore),
                            o(f, "set"),
                            a(RouterStore, f, e)),
                        l(RouterStore, RouterStore, f)
                    );
                }
                getState() {
                    return s(this, h);
                }
                setState(e) {
                    (a(this, i(this, h, "set"), e),
                        this.dispatchEvent(new d()));
                }
                subscribe(e) {
                    let t = new AbortController();
                    return (
                        this.addEventListener(
                            c,
                            () => {
                                e(s(this, h));
                            },
                            { signal: t.signal }
                        ),
                        e(s(this, h)),
                        () => {
                            t.abort();
                        }
                    );
                }
                constructor() {
                    (super(),
                        (function (e, t, r) {
                            if (t.has(e))
                                throw TypeError(
                                    "Cannot initialize the same private elements twice on an object"
                                );
                            t.set(e, r);
                        })(this, h, { writable: !0, value: null }));
                }
            };
            var f = { writable: !0, value: void 0 };
            function m() {
                return p.getInstance();
            }
        },
        23818: (e, t, r) => {
            r.d(t, { k: () => n });
            let n = (0, r(96540).createContext)({ routes: [] });
        },
        64262: (e, t, r) => {
            r.d(t, { X: () => o, z: () => a });
            var n = r(96540);
            let a = (0, n.createContext)(void 0);
            function o() {
                return (0, n.useContext)(a);
            }
        },
        7044: (e, t, r) => {
            let n;
            r.d(t, { A: () => d });
            var a = r(21728),
                o = r(96679),
                i = r(96540);
            function s(e) {
                return {
                    colorMode: (function (e) {
                        switch (e) {
                            case "light":
                                return "day";
                            case "dark":
                                return "night";
                            default:
                                return "auto";
                        }
                    })(e.colorMode),
                    dayScheme: e.lightTheme,
                    nightScheme: e.darkTheme,
                };
            }
            let l = new Set([
                    "light_colorblind_high_contrast",
                    "light_tritanopia_high_contrast",
                    "dark_colorblind_high_contrast",
                    "dark_tritanopia_high_contrast",
                    "dark_dimmed_high_contrast",
                ]),
                u = {
                    light_colorblind_high_contrast: "light_high_contrast",
                    light_tritanopia_high_contrast: "light_high_contrast",
                    dark_colorblind_high_contrast: "dark_high_contrast",
                    dark_tritanopia_high_contrast: "dark_high_contrast",
                    dark_dimmed_high_contrast: "dark_high_contrast",
                };
            function c(e) {
                var t;
                return void 0 !== e && ((t = e), l.has(t)) ? u[e] : e;
            }
            let d = o.XC
                ? function () {
                      let e,
                          t,
                          r,
                          n,
                          l,
                          u,
                          d = (0, a.c)(11),
                          { documentElement: h } = o.XC;
                      d[0] === Symbol.for("react.memo_cache_sentinel")
                          ? ((e = () => s(h.dataset)), (d[0] = e))
                          : (e = d[0]);
                      let [p, f] = (0, i.useState)(e);
                      return (
                          d[1] === Symbol.for("react.memo_cache_sentinel")
                              ? ((t = () => {
                                    let e = new MutationObserver(() =>
                                        f(s(h.dataset))
                                    );
                                    return (
                                        e.observe(h, {
                                            attributes: !0,
                                            attributeFilter: [
                                                "data-color-mode",
                                                "data-light-theme",
                                                "data-dark-theme",
                                            ],
                                        }),
                                        () => e.disconnect()
                                    );
                                }),
                                (r = [h]),
                                (d[1] = t),
                                (d[2] = r))
                              : ((t = d[1]), (r = d[2])),
                          (0, i.useEffect)(t, r),
                          d[3] !== p.dayScheme
                              ? ((n = c(p.dayScheme)),
                                (d[3] = p.dayScheme),
                                (d[4] = n))
                              : (n = d[4]),
                          d[5] !== p.nightScheme
                              ? ((l = c(p.nightScheme)),
                                (d[5] = p.nightScheme),
                                (d[6] = l))
                              : (l = d[6]),
                          d[7] !== p || d[8] !== n || d[9] !== l
                              ? ((u = { ...p, dayScheme: n, nightScheme: l }),
                                (d[7] = p),
                                (d[8] = n),
                                (d[9] = l),
                                (d[10] = u))
                              : (u = d[10]),
                          u
                      );
                  }
                : function () {
                      return s(n || {});
                  };
        },
        50855: (e, t, r) => {
            r.d(t, { N: () => i });
            var n = r(85788),
                a = r(96540),
                o = r(11908);
            function i() {
                return (0, a.useContext)(o.Y)[(0, n.zy)().key];
            }
        },
        60183: (e, t, r) => {
            r.d(t, { h: () => a, u: () => o });
            var n = r(64262);
            let a = () => (0, n.X)()?.enabled_features ?? {},
                o = (e) => !!a()[e];
        },
        29769: (e, t, r) => {
            r.d(t, { q: () => o });
            var n = r(96540),
                a = r(11583);
            function o() {
                return (0, n.useContext)(a.C);
            }
        },
        25772: (e, t, r) => {
            r.d(t, { B: () => a });
            var n = r(50855);
            function a() {
                let e = (0, n.N)(),
                    t = e && "loaded" === e.type ? e.data : void 0;
                return t?.payload;
            }
        },
        78448: (e, t, r) => {
            r.d(t, { U: () => y });
            var n = r(74848),
                a = r(21728),
                o = r(26033),
                i = r(60674),
                s = r(99543),
                l = r(30391),
                u = r(97665),
                c = r(30729),
                d = r(97710),
                h = r(52469),
                p = r(33957),
                f = r(7044);
            let m = {};
            function y(e) {
                let t,
                    r,
                    y,
                    g,
                    v,
                    b,
                    w,
                    S = (0, a.c)(20),
                    {
                        appName: R,
                        children: E,
                        wasServerRendered: x,
                        dataRouterEnabled: C,
                    } = e,
                    { colorMode: k, dayScheme: N, nightScheme: P } = (0, f.A)();
                S[0] === Symbol.for("react.memo_cache_sentinel")
                    ? ((t = (0, p.S)()), (S[0] = t))
                    : (t = S[0]);
                let T = t;
                return (
                    S[1] !== E
                        ? ((r = (0, n.jsx)(s.k6, { children: E })),
                          (S[1] = E),
                          (S[2] = r))
                        : (r = S[2]),
                    S[3] !== R || S[4] !== r
                        ? ((y = (0, n.jsx)(d.V, { appName: R, children: r })),
                          (S[3] = R),
                          (S[4] = r),
                          (S[5] = y))
                        : (y = S[5]),
                    S[6] !== C || S[7] !== y
                        ? ((g = (0, n.jsx)(c.v, { enabled: C, children: y })),
                          (S[6] = C),
                          (S[7] = y),
                          (S[8] = g))
                        : (g = S[8]),
                    S[9] !== k || S[10] !== N || S[11] !== P || S[12] !== g
                        ? ((v = (0, n.jsx)(h.n, {
                              children: (0, n.jsx)(l.NP, {
                                  colorMode: k,
                                  dayScheme: N,
                                  nightScheme: P,
                                  preventSSRMismatch: !0,
                                  children: g,
                              }),
                          })),
                          (S[9] = k),
                          (S[10] = N),
                          (S[11] = P),
                          (S[12] = g),
                          (S[13] = v))
                        : (v = S[13]),
                    S[14] !== R || S[15] !== v
                        ? ((b = (0, n.jsx)(o.y, {
                              appName: R,
                              category: "",
                              metadata: m,
                              children: v,
                          })),
                          (S[14] = R),
                          (S[15] = v),
                          (S[16] = b))
                        : (b = S[16]),
                    S[17] !== b || S[18] !== x
                        ? ((w = (0, n.jsx)(u.Ht, {
                              client: T,
                              children: (0, n.jsx)(i.D3, {
                                  wasServerRendered: x,
                                  children: b,
                              }),
                          })),
                          (S[17] = b),
                          (S[18] = x),
                          (S[19] = w))
                        : (w = S[19]),
                    w
                );
            }
            try {
                y.displayName || (y.displayName = "BaseProviders");
            } catch {}
        },
        34788: (e, t, r) => {
            r.d(t, { h: () => c });
            var n = r(74848),
                a = r(21728),
                o = r(42218),
                i = r(99543),
                s = r(96540),
                l = r(50888);
            function u({ ssrError: e }) {
                let { addToast: t } = (0, i.Y6)(),
                    r = l.z[e.textContent || ""];
                return (
                    (0, s.useEffect)(() => {
                        r ||
                            t({
                                type: "error",
                                message:
                                    "SSR failed, see console for error details (Staff Only)",
                            });
                    }, []),
                    null
                );
            }
            try {
                u.displayName || (u.displayName = "SSRErrorToast");
            } catch {}
            function c(e) {
                let t,
                    r,
                    i,
                    s = (0, a.c)(5),
                    { ssrError: l } = e;
                return (
                    s[0] === Symbol.for("react.memo_cache_sentinel")
                        ? ((t = (0, n.jsx)(o.V, {})), (s[0] = t))
                        : (t = s[0]),
                    s[1] !== l
                        ? ((r = l && (0, n.jsx)(u, { ssrError: l })),
                          (s[1] = l),
                          (s[2] = r))
                        : (r = s[2]),
                    s[3] !== r
                        ? ((i = (0, n.jsxs)(n.Fragment, { children: [t, r] })),
                          (s[3] = r),
                          (s[4] = i))
                        : (i = s[4]),
                    i
                );
            }
            try {
                c.displayName || (c.displayName = "CommonElements");
            } catch {}
        },
        70179: (e, t, r) => {
            r.d(t, { t: () => c });
            var n = r(74848),
                a = r(21728),
                o = r(78924),
                i = r(22353),
                s = r(96540),
                l = r(12707);
            let u = class BasicErrorBoundary extends s.Component {
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e) {
                    let t = {
                        critical: this.props.critical || !1,
                        reactAppName: this.props.appName,
                    };
                    "function" == typeof this.props.onError
                        ? this.props.onError(e, t)
                        : (function (e, t = {}) {
                              setTimeout(() => {
                                  (0, i.N7)(e, t);
                              });
                          })(e, t);
                }
                render() {
                    return this.state.error
                        ? void 0 === this.props.fallback
                            ? (0, n.jsx)(l.M, { type: "httpError" })
                            : this.props.fallback
                        : this.props.children;
                }
                constructor(e) {
                    (super(e), (this.state = { error: null }));
                }
            };
            function c(e) {
                let t,
                    r = (0, a.c)(3),
                    i = s.useContext(o.I),
                    l = e.appName || i?.appName;
                return (
                    r[0] !== l || r[1] !== e
                        ? ((t = (0, n.jsx)(u, { ...e, appName: l })),
                          (r[0] = l),
                          (r[1] = e),
                          (r[2] = t))
                        : (t = r[2]),
                    t
                );
            }
            try {
                c.displayName || (c.displayName = "ErrorBoundary");
            } catch {}
        },
        12707: (e, t, r) => {
            r.d(t, { M: () => l });
            var n = r(74848),
                a = r(21728),
                o = r(84217);
            let i = {
                    Heading: "ErrorPage-module__Heading--UGKqI",
                    Status: "ErrorPage-module__Status--fcyMK",
                    Message: "ErrorPage-module__Message--Bkeiv",
                },
                s = {
                    404: "Didn\u2019t find anything here!",
                    500: "Looks like something went wrong!",
                };
            function l(e) {
                let t,
                    r,
                    l,
                    u = (0, a.c)(7),
                    { httpStatus: c, type: d } = e,
                    h =
                        "fetchError" === d
                            ? "Looks like network is down!"
                            : s[c || 500];
                return (
                    u[0] !== c
                        ? ((t = c
                              ? (0, n.jsx)("div", {
                                    className: i.Status,
                                    children: c,
                                })
                              : null),
                          (u[0] = c),
                          (u[1] = t))
                        : (t = u[1]),
                    u[2] !== h
                        ? ((r = (0, n.jsx)("div", {
                              className: i.Message,
                              children: h,
                          })),
                          (u[2] = h),
                          (u[3] = r))
                        : (r = u[3]),
                    u[4] !== t || u[5] !== r
                        ? ((l = (0, n.jsxs)(o.A, {
                              as: "h1",
                              tabIndex: -1,
                              className: i.Heading,
                              children: ["Error", t, r],
                          })),
                          (u[4] = t),
                          (u[5] = r),
                          (u[6] = l))
                        : (l = u[6]),
                    l
                );
            }
            try {
                l.displayName || (l.displayName = "ErrorPage");
            } catch {}
        },
        26328: (e, t, r) => {
            r.d(t, { s: () => i });
            var n = r(74848),
                a = r(21728),
                o = r(64262);
            let i = (e) => {
                let t,
                    r,
                    i,
                    s = (0, a.c)(5),
                    { children: l, features: u } = e;
                return (
                    s[0] !== u
                        ? ((r = { enabled_features: u }),
                          (s[0] = u),
                          (s[1] = r))
                        : (r = s[1]),
                    (t = r),
                    s[2] !== l || s[3] !== t
                        ? ((i = (0, n.jsx)(o.z.Provider, {
                              value: t,
                              children: l,
                          })),
                          (s[2] = l),
                          (s[3] = t),
                          (s[4] = i))
                        : (i = s[4]),
                    i
                );
            };
            try {
                i.displayName || (i.displayName = "FeatureFlagProvider");
            } catch {}
        },
        16058: (e, t, r) => {
            r.d(t, { a: () => o });
            var n = r(26559),
                a = r(62053);
            function o({
                path: e,
                Component: t,
                shouldNavigateOnError: r,
                transitionType: o,
                children: i,
            }) {
                return {
                    path: e,
                    Component: t,
                    coreLoader: async function e_({ location: e }) {
                        let t;
                        try {
                            let r = `${e.pathname}${e.search}`;
                            t = await window.fetch(r, {
                                headers: {
                                    Accept: "application/json",
                                    ...(0, n.kt)(),
                                    "X-GitHub-Target": "dotcom",
                                    "X-React-Router": "json",
                                    ...(0, n.jC)("navigator"),
                                },
                            });
                            let o = t?.headers?.get("X-Github-Request-Id");
                            o && (0, a.Ex)(o);
                        } catch {
                            return {
                                type: r ? "route-handled-error" : "error",
                                error: { type: "fetchError" },
                            };
                        }
                        if (t.redirected)
                            return { type: "redirect", url: t.url };
                        if (!t.ok)
                            return {
                                type: r ? "route-handled-error" : "error",
                                error: {
                                    type: "httpError",
                                    httpStatus: t.status,
                                },
                            };
                        try {
                            let e = await t.json();
                            return { type: "loaded", data: e, title: e.title };
                        } catch {
                            return {
                                type: r ? "route-handled-error" : "error",
                                error: { type: "badResponseError" },
                            };
                        }
                    },
                    loadFromEmbeddedData: function ({ embeddedData: e }) {
                        return { data: e, title: e.title };
                    },
                    transitionType: o,
                    children: i,
                };
            }
        },
        28391: (e, t, r) => {
            r.d(t, { N: () => c, k: () => d });
            var n = r(74848),
                a = r(21728),
                o = r(85788),
                i = r(96679),
                s = r(96540),
                l = r(32494),
                u = r(23818);
            let c = (0, s.forwardRef)((e, t) => {
                let r,
                    c,
                    d,
                    h,
                    p,
                    f,
                    m = (0, a.c)(14);
                m[0] !== e
                    ? (({
                          to: h,
                          reloadDocument: d,
                          preventAutofocus: r,
                          ...c
                      } = e),
                      (m[0] = e),
                      (m[1] = r),
                      (m[2] = c),
                      (m[3] = d),
                      (m[4] = h))
                    : ((r = m[1]), (c = m[2]), (d = m[3]), (h = m[4]));
                let { routes: y } = (0, s.useContext)(u.k),
                    g = (0, o.o1)(h, i.fV.pathname).pathname;
                return (
                    (d = d ?? !(0, o.ue)(y, g)),
                    m[5] !== r || m[6] !== c.state
                        ? ((p = r ? { [l.V]: !0, ...c.state } : c.state),
                          (m[5] = r),
                          (m[6] = c.state),
                          (m[7] = p))
                        : (p = m[7]),
                    m[8] !== c ||
                    m[9] !== t ||
                    m[10] !== d ||
                    m[11] !== p ||
                    m[12] !== h
                        ? ((f = (0, n.jsx)(o.N_, {
                              to: h,
                              ...c,
                              state: p,
                              reloadDocument: d,
                              ref: t,
                          })),
                          (m[8] = c),
                          (m[9] = t),
                          (m[10] = d),
                          (m[11] = p),
                          (m[12] = h),
                          (m[13] = f))
                        : (f = m[13]),
                    f
                );
            });
            c.displayName = "Link";
            let d = (0, s.forwardRef)(function (e, t) {
                let r,
                    c,
                    d,
                    h,
                    p,
                    f,
                    m = (0, a.c)(14);
                m[0] !== e
                    ? (({
                          to: h,
                          reloadDocument: d,
                          preventAutofocus: r,
                          ...c
                      } = e),
                      (m[0] = e),
                      (m[1] = r),
                      (m[2] = c),
                      (m[3] = d),
                      (m[4] = h))
                    : ((r = m[1]), (c = m[2]), (d = m[3]), (h = m[4]));
                let { routes: y } = (0, s.useContext)(u.k),
                    g = (0, o.o1)(h, i.fV.pathname).pathname;
                return (
                    (d = d ?? !(0, o.ue)(y, g)),
                    m[5] !== r || m[6] !== c.state
                        ? ((p = r ? { [l.V]: !0, ...c.state } : c.state),
                          (m[5] = r),
                          (m[6] = c.state),
                          (m[7] = p))
                        : (p = m[7]),
                    m[8] !== c ||
                    m[9] !== t ||
                    m[10] !== d ||
                    m[11] !== p ||
                    m[12] !== h
                        ? ((f = (0, n.jsx)(o.k2, {
                              to: h,
                              ...c,
                              state: p,
                              reloadDocument: d,
                              ref: t,
                          })),
                          (m[8] = c),
                          (m[9] = t),
                          (m[10] = d),
                          (m[11] = p),
                          (m[12] = h),
                          (m[13] = f))
                        : (f = m[13]),
                    f
                );
            });
            try {
                d.displayName || (d.displayName = "NavLink");
            } catch {}
        },
        11583: (e, t, r) => {
            r.d(t, { C: () => c, l: () => d });
            var n = r(74848),
                a = r(21728),
                o = r(96540),
                i = r(12707),
                s = r(11908),
                l = r(45499),
                u = r(64262);
            let c = (0, o.createContext)(null);
            function d(e) {
                let t,
                    r,
                    o = (0, a.c)(9),
                    {
                        appPayload: d,
                        children: h,
                        error: p,
                        navigateOnError: f,
                        routes: m,
                        routeStateMap: y,
                    } = e;
                return (
                    o[0] !== d ||
                    o[1] !== h ||
                    o[2] !== p ||
                    o[3] !== f ||
                    o[4] !== y
                        ? ((t =
                              p && !f
                                  ? (0, n.jsx)(i.M, { ...p })
                                  : (0, n.jsx)(u.z.Provider, {
                                        value: d,
                                        children: (0, n.jsx)(c.Provider, {
                                            value: p,
                                            children: (0, n.jsx)(s.Y.Provider, {
                                                value: y,
                                                children: h,
                                            }),
                                        }),
                                    })),
                          (o[0] = d),
                          (o[1] = h),
                          (o[2] = p),
                          (o[3] = f),
                          (o[4] = y),
                          (o[5] = t))
                        : (t = o[5]),
                    o[6] !== m || o[7] !== t
                        ? ((r = (0, n.jsx)(l.d, { routes: m, children: t })),
                          (o[6] = m),
                          (o[7] = t),
                          (o[8] = r))
                        : (r = o[8]),
                    r
                );
            }
            try {
                c.displayName || (c.displayName = "NavigationErrorContext");
            } catch {}
            try {
                d.displayName || (d.displayName = "NavigatorRouter");
            } catch {}
        },
        9798: (e, t, r) => {
            r.d(t, { c: () => c });
            var n = r(74848),
                a = r(21728),
                o = r(78448),
                i = r(34788),
                s = r(70179),
                l = r(45499);
            let u = [];
            function c(e) {
                let t,
                    r,
                    c,
                    d,
                    h = (0, a.c)(12),
                    {
                        partialName: p,
                        wasServerRendered: f,
                        onError: m,
                        children: y,
                        ssrError: g,
                    } = e;
                return (
                    h[0] !== g
                        ? ((t = (0, n.jsx)(i.h, { ssrError: g })),
                          (h[0] = g),
                          (h[1] = t))
                        : (t = h[1]),
                    h[2] !== y || h[3] !== t
                        ? ((r = (0, n.jsxs)(l.d, {
                              routes: u,
                              children: [y, t],
                          })),
                          (h[2] = y),
                          (h[3] = t),
                          (h[4] = r))
                        : (r = h[4]),
                    h[5] !== m || h[6] !== r
                        ? ((c = (0, n.jsx)(s.t, { onError: m, children: r })),
                          (h[5] = m),
                          (h[6] = r),
                          (h[7] = c))
                        : (c = h[7]),
                    h[8] !== p || h[9] !== c || h[10] !== f
                        ? ((d = (0, n.jsx)(o.U, {
                              appName: p,
                              wasServerRendered: f,
                              dataRouterEnabled: !1,
                              children: c,
                          })),
                          (h[8] = p),
                          (h[9] = c),
                          (h[10] = f),
                          (h[11] = d))
                        : (d = h[11]),
                    d
                );
            }
            try {
                c.displayName || (c.displayName = "PartialEntry");
            } catch {}
        },
        52469: (e, t, r) => {
            r.d(t, { n: () => s });
            var n = r(74848),
                a = r(21728),
                o = r(27851),
                i = r(15033);
            function s(e) {
                let t,
                    r,
                    s,
                    l = (0, a.c)(3),
                    { children: u } = e;
                if (l[0] === Symbol.for("react.memo_cache_sentinel")) {
                    for (let e of ((r = {}), (0, o.fQ)()))
                        e.startsWith("primer_react_") && (r[e] = !0);
                    l[0] = r;
                } else r = l[0];
                return (
                    (t = r),
                    l[1] !== u
                        ? ((s = (0, n.jsx)(i.g, { flags: t, children: u })),
                          (l[1] = u),
                          (l[2] = s))
                        : (s = l[2]),
                    s
                );
            }
            r(96540);
            try {
                s.displayName || (s.displayName = "PrimerFeatureFlags");
            } catch {}
        },
        58394: (e, t, r) => {
            r.d(t, { U: () => d, f: () => c });
            var n = r(74848),
                a = r(21728),
                o = r(13233),
                i = r(96540),
                s = r(27851),
                l = r(7479);
            let u = (0, i.createContext)(null),
                c = (0, i.memo)(function (e) {
                    let t,
                        r,
                        o = (0, a.c)(6),
                        { isDataRouterEnabled: c, appName: d, children: h } = e;
                    o[0] !== d || o[1] !== c
                        ? ((t = { appName: d, isDataRouterEnabled: c }),
                          (o[0] = d),
                          (o[1] = c),
                          (o[2] = t))
                        : (t = o[2]);
                    let { onRender: p } = (function (e) {
                        let t,
                            r,
                            n = (0, a.c)(5),
                            { appName: o, isDataRouterEnabled: u } = e;
                        n[0] !== o || n[1] !== u
                            ? ((t = (e, t, r, n, a, c) => {
                                  "undefined" != typeof window &&
                                      (0, s.G7)("react_quality_profiling") &&
                                      (0, l.i)({
                                          requestUrl: window.location.href,
                                          reactRenderPerformance: {
                                              actualDuration: r,
                                              baseDuration: n,
                                              commitLag: c - a,
                                              phase: t,
                                              appName: o,
                                              isDataRouterEnabled: u,
                                              componentId: e,
                                              reactVersion: i.version,
                                          },
                                      });
                              }),
                              (n[0] = o),
                              (n[1] = u),
                              (n[2] = t))
                            : (t = n[2]);
                        let c = t;
                        return (
                            n[3] !== c
                                ? ((r = { onRender: c }),
                                  (n[3] = c),
                                  (n[4] = r))
                                : (r = n[4]),
                            r
                        );
                    })(t);
                    return (
                        o[3] !== h || o[4] !== p
                            ? ((r = (0, n.jsx)(u.Provider, {
                                  value: p,
                                  children: h,
                              })),
                              (o[3] = h),
                              (o[4] = p),
                              (o[5] = r))
                            : (r = o[5]),
                        r
                    );
                }),
                d = (0, i.memo)(function (e) {
                    let t,
                        r = (0, a.c)(4),
                        { id: s, children: l } = e,
                        c = (0, i.useContext)(u) ?? o.l;
                    return (
                        r[0] !== l || r[1] !== s || r[2] !== c
                            ? ((t = (0, n.jsx)(i.Profiler, {
                                  id: s,
                                  onRender: c,
                                  children: l,
                              })),
                              (r[0] = l),
                              (r[1] = s),
                              (r[2] = c),
                              (r[3] = t))
                            : (t = r[3]),
                        t
                    );
                });
            try {
                u.displayName || (u.displayName = "ProfilerContext");
            } catch {}
            try {
                c.displayName || (c.displayName = "ProfilerProvider");
            } catch {}
            try {
                d.displayName || (d.displayName = "Profiler");
            } catch {}
        },
        13856: (e, t, r) => {
            r.d(t, { H: () => ReactBaseElement });
            var n = r(74848),
                a = r(39595),
                o = r(22353),
                i = r(13233),
                s = r(41764),
                l = r(7479),
                u = r(96540),
                c = r(5338),
                d = r(50888);
            function h(e, t) {
                if (t.has(e))
                    throw TypeError(
                        "Cannot initialize the same private elements twice on an object"
                    );
            }
            function p(e, t, r) {
                if (!t.has(e))
                    throw TypeError(
                        "attempted to " + r + " private field on non-instance"
                    );
                return t.get(e);
            }
            function f(e, t) {
                var r = p(e, t, "get");
                return r.get ? r.get.call(e) : r.value;
            }
            function m(e, t, r) {
                (h(e, t), t.set(e, r));
            }
            function y(e, t, r) {
                var n = p(e, t, "set");
                if (n.set) n.set.call(e, r);
                else {
                    if (!n.writable)
                        throw TypeError(
                            "attempted to set read only private field"
                        );
                    n.value = r;
                }
                return r;
            }
            function g(e, t, r) {
                if (!t.has(e))
                    throw TypeError(
                        "attempted to get private field on non-instance"
                    );
                return r;
            }
            function v(e, t) {
                (h(e, t), t.add(e));
            }
            function b(e, t, r, n) {
                var a,
                    o = arguments.length,
                    i =
                        o < 3
                            ? t
                            : null === n
                              ? (n = Object.getOwnPropertyDescriptor(t, r))
                              : n;
                if (
                    "object" == typeof Reflect &&
                    "function" == typeof Reflect.decorate
                )
                    i = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)
                        (a = e[s]) &&
                            (i =
                                (o < 3 ? a(i) : o > 3 ? a(t, r, i) : a(t, r)) ||
                                i);
                return (o > 3 && i && Object.defineProperty(t, r, i), i);
            }
            let w = /Minified React error #(?<invariant>\d+)/,
                S = ["419", "421"];
            var R = new WeakMap(),
                E = new WeakMap(),
                x = new WeakSet(),
                C = new WeakSet(),
                k = new WeakSet(),
                N = new WeakSet(),
                P = new WeakSet(),
                T = new WeakSet();
            let ReactBaseElement = class ReactBaseElement extends HTMLElement {
                get name() {
                    return this.getAttribute(this.nameAttribute);
                }
                get hasSSRContent() {
                    return "true" === this.getAttribute("data-ssr");
                }
                get attemptedSSR() {
                    return "true" === this.getAttribute("data-attempted-ssr");
                }
                connectedCallback() {
                    g(this, N, D).call(this);
                }
                disconnectedCallback() {
                    (f(this, R)?.unmount(), y(this, R, void 0));
                }
                constructor(...e) {
                    (super(...e),
                        m(this, E, { get: j, set: void 0 }),
                        v(this, x),
                        v(this, C),
                        v(this, k),
                        v(this, N),
                        v(this, P),
                        v(this, T),
                        m(this, R, { writable: !0, value: void 0 }));
                }
            };
            function j() {
                let e = this.embeddedData?.textContent;
                if (!e)
                    throw Error(
                        `No embedded data provided for react element ${this.name}`
                    );
                return e;
            }
            function L() {
                return (
                    s.A.isEnabled() ||
                    "true" === this.getAttribute("data-react-profiling")
                );
            }
            function A(e, t, r) {
                try {
                    (window.performance.mark(r),
                        queueMicrotask(() => {
                            try {
                                if (
                                    1 ===
                                        window.performance.getEntriesByName(t)
                                            .length &&
                                    1 ===
                                        window.performance.getEntriesByName(r)
                                            .length
                                ) {
                                    let n = window.performance.measure(e, t, r);
                                    (0, l.i)({
                                        reactHydrationTimings: {
                                            duration: n.duration,
                                            appName: this.name,
                                            reactVersion: u.version,
                                            renderType: this.hasSSRContent
                                                ? "hydrateRoot"
                                                : "createRoot",
                                        },
                                        requestUrl: location.href,
                                    });
                                }
                            } catch {
                            } finally {
                                (window.performance.clearMarks(t),
                                    window.performance.clearMarks(r),
                                    window.performance.clearMeasures(e));
                            }
                        }));
                } catch {}
            }
            function _() {
                try {
                    let e = crypto.randomUUID(),
                        t = `react-base-element-initial-render-${this.name}-[${e}]`,
                        r = `${t}-start`,
                        n = `${t}-end`,
                        a = `${t}-entry`;
                    return (
                        window.performance.mark(r),
                        () => {
                            g(this, C, A).call(this, a, r, n);
                        }
                    );
                } catch {
                    return i.l;
                }
            }
            async function D() {
                if (!this.reactRoot) throw Error("No react root provided");
                let e = { createRoot: c.H, hydrateRoot: c.c };
                g(this, x, L).call(this) &&
                    (e = await g(this, P, O).call(this));
                let t = g(this, k, _).call(this),
                    r = !1,
                    a = (e, t = {}) => {
                        r = !0;
                        let n = { critical: !0, reactAppName: this.name, ...t };
                        setTimeout(() => {
                            (0, o.N7)(e, n);
                        });
                    },
                    i = JSON.parse(f(this, E)),
                    s = this.ssrError?.textContent,
                    d = await this.getReactNode(i, a),
                    h = (0, n.jsx)(u.StrictMode, { children: d });
                if ((s && g(this, T, I).call(this, s), this.hasSSRContent)) {
                    let t = [
                        ...this.querySelectorAll('style[data-styled="true"]'),
                        ...this.querySelectorAll(
                            'link[data-remove-after-hydration="true"]'
                        ),
                    ];
                    for (let e of t) document.head.appendChild(e);
                    (y(
                        this,
                        R,
                        e.hydrateRoot(this.reactRoot, h, {
                            onRecoverableError: (e, t) => {
                                if (!(e instanceof Error)) return;
                                let n = w.exec(e.message),
                                    a = String(n?.groups?.invariant);
                                ((r = !S.includes(a)),
                                    (0, l.i)({
                                        incrementKey: "REACT_HYDRATION_ERROR",
                                        incrementTags: {
                                            appName: this.name,
                                            invariant: a,
                                        },
                                        requestUrl: window.location.href,
                                    }),
                                    r &&
                                        (0, l.X)() &&
                                        (console.groupCollapsed(
                                            `%c\u{26A0}\u{FE0F} Recoverable hydration error - ${this.name} - ${e.message}`,
                                            "background: rgba(255, 193, 7, 0.2); font-weight: bold; padding: 4px; border: 1px solid rgba(255, 193, 7, 0.5); border-radius: 4px;",
                                            "This is only visible to staff users and is safe to ignore. Reach out to #react for help understanding and fixing these hydration errors"
                                        ),
                                        e.cause &&
                                            console.warn("cause", e.cause),
                                        t.componentStack &&
                                            console.warn(
                                                "componentStack",
                                                t.componentStack
                                            ),
                                        t.digest &&
                                            console.warn("digest", t.digest),
                                        console.groupEnd()));
                            },
                        })
                    ),
                        t.length > 0 &&
                            requestIdleCallback(() => {
                                for (let e of t)
                                    e.parentElement?.removeChild(e);
                            }),
                        (0, l.i)({
                            incrementKey: "REACT_RENDER",
                            incrementTags: {
                                appName: this.name,
                                csr: !1,
                                error: r,
                                ssr: !0,
                                ssrError: !1,
                            },
                        }));
                } else
                    (y(this, R, e.createRoot(this.reactRoot)),
                        f(this, R).render(h),
                        (0, l.i)({
                            incrementKey: "REACT_RENDER",
                            incrementTags: {
                                appName: this.name,
                                csr: !0,
                                error: r,
                                ssr: this.attemptedSSR,
                                ssrError: !!this.ssrError,
                            },
                        }));
                (this.classList.add("loaded"), t());
            }
            function O() {
                return r.e("react-profiling").then(r.t.bind(r, 87335, 19));
            }
            function I(e) {
                if ((0, l.X)()) {
                    if (d.z[e])
                        return console.error(
                            "SSR failed with an expected error:",
                            d.z[e]
                        );
                    try {
                        let t = JSON.parse(e),
                            r = (function (e) {
                                if (!e.stacktrace) return "";
                                let t = `
 `;
                                return e.stacktrace.map((e) => {
                                    let {
                                            function: r,
                                            filename: n,
                                            lineno: a,
                                            colno: o,
                                        } = e,
                                        i = `${t} at ${r} (${n}:${a}:${o})`;
                                    return ((t = " "), i);
                                }).join(`
`);
                            })(t);
                        console.error(
                            "Error During Alloy SSR:",
                            `${t.type}: ${t.value}
`,
                            t,
                            r
                        );
                    } catch {
                        console.error(
                            "Error During Alloy SSR:",
                            e,
                            "unable to parse as json"
                        );
                    }
                }
            }
            (b([a.aC], ReactBaseElement.prototype, "embeddedData", void 0),
                b([a.aC], ReactBaseElement.prototype, "ssrError", void 0),
                b([a.aC], ReactBaseElement.prototype, "reactRoot", void 0));
            try {
                w.displayName ||
                    (w.displayName = "REACT_INVARIANT_ERROR_REGEX");
            } catch {}
        },
        45499: (e, t, r) => {
            r.d(t, { d: () => i });
            var n = r(74848),
                a = r(21728),
                o = r(23818);
            function i(e) {
                let t,
                    r,
                    i,
                    s = (0, a.c)(5),
                    { routes: l, children: u } = e;
                return (
                    s[0] !== l
                        ? ((r = { routes: l }), (s[0] = l), (s[1] = r))
                        : (r = s[1]),
                    (t = r),
                    s[2] !== t || s[3] !== u
                        ? ((i = (0, n.jsx)(o.k.Provider, {
                              value: t,
                              children: u,
                          })),
                          (s[2] = t),
                          (s[3] = u),
                          (s[4] = i))
                        : (i = s[4]),
                    i
                );
            }
            try {
                i.displayName || (i.displayName = "RoutesContextProvider");
            } catch {}
        },
        30729: (e, t, r) => {
            r.d(t, { e: () => o, v: () => i });
            var n = r(74848),
                a = r(21728);
            let o = (0, r(96540).createContext)(!1);
            function i(e) {
                let t,
                    r = (0, a.c)(3),
                    { enabled: i, children: s } = e;
                return (
                    r[0] !== s || r[1] !== i
                        ? ((t = (0, n.jsx)(o.Provider, {
                              value: i,
                              children: s,
                          })),
                          (r[0] = s),
                          (r[1] = i),
                          (r[2] = t))
                        : (t = r[2]),
                    t
                );
            }
            try {
                o.displayName || (o.displayName = "IsDataRouterEnabledContext");
            } catch {}
            try {
                i.displayName ||
                    (i.displayName = "IsDataRouterEnabledContextProvider");
            } catch {}
        },
        97710: (e, t, r) => {
            r.d(t, { V: () => u, l: () => c });
            var n = r(74848),
                a = r(21728),
                o = r(22353),
                i = r(96540),
                s = r(2604);
            let l = (0, i.createContext)(null),
                u = (0, i.memo)(function (e) {
                    let t,
                        r,
                        u,
                        c,
                        d = (0, a.c)(9),
                        { appName: h, children: p, critical: f } = e;
                    d[0] !== f || d[1] !== h
                        ? ((t = { reactAppName: h, critical: f }),
                          (d[0] = f),
                          (d[1] = h),
                          (d[2] = t))
                        : (t = d[2]);
                    let m = (0, i.useRef)(t);
                    (d[3] !== f || d[4] !== h
                        ? ((r = () => {
                              m.current = { reactAppName: h, critical: f };
                          }),
                          (d[3] = f),
                          (d[4] = h),
                          (d[5] = r))
                        : (r = d[5]),
                        (0, i.useEffect)(r),
                        d[6] === Symbol.for("react.memo_cache_sentinel")
                            ? ((u = (e, t) => {
                                  if (e)
                                      return (0, s.km)(e, (e) => {
                                          (0, o.N7)(e, {
                                              critical: m.current.critical,
                                              reactAppName:
                                                  m.current.reactAppName,
                                              ...t,
                                          });
                                      });
                              }),
                              (d[6] = u))
                            : (u = d[6]));
                    let y = u;
                    return (
                        d[7] !== p
                            ? ((c = (0, n.jsx)(l.Provider, {
                                  value: y,
                                  children: p,
                              })),
                              (d[7] = p),
                              (d[8] = c))
                            : (c = d[8]),
                        c
                    );
                });
            function c() {
                let e = (0, i.useContext)(l);
                if (null == e)
                    throw Error(
                        "useReportErrorContext must be used within a ReportErrorContextProvider"
                    );
                return e;
            }
            try {
                l.displayName || (l.displayName = "ReportErrorContext");
            } catch {}
            try {
                u.displayName || (u.displayName = "ReportErrorContextProvider");
            } catch {}
        },
        2604: (e, t, r) => {
            r.d(t, { Ly: () => m, hw: () => p, km: () => h });
            var n = r(74848),
                a = r(21728),
                o = r(22353),
                i = r(85788),
                s = r(32647),
                l = r(96540),
                u = r(66300),
                c = r(39627);
            let d = new WeakSet();
            function h(e, t) {
                d.has(e) || (d.add(e), t(e));
            }
            let p = (e) => {
                let t,
                    r = (0, a.c)(3),
                    { appName: o } = e,
                    s = (0, i.r5)();
                return !(function (e) {
                    return (0, i.pX)(e) && 404 === e.status;
                })(s)
                    ? (r[0] !== o || r[1] !== s
                          ? ((t = (0, n.jsx)(f, { appName: o, routeError: s })),
                            (r[0] = o),
                            (r[1] = s),
                            (r[2] = t))
                          : (t = r[2]),
                      t)
                    : null;
            };
            function f(e) {
                let t,
                    r,
                    i,
                    u,
                    c = (0, a.c)(6),
                    { appName: d, routeError: p } = e,
                    f = (0, l.useRef)(d);
                return (
                    c[0] !== d
                        ? ((t = () => {
                              f.current = d;
                          }),
                          (c[0] = d),
                          (c[1] = t))
                        : (t = c[1]),
                    (0, l.useEffect)(t),
                    c[2] !== p
                        ? ((r = () => {
                              p &&
                                  h(p, (e) => {
                                      (0, o.N7)(e, {
                                          critical: !0,
                                          reactAppName: f.current,
                                      });
                                  });
                          }),
                          (i = [p]),
                          (c[2] = p),
                          (c[3] = r),
                          (c[4] = i))
                        : ((r = c[3]), (i = c[4])),
                    (0, l.useEffect)(r, i),
                    c[5] === Symbol.for("react.memo_cache_sentinel")
                        ? ((u = (0, n.jsxs)(s.E, {
                              border: !1,
                              spacious: !1,
                              children: [
                                  (0, n.jsx)(s.E.Heading, {
                                      children: "Unable to load page.",
                                  }),
                                  (0, n.jsx)(s.E.Description, {
                                      children:
                                          "Please reload page and try again",
                                  }),
                              ],
                          })),
                          (c[5] = u))
                        : (u = c[5]),
                    u
                );
            }
            let m = (e) => {
                let t,
                    r = (0, a.c)(6),
                    { appName: o } = e,
                    s = (0, i.r5)();
                if ((0, u.c)(s)) {
                    let e;
                    return (
                        r[0] !== o || r[1] !== s
                            ? ((e = (0, n.jsx)(y, {
                                  appName: o,
                                  responseError: s,
                              })),
                              (r[0] = o),
                              (r[1] = s),
                              (r[2] = e))
                            : (e = r[2]),
                        e
                    );
                }
                return (
                    r[3] !== o || r[4] !== s
                        ? ((t = (0, n.jsx)(f, { routeError: s, appName: o })),
                          (r[3] = o),
                          (r[4] = s),
                          (r[5] = t))
                        : (t = r[5]),
                    t
                );
            };
            function y(e) {
                let t,
                    r,
                    i,
                    u,
                    d,
                    p,
                    f,
                    m,
                    y,
                    g = (0, a.c)(11),
                    { appName: v, responseError: b } = e,
                    w = (0, a.c)(3),
                    S = b.response.status;
                (w[0] !== S
                    ? ((m = () => {
                          let e = (function (e) {
                              let t =
                                  404 === e
                                      ? "404 Page not found"
                                      : 500 === e
                                        ? "500 Internal server error"
                                        : `Error ${e}`;
                              return (0, c.Y)(t);
                          })(S);
                          (0, c.D)(e);
                      }),
                      (y = [S]),
                      (w[0] = S),
                      (w[1] = m),
                      (w[2] = y))
                    : ((m = w[1]), (y = w[2])),
                    (0, l.useEffect)(m, y));
                let R = (0, l.useRef)(v);
                (g[0] !== v
                    ? ((t = () => {
                          R.current = v;
                      }),
                      (g[0] = v),
                      (g[1] = t))
                    : (t = g[1]),
                    (0, l.useEffect)(t),
                    g[2] !== b
                        ? ((r = () => {
                              h(b, (e) => {
                                  (0, o.N7)(e, {
                                      critical: !0,
                                      reactAppName: R.current,
                                  });
                              });
                          }),
                          (i = [b]),
                          (g[2] = b),
                          (g[3] = r),
                          (g[4] = i))
                        : ((r = g[3]), (i = g[4])),
                    (0, l.useEffect)(r, i),
                    g[5] === Symbol.for("react.memo_cache_sentinel")
                        ? ((u = (0, n.jsx)(s.E.Heading, {
                              children: "Unable to load page.",
                          })),
                          (g[5] = u))
                        : (u = g[5]));
                let E = `Status: ${b.response.status} Message: ${b.message}`;
                return (
                    g[6] !== E
                        ? ((d = (0, n.jsx)(s.E.Description, { children: E })),
                          (g[6] = E),
                          (g[7] = d))
                        : (d = g[7]),
                    g[8] === Symbol.for("react.memo_cache_sentinel")
                        ? ((p = (0, n.jsx)(s.E.Description, {
                              children: "Please reload page and try again",
                          })),
                          (g[8] = p))
                        : (p = g[8]),
                    g[9] !== d
                        ? ((f = (0, n.jsxs)(s.E, {
                              border: !1,
                              spacious: !1,
                              children: [u, d, p],
                          })),
                          (g[9] = d),
                          (g[10] = f))
                        : (f = g[10]),
                    f
                );
            }
            try {
                p.displayName || (p.displayName = "UnhandledRouteError");
            } catch {}
            try {
                f.displayName || (f.displayName = "BaseRouteErrorBoundary");
            } catch {}
            try {
                m.displayName || (m.displayName = "RootAppRouteErrorElement");
            } catch {}
            try {
                y.displayName || (y.displayName = "ResponseErrorElement");
            } catch {}
        },
        85788: (e, t, r) => {
            r.d(t, {
                AO: () => f,
                B6: () => N,
                BV: () => tx,
                C5: () => tw,
                Ew: () => ts,
                FE: () => to,
                Gy: () => t1,
                Ix: () => tE,
                K: () => t7,
                KP: () => tc,
                Kd: () => tJ,
                LG: () => ti,
                N_: () => tX,
                OA: () => tQ,
                PI: () => tP,
                RQ: () => eQ,
                Ye: () => e5,
                Ys: () => tV,
                Zp: () => e1,
                _3: () => eq,
                cq: () => ta,
                g: () => e4,
                k2: () => tK,
                o1: () => j,
                ok: () => t2,
                pX: () => W,
                pg: () => tv,
                qh: () => tR,
                r5: () => tl,
                rc: () => s,
                sv: () => tS,
                tW: () => k,
                ue: () => S,
                wQ: () => eK,
                x$: () => e3,
                zR: () => u,
                zy: () => eX,
            });
            var n,
                a = r(96540);
            r(16069);
            var o = (e) => {
                    throw TypeError(e);
                },
                i = (e, t, r) => (
                    t.has(e) || o("Cannot read from private field"),
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
                    let { window: a = document.defaultView, v5Compat: o = !1 } =
                            n,
                        i = a.history,
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
                            return e(a, i);
                        },
                        listen(e) {
                            if (u)
                                throw Error(
                                    "A history only accepts one active listener"
                                );
                            return (
                                a.addEventListener(l, f),
                                (u = e),
                                () => {
                                    (a.removeEventListener(l, f), (u = null));
                                }
                            );
                        },
                        createHref: (e) => t(a, e),
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
                                a.location.assign(l);
                            }
                            o &&
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
                            let a = h(n, (c = d())),
                                l = m.createHref(n);
                            (i.replaceState(a, "", l),
                                o &&
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
                        let { pathname: r, search: n, hash: a } = e.location;
                        return p(
                            "",
                            { pathname: r, search: n, hash: a },
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
                                ? o(
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
                return e.map((e, a) => {
                    let o = [...r, String(a)],
                        i = "string" == typeof e.id ? e.id : o.join("-");
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
                            e.children && (r.children = w(e.children, t, o, n)),
                            r
                        );
                    }
                });
            }
            function S(e, t, r = "/") {
                return R(e, t, r, !1);
            }
            function R(e, t, r, n) {
                let a = T(("string" == typeof t ? m(t) : t).pathname || "/", r);
                if (null == a) return null;
                let o = (function e(t, r = [], n = [], a = "") {
                    let o = (t, o, i) => {
                        var s, l;
                        let u,
                            d,
                            h = {
                                relativePath: void 0 === i ? t.path || "" : i,
                                caseSensitive: !0 === t.caseSensitive,
                                childrenIndex: o,
                                route: t,
                            };
                        h.relativePath.startsWith("/") &&
                            (c(
                                h.relativePath.startsWith(a),
                                `Absolute route path "${h.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
                            ),
                            (h.relativePath = h.relativePath.slice(a.length)));
                        let p = O([a, h.relativePath]),
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
                                    let [n, ...a] = r,
                                        o = n.endsWith("?"),
                                        i = n.replace(/\?$/, "");
                                    if (0 === a.length)
                                        return o ? [i, ""] : [i];
                                    let s = e(a.join("/")),
                                        l = [];
                                    return (
                                        l.push(
                                            ...s.map((e) =>
                                                "" === e ? i : [i, e].join("/")
                                            )
                                        ),
                                        o && l.push(...s),
                                        l.map((e) =>
                                            t.startsWith("/") && "" === e
                                                ? "/"
                                                : e
                                        )
                                    );
                                })(e.path))
                                    o(e, t, r);
                            else o(e, t);
                        }),
                        r
                    );
                })(e);
                o.sort((e, t) => {
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
                for (let e = 0; null == i && e < o.length; ++e) {
                    let t = P(a);
                    i = (function (e, t, r = !1) {
                        let { routesMeta: n } = e,
                            a = {},
                            o = "/",
                            i = [];
                        for (let e = 0; e < n.length; ++e) {
                            let s = n[e],
                                l = e === n.length - 1,
                                u = "/" === o ? t : t.slice(o.length) || "/",
                                c = N(
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
                                    (c = N(
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
                            (Object.assign(a, c.params),
                                i.push({
                                    params: a,
                                    pathname: O([o, c.pathname]),
                                    pathnameBase: I(O([o, c.pathnameBase])),
                                    route: d,
                                }),
                                "/" !== c.pathnameBase &&
                                    (o = O([o, c.pathnameBase])));
                        }
                        return i;
                    })(o[e], t, n);
                }
                return i;
            }
            function E(e, t) {
                let { route: r, pathname: n, params: a } = e;
                return {
                    id: r.id,
                    pathname: n,
                    params: a,
                    data: t[r.id],
                    handle: r.handle,
                };
            }
            var x = /^:[\w-]+$/,
                C = (e) => "*" === e;
            function k(e, t = {}) {
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
                    a = (e) =>
                        null == e ? "" : "string" == typeof e ? e : String(e);
                return (
                    n +
                    r
                        .split(/\/+/)
                        .map((e, r, n) => {
                            if (r === n.length - 1 && "*" === e)
                                return a(t["*"]);
                            let o = e.match(/^:([\w-]+)(\??)$/);
                            if (o) {
                                let [, e, r] = o,
                                    n = t[e];
                                return (
                                    c(
                                        "?" === r || null != n,
                                        `Missing ":${e}" param`
                                    ),
                                    a(n)
                                );
                            }
                            return e.replace(/\?$/g, "");
                        })
                        .filter((e) => !!e)
                        .join("/")
                );
            }
            function N(e, t) {
                "string" == typeof e &&
                    (e = { path: e, caseSensitive: !1, end: !0 });
                let [r, n] = (function (e, t = !1, r = !0) {
                        d(
                            "*" === e || !e.endsWith("*") || e.endsWith("/*"),
                            `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
                        );
                        let n = [],
                            a =
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
                                  (a +=
                                      "*" === e || "/*" === e
                                          ? "(.*)$"
                                          : "(?:\\/(.+)|\\/*)$"))
                                : r
                                  ? (a += "\\/*$")
                                  : "" !== e &&
                                    "/" !== e &&
                                    (a += "(?:(?=\\/|$))"),
                            [new RegExp(a, t ? void 0 : "i"), n]
                        );
                    })(e.path, e.caseSensitive, e.end),
                    a = t.match(r);
                if (!a) return null;
                let o = a[0],
                    i = o.replace(/(.)\/+$/, "$1"),
                    s = a.slice(1);
                return {
                    params: n.reduce(
                        (e, { paramName: t, isOptional: r }, n) => {
                            if ("*" === t) {
                                let e = s[n] || "";
                                i = o
                                    .slice(0, o.length - e.length)
                                    .replace(/(.)\/+$/, "$1");
                            }
                            let a = s[n];
                            return (
                                r && !a
                                    ? (e[t] = void 0)
                                    : (e[t] = (a || "").replace(/%2F/g, "/")),
                                e
                            );
                        },
                        {}
                    ),
                    pathname: o,
                    pathnameBase: i,
                    pattern: e,
                };
            }
            function P(e) {
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
            function j(e, t = "/") {
                var r;
                let n,
                    {
                        pathname: a,
                        search: o = "",
                        hash: i = "",
                    } = "string" == typeof e ? m(e) : e;
                return {
                    pathname: a
                        ? a.startsWith("/")
                            ? a
                            : ((r = a),
                              (n = t.replace(/\/+$/, "").split("/")),
                              r.split("/").forEach((e) => {
                                  ".." === e
                                      ? n.length > 1 && n.pop()
                                      : "." !== e && n.push(e);
                              }),
                              n.length > 1 ? n.join("/") : "/")
                        : t,
                    search: M(o),
                    hash: $(i),
                };
            }
            function L(e, t, r, n) {
                return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
            }
            function A(e) {
                return e.filter(
                    (e, t) =>
                        0 === t || (e.route.path && e.route.path.length > 0)
                );
            }
            function _(e) {
                let t = A(e);
                return t.map((e, r) =>
                    r === t.length - 1 ? e.pathname : e.pathnameBase
                );
            }
            function D(e, t, r, n = !1) {
                let a, o;
                "string" == typeof e
                    ? (a = m(e))
                    : (c(
                          !(a = { ...e }).pathname || !a.pathname.includes("?"),
                          L("?", "pathname", "search", a)
                      ),
                      c(
                          !a.pathname || !a.pathname.includes("#"),
                          L("#", "pathname", "hash", a)
                      ),
                      c(
                          !a.search || !a.search.includes("#"),
                          L("#", "search", "hash", a)
                      ));
                let i = "" === e || "" === a.pathname,
                    s = i ? "/" : a.pathname;
                if (null == s) o = r;
                else {
                    let e = t.length - 1;
                    if (!n && s.startsWith("..")) {
                        let t = s.split("/");
                        for (; ".." === t[0]; ) (t.shift(), (e -= 1));
                        a.pathname = t.join("/");
                    }
                    o = e >= 0 ? t[e] : "/";
                }
                let l = j(a, o),
                    u = s && "/" !== s && s.endsWith("/"),
                    d = (i || "." === s) && r.endsWith("/");
                return (
                    !l.pathname.endsWith("/") &&
                        (u || d) &&
                        (l.pathname += "/"),
                    l
                );
            }
            var O = (e) => e.join("/").replace(/\/\/+/g, "/"),
                I = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
                M = (e) =>
                    e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "",
                $ = (e) =>
                    e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "",
                z = class {
                    constructor(e, t, r, n = !1) {
                        ((this.status = e),
                            (this.statusText = t || ""),
                            (this.internal = n),
                            r instanceof Error
                                ? ((this.data = r.toString()), (this.error = r))
                                : (this.data = r));
                    }
                };
            function W(e) {
                return (
                    null != e &&
                    "number" == typeof e.status &&
                    "string" == typeof e.statusText &&
                    "boolean" == typeof e.internal &&
                    "data" in e
                );
            }
            var U = ["POST", "PUT", "PATCH", "DELETE"],
                B = new Set(U),
                F = new Set(["GET", ...U]),
                H = new Set([301, 302, 303, 307, 308]),
                q = new Set([307, 308]),
                Y = {
                    state: "idle",
                    location: void 0,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                },
                V = {
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
                G = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                X = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
                K = "remix-router-transitions",
                Q = Symbol("ResetLoaderData");
            function Z(e, t, r, n, a, o) {
                let i, s;
                if (a) {
                    for (let e of ((i = []), t))
                        if ((i.push(e), e.route.id === a)) {
                            s = e;
                            break;
                        }
                } else ((i = t), (s = t[t.length - 1]));
                let l = D(
                    n || ".",
                    _(i),
                    T(e.pathname, r) || e.pathname,
                    "path" === o
                );
                if (
                    (null == n && ((l.search = e.search), (l.hash = e.hash)),
                    (null == n || "" === n || "." === n) && s)
                ) {
                    let e = eO(l.search);
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
                            "/" === l.pathname ? r : O([r, l.pathname])),
                    f(l)
                );
            }
            function ee(e, t, r) {
                var n;
                let a, o;
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
                        error: eN(405, { method: r.formMethod }),
                    };
                let i = () => ({
                        path: t,
                        error: eN(400, { type: "invalid-body" }),
                    }),
                    s = (r.formMethod || "get").toUpperCase(),
                    l = eT(t);
                if (void 0 !== r.body) {
                    if ("text/plain" === r.formEncType) {
                        if (!eD(s)) return i();
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
                        if (!eD(s)) return i();
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
                    ((a = ew(r.formData)), (o = r.formData));
                else if (r.body instanceof FormData)
                    ((a = ew(r.body)), (o = r.body));
                else if (r.body instanceof URLSearchParams)
                    o = eS((a = r.body));
                else if (null == r.body)
                    ((a = new URLSearchParams()), (o = new FormData()));
                else
                    try {
                        ((a = new URLSearchParams(r.body)), (o = eS(a)));
                    } catch (e) {
                        return i();
                    }
                let u = {
                    formMethod: s,
                    formAction: l,
                    formEncType:
                        (r && r.formEncType) ||
                        "application/x-www-form-urlencoded",
                    formData: o,
                    json: void 0,
                    text: void 0,
                };
                if (eD(u.formMethod)) return { path: t, submission: u };
                let d = m(t);
                return (
                    e && d.search && eO(d.search) && a.append("index", ""),
                    (d.search = `?${a}`),
                    { path: f(d), submission: u }
                );
            }
            function et(
                e,
                t,
                r,
                n,
                a,
                o,
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
                    R = b ? (ej(b[1]) ? b[1].error : b[1].data) : void 0,
                    E = a.createURL(o.location),
                    x = a.createURL(l);
                if (c && o.errors) {
                    let e = Object.keys(o.errors)[0];
                    w = i.findIndex((t) => t.route.id === e);
                } else if (b && ej(b[1])) {
                    let e = b[0];
                    w = i.findIndex((t) => t.route.id === e) - 1;
                }
                let C = b ? b[1].statusCode : void 0,
                    k = C && C >= 400,
                    N = {
                        currentUrl: E,
                        currentParams: o.matches[0]?.params || {},
                        nextUrl: x,
                        nextParams: i[0].params,
                        ...s,
                        actionResult: R,
                        actionStatus: C,
                    },
                    P = i.map((a, i) => {
                        var s, l, h, p, f;
                        let m,
                            y,
                            g,
                            { route: v } = a,
                            b = null;
                        if (
                            (null != w && i > w
                                ? (b = !1)
                                : v.lazy
                                  ? (b = !0)
                                  : null == v.loader
                                    ? (b = !1)
                                    : c
                                      ? (b = er(v, o.loaderData, o.errors))
                                      : ((s = o.loaderData),
                                        (l = o.matches[i]),
                                        (h = a),
                                        (m = !l || h.route.id !== l.route.id),
                                        (y = !s.hasOwnProperty(h.route.id)),
                                        (m || y) && (b = !0)),
                            null !== b)
                        )
                            return ep(r, n, e, a, u, t, b);
                        let S =
                                !k &&
                                (d ||
                                    E.pathname + E.search ===
                                        x.pathname + x.search ||
                                    E.search !== x.search ||
                                    ((p = o.matches[i]),
                                    (f = a),
                                    (g = p.route.path),
                                    p.pathname !== f.pathname ||
                                        (null != g &&
                                            g.endsWith("*") &&
                                            p.params["*"] !== f.params["*"]))),
                            R = { ...N, defaultShouldRevalidate: S },
                            C = en(a, R);
                        return ep(r, n, e, a, u, t, C, R);
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
                        let l = o.fetchers.get(s),
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
                        let w = eI(b, e.path),
                            R = new AbortController(),
                            E = eb(a, e.path, R.signal),
                            x = null;
                        if (h.has(s))
                            (h.delete(s), (x = ef(r, n, E, b, w, u, t)));
                        else if (f) d && (x = ef(r, n, E, b, w, u, t));
                        else {
                            let e = { ...N, defaultShouldRevalidate: !k && d };
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
                    { dsMatches: P, revalidatingFetchers: T }
                );
            }
            function er(e, t, r) {
                if (e.lazy) return !0;
                if (!e.loader) return !1;
                let n = null != t && e.id in t,
                    a = null != r && void 0 !== r[e.id];
                return (
                    (!!n || !a) &&
                    (("function" == typeof e.loader &&
                        !0 === e.loader.hydrate) ||
                        (!n && !a))
                );
            }
            function en(e, t) {
                if (e.route.shouldRevalidate) {
                    let r = e.route.shouldRevalidate(t);
                    if ("boolean" == typeof r) return r;
                }
                return t.defaultShouldRevalidate;
            }
            function ea(e, t, r, n, a) {
                let o;
                if (e) {
                    let t = n[e];
                    (c(
                        t,
                        `No route found to patch children into: routeId = ${e}`
                    ),
                        t.children || (t.children = []),
                        (o = t.children));
                } else o = r;
                let i = w(
                    t.filter(
                        (e) =>
                            !o.some((t) =>
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
                    a,
                    [e || "_", "patch", String(o?.length || "0")],
                    n
                );
                o.push(...i);
            }
            var eo = new WeakMap(),
                ei = ({
                    key: e,
                    route: t,
                    manifest: r,
                    mapRouteProperties: n,
                }) => {
                    let a = r[t.id];
                    if (
                        (c(a, "No route found in manifest"),
                        !a.lazy || "object" != typeof a.lazy)
                    )
                        return;
                    let o = a.lazy[e];
                    if (!o) return;
                    let i = eo.get(a);
                    i || ((i = {}), eo.set(a, i));
                    let s = i[e];
                    if (s) return s;
                    let l = (async () => {
                        let t = v.has(e),
                            r = void 0 !== a[e] && "hasErrorBoundary" !== e;
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
                                `Route "${a.id}" has a static property "${e}" defined. The lazy property will be ignored.`
                            );
                        else {
                            let t = await o();
                            null != t &&
                                (Object.assign(a, { [e]: t }),
                                Object.assign(a, n(a)));
                        }
                        "object" == typeof a.lazy &&
                            ((a.lazy[e] = void 0),
                            Object.values(a.lazy).every((e) => void 0 === e) &&
                                (a.lazy = void 0));
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
                let { matches: a, request: o, params: i, context: s } = e,
                    l = { handlerResult: void 0 };
                try {
                    let e = a.flatMap((e) =>
                            e.route.unstable_middleware
                                ? e.route.unstable_middleware.map((t) => [
                                      e.route.id,
                                      t,
                                  ])
                                : []
                        ),
                        n = await ed(
                            { request: o, params: i, context: s },
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
            async function ed(e, t, r, n, a, o = 0) {
                let i,
                    { request: s } = e;
                if (s.signal.aborted) {
                    if (s.signal.reason) throw s.signal.reason;
                    throw Error(
                        `Request aborted without an \`AbortSignal.reason\`: ${s.method} ${s.url}`
                    );
                }
                let l = t[o];
                if (!l) return ((n.handlerResult = await a()), n.handlerResult);
                let [u, c] = l,
                    d = !1,
                    h = async () => {
                        if (d)
                            throw Error(
                                "You may only call `next()` once per middleware"
                            );
                        d = !0;
                        let s = await ed(e, t, r, n, a, o + 1);
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
            function eh(e, t, r, n, a) {
                let o = ei({
                        key: "unstable_middleware",
                        route: n.route,
                        manifest: t,
                        mapRouteProperties: e,
                    }),
                    i = (function (e, t, r, n, a) {
                        let o,
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
                                    let a = b.has(e),
                                        o =
                                            void 0 !== i[e] &&
                                            "hasErrorBoundary" !== e;
                                    a
                                        ? d(
                                              !a,
                                              "Route property " +
                                                  e +
                                                  " is not a supported property to be returned from a lazy route function. This property will be ignored."
                                          )
                                        : o
                                          ? d(
                                                !o,
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
                            if (a && a.includes(i)) continue;
                            let s = ei({
                                key: i,
                                route: e,
                                manifest: r,
                                mapRouteProperties: n,
                            });
                            s && (l.push(s), i === t && (o = s));
                        }
                        let u =
                            l.length > 0
                                ? Promise.all(l).then(() => {})
                                : void 0;
                        return (
                            u?.catch(() => {}),
                            o?.catch(() => {}),
                            { lazyRoutePromise: u, lazyHandlerPromise: o }
                        );
                    })(n.route, eD(r.method) ? "action" : "loader", t, e, a);
                return {
                    middleware: o,
                    route: i.lazyRoutePromise,
                    handler: i.lazyHandlerPromise,
                };
            }
            function ep(e, t, r, n, a, o, i, s = null) {
                let l = !1,
                    u = eh(e, t, r, n, a);
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
                                  scopedContext: o,
                              })
                            : Promise.resolve({ type: "data", result: void 0 }),
                };
            }
            function ef(e, t, r, n, a, o, i, s = null) {
                return n.map((n) =>
                    n.route.id !== a.route.id
                        ? {
                              ...n,
                              shouldLoad: !1,
                              unstable_shouldRevalidateArgs: s,
                              unstable_shouldCallHandler: () => !1,
                              _lazyPromises: eh(e, t, r, n, o),
                              resolve: () =>
                                  Promise.resolve({
                                      type: "data",
                                      result: void 0,
                                  }),
                          }
                        : ep(e, t, r, n, o, i, !0, s)
                );
            }
            async function em(e, t, r, n, a, o) {
                r.some((e) => e._lazyPromises?.middleware) &&
                    (await Promise.all(
                        r.map((e) => e._lazyPromises?.middleware)
                    ));
                let i = {
                        request: t,
                        params: r[0].params,
                        context: a,
                        matches: r,
                    },
                    s = o
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
                handlerOverride: a,
                scopedContext: o,
            }) {
                let i,
                    s,
                    l = eD(e.method),
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
                                          context: o,
                                      },
                                      ...(void 0 !== n ? [n] : [])
                                  );
                        return Promise.race([
                            (async () => {
                                try {
                                    let e = await (a ? a((e) => l(e)) : l());
                                    return { type: "data", result: e };
                                } catch (e) {
                                    return { type: "error", result: e };
                                }
                            })(),
                            i,
                        ]);
                    };
                try {
                    let a = l ? t.route.action : t.route.loader;
                    if (r || n)
                        if (a) {
                            let e,
                                [t] = await Promise.all([
                                    c(a).catch((t) => {
                                        e = t;
                                    }),
                                    r,
                                    n,
                                ]);
                            if (void 0 !== e) throw e;
                            i = t;
                        } else {
                            await r;
                            let a = l ? t.route.action : t.route.loader;
                            if (a) [i] = await Promise.all([c(a), n]);
                            else {
                                if ("action" !== u)
                                    return { type: "data", result: void 0 };
                                let r = new URL(e.url),
                                    n = r.pathname + r.search;
                                throw eN(405, {
                                    method: e.method,
                                    pathname: n,
                                    routeId: t.route.id,
                                });
                            }
                        }
                    else if (a) i = await c(a);
                    else {
                        let t = new URL(e.url),
                            r = t.pathname + t.search;
                        throw eN(404, { pathname: r });
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
                if (e_(t)) {
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
                              error: new z(t.status, t.statusText, e),
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
                    return eA(t)
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
                                  error: new z(
                                      t.init?.status || 500,
                                      void 0,
                                      t.data
                                  ),
                                  statusCode: W(t) ? t.status : void 0,
                                  headers: t.init?.headers
                                      ? new Headers(t.init.headers)
                                      : void 0,
                              }
                        : {
                              type: "error",
                              error: t,
                              statusCode: W(t) ? t.status : void 0,
                          };
                return eA(t)
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
                if (G.test(e)) {
                    let n = new URL(e.startsWith("//") ? t.protocol + e : e),
                        a = null != T(n.pathname, r);
                    if (n.origin === t.origin && a)
                        return n.pathname + n.search + n.hash;
                }
                return e;
            }
            function eb(e, t, r, n) {
                let a = e.createURL(eT(t)).toString(),
                    o = { signal: r };
                if (n && eD(n.formMethod)) {
                    let { formMethod: e, formEncType: t } = n;
                    ((o.method = e.toUpperCase()),
                        "application/json" === t
                            ? ((o.headers = new Headers({ "Content-Type": t })),
                              (o.body = JSON.stringify(n.json)))
                            : "text/plain" === t
                              ? (o.body = n.text)
                              : "application/x-www-form-urlencoded" === t &&
                                  n.formData
                                ? (o.body = ew(n.formData))
                                : (o.body = n.formData));
                }
                return new Request(a, o);
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
            function eR(e, t, r, n, a, o) {
                let { loaderData: i, errors: s } = (function (
                    e,
                    t,
                    r,
                    n = !1,
                    a = !1
                ) {
                    let o,
                        i = {},
                        s = null,
                        l = !1,
                        u = {},
                        d = r && ej(r[1]) ? r[1].error : void 0;
                    return (
                        e.forEach((r) => {
                            if (!(r.route.id in t)) return;
                            let h = r.route.id,
                                p = t[h];
                            if (
                                (c(
                                    !eL(p),
                                    "Cannot handle redirect results in processLoaderData"
                                ),
                                ej(p))
                            ) {
                                let t = p.error;
                                if (
                                    (void 0 !== d && ((t = d), (d = void 0)),
                                    (s = s || {}),
                                    a)
                                )
                                    s[h] = t;
                                else {
                                    let r = eC(e, h);
                                    null == s[r.route.id] &&
                                        (s[r.route.id] = t);
                                }
                                (n || (i[h] = Q),
                                    l ||
                                        ((l = !0),
                                        (o = W(p.error)
                                            ? p.error.status
                                            : 500)),
                                    p.headers && (u[h] = p.headers));
                            } else
                                ((i[h] = p.data),
                                    p.statusCode &&
                                        200 !== p.statusCode &&
                                        !l &&
                                        (o = p.statusCode),
                                    p.headers && (u[h] = p.headers));
                        }),
                        void 0 !== d &&
                            r &&
                            ((s = { [r[0]]: d }), r[2] && (i[r[2]] = void 0)),
                        {
                            loaderData: i,
                            errors: s,
                            statusCode: o || 200,
                            loaderHeaders: u,
                        }
                    );
                })(t, r, n);
                return (
                    a
                        .filter(
                            (e) =>
                                !e.matches ||
                                e.matches.some((e) => e.shouldLoad)
                        )
                        .forEach((t) => {
                            let { key: r, match: n, controller: a } = t,
                                i = o[r];
                            if (
                                (c(
                                    i,
                                    "Did not find corresponding fetcher result"
                                ),
                                !a || !a.signal.aborted)
                            )
                                if (ej(i)) {
                                    let t = eC(e.matches, n?.route.id);
                                    ((s && s[t.route.id]) ||
                                        (s = { ...s, [t.route.id]: i.error }),
                                        e.fetchers.delete(r));
                                } else if (eL(i))
                                    c(
                                        !1,
                                        "Unhandled fetcher revalidation redirect"
                                    );
                                else {
                                    let t = eW(i.data);
                                    e.fetchers.set(r, t);
                                }
                        }),
                    { loaderData: i, errors: s }
                );
            }
            function eE(e, t, r, n) {
                let a = Object.entries(t)
                    .filter(([, e]) => e !== Q)
                    .reduce((e, [t, r]) => ((e[t] = r), e), {});
                for (let o of r) {
                    let r = o.route.id;
                    if (
                        (!t.hasOwnProperty(r) &&
                            e.hasOwnProperty(r) &&
                            o.route.loader &&
                            (a[r] = e[r]),
                        n && n.hasOwnProperty(r))
                    )
                        break;
                }
                return a;
            }
            function ex(e) {
                return e
                    ? ej(e[1])
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
            function ek(e) {
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
            function eN(
                e,
                { pathname: t, routeId: r, method: n, type: a, message: o } = {}
            ) {
                let i = "Unknown Server Error",
                    s = "Unknown @remix-run/router error";
                return (
                    400 === e
                        ? ((i = "Bad Request"),
                          n && t && r
                              ? (s = `You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`)
                              : "invalid-body" === a &&
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
                    new z(e || 500, i, Error(s), !0)
                );
            }
            function eP(e) {
                let t = Object.entries(e);
                for (let e = t.length - 1; e >= 0; e--) {
                    let [r, n] = t[e];
                    if (eL(n)) return { key: r, result: n };
                }
            }
            function eT(e) {
                return f({ ...("string" == typeof e ? m(e) : e), hash: "" });
            }
            function ej(e) {
                return "error" === e.type;
            }
            function eL(e) {
                return "redirect" === (e && e.type);
            }
            function eA(e) {
                return (
                    "object" == typeof e &&
                    null != e &&
                    "type" in e &&
                    "data" in e &&
                    "init" in e &&
                    "DataWithResponseInit" === e.type
                );
            }
            function e_(e) {
                return (
                    null != e &&
                    "number" == typeof e.status &&
                    "string" == typeof e.statusText &&
                    "object" == typeof e.headers &&
                    void 0 !== e.body
                );
            }
            function eD(e) {
                return B.has(e.toUpperCase());
            }
            function eO(e) {
                return new URLSearchParams(e)
                    .getAll("index")
                    .some((e) => "" === e);
            }
            function eI(e, t) {
                let r = "string" == typeof t ? m(t).search : t.search;
                if (e[e.length - 1].route.index && eO(r || ""))
                    return e[e.length - 1];
                let n = A(e);
                return n[n.length - 1];
            }
            function eM(e) {
                let {
                    formMethod: t,
                    formAction: r,
                    formEncType: n,
                    text: a,
                    formData: o,
                    json: i,
                } = e;
                if (t && r && n) {
                    if (null != a)
                        return {
                            formMethod: t,
                            formAction: r,
                            formEncType: n,
                            formData: void 0,
                            json: void 0,
                            text: a,
                        };
                    else if (null != o)
                        return {
                            formMethod: t,
                            formAction: r,
                            formEncType: n,
                            formData: o,
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
            function e$(e, t) {
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
            function ez(e, t) {
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
            function eW(e) {
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
            var eU = a.createContext(null);
            eU.displayName = "DataRouter";
            var eB = a.createContext(null);
            eB.displayName = "DataRouterState";
            var eF = a.createContext({ isTransitioning: !1 });
            eF.displayName = "ViewTransition";
            var eH = a.createContext(new Map());
            ((eH.displayName = "Fetchers"),
                (a.createContext(null).displayName = "Await"));
            var eq = a.createContext(null);
            eq.displayName = "Navigation";
            var eY = a.createContext(null);
            eY.displayName = "Location";
            var eV = a.createContext({
                outlet: null,
                matches: [],
                isDataRoute: !1,
            });
            eV.displayName = "Route";
            var eJ = a.createContext(null);
            function eG() {
                return null != a.useContext(eY);
            }
            function eX() {
                return (
                    c(
                        eG(),
                        "useLocation() may be used only in the context of a <Router> component."
                    ),
                    a.useContext(eY).location
                );
            }
            function eK() {
                return a.useContext(eY).navigationType;
            }
            function eQ(e) {
                c(
                    eG(),
                    "useMatch() may be used only in the context of a <Router> component."
                );
                let { pathname: t } = eX();
                return a.useMemo(() => N(e, P(t)), [t, e]);
            }
            eJ.displayName = "RouteError";
            var eZ =
                "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
            function e0(e) {
                a.useContext(eq).static || a.useLayoutEffect(e);
            }
            function e1() {
                let { isDataRoute: e } = a.useContext(eV);
                return e
                    ? (function () {
                          let { router: e } = tt("useNavigate"),
                              t = tn("useNavigate"),
                              r = a.useRef(!1);
                          return (
                              e0(() => {
                                  r.current = !0;
                              }),
                              a.useCallback(
                                  async (n, a = {}) => {
                                      (d(r.current, eZ),
                                          r.current &&
                                              ("number" == typeof n
                                                  ? e.navigate(n)
                                                  : await e.navigate(n, {
                                                        fromRouteId: t,
                                                        ...a,
                                                    })));
                                  },
                                  [e, t]
                              )
                          );
                      })()
                    : (function () {
                          c(
                              eG(),
                              "useNavigate() may be used only in the context of a <Router> component."
                          );
                          let e = a.useContext(eU),
                              { basename: t, navigator: r } = a.useContext(eq),
                              { matches: n } = a.useContext(eV),
                              { pathname: o } = eX(),
                              i = JSON.stringify(_(n)),
                              s = a.useRef(!1);
                          return (
                              e0(() => {
                                  s.current = !0;
                              }),
                              a.useCallback(
                                  (n, a = {}) => {
                                      if ((d(s.current, eZ), !s.current))
                                          return;
                                      if ("number" == typeof n)
                                          return void r.go(n);
                                      let l = D(
                                          n,
                                          JSON.parse(i),
                                          o,
                                          "path" === a.relative
                                      );
                                      (null == e &&
                                          "/" !== t &&
                                          (l.pathname =
                                              "/" === l.pathname
                                                  ? t
                                                  : O([t, l.pathname])),
                                          (a.replace ? r.replace : r.push)(
                                              l,
                                              a.state,
                                              a
                                          ));
                                  },
                                  [t, r, i, o, e]
                              )
                          );
                      })();
            }
            var e2 = a.createContext(null);
            function e4() {
                let { matches: e } = a.useContext(eV),
                    t = e[e.length - 1];
                return t ? t.params : {};
            }
            function e3(e, { relative: t } = {}) {
                let { matches: r } = a.useContext(eV),
                    { pathname: n } = eX(),
                    o = JSON.stringify(_(r));
                return a.useMemo(
                    () => D(e, JSON.parse(o), n, "path" === t),
                    [e, o, n, t]
                );
            }
            function e5(e, t) {
                return e8(e, t);
            }
            function e8(e, t, r, n) {
                let o;
                c(
                    eG(),
                    "useRoutes() may be used only in the context of a <Router> component."
                );
                let { navigator: i } = a.useContext(eq),
                    { matches: s } = a.useContext(eV),
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
                        (o = e));
                } else o = y;
                let g = o.pathname || "/",
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
                    `No routes matched location "${o.pathname}${o.search}${o.hash}" `
                ),
                    d(
                        null == b ||
                            void 0 !== b[b.length - 1].route.element ||
                            void 0 !== b[b.length - 1].route.Component ||
                            void 0 !== b[b.length - 1].route.lazy,
                        `Matched leaf route at location "${o.pathname}${o.search}${o.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
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
                    let o = e,
                        i = r?.errors;
                    if (null != i) {
                        let e = o.findIndex(
                            (e) => e.route.id && i?.[e.route.id] !== void 0
                        );
                        (c(
                            e >= 0,
                            `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`
                        ),
                            (o = o.slice(0, Math.min(o.length, e + 1))));
                    }
                    let s = !1,
                        l = -1;
                    if (r)
                        for (let e = 0; e < o.length; e++) {
                            let t = o[e];
                            if (
                                ((t.route.HydrateFallback ||
                                    t.route.hydrateFallbackElement) &&
                                    (l = e),
                                t.route.id)
                            ) {
                                let { loaderData: e, errors: n } = r,
                                    a =
                                        t.route.loader &&
                                        !e.hasOwnProperty(t.route.id) &&
                                        (!n || void 0 === n[t.route.id]);
                                if (t.route.lazy || a) {
                                    ((s = !0),
                                        (o =
                                            l >= 0
                                                ? o.slice(0, l + 1)
                                                : [o[0]]));
                                    break;
                                }
                            }
                        }
                    return o.reduceRight((e, n, u) => {
                        let c,
                            d = !1,
                            h = null,
                            p = null;
                        r &&
                            ((c = i && n.route.id ? i[n.route.id] : void 0),
                            (h = n.route.errorElement || e7),
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
                        let f = t.concat(o.slice(0, u + 1)),
                            m = () => {
                                let t;
                                return (
                                    (t = c
                                        ? h
                                        : d
                                          ? p
                                          : n.route.Component
                                            ? a.createElement(
                                                  n.route.Component,
                                                  null
                                              )
                                            : n.route.element
                                              ? n.route.element
                                              : e),
                                    a.createElement(e9, {
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
                            ? a.createElement(e6, {
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
                                pathname: O([
                                    p,
                                    i.encodeLocation
                                        ? i.encodeLocation(e.pathname).pathname
                                        : e.pathname,
                                ]),
                                pathnameBase:
                                    "/" === e.pathnameBase
                                        ? p
                                        : O([
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
                    ? a.createElement(
                          eY.Provider,
                          {
                              value: {
                                  location: {
                                      pathname: "/",
                                      search: "",
                                      hash: "",
                                      state: null,
                                      key: "default",
                                      ...o,
                                  },
                                  navigationType: "POP",
                              },
                          },
                          w
                      )
                    : w;
            }
            var e7 = a.createElement(function () {
                    let e = tl(),
                        t = W(e)
                            ? `${e.status} ${e.statusText}`
                            : e instanceof Error
                              ? e.message
                              : JSON.stringify(e),
                        r = e instanceof Error ? e.stack : null,
                        n = "rgba(200,200,200, 0.5)",
                        o = { padding: "2px 4px", backgroundColor: n },
                        i = null;
                    return (
                        console.error(
                            "Error handled by React Router default ErrorBoundary:",
                            e
                        ),
                        (i = a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(
                                "p",
                                null,
                                "\u{1F4BF} Hey developer \u{1F44B}"
                            ),
                            a.createElement(
                                "p",
                                null,
                                "You can provide a way better UX than this when your app throws errors by providing your own ",
                                a.createElement(
                                    "code",
                                    { style: o },
                                    "ErrorBoundary"
                                ),
                                " or",
                                " ",
                                a.createElement(
                                    "code",
                                    { style: o },
                                    "errorElement"
                                ),
                                " prop on your route."
                            )
                        )),
                        a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(
                                "h2",
                                null,
                                "Unexpected Application Error!"
                            ),
                            a.createElement(
                                "h3",
                                { style: { fontStyle: "italic" } },
                                t
                            ),
                            r
                                ? a.createElement(
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
                e6 = class extends a.Component {
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
                            ? a.createElement(
                                  eV.Provider,
                                  { value: this.props.routeContext },
                                  a.createElement(eJ.Provider, {
                                      value: this.state.error,
                                      children: this.props.component,
                                  })
                              )
                            : this.props.children;
                    }
                };
            function e9({ routeContext: e, match: t, children: r }) {
                let n = a.useContext(eU);
                return (
                    n &&
                        n.static &&
                        n.staticContext &&
                        (t.route.errorElement || t.route.ErrorBoundary) &&
                        (n.staticContext._deepestRenderedBoundaryId =
                            t.route.id),
                    a.createElement(eV.Provider, { value: e }, r)
                );
            }
            function te(e) {
                return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
            }
            function tt(e) {
                let t = a.useContext(eU);
                return (c(t, te(e)), t);
            }
            function tr(e) {
                let t = a.useContext(eB);
                return (c(t, te(e)), t);
            }
            function tn(e) {
                let t,
                    r = (c((t = a.useContext(eV)), te(e)), t),
                    n = r.matches[r.matches.length - 1];
                return (
                    c(
                        n.route.id,
                        `${e} can only be used on routes that contain a unique "id"`
                    ),
                    n.route.id
                );
            }
            function ta() {
                return tr("useNavigation").navigation;
            }
            function to() {
                let { matches: e, loaderData: t } = tr("useMatches");
                return a.useMemo(() => e.map((e) => E(e, t)), [e, t]);
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
                let e = a.useContext(eJ),
                    t = tr("useRouteError"),
                    r = tn("useRouteError");
                return void 0 !== e ? e : t.errors?.[r];
            }
            var tu = 0;
            function tc(e) {
                let { router: t, basename: r } = tt("useBlocker"),
                    n = tr("useBlocker"),
                    [o, i] = a.useState(""),
                    s = a.useCallback(
                        (t) => {
                            if ("function" != typeof e) return !!e;
                            if ("/" === r) return e(t);
                            let {
                                currentLocation: n,
                                nextLocation: a,
                                historyAction: o,
                            } = t;
                            return e({
                                currentLocation: {
                                    ...n,
                                    pathname: T(n.pathname, r) || n.pathname,
                                },
                                nextLocation: {
                                    ...a,
                                    pathname: T(a.pathname, r) || a.pathname,
                                },
                                historyAction: o,
                            });
                        },
                        [r, e]
                    );
                return (
                    a.useEffect(() => {
                        let e = String(++tu);
                        return (i(e), () => t.deleteBlocker(e));
                    }, [t]),
                    a.useEffect(() => {
                        "" !== o && t.getBlocker(o, s);
                    }, [t, o, s]),
                    o && n.blockers.has(o) ? n.blockers.get(o) : J
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
                            element: a.createElement(e.Component),
                            Component: void 0,
                        })),
                    e.HydrateFallback &&
                        (e.hydrateFallbackElement &&
                            d(
                                !1,
                                "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
                            ),
                        Object.assign(t, {
                            hydrateFallbackElement: a.createElement(
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
                            errorElement: a.createElement(e.ErrorBoundary),
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
                let [r, n] = a.useState(e.state),
                    [o, i] = a.useState(),
                    [s, l] = a.useState({ isTransitioning: !1 }),
                    [u, c] = a.useState(),
                    [d, h] = a.useState(),
                    [p, f] = a.useState(),
                    m = a.useRef(new Map()),
                    y = a.useCallback(
                        (
                            r,
                            {
                                deletedFetchers: o,
                                flushSync: s,
                                viewTransitionOpts: p,
                            }
                        ) => {
                            (r.fetchers.forEach((e, t) => {
                                void 0 !== e.data && m.current.set(t, e.data);
                            }),
                                o.forEach((e) => m.current.delete(e)),
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
                                    : a.startTransition(() => n(r)));
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
                                let a = e.window.document.startViewTransition(
                                    () => {
                                        t(() => n(r));
                                    }
                                );
                                (a.finished.finally(() => {
                                    t(() => {
                                        (c(void 0),
                                            h(void 0),
                                            i(void 0),
                                            l({ isTransitioning: !1 }));
                                    });
                                }),
                                    t(() => h(a)));
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
                (a.useLayoutEffect(() => e.subscribe(y), [e, y]),
                    a.useEffect(() => {
                        s.isTransitioning && !s.flushSync && c(new tg());
                    }, [s]),
                    a.useEffect(() => {
                        if (u && o && e.window) {
                            let t = u.promise,
                                r = e.window.document.startViewTransition(
                                    async () => {
                                        (a.startTransition(() => n(o)),
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
                    }, [o, u, e.window]),
                    a.useEffect(() => {
                        u &&
                            o &&
                            r.location.key === o.location.key &&
                            u.resolve();
                    }, [u, d, r.location, o]),
                    a.useEffect(() => {
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
                let g = a.useMemo(
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
                    b = a.useMemo(
                        () => ({
                            router: e,
                            navigator: g,
                            static: !1,
                            basename: v,
                        }),
                        [e, g, v]
                    );
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                        eU.Provider,
                        { value: b },
                        a.createElement(
                            eB.Provider,
                            { value: r },
                            a.createElement(
                                eH.Provider,
                                { value: m.current },
                                a.createElement(
                                    eF.Provider,
                                    { value: s },
                                    a.createElement(
                                        tE,
                                        {
                                            basename: v,
                                            location: r.location,
                                            navigationType: r.historyAction,
                                            navigator: g,
                                        },
                                        a.createElement(tb, {
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
            var tb = a.memo(function ({ routes: e, future: t, state: r }) {
                return e8(e, void 0, r, t);
            });
            function tw({ to: e, replace: t, state: r, relative: n }) {
                c(
                    eG(),
                    "<Navigate> may be used only in the context of a <Router> component."
                );
                let { static: o } = a.useContext(eq);
                d(
                    !o,
                    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
                );
                let { matches: i } = a.useContext(eV),
                    { pathname: s } = eX(),
                    l = e1(),
                    u = JSON.stringify(D(e, _(i), s, "path" === n));
                return (
                    a.useEffect(() => {
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
                    (r = a.useContext(eV).outlet)
                        ? a.createElement(e2.Provider, { value: t }, r)
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
                navigator: o,
                static: i = !1,
            }) {
                c(
                    !eG(),
                    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
                );
                let s = e.replace(/^\/*/, "/"),
                    l = a.useMemo(
                        () => ({
                            basename: s,
                            navigator: o,
                            static: i,
                            future: {},
                        }),
                        [s, o, i]
                    );
                "string" == typeof r && (r = m(r));
                let {
                        pathname: u = "/",
                        search: h = "",
                        hash: p = "",
                        state: f = null,
                        key: y = "default",
                    } = r,
                    g = a.useMemo(() => {
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
                    : a.createElement(
                          eq.Provider,
                          { value: l },
                          a.createElement(eY.Provider, {
                              children: t,
                              value: g,
                          })
                      );
            }
            function tx({ children: e, location: t }) {
                return e8(
                    (function e(t, r = []) {
                        let n = [];
                        return (
                            a.Children.forEach(t, (t, o) => {
                                if (!a.isValidElement(t)) return;
                                let i = [...r, o];
                                if (t.type === a.Fragment)
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
            a.Component;
            var tC = "get",
                tk = "application/x-www-form-urlencoded";
            function tN(e) {
                return null != e && "string" == typeof e.tagName;
            }
            function tP(e = "") {
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
                tj = new Set([
                    "application/x-www-form-urlencoded",
                    "multipart/form-data",
                    "text/plain",
                ]);
            function tL(e) {
                return null == e || tj.has(e)
                    ? e
                    : (d(
                          !1,
                          `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tk}"`
                      ),
                      null);
            }
            function tA(e, t) {
                if (!1 === e || null == e) throw Error(t);
            }
            async function t_(e, t) {
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
            function tD(e) {
                return (
                    null != e &&
                    (null == e.href
                        ? "preload" === e.rel &&
                          "string" == typeof e.imageSrcSet &&
                          "string" == typeof e.imageSizes
                        : "string" == typeof e.rel && "string" == typeof e.href)
                );
            }
            async function tO(e, t, r) {
                var n, a;
                let o, i;
                return (
                    (n = (
                        await Promise.all(
                            e.map(async (e) => {
                                let n = t.routes[e.route.id];
                                if (n) {
                                    let e = await t_(n, r);
                                    return e.links ? e.links() : [];
                                }
                                return [];
                            })
                        )
                    )
                        .flat(1)
                        .filter(tD)
                        .filter(
                            (e) => "stylesheet" === e.rel || "preload" === e.rel
                        )
                        .map((e) =>
                            "stylesheet" === e.rel
                                ? { ...e, rel: "prefetch", as: "style" }
                                : { ...e, rel: "prefetch" }
                        )),
                    (o = new Set()),
                    (i = new Set(void 0)),
                    n.reduce((e, t) => {
                        if (
                            a &&
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
                            o.has(r) || (o.add(r), e.push({ key: r, link: t })),
                            e
                        );
                    }, [])
                );
            }
            function tI(e, t, r, n, a, o) {
                let i = (e, t) => !r[t] || e.route.id !== r[t].route.id,
                    s = (e, t) =>
                        r[t].pathname !== e.pathname ||
                        (r[t].route.path?.endsWith("*") &&
                            r[t].params["*"] !== e.params["*"]);
                return "assets" === o
                    ? t.filter((e, t) => i(e, t) || s(e, t))
                    : "data" === o
                      ? t.filter((t, o) => {
                            let l = n.routes[t.route.id];
                            if (!l || !l.hasLoader) return !1;
                            if (i(t, o) || s(t, o)) return !0;
                            if (t.route.shouldRevalidate) {
                                let n = t.route.shouldRevalidate({
                                    currentUrl: new URL(
                                        a.pathname + a.search + a.hash,
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
            function tM(e, t, { includeHydrateFallback: r } = {}) {
                return [
                    ...new Set(
                        e
                            .map((e) => {
                                let n = t.routes[e.route.id];
                                if (!n) return [];
                                let a = [n.module];
                                return (
                                    n.clientActionModule &&
                                        (a = a.concat(n.clientActionModule)),
                                    n.clientLoaderModule &&
                                        (a = a.concat(n.clientLoaderModule)),
                                    r &&
                                        n.hydrateFallbackModule &&
                                        (a = a.concat(n.hydrateFallbackModule)),
                                    n.imports && (a = a.concat(n.imports)),
                                    a
                                );
                            })
                            .flat(1)
                    ),
                ];
            }
            (Object.getOwnPropertyNames(Object.prototype).sort().join("\0"),
                "undefined" != typeof window && window,
                Symbol("SingleFetchRedirect"));
            var t$ = new Set([100, 101, 204, 205]);
            function tz() {
                let e = a.useContext(eU);
                return (
                    tA(
                        e,
                        "You must render this element inside a <DataRouterContext.Provider> element"
                    ),
                    e
                );
            }
            function tW() {
                let e = a.useContext(eB);
                return (
                    tA(
                        e,
                        "You must render this element inside a <DataRouterStateContext.Provider> element"
                    ),
                    e
                );
            }
            a.Component;
            var tU = a.createContext(void 0);
            function tB() {
                let e = a.useContext(tU);
                return (
                    tA(
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
                let { router: r } = tz(),
                    n = a.useMemo(
                        () => S(r.routes, e, r.basename),
                        [r.routes, e, r.basename]
                    );
                return n
                    ? a.createElement(tq, { page: e, matches: n, ...t })
                    : null;
            }
            function tq({ page: e, matches: t, ...r }) {
                let n = eX(),
                    { manifest: o, routeModules: i } = tB(),
                    { basename: s } = tz(),
                    { loaderData: l, matches: u } = tW(),
                    c = a.useMemo(
                        () => tI(e, t, u, o, n, "data"),
                        [e, t, u, o, n]
                    ),
                    d = a.useMemo(
                        () => tI(e, t, u, o, n, "assets"),
                        [e, t, u, o, n]
                    ),
                    h = a.useMemo(() => {
                        let r;
                        if (e === n.pathname + n.search + n.hash) return [];
                        let a = new Set(),
                            u = !1;
                        if (
                            (t.forEach((e) => {
                                let t = o.routes[e.route.id];
                                t &&
                                    t.hasLoader &&
                                    ((!c.some(
                                        (t) => t.route.id === e.route.id
                                    ) &&
                                        e.route.id in l &&
                                        i[e.route.id]?.shouldRevalidate) ||
                                    t.hasClientLoader
                                        ? (u = !0)
                                        : a.add(e.route.id));
                            }),
                            0 === a.size)
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
                                a.size > 0 &&
                                d.searchParams.set(
                                    "_routes",
                                    t
                                        .filter((e) => a.has(e.route.id))
                                        .map((e) => e.route.id)
                                        .join(",")
                                ),
                            [d.pathname + d.search]
                        );
                    }, [s, l, n, o, c, t, e, i]),
                    p = a.useMemo(() => tM(d, o), [d, o]),
                    f = (function (e) {
                        let { manifest: t, routeModules: r } = tB(),
                            [n, o] = a.useState([]);
                        return (
                            a.useEffect(() => {
                                let n = !1;
                                return (
                                    tO(e, t, r).then((e) => {
                                        n || o(e);
                                    }),
                                    () => {
                                        n = !0;
                                    }
                                );
                            }, [e, t, r]),
                            n
                        );
                    })(d);
                return a.createElement(
                    a.Fragment,
                    null,
                    h.map((e) =>
                        a.createElement("link", {
                            key: e,
                            rel: "prefetch",
                            as: "fetch",
                            href: e,
                            ...r,
                        })
                    ),
                    p.map((e) =>
                        a.createElement("link", {
                            key: e,
                            rel: "modulepreload",
                            href: e,
                            ...r,
                        })
                    ),
                    f.map(({ key: e, link: t }) =>
                        a.createElement("link", { key: e, ...t })
                    )
                );
            }
            tU.displayName = "FrameworkContext";
            var tY =
                "undefined" != typeof window &&
                void 0 !== window.document &&
                void 0 !== window.document.createElement;
            try {
                tY && (window.__reactRouterVersion = "7.6.3");
            } catch (e) {}
            function tV(e, t) {
                let r;
                return (function (e) {
                    let t,
                        r,
                        n,
                        a,
                        o,
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
                        k = null,
                        N = null,
                        P = null,
                        j = null != e.hydrationData,
                        L = S(f, e.history.location, m),
                        A = !1,
                        _ = null;
                    if (null != L || e.patchRoutesOnNavigation)
                        if (
                            (L &&
                                !e.hydrationData &&
                                e6(L, f, e.history.location.pathname).active &&
                                (L = null),
                            L)
                        )
                            if (L.some((e) => e.route.lazy)) r = !1;
                            else if (L.some((e) => e.route.loader)) {
                                let t = e.hydrationData
                                        ? e.hydrationData.loaderData
                                        : null,
                                    n = e.hydrationData
                                        ? e.hydrationData.errors
                                        : null;
                                if (n) {
                                    let e = L.findIndex(
                                        (e) => void 0 !== n[e.route.id]
                                    );
                                    r = L.slice(0, e + 1).every(
                                        (e) => !er(e.route, t, n)
                                    );
                                } else r = L.every((e) => !er(e.route, t, n));
                            } else r = !0;
                        else {
                            ((r = !1), (L = []));
                            let t = e6(null, f, e.history.location.pathname);
                            t.active &&
                                t.matches &&
                                ((A = !0), (L = t.matches));
                        }
                    else {
                        let t = eN(404, {
                                pathname: e.history.location.pathname,
                            }),
                            { matches: n, route: a } = ek(f);
                        ((r = !0), (L = n), (_ = { [a.id]: t }));
                    }
                    let D = {
                            historyAction: e.history.action,
                            location: e.history.location,
                            matches: L,
                            initialized: r,
                            navigation: Y,
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
                                _,
                            fetchers: new Map(),
                            blockers: new Map(),
                        },
                        O = "POP",
                        I = !1,
                        M = !1,
                        $ = new Map(),
                        z = null,
                        U = !1,
                        B = !1,
                        F = new Set(),
                        Q = new Map(),
                        en = 0,
                        eo = -1,
                        ei = new Map(),
                        es = new Set(),
                        el = new Map(),
                        ec = new Map(),
                        ed = new Set(),
                        eh = new Map(),
                        ep = null;
                    function ey(e, t = {}) {
                        D = { ...D, ...e };
                        let r = [],
                            n = [];
                        (D.fetchers.forEach((e, t) => {
                            "idle" === e.state &&
                                (ed.has(t) ? r.push(t) : n.push(t));
                        }),
                            ed.forEach((e) => {
                                D.fetchers.has(e) || Q.has(e) || r.push(e);
                            }),
                            [...C].forEach((e) =>
                                e(D, {
                                    deletedFetchers: r,
                                    viewTransitionOpts: t.viewTransitionOpts,
                                    flushSync: !0 === t.flushSync,
                                })
                            ),
                            r.forEach((e) => eK(e)),
                            n.forEach((e) => D.fetchers.delete(e)));
                    }
                    function ew(r, n, { flushSync: a } = {}) {
                        let o,
                            i,
                            s =
                                null != D.actionData &&
                                null != D.navigation.formMethod &&
                                eD(D.navigation.formMethod) &&
                                "loading" === D.navigation.state &&
                                r.state?._isRedirect !== !0;
                        o = n.actionData
                            ? Object.keys(n.actionData).length > 0
                                ? n.actionData
                                : null
                            : s
                              ? D.actionData
                              : null;
                        let l = n.loaderData
                                ? eE(
                                      D.loaderData,
                                      n.loaderData,
                                      n.matches || [],
                                      n.errors
                                  )
                                : D.loaderData,
                            u = D.blockers;
                        u.size > 0 &&
                            (u = new Map(u)).forEach((e, t) => u.set(t, J));
                        let c =
                            !0 === I ||
                            (null != D.navigation.formMethod &&
                                eD(D.navigation.formMethod) &&
                                r.state?._isRedirect !== !0);
                        if (
                            (t && ((f = t), (t = void 0)),
                            U ||
                                "POP" === O ||
                                ("PUSH" === O
                                    ? e.history.push(r, r.state)
                                    : "REPLACE" === O &&
                                      e.history.replace(r, r.state)),
                            "POP" === O)
                        ) {
                            let e = $.get(D.location.pathname);
                            e && e.has(r.pathname)
                                ? (i = {
                                      currentLocation: D.location,
                                      nextLocation: r,
                                  })
                                : $.has(r.pathname) &&
                                  (i = {
                                      currentLocation: r,
                                      nextLocation: D.location,
                                  });
                        } else if (M) {
                            let e = $.get(D.location.pathname);
                            (e
                                ? e.add(r.pathname)
                                : ((e = new Set([r.pathname])),
                                  $.set(D.location.pathname, e)),
                                (i = {
                                    currentLocation: D.location,
                                    nextLocation: r,
                                }));
                        }
                        (ey(
                            {
                                ...n,
                                actionData: o,
                                loaderData: l,
                                historyAction: O,
                                location: r,
                                initialized: !0,
                                navigation: Y,
                                revalidation: "idle",
                                restoreScrollPosition: e7(
                                    r,
                                    n.matches || D.matches
                                ),
                                preventScrollReset: c,
                                blockers: u,
                            },
                            { viewTransitionOpts: i, flushSync: !0 === a }
                        ),
                            (O = "POP"),
                            (I = !1),
                            (M = !1),
                            (U = !1),
                            (B = !1),
                            ep?.resolve(),
                            (ep = null));
                    }
                    async function eS(t, r) {
                        if ("number" == typeof t) return void e.history.go(t);
                        let {
                                path: n,
                                submission: a,
                                error: o,
                            } = ee(
                                !1,
                                Z(
                                    D.location,
                                    D.matches,
                                    m,
                                    t,
                                    r?.fromRouteId,
                                    r?.relative
                                ),
                                r
                            ),
                            i = D.location,
                            s = p(D.location, n, r && r.state);
                        s = { ...s, ...e.history.encodeLocation(s) };
                        let l = r && null != r.replace ? r.replace : void 0,
                            u = "PUSH";
                        !0 === l
                            ? (u = "REPLACE")
                            : !1 === l ||
                              (null != a &&
                                  eD(a.formMethod) &&
                                  a.formAction ===
                                      D.location.pathname + D.location.search &&
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
                                    let e = new Map(D.blockers);
                                    (e.set(h, J), ey({ blockers: e }));
                                },
                            });
                        await eT(u, s, {
                            submission: a,
                            pendingError: o,
                            preventScrollReset: c,
                            replace: r && r.replace,
                            enableViewTransition: r && r.viewTransition,
                            flushSync: d,
                        });
                    }
                    async function eT(r, n, o) {
                        var i, s, l, u;
                        let c;
                        (a && a.abort(),
                            (a = null),
                            (O = r),
                            (U =
                                !0 === (o && o.startUninterruptedRevalidation)),
                            (i = D.location),
                            (s = D.matches),
                            k && P && (k[e8(i, s)] = P()),
                            (I = !0 === (o && o.preventScrollReset)),
                            (M = !0 === (o && o.enableViewTransition)));
                        let d = t || f,
                            h = o && o.overrideNavigation,
                            p =
                                o?.initialHydration &&
                                D.matches &&
                                D.matches.length > 0 &&
                                !A
                                    ? D.matches
                                    : S(d, n, m),
                            y = !0 === (o && o.flushSync);
                        if (
                            p &&
                            D.initialized &&
                            !B &&
                            ((l = D.location),
                            (u = n),
                            l.pathname === u.pathname &&
                                l.search === u.search &&
                                ("" === l.hash
                                    ? "" !== u.hash
                                    : l.hash === u.hash ||
                                      "" !== u.hash ||
                                      !1)) &&
                            !(o && o.submission && eD(o.submission.formMethod))
                        )
                            return void ew(n, { matches: p }, { flushSync: y });
                        let v = e6(p, d, n.pathname);
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
                        a = new AbortController();
                        let b = eb(e.history, n, a.signal, o && o.submission),
                            w = new g(
                                e.unstable_getContext
                                    ? await e.unstable_getContext()
                                    : void 0
                            );
                        if (o && o.pendingError)
                            c = [
                                eC(p).route.id,
                                { type: "error", error: o.pendingError },
                            ];
                        else if (
                            o &&
                            o.submission &&
                            eD(o.submission.formMethod)
                        ) {
                            let t = await eA(
                                b,
                                n,
                                o.submission,
                                p,
                                w,
                                v.active,
                                o && !0 === o.initialHydration,
                                { replace: o.replace, flushSync: y }
                            );
                            if (t.shortCircuited) return;
                            if (t.pendingActionResult) {
                                let [e, r] = t.pendingActionResult;
                                if (
                                    ej(r) &&
                                    W(r.error) &&
                                    404 === r.error.status
                                ) {
                                    ((a = null),
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
                                (h = e$(n, o.submission)),
                                (y = !1),
                                (v.active = !1),
                                (b = eb(e.history, b.url, b.signal)));
                        }
                        let {
                            shortCircuited: R,
                            matches: E,
                            loaderData: x,
                            errors: C,
                        } = await eO(
                            b,
                            n,
                            p,
                            w,
                            v.active,
                            h,
                            o && o.submission,
                            o && o.fetcherSubmission,
                            o && o.replace,
                            o && !0 === o.initialHydration,
                            y,
                            c
                        );
                        R ||
                            ((a = null),
                            ew(n, {
                                matches: E || p,
                                ...ex(c),
                                loaderData: x,
                                errors: C,
                            }));
                    }
                    async function eA(e, t, r, n, a, o, i, s = {}) {
                        var c;
                        let d;
                        if (
                            (eV(),
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
                            o)
                        ) {
                            let r = await e9(n, t.pathname, e.signal);
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
                        let p = eI(n, t);
                        if (p.route.action || p.route.lazy) {
                            let t = ef(u, h, e, n, p, i ? [] : l, a),
                                r = await eq(e, t, a, null);
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
                                error: eN(405, {
                                    method: e.method,
                                    pathname: t.pathname,
                                    routeId: p.route.id,
                                }),
                            };
                        if (eL(d)) {
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
                                          D.location.pathname +
                                              D.location.search),
                                await eH(e, d, !0, {
                                    submission: r,
                                    replace: t,
                                }),
                                { shortCircuited: !0 }
                            );
                        }
                        if (ej(d)) {
                            let e = eC(n, p.route.id);
                            return (
                                !0 !== (s && s.replace) && (O = "PUSH"),
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
                    async function eO(r, n, o, i, s, c, d, p, y, g, v, b) {
                        let w = c || e$(n, d),
                            S = d || p || eM(w),
                            R = !U && !g;
                        if (s) {
                            if (R) {
                                let e = eU(b);
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
                            let e = await e9(o, n.pathname, r.signal);
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
                            if (e.matches) o = e.matches;
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
                                D,
                                o,
                                S,
                                n,
                                g ? [] : l,
                                !0 === g,
                                B,
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
                            ((eo = ++en),
                            !e.dataStrategy &&
                                !x.some((e) => e.shouldLoad) &&
                                0 === C.length)
                        ) {
                            let e = e0();
                            return (
                                ew(
                                    n,
                                    {
                                        matches: o,
                                        loaderData: {},
                                        errors:
                                            b && ej(b[1])
                                                ? { [b[0]]: b[1].error }
                                                : null,
                                        ...ex(b),
                                        ...(e
                                            ? { fetchers: new Map(D.fetchers) }
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
                                let t = eU(b);
                                void 0 !== t && (e.actionData = t);
                            }
                            (C.length > 0 &&
                                (C.forEach((e) => {
                                    let t = D.fetchers.get(e.key),
                                        r = ez(void 0, t ? t.data : void 0);
                                    D.fetchers.set(e.key, r);
                                }),
                                (e.fetchers = new Map(D.fetchers))),
                                ey(e, { flushSync: v }));
                        }
                        C.forEach((e) => {
                            (eQ(e.key),
                                e.controller && Q.set(e.key, e.controller));
                        });
                        let k = () => C.forEach((e) => eQ(e.key));
                        a && a.signal.addEventListener("abort", k);
                        let { loaderResults: N, fetcherResults: P } = await eY(
                            x,
                            C,
                            r,
                            i
                        );
                        if (r.signal.aborted) return { shortCircuited: !0 };
                        (a && a.signal.removeEventListener("abort", k),
                            C.forEach((e) => Q.delete(e.key)));
                        let T = eP(N);
                        if (T)
                            return (
                                await eH(r, T.result, !0, { replace: y }),
                                { shortCircuited: !0 }
                            );
                        if ((T = eP(P)))
                            return (
                                es.add(T.key),
                                await eH(r, T.result, !0, { replace: y }),
                                { shortCircuited: !0 }
                            );
                        let { loaderData: j, errors: L } = eR(D, o, N, b, C, P);
                        g && D.errors && (L = { ...D.errors, ...L });
                        let A = e0(),
                            _ = e1(eo);
                        return {
                            matches: o,
                            loaderData: j,
                            errors: L,
                            ...(A || _ || C.length > 0
                                ? { fetchers: new Map(D.fetchers) }
                                : {}),
                        };
                    }
                    function eU(e) {
                        if (e && !ej(e[1])) return { [e[0]]: e[1].data };
                        if (D.actionData)
                            if (0 === Object.keys(D.actionData).length)
                                return null;
                            else return D.actionData;
                    }
                    async function eB(r, n, o, i, s, d, p, y, g, v) {
                        var b, w;
                        function R(e) {
                            if (!e.route.action && !e.route.lazy) {
                                let e = eN(405, {
                                    method: v.formMethod,
                                    pathname: o,
                                    routeId: n,
                                });
                                return (eG(r, n, e, { flushSync: y }), !0);
                            }
                            return !1;
                        }
                        if ((eV(), el.delete(r), !p && R(i))) return;
                        let E = D.fetchers.get(r);
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
                            C = eb(e.history, o, x.signal, v);
                        if (p) {
                            let e = await e9(s, o, C.signal, r);
                            if ("aborted" === e.type) return;
                            if ("error" === e.type)
                                return void eG(r, n, e.error, { flushSync: y });
                            if (!e.matches)
                                return void eG(r, n, eN(404, { pathname: o }), {
                                    flushSync: y,
                                });
                            if (R((i = eI((s = e.matches), o)))) return;
                        }
                        Q.set(r, x);
                        let k = en,
                            N = ef(u, h, C, s, i, l, d),
                            P = (await eq(C, N, d, r))[i.route.id];
                        if (C.signal.aborted) {
                            Q.get(r) === x && Q.delete(r);
                            return;
                        }
                        if (ed.has(r)) {
                            if (eL(P) || ej(P)) return void eJ(r, eW(void 0));
                        } else {
                            if (eL(P))
                                return (Q.delete(r), eo > k)
                                    ? void eJ(r, eW(void 0))
                                    : (es.add(r),
                                      eJ(r, ez(v)),
                                      eH(C, P, !1, {
                                          fetcherSubmission: v,
                                          preventScrollReset: g,
                                      }));
                            if (ej(P)) return void eG(r, n, P.error);
                        }
                        let T = D.navigation.location || D.location,
                            j = eb(e.history, T, x.signal),
                            L = t || f,
                            A =
                                "idle" !== D.navigation.state
                                    ? S(L, D.navigation.location, m)
                                    : D.matches;
                        c(A, "Didn't find any matches after fetcher action");
                        let _ = ++en;
                        ei.set(r, _);
                        let I = ez(v, P.data);
                        D.fetchers.set(r, I);
                        let { dsMatches: M, revalidatingFetchers: $ } = et(
                            j,
                            d,
                            u,
                            h,
                            e.history,
                            D,
                            A,
                            v,
                            T,
                            l,
                            !1,
                            B,
                            F,
                            ed,
                            el,
                            es,
                            L,
                            m,
                            null != e.patchRoutesOnNavigation,
                            [i.route.id, P]
                        );
                        ($.filter((e) => e.key !== r).forEach((e) => {
                            let t = e.key,
                                r = D.fetchers.get(t),
                                n = ez(void 0, r ? r.data : void 0);
                            (D.fetchers.set(t, n),
                                eQ(t),
                                e.controller && Q.set(t, e.controller));
                        }),
                            ey({ fetchers: new Map(D.fetchers) }));
                        let z = () => $.forEach((e) => eQ(e.key));
                        x.signal.addEventListener("abort", z);
                        let { loaderResults: W, fetcherResults: U } = await eY(
                            M,
                            $,
                            j,
                            d
                        );
                        if (x.signal.aborted) return;
                        if (
                            (x.signal.removeEventListener("abort", z),
                            ei.delete(r),
                            Q.delete(r),
                            $.forEach((e) => Q.delete(e.key)),
                            D.fetchers.has(r))
                        ) {
                            let e = eW(P.data);
                            D.fetchers.set(r, e);
                        }
                        let H = eP(W);
                        if (H)
                            return eH(j, H.result, !1, {
                                preventScrollReset: g,
                            });
                        if ((H = eP(U)))
                            return (
                                es.add(H.key),
                                eH(j, H.result, !1, { preventScrollReset: g })
                            );
                        let { loaderData: q, errors: Y } = eR(
                            D,
                            A,
                            W,
                            void 0,
                            $,
                            U
                        );
                        (e1(_),
                            "loading" === D.navigation.state && _ > eo
                                ? (c(O, "Expected pending action"),
                                  a && a.abort(),
                                  ew(D.navigation.location, {
                                      matches: A,
                                      loaderData: q,
                                      errors: Y,
                                      fetchers: new Map(D.fetchers),
                                  }))
                                : (ey({
                                      errors: Y,
                                      loaderData: eE(D.loaderData, q, A, Y),
                                      fetchers: new Map(D.fetchers),
                                  }),
                                  (B = !1)));
                    }
                    async function eF(t, r, n, a, o, i, s, c, d, p) {
                        let f = D.fetchers.get(t);
                        eJ(t, ez(p, f ? f.data : void 0), { flushSync: c });
                        let m = new AbortController(),
                            y = eb(e.history, n, m.signal);
                        if (s) {
                            let e = await e9(o, n, y.signal, t);
                            if ("aborted" === e.type) return;
                            if ("error" === e.type)
                                return void eG(t, r, e.error, { flushSync: c });
                            if (!e.matches)
                                return void eG(t, r, eN(404, { pathname: n }), {
                                    flushSync: c,
                                });
                            a = eI((o = e.matches), n);
                        }
                        Q.set(t, m);
                        let g = en,
                            v = ef(u, h, y, o, a, l, i),
                            b = (await eq(y, v, i, t))[a.route.id];
                        if (
                            (Q.get(t) === m && Q.delete(t), !y.signal.aborted)
                        ) {
                            if (ed.has(t)) return void eJ(t, eW(void 0));
                            if (eL(b))
                                if (eo > g) return void eJ(t, eW(void 0));
                                else {
                                    (es.add(t),
                                        await eH(y, b, !1, {
                                            preventScrollReset: d,
                                        }));
                                    return;
                                }
                            if (ej(b)) return void eG(t, r, b.error);
                            eJ(t, eW(b.data));
                        }
                    }
                    async function eH(
                        e,
                        t,
                        r,
                        {
                            submission: n,
                            fetcherSubmission: o,
                            preventScrollReset: l,
                            replace: u,
                        } = {}
                    ) {
                        t.response.headers.has("X-Remix-Revalidate") &&
                            (B = !0);
                        let d = t.response.headers.get("Location");
                        (c(
                            d,
                            "Expected a Location header on the redirect Response"
                        ),
                            (d = ev(d, new URL(e.url), m)));
                        let h = p(D.location, d, { _isRedirect: !0 });
                        if (s) {
                            let e = !1;
                            if (
                                t.response.headers.has(
                                    "X-Remix-Reload-Document"
                                )
                            )
                                e = !0;
                            else if (G.test(d)) {
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
                        a = null;
                        let f =
                                !0 === u ||
                                t.response.headers.has("X-Remix-Replace")
                                    ? "REPLACE"
                                    : "PUSH",
                            {
                                formMethod: g,
                                formAction: v,
                                formEncType: b,
                            } = D.navigation;
                        !n && !o && g && v && b && (n = eM(D.navigation));
                        let w = n || o;
                        if (q.has(t.response.status) && w && eD(w.formMethod))
                            await eT(f, h, {
                                submission: { ...w, formAction: d },
                                preventScrollReset: l || I,
                                enableViewTransition: r ? M : void 0,
                            });
                        else {
                            let e = e$(h, n);
                            await eT(f, h, {
                                overrideNavigation: e,
                                fetcherSubmission: o,
                                preventScrollReset: l || I,
                                enableViewTransition: r ? M : void 0,
                            });
                        }
                    }
                    async function eq(e, t, r, n) {
                        let a,
                            o = {};
                        try {
                            a = await em(v, e, t, n, r, !1);
                        } catch (e) {
                            return (
                                t
                                    .filter((e) => e.shouldLoad)
                                    .forEach((t) => {
                                        o[t.route.id] = {
                                            type: "error",
                                            error: e,
                                        };
                                    }),
                                o
                            );
                        }
                        if (e.signal.aborted) return o;
                        for (let [r, n] of Object.entries(a)) {
                            var i;
                            if (e_((i = n).result) && H.has(i.result.status)) {
                                let a = n.result;
                                o[r] = {
                                    type: "redirect",
                                    response: (function (e, t, r, n, a) {
                                        let o = e.headers.get("Location");
                                        if (
                                            (c(
                                                o,
                                                "Redirects returned/thrown from loaders/actions must have a Location header"
                                            ),
                                            !G.test(o))
                                        ) {
                                            let i = n.slice(
                                                0,
                                                n.findIndex(
                                                    (e) => e.route.id === r
                                                ) + 1
                                            );
                                            ((o = Z(new URL(t.url), i, a, o)),
                                                e.headers.set("Location", o));
                                        }
                                        return e;
                                    })(a, e, r, t, m),
                                };
                            } else o[r] = await eg(n);
                        }
                        return o;
                    }
                    async function eY(e, t, r, n) {
                        let a = eq(r, e, n, null),
                            o = Promise.all(
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
                                                error: eN(404, {
                                                    pathname: e.path,
                                                }),
                                            },
                                        });
                                    {
                                        let t = (
                                            await eq(
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
                            loaderResults: await a,
                            fetcherResults: (await o).reduce(
                                (e, t) => Object.assign(e, t),
                                {}
                            ),
                        };
                    }
                    function eV() {
                        ((B = !0),
                            el.forEach((e, t) => {
                                (Q.has(t) && F.add(t), eQ(t));
                            }));
                    }
                    function eJ(e, t, r = {}) {
                        (D.fetchers.set(e, t),
                            ey(
                                { fetchers: new Map(D.fetchers) },
                                { flushSync: !0 === (r && r.flushSync) }
                            ));
                    }
                    function eG(e, t, r, n = {}) {
                        let a = eC(D.matches, t);
                        (eK(e),
                            ey(
                                {
                                    errors: { [a.route.id]: r },
                                    fetchers: new Map(D.fetchers),
                                },
                                { flushSync: !0 === (n && n.flushSync) }
                            ));
                    }
                    function eX(e) {
                        return (
                            ec.set(e, (ec.get(e) || 0) + 1),
                            ed.has(e) && ed.delete(e),
                            D.fetchers.get(e) || V
                        );
                    }
                    function eK(e) {
                        let t = D.fetchers.get(e);
                        (Q.has(e) &&
                            !(t && "loading" === t.state && ei.has(e)) &&
                            eQ(e),
                            el.delete(e),
                            ei.delete(e),
                            es.delete(e),
                            ed.delete(e),
                            F.delete(e),
                            D.fetchers.delete(e));
                    }
                    function eQ(e) {
                        let t = Q.get(e);
                        t && (t.abort(), Q.delete(e));
                    }
                    function eZ(e) {
                        for (let t of e) {
                            let e = eW(eX(t).data);
                            D.fetchers.set(t, e);
                        }
                    }
                    function e0() {
                        let e = [],
                            t = !1;
                        for (let r of es) {
                            let n = D.fetchers.get(r);
                            (c(n, `Expected fetcher: ${r}`),
                                "loading" === n.state &&
                                    (es.delete(r), e.push(r), (t = !0)));
                        }
                        return (eZ(e), t);
                    }
                    function e1(e) {
                        let t = [];
                        for (let [r, n] of ei)
                            if (n < e) {
                                let e = D.fetchers.get(r);
                                (c(e, `Expected fetcher: ${r}`),
                                    "loading" === e.state &&
                                        (eQ(r), ei.delete(r), t.push(r)));
                            }
                        return (eZ(t), t.length > 0);
                    }
                    function e2(e) {
                        (D.blockers.delete(e), eh.delete(e));
                    }
                    function e4(e, t) {
                        let r = D.blockers.get(e) || J;
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
                        let n = new Map(D.blockers);
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
                            [a, o] = n[n.length - 1],
                            i = D.blockers.get(a);
                        if (
                            (!i || "proceeding" !== i.state) &&
                            o({
                                currentLocation: e,
                                nextLocation: t,
                                historyAction: r,
                            })
                        )
                            return a;
                    }
                    function e5(e) {
                        let r = eN(404, { pathname: e }),
                            { matches: n, route: a } = ek(t || f);
                        return { notFoundMatches: n, route: a, error: r };
                    }
                    function e8(e, t) {
                        return (
                            (N &&
                                N(
                                    e,
                                    t.map((e) => E(e, D.loaderData))
                                )) ||
                            e.key
                        );
                    }
                    function e7(e, t) {
                        if (k) {
                            let r = k[e8(e, t)];
                            if ("number" == typeof r) return r;
                        }
                        return null;
                    }
                    function e6(t, r, n) {
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
                    async function e9(r, n, a, o) {
                        if (!e.patchRoutesOnNavigation)
                            return { type: "success", matches: r };
                        let i = r;
                        for (;;) {
                            let r = null == t,
                                s = t || f,
                                l = h;
                            try {
                                await e.patchRoutesOnNavigation({
                                    signal: a,
                                    path: n,
                                    matches: i,
                                    fetcherKey: o,
                                    patch: (e, t) => {
                                        a.aborted || ea(e, t, s, l, u);
                                    },
                                });
                            } catch (e) {
                                return {
                                    type: "error",
                                    error: e,
                                    partialMatches: i,
                                };
                            } finally {
                                r && !a.aborted && (f = [...f]);
                            }
                            if (a.aborted) return { type: "aborted" };
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
                            return D;
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
                                        if (o) {
                                            (o(), (o = void 0));
                                            return;
                                        }
                                        d(
                                            0 === eh.size || null != n,
                                            "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
                                        );
                                        let a = e3({
                                            currentLocation: D.location,
                                            nextLocation: r,
                                            historyAction: t,
                                        });
                                        if (a && null != n) {
                                            let t = new Promise((e) => {
                                                o = e;
                                            });
                                            (e.history.go(-1 * n),
                                                e4(a, {
                                                    state: "blocked",
                                                    location: r,
                                                    proceed() {
                                                        (e4(a, {
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
                                                            D.blockers
                                                        );
                                                        (e.set(a, J),
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
                                    r = $;
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
                                    })(i, $);
                                (i.addEventListener("pagehide", e),
                                    (z = () =>
                                        i.removeEventListener("pagehide", e)));
                            }
                            return (
                                D.initialized ||
                                    eT("POP", D.location, {
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
                                ((k = e),
                                (P = t),
                                (N = r || null),
                                !j && D.navigation === Y)
                            ) {
                                j = !0;
                                let e = e7(D.location, D.matches);
                                null != e && ey({ restoreScrollPosition: e });
                            }
                            return () => {
                                ((k = null), (P = null), (N = null));
                            };
                        },
                        navigate: eS,
                        fetch: async function r(r, n, a, o) {
                            eQ(r);
                            let i = !0 === (o && o.flushSync),
                                s = t || f,
                                l = Z(
                                    D.location,
                                    D.matches,
                                    m,
                                    a,
                                    n,
                                    o?.relative
                                ),
                                u = S(s, l, m),
                                c = e6(u, s, l);
                            if ((c.active && c.matches && (u = c.matches), !u))
                                return void eG(r, n, eN(404, { pathname: l }), {
                                    flushSync: i,
                                });
                            let {
                                path: d,
                                submission: h,
                                error: p,
                            } = ee(!0, l, o);
                            if (p) return void eG(r, n, p, { flushSync: i });
                            let y = eI(u, d),
                                v = new g(
                                    e.unstable_getContext
                                        ? await e.unstable_getContext()
                                        : void 0
                                ),
                                b = !0 === (o && o.preventScrollReset);
                            if (h && eD(h.formMethod))
                                return void (await eB(
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
                                    promise: (r = new Promise((n, a) => {
                                        ((e = async (e) => {
                                            n(e);
                                            try {
                                                await r;
                                            } catch (e) {}
                                        }),
                                            (t = async (e) => {
                                                a(e);
                                                try {
                                                    await r;
                                                } catch (e) {}
                                            }));
                                    })),
                                    resolve: e,
                                    reject: t,
                                }),
                                eV(),
                                ey({ revalidation: "loading" }));
                            let n = ep.promise;
                            return (
                                "submitting" === D.navigation.state ||
                                    ("idle" === D.navigation.state
                                        ? eT(D.historyAction, D.location, {
                                              startUninterruptedRevalidation:
                                                  !0,
                                          })
                                        : eT(
                                              O || D.historyAction,
                                              D.navigation.location,
                                              {
                                                  overrideNavigation:
                                                      D.navigation,
                                                  enableViewTransition:
                                                      !0 === M,
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
                                ey({ fetchers: new Map(D.fetchers) }));
                        },
                        dispose: function () {
                            (x && x(),
                                z && z(),
                                C.clear(),
                                a && a.abort(),
                                D.fetchers.forEach((e, t) => eK(t)),
                                D.blockers.forEach((e, t) => e2(t)));
                        },
                        getBlocker: function (e, t) {
                            let r = D.blockers.get(e) || J;
                            return (eh.get(e) !== t && eh.set(e, t), r);
                        },
                        deleteBlocker: e2,
                        patchRoutes: function (e, r) {
                            let n = null == t;
                            (ea(e, r, t || f, h, u),
                                n && ((f = [...f]), ey({})));
                        },
                        _internalFetchControllers: Q,
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
                                            r[e] = new z(
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
                                                        let a = new t(
                                                            n.message
                                                        );
                                                        ((a.stack = ""),
                                                            (r[e] = a));
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
                let n = a.useRef();
                null == n.current &&
                    (n.current = u({ window: r, v5Compat: !0 }));
                let o = n.current,
                    [i, s] = a.useState({
                        action: o.action,
                        location: o.location,
                    }),
                    l = a.useCallback(
                        (e) => {
                            a.startTransition(() => s(e));
                        },
                        [s]
                    );
                return (
                    a.useLayoutEffect(() => o.listen(l), [o, l]),
                    a.createElement(tE, {
                        basename: e,
                        children: t,
                        location: i.location,
                        navigationType: i.action,
                        navigator: o,
                    })
                );
            }
            var tG = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                tX = a.forwardRef(function (
                    {
                        onClick: e,
                        discover: t = "render",
                        prefetch: r = "none",
                        relative: n,
                        reloadDocument: o,
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
                        { basename: g } = a.useContext(eq),
                        v = "string" == typeof u && tG.test(u),
                        b = !1;
                    if ("string" == typeof u && v && ((y = u), tY))
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
                                eG(),
                                "useHref() may be used only in the context of a <Router> component."
                            );
                            let { basename: r, navigator: n } =
                                    a.useContext(eq),
                                {
                                    hash: o,
                                    pathname: i,
                                    search: s,
                                } = e3(e, { relative: t }),
                                l = i;
                            return (
                                "/" !== r && (l = "/" === i ? r : O([r, i])),
                                n.createHref({
                                    pathname: l,
                                    search: s,
                                    hash: o,
                                })
                            );
                        })(u, { relative: n }),
                        [S, R, E] = (function (e, t) {
                            let r = a.useContext(tU),
                                [n, o] = a.useState(!1),
                                [i, s] = a.useState(!1),
                                {
                                    onFocus: l,
                                    onBlur: u,
                                    onMouseEnter: c,
                                    onMouseLeave: d,
                                    onTouchStart: h,
                                } = t,
                                p = a.useRef(null);
                            (a.useEffect(() => {
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
                                a.useEffect(() => {
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
                                    o(!0);
                                },
                                m = () => {
                                    (o(!1), s(!1));
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
                        C = a.createElement("a", {
                            ...f,
                            ...E,
                            href: y || w,
                            onClick:
                                b || o
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
                        ? a.createElement(
                              a.Fragment,
                              null,
                              C,
                              a.createElement(tH, { page: w })
                          )
                        : C;
                });
            tX.displayName = "Link";
            var tK = a.forwardRef(function (
                {
                    "aria-current": e = "page",
                    caseSensitive: t = !1,
                    className: r = "",
                    end: n = !1,
                    style: o,
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
                    m = a.useContext(eB),
                    { navigator: y, basename: g } = a.useContext(eq),
                    v =
                        null != m &&
                        (function (e, t = {}) {
                            let r = a.useContext(eF);
                            c(
                                null != r,
                                "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
                            );
                            let { basename: n } = t0("useViewTransitionState"),
                                o = e3(e, { relative: t.relative });
                            if (!r.isTransitioning) return !1;
                            let i =
                                    T(r.currentLocation.pathname, n) ||
                                    r.currentLocation.pathname,
                                s =
                                    T(r.nextLocation.pathname, n) ||
                                    r.nextLocation.pathname;
                            return (
                                null != N(o.pathname, s) ||
                                null != N(o.pathname, i)
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
                    k = E ? e : void 0;
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
                let P = "function" == typeof o ? o(C) : o;
                return a.createElement(
                    tX,
                    {
                        ...u,
                        "aria-current": k,
                        className: h,
                        ref: d,
                        style: P,
                        to: i,
                        viewTransition: s,
                    },
                    "function" == typeof l ? l(C) : l
                );
            });
            function tQ({ getKey: e, storageKey: t, ...r }) {
                let n = a.useContext(tU),
                    { basename: o } = a.useContext(eq),
                    i = eX(),
                    s = to();
                !(function ({ getKey: e, storageKey: t } = {}) {
                    let r,
                        { router: n } = t0("useScrollRestoration"),
                        { restoreScrollPosition: o, preventScrollReset: i } =
                            (c(
                                (r = a.useContext(eB)),
                                tZ("useScrollRestoration")
                            ),
                            r),
                        { basename: s } = a.useContext(eq),
                        l = eX(),
                        u = to(),
                        h = ta();
                    (a.useEffect(
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
                            a.useEffect(() => {
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
                            a.useCallback(() => {
                                "idle" === h.state &&
                                    (t5[t8(l, u, s, e)] = window.scrollY);
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
                            (a.useLayoutEffect(() => {
                                try {
                                    let e = sessionStorage.getItem(t || t3);
                                    e && (t5 = JSON.parse(e));
                                } catch (e) {}
                            }, [t]),
                            a.useLayoutEffect(() => {
                                let t = n?.enableScrollRestoration(
                                    t5,
                                    () => window.scrollY,
                                    e ? (t, r) => t8(t, r, s, e) : void 0
                                );
                                return () => t && t();
                            }, [n, s, e]),
                            a.useLayoutEffect(() => {
                                if (!1 !== o) {
                                    if ("number" == typeof o)
                                        return void window.scrollTo(0, o);
                                    if (l.hash) {
                                        let e = document.getElementById(
                                            decodeURIComponent(l.hash.slice(1))
                                        );
                                        if (e) return void e.scrollIntoView();
                                    }
                                    !0 !== i && window.scrollTo(0, 0);
                                }
                            }, [l, o, i])));
                })({ getKey: e, storageKey: t });
                let l = a.useMemo(() => {
                    if (!n || !e) return null;
                    let t = t8(i, s, o, e);
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
                return a.createElement("script", {
                    ...r,
                    suppressHydrationWarning: !0,
                    dangerouslySetInnerHTML: {
                        __html: `(${u})(${JSON.stringify(t || t3)}, ${JSON.stringify(l)})`,
                    },
                });
            }
            function tZ(e) {
                return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
            }
            function t0(e) {
                let t = a.useContext(eU);
                return (c(t, tZ(e)), t);
            }
            function t1(
                e,
                {
                    target: t,
                    replace: r,
                    state: n,
                    preventScrollReset: o,
                    relative: i,
                    viewTransition: s,
                } = {}
            ) {
                let l = e1(),
                    u = eX(),
                    c = e3(e, { relative: i });
                return a.useCallback(
                    (a) => {
                        0 !== a.button ||
                            (t && "_self" !== t) ||
                            a.metaKey ||
                            a.altKey ||
                            a.ctrlKey ||
                            a.shiftKey ||
                            (a.preventDefault(),
                            l(e, {
                                replace: void 0 !== r ? r : f(u) === f(c),
                                state: n,
                                preventScrollReset: o,
                                relative: i,
                                viewTransition: s,
                            }));
                    },
                    [u, l, c, r, n, t, e, o, i, s]
                );
            }
            function t2(e) {
                d(
                    "undefined" != typeof URLSearchParams,
                    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
                );
                let t = a.useRef(tP(e)),
                    r = a.useRef(!1),
                    n = eX(),
                    o = a.useMemo(() => {
                        var e, a;
                        let o;
                        return (
                            (e = n.search),
                            (a = r.current ? null : t.current),
                            (o = tP(e)),
                            a &&
                                a.forEach((e, t) => {
                                    o.has(t) ||
                                        a.getAll(t).forEach((e) => {
                                            o.append(t, e);
                                        });
                                }),
                            o
                        );
                    }, [n.search]),
                    i = e1(),
                    s = a.useCallback(
                        (e, t) => {
                            let n = tP("function" == typeof e ? e(o) : e);
                            ((r.current = !0), i("?" + n, t));
                        },
                        [i, o]
                    );
                return [o, s];
            }
            ((tK.displayName = "NavLink"),
                (a.forwardRef(
                    (
                        {
                            discover: e = "render",
                            fetcherKey: t,
                            navigate: r,
                            reloadDocument: n,
                            replace: o,
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
                                    { basename: t } = a.useContext(eq),
                                    r = tn("useRouteId");
                                return a.useCallback(
                                    async (n, a = {}) => {
                                        let {
                                            action: o,
                                            method: i,
                                            encType: s,
                                            formData: l,
                                            body: u,
                                        } = (function (e, t) {
                                            let r, n, a, o, i;
                                            if (
                                                tN(e) &&
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
                                                    (a =
                                                        tL(
                                                            e.getAttribute(
                                                                "enctype"
                                                            )
                                                        ) || tk),
                                                    (o = new FormData(e)));
                                            } else if (
                                                (tN(e) &&
                                                    "button" ===
                                                        e.tagName.toLowerCase()) ||
                                                (tN(e) &&
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
                                                    (a =
                                                        tL(
                                                            e.getAttribute(
                                                                "formenctype"
                                                            )
                                                        ) ||
                                                        tL(
                                                            i.getAttribute(
                                                                "enctype"
                                                            )
                                                        ) ||
                                                        tk),
                                                    (o = new FormData(i, e)),
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
                                                        (o.append(`${e}x`, "0"),
                                                            o.append(
                                                                `${e}y`,
                                                                "0"
                                                            ));
                                                    } else t && o.append(t, n);
                                                }
                                            } else if (tN(e))
                                                throw Error(
                                                    'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
                                                );
                                            else
                                                ((r = tC),
                                                    (n = null),
                                                    (a = tk),
                                                    (i = e));
                                            return (
                                                o &&
                                                    "text/plain" === a &&
                                                    ((i = o), (o = void 0)),
                                                {
                                                    action: n,
                                                    method: r.toLowerCase(),
                                                    encType: a,
                                                    formData: o,
                                                    body: i,
                                                }
                                            );
                                        })(n, t);
                                        if (!1 === a.navigate) {
                                            let t =
                                                a.fetcherKey ||
                                                `__${String(++t4)}__`;
                                            await e.fetch(t, r, a.action || o, {
                                                preventScrollReset:
                                                    a.preventScrollReset,
                                                formData: l,
                                                body: u,
                                                formMethod: a.method || i,
                                                formEncType: a.encType || s,
                                                flushSync: a.flushSync,
                                            });
                                        } else
                                            await e.navigate(a.action || o, {
                                                preventScrollReset:
                                                    a.preventScrollReset,
                                                formData: l,
                                                body: u,
                                                formMethod: a.method || i,
                                                formEncType: a.encType || s,
                                                replace: a.replace,
                                                state: a.state,
                                                fromRouteId: r,
                                                flushSync: a.flushSync,
                                                viewTransition:
                                                    a.viewTransition,
                                            });
                                    },
                                    [e, t, r]
                                );
                            })(),
                            v = (function (e, { relative: t } = {}) {
                                let { basename: r } = a.useContext(eq),
                                    n = a.useContext(eV);
                                c(
                                    n,
                                    "useFormAction must be used inside a RouteContext"
                                );
                                let [o] = n.matches.slice(-1),
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
                                        o.route.index &&
                                        (i.search = i.search
                                            ? i.search.replace(/^\?/, "?index&")
                                            : "?index"),
                                    "/" !== r &&
                                        (i.pathname =
                                            "/" === i.pathname
                                                ? r
                                                : O([r, i.pathname])),
                                    f(i)
                                );
                            })(l, { relative: d }),
                            b = "get" === s.toLowerCase() ? "get" : "post",
                            w = "string" == typeof l && tG.test(l);
                        return a.createElement("form", {
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
                                          a =
                                              n?.getAttribute("formmethod") ||
                                              s;
                                      g(n || e.currentTarget, {
                                          fetcherKey: t,
                                          method: a,
                                          navigate: r,
                                          replace: o,
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
                (tQ.displayName = "ScrollRestoration"));
            var t4 = 0,
                t3 = "react-router-scroll-positions",
                t5 = {};
            function t8(e, t, r, n) {
                let a = null;
                return (
                    n &&
                        (a = n(
                            "/" !== r
                                ? {
                                      ...e,
                                      pathname: T(e.pathname, r) || e.pathname,
                                  }
                                : e,
                            t
                        )),
                    null == a && (a = e.key),
                    a
                );
            }
            function t7(e, t) {
                let { capture: r } = t || {};
                a.useEffect(() => {
                    let t = null != r ? { capture: r } : void 0;
                    return (
                        window.addEventListener("beforeunload", e, t),
                        () => {
                            window.removeEventListener("beforeunload", e, t);
                        }
                    );
                }, [e, r]);
            }
            var t6 = ((e) => (
                (e.Development = "development"),
                (e.Production = "production"),
                (e.Test = "test"),
                e
            ))(t6 || {});
            [...t$];
        },
    },
]);
//# sourceMappingURL=react-core-8f382be732d8.js.map
