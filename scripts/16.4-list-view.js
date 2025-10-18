"use strict";
(globalThis.webpackChunk_github_ui_github_ui =
    globalThis.webpackChunk_github_ui_github_ui || []).push([
    [
        "packages_list-view_src_hooks_use-next-header-tag_ts-packages_list-view_src_ListItem_ListItem_-055669",
    ],
    {
        2970: (e, t, r) => {
            r.d(t, { c: () => A });
            var i = r(74848),
                a = r(73189),
                l = r(34164),
                n = r(96540),
                s = r(75986),
                o = r(18377),
                c = r(24347),
                u = r(35220),
                d = r(9214);
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
            var v = r(77177);
            let y = {
                listItem: "ListItem-module__listItem--k4eMk",
                compact: "ListItem-module__compact--f4FSR",
                hasActionBar: "ListItem-module__hasActionBar--t14sR",
                selected: "ListItem-module__selected--WTEJT",
            };
            var f = r(29731);
            let p = { container: "MetadataContainer-module__container--nU0s9" };
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
            var N = r(49744),
                b = r(60257),
                w = r(27603),
                C = r(74501);
            let g = (0, n.forwardRef)(
                (
                    {
                        children: e,
                        isActive: t = !1,
                        title: r,
                        metadata: a,
                        secondaryActions: m,
                        style: h,
                        className: f,
                        metadataContainerStyle: p,
                        metadataContainerClassName: g,
                        as: A,
                        ...I
                    },
                    j
                ) => {
                    let { idPrefix: _ } = (0, s.If)(),
                        { isSelectable: S } = (0, c.v)(),
                        { variant: L } = (0, u.e)(),
                        {
                            anyItemsWithActionBar: P,
                            hasResizableActionsWithActionBar: E,
                        } = (0, o.Z)(),
                        M = (0, n.useId)(),
                        { isSelected: B, onSelect: R } = (0, b.r)(),
                        { status: T } = (0, w.x)(),
                        {
                            title: k,
                            titleAction: V,
                            headingRef: O,
                        } = (0, C.J)(),
                        { description: W } = (0, v.L)(),
                        { hasNewActivity: H } = (0, N.I)(),
                        z = (0, n.useRef)(null);
                    ((0, n.useEffect)(() => {
                        "function" == typeof j
                            ? j(z.current)
                            : j && (j.current = z.current);
                    }, [j]),
                        (0, n.useEffect)(() => {
                            z.current &&
                                t &&
                                document.activeElement?.tagName === "BODY" &&
                                z.current.focus();
                        }));
                    let $ = (0, n.useCallback)(
                            (e) => {
                                switch (e.key) {
                                    case "Enter":
                                        if (V) {
                                            let t = document.activeElement,
                                                r = z.current === t,
                                                i =
                                                    O.current &&
                                                    (O.current === t ||
                                                        O.current.contains(t));
                                            (r || i) && V(e);
                                        }
                                        break;
                                    case " ":
                                        if (
                                            !S ||
                                            z?.current !==
                                                document.activeElement
                                        )
                                            break;
                                        (e.preventDefault(), R(!B));
                                        break;
                                    case "Escape":
                                        z?.current?.focus();
                                }
                            },
                            [V, S, R, B, O]
                        ),
                        D = (0, n.useCallback)(() => {
                            let e = B ? "Selected" : "",
                                t = H ? "New activity" : "",
                                r = !!m,
                                i =
                                    (Array.isArray(a) && a.length > 0) ||
                                    (a && !Array.isArray(a)),
                                l = "";
                            (i || r) &&
                                (l = "More information available below");
                            let n = [k, T].filter((e) => e.trim()).join(": ");
                            try {
                                n = n.endsWith("...")
                                    ? n
                                    : n.replace(/\.+$/, "");
                            } catch {
                                for (; n.endsWith("."); )
                                    n = n.substring(0, n.length - 1);
                            }
                            let s = [e, n, W, t, l]
                                .filter((e) => e.trim())
                                .join(". ");
                            return s.endsWith(".") ? s : `${s}.`;
                        }, [m, a, B, H, k, T, W]);
                    return (0, i.jsxs)(A || "li", {
                        ref: z,
                        id: `${_}-list-view-node-${M}`,
                        className: (0, l.$)(
                            y.listItem,
                            B && y.selected,
                            "compact" === L && y.compact,
                            P && E && y.hasActionBar,
                            f
                        ),
                        tabIndex: -1,
                        "aria-label": D(),
                        style: h,
                        onKeyDown: $,
                        ...I,
                        children: [
                            r,
                            e,
                            Array.isArray(a) && a.length > 0
                                ? (0, i.jsx)(x, {
                                      style: p,
                                      className: g,
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
                                      className: g,
                                      children: a,
                                  }),
                            m ?? (P && (0, i.jsx)(d.L, {})),
                        ],
                    });
                }
            );
            g.displayName = "ListItemBase";
            let A = (0, n.forwardRef)(
                (
                    {
                        children: e,
                        isSelected: t = !1,
                        onSelect: r = a.l,
                        ...l
                    },
                    s
                ) => {
                    let { setSelectedCount: o } = (0, c.v)(),
                        u = (0, n.useRef)(t);
                    ((u.current = t),
                        (0, n.useEffect)(() => {
                            o((e) => (t ? e + 1 : Math.max(0, e - 1)));
                        }, [t, o]),
                        (0, n.useEffect)(
                            () => () => {
                                u.current && o((e) => Math.max(0, e - 1));
                            },
                            [o]
                        ));
                    let d = (0, n.useMemo)(
                        () => ({ isSelected: t, onSelect: r }),
                        [t, r]
                    );
                    return (0, i.jsx)(h, {
                        children: (0, i.jsx)(C.y, {
                            children: (0, i.jsx)(b.W, {
                                value: d,
                                children: (0, i.jsx)(N.t, {
                                    children: (0, i.jsx)(v.O, {
                                        children: (0, i.jsx)(w.u, {
                                            children: (0, i.jsx)(g, {
                                                ref: s,
                                                ...l,
                                                children: e,
                                            }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    });
                }
            );
            A.displayName = "ListItem";
        },
        9214: (e, t, r) => {
            r.d(t, { L: () => u });
            var i = r(74848),
                a = r(91230),
                l = r(29731),
                n = r(34164),
                s = r(96540),
                o = r(18377);
            let c = {
                    container: "ActionBar-module__container--8I2RB",
                    hasActions: "ActionBar-module__hasActions--HH0uB",
                },
                u = ({
                    anchorIcon: e,
                    style: t,
                    className: r,
                    label: u = "list item action bar",
                    ...d
                }) => {
                    let {
                        setAnyItemsWithActionBar: m,
                        setHasResizableActionsWithActionBar: h,
                    } = (0, o.Z)();
                    return (
                        (0, s.useEffect)(() => m(!0), [m]),
                        (0, s.useEffect)(() => {
                            d.actions && h(!0);
                        }, [d.actions, h]),
                        (0, i.jsx)("div", {
                            className: (0, n.$)(
                                c.container,
                                d.actions && c.hasActions,
                                r
                            ),
                            style: t,
                            ...(0, l.G)("list-view-item-action-bar-container"),
                            children: (0, i.jsx)(a.E7, {
                                ...d,
                                label: u,
                                variant: "menu",
                                overflowMenuToggleProps: e
                                    ? { icon: e }
                                    : void 0,
                            }),
                        })
                    );
                };
            try {
                u.displayName || (u.displayName = "ListItemActionBar");
            } catch {}
        },
        18377: (e, t, r) => {
            r.d(t, { Z: () => o, w: () => s });
            var i = r(74848),
                a = r(73189),
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
        24347: (e, t, r) => {
            r.d(t, { W: () => u, v: () => d });
            var i = r(74848),
                a = r(73189),
                l = r(96540),
                n = r(50205);
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
                u = (
                    {
                        children: e,
                        countOnPage: t = 0,
                        singularUnits: r = s,
                        pluralUnits: a = o,
                        totalCount: u,
                        selectedCount: d = 0,
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
                    let [v, y] = (0, l.useState)(d);
                    (0, l.useEffect)(() => y(d), [d]);
                    let f = v > 0 && v >= t,
                        p = v > 0,
                        x = (0, l.useMemo)(
                            () => ({
                                totalCount: u,
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
                            [u, t, v, y, f, p, r, a, m, h]
                        );
                    return (0, i.jsx)(c.Provider, { value: x, children: e });
                };
            u.displayName = "ListViewSelectionProvider";
            let d = () => (0, l.useContext)(c);
            try {
                c.displayName || (c.displayName = "SelectionContext");
            } catch {}
        },
        27603: (e, t, r) => {
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
        35220: (e, t, r) => {
            r.d(t, { H: () => o, e: () => c });
            var i = r(74848),
                a = r(73189),
                l = r(96540),
                n = r(50205);
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
        49744: (e, t, r) => {
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
        50205: (e, t, r) => {
            r.d(t, {
                Dy: () => a,
                O1: () => n,
                QL: () => u,
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
                u = "List view";
        },
        53687: (e, t, r) => {
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
        56825: (e, t, r) => {
            r.d(t, { m: () => n });
            var i = r(96540),
                a = r(50205),
                l = r(61015);
            function n(e) {
                let { titleHeaderTag: t, hasMetadataTitle: r } = (0, l.t)();
                return (0, i.useMemo)(() => {
                    let i = a.Dy.findIndex((t) => t === e),
                        l = a.n1.indexOf(t) + (r ? i : i - 1);
                    return l > a.n1.length - 1 ? "h6" : a.n1[l] || a.O1[e];
                }, [t, r, e]);
            }
        },
        60257: (e, t, r) => {
            r.d(t, { W: () => c, r: () => u });
            var i = r(74848),
                a = r(4559),
                l = r(73189),
                n = r(96540),
                s = r(74501);
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
            let u = () => (0, n.useContext)(o);
            try {
                o.displayName || (o.displayName = "SelectionContext");
            } catch {}
        },
        61015: (e, t, r) => {
            r.d(t, { t: () => o, y: () => s });
            var i = r(74848),
                a = r(96540),
                l = r(50205);
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
        74501: (e, t, r) => {
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
        75986: (e, t, r) => {
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
        77177: (e, t, r) => {
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
        80293: (e, t, r) => {
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
        91230: (e, t, r) => {
            r.d(t, { E7: () => $ });
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
                u = () => {
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
            var d = r(73189),
                m = r(80293),
                h = r(50463),
                v = r(93330);
            let y = (e, t) => {
                    let r =
                            2 *
                            ((e) => {
                                if (!e) return 0;
                                let t = window.getComputedStyle(e);
                                return t?.columnGap
                                    ? parseInt(t.columnGap, 10)
                                    : 0;
                            })(t),
                        i = e.getBoundingClientRect().width,
                        a = window.getComputedStyle(e);
                    return (
                        i +
                        (a?.marginLeft ? parseInt(a.marginLeft, 10) : 0) +
                        (a?.marginRight ? parseInt(a.marginRight, 10) : 0) +
                        r
                    );
                },
                f = (e, t) => {
                    let r = p(e, t);
                    if (void 0 === r) return;
                    let i = r;
                    return (t && (i -= t.offsetLeft), i);
                },
                p = (e, t) => {
                    if (!e) return;
                    let r = e.offsetWidth;
                    return (t && (r -= t.offsetWidth), r);
                },
                x = (0, a.createContext)({
                    visibleChildEndIndex: 0,
                    justifySpaceBetween: !1,
                    recalculateItemSize: d.l,
                }),
                N = ({ children: e, value: { actionKeys: t } }) => {
                    let r = t.length,
                        [l, n] = (0, m.N)(r),
                        { outerContainerRef: s, itemContainerRef: o } = u(),
                        [c, d] = (0, a.useState)(),
                        [N, b] = (0, a.useState)(),
                        [w, C] = (0, a.useState)(
                            new Map(t.map((e) => [e, void 0]))
                        ),
                        [g, A] = (0, a.useState)(!1),
                        I = (0, a.useMemo)(
                            () =>
                                t
                                    .slice(0, l)
                                    .every(
                                        (e) =>
                                            w.has(e) &&
                                            "number" == typeof w.get(e)
                                    ),
                            [t, w, l]
                        ),
                        j = (0, a.useCallback)(
                            (e) => {
                                let r = t[e];
                                if (r) return w.get(r);
                            },
                            [t, w]
                        ),
                        _ = (0, a.useCallback)(
                            (e, t) => {
                                let r = o.current;
                                if (!r) return;
                                let i = y(t, r);
                                C((t) => {
                                    if (i === t.get(e) || isNaN(i)) return t;
                                    let r = new Map(Array.from(t.entries()));
                                    return (r.set(e, i), r);
                                });
                            },
                            [o]
                        ),
                        S = (0, a.useCallback)(() => {
                            if (!I) return;
                            let e = s.current,
                                t = o.current,
                                r = p(e, t);
                            if (void 0 === r) return;
                            let i = f(e, t);
                            void 0 !== i && r <= i && n(Math.max(0, l - 1));
                        }, [I, s, o, n, l]),
                        L = (0, a.useCallback)(() => {
                            let e = s.current,
                                t = o.current,
                                i = p(e, t);
                            if (void 0 === i) return;
                            let a = j(l);
                            if (void 0 === a) return;
                            let c = f(e, t);
                            void 0 !== c && i > c + a && n(Math.min(r, l + 1));
                        }, [s, o, j, l, n, r]),
                        P = (0, a.useCallback)(() => {
                            let e = s.current,
                                t = o.current;
                            if (!e || !t) return;
                            let r = e.offsetWidth;
                            r &&
                                (void 0 === c || r <= c ? S() : r > c && L(),
                                d(r),
                                A(r <= (N ?? t.offsetWidth)));
                        }, [L, S, N, c, s, o]);
                    ((0, h.A)(() => {
                        let e = o.current;
                        if (!e) return;
                        let r = new Map();
                        for (let i of t) {
                            let t = e.querySelector(
                                `[data-action-bar-item="${i}"]`
                            );
                            t && r.set(i, y(t, e));
                        }
                        C(r);
                    }, [t, o]),
                        (0, h.A)(() => {
                            let e = o.current;
                            e && b(e.offsetWidth);
                        }, [o]),
                        (0, h.A)(() => {
                            P();
                        }, [P]),
                        (0, v.w)(P, s));
                    let E = (0, a.useMemo)(
                        () => ({
                            visibleChildEndIndex: l,
                            justifySpaceBetween: g,
                            recalculateItemSize: _,
                        }),
                        [l, g, _]
                    );
                    return (0, i.jsx)(x.Provider, { value: E, children: e });
                },
                b = () => {
                    let e = (0, a.useContext)(x);
                    return (
                        e || {
                            justifySpaceBetween: !1,
                            visibleChildEndIndex: 0,
                            recalculateItemSize: d.l,
                        }
                    );
                };
            try {
                x.displayName || (x.displayName = "ActionBarResizeContext");
            } catch {}
            try {
                N.displayName || (N.displayName = "ActionBarResizeProvider");
            } catch {}
            var w = r(29731),
                C = r(11683),
                g = r(45800),
                A = r(34164),
                I = r(38621),
                j = r(27042),
                _ = r(26108),
                S = r(5524),
                L = r(87448);
            let P = {
                    IconButton_0: "OverflowMenu-module__IconButton_0--cxtvS",
                },
                E = I.KebabHorizontalIcon,
                M = "invisible",
                B = ({
                    anchorProps: {
                        "aria-label": e,
                        icon: t = E,
                        variant: r = M,
                        ...l
                    } = { icon: E, variant: M },
                    open: n,
                    onOpenChange: o,
                }) => {
                    let { anchorRef: c } = u(),
                        { actions: d, staticMenuActions: m, label: h } = s(),
                        { visibleChildEndIndex: v } = b(),
                        y = (0, a.useMemo)(
                            () =>
                                (0, L.h1)(l, {
                                    "aria-label": e?.trim() || `More ${h}`,
                                    icon: t,
                                    className: P.IconButton_0,
                                    variant: r,
                                }),
                            [e, t, h, r, l]
                        ),
                        f = (0, a.useMemo)(() => d?.slice(v), [d, v]),
                        p = f && f.length > 0,
                        x = m && m.length > 0;
                    return p || x
                        ? (0, i.jsxs)(j.W, {
                              anchorRef: c,
                              open: n,
                              onOpenChange: o,
                              children: [
                                  (0, i.jsx)(j.W.Anchor, {
                                      children: (0, i.jsx)(_.K, {
                                          ...(0, w.G)("overflow-menu-anchor"),
                                          ...y,
                                      }),
                                  }),
                                  (0, i.jsx)(j.W.Overlay, {
                                      align: "end",
                                      "data-overflow-menu-overlay": !0,
                                      children: (0, i.jsxs)(S.l, {
                                          children: [
                                              x &&
                                                  m.map((e) =>
                                                      (0, i.jsx)(
                                                          a.Fragment,
                                                          {
                                                              children:
                                                                  e.render(),
                                                          },
                                                          e.key
                                                      )
                                                  ),
                                              f?.map((e) =>
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
                B.displayName || (B.displayName = "OverflowMenu");
            } catch {}
            let R = {
                    Box_0: "VisibleAndOverflowContainer-module__Box_0--KyT2b",
                    space: "VisibleAndOverflowContainer-module__space--fVHr3",
                },
                T = { Box_0: "VisibleItem-module__Box_0--BsJkb" },
                k = ({ children: e, actionKey: t }) => {
                    let r = (0, a.useRef)(null),
                        { recalculateItemSize: l } = b();
                    return (
                        (0, h.A)(() => {
                            r.current && l(t, r.current);
                        }, [r, l, t]),
                        (0, i.jsx)("div", {
                            ...(0, w.G)(`action-bar-item-${t}`),
                            "data-action-bar-item": t,
                            ref: r,
                            className: T.Box_0,
                            children: e,
                        })
                    );
                };
            try {
                k.displayName || (k.displayName = "VisibleItem");
            } catch {}
            let V = { Box_1: "VisibleItems-module__Box_1--LOtDr" },
                O = ({ className: e, style: t }) => {
                    let { itemContainerRef: r } = u(),
                        { actions: a, gap: l } = s(),
                        { visibleChildEndIndex: n } = b(),
                        o = a?.slice(0, n);
                    return (0, i.jsx)("div", {
                        ...(0, w.G)("action-bar"),
                        ref: r,
                        className: (0, A.$)(e, V.Box_1),
                        style: { gap: l, ...t },
                        children: o?.map(({ key: e, render: t }) =>
                            (0, i.jsx)(k, { actionKey: e, children: t(!1) }, e)
                        ),
                    });
                };
            try {
                O.displayName || (O.displayName = "VisibleItems");
            } catch {}
            let W = ({
                overflowMenuToggleProps: e,
                overflowMenuProps: t,
                children: r,
                ...a
            }) => {
                let { outerContainerRef: l } = u(),
                    { label: n, variant: o, gap: c } = s(),
                    { justifySpaceBetween: d } = b();
                return (
                    (0, g.G)(
                        {
                            containerRef: l,
                            bindKeys: C.z0.ArrowHorizontal | C.z0.HomeAndEnd,
                            focusOutBehavior: "wrap",
                            disabled: "toolbar" !== o,
                        },
                        [l]
                    ),
                    (0, i.jsxs)("div", {
                        ref: l,
                        ...(0, w.G)("action-bar-container"),
                        role: "toolbar" === o ? "toolbar" : void 0,
                        "aria-label": "toolbar" === o ? n : void 0,
                        style: { gap: c },
                        className: (0, A.$)(R.Box_0, d && R.space),
                        children: [
                            (0, i.jsx)(O, { ...a }),
                            r,
                            (0, i.jsx)(B, { anchorProps: e, ...t }),
                        ],
                    })
                );
            };
            try {
                W.displayName ||
                    (W.displayName = "VisibleAndOverflowContainer");
            } catch {}
            let H = "normal",
                z = ({ children: e, ...t }) =>
                    (0, i.jsx)(W, { ...t, children: e }),
                $ = ({
                    actions: e = [],
                    staticMenuActions: t,
                    overflowMenuToggleProps: r,
                    overflowMenuProps: l,
                    children: s,
                    label: o,
                    variant: u,
                    density: d = H,
                    anchorRef: m,
                    className: h,
                    style: v,
                }) => {
                    let y = (0, a.useMemo)(
                            () => ({
                                actions: e,
                                staticMenuActions: t,
                                variant: u,
                                label: o,
                                gap: ((e) =>
                                    "condensed" === e
                                        ? "var(--base-size-4)"
                                        : "spacious" === e
                                          ? "var(--base-size-16)"
                                          : "none" === e
                                            ? 0
                                            : "var(--base-size-8)")(d),
                            }),
                            [e, t, u, o, d]
                        ),
                        f = (0, a.useMemo)(
                            () => ({ actionKeys: e.map((e) => e.key) }),
                            [e]
                        ),
                        p = t && t.length > 0,
                        x = e && e.length > 0;
                    if (!x && !p) return null;
                    let b = {
                        overflowMenuToggleProps: r,
                        overflowMenuProps: l,
                        className: h,
                        style: v,
                    };
                    return (0, i.jsx)(c, {
                        value: { anchorRef: m },
                        children: (0, i.jsx)(n, {
                            value: y,
                            children: x
                                ? (0, i.jsx)(N, {
                                      value: f,
                                      children: (0, i.jsx)(z, {
                                          ...b,
                                          children: s,
                                      }),
                                  })
                                : (0, i.jsx)(z, { ...b, children: s }),
                        }),
                    });
                };
            try {
                z.displayName || (z.displayName = "InternalActionBar");
            } catch {}
            try {
                $.displayName || ($.displayName = "ActionBar");
            } catch {}
        },
        97174: (e, t, r) => {
            r.d(t, { u: () => j });
            var i = r(74848),
                a = r(73189),
                l = r(29731),
                n = r(80293),
                s = r(81960),
                o = r(34164),
                c = r(96540),
                u = r(50205),
                d = r(44569),
                m = r(11683),
                h = r(55966),
                v = r(45800);
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
            var N = r(75986),
                b = r(18377);
            let w = {
                ul: "ListView-module__ul--A_8jF",
                container: "ListView-module__container--rxCWy",
            };
            var C = r(53687),
                g = r(24347),
                A = r(61015),
                I = r(35220);
            let j = ({
                    title: e,
                    titleHeaderTag: t,
                    children: r,
                    totalCount: l,
                    selectedCount: s = 0,
                    variant: o = u.tp,
                    singularUnits: d,
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
                    let w = (0, c.useMemo)(
                        () => c.Children.toArray(r).length,
                        [r]
                    );
                    return (0, i.jsx)(N.JE, {
                        children: (0, i.jsx)(A.y, {
                            title: e,
                            titleHeaderTag: t,
                            children: (0, i.jsx)(I.H, {
                                variant: p,
                                setVariant: x,
                                children: (0, i.jsx)(g.W, {
                                    countOnPage: w,
                                    selectedCount: s,
                                    totalCount: l,
                                    singularUnits: d,
                                    pluralUnits: m,
                                    isSelectable: v,
                                    hasDragHandle: y,
                                    children: (0, i.jsx)(C.e, {
                                        children: (0, i.jsx)(b.w, {
                                            children: (0, i.jsx)(_, {
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
                _ = ({
                    metadata: e,
                    children: t,
                    className: r,
                    listRef: a,
                    ariaLabelledBy: n,
                    itemsListClassName: u,
                    itemsListStyle: b,
                    strictFocusZone: C,
                    as: g,
                    role: I,
                    ...j
                }) => {
                    let { idPrefix: _ } = (0, N.If)(),
                        { title: S, titleHeaderTag: L } = (0, A.t)(),
                        { containerRef: P } = (function (e = !0) {
                            let t = void 0 === e || e,
                                r =
                                    m.z0.ArrowVertical |
                                    m.z0.HomeAndEnd |
                                    m.z0.PageUpDown |
                                    m.z0.Tab,
                                i = (0, d.zw)() ? r | m.z0.JK : r,
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
                    let E = n ?? `${_}-list-view-container-title`;
                    return (0, i.jsxs)("div", {
                        id: `${_}-list-view-container`,
                        className: (0, o.$)(w.container, r),
                        children: [
                            !n &&
                                (0, i.jsx)(s.A, {
                                    className: "sr-only",
                                    as: L,
                                    id: E,
                                    ...(0, l.G)("list-view-title"),
                                    children: S,
                                }),
                            e,
                            (0, i.jsx)(g || "ul", {
                                className: (0, o.$)(w.ul, u),
                                style: b,
                                ref: P,
                                "aria-labelledby": E,
                                tabIndex: -1,
                                role: I || "list",
                                "data-listview-component": "items-list",
                                ...(0, l.G)("list-view-items"),
                                ...j,
                                children: t,
                            }),
                        ],
                    });
                };
            try {
                j.displayName || (j.displayName = "ListView");
            } catch {}
            try {
                _.displayName || (_.displayName = "ListViewContainer");
            } catch {}
        },
    },
]);
//# sourceMappingURL=packages_list-view_src_hooks_use-next-header-tag_ts-packages_list-view_src_ListItem_ListItem_-055669-2c6af850c928.js.map
