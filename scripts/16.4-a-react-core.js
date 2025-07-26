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
                oK: () => p,
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
                d = function e_(t) {
                    var r = {},
                        n = function (e) {
                            var n = {},
                                u = !1,
                                d = e.theme && e.theme.disableStyledSystemCache;
                            for (var p in e)
                                if (t[p]) {
                                    var m = t[p],
                                        y = e[p],
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
                                                f(r.breakpoints, m, g, y, e)
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
                                n[r] = e_((((a = {})[r] = t[r]), a));
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
                f = function (e, t, r, n, o) {
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
                p = function (e) {
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
                                t[r] = p({ property: r, scale: r });
                                return;
                            }
                            if ("function" == typeof n) {
                                t[r] = n;
                                return;
                            }
                            t[r] = p(n);
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
                        f = {},
                        p = ((c = "function" == typeof t ? t(h) : t),
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
                    for (var m in p) {
                        var y = p[m],
                            g = "function" == typeof y ? y(h) : y;
                        if ("variant" === m) {
                            var v = e(a(h, g))(h);
                            f = n({}, f, {}, v);
                            continue;
                        }
                        if (g && "object" == typeof g) {
                            f[m] = e(g)(h);
                            continue;
                        }
                        var b = a(s, m, m),
                            w = a(u, b),
                            S = a(h, w, a(h, b, {})),
                            E = a(d, b, a)(S, g, g);
                        if (l[b])
                            for (var R = l[b], x = 0; x < R.length; x++)
                                f[R[x]] = E;
                        else f[b] = E;
                    }
                    return f;
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
                Ay: () => eP,
                DU: () => ej,
                Dx: () => eR,
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
            var f = function (e, t) {
                    for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1)
                        r.push(t[n], e[n + 1]);
                    return r;
                },
                p = function (e) {
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
                E = {};
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
            var x = (function () {
                    function e_(e) {
                        ((this.groupSizes = new Uint32Array(512)),
                            (this.length = 512),
                            (this.tag = e));
                    }
                    var t = e_.prototype;
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
                                    (a <<= 1) < 0 && R(16, "" + e);
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
                        e_
                    );
                })(),
                C = new Map(),
                k = new Map(),
                N = 1,
                j = function (e) {
                    if (C.has(e)) return C.get(e);
                    for (; k.has(N); ) N++;
                    var t = N++;
                    return (C.set(e, t), k.set(t, e), t);
                },
                T = function (e, t) {
                    (t >= N && (N = t + 1), C.set(e, t), k.set(t, e));
                },
                P = "style[" + w + '][data-styled-version="5.3.11"]',
                A = RegExp(
                    "^" + w + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
                ),
                L = function (e, t, r) {
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
                            var s = i.match(A);
                            if (s) {
                                var l = 0 | parseInt(s[1], 10),
                                    u = s[2];
                                (0 !== l &&
                                    (T(u, l),
                                    L(e, u, s[3]),
                                    e.getTag().insertRules(l, n)),
                                    (n.length = 0));
                            } else n.push(i);
                        }
                    }
                },
                O = function () {
                    return r.nc;
                },
                $ = function (e) {
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
                    var i = O();
                    return (
                        i && n.setAttribute("nonce", i),
                        r.insertBefore(n, o),
                        n
                    );
                },
                D = (function () {
                    function e_(e) {
                        var t = (this.element = $(e));
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
                                R(17);
                            })(t)),
                            (this.length = 0));
                    }
                    var t = e_.prototype;
                    return (
                        (t.insertRule = function (e__, t) {
                            try {
                                return (
                                    this.sheet.insertRule(t, e__),
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
                        e_
                    );
                })(),
                I = (function () {
                    function e_(e) {
                        var t = (this.element = $(e));
                        ((this.nodes = t.childNodes), (this.length = 0));
                    }
                    var t = e_.prototype;
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
                        e_
                    );
                })(),
                M = (function () {
                    function e_(e) {
                        ((this.rules = []), (this.length = 0));
                    }
                    var t = e_.prototype;
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
                        e_
                    );
                })(),
                z = S,
                W = { isServer: !S, useCSSOMInjection: !0 },
                U = (function () {
                    function e_(e, t, r) {
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
                                        var t = document.querySelectorAll(P),
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
                    e_.registerId = function (e) {
                        return j(e);
                    };
                    var t = e_.prototype;
                    return (
                        (t.reconstructWithOptions = function (t, r) {
                            return (
                                void 0 === r && (r = !0),
                                new e_(
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
                                        t ? new M(n) : r ? new D(n) : new I(n)
                                    )))
                            );
                        }),
                        (t.hasNameForId = function (e, t) {
                            return (
                                this.names.has(e) && this.names.get(e).has(t)
                            );
                        }),
                        (t.registerName = function (e, t) {
                            if ((j(e), this.names.has(e)))
                                this.names.get(e).add(t);
                            else {
                                var r = new Set();
                                (r.add(t), this.names.set(e, r));
                            }
                        }),
                        (t.insertRules = function (e, t, r) {
                            (this.registerName(e, t),
                                this.getTag().insertRules(j(e), r));
                        }),
                        (t.clearNames = function (e) {
                            this.names.has(e) && this.names.get(e).clear();
                        }),
                        (t.clearRules = function (e) {
                            (this.getTag().clearGroup(j(e)),
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
                        e_
                    );
                })(),
                H = /(a)(d)/gi,
                B = function (e) {
                    return String.fromCharCode(e + (e > 25 ? 39 : 97));
                };
            function F(e) {
                var t,
                    r = "";
                for (t = Math.abs(e); t > 52; t = (t / 52) | 0)
                    r = B(t % 52) + r;
                return (B(t % 52) + r).replace(H, "$1-$2");
            }
            var q = function (e, t) {
                    for (var r = t.length; r; )
                        e = (33 * e) ^ t.charCodeAt(--r);
                    return e;
                },
                J = function (e) {
                    return q(5381, e);
                };
            function Y(e) {
                for (var t = 0; t < e.length; t += 1) {
                    var r = e[t];
                    if (g(r) && !b(r)) return !1;
                }
                return !0;
            }
            var V = J("5.3.11"),
                X = (function () {
                    function e_(e, t, r) {
                        ((this.rules = e),
                            (this.staticRulesId = ""),
                            (this.isStatic =
                                (void 0 === r || r.isStatic) && Y(e)),
                            (this.componentId = t),
                            (this.baseHash = q(V, t)),
                            (this.baseStyle = r),
                            U.registerId(t));
                    }
                    return (
                        (e_.prototype.generateAndInjectStyles = function (
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
                                    var o = ef(this.rules, e, t, r).join(""),
                                        i = F(q(this.baseHash, o) >>> 0);
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
                                        var f = ef(h, e, t, r),
                                            p = Array.isArray(f)
                                                ? f.join("")
                                                : f;
                                        ((u = q(u, p + d)), (c += p));
                                    }
                                }
                                if (c) {
                                    var m = F(u >>> 0);
                                    if (!t.hasNameForId(n, m)) {
                                        var y = r(c, "." + m, void 0, n);
                                        t.insertRules(n, m, y);
                                    }
                                    a.push(m);
                                }
                            }
                            return a.join(" ");
                        }),
                        e_
                    );
                })(),
                G = /^\s*\/\/.*$/gm,
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
                    f = (function (e) {
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
                    p = function (e, n, o) {
                        return (0 === n && -1 !== K.indexOf(o[r.length])) ||
                            o.match(a)
                            ? e
                            : "." + t;
                    };
                function g(e, o, i, s) {
                    void 0 === s && (s = "&");
                    var l = e.replace(G, ""),
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
                                    (a[0] = a[0].replace(n, p));
                            },
                            f,
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
                                  return (t.name || R(15), q(e, t.name));
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
                    function e_(e, t) {
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
                                return R(12, String(r.name));
                            }),
                            (this.name = e),
                            (this.id = "sc-keyframes-" + e),
                            (this.rules = t));
                    }
                    return (
                        (e_.prototype.getName = function (e) {
                            return (
                                void 0 === e && (e = er),
                                this.name + e.hash
                            );
                        }),
                        e_
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
            function ef(e, t, r, n) {
                if (Array.isArray(e)) {
                    for (var a, o = [], i = 0, s = e.length; i < s; i += 1)
                        "" !== (a = ef(e[i], t, r, n)) &&
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
                            : ef(e(t), t, r, n)
                        : e instanceof ei
                          ? r
                              ? (e.inject(r, n), e.getName(n))
                              : e
                          : p(e)
                            ? (function e_(t, r) {
                                  var n,
                                      a = [];
                                  for (var o in t)
                                      t.hasOwnProperty(o) &&
                                          !eh(t[o]) &&
                                          ((Array.isArray(t[o]) &&
                                              t[o].isCss) ||
                                          g(t[o])
                                              ? a.push(ed(o) + ":", t[o], ";")
                                              : p(t[o])
                                                ? a.push.apply(a, e_(t[o], o))
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
            var ep = function (e) {
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
                return g(e) || p(e)
                    ? ep(ef(f(m, [e].concat(r))))
                    : 0 === r.length &&
                        1 === e.length &&
                        "string" == typeof e[0]
                      ? e
                      : ep(ef(f(e, r)));
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
                return F(J(e) >>> 0);
            };
            function eS(e) {
                return "string" == typeof e;
            }
            var eE = function (e) {
                    return (
                        "function" == typeof e ||
                        ("object" == typeof e &&
                            null !== e &&
                            !Array.isArray(e))
                    );
                },
                eR = a.createContext();
            function ex(e) {
                var t = (0, a.useContext)(eR),
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
                    ? a.createElement(eR.Provider, { value: r }, e.children)
                    : null;
            }
            eR.Consumer;
            var eC = {},
                ek = function (e) {
                    return (function e_(t, r, a) {
                        if (
                            (void 0 === a && (a = y),
                            !(0, n.isValidElementType)(r))
                        )
                            return R(1, String(r));
                        var o = function () {
                            return t(r, a, em.apply(void 0, arguments));
                        };
                        return (
                            (o.withConfig = function (n) {
                                return e_(t, r, h({}, a, {}, n));
                            }),
                            (o.attrs = function (n) {
                                return e_(
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
                    })(function e_(t, r, n) {
                        var o = b(t),
                            i = !eS(t),
                            s = r.attrs,
                            l = void 0 === s ? m : s,
                            c = r.componentId,
                            f =
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
                            p = r.displayName,
                            w =
                                void 0 === p
                                    ? eS(t)
                                        ? "styled." + t
                                        : "Styled(" + v(t) + ")"
                                    : p,
                            S =
                                r.displayName && r.componentId
                                    ? eb(r.displayName) + "-" + r.componentId
                                    : r.componentId || f,
                            E =
                                o && t.attrs
                                    ? Array.prototype
                                          .concat(t.attrs, l)
                                          .filter(Boolean)
                                    : l,
                            R = r.shouldForwardProp;
                        o &&
                            t.shouldForwardProp &&
                            (R = r.shouldForwardProp
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
                            j,
                            T = new X(n, S, o ? t.componentStyle : void 0),
                            P = T.isStatic && 0 === l.length,
                            A = function (e, t) {
                                return (function (e, t, r, n) {
                                    var o,
                                        i,
                                        s,
                                        l,
                                        c,
                                        d = e.attrs,
                                        f = e.componentStyle,
                                        p = e.defaultProps,
                                        m = e.foldedComponentIds,
                                        v = e.shouldForwardProp,
                                        b = e.styledComponentId,
                                        w = e.target,
                                        S =
                                            ((o =
                                                ey(
                                                    t,
                                                    (0, a.useContext)(eR),
                                                    p
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
                                        E = S[0],
                                        R = S[1],
                                        x =
                                            ((l = en()),
                                            (c = ea()),
                                            n
                                                ? f.generateAndInjectStyles(
                                                      y,
                                                      l,
                                                      c
                                                  )
                                                : f.generateAndInjectStyles(
                                                      E,
                                                      l,
                                                      c
                                                  )),
                                        C = R.$as || t.$as || R.as || t.as || w,
                                        k = eS(C),
                                        N = R !== t ? h({}, t, {}, R) : t,
                                        j = {};
                                    for (var T in N)
                                        "$" !== T[0] &&
                                            "as" !== T &&
                                            ("forwardedAs" === T
                                                ? (j.as = N[T])
                                                : (v
                                                      ? v(T, u.A, C)
                                                      : !k || (0, u.A)(T)) &&
                                                  (j[T] = N[T]));
                                    return (
                                        t.style &&
                                            R.style !== t.style &&
                                            (j.style = h(
                                                {},
                                                t.style,
                                                {},
                                                R.style
                                            )),
                                        (j.className = Array.prototype
                                            .concat(
                                                m,
                                                b,
                                                x !== b ? x : null,
                                                t.className,
                                                R.className
                                            )
                                            .filter(Boolean)
                                            .join(" ")),
                                        (j.ref = r),
                                        (0, a.createElement)(C, j)
                                    );
                                })(j, e, t, P);
                            };
                        return (
                            (A.displayName = w),
                            ((j = a.forwardRef(A)).attrs = E),
                            (j.componentStyle = T),
                            (j.displayName = w),
                            (j.shouldForwardProp = R),
                            (j.foldedComponentIds = o
                                ? Array.prototype.concat(
                                      t.foldedComponentIds,
                                      t.styledComponentId
                                  )
                                : m),
                            (j.styledComponentId = S),
                            (j.target = o ? t.target : t),
                            (j.withComponent = function (t) {
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
                                return e_(
                                    t,
                                    h({}, o, { attrs: E, componentId: i }),
                                    n
                                );
                            }),
                            Object.defineProperty(j, "defaultProps", {
                                get: function () {
                                    return this._foldedDefaultProps;
                                },
                                set: function (e_) {
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
                                                  if (eE(i))
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
                                                                  eE(r) && eE(a)
                                                                      ? e(a, r)
                                                                      : (t[n] =
                                                                            r);
                                                              })(t, i[s], s);
                                              }
                                              return t;
                                          })({}, t.defaultProps, e_)
                                        : e_;
                                },
                            }),
                            Object.defineProperty(j, "toString", {
                                value: function () {
                                    return "." + j.styledComponentId;
                                },
                            }),
                            i &&
                                d()(j, t, {
                                    attrs: !0,
                                    componentStyle: !0,
                                    displayName: !0,
                                    foldedComponentIds: !0,
                                    shouldForwardProp: !0,
                                    styledComponentId: !0,
                                    target: !0,
                                    withComponent: !0,
                                }),
                            j
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
                function e_(e, t) {
                    ((this.rules = e),
                        (this.componentId = t),
                        (this.isStatic = Y(e)),
                        U.registerId(this.componentId + 1));
                }
                var t = e_.prototype;
                return (
                    (t.createStyles = function (e, t, r, n) {
                        var a = n(ef(this.rules, t, r, n).join(""), ""),
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
                    e_
                );
            })();
            function ej(e) {
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
                        n = (0, a.useContext)(eR),
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
                    if (s.isStatic) s.renderStyles(e, E, r, a);
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
                        var r = O();
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
                                n = O();
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
                        ? R(2)
                        : a.createElement(eo, { sheet: this.instance }, e);
                }),
                    (e.interleaveWithNodeStream = function (e) {
                        return R(3);
                    }));
            })();
            let eP = ek;
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
                return "function" == typeof i(this, c)
                    ? i(this, c).call(this, {
                          isEnabled: (e) => {
                              let t =
                                  this.embeddedData?.appPayload
                                      ?.enabled_features;
                              if (t && e in t) return t[e];
                          },
                      })
                    : i(this, c);
            }
            var f = new WeakMap();
            let DataRouterApplicationBuilder = class DataRouterApplicationBuilder {
                static create(e) {
                    return new DataRouterApplicationBuilder(e);
                }
                createDataRouterAppFromRoutes(e) {
                    return (
                        l(this, f, new DataRouterApplication(this.name, e)),
                        i(this, f)
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
                                        if (t.has(e)) throw new p(e);
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
                        s(this, f, { writable: !0, value: void 0 }),
                        u(this, "getEmbeddedData", () => {
                            if (!i(this, f))
                                throw Error(
                                    "getEmbeddedData should only be called after createDataRouterAppFromRoutes"
                                );
                            return i(this, f).embeddedData;
                        }),
                        (this.name = e));
                }
            };
            let p = class DuplicateRouteQueryNameError extends Error {
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
            function f(e, t) {
                var r = h(e, t, "get");
                return r.get ? r.get.call(e) : r.value;
            }
            function p(e, t, r) {
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
            var E = new WeakMap(),
                R = new WeakMap(),
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
                        p(this, E, { writable: !0, value: void 0 }),
                        p(this, R, { writable: !0, value: void 0 }),
                        v(this, "id", void 0),
                        v(this, "path", void 0),
                        v(this, "queries", void 0),
                        v(this, "index", void 0),
                        p(this, C, {
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
                                                ...p
                                            },
                                        ]) => {
                                            let m =
                                                    i?.({
                                                        pathname: u,
                                                        params: t,
                                                        searchParams: l,
                                                    }) ?? {},
                                                g = {
                                                    appName: f(this, E),
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
                                                    ...p,
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
                                          loader: f(this, C),
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
                                          loader: f(this, C),
                                          element: c(this.id, {
                                              element: t,
                                              Component: e,
                                          }),
                                      }
                        ),
                        m(this, E, e.appName),
                        (this.id = e.id),
                        (this.path = e.path),
                        (this.queries = e.queries),
                        (this.index = e.index),
                        m(this, R, e.getEmbeddedData));
                }
            };
            function N(e, t) {
                let r = (0, i.S)(),
                    n = f(this, R).call(this),
                    a = n?.payload,
                    o = y(this, k, j).call(this, n, e);
                o &&
                    ("mainQuery" === e
                        ? delete a?.[this.id]
                        : delete a?.[this.id]?.[e],
                    r.setQueryData(t, o));
            }
            function j(e, t) {
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
            r.d(t, { w: () => eq, o: () => eF });
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
            async function f(e) {
                return h.getRegistration(e).promise;
            }
            var p = r(78448),
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
                                ? ((e = (0, a.jsx)(E, { routes: r })),
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
                        R(o),
                        null
                    );
                }),
                E = (0, g.memo)(function (e) {
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
                        R(n),
                        null
                    );
                });
            function R(e) {
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
                E.displayName || (E.displayName = "DataRouterDevTools");
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
                j = r(64262),
                T = r(32494);
            function P(e, t, r) {
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
            function A() {
                return (P(!1, (0, l.zy)(), (0, l.wQ)()), null);
            }
            try {
                A.displayName || (A.displayName = "NavigationFocusListener");
            } catch {}
            var L = r(97665),
                _ = r(46320),
                O = r(21715),
                $ = r(11608),
                D = r(12201);
            let I = O.z.INITIAL;
            function M() {
                let e,
                    t,
                    r,
                    n,
                    a = (0, y.c)(10),
                    o = (0, j.X)(),
                    i = (0, D.yT)(),
                    s = (0, L.jE)();
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
                                  document.addEventListener(I, e),
                                  () => {
                                      document.removeEventListener(I, e);
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
                        a.type === $.g.Blocking &&
                            (r[e] = t.getQueryData(a.queryConfig.queryKey));
                }
                return r;
            }
            try {
                M.displayName || (M.displayName = "PublishPayload");
            } catch {}
            var W = r(2604),
                U = r(13233),
                H = r(96679),
                B = r(17515);
            let F = new Map(),
                q = !1,
                J = H.fV.href;
            async function Y() {
                let { session: e } = await r
                    .e(
                        "vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js"
                    )
                    .then(r.bind(r, 7332));
                (document.addEventListener("turbo:click", (e) => {
                    J = e.detail.url;
                }),
                    window.addEventListener("popstate", () => {
                        let { scrollPosition: t } =
                            e.history.getRestorationDataForIdentifier(
                                e.history.restorationIdentifier
                            ) || {};
                        t && F.set(window.location.href, t);
                    }));
            }
            async function V() {
                H.cg && (q || (await Y(), (q = !0)));
            }
            function X() {
                let e = window.location.href;
                if (e === J && e.includes("#")) return;
                J = e;
                let t = F.get(e);
                if (!t) return;
                let r = setTimeout(() => {
                    window.scrollTo(t.x, t.y);
                }, 0);
                return () => {
                    clearTimeout(r);
                };
            }
            let G = H.cg
                ? function () {
                      (0, B.N)(X);
                  }
                : U.l;
            function K() {
                let e,
                    t = (0, y.c)(1);
                return (G(), "undefined" != typeof jest)
                    ? null
                    : (t[0] === Symbol.for("react.memo_cache_sentinel")
                          ? ((e = (0, a.jsx)(l.OA, {})), (t[0] = e))
                          : (e = t[0]),
                      e);
            }
            V();
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
                                            let t = H.XC?.querySelector(
                                                "meta[name=visitor-payload]"
                                            );
                                            if (!t) return;
                                            let r = JSON.parse(atob(t.content));
                                            ((r.referrer = new URL(
                                                e,
                                                H.fV.origin
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
                    n = (0, D.yT)(),
                    a = (0, L.jE)();
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
                            i = (0, j.X)();
                        (a[0] !== i || a[1] !== o
                            ? ((e = () => {
                                  let e = new AbortController();
                                  return (
                                      document.addEventListener(
                                          O.z.INITIAL,
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
                ef = r(32420);
            let ep = (e, t) =>
                    null !== e &&
                    null !== t &&
                    e.pathname === t.pathname &&
                    e.search === t.search &&
                    !!t.hash,
                em = (e) => {
                    let t =
                        404 === e.httpStatus
                            ? "404 Page not found"
                            : 500 === e.httpStatus
                              ? "500 Internal server error"
                              : e.httpStatus
                                ? `Error ${e.httpStatus}`
                                : "Error";
                    return (0, eo.Y)(t);
                };
            function ey(e, t) {
                if (t.has(e))
                    throw TypeError(
                        "Cannot initialize the same private elements twice on an object"
                    );
            }
            function eg(e, t, r) {
                if (!t.has(e))
                    throw TypeError(
                        "attempted to " + r + " private field on non-instance"
                    );
                return t.get(e);
            }
            function ev(e, t) {
                var r = eg(e, t, "get");
                return r.get ? r.get.call(e) : r.value;
            }
            function eb(e, t, r) {
                (ey(e, t), t.set(e, r));
            }
            function ew(e, t, r) {
                if (!t.has(e))
                    throw TypeError(
                        "attempted to get private field on non-instance"
                    );
                return r;
            }
            function eS(e, t) {
                (ey(e, t), t.add(e));
            }
            function eE(e, t, r) {
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
                ex = new WeakMap(),
                eC = new WeakSet(),
                ek = new WeakMap(),
                eN = new WeakSet();
            let ej = class Navigator {
                update(e) {
                    var t;
                    this.state = Object.assign({}, this.state, e);
                    let r = this.getAppNavigationState();
                    null == (t = ew(this, eC, eT)) || t.call(this, r);
                }
                subscribe(e) {
                    let t = ev(this, ex).push(e);
                    return () => {
                        ev(this, ex)[t] = null;
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
                                ef.E.TRANSITION_WHILE_FETCHING &&
                                this.navigateWithoutPayload(e),
                            t.route.transitionType ===
                                ef.E.TRANSITION_WITHOUT_FETCH)
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
                        (t = ev(this, eR)),
                        (r = e),
                        (0, l.ue)(t, r.pathname)?.[0]
                    );
                }
                isHashNavigation(e) {
                    return ep(this.state.location, e.location);
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
                    (eS(this, eC),
                        eS(this, eN),
                        eE(this, "state", void 0),
                        eb(this, eR, { writable: !0, value: void 0 }),
                        eb(this, ex, { writable: !0, value: [] }),
                        eb(this, ek, { writable: !0, value: new WeakMap() }),
                        eE(this, "getAppNavigationState", () => {
                            let e = ev(this, ek).get(this.state);
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
                            return (ev(this, ek).set(this.state, s), s);
                        }),
                        (function (e, t, r) {
                            var n = eg(e, t, "set");
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
                            `No route found for initial location: ${e.pathname} in [${ew(this, eN, eP).call(this)}]`
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
            function eT(e) {
                for (let t of ev(this, ex)) t?.(e);
            }
            function eP() {
                return ev(this, eR)
                    .map((e) => e.path)
                    .join(", ");
            }
            function eA(e) {
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
                        appName: f,
                        initialLocation: v,
                        history: b,
                        embeddedData: w,
                        routes: S,
                        App: E,
                        wasServerRendered: R,
                        ssrError: x,
                        onError: C,
                    } = e;
                h[0] !== f || h[1] !== w || h[2] !== v || h[3] !== S
                    ? ((t = {
                          initialLocation: v,
                          appName: f,
                          embeddedData: w,
                          routes: S,
                      }),
                      (h[0] = f),
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
                                  return new ej(
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
                        location: j,
                        error: T,
                        routeStateMap: A,
                        appPayload: L,
                        navigateOnError: _,
                        isLoading: O,
                    } = k,
                    { handleHistoryUpdate: $ } = N;
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
                                      !ep(i.current, r) && (t || e))
                                  )
                                      if (t) {
                                          let e = em(t);
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
                    })(A[j.key], T, j),
                    P(O, j),
                    ee(j, O, T),
                    G(),
                    h[5] !== $ || h[6] !== b
                        ? ((r = () => b.listen($)),
                          (n = [b, $]),
                          (h[5] = $),
                          (h[6] = b),
                          (h[7] = r),
                          (h[8] = n))
                        : ((r = h[7]), (n = h[8])),
                    (0, B.N)(r, n),
                    h[9] !== E || h[10] !== S
                        ? ((o = (0, a.jsx)(eL, { routes: S, App: E })),
                          (h[9] = E),
                          (h[10] = S),
                          (h[11] = o))
                        : (o = h[11]),
                    h[12] !== b || h[13] !== j || h[14] !== o
                        ? ((i = (0, a.jsx)(l.Ix, {
                              location: j,
                              navigator: b,
                              children: o,
                          })),
                          (h[12] = b),
                          (h[13] = j),
                          (h[14] = o),
                          (h[15] = i))
                        : (i = h[15]),
                    h[16] !== x
                        ? ((s = (0, a.jsx)(m.h, { ssrError: x })),
                          (h[16] = x),
                          (h[17] = s))
                        : (s = h[17]),
                    h[18] !== L ||
                    h[19] !== T ||
                    h[20] !== _ ||
                    h[21] !== A ||
                    h[22] !== S ||
                    h[23] !== i ||
                    h[24] !== s
                        ? ((u = (0, a.jsxs)(eh.l, {
                              appPayload: L,
                              error: T,
                              navigateOnError: _,
                              routes: S,
                              routeStateMap: A,
                              children: [i, s],
                          })),
                          (h[18] = L),
                          (h[19] = T),
                          (h[20] = _),
                          (h[21] = A),
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
                    h[29] !== f || h[30] !== c || h[31] !== R
                        ? ((d = (0, a.jsx)(p.U, {
                              appName: f,
                              wasServerRendered: R,
                              dataRouterEnabled: !1,
                              children: c,
                          })),
                          (h[29] = f),
                          (h[30] = c),
                          (h[31] = R),
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
            V();
            try {
                eA.displayName || (eA.displayName = "NavigatorClientEntry");
            } catch {}
            try {
                eL.displayName || (eL.displayName = "AppRoutes");
            } catch {}
            var e_ = r(58394),
                eO = r(33957),
                e$ = r(13856);
            function eD(e, t, r) {
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
            let ez = () => Math.random().toString(36).substr(2, 8);
            var eW = new WeakSet(),
                eU = new WeakSet();
            let ReactAppElement = class ReactAppElement extends e$.H {
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
                        let r = await f(this.name);
                        return eD(this, eW, eH).call(
                            this,
                            e,
                            t,
                            r.registration
                        );
                    }
                    let r = await el(this.name);
                    return eD(this, eU, eB).call(this, e, t, r.registration);
                }
                get isLazy() {
                    return "true" === this.getAttribute("data-lazy");
                }
                constructor(...e) {
                    (super(...e),
                        eI(this, eW),
                        eI(this, eU),
                        eM(this, "nameAttribute", "app-name"),
                        eM(this, "popStateListener", (e) => {
                            e.state &&
                                this.uuid !== (0, s.JV)().appId &&
                                this.routerOrHistory?.dispose();
                        }));
                }
            };
            async function eH(e, t, r) {
                e && (0, eO.S)().removeQueries({ queryKey: [this.name] });
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
                                        element: (0, a.jsx)(p.U, {
                                            appName: r,
                                            wasServerRendered: n,
                                            dataRouterEnabled: s,
                                            children: (0, a.jsx)(j.z.Provider, {
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
                                                        (0, a.jsx)(A, {}),
                                                        (0, a.jsx)(K, {}),
                                                        (0, a.jsx)(M, {}),
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
                    (0, a.jsx)(e_.f, {
                        appName: this.name,
                        isDataRouterEnabled: !0,
                        children: (0, a.jsx)(e_.U, {
                            id: this.name,
                            children: (0, a.jsx)(l.pg, {
                                router: this.routerOrHistory,
                            }),
                        }),
                    })
                );
            }
            async function eB(e, t, r) {
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
                (0, s.C3)({ key: ez() });
                let f = (function (e = {}) {
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
                this.routerOrHistory = f;
                let { key: p, state: m } = f.location;
                return (0, a.jsx)(e_.f, {
                    appName: this.name,
                    isDataRouterEnabled: !1,
                    children: (0, a.jsx)(e_.U, {
                        id: this.name,
                        children: (0, a.jsx)(eA, {
                            appName: this.name,
                            initialLocation: {
                                pathname: c,
                                search: d,
                                hash: h,
                                key: p,
                                state: m,
                            },
                            history: f,
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
            function eF(e, t) {
                es.register(e, { type: "NavigatorApp", registration: t });
            }
            function eq(e) {
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
            let f = class RouterStore extends EventTarget {
                static getInstance() {
                    var e;
                    return (
                        l(RouterStore, RouterStore, p) ||
                            ((e = new RouterStore()),
                            u(RouterStore, RouterStore),
                            o(p, "set"),
                            a(RouterStore, p, e)),
                        l(RouterStore, RouterStore, p)
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
            var p = { writable: !0, value: void 0 };
            function m() {
                return f.getInstance();
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
                      let [f, p] = (0, i.useState)(e);
                      return (
                          d[1] === Symbol.for("react.memo_cache_sentinel")
                              ? ((t = () => {
                                    let e = new MutationObserver(() =>
                                        p(s(h.dataset))
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
                          d[3] !== f.dayScheme
                              ? ((n = c(f.dayScheme)),
                                (d[3] = f.dayScheme),
                                (d[4] = n))
                              : (n = d[4]),
                          d[5] !== f.nightScheme
                              ? ((l = c(f.nightScheme)),
                                (d[5] = f.nightScheme),
                                (d[6] = l))
                              : (l = d[6]),
                          d[7] !== f || d[8] !== n || d[9] !== l
                              ? ((u = { ...f, dayScheme: n, nightScheme: l }),
                                (d[7] = f),
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
                f = r(33957),
                p = r(7044);
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
                        appName: E,
                        children: R,
                        wasServerRendered: x,
                        dataRouterEnabled: C,
                    } = e,
                    { colorMode: k, dayScheme: N, nightScheme: j } = (0, p.A)();
                S[0] === Symbol.for("react.memo_cache_sentinel")
                    ? ((t = (0, f.S)()), (S[0] = t))
                    : (t = S[0]);
                let T = t;
                return (
                    S[1] !== R
                        ? ((r = (0, n.jsx)(s.k6, { children: R })),
                          (S[1] = R),
                          (S[2] = r))
                        : (r = S[2]),
                    S[3] !== E || S[4] !== r
                        ? ((y = (0, n.jsx)(d.V, { appName: E, children: r })),
                          (S[3] = E),
                          (S[4] = r),
                          (S[5] = y))
                        : (y = S[5]),
                    S[6] !== C || S[7] !== y
                        ? ((g = (0, n.jsx)(c.v, { enabled: C, children: y })),
                          (S[6] = C),
                          (S[7] = y),
                          (S[8] = g))
                        : (g = S[8]),
                    S[9] !== k || S[10] !== N || S[11] !== j || S[12] !== g
                        ? ((v = (0, n.jsx)(h.n, {
                              children: (0, n.jsx)(l.NP, {
                                  colorMode: k,
                                  dayScheme: N,
                                  nightScheme: j,
                                  preventSSRMismatch: !0,
                                  children: g,
                              }),
                          })),
                          (S[9] = k),
                          (S[10] = N),
                          (S[11] = j),
                          (S[12] = g),
                          (S[13] = v))
                        : (v = S[13]),
                    S[14] !== E || S[15] !== v
                        ? ((b = (0, n.jsx)(o.y, {
                              appName: E,
                              category: "",
                              metadata: m,
                              children: v,
                          })),
                          (S[14] = E),
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
                    f,
                    p,
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
                        ? ((f = r ? { [l.V]: !0, ...c.state } : c.state),
                          (m[5] = r),
                          (m[6] = c.state),
                          (m[7] = f))
                        : (f = m[7]),
                    m[8] !== c ||
                    m[9] !== t ||
                    m[10] !== d ||
                    m[11] !== f ||
                    m[12] !== h
                        ? ((p = (0, n.jsx)(o.N_, {
                              to: h,
                              ...c,
                              state: f,
                              reloadDocument: d,
                              ref: t,
                          })),
                          (m[8] = c),
                          (m[9] = t),
                          (m[10] = d),
                          (m[11] = f),
                          (m[12] = h),
                          (m[13] = p))
                        : (p = m[13]),
                    p
                );
            });
            c.displayName = "Link";
            let d = (0, s.forwardRef)(function (e, t) {
                let r,
                    c,
                    d,
                    h,
                    f,
                    p,
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
                        ? ((f = r ? { [l.V]: !0, ...c.state } : c.state),
                          (m[5] = r),
                          (m[6] = c.state),
                          (m[7] = f))
                        : (f = m[7]),
                    m[8] !== c ||
                    m[9] !== t ||
                    m[10] !== d ||
                    m[11] !== f ||
                    m[12] !== h
                        ? ((p = (0, n.jsx)(o.k2, {
                              to: h,
                              ...c,
                              state: f,
                              reloadDocument: d,
                              ref: t,
                          })),
                          (m[8] = c),
                          (m[9] = t),
                          (m[10] = d),
                          (m[11] = f),
                          (m[12] = h),
                          (m[13] = p))
                        : (p = m[13]),
                    p
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
                        error: f,
                        navigateOnError: p,
                        routes: m,
                        routeStateMap: y,
                    } = e;
                return (
                    o[0] !== d ||
                    o[1] !== h ||
                    o[2] !== f ||
                    o[3] !== p ||
                    o[4] !== y
                        ? ((t =
                              f && !p
                                  ? (0, n.jsx)(i.M, { ...f })
                                  : (0, n.jsx)(u.z.Provider, {
                                        value: d,
                                        children: (0, n.jsx)(c.Provider, {
                                            value: f,
                                            children: (0, n.jsx)(s.Y.Provider, {
                                                value: y,
                                                children: h,
                                            }),
                                        }),
                                    })),
                          (o[0] = d),
                          (o[1] = h),
                          (o[2] = f),
                          (o[3] = p),
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
                        partialName: f,
                        wasServerRendered: p,
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
                    h[8] !== f || h[9] !== c || h[10] !== p
                        ? ((d = (0, n.jsx)(o.U, {
                              appName: f,
                              wasServerRendered: p,
                              dataRouterEnabled: !1,
                              children: c,
                          })),
                          (h[8] = f),
                          (h[9] = c),
                          (h[10] = p),
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
            r.d(t, { U: () => h, f: () => c });
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
                    let { onRender: f } = (function (e) {
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
                        o[3] !== h || o[4] !== f
                            ? ((r = (0, n.jsx)(u.Provider, {
                                  value: f,
                                  children: h,
                              })),
                              (o[3] = h),
                              (o[4] = f),
                              (o[5] = r))
                            : (r = o[5]),
                        r
                    );
                }),
                d = () => (0, i.useContext)(u),
                h = (0, i.memo)(function (e) {
                    let t,
                        r = (0, a.c)(4),
                        { id: s, children: l } = e,
                        u = d() ?? o.l;
                    return (
                        r[0] !== l || r[1] !== s || r[2] !== u
                            ? ((t = (0, n.jsx)(i.Profiler, {
                                  id: s,
                                  onRender: u,
                                  children: l,
                              })),
                              (r[0] = l),
                              (r[1] = s),
                              (r[2] = u),
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
                h.displayName || (h.displayName = "Profiler");
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
            function f(e, t, r) {
                if (!t.has(e))
                    throw TypeError(
                        "attempted to " + r + " private field on non-instance"
                    );
                return t.get(e);
            }
            function p(e, t) {
                var r = f(e, t, "get");
                return r.get ? r.get.call(e) : r.value;
            }
            function m(e, t, r) {
                (h(e, t), t.set(e, r));
            }
            function y(e, t, r) {
                var n = f(e, t, "set");
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
            var E = new WeakMap(),
                R = new WeakMap(),
                x = new WeakSet(),
                C = new WeakSet(),
                k = new WeakSet(),
                N = new WeakSet(),
                j = new WeakSet(),
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
                    g(this, N, O).call(this);
                }
                disconnectedCallback() {
                    (p(this, E)?.unmount(), y(this, E, void 0));
                }
                constructor(...e) {
                    (super(...e),
                        m(this, R, { get: P, set: void 0 }),
                        v(this, x),
                        v(this, C),
                        v(this, k),
                        v(this, N),
                        v(this, j),
                        v(this, T),
                        m(this, E, { writable: !0, value: void 0 }));
                }
            };
            function P() {
                let e = this.embeddedData?.textContent;
                if (!e)
                    throw Error(
                        `No embedded data provided for react element ${this.name}`
                    );
                return e;
            }
            function A() {
                return (
                    s.A.isEnabled() ||
                    "true" === this.getAttribute("data-react-profiling")
                );
            }
            function L(e, t, r) {
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
                            g(this, C, L).call(this, a, r, n);
                        }
                    );
                } catch {
                    return i.l;
                }
            }
            async function O() {
                if (!this.reactRoot) throw Error("No react root provided");
                let e = { createRoot: c.H, hydrateRoot: c.c };
                g(this, x, A).call(this) &&
                    (e = await g(this, j, $).call(this));
                let t = g(this, k, _).call(this),
                    r = !1,
                    a = JSON.parse(p(this, R)),
                    i = this.ssrError?.textContent,
                    s = await this.getReactNode(a, (e, t = {}) => {
                        r = !0;
                        let n = { critical: !0, reactAppName: this.name, ...t };
                        setTimeout(() => {
                            (0, o.N7)(e, n);
                        });
                    }),
                    d = (0, n.jsx)(u.StrictMode, { children: s });
                if ((i && g(this, T, D).call(this, i), this.hasSSRContent)) {
                    let t = [
                        ...this.querySelectorAll('style[data-styled="true"]'),
                        ...this.querySelectorAll(
                            'link[data-remove-after-hydration="true"]'
                        ),
                    ];
                    for (let e of t) document.head.appendChild(e);
                    (y(
                        this,
                        E,
                        e.hydrateRoot(this.reactRoot, d, {
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
                    (y(this, E, e.createRoot(this.reactRoot)),
                        p(this, E).render(d),
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
            function $() {
                return r.e("react-profiling").then(r.t.bind(r, 87335, 19));
            }
            function D(e) {
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
                        { appName: h, children: f, critical: p } = e;
                    d[0] !== p || d[1] !== h
                        ? ((t = { reactAppName: h, critical: p }),
                          (d[0] = p),
                          (d[1] = h),
                          (d[2] = t))
                        : (t = d[2]);
                    let m = (0, i.useRef)(t);
                    (d[3] !== p || d[4] !== h
                        ? ((r = () => {
                              m.current = { reactAppName: h, critical: p };
                          }),
                          (d[3] = p),
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
                        d[7] !== f
                            ? ((c = (0, n.jsx)(l.Provider, {
                                  value: y,
                                  children: f,
                              })),
                              (d[7] = f),
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
            r.d(t, { Ly: () => m, hw: () => f, km: () => h });
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
            let f = (e) => {
                let t,
                    r = (0, a.c)(3),
                    { appName: o } = e,
                    s = (0, i.r5)();
                return !(function (e) {
                    return (0, i.pX)(e) && 404 === e.status;
                })(s)
                    ? (r[0] !== o || r[1] !== s
                          ? ((t = (0, n.jsx)(p, { appName: o, routeError: s })),
                            (r[0] = o),
                            (r[1] = s),
                            (r[2] = t))
                          : (t = r[2]),
                      t)
                    : null;
            };
            function p(e) {
                let t,
                    r,
                    i,
                    u,
                    c = (0, a.c)(6),
                    { appName: d, routeError: f } = e,
                    p = (0, l.useRef)(d);
                return (
                    c[0] !== d
                        ? ((t = () => {
                              p.current = d;
                          }),
                          (c[0] = d),
                          (c[1] = t))
                        : (t = c[1]),
                    (0, l.useEffect)(t),
                    c[2] !== f
                        ? ((r = () => {
                              f &&
                                  h(f, (e) => {
                                      (0, o.N7)(e, {
                                          critical: !0,
                                          reactAppName: p.current,
                                      });
                                  });
                          }),
                          (i = [f]),
                          (c[2] = f),
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
                        ? ((t = (0, n.jsx)(p, { routeError: s, appName: o })),
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
                    f,
                    p,
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
                let E = (0, l.useRef)(v);
                (g[0] !== v
                    ? ((t = () => {
                          E.current = v;
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
                                      reactAppName: E.current,
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
                let R = `Status: ${b.response.status} Message: ${b.message}`;
                return (
                    g[6] !== R
                        ? ((d = (0, n.jsx)(s.E.Description, { children: R })),
                          (g[6] = R),
                          (g[7] = d))
                        : (d = g[7]),
                    g[8] === Symbol.for("react.memo_cache_sentinel")
                        ? ((f = (0, n.jsx)(s.E.Description, {
                              children: "Please reload page and try again",
                          })),
                          (g[8] = f))
                        : (f = g[8]),
                    g[9] !== d
                        ? ((p = (0, n.jsxs)(s.E, {
                              border: !1,
                              spacious: !1,
                              children: [u, d, f],
                          })),
                          (g[9] = d),
                          (g[10] = p))
                        : (p = g[10]),
                    p
                );
            }
            try {
                f.displayName || (f.displayName = "UnhandledRouteError");
            } catch {}
            try {
                p.displayName || (p.displayName = "BaseRouteErrorBoundary");
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
                AO: () => g,
                B6: () => A,
                BV: () => tF,
                C5: () => tW,
                Ew: () => tN,
                FE: () => tC,
                Gy: () => rK,
                Ix: () => tB,
                K: () => r3,
                KP: () => tP,
                Kd: () => rB,
                LG: () => tk,
                N_: () => rq,
                OA: () => rV,
                PI: () => tV,
                RQ: () => tl,
                Ye: () => tm,
                Ys: () => rH,
                Zp: () => td,
                _3: () => tt,
                cq: () => tx,
                g: () => tf,
                k2: () => rJ,
                o1: () => $,
                ok: () => rQ,
                pX: () => X,
                pg: () => tM,
                qh: () => tH,
                r5: () => tj,
                rc: () => c,
                sv: () => tU,
                tW: () => P,
                ue: () => C,
                wQ: () => ts,
                x$: () => tp,
                zR: () => h,
                zy: () => ti,
            });
            var n,
                a,
                o = r(96540);
            r(16069);
            var i = (e) => {
                    throw TypeError(e);
                },
                s = (e, t, r) => t.has(e) || i("Cannot " + r),
                l = (e, t, r) => (
                    s(e, t, "read from private field"),
                    r ? r.call(e) : t.get(e)
                ),
                u = (e, t, r) =>
                    t.has(e)
                        ? i("Cannot add the same private member more than once")
                        : t instanceof WeakSet
                          ? t.add(e)
                          : t.set(e, r),
                c = ((e) => (
                    (e.Pop = "POP"),
                    (e.Push = "PUSH"),
                    (e.Replace = "REPLACE"),
                    e
                ))(c || {}),
                d = "popstate";
            function h(e = {}) {
                return b(
                    function (e, t) {
                        let { pathname: r, search: n, hash: a } = e.location;
                        return y(
                            "",
                            { pathname: r, search: n, hash: a },
                            (t.state && t.state.usr) || null,
                            (t.state && t.state.key) || "default"
                        );
                    },
                    function (e, t) {
                        return "string" == typeof t ? t : g(t);
                    },
                    null,
                    e
                );
            }
            function f(e, t) {
                if (!1 === e || null == e) throw Error(t);
            }
            function p(e, t) {
                if (!e) {
                    "undefined" != typeof console && console.warn(t);
                    try {
                        throw Error(t);
                    } catch (e) {}
                }
            }
            function m(e, t) {
                return { usr: e.state, key: e.key, idx: t };
            }
            function y(e, t, r = null, n) {
                return {
                    pathname: "string" == typeof e ? e : e.pathname,
                    search: "",
                    hash: "",
                    ...("string" == typeof t ? v(t) : t),
                    state: r,
                    key:
                        (t && t.key) ||
                        n ||
                        Math.random().toString(36).substring(2, 10),
                };
            }
            function g({ pathname: e = "/", search: t = "", hash: r = "" }) {
                return (
                    t && "?" !== t && (e += "?" === t.charAt(0) ? t : "?" + t),
                    r && "#" !== r && (e += "#" === r.charAt(0) ? r : "#" + r),
                    e
                );
            }
            function v(e) {
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
            function b(e, t, r, n = {}) {
                let { window: a = document.defaultView, v5Compat: o = !1 } = n,
                    i = a.history,
                    s = "POP",
                    l = null,
                    u = c();
                function c() {
                    return (i.state || { idx: null }).idx;
                }
                function h() {
                    s = "POP";
                    let e = c(),
                        t = null == e ? null : e - u;
                    ((u = e),
                        l && l({ action: s, location: f.location, delta: t }));
                }
                null == u &&
                    ((u = 0), i.replaceState({ ...i.state, idx: u }, ""));
                let f = {
                    get action() {
                        return s;
                    },
                    get location() {
                        return e(a, i);
                    },
                    listen(e) {
                        if (l)
                            throw Error(
                                "A history only accepts one active listener"
                            );
                        return (
                            a.addEventListener(d, h),
                            (l = e),
                            () => {
                                (a.removeEventListener(d, h), (l = null));
                            }
                        );
                    },
                    createHref: (e) => t(a, e),
                    createURL: function (e) {
                        return w(e);
                    },
                    encodeLocation(e) {
                        let t = w(e);
                        return {
                            pathname: t.pathname,
                            search: t.search,
                            hash: t.hash,
                        };
                    },
                    push: function (e, t) {
                        s = "PUSH";
                        let n = y(f.location, e, t);
                        r && r(n, e);
                        let d = m(n, (u = c() + 1)),
                            h = f.createHref(n);
                        try {
                            i.pushState(d, "", h);
                        } catch (e) {
                            if (
                                e instanceof DOMException &&
                                "DataCloneError" === e.name
                            )
                                throw e;
                            a.location.assign(h);
                        }
                        o &&
                            l &&
                            l({ action: s, location: f.location, delta: 1 });
                    },
                    replace: function (e, t) {
                        s = "REPLACE";
                        let n = y(f.location, e, t);
                        r && r(n, e);
                        let a = m(n, (u = c())),
                            d = f.createHref(n);
                        (i.replaceState(a, "", d),
                            o &&
                                l &&
                                l({
                                    action: s,
                                    location: f.location,
                                    delta: 0,
                                }));
                    },
                    go: (e) => i.go(e),
                };
                return f;
            }
            function w(e, t = !1) {
                let r = "http://localhost";
                ("undefined" != typeof window &&
                    (r =
                        "null" !== window.location.origin
                            ? window.location.origin
                            : window.location.href),
                    f(
                        r,
                        "No window.location.(origin|href) available to create URL"
                    ));
                let n = "string" == typeof e ? e : g(e);
                return (
                    (n = n.replace(/ $/, "%20")),
                    !t && n.startsWith("//") && (n = r + n),
                    new URL(n, r)
                );
            }
            var S = class {
                constructor(e) {
                    if ((u(this, n, new Map()), e))
                        for (let [t, r] of e) this.set(t, r);
                }
                get(e) {
                    if (l(this, n).has(e)) return l(this, n).get(e);
                    if (void 0 !== e.defaultValue) return e.defaultValue;
                    throw Error("No value found for context");
                }
                set(e, t) {
                    l(this, n).set(e, t);
                }
            };
            n = new WeakMap();
            var E = new Set([
                    "lazy",
                    "caseSensitive",
                    "path",
                    "id",
                    "index",
                    "children",
                ]),
                R = new Set([
                    "lazy",
                    "caseSensitive",
                    "path",
                    "id",
                    "index",
                    "unstable_middleware",
                    "children",
                ]);
            function x(e, t, r = [], n = {}) {
                return e.map((e, a) => {
                    let o = [...r, String(a)],
                        i = "string" == typeof e.id ? e.id : o.join("-");
                    if (
                        (f(
                            !0 !== e.index || !e.children,
                            "Cannot specify children on an index route"
                        ),
                        f(
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
                            e.children && (r.children = x(e.children, t, o, n)),
                            r
                        );
                    }
                });
            }
            function C(e, t, r = "/") {
                return k(e, t, r, !1);
            }
            function k(e, t, r, n) {
                let a = O(("string" == typeof t ? v(t) : t).pathname || "/", r);
                if (null == a) return null;
                let o = (function e(t, r = [], n = [], a = "") {
                    let o = (t, o, i) => {
                        var s, l;
                        let u,
                            c,
                            d = {
                                relativePath: void 0 === i ? t.path || "" : i,
                                caseSensitive: !0 === t.caseSensitive,
                                childrenIndex: o,
                                route: t,
                            };
                        d.relativePath.startsWith("/") &&
                            (f(
                                d.relativePath.startsWith(a),
                                `Absolute route path "${d.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
                            ),
                            (d.relativePath = d.relativePath.slice(a.length)));
                        let h = W([a, d.relativePath]),
                            p = n.concat(d);
                        (t.children &&
                            t.children.length > 0 &&
                            (f(
                                !0 !== t.index,
                                `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
                            ),
                            e(t.children, r, p, h)),
                            (null != t.path || t.index) &&
                                r.push({
                                    path: h,
                                    score:
                                        ((s = h),
                                        (l = t.index),
                                        (c = (u = s.split("/")).length),
                                        u.some(T) && (c += -2),
                                        l && (c += 2),
                                        u
                                            .filter((e) => !T(e))
                                            .reduce(
                                                (e, t) =>
                                                    e +
                                                    (j.test(t)
                                                        ? 3
                                                        : "" === t
                                                          ? 1
                                                          : 10),
                                                c
                                            )),
                                    routesMeta: p,
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
                    let t = _(a);
                    i = (function (e, t, r = !1) {
                        let { routesMeta: n } = e,
                            a = {},
                            o = "/",
                            i = [];
                        for (let e = 0; e < n.length; ++e) {
                            let s = n[e],
                                l = e === n.length - 1,
                                u = "/" === o ? t : t.slice(o.length) || "/",
                                c = A(
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
                                    (c = A(
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
                                    pathname: W([o, c.pathname]),
                                    pathnameBase: U(W([o, c.pathnameBase])),
                                    route: d,
                                }),
                                "/" !== c.pathnameBase &&
                                    (o = W([o, c.pathnameBase])));
                        }
                        return i;
                    })(o[e], t, n);
                }
                return i;
            }
            function N(e, t) {
                let { route: r, pathname: n, params: a } = e;
                return {
                    id: r.id,
                    pathname: n,
                    params: a,
                    data: t[r.id],
                    handle: r.handle,
                };
            }
            var j = /^:[\w-]+$/,
                T = (e) => "*" === e;
            function P(e, t = {}) {
                let r = e;
                r.endsWith("*") &&
                    "*" !== r &&
                    !r.endsWith("/*") &&
                    (p(
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
                                    f(
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
            function A(e, t) {
                "string" == typeof e &&
                    (e = { path: e, caseSensitive: !1, end: !0 });
                let [r, n] = L(e.path, e.caseSensitive, e.end),
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
            function L(e, t = !1, r = !0) {
                p(
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
                          : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"),
                    [new RegExp(a, t ? void 0 : "i"), n]
                );
            }
            function _(e) {
                try {
                    return e
                        .split("/")
                        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
                        .join("/");
                } catch (t) {
                    return (
                        p(
                            !1,
                            `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
                        ),
                        e
                    );
                }
            }
            function O(e, t) {
                if ("/" === t) return e;
                if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
                let r = t.endsWith("/") ? t.length - 1 : t.length,
                    n = e.charAt(r);
                return n && "/" !== n ? null : e.slice(r) || "/";
            }
            function $(e, t = "/") {
                var r;
                let n,
                    {
                        pathname: a,
                        search: o = "",
                        hash: i = "",
                    } = "string" == typeof e ? v(e) : e;
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
                    search: H(o),
                    hash: B(i),
                };
            }
            function D(e, t, r, n) {
                return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
            }
            function I(e) {
                return e.filter(
                    (e, t) =>
                        0 === t || (e.route.path && e.route.path.length > 0)
                );
            }
            function M(e) {
                let t = I(e);
                return t.map((e, r) =>
                    r === t.length - 1 ? e.pathname : e.pathnameBase
                );
            }
            function z(e, t, r, n = !1) {
                let a, o;
                "string" == typeof e
                    ? (a = v(e))
                    : (f(
                          !(a = { ...e }).pathname || !a.pathname.includes("?"),
                          D("?", "pathname", "search", a)
                      ),
                      f(
                          !a.pathname || !a.pathname.includes("#"),
                          D("#", "pathname", "hash", a)
                      ),
                      f(
                          !a.search || !a.search.includes("#"),
                          D("#", "search", "hash", a)
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
                let l = $(a, o),
                    u = s && "/" !== s && s.endsWith("/"),
                    c = (i || "." === s) && r.endsWith("/");
                return (
                    !l.pathname.endsWith("/") &&
                        (u || c) &&
                        (l.pathname += "/"),
                    l
                );
            }
            var W = (e) => e.join("/").replace(/\/\/+/g, "/"),
                U = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
                H = (e) =>
                    e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "",
                B = (e) =>
                    e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "",
                F = class {
                    constructor(e, t) {
                        ((this.type = "DataWithResponseInit"),
                            (this.data = e),
                            (this.init = t || null));
                    }
                },
                q = (e, t = 302) => {
                    let r = t;
                    "number" == typeof r
                        ? (r = { status: r })
                        : void 0 === r.status && (r.status = 302);
                    let n = new Headers(r.headers);
                    return (
                        n.set("Location", e),
                        new Response(null, { ...r, headers: n })
                    );
                },
                J = (e, t) => {
                    let r = q(e, t);
                    return (
                        r.headers.set("X-Remix-Reload-Document", "true"),
                        r
                    );
                },
                Y = (e, t) => {
                    let r = q(e, t);
                    return (r.headers.set("X-Remix-Replace", "true"), r);
                },
                V = class {
                    constructor(e, t, r, n = !1) {
                        ((this.status = e),
                            (this.statusText = t || ""),
                            (this.internal = n),
                            r instanceof Error
                                ? ((this.data = r.toString()), (this.error = r))
                                : (this.data = r));
                    }
                };
            function X(e) {
                return (
                    null != e &&
                    "number" == typeof e.status &&
                    "string" == typeof e.statusText &&
                    "boolean" == typeof e.internal &&
                    "data" in e
                );
            }
            var G = ["POST", "PUT", "PATCH", "DELETE"],
                K = new Set(G),
                Q = new Set(["GET", ...G]),
                Z = new Set([301, 302, 303, 307, 308]),
                ee = new Set([307, 308]),
                et = {
                    state: "idle",
                    location: void 0,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                },
                er = {
                    state: "idle",
                    data: void 0,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                },
                en = {
                    state: "unblocked",
                    proceed: void 0,
                    reset: void 0,
                    location: void 0,
                },
                ea = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                eo = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
                ei = "remix-router-transitions",
                es = Symbol("ResetLoaderData");
            function el(e, t, r, n) {
                let a = n || t._deepestRenderedBoundaryId || e[0].id;
                return {
                    ...t,
                    statusCode: X(r) ? r.status : 500,
                    errors: { [a]: r },
                };
            }
            function eu(e, t) {
                if (void 0 !== e.signal.reason) throw e.signal.reason;
                throw Error(
                    `${t ? "queryRoute" : "query"}() call aborted without an \`AbortSignal.reason\`: ${e.method} ${e.url}`
                );
            }
            function ec(e, t, r, n, a, o) {
                let i, s;
                if (a) {
                    for (let e of ((i = []), t))
                        if ((i.push(e), e.route.id === a)) {
                            s = e;
                            break;
                        }
                } else ((i = t), (s = t[t.length - 1]));
                let l = z(
                    n || ".",
                    M(i),
                    O(e.pathname, r) || e.pathname,
                    "path" === o
                );
                if (
                    (null == n && ((l.search = e.search), (l.hash = e.hash)),
                    (null == n || "" === n || "." === n) && s)
                ) {
                    let e = e0(l.search);
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
                            "/" === l.pathname ? r : W([r, l.pathname])),
                    g(l)
                );
            }
            function ed(e, t, r) {
                let n, a;
                if (
                    !r ||
                    !(
                        null != r &&
                        (("formData" in r && null != r.formData) ||
                            ("body" in r && void 0 !== r.body))
                    )
                )
                    return { path: t };
                if (r.formMethod && !eQ(r.formMethod))
                    return {
                        path: t,
                        error: eH(405, { method: r.formMethod }),
                    };
                let o = () => ({
                        path: t,
                        error: eH(400, { type: "invalid-body" }),
                    }),
                    i = (r.formMethod || "get").toUpperCase(),
                    s = eF(t);
                if (void 0 !== r.body) {
                    if ("text/plain" === r.formEncType) {
                        if (!eZ(i)) return o();
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
                                formMethod: i,
                                formAction: s,
                                formEncType: r.formEncType,
                                formData: void 0,
                                json: void 0,
                                text: e,
                            },
                        };
                    } else if ("application/json" === r.formEncType) {
                        if (!eZ(i)) return o();
                        try {
                            let e =
                                "string" == typeof r.body
                                    ? JSON.parse(r.body)
                                    : r.body;
                            return {
                                path: t,
                                submission: {
                                    formMethod: i,
                                    formAction: s,
                                    formEncType: r.formEncType,
                                    formData: void 0,
                                    json: e,
                                    text: void 0,
                                },
                            };
                        } catch (e) {
                            return o();
                        }
                    }
                }
                if (
                    (f(
                        "function" == typeof FormData,
                        "FormData is not available in this environment"
                    ),
                    r.formData)
                )
                    ((n = eO(r.formData)), (a = r.formData));
                else if (r.body instanceof FormData)
                    ((n = eO(r.body)), (a = r.body));
                else if (r.body instanceof URLSearchParams)
                    a = e$((n = r.body));
                else if (null == r.body)
                    ((n = new URLSearchParams()), (a = new FormData()));
                else
                    try {
                        ((n = new URLSearchParams(r.body)), (a = e$(n)));
                    } catch (e) {
                        return o();
                    }
                let l = {
                    formMethod: i,
                    formAction: s,
                    formEncType:
                        (r && r.formEncType) ||
                        "application/x-www-form-urlencoded",
                    formData: a,
                    json: void 0,
                    text: void 0,
                };
                if (eZ(l.formMethod)) return { path: t, submission: l };
                let u = v(t);
                return (
                    e && u.search && e0(u.search) && n.append("index", ""),
                    (u.search = `?${n}`),
                    { path: g(u), submission: l }
                );
            }
            function eh(
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
                f,
                p,
                m,
                y,
                g,
                v,
                b
            ) {
                let w,
                    S = b ? (eJ(b[1]) ? b[1].error : b[1].data) : void 0,
                    E = a.createURL(o.location),
                    R = a.createURL(l);
                if (c && o.errors) {
                    let e = Object.keys(o.errors)[0];
                    w = i.findIndex((t) => t.route.id === e);
                } else if (b && eJ(b[1])) {
                    let e = b[0];
                    w = i.findIndex((t) => t.route.id === e) - 1;
                }
                let x = b ? b[1].statusCode : void 0,
                    k = x && x >= 400,
                    N = {
                        currentUrl: E,
                        currentParams: o.matches[0]?.params || {},
                        nextUrl: R,
                        nextParams: i[0].params,
                        ...s,
                        actionResult: S,
                        actionStatus: x,
                    },
                    j = i.map((a, i) => {
                        var s, l, h, f, p;
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
                                      ? (b = ef(v, o.loaderData, o.errors))
                                      : ((s = o.loaderData),
                                        (l = o.matches[i]),
                                        (h = a),
                                        (m = !l || h.route.id !== l.route.id),
                                        (y = !s.hasOwnProperty(h.route.id)),
                                        (m || y) && (b = !0)),
                            null !== b)
                        )
                            return ek(r, n, e, a, u, t, b);
                        let S =
                                !k &&
                                (d ||
                                    E.pathname + E.search ===
                                        R.pathname + R.search ||
                                    E.search !== R.search ||
                                    ((f = o.matches[i]),
                                    (p = a),
                                    (g = f.route.path),
                                    f.pathname !== p.pathname ||
                                        (null != g &&
                                            g.endsWith("*") &&
                                            f.params["*"] !== p.params["*"]))),
                            x = { ...N, defaultShouldRevalidate: S },
                            C = ep(a, x);
                        return ek(r, n, e, a, u, t, C, x);
                    }),
                    T = [];
                return (
                    p.forEach((e, s) => {
                        if (
                            c ||
                            !i.some((t) => t.route.id === e.routeId) ||
                            f.has(s)
                        )
                            return;
                        let l = o.fetchers.get(s),
                            p = l && "idle" !== l.state && void 0 === l.data,
                            b = C(y, e.path, g);
                        if (!b) {
                            if (v && p) return;
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
                        let w = e1(b, e.path),
                            S = new AbortController(),
                            E = e_(a, e.path, S.signal),
                            R = null;
                        if (h.has(s))
                            (h.delete(s), (R = eN(r, n, E, b, w, u, t)));
                        else if (p) d && (R = eN(r, n, E, b, w, u, t));
                        else {
                            let e = { ...N, defaultShouldRevalidate: !k && d };
                            ep(w, e) && (R = eN(r, n, E, b, w, u, t, e));
                        }
                        R &&
                            T.push({
                                key: s,
                                routeId: e.routeId,
                                path: e.path,
                                matches: R,
                                match: w,
                                request: E,
                                controller: S,
                            });
                    }),
                    { dsMatches: j, revalidatingFetchers: T }
                );
            }
            function ef(e, t, r) {
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
            function ep(e, t) {
                if (e.route.shouldRevalidate) {
                    let r = e.route.shouldRevalidate(t);
                    if ("boolean" == typeof r) return r;
                }
                return t.defaultShouldRevalidate;
            }
            function em(e, t, r, n, a) {
                let o;
                if (e) {
                    let t = n[e];
                    (f(
                        t,
                        `No route found to patch children into: routeId = ${e}`
                    ),
                        t.children || (t.children = []),
                        (o = t.children));
                } else o = r;
                let i = x(
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
            var ey = new WeakMap(),
                eg = ({
                    key: e,
                    route: t,
                    manifest: r,
                    mapRouteProperties: n,
                }) => {
                    let a = r[t.id];
                    if (
                        (f(a, "No route found in manifest"),
                        !a.lazy || "object" != typeof a.lazy)
                    )
                        return;
                    let o = a.lazy[e];
                    if (!o) return;
                    let i = ey.get(a);
                    i || ((i = {}), ey.set(a, i));
                    let s = i[e];
                    if (s) return s;
                    let l = (async () => {
                        let t = E.has(e),
                            r = void 0 !== a[e] && "hasErrorBoundary" !== e;
                        if (t)
                            (p(
                                !t,
                                "Route property " +
                                    e +
                                    " is not a supported lazy route property. This property will be ignored."
                            ),
                                (i[e] = Promise.resolve()));
                        else if (r)
                            p(
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
                ev = new WeakMap();
            function eb(e) {
                return void 0 !== e;
            }
            function ew(e, t, r) {
                let n = e
                    .map(({ route: e }) => {
                        if (
                            "object" == typeof e.lazy &&
                            e.lazy.unstable_middleware
                        )
                            return eg({
                                key: "unstable_middleware",
                                route: e,
                                manifest: t,
                                mapRouteProperties: r,
                            });
                    })
                    .filter(eb);
                return n.length > 0 ? Promise.all(n) : void 0;
            }
            async function eS(e) {
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
            async function eE(e) {
                return e.matches.some((e) => e.route.unstable_middleware)
                    ? eR(
                          e,
                          !1,
                          () => eS(e),
                          (e, t) => ({ [t]: { type: "error", result: e } })
                      )
                    : eS(e);
            }
            async function eR(e, t, r, n) {
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
                        n = await ex(
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
            async function ex(e, t, r, n, a, o = 0) {
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
                        let s = await ex(e, t, r, n, a, o + 1);
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
            function eC(e, t, r, n, a) {
                let o = eg({
                        key: "unstable_middleware",
                        route: n.route,
                        manifest: t,
                        mapRouteProperties: e,
                    }),
                    i = (function (e, t, r, n, a) {
                        let o,
                            i = r[e.id];
                        if ((f(i, "No route found in manifest"), !e.lazy))
                            return {
                                lazyRoutePromise: void 0,
                                lazyHandlerPromise: void 0,
                            };
                        if ("function" == typeof e.lazy) {
                            let t = ev.get(i);
                            if (t)
                                return {
                                    lazyRoutePromise: t,
                                    lazyHandlerPromise: t,
                                };
                            let r = (async () => {
                                f(
                                    "function" == typeof e.lazy,
                                    "No lazy route function found"
                                );
                                let t = await e.lazy(),
                                    r = {};
                                for (let e in t) {
                                    let n = t[e];
                                    if (void 0 === n) continue;
                                    let a = R.has(e),
                                        o =
                                            void 0 !== i[e] &&
                                            "hasErrorBoundary" !== e;
                                    a
                                        ? p(
                                              !a,
                                              "Route property " +
                                                  e +
                                                  " is not a supported property to be returned from a lazy route function. This property will be ignored."
                                          )
                                        : o
                                          ? p(
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
                                ev.set(i, r),
                                r.catch(() => {}),
                                { lazyRoutePromise: r, lazyHandlerPromise: r }
                            );
                        }
                        let s = Object.keys(e.lazy),
                            l = [];
                        for (let i of s) {
                            if (a && a.includes(i)) continue;
                            let s = eg({
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
                    })(n.route, eZ(r.method) ? "action" : "loader", t, e, a);
                return {
                    middleware: o,
                    route: i.lazyRoutePromise,
                    handler: i.lazyHandlerPromise,
                };
            }
            function ek(e, t, r, n, a, o, i, s = null) {
                let l = !1,
                    u = eC(e, t, r, n, a);
                return {
                    ...n,
                    _lazyPromises: u,
                    shouldLoad: i,
                    unstable_shouldRevalidateArgs: s,
                    unstable_shouldCallHandler: (e) =>
                        ((l = !0), s)
                            ? "boolean" == typeof e
                                ? ep(n, { ...s, defaultShouldRevalidate: e })
                                : ep(n, s)
                            : i,
                    resolve: (e) =>
                        l ||
                        i ||
                        (e &&
                            "GET" === r.method &&
                            (n.route.lazy || n.route.loader))
                            ? eT({
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
            function eN(e, t, r, n, a, o, i, s = null) {
                return n.map((n) =>
                    n.route.id !== a.route.id
                        ? {
                              ...n,
                              shouldLoad: !1,
                              unstable_shouldRevalidateArgs: s,
                              unstable_shouldCallHandler: () => !1,
                              _lazyPromises: eC(e, t, r, n, o),
                              resolve: () =>
                                  Promise.resolve({
                                      type: "data",
                                      result: void 0,
                                  }),
                          }
                        : ek(e, t, r, n, o, i, !0, s)
                );
            }
            async function ej(e, t, r, n, a, o) {
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
                              eR(
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
            async function eT({
                request: e,
                match: t,
                lazyHandlerPromise: r,
                lazyRoutePromise: n,
                handlerOverride: a,
                scopedContext: o,
            }) {
                let i,
                    s,
                    l = eZ(e.method),
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
                                throw eH(405, {
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
                        throw eH(404, { pathname: r });
                    }
                } catch (e) {
                    return { type: "error", result: e };
                } finally {
                    s && e.signal.removeEventListener("abort", s);
                }
                return i;
            }
            async function eP(e) {
                let { result: t, type: r } = e;
                if (eX(t)) {
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
                              error: new V(t.status, t.statusText, e),
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
                    return eV(t)
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
                                  error: new V(
                                      t.init?.status || 500,
                                      void 0,
                                      t.data
                                  ),
                                  statusCode: X(t) ? t.status : void 0,
                                  headers: t.init?.headers
                                      ? new Headers(t.init.headers)
                                      : void 0,
                              }
                        : {
                              type: "error",
                              error: t,
                              statusCode: X(t) ? t.status : void 0,
                          };
                return eV(t)
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
            function eA(e, t, r, n, a) {
                let o = e.headers.get("Location");
                if (
                    (f(
                        o,
                        "Redirects returned/thrown from loaders/actions must have a Location header"
                    ),
                    !ea.test(o))
                ) {
                    let i = n.slice(
                        0,
                        n.findIndex((e) => e.route.id === r) + 1
                    );
                    ((o = ec(new URL(t.url), i, a, o)),
                        e.headers.set("Location", o));
                }
                return e;
            }
            function eL(e, t, r) {
                if (ea.test(e)) {
                    let n = new URL(e.startsWith("//") ? t.protocol + e : e),
                        a = null != O(n.pathname, r);
                    if (n.origin === t.origin && a)
                        return n.pathname + n.search + n.hash;
                }
                return e;
            }
            function e_(e, t, r, n) {
                let a = e.createURL(eF(t)).toString(),
                    o = { signal: r };
                if (n && eZ(n.formMethod)) {
                    let { formMethod: e, formEncType: t } = n;
                    ((o.method = e.toUpperCase()),
                        "application/json" === t
                            ? ((o.headers = new Headers({ "Content-Type": t })),
                              (o.body = JSON.stringify(n.json)))
                            : "text/plain" === t
                              ? (o.body = n.text)
                              : "application/x-www-form-urlencoded" === t &&
                                  n.formData
                                ? (o.body = eO(n.formData))
                                : (o.body = n.formData));
                }
                return new Request(a, o);
            }
            function eO(e) {
                let t = new URLSearchParams();
                for (let [r, n] of e.entries())
                    t.append(r, "string" == typeof n ? n : n.name);
                return t;
            }
            function e$(e) {
                let t = new FormData();
                for (let [r, n] of e.entries()) t.append(r, n);
                return t;
            }
            function eD(e, t, r, n = !1, a = !1) {
                let o,
                    i = {},
                    s = null,
                    l = !1,
                    u = {},
                    c = r && eJ(r[1]) ? r[1].error : void 0;
                return (
                    e.forEach((r) => {
                        if (!(r.route.id in t)) return;
                        let d = r.route.id,
                            h = t[d];
                        if (
                            (f(
                                !eY(h),
                                "Cannot handle redirect results in processLoaderData"
                            ),
                            eJ(h))
                        ) {
                            let t = h.error;
                            if (
                                (void 0 !== c && ((t = c), (c = void 0)),
                                (s = s || {}),
                                a)
                            )
                                s[d] = t;
                            else {
                                let r = eW(e, d);
                                null == s[r.route.id] && (s[r.route.id] = t);
                            }
                            (n || (i[d] = es),
                                l ||
                                    ((l = !0),
                                    (o = X(h.error) ? h.error.status : 500)),
                                h.headers && (u[d] = h.headers));
                        } else
                            ((i[d] = h.data),
                                h.statusCode &&
                                    200 !== h.statusCode &&
                                    !l &&
                                    (o = h.statusCode),
                                h.headers && (u[d] = h.headers));
                    }),
                    void 0 !== c &&
                        r &&
                        ((s = { [r[0]]: c }), r[2] && (i[r[2]] = void 0)),
                    {
                        loaderData: i,
                        errors: s,
                        statusCode: o || 200,
                        loaderHeaders: u,
                    }
                );
            }
            function eI(e, t, r, n, a, o) {
                let { loaderData: i, errors: s } = eD(t, r, n);
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
                                (f(
                                    i,
                                    "Did not find corresponding fetcher result"
                                ),
                                !a || !a.signal.aborted)
                            )
                                if (eJ(i)) {
                                    let t = eW(e.matches, n?.route.id);
                                    ((s && s[t.route.id]) ||
                                        (s = { ...s, [t.route.id]: i.error }),
                                        e.fetchers.delete(r));
                                } else if (eY(i))
                                    f(
                                        !1,
                                        "Unhandled fetcher revalidation redirect"
                                    );
                                else {
                                    let t = e5(i.data);
                                    e.fetchers.set(r, t);
                                }
                        }),
                    { loaderData: i, errors: s }
                );
            }
            function eM(e, t, r, n) {
                let a = Object.entries(t)
                    .filter(([, e]) => e !== es)
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
            function ez(e) {
                return e
                    ? eJ(e[1])
                        ? { actionData: {} }
                        : { actionData: { [e[0]]: e[1].data } }
                    : {};
            }
            function eW(e, t) {
                return (
                    (t
                        ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1)
                        : [...e]
                    )
                        .reverse()
                        .find((e) => !0 === e.route.hasErrorBoundary) || e[0]
                );
            }
            function eU(e) {
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
            function eH(
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
                    new V(e || 500, i, Error(s), !0)
                );
            }
            function eB(e) {
                let t = Object.entries(e);
                for (let e = t.length - 1; e >= 0; e--) {
                    let [r, n] = t[e];
                    if (eY(n)) return { key: r, result: n };
                }
            }
            function eF(e) {
                return g({ ...("string" == typeof e ? v(e) : e), hash: "" });
            }
            function eq(e) {
                return eX(e.result) && Z.has(e.result.status);
            }
            function eJ(e) {
                return "error" === e.type;
            }
            function eY(e) {
                return "redirect" === (e && e.type);
            }
            function eV(e) {
                return (
                    "object" == typeof e &&
                    null != e &&
                    "type" in e &&
                    "data" in e &&
                    "init" in e &&
                    "DataWithResponseInit" === e.type
                );
            }
            function eX(e) {
                return (
                    null != e &&
                    "number" == typeof e.status &&
                    "string" == typeof e.statusText &&
                    "object" == typeof e.headers &&
                    void 0 !== e.body
                );
            }
            function eG(e) {
                return Z.has(e);
            }
            function eK(e) {
                return eX(e) && eG(e.status) && e.headers.has("Location");
            }
            function eQ(e) {
                return Q.has(e.toUpperCase());
            }
            function eZ(e) {
                return K.has(e.toUpperCase());
            }
            function e0(e) {
                return new URLSearchParams(e)
                    .getAll("index")
                    .some((e) => "" === e);
            }
            function e1(e, t) {
                let r = "string" == typeof t ? v(t).search : t.search;
                if (e[e.length - 1].route.index && e0(r || ""))
                    return e[e.length - 1];
                let n = I(e);
                return n[n.length - 1];
            }
            function e2(e) {
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
            function e4(e, t) {
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
            function e3(e, t) {
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
            function e5(e) {
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
            var e8 = o.createContext(null);
            e8.displayName = "DataRouter";
            var e6 = o.createContext(null);
            e6.displayName = "DataRouterState";
            var e7 = o.createContext({ isTransitioning: !1 });
            e7.displayName = "ViewTransition";
            var e9 = o.createContext(new Map());
            e9.displayName = "Fetchers";
            var te = o.createContext(null);
            te.displayName = "Await";
            var tt = o.createContext(null);
            tt.displayName = "Navigation";
            var tr = o.createContext(null);
            tr.displayName = "Location";
            var tn = o.createContext({
                outlet: null,
                matches: [],
                isDataRoute: !1,
            });
            tn.displayName = "Route";
            var ta = o.createContext(null);
            function to() {
                return null != o.useContext(tr);
            }
            function ti() {
                return (
                    f(
                        to(),
                        "useLocation() may be used only in the context of a <Router> component."
                    ),
                    o.useContext(tr).location
                );
            }
            function ts() {
                return o.useContext(tr).navigationType;
            }
            function tl(e) {
                f(
                    to(),
                    "useMatch() may be used only in the context of a <Router> component."
                );
                let { pathname: t } = ti();
                return o.useMemo(() => A(e, _(t)), [t, e]);
            }
            ta.displayName = "RouteError";
            var tu =
                "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
            function tc(e) {
                o.useContext(tt).static || o.useLayoutEffect(e);
            }
            function td() {
                let { isDataRoute: e } = o.useContext(tn);
                return e
                    ? (function () {
                          let { router: e } = tS("useNavigate"),
                              t = tR("useNavigate"),
                              r = o.useRef(!1);
                          return (
                              tc(() => {
                                  r.current = !0;
                              }),
                              o.useCallback(
                                  async (n, a = {}) => {
                                      (p(r.current, tu),
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
                          f(
                              to(),
                              "useNavigate() may be used only in the context of a <Router> component."
                          );
                          let e = o.useContext(e8),
                              { basename: t, navigator: r } = o.useContext(tt),
                              { matches: n } = o.useContext(tn),
                              { pathname: a } = ti(),
                              i = JSON.stringify(M(n)),
                              s = o.useRef(!1);
                          return (
                              tc(() => {
                                  s.current = !0;
                              }),
                              o.useCallback(
                                  (n, o = {}) => {
                                      if ((p(s.current, tu), !s.current))
                                          return;
                                      if ("number" == typeof n)
                                          return void r.go(n);
                                      let l = z(
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
                                                  : W([t, l.pathname])),
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
            var th = o.createContext(null);
            function tf() {
                let { matches: e } = o.useContext(tn),
                    t = e[e.length - 1];
                return t ? t.params : {};
            }
            function tp(e, { relative: t } = {}) {
                let { matches: r } = o.useContext(tn),
                    { pathname: n } = ti(),
                    a = JSON.stringify(M(r));
                return o.useMemo(
                    () => z(e, JSON.parse(a), n, "path" === t),
                    [e, a, n, t]
                );
            }
            function tm(e, t) {
                return ty(e, t);
            }
            function ty(e, t, r, n) {
                let a;
                f(
                    to(),
                    "useRoutes() may be used only in the context of a <Router> component."
                );
                let { navigator: i } = o.useContext(tt),
                    { matches: s } = o.useContext(tn),
                    l = s[s.length - 1],
                    u = l ? l.params : {},
                    c = l ? l.pathname : "/",
                    d = l ? l.pathnameBase : "/",
                    h = l && l.route;
                {
                    let e = (h && h.path) || "";
                    tL(
                        c,
                        !h || e.endsWith("*") || e.endsWith("*?"),
                        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${"/" === e ? "*" : `${e}/*`}">.`
                    );
                }
                let m = ti();
                if (t) {
                    let e = "string" == typeof t ? v(t) : t;
                    (f(
                        "/" === d || e.pathname?.startsWith(d),
                        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`
                    ),
                        (a = e));
                } else a = m;
                let y = a.pathname || "/",
                    g = y;
                if ("/" !== d) {
                    let e = d.replace(/^\//, "").split("/");
                    g =
                        "/" +
                        y
                            .replace(/^\//, "")
                            .split("/")
                            .slice(e.length)
                            .join("/");
                }
                let b = C(e, { pathname: g });
                (p(
                    h || null != b,
                    `No routes matched location "${a.pathname}${a.search}${a.hash}" `
                ),
                    p(
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
                        (f(
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
                            f = null;
                        r &&
                            ((c = i && n.route.id ? i[n.route.id] : void 0),
                            (h = n.route.errorElement || tg),
                            s &&
                                (l < 0 && 0 === u
                                    ? (tL(
                                          "route-fallback",
                                          !1,
                                          "No `HydrateFallback` element provided to render during initial hydration"
                                      ),
                                      (d = !0),
                                      (f = null))
                                    : l === u &&
                                      ((d = !0),
                                      (f =
                                          n.route.hydrateFallbackElement ||
                                          null))));
                        let p = t.concat(a.slice(0, u + 1)),
                            m = () => {
                                let t;
                                return (
                                    (t = c
                                        ? h
                                        : d
                                          ? f
                                          : n.route.Component
                                            ? o.createElement(
                                                  n.route.Component,
                                                  null
                                              )
                                            : n.route.element
                                              ? n.route.element
                                              : e),
                                    o.createElement(tb, {
                                        match: n,
                                        routeContext: {
                                            outlet: e,
                                            matches: p,
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
                            ? o.createElement(tv, {
                                  location: r.location,
                                  revalidation: r.revalidation,
                                  component: h,
                                  error: c,
                                  children: m(),
                                  routeContext: {
                                      outlet: null,
                                      matches: p,
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
                                pathname: W([
                                    d,
                                    i.encodeLocation
                                        ? i.encodeLocation(e.pathname).pathname
                                        : e.pathname,
                                ]),
                                pathnameBase:
                                    "/" === e.pathnameBase
                                        ? d
                                        : W([
                                              d,
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
                          tr.Provider,
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
            var tg = o.createElement(function () {
                    let e = tj(),
                        t = X(e)
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
                tv = class extends o.Component {
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
                                  tn.Provider,
                                  { value: this.props.routeContext },
                                  o.createElement(ta.Provider, {
                                      value: this.state.error,
                                      children: this.props.component,
                                  })
                              )
                            : this.props.children;
                    }
                };
            function tb({ routeContext: e, match: t, children: r }) {
                let n = o.useContext(e8);
                return (
                    n &&
                        n.static &&
                        n.staticContext &&
                        (t.route.errorElement || t.route.ErrorBoundary) &&
                        (n.staticContext._deepestRenderedBoundaryId =
                            t.route.id),
                    o.createElement(tn.Provider, { value: e }, r)
                );
            }
            function tw(e) {
                return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
            }
            function tS(e) {
                let t = o.useContext(e8);
                return (f(t, tw(e)), t);
            }
            function tE(e) {
                let t = o.useContext(e6);
                return (f(t, tw(e)), t);
            }
            function tR(e) {
                let t,
                    r = (f((t = o.useContext(tn)), tw(e)), t),
                    n = r.matches[r.matches.length - 1];
                return (
                    f(
                        n.route.id,
                        `${e} can only be used on routes that contain a unique "id"`
                    ),
                    n.route.id
                );
            }
            function tx() {
                return tE("useNavigation").navigation;
            }
            function tC() {
                let { matches: e, loaderData: t } = tE("useMatches");
                return o.useMemo(() => e.map((e) => N(e, t)), [e, t]);
            }
            function tk() {
                let e = tE("useLoaderData"),
                    t = tR("useLoaderData");
                return e.loaderData[t];
            }
            function tN(e) {
                return tE("useRouteLoaderData").loaderData[e];
            }
            function tj() {
                let e = o.useContext(ta),
                    t = tE("useRouteError"),
                    r = tR("useRouteError");
                return void 0 !== e ? e : t.errors?.[r];
            }
            var tT = 0;
            function tP(e) {
                let { router: t, basename: r } = tS("useBlocker"),
                    n = tE("useBlocker"),
                    [a, i] = o.useState(""),
                    s = o.useCallback(
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
                                    pathname: O(n.pathname, r) || n.pathname,
                                },
                                nextLocation: {
                                    ...a,
                                    pathname: O(a.pathname, r) || a.pathname,
                                },
                                historyAction: o,
                            });
                        },
                        [r, e]
                    );
                return (
                    o.useEffect(() => {
                        let e = String(++tT);
                        return (i(e), () => t.deleteBlocker(e));
                    }, [t]),
                    o.useEffect(() => {
                        "" !== a && t.getBlocker(a, s);
                    }, [t, a, s]),
                    a && n.blockers.has(a) ? n.blockers.get(a) : en
                );
            }
            var tA = {};
            function tL(e, t, r) {
                t || tA[e] || ((tA[e] = !0), p(!1, r));
            }
            var t_ = {};
            function tO(e, t) {
                e || t_[t] || ((t_[t] = !0), console.warn(t));
            }
            function t$(e) {
                let t = {
                    hasErrorBoundary:
                        e.hasErrorBoundary ||
                        null != e.ErrorBoundary ||
                        null != e.errorElement,
                };
                return (
                    e.Component &&
                        (e.element &&
                            p(
                                !1,
                                "You should not include both `Component` and `element` on your route - `Component` will be used."
                            ),
                        Object.assign(t, {
                            element: o.createElement(e.Component),
                            Component: void 0,
                        })),
                    e.HydrateFallback &&
                        (e.hydrateFallbackElement &&
                            p(
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
                            p(
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
            var tD = ["HydrateFallback", "hydrateFallbackElement"],
                tI = class {
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
            function tM({ router: e, flushSync: t }) {
                let [r, n] = o.useState(e.state),
                    [a, i] = o.useState(),
                    [s, l] = o.useState({ isTransitioning: !1 }),
                    [u, c] = o.useState(),
                    [d, h] = o.useState(),
                    [f, p] = o.useState(),
                    m = o.useRef(new Map()),
                    y = o.useCallback(
                        (
                            r,
                            {
                                deletedFetchers: a,
                                flushSync: s,
                                viewTransitionOpts: f,
                            }
                        ) => {
                            (r.fetchers.forEach((e, t) => {
                                void 0 !== e.data && m.current.set(t, e.data);
                            }),
                                a.forEach((e) => m.current.delete(e)),
                                tO(
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
                                (tO(
                                    null == f || y,
                                    "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
                                ),
                                !f || !y)
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
                                            currentLocation: f.currentLocation,
                                            nextLocation: f.nextLocation,
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
                                  p({
                                      state: r,
                                      currentLocation: f.currentLocation,
                                      nextLocation: f.nextLocation,
                                  }))
                                : (i(r),
                                  l({
                                      isTransitioning: !0,
                                      flushSync: !1,
                                      currentLocation: f.currentLocation,
                                      nextLocation: f.nextLocation,
                                  }));
                        },
                        [e.window, t, d, u]
                    );
                (o.useLayoutEffect(() => e.subscribe(y), [e, y]),
                    o.useEffect(() => {
                        s.isTransitioning && !s.flushSync && c(new tI());
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
                            f &&
                            (i(f.state),
                            l({
                                isTransitioning: !0,
                                flushSync: !1,
                                currentLocation: f.currentLocation,
                                nextLocation: f.nextLocation,
                            }),
                            p(void 0));
                    }, [s.isTransitioning, f]));
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
                        e8.Provider,
                        { value: b },
                        o.createElement(
                            e6.Provider,
                            { value: r },
                            o.createElement(
                                e9.Provider,
                                { value: m.current },
                                o.createElement(
                                    e7.Provider,
                                    { value: s },
                                    o.createElement(
                                        tB,
                                        {
                                            basename: v,
                                            location: r.location,
                                            navigationType: r.historyAction,
                                            navigator: g,
                                        },
                                        o.createElement(tz, {
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
            var tz = o.memo(function ({ routes: e, future: t, state: r }) {
                return ty(e, void 0, r, t);
            });
            function tW({ to: e, replace: t, state: r, relative: n }) {
                f(
                    to(),
                    "<Navigate> may be used only in the context of a <Router> component."
                );
                let { static: a } = o.useContext(tt);
                p(
                    !a,
                    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
                );
                let { matches: i } = o.useContext(tn),
                    { pathname: s } = ti(),
                    l = td(),
                    u = JSON.stringify(z(e, M(i), s, "path" === n));
                return (
                    o.useEffect(() => {
                        l(JSON.parse(u), { replace: t, state: r, relative: n });
                    }, [l, u, n, t, r]),
                    null
                );
            }
            function tU(e) {
                var t;
                let r;
                return (
                    (t = e.context),
                    (r = o.useContext(tn).outlet)
                        ? o.createElement(th.Provider, { value: t }, r)
                        : r
                );
            }
            function tH(e) {
                f(
                    !1,
                    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
                );
            }
            function tB({
                basename: e = "/",
                children: t = null,
                location: r,
                navigationType: n = "POP",
                navigator: a,
                static: i = !1,
            }) {
                f(
                    !to(),
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
                "string" == typeof r && (r = v(r));
                let {
                        pathname: u = "/",
                        search: c = "",
                        hash: d = "",
                        state: h = null,
                        key: m = "default",
                    } = r,
                    y = o.useMemo(() => {
                        let e = O(u, s);
                        return null == e
                            ? null
                            : {
                                  location: {
                                      pathname: e,
                                      search: c,
                                      hash: d,
                                      state: h,
                                      key: m,
                                  },
                                  navigationType: n,
                              };
                    }, [s, u, c, d, h, m, n]);
                return (p(
                    null != y,
                    `<Router basename="${s}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`
                ),
                null == y)
                    ? null
                    : o.createElement(
                          tt.Provider,
                          { value: l },
                          o.createElement(tr.Provider, {
                              children: t,
                              value: y,
                          })
                      );
            }
            function tF({ children: e, location: t }) {
                return ty(
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
                                (f(
                                    t.type === tH,
                                    `[${"string" == typeof t.type ? t.type : t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
                                ),
                                    f(
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
            var tq = "get",
                tJ = "application/x-www-form-urlencoded";
            function tY(e) {
                return null != e && "string" == typeof e.tagName;
            }
            function tV(e = "") {
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
            var tX = null,
                tG = new Set([
                    "application/x-www-form-urlencoded",
                    "multipart/form-data",
                    "text/plain",
                ]);
            function tK(e) {
                return null == e || tG.has(e)
                    ? e
                    : (p(
                          !1,
                          `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tJ}"`
                      ),
                      null);
            }
            function tQ(e, t) {
                if (!1 === e || null == e) throw Error(t);
            }
            async function tZ(e, t) {
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
            function t0(e) {
                return e.css
                    ? e.css.map((e) => ({ rel: "stylesheet", href: e }))
                    : [];
            }
            async function t1(e) {
                if (!e.css) return;
                let t = t0(e);
                await Promise.all(t.map(t4));
            }
            async function t2(e, t) {
                if (
                    (!e.css && !t.links) ||
                    !(function () {
                        if (void 0 !== a) return a;
                        let e = document.createElement("link");
                        return (
                            (a = e.relList.supports("preload")),
                            (e = null),
                            a
                        );
                    })()
                )
                    return;
                let r = [];
                if (
                    (e.css && r.push(...t0(e)),
                    t.links && r.push(...t.links()),
                    0 === r.length)
                )
                    return;
                let n = [];
                for (let e of r)
                    t3(e) ||
                        "stylesheet" !== e.rel ||
                        n.push({ ...e, rel: "preload", as: "style" });
                await Promise.all(n.map(t4));
            }
            async function t4(e) {
                return new Promise((t) => {
                    if (
                        (e.media && !window.matchMedia(e.media).matches) ||
                        document.querySelector(
                            `link[rel="stylesheet"][href="${e.href}"]`
                        )
                    )
                        return t();
                    let r = document.createElement("link");
                    function n() {
                        document.head.contains(r) &&
                            document.head.removeChild(r);
                    }
                    (Object.assign(r, e),
                        (r.onload = () => {
                            (n(), t());
                        }),
                        (r.onerror = () => {
                            (n(), t());
                        }),
                        document.head.appendChild(r));
                });
            }
            function t3(e) {
                return null != e && "string" == typeof e.page;
            }
            function t5(e) {
                return (
                    null != e &&
                    (null == e.href
                        ? "preload" === e.rel &&
                          "string" == typeof e.imageSrcSet &&
                          "string" == typeof e.imageSizes
                        : "string" == typeof e.rel && "string" == typeof e.href)
                );
            }
            async function t8(e, t, r) {
                return (function (e, t) {
                    let r = new Set(),
                        n = new Set(t);
                    return e.reduce((e, a) => {
                        if (
                            t &&
                            !t3(a) &&
                            "script" === a.as &&
                            a.href &&
                            n.has(a.href)
                        )
                            return e;
                        let o = JSON.stringify(
                            (function (e) {
                                let t = {};
                                for (let r of Object.keys(e).sort())
                                    t[r] = e[r];
                                return t;
                            })(a)
                        );
                        return (
                            r.has(o) || (r.add(o), e.push({ key: o, link: a })),
                            e
                        );
                    }, []);
                })(
                    (
                        await Promise.all(
                            e.map(async (e) => {
                                let n = t.routes[e.route.id];
                                if (n) {
                                    let e = await tZ(n, r);
                                    return e.links ? e.links() : [];
                                }
                                return [];
                            })
                        )
                    )
                        .flat(1)
                        .filter(t5)
                        .filter(
                            (e) => "stylesheet" === e.rel || "preload" === e.rel
                        )
                        .map((e) =>
                            "stylesheet" === e.rel
                                ? { ...e, rel: "prefetch", as: "style" }
                                : { ...e, rel: "prefetch" }
                        )
                );
            }
            function t6(e, t, r, n, a, o) {
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
            function t7(e, t, { includeHydrateFallback: r } = {}) {
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
            var t9 = {
                    "&": "\\u0026",
                    ">": "\\u003e",
                    "<": "\\u003c",
                    "\u2028": "\\u2028",
                    "\u2029": "\\u2029",
                },
                re = /[&><\u2028\u2029]/g,
                rt = class {
                    constructor() {
                        this.promise = new Promise((e, t) => {
                            ((this.resolve = e), (this.reject = t));
                        });
                    }
                };
            function rr(e) {
                let { indices: t } = this,
                    r = t.get(e);
                if (r) return [r];
                if (
                    null == e ||
                    Number.isNaN(e) ||
                    e === Number.POSITIVE_INFINITY ||
                    e === Number.NEGATIVE_INFINITY ||
                    (0 === e && 1 / e < 0)
                )
                    return null;
                let n = this.index++;
                return (t.set(e, n), rn.call(this, e, n), n);
            }
            function rn(e, t) {
                let { deferred: r, plugins: n, postPlugins: a } = this,
                    o = this.stringified,
                    i = [[e, t]];
                for (; i.length > 0; ) {
                    let [e, t] = i.pop(),
                        s = (e) =>
                            Object.keys(e)
                                .map(
                                    (t) =>
                                        `"_${rr.call(this, t)}":${rr.call(this, e[t])}`
                                )
                                .join(","),
                        l = null;
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                            o[t] = JSON.stringify(e);
                            break;
                        case "bigint":
                            o[t] = `["B","${e}"]`;
                            break;
                        case "symbol": {
                            let r = Symbol.keyFor(e);
                            r
                                ? (o[t] = `["Y",${JSON.stringify(r)}]`)
                                : (l = Error(
                                      "Cannot encode symbol unless created with Symbol.for()"
                                  ));
                            break;
                        }
                        case "object": {
                            if (!e) {
                                o[t] = "null";
                                break;
                            }
                            let a = Array.isArray(e),
                                i = !1;
                            if (!a && n)
                                for (let r of n) {
                                    let n = r(e);
                                    if (Array.isArray(n)) {
                                        i = !0;
                                        let [e, ...r] = n;
                                        ((o[t] = `[${JSON.stringify(e)}`),
                                            r.length > 0 &&
                                                (o[t] +=
                                                    `,${r.map((e) => rr.call(this, e)).join(",")}`),
                                            (o[t] += "]"));
                                        break;
                                    }
                                }
                            if (!i) {
                                let n = a ? "[" : "{";
                                if (a) {
                                    for (let t = 0; t < e.length; t++)
                                        n +=
                                            (t ? "," : "") +
                                            (t in e
                                                ? rr.call(this, e[t])
                                                : null);
                                    o[t] = `${n}]`;
                                } else
                                    e instanceof Date
                                        ? (o[t] = `["D",${e.getTime()}]`)
                                        : e instanceof URL
                                          ? (o[t] =
                                                `["U",${JSON.stringify(e.href)}]`)
                                          : e instanceof RegExp
                                            ? (o[t] =
                                                  `["R",${JSON.stringify(e.source)},${JSON.stringify(e.flags)}]`)
                                            : e instanceof Set
                                              ? e.size > 0
                                                  ? (o[t] =
                                                        `["S",${[...e].map((e) => rr.call(this, e)).join(",")}]`)
                                                  : (o[t] = '["S"]')
                                              : e instanceof Map
                                                ? e.size > 0
                                                    ? (o[t] =
                                                          `["M",${[...e].flatMap(([e, t]) => [rr.call(this, e), rr.call(this, t)]).join(",")}]`)
                                                    : (o[t] = '["M"]')
                                                : e instanceof Promise
                                                  ? ((o[t] = `["P",${t}]`),
                                                    (r[t] = e))
                                                  : e instanceof Error
                                                    ? ((o[t] =
                                                          `["E",${JSON.stringify(e.message)}`),
                                                      "Error" !== e.name &&
                                                          (o[t] +=
                                                              `,${JSON.stringify(e.name)}`),
                                                      (o[t] += "]"))
                                                    : null ===
                                                        Object.getPrototypeOf(e)
                                                      ? (o[t] =
                                                            `["N",{${s(e)}}]`)
                                                      : (function (e) {
                                                              let t =
                                                                  Object.getPrototypeOf(
                                                                      e
                                                                  );
                                                              return (
                                                                  t ===
                                                                      Object.prototype ||
                                                                  null === t ||
                                                                  Object.getOwnPropertyNames(
                                                                      t
                                                                  )
                                                                      .sort()
                                                                      .join(
                                                                          "\0"
                                                                      ) === ra
                                                              );
                                                          })(e)
                                                        ? (o[t] = `{${s(e)}}`)
                                                        : (l = Error(
                                                              "Cannot encode object with prototype"
                                                          ));
                            }
                            break;
                        }
                        default: {
                            let r = Array.isArray(e),
                                a = !1;
                            if (!r && n)
                                for (let r of n) {
                                    let n = r(e);
                                    if (Array.isArray(n)) {
                                        a = !0;
                                        let [e, ...r] = n;
                                        ((o[t] = `[${JSON.stringify(e)}`),
                                            r.length > 0 &&
                                                (o[t] +=
                                                    `,${r.map((e) => rr.call(this, e)).join(",")}`),
                                            (o[t] += "]"));
                                        break;
                                    }
                                }
                            a ||
                                (l = Error(
                                    "Cannot encode function or unexpected type"
                                ));
                        }
                    }
                    if (l) {
                        let r = !1;
                        if (a)
                            for (let n of a) {
                                let a = n(e);
                                if (Array.isArray(a)) {
                                    r = !0;
                                    let [e, ...n] = a;
                                    ((o[t] = `[${JSON.stringify(e)}`),
                                        n.length > 0 &&
                                            (o[t] +=
                                                `,${n.map((e) => rr.call(this, e)).join(",")}`),
                                        (o[t] += "]"));
                                    break;
                                }
                            }
                        if (!r) throw l;
                    }
                }
            }
            var ra = Object.getOwnPropertyNames(Object.prototype)
                    .sort()
                    .join("\0"),
                ro =
                    "undefined" != typeof window
                        ? window
                        : "undefined" != typeof globalThis
                          ? globalThis
                          : void 0;
            function ri(e) {
                let { hydrated: t, values: r } = this;
                if ("number" == typeof e) return rs.call(this, e);
                if (!Array.isArray(e) || !e.length) throw SyntaxError();
                let n = r.length;
                for (let t of e) r.push(t);
                return ((t.length = r.length), rs.call(this, n));
            }
            function rs(e) {
                let t,
                    { hydrated: r, values: n, deferred: a, plugins: o } = this,
                    i = [
                        [
                            e,
                            (e) => {
                                t = e;
                            },
                        ],
                    ],
                    s = [];
                for (; i.length > 0; ) {
                    let [e, t] = i.pop();
                    switch (e) {
                        case null:
                            t(void 0);
                            continue;
                        case null:
                            t(null);
                            continue;
                        case null:
                            t(NaN);
                            continue;
                        case null:
                            t(1 / 0);
                            continue;
                        case null:
                            t(-1 / 0);
                            continue;
                        case null:
                            t(-0);
                            continue;
                    }
                    if (r[e]) {
                        t(r[e]);
                        continue;
                    }
                    let l = n[e];
                    if (!l || "object" != typeof l) {
                        ((r[e] = l), t(l));
                        continue;
                    }
                    if (Array.isArray(l))
                        if ("string" == typeof l[0]) {
                            let [n, u, c] = l;
                            switch (n) {
                                case "D":
                                    t((r[e] = new Date(u)));
                                    continue;
                                case "U":
                                    t((r[e] = new URL(u)));
                                    continue;
                                case "B":
                                    t((r[e] = BigInt(u)));
                                    continue;
                                case "R":
                                    t((r[e] = new RegExp(u, c)));
                                    continue;
                                case "Y":
                                    t((r[e] = Symbol.for(u)));
                                    continue;
                                case "S":
                                    let d = new Set();
                                    r[e] = d;
                                    for (let e = l.length - 1; e > 0; e--)
                                        i.push([
                                            l[e],
                                            (e) => {
                                                d.add(e);
                                            },
                                        ]);
                                    t(d);
                                    continue;
                                case "M":
                                    let h = new Map();
                                    r[e] = h;
                                    for (let e = l.length - 2; e > 0; e -= 2) {
                                        let t = [];
                                        (i.push([
                                            l[e + 1],
                                            (e) => {
                                                t[1] = e;
                                            },
                                        ]),
                                            i.push([
                                                l[e],
                                                (e) => {
                                                    t[0] = e;
                                                },
                                            ]),
                                            s.push(() => {
                                                h.set(t[0], t[1]);
                                            }));
                                    }
                                    t(h);
                                    continue;
                                case "N":
                                    let f = Object.create(null);
                                    for (let t of ((r[e] = f),
                                    Object.keys(u).reverse())) {
                                        let e = [];
                                        (i.push([
                                            u[t],
                                            (t) => {
                                                e[1] = t;
                                            },
                                        ]),
                                            i.push([
                                                Number(t.slice(1)),
                                                (t) => {
                                                    e[0] = t;
                                                },
                                            ]),
                                            s.push(() => {
                                                f[e[0]] = e[1];
                                            }));
                                    }
                                    t(f);
                                    continue;
                                case "P":
                                    if (r[u]) t((r[e] = r[u]));
                                    else {
                                        let n = new rt();
                                        ((a[u] = n), t((r[e] = n.promise)));
                                    }
                                    continue;
                                case "E":
                                    let [, p, m] = l,
                                        y =
                                            m && ro && ro[m]
                                                ? new ro[m](p)
                                                : Error(p);
                                    ((r[e] = y), t(y));
                                    continue;
                                case "Z":
                                    t((r[e] = r[u]));
                                    continue;
                                default:
                                    if (Array.isArray(o)) {
                                        let n = [],
                                            a = l.slice(1);
                                        for (let e = 0; e < a.length; e++) {
                                            let t = a[e];
                                            i.push([
                                                t,
                                                (t) => {
                                                    n[e] = t;
                                                },
                                            ]);
                                        }
                                        s.push(() => {
                                            for (let a of o) {
                                                let o = a(l[0], ...n);
                                                if (o)
                                                    return void t(
                                                        (r[e] = o.value)
                                                    );
                                            }
                                            throw SyntaxError();
                                        });
                                        continue;
                                    }
                                    throw SyntaxError();
                            }
                        } else {
                            let n = [];
                            r[e] = n;
                            for (let e = 0; e < l.length; e++) {
                                let t = l[e];
                                null !== t &&
                                    i.push([
                                        t,
                                        (t) => {
                                            n[e] = t;
                                        },
                                    ]);
                            }
                            t(n);
                            continue;
                        }
                    {
                        let n = {};
                        for (let t of ((r[e] = n), Object.keys(l).reverse())) {
                            let e = [];
                            (i.push([
                                l[t],
                                (t) => {
                                    e[1] = t;
                                },
                            ]),
                                i.push([
                                    Number(t.slice(1)),
                                    (t) => {
                                        e[0] = t;
                                    },
                                ]),
                                s.push(() => {
                                    n[e[0]] = e[1];
                                }));
                        }
                        t(n);
                        continue;
                    }
                }
                for (; s.length > 0; ) s.pop()();
                return t;
            }
            async function rl(e, t) {
                let { plugins: r } = t ?? {},
                    n = new rt(),
                    a = e
                        .pipeThrough(
                            (function () {
                                let e = new TextDecoder(),
                                    t = "";
                                return new TransformStream({
                                    transform(r, n) {
                                        let a = e.decode(r, { stream: !0 }),
                                            o = (t + a).split(`
`);
                                        for (let e of ((t = o.pop() || ""), o))
                                            n.enqueue(e);
                                    },
                                    flush(e) {
                                        t && e.enqueue(t);
                                    },
                                });
                            })()
                        )
                        .getReader(),
                    o = { values: [], hydrated: [], deferred: {}, plugins: r },
                    i = await ru.call(o, a),
                    s = n.promise;
                return (
                    i.done
                        ? n.resolve()
                        : (s = rc
                              .call(o, a)
                              .then(n.resolve)
                              .catch((e) => {
                                  for (let t of Object.values(o.deferred))
                                      t.reject(e);
                                  n.reject(e);
                              })),
                    { done: s.then(() => a.closed), value: i.value }
                );
            }
            async function ru(e) {
                let t,
                    r = await e.read();
                if (!r.value) throw SyntaxError();
                try {
                    t = JSON.parse(r.value);
                } catch (e) {
                    throw SyntaxError();
                }
                return { done: r.done, value: ri.call(this, t) };
            }
            async function rc(e) {
                let t = await e.read();
                for (; !t.done; ) {
                    if (!t.value) continue;
                    let r = t.value;
                    switch (r[0]) {
                        case "P": {
                            let e,
                                t = r.indexOf(":"),
                                n = Number(r.slice(1, t)),
                                a = this.deferred[n];
                            if (!a)
                                throw Error(
                                    `Deferred ID ${n} not found in stream`
                                );
                            let o = r.slice(t + 1);
                            try {
                                e = JSON.parse(o);
                            } catch (e) {
                                throw SyntaxError();
                            }
                            let i = ri.call(this, e);
                            a.resolve(i);
                            break;
                        }
                        case "E": {
                            let e,
                                t = r.indexOf(":"),
                                n = Number(r.slice(1, t)),
                                a = this.deferred[n];
                            if (!a)
                                throw Error(
                                    `Deferred ID ${n} not found in stream`
                                );
                            let o = r.slice(t + 1);
                            try {
                                e = JSON.parse(o);
                            } catch (e) {
                                throw SyntaxError();
                            }
                            let i = ri.call(this, e);
                            a.reject(i);
                            break;
                        }
                        default:
                            throw SyntaxError();
                    }
                    t = await e.read();
                }
            }
            async function rd(e) {
                let t = { signal: e.signal };
                if ("GET" !== e.method) {
                    t.method = e.method;
                    let r = e.headers.get("Content-Type");
                    r && /\bapplication\/json\b/.test(r)
                        ? ((t.headers = { "Content-Type": r }),
                          (t.body = JSON.stringify(await e.json())))
                        : r && /\btext\/plain\b/.test(r)
                          ? ((t.headers = { "Content-Type": r }),
                            (t.body = await e.text()))
                          : r &&
                              /\bapplication\/x-www-form-urlencoded\b/.test(r)
                            ? (t.body = new URLSearchParams(await e.text()))
                            : (t.body = await e.formData());
                }
                return t;
            }
            var rh = Symbol("SingleFetchRedirect"),
                rf = class extends null {},
                rp = new Set([100, 101, 204, 205]);
            function rm({
                context: e,
                identifier: t,
                reader: r,
                textDecoder: n,
                nonce: a,
            }) {
                if (!e.renderMeta || !e.renderMeta.didRenderScripts)
                    return null;
                e.renderMeta.streamCache || (e.renderMeta.streamCache = {});
                let { streamCache: o } = e.renderMeta,
                    i = o[t];
                if (
                    (i ||
                        (i = o[t] =
                            r
                                .read()
                                .then((e) => {
                                    o[t].result = {
                                        done: e.done,
                                        value: n.decode(e.value, {
                                            stream: !0,
                                        }),
                                    };
                                })
                                .catch((e) => {
                                    o[t].error = e;
                                })),
                    i.error)
                )
                    throw i.error;
                if (void 0 === i.result) throw i;
                let { done: s, value: l } = i.result,
                    u = l
                        ? React4.createElement("script", {
                              nonce: a,
                              dangerouslySetInnerHTML: {
                                  __html: `window.__reactRouterContext.streamController.enqueue(${JSON.stringify(l).replace(re, (e) => t9[e])});`,
                              },
                          })
                        : null;
                return s
                    ? React4.createElement(
                          React4.Fragment,
                          null,
                          u,
                          React4.createElement("script", {
                              nonce: a,
                              dangerouslySetInnerHTML: {
                                  __html: "window.__reactRouterContext.streamController.close();",
                              },
                          })
                      )
                    : React4.createElement(
                          React4.Fragment,
                          null,
                          u,
                          React4.createElement(
                              React4.Suspense,
                              null,
                              React4.createElement(rm, {
                                  context: e,
                                  identifier: t + 1,
                                  reader: r,
                                  textDecoder: n,
                                  nonce: a,
                              })
                          )
                      );
            }
            async function ry(e, t, r, n) {
                try {
                    let a,
                        o = await e;
                    if ("routes" in o) {
                        for (let e of t)
                            if (e.route.id in o.routes) {
                                let t = o.routes[e.route.id];
                                if ("error" in t) {
                                    a = t.error;
                                    break;
                                }
                            }
                    }
                    void 0 !== a &&
                        Array.from(r.values()).forEach((e) => {
                            n[e].result instanceof rf && (n[e].result = a);
                        });
                } catch (e) {}
            }
            function rg(e, t) {
                let r =
                    "string" == typeof e
                        ? new URL(
                              e,
                              "undefined" == typeof window
                                  ? "server://singlefetch/"
                                  : window.location.origin
                          )
                        : e;
                return (
                    "/" === r.pathname
                        ? (r.pathname = "_root.data")
                        : t && "/" === O(r.pathname, t)
                          ? (r.pathname = `${t.replace(/\/$/, "")}/_root.data`)
                          : (r.pathname = `${r.pathname.replace(/\/$/, "")}.data`),
                    r
                );
            }
            function rv(e, t) {
                return rl(e, {
                    plugins: [
                        (e, ...r) => {
                            if ("SanitizedError" === e) {
                                let [e, n, a] = r,
                                    o = Error;
                                e &&
                                    e in t &&
                                    "function" == typeof t[e] &&
                                    (o = t[e]);
                                let i = new o(n);
                                return ((i.stack = a), { value: i });
                            }
                            if ("ErrorResponse" === e) {
                                let [e, t, n] = r;
                                return { value: new V(t, n, e) };
                            }
                            return "SingleFetchRedirect" === e
                                ? { value: { [rh]: r[0] } }
                                : "SingleFetchClassInstance" === e
                                  ? { value: r[0] }
                                  : "SingleFetchFallback" === e
                                    ? { value: void 0 }
                                    : void 0;
                        },
                    ],
                });
            }
            function rb(e, t) {
                if ("redirect" in e) {
                    let {
                        redirect: t,
                        revalidate: r,
                        reload: n,
                        replace: a,
                        status: o,
                    } = e.redirect;
                    throw q(t, {
                        status: o,
                        headers: {
                            ...(r ? { "X-Remix-Revalidate": "yes" } : null),
                            ...(n
                                ? { "X-Remix-Reload-Document": "yes" }
                                : null),
                            ...(a ? { "X-Remix-Replace": "yes" } : null),
                        },
                    });
                }
                let r = e.routes[t];
                if (null == r)
                    throw new rf(`No result found for routeId "${t}"`);
                if ("error" in r) throw r.error;
                if ("data" in r) return r.data;
                throw Error(`Invalid response found for routeId "${t}"`);
            }
            function rw() {
                let e,
                    t,
                    r = new Promise((n, a) => {
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
                    });
                return { promise: r, resolve: e, reject: t };
            }
            function rS({ error: e, isOutsideRemixApp: t }) {
                let r;
                console.error(e);
                let n = o.createElement("script", {
                    dangerouslySetInnerHTML: {
                        __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `,
                    },
                });
                return X(e)
                    ? o.createElement(
                          rE,
                          { title: "Unhandled Thrown Response!" },
                          o.createElement(
                              "h1",
                              { style: { fontSize: "24px" } },
                              e.status,
                              " ",
                              e.statusText
                          ),
                          n
                      )
                    : ((r =
                          e instanceof Error
                              ? e
                              : Error(
                                    null == e
                                        ? "Unknown Error"
                                        : "object" == typeof e &&
                                            "toString" in e
                                          ? e.toString()
                                          : JSON.stringify(e)
                                )),
                      o.createElement(
                          rE,
                          { title: "Application Error!", isOutsideRemixApp: t },
                          o.createElement(
                              "h1",
                              { style: { fontSize: "24px" } },
                              "Application Error"
                          ),
                          o.createElement(
                              "pre",
                              {
                                  style: {
                                      padding: "2rem",
                                      background: "hsla(10, 50%, 50%, 0.1)",
                                      color: "red",
                                      overflow: "auto",
                                  },
                              },
                              r.stack
                          ),
                          n
                      ));
            }
            function rE({
                title: e,
                renderScripts: t,
                isOutsideRemixApp: r,
                children: n,
            }) {
                let { routeModules: a } = r$();
                return a.root?.Layout && !r
                    ? n
                    : o.createElement(
                          "html",
                          { lang: "en" },
                          o.createElement(
                              "head",
                              null,
                              o.createElement("meta", { charSet: "utf-8" }),
                              o.createElement("meta", {
                                  name: "viewport",
                                  content:
                                      "width=device-width,initial-scale=1,viewport-fit=cover",
                              }),
                              o.createElement("title", null, e)
                          ),
                          o.createElement(
                              "body",
                              null,
                              o.createElement(
                                  "main",
                                  {
                                      style: {
                                          fontFamily: "system-ui, sans-serif",
                                          padding: "2rem",
                                      },
                                  },
                                  n,
                                  t ? o.createElement(rW, null) : null
                              )
                          )
                      );
            }
            function rR() {
                return React6.createElement(
                    rE,
                    { title: "Loading...", renderScripts: !0 },
                    React6.createElement("script", {
                        dangerouslySetInnerHTML: {
                            __html: `
              console.log(
                "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            `,
                        },
                    })
                );
            }
            o.Component;
            function rx(e, t) {
                if (
                    ("loader" === e && !t.hasLoader) ||
                    ("action" === e && !t.hasAction)
                ) {
                    let r = `You are trying to call ${"action" === e ? "serverAction()" : "serverLoader()"} on a route that does not have a server ${e} (routeId: "${t.id}")`;
                    throw (
                        console.error(r),
                        new V(400, "Bad Request", Error(r), !0)
                    );
                }
            }
            function rC(e, t) {
                let r = "clientAction" === e ? "a" : "an",
                    n = `Route "${t}" does not have ${r} ${e}, but you are trying to submit to it. To fix this, please add ${r} \`${e}\` function to the route`;
                throw (
                    console.error(n),
                    new V(405, "Method Not Allowed", Error(n), !0)
                );
            }
            function rk(e, t, r, n, a) {
                if (a) {
                    var o, i, s;
                    let e;
                    return (
                        (o = r.id),
                        (i = t.shouldRevalidate),
                        (s = a),
                        (e = !1),
                        (t) =>
                            e
                                ? i
                                    ? i(t)
                                    : t.defaultShouldRevalidate
                                : ((e = !0), s.has(o))
                    );
                }
                if (!n && r.hasLoader && !r.hasClientLoader) {
                    let r = e ? L(e)[1].map((e) => e.paramName) : [],
                        n = (e) =>
                            r.some(
                                (t) => e.currentParams[t] !== e.nextParams[t]
                            );
                    if (!t.shouldRevalidate) return (e) => n(e);
                    {
                        let e = t.shouldRevalidate;
                        return (t) =>
                            e({ ...t, defaultShouldRevalidate: n(t) });
                    }
                }
                if (n && t.shouldRevalidate) {
                    let e = t.shouldRevalidate;
                    return (t) => e({ ...t, defaultShouldRevalidate: !0 });
                }
                return t.shouldRevalidate;
            }
            async function rN(e, t) {
                let r = tZ(e, t),
                    n = t1(e),
                    a = await r;
                return (
                    await Promise.all([n, t2(e, a)]),
                    {
                        Component: rj(a),
                        ErrorBoundary: a.ErrorBoundary,
                        unstable_clientMiddleware: a.unstable_clientMiddleware,
                        clientAction: a.clientAction,
                        clientLoader: a.clientLoader,
                        handle: a.handle,
                        links: a.links,
                        meta: a.meta,
                        shouldRevalidate: a.shouldRevalidate,
                    }
                );
            }
            function rj(e) {
                if (
                    null != e.default &&
                    ("object" != typeof e.default ||
                        0 !== Object.keys(e.default).length)
                )
                    return e.default;
            }
            var rT = new Set(),
                rP = new Set(),
                rA = "react-router-manifest-version";
            function rL() {
                let e = o.useContext(e8);
                return (
                    tQ(
                        e,
                        "You must render this element inside a <DataRouterContext.Provider> element"
                    ),
                    e
                );
            }
            function r_() {
                let e = o.useContext(e6);
                return (
                    tQ(
                        e,
                        "You must render this element inside a <DataRouterStateContext.Provider> element"
                    ),
                    e
                );
            }
            var rO = o.createContext(void 0);
            function r$() {
                let e = o.useContext(rO);
                return (
                    tQ(
                        e,
                        "You must render this element inside a <HydratedRouter> element"
                    ),
                    e
                );
            }
            function rD(e, t) {
                return (r) => {
                    (e && e(r), r.defaultPrevented || t(r));
                };
            }
            rO.displayName = "FrameworkContext";
            function rI({ page: e, ...t }) {
                let { router: r } = rL(),
                    n = o.useMemo(
                        () => C(r.routes, e, r.basename),
                        [r.routes, e, r.basename]
                    );
                return n
                    ? o.createElement(rM, { page: e, matches: n, ...t })
                    : null;
            }
            function rM({ page: e, matches: t, ...r }) {
                let n = ti(),
                    { manifest: a, routeModules: i } = r$(),
                    { basename: s } = rL(),
                    { loaderData: l, matches: u } = r_(),
                    c = o.useMemo(
                        () => t6(e, t, u, a, n, "data"),
                        [e, t, u, a, n]
                    ),
                    d = o.useMemo(
                        () => t6(e, t, u, a, n, "assets"),
                        [e, t, u, a, n]
                    ),
                    h = o.useMemo(() => {
                        if (e === n.pathname + n.search + n.hash) return [];
                        let r = new Set(),
                            o = !1;
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
                                        ? (o = !0)
                                        : r.add(e.route.id));
                            }),
                            0 === r.size)
                        )
                            return [];
                        let u = rg(e, s);
                        return (
                            o &&
                                r.size > 0 &&
                                u.searchParams.set(
                                    "_routes",
                                    t
                                        .filter((e) => r.has(e.route.id))
                                        .map((e) => e.route.id)
                                        .join(",")
                                ),
                            [u.pathname + u.search]
                        );
                    }, [s, l, n, a, c, t, e, i]),
                    f = o.useMemo(() => t7(d, a), [d, a]),
                    p = (function (e) {
                        let { manifest: t, routeModules: r } = r$(),
                            [n, a] = o.useState([]);
                        return (
                            o.useEffect(() => {
                                let n = !1;
                                return (
                                    t8(e, t, r).then((e) => {
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
                    f.map((e) =>
                        o.createElement("link", {
                            key: e,
                            rel: "modulepreload",
                            href: e,
                            ...r,
                        })
                    ),
                    p.map(({ key: e, link: t }) =>
                        o.createElement("link", { key: e, ...t })
                    )
                );
            }
            var rz = !1;
            function rW(e) {
                var t, r;
                let {
                        manifest: n,
                        serverHandoffString: a,
                        isSpaMode: i,
                        renderMeta: s,
                        routeDiscovery: l,
                        ssr: u,
                    } = r$(),
                    { router: c, static: d, staticContext: h } = rL(),
                    { matches: f } = r_(),
                    p = ((t = l), (r = u), "lazy" === t.mode && !0 === r);
                s && (s.didRenderScripts = !0);
                let m = (function (e, t, r) {
                    if (r && !rz) return [e[0]];
                    !1;
                    return e;
                })(f, null, i);
                o.useEffect(() => {
                    rz = !0;
                }, []);
                let y = o.useMemo(() => {
                        let t = h
                                ? `window.__reactRouterContext = ${a};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`
                                : " ",
                            r = d
                                ? `${n.hmr?.runtime ? `import ${JSON.stringify(n.hmr.runtime)};` : ""}${!p ? `import ${JSON.stringify(n.url)}` : ""};
${m.map((e, t) => {
    let r = `route${t}`,
        a = n.routes[e.route.id];
    tQ(a, `Route ${e.route.id} not found in manifest`);
    let {
            clientActionModule: o,
            clientLoaderModule: i,
            clientMiddlewareModule: s,
            hydrateFallbackModule: l,
            module: u,
        } = a,
        c = [
            ...(o ? [{ module: o, varName: `${r}_clientAction` }] : []),
            ...(i ? [{ module: i, varName: `${r}_clientLoader` }] : []),
            ...(s ? [{ module: s, varName: `${r}_clientMiddleware` }] : []),
            ...(l ? [{ module: l, varName: `${r}_HydrateFallback` }] : []),
            { module: u, varName: `${r}_main` },
        ];
    return 1 === c.length
        ? `import * as ${r} from ${JSON.stringify(u)};`
        : [
              c.map((e) => `import * as ${e.varName} from "${e.module}";`)
                  .join(`
`),
              `const ${r} = {${c.map((e) => `...${e.varName}`).join(",")}};`,
          ].join(`
`);
}).join(`
`)}
  ${
      p
          ? `window.__reactRouterManifest = ${JSON.stringify(
                (function ({ sri: e, ...t }, r) {
                    let n = new Set(r.state.matches.map((e) => e.route.id)),
                        a = r.state.location.pathname
                            .split("/")
                            .filter(Boolean),
                        o = ["/"];
                    for (a.pop(); a.length > 0; )
                        (o.push(`/${a.join("/")}`), a.pop());
                    o.forEach((e) => {
                        let t = C(r.routes, e, r.basename);
                        t && t.forEach((e) => n.add(e.route.id));
                    });
                    let i = [...n].reduce(
                        (e, r) => Object.assign(e, { [r]: t.routes[r] }),
                        {}
                    );
                    return { ...t, routes: i, sri: !!e || void 0 };
                })(n, c),
                null,
                2
            )};`
          : ""
  }
  window.__reactRouterRouteModules = {${m.map((e, t) => `${JSON.stringify(e.route.id)}:route${t}`).join(",")}};

import(${JSON.stringify(n.entry.module)});`
                                : " ";
                        return o.createElement(
                            o.Fragment,
                            null,
                            o.createElement("script", {
                                ...e,
                                suppressHydrationWarning: !0,
                                dangerouslySetInnerHTML: { __html: t },
                                type: void 0,
                            }),
                            o.createElement("script", {
                                ...e,
                                suppressHydrationWarning: !0,
                                dangerouslySetInnerHTML: { __html: r },
                                type: "module",
                                async: !0,
                            })
                        );
                    }, []),
                    g = rz
                        ? []
                        : [
                              ...new Set(
                                  n.entry.imports.concat(
                                      t7(m, n, { includeHydrateFallback: !0 })
                                  )
                              ),
                          ],
                    v = "object" == typeof n.sri ? n.sri : {};
                return rz
                    ? null
                    : o.createElement(
                          o.Fragment,
                          null,
                          "object" == typeof n.sri
                              ? o.createElement("script", {
                                    "rr-importmap": "",
                                    type: "importmap",
                                    suppressHydrationWarning: !0,
                                    dangerouslySetInnerHTML: {
                                        __html: JSON.stringify({
                                            integrity: v,
                                        }),
                                    },
                                })
                              : null,
                          p
                              ? null
                              : o.createElement("link", {
                                    rel: "modulepreload",
                                    href: n.url,
                                    crossOrigin: e.crossOrigin,
                                    integrity: v[n.url],
                                    suppressHydrationWarning: !0,
                                }),
                          o.createElement("link", {
                              rel: "modulepreload",
                              href: n.entry.module,
                              crossOrigin: e.crossOrigin,
                              integrity: v[n.entry.module],
                              suppressHydrationWarning: !0,
                          }),
                          g.map((t) =>
                              o.createElement("link", {
                                  key: t,
                                  rel: "modulepreload",
                                  href: t,
                                  crossOrigin: e.crossOrigin,
                                  integrity: v[t],
                                  suppressHydrationWarning: !0,
                              })
                          ),
                          y
                      );
            }
            var rU =
                "undefined" != typeof window &&
                void 0 !== window.document &&
                void 0 !== window.document.createElement;
            try {
                rU && (window.__reactRouterVersion = "7.6.3");
            } catch (e) {}
            function rH(e, t) {
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
                    f(
                        e.routes.length > 0,
                        "You must provide a non-empty routes array to createRouter"
                    );
                    let l = e.hydrationRouteProperties || [],
                        u = e.mapRouteProperties || eo,
                        c = {},
                        d = x(e.routes, u, void 0, c),
                        h = e.basename || "/",
                        m = e.dataStrategy || eE,
                        g = { unstable_middleware: !1, ...e.future },
                        v = null,
                        b = new Set(),
                        E = null,
                        R = null,
                        j = null,
                        T = null != e.hydrationData,
                        P = C(d, e.history.location, h),
                        A = !1,
                        L = null;
                    if (null != P || e.patchRoutesOnNavigation)
                        if (
                            (P &&
                                !e.hydrationData &&
                                e7(P, d, e.history.location.pathname).active &&
                                (P = null),
                            P)
                        )
                            if (P.some((e) => e.route.lazy)) r = !1;
                            else if (P.some((e) => e.route.loader)) {
                                let t = e.hydrationData
                                        ? e.hydrationData.loaderData
                                        : null,
                                    n = e.hydrationData
                                        ? e.hydrationData.errors
                                        : null;
                                if (n) {
                                    let e = P.findIndex(
                                        (e) => void 0 !== n[e.route.id]
                                    );
                                    r = P.slice(0, e + 1).every(
                                        (e) => !ef(e.route, t, n)
                                    );
                                } else r = P.every((e) => !ef(e.route, t, n));
                            } else r = !0;
                        else {
                            ((r = !1), (P = []));
                            let t = e7(null, d, e.history.location.pathname);
                            t.active &&
                                t.matches &&
                                ((A = !0), (P = t.matches));
                        }
                    else {
                        let t = eH(404, {
                                pathname: e.history.location.pathname,
                            }),
                            { matches: n, route: a } = eU(d);
                        ((r = !0), (P = n), (L = { [a.id]: t }));
                    }
                    let _ = {
                            historyAction: e.history.action,
                            location: e.history.location,
                            matches: P,
                            initialized: r,
                            navigation: et,
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
                                L,
                            fetchers: new Map(),
                            blockers: new Map(),
                        },
                        $ = "POP",
                        D = !1,
                        I = !1,
                        M = new Map(),
                        z = null,
                        W = !1,
                        U = !1,
                        H = new Set(),
                        B = new Map(),
                        F = 0,
                        q = -1,
                        J = new Map(),
                        Y = new Set(),
                        V = new Map(),
                        G = new Map(),
                        K = new Set(),
                        Q = new Map(),
                        Z = null;
                    function es(e, t = {}) {
                        _ = { ..._, ...e };
                        let r = [],
                            n = [];
                        (_.fetchers.forEach((e, t) => {
                            "idle" === e.state &&
                                (K.has(t) ? r.push(t) : n.push(t));
                        }),
                            K.forEach((e) => {
                                _.fetchers.has(e) || B.has(e) || r.push(e);
                            }),
                            [...b].forEach((e) =>
                                e(_, {
                                    deletedFetchers: r,
                                    viewTransitionOpts: t.viewTransitionOpts,
                                    flushSync: !0 === t.flushSync,
                                })
                            ),
                            r.forEach((e) => e$(e)),
                            n.forEach((e) => _.fetchers.delete(e)));
                    }
                    function el(r, n, { flushSync: a } = {}) {
                        let o,
                            i,
                            s =
                                null != _.actionData &&
                                null != _.navigation.formMethod &&
                                eZ(_.navigation.formMethod) &&
                                "loading" === _.navigation.state &&
                                r.state?._isRedirect !== !0;
                        o = n.actionData
                            ? Object.keys(n.actionData).length > 0
                                ? n.actionData
                                : null
                            : s
                              ? _.actionData
                              : null;
                        let l = n.loaderData
                                ? eM(
                                      _.loaderData,
                                      n.loaderData,
                                      n.matches || [],
                                      n.errors
                                  )
                                : _.loaderData,
                            u = _.blockers;
                        u.size > 0 &&
                            (u = new Map(u)).forEach((e, t) => u.set(t, en));
                        let c =
                            !0 === D ||
                            (null != _.navigation.formMethod &&
                                eZ(_.navigation.formMethod) &&
                                r.state?._isRedirect !== !0);
                        if (
                            (t && ((d = t), (t = void 0)),
                            W ||
                                "POP" === $ ||
                                ("PUSH" === $
                                    ? e.history.push(r, r.state)
                                    : "REPLACE" === $ &&
                                      e.history.replace(r, r.state)),
                            "POP" === $)
                        ) {
                            let e = M.get(_.location.pathname);
                            e && e.has(r.pathname)
                                ? (i = {
                                      currentLocation: _.location,
                                      nextLocation: r,
                                  })
                                : M.has(r.pathname) &&
                                  (i = {
                                      currentLocation: r,
                                      nextLocation: _.location,
                                  });
                        } else if (I) {
                            let e = M.get(_.location.pathname);
                            (e
                                ? e.add(r.pathname)
                                : ((e = new Set([r.pathname])),
                                  M.set(_.location.pathname, e)),
                                (i = {
                                    currentLocation: _.location,
                                    nextLocation: r,
                                }));
                        }
                        (es(
                            {
                                ...n,
                                actionData: o,
                                loaderData: l,
                                historyAction: $,
                                location: r,
                                initialized: !0,
                                navigation: et,
                                revalidation: "idle",
                                restoreScrollPosition: e6(
                                    r,
                                    n.matches || _.matches
                                ),
                                preventScrollReset: c,
                                blockers: u,
                            },
                            { viewTransitionOpts: i, flushSync: !0 === a }
                        ),
                            ($ = "POP"),
                            (D = !1),
                            (I = !1),
                            (W = !1),
                            (U = !1),
                            Z?.resolve(),
                            (Z = null));
                    }
                    async function eu(t, r) {
                        if ("number" == typeof t) return void e.history.go(t);
                        let {
                                path: n,
                                submission: a,
                                error: o,
                            } = ed(
                                !1,
                                ec(
                                    _.location,
                                    _.matches,
                                    h,
                                    t,
                                    r?.fromRouteId,
                                    r?.relative
                                ),
                                r
                            ),
                            i = _.location,
                            s = y(_.location, n, r && r.state);
                        s = { ...s, ...e.history.encodeLocation(s) };
                        let l = r && null != r.replace ? r.replace : void 0,
                            u = "PUSH";
                        !0 === l
                            ? (u = "REPLACE")
                            : !1 === l ||
                              (null != a &&
                                  eZ(a.formMethod) &&
                                  a.formAction ===
                                      _.location.pathname + _.location.search &&
                                  (u = "REPLACE"));
                        let c =
                                r && "preventScrollReset" in r
                                    ? !0 === r.preventScrollReset
                                    : void 0,
                            d = !0 === (r && r.flushSync),
                            f = eQ({
                                currentLocation: i,
                                nextLocation: s,
                                historyAction: u,
                            });
                        if (f)
                            return void eK(f, {
                                state: "blocked",
                                location: s,
                                proceed() {
                                    (eK(f, {
                                        state: "proceeding",
                                        proceed: void 0,
                                        reset: void 0,
                                        location: s,
                                    }),
                                        eu(t, r));
                                },
                                reset() {
                                    let e = new Map(_.blockers);
                                    (e.set(f, en), es({ blockers: e }));
                                },
                            });
                        await ep(u, s, {
                            submission: a,
                            pendingError: o,
                            preventScrollReset: c,
                            replace: r && r.replace,
                            enableViewTransition: r && r.viewTransition,
                            flushSync: d,
                        });
                    }
                    async function ep(r, n, o) {
                        var i, s, l, u;
                        let c;
                        (a && a.abort(),
                            (a = null),
                            ($ = r),
                            (W =
                                !0 === (o && o.startUninterruptedRevalidation)),
                            (i = _.location),
                            (s = _.matches),
                            E && j && (E[e8(i, s)] = j()),
                            (D = !0 === (o && o.preventScrollReset)),
                            (I = !0 === (o && o.enableViewTransition)));
                        let f = t || d,
                            p = o && o.overrideNavigation,
                            m =
                                o?.initialHydration &&
                                _.matches &&
                                _.matches.length > 0 &&
                                !A
                                    ? _.matches
                                    : C(f, n, h),
                            y = !0 === (o && o.flushSync);
                        if (
                            m &&
                            _.initialized &&
                            !U &&
                            ((l = _.location),
                            (u = n),
                            l.pathname === u.pathname &&
                                l.search === u.search &&
                                ("" === l.hash
                                    ? "" !== u.hash
                                    : l.hash === u.hash ||
                                      "" !== u.hash ||
                                      !1)) &&
                            !(o && o.submission && eZ(o.submission.formMethod))
                        )
                            return void el(n, { matches: m }, { flushSync: y });
                        let g = e7(m, f, n.pathname);
                        if ((g.active && g.matches && (m = g.matches), !m)) {
                            let {
                                error: e,
                                notFoundMatches: t,
                                route: r,
                            } = e0(n.pathname);
                            el(
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
                        let v = e_(e.history, n, a.signal, o && o.submission),
                            b = new S(
                                e.unstable_getContext
                                    ? await e.unstable_getContext()
                                    : void 0
                            );
                        if (o && o.pendingError)
                            c = [
                                eW(m).route.id,
                                { type: "error", error: o.pendingError },
                            ];
                        else if (
                            o &&
                            o.submission &&
                            eZ(o.submission.formMethod)
                        ) {
                            let t = await ey(
                                v,
                                n,
                                o.submission,
                                m,
                                b,
                                g.active,
                                o && !0 === o.initialHydration,
                                { replace: o.replace, flushSync: y }
                            );
                            if (t.shortCircuited) return;
                            if (t.pendingActionResult) {
                                let [e, r] = t.pendingActionResult;
                                if (
                                    eJ(r) &&
                                    X(r.error) &&
                                    404 === r.error.status
                                ) {
                                    ((a = null),
                                        el(n, {
                                            matches: t.matches,
                                            loaderData: {},
                                            errors: { [e]: r.error },
                                        }));
                                    return;
                                }
                            }
                            ((m = t.matches || m),
                                (c = t.pendingActionResult),
                                (p = e4(n, o.submission)),
                                (y = !1),
                                (g.active = !1),
                                (v = e_(e.history, v.url, v.signal)));
                        }
                        let {
                            shortCircuited: w,
                            matches: R,
                            loaderData: x,
                            errors: k,
                        } = await eg(
                            v,
                            n,
                            m,
                            b,
                            g.active,
                            p,
                            o && o.submission,
                            o && o.fetcherSubmission,
                            o && o.replace,
                            o && !0 === o.initialHydration,
                            y,
                            c
                        );
                        w ||
                            ((a = null),
                            el(n, {
                                matches: R || m,
                                ...ez(c),
                                loaderData: x,
                                errors: k,
                            }));
                    }
                    async function ey(e, t, r, n, a, o, i, s = {}) {
                        var d;
                        let f;
                        if (
                            (eC(),
                            es(
                                {
                                    navigation: {
                                        state: "submitting",
                                        location: t,
                                        formMethod: (d = r).formMethod,
                                        formAction: d.formAction,
                                        formEncType: d.formEncType,
                                        formData: d.formData,
                                        json: d.json,
                                        text: d.text,
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
                                let e = eW(r.partialMatches).route.id;
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
                                } = e0(t.pathname);
                                return {
                                    matches: e,
                                    pendingActionResult: [
                                        n.id,
                                        { type: "error", error: r },
                                    ],
                                };
                            }
                        }
                        let p = e1(n, t);
                        if (p.route.action || p.route.lazy) {
                            let t = eN(u, c, e, n, p, i ? [] : l, a),
                                r = await eR(e, t, a, null);
                            if (!(f = r[p.route.id])) {
                                for (let e of n)
                                    if (r[e.route.id]) {
                                        f = r[e.route.id];
                                        break;
                                    }
                            }
                            if (e.signal.aborted) return { shortCircuited: !0 };
                        } else
                            f = {
                                type: "error",
                                error: eH(405, {
                                    method: e.method,
                                    pathname: t.pathname,
                                    routeId: p.route.id,
                                }),
                            };
                        if (eY(f)) {
                            let t;
                            return (
                                (t =
                                    s && null != s.replace
                                        ? s.replace
                                        : eL(
                                              f.response.headers.get(
                                                  "Location"
                                              ),
                                              new URL(e.url),
                                              h
                                          ) ===
                                          _.location.pathname +
                                              _.location.search),
                                await eS(e, f, !0, {
                                    submission: r,
                                    replace: t,
                                }),
                                { shortCircuited: !0 }
                            );
                        }
                        if (eJ(f)) {
                            let e = eW(n, p.route.id);
                            return (
                                !0 !== (s && s.replace) && ($ = "PUSH"),
                                {
                                    matches: n,
                                    pendingActionResult: [
                                        e.route.id,
                                        f,
                                        p.route.id,
                                    ],
                                }
                            );
                        }
                        return {
                            matches: n,
                            pendingActionResult: [p.route.id, f],
                        };
                    }
                    async function eg(r, n, o, i, s, f, p, m, y, g, v, b) {
                        let w = f || e4(n, p),
                            S = p || m || e2(w),
                            E = !W && !g;
                        if (s) {
                            if (E) {
                                let e = ev(b);
                                es(
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
                                let t = eW(e.partialMatches).route.id;
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
                                } = e0(n.pathname);
                                return {
                                    matches: t,
                                    loaderData: {},
                                    errors: { [r.id]: e },
                                };
                            }
                        }
                        let R = t || d,
                            { dsMatches: x, revalidatingFetchers: C } = eh(
                                r,
                                i,
                                u,
                                c,
                                e.history,
                                _,
                                o,
                                S,
                                n,
                                g ? [] : l,
                                !0 === g,
                                U,
                                H,
                                K,
                                V,
                                Y,
                                R,
                                h,
                                null != e.patchRoutesOnNavigation,
                                b
                            );
                        if (
                            ((q = ++F),
                            !e.dataStrategy &&
                                !x.some((e) => e.shouldLoad) &&
                                0 === C.length)
                        ) {
                            let e = eV();
                            return (
                                el(
                                    n,
                                    {
                                        matches: o,
                                        loaderData: {},
                                        errors:
                                            b && eJ(b[1])
                                                ? { [b[0]]: b[1].error }
                                                : null,
                                        ...ez(b),
                                        ...(e
                                            ? { fetchers: new Map(_.fetchers) }
                                            : {}),
                                    },
                                    { flushSync: v }
                                ),
                                { shortCircuited: !0 }
                            );
                        }
                        if (E) {
                            let e = {};
                            if (!s) {
                                e.navigation = w;
                                let t = ev(b);
                                void 0 !== t && (e.actionData = t);
                            }
                            (C.length > 0 &&
                                (C.forEach((e) => {
                                    let t = _.fetchers.get(e.key),
                                        r = e3(void 0, t ? t.data : void 0);
                                    _.fetchers.set(e.key, r);
                                }),
                                (e.fetchers = new Map(_.fetchers))),
                                es(e, { flushSync: v }));
                        }
                        C.forEach((e) => {
                            (eD(e.key),
                                e.controller && B.set(e.key, e.controller));
                        });
                        let k = () => C.forEach((e) => eD(e.key));
                        a && a.signal.addEventListener("abort", k);
                        let { loaderResults: N, fetcherResults: j } = await ex(
                            x,
                            C,
                            r,
                            i
                        );
                        if (r.signal.aborted) return { shortCircuited: !0 };
                        (a && a.signal.removeEventListener("abort", k),
                            C.forEach((e) => B.delete(e.key)));
                        let T = eB(N);
                        if (T)
                            return (
                                await eS(r, T.result, !0, { replace: y }),
                                { shortCircuited: !0 }
                            );
                        if ((T = eB(j)))
                            return (
                                Y.add(T.key),
                                await eS(r, T.result, !0, { replace: y }),
                                { shortCircuited: !0 }
                            );
                        let { loaderData: P, errors: A } = eI(_, o, N, b, C, j);
                        g && _.errors && (A = { ..._.errors, ...A });
                        let L = eV(),
                            O = eX(q);
                        return {
                            matches: o,
                            loaderData: P,
                            errors: A,
                            ...(L || O || C.length > 0
                                ? { fetchers: new Map(_.fetchers) }
                                : {}),
                        };
                    }
                    function ev(e) {
                        if (e && !eJ(e[1])) return { [e[0]]: e[1].data };
                        if (_.actionData)
                            if (0 === Object.keys(_.actionData).length)
                                return null;
                            else return _.actionData;
                    }
                    async function eb(r, n, o, i, s, p, m, y, g, v) {
                        var b, w;
                        function S(e) {
                            if (!e.route.action && !e.route.lazy) {
                                let e = eH(405, {
                                    method: v.formMethod,
                                    pathname: o,
                                    routeId: n,
                                });
                                return (eT(r, n, e, { flushSync: y }), !0);
                            }
                            return !1;
                        }
                        if ((eC(), V.delete(r), !m && S(i))) return;
                        let E = _.fetchers.get(r);
                        ek(
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
                        let R = new AbortController(),
                            x = e_(e.history, o, R.signal, v);
                        if (m) {
                            let e = await e9(s, o, x.signal, r);
                            if ("aborted" === e.type) return;
                            if ("error" === e.type)
                                return void eT(r, n, e.error, { flushSync: y });
                            if (!e.matches)
                                return void eT(r, n, eH(404, { pathname: o }), {
                                    flushSync: y,
                                });
                            if (S((i = e1((s = e.matches), o)))) return;
                        }
                        B.set(r, R);
                        let k = F,
                            N = eN(u, c, x, s, i, l, p),
                            j = (await eR(x, N, p, r))[i.route.id];
                        if (x.signal.aborted) {
                            B.get(r) === R && B.delete(r);
                            return;
                        }
                        if (K.has(r)) {
                            if (eY(j) || eJ(j)) return void ek(r, e5(void 0));
                        } else {
                            if (eY(j))
                                return (B.delete(r), q > k)
                                    ? void ek(r, e5(void 0))
                                    : (Y.add(r),
                                      ek(r, e3(v)),
                                      eS(x, j, !1, {
                                          fetcherSubmission: v,
                                          preventScrollReset: g,
                                      }));
                            if (eJ(j)) return void eT(r, n, j.error);
                        }
                        let T = _.navigation.location || _.location,
                            P = e_(e.history, T, R.signal),
                            A = t || d,
                            L =
                                "idle" !== _.navigation.state
                                    ? C(A, _.navigation.location, h)
                                    : _.matches;
                        f(L, "Didn't find any matches after fetcher action");
                        let O = ++F;
                        J.set(r, O);
                        let D = e3(v, j.data);
                        _.fetchers.set(r, D);
                        let { dsMatches: I, revalidatingFetchers: M } = eh(
                            P,
                            p,
                            u,
                            c,
                            e.history,
                            _,
                            L,
                            v,
                            T,
                            l,
                            !1,
                            U,
                            H,
                            K,
                            V,
                            Y,
                            A,
                            h,
                            null != e.patchRoutesOnNavigation,
                            [i.route.id, j]
                        );
                        (M.filter((e) => e.key !== r).forEach((e) => {
                            let t = e.key,
                                r = _.fetchers.get(t),
                                n = e3(void 0, r ? r.data : void 0);
                            (_.fetchers.set(t, n),
                                eD(t),
                                e.controller && B.set(t, e.controller));
                        }),
                            es({ fetchers: new Map(_.fetchers) }));
                        let z = () => M.forEach((e) => eD(e.key));
                        R.signal.addEventListener("abort", z);
                        let { loaderResults: W, fetcherResults: X } = await ex(
                            I,
                            M,
                            P,
                            p
                        );
                        if (R.signal.aborted) return;
                        if (
                            (R.signal.removeEventListener("abort", z),
                            J.delete(r),
                            B.delete(r),
                            M.forEach((e) => B.delete(e.key)),
                            _.fetchers.has(r))
                        ) {
                            let e = e5(j.data);
                            _.fetchers.set(r, e);
                        }
                        let G = eB(W);
                        if (G)
                            return eS(P, G.result, !1, {
                                preventScrollReset: g,
                            });
                        if ((G = eB(X)))
                            return (
                                Y.add(G.key),
                                eS(P, G.result, !1, { preventScrollReset: g })
                            );
                        let { loaderData: Q, errors: Z } = eI(
                            _,
                            L,
                            W,
                            void 0,
                            M,
                            X
                        );
                        (eX(O),
                            "loading" === _.navigation.state && O > q
                                ? (f($, "Expected pending action"),
                                  a && a.abort(),
                                  el(_.navigation.location, {
                                      matches: L,
                                      loaderData: Q,
                                      errors: Z,
                                      fetchers: new Map(_.fetchers),
                                  }))
                                : (es({
                                      errors: Z,
                                      loaderData: eM(_.loaderData, Q, L, Z),
                                      fetchers: new Map(_.fetchers),
                                  }),
                                  (U = !1)));
                    }
                    async function ew(t, r, n, a, o, i, s, d, h, f) {
                        let p = _.fetchers.get(t);
                        ek(t, e3(f, p ? p.data : void 0), { flushSync: d });
                        let m = new AbortController(),
                            y = e_(e.history, n, m.signal);
                        if (s) {
                            let e = await e9(o, n, y.signal, t);
                            if ("aborted" === e.type) return;
                            if ("error" === e.type)
                                return void eT(t, r, e.error, { flushSync: d });
                            if (!e.matches)
                                return void eT(t, r, eH(404, { pathname: n }), {
                                    flushSync: d,
                                });
                            a = e1((o = e.matches), n);
                        }
                        B.set(t, m);
                        let g = F,
                            v = eN(u, c, y, o, a, l, i),
                            b = (await eR(y, v, i, t))[a.route.id];
                        if (
                            (B.get(t) === m && B.delete(t), !y.signal.aborted)
                        ) {
                            if (K.has(t)) return void ek(t, e5(void 0));
                            if (eY(b))
                                if (q > g) return void ek(t, e5(void 0));
                                else {
                                    (Y.add(t),
                                        await eS(y, b, !1, {
                                            preventScrollReset: h,
                                        }));
                                    return;
                                }
                            if (eJ(b)) return void eT(t, r, b.error);
                            ek(t, e5(b.data));
                        }
                    }
                    async function eS(
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
                            (U = !0);
                        let c = t.response.headers.get("Location");
                        (f(
                            c,
                            "Expected a Location header on the redirect Response"
                        ),
                            (c = eL(c, new URL(e.url), h)));
                        let d = y(_.location, c, { _isRedirect: !0 });
                        if (s) {
                            let e = !1;
                            if (
                                t.response.headers.has(
                                    "X-Remix-Reload-Document"
                                )
                            )
                                e = !0;
                            else if (ea.test(c)) {
                                let t = w(c, !0);
                                e =
                                    t.origin !== i.location.origin ||
                                    null == O(t.pathname, h);
                            }
                            if (e)
                                return void (u
                                    ? i.location.replace(c)
                                    : i.location.assign(c));
                        }
                        a = null;
                        let p =
                                !0 === u ||
                                t.response.headers.has("X-Remix-Replace")
                                    ? "REPLACE"
                                    : "PUSH",
                            {
                                formMethod: m,
                                formAction: g,
                                formEncType: v,
                            } = _.navigation;
                        !n && !o && m && g && v && (n = e2(_.navigation));
                        let b = n || o;
                        if (ee.has(t.response.status) && b && eZ(b.formMethod))
                            await ep(p, d, {
                                submission: { ...b, formAction: c },
                                preventScrollReset: l || D,
                                enableViewTransition: r ? I : void 0,
                            });
                        else {
                            let e = e4(d, n);
                            await ep(p, d, {
                                overrideNavigation: e,
                                fetcherSubmission: o,
                                preventScrollReset: l || D,
                                enableViewTransition: r ? I : void 0,
                            });
                        }
                    }
                    async function eR(e, t, r, n) {
                        let a,
                            o = {};
                        try {
                            a = await ej(m, e, t, n, r, !1);
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
                        for (let [r, n] of Object.entries(a))
                            if (eq(n)) {
                                let a = n.result;
                                o[r] = {
                                    type: "redirect",
                                    response: eA(a, e, r, t, h),
                                };
                            } else o[r] = await eP(n);
                        return o;
                    }
                    async function ex(e, t, r, n) {
                        let a = eR(r, e, n, null),
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
                                                error: eH(404, {
                                                    pathname: e.path,
                                                }),
                                            },
                                        });
                                    {
                                        let t = (
                                            await eR(
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
                    function eC() {
                        ((U = !0),
                            V.forEach((e, t) => {
                                (B.has(t) && H.add(t), eD(t));
                            }));
                    }
                    function ek(e, t, r = {}) {
                        (_.fetchers.set(e, t),
                            es(
                                { fetchers: new Map(_.fetchers) },
                                { flushSync: !0 === (r && r.flushSync) }
                            ));
                    }
                    function eT(e, t, r, n = {}) {
                        let a = eW(_.matches, t);
                        (e$(e),
                            es(
                                {
                                    errors: { [a.route.id]: r },
                                    fetchers: new Map(_.fetchers),
                                },
                                { flushSync: !0 === (n && n.flushSync) }
                            ));
                    }
                    function eO(e) {
                        return (
                            G.set(e, (G.get(e) || 0) + 1),
                            K.has(e) && K.delete(e),
                            _.fetchers.get(e) || er
                        );
                    }
                    function e$(e) {
                        let t = _.fetchers.get(e);
                        (B.has(e) &&
                            !(t && "loading" === t.state && J.has(e)) &&
                            eD(e),
                            V.delete(e),
                            J.delete(e),
                            Y.delete(e),
                            K.delete(e),
                            H.delete(e),
                            _.fetchers.delete(e));
                    }
                    function eD(e) {
                        let t = B.get(e);
                        t && (t.abort(), B.delete(e));
                    }
                    function eF(e) {
                        for (let t of e) {
                            let e = e5(eO(t).data);
                            _.fetchers.set(t, e);
                        }
                    }
                    function eV() {
                        let e = [],
                            t = !1;
                        for (let r of Y) {
                            let n = _.fetchers.get(r);
                            (f(n, `Expected fetcher: ${r}`),
                                "loading" === n.state &&
                                    (Y.delete(r), e.push(r), (t = !0)));
                        }
                        return (eF(e), t);
                    }
                    function eX(e) {
                        let t = [];
                        for (let [r, n] of J)
                            if (n < e) {
                                let e = _.fetchers.get(r);
                                (f(e, `Expected fetcher: ${r}`),
                                    "loading" === e.state &&
                                        (eD(r), J.delete(r), t.push(r)));
                            }
                        return (eF(t), t.length > 0);
                    }
                    function eG(e) {
                        (_.blockers.delete(e), Q.delete(e));
                    }
                    function eK(e, t) {
                        let r = _.blockers.get(e) || en;
                        f(
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
                        let n = new Map(_.blockers);
                        (n.set(e, t), es({ blockers: n }));
                    }
                    function eQ({
                        currentLocation: e,
                        nextLocation: t,
                        historyAction: r,
                    }) {
                        if (0 === Q.size) return;
                        Q.size > 1 &&
                            p(
                                !1,
                                "A router only supports one blocker at a time"
                            );
                        let n = Array.from(Q.entries()),
                            [a, o] = n[n.length - 1],
                            i = _.blockers.get(a);
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
                    function e0(e) {
                        let r = eH(404, { pathname: e }),
                            { matches: n, route: a } = eU(t || d);
                        return { notFoundMatches: n, route: a, error: r };
                    }
                    function e8(e, t) {
                        return (
                            (R &&
                                R(
                                    e,
                                    t.map((e) => N(e, _.loaderData))
                                )) ||
                            e.key
                        );
                    }
                    function e6(e, t) {
                        if (E) {
                            let r = E[e8(e, t)];
                            if ("number" == typeof r) return r;
                        }
                        return null;
                    }
                    function e7(t, r, n) {
                        if (e.patchRoutesOnNavigation) {
                            if (!t)
                                return {
                                    active: !0,
                                    matches: k(r, n, h, !0) || [],
                                };
                            else if (Object.keys(t[0].params).length > 0)
                                return { active: !0, matches: k(r, n, h, !0) };
                        }
                        return { active: !1, matches: null };
                    }
                    async function e9(r, n, a, o) {
                        if (!e.patchRoutesOnNavigation)
                            return { type: "success", matches: r };
                        let i = r;
                        for (;;) {
                            let r = null == t,
                                s = t || d,
                                l = c;
                            try {
                                await e.patchRoutesOnNavigation({
                                    signal: a,
                                    path: n,
                                    matches: i,
                                    fetcherKey: o,
                                    patch: (e, t) => {
                                        a.aborted || em(e, t, s, l, u);
                                    },
                                });
                            } catch (e) {
                                return {
                                    type: "error",
                                    error: e,
                                    partialMatches: i,
                                };
                            } finally {
                                r && !a.aborted && (d = [...d]);
                            }
                            if (a.aborted) return { type: "aborted" };
                            let f = C(s, n, h);
                            if (f) return { type: "success", matches: f };
                            let p = k(s, n, h, !0);
                            if (
                                !p ||
                                (i.length === p.length &&
                                    i.every(
                                        (e, t) => e.route.id === p[t].route.id
                                    ))
                            )
                                return { type: "success", matches: null };
                            i = p;
                        }
                    }
                    return (n = {
                        get basename() {
                            return h;
                        },
                        get future() {
                            return g;
                        },
                        get state() {
                            return _;
                        },
                        get routes() {
                            return d;
                        },
                        get window() {
                            return i;
                        },
                        initialize: function () {
                            if (
                                ((v = e.history.listen(
                                    ({ action: t, location: r, delta: n }) => {
                                        if (o) {
                                            (o(), (o = void 0));
                                            return;
                                        }
                                        p(
                                            0 === Q.size || null != n,
                                            "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
                                        );
                                        let a = eQ({
                                            currentLocation: _.location,
                                            nextLocation: r,
                                            historyAction: t,
                                        });
                                        if (a && null != n) {
                                            let t = new Promise((e) => {
                                                o = e;
                                            });
                                            (e.history.go(-1 * n),
                                                eK(a, {
                                                    state: "blocked",
                                                    location: r,
                                                    proceed() {
                                                        (eK(a, {
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
                                                            _.blockers
                                                        );
                                                        (e.set(a, en),
                                                            es({
                                                                blockers: e,
                                                            }));
                                                    },
                                                }));
                                            return;
                                        }
                                        return ep(t, r);
                                    }
                                )),
                                s)
                            ) {
                                var t = i,
                                    r = M;
                                try {
                                    let e = t.sessionStorage.getItem(ei);
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
                                                    ei,
                                                    JSON.stringify(r)
                                                );
                                            } catch (e) {
                                                p(
                                                    !1,
                                                    `Failed to save applied view transitions in sessionStorage (${e}).`
                                                );
                                            }
                                        }
                                    })(i, M);
                                (i.addEventListener("pagehide", e),
                                    (z = () =>
                                        i.removeEventListener("pagehide", e)));
                            }
                            return (
                                _.initialized ||
                                    ep("POP", _.location, {
                                        initialHydration: !0,
                                    }),
                                n
                            );
                        },
                        subscribe: function (e) {
                            return (b.add(e), () => b.delete(e));
                        },
                        enableScrollRestoration: function (e, t, r) {
                            if (
                                ((E = e),
                                (j = t),
                                (R = r || null),
                                !T && _.navigation === et)
                            ) {
                                T = !0;
                                let e = e6(_.location, _.matches);
                                null != e && es({ restoreScrollPosition: e });
                            }
                            return () => {
                                ((E = null), (j = null), (R = null));
                            };
                        },
                        navigate: eu,
                        fetch: async function r(r, n, a, o) {
                            eD(r);
                            let i = !0 === (o && o.flushSync),
                                s = t || d,
                                l = ec(
                                    _.location,
                                    _.matches,
                                    h,
                                    a,
                                    n,
                                    o?.relative
                                ),
                                u = C(s, l, h),
                                c = e7(u, s, l);
                            if ((c.active && c.matches && (u = c.matches), !u))
                                return void eT(r, n, eH(404, { pathname: l }), {
                                    flushSync: i,
                                });
                            let {
                                path: f,
                                submission: p,
                                error: m,
                            } = ed(!0, l, o);
                            if (m) return void eT(r, n, m, { flushSync: i });
                            let y = e1(u, f),
                                g = new S(
                                    e.unstable_getContext
                                        ? await e.unstable_getContext()
                                        : void 0
                                ),
                                v = !0 === (o && o.preventScrollReset);
                            if (p && eZ(p.formMethod))
                                return void (await eb(
                                    r,
                                    n,
                                    f,
                                    y,
                                    u,
                                    g,
                                    c.active,
                                    i,
                                    v,
                                    p
                                ));
                            (V.set(r, { routeId: n, path: f }),
                                await ew(r, n, f, y, u, g, c.active, i, v, p));
                        },
                        revalidate: function () {
                            let e, t, r;
                            (Z ||
                                (Z = {
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
                                eC(),
                                es({ revalidation: "loading" }));
                            let n = Z.promise;
                            return (
                                "submitting" === _.navigation.state ||
                                    ("idle" === _.navigation.state
                                        ? ep(_.historyAction, _.location, {
                                              startUninterruptedRevalidation:
                                                  !0,
                                          })
                                        : ep(
                                              $ || _.historyAction,
                                              _.navigation.location,
                                              {
                                                  overrideNavigation:
                                                      _.navigation,
                                                  enableViewTransition:
                                                      !0 === I,
                                              }
                                          )),
                                n
                            );
                        },
                        createHref: (t) => e.history.createHref(t),
                        encodeLocation: (t) => e.history.encodeLocation(t),
                        getFetcher: eO,
                        deleteFetcher: function (e) {
                            let t = (G.get(e) || 0) - 1;
                            (t <= 0 ? (G.delete(e), K.add(e)) : G.set(e, t),
                                es({ fetchers: new Map(_.fetchers) }));
                        },
                        dispose: function () {
                            (v && v(),
                                z && z(),
                                b.clear(),
                                a && a.abort(),
                                _.fetchers.forEach((e, t) => e$(t)),
                                _.blockers.forEach((e, t) => eG(t)));
                        },
                        getBlocker: function (e, t) {
                            let r = _.blockers.get(e) || en;
                            return (Q.get(e) !== t && Q.set(e, t), r);
                        },
                        deleteBlocker: eG,
                        patchRoutes: function (e, r) {
                            let n = null == t;
                            (em(e, r, t || d, c, u),
                                n && ((d = [...d]), es({})));
                        },
                        _internalFetchControllers: B,
                        _internalSetRoutes: function (e) {
                            t = x(e, u, void 0, (c = {}));
                        },
                    });
                })({
                    basename: t?.basename,
                    unstable_getContext: t?.unstable_getContext,
                    future: t?.future,
                    history: h({ window: t?.window }),
                    hydrationData:
                        t?.hydrationData ||
                        (function () {
                            let e = window?.__staticRouterHydrationData;
                            return (
                                e &&
                                    e.errors &&
                                    (e = {
                                        ...e,
                                        errors: (function (e) {
                                            if (!e) return null;
                                            let t = Object.entries(e),
                                                r = {};
                                            for (let [e, n] of t)
                                                if (
                                                    n &&
                                                    "RouteErrorResponse" ===
                                                        n.__type
                                                )
                                                    r[e] = new V(
                                                        n.status,
                                                        n.statusText,
                                                        n.data,
                                                        !0 === n.internal
                                                    );
                                                else if (
                                                    n &&
                                                    "Error" === n.__type
                                                ) {
                                                    if (n.__subType) {
                                                        let t =
                                                            window[n.__subType];
                                                        if (
                                                            "function" ==
                                                            typeof t
                                                        )
                                                            try {
                                                                let a = new t(
                                                                    n.message
                                                                );
                                                                ((a.stack = ""),
                                                                    (r[e] = a));
                                                            } catch (e) {}
                                                    }
                                                    if (null == r[e]) {
                                                        let t = Error(
                                                            n.message
                                                        );
                                                        ((t.stack = ""),
                                                            (r[e] = t));
                                                    }
                                                } else r[e] = n;
                                            return r;
                                        })(e.errors),
                                    }),
                                e
                            );
                        })(),
                    routes: e,
                    mapRouteProperties: t$,
                    hydrationRouteProperties: tD,
                    dataStrategy: t?.dataStrategy,
                    patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
                    window: t?.window,
                }).initialize();
            }
            function rB({ basename: e, children: t, window: r }) {
                let n = o.useRef();
                null == n.current &&
                    (n.current = h({ window: r, v5Compat: !0 }));
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
                    o.createElement(tB, {
                        basename: e,
                        children: t,
                        location: i.location,
                        navigationType: i.action,
                        navigator: a,
                    })
                );
            }
            var rF = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                rq = o.forwardRef(function (
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
                        preventScrollReset: c,
                        viewTransition: d,
                        ...h
                    },
                    m
                ) {
                    let y,
                        { basename: g } = o.useContext(tt),
                        v = "string" == typeof u && rF.test(u),
                        b = !1;
                    if ("string" == typeof u && v && ((y = u), rU))
                        try {
                            let e = new URL(window.location.href),
                                t = new URL(
                                    u.startsWith("//") ? e.protocol + u : u
                                ),
                                r = O(t.pathname, g);
                            t.origin === e.origin && null != r
                                ? (u = r + t.search + t.hash)
                                : (b = !0);
                        } catch (e) {
                            p(
                                !1,
                                `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
                            );
                        }
                    let w = (function (e, { relative: t } = {}) {
                            f(
                                to(),
                                "useHref() may be used only in the context of a <Router> component."
                            );
                            let { basename: r, navigator: n } =
                                    o.useContext(tt),
                                {
                                    hash: a,
                                    pathname: i,
                                    search: s,
                                } = tp(e, { relative: t }),
                                l = i;
                            return (
                                "/" !== r && (l = "/" === i ? r : W([r, i])),
                                n.createHref({
                                    pathname: l,
                                    search: s,
                                    hash: a,
                                })
                            );
                        })(u, { relative: n }),
                        [S, E, R] = (function (e, t) {
                            let r = o.useContext(rO),
                                [n, a] = o.useState(!1),
                                [i, s] = o.useState(!1),
                                {
                                    onFocus: l,
                                    onBlur: u,
                                    onMouseEnter: c,
                                    onMouseLeave: d,
                                    onTouchStart: h,
                                } = t,
                                f = o.useRef(null);
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
                                        f.current && e.observe(f.current),
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
                            let p = () => {
                                    a(!0);
                                },
                                m = () => {
                                    (a(!1), s(!1));
                                };
                            return r
                                ? "intent" !== e
                                    ? [i, f, {}]
                                    : [
                                          i,
                                          f,
                                          {
                                              onFocus: rD(l, p),
                                              onBlur: rD(u, m),
                                              onMouseEnter: rD(c, p),
                                              onMouseLeave: rD(d, m),
                                              onTouchStart: rD(h, p),
                                          },
                                      ]
                                : [!1, f, {}];
                        })(r, h),
                        x = rK(u, {
                            replace: i,
                            state: s,
                            target: l,
                            preventScrollReset: c,
                            relative: n,
                            viewTransition: d,
                        }),
                        C = o.createElement("a", {
                            ...h,
                            ...R,
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
                            })(m, E),
                            target: l,
                            "data-discover":
                                v || "render" !== t ? void 0 : "true",
                        });
                    return S && !v
                        ? o.createElement(
                              o.Fragment,
                              null,
                              C,
                              o.createElement(rI, { page: w })
                          )
                        : C;
                });
            rq.displayName = "Link";
            var rJ = o.forwardRef(function (
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
                c
            ) {
                let d,
                    h = tp(i, { relative: u.relative }),
                    p = ti(),
                    m = o.useContext(e6),
                    { navigator: y, basename: g } = o.useContext(tt),
                    v =
                        null != m &&
                        (function (e, t = {}) {
                            let r = o.useContext(e7);
                            f(
                                null != r,
                                "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
                            );
                            let { basename: n } = rG("useViewTransitionState"),
                                a = tp(e, { relative: t.relative });
                            if (!r.isTransitioning) return !1;
                            let i =
                                    O(r.currentLocation.pathname, n) ||
                                    r.currentLocation.pathname,
                                s =
                                    O(r.nextLocation.pathname, n) ||
                                    r.nextLocation.pathname;
                            return (
                                null != A(a.pathname, s) ||
                                null != A(a.pathname, i)
                            );
                        })(h) &&
                        !0 === s,
                    b = y.encodeLocation
                        ? y.encodeLocation(h).pathname
                        : h.pathname,
                    w = p.pathname,
                    S =
                        m && m.navigation && m.navigation.location
                            ? m.navigation.location.pathname
                            : null;
                (t ||
                    ((w = w.toLowerCase()),
                    (S = S ? S.toLowerCase() : null),
                    (b = b.toLowerCase())),
                    S && g && (S = O(S, g) || S));
                let E = "/" !== b && b.endsWith("/") ? b.length - 1 : b.length,
                    R =
                        w === b ||
                        (!n && w.startsWith(b) && "/" === w.charAt(E)),
                    x =
                        null != S &&
                        (S === b ||
                            (!n &&
                                S.startsWith(b) &&
                                "/" === S.charAt(b.length))),
                    C = { isActive: R, isPending: x, isTransitioning: v },
                    k = R ? e : void 0;
                d =
                    "function" == typeof r
                        ? r(C)
                        : [
                              r,
                              R ? "active" : null,
                              x ? "pending" : null,
                              v ? "transitioning" : null,
                          ]
                              .filter(Boolean)
                              .join(" ");
                let N = "function" == typeof a ? a(C) : a;
                return o.createElement(
                    rq,
                    {
                        ...u,
                        "aria-current": k,
                        className: d,
                        ref: c,
                        style: N,
                        to: i,
                        viewTransition: s,
                    },
                    "function" == typeof l ? l(C) : l
                );
            });
            rJ.displayName = "NavLink";
            var rY = o.forwardRef(
                (
                    {
                        discover: e = "render",
                        fetcherKey: t,
                        navigate: r,
                        reloadDocument: n,
                        replace: a,
                        state: i,
                        method: s = tq,
                        action: l,
                        onSubmit: u,
                        relative: c,
                        preventScrollReset: d,
                        viewTransition: h,
                        ...p
                    },
                    m
                ) => {
                    let y = (function () {
                            let { router: e } = rG("useSubmit"),
                                { basename: t } = o.useContext(tt),
                                r = tR("useRouteId");
                            return o.useCallback(
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
                                            tY(e) &&
                                            "form" === e.tagName.toLowerCase()
                                        ) {
                                            let i = e.getAttribute("action");
                                            ((n = i ? O(i, t) : null),
                                                (r =
                                                    e.getAttribute("method") ||
                                                    tq),
                                                (a =
                                                    tK(
                                                        e.getAttribute(
                                                            "enctype"
                                                        )
                                                    ) || tJ),
                                                (o = new FormData(e)));
                                        } else if (
                                            (tY(e) &&
                                                "button" ===
                                                    e.tagName.toLowerCase()) ||
                                            (tY(e) &&
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
                                                e.getAttribute("formaction") ||
                                                i.getAttribute("action");
                                            if (
                                                ((n = s ? O(s, t) : null),
                                                (r =
                                                    e.getAttribute(
                                                        "formmethod"
                                                    ) ||
                                                    i.getAttribute("method") ||
                                                    tq),
                                                (a =
                                                    tK(
                                                        e.getAttribute(
                                                            "formenctype"
                                                        )
                                                    ) ||
                                                    tK(
                                                        i.getAttribute(
                                                            "enctype"
                                                        )
                                                    ) ||
                                                    tJ),
                                                (o = new FormData(i, e)),
                                                !(function () {
                                                    if (null === tX)
                                                        try {
                                                            (new FormData(
                                                                document.createElement(
                                                                    "form"
                                                                ),
                                                                0
                                                            ),
                                                                (tX = !1));
                                                        } catch (e) {
                                                            tX = !0;
                                                        }
                                                    return tX;
                                                })())
                                            ) {
                                                let {
                                                    name: t,
                                                    type: r,
                                                    value: n,
                                                } = e;
                                                if ("image" === r) {
                                                    let e = t ? `${t}.` : "";
                                                    (o.append(`${e}x`, "0"),
                                                        o.append(`${e}y`, "0"));
                                                } else t && o.append(t, n);
                                            }
                                        } else if (tY(e))
                                            throw Error(
                                                'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
                                            );
                                        else
                                            ((r = tq),
                                                (n = null),
                                                (a = tJ),
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
                                        let t = a.fetcherKey || r0();
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
                                            viewTransition: a.viewTransition,
                                        });
                                },
                                [e, t, r]
                            );
                        })(),
                        v = (function (e, { relative: t } = {}) {
                            let { basename: r } = o.useContext(tt),
                                n = o.useContext(tn);
                            f(
                                n,
                                "useFormAction must be used inside a RouteContext"
                            );
                            let [a] = n.matches.slice(-1),
                                i = { ...tp(e || ".", { relative: t }) },
                                s = ti();
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
                                            : W([r, i.pathname])),
                                g(i)
                            );
                        })(l, { relative: c }),
                        b = "get" === s.toLowerCase() ? "get" : "post",
                        w = "string" == typeof l && rF.test(l);
                    return o.createElement("form", {
                        ref: m,
                        method: b,
                        action: v,
                        onSubmit: n
                            ? u
                            : (e) => {
                                  if ((u && u(e), e.defaultPrevented)) return;
                                  e.preventDefault();
                                  let n = e.nativeEvent.submitter,
                                      o = n?.getAttribute("formmethod") || s;
                                  y(n || e.currentTarget, {
                                      fetcherKey: t,
                                      method: o,
                                      navigate: r,
                                      replace: a,
                                      state: i,
                                      relative: c,
                                      preventScrollReset: d,
                                      viewTransition: h,
                                  });
                              },
                        ...p,
                        "data-discover": w || "render" !== e ? void 0 : "true",
                    });
                }
            );
            function rV({ getKey: e, storageKey: t, ...r }) {
                let n = o.useContext(rO),
                    { basename: a } = o.useContext(tt),
                    i = ti(),
                    s = tC();
                !(function ({ getKey: e, storageKey: t } = {}) {
                    let { router: r } = rG("useScrollRestoration"),
                        { restoreScrollPosition: n, preventScrollReset: a } =
                            (function (e) {
                                let t = o.useContext(e6);
                                return (f(t, rX(e)), t);
                            })("useScrollRestoration"),
                        { basename: i } = o.useContext(tt),
                        s = ti(),
                        l = tC(),
                        u = tx();
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
                                "idle" === u.state &&
                                    (r2[r4(s, l, i, e)] = window.scrollY);
                                try {
                                    sessionStorage.setItem(
                                        t || r1,
                                        JSON.stringify(r2)
                                    );
                                } catch (e) {
                                    p(
                                        !1,
                                        `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`
                                    );
                                }
                                window.history.scrollRestoration = "auto";
                            }, [u.state, e, i, s, l, t])
                        ),
                        "undefined" != typeof document &&
                            (o.useLayoutEffect(() => {
                                try {
                                    let e = sessionStorage.getItem(t || r1);
                                    e && (r2 = JSON.parse(e));
                                } catch (e) {}
                            }, [t]),
                            o.useLayoutEffect(() => {
                                let t = r?.enableScrollRestoration(
                                    r2,
                                    () => window.scrollY,
                                    e ? (t, r) => r4(t, r, i, e) : void 0
                                );
                                return () => t && t();
                            }, [r, i, e]),
                            o.useLayoutEffect(() => {
                                if (!1 !== n) {
                                    if ("number" == typeof n)
                                        return void window.scrollTo(0, n);
                                    if (s.hash) {
                                        let e = document.getElementById(
                                            decodeURIComponent(s.hash.slice(1))
                                        );
                                        if (e) return void e.scrollIntoView();
                                    }
                                    !0 !== a && window.scrollTo(0, 0);
                                }
                            }, [s, n, a])));
                })({ getKey: e, storageKey: t });
                let l = o.useMemo(() => {
                    if (!n || !e) return null;
                    let t = r4(i, s, a, e);
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
                        __html: `(${u})(${JSON.stringify(t || r1)}, ${JSON.stringify(l)})`,
                    },
                });
            }
            function rX(e) {
                return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
            }
            function rG(e) {
                let t = o.useContext(e8);
                return (f(t, rX(e)), t);
            }
            function rK(
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
                let l = td(),
                    u = ti(),
                    c = tp(e, { relative: i });
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
                                replace: void 0 !== r ? r : g(u) === g(c),
                                state: n,
                                preventScrollReset: a,
                                relative: i,
                                viewTransition: s,
                            }));
                    },
                    [u, l, c, r, n, t, e, a, i, s]
                );
            }
            function rQ(e) {
                p(
                    "undefined" != typeof URLSearchParams,
                    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
                );
                let t = o.useRef(tV(e)),
                    r = o.useRef(!1),
                    n = ti(),
                    a = o.useMemo(() => {
                        var e, a;
                        let o;
                        return (
                            (e = n.search),
                            (a = r.current ? null : t.current),
                            (o = tV(e)),
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
                    i = td(),
                    s = o.useCallback(
                        (e, t) => {
                            let n = tV("function" == typeof e ? e(a) : e);
                            ((r.current = !0), i("?" + n, t));
                        },
                        [i, a]
                    );
                return [a, s];
            }
            ((rY.displayName = "Form"), (rV.displayName = "ScrollRestoration"));
            var rZ = 0,
                r0 = () => `__${String(++rZ)}__`,
                r1 = "react-router-scroll-positions",
                r2 = {};
            function r4(e, t, r, n) {
                let a = null;
                return (
                    n &&
                        (a = n(
                            "/" !== r
                                ? {
                                      ...e,
                                      pathname: O(e.pathname, r) || e.pathname,
                                  }
                                : e,
                            t
                        )),
                    null == a && (a = e.key),
                    a
                );
            }
            function r3(e, t) {
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
            function r5({ routes: e, future: t, state: r }) {
                return ty(e, void 0, r, t);
            }
            function r8(e) {
                return "string" == typeof e ? e : g(e);
            }
            function r6(e) {
                let t = "string" == typeof e ? e : g(e),
                    r = r7.test((t = t.replace(/ $/, "%20")))
                        ? new URL(t)
                        : new URL(t, "http://localhost");
                return { pathname: r.pathname, search: r.search, hash: r.hash };
            }
            var r7 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                r9 = {
                    "&": "\\u0026",
                    ">": "\\u003e",
                    "<": "\\u003c",
                    "\u2028": "\\u2028",
                    "\u2029": "\\u2029",
                },
                ne = /[&><\u2028\u2029]/g,
                nt = new TextEncoder(),
                nr = async (e, t) => {
                    let r = nt.encode(e),
                        n = await na(t, ["sign"]);
                    return (
                        e +
                        "." +
                        btoa(
                            String.fromCharCode(
                                ...new Uint8Array(
                                    await crypto.subtle.sign("HMAC", n, r)
                                )
                            )
                        ).replace(/=+$/, "")
                    );
                },
                nn = async (e, t) => {
                    let r = e.lastIndexOf("."),
                        n = e.slice(0, r),
                        a = e.slice(r + 1),
                        o = nt.encode(n),
                        i = await na(t, ["verify"]),
                        s = (function (e) {
                            let t = new Uint8Array(e.length);
                            for (let r = 0; r < e.length; r++)
                                t[r] = e.charCodeAt(r);
                            return t;
                        })(atob(a));
                    return !!(await crypto.subtle.verify("HMAC", i, s, o)) && n;
                },
                na = async (e, t) =>
                    crypto.subtle.importKey(
                        "raw",
                        nt.encode(e),
                        { name: "HMAC", hash: "SHA-256" },
                        !1,
                        t
                    );
            async function no(e, t) {
                let r = btoa(
                    (function (e) {
                        let t,
                            r,
                            n = e.toString(),
                            a = "",
                            o = 0;
                        for (; o < n.length; ) {
                            if ("%" === (t = n.charAt(o++))) {
                                if ("u" === n.charAt(o)) {
                                    if (
                                        ((r = n.slice(o + 1, o + 5)),
                                        /^[\da-f]{4}$/i.exec(r))
                                    ) {
                                        ((a += String.fromCharCode(
                                            parseInt(r, 16)
                                        )),
                                            (o += 5));
                                        continue;
                                    }
                                } else if (
                                    ((r = n.slice(o, o + 2)),
                                    /^[\da-f]{2}$/i.exec(r))
                                ) {
                                    ((a += String.fromCharCode(
                                        parseInt(r, 16)
                                    )),
                                        (o += 2));
                                    continue;
                                }
                            }
                            a += t;
                        }
                        return a;
                    })(encodeURIComponent(JSON.stringify(e)))
                );
                return (t.length > 0 && (r = await nr(r, t[0])), r);
            }
            async function ni(e, t) {
                if (t.length > 0) {
                    for (let r of t) {
                        let t = await nn(e, r);
                        if (!1 !== t) return ns(t);
                    }
                    return null;
                }
                return ns(e);
            }
            function ns(e) {
                try {
                    return JSON.parse(
                        decodeURIComponent(
                            (function (e) {
                                let t,
                                    r,
                                    n = e.toString(),
                                    a = "",
                                    o = 0;
                                for (; o < n.length; )
                                    ((t = n.charAt(o++)),
                                        /[\w*+\-./@]/.exec(t)
                                            ? (a += t)
                                            : (r = t.charCodeAt(0)) < 256
                                              ? (a += "%" + nl(r, 2))
                                              : (a +=
                                                    "%u" +
                                                    nl(r, 4).toUpperCase()));
                                return a;
                            })(atob(e))
                        )
                    );
                } catch (e) {
                    return {};
                }
            }
            function nl(e, t) {
                let r = e.toString(16);
                for (; r.length < t; ) r = "0" + r;
                return r;
            }
            var nu = ((e) => (
                (e.Development = "development"),
                (e.Production = "production"),
                (e.Test = "test"),
                e
            ))(nu || {});
            function nc(e, t) {
                if (e instanceof Error && "development" !== t) {
                    let e = Error("Unexpected Server Error");
                    return ((e.stack = void 0), e);
                }
                return e;
            }
            function nd(e, t) {
                return Object.entries(e).reduce(
                    (e, [r, n]) => Object.assign(e, { [r]: nc(n, t) }),
                    {}
                );
            }
            function nh(e, t) {
                let r = nc(e, t);
                return { message: r.message, stack: r.stack };
            }
            function nf(e, t) {
                if (!e) return null;
                let r = Object.entries(e),
                    n = {};
                for (let [e, a] of r)
                    if (X(a)) n[e] = { ...a, __type: "RouteErrorResponse" };
                    else if (a instanceof Error) {
                        let r = nc(a, t);
                        n[e] = {
                            message: r.message,
                            stack: r.stack,
                            __type: "Error",
                            ...("Error" !== r.name
                                ? { __subType: r.name }
                                : {}),
                        };
                    } else n[e] = a;
                return n;
            }
            async function np(e, t) {
                var r;
                let n,
                    a,
                    o = await e({
                        request:
                            ((r = (function (e) {
                                let t = new URL(e.url),
                                    r = t.searchParams.getAll("index");
                                t.searchParams.delete("index");
                                let n = [];
                                for (let e of r) e && n.push(e);
                                for (let e of n)
                                    t.searchParams.append("index", e);
                                let a = {
                                    method: e.method,
                                    body: e.body,
                                    headers: e.headers,
                                    signal: e.signal,
                                };
                                return (
                                    a.body && (a.duplex = "half"),
                                    new Request(t.href, a)
                                );
                            })(t.request)),
                            (n = new URL(r.url)).searchParams.delete("_routes"),
                            (a = {
                                method: r.method,
                                body: r.body,
                                headers: r.headers,
                                signal: r.signal,
                            }).body && (a.duplex = "half"),
                            new Request(n.href, a)),
                        params: t.params,
                        context: t.context,
                    });
                if (eV(o) && o.init && o.init.status && eG(o.init.status))
                    throw new Response(null, o.init);
                return o;
            }
            function nm(e, t) {
                if (!1 === e || null == e)
                    throw (
                        console.error(
                            "The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose"
                        ),
                        Error(t)
                    );
            }
            function ny(e) {
                let t = {};
                return (
                    Object.values(e).forEach((e) => {
                        if (e) {
                            let r = e.parentId || "";
                            (t[r] || (t[r] = []), t[r].push(e));
                        }
                    }),
                    t
                );
            }
            var ng = {
                    "&": "\\u0026",
                    ">": "\\u003e",
                    "<": "\\u003c",
                    "\u2028": "\\u2028",
                    "\u2029": "\\u2029",
                },
                nv = /[&><\u2028\u2029]/g;
            function nb(e) {
                return JSON.stringify(e).replace(nv, (e) => ng[e]);
            }
            function nw(e, t) {
                return (function (e, t) {
                    let r,
                        n = e.errors
                            ? e.matches.findIndex((t) => e.errors[t.route.id])
                            : -1,
                        a = n >= 0 ? e.matches.slice(0, n + 1) : e.matches;
                    if (n >= 0) {
                        let {
                            actionHeaders: t,
                            actionData: a,
                            loaderHeaders: o,
                            loaderData: i,
                        } = e;
                        e.matches.slice(n).some((e) => {
                            let n = e.route.id;
                            return (
                                !t[n] || (a && a.hasOwnProperty(n))
                                    ? o[n] && !i.hasOwnProperty(n) && (r = o[n])
                                    : (r = t[n]),
                                null != r
                            );
                        });
                    }
                    return a.reduce((n, o, i) => {
                        let { id: s } = o.route,
                            l = e.loaderHeaders[s] || new Headers(),
                            u = e.actionHeaders[s] || new Headers(),
                            c = null != r && i === a.length - 1,
                            d = c && r !== l && r !== u,
                            h = t(o);
                        if (null == h) {
                            let e = new Headers(n);
                            return (d && nS(r, e), nS(u, e), nS(l, e), e);
                        }
                        let f = new Headers(
                            "function" == typeof h
                                ? h({
                                      loaderHeaders: l,
                                      parentHeaders: n,
                                      actionHeaders: u,
                                      errorHeaders: c ? r : void 0,
                                  })
                                : h
                        );
                        return (d && nS(r, f), nS(u, f), nS(l, f), nS(n, f), f);
                    }, new Headers());
                })(t, (t) => {
                    let r = e.routes[t.route.id];
                    return (
                        nm(
                            r,
                            `Route with id "${t.route.id}" not found in build`
                        ),
                        r.module.headers
                    );
                });
            }
            function nS(e, t) {
                let r = e.get("Set-Cookie");
                if (r) {
                    let e = splitCookiesString(r),
                        n = new Set(t.getSetCookie());
                    e.forEach((e) => {
                        n.has(e) || t.append("Set-Cookie", e);
                    });
                }
            }
            var nE = new Set([...rp, 304]);
            async function nR(e, t, r, n, a, o, i) {
                try {
                    let s = function (r) {
                            let a,
                                o = nw(e, r);
                            return eG(r.statusCode) && o.has("Location")
                                ? nC(n, e, t, {
                                      result: nk(r.statusCode, o, e.basename),
                                      headers: o,
                                      status: 202,
                                  })
                                : (r.errors &&
                                      (Object.values(r.errors).forEach((e) => {
                                          (!X(e) || e.error) && i(e);
                                      }),
                                      (r.errors = nd(r.errors, t))),
                                  (a = r.errors
                                      ? { error: Object.values(r.errors)[0] }
                                      : {
                                            data: Object.values(
                                                r.actionData || {}
                                            )[0],
                                        }),
                                  nC(n, e, t, {
                                      result: a,
                                      headers: o,
                                      status: r.statusCode,
                                  }));
                        },
                        l = new Request(a, {
                            method: n.method,
                            body: n.body,
                            headers: n.headers,
                            signal: n.signal,
                            ...(n.body ? { duplex: "half" } : void 0),
                        }),
                        u = await r.query(l, {
                            requestContext: o,
                            skipLoaderErrorBubbling: !0,
                            skipRevalidation: !0,
                            unstable_respond: s,
                        });
                    if ((eX(u) || (u = s(u)), eK(u)))
                        return nC(n, e, t, {
                            result: nk(u.status, u.headers, e.basename),
                            headers: u.headers,
                            status: 202,
                        });
                    return u;
                } catch (r) {
                    return (
                        i(r),
                        nC(n, e, t, {
                            result: { error: r },
                            headers: new Headers(),
                            status: 500,
                        })
                    );
                }
            }
            async function nx(e, t, r, n, a, o, i) {
                try {
                    let s = function (r) {
                            let a = nw(e, r);
                            if (eG(r.statusCode) && a.has("Location"))
                                return nC(n, e, t, {
                                    result: {
                                        [rh]: nk(r.statusCode, a, e.basename),
                                    },
                                    headers: a,
                                    status: 202,
                                });
                            r.errors &&
                                (Object.values(r.errors).forEach((e) => {
                                    (!X(e) || e.error) && i(e);
                                }),
                                (r.errors = nd(r.errors, t)));
                            let o = {},
                                s = new Set(
                                    r.matches
                                        .filter((e) =>
                                            c
                                                ? c.has(e.route.id)
                                                : null != e.route.loader
                                        )
                                        .map((e) => e.route.id)
                                );
                            if (r.errors)
                                for (let [e, t] of Object.entries(r.errors))
                                    o[e] = { error: t };
                            for (let [e, t] of Object.entries(r.loaderData))
                                !(e in o) && s.has(e) && (o[e] = { data: t });
                            return nC(n, e, t, {
                                result: o,
                                headers: a,
                                status: r.statusCode,
                            });
                        },
                        l = new Request(a, {
                            headers: n.headers,
                            signal: n.signal,
                        }),
                        u = new URL(n.url).searchParams.get("_routes"),
                        c = u ? new Set(u.split(",")) : null,
                        d = await r.query(l, {
                            requestContext: o,
                            filterMatchesToLoad: (e) => !c || c.has(e.route.id),
                            skipLoaderErrorBubbling: !0,
                            unstable_respond: s,
                        });
                    if ((eX(d) || (d = s(d)), eK(d)))
                        return nC(n, e, t, {
                            result: {
                                [rh]: nk(d.status, d.headers, e.basename),
                            },
                            headers: d.headers,
                            status: 202,
                        });
                    return d;
                } catch (r) {
                    return (
                        i(r),
                        nC(n, e, t, {
                            result: { root: { error: r } },
                            headers: new Headers(),
                            status: 500,
                        })
                    );
                }
            }
            function nC(e, t, r, { result: n, headers: a, status: o }) {
                let i = new Headers(a);
                return (i.set("X-Remix-Response", "yes"), nE.has(o))
                    ? new Response(null, { status: o, headers: i })
                    : (i.set("Content-Type", "text/x-script"),
                      new Response(
                          nN(n, e.signal, t.entry.module.streamTimeout, r),
                          { status: o || 200, headers: i }
                      ));
            }
            function nk(e, t, r) {
                let n = t.get("Location");
                return (
                    r && (n = O(n, r) || n),
                    {
                        redirect: n,
                        status: e,
                        revalidate:
                            t.has("X-Remix-Revalidate") || t.has("Set-Cookie"),
                        reload: t.has("X-Remix-Reload-Document"),
                        replace: t.has("X-Remix-Replace"),
                    }
                );
            }
            function nN(e, t, r, n) {
                let a = new AbortController(),
                    o = setTimeout(
                        () => a.abort(Error("Server Timeout")),
                        "number" == typeof r ? r : 4950
                    );
                return (
                    t.addEventListener("abort", () => clearTimeout(o)),
                    (function (e, t) {
                        let { plugins: r, postPlugins: n, signal: a } = t ?? {},
                            o = {
                                deferred: {},
                                index: 0,
                                indices: new Map(),
                                stringified: [],
                                plugins: r,
                                postPlugins: n,
                                signal: a,
                            },
                            i = new TextEncoder(),
                            s = 0;
                        return new ReadableStream({
                            async start(t) {
                                let r = rr.call(o, e);
                                if (Array.isArray(r))
                                    throw Error("This should never happen");
                                r < 0
                                    ? t.enqueue(
                                          i.encode(`${r}
`)
                                      )
                                    : (t.enqueue(
                                          i.encode(`[${o.stringified.join(",")}]
`)
                                      ),
                                      (s = o.stringified.length - 1));
                                let n = new WeakSet();
                                if (Object.keys(o.deferred).length) {
                                    let e,
                                        r = new Promise((t, r) => {
                                            if (((e = t), a)) {
                                                let e = () =>
                                                    r(
                                                        a.reason ||
                                                            Error(
                                                                "Signal was aborted."
                                                            )
                                                    );
                                                a.aborted
                                                    ? e()
                                                    : a.addEventListener(
                                                          "abort",
                                                          (t) => {
                                                              e();
                                                          }
                                                      );
                                            }
                                        });
                                    for (
                                        ;
                                        Object.keys(o.deferred).length > 0;

                                    ) {
                                        for (let [e, a] of Object.entries(
                                            o.deferred
                                        ))
                                            n.has(a) ||
                                                n.add(
                                                    (o.deferred[Number(e)] =
                                                        Promise.race([r, a])
                                                            .then(
                                                                (r) => {
                                                                    let n =
                                                                        rr.call(
                                                                            o,
                                                                            r
                                                                        );
                                                                    if (
                                                                        Array.isArray(
                                                                            n
                                                                        )
                                                                    )
                                                                        (t.enqueue(
                                                                            i.encode(`P${e}:[["Z",${n[0]}]]
`)
                                                                        ),
                                                                            o.index++,
                                                                            s++);
                                                                    else if (
                                                                        n < 0
                                                                    )
                                                                        t.enqueue(
                                                                            i.encode(`P${e}:${n}
`)
                                                                        );
                                                                    else {
                                                                        let r =
                                                                            o.stringified
                                                                                .slice(
                                                                                    s +
                                                                                        1
                                                                                )
                                                                                .join(
                                                                                    ","
                                                                                );
                                                                        (t.enqueue(
                                                                            i.encode(`P${e}:[${r}]
`)
                                                                        ),
                                                                            (s =
                                                                                o
                                                                                    .stringified
                                                                                    .length -
                                                                                1));
                                                                    }
                                                                },
                                                                (r) => {
                                                                    (r &&
                                                                        "object" ==
                                                                            typeof r &&
                                                                        r instanceof
                                                                            Error) ||
                                                                        (r =
                                                                            Error(
                                                                                "An unknown error occurred"
                                                                            ));
                                                                    let n =
                                                                        rr.call(
                                                                            o,
                                                                            r
                                                                        );
                                                                    if (
                                                                        Array.isArray(
                                                                            n
                                                                        )
                                                                    )
                                                                        (t.enqueue(
                                                                            i.encode(`E${e}:[["Z",${n[0]}]]
`)
                                                                        ),
                                                                            o.index++,
                                                                            s++);
                                                                    else if (
                                                                        n < 0
                                                                    )
                                                                        t.enqueue(
                                                                            i.encode(`E${e}:${n}
`)
                                                                        );
                                                                    else {
                                                                        let r =
                                                                            o.stringified
                                                                                .slice(
                                                                                    s +
                                                                                        1
                                                                                )
                                                                                .join(
                                                                                    ","
                                                                                );
                                                                        (t.enqueue(
                                                                            i.encode(`E${e}:[${r}]
`)
                                                                        ),
                                                                            (s =
                                                                                o
                                                                                    .stringified
                                                                                    .length -
                                                                                1));
                                                                    }
                                                                }
                                                            )
                                                            .finally(() => {
                                                                delete o
                                                                    .deferred[
                                                                    Number(e)
                                                                ];
                                                            }))
                                                );
                                        await Promise.race(
                                            Object.values(o.deferred)
                                        );
                                    }
                                    e();
                                }
                                (await Promise.all(Object.values(o.deferred)),
                                    t.close());
                            },
                        });
                    })(e, {
                        signal: a.signal,
                        plugins: [
                            (e) => {
                                if (e instanceof Error) {
                                    let {
                                        name: t,
                                        message: r,
                                        stack: a,
                                    } = "production" === n ? nc(e, n) : e;
                                    return ["SanitizedError", t, r, a];
                                }
                                if (e instanceof V) {
                                    let {
                                        data: t,
                                        status: r,
                                        statusText: n,
                                    } = e;
                                    return ["ErrorResponse", t, r, n];
                                }
                                if (e && "object" == typeof e && rh in e)
                                    return ["SingleFetchRedirect", e[rh]];
                            },
                        ],
                        postPlugins: [
                            (e) => {
                                if (e && "object" == typeof e)
                                    return [
                                        "SingleFetchClassInstance",
                                        Object.fromEntries(Object.entries(e)),
                                    ];
                            },
                            () => ["SingleFetchFallback"],
                        ],
                    })
                );
            }
            function nj(e, t) {
                let r = "Unexpected Server Error";
                return (
                    "production" !== t &&
                        (r += `

${String(e)}`),
                    new Response(r, {
                        status: 500,
                        headers: { "Content-Type": "text/plain" },
                    })
                );
            }
            function nT(e) {
                return `__flash_${e}__`;
            }
        },
    },
]);
//# sourceMappingURL=react-core-15f06aca1883.js.map
