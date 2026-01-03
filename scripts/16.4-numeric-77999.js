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
var _excluded = [
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
    _excluded2 = ["children", "isSelected", "onSelect", "alignment"],
    _excluded3 = ["anchorIcon", "style", "className", "label"],
    _excluded4 = ["aria-label", "icon", "variant"],
    _excluded5 = ["overflowMenuToggleProps", "overflowMenuProps", "children"],
    _excluded6 = ["children"],
    _excluded7 = [
        "children",
        "value",
        "containerStyle",
        "containerClassName",
        "headerContainerRef",
        "headingStyle",
        "headingClassName",
        "headingRef",
        "leadingBadge",
        "trailingBadges",
        "anchorRef",
    ],
    _excluded8 = [
        "children",
        "html",
        "containerStyle",
        "containerClassName",
        "headerContainerRef",
        "headingStyle",
        "headingClassName",
        "headingRef",
        "leadingBadge",
        "trailingBadges",
    ],
    _excluded9 = [
        "anchorStyle",
        "anchorClassName",
        "anchorRef",
        "linkProps",
        "children",
    ],
    _excluded0 = ["as"],
    _excluded1 = [
        "children",
        "html",
        "containerStyle",
        "containerClassName",
        "headerContainerRef",
        "headingStyle",
        "headingClassName",
        "headingRef",
        "leadingBadge",
        "trailingBadges",
    ],
    _excluded10 = [
        "children",
        "hasDragHandle",
        "isSelectable",
        "onVariantChange",
        "pluralUnits",
        "selectedCount",
        "singularUnits",
        "title",
        "titleHeaderTag",
        "totalCount",
        "variant",
    ],
    _excluded11 = [
        "ariaLabelledBy",
        "as",
        "children",
        "className",
        "itemsListClassName",
        "itemsListStyle",
        "listRef",
        "metadata",
        "role",
        "strictFocusZone",
    ];
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
            var _n2 = 0,
                F = function F() {};
            return {
                s: F,
                n: function n() {
                    return _n2 >= r.length
                        ? { done: !0 }
                        : { done: !1, value: r[_n2++] };
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
(globalThis.webpackChunk_github_ui_github_ui =
    globalThis.webpackChunk_github_ui_github_ui || []).push([
    [77999, 97174],
    {
        2970: function _(e, t, i) {
            i.d(t, {
                c: function c() {
                    return I;
                },
            });
            var r = i(74848),
                l = i(73189),
                a = i(34164),
                n = i(96540),
                s = i(75986),
                o = i(18377),
                c = i(24347),
                d = i(35220),
                u = i(9214);
            var m = (0, n.createContext)({
                    actionsOpen: !1,
                    setActionsOpen: l.l,
                }),
                h = function h(_ref) {
                    var e = _ref.children;
                    var _ref2 = (0, n.useState)(!1),
                        _ref3 = _slicedToArray(_ref2, 2),
                        t = _ref3[0],
                        i = _ref3[1],
                        l = (0, n.useMemo)(
                            function () {
                                return {
                                    actionsOpen: t,
                                    setActionsOpen: i,
                                };
                            },
                            [t]
                        );
                    return (0, r.jsx)(m.Provider, {
                        value: l,
                        children: e,
                    });
                };
            h.displayName = "ListItemActionsProvider";
            try {
                m.displayName || (m.displayName = "ActionsContext");
            } catch (_unused) {}
            var f = i(29622),
                p = i(77177),
                y = i(29731);
            function v(_ref4) {
                var e = _ref4.style,
                    t = _ref4.className,
                    i = _ref4.children;
                return (0, r.jsx)(
                    "div",
                    _objectSpread(
                        _objectSpread(
                            {
                                className: (0, a.$)(
                                    "MetadataContainer-module__container--nU0s9",
                                    t
                                ),
                                style: e,
                            },
                            (0, y.G)("list-view-item-metadata")
                        ),
                        {},
                        {
                            children: i,
                        }
                    )
                );
            }
            try {
                v.displayName || (v.displayName = "ListItemMetadataContainer");
            } catch (_unused2) {}
            var x = i(49744),
                g = i(60257),
                N = i(27603),
                C = i(74501);
            var b = (0, n.forwardRef)(function (_ref5, j) {
                var e = _ref5.children,
                    _ref5$isActive = _ref5.isActive,
                    t = _ref5$isActive === void 0 ? !1 : _ref5$isActive,
                    i = _ref5.title,
                    l = _ref5.metadata,
                    m = _ref5.secondaryActions,
                    h = _ref5.style,
                    y = _ref5.className,
                    b = _ref5.metadataContainerStyle,
                    I = _ref5.metadataContainerClassName,
                    w = _ref5.as,
                    S = _objectWithoutProperties(_ref5, _excluded);
                var _ref6 = (0, s.If)(),
                    A = _ref6.idPrefix,
                    _ref7 = (0, c.v)(),
                    _ = _ref7.isSelectable,
                    _ref8 = (0, d.e)(),
                    E = _ref8.variant,
                    _ref9 = (0, o.Z)(),
                    L = _ref9.anyItemsWithActionBar,
                    P = _ref9.hasResizableActionsWithActionBar,
                    M = (0, n.useId)(),
                    _ref0 = (0, g.r)(),
                    R = _ref0.isSelected,
                    T = _ref0.onSelect,
                    _ref1 = (0, N.x)(),
                    B = _ref1.status,
                    _ref10 = (0, C.J)(),
                    k = _ref10.title,
                    O = _ref10.titleAction,
                    D = _ref10.headingRef,
                    _ref11 = (0, p.L)(),
                    V = _ref11.description,
                    _ref12 = (0, x.I)(),
                    G = _ref12.hasNewActivity,
                    _ref13 = (0, f.m)(),
                    H = _ref13.alignment,
                    $ = (0, n.useRef)(null);
                ((0, n.useEffect)(
                    function () {
                        "function" == typeof j
                            ? j($.current)
                            : j && (j.current = $.current);
                    },
                    [j]
                ),
                    (0, n.useEffect)(function () {
                        var _document$activeEleme;
                        $.current &&
                            t &&
                            ((_document$activeEleme =
                                document.activeElement) === null ||
                            _document$activeEleme === void 0
                                ? void 0
                                : _document$activeEleme.tagName) === "BODY" &&
                            $.current.focus();
                    }));
                var W = (0, n.useCallback)(
                        function (e) {
                            var _$$current;
                            switch (e.key) {
                                case "Enter":
                                    if (O) {
                                        var _t = document.activeElement,
                                            _i = $.current === _t,
                                            _r =
                                                D.current &&
                                                (D.current === _t ||
                                                    D.current.contains(_t));
                                        (_i || _r) && O(e);
                                    }
                                    break;
                                case " ":
                                    if (
                                        !_ ||
                                        ($ === null || $ === void 0
                                            ? void 0
                                            : $.current) !==
                                            document.activeElement
                                    )
                                        break;
                                    (e.preventDefault(), T(!R));
                                    break;
                                case "Escape":
                                    $ === null ||
                                        $ === void 0 ||
                                        (_$$current = $.current) === null ||
                                        _$$current === void 0 ||
                                        _$$current.focus();
                            }
                        },
                        [O, _, T, R, D]
                    ),
                    z = (0, n.useCallback)(
                        function () {
                            var e = R ? "Selected" : "",
                                t = G ? "New activity" : "",
                                i = !!m,
                                r =
                                    (Array.isArray(l) && l.length > 0) ||
                                    (l && !Array.isArray(l)),
                                a = "";
                            (r || i) &&
                                (a = "More information available below");
                            var n = [k, B]
                                .filter(function (e) {
                                    return e.trim();
                                })
                                .join(": ");
                            try {
                                n = n.endsWith("...")
                                    ? n
                                    : n.replace(/\.+$/, "");
                            } catch (_unused3) {
                                for (; n.endsWith("."); )
                                    n = n.substring(0, n.length - 1);
                            }
                            var s = [e, n, V, t, a]
                                .filter(function (e) {
                                    return e.trim();
                                })
                                .join(". ");
                            return s.endsWith(".") ? s : "".concat(s, ".");
                        },
                        [m, l, R, G, k, B, V]
                    );
                return (0, r.jsxs)(
                    w || "li",
                    _objectSpread(
                        _objectSpread(
                            {
                                ref: $,
                                id: "".concat(A, "-list-view-node-").concat(M),
                                className: (0, a.$)(
                                    "ListItem-module__listItem--k4eMk",
                                    R && "ListItem-module__selected--WTEJT",
                                    "compact" === E &&
                                        "ListItem-module__compact--f4FSR",
                                    "center" === H &&
                                        "ListItem-module__centerAligned--PWSgp",
                                    L &&
                                        P &&
                                        "ListItem-module__hasActionBar--t14sR",
                                    y
                                ),
                                tabIndex: -1,
                                "aria-label": z(),
                                style: h,
                                onKeyDown: W,
                            },
                            S
                        ),
                        {},
                        {
                            children: [
                                i,
                                e,
                                Array.isArray(l) && l.length > 0
                                    ? (0, r.jsx)(v, {
                                          style: b,
                                          className: I,
                                          children: l.map(function (e, t) {
                                              return (0, r.jsx)(
                                                  n.Fragment,
                                                  {
                                                      children: e,
                                                  },
                                                  t
                                              );
                                          }),
                                      })
                                    : !!(l && !Array.isArray(l)) &&
                                      (0, r.jsx)(v, {
                                          style: b,
                                          className: I,
                                          children: l,
                                      }),
                                m !== null && m !== void 0
                                    ? m
                                    : L && (0, r.jsx)(u.L, {}),
                            ],
                        }
                    )
                );
            });
            b.displayName = "ListItemBase";
            var I = (0, n.forwardRef)(function (_ref14, o) {
                var e = _ref14.children,
                    _ref14$isSelected = _ref14.isSelected,
                    t = _ref14$isSelected === void 0 ? !1 : _ref14$isSelected,
                    _ref14$onSelect = _ref14.onSelect,
                    i = _ref14$onSelect === void 0 ? l.l : _ref14$onSelect,
                    a = _ref14.alignment,
                    s = _objectWithoutProperties(_ref14, _excluded2);
                var _ref15 = (0, c.v)(),
                    d = _ref15.setSelectedCount,
                    u = (0, n.useRef)(t);
                ((u.current = t),
                    (0, n.useEffect)(
                        function () {
                            d(function (e) {
                                return t ? e + 1 : Math.max(0, e - 1);
                            });
                        },
                        [t, d]
                    ),
                    (0, n.useEffect)(
                        function () {
                            return function () {
                                u.current &&
                                    d(function (e) {
                                        return Math.max(0, e - 1);
                                    });
                            };
                        },
                        [d]
                    ));
                var m = (0, n.useMemo)(
                    function () {
                        return {
                            isSelected: t,
                            onSelect: i,
                        };
                    },
                    [t, i]
                );
                return (0, r.jsx)(h, {
                    children: (0, r.jsx)(C.y, {
                        children: (0, r.jsx)(g.W, {
                            value: m,
                            children: (0, r.jsx)(x.t, {
                                children: (0, r.jsx)(p.O, {
                                    children: (0, r.jsx)(N.u, {
                                        children: (0, r.jsx)(f.F, {
                                            alignment: a,
                                            children: (0, r.jsx)(
                                                b,
                                                _objectSpread(
                                                    _objectSpread({}, s),
                                                    {},
                                                    {
                                                        ref: o,
                                                        children: e,
                                                    }
                                                )
                                            ),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                });
            });
            I.displayName = "ListItem";
        },
        9214: function _(e, t, i) {
            i.d(t, {
                L: function L() {
                    return c;
                },
            });
            var r = i(74848),
                l = i(91230),
                a = i(29731),
                n = i(34164),
                s = i(96540),
                o = i(18377);
            var c = function c(_ref16) {
                var e = _ref16.anchorIcon,
                    t = _ref16.style,
                    i = _ref16.className,
                    _ref16$label = _ref16.label,
                    c =
                        _ref16$label === void 0
                            ? "list item action bar"
                            : _ref16$label,
                    d = _objectWithoutProperties(_ref16, _excluded3);
                var _ref17 = (0, o.Z)(),
                    u = _ref17.setAnyItemsWithActionBar,
                    m = _ref17.setHasResizableActionsWithActionBar;
                return (
                    (0, s.useEffect)(
                        function () {
                            return u(!0);
                        },
                        [u]
                    ),
                    (0, s.useEffect)(
                        function () {
                            d.actions && m(!0);
                        },
                        [d.actions, m]
                    ),
                    (0, r.jsx)(
                        "div",
                        _objectSpread(
                            _objectSpread(
                                {
                                    className: (0, n.$)(
                                        "ActionBar-module__container--8I2RB",
                                        d.actions &&
                                            "ActionBar-module__hasActions--HH0uB",
                                        i
                                    ),
                                    style: t,
                                },
                                (0, a.G)("list-view-item-action-bar-container")
                            ),
                            {},
                            {
                                children: (0, r.jsx)(
                                    l.E7,
                                    _objectSpread(
                                        _objectSpread({}, d),
                                        {},
                                        {
                                            label: c,
                                            variant: "menu",
                                            overflowMenuToggleProps: e
                                                ? {
                                                      icon: e,
                                                  }
                                                : void 0,
                                        }
                                    )
                                ),
                            }
                        )
                    )
                );
            };
            try {
                c.displayName || (c.displayName = "ListItemActionBar");
            } catch (_unused4) {}
        },
        18377: function _(e, t, i) {
            i.d(t, {
                Z: function Z() {
                    return o;
                },
                w: function w() {
                    return s;
                },
            });
            var r = i(74848),
                l = i(73189),
                a = i(96540);
            var n = (0, a.createContext)({
                    anyItemsWithActionBar: !1,
                    setAnyItemsWithActionBar: l.l,
                    hasResizableActionsWithActionBar: !1,
                    setHasResizableActionsWithActionBar: l.l,
                }),
                s = function s(_ref18) {
                    var e = _ref18.children;
                    var _ref19 = (0, a.useState)(!1),
                        _ref20 = _slicedToArray(_ref19, 2),
                        t = _ref20[0],
                        i = _ref20[1],
                        _ref21 = (0, a.useState)(!1),
                        _ref22 = _slicedToArray(_ref21, 2),
                        l = _ref22[0],
                        s = _ref22[1],
                        o = (0, a.useMemo)(
                            function () {
                                return {
                                    anyItemsWithActionBar: t,
                                    setAnyItemsWithActionBar: i,
                                    hasResizableActionsWithActionBar: l,
                                    setHasResizableActionsWithActionBar: s,
                                };
                            },
                            [t, l]
                        );
                    return (0, r.jsx)(n.Provider, {
                        value: o,
                        children: e,
                    });
                };
            s.displayName = "ListViewItemsProvider";
            var o = function o() {
                return (0, a.useContext)(n);
            };
            try {
                n.displayName || (n.displayName = "ItemsContext");
            } catch (_unused5) {}
        },
        24347: function _(e, t, i) {
            i.d(t, {
                W: function W() {
                    return d;
                },
                v: function v() {
                    return u;
                },
            });
            var r = i(74848),
                l = i(73189),
                a = i(96540),
                n = i(50205);
            var s = "list item",
                o = "list items",
                c = (0, a.createContext)({
                    selectedCount: 0,
                    setSelectedCount: l.l,
                    countOnPage: 0,
                    isSelectAllChecked: !1,
                    anyItemsSelected: !1,
                    singularUnits: s,
                    pluralUnits: o,
                    isSelectable: n.eX,
                    hasDragHandle: n.os,
                }),
                d = function d() {
                    var _ref23 =
                            arguments.length > 0 && arguments[0] !== undefined
                                ? arguments[0]
                                : {
                                      singularUnits: s,
                                      pluralUnits: o,
                                      selectedCount: 0,
                                      countOnPage: 0,
                                      isSelectable: n.eX,
                                      hasDragHandle: n.os,
                                  },
                        e = _ref23.children,
                        _ref23$countOnPage = _ref23.countOnPage,
                        t =
                            _ref23$countOnPage === void 0
                                ? 0
                                : _ref23$countOnPage,
                        _ref23$singularUnits = _ref23.singularUnits,
                        i =
                            _ref23$singularUnits === void 0
                                ? s
                                : _ref23$singularUnits,
                        _ref23$pluralUnits = _ref23.pluralUnits,
                        l =
                            _ref23$pluralUnits === void 0
                                ? o
                                : _ref23$pluralUnits,
                        d = _ref23.totalCount,
                        _ref23$selectedCount = _ref23.selectedCount,
                        u =
                            _ref23$selectedCount === void 0
                                ? 0
                                : _ref23$selectedCount,
                        _ref23$isSelectable = _ref23.isSelectable,
                        m =
                            _ref23$isSelectable === void 0
                                ? n.eX
                                : _ref23$isSelectable,
                        _ref23$hasDragHandle = _ref23.hasDragHandle,
                        h =
                            _ref23$hasDragHandle === void 0
                                ? n.os
                                : _ref23$hasDragHandle;
                    var _ref24 = (0, a.useState)(u),
                        _ref25 = _slicedToArray(_ref24, 2),
                        f = _ref25[0],
                        p = _ref25[1];
                    (0, a.useEffect)(
                        function () {
                            return p(u);
                        },
                        [u]
                    );
                    var y = f > 0 && f >= t,
                        v = f > 0,
                        x = (0, a.useMemo)(
                            function () {
                                return {
                                    totalCount: d,
                                    countOnPage: t,
                                    selectedCount: f,
                                    setSelectedCount: p,
                                    isSelectAllChecked: y,
                                    anyItemsSelected: v,
                                    singularUnits: i,
                                    pluralUnits: l,
                                    isSelectable: m,
                                    hasDragHandle: h,
                                };
                            },
                            [d, t, f, p, y, v, i, l, m, h]
                        );
                    return (0, r.jsx)(c.Provider, {
                        value: x,
                        children: e,
                    });
                };
            d.displayName = "ListViewSelectionProvider";
            var u = function u() {
                return (0, a.useContext)(c);
            };
            try {
                c.displayName || (c.displayName = "SelectionContext");
            } catch (_unused6) {}
        },
        27603: function _(e, t, i) {
            i.d(t, {
                u: function u() {
                    return n;
                },
                x: function x() {
                    return s;
                },
            });
            var r = i(74848),
                l = i(96540);
            var a = (0, l.createContext)(void 0),
                n = function n(_ref26) {
                    var e = _ref26.children;
                    var _ref27 = (0, l.useState)(""),
                        _ref28 = _slicedToArray(_ref27, 2),
                        t = _ref28[0],
                        i = _ref28[1],
                        n = (0, l.useMemo)(
                            function () {
                                return {
                                    status: t,
                                    setStatus: i,
                                };
                            },
                            [t]
                        );
                    return (0, r.jsx)(a.Provider, {
                        value: n,
                        children: e,
                    });
                };
            n.displayName = "ListItemStatusProvider";
            var s = function s() {
                var e = (0, l.useContext)(a);
                if (!e)
                    throw Error(
                        "useListItemStatus must be used with StatusProvider."
                    );
                return e;
            };
            try {
                a.displayName || (a.displayName = "StatusContext");
            } catch (_unused7) {}
        },
        28600: function _(e, t, i) {
            i.d(t, {
                A: function A() {
                    return s;
                },
            });
            var _ref29 = (0, i(82075).A)("localStorage"),
                r = _ref29.getItem,
                l = _ref29.setItem,
                a = _ref29.removeItem,
                n = "REACT_PROFILING_ENABLED",
                s = {
                    enable: function enable() {
                        return l(n, "true");
                    },
                    disable: function disable() {
                        return a(n);
                    },
                    isEnabled: function isEnabled() {
                        return !!r(n);
                    },
                };
        },
        29622: function _(e, t, i) {
            i.d(t, {
                F: function F() {
                    return n;
                },
                m: function m() {
                    return s;
                },
            });
            var r = i(74848),
                l = i(96540);
            var a = (0, l.createContext)({
                    alignment: "top",
                }),
                n = function n(_ref30) {
                    var e = _ref30.alignment,
                        t = _ref30.children;
                    var i = (0, l.useMemo)(
                        function () {
                            return {
                                alignment:
                                    e !== null && e !== void 0 ? e : "top",
                            };
                        },
                        [e]
                    );
                    return (0, r.jsx)(a.Provider, {
                        value: i,
                        children: t,
                    });
                };
            n.displayName = "ListItemAlignmentProvider";
            var s = function s() {
                return (0, l.useContext)(a);
            };
            try {
                a.displayName || (a.displayName = "AlignmentContext");
            } catch (_unused8) {}
        },
        35220: function _(e, t, i) {
            i.d(t, {
                H: function H() {
                    return o;
                },
                e: function e() {
                    return c;
                },
            });
            var r = i(74848),
                l = i(73189),
                a = i(96540),
                n = i(50205);
            var s = (0, a.createContext)(void 0),
                o = function o(_ref31) {
                    var e = _ref31.children,
                        _ref31$variant = _ref31.variant,
                        t = _ref31$variant === void 0 ? n.tp : _ref31$variant,
                        _ref31$setVariant = _ref31.setVariant,
                        i =
                            _ref31$setVariant === void 0
                                ? l.l
                                : _ref31$setVariant;
                    var o = (0, a.useMemo)(
                        function () {
                            return {
                                variant: t,
                                setVariant: i,
                            };
                        },
                        [i, t]
                    );
                    return (0, r.jsx)(s.Provider, {
                        value: o,
                        children: e,
                    });
                };
            o.displayName = "ListViewVariantProvider";
            var c = function c() {
                var e = (0, a.useContext)(s);
                if (!e)
                    throw Error(
                        "useListViewVariant must be used with VariantProvider."
                    );
                return e;
            };
            try {
                s.displayName || (s.displayName = "VariantContext");
            } catch (_unused9) {}
        },
        42409: function _(e, t, i) {
            i.d(t, {
                g: function g() {
                    return a;
                },
                t: function t() {
                    return l;
                },
            });
            var r = i(38621);
            var l = {
                    issueHierarchyItemChildrenFetchPageSize: 25,
                    issueItemLabelFetchPageSize: 10,
                    maxListSize: 100,
                    copilotDisplayName: "Copilot",
                    ghostUserLogin: "ghost",
                    ghostUserAvatarUrl: "/ghost.png",
                },
                a = {
                    issueIcons: {
                        OPEN: {
                            color: "var(--fgColor-open)",
                            icon: r.IssueOpenedIcon,
                            description: "Status: Open.",
                        },
                        CLOSED: {
                            color: "var(--fgColor-done)",
                            icon: r.IssueClosedIcon,
                            description: "Status: Closed (completed).",
                        },
                        COMPLETED: {
                            color: "var(--fgColor-done)",
                            icon: r.IssueClosedIcon,
                            description: "Status: Closed (completed).",
                        },
                        NOT_PLANNED: {
                            color: "var(--fgColor-muted)",
                            icon: r.SkipIcon,
                            description: "Status: Not planned (skipped).",
                        },
                        DUPLICATE: {
                            color: "var(--fgColor-muted)",
                            icon: r.SkipIcon,
                            description:
                                "Status: Duplicate of an existing item.",
                        },
                    },
                    pullRequestIcons: {
                        MERGED: {
                            color: "var(--fgColor-done)",
                            icon: r.GitMergeIcon,
                            description: "Status: Merged (completed).",
                        },
                        IN_MERGE_QUEUE: {
                            color: "var(--fgColor-attention)",
                            icon: r.GitMergeQueueIcon,
                            description: "Status: In merge queue.",
                        },
                        OPEN: {
                            color: "var(--fgColor-open)",
                            icon: r.GitPullRequestIcon,
                            description: "Status: Open (in progress).",
                        },
                        CLOSED: {
                            color: "var(--fgColor-closed)",
                            icon: r.GitPullRequestClosedIcon,
                            description: "Status: Closed (abandoned).",
                        },
                        DRAFT: {
                            color: "var(--fgColor-draft)",
                            icon: r.GitPullRequestDraftIcon,
                            description: "Status: Draft (not ready).",
                        },
                    },
                };
        },
        49744: function _(e, t, i) {
            i.d(t, {
                I: function I() {
                    return s;
                },
                t: function t() {
                    return n;
                },
            });
            var r = i(74848),
                l = i(96540);
            var a = (0, l.createContext)(void 0),
                n = function n(_ref32) {
                    var e = _ref32.children;
                    var _ref33 = (0, l.useState)(!1),
                        _ref34 = _slicedToArray(_ref33, 2),
                        t = _ref34[0],
                        i = _ref34[1],
                        n = (0, l.useMemo)(
                            function () {
                                return {
                                    hasNewActivity: t,
                                    setHasNewActivity: i,
                                };
                            },
                            [t]
                        );
                    return (0, r.jsx)(a.Provider, {
                        value: n,
                        children: e,
                    });
                };
            n.displayName = "ListItemNewActivityProvider";
            var s = function s() {
                var e = (0, l.useContext)(a);
                if (!e)
                    throw Error(
                        "useListItemNewActivity must be used with NewActivityProvider."
                    );
                return e;
            };
            try {
                a.displayName || (a.displayName = "NewActivityContext");
            } catch (_unused0) {}
        },
        50205: function _(e, t, i) {
            i.d(t, {
                Dy: function Dy() {
                    return l;
                },
                O1: function O1() {
                    return n;
                },
                QL: function QL() {
                    return d;
                },
                eX: function eX() {
                    return o;
                },
                n1: function n1() {
                    return r;
                },
                os: function os() {
                    return c;
                },
                tD: function tD() {
                    return a;
                },
                tp: function tp() {
                    return s;
                },
            });
            var r = ["h1", "h2", "h3", "h4", "h5", "h6"],
                l = ["list-view", "list-view-metadata", "listitem"],
                a = "h2",
                n = {
                    "list-view": a,
                    "list-view-metadata": "h3",
                    listitem: "h3",
                },
                s = "default",
                o = !1,
                c = !1,
                d = "List view";
        },
        51407: function _(e, t, i) {
            i.d(t, {
                Y: function Y() {
                    return r;
                },
            });
            function r() {
                var e = {};
                return (
                    (e.promise = new Promise(function (t, i) {
                        ((e.resolve = t), (e.reject = i));
                    })),
                    e
                );
            }
        },
        53687: function _(e, t, i) {
            i.d(t, {
                P: function P() {
                    return s;
                },
                e: function e() {
                    return n;
                },
            });
            var r = i(74848),
                l = i(96540);
            var a = (0, l.createContext)({
                    multiPageSelectionAllowed: !1,
                }),
                n = function n(_ref35) {
                    var e = _ref35.children,
                        _ref35$multiPageSelec =
                            _ref35.multiPageSelectionAllowed,
                        t =
                            _ref35$multiPageSelec === void 0
                                ? !1
                                : _ref35$multiPageSelec;
                    var _ref36 = (0, l.useState)(t),
                        _ref37 = _slicedToArray(_ref36, 2),
                        i = _ref37[0],
                        n = _ref37[1],
                        s = (0, l.useMemo)(
                            function () {
                                return {
                                    multiPageSelectionAllowed: i,
                                    setMultiPageSelectionAllowed: n,
                                };
                            },
                            [i]
                        );
                    return (0, r.jsx)(a.Provider, {
                        value: s,
                        children: e,
                    });
                };
            n.displayName = "ListViewMultiPageSelectionProvider";
            var s = function s() {
                return (0, l.useContext)(a);
            };
            try {
                a.displayName || (a.displayName = "MultiPageSelectionContext");
            } catch (_unused1) {}
        },
        56825: function _(e, t, i) {
            i.d(t, {
                m: function m() {
                    return n;
                },
            });
            var r = i(96540),
                l = i(50205),
                a = i(61015);
            function n(e) {
                var _ref38 = (0, a.t)(),
                    t = _ref38.titleHeaderTag,
                    i = _ref38.hasMetadataTitle;
                return (0, r.useMemo)(
                    function () {
                        var r = l.Dy.findIndex(function (t) {
                                return t === e;
                            }),
                            a = l.n1.indexOf(t) + (i ? r : r - 1);
                        return a > l.n1.length - 1 ? "h6" : l.n1[a] || l.O1[e];
                    },
                    [t, i, e]
                );
            }
        },
        60257: function _(e, t, i) {
            i.d(t, {
                W: function W() {
                    return c;
                },
                r: function r() {
                    return d;
                },
            });
            var r = i(74848),
                l = i(4559),
                a = i(73189),
                n = i(96540),
                s = i(74501);
            var o = (0, n.createContext)({
                    isSelected: !1,
                    onSelect: a.l,
                }),
                c = function c(_ref39) {
                    var e = _ref39.children,
                        _ref39$value = _ref39.value,
                        t = _ref39$value.isSelected,
                        i = _ref39$value.onSelect;
                    var _ref40 = (0, s.J)(),
                        a = _ref40.title,
                        c = (0, n.useMemo)(
                            function () {
                                return {
                                    isSelected: t,
                                    onSelect: function onSelect(e) {
                                        ((0, l.i)(
                                            e
                                                ? "Selected. ".concat(a, ".")
                                                : "Unselected. ".concat(a, ".")
                                        ),
                                            i(e));
                                    },
                                };
                            },
                            [t, i, a]
                        );
                    return (0, r.jsx)(o.Provider, {
                        value: c,
                        children: e,
                    });
                };
            c.displayName = "ListItemSelectionProvider";
            var d = function d() {
                return (0, n.useContext)(o);
            };
            try {
                o.displayName || (o.displayName = "SelectionContext");
            } catch (_unused10) {}
        },
        61015: function _(e, t, i) {
            i.d(t, {
                t: function t() {
                    return o;
                },
                y: function y() {
                    return s;
                },
            });
            var r = i(74848),
                l = i(96540),
                a = i(50205);
            var n = (0, l.createContext)(void 0),
                s = function s(_ref41) {
                    var e = _ref41.children,
                        t = _ref41.title,
                        _ref41$titleHeaderTag = _ref41.titleHeaderTag,
                        i =
                            _ref41$titleHeaderTag === void 0
                                ? a.tD
                                : _ref41$titleHeaderTag;
                    var _ref42 = (0, l.useState)(!1),
                        _ref43 = _slicedToArray(_ref42, 2),
                        s = _ref43[0],
                        o = _ref43[1],
                        c = (0, l.useMemo)(
                            function () {
                                return {
                                    title: t.trim() || a.QL,
                                    titleHeaderTag: i,
                                    hasMetadataTitle: s,
                                    setHasMetadataTitle: o,
                                };
                            },
                            [s, t, i]
                        );
                    return (0, r.jsx)(n.Provider, {
                        value: c,
                        children: e,
                    });
                };
            s.displayName = "ListViewTitleProvider";
            var o = function o() {
                var e = (0, l.useContext)(n);
                if (!e)
                    throw Error(
                        "useListViewTitle must be used with TitleProvider."
                    );
                return e;
            };
            try {
                n.displayName || (n.displayName = "TitleContext");
            } catch (_unused11) {}
        },
        74501: function _(e, t, i) {
            i.d(t, {
                J: function J() {
                    return s;
                },
                y: function y() {
                    return n;
                },
            });
            var r = i(74848),
                l = i(96540);
            var a = (0, l.createContext)(void 0),
                n = function n(_ref44) {
                    var e = _ref44.children;
                    var _ref45 = (0, l.useState)(""),
                        _ref46 = _slicedToArray(_ref45, 2),
                        t = _ref46[0],
                        i = _ref46[1],
                        _ref47 = (0, l.useState)(null),
                        _ref48 = _slicedToArray(_ref47, 2),
                        n = _ref48[0],
                        s = _ref48[1],
                        o = (0, l.useRef)(null);
                    (0, l.useEffect)(
                        function () {
                            var _o$current;
                            (o === null ||
                            o === void 0 ||
                            (_o$current = o.current) === null ||
                            _o$current === void 0
                                ? void 0
                                : _o$current.textContent) &&
                                i(o.current.textContent.trim());
                        },
                        [o, i]
                    );
                    var c = (0, l.useMemo)(
                        function () {
                            return {
                                title: t,
                                titleAction: n,
                                setTitleAction: s,
                                headingRef: o,
                            };
                        },
                        [t, n]
                    );
                    return (0, r.jsx)(a.Provider, {
                        value: c,
                        children: e,
                    });
                };
            n.displayName = "ListItemTitleProvider";
            var s = function s() {
                var e = (0, l.useContext)(a);
                if (!e)
                    throw Error(
                        "useListItemTitle must be used with TitleProvider."
                    );
                return e;
            };
            try {
                a.displayName || (a.displayName = "TitleContext");
            } catch (_unused12) {}
        },
        75986: function _(e, t, i) {
            i.d(t, {
                If: function If() {
                    return s;
                },
                JE: function JE() {
                    return n;
                },
            });
            var r = i(74848),
                l = i(96540);
            var a = (0, l.createContext)(void 0),
                n = function n(_ref49) {
                    var e = _ref49.children;
                    var t = (0, l.useId)(),
                        i = (0, l.useMemo)(
                            function () {
                                return {
                                    idPrefix: t,
                                };
                            },
                            [t]
                        );
                    return (0, r.jsx)(a.Provider, {
                        value: i,
                        children: e,
                    });
                };
            n.displayName = "ListViewIdProvider";
            var s = function s() {
                var e = (0, l.useContext)(a);
                if (!e)
                    throw Error("useListViewId must be used with IdProvider.");
                return e;
            };
            try {
                a.displayName || (a.displayName = "IdContext");
            } catch (_unused13) {}
        },
        77177: function _(e, t, i) {
            i.d(t, {
                L: function L() {
                    return s;
                },
                O: function O() {
                    return n;
                },
            });
            var r = i(74848),
                l = i(96540);
            var a = (0, l.createContext)(void 0),
                n = function n(_ref50) {
                    var e = _ref50.children;
                    var _ref51 = (0, l.useState)(""),
                        _ref52 = _slicedToArray(_ref51, 2),
                        t = _ref52[0],
                        i = _ref52[1],
                        n = (0, l.useMemo)(
                            function () {
                                return {
                                    description: t,
                                    setDescription: i,
                                };
                            },
                            [t]
                        );
                    return (0, r.jsx)(a.Provider, {
                        value: n,
                        children: e,
                    });
                };
            n.displayName = "ListItemDescriptionProvider";
            var s = function s() {
                var e = (0, l.useContext)(a);
                if (!e)
                    throw Error(
                        "useListItemDescription must be used with DescriptionProvider."
                    );
                return e;
            };
            try {
                a.displayName || (a.displayName = "DescriptionContext");
            } catch (_unused14) {}
        },
        80293: function _(e, t, i) {
            i.d(t, {
                N: function N() {
                    return l;
                },
            });
            var r = i(96540);
            function l(e) {
                var _ref53 =
                        arguments.length > 1 && arguments[1] !== undefined
                            ? arguments[1]
                            : {},
                    _ref53$isPropUpdateDi = _ref53.isPropUpdateDisabled,
                    t =
                        _ref53$isPropUpdateDi === void 0
                            ? !1
                            : _ref53$isPropUpdateDi,
                    _ref53$isEqual = _ref53.isEqual,
                    i = _ref53$isEqual === void 0 ? Object.is : _ref53$isEqual;
                var _ref54 = (0, r.useState)(e),
                    _ref55 = _slicedToArray(_ref54, 2),
                    a = _ref55[0],
                    n = _ref55[1],
                    _ref56 = (0, r.useState)(e),
                    _ref57 = _slicedToArray(_ref56, 2),
                    s = _ref57[0],
                    o = _ref57[1],
                    c = e instanceof Function ? e() : e;
                return (t || i(s, c) || (o(c), n(c)), [a, n]);
            }
        },
        82319: function _(e, t, i) {
            i.d(t, {
                V: function V() {
                    return n;
                },
                q: function q() {
                    return a;
                },
            });
            var r = i(38621),
                l = i(42409);
            function a(e) {
                var t = {
                    color: "fg.muted",
                    icon: r.SkipIcon,
                    description: l.g.issueIcons.NOT_PLANNED.description,
                };
                if (e) {
                    var _i2 = "".concat(e);
                    if (_i2 in l.g.issueIcons) t = l.g.issueIcons[_i2];
                    else if ("COMPLETED" !== e)
                        throw Error("Invalid state reason");
                }
                return t;
            }
            function n(e) {
                var t = {
                    color: "fg.muted",
                    icon: r.SkipIcon,
                    description: l.g.pullRequestIcons.DRAFT.description,
                };
                if (e) {
                    var _i3 = "".concat(e);
                    if (_i3 in l.g.pullRequestIcons)
                        t = l.g.pullRequestIcons[_i3];
                    else throw Error("Invalid state reason");
                }
                return t;
            }
        },
        91230: function _(e, t, i) {
            i.d(t, {
                E7: function E7() {
                    return D;
                },
            });
            var r = i(74848),
                l = i(96540);
            var a = (0, l.createContext)({
                    actions: [],
                    staticMenuActions: [],
                    label: "Actions",
                    gap: 0,
                }),
                n = function n(_ref58) {
                    var e = _ref58.children,
                        _ref58$value = _ref58.value,
                        _ref58$value$actions = _ref58$value.actions,
                        t =
                            _ref58$value$actions === void 0
                                ? []
                                : _ref58$value$actions,
                        i = _ref58$value.staticMenuActions,
                        _ref58$value$variant = _ref58$value.variant,
                        n =
                            _ref58$value$variant === void 0
                                ? "toolbar"
                                : _ref58$value$variant,
                        s = _ref58$value.label,
                        o = _ref58$value.gap;
                    var c = (0, l.useMemo)(
                        function () {
                            return {
                                actions: t,
                                staticMenuActions: i,
                                variant: n,
                                label: s,
                                gap: o,
                            };
                        },
                        [t, i, n, s, o]
                    );
                    return (0, r.jsx)(a.Provider, {
                        value: c,
                        children: e,
                    });
                },
                s = function s() {
                    var e = (0, l.useContext)(a);
                    if (!e)
                        throw Error(
                            "useActionBarContent must be used with ActionBarContentProvider."
                        );
                    return e;
                };
            try {
                a.displayName || (a.displayName = "ActionBarContentContext");
            } catch (_unused15) {}
            try {
                n.displayName || (n.displayName = "ActionBarContentProvider");
            } catch (_unused16) {}
            var o = (0, l.createContext)({
                    outerContainerRef: (0, l.createRef)(),
                    itemContainerRef: (0, l.createRef)(),
                }),
                c = function c(_ref59) {
                    var e = _ref59.value.anchorRef,
                        t = _ref59.children;
                    var i = (0, l.useRef)(null),
                        a = (0, l.useRef)(null),
                        n = (0, l.useMemo)(
                            function () {
                                return {
                                    outerContainerRef: i,
                                    itemContainerRef: a,
                                    anchorRef: e,
                                };
                            },
                            [e]
                        );
                    return (0, r.jsx)(o.Provider, {
                        value: n,
                        children: t,
                    });
                },
                d = function d() {
                    var e = (0, l.useContext)(o);
                    if (!e)
                        throw Error(
                            "useActionBarRef must be used with ActionBarRefProvider."
                        );
                    return e;
                };
            try {
                o.displayName || (o.displayName = "ActionBarRefContext");
            } catch (_unused17) {}
            try {
                c.displayName || (c.displayName = "ActionBarRefProvider");
            } catch (_unused18) {}
            var u = i(73189),
                m = i(80293),
                h = i(50463),
                f = i(93330);
            var p = function p(e, t) {
                    var i =
                            2 *
                            (function (e) {
                                if (!e) return 0;
                                var t = window.getComputedStyle(e);
                                return t !== null && t !== void 0 && t.columnGap
                                    ? parseInt(t.columnGap, 10)
                                    : 0;
                            })(t),
                        r = e.getBoundingClientRect().width,
                        l = window.getComputedStyle(e);
                    return (
                        r +
                        (l !== null && l !== void 0 && l.marginLeft
                            ? parseInt(l.marginLeft, 10)
                            : 0) +
                        (l !== null && l !== void 0 && l.marginRight
                            ? parseInt(l.marginRight, 10)
                            : 0) +
                        i
                    );
                },
                y = function y(e, t) {
                    var i = v(e, t);
                    if (void 0 === i) return;
                    var r = i;
                    return (t && (r -= t.offsetLeft), r);
                },
                v = function v(e, t) {
                    if (!e) return;
                    var i = e.offsetWidth;
                    return (t && (i -= t.offsetWidth), i);
                },
                x = (0, l.createContext)({
                    visibleChildEndIndex: 0,
                    justifySpaceBetween: !1,
                    recalculateItemSize: u.l,
                }),
                g = function g(_ref60) {
                    var e = _ref60.children,
                        t = _ref60.value.actionKeys;
                    var i = t.length,
                        _ref61 = (0, m.N)(i),
                        _ref62 = _slicedToArray(_ref61, 2),
                        a = _ref62[0],
                        n = _ref62[1],
                        _d = d(),
                        s = _d.outerContainerRef,
                        o = _d.itemContainerRef,
                        _ref63 = (0, l.useState)(),
                        _ref64 = _slicedToArray(_ref63, 2),
                        c = _ref64[0],
                        u = _ref64[1],
                        _ref65 = (0, l.useState)(),
                        _ref66 = _slicedToArray(_ref65, 2),
                        g = _ref66[0],
                        N = _ref66[1],
                        _ref67 = (0, l.useState)(
                            new Map(
                                t.map(function (e) {
                                    return [e, void 0];
                                })
                            )
                        ),
                        _ref68 = _slicedToArray(_ref67, 2),
                        C = _ref68[0],
                        b = _ref68[1],
                        _ref69 = (0, l.useState)(!1),
                        _ref70 = _slicedToArray(_ref69, 2),
                        I = _ref70[0],
                        w = _ref70[1],
                        S = (0, l.useMemo)(
                            function () {
                                return t.slice(0, a).every(function (e) {
                                    return (
                                        C.has(e) && "number" == typeof C.get(e)
                                    );
                                });
                            },
                            [t, C, a]
                        ),
                        j = (0, l.useCallback)(
                            function (e) {
                                var i = t[e];
                                if (i) return C.get(i);
                            },
                            [t, C]
                        ),
                        A = (0, l.useCallback)(
                            function (e, t) {
                                var i = o.current;
                                if (!i) return;
                                var r = p(t, i);
                                b(function (t) {
                                    if (r === t.get(e) || isNaN(r)) return t;
                                    var i = new Map(Array.from(t.entries()));
                                    return (i.set(e, r), i);
                                });
                            },
                            [o]
                        ),
                        _ = (0, l.useCallback)(
                            function () {
                                if (!S) return;
                                var e = s.current,
                                    t = o.current,
                                    i = v(e, t);
                                if (void 0 === i) return;
                                var r = y(e, t);
                                void 0 !== r && i <= r && n(Math.max(0, a - 1));
                            },
                            [S, s, o, n, a]
                        ),
                        E = (0, l.useCallback)(
                            function () {
                                var e = s.current,
                                    t = o.current,
                                    r = v(e, t);
                                if (void 0 === r) return;
                                var l = j(a);
                                if (void 0 === l) return;
                                var c = y(e, t);
                                void 0 !== c &&
                                    r > c + l &&
                                    n(Math.min(i, a + 1));
                            },
                            [s, o, j, a, n, i]
                        ),
                        L = (0, l.useCallback)(
                            function () {
                                var e = s.current,
                                    t = o.current;
                                if (!e || !t) return;
                                var i = e.offsetWidth;
                                i &&
                                    (void 0 === c || i <= c
                                        ? _()
                                        : i > c && E(),
                                    u(i),
                                    w(
                                        i <=
                                            (g !== null && g !== void 0
                                                ? g
                                                : t.offsetWidth)
                                    ));
                            },
                            [E, _, g, c, s, o]
                        );
                    ((0, h.A)(
                        function () {
                            var e = o.current;
                            if (!e) return;
                            var i = new Map();
                            var _iterator = _createForOfIteratorHelper(t),
                                _step;
                            try {
                                for (
                                    _iterator.s();
                                    !(_step = _iterator.n()).done;

                                ) {
                                    var _r2 = _step.value;
                                    var _t2 = e.querySelector(
                                        '[data-action-bar-item="'.concat(
                                            _r2,
                                            '"]'
                                        )
                                    );
                                    _t2 && i.set(_r2, p(_t2, e));
                                }
                            } catch (err) {
                                _iterator.e(err);
                            } finally {
                                _iterator.f();
                            }
                            b(i);
                        },
                        [t, o]
                    ),
                        (0, h.A)(
                            function () {
                                var e = o.current;
                                e && N(e.offsetWidth);
                            },
                            [o]
                        ),
                        (0, h.A)(
                            function () {
                                L();
                            },
                            [L]
                        ),
                        (0, f.w)(L, s));
                    var P = (0, l.useMemo)(
                        function () {
                            return {
                                visibleChildEndIndex: a,
                                justifySpaceBetween: I,
                                recalculateItemSize: A,
                            };
                        },
                        [a, I, A]
                    );
                    return (0, r.jsx)(x.Provider, {
                        value: P,
                        children: e,
                    });
                },
                N = function N() {
                    var e = (0, l.useContext)(x);
                    return (
                        e || {
                            justifySpaceBetween: !1,
                            visibleChildEndIndex: 0,
                            recalculateItemSize: u.l,
                        }
                    );
                };
            try {
                x.displayName || (x.displayName = "ActionBarResizeContext");
            } catch (_unused19) {}
            try {
                g.displayName || (g.displayName = "ActionBarResizeProvider");
            } catch (_unused20) {}
            var C = i(29731),
                b = i(69676),
                I = i(45800),
                w = i(34164),
                S = i(38621),
                j = i(94236),
                A = i(26108),
                _ = i(5524),
                E = i(12683);
            var L = S.KebabHorizontalIcon,
                P = "invisible",
                M = function M(_ref71) {
                    var _ref71$anchorProps = _ref71.anchorProps,
                        _ref71$anchorProps2 =
                            _ref71$anchorProps === void 0
                                ? {
                                      icon: L,
                                      variant: P,
                                  }
                                : _ref71$anchorProps,
                        e = _ref71$anchorProps2["aria-label"],
                        _ref71$anchorProps2$i = _ref71$anchorProps2.icon,
                        t =
                            _ref71$anchorProps2$i === void 0
                                ? L
                                : _ref71$anchorProps2$i,
                        _ref71$anchorProps2$v = _ref71$anchorProps2.variant,
                        i =
                            _ref71$anchorProps2$v === void 0
                                ? P
                                : _ref71$anchorProps2$v,
                        a = _objectWithoutProperties(
                            _ref71$anchorProps2,
                            _excluded4
                        ),
                        n = _ref71.open,
                        o = _ref71.onOpenChange;
                    var _d2 = d(),
                        c = _d2.anchorRef,
                        _s = s(),
                        u = _s.actions,
                        m = _s.staticMenuActions,
                        h = _s.label,
                        _N = N(),
                        f = _N.visibleChildEndIndex,
                        p = (0, l.useMemo)(
                            function () {
                                return (0, E.h1)(a, {
                                    "aria-label":
                                        (e === null || e === void 0
                                            ? void 0
                                            : e.trim()) || "More ".concat(h),
                                    icon: t,
                                    className:
                                        "OverflowMenu-module__IconButton_0--cxtvS",
                                    variant: i,
                                });
                            },
                            [e, t, h, i, a]
                        ),
                        y = (0, l.useMemo)(
                            function () {
                                return u === null || u === void 0
                                    ? void 0
                                    : u.slice(f);
                            },
                            [u, f]
                        ),
                        v = y && y.length > 0,
                        x = m && m.length > 0;
                    return v || x
                        ? (0, r.jsxs)(j.W, {
                              anchorRef: c,
                              open: n,
                              onOpenChange: o,
                              children: [
                                  (0, r.jsx)(j.W.Anchor, {
                                      children: (0, r.jsx)(
                                          A.K,
                                          _objectSpread(
                                              _objectSpread(
                                                  {},
                                                  (0, C.G)(
                                                      "overflow-menu-anchor"
                                                  )
                                              ),
                                              p
                                          )
                                      ),
                                  }),
                                  (0, r.jsx)(j.W.Overlay, {
                                      align: "end",
                                      "data-overflow-menu-overlay": !0,
                                      children: (0, r.jsxs)(_.l, {
                                          children: [
                                              x &&
                                                  m.map(function (e) {
                                                      return (0, r.jsx)(
                                                          l.Fragment,
                                                          {
                                                              children:
                                                                  e.render(),
                                                          },
                                                          e.key
                                                      );
                                                  }),
                                              y === null || y === void 0
                                                  ? void 0
                                                  : y.map(function (e) {
                                                        return (0, r.jsx)(
                                                            l.Fragment,
                                                            {
                                                                children:
                                                                    e.render(
                                                                        !0
                                                                    ),
                                                            },
                                                            e.key
                                                        );
                                                    }),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : null;
                };
            try {
                M.displayName || (M.displayName = "OverflowMenu");
            } catch (_unused21) {}
            var R = function R(_ref72) {
                var e = _ref72.children,
                    t = _ref72.actionKey;
                var i = (0, l.useRef)(null),
                    _N2 = N(),
                    a = _N2.recalculateItemSize;
                return (
                    (0, h.A)(
                        function () {
                            i.current && a(t, i.current);
                        },
                        [i, a, t]
                    ),
                    (0, r.jsx)(
                        "div",
                        _objectSpread(
                            _objectSpread(
                                {},
                                (0, C.G)("action-bar-item-".concat(t))
                            ),
                            {},
                            {
                                "data-action-bar-item": t,
                                ref: i,
                                className: "VisibleItem-module__Box_0--BsJkb",
                                children: e,
                            }
                        )
                    )
                );
            };
            try {
                R.displayName || (R.displayName = "VisibleItem");
            } catch (_unused22) {}
            var T = function T(_ref73) {
                var e = _ref73.className,
                    t = _ref73.style;
                var _d3 = d(),
                    i = _d3.itemContainerRef,
                    _s2 = s(),
                    l = _s2.actions,
                    a = _s2.gap,
                    _N3 = N(),
                    n = _N3.visibleChildEndIndex,
                    o = l === null || l === void 0 ? void 0 : l.slice(0, n);
                return (0, r.jsx)(
                    "div",
                    _objectSpread(
                        _objectSpread({}, (0, C.G)("action-bar")),
                        {},
                        {
                            ref: i,
                            className: (0, w.$)(
                                e,
                                "VisibleItems-module__Box_1--LOtDr"
                            ),
                            style: _objectSpread(
                                {
                                    gap: a,
                                },
                                t
                            ),
                            children:
                                o === null || o === void 0
                                    ? void 0
                                    : o.map(function (_ref74) {
                                          var e = _ref74.key,
                                              t = _ref74.render;
                                          return (0, r.jsx)(
                                              R,
                                              {
                                                  actionKey: e,
                                                  children: t(!1),
                                              },
                                              e
                                          );
                                      }),
                        }
                    )
                );
            };
            try {
                T.displayName || (T.displayName = "VisibleItems");
            } catch (_unused23) {}
            var B = function B(_ref75) {
                var e = _ref75.overflowMenuToggleProps,
                    t = _ref75.overflowMenuProps,
                    i = _ref75.children,
                    l = _objectWithoutProperties(_ref75, _excluded5);
                var _d4 = d(),
                    a = _d4.outerContainerRef,
                    _s3 = s(),
                    n = _s3.label,
                    o = _s3.variant,
                    c = _s3.gap,
                    _N4 = N(),
                    u = _N4.justifySpaceBetween;
                return (
                    (0, I.G)(
                        {
                            containerRef: a,
                            bindKeys: b.z0.ArrowHorizontal | b.z0.HomeAndEnd,
                            focusOutBehavior: "wrap",
                            disabled: "toolbar" !== o,
                        },
                        [a]
                    ),
                    (0, r.jsxs)(
                        "div",
                        _objectSpread(
                            _objectSpread(
                                {
                                    ref: a,
                                },
                                (0, C.G)("action-bar-container")
                            ),
                            {},
                            {
                                role: "toolbar" === o ? "toolbar" : void 0,
                                "aria-label": "toolbar" === o ? n : void 0,
                                style: {
                                    gap: c,
                                },
                                className: (0, w.$)(
                                    "VisibleAndOverflowContainer-module__Box_0--KyT2b",
                                    u &&
                                        "VisibleAndOverflowContainer-module__space--fVHr3"
                                ),
                                children: [
                                    (0, r.jsx)(T, _objectSpread({}, l)),
                                    i,
                                    (0, r.jsx)(
                                        M,
                                        _objectSpread(
                                            {
                                                anchorProps: e,
                                            },
                                            t
                                        )
                                    ),
                                ],
                            }
                        )
                    )
                );
            };
            try {
                B.displayName ||
                    (B.displayName = "VisibleAndOverflowContainer");
            } catch (_unused24) {}
            var k = "normal",
                O = function O(_ref76) {
                    var e = _ref76.children,
                        t = _objectWithoutProperties(_ref76, _excluded6);
                    return (0, r.jsx)(
                        B,
                        _objectSpread(
                            _objectSpread({}, t),
                            {},
                            {
                                children: e,
                            }
                        )
                    );
                },
                D = function D(_ref77) {
                    var _ref77$actions = _ref77.actions,
                        e = _ref77$actions === void 0 ? [] : _ref77$actions,
                        t = _ref77.staticMenuActions,
                        i = _ref77.overflowMenuToggleProps,
                        a = _ref77.overflowMenuProps,
                        s = _ref77.children,
                        o = _ref77.label,
                        d = _ref77.variant,
                        _ref77$density = _ref77.density,
                        u = _ref77$density === void 0 ? k : _ref77$density,
                        m = _ref77.anchorRef,
                        h = _ref77.className,
                        f = _ref77.style;
                    var p = (0, l.useMemo)(
                            function () {
                                return {
                                    actions: e,
                                    staticMenuActions: t,
                                    variant: d,
                                    label: o,
                                    gap:
                                        "condensed" === u
                                            ? "var(--base-size-4)"
                                            : "spacious" === u
                                              ? "var(--base-size-16)"
                                              : "none" === u
                                                ? 0
                                                : "var(--base-size-8)",
                                };
                            },
                            [e, t, d, o, u]
                        ),
                        y = (0, l.useMemo)(
                            function () {
                                return {
                                    actionKeys: e.map(function (e) {
                                        return e.key;
                                    }),
                                };
                            },
                            [e]
                        ),
                        v = t && t.length > 0,
                        x = e && e.length > 0;
                    if (!x && !v) return null;
                    var N = {
                        overflowMenuToggleProps: i,
                        overflowMenuProps: a,
                        className: h,
                        style: f,
                    };
                    return (0, r.jsx)(c, {
                        value: {
                            anchorRef: m,
                        },
                        children: (0, r.jsx)(n, {
                            value: p,
                            children: x
                                ? (0, r.jsx)(g, {
                                      value: y,
                                      children: (0, r.jsx)(
                                          O,
                                          _objectSpread(
                                              _objectSpread({}, N),
                                              {},
                                              {
                                                  children: s,
                                              }
                                          )
                                      ),
                                  })
                                : (0, r.jsx)(
                                      O,
                                      _objectSpread(
                                          _objectSpread({}, N),
                                          {},
                                          {
                                              children: s,
                                          }
                                      )
                                  ),
                        }),
                    });
                };
            try {
                O.displayName || (O.displayName = "InternalActionBar");
            } catch (_unused25) {}
            try {
                D.displayName || (D.displayName = "ActionBar");
            } catch (_unused26) {}
        },
        95378: function _(e, t, i) {
            i.d(t, {
                kx: function kx() {
                    return S;
                },
                ao: function ao() {
                    return w;
                },
            });
            var r,
                l,
                a = i(74848),
                n = i(20263),
                s = i(73017),
                o = i(29731),
                c = i(34164),
                d = i(96540),
                u = i(56825),
                m = i(35220),
                h = i(29622),
                f = i(87670),
                p = i(46720),
                y = i(24347);
            var v = "Selection-module__centerAligned--HIRyI",
                x = "Selection-module__compact--azMKM";
            var g = i(60257),
                N = i(74501);
            var C = function C() {
                var _ref78 = (0, m.e)(),
                    e = _ref78.variant,
                    _ref79 = (0, y.v)(),
                    t = _ref79.isSelectable,
                    i = _ref79.hasDragHandle,
                    _ref80 = (0, g.r)(),
                    r = _ref80.isSelected,
                    l = _ref80.onSelect,
                    _ref81 = (0, N.J)(),
                    n = _ref81.title,
                    _ref82 = (0, h.m)(),
                    s = _ref82.alignment;
                return t
                    ? (0, a.jsxs)(
                          "div",
                          _objectSpread(
                              _objectSpread(
                                  {
                                      className: (0, c.$)(
                                          i
                                              ? "Selection-module__containerWithDragHandle--mLWh4"
                                              : "Selection-module__container--OQE4d",
                                          "center" === s && v
                                      ),
                                  },
                                  (0, o.G)("list-view-item-selection")
                              ),
                              {},
                              {
                                  children: [
                                      i &&
                                          (0, a.jsx)(f.BS.DragTrigger, {
                                              className: (0, c.$)(
                                                  "Selection-module__dragTrigger--SM4bZ",
                                                  "compact" === e && x
                                              ),
                                          }),
                                      (0, a.jsx)(
                                          p.A,
                                          _objectSpread(
                                              {
                                                  className: (0, c.$)(
                                                      "Selection-module__checkbox--X3ras",
                                                      "compact" === e && x,
                                                      "center" === s && v
                                                  ),
                                                  checked: r,
                                                  onChange:
                                                      function onChange() {
                                                          return l(!r);
                                                      },
                                                  "aria-label":
                                                      "Select: ".concat(n),
                                                  "data-listview-component":
                                                      "selection-input",
                                              },
                                              (0, o.G)(
                                                  "list-view-item-selection-input"
                                              )
                                          )
                                      ),
                                  ],
                              }
                          )
                      )
                    : null;
            };
            try {
                C.displayName || (C.displayName = "ListItemSelection");
            } catch (_unused27) {}
            var b = "Title-module__compact--eK6hD";
            function I(_ref83) {
                var e = _ref83.children,
                    t = _ref83.containerStyle,
                    i = _ref83.containerClassName,
                    r = _ref83.headerContainerRef,
                    l = _ref83.headingStyle,
                    n = _ref83.headingClassName,
                    s = _ref83.headingRef,
                    d = _ref83.leadingBadge,
                    f = _ref83.trailingBadges,
                    p = _ref83.header;
                var _ref84 = (0, m.e)(),
                    y = _ref84.variant,
                    _ref85 = (0, N.J)(),
                    v = _ref85.headingRef,
                    _ref86 = (0, h.m)(),
                    x = _ref86.alignment,
                    g = (0, u.m)("listitem");
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(
                            "div",
                            _objectSpread(
                                _objectSpread(
                                    {},
                                    (0, o.G)("list-view-item-title-container")
                                ),
                                {},
                                {
                                    style: t,
                                    className: (0, c.$)(
                                        "Title-module__container--XD9YG",
                                        "compact" === y && b,
                                        "center" === x &&
                                            "Title-module__centerAligned--J8aYA",
                                        i
                                    ),
                                    ref: r,
                                    "data-listview-item-title-container": !0,
                                    children: [
                                        (0, a.jsxs)(
                                            g,
                                            _objectSpread(
                                                _objectSpread(
                                                    {
                                                        className: (0, c.$)(
                                                            "Title-module__heading--s7YnL",
                                                            "compact" === y &&
                                                                b,
                                                            n
                                                        ),
                                                        style: l,
                                                        ref: function ref(e) {
                                                            if (
                                                                (v &&
                                                                    (v.current =
                                                                        e),
                                                                s &&
                                                                    "current" in
                                                                        s)
                                                            )
                                                                try {
                                                                    s.current =
                                                                        e;
                                                                } catch (_unused28) {}
                                                        },
                                                    },
                                                    (0, o.G)(
                                                        "list-view-item-title"
                                                    )
                                                ),
                                                {},
                                                {
                                                    children: [d, p],
                                                }
                                            )
                                        ),
                                        f &&
                                            (0, a.jsx)("span", {
                                                className:
                                                    "Title-module__trailingBadgesSpacer--Son9W",
                                            }),
                                        (0, a.jsx)("span", {
                                            className:
                                                "Title-module__trailingBadgesContainer--mijcn",
                                            children: f,
                                        }),
                                        e,
                                    ],
                                }
                            )
                        ),
                        (0, a.jsx)(C, {}),
                    ],
                });
            }
            function w(_ref87) {
                var e = _ref87.children,
                    t = _ref87.value,
                    i = _ref87.containerStyle,
                    r = _ref87.containerClassName,
                    l = _ref87.headerContainerRef,
                    n = _ref87.headingStyle,
                    s = _ref87.headingClassName,
                    o = _ref87.headingRef,
                    c = _ref87.leadingBadge,
                    u = _ref87.trailingBadges,
                    m = _ref87.anchorRef,
                    h = _objectWithoutProperties(_ref87, _excluded7);
                var f = (0, d.useRef)(null),
                    p = m || f;
                return (
                    A(
                        _objectSpread(
                            {
                                anchorRef: p,
                            },
                            h
                        )
                    ),
                    (0, a.jsx)(I, {
                        header:
                            h.href || h.onClick
                                ? (0, a.jsx)(
                                      j,
                                      _objectSpread(
                                          _objectSpread(
                                              {
                                                  anchorRef: p,
                                              },
                                              h
                                          ),
                                          {},
                                          {
                                              children: (0, a.jsx)("span", {
                                                  children: t,
                                              }),
                                          }
                                      )
                                  )
                                : (0, a.jsx)("span", {
                                      children: t,
                                  }),
                        containerStyle: i,
                        containerClassName: r,
                        headerContainerRef: l,
                        headingStyle: n,
                        headingClassName: s,
                        headingRef: o,
                        leadingBadge: c,
                        trailingBadges: u,
                        children: e,
                    })
                );
            }
            function S(_ref88) {
                var e = _ref88.children,
                    t = _ref88.html,
                    i = _ref88.containerStyle,
                    r = _ref88.containerClassName,
                    l = _ref88.headerContainerRef,
                    s = _ref88.headingStyle,
                    o = _ref88.headingClassName,
                    c = _ref88.headingRef,
                    d = _ref88.leadingBadge,
                    u = _ref88.trailingBadges,
                    m = _objectWithoutProperties(_ref88, _excluded8);
                return (
                    A(m),
                    (0, a.jsx)(I, {
                        header: (0, a.jsx)(
                            n.BC,
                            _objectSpread(
                                {
                                    html: t,
                                },
                                m
                            )
                        ),
                        containerStyle: i,
                        containerClassName: r,
                        headerContainerRef: l,
                        headingStyle: s,
                        headingClassName: o,
                        headingRef: c,
                        leadingBadge: d,
                        trailingBadges: u,
                        children: e,
                    })
                );
            }
            function j(_ref89) {
                var e = _ref89.anchorStyle,
                    t = _ref89.anchorClassName,
                    i = _ref89.anchorRef,
                    r = _ref89.linkProps,
                    l = _ref89.children,
                    n = _objectWithoutProperties(_ref89, _excluded9);
                var _ref90 = r !== null && r !== void 0 ? r : {},
                    _ref90$as = _ref90.as,
                    s = _ref90$as === void 0 ? "a" : _ref90$as,
                    u = _objectWithoutProperties(_ref90, _excluded0),
                    m = (0, d.useRef)(null);
                return (0, a.jsx)(
                    s,
                    _objectSpread(
                        _objectSpread(
                            _objectSpread(
                                _objectSpread(
                                    {},
                                    (0, o.G)("listitem-title-link")
                                ),
                                {},
                                {
                                    style: e,
                                    ref: i || m,
                                    className: (0, c.$)(
                                        "Title-module__anchor--GmXUE",
                                        "Title-module__inline--oM0P7",
                                        t
                                    ),
                                },
                                n
                            ),
                            u
                        ),
                        {},
                        {
                            children: l,
                        }
                    )
                );
            }
            var A = function A(_ref91) {
                var e = _ref91.href,
                    t = _ref91.onClick,
                    i = _ref91.anchorRef;
                var _ref92 = (0, N.J)(),
                    r = _ref92.setTitleAction,
                    l = _ref92.headingRef;
                return (
                    (0, d.useEffect)(
                        function () {
                            (e || t) &&
                                r(function () {
                                    return function (t) {
                                        if (e && (t.metaKey || t.ctrlKey))
                                            window.open(e, "_blank");
                                        else if (
                                            i !== null &&
                                            i !== void 0 &&
                                            i.current
                                        )
                                            i.current.click();
                                        else if (
                                            l !== null &&
                                            l !== void 0 &&
                                            l.current
                                        ) {
                                            var _e =
                                                l.current.querySelector(
                                                    "a, button"
                                                );
                                            _e && _e.click();
                                        }
                                    };
                                });
                        },
                        [i, l, e, t, r]
                    ),
                    null
                );
            };
            try {
                I.displayName || (I.displayName = "InternalTitle");
            } catch (_unused29) {}
            try {
                (r = TitleTag).displayName || (r.displayName = "TitleTag");
            } catch (_unused30) {}
            try {
                w.displayName || (w.displayName = "ListItemTitle");
            } catch (_unused31) {}
            try {
                S.displayName || (S.displayName = "ListItemSafeHTMLTitle");
            } catch (_unused32) {}
            try {
                (l = function l(_ref93) {
                    var e = _ref93.children,
                        t = _ref93.html,
                        i = _ref93.containerStyle,
                        r = _ref93.containerClassName,
                        l = _ref93.headerContainerRef,
                        n = _ref93.headingStyle,
                        o = _ref93.headingClassName,
                        c = _ref93.headingRef,
                        d = _ref93.leadingBadge,
                        u = _ref93.trailingBadges,
                        m = _objectWithoutProperties(_ref93, _excluded1);
                    return (
                        A(m),
                        (0, a.jsx)(I, {
                            header: (0, a.jsx)(
                                s.JR,
                                _objectSpread(
                                    {
                                        html: t,
                                    },
                                    m
                                )
                            ),
                            containerStyle: i,
                            containerClassName: r,
                            headerContainerRef: l,
                            headingStyle: n,
                            headingClassName: o,
                            headingRef: c,
                            leadingBadge: d,
                            trailingBadges: u,
                            children: e,
                        })
                    );
                }).displayName || (l.displayName = "ListItemUnsafeHTMLTitle");
            } catch (_unused33) {}
            try {
                j.displayName || (j.displayName = "HeadingLink");
            } catch (_unused34) {}
        },
        97174: function _(e, t, i) {
            i.d(t, {
                u: function u() {
                    return j;
                },
            });
            var r = i(74848),
                l = i(73189),
                a = i(29731),
                n = i(88431),
                s = i(80293),
                o = i(81960),
                c = i(34164),
                d = i(96540),
                u = i(50205),
                m = i(44569),
                h = i(69676),
                f = i(11937),
                p = i(45800);
            function y(e, t) {
                var i = e,
                    r = e.closest("[role=list] li");
                r && (i = r);
                var l = i.closest("[role=list]");
                if (!l) return;
                var a = document.createTreeWalker(
                        l,
                        NodeFilter.SHOW_ELEMENT,
                        function (e) {
                            if (
                                !(e instanceof HTMLElement) ||
                                !e.id.includes("list-view-node")
                            )
                                return NodeFilter.FILTER_SKIP;
                            var t = e.parentElement;
                            for (; t && t !== l; ) {
                                if (t.id.includes("list-view-node"))
                                    return NodeFilter.FILTER_SKIP;
                                t = t.parentElement;
                            }
                            return NodeFilter.FILTER_ACCEPT;
                        }
                    ),
                    n = a.firstChild(),
                    s = 0;
                for (; n !== i && ((n = a.nextNode()), !(++s > 500)); );
                var o = "next" === t ? a.nextNode() : a.previousNode();
                for (
                    ;
                    o instanceof HTMLElement &&
                    (_o$parentElement = o.parentElement) !== null &&
                    _o$parentElement !== void 0 &&
                    _o$parentElement.closest(
                        "[role=list] li[aria-expanded=false]"
                    );

                ) {
                    var _o$parentElement;
                    o = "next" === t ? a.nextNode() : a.previousNode();
                }
                return o instanceof HTMLElement ? o : void 0;
            }
            function v(e) {
                var t = e.closest("[role=list]"),
                    i =
                        t === null || t === void 0
                            ? void 0
                            : t.querySelector("[role=list] li");
                return i instanceof HTMLElement ? i : void 0;
            }
            function x(e) {
                var t = e.closest("[role=list]"),
                    i =
                        t === null || t === void 0
                            ? void 0
                            : t.querySelectorAll("[role=list] li");
                if (!i || i.length < 1) return;
                var r = i[i.length - 1];
                if (r instanceof HTMLElement) return r;
            }
            function g(e, t) {
                var i = _toConsumableArray(
                        (0, f.K1)(document.documentElement, {
                            strict: !0,
                            onlyTabbable: !0,
                        })
                    ),
                    r = i.indexOf(e);
                return "next" === t ? i[r + 1] : i[r - 1];
            }
            var N = i(75986),
                C = i(18377),
                b = i(53687),
                I = i(24347),
                w = i(61015),
                S = i(35220);
            var j = function j(_ref94) {
                    var e = _ref94.children,
                        t = _ref94.hasDragHandle,
                        i = _ref94.isSelectable,
                        _ref94$onVariantChang = _ref94.onVariantChange,
                        a =
                            _ref94$onVariantChang === void 0
                                ? l.l
                                : _ref94$onVariantChang,
                        n = _ref94.pluralUnits,
                        _ref94$selectedCount = _ref94.selectedCount,
                        o =
                            _ref94$selectedCount === void 0
                                ? 0
                                : _ref94$selectedCount,
                        c = _ref94.singularUnits,
                        m = _ref94.title,
                        h = _ref94.titleHeaderTag,
                        f = _ref94.totalCount,
                        _ref94$variant = _ref94.variant,
                        p = _ref94$variant === void 0 ? u.tp : _ref94$variant,
                        y = _objectWithoutProperties(_ref94, _excluded10);
                    var _ref95 = (0, s.N)(p),
                        _ref96 = _slicedToArray(_ref95, 2),
                        v = _ref96[0],
                        x = _ref96[1];
                    (0, d.useEffect)(
                        function () {
                            a === null || a === void 0 || a(v);
                        },
                        [a, v]
                    );
                    var g = (0, d.useMemo)(
                        function () {
                            return d.Children.toArray(e).length;
                        },
                        [e]
                    );
                    return (0, r.jsx)(N.JE, {
                        children: (0, r.jsx)(w.y, {
                            title: m,
                            titleHeaderTag: h,
                            children: (0, r.jsx)(S.H, {
                                variant: v,
                                setVariant: x,
                                children: (0, r.jsx)(I.W, {
                                    countOnPage: g,
                                    selectedCount: o,
                                    totalCount: f,
                                    singularUnits: c,
                                    pluralUnits: n,
                                    isSelectable: i,
                                    hasDragHandle: t,
                                    children: (0, r.jsx)(b.e, {
                                        children: (0, r.jsx)(C.w, {
                                            children: (0, r.jsx)(
                                                A,
                                                _objectSpread(
                                                    _objectSpread({}, y),
                                                    {},
                                                    {
                                                        children: e,
                                                    }
                                                )
                                            ),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    });
                },
                A = function A(_ref97) {
                    var e = _ref97.ariaLabelledBy,
                        t = _ref97.as,
                        i = _ref97.children,
                        l = _ref97.className,
                        s = _ref97.itemsListClassName,
                        u = _ref97.itemsListStyle,
                        C = _ref97.listRef,
                        b = _ref97.metadata,
                        I = _ref97.role,
                        j = _ref97.strictFocusZone,
                        A = _objectWithoutProperties(_ref97, _excluded11);
                    var _ref98 = (0, N.If)(),
                        _ = _ref98.idPrefix,
                        _ref99 = (0, w.t)(),
                        E = _ref99.title,
                        L = _ref99.titleHeaderTag,
                        _ref100 = (0, S.e)(),
                        P = _ref100.variant,
                        _ref101 = (function () {
                            var e =
                                arguments.length > 0 &&
                                arguments[0] !== undefined
                                    ? arguments[0]
                                    : !0;
                            var t = void 0 === e || e,
                                i =
                                    h.z0.ArrowVertical |
                                    h.z0.HomeAndEnd |
                                    h.z0.PageUpDown |
                                    h.z0.Tab,
                                r = (0, m.zw)() ? i | h.z0.JK : i,
                                _ref104 = (0, p.G)({
                                    strict: t,
                                    bindKeys: r,
                                    focusInStrategy:
                                        function focusInStrategy() {
                                            if (!l.current) return;
                                            var e =
                                                l.current.querySelector(
                                                    '[tabindex="0"]'
                                                );
                                            return (
                                                (e === null || e === void 0
                                                    ? void 0
                                                    : e.closest(
                                                          "[role=list] li"
                                                      )) || e
                                            );
                                        },
                                    focusableElementFilter:
                                        function focusableElementFilter(e) {
                                            return (
                                                "list" !==
                                                e.getAttribute("role")
                                            );
                                        },
                                    getNextFocusable: function getNextFocusable(
                                        e,
                                        i,
                                        r
                                    ) {
                                        if (i instanceof HTMLElement) {
                                            if (
                                                "Tab" === r.key ||
                                                "Tab" === r.code
                                            ) {
                                                if (
                                                    r.shiftKey &&
                                                    i.id.includes(
                                                        "list-view-node"
                                                    )
                                                )
                                                    return g(i, "previous");
                                                var _e2 =
                                                    i.closest("[role=list] li");
                                                if (!_e2) return;
                                                var _l = _toConsumableArray(
                                                        (0, f.K1)(_e2, {
                                                            strict: t,
                                                        })
                                                    ),
                                                    _a = _l.findIndex(
                                                        function (e) {
                                                            var _e$parentElement;
                                                            return (
                                                                ((_e$parentElement =
                                                                    e.parentElement) ===
                                                                    null ||
                                                                _e$parentElement ===
                                                                    void 0
                                                                    ? void 0
                                                                    : _e$parentElement.getAttribute(
                                                                          "data-listview-component"
                                                                      )) ===
                                                                "trailing-badge"
                                                            );
                                                        }
                                                    ),
                                                    _n = _l.findIndex(
                                                        function (e) {
                                                            return (
                                                                "selection-input" ===
                                                                e.getAttribute(
                                                                    "data-listview-component"
                                                                )
                                                            );
                                                        }
                                                    );
                                                _a >= 0 &&
                                                    _n >= 0 &&
                                                    (_l.splice(_a, 0, _l[_n]),
                                                    _l.splice(_n + 1, 1));
                                                var _s4 = _l.indexOf(r.target);
                                                return _s4 !== _l.length - 1 ||
                                                    r.shiftKey
                                                    ? _s4 > 0
                                                        ? r.shiftKey
                                                            ? _l[_s4 - 1]
                                                            : _l[_s4 + 1]
                                                        : void 0
                                                    : g(i, "next");
                                            }
                                            if ("previous" === e)
                                                return y(i, e) || v(i);
                                            if ("next" === e)
                                                return y(i, e) || x(i);
                                            if ("start" === e) return v(i);
                                            if ("end" === e) return x(i);
                                        }
                                    },
                                }),
                                l = _ref104.containerRef;
                            return {
                                containerRef: l,
                            };
                        })(j),
                        M = _ref101.containerRef,
                        _ref102 = (0, d.useState)(!0),
                        _ref103 = _slicedToArray(_ref102, 2),
                        R = _ref103[0],
                        T = _ref103[1];
                    ((0, d.useEffect)(
                        function () {
                            C && (C.current = M.current);
                        },
                        [M, C]
                    ),
                        (0, n.N)(
                            function () {
                                M.current &&
                                    T(
                                        Array.from(
                                            M.current.querySelectorAll("li")
                                        ).some(function (e) {
                                            var t = e.parentElement;
                                            for (; t && t !== M.current; ) {
                                                if (
                                                    "UL" === t.tagName ||
                                                    "OL" === t.tagName
                                                )
                                                    return !1;
                                                t = t.parentElement;
                                            }
                                            return !0;
                                        })
                                    );
                            },
                            [M, i]
                        ));
                    var B =
                        e !== null && e !== void 0
                            ? e
                            : "".concat(_, "-list-view-container-title");
                    return (0, r.jsxs)("div", {
                        id: "".concat(_, "-list-view-container"),
                        className: (0, c.$)(
                            "ListView-module__container--rxCWy",
                            l
                        ),
                        children: [
                            !e &&
                                (0, r.jsx)(
                                    o.A,
                                    _objectSpread(
                                        _objectSpread(
                                            {
                                                className: "sr-only",
                                                as: L,
                                                id: B,
                                            },
                                            (0, a.G)("list-view-title")
                                        ),
                                        {},
                                        {
                                            children: E,
                                        }
                                    )
                                ),
                            b,
                            (0, r.jsx)(
                                t || (R ? "ul" : "div"),
                                _objectSpread(
                                    _objectSpread(
                                        _objectSpread(
                                            {
                                                className: (0, c.$)(
                                                    "ListView-module__ul--A_8jF",
                                                    s
                                                ),
                                                style: u,
                                                ref: M,
                                                "aria-labelledby": R
                                                    ? B
                                                    : void 0,
                                                tabIndex: -1,
                                                role: (
                                                    I !== null && I !== void 0
                                                        ? I
                                                        : R
                                                )
                                                    ? "list"
                                                    : void 0,
                                                "data-listview-component":
                                                    "items-list",
                                                "data-density": P,
                                            },
                                            (0, a.G)("list-view-items")
                                        ),
                                        A
                                    ),
                                    {},
                                    {
                                        children: i,
                                    }
                                )
                            ),
                        ],
                    });
                };
            try {
                j.displayName || (j.displayName = "ListView");
            } catch (_unused35) {}
            try {
                A.displayName || (A.displayName = "ListViewContainer");
            } catch (_unused36) {}
        },
    },
]);
