"use strict";
(globalThis.webpackChunk_github_ui_github_ui =
    globalThis.webpackChunk_github_ui_github_ui || []).push([
    ["vendors-node_modules_tanstack_query-core_build_modern_queryClient_js"],
    {
        29658: (t, e, s) => {
            s.d(e, { m: () => n });
            var i = s(66500),
                r = s(24880),
                n = new (class extends i.Q {
                    #t;
                    #e;
                    #s;
                    constructor() {
                        (super(),
                            (this.#s = (t) => {
                                if (!r.S$ && window.addEventListener) {
                                    let e = () => t();
                                    return (
                                        window.addEventListener(
                                            "visibilitychange",
                                            e,
                                            !1
                                        ),
                                        () => {
                                            window.removeEventListener(
                                                "visibilitychange",
                                                e
                                            );
                                        }
                                    );
                                }
                            }));
                    }
                    onSubscribe() {
                        this.#e || this.setEventListener(this.#s);
                    }
                    onUnsubscribe() {
                        this.hasListeners() ||
                            (this.#e?.(), (this.#e = void 0));
                    }
                    setEventListener(t) {
                        ((this.#s = t),
                            this.#e?.(),
                            (this.#e = t((t) => {
                                "boolean" == typeof t
                                    ? this.setFocused(t)
                                    : this.onFocus();
                            })));
                    }
                    setFocused(t) {
                        this.#t !== t && ((this.#t = t), this.onFocus());
                    }
                    onFocus() {
                        let t = this.isFocused();
                        this.listeners.forEach((e) => {
                            e(t);
                        });
                    }
                    isFocused() {
                        return "boolean" == typeof this.#t
                            ? this.#t
                            : globalThis.document?.visibilityState !== "hidden";
                    }
                })();
        },
        58959: (t, e, s) => {
            s.d(e, { PL: () => r, RQ: () => u, rB: () => o });
            var i = s(24880);
            function r(t) {
                return {
                    onFetch: (e, s) => {
                        let r = e.options,
                            o = e.fetchOptions?.meta?.fetchMore?.direction,
                            u = e.state.data?.pages || [],
                            h = e.state.data?.pageParams || [],
                            c = { pages: [], pageParams: [] },
                            l = 0,
                            d = async () => {
                                let s = !1,
                                    d = (0, i.ZM)(e.options, e.fetchOptions),
                                    f = async (t, r, n) => {
                                        if (s) return Promise.reject();
                                        if (null == r && t.pages.length)
                                            return Promise.resolve(t);
                                        let a = {
                                            client: e.client,
                                            queryKey: e.queryKey,
                                            pageParam: r,
                                            direction: n
                                                ? "backward"
                                                : "forward",
                                            meta: e.options.meta,
                                        };
                                        Object.defineProperty(a, "signal", {
                                            enumerable: !0,
                                            get: () => (
                                                e.signal.aborted
                                                    ? (s = !0)
                                                    : e.signal.addEventListener(
                                                          "abort",
                                                          () => {
                                                              s = !0;
                                                          }
                                                      ),
                                                e.signal
                                            ),
                                        });
                                        let o = await d(a),
                                            { maxPages: u } = e.options,
                                            h = n ? i.ZZ : i.y9;
                                        return {
                                            pages: h(t.pages, o, u),
                                            pageParams: h(t.pageParams, r, u),
                                        };
                                    };
                                if (o && u.length) {
                                    let t = "backward" === o,
                                        e = { pages: u, pageParams: h },
                                        s = (t ? a : n)(r, e);
                                    c = await f(e, s, t);
                                } else {
                                    let e = t ?? u.length;
                                    do {
                                        let t =
                                            0 === l
                                                ? (h[0] ?? r.initialPageParam)
                                                : n(r, c);
                                        if (l > 0 && null == t) break;
                                        ((c = await f(c, t)), l++);
                                    } while (l < e);
                                }
                                return c;
                            };
                        e.options.persister
                            ? (e.fetchFn = () =>
                                  e.options.persister?.(
                                      d,
                                      {
                                          client: e.client,
                                          queryKey: e.queryKey,
                                          meta: e.options.meta,
                                          signal: e.signal,
                                      },
                                      s
                                  ))
                            : (e.fetchFn = d);
                    },
                };
            }
            function n(t, { pages: e, pageParams: s }) {
                let i = e.length - 1;
                return e.length > 0
                    ? t.getNextPageParam(e[i], e, s[i], s)
                    : void 0;
            }
            function a(t, { pages: e, pageParams: s }) {
                return e.length > 0
                    ? t.getPreviousPageParam?.(e[0], e, s[0], s)
                    : void 0;
            }
            function o(t, e) {
                return !!e && null != n(t, e);
            }
            function u(t, e) {
                return !!e && !!t.getPreviousPageParam && null != a(t, e);
            }
        },
        36158: (t, e, s) => {
            s.d(e, { $: () => o, s: () => a });
            var i = s(26261),
                r = s(71692),
                n = s(58904),
                a = class extends r.k {
                    #i;
                    #r;
                    #n;
                    constructor(t) {
                        (super(),
                            (this.mutationId = t.mutationId),
                            (this.#r = t.mutationCache),
                            (this.#i = []),
                            (this.state = t.state || o()),
                            this.setOptions(t.options),
                            this.scheduleGc());
                    }
                    setOptions(t) {
                        ((this.options = t),
                            this.updateGcTime(this.options.gcTime));
                    }
                    get meta() {
                        return this.options.meta;
                    }
                    addObserver(t) {
                        this.#i.includes(t) ||
                            (this.#i.push(t),
                            this.clearGcTimeout(),
                            this.#r.notify({
                                type: "observerAdded",
                                mutation: this,
                                observer: t,
                            }));
                    }
                    removeObserver(t) {
                        ((this.#i = this.#i.filter((e) => e !== t)),
                            this.scheduleGc(),
                            this.#r.notify({
                                type: "observerRemoved",
                                mutation: this,
                                observer: t,
                            }));
                    }
                    optionalRemove() {
                        this.#i.length ||
                            ("pending" === this.state.status
                                ? this.scheduleGc()
                                : this.#r.remove(this));
                    }
                    continue() {
                        return (
                            this.#n?.continue() ??
                            this.execute(this.state.variables)
                        );
                    }
                    async execute(t) {
                        this.#n = (0, n.II)({
                            fn: () =>
                                this.options.mutationFn
                                    ? this.options.mutationFn(t)
                                    : Promise.reject(
                                          Error("No mutationFn found")
                                      ),
                            onFail: (t, e) => {
                                this.#a({
                                    type: "failed",
                                    failureCount: t,
                                    error: e,
                                });
                            },
                            onPause: () => {
                                this.#a({ type: "pause" });
                            },
                            onContinue: () => {
                                this.#a({ type: "continue" });
                            },
                            retry: this.options.retry ?? 0,
                            retryDelay: this.options.retryDelay,
                            networkMode: this.options.networkMode,
                            canRun: () => this.#r.canRun(this),
                        });
                        let e = "pending" === this.state.status,
                            s = !this.#n.canStart();
                        try {
                            if (!e) {
                                (this.#a({
                                    type: "pending",
                                    variables: t,
                                    isPaused: s,
                                }),
                                    await this.#r.config.onMutate?.(t, this));
                                let e = await this.options.onMutate?.(t);
                                e !== this.state.context &&
                                    this.#a({
                                        type: "pending",
                                        context: e,
                                        variables: t,
                                        isPaused: s,
                                    });
                            }
                            let i = await this.#n.start();
                            return (
                                await this.#r.config.onSuccess?.(
                                    i,
                                    t,
                                    this.state.context,
                                    this
                                ),
                                await this.options.onSuccess?.(
                                    i,
                                    t,
                                    this.state.context
                                ),
                                await this.#r.config.onSettled?.(
                                    i,
                                    null,
                                    this.state.variables,
                                    this.state.context,
                                    this
                                ),
                                await this.options.onSettled?.(
                                    i,
                                    null,
                                    t,
                                    this.state.context
                                ),
                                this.#a({ type: "success", data: i }),
                                i
                            );
                        } catch (e) {
                            try {
                                throw (
                                    await this.#r.config.onError?.(
                                        e,
                                        t,
                                        this.state.context,
                                        this
                                    ),
                                    await this.options.onError?.(
                                        e,
                                        t,
                                        this.state.context
                                    ),
                                    await this.#r.config.onSettled?.(
                                        void 0,
                                        e,
                                        this.state.variables,
                                        this.state.context,
                                        this
                                    ),
                                    await this.options.onSettled?.(
                                        void 0,
                                        e,
                                        t,
                                        this.state.context
                                    ),
                                    e
                                );
                            } finally {
                                this.#a({ type: "error", error: e });
                            }
                        } finally {
                            this.#r.runNext(this);
                        }
                    }
                    #a(t) {
                        ((this.state = ((e) => {
                            switch (t.type) {
                                case "failed":
                                    return {
                                        ...e,
                                        failureCount: t.failureCount,
                                        failureReason: t.error,
                                    };
                                case "pause":
                                    return { ...e, isPaused: !0 };
                                case "continue":
                                    return { ...e, isPaused: !1 };
                                case "pending":
                                    return {
                                        ...e,
                                        context: t.context,
                                        data: void 0,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        isPaused: t.isPaused,
                                        status: "pending",
                                        variables: t.variables,
                                        submittedAt: Date.now(),
                                    };
                                case "success":
                                    return {
                                        ...e,
                                        data: t.data,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        status: "success",
                                        isPaused: !1,
                                    };
                                case "error":
                                    return {
                                        ...e,
                                        data: void 0,
                                        error: t.error,
                                        failureCount: e.failureCount + 1,
                                        failureReason: t.error,
                                        isPaused: !1,
                                        status: "error",
                                    };
                            }
                        })(this.state)),
                            i.jG.batch(() => {
                                (this.#i.forEach((e) => {
                                    e.onMutationUpdate(t);
                                }),
                                    this.#r.notify({
                                        mutation: this,
                                        type: "updated",
                                        action: t,
                                    }));
                            }));
                    }
                };
            function o() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0,
                    submittedAt: 0,
                };
            }
        },
        57678: (t, e, s) => {
            s.d(e, { q: () => o });
            var i = s(26261),
                r = s(36158),
                n = s(24880),
                a = s(66500),
                o = class extends a.Q {
                    constructor(t = {}) {
                        (super(),
                            (this.config = t),
                            (this.#o = new Set()),
                            (this.#u = new Map()),
                            (this.#h = 0));
                    }
                    #o;
                    #u;
                    #h;
                    build(t, e, s) {
                        let i = new r.s({
                            mutationCache: this,
                            mutationId: ++this.#h,
                            options: t.defaultMutationOptions(e),
                            state: s,
                        });
                        return (this.add(i), i);
                    }
                    add(t) {
                        this.#o.add(t);
                        let e = u(t);
                        if ("string" == typeof e) {
                            let s = this.#u.get(e);
                            s ? s.push(t) : this.#u.set(e, [t]);
                        }
                        this.notify({ type: "added", mutation: t });
                    }
                    remove(t) {
                        if (this.#o.delete(t)) {
                            let e = u(t);
                            if ("string" == typeof e) {
                                let s = this.#u.get(e);
                                if (s)
                                    if (s.length > 1) {
                                        let e = s.indexOf(t);
                                        -1 !== e && s.splice(e, 1);
                                    } else s[0] === t && this.#u.delete(e);
                            }
                        }
                        this.notify({ type: "removed", mutation: t });
                    }
                    canRun(t) {
                        let e = u(t);
                        if ("string" != typeof e) return !0;
                        {
                            let s = this.#u.get(e),
                                i = s?.find(
                                    (t) => "pending" === t.state.status
                                );
                            return !i || i === t;
                        }
                    }
                    runNext(t) {
                        let e = u(t);
                        if ("string" != typeof e) return Promise.resolve();
                        {
                            let s = this.#u
                                .get(e)
                                ?.find((e) => e !== t && e.state.isPaused);
                            return s?.continue() ?? Promise.resolve();
                        }
                    }
                    clear() {
                        i.jG.batch(() => {
                            (this.#o.forEach((t) => {
                                this.notify({ type: "removed", mutation: t });
                            }),
                                this.#o.clear(),
                                this.#u.clear());
                        });
                    }
                    getAll() {
                        return Array.from(this.#o);
                    }
                    find(t) {
                        let e = { exact: !0, ...t };
                        return this.getAll().find((t) => (0, n.nJ)(e, t));
                    }
                    findAll(t = {}) {
                        return this.getAll().filter((e) => (0, n.nJ)(t, e));
                    }
                    notify(t) {
                        i.jG.batch(() => {
                            this.listeners.forEach((e) => {
                                e(t);
                            });
                        });
                    }
                    resumePausedMutations() {
                        let t = this.getAll().filter((t) => t.state.isPaused);
                        return i.jG.batch(() =>
                            Promise.all(t.map((t) => t.continue().catch(n.lQ)))
                        );
                    }
                };
            function u(t) {
                return t.options.scope?.id;
            }
        },
        26261: (t, e, s) => {
            s.d(e, { jG: () => r, x3: () => i });
            var i = (t) => setTimeout(t, 0),
                r = (function () {
                    let t = [],
                        e = 0,
                        s = (t) => {
                            t();
                        },
                        r = (t) => {
                            t();
                        },
                        n = i,
                        a = (i) => {
                            e
                                ? t.push(i)
                                : n(() => {
                                      s(i);
                                  });
                        };
                    return {
                        batch: (i) => {
                            let a;
                            e++;
                            try {
                                a = i();
                            } finally {
                                --e ||
                                    (() => {
                                        let e = t;
                                        ((t = []),
                                            e.length &&
                                                n(() => {
                                                    r(() => {
                                                        e.forEach((t) => {
                                                            s(t);
                                                        });
                                                    });
                                                }));
                                    })();
                            }
                            return a;
                        },
                        batchCalls:
                            (t) =>
                            (...e) => {
                                a(() => {
                                    t(...e);
                                });
                            },
                        schedule: a,
                        setNotifyFunction: (t) => {
                            s = t;
                        },
                        setBatchNotifyFunction: (t) => {
                            r = t;
                        },
                        setScheduler: (t) => {
                            n = t;
                        },
                    };
                })();
        },
        96035: (t, e, s) => {
            s.d(e, { t: () => n });
            var i = s(66500),
                r = s(24880),
                n = new (class extends i.Q {
                    #c = !0;
                    #e;
                    #s;
                    constructor() {
                        (super(),
                            (this.#s = (t) => {
                                if (!r.S$ && window.addEventListener) {
                                    let e = () => t(!0),
                                        s = () => t(!1);
                                    return (
                                        window.addEventListener(
                                            "online",
                                            e,
                                            !1
                                        ),
                                        window.addEventListener(
                                            "offline",
                                            s,
                                            !1
                                        ),
                                        () => {
                                            (window.removeEventListener(
                                                "online",
                                                e
                                            ),
                                                window.removeEventListener(
                                                    "offline",
                                                    s
                                                ));
                                        }
                                    );
                                }
                            }));
                    }
                    onSubscribe() {
                        this.#e || this.setEventListener(this.#s);
                    }
                    onUnsubscribe() {
                        this.hasListeners() ||
                            (this.#e?.(), (this.#e = void 0));
                    }
                    setEventListener(t) {
                        ((this.#s = t),
                            this.#e?.(),
                            (this.#e = t(this.setOnline.bind(this))));
                    }
                    setOnline(t) {
                        this.#c !== t &&
                            ((this.#c = t),
                            this.listeners.forEach((e) => {
                                e(t);
                            }));
                    }
                    isOnline() {
                        return this.#c;
                    }
                })();
        },
        79757: (t, e, s) => {
            s.d(e, { X: () => o, k: () => u });
            var i = s(24880),
                r = s(26261),
                n = s(58904),
                a = s(71692),
                o = class extends a.k {
                    #l;
                    #d;
                    #f;
                    #p;
                    #n;
                    #y;
                    #m;
                    constructor(t) {
                        (super(),
                            (this.#m = !1),
                            (this.#y = t.defaultOptions),
                            this.setOptions(t.options),
                            (this.observers = []),
                            (this.#p = t.client),
                            (this.#f = this.#p.getQueryCache()),
                            (this.queryKey = t.queryKey),
                            (this.queryHash = t.queryHash),
                            (this.#l = (function (t) {
                                let e =
                                        "function" == typeof t.initialData
                                            ? t.initialData()
                                            : t.initialData,
                                    s = void 0 !== e,
                                    i = s
                                        ? "function" ==
                                          typeof t.initialDataUpdatedAt
                                            ? t.initialDataUpdatedAt()
                                            : t.initialDataUpdatedAt
                                        : 0;
                                return {
                                    data: e,
                                    dataUpdateCount: 0,
                                    dataUpdatedAt: s ? (i ?? Date.now()) : 0,
                                    error: null,
                                    errorUpdateCount: 0,
                                    errorUpdatedAt: 0,
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null,
                                    fetchMeta: null,
                                    isInvalidated: !1,
                                    status: s ? "success" : "pending",
                                    fetchStatus: "idle",
                                };
                            })(this.options)),
                            (this.state = t.state ?? this.#l),
                            this.scheduleGc());
                    }
                    get meta() {
                        return this.options.meta;
                    }
                    get promise() {
                        return this.#n?.promise;
                    }
                    setOptions(t) {
                        ((this.options = { ...this.#y, ...t }),
                            this.updateGcTime(this.options.gcTime));
                    }
                    optionalRemove() {
                        this.observers.length ||
                            "idle" !== this.state.fetchStatus ||
                            this.#f.remove(this);
                    }
                    setData(t, e) {
                        let s = (0, i.pl)(this.state.data, t, this.options);
                        return (
                            this.#a({
                                data: s,
                                type: "success",
                                dataUpdatedAt: e?.updatedAt,
                                manual: e?.manual,
                            }),
                            s
                        );
                    }
                    setState(t, e) {
                        this.#a({
                            type: "setState",
                            state: t,
                            setStateOptions: e,
                        });
                    }
                    cancel(t) {
                        let e = this.#n?.promise;
                        return (
                            this.#n?.cancel(t),
                            e ? e.then(i.lQ).catch(i.lQ) : Promise.resolve()
                        );
                    }
                    destroy() {
                        (super.destroy(), this.cancel({ silent: !0 }));
                    }
                    reset() {
                        (this.destroy(), this.setState(this.#l));
                    }
                    isActive() {
                        return this.observers.some(
                            (t) => !1 !== (0, i.Eh)(t.options.enabled, this)
                        );
                    }
                    isDisabled() {
                        return this.getObserversCount() > 0
                            ? !this.isActive()
                            : this.options.queryFn === i.hT ||
                                  this.state.dataUpdateCount +
                                      this.state.errorUpdateCount ===
                                      0;
                    }
                    isStale() {
                        return (
                            !!this.state.isInvalidated ||
                            (this.getObserversCount() > 0
                                ? this.observers.some(
                                      (t) => t.getCurrentResult().isStale
                                  )
                                : void 0 === this.state.data)
                        );
                    }
                    isStaleByTime(t = 0) {
                        return (
                            this.state.isInvalidated ||
                            void 0 === this.state.data ||
                            !(0, i.j3)(this.state.dataUpdatedAt, t)
                        );
                    }
                    onFocus() {
                        let t = this.observers.find((t) =>
                            t.shouldFetchOnWindowFocus()
                        );
                        (t?.refetch({ cancelRefetch: !1 }),
                            this.#n?.continue());
                    }
                    onOnline() {
                        let t = this.observers.find((t) =>
                            t.shouldFetchOnReconnect()
                        );
                        (t?.refetch({ cancelRefetch: !1 }),
                            this.#n?.continue());
                    }
                    addObserver(t) {
                        this.observers.includes(t) ||
                            (this.observers.push(t),
                            this.clearGcTimeout(),
                            this.#f.notify({
                                type: "observerAdded",
                                query: this,
                                observer: t,
                            }));
                    }
                    removeObserver(t) {
                        this.observers.includes(t) &&
                            ((this.observers = this.observers.filter(
                                (e) => e !== t
                            )),
                            this.observers.length ||
                                (this.#n &&
                                    (this.#m
                                        ? this.#n.cancel({ revert: !0 })
                                        : this.#n.cancelRetry()),
                                this.scheduleGc()),
                            this.#f.notify({
                                type: "observerRemoved",
                                query: this,
                                observer: t,
                            }));
                    }
                    getObserversCount() {
                        return this.observers.length;
                    }
                    invalidate() {
                        this.state.isInvalidated ||
                            this.#a({ type: "invalidate" });
                    }
                    fetch(t, e) {
                        if ("idle" !== this.state.fetchStatus) {
                            if (void 0 !== this.state.data && e?.cancelRefetch)
                                this.cancel({ silent: !0 });
                            else if (this.#n)
                                return (
                                    this.#n.continueRetry(),
                                    this.#n.promise
                                );
                        }
                        if ((t && this.setOptions(t), !this.options.queryFn)) {
                            let t = this.observers.find(
                                (t) => t.options.queryFn
                            );
                            t && this.setOptions(t.options);
                        }
                        let s = new AbortController(),
                            r = (t) => {
                                Object.defineProperty(t, "signal", {
                                    enumerable: !0,
                                    get: () => ((this.#m = !0), s.signal),
                                });
                            },
                            a = () => {
                                let t = (0, i.ZM)(this.options, e),
                                    s = {
                                        client: this.#p,
                                        queryKey: this.queryKey,
                                        meta: this.meta,
                                    };
                                return (r(s),
                                (this.#m = !1),
                                this.options.persister)
                                    ? this.options.persister(t, s, this)
                                    : t(s);
                            },
                            o = {
                                fetchOptions: e,
                                options: this.options,
                                queryKey: this.queryKey,
                                client: this.#p,
                                state: this.state,
                                fetchFn: a,
                            };
                        (r(o),
                            this.options.behavior?.onFetch(o, this),
                            (this.#d = this.state),
                            ("idle" === this.state.fetchStatus ||
                                this.state.fetchMeta !==
                                    o.fetchOptions?.meta) &&
                                this.#a({
                                    type: "fetch",
                                    meta: o.fetchOptions?.meta,
                                }));
                        let u = (t) => {
                            (((0, n.wm)(t) && t.silent) ||
                                this.#a({ type: "error", error: t }),
                                (0, n.wm)(t) ||
                                    (this.#f.config.onError?.(t, this),
                                    this.#f.config.onSettled?.(
                                        this.state.data,
                                        t,
                                        this
                                    )),
                                this.scheduleGc());
                        };
                        return (
                            (this.#n = (0, n.II)({
                                initialPromise: e?.initialPromise,
                                fn: o.fetchFn,
                                abort: s.abort.bind(s),
                                onSuccess: (t) => {
                                    if (void 0 === t)
                                        return void u(
                                            Error(
                                                `${this.queryHash} data is undefined`
                                            )
                                        );
                                    try {
                                        this.setData(t);
                                    } catch (t) {
                                        u(t);
                                        return;
                                    }
                                    (this.#f.config.onSuccess?.(t, this),
                                        this.#f.config.onSettled?.(
                                            t,
                                            this.state.error,
                                            this
                                        ),
                                        this.scheduleGc());
                                },
                                onError: u,
                                onFail: (t, e) => {
                                    this.#a({
                                        type: "failed",
                                        failureCount: t,
                                        error: e,
                                    });
                                },
                                onPause: () => {
                                    this.#a({ type: "pause" });
                                },
                                onContinue: () => {
                                    this.#a({ type: "continue" });
                                },
                                retry: o.options.retry,
                                retryDelay: o.options.retryDelay,
                                networkMode: o.options.networkMode,
                                canRun: () => !0,
                            })),
                            this.#n.start()
                        );
                    }
                    #a(t) {
                        let e = (e) => {
                            switch (t.type) {
                                case "failed":
                                    return {
                                        ...e,
                                        fetchFailureCount: t.failureCount,
                                        fetchFailureReason: t.error,
                                    };
                                case "pause":
                                    return { ...e, fetchStatus: "paused" };
                                case "continue":
                                    return { ...e, fetchStatus: "fetching" };
                                case "fetch":
                                    return {
                                        ...e,
                                        ...u(e.data, this.options),
                                        fetchMeta: t.meta ?? null,
                                    };
                                case "success":
                                    return {
                                        ...e,
                                        data: t.data,
                                        dataUpdateCount: e.dataUpdateCount + 1,
                                        dataUpdatedAt:
                                            t.dataUpdatedAt ?? Date.now(),
                                        error: null,
                                        isInvalidated: !1,
                                        status: "success",
                                        ...(!t.manual && {
                                            fetchStatus: "idle",
                                            fetchFailureCount: 0,
                                            fetchFailureReason: null,
                                        }),
                                    };
                                case "error":
                                    let s = t.error;
                                    if ((0, n.wm)(s) && s.revert && this.#d)
                                        return {
                                            ...this.#d,
                                            fetchStatus: "idle",
                                        };
                                    return {
                                        ...e,
                                        error: s,
                                        errorUpdateCount:
                                            e.errorUpdateCount + 1,
                                        errorUpdatedAt: Date.now(),
                                        fetchFailureCount:
                                            e.fetchFailureCount + 1,
                                        fetchFailureReason: s,
                                        fetchStatus: "idle",
                                        status: "error",
                                    };
                                case "invalidate":
                                    return { ...e, isInvalidated: !0 };
                                case "setState":
                                    return { ...e, ...t.state };
                            }
                        };
                        ((this.state = e(this.state)),
                            r.jG.batch(() => {
                                (this.observers.forEach((t) => {
                                    t.onQueryUpdate();
                                }),
                                    this.#f.notify({
                                        query: this,
                                        type: "updated",
                                        action: t,
                                    }));
                            }));
                    }
                };
            function u(t, e) {
                return {
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchStatus: (0, n.v_)(e.networkMode)
                        ? "fetching"
                        : "paused",
                    ...(void 0 === t && { error: null, status: "pending" }),
                };
            }
        },
        2471: (t, e, s) => {
            s.d(e, { $: () => o });
            var i = s(24880),
                r = s(79757),
                n = s(26261),
                a = s(66500),
                o = class extends a.Q {
                    constructor(t = {}) {
                        (super(), (this.config = t), (this.#v = new Map()));
                    }
                    #v;
                    build(t, e, s) {
                        let n = e.queryKey,
                            a = e.queryHash ?? (0, i.F$)(n, e),
                            o = this.get(a);
                        return (
                            o ||
                                ((o = new r.X({
                                    client: t,
                                    queryKey: n,
                                    queryHash: a,
                                    options: t.defaultQueryOptions(e),
                                    state: s,
                                    defaultOptions: t.getQueryDefaults(n),
                                })),
                                this.add(o)),
                            o
                        );
                    }
                    add(t) {
                        this.#v.has(t.queryHash) ||
                            (this.#v.set(t.queryHash, t),
                            this.notify({ type: "added", query: t }));
                    }
                    remove(t) {
                        let e = this.#v.get(t.queryHash);
                        e &&
                            (t.destroy(),
                            e === t && this.#v.delete(t.queryHash),
                            this.notify({ type: "removed", query: t }));
                    }
                    clear() {
                        n.jG.batch(() => {
                            this.getAll().forEach((t) => {
                                this.remove(t);
                            });
                        });
                    }
                    get(t) {
                        return this.#v.get(t);
                    }
                    getAll() {
                        return [...this.#v.values()];
                    }
                    find(t) {
                        let e = { exact: !0, ...t };
                        return this.getAll().find((t) => (0, i.MK)(e, t));
                    }
                    findAll(t = {}) {
                        let e = this.getAll();
                        return Object.keys(t).length > 0
                            ? e.filter((e) => (0, i.MK)(t, e))
                            : e;
                    }
                    notify(t) {
                        n.jG.batch(() => {
                            this.listeners.forEach((e) => {
                                e(t);
                            });
                        });
                    }
                    onFocus() {
                        n.jG.batch(() => {
                            this.getAll().forEach((t) => {
                                t.onFocus();
                            });
                        });
                    }
                    onOnline() {
                        n.jG.batch(() => {
                            this.getAll().forEach((t) => {
                                t.onOnline();
                            });
                        });
                    }
                };
        },
        65490: (t, e, s) => {
            s.d(e, { E: () => c });
            var i = s(24880),
                r = s(2471),
                n = s(57678),
                a = s(29658),
                o = s(96035),
                u = s(26261),
                h = s(58959),
                c = class {
                    #b;
                    #r;
                    #y;
                    #g;
                    #C;
                    #w;
                    #O;
                    #q;
                    constructor(t = {}) {
                        ((this.#b = t.queryCache || new r.$()),
                            (this.#r = t.mutationCache || new n.q()),
                            (this.#y = t.defaultOptions || {}),
                            (this.#g = new Map()),
                            (this.#C = new Map()),
                            (this.#w = 0));
                    }
                    mount() {
                        (this.#w++,
                            1 === this.#w &&
                                ((this.#O = a.m.subscribe(async (t) => {
                                    t &&
                                        (await this.resumePausedMutations(),
                                        this.#b.onFocus());
                                })),
                                (this.#q = o.t.subscribe(async (t) => {
                                    t &&
                                        (await this.resumePausedMutations(),
                                        this.#b.onOnline());
                                }))));
                    }
                    unmount() {
                        (this.#w--,
                            0 === this.#w &&
                                (this.#O?.(),
                                (this.#O = void 0),
                                this.#q?.(),
                                (this.#q = void 0)));
                    }
                    isFetching(t) {
                        return this.#b.findAll({
                            ...t,
                            fetchStatus: "fetching",
                        }).length;
                    }
                    isMutating(t) {
                        return this.#r.findAll({ ...t, status: "pending" })
                            .length;
                    }
                    getQueryData(t) {
                        let e = this.defaultQueryOptions({ queryKey: t });
                        return this.#b.get(e.queryHash)?.state.data;
                    }
                    ensureQueryData(t) {
                        let e = this.defaultQueryOptions(t),
                            s = this.#b.build(this, e),
                            r = s.state.data;
                        return void 0 === r
                            ? this.fetchQuery(t)
                            : (t.revalidateIfStale &&
                                  s.isStaleByTime((0, i.d2)(e.staleTime, s)) &&
                                  this.prefetchQuery(e),
                              Promise.resolve(r));
                    }
                    getQueriesData(t) {
                        return this.#b
                            .findAll(t)
                            .map(({ queryKey: t, state: e }) => [t, e.data]);
                    }
                    setQueryData(t, e, s) {
                        let r = this.defaultQueryOptions({ queryKey: t }),
                            n = this.#b.get(r.queryHash),
                            a = n?.state.data,
                            o = (0, i.Zw)(e, a);
                        if (void 0 !== o)
                            return this.#b
                                .build(this, r)
                                .setData(o, { ...s, manual: !0 });
                    }
                    setQueriesData(t, e, s) {
                        return u.jG.batch(() =>
                            this.#b
                                .findAll(t)
                                .map(({ queryKey: t }) => [
                                    t,
                                    this.setQueryData(t, e, s),
                                ])
                        );
                    }
                    getQueryState(t) {
                        let e = this.defaultQueryOptions({ queryKey: t });
                        return this.#b.get(e.queryHash)?.state;
                    }
                    removeQueries(t) {
                        let e = this.#b;
                        u.jG.batch(() => {
                            e.findAll(t).forEach((t) => {
                                e.remove(t);
                            });
                        });
                    }
                    resetQueries(t, e) {
                        let s = this.#b;
                        return u.jG.batch(
                            () => (
                                s.findAll(t).forEach((t) => {
                                    t.reset();
                                }),
                                this.refetchQueries({ type: "active", ...t }, e)
                            )
                        );
                    }
                    cancelQueries(t, e = {}) {
                        let s = { revert: !0, ...e };
                        return Promise.all(
                            u.jG.batch(() =>
                                this.#b.findAll(t).map((t) => t.cancel(s))
                            )
                        )
                            .then(i.lQ)
                            .catch(i.lQ);
                    }
                    invalidateQueries(t, e = {}) {
                        return u.jG.batch(() =>
                            (this.#b.findAll(t).forEach((t) => {
                                t.invalidate();
                            }),
                            t?.refetchType === "none")
                                ? Promise.resolve()
                                : this.refetchQueries(
                                      {
                                          ...t,
                                          type:
                                              t?.refetchType ??
                                              t?.type ??
                                              "active",
                                      },
                                      e
                                  )
                        );
                    }
                    refetchQueries(t, e = {}) {
                        let s = { ...e, cancelRefetch: e.cancelRefetch ?? !0 };
                        return Promise.all(
                            u.jG.batch(() =>
                                this.#b
                                    .findAll(t)
                                    .filter((t) => !t.isDisabled())
                                    .map((t) => {
                                        let e = t.fetch(void 0, s);
                                        return (
                                            s.throwOnError ||
                                                (e = e.catch(i.lQ)),
                                            "paused" === t.state.fetchStatus
                                                ? Promise.resolve()
                                                : e
                                        );
                                    })
                            )
                        ).then(i.lQ);
                    }
                    fetchQuery(t) {
                        let e = this.defaultQueryOptions(t);
                        void 0 === e.retry && (e.retry = !1);
                        let s = this.#b.build(this, e);
                        return s.isStaleByTime((0, i.d2)(e.staleTime, s))
                            ? s.fetch(e)
                            : Promise.resolve(s.state.data);
                    }
                    prefetchQuery(t) {
                        return this.fetchQuery(t).then(i.lQ).catch(i.lQ);
                    }
                    fetchInfiniteQuery(t) {
                        return (
                            (t.behavior = (0, h.PL)(t.pages)),
                            this.fetchQuery(t)
                        );
                    }
                    prefetchInfiniteQuery(t) {
                        return this.fetchInfiniteQuery(t)
                            .then(i.lQ)
                            .catch(i.lQ);
                    }
                    ensureInfiniteQueryData(t) {
                        return (
                            (t.behavior = (0, h.PL)(t.pages)),
                            this.ensureQueryData(t)
                        );
                    }
                    resumePausedMutations() {
                        return o.t.isOnline()
                            ? this.#r.resumePausedMutations()
                            : Promise.resolve();
                    }
                    getQueryCache() {
                        return this.#b;
                    }
                    getMutationCache() {
                        return this.#r;
                    }
                    getDefaultOptions() {
                        return this.#y;
                    }
                    setDefaultOptions(t) {
                        this.#y = t;
                    }
                    setQueryDefaults(t, e) {
                        this.#g.set((0, i.EN)(t), {
                            queryKey: t,
                            defaultOptions: e,
                        });
                    }
                    getQueryDefaults(t) {
                        let e = [...this.#g.values()],
                            s = {};
                        return (
                            e.forEach((e) => {
                                (0, i.Cp)(t, e.queryKey) &&
                                    Object.assign(s, e.defaultOptions);
                            }),
                            s
                        );
                    }
                    setMutationDefaults(t, e) {
                        this.#C.set((0, i.EN)(t), {
                            mutationKey: t,
                            defaultOptions: e,
                        });
                    }
                    getMutationDefaults(t) {
                        let e = [...this.#C.values()],
                            s = {};
                        return (
                            e.forEach((e) => {
                                (0, i.Cp)(t, e.mutationKey) &&
                                    Object.assign(s, e.defaultOptions);
                            }),
                            s
                        );
                    }
                    defaultQueryOptions(t) {
                        if (t._defaulted) return t;
                        let e = {
                            ...this.#y.queries,
                            ...this.getQueryDefaults(t.queryKey),
                            ...t,
                            _defaulted: !0,
                        };
                        return (
                            e.queryHash ||
                                (e.queryHash = (0, i.F$)(e.queryKey, e)),
                            void 0 === e.refetchOnReconnect &&
                                (e.refetchOnReconnect =
                                    "always" !== e.networkMode),
                            void 0 === e.throwOnError &&
                                (e.throwOnError = !!e.suspense),
                            !e.networkMode &&
                                e.persister &&
                                (e.networkMode = "offlineFirst"),
                            e.queryFn === i.hT && (e.enabled = !1),
                            e
                        );
                    }
                    defaultMutationOptions(t) {
                        return t?._defaulted
                            ? t
                            : {
                                  ...this.#y.mutations,
                                  ...(t?.mutationKey &&
                                      this.getMutationDefaults(t.mutationKey)),
                                  ...t,
                                  _defaulted: !0,
                              };
                    }
                    clear() {
                        (this.#b.clear(), this.#r.clear());
                    }
                };
        },
        71692: (t, e, s) => {
            s.d(e, { k: () => r });
            var i = s(24880),
                r = class {
                    #S;
                    destroy() {
                        this.clearGcTimeout();
                    }
                    scheduleGc() {
                        (this.clearGcTimeout(),
                            (0, i.gn)(this.gcTime) &&
                                (this.#S = setTimeout(() => {
                                    this.optionalRemove();
                                }, this.gcTime)));
                    }
                    updateGcTime(t) {
                        this.gcTime = Math.max(
                            this.gcTime || 0,
                            t ?? (i.S$ ? 1 / 0 : 3e5)
                        );
                    }
                    clearGcTimeout() {
                        this.#S && (clearTimeout(this.#S), (this.#S = void 0));
                    }
                };
        },
        58904: (t, e, s) => {
            s.d(e, { II: () => l, cc: () => h, v_: () => u, wm: () => c });
            var i = s(29658),
                r = s(96035),
                n = s(94658),
                a = s(24880);
            function o(t) {
                return Math.min(1e3 * 2 ** t, 3e4);
            }
            function u(t) {
                return (t ?? "online") !== "online" || r.t.isOnline();
            }
            var h = class extends Error {
                constructor(t) {
                    (super("CancelledError"),
                        (this.revert = t?.revert),
                        (this.silent = t?.silent));
                }
            };
            function c(t) {
                return t instanceof h;
            }
            function l(t) {
                let e,
                    s = !1,
                    c = 0,
                    l = !1,
                    d = (0, n.T)(),
                    f = () =>
                        i.m.isFocused() &&
                        ("always" === t.networkMode || r.t.isOnline()) &&
                        t.canRun(),
                    p = () => u(t.networkMode) && t.canRun(),
                    y = (s) => {
                        l || ((l = !0), t.onSuccess?.(s), e?.(), d.resolve(s));
                    },
                    m = (s) => {
                        l || ((l = !0), t.onError?.(s), e?.(), d.reject(s));
                    },
                    v = () =>
                        new Promise((s) => {
                            ((e = (t) => {
                                (l || f()) && s(t);
                            }),
                                t.onPause?.());
                        }).then(() => {
                            ((e = void 0), l || t.onContinue?.());
                        }),
                    b = () => {
                        let e;
                        if (l) return;
                        let i = 0 === c ? t.initialPromise : void 0;
                        try {
                            e = i ?? t.fn();
                        } catch (t) {
                            e = Promise.reject(t);
                        }
                        Promise.resolve(e)
                            .then(y)
                            .catch((e) => {
                                if (l) return;
                                let i = t.retry ?? 3 * !a.S$,
                                    r = t.retryDelay ?? o,
                                    n = "function" == typeof r ? r(c, e) : r,
                                    u =
                                        !0 === i ||
                                        ("number" == typeof i && c < i) ||
                                        ("function" == typeof i && i(c, e));
                                if (s || !u) return void m(e);
                                (c++,
                                    t.onFail?.(c, e),
                                    (0, a.yy)(n)
                                        .then(() => (f() ? void 0 : v()))
                                        .then(() => {
                                            s ? m(e) : b();
                                        }));
                            });
                    };
                return {
                    promise: d,
                    cancel: (e) => {
                        l || (m(new h(e)), t.abort?.());
                    },
                    continue: () => (e?.(), d),
                    cancelRetry: () => {
                        s = !0;
                    },
                    continueRetry: () => {
                        s = !1;
                    },
                    canStart: p,
                    start: () => (p() ? b() : v().then(b), d),
                };
            }
        },
        66500: (t, e, s) => {
            s.d(e, { Q: () => i });
            var i = class {
                constructor() {
                    ((this.listeners = new Set()),
                        (this.subscribe = this.subscribe.bind(this)));
                }
                subscribe(t) {
                    return (
                        this.listeners.add(t),
                        this.onSubscribe(),
                        () => {
                            (this.listeners.delete(t), this.onUnsubscribe());
                        }
                    );
                }
                hasListeners() {
                    return this.listeners.size > 0;
                }
                onSubscribe() {}
                onUnsubscribe() {}
            };
        },
        94658: (t, e, s) => {
            s.d(e, { T: () => i });
            function i() {
                let t,
                    e,
                    s = new Promise((s, i) => {
                        ((t = s), (e = i));
                    });
                function i(t) {
                    (Object.assign(s, t), delete s.resolve, delete s.reject);
                }
                return (
                    (s.status = "pending"),
                    s.catch(() => {}),
                    (s.resolve = (e) => {
                        (i({ status: "fulfilled", value: e }), t(e));
                    }),
                    (s.reject = (t) => {
                        (i({ status: "rejected", reason: t }), e(t));
                    }),
                    s
                );
            }
        },
        24880: (t, e, s) => {
            s.d(e, {
                BH: () => y,
                Cp: () => p,
                EN: () => f,
                Eh: () => h,
                F$: () => d,
                MK: () => c,
                S$: () => i,
                ZM: () => F,
                ZZ: () => S,
                Zw: () => n,
                d2: () => u,
                f8: () => m,
                gn: () => a,
                hT: () => P,
                j3: () => o,
                lQ: () => r,
                nJ: () => l,
                pl: () => w,
                rX: () => O,
                y9: () => q,
                yy: () => C,
            });
            var i = "undefined" == typeof window || "Deno" in globalThis;
            function r() {}
            function n(t, e) {
                return "function" == typeof t ? t(e) : t;
            }
            function a(t) {
                return "number" == typeof t && t >= 0 && t !== 1 / 0;
            }
            function o(t, e) {
                return Math.max(t + (e || 0) - Date.now(), 0);
            }
            function u(t, e) {
                return "function" == typeof t ? t(e) : t;
            }
            function h(t, e) {
                return "function" == typeof t ? t(e) : t;
            }
            function c(t, e) {
                let {
                    type: s = "all",
                    exact: i,
                    fetchStatus: r,
                    predicate: n,
                    queryKey: a,
                    stale: o,
                } = t;
                if (a) {
                    if (i) {
                        if (e.queryHash !== d(a, e.options)) return !1;
                    } else if (!p(e.queryKey, a)) return !1;
                }
                if ("all" !== s) {
                    let t = e.isActive();
                    if (("active" === s && !t) || ("inactive" === s && t))
                        return !1;
                }
                return (
                    ("boolean" != typeof o || e.isStale() === o) &&
                    (!r || r === e.state.fetchStatus) &&
                    (!n || !!n(e))
                );
            }
            function l(t, e) {
                let { exact: s, status: i, predicate: r, mutationKey: n } = t;
                if (n) {
                    if (!e.options.mutationKey) return !1;
                    if (s) {
                        if (f(e.options.mutationKey) !== f(n)) return !1;
                    } else if (!p(e.options.mutationKey, n)) return !1;
                }
                return (!i || e.state.status === i) && (!r || !!r(e));
            }
            function d(t, e) {
                return (e?.queryKeyHashFn || f)(t);
            }
            function f(t) {
                return JSON.stringify(t, (t, e) =>
                    b(e)
                        ? Object.keys(e)
                              .sort()
                              .reduce((t, s) => ((t[s] = e[s]), t), {})
                        : e
                );
            }
            function p(t, e) {
                return (
                    t === e ||
                    (typeof t == typeof e &&
                        !!t &&
                        !!e &&
                        "object" == typeof t &&
                        "object" == typeof e &&
                        !Object.keys(e).some((s) => !p(t[s], e[s])))
                );
            }
            function y(t, e) {
                if (t === e) return t;
                let s = v(t) && v(e);
                if (s || (b(t) && b(e))) {
                    let i = s ? t : Object.keys(t),
                        r = i.length,
                        n = s ? e : Object.keys(e),
                        a = n.length,
                        o = s ? [] : {},
                        u = 0;
                    for (let r = 0; r < a; r++) {
                        let a = s ? r : n[r];
                        ((!s && i.includes(a)) || s) &&
                        void 0 === t[a] &&
                        void 0 === e[a]
                            ? ((o[a] = void 0), u++)
                            : ((o[a] = y(t[a], e[a])),
                              o[a] === t[a] && void 0 !== t[a] && u++);
                    }
                    return r === a && u === r ? t : o;
                }
                return e;
            }
            function m(t, e) {
                if (!e || Object.keys(t).length !== Object.keys(e).length)
                    return !1;
                for (let s in t) if (t[s] !== e[s]) return !1;
                return !0;
            }
            function v(t) {
                return Array.isArray(t) && t.length === Object.keys(t).length;
            }
            function b(t) {
                if (!g(t)) return !1;
                let e = t.constructor;
                if (void 0 === e) return !0;
                let s = e.prototype;
                return (
                    !!g(s) &&
                    !!s.hasOwnProperty("isPrototypeOf") &&
                    Object.getPrototypeOf(t) === Object.prototype
                );
            }
            function g(t) {
                return "[object Object]" === Object.prototype.toString.call(t);
            }
            function C(t) {
                return new Promise((e) => {
                    setTimeout(e, t);
                });
            }
            function w(t, e, s) {
                return "function" == typeof s.structuralSharing
                    ? s.structuralSharing(t, e)
                    : !1 !== s.structuralSharing
                      ? y(t, e)
                      : e;
            }
            function O(t) {
                return t;
            }
            function q(t, e, s = 0) {
                let i = [...t, e];
                return s && i.length > s ? i.slice(1) : i;
            }
            function S(t, e, s = 0) {
                let i = [e, ...t];
                return s && i.length > s ? i.slice(0, -1) : i;
            }
            var P = Symbol();
            function F(t, e) {
                return !t.queryFn && e?.initialPromise
                    ? () => e.initialPromise
                    : t.queryFn && t.queryFn !== P
                      ? t.queryFn
                      : () =>
                            Promise.reject(
                                Error(`Missing queryFn: '${t.queryHash}'`)
                            );
            }
        },
    },
]);
//# sourceMappingURL=vendors-node_modules_tanstack_query-core_build_modern_queryClient_js-62c44311d0eb.js.map
