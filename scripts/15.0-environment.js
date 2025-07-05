(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["environment"],
    {
        48359: () => {
            if (!("ariaNotify" in Element.prototype)) {
                let e = `${Date.now()}`;
                try {
                    e = crypto.randomUUID();
                } catch {}
                let t = Symbol(),
                    o = `live-region-${e}`;
                let Message = class Message {
                    element;
                    message;
                    priority = "normal";
                    constructor({
                        element: e,
                        message: t,
                        priority: o = "normal",
                    }) {
                        (this.element = e),
                            (this.message = t),
                            (this.priority = o);
                    }
                    #e() {
                        return (
                            this.element.isConnected &&
                            !this.element.closest("[inert]") &&
                            (this.element.ownerDocument
                                .querySelector(":modal")
                                ?.contains(this.element) ??
                                !0)
                        );
                    }
                    async announce() {
                        if (!this.#e()) return;
                        let e =
                            this.element.closest("dialog") ||
                            this.element.closest("[role='dialog']") ||
                            this.element.getRootNode();
                        (!e || e instanceof Document) && (e = document.body);
                        let r = e.querySelector(o);
                        r || ((r = document.createElement(o)), e.append(r)),
                            await new Promise((e) => setTimeout(e, 250)),
                            r.handleMessage(t, this.message);
                    }
                };
                let r = new (class MessageQueue {
                    #t = [];
                    #o;
                    enqueue(e) {
                        let { priority: t } = e;
                        if ("high" === t) {
                            let t = this.#t.findLastIndex(
                                (e) => "high" === e.priority
                            );
                            this.#t.splice(t + 1, 0, e);
                        } else this.#t.push(e);
                        this.#o || this.#r();
                    }
                    async #r() {
                        (this.#o = this.#t.shift()),
                            this.#o && (await this.#o.announce(), this.#r());
                    }
                })();
                let LiveRegionCustomElement = class LiveRegionCustomElement extends HTMLElement {
                    #l = this.attachShadow({
                        mode: "closed",
                    });
                    connectedCallback() {
                        (this.ariaLive = "polite"),
                            (this.ariaAtomic = "true"),
                            (this.style.marginLeft = "-1px"),
                            (this.style.marginTop = "-1px"),
                            (this.style.position = "absolute"),
                            (this.style.width = "1px"),
                            (this.style.height = "1px"),
                            (this.style.overflow = "hidden"),
                            (this.style.clipPath = "rect(0 0 0 0)"),
                            (this.style.overflowWrap = "normal");
                    }
                    handleMessage(e = null, o = "") {
                        t === e &&
                            (this.#l.textContent == o && (o += "\xa0"),
                            (this.#l.textContent = o));
                    }
                };
                customElements.define(o, LiveRegionCustomElement),
                    (Element.prototype.ariaNotify = function (
                        e,
                        { priority: t = "normal" } = {}
                    ) {
                        r.enqueue(
                            new Message({
                                element: this,
                                message: e,
                                priority: t,
                            })
                        );
                    });
            }
        },
        31196: (e) => {
            !(function () {
                "use strict";
                e.exports = {
                    polyfill: function () {
                        var e = window,
                            t = document;
                        if (
                            !("scrollBehavior" in t.documentElement.style) ||
                            !0 === e.__forceSmoothScrollPolyfill__
                        ) {
                            var o,
                                r = e.HTMLElement || e.Element,
                                l = 468,
                                i = {
                                    scroll: e.scroll || e.scrollTo,
                                    scrollBy: e.scrollBy,
                                    elementScroll: r.prototype.scroll || c,
                                    scrollIntoView: r.prototype.scrollIntoView,
                                },
                                s =
                                    e.performance && e.performance.now
                                        ? e.performance.now.bind(e.performance)
                                        : Date.now,
                                n = +((o = e.navigator.userAgent),
                                !!RegExp("MSIE |Trident/|Edge/").test(o));
                            (e.scroll = e.scrollTo =
                                function () {
                                    if (void 0 !== arguments[0]) {
                                        if (!0 === a(arguments[0]))
                                            return void i.scroll.call(
                                                e,
                                                void 0 !== arguments[0].left
                                                    ? arguments[0].left
                                                    : "object" !=
                                                      typeof arguments[0]
                                                    ? arguments[0]
                                                    : e.scrollX ||
                                                      e.pageXOffset,
                                                void 0 !== arguments[0].top
                                                    ? arguments[0].top
                                                    : void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : e.scrollY || e.pageYOffset
                                            );
                                        h.call(
                                            e,
                                            t.body,
                                            void 0 !== arguments[0].left
                                                ? ~~arguments[0].left
                                                : e.scrollX || e.pageXOffset,
                                            void 0 !== arguments[0].top
                                                ? ~~arguments[0].top
                                                : e.scrollY || e.pageYOffset
                                        );
                                    }
                                }),
                                (e.scrollBy = function () {
                                    if (void 0 !== arguments[0]) {
                                        if (a(arguments[0]))
                                            return void i.scrollBy.call(
                                                e,
                                                void 0 !== arguments[0].left
                                                    ? arguments[0].left
                                                    : "object" !=
                                                      typeof arguments[0]
                                                    ? arguments[0]
                                                    : 0,
                                                void 0 !== arguments[0].top
                                                    ? arguments[0].top
                                                    : void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : 0
                                            );
                                        h.call(
                                            e,
                                            t.body,
                                            ~~arguments[0].left +
                                                (e.scrollX || e.pageXOffset),
                                            ~~arguments[0].top +
                                                (e.scrollY || e.pageYOffset)
                                        );
                                    }
                                }),
                                (r.prototype.scroll = r.prototype.scrollTo =
                                    function () {
                                        if (void 0 !== arguments[0]) {
                                            if (!0 === a(arguments[0])) {
                                                if (
                                                    "number" ==
                                                        typeof arguments[0] &&
                                                    void 0 === arguments[1]
                                                )
                                                    throw SyntaxError(
                                                        "Value could not be converted"
                                                    );
                                                i.elementScroll.call(
                                                    this,
                                                    void 0 !== arguments[0].left
                                                        ? ~~arguments[0].left
                                                        : "object" !=
                                                          typeof arguments[0]
                                                        ? ~~arguments[0]
                                                        : this.scrollLeft,
                                                    void 0 !== arguments[0].top
                                                        ? ~~arguments[0].top
                                                        : void 0 !==
                                                          arguments[1]
                                                        ? ~~arguments[1]
                                                        : this.scrollTop
                                                );
                                                return;
                                            }
                                            var e = arguments[0].left,
                                                t = arguments[0].top;
                                            h.call(
                                                this,
                                                this,
                                                void 0 === e
                                                    ? this.scrollLeft
                                                    : ~~e,
                                                void 0 === t
                                                    ? this.scrollTop
                                                    : ~~t
                                            );
                                        }
                                    }),
                                (r.prototype.scrollBy = function () {
                                    if (void 0 !== arguments[0]) {
                                        if (!0 === a(arguments[0]))
                                            return void i.elementScroll.call(
                                                this,
                                                void 0 !== arguments[0].left
                                                    ? ~~arguments[0].left +
                                                          this.scrollLeft
                                                    : ~~arguments[0] +
                                                          this.scrollLeft,
                                                void 0 !== arguments[0].top
                                                    ? ~~arguments[0].top +
                                                          this.scrollTop
                                                    : ~~arguments[1] +
                                                          this.scrollTop
                                            );
                                        this.scroll({
                                            left:
                                                ~~arguments[0].left +
                                                this.scrollLeft,
                                            top:
                                                ~~arguments[0].top +
                                                this.scrollTop,
                                            behavior: arguments[0].behavior,
                                        });
                                    }
                                }),
                                (r.prototype.scrollIntoView = function () {
                                    if (!0 === a(arguments[0]))
                                        return void i.scrollIntoView.call(
                                            this,
                                            void 0 === arguments[0] ||
                                                arguments[0]
                                        );
                                    var o = (function (e) {
                                            for (
                                                var o, r, l;
                                                e !== t.body &&
                                                !1 ===
                                                    ((r =
                                                        u((o = e), "Y") &&
                                                        f(o, "Y")),
                                                    (l =
                                                        u(o, "X") && f(o, "X")),
                                                    r || l);

                                            )
                                                e = e.parentNode || e.host;
                                            return e;
                                        })(this),
                                        r = o.getBoundingClientRect(),
                                        l = this.getBoundingClientRect();
                                    o !== t.body
                                        ? (h.call(
                                              this,
                                              o,
                                              o.scrollLeft + l.left - r.left,
                                              o.scrollTop + l.top - r.top
                                          ),
                                          "fixed" !==
                                              e.getComputedStyle(o).position &&
                                              e.scrollBy({
                                                  left: r.left,
                                                  top: r.top,
                                                  behavior: "smooth",
                                              }))
                                        : e.scrollBy({
                                              left: l.left,
                                              top: l.top,
                                              behavior: "smooth",
                                          });
                                });
                        }
                        function c(e, t) {
                            (this.scrollLeft = e), (this.scrollTop = t);
                        }
                        function a(e) {
                            if (
                                null === e ||
                                "object" != typeof e ||
                                void 0 === e.behavior ||
                                "auto" === e.behavior ||
                                "instant" === e.behavior
                            )
                                return !0;
                            if ("object" == typeof e && "smooth" === e.behavior)
                                return !1;
                            throw TypeError(
                                "behavior member of ScrollOptions " +
                                    e.behavior +
                                    " is not a valid value for enumeration ScrollBehavior."
                            );
                        }
                        function u(e, t) {
                            return "Y" === t
                                ? e.clientHeight + n < e.scrollHeight
                                : "X" === t
                                ? e.clientWidth + n < e.scrollWidth
                                : void 0;
                        }
                        function f(t, o) {
                            var r = e.getComputedStyle(t, null)["overflow" + o];
                            return "auto" === r || "scroll" === r;
                        }
                        function h(o, r, n) {
                            var a,
                                u,
                                f,
                                h,
                                d = s();
                            o === t.body
                                ? ((a = e),
                                  (u = e.scrollX || e.pageXOffset),
                                  (f = e.scrollY || e.pageYOffset),
                                  (h = i.scroll))
                                : ((a = o),
                                  (u = o.scrollLeft),
                                  (f = o.scrollTop),
                                  (h = c)),
                                (function t(o) {
                                    var r,
                                        i,
                                        n,
                                        c = (s() - o.startTime) / l;
                                    (r =
                                        0.5 *
                                        (1 -
                                            Math.cos(
                                                Math.PI * (c = c > 1 ? 1 : c)
                                            ))),
                                        (i = o.startX + (o.x - o.startX) * r),
                                        (n = o.startY + (o.y - o.startY) * r),
                                        o.method.call(o.scrollable, i, n),
                                        (i !== o.x || n !== o.y) &&
                                            e.requestAnimationFrame(
                                                t.bind(e, o)
                                            );
                                })({
                                    scrollable: a,
                                    method: h,
                                    startTime: d,
                                    startX: u,
                                    startY: f,
                                    x: r,
                                    y: n,
                                });
                        }
                    },
                };
            })();
        },
        9158: (e, t, o) => {
            "use strict";
            var r = o(22353),
                l = o(96679);
            l.cg?.addEventListener("error", (e) => {
                e.error && (0, r.N7)(e.error);
            }),
                l.cg?.addEventListener("unhandledrejection", async (e) => {
                    if (e.promise)
                        try {
                            await e.promise;
                        } catch (e) {
                            (0, r.N7)(e);
                        }
                }),
                l.cg?.location.hash === "#b00m" &&
                    setTimeout(() => {
                        throw Error("b00m");
                    }),
                o(31196),
                o(48359);
            var i = o(7479);
            let s = fetch;
            function n({ input: e, error: t, status: o }) {
                if (!t) return;
                let r = e instanceof Request ? e.url : e.toString();
                (0, i.i)(
                    {
                        incrementKey: "FETCH_ERROR",
                        requestUrl: window.location.href,
                        referredRequestUrl: r,
                        incrementTags: {
                            status: String(o),
                        },
                    },
                    !1,
                    1
                );
            }
            var c = o(27851),
                a = o(77065),
                u = o(26559);
            let f = window.fetch,
                h = (e, t) => {
                    if (e instanceof Request) {
                        let t = {
                            ...Object.fromEntries(e.headers.entries()),
                            ...(0, u.kt)(),
                        };
                        return f(
                            new Request(e, {
                                headers: t,
                            })
                        );
                    }
                    {
                        let o = {
                            ...(t?.headers ?? {}),
                            ...(0, u.kt)(),
                        };
                        return f(
                            new Request(e, {
                                ...t,
                                headers: o,
                            })
                        );
                    }
                };
            document.documentElement.hasAttribute("override-fetch") &&
                window.fetch !== h &&
                (window.fetch = h);
            var d = o(88191);
            (0, a.Bb)(),
                "undefined" != typeof document &&
                    (l.cg &&
                        (l.cg.fetch = async (e, t) => {
                            try {
                                let o = await s(e, t);
                                return (
                                    n({
                                        input: e,
                                        error: !o.ok,
                                        status: o.status,
                                    }),
                                    o
                                );
                            } catch (t) {
                                throw (
                                    (n({
                                        input: e,
                                        error: !0,
                                        status: "unknown",
                                    }),
                                    t)
                                );
                            }
                        }),
                    (() => {
                        if (
                            (0, c.G7)("remove_child_patch") &&
                            "function" == typeof Node &&
                            Node.prototype
                        ) {
                            let e = Node.prototype.removeChild;
                            Node.prototype.removeChild = function (t) {
                                try {
                                    return e.apply(this, [t]);
                                } catch (e) {
                                    if (
                                        e instanceof Error &&
                                        e.stack?.includes("react-lib")
                                    )
                                        return t;
                                    throw e;
                                }
                            };
                        }
                    })(),
                    (() => {
                        if (
                            (0, c.G7)("insert_before_patch") &&
                            "function" == typeof Node &&
                            Node.prototype
                        ) {
                            let e = Node.prototype.insertBefore;
                            Node.prototype.insertBefore = function (t, o) {
                                try {
                                    return e.apply(this, [t, o]);
                                } catch (e) {
                                    if (
                                        e instanceof Error &&
                                        (e.stack?.includes("react-lib") ||
                                            e.stack?.includes("react-dom"))
                                    )
                                        return t;
                                    throw e;
                                }
                            };
                        }
                    })(),
                    (0, d.pS)());
        },
        53005: (e, t, o) => {
            "use strict";
            o.d(t, {
                O: () => s,
                S: () => i,
            });
            var r = o(96679);
            let l =
                    r.cg?.document?.head?.querySelector('meta[name="release"]')
                        ?.content || "",
                i = "X-GitHub-Client-Version";
            function s() {
                return l;
            }
        },
        26559: (e, t, o) => {
            "use strict";
            o.d(t, {
                jC: () => c,
                kt: () => s,
                tV: () => n,
            });
            var r = o(53005),
                l = o(27851),
                i = o(88191);
            function s(e) {
                let t = {
                    "X-Requested-With": "XMLHttpRequest",
                    ...(0, i.wE)(e),
                };
                return (
                    (0, l.G7)("client_version_header") &&
                        (t = {
                            ...t,
                            [r.S]: (0, r.O)(),
                        }),
                    t
                );
            }
            function n(e, t) {
                for (let [o, r] of Object.entries(s(t))) e.set(o, r);
            }
            function c(e) {
                return {
                    "X-GitHub-App-Type": e,
                };
            }
        },
        88191: (e, t, o) => {
            "use strict";
            o.d(t, {
                $r: () => s,
                M1: () => n,
                li: () => l,
                pS: () => a,
                wE: () => c,
            });
            var r = o(96679);
            let l = "X-Fetch-Nonce",
                i = new Set();
            function s(e) {
                i.add(e);
            }
            function n() {
                return i.values().next().value || "";
            }
            function c(e) {
                let t = {};
                return (
                    void 0 !== e && (t["X-Fetch-Nonce-To-Validate"] = e),
                    void 0 === e
                        ? (t[l] = n())
                        : i.has(e)
                        ? (t[l] = e)
                        : (t[l] = Array.from(i).join(",")),
                    t
                );
            }
            function a() {
                let e =
                    r.XC?.head?.querySelector('meta[name="fetch-nonce"]')
                        ?.content || "";
                e && s(e);
            }
        },
    },
    (e) => {
        var t = (t) => e((e.s = t));
        e.O(
            0,
            [
                "vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js",
                "vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-1d3d52",
                "ui_packages_failbot_failbot_ts",
            ],
            () => t(9158)
        ),
            e.O();
    },
]);
//# sourceMappingURL=environment-6061c947cc4a.js.map
