"use strict";

var _templateObject,
    _templateObject2,
    _templateObject3,
    _templateObject4,
    _templateObject5,
    _templateObject6,
    _templateObject7,
    _templateObject8,
    _templateObject9,
    _templateObject0,
    _templateObject1,
    _templateObject10,
    _templateObject11,
    _templateObject12,
    _templateObject13,
    _templateObject14,
    _templateObject15,
    _templateObject16,
    _templateObject17,
    _templateObject18,
    _templateObject19,
    _templateObject20,
    _templateObject21,
    _templateObject22,
    _templateObject23,
    _templateObject24,
    _templateObject25,
    _templateObject26,
    _templateObject27,
    _templateObject28,
    _templateObject29;
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
function _taggedTemplateLiteral(e, t) {
    return (
        t || (t = e.slice(0)),
        Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        )
    );
}
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
            var _n5 = 0,
                F = function F() {};
            return {
                s: F,
                n: function n() {
                    return _n5 >= r.length
                        ? { done: !0 }
                        : { done: !1, value: r[_n5++] };
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
function _classPrivateMethodInitSpec(e, a) {
    (_checkPrivateRedeclaration(e, a), a.add(e));
}
function _classPrivateFieldInitSpec(e, t, a) {
    (_checkPrivateRedeclaration(e, t), t.set(e, a));
}
function _checkPrivateRedeclaration(e, t) {
    if (t.has(e))
        throw new TypeError(
            "Cannot initialize the same private elements twice on an object"
        );
}
function _classPrivateFieldSet(s, a, r) {
    return (s.set(_assertClassBrand(s, a), r), r);
}
function _classPrivateFieldGet(s, a) {
    return s.get(_assertClassBrand(s, a));
}
function _assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t))
        return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
}
function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        ((o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, _toPropertyKey(o.key), o));
    }
}
function _createClass(e, r, t) {
    return (
        r && _defineProperties(e.prototype, r),
        t && _defineProperties(e, t),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
    );
}
function _classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError("Cannot call a class as a function");
}
function _callSuper(t, o, e) {
    return (
        (o = _getPrototypeOf(o)),
        _possibleConstructorReturn(
            t,
            _isNativeReflectConstruct()
                ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
                : o.apply(t, e)
        )
    );
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e)
        throw new TypeError(
            "Derived constructors may only return object or undefined"
        );
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    ((t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e && _setPrototypeOf(t, e));
}
function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return (
        (_wrapNativeSuper = function _wrapNativeSuper(t) {
            if (null === t || !_isNativeFunction(t)) return t;
            if ("function" != typeof t)
                throw new TypeError(
                    "Super expression must either be null or a function"
                );
            if (void 0 !== r) {
                if (r.has(t)) return r.get(t);
                r.set(t, Wrapper);
            }
            function Wrapper() {
                return _construct(
                    t,
                    arguments,
                    _getPrototypeOf(this).constructor
                );
            }
            return (
                (Wrapper.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: Wrapper,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                    },
                })),
                _setPrototypeOf(Wrapper, t)
            );
        }),
        _wrapNativeSuper(t)
    );
}
function _construct(t, e, r) {
    if (_isNativeReflectConstruct())
        return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return (r && _setPrototypeOf(p, r.prototype), p);
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _isNativeFunction(t) {
    try {
        return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
        return "function" == typeof t;
    }
}
function _setPrototypeOf(t, e) {
    return (
        (_setPrototypeOf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                  return ((t.__proto__ = e), t);
              }),
        _setPrototypeOf(t, e)
    );
}
function _getPrototypeOf(t) {
    return (
        (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
              }),
        _getPrototypeOf(t)
    );
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
performance.mark("js-parse-end:2694-2ddb488b02ba1b01.js");
("use strict");
(globalThis.rspackChunk_github_ui_github_ui =
    globalThis.rspackChunk_github_ui_github_ui || []).push([
    [2694],
    {
        275841: function _(t, e, i) {
            var s = i(389997);
            i.d(e, {
                XX: function XX() {
                    return s.XX;
                },
                _3: function _3() {
                    return s._3;
                },
                qy: function qy() {
                    return s.qy;
                },
            });
        },
        231733: function _(t, e, i) {
            var s = /*#__PURE__*/ (function (_Event) {
                function s(_ref) {
                    var _this;
                    var t = _ref.filter,
                        e = _ref.value,
                        _ref$name = _ref.name,
                        i = _ref$name === void 0 ? "" : _ref$name,
                        _ref$description = _ref.description,
                        _s2 =
                            _ref$description === void 0 ? "" : _ref$description,
                        _ref$inlineDescriptio = _ref.inlineDescription,
                        r =
                            _ref$inlineDescriptio === void 0
                                ? !1
                                : _ref$inlineDescriptio,
                        _ref$priority = _ref.priority,
                        a = _ref$priority === void 0 ? 1 / 0 : _ref$priority,
                        n = _ref.icon,
                        l = _ref.avatar,
                        o = _ref.action;
                    _classCallCheck(this, s);
                    ((_this = _callSuper(this, s, ["filter-item"])),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "name",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "filter",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "value",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "description",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "inlineDescription",
                            !1
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "action",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "priority",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "icon",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "avatar",
                            void 0
                        ),
                        (_this.filter = t),
                        (_this.value = e),
                        (_this.name = i),
                        (_this.description = _s2),
                        (_this.inlineDescription = r),
                        (_this.priority = a),
                        (_this.icon = n),
                        (_this.avatar = l),
                        (_this.action = o));
                    return _this;
                }
                _inherits(s, _Event);
                return _createClass(s);
            })(/*#__PURE__*/ _wrapNativeSuper(Event));
            function r(t) {
                return t instanceof Object;
            }
            var a = /*#__PURE__*/ (function (_Event2) {
                function a(_ref2) {
                    var _this2;
                    var t = _ref2.id,
                        e = _ref2.priority,
                        i = _ref2.value,
                        s = _ref2.action,
                        _ref2$description = _ref2.description,
                        r =
                            _ref2$description === void 0
                                ? ""
                                : _ref2$description,
                        _a2 = _ref2.icon,
                        _ref2$scope = _ref2.scope,
                        n = _ref2$scope === void 0 ? "DEFAULT" : _ref2$scope,
                        l = _ref2.prefixText,
                        o = _ref2.prefixColor,
                        u = _ref2.isFallbackSuggestion,
                        h = _ref2.isUpdate;
                    _classCallCheck(this, a);
                    ((_this2 = _callSuper(this, a, [
                        h ? "update-item" : "search-item",
                    ])),
                        _defineProperty(
                            _assertThisInitialized(_this2),
                            "id",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this2),
                            "priority",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this2),
                            "value",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this2),
                            "action",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this2),
                            "description",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this2),
                            "icon",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this2),
                            "scope",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this2),
                            "prefixText",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this2),
                            "prefixColor",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this2),
                            "isFallbackSuggestion",
                            void 0
                        ),
                        (_this2.id = t),
                        (_this2.priority = e),
                        (_this2.value = i),
                        (_this2.prefixText = l),
                        (_this2.prefixColor = o),
                        (_this2.action = s),
                        (_this2.description = r),
                        (_this2.icon = _a2),
                        (_this2.scope = n),
                        (_this2.isFallbackSuggestion = u || !1));
                    return _this2;
                }
                _inherits(a, _Event2);
                return _createClass(a);
            })(/*#__PURE__*/ _wrapNativeSuper(Event));
            var n = /*#__PURE__*/ (function (_Event3) {
                function n(t) {
                    var _this3;
                    _classCallCheck(this, n);
                    ((_this3 = _callSuper(this, n, ["fetch-data"])),
                        _defineProperty(
                            _assertThisInitialized(_this3),
                            "fetchPromise",
                            void 0
                        ),
                        (_this3.fetchPromise = t));
                    return _this3;
                }
                _inherits(n, _Event3);
                return _createClass(n);
            })(/*#__PURE__*/ _wrapNativeSuper(Event));
            var l = /*#__PURE__*/ (function (_Event4) {
                function l(t, e, i) {
                    var _this4;
                    _classCallCheck(this, l);
                    ((_this4 = _callSuper(this, l, ["query"])),
                        _defineProperty(
                            _assertThisInitialized(_this4),
                            "parsedQuery",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this4),
                            "rawQuery",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this4),
                            "parsedMetadata",
                            void 0
                        ),
                        (_this4.parsedQuery = t),
                        (_this4.rawQuery = e),
                        (_this4.parsedMetadata = i));
                    return _this4;
                }
                _inherits(l, _Event4);
                return _createClass(l, [
                    {
                        key: "toString",
                        value: function toString() {
                            return this.rawQuery;
                        },
                    },
                ]);
            })(/*#__PURE__*/ _wrapNativeSuper(Event));
            (Event,
                i.d(
                    e,
                    {
                        CN: function CN() {
                            return a;
                        },
                        P$: function P$() {
                            return l;
                        },
                        dS: function dS() {
                            return n;
                        },
                        nM: function nM() {
                            return r;
                        },
                        qi: function qi() {
                            return s;
                        },
                    },
                    {
                        VJ: {
                            Normal: "normal",
                            Entity: "entity",
                            Constant: "constant",
                            FilterValue: "filter-value",
                        },
                        k8: "Autocomplete",
                        m4: {
                            Apps: "apps",
                            Archived: "archived",
                            Book: "book",
                            Bookmark: "bookmark",
                            Branch: "branch",
                            Calendar: "calendar",
                            Circle: "circle",
                            Code: "code",
                            CodeReview: "code-review",
                            CodeSquare: "code-square",
                            Comment: "comment",
                            CommentDiscussion: "comment-discussion",
                            Copilot: "copilot",
                            CopilotError: "copilot-error",
                            Codespaces: "codespaces",
                            CreditCard: "credit-card",
                            Default: "default",
                            DeviceDesktop: "device-desktop",
                            DeviceMobile: "device-mobile",
                            Discussion: "discussion",
                            Draft: "draft",
                            FileCode: "file-code",
                            Filter: "filter",
                            Forbidden: "forbidden",
                            Gift: "gift",
                            Globe: "globe",
                            Heart: "heart",
                            History: "history",
                            Issue: "issue",
                            IssueOpened: "issue-opened",
                            IssueClosed: "issueClosed",
                            Iterations: "iterations",
                            Mention: "mention",
                            Merged: "merged",
                            Milestone: "milestone",
                            No: "no",
                            Not: "not",
                            Organization: "organization",
                            Package: "package",
                            Pencil: "pencil",
                            Person: "person",
                            Play: "play",
                            PlusCircle: "plus-circle",
                            Project: "project",
                            PullRequest: "pullRequest",
                            Question: "question",
                            Reaction: "reaction",
                            Repo: "repo",
                            Rocket: "rocket",
                            Search: "search",
                            Server: "server",
                            ShieldCheck: "shield-check",
                            SingleSelect: "single-select",
                            Sort: "sort",
                            Tag: "tag",
                            Team: "team",
                            Telescope: "telescope",
                            Trash: "trash",
                            Workflow: "workflow",
                        },
                        o7: {
                            DIRECTORY: "Search in this directory",
                            ORG: "Search in this organization",
                            OWNER: "Search in this owner",
                            REPO: "Search in this repository",
                            ENTERPRISE: "Search in this enterprise",
                            GITHUB: "Search all of GitHub",
                            GENERAL: "Submit search",
                            COMMAND: "Run command",
                            COPILOT_CHAT: "Start a new Copilot thread",
                            COPILOT_SEARCH: "Search with Copilot",
                            EXPLORE: "Learn More",
                            DEFAULT: "Jump to",
                        },
                        yk: {
                            Entity: "--color-prettylights-syntax-entity",
                            Constant: "--color-prettylights-syntax-constant",
                            Keyword: "--color-prettylights-syntax-keyword",
                            Variable: "--color-prettylights-syntax-variable",
                            String: "--color-prettylights-syntax-string",
                        },
                    }
                ));
        },
        903845: function _(t, e, i) {
            var s = i(331635),
                r = i(651135),
                a = i(935908),
                n = i(258038),
                l = i(275841),
                o = i(231733);
            var u = /*#__PURE__*/ (function (_Event5) {
                function u(t, e, i) {
                    var _this5;
                    _classCallCheck(this, u);
                    ((_this5 = _callSuper(this, u, [
                        "query-builder-feedback",
                        {
                            bubbles: !0,
                            cancelable: !0,
                        },
                    ])),
                        _defineProperty(
                            _assertThisInitialized(_this5),
                            "key",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this5),
                            "text",
                            void 0
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this5),
                            "data",
                            void 0
                        ),
                        (_this5.key = t),
                        (_this5.text = e),
                        (_this5.data = i));
                    return _this5;
                }
                _inherits(u, _Event5);
                return _createClass(u);
            })(/*#__PURE__*/ _wrapNativeSuper(Event));
            var h = function h(t, e) {
                return t.priority - e.priority;
            };
            var _t = /*#__PURE__*/ new WeakMap();
            var _e = /*#__PURE__*/ new WeakMap();
            var _i = /*#__PURE__*/ new WeakMap();
            var _s3 = /*#__PURE__*/ new WeakMap();
            var _r = /*#__PURE__*/ new WeakMap();
            var _a3 = /*#__PURE__*/ new WeakMap();
            var _n2 = /*#__PURE__*/ new WeakMap();
            var _l2 = /*#__PURE__*/ new WeakMap();
            var _o = /*#__PURE__*/ new WeakMap();
            var _u2 = /*#__PURE__*/ new WeakMap();
            var _h = /*#__PURE__*/ new WeakMap();
            var _d = /*#__PURE__*/ new WeakMap();
            var _c = /*#__PURE__*/ new WeakMap();
            var _p = /*#__PURE__*/ new WeakMap();
            var _m = /*#__PURE__*/ new WeakMap();
            var _y = /*#__PURE__*/ new WeakMap();
            var _f = /*#__PURE__*/ new WeakMap();
            var _v = /*#__PURE__*/ new WeakMap();
            var _g = /*#__PURE__*/ new WeakMap();
            var _I = /*#__PURE__*/ new WeakMap();
            var _b = /*#__PURE__*/ new WeakMap();
            var _C = /*#__PURE__*/ new WeakMap();
            var _L = /*#__PURE__*/ new WeakMap();
            var _d_brand = /*#__PURE__*/ new WeakSet();
            var _w = /*#__PURE__*/ new WeakMap();
            var _S = /*#__PURE__*/ new WeakMap();
            var d = /*#__PURE__*/ (function (_HTMLElement) {
                function d() {
                    var _this6;
                    _classCallCheck(this, d);
                    for (
                        var _len = arguments.length,
                            args = new Array(_len),
                            _key = 0;
                        _key < _len;
                        _key++
                    ) {
                        args[_key] = arguments[_key];
                    }
                    _this6 = _callSuper(this, d, [].concat(args));
                    _classPrivateMethodInitSpec(_this6, _d_brand);
                    _classPrivateFieldInitSpec(_this6, _t, void 0);
                    _classPrivateFieldInitSpec(_this6, _e, !1);
                    _classPrivateFieldInitSpec(_this6, _i, !1);
                    _classPrivateFieldInitSpec(_this6, _s3, {});
                    _classPrivateFieldInitSpec(_this6, _r, new Set());
                    _classPrivateFieldInitSpec(_this6, _a3, null);
                    _classPrivateFieldInitSpec(_this6, _n2, null);
                    _classPrivateFieldInitSpec(_this6, _l2, new Map());
                    _classPrivateFieldInitSpec(_this6, _o, new Map());
                    _classPrivateFieldInitSpec(_this6, _u2, new Set());
                    _classPrivateFieldInitSpec(_this6, _h, new Set());
                    _classPrivateFieldInitSpec(_this6, _d, new Map());
                    _classPrivateFieldInitSpec(_this6, _c, void 0);
                    _classPrivateFieldInitSpec(
                        _this6,
                        _p,
                        "QueryBuilder-focus"
                    );
                    _classPrivateFieldInitSpec(_this6, _m, new Map());
                    _classPrivateFieldInitSpec(_this6, _y, new Map());
                    _classPrivateFieldInitSpec(_this6, _f, 0);
                    _classPrivateFieldInitSpec(_this6, _v, 150);
                    _classPrivateFieldInitSpec(_this6, _g, 3e3);
                    _classPrivateFieldInitSpec(_this6, _I, !1);
                    _classPrivateFieldInitSpec(_this6, _b, !1);
                    _classPrivateFieldInitSpec(_this6, _C, !1);
                    _defineProperty(_this6, "parser", {
                        parse: _assertClassBrand(_d_brand, _this6, _$).bind(
                            _this6
                        ),
                        flatten: function flatten(t) {
                            return t;
                        },
                    });
                    _defineProperty(_this6, "parsedMetadata", void 0);
                    _defineProperty(_this6, "renderSingularItemNames", !1);
                    _classPrivateFieldInitSpec(_this6, _L, !1);
                    _defineProperty(_this6, "lastParsedQuery", void 0);
                    _defineProperty(_this6, "FOCUS_TIMEOUT_VALUE", 100);
                    _defineProperty(_this6, "minWidth", 300);
                    _defineProperty(
                        _this6,
                        "elementDefinitionReadyForProviders",
                        function (t) {
                            t.detail.id === _classPrivateFieldGet(_c, _this6) &&
                                (_this6.readyForRequestProviders(),
                                t.stopImmediatePropagation());
                        }
                    );
                    _classPrivateFieldInitSpec(_this6, _w, function (t, e) {
                        t.has(e) || t.set(e, []);
                    });
                    _classPrivateFieldInitSpec(_this6, _S, !1);
                    return _this6;
                }
                _inherits(d, _HTMLElement);
                return _createClass(d, [
                    {
                        key: "input",
                        get: function get() {
                            return (0, r.FB)(this, "input");
                        },
                    },
                    {
                        key: "styledInputContent",
                        get: function get() {
                            return (0, r.FB)(this, "styledInputContent");
                        },
                    },
                    {
                        key: "styledInputContainer",
                        get: function get() {
                            return (0, r.FB)(this, "styledInputContainer");
                        },
                    },
                    {
                        key: "styledInput",
                        get: function get() {
                            return (0, r.FB)(this, "styledInput");
                        },
                    },
                    {
                        key: "overlay",
                        get: function get() {
                            return (0, r.FB)(this, "overlay");
                        },
                    },
                    {
                        key: "sizer",
                        get: function get() {
                            return (0, r.FB)(this, "sizer");
                        },
                    },
                    {
                        key: "clearButton",
                        get: function get() {
                            return (0, r.FB)(this, "clearButton");
                        },
                    },
                    {
                        key: "resultsList",
                        get: function get() {
                            return (0, r.FB)(this, "resultsList");
                        },
                    },
                    {
                        key: "screenReaderFeedback",
                        get: function get() {
                            return (0, r.FB)(this, "screenReaderFeedback");
                        },
                    },
                    {
                        key: "query",
                        get: function get() {
                            return this.input.value;
                        },
                    },
                    {
                        key: "i18n",
                        get: function get() {
                            return {
                                suggestion: "suggestion",
                                suggestions: "suggestions",
                                clear_search: "Input cleared.",
                            };
                        },
                    },
                    {
                        key: "navigate",
                        value: function navigate(t) {
                            var _t$target;
                            var e =
                                    t === null ||
                                    t === void 0 ||
                                    (_t$target = t.target) === null ||
                                    _t$target === void 0
                                        ? void 0
                                        : _t$target.closest("li"),
                                i = _assertClassBrand(_d_brand, this, _E).call(
                                    this,
                                    e
                                );
                            i &&
                                ((0, n.BI)("query-builder-element.click", {
                                    url: i,
                                }),
                                this.dispatchEvent(
                                    new CustomEvent("query-builder:navigate", {
                                        bubbles: !0,
                                        detail: {
                                            url: i,
                                        },
                                    })
                                ),
                                _assertClassBrand(_d_brand, this, _A).call(
                                    this,
                                    i,
                                    t instanceof MouseEvent ? t : void 0
                                ));
                        },
                    },
                    {
                        key: "closed",
                        get: function get() {
                            return (
                                this.overlay &&
                                this.overlay.hasAttribute("hidden")
                            );
                        },
                        set: function set(t) {
                            var _classPrivateFieldGet2;
                            if (t)
                                this.closed ||
                                    (this.overlay && (this.overlay.hidden = !0),
                                    this.input.setAttribute(
                                        "aria-expanded",
                                        "false"
                                    ),
                                    (_classPrivateFieldGet2 =
                                        _classPrivateFieldGet(_t, this)) !==
                                        null &&
                                        _classPrivateFieldGet2 !== void 0 &&
                                        _classPrivateFieldGet2.clearSelection(),
                                    (this.screenReaderFeedback.hidden = !0));
                            else {
                                if (!this.closed) return;
                                (this.overlay && (this.overlay.hidden = !1),
                                    this.input.setAttribute(
                                        "aria-expanded",
                                        "true"
                                    ),
                                    (this.screenReaderFeedback.hidden = !1));
                            }
                        },
                    },
                    {
                        key: "show",
                        value: function show() {
                            var _this$overlay, _this$overlay$scrollI;
                            ((this.closed = !1),
                                (_this$overlay = this.overlay) === null ||
                                _this$overlay === void 0 ||
                                (_this$overlay$scrollI =
                                    _this$overlay.scrollIntoView) === null ||
                                _this$overlay$scrollI === void 0
                                    ? void 0
                                    : _this$overlay$scrollI.call(
                                          _this$overlay,
                                          {
                                              behavior: "smooth",
                                              block: "nearest",
                                          }
                                      ));
                        },
                    },
                    {
                        key: "hide",
                        value: function hide() {
                            "false" ===
                                this.resultsList.getAttribute(
                                    "data-persist-list"
                                ) && (this.closed = !0);
                        },
                    },
                    {
                        key: "initialize",
                        value: function initialize(t, e) {
                            var _iterator = _createForOfIteratorHelper(
                                    ((this.parser = t),
                                    _classPrivateFieldSet(_L, this, !0),
                                    _classPrivateFieldSet(_b, this, !0),
                                    e)
                                ),
                                _step;
                            try {
                                for (
                                    _iterator.s();
                                    !(_step = _iterator.n()).done;

                                ) {
                                    var _i2 = _step.value;
                                    this.attachProvider(_i2);
                                }
                            } catch (err) {
                                _iterator.e(err);
                            } finally {
                                _iterator.f();
                            }
                            (_classPrivateFieldSet(_b, this, !1),
                                _classPrivateFieldSet(
                                    _s3,
                                    this,
                                    e.reduce(function (t, e) {
                                        return _objectSpread(
                                            _objectSpread({}, t),
                                            {},
                                            {
                                                [e.value]: e,
                                            }
                                        );
                                    }, {})
                                ));
                        },
                    },
                    {
                        key: "detachElementDefinitionReadyForProviders",
                        value: function detachElementDefinitionReadyForProviders() {
                            this.removeEventListener(
                                "query-builder:ready-to-request-provider",
                                this.elementDefinitionReadyForProviders
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value: function connectedCallback() {
                            var _classPrivateFieldGet3,
                                _this7 = this;
                            (_classPrivateFieldGet3 = _classPrivateFieldGet(
                                _a3,
                                this
                            )) === null ||
                                _classPrivateFieldGet3 === void 0 ||
                                _classPrivateFieldGet3.abort();
                            var _classPrivateFieldSet2 = _classPrivateFieldSet(
                                    _a3,
                                    this,
                                    new AbortController()
                                ),
                                t = _classPrivateFieldSet2.signal;
                            (t.addEventListener("abort", function () {
                                _classPrivateFieldSet(_s3, _this7, {});
                            }),
                                _classPrivateFieldSet(
                                    _c,
                                    this,
                                    this.input.getAttribute("id")
                                ),
                                this.hasAttribute("defer-request-providers") ||
                                    (document.addEventListener(
                                        "query-builder:ready-to-request-provider",
                                        this.elementDefinitionReadyForProviders,
                                        !0
                                    ),
                                    this.readyForRequestProviders()));
                        },
                    },
                    {
                        key: "readyForRequestProviders",
                        value: function readyForRequestProviders() {
                            (_assertClassBrand(_d_brand, this, _F).call(this) >
                                0 &&
                                _classPrivateFieldGet(_C, this)) ||
                                (_classPrivateFieldGet(_t, this) ||
                                    _classPrivateFieldSet(
                                        _t,
                                        this,
                                        new a.A(this.input, this.resultsList, {
                                            tabInsertsSuggestions: !1,
                                        })
                                    ),
                                this.requestProviders());
                        },
                    },
                    {
                        key: "requestProviders",
                        value: (function () {
                            var _requestProviders = _asyncToGenerator(
                                /*#__PURE__*/ _regenerator().m(
                                    function _callee() {
                                        var t;
                                        return _regenerator().w(
                                            function (_context) {
                                                while (1)
                                                    switch (_context.n) {
                                                        case 0:
                                                            _classPrivateFieldSet(
                                                                _C,
                                                                this,
                                                                !0
                                                            );
                                                            _context.n = 1;
                                                            return Promise.resolve();
                                                        case 1:
                                                            _classPrivateFieldSet(
                                                                _b,
                                                                this,
                                                                !0
                                                            );
                                                            this.dispatchEvent(
                                                                new Event(
                                                                    "query-builder:request-provider",
                                                                    {
                                                                        bubbles:
                                                                            !0,
                                                                    }
                                                                )
                                                            );
                                                            _classPrivateFieldSet(
                                                                _b,
                                                                this,
                                                                !1
                                                            );
                                                            _classPrivateFieldSet(
                                                                _m,
                                                                this,
                                                                new Map()
                                                            );
                                                            t =
                                                                this.parseInputValue();
                                                            (this.styleInputText(
                                                                t
                                                            ),
                                                                this.toggleClearButtonVisibility());
                                                        case 2:
                                                            return _context.a(
                                                                2
                                                            );
                                                    }
                                            },
                                            _callee,
                                            this
                                        );
                                    }
                                )
                            );
                            function requestProviders() {
                                return _requestProviders.apply(this, arguments);
                            }
                            return requestProviders;
                        })(),
                    },
                    {
                        key: "parseInputValue",
                        value: function parseInputValue() {
                            return (
                                (this.parsedMetadata = this.parser.parse(
                                    this.input.value,
                                    this.input.selectionStart || 0
                                )),
                                this.parser.flatten(this.parsedMetadata)
                            );
                        },
                    },
                    {
                        key: "attachProvider",
                        value: function attachProvider(t) {
                            var _this8 = this;
                            if (!_classPrivateFieldGet(_a3, this)) return;
                            var _classPrivateFieldGet4 = _classPrivateFieldGet(
                                    _a3,
                                    this
                                ),
                                e = _classPrivateFieldGet4.signal;
                            if (!_classPrivateFieldGet(_b, this))
                                throw Error(
                                    "Can't attach providers after the query builder has been connected"
                                );
                            _classPrivateFieldGet(_s3, this)[t.value] ||
                                ((_classPrivateFieldGet(_s3, this)[t.value] =
                                    t),
                                "filter" === t.type
                                    ? (_classPrivateFieldGet(_r, this).add(
                                          t.value
                                      ),
                                      t.addEventListener(
                                          "filter-item",
                                          function (e) {
                                              var _classPrivateFieldGet5;
                                              (_classPrivateFieldGet(
                                                  _w,
                                                  _this8
                                              ).call(
                                                  _this8,
                                                  _classPrivateFieldGet(
                                                      _d,
                                                      _this8
                                                  ),
                                                  t
                                              ),
                                                  (_classPrivateFieldGet5 =
                                                      _classPrivateFieldGet(
                                                          _d,
                                                          _this8
                                                      ).get(t)) !== null &&
                                                      _classPrivateFieldGet5 !==
                                                          void 0 &&
                                                      _classPrivateFieldGet5.push(
                                                          e
                                                      ),
                                                  _assertClassBrand(
                                                      _d_brand,
                                                      _this8,
                                                      _R
                                                  ).call(_this8));
                                          },
                                          {
                                              signal: e,
                                          }
                                      ),
                                      t.addEventListener(
                                          "show",
                                          function () {
                                              (_classPrivateFieldGet(
                                                  _h,
                                                  _this8
                                              ).add(t),
                                                  _assertClassBrand(
                                                      _d_brand,
                                                      _this8,
                                                      _R
                                                  ).call(_this8));
                                          },
                                          {
                                              signal: e,
                                          }
                                      ),
                                      t.addEventListener(
                                          "fetch-data",
                                          /*#__PURE__*/ (function () {
                                              var _ref3 = _asyncToGenerator(
                                                  /*#__PURE__*/ _regenerator().m(
                                                      function _callee2(t) {
                                                          var e, i, _t2;
                                                          return _regenerator().w(
                                                              function (
                                                                  _context2
                                                              ) {
                                                                  while (1)
                                                                      switch (
                                                                          _context2.n
                                                                      ) {
                                                                          case 0:
                                                                              e =
                                                                                  new Promise(
                                                                                      function (
                                                                                          t
                                                                                      ) {
                                                                                          return setTimeout(
                                                                                              t,
                                                                                              _classPrivateFieldGet(
                                                                                                  _g,
                                                                                                  _this8
                                                                                              )
                                                                                          );
                                                                                      }
                                                                                  );
                                                                              _classPrivateFieldSet(
                                                                                  _I,
                                                                                  _this8,
                                                                                  Promise.race(
                                                                                      [
                                                                                          Promise.all(
                                                                                              [
                                                                                                  _classPrivateFieldGet(
                                                                                                      _I,
                                                                                                      _this8
                                                                                                  ),
                                                                                                  t.fetchPromise,
                                                                                              ]
                                                                                          ),
                                                                                          e,
                                                                                      ]
                                                                                  )
                                                                              );
                                                                              i =
                                                                                  _classPrivateFieldGet(
                                                                                      _I,
                                                                                      _this8
                                                                                  );
                                                                              _context2.p = 1;
                                                                              _context2.n = 2;
                                                                              return i;
                                                                          case 2:
                                                                              _context2.n = 4;
                                                                              break;
                                                                          case 3:
                                                                              _context2.p = 3;
                                                                              _t2 =
                                                                                  _context2.v;
                                                                              if (
                                                                                  !(
                                                                                      "AbortError" !==
                                                                                      _t2.name
                                                                                  )
                                                                              ) {
                                                                                  _context2.n = 4;
                                                                                  break;
                                                                              }
                                                                              throw (
                                                                                  _classPrivateFieldSet(
                                                                                      _I,
                                                                                      _this8,
                                                                                      !1
                                                                                  ),
                                                                                  _t2
                                                                              );
                                                                          case 4:
                                                                              i ===
                                                                                  _classPrivateFieldGet(
                                                                                      _I,
                                                                                      _this8
                                                                                  ) &&
                                                                                  (_classPrivateFieldSet(
                                                                                      _I,
                                                                                      _this8,
                                                                                      !1
                                                                                  ),
                                                                                  _assertClassBrand(
                                                                                      _d_brand,
                                                                                      _this8,
                                                                                      _R
                                                                                  ).call(
                                                                                      _this8
                                                                                  ),
                                                                                  _this8.updateVisibility());
                                                                          case 5:
                                                                              return _context2.a(
                                                                                  2
                                                                              );
                                                                      }
                                                              },
                                                              _callee2,
                                                              null,
                                                              [[1, 3]]
                                                          );
                                                      }
                                                  )
                                              );
                                              return function (_x2) {
                                                  return _ref3.apply(
                                                      this,
                                                      arguments
                                                  );
                                              };
                                          })(),
                                          {
                                              signal: e,
                                          }
                                      ))
                                    : (t.addEventListener(
                                          "fetch-data",
                                          /*#__PURE__*/ (function () {
                                              var _ref4 = _asyncToGenerator(
                                                  /*#__PURE__*/ _regenerator().m(
                                                      function _callee3(e) {
                                                          return _regenerator().w(
                                                              function (
                                                                  _context3
                                                              ) {
                                                                  while (1)
                                                                      switch (
                                                                          _context3.n
                                                                      ) {
                                                                          case 0:
                                                                              _classPrivateFieldGet(
                                                                                  _u2,
                                                                                  _this8
                                                                              ).delete(
                                                                                  t
                                                                              );
                                                                              _context3.n = 1;
                                                                              return e.fetchPromise;
                                                                          case 1:
                                                                              _classPrivateFieldGet(
                                                                                  _l2,
                                                                                  _this8
                                                                              ).set(
                                                                                  t,
                                                                                  _classPrivateFieldGet(
                                                                                      _o,
                                                                                      _this8
                                                                                  ).get(
                                                                                      t
                                                                                  ) ||
                                                                                      []
                                                                              );
                                                                              _classPrivateFieldGet(
                                                                                  _o,
                                                                                  _this8
                                                                              ).delete(
                                                                                  t
                                                                              );
                                                                              _assertClassBrand(
                                                                                  _d_brand,
                                                                                  _this8,
                                                                                  _R
                                                                              ).call(
                                                                                  _this8
                                                                              );
                                                                          case 2:
                                                                              return _context3.a(
                                                                                  2
                                                                              );
                                                                      }
                                                              },
                                                              _callee3
                                                          );
                                                      }
                                                  )
                                              );
                                              return function (_x3) {
                                                  return _ref4.apply(
                                                      this,
                                                      arguments
                                                  );
                                              };
                                          })()
                                      ),
                                      t.addEventListener(
                                          "search-item",
                                          function (e) {
                                              var _classPrivateFieldGet6,
                                                  _classPrivateFieldGet7;
                                              (_classPrivateFieldGet(
                                                  _w,
                                                  _this8
                                              ).call(
                                                  _this8,
                                                  _classPrivateFieldGet(
                                                      _l2,
                                                      _this8
                                                  ),
                                                  t
                                              ),
                                                  _classPrivateFieldGet(
                                                      _o,
                                                      _this8
                                                  ).has(t)
                                                      ? (_classPrivateFieldGet6 =
                                                            _classPrivateFieldGet(
                                                                _o,
                                                                _this8
                                                            ).get(t)) ===
                                                            null ||
                                                        _classPrivateFieldGet6 ===
                                                            void 0
                                                          ? void 0
                                                          : _classPrivateFieldGet6.push(
                                                                e
                                                            )
                                                      : (_classPrivateFieldGet(
                                                            _u2,
                                                            _this8
                                                        ).has(t) &&
                                                            (_classPrivateFieldGet(
                                                                _l2,
                                                                _this8
                                                            ).set(t, []),
                                                            _classPrivateFieldGet(
                                                                _u2,
                                                                _this8
                                                            ).delete(t)),
                                                        (_classPrivateFieldGet7 =
                                                            _classPrivateFieldGet(
                                                                _l2,
                                                                _this8
                                                            ).get(t)) !==
                                                            null &&
                                                            _classPrivateFieldGet7 !==
                                                                void 0 &&
                                                            _classPrivateFieldGet7.push(
                                                                e
                                                            ),
                                                        _assertClassBrand(
                                                            _d_brand,
                                                            _this8,
                                                            _R
                                                        ).call(_this8)));
                                          },
                                          {
                                              signal: e,
                                          }
                                      ),
                                      t.addEventListener(
                                          "update-item",
                                          function (e) {
                                              var i = _classPrivateFieldGet(
                                                  _l2,
                                                  _this8
                                              ).get(t);
                                              if (!i) return;
                                              var s = i.findIndex(function (t) {
                                                  return t.id === e.id;
                                              });
                                              s < 0 ||
                                                  ((i[s] = e),
                                                  _assertClassBrand(
                                                      _d_brand,
                                                      _this8,
                                                      _R
                                                  ).call(_this8));
                                          },
                                          {
                                              signal: e,
                                          }
                                      )));
                        },
                    },
                    {
                        key: "disconnectedCallback",
                        value: function disconnectedCallback() {
                            var _classPrivateFieldGet8;
                            (_classPrivateFieldGet8 = _classPrivateFieldGet(
                                _a3,
                                this
                            )) === null ||
                                _classPrivateFieldGet8 === void 0 ||
                                _classPrivateFieldGet8.abort();
                        },
                    },
                    {
                        key: "comboboxCommit",
                        value: function comboboxCommit(t) {
                            var e = t.target,
                                i =
                                    e === null || e === void 0
                                        ? void 0
                                        : e.getAttribute("data-type"),
                                s =
                                    (e === null || e === void 0
                                        ? void 0
                                        : e.getAttribute("data-value")) || "",
                                r =
                                    (e === null || e === void 0
                                        ? void 0
                                        : e.getAttribute(
                                              "data-replace-query-with"
                                          )) || "",
                                a =
                                    parseInt(
                                        (e === null || e === void 0
                                            ? void 0
                                            : e.getAttribute(
                                                  "data-move-caret-to"
                                              )) || "0"
                                    ) || 0,
                                n = this.parseInputValue();
                            if ("url-result" === i);
                            else if ("filter-result" === i)
                                (n.pop(),
                                    n.push({
                                        type: "filter",
                                        filter: s,
                                        value: "",
                                    }));
                            else if ("command-result" === i) {
                                var _t3 =
                                        e.getAttribute("data-command-name") ||
                                        "",
                                    _i3 = JSON.parse(
                                        e.getAttribute(
                                            "data-command-payload"
                                        ) || "{}"
                                    );
                                this.dispatchEvent(
                                    new CustomEvent(_t3, {
                                        detail: _i3,
                                    })
                                );
                            } else if ("query-result" === i) {
                                if (r)
                                    ((this.input.value = r),
                                        this.input.focus(),
                                        (n = void 0));
                                else {
                                    var _n3;
                                    var _t4 = this.parser.flatten(
                                        this.parser.parse(s, 0)
                                    );
                                    ((_n3 = n).push.apply(
                                        _n3,
                                        _toConsumableArray(_t4)
                                    ),
                                        n.push({
                                            type: "text",
                                            value: "",
                                        }));
                                }
                            } else
                                "filter-item" === i &&
                                    (r
                                        ? ((this.input.value = r),
                                          this.input.focus(),
                                          (n = void 0))
                                        : this.addSelectedItemToFilter(s, n));
                            if ((this.parseQuery(n), r)) {
                                var _t5 =
                                    -1 === a ? this.input.value.length : a;
                                this.input.setSelectionRange(_t5, _t5);
                            }
                            this.input.removeAttribute("aria-activedescendant");
                        },
                    },
                    {
                        key: "addSelectedItemToFilter",
                        value: function addSelectedItemToFilter(t, e) {
                            var i = /\s/.test(t),
                                s = e.pop();
                            if (
                                (s === null || s === void 0
                                    ? void 0
                                    : s.type) === "filter"
                            ) {
                                var _r2 = s.value.split(",");
                                (_r2.pop(),
                                    _r2.push(i ? '"'.concat(t, '"') : t),
                                    e.push({
                                        type: "filter",
                                        filter:
                                            s === null || s === void 0
                                                ? void 0
                                                : s.filter,
                                        value: _r2.join(","),
                                    }),
                                    e.push({
                                        type: "text",
                                        value: "",
                                    }));
                            } else s && e.push(s);
                        },
                    },
                    {
                        key: "inputChange",
                        value: (function () {
                            var _inputChange = _asyncToGenerator(
                                /*#__PURE__*/ _regenerator().m(
                                    function _callee4() {
                                        return _regenerator().w(
                                            function (_context4) {
                                                while (1)
                                                    switch (_context4.n) {
                                                        case 0:
                                                            _context4.n = 1;
                                                            return this.parseQuery();
                                                        case 1:
                                                            return _context4.a(
                                                                2
                                                            );
                                                    }
                                            },
                                            _callee4,
                                            this
                                        );
                                    }
                                )
                            );
                            function inputChange() {
                                return _inputChange.apply(this, arguments);
                            }
                            return inputChange;
                        })(),
                    },
                    {
                        key: "inputBlur",
                        value: function inputBlur() {
                            if (
                                (clearTimeout(this.focusTimeout),
                                _classPrivateFieldGet(_e, this))
                            ) {
                                _classPrivateFieldSet(_e, this, !1);
                                return;
                            }
                            (this.styledInput.classList.remove(
                                _classPrivateFieldGet(_p, this)
                            ),
                                this.input.removeAttribute(
                                    "aria-activedescendant"
                                ),
                                this.hide());
                        },
                    },
                    {
                        key: "resultsMousedown",
                        value: function resultsMousedown() {
                            _classPrivateFieldSet(_e, this, !0);
                        },
                    },
                    {
                        key: "inputFocus",
                        value: (function () {
                            var _inputFocus = _asyncToGenerator(
                                /*#__PURE__*/ _regenerator().m(
                                    function _callee5() {
                                        var _this9 = this;
                                        var t, _t6;
                                        return _regenerator().w(
                                            function (_context5) {
                                                while (1)
                                                    switch (_context5.n) {
                                                        case 0:
                                                            (this.styledInput.classList.add(
                                                                _classPrivateFieldGet(
                                                                    _p,
                                                                    this
                                                                )
                                                            ),
                                                                this.readyForRequestProviders(),
                                                                _classPrivateFieldGet(
                                                                    _t,
                                                                    this
                                                                ).start());
                                                            t =
                                                                this.input
                                                                    .value;
                                                            _t6 =
                                                                this
                                                                    .lastParsedQuery &&
                                                                this
                                                                    .lastParsedQuery ===
                                                                    this.input
                                                                        .value;
                                                            if (_t6) {
                                                                _context5.n = 1;
                                                                break;
                                                            }
                                                            _context5.n = 1;
                                                            return this.parseQuery();
                                                        case 1:
                                                            this.closed &&
                                                                this.input
                                                                    .value ===
                                                                    t &&
                                                                this.input.setSelectionRange(
                                                                    0,
                                                                    this.input
                                                                        .value
                                                                        .length
                                                                );
                                                            this.focusTimeout
                                                                ? clearTimeout(
                                                                      this
                                                                          .focusTimeout
                                                                  )
                                                                : (this.focusTimeout =
                                                                      setTimeout(
                                                                          function () {
                                                                              _this9.input.focus();
                                                                          },
                                                                          this
                                                                              .FOCUS_TIMEOUT_VALUE
                                                                      ));
                                                        case 2:
                                                            return _context5.a(
                                                                2
                                                            );
                                                    }
                                            },
                                            _callee5,
                                            this
                                        );
                                    }
                                )
                            );
                            function inputFocus() {
                                return _inputFocus.apply(this, arguments);
                            }
                            return inputFocus;
                        })(),
                    },
                    {
                        key: "moveCaretToEndOfInput",
                        value: function moveCaretToEndOfInput() {
                            this.input.setSelectionRange(
                                this.input.value.length,
                                this.input.value.length
                            );
                        },
                    },
                    {
                        key: "hasFocus",
                        value: function hasFocus() {
                            return this.styledInput.classList.contains(
                                _classPrivateFieldGet(_p, this)
                            );
                        },
                    },
                    {
                        key: "inputKeydown",
                        value: function inputKeydown(t) {
                            var e = t.key;
                            if ("Escape" === e) this.hide();
                            else if ("Enter" === e) {
                                var _e2 = this.resultsList.querySelector(
                                    '[aria-selected="true"], [data-combobox-option-default="true"]'
                                );
                                if (
                                    !_e2 ||
                                    "true" === _e2.getAttribute("aria-disabled")
                                )
                                    return;
                                var _i4 = _assertClassBrand(
                                    _d_brand,
                                    this,
                                    _E
                                ).call(this, _e2);
                                if (!_i4) return;
                                _assertClassBrand(_d_brand, this, _A).call(
                                    this,
                                    _i4,
                                    t
                                );
                            }
                        },
                    },
                    {
                        key: "inputSubmit",
                        value: function inputSubmit() {
                            this.hide();
                        },
                    },
                    {
                        key: "clearButtonFocus",
                        value: function clearButtonFocus(t) {
                            var e = t.relatedTarget;
                            e && e === this.input && this.show();
                        },
                    },
                    {
                        key: "clearButtonBlur",
                        value: function clearButtonBlur() {
                            this.hide();
                        },
                    },
                    {
                        key: "toggleClearButtonVisibility",
                        value: function toggleClearButtonVisibility() {
                            if (this.clearButton)
                                if ("" !== this.input.value) {
                                    if (!1 === this.clearButton.hidden) return;
                                    this.clearButton.hidden = !1;
                                } else this.clearButton.hidden = !0;
                        },
                    },
                    {
                        key: "updateVisibility",
                        value: function updateVisibility() {
                            this.hasFocus() &&
                                (_classPrivateFieldGet(_d, this).size > 0 ||
                                _classPrivateFieldGet(_l2, this).size > 0 ||
                                _classPrivateFieldGet(_h, this).size > 0
                                    ? this.show()
                                    : _classPrivateFieldGet(_I, this) ||
                                      this.hide());
                        },
                    },
                    {
                        key: "getLeadingVisual",
                        value: function getLeadingVisual(t, e) {
                            if (e) {
                                var _t7 =
                                    "org" === e.type
                                        ? "avatar avatar-1 avatar-small"
                                        : "avatar avatar-1 avatar-small circle";
                                return (0, l.qy)(
                                    _templateObject ||
                                        (_templateObject =
                                            _taggedTemplateLiteral([
                                                '<img src="',
                                                '" alt="" role="presentation" class="',
                                                '" />',
                                            ])),
                                    e.url,
                                    _t7
                                );
                            }
                            if (t && (0, o.nM)(t)) return (0, l.qy)([t.html]);
                            var i = document.getElementById(
                                "".concat(t, "-icon")
                            );
                            return (0, l.qy)([
                                i === null || i === void 0
                                    ? void 0
                                    : i.innerHTML,
                            ]);
                        },
                    },
                    {
                        key: "updateScreenReaderFeedback",
                        value: function updateScreenReaderFeedback(t) {
                            var e = new u("NEW_RESULTS", t, {});
                            (this.dispatchEvent(e),
                                (this.screenReaderFeedback.textContent =
                                    e.text));
                        },
                    },
                    {
                        key: "clear",
                        value: (function () {
                            var _clear = _asyncToGenerator(
                                /*#__PURE__*/ _regenerator().m(
                                    function _callee6() {
                                        var _t8;
                                        return _regenerator().w(
                                            function (_context6) {
                                                while (1)
                                                    switch (_context6.n) {
                                                        case 0:
                                                            _t8 =
                                                                this.dispatchEvent(
                                                                    new CustomEvent(
                                                                        "query-builder:clear",
                                                                        {
                                                                            bubbles:
                                                                                !0,
                                                                            cancelable:
                                                                                !0,
                                                                        }
                                                                    )
                                                                );
                                                            if (!_t8) {
                                                                _context6.n = 1;
                                                                break;
                                                            }
                                                            _context6.n = 1;
                                                            return this.clearInput();
                                                        case 1:
                                                            return _context6.a(
                                                                2
                                                            );
                                                    }
                                            },
                                            _callee6,
                                            this
                                        );
                                    }
                                )
                            );
                            function clear() {
                                return _clear.apply(this, arguments);
                            }
                            return clear;
                        })(),
                    },
                    {
                        key: "clearInput",
                        value: (function () {
                            var _clearInput = _asyncToGenerator(
                                /*#__PURE__*/ _regenerator().m(
                                    function _callee7() {
                                        var _ref5,
                                            _ref5$focusInput,
                                            t,
                                            _args7 = arguments;
                                        return _regenerator().w(
                                            function (_context7) {
                                                while (1)
                                                    switch (_context7.n) {
                                                        case 0:
                                                            ((_ref5 =
                                                                _args7.length >
                                                                    0 &&
                                                                _args7[0] !==
                                                                    undefined
                                                                    ? _args7[0]
                                                                    : {}),
                                                                (_ref5$focusInput =
                                                                    _ref5.focusInput),
                                                                (t =
                                                                    _ref5$focusInput ===
                                                                    void 0
                                                                        ? !0
                                                                        : _ref5$focusInput));
                                                            _context7.n = 1;
                                                            return this.parseQuery(
                                                                [],
                                                                t
                                                            );
                                                        case 1:
                                                            _classPrivateFieldSet(
                                                                _i,
                                                                this,
                                                                !0
                                                            );
                                                        case 2:
                                                            return _context7.a(
                                                                2
                                                            );
                                                    }
                                            },
                                            _callee7,
                                            this
                                        );
                                    }
                                )
                            );
                            function clearInput() {
                                return _clearInput.apply(this, arguments);
                            }
                            return clearInput;
                        })(),
                    },
                    {
                        key: "parseQuery",
                        value: (function () {
                            var _parseQuery = _asyncToGenerator(
                                /*#__PURE__*/ _regenerator().m(
                                    function _callee8(t) {
                                        var _classPrivateFieldGet9;
                                        var e,
                                            _classPrivateFieldSet3,
                                            i,
                                            _Object$getOwnPropert,
                                            _e3,
                                            _i5,
                                            _iterator2,
                                            _step2,
                                            _t9,
                                            s,
                                            r,
                                            _iterator3,
                                            _step3,
                                            _t0,
                                            _args8 = arguments,
                                            _t1;
                                        return _regenerator().w(
                                            function (_context8) {
                                                while (1)
                                                    switch (_context8.n) {
                                                        case 0:
                                                            e =
                                                                _args8.length >
                                                                    1 &&
                                                                _args8[1] !==
                                                                    undefined
                                                                    ? _args8[1]
                                                                    : !0;
                                                            (_classPrivateFieldGet9 =
                                                                _classPrivateFieldGet(
                                                                    _n2,
                                                                    this
                                                                )) === null ||
                                                                _classPrivateFieldGet9 ===
                                                                    void 0 ||
                                                                _classPrivateFieldGet9.abort();
                                                            ((_classPrivateFieldSet3 =
                                                                _classPrivateFieldSet(
                                                                    _n2,
                                                                    this,
                                                                    new AbortController()
                                                                )),
                                                                (i =
                                                                    _classPrivateFieldSet3.signal));
                                                            if (t) {
                                                                ((_e3 = t
                                                                    .map(
                                                                        function (
                                                                            t
                                                                        ) {
                                                                            return "filter" ===
                                                                                t.type
                                                                                ? ""
                                                                                      .concat(
                                                                                          t.filter,
                                                                                          ":"
                                                                                      )
                                                                                      .concat(
                                                                                          t.value
                                                                                      )
                                                                                : t.value;
                                                                        }
                                                                    )
                                                                    .join(
                                                                        _classPrivateFieldGet(
                                                                            _L,
                                                                            this
                                                                        )
                                                                            ? ""
                                                                            : " "
                                                                    )),
                                                                    (_i5 =
                                                                        (_Object$getOwnPropert =
                                                                            Object.getOwnPropertyDescriptor(
                                                                                Object.getPrototypeOf(
                                                                                    this
                                                                                        .input
                                                                                ),
                                                                                "value"
                                                                            )) ===
                                                                            null ||
                                                                        _Object$getOwnPropert ===
                                                                            void 0
                                                                            ? void 0
                                                                            : _Object$getOwnPropert.set));
                                                                (_i5
                                                                    ? _i5 ===
                                                                          null ||
                                                                      _i5 ===
                                                                          void 0
                                                                        ? void 0
                                                                        : _i5.call(
                                                                              this
                                                                                  .input,
                                                                              _e3
                                                                          )
                                                                    : (this.input.value =
                                                                          _e3),
                                                                    this.input.dispatchEvent(
                                                                        new Event(
                                                                            "change",
                                                                            {
                                                                                bubbles:
                                                                                    !0,
                                                                            }
                                                                        )
                                                                    ));
                                                            } else
                                                                t =
                                                                    this.parseInputValue();
                                                            this.lastParsedQuery =
                                                                this.input.value;
                                                            _context8.n = 1;
                                                            return new Promise(
                                                                function (t) {
                                                                    return requestAnimationFrame(
                                                                        t
                                                                    );
                                                                }
                                                            );
                                                        case 1:
                                                            _t1 = i.aborted;
                                                            if (_t1) {
                                                                _context8.n = 3;
                                                                break;
                                                            }
                                                            this.styleInputText(
                                                                t
                                                            );
                                                            e &&
                                                                this.input.focus();
                                                            _context8.n = 2;
                                                            return new Promise(
                                                                function (t) {
                                                                    return setTimeout(
                                                                        t,
                                                                        100
                                                                    );
                                                                }
                                                            );
                                                        case 2:
                                                            _t1 = i.aborted;
                                                        case 3:
                                                            if (!_t1) {
                                                                _context8.n = 4;
                                                                break;
                                                            }
                                                            return _context8.a(
                                                                2
                                                            );
                                                        case 4:
                                                            _iterator2 =
                                                                _createForOfIteratorHelper(
                                                                    _classPrivateFieldGet(
                                                                        _l2,
                                                                        this
                                                                    ).keys()
                                                                );
                                                            try {
                                                                for (
                                                                    _iterator2.s();
                                                                    !(_step2 =
                                                                        _iterator2.n())
                                                                        .done;

                                                                ) {
                                                                    _t9 =
                                                                        _step2.value;
                                                                    _classPrivateFieldGet(
                                                                        _u2,
                                                                        this
                                                                    ).add(_t9);
                                                                }
                                                            } catch (err) {
                                                                _iterator2.e(
                                                                    err
                                                                );
                                                            } finally {
                                                                _iterator2.f();
                                                            }
                                                            (_classPrivateFieldGet(
                                                                _d,
                                                                this
                                                            ).clear(),
                                                                _classPrivateFieldGet(
                                                                    _h,
                                                                    this
                                                                ).clear());
                                                            s = new o.P$(
                                                                t,
                                                                this.input.value,
                                                                this.parsedMetadata
                                                            );
                                                            this.dispatchEvent(
                                                                s
                                                            );
                                                            r = !1;
                                                            _iterator3 =
                                                                _createForOfIteratorHelper(
                                                                    _classPrivateFieldGet(
                                                                        _u2,
                                                                        this
                                                                    ).keys()
                                                                );
                                                            try {
                                                                for (
                                                                    _iterator3.s();
                                                                    !(_step3 =
                                                                        _iterator3.n())
                                                                        .done;

                                                                ) {
                                                                    _t0 =
                                                                        _step3.value;
                                                                    (_classPrivateFieldGet(
                                                                        _l2,
                                                                        this
                                                                    ).delete(
                                                                        _t0
                                                                    ),
                                                                        _classPrivateFieldGet(
                                                                            _u2,
                                                                            this
                                                                        ).delete(
                                                                            _t0
                                                                        ),
                                                                        (r =
                                                                            !0));
                                                                }
                                                            } catch (err) {
                                                                _iterator3.e(
                                                                    err
                                                                );
                                                            } finally {
                                                                _iterator3.f();
                                                            }
                                                            (r &&
                                                                _assertClassBrand(
                                                                    _d_brand,
                                                                    this,
                                                                    _R
                                                                ).call(this),
                                                                this.updateVisibility());
                                                        case 5:
                                                            return _context8.a(
                                                                2
                                                            );
                                                    }
                                            },
                                            _callee8,
                                            this
                                        );
                                    }
                                )
                            );
                            function parseQuery(_x4) {
                                return _parseQuery.apply(this, arguments);
                            }
                            return parseQuery;
                        })(),
                    },
                    {
                        key: "styleInputText",
                        value: function styleInputText(t) {
                            _assertClassBrand(_d_brand, this, _Q).call(
                                this,
                                this.input.value
                            );
                            var e = document.createDocumentFragment();
                            var _iterator4 = _createForOfIteratorHelper(t),
                                _step4;
                            try {
                                for (
                                    _iterator4.s();
                                    !(_step4 = _iterator4.n()).done;

                                ) {
                                    var _i6 = _step4.value;
                                    var _t10 = document.createElement("span"),
                                        _s4 = document.createElement("span");
                                    _s4.textContent = " ";
                                    var _r3 = !_classPrivateFieldGet(_L, this);
                                    if ("filter" === _i6.type) {
                                        var _e4 = _i6.filter,
                                            _a4 = _i6.value,
                                            _n4 =
                                                document.createElement("span");
                                        (_t10.setAttribute(
                                            "data-type",
                                            "filter-expression"
                                        ),
                                            _n4.setAttribute(
                                                "data-type",
                                                "filter"
                                            ),
                                            (_n4.textContent = _e4));
                                        var _l3 =
                                            document.createElement("span");
                                        _l3.textContent = this.filterKey;
                                        var _o2 =
                                            document.createElement("span");
                                        (_o2.setAttribute(
                                            "data-type",
                                            "filter-value"
                                        ),
                                            (_o2.textContent = _a4),
                                            _t10.appendChild(_n4),
                                            _t10.appendChild(_l3),
                                            _t10.appendChild(_o2),
                                            _r3 && _t10.appendChild(_s4));
                                    } else
                                        (_r3
                                            ? (_t10.textContent = "".concat(
                                                  _i6.value,
                                                  " "
                                              ))
                                            : (_t10.textContent = _i6.value),
                                            _i6.style === o.VJ.Constant
                                                ? _t10.classList.add(
                                                      "qb-constant"
                                                  )
                                                : _i6.style === o.VJ.Entity
                                                  ? _t10.classList.add(
                                                        "qb-entity"
                                                    )
                                                  : _i6.style ===
                                                        o.VJ.FilterValue &&
                                                    _t10.classList.add(
                                                        "qb-filter-value"
                                                    ));
                                    (e.append(_t10),
                                        _assertClassBrand(
                                            _d_brand,
                                            this,
                                            _N
                                        ).call(this));
                                }
                            } catch (err) {
                                _iterator4.e(err);
                            } finally {
                                _iterator4.f();
                            }
                            this.styledInputContent.replaceChildren(e);
                        },
                    },
                ]);
            })(/*#__PURE__*/ _wrapNativeSuper(HTMLElement));
            function _q(t) {
                return t.ctrlKey || t.metaKey;
            }
            function _A(t, e) {
                e && _assertClassBrand(_d_brand, this, _q).call(this, e)
                    ? window.open(t)
                    : (window.location.href = t);
            }
            function _E(t) {
                if (!t) return;
                var e = t.getAttribute("id");
                if (e) return _classPrivateFieldGet(_y, this).get(e);
            }
            function _R() {
                _classPrivateFieldGet(_S, this) ||
                    (_classPrivateFieldSet(_S, this, !0),
                    this.toggleClearButtonVisibility(),
                    _classPrivateFieldSet(_S, this, !1),
                    _assertClassBrand(_d_brand, this, _x).call(this));
            }
            function _P() {
                var _this0 = this;
                if (0 !== _classPrivateFieldGet(_h, this).size)
                    return (0, l.qy)(
                        _templateObject2 ||
                            (_templateObject2 = _taggedTemplateLiteral([
                                '<li role="presentation" class="ActionList-sectionDivider">\n      <h3 role="presentation" class="ActionList-sectionDivider-title p-2 text-left" aria-hidden="true">\n        Suggested filters\n      </h3>\n      <ul role="presentation">\n        ',
                                "\n      </ul>\n    </li>",
                            ])),
                        _toConsumableArray(_classPrivateFieldGet(_h, this))
                            .sort(h)
                            .map(function (t) {
                                return _assertClassBrand(
                                    _d_brand,
                                    _this0,
                                    _k
                                ).call(_this0, t);
                            })
                    );
            }
            function _B(t) {
                var _classPrivateFieldGet0,
                    _this1 = this,
                    _classPrivateFieldGet1;
                var e =
                    arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : !1;
                var i = [],
                    s = this.parseInputValue().at(-1);
                if (
                    ("filter" === t.type
                        ? t.manuallyDetermineFilterEligibility
                            ? (i =
                                  ((_classPrivateFieldGet0 =
                                      _classPrivateFieldGet(_d, this).get(
                                          t
                                      )) === null ||
                                  _classPrivateFieldGet0 === void 0
                                      ? void 0
                                      : _classPrivateFieldGet0
                                            .sort(h)
                                            .map(function (t) {
                                                return _assertClassBrand(
                                                    _d_brand,
                                                    _this1,
                                                    _T
                                                ).call(_this1, t);
                                            })) || [])
                            : (s === null || s === void 0 ? void 0 : s.type) ===
                                  "filter" &&
                              (i =
                                  ((_classPrivateFieldGet1 =
                                      _classPrivateFieldGet(_d, this).get(
                                          t
                                      )) === null ||
                                  _classPrivateFieldGet1 === void 0
                                      ? void 0
                                      : _classPrivateFieldGet1
                                            .filter(function (t) {
                                                return t.filter === s.filter;
                                            })
                                            .sort(h)
                                            .map(function (t) {
                                                return _assertClassBrand(
                                                    _d_brand,
                                                    _this1,
                                                    _T
                                                ).call(_this1, t);
                                            })) || [])
                        : (i = _toConsumableArray(
                              _classPrivateFieldGet(_l2, this).get(t) || []
                          )
                              .filter(function (t) {
                                  return t.isFallbackSuggestion === e;
                              })
                              .sort(h)
                              .map(function (t) {
                                  return _assertClassBrand(
                                      _d_brand,
                                      _this1,
                                      _M
                                  ).call(_this1, t);
                              })),
                    i.length)
                )
                    if ("" === t.name)
                        return (0, l.qy)(
                            _templateObject3 ||
                                (_templateObject3 = _taggedTemplateLiteral([
                                    '<li role="presentation" class="ActionList-sectionDivider">\n        <ul role="presentation">\n          ',
                                    "\n        </ul>\n      </li>",
                                ])),
                            i
                        );
                    else
                        return (0, l.qy)(
                            _templateObject4 ||
                                (_templateObject4 = _taggedTemplateLiteral([
                                    '<li role="presentation" class="ActionList-sectionDivider">\n        <h3\n          role="presentation"\n          class="ActionList-sectionDivider-title QueryBuilder-sectionTitle p-2 text-left"\n          aria-hidden="true"\n        >\n          ',
                                    '\n        </h3>\n        <ul role="presentation">\n          ',
                                    "\n        </ul>\n      </li>",
                                ])),
                            t.name,
                            i
                        );
            }
            function _O() {
                (_classPrivateFieldGet(_y, this).clear(),
                    _classPrivateFieldSet(_f, this, 0));
            }
            function _x() {
                var _this10 = this;
                var t;
                _assertClassBrand(_d_brand, this, _O).call(this);
                var e = Object.values(_classPrivateFieldGet(_s3, this))
                    .sort(function (t, e) {
                        return t.priority - e.priority;
                    })
                    .map(function (t) {
                        return _assertClassBrand(_d_brand, _this10, _B).call(
                            _this10,
                            t
                        );
                    })
                    .filter(function (t) {
                        return void 0 !== t;
                    });
                _classPrivateFieldGet(_I, this) ||
                    0 !== e.length ||
                    (e = Object.values(_classPrivateFieldGet(_s3, this))
                        .sort(function (t, e) {
                            return t.priority - e.priority;
                        })
                        .map(function (t) {
                            return _assertClassBrand(
                                _d_brand,
                                _this10,
                                _B
                            ).call(_this10, t, !0);
                        })
                        .filter(function (t) {
                            return void 0 !== t;
                        }));
                var i = _assertClassBrand(_d_brand, this, _P).call(this);
                (i && e.push(i),
                    0 === e.length
                        ? _classPrivateFieldGet(_I, this) ||
                          ((this.resultsList.textContent = ""),
                          (0, l.XX)(
                              (0, l.qy)(
                                  _templateObject5 ||
                                      (_templateObject5 =
                                          _taggedTemplateLiteral([""]))
                              ),
                              this.resultsList
                          ))
                        : (0, l.XX)(
                              (0, l.qy)(
                                  _templateObject6 ||
                                      (_templateObject6 =
                                          _taggedTemplateLiteral(["", ""])),
                                  e.map(function (t, i) {
                                      return i === e.length - 1
                                          ? t
                                          : (0, l.qy)(
                                                _templateObject7 ||
                                                    (_templateObject7 =
                                                        _taggedTemplateLiteral([
                                                            "",
                                                            '\n                <li aria-hidden="true" class="ActionList-sectionDivider"></li>',
                                                        ])),
                                                t
                                            );
                                  })
                              ),
                              this.resultsList
                          ));
                var s =
                        this.resultsList.querySelectorAll(
                            '[role="option"]'
                        ).length,
                    r = 1 === s ? this.i18n.suggestion : this.i18n.suggestions;
                ((t = "".concat(s, " ").concat(r, ".")),
                    _classPrivateFieldGet(_i, this) &&
                        ((t = "".concat(this.i18n.clear_search, " ").concat(t)),
                        _classPrivateFieldSet(_i, this, !1)),
                    this.screenReaderFeedback.textContent === t &&
                        (t += "\xa0"),
                    setTimeout(
                        function () {
                            return _this10.updateScreenReaderFeedback(t);
                        },
                        _classPrivateFieldGet(_v, this)
                    ));
            }
            function _V(t) {
                if (t) return t.replace(/\s/g, "-").toLowerCase();
            }
            function _M(_ref6) {
                var _this$f, _this$f2;
                var t = _ref6.value,
                    e = _ref6.prefixText,
                    i = _ref6.prefixColor,
                    s = _ref6.target,
                    r = _ref6.action,
                    a = _ref6.description,
                    n = _ref6.icon,
                    u = _ref6.scope;
                var h = ""
                    .concat(
                        _classPrivateFieldGet(_c, this) || "search-item",
                        "-result-"
                    )
                    .concat(
                        (_classPrivateFieldSet(
                            _f,
                            this,
                            ((_this$f = _classPrivateFieldGet(_f, this)),
                            (_this$f2 = _this$f++),
                            _this$f)
                        ),
                        _this$f2)
                    );
                if ("url" in r) {
                    var _d3 =
                            "GENERAL" === u
                                ? "".concat(o.o7[u])
                                : "jump to this ".concat(s.singularItemName),
                        c = a ? ", ".concat(a) : "",
                        p = ""
                            .concat(e ? "".concat(e, " ") : "")
                            .concat(t)
                            .concat(c, ", ")
                            .concat(_d3);
                    _classPrivateFieldGet(_y, this).set(h, r.url);
                    var m = null;
                    return (
                        e &&
                            (m = (0, l.qy)(
                                _templateObject8 ||
                                    (_templateObject8 = _taggedTemplateLiteral([
                                        '\n          <span>\n            <div class="d-inline-flex position-relative">\n              <div\n                class="position-absolute rounded-1 flex-items-stretch height-full width-full"\n                style="opacity: 0.1; background-color: var(',
                                        ')"\n              ></div>\n              <div class="px-1" style="color: var(',
                                        ')">',
                                        "</div>\n            </div>\n            ",
                                        "\n          </span>\n        ",
                                    ])),
                                i,
                                i,
                                e,
                                _assertClassBrand(_d_brand, this, _D).call(
                                    this,
                                    t
                                )
                            )),
                        (0, l.qy)(
                            _templateObject9 ||
                                (_templateObject9 = _taggedTemplateLiteral([
                                    '<li\n        role="option"\n        class="ActionListItem"\n        data-type="url-result"\n        id="',
                                    '"\n        data-value="',
                                    '"\n        aria-label="',
                                    '"\n        data-href="',
                                    '"\n        data-action="click:query-builder#navigate"\n      >\n        <span class="QueryBuilder-ListItem-link ActionListContent ActionListContent--visual16 QueryBuilder-ListItem">\n          ',
                                    '\n          <span class="ActionListItem-descriptionWrap">\n            <span class="ActionListItem-label text-normal"> ',
                                    " </span>\n            ",
                                    '\n          </span>\n\n          <span aria-hidden="true" class="ActionListItem-description QueryBuilder-ListItem-trailing"\n            >',
                                    "</span\n          >\n        </span>\n      </li>",
                                ])),
                            h,
                            t,
                            p,
                            r.url,
                            n
                                ? (0, l.qy)(
                                      _templateObject0 ||
                                          (_templateObject0 =
                                              _taggedTemplateLiteral([
                                                  '<span id="',
                                                  '--leading" class="ActionListItem-visual ActionListItem-visual--leading">\n                ',
                                                  "\n              </span>",
                                              ])),
                                      h,
                                      this.getLeadingVisual(n)
                                  )
                                : null,
                            m ||
                                _assertClassBrand(_d_brand, this, _D).call(
                                    this,
                                    t
                                ),
                            a
                                ? (0, l.qy)(
                                      _templateObject1 ||
                                          (_templateObject1 =
                                              _taggedTemplateLiteral([
                                                  '<span class="ActionListItem-description">',
                                                  "</span>",
                                              ])),
                                      a
                                  )
                                : null,
                            o.o7[u]
                        )
                    );
                }
                if ("commandName" in r) {
                    var _e5 = o.o7[u] || o.o7.COMMAND,
                        _i7 = a ? ", ".concat(a) : "",
                        _s5 = "".concat(t).concat(_i7, ", ").concat(_e5);
                    return (0, l.qy)(
                        _templateObject10 ||
                            (_templateObject10 = _taggedTemplateLiteral([
                                '<li\n        role="option"\n        class="ActionListItem"\n        data-type="command-result"\n        id="',
                                '"\n        data-value="',
                                '"\n        data-command-name="',
                                '"\n        data-command-payload="',
                                '"\n        aria-label="',
                                '"\n      >\n        <span class="ActionListContent ActionListContent--visual16 QueryBuilder-ListItem">\n          ',
                                '\n          <span class="ActionListItem-descriptionWrap">\n            <span class="ActionListItem-label text-normal"> ',
                                " </span>\n            ",
                                '\n          </span>\n\n          <span aria-hidden="true" class="ActionListItem-description QueryBuilder-ListItem-trailing"\n            >',
                                "</span\n          >\n        </span>\n      </li>",
                            ])),
                        h,
                        t,
                        r.commandName,
                        JSON.stringify(r.data),
                        _s5,
                        n
                            ? (0, l.qy)(
                                  _templateObject11 ||
                                      (_templateObject11 =
                                          _taggedTemplateLiteral([
                                              '<span id="',
                                              '--leading" class="ActionListItem-visual ActionListItem-visual--leading">\n                ',
                                              "\n              </span>",
                                          ])),
                                  h,
                                  this.getLeadingVisual(n)
                              )
                            : null,
                        _assertClassBrand(_d_brand, this, _D).call(this, t),
                        a
                            ? (0, l.qy)(
                                  _templateObject12 ||
                                      (_templateObject12 =
                                          _taggedTemplateLiteral([
                                              '<span class="ActionListItem-description">',
                                              "</span>",
                                          ])),
                                  a
                              )
                            : null,
                        _e5
                    );
                }
                {
                    var _e6 = "",
                        _i8 = 0;
                    "replaceQueryWith" in r &&
                        ((_e6 = r.replaceQueryWith), (_i8 = r.moveCaretTo));
                    var _s6 = "query" in r ? o.o7[u] : o.k8;
                    return (0, l.qy)(
                        _templateObject13 ||
                            (_templateObject13 = _taggedTemplateLiteral([
                                ' <li\n        role="option"\n        class="ActionListItem"\n        data-type="query-result"\n        data-value="',
                                '"\n        aria-label="',
                                "",
                                '"\n        data-replace-query-with="',
                                '"\n        data-move-caret-to="',
                                '"\n        id="',
                                '"\n      >\n        <span class="ActionListContent ActionListContent--visual16 QueryBuilder-ListItem">\n          ',
                                '\n          <span class="ActionListItem-descriptionWrap">\n            <span class="ActionListItem-label text-normal">',
                                "</span>\n            ",
                                "\n          </span>\n\n          ",
                                "\n        </span>\n      </li>",
                            ])),
                        t,
                        t,
                        a ? ", ".concat(a) : "",
                        _e6,
                        _i8,
                        h,
                        n
                            ? (0, l.qy)(
                                  _templateObject14 ||
                                      (_templateObject14 =
                                          _taggedTemplateLiteral([
                                              '<span id="',
                                              '--leading" class="ActionListItem-visual ActionListItem-visual--leading">\n                ',
                                              "\n              </span>",
                                          ])),
                                  h,
                                  this.getLeadingVisual(n)
                              )
                            : null,
                        _assertClassBrand(_d_brand, this, _D).call(this, t),
                        a
                            ? (0, l.qy)(
                                  _templateObject15 ||
                                      (_templateObject15 =
                                          _taggedTemplateLiteral([
                                              '<span class="ActionListItem-description">',
                                              "</span>",
                                          ])),
                                  a
                              )
                            : null,
                        _classPrivateFieldGet(_l2, this).size > 0
                            ? (0, l.qy)(
                                  _templateObject16 ||
                                      (_templateObject16 =
                                          _taggedTemplateLiteral([
                                              '<span aria-hidden="true" class="ActionListItem-description QueryBuilder-ListItem-trailing"\n                >',
                                              "</span\n              >",
                                          ])),
                                  _s6
                              )
                            : (0, l.qy)(
                                  _templateObject17 ||
                                      (_templateObject17 =
                                          _taggedTemplateLiteral([""]))
                              )
                    );
                }
            }
            function _D(t) {
                var e = this.parser.flatten(this.parser.parse(t, 0)),
                    i = !_classPrivateFieldGet(_L, this),
                    s = [];
                var _iterator5 = _createForOfIteratorHelper(e),
                    _step5;
                try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                        var _t11 = _step5.value;
                        if ("filter" === _t11.type)
                            s.push(
                                (0, l.qy)(
                                    _templateObject18 ||
                                        (_templateObject18 =
                                            _taggedTemplateLiteral([
                                                "<span>",
                                                ':</span\n            ><span data-type="filter-value">',
                                                "",
                                                "</span>",
                                            ])),
                                    _t11.filter,
                                    _t11.value,
                                    i ? " " : ""
                                )
                            );
                        else {
                            var _e7 = "";
                            (_t11.style === o.VJ.Constant
                                ? (_e7 = "qb-constant")
                                : _t11.style === o.VJ.Entity
                                  ? (_e7 = "qb-entity")
                                  : _t11.style === o.VJ.FilterValue &&
                                    (_e7 = "qb-filter-value"),
                                s.push(
                                    (0, l.qy)(
                                        _templateObject19 ||
                                            (_templateObject19 =
                                                _taggedTemplateLiteral([
                                                    '<span class="',
                                                    '">',
                                                    "",
                                                    "</span>",
                                                ])),
                                        _e7,
                                        _t11.value,
                                        i ? " " : ""
                                    )
                                ));
                        }
                    }
                } catch (err) {
                    _iterator5.e(err);
                } finally {
                    _iterator5.f();
                }
                return s;
            }
            function _k(_ref7) {
                var t = _ref7.singularItemName,
                    e = _ref7.icon,
                    i = _ref7.description,
                    s = _ref7.value;
                var r = i ? ", ".concat(i) : "",
                    a = ""
                        .concat(this.renderSingularItemNames ? t : s)
                        .concat(r);
                return (0, l.qy)(
                    _templateObject20 ||
                        (_templateObject20 = _taggedTemplateLiteral([
                            ' <li\n      role="option"\n      class="ActionListItem"\n      data-type="filter-result"\n      data-value="',
                            '"\n      id="',
                            "-result-",
                            '"\n      aria-label="',
                            ', filter"\n    >\n      <span class="ActionListContent ActionListContent--visual16 QueryBuilder-ListItem">\n        ',
                            '\n        <span class="ActionListItem-descriptionWrap">\n          <span class="ActionListItem-label text-normal">\n            ',
                            "\n          </span>\n          ",
                            "\n        </span>\n\n        ",
                            "\n      </span>\n    </li>",
                        ])),
                    s,
                    _classPrivateFieldGet(_c, this) || "filter",
                    _assertClassBrand(_d_brand, this, _V).call(this, s),
                    a,
                    e
                        ? (0, l.qy)(
                              _templateObject21 ||
                                  (_templateObject21 = _taggedTemplateLiteral([
                                      '<span\n              id="',
                                      "-result-",
                                      '--leading"\n              class="ActionListItem-visual ActionListItem-visual--leading"\n            >\n              ',
                                      "\n            </span>",
                                  ])),
                              _classPrivateFieldGet(_c, this) || "filter",
                              _assertClassBrand(_d_brand, this, _V).call(
                                  this,
                                  s
                              ),
                              this.getLeadingVisual(e)
                          )
                        : null,
                    this.renderSingularItemNames ? t : "".concat(s, ":"),
                    i
                        ? (0, l.qy)(
                              _templateObject22 ||
                                  (_templateObject22 = _taggedTemplateLiteral([
                                      '<span class="ActionListItem-description">',
                                      "</span>",
                                  ])),
                              i
                          )
                        : null,
                    _classPrivateFieldGet(_l2, this).size > 0
                        ? (0, l.qy)(
                              _templateObject23 ||
                                  (_templateObject23 = _taggedTemplateLiteral([
                                      '<span aria-hidden="true" class="ActionListItem-description QueryBuilder-ListItem-trailing"\n              >',
                                      "</span\n            >",
                                  ])),
                              o.k8
                          )
                        : (0, l.qy)(
                              _templateObject24 ||
                                  (_templateObject24 = _taggedTemplateLiteral([
                                      "",
                                  ]))
                          )
                );
            }
            function _T(_ref8) {
                var t = _ref8.name,
                    e = _ref8.value,
                    i = _ref8.target,
                    s = _ref8.icon,
                    r = _ref8.avatar,
                    a = _ref8.description,
                    n = _ref8.inlineDescription,
                    u = _ref8.action;
                var h = t && t.length > 0 ? t : e,
                    _d4 = a ? ", ".concat(a) : "",
                    c = i.singularItemName
                        ? ""
                              .concat(h)
                              .concat(_d4, ", autocomplete this ")
                              .concat(i.singularItemName)
                        : "".concat(h).concat(_d4, ", ").concat(i.name),
                    p = "",
                    m = 0;
                return (
                    u &&
                        "replaceQueryWith" in u &&
                        ((p = u.replaceQueryWith), (m = u.moveCaretTo)),
                    (0, l.qy)(
                        _templateObject25 ||
                            (_templateObject25 = _taggedTemplateLiteral([
                                ' <li\n      role="option"\n      class="ActionListItem"\n      data-type="filter-item"\n      data-replace-query-with="',
                                '"\n      data-move-caret-to="',
                                '"\n      data-value="',
                                '"\n      id="',
                                "-result-",
                                '"\n      aria-label="',
                                '"\n    >\n      <span class="ActionListContent ActionListContent--visual16 QueryBuilder-ListItem">\n        ',
                                '\n        <span class="',
                                '">\n          <span class="ActionListItem-label text-normal">',
                                "</span>\n          ",
                                "\n        </span>\n\n        ",
                                "\n      </span>\n    </li>",
                            ])),
                        p,
                        m,
                        e,
                        _classPrivateFieldGet(_c, this) || "filter-item",
                        _assertClassBrand(_d_brand, this, _V).call(this, e),
                        c,
                        s
                            ? (0, l.qy)(
                                  _templateObject26 ||
                                      (_templateObject26 =
                                          _taggedTemplateLiteral([
                                              '<span\n              id="',
                                              "-result-",
                                              '--leading"\n              class="ActionListItem-visual ActionListItem-visual--leading"\n            >\n              ',
                                              "\n            </span>",
                                          ])),
                                  _classPrivateFieldGet(_c, this) ||
                                      "filter-item",
                                  _assertClassBrand(_d_brand, this, _V).call(
                                      this,
                                      e
                                  ),
                                  this.getLeadingVisual(s, r)
                              )
                            : null,
                        n
                            ? "ActionListItem-descriptionWrap-inline"
                            : "ActionListItem-descriptionWrap",
                        h,
                        a
                            ? (0, l.qy)(
                                  _templateObject27 ||
                                      (_templateObject27 =
                                          _taggedTemplateLiteral([
                                              '<span class="ActionListItem-description">',
                                              "</span>",
                                          ])),
                                  a
                              )
                            : null,
                        _classPrivateFieldGet(_l2, this).size > 0
                            ? (0, l.qy)(
                                  _templateObject28 ||
                                      (_templateObject28 =
                                          _taggedTemplateLiteral([
                                              '<span aria-hidden="true" class="ActionListItem-description QueryBuilder-ListItem-trailing"\n              >',
                                              "</span\n            >",
                                          ])),
                                  o.k8
                              )
                            : (0, l.qy)(
                                  _templateObject29 ||
                                      (_templateObject29 =
                                          _taggedTemplateLiteral([""]))
                              )
                    )
                );
            }
            function _$(t) {
                var e = _classPrivateFieldGet(_m, this).get(t);
                if (e) return e.slice();
                {
                    var _e8 = [];
                    var _iterator6 = _createForOfIteratorHelper(
                            t.split(/\s(?=(?:[^"]*"[^"]*")*[^"]*$)/g)
                        ),
                        _step6;
                    try {
                        for (
                            _iterator6.s();
                            !(_step6 = _iterator6.n()).done;

                        ) {
                            var _i9 = _step6.value;
                            var _t12 = _i9.indexOf(this.filterKey);
                            if (_t12 > 0) {
                                var _s7 = _i9.substring(0, _t12),
                                    _r4 = _i9.substring(_t12 + 1);
                                _e8.push(
                                    _classPrivateFieldGet(_r, this).has(_s7)
                                        ? {
                                              type: "filter",
                                              filter: _s7,
                                              value: _r4,
                                          }
                                        : {
                                              type: "text",
                                              value: _i9,
                                          }
                                );
                            } else
                                _e8.push({
                                    type: "text",
                                    value: _i9,
                                });
                        }
                    } catch (err) {
                        _iterator6.e(err);
                    } finally {
                        _iterator6.f();
                    }
                    return (
                        _classPrivateFieldGet(_m, this).set(t, [].concat(_e8)),
                        _e8
                    );
                }
            }
            function _Q(t) {
                if (
                    ((this.sizer.textContent = ""),
                    null !== this.input.selectionStart &&
                        this.input.selectionStart === this.input.selectionEnd)
                ) {
                    var _e9 = this.input.selectionStart,
                        _i0 = document.createElement("span");
                    this.sizer.append(
                        t.substring(0, _e9),
                        _i0,
                        t.substring(_e9)
                    );
                } else this.sizer.textContent = t;
            }
            function _N() {
                var _this11 = this;
                var t = this.minWidth;
                requestAnimationFrame(function () {
                    var e = _this11.sizer.querySelector("span");
                    e &&
                        (e.offsetLeft < _this11.styledInputContainer.scrollLeft
                            ? (_this11.styledInputContainer.scrollLeft =
                                  e.offsetLeft - t)
                            : e.offsetLeft >
                                  _this11.styledInputContainer.scrollLeft +
                                      _this11.styledInputContainer
                                          .clientWidth &&
                              (_this11.styledInputContainer.scrollLeft =
                                  e.offsetLeft -
                                  _this11.styledInputContainer.clientWidth +
                                  t));
                    var i = Math.max(
                        _this11.sizer.scrollWidth + 2,
                        2 * ("" === _this11.input.value),
                        t
                    );
                    _this11.input.style.width = "".concat(i, "px");
                });
            }
            function _F() {
                return Object.keys(_classPrivateFieldGet(_s3, this)).length;
            }
            ((0, s.Cg)([r.CF], d.prototype, "filterKey", void 0),
                (0, s.Cg)([r.CF], d.prototype, "minWidth", void 0),
                (d = (0, s.Cg)([(0, r.p_)("query-builder")], d)),
                i.d(e, {
                    CN: function CN() {
                        return o.CN;
                    },
                    MK: function MK() {
                        return d;
                    },
                    dS: function dS() {
                        return o.dS;
                    },
                    m4: function m4() {
                        return o.m4;
                    },
                    qi: function qi() {
                        return o.qi;
                    },
                }));
        },
    },
]);
