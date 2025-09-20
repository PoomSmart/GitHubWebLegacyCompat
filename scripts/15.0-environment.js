"use strict";
(globalThis.webpackChunk_github_ui_github_ui =
    globalThis.webpackChunk_github_ui_github_ui || []).push([
    ["environment"],
    {
        46471: (e, t, r) => {
            var n = r(38102),
                o = r(71315);
            (o.cg?.addEventListener("error", (e) => {
                e.error && (0, n.N7)(e.error);
            }),
                o.cg?.addEventListener("unhandledrejection", async (e) => {
                    if (e.promise)
                        try {
                            await e.promise;
                        } catch (e) {
                            (0, n.N7)(e);
                        }
                }),
                o.cg?.location.hash === "#b00m" &&
                    setTimeout(() => {
                        throw Error("b00m");
                    }),
                r(31196),
                r(48359));
            var a = r(11083);
            let i = fetch;
            function c({ input: e, error: t, status: r }) {
                if (!t) return;
                let n = e instanceof Request ? e.url : e.toString();
                (0, a.i)(
                    {
                        incrementKey: "FETCH_ERROR",
                        requestUrl: window.location.href,
                        referredRequestUrl: n,
                        incrementTags: { status: String(r) },
                    },
                    !1,
                    1
                );
            }
            var u = r(69599),
                l = r(77065),
                s = r(51987);
            let f = window.fetch,
                d = (e, t) => {
                    if (e instanceof Request) {
                        let t = {
                            ...Object.fromEntries(e.headers.entries()),
                            ...(0, s.kt)(),
                        };
                        return f(new Request(e, { headers: t }));
                    }
                    {
                        let r = { ...(t?.headers ?? {}), ...(0, s.kt)() };
                        return f(new Request(e, { ...t, headers: r }));
                    }
                };
            document.documentElement.hasAttribute("override-fetch") &&
                window.fetch !== d &&
                (window.fetch = d);
            var m = r(13523),
                h = r(88057);
            ((0, l.Bb)(),
                "undefined" != typeof document &&
                    (o.cg &&
                        (o.cg.fetch = async (e, t) => {
                            try {
                                let r = await i(e, t);
                                return (
                                    c({
                                        input: e,
                                        error: !r.ok,
                                        status: r.status,
                                    }),
                                    r
                                );
                            } catch (t) {
                                throw (
                                    c({
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
                            (0, u.G7)("remove_child_patch") &&
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
                            (0, u.G7)("insert_before_patch") &&
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
            let n;
            function o() {
                if (!n)
                    throw Error(
                        "Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function."
                    );
                return n;
            }
            function a() {
                return n?.locale ?? "en-US";
            }
            function i() {
                return !!o().login;
            }
            function c() {
                return o().login;
            }
            (r.d(t, { JK: () => a, M3: () => i, _$: () => o, cj: () => c }),
                !(function () {
                    if ("undefined" != typeof document) {
                        let e = document.getElementById("client-env");
                        if (e)
                            try {
                                n = JSON.parse(e.textContent || "");
                            } catch (e) {
                                console.error("Error parsing client-env", e);
                            }
                    }
                })());
        },
        87057: (e, t, r) => {
            r.d(t, { O: () => i, S: () => a });
            var n = r(71315);
            let o =
                    n.cg?.document?.head?.querySelector('meta[name="release"]')
                        ?.content || "",
                a = "X-GitHub-Client-Version";
            function i() {
                return o;
            }
        },
        34095: (e, t, r) => {
            r.d(t, { G: () => o, K: () => a });
            var n = r(71315);
            let o =
                    n.XC?.readyState === "interactive" ||
                    n.XC?.readyState === "complete"
                        ? Promise.resolve()
                        : new Promise((e) => {
                              n.XC?.addEventListener("DOMContentLoaded", () => {
                                  e();
                              });
                          }),
                a =
                    n.XC?.readyState === "complete"
                        ? Promise.resolve()
                        : new Promise((e) => {
                              n.cg?.addEventListener("load", e);
                          });
        },
        38102: (e, t, r) => {
            r.d(t, { N7: () => v });
            var n = r(36301),
                o = r(77065),
                a = r(24212);
            function i(e) {
                return (0, a.q)(e.stack || "").map((e) => ({
                    filename: e.file || "",
                    function: String(e.methodName),
                    lineno: (e.lineNumber || 0).toString(),
                    colno: (e.column || 0).toString(),
                }));
            }
            function c(e) {
                let t = document.querySelectorAll(e);
                if (t.length > 0) return t[t.length - 1];
            }
            var u = r(99223),
                l = r(71315),
                s = r(94416),
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
                                if (E.some((t) => e.includes(t))) return !0;
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
                        n = (function (e) {
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
                                value: `Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${n}`,
                                stacktrace: i(r),
                                catalogService: document.head?.querySelector(
                                    'meta[name="current-catalog-service"]'
                                )?.content,
                                catalogServiceHash:
                                    document.head?.querySelector(
                                        'meta[name="current-catalog-service-hash"]'
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
                                stacktrace: i(e),
                                catalogService:
                                    e.catalogService ||
                                    document.head?.querySelector(
                                        'meta[name="current-catalog-service"]'
                                    )?.content,
                                catalogServiceHash:
                                    e.catalogServiceHash ||
                                    document.head?.querySelector(
                                        'meta[name="current-catalog-service-hash"]'
                                    )?.content,
                            },
                            t
                        )
                    );
            }
            async function w(e) {
                if (!(!_ && !m && h < 10 && (0, o.TT)())) return;
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
                                    for (let n of document.querySelectorAll(t))
                                        if (n instanceof HTMLElement) {
                                            let t = n.getAttribute(r);
                                            t && e.add(t);
                                        }
                                return Array.from(e);
                            })();
                            if (!t || !t.length || !e || !e.length) return;
                            let r = new Set();
                            for (let n of e) {
                                if (!n || !n.filename) continue;
                                let e = n.filename.split(/[\\/]/).pop();
                                if (!e || r.has(e)) continue;
                                r.add(e);
                                let o = t.find((t) =>
                                    e.toLowerCase().includes(t.toLowerCase())
                                );
                                if (o) return o;
                            }
                        })(e.stacktrace)),
                    Object.assign(
                        {
                            error: e,
                            sanitizedUrl:
                                `${window.location.protocol}//${window.location.host}${
                                    (function () {
                                        let e = c(
                                            "meta[name=analytics-location]"
                                        );
                                        return e
                                            ? e.content
                                            : window.location.pathname;
                                    })() +
                                    (function () {
                                        let e = c(
                                                "meta[name=analytics-location-query-strip]"
                                            ),
                                            t = "";
                                        e || (t = window.location.search);
                                        let r = c(
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
                            referrer: (0, s.dR)(),
                            timeSinceLoad: Math.round(Date.now() - p),
                            user:
                                (function () {
                                    let e = document.head?.querySelector(
                                        'meta[name="user-login"]'
                                    )?.content;
                                    if (e) return e;
                                    let t = (0, n.y)();
                                    return `anonymous-${t}`;
                                })() || void 0,
                            actorId: document.head?.querySelector(
                                'meta[name="octolytics-actor-id"]'
                            )?.content,
                            bundler: u.v,
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
                _ = !1;
            (l.cg?.addEventListener("pageshow", () => (_ = !1)),
                l.cg?.addEventListener("pagehide", () => (_ = !0)),
                "function" == typeof BroadcastChannel &&
                    new BroadcastChannel(
                        "shared-worker-error"
                    ).addEventListener("message", (e) => {
                        v(e.data.error);
                    }));
            let E = [
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
            r.d(t, { G7: () => u, XY: () => l, fQ: () => c });
            var n = r(5225),
                o = r(21067);
            function a() {
                return new Set((0, o._$)().featureFlags);
            }
            let i =
                r(71315).X3 ||
                (function () {
                    try {
                        return process?.env?.STORYBOOK === "true";
                    } catch {
                        return !1;
                    }
                })()
                    ? a
                    : (0, n.A)(a);
            function c() {
                return Array.from(i());
            }
            function u(e) {
                return i().has(e);
            }
            let l = { isFeatureEnabled: u };
        },
        51987: (e, t, r) => {
            r.d(t, { jC: () => u, kt: () => i, tV: () => c });
            var n = r(87057),
                o = r(69599),
                a = r(13523);
            function i(e) {
                let t = {
                    "X-Requested-With": "XMLHttpRequest",
                    ...(0, a.wE)(e),
                };
                return (
                    (0, o.G7)("client_version_header") &&
                        (t = { ...t, [n.S]: (0, n.O)() }),
                    t
                );
            }
            function c(e, t) {
                for (let [r, n] of Object.entries(i(t))) e.set(r, n);
            }
            function u(e) {
                return { "X-GitHub-App-Type": e };
            }
        },
        13523: (e, t, r) => {
            r.d(t, {
                $r: () => i,
                M1: () => c,
                li: () => o,
                pS: () => l,
                wE: () => u,
            });
            var n = r(71315);
            let o = "X-Fetch-Nonce",
                a = new Set();
            function i(e) {
                a.add(e);
            }
            function c() {
                return a.values().next().value || "";
            }
            function u(e) {
                let t = {};
                return (
                    void 0 !== e && (t["X-Fetch-Nonce-To-Validate"] = e),
                    void 0 === e
                        ? (t[o] = c())
                        : a.has(e)
                          ? (t[o] = e)
                          : (t[o] = Array.from(a).join(",")),
                    t
                );
            }
            function l() {
                let e =
                    n.XC?.head?.querySelector('meta[name="fetch-nonce"]')
                        ?.content || "";
                e && i(e);
            }
        },
        88057: (e, t, r) => {
            r.d(t, { Ex: () => i, kt: () => u, xA: () => c });
            var n = r(71315);
            let o = Array(10).fill(null),
                a = 0;
            function i(e) {
                ((o[a] = e), (a = (a + 1) % 10));
            }
            function c() {
                let e = [];
                for (let t = 0; t < 10; t++) {
                    let r = o[(a - 1 - t + 10) % 10];
                    r && e.push(r);
                }
                return e;
            }
            function u() {
                let e = n.XC;
                if (!e) return;
                let t = e.querySelector('meta[name="request-id"]'),
                    r = t?.getAttribute("content");
                r && i(r);
            }
        },
        99223: (e, t, r) => {
            r.d(t, { k: () => i, v: () => c });
            var n = r(5225),
                o = r(71315);
            let a = (0, n.A)(function () {
                    return (
                        o.XC?.head?.querySelector(
                            'meta[name="runtime-environment"]'
                        )?.content || ""
                    );
                }),
                i = (0, n.A)(function () {
                    return "enterprise" === a();
                }),
                c = "webpack";
        },
        82075: (e, t, r) => {
            r.d(t, { A: () => i, D: () => c });
            var n = r(71315),
                o = r(11083);
            let a = class NoOpStorage {
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
            function i(
                e,
                t = { throwQuotaErrorsOnSet: !1 },
                r = n.cg,
                c = (e) => e,
                u = (e) => e
            ) {
                let l;
                try {
                    if (!r) throw Error();
                    l = r[e] || new a();
                } catch {
                    l = new a();
                }
                let { throwQuotaErrorsOnSet: s } = t;
                function f(e) {
                    t.sendCacheStats && (0, o.i)({ incrementKey: e });
                }
                function d(e) {
                    try {
                        if ((l.removeItem(e), t.ttl)) {
                            let t = `${e}:expiry`;
                            l.removeItem(t);
                        }
                    } catch {}
                }
                return {
                    getItem: function (e, t = Date.now()) {
                        try {
                            let r = l.getItem(e);
                            if (!r) return null;
                            let n = `${e}:expiry`,
                                o = Number(l.getItem(n));
                            if (o && t > o)
                                return (
                                    d(e),
                                    d(n),
                                    f("SAFE_STORAGE_VALUE_EXPIRED"),
                                    null
                                );
                            return (f("SAFE_STORAGE_VALUE_WITHIN_TTL"), c(r));
                        } catch {
                            return null;
                        }
                    },
                    setItem: function (e, r, n = Date.now()) {
                        try {
                            if ((l.setItem(e, u(r)), t.ttl)) {
                                let r = `${e}:expiry`,
                                    o = n + t.ttl;
                                l.setItem(r, o.toString());
                            }
                        } catch (e) {
                            if (
                                s &&
                                e instanceof Error &&
                                e.message.toLowerCase().includes("quota")
                            )
                                throw e;
                        }
                    },
                    removeItem: d,
                    clear: l.clear,
                    getKeys: function () {
                        return Object.keys(l);
                    },
                    get length() {
                        return l.length;
                    },
                };
            }
            function c(e) {
                return i(
                    e,
                    { throwQuotaErrorsOnSet: !1 },
                    n.cg,
                    JSON.parse,
                    JSON.stringify
                );
            }
        },
        95800: (e, t, r) => {
            r.d(t, { Ai: () => a, Gq: () => n, SO: () => o });
            let {
                getItem: n,
                setItem: o,
                removeItem: a,
            } = (0, r(82075).A)("sessionStorage");
        },
        94416: (e, t, r) => {
            r.d(t, {
                BW: () => o,
                Ff: () => m,
                HK: () => w,
                JA: () => A,
                LM: () => h,
                Pv: () => _,
                Vy: () => d,
                ZW: () => b,
                dR: () => S,
                di: () => p,
                fX: () => E,
                gc: () => q,
                k9: () => v,
                my: () => g,
                r7: () => C,
                wG: () => y,
                xT: () => f,
            });
            var n = r(95800);
            let o = "reload",
                a = "soft-nav:fail",
                i = "soft-nav:fail-referrer",
                c = "soft-nav:referrer",
                u = "soft-nav:marker",
                l = "soft-nav:react-app-name",
                s = "soft-nav:latest-mechanism";
            function f() {
                ((0, n.SO)(u, "0"),
                    (0, n.Ai)(c),
                    (0, n.Ai)(a),
                    (0, n.Ai)(i),
                    (0, n.Ai)(l),
                    (0, n.Ai)(s));
            }
            function d(e) {
                (0, n.SO)(u, e);
            }
            function m() {
                (0, n.SO)(u, "0");
            }
            function h() {
                let e = (0, n.Gq)(u);
                return e && "0" !== e;
            }
            function p() {
                return (0, n.Gq)(u);
            }
            function y() {
                return !!g();
            }
            function g() {
                return (0, n.Gq)(a);
            }
            function v(e) {
                ((0, n.SO)(a, e || o), (0, n.SO)(i, window.location.href));
            }
            function w() {
                (0, n.SO)(c, window.location.href);
            }
            function S() {
                return (0, n.Gq)(c) || document.referrer;
            }
            function b() {
                let e = E();
                e ? (0, n.SO)(l, e) : (0, n.Ai)(l);
            }
            function _() {
                return (0, n.Gq)(l);
            }
            function E() {
                return document.querySelector("projects-v2")
                    ? "memex"
                    : document.querySelector(
                            'react-partial[partial-name="repos-overview"]'
                        )
                      ? "repos-overview"
                      : document
                            .querySelector("react-app")
                            ?.getAttribute("app-name");
            }
            function q() {
                return (
                    !!document
                        .querySelector("react-app")
                        ?.getAttribute("app-name") ||
                    !!document.querySelector("projects-v2")
                );
            }
            function A(e) {
                (0, n.SO)(s, e);
            }
            function C() {
                return (0, n.Gq)(s);
            }
        },
        71315: (e, t, r) => {
            r.d(t, {
                KJ: () => n.KJ,
                Kn: () => o.Kn,
                X3: () => n.X3,
                XC: () => o.XC,
                cg: () => o.cg,
                fV: () => o.fV,
                g5: () => n.g5,
            });
            var n = r(6923),
                o = r(56038);
        },
        56038: (e, t, r) => {
            r.d(t, { Kn: () => i, XC: () => o, cg: () => a, fV: () => c });
            let n = "undefined" != typeof FORCE_SERVER_ENV && FORCE_SERVER_ENV,
                o = "undefined" == typeof document || n ? void 0 : document,
                a = "undefined" == typeof window || n ? void 0 : window,
                i = "undefined" == typeof history || n ? void 0 : history,
                c =
                    "undefined" == typeof location || n
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
            r.d(t, { KJ: () => a, X3: () => o, g5: () => i });
            var n = r(56038);
            let o = void 0 === n.XC,
                a = !o;
            function i() {
                return (
                    !!o ||
                    !n.XC ||
                    !!(
                        n.XC.querySelector('react-app[data-ssr="true"]') ||
                        n.XC.querySelector(
                            'react-partial[data-ssr="true"][partial-name="repos-overview"]'
                        )
                    )
                );
            }
        },
        11083: (e, t, r) => {
            r.d(t, { X: () => h, i: () => s });
            var n = r(71315),
                o = r(34095),
                a = r(99223),
                i = r(69599),
                c = r(21067),
                u = r(70170);
            let l = [];
            function s(e, t = !1, r = 0.5) {
                if (!n.X3 && !0 !== (0, i.G7)("browser_stats_disabled")) {
                    if (r < 0 || r > 1)
                        throw RangeError(
                            "Sampling probability must be between 0 and 1"
                        );
                    (void 0 === e.timestamp && (e.timestamp = Date.now()),
                        (e.loggedIn = (0, c.M3)()),
                        (e.staff = h()),
                        (e.bundler = a.v),
                        Math.random() < r && l.push(e),
                        t ? m() : d());
                }
            }
            let f = null,
                d = (0, u.n)(async function () {
                    (await o.K,
                        null == f && (f = window.requestIdleCallback(m)));
                }, 5e3);
            function m() {
                if (((f = null), !l.length)) return;
                let e = n.XC?.head?.querySelector(
                    'meta[name="browser-stats-url"]'
                )?.content;
                if (e) {
                    for (let o of (function (e) {
                        let t = [],
                            r = e.map((e) => JSON.stringify(e));
                        for (; r.length > 0; )
                            t.push(
                                (function (e) {
                                    let t = e.shift(),
                                        r = [t],
                                        n = t.length;
                                    for (; e.length > 0 && n <= 65536; ) {
                                        let t = e[0].length;
                                        if (n + t <= 65536) {
                                            let o = e.shift();
                                            (r.push(o), (n += t));
                                        } else break;
                                    }
                                    return r;
                                })(r)
                            );
                        return t;
                    })(l)) {
                        var t = e,
                            r = `{"stats": [${o.join(",")}], "target": "${n.XC?.head?.querySelector('meta[name="ui-target"]')?.content || "full"}"}`;
                        try {
                            navigator.sendBeacon && navigator.sendBeacon(t, r);
                        } catch {}
                    }
                    l = [];
                }
            }
            function h() {
                return !!n.XC?.head?.querySelector('meta[name="user-staff"]')
                    ?.content;
            }
            (n.XC?.addEventListener("pagehide", m),
                n.XC?.addEventListener("visibilitychange", m));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                "vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js",
                "vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-2f4e04",
                "vendors-node_modules_github_arianotify-polyfill_ariaNotify-polyfill_js-node_modules_github_mi-c8eeba",
            ],
            () => e((e.s = 46471))
        ),
            e.O());
    },
]);
//# sourceMappingURL=environment-6fe22f3e1272.js.map
