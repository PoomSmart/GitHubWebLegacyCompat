"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    [
        "ui_packages_list-view_src_hooks_use-next-header-tag_ts-ui_packages_list-view_src_ListItem_Lis-0a5d95",
    ],
    {
        31668: (e, t, r) => {
            r.d(t, { E7: () => F });
            var i = r(74848),
                a = r(96540);
            let l = (0, a.createContext)({
                    actions: [],
                    staticMenuActions: [],
                    label: "Actions",
                    gap: 0,
                }),
                n = ({
                    children: e,
                    value: {
                        actions: t = [],
                        staticMenuActions: r,
                        variant: n = "toolbar",
                        label: s,
                        gap: o,
                    },
                }) => {
                    let c = (0, a.useMemo)(
                        () => ({
                            actions: t,
                            staticMenuActions: r,
                            variant: n,
                            label: s,
                            gap: o,
                        }),
                        [t, r, n, s, o]
                    );
                    return (0, i.jsx)(l.Provider, { value: c, children: e });
                },
                s = () => {
                    let e = (0, a.useContext)(l);
                    if (!e)
                        throw Error(
                            "useActionBarContent must be used with ActionBarContentProvider."
                        );
                    return e;
                };
            try {
                l.displayName || (l.displayName = "ActionBarContentContext");
            } catch {}
            try {
                n.displayName || (n.displayName = "ActionBarContentProvider");
            } catch {}
            let o = (0, a.createContext)({
                    outerContainerRef: (0, a.createRef)(),
                    itemContainerRef: (0, a.createRef)(),
                }),
                c = ({ value: { anchorRef: e }, children: t }) => {
                    let r = (0, a.useRef)(null),
                        l = (0, a.useRef)(null),
                        n = (0, a.useMemo)(
                            () => ({
                                outerContainerRef: r,
                                itemContainerRef: l,
                                anchorRef: e,
                            }),
                            [e]
                        );
                    return (0, i.jsx)(o.Provider, { value: n, children: t });
                },
                d = () => {
                    let e = (0, a.useContext)(o);
                    if (!e)
                        throw Error(
                            "useActionBarRef must be used with ActionBarRefProvider."
                        );
                    return e;
                };
            try {
                o.displayName || (o.displayName = "ActionBarRefContext");
            } catch {}
            try {
                c.displayName || (c.displayName = "ActionBarRefProvider");
            } catch {}
            var u = r(13233),
                m = r(8241),
                h = r(45221),
                v = r(58748);
            let y = (e) => {
                    if (!e) return 0;
                    let t = window.getComputedStyle(e);
                    return t?.columnGap ? parseInt(t.columnGap, 10) : 0;
                },
                f = (e, t) => {
                    let r = 2 * y(t),
                        i = e.getBoundingClientRect().width,
                        a = window.getComputedStyle(e);
                    return (
                        i +
                        (a?.marginLeft ? parseInt(a.marginLeft, 10) : 0) +
                        (a?.marginRight ? parseInt(a.marginRight, 10) : 0) +
                        r
                    );
                },
                p = (e, t) => {
                    let r = x(e, t);
                    if (void 0 === r) return;
                    let i = r;
                    return (t && (i -= t.offsetLeft), i);
                },
                x = (e, t) => {
                    if (!e) return;
                    let r = e.offsetWidth;
                    return (t && (r -= t.offsetWidth), r);
                },
                N = (e) =>
                    "condensed" === e
                        ? "var(--base-size-4)"
                        : "spacious" === e
                          ? "var(--base-size-16)"
                          : "none" === e
                            ? 0
                            : "var(--base-size-8)",
                w = (0, a.createContext)({
                    visibleChildEndIndex: 0,
                    justifySpaceBetween: !1,
                    recalculateItemSize: u.l,
                }),
                b = ({ children: e, value: { actionKeys: t } }) => {
                    let r = t.length,
                        [l, n] = (0, m.N)(r),
                        { outerContainerRef: s, itemContainerRef: o } = d(),
                        [c, u] = (0, a.useState)(),
                        [y, N] = (0, a.useState)(),
                        [b, C] = (0, a.useState)(
                            new Map(t.map((e) => [e, void 0]))
                        ),
                        [A, g] = (0, a.useState)(!1),
                        j = (0, a.useMemo)(
                            () =>
                                t
                                    .slice(0, l)
                                    .every(
                                        (e) =>
                                            b.has(e) &&
                                            "number" == typeof b.get(e)
                                    ),
                            [t, b, l]
                        ),
                        I = (0, a.useCallback)(
                            (e) => {
                                let r = t[e];
                                if (r) return b.get(r);
                            },
                            [t, b]
                        ),
                        S = (0, a.useCallback)(
                            (e, t) => {
                                let r = o.current;
                                if (!r) return;
                                let i = f(t, r);
                                C((t) => {
                                    if (i === t.get(e) || isNaN(i)) return t;
                                    let r = new Map(Array.from(t.entries()));
                                    return (r.set(e, i), r);
                                });
                            },
                            [o]
                        ),
                        L = (0, a.useCallback)(() => {
                            if (!j) return;
                            let e = s.current,
                                t = o.current,
                                r = x(e, t);
                            if (void 0 === r) return;
                            let i = p(e, t);
                            void 0 !== i && r <= i && n(Math.max(0, l - 1));
                        }, [j, s, o, n, l]),
                        _ = (0, a.useCallback)(() => {
                            let e = s.current,
                                t = o.current,
                                i = x(e, t);
                            if (void 0 === i) return;
                            let a = I(l);
                            if (void 0 === a) return;
                            let c = p(e, t);
                            void 0 !== c && i > c + a && n(Math.min(r, l + 1));
                        }, [s, o, I, l, n, r]),
                        P = (0, a.useCallback)(() => {
                            let e = s.current,
                                t = o.current;
                            if (!e || !t) return;
                            let r = e.offsetWidth;
                            r &&
                                (void 0 === c || r <= c ? L() : r > c && _(),
                                u(r),
                                g(r <= (y ?? t.offsetWidth)));
                        }, [_, L, y, c, s, o]);
                    ((0, h.A)(() => {
                        let e = o.current;
                        if (!e) return;
                        let r = new Map();
                        for (let i of t) {
                            let t = e.querySelector(
                                `[data-action-bar-item="${i}"]`
                            );
                            t && r.set(i, f(t, e));
                        }
                        C(r);
                    }, [t, o]),
                        (0, h.A)(() => {
                            let e = o.current;
                            e && N(e.offsetWidth);
                        }, [o]),
                        (0, h.A)(() => {
                            P();
                        }, [P]),
                        (0, v.w)(P, s));
                    let E = (0, a.useMemo)(
                        () => ({
                            visibleChildEndIndex: l,
                            justifySpaceBetween: A,
                            recalculateItemSize: S,
                        }),
                        [l, A, S]
                    );
                    return (0, i.jsx)(w.Provider, { value: E, children: e });
                },
                C = () => {
                    let e = (0, a.useContext)(w);
                    return (
                        e || {
                            justifySpaceBetween: !1,
                            visibleChildEndIndex: 0,
                            recalculateItemSize: u.l,
                        }
                    );
                };
            try {
                w.displayName || (w.displayName = "ActionBarResizeContext");
            } catch {}
            try {
                b.displayName || (b.displayName = "ActionBarResizeProvider");
            } catch {}
            var A = r(98386),
                g = r(69676),
                j = r(82678),
                I = r(34164),
                S = r(38621),
                L = r(14744),
                _ = r.n(L),
                P = r(10569),
                E = r(87330),
                M = r(15385);
            let B = {
                    IconButton_0: "OverflowMenu-module__IconButton_0--P3118",
                },
                T = S.KebabHorizontalIcon,
                R = "invisible",
                V = ({
                    anchorProps: {
                        "aria-label": e,
                        icon: t = T,
                        variant: r = R,
                        ...l
                    } = { icon: T, variant: R },
                }) => {
                    let { anchorRef: n } = d(),
                        { actions: o, staticMenuActions: c, label: u } = s(),
                        { visibleChildEndIndex: m } = C(),
                        h = (0, a.useMemo)(
                            () =>
                                _()(l, {
                                    "aria-label": e?.trim() || `More ${u}`,
                                    icon: t,
                                    className: B.IconButton_0,
                                    variant: r,
                                }),
                            [e, t, u, r, l]
                        ),
                        v = (0, a.useMemo)(() => o?.slice(m), [o, m]),
                        y = v && v.length > 0,
                        f = c && c.length > 0;
                    return y || f
                        ? (0, i.jsxs)(P.W, {
                              anchorRef: n,
                              children: [
                                  (0, i.jsx)(P.W.Anchor, {
                                      children: (0, i.jsx)(E.K, {
                                          ...(0, A.G)("overflow-menu-anchor"),
                                          ...h,
                                      }),
                                  }),
                                  (0, i.jsx)(P.W.Overlay, {
                                      align: "end",
                                      children: (0, i.jsxs)(M.l, {
                                          children: [
                                              f &&
                                                  c.map((e) =>
                                                      (0, i.jsx)(
                                                          a.Fragment,
                                                          {
                                                              children:
                                                                  e.render(),
                                                          },
                                                          e.key
                                                      )
                                                  ),
                                              v?.map((e) =>
                                                  (0, i.jsx)(
                                                      a.Fragment,
                                                      {
                                                          children:
                                                              e.render(!0),
                                                      },
                                                      e.key
                                                  )
                                              ),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : null;
                };
            try {
                V.displayName || (V.displayName = "OverflowMenu");
            } catch {}
            let k = {
                    Box_0: "VisibleAndOverflowContainer-module__Box_0--cTFgm",
                    space: "VisibleAndOverflowContainer-module__space--BaowS",
                },
                O = { Box_0: "VisibleItem-module__Box_0--wJA9C" },
                z = ({ children: e, actionKey: t }) => {
                    let r = (0, a.useRef)(null),
                        { recalculateItemSize: l } = C();
                    return (
                        (0, h.A)(() => {
                            r.current && l(t, r.current);
                        }, [r, l, t]),
                        (0, i.jsx)("div", {
                            ...(0, A.G)(`action-bar-item-${t}`),
                            "data-action-bar-item": t,
                            ref: r,
                            className: O.Box_0,
                            children: e,
                        })
                    );
                };
            try {
                z.displayName || (z.displayName = "VisibleItem");
            } catch {}
            let W = { Box_1: "VisibleItems-module__Box_1--_dgKR" },
                H = ({ className: e, style: t }) => {
                    let { itemContainerRef: r } = d(),
                        { actions: a, gap: l } = s(),
                        { visibleChildEndIndex: n } = C(),
                        o = a?.slice(0, n);
                    return (0, i.jsx)("div", {
                        ...(0, A.G)("action-bar"),
                        ref: r,
                        className: (0, I.$)(e, W.Box_1),
                        style: { gap: l, ...t },
                        children: o?.map(({ key: e, render: t }) =>
                            (0, i.jsx)(z, { actionKey: e, children: t(!1) }, e)
                        ),
                    });
                };
            try {
                H.displayName || (H.displayName = "VisibleItems");
            } catch {}
            let $ = ({ overflowMenuToggleProps: e, children: t, ...r }) => {
                let { outerContainerRef: a } = d(),
                    { label: l, variant: n, gap: o } = s(),
                    { justifySpaceBetween: c } = C();
                return (
                    (0, j.G)(
                        {
                            containerRef: a,
                            bindKeys: g.z0.ArrowHorizontal | g.z0.HomeAndEnd,
                            focusOutBehavior: "wrap",
                            disabled: "toolbar" !== n,
                        },
                        [a]
                    ),
                    (0, i.jsxs)("div", {
                        ref: a,
                        ...(0, A.G)("action-bar-container"),
                        role: "toolbar" === n ? "toolbar" : void 0,
                        "aria-label": "toolbar" === n ? l : void 0,
                        style: { gap: o },
                        className: (0, I.$)(k.Box_0, c && k.space),
                        children: [
                            (0, i.jsx)(H, { ...r }),
                            t,
                            (0, i.jsx)(V, { anchorProps: e }),
                        ],
                    })
                );
            };
            try {
                $.displayName ||
                    ($.displayName = "VisibleAndOverflowContainer");
            } catch {}
            let D = "normal",
                K = ({ children: e, ...t }) =>
                    (0, i.jsx)($, { ...t, children: e }),
                F = ({
                    actions: e = [],
                    staticMenuActions: t,
                    overflowMenuToggleProps: r,
                    children: l,
                    label: s,
                    variant: o,
                    density: d = D,
                    anchorRef: u,
                    className: m,
                    style: h,
                }) => {
                    let v = (0, a.useMemo)(
                            () => ({
                                actions: e,
                                staticMenuActions: t,
                                variant: o,
                                label: s,
                                gap: N(d),
                            }),
                            [e, t, o, s, d]
                        ),
                        y = (0, a.useMemo)(
                            () => ({ actionKeys: e.map((e) => e.key) }),
                            [e]
                        ),
                        f = t && t.length > 0,
                        p = e && e.length > 0;
                    if (!p && !f) return null;
                    let x = {
                        overflowMenuToggleProps: r,
                        className: m,
                        style: h,
                    };
                    return (0, i.jsx)(c, {
                        value: { anchorRef: u },
                        children: (0, i.jsx)(n, {
                            value: v,
                            children: p
                                ? (0, i.jsx)(b, {
                                      value: y,
                                      children: (0, i.jsx)(K, {
                                          ...x,
                                          children: l,
                                      }),
                                  })
                                : (0, i.jsx)(K, { ...x, children: l }),
                        }),
                    });
                };
            try {
                K.displayName || (K.displayName = "InternalActionBar");
            } catch {}
            try {
                F.displayName || (F.displayName = "ActionBar");
            } catch {}
        },
        77817: (e, t, r) => {
            r.d(t, {
                Dy: () => a,
                O1: () => n,
                QL: () => d,
                eX: () => o,
                n1: () => i,
                os: () => c,
                tD: () => l,
                tp: () => s,
            });
            let i = ["h1", "h2", "h3", "h4", "h5", "h6"],
                a = ["list-view", "list-view-metadata", "listitem"],
                l = "h2",
                n = {
                    "list-view": l,
                    "list-view-metadata": "h3",
                    listitem: "h3",
                },
                s = "default",
                o = !1,
                c = !1,
                d = "List view";
        },
        78413: (e, t, r) => {
            r.d(t, { m: () => n });
            var i = r(96540),
                a = r(77817),
                l = r(74304);
            function n(e) {
                let { titleHeaderTag: t, hasMetadataTitle: r } = (0, l.t)();
                return (0, i.useMemo)(() => {
                    let i = a.Dy.findIndex((t) => t === e),
                        l = a.n1.indexOf(t) + (r ? i : i - 1);
                    return l > a.n1.length - 1 ? "h6" : a.n1[l] || a.O1[e];
                }, [t, r, e]);
            }
        },
        8241: (e, t, r) => {
            r.d(t, { N: () => a });
            var i = r(96540);
            function a(
                e,
                { isPropUpdateDisabled: t = !1, isEqual: r = Object.is } = {}
            ) {
                let [l, n] = (0, i.useState)(e),
                    [s, o] = (0, i.useState)(e),
                    c = e instanceof Function ? e() : e;
                return (t || r(s, c) || (o(c), n(c)), [l, n]);
            }
        },
        87854: (e, t, r) => {
            r.d(t, { L: () => d });
            var i = r(74848),
                a = r(31668),
                l = r(98386),
                n = r(34164),
                s = r(96540),
                o = r(16946);
            let c = {
                    container: "ActionBar-module__container--ZVTfi",
                    hasActions: "ActionBar-module__hasActions--cU9tJ",
                },
                d = ({
                    anchorIcon: e,
                    style: t,
                    className: r,
                    label: d = "list item action bar",
                    ...u
                }) => {
                    let {
                        setAnyItemsWithActionBar: m,
                        setHasResizableActionsWithActionBar: h,
                    } = (0, o.Z)();
                    return (
                        (0, s.useEffect)(() => m(!0), [m]),
                        (0, s.useEffect)(() => {
                            u.actions && h(!0);
                        }, [u.actions, h]),
                        (0, i.jsx)("div", {
                            className: (0, n.$)(
                                c.container,
                                u.actions && c.hasActions,
                                r
                            ),
                            style: t,
                            ...(0, l.G)("list-view-item-action-bar-container"),
                            children: (0, i.jsx)(a.E7, {
                                ...u,
                                label: d,
                                variant: "menu",
                                overflowMenuToggleProps: e
                                    ? { icon: e }
                                    : void 0,
                            }),
                        })
                    );
                };
            try {
                d.displayName || (d.displayName = "ListItemActionBar");
            } catch {}
        },
        510: (e, t, r) => {
            r.d(t, { L: () => s, O: () => n });
            var i = r(74848),
                a = r(96540);
            let l = (0, a.createContext)(void 0),
                n = ({ children: e }) => {
                    let [t, r] = (0, a.useState)(""),
                        n = (0, a.useMemo)(
                            () => ({ description: t, setDescription: r }),
                            [t]
                        );
                    return (0, i.jsx)(l.Provider, { value: n, children: e });
                };
            n.displayName = "ListItemDescriptionProvider";
            let s = () => {
                let e = (0, a.useContext)(l);
                if (!e)
                    throw Error(
                        "useListItemDescription must be used with DescriptionProvider."
                    );
                return e;
            };
            try {
                l.displayName || (l.displayName = "DescriptionContext");
            } catch {}
        },
        78168: (e, t, r) => {
            r.d(t, { c: () => g });
            var i = r(74848),
                a = r(13233),
                l = r(34164),
                n = r(96540),
                s = r(29447),
                o = r(16946),
                c = r(89992),
                d = r(78563),
                u = r(87854);
            let m = (0, n.createContext)({
                    actionsOpen: !1,
                    setActionsOpen: a.l,
                }),
                h = ({ children: e }) => {
                    let [t, r] = (0, n.useState)(!1),
                        a = (0, n.useMemo)(
                            () => ({ actionsOpen: t, setActionsOpen: r }),
                            [t]
                        );
                    return (0, i.jsx)(m.Provider, { value: a, children: e });
                };
            h.displayName = "ListItemActionsProvider";
            try {
                m.displayName || (m.displayName = "ActionsContext");
            } catch {}
            var v = r(510);
            let y = {
                listItem: "ListItem-module__listItem--kHali",
                compact: "ListItem-module__compact--z60S6",
                hasActionBar: "ListItem-module__hasActionBar--av1aD",
                selected: "ListItem-module__selected--BaCDB",
            };
            var f = r(98386);
            let p = { container: "MetadataContainer-module__container--lj6YE" };
            function x({ style: e, className: t, children: r }) {
                return (0, i.jsx)("div", {
                    className: (0, l.$)(p.container, t),
                    style: e,
                    ...(0, f.G)("list-view-item-metadata"),
                    children: r,
                });
            }
            try {
                x.displayName || (x.displayName = "ListItemMetadataContainer");
            } catch {}
            var N = r(98391),
                w = r(87766),
                b = r(65710),
                C = r(14918);
            let A = ({
                    children: e,
                    isActive: t = !1,
                    title: r,
                    metadata: a,
                    secondaryActions: m,
                    style: h,
                    className: f,
                    metadataContainerStyle: p,
                    metadataContainerClassName: A,
                    as: g,
                    ...j
                }) => {
                    let { idPrefix: I } = (0, s.If)(),
                        { isSelectable: S } = (0, c.v)(),
                        { variant: L } = (0, d.e)(),
                        {
                            anyItemsWithActionBar: _,
                            hasResizableActionsWithActionBar: P,
                        } = (0, o.Z)(),
                        E = (0, n.useId)(),
                        { isSelected: M, onSelect: B } = (0, w.r)(),
                        { status: T } = (0, b.x)(),
                        {
                            title: R,
                            titleAction: V,
                            headingRef: k,
                        } = (0, C.J)(),
                        { description: O } = (0, v.L)(),
                        { hasNewActivity: z } = (0, N.I)(),
                        W = (0, n.useRef)(null);
                    (0, n.useEffect)(() => {
                        W.current &&
                            t &&
                            document.activeElement?.tagName === "BODY" &&
                            W.current.focus();
                    });
                    let H = (0, n.useCallback)(
                            (e) => {
                                switch (e.key) {
                                    case "Enter":
                                        if (V) {
                                            let t = document.activeElement,
                                                r = W.current === t,
                                                i =
                                                    k.current &&
                                                    (k.current === t ||
                                                        k.current.contains(t));
                                            (r || i) && V(e);
                                        }
                                        break;
                                    case " ":
                                        if (
                                            !S ||
                                            W?.current !==
                                                document.activeElement
                                        )
                                            break;
                                        (e.preventDefault(), B(!M));
                                        break;
                                    case "Escape":
                                        W?.current?.focus();
                                }
                            },
                            [V, S, B, M, k]
                        ),
                        $ = (0, n.useCallback)(() => {
                            let e = M ? "Selected" : "",
                                t = z ? "New activity" : "",
                                r = !!m,
                                i =
                                    (Array.isArray(a) && a.length > 0) ||
                                    (a && !Array.isArray(a)),
                                l = "";
                            (i || r) &&
                                (l = "More information available below");
                            let n = [R, T].filter((e) => e.trim()).join(": ");
                            try {
                                n = n.endsWith("...") ? n : n.replace(/\.+$/, "");
                            } catch {
                                for (; n.endsWith("."); )
                                    n = n.substring(0, n.length - 1);
                            }
                            let s = [e, n, O, t, l]
                                .filter((e) => e.trim())
                                .join(". ");
                            return s.endsWith(".") ? s : `${s}.`;
                        }, [m, a, M, z, R, T, O]);
                    return (0, i.jsxs)(g || "li", {
                        ref: W,
                        id: `${I}-list-view-node-${E}`,
                        className: (0, l.$)(
                            y.listItem,
                            M && y.selected,
                            "compact" === L && y.compact,
                            _ && P && y.hasActionBar,
                            f
                        ),
                        tabIndex: -1,
                        "aria-label": $(),
                        style: h,
                        onKeyDown: H,
                        ...j,
                        children: [
                            r,
                            e,
                            Array.isArray(a) && a.length > 0
                                ? (0, i.jsx)(x, {
                                      style: p,
                                      className: A,
                                      children: a.map((e, t) =>
                                          (0, i.jsx)(
                                              n.Fragment,
                                              { children: e },
                                              t
                                          )
                                      ),
                                  })
                                : !!(a && !Array.isArray(a)) &&
                                  (0, i.jsx)(x, {
                                      style: p,
                                      className: A,
                                      children: a,
                                  }),
                            m ?? (_ && (0, i.jsx)(u.L, {})),
                        ],
                    });
                },
                g = ({
                    children: e,
                    isSelected: t = !1,
                    onSelect: r = a.l,
                    ...l
                }) => {
                    let { setSelectedCount: s } = (0, c.v)(),
                        o = (0, n.useRef)(t);
                    ((o.current = t),
                        (0, n.useEffect)(() => {
                            s((e) => (t ? e + 1 : Math.max(0, e - 1)));
                        }, [t, s]),
                        (0, n.useEffect)(
                            () => () => {
                                o.current && s((e) => Math.max(0, e - 1));
                            },
                            [s]
                        ));
                    let d = (0, n.useMemo)(
                        () => ({ isSelected: t, onSelect: r }),
                        [t, r]
                    );
                    return (0, i.jsx)(h, {
                        children: (0, i.jsx)(C.y, {
                            children: (0, i.jsx)(w.W, {
                                value: d,
                                children: (0, i.jsx)(N.t, {
                                    children: (0, i.jsx)(v.O, {
                                        children: (0, i.jsx)(b.u, {
                                            children: (0, i.jsx)(A, {
                                                ...l,
                                                children: e,
                                            }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    });
                };
            try {
                A.displayName || (A.displayName = "ListItemBase");
            } catch {}
            try {
                g.displayName || (g.displayName = "ListItem");
            } catch {}
        },
        98391: (e, t, r) => {
            r.d(t, { I: () => s, t: () => n });
            var i = r(74848),
                a = r(96540);
            let l = (0, a.createContext)(void 0),
                n = ({ children: e }) => {
                    let [t, r] = (0, a.useState)(!1),
                        n = (0, a.useMemo)(
                            () => ({ hasNewActivity: t, setHasNewActivity: r }),
                            [t]
                        );
                    return (0, i.jsx)(l.Provider, { value: n, children: e });
                };
            n.displayName = "ListItemNewActivityProvider";
            let s = () => {
                let e = (0, a.useContext)(l);
                if (!e)
                    throw Error(
                        "useListItemNewActivity must be used with NewActivityProvider."
                    );
                return e;
            };
            try {
                l.displayName || (l.displayName = "NewActivityContext");
            } catch {}
        },
        87766: (e, t, r) => {
            r.d(t, { W: () => c, r: () => d });
            var i = r(74848),
                a = r(52811),
                l = r(13233),
                n = r(96540),
                s = r(14918);
            let o = (0, n.createContext)({ isSelected: !1, onSelect: l.l }),
                c = ({
                    children: e,
                    value: { isSelected: t, onSelect: r },
                }) => {
                    let { title: l } = (0, s.J)(),
                        c = (0, n.useMemo)(
                            () => ({
                                isSelected: t,
                                onSelect: (e) => {
                                    ((0, a.i)(
                                        e
                                            ? `Selected. ${l}.`
                                            : `Unselected. ${l}.`
                                    ),
                                        r(e));
                                },
                            }),
                            [t, r, l]
                        );
                    return (0, i.jsx)(o.Provider, { value: c, children: e });
                };
            c.displayName = "ListItemSelectionProvider";
            let d = () => (0, n.useContext)(o);
            try {
                o.displayName || (o.displayName = "SelectionContext");
            } catch {}
        },
        65710: (e, t, r) => {
            r.d(t, { u: () => n, x: () => s });
            var i = r(74848),
                a = r(96540);
            let l = (0, a.createContext)(void 0),
                n = ({ children: e }) => {
                    let [t, r] = (0, a.useState)(""),
                        n = (0, a.useMemo)(
                            () => ({ status: t, setStatus: r }),
                            [t]
                        );
                    return (0, i.jsx)(l.Provider, { value: n, children: e });
                };
            n.displayName = "ListItemStatusProvider";
            let s = () => {
                let e = (0, a.useContext)(l);
                if (!e)
                    throw Error(
                        "useListItemStatus must be used with StatusProvider."
                    );
                return e;
            };
            try {
                l.displayName || (l.displayName = "StatusContext");
            } catch {}
        },
        14918: (e, t, r) => {
            r.d(t, { J: () => s, y: () => n });
            var i = r(74848),
                a = r(96540);
            let l = (0, a.createContext)(void 0),
                n = ({ children: e }) => {
                    let [t, r] = (0, a.useState)(""),
                        [n, s] = (0, a.useState)(null),
                        o = (0, a.useRef)(null);
                    (0, a.useEffect)(() => {
                        o?.current?.textContent &&
                            r(o.current.textContent.trim());
                    }, [o, r]);
                    let c = (0, a.useMemo)(
                        () => ({
                            title: t,
                            titleAction: n,
                            setTitleAction: s,
                            headingRef: o,
                        }),
                        [t, n]
                    );
                    return (0, i.jsx)(l.Provider, { value: c, children: e });
                };
            n.displayName = "ListItemTitleProvider";
            let s = () => {
                let e = (0, a.useContext)(l);
                if (!e)
                    throw Error(
                        "useListItemTitle must be used with TitleProvider."
                    );
                return e;
            };
            try {
                l.displayName || (l.displayName = "TitleContext");
            } catch {}
        },
        29447: (e, t, r) => {
            r.d(t, { If: () => s, JE: () => n });
            var i = r(74848),
                a = r(96540);
            let l = (0, a.createContext)(void 0),
                n = ({ children: e }) => {
                    let t = (0, a.useId)(),
                        r = (0, a.useMemo)(() => ({ idPrefix: t }), [t]);
                    return (0, i.jsx)(l.Provider, { value: r, children: e });
                };
            n.displayName = "ListViewIdProvider";
            let s = () => {
                let e = (0, a.useContext)(l);
                if (!e)
                    throw Error("useListViewId must be used with IdProvider.");
                return e;
            };
            try {
                l.displayName || (l.displayName = "IdContext");
            } catch {}
        },
        16946: (e, t, r) => {
            r.d(t, { Z: () => o, w: () => s });
            var i = r(74848),
                a = r(13233),
                l = r(96540);
            let n = (0, l.createContext)({
                    anyItemsWithActionBar: !1,
                    setAnyItemsWithActionBar: a.l,
                    hasResizableActionsWithActionBar: !1,
                    setHasResizableActionsWithActionBar: a.l,
                }),
                s = ({ children: e }) => {
                    let [t, r] = (0, l.useState)(!1),
                        [a, s] = (0, l.useState)(!1),
                        o = (0, l.useMemo)(
                            () => ({
                                anyItemsWithActionBar: t,
                                setAnyItemsWithActionBar: r,
                                hasResizableActionsWithActionBar: a,
                                setHasResizableActionsWithActionBar: s,
                            }),
                            [t, a]
                        );
                    return (0, i.jsx)(n.Provider, { value: o, children: e });
                };
            s.displayName = "ListViewItemsProvider";
            let o = () => (0, l.useContext)(n);
            try {
                n.displayName || (n.displayName = "ItemsContext");
            } catch {}
        },
        84905: (e, t, r) => {
            r.d(t, { u: () => I });
            var i = r(74848),
                a = r(13233),
                l = r(98386),
                n = r(8241),
                s = r(84217),
                o = r(34164),
                c = r(96540),
                d = r(77817),
                u = r(57909),
                m = r(69676),
                h = r(55966),
                v = r(82678);
            function y(e, t) {
                let r = e,
                    i = e.closest("[role=list] li");
                i && (r = i);
                let a = r.closest("[role=list]");
                if (!a) return;
                let l = document.createTreeWalker(
                        a,
                        NodeFilter.SHOW_ELEMENT,
                        (e) => {
                            if (
                                !(e instanceof HTMLElement) ||
                                !e.id.includes("list-view-node")
                            )
                                return NodeFilter.FILTER_SKIP;
                            let t = e.parentElement;
                            for (; t && t !== a; ) {
                                if (t.id.includes("list-view-node"))
                                    return NodeFilter.FILTER_SKIP;
                                t = t.parentElement;
                            }
                            return NodeFilter.FILTER_ACCEPT;
                        }
                    ),
                    n = l.firstChild(),
                    s = 0;
                for (; n !== r && ((n = l.nextNode()), !(++s > 500)); );
                let o = "next" === t ? l.nextNode() : l.previousNode();
                for (
                    ;
                    o instanceof HTMLElement &&
                    o.parentElement?.closest(
                        "[role=list] li[aria-expanded=false]"
                    );

                )
                    o = "next" === t ? l.nextNode() : l.previousNode();
                return o instanceof HTMLElement ? o : void 0;
            }
            function f(e) {
                let t = e.closest("[role=list]"),
                    r = t?.querySelector("[role=list] li");
                return r instanceof HTMLElement ? r : void 0;
            }
            function p(e) {
                let t = e.closest("[role=list]"),
                    r = t?.querySelectorAll("[role=list] li");
                if (!r || r.length < 1) return;
                let i = r[r.length - 1];
                if (i instanceof HTMLElement) return i;
            }
            function x(e, t) {
                let r = [
                        ...(0, h.K1)(document.documentElement, {
                            strict: !0,
                            onlyTabbable: !0,
                        }),
                    ],
                    i = r.indexOf(e);
                return "next" === t ? r[i + 1] : r[i - 1];
            }
            var N = r(29447),
                w = r(16946);
            let b = {
                ul: "ListView-module__ul--vMLEZ",
                container: "ListView-module__container--zF6wW",
            };
            var C = r(25654),
                A = r(89992),
                g = r(74304),
                j = r(78563);
            let I = ({
                    title: e,
                    titleHeaderTag: t,
                    children: r,
                    totalCount: l,
                    selectedCount: s = 0,
                    variant: o = d.tp,
                    singularUnits: u,
                    pluralUnits: m,
                    onVariantChange: h = a.l,
                    isSelectable: v,
                    hasDragHandle: y,
                    ...f
                }) => {
                    let [p, x] = (0, n.N)(o);
                    (0, c.useEffect)(() => {
                        h?.(p);
                    }, [h, p]);
                    let b = (0, c.useMemo)(
                        () => c.Children.toArray(r).length,
                        [r]
                    );
                    return (0, i.jsx)(N.JE, {
                        children: (0, i.jsx)(g.y, {
                            title: e,
                            titleHeaderTag: t,
                            children: (0, i.jsx)(j.H, {
                                variant: p,
                                setVariant: x,
                                children: (0, i.jsx)(A.W, {
                                    countOnPage: b,
                                    selectedCount: s,
                                    totalCount: l,
                                    singularUnits: u,
                                    pluralUnits: m,
                                    isSelectable: v,
                                    hasDragHandle: y,
                                    children: (0, i.jsx)(C.e, {
                                        children: (0, i.jsx)(w.w, {
                                            children: (0, i.jsx)(S, {
                                                ...f,
                                                children: r,
                                            }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    });
                },
                S = ({
                    metadata: e,
                    children: t,
                    className: r,
                    listRef: a,
                    ariaLabelledBy: n,
                    itemsListClassName: d,
                    itemsListStyle: w,
                    strictFocusZone: C,
                    as: A,
                    role: j,
                    ...I
                }) => {
                    let { idPrefix: S } = (0, N.If)(),
                        { title: L, titleHeaderTag: _ } = (0, g.t)(),
                        { containerRef: P } = (function (e = !0) {
                            let t = void 0 === e || e,
                                r =
                                    m.z0.ArrowVertical |
                                    m.z0.HomeAndEnd |
                                    m.z0.PageUpDown |
                                    m.z0.Tab,
                                i = (0, u.zw)() ? r | m.z0.JK : r,
                                { containerRef: a } = (0, v.G)({
                                    strict: t,
                                    bindKeys: i,
                                    focusInStrategy: () => {
                                        if (!a.current) return;
                                        let e =
                                            a.current.querySelector(
                                                '[tabindex="0"]'
                                            );
                                        return (
                                            e?.closest("[role=list] li") || e
                                        );
                                    },
                                    focusableElementFilter: (e) =>
                                        "list" !== e.getAttribute("role"),
                                    getNextFocusable: (e, r, i) => {
                                        if (r instanceof HTMLElement) {
                                            if (
                                                "Tab" === i.key ||
                                                "Tab" === i.code
                                            ) {
                                                if (
                                                    i.shiftKey &&
                                                    r.id.includes(
                                                        "list-view-node"
                                                    )
                                                )
                                                    return x(r, "previous");
                                                let e =
                                                    r.closest("[role=list] li");
                                                if (!e) return;
                                                let a = [
                                                        ...(0, h.K1)(e, {
                                                            strict: t,
                                                        }),
                                                    ],
                                                    l = a.findIndex(
                                                        (e) =>
                                                            e.parentElement?.getAttribute(
                                                                "data-listview-component"
                                                            ) ===
                                                            "trailing-badge"
                                                    ),
                                                    n = a.findIndex(
                                                        (e) =>
                                                            "selection-input" ===
                                                            e.getAttribute(
                                                                "data-listview-component"
                                                            )
                                                    );
                                                l >= 0 &&
                                                    n >= 0 &&
                                                    (a.splice(l, 0, a[n]),
                                                    a.splice(n + 1, 1));
                                                let s = a.indexOf(i.target);
                                                return s !== a.length - 1 ||
                                                    i.shiftKey
                                                    ? s > 0
                                                        ? i.shiftKey
                                                            ? a[s - 1]
                                                            : a[s + 1]
                                                        : void 0
                                                    : x(r, "next");
                                            }
                                            if ("previous" === e)
                                                return y(r, e) || f(r);
                                            if ("next" === e)
                                                return y(r, e) || p(r);
                                            if ("start" === e) return f(r);
                                            if ("end" === e) return p(r);
                                        }
                                    },
                                });
                            return { containerRef: a };
                        })(C);
                    (0, c.useEffect)(() => {
                        a && (a.current = P.current);
                    }, [P, a]);
                    let E = n ?? `${S}-list-view-container-title`;
                    return (0, i.jsxs)("div", {
                        id: `${S}-list-view-container`,
                        className: (0, o.$)(b.container, r),
                        children: [
                            !n &&
                                (0, i.jsx)(s.A, {
                                    className: "sr-only",
                                    as: _,
                                    id: E,
                                    ...(0, l.G)("list-view-title"),
                                    children: L,
                                }),
                            e,
                            (0, i.jsx)(A || "ul", {
                                className: (0, o.$)(b.ul, d),
                                style: w,
                                ref: P,
                                "aria-labelledby": E,
                                tabIndex: -1,
                                role: j || "list",
                                "data-listview-component": "items-list",
                                ...(0, l.G)("list-view-items"),
                                ...I,
                                children: t,
                            }),
                        ],
                    });
                };
            try {
                I.displayName || (I.displayName = "ListView");
            } catch {}
            try {
                S.displayName || (S.displayName = "ListViewContainer");
            } catch {}
        },
        25654: (e, t, r) => {
            r.d(t, { P: () => s, e: () => n });
            var i = r(74848),
                a = r(96540);
            let l = (0, a.createContext)({ multiPageSelectionAllowed: !1 }),
                n = ({ children: e, multiPageSelectionAllowed: t = !1 }) => {
                    let [r, n] = (0, a.useState)(t),
                        s = (0, a.useMemo)(
                            () => ({
                                multiPageSelectionAllowed: r,
                                setMultiPageSelectionAllowed: n,
                            }),
                            [r]
                        );
                    return (0, i.jsx)(l.Provider, { value: s, children: e });
                };
            n.displayName = "ListViewMultiPageSelectionProvider";
            let s = () => (0, a.useContext)(l);
            try {
                l.displayName || (l.displayName = "MultiPageSelectionContext");
            } catch {}
        },
        89992: (e, t, r) => {
            r.d(t, { W: () => d, v: () => u });
            var i = r(74848),
                a = r(13233),
                l = r(96540),
                n = r(77817);
            let s = "list item",
                o = "list items",
                c = (0, l.createContext)({
                    selectedCount: 0,
                    setSelectedCount: a.l,
                    countOnPage: 0,
                    isSelectAllChecked: !1,
                    anyItemsSelected: !1,
                    singularUnits: s,
                    pluralUnits: o,
                    isSelectable: n.eX,
                    hasDragHandle: n.os,
                }),
                d = (
                    {
                        children: e,
                        countOnPage: t = 0,
                        singularUnits: r = s,
                        pluralUnits: a = o,
                        totalCount: d,
                        selectedCount: u = 0,
                        isSelectable: m = n.eX,
                        hasDragHandle: h = n.os,
                    } = {
                        singularUnits: s,
                        pluralUnits: o,
                        selectedCount: 0,
                        countOnPage: 0,
                        isSelectable: n.eX,
                        hasDragHandle: n.os,
                    }
                ) => {
                    let [v, y] = (0, l.useState)(u);
                    (0, l.useEffect)(() => y(u), [u]);
                    let f = v > 0 && v >= t,
                        p = v > 0,
                        x = (0, l.useMemo)(
                            () => ({
                                totalCount: d,
                                countOnPage: t,
                                selectedCount: v,
                                setSelectedCount: y,
                                isSelectAllChecked: f,
                                anyItemsSelected: p,
                                singularUnits: r,
                                pluralUnits: a,
                                isSelectable: m,
                                hasDragHandle: h,
                            }),
                            [d, t, v, y, f, p, r, a, m, h]
                        );
                    return (0, i.jsx)(c.Provider, { value: x, children: e });
                };
            d.displayName = "ListViewSelectionProvider";
            let u = () => (0, l.useContext)(c);
            try {
                c.displayName || (c.displayName = "SelectionContext");
            } catch {}
        },
        74304: (e, t, r) => {
            r.d(t, { t: () => o, y: () => s });
            var i = r(74848),
                a = r(96540),
                l = r(77817);
            let n = (0, a.createContext)(void 0),
                s = ({ children: e, title: t, titleHeaderTag: r = l.tD }) => {
                    let [s, o] = (0, a.useState)(!1),
                        c = (0, a.useMemo)(
                            () => ({
                                title: t.trim() || l.QL,
                                titleHeaderTag: r,
                                hasMetadataTitle: s,
                                setHasMetadataTitle: o,
                            }),
                            [s, t, r]
                        );
                    return (0, i.jsx)(n.Provider, { value: c, children: e });
                };
            s.displayName = "ListViewTitleProvider";
            let o = () => {
                let e = (0, a.useContext)(n);
                if (!e)
                    throw Error(
                        "useListViewTitle must be used with TitleProvider."
                    );
                return e;
            };
            try {
                n.displayName || (n.displayName = "TitleContext");
            } catch {}
        },
        78563: (e, t, r) => {
            r.d(t, { H: () => o, e: () => c });
            var i = r(74848),
                a = r(13233),
                l = r(96540),
                n = r(77817);
            let s = (0, l.createContext)(void 0),
                o = ({
                    children: e,
                    variant: t = n.tp,
                    setVariant: r = a.l,
                }) => {
                    let o = (0, l.useMemo)(
                        () => ({ variant: t, setVariant: r }),
                        [r, t]
                    );
                    return (0, i.jsx)(s.Provider, { value: o, children: e });
                };
            o.displayName = "ListViewVariantProvider";
            let c = () => {
                let e = (0, l.useContext)(s);
                if (!e)
                    throw Error(
                        "useListViewVariant must be used with VariantProvider."
                    );
                return e;
            };
            try {
                s.displayName || (s.displayName = "VariantContext");
            } catch {}
        },
    },
]);
//# sourceMappingURL=ui_packages_list-view_src_hooks_use-next-header-tag_ts-ui_packages_list-view_src_ListItem_Lis-0a5d95-ba5c555cbba9.js.map
