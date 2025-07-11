"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    [
        "vendors-node_modules_tanstack_query-core_build_modern_queryObserver_js-node_modules_tanstack_-defd52",
    ],
    {
        1651: (e, t, r) => {
            r.d(t, {
                $: () => c,
            });
            var s = r(29658),
                i = r(26261),
                n = r(79757),
                u = r(66500),
                a = r(94658),
                h = r(24880),
                c = class extends u.Q {
                    constructor(e, t) {
                        super(),
                            (this.options = t),
                            (this.#e = e),
                            (this.#t = null),
                            (this.#r = (0, a.T)()),
                            this.options.experimental_prefetchInRender ||
                                this.#r.reject(
                                    Error(
                                        "experimental_prefetchInRender feature flag is not enabled"
                                    )
                                ),
                            this.bindMethods(),
                            this.setOptions(t);
                    }
                    #e;
                    #s = void 0;
                    #i = void 0;
                    #n = void 0;
                    #u;
                    #a;
                    #r;
                    #t;
                    #h;
                    #c;
                    #o;
                    #l;
                    #d;
                    #p;
                    #f = new Set();
                    bindMethods() {
                        this.refetch = this.refetch.bind(this);
                    }
                    onSubscribe() {
                        1 === this.listeners.size &&
                            (this.#s.addObserver(this),
                            o(this.#s, this.options)
                                ? this.#y()
                                : this.updateResult(),
                            this.#R());
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.destroy();
                    }
                    shouldFetchOnReconnect() {
                        return l(
                            this.#s,
                            this.options,
                            this.options.refetchOnReconnect
                        );
                    }
                    shouldFetchOnWindowFocus() {
                        return l(
                            this.#s,
                            this.options,
                            this.options.refetchOnWindowFocus
                        );
                    }
                    destroy() {
                        (this.listeners = new Set()),
                            this.#v(),
                            this.#b(),
                            this.#s.removeObserver(this);
                    }
                    setOptions(e) {
                        let t = this.options,
                            r = this.#s;
                        if (
                            ((this.options = this.#e.defaultQueryOptions(e)),
                            void 0 !== this.options.enabled &&
                                "boolean" != typeof this.options.enabled &&
                                "function" != typeof this.options.enabled &&
                                "boolean" !=
                                    typeof (0, h.Eh)(
                                        this.options.enabled,
                                        this.#s
                                    ))
                        )
                            throw Error(
                                "Expected enabled to be a boolean or a callback that returns a boolean"
                            );
                        this.#Q(),
                            this.#s.setOptions(this.options),
                            t._defaulted &&
                                !(0, h.f8)(this.options, t) &&
                                this.#e.getQueryCache().notify({
                                    type: "observerOptionsUpdated",
                                    query: this.#s,
                                    observer: this,
                                });
                        let s = this.hasListeners();
                        s && d(this.#s, r, this.options, t) && this.#y(),
                            this.updateResult(),
                            s &&
                                (this.#s !== r ||
                                    (0, h.Eh)(this.options.enabled, this.#s) !==
                                        (0, h.Eh)(t.enabled, this.#s) ||
                                    (0, h.d2)(
                                        this.options.staleTime,
                                        this.#s
                                    ) !== (0, h.d2)(t.staleTime, this.#s)) &&
                                this.#m();
                        let i = this.#I();
                        s &&
                            (this.#s !== r ||
                                (0, h.Eh)(this.options.enabled, this.#s) !==
                                    (0, h.Eh)(t.enabled, this.#s) ||
                                i !== this.#p) &&
                            this.#g(i);
                    }
                    getOptimisticResult(e) {
                        var t, r;
                        let s = this.#e.getQueryCache().build(this.#e, e),
                            i = this.createResult(s, e);
                        return (
                            (t = this),
                            (r = i),
                            (0, h.f8)(t.getCurrentResult(), r) ||
                                ((this.#n = i),
                                (this.#a = this.options),
                                (this.#u = this.#s.state)),
                            i
                        );
                    }
                    getCurrentResult() {
                        return this.#n;
                    }
                    trackResult(e, t) {
                        let r = {};
                        return (
                            Object.keys(e).forEach((s) => {
                                Object.defineProperty(r, s, {
                                    configurable: !1,
                                    enumerable: !0,
                                    get: () => (
                                        this.trackProp(s), t?.(s), e[s]
                                    ),
                                });
                            }),
                            r
                        );
                    }
                    trackProp(e) {
                        this.#f.add(e);
                    }
                    getCurrentQuery() {
                        return this.#s;
                    }
                    refetch({ ...e } = {}) {
                        return this.fetch({
                            ...e,
                        });
                    }
                    fetchOptimistic(e) {
                        let t = this.#e.defaultQueryOptions(e),
                            r = this.#e.getQueryCache().build(this.#e, t);
                        return r.fetch().then(() => this.createResult(r, t));
                    }
                    fetch(e) {
                        return this.#y({
                            ...e,
                            cancelRefetch: e.cancelRefetch ?? !0,
                        }).then(() => (this.updateResult(), this.#n));
                    }
                    #y(e) {
                        this.#Q();
                        let t = this.#s.fetch(this.options, e);
                        return e?.throwOnError || (t = t.catch(h.lQ)), t;
                    }
                    #m() {
                        this.#v();
                        let e = (0, h.d2)(this.options.staleTime, this.#s);
                        if (h.S$ || this.#n.isStale || !(0, h.gn)(e)) return;
                        let t = (0, h.j3)(this.#n.dataUpdatedAt, e);
                        this.#l = setTimeout(() => {
                            this.#n.isStale || this.updateResult();
                        }, t + 1);
                    }
                    #I() {
                        return (
                            ("function" == typeof this.options.refetchInterval
                                ? this.options.refetchInterval(this.#s)
                                : this.options.refetchInterval) ?? !1
                        );
                    }
                    #g(e) {
                        this.#b(),
                            (this.#p = e),
                            !h.S$ &&
                                !1 !==
                                    (0, h.Eh)(this.options.enabled, this.#s) &&
                                (0, h.gn)(this.#p) &&
                                0 !== this.#p &&
                                (this.#d = setInterval(() => {
                                    (this.options.refetchIntervalInBackground ||
                                        s.m.isFocused()) &&
                                        this.#y();
                                }, this.#p));
                    }
                    #R() {
                        this.#m(), this.#g(this.#I());
                    }
                    #v() {
                        this.#l && (clearTimeout(this.#l), (this.#l = void 0));
                    }
                    #b() {
                        this.#d && (clearInterval(this.#d), (this.#d = void 0));
                    }
                    createResult(e, t) {
                        let r,
                            s = this.#s,
                            i = this.options,
                            u = this.#n,
                            c = this.#u,
                            l = this.#a,
                            f = e !== s ? e.state : this.#i,
                            { state: y } = e,
                            R = {
                                ...y,
                            },
                            v = !1;
                        if (t._optimisticResults) {
                            let r = this.hasListeners(),
                                u = !r && o(e, t),
                                a = r && d(e, s, t, i);
                            (u || a) &&
                                (R = {
                                    ...R,
                                    ...(0, n.k)(y.data, e.options),
                                }),
                                "isRestoring" === t._optimisticResults &&
                                    (R.fetchStatus = "idle");
                        }
                        let { error: b, errorUpdatedAt: Q, status: m } = R;
                        if (t.select && void 0 !== R.data)
                            if (u && R.data === c?.data && t.select === this.#h)
                                r = this.#c;
                            else
                                try {
                                    (this.#h = t.select),
                                        (r = t.select(R.data)),
                                        (r = (0, h.pl)(u?.data, r, t)),
                                        (this.#c = r),
                                        (this.#t = null);
                                } catch (e) {
                                    this.#t = e;
                                }
                        else r = R.data;
                        if (
                            void 0 !== t.placeholderData &&
                            void 0 === r &&
                            "pending" === m
                        ) {
                            let e;
                            if (
                                u?.isPlaceholderData &&
                                t.placeholderData === l?.placeholderData
                            )
                                e = u.data;
                            else if (
                                ((e =
                                    "function" == typeof t.placeholderData
                                        ? t.placeholderData(
                                              this.#o?.state.data,
                                              this.#o
                                          )
                                        : t.placeholderData),
                                t.select && void 0 !== e)
                            )
                                try {
                                    (e = t.select(e)), (this.#t = null);
                                } catch (e) {
                                    this.#t = e;
                                }
                            void 0 !== e &&
                                ((m = "success"),
                                (r = (0, h.pl)(u?.data, e, t)),
                                (v = !0));
                        }
                        this.#t &&
                            ((b = this.#t),
                            (r = this.#c),
                            (Q = Date.now()),
                            (m = "error"));
                        let I = "fetching" === R.fetchStatus,
                            g = "pending" === m,
                            E = "error" === m,
                            O = g && I,
                            T = void 0 !== r,
                            S = {
                                status: m,
                                fetchStatus: R.fetchStatus,
                                isPending: g,
                                isSuccess: "success" === m,
                                isError: E,
                                isInitialLoading: O,
                                isLoading: O,
                                data: r,
                                dataUpdatedAt: R.dataUpdatedAt,
                                error: b,
                                errorUpdatedAt: Q,
                                failureCount: R.fetchFailureCount,
                                failureReason: R.fetchFailureReason,
                                errorUpdateCount: R.errorUpdateCount,
                                isFetched:
                                    R.dataUpdateCount > 0 ||
                                    R.errorUpdateCount > 0,
                                isFetchedAfterMount:
                                    R.dataUpdateCount > f.dataUpdateCount ||
                                    R.errorUpdateCount > f.errorUpdateCount,
                                isFetching: I,
                                isRefetching: I && !g,
                                isLoadingError: E && !T,
                                isPaused: "paused" === R.fetchStatus,
                                isPlaceholderData: v,
                                isRefetchError: E && T,
                                isStale: p(e, t),
                                refetch: this.refetch,
                                promise: this.#r,
                            };
                        if (this.options.experimental_prefetchInRender) {
                            let t = (e) => {
                                    "error" === S.status
                                        ? e.reject(S.error)
                                        : void 0 !== S.data &&
                                          e.resolve(S.data);
                                },
                                r = () => {
                                    t((this.#r = S.promise = (0, a.T)()));
                                },
                                i = this.#r;
                            switch (i.status) {
                                case "pending":
                                    e.queryHash === s.queryHash && t(i);
                                    break;
                                case "fulfilled":
                                    ("error" === S.status ||
                                        S.data !== i.value) &&
                                        r();
                                    break;
                                case "rejected":
                                    ("error" !== S.status ||
                                        S.error !== i.reason) &&
                                        r();
                            }
                        }
                        return S;
                    }
                    updateResult() {
                        let e = this.#n,
                            t = this.createResult(this.#s, this.options);
                        (this.#u = this.#s.state),
                            (this.#a = this.options),
                            void 0 !== this.#u.data && (this.#o = this.#s),
                            (0, h.f8)(t, e) ||
                                ((this.#n = t),
                                this.#E({
                                    listeners: (() => {
                                        if (!e) return !0;
                                        let { notifyOnChangeProps: t } =
                                                this.options,
                                            r =
                                                "function" == typeof t
                                                    ? t()
                                                    : t;
                                        if (
                                            "all" === r ||
                                            (!r && !this.#f.size)
                                        )
                                            return !0;
                                        let s = new Set(r ?? this.#f);
                                        return (
                                            this.options.throwOnError &&
                                                s.add("error"),
                                            Object.keys(this.#n).some(
                                                (t) =>
                                                    this.#n[t] !== e[t] &&
                                                    s.has(t)
                                            )
                                        );
                                    })(),
                                }));
                    }
                    #Q() {
                        let e = this.#e
                            .getQueryCache()
                            .build(this.#e, this.options);
                        if (e === this.#s) return;
                        let t = this.#s;
                        (this.#s = e),
                            (this.#i = e.state),
                            this.hasListeners() &&
                                (t?.removeObserver(this), e.addObserver(this));
                    }
                    onQueryUpdate() {
                        this.updateResult(), this.hasListeners() && this.#R();
                    }
                    #E(e) {
                        i.jG.batch(() => {
                            e.listeners &&
                                this.listeners.forEach((e) => {
                                    e(this.#n);
                                }),
                                this.#e.getQueryCache().notify({
                                    query: this.#s,
                                    type: "observerResultsUpdated",
                                });
                        });
                    }
                };
            function o(e, t) {
                return (
                    (!1 !== (0, h.Eh)(t.enabled, e) &&
                        void 0 === e.state.data &&
                        ("error" !== e.state.status ||
                            !1 !== t.retryOnMount)) ||
                    (void 0 !== e.state.data && l(e, t, t.refetchOnMount))
                );
            }
            function l(e, t, r) {
                if (!1 !== (0, h.Eh)(t.enabled, e)) {
                    let s = "function" == typeof r ? r(e) : r;
                    return "always" === s || (!1 !== s && p(e, t));
                }
                return !1;
            }
            function d(e, t, r, s) {
                return (
                    (e !== t || !1 === (0, h.Eh)(s.enabled, e)) &&
                    (!r.suspense || "error" !== e.state.status) &&
                    p(e, r)
                );
            }
            function p(e, t) {
                return (
                    !1 !== (0, h.Eh)(t.enabled, e) &&
                    e.isStaleByTime((0, h.d2)(t.staleTime, e))
                );
            }
        },
        96672: (e, t, r) => {
            r.d(t, {
                U: () => h,
                h: () => a,
            });
            var s = r(96540),
                i = r(74848);
            function n() {
                let e = !1;
                return {
                    clearReset: () => {
                        e = !1;
                    },
                    reset: () => {
                        e = !0;
                    },
                    isReset: () => e,
                };
            }
            var u = s.createContext(n()),
                a = () => s.useContext(u),
                h = ({ children: e }) => {
                    let [t] = s.useState(() => n());
                    return (0, i.jsx)(u.Provider, {
                        value: t,
                        children: "function" == typeof e ? e(t) : e,
                    });
                };
        },
        68590: (e, t, r) => {
            r.d(t, {
                $1: () => a,
                LJ: () => n,
                wZ: () => u,
            });
            var s = r(96540),
                i = r(54362),
                n = (e, t) => {
                    (e.suspense ||
                        e.throwOnError ||
                        e.experimental_prefetchInRender) &&
                        !t.isReset() &&
                        (e.retryOnMount = !1);
                },
                u = (e) => {
                    s.useEffect(() => {
                        e.clearReset();
                    }, [e]);
                },
                a = ({
                    result: e,
                    errorResetBoundary: t,
                    throwOnError: r,
                    query: s,
                    suspense: n,
                }) =>
                    e.isError &&
                    !t.isReset() &&
                    !e.isFetching &&
                    s &&
                    ((n && void 0 === e.data) || (0, i.G)(r, [e.error, s]));
        },
        98378: (e, t, r) => {
            r.d(t, {
                d: () => u,
                w: () => n,
            });
            var s = r(96540),
                i = s.createContext(!1),
                n = () => s.useContext(i),
                u = i.Provider;
        },
        60791: (e, t, r) => {
            r.d(t, {
                EU: () => u,
                R3: () => s,
                iL: () => a,
                jv: () => i,
                nE: () => n,
            });
            var s = (e, t) => void 0 === t.state.data,
                i = (e) => {
                    let t = e.staleTime;
                    e.suspense &&
                        ((e.staleTime =
                            "function" == typeof t
                                ? (...e) => Math.max(t(...e), 1e3)
                                : Math.max(t ?? 1e3, 1e3)),
                        "number" == typeof e.gcTime &&
                            (e.gcTime = Math.max(e.gcTime, 1e3)));
                },
                n = (e, t) => e.isLoading && e.isFetching && !t,
                u = (e, t) => e?.suspense && t.isPending,
                a = (e, t, r) =>
                    t.fetchOptimistic(e).catch(() => {
                        r.clearReset();
                    });
        },
        15985: (e, t, r) => {
            r.d(t, {
                t: () => d,
            });
            var s = r(96540),
                i = r(26261),
                n = r(24880),
                u = r(97665),
                a = r(96672),
                h = r(68590),
                c = r(98378),
                o = r(60791),
                l = r(54362);
            function d(e, t, r) {
                let d = (0, u.jE)(r),
                    p = (0, c.w)(),
                    f = (0, a.h)(),
                    y = d.defaultQueryOptions(e);
                d.getDefaultOptions().queries?._experimental_beforeQuery?.(y),
                    (y._optimisticResults = p ? "isRestoring" : "optimistic"),
                    (0, o.jv)(y),
                    (0, h.LJ)(y, f),
                    (0, h.wZ)(f);
                let R = !d.getQueryCache().get(y.queryHash),
                    [v] = s.useState(() => new t(d, y)),
                    b = v.getOptimisticResult(y),
                    Q = !p && !1 !== e.subscribed;
                if (
                    (s.useSyncExternalStore(
                        s.useCallback(
                            (e) => {
                                let t = Q
                                    ? v.subscribe(i.jG.batchCalls(e))
                                    : l.l;
                                return v.updateResult(), t;
                            },
                            [v, Q]
                        ),
                        () => v.getCurrentResult(),
                        () => v.getCurrentResult()
                    ),
                    s.useEffect(() => {
                        v.setOptions(y);
                    }, [y, v]),
                    (0, o.EU)(y, b))
                )
                    throw (0, o.iL)(y, v, f);
                if (
                    (0, h.$1)({
                        result: b,
                        errorResetBoundary: f,
                        throwOnError: y.throwOnError,
                        query: d.getQueryCache().get(y.queryHash),
                        suspense: y.suspense,
                    })
                )
                    throw b.error;
                if (
                    (d
                        .getDefaultOptions()
                        .queries?._experimental_afterQuery?.(y, b),
                    y.experimental_prefetchInRender && !n.S$ && (0, o.nE)(b, p))
                ) {
                    let e = R
                        ? (0, o.iL)(y, v, f)
                        : d.getQueryCache().get(y.queryHash)?.promise;
                    e?.catch(l.l).finally(() => {
                        v.updateResult();
                    });
                }
                return y.notifyOnChangeProps ? b : v.trackResult(b);
            }
        },
        54362: (e, t, r) => {
            function s(e, t) {
                return "function" == typeof e ? e(...t) : !!e;
            }
            function i() {}
            r.d(t, {
                G: () => s,
                l: () => i,
            });
        },
    },
]);
//# sourceMappingURL=vendors-node_modules_tanstack_query-core_build_modern_queryObserver_js-node_modules_tanstack_-defd52-038063e74b22.js.map
