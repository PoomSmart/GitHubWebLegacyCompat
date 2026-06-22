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
var _excluded = ["anchorIcon", "style", "className", "label"],
    _excluded2 = [
        "ref",
        "children",
        "isActive",
        "title",
        "metadata",
        "secondaryActions",
        "style",
        "className",
        "metadataContainerStyle",
        "metadataContainerClassName",
        "as",
    ],
    _excluded3 = ["ref", "children", "isSelected", "onSelect", "alignment"];
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
performance.mark("js-parse-end:67133-6fcf34de383d4dc3.js");
("use strict");
(globalThis.rspackChunk_github_ui_github_ui =
    globalThis.rspackChunk_github_ui_github_ui || []).push([
    [67133],
    {
        399625: function _(e, t, i) {
            i.d(t, {
                L: function L() {
                    return u;
                },
            });
            var r = i(474848),
                l = i(916522),
                n = i(413401),
                a = i(930292),
                s = i(634164),
                c = i(296540),
                o = i(572449);
            var u = function u(e) {
                var t,
                    i,
                    u,
                    d,
                    m,
                    v,
                    y = (0, l.c)(14),
                    h = e.anchorIcon,
                    f = e.style,
                    p = e.className,
                    x = e.label,
                    _ = _objectWithoutProperties(e, _excluded),
                    N = void 0 === x ? "list item action bar" : x,
                    _ref = (0, o.Z)(),
                    I = _ref.setAnyItemsWithActionBar,
                    b = _ref.setHasResizableActionsWithActionBar;
                (y[0] !== I
                    ? ((t = function t() {
                          return I(!0);
                      }),
                      (i = [I]),
                      (y[0] = I),
                      (y[1] = t),
                      (y[2] = i))
                    : ((t = y[1]), (i = y[2])),
                    (0, c.useEffect)(t, i),
                    (0, c.useEffect)(
                        function () {
                            _.actions && b(!0);
                        },
                        [_.actions, b]
                    ));
                var A = (0, s.$)(
                    "ActionBar-module__container__kD4in",
                    _.actions && "ActionBar-module__hasActions__LfV6h",
                    p
                );
                return (
                    y[3] === Symbol.for("react.memo_cache_sentinel")
                        ? ((u = (0, a.G)(
                              "list-view-item-action-bar-container"
                          )),
                          (y[3] = u))
                        : (u = y[3]),
                    y[4] !== h
                        ? ((d = h
                              ? {
                                    icon: h,
                                }
                              : void 0),
                          (y[4] = h),
                          (y[5] = d))
                        : (d = y[5]),
                    y[6] !== N || y[7] !== _ || y[8] !== d
                        ? ((m = (0, r.jsx)(
                              n.E7,
                              _objectSpread(
                                  _objectSpread({}, _),
                                  {},
                                  {
                                      label: N,
                                      variant: "menu",
                                      overflowMenuToggleProps: d,
                                  }
                              )
                          )),
                          (y[6] = N),
                          (y[7] = _),
                          (y[8] = d),
                          (y[9] = m))
                        : (m = y[9]),
                    y[10] !== f || y[11] !== A || y[12] !== m
                        ? ((v = (0, r.jsx)(
                              "div",
                              _objectSpread(
                                  _objectSpread(
                                      {
                                          className: A,
                                          style: f,
                                      },
                                      u
                                  ),
                                  {},
                                  {
                                      children: m,
                                  }
                              )
                          )),
                          (y[10] = f),
                          (y[11] = A),
                          (y[12] = m),
                          (y[13] = v))
                        : (v = y[13]),
                    v
                );
            };
            u.displayName = "ListItemActionBar";
        },
        881646: function _(e, t, i) {
            var r = i(474848),
                l = i(916522),
                n = i(296540);
            var a = (0, n.createContext)({
                alignment: "top",
            });
            a.displayName = "AlignmentContext";
            var s = function s(e) {
                var t,
                    i,
                    n = (0, l.c)(5),
                    s = e.alignment,
                    c = e.children,
                    o = s !== null && s !== void 0 ? s : "top";
                n[0] !== o
                    ? ((t = {
                          alignment: o,
                      }),
                      (n[0] = o),
                      (n[1] = t))
                    : (t = n[1]);
                var u = t;
                return (
                    n[2] !== c || n[3] !== u
                        ? ((i = (0, r.jsx)(a, {
                              value: u,
                              children: c,
                          })),
                          (n[2] = c),
                          (n[3] = u),
                          (n[4] = i))
                        : (i = n[4]),
                    i
                );
            };
            ((s.displayName = "AlignmentProvider"),
                (s.displayName = "ListItemAlignmentProvider"),
                i.d(
                    t,
                    {},
                    {
                        F: s,
                        m: function m() {
                            return (0, n.use)(a);
                        },
                    }
                ));
        },
        372065: function _(e, t, i) {
            var r = i(474848),
                l = i(916522),
                n = i(296540);
            var a = (0, n.createContext)(void 0);
            a.displayName = "DescriptionContext";
            var s = function s(e) {
                var t,
                    i,
                    s = (0, l.c)(5),
                    c = e.children,
                    _ref2 = (0, n.useState)(""),
                    _ref3 = _slicedToArray(_ref2, 2),
                    o = _ref3[0],
                    u = _ref3[1];
                s[0] !== o
                    ? ((t = {
                          description: o,
                          setDescription: u,
                      }),
                      (s[0] = o),
                      (s[1] = t))
                    : (t = s[1]);
                var d = t;
                return (
                    s[2] !== c || s[3] !== d
                        ? ((i = (0, r.jsx)(a, {
                              value: d,
                              children: c,
                          })),
                          (s[2] = c),
                          (s[3] = d),
                          (s[4] = i))
                        : (i = s[4]),
                    i
                );
            };
            ((s.displayName = "DescriptionProvider"),
                (s.displayName = "ListItemDescriptionProvider"),
                i.d(
                    t,
                    {},
                    {
                        L: function L() {
                            var e = (0, n.use)(a);
                            if (!e)
                                throw Error(
                                    "useListItemDescription must be used with DescriptionProvider."
                                );
                            return e;
                        },
                        O: s,
                    }
                ));
        },
        16250: function _(e, t, i) {
            i.d(t, {
                c: function c() {
                    return L;
                },
            });
            var r = i(474848),
                l = i(916522),
                n = i(852111),
                a = i(634164),
                s = i(296540),
                c = i(335754),
                o = i(572449),
                u = i(766867),
                d = i(9484),
                m = i(399625);
            var v = (0, s.createContext)({
                actionsOpen: !1,
                setActionsOpen: n.l,
            });
            v.displayName = "ActionsContext";
            var y = function y(e) {
                var t,
                    i,
                    n = (0, l.c)(5),
                    a = e.children,
                    _ref4 = (0, s.useState)(!1),
                    _ref5 = _slicedToArray(_ref4, 2),
                    c = _ref5[0],
                    o = _ref5[1];
                n[0] !== c
                    ? ((t = {
                          actionsOpen: c,
                          setActionsOpen: o,
                      }),
                      (n[0] = c),
                      (n[1] = t))
                    : (t = n[1]);
                var u = t;
                return (
                    n[2] !== a || n[3] !== u
                        ? ((i = (0, r.jsx)(v, {
                              value: u,
                              children: a,
                          })),
                          (n[2] = a),
                          (n[3] = u),
                          (n[4] = i))
                        : (i = n[4]),
                    i
                );
            };
            ((y.displayName = "ActionsProvider"),
                (y.displayName = "ListItemActionsProvider"));
            var h = i(881646),
                f = i(372065),
                p = i(930292);
            function x(e) {
                var t,
                    i,
                    n,
                    s = (0, l.c)(7),
                    c = e.style,
                    o = e.className,
                    u = e.children;
                return (
                    s[0] !== o
                        ? ((t = (0, a.$)(
                              "MetadataContainer-module__container__YDbLz",
                              o
                          )),
                          (s[0] = o),
                          (s[1] = t))
                        : (t = s[1]),
                    s[2] === Symbol.for("react.memo_cache_sentinel")
                        ? ((i = (0, p.G)("list-view-item-metadata")),
                          (s[2] = i))
                        : (i = s[2]),
                    s[3] !== u || s[4] !== c || s[5] !== t
                        ? ((n = (0, r.jsx)(
                              "div",
                              _objectSpread(
                                  _objectSpread(
                                      {
                                          className: t,
                                          style: c,
                                      },
                                      i
                                  ),
                                  {},
                                  {
                                      children: u,
                                  }
                              )
                          )),
                          (s[3] = u),
                          (s[4] = c),
                          (s[5] = t),
                          (s[6] = n))
                        : (n = s[6]),
                    n
                );
            }
            x.displayName = "ListItemMetadataContainer";
            var _ = i(413624),
                N = i(206345),
                I = i(64619),
                b = i(621);
            var A = function A(e) {
                var _e;
                var t,
                    i,
                    n,
                    v,
                    y,
                    p,
                    A,
                    L,
                    w,
                    C,
                    P,
                    E,
                    D,
                    k,
                    $,
                    T,
                    B,
                    O,
                    M,
                    F,
                    R,
                    J = (0, l.c)(57);
                J[0] !== e
                    ? ((_e = e),
                      (v = _e.ref),
                      (i = _e.children),
                      (P = _e.isActive),
                      (E = _e.title),
                      (y = _e.metadata),
                      (w = _e.secondaryActions),
                      (C = _e.style),
                      (n = _e.className),
                      (A = _e.metadataContainerStyle),
                      (p = _e.metadataContainerClassName),
                      (t = _e.as),
                      (L = _objectWithoutProperties(_e, _excluded2)),
                      _e,
                      (J[0] = e),
                      (J[1] = t),
                      (J[2] = i),
                      (J[3] = n),
                      (J[4] = v),
                      (J[5] = y),
                      (J[6] = p),
                      (J[7] = A),
                      (J[8] = L),
                      (J[9] = w),
                      (J[10] = C),
                      (J[11] = P),
                      (J[12] = E))
                    : ((t = J[1]),
                      (i = J[2]),
                      (n = J[3]),
                      (v = J[4]),
                      (y = J[5]),
                      (p = J[6]),
                      (A = J[7]),
                      (L = J[8]),
                      (w = J[9]),
                      (C = J[10]),
                      (P = J[11]),
                      (E = J[12]));
                var W = void 0 !== P && P,
                    _ref6 = (0, c.If)(),
                    G = _ref6.idPrefix,
                    _ref7 = (0, u.v)(),
                    Y = _ref7.isSelectable,
                    _ref8 = (0, d.e)(),
                    Z = _ref8.variant,
                    _ref9 = (0, o.Z)(),
                    q = _ref9.anyItemsWithActionBar,
                    z = _ref9.hasResizableActionsWithActionBar,
                    H = (0, s.useId)(),
                    _ref0 = (0, N.r)(),
                    K = _ref0.isSelected,
                    U = _ref0.onSelect,
                    _ref1 = (0, I.x)(),
                    V = _ref1.status,
                    _ref10 = (0, b.J)(),
                    Q = _ref10.title,
                    X = _ref10.titleAction,
                    ee = _ref10.headingRef,
                    _ref11 = (0, f.L)(),
                    et = _ref11.description,
                    _ref12 = (0, _.I)(),
                    ei = _ref12.hasNewActivity,
                    _ref13 = (0, h.m)(),
                    er = _ref13.alignment,
                    el = (0, s.useRef)(null);
                (J[13] !== v
                    ? ((D = function D() {
                          "function" == typeof v
                              ? v(el.current)
                              : v && (v.current = el.current);
                      }),
                      (k = [v]),
                      (J[13] = v),
                      (J[14] = D),
                      (J[15] = k))
                    : ((D = J[14]), (k = J[15])),
                    (0, s.useEffect)(D, k),
                    J[16] !== W
                        ? (($ = function $() {
                              var _document$activeEleme;
                              el.current &&
                                  W &&
                                  ((_document$activeEleme =
                                      document.activeElement) === null ||
                                  _document$activeEleme === void 0
                                      ? void 0
                                      : _document$activeEleme.tagName) ===
                                      "BODY" &&
                                  el.current.focus();
                          }),
                          (J[16] = W),
                          (J[17] = $))
                        : ($ = J[17]),
                    (0, s.useEffect)($),
                    J[18] !== ee ||
                    J[19] !== Y ||
                    J[20] !== K ||
                    J[21] !== U ||
                    J[22] !== X
                        ? ((T = function T(e) {
                              var _el$current;
                              switch (e.key) {
                                  case "Enter":
                                      if (X) {
                                          var _t = document.activeElement,
                                              _i = el.current === _t,
                                              _r =
                                                  ee.current &&
                                                  (ee.current === _t ||
                                                      ee.current.contains(_t));
                                          (_i || _r) && X(e);
                                      }
                                      break;
                                  case " ":
                                      if (
                                          !Y ||
                                          (el === null || el === void 0
                                              ? void 0
                                              : el.current) !==
                                              document.activeElement
                                      )
                                          break;
                                      (e.preventDefault(), U(!K));
                                      break;
                                  case "Escape":
                                      el === null ||
                                          el === void 0 ||
                                          (_el$current = el.current) === null ||
                                          _el$current === void 0 ||
                                          _el$current.focus();
                              }
                          }),
                          (J[18] = ee),
                          (J[19] = Y),
                          (J[20] = K),
                          (J[21] = U),
                          (J[22] = X),
                          (J[23] = T))
                        : (T = J[23]));
                var en = T;
                J[24] !== ei ||
                J[25] !== K ||
                J[26] !== et ||
                J[27] !== V ||
                J[28] !== Q ||
                J[29] !== y ||
                J[30] !== w
                    ? ((B = function B() {
                          var e = K ? "Selected" : "",
                              t = ei ? "New activity" : "",
                              i = !!w,
                              r =
                                  (Array.isArray(y) && y.length > 0) ||
                                  (y && !Array.isArray(y)),
                              l = "";
                          (r || i) && (l = "More information available below");
                          var n = [Q, V].filter(j).join(": ");
                          try {
                              n = n.replace(/(?!(?:\.)(?=\.+$))\.+$/, "");
                          } catch (_unused) {
                              for (; n.endsWith("."); )
                                  n = n.substring(0, n.length - 1);
                          }
                          var a = [e, n, et, t, l].filter(S).join(". ");
                          return a.endsWith(".") ? a : "".concat(a, ".");
                      }),
                      (J[24] = ei),
                      (J[25] = K),
                      (J[26] = et),
                      (J[27] = V),
                      (J[28] = Q),
                      (J[29] = y),
                      (J[30] = w),
                      (J[31] = B))
                    : (B = J[31]);
                var ea = B,
                    es = t || "li",
                    ec = "".concat(G, "-list-view-node-").concat(H),
                    eo = K && "ListItem-module__selected__o52Hg",
                    eu = "compact" === Z && "ListItem-module__compact__eGyRF",
                    ed =
                        "center" === er &&
                        "ListItem-module__centerAligned__dq01j",
                    em = q && z && "ListItem-module__hasActionBar__FiRms";
                J[32] !== n ||
                J[33] !== ed ||
                J[34] !== em ||
                J[35] !== eo ||
                J[36] !== eu
                    ? ((O = (0, a.$)(
                          "ListItem-module__listItem__wBJcm",
                          eo,
                          eu,
                          ed,
                          em,
                          n
                      )),
                      (J[32] = n),
                      (J[33] = ed),
                      (J[34] = em),
                      (J[35] = eo),
                      (J[36] = eu),
                      (J[37] = O))
                    : (O = J[37]);
                var ev = ea();
                return (
                    J[38] !== y || J[39] !== p || J[40] !== A
                        ? ((M =
                              Array.isArray(y) && y.length > 0
                                  ? (0, r.jsx)(x, {
                                        style: A,
                                        className: p,
                                        children: y.map(g),
                                    })
                                  : !!(y && !Array.isArray(y)) &&
                                    (0, r.jsx)(x, {
                                        style: A,
                                        className: p,
                                        children: y,
                                    })),
                          (J[38] = y),
                          (J[39] = p),
                          (J[40] = A),
                          (J[41] = M))
                        : (M = J[41]),
                    J[42] !== q || J[43] !== w
                        ? ((F =
                              w !== null && w !== void 0
                                  ? w
                                  : q && (0, r.jsx)(m.L, {})),
                          (J[42] = q),
                          (J[43] = w),
                          (J[44] = F))
                        : (F = J[44]),
                    J[45] !== es ||
                    J[46] !== i ||
                    J[47] !== en ||
                    J[48] !== L ||
                    J[49] !== C ||
                    J[50] !== O ||
                    J[51] !== ev ||
                    J[52] !== M ||
                    J[53] !== F ||
                    J[54] !== ec ||
                    J[55] !== E
                        ? ((R = (0, r.jsxs)(
                              es,
                              _objectSpread(
                                  _objectSpread(
                                      {
                                          ref: el,
                                          id: ec,
                                          className: O,
                                          tabIndex: -1,
                                          "aria-label": ev,
                                          style: C,
                                          onKeyDown: en,
                                      },
                                      L
                                  ),
                                  {},
                                  {
                                      children: [E, i, M, F],
                                  }
                              )
                          )),
                          (J[45] = es),
                          (J[46] = i),
                          (J[47] = en),
                          (J[48] = L),
                          (J[49] = C),
                          (J[50] = O),
                          (J[51] = ev),
                          (J[52] = M),
                          (J[53] = F),
                          (J[54] = ec),
                          (J[55] = E),
                          (J[56] = R))
                        : (R = J[56]),
                    R
                );
            };
            A.displayName = "ListItemBase";
            var L = function L(e) {
                var _e2;
                var t,
                    i,
                    a,
                    c,
                    o,
                    d,
                    m,
                    v,
                    p,
                    x,
                    L,
                    j,
                    S,
                    g,
                    C,
                    P = (0, l.c)(29);
                P[0] !== e
                    ? ((_e2 = e),
                      (a = _e2.ref),
                      (i = _e2.children),
                      (o = _e2.isSelected),
                      (d = _e2.onSelect),
                      (t = _e2.alignment),
                      (c = _objectWithoutProperties(_e2, _excluded3)),
                      _e2,
                      (P[0] = e),
                      (P[1] = t),
                      (P[2] = i),
                      (P[3] = a),
                      (P[4] = c),
                      (P[5] = o),
                      (P[6] = d))
                    : ((t = P[1]),
                      (i = P[2]),
                      (a = P[3]),
                      (c = P[4]),
                      (o = P[5]),
                      (d = P[6]));
                var E = void 0 !== o && o,
                    D = void 0 === d ? n.l : d,
                    _ref14 = (0, u.v)(),
                    k = _ref14.setSelectedCount,
                    $ = (0, s.useRef)(E);
                (P[7] !== E
                    ? ((m = function m() {
                          $.current = E;
                      }),
                      (P[7] = E),
                      (P[8] = m))
                    : (m = P[8]),
                    (0, s.useEffect)(m),
                    P[9] !== E || P[10] !== k
                        ? ((v = function v() {
                              k(function (e) {
                                  return E ? e + 1 : Math.max(0, e - 1);
                              });
                          }),
                          (p = [E, k]),
                          (P[9] = E),
                          (P[10] = k),
                          (P[11] = v),
                          (P[12] = p))
                        : ((v = P[11]), (p = P[12])),
                    (0, s.useEffect)(v, p),
                    P[13] !== k
                        ? ((x = function x() {
                              return function () {
                                  $.current && k(w);
                              };
                          }),
                          (L = [k]),
                          (P[13] = k),
                          (P[14] = x),
                          (P[15] = L))
                        : ((x = P[14]), (L = P[15])),
                    (0, s.useEffect)(x, L),
                    P[16] !== E || P[17] !== D
                        ? ((j = {
                              isSelected: E,
                              onSelect: D,
                          }),
                          (P[16] = E),
                          (P[17] = D),
                          (P[18] = j))
                        : (j = P[18]));
                var T = j;
                return (
                    P[19] !== i || P[20] !== a || P[21] !== c
                        ? ((S = (0, r.jsx)(
                              A,
                              _objectSpread(
                                  _objectSpread({}, c),
                                  {},
                                  {
                                      ref: a,
                                      children: i,
                                  }
                              )
                          )),
                          (P[19] = i),
                          (P[20] = a),
                          (P[21] = c),
                          (P[22] = S))
                        : (S = P[22]),
                    P[23] !== t || P[24] !== S
                        ? ((g = (0, r.jsx)(_.t, {
                              children: (0, r.jsx)(f.O, {
                                  children: (0, r.jsx)(I.u, {
                                      children: (0, r.jsx)(h.F, {
                                          alignment: t,
                                          children: S,
                                      }),
                                  }),
                              }),
                          })),
                          (P[23] = t),
                          (P[24] = S),
                          (P[25] = g))
                        : (g = P[25]),
                    P[26] !== T || P[27] !== g
                        ? ((C = (0, r.jsx)(y, {
                              children: (0, r.jsx)(b.y, {
                                  children: (0, r.jsx)(N.W, {
                                      value: T,
                                      children: g,
                                  }),
                              }),
                          })),
                          (P[26] = T),
                          (P[27] = g),
                          (P[28] = C))
                        : (C = P[28]),
                    C
                );
            };
            function j(e) {
                return e.trim();
            }
            function S(e) {
                return e.trim();
            }
            function g(e, t) {
                return (0, r.jsx)(
                    s.Fragment,
                    {
                        children: e,
                    },
                    t
                );
            }
            function w(e) {
                return Math.max(0, e - 1);
            }
            ((L.displayName = "ListItem"), (L.displayName = "ListItem"));
        },
        413624: function _(e, t, i) {
            var r = i(474848),
                l = i(916522),
                n = i(296540);
            var a = (0, n.createContext)(void 0);
            a.displayName = "NewActivityContext";
            var s = function s(e) {
                var t,
                    i,
                    s = (0, l.c)(5),
                    c = e.children,
                    _ref15 = (0, n.useState)(!1),
                    _ref16 = _slicedToArray(_ref15, 2),
                    o = _ref16[0],
                    u = _ref16[1];
                s[0] !== o
                    ? ((t = {
                          hasNewActivity: o,
                          setHasNewActivity: u,
                      }),
                      (s[0] = o),
                      (s[1] = t))
                    : (t = s[1]);
                var d = t;
                return (
                    s[2] !== c || s[3] !== d
                        ? ((i = (0, r.jsx)(a, {
                              value: d,
                              children: c,
                          })),
                          (s[2] = c),
                          (s[3] = d),
                          (s[4] = i))
                        : (i = s[4]),
                    i
                );
            };
            ((s.displayName = "NewActivityProvider"),
                (s.displayName = "ListItemNewActivityProvider"),
                i.d(
                    t,
                    {},
                    {
                        I: function I() {
                            var e = (0, n.use)(a);
                            if (!e)
                                throw Error(
                                    "useListItemNewActivity must be used with NewActivityProvider."
                                );
                            return e;
                        },
                        t: s,
                    }
                ));
        },
        206345: function _(e, t, i) {
            var r = i(474848),
                l = i(916522),
                n = i(649481),
                a = i(852111),
                s = i(296540),
                c = i(621);
            var o = (0, s.createContext)({
                isSelected: !1,
                onSelect: a.l,
            });
            o.displayName = "SelectionContext";
            var u = function u(e) {
                var t,
                    i,
                    a,
                    s = (0, l.c)(9),
                    u = e.children,
                    d = e.value,
                    m = d.isSelected,
                    v = d.onSelect,
                    _ref17 = (0, c.J)(),
                    y = _ref17.title;
                s[0] !== v || s[1] !== y
                    ? ((t = function t(e) {
                          ((0, n.i)(
                              e
                                  ? "Selected. ".concat(y, ".")
                                  : "Unselected. ".concat(y, ".")
                          ),
                              v(e));
                      }),
                      (s[0] = v),
                      (s[1] = y),
                      (s[2] = t))
                    : (t = s[2]);
                var h = t;
                s[3] !== m || s[4] !== h
                    ? ((i = {
                          isSelected: m,
                          onSelect: h,
                      }),
                      (s[3] = m),
                      (s[4] = h),
                      (s[5] = i))
                    : (i = s[5]);
                var f = i;
                return (
                    s[6] !== u || s[7] !== f
                        ? ((a = (0, r.jsx)(o, {
                              value: f,
                              children: u,
                          })),
                          (s[6] = u),
                          (s[7] = f),
                          (s[8] = a))
                        : (a = s[8]),
                    a
                );
            };
            ((u.displayName = "SelectionProvider"),
                (u.displayName = "ListItemSelectionProvider"),
                i.d(
                    t,
                    {},
                    {
                        W: u,
                        r: function r() {
                            return (0, s.use)(o);
                        },
                    }
                ));
        },
        64619: function _(e, t, i) {
            var r = i(474848),
                l = i(916522),
                n = i(296540);
            var a = (0, n.createContext)(void 0);
            a.displayName = "StatusContext";
            var s = function s(e) {
                var t,
                    i,
                    s = (0, l.c)(5),
                    c = e.children,
                    _ref18 = (0, n.useState)(""),
                    _ref19 = _slicedToArray(_ref18, 2),
                    o = _ref19[0],
                    u = _ref19[1];
                s[0] !== o
                    ? ((t = {
                          status: o,
                          setStatus: u,
                      }),
                      (s[0] = o),
                      (s[1] = t))
                    : (t = s[1]);
                var d = t;
                return (
                    s[2] !== c || s[3] !== d
                        ? ((i = (0, r.jsx)(a, {
                              value: d,
                              children: c,
                          })),
                          (s[2] = c),
                          (s[3] = d),
                          (s[4] = i))
                        : (i = s[4]),
                    i
                );
            };
            ((s.displayName = "StatusProvider"),
                (s.displayName = "ListItemStatusProvider"),
                i.d(
                    t,
                    {},
                    {
                        u: s,
                        x: function x() {
                            var e = (0, n.use)(a);
                            if (!e)
                                throw Error(
                                    "useListItemStatus must be used with StatusProvider."
                                );
                            return e;
                        },
                    }
                ));
        },
        621: function _(e, t, i) {
            var r = i(474848),
                l = i(916522),
                n = i(296540);
            var a = (0, n.createContext)(void 0);
            a.displayName = "TitleContext";
            var s = function s(e) {
                var t,
                    i,
                    s,
                    c,
                    o = (0, l.c)(8),
                    u = e.children,
                    _ref20 = (0, n.useState)(""),
                    _ref21 = _slicedToArray(_ref20, 2),
                    d = _ref21[0],
                    m = _ref21[1],
                    _ref22 = (0, n.useState)(null),
                    _ref23 = _slicedToArray(_ref22, 2),
                    v = _ref23[0],
                    y = _ref23[1],
                    h = (0, n.useRef)(null);
                (o[0] === Symbol.for("react.memo_cache_sentinel")
                    ? ((t = function t() {
                          var _h$current;
                          (h === null ||
                          h === void 0 ||
                          (_h$current = h.current) === null ||
                          _h$current === void 0
                              ? void 0
                              : _h$current.textContent) &&
                              m(h.current.textContent.trim());
                      }),
                      (i = [h, m]),
                      (o[0] = t),
                      (o[1] = i))
                    : ((t = o[0]), (i = o[1])),
                    (0, n.useEffect)(t, i),
                    o[2] !== d || o[3] !== v
                        ? ((s = {
                              title: d,
                              titleAction: v,
                              setTitleAction: y,
                              headingRef: h,
                          }),
                          (o[2] = d),
                          (o[3] = v),
                          (o[4] = s))
                        : (s = o[4]));
                var f = s;
                return (
                    o[5] !== u || o[6] !== f
                        ? ((c = (0, r.jsx)(a, {
                              value: f,
                              children: u,
                          })),
                          (o[5] = u),
                          (o[6] = f),
                          (o[7] = c))
                        : (c = o[7]),
                    c
                );
            };
            ((s.displayName = "TitleProvider"),
                (s.displayName = "ListItemTitleProvider"),
                i.d(
                    t,
                    {},
                    {
                        J: function J() {
                            var e = (0, n.use)(a);
                            if (!e)
                                throw Error(
                                    "useListItemTitle must be used with TitleProvider."
                                );
                            return e;
                        },
                        y: s,
                    }
                ));
        },
        920091: function _(e, t, i) {
            var r = i(569147),
                l = i(921167);
            function n(e) {
                var t,
                    _ref24 = (0, l.t)(),
                    i = _ref24.titleHeaderTag,
                    n = _ref24.hasMetadataTitle;
                e: {
                    var _l = r.Dy.findIndex(function (t) {
                            return t === e;
                        }),
                        a = r.n1.indexOf(i) + (n ? _l : _l - 1);
                    if (a > r.n1.length - 1) {
                        t = "h6";
                        break e;
                    }
                    t = r.n1[a] || r.O1[e];
                }
                return t;
            }
            i.d(t, {
                m: function m() {
                    return n;
                },
            });
        },
    },
]);
