"use strict";
(globalThis.webpackChunk_github_ui_github_ui =
    globalThis.webpackChunk_github_ui_github_ui || []).push([
    [
        "packages_nested-list-view_src_NestedListItem_LeadingContent_tsx-packages_nested-list-view_src-1f776c",
    ],
    {
        305: (e, t, i) => {
            i.d(t, {
                Dy: () => a,
                O1: () => n,
                QL: () => d,
                eX: () => l,
                n1: () => s,
                tD: () => r,
            });
            let s = ["h1", "h2", "h3", "h4", "h5", "h6"],
                a = [
                    "nested-list-view",
                    "nested-list-view-metadata",
                    "nested-listitem",
                ],
                r = "h2",
                n = {
                    "nested-list-view": r,
                    "nested-list-view-metadata": "h3",
                    "nested-listitem": "h3",
                },
                l = !1,
                d = "List view";
        },
        921: (e, t, i) => {
            i.d(t, { Q: () => l });
            var s = i(74848),
                a = i(29731),
                r = i(34164);
            let n = { container: "LeadingContent-module__container--NJeKw" };
            function l({ children: e, className: t }) {
                return (0, s.jsx)("div", {
                    className: (0, r.$)(n.container, t),
                    ...(0, a.G)("nested-list-view-item-leading-content"),
                    children: e,
                });
            }
            try {
                l.displayName ||
                    (l.displayName = "NestedListItemLeadingContent");
            } catch {}
        },
        1075: (e, t, i) => {
            i.d(t, { A: () => s });
            let s = {
                responsiveContainer:
                    "NestedListView-module__responsiveContainer--Z7mCj",
                container: "NestedListView-module__container--AjxDm",
                collapsible: "NestedListView-module__collapsible--fUdI9",
            };
        },
        7151: (e, t, i) => {
            i.d(t, { G: () => l, a: () => n });
            var s = i(55966),
                a = i(96540);
            let r = (0, a.createContext)(!1),
                n = r.Provider;
            function l(e) {
                let t = (0, a.useContext)(r);
                (0, a.useEffect)(() => {
                    let i = e.current;
                    if (i && t) {
                        let e = [],
                            t = i.getAttribute("aria-hidden");
                        for (let t of (i.setAttribute("aria-hidden", "true"),
                        (0, s.K1)(i)))
                            (e.push([t, t.tabIndex]), (t.tabIndex = -1));
                        return () => {
                            for (let [s, a] of (t
                                ? i.setAttribute("aria-hidden", t)
                                : i.removeAttribute("aria-hidden"),
                            e))
                                s.tabIndex = a;
                        };
                    }
                }, [e, t]);
            }
        },
        15106: (e, t, i) => {
            i.d(t, { v: () => x });
            var s = i(74848),
                a = i(87670),
                r = i(29731),
                n = i(81960),
                l = i(40480),
                d = i(34164),
                c = i(96540),
                o = i(94273),
                u = i(62102),
                m = i(28755),
                h = i(19983),
                N = i(94838),
                v = i(1075);
            let y = {
                    onDrop: () => {},
                    renderOverlay: () => (0, s.jsx)(s.Fragment, {}),
                    items: [],
                },
                p = {
                    start: [a.vL.Space],
                    cancel: [a.vL.Esc],
                    end: [a.vL.Space],
                },
                x = ({
                    title: e,
                    titleHeaderTag: t,
                    children: i,
                    totalCount: a,
                    selectedCount: r = 0,
                    singularUnits: n,
                    pluralUnits: l,
                    isSelectable: d,
                    isCollapsible: N = !1,
                    isReadOnly: v = !1,
                    ...y
                }) => {
                    let p = (0, c.useMemo)(
                        () => c.Children.toArray(i).length,
                        [i]
                    );
                    return (0, s.jsx)(u.N, {
                        isCollapsible: N,
                        isReadOnly: v,
                        children: (0, s.jsx)(h.y, {
                            title: e,
                            titleHeaderTag: t,
                            children: (0, s.jsx)(m.W, {
                                countOnPage: p,
                                selectedCount: r,
                                totalCount: a,
                                singularUnits: n,
                                pluralUnits: l,
                                isSelectable: d && !v,
                                children: (0, s.jsx)(o.w, {
                                    children: (0, s.jsx)(g, {
                                        ...y,
                                        children: i,
                                    }),
                                }),
                            }),
                        }),
                    });
                },
                g = ({
                    header: e,
                    children: t,
                    ariaLabelledBy: i,
                    className: c,
                    dragAndDropProps: o = y,
                    ...m
                }) => {
                    let {
                            idPrefix: x,
                            isExpanded: g,
                            isCollapsible: C,
                            isReadOnly: f,
                        } = (0, u.J)(),
                        { title: j, titleHeaderTag: w } = (0, h.M)(),
                        L = i ?? `${x}-nested-list-view-container-title`;
                    return (0, s.jsxs)("div", {
                        ...(0, r.G)(`${x}-nested-list-view-container`),
                        className: (0, d.$)(
                            v.A.container,
                            v.A.responsiveContainer,
                            C && f && v.A.collapsible,
                            c
                        ),
                        children: [
                            !i &&
                                (0, s.jsx)(n.A, {
                                    className: "sr-only",
                                    as: w,
                                    id: L,
                                    ...(0, r.G)("list-view-title"),
                                    children: j,
                                }),
                            e,
                            g &&
                                (0, s.jsx)(N.F, {
                                    children: (0, s.jsx)(a.BS, {
                                        as: "div",
                                        keyboardCodes: p,
                                        ...o,
                                        children: (0, s.jsx)(l.G, {
                                            "aria-labelledby": L,
                                            ...(0, r.G)("list-view-items"),
                                            ...m,
                                            children: t,
                                        }),
                                    }),
                                }),
                        ],
                    });
                };
            try {
                x.displayName || (x.displayName = "NestedListView");
            } catch {}
            try {
                g.displayName || (g.displayName = "NestedListViewInternal");
            } catch {}
        },
        16474: (e, t, i) => {
            i.d(t, { m: () => l, q: () => d });
            var s = i(74848),
                a = i(73189),
                r = i(96540);
            let n = (0, r.createContext)({
                    controlsDialogOpen: !1,
                    setControlsDialogOpen: a.l,
                }),
                l = ({ children: e }) => {
                    let [t, i] = (0, r.useState)(!1),
                        a = (0, r.useMemo)(
                            () => ({
                                controlsDialogOpen: t,
                                setControlsDialogOpen: i,
                            }),
                            [t]
                        );
                    return (0, s.jsx)(n.Provider, { value: a, children: e });
                },
                d = () => (0, r.useContext)(n);
            try {
                n.displayName ||
                    (n.displayName = "NestedListItemControlsDialogContext");
            } catch {}
            try {
                l.displayName ||
                    (l.displayName = "NestedListItemControlsDialogProvider");
            } catch {}
        },
        19983: (e, t, i) => {
            i.d(t, { M: () => d, y: () => l });
            var s = i(74848),
                a = i(96540),
                r = i(305);
            let n = (0, a.createContext)(void 0),
                l = ({ children: e, title: t, titleHeaderTag: i = r.tD }) => {
                    let [l, d] = (0, a.useState)(!1),
                        c = (0, a.useMemo)(
                            () => ({
                                title: t.trim() || r.QL,
                                titleHeaderTag: i,
                                hasMetadataTitle: l,
                                setHasMetadataTitle: d,
                            }),
                            [l, t, i]
                        );
                    return (0, s.jsx)(n.Provider, { value: c, children: e });
                };
            l.displayName = "NestedListViewTitleProvider";
            let d = () => {
                let e = (0, a.useContext)(n);
                if (!e)
                    throw Error(
                        "useNestedListViewTitle must be used with TitleProvider."
                    );
                return e;
            };
            try {
                n.displayName || (n.displayName = "TitleContext");
            } catch {}
        },
        28755: (e, t, i) => {
            i.d(t, { W: () => u, c: () => m });
            var s = i(74848),
                a = i(73189),
                r = i(80293),
                n = i(96540),
                l = i(305);
            let d = "list item",
                c = "list items",
                o = (0, n.createContext)({
                    selectedCount: 0,
                    setSelectedCount: a.l,
                    countOnPage: 0,
                    isSelectAllChecked: !1,
                    anyItemsSelected: !1,
                    singularUnits: d,
                    pluralUnits: c,
                    isSelectable: l.eX,
                }),
                u = (
                    {
                        children: e,
                        countOnPage: t = 0,
                        singularUnits: i = d,
                        pluralUnits: a = c,
                        totalCount: u,
                        selectedCount: m = 0,
                        isSelectable: h = l.eX,
                    } = {
                        singularUnits: d,
                        pluralUnits: c,
                        selectedCount: 0,
                        countOnPage: 0,
                        isSelectable: l.eX,
                    }
                ) => {
                    let [N, v] = (0, r.N)(m),
                        y = N > 0 && N >= t,
                        p = N > 0,
                        x = (0, n.useMemo)(
                            () => ({
                                totalCount: u,
                                countOnPage: t,
                                selectedCount: N,
                                setSelectedCount: v,
                                isSelectAllChecked: y,
                                anyItemsSelected: p,
                                singularUnits: i,
                                pluralUnits: a,
                                isSelectable: h,
                            }),
                            [u, t, N, v, y, p, i, a, h]
                        );
                    return (0, s.jsx)(o.Provider, { value: x, children: e });
                };
            u.displayName = "NestedListViewSelectionProvider";
            let m = () => (0, n.useContext)(o);
            try {
                o.displayName || (o.displayName = "SelectionContext");
            } catch {}
        },
        34082: (e, t, i) => {
            i.d(t, { $: () => l, s: () => n });
            var s = i(74848),
                a = i(96540);
            let r = (0, a.createContext)(void 0),
                n = ({ children: e }) => {
                    let [t, i] = (0, a.useState)(""),
                        [n, l] = (0, a.useState)(null),
                        d = (0, a.useMemo)(
                            () => ({
                                title: t,
                                setTitle: (e) => i(e.trim()),
                                titleAction: n,
                                setTitleAction: l,
                            }),
                            [t, n]
                        );
                    return (0, s.jsx)(r.Provider, { value: d, children: e });
                },
                l = () => {
                    let e = (0, a.useContext)(r);
                    if (!e)
                        throw Error(
                            "useNestedListItemTitle must be used with NestedListItemTitleProvider."
                        );
                    return e;
                };
            try {
                r.displayName || (r.displayName = "NestedListItemTitleContext");
            } catch {}
            try {
                n.displayName ||
                    (n.displayName = "NestedListItemTitleProvider");
            } catch {}
        },
        45379: (e, t, i) => {
            i.d(t, { V: () => n, b: () => l });
            var s = i(74848),
                a = i(96540);
            let r = (0, a.createContext)(void 0),
                n = ({ children: e }) => {
                    let [t, i] = (0, a.useState)(!1),
                        n = (0, a.useMemo)(
                            () => ({ hasNewActivity: t, setHasNewActivity: i }),
                            [t]
                        );
                    return (0, s.jsx)(r.Provider, { value: n, children: e });
                },
                l = () => {
                    let e = (0, a.useContext)(r);
                    if (!e)
                        throw Error(
                            "useNestedListItemNewActivity must be used with NewActivityProvider."
                        );
                    return e;
                };
            try {
                r.displayName ||
                    (r.displayName = "NestedListItemNewActivityContext");
            } catch {}
            try {
                n.displayName ||
                    (n.displayName = "NestedListItemNewActivityProvider");
            } catch {}
        },
        55482: (e, t, i) => {
            i.d(t, { i: () => l, s: () => n });
            var s = i(74848),
                a = i(96540);
            let r = (0, a.createContext)(void 0),
                n = ({ children: e }) => {
                    let [t, i] = (0, a.useState)(""),
                        n = (0, a.useMemo)(
                            () => ({ status: t, setStatus: i }),
                            [t]
                        );
                    return (0, s.jsx)(r.Provider, { value: n, children: e });
                },
                l = () => {
                    let e = (0, a.useContext)(r);
                    if (!e)
                        throw Error(
                            "useNestedListItemStatus must be used with NestedListItemStatusProvider."
                        );
                    return e;
                };
            try {
                r.displayName ||
                    (r.displayName = "NestedListItemStatusContext");
            } catch {}
            try {
                n.displayName ||
                    (n.displayName = "NestedListItemStatusProvider");
            } catch {}
        },
        58321: (e, t, i) => {
            i.d(t, { o: () => u });
            var s = i(74848),
                a = i(91230),
                r = i(29731),
                n = i(34164),
                l = i(96540),
                d = i(94273);
            let c = {
                container: "ActionBar-module__container--z3OVC",
                withoutActions: "ActionBar-module__withoutActions--RFXnQ",
            };
            var o = i(7151);
            function u({
                anchorIcon: e,
                label: t = "list item action bar",
                className: i,
                ...u
            }) {
                let m = (0, l.useRef)(null),
                    {
                        setAnyItemsWithActionBar: h,
                        setHasResizableActionsWithActionBar: N,
                    } = (0, d.G)();
                return (
                    (0, l.useEffect)(() => h(!0), [h]),
                    (0, l.useEffect)(() => {
                        u.actions && N(!0);
                    }, [u.actions, N]),
                    (0, o.G)(m),
                    (0, s.jsx)("div", {
                        ref: m,
                        "aria-hidden": "true",
                        className: (0, n.$)(
                            c.container,
                            !u.actions && c.withoutActions,
                            i
                        ),
                        ...(0, r.G)(
                            "nested-list-view-item-action-bar-container"
                        ),
                        children: (0, s.jsx)(a.E7, {
                            ...u,
                            label: t,
                            variant: "menu",
                            overflowMenuToggleProps: e ? { icon: e } : void 0,
                        }),
                    })
                );
            }
            try {
                u.displayName || (u.displayName = "NestedListItemActionBar");
            } catch {}
        },
        62102: (e, t, i) => {
            i.d(t, { J: () => l, N: () => n });
            var s = i(74848),
                a = i(96540);
            let r = (0, a.createContext)(void 0),
                n = ({
                    children: e,
                    isCollapsible: t = !1,
                    isReadOnly: i = !1,
                }) => {
                    let n = (0, a.useId)(),
                        [l, d] = (0, a.useState)(!0),
                        c = (0, a.useMemo)(
                            () => ({
                                idPrefix: n,
                                isExpanded: l,
                                setIsExpanded: d,
                                isCollapsible: t,
                                isReadOnly: i,
                            }),
                            [n, l, t, i]
                        );
                    return (0, s.jsx)(r.Provider, { value: c, children: e });
                };
            n.displayName = "NestedListViewPropertiesProvider";
            let l = () => {
                let e = (0, a.useContext)(r);
                if (!e)
                    throw Error(
                        "useNestedListViewProperties must be used with PropertiesProvider."
                    );
                return e;
            };
            try {
                r.displayName || (r.displayName = "PropertiesContext");
            } catch {}
        },
        66457: (e, t, i) => {
            i.d(t, { r: () => K });
            var s = i(74848),
                a = i(87670),
                r = i(18651),
                n = i(73189),
                l = i(83494),
                d = i(40480),
                c = i(34164),
                o = i(96540),
                u = i(94273),
                m = i(62102),
                h = i(28755),
                N = i(94838),
                v = i(58321);
            let y = (0, o.createContext)({
                    actionsOpen: !1,
                    setActionsOpen: n.l,
                }),
                p = ({ children: e }) => {
                    let [t, i] = (0, o.useState)(!1),
                        a = (0, o.useMemo)(
                            () => ({ actionsOpen: t, setActionsOpen: i }),
                            [t]
                        );
                    return (0, s.jsx)(y.Provider, { value: a, children: e });
                };
            try {
                y.displayName ||
                    (y.displayName = "NestedListItemActionsContext");
            } catch {}
            try {
                p.displayName ||
                    (p.displayName = "NestedListItemActionsProvider");
            } catch {}
            var x = i(74142),
                g = i(16474);
            let C = (0, o.createContext)(void 0),
                f = ({ children: e }) => {
                    let [t, i] = (0, o.useState)(""),
                        a = (0, o.useMemo)(
                            () => ({ description: t, setDescription: i }),
                            [t]
                        );
                    return (0, s.jsx)(C.Provider, { value: a, children: e });
                };
            try {
                C.displayName ||
                    (C.displayName = "NestedListItemDescriptionContext");
            } catch {}
            try {
                f.displayName ||
                    (f.displayName = "NestedListItemDescriptionProvider");
            } catch {}
            var j = i(82961),
                w = i(45379),
                L = i(4559),
                b = i(34082);
            let _ = (0, o.createContext)({ isSelected: !1, onSelect: n.l }),
                I = ({
                    children: e,
                    value: { isSelected: t, onSelect: i },
                }) => {
                    let { title: a } = (0, b.$)(),
                        r = (0, o.useMemo)(
                            () => ({
                                isSelected: t,
                                onSelect: (e) => {
                                    ((0, L.i)(
                                        e
                                            ? `Selected. ${a}.`
                                            : `Unselected. ${a}.`
                                    ),
                                        i(e));
                                },
                            }),
                            [t, i, a]
                        );
                    return (0, s.jsx)(_.Provider, { value: r, children: e });
                },
                A = () => (0, o.useContext)(_);
            try {
                _.displayName ||
                    (_.displayName = "NestedListItemSelectionContext");
            } catch {}
            try {
                I.displayName ||
                    (I.displayName = "NestedListItemSelectionProvider");
            } catch {}
            var S = i(55482),
                E = i(15220),
                P = i(1075);
            let D = { Dialog: "ControlsDialog-module__Dialog--HWRIK" };
            var k = i(7151),
                G = i(29731);
            let B = {
                metadataContainer:
                    "MetadataContainer-module__metadataContainer--_O_j_",
            };
            function $({ children: e, className: t }) {
                let i = (0, o.useRef)(null),
                    { controlsDialogOpen: a } = (0, g.q)();
                return (
                    (0, k.G)(i),
                    (0, s.jsx)("div", {
                        ref: i,
                        "aria-hidden": !a,
                        ...(0, G.G)("nested-list-view-item-metadata"),
                        className: (0, c.$)(B.metadataContainer, t),
                        children: e,
                    })
                );
            }
            try {
                $.displayName ||
                    ($.displayName = "NestedListItemMetadataContainer");
            } catch {}
            let T = {
                    item: "NestedListItem-module__item--Tl61a",
                    selected: "NestedListItem-module__selected--dE3Sl",
                    itemGrid: "NestedListItem-module__itemGrid--CnhyY",
                    hasResizableActionsWithActionBar:
                        "NestedListItem-module__hasResizableActionsWithActionBar--qqDY9",
                    dragHandle: "NestedListItem-module__dragHandle--Esd2j",
                },
                M = ({
                    onClose: e,
                    title: t,
                    metadata: i,
                    secondaryActions: a,
                    children: r,
                }) =>
                    (0, s.jsx)(E.l, {
                        title: "Manage item",
                        onClose: e,
                        footerButtons: [{ content: "Ok", onClick: e }],
                        className: D.Dialog,
                        children: (0, s.jsx)(k.a, {
                            value: !1,
                            children: (0, s.jsx)("div", {
                                className: P.A.responsiveContainer,
                                children: (0, s.jsxs)("div", {
                                    className: T.itemGrid,
                                    children: [
                                        t,
                                        r,
                                        (0, s.jsx)($, { children: i }),
                                        a,
                                    ],
                                }),
                            }),
                        }),
                    });
            try {
                M.displayName || (M.displayName = "ControlsDialog");
            } catch {}
            let V = { hint: "ControlsDialogHint-module__hint--B9wWI" };
            function O() {
                return (0, s.jsxs)("div", {
                    className: V.hint,
                    children: [
                        (0, s.jsx)("span", { children: "Manage this item" }),
                        " ",
                        (0, s.jsx)(l.hh, {
                            commandId: "list-views:open-manage-item-dialog",
                            format: "condensed",
                        }),
                    ],
                });
            }
            try {
                O.displayName || (O.displayName = "ControlsDialogHint");
            } catch {}
            var R = i(46720);
            let U = {
                    container: "Selection-module__container--GeDCA",
                    checkbox: "Selection-module__checkbox--KyrMU",
                },
                W = () => {
                    let { isSelectable: e } = (0, h.c)(),
                        { isSelected: t, onSelect: i } = A(),
                        { title: a } = (0, b.$)();
                    return e
                        ? (0, s.jsx)("div", {
                              className: U.container,
                              ...(0, G.G)("list-view-item-selection"),
                              children: (0, s.jsx)(R.A, {
                                  checked: t,
                                  onChange: () => i(!t),
                                  "aria-label": `Select: ${a}`,
                                  className: U.checkbox,
                                  ...(0, G.G)("list-view-item-selection-input"),
                              }),
                          })
                        : null;
                };
            try {
                W.displayName || (W.displayName = "NestedListItemSelection");
            } catch {}
            let H = ({
                    children: e,
                    isActive: t = !1,
                    title: i,
                    metadata: n,
                    secondaryActions: y,
                    subItemsCount: p,
                    subItems: f,
                    loadSubItems: L,
                    defaultExpanded: _ = !1,
                    className: I,
                    metadataContainerClassName: E,
                    dragAndDropProps: P,
                    ...D
                }) => {
                    let { idPrefix: G, isReadOnly: B } = (0, m.J)(),
                        { isSelectable: V } = (0, h.c)(),
                        {
                            anyItemsWithActionBar: R,
                            hasResizableActionsWithActionBar: U,
                        } = (0, u.G)(),
                        H = (0, o.useId)(),
                        { isSelected: K, onSelect: X } = A(),
                        { status: q } = (0, S.i)(),
                        { title: z, titleAction: F } = (0, b.$)(),
                        { description: Y } = (() => {
                            let e = (0, o.useContext)(C);
                            if (!e)
                                throw Error(
                                    "useNestedListItemDescription must be used with NestedListItemDescriptionProvider."
                                );
                            return e;
                        })(),
                        { leadingBadge: J } = (0, j.$)(),
                        Q = (0, x.s)(),
                        { hasNewActivity: Z } = (0, w.b)(),
                        ee = (0, o.useRef)(null),
                        [et, ei] = (0, o.useState)("initial"),
                        [es, ea] = (0, o.useState)(_),
                        { isInDragMode: er } = (0, a.gY)(),
                        { controlsDialogOpen: en, setControlsDialogOpen: el } =
                            (0, g.q)(),
                        ed = (0, o.useRef)(null),
                        ec = p && p > 0;
                    (0, o.useEffect)(() => {
                        ee.current &&
                            t &&
                            document.activeElement?.tagName === "BODY" &&
                            ee.current.focus();
                    });
                    let eo = (0, o.useCallback)(
                            (e) => {
                                if (e.nativeEvent instanceof KeyboardEvent)
                                    switch (e.key) {
                                        case "Enter":
                                            ee?.current ===
                                                document.activeElement &&
                                                F &&
                                                F(e);
                                            break;
                                        case " ":
                                            if (
                                                ee?.current !==
                                                document.activeElement
                                            )
                                                break;
                                            if ((e.preventDefault(), !B)) {
                                                if (
                                                    ed.current &&
                                                    !e.nativeEvent.ctrlKey &&
                                                    !er
                                                ) {
                                                    ((ev.current =
                                                        document.activeElement),
                                                        ed.current?.focus(),
                                                        ed.current?.click(),
                                                        e.preventDefault());
                                                    break;
                                                }
                                                if (V) {
                                                    X(!K);
                                                    break;
                                                }
                                            }
                                            if (F) {
                                                F(e);
                                                break;
                                            }
                                            (ec || f) && ea(!es);
                                            break;
                                        case "Escape":
                                            ee?.current?.focus();
                                    }
                            },
                            [F, B, ec, f, er, V, X, K, es]
                        ),
                        eu = (0, o.useCallback)(() => {
                            let e = K ? "Selected" : "",
                                t = Z ? "New activity" : "",
                                i = `Press ${(0, r.U0)() ? "Command" : "Control"}, Shift, U for more actions`,
                                s = "";
                            Q && (s = Q.completion);
                            let a = [e, J, z, q]
                                .filter((e) => e.trim())
                                .join(": ");
                            try {
                                a = a.endsWith("...")
                                    ? a
                                    : a.replace(/\.+$/, "");
                            } catch {
                                for (; a.endsWith("."); )
                                    a = a.substring(0, a.length - 1);
                            }
                            let n = [a, Y, t, s, i]
                                .filter((e) => e.trim())
                                .join(". ");
                            return n.endsWith(".") ? n : `${n}.`;
                        }, [Z, K, Q, Y, J, q, z]),
                        [em, eh] = (0, o.useTransition)(),
                        eN = (0, o.useCallback)(() => {
                            em ||
                                (ei("loading"),
                                eh(() => {
                                    L?.();
                                }));
                        }, [L, em, ei]);
                    (0, o.useEffect)(() => {
                        em ? ei("loading") : ei("done");
                    }, [em]);
                    let ev = (0, o.useRef)(null);
                    return (
                        (0, o.useEffect)(() => {
                            !er &&
                                ev.current &&
                                (ev.current.focus(), (ev.current = null));
                        }, [er]),
                        (0, s.jsx)(N.F, {
                            onError: () => {
                                ei("error");
                            },
                            onDismiss: () => {
                                ei("initial");
                            },
                            children: (0, s.jsx)(l.tL, {
                                commands: {
                                    "list-views:open-manage-item-dialog": () =>
                                        el(!0),
                                },
                                children: (0, s.jsxs)(d.G.Item, {
                                    onSelect: eo,
                                    defaultExpanded: _,
                                    expanded: es && !er,
                                    onExpandedChange: (e) => {
                                        (ea(e), e && ec && !f && eN());
                                    },
                                    ref: ee,
                                    id: `${G}-list-view-node-${H}`,
                                    "aria-label": eu(),
                                    ...D,
                                    children: [
                                        P?.showTrigger &&
                                            !B &&
                                            (0, s.jsx)(d.G.LeadingAction, {
                                                children: (0, s.jsx)(
                                                    a.BS.DragTrigger,
                                                    {
                                                        className: (0, c.$)(
                                                            T.dragHandle
                                                        ),
                                                        ref: ed,
                                                    }
                                                ),
                                            }),
                                        (0, s.jsx)("div", {
                                            className: (0, c.$)(
                                                T.item,
                                                T.itemGrid,
                                                K && T.selected,
                                                R &&
                                                    U &&
                                                    T.hasResizableActionsWithActionBar,
                                                I
                                            ),
                                            tabIndex: -1,
                                            children: (0, s.jsxs)(k.a, {
                                                value: !0,
                                                children: [
                                                    i,
                                                    (0, s.jsx)(W, {}),
                                                    e,
                                                    Array.isArray(n) &&
                                                    n.length > 0
                                                        ? (0, s.jsx)($, {
                                                              className: E,
                                                              children: n.map(
                                                                  (e, t) =>
                                                                      (0,
                                                                      s.jsx)(
                                                                          o.Fragment,
                                                                          {
                                                                              children:
                                                                                  e,
                                                                          },
                                                                          t
                                                                      )
                                                              ),
                                                          })
                                                        : !!(
                                                              n &&
                                                              !Array.isArray(n)
                                                          ) &&
                                                          (0, s.jsx)($, {
                                                              className: E,
                                                              children: n,
                                                          }),
                                                    y ??
                                                        (R &&
                                                            (0, s.jsx)(
                                                                v.o,
                                                                {}
                                                            )),
                                                ],
                                            }),
                                        }),
                                        (0, s.jsx)(O, {}),
                                        en &&
                                            (0, s.jsx)(M, {
                                                onClose: () => el(!1),
                                                title: i,
                                                metadata: n,
                                                secondaryActions: y,
                                                children: e,
                                            }),
                                        (ec || f) &&
                                            (0, s.jsx)(d.G.SubTree, {
                                                state: et,
                                                count: p,
                                                children: f,
                                            }),
                                    ],
                                }),
                            }),
                        })
                    );
                },
                K = ({
                    children: e,
                    isSelected: t = !1,
                    onSelect: i = n.l,
                    ...r
                }) => {
                    let { setSelectedCount: l } = (0, h.c)(),
                        d = (0, o.useRef)(t);
                    ((d.current = t),
                        (0, o.useEffect)(() => {
                            l((e) => (t ? e + 1 : Math.max(0, e - 1)));
                        }, [t, l]),
                        (0, o.useEffect)(
                            () => () => {
                                d.current && l((e) => Math.max(0, e - 1));
                            },
                            [l]
                        ));
                    let c = (0, o.useMemo)(
                        () => ({ isSelected: t, onSelect: i }),
                        [t, i]
                    );
                    return (0, s.jsx)(g.m, {
                        children: (0, s.jsx)(x.g, {
                            children: (0, s.jsx)(p, {
                                children: (0, s.jsx)(j.X, {
                                    children: (0, s.jsx)(b.s, {
                                        children: (0, s.jsx)(I, {
                                            value: c,
                                            children: (0, s.jsx)(w.V, {
                                                children: (0, s.jsx)(f, {
                                                    children: (0, s.jsx)(S.s, {
                                                        children: (0, s.jsx)(
                                                            a.BS.Item,
                                                            {
                                                                id:
                                                                    r
                                                                        .dragAndDropProps
                                                                        ?.itemId ||
                                                                    "",
                                                                index: 0,
                                                                title:
                                                                    r
                                                                        .dragAndDropProps
                                                                        ?.itemId ||
                                                                    "",
                                                                as: "div",
                                                                hideTrigger: !0,
                                                                isDragOverlay:
                                                                    r
                                                                        .dragAndDropProps
                                                                        ?.isOverlay ??
                                                                    !1,
                                                                children: (0,
                                                                s.jsx)(H, {
                                                                    ...r,
                                                                    children: e,
                                                                }),
                                                            }
                                                        ),
                                                    }),
                                                }),
                                            }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    });
                };
            try {
                H.displayName || (H.displayName = "NestedListItemInternal");
            } catch {}
            try {
                K.displayName || (K.displayName = "NestedListItem");
            } catch {}
        },
        74142: (e, t, i) => {
            i.d(t, { g: () => n, s: () => l });
            var s = i(74848),
                a = i(96540);
            let r = (0, a.createContext)(void 0),
                n = ({ children: e }) => {
                    let [t, i] = (0, a.useState)(""),
                        n = (0, a.useMemo)(
                            () => ({ completion: t, setCompletion: i }),
                            [t]
                        );
                    return (0, s.jsx)(r.Provider, { value: n, children: e });
                },
                l = () => (0, a.useContext)(r);
            try {
                r.displayName ||
                    (r.displayName = "NestedListItemCompletionContext");
            } catch {}
            try {
                n.displayName ||
                    (n.displayName = "NestedListItemCompletionProvider");
            } catch {}
        },
        82961: (e, t, i) => {
            i.d(t, { $: () => l, X: () => n });
            var s = i(74848),
                a = i(96540);
            let r = (0, a.createContext)(void 0),
                n = ({ children: e }) => {
                    let [t, i] = (0, a.useState)(""),
                        n = (0, a.useMemo)(
                            () => ({ leadingBadge: t, setLeadingBadge: i }),
                            [t]
                        );
                    return (0, s.jsx)(r.Provider, { value: n, children: e });
                },
                l = () => {
                    let e = (0, a.useContext)(r);
                    if (!e)
                        throw Error(
                            "useNestedListItemLeadingBadge must be used with NestedListItemLeadingBadgeProvider."
                        );
                    return e;
                };
            try {
                r.displayName ||
                    (r.displayName = "NestedListItemLeadingBadgeContext");
            } catch {}
            try {
                n.displayName ||
                    (n.displayName = "NestedListItemLeadingBadgeProvider");
            } catch {}
        },
        85391: (e, t, i) => {
            i.d(t, { D: () => h });
            var s = i(74848),
                a = i(29731),
                r = i(10436),
                n = i(34164),
                l = i(96540),
                d = i(45379),
                c = i(55482);
            let o = {
                    container: "LeadingVisual-module__container--lXqCp",
                    hasNewActivity:
                        "LeadingVisual-module__hasNewActivity--cLEiZ",
                    visualContainer:
                        "LeadingVisual-module__visualContainer--xKxNe",
                },
                u = { container: "UnreadIndicator-module__container--E_dd7" },
                m = () =>
                    (0, s.jsx)("div", {
                        className: u.container,
                        children: (0, s.jsx)("span", {
                            className: "sr-only",
                            ...(0, a.G)("list-view-item-unread-indicator"),
                            children: "New activity.",
                        }),
                    });
            try {
                m.displayName ||
                    (m.displayName = "NestedListItemUnreadIndicator");
            } catch {}
            function h({
                icon: e,
                color: t,
                description: i,
                newActivity: u = !1,
                children: h,
                className: N,
                ...v
            }) {
                let { setStatus: y } = (0, c.i)(),
                    { setHasNewActivity: p } = (0, d.b)(),
                    x = i?.trim(),
                    g = x ? { "aria-label": void 0 } : {};
                return (
                    (0, l.useEffect)(() => {
                        p(u);
                    }, [u, p]),
                    (0, l.useEffect)(() => {
                        x && y(x);
                    }, [y, x]),
                    (0, s.jsxs)("div", {
                        className: (0, n.$)(
                            o.container,
                            u && o.hasNewActivity,
                            N
                        ),
                        ...v,
                        children: [
                            (0, s.jsxs)("div", {
                                className: o.visualContainer,
                                ...(0, a.G)("nested-list-view-leading-visual"),
                                children: [
                                    e &&
                                        (0, s.jsx)(r.m4, {
                                            ...g,
                                            icon: e,
                                            color: t,
                                        }),
                                    h,
                                    x &&
                                        (0, s.jsx)("span", {
                                            className: "sr-only",
                                            ...(0, a.G)(
                                                "leading-visual-text-description"
                                            ),
                                            children: x,
                                        }),
                                ],
                            }),
                            u && (0, s.jsx)(m, {}),
                        ],
                    })
                );
            }
            try {
                h.displayName ||
                    (h.displayName = "NestedListItemLeadingVisual");
            } catch {}
        },
        94273: (e, t, i) => {
            i.d(t, { G: () => d, w: () => l });
            var s = i(74848),
                a = i(73189),
                r = i(96540);
            let n = (0, r.createContext)({
                    anyItemsWithActionBar: !1,
                    setAnyItemsWithActionBar: a.l,
                    hasResizableActionsWithActionBar: !1,
                    setHasResizableActionsWithActionBar: a.l,
                }),
                l = ({ children: e }) => {
                    let [t, i] = (0, r.useState)(!1),
                        [a, l] = (0, r.useState)(!1),
                        d = (0, r.useMemo)(
                            () => ({
                                anyItemsWithActionBar: t,
                                setAnyItemsWithActionBar: i,
                                hasResizableActionsWithActionBar: a,
                                setHasResizableActionsWithActionBar: l,
                            }),
                            [t, a]
                        );
                    return (0, s.jsx)(n.Provider, { value: d, children: e });
                };
            l.displayName = "NestedListViewItemsProvider";
            let d = () => (0, r.useContext)(n);
            try {
                n.displayName || (n.displayName = "ItemsContext");
            } catch {}
        },
        94838: (e, t, i) => {
            i.d(t, { F: () => d });
            var s = i(74848),
                a = i(75202),
                r = i(38621),
                n = i(26382),
                l = i(96540);
            let d = ({ children: e, onError: t }) => {
                let [i, d] = (0, l.useState)(
                    "An error occured while loading items"
                );
                return (0, s.jsx)(a.t, {
                    fallback: (0, s.jsxs)(n.E, {
                        children: [
                            (0, s.jsx)(n.E.Visual, {
                                children: (0, s.jsx)(r.AlertIcon, {}),
                            }),
                            (0, s.jsx)(n.E.Heading, { children: i }),
                            (0, s.jsx)(n.E.Description, {
                                children:
                                    "There was an issue loading Sub issues",
                            }),
                            (0, s.jsx)(n.E.SecondaryAction, {
                                href: "https://www.githubstatus.com/",
                                children: "GitHub status",
                            }),
                        ],
                    }),
                    onError: (e) => {
                        (e instanceof Error && d(e.message), t?.());
                    },
                    children: e,
                });
            };
            try {
                d.displayName ||
                    (d.displayName = "NestedListViewErrorBoundary");
            } catch {}
        },
        97764: (e, t, i) => {
            i.d(t, { T: () => m });
            var s = i(74848),
                a = i(20263),
                r = i(29731),
                n = i(57352),
                l = i(34164),
                d = i(96540),
                c = i(16474),
                o = i(34082);
            let u = {
                container: "Title-module__container--iESYk",
                anchor: "Title-module__anchor--uebmc",
                truncate: "Title-module__truncate--BAKr7",
                trailingBadges: "Title-module__trailingBadges--rIk0t",
            };
            function m({
                additionalLinkProps: e = {},
                anchorRef: t,
                anchorClassName: i,
                children: m,
                containerClassName: h,
                href: N,
                leadingBadge: v,
                onClick: y,
                tooltip: p,
                trailingBadges: x,
                value: g,
            }) {
                let { setTitle: C, setTitleAction: f } = (0, o.$)(),
                    { controlsDialogOpen: j } = (0, c.q)(),
                    w = (0, d.useRef)(null),
                    L = t || w;
                return (
                    (0, d.useEffect)(() => {
                        C(
                            ("function" != typeof L &&
                                L?.current?.textContent) ||
                                g
                        );
                    }, [L, C, g]),
                    (0, d.useEffect)(() => {
                        (N || y) &&
                            "function" != typeof L &&
                            L?.current &&
                            f(() => (e) => {
                                N && (e.metaKey || e.ctrlKey)
                                    ? window.open(N, "_blank")
                                    : L?.current?.click();
                            });
                    }, [L, N, y, f]),
                    (0, s.jsxs)("div", {
                        ...(0, r.G)("nested-list-view-item-primary-container"),
                        className: (0, l.$)(u.container, h),
                        children: [
                            v,
                            (0, s.jsx)(n.A, {
                                ...(!j ? { role: "none" } : {}),
                                ref: L,
                                className: (0, l.$)(u.anchor, u.truncate, i),
                                href: N,
                                onClick: y,
                                ...e,
                                ...(0, r.G)("listitem-title-link"),
                                children: (0, s.jsx)(a.BC, {
                                    html: g,
                                    title: p,
                                }),
                            }),
                            x &&
                                (0, s.jsx)("span", {
                                    className: (0, l.$)(
                                        u.trailingBadges,
                                        u.truncate
                                    ),
                                    children: x,
                                }),
                            m,
                        ],
                    })
                );
            }
            try {
                m.displayName || (m.displayName = "NestedListItemTitle");
            } catch {}
        },
    },
]);
//# sourceMappingURL=packages_nested-list-view_src_NestedListItem_LeadingContent_tsx-packages_nested-list-view_src-1f776c-91b4cd6400fe.js.map
