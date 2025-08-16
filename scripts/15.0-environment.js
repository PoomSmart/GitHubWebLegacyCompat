(globalThis.webpackChunk_github_ui_github_ui =
    globalThis.webpackChunk_github_ui_github_ui || []).push([
    ["environment"],
    {
        48359: () => {
            if (!("ariaNotify" in Element.prototype)) {
                let e = `${Date.now()}`;
                try {
                    e = crypto.randomUUID();
                } catch {}
                let t = Symbol(),
                    r = `live-region-${e}`;
                let Message = class Message {
                    element;
                    message;
                    priority = "normal";
                    constructor({
                        element: e,
                        message: t,
                        priority: r = "normal",
                    }) {
                        ((this.element = e),
                            (this.message = t),
                            (this.priority = r));
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
                        let o = e.querySelector(r);
                        (o || ((o = document.createElement(r)), e.append(o)),
                            await new Promise((e) => setTimeout(e, 250)),
                            o.handleMessage(t, this.message));
                    }
                };
                let o = new (class MessageQueue {
                    #t = [];
                    #r;
                    enqueue(e) {
                        let { priority: t } = e;
                        if ("high" === t) {
                            let t = this.#t.findLastIndex(
                                (e) => "high" === e.priority
                            );
                            this.#t.splice(t + 1, 0, e);
                        } else this.#t.push(e);
                        this.#r || this.#o();
                    }
                    async #o() {
                        ((this.#r = this.#t.shift()),
                            this.#r && (await this.#r.announce(), this.#o()));
                    }
                })();
                let LiveRegionCustomElement = class LiveRegionCustomElement extends HTMLElement {
                    #n = this.attachShadow({ mode: "closed" });
                    connectedCallback() {
                        ((this.ariaLive = "polite"),
                            (this.ariaAtomic = "true"),
                            (this.style.marginLeft = "-1px"),
                            (this.style.marginTop = "-1px"),
                            (this.style.position = "absolute"),
                            (this.style.width = "1px"),
                            (this.style.height = "1px"),
                            (this.style.overflow = "hidden"),
                            (this.style.clipPath = "rect(0 0 0 0)"),
                            (this.style.overflowWrap = "normal"));
                    }
                    handleMessage(e = null, r = "") {
                        t === e &&
                            (this.#n.textContent == r && (r += "\xa0"),
                            (this.#n.textContent = r));
                    }
                };
                (customElements.define(r, LiveRegionCustomElement),
                    (Element.prototype.ariaNotify = function (
                        e,
                        { priority: t = "normal" } = {}
                    ) {
                        o.enqueue(
                            new Message({
                                element: this,
                                message: e,
                                priority: t,
                            })
                        );
                    }));
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
                            var r,
                                o = e.HTMLElement || e.Element,
                                n = 468,
                                i = {
                                    scroll: e.scroll || e.scrollTo,
                                    scrollBy: e.scrollBy,
                                    elementScroll: o.prototype.scroll || s,
                                    scrollIntoView: o.prototype.scrollIntoView,
                                },
                                a =
                                    e.performance && e.performance.now
                                        ? e.performance.now.bind(e.performance)
                                        : Date.now,
                                l = +((r = e.navigator.userAgent),
                                !!RegExp("MSIE |Trident/|Edge/").test(r));
                            ((e.scroll = e.scrollTo =
                                function () {
                                    if (void 0 !== arguments[0]) {
                                        if (!0 === c(arguments[0]))
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
                                                      : e.scrollY ||
                                                        e.pageYOffset
                                            );
                                        d.call(
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
                                        if (c(arguments[0]))
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
                                        d.call(
                                            e,
                                            t.body,
                                            ~~arguments[0].left +
                                                (e.scrollX || e.pageXOffset),
                                            ~~arguments[0].top +
                                                (e.scrollY || e.pageYOffset)
                                        );
                                    }
                                }),
                                (o.prototype.scroll = o.prototype.scrollTo =
                                    function () {
                                        if (void 0 !== arguments[0]) {
                                            if (!0 === c(arguments[0])) {
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
                                            d.call(
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
                                (o.prototype.scrollBy = function () {
                                    if (void 0 !== arguments[0]) {
                                        if (!0 === c(arguments[0]))
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
                                (o.prototype.scrollIntoView = function () {
                                    if (!0 === c(arguments[0]))
                                        return void i.scrollIntoView.call(
                                            this,
                                            void 0 === arguments[0] ||
                                                arguments[0]
                                        );
                                    var r = (function (e) {
                                            for (
                                                var r, o, n;
                                                e !== t.body &&
                                                !1 ===
                                                    ((o =
                                                        u((r = e), "Y") &&
                                                        f(r, "Y")),
                                                    (n =
                                                        u(r, "X") && f(r, "X")),
                                                    o || n);

                                            )
                                                e = e.parentNode || e.host;
                                            return e;
                                        })(this),
                                        o = r.getBoundingClientRect(),
                                        n = this.getBoundingClientRect();
                                    r !== t.body
                                        ? (d.call(
                                              this,
                                              r,
                                              r.scrollLeft + n.left - o.left,
                                              r.scrollTop + n.top - o.top
                                          ),
                                          "fixed" !==
                                              e.getComputedStyle(r).position &&
                                              e.scrollBy({
                                                  left: o.left,
                                                  top: o.top,
                                                  behavior: "smooth",
                                              }))
                                        : e.scrollBy({
                                              left: n.left,
                                              top: n.top,
                                              behavior: "smooth",
                                          });
                                }));
                        }
                        function s(e, t) {
                            ((this.scrollLeft = e), (this.scrollTop = t));
                        }
                        function c(e) {
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
                                ? e.clientHeight + l < e.scrollHeight
                                : "X" === t
                                  ? e.clientWidth + l < e.scrollWidth
                                  : void 0;
                        }
                        function f(t, r) {
                            var o = e.getComputedStyle(t, null)["overflow" + r];
                            return "auto" === o || "scroll" === o;
                        }
                        function d(r, o, l) {
                            var c,
                                u,
                                f,
                                d,
                                m = a();
                            (r === t.body
                                ? ((c = e),
                                  (u = e.scrollX || e.pageXOffset),
                                  (f = e.scrollY || e.pageYOffset),
                                  (d = i.scroll))
                                : ((c = r),
                                  (u = r.scrollLeft),
                                  (f = r.scrollTop),
                                  (d = s)),
                                (function t(r) {
                                    var o,
                                        i,
                                        l,
                                        s = (a() - r.startTime) / n;
                                    ((o =
                                        0.5 *
                                        (1 -
                                            Math.cos(
                                                Math.PI * (s = s > 1 ? 1 : s)
                                            ))),
                                        (i = r.startX + (r.x - r.startX) * o),
                                        (l = r.startY + (r.y - r.startY) * o),
                                        r.method.call(r.scrollable, i, l),
                                        (i !== r.x || l !== r.y) &&
                                            e.requestAnimationFrame(
                                                t.bind(e, r)
                                            ));
                                })({
                                    scrollable: c,
                                    method: d,
                                    startTime: m,
                                    startX: u,
                                    startY: f,
                                    x: o,
                                    y: l,
                                }));
                        }
                    },
                };
            })();
        },
        46471: (e, t, r) => {
            "use strict";
            var o = r(38102),
                n = r(71315);
            (n.cg?.addEventListener("error", (e) => {
                e.error && (0, o.N7)(e.error);
            }),
                n.cg?.addEventListener("unhandledrejection", async (e) => {
                    if (e.promise)
                        try {
                            await e.promise;
                        } catch (e) {
                            (0, o.N7)(e);
                        }
                }),
                n.cg?.location.hash === "#b00m" &&
                    setTimeout(() => {
                        throw Error("b00m");
                    }),
                r(31196),
                r(48359));
            var i = r(11083);
            let a = fetch;
            function l({ input: e, error: t, status: r }) {
                if (!t) return;
                let o = e instanceof Request ? e.url : e.toString();
                (0, i.i)(
                    {
                        incrementKey: "FETCH_ERROR",
                        requestUrl: window.location.href,
                        referredRequestUrl: o,
                        incrementTags: { status: String(r) },
                    },
                    !1,
                    1
                );
            }
            var s = r(69599),
                c = r(77065),
                u = r(51987);
            let f = window.fetch,
                d = (e, t) => {
                    if (e instanceof Request) {
                        let t = {
                            ...Object.fromEntries(e.headers.entries()),
                            ...(0, u.kt)(),
                        };
                        return f(new Request(e, { headers: t }));
                    }
                    {
                        let r = { ...(t?.headers ?? {}), ...(0, u.kt)() };
                        return f(new Request(e, { ...t, headers: r }));
                    }
                };
            document.documentElement.hasAttribute("override-fetch") &&
                window.fetch !== d &&
                (window.fetch = d);
            var m = r(13523),
                h = r(88057);
            ((0, c.Bb)(),
                "undefined" != typeof document &&
                    (n.cg &&
                        (n.cg.fetch = async (e, t) => {
                            try {
                                let r = await a(e, t);
                                return (
                                    l({
                                        input: e,
                                        error: !r.ok,
                                        status: r.status,
                                    }),
                                    r
                                );
                            } catch (t) {
                                throw (
                                    l({
                                        input: e,
                                        error: !0,
                                        status: "unknown",
                                    }),
                                    t
                                );
                            }
                        }),
                    (() => {
                        if (
                            (0, s.G7)("remove_child_patch") &&
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
                            (0, s.G7)("insert_before_patch") &&
                            "function" == typeof Node &&
                            Node.prototype
                        ) {
                            let e = Node.prototype.insertBefore;
                            Node.prototype.insertBefore = function (t, r) {
                                try {
                                    return e.apply(this, [t, r]);
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
                    (0, m.pS)(),
                    (0, h.kt)()));
        },
        21067: (e, t, r) => {
            "use strict";
            let o;
            function n() {
                if (!o)
                    throw Error(
                        "Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function."
                    );
                return o;
            }
            function i() {
                return o?.locale ?? "en-US";
            }
            function a() {
                return !!n().login;
            }
            (r.d(t, { JK: () => i, M3: () => a, _$: () => n }),
                !(function () {
                    if ("undefined" != typeof document) {
                        let e = document.getElementById("client-env");
                        if (e)
                            try {
                                o = JSON.parse(e.textContent || "");
                            } catch (e) {
                                console.error("Error parsing client-env", e);
                            }
                    }
                })());
        },
        87057: (e, t, r) => {
            "use strict";
            r.d(t, { O: () => a, S: () => i });
            var o = r(71315);
            let n =
                    o.cg?.document?.head?.querySelector('meta[name="release"]')
                        ?.content || "",
                i = "X-GitHub-Client-Version";
            function a() {
                return n;
            }
        },
        34095: (e, t, r) => {
            "use strict";
            r.d(t, { G: () => n, K: () => i });
            var o = r(71315);
            let n =
                    o.XC?.readyState === "interactive" ||
                    o.XC?.readyState === "complete"
                        ? Promise.resolve()
                        : new Promise((e) => {
                              o.XC?.addEventListener("DOMContentLoaded", () => {
                                  e();
                              });
                          }),
                i =
                    o.XC?.readyState === "complete"
                        ? Promise.resolve()
                        : new Promise((e) => {
                              o.cg?.addEventListener("load", e);
                          });
        },
        38102: (e, t, r) => {
            "use strict";
            r.d(t, { N7: () => v });
            var o = r(36301),
                n = r(77065),
                i = r(24212);
            function a(e) {
                return (0, i.q)(e.stack || "").map((e) => ({
                    filename: e.file || "",
                    function: String(e.methodName),
                    lineno: (e.lineNumber || 0).toString(),
                    colno: (e.column || 0).toString(),
                }));
            }
            function l(e) {
                let t = document.querySelectorAll(e);
                if (t.length > 0) return t[t.length - 1];
            }
            var s = r(99223),
                c = r(71315),
                u = r(94416),
                f = r(69599),
                d = r(88057);
            let m = !1,
                h = 0,
                p = Date.now(),
                y = new Set([
                    "AbortError",
                    "AuthSessionExpiredError",
                    "TypeError",
                ]),
                g = new Set([
                    "Failed to fetch",
                    "NetworkError when attempting to fetch resource.",
                    "Unable to perform this operation. Please try again later.",
                ]);
            function v(e, t = {}) {
                if (
                    !(
                        e instanceof Error ||
                        ("object" == typeof e &&
                            null !== e &&
                            "name" in e &&
                            "string" == typeof e.name &&
                            "message" in e &&
                            "string" == typeof e.message)
                    )
                ) {
                    if (
                        (function (e) {
                            if (
                                !e ||
                                "boolean" == typeof e ||
                                "number" == typeof e
                            )
                                return !0;
                            if ("string" == typeof e) {
                                if (_.some((t) => e.includes(t))) return !0;
                            } else if (
                                "object" == typeof e &&
                                "string" == typeof e.message &&
                                "number" == typeof e.code
                            )
                                return !0;
                            return !1;
                        })(e)
                    )
                        return;
                    let r = Error(),
                        o = (function (e) {
                            try {
                                return JSON.stringify(e);
                            } catch {
                                return "Unserializable";
                            }
                        })(e);
                    w(
                        S(
                            {
                                type: "UnknownError",
                                value: `Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${o}`,
                                stacktrace: a(r),
                                catalogService: document.head?.querySelector(
                                    'meta[name="current-catalog-service"]'
                                )?.content,
                            },
                            t
                        )
                    );
                    return;
                }
                (e.name &&
                    ("AbortError" === e.name ||
                        (y.has(e.name) && g.has(e.message)) ||
                        (e.name.startsWith("ApiError") && g.has(e.message)))) ||
                    w(
                        S(
                            {
                                type: e.name,
                                value: e.message,
                                stacktrace: a(e),
                                catalogService:
                                    e.catalogService ||
                                    document.head?.querySelector(
                                        'meta[name="current-catalog-service"]'
                                    )?.content,
                            },
                            t
                        )
                    );
            }
            async function w(e) {
                if (!(!E && !m && h < 10 && (0, n.TT)())) return;
                let t = document.head?.querySelector(
                    'meta[name="browser-errors-url"]'
                )?.content;
                if (t) {
                    if (
                        e.error.stacktrace.some(
                            (e) => b.test(e.filename) || b.test(e.function)
                        )
                    ) {
                        m = !0;
                        return;
                    }
                    h++;
                    try {
                        await fetch(t, {
                            method: "post",
                            body: JSON.stringify({
                                context: e,
                                target:
                                    document.head?.querySelector(
                                        'meta[name="ui-target"]'
                                    )?.content || "full",
                            }),
                        });
                    } catch {}
                }
            }
            function S(e, t = {}) {
                let r = { ...t };
                return (
                    (0, f.G7)("failbot_report_error_react_apps_on_page") &&
                        !r.reactAppName &&
                        (r.reactAppName = (function (e) {
                            let t = (function () {
                                let e = new Set();
                                for (let [t, r] of q)
                                    for (let o of document.querySelectorAll(t))
                                        if (o instanceof HTMLElement) {
                                            let t = o.getAttribute(r);
                                            t && e.add(t);
                                        }
                                return Array.from(e);
                            })();
                            if (!t || !t.length || !e || !e.length) return;
                            let r = new Set();
                            for (let o of e) {
                                if (!o || !o.filename) continue;
                                let e = o.filename.split(/[\\/]/).pop();
                                if (!e || r.has(e)) continue;
                                r.add(e);
                                let n = t.find((t) =>
                                    e.toLowerCase().includes(t.toLowerCase())
                                );
                                if (n) return n;
                            }
                        })(e.stacktrace)),
                    Object.assign(
                        {
                            error: e,
                            sanitizedUrl:
                                `${window.location.protocol}//${window.location.host}${
                                    (function () {
                                        let e = l(
                                            "meta[name=analytics-location]"
                                        );
                                        return e
                                            ? e.content
                                            : window.location.pathname;
                                    })() +
                                    (function () {
                                        let e = l(
                                                "meta[name=analytics-location-query-strip]"
                                            ),
                                            t = "";
                                        e || (t = window.location.search);
                                        let r = l(
                                            "meta[name=analytics-location-params]"
                                        );
                                        for (let e of (r &&
                                            (t += (t ? "&" : "?") + r.content),
                                        document.querySelectorAll(
                                            "meta[name=analytics-param-rename]"
                                        ))) {
                                            let r = e.content.split(":", 2);
                                            t = t.replace(
                                                RegExp(
                                                    `(^|[?&])${r[0]}($|=)`,
                                                    "g"
                                                ),
                                                `$1${r[1]}$2`
                                            );
                                        }
                                        return t;
                                    })()
                                }` || window.location.href,
                            readyState: document.readyState,
                            referrer: (0, u.dR)(),
                            timeSinceLoad: Math.round(Date.now() - p),
                            user:
                                (function () {
                                    let e = document.head?.querySelector(
                                        'meta[name="user-login"]'
                                    )?.content;
                                    if (e) return e;
                                    let t = (0, o.y)();
                                    return `anonymous-${t}`;
                                })() || void 0,
                            actorId: document.head?.querySelector(
                                'meta[name="octolytics-actor-id"]'
                            )?.content,
                            bundler: s.v,
                            ui: !!document.querySelector('meta[name="ui"]'),
                            release: document.head?.querySelector(
                                'meta[name="release"]'
                            )?.content,
                            pastRequestIds: (0, d.xA)(),
                        },
                        r
                    )
                );
            }
            let b = /(chrome|moz|safari)-extension:\/\//,
                E = !1;
            (c.cg?.addEventListener("pageshow", () => (E = !1)),
                c.cg?.addEventListener("pagehide", () => (E = !0)),
                "function" == typeof BroadcastChannel &&
                    new BroadcastChannel(
                        "shared-worker-error"
                    ).addEventListener("message", (e) => {
                        v(e.data.error);
                    }));
            let _ = [
                    "Object Not Found Matching Id",
                    "Not implemented on this platform",
                    "provider because it's not your default extension",
                ],
                q = [
                    ["react-app", "app-name"],
                    ["react-partial", "partial-name"],
                ];
        },
        69599: (e, t, r) => {
            "use strict";
            r.d(t, { G7: () => s, XY: () => c, fQ: () => l });
            var o = r(5225),
                n = r(21067);
            function i() {
                return new Set((0, n._$)().featureFlags);
            }
            let a =
                r(71315).X3 ||
                (function () {
                    try {
                        return process?.env?.STORYBOOK === "true";
                    } catch {
                        return !1;
                    }
                })()
                    ? i
                    : (0, o.A)(i);
            function l() {
                return Array.from(a());
            }
            function s(e) {
                return a().has(e);
            }
            let c = { isFeatureEnabled: s };
        },
        51987: (e, t, r) => {
            "use strict";
            r.d(t, { jC: () => s, kt: () => a, tV: () => l });
            var o = r(87057),
                n = r(69599),
                i = r(13523);
            function a(e) {
                let t = {
                    "X-Requested-With": "XMLHttpRequest",
                    ...(0, i.wE)(e),
                };
                return (
                    (0, n.G7)("client_version_header") &&
                        (t = { ...t, [o.S]: (0, o.O)() }),
                    t
                );
            }
            function l(e, t) {
                for (let [r, o] of Object.entries(a(t))) e.set(r, o);
            }
            function s(e) {
                return { "X-GitHub-App-Type": e };
            }
        },
        13523: (e, t, r) => {
            "use strict";
            r.d(t, {
                $r: () => a,
                M1: () => l,
                li: () => n,
                pS: () => c,
                wE: () => s,
            });
            var o = r(71315);
            let n = "X-Fetch-Nonce",
                i = new Set();
            function a(e) {
                i.add(e);
            }
            function l() {
                return i.values().next().value || "";
            }
            function s(e) {
                let t = {};
                return (
                    void 0 !== e && (t["X-Fetch-Nonce-To-Validate"] = e),
                    void 0 === e
                        ? (t[n] = l())
                        : i.has(e)
                          ? (t[n] = e)
                          : (t[n] = Array.from(i).join(",")),
                    t
                );
            }
            function c() {
                let e =
                    o.XC?.head?.querySelector('meta[name="fetch-nonce"]')
                        ?.content || "";
                e && a(e);
            }
        },
        88057: (e, t, r) => {
            "use strict";
            r.d(t, { Ex: () => a, kt: () => s, xA: () => l });
            var o = r(71315);
            let n = Array(10).fill(null),
                i = 0;
            function a(e) {
                ((n[i] = e), (i = (i + 1) % 10));
            }
            function l() {
                let e = [];
                for (let t = 0; t < 10; t++) {
                    let r = n[(i - 1 - t + 10) % 10];
                    r && e.push(r);
                }
                return e;
            }
            function s() {
                let e = o.XC;
                if (!e) return;
                let t = e.querySelector('meta[name="request-id"]'),
                    r = t?.getAttribute("content");
                r && a(r);
            }
        },
        99223: (e, t, r) => {
            "use strict";
            r.d(t, { k: () => a, v: () => l });
            var o = r(5225),
                n = r(71315);
            let i = (0, o.A)(function () {
                    return (
                        n.XC?.head?.querySelector(
                            'meta[name="runtime-environment"]'
                        )?.content || ""
                    );
                }),
                a = (0, o.A)(function () {
                    return "enterprise" === i();
                }),
                l = "webpack";
        },
        82075: (e, t, r) => {
            "use strict";
            r.d(t, { A: () => a, D: () => l });
            var o = r(71315),
                n = r(11083);
            let i = class NoOpStorage {
                getItem() {
                    return null;
                }
                setItem() {}
                removeItem() {}
                clear() {}
                key() {
                    return null;
                }
                get length() {
                    return 0;
                }
            };
            function a(
                e,
                t = { throwQuotaErrorsOnSet: !1 },
                r = o.cg,
                l = (e) => e,
                s = (e) => e
            ) {
                let c;
                try {
                    if (!r) throw Error();
                    c = r[e] || new i();
                } catch {
                    c = new i();
                }
                let { throwQuotaErrorsOnSet: u } = t;
                function f(e) {
                    t.sendCacheStats && (0, n.i)({ incrementKey: e });
                }
                function d(e) {
                    try {
                        if ((c.removeItem(e), t.ttl)) {
                            let t = `${e}:expiry`;
                            c.removeItem(t);
                        }
                    } catch {}
                }
                return {
                    getItem: function (e, t = Date.now()) {
                        try {
                            let r = c.getItem(e);
                            if (!r) return null;
                            let o = `${e}:expiry`,
                                n = Number(c.getItem(o));
                            if (n && t > n)
                                return (
                                    d(e),
                                    d(o),
                                    f("SAFE_STORAGE_VALUE_EXPIRED"),
                                    null
                                );
                            return (f("SAFE_STORAGE_VALUE_WITHIN_TTL"), l(r));
                        } catch {
                            return null;
                        }
                    },
                    setItem: function (e, r, o = Date.now()) {
                        try {
                            if ((c.setItem(e, s(r)), t.ttl)) {
                                let r = `${e}:expiry`,
                                    n = o + t.ttl;
                                c.setItem(r, n.toString());
                            }
                        } catch (e) {
                            if (
                                u &&
                                e instanceof Error &&
                                e.message.toLowerCase().includes("quota")
                            )
                                throw e;
                        }
                    },
                    removeItem: d,
                    clear: c.clear,
                    getKeys: function () {
                        return Object.keys(c);
                    },
                    get length() {
                        return c.length;
                    },
                };
            }
            function l(e) {
                return a(
                    e,
                    { throwQuotaErrorsOnSet: !1 },
                    o.cg,
                    JSON.parse,
                    JSON.stringify
                );
            }
        },
        95800: (e, t, r) => {
            "use strict";
            r.d(t, { Ai: () => i, Gq: () => o, SO: () => n });
            let {
                getItem: o,
                setItem: n,
                removeItem: i,
            } = (0, r(82075).A)("sessionStorage");
        },
        94416: (e, t, r) => {
            "use strict";
            r.d(t, {
                BW: () => n,
                Ff: () => m,
                HK: () => w,
                JA: () => C,
                LM: () => h,
                Pv: () => E,
                Vy: () => d,
                ZW: () => b,
                dR: () => S,
                di: () => p,
                fX: () => _,
                gc: () => q,
                k9: () => v,
                my: () => g,
                r7: () => X,
                wG: () => y,
                xT: () => f,
            });
            var o = r(95800);
            let n = "reload",
                i = "soft-nav:fail",
                a = "soft-nav:fail-referrer",
                l = "soft-nav:referrer",
                s = "soft-nav:marker",
                c = "soft-nav:react-app-name",
                u = "soft-nav:latest-mechanism";
            function f() {
                ((0, o.SO)(s, "0"),
                    (0, o.Ai)(l),
                    (0, o.Ai)(i),
                    (0, o.Ai)(a),
                    (0, o.Ai)(c),
                    (0, o.Ai)(u));
            }
            function d(e) {
                (0, o.SO)(s, e);
            }
            function m() {
                (0, o.SO)(s, "0");
            }
            function h() {
                let e = (0, o.Gq)(s);
                return e && "0" !== e;
            }
            function p() {
                return (0, o.Gq)(s);
            }
            function y() {
                return !!g();
            }
            function g() {
                return (0, o.Gq)(i);
            }
            function v(e) {
                ((0, o.SO)(i, e || n), (0, o.SO)(a, window.location.href));
            }
            function w() {
                (0, o.SO)(l, window.location.href);
            }
            function S() {
                return (0, o.Gq)(l) || document.referrer;
            }
            function b() {
                let e = _();
                e ? (0, o.SO)(c, e) : (0, o.Ai)(c);
            }
            function E() {
                return (0, o.Gq)(c);
            }
            function _() {
                return document.querySelector(
                    'react-partial[partial-name="repos-overview"]'
                )
                    ? "repos-overview"
                    : document
                          .querySelector("react-app")
                          ?.getAttribute("app-name");
            }
            function q() {
                return !!document
                    .querySelector("react-app")
                    ?.getAttribute("app-name");
            }
            function C(e) {
                (0, o.SO)(u, e);
            }
            function X() {
                return (0, o.Gq)(u);
            }
        },
        71315: (e, t, r) => {
            "use strict";
            r.d(t, {
                KJ: () => o.KJ,
                Kn: () => n.Kn,
                X3: () => o.X3,
                XC: () => n.XC,
                cg: () => n.cg,
                fV: () => n.fV,
                g5: () => o.g5,
            });
            var o = r(6923),
                n = r(56038);
        },
        56038: (e, t, r) => {
            "use strict";
            r.d(t, { Kn: () => a, XC: () => n, cg: () => i, fV: () => l });
            let o = "undefined" != typeof FORCE_SERVER_ENV && FORCE_SERVER_ENV,
                n = "undefined" == typeof document || o ? void 0 : document,
                i = "undefined" == typeof window || o ? void 0 : window,
                a = "undefined" == typeof history || o ? void 0 : history,
                l =
                    "undefined" == typeof location || o
                        ? {
                              pathname: "",
                              origin: "",
                              search: "",
                              hash: "",
                              href: "",
                          }
                        : location;
        },
        6923: (e, t, r) => {
            "use strict";
            r.d(t, { KJ: () => i, X3: () => n, g5: () => a });
            var o = r(56038);
            let n = void 0 === o.XC,
                i = !n;
            function a() {
                return (
                    !!n ||
                    !o.XC ||
                    !!(
                        o.XC.querySelector('react-app[data-ssr="true"]') ||
                        o.XC.querySelector(
                            'react-partial[data-ssr="true"][partial-name="repos-overview"]'
                        )
                    )
                );
            }
        },
        11083: (e, t, r) => {
            "use strict";
            r.d(t, { X: () => h, i: () => u });
            var o = r(71315),
                n = r(34095),
                i = r(99223),
                a = r(69599),
                l = r(21067),
                s = r(70170);
            let c = [];
            function u(e, t = !1, r = 0.5) {
                if (!o.X3 && !0 !== (0, a.G7)("browser_stats_disabled")) {
                    if (r < 0 || r > 1)
                        throw RangeError(
                            "Sampling probability must be between 0 and 1"
                        );
                    (void 0 === e.timestamp && (e.timestamp = Date.now()),
                        (e.loggedIn = (0, l.M3)()),
                        (e.staff = h()),
                        (e.bundler = i.v),
                        Math.random() < r && c.push(e),
                        t ? m() : d());
                }
            }
            let f = null,
                d = (0, s.n)(async function () {
                    (await n.K,
                        null == f && (f = window.requestIdleCallback(m)));
                }, 5e3);
            function m() {
                if (((f = null), !c.length)) return;
                let e = o.XC?.head?.querySelector(
                    'meta[name="browser-stats-url"]'
                )?.content;
                if (e) {
                    for (let n of (function (e) {
                        let t = [],
                            r = e.map((e) => JSON.stringify(e));
                        for (; r.length > 0; )
                            t.push(
                                (function (e) {
                                    let t = e.shift(),
                                        r = [t],
                                        o = t.length;
                                    for (; e.length > 0 && o <= 65536; ) {
                                        let t = e[0].length;
                                        if (o + t <= 65536) {
                                            let n = e.shift();
                                            (r.push(n), (o += t));
                                        } else break;
                                    }
                                    return r;
                                })(r)
                            );
                        return t;
                    })(c)) {
                        var t = e,
                            r = `{"stats": [${n.join(",")}], "target": "${o.XC?.head?.querySelector('meta[name="ui-target"]')?.content || "full"}"}`;
                        try {
                            navigator.sendBeacon && navigator.sendBeacon(t, r);
                        } catch {}
                    }
                    c = [];
                }
            }
            function h() {
                return !!o.XC?.head?.querySelector('meta[name="user-staff"]')
                    ?.content;
            }
            (o.XC?.addEventListener("pagehide", m),
                o.XC?.addEventListener("visibilitychange", m));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                "vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js",
                "vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-1d3d52",
            ],
            () => e((e.s = 46471))
        ),
            e.O());
    },
]);
//# sourceMappingURL=environment-071bbf16cd99.js.map
