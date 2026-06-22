performance.mark("js-parse-end:environment-84f18c48c0047c1d.js");
("use strict");
(globalThis.rspackChunk_github_ui_github_ui =
    globalThis.rspackChunk_github_ui_github_ui || []).push([
    [85363],
    {
        634619(e, t, n) {
            var r = n(826316);
            let o =
                r.cg?.document?.head?.querySelector('meta[name="release"]')
                    ?.content || "";
            function i() {
                return o;
            }
            n.d(t, { O: () => i }, { S: "X-GitHub-Client-Version" });
        },
        478865(e, t, n) {
            var r = n(351930),
                o = n(826316);
            (o.cg?.addEventListener("error", (e) => {
                e.error && (0, r.N7)(e.error);
            }),
                o.cg?.addEventListener("unhandledrejection", async (e) => {
                    if (e.promise)
                        try {
                            await e.promise;
                        } catch (e) {
                            (0, r.N7)(e);
                        }
                }),
                o.cg?.location.hash === "#b00m" &&
                    setTimeout(() => {
                        throw Error("b00m");
                    }),
                n(789272));
            var i = n(296133),
                a = n(195477);
            let s = /\breact-(?:dom|lib|profiling)\b/;
            function l(e) {
                return !!e && s.test(e);
            }
            var c = n(705045);
            let u = window.fetch,
                d = (e, t) => {
                    if (e instanceof Request) {
                        let t = {
                            ...Object.fromEntries(e.headers.entries()),
                            ...(0, c.kt)(),
                        };
                        return u(new Request(e, { headers: t }));
                    }
                    {
                        let n = { ...(t?.headers ?? {}), ...(0, c.kt)() };
                        return u(new Request(e, { ...t, headers: n }));
                    }
                };
            document.documentElement.hasAttribute("override-fetch") &&
                window.fetch !== d &&
                (window.fetch = d);
            var h = n(200381),
                m = n(941763),
                f = n(258038);
            let p = /-[0-9a-f]{16}\.(js|(?:module\.)?css)$/;
            function g(e) {
                return 0 === e.transferSize && e.decodedBodySize > 0;
            }
            function y() {
                return {
                    count: 0,
                    totalSizeBytes: 0,
                    totalCompressedSizeBytes: 0,
                    wallTimeMs: 0,
                    maxAssetDownloadMs: 0,
                    earliestResponseStart: 1 / 0,
                    latestResponseEnd: -1 / 0,
                    cachedCount: 0,
                    entries: [],
                };
            }
            if (((0, i.Bb)(), "u" > typeof document)) {
                if (((0, a.A)(), "function" == typeof Node && Node.prototype)) {
                    let e = Node.prototype.removeChild;
                    Node.prototype.removeChild = function (t) {
                        try {
                            return e.apply(this, [t]);
                        } catch (e) {
                            if (e instanceof Error && l(e.stack)) return t;
                            throw e;
                        }
                    };
                }
                if ("function" == typeof Node && Node.prototype) {
                    let e = Node.prototype.insertBefore;
                    Node.prototype.insertBefore = function (t, n) {
                        try {
                            return e.apply(this, [t, n]);
                        } catch (e) {
                            if (e instanceof Error && l(e.stack)) return t;
                            throw e;
                        }
                    };
                }
                ((0, h.pS)(),
                    (0, m.kt)(),
                    (function () {
                        if (
                            "u" < typeof PerformanceObserver ||
                            "u" < typeof window
                        )
                            return;
                        let e = [],
                            t = new PerformanceObserver((t) => {
                                for (let n of t.getEntries()) {
                                    let t = (function (e) {
                                        let t =
                                            "link" === e.initiatorType &&
                                            e.name.endsWith(".css")
                                                ? "css"
                                                : "script" ===
                                                        e.initiatorType &&
                                                    e.name.endsWith(".js")
                                                  ? "js"
                                                  : null;
                                        return t
                                            ? {
                                                  name: e.name,
                                                  resourceType: t,
                                                  responseStart:
                                                      e.responseStart,
                                                  responseEnd: e.responseEnd,
                                                  transferSize: e.transferSize,
                                                  decodedBodySize:
                                                      e.decodedBodySize,
                                                  encodedBodySize:
                                                      e.encodedBodySize,
                                              }
                                            : null;
                                    })(n);
                                    t && e.push(t);
                                }
                            });
                        (t.observe({ type: "resource", buffered: !0 }),
                            window.addEventListener(
                                "load",
                                () => {
                                    setTimeout(() => {
                                        let n;
                                        t.disconnect();
                                        let r =
                                                ((n = performance
                                                    .getEntriesByType("paint")
                                                    .find(
                                                        (e) =>
                                                            "first-paint" ===
                                                            e.name
                                                    )),
                                                n?.startTime),
                                            o = new Map([
                                                ["css-blocking", y()],
                                                ["css-deferred", y()],
                                                ["js-blocking", y()],
                                                ["js-deferred", y()],
                                            ]);
                                        for (let t of e) {
                                            let e = (function (e, t) {
                                                if (void 0 === t) return null;
                                                let n = e.responseEnd <= t;
                                                return "css" === e.resourceType
                                                    ? n
                                                        ? "css-blocking"
                                                        : "css-deferred"
                                                    : n
                                                      ? "js-blocking"
                                                      : "js-deferred";
                                            })(t, r);
                                            if (!e) continue;
                                            let n = o.get(e);
                                            n &&
                                                (function (e, t) {
                                                    var n;
                                                    let r =
                                                            (n = t.name)
                                                                .split("/")
                                                                .pop() ?? n,
                                                        o = g(t),
                                                        i =
                                                            Math.round(
                                                                100 *
                                                                    (g(t)
                                                                        ? 0
                                                                        : t.responseEnd -
                                                                          t.responseStart)
                                                            ) / 100,
                                                        a =
                                                            t.decodedBodySize ||
                                                            0,
                                                        s =
                                                            t.encodedBodySize ||
                                                            0;
                                                    (e.count++,
                                                        (e.totalSizeBytes += a),
                                                        (e.totalCompressedSizeBytes +=
                                                            s),
                                                        !o &&
                                                            (t.responseStart <
                                                                e.earliestResponseStart &&
                                                                (e.earliestResponseStart =
                                                                    t.responseStart),
                                                            t.responseEnd >
                                                                e.latestResponseEnd &&
                                                                (e.latestResponseEnd =
                                                                    t.responseEnd),
                                                            i >
                                                                e.maxAssetDownloadMs &&
                                                                (e.maxAssetDownloadMs =
                                                                    i)),
                                                        o && e.cachedCount++,
                                                        e.entries.push({
                                                            name: r,
                                                            nameWithoutHash:
                                                                r.replace(
                                                                    p,
                                                                    ".$1"
                                                                ),
                                                            cached: o,
                                                            downloadMs: i,
                                                            sizeBytes: a,
                                                            compressedSizeBytes:
                                                                s,
                                                        }));
                                                })(n, t);
                                        }
                                        for (let [e, t] of o)
                                            !(function (e, t, n) {
                                                if (0 === n.count) return;
                                                n.earliestResponseStart !==
                                                    1 / 0 &&
                                                    n.latestResponseEnd !==
                                                        -1 / 0 &&
                                                    (n.wallTimeMs =
                                                        Math.round(
                                                            (n.latestResponseEnd -
                                                                n.earliestResponseStart) *
                                                                100
                                                        ) / 100);
                                                let r = (function (e) {
                                                    if (0 === e.length)
                                                        return [e];
                                                    let t = [],
                                                        n = [],
                                                        r = 2;
                                                    for (let o of e) {
                                                        let e =
                                                            JSON.stringify(o)
                                                                .length + 2;
                                                        (n.length > 0 &&
                                                            r + e > 524288 &&
                                                            (t.push(n),
                                                            (n = []),
                                                            (r = 2)),
                                                            n.push(o),
                                                            (r += e));
                                                    }
                                                    return (
                                                        n.length > 0 &&
                                                            t.push(n),
                                                        t
                                                    );
                                                })(n.entries);
                                                for (let o of r)
                                                    (0, f.BI)(
                                                        e,
                                                        {
                                                            category: t,
                                                            count: n.count,
                                                            totalSizeBytes:
                                                                n.totalSizeBytes,
                                                            totalCompressedSizeBytes:
                                                                n.totalCompressedSizeBytes,
                                                            wallTimeMs:
                                                                n.wallTimeMs,
                                                            maxAssetDownloadMs:
                                                                n.maxAssetDownloadMs,
                                                            cachedCount:
                                                                n.cachedCount,
                                                            entries:
                                                                JSON.stringify(
                                                                    o
                                                                ),
                                                            chunkTotal:
                                                                r.length,
                                                        },
                                                        { batched: !0 }
                                                    );
                                            })("bundle-stats", e, t);
                                        e.length = 0;
                                    }, 0);
                                },
                                { once: !0 }
                            ));
                    })());
            }
        },
        351930(e, t, n) {
            let r;
            n.d(t, { AW: () => y, fE: () => g, ff: () => E, N7: () => w });
            var o = n(836301),
                i = n(296133),
                a = n(207753),
                s = n(724212);
            function l(e) {
                return (0, s.q)(e.stack || "").map((e) => ({
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
            n(958209);
            var u = n(826316),
                d = n(497398),
                h = n(941763);
            let m = !1,
                f = 0,
                p = Date.now(),
                g = new Set([
                    "AbortError",
                    "AuthSessionExpiredError",
                    "TypeError",
                    "RateLimitError",
                    "NotAcceptableError",
                    "SecFetchHeaderError",
                    "FetchNetworkError",
                    "NoiseError",
                    "ServiceUnavailableError",
                ]),
                y = new Set([
                    "Failed to fetch",
                    "NetworkError when attempting to fetch resource.",
                    "Unable to perform this operation. Please try again later.",
                ]);
            function w(e, t = {}) {
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
                                if (C.some((t) => e.includes(t))) return !0;
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
                    let n = Error(),
                        r = (function (e) {
                            try {
                                return JSON.stringify(e);
                            } catch {
                                return "Unserializable";
                            }
                        })(e);
                    S(
                        v(
                            {
                                type: "UnknownError",
                                value: `Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${r}`,
                                stacktrace: l(n),
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
                        "RateLimitError" === e.name ||
                        "NotAcceptableError" === e.name ||
                        "SecFetchHeaderError" === e.name ||
                        "FetchNetworkError" === e.name ||
                        "NoiseError" === e.name ||
                        ("ServiceUnavailableError" === e.name && E()) ||
                        (g.has(e.name) && y.has(e.message)) ||
                        (e.name.startsWith("ApiError") && y.has(e.message)))) ||
                    S(
                        v(
                            {
                                type: e.name,
                                value: e.message,
                                stacktrace: l(e),
                                catalogService:
                                    e.catalogService ||
                                    globalThis.document?.head?.querySelector(
                                        'meta[name="current-catalog-service"]'
                                    )?.content,
                                catalogServiceHash:
                                    e.catalogServiceHash ||
                                    globalThis.document?.head?.querySelector(
                                        'meta[name="current-catalog-service-hash"]'
                                    )?.content,
                            },
                            t
                        )
                    );
            }
            async function S(e) {
                let t;
                if (
                    ((t = Date.now() - p > 2592e5),
                    !(
                        !A &&
                        !m &&
                        f < 10 &&
                        (r ??=
                            (0, i.TT)() &&
                            (function () {
                                let e = u.cg?.history,
                                    t = u.cg?.location;
                                if (!e || !t) return !1;
                                try {
                                    return (
                                        e.replaceState(
                                            e.state,
                                            document.title,
                                            t.href
                                        ),
                                        !0
                                    );
                                } catch {
                                    return !1;
                                }
                            })())
                    ) ||
                        t ||
                        (0, a.H)())
                )
                    return;
                let n = document.head?.querySelector(
                    'meta[name="browser-errors-url"]'
                )?.content;
                if (n) {
                    if (
                        e.error.stacktrace.some(
                            (e) => b.test(e.filename) || b.test(e.function)
                        )
                    ) {
                        m = !0;
                        return;
                    }
                    f++;
                    try {
                        await fetch(n, {
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
            function v(e, t = {}) {
                let n,
                    r = { ...t };
                return (
                    r.reactAppName ||
                        (r.reactAppName = (function (e) {
                            let t = (function () {
                                let e = new Set();
                                for (let [t, n] of k)
                                    for (let r of document.querySelectorAll(t))
                                        if (r instanceof HTMLElement) {
                                            let t = r.getAttribute(n);
                                            t && e.add(t);
                                        }
                                return Array.from(e);
                            })();
                            if (!t || !t.length || !e || !e.length) return;
                            let n = new Set();
                            for (let r of e) {
                                if (!r || !r.filename) continue;
                                let e = r.filename.split(/[\\/]/).pop();
                                if (!e || n.has(e)) continue;
                                n.add(e);
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
                                    ((n = c("meta[name=analytics-location]"))
                                        ? n.content
                                        : window.location.pathname) +
                                    (function () {
                                        let e = c(
                                                "meta[name=analytics-location-query-strip]"
                                            ),
                                            t = "";
                                        e || (t = window.location.search);
                                        let n = c(
                                            "meta[name=analytics-location-params]"
                                        );
                                        for (let e of (n &&
                                            (t += (t ? "&" : "?") + n.content),
                                        document.querySelectorAll(
                                            "meta[name=analytics-param-rename]"
                                        ))) {
                                            let n = e.content.split(":", 2);
                                            t = t.replace(
                                                RegExp(
                                                    `(^|[?&])${n[0]}($|=)`,
                                                    "g"
                                                ),
                                                `$1${n[1]}$2`
                                            );
                                        }
                                        return t;
                                    })()
                                }` || window.location.href,
                            readyState: document.readyState,
                            referrer: (0, d.dR)(),
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
                            bundler: "rspack",
                            ui: !1,
                            release: document.head?.querySelector(
                                'meta[name="release"]'
                            )?.content,
                            pastRequestIds: (0, h.xA)(),
                        },
                        r
                    )
                );
            }
            let b = /(chrome|moz|safari)-extension:\/\//;
            function E() {
                return !document.head?.querySelector('meta[name="user-login"]')
                    ?.content;
            }
            let A = !1;
            (u.cg?.addEventListener("pageshow", () => (A = !1)),
                u.cg?.addEventListener("pagehide", () => (A = !0)),
                "function" == typeof BroadcastChannel &&
                    new BroadcastChannel(
                        "shared-worker-error"
                    ).addEventListener("message", (e) => {
                        w(e.data.error);
                    }));
            let C = [
                    "Object Not Found Matching Id",
                    "Not implemented on this platform",
                    "provider because it's not your default extension",
                ],
                k = [
                    ["react-app", "app-name"],
                    ["react-partial", "partial-name"],
                ];
        },
        258038(e, t, n) {
            let r;
            n.d(t, { sX: () => b, BI: () => E, lA: () => v, Ti: () => A });
            var o = n(70837),
                i = n(138768),
                a = n(135205),
                s = n(826316),
                l = n(251189);
            let c = "font-weight: bold; font-size: 12px;",
                u = new Set([
                    "actor_id",
                    "actor_login",
                    "actor_hash",
                    "referrer",
                    "request_id",
                    "visitor_id",
                    "region_edge",
                    "region_render",
                    "staff",
                    "service",
                    "react",
                    "app_name",
                    "page",
                    "title",
                ]),
                d = new Set([
                    "hpc",
                    "ttfb",
                    "fcp",
                    "lcp",
                    "fid",
                    "inp",
                    "cls",
                    "elementtiming",
                    "longTasks",
                    "longAnimationFrames",
                ]),
                h = new Set([
                    "react",
                    "reactApp",
                    "reactPartials",
                    "featureFlags",
                    "ssr",
                    "controller",
                    "action",
                    "routePattern",
                    "cpu",
                    "domNodes",
                    "previousDomNodes",
                    "navigationId",
                ]);
            function m(e) {
                try {
                    return JSON.parse(e);
                } catch {
                    return e;
                }
            }
            let { getItem: f } = (0, a.A)("localStorage"),
                p = "dimension_",
                g = [
                    "utm_source",
                    "utm_medium",
                    "utm_campaign",
                    "utm_term",
                    "utm_content",
                    "scid",
                ];
            function y(e) {
                try {
                    return (0, o.O)(e);
                } catch {
                    return;
                }
            }
            let w = y("octolytics");
            function S(e) {
                let t = y("octolytics")?.baseContext ?? {};
                if (t)
                    for (let [e, n] of (delete t.app_id,
                    delete t.event_url,
                    delete t.host,
                    Object.entries(t)))
                        e.startsWith(p) &&
                            ((t[e.replace(p, "")] = n), delete t[e]);
                let n = s.XC?.querySelector("meta[name=visitor-payload]");
                for (let [e, r] of (n &&
                    Object.assign(t, JSON.parse(atob(n.content))),
                new URLSearchParams(window.location.search)))
                    g.includes(e.toLowerCase()) && (t[e] = r);
                return (
                    (t.staff = (0, l.Xl)().toString()),
                    Object.assign(t, e)
                );
            }
            function v(e) {
                r?.sendPageView(S(e));
            }
            function b() {
                return s.XC?.head?.querySelector(
                    'meta[name="current-catalog-service"]'
                )?.content;
            }
            function E(e, t = {}, { batched: n = !1, page: o } = {}) {
                let i = b(),
                    a = i ? { service: i } : {};
                for (let [e, n] of Object.entries(t))
                    null != n && (a[e] = `${n}`);
                if (r) {
                    let t = e || "unknown",
                        i = S(a);
                    (o
                        ? (function (e, t, n) {
                              if (!r) return;
                              let o = {
                                  page:
                                      "u" < typeof window
                                          ? n
                                          : new URL(
                                                n,
                                                window.location.origin
                                            ).toString(),
                                  title: s.XC?.title ?? "",
                                  context: t,
                                  type: e,
                              };
                              r.send({ events: [o] });
                          })(t, i, o)
                        : n
                          ? r.sendBatchedEvent(t, i)
                          : r.sendEvent(t, i),
                        "true" === f("stats-dev-logger") &&
                            (function (e, t = {}) {
                                let n,
                                    r = [];
                                for (let [e, n] of Object.entries(t))
                                    u.has(e) || r.push([e, m(n)]);
                                let o =
                                    void 0 !== t.value
                                        ? ` ${"number" == typeof (n = m(t.value)) ? String(Math.round(n)) : String(n)}`
                                        : "";
                                (console.groupCollapsed(
                                    `%cevent%c ${e}${o}`,
                                    "background: #8957e5; color: #fff; padding: 2px 6px; border-radius: 3px; font-weight: bold; font-size: 11px;",
                                    c
                                ),
                                    "web-vital" === e
                                        ? (function (e) {
                                              for (let [t, n] of e)
                                                  d.has(t)
                                                      ? (console.log(
                                                            `%c${t}`,
                                                            c
                                                        ),
                                                        console.table(n))
                                                      : h.has(t) ||
                                                        console.log(`${t}:`, n);
                                          })(r)
                                        : (console.table(
                                              Object.fromEntries(
                                                  r.map(([e, t]) => [
                                                      e,
                                                      { value: t },
                                                  ])
                                              )
                                          ),
                                          console.log(Object.fromEntries(r))),
                                    console.groupEnd());
                            })(t, i));
                }
            }
            function A(e) {
                return Object.fromEntries(
                    Object.entries(e).map(([e, t]) => [e, JSON.stringify(t)])
                );
            }
            w &&
                (delete w.baseContext,
                (w.idleTimeout = 5e3),
                (w.maxBatchSize = 50),
                (r = new i.s(w)));
        },
        941763(e, t, n) {
            var r = n(826316);
            let o = Array(10).fill(null),
                i = 0;
            function a(e) {
                ((o[i] = e), (i = (i + 1) % 10));
            }
            function s() {
                let e = [];
                for (let t = 0; t < 10; t++) {
                    let n = o[(i - 1 - t + 10) % 10];
                    n && e.push(n);
                }
                return e;
            }
            function l() {
                let e = r.XC;
                if (!e) return;
                let t = e.querySelector('meta[name="request-id"]'),
                    n = t?.getAttribute("content");
                n && a(n);
            }
            n.d(t, { Ex: () => a, kt: () => l, xA: () => s });
        },
        135205(e, t, n) {
            var r = n(826316),
                o = n(251189);
            class i {
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
            }
            function a(
                e,
                t = { throwQuotaErrorsOnSet: !1 },
                n = r.cg,
                s = (e) => e,
                l = (e) => e
            ) {
                let c;
                try {
                    if (!n) throw Error();
                    c = n[e] || new i();
                } catch {
                    c = new i();
                }
                let { throwQuotaErrorsOnSet: u } = t;
                function d(e) {
                    t.sendCacheStats && (0, o.iv)({ incrementKey: e });
                }
                function h(e) {
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
                            let n = c.getItem(e);
                            if (!n) return null;
                            let r = `${e}:expiry`,
                                o = Number(c.getItem(r));
                            if (o && t > o)
                                return (
                                    h(e),
                                    h(r),
                                    d("SAFE_STORAGE_VALUE_EXPIRED"),
                                    null
                                );
                            return (d("SAFE_STORAGE_VALUE_WITHIN_TTL"), s(n));
                        } catch {
                            return null;
                        }
                    },
                    setItem: function (e, n, r = Date.now()) {
                        try {
                            if ((c.setItem(e, l(n)), t.ttl)) {
                                let n = `${e}:expiry`,
                                    o = r + t.ttl;
                                c.setItem(n, o.toString());
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
                    removeItem: h,
                    clear: () => c.clear(),
                    getKeys: function () {
                        return Object.keys(c);
                    },
                    get length() {
                        return c.length;
                    },
                };
            }
            function s(e) {
                return a(
                    e,
                    { throwQuotaErrorsOnSet: !1 },
                    r.cg,
                    JSON.parse,
                    JSON.stringify
                );
            }
            n.d(t, { A: () => a, D: () => s });
        },
        311730(e, t, n) {
            let {
                getItem: r,
                setItem: o,
                removeItem: i,
            } = (0, n(135205).A)("sessionStorage");
            n.d(t, {}, { Ai: i, Gq: r, SO: o });
        },
        497398(e, t, n) {
            var r = n(311730),
                o = n(826316),
                i = n(366953);
            let a = "soft-nav:fail",
                s = "soft-nav:fail-referrer",
                l = "soft-nav:referrer",
                c = "soft-nav:marker",
                u = "soft-nav:react-app-name",
                d = "soft-nav:latest-mechanism";
            function h() {
                ((0, r.SO)(c, "0"),
                    (0, r.Ai)(l),
                    (0, r.Ai)(a),
                    (0, r.Ai)(s),
                    (0, r.Ai)(u),
                    (0, r.Ai)(d));
            }
            function m(e) {
                (0, r.SO)(c, e);
            }
            function f() {
                (0, r.SO)(c, "0");
            }
            function p() {
                let e = (0, r.Gq)(c);
                return e && "0" !== e;
            }
            function g() {
                return (0, r.Gq)(c);
            }
            function y() {
                return !!w();
            }
            function w() {
                return (0, r.Gq)(a);
            }
            function S(e) {
                ((0, r.SO)(a, e || "reload"),
                    (0, r.SO)(s, window.location.href));
            }
            function v() {
                (0, r.SO)(l, window.location.href);
            }
            function b() {
                return (0, r.Gq)(l) || document.referrer;
            }
            function E() {
                let e = (0, i.f)();
                e ? (0, r.SO)(u, e) : (0, r.Ai)(u);
            }
            function A() {
                return (0, r.Gq)(u);
            }
            function C() {
                return (
                    !!o.XC?.querySelector("react-app")?.getAttribute(
                        "app-name"
                    ) || !!o.XC?.querySelector("projects-v2")
                );
            }
            function k(e) {
                (0, r.SO)(d, e);
            }
            n.d(t, {
                Ff: () => f,
                HK: () => v,
                JA: () => k,
                LM: () => p,
                Pv: () => A,
                Vy: () => m,
                ZW: () => E,
                dR: () => b,
                di: () => g,
                gc: () => C,
                k9: () => S,
                my: () => w,
                wG: () => y,
                xT: () => h,
            });
        },
        789272() {
            if (
                void 0 !== globalThis.Element &&
                void 0 !== globalThis.Document &&
                (!("ariaNotify" in Element.prototype) ||
                    !("ariaNotify" in Document.prototype))
            ) {
                let e = `${Date.now()}`;
                try {
                    e = crypto.randomUUID();
                } catch {}
                let t = Symbol(),
                    n = `live-region-${e}`;
                class r {
                    element;
                    message;
                    priority = "normal";
                    constructor({
                        element: e,
                        message: t,
                        priority: n = "normal",
                    }) {
                        ((this.element = e),
                            (this.message = t),
                            (this.priority = n));
                    }
                    #e() {
                        return (
                            this.element.isConnected &&
                            !this.element.closest("[inert]") &&
                            (this.element.ownerDocument
                                .querySelector(
                                    CSS.supports("selector(:modal)")
                                        ? ":modal"
                                        : "dialog[open]"
                                )
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
                        let r = e.querySelector(n);
                        (r || ((r = document.createElement(n)), e.append(r)),
                            await new Promise((e) => setTimeout(e, 250)),
                            r.handleMessage(t, this.message));
                    }
                }
                let o = new (class {
                    #t = [];
                    #n;
                    enqueue(e) {
                        let { priority: t } = e;
                        if ("high" === t) {
                            let t = this.#t.findLastIndex(
                                (e) => "high" === e.priority
                            );
                            this.#t.splice(t + 1, 0, e);
                        } else this.#t.push(e);
                        this.#n || this.#r();
                    }
                    async #r() {
                        ((this.#n = this.#t.shift()),
                            this.#n && (await this.#n.announce(), this.#r()));
                    }
                })();
                class i extends HTMLElement {
                    #o = this.attachShadow({ mode: "closed" });
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
                    handleMessage(e = null, n = "") {
                        t === e &&
                            (this.#o.textContent == n && (n += "\xa0"),
                            (this.#o.textContent = n));
                    }
                }
                (customElements.define(n, i),
                    "ariaNotify" in Element.prototype ||
                        (Element.prototype.ariaNotify = function (
                            e,
                            { priority: t = "normal" } = {}
                        ) {
                            o.enqueue(
                                new r({
                                    element: this,
                                    message: e,
                                    priority: t,
                                })
                            );
                        }),
                    "ariaNotify" in Document.prototype ||
                        (Document.prototype.ariaNotify = function (
                            e,
                            { priority: t = "normal" } = {}
                        ) {
                            o.enqueue(
                                new r({
                                    element: this.documentElement,
                                    message: e,
                                    priority: t,
                                })
                            );
                        }));
            }
        },
        138768(e, t, n) {
            n.d(t, { s: () => i });
            let r = [
                "utm_source",
                "utm_medium",
                "utm_campaign",
                "utm_term",
                "utm_content",
                "scid",
            ];
            var o = n(836301);
            class i {
                constructor(e) {
                    ((this.options = e),
                        (this.eventBatch = []),
                        (this.idleCallbackId = null),
                        (this.waitTimerId = null),
                        (this.onVisibilityChange = () => {
                            "hidden" === document.visibilityState &&
                                this.flushBatch();
                        }),
                        (this.boundFlush = () => this.flushBatch()),
                        "u" > typeof document &&
                            document.addEventListener(
                                "visibilitychange",
                                this.onVisibilityChange
                            ),
                        "u" > typeof window &&
                            window.addEventListener(
                                "pagehide",
                                this.boundFlush
                            ));
                }
                get collectorUrl() {
                    return this.options.collectorUrl;
                }
                get clientId() {
                    return this.options.clientId
                        ? this.options.clientId
                        : (0, o.y)();
                }
                get maxBatchSize() {
                    return this.options.maxBatchSize ?? 10;
                }
                get idleTimeout() {
                    return this.options.idleTimeout ?? 1e3;
                }
                createEvent(e) {
                    return {
                        page: location.href,
                        title: document.title,
                        context: {
                            ...this.options.baseContext,
                            ...(function () {
                                let e = {};
                                try {
                                    for (let [t, n] of new URLSearchParams(
                                        window.location.search
                                    )) {
                                        let o = t.toLowerCase();
                                        r.includes(o) && (e[o] = n);
                                    }
                                    return e;
                                } catch (e) {
                                    return {};
                                }
                            })(),
                            ...e,
                        },
                    };
                }
                sendPageView(e) {
                    let t = this.createEvent(e);
                    this.send({ page_views: [t] });
                }
                sendEvent(e, t) {
                    let n = { ...this.createEvent(t), type: e };
                    this.send({ events: [n] });
                }
                sendBatchedEvent(e, t) {
                    let n = { ...this.createEvent(t), type: e };
                    (this.eventBatch.push(n),
                        this.eventBatch.length >= this.maxBatchSize
                            ? this.flushBatch()
                            : this.scheduleFlush());
                }
                flushBatch() {
                    if (0 === this.eventBatch.length) return;
                    this.cancelScheduledFlush();
                    let e = this.eventBatch;
                    ((this.eventBatch = []), this.send({ events: e }));
                }
                destroy() {
                    (this.flushBatch(),
                        "u" > typeof document &&
                            document.removeEventListener(
                                "visibilitychange",
                                this.onVisibilityChange
                            ),
                        "u" > typeof window &&
                            window.removeEventListener(
                                "pagehide",
                                this.boundFlush
                            ));
                }
                scheduleFlush() {
                    null === this.idleCallbackId &&
                        null === this.waitTimerId &&
                        (this.waitTimerId = setTimeout(() => {
                            ((this.waitTimerId = null),
                                "function" == typeof requestIdleCallback
                                    ? (this.idleCallbackId =
                                          requestIdleCallback(this.boundFlush))
                                    : this.boundFlush());
                        }, this.idleTimeout));
                }
                cancelScheduledFlush() {
                    (null !== this.idleCallbackId &&
                        ("function" == typeof cancelIdleCallback &&
                            cancelIdleCallback(this.idleCallbackId),
                        (this.idleCallbackId = null)),
                        null !== this.waitTimerId &&
                            (clearTimeout(this.waitTimerId),
                            (this.waitTimerId = null)));
                }
                send({ page_views: e, events: t }) {
                    let n = JSON.stringify({
                        client_id: this.clientId,
                        page_views: e,
                        events: t,
                        request_context: {
                            referrer: (function () {
                                let e;
                                try {
                                    e = window.top.document.referrer;
                                } catch (t) {
                                    if (window.parent)
                                        try {
                                            e = window.parent.document.referrer;
                                        } catch (e) {}
                                }
                                return ("" === e && (e = document.referrer), e);
                            })(),
                            user_agent: navigator.userAgent,
                            screen_resolution: (function () {
                                try {
                                    return `${screen.width}x${screen.height}`;
                                } catch (e) {
                                    return "unknown";
                                }
                            })(),
                            browser_resolution: (function () {
                                let e = 0,
                                    t = 0;
                                try {
                                    return (
                                        "number" == typeof window.innerWidth
                                            ? ((t = window.innerWidth),
                                              (e = window.innerHeight))
                                            : null !=
                                                    document.documentElement &&
                                                null !=
                                                    document.documentElement
                                                        .clientWidth
                                              ? ((t =
                                                    document.documentElement
                                                        .clientWidth),
                                                (e =
                                                    document.documentElement
                                                        .clientHeight))
                                              : null != document.body &&
                                                null !=
                                                    document.body.clientWidth &&
                                                ((t =
                                                    document.body.clientWidth),
                                                (e =
                                                    document.body
                                                        .clientHeight)),
                                        `${t}x${e}`
                                    );
                                } catch (e) {
                                    return "unknown";
                                }
                            })(),
                            browser_languages: navigator.languages
                                ? navigator.languages.join(",")
                                : navigator.language || "",
                            pixel_ratio: window.devicePixelRatio,
                            timestamp: Date.now(),
                            tz_seconds: -60 * new Date().getTimezoneOffset(),
                        },
                    });
                    try {
                        if (navigator.sendBeacon)
                            return void navigator.sendBeacon(
                                this.collectorUrl,
                                n
                            );
                    } catch {}
                    fetch(this.collectorUrl, {
                        method: "POST",
                        cache: "no-cache",
                        headers: { "Content-Type": "application/json" },
                        body: n,
                        keepalive: !1,
                    });
                }
            }
        },
        70837(e, t, n) {
            function r(e = "ha") {
                let t,
                    n = {};
                for (let r of Array.from(
                    document.head.querySelectorAll(`meta[name^="${e}-"]`)
                )) {
                    let { name: o, content: i } = r,
                        a = o.replace(`${e}-`, "").replace(/-/g, "_");
                    "url" === a ? (t = i) : (n[a] = i);
                }
                if (!t)
                    throw Error(`AnalyticsClient ${e}-url meta tag not found`);
                return {
                    collectorUrl: t,
                    ...(Object.keys(n).length > 0 ? { baseContext: n } : {}),
                };
            }
            n.d(t, { O: () => r });
        },
    },
    function (e) {
        (e.O(0, [34646, 76015, 78205, 85924], function () {
            return e((e.s = 478865));
        }),
            e.O());
    },
]);
//# sourceMappingURL=environment-84f18c48c0047c1d-8b931d525c14dbce.js.map
