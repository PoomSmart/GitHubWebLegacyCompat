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
function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e,
        t,
        r = "function" == typeof Symbol ? Symbol : {},
        n = r.iterator || "@@iterator",
        o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
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
            return { w: i, m: f };
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
function _classPrivateGetter(s, r, a) {
    return a(_assertClassBrand(s, r));
}
function _classPrivateFieldGet(s, a) {
    return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldSet(s, a, r) {
    return (s.set(_assertClassBrand(s, a), r), r);
}
function _assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t))
        return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
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
            var _n3 = 0,
                F = function F() {};
            return {
                s: F,
                n: function n() {
                    return _n3 >= r.length
                        ? { done: !0 }
                        : { done: !1, value: r[_n3++] };
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
function _classCallCheck(a, n) {
    if (!(a instanceof n))
        throw new TypeError("Cannot call a class as a function");
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
(globalThis.webpackChunk_github_ui_github_ui =
    globalThis.webpackChunk_github_ui_github_ui || []).push([
    [81028],
    {
        81028: function _(t, e, i) {
            var _t3,
                _i,
                _s,
                _o,
                _r,
                _InputStyleClone_brand,
                _d,
                _p,
                _f,
                _h,
                _a,
                _v,
                _b,
                _g,
                _InputRange_brand;
            (i.r(e),
                i.d(e, {
                    default: function _default() {
                        return TextExpanderElement;
                    },
                }));
            var Combobox = /*#__PURE__*/ (function () {
                function Combobox(t, e) {
                    var _this = this;
                    var _ref =
                            arguments.length > 2 && arguments[2] !== undefined
                                ? arguments[2]
                                : {},
                        i = _ref.tabInsertsSuggestions,
                        n = _ref.defaultFirstOption,
                        o = _ref.scrollIntoViewOptions;
                    _classCallCheck(this, Combobox);
                    ((this.input = t),
                        (this.list = e),
                        (this.tabInsertsSuggestions = null == i || i),
                        (this.defaultFirstOption = null != n && n),
                        (this.scrollIntoViewOptions =
                            null != o
                                ? o
                                : {
                                      block: "nearest",
                                      inline: "nearest",
                                  }),
                        (this.isComposing = !1),
                        e.id ||
                            (e.id = "combobox-".concat(
                                Math.random().toString().slice(2, 6)
                            )),
                        (this.ctrlBindings =
                            !!navigator.userAgent.match(/Macintosh/)),
                        (this.keyboardEventHandler = function (t) {
                            return (function (t, e) {
                                if (
                                    !t.shiftKey &&
                                    !t.metaKey &&
                                    !t.altKey &&
                                    (e.ctrlBindings || !t.ctrlKey) &&
                                    !e.isComposing
                                )
                                    switch (t.key) {
                                        case "Enter":
                                            s(e.input, e.list) &&
                                                t.preventDefault();
                                            break;
                                        case "Tab":
                                            e.tabInsertsSuggestions &&
                                                s(e.input, e.list) &&
                                                t.preventDefault();
                                            break;
                                        case "Escape":
                                            e.clearSelection();
                                            break;
                                        case "ArrowDown":
                                            (e.navigate(1), t.preventDefault());
                                            break;
                                        case "ArrowUp":
                                            (e.navigate(-1),
                                                t.preventDefault());
                                            break;
                                        case "n":
                                            e.ctrlBindings &&
                                                t.ctrlKey &&
                                                (e.navigate(1),
                                                t.preventDefault());
                                            break;
                                        case "p":
                                            e.ctrlBindings &&
                                                t.ctrlKey &&
                                                (e.navigate(-1),
                                                t.preventDefault());
                                            break;
                                        default:
                                            if (t.ctrlKey) break;
                                            e.clearSelection();
                                    }
                            })(t, _this);
                        }),
                        (this.compositionEventHandler = function (t) {
                            var e, i;
                            return (
                                (e = t),
                                (i = _this),
                                void ((i.isComposing =
                                    "compositionstart" === e.type),
                                document.getElementById(
                                    i.input.getAttribute("aria-controls") || ""
                                ) && i.clearSelection())
                            );
                        }),
                        (this.inputHandler = this.clearSelection.bind(this)),
                        t.setAttribute("role", "combobox"),
                        t.setAttribute("aria-controls", e.id),
                        t.setAttribute("aria-expanded", "false"),
                        t.setAttribute("aria-autocomplete", "list"),
                        t.setAttribute("aria-haspopup", "listbox"));
                }
                return _createClass(Combobox, [
                    {
                        key: "destroy",
                        value: function destroy() {
                            (this.clearSelection(),
                                this.stop(),
                                this.input.removeAttribute("role"),
                                this.input.removeAttribute("aria-controls"),
                                this.input.removeAttribute("aria-expanded"),
                                this.input.removeAttribute("aria-autocomplete"),
                                this.input.removeAttribute("aria-haspopup"));
                        },
                    },
                    {
                        key: "start",
                        value: function start() {
                            (this.input.setAttribute("aria-expanded", "true"),
                                this.input.addEventListener(
                                    "compositionstart",
                                    this.compositionEventHandler
                                ),
                                this.input.addEventListener(
                                    "compositionend",
                                    this.compositionEventHandler
                                ),
                                this.input.addEventListener(
                                    "input",
                                    this.inputHandler
                                ),
                                this.input.addEventListener(
                                    "keydown",
                                    this.keyboardEventHandler
                                ),
                                this.list.addEventListener("click", n),
                                this.indicateDefaultOption());
                        },
                    },
                    {
                        key: "stop",
                        value: function stop() {
                            (this.clearSelection(),
                                this.input.setAttribute(
                                    "aria-expanded",
                                    "false"
                                ),
                                this.input.removeEventListener(
                                    "compositionstart",
                                    this.compositionEventHandler
                                ),
                                this.input.removeEventListener(
                                    "compositionend",
                                    this.compositionEventHandler
                                ),
                                this.input.removeEventListener(
                                    "input",
                                    this.inputHandler
                                ),
                                this.input.removeEventListener(
                                    "keydown",
                                    this.keyboardEventHandler
                                ),
                                this.list.removeEventListener("click", n));
                        },
                    },
                    {
                        key: "indicateDefaultOption",
                        value: function indicateDefaultOption() {
                            var t;
                            this.defaultFirstOption &&
                                (null ==
                                    (t = Array.from(
                                        this.list.querySelectorAll(
                                            '[role="option"]:not([aria-disabled="true"])'
                                        )
                                    ).filter(o)[0]) ||
                                    t.setAttribute(
                                        "data-combobox-option-default",
                                        "true"
                                    ));
                        },
                    },
                    {
                        key: "navigate",
                        value: function navigate() {
                            var t =
                                arguments.length > 0 &&
                                arguments[0] !== undefined
                                    ? arguments[0]
                                    : 1;
                            var e = Array.from(
                                    this.list.querySelectorAll(
                                        '[aria-selected="true"]'
                                    )
                                ).filter(o)[0],
                                i = Array.from(
                                    this.list.querySelectorAll(
                                        '[role="option"]'
                                    )
                                ).filter(o),
                                n = i.indexOf(e);
                            if (
                                (n === i.length - 1 && 1 === t) ||
                                (0 === n && -1 === t)
                            ) {
                                (this.clearSelection(), this.input.focus());
                                return;
                            }
                            var s = 1 === t ? 0 : i.length - 1;
                            if (e && n >= 0) {
                                var _e = n + t;
                                _e >= 0 && _e < i.length && (s = _e);
                            }
                            var r = i[s];
                            if (r) {
                                var _iterator = _createForOfIteratorHelper(i),
                                    _step;
                                try {
                                    for (
                                        _iterator.s();
                                        !(_step = _iterator.n()).done;

                                    ) {
                                        var _t = _step.value;
                                        (_t.removeAttribute(
                                            "data-combobox-option-default"
                                        ),
                                            r === _t
                                                ? (this.input.setAttribute(
                                                      "aria-activedescendant",
                                                      r.id
                                                  ),
                                                  r.setAttribute(
                                                      "aria-selected",
                                                      "true"
                                                  ),
                                                  r.dispatchEvent(
                                                      new Event(
                                                          "combobox-select",
                                                          {
                                                              bubbles: !0,
                                                          }
                                                      )
                                                  ),
                                                  r.scrollIntoView(
                                                      this.scrollIntoViewOptions
                                                  ))
                                                : _t.removeAttribute(
                                                      "aria-selected"
                                                  ));
                                    }
                                } catch (err) {
                                    _iterator.e(err);
                                } finally {
                                    _iterator.f();
                                }
                            }
                        },
                    },
                    {
                        key: "clearSelection",
                        value: function clearSelection() {
                            var _iterator2 = _createForOfIteratorHelper(
                                    (this.input.removeAttribute(
                                        "aria-activedescendant"
                                    ),
                                    this.list.querySelectorAll(
                                        '[aria-selected="true"]'
                                    ))
                                ),
                                _step2;
                            try {
                                for (
                                    _iterator2.s();
                                    !(_step2 = _iterator2.n()).done;

                                ) {
                                    var _t2 = _step2.value;
                                    _t2.removeAttribute("aria-selected");
                                }
                            } catch (err) {
                                _iterator2.e(err);
                            } finally {
                                _iterator2.f();
                            }
                            this.indicateDefaultOption();
                        },
                    },
                ]);
            })();
            function n(t) {
                var e, i;
                if (!(t.target instanceof Element)) return;
                var n = t.target.closest('[role="option"]');
                n &&
                    "true" !== n.getAttribute("aria-disabled") &&
                    ((e = n),
                    (i = {
                        event: t,
                    }),
                    e.dispatchEvent(
                        new CustomEvent("combobox-commit", {
                            bubbles: !0,
                            detail: i,
                        })
                    ));
            }
            function s(t, e) {
                var i = e.querySelector(
                    '[aria-selected="true"], [data-combobox-option-default="true"]'
                );
                return (
                    !!i &&
                    ("true" === i.getAttribute("aria-disabled") ||
                        (i.click(), !0))
                );
            }
            function o(t) {
                return (
                    !t.hidden &&
                    !(t instanceof HTMLInputElement && "hidden" === t.type) &&
                    (t.offsetWidth > 0 || t.offsetHeight > 0)
                );
            }
            var r = /\s|\(|\[/;
            var InputStyleCloneUpdateEvent = /*#__PURE__*/ (function (_Event) {
                function InputStyleCloneUpdateEvent() {
                    _classCallCheck(this, InputStyleCloneUpdateEvent);
                    return _callSuper(this, InputStyleCloneUpdateEvent, [
                        "update",
                    ]);
                }
                _inherits(InputStyleCloneUpdateEvent, _Event);
                return _createClass(InputStyleCloneUpdateEvent);
            })(/*#__PURE__*/ _wrapNativeSuper(Event));
            var l = new WeakMap();
            var InputStyleClone =
                ((_t3 = /*#__PURE__*/ new WeakMap()),
                (_i = /*#__PURE__*/ new WeakMap()),
                (_s = /*#__PURE__*/ new WeakMap()),
                (_o = /*#__PURE__*/ new WeakMap()),
                (_r = /*#__PURE__*/ new WeakMap()),
                (_InputStyleClone_brand = /*#__PURE__*/ new WeakSet()),
                (_d = /*#__PURE__*/ new WeakMap()),
                (_p = /*#__PURE__*/ new WeakMap()),
                (_f = /*#__PURE__*/ new WeakMap()),
                (_h = /*#__PURE__*/ new WeakMap()),
                (_a = /*#__PURE__*/ new WeakMap()),
                /*#__PURE__*/ (function (_EventTarget) {
                    function InputStyleClone(_t4) {
                        var _this3;
                        _classCallCheck(this, InputStyleClone);
                        ((_this3 = _callSuper(this, InputStyleClone)),
                            _classPrivateMethodInitSpec(
                                _assertThisInitialized(_this3),
                                _InputStyleClone_brand
                            ),
                            _classPrivateFieldInitSpec(
                                _assertThisInitialized(_this3),
                                _t3,
                                new MutationObserver(function () {
                                    return _assertClassBrand(
                                        _InputStyleClone_brand,
                                        _assertThisInitialized(_this3),
                                        _e2
                                    ).call(_assertThisInitialized(_this3));
                                })
                            ),
                            _classPrivateFieldInitSpec(
                                _assertThisInitialized(_this3),
                                _i,
                                new ResizeObserver(function () {
                                    return _assertClassBrand(
                                        _InputStyleClone_brand,
                                        _assertThisInitialized(_this3),
                                        _n
                                    ).call(_assertThisInitialized(_this3));
                                })
                            ),
                            _classPrivateFieldInitSpec(
                                _assertThisInitialized(_this3),
                                _s,
                                void 0
                            ),
                            _classPrivateFieldInitSpec(
                                _assertThisInitialized(_this3),
                                _o,
                                document.createElement("div")
                            ),
                            _classPrivateFieldInitSpec(
                                _assertThisInitialized(_this3),
                                _r,
                                document.createElement("div")
                            ),
                            _classPrivateFieldInitSpec(
                                _assertThisInitialized(_this3),
                                _d,
                                0
                            ),
                            _classPrivateFieldInitSpec(
                                _assertThisInitialized(_this3),
                                _p,
                                0
                            ),
                            _classPrivateFieldInitSpec(
                                _assertThisInitialized(_this3),
                                _f,
                                !1
                            ),
                            _classPrivateFieldInitSpec(
                                _assertThisInitialized(_this3),
                                _h,
                                function () {
                                    return _assertClassBrand(
                                        _InputStyleClone_brand,
                                        _assertThisInitialized(_this3),
                                        _l
                                    ).call(_assertThisInitialized(_this3));
                                }
                            ),
                            _classPrivateFieldInitSpec(
                                _assertThisInitialized(_this3),
                                _a,
                                function (t) {
                                    _assertClassBrand(
                                        _InputStyleClone_brand,
                                        _assertThisInitialized(_this3),
                                        _c
                                    ).call(
                                        _assertThisInitialized(_this3),
                                        function (e) {
                                            (t.target === document ||
                                                t.target === window ||
                                                (t.target instanceof Node &&
                                                    t.target.contains(e))) &&
                                                _assertClassBrand(
                                                    _InputStyleClone_brand,
                                                    _assertThisInitialized(
                                                        _this3
                                                    ),
                                                    _n
                                                ).call(
                                                    _assertThisInitialized(
                                                        _this3
                                                    )
                                                );
                                        }
                                    );
                                }
                            ),
                            _assertThisInitialized(_this3),
                            _classPrivateFieldSet(
                                _s,
                                _assertThisInitialized(_this3),
                                new WeakRef(_t4)
                            ),
                            (_classPrivateFieldGet(
                                _o,
                                _assertThisInitialized(_this3)
                            ).style.position = "absolute"),
                            (_classPrivateFieldGet(
                                _o,
                                _assertThisInitialized(_this3)
                            ).style.pointerEvents = "none"),
                            _classPrivateFieldGet(
                                _o,
                                _assertThisInitialized(_this3)
                            ).setAttribute("aria-hidden", "true"),
                            _classPrivateFieldGet(
                                _o,
                                _assertThisInitialized(_this3)
                            ).appendChild(
                                _classPrivateFieldGet(
                                    _r,
                                    _assertThisInitialized(_this3)
                                )
                            ),
                            (_classPrivateFieldGet(
                                _r,
                                _assertThisInitialized(_this3)
                            ).style.pointerEvents = "none"),
                            (_classPrivateFieldGet(
                                _r,
                                _assertThisInitialized(_this3)
                            ).style.userSelect = "none"),
                            (_classPrivateFieldGet(
                                _r,
                                _assertThisInitialized(_this3)
                            ).style.overflow = "hidden"),
                            (_classPrivateFieldGet(
                                _r,
                                _assertThisInitialized(_this3)
                            ).style.display = "block"),
                            (_classPrivateFieldGet(
                                _r,
                                _assertThisInitialized(_this3)
                            ).style.visibility = "hidden"),
                            _t4 instanceof HTMLTextAreaElement
                                ? ((_classPrivateFieldGet(
                                      _r,
                                      _assertThisInitialized(_this3)
                                  ).style.whiteSpace = "pre-wrap"),
                                  (_classPrivateFieldGet(
                                      _r,
                                      _assertThisInitialized(_this3)
                                  ).style.wordWrap = "break-word"))
                                : ((_classPrivateFieldGet(
                                      _r,
                                      _assertThisInitialized(_this3)
                                  ).style.whiteSpace = "nowrap"),
                                  (_classPrivateFieldGet(
                                      _r,
                                      _assertThisInitialized(_this3)
                                  ).style.display = "table-cell"),
                                  (_classPrivateFieldGet(
                                      _r,
                                      _assertThisInitialized(_this3)
                                  ).style.verticalAlign = "middle")),
                            _t4.after(
                                _classPrivateFieldGet(
                                    _o,
                                    _assertThisInitialized(_this3)
                                )
                            ),
                            _assertClassBrand(
                                _InputStyleClone_brand,
                                _assertThisInitialized(_this3),
                                _e2
                            ).call(_assertThisInitialized(_this3)),
                            _assertClassBrand(
                                _InputStyleClone_brand,
                                _assertThisInitialized(_this3),
                                _l
                            ).call(_assertThisInitialized(_this3)),
                            _classPrivateFieldGet(
                                _t3,
                                _assertThisInitialized(_this3)
                            ).observe(_t4, {
                                attributeFilter: ["style", "dir"],
                            }),
                            _classPrivateFieldGet(
                                _i,
                                _assertThisInitialized(_this3)
                            ).observe(_t4),
                            document.addEventListener(
                                "scroll",
                                _classPrivateFieldGet(
                                    _a,
                                    _assertThisInitialized(_this3)
                                ),
                                {
                                    capture: !0,
                                }
                            ),
                            window.addEventListener(
                                "resize",
                                _classPrivateFieldGet(
                                    _a,
                                    _assertThisInitialized(_this3)
                                ),
                                {
                                    capture: !0,
                                }
                            ),
                            _t4.addEventListener(
                                "input",
                                _classPrivateFieldGet(
                                    _h,
                                    _assertThisInitialized(_this3)
                                ),
                                {
                                    capture: !0,
                                }
                            ));
                        return _this3;
                    }
                    _inherits(InputStyleClone, _EventTarget);
                    return _createClass(
                        InputStyleClone,
                        [
                            {
                                key: "element",
                                get: function get() {
                                    return _classPrivateFieldGet(_r, this);
                                },
                            },
                            {
                                key: "forceUpdate",
                                value: function forceUpdate() {
                                    (_assertClassBrand(
                                        _InputStyleClone_brand,
                                        this,
                                        _e2
                                    ).call(this),
                                        _assertClassBrand(
                                            _InputStyleClone_brand,
                                            this,
                                            _l
                                        ).call(this));
                                },
                            },
                            {
                                key: "disconnect",
                                value: function disconnect() {
                                    var _classPrivateFieldGet2;
                                    ((_classPrivateFieldGet2 =
                                        _classPrivateFieldGet(_o, this)) !==
                                        null &&
                                        _classPrivateFieldGet2 !== void 0 &&
                                        _classPrivateFieldGet2.remove(),
                                        _classPrivateFieldGet(
                                            _t3,
                                            this
                                        ).disconnect(),
                                        _classPrivateFieldGet(
                                            _i,
                                            this
                                        ).disconnect(),
                                        document.removeEventListener(
                                            "scroll",
                                            _classPrivateFieldGet(_a, this),
                                            {
                                                capture: !0,
                                            }
                                        ),
                                        window.removeEventListener(
                                            "resize",
                                            _classPrivateFieldGet(_a, this),
                                            {
                                                capture: !0,
                                            }
                                        ));
                                    var t = _classPrivateGetter(
                                        _InputStyleClone_brand,
                                        this,
                                        _get_u
                                    );
                                    t &&
                                        (t.removeEventListener(
                                            "input",
                                            _classPrivateFieldGet(_h, this),
                                            {
                                                capture: !0,
                                            }
                                        ),
                                        l.delete(t));
                                },
                            },
                        ],
                        [
                            {
                                key: "for",
                                value: function _for(t) {
                                    var e = l.get(t);
                                    return (
                                        e ||
                                            ((e = new InputStyleClone(t)),
                                            l.set(t, e)),
                                        e
                                    );
                                },
                            },
                        ]
                    );
                })(/*#__PURE__*/ _wrapNativeSuper(EventTarget)));
            function _get_u(_this2) {
                var _classPrivateFieldGet3;
                return (_classPrivateFieldGet3 = _classPrivateFieldGet(
                    _s,
                    _this2
                )) === null || _classPrivateFieldGet3 === void 0
                    ? void 0
                    : _classPrivateFieldGet3.deref();
            }
            function _c(t) {
                var e = _classPrivateGetter(
                    _InputStyleClone_brand,
                    this,
                    _get_u
                );
                return e ? t(e) : this.disconnect();
            }
            function _m() {
                var _this6 = this;
                _assertClassBrand(_InputStyleClone_brand, this, _c).call(
                    this,
                    function (t) {
                        var e = window.getComputedStyle(t);
                        ((_classPrivateFieldGet(_r, _this6).style.height =
                            e.height),
                            (_classPrivateFieldGet(_r, _this6).style.width =
                                e.width),
                            t.clientHeight !==
                                _classPrivateFieldGet(_r, _this6)
                                    .clientHeight &&
                                (_classPrivateFieldGet(
                                    _r,
                                    _this6
                                ).style.height = "calc("
                                    .concat(e.height, " + ")
                                    .concat(
                                        t.clientHeight -
                                            _classPrivateFieldGet(_r, _this6)
                                                .clientHeight,
                                        "px)"
                                    )),
                            t.clientWidth !==
                                _classPrivateFieldGet(_r, _this6).clientWidth &&
                                (_classPrivateFieldGet(_r, _this6).style.width =
                                    "calc("
                                        .concat(e.width, " + ")
                                        .concat(
                                            t.clientWidth -
                                                _classPrivateFieldGet(
                                                    _r,
                                                    _this6
                                                ).clientWidth,
                                            "px)"
                                        )));
                        var i = t.getBoundingClientRect(),
                            n = _classPrivateFieldGet(
                                _r,
                                _this6
                            ).getBoundingClientRect();
                        (_classPrivateFieldSet(
                            _d,
                            _this6,
                            _classPrivateFieldGet(_d, _this6) + i.left - n.left
                        ),
                            _classPrivateFieldSet(
                                _p,
                                _this6,
                                _classPrivateFieldGet(_p, _this6) +
                                    i.top -
                                    n.top
                            ),
                            (_classPrivateFieldGet(_r, _this6).style.transform =
                                "translate("
                                    .concat(
                                        _classPrivateFieldGet(_d, _this6),
                                        "px, "
                                    )
                                    .concat(
                                        _classPrivateFieldGet(_p, _this6),
                                        "px)"
                                    )),
                            (_classPrivateFieldGet(_r, _this6).scrollTop =
                                t.scrollTop),
                            (_classPrivateFieldGet(_r, _this6).scrollLeft =
                                t.scrollLeft),
                            _this6.dispatchEvent(
                                new InputStyleCloneUpdateEvent()
                            ));
                    }
                );
            }
            function _n() {
                var _this7 = this;
                _classPrivateFieldGet(_f, this) ||
                    (_classPrivateFieldSet(_f, this, !0),
                    requestAnimationFrame(function () {
                        (_assertClassBrand(
                            _InputStyleClone_brand,
                            _this7,
                            _m
                        ).call(_this7),
                            _classPrivateFieldSet(_f, _this7, !1));
                    }));
            }
            function _e2() {
                var _this8 = this;
                _assertClassBrand(_InputStyleClone_brand, this, _c).call(
                    this,
                    function (t) {
                        var e = window.getComputedStyle(t);
                        var _iterator4 = _createForOfIteratorHelper(a),
                            _step4;
                        try {
                            for (
                                _iterator4.s();
                                !(_step4 = _iterator4.n()).done;

                            ) {
                                var _t6 = _step4.value;
                                _classPrivateFieldGet(_r, _this8).style[_t6] =
                                    e[_t6];
                            }
                        } catch (err) {
                            _iterator4.e(err);
                        } finally {
                            _iterator4.f();
                        }
                        _assertClassBrand(
                            _InputStyleClone_brand,
                            _this8,
                            _n
                        ).call(_this8);
                    }
                );
            }
            function _l() {
                var _this9 = this;
                _assertClassBrand(_InputStyleClone_brand, this, _c).call(
                    this,
                    function (t) {
                        ((_classPrivateFieldGet(_r, _this9).textContent =
                            t.value),
                            _assertClassBrand(
                                _InputStyleClone_brand,
                                _this9,
                                _m
                            ).call(_this9));
                    }
                );
            }
            var a = [
                "direction",
                "writingMode",
                "unicodeBidi",
                "textOrientation",
                "boxSizing",
                "borderTopWidth",
                "borderRightWidth",
                "borderBottomWidth",
                "borderLeftWidth",
                "borderStyle",
                "paddingTop",
                "paddingRight",
                "paddingBottom",
                "paddingLeft",
                "fontStyle",
                "fontVariant",
                "fontWeight",
                "fontStretch",
                "fontSize",
                "fontSizeAdjust",
                "lineHeight",
                "fontFamily",
                "textAlign",
                "textTransform",
                "textIndent",
                "textDecoration",
                "letterSpacing",
                "wordSpacing",
                "tabSize",
                "MozTabSize",
            ];
            var InputRange =
                ((_v = /*#__PURE__*/ new WeakMap()),
                (_b = /*#__PURE__*/ new WeakMap()),
                (_g = /*#__PURE__*/ new WeakMap()),
                (_InputRange_brand = /*#__PURE__*/ new WeakSet()),
                /*#__PURE__*/ (function () {
                    function InputRange(_t5) {
                        var _e3 =
                            arguments.length > 1 && arguments[1] !== undefined
                                ? arguments[1]
                                : 0;
                        var i =
                            arguments.length > 2 && arguments[2] !== undefined
                                ? arguments[2]
                                : _e3;
                        _classCallCheck(this, InputRange);
                        _classPrivateMethodInitSpec(this, _InputRange_brand);
                        _classPrivateFieldInitSpec(this, _v, void 0);
                        _classPrivateFieldInitSpec(this, _b, void 0);
                        _classPrivateFieldInitSpec(this, _g, void 0);
                        (_classPrivateFieldSet(_v, this, _t5),
                            _classPrivateFieldSet(_b, this, _e3),
                            _classPrivateFieldSet(_g, this, i));
                    }
                    return _createClass(
                        InputRange,
                        [
                            {
                                key: "collapsed",
                                get: function get() {
                                    return this.startOffset === this.endOffset;
                                },
                            },
                            {
                                key: "commonAncestorContainer",
                                get: function get() {
                                    return _classPrivateFieldGet(_v, this);
                                },
                            },
                            {
                                key: "endContainer",
                                get: function get() {
                                    return _classPrivateFieldGet(_v, this);
                                },
                            },
                            {
                                key: "startContainer",
                                get: function get() {
                                    return _classPrivateFieldGet(_v, this);
                                },
                            },
                            {
                                key: "startOffset",
                                get: function get() {
                                    return _classPrivateFieldGet(_b, this);
                                },
                            },
                            {
                                key: "endOffset",
                                get: function get() {
                                    return _classPrivateFieldGet(_g, this);
                                },
                            },
                            {
                                key: "setStartOffset",
                                value: function setStartOffset(t) {
                                    _classPrivateFieldSet(
                                        _b,
                                        this,
                                        _assertClassBrand(
                                            _InputRange_brand,
                                            this,
                                            _E
                                        ).call(this, t)
                                    );
                                },
                            },
                            {
                                key: "setEndOffset",
                                value: function setEndOffset(t) {
                                    _classPrivateFieldSet(
                                        _g,
                                        this,
                                        _assertClassBrand(
                                            _InputRange_brand,
                                            this,
                                            _E
                                        ).call(this, t)
                                    );
                                },
                            },
                            {
                                key: "collapse",
                                value: function collapse() {
                                    var t =
                                        arguments.length > 0 &&
                                        arguments[0] !== undefined
                                            ? arguments[0]
                                            : !1;
                                    t
                                        ? this.setEndOffset(this.startOffset)
                                        : this.setStartOffset(this.endOffset);
                                },
                            },
                            {
                                key: "cloneContents",
                                value: function cloneContents() {
                                    return _assertClassBrand(
                                        _InputRange_brand,
                                        this,
                                        _x
                                    )
                                        .call(this)
                                        .cloneContents();
                                },
                            },
                            {
                                key: "cloneRange",
                                value: function cloneRange() {
                                    return new InputRange(
                                        _classPrivateFieldGet(_v, this),
                                        this.startOffset,
                                        this.endOffset
                                    );
                                },
                            },
                            {
                                key: "getBoundingClientRect",
                                value: function getBoundingClientRect() {
                                    return _assertClassBrand(
                                        _InputRange_brand,
                                        this,
                                        _x
                                    )
                                        .call(this)
                                        .getBoundingClientRect();
                                },
                            },
                            {
                                key: "getClientRects",
                                value: function getClientRects() {
                                    return _assertClassBrand(
                                        _InputRange_brand,
                                        this,
                                        _x
                                    )
                                        .call(this)
                                        .getClientRects();
                                },
                            },
                            {
                                key: "toString",
                                value: function toString() {
                                    return _assertClassBrand(
                                        _InputRange_brand,
                                        this,
                                        _x
                                    )
                                        .call(this)
                                        .toString();
                                },
                            },
                            {
                                key: "getStyleClone",
                                value: function getStyleClone() {
                                    return _classPrivateGetter(
                                        _InputRange_brand,
                                        this,
                                        _get_y
                                    );
                                },
                            },
                        ],
                        [
                            {
                                key: "fromSelection",
                                value: function fromSelection(t) {
                                    var e = t.selectionStart,
                                        i = t.selectionEnd;
                                    return new InputRange(
                                        t,
                                        e !== null && e !== void 0 ? e : void 0,
                                        i !== null && i !== void 0 ? i : void 0
                                    );
                                },
                            },
                        ]
                    );
                })());
            function _get_y(_this4) {
                return InputStyleClone.for(_classPrivateFieldGet(_v, _this4));
            }
            function _get_r(_this5) {
                return _classPrivateGetter(_InputRange_brand, _this5, _get_y);
            }
            function _E(t) {
                return Math.max(
                    0,
                    Math.min(t, _classPrivateFieldGet(_v, this).value.length)
                );
            }
            function _x() {
                var t = document.createRange(),
                    e = _classPrivateGetter(_InputRange_brand, this, _get_r)
                        .element.childNodes[0];
                return (
                    e &&
                        (t.setStart(e, this.startOffset),
                        t.setEnd(e, this.endOffset)),
                    t
                );
            }
            var h = new WeakMap();
            var TextExpander = /*#__PURE__*/ (function () {
                function TextExpander(t, e) {
                    _classCallCheck(this, TextExpander);
                    ((this.expander = t),
                        (this.input = e),
                        (this.combobox = null),
                        (this.menu = null),
                        (this.match = null),
                        (this.justPasted = !1),
                        (this.lookBackIndex = 0),
                        (this.oninput = this.onInput.bind(this)),
                        (this.onpaste = this.onPaste.bind(this)),
                        (this.onkeydown = this.onKeydown.bind(this)),
                        (this.oncommit = this.onCommit.bind(this)),
                        (this.onmousedown = this.onMousedown.bind(this)),
                        (this.onblur = this.onBlur.bind(this)),
                        (this.interactingWithList = !1),
                        e.addEventListener("paste", this.onpaste),
                        e.addEventListener("input", this.oninput),
                        e.addEventListener("keydown", this.onkeydown),
                        e.addEventListener("blur", this.onblur));
                }
                return _createClass(TextExpander, [
                    {
                        key: "destroy",
                        value: function destroy() {
                            (this.input.removeEventListener(
                                "paste",
                                this.onpaste
                            ),
                                this.input.removeEventListener(
                                    "input",
                                    this.oninput
                                ),
                                this.input.removeEventListener(
                                    "keydown",
                                    this.onkeydown
                                ),
                                this.input.removeEventListener(
                                    "blur",
                                    this.onblur
                                ));
                        },
                    },
                    {
                        key: "dismissMenu",
                        value: function dismissMenu() {
                            this.deactivate() &&
                                (this.lookBackIndex =
                                    this.input.selectionEnd ||
                                    this.lookBackIndex);
                        },
                    },
                    {
                        key: "activate",
                        value: function activate(t, e) {
                            var i, n;
                            (this.input === document.activeElement ||
                                this.input ===
                                    (null ==
                                    (n =
                                        null == (i = document.activeElement)
                                            ? void 0
                                            : i.shadowRoot)
                                        ? void 0
                                        : n.activeElement)) &&
                                (this.deactivate(),
                                (this.menu = e),
                                e.id ||
                                    (e.id = "text-expander-".concat(
                                        Math.floor(
                                            1e5 * Math.random()
                                        ).toString()
                                    )),
                                this.expander.append(e),
                                (this.combobox = new Combobox(this.input, e)),
                                this.expander.dispatchEvent(
                                    new Event("text-expander-activate")
                                ),
                                this.positionMenu(e, t.position),
                                this.combobox.start(),
                                e.addEventListener(
                                    "combobox-commit",
                                    this.oncommit
                                ),
                                e.addEventListener(
                                    "mousedown",
                                    this.onmousedown
                                ),
                                this.combobox.navigate(1));
                        },
                    },
                    {
                        key: "positionMenu",
                        value: function positionMenu(t, e) {
                            var i = new InputRange(
                                    this.input,
                                    e
                                ).getBoundingClientRect(),
                                n = {
                                    left: i.left,
                                    top: i.top + i.height,
                                },
                                s = t.getBoundingClientRect(),
                                o = {
                                    left: n.left - s.left,
                                    top: n.top - s.top,
                                };
                            if (0 !== o.left || 0 !== o.top) {
                                var _e4 = getComputedStyle(t);
                                ((t.style.left = _e4.left
                                    ? "calc("
                                          .concat(_e4.left, " + ")
                                          .concat(o.left, "px)")
                                    : "".concat(o.left, "px")),
                                    (t.style.top = _e4.top
                                        ? "calc("
                                              .concat(_e4.top, " + ")
                                              .concat(o.top, "px)")
                                        : "".concat(o.top, "px")));
                            }
                        },
                    },
                    {
                        key: "deactivate",
                        value: function deactivate() {
                            var t = this.menu;
                            return (
                                !!t &&
                                !!this.combobox &&
                                (this.expander.dispatchEvent(
                                    new Event("text-expander-deactivate")
                                ),
                                (this.menu = null),
                                t.removeEventListener(
                                    "combobox-commit",
                                    this.oncommit
                                ),
                                t.removeEventListener(
                                    "mousedown",
                                    this.onmousedown
                                ),
                                this.combobox.destroy(),
                                (this.combobox = null),
                                t.remove(),
                                !0)
                            );
                        },
                    },
                    {
                        key: "onCommit",
                        value: function onCommit(_ref2) {
                            var t = _ref2.target;
                            var e;
                            if (!(t instanceof HTMLElement) || !this.combobox)
                                return;
                            var i = this.match;
                            if (!i) return;
                            var n = this.input.value.substring(
                                    0,
                                    i.position - i.key.length
                                ),
                                s = this.input.value.substring(
                                    i.position + i.text.length
                                ),
                                o = {
                                    item: t,
                                    key: i.key,
                                    value: null,
                                    continue: !1,
                                };
                            if (
                                !this.expander.dispatchEvent(
                                    new CustomEvent("text-expander-value", {
                                        cancelable: !0,
                                        detail: o,
                                    })
                                ) ||
                                !o.value
                            )
                                return;
                            var r =
                                null !=
                                (e = this.expander.getAttribute("suffix"))
                                    ? e
                                    : " ";
                            o.continue && (r = "");
                            var l = "".concat(o.value).concat(r);
                            this.input.value = n + l + s;
                            var a = n.length + l.length;
                            (this.deactivate(),
                                this.input.focus({
                                    preventScroll: !0,
                                }),
                                (this.input.selectionStart = a),
                                (this.input.selectionEnd = a),
                                o.continue ||
                                    ((this.lookBackIndex = a),
                                    (this.match = null)),
                                this.expander.dispatchEvent(
                                    new CustomEvent("text-expander-committed", {
                                        cancelable: !1,
                                        detail: {
                                            input: this.input,
                                        },
                                    })
                                ));
                        },
                    },
                    {
                        key: "onBlur",
                        value: function onBlur() {
                            if (this.interactingWithList) {
                                this.interactingWithList = !1;
                                return;
                            }
                            this.deactivate();
                        },
                    },
                    {
                        key: "onPaste",
                        value: function onPaste() {
                            this.justPasted = !0;
                        },
                    },
                    {
                        key: "onInput",
                        value: (function () {
                            var _onInput = _asyncToGenerator(
                                /*#__PURE__*/ _regenerator().m(
                                    function _callee() {
                                        var t, _e5;
                                        return _regenerator().w(
                                            function (_context) {
                                                while (1)
                                                    switch (_context.n) {
                                                        case 0:
                                                            if (
                                                                !this.justPasted
                                                            ) {
                                                                _context.n = 1;
                                                                break;
                                                            }
                                                            this.justPasted =
                                                                !1;
                                                            return _context.a(
                                                                2
                                                            );
                                                        case 1:
                                                            t =
                                                                this.findMatch();
                                                            if (!t) {
                                                                _context.n = 4;
                                                                break;
                                                            }
                                                            this.match = t;
                                                            _context.n = 2;
                                                            return this.notifyProviders(
                                                                t
                                                            );
                                                        case 2:
                                                            _e5 = _context.v;
                                                            if (this.match) {
                                                                _context.n = 3;
                                                                break;
                                                            }
                                                            return _context.a(
                                                                2
                                                            );
                                                        case 3:
                                                            _e5
                                                                ? this.activate(
                                                                      t,
                                                                      _e5
                                                                  )
                                                                : this.deactivate();
                                                            _context.n = 5;
                                                            break;
                                                        case 4:
                                                            ((this.match =
                                                                null),
                                                                this.deactivate());
                                                        case 5:
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
                            function onInput() {
                                return _onInput.apply(this, arguments);
                            }
                            return onInput;
                        })(),
                    },
                    {
                        key: "findMatch",
                        value: function findMatch() {
                            var t = this.input.selectionEnd || 0,
                                e = this.input.value;
                            var _iterator3 = _createForOfIteratorHelper(
                                    (t <= this.lookBackIndex &&
                                        (this.lookBackIndex = t - 1),
                                    this.expander.keys)
                                ),
                                _step3;
                            try {
                                for (
                                    _iterator3.s();
                                    !(_step3 = _iterator3.n()).done;

                                ) {
                                    var _step3$value = _step3.value,
                                        _i2 = _step3$value.key,
                                        _n2 = _step3$value.multiWord;
                                    var _s2 = (function (t, e, i) {
                                        var _ref3 =
                                                arguments.length > 3 &&
                                                arguments[3] !== undefined
                                                    ? arguments[3]
                                                    : {
                                                          multiWord: !1,
                                                          lookBackIndex: 0,
                                                          lastMatchPosition:
                                                              null,
                                                      },
                                            n = _ref3.multiWord,
                                            s = _ref3.lookBackIndex,
                                            o = _ref3.lastMatchPosition;
                                        var l = t.lastIndexOf(e, i - 1);
                                        if (-1 === l || l < s) return;
                                        if (n) {
                                            if (null != o) {
                                                if (o === l) return;
                                                l = o - e.length;
                                            }
                                            if (
                                                (" " === t[l + 1] &&
                                                    i >= l + e.length + 1) ||
                                                t.lastIndexOf("\n", i - 1) >
                                                    l ||
                                                t.lastIndexOf(".", i - 1) > l
                                            )
                                                return;
                                        } else if (
                                            t.lastIndexOf(" ", i - 1) > l
                                        )
                                            return;
                                        var a = t[l - 1];
                                        if (!a || r.test(a))
                                            return {
                                                text: t.substring(
                                                    l + e.length,
                                                    i
                                                ),
                                                position: l + e.length,
                                            };
                                    })(e, _i2, t, {
                                        multiWord: _n2,
                                        lookBackIndex: this.lookBackIndex,
                                        lastMatchPosition: this.match
                                            ? this.match.position
                                            : null,
                                    });
                                    if (_s2)
                                        return {
                                            text: _s2.text,
                                            key: _i2,
                                            position: _s2.position,
                                        };
                                }
                            } catch (err) {
                                _iterator3.e(err);
                            } finally {
                                _iterator3.f();
                            }
                        },
                    },
                    {
                        key: "notifyProviders",
                        value: (function () {
                            var _notifyProviders = _asyncToGenerator(
                                /*#__PURE__*/ _regenerator().m(
                                    function _callee2(t) {
                                        var e, i;
                                        return _regenerator().w(
                                            function (_context2) {
                                                while (1)
                                                    switch (_context2.n) {
                                                        case 0:
                                                            ((e = []),
                                                                (i =
                                                                    new CustomEvent(
                                                                        "text-expander-change",
                                                                        {
                                                                            cancelable:
                                                                                !0,
                                                                            detail: {
                                                                                provide:
                                                                                    function provide(
                                                                                        t
                                                                                    ) {
                                                                                        return e.push(
                                                                                            t
                                                                                        );
                                                                                    },
                                                                                text: t.text,
                                                                                key: t.key,
                                                                            },
                                                                        }
                                                                    )));
                                                            if (
                                                                !this.expander.dispatchEvent(
                                                                    i
                                                                )
                                                            ) {
                                                                _context2.n = 2;
                                                                break;
                                                            }
                                                            _context2.n = 1;
                                                            return Promise.all(
                                                                e
                                                            );
                                                        case 1:
                                                            return _context2.a(
                                                                2,
                                                                _context2.v
                                                                    .filter(
                                                                        function (
                                                                            t
                                                                        ) {
                                                                            return t.matched;
                                                                        }
                                                                    )
                                                                    .map(
                                                                        function (
                                                                            t
                                                                        ) {
                                                                            return t.fragment;
                                                                        }
                                                                    )[0]
                                                            );
                                                        case 2:
                                                            return _context2.a(
                                                                2
                                                            );
                                                    }
                                            },
                                            _callee2,
                                            this
                                        );
                                    }
                                )
                            );
                            function notifyProviders(_x2) {
                                return _notifyProviders.apply(this, arguments);
                            }
                            return notifyProviders;
                        })(),
                    },
                    {
                        key: "onMousedown",
                        value: function onMousedown() {
                            this.interactingWithList = !0;
                        },
                    },
                    {
                        key: "onKeydown",
                        value: function onKeydown(t) {
                            "Escape" === t.key &&
                                ((this.match = null),
                                this.deactivate() &&
                                    ((this.lookBackIndex =
                                        this.input.selectionEnd ||
                                        this.lookBackIndex),
                                    t.stopImmediatePropagation(),
                                    t.preventDefault()));
                        },
                    },
                ]);
            })();
            var TextExpanderElement = /*#__PURE__*/ (function (_HTMLElement) {
                function TextExpanderElement() {
                    _classCallCheck(this, TextExpanderElement);
                    return _callSuper(this, TextExpanderElement, arguments);
                }
                _inherits(TextExpanderElement, _HTMLElement);
                return _createClass(TextExpanderElement, [
                    {
                        key: "keys",
                        get: function get() {
                            var t = this.getAttribute("keys"),
                                e = t ? t.split(" ") : [],
                                i = this.getAttribute("multiword"),
                                n = i ? i.split(" ") : [],
                                s =
                                    0 === n.length &&
                                    this.hasAttribute("multiword");
                            return e.map(function (t) {
                                return {
                                    key: t,
                                    multiWord: s || n.includes(t),
                                };
                            });
                        },
                        set: function set(t) {
                            this.setAttribute("keys", t);
                        },
                    },
                    {
                        key: "connectedCallback",
                        value: function connectedCallback() {
                            var t = this.querySelector(
                                'input[type="text"], textarea'
                            );
                            if (
                                !(
                                    t instanceof HTMLInputElement ||
                                    t instanceof HTMLTextAreaElement
                                )
                            )
                                return;
                            var e = new TextExpander(this, t);
                            h.set(this, e);
                        },
                    },
                    {
                        key: "disconnectedCallback",
                        value: function disconnectedCallback() {
                            var t = h.get(this);
                            t && (t.destroy(), h.delete(this));
                        },
                    },
                    {
                        key: "dismiss",
                        value: function dismiss() {
                            var t = h.get(this);
                            t && t.dismissMenu();
                        },
                    },
                ]);
            })(/*#__PURE__*/ _wrapNativeSuper(HTMLElement));
            window.customElements.get("text-expander") ||
                ((window.TextExpanderElement = TextExpanderElement),
                window.customElements.define(
                    "text-expander",
                    TextExpanderElement
                ));
        },
    },
]);
