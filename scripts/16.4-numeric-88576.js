"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return (
        (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                      return typeof o;
                  }
                : function (o) {
                      return o &&
                          "function" == typeof Symbol &&
                          o.constructor === Symbol &&
                          o !== Symbol.prototype
                          ? "symbol"
                          : typeof o;
                  }),
        _typeof(o)
    );
}
var _excluded = ["node", "children", "className"];
function _toConsumableArray(r) {
    return (
        _arrayWithoutHoles(r) ||
        _iterableToArray(r) ||
        _unsupportedIterableToArray(r) ||
        _nonIterableSpread()
    );
}
function _nonIterableSpread() {
    throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
}
function _iterableToArray(r) {
    if (
        ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
        null != r["@@iterator"]
    )
        return Array.from(r);
}
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
        t,
        r = "function" == typeof Symbol ? Symbol : {},
        n = r.iterator || "@@iterator",
        o = r.toStringTag || "@@toStringTag";
    function i_(r, n, o, i) {
        var c = n && n.prototype instanceof Generator ? n : Generator,
            u = Object.create(c.prototype);
        return (
            _regeneratorDefine2(
                u,
                "_invoke",
                (function (r, n, o) {
                    var i,
                        c,
                        u,
                        f = 0,
                        p = o || [],
                        y = !1,
                        G = {
                            p: 0,
                            n: 0,
                            v: e,
                            a: d,
                            f: d.bind(e, 4),
                            d: function d(t, r) {
                                return (
                                    (i = t),
                                    (c = 0),
                                    (u = e),
                                    (G.n = r),
                                    a
                                );
                            },
                        };
                    function d(r, n) {
                        for (
                            c = r, u = n, t = 0;
                            !y && f && !o && t < p.length;
                            t++
                        ) {
                            var o,
                                i = p[t],
                                d = G.p,
                                l = i[2];
                            r > 3
                                ? (o = l === n) &&
                                  ((u = i[(c = i[4]) ? 5 : ((c = 3), 3)]),
                                  (i[4] = i[5] = e))
                                : i[0] <= d &&
                                  ((o = r < 2 && d < i[1])
                                      ? ((c = 0), (G.v = n), (G.n = i[1]))
                                      : d < l &&
                                        (o = r < 3 || i[0] > n || n > l) &&
                                        ((i[4] = r),
                                        (i[5] = n),
                                        (G.n = l),
                                        (c = 0)));
                        }
                        if (o || r > 1) return a;
                        throw ((y = !0), n);
                    }
                    return function (o, p, l) {
                        if (f > 1)
                            throw TypeError("Generator is already running");
                        for (
                            y && 1 === p && d(p, l), c = p, u = l;
                            (t = c < 2 ? e : u) || !y;

                        ) {
                            i ||
                                (c
                                    ? c < 3
                                        ? (c > 1 && (G.n = -1), d(c, u))
                                        : (G.n = u)
                                    : (G.v = u));
                            try {
                                if (((f = 2), i)) {
                                    if ((c || (o = "next"), (t = i[o]))) {
                                        if (!(t = t.call(i, u)))
                                            throw TypeError(
                                                "iterator result is not an object"
                                            );
                                        if (!t.done) return t;
                                        ((u = t.value), c < 2 && (c = 0));
                                    } else
                                        (1 === c && (t = i.return) && t.call(i),
                                            c < 2 &&
                                                ((u = TypeError(
                                                    "The iterator does not provide a '" +
                                                        o +
                                                        "' method"
                                                )),
                                                (c = 1)));
                                    i = e;
                                } else if (
                                    (t = (y = G.n < 0) ? u : r.call(n, G)) !== a
                                )
                                    break;
                            } catch (t) {
                                ((i = e), (c = 1), (u = t));
                            } finally {
                                f = 1;
                            }
                        }
                        return { value: t, done: y };
                    };
                })(r, o, i),
                !0
            ),
            u
        );
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n]
            ? t(t([][n]()))
            : (_regeneratorDefine2((t = {}), n, function () {
                  return this;
              }),
              t),
        u =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
                Object.create(c));
    function f(e) {
        return (
            Object.setPrototypeOf
                ? Object.setPrototypeOf(e, GeneratorFunctionPrototype)
                : ((e.__proto__ = GeneratorFunctionPrototype),
                  _regeneratorDefine2(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(u)),
            e
        );
    }
    return (
        (GeneratorFunction.prototype = GeneratorFunctionPrototype),
        _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype),
        _regeneratorDefine2(
            GeneratorFunctionPrototype,
            "constructor",
            GeneratorFunction
        ),
        (GeneratorFunction.displayName = "GeneratorFunction"),
        _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"),
        _regeneratorDefine2(u),
        _regeneratorDefine2(u, o, "Generator"),
        _regeneratorDefine2(u, n, function () {
            return this;
        }),
        _regeneratorDefine2(u, "toString", function () {
            return "[object Generator]";
        }),
        (_regenerator = function _regenerator() {
            return { w: i_, m: f };
        })()
    );
}
function _regeneratorDefine2(e, r, n, t) {
    var i = Object.defineProperty;
    try {
        i({}, "", {});
    } catch (e) {
        i = 0;
    }
    ((_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) {
        if (r)
            i
                ? i(e, r, {
                      value: n,
                      enumerable: !t,
                      configurable: !t,
                      writable: !t,
                  })
                : (e[r] = n);
        else {
            var o = function o(r, n) {
                _regeneratorDefine2(e, r, function (e) {
                    return this._invoke(r, n, e);
                });
            };
            (o("next", 0), o("throw", 1), o("return", 2));
        }
    }),
        _regeneratorDefine2(e, r, n, t));
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c),
            u = i.value;
    } catch (n) {
        return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function () {
        var t = this,
            e = arguments;
        return new Promise(function (r, o) {
            var a = n.apply(t, e);
            function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
        });
    };
}
function _createForOfIteratorHelper(r, e) {
    var t =
        ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
    if (!t) {
        if (
            Array.isArray(r) ||
            (t = _unsupportedIterableToArray(r)) ||
            (e && r && "number" == typeof r.length)
        ) {
            t && (r = t);
            var _n0 = 0,
                F = function F() {};
            return {
                s: F,
                n: function n() {
                    return _n0 >= r.length
                        ? { done: !0 }
                        : { done: !1, value: r[_n0++] };
                },
                e: function e(r) {
                    throw r;
                },
                f: F,
            };
        }
        throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
    }
    var o,
        a = !0,
        u = !1;
    return {
        s: function s() {
            t = t.call(r);
        },
        n: function n() {
            var r = t.next();
            return ((a = r.done), r);
        },
        e: function e(r) {
            ((u = !0), (o = r));
        },
        f: function f() {
            try {
                a || null == t.return || t.return();
            } finally {
                if (u) throw o;
            }
        },
    };
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o,
        r,
        i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (r = 0; r < n.length; r++)
            ((o = n[r]),
                -1 === t.indexOf(o) &&
                    {}.propertyIsEnumerable.call(e, o) &&
                    (i[o] = e[o]));
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r)
        if ({}.hasOwnProperty.call(r, n)) {
            if (-1 !== e.indexOf(n)) continue;
            t[n] = r[n];
        }
    return t;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        (r &&
            (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o));
    }
    return t;
}
function _objectSpread(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ownKeys(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                        e,
                        r,
                        Object.getOwnPropertyDescriptor(t, r)
                    );
                });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (
        (r = _toPropertyKey(r)) in e
            ? Object.defineProperty(e, r, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[r] = t),
        e
    );
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _slicedToArray(r, e) {
    return (
        _arrayWithHoles(r) ||
        _iterableToArrayLimit(r, e) ||
        _unsupportedIterableToArray(r, e) ||
        _nonIterableRest()
    );
}
function _nonIterableRest() {
    throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
}
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return (
            "Object" === t && r.constructor && (t = r.constructor.name),
            "Map" === t || "Set" === t
                ? Array.from(r)
                : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? _arrayLikeToArray(r, a)
                  : void 0
        );
    }
}
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
}
function _iterableToArrayLimit(r, l) {
    var t =
        null == r
            ? null
            : ("undefined" != typeof Symbol && r[Symbol.iterator]) ||
              r["@@iterator"];
    if (null != t) {
        var e,
            n,
            i,
            u,
            a = [],
            f = !0,
            o = !1;
        try {
            if (((i = (t = t.call(r)).next), 0 === l)) {
                if (Object(t) !== t) return;
                f = !1;
            } else
                for (
                    ;
                    !(f = (e = i.call(t)).done) &&
                    (a.push(e.value), a.length !== l);
                    f = !0
                );
        } catch (r) {
            ((o = !0), (n = r));
        } finally {
            try {
                if (
                    !f &&
                    null != t.return &&
                    ((u = t.return()), Object(u) !== u)
                )
                    return;
            } finally {
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
performance.mark("js-parse-end:88576-d4356031a25c4e11.js");
("use strict");
(globalThis.rspackChunk_github_ui_github_ui =
    globalThis.rspackChunk_github_ui_github_ui || []).push([
    [88576],
    {
        281338: function _(e, t, n) {
            var r = n(916522);
            function o(e, t, n) {
                var o,
                    s,
                    i,
                    l,
                    a = (0, r.c)(19);
                e: {
                    var _r, _s, _i;
                    if (void 0 === t || void 0 === n || !e) {
                        var _e;
                        (a[0] === Symbol.for("react.memo_cache_sentinel")
                            ? ((_e = {
                                  publicCodeReferences: [],
                                  codeVulnerabilities: [],
                              }),
                              (a[0] = _e))
                            : (_e = a[0]),
                            (o = _e));
                        break e;
                    }
                    var _l = e.PublicCodeReference,
                        _c = e.CodeVulnerability;
                    (a[1] !== _l || a[2] !== n || a[3] !== t
                        ? ((_r =
                              _l === null || _l === void 0
                                  ? void 0
                                  : _l.filter(function (e) {
                                        return (
                                            e.startOffset >= t &&
                                            e.endOffset <= n
                                        );
                                    })),
                          (a[1] = _l),
                          (a[2] = n),
                          (a[3] = t),
                          (a[4] = _r))
                        : (_r = a[4]),
                        a[5] !== _c || a[6] !== n || a[7] !== t
                            ? ((_s =
                                  _c === null || _c === void 0
                                      ? void 0
                                      : _c.filter(function (e) {
                                            return (
                                                e.startOffset >= t &&
                                                e.endOffset <= n
                                            );
                                        })),
                              (a[5] = _c),
                              (a[6] = n),
                              (a[7] = t),
                              (a[8] = _s))
                            : (_s = a[8]),
                        a[9] !== _r || a[10] !== _s
                            ? ((_i = {
                                  publicCodeReferences: _r,
                                  codeVulnerabilities: _s,
                              }),
                              (a[9] = _r),
                              (a[10] = _s),
                              (a[11] = _i))
                            : (_i = a[11]),
                        (o = _i));
                }
                var _o = o,
                    c = _o.publicCodeReferences,
                    d = _o.codeVulnerabilities;
                a[12] !== c
                    ? ((s = void 0 === c ? [] : c), (a[12] = c), (a[13] = s))
                    : (s = a[13]);
                var u = s;
                a[14] !== d
                    ? ((i = void 0 === d ? [] : d), (a[14] = d), (a[15] = i))
                    : (i = a[15]);
                var m = i;
                return (
                    a[16] !== m || a[17] !== u
                        ? ((l = {
                              publicCodeReferences: u,
                              codeVulnerabilities: m,
                          }),
                          (a[16] = m),
                          (a[17] = u),
                          (a[18] = l))
                        : (l = a[18]),
                    l
                );
            }
            n.d(t, {
                R: function R() {
                    return o;
                },
            });
        },
        112675: function _(e, t, n) {
            n.d(t, {
                To: function To() {
                    return eg;
                },
                sX: function sX() {
                    return ef;
                },
            });
            var r = n(474848),
                o = n(916522),
                s = n(296540),
                i = n(568432),
                l = n(194113),
                a = n(539869),
                c = n(549685),
                d = n(177732),
                u = n(644890),
                m = n(634164),
                h = n(258038),
                p = n(281338),
                f = n(126108),
                _ = n(438621),
                g = n(590691);
            var v = function v() {
                var e,
                    t = (0, o.c)(1);
                return (
                    t[0] === Symbol.for("react.memo_cache_sentinel")
                        ? ((e = (0, r.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              fill: "none",
                              viewBox: "0 0 16 16",
                              "aria-hidden": "true",
                              children: (0, r.jsx)("path", {
                                  stroke: "currentColor",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "1.5",
                                  d: "M1 13h3M1 8h14M1 3h14",
                              }),
                          })),
                          (t[0] = e))
                        : (e = t[0]),
                    e
                );
            };
            v.displayName = "UnwrapIcon";
            var y = function y() {
                var e,
                    t = (0, o.c)(1);
                return (
                    t[0] === Symbol.for("react.memo_cache_sentinel")
                        ? ((e = (0, r.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              fill: "none",
                              viewBox: "0 0 16 16",
                              "aria-hidden": "true",
                              children: [
                                  (0, r.jsx)("path", {
                                      stroke: "currentColor",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "1.5",
                                      d: "M1 13h3M1 3h14",
                                  }),
                                  (0, r.jsx)("path", {
                                      fill: "currentColor",
                                      fillRule: "evenodd",
                                      d: "M1 7.25a.75.75 0 0 0 0 1.5h11.5a1.75 1.75 0 1 1 0 3.5H9.536v-.464a.679.679 0 0 0-1.086-.543l-1.619 1.214a.68.68 0 0 0 0 1.086l1.619 1.214a.679.679 0 0 0 1.086-.543v-.464H12.5a3.25 3.25 0 0 0 0-6.5z",
                                      clipRule: "evenodd",
                                  }),
                              ],
                          })),
                          (t[0] = e))
                        : (e = t[0]),
                    e
                );
            };
            function x(e) {
                var t,
                    n,
                    i,
                    x,
                    b,
                    k,
                    w,
                    C,
                    j,
                    N,
                    $,
                    L,
                    R,
                    S,
                    E,
                    A = (0, o.c)(50),
                    B = e.language,
                    I = e.children,
                    M = e.code,
                    O = e.startOffset,
                    P = e.endOffset;
                A[0] !== B
                    ? ((t = (0, a.vL)(B)), (A[0] = B), (A[1] = t))
                    : (t = A[1]);
                var _t = t,
                    D = _t.color,
                    T = _t.name,
                    W = (0, s.useId)(),
                    _ref = (0, s.use)(u.F),
                    F = _ref.copilotAnnotations,
                    H = _ref.chatMode,
                    V = _ref.wrapCodeLines,
                    z = _ref.onWrapCodeLinesChange,
                    _ref2 = (0, s.useState)(!1),
                    _ref3 = _slicedToArray(_ref2, 2),
                    Y = _ref3[0],
                    K = _ref3[1],
                    _ref4 = (0, p.R)(F, O, P),
                    U = _ref4.publicCodeReferences,
                    J = _ref4.codeVulnerabilities;
                A[2] !== H || A[3] !== z || A[4] !== V
                    ? ((n = function n() {
                          (c.W.codeBlockTransitionWrap
                              ? (0, s.startTransition)(function () {
                                    z === null || z === void 0 || z(!V);
                                })
                              : z === null || z === void 0
                                ? void 0
                                : z(!V),
                              (0, h.BI)("dotcom_chat.activate", {
                                  target: V
                                      ? "CODE_BLOCK_UNWRAP"
                                      : "CODE_BLOCK_WRAP",
                                  mode: H,
                              }));
                      }),
                      (A[2] = H),
                      (A[3] = z),
                      (A[4] = V),
                      (A[5] = n))
                    : (n = A[5]);
                var q = n,
                    Z = "immersive" === H,
                    X = "assistive" === H;
                (A[6] !== Z || A[7] !== X
                    ? ((i = (0, m.$)("CodeBlock-module__container___ry3V", {
                          "CodeBlock-module__immersive__Gmg6o": Z,
                          "CodeBlock-module__assistive__UAWB2": X,
                      })),
                      (A[6] = Z),
                      (A[7] = X),
                      (A[8] = i))
                    : (i = A[8]),
                    A[9] !== D
                        ? ((x = (0, r.jsx)(d.q, {
                              color: D,
                          })),
                          (A[9] = D),
                          (A[10] = x))
                        : (x = A[10]));
                var G = T || "Code";
                (A[11] !== W || A[12] !== G
                    ? ((b = (0, r.jsx)("span", {
                          id: W,
                          className: "CodeBlock-module__languageName__iQIeg",
                          children: G,
                      })),
                      (A[11] = W),
                      (A[12] = G),
                      (A[13] = b))
                    : (b = A[13]),
                    A[14] !== z || A[15] !== q || A[16] !== V
                        ? ((k =
                              z &&
                              (0, r.jsx)(f.K, {
                                  variant: "invisible",
                                  icon: V ? v : y,
                                  "aria-label": V ? "Unwrap" : "Wrap",
                                  onClick: q,
                              })),
                          (A[14] = z),
                          (A[15] = q),
                          (A[16] = V),
                          (A[17] = k))
                        : (k = A[17]),
                    A[18] !== H || A[19] !== J || A[20] !== U.length
                        ? ((w =
                              (U.length > 0 || J.length > 0) &&
                              (0, r.jsx)(f.K, {
                                  variant: "invisible",
                                  icon: _.ShieldIcon,
                                  "aria-label": "Code insights",
                                  onClick: function onClick() {
                                      (K(!0),
                                          (0, h.BI)("dotcom_chat.activate", {
                                              target: "CODE_BLOCK_SHIELD",
                                              mode: H,
                                          }));
                                  },
                              })),
                          (A[18] = H),
                          (A[19] = J),
                          (A[20] = U.length),
                          (A[21] = w))
                        : (w = A[21]),
                    A[22] !== w || A[23] !== x || A[24] !== b || A[25] !== k
                        ? ((C = (0, r.jsxs)("div", {
                              className: "CodeBlock-module__header__tJzrz",
                              children: [x, b, k, w],
                          })),
                          (A[22] = w),
                          (A[23] = x),
                          (A[24] = b),
                          (A[25] = k),
                          (A[26] = C))
                        : (C = A[26]),
                    A[27] !== H
                        ? ((j = function j() {
                              (0, h.BI)("dotcom_chat.activate", {
                                  target: "CODE_BLOCK_COPY",
                                  mode: H,
                              });
                          }),
                          (A[27] = H),
                          (A[28] = j))
                        : (j = A[28]),
                    A[29] !== M || A[30] !== j
                        ? ((N = (0, r.jsx)("div", {
                              className:
                                  "CodeBlock-module__copyContainer__eNjNy",
                              children: (0, r.jsx)("div", {
                                  className:
                                      "CodeBlock-module__copyContent__qV51h",
                                  children: (0, r.jsx)(l.T, {
                                      textToCopy: M,
                                      ariaLabel: "Copy code",
                                      className:
                                          "CodeBlock-module__copyButton__buwCD",
                                      onCopy: j,
                                  }),
                              }),
                          })),
                          (A[29] = M),
                          (A[30] = j),
                          (A[31] = N))
                        : (N = A[31]));
                var Q = V && "CodeBlock-module__codeWrap__NkP9E";
                return (
                    A[32] !== Q
                        ? (($ = (0, m.$)(Q)), (A[32] = Q), (A[33] = $))
                        : ($ = A[33]),
                    A[34] !== I || A[35] !== $
                        ? ((L = (0, r.jsx)("div", {
                              className:
                                  "CodeBlock-module__codeContainer___2Otq",
                              children: (0, r.jsx)("pre", {
                                  className: "CodeBlock-module__code__N23o9",
                                  tabIndex: 0,
                                  children: (0, r.jsx)("code", {
                                      className: $,
                                      children: I,
                                  }),
                              }),
                          })),
                          (A[34] = I),
                          (A[35] = $),
                          (A[36] = L))
                        : (L = A[36]),
                    A[37] !== W ||
                    A[38] !== C ||
                    A[39] !== N ||
                    A[40] !== L ||
                    A[41] !== i
                        ? ((R = (0, r.jsxs)("figure", {
                              className: i,
                              "aria-labelledby": W,
                              children: [C, N, L],
                          })),
                          (A[37] = W),
                          (A[38] = C),
                          (A[39] = N),
                          (A[40] = L),
                          (A[41] = i),
                          (A[42] = R))
                        : (R = A[42]),
                    A[43] !== J || A[44] !== Y || A[45] !== U
                        ? ((S =
                              Y &&
                              (0, r.jsx)(g.t, {
                                  publicCodeReferences: U,
                                  codeVulnerabilities: J,
                                  onClose: function onClose() {
                                      return K(!1);
                                  },
                              })),
                          (A[43] = J),
                          (A[44] = Y),
                          (A[45] = U),
                          (A[46] = S))
                        : (S = A[46]),
                    A[47] !== R || A[48] !== S
                        ? ((E = (0, r.jsxs)(r.Fragment, {
                              children: [R, S],
                          })),
                          (A[47] = R),
                          (A[48] = S),
                          (A[49] = E))
                        : (E = A[49]),
                    E
                );
            }
            ((y.displayName = "WrapIcon"), (x.displayName = "CodeBlock"));
            var b = n(147970);
            var k = "data-codeblock-props",
                w = (0, i.F)(k),
                C = {
                    code: function code(e, t) {
                        var n = (0, i.k)(e, k);
                        return n
                            ? (0, r.jsx)(
                                  x,
                                  _objectSpread(
                                      _objectSpread({}, n),
                                      {},
                                      {
                                          children: e.children,
                                      }
                                  )
                              )
                            : t;
                    },
                };
            var j = n(715514);
            var N = [
                    "raw.githubusercontent.com/",
                    "private-user-images.githubusercontent.com/",
                    "avatars.githubusercontent.com/",
                    "gist.github.com/assets/",
                    "github.com/user-attachments/assets/",
                    "github.localhost/user-attachments/assets/",
                ],
                $ = function $(e, t) {
                    return (0, b.YR)(e, function (e, n, r) {
                        if (
                            "element" === e.type &&
                            "img" === e.tagName &&
                            "src" in e.properties
                        ) {
                            var _o2,
                                _s2 = e.properties.src;
                            try {
                                _o2 = new URL(_s2, window.location.origin);
                            } catch (_unused) {}
                            var _i2 = _o2 ? _o2.hostname + _o2.pathname : "";
                            if (
                                !_o2 ||
                                !N.some(function (e) {
                                    return _i2.startsWith(e);
                                })
                            ) {
                                var _ref5;
                                var _o3 =
                                    (_ref5 = (0, j.s)(t, e)) !== null &&
                                    _ref5 !== void 0
                                        ? _ref5
                                        : "";
                                if (r && "number" == typeof n)
                                    return (
                                        (r.children[n] = {
                                            type: "element",
                                            tagName: "span",
                                            properties: {},
                                            children: [
                                                {
                                                    type: "text",
                                                    value: _o3,
                                                },
                                            ],
                                        }),
                                        ["skip", n]
                                    );
                            }
                        }
                    });
                },
                L = [
                    {
                        open: /(?:^|\\n)\$\$/,
                        close: /\$\$/,
                    },
                ],
                R = [
                    {
                        open: /\$`/,
                        close: /`\$/,
                    },
                    {
                        open: /\$\$(?! )/,
                        close: /(?!(?: )(?=\$\$))\$\$/,
                    },
                    {
                        open: /\$(?![ $])/,
                        close: /(?!(?:[ $])(?=\$))\$/,
                    },
                ],
                S = new Set(["math"]);
            var E = n(797345);
            function A(e) {
                return {
                    type: "displaymath",
                    value: e,
                    data: {
                        hName: "math-renderer",
                        hProperties: {
                            className: "js-display-math",
                            style: "display: block; text-align: center;",
                        },
                        hChildren: [
                            {
                                type: "text",
                                value: e,
                            },
                        ],
                    },
                };
            }
            var B = {
                    displayDelimiters: [].concat(L, [
                        {
                            open: /\[\s/,
                            close: /\s\]/,
                        },
                    ]),
                    inlineDelimiters: [].concat(R, [
                        {
                            open: /\( /,
                            close: / \)/,
                        },
                    ]),
                },
                I = {
                    "math-renderer": function mathRenderer(_ref6) {
                        var e = _ref6.node,
                            t = _ref6.children,
                            n = _ref6.className,
                            r = _objectWithoutProperties(_ref6, _excluded);
                        return (0, s.createElement)(
                            "math-renderer",
                            _objectSpread(
                                _objectSpread({}, r),
                                {},
                                {
                                    class: n,
                                }
                            ),
                            t
                        );
                    },
                },
                M = function M(e) {
                    return (0, b.YR)(e, function (e) {
                        "element" === e.type &&
                            !(
                                "a" === e.tagName &&
                                "href" in e.properties &&
                                e.properties.href.startsWith("#")
                            ) &&
                            (("a" === e.tagName || "target" in e.properties) &&
                                ((e.properties.target = "_blank"),
                                (e.properties.rel = "noopener noreferrer")),
                            !("target" in e.properties) &&
                                ("xlink:href" in e.properties ||
                                    "href" in e.properties) &&
                                (e.properties["xlink:show"] = "new"));
                    });
                };
            var O = n(235230);
            var P = "data-copilot-suggestion",
                D = (0, i.F)(P),
                T = /^<!--\s*copilot:suggestions\s*-->$/,
                W = !1,
                F = new Set();
            function H(e) {
                if (e !== W) {
                    var _iterator = _createForOfIteratorHelper(((W = e), F)),
                        _step;
                    try {
                        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                            var _t2 = _step.value;
                            _t2();
                        }
                    } catch (err) {
                        _iterator.e(err);
                    } finally {
                        _iterator.f();
                    }
                }
            }
            function V(e) {
                H(e.altKey);
            }
            function z() {
                H(!1);
            }
            function Y(e) {
                return (
                    0 === F.size &&
                        (window.addEventListener("keydown", V),
                        window.addEventListener("keyup", V),
                        window.addEventListener("blur", z)),
                    F.add(e),
                    function () {
                        (F.delete(e),
                            0 === F.size &&
                                (window.removeEventListener("keydown", V),
                                window.removeEventListener("keyup", V),
                                window.removeEventListener("blur", z)));
                    }
                );
            }
            function K() {
                return !1;
            }
            function U() {
                return W;
            }
            var J = function J() {
                return function () {};
            };
            function q() {
                return /Macintosh/.test(navigator.userAgent) ? "Option" : "Alt";
            }
            function Z() {
                return "Alt";
            }
            function X(e) {
                var t,
                    n,
                    i,
                    l,
                    a,
                    c,
                    d,
                    p = (0, o.c)(23),
                    f = e.suggestion,
                    g = e.className,
                    v = e.children,
                    _ref7 = (0, s.use)(u.F),
                    y = _ref7.onSuggestionSelect,
                    x = _ref7.chatMode,
                    b = (0, s.useSyncExternalStore)(Y, U, K),
                    k = (0, s.useSyncExternalStore)(J, q, Z);
                if (!y) {
                    var _e2;
                    return (
                        p[0] !== v || p[1] !== g
                            ? ((_e2 = (0, r.jsx)("li", {
                                  className: g,
                                  children: v,
                              })),
                              (p[0] = v),
                              (p[1] = g),
                              (p[2] = _e2))
                            : (_e2 = p[2]),
                        _e2
                    );
                }
                var w = b ? _.PlusIcon : _.PaperAirplaneIcon,
                    C = b
                        ? "Insert into the input"
                        : "Send suggestion (hold ".concat(k, " to insert)");
                p[3] !== x || p[4] !== y || p[5] !== f
                    ? ((t = function t(e) {
                          var t = !e.altKey;
                          ((0, h.BI)("copilot_suggestion_followup_click", {
                              mode: x,
                              submit: t,
                              suggestionLength: f.length,
                          }),
                              y(f, {
                                  submit: t,
                              }));
                      }),
                      (p[3] = x),
                      (p[4] = y),
                      (p[5] = f),
                      (p[6] = t))
                    : (t = p[6]);
                var j = t;
                return (
                    p[7] !== g
                        ? ((n = (0, m.$)(
                              g,
                              "suggestions-module__suggestionItem__Ci5kS"
                          )),
                          (p[7] = g),
                          (p[8] = n))
                        : (n = p[8]),
                    p[9] !== w
                        ? ((i = (0, r.jsx)(w, {
                              className:
                                  "suggestions-module__suggestionIcon__dfpY7",
                              size: 16,
                          })),
                          (p[9] = w),
                          (p[10] = i))
                        : (i = p[10]),
                    p[11] !== v
                        ? ((l = (0, r.jsx)("span", {
                              className:
                                  "suggestions-module__suggestionContent__WFNV7",
                              children: v,
                          })),
                          (p[11] = v),
                          (p[12] = l))
                        : (l = p[12]),
                    p[13] !== j || p[14] !== i || p[15] !== l
                        ? ((a = (0, r.jsxs)("button", {
                              type: "button",
                              className:
                                  "suggestions-module__suggestionButton__w1WYm",
                              onClick: j,
                              children: [i, l],
                          })),
                          (p[13] = j),
                          (p[14] = i),
                          (p[15] = l),
                          (p[16] = a))
                        : (a = p[16]),
                    p[17] !== C || p[18] !== a
                        ? ((c = (0, r.jsx)(O.m, {
                              text: C,
                              type: "description",
                              direction: "n",
                              children: a,
                          })),
                          (p[17] = C),
                          (p[18] = a),
                          (p[19] = c))
                        : (c = p[19]),
                    p[20] !== n || p[21] !== c
                        ? ((d = (0, r.jsx)("li", {
                              className: n,
                              children: c,
                          })),
                          (p[20] = n),
                          (p[21] = c),
                          (p[22] = d))
                        : (d = p[22]),
                    d
                );
            }
            X.displayName = "SuggestionListItem";
            var G = {
                li: function li(e, t) {
                    var n = e[P];
                    return "string" != typeof n
                        ? t
                        : (0, r.jsx)(X, {
                              suggestion: n,
                              className: e.className,
                              children: e.children,
                          });
                },
            };
            var Q = n(702663),
                ee = n(591905),
                et = n(778733),
                en = n(897485);
            var er = Symbol("renderFallthrough"),
                eo = function eo(e) {
                    return Object.entries(e);
                };
            function es(e) {
                var t = {};
                var _iterator2 = _createForOfIteratorHelper(e),
                    _step2;
                try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                        var _n = _step2.value;
                        var _iterator3 = _createForOfIteratorHelper(eo(_n)),
                            _step3;
                        try {
                            var _loop = function _loop() {
                                var _step3$value = _slicedToArray(
                                        _step3.value,
                                        2
                                    ),
                                    e = _step3$value[0],
                                    r = _step3$value[1];
                                if (r) {
                                    var _n2 = t[e];
                                    t[e] = function (t) {
                                        var _n3;
                                        var o = r(t, er);
                                        return o !== er
                                            ? o
                                            : (_n3 =
                                                    _n2 === null ||
                                                    _n2 === void 0
                                                        ? void 0
                                                        : _n2(t)) !== null &&
                                                _n3 !== void 0
                                              ? _n3
                                              : (0, s.createElement)(e, t);
                                    };
                                }
                            };
                            for (
                                _iterator3.s();
                                !(_step3 = _iterator3.n()).done;

                            ) {
                                _loop();
                            }
                        } catch (err) {
                            _iterator3.e(err);
                        } finally {
                            _iterator3.f();
                        }
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally {
                    _iterator2.f();
                }
                return t;
            }
            function ei(e) {
                return e
                    .map(function (e) {
                        return e.reactComponents;
                    })
                    .filter(function (e) {
                        return !!e;
                    });
            }
            var el = n(654322),
                ea = n(799247);
            var ec = /^\s*$/,
                ed = [
                    [/^\s`/, /^[^\s]`/, "`"],
                    [/^\s_/, /^[^\s]_/, "_"],
                    [/^\s\*\*/, /^[^\s]\*\*/, "**"],
                    [/^\s~~/, /^[^\s]~~/, "~~"],
                    [/^\s\*/, /^[^\s]\*/, "*"],
                    [/^\s\[/, /^[^\s]\]/, "](#)"],
                    [/^\]\(/, /^[^\s]\)/, ")"],
                ];
            var eu = n(419519),
                em = n(637337);
            var eh = null,
                ep = _asyncToGenerator(
                    /*#__PURE__*/ _regenerator().m(function _callee() {
                        var _yield$Promise$all, _yield$Promise$all2, e, t, r;
                        return _regenerator().w(function (_context) {
                            while (1)
                                switch (_context.n) {
                                    case 0:
                                        if (!em.X3) {
                                            _context.n = 1;
                                            break;
                                        }
                                        return _context.a(
                                            2,
                                            Promise.resolve(null)
                                        );
                                    case 1:
                                        if (!(null !== eh)) {
                                            _context.n = 2;
                                            break;
                                        }
                                        return _context.a(
                                            2,
                                            Promise.resolve(eh)
                                        );
                                    case 2:
                                        _context.n = 3;
                                        return Promise.all([
                                            Promise.all([
                                                n.e(31181),
                                                n.e(14789),
                                            ]).then(n.bind(n, 54948)),
                                            Promise.all([
                                                n.e(31181),
                                                n.e(65785),
                                                n.e(27871),
                                            ]).then(n.bind(n, 174210)),
                                        ]);
                                    case 3:
                                        _yield$Promise$all = _context.v;
                                        _yield$Promise$all2 = _slicedToArray(
                                            _yield$Promise$all,
                                            2
                                        );
                                        e = _yield$Promise$all2[0];
                                        t = _yield$Promise$all2[1];
                                        r = [
                                            e.default,
                                            {
                                                languages: t.all,
                                            },
                                        ];
                                        return _context.a(2, ((eh = r), r));
                                }
                        }, _callee);
                    })
                )(),
                ef = "MarkdownRenderer-module__noFade__koxjj",
                e_ = [];
            function eg(e) {
                var t,
                    n,
                    i,
                    l,
                    a,
                    c,
                    d,
                    h,
                    p,
                    f,
                    _,
                    g,
                    v,
                    y,
                    x,
                    k,
                    N,
                    O,
                    P,
                    W,
                    F,
                    H,
                    V = (0, o.c)(55),
                    z = e.ref,
                    Y = e.className,
                    K = e.markdown,
                    U = e.chatMode,
                    J = e.openLinksInCurrentTab,
                    q = e.onLinkClick,
                    Z = e.extensions,
                    X = e.isStreaming,
                    er = e.accessibleHeader,
                    eo = e.copilotAnnotations,
                    em = e.wrapCodeLines,
                    ef = e.onWrapCodeLinesChange,
                    eg = e.onSuggestionSelect,
                    ew = void 0 === Z ? e_ : Z,
                    _ref9 = (0, s.useState)(
                        X !== null && X !== void 0 ? X : !1
                    ),
                    _ref0 = _slicedToArray(_ref9, 2),
                    eC = _ref0[0],
                    ej = _ref0[1];
                (V[0] !== X
                    ? ((t = function t() {
                          if (X) ej(!0);
                          else {
                              var _e3 = setTimeout(function () {
                                  ej(!1);
                              }, 750);
                              return function () {
                                  return clearTimeout(_e3);
                              };
                          }
                      }),
                      (n = [X]),
                      (V[0] = X),
                      (V[1] = t),
                      (V[2] = n))
                    : ((t = V[1]), (n = V[2])),
                    (0, s.useEffect)(t, n),
                    V[3] === Symbol.for("react.memo_cache_sentinel")
                        ? ((i = {
                              transformMarkdown: function transformMarkdown(e) {
                                  return (0, b.YR)(e, "code", function (e) {
                                      var _e$lang,
                                          _e$position$start$off,
                                          _e$position,
                                          _e$position$end$offse,
                                          _e$position2;
                                      e.data = _objectSpread(
                                          _objectSpread({}, e.data),
                                          {},
                                          {
                                              hName: "code",
                                              hProperties: {
                                                  [w]: JSON.stringify({
                                                      language:
                                                          (_e$lang = e.lang) !==
                                                              null &&
                                                          _e$lang !== void 0
                                                              ? _e$lang
                                                              : "",
                                                      code: e.value,
                                                      startOffset:
                                                          (_e$position$start$off =
                                                              (_e$position =
                                                                  e.position) ===
                                                                  null ||
                                                              _e$position ===
                                                                  void 0
                                                                  ? void 0
                                                                  : _e$position
                                                                        .start
                                                                        .offset) !==
                                                              null &&
                                                          _e$position$start$off !==
                                                              void 0
                                                              ? _e$position$start$off
                                                              : -1,
                                                      endOffset:
                                                          (_e$position$end$offse =
                                                              (_e$position2 =
                                                                  e.position) ===
                                                                  null ||
                                                              _e$position2 ===
                                                                  void 0
                                                                  ? void 0
                                                                  : _e$position2
                                                                        .end
                                                                        .offset) !==
                                                              null &&
                                                          _e$position$end$offse !==
                                                              void 0
                                                              ? _e$position$end$offse
                                                              : -1,
                                                  }),
                                              },
                                          }
                                      );
                                  });
                              },
                              transformHtml: function transformHtml(e) {
                                  return (0, b.YR)(
                                      e,
                                      "element",
                                      function (e, t, n) {
                                          var _e$children, _e$children2;
                                          var r =
                                              (_e$children = e.children) ===
                                                  null || _e$children === void 0
                                                  ? void 0
                                                  : _e$children[0];
                                          n &&
                                              void 0 !== t &&
                                              "pre" === e.tagName &&
                                              ((_e$children2 = e.children) ===
                                                  null ||
                                              _e$children2 === void 0
                                                  ? void 0
                                                  : _e$children2.length) ===
                                                  1 &&
                                              (r === null || r === void 0
                                                  ? void 0
                                                  : r.type) === "element" &&
                                              "code" === r.tagName &&
                                              w in r.properties &&
                                              n.children.splice(t, 1, r);
                                      }
                                  );
                              },
                              reactComponents: C,
                          }),
                          (l = {
                              transformMarkdown: (function () {
                                  var _ref1 =
                                          arguments.length > 0 &&
                                          arguments[0] !== undefined
                                              ? arguments[0]
                                              : {},
                                      _ref1$displayDelimite =
                                          _ref1.displayDelimiters,
                                      e =
                                          _ref1$displayDelimite === void 0
                                              ? L
                                              : _ref1$displayDelimite,
                                      _ref1$inlineDelimiter =
                                          _ref1.inlineDelimiters,
                                      t =
                                          _ref1$inlineDelimiter === void 0
                                              ? R
                                              : _ref1$inlineDelimiter,
                                      _ref1$codeBlockLangua =
                                          _ref1.codeBlockLanguages,
                                      n =
                                          _ref1$codeBlockLangua === void 0
                                              ? S
                                              : _ref1$codeBlockLangua;
                                  return function (r) {
                                      var o, s;
                                      (((o = e.map(function (_ref10) {
                                          var e = _ref10.open,
                                              t = _ref10.close;
                                          return RegExp(
                                              "(?:^|\\n) *"
                                                  .concat(
                                                      e.source,
                                                      "((?:\n|.)+?)"
                                                  )
                                                  .concat(
                                                      t.source,
                                                      "(?= *(?:\\n|$))"
                                                  ),
                                              "g"
                                          );
                                      })),
                                      function (e) {
                                          return (0, E.T)(
                                              e,
                                              o.map(function (e) {
                                                  return [
                                                      e,
                                                      function (e, t) {
                                                          return A(t);
                                                      },
                                                  ];
                                              })
                                          );
                                      })(r),
                                          (function (e) {
                                              return (0, b.YR)(
                                                  e,
                                                  "code",
                                                  function (e, t, r) {
                                                      e.lang &&
                                                          n.has(e.lang) &&
                                                          r &&
                                                          void 0 !== t &&
                                                          r.children.splice(
                                                              t,
                                                              1,
                                                              A(e.value)
                                                          );
                                                  }
                                              );
                                          })(r),
                                          ((s = t.map(function (_ref11) {
                                              var e = _ref11.open,
                                                  t = _ref11.close;
                                              return RegExp(
                                                  "(?!(?:[a-z0-9])(?="
                                                      .concat(e.source, "(.+?)")
                                                      .concat(t.source, "))")
                                                      .concat(e.source, "(.+?)")
                                                      .concat(
                                                          t.source,
                                                          "(?![a-z0-9])"
                                                      ),
                                                  "g"
                                              );
                                          })),
                                          function (e) {
                                              return (0, E.T)(
                                                  e,
                                                  s.map(function (e) {
                                                      return [
                                                          e,
                                                          function (e, t) {
                                                              return {
                                                                  type: "inlinemath",
                                                                  value: t,
                                                                  data: {
                                                                      hName: "math-renderer",
                                                                      hProperties:
                                                                          {
                                                                              className:
                                                                                  "js-inline-math",
                                                                              style: "display: inline-block;",
                                                                          },
                                                                      hChildren:
                                                                          [
                                                                              {
                                                                                  type: "text",
                                                                                  value: t,
                                                                              },
                                                                          ],
                                                                  },
                                                              };
                                                          },
                                                      ];
                                                  })
                                              );
                                          })(r));
                                  };
                              })(B),
                              reactComponents: I,
                          }),
                          (V[3] = i),
                          (V[4] = l))
                        : ((i = V[3]), (l = V[4])),
                    V[5] !== J
                        ? ((a = (function (_ref12) {
                              var e = _ref12.openLinksInCurrentTab;
                              return {
                                  transformHtml: e ? void 0 : M,
                              };
                          })({
                              openLinksInCurrentTab: J,
                          })),
                          (V[5] = J),
                          (V[6] = a))
                        : (a = V[6]),
                    V[7] !== eC
                        ? ((c = (function (_ref13) {
                              var e = _ref13.isStreaming;
                              return e
                                  ? {
                                        preprocessMarkdown:
                                            function preprocessMarkdown(e) {
                                                return "".concat(
                                                    (function (e) {
                                                        var t = new Set();
                                                        for (
                                                            var _n4 = -1,
                                                                _r2 =
                                                                    " ".concat(
                                                                        e.slice(
                                                                            0,
                                                                            2
                                                                        )
                                                                    );
                                                            _n4 <= e.length - 3;
                                                            _n4++,
                                                                _r2 = e.slice(
                                                                    _n4,
                                                                    _n4 + 3
                                                                )
                                                        ) {
                                                            var _iterator4 =
                                                                    _createForOfIteratorHelper(
                                                                        ed
                                                                    ),
                                                                _step4;
                                                            try {
                                                                for (
                                                                    _iterator4.s();
                                                                    !(_step4 =
                                                                        _iterator4.n())
                                                                        .done;

                                                                ) {
                                                                    var _step4$value =
                                                                            _slicedToArray(
                                                                                _step4.value,
                                                                                3
                                                                            ),
                                                                        _e4 =
                                                                            _step4$value[0],
                                                                        _n5 =
                                                                            _step4$value[1],
                                                                        _o4 =
                                                                            _step4$value[2];
                                                                    if (
                                                                        !t.has(
                                                                            _o4
                                                                        ) &&
                                                                        _e4.test(
                                                                            _r2
                                                                        )
                                                                    ) {
                                                                        t.add(
                                                                            _o4
                                                                        );
                                                                        break;
                                                                    } else if (
                                                                        t.has(
                                                                            _o4
                                                                        ) &&
                                                                        _n5.test(
                                                                            _r2
                                                                        )
                                                                    ) {
                                                                        t.delete(
                                                                            _o4
                                                                        );
                                                                        break;
                                                                    }
                                                                }
                                                            } catch (err) {
                                                                _iterator4.e(
                                                                    err
                                                                );
                                                            } finally {
                                                                _iterator4.f();
                                                            }
                                                        }
                                                        var _iterator5 =
                                                                _createForOfIteratorHelper(
                                                                    Array.from(
                                                                        t
                                                                    ).reverse()
                                                                ),
                                                            _step5;
                                                        try {
                                                            for (
                                                                _iterator5.s();
                                                                !(_step5 =
                                                                    _iterator5.n())
                                                                    .done;

                                                            ) {
                                                                var _n6 =
                                                                    _step5.value;
                                                                e += _n6;
                                                            }
                                                        } catch (err) {
                                                            _iterator5.e(err);
                                                        } finally {
                                                            _iterator5.f();
                                                        }
                                                        return e;
                                                    })(e),
                                                    "\n\uE000"
                                                );
                                            },
                                        transformMarkdown:
                                            function transformMarkdown(e) {
                                                return (0, ea.V)(
                                                    e,
                                                    function (e, t) {
                                                        var _e$value;
                                                        if (
                                                            "value" in e &&
                                                            (_e$value =
                                                                e.value) !==
                                                                null &&
                                                            _e$value !==
                                                                void 0 &&
                                                            _e$value.includes(
                                                                "\uE000"
                                                            )
                                                        ) {
                                                            var _iterator6 =
                                                                    _createForOfIteratorHelper(
                                                                        ((e.value =
                                                                            e.value.replace(
                                                                                "\uE000",
                                                                                ""
                                                                            )),
                                                                        (e.isStreaming =
                                                                            !0),
                                                                        t)
                                                                    ),
                                                                _step6;
                                                            try {
                                                                for (
                                                                    _iterator6.s();
                                                                    !(_step6 =
                                                                        _iterator6.n())
                                                                        .done;

                                                                ) {
                                                                    var _n7 =
                                                                        _step6.value;
                                                                    _n7.isStreaming =
                                                                        !0;
                                                                }
                                                            } catch (err) {
                                                                _iterator6.e(
                                                                    err
                                                                );
                                                            } finally {
                                                                _iterator6.f();
                                                            }
                                                        }
                                                    }
                                                );
                                            },
                                        transformHtml: function transformHtml(
                                            e
                                        ) {
                                            return (0, b.YR)(
                                                e,
                                                "text",
                                                function (e, t, n) {
                                                    var _n$children;
                                                    if (
                                                        void 0 === n ||
                                                        void 0 === t ||
                                                        ec.test(e.value)
                                                    )
                                                        return;
                                                    var r = e.value
                                                        .split(" ")
                                                        .map(
                                                            function (
                                                                e,
                                                                t,
                                                                _ref14
                                                            ) {
                                                                var n =
                                                                    _ref14.length;
                                                                var r =
                                                                    t < n - 1
                                                                        ? "".concat(
                                                                              e,
                                                                              " "
                                                                          )
                                                                        : e;
                                                                return ec.test(
                                                                    r
                                                                )
                                                                    ? {
                                                                          type: "text",
                                                                          value: r,
                                                                      }
                                                                    : (0, el.h)(
                                                                          "span",
                                                                          r
                                                                      );
                                                            }
                                                        );
                                                    return (
                                                        (_n$children =
                                                            n.children).splice.apply(
                                                            _n$children,
                                                            [t, 1].concat(
                                                                _toConsumableArray(
                                                                    r
                                                                )
                                                            )
                                                        ),
                                                        t + r.length
                                                    );
                                                }
                                            );
                                        },
                                    }
                                  : {};
                          })({
                              isStreaming: eC,
                          })),
                          (V[7] = eC),
                          (V[8] = c))
                        : (c = V[8]),
                    V[9] === Symbol.for("react.memo_cache_sentinel")
                        ? ((d = {
                              transformHtml: $,
                          }),
                          (h = {
                              transformMarkdown: function transformMarkdown(
                                  e,
                                  t
                              ) {
                                  return (0, b.YR)(
                                      e,
                                      "html",
                                      function (e, n, r) {
                                          if (
                                              null != n &&
                                              r &&
                                              T.test(e.value.trim())
                                          ) {
                                              var _iterator7 =
                                                      _createForOfIteratorHelper(
                                                          r.children.slice(
                                                              n + 1
                                                          )
                                                      ),
                                                  _step7;
                                              try {
                                                  for (
                                                      _iterator7.s();
                                                      !(_step7 = _iterator7.n())
                                                          .done;

                                                  ) {
                                                      var _e5 = _step7.value;
                                                      if ("list" === _e5.type) {
                                                          var _e5$data;
                                                          var _iterator8 =
                                                                  _createForOfIteratorHelper(
                                                                      ((_e5.data =
                                                                          _objectSpread(
                                                                              _objectSpread(
                                                                                  {},
                                                                                  _e5.data
                                                                              ),
                                                                              {},
                                                                              {
                                                                                  hProperties:
                                                                                      _objectSpread(
                                                                                          _objectSpread(
                                                                                              {},
                                                                                              (_e5$data =
                                                                                                  _e5.data) ===
                                                                                                  null ||
                                                                                                  _e5$data ===
                                                                                                      void 0
                                                                                                  ? void 0
                                                                                                  : _e5$data.hProperties
                                                                                          ),
                                                                                          {},
                                                                                          {
                                                                                              className:
                                                                                                  "suggestions-module__suggestionsList__Ztjwa",
                                                                                          }
                                                                                      ),
                                                                              }
                                                                          )),
                                                                      _e5.children)
                                                                  ),
                                                              _step8;
                                                          try {
                                                              for (
                                                                  _iterator8.s();
                                                                  !(_step8 =
                                                                      _iterator8.n())
                                                                      .done;

                                                              ) {
                                                                  var _n8$data;
                                                                  var _n8 =
                                                                      _step8.value;
                                                                  var _e6 =
                                                                      (function (
                                                                          e,
                                                                          t
                                                                      ) {
                                                                          var n =
                                                                                  "children" in
                                                                                      e &&
                                                                                  e.children
                                                                                      ? e.children
                                                                                      : [],
                                                                              r =
                                                                                  n.at(
                                                                                      0
                                                                                  ),
                                                                              o =
                                                                                  n.at(
                                                                                      -1
                                                                                  );
                                                                          if (
                                                                              r !==
                                                                                  null &&
                                                                              r !==
                                                                                  void 0 &&
                                                                              r.position &&
                                                                              o !==
                                                                                  null &&
                                                                              o !==
                                                                                  void 0 &&
                                                                              o.position
                                                                          ) {
                                                                              var _ref15;
                                                                              var _e7 =
                                                                                  (_ref15 =
                                                                                      (0,
                                                                                      j.s)(
                                                                                          t,
                                                                                          {
                                                                                              start: r
                                                                                                  .position
                                                                                                  .start,
                                                                                              end: o
                                                                                                  .position
                                                                                                  .end,
                                                                                          }
                                                                                      )) ===
                                                                                      null ||
                                                                                  _ref15 ===
                                                                                      void 0
                                                                                      ? void 0
                                                                                      : _ref15.trim();
                                                                              if (
                                                                                  _e7
                                                                              )
                                                                                  return _e7;
                                                                          }
                                                                          return (function e(
                                                                              t
                                                                          ) {
                                                                              return "value" in
                                                                                  t &&
                                                                                  "string" ==
                                                                                      typeof t.value
                                                                                  ? t.value
                                                                                  : "children" in
                                                                                          t &&
                                                                                      Array.isArray(
                                                                                          t.children
                                                                                      )
                                                                                    ? t.children
                                                                                          .map(
                                                                                              e
                                                                                          )
                                                                                          .join(
                                                                                              ""
                                                                                          )
                                                                                    : "";
                                                                          })(
                                                                              e
                                                                          ).trim();
                                                                      })(
                                                                          _n8,
                                                                          t
                                                                      );
                                                                  _e6 &&
                                                                      (_n8.data =
                                                                          _objectSpread(
                                                                              _objectSpread(
                                                                                  {},
                                                                                  _n8.data
                                                                              ),
                                                                              {},
                                                                              {
                                                                                  hProperties:
                                                                                      _objectSpread(
                                                                                          _objectSpread(
                                                                                              {},
                                                                                              (_n8$data =
                                                                                                  _n8.data) ===
                                                                                                  null ||
                                                                                                  _n8$data ===
                                                                                                      void 0
                                                                                                  ? void 0
                                                                                                  : _n8$data.hProperties
                                                                                          ),
                                                                                          {},
                                                                                          {
                                                                                              [D]: _e6,
                                                                                          }
                                                                                      ),
                                                                              }
                                                                          ));
                                                              }
                                                          } catch (err) {
                                                              _iterator8.e(err);
                                                          } finally {
                                                              _iterator8.f();
                                                          }
                                                          break;
                                                      }
                                                      if (
                                                          "html" !== _e5.type &&
                                                          "text" !== _e5.type
                                                      )
                                                          break;
                                                  }
                                              } catch (err) {
                                                  _iterator7.e(err);
                                              } finally {
                                                  _iterator7.f();
                                              }
                                              return (
                                                  r.children.splice(n, 1),
                                                  ["skip", n]
                                              );
                                          }
                                      }
                                  );
                              },
                              reactComponents: G,
                          }),
                          (V[9] = d),
                          (V[10] = h))
                        : ((d = V[9]), (h = V[10])),
                    V[11] !== ew || V[12] !== a || V[13] !== c
                        ? ((p = [i, l, a, c, d, h].concat(
                              _toConsumableArray(ew)
                          )),
                          (V[11] = ew),
                          (V[12] = a),
                          (V[13] = c),
                          (V[14] = p))
                        : (p = V[14]));
                var eN = p;
                V[15] !== eN
                    ? ((f = [ee.A, et.A, en.A].concat(
                          _toConsumableArray(eN.map(ek).filter(eb))
                      )),
                      (V[15] = eN),
                      (V[16] = f))
                    : (f = V[16]);
                var e$ = f,
                    _ref16 = (0, eu.V)(),
                    eL = _ref16.isBrowser,
                    eR = (function () {
                        var e,
                            t,
                            n = (0, o.c)(2),
                            _ref17 = (0, s.useState)(eh),
                            _ref18 = _slicedToArray(_ref17, 2),
                            r = _ref18[0],
                            i = _ref18[1];
                        return (
                            n[0] === Symbol.for("react.memo_cache_sentinel")
                                ? ((e = function e() {
                                      eh ||
                                          _asyncToGenerator(
                                              /*#__PURE__*/ _regenerator().m(
                                                  function _callee2() {
                                                      var _t3, _t4;
                                                      return _regenerator().w(
                                                          function (_context2) {
                                                              while (1)
                                                                  switch (
                                                                      _context2.n
                                                                  ) {
                                                                      case 0:
                                                                          _t3 =
                                                                              i;
                                                                          _context2.n = 1;
                                                                          return ep;
                                                                      case 1:
                                                                          _t4 =
                                                                              _context2.v;
                                                                          _t3(
                                                                              _t4
                                                                          );
                                                                      case 2:
                                                                          return _context2.a(
                                                                              2
                                                                          );
                                                                  }
                                                          },
                                                          _callee2
                                                      );
                                                  }
                                              )
                                          )();
                                  }),
                                  (t = []),
                                  (n[0] = e),
                                  (n[1] = t))
                                : ((e = n[0]), (t = n[1])),
                            (0, s.useEffect)(e, t),
                            r
                        );
                    })();
                e: {
                    var _e8;
                    if (!eL) {
                        var _e9;
                        (V[17] === Symbol.for("react.memo_cache_sentinel")
                            ? ((_e9 = []), (V[17] = _e9))
                            : (_e9 = V[17]),
                            (_ = _e9));
                        break e;
                    }
                    (V[18] !== eN || V[19] !== eR
                        ? ((_e8 = _toConsumableArray(eN.map(ex).filter(ey))),
                          eR && _e8.unshift(eR),
                          (V[18] = eN),
                          (V[19] = eR),
                          (V[20] = _e8))
                        : (_e8 = V[20]),
                        (_ = _e8));
                }
                var eS = _,
                    eE = (function (e) {
                        var t,
                            n,
                            r,
                            i = (0, o.c)(5);
                        i[0] !== e
                            ? ((t = function t() {
                                  return es(ei(e));
                              }),
                              (i[0] = e),
                              (i[1] = t))
                            : (t = i[1]);
                        var _ref20 = (0, s.useState)(t),
                            _ref21 = _slicedToArray(_ref20, 2),
                            l = _ref21[0],
                            a = _ref21[1],
                            c = (0, s.useRef)(e);
                        return (
                            i[2] !== e
                                ? ((n = function n() {
                                      var t = ei(c.current),
                                          n = ei(e);
                                      c.current = e;
                                      var r = null;
                                      var _iterator9 =
                                              _createForOfIteratorHelper(
                                                  (t.length !== n.length &&
                                                      (r = Error(
                                                          "A `MarkdownRenderer` extension containing a `reactComponents` field was added or removed. React extensions must remain referentially constant."
                                                      )),
                                                  t.entries())
                                              ),
                                          _step9;
                                      try {
                                          for (
                                              _iterator9.s();
                                              !(_step9 = _iterator9.n()).done;

                                          ) {
                                              var _step9$value = _slicedToArray(
                                                      _step9.value,
                                                      2
                                                  ),
                                                  _e0 = _step9$value[0],
                                                  _o5 = _step9$value[1];
                                              _o5 !== n[_e0] &&
                                                  (r = Error(
                                                      "The `reactComponents` field in at least one `MarkdownRenderer` extension changed, or extensions containing `reactComponent` fields were reordered. React extensions must remain referentially constant.\nNOTE: This error may be safely ignored if it occurs due to hot-reloading in local development."
                                                  ));
                                          }
                                      } catch (err) {
                                          _iterator9.e(err);
                                      } finally {
                                          _iterator9.f();
                                      }
                                      r &&
                                          (a(es(n)),
                                          _asyncToGenerator(
                                              /*#__PURE__*/ _regenerator().m(
                                                  function _callee3() {
                                                      return _regenerator().w(
                                                          function (_context3) {
                                                              while (1)
                                                                  switch (
                                                                      _context3.n
                                                                  ) {
                                                                      case 0:
                                                                          throw r;
                                                                      case 1:
                                                                          return _context3.a(
                                                                              2
                                                                          );
                                                                  }
                                                          },
                                                          _callee3
                                                      );
                                                  }
                                              )
                                          )());
                                  }),
                                  (r = [e]),
                                  (i[2] = e),
                                  (i[3] = n),
                                  (i[4] = r))
                                : ((n = i[3]), (r = i[4])),
                            (0, s.useEffect)(n, r),
                            l
                        );
                    })(eN);
                V[21] !== eN || V[22] !== K
                    ? ((g = eN.reduce(ev, K)),
                      (V[21] = eN),
                      (V[22] = K),
                      (V[23] = g))
                    : (g = V[23]);
                var eA = g,
                    eB = (0, s.useRef)(null);
                V[24] !== z
                    ? ((v = function v(e) {
                          ((eB.current = e),
                              "function" == typeof z
                                  ? z(e)
                                  : z && (z.current = e));
                      }),
                      (V[24] = z),
                      (V[25] = v))
                    : (v = V[25]);
                var eI = v;
                (V[26] !== q
                    ? ((y = function y() {
                          if (!q) return;
                          var e = eB.current;
                          if (!e) return;
                          var t = function t(_t5) {
                              var n = _t5.target.closest("a");
                              n && e.contains(n) && q(_t5);
                          };
                          return (
                              e.addEventListener("click", t),
                              function () {
                                  return e.removeEventListener("click", t);
                              }
                          );
                      }),
                      (x = [q]),
                      (V[26] = q),
                      (V[27] = y),
                      (V[28] = x))
                    : ((y = V[27]), (x = V[28])),
                    (0, s.useEffect)(y, x),
                    V[29] !== U ||
                    V[30] !== eo ||
                    V[31] !== X ||
                    V[32] !== eg ||
                    V[33] !== ef ||
                    V[34] !== em
                        ? ((k = {
                              isStreaming: X,
                              chatMode: U,
                              copilotAnnotations: eo,
                              wrapCodeLines: em,
                              onWrapCodeLinesChange: ef,
                              onSuggestionSelect: eg,
                          }),
                          (V[29] = U),
                          (V[30] = eo),
                          (V[31] = X),
                          (V[32] = eg),
                          (V[33] = ef),
                          (V[34] = em),
                          (V[35] = k))
                        : (k = V[35]));
                var eM = k;
                V[36] !== er
                    ? ((N =
                          er &&
                          (0, r.jsx)("h3", {
                              className: (0, m.$)(
                                  "sr-only",
                                  "MarkdownRenderer-module__accessibleHeader__pNAp5"
                              ),
                              children: er,
                          })),
                      (V[36] = er),
                      (V[37] = N))
                    : (N = V[37]);
                var eO = eC && "MarkdownRenderer-module__fadeInContent__Z6XDA";
                return (
                    V[38] !== Y || V[39] !== eO
                        ? ((O = (0, m.$)(
                              "markdown-body",
                              "MarkdownRenderer-module__container__sJ8jf",
                              Y,
                              eO
                          )),
                          (V[38] = Y),
                          (V[39] = eO),
                          (V[40] = O))
                        : (O = V[40]),
                    V[41] === Symbol.for("react.memo_cache_sentinel")
                        ? ((P = {
                              "--MarkdownRenderer_streaming-fade-duration":
                                  "750ms",
                          }),
                          (V[41] = P))
                        : (P = V[41]),
                    V[42] !== eE || V[43] !== eA || V[44] !== eS || V[45] !== e$
                        ? ((W = (0, r.jsx)(Q.o, {
                              remarkPlugins: e$,
                              rehypePlugins: eS,
                              components: eE,
                              children: eA,
                          })),
                          (V[42] = eE),
                          (V[43] = eA),
                          (V[44] = eS),
                          (V[45] = e$),
                          (V[46] = W))
                        : (W = V[46]),
                    V[47] !== eI || V[48] !== O || V[49] !== W
                        ? ((F = (0, r.jsx)("div", {
                              ref: eI,
                              className: O,
                              style: P,
                              "data-copilot-markdown": !0,
                              children: W,
                          })),
                          (V[47] = eI),
                          (V[48] = O),
                          (V[49] = W),
                          (V[50] = F))
                        : (F = V[50]),
                    V[51] !== eM || V[52] !== N || V[53] !== F
                        ? ((H = (0, r.jsxs)(u.F, {
                              value: eM,
                              children: [N, F],
                          })),
                          (V[51] = eM),
                          (V[52] = N),
                          (V[53] = F),
                          (V[54] = H))
                        : (H = V[54]),
                    H
                );
            }
            function ev(e, t) {
                var _t$preprocessMarkdown, _t$preprocessMarkdown2;
                return (_t$preprocessMarkdown =
                    (_t$preprocessMarkdown2 = t.preprocessMarkdown) === null ||
                    _t$preprocessMarkdown2 === void 0
                        ? void 0
                        : _t$preprocessMarkdown2.call(t, e)) !== null &&
                    _t$preprocessMarkdown !== void 0
                    ? _t$preprocessMarkdown
                    : e;
            }
            function ey(e) {
                return !!e;
            }
            function ex(e) {
                return e.transformHtml
                    ? function () {
                          return e.transformHtml;
                      }
                    : void 0;
            }
            function eb(e) {
                return !!e;
            }
            function ek(e) {
                return e.transformMarkdown
                    ? function () {
                          return e.transformMarkdown;
                      }
                    : void 0;
            }
            eg.displayName = "MarkdownRenderer";
        },
        644890: function _(e, t, n) {
            var r = (0, n(296540).createContext)({});
            ((r.displayName = "ExtensionContext"),
                n.d(
                    t,
                    {},
                    {
                        F: r,
                    }
                ));
        },
        590691: function _(e, t, n) {
            n.d(t, {
                t: function t() {
                    return p;
                },
            });
            var r = n(474848),
                o = n(916522),
                s = n(54950),
                i = n(438621),
                l = n(97093),
                a = n(400206);
            function c(e) {
                var t,
                    n,
                    s,
                    a,
                    c,
                    d = (0, o.c)(11),
                    u = e.summary,
                    m = e.icon,
                    h = e.children;
                return (
                    d[0] === Symbol.for("react.memo_cache_sentinel")
                        ? ((t = (0, r.jsx)("span", {
                              className:
                                  "AnnotationsList-module__chevron__TDCjv",
                              children: (0, r.jsx)(i.ChevronRightIcon, {
                                  size: "small",
                              }),
                          })),
                          (d[0] = t))
                        : (t = d[0]),
                    d[1] !== u
                        ? ((n = (0, r.jsx)("span", {
                              className:
                                  "AnnotationsList-module__summaryText__sxZcc",
                              children: u,
                          })),
                          (d[1] = u),
                          (d[2] = n))
                        : (n = d[2]),
                    d[3] !== m || d[4] !== n
                        ? ((s = (0, r.jsxs)("summary", {
                              className:
                                  "AnnotationsList-module__summary__uMc25",
                              children: [t, m, " ", n],
                          })),
                          (d[3] = m),
                          (d[4] = n),
                          (d[5] = s))
                        : (s = d[5]),
                    d[6] !== h
                        ? ((a = (0, r.jsx)("div", {
                              className: "AnnotationsList-module__items__TtbJ_",
                              children: (0, r.jsx)(l.l, {
                                  variant: "full",
                                  children: h,
                              }),
                          })),
                          (d[6] = h),
                          (d[7] = a))
                        : (a = d[7]),
                    d[8] !== s || d[9] !== a
                        ? ((c = (0, r.jsxs)("details", {
                              children: [s, a],
                          })),
                          (d[8] = s),
                          (d[9] = a),
                          (d[10] = c))
                        : (c = d[10]),
                    c
                );
            }
            function d(e) {
                var t,
                    n = (0, o.c)(3),
                    s = e.references;
                if (n[0] !== s) {
                    var _e1,
                        _o6 = (function (e) {
                            var t = new Map();
                            var _iterator0 = _createForOfIteratorHelper(e),
                                _step0;
                            try {
                                for (
                                    _iterator0.s();
                                    !(_step0 = _iterator0.n()).done;

                                ) {
                                    var _n9 = _step0.value;
                                    var _e10 = (function (e) {
                                        var t =
                                            /^https?:\/\/github\.com\/([^/]+)\/([^/]+)/.exec(
                                                e
                                            );
                                        return t && t[1] && t[2]
                                            ? {
                                                  owner: t[1],
                                                  name: t[2],
                                              }
                                            : null;
                                    })(_n9.sourceURL);
                                    if (!_e10) continue;
                                    var _r3 = _e10.owner,
                                        _o7 = _e10.name;
                                    t.set(_o7, {
                                        name: _o7,
                                        owner: _r3,
                                        url: "https://github.com/"
                                            .concat(_r3, "/")
                                            .concat(_o7),
                                        license:
                                            "NOASSERTION" === _n9.license
                                                ? null
                                                : _n9.license,
                                    });
                                }
                            } catch (err) {
                                _iterator0.e(err);
                            } finally {
                                _iterator0.f();
                            }
                            return Array.from(t.values()).sort(function (e, t) {
                                return e.name.localeCompare(t.name);
                            });
                        })(s);
                    (n[2] === Symbol.for("react.memo_cache_sentinel")
                        ? ((_e1 = (0, r.jsx)("span", {
                              style: {
                                  color: "var(--fgColor-muted)",
                              },
                              children: (0, r.jsx)(i.LawIcon, {}),
                          })),
                          (n[2] = _e1))
                        : (_e1 = n[2]),
                        (t = (0, r.jsx)(c, {
                            icon: _e1,
                            summary: "Public code references from "
                                .concat(_o6.length, " ")
                                .concat(
                                    1 === _o6.length
                                        ? "repository"
                                        : "repositories"
                                ),
                            children: _o6.map(u),
                        })),
                        (n[0] = s),
                        (n[1] = t));
                } else t = n[1];
                return t;
            }
            function u(e) {
                return (0, r.jsxs)(
                    l.l.LinkItem,
                    {
                        href: e.url,
                        tabIndex: void 0,
                        children: [
                            (0, r.jsx)(l.l.LeadingVisual, {
                                children: (0, r.jsx)(a.r, {
                                    src: "https://github.com/".concat(
                                        e.owner,
                                        ".png"
                                    ),
                                    alt: "@".concat(e.owner, " avatar"),
                                    size: 20,
                                }),
                            }),
                            e.owner,
                            "/",
                            e.name,
                            (0, r.jsx)(l.l.Description, {
                                children: e.license
                                    ? "".concat(e.license, " license")
                                    : "No license",
                            }),
                        ],
                    },
                    e.name
                );
            }
            function m(e) {
                var t,
                    n,
                    s,
                    l = (0, o.c)(6),
                    a = e.vulnerabilities;
                l[0] === Symbol.for("react.memo_cache_sentinel")
                    ? ((t = (0, r.jsx)("span", {
                          style: {
                              color: "var(--fgColor-attention)",
                          },
                          children: (0, r.jsx)(i.AlertIcon, {}),
                      })),
                      (l[0] = t))
                    : (t = l[0]);
                var d = ""
                    .concat(a.length, " ")
                    .concat(
                        1 === a.length ? "vulnerability" : "vulnerabilities",
                        " detected"
                    );
                return (
                    l[1] !== a
                        ? ((n = a.map(h)), (l[1] = a), (l[2] = n))
                        : (n = l[2]),
                    l[3] !== d || l[4] !== n
                        ? ((s = (0, r.jsx)(c, {
                              icon: t,
                              summary: d,
                              children: n,
                          })),
                          (l[3] = d),
                          (l[4] = n),
                          (l[5] = s))
                        : (s = l[5]),
                    s
                );
            }
            function h(e, t) {
                return (0, r.jsxs)(
                    l.l.Item,
                    {
                        children: [
                            e.uiType,
                            (0, r.jsx)(l.l.Description, {
                                variant: "block",
                                children: e.uiDescription,
                            }),
                        ],
                    },
                    t
                );
            }
            ((c.displayName = "AnnotationsList"),
                (d.displayName = "ReferenceAnnotations"),
                (m.displayName = "VulnerabilityAnnotations"));
            var p = function p(e) {
                var t,
                    n,
                    i,
                    l,
                    a = (0, o.c)(10),
                    c = e.publicCodeReferences,
                    u = e.codeVulnerabilities,
                    h = e.onClose;
                a[0] !== h
                    ? ((t = function t() {
                          h();
                      }),
                      (a[0] = h),
                      (a[1] = t))
                    : (t = a[1]);
                var p = t;
                return (
                    a[2] !== c
                        ? ((n =
                              c &&
                              c.length > 0 &&
                              (0, r.jsx)(d, {
                                  references: c.map(f),
                              })),
                          (a[2] = c),
                          (a[3] = n))
                        : (n = a[3]),
                    a[4] !== u
                        ? ((i =
                              u &&
                              u.length > 0 &&
                              (0, r.jsx)(m, {
                                  vulnerabilities: u.map(_),
                              })),
                          (a[4] = u),
                          (a[5] = i))
                        : (i = a[5]),
                    a[6] !== p || a[7] !== n || a[8] !== i
                        ? ((l = (0, r.jsxs)(s.l, {
                              title: "Code insights",
                              subtitle:
                                  "Find matches across our platform or check for code vulnerabilities.",
                              onClose: p,
                              width: "xlarge",
                              children: [n, i],
                          })),
                          (a[6] = p),
                          (a[7] = n),
                          (a[8] = i),
                          (a[9] = l))
                        : (l = a[9]),
                    l
                );
            };
            function f(e) {
                return e.details;
            }
            function _(e) {
                return e.details;
            }
            p.displayName = "CodeInsightsDialog";
        },
        177732: function _(e, t, n) {
            n.d(t, {
                q: function q() {
                    return s;
                },
            });
            var r = n(474848),
                o = n(916522);
            function s(e) {
                var t,
                    n,
                    s = (0, o.c)(5),
                    i = e.color,
                    l = e.variant;
                s[0] !== i
                    ? ((t = {
                          backgroundColor: i,
                      }),
                      (s[0] = i),
                      (s[1] = t))
                    : (t = s[1]);
                var a =
                    "compact" === l
                        ? "LanguageDot-module__languageDotCompact__BuFrL"
                        : "LanguageDot-module__languageDot__WZEoH";
                return (
                    s[2] !== t || s[3] !== a
                        ? ((n = (0, r.jsx)("span", {
                              style: t,
                              className: a,
                          })),
                          (s[2] = t),
                          (s[3] = a),
                          (s[4] = n))
                        : (n = s[4]),
                    n
                );
            }
            s.displayName = "LanguageDot";
        },
        568432: function _(e, t, n) {
            function r(e, t) {
                return t in e && "string" == typeof e[t]
                    ? JSON.parse(e[t])
                    : null;
            }
            n.d(
                t,
                {
                    k: function k() {
                        return r;
                    },
                },
                {
                    F: function F(e) {
                        return e.replaceAll(/-\w/g, function (e) {
                            var _e$1$toUpperCase, _e$;
                            return (_e$1$toUpperCase =
                                (_e$ = e[1]) === null || _e$ === void 0
                                    ? void 0
                                    : _e$.toUpperCase()) !== null &&
                                _e$1$toUpperCase !== void 0
                                ? _e$1$toUpperCase
                                : "";
                        });
                    },
                }
            );
        },
    },
]);
