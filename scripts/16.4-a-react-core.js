"use strict";
(globalThis.webpackChunk_github_ui_github_ui =
    globalThis.webpackChunk_github_ui_github_ui || []).push([
    [82216],
    {
        1723: (e, t, r) => {
            r.d(t, { w: () => ez, o: () => e$ });
            var n = r(88243),
                a = r(16213),
                o = r(50467),
                i = r(31635),
                s = r(74848),
                l = r(39595),
                u = r(52475),
                c = r(53627),
                d = r(61526),
                h = r(38056),
                p = r(86917);
            let f = new p.R();
            async function m(e) {
                return f.getRegistration(e).promise;
            }
            var y = r(68237),
                g = r(69743),
                v = r(21728),
                b = r(96540),
                w = r(43073),
                S = r(74135);
            let R = (0, b.memo)(function (e) {
                    let t = (0, v.c)(4),
                        { routes: r } = e;
                    if ((0, w.E)()) {
                        let e;
                        return (
                            t[0] !== r
                                ? ((e = (0, s.jsx)(x, { routes: r })),
                                  (t[0] = r),
                                  (t[1] = e))
                                : (e = t[1]),
                            e
                        );
                    }
                    {
                        let e;
                        return (
                            t[2] !== r
                                ? ((e = (0, s.jsx)(E, { routes: r })),
                                  (t[2] = r),
                                  (t[3] = e))
                                : (e = t[3]),
                            e
                        );
                    }
                }),
                E = (0, b.memo)(function (e) {
                    let t,
                        r,
                        n,
                        a = (0, v.c)(9),
                        { routes: o } = e,
                        i = (0, d.zy)();
                    a[0] !== i || a[1] !== o
                        ? ((t = (0, d.ue)(o, i)?.map(N) ?? []),
                          (a[0] = i),
                          (a[1] = o),
                          (a[2] = t))
                        : (t = a[2]);
                    let s = t;
                    a[3] !== o
                        ? ((r = _(o)), (a[3] = o), (a[4] = r))
                        : (r = a[4]);
                    let l = r;
                    return (
                        a[5] !== i || a[6] !== s || a[7] !== l
                            ? ((n = { location: i, matches: s, routes: l }),
                              (a[5] = i),
                              (a[6] = s),
                              (a[7] = l),
                              (a[8] = n))
                            : (n = a[8]),
                        C(n),
                        null
                    );
                }),
                x = (0, b.memo)(function (e) {
                    let t,
                        r,
                        n = (0, v.c)(6),
                        { routes: a } = e,
                        o = (0, d.zy)(),
                        i = (0, d.FE)();
                    n[0] !== a
                        ? ((t = _(a)), (n[0] = a), (n[1] = t))
                        : (t = n[1]);
                    let s = t;
                    return (
                        n[2] !== o || n[3] !== i || n[4] !== s
                            ? ((r = { location: o, matches: i, routes: s }),
                              (n[2] = o),
                              (n[3] = i),
                              (n[4] = s),
                              (n[5] = r))
                            : (r = n[5]),
                        C(r),
                        null
                    );
                });
            function C(e) {
                let t,
                    r,
                    n,
                    a,
                    o = (0, v.c)(10),
                    { location: i, matches: s, routes: l } = e;
                (o[0] !== i || o[1] !== s || o[2] !== l
                    ? ((t = () => {
                          let e = new AbortController();
                          return (
                              document.addEventListener(
                                  "turbo:load",
                                  () => {
                                      (0, S.n)().setState({
                                          location: i,
                                          matches: s,
                                          routes: l,
                                      });
                                  },
                                  { signal: e.signal }
                              ),
                              () => {
                                  e.abort();
                              }
                          );
                      }),
                      (r = [i, l, s]),
                      (o[0] = i),
                      (o[1] = s),
                      (o[2] = l),
                      (o[3] = t),
                      (o[4] = r))
                    : ((t = o[3]), (r = o[4])),
                    (0, b.useEffect)(t, r),
                    o[5] !== i || o[6] !== s || o[7] !== l
                        ? ((n = () => (
                              (0, S.n)().setState({
                                  location: i,
                                  matches: s,
                                  routes: l,
                              }),
                              k
                          )),
                          (a = [i, l, s]),
                          (o[5] = i),
                          (o[6] = s),
                          (o[7] = l),
                          (o[8] = n),
                          (o[9] = a))
                        : ((n = o[8]), (a = o[9])),
                    (0, b.useEffect)(n, a));
            }
            function k() {
                (0, S.n)().setState(null);
            }
            function _(e, t = "") {
                let r = [];
                for (let o of e) {
                    let e,
                        i = !0 === o.index,
                        s = o.path ?? "";
                    if (i)
                        e =
                            t.startsWith("/") && !t.endsWith("/")
                                ? t.endsWith("/")
                                    ? t
                                    : `${t}/`
                                : t || "/";
                    else {
                        var n, a;
                        e = s.startsWith("/")
                            ? s
                            : ((n = t),
                              (a = s),
                              n
                                  ? a
                                      ? `${n.replace(/\/+$/, "")}/${a.replace(/^\/+/, "")}`
                                      : n
                                  : a);
                    }
                    let l =
                        "id" in o && "string" == typeof o.id ? o.id : e || "/";
                    (r.push({
                        id: l,
                        pathname: e || "/",
                        route: o,
                        loaderData: void 0,
                    }),
                        o.children && r.push(..._(o.children, e)));
                }
                return r;
            }
            try {
                R.displayName || (R.displayName = "RouterDevTools");
            } catch {}
            try {
                E.displayName || (E.displayName = "NavigatorRouterDevTools");
            } catch {}
            try {
                x.displayName || (x.displayName = "DataRouterDevTools");
            } catch {}
            function N(e) {
                return (function ({ pathname: e, route: t, params: r }) {
                    return {
                        id: t.id ?? t.path ?? e,
                        pathname: e,
                        params: r,
                        loaderData: void 0,
                        data: void 0,
                        handle: t.handle,
                    };
                })(e);
            }
            var j = r(5330),
                P = r(79634),
                A = r(58578);
            function L(e, t, r) {
                let n,
                    a,
                    o,
                    i = (0, v.c)(8),
                    s = (0, b.useRef)(void 0),
                    l = (0, b.useRef)(t.state);
                (i[0] !== t.state
                    ? ((n = () => {
                          l.current = t.state;
                      }),
                      (i[0] = t.state),
                      (i[1] = n))
                    : (n = i[1]),
                    (0, b.useEffect)(n),
                    i[2] !== r ||
                    i[3] !== e ||
                    i[4] !== t.pathname ||
                    i[5] !== t.search
                        ? ((a = () => {
                              if ("POP" === r) return;
                              let n = t.pathname + t.search;
                              if (void 0 === s.current) s.current = n;
                              else if (s.current !== n && !e) {
                                  var a;
                                  if (
                                      !(
                                          "object" == typeof (a = l.current) &&
                                          null !== a &&
                                          A.V in a &&
                                          !0 === a[A.V]
                                      )
                                  ) {
                                      let e = document.querySelector(
                                          "[data-react-autofocus]"
                                      );
                                      (!e &&
                                          (e =
                                              document.querySelector(
                                                  "react-app h1"
                                              )) &&
                                          !e.hasAttribute("tabindex") &&
                                          e.setAttribute("tabindex", "-1"),
                                          e?.focus());
                                  }
                                  s.current = n;
                              }
                          }),
                          (o = [e, t.pathname, t.search, r]),
                          (i[2] = r),
                          (i[3] = e),
                          (i[4] = t.pathname),
                          (i[5] = t.search),
                          (i[6] = a),
                          (i[7] = o))
                        : ((a = i[6]), (o = i[7])),
                    (0, b.useEffect)(a, o));
            }
            function T() {
                return (L(!1, (0, d.zy)(), (0, d.wQ)()), null);
            }
            try {
                T.displayName || (T.displayName = "NavigationFocusListener");
            } catch {}
            var D = r(97665),
                O = r(73900),
                I = r(82591),
                M = r(86596),
                $ = r(4143);
            let z = I.z.INITIAL;
            function W() {
                let e,
                    t,
                    r,
                    n,
                    a = (0, v.c)(10),
                    o = (0, P.X)(),
                    i = (0, $.yT)(),
                    s = (0, D.jE)();
                return (
                    a[0] !== o || a[1] !== i || a[2] !== s
                        ? ((e = () => {
                              let e = U(i, s);
                              document.dispatchEvent(
                                  new O.gh({ payload: e, appPayload: o })
                              );
                          }),
                          (t = [i, o, s]),
                          (a[0] = o),
                          (a[1] = i),
                          (a[2] = s),
                          (a[3] = e),
                          (a[4] = t))
                        : ((e = a[3]), (t = a[4])),
                    (0, b.useEffect)(e, t),
                    a[5] !== o || a[6] !== i || a[7] !== s
                        ? ((r = () => {
                              let e = function () {
                                  let e = U(i, s);
                                  document.dispatchEvent(
                                      new O.gh({ payload: e, appPayload: o })
                                  );
                              };
                              return (
                                  document.addEventListener(z, e),
                                  () => {
                                      document.removeEventListener(z, e);
                                  }
                              );
                          }),
                          (n = [i, o, s]),
                          (a[5] = o),
                          (a[6] = i),
                          (a[7] = s),
                          (a[8] = r),
                          (a[9] = n))
                        : ((r = a[8]), (n = a[9])),
                    (0, b.useEffect)(r, n),
                    null
                );
            }
            function U(e, t) {
                let r = {};
                for (let n of e) {
                    if (!n.data) continue;
                    let e = n.data.route.id;
                    for (let a of Object.values(n.data.queries))
                        a.type === M.g.Blocking &&
                            (r[e] = t.getQueryData(a.queryConfig.queryKey));
                }
                return r;
            }
            try {
                W.displayName || (W.displayName = "PublishPayload");
            } catch {}
            var B = r(48602),
                F = r(73189),
                H = r(71315),
                q = r(88431);
            let Y = new Map(),
                V = !1,
                J = H.fV.href;
            async function G() {
                let { session: e } = await r.e(7332).then(r.bind(r, 7332));
                (document.addEventListener("turbo:click", (e) => {
                    J = e.detail.url;
                }),
                    window.addEventListener("popstate", () => {
                        let { scrollPosition: t } =
                            e.history.getRestorationDataForIdentifier(
                                e.history.restorationIdentifier
                            ) || {};
                        t && Y.set(window.location.href, t);
                    }));
            }
            async function X() {
                H.cg && (V || (await G(), (V = !0)));
            }
            function K() {
                let e = window.location.href;
                if (e === J && e.includes("#")) return;
                J = e;
                let t = Y.get(e);
                if (!t) return;
                let r = setTimeout(() => {
                    window.scrollTo(t.x, t.y);
                }, 0);
                return () => {
                    clearTimeout(r);
                };
            }
            let Q = H.cg
                ? function () {
                      (0, q.N)(K);
                  }
                : F.l;
            function Z() {
                let e,
                    t = (0, v.c)(1);
                return (Q(), "undefined" != typeof jest)
                    ? null
                    : (t[0] === Symbol.for("react.memo_cache_sentinel")
                          ? ((e = (0, s.jsx)(d.OA, {})), (t[0] = e))
                          : (e = t[0]),
                      e);
            }
            X();
            try {
                Z.displayName || (Z.displayName = "CombinedScrollRestoration");
            } catch {}
            var ee = r(3291),
                et = r(76143),
                er = r(43538);
            function en() {
                let e,
                    t,
                    r = (0, v.c)(4),
                    n = (0, $.yT)(),
                    a = (0, D.jE)();
                return (
                    r[0] !== n || r[1] !== a
                        ? ((e = () => {
                              for (let e of [...n].reverse()) {
                                  if (!e.data?.route) continue;
                                  let t = e.data?.queries.mainQuery;
                                  if (!t) continue;
                                  let r = (function (e, t) {
                                      let r = e.getQueryData(t.queryKey);
                                      if (r) {
                                          if ("title" in r && r.title)
                                              return r.title;
                                          else if ("meta" in r && r.meta)
                                              return r.meta.title;
                                      } else {
                                          (0, er.G)() &&
                                              console.error(
                                                  "Unexpected attempt to read title for a query that is not in the query client. If you encounter this error in your application, please reach out to #react to help diagnose the issue."
                                              );
                                          return;
                                      }
                                  })(a, t.queryConfig);
                                  if (r) {
                                      (0, et.D)((0, et.Y)(r));
                                      break;
                                  }
                              }
                          }),
                          (t = [n, a]),
                          (r[0] = n),
                          (r[1] = a),
                          (r[2] = e),
                          (r[3] = t))
                        : ((e = r[2]), (t = r[3])),
                    (0, b.useEffect)(e, t),
                    null
                );
            }
            try {
                en.displayName || (en.displayName = "TitleManager");
            } catch {}
            async function ea(e, t) {
                let { routes: r } = (await m("app-shell")).registration({
                    embeddedData: t,
                });
                if (1 !== r.length)
                    throw Error(
                        "Expected app shell routes to have a single entry"
                    );
                let [n] = r;
                return [{ ...n, children: e, index: !1 }];
            }
            let eo = new p.R();
            async function ei(e) {
                return eo.getRegistration(e).promise;
            }
            var es = r(76648);
            function el(e) {
                let t,
                    r,
                    n,
                    a,
                    o,
                    i,
                    l,
                    u,
                    c = (0, v.c)(2),
                    { App: h } = e;
                return (
                    (i = (0, v.c)(8)),
                    (l = (0, es.B)()),
                    (u = (0, P.X)()),
                    i[0] !== u || i[1] !== l
                        ? ((r = () => {
                              let e = new AbortController();
                              return (
                                  document.addEventListener(
                                      I.z.INITIAL,
                                      function () {
                                          document.dispatchEvent(
                                              new O.gh({
                                                  payload: l,
                                                  appPayload: u,
                                              })
                                          );
                                      },
                                      { signal: e.signal }
                                  ),
                                  () => {
                                      e.abort();
                                  }
                              );
                          }),
                          (n = [u, l]),
                          (i[0] = u),
                          (i[1] = l),
                          (i[2] = r),
                          (i[3] = n))
                        : ((r = i[2]), (n = i[3])),
                    (0, b.useEffect)(r, n),
                    i[4] !== u || i[5] !== l
                        ? ((a = () => {
                              document.dispatchEvent(
                                  new O.gh({ payload: l, appPayload: u })
                              );
                          }),
                          (o = [u, l]),
                          (i[4] = u),
                          (i[5] = l),
                          (i[6] = a),
                          (i[7] = o))
                        : ((a = i[6]), (o = i[7])),
                    (0, b.useEffect)(a, o),
                    c[0] !== h
                        ? ((t = h
                              ? (0, s.jsx)(h, {
                                    children: (0, s.jsx)(d.sv, {}),
                                })
                              : (0, s.jsx)(d.sv, {})),
                          (c[0] = h),
                          (c[1] = t))
                        : (t = c[1]),
                    t
                );
            }
            try {
                el.displayName || (el.displayName = "AppWrapper");
            } catch {}
            var eu = r(75202),
                ec = r(42270),
                ed = r(35750),
                eh = r(18150),
                ep = r(85242),
                ef = r(65432),
                em = r(27744);
            let ey = (e, t) =>
                null !== e &&
                null !== t &&
                e.pathname === t.pathname &&
                e.search === t.search &&
                !!t.hash;
            var eg = new WeakMap(),
                ev = new WeakMap(),
                eb = new WeakMap(),
                ew = new WeakSet(),
                eS = new WeakMap(),
                eR = new WeakSet();
            let eE = class Navigator {
                update(e) {
                    var t;
                    this.state = Object.assign({}, this.state, e);
                    let r = this.getAppNavigationState();
                    null == (t = (0, n._)(this, ew, ex)) || t.call(this, r);
                }
                subscribe(e) {
                    let t = (0, ed._)(this, eb).push(e);
                    return () => {
                        (0, ed._)(this, eb)[t] = null;
                    };
                }
                async handleHistoryUpdate(e) {
                    if (
                        "POP" === e.action &&
                        (0, c.JV)().turboCount !== this.state.turboCount
                    )
                        return;
                    if (this.isHashNavigation(e))
                        return void this.navigateWithCurrentPayload(e);
                    "POP" !== e.action && (0, ef.SC)("react");
                    let t = this.state.routeStateMap[e.location.key],
                        r = void 0 !== t;
                    if ((t && t.isValid && (r = t.isValid()), r))
                        this.navigateFromHistory(e);
                    else {
                        let t = this.matchLocation(e.location);
                        if (!t)
                            throw Error(
                                "handleHistoryUpdate should only be called for matching routes"
                            );
                        if (
                            (t.route.transitionType ===
                                em.E.TRANSITION_WHILE_FETCHING &&
                                this.navigateWithoutPayload(e),
                            t.route.transitionType ===
                                em.E.TRANSITION_WITHOUT_FETCH)
                        )
                            return void this.navigateWithoutPayload(e);
                        let r = (0, c.JV)().usr?.__prefetched_data;
                        if (r)
                            return void this.leaveLoadingStateWithRouteData(
                                e,
                                r,
                                r.title
                            );
                        this.enterLoadingState(e);
                        let n = await t.route.coreLoader({
                            location: e.location,
                            pathParams: t.params,
                            embeddedData:
                                t.route === (0, ed._)(this, ev)
                                    ? this.initialEmbeddedData
                                    : void 0,
                        });
                        if (
                            e.location !==
                            this.state.pendingNavigation?.update.location
                        )
                            return;
                        switch (n.type) {
                            case "loaded":
                                this.leaveLoadingStateWithRouteData(
                                    e,
                                    n.data,
                                    n.title,
                                    n.isValid
                                );
                                break;
                            case "error":
                                this.leaveLoadingStateWithError(e, n.error, !1);
                                break;
                            case "redirect":
                                window.location.replace(n.url + location.hash);
                                break;
                            case "route-handled-error":
                                this.leaveLoadingStateWithError(e, n.error, !0);
                                break;
                            default:
                                throw Error(
                                    `Unexpected loader result type: ${n.type}`
                                );
                        }
                    }
                }
                matchLocation(e) {
                    var t, r;
                    return (
                        (t = (0, ed._)(this, eg)),
                        (r = e),
                        (0, d.ue)(t, r.pathname)?.[0]
                    );
                }
                isHashNavigation(e) {
                    return ey(this.state.location, e.location);
                }
                navigateFromHistory(e) {
                    this.update({
                        location: e.location,
                        pendingNavigation: null,
                        error: null,
                    });
                }
                enterLoadingState(e) {
                    this.update({ pendingNavigation: { update: e } });
                }
                leaveLoadingStateWithError(e, t, r) {
                    this.update({
                        location: e.location,
                        error: t,
                        pendingNavigation: null,
                        navigateOnError: r,
                    });
                }
                navigateWithoutPayload(e) {
                    this.update({ location: e.location, error: null });
                }
                navigateWithCurrentPayload(e) {
                    let t = this.state.location.key,
                        r = t + e.location.hash,
                        n = { ...e.location, key: r },
                        a = {
                            ...this.state.routeStateMap,
                            [r]: this.state.routeStateMap[t],
                        };
                    this.update({
                        ...e,
                        location: n,
                        routeStateMap: a,
                        error: null,
                    });
                }
                leaveLoadingStateWithRouteData(e, t, r, n) {
                    this.update({
                        location: e.location,
                        pendingNavigation: null,
                        routeStateMap: t
                            ? {
                                  ...this.state.routeStateMap,
                                  [e.location.key]: {
                                      type: "loaded",
                                      data: t,
                                      title: r,
                                      isValid: n,
                                  },
                              }
                            : this.state.routeStateMap,
                        error: null,
                    });
                }
                constructor(e, t, r, i) {
                    ((0, a._)(this, ew),
                        (0, a._)(this, eR),
                        (0, o._)(this, "state", void 0),
                        (0, eh._)(this, eg, { writable: !0, value: void 0 }),
                        (0, eh._)(this, ev, { writable: !0, value: void 0 }),
                        (0, o._)(this, "initialEmbeddedData", void 0),
                        (0, eh._)(this, eb, { writable: !0, value: [] }),
                        (0, eh._)(this, eS, {
                            writable: !0,
                            value: new WeakMap(),
                        }),
                        (0, o._)(this, "getAppNavigationState", () => {
                            let e = (0, ed._)(this, eS).get(this.state);
                            if (e) return e;
                            let {
                                    location: t,
                                    error: r,
                                    navigateOnError: n,
                                    routeStateMap: a,
                                    appPayload: o,
                                    pendingNavigation: i,
                                } = this.state,
                                s = {
                                    location: t,
                                    error: r,
                                    navigateOnError: n,
                                    routeStateMap: a,
                                    appPayload: o,
                                    isLoading: !!i,
                                };
                            return ((0, ed._)(this, eS).set(this.state, s), s);
                        }),
                        (0, ep._)(this, eg, i));
                    const s = this.matchLocation(e);
                    if (!s)
                        throw Error(
                            `No route found for initial location: ${e.pathname} in [${(0, n._)(this, eR, eC).call(this)}]`
                        );
                    const {
                        data: l,
                        title: u,
                        isValid: d,
                    } = s.route.loadFromEmbeddedData({
                        embeddedData: t,
                        location: e,
                        pathParams: s.params,
                    });
                    ((this.initialEmbeddedData = t),
                        (0, ep._)(this, ev, s.route),
                        (this.state = {
                            location: e,
                            routeStateMap: {
                                [e.key]: {
                                    type: "loaded",
                                    data: l,
                                    title: u,
                                    isValid: d,
                                },
                            },
                            appPayload: r,
                            pendingNavigation: null,
                            error: null,
                            navigateOnError: !1,
                            turboCount: (0, c.JV)().turboCount || 0,
                        }));
                }
            };
            function ex(e) {
                for (let t of (0, ed._)(this, eb)) t?.(e);
            }
            function eC() {
                return (0, ed._)(this, eg)
                    .map((e) => e.path)
                    .join(", ");
            }
            var ek = r(56629);
            function e_(e) {
                var t;
                let r,
                    n,
                    a,
                    o,
                    i,
                    l,
                    u,
                    c,
                    h,
                    p,
                    f,
                    m,
                    w,
                    S = (0, v.c)(33),
                    {
                        appName: R,
                        initialLocation: E,
                        history: x,
                        embeddedData: C,
                        routes: k,
                        App: _,
                        wasServerRendered: N,
                        ssrError: j,
                        onError: P,
                    } = e;
                S[0] !== R || S[1] !== C || S[2] !== E || S[3] !== k
                    ? ((r = {
                          initialLocation: E,
                          appName: R,
                          embeddedData: C,
                          routes: k,
                      }),
                      (S[0] = R),
                      (S[1] = C),
                      (S[2] = E),
                      (S[3] = k),
                      (S[4] = r))
                    : (r = S[4]);
                let [A, T] = (function (e) {
                        let t,
                            r,
                            n,
                            a,
                            o,
                            i = (0, v.c)(13),
                            {
                                initialLocation: s,
                                embeddedData: l,
                                routes: u,
                            } = e;
                        i[0] !== l || i[1] !== s || i[2] !== u
                            ? ((t = () => {
                                  let { appPayload: e, ...t } = l;
                                  return new eE(
                                      s,
                                      {
                                          ...t,
                                          enabled_features: e?.enabled_features
                                              ? e.enabled_features
                                              : {},
                                      },
                                      e,
                                      u
                                  );
                              }),
                              (i[0] = l),
                              (i[1] = s),
                              (i[2] = u),
                              (i[3] = t))
                            : (t = i[3]);
                        let [c] = (0, b.useState)(t);
                        i[4] !== c
                            ? ((r = (e) => {
                                  let t = c.subscribe(e);
                                  return () => {
                                      t();
                                  };
                              }),
                              (i[4] = c),
                              (i[5] = r))
                            : (r = i[5]);
                        let d = (0, b.useSyncExternalStore)(
                            r,
                            c.getAppNavigationState,
                            c.getAppNavigationState
                        );
                        i[6] !== c
                            ? ((n = (e) => {
                                  (0, b.startTransition)(() => {
                                      c.handleHistoryUpdate(e);
                                  });
                              }),
                              (i[6] = c),
                              (i[7] = n))
                            : (n = i[7]);
                        let h = n;
                        return (
                            i[8] !== h
                                ? ((a = { handleHistoryUpdate: h }),
                                  (i[8] = h),
                                  (i[9] = a))
                                : (a = i[9]),
                            i[10] !== d || i[11] !== a
                                ? ((o = [d, a]),
                                  (i[10] = d),
                                  (i[11] = a),
                                  (i[12] = o))
                                : (o = i[12]),
                            o
                        );
                    })(r),
                    {
                        location: D,
                        error: O,
                        routeStateMap: I,
                        appPayload: M,
                        navigateOnError: $,
                        isLoading: z,
                    } = A,
                    { handleHistoryUpdate: W } = T;
                return (
                    (t = I[D.key]),
                    (m = (0, v.c)(5)),
                    (w = (0, b.useRef)(null)),
                    m[0] !== t || m[1] !== O || m[2] !== D
                        ? ((p = () => {
                              if (
                                  (w.current || (w.current = D),
                                  !ey(w.current, D) && (O || t))
                              )
                                  if (O) {
                                      var e;
                                      let t,
                                          r =
                                              ((t =
                                                  404 === (e = O).httpStatus
                                                      ? "404 Page not found"
                                                      : 500 === e.httpStatus
                                                        ? "500 Internal server error"
                                                        : e.httpStatus
                                                          ? `Error ${e.httpStatus}`
                                                          : "Error"),
                                              (0, et.Y)(t));
                                      (0, et.D)(r);
                                  } else
                                      t?.type === "loaded" &&
                                          t.title &&
                                          (0, et.D)((0, et.Y)(t.title));
                              w.current?.key !== D.key && (w.current = D);
                          }),
                          (f = [O, t, D]),
                          (m[0] = t),
                          (m[1] = O),
                          (m[2] = D),
                          (m[3] = p),
                          (m[4] = f))
                        : ((p = m[3]), (f = m[4])),
                    (0, b.useEffect)(p, f),
                    L(z, D),
                    (0, ek.n)(D, z, O),
                    Q(),
                    S[5] !== W || S[6] !== x
                        ? ((n = () => x.listen(W)),
                          (a = [x, W]),
                          (S[5] = W),
                          (S[6] = x),
                          (S[7] = n),
                          (S[8] = a))
                        : ((n = S[7]), (a = S[8])),
                    (0, q.N)(n, a),
                    S[9] !== _ || S[10] !== k
                        ? ((o = (0, s.jsx)(eN, { routes: k, App: _ })),
                          (S[9] = _),
                          (S[10] = k),
                          (S[11] = o))
                        : (o = S[11]),
                    S[12] !== x || S[13] !== D || S[14] !== o
                        ? ((i = (0, s.jsx)(d.Ix, {
                              location: D,
                              navigator: x,
                              children: o,
                          })),
                          (S[12] = x),
                          (S[13] = D),
                          (S[14] = o),
                          (S[15] = i))
                        : (i = S[15]),
                    S[16] !== j
                        ? ((l = (0, s.jsx)(g.h, { ssrError: j })),
                          (S[16] = j),
                          (S[17] = l))
                        : (l = S[17]),
                    S[18] !== M ||
                    S[19] !== O ||
                    S[20] !== $ ||
                    S[21] !== I ||
                    S[22] !== k ||
                    S[23] !== i ||
                    S[24] !== l
                        ? ((u = (0, s.jsxs)(ec.l, {
                              appPayload: M,
                              error: O,
                              navigateOnError: $,
                              routes: k,
                              routeStateMap: I,
                              children: [i, l],
                          })),
                          (S[18] = M),
                          (S[19] = O),
                          (S[20] = $),
                          (S[21] = I),
                          (S[22] = k),
                          (S[23] = i),
                          (S[24] = l),
                          (S[25] = u))
                        : (u = S[25]),
                    S[26] !== P || S[27] !== u
                        ? ((c = (0, s.jsx)(eu.t, {
                              onError: P,
                              critical: !0,
                              children: u,
                          })),
                          (S[26] = P),
                          (S[27] = u),
                          (S[28] = c))
                        : (c = S[28]),
                    S[29] !== R || S[30] !== c || S[31] !== N
                        ? ((h = (0, s.jsx)(y.U, {
                              appName: R,
                              wasServerRendered: N,
                              dataRouterEnabled: !1,
                              children: c,
                          })),
                          (S[29] = R),
                          (S[30] = c),
                          (S[31] = N),
                          (S[32] = h))
                        : (h = S[32]),
                    h
                );
            }
            function eN(e) {
                let t,
                    r,
                    n,
                    a,
                    o = (0, v.c)(10),
                    { App: i, routes: l } = e;
                return (
                    o[0] !== i
                        ? ((t = (0, s.jsx)(el, { App: i })),
                          (o[0] = i),
                          (o[1] = t))
                        : (t = o[1]),
                    o[2] !== l
                        ? ((r = (0, s.jsx)(R, { routes: l })),
                          (o[2] = l),
                          (o[3] = r))
                        : (r = o[3]),
                    o[4] !== t || o[5] !== r
                        ? ((n = (0, s.jsxs)(s.Fragment, { children: [t, r] })),
                          (o[4] = t),
                          (o[5] = r),
                          (o[6] = n))
                        : (n = o[6]),
                    o[7] !== l || o[8] !== n
                        ? ((a = [{ element: n, children: l }]),
                          (o[7] = l),
                          (o[8] = n),
                          (o[9] = a))
                        : (a = o[9]),
                    (0, d.Ye)(a)
                );
            }
            X();
            try {
                e_.displayName || (e_.displayName = "NavigatorClientEntry");
            } catch {}
            try {
                eN.displayName || (eN.displayName = "AppRoutes");
            } catch {}
            var ej = r(11934),
                eP = r(16235),
                eA = r(3538),
                eL = new WeakSet(),
                eT = new WeakSet(),
                eD = new WeakSet();
            let ReactAppElement = class ReactAppElement extends eA.H {
                get enabledFeatures() {
                    if (!this.embeddedDataJSON) return [];
                    let e =
                        this.embeddedDataJSON.appPayload?.enabled_features ||
                        {};
                    return Object.keys(e).filter((t) => e[t]);
                }
                get routes() {
                    return this.appRoutes || this.routerOrHistory?.routes || [];
                }
                get navigate() {
                    return "push" in this.routerOrHistory
                        ? this.routerOrHistory.push
                        : "navigate" in this.routerOrHistory
                          ? this.routerOrHistory.navigate
                          : void 0;
                }
                connectedCallback() {
                    (super.connectedCallback(),
                        (this.uuid = (0, u._S)()),
                        (0, u.cW)(this.uuid),
                        window.addEventListener(
                            "popstate",
                            this.popStateListener,
                            !0
                        ));
                }
                disconnectedCallback() {
                    (window.removeEventListener(
                        "popstate",
                        this.popStateListener,
                        !0
                    ),
                        this.routerOrHistory?.dispose(),
                        super.disconnectedCallback());
                }
                get isDataRouterEnabled() {
                    return (
                        "true" === this.getAttribute("data-data-router-enabled")
                    );
                }
                get includeAppShell() {
                    return "true" === this.getAttribute("data-app-shell");
                }
                async getReactNode(e, t) {
                    if (this.isDataRouterEnabled) {
                        let r = await m(this.name);
                        return (0, n._)(this, eL, eO).call(
                            this,
                            e,
                            t,
                            r.registration
                        );
                    }
                    let r = await ei(this.name);
                    return (0, n._)(this, eT, eI).call(
                        this,
                        e,
                        t,
                        r.registration
                    );
                }
                get isLazy() {
                    return "true" === this.getAttribute("data-lazy");
                }
                constructor(...e) {
                    (super(...e),
                        (0, a._)(this, eL),
                        (0, a._)(this, eT),
                        (0, a._)(this, eD),
                        (0, o._)(this, "nameAttribute", "app-name"),
                        (0, o._)(this, "appRoutes", []),
                        (0, o._)(this, "popStateListener", (e) => {
                            e.state &&
                                this.uuid !== (0, c.JV)().appId &&
                                this.routerOrHistory?.dispose();
                        }));
                }
            };
            async function eO(e, t, r) {
                e &&
                    ((0, n._)(this, eD, eM).call(this, e),
                    (0, eP.S)().removeQueries({ queryKey: [this.name] }));
                let { routes: a } = r({ embeddedData: e });
                return (
                    this.includeAppShell && (a = await ea(a, e)),
                    (this.routerOrHistory = (0, h.T)(
                        (0, d.Ys)(
                            (function (
                                e,
                                {
                                    ssrError: t,
                                    appName: r,
                                    wasServerRendered: n,
                                    children: a,
                                    HydrateFallback: o,
                                    dataRouterEnabled: i,
                                    appPayload: l,
                                }
                            ) {
                                return [
                                    {
                                        id: "__DATA_ROUTER_ROOT__",
                                        errorElement: (0, s.jsx)(B.hw, {
                                            appName: r,
                                        }),
                                        HydrateFallback: o,
                                        element: (0, s.jsx)(y.U, {
                                            appName: r,
                                            wasServerRendered: n,
                                            dataRouterEnabled: i,
                                            children: (0, s.jsx)(P.z.Provider, {
                                                value: l,
                                                children: (0, s.jsxs)(j.d, {
                                                    routes: e,
                                                    children: [
                                                        (0, s.jsx)(d.sv, {}),
                                                        a,
                                                        (0, s.jsx)(g.h, {
                                                            ssrError: t,
                                                        }),
                                                        (0, s.jsx)(ee.e, {}),
                                                        (0, s.jsx)(T, {}),
                                                        (0, s.jsx)(Z, {}),
                                                        (0, s.jsx)(W, {}),
                                                        (0, s.jsx)(en, {}),
                                                        (0, s.jsx)(R, {
                                                            routes: e,
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                        children: [
                                            {
                                                id: "__DATA_ROUTER_APPLICATION_ROUTES__",
                                                errorElement: (0, s.jsx)(B.Ly, {
                                                    appName: r,
                                                }),
                                                children: e,
                                            },
                                        ],
                                    },
                                ];
                            })(a, {
                                appPayload: e.appPayload,
                                ssrError: this.ssrError,
                                appName: this.name,
                                wasServerRendered: this.hasSSRContent,
                                dataRouterEnabled: !0,
                            })
                        )
                    )),
                    (0, s.jsx)(ej.f, {
                        appName: this.name,
                        isDataRouterEnabled: !0,
                        children: (0, s.jsx)(ej.U, {
                            id: this.name,
                            children: (0, s.jsx)(d.pg, {
                                router: this.routerOrHistory,
                            }),
                        }),
                    })
                );
            }
            async function eI(e, t, r) {
                let { App: n, routes: a } = r(),
                    o = this.getAttribute("initial-path");
                if (this.isLazy) {
                    let t = await fetch(o, {
                            mode: "no-cors",
                            cache: "no-cache",
                            credentials: "include",
                        }),
                        { payload: r } = await t.json();
                    e.payload = r;
                }
                let i = globalThis.window,
                    {
                        pathname: l,
                        search: u,
                        hash: h,
                    } = new URL(
                        `${o}${i?.location.hash ?? ""}`,
                        i?.location.href ?? "https://github.com"
                    );
                (0, c.C3)({ key: Math.random().toString(36).substr(2, 8) });
                let p = (function (e = {}) {
                    let t,
                        r = (0, d.zR)({ ...e, v5Compat: !0 }),
                        n = [],
                        a = !1;
                    function o(e) {
                        if (n.length > 0)
                            for (let t of n)
                                t({
                                    retry() {
                                        e();
                                    },
                                });
                        else e();
                    }
                    return {
                        get action() {
                            return r.action;
                        },
                        get location() {
                            return r.location;
                        },
                        createHref: (e) => r.createHref(e),
                        createURL: (e) => r.createURL(e),
                        encodeLocation: (e) => r.encodeLocation(e),
                        push(e, t) {
                            o(() => r.push(e, t));
                        },
                        replace(e, t) {
                            o(() => r.replace(e, t));
                        },
                        go(e) {
                            o(() => r.go(e));
                        },
                        listen(e) {
                            if (t)
                                throw Error(
                                    "A history only accepts one active listener"
                                );
                            return (
                                (t = e),
                                () => {
                                    t = void 0;
                                }
                            );
                        },
                        dispose: r.listen((e) => {
                            if (a) {
                                a = !1;
                                return;
                            }
                            if (
                                e.action === d.rc.Pop &&
                                n.length &&
                                null !== e.delta &&
                                n.length > 0
                            ) {
                                let t = e.delta;
                                for (let e of ((a = !0), r.go(-1 * t), n))
                                    e({
                                        retry() {
                                            r.go(t);
                                        },
                                    });
                            } else t?.(e);
                        }),
                        block: (e) => (
                            n.push(e),
                            () => {
                                n = n.filter((t) => t !== e);
                            }
                        ),
                    };
                })({ window: i });
                ((this.routerOrHistory = p), (this.appRoutes = a));
                let { key: f, state: m } = p.location;
                return (0, s.jsx)(ej.f, {
                    appName: this.name,
                    isDataRouterEnabled: !1,
                    children: (0, s.jsx)(ej.U, {
                        id: this.name,
                        children: (0, s.jsx)(e_, {
                            appName: this.name,
                            initialLocation: {
                                pathname: l,
                                search: u,
                                hash: h,
                                key: f,
                                state: m,
                            },
                            history: p,
                            embeddedData: e,
                            routes: a,
                            App: n,
                            wasServerRendered: this.hasSSRContent,
                            ssrError: this.ssrError,
                            onError: t,
                        }),
                    }),
                });
            }
            function eM(e) {
                if (e.payload)
                    for (let t of this.querySelectorAll("rails-partial")) {
                        let r = t.getAttribute("data-partial-name");
                        r && (e.payload[r] = t.innerHTML);
                    }
            }
            function e$(e, t) {
                eo.register(e, { type: "NavigatorApp", registration: t });
            }
            function ez(e) {
                f.register(e.name, {
                    type: "DataRouterApp",
                    registration: e.registration,
                });
            }
            ReactAppElement = (0, i.Cg)([l.p_], ReactAppElement);
        },
        3291: (e, t, r) => {
            r.d(t, { e: () => i, f: () => s });
            var n = r(61526),
                a = r(96540),
                o = r(56629);
            let i = (0, a.memo)(function () {
                    let e = (0, n.zy)(),
                        t = !!(0, n.cq)().location;
                    return ((0, o.n)(e, t, null), null);
                }),
                s = (0, a.memo)(function () {
                    let e = (0, n.zy)();
                    return ((0, o.n)(e, !1, null), null);
                });
            try {
                i.displayName || (i.displayName = "SoftNavLifecycleListener");
            } catch {}
            try {
                s.displayName ||
                    (s.displayName = "SoftNavLifecycleListenerLegacy");
            } catch {}
        },
        3538: (e, t, r) => {
            r.d(t, { H: () => ReactBaseElement });
            var n = r(35750),
                a = r(18150),
                o = r(85242),
                i = r(88243),
                s = r(16213),
                l = r(31635),
                u = r(74848),
                c = r(39595),
                d = r(38102),
                h = r(73189),
                p = r(28600),
                f = r(82518),
                m = r(96540),
                y = r(5338),
                g = r(7820),
                v = r(43538);
            let b = /Minified React error #(?<invariant>\d+)/,
                w = ["419", "421"];
            var S = new WeakMap(),
                R = new WeakMap(),
                E = new WeakMap(),
                x = new WeakMap(),
                C = new WeakSet(),
                k = new WeakSet(),
                _ = new WeakSet(),
                N = new WeakSet(),
                j = new WeakSet(),
                P = new WeakSet(),
                A = new WeakSet();
            let ReactBaseElement = class ReactBaseElement extends HTMLElement {
                get name() {
                    return this.getAttribute(this.nameAttribute);
                }
                get hasSSRContent() {
                    return "true" === this.getAttribute("data-ssr");
                }
                get attemptedSSR() {
                    return "true" === this.getAttribute("data-attempted-ssr");
                }
                connectedCallback() {
                    ((this.embeddedDataJSON = JSON.parse((0, n._)(this, x))),
                        (0, i._)(this, j, M).call(this));
                }
                disconnectedCallback() {
                    if (
                        ((0, n._)(this, S)?.unmount(),
                        (0, o._)(this, S, void 0),
                        (0, n._)(this, R) && (0, n._)(this, E))
                    ) {
                        let e = (0, n._)(this, R),
                            t = (0, n._)(this, E);
                        (requestIdleCallback(() => {
                            for (let r of e)
                                r.parentElement &&
                                    "true" === r.getAttribute("data-styled") &&
                                    r.getAttribute("data-react-root-id") ===
                                        t &&
                                    r.remove();
                        }),
                            (0, o._)(this, R, void 0),
                            (0, o._)(this, E, void 0));
                    }
                }
                constructor(...e) {
                    (super(...e),
                        (0, a._)(this, x, { get: L, set: void 0 }),
                        (0, s._)(this, C),
                        (0, s._)(this, k),
                        (0, s._)(this, _),
                        (0, s._)(this, N),
                        (0, s._)(this, j),
                        (0, s._)(this, P),
                        (0, s._)(this, A),
                        (0, a._)(this, S, { writable: !0, value: void 0 }),
                        (0, a._)(this, R, { writable: !0, value: void 0 }),
                        (0, a._)(this, E, { writable: !0, value: void 0 }));
                }
            };
            function L() {
                let e = this.embeddedData?.textContent;
                if (!e)
                    throw Error(
                        `No embedded data provided for react element ${this.name}`
                    );
                return e;
            }
            function T() {
                let e = ({ children: e }) => e;
                return ((e.displayName = `${this.tagName}(${this.name})`), e);
            }
            function D() {
                return (
                    p.A.isEnabled() ||
                    "true" === this.getAttribute("data-react-profiling")
                );
            }
            function O(e, t, r) {
                try {
                    (window.performance.mark(r),
                        queueMicrotask(() => {
                            try {
                                if (
                                    1 ===
                                        window.performance.getEntriesByName(t)
                                            .length &&
                                    1 ===
                                        window.performance.getEntriesByName(r)
                                            .length
                                ) {
                                    let n = window.performance.measure(e, t, r);
                                    (0, f.iv)({
                                        reactHydrationTimings: {
                                            duration: n.duration,
                                            appName: this.name,
                                            reactVersion: m.version,
                                            renderType: this.hasSSRContent
                                                ? "hydrateRoot"
                                                : "createRoot",
                                        },
                                        requestUrl: location.href,
                                    });
                                }
                            } catch {
                            } finally {
                                (window.performance.clearMarks(t),
                                    window.performance.clearMarks(r),
                                    window.performance.clearMeasures(e));
                            }
                        }));
                } catch {}
            }
            function I() {
                try {
                    let e = crypto.randomUUID(),
                        t = `react-base-element-initial-render-${this.name}-[${e}]`,
                        r = `${t}-start`,
                        n = `${t}-end`,
                        a = `${t}-entry`;
                    return (
                        window.performance.mark(r),
                        () => {
                            (0, i._)(this, _, O).call(this, a, r, n);
                        }
                    );
                } catch {
                    return h.l;
                }
            }
            async function M() {
                if (!this.reactRoot) throw Error("No react root provided");
                let e = { createRoot: y.H, hydrateRoot: y.c };
                (0, i._)(this, k, D).call(this) &&
                    (e = await (0, i._)(this, P, $).call(this));
                let t = (0, i._)(this, N, I).call(this),
                    r = !1,
                    a = (e, t = {}) => {
                        r = !0;
                        let n = { critical: !0, reactAppName: this.name, ...t };
                        setTimeout(() => {
                            (0, d.N7)(e, n);
                        });
                    },
                    s = this.embeddedDataJSON,
                    l = this.ssrError?.textContent,
                    c = await this.getReactNode(s, a),
                    h = (0, i._)(this, C, T).call(this),
                    p = (0, u.jsx)(m.StrictMode, {
                        children: (0, u.jsx)(h, { children: c }),
                    });
                if (
                    (l && (0, i._)(this, A, z).call(this, l),
                    this.hasSSRContent)
                ) {
                    let t = [
                            ...this.querySelectorAll(
                                'style[data-styled="true"]'
                            ),
                        ],
                        n = [
                            ...this.querySelectorAll(
                                'link[data-remove-after-hydration="true"]'
                            ),
                        ],
                        a = crypto.randomUUID();
                    for (let e of t)
                        (e.setAttribute("data-react-root-id", a),
                            document.head.appendChild(e));
                    for (let e of ((0, o._)(this, R, t),
                    (0, o._)(this, E, a),
                    n))
                        document.head.appendChild(e);
                    ((0, o._)(
                        this,
                        S,
                        e.hydrateRoot(this.reactRoot, p, {
                            onRecoverableError: (e, t) => {
                                if (!(e instanceof Error)) return;
                                let n = b.exec(e.message),
                                    a = String(n?.groups?.invariant);
                                ((r = !w.includes(a)),
                                    (0, f.iv)({
                                        incrementKey: "REACT_HYDRATION_ERROR",
                                        incrementTags: {
                                            appName: this.name,
                                            invariant: a,
                                        },
                                        requestUrl: window.location.href,
                                    }),
                                    r &&
                                        (0, v.G)() &&
                                        (console.groupCollapsed(
                                            `%c\u{26A0}\u{FE0F} Recoverable hydration error - ${this.name} - ${e.message}`,
                                            "background: rgba(255, 193, 7, 0.2); font-weight: bold; padding: 4px; border: 1px solid rgba(255, 193, 7, 0.5); border-radius: 4px;",
                                            "This is only visible to staff users and is safe to ignore. Reach out to #react for help understanding and fixing these hydration errors"
                                        ),
                                        e.cause &&
                                            console.warn("cause", e.cause),
                                        t.componentStack &&
                                            console.warn(
                                                "componentStack",
                                                t.componentStack
                                            ),
                                        console.groupEnd()));
                            },
                        })
                    ),
                        n.length > 0 &&
                            requestIdleCallback(() => {
                                for (let e of n)
                                    e.parentElement?.removeChild(e);
                            }),
                        (0, f.iv)({
                            incrementKey: "REACT_RENDER",
                            incrementTags: {
                                appName: this.name,
                                csr: !1,
                                error: r,
                                ssr: !0,
                                ssrError: !1,
                            },
                        }));
                } else
                    ((0, o._)(this, S, e.createRoot(this.reactRoot)),
                        (0, n._)(this, S).render(p),
                        (0, f.iv)({
                            incrementKey: "REACT_RENDER",
                            incrementTags: {
                                appName: this.name,
                                csr: !0,
                                error: r,
                                ssr: this.attemptedSSR,
                                ssrError: !!this.ssrError,
                            },
                        }));
                (this.classList.add("loaded"), t());
            }
            function $() {
                return r.e(33789).then(r.t.bind(r, 87335, 19));
            }
            function z(e) {
                if ((0, v.G)()) {
                    if (g.z[e])
                        return console.error(
                            "SSR failed with an expected error:",
                            g.z[e]
                        );
                    try {
                        let t = JSON.parse(e),
                            r = (function (e) {
                                if (!e.stacktrace) return "";
                                let t = `
 `;
                                return e.stacktrace.map((e) => {
                                    let {
                                            function: r,
                                            filename: n,
                                            lineno: a,
                                            colno: o,
                                        } = e,
                                        i = `${t} at ${r} (${n}:${a}:${o})`;
                                    return ((t = " "), i);
                                }).join(`
`);
                            })(t);
                        console.error(
                            "Error During Alloy SSR:",
                            `${this.tagName.toLowerCase()}[${this.name}]`,
                            `${t.type}: ${t.value}
`,
                            t,
                            r
                        );
                    } catch {
                        console.error(
                            "Error During Alloy SSR:",
                            `${this.tagName.toLowerCase()}[${this.name}]`,
                            e,
                            "unable to parse as json"
                        );
                    }
                }
            }
            ((0, l.Cg)(
                [c.aC],
                ReactBaseElement.prototype,
                "embeddedData",
                void 0
            ),
                (0, l.Cg)(
                    [c.aC],
                    ReactBaseElement.prototype,
                    "ssrError",
                    void 0
                ),
                (0, l.Cg)(
                    [c.aC],
                    ReactBaseElement.prototype,
                    "reactRoot",
                    void 0
                ));
            try {
                b.displayName ||
                    (b.displayName = "REACT_INVARIANT_ERROR_REGEX");
            } catch {}
        },
        3962: (e, t, r) => {
            r.d(t, { A: () => a, I: () => n });
            var n = (0, r(49236).qU)({
                fontFamily: { property: "fontFamily", scale: "fonts" },
                fontSize: {
                    property: "fontSize",
                    scale: "fontSizes",
                    defaultScale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
                },
                fontWeight: { property: "fontWeight", scale: "fontWeights" },
                lineHeight: { property: "lineHeight", scale: "lineHeights" },
                letterSpacing: {
                    property: "letterSpacing",
                    scale: "letterSpacings",
                },
                textAlign: !0,
                fontStyle: !0,
            });
            let a = n;
        },
        4143: (e, t, r) => {
            r.d(t, { Wy: () => QueryRoute, yT: () => g });
            var n = r(35750),
                a = r(18150),
                o = r(85242),
                i = r(88243),
                s = r(16213),
                l = r(50467),
                u = r(61526),
                c = r(71315),
                d = r(31993),
                h = r(16235),
                p = r(86596),
                f = r(74848),
                m = r(11934);
            function y(e, { element: t, Component: r }) {
                if (!t && !r) return;
                let n = null;
                if (
                    (void 0 !== t
                        ? (n = (0, f.jsx)(f.Fragment, { children: t }))
                        : r && (n = (0, f.jsx)(r, {})),
                    n)
                )
                    return (0, f.jsx)(m.U, { id: e, children: n });
            }
            function g() {
                return (0, u.FE)();
            }
            let v = {
                    refetchOnWindowFocus: !1,
                    retry: !1,
                    networkMode: "always",
                    staleTime: 864e5,
                },
                b = 200;
            var w = new WeakMap(),
                S = new WeakMap(),
                R = new WeakSet(),
                E = new WeakSet(),
                x = new WeakMap(),
                C = new WeakSet();
            let QueryRoute = class QueryRoute {
                isSameRoute(e) {
                    return !!(
                        "object" == typeof e &&
                        e &&
                        "id" in e &&
                        "string" == typeof e.id &&
                        e.id === this.id
                    );
                }
                generatePath(e, t) {
                    return (0, u.AO)({
                        pathname: (0, u.tW)(this.path, e),
                        search: t?.search
                            ? new URLSearchParams(t.search).toString()
                            : void 0,
                        hash: t?.hash,
                    });
                }
                constructor(e) {
                    ((0, s._)(this, R),
                        (0, s._)(this, E),
                        (0, s._)(this, C),
                        (0, a._)(this, w, { writable: !0, value: void 0 }),
                        (0, a._)(this, S, { writable: !0, value: void 0 }),
                        (0, l._)(this, "id", void 0),
                        (0, l._)(this, "path", void 0),
                        (0, l._)(this, "queries", void 0),
                        (0, l._)(this, "index", void 0),
                        (0, a._)(this, x, {
                            writable: !0,
                            value: async ({ request: e, params: t }) => {
                                var r, n;
                                let a = [],
                                    { searchParams: o } = new URL(
                                        e.url,
                                        c.fV.origin
                                    ),
                                    s =
                                        ((r = this.path),
                                        (n = t),
                                        (0, u.tW)(
                                            r,
                                            Object.fromEntries(
                                                j(n).map(([e, t]) => [
                                                    e,
                                                    void 0 === t ? null : t,
                                                ])
                                            )
                                        )),
                                    l = (0, h.S)(),
                                    f = j(this.queries).map(
                                        ([
                                            e,
                                            {
                                                queryFn: r,
                                                queryDeps: n,
                                                makeQueryKey: u,
                                                type: h = p.g.Deferred,
                                                staleTimeForNavigation: f = b,
                                                navigationBehavior:
                                                    m = "stale-while-revalidate",
                                                ...y
                                            },
                                        ]) => {
                                            let g = u(
                                                    n?.({
                                                        pathname: s,
                                                        params: t,
                                                        searchParams: o,
                                                    }) ?? {}
                                                ),
                                                w = (0, d.j)({
                                                    ...v,
                                                    queryKey: g,
                                                    queryFn: ({
                                                        signal: e,
                                                        meta: t,
                                                    }) =>
                                                        r(
                                                            {
                                                                appName: g[0],
                                                                routeId: g[1],
                                                                routePath: g[2],
                                                                queryName: g[3],
                                                                queryDeps: g[4],
                                                            },
                                                            {
                                                                signal: e,
                                                                meta: t,
                                                            }
                                                        ),
                                                    ...y,
                                                });
                                            if (
                                                ((0, i._)(this, E, _).call(
                                                    this,
                                                    {
                                                        queryName: e,
                                                        queryKey: w.queryKey,
                                                        type: h,
                                                    }
                                                ),
                                                c.KJ)
                                            ) {
                                                let e = { ...w, staleTime: f };
                                                switch (h) {
                                                    case p.g.Deferred:
                                                        l.prefetchQuery(e);
                                                        break;
                                                    case p.g.Blocking: {
                                                        let t = l.getQueryState(
                                                            e.queryKey
                                                        );
                                                        t &&
                                                        "pending" !== t.status
                                                            ? Date.now() -
                                                                  t.dataUpdatedAt >=
                                                                  f &&
                                                              (l.invalidateQueries(
                                                                  {
                                                                      queryKey:
                                                                          e.queryKey,
                                                                  }
                                                              ),
                                                              "network-first" ===
                                                                  m &&
                                                                  a.push(
                                                                      l.fetchQuery(
                                                                          e
                                                                      )
                                                                  ))
                                                            : a.push(
                                                                  l.fetchQuery(
                                                                      e
                                                                  )
                                                              );
                                                        break;
                                                    }
                                                    default:
                                                        throw Error(
                                                            `Invalid QueryRouteQueryType defined, \`${h}\`. Valid QueryRouteQueryTypes are ${JSON.stringify(Object.keys(p.g))}`
                                                        );
                                                }
                                            }
                                            return [
                                                e,
                                                { queryConfig: w, type: h },
                                            ];
                                        }
                                    );
                                return (
                                    await Promise.all(a),
                                    {
                                        route: this,
                                        queries: Object.fromEntries(f),
                                    }
                                );
                            },
                        }),
                        (0, l._)(
                            this,
                            "toRoute",
                            ({ Component: e, element: t, ...r }) =>
                                this.index
                                    ? {
                                          ...r,
                                          id: this.id,
                                          children: void 0,
                                          path: this.path,
                                          index: this.index,
                                          loader: (0, n._)(this, x),
                                          element: y(this.id, {
                                              element: t,
                                              Component: e,
                                          }),
                                      }
                                    : {
                                          ...r,
                                          id: this.id,
                                          path: this.path,
                                          index: this.index,
                                          loader: (0, n._)(this, x),
                                          element: y(this.id, {
                                              element: t,
                                              Component: e,
                                          }),
                                      }
                        ),
                        (0, o._)(this, w, e.appName),
                        (this.id = e.id),
                        (this.path = e.path),
                        (this.queries = (0, i._)(this, R, k).call(
                            this,
                            e.queries
                        )),
                        (this.index = e.index),
                        (0, o._)(this, S, e.getEmbeddedData));
                }
            };
            function k(e) {
                return Object.fromEntries(
                    j(e).map(([e, t]) => {
                        let r = (t) =>
                            (function ({
                                appName: e,
                                routeId: t,
                                routePath: r,
                                queryName: n,
                                queryDeps: a,
                            }) {
                                return [e, t, r, n, a];
                            })({
                                appName: (0, n._)(this, w),
                                routeId: this.id,
                                routePath: this.path,
                                queryName: e.toString(),
                                queryDeps: t ?? {},
                            });
                        return [e, { ...t, makeQueryKey: r }];
                    })
                );
            }
            function _({ queryName: e, queryKey: t, type: r }) {
                let a = (0, h.S)(),
                    o = (0, n._)(this, S).call(this),
                    s = o?.payload,
                    l = (0, i._)(this, C, N).call(this, {
                        embeddedData: o,
                        queryName: e,
                        type: r,
                    });
                l &&
                    ("mainQuery" === e
                        ? delete s?.[this.id]
                        : r === p.g.Blocking
                          ? delete s?.[String(e)]
                          : delete s?.[this.id]?.[e],
                    a.setQueryData(t, l));
            }
            function N({ embeddedData: e, queryName: t, type: r }) {
                let n = r === p.g.Blocking,
                    a = e?.payload,
                    o = n && "mainQuery" !== t ? String(t) : this.id,
                    i = a?.[o];
                if (!i) return;
                if ("mainQuery" !== t) return n ? i : i?.[t];
                let s = e?.title || e?.meta?.title;
                return { meta: s ? { title: s } : void 0, payload: i };
            }
            let j = (e) => Object.entries(e);
        },
        5330: (e, t, r) => {
            r.d(t, { d: () => i });
            var n = r(74848),
                a = r(21728),
                o = r(24518);
            function i(e) {
                let t,
                    r,
                    i = (0, a.c)(5),
                    { routes: s, children: l } = e;
                i[0] !== s
                    ? ((t = { routes: s }), (i[0] = s), (i[1] = t))
                    : (t = i[1]);
                let u = t;
                return (
                    i[2] !== u || i[3] !== l
                        ? ((r = (0, n.jsx)(o.k.Provider, {
                              value: u,
                              children: l,
                          })),
                          (i[2] = u),
                          (i[3] = l),
                          (i[4] = r))
                        : (r = i[4]),
                    r
                );
            }
            try {
                i.displayName || (i.displayName = "RoutesContextProvider");
            } catch {}
        },
        6152: (e, t, r) => {
            r.d(t, { Y: () => n });
            let n = (0, r(96540).createContext)({});
        },
        7123: (e, t, r) => {
            r.d(t, { k: () => y });
            var n = r(50467),
                a = r(31635),
                o = r(74848),
                i = r(39595),
                s = r(69599),
                l = r(61526),
                u = r(18501),
                c = r(13322),
                d = r(11934),
                h = r(26865);
            let p = new (r(86917).R)();
            var f = r(3538);
            let m = class ReactPartialElement extends f.H {
                async getReactNode(e, t) {
                    var r;
                    let { Component: n } = await ((r = this.name),
                        p.getRegistration(r).promise),
                        a = this.closest("react-partial-anchor"),
                        i = (0, h.b3)(a),
                        f = { ...e, props: { ...e.props, ...i } },
                        m = (0, s.G7)("react_custom_partial_router"),
                        y = (0, o.jsx)(l.BV, {
                            children: (0, o.jsx)(l.qh, {
                                path: "*",
                                element: (0, o.jsx)(n, { ...f.props }),
                            }),
                        });
                    return (0, o.jsx)(d.f, {
                        appName: this.name,
                        isDataRouterEnabled: !1,
                        children: (0, o.jsx)(d.U, {
                            id: this.name,
                            children: (0, o.jsx)(u.c, {
                                partialName: this.name,
                                wasServerRendered: this.hasSSRContent,
                                onError: t,
                                ssrError: this.ssrError,
                                children: m
                                    ? (0, o.jsx)(c.p, {
                                          partialName: this.name,
                                          children: y,
                                      })
                                    : (0, o.jsx)(l.Kd, { children: y }),
                            }),
                        }),
                    });
                }
                constructor(...e) {
                    (super(...e),
                        (0, n._)(this, "nameAttribute", "partial-name"));
                }
            };
            function y(e, t) {
                return p.register(e, t);
            }
            m = (0, a.Cg)([i.p_], m);
        },
        7820: (e, t, r) => {
            r.d(t, { z: () => n });
            let n = {
                "Workers not ready":
                    "Alloy is warming its workers. This is expected during deploys and should resolve shortly.",
            };
        },
        11934: (e, t, r) => {
            r.d(t, { U: () => d, f: () => c });
            var n = r(74848),
                a = r(21728),
                o = r(73189),
                i = r(96540),
                s = r(69599),
                l = r(82518);
            let u = (0, i.createContext)(null),
                c = (0, i.memo)(function (e) {
                    let t,
                        r,
                        o = (0, a.c)(6),
                        { isDataRouterEnabled: c, appName: d, children: h } = e;
                    o[0] !== d || o[1] !== c
                        ? ((t = { appName: d, isDataRouterEnabled: c }),
                          (o[0] = d),
                          (o[1] = c),
                          (o[2] = t))
                        : (t = o[2]);
                    let { onRender: p } = (function (e) {
                        let t,
                            r,
                            n = (0, a.c)(5),
                            { appName: o, isDataRouterEnabled: u } = e;
                        n[0] !== o || n[1] !== u
                            ? ((t = (e, t, r, n, a, c) => {
                                  "undefined" != typeof window &&
                                      (0, s.G7)("react_quality_profiling") &&
                                      (0, l.iv)({
                                          requestUrl: window.location.href,
                                          reactRenderPerformance: {
                                              actualDuration: r,
                                              baseDuration: n,
                                              commitLag: c - a,
                                              phase: t,
                                              appName: o,
                                              isDataRouterEnabled: u,
                                              componentId: e,
                                              reactVersion: i.version,
                                          },
                                      });
                              }),
                              (n[0] = o),
                              (n[1] = u),
                              (n[2] = t))
                            : (t = n[2]);
                        let c = t;
                        return (
                            n[3] !== c
                                ? ((r = { onRender: c }),
                                  (n[3] = c),
                                  (n[4] = r))
                                : (r = n[4]),
                            r
                        );
                    })(t);
                    return (
                        o[3] !== h || o[4] !== p
                            ? ((r = (0, n.jsx)(u.Provider, {
                                  value: p,
                                  children: h,
                              })),
                              (o[3] = h),
                              (o[4] = p),
                              (o[5] = r))
                            : (r = o[5]),
                        r
                    );
                }),
                d = (0, i.memo)(function (e) {
                    let t,
                        r = (0, a.c)(4),
                        { id: s, children: l } = e,
                        c = (0, i.useContext)(u) ?? o.l;
                    return (
                        r[0] !== l || r[1] !== s || r[2] !== c
                            ? ((t = (0, n.jsx)(i.Profiler, {
                                  id: s,
                                  onRender: c,
                                  children: l,
                              })),
                              (r[0] = l),
                              (r[1] = s),
                              (r[2] = c),
                              (r[3] = t))
                            : (t = r[3]),
                        t
                    );
                });
            try {
                u.displayName || (u.displayName = "ProfilerContext");
            } catch {}
            try {
                c.displayName || (c.displayName = "ProfilerProvider");
            } catch {}
            try {
                d.displayName || (d.displayName = "Profiler");
            } catch {}
        },
        12435: (e, t, r) => {
            r.d(t, { $h: () => DataRouterApplicationBuilder });
            var n = r(35750),
                a = r(18150),
                o = r(85242),
                i = r(88243),
                s = r(16213),
                l = r(50467),
                u = r(4143),
                c = new WeakMap(),
                d = new WeakSet();
            let DataRouterApplication = class DataRouterApplication {
                registration(e) {
                    return (
                        (this.embeddedData = e?.embeddedData),
                        { routes: (0, i._)(this, d, h).call(this) }
                    );
                }
                constructor(e, t) {
                    ((0, s._)(this, d),
                        (0, l._)(this, "name", void 0),
                        (0, a._)(this, c, { writable: !0, value: void 0 }),
                        (0, l._)(this, "embeddedData", void 0),
                        (this.name = e),
                        (0, o._)(this, c, t),
                        (this.registration = this.registration.bind(this)));
                }
            };
            function h() {
                if ("function" == typeof (0, n._)(this, c)) {
                    let e = (e) => {
                        let t = this.embeddedData?.appPayload?.enabled_features;
                        if (t && e in t) return t[e];
                    };
                    return (0, n._)(this, c).call(this, { isEnabled: e });
                }
                return (0, n._)(this, c);
            }
            var p = new WeakMap();
            let DataRouterApplicationBuilder = class DataRouterApplicationBuilder {
                static create(e) {
                    return new DataRouterApplicationBuilder(e);
                }
                createDataRouterAppFromRoutes(e) {
                    return (
                        (0, o._)(
                            this,
                            p,
                            new DataRouterApplication(this.name, e)
                        ),
                        (0, n._)(this, p)
                    );
                }
                createQueryRouteConfig(
                    e,
                    { path: t, index: r, queries: n = [] }
                ) {
                    var a, o;
                    let i;
                    return (
                        (function (e) {
                            if (e.length > 4) throw new m(e.length);
                        })(n),
                        (function (e) {
                            if (!/^[a-z][a-zA-Z0-9]*$/.test(e))
                                throw new InvalidIdentifierError(e);
                        })(e),
                        new u.Wy({
                            appName: this.name,
                            id: e,
                            path: t,
                            queries:
                                ((a = n),
                                (o = e),
                                (i = new Set()),
                                Object.fromEntries(
                                    a.map((e) => {
                                        let { queryName: t, ...r } =
                                            "function" == typeof e ? e(o) : e;
                                        if (i.has(t)) throw new f(t);
                                        return (i.add(t), [t, r]);
                                    })
                                )),
                            index: r ?? !1,
                            getEmbeddedData: this.getEmbeddedData,
                        })
                    );
                }
                constructor(e) {
                    ((0, l._)(this, "name", void 0),
                        (0, a._)(this, p, { writable: !0, value: void 0 }),
                        (0, l._)(this, "getEmbeddedData", () => {
                            if (!(0, n._)(this, p))
                                throw Error(
                                    "getEmbeddedData should only be called after createDataRouterAppFromRoutes"
                                );
                            return (0, n._)(this, p).embeddedData;
                        }),
                        (this.name = e));
                }
            };
            let f = class DuplicateRouteQueryNameError extends Error {
                    constructor(e) {
                        (super(
                            `query names cannot be duplicated: \`${e}\` has already been defined for this route.`
                        ),
                            (this.name = "DuplicateRouteQueryNameError"));
                    }
                },
                m = class InvalidNumberOfQueryConfigsError extends Error {
                    constructor(e) {
                        (super(
                            `Invalid number of query configs error. ${e} queries supplied of a max 4 queries allowed.`
                        ),
                            (this.name = "InvalidNumberOfQueryConfigsError"));
                    }
                };
            let InvalidIdentifierError = class InvalidIdentifierError extends Error {
                constructor(e) {
                    (super(`\`${e}\` must be camel cased`),
                        (this.name = "InvalidIdentifierError"));
                }
            };
        },
        13322: (e, t, r) => {
            r.d(t, { p: () => l });
            var n = r(74848),
                a = r(21728),
                o = r(38102),
                i = r(61526),
                s = r(96540);
            function l(e) {
                let t,
                    r,
                    l,
                    u = (0, a.c)(8),
                    { children: c, partialName: d } = e,
                    h = (0, i.Ri)();
                if (
                    (u[0] !== h || u[1] !== d
                        ? ((t = () => {
                              h &&
                                  (0, o.N7)(
                                      Error(
                                          `PartialRouter used inside another Router in partial "${d}"`
                                      )
                                  );
                          }),
                          (r = [h, d]),
                          (u[0] = h),
                          (u[1] = d),
                          (u[2] = t),
                          (u[3] = r))
                        : ((t = u[2]), (r = u[3])),
                    (0, s.useEffect)(t, r),
                    h)
                ) {
                    let e;
                    return (
                        u[4] !== c
                            ? ((e = (0, n.jsx)(n.Fragment, { children: c })),
                              (u[4] = c),
                              (u[5] = e))
                            : (e = u[5]),
                        e
                    );
                }
                return (
                    u[6] !== c
                        ? ((l = (0, n.jsx)(i.Kd, { children: c })),
                          (u[6] = c),
                          (u[7] = l))
                        : (l = u[7]),
                    l
                );
            }
            try {
                l.displayName || (l.displayName = "PartialRouter");
            } catch {}
        },
        13360: (e, t, r) => {
            r.d(t, { B1: () => s, ks: () => c, pw: () => h, xX: () => d });
            var n = r(21728),
                a = r(61526),
                o = r(97286),
                i = r(4143);
            function s(e, t) {
                let { allowReadFromChildRoutes: r } = void 0 === t ? {} : t,
                    n = (0, i.yT)(),
                    o = n.findIndex((t) => t.id === e.id);
                if (-1 === o) {
                    let t = n.map(u).join(", ");
                    throw Error(
                        `Cannot read data from unmounted route with ID "${e.id}". Mounted route IDs are: ${t}`
                    );
                }
                let { route: s } = (0, a.LG)(),
                    { queries: c } = (0, a.Ew)(e.id),
                    d = n.findIndex((e) => e.id === s.id);
                if (!r && o > d) {
                    let t = n.map(l).join(", ");
                    throw Error(
                        `Cannot read data from child route with ID "${e.id}" from parent route "${s.id}". Use { allowReadFromChildRoutes: true } option to enable this.  Mounted route IDs are: ${t}`
                    );
                }
                return c;
            }
            function l(e) {
                return e.id;
            }
            function u(e) {
                return e.id;
            }
            function c(e, t, r) {
                return s(e, r)[t];
            }
            function d(e, t, r) {
                let a,
                    i,
                    s = (0, n.c)(6),
                    { queryConfig: l } = c(e, t);
                s[0] !== l || s[1] !== r
                    ? ((a = { ...l, ...r }), (s[0] = l), (s[1] = r), (s[2] = a))
                    : (a = s[2]);
                let u = (0, o.I)(a);
                return (
                    s[3] !== l.queryKey || s[4] !== u
                        ? ((i = { ...u, queryKey: l.queryKey }),
                          (s[3] = l.queryKey),
                          (s[4] = u),
                          (s[5] = i))
                        : (i = s[5]),
                    i
                );
            }
            function h(e, t, r) {
                let a,
                    i,
                    s,
                    l = (0, n.c)(7);
                l[0] === Symbol.for("react.memo_cache_sentinel")
                    ? ((a = { allowReadFromChildRoutes: !0 }), (l[0] = a))
                    : (a = l[0]);
                let { queryConfig: u } = c(e, t, a);
                l[1] !== u || l[2] !== r
                    ? ((i = { ...u, ...r }), (l[1] = u), (l[2] = r), (l[3] = i))
                    : (i = l[3]);
                let d = (0, o.I)(i);
                return (
                    l[4] !== u.queryKey || l[5] !== d
                        ? ((s = { ...d, queryKey: u.queryKey }),
                          (l[4] = u.queryKey),
                          (l[5] = d),
                          (l[6] = s))
                        : (s = l[6]),
                    s
                );
            }
        },
        16235: (e, t, r) => {
            let n;
            r.d(t, { S: () => s });
            var a = r(65490);
            function o(e) {
                return JSON.stringify(e, (e, t) =>
                    !(function (e) {
                        if (!i(e)) return !1;
                        let t = e.constructor;
                        if (void 0 === t) return !0;
                        let r = t.prototype;
                        return (
                            !!i(r) &&
                            !!r.hasOwnProperty("isPrototypeOf") &&
                            Object.getPrototypeOf(e) === Object.prototype
                        );
                    })(t)
                        ? t instanceof URLSearchParams
                            ? new URLSearchParams(
                                  [...t.entries()].sort(([e], [t]) =>
                                      e.localeCompare(t)
                                  )
                              ).toString()
                            : "bigint" == typeof t
                              ? `$bigint:${t}`
                              : t instanceof Set
                                ? Array.from(t).sort()
                                : t instanceof Map
                                  ? Array.from(t.entries())
                                        .sort(([e], [t]) => e.localeCompare(t))
                                        .reduce(
                                            (e, [t, r]) => ((e[t] = r), e),
                                            {}
                                        )
                                  : t
                        : Object.keys(t)
                              .sort()
                              .reduce((e, r) => ((e[r] = t[r]), e), {})
                );
            }
            function i(e) {
                return "[object Object]" === Object.prototype.toString.call(e);
            }
            function s() {
                return (
                    n ??
                    (n = new a.E({
                        defaultOptions: {
                            queries: {
                                refetchOnWindowFocus: !1,
                                retry: !1,
                                networkMode: "always",
                                queryKeyHashFn: o,
                            },
                            mutations: { networkMode: "always" },
                        },
                    }))
                );
            }
        },
        18501: (e, t, r) => {
            r.d(t, { c: () => c });
            var n = r(74848),
                a = r(21728),
                o = r(68237),
                i = r(69743),
                s = r(75202),
                l = r(5330);
            let u = [];
            function c(e) {
                let t,
                    r,
                    c,
                    d,
                    h = (0, a.c)(12),
                    {
                        partialName: p,
                        wasServerRendered: f,
                        onError: m,
                        children: y,
                        ssrError: g,
                    } = e;
                return (
                    h[0] !== g
                        ? ((t = (0, n.jsx)(i.h, { ssrError: g })),
                          (h[0] = g),
                          (h[1] = t))
                        : (t = h[1]),
                    h[2] !== y || h[3] !== t
                        ? ((r = (0, n.jsxs)(l.d, {
                              routes: u,
                              children: [y, t],
                          })),
                          (h[2] = y),
                          (h[3] = t),
                          (h[4] = r))
                        : (r = h[4]),
                    h[5] !== m || h[6] !== r
                        ? ((c = (0, n.jsx)(s.t, { onError: m, children: r })),
                          (h[5] = m),
                          (h[6] = r),
                          (h[7] = c))
                        : (c = h[7]),
                    h[8] !== p || h[9] !== c || h[10] !== f
                        ? ((d = (0, n.jsx)(o.U, {
                              appName: p,
                              wasServerRendered: f,
                              dataRouterEnabled: !1,
                              children: c,
                          })),
                          (h[8] = p),
                          (h[9] = c),
                          (h[10] = f),
                          (h[11] = d))
                        : (d = h[11]),
                    d
                );
            }
            try {
                c.displayName || (c.displayName = "PartialEntry");
            } catch {}
        },
        24518: (e, t, r) => {
            r.d(t, { k: () => n });
            let n = (0, r(96540).createContext)({ routes: [] });
        },
        26865: (e, t, r) => {
            r.d(t, { Mm: () => i, QJ: () => s, b3: () => o });
            var n = r(21728),
                a = r(96540);
            function o(e) {
                let t = e?.anchor;
                if (!t) return {};
                let r =
                    t.getAttribute("data-inital-disabled")?.toLowerCase() ===
                    "true";
                return (
                    "disabled" in t && (t.disabled = r),
                    t.classList.remove("cursor-wait"),
                    { reactPartialAnchor: { __wrapperElement: e } }
                );
            }
            function i(e) {
                let t,
                    r,
                    o,
                    i,
                    l = (0, n.c)(7),
                    u = (0, a.useRef)(e.__wrapperElement.anchor || null),
                    [c, d] = (0, a.useState)(!1);
                l[0] !== c
                    ? ((t = () => {
                          d(!c);
                      }),
                      (l[0] = c),
                      (l[1] = t))
                    : (t = l[1]);
                let h = t;
                return (
                    l[2] !== c
                        ? ((r = () => {
                              u.current &&
                                  (u.current.setAttribute(
                                      "aria-expanded",
                                      c.toString()
                                  ),
                                  u.current.setAttribute(
                                      "aria-haspopup",
                                      "true"
                                  ));
                          }),
                          (o = [u, c]),
                          (l[2] = c),
                          (l[3] = r),
                          (l[4] = o))
                        : ((r = l[3]), (o = l[4])),
                    (0, a.useEffect)(r, o),
                    s(e, h),
                    l[5] !== c
                        ? ((i = { ref: u, open: c, setOpen: d }),
                          (l[5] = c),
                          (l[6] = i))
                        : (i = l[6]),
                    i
                );
            }
            function s(e, t) {
                let r,
                    o,
                    i = (0, n.c)(3),
                    s = (0, a.useRef)(e.__wrapperElement.anchor);
                (i[0] !== t
                    ? ((r = () => {
                          let e = s.current;
                          if (e)
                              return (
                                  e.addEventListener("click", t),
                                  () => e.removeEventListener("click", t)
                              );
                      }),
                      (o = [s, t]),
                      (i[0] = t),
                      (i[1] = r),
                      (i[2] = o))
                    : ((r = i[1]), (o = i[2])),
                    (0, a.useEffect)(r, o));
            }
        },
        27744: (e, t, r) => {
            r.d(t, { E: () => n });
            let n = {
                FETCH_THEN_TRANSITION: "fetch-then-transition",
                TRANSITION_WHILE_FETCHING: "transition-while-fetch",
                TRANSITION_WITHOUT_FETCH: "transition-without-fetch",
            };
        },
        34418: (e, t, r) => {
            r.d(t, { X: () => s });
            var n = r(37285),
                a = r(96379),
                o = r(86185),
                i = r(95224);
            async function s({
                queryDeps: { pathname: e, searchParams: t, init: r },
            }) {
                var s, l;
                let u,
                    c,
                    d =
                        ((s = e),
                        (l = t),
                        (u = [s]),
                        (c = (function (e) {
                            if (e instanceof URLSearchParams) return e;
                            if ("string" == typeof e)
                                return new URLSearchParams(e);
                            let t = new URLSearchParams();
                            if (null == e) return t;
                            for (let [r, n] of Array.isArray(e)
                                ? e
                                : Object.entries(e))
                                null != n && t.append(r, n);
                            return t;
                        })(l).toString()) && u.push(c.toString()),
                        u.join("?")),
                    h = await (0, a.Sr)(d, r);
                if ((o.z.checkResponse(h), !h.ok))
                    throw new i.o(h.statusText, h);
                let p = await h.json();
                return ((0, n.Av)(p), p);
            }
        },
        38056: (e, t, r) => {
            r.d(t, { T: () => i });
            var n,
                a = r(65432),
                o = n || (n = {});
            function i(e) {
                return new Proxy(e, {
                    get: (e, t, r) =>
                        "navigate" === t
                            ? function (t, r) {
                                  var n, o;
                                  if ("number" == typeof t)
                                      return e.navigate(t);
                                  ((n = e.state.location),
                                      ((o =
                                          "string" == typeof t
                                              ? (function (e) {
                                                    var t = {};
                                                    if (e) {
                                                        var r = e.indexOf("#");
                                                        (0 <= r &&
                                                            ((t.hash =
                                                                e.substr(r)),
                                                            (e = e.substr(
                                                                0,
                                                                r
                                                            ))),
                                                            0 <=
                                                                (r =
                                                                    e.indexOf(
                                                                        "?"
                                                                    )) &&
                                                                ((t.search =
                                                                    e.substr(
                                                                        r
                                                                    )),
                                                                (e = e.substr(
                                                                    0,
                                                                    r
                                                                ))),
                                                            e &&
                                                                (t.pathname =
                                                                    e));
                                                    }
                                                    return t;
                                                })(t)
                                              : t) &&
                                          (void 0 === o.pathname ||
                                              o.pathname === n.pathname) &&
                                          (void 0 === o.search ||
                                              o.search === n.search) &&
                                          void 0 !== o.hash &&
                                          o.hash !== n.hash) ||
                                          (0, a.SC)("react"));
                                  let i = !r?.replace,
                                      s = r?.state?.skipTurbo;
                                  return e.navigate(t, {
                                      ...r,
                                      state: {
                                          ...r?.state,
                                          skipTurbo: i ? (s ?? !0) : s,
                                      },
                                  });
                              }
                            : Reflect.get(e, t, r),
                });
            }
            ((o.Pop = "POP"), (o.Push = "PUSH"), (o.Replace = "REPLACE"));
        },
        38144: (e, t, r) => {
            var n = r(49236),
                a = r(50402),
                o = function (e) {
                    var t,
                        r,
                        o = e.scale,
                        i = e.prop,
                        s = e.variants,
                        l = void 0 === s ? {} : s,
                        u = e.key;
                    (((r = Object.keys(l).length
                        ? function (e, t, r) {
                              return (0, a.Ay)((0, n.Jt)(t, e, null))(r.theme);
                          }
                        : function (e, t) {
                              return (0, n.Jt)(t, e, null);
                          }).scale = o || u),
                        (r.defaults = l));
                    var c = (((t = {})[void 0 === i ? "variant" : i] = r), t);
                    return (0, n.Cp)(c);
                };
            (o({ key: "buttons" }),
                o({ key: "textStyles", prop: "textStyle" }),
                o({ key: "colorStyles", prop: "colors" }));
        },
        38267: (e, t, r) => {
            r.d(t, {
                AH: () => ey,
                Ay: () => eA,
                DU: () => ej,
                NP: () => eC,
                i7: () => eP,
            });
            var n,
                a = r(44363),
                o = r(96540),
                i = r(2833),
                s = r.n(i),
                l = r(8887),
                u = r(17103),
                c = r(15455),
                d = r(4146),
                h = r.n(d);
            function p() {
                return (p =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            var f = function (e, t) {
                    for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1)
                        r.push(t[n], e[n + 1]);
                    return r;
                },
                m = function (e) {
                    return (
                        null !== e &&
                        "object" == typeof e &&
                        "[object Object]" ===
                            (e.toString
                                ? e.toString()
                                : Object.prototype.toString.call(e)) &&
                        !(0, a.typeOf)(e)
                    );
                },
                y = Object.freeze([]),
                g = Object.freeze({});
            function v(e) {
                return "function" == typeof e;
            }
            function b(e) {
                return e.displayName || e.name || "Component";
            }
            function w(e) {
                return e && "string" == typeof e.styledComponentId;
            }
            var S =
                    ("undefined" != typeof process &&
                        void 0 !== process.env &&
                        (process.env.REACT_APP_SC_ATTR ||
                            process.env.SC_ATTR)) ||
                    "data-styled",
                R = "undefined" != typeof window && "HTMLElement" in window,
                E = {};
            function x(e) {
                for (
                    var t = arguments.length,
                        r = Array(t > 1 ? t - 1 : 0),
                        n = 1;
                    n < t;
                    n++
                )
                    r[n - 1] = arguments[n];
                throw Error(
                    "An error occurred. See https://git.io/JUIaE#" +
                        e +
                        " for more information." +
                        (r.length > 0 ? " Args: " + r.join(", ") : "")
                );
            }
            var C = (function () {
                    function e(e) {
                        ((this.groupSizes = new Uint32Array(512)),
                            (this.length = 512),
                            (this.tag = e));
                    }
                    var t = e.prototype;
                    return (
                        (t.indexOfGroup = function (e) {
                            for (var t = 0, r = 0; r < e; r++)
                                t += this.groupSizes[r];
                            return t;
                        }),
                        (t.insertRules = function (e, t) {
                            if (e >= this.groupSizes.length) {
                                for (
                                    var r = this.groupSizes,
                                        n = r.length,
                                        a = n;
                                    e >= a;

                                )
                                    (a <<= 1) < 0 && x(16, "" + e);
                                ((this.groupSizes = new Uint32Array(a)),
                                    this.groupSizes.set(r),
                                    (this.length = a));
                                for (var o = n; o < a; o++)
                                    this.groupSizes[o] = 0;
                            }
                            for (
                                var i = this.indexOfGroup(e + 1),
                                    s = 0,
                                    l = t.length;
                                s < l;
                                s++
                            )
                                this.tag.insertRule(i, t[s]) &&
                                    (this.groupSizes[e]++, i++);
                        }),
                        (t.clearGroup = function (e) {
                            if (e < this.length) {
                                var t = this.groupSizes[e],
                                    r = this.indexOfGroup(e),
                                    n = r + t;
                                this.groupSizes[e] = 0;
                                for (var a = r; a < n; a++)
                                    this.tag.deleteRule(r);
                            }
                        }),
                        (t.getGroup = function (e) {
                            var t = "";
                            if (e >= this.length || 0 === this.groupSizes[e])
                                return t;
                            for (
                                var r = this.groupSizes[e],
                                    n = this.indexOfGroup(e),
                                    a = n + r,
                                    o = n;
                                o < a;
                                o++
                            )
                                t +=
                                    this.tag.getRule(o) +
                                    `/*!sc*/
`;
                            return t;
                        }),
                        e
                    );
                })(),
                k = new Map(),
                _ = new Map(),
                N = 1,
                j = function (e) {
                    if (k.has(e)) return k.get(e);
                    for (; _.has(N); ) N++;
                    var t = N++;
                    return (k.set(e, t), _.set(t, e), t);
                },
                P = function (e, t) {
                    (t >= N && (N = t + 1), k.set(e, t), _.set(t, e));
                },
                A = "style[" + S + '][data-styled-version="5.3.11"]',
                L = RegExp(
                    "^" + S + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
                ),
                T = function (e, t, r) {
                    for (
                        var n, a = r.split(","), o = 0, i = a.length;
                        o < i;
                        o++
                    )
                        (n = a[o]) && e.registerName(t, n);
                },
                D = function (e, t) {
                    for (
                        var r = (t.textContent || "").split(`/*!sc*/
`),
                            n = [],
                            a = 0,
                            o = r.length;
                        a < o;
                        a++
                    ) {
                        var i = r[a].trim();
                        if (i) {
                            var s = i.match(L);
                            if (s) {
                                var l = 0 | parseInt(s[1], 10),
                                    u = s[2];
                                (0 !== l &&
                                    (P(u, l),
                                    T(e, u, s[3]),
                                    e.getTag().insertRules(l, n)),
                                    (n.length = 0));
                            } else n.push(i);
                        }
                    }
                },
                O = function () {
                    return r.nc;
                },
                I = function (e) {
                    var t = document.head,
                        r = e || t,
                        n = document.createElement("style"),
                        a = (function (e) {
                            for (
                                var t = e.childNodes, r = t.length;
                                r >= 0;
                                r--
                            ) {
                                var n = t[r];
                                if (n && 1 === n.nodeType && n.hasAttribute(S))
                                    return n;
                            }
                        })(r),
                        o = void 0 !== a ? a.nextSibling : null;
                    (n.setAttribute(S, "active"),
                        n.setAttribute("data-styled-version", "5.3.11"));
                    var i = O();
                    return (
                        i && n.setAttribute("nonce", i),
                        r.insertBefore(n, o),
                        n
                    );
                },
                M = (function () {
                    function e(e) {
                        var t = (this.element = I(e));
                        (t.appendChild(document.createTextNode("")),
                            (this.sheet = (function (e) {
                                if (e.sheet) return e.sheet;
                                for (
                                    var t = document.styleSheets,
                                        r = 0,
                                        n = t.length;
                                    r < n;
                                    r++
                                ) {
                                    var a = t[r];
                                    if (a.ownerNode === e) return a;
                                }
                                x(17);
                            })(t)),
                            (this.length = 0));
                    }
                    var t = e.prototype;
                    return (
                        (t.insertRule = function (e, t) {
                            try {
                                return (
                                    this.sheet.insertRule(t, e),
                                    this.length++,
                                    !0
                                );
                            } catch (e) {
                                return !1;
                            }
                        }),
                        (t.deleteRule = function (e) {
                            (this.sheet.deleteRule(e), this.length--);
                        }),
                        (t.getRule = function (e) {
                            var t = this.sheet.cssRules[e];
                            return void 0 !== t && "string" == typeof t.cssText
                                ? t.cssText
                                : "";
                        }),
                        e
                    );
                })(),
                $ = (function () {
                    function e(e) {
                        var t = (this.element = I(e));
                        ((this.nodes = t.childNodes), (this.length = 0));
                    }
                    var t = e.prototype;
                    return (
                        (t.insertRule = function (e, t) {
                            if (e <= this.length && e >= 0) {
                                var r = document.createTextNode(t),
                                    n = this.nodes[e];
                                return (
                                    this.element.insertBefore(r, n || null),
                                    this.length++,
                                    !0
                                );
                            }
                            return !1;
                        }),
                        (t.deleteRule = function (e) {
                            (this.element.removeChild(this.nodes[e]),
                                this.length--);
                        }),
                        (t.getRule = function (e) {
                            return e < this.length
                                ? this.nodes[e].textContent
                                : "";
                        }),
                        e
                    );
                })(),
                z = (function () {
                    function e(e) {
                        ((this.rules = []), (this.length = 0));
                    }
                    var t = e.prototype;
                    return (
                        (t.insertRule = function (e, t) {
                            return (
                                e <= this.length &&
                                (this.rules.splice(e, 0, t), this.length++, !0)
                            );
                        }),
                        (t.deleteRule = function (e) {
                            (this.rules.splice(e, 1), this.length--);
                        }),
                        (t.getRule = function (e) {
                            return e < this.length ? this.rules[e] : "";
                        }),
                        e
                    );
                })(),
                W = R,
                U = { isServer: !R, useCSSOMInjection: !0 },
                B = (function () {
                    function e(e, t, r) {
                        (void 0 === e && (e = g),
                            void 0 === t && (t = {}),
                            (this.options = p({}, U, {}, e)),
                            (this.gs = t),
                            (this.names = new Map(r)),
                            (this.server = !!e.isServer),
                            !this.server &&
                                R &&
                                W &&
                                ((W = !1),
                                (function (e) {
                                    for (
                                        var t = document.querySelectorAll(A),
                                            r = 0,
                                            n = t.length;
                                        r < n;
                                        r++
                                    ) {
                                        var a = t[r];
                                        a &&
                                            "active" !== a.getAttribute(S) &&
                                            (D(e, a),
                                            a.parentNode &&
                                                a.parentNode.removeChild(a));
                                    }
                                })(this)));
                    }
                    e.registerId = function (e) {
                        return j(e);
                    };
                    var t = e.prototype;
                    return (
                        (t.reconstructWithOptions = function (t, r) {
                            return (
                                void 0 === r && (r = !0),
                                new e(
                                    p({}, this.options, {}, t),
                                    this.gs,
                                    (r && this.names) || void 0
                                )
                            );
                        }),
                        (t.allocateGSInstance = function (e) {
                            return (this.gs[e] = (this.gs[e] || 0) + 1);
                        }),
                        (t.getTag = function () {
                            var e, t, r, n;
                            return (
                                this.tag ||
                                (this.tag =
                                    ((t = (e = this.options).isServer),
                                    (r = e.useCSSOMInjection),
                                    (n = e.target),
                                    new C(
                                        t ? new z(n) : r ? new M(n) : new $(n)
                                    )))
                            );
                        }),
                        (t.hasNameForId = function (e, t) {
                            return (
                                this.names.has(e) && this.names.get(e).has(t)
                            );
                        }),
                        (t.registerName = function (e, t) {
                            if ((j(e), this.names.has(e)))
                                this.names.get(e).add(t);
                            else {
                                var r = new Set();
                                (r.add(t), this.names.set(e, r));
                            }
                        }),
                        (t.insertRules = function (e, t, r) {
                            (this.registerName(e, t),
                                this.getTag().insertRules(j(e), r));
                        }),
                        (t.clearNames = function (e) {
                            this.names.has(e) && this.names.get(e).clear();
                        }),
                        (t.clearRules = function (e) {
                            (this.getTag().clearGroup(j(e)),
                                this.clearNames(e));
                        }),
                        (t.clearTag = function () {
                            this.tag = void 0;
                        }),
                        (t.toString = function () {
                            return (function (e) {
                                for (
                                    var t = e.getTag(),
                                        r = t.length,
                                        n = "",
                                        a = 0;
                                    a < r;
                                    a++
                                ) {
                                    var o,
                                        i = ((o = a), _.get(o));
                                    if (void 0 !== i) {
                                        var s = e.names.get(i),
                                            l = t.getGroup(a);
                                        if (s && l && s.size) {
                                            var u =
                                                    S +
                                                    ".g" +
                                                    a +
                                                    '[id="' +
                                                    i +
                                                    '"]',
                                                c = "";
                                            (void 0 !== s &&
                                                s.forEach(function (e) {
                                                    e.length > 0 &&
                                                        (c += e + ",");
                                                }),
                                                (n +=
                                                    "" +
                                                    l +
                                                    u +
                                                    '{content:"' +
                                                    c +
                                                    `"}/*!sc*/
`));
                                        }
                                    }
                                }
                                return n;
                            })(this);
                        }),
                        e
                    );
                })(),
                F = /(a)(d)/gi,
                H = function (e) {
                    return String.fromCharCode(e + (e > 25 ? 39 : 97));
                };
            function q(e) {
                var t,
                    r = "";
                for (t = Math.abs(e); t > 52; t = (t / 52) | 0)
                    r = H(t % 52) + r;
                return (H(t % 52) + r).replace(F, "$1-$2");
            }
            var Y = function (e, t) {
                    for (var r = t.length; r; )
                        e = (33 * e) ^ t.charCodeAt(--r);
                    return e;
                },
                V = function (e) {
                    return Y(5381, e);
                };
            function J(e) {
                for (var t = 0; t < e.length; t += 1) {
                    var r = e[t];
                    if (v(r) && !w(r)) return !1;
                }
                return !0;
            }
            var G = V("5.3.11"),
                X = (function () {
                    function e(e, t, r) {
                        ((this.rules = e),
                            (this.staticRulesId = ""),
                            (this.isStatic =
                                (void 0 === r || r.isStatic) && J(e)),
                            (this.componentId = t),
                            (this.baseHash = Y(G, t)),
                            (this.baseStyle = r),
                            B.registerId(t));
                    }
                    return (
                        (e.prototype.generateAndInjectStyles = function (
                            e,
                            t,
                            r
                        ) {
                            var n = this.componentId,
                                a = [];
                            if (
                                (this.baseStyle &&
                                    a.push(
                                        this.baseStyle.generateAndInjectStyles(
                                            e,
                                            t,
                                            r
                                        )
                                    ),
                                this.isStatic && !r.hash)
                            )
                                if (
                                    this.staticRulesId &&
                                    t.hasNameForId(n, this.staticRulesId)
                                )
                                    a.push(this.staticRulesId);
                                else {
                                    var o = ef(this.rules, e, t, r).join(""),
                                        i = q(Y(this.baseHash, o) >>> 0);
                                    if (!t.hasNameForId(n, i)) {
                                        var s = r(o, "." + i, void 0, n);
                                        t.insertRules(n, i, s);
                                    }
                                    (a.push(i), (this.staticRulesId = i));
                                }
                            else {
                                for (
                                    var l = this.rules.length,
                                        u = Y(this.baseHash, r.hash),
                                        c = "",
                                        d = 0;
                                    d < l;
                                    d++
                                ) {
                                    var h = this.rules[d];
                                    if ("string" == typeof h) c += h;
                                    else if (h) {
                                        var p = ef(h, e, t, r),
                                            f = Array.isArray(p)
                                                ? p.join("")
                                                : p;
                                        ((u = Y(u, f + d)), (c += f));
                                    }
                                }
                                if (c) {
                                    var m = q(u >>> 0);
                                    if (!t.hasNameForId(n, m)) {
                                        var y = r(c, "." + m, void 0, n);
                                        t.insertRules(n, m, y);
                                    }
                                    a.push(m);
                                }
                            }
                            return a.join(" ");
                        }),
                        e
                    );
                })(),
                K = /^\s*\/\/.*$/gm,
                Q = [":", "[", ".", "#"];
            function Z(e) {
                var t,
                    r,
                    n,
                    a,
                    o = void 0 === e ? g : e,
                    i = o.options,
                    s = void 0 === i ? g : i,
                    u = o.plugins,
                    c = void 0 === u ? y : u,
                    d = new l.A(s),
                    h = [],
                    p = (function (e) {
                        function t(t) {
                            if (t)
                                try {
                                    e(t + "}");
                                } catch (e) {}
                        }
                        return function (r, n, a, o, i, s, l, u, c, d) {
                            switch (r) {
                                case 1:
                                    if (0 === c && 64 === n.charCodeAt(0))
                                        return (e(n + ";"), "");
                                    break;
                                case 2:
                                    if (0 === u) return n + "/*|*/";
                                    break;
                                case 3:
                                    switch (u) {
                                        case 102:
                                        case 112:
                                            return (e(a[0] + n), "");
                                        default:
                                            return n + (0 === d ? "/*|*/" : "");
                                    }
                                case -2:
                                    n.split("/*|*/}").forEach(t);
                            }
                        };
                    })(function (e) {
                        h.push(e);
                    }),
                    f = function (e, n, o) {
                        return (0 === n && -1 !== Q.indexOf(o[r.length])) ||
                            o.match(a)
                            ? e
                            : "." + t;
                    };
                function m(e, o, i, s) {
                    void 0 === s && (s = "&");
                    var l = e.replace(K, ""),
                        u = o && i ? i + " " + o + " { " + l + " }" : l;
                    return (
                        (t = s),
                        (n = RegExp("\\" + (r = o) + "\\b", "g")),
                        (a = RegExp("(\\" + r + "\\b){2,}")),
                        d(i || !o ? "" : o, u)
                    );
                }
                return (
                    d.use(
                        [].concat(c, [
                            function (e, t, a) {
                                2 === e &&
                                    a.length &&
                                    a[0].lastIndexOf(r) > 0 &&
                                    (a[0] = a[0].replace(n, f));
                            },
                            p,
                            function (e) {
                                if (-2 === e) {
                                    var t = h;
                                    return ((h = []), t);
                                }
                            },
                        ])
                    ),
                    (m.hash = c.length
                        ? c
                              .reduce(function (e, t) {
                                  return (t.name || x(15), Y(e, t.name));
                              }, 5381)
                              .toString()
                        : ""),
                    m
                );
            }
            var ee = o.createContext(),
                et = (ee.Consumer, o.createContext()),
                er = (et.Consumer, new B()),
                en = Z();
            function ea() {
                return (0, o.useContext)(ee) || er;
            }
            function eo() {
                return (0, o.useContext)(et) || en;
            }
            function ei(e) {
                var t = (0, o.useState)(e.stylisPlugins),
                    r = t[0],
                    n = t[1],
                    a = ea(),
                    i = (0, o.useMemo)(
                        function () {
                            var t = a;
                            return (
                                e.sheet
                                    ? (t = e.sheet)
                                    : e.target &&
                                      (t = t.reconstructWithOptions(
                                          { target: e.target },
                                          !1
                                      )),
                                e.disableCSSOMInjection &&
                                    (t = t.reconstructWithOptions({
                                        useCSSOMInjection: !1,
                                    })),
                                t
                            );
                        },
                        [e.disableCSSOMInjection, e.sheet, e.target]
                    ),
                    l = (0, o.useMemo)(
                        function () {
                            return Z({
                                options: { prefix: !e.disableVendorPrefixes },
                                plugins: r,
                            });
                        },
                        [e.disableVendorPrefixes, r]
                    );
                return (
                    (0, o.useEffect)(
                        function () {
                            s()(r, e.stylisPlugins) || n(e.stylisPlugins);
                        },
                        [e.stylisPlugins]
                    ),
                    o.createElement(
                        ee.Provider,
                        { value: i },
                        o.createElement(et.Provider, { value: l }, e.children)
                    )
                );
            }
            var es = (function () {
                    function e(e, t) {
                        var r = this;
                        ((this.inject = function (e, t) {
                            void 0 === t && (t = en);
                            var n = r.name + t.hash;
                            e.hasNameForId(r.id, n) ||
                                e.insertRules(
                                    r.id,
                                    n,
                                    t(r.rules, n, "@keyframes")
                                );
                        }),
                            (this.toString = function () {
                                return x(12, String(r.name));
                            }),
                            (this.name = e),
                            (this.id = "sc-keyframes-" + e),
                            (this.rules = t));
                    }
                    return (
                        (e.prototype.getName = function (e) {
                            return (
                                void 0 === e && (e = en),
                                this.name + e.hash
                            );
                        }),
                        e
                    );
                })(),
                el = /([A-Z])/,
                eu = /([A-Z])/g,
                ec = /^ms-/,
                ed = function (e) {
                    return "-" + e.toLowerCase();
                };
            function eh(e) {
                return el.test(e) ? e.replace(eu, ed).replace(ec, "-ms-") : e;
            }
            var ep = function (e) {
                return null == e || !1 === e || "" === e;
            };
            function ef(e, t, r, n) {
                if (Array.isArray(e)) {
                    for (var a, o = [], i = 0, s = e.length; i < s; i += 1)
                        "" !== (a = ef(e[i], t, r, n)) &&
                            (Array.isArray(a) ? o.push.apply(o, a) : o.push(a));
                    return o;
                }
                return ep(e)
                    ? ""
                    : w(e)
                      ? "." + e.styledComponentId
                      : v(e)
                        ? "function" != typeof e ||
                          (e.prototype && e.prototype.isReactComponent) ||
                          !t
                            ? e
                            : ef(e(t), t, r, n)
                        : e instanceof es
                          ? r
                              ? (e.inject(r, n), e.getName(n))
                              : e
                          : m(e)
                            ? (function e(t, r) {
                                  var n,
                                      a = [];
                                  for (var o in t)
                                      t.hasOwnProperty(o) &&
                                          !ep(t[o]) &&
                                          ((Array.isArray(t[o]) &&
                                              t[o].isCss) ||
                                          v(t[o])
                                              ? a.push(eh(o) + ":", t[o], ";")
                                              : m(t[o])
                                                ? a.push.apply(a, e(t[o], o))
                                                : a.push(
                                                      eh(o) +
                                                          ": " +
                                                          (null == (n = t[o]) ||
                                                          "boolean" ==
                                                              typeof n ||
                                                          "" === n
                                                              ? ""
                                                              : "number" !=
                                                                      typeof n ||
                                                                  0 === n ||
                                                                  o in u.A ||
                                                                  o.startsWith(
                                                                      "--"
                                                                  )
                                                                ? String(
                                                                      n
                                                                  ).trim()
                                                                : n + "px") +
                                                          ";"
                                                  ));
                                  return r ? [r + " {"].concat(a, ["}"]) : a;
                              })(e)
                            : e.toString();
            }
            var em = function (e) {
                return (Array.isArray(e) && (e.isCss = !0), e);
            };
            function ey(e) {
                for (
                    var t = arguments.length,
                        r = Array(t > 1 ? t - 1 : 0),
                        n = 1;
                    n < t;
                    n++
                )
                    r[n - 1] = arguments[n];
                return v(e) || m(e)
                    ? em(ef(f(y, [e].concat(r))))
                    : 0 === r.length &&
                        1 === e.length &&
                        "string" == typeof e[0]
                      ? e
                      : em(ef(f(e, r)));
            }
            var eg = function (e, t, r) {
                    return (
                        void 0 === r && (r = g),
                        (e.theme !== r.theme && e.theme) || t || r.theme
                    );
                },
                ev = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
                eb = /(^-|-$)/g;
            function ew(e) {
                return e.replace(ev, "-").replace(eb, "");
            }
            var eS = function (e) {
                return q(V(e) >>> 0);
            };
            function eR(e) {
                return "string" == typeof e;
            }
            var eE = function (e) {
                    return (
                        "function" == typeof e ||
                        ("object" == typeof e &&
                            null !== e &&
                            !Array.isArray(e))
                    );
                },
                ex = o.createContext();
            function eC(e) {
                var t = (0, o.useContext)(ex),
                    r = (0, o.useMemo)(
                        function () {
                            var r;
                            return (
                                (r = e.theme),
                                r
                                    ? v(r)
                                        ? r(t)
                                        : Array.isArray(r) ||
                                            "object" != typeof r
                                          ? x(8)
                                          : t
                                            ? p({}, t, {}, r)
                                            : r
                                    : x(14)
                            );
                        },
                        [e.theme, t]
                    );
                return e.children
                    ? o.createElement(ex.Provider, { value: r }, e.children)
                    : null;
            }
            ex.Consumer;
            var ek = {},
                e_ = function (e) {
                    return (function e(t, r, n) {
                        if (
                            (void 0 === n && (n = g),
                            !(0, a.isValidElementType)(r))
                        )
                            return x(1, String(r));
                        var o = function () {
                            return t(r, n, ey.apply(void 0, arguments));
                        };
                        return (
                            (o.withConfig = function (a) {
                                return e(t, r, p({}, n, {}, a));
                            }),
                            (o.attrs = function (a) {
                                return e(
                                    t,
                                    r,
                                    p({}, n, {
                                        attrs: Array.prototype
                                            .concat(n.attrs, a)
                                            .filter(Boolean),
                                    })
                                );
                            }),
                            o
                        );
                    })(function e(t, r, n) {
                        var a = w(t),
                            i = !eR(t),
                            s = r.attrs,
                            l = void 0 === s ? y : s,
                            u = r.componentId,
                            d =
                                void 0 === u
                                    ? ((x = r.displayName),
                                      (C = r.parentComponentId),
                                      (ek[
                                          (k =
                                              "string" != typeof x
                                                  ? "sc"
                                                  : ew(x))
                                      ] = (ek[k] || 0) + 1),
                                      (_ = k + "-" + eS("5.3.11" + k + ek[k])),
                                      C ? C + "-" + _ : _)
                                    : u,
                            f = r.displayName,
                            m =
                                void 0 === f
                                    ? eR(t)
                                        ? "styled." + t
                                        : "Styled(" + b(t) + ")"
                                    : f,
                            S =
                                r.displayName && r.componentId
                                    ? ew(r.displayName) + "-" + r.componentId
                                    : r.componentId || d,
                            R =
                                a && t.attrs
                                    ? Array.prototype
                                          .concat(t.attrs, l)
                                          .filter(Boolean)
                                    : l,
                            E = r.shouldForwardProp;
                        a &&
                            t.shouldForwardProp &&
                            (E = r.shouldForwardProp
                                ? function (e, n, a) {
                                      return (
                                          t.shouldForwardProp(e, n, a) &&
                                          r.shouldForwardProp(e, n, a)
                                      );
                                  }
                                : t.shouldForwardProp);
                        var x,
                            C,
                            k,
                            _,
                            N,
                            j = new X(n, S, a ? t.componentStyle : void 0),
                            P = j.isStatic && 0 === l.length,
                            A = function (e, t) {
                                return (function (e, t, r, n) {
                                    var a,
                                        i,
                                        s,
                                        l,
                                        u,
                                        d = e.attrs,
                                        h = e.componentStyle,
                                        f = e.defaultProps,
                                        m = e.foldedComponentIds,
                                        y = e.shouldForwardProp,
                                        b = e.styledComponentId,
                                        w = e.target,
                                        S =
                                            ((a =
                                                eg(
                                                    t,
                                                    (0, o.useContext)(ex),
                                                    f
                                                ) || g),
                                            void 0 === a && (a = g),
                                            (i = p({}, t, { theme: a })),
                                            (s = {}),
                                            d.forEach(function (e) {
                                                var t,
                                                    r,
                                                    n,
                                                    a = e;
                                                for (t in (v(a) && (a = a(i)),
                                                a))
                                                    i[t] = s[t] =
                                                        "className" === t
                                                            ? ((r = s[t]),
                                                              (n = a[t]),
                                                              r && n
                                                                  ? r + " " + n
                                                                  : r || n)
                                                            : a[t];
                                            }),
                                            [i, s]),
                                        R = S[0],
                                        E = S[1],
                                        x =
                                            ((l = ea()),
                                            (u = eo()),
                                            n
                                                ? h.generateAndInjectStyles(
                                                      g,
                                                      l,
                                                      u
                                                  )
                                                : h.generateAndInjectStyles(
                                                      R,
                                                      l,
                                                      u
                                                  )),
                                        C = E.$as || t.$as || E.as || t.as || w,
                                        k = eR(C),
                                        _ = E !== t ? p({}, t, {}, E) : t,
                                        N = {};
                                    for (var j in _)
                                        "$" !== j[0] &&
                                            "as" !== j &&
                                            ("forwardedAs" === j
                                                ? (N.as = _[j])
                                                : (y
                                                      ? y(j, c.A, C)
                                                      : !k || (0, c.A)(j)) &&
                                                  (N[j] = _[j]));
                                    return (
                                        t.style &&
                                            E.style !== t.style &&
                                            (N.style = p(
                                                {},
                                                t.style,
                                                {},
                                                E.style
                                            )),
                                        (N.className = Array.prototype
                                            .concat(
                                                m,
                                                b,
                                                x !== b ? x : null,
                                                t.className,
                                                E.className
                                            )
                                            .filter(Boolean)
                                            .join(" ")),
                                        (N.ref = r),
                                        (0, o.createElement)(C, N)
                                    );
                                })(N, e, t, P);
                            };
                        return (
                            (A.displayName = m),
                            ((N = o.forwardRef(A)).attrs = R),
                            (N.componentStyle = j),
                            (N.displayName = m),
                            (N.shouldForwardProp = E),
                            (N.foldedComponentIds = a
                                ? Array.prototype.concat(
                                      t.foldedComponentIds,
                                      t.styledComponentId
                                  )
                                : y),
                            (N.styledComponentId = S),
                            (N.target = a ? t.target : t),
                            (N.withComponent = function (t) {
                                var a = r.componentId,
                                    o = (function (e, t) {
                                        if (null == e) return {};
                                        var r,
                                            n,
                                            a = {},
                                            o = Object.keys(e);
                                        for (n = 0; n < o.length; n++)
                                            t.indexOf((r = o[n])) >= 0 ||
                                                (a[r] = e[r]);
                                        return a;
                                    })(r, ["componentId"]),
                                    i = a && a + "-" + (eR(t) ? t : ew(b(t)));
                                return e(
                                    t,
                                    p({}, o, { attrs: R, componentId: i }),
                                    n
                                );
                            }),
                            Object.defineProperty(N, "defaultProps", {
                                get: function () {
                                    return this._foldedDefaultProps;
                                },
                                set: function (e) {
                                    this._foldedDefaultProps = a
                                        ? (function e(t) {
                                              for (
                                                  var r = arguments.length,
                                                      n = Array(
                                                          r > 1 ? r - 1 : 0
                                                      ),
                                                      a = 1;
                                                  a < r;
                                                  a++
                                              )
                                                  n[a - 1] = arguments[a];
                                              for (
                                                  var o = 0;
                                                  o < n.length;
                                                  o++
                                              ) {
                                                  var i = n[o];
                                                  if (eE(i))
                                                      for (var s in i)
                                                          "__proto__" !== s &&
                                                              "constructor" !==
                                                                  s &&
                                                              "prototype" !==
                                                                  s &&
                                                              (function (
                                                                  t,
                                                                  r,
                                                                  n
                                                              ) {
                                                                  var a = t[n];
                                                                  eE(r) && eE(a)
                                                                      ? e(a, r)
                                                                      : (t[n] =
                                                                            r);
                                                              })(t, i[s], s);
                                              }
                                              return t;
                                          })({}, t.defaultProps, e)
                                        : e;
                                },
                            }),
                            Object.defineProperty(N, "toString", {
                                value: function () {
                                    return "." + N.styledComponentId;
                                },
                            }),
                            i &&
                                h()(N, t, {
                                    attrs: !0,
                                    componentStyle: !0,
                                    displayName: !0,
                                    foldedComponentIds: !0,
                                    shouldForwardProp: !0,
                                    styledComponentId: !0,
                                    target: !0,
                                    withComponent: !0,
                                }),
                            N
                        );
                    }, e);
                };
            [
                "a",
                "abbr",
                "address",
                "area",
                "article",
                "aside",
                "audio",
                "b",
                "base",
                "bdi",
                "bdo",
                "big",
                "blockquote",
                "body",
                "br",
                "button",
                "canvas",
                "caption",
                "cite",
                "code",
                "col",
                "colgroup",
                "data",
                "datalist",
                "dd",
                "del",
                "details",
                "dfn",
                "dialog",
                "div",
                "dl",
                "dt",
                "em",
                "embed",
                "fieldset",
                "figcaption",
                "figure",
                "footer",
                "form",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "head",
                "header",
                "hgroup",
                "hr",
                "html",
                "i",
                "iframe",
                "img",
                "input",
                "ins",
                "kbd",
                "keygen",
                "label",
                "legend",
                "li",
                "link",
                "main",
                "map",
                "mark",
                "marquee",
                "menu",
                "menuitem",
                "meta",
                "meter",
                "nav",
                "noscript",
                "object",
                "ol",
                "optgroup",
                "option",
                "output",
                "p",
                "param",
                "picture",
                "pre",
                "progress",
                "q",
                "rp",
                "rt",
                "ruby",
                "s",
                "samp",
                "script",
                "section",
                "select",
                "small",
                "source",
                "span",
                "strong",
                "style",
                "sub",
                "summary",
                "sup",
                "table",
                "tbody",
                "td",
                "textarea",
                "tfoot",
                "th",
                "thead",
                "time",
                "title",
                "tr",
                "track",
                "u",
                "ul",
                "var",
                "video",
                "wbr",
                "circle",
                "clipPath",
                "defs",
                "ellipse",
                "foreignObject",
                "g",
                "image",
                "line",
                "linearGradient",
                "marker",
                "mask",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialGradient",
                "rect",
                "stop",
                "svg",
                "text",
                "textPath",
                "tspan",
            ].forEach(function (e) {
                e_[e] = e_(e);
            });
            var eN = (function () {
                function e(e, t) {
                    ((this.rules = e),
                        (this.componentId = t),
                        (this.isStatic = J(e)),
                        B.registerId(this.componentId + 1));
                }
                var t = e.prototype;
                return (
                    (t.createStyles = function (e, t, r, n) {
                        var a = n(ef(this.rules, t, r, n).join(""), ""),
                            o = this.componentId + e;
                        r.insertRules(o, o, a);
                    }),
                    (t.removeStyles = function (e, t) {
                        t.clearRules(this.componentId + e);
                    }),
                    (t.renderStyles = function (e, t, r, n) {
                        (e > 2 && B.registerId(this.componentId + e),
                            this.removeStyles(e, r),
                            this.createStyles(e, t, r, n));
                    }),
                    e
                );
            })();
            function ej(e) {
                for (
                    var t = arguments.length,
                        r = Array(t > 1 ? t - 1 : 0),
                        n = 1;
                    n < t;
                    n++
                )
                    r[n - 1] = arguments[n];
                var a = ey.apply(void 0, [e].concat(r)),
                    i = "sc-global-" + eS(JSON.stringify(a)),
                    s = new eN(a, i);
                function l(e) {
                    var t = ea(),
                        r = eo(),
                        n = (0, o.useContext)(ex),
                        a = (0, o.useRef)(t.allocateGSInstance(i)).current;
                    return (
                        t.server && u(a, e, t, n, r),
                        (0, o.useLayoutEffect)(
                            function () {
                                if (!t.server)
                                    return (
                                        u(a, e, t, n, r),
                                        function () {
                                            return s.removeStyles(a, t);
                                        }
                                    );
                            },
                            [a, e, t, n, r]
                        ),
                        null
                    );
                }
                function u(e, t, r, n, a) {
                    if (s.isStatic) s.renderStyles(e, E, r, a);
                    else {
                        var o = p({}, t, { theme: eg(t, n, l.defaultProps) });
                        s.renderStyles(e, o, r, a);
                    }
                }
                return o.memo(l);
            }
            function eP(e) {
                for (
                    var t = arguments.length,
                        r = Array(t > 1 ? t - 1 : 0),
                        n = 1;
                    n < t;
                    n++
                )
                    r[n - 1] = arguments[n];
                var a = ey.apply(void 0, [e].concat(r)).join("");
                return new es(eS(a), a);
            }
            (((n = function () {
                var e = this;
                ((this._emitSheetCSS = function () {
                    var t = e.instance.toString();
                    if (!t) return "";
                    var r = O();
                    return (
                        "<style " +
                        [
                            r && 'nonce="' + r + '"',
                            S + '="true"',
                            'data-styled-version="5.3.11"',
                        ]
                            .filter(Boolean)
                            .join(" ") +
                        ">" +
                        t +
                        "</style>"
                    );
                }),
                    (this.getStyleTags = function () {
                        return e.sealed ? x(2) : e._emitSheetCSS();
                    }),
                    (this.getStyleElement = function () {
                        if (e.sealed) return x(2);
                        var t,
                            r =
                                (((t = {})[S] = ""),
                                (t["data-styled-version"] = "5.3.11"),
                                (t.dangerouslySetInnerHTML = {
                                    __html: e.instance.toString(),
                                }),
                                t),
                            n = O();
                        return (
                            n && (r.nonce = n),
                            [
                                o.createElement(
                                    "style",
                                    p({}, r, { key: "sc-0-0" })
                                ),
                            ]
                        );
                    }),
                    (this.seal = function () {
                        e.sealed = !0;
                    }),
                    (this.instance = new B({ isServer: !0 })),
                    (this.sealed = !1));
            }.prototype).collectStyles = function (e) {
                return this.sealed
                    ? x(2)
                    : o.createElement(ei, { sheet: this.instance }, e);
            }),
                (n.interleaveWithNodeStream = function (e) {
                    return x(3);
                }));
            let eA = e_;
        },
        42049: (e, t, r) => {
            r.d(t, { r: () => n });
            var n = (0, r(49236).qU)({
                boxShadow: { property: "boxShadow", scale: "shadows" },
                textShadow: { property: "textShadow", scale: "shadows" },
            });
        },
        42270: (e, t, r) => {
            r.d(t, { C: () => c, l: () => d });
            var n = r(74848),
                a = r(21728),
                o = r(96540),
                i = r(60281),
                s = r(6152),
                l = r(5330),
                u = r(79634);
            let c = (0, o.createContext)(null);
            function d(e) {
                let t,
                    r,
                    o = (0, a.c)(9),
                    {
                        appPayload: d,
                        children: h,
                        error: p,
                        navigateOnError: f,
                        routes: m,
                        routeStateMap: y,
                    } = e;
                return (
                    o[0] !== d ||
                    o[1] !== h ||
                    o[2] !== p ||
                    o[3] !== f ||
                    o[4] !== y
                        ? ((t =
                              p && !f
                                  ? (0, n.jsx)(i.M, { ...p })
                                  : (0, n.jsx)(u.z.Provider, {
                                        value: d,
                                        children: (0, n.jsx)(c.Provider, {
                                            value: p,
                                            children: (0, n.jsx)(s.Y.Provider, {
                                                value: y,
                                                children: h,
                                            }),
                                        }),
                                    })),
                          (o[0] = d),
                          (o[1] = h),
                          (o[2] = p),
                          (o[3] = f),
                          (o[4] = y),
                          (o[5] = t))
                        : (t = o[5]),
                    o[6] !== m || o[7] !== t
                        ? ((r = (0, n.jsx)(l.d, { routes: m, children: t })),
                          (o[6] = m),
                          (o[7] = t),
                          (o[8] = r))
                        : (r = o[8]),
                    r
                );
            }
            try {
                c.displayName || (c.displayName = "NavigationErrorContext");
            } catch {}
            try {
                d.displayName || (d.displayName = "NavigatorRouter");
            } catch {}
        },
        43073: (e, t, r) => {
            r.d(t, { E: () => o });
            var n = r(96540),
                a = r(68270);
            function o() {
                return (0, n.useContext)(a.e);
            }
        },
        43538: (e, t, r) => {
            r.d(t, { G: () => a });
            var n = r(82518);
            function a() {
                return (0, n.Xl)();
            }
        },
        43581: (e, t, r) => {
            r.d(t, { A: () => i, T: () => o });
            var n = r(49236),
                a = {
                    background: !0,
                    backgroundImage: !0,
                    backgroundSize: !0,
                    backgroundPosition: !0,
                    backgroundRepeat: !0,
                };
            ((a.bgImage = a.backgroundImage),
                (a.bgSize = a.backgroundSize),
                (a.bgPosition = a.backgroundPosition),
                (a.bgRepeat = a.backgroundRepeat));
            var o = (0, n.qU)(a);
            let i = o;
        },
        45887: (e, t, r) => {
            r.d(t, { V: () => u, l: () => c });
            var n = r(74848),
                a = r(21728),
                o = r(38102),
                i = r(96540),
                s = r(48602);
            let l = (0, i.createContext)(null),
                u = (0, i.memo)(function (e) {
                    let t,
                        r,
                        u,
                        c,
                        d = (0, a.c)(9),
                        { appName: h, children: p, critical: f } = e;
                    d[0] !== f || d[1] !== h
                        ? ((t = { reactAppName: h, critical: f }),
                          (d[0] = f),
                          (d[1] = h),
                          (d[2] = t))
                        : (t = d[2]);
                    let m = (0, i.useRef)(t);
                    (d[3] !== f || d[4] !== h
                        ? ((r = () => {
                              m.current = { reactAppName: h, critical: f };
                          }),
                          (d[3] = f),
                          (d[4] = h),
                          (d[5] = r))
                        : (r = d[5]),
                        (0, i.useEffect)(r),
                        d[6] === Symbol.for("react.memo_cache_sentinel")
                            ? ((u = (e, t) => {
                                  if (e)
                                      return (0, s.km)(e, (e) => {
                                          (0, o.N7)(e, {
                                              critical: m.current.critical,
                                              reactAppName:
                                                  m.current.reactAppName,
                                              ...t,
                                          });
                                      });
                              }),
                              (d[6] = u))
                            : (u = d[6]));
                    let y = u;
                    return (
                        d[7] !== p
                            ? ((c = (0, n.jsx)(l.Provider, {
                                  value: y,
                                  children: p,
                              })),
                              (d[7] = p),
                              (d[8] = c))
                            : (c = d[8]),
                        c
                    );
                });
            function c() {
                let e = (0, i.useContext)(l);
                if (null == e)
                    throw Error(
                        "useReportErrorContext must be used within a ReportErrorContextProvider"
                    );
                return e;
            }
            try {
                l.displayName || (l.displayName = "ReportErrorContext");
            } catch {}
            try {
                u.displayName || (u.displayName = "ReportErrorContextProvider");
            } catch {}
        },
        48602: (e, t, r) => {
            r.d(t, { Ly: () => m, hw: () => p, km: () => h });
            var n = r(74848),
                a = r(21728),
                o = r(38102),
                i = r(61526),
                s = r(76720),
                l = r(96540),
                u = r(95224),
                c = r(76143);
            let d = new WeakSet();
            function h(e, t) {
                d.has(e) || (d.add(e), t(e));
            }
            let p = (e) => {
                let t,
                    r = (0, a.c)(3),
                    { appName: o } = e,
                    s = (0, i.r5)();
                return (0, i.pX)(s) && 404 === s.status
                    ? null
                    : (r[0] !== o || r[1] !== s
                          ? ((t = (0, n.jsx)(f, { appName: o, routeError: s })),
                            (r[0] = o),
                            (r[1] = s),
                            (r[2] = t))
                          : (t = r[2]),
                      t);
            };
            function f(e) {
                let t,
                    r,
                    i,
                    u,
                    c = (0, a.c)(6),
                    { appName: d, routeError: p } = e,
                    f = (0, l.useRef)(d);
                return (
                    c[0] !== d
                        ? ((t = () => {
                              f.current = d;
                          }),
                          (c[0] = d),
                          (c[1] = t))
                        : (t = c[1]),
                    (0, l.useEffect)(t),
                    c[2] !== p
                        ? ((r = () => {
                              p &&
                                  h(p, (e) => {
                                      (0, o.N7)(e, {
                                          critical: !0,
                                          reactAppName: f.current,
                                      });
                                  });
                          }),
                          (i = [p]),
                          (c[2] = p),
                          (c[3] = r),
                          (c[4] = i))
                        : ((r = c[3]), (i = c[4])),
                    (0, l.useEffect)(r, i),
                    c[5] === Symbol.for("react.memo_cache_sentinel")
                        ? ((u = (0, n.jsxs)(s.E, {
                              border: !1,
                              spacious: !1,
                              children: [
                                  (0, n.jsx)(s.E.Heading, {
                                      children: "Unable to load page.",
                                  }),
                                  (0, n.jsx)(s.E.Description, {
                                      children:
                                          "Please reload page and try again",
                                  }),
                              ],
                          })),
                          (c[5] = u))
                        : (u = c[5]),
                    u
                );
            }
            let m = (e) => {
                let t,
                    r = (0, a.c)(6),
                    { appName: o } = e,
                    s = (0, i.r5)();
                if ((0, u.c)(s)) {
                    let e;
                    return (
                        r[0] !== o || r[1] !== s
                            ? ((e = (0, n.jsx)(y, {
                                  appName: o,
                                  responseError: s,
                              })),
                              (r[0] = o),
                              (r[1] = s),
                              (r[2] = e))
                            : (e = r[2]),
                        e
                    );
                }
                return (
                    r[3] !== o || r[4] !== s
                        ? ((t = (0, n.jsx)(f, { routeError: s, appName: o })),
                          (r[3] = o),
                          (r[4] = s),
                          (r[5] = t))
                        : (t = r[5]),
                    t
                );
            };
            function y(e) {
                let t,
                    r,
                    i,
                    u,
                    d,
                    p,
                    f,
                    m,
                    y,
                    g,
                    v,
                    b = (0, a.c)(11),
                    { appName: w, responseError: S } = e;
                ((g = (0, a.c)(3)),
                    (v = S.response.status),
                    g[0] !== v
                        ? ((m = () => {
                              var e;
                              let t,
                                  r =
                                      ((t =
                                          404 === (e = v)
                                              ? "404 Page not found"
                                              : 500 === e
                                                ? "500 Internal server error"
                                                : `Error ${e}`),
                                      (0, c.Y)(t));
                              (0, c.D)(r);
                          }),
                          (y = [v]),
                          (g[0] = v),
                          (g[1] = m),
                          (g[2] = y))
                        : ((m = g[1]), (y = g[2])),
                    (0, l.useEffect)(m, y));
                let R = (0, l.useRef)(w);
                (b[0] !== w
                    ? ((t = () => {
                          R.current = w;
                      }),
                      (b[0] = w),
                      (b[1] = t))
                    : (t = b[1]),
                    (0, l.useEffect)(t),
                    b[2] !== S
                        ? ((r = () => {
                              h(S, (e) => {
                                  (0, o.N7)(e, {
                                      critical: !0,
                                      reactAppName: R.current,
                                  });
                              });
                          }),
                          (i = [S]),
                          (b[2] = S),
                          (b[3] = r),
                          (b[4] = i))
                        : ((r = b[3]), (i = b[4])),
                    (0, l.useEffect)(r, i),
                    b[5] === Symbol.for("react.memo_cache_sentinel")
                        ? ((u = (0, n.jsx)(s.E.Heading, {
                              children: "Unable to load page.",
                          })),
                          (b[5] = u))
                        : (u = b[5]));
                let E = `Status: ${S.response.status} Message: ${S.message}`;
                return (
                    b[6] !== E
                        ? ((d = (0, n.jsx)(s.E.Description, { children: E })),
                          (b[6] = E),
                          (b[7] = d))
                        : (d = b[7]),
                    b[8] === Symbol.for("react.memo_cache_sentinel")
                        ? ((p = (0, n.jsx)(s.E.Description, {
                              children: "Please reload page and try again",
                          })),
                          (b[8] = p))
                        : (p = b[8]),
                    b[9] !== d
                        ? ((f = (0, n.jsxs)(s.E, {
                              border: !1,
                              spacious: !1,
                              children: [u, d, p],
                          })),
                          (b[9] = d),
                          (b[10] = f))
                        : (f = b[10]),
                    f
                );
            }
            try {
                p.displayName || (p.displayName = "UnhandledRouteError");
            } catch {}
            try {
                f.displayName || (f.displayName = "BaseRouteErrorBoundary");
            } catch {}
            try {
                m.displayName || (m.displayName = "RootAppRouteErrorElement");
            } catch {}
            try {
                y.displayName || (y.displayName = "ResponseErrorElement");
            } catch {}
        },
        49236: (e, t, r) => {
            r.d(t, { Cp: () => d, Jt: () => c, Zz: () => y, qU: () => m });
            var n = r(45228),
                a = r.n(n),
                o = function (e, t) {
                    var r,
                        n = a()({}, e, t);
                    for (var o in e)
                        e[o] &&
                            "object" == typeof t[o] &&
                            a()(n, (((r = {})[o] = a()(e[o], t[o])), r));
                    return n;
                },
                i = function (e) {
                    var t = {};
                    return (
                        Object.keys(e)
                            .sort(function (e, t) {
                                return e.localeCompare(t, void 0, {
                                    numeric: !0,
                                    sensitivity: "base",
                                });
                            })
                            .forEach(function (r) {
                                t[r] = e[r];
                            }),
                        t
                    );
                },
                s = {
                    breakpoints: [40, 52, 64].map(function (e) {
                        return e + "em";
                    }),
                },
                l = function (e) {
                    return "@media screen and (min-width: " + e + ")";
                },
                u = function (e, t) {
                    return c(t, e, e);
                },
                c = function (e, t, r, n, a) {
                    for (
                        n = 0, t = t && t.split ? t.split(".") : [t];
                        n < t.length;
                        n++
                    )
                        e = e ? e[t[n]] : a;
                    return e === a ? r : e;
                },
                d = function e(t) {
                    var r = {},
                        n = function (e) {
                            var n = {},
                                u = !1,
                                d = e.theme && e.theme.disableStyledSystemCache;
                            for (var f in e)
                                if (t[f]) {
                                    var m = t[f],
                                        y = e[f],
                                        g = c(e.theme, m.scale, m.defaults);
                                    if ("object" == typeof y) {
                                        if (
                                            ((r.breakpoints =
                                                (!d && r.breakpoints) ||
                                                c(
                                                    e.theme,
                                                    "breakpoints",
                                                    s.breakpoints
                                                )),
                                            Array.isArray(y))
                                        ) {
                                            ((r.media =
                                                (!d && r.media) ||
                                                [null].concat(
                                                    r.breakpoints.map(l)
                                                )),
                                                (n = o(
                                                    n,
                                                    h(r.media, m, g, y, e)
                                                )));
                                            continue;
                                        }
                                        null !== y &&
                                            ((n = o(
                                                n,
                                                p(r.breakpoints, m, g, y, e)
                                            )),
                                            (u = !0));
                                        continue;
                                    }
                                    a()(n, m(y, g, e));
                                }
                            return (u && (n = i(n)), n);
                        };
                    ((n.config = t),
                        (n.propNames = Object.keys(t)),
                        (n.cache = r));
                    var u = Object.keys(t).filter(function (e) {
                        return "config" !== e;
                    });
                    return (
                        u.length > 1 &&
                            u.forEach(function (r) {
                                var a;
                                n[r] = e((((a = {})[r] = t[r]), a));
                            }),
                        n
                    );
                },
                h = function (e, t, r, n, o) {
                    var i = {};
                    return (
                        n.slice(0, e.length).forEach(function (n, s) {
                            var l,
                                u = e[s],
                                c = t(n, r, o);
                            u
                                ? a()(i, (((l = {})[u] = a()({}, i[u], c)), l))
                                : a()(i, c);
                        }),
                        i
                    );
                },
                p = function (e, t, r, n, o) {
                    var i = {};
                    for (var s in n) {
                        var u = e[s],
                            c = t(n[s], r, o);
                        if (u) {
                            var d,
                                h = l(u);
                            a()(i, (((d = {})[h] = a()({}, i[h], c)), d));
                        } else a()(i, c);
                    }
                    return i;
                },
                f = function (e) {
                    var t = e.properties,
                        r = e.property,
                        n = e.scale,
                        a = e.transform,
                        o = void 0 === a ? u : a,
                        i = e.defaultScale;
                    t = t || [r];
                    var s = function (e, r, n) {
                        var a = {},
                            i = o(e, r, n);
                        if (null !== i)
                            return (
                                t.forEach(function (e) {
                                    a[e] = i;
                                }),
                                a
                            );
                    };
                    return ((s.scale = n), (s.defaults = i), s);
                },
                m = function (e) {
                    void 0 === e && (e = {});
                    var t = {};
                    return (
                        Object.keys(e).forEach(function (r) {
                            var n = e[r];
                            if (!0 === n) {
                                t[r] = f({ property: r, scale: r });
                                return;
                            }
                            if ("function" == typeof n) {
                                t[r] = n;
                                return;
                            }
                            t[r] = f(n);
                        }),
                        d(t)
                    );
                },
                y = function () {
                    for (
                        var e = {}, t = arguments.length, r = Array(t), n = 0;
                        n < t;
                        n++
                    )
                        r[n] = arguments[n];
                    return (
                        r.forEach(function (t) {
                            t && t.config && a()(e, t.config);
                        }),
                        d(e)
                    );
                };
        },
        49890: (e, t, r) => {
            r.d(t, { n: () => s });
            var n = r(74848),
                a = r(21728),
                o = r(69599),
                i = r(50279);
            function s(e) {
                let t,
                    r,
                    s = (0, a.c)(3),
                    { children: l } = e;
                if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
                    for (let e of ((t = {}), (0, o.fQ)()))
                        e.startsWith("primer_react_") && (t[e] = !0);
                    s[0] = t;
                } else t = s[0];
                let u = t;
                return (
                    s[1] !== l
                        ? ((r = (0, n.jsx)(i.g, { flags: u, children: l })),
                          (s[1] = l),
                          (s[2] = r))
                        : (r = s[2]),
                    r
                );
            }
            r(96540);
            try {
                s.displayName || (s.displayName = "PrimerFeatureFlags");
            } catch {}
        },
        50402: (e, t, r) => {
            function n() {
                return (n =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) &&
                                    (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            r.d(t, { Ay: () => h });
            var a = function (e, t, r, n, a) {
                    for (
                        n = 0, t = t && t.split ? t.split(".") : [t];
                        n < t.length;
                        n++
                    )
                        e = e ? e[t[n]] : a;
                    return e === a ? r : e;
                },
                o = [40, 52, 64].map(function (e) {
                    return e + "em";
                }),
                i = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
                    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
                },
                s = {
                    bg: "backgroundColor",
                    m: "margin",
                    mt: "marginTop",
                    mr: "marginRight",
                    mb: "marginBottom",
                    ml: "marginLeft",
                    mx: "marginX",
                    my: "marginY",
                    p: "padding",
                    pt: "paddingTop",
                    pr: "paddingRight",
                    pb: "paddingBottom",
                    pl: "paddingLeft",
                    px: "paddingX",
                    py: "paddingY",
                },
                l = {
                    marginX: ["marginLeft", "marginRight"],
                    marginY: ["marginTop", "marginBottom"],
                    paddingX: ["paddingLeft", "paddingRight"],
                    paddingY: ["paddingTop", "paddingBottom"],
                    size: ["width", "height"],
                },
                u = {
                    color: "colors",
                    backgroundColor: "colors",
                    borderColor: "colors",
                    margin: "space",
                    marginTop: "space",
                    marginRight: "space",
                    marginBottom: "space",
                    marginLeft: "space",
                    marginX: "space",
                    marginY: "space",
                    padding: "space",
                    paddingTop: "space",
                    paddingRight: "space",
                    paddingBottom: "space",
                    paddingLeft: "space",
                    paddingX: "space",
                    paddingY: "space",
                    top: "space",
                    right: "space",
                    bottom: "space",
                    left: "space",
                    gridGap: "space",
                    gridColumnGap: "space",
                    gridRowGap: "space",
                    gap: "space",
                    columnGap: "space",
                    rowGap: "space",
                    fontFamily: "fonts",
                    fontSize: "fontSizes",
                    fontWeight: "fontWeights",
                    lineHeight: "lineHeights",
                    letterSpacing: "letterSpacings",
                    border: "borders",
                    borderTop: "borders",
                    borderRight: "borders",
                    borderBottom: "borders",
                    borderLeft: "borders",
                    borderWidth: "borderWidths",
                    borderStyle: "borderStyles",
                    borderRadius: "radii",
                    borderTopRightRadius: "radii",
                    borderTopLeftRadius: "radii",
                    borderBottomRightRadius: "radii",
                    borderBottomLeftRadius: "radii",
                    borderTopWidth: "borderWidths",
                    borderTopColor: "colors",
                    borderTopStyle: "borderStyles",
                    borderBottomWidth: "borderWidths",
                    borderBottomColor: "colors",
                    borderBottomStyle: "borderStyles",
                    borderLeftWidth: "borderWidths",
                    borderLeftColor: "colors",
                    borderLeftStyle: "borderStyles",
                    borderRightWidth: "borderWidths",
                    borderRightColor: "colors",
                    borderRightStyle: "borderStyles",
                    outlineColor: "colors",
                    boxShadow: "shadows",
                    textShadow: "shadows",
                    zIndex: "zIndices",
                    width: "sizes",
                    minWidth: "sizes",
                    maxWidth: "sizes",
                    height: "sizes",
                    minHeight: "sizes",
                    maxHeight: "sizes",
                    flexBasis: "sizes",
                    size: "sizes",
                    fill: "colors",
                    stroke: "colors",
                },
                c = function (e, t) {
                    if ("number" != typeof t || t >= 0) return a(e, t, t);
                    var r = Math.abs(t),
                        n = a(e, r, r);
                    return "string" == typeof n ? "-" + n : -1 * n;
                },
                d = [
                    "margin",
                    "marginTop",
                    "marginRight",
                    "marginBottom",
                    "marginLeft",
                    "marginX",
                    "marginY",
                    "top",
                    "bottom",
                    "left",
                    "right",
                ].reduce(function (e, t) {
                    var r;
                    return n({}, e, (((r = {})[t] = c), r));
                }, {});
            let h = function e(t) {
                return function (r) {
                    void 0 === r && (r = {});
                    var c,
                        h = n({}, i, {}, r.theme || r),
                        p = {},
                        f = ((c = "function" == typeof t ? t(h) : t),
                        function (e) {
                            var t = {},
                                r = [null].concat(
                                    a(e, "breakpoints", o).map(function (e) {
                                        return (
                                            "@media screen and (min-width: " +
                                            e +
                                            ")"
                                        );
                                    })
                                );
                            for (var n in c) {
                                var i =
                                    "function" == typeof c[n] ? c[n](e) : c[n];
                                if (null != i) {
                                    if (!Array.isArray(i)) {
                                        t[n] = i;
                                        continue;
                                    }
                                    for (
                                        var s = 0;
                                        s < i.slice(0, r.length).length;
                                        s++
                                    ) {
                                        var l = r[s];
                                        if (!l) {
                                            t[n] = i[s];
                                            continue;
                                        }
                                        ((t[l] = t[l] || {}),
                                            null != i[s] && (t[l][n] = i[s]));
                                    }
                                }
                            }
                            return t;
                        })(h);
                    for (var m in f) {
                        var y = f[m],
                            g = "function" == typeof y ? y(h) : y;
                        if ("variant" === m) {
                            var v = e(a(h, g))(h);
                            p = n({}, p, {}, v);
                            continue;
                        }
                        if (g && "object" == typeof g) {
                            p[m] = e(g)(h);
                            continue;
                        }
                        var b = a(s, m, m),
                            w = a(u, b),
                            S = a(h, w, a(h, b, {})),
                            R = a(d, b, a)(S, g, g);
                        if (l[b])
                            for (var E = l[b], x = 0; x < E.length; x++)
                                p[E[x]] = R;
                        else p[b] = R;
                    }
                    return p;
                };
            };
        },
        55514: (e, t, r) => {
            r.d(t, { D: () => o });
            var n = r(86596),
                a = r(34418);
            function o({
                partialName: e,
                queryDeps: t,
                type: r,
                navigationBehavior: o,
                ...i
            }) {
                return (s) => {
                    let l = `${s}.${e || "RailsPartial"}`;
                    return {
                        queryName: l,
                        queryDeps:
                            t ||
                            (({ pathname: e }) => ({
                                pathname: `${e}/partial`,
                            })),
                        queryFn: async (e) => {
                            let t = await (0, a.X)(e),
                                r = t.payload?.[l];
                            if (!r)
                                throw Error(
                                    `Unable to find payload for query: ${l}`
                                );
                            return r;
                        },
                        type: r || n.g.Blocking,
                        navigationBehavior: o || "network-first",
                        ...i,
                    };
                };
            }
        },
        56629: (e, t, r) => {
            r.d(t, { n: () => c });
            var n = r(21728),
                a = r(65432),
                o = r(82591),
                i = r(94416),
                s = r(71315),
                l = r(82518),
                u = r(96540);
            let c = (e, t, r) => {
                    let a,
                        l,
                        c = (0, n.c)(6),
                        p = (0, u.useRef)(void 0);
                    (c[0] !== r ||
                    c[1] !== t ||
                    c[2] !== e.key ||
                    c[3] !== e.pathname
                        ? ((a = () => {
                              t ||
                                  (void 0 !== p.current &&
                                      p.current === e.key) ||
                                  ((0, i.LM)()
                                      ? (d(r),
                                        (function (e) {
                                            let t = s.XC?.querySelector(
                                                "meta[name=visitor-payload]"
                                            );
                                            if (!t) return;
                                            let r = JSON.parse(atob(t.content));
                                            ((r.referrer = new URL(
                                                e,
                                                s.fV.origin
                                            ).href),
                                                (t.content = btoa(
                                                    JSON.stringify(r)
                                                )));
                                        })(e.pathname))
                                      : h(r),
                                  document.dispatchEvent(
                                      new CustomEvent(o.z.REACT_DONE, {
                                          detail: { error: r },
                                      })
                                  ),
                                  (p.current = e.key));
                          }),
                          (l = [e.key, e.pathname, t, r]),
                          (c[0] = r),
                          (c[1] = t),
                          (c[2] = e.key),
                          (c[3] = e.pathname),
                          (c[4] = a),
                          (c[5] = l))
                        : ((a = c[4]), (l = c[5])),
                        (0, u.useEffect)(a, l));
                },
                d = (e) => {
                    e ? (0, a.o4)() : ((0, a.rZ)(), (0, a.iS)());
                },
                h = (e) => {
                    let t;
                    if (e) return;
                    let r =
                        (window.performance.measure(p),
                        (t = window.performance.getEntriesByName(p).pop())
                            ? t.duration
                            : null);
                    r &&
                        (0, l.iv)({
                            requestUrl: window.location.href,
                            distributionKey: "REACT_NAV_DURATION",
                            distributionValue: Math.round(r),
                            distributionTags: ["REACT_NAV_HARD"],
                        });
                },
                p = "react_nav_duration";
        },
        57227: (e, t, r) => {
            r.d(t, { y: () => a });
            var n = r(49236),
                a = function (e, t) {
                    return (
                        void 0 === t && (t = null),
                        function (r) {
                            return (0, n.Jt)(r.theme, e, t);
                        }
                    );
                };
        },
        58523: (e, t, r) => {
            r.d(t, { A: () => a, p: () => n });
            var n = (0, r(49236).qU)({
                alignItems: !0,
                alignContent: !0,
                justifyItems: !0,
                justifyContent: !0,
                flexWrap: !0,
                flexDirection: !0,
                flex: !0,
                flexGrow: !0,
                flexShrink: !0,
                flexBasis: !0,
                justifySelf: !0,
                alignSelf: !0,
                order: !0,
            });
            let a = n;
        },
        58578: (e, t, r) => {
            r.d(t, { V: () => n });
            let n = "__gh__react-core-preventAutofocus";
        },
        59656: (e, t, r) => {
            r.d(t, { L: () => o });
            var n = r(21728),
                a = r(4143);
            function o(e) {
                let t,
                    r = (0, n.c)(5),
                    o = (0, a.yT)();
                if (r[0] !== o || r[1] !== e) {
                    let n;
                    (r[3] !== e
                        ? ((n = (t) => t.id === e.id), (r[3] = e), (r[4] = n))
                        : (n = r[4]),
                        (t = o.find(n)),
                        (r[0] = o),
                        (r[1] = e),
                        (r[2] = t));
                } else t = r[2];
                let s = t;
                if (!s) {
                    let t = o.map(i).join(", ");
                    throw Error(
                        `Cannot read params from unmounted route with ID "${e.id}". Mounted route IDs are: "${t}"`
                    );
                }
                return s.params;
            }
            function i(e) {
                return e.id;
            }
        },
        59756: (e, t, r) => {
            r.d(t, { A: () => i, G: () => o });
            var n = r(49236),
                a = [0, 4, 8, 16, 32, 64, 128, 256, 512],
                o = (0, n.qU)({
                    position: !0,
                    zIndex: { property: "zIndex", scale: "zIndices" },
                    top: { property: "top", scale: "space", defaultScale: a },
                    right: {
                        property: "right",
                        scale: "space",
                        defaultScale: a,
                    },
                    bottom: {
                        property: "bottom",
                        scale: "space",
                        defaultScale: a,
                    },
                    left: { property: "left", scale: "space", defaultScale: a },
                });
            let i = o;
        },
        60281: (e, t, r) => {
            r.d(t, { M: () => s });
            var n = r(74848),
                a = r(21728),
                o = r(81960);
            let i = {
                404: "Didn\u2019t find anything here!",
                500: "Looks like something went wrong!",
            };
            function s(e) {
                let t,
                    r,
                    s,
                    l = (0, a.c)(7),
                    { httpStatus: u, type: c } = e,
                    d =
                        "fetchError" === c
                            ? "Looks like network is down!"
                            : i[u || 500];
                return (
                    l[0] !== u
                        ? ((t = u
                              ? (0, n.jsx)("div", {
                                    className:
                                        "ErrorPage-module__Status--ITNSj",
                                    children: u,
                                })
                              : null),
                          (l[0] = u),
                          (l[1] = t))
                        : (t = l[1]),
                    l[2] !== d
                        ? ((r = (0, n.jsx)("div", {
                              className: "ErrorPage-module__Message--CAZL0",
                              children: d,
                          })),
                          (l[2] = d),
                          (l[3] = r))
                        : (r = l[3]),
                    l[4] !== t || l[5] !== r
                        ? ((s = (0, n.jsxs)(o.A, {
                              as: "h1",
                              tabIndex: -1,
                              className: "ErrorPage-module__Heading--ucgNq",
                              children: ["Error", t, r],
                          })),
                          (l[4] = t),
                          (l[5] = r),
                          (l[6] = s))
                        : (s = l[6]),
                    s
                );
            }
            try {
                s.displayName || (s.displayName = "ErrorPage");
            } catch {}
        },
        61526: (e, t, r) => {
            r.d(t, {
                AO: () => m,
                B6: () => j,
                BV: () => t$,
                C5: () => tD,
                Ew: () => tS,
                FE: () => tb,
                Gy: () => ra,
                Ix: () => tM,
                K: () => rc,
                KP: () => tx,
                Kd: () => t8,
                LG: () => tw,
                N_: () => t9,
                OA: () => rt,
                PI: () => tB,
                RQ: () => tr,
                Ri: () => e9,
                Ye: () => tu,
                Ys: () => t6,
                Zp: () => to,
                _3: () => e3,
                cq: () => tv,
                g: () => ts,
                k2: () => re,
                o1: () => L,
                ok: () => ro,
                pX: () => B,
                pg: () => tL,
                qh: () => tI,
                r5: () => tR,
                rc: () => l,
                sv: () => tO,
                tW: () => N,
                ue: () => E,
                wQ: () => tt,
                x$: () => tl,
                zR: () => c,
                zy: () => te,
            });
            var n,
                a,
                o = r(96540),
                i = (e) => {
                    throw TypeError(e);
                },
                s = (e, t, r) => (
                    t.has(e) || i("Cannot read from private field"),
                    r ? r.call(e) : t.get(e)
                ),
                l =
                    (((n = l || {}).Pop = "POP"),
                    (n.Push = "PUSH"),
                    (n.Replace = "REPLACE"),
                    n),
                u = "popstate";
            function c(e = {}) {
                return (function (e, t, r, n = {}) {
                    let { window: a = document.defaultView, v5Compat: o = !1 } =
                            n,
                        i = a.history,
                        s = "POP",
                        l = null,
                        c = d();
                    function d() {
                        return (i.state || { idx: null }).idx;
                    }
                    function h() {
                        s = "POP";
                        let e = d(),
                            t = null == e ? null : e - c;
                        ((c = e),
                            l &&
                                l({
                                    action: s,
                                    location: m.location,
                                    delta: t,
                                }));
                    }
                    null == c &&
                        ((c = 0), i.replaceState({ ...i.state, idx: c }, ""));
                    let m = {
                        get action() {
                            return s;
                        },
                        get location() {
                            return e(a, i);
                        },
                        listen(e) {
                            if (l)
                                throw Error(
                                    "A history only accepts one active listener"
                                );
                            return (
                                a.addEventListener(u, h),
                                (l = e),
                                () => {
                                    (a.removeEventListener(u, h), (l = null));
                                }
                            );
                        },
                        createHref: (e) => t(a, e),
                        createURL: function (e) {
                            return g(e);
                        },
                        encodeLocation(e) {
                            let t = g(e);
                            return {
                                pathname: t.pathname,
                                search: t.search,
                                hash: t.hash,
                            };
                        },
                        push: function (e, t) {
                            s = "PUSH";
                            let r = f(m.location, e, t);
                            let n = p(r, (c = d() + 1)),
                                u = m.createHref(r);
                            try {
                                i.pushState(n, "", u);
                            } catch (e) {
                                if (
                                    e instanceof DOMException &&
                                    "DataCloneError" === e.name
                                )
                                    throw e;
                                a.location.assign(u);
                            }
                            o &&
                                l &&
                                l({
                                    action: s,
                                    location: m.location,
                                    delta: 1,
                                });
                        },
                        replace: function (e, t) {
                            s = "REPLACE";
                            let r = f(m.location, e, t);
                            let n = p(r, (c = d())),
                                a = m.createHref(r);
                            (i.replaceState(n, "", a),
                                o &&
                                    l &&
                                    l({
                                        action: s,
                                        location: m.location,
                                        delta: 0,
                                    }));
                        },
                        go: (e) => i.go(e),
                    };
                    return m;
                })(
                    function (e, t) {
                        let { pathname: r, search: n, hash: a } = e.location;
                        return f(
                            "",
                            { pathname: r, search: n, hash: a },
                            (t.state && t.state.usr) || null,
                            (t.state && t.state.key) || "default"
                        );
                    },
                    function (e, t) {
                        return "string" == typeof t ? t : m(t);
                    },
                    null,
                    e
                );
            }
            function d(e, t) {
                if (!1 === e || null == e) throw Error(t);
            }
            function h(e, t) {
                if (!e) {
                    "undefined" != typeof console && console.warn(t);
                    try {
                        throw Error(t);
                    } catch (e) {}
                }
            }
            function p(e, t) {
                return { usr: e.state, key: e.key, idx: t };
            }
            function f(e, t, r = null, n) {
                return {
                    pathname: "string" == typeof e ? e : e.pathname,
                    search: "",
                    hash: "",
                    ...("string" == typeof t ? y(t) : t),
                    state: r,
                    key:
                        (t && t.key) ||
                        n ||
                        Math.random().toString(36).substring(2, 10),
                };
            }
            function m({ pathname: e = "/", search: t = "", hash: r = "" }) {
                return (
                    t && "?" !== t && (e += "?" === t.charAt(0) ? t : "?" + t),
                    r && "#" !== r && (e += "#" === r.charAt(0) ? r : "#" + r),
                    e
                );
            }
            function y(e) {
                let t = {};
                if (e) {
                    let r = e.indexOf("#");
                    r >= 0 &&
                        ((t.hash = e.substring(r)), (e = e.substring(0, r)));
                    let n = e.indexOf("?");
                    (n >= 0 &&
                        ((t.search = e.substring(n)), (e = e.substring(0, n))),
                        e && (t.pathname = e));
                }
                return t;
            }
            function g(e, t = !1) {
                let r = "http://localhost";
                ("undefined" != typeof window &&
                    (r =
                        "null" !== window.location.origin
                            ? window.location.origin
                            : window.location.href),
                    d(
                        r,
                        "No window.location.(origin|href) available to create URL"
                    ));
                let n = "string" == typeof e ? e : m(e);
                return (
                    (n = n.replace(/ $/, "%20")),
                    !t && n.startsWith("//") && (n = r + n),
                    new URL(n, r)
                );
            }
            var v = class {
                constructor(e) {
                    if (
                        (((e, t, r) =>
                            t.has(e)
                                ? i(
                                      "Cannot add the same private member more than once"
                                  )
                                : t instanceof WeakSet
                                  ? t.add(e)
                                  : t.set(e, r))(this, a, new Map()),
                        e)
                    )
                        for (let [t, r] of e) this.set(t, r);
                }
                get(e) {
                    if (s(this, a).has(e)) return s(this, a).get(e);
                    if (void 0 !== e.defaultValue) return e.defaultValue;
                    throw Error("No value found for context");
                }
                set(e, t) {
                    s(this, a).set(e, t);
                }
            };
            a = new WeakMap();
            var b = new Set([
                    "lazy",
                    "caseSensitive",
                    "path",
                    "id",
                    "index",
                    "children",
                ]),
                w = new Set([
                    "lazy",
                    "caseSensitive",
                    "path",
                    "id",
                    "index",
                    "middleware",
                    "children",
                ]);
            function S(e, t, r = [], n = {}, a = !1) {
                return e.map((e, o) => {
                    let i = [...r, String(o)],
                        s = "string" == typeof e.id ? e.id : i.join("-");
                    if (
                        (d(
                            !0 !== e.index || !e.children,
                            "Cannot specify children on an index route"
                        ),
                        d(
                            a || !n[s],
                            `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`
                        ),
                        !0 === e.index)
                    ) {
                        let r = { ...e, id: s };
                        return ((n[s] = R(r, t(r))), r);
                    }
                    {
                        let r = { ...e, id: s, children: void 0 };
                        return (
                            (n[s] = R(r, t(r))),
                            e.children &&
                                (r.children = S(e.children, t, i, n, a)),
                            r
                        );
                    }
                });
            }
            function R(e, t) {
                return Object.assign(e, {
                    ...t,
                    ...("object" == typeof t.lazy && null != t.lazy
                        ? { lazy: { ...e.lazy, ...t.lazy } }
                        : {}),
                });
            }
            function E(e, t, r = "/") {
                return x(e, t, r, !1);
            }
            function x(e, t, r, n) {
                let a = A(("string" == typeof t ? y(t) : t).pathname || "/", r);
                if (null == a) return null;
                let o = (function e(t, r = [], n = [], a = "", o = !1) {
                    let i = (t, i, s = o, l) => {
                        var u, c;
                        let h,
                            p,
                            f = {
                                relativePath: void 0 === l ? t.path || "" : l,
                                caseSensitive: !0 === t.caseSensitive,
                                childrenIndex: i,
                                route: t,
                            };
                        if (f.relativePath.startsWith("/")) {
                            if (!f.relativePath.startsWith(a) && s) return;
                            (d(
                                f.relativePath.startsWith(a),
                                `Absolute route path "${f.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
                            ),
                                (f.relativePath = f.relativePath.slice(
                                    a.length
                                )));
                        }
                        let m = M([a, f.relativePath]),
                            y = n.concat(f);
                        (t.children &&
                            t.children.length > 0 &&
                            (d(
                                !0 !== t.index,
                                `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
                            ),
                            e(t.children, r, y, m, s)),
                            (null != t.path || t.index) &&
                                r.push({
                                    path: m,
                                    score:
                                        ((u = m),
                                        (c = t.index),
                                        (p = (h = u.split("/")).length),
                                        h.some(_) && (p += -2),
                                        c && (p += 2),
                                        h
                                            .filter((e) => !_(e))
                                            .reduce(
                                                (e, t) =>
                                                    e +
                                                    (k.test(t)
                                                        ? 3
                                                        : "" === t
                                                          ? 1
                                                          : 10),
                                                p
                                            )),
                                    routesMeta: y,
                                }));
                    };
                    return (
                        t.forEach((e, t) => {
                            if ("" !== e.path && e.path?.includes("?"))
                                for (let r of (function e(t) {
                                    let r = t.split("/");
                                    if (0 === r.length) return [];
                                    let [n, ...a] = r,
                                        o = n.endsWith("?"),
                                        i = n.replace(/\?$/, "");
                                    if (0 === a.length)
                                        return o ? [i, ""] : [i];
                                    let s = e(a.join("/")),
                                        l = [];
                                    return (
                                        l.push(
                                            ...s.map((e) =>
                                                "" === e ? i : [i, e].join("/")
                                            )
                                        ),
                                        o && l.push(...s),
                                        l.map((e) =>
                                            t.startsWith("/") && "" === e
                                                ? "/"
                                                : e
                                        )
                                    );
                                })(e.path))
                                    i(e, t, !0, r);
                            else i(e, t);
                        }),
                        r
                    );
                })(e);
                o.sort((e, t) => {
                    var r, n;
                    return e.score !== t.score
                        ? t.score - e.score
                        : ((r = e.routesMeta.map((e) => e.childrenIndex)),
                          (n = t.routesMeta.map((e) => e.childrenIndex)),
                          r.length === n.length &&
                          r.slice(0, -1).every((e, t) => e === n[t])
                              ? r[r.length - 1] - n[n.length - 1]
                              : 0);
                });
                let i = null;
                for (let e = 0; null == i && e < o.length; ++e) {
                    let t = P(a);
                    i = (function (e, t, r = !1) {
                        let { routesMeta: n } = e,
                            a = {},
                            o = "/",
                            i = [];
                        for (let e = 0; e < n.length; ++e) {
                            let s = n[e],
                                l = e === n.length - 1,
                                u = "/" === o ? t : t.slice(o.length) || "/",
                                c = j(
                                    {
                                        path: s.relativePath,
                                        caseSensitive: s.caseSensitive,
                                        end: l,
                                    },
                                    u
                                ),
                                d = s.route;
                            if (
                                (!c &&
                                    l &&
                                    r &&
                                    !n[n.length - 1].route.index &&
                                    (c = j(
                                        {
                                            path: s.relativePath,
                                            caseSensitive: s.caseSensitive,
                                            end: !1,
                                        },
                                        u
                                    )),
                                !c)
                            )
                                return null;
                            (Object.assign(a, c.params),
                                i.push({
                                    params: a,
                                    pathname: M([o, c.pathname]),
                                    pathnameBase: $(M([o, c.pathnameBase])),
                                    route: d,
                                }),
                                "/" !== c.pathnameBase &&
                                    (o = M([o, c.pathnameBase])));
                        }
                        return i;
                    })(o[e], t, n);
                }
                return i;
            }
            function C(e, t) {
                let { route: r, pathname: n, params: a } = e;
                return {
                    id: r.id,
                    pathname: n,
                    params: a,
                    data: t[r.id],
                    loaderData: t[r.id],
                    handle: r.handle,
                };
            }
            var k = /^:[\w-]+$/,
                _ = (e) => "*" === e;
            function N(e, t = {}) {
                let r = e;
                r.endsWith("*") &&
                    "*" !== r &&
                    !r.endsWith("/*") &&
                    (h(
                        !1,
                        `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`
                    ),
                    (r = r.replace(/\*$/, "/*")));
                let n = r.startsWith("/") ? "/" : "",
                    a = (e) =>
                        null == e ? "" : "string" == typeof e ? e : String(e);
                return (
                    n +
                    r
                        .split(/\/+/)
                        .map((e, r, n) => {
                            if (r === n.length - 1 && "*" === e)
                                return a(t["*"]);
                            let o = e.match(/^:([\w-]+)(\??)$/);
                            if (o) {
                                let [, e, r] = o,
                                    n = t[e];
                                return (
                                    d(
                                        "?" === r || null != n,
                                        `Missing ":${e}" param`
                                    ),
                                    encodeURIComponent(a(n))
                                );
                            }
                            return e.replace(/\?$/g, "");
                        })
                        .filter((e) => !!e)
                        .join("/")
                );
            }
            function j(e, t) {
                "string" == typeof e &&
                    (e = { path: e, caseSensitive: !1, end: !0 });
                let [r, n] = (function (e, t = !1, r = !0) {
                        h(
                            "*" === e || !e.endsWith("*") || e.endsWith("/*"),
                            `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
                        );
                        let n = [],
                            a =
                                "^" +
                                e
                                    .replace(/\/*\*?$/, "")
                                    .replace(/^\/*/, "/")
                                    .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                                    .replace(
                                        /\/:([\w-]+)(\?)?/g,
                                        (e, t, r) => (
                                            n.push({
                                                paramName: t,
                                                isOptional: null != r,
                                            }),
                                            r ? "/?([^\\/]+)?" : "/([^\\/]+)"
                                        )
                                    )
                                    .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
                        return (
                            e.endsWith("*")
                                ? (n.push({ paramName: "*" }),
                                  (a +=
                                      "*" === e || "/*" === e
                                          ? "(.*)$"
                                          : "(?:\\/(.+)|\\/*)$"))
                                : r
                                  ? (a += "\\/*$")
                                  : "" !== e &&
                                    "/" !== e &&
                                    (a += "(?:(?=\\/|$))"),
                            [new RegExp(a, t ? void 0 : "i"), n]
                        );
                    })(e.path, e.caseSensitive, e.end),
                    a = t.match(r);
                if (!a) return null;
                let o = a[0],
                    i = o.replace(/(.)\/+$/, "$1"),
                    s = a.slice(1);
                return {
                    params: n.reduce(
                        (e, { paramName: t, isOptional: r }, n) => {
                            if ("*" === t) {
                                let e = s[n] || "";
                                i = o
                                    .slice(0, o.length - e.length)
                                    .replace(/(.)\/+$/, "$1");
                            }
                            let a = s[n];
                            return (
                                r && !a
                                    ? (e[t] = void 0)
                                    : (e[t] = (a || "").replace(/%2F/g, "/")),
                                e
                            );
                        },
                        {}
                    ),
                    pathname: o,
                    pathnameBase: i,
                    pattern: e,
                };
            }
            function P(e) {
                try {
                    return e
                        .split("/")
                        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
                        .join("/");
                } catch (t) {
                    return (
                        h(
                            !1,
                            `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
                        ),
                        e
                    );
                }
            }
            function A(e, t) {
                if ("/" === t) return e;
                if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
                let r = t.endsWith("/") ? t.length - 1 : t.length,
                    n = e.charAt(r);
                return n && "/" !== n ? null : e.slice(r) || "/";
            }
            function L(e, t = "/") {
                var r;
                let n,
                    {
                        pathname: a,
                        search: o = "",
                        hash: i = "",
                    } = "string" == typeof e ? y(e) : e;
                return {
                    pathname: a
                        ? a.startsWith("/")
                            ? a
                            : ((r = a),
                              (n = t.replace(/\/+$/, "").split("/")),
                              r.split("/").forEach((e) => {
                                  ".." === e
                                      ? n.length > 1 && n.pop()
                                      : "." !== e && n.push(e);
                              }),
                              n.length > 1 ? n.join("/") : "/")
                        : t,
                    search: z(o),
                    hash: W(i),
                };
            }
            function T(e, t, r, n) {
                return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
            }
            function D(e) {
                return e.filter(
                    (e, t) =>
                        0 === t || (e.route.path && e.route.path.length > 0)
                );
            }
            function O(e) {
                let t = D(e);
                return t.map((e, r) =>
                    r === t.length - 1 ? e.pathname : e.pathnameBase
                );
            }
            function I(e, t, r, n = !1) {
                let a, o;
                "string" == typeof e
                    ? (a = y(e))
                    : (d(
                          !(a = { ...e }).pathname || !a.pathname.includes("?"),
                          T("?", "pathname", "search", a)
                      ),
                      d(
                          !a.pathname || !a.pathname.includes("#"),
                          T("#", "pathname", "hash", a)
                      ),
                      d(
                          !a.search || !a.search.includes("#"),
                          T("#", "search", "hash", a)
                      ));
                let i = "" === e || "" === a.pathname,
                    s = i ? "/" : a.pathname;
                if (null == s) o = r;
                else {
                    let e = t.length - 1;
                    if (!n && s.startsWith("..")) {
                        let t = s.split("/");
                        for (; ".." === t[0]; ) (t.shift(), (e -= 1));
                        a.pathname = t.join("/");
                    }
                    o = e >= 0 ? t[e] : "/";
                }
                let l = L(a, o),
                    u = s && "/" !== s && s.endsWith("/"),
                    c = (i || "." === s) && r.endsWith("/");
                return (
                    !l.pathname.endsWith("/") &&
                        (u || c) &&
                        (l.pathname += "/"),
                    l
                );
            }
            var M = (e) => e.join("/").replace(/\/\/+/g, "/"),
                $ = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
                z = (e) =>
                    e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "",
                W = (e) =>
                    e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "",
                U = class {
                    constructor(e, t, r, n = !1) {
                        ((this.status = e),
                            (this.statusText = t || ""),
                            (this.internal = n),
                            r instanceof Error
                                ? ((this.data = r.toString()), (this.error = r))
                                : (this.data = r));
                    }
                };
            function B(e) {
                return (
                    null != e &&
                    "number" == typeof e.status &&
                    "string" == typeof e.statusText &&
                    "boolean" == typeof e.internal &&
                    "data" in e
                );
            }
            function F(e) {
                return (
                    e.filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/"
                );
            }
            var H = Symbol("Uninstrumented");
            function q(e, t, r) {
                return 0 === e.length
                    ? null
                    : async (...n) => {
                          let a = await Y(
                              e,
                              r(...n),
                              () => t(...n),
                              e.length - 1
                          );
                          if ("error" === a.type) throw a.value;
                          return a.value;
                      };
            }
            async function Y(e, t, r, n) {
                let a,
                    o = e[n];
                if (o) {
                    let i,
                        s = async () =>
                            (i
                                ? console.error(
                                      "You cannot call instrumented handlers more than once"
                                  )
                                : (i = Y(e, t, r, n - 1)),
                            d((a = await i), "Expected a result"),
                            "error" === a.type && a.value instanceof Error)
                                ? { status: "error", error: a.value }
                                : { status: "success", error: void 0 };
                    try {
                        await o(s, t);
                    } catch (e) {
                        console.error(
                            "An instrumentation function threw an error:",
                            e
                        );
                    }
                    (i || (await s()), await i);
                } else
                    try {
                        let e = await r();
                        a = { type: "success", value: e };
                    } catch (e) {
                        a = { type: "error", value: e };
                    }
                return (
                    a || {
                        type: "error",
                        value: Error(
                            "No result assigned in instrumentation chain."
                        ),
                    }
                );
            }
            function V(e) {
                var t;
                let {
                    request: r,
                    context: n,
                    params: a,
                    unstable_pattern: o,
                } = e;
                return {
                    request: {
                        method: (t = r).method,
                        url: t.url,
                        headers: { get: (...e) => t.headers.get(...e) },
                    },
                    params: { ...a },
                    unstable_pattern: o,
                    context: (function (e) {
                        if (
                            !(function (e) {
                                if (null === e || "object" != typeof e)
                                    return !1;
                                let t = Object.getPrototypeOf(e);
                                return (
                                    t === Object.prototype ||
                                    null === t ||
                                    Object.getOwnPropertyNames(t)
                                        .sort()
                                        .join("\0") === G
                                );
                            })(e)
                        )
                            return { get: (t) => e.get(t) };
                        {
                            let t = { ...e };
                            return (Object.freeze(t), t);
                        }
                    })(n),
                };
            }
            function J(e, t) {
                return {
                    currentUrl: m(e.state.location),
                    ...("formMethod" in t ? { formMethod: t.formMethod } : {}),
                    ...("formEncType" in t
                        ? { formEncType: t.formEncType }
                        : {}),
                    ...("formData" in t ? { formData: t.formData } : {}),
                    ...("body" in t ? { body: t.body } : {}),
                };
            }
            var G = Object.getOwnPropertyNames(Object.prototype)
                    .sort()
                    .join("\0"),
                X = ["POST", "PUT", "PATCH", "DELETE"],
                K = new Set(X),
                Q = new Set(["GET", ...X]),
                Z = new Set([301, 302, 303, 307, 308]),
                ee = new Set([307, 308]),
                et = {
                    state: "idle",
                    location: void 0,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                },
                er = {
                    state: "idle",
                    data: void 0,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                },
                en = {
                    state: "unblocked",
                    proceed: void 0,
                    reset: void 0,
                    location: void 0,
                },
                ea = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                eo = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
                ei = "remix-router-transitions",
                es = Symbol("ResetLoaderData");
            function el(e, t, r, n, a, o) {
                let i, s;
                if (a) {
                    for (let e of ((i = []), t))
                        if ((i.push(e), e.route.id === a)) {
                            s = e;
                            break;
                        }
                } else ((i = t), (s = t[t.length - 1]));
                let l = I(
                    n || ".",
                    O(i),
                    A(e.pathname, r) || e.pathname,
                    "path" === o
                );
                if (
                    (null == n && ((l.search = e.search), (l.hash = e.hash)),
                    (null == n || "" === n || "." === n) && s)
                ) {
                    let e = eJ(l.search);
                    if (s.route.index && !e)
                        l.search = l.search
                            ? l.search.replace(/^\?/, "?index&")
                            : "?index";
                    else if (!s.route.index && e) {
                        let e = new URLSearchParams(l.search),
                            t = e.getAll("index");
                        (e.delete("index"),
                            t
                                .filter((e) => e)
                                .forEach((t) => e.append("index", t)));
                        let r = e.toString();
                        l.search = r ? `?${r}` : "";
                    }
                }
                return (
                    "/" !== r &&
                        (l.pathname = (function ({ basename: e, pathname: t }) {
                            return "/" === t ? e : M([e, t]);
                        })({ basename: r, pathname: l.pathname })),
                    m(l)
                );
            }
            function eu(e, t, r) {
                var n;
                let a, o;
                if (
                    !r ||
                    !(
                        null != r &&
                        (("formData" in r && null != r.formData) ||
                            ("body" in r && void 0 !== r.body))
                    )
                )
                    return { path: t };
                if (
                    r.formMethod &&
                    ((n = r.formMethod), !Q.has(n.toUpperCase()))
                )
                    return {
                        path: t,
                        error: ez(405, { method: r.formMethod }),
                    };
                let i = () => ({
                        path: t,
                        error: ez(400, { type: "invalid-body" }),
                    }),
                    s = (r.formMethod || "get").toUpperCase(),
                    l = eU(t);
                if (void 0 !== r.body) {
                    if ("text/plain" === r.formEncType) {
                        if (!eV(s)) return i();
                        let e =
                            "string" == typeof r.body
                                ? r.body
                                : r.body instanceof FormData ||
                                    r.body instanceof URLSearchParams
                                  ? Array.from(r.body.entries()).reduce(
                                        (e, [t, r]) => `${e}${t}=${r}
`,
                                        ""
                                    )
                                  : String(r.body);
                        return {
                            path: t,
                            submission: {
                                formMethod: s,
                                formAction: l,
                                formEncType: r.formEncType,
                                formData: void 0,
                                json: void 0,
                                text: e,
                            },
                        };
                    } else if ("application/json" === r.formEncType) {
                        if (!eV(s)) return i();
                        try {
                            let e =
                                "string" == typeof r.body
                                    ? JSON.parse(r.body)
                                    : r.body;
                            return {
                                path: t,
                                submission: {
                                    formMethod: s,
                                    formAction: l,
                                    formEncType: r.formEncType,
                                    formData: void 0,
                                    json: e,
                                    text: void 0,
                                },
                            };
                        } catch (e) {
                            return i();
                        }
                    }
                }
                if (
                    (d(
                        "function" == typeof FormData,
                        "FormData is not available in this environment"
                    ),
                    r.formData)
                )
                    ((a = eL(r.formData)), (o = r.formData));
                else if (r.body instanceof FormData)
                    ((a = eL(r.body)), (o = r.body));
                else if (r.body instanceof URLSearchParams)
                    o = eT((a = r.body));
                else if (null == r.body)
                    ((a = new URLSearchParams()), (o = new FormData()));
                else
                    try {
                        ((a = new URLSearchParams(r.body)), (o = eT(a)));
                    } catch (e) {
                        return i();
                    }
                let u = {
                    formMethod: s,
                    formAction: l,
                    formEncType:
                        (r && r.formEncType) ||
                        "application/x-www-form-urlencoded",
                    formData: o,
                    json: void 0,
                    text: void 0,
                };
                if (eV(u.formMethod)) return { path: t, submission: u };
                let c = y(t);
                return (
                    e && c.search && eJ(c.search) && a.append("index", ""),
                    (c.search = `?${a}`),
                    { path: m(c), submission: u }
                );
            }
            function ec(
                e,
                t,
                r,
                n,
                a,
                o,
                i,
                s,
                l,
                u,
                c,
                d,
                h,
                p,
                f,
                m,
                y,
                g,
                v,
                b
            ) {
                let w,
                    S = b ? (eF(b[1]) ? b[1].error : b[1].data) : void 0,
                    R = a.createURL(o.location),
                    x = a.createURL(l);
                if (c && o.errors) {
                    let e = Object.keys(o.errors)[0];
                    w = i.findIndex((t) => t.route.id === e);
                } else if (b && eF(b[1])) {
                    let e = b[0];
                    w = i.findIndex((t) => t.route.id === e) - 1;
                }
                let C = b ? b[1].statusCode : void 0,
                    k = C && C >= 400,
                    _ = {
                        currentUrl: R,
                        currentParams: o.matches[0]?.params || {},
                        nextUrl: x,
                        nextParams: i[0].params,
                        ...s,
                        actionResult: S,
                        actionStatus: C,
                    },
                    N = F(i.map((e) => e.route.path)),
                    j = i.map((a, i) => {
                        var s, l, h, p, f;
                        let m,
                            y,
                            g,
                            { route: v } = a,
                            b = null;
                        if (
                            (null != w && i > w
                                ? (b = !1)
                                : v.lazy
                                  ? (b = !0)
                                  : ed(v)
                                    ? c
                                        ? (b = eh(v, o.loaderData, o.errors))
                                        : ((s = o.loaderData),
                                          (l = o.matches[i]),
                                          (h = a),
                                          (m = !l || h.route.id !== l.route.id),
                                          (y = !s.hasOwnProperty(h.route.id)),
                                          (m || y) && (b = !0))
                                    : (b = !1),
                            null !== b)
                        )
                            return ex(r, n, e, N, a, u, t, b);
                        let S =
                                !k &&
                                (d ||
                                    R.pathname + R.search ===
                                        x.pathname + x.search ||
                                    R.search !== x.search ||
                                    ((p = o.matches[i]),
                                    (f = a),
                                    (g = p.route.path),
                                    p.pathname !== f.pathname ||
                                        (null != g &&
                                            g.endsWith("*") &&
                                            p.params["*"] !== f.params["*"]))),
                            E = { ..._, defaultShouldRevalidate: S },
                            C = ep(a, E);
                        return ex(r, n, e, N, a, u, t, C, E);
                    }),
                    P = [];
                return (
                    f.forEach((e, s) => {
                        if (
                            c ||
                            !i.some((t) => t.route.id === e.routeId) ||
                            p.has(s)
                        )
                            return;
                        let l = o.fetchers.get(s),
                            f = l && "idle" !== l.state && void 0 === l.data,
                            b = E(y, e.path, g);
                        if (!b) {
                            if (v && f) return;
                            P.push({
                                key: s,
                                routeId: e.routeId,
                                path: e.path,
                                matches: null,
                                match: null,
                                request: null,
                                controller: null,
                            });
                            return;
                        }
                        if (m.has(s)) return;
                        let w = eG(b, e.path),
                            S = new AbortController(),
                            R = eA(a, e.path, S.signal),
                            x = null;
                        if (h.has(s))
                            (h.delete(s), (x = eC(r, n, R, b, w, u, t)));
                        else if (f) d && (x = eC(r, n, R, b, w, u, t));
                        else {
                            let e = { ..._, defaultShouldRevalidate: !k && d };
                            ep(w, e) && (x = eC(r, n, R, b, w, u, t, e));
                        }
                        x &&
                            P.push({
                                key: s,
                                routeId: e.routeId,
                                path: e.path,
                                matches: x,
                                match: w,
                                request: R,
                                controller: S,
                            });
                    }),
                    { dsMatches: j, revalidatingFetchers: P }
                );
            }
            function ed(e) {
                return (
                    null != e.loader ||
                    (null != e.middleware && e.middleware.length > 0)
                );
            }
            function eh(e, t, r) {
                if (e.lazy) return !0;
                if (!ed(e)) return !1;
                let n = null != t && e.id in t,
                    a = null != r && void 0 !== r[e.id];
                return (
                    (!!n || !a) &&
                    (("function" == typeof e.loader &&
                        !0 === e.loader.hydrate) ||
                        (!n && !a))
                );
            }
            function ep(e, t) {
                if (e.route.shouldRevalidate) {
                    let r = e.route.shouldRevalidate(t);
                    if ("boolean" == typeof r) return r;
                }
                return t.defaultShouldRevalidate;
            }
            function ef(e, t, r, n, a, o) {
                let i;
                if (e) {
                    let t = n[e];
                    (d(
                        t,
                        `No route found to patch children into: routeId = ${e}`
                    ),
                        t.children || (t.children = []),
                        (i = t.children));
                } else i = r;
                let s = [],
                    l = [];
                if (
                    (t.forEach((e) => {
                        let t = i.find((t) =>
                            (function e(t, r) {
                                return (
                                    ("id" in t && "id" in r && t.id === r.id) ||
                                    (t.index === r.index &&
                                        t.path === r.path &&
                                        t.caseSensitive === r.caseSensitive &&
                                        (((!t.children ||
                                            0 === t.children.length) &&
                                            (!r.children ||
                                                0 === r.children.length)) ||
                                            t.children.every((t, n) =>
                                                r.children?.some((r) => e(t, r))
                                            )))
                                );
                            })(e, t)
                        );
                        t
                            ? l.push({ existingRoute: t, newRoute: e })
                            : s.push(e);
                    }),
                    s.length > 0)
                ) {
                    let t = S(
                        s,
                        a,
                        [e || "_", "patch", String(i?.length || "0")],
                        n
                    );
                    i.push(...t);
                }
                if (o && l.length > 0)
                    for (let e = 0; e < l.length; e++) {
                        let { existingRoute: t, newRoute: r } = l[e],
                            [n] = S([r], a, [], {}, !0);
                        Object.assign(t, {
                            element: n.element ? n.element : t.element,
                            errorElement: n.errorElement
                                ? n.errorElement
                                : t.errorElement,
                            hydrateFallbackElement: n.hydrateFallbackElement
                                ? n.hydrateFallbackElement
                                : t.hydrateFallbackElement,
                        });
                    }
            }
            var em = new WeakMap(),
                ey = ({
                    key: e,
                    route: t,
                    manifest: r,
                    mapRouteProperties: n,
                }) => {
                    let a = r[t.id];
                    if (
                        (d(a, "No route found in manifest"),
                        !a.lazy || "object" != typeof a.lazy)
                    )
                        return;
                    let o = a.lazy[e];
                    if (!o) return;
                    let i = em.get(a);
                    i || ((i = {}), em.set(a, i));
                    let s = i[e];
                    if (s) return s;
                    let l = (async () => {
                        let t = b.has(e),
                            r = void 0 !== a[e] && "hasErrorBoundary" !== e;
                        if (t)
                            (h(
                                !t,
                                "Route property " +
                                    e +
                                    " is not a supported lazy route property. This property will be ignored."
                            ),
                                (i[e] = Promise.resolve()));
                        else if (r)
                            h(
                                !1,
                                `Route "${a.id}" has a static property "${e}" defined. The lazy property will be ignored.`
                            );
                        else {
                            let t = await o();
                            null != t &&
                                (Object.assign(a, { [e]: t }),
                                Object.assign(a, n(a)));
                        }
                        "object" == typeof a.lazy &&
                            ((a.lazy[e] = void 0),
                            Object.values(a.lazy).every((e) => void 0 === e) &&
                                (a.lazy = void 0));
                    })();
                    return ((i[e] = l), l);
                },
                eg = new WeakMap();
            async function ev(e) {
                let t = e.matches.filter((e) => e.shouldLoad),
                    r = {};
                return (
                    (await Promise.all(t.map((e) => e.resolve()))).forEach(
                        (e, n) => {
                            r[t[n].route.id] = e;
                        }
                    ),
                    r
                );
            }
            async function eb(e) {
                return e.matches.some((e) => e.route.middleware)
                    ? ew(e, () => ev(e))
                    : ev(e);
            }
            function ew(e, t) {
                return eS(
                    e,
                    t,
                    (e) => e,
                    eB,
                    function (t, r, n) {
                        if (n)
                            return Promise.resolve(
                                Object.assign(n.value, {
                                    [r]: { type: "error", result: t },
                                })
                            );
                        {
                            let { matches: n } = e,
                                a = Math.min(
                                    Math.max(
                                        n.findIndex((e) => e.route.id === r),
                                        0
                                    ),
                                    Math.max(
                                        n.findIndex((e) =>
                                            e.unstable_shouldCallHandler()
                                        ),
                                        0
                                    )
                                );
                            return Promise.resolve({
                                [eM(n, n[a].route.id).route.id]: {
                                    type: "error",
                                    result: t,
                                },
                            });
                        }
                    }
                );
            }
            async function eS(e, t, r, n, a) {
                let {
                        matches: o,
                        request: i,
                        params: s,
                        context: l,
                        unstable_pattern: u,
                    } = e,
                    c = o.flatMap((e) =>
                        e.route.middleware
                            ? e.route.middleware.map((t) => [e.route.id, t])
                            : []
                    );
                return await eR(
                    { request: i, params: s, context: l, unstable_pattern: u },
                    c,
                    t,
                    r,
                    n,
                    a
                );
            }
            async function eR(e, t, r, n, a, o, i = 0) {
                let s,
                    { request: l } = e;
                if (l.signal.aborted)
                    throw (
                        l.signal.reason ??
                        Error(`Request aborted: ${l.method} ${l.url}`)
                    );
                let u = t[i];
                if (!u) return await r();
                let [c, d] = u,
                    h = async () => {
                        if (s)
                            throw Error(
                                "You may only call `next()` once per middleware"
                            );
                        try {
                            return (s = {
                                value: await eR(e, t, r, n, a, o, i + 1),
                            }).value;
                        } catch (e) {
                            return (s = { value: await o(e, c, s) }).value;
                        }
                    };
                try {
                    let t = await d(e, h),
                        r = null != t ? n(t) : void 0;
                    if (a(r)) return r;
                    if (s) return r ?? s.value;
                    return (s = { value: await h() }).value;
                } catch (e) {
                    return await o(e, c, s);
                }
            }
            function eE(e, t, r, n, a) {
                let o = ey({
                        key: "middleware",
                        route: n.route,
                        manifest: t,
                        mapRouteProperties: e,
                    }),
                    i = (function (e, t, r, n, a) {
                        let o,
                            i = r[e.id];
                        if ((d(i, "No route found in manifest"), !e.lazy))
                            return {
                                lazyRoutePromise: void 0,
                                lazyHandlerPromise: void 0,
                            };
                        if ("function" == typeof e.lazy) {
                            let t = eg.get(i);
                            if (t)
                                return {
                                    lazyRoutePromise: t,
                                    lazyHandlerPromise: t,
                                };
                            let r = (async () => {
                                d(
                                    "function" == typeof e.lazy,
                                    "No lazy route function found"
                                );
                                let t = await e.lazy(),
                                    r = {};
                                for (let e in t) {
                                    let n = t[e];
                                    if (void 0 === n) continue;
                                    let a = w.has(e),
                                        o =
                                            void 0 !== i[e] &&
                                            "hasErrorBoundary" !== e;
                                    a
                                        ? h(
                                              !a,
                                              "Route property " +
                                                  e +
                                                  " is not a supported property to be returned from a lazy route function. This property will be ignored."
                                          )
                                        : o
                                          ? h(
                                                !o,
                                                `Route "${i.id}" has a static property "${e}" defined but its lazy function is also returning a value for this property. The lazy route property "${e}" will be ignored.`
                                            )
                                          : (r[e] = n);
                                }
                                (Object.assign(i, r),
                                    Object.assign(i, {
                                        ...n(i),
                                        lazy: void 0,
                                    }));
                            })();
                            return (
                                eg.set(i, r),
                                r.catch(() => {}),
                                { lazyRoutePromise: r, lazyHandlerPromise: r }
                            );
                        }
                        let s = Object.keys(e.lazy),
                            l = [];
                        for (let i of s) {
                            if (a && a.includes(i)) continue;
                            let s = ey({
                                key: i,
                                route: e,
                                manifest: r,
                                mapRouteProperties: n,
                            });
                            s && (l.push(s), i === t && (o = s));
                        }
                        let u =
                            l.length > 0
                                ? Promise.all(l).then(() => {})
                                : void 0;
                        return (
                            u?.catch(() => {}),
                            o?.catch(() => {}),
                            { lazyRoutePromise: u, lazyHandlerPromise: o }
                        );
                    })(n.route, eV(r.method) ? "action" : "loader", t, e, a);
                return {
                    middleware: o,
                    route: i.lazyRoutePromise,
                    handler: i.lazyHandlerPromise,
                };
            }
            function ex(e, t, r, n, a, o, i, s, l = null) {
                let u = !1,
                    c = eE(e, t, r, a, o);
                return {
                    ...a,
                    _lazyPromises: c,
                    shouldLoad: s,
                    unstable_shouldRevalidateArgs: l,
                    unstable_shouldCallHandler: (e) =>
                        ((u = !0), l)
                            ? "boolean" == typeof e
                                ? ep(a, { ...l, defaultShouldRevalidate: e })
                                : ep(a, l)
                            : s,
                    resolve(e) {
                        let { lazy: t, loader: o, middleware: l } = a.route,
                            d = u || s || (e && !eV(r.method) && (t || o)),
                            h = l && l.length > 0 && !o && !t;
                        return d && (eV(r.method) || !h)
                            ? e_({
                                  request: r,
                                  unstable_pattern: n,
                                  match: a,
                                  lazyHandlerPromise: c?.handler,
                                  lazyRoutePromise: c?.route,
                                  handlerOverride: e,
                                  scopedContext: i,
                              })
                            : Promise.resolve({ type: "data", result: void 0 });
                    },
                };
            }
            function eC(e, t, r, n, a, o, i, s = null) {
                return n.map((l) =>
                    l.route.id !== a.route.id
                        ? {
                              ...l,
                              shouldLoad: !1,
                              unstable_shouldRevalidateArgs: s,
                              unstable_shouldCallHandler: () => !1,
                              _lazyPromises: eE(e, t, r, l, o),
                              resolve: () =>
                                  Promise.resolve({
                                      type: "data",
                                      result: void 0,
                                  }),
                          }
                        : ex(
                              e,
                              t,
                              r,
                              F(n.map((e) => e.route.path)),
                              l,
                              o,
                              i,
                              !0,
                              s
                          )
                );
            }
            async function ek(e, t, r, n, a, o) {
                r.some((e) => e._lazyPromises?.middleware) &&
                    (await Promise.all(
                        r.map((e) => e._lazyPromises?.middleware)
                    ));
                let i = {
                        request: t,
                        unstable_pattern: F(r.map((e) => e.route.path)),
                        params: r[0].params,
                        context: a,
                        matches: r,
                    },
                    s = o
                        ? () => {
                              throw Error(
                                  "You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`"
                              );
                          }
                        : (e) =>
                              ew(i, () =>
                                  e({
                                      ...i,
                                      fetcherKey: n,
                                      runClientMiddleware: () => {
                                          throw Error(
                                              "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler"
                                          );
                                      },
                                  })
                              ),
                    l = await e({
                        ...i,
                        fetcherKey: n,
                        runClientMiddleware: s,
                    });
                try {
                    await Promise.all(
                        r.flatMap((e) => [
                            e._lazyPromises?.handler,
                            e._lazyPromises?.route,
                        ])
                    );
                } catch (e) {}
                return l;
            }
            async function e_({
                request: e,
                unstable_pattern: t,
                match: r,
                lazyHandlerPromise: n,
                lazyRoutePromise: a,
                handlerOverride: o,
                scopedContext: i,
            }) {
                let s,
                    l,
                    u = eV(e.method),
                    c = u ? "action" : "loader",
                    d = (n) => {
                        let a,
                            s = new Promise((e, t) => (a = t));
                        ((l = () => a()),
                            e.signal.addEventListener("abort", l));
                        let u = (a) =>
                            "function" != typeof n
                                ? Promise.reject(
                                      Error(
                                          `You cannot call the handler for a route which defines a boolean "${c}" [routeId: ${r.route.id}]`
                                      )
                                  )
                                : n(
                                      {
                                          request: e,
                                          unstable_pattern: t,
                                          params: r.params,
                                          context: i,
                                      },
                                      ...(void 0 !== a ? [a] : [])
                                  );
                        return Promise.race([
                            (async () => {
                                try {
                                    let e = await (o ? o((e) => u(e)) : u());
                                    return { type: "data", result: e };
                                } catch (e) {
                                    return { type: "error", result: e };
                                }
                            })(),
                            s,
                        ]);
                    };
                try {
                    let t = u ? r.route.action : r.route.loader;
                    if (n || a)
                        if (t) {
                            let e,
                                [r] = await Promise.all([
                                    d(t).catch((t) => {
                                        e = t;
                                    }),
                                    n,
                                    a,
                                ]);
                            if (void 0 !== e) throw e;
                            s = r;
                        } else {
                            await n;
                            let t = u ? r.route.action : r.route.loader;
                            if (t) [s] = await Promise.all([d(t), a]);
                            else {
                                if ("action" !== c)
                                    return { type: "data", result: void 0 };
                                let t = new URL(e.url),
                                    n = t.pathname + t.search;
                                throw ez(405, {
                                    method: e.method,
                                    pathname: n,
                                    routeId: r.route.id,
                                });
                            }
                        }
                    else if (t) s = await d(t);
                    else {
                        let t = new URL(e.url),
                            r = t.pathname + t.search;
                        throw ez(404, { pathname: r });
                    }
                } catch (e) {
                    return { type: "error", result: e };
                } finally {
                    l && e.signal.removeEventListener("abort", l);
                }
                return s;
            }
            async function eN(e) {
                let t = e.headers.get("Content-Type");
                return t && /\bapplication\/json\b/.test(t)
                    ? null == e.body
                        ? null
                        : e.json()
                    : e.text();
            }
            async function ej(e) {
                let { result: t, type: r } = e;
                if (eY(t)) {
                    let e;
                    try {
                        e = await eN(t);
                    } catch (e) {
                        return { type: "error", error: e };
                    }
                    return "error" === r
                        ? {
                              type: "error",
                              error: new U(t.status, t.statusText, e),
                              statusCode: t.status,
                              headers: t.headers,
                          }
                        : {
                              type: "data",
                              data: e,
                              statusCode: t.status,
                              headers: t.headers,
                          };
                }
                if ("error" === r)
                    return eq(t)
                        ? t.data instanceof Error
                            ? {
                                  type: "error",
                                  error: t.data,
                                  statusCode: t.init?.status,
                                  headers: t.init?.headers
                                      ? new Headers(t.init.headers)
                                      : void 0,
                              }
                            : {
                                  type: "error",
                                  error: new U(
                                      t.init?.status || 500,
                                      void 0,
                                      t.data
                                  ),
                                  statusCode: B(t) ? t.status : void 0,
                                  headers: t.init?.headers
                                      ? new Headers(t.init.headers)
                                      : void 0,
                              }
                        : {
                              type: "error",
                              error: t,
                              statusCode: B(t) ? t.status : void 0,
                          };
                return eq(t)
                    ? {
                          type: "data",
                          data: t.data,
                          statusCode: t.init?.status,
                          headers: t.init?.headers
                              ? new Headers(t.init.headers)
                              : void 0,
                      }
                    : { type: "data", data: t };
            }
            function eP(e, t, r) {
                if (ea.test(e)) {
                    let n = new URL(e.startsWith("//") ? t.protocol + e : e),
                        a = null != A(n.pathname, r);
                    if (n.origin === t.origin && a)
                        return n.pathname + n.search + n.hash;
                }
                return e;
            }
            function eA(e, t, r, n) {
                let a = e.createURL(eU(t)).toString(),
                    o = { signal: r };
                if (n && eV(n.formMethod)) {
                    let { formMethod: e, formEncType: t } = n;
                    ((o.method = e.toUpperCase()),
                        "application/json" === t
                            ? ((o.headers = new Headers({ "Content-Type": t })),
                              (o.body = JSON.stringify(n.json)))
                            : "text/plain" === t
                              ? (o.body = n.text)
                              : "application/x-www-form-urlencoded" === t &&
                                  n.formData
                                ? (o.body = eL(n.formData))
                                : (o.body = n.formData));
                }
                return new Request(a, o);
            }
            function eL(e) {
                let t = new URLSearchParams();
                for (let [r, n] of e.entries())
                    t.append(r, "string" == typeof n ? n : n.name);
                return t;
            }
            function eT(e) {
                let t = new FormData();
                for (let [r, n] of e.entries()) t.append(r, n);
                return t;
            }
            function eD(e, t, r, n, a, o) {
                let { loaderData: i, errors: s } = (function (
                    e,
                    t,
                    r,
                    n = !1,
                    a = !1
                ) {
                    let o,
                        i = {},
                        s = null,
                        l = !1,
                        u = {},
                        c = r && eF(r[1]) ? r[1].error : void 0;
                    return (
                        e.forEach((r) => {
                            if (!(r.route.id in t)) return;
                            let h = r.route.id,
                                p = t[h];
                            if (
                                (d(
                                    !eH(p),
                                    "Cannot handle redirect results in processLoaderData"
                                ),
                                eF(p))
                            ) {
                                let t = p.error;
                                if (
                                    (void 0 !== c && ((t = c), (c = void 0)),
                                    (s = s || {}),
                                    a)
                                )
                                    s[h] = t;
                                else {
                                    let r = eM(e, h);
                                    null == s[r.route.id] &&
                                        (s[r.route.id] = t);
                                }
                                (n || (i[h] = es),
                                    l ||
                                        ((l = !0),
                                        (o = B(p.error)
                                            ? p.error.status
                                            : 500)),
                                    p.headers && (u[h] = p.headers));
                            } else
                                ((i[h] = p.data),
                                    p.statusCode &&
                                        200 !== p.statusCode &&
                                        !l &&
                                        (o = p.statusCode),
                                    p.headers && (u[h] = p.headers));
                        }),
                        void 0 !== c &&
                            r &&
                            ((s = { [r[0]]: c }), r[2] && (i[r[2]] = void 0)),
                        {
                            loaderData: i,
                            errors: s,
                            statusCode: o || 200,
                            loaderHeaders: u,
                        }
                    );
                })(t, r, n);
                return (
                    a
                        .filter(
                            (e) =>
                                !e.matches ||
                                e.matches.some((e) => e.shouldLoad)
                        )
                        .forEach((t) => {
                            let { key: r, match: n, controller: a } = t;
                            if (a && a.signal.aborted) return;
                            let i = o[r];
                            if (
                                (d(
                                    i,
                                    "Did not find corresponding fetcher result"
                                ),
                                eF(i))
                            ) {
                                let t = eM(e.matches, n?.route.id);
                                ((s && s[t.route.id]) ||
                                    (s = { ...s, [t.route.id]: i.error }),
                                    e.fetchers.delete(r));
                            } else if (eH(i))
                                d(
                                    !1,
                                    "Unhandled fetcher revalidation redirect"
                                );
                            else {
                                let t = eZ(i.data);
                                e.fetchers.set(r, t);
                            }
                        }),
                    { loaderData: i, errors: s }
                );
            }
            function eO(e, t, r, n) {
                let a = Object.entries(t)
                    .filter(([, e]) => e !== es)
                    .reduce((e, [t, r]) => ((e[t] = r), e), {});
                for (let o of r) {
                    let r = o.route.id;
                    if (
                        (!t.hasOwnProperty(r) &&
                            e.hasOwnProperty(r) &&
                            o.route.loader &&
                            (a[r] = e[r]),
                        n && n.hasOwnProperty(r))
                    )
                        break;
                }
                return a;
            }
            function eI(e) {
                return e
                    ? eF(e[1])
                        ? { actionData: {} }
                        : { actionData: { [e[0]]: e[1].data } }
                    : {};
            }
            function eM(e, t) {
                return (
                    (t
                        ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1)
                        : [...e]
                    )
                        .reverse()
                        .find((e) => !0 === e.route.hasErrorBoundary) || e[0]
                );
            }
            function e$(e) {
                let t =
                    1 === e.length
                        ? e[0]
                        : e.find(
                              (e) => e.index || !e.path || "/" === e.path
                          ) || { id: "__shim-error-route__" };
                return {
                    matches: [
                        {
                            params: {},
                            pathname: "",
                            pathnameBase: "",
                            route: t,
                        },
                    ],
                    route: t,
                };
            }
            function ez(
                e,
                { pathname: t, routeId: r, method: n, type: a, message: o } = {}
            ) {
                let i = "Unknown Server Error",
                    s = "Unknown @remix-run/router error";
                return (
                    400 === e
                        ? ((i = "Bad Request"),
                          n && t && r
                              ? (s = `You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`)
                              : "invalid-body" === a &&
                                (s = "Unable to encode submission body"))
                        : 403 === e
                          ? ((i = "Forbidden"),
                            (s = `Route "${r}" does not match URL "${t}"`))
                          : 404 === e
                            ? ((i = "Not Found"),
                              (s = `No route matches URL "${t}"`))
                            : 405 === e &&
                              ((i = "Method Not Allowed"),
                              n && t && r
                                  ? (s = `You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`)
                                  : n &&
                                    (s = `Invalid request method "${n.toUpperCase()}"`)),
                    new U(e || 500, i, Error(s), !0)
                );
            }
            function eW(e) {
                let t = Object.entries(e);
                for (let e = t.length - 1; e >= 0; e--) {
                    let [r, n] = t[e];
                    if (eH(n)) return { key: r, result: n };
                }
            }
            function eU(e) {
                return m({ ...("string" == typeof e ? y(e) : e), hash: "" });
            }
            function eB(e) {
                return (
                    null != e &&
                    "object" == typeof e &&
                    Object.entries(e).every(([e, t]) => {
                        var r;
                        return (
                            "string" == typeof e &&
                            null != (r = t) &&
                            "object" == typeof r &&
                            "type" in r &&
                            "result" in r &&
                            ("data" === r.type || "error" === r.type)
                        );
                    })
                );
            }
            function eF(e) {
                return "error" === e.type;
            }
            function eH(e) {
                return "redirect" === (e && e.type);
            }
            function eq(e) {
                return (
                    "object" == typeof e &&
                    null != e &&
                    "type" in e &&
                    "data" in e &&
                    "init" in e &&
                    "DataWithResponseInit" === e.type
                );
            }
            function eY(e) {
                return (
                    null != e &&
                    "number" == typeof e.status &&
                    "string" == typeof e.statusText &&
                    "object" == typeof e.headers &&
                    void 0 !== e.body
                );
            }
            function eV(e) {
                return K.has(e.toUpperCase());
            }
            function eJ(e) {
                return new URLSearchParams(e)
                    .getAll("index")
                    .some((e) => "" === e);
            }
            function eG(e, t) {
                let r = "string" == typeof t ? y(t).search : t.search;
                if (e[e.length - 1].route.index && eJ(r || ""))
                    return e[e.length - 1];
                let n = D(e);
                return n[n.length - 1];
            }
            function eX(e) {
                let {
                    formMethod: t,
                    formAction: r,
                    formEncType: n,
                    text: a,
                    formData: o,
                    json: i,
                } = e;
                if (t && r && n) {
                    if (null != a)
                        return {
                            formMethod: t,
                            formAction: r,
                            formEncType: n,
                            formData: void 0,
                            json: void 0,
                            text: a,
                        };
                    else if (null != o)
                        return {
                            formMethod: t,
                            formAction: r,
                            formEncType: n,
                            formData: o,
                            json: void 0,
                            text: void 0,
                        };
                    else if (void 0 !== i)
                        return {
                            formMethod: t,
                            formAction: r,
                            formEncType: n,
                            formData: void 0,
                            json: i,
                            text: void 0,
                        };
                }
            }
            function eK(e, t) {
                return t
                    ? {
                          state: "loading",
                          location: e,
                          formMethod: t.formMethod,
                          formAction: t.formAction,
                          formEncType: t.formEncType,
                          formData: t.formData,
                          json: t.json,
                          text: t.text,
                      }
                    : {
                          state: "loading",
                          location: e,
                          formMethod: void 0,
                          formAction: void 0,
                          formEncType: void 0,
                          formData: void 0,
                          json: void 0,
                          text: void 0,
                      };
            }
            function eQ(e, t) {
                return e
                    ? {
                          state: "loading",
                          formMethod: e.formMethod,
                          formAction: e.formAction,
                          formEncType: e.formEncType,
                          formData: e.formData,
                          json: e.json,
                          text: e.text,
                          data: t,
                      }
                    : {
                          state: "loading",
                          formMethod: void 0,
                          formAction: void 0,
                          formEncType: void 0,
                          formData: void 0,
                          json: void 0,
                          text: void 0,
                          data: t,
                      };
            }
            function eZ(e) {
                return {
                    state: "idle",
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                    data: e,
                };
            }
            var e0 = o.createContext(null);
            e0.displayName = "DataRouter";
            var e1 = o.createContext(null);
            e1.displayName = "DataRouterState";
            var e2 = o.createContext(!1),
                e4 = o.createContext({ isTransitioning: !1 });
            e4.displayName = "ViewTransition";
            var e5 = o.createContext(new Map());
            ((e5.displayName = "Fetchers"),
                (o.createContext(null).displayName = "Await"));
            var e3 = o.createContext(null);
            e3.displayName = "Navigation";
            var e6 = o.createContext(null);
            e6.displayName = "Location";
            var e8 = o.createContext({
                outlet: null,
                matches: [],
                isDataRoute: !1,
            });
            e8.displayName = "Route";
            var e7 = o.createContext(null);
            function e9() {
                return null != o.useContext(e6);
            }
            function te() {
                return (
                    d(
                        e9(),
                        "useLocation() may be used only in the context of a <Router> component."
                    ),
                    o.useContext(e6).location
                );
            }
            function tt() {
                return o.useContext(e6).navigationType;
            }
            function tr(e) {
                d(
                    e9(),
                    "useMatch() may be used only in the context of a <Router> component."
                );
                let { pathname: t } = te();
                return o.useMemo(() => j(e, P(t)), [t, e]);
            }
            e7.displayName = "RouteError";
            var tn =
                "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
            function ta(e) {
                o.useContext(e3).static || o.useLayoutEffect(e);
            }
            function to() {
                let { isDataRoute: e } = o.useContext(e8);
                return e
                    ? (function () {
                          let { router: e } = tm("useNavigate"),
                              t = tg("useNavigate"),
                              r = o.useRef(!1);
                          return (
                              ta(() => {
                                  r.current = !0;
                              }),
                              o.useCallback(
                                  async (n, a = {}) => {
                                      (h(r.current, tn),
                                          r.current &&
                                              ("number" == typeof n
                                                  ? e.navigate(n)
                                                  : await e.navigate(n, {
                                                        fromRouteId: t,
                                                        ...a,
                                                    })));
                                  },
                                  [e, t]
                              )
                          );
                      })()
                    : (function () {
                          d(
                              e9(),
                              "useNavigate() may be used only in the context of a <Router> component."
                          );
                          let e = o.useContext(e0),
                              { basename: t, navigator: r } = o.useContext(e3),
                              { matches: n } = o.useContext(e8),
                              { pathname: a } = te(),
                              i = JSON.stringify(O(n)),
                              s = o.useRef(!1);
                          return (
                              ta(() => {
                                  s.current = !0;
                              }),
                              o.useCallback(
                                  (n, o = {}) => {
                                      if ((h(s.current, tn), !s.current))
                                          return;
                                      if ("number" == typeof n)
                                          return void r.go(n);
                                      let l = I(
                                          n,
                                          JSON.parse(i),
                                          a,
                                          "path" === o.relative
                                      );
                                      (null == e &&
                                          "/" !== t &&
                                          (l.pathname =
                                              "/" === l.pathname
                                                  ? t
                                                  : M([t, l.pathname])),
                                          (o.replace ? r.replace : r.push)(
                                              l,
                                              o.state,
                                              o
                                          ));
                                  },
                                  [t, r, i, a, e]
                              )
                          );
                      })();
            }
            var ti = o.createContext(null);
            function ts() {
                let { matches: e } = o.useContext(e8),
                    t = e[e.length - 1];
                return t ? t.params : {};
            }
            function tl(e, { relative: t } = {}) {
                let { matches: r } = o.useContext(e8),
                    { pathname: n } = te(),
                    a = JSON.stringify(O(r));
                return o.useMemo(
                    () => I(e, JSON.parse(a), n, "path" === t),
                    [e, a, n, t]
                );
            }
            function tu(e, t) {
                return tc(e, t);
            }
            function tc(e, t, r, n, a) {
                let i;
                d(
                    e9(),
                    "useRoutes() may be used only in the context of a <Router> component."
                );
                let { navigator: s } = o.useContext(e3),
                    { matches: l } = o.useContext(e8),
                    u = l[l.length - 1],
                    c = u ? u.params : {},
                    p = u ? u.pathname : "/",
                    f = u ? u.pathnameBase : "/",
                    m = u && u.route;
                {
                    let e = (m && m.path) || "";
                    tk(
                        p,
                        !m || e.endsWith("*") || e.endsWith("*?"),
                        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${"/" === e ? "*" : `${e}/*`}">.`
                    );
                }
                let g = te();
                if (t) {
                    let e = "string" == typeof t ? y(t) : t;
                    (d(
                        "/" === f || e.pathname?.startsWith(f),
                        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${e.pathname}" was given in the \`location\` prop.`
                    ),
                        (i = e));
                } else i = g;
                let v = i.pathname || "/",
                    b = v;
                if ("/" !== f) {
                    let e = f.replace(/^\//, "").split("/");
                    b =
                        "/" +
                        v
                            .replace(/^\//, "")
                            .split("/")
                            .slice(e.length)
                            .join("/");
                }
                let w = E(e, { pathname: b });
                (h(
                    m || null != w,
                    `No routes matched location "${i.pathname}${i.search}${i.hash}" `
                ),
                    h(
                        null == w ||
                            void 0 !== w[w.length - 1].route.element ||
                            void 0 !== w[w.length - 1].route.Component ||
                            void 0 !== w[w.length - 1].route.lazy,
                        `Matched leaf route at location "${i.pathname}${i.search}${i.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
                    ));
                let S = (function (e, t = [], r = null, n = null, a = null) {
                    if (null == e) {
                        if (!r) return null;
                        if (r.errors) e = r.matches;
                        else {
                            if (
                                0 !== t.length ||
                                r.initialized ||
                                !(r.matches.length > 0)
                            )
                                return null;
                            e = r.matches;
                        }
                    }
                    let i = e,
                        s = r?.errors;
                    if (null != s) {
                        let e = i.findIndex(
                            (e) => e.route.id && s?.[e.route.id] !== void 0
                        );
                        (d(
                            e >= 0,
                            `Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`
                        ),
                            (i = i.slice(0, Math.min(i.length, e + 1))));
                    }
                    let l = !1,
                        u = -1;
                    if (r)
                        for (let e = 0; e < i.length; e++) {
                            let t = i[e];
                            if (
                                ((t.route.HydrateFallback ||
                                    t.route.hydrateFallbackElement) &&
                                    (u = e),
                                t.route.id)
                            ) {
                                let { loaderData: e, errors: n } = r,
                                    a =
                                        t.route.loader &&
                                        !e.hasOwnProperty(t.route.id) &&
                                        (!n || void 0 === n[t.route.id]);
                                if (t.route.lazy || a) {
                                    ((l = !0),
                                        (i =
                                            u >= 0
                                                ? i.slice(0, u + 1)
                                                : [i[0]]));
                                    break;
                                }
                            }
                        }
                    return i.reduceRight((e, a, c) => {
                        let d,
                            h = !1,
                            p = null,
                            f = null;
                        r &&
                            ((d = s && a.route.id ? s[a.route.id] : void 0),
                            (p = a.route.errorElement || td),
                            l &&
                                (u < 0 && 0 === c
                                    ? (tk(
                                          "route-fallback",
                                          !1,
                                          "No `HydrateFallback` element provided to render during initial hydration"
                                      ),
                                      (h = !0),
                                      (f = null))
                                    : u === c &&
                                      ((h = !0),
                                      (f =
                                          a.route.hydrateFallbackElement ||
                                          null))));
                        let m = t.concat(i.slice(0, c + 1)),
                            y = () => {
                                let t;
                                return (
                                    (t = d
                                        ? p
                                        : h
                                          ? f
                                          : a.route.Component
                                            ? o.createElement(
                                                  a.route.Component,
                                                  null
                                              )
                                            : a.route.element
                                              ? a.route.element
                                              : e),
                                    o.createElement(tp, {
                                        match: a,
                                        routeContext: {
                                            outlet: e,
                                            matches: m,
                                            isDataRoute: null != r,
                                        },
                                        children: t,
                                    })
                                );
                            };
                        return r &&
                            (a.route.ErrorBoundary ||
                                a.route.errorElement ||
                                0 === c)
                            ? o.createElement(th, {
                                  location: r.location,
                                  revalidation: r.revalidation,
                                  component: p,
                                  error: d,
                                  children: y(),
                                  routeContext: {
                                      outlet: null,
                                      matches: m,
                                      isDataRoute: !0,
                                  },
                                  unstable_onError: n,
                              })
                            : y();
                    }, null);
                })(
                    w &&
                        w.map((e) =>
                            Object.assign({}, e, {
                                params: Object.assign({}, c, e.params),
                                pathname: M([
                                    f,
                                    s.encodeLocation
                                        ? s.encodeLocation(
                                              e.pathname
                                                  .replace(/\?/g, "%3F")
                                                  .replace(/#/g, "%23")
                                          ).pathname
                                        : e.pathname,
                                ]),
                                pathnameBase:
                                    "/" === e.pathnameBase
                                        ? f
                                        : M([
                                              f,
                                              s.encodeLocation
                                                  ? s.encodeLocation(
                                                        e.pathnameBase
                                                            .replace(
                                                                /\?/g,
                                                                "%3F"
                                                            )
                                                            .replace(
                                                                /#/g,
                                                                "%23"
                                                            )
                                                    ).pathname
                                                  : e.pathnameBase,
                                          ]),
                            })
                        ),
                    l,
                    r,
                    n,
                    a
                );
                return t && S
                    ? o.createElement(
                          e6.Provider,
                          {
                              value: {
                                  location: {
                                      pathname: "/",
                                      search: "",
                                      hash: "",
                                      state: null,
                                      key: "default",
                                      ...i,
                                  },
                                  navigationType: "POP",
                              },
                          },
                          S
                      )
                    : S;
            }
            var td = o.createElement(function () {
                    let e = tR(),
                        t = B(e)
                            ? `${e.status} ${e.statusText}`
                            : e instanceof Error
                              ? e.message
                              : JSON.stringify(e),
                        r = e instanceof Error ? e.stack : null,
                        n = "rgba(200,200,200, 0.5)",
                        a = { padding: "2px 4px", backgroundColor: n },
                        i = null;
                    return (
                        console.error(
                            "Error handled by React Router default ErrorBoundary:",
                            e
                        ),
                        (i = o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(
                                "p",
                                null,
                                "\u{1F4BF} Hey developer \u{1F44B}"
                            ),
                            o.createElement(
                                "p",
                                null,
                                "You can provide a way better UX than this when your app throws errors by providing your own ",
                                o.createElement(
                                    "code",
                                    { style: a },
                                    "ErrorBoundary"
                                ),
                                " or",
                                " ",
                                o.createElement(
                                    "code",
                                    { style: a },
                                    "errorElement"
                                ),
                                " prop on your route."
                            )
                        )),
                        o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(
                                "h2",
                                null,
                                "Unexpected Application Error!"
                            ),
                            o.createElement(
                                "h3",
                                { style: { fontStyle: "italic" } },
                                t
                            ),
                            r
                                ? o.createElement(
                                      "pre",
                                      {
                                          style: {
                                              padding: "0.5rem",
                                              backgroundColor: n,
                                          },
                                      },
                                      r
                                  )
                                : null,
                            i
                        )
                    );
                }, null),
                th = class extends o.Component {
                    constructor(e) {
                        (super(e),
                            (this.state = {
                                location: e.location,
                                revalidation: e.revalidation,
                                error: e.error,
                            }));
                    }
                    static getDerivedStateFromError(e) {
                        return { error: e };
                    }
                    static getDerivedStateFromProps(e, t) {
                        return t.location !== e.location ||
                            ("idle" !== t.revalidation &&
                                "idle" === e.revalidation)
                            ? {
                                  error: e.error,
                                  location: e.location,
                                  revalidation: e.revalidation,
                              }
                            : {
                                  error: void 0 !== e.error ? e.error : t.error,
                                  location: t.location,
                                  revalidation:
                                      e.revalidation || t.revalidation,
                              };
                    }
                    componentDidCatch(e, t) {
                        this.props.unstable_onError
                            ? this.props.unstable_onError(e, t)
                            : console.error(
                                  "React Router caught the following error during render",
                                  e
                              );
                    }
                    render() {
                        return void 0 !== this.state.error
                            ? o.createElement(
                                  e8.Provider,
                                  { value: this.props.routeContext },
                                  o.createElement(e7.Provider, {
                                      value: this.state.error,
                                      children: this.props.component,
                                  })
                              )
                            : this.props.children;
                    }
                };
            function tp({ routeContext: e, match: t, children: r }) {
                let n = o.useContext(e0);
                return (
                    n &&
                        n.static &&
                        n.staticContext &&
                        (t.route.errorElement || t.route.ErrorBoundary) &&
                        (n.staticContext._deepestRenderedBoundaryId =
                            t.route.id),
                    o.createElement(e8.Provider, { value: e }, r)
                );
            }
            function tf(e) {
                return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
            }
            function tm(e) {
                let t = o.useContext(e0);
                return (d(t, tf(e)), t);
            }
            function ty(e) {
                let t = o.useContext(e1);
                return (d(t, tf(e)), t);
            }
            function tg(e) {
                let t,
                    r = (d((t = o.useContext(e8)), tf(e)), t),
                    n = r.matches[r.matches.length - 1];
                return (
                    d(
                        n.route.id,
                        `${e} can only be used on routes that contain a unique "id"`
                    ),
                    n.route.id
                );
            }
            function tv() {
                return ty("useNavigation").navigation;
            }
            function tb() {
                let { matches: e, loaderData: t } = ty("useMatches");
                return o.useMemo(() => e.map((e) => C(e, t)), [e, t]);
            }
            function tw() {
                let e = ty("useLoaderData"),
                    t = tg("useLoaderData");
                return e.loaderData[t];
            }
            function tS(e) {
                return ty("useRouteLoaderData").loaderData[e];
            }
            function tR() {
                let e = o.useContext(e7),
                    t = ty("useRouteError"),
                    r = tg("useRouteError");
                return void 0 !== e ? e : t.errors?.[r];
            }
            var tE = 0;
            function tx(e) {
                let { router: t, basename: r } = tm("useBlocker"),
                    n = ty("useBlocker"),
                    [a, i] = o.useState(""),
                    s = o.useCallback(
                        (t) => {
                            if ("function" != typeof e) return !!e;
                            if ("/" === r) return e(t);
                            let {
                                currentLocation: n,
                                nextLocation: a,
                                historyAction: o,
                            } = t;
                            return e({
                                currentLocation: {
                                    ...n,
                                    pathname: A(n.pathname, r) || n.pathname,
                                },
                                nextLocation: {
                                    ...a,
                                    pathname: A(a.pathname, r) || a.pathname,
                                },
                                historyAction: o,
                            });
                        },
                        [r, e]
                    );
                return (
                    o.useEffect(() => {
                        let e = String(++tE);
                        return (i(e), () => t.deleteBlocker(e));
                    }, [t]),
                    o.useEffect(() => {
                        "" !== a && t.getBlocker(a, s);
                    }, [t, a, s]),
                    a && n.blockers.has(a) ? n.blockers.get(a) : en
                );
            }
            var tC = {};
            function tk(e, t, r) {
                t || tC[e] || ((tC[e] = !0), h(!1, r));
            }
            var t_ = {};
            function tN(e, t) {
                e || t_[t] || ((t_[t] = !0), console.warn(t));
            }
            function tj(e) {
                let t = {
                    hasErrorBoundary:
                        e.hasErrorBoundary ||
                        null != e.ErrorBoundary ||
                        null != e.errorElement,
                };
                return (
                    e.Component &&
                        (e.element &&
                            h(
                                !1,
                                "You should not include both `Component` and `element` on your route - `Component` will be used."
                            ),
                        Object.assign(t, {
                            element: o.createElement(e.Component),
                            Component: void 0,
                        })),
                    e.HydrateFallback &&
                        (e.hydrateFallbackElement &&
                            h(
                                !1,
                                "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
                            ),
                        Object.assign(t, {
                            hydrateFallbackElement: o.createElement(
                                e.HydrateFallback
                            ),
                            HydrateFallback: void 0,
                        })),
                    e.ErrorBoundary &&
                        (e.errorElement &&
                            h(
                                !1,
                                "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
                            ),
                        Object.assign(t, {
                            errorElement: o.createElement(e.ErrorBoundary),
                            ErrorBoundary: void 0,
                        })),
                    t
                );
            }
            var tP = ["HydrateFallback", "hydrateFallbackElement"],
                tA = class {
                    constructor() {
                        ((this.status = "pending"),
                            (this.promise = new Promise((e, t) => {
                                ((this.resolve = (t) => {
                                    "pending" === this.status &&
                                        ((this.status = "resolved"), e(t));
                                }),
                                    (this.reject = (e) => {
                                        "pending" === this.status &&
                                            ((this.status = "rejected"), t(e));
                                    }));
                            })));
                    }
                };
            function tL({ router: e, flushSync: t, unstable_onError: r }) {
                let [n, a] = o.useState(e.state),
                    [i, s] = o.useState(),
                    [l, u] = o.useState({ isTransitioning: !1 }),
                    [c, d] = o.useState(),
                    [h, p] = o.useState(),
                    [f, m] = o.useState(),
                    y = o.useRef(new Map()),
                    g = o.useCallback(
                        (e) => {
                            a(
                                (t) => (
                                    e.errors &&
                                        r &&
                                        Object.entries(e.errors).forEach(
                                            ([e, n]) => {
                                                t.errors?.[e] !== n && r(n);
                                            }
                                        ),
                                    e
                                )
                            );
                        },
                        [r]
                    ),
                    v = o.useCallback(
                        (
                            r,
                            {
                                deletedFetchers: n,
                                flushSync: a,
                                viewTransitionOpts: i,
                            }
                        ) => {
                            (r.fetchers.forEach((e, t) => {
                                void 0 !== e.data && y.current.set(t, e.data);
                            }),
                                n.forEach((e) => y.current.delete(e)),
                                tN(
                                    !1 === a || null != t,
                                    'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
                                ));
                            let l =
                                null != e.window &&
                                null != e.window.document &&
                                "function" ==
                                    typeof e.window.document
                                        .startViewTransition;
                            if (
                                (tN(
                                    null == i || l,
                                    "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
                                ),
                                !i || !l)
                            )
                                return void (t && a
                                    ? t(() => g(r))
                                    : o.startTransition(() => g(r)));
                            if (t && a) {
                                t(() => {
                                    (h &&
                                        (c && c.resolve(), h.skipTransition()),
                                        u({
                                            isTransitioning: !0,
                                            flushSync: !0,
                                            currentLocation: i.currentLocation,
                                            nextLocation: i.nextLocation,
                                        }));
                                });
                                let n = e.window.document.startViewTransition(
                                    () => {
                                        t(() => g(r));
                                    }
                                );
                                (n.finished.finally(() => {
                                    t(() => {
                                        (d(void 0),
                                            p(void 0),
                                            s(void 0),
                                            u({ isTransitioning: !1 }));
                                    });
                                }),
                                    t(() => p(n)));
                                return;
                            }
                            h
                                ? (c && c.resolve(),
                                  h.skipTransition(),
                                  m({
                                      state: r,
                                      currentLocation: i.currentLocation,
                                      nextLocation: i.nextLocation,
                                  }))
                                : (s(r),
                                  u({
                                      isTransitioning: !0,
                                      flushSync: !1,
                                      currentLocation: i.currentLocation,
                                      nextLocation: i.nextLocation,
                                  }));
                        },
                        [e.window, t, h, c, g]
                    );
                (o.useLayoutEffect(() => e.subscribe(v), [e, v]),
                    o.useEffect(() => {
                        l.isTransitioning && !l.flushSync && d(new tA());
                    }, [l]),
                    o.useEffect(() => {
                        if (c && i && e.window) {
                            let t = c.promise,
                                r = e.window.document.startViewTransition(
                                    async () => {
                                        (o.startTransition(() => g(i)),
                                            await t);
                                    }
                                );
                            (r.finished.finally(() => {
                                (d(void 0),
                                    p(void 0),
                                    s(void 0),
                                    u({ isTransitioning: !1 }));
                            }),
                                p(r));
                        }
                    }, [i, c, e.window, g]),
                    o.useEffect(() => {
                        c &&
                            i &&
                            n.location.key === i.location.key &&
                            c.resolve();
                    }, [c, h, n.location, i]),
                    o.useEffect(() => {
                        !l.isTransitioning &&
                            f &&
                            (s(f.state),
                            u({
                                isTransitioning: !0,
                                flushSync: !1,
                                currentLocation: f.currentLocation,
                                nextLocation: f.nextLocation,
                            }),
                            m(void 0));
                    }, [l.isTransitioning, f]));
                let b = o.useMemo(
                        () => ({
                            createHref: e.createHref,
                            encodeLocation: e.encodeLocation,
                            go: (t) => e.navigate(t),
                            push: (t, r, n) =>
                                e.navigate(t, {
                                    state: r,
                                    preventScrollReset: n?.preventScrollReset,
                                }),
                            replace: (t, r, n) =>
                                e.navigate(t, {
                                    replace: !0,
                                    state: r,
                                    preventScrollReset: n?.preventScrollReset,
                                }),
                        }),
                        [e]
                    ),
                    w = e.basename || "/",
                    S = o.useMemo(
                        () => ({
                            router: e,
                            navigator: b,
                            static: !1,
                            basename: w,
                            unstable_onError: r,
                        }),
                        [e, b, w, r]
                    );
                return o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                        e0.Provider,
                        { value: S },
                        o.createElement(
                            e1.Provider,
                            { value: n },
                            o.createElement(
                                e5.Provider,
                                { value: y.current },
                                o.createElement(
                                    e4.Provider,
                                    { value: l },
                                    o.createElement(
                                        tM,
                                        {
                                            basename: w,
                                            location: n.location,
                                            navigationType: n.historyAction,
                                            navigator: b,
                                        },
                                        o.createElement(tT, {
                                            routes: e.routes,
                                            future: e.future,
                                            state: n,
                                            unstable_onError: r,
                                        })
                                    )
                                )
                            )
                        )
                    ),
                    null
                );
            }
            var tT = o.memo(function ({
                routes: e,
                future: t,
                state: r,
                unstable_onError: n,
            }) {
                return tc(e, void 0, r, n, t);
            });
            function tD({ to: e, replace: t, state: r, relative: n }) {
                d(
                    e9(),
                    "<Navigate> may be used only in the context of a <Router> component."
                );
                let { static: a } = o.useContext(e3);
                h(
                    !a,
                    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
                );
                let { matches: i } = o.useContext(e8),
                    { pathname: s } = te(),
                    l = to(),
                    u = JSON.stringify(I(e, O(i), s, "path" === n));
                return (
                    o.useEffect(() => {
                        l(JSON.parse(u), { replace: t, state: r, relative: n });
                    }, [l, u, n, t, r]),
                    null
                );
            }
            function tO(e) {
                var t;
                let r;
                return (
                    (t = e.context),
                    (r = o.useContext(e8).outlet),
                    o.useMemo(
                        () =>
                            r && o.createElement(ti.Provider, { value: t }, r),
                        [r, t]
                    )
                );
            }
            function tI(e) {
                d(
                    !1,
                    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
                );
            }
            function tM({
                basename: e = "/",
                children: t = null,
                location: r,
                navigationType: n = "POP",
                navigator: a,
                static: i = !1,
            }) {
                d(
                    !e9(),
                    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
                );
                let s = e.replace(/^\/*/, "/"),
                    l = o.useMemo(
                        () => ({
                            basename: s,
                            navigator: a,
                            static: i,
                            future: {},
                        }),
                        [s, a, i]
                    );
                "string" == typeof r && (r = y(r));
                let {
                        pathname: u = "/",
                        search: c = "",
                        hash: p = "",
                        state: f = null,
                        key: m = "default",
                    } = r,
                    g = o.useMemo(() => {
                        let e = A(u, s);
                        return null == e
                            ? null
                            : {
                                  location: {
                                      pathname: e,
                                      search: c,
                                      hash: p,
                                      state: f,
                                      key: m,
                                  },
                                  navigationType: n,
                              };
                    }, [s, u, c, p, f, m, n]);
                return (h(
                    null != g,
                    `<Router basename="${s}"> is not able to match the URL "${u}${c}${p}" because it does not start with the basename, so the <Router> won't render anything.`
                ),
                null == g)
                    ? null
                    : o.createElement(
                          e3.Provider,
                          { value: l },
                          o.createElement(e6.Provider, {
                              children: t,
                              value: g,
                          })
                      );
            }
            function t$({ children: e, location: t }) {
                return tc(
                    (function e(t, r = []) {
                        let n = [];
                        return (
                            o.Children.forEach(t, (t, a) => {
                                if (!o.isValidElement(t)) return;
                                let i = [...r, a];
                                if (t.type === o.Fragment)
                                    return void n.push.apply(
                                        n,
                                        e(t.props.children, i)
                                    );
                                (d(
                                    t.type === tI,
                                    `[${"string" == typeof t.type ? t.type : t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
                                ),
                                    d(
                                        !t.props.index || !t.props.children,
                                        "An index route cannot have child routes."
                                    ));
                                let s = {
                                    id: t.props.id || i.join("-"),
                                    caseSensitive: t.props.caseSensitive,
                                    element: t.props.element,
                                    Component: t.props.Component,
                                    index: t.props.index,
                                    path: t.props.path,
                                    middleware: t.props.middleware,
                                    loader: t.props.loader,
                                    action: t.props.action,
                                    hydrateFallbackElement:
                                        t.props.hydrateFallbackElement,
                                    HydrateFallback: t.props.HydrateFallback,
                                    errorElement: t.props.errorElement,
                                    ErrorBoundary: t.props.ErrorBoundary,
                                    hasErrorBoundary:
                                        !0 === t.props.hasErrorBoundary ||
                                        null != t.props.ErrorBoundary ||
                                        null != t.props.errorElement,
                                    shouldRevalidate: t.props.shouldRevalidate,
                                    handle: t.props.handle,
                                    lazy: t.props.lazy,
                                };
                                (t.props.children &&
                                    (s.children = e(t.props.children, i)),
                                    n.push(s));
                            }),
                            n
                        );
                    })(e),
                    t
                );
            }
            o.Component;
            var tz = "get",
                tW = "application/x-www-form-urlencoded";
            function tU(e) {
                return null != e && "string" == typeof e.tagName;
            }
            function tB(e = "") {
                return new URLSearchParams(
                    "string" == typeof e ||
                    Array.isArray(e) ||
                    e instanceof URLSearchParams
                        ? e
                        : Object.keys(e).reduce((t, r) => {
                              let n = e[r];
                              return t.concat(
                                  Array.isArray(n)
                                      ? n.map((e) => [r, e])
                                      : [[r, n]]
                              );
                          }, [])
                );
            }
            var tF = null,
                tH = new Set([
                    "application/x-www-form-urlencoded",
                    "multipart/form-data",
                    "text/plain",
                ]);
            function tq(e) {
                return null == e || tH.has(e)
                    ? e
                    : (h(
                          !1,
                          `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tW}"`
                      ),
                      null);
            }
            function tY(e, t) {
                if (!1 === e || null == e) throw Error(t);
            }
            async function tV(e, t) {
                if (e.id in t) return t[e.id];
                try {
                    let r = await import(e.module);
                    return ((t[e.id] = r), r);
                } catch (t) {
                    return (
                        console.error(
                            `Error loading route module \`${e.module}\`, reloading page...`
                        ),
                        console.error(t),
                        window.__reactRouterContext &&
                            window.__reactRouterContext.isSpaMode,
                        window.location.reload(),
                        new Promise(() => {})
                    );
                }
            }
            function tJ(e) {
                return (
                    null != e &&
                    (null == e.href
                        ? "preload" === e.rel &&
                          "string" == typeof e.imageSrcSet &&
                          "string" == typeof e.imageSizes
                        : "string" == typeof e.rel && "string" == typeof e.href)
                );
            }
            async function tG(e, t, r) {
                var n;
                let a, o;
                return (
                    (n = (
                        await Promise.all(
                            e.map(async (e) => {
                                let n = t.routes[e.route.id];
                                if (n) {
                                    let e = await tV(n, r);
                                    return e.links ? e.links() : [];
                                }
                                return [];
                            })
                        )
                    )
                        .flat(1)
                        .filter(tJ)
                        .filter(
                            (e) => "stylesheet" === e.rel || "preload" === e.rel
                        )
                        .map((e) =>
                            "stylesheet" === e.rel
                                ? { ...e, rel: "prefetch", as: "style" }
                                : { ...e, rel: "prefetch" }
                        )),
                    (a = new Set()),
                    (o = new Set(void 0)),
                    n.reduce((e, t) => {
                        !1;
                        let r = JSON.stringify(
                            (function (e) {
                                let t = {};
                                for (let r of Object.keys(e).sort())
                                    t[r] = e[r];
                                return t;
                            })(t)
                        );
                        return (
                            a.has(r) || (a.add(r), e.push({ key: r, link: t })),
                            e
                        );
                    }, [])
                );
            }
            function tX(e, t, r, n, a, o) {
                let i = (e, t) => !r[t] || e.route.id !== r[t].route.id,
                    s = (e, t) =>
                        r[t].pathname !== e.pathname ||
                        (r[t].route.path?.endsWith("*") &&
                            r[t].params["*"] !== e.params["*"]);
                return "assets" === o
                    ? t.filter((e, t) => i(e, t) || s(e, t))
                    : "data" === o
                      ? t.filter((t, o) => {
                            let l = n.routes[t.route.id];
                            if (!l || !l.hasLoader) return !1;
                            if (i(t, o) || s(t, o)) return !0;
                            if (t.route.shouldRevalidate) {
                                let n = t.route.shouldRevalidate({
                                    currentUrl: new URL(
                                        a.pathname + a.search + a.hash,
                                        window.origin
                                    ),
                                    currentParams: r[0]?.params || {},
                                    nextUrl: new URL(e, window.origin),
                                    nextParams: t.params,
                                    defaultShouldRevalidate: !0,
                                });
                                if ("boolean" == typeof n) return n;
                            }
                            return !0;
                        })
                      : [];
            }
            function tK(e, t, { includeHydrateFallback: r } = {}) {
                return [
                    ...new Set(
                        e
                            .map((e) => {
                                let n = t.routes[e.route.id];
                                if (!n) return [];
                                let a = [n.module];
                                return (
                                    n.clientActionModule &&
                                        (a = a.concat(n.clientActionModule)),
                                    n.clientLoaderModule &&
                                        (a = a.concat(n.clientLoaderModule)),
                                    r &&
                                        n.hydrateFallbackModule &&
                                        (a = a.concat(n.hydrateFallbackModule)),
                                    n.imports && (a = a.concat(n.imports)),
                                    a
                                );
                            })
                            .flat(1)
                    ),
                ];
            }
            function tQ() {
                let e = o.useContext(e0);
                return (
                    tY(
                        e,
                        "You must render this element inside a <DataRouterContext.Provider> element"
                    ),
                    e
                );
            }
            function tZ() {
                let e = o.useContext(e1);
                return (
                    tY(
                        e,
                        "You must render this element inside a <DataRouterStateContext.Provider> element"
                    ),
                    e
                );
            }
            (Object.getOwnPropertyNames(Object.prototype).sort().join("\0"),
                "undefined" != typeof window && window,
                Symbol("SingleFetchRedirect"));
            var t0 = o.createContext(void 0);
            function t1() {
                let e = o.useContext(t0);
                return (
                    tY(
                        e,
                        "You must render this element inside a <HydratedRouter> element"
                    ),
                    e
                );
            }
            function t2(e, t) {
                return (r) => {
                    (e && e(r), r.defaultPrevented || t(r));
                };
            }
            function t4({ page: e, ...t }) {
                let { router: r } = tQ(),
                    n = o.useMemo(
                        () => E(r.routes, e, r.basename),
                        [r.routes, e, r.basename]
                    );
                return n
                    ? o.createElement(t5, { page: e, matches: n, ...t })
                    : null;
            }
            function t5({ page: e, matches: t, ...r }) {
                let n = te(),
                    { manifest: a, routeModules: i } = t1(),
                    { basename: s } = tQ(),
                    { loaderData: l, matches: u } = tZ(),
                    c = o.useMemo(
                        () => tX(e, t, u, a, n, "data"),
                        [e, t, u, a, n]
                    ),
                    d = o.useMemo(
                        () => tX(e, t, u, a, n, "assets"),
                        [e, t, u, a, n]
                    ),
                    h = o.useMemo(() => {
                        var r;
                        let o;
                        if (e === n.pathname + n.search + n.hash) return [];
                        let u = new Set(),
                            d = !1;
                        if (
                            (t.forEach((e) => {
                                let t = a.routes[e.route.id];
                                t &&
                                    t.hasLoader &&
                                    ((!c.some(
                                        (t) => t.route.id === e.route.id
                                    ) &&
                                        e.route.id in l &&
                                        i[e.route.id]?.shouldRevalidate) ||
                                    t.hasClientLoader
                                        ? (d = !0)
                                        : u.add(e.route.id));
                            }),
                            0 === u.size)
                        )
                            return [];
                        let h =
                            ((r = "data"),
                            "/" ===
                            (o =
                                "string" == typeof e
                                    ? new URL(
                                          e,
                                          "undefined" == typeof window
                                              ? "server://singlefetch/"
                                              : window.location.origin
                                      )
                                    : e).pathname
                                ? (o.pathname = `_root.${r}`)
                                : s && "/" === A(o.pathname, s)
                                  ? (o.pathname = `${s.replace(/\/$/, "")}/_root.${r}`)
                                  : (o.pathname = `${o.pathname.replace(/\/$/, "")}.${r}`),
                            o);
                        return (
                            d &&
                                u.size > 0 &&
                                h.searchParams.set(
                                    "_routes",
                                    t
                                        .filter((e) => u.has(e.route.id))
                                        .map((e) => e.route.id)
                                        .join(",")
                                ),
                            [h.pathname + h.search]
                        );
                    }, [s, l, n, a, c, t, e, i]),
                    p = o.useMemo(() => tK(d, a), [d, a]),
                    f = (function (e) {
                        let { manifest: t, routeModules: r } = t1(),
                            [n, a] = o.useState([]);
                        return (
                            o.useEffect(() => {
                                let n = !1;
                                return (
                                    tG(e, t, r).then((e) => {
                                        n || a(e);
                                    }),
                                    () => {
                                        n = !0;
                                    }
                                );
                            }, [e, t, r]),
                            n
                        );
                    })(d);
                return o.createElement(
                    o.Fragment,
                    null,
                    h.map((e) =>
                        o.createElement("link", {
                            key: e,
                            rel: "prefetch",
                            as: "fetch",
                            href: e,
                            ...r,
                        })
                    ),
                    p.map((e) =>
                        o.createElement("link", {
                            key: e,
                            rel: "modulepreload",
                            href: e,
                            ...r,
                        })
                    ),
                    f.map(({ key: e, link: t }) =>
                        o.createElement("link", {
                            key: e,
                            nonce: r.nonce,
                            ...t,
                        })
                    )
                );
            }
            t0.displayName = "FrameworkContext";
            o.Component;
            var t3 =
                "undefined" != typeof window &&
                void 0 !== window.document &&
                void 0 !== window.document.createElement;
            try {
                t3 && (window.__reactRouterVersion = "7.9.5");
            } catch (e) {}
            function t6(e, t) {
                let r;
                return (function (e) {
                    let t,
                        r,
                        n,
                        a,
                        o,
                        i = e.window
                            ? e.window
                            : "undefined" != typeof window
                              ? window
                              : void 0,
                        s =
                            void 0 !== i &&
                            void 0 !== i.document &&
                            void 0 !== i.document.createElement;
                    d(
                        e.routes.length > 0,
                        "You must provide a non-empty routes array to createRouter"
                    );
                    let l = e.hydrationRouteProperties || [],
                        u = e.mapRouteProperties || eo,
                        c = u;
                    if (e.unstable_instrumentations) {
                        let t = e.unstable_instrumentations;
                        c = (e) => ({
                            ...u(e),
                            ...(function (e, t) {
                                let r = {
                                    lazy: [],
                                    "lazy.loader": [],
                                    "lazy.action": [],
                                    "lazy.middleware": [],
                                    middleware: [],
                                    loader: [],
                                    action: [],
                                };
                                e.forEach((e) =>
                                    e({
                                        id: t.id,
                                        index: t.index,
                                        path: t.path,
                                        instrument(e) {
                                            for (let t of Object.keys(r))
                                                e[t] && r[t].push(e[t]);
                                        },
                                    })
                                );
                                let n = {};
                                if (
                                    "function" == typeof t.lazy &&
                                    r.lazy.length > 0
                                ) {
                                    let e = q(r.lazy, t.lazy, () => void 0);
                                    e && (n.lazy = e);
                                }
                                if ("object" == typeof t.lazy) {
                                    let e = t.lazy;
                                    ["middleware", "loader", "action"].forEach(
                                        (t) => {
                                            let a = e[t],
                                                o = r[`lazy.${t}`];
                                            if (
                                                "function" == typeof a &&
                                                o.length > 0
                                            ) {
                                                let e = q(o, a, () => void 0);
                                                e &&
                                                    (n.lazy = Object.assign(
                                                        n.lazy || {},
                                                        { [t]: e }
                                                    ));
                                            }
                                        }
                                    );
                                }
                                return (
                                    ["loader", "action"].forEach((e) => {
                                        let a = t[e];
                                        if (
                                            "function" == typeof a &&
                                            r[e].length > 0
                                        ) {
                                            let t = a[H] ?? a,
                                                o = q(r[e], t, (...e) =>
                                                    V(e[0])
                                                );
                                            o && ((o[H] = t), (n[e] = o));
                                        }
                                    }),
                                    t.middleware &&
                                        t.middleware.length > 0 &&
                                        r.middleware.length > 0 &&
                                        (n.middleware = t.middleware.map(
                                            (e) => {
                                                let t = e[H] ?? e,
                                                    n = q(
                                                        r.middleware,
                                                        t,
                                                        (...e) => V(e[0])
                                                    );
                                                return n ? ((n[H] = t), n) : e;
                                            }
                                        )),
                                    n
                                );
                            })(t.map((e) => e.route).filter(Boolean), e),
                        });
                    }
                    let p = {},
                        y = S(e.routes, c, void 0, p),
                        b = e.basename || "/";
                    b.startsWith("/") || (b = `/${b}`);
                    let w = e.dataStrategy || eb,
                        R = { ...e.future },
                        k = null,
                        _ = new Set(),
                        N = null,
                        j = null,
                        P = null,
                        L = null != e.hydrationData,
                        T = E(y, e.history.location, b),
                        D = !1,
                        O = null;
                    if (null != T || e.patchRoutesOnNavigation)
                        if (
                            (T &&
                                !e.hydrationData &&
                                to(T, y, e.history.location.pathname).active &&
                                (T = null),
                            T)
                        )
                            if (T.some((e) => e.route.lazy)) r = !1;
                            else if (T.some((e) => ed(e.route))) {
                                let t = e.hydrationData
                                        ? e.hydrationData.loaderData
                                        : null,
                                    n = e.hydrationData
                                        ? e.hydrationData.errors
                                        : null;
                                if (n) {
                                    let e = T.findIndex(
                                        (e) => void 0 !== n[e.route.id]
                                    );
                                    r = T.slice(0, e + 1).every(
                                        (e) => !eh(e.route, t, n)
                                    );
                                } else r = T.every((e) => !eh(e.route, t, n));
                            } else r = !0;
                        else {
                            ((r = !1), (T = []));
                            let t = to(null, y, e.history.location.pathname);
                            t.active &&
                                t.matches &&
                                ((D = !0), (T = t.matches));
                        }
                    else {
                        let t = ez(404, {
                                pathname: e.history.location.pathname,
                            }),
                            { matches: n, route: a } = e$(y);
                        ((r = !0), (T = n), (O = { [a.id]: t }));
                    }
                    let I = {
                            historyAction: e.history.action,
                            location: e.history.location,
                            matches: T,
                            initialized: r,
                            navigation: et,
                            restoreScrollPosition:
                                null == e.hydrationData && null,
                            preventScrollReset: !1,
                            revalidation: "idle",
                            loaderData:
                                (e.hydrationData &&
                                    e.hydrationData.loaderData) ||
                                {},
                            actionData:
                                (e.hydrationData &&
                                    e.hydrationData.actionData) ||
                                null,
                            errors:
                                (e.hydrationData && e.hydrationData.errors) ||
                                O,
                            fetchers: new Map(),
                            blockers: new Map(),
                        },
                        M = "POP",
                        $ = !1,
                        z = !1,
                        W = new Map(),
                        U = null,
                        F = !1,
                        Y = !1,
                        G = new Set(),
                        X = new Map(),
                        K = 0,
                        Q = -1,
                        es = new Map(),
                        ep = new Set(),
                        em = new Map(),
                        ey = new Map(),
                        eg = new Set(),
                        ev = new Map(),
                        ew = null;
                    function eS(e, t = {}) {
                        e.matches &&
                            (e.matches = e.matches.map((e) => {
                                let t = p[e.route.id],
                                    r = e.route;
                                return r.element !== t.element ||
                                    r.errorElement !== t.errorElement ||
                                    r.hydrateFallbackElement !==
                                        t.hydrateFallbackElement
                                    ? { ...e, route: t }
                                    : e;
                            }));
                        let r = [],
                            n = [];
                        ((I = { ...I, ...e }).fetchers.forEach((e, t) => {
                            "idle" === e.state &&
                                (eg.has(t) ? r.push(t) : n.push(t));
                        }),
                            eg.forEach((e) => {
                                I.fetchers.has(e) || X.has(e) || r.push(e);
                            }),
                            [..._].forEach((e) =>
                                e(I, {
                                    deletedFetchers: r,
                                    viewTransitionOpts: t.viewTransitionOpts,
                                    flushSync: !0 === t.flushSync,
                                })
                            ),
                            r.forEach((e) => e5(e)),
                            n.forEach((e) => I.fetchers.delete(e)));
                    }
                    function eR(r, n, { flushSync: a } = {}) {
                        let o,
                            i,
                            s =
                                null != I.actionData &&
                                null != I.navigation.formMethod &&
                                eV(I.navigation.formMethod) &&
                                "loading" === I.navigation.state &&
                                r.state?._isRedirect !== !0;
                        o = n.actionData
                            ? Object.keys(n.actionData).length > 0
                                ? n.actionData
                                : null
                            : s
                              ? I.actionData
                              : null;
                        let l = n.loaderData
                                ? eO(
                                      I.loaderData,
                                      n.loaderData,
                                      n.matches || [],
                                      n.errors
                                  )
                                : I.loaderData,
                            u = I.blockers;
                        u.size > 0 &&
                            (u = new Map(u)).forEach((e, t) => u.set(t, en));
                        let c = !F && ta(r, n.matches || I.matches),
                            d =
                                !0 === $ ||
                                (null != I.navigation.formMethod &&
                                    eV(I.navigation.formMethod) &&
                                    r.state?._isRedirect !== !0);
                        if (
                            (t && ((y = t), (t = void 0)),
                            F ||
                                "POP" === M ||
                                ("PUSH" === M
                                    ? e.history.push(r, r.state)
                                    : "REPLACE" === M &&
                                      e.history.replace(r, r.state)),
                            "POP" === M)
                        ) {
                            let e = W.get(I.location.pathname);
                            e && e.has(r.pathname)
                                ? (i = {
                                      currentLocation: I.location,
                                      nextLocation: r,
                                  })
                                : W.has(r.pathname) &&
                                  (i = {
                                      currentLocation: r,
                                      nextLocation: I.location,
                                  });
                        } else if (z) {
                            let e = W.get(I.location.pathname);
                            (e
                                ? e.add(r.pathname)
                                : ((e = new Set([r.pathname])),
                                  W.set(I.location.pathname, e)),
                                (i = {
                                    currentLocation: I.location,
                                    nextLocation: r,
                                }));
                        }
                        (eS(
                            {
                                ...n,
                                actionData: o,
                                loaderData: l,
                                historyAction: M,
                                location: r,
                                initialized: !0,
                                navigation: et,
                                revalidation: "idle",
                                restoreScrollPosition: c,
                                preventScrollReset: d,
                                blockers: u,
                            },
                            { viewTransitionOpts: i, flushSync: !0 === a }
                        ),
                            (M = "POP"),
                            ($ = !1),
                            (z = !1),
                            (F = !1),
                            (Y = !1),
                            ew?.resolve(),
                            (ew = null));
                    }
                    async function eE(t, r) {
                        if ("number" == typeof t) return void e.history.go(t);
                        let {
                                path: n,
                                submission: a,
                                error: o,
                            } = eu(
                                !1,
                                el(
                                    I.location,
                                    I.matches,
                                    b,
                                    t,
                                    r?.fromRouteId,
                                    r?.relative
                                ),
                                r
                            ),
                            i = I.location,
                            s = f(I.location, n, r && r.state);
                        s = { ...s, ...e.history.encodeLocation(s) };
                        let l = r && null != r.replace ? r.replace : void 0,
                            u = "PUSH";
                        !0 === l
                            ? (u = "REPLACE")
                            : !1 === l ||
                              (null != a &&
                                  eV(a.formMethod) &&
                                  a.formAction ===
                                      I.location.pathname + I.location.search &&
                                  (u = "REPLACE"));
                        let c =
                                r && "preventScrollReset" in r
                                    ? !0 === r.preventScrollReset
                                    : void 0,
                            d = !0 === (r && r.flushSync),
                            h = tt({
                                currentLocation: i,
                                nextLocation: s,
                                historyAction: u,
                            });
                        h
                            ? te(h, {
                                  state: "blocked",
                                  location: s,
                                  proceed() {
                                      (te(h, {
                                          state: "proceeding",
                                          proceed: void 0,
                                          reset: void 0,
                                          location: s,
                                      }),
                                          eE(t, r));
                                  },
                                  reset() {
                                      let e = new Map(I.blockers);
                                      (e.set(h, en), eS({ blockers: e }));
                                  },
                              })
                            : await ex(u, s, {
                                  submission: a,
                                  pendingError: o,
                                  preventScrollReset: c,
                                  replace: r && r.replace,
                                  enableViewTransition: r && r.viewTransition,
                                  flushSync: d,
                              });
                    }
                    async function ex(r, n, o) {
                        var i, s, l, u;
                        let c;
                        (a && a.abort(),
                            (a = null),
                            (M = r),
                            (F =
                                !0 === (o && o.startUninterruptedRevalidation)),
                            (i = I.location),
                            (s = I.matches),
                            N && P && (N[tn(i, s)] = P()),
                            ($ = !0 === (o && o.preventScrollReset)),
                            (z = !0 === (o && o.enableViewTransition)));
                        let d = t || y,
                            h = o && o.overrideNavigation,
                            p =
                                o?.initialHydration &&
                                I.matches &&
                                I.matches.length > 0 &&
                                !D
                                    ? I.matches
                                    : E(d, n, b),
                            f = !0 === (o && o.flushSync);
                        if (
                            p &&
                            I.initialized &&
                            !Y &&
                            ((l = I.location),
                            (u = n),
                            l.pathname === u.pathname &&
                                l.search === u.search &&
                                ("" === l.hash
                                    ? "" !== u.hash
                                    : l.hash === u.hash ||
                                      "" !== u.hash ||
                                      !1)) &&
                            !(o && o.submission && eV(o.submission.formMethod))
                        )
                            return void eR(n, { matches: p }, { flushSync: f });
                        let m = to(p, d, n.pathname);
                        if ((m.active && m.matches && (p = m.matches), !p)) {
                            let {
                                error: e,
                                notFoundMatches: t,
                                route: r,
                            } = tr(n.pathname);
                            eR(
                                n,
                                {
                                    matches: t,
                                    loaderData: {},
                                    errors: { [r.id]: e },
                                },
                                { flushSync: f }
                            );
                            return;
                        }
                        a = new AbortController();
                        let g = eA(e.history, n, a.signal, o && o.submission),
                            w = e.getContext ? await e.getContext() : new v();
                        if (o && o.pendingError)
                            c = [
                                eM(p).route.id,
                                { type: "error", error: o.pendingError },
                            ];
                        else if (
                            o &&
                            o.submission &&
                            eV(o.submission.formMethod)
                        ) {
                            let t = await e_(
                                g,
                                n,
                                o.submission,
                                p,
                                w,
                                m.active,
                                o && !0 === o.initialHydration,
                                { replace: o.replace, flushSync: f }
                            );
                            if (t.shortCircuited) return;
                            if (t.pendingActionResult) {
                                let [e, r] = t.pendingActionResult;
                                if (
                                    eF(r) &&
                                    B(r.error) &&
                                    404 === r.error.status
                                ) {
                                    ((a = null),
                                        eR(n, {
                                            matches: t.matches,
                                            loaderData: {},
                                            errors: { [e]: r.error },
                                        }));
                                    return;
                                }
                            }
                            ((p = t.matches || p),
                                (c = t.pendingActionResult),
                                (h = eK(n, o.submission)),
                                (f = !1),
                                (m.active = !1),
                                (g = eA(e.history, g.url, g.signal)));
                        }
                        let {
                            shortCircuited: S,
                            matches: R,
                            loaderData: x,
                            errors: C,
                        } = await eN(
                            g,
                            n,
                            p,
                            w,
                            m.active,
                            h,
                            o && o.submission,
                            o && o.fetcherSubmission,
                            o && o.replace,
                            o && !0 === o.initialHydration,
                            f,
                            c
                        );
                        S ||
                            ((a = null),
                            eR(n, {
                                matches: R || p,
                                ...eI(c),
                                loaderData: x,
                                errors: C,
                            }));
                    }
                    async function e_(e, t, r, n, a, o, i, s = {}) {
                        var u;
                        let d;
                        if (
                            (e0(),
                            eS(
                                {
                                    navigation: {
                                        state: "submitting",
                                        location: t,
                                        formMethod: (u = r).formMethod,
                                        formAction: u.formAction,
                                        formEncType: u.formEncType,
                                        formData: u.formData,
                                        json: u.json,
                                        text: u.text,
                                    },
                                },
                                { flushSync: !0 === s.flushSync }
                            ),
                            o)
                        ) {
                            let r = await ti(n, t.pathname, e.signal);
                            if ("aborted" === r.type)
                                return { shortCircuited: !0 };
                            if ("error" === r.type) {
                                if (0 === r.partialMatches.length) {
                                    let { matches: e, route: t } = e$(y);
                                    return {
                                        matches: e,
                                        pendingActionResult: [
                                            t.id,
                                            { type: "error", error: r.error },
                                        ],
                                    };
                                }
                                let e = eM(r.partialMatches).route.id;
                                return {
                                    matches: r.partialMatches,
                                    pendingActionResult: [
                                        e,
                                        { type: "error", error: r.error },
                                    ],
                                };
                            }
                            if (r.matches) n = r.matches;
                            else {
                                let {
                                    notFoundMatches: e,
                                    error: r,
                                    route: n,
                                } = tr(t.pathname);
                                return {
                                    matches: e,
                                    pendingActionResult: [
                                        n.id,
                                        { type: "error", error: r },
                                    ],
                                };
                            }
                        }
                        let h = eG(n, t);
                        if (h.route.action || h.route.lazy) {
                            let t = eC(c, p, e, n, h, i ? [] : l, a),
                                r = await eq(e, t, a, null);
                            if (!(d = r[h.route.id])) {
                                for (let e of n)
                                    if (r[e.route.id]) {
                                        d = r[e.route.id];
                                        break;
                                    }
                            }
                            if (e.signal.aborted) return { shortCircuited: !0 };
                        } else
                            d = {
                                type: "error",
                                error: ez(405, {
                                    method: e.method,
                                    pathname: t.pathname,
                                    routeId: h.route.id,
                                }),
                            };
                        if (eH(d)) {
                            let t;
                            return (
                                (t =
                                    s && null != s.replace
                                        ? s.replace
                                        : eP(
                                              d.response.headers.get(
                                                  "Location"
                                              ),
                                              new URL(e.url),
                                              b
                                          ) ===
                                          I.location.pathname +
                                              I.location.search),
                                await eB(e, d, !0, {
                                    submission: r,
                                    replace: t,
                                }),
                                { shortCircuited: !0 }
                            );
                        }
                        if (eF(d)) {
                            let e = eM(n, h.route.id);
                            return (
                                !0 !== (s && s.replace) && (M = "PUSH"),
                                {
                                    matches: n,
                                    pendingActionResult: [
                                        e.route.id,
                                        d,
                                        h.route.id,
                                    ],
                                }
                            );
                        }
                        return {
                            matches: n,
                            pendingActionResult: [h.route.id, d],
                        };
                    }
                    async function eN(r, n, o, i, s, u, d, h, f, m, g, v) {
                        let w = u || eK(n, d),
                            S = d || h || eX(w),
                            R = !F && !m;
                        if (s) {
                            if (R) {
                                let e = eL(v);
                                eS(
                                    {
                                        navigation: w,
                                        ...(void 0 !== e
                                            ? { actionData: e }
                                            : {}),
                                    },
                                    { flushSync: g }
                                );
                            }
                            let e = await ti(o, n.pathname, r.signal);
                            if ("aborted" === e.type)
                                return { shortCircuited: !0 };
                            if ("error" === e.type) {
                                if (0 === e.partialMatches.length) {
                                    let { matches: t, route: r } = e$(y);
                                    return {
                                        matches: t,
                                        loaderData: {},
                                        errors: { [r.id]: e.error },
                                    };
                                }
                                let t = eM(e.partialMatches).route.id;
                                return {
                                    matches: e.partialMatches,
                                    loaderData: {},
                                    errors: { [t]: e.error },
                                };
                            }
                            if (e.matches) o = e.matches;
                            else {
                                let {
                                    error: e,
                                    notFoundMatches: t,
                                    route: r,
                                } = tr(n.pathname);
                                return {
                                    matches: t,
                                    loaderData: {},
                                    errors: { [r.id]: e },
                                };
                            }
                        }
                        let E = t || y,
                            { dsMatches: x, revalidatingFetchers: C } = ec(
                                r,
                                i,
                                c,
                                p,
                                e.history,
                                I,
                                o,
                                S,
                                n,
                                m ? [] : l,
                                !0 === m,
                                Y,
                                G,
                                eg,
                                em,
                                ep,
                                E,
                                b,
                                null != e.patchRoutesOnNavigation,
                                v
                            );
                        if (
                            ((Q = ++K),
                            !e.dataStrategy &&
                                !x.some((e) => e.shouldLoad) &&
                                !x.some(
                                    (e) =>
                                        e.route.middleware &&
                                        e.route.middleware.length > 0
                                ) &&
                                0 === C.length)
                        ) {
                            let e = e8();
                            return (
                                eR(
                                    n,
                                    {
                                        matches: o,
                                        loaderData: {},
                                        errors:
                                            v && eF(v[1])
                                                ? { [v[0]]: v[1].error }
                                                : null,
                                        ...eI(v),
                                        ...(e
                                            ? { fetchers: new Map(I.fetchers) }
                                            : {}),
                                    },
                                    { flushSync: g }
                                ),
                                { shortCircuited: !0 }
                            );
                        }
                        if (R) {
                            let e = {};
                            if (!s) {
                                e.navigation = w;
                                let t = eL(v);
                                void 0 !== t && (e.actionData = t);
                            }
                            (C.length > 0 &&
                                (C.forEach((e) => {
                                    let t = I.fetchers.get(e.key),
                                        r = eQ(void 0, t ? t.data : void 0);
                                    I.fetchers.set(e.key, r);
                                }),
                                (e.fetchers = new Map(I.fetchers))),
                                eS(e, { flushSync: g }));
                        }
                        C.forEach((e) => {
                            (e3(e.key),
                                e.controller && X.set(e.key, e.controller));
                        });
                        let k = () => C.forEach((e) => e3(e.key));
                        a && a.signal.addEventListener("abort", k);
                        let { loaderResults: _, fetcherResults: N } = await eJ(
                            x,
                            C,
                            r,
                            i
                        );
                        if (r.signal.aborted) return { shortCircuited: !0 };
                        (a && a.signal.removeEventListener("abort", k),
                            C.forEach((e) => X.delete(e.key)));
                        let j = eW(_);
                        if (j)
                            return (
                                await eB(r, j.result, !0, { replace: f }),
                                { shortCircuited: !0 }
                            );
                        if ((j = eW(N)))
                            return (
                                ep.add(j.key),
                                await eB(r, j.result, !0, { replace: f }),
                                { shortCircuited: !0 }
                            );
                        let { loaderData: P, errors: A } = eD(I, o, _, v, C, N);
                        m && I.errors && (A = { ...I.errors, ...A });
                        let L = e8(),
                            T = e7(Q);
                        return {
                            matches: o,
                            loaderData: P,
                            errors: A,
                            ...(L || T || C.length > 0
                                ? { fetchers: new Map(I.fetchers) }
                                : {}),
                        };
                    }
                    function eL(e) {
                        if (e && !eF(e[1])) return { [e[0]]: e[1].data };
                        if (I.actionData)
                            if (0 === Object.keys(I.actionData).length)
                                return null;
                            else return I.actionData;
                    }
                    async function eT(r, n, o, i, s, u, h, f, m) {
                        var g, v;
                        (e0(), em.delete(r));
                        let w = I.fetchers.get(r);
                        e1(
                            r,
                            ((g = m),
                            (v = w),
                            {
                                state: "submitting",
                                formMethod: g.formMethod,
                                formAction: g.formAction,
                                formEncType: g.formEncType,
                                formData: g.formData,
                                json: g.json,
                                text: g.text,
                                data: v ? v.data : void 0,
                            }),
                            { flushSync: h }
                        );
                        let S = new AbortController(),
                            R = eA(e.history, o, S.signal, m);
                        if (u) {
                            let e = await ti(
                                i,
                                new URL(R.url).pathname,
                                R.signal,
                                r
                            );
                            if ("aborted" === e.type) return;
                            if ("error" === e.type)
                                return void e2(r, n, e.error, { flushSync: h });
                            if (!e.matches)
                                return void e2(r, n, ez(404, { pathname: o }), {
                                    flushSync: h,
                                });
                            i = e.matches;
                        }
                        let x = eG(i, o);
                        if (!x.route.action && !x.route.lazy) {
                            let e = ez(405, {
                                method: m.formMethod,
                                pathname: o,
                                routeId: n,
                            });
                            e2(r, n, e, { flushSync: h });
                            return;
                        }
                        X.set(r, S);
                        let C = K,
                            k = eC(c, p, R, i, x, l, s),
                            _ = (await eq(R, k, s, r))[x.route.id];
                        if (R.signal.aborted) {
                            X.get(r) === S && X.delete(r);
                            return;
                        }
                        if (eg.has(r)) {
                            if (eH(_) || eF(_)) return void e1(r, eZ(void 0));
                        } else {
                            if (eH(_))
                                return (X.delete(r), Q > C)
                                    ? void e1(r, eZ(void 0))
                                    : (ep.add(r),
                                      e1(r, eQ(m)),
                                      eB(R, _, !1, {
                                          fetcherSubmission: m,
                                          preventScrollReset: f,
                                      }));
                            if (eF(_)) return void e2(r, n, _.error);
                        }
                        let N = I.navigation.location || I.location,
                            j = eA(e.history, N, S.signal),
                            P = t || y,
                            A =
                                "idle" !== I.navigation.state
                                    ? E(P, I.navigation.location, b)
                                    : I.matches;
                        d(A, "Didn't find any matches after fetcher action");
                        let L = ++K;
                        es.set(r, L);
                        let T = eQ(m, _.data);
                        I.fetchers.set(r, T);
                        let { dsMatches: D, revalidatingFetchers: O } = ec(
                            j,
                            s,
                            c,
                            p,
                            e.history,
                            I,
                            A,
                            m,
                            N,
                            l,
                            !1,
                            Y,
                            G,
                            eg,
                            em,
                            ep,
                            P,
                            b,
                            null != e.patchRoutesOnNavigation,
                            [x.route.id, _]
                        );
                        (O.filter((e) => e.key !== r).forEach((e) => {
                            let t = e.key,
                                r = I.fetchers.get(t),
                                n = eQ(void 0, r ? r.data : void 0);
                            (I.fetchers.set(t, n),
                                e3(t),
                                e.controller && X.set(t, e.controller));
                        }),
                            eS({ fetchers: new Map(I.fetchers) }));
                        let $ = () => O.forEach((e) => e3(e.key));
                        S.signal.addEventListener("abort", $);
                        let { loaderResults: z, fetcherResults: W } = await eJ(
                            D,
                            O,
                            j,
                            s
                        );
                        if (S.signal.aborted) return;
                        if (
                            (S.signal.removeEventListener("abort", $),
                            es.delete(r),
                            X.delete(r),
                            O.forEach((e) => X.delete(e.key)),
                            I.fetchers.has(r))
                        ) {
                            let e = eZ(_.data);
                            I.fetchers.set(r, e);
                        }
                        let U = eW(z);
                        if (U)
                            return eB(j, U.result, !1, {
                                preventScrollReset: f,
                            });
                        if ((U = eW(W)))
                            return (
                                ep.add(U.key),
                                eB(j, U.result, !1, { preventScrollReset: f })
                            );
                        let { loaderData: B, errors: F } = eD(
                            I,
                            A,
                            z,
                            void 0,
                            O,
                            W
                        );
                        (e7(L),
                            "loading" === I.navigation.state && L > Q
                                ? (d(M, "Expected pending action"),
                                  a && a.abort(),
                                  eR(I.navigation.location, {
                                      matches: A,
                                      loaderData: B,
                                      errors: F,
                                      fetchers: new Map(I.fetchers),
                                  }))
                                : (eS({
                                      errors: F,
                                      loaderData: eO(I.loaderData, B, A, F),
                                      fetchers: new Map(I.fetchers),
                                  }),
                                  (Y = !1)));
                    }
                    async function eU(t, r, n, a, o, i, s, u, d) {
                        let h = I.fetchers.get(t);
                        e1(t, eQ(d, h ? h.data : void 0), { flushSync: s });
                        let f = new AbortController(),
                            m = eA(e.history, n, f.signal);
                        if (i) {
                            let e = await ti(
                                a,
                                new URL(m.url).pathname,
                                m.signal,
                                t
                            );
                            if ("aborted" === e.type) return;
                            if ("error" === e.type)
                                return void e2(t, r, e.error, { flushSync: s });
                            if (!e.matches)
                                return void e2(t, r, ez(404, { pathname: n }), {
                                    flushSync: s,
                                });
                            a = e.matches;
                        }
                        let y = eG(a, n);
                        X.set(t, f);
                        let g = K,
                            v = eC(c, p, m, a, y, l, o),
                            b = (await eq(m, v, o, t))[y.route.id];
                        if (
                            (X.get(t) === f && X.delete(t), !m.signal.aborted)
                        ) {
                            if (eg.has(t)) return void e1(t, eZ(void 0));
                            if (eH(b))
                                if (Q > g) return void e1(t, eZ(void 0));
                                else {
                                    (ep.add(t),
                                        await eB(m, b, !1, {
                                            preventScrollReset: u,
                                        }));
                                    return;
                                }
                            if (eF(b)) return void e2(t, r, b.error);
                            e1(t, eZ(b.data));
                        }
                    }
                    async function eB(
                        e,
                        t,
                        r,
                        {
                            submission: n,
                            fetcherSubmission: o,
                            preventScrollReset: l,
                            replace: u,
                        } = {}
                    ) {
                        t.response.headers.has("X-Remix-Revalidate") &&
                            (Y = !0);
                        let c = t.response.headers.get("Location");
                        (d(
                            c,
                            "Expected a Location header on the redirect Response"
                        ),
                            (c = eP(c, new URL(e.url), b)));
                        let h = f(I.location, c, { _isRedirect: !0 });
                        if (s) {
                            let e = !1;
                            if (
                                t.response.headers.has(
                                    "X-Remix-Reload-Document"
                                )
                            )
                                e = !0;
                            else {
                                let t;
                                if (((t = c), ea.test(t))) {
                                    let t = g(c, !0);
                                    e =
                                        t.origin !== i.location.origin ||
                                        null == A(t.pathname, b);
                                }
                            }
                            if (e)
                                return void (u
                                    ? i.location.replace(c)
                                    : i.location.assign(c));
                        }
                        a = null;
                        let p =
                                !0 === u ||
                                t.response.headers.has("X-Remix-Replace")
                                    ? "REPLACE"
                                    : "PUSH",
                            {
                                formMethod: m,
                                formAction: y,
                                formEncType: v,
                            } = I.navigation;
                        !n && !o && m && y && v && (n = eX(I.navigation));
                        let w = n || o;
                        if (ee.has(t.response.status) && w && eV(w.formMethod))
                            await ex(p, h, {
                                submission: { ...w, formAction: c },
                                preventScrollReset: l || $,
                                enableViewTransition: r ? z : void 0,
                            });
                        else {
                            let e = eK(h, n);
                            await ex(p, h, {
                                overrideNavigation: e,
                                fetcherSubmission: o,
                                preventScrollReset: l || $,
                                enableViewTransition: r ? z : void 0,
                            });
                        }
                    }
                    async function eq(e, t, r, n) {
                        let a,
                            o = {};
                        try {
                            a = await ek(w, e, t, n, r, !1);
                        } catch (e) {
                            return (
                                t
                                    .filter((e) => e.shouldLoad)
                                    .forEach((t) => {
                                        o[t.route.id] = {
                                            type: "error",
                                            error: e,
                                        };
                                    }),
                                o
                            );
                        }
                        if (e.signal.aborted) return o;
                        for (let [r, n] of Object.entries(a)) {
                            var i;
                            if (eY((i = n).result) && Z.has(i.result.status)) {
                                let a = n.result;
                                o[r] = {
                                    type: "redirect",
                                    response: (function (e, t, r, n, a) {
                                        let o,
                                            i = e.headers.get("Location");
                                        if (
                                            (d(
                                                i,
                                                "Redirects returned/thrown from loaders/actions must have a Location header"
                                            ),
                                            (o = i),
                                            !ea.test(o))
                                        ) {
                                            let o = n.slice(
                                                0,
                                                n.findIndex(
                                                    (e) => e.route.id === r
                                                ) + 1
                                            );
                                            ((i = el(new URL(t.url), o, a, i)),
                                                e.headers.set("Location", i));
                                        }
                                        return e;
                                    })(a, e, r, t, b),
                                };
                            } else o[r] = await ej(n);
                        }
                        return o;
                    }
                    async function eJ(e, t, r, n) {
                        let a = eq(r, e, n, null),
                            o = Promise.all(
                                t.map(async (e) => {
                                    if (
                                        !e.matches ||
                                        !e.match ||
                                        !e.request ||
                                        !e.controller
                                    )
                                        return Promise.resolve({
                                            [e.key]: {
                                                type: "error",
                                                error: ez(404, {
                                                    pathname: e.path,
                                                }),
                                            },
                                        });
                                    {
                                        let t = (
                                            await eq(
                                                e.request,
                                                e.matches,
                                                n,
                                                e.key
                                            )
                                        )[e.match.route.id];
                                        return { [e.key]: t };
                                    }
                                })
                            );
                        return {
                            loaderResults: await a,
                            fetcherResults: (await o).reduce(
                                (e, t) => Object.assign(e, t),
                                {}
                            ),
                        };
                    }
                    function e0() {
                        ((Y = !0),
                            em.forEach((e, t) => {
                                (X.has(t) && G.add(t), e3(t));
                            }));
                    }
                    function e1(e, t, r = {}) {
                        (I.fetchers.set(e, t),
                            eS(
                                { fetchers: new Map(I.fetchers) },
                                { flushSync: !0 === (r && r.flushSync) }
                            ));
                    }
                    function e2(e, t, r, n = {}) {
                        let a = eM(I.matches, t);
                        (e5(e),
                            eS(
                                {
                                    errors: { [a.route.id]: r },
                                    fetchers: new Map(I.fetchers),
                                },
                                { flushSync: !0 === (n && n.flushSync) }
                            ));
                    }
                    function e4(e) {
                        return (
                            ey.set(e, (ey.get(e) || 0) + 1),
                            eg.has(e) && eg.delete(e),
                            I.fetchers.get(e) || er
                        );
                    }
                    function e5(e) {
                        let t = I.fetchers.get(e);
                        (X.has(e) &&
                            !(t && "loading" === t.state && es.has(e)) &&
                            e3(e),
                            em.delete(e),
                            es.delete(e),
                            ep.delete(e),
                            eg.delete(e),
                            G.delete(e),
                            I.fetchers.delete(e));
                    }
                    function e3(e, t) {
                        let r = X.get(e);
                        r && (r.abort(t), X.delete(e));
                    }
                    function e6(e) {
                        for (let t of e) {
                            let e = eZ(e4(t).data);
                            I.fetchers.set(t, e);
                        }
                    }
                    function e8() {
                        let e = [],
                            t = !1;
                        for (let r of ep) {
                            let n = I.fetchers.get(r);
                            (d(n, `Expected fetcher: ${r}`),
                                "loading" === n.state &&
                                    (ep.delete(r), e.push(r), (t = !0)));
                        }
                        return (e6(e), t);
                    }
                    function e7(e) {
                        let t = [];
                        for (let [r, n] of es)
                            if (n < e) {
                                let e = I.fetchers.get(r);
                                (d(e, `Expected fetcher: ${r}`),
                                    "loading" === e.state &&
                                        (e3(r), es.delete(r), t.push(r)));
                            }
                        return (e6(t), t.length > 0);
                    }
                    function e9(e) {
                        (I.blockers.delete(e), ev.delete(e));
                    }
                    function te(e, t) {
                        let r = I.blockers.get(e) || en;
                        d(
                            ("unblocked" === r.state &&
                                "blocked" === t.state) ||
                                ("blocked" === r.state &&
                                    "blocked" === t.state) ||
                                ("blocked" === r.state &&
                                    "proceeding" === t.state) ||
                                ("blocked" === r.state &&
                                    "unblocked" === t.state) ||
                                ("proceeding" === r.state &&
                                    "unblocked" === t.state),
                            `Invalid blocker state transition: ${r.state} -> ${t.state}`
                        );
                        let n = new Map(I.blockers);
                        (n.set(e, t), eS({ blockers: n }));
                    }
                    function tt({
                        currentLocation: e,
                        nextLocation: t,
                        historyAction: r,
                    }) {
                        if (0 === ev.size) return;
                        ev.size > 1 &&
                            h(
                                !1,
                                "A router only supports one blocker at a time"
                            );
                        let n = Array.from(ev.entries()),
                            [a, o] = n[n.length - 1],
                            i = I.blockers.get(a);
                        if (
                            (!i || "proceeding" !== i.state) &&
                            o({
                                currentLocation: e,
                                nextLocation: t,
                                historyAction: r,
                            })
                        )
                            return a;
                    }
                    function tr(e) {
                        let r = ez(404, { pathname: e }),
                            { matches: n, route: a } = e$(t || y);
                        return { notFoundMatches: n, route: a, error: r };
                    }
                    function tn(e, t) {
                        return (
                            (j &&
                                j(
                                    e,
                                    t.map((e) => C(e, I.loaderData))
                                )) ||
                            e.key
                        );
                    }
                    function ta(e, t) {
                        if (N) {
                            let r = N[tn(e, t)];
                            if ("number" == typeof r) return r;
                        }
                        return null;
                    }
                    function to(t, r, n) {
                        if (e.patchRoutesOnNavigation) {
                            if (!t)
                                return {
                                    active: !0,
                                    matches: x(r, n, b, !0) || [],
                                };
                            else if (Object.keys(t[0].params).length > 0)
                                return { active: !0, matches: x(r, n, b, !0) };
                        }
                        return { active: !1, matches: null };
                    }
                    async function ti(r, n, a, o) {
                        if (!e.patchRoutesOnNavigation)
                            return { type: "success", matches: r };
                        let i = r;
                        for (;;) {
                            let r = null == t,
                                s = t || y,
                                l = p;
                            try {
                                await e.patchRoutesOnNavigation({
                                    signal: a,
                                    path: n,
                                    matches: i,
                                    fetcherKey: o,
                                    patch: (e, t) => {
                                        a.aborted || ef(e, t, s, l, c, !1);
                                    },
                                });
                            } catch (e) {
                                return {
                                    type: "error",
                                    error: e,
                                    partialMatches: i,
                                };
                            } finally {
                                r && !a.aborted && (y = [...y]);
                            }
                            if (a.aborted) return { type: "aborted" };
                            let u = E(s, n, b);
                            if (u) return { type: "success", matches: u };
                            let d = x(s, n, b, !0);
                            if (
                                !d ||
                                (i.length === d.length &&
                                    i.every(
                                        (e, t) => e.route.id === d[t].route.id
                                    ))
                            )
                                return { type: "success", matches: null };
                            i = d;
                        }
                    }
                    return (
                        (n = {
                            get basename() {
                                return b;
                            },
                            get future() {
                                return R;
                            },
                            get state() {
                                return I;
                            },
                            get routes() {
                                return y;
                            },
                            get window() {
                                return i;
                            },
                            initialize: function () {
                                if (
                                    ((k = e.history.listen(
                                        ({
                                            action: t,
                                            location: r,
                                            delta: n,
                                        }) => {
                                            if (o) {
                                                (o(), (o = void 0));
                                                return;
                                            }
                                            h(
                                                0 === ev.size || null != n,
                                                "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
                                            );
                                            let a = tt({
                                                currentLocation: I.location,
                                                nextLocation: r,
                                                historyAction: t,
                                            });
                                            if (a && null != n) {
                                                let t = new Promise((e) => {
                                                    o = e;
                                                });
                                                (e.history.go(-1 * n),
                                                    te(a, {
                                                        state: "blocked",
                                                        location: r,
                                                        proceed() {
                                                            (te(a, {
                                                                state: "proceeding",
                                                                proceed: void 0,
                                                                reset: void 0,
                                                                location: r,
                                                            }),
                                                                t.then(() =>
                                                                    e.history.go(
                                                                        n
                                                                    )
                                                                ));
                                                        },
                                                        reset() {
                                                            let e = new Map(
                                                                I.blockers
                                                            );
                                                            (e.set(a, en),
                                                                eS({
                                                                    blockers: e,
                                                                }));
                                                        },
                                                    }));
                                                return;
                                            }
                                            return ex(t, r);
                                        }
                                    )),
                                    s)
                                ) {
                                    var t = i,
                                        r = W;
                                    try {
                                        let e = t.sessionStorage.getItem(ei);
                                        if (e) {
                                            let t = JSON.parse(e);
                                            for (let [e, n] of Object.entries(
                                                t || {}
                                            ))
                                                n &&
                                                    Array.isArray(n) &&
                                                    r.set(e, new Set(n || []));
                                        }
                                    } catch (e) {}
                                    let e = () =>
                                        (function (e, t) {
                                            if (t.size > 0) {
                                                let r = {};
                                                for (let [e, n] of t)
                                                    r[e] = [...n];
                                                try {
                                                    e.sessionStorage.setItem(
                                                        ei,
                                                        JSON.stringify(r)
                                                    );
                                                } catch (e) {
                                                    h(
                                                        !1,
                                                        `Failed to save applied view transitions in sessionStorage (${e}).`
                                                    );
                                                }
                                            }
                                        })(i, W);
                                    (i.addEventListener("pagehide", e),
                                        (U = () =>
                                            i.removeEventListener(
                                                "pagehide",
                                                e
                                            )));
                                }
                                return (
                                    I.initialized ||
                                        ex("POP", I.location, {
                                            initialHydration: !0,
                                        }),
                                    n
                                );
                            },
                            subscribe: function (e) {
                                return (_.add(e), () => _.delete(e));
                            },
                            enableScrollRestoration: function (e, t, r) {
                                if (
                                    ((N = e),
                                    (P = t),
                                    (j = r || null),
                                    !L && I.navigation === et)
                                ) {
                                    L = !0;
                                    let e = ta(I.location, I.matches);
                                    null != e &&
                                        eS({ restoreScrollPosition: e });
                                }
                                return () => {
                                    ((N = null), (P = null), (j = null));
                                };
                            },
                            navigate: eE,
                            fetch: async function r(r, n, a, o) {
                                e3(r);
                                let i = !0 === (o && o.flushSync),
                                    s = t || y,
                                    l = el(
                                        I.location,
                                        I.matches,
                                        b,
                                        a,
                                        n,
                                        o?.relative
                                    ),
                                    u = E(s, l, b),
                                    c = to(u, s, l);
                                if (
                                    (c.active && c.matches && (u = c.matches),
                                    !u)
                                )
                                    return void e2(
                                        r,
                                        n,
                                        ez(404, { pathname: l }),
                                        { flushSync: i }
                                    );
                                let {
                                    path: d,
                                    submission: h,
                                    error: p,
                                } = eu(!0, l, o);
                                if (p)
                                    return void e2(r, n, p, { flushSync: i });
                                let f = e.getContext
                                        ? await e.getContext()
                                        : new v(),
                                    m = !0 === (o && o.preventScrollReset);
                                h && eV(h.formMethod)
                                    ? await eT(r, n, d, u, f, c.active, i, m, h)
                                    : (em.set(r, { routeId: n, path: d }),
                                      await eU(
                                          r,
                                          n,
                                          d,
                                          u,
                                          f,
                                          c.active,
                                          i,
                                          m,
                                          h
                                      ));
                            },
                            revalidate: function () {
                                let e, t, r;
                                (ew ||
                                    (ew = {
                                        promise: (r = new Promise((n, a) => {
                                            ((e = async (e) => {
                                                n(e);
                                                try {
                                                    await r;
                                                } catch (e) {}
                                            }),
                                                (t = async (e) => {
                                                    a(e);
                                                    try {
                                                        await r;
                                                    } catch (e) {}
                                                }));
                                        })),
                                        resolve: e,
                                        reject: t,
                                    }),
                                    e0(),
                                    eS({ revalidation: "loading" }));
                                let n = ew.promise;
                                return (
                                    "submitting" === I.navigation.state ||
                                        ("idle" === I.navigation.state
                                            ? ex(I.historyAction, I.location, {
                                                  startUninterruptedRevalidation:
                                                      !0,
                                              })
                                            : ex(
                                                  M || I.historyAction,
                                                  I.navigation.location,
                                                  {
                                                      overrideNavigation:
                                                          I.navigation,
                                                      enableViewTransition:
                                                          !0 === z,
                                                  }
                                              )),
                                    n
                                );
                            },
                            createHref: (t) => e.history.createHref(t),
                            encodeLocation: (t) => e.history.encodeLocation(t),
                            getFetcher: e4,
                            resetFetcher: function (e, t) {
                                (e3(e, t?.reason), e1(e, eZ(null)));
                            },
                            deleteFetcher: function (e) {
                                let t = (ey.get(e) || 0) - 1;
                                (t <= 0
                                    ? (ey.delete(e), eg.add(e))
                                    : ey.set(e, t),
                                    eS({ fetchers: new Map(I.fetchers) }));
                            },
                            dispose: function () {
                                (k && k(),
                                    U && U(),
                                    _.clear(),
                                    a && a.abort(),
                                    I.fetchers.forEach((e, t) => e5(t)),
                                    I.blockers.forEach((e, t) => e9(t)));
                            },
                            getBlocker: function (e, t) {
                                let r = I.blockers.get(e) || en;
                                return (ev.get(e) !== t && ev.set(e, t), r);
                            },
                            deleteBlocker: e9,
                            patchRoutes: function (e, r, n = !1) {
                                let a = null == t;
                                (ef(e, r, t || y, p, c, n),
                                    a && ((y = [...y]), eS({})));
                            },
                            _internalFetchControllers: X,
                            _internalSetRoutes: function (e) {
                                t = S(e, c, void 0, (p = {}));
                            },
                            _internalSetStateDoNotUseOrYouWillBreakYourApp(e) {
                                eS(e);
                            },
                        }),
                        e.unstable_instrumentations &&
                            (n = (function (e, t) {
                                let r = { navigate: [], fetch: [] };
                                if (
                                    (t.forEach((e) =>
                                        e({
                                            instrument(e) {
                                                for (let t of Object.keys(e))
                                                    e[t] && r[t].push(e[t]);
                                            },
                                        })
                                    ),
                                    r.navigate.length > 0)
                                ) {
                                    let t = e.navigate[H] ?? e.navigate,
                                        n = q(r.navigate, t, (...t) => {
                                            let [r, n] = t;
                                            return {
                                                to:
                                                    "number" == typeof r ||
                                                    "string" == typeof r
                                                        ? r
                                                        : r
                                                          ? m(r)
                                                          : ".",
                                                ...J(e, n ?? {}),
                                            };
                                        });
                                    n && ((n[H] = t), (e.navigate = n));
                                }
                                if (r.fetch.length > 0) {
                                    let t = e.fetch[H] ?? e.fetch,
                                        n = q(r.fetch, t, (...t) => {
                                            let [r, , n, a] = t;
                                            return {
                                                href: n ?? ".",
                                                fetcherKey: r,
                                                ...J(e, a ?? {}),
                                            };
                                        });
                                    n && ((n[H] = t), (e.fetch = n));
                                }
                                return e;
                            })(
                                n,
                                e.unstable_instrumentations
                                    .map((e) => e.router)
                                    .filter(Boolean)
                            )),
                        n
                    );
                })({
                    basename: t?.basename,
                    getContext: t?.getContext,
                    future: t?.future,
                    history: c({ window: t?.window }),
                    hydrationData:
                        t?.hydrationData ||
                        ((r = window?.__staticRouterHydrationData) &&
                            r.errors &&
                            (r = {
                                ...r,
                                errors: (function (e) {
                                    if (!e) return null;
                                    let t = Object.entries(e),
                                        r = {};
                                    for (let [e, n] of t)
                                        if (
                                            n &&
                                            "RouteErrorResponse" === n.__type
                                        )
                                            r[e] = new U(
                                                n.status,
                                                n.statusText,
                                                n.data,
                                                !0 === n.internal
                                            );
                                        else if (n && "Error" === n.__type) {
                                            if (n.__subType) {
                                                let t = window[n.__subType];
                                                if ("function" == typeof t)
                                                    try {
                                                        let a = new t(
                                                            n.message
                                                        );
                                                        ((a.stack = ""),
                                                            (r[e] = a));
                                                    } catch (e) {}
                                            }
                                            if (null == r[e]) {
                                                let t = Error(n.message);
                                                ((t.stack = ""), (r[e] = t));
                                            }
                                        } else r[e] = n;
                                    return r;
                                })(r.errors),
                            }),
                        r),
                    routes: e,
                    mapRouteProperties: tj,
                    hydrationRouteProperties: tP,
                    dataStrategy: t?.dataStrategy,
                    patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
                    window: t?.window,
                    unstable_instrumentations: t?.unstable_instrumentations,
                }).initialize();
            }
            function t8({ basename: e, children: t, window: r }) {
                let n = o.useRef();
                null == n.current &&
                    (n.current = c({ window: r, v5Compat: !0 }));
                let a = n.current,
                    [i, s] = o.useState({
                        action: a.action,
                        location: a.location,
                    }),
                    l = o.useCallback(
                        (e) => {
                            o.startTransition(() => s(e));
                        },
                        [s]
                    );
                return (
                    o.useLayoutEffect(() => a.listen(l), [a, l]),
                    o.createElement(tM, {
                        basename: e,
                        children: t,
                        location: i.location,
                        navigationType: i.action,
                        navigator: a,
                    })
                );
            }
            var t7 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                t9 = o.forwardRef(function (
                    {
                        onClick: e,
                        discover: t = "render",
                        prefetch: r = "none",
                        relative: n,
                        reloadDocument: a,
                        replace: i,
                        state: s,
                        target: l,
                        to: u,
                        preventScrollReset: c,
                        viewTransition: p,
                        ...f
                    },
                    m
                ) {
                    let y,
                        { basename: g } = o.useContext(e3),
                        v = "string" == typeof u && t7.test(u),
                        b = !1;
                    if ("string" == typeof u && v && ((y = u), t3))
                        try {
                            let e = new URL(window.location.href),
                                t = new URL(
                                    u.startsWith("//") ? e.protocol + u : u
                                ),
                                r = A(t.pathname, g);
                            t.origin === e.origin && null != r
                                ? (u = r + t.search + t.hash)
                                : (b = !0);
                        } catch (e) {
                            h(
                                !1,
                                `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
                            );
                        }
                    let w = (function (e, { relative: t } = {}) {
                            d(
                                e9(),
                                "useHref() may be used only in the context of a <Router> component."
                            );
                            let { basename: r, navigator: n } =
                                    o.useContext(e3),
                                {
                                    hash: a,
                                    pathname: i,
                                    search: s,
                                } = tl(e, { relative: t }),
                                l = i;
                            return (
                                "/" !== r && (l = "/" === i ? r : M([r, i])),
                                n.createHref({
                                    pathname: l,
                                    search: s,
                                    hash: a,
                                })
                            );
                        })(u, { relative: n }),
                        [S, R, E] = (function (e, t) {
                            let r = o.useContext(t0),
                                [n, a] = o.useState(!1),
                                [i, s] = o.useState(!1),
                                {
                                    onFocus: l,
                                    onBlur: u,
                                    onMouseEnter: c,
                                    onMouseLeave: d,
                                    onTouchStart: h,
                                } = t,
                                p = o.useRef(null);
                            (o.useEffect(() => {
                                if (
                                    ("render" === e && s(!0), "viewport" === e)
                                ) {
                                    let e = new IntersectionObserver(
                                        (e) => {
                                            e.forEach((e) => {
                                                s(e.isIntersecting);
                                            });
                                        },
                                        { threshold: 0.5 }
                                    );
                                    return (
                                        p.current && e.observe(p.current),
                                        () => {
                                            e.disconnect();
                                        }
                                    );
                                }
                            }, [e]),
                                o.useEffect(() => {
                                    if (n) {
                                        let e = setTimeout(() => {
                                            s(!0);
                                        }, 100);
                                        return () => {
                                            clearTimeout(e);
                                        };
                                    }
                                }, [n]));
                            let f = () => {
                                    a(!0);
                                },
                                m = () => {
                                    (a(!1), s(!1));
                                };
                            return r
                                ? "intent" !== e
                                    ? [i, p, {}]
                                    : [
                                          i,
                                          p,
                                          {
                                              onFocus: t2(l, f),
                                              onBlur: t2(u, m),
                                              onMouseEnter: t2(c, f),
                                              onMouseLeave: t2(d, m),
                                              onTouchStart: t2(h, f),
                                          },
                                      ]
                                : [!1, p, {}];
                        })(r, f),
                        x = ra(u, {
                            replace: i,
                            state: s,
                            target: l,
                            preventScrollReset: c,
                            relative: n,
                            viewTransition: p,
                        }),
                        C = o.createElement("a", {
                            ...f,
                            ...E,
                            href: y || w,
                            onClick:
                                b || a
                                    ? e
                                    : function (t) {
                                          (e && e(t),
                                              t.defaultPrevented || x(t));
                                      },
                            ref: (function (...e) {
                                return (t) => {
                                    e.forEach((e) => {
                                        "function" == typeof e
                                            ? e(t)
                                            : null != e && (e.current = t);
                                    });
                                };
                            })(m, R),
                            target: l,
                            "data-discover":
                                v || "render" !== t ? void 0 : "true",
                        });
                    return S && !v
                        ? o.createElement(
                              o.Fragment,
                              null,
                              C,
                              o.createElement(t4, { page: w })
                          )
                        : C;
                });
            t9.displayName = "Link";
            var re = o.forwardRef(function (
                {
                    "aria-current": e = "page",
                    caseSensitive: t = !1,
                    className: r = "",
                    end: n = !1,
                    style: a,
                    to: i,
                    viewTransition: s,
                    children: l,
                    ...u
                },
                c
            ) {
                let h,
                    p = tl(i, { relative: u.relative }),
                    f = te(),
                    m = o.useContext(e1),
                    { navigator: y, basename: g } = o.useContext(e3),
                    v =
                        null != m &&
                        (function (e, { relative: t } = {}) {
                            let r = o.useContext(e4);
                            d(
                                null != r,
                                "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
                            );
                            let { basename: n } = rn("useViewTransitionState"),
                                a = tl(e, { relative: t });
                            if (!r.isTransitioning) return !1;
                            let i =
                                    A(r.currentLocation.pathname, n) ||
                                    r.currentLocation.pathname,
                                s =
                                    A(r.nextLocation.pathname, n) ||
                                    r.nextLocation.pathname;
                            return (
                                null != j(a.pathname, s) ||
                                null != j(a.pathname, i)
                            );
                        })(p) &&
                        !0 === s,
                    b = y.encodeLocation
                        ? y.encodeLocation(p).pathname
                        : p.pathname,
                    w = f.pathname,
                    S =
                        m && m.navigation && m.navigation.location
                            ? m.navigation.location.pathname
                            : null;
                (t ||
                    ((w = w.toLowerCase()),
                    (S = S ? S.toLowerCase() : null),
                    (b = b.toLowerCase())),
                    S && g && (S = A(S, g) || S));
                let R = "/" !== b && b.endsWith("/") ? b.length - 1 : b.length,
                    E =
                        w === b ||
                        (!n && w.startsWith(b) && "/" === w.charAt(R)),
                    x =
                        null != S &&
                        (S === b ||
                            (!n &&
                                S.startsWith(b) &&
                                "/" === S.charAt(b.length))),
                    C = { isActive: E, isPending: x, isTransitioning: v },
                    k = E ? e : void 0;
                h =
                    "function" == typeof r
                        ? r(C)
                        : [
                              r,
                              E ? "active" : null,
                              x ? "pending" : null,
                              v ? "transitioning" : null,
                          ]
                              .filter(Boolean)
                              .join(" ");
                let _ = "function" == typeof a ? a(C) : a;
                return o.createElement(
                    t9,
                    {
                        ...u,
                        "aria-current": k,
                        className: h,
                        ref: c,
                        style: _,
                        to: i,
                        viewTransition: s,
                    },
                    "function" == typeof l ? l(C) : l
                );
            });
            function rt({ getKey: e, storageKey: t, ...r }) {
                let n = o.useContext(t0),
                    { basename: a } = o.useContext(e3),
                    i = te(),
                    s = tb();
                !(function ({ getKey: e, storageKey: t } = {}) {
                    let r,
                        { router: n } = rn("useScrollRestoration"),
                        { restoreScrollPosition: a, preventScrollReset: i } =
                            (d(
                                (r = o.useContext(e1)),
                                rr("useScrollRestoration")
                            ),
                            r),
                        { basename: s } = o.useContext(e3),
                        l = te(),
                        u = tb(),
                        c = tv();
                    (o.useEffect(
                        () => (
                            (window.history.scrollRestoration = "manual"),
                            () => {
                                window.history.scrollRestoration = "auto";
                            }
                        ),
                        []
                    ),
                        (function (e, t) {
                            let { capture: r } = {};
                            o.useEffect(() => {
                                let t = null != r ? { capture: r } : void 0;
                                return (
                                    window.addEventListener("pagehide", e, t),
                                    () => {
                                        window.removeEventListener(
                                            "pagehide",
                                            e,
                                            t
                                        );
                                    }
                                );
                            }, [e, r]);
                        })(
                            o.useCallback(() => {
                                "idle" === c.state &&
                                    (rl[ru(l, u, s, e)] = window.scrollY);
                                try {
                                    sessionStorage.setItem(
                                        t || rs,
                                        JSON.stringify(rl)
                                    );
                                } catch (e) {
                                    h(
                                        !1,
                                        `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`
                                    );
                                }
                                window.history.scrollRestoration = "auto";
                            }, [c.state, e, s, l, u, t])
                        ),
                        "undefined" != typeof document &&
                            (o.useLayoutEffect(() => {
                                try {
                                    let e = sessionStorage.getItem(t || rs);
                                    e && (rl = JSON.parse(e));
                                } catch (e) {}
                            }, [t]),
                            o.useLayoutEffect(() => {
                                let t = n?.enableScrollRestoration(
                                    rl,
                                    () => window.scrollY,
                                    e ? (t, r) => ru(t, r, s, e) : void 0
                                );
                                return () => t && t();
                            }, [n, s, e]),
                            o.useLayoutEffect(() => {
                                if (!1 !== a) {
                                    if ("number" == typeof a)
                                        return void window.scrollTo(0, a);
                                    try {
                                        if (l.hash) {
                                            let e = document.getElementById(
                                                decodeURIComponent(
                                                    l.hash.slice(1)
                                                )
                                            );
                                            if (e)
                                                return void e.scrollIntoView();
                                        }
                                    } catch {
                                        h(
                                            !1,
                                            `"${l.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`
                                        );
                                    }
                                    !0 !== i && window.scrollTo(0, 0);
                                }
                            }, [l, a, i])));
                })({ getKey: e, storageKey: t });
                let l = o.useMemo(() => {
                    if (!n || !e) return null;
                    let t = ru(i, s, a, e);
                    return t !== i.key ? t : null;
                }, []);
                if (!n || n.isSpaMode) return null;
                let u = ((e, t) => {
                    if (!window.history.state || !window.history.state.key) {
                        let e = Math.random().toString(32).slice(2);
                        window.history.replaceState({ key: e }, "");
                    }
                    try {
                        let r = JSON.parse(sessionStorage.getItem(e) || "{}")[
                            t || window.history.state.key
                        ];
                        "number" == typeof r && window.scrollTo(0, r);
                    } catch (t) {
                        (console.error(t), sessionStorage.removeItem(e));
                    }
                }).toString();
                return o.createElement("script", {
                    ...r,
                    suppressHydrationWarning: !0,
                    dangerouslySetInnerHTML: {
                        __html: `(${u})(${JSON.stringify(t || rs)}, ${JSON.stringify(l)})`,
                    },
                });
            }
            function rr(e) {
                return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
            }
            function rn(e) {
                let t = o.useContext(e0);
                return (d(t, rr(e)), t);
            }
            function ra(
                e,
                {
                    target: t,
                    replace: r,
                    state: n,
                    preventScrollReset: a,
                    relative: i,
                    viewTransition: s,
                } = {}
            ) {
                let l = to(),
                    u = te(),
                    c = tl(e, { relative: i });
                return o.useCallback(
                    (o) => {
                        0 !== o.button ||
                            (t && "_self" !== t) ||
                            o.metaKey ||
                            o.altKey ||
                            o.ctrlKey ||
                            o.shiftKey ||
                            (o.preventDefault(),
                            l(e, {
                                replace: void 0 !== r ? r : m(u) === m(c),
                                state: n,
                                preventScrollReset: a,
                                relative: i,
                                viewTransition: s,
                            }));
                    },
                    [u, l, c, r, n, t, e, a, i, s]
                );
            }
            function ro(e) {
                h(
                    "undefined" != typeof URLSearchParams,
                    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
                );
                let t = o.useRef(tB(e)),
                    r = o.useRef(!1),
                    n = te(),
                    a = o.useMemo(() => {
                        var e, a;
                        let o;
                        return (
                            (e = n.search),
                            (a = r.current ? null : t.current),
                            (o = tB(e)),
                            a &&
                                a.forEach((e, t) => {
                                    o.has(t) ||
                                        a.getAll(t).forEach((e) => {
                                            o.append(t, e);
                                        });
                                }),
                            o
                        );
                    }, [n.search]),
                    i = to(),
                    s = o.useCallback(
                        (e, t) => {
                            let n = tB(
                                "function" == typeof e
                                    ? e(new URLSearchParams(a))
                                    : e
                            );
                            ((r.current = !0), i("?" + n, t));
                        },
                        [i, a]
                    );
                return [a, s];
            }
            ((re.displayName = "NavLink"),
                (o.forwardRef(
                    (
                        {
                            discover: e = "render",
                            fetcherKey: t,
                            navigate: r,
                            reloadDocument: n,
                            replace: a,
                            state: i,
                            method: s = tz,
                            action: l,
                            onSubmit: u,
                            relative: c,
                            preventScrollReset: h,
                            viewTransition: p,
                            ...f
                        },
                        y
                    ) => {
                        let g = (function () {
                                let { router: e } = rn("useSubmit"),
                                    { basename: t } = o.useContext(e3),
                                    r = tg("useRouteId");
                                return o.useCallback(
                                    async (n, a = {}) => {
                                        let {
                                            action: o,
                                            method: i,
                                            encType: s,
                                            formData: l,
                                            body: u,
                                        } = (function (e, t) {
                                            let r, n, a, o, i;
                                            if (
                                                tU(e) &&
                                                "form" ===
                                                    e.tagName.toLowerCase()
                                            ) {
                                                let i =
                                                    e.getAttribute("action");
                                                ((n = i ? A(i, t) : null),
                                                    (r =
                                                        e.getAttribute(
                                                            "method"
                                                        ) || tz),
                                                    (a =
                                                        tq(
                                                            e.getAttribute(
                                                                "enctype"
                                                            )
                                                        ) || tW),
                                                    (o = new FormData(e)));
                                            } else if (
                                                (tU(e) &&
                                                    "button" ===
                                                        e.tagName.toLowerCase()) ||
                                                (tU(e) &&
                                                    "input" ===
                                                        e.tagName.toLowerCase() &&
                                                    ("submit" === e.type ||
                                                        "image" === e.type))
                                            ) {
                                                let i = e.form;
                                                if (null == i)
                                                    throw Error(
                                                        'Cannot submit a <button> or <input type="submit"> without a <form>'
                                                    );
                                                let s =
                                                    e.getAttribute(
                                                        "formaction"
                                                    ) ||
                                                    i.getAttribute("action");
                                                if (
                                                    ((n = s ? A(s, t) : null),
                                                    (r =
                                                        e.getAttribute(
                                                            "formmethod"
                                                        ) ||
                                                        i.getAttribute(
                                                            "method"
                                                        ) ||
                                                        tz),
                                                    (a =
                                                        tq(
                                                            e.getAttribute(
                                                                "formenctype"
                                                            )
                                                        ) ||
                                                        tq(
                                                            i.getAttribute(
                                                                "enctype"
                                                            )
                                                        ) ||
                                                        tW),
                                                    (o = new FormData(i, e)),
                                                    !(function () {
                                                        if (null === tF)
                                                            try {
                                                                (new FormData(
                                                                    document.createElement(
                                                                        "form"
                                                                    ),
                                                                    0
                                                                ),
                                                                    (tF = !1));
                                                            } catch (e) {
                                                                tF = !0;
                                                            }
                                                        return tF;
                                                    })())
                                                ) {
                                                    let {
                                                        name: t,
                                                        type: r,
                                                        value: n,
                                                    } = e;
                                                    if ("image" === r) {
                                                        let e = t
                                                            ? `${t}.`
                                                            : "";
                                                        (o.append(`${e}x`, "0"),
                                                            o.append(
                                                                `${e}y`,
                                                                "0"
                                                            ));
                                                    } else t && o.append(t, n);
                                                }
                                            } else if (tU(e))
                                                throw Error(
                                                    'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
                                                );
                                            else
                                                ((r = tz),
                                                    (n = null),
                                                    (a = tW),
                                                    (i = e));
                                            return (
                                                o &&
                                                    "text/plain" === a &&
                                                    ((i = o), (o = void 0)),
                                                {
                                                    action: n,
                                                    method: r.toLowerCase(),
                                                    encType: a,
                                                    formData: o,
                                                    body: i,
                                                }
                                            );
                                        })(n, t);
                                        if (!1 === a.navigate) {
                                            let t =
                                                a.fetcherKey ||
                                                `__${String(++ri)}__`;
                                            await e.fetch(t, r, a.action || o, {
                                                preventScrollReset:
                                                    a.preventScrollReset,
                                                formData: l,
                                                body: u,
                                                formMethod: a.method || i,
                                                formEncType: a.encType || s,
                                                flushSync: a.flushSync,
                                            });
                                        } else
                                            await e.navigate(a.action || o, {
                                                preventScrollReset:
                                                    a.preventScrollReset,
                                                formData: l,
                                                body: u,
                                                formMethod: a.method || i,
                                                formEncType: a.encType || s,
                                                replace: a.replace,
                                                state: a.state,
                                                fromRouteId: r,
                                                flushSync: a.flushSync,
                                                viewTransition:
                                                    a.viewTransition,
                                            });
                                    },
                                    [e, t, r]
                                );
                            })(),
                            v = (function (e, { relative: t } = {}) {
                                let { basename: r } = o.useContext(e3),
                                    n = o.useContext(e8);
                                d(
                                    n,
                                    "useFormAction must be used inside a RouteContext"
                                );
                                let [a] = n.matches.slice(-1),
                                    i = { ...tl(e || ".", { relative: t }) },
                                    s = te();
                                if (null == e) {
                                    i.search = s.search;
                                    let e = new URLSearchParams(i.search),
                                        t = e.getAll("index");
                                    if (t.some((e) => "" === e)) {
                                        (e.delete("index"),
                                            t
                                                .filter((e) => e)
                                                .forEach((t) =>
                                                    e.append("index", t)
                                                ));
                                        let r = e.toString();
                                        i.search = r ? `?${r}` : "";
                                    }
                                }
                                return (
                                    (!e || "." === e) &&
                                        a.route.index &&
                                        (i.search = i.search
                                            ? i.search.replace(/^\?/, "?index&")
                                            : "?index"),
                                    "/" !== r &&
                                        (i.pathname =
                                            "/" === i.pathname
                                                ? r
                                                : M([r, i.pathname])),
                                    m(i)
                                );
                            })(l, { relative: c }),
                            b = "get" === s.toLowerCase() ? "get" : "post",
                            w = "string" == typeof l && t7.test(l);
                        return o.createElement("form", {
                            ref: y,
                            method: b,
                            action: v,
                            onSubmit: n
                                ? u
                                : (e) => {
                                      if ((u && u(e), e.defaultPrevented))
                                          return;
                                      e.preventDefault();
                                      let n = e.nativeEvent.submitter,
                                          o =
                                              n?.getAttribute("formmethod") ||
                                              s;
                                      g(n || e.currentTarget, {
                                          fetcherKey: t,
                                          method: o,
                                          navigate: r,
                                          replace: a,
                                          state: i,
                                          relative: c,
                                          preventScrollReset: h,
                                          viewTransition: p,
                                      });
                                  },
                            ...f,
                            "data-discover":
                                w || "render" !== e ? void 0 : "true",
                        });
                    }
                ).displayName = "Form"),
                (rt.displayName = "ScrollRestoration"));
            var ri = 0,
                rs = "react-router-scroll-positions",
                rl = {};
            function ru(e, t, r, n) {
                let a = null;
                return (
                    n &&
                        (a = n(
                            "/" !== r
                                ? {
                                      ...e,
                                      pathname: A(e.pathname, r) || e.pathname,
                                  }
                                : e,
                            t
                        )),
                    null == a && (a = e.key),
                    a
                );
            }
            function rc(e, t) {
                let { capture: r } = t || {};
                o.useEffect(() => {
                    let t = null != r ? { capture: r } : void 0;
                    return (
                        window.addEventListener("beforeunload", e, t),
                        () => {
                            window.removeEventListener("beforeunload", e, t);
                        }
                    );
                }, [e, r]);
            }
        },
        64677: (e, t, r) => {
            r.d(t, { q: () => o });
            var n = r(96540),
                a = r(42270);
            function o() {
                return (0, n.useContext)(a.C);
            }
        },
        66108: (e, t, r) => {
            r.d(t, { N: () => c, k: () => d });
            var n = r(74848),
                a = r(21728),
                o = r(61526),
                i = r(71315),
                s = r(96540),
                l = r(58578),
                u = r(24518);
            let c = (0, s.forwardRef)((e, t) => {
                let r,
                    c,
                    d,
                    h,
                    p,
                    f,
                    m,
                    y = (0, a.c)(18);
                y[0] !== e
                    ? (({
                          to: h,
                          reloadDocument: d,
                          preventAutofocus: r,
                          ...c
                      } = e),
                      (y[0] = e),
                      (y[1] = r),
                      (y[2] = c),
                      (y[3] = d),
                      (y[4] = h))
                    : ((r = y[1]), (c = y[2]), (d = y[3]), (h = y[4]));
                let { routes: g } = (0, s.useContext)(u.k);
                if (y[5] !== d || y[6] !== g || y[7] !== h) {
                    let e = (0, o.o1)(h, i.fV.pathname).pathname;
                    ((p = d ?? !(0, o.ue)(g, e)),
                        (y[5] = d),
                        (y[6] = g),
                        (y[7] = h),
                        (y[8] = p));
                } else p = y[8];
                return (
                    (d = p),
                    y[9] !== r || y[10] !== c.state
                        ? ((f = r ? { [l.V]: !0, ...c.state } : c.state),
                          (y[9] = r),
                          (y[10] = c.state),
                          (y[11] = f))
                        : (f = y[11]),
                    y[12] !== c ||
                    y[13] !== t ||
                    y[14] !== d ||
                    y[15] !== f ||
                    y[16] !== h
                        ? ((m = (0, n.jsx)(o.N_, {
                              to: h,
                              ...c,
                              state: f,
                              reloadDocument: d,
                              ref: t,
                          })),
                          (y[12] = c),
                          (y[13] = t),
                          (y[14] = d),
                          (y[15] = f),
                          (y[16] = h),
                          (y[17] = m))
                        : (m = y[17]),
                    m
                );
            });
            c.displayName = "Link";
            let d = (0, s.forwardRef)(function (e, t) {
                let r,
                    c,
                    d,
                    h,
                    p,
                    f,
                    m,
                    y = (0, a.c)(18);
                y[0] !== e
                    ? (({
                          to: h,
                          reloadDocument: d,
                          preventAutofocus: r,
                          ...c
                      } = e),
                      (y[0] = e),
                      (y[1] = r),
                      (y[2] = c),
                      (y[3] = d),
                      (y[4] = h))
                    : ((r = y[1]), (c = y[2]), (d = y[3]), (h = y[4]));
                let { routes: g } = (0, s.useContext)(u.k);
                if (y[5] !== d || y[6] !== g || y[7] !== h) {
                    let e = (0, o.o1)(h, i.fV.pathname).pathname;
                    ((p = d ?? !(0, o.ue)(g, e)),
                        (y[5] = d),
                        (y[6] = g),
                        (y[7] = h),
                        (y[8] = p));
                } else p = y[8];
                return (
                    (d = p),
                    y[9] !== r || y[10] !== c.state
                        ? ((f = r ? { [l.V]: !0, ...c.state } : c.state),
                          (y[9] = r),
                          (y[10] = c.state),
                          (y[11] = f))
                        : (f = y[11]),
                    y[12] !== c ||
                    y[13] !== t ||
                    y[14] !== d ||
                    y[15] !== f ||
                    y[16] !== h
                        ? ((m = (0, n.jsx)(o.k2, {
                              to: h,
                              ...c,
                              state: f,
                              reloadDocument: d,
                              ref: t,
                          })),
                          (y[12] = c),
                          (y[13] = t),
                          (y[14] = d),
                          (y[15] = f),
                          (y[16] = h),
                          (y[17] = m))
                        : (m = y[17]),
                    m
                );
            });
            try {
                d.displayName || (d.displayName = "NavLink");
            } catch {}
        },
        68237: (e, t, r) => {
            r.d(t, { U: () => y });
            var n = r(74848),
                a = r(21728),
                o = r(57224),
                i = r(76629),
                s = r(43258),
                l = r(12683),
                u = r(97665),
                c = r(68270),
                d = r(45887),
                h = r(49890),
                p = r(16235),
                f = r(83952);
            let m = {};
            function y(e) {
                let t,
                    r,
                    y,
                    g,
                    v,
                    b,
                    w,
                    S = (0, a.c)(20),
                    {
                        appName: R,
                        children: E,
                        wasServerRendered: x,
                        dataRouterEnabled: C,
                    } = e,
                    { colorMode: k, dayScheme: _, nightScheme: N } = (0, f.A)();
                S[0] === Symbol.for("react.memo_cache_sentinel")
                    ? ((t = (0, p.S)()), (S[0] = t))
                    : (t = S[0]);
                let j = t;
                return (
                    S[1] !== E
                        ? ((r = (0, n.jsx)(s.k6, { children: E })),
                          (S[1] = E),
                          (S[2] = r))
                        : (r = S[2]),
                    S[3] !== R || S[4] !== r
                        ? ((y = (0, n.jsx)(d.V, { appName: R, children: r })),
                          (S[3] = R),
                          (S[4] = r),
                          (S[5] = y))
                        : (y = S[5]),
                    S[6] !== C || S[7] !== y
                        ? ((g = (0, n.jsx)(c.v, { enabled: C, children: y })),
                          (S[6] = C),
                          (S[7] = y),
                          (S[8] = g))
                        : (g = S[8]),
                    S[9] !== k || S[10] !== _ || S[11] !== N || S[12] !== g
                        ? ((v = (0, n.jsx)(h.n, {
                              children: (0, n.jsx)(l.NP, {
                                  colorMode: k,
                                  dayScheme: _,
                                  nightScheme: N,
                                  preventSSRMismatch: !0,
                                  children: g,
                              }),
                          })),
                          (S[9] = k),
                          (S[10] = _),
                          (S[11] = N),
                          (S[12] = g),
                          (S[13] = v))
                        : (v = S[13]),
                    S[14] !== R || S[15] !== v
                        ? ((b = (0, n.jsx)(o.y, {
                              appName: R,
                              category: "",
                              metadata: m,
                              children: v,
                          })),
                          (S[14] = R),
                          (S[15] = v),
                          (S[16] = b))
                        : (b = S[16]),
                    S[17] !== b || S[18] !== x
                        ? ((w = (0, n.jsx)(u.Ht, {
                              client: j,
                              children: (0, n.jsx)(i.D3, {
                                  wasServerRendered: x,
                                  children: b,
                              }),
                          })),
                          (S[17] = b),
                          (S[18] = x),
                          (S[19] = w))
                        : (w = S[19]),
                    w
                );
            }
            try {
                y.displayName || (y.displayName = "BaseProviders");
            } catch {}
        },
        68270: (e, t, r) => {
            r.d(t, { e: () => o, v: () => i });
            var n = r(74848),
                a = r(21728);
            let o = (0, r(96540).createContext)(!1);
            function i(e) {
                let t,
                    r = (0, a.c)(3),
                    { enabled: i, children: s } = e;
                return (
                    r[0] !== s || r[1] !== i
                        ? ((t = (0, n.jsx)(o.Provider, {
                              value: i,
                              children: s,
                          })),
                          (r[0] = s),
                          (r[1] = i),
                          (r[2] = t))
                        : (t = r[2]),
                    t
                );
            }
            try {
                o.displayName || (o.displayName = "IsDataRouterEnabledContext");
            } catch {}
            try {
                i.displayName ||
                    (i.displayName = "IsDataRouterEnabledContextProvider");
            } catch {}
        },
        69743: (e, t, r) => {
            r.d(t, { h: () => c });
            var n = r(74848),
                a = r(21728),
                o = r(40064),
                i = r(43258),
                s = r(96540),
                l = r(7820);
            function u({ ssrError: e }) {
                let { addToast: t } = (0, i.Y6)(),
                    r = l.z[e.textContent || ""];
                return (
                    (0, s.useEffect)(() => {
                        r ||
                            t({
                                type: "error",
                                message:
                                    "SSR failed, see console for error details (Staff Only)",
                            });
                    }, []),
                    null
                );
            }
            try {
                u.displayName || (u.displayName = "SSRErrorToast");
            } catch {}
            function c(e) {
                let t,
                    r,
                    i,
                    s = (0, a.c)(5),
                    { ssrError: l } = e;
                return (
                    s[0] === Symbol.for("react.memo_cache_sentinel")
                        ? ((t = (0, n.jsx)(o.V, {})), (s[0] = t))
                        : (t = s[0]),
                    s[1] !== l
                        ? ((r = l && (0, n.jsx)(u, { ssrError: l })),
                          (s[1] = l),
                          (s[2] = r))
                        : (r = s[2]),
                    s[3] !== r
                        ? ((i = (0, n.jsxs)(n.Fragment, { children: [t, r] })),
                          (s[3] = r),
                          (s[4] = i))
                        : (i = s[4]),
                    i
                );
            }
            try {
                c.displayName || (c.displayName = "CommonElements");
            } catch {}
        },
        70103: (e, t, r) => {
            r.d(t, { a: () => o });
            var n = r(51987),
                a = r(88057);
            function o({
                path: e,
                Component: t,
                shouldNavigateOnError: r,
                transitionType: o,
                children: i,
            }) {
                return {
                    path: e,
                    Component: t,
                    coreLoader: async function e_({ location: e }) {
                        let t;
                        try {
                            let r = `${e.pathname}${e.search}`;
                            t = await window.fetch(r, {
                                headers: {
                                    Accept: "application/json",
                                    ...(0, n.kt)(),
                                    "X-GitHub-Target": "dotcom",
                                    "X-React-Router": "json",
                                    ...(0, n.jC)("navigator"),
                                },
                            });
                            let o = t?.headers?.get("X-Github-Request-Id");
                            o && (0, a.Ex)(o);
                        } catch {
                            return {
                                type: r ? "route-handled-error" : "error",
                                error: { type: "fetchError" },
                            };
                        }
                        if (t.redirected)
                            return { type: "redirect", url: t.url };
                        if (!t.ok)
                            return {
                                type: r ? "route-handled-error" : "error",
                                error: {
                                    type: "httpError",
                                    httpStatus: t.status,
                                },
                            };
                        try {
                            let e = await t.json();
                            return { type: "loaded", data: e, title: e.title };
                        } catch {
                            return {
                                type: r ? "route-handled-error" : "error",
                                error: { type: "badResponseError" },
                            };
                        }
                    },
                    loadFromEmbeddedData: function ({ embeddedData: e }) {
                        return { data: e, title: e.title };
                    },
                    transitionType: o,
                    children: i,
                };
            }
        },
        74135: (e, t, r) => {
            r.d(t, { n: () => p });
            var n = r(35750),
                a = r(18150),
                o = r(85242),
                i = r(81075),
                s = r(75735);
            let l = "@github-ui/react-core/router:state-update",
                u = class RouterStateUpdateEvent extends Event {
                    constructor() {
                        super(l);
                    }
                };
            var c = new WeakMap();
            let d = class RouterStore extends EventTarget {
                static getInstance() {
                    return (
                        (0, i._)(RouterStore, RouterStore, h) ||
                            (0, s._)(
                                RouterStore,
                                RouterStore,
                                h,
                                new RouterStore()
                            ),
                        (0, i._)(RouterStore, RouterStore, h)
                    );
                }
                getState() {
                    return (0, n._)(this, c);
                }
                setState(e) {
                    ((0, o._)(this, c, e), this.dispatchEvent(new u()));
                }
                subscribe(e) {
                    let t = new AbortController();
                    return (
                        this.addEventListener(
                            l,
                            () => {
                                e((0, n._)(this, c));
                            },
                            { signal: t.signal }
                        ),
                        e((0, n._)(this, c)),
                        () => {
                            t.abort();
                        }
                    );
                }
                constructor() {
                    (super(), (0, a._)(this, c, { writable: !0, value: null }));
                }
            };
            var h = { writable: !0, value: void 0 };
            function p() {
                return d.getInstance();
            }
        },
        75202: (e, t, r) => {
            r.d(t, { t: () => c });
            var n = r(74848),
                a = r(21728),
                o = r(49936),
                i = r(38102),
                s = r(96540),
                l = r(60281);
            let u = class BasicErrorBoundary extends s.Component {
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e) {
                    let t = {
                        critical: this.props.critical || !1,
                        reactAppName: this.props.appName,
                        reactErrorBoundaryName: this.props.boundaryName,
                    };
                    "function" == typeof this.props.onError
                        ? this.props.onError(e, t)
                        : (function (e, t = {}) {
                              setTimeout(() => {
                                  (0, i.N7)(e, t);
                              });
                          })(e, t);
                }
                render() {
                    return this.state.error
                        ? void 0 === this.props.fallback
                            ? (0, n.jsx)(l.M, { type: "httpError" })
                            : this.props.fallback
                        : this.props.children;
                }
                constructor(e) {
                    (super(e), (this.state = { error: null }));
                }
            };
            function c(e) {
                let t,
                    r = (0, a.c)(3),
                    i = s.useContext(o.I),
                    l = e.appName || i?.appName;
                return (
                    r[0] !== l || r[1] !== e
                        ? ((t = (0, n.jsx)(u, { ...e, appName: l })),
                          (r[0] = l),
                          (r[1] = e),
                          (r[2] = t))
                        : (t = r[2]),
                    t
                );
            }
            try {
                c.displayName || (c.displayName = "ErrorBoundary");
            } catch {}
        },
        75447: (e, t, r) => {
            r.d(t, { A: () => o, Z: () => a });
            var n = r(49236),
                a = (0, n.qU)({
                    width: {
                        property: "width",
                        scale: "sizes",
                        transform: function (e, t) {
                            return (0, n.Jt)(
                                t,
                                e,
                                !("number" == typeof e && !isNaN(e)) || e > 1
                                    ? e
                                    : 100 * e + "%"
                            );
                        },
                    },
                    height: { property: "height", scale: "sizes" },
                    minWidth: { property: "minWidth", scale: "sizes" },
                    minHeight: { property: "minHeight", scale: "sizes" },
                    maxWidth: { property: "maxWidth", scale: "sizes" },
                    maxHeight: { property: "maxHeight", scale: "sizes" },
                    size: { properties: ["width", "height"], scale: "sizes" },
                    overflow: !0,
                    overflowX: !0,
                    overflowY: !0,
                    display: !0,
                    verticalAlign: !0,
                });
            let o = a;
        },
        76648: (e, t, r) => {
            r.d(t, { B: () => a });
            var n = r(80443);
            function a() {
                let e = (0, n.N)(),
                    t = e && "loaded" === e.type ? e.data : void 0;
                return t?.payload;
            }
        },
        77638: (e, t, r) => {
            r.d(t, { A: () => i, y: () => o });
            var n = r(49236),
                a = {
                    color: { property: "color", scale: "colors" },
                    backgroundColor: {
                        property: "backgroundColor",
                        scale: "colors",
                    },
                    opacity: !0,
                };
            a.bg = a.backgroundColor;
            var o = (0, n.qU)(a);
            let i = o;
        },
        79634: (e, t, r) => {
            r.d(t, { X: () => o, z: () => a });
            var n = r(96540);
            let a = (0, n.createContext)(void 0);
            function o() {
                return (0, n.useContext)(a);
            }
        },
        80443: (e, t, r) => {
            r.d(t, { N: () => i });
            var n = r(61526),
                a = r(96540),
                o = r(6152);
            function i() {
                return (0, a.useContext)(o.Y)[(0, n.zy)().key];
            }
        },
        81353: (e, t, r) => {
            r.d(t, { s: () => i });
            var n = r(74848),
                a = r(21728),
                o = r(79634);
            let i = (e) => {
                let t,
                    r,
                    i = (0, a.c)(5),
                    { children: s, features: l } = e;
                i[0] !== l
                    ? ((t = { enabled_features: l }), (i[0] = l), (i[1] = t))
                    : (t = i[1]);
                let u = t;
                return (
                    i[2] !== s || i[3] !== u
                        ? ((r = (0, n.jsx)(o.z.Provider, {
                              value: u,
                              children: s,
                          })),
                          (i[2] = s),
                          (i[3] = u),
                          (i[4] = r))
                        : (r = i[4]),
                    r
                );
            };
            try {
                i.displayName || (i.displayName = "FeatureFlagProvider");
            } catch {}
        },
        83952: (e, t, r) => {
            let n;
            r.d(t, { A: () => d });
            var a = r(21728),
                o = r(71315),
                i = r(96540);
            function s(e) {
                return {
                    colorMode: (function (e) {
                        switch (e) {
                            case "light":
                                return "day";
                            case "dark":
                                return "night";
                            default:
                                return "auto";
                        }
                    })(e.colorMode),
                    dayScheme: e.lightTheme,
                    nightScheme: e.darkTheme,
                };
            }
            let l = new Set([
                    "light_colorblind_high_contrast",
                    "light_tritanopia_high_contrast",
                    "dark_colorblind_high_contrast",
                    "dark_tritanopia_high_contrast",
                    "dark_dimmed_high_contrast",
                ]),
                u = {
                    light_colorblind_high_contrast: "light_high_contrast",
                    light_tritanopia_high_contrast: "light_high_contrast",
                    dark_colorblind_high_contrast: "dark_high_contrast",
                    dark_tritanopia_high_contrast: "dark_high_contrast",
                    dark_dimmed_high_contrast: "dark_high_contrast",
                };
            function c(e) {
                var t;
                return void 0 !== e && ((t = e), l.has(t)) ? u[e] : e;
            }
            let d = o.XC
                ? function () {
                      let e,
                          t,
                          r,
                          n,
                          l,
                          u,
                          d = (0, a.c)(11),
                          { documentElement: h } = o.XC;
                      d[0] === Symbol.for("react.memo_cache_sentinel")
                          ? ((e = () => s(h.dataset)), (d[0] = e))
                          : (e = d[0]);
                      let [p, f] = (0, i.useState)(e);
                      return (
                          d[1] === Symbol.for("react.memo_cache_sentinel")
                              ? ((t = () => {
                                    let e = new MutationObserver(() =>
                                        f(s(h.dataset))
                                    );
                                    return (
                                        e.observe(h, {
                                            attributes: !0,
                                            attributeFilter: [
                                                "data-color-mode",
                                                "data-light-theme",
                                                "data-dark-theme",
                                            ],
                                        }),
                                        () => e.disconnect()
                                    );
                                }),
                                (r = [h]),
                                (d[1] = t),
                                (d[2] = r))
                              : ((t = d[1]), (r = d[2])),
                          (0, i.useEffect)(t, r),
                          d[3] !== p.dayScheme
                              ? ((n = c(p.dayScheme)),
                                (d[3] = p.dayScheme),
                                (d[4] = n))
                              : (n = d[4]),
                          d[5] !== p.nightScheme
                              ? ((l = c(p.nightScheme)),
                                (d[5] = p.nightScheme),
                                (d[6] = l))
                              : (l = d[6]),
                          d[7] !== p || d[8] !== n || d[9] !== l
                              ? ((u = { ...p, dayScheme: n, nightScheme: l }),
                                (d[7] = p),
                                (d[8] = n),
                                (d[9] = l),
                                (d[10] = u))
                              : (u = d[10]),
                          u
                      );
                  }
                : function () {
                      return s(n || {});
                  };
        },
        84995: (e, t, r) => {
            r.d(t, { A: () => i, P: () => o });
            var n = r(49236),
                a = {
                    border: { property: "border", scale: "borders" },
                    borderWidth: {
                        property: "borderWidth",
                        scale: "borderWidths",
                    },
                    borderStyle: {
                        property: "borderStyle",
                        scale: "borderStyles",
                    },
                    borderColor: { property: "borderColor", scale: "colors" },
                    borderRadius: { property: "borderRadius", scale: "radii" },
                    borderTop: { property: "borderTop", scale: "borders" },
                    borderTopLeftRadius: {
                        property: "borderTopLeftRadius",
                        scale: "radii",
                    },
                    borderTopRightRadius: {
                        property: "borderTopRightRadius",
                        scale: "radii",
                    },
                    borderRight: { property: "borderRight", scale: "borders" },
                    borderBottom: {
                        property: "borderBottom",
                        scale: "borders",
                    },
                    borderBottomLeftRadius: {
                        property: "borderBottomLeftRadius",
                        scale: "radii",
                    },
                    borderBottomRightRadius: {
                        property: "borderBottomRightRadius",
                        scale: "radii",
                    },
                    borderLeft: { property: "borderLeft", scale: "borders" },
                    borderX: {
                        properties: ["borderLeft", "borderRight"],
                        scale: "borders",
                    },
                    borderY: {
                        properties: ["borderTop", "borderBottom"],
                        scale: "borders",
                    },
                };
            ((a.borderTopWidth = {
                property: "borderTopWidth",
                scale: "borderWidths",
            }),
                (a.borderTopColor = {
                    property: "borderTopColor",
                    scale: "colors",
                }),
                (a.borderTopStyle = {
                    property: "borderTopStyle",
                    scale: "borderStyles",
                }),
                (a.borderTopLeftRadius = {
                    property: "borderTopLeftRadius",
                    scale: "radii",
                }),
                (a.borderTopRightRadius = {
                    property: "borderTopRightRadius",
                    scale: "radii",
                }),
                (a.borderBottomWidth = {
                    property: "borderBottomWidth",
                    scale: "borderWidths",
                }),
                (a.borderBottomColor = {
                    property: "borderBottomColor",
                    scale: "colors",
                }),
                (a.borderBottomStyle = {
                    property: "borderBottomStyle",
                    scale: "borderStyles",
                }),
                (a.borderBottomLeftRadius = {
                    property: "borderBottomLeftRadius",
                    scale: "radii",
                }),
                (a.borderBottomRightRadius = {
                    property: "borderBottomRightRadius",
                    scale: "radii",
                }),
                (a.borderLeftWidth = {
                    property: "borderLeftWidth",
                    scale: "borderWidths",
                }),
                (a.borderLeftColor = {
                    property: "borderLeftColor",
                    scale: "colors",
                }),
                (a.borderLeftStyle = {
                    property: "borderLeftStyle",
                    scale: "borderStyles",
                }),
                (a.borderRightWidth = {
                    property: "borderRightWidth",
                    scale: "borderWidths",
                }),
                (a.borderRightColor = {
                    property: "borderRightColor",
                    scale: "colors",
                }),
                (a.borderRightStyle = {
                    property: "borderRightStyle",
                    scale: "borderStyles",
                }));
            var o = (0, n.qU)(a);
            let i = o;
        },
        86320: (e, t, r) => {
            r.d(t, { Y: () => i });
            var n = r(51987),
                a = r(86596),
                o = r(34418);
            function i({ ...e } = {}) {
                return {
                    queryName: "mainQuery",
                    queryDeps: ({ pathname: e }) => ({ pathname: e }),
                    queryFn: async ({ routeId: e, queryDeps: t }) => {
                        let r = (0, n.jC)("dataRouter"),
                            a = {
                                ...t,
                                init: {
                                    ...t?.init,
                                    headers: { ...r, ...t?.init?.headers },
                                },
                            };
                        var i = await (0, o.X)({ queryDeps: a }),
                            s = e;
                        let l = i.payload?.[s];
                        if (!l)
                            throw Error(
                                `Unable to find payload for route Id: ${s}`
                            );
                        return { meta: i.meta, payload: l };
                    },
                    type: a.g.Blocking,
                    select: (e) => e.payload,
                    ...e,
                };
            }
        },
        86596: (e, t, r) => {
            r.d(t, { g: () => n });
            let n = { Blocking: "Blocking", Deferred: "Deferred" };
        },
        86917: (e, t, r) => {
            r.d(t, { R: () => DeferredRegistry });
            var n = r(35750),
                a = r(18150),
                o = r(51407),
                i = new WeakMap();
            let DeferredRegistry = class DeferredRegistry {
                register(e, t) {
                    let r = (0, n._)(this, i).get(e);
                    if (r) r.resolve(t);
                    else {
                        let r = (0, o.Y)();
                        (r.resolve(t), (0, n._)(this, i).set(e, r));
                    }
                }
                getRegistration(e) {
                    let t = (0, n._)(this, i).get(e);
                    if (t) return t;
                    let r = (0, o.Y)();
                    return ((0, n._)(this, i).set(e, r), r);
                }
                constructor() {
                    (0, a._)(this, i, { writable: !0, value: new Map() });
                }
            };
        },
        87161: (e, t, r) => {
            r.d(t, { Y: () => a });
            var n = r(96540);
            function a(e) {
                return Object.assign((0, n.lazy)(e), {
                    preload: async () => {
                        await e();
                    },
                });
            }
        },
        89165: (e, t, r) => {
            r.d(t, { xe: () => c });
            var n = r(49236),
                a = [0, 4, 8, 16, 32, 64, 128, 256, 512],
                o = function (e) {
                    return "number" == typeof e && !isNaN(e);
                },
                i = function (e, t) {
                    if (!o(e)) return (0, n.Jt)(t, e, e);
                    var r = e < 0,
                        a = Math.abs(e),
                        i = (0, n.Jt)(t, a, a);
                    return o(i) ? i * (r ? -1 : 1) : r ? "-" + i : i;
                },
                s = {};
            ((s.margin = {
                margin: {
                    property: "margin",
                    scale: "space",
                    transform: i,
                    defaultScale: a,
                },
                marginTop: {
                    property: "marginTop",
                    scale: "space",
                    transform: i,
                    defaultScale: a,
                },
                marginRight: {
                    property: "marginRight",
                    scale: "space",
                    transform: i,
                    defaultScale: a,
                },
                marginBottom: {
                    property: "marginBottom",
                    scale: "space",
                    transform: i,
                    defaultScale: a,
                },
                marginLeft: {
                    property: "marginLeft",
                    scale: "space",
                    transform: i,
                    defaultScale: a,
                },
                marginX: {
                    properties: ["marginLeft", "marginRight"],
                    scale: "space",
                    transform: i,
                    defaultScale: a,
                },
                marginY: {
                    properties: ["marginTop", "marginBottom"],
                    scale: "space",
                    transform: i,
                    defaultScale: a,
                },
            }),
                (s.margin.m = s.margin.margin),
                (s.margin.mt = s.margin.marginTop),
                (s.margin.mr = s.margin.marginRight),
                (s.margin.mb = s.margin.marginBottom),
                (s.margin.ml = s.margin.marginLeft),
                (s.margin.mx = s.margin.marginX),
                (s.margin.my = s.margin.marginY),
                (s.padding = {
                    padding: {
                        property: "padding",
                        scale: "space",
                        defaultScale: a,
                    },
                    paddingTop: {
                        property: "paddingTop",
                        scale: "space",
                        defaultScale: a,
                    },
                    paddingRight: {
                        property: "paddingRight",
                        scale: "space",
                        defaultScale: a,
                    },
                    paddingBottom: {
                        property: "paddingBottom",
                        scale: "space",
                        defaultScale: a,
                    },
                    paddingLeft: {
                        property: "paddingLeft",
                        scale: "space",
                        defaultScale: a,
                    },
                    paddingX: {
                        properties: ["paddingLeft", "paddingRight"],
                        scale: "space",
                        defaultScale: a,
                    },
                    paddingY: {
                        properties: ["paddingTop", "paddingBottom"],
                        scale: "space",
                        defaultScale: a,
                    },
                }),
                (s.padding.p = s.padding.padding),
                (s.padding.pt = s.padding.paddingTop),
                (s.padding.pr = s.padding.paddingRight),
                (s.padding.pb = s.padding.paddingBottom),
                (s.padding.pl = s.padding.paddingLeft),
                (s.padding.px = s.padding.paddingX),
                (s.padding.py = s.padding.paddingY));
            var l = (0, n.qU)(s.margin),
                u = (0, n.qU)(s.padding),
                c = (0, n.Zz)(l, u);
        },
        91747: (e, t, r) => {
            r.d(t, { h: () => a, u: () => o });
            var n = r(79634);
            let a = () => (0, n.X)()?.enabled_features ?? {},
                o = (e) => !!a()[e];
        },
        95224: (e, t, r) => {
            r.d(t, { c: () => a, o: () => ResponseError });
            var n = r(50467);
            let ResponseError = class ResponseError extends Error {
                constructor(e, t) {
                    (super(e),
                        (0, n._)(this, "response", void 0),
                        (this.response = t),
                        (this.name = "ResponseError"));
                }
            };
            function a(e) {
                return e instanceof ResponseError;
            }
        },
        96069: (e, t, r) => {
            r.d(t, { A: () => i, V: () => o });
            var n = r(49236),
                a = [0, 4, 8, 16, 32, 64, 128, 256, 512],
                o = (0, n.qU)({
                    gridGap: {
                        property: "gridGap",
                        scale: "space",
                        defaultScale: a,
                    },
                    gridColumnGap: {
                        property: "gridColumnGap",
                        scale: "space",
                        defaultScale: a,
                    },
                    gridRowGap: {
                        property: "gridRowGap",
                        scale: "space",
                        defaultScale: a,
                    },
                    gridColumn: !0,
                    gridRow: !0,
                    gridAutoFlow: !0,
                    gridAutoColumns: !0,
                    gridAutoRows: !0,
                    gridTemplateColumns: !0,
                    gridTemplateRows: !0,
                    gridTemplateAreas: !0,
                    gridArea: !0,
                });
            let i = o;
        },
    },
]);
//# sourceMappingURL=react-core-fa285d118ed8.js.map
