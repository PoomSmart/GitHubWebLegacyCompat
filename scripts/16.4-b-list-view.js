"use strict";
(globalThis.webpackChunk_github_ui_github_ui =
    globalThis.webpackChunk_github_ui_github_ui || []).push([
    [
        "packages_list-view_src_ListItem_ListItem_tsx-packages_list-view_src_ListItem_Title_tsx-packag-29fce3",
    ],
    {
        2970: (e, t, i) => {
            i.d(t, { c: () => _ });
            var r = i(74848),
                a = i(73189),
                l = i(34164),
                n = i(96540),
                s = i(75986),
                o = i(18377),
                c = i(24347),
                d = i(35220),
                u = i(9214);
            let m = (0, n.createContext)({
                    actionsOpen: !1,
                    setActionsOpen: a.l,
                }),
                h = ({ children: e }) => {
                    let [t, i] = (0, n.useState)(!1),
                        a = (0, n.useMemo)(
                            () => ({ actionsOpen: t, setActionsOpen: i }),
                            [t]
                        );
                    return (0, r.jsx)(m.Provider, { value: a, children: e });
                };
            h.displayName = "ListItemActionsProvider";
            try {
                m.displayName || (m.displayName = "ActionsContext");
            } catch {}
            var y = i(77177);
            let f = {
                listItem: "ListItem-module__listItem--k4eMk",
                compact: "ListItem-module__compact--f4FSR",
                hasActionBar: "ListItem-module__hasActionBar--t14sR",
                selected: "ListItem-module__selected--WTEJT",
            };
            var p = i(29731);
            let v = { container: "MetadataContainer-module__container--nU0s9" };
            function x({ style: e, className: t, children: i }) {
                return (0, r.jsx)("div", {
                    className: (0, l.$)(v.container, t),
                    style: e,
                    ...(0, p.G)("list-view-item-metadata"),
                    children: i,
                });
            }
            try {
                x.displayName || (x.displayName = "ListItemMetadataContainer");
            } catch {}
            var N = i(49744),
                g = i(60257),
                C = i(27603),
                b = i(74501);
            let w = (0, n.forwardRef)(
                (
                    {
                        children: e,
                        isActive: t = !1,
                        title: i,
                        metadata: a,
                        secondaryActions: m,
                        style: h,
                        className: p,
                        metadataContainerStyle: v,
                        metadataContainerClassName: w,
                        as: _,
                        ...j
                    },
                    S
                ) => {
                    let { idPrefix: L } = (0, s.If)(),
                        { isSelectable: I } = (0, c.v)(),
                        { variant: A } = (0, d.e)(),
                        {
                            anyItemsWithActionBar: M,
                            hasResizableActionsWithActionBar: T,
                        } = (0, o.Z)(),
                        E = (0, n.useId)(),
                        { isSelected: B, onSelect: P } = (0, g.r)(),
                        { status: R } = (0, C.x)(),
                        {
                            title: k,
                            titleAction: H,
                            headingRef: V,
                        } = (0, b.J)(),
                        { description: D } = (0, y.L)(),
                        { hasNewActivity: O } = (0, N.I)(),
                        W = (0, n.useRef)(null);
                    ((0, n.useEffect)(() => {
                        "function" == typeof S
                            ? S(W.current)
                            : S && (S.current = W.current);
                    }, [S]),
                        (0, n.useEffect)(() => {
                            W.current &&
                                t &&
                                document.activeElement?.tagName === "BODY" &&
                                W.current.focus();
                        }));
                    let $ = (0, n.useCallback)(
                            (e) => {
                                switch (e.key) {
                                    case "Enter":
                                        if (H) {
                                            let t = document.activeElement,
                                                i = W.current === t,
                                                r =
                                                    V.current &&
                                                    (V.current === t ||
                                                        V.current.contains(t));
                                            (i || r) && H(e);
                                        }
                                        break;
                                    case " ":
                                        if (
                                            !I ||
                                            W?.current !==
                                                document.activeElement
                                        )
                                            break;
                                        (e.preventDefault(), P(!B));
                                        break;
                                    case "Escape":
                                        W?.current?.focus();
                                }
                            },
                            [H, I, P, B, V]
                        ),
                        z = (0, n.useCallback)(() => {
                            let e = B ? "Selected" : "",
                                t = O ? "New activity" : "",
                                i = !!m,
                                r =
                                    (Array.isArray(a) && a.length > 0) ||
                                    (a && !Array.isArray(a)),
                                l = "";
                            (r || i) &&
                                (l = "More information available below");
                            let n = [k, R].filter((e) => e.trim()).join(": ");
                            try {
                                n = n.endsWith("...")
                                    ? n
                                    : n.replace(/\.+$/, "");
                            } catch {
                                for (; n.endsWith("."); )
                                    n = n.substring(0, n.length - 1);
                            }
                            let s = [e, n, D, t, l]
                                .filter((e) => e.trim())
                                .join(". ");
                            return s.endsWith(".") ? s : `${s}.`;
                        }, [m, a, B, O, k, R, D]);
                    return (0, r.jsxs)(_ || "li", {
                        ref: W,
                        id: `${L}-list-view-node-${E}`,
                        className: (0, l.$)(
                            f.listItem,
                            B && f.selected,
                            "compact" === A && f.compact,
                            M && T && f.hasActionBar,
                            p
                        ),
                        tabIndex: -1,
                        "aria-label": z(),
                        style: h,
                        onKeyDown: $,
                        ...j,
                        children: [
                            i,
                            e,
                            Array.isArray(a) && a.length > 0
                                ? (0, r.jsx)(x, {
                                      style: v,
                                      className: w,
                                      children: a.map((e, t) =>
                                          (0, r.jsx)(
                                              n.Fragment,
                                              { children: e },
                                              t
                                          )
                                      ),
                                  })
                                : !!(a && !Array.isArray(a)) &&
                                  (0, r.jsx)(x, {
                                      style: v,
                                      className: w,
                                      children: a,
                                  }),
                            m ?? (M && (0, r.jsx)(u.L, {})),
                        ],
                    });
                }
            );
            w.displayName = "ListItemBase";
            let _ = (0, n.forwardRef)(
                (
                    {
                        children: e,
                        isSelected: t = !1,
                        onSelect: i = a.l,
                        ...l
                    },
                    s
                ) => {
                    let { setSelectedCount: o } = (0, c.v)(),
                        d = (0, n.useRef)(t);
                    ((d.current = t),
                        (0, n.useEffect)(() => {
                            o((e) => (t ? e + 1 : Math.max(0, e - 1)));
                        }, [t, o]),
                        (0, n.useEffect)(
                            () => () => {
                                d.current && o((e) => Math.max(0, e - 1));
                            },
                            [o]
                        ));
                    let u = (0, n.useMemo)(
                        () => ({ isSelected: t, onSelect: i }),
                        [t, i]
                    );
                    return (0, r.jsx)(h, {
                        children: (0, r.jsx)(b.y, {
                            children: (0, r.jsx)(g.W, {
                                value: u,
                                children: (0, r.jsx)(N.t, {
                                    children: (0, r.jsx)(y.O, {
                                        children: (0, r.jsx)(C.u, {
                                            children: (0, r.jsx)(w, {
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
            _.displayName = "ListItem";
        },
        9214: (e, t, i) => {
            i.d(t, { L: () => d });
            var r = i(74848),
                a = i(91230),
                l = i(29731),
                n = i(34164),
                s = i(96540),
                o = i(18377);
            let c = {
                    container: "ActionBar-module__container--8I2RB",
                    hasActions: "ActionBar-module__hasActions--HH0uB",
                },
                d = ({
                    anchorIcon: e,
                    style: t,
                    className: i,
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
                        (0, r.jsx)("div", {
                            className: (0, n.$)(
                                c.container,
                                u.actions && c.hasActions,
                                i
                            ),
                            style: t,
                            ...(0, l.G)("list-view-item-action-bar-container"),
                            children: (0, r.jsx)(a.E7, {
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
        18377: (e, t, i) => {
            i.d(t, { Z: () => o, w: () => s });
            var r = i(74848),
                a = i(73189),
                l = i(96540);
            let n = (0, l.createContext)({
                    anyItemsWithActionBar: !1,
                    setAnyItemsWithActionBar: a.l,
                    hasResizableActionsWithActionBar: !1,
                    setHasResizableActionsWithActionBar: a.l,
                }),
                s = ({ children: e }) => {
                    let [t, i] = (0, l.useState)(!1),
                        [a, s] = (0, l.useState)(!1),
                        o = (0, l.useMemo)(
                            () => ({
                                anyItemsWithActionBar: t,
                                setAnyItemsWithActionBar: i,
                                hasResizableActionsWithActionBar: a,
                                setHasResizableActionsWithActionBar: s,
                            }),
                            [t, a]
                        );
                    return (0, r.jsx)(n.Provider, { value: o, children: e });
                };
            s.displayName = "ListViewItemsProvider";
            let o = () => (0, l.useContext)(n);
            try {
                n.displayName || (n.displayName = "ItemsContext");
            } catch {}
        },
        20263: (e, t, i) => {
            i.d(t, { BC: () => o, JU: () => d, Pk: () => s });
            var r = i(74848),
                a = i(87448),
                l = i(99418),
                n = i(96540);
            let s = u(a.az),
                o = u(a.EY),
                c = (0, n.forwardRef)((e, t) =>
                    (0, r.jsx)("div", { ref: t, ...e })
                );
            c.displayName = "Div";
            let d = u(c);
            function u(e) {
                let t = (0, n.forwardRef)((t, i) => {
                    let { sanitizedHTML: a, props: n } = (function (e) {
                        let { html: t, domPurifyConfig: i, ...r } = e,
                            a = {
                                ...i,
                                RETURN_DOM: !1,
                                RETURN_DOM_FRAGMENT: !1,
                            };
                        return {
                            sanitizedHTML: l.default.sanitize(t, a),
                            props: r,
                        };
                    })(t);
                    return (0, r.jsx)(e, {
                        ref: i,
                        ...n,
                        dangerouslySetInnerHTML: { __html: a },
                    });
                });
                return (
                    (t.displayName = `UnsafeHTML${e.displayName || e.name}`),
                    t
                );
            }
            try {
                d.displayName || (d.displayName = "UnsafeHTMLDiv");
            } catch {}
        },
        24347: (e, t, i) => {
            i.d(t, { W: () => d, v: () => u });
            var r = i(74848),
                a = i(73189),
                l = i(96540),
                n = i(50205);
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
                        singularUnits: i = s,
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
                    let [y, f] = (0, l.useState)(u);
                    (0, l.useEffect)(() => f(u), [u]);
                    let p = y > 0 && y >= t,
                        v = y > 0,
                        x = (0, l.useMemo)(
                            () => ({
                                totalCount: d,
                                countOnPage: t,
                                selectedCount: y,
                                setSelectedCount: f,
                                isSelectAllChecked: p,
                                anyItemsSelected: v,
                                singularUnits: i,
                                pluralUnits: a,
                                isSelectable: m,
                                hasDragHandle: h,
                            }),
                            [d, t, y, f, p, v, i, a, m, h]
                        );
                    return (0, r.jsx)(c.Provider, { value: x, children: e });
                };
            d.displayName = "ListViewSelectionProvider";
            let u = () => (0, l.useContext)(c);
            try {
                c.displayName || (c.displayName = "SelectionContext");
            } catch {}
        },
        27603: (e, t, i) => {
            i.d(t, { u: () => n, x: () => s });
            var r = i(74848),
                a = i(96540);
            let l = (0, a.createContext)(void 0),
                n = ({ children: e }) => {
                    let [t, i] = (0, a.useState)(""),
                        n = (0, a.useMemo)(
                            () => ({ status: t, setStatus: i }),
                            [t]
                        );
                    return (0, r.jsx)(l.Provider, { value: n, children: e });
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
        35220: (e, t, i) => {
            i.d(t, { H: () => o, e: () => c });
            var r = i(74848),
                a = i(73189),
                l = i(96540),
                n = i(50205);
            let s = (0, l.createContext)(void 0),
                o = ({
                    children: e,
                    variant: t = n.tp,
                    setVariant: i = a.l,
                }) => {
                    let o = (0, l.useMemo)(
                        () => ({ variant: t, setVariant: i }),
                        [i, t]
                    );
                    return (0, r.jsx)(s.Provider, { value: o, children: e });
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
        49744: (e, t, i) => {
            i.d(t, { I: () => s, t: () => n });
            var r = i(74848),
                a = i(96540);
            let l = (0, a.createContext)(void 0),
                n = ({ children: e }) => {
                    let [t, i] = (0, a.useState)(!1),
                        n = (0, a.useMemo)(
                            () => ({ hasNewActivity: t, setHasNewActivity: i }),
                            [t]
                        );
                    return (0, r.jsx)(l.Provider, { value: n, children: e });
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
        50205: (e, t, i) => {
            i.d(t, {
                Dy: () => a,
                O1: () => n,
                QL: () => d,
                eX: () => o,
                n1: () => r,
                os: () => c,
                tD: () => l,
                tp: () => s,
            });
            let r = ["h1", "h2", "h3", "h4", "h5", "h6"],
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
        53687: (e, t, i) => {
            i.d(t, { P: () => s, e: () => n });
            var r = i(74848),
                a = i(96540);
            let l = (0, a.createContext)({ multiPageSelectionAllowed: !1 }),
                n = ({ children: e, multiPageSelectionAllowed: t = !1 }) => {
                    let [i, n] = (0, a.useState)(t),
                        s = (0, a.useMemo)(
                            () => ({
                                multiPageSelectionAllowed: i,
                                setMultiPageSelectionAllowed: n,
                            }),
                            [i]
                        );
                    return (0, r.jsx)(l.Provider, { value: s, children: e });
                };
            n.displayName = "ListViewMultiPageSelectionProvider";
            let s = () => (0, a.useContext)(l);
            try {
                l.displayName || (l.displayName = "MultiPageSelectionContext");
            } catch {}
        },
        56825: (e, t, i) => {
            i.d(t, { m: () => n });
            var r = i(96540),
                a = i(50205),
                l = i(61015);
            function n(e) {
                let { titleHeaderTag: t, hasMetadataTitle: i } = (0, l.t)();
                return (0, r.useMemo)(() => {
                    let r = a.Dy.findIndex((t) => t === e),
                        l = a.n1.indexOf(t) + (i ? r : r - 1);
                    return l > a.n1.length - 1 ? "h6" : a.n1[l] || a.O1[e];
                }, [t, i, e]);
            }
        },
        60257: (e, t, i) => {
            i.d(t, { W: () => c, r: () => d });
            var r = i(74848),
                a = i(4559),
                l = i(73189),
                n = i(96540),
                s = i(74501);
            let o = (0, n.createContext)({ isSelected: !1, onSelect: l.l }),
                c = ({
                    children: e,
                    value: { isSelected: t, onSelect: i },
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
                                        i(e));
                                },
                            }),
                            [t, i, l]
                        );
                    return (0, r.jsx)(o.Provider, { value: c, children: e });
                };
            c.displayName = "ListItemSelectionProvider";
            let d = () => (0, n.useContext)(o);
            try {
                o.displayName || (o.displayName = "SelectionContext");
            } catch {}
        },
        61015: (e, t, i) => {
            i.d(t, { t: () => o, y: () => s });
            var r = i(74848),
                a = i(96540),
                l = i(50205);
            let n = (0, a.createContext)(void 0),
                s = ({ children: e, title: t, titleHeaderTag: i = l.tD }) => {
                    let [s, o] = (0, a.useState)(!1),
                        c = (0, a.useMemo)(
                            () => ({
                                title: t.trim() || l.QL,
                                titleHeaderTag: i,
                                hasMetadataTitle: s,
                                setHasMetadataTitle: o,
                            }),
                            [s, t, i]
                        );
                    return (0, r.jsx)(n.Provider, { value: c, children: e });
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
        73017: (e, t, i) => {
            i.d(t, { $6: () => c, JR: () => s, vb: () => n });
            var r = i(74848),
                a = i(87448),
                l = i(96540);
            let n = d(a.az),
                s = d(a.EY),
                o = (0, l.forwardRef)((e, t) =>
                    (0, r.jsx)("div", { ref: t, ...e })
                );
            o.displayName = "Div";
            let c = d(o);
            function d(e) {
                let t = (0, l.forwardRef)((t, i) => {
                    let { html: a, ...l } = t;
                    return (0, r.jsx)(e, {
                        ref: i,
                        ...l,
                        dangerouslySetInnerHTML: a ? { __html: a } : void 0,
                    });
                });
                return (
                    (t.displayName = `SafeHTML${e.displayName || e.name}`),
                    t
                );
            }
            try {
                n.displayName || (n.displayName = "VerifiedHTMLBox");
            } catch {}
            try {
                s.displayName || (s.displayName = "VerifiedHTMLText");
            } catch {}
            try {
                c.displayName || (c.displayName = "VerifiedHTMLDiv");
            } catch {}
        },
        74501: (e, t, i) => {
            i.d(t, { J: () => s, y: () => n });
            var r = i(74848),
                a = i(96540);
            let l = (0, a.createContext)(void 0),
                n = ({ children: e }) => {
                    let [t, i] = (0, a.useState)(""),
                        [n, s] = (0, a.useState)(null),
                        o = (0, a.useRef)(null);
                    (0, a.useEffect)(() => {
                        o?.current?.textContent &&
                            i(o.current.textContent.trim());
                    }, [o, i]);
                    let c = (0, a.useMemo)(
                        () => ({
                            title: t,
                            titleAction: n,
                            setTitleAction: s,
                            headingRef: o,
                        }),
                        [t, n]
                    );
                    return (0, r.jsx)(l.Provider, { value: c, children: e });
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
        75986: (e, t, i) => {
            i.d(t, { If: () => s, JE: () => n });
            var r = i(74848),
                a = i(96540);
            let l = (0, a.createContext)(void 0),
                n = ({ children: e }) => {
                    let t = (0, a.useId)(),
                        i = (0, a.useMemo)(() => ({ idPrefix: t }), [t]);
                    return (0, r.jsx)(l.Provider, { value: i, children: e });
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
        77177: (e, t, i) => {
            i.d(t, { L: () => s, O: () => n });
            var r = i(74848),
                a = i(96540);
            let l = (0, a.createContext)(void 0),
                n = ({ children: e }) => {
                    let [t, i] = (0, a.useState)(""),
                        n = (0, a.useMemo)(
                            () => ({ description: t, setDescription: i }),
                            [t]
                        );
                    return (0, r.jsx)(l.Provider, { value: n, children: e });
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
        80293: (e, t, i) => {
            i.d(t, { N: () => a });
            var r = i(96540);
            function a(
                e,
                { isPropUpdateDisabled: t = !1, isEqual: i = Object.is } = {}
            ) {
                let [l, n] = (0, r.useState)(e),
                    [s, o] = (0, r.useState)(e),
                    c = e instanceof Function ? e() : e;
                return (t || i(s, c) || (o(c), n(c)), [l, n]);
            }
        },
        91230: (e, t, i) => {
            i.d(t, { E7: () => $ });
            var r = i(74848),
                a = i(96540);
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
                        staticMenuActions: i,
                        variant: n = "toolbar",
                        label: s,
                        gap: o,
                    },
                }) => {
                    let c = (0, a.useMemo)(
                        () => ({
                            actions: t,
                            staticMenuActions: i,
                            variant: n,
                            label: s,
                            gap: o,
                        }),
                        [t, i, n, s, o]
                    );
                    return (0, r.jsx)(l.Provider, { value: c, children: e });
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
                    let i = (0, a.useRef)(null),
                        l = (0, a.useRef)(null),
                        n = (0, a.useMemo)(
                            () => ({
                                outerContainerRef: i,
                                itemContainerRef: l,
                                anchorRef: e,
                            }),
                            [e]
                        );
                    return (0, r.jsx)(o.Provider, { value: n, children: t });
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
            var u = i(73189),
                m = i(80293),
                h = i(50463),
                y = i(93330);
            let f = (e, t) => {
                    let i =
                            2 *
                            ((e) => {
                                if (!e) return 0;
                                let t = window.getComputedStyle(e);
                                return t?.columnGap
                                    ? parseInt(t.columnGap, 10)
                                    : 0;
                            })(t),
                        r = e.getBoundingClientRect().width,
                        a = window.getComputedStyle(e);
                    return (
                        r +
                        (a?.marginLeft ? parseInt(a.marginLeft, 10) : 0) +
                        (a?.marginRight ? parseInt(a.marginRight, 10) : 0) +
                        i
                    );
                },
                p = (e, t) => {
                    let i = v(e, t);
                    if (void 0 === i) return;
                    let r = i;
                    return (t && (r -= t.offsetLeft), r);
                },
                v = (e, t) => {
                    if (!e) return;
                    let i = e.offsetWidth;
                    return (t && (i -= t.offsetWidth), i);
                },
                x = (0, a.createContext)({
                    visibleChildEndIndex: 0,
                    justifySpaceBetween: !1,
                    recalculateItemSize: u.l,
                }),
                N = ({ children: e, value: { actionKeys: t } }) => {
                    let i = t.length,
                        [l, n] = (0, m.N)(i),
                        { outerContainerRef: s, itemContainerRef: o } = d(),
                        [c, u] = (0, a.useState)(),
                        [N, g] = (0, a.useState)(),
                        [C, b] = (0, a.useState)(
                            new Map(t.map((e) => [e, void 0]))
                        ),
                        [w, _] = (0, a.useState)(!1),
                        j = (0, a.useMemo)(
                            () =>
                                t
                                    .slice(0, l)
                                    .every(
                                        (e) =>
                                            C.has(e) &&
                                            "number" == typeof C.get(e)
                                    ),
                            [t, C, l]
                        ),
                        S = (0, a.useCallback)(
                            (e) => {
                                let i = t[e];
                                if (i) return C.get(i);
                            },
                            [t, C]
                        ),
                        L = (0, a.useCallback)(
                            (e, t) => {
                                let i = o.current;
                                if (!i) return;
                                let r = f(t, i);
                                b((t) => {
                                    if (r === t.get(e) || isNaN(r)) return t;
                                    let i = new Map(Array.from(t.entries()));
                                    return (i.set(e, r), i);
                                });
                            },
                            [o]
                        ),
                        I = (0, a.useCallback)(() => {
                            if (!j) return;
                            let e = s.current,
                                t = o.current,
                                i = v(e, t);
                            if (void 0 === i) return;
                            let r = p(e, t);
                            void 0 !== r && i <= r && n(Math.max(0, l - 1));
                        }, [j, s, o, n, l]),
                        A = (0, a.useCallback)(() => {
                            let e = s.current,
                                t = o.current,
                                r = v(e, t);
                            if (void 0 === r) return;
                            let a = S(l);
                            if (void 0 === a) return;
                            let c = p(e, t);
                            void 0 !== c && r > c + a && n(Math.min(i, l + 1));
                        }, [s, o, S, l, n, i]),
                        M = (0, a.useCallback)(() => {
                            let e = s.current,
                                t = o.current;
                            if (!e || !t) return;
                            let i = e.offsetWidth;
                            i &&
                                (void 0 === c || i <= c ? I() : i > c && A(),
                                u(i),
                                _(i <= (N ?? t.offsetWidth)));
                        }, [A, I, N, c, s, o]);
                    ((0, h.A)(() => {
                        let e = o.current;
                        if (!e) return;
                        let i = new Map();
                        for (let r of t) {
                            let t = e.querySelector(
                                `[data-action-bar-item="${r}"]`
                            );
                            t && i.set(r, f(t, e));
                        }
                        b(i);
                    }, [t, o]),
                        (0, h.A)(() => {
                            let e = o.current;
                            e && g(e.offsetWidth);
                        }, [o]),
                        (0, h.A)(() => {
                            M();
                        }, [M]),
                        (0, y.w)(M, s));
                    let T = (0, a.useMemo)(
                        () => ({
                            visibleChildEndIndex: l,
                            justifySpaceBetween: w,
                            recalculateItemSize: L,
                        }),
                        [l, w, L]
                    );
                    return (0, r.jsx)(x.Provider, { value: T, children: e });
                },
                g = () => {
                    let e = (0, a.useContext)(x);
                    return (
                        e || {
                            justifySpaceBetween: !1,
                            visibleChildEndIndex: 0,
                            recalculateItemSize: u.l,
                        }
                    );
                };
            try {
                x.displayName || (x.displayName = "ActionBarResizeContext");
            } catch {}
            try {
                N.displayName || (N.displayName = "ActionBarResizeProvider");
            } catch {}
            var C = i(29731),
                b = i(11683),
                w = i(45800),
                _ = i(34164),
                j = i(38621),
                S = i(94236),
                L = i(26108),
                I = i(5524),
                A = i(87448);
            let M = {
                    IconButton_0: "OverflowMenu-module__IconButton_0--cxtvS",
                },
                T = j.KebabHorizontalIcon,
                E = "invisible",
                B = ({
                    anchorProps: {
                        "aria-label": e,
                        icon: t = T,
                        variant: i = E,
                        ...l
                    } = { icon: T, variant: E },
                    open: n,
                    onOpenChange: o,
                }) => {
                    let { anchorRef: c } = d(),
                        { actions: u, staticMenuActions: m, label: h } = s(),
                        { visibleChildEndIndex: y } = g(),
                        f = (0, a.useMemo)(
                            () =>
                                (0, A.h1)(l, {
                                    "aria-label": e?.trim() || `More ${h}`,
                                    icon: t,
                                    className: M.IconButton_0,
                                    variant: i,
                                }),
                            [e, t, h, i, l]
                        ),
                        p = (0, a.useMemo)(() => u?.slice(y), [u, y]),
                        v = p && p.length > 0,
                        x = m && m.length > 0;
                    return v || x
                        ? (0, r.jsxs)(S.W, {
                              anchorRef: c,
                              open: n,
                              onOpenChange: o,
                              children: [
                                  (0, r.jsx)(S.W.Anchor, {
                                      children: (0, r.jsx)(L.K, {
                                          ...(0, C.G)("overflow-menu-anchor"),
                                          ...f,
                                      }),
                                  }),
                                  (0, r.jsx)(S.W.Overlay, {
                                      align: "end",
                                      "data-overflow-menu-overlay": !0,
                                      children: (0, r.jsxs)(I.l, {
                                          children: [
                                              x &&
                                                  m.map((e) =>
                                                      (0, r.jsx)(
                                                          a.Fragment,
                                                          {
                                                              children:
                                                                  e.render(),
                                                          },
                                                          e.key
                                                      )
                                                  ),
                                              p?.map((e) =>
                                                  (0, r.jsx)(
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
            let P = {
                    Box_0: "VisibleAndOverflowContainer-module__Box_0--KyT2b",
                    space: "VisibleAndOverflowContainer-module__space--fVHr3",
                },
                R = { Box_0: "VisibleItem-module__Box_0--BsJkb" },
                k = ({ children: e, actionKey: t }) => {
                    let i = (0, a.useRef)(null),
                        { recalculateItemSize: l } = g();
                    return (
                        (0, h.A)(() => {
                            i.current && l(t, i.current);
                        }, [i, l, t]),
                        (0, r.jsx)("div", {
                            ...(0, C.G)(`action-bar-item-${t}`),
                            "data-action-bar-item": t,
                            ref: i,
                            className: R.Box_0,
                            children: e,
                        })
                    );
                };
            try {
                k.displayName || (k.displayName = "VisibleItem");
            } catch {}
            let H = { Box_1: "VisibleItems-module__Box_1--LOtDr" },
                V = ({ className: e, style: t }) => {
                    let { itemContainerRef: i } = d(),
                        { actions: a, gap: l } = s(),
                        { visibleChildEndIndex: n } = g(),
                        o = a?.slice(0, n);
                    return (0, r.jsx)("div", {
                        ...(0, C.G)("action-bar"),
                        ref: i,
                        className: (0, _.$)(e, H.Box_1),
                        style: { gap: l, ...t },
                        children: o?.map(({ key: e, render: t }) =>
                            (0, r.jsx)(k, { actionKey: e, children: t(!1) }, e)
                        ),
                    });
                };
            try {
                V.displayName || (V.displayName = "VisibleItems");
            } catch {}
            let D = ({
                overflowMenuToggleProps: e,
                overflowMenuProps: t,
                children: i,
                ...a
            }) => {
                let { outerContainerRef: l } = d(),
                    { label: n, variant: o, gap: c } = s(),
                    { justifySpaceBetween: u } = g();
                return (
                    (0, w.G)(
                        {
                            containerRef: l,
                            bindKeys: b.z0.ArrowHorizontal | b.z0.HomeAndEnd,
                            focusOutBehavior: "wrap",
                            disabled: "toolbar" !== o,
                        },
                        [l]
                    ),
                    (0, r.jsxs)("div", {
                        ref: l,
                        ...(0, C.G)("action-bar-container"),
                        role: "toolbar" === o ? "toolbar" : void 0,
                        "aria-label": "toolbar" === o ? n : void 0,
                        style: { gap: c },
                        className: (0, _.$)(P.Box_0, u && P.space),
                        children: [
                            (0, r.jsx)(V, { ...a }),
                            i,
                            (0, r.jsx)(B, { anchorProps: e, ...t }),
                        ],
                    })
                );
            };
            try {
                D.displayName ||
                    (D.displayName = "VisibleAndOverflowContainer");
            } catch {}
            let O = "normal",
                W = ({ children: e, ...t }) =>
                    (0, r.jsx)(D, { ...t, children: e }),
                $ = ({
                    actions: e = [],
                    staticMenuActions: t,
                    overflowMenuToggleProps: i,
                    overflowMenuProps: l,
                    children: s,
                    label: o,
                    variant: d,
                    density: u = O,
                    anchorRef: m,
                    className: h,
                    style: y,
                }) => {
                    let f = (0, a.useMemo)(
                            () => ({
                                actions: e,
                                staticMenuActions: t,
                                variant: d,
                                label: o,
                                gap: ((e) =>
                                    "condensed" === e
                                        ? "var(--base-size-4)"
                                        : "spacious" === e
                                          ? "var(--base-size-16)"
                                          : "none" === e
                                            ? 0
                                            : "var(--base-size-8)")(u),
                            }),
                            [e, t, d, o, u]
                        ),
                        p = (0, a.useMemo)(
                            () => ({ actionKeys: e.map((e) => e.key) }),
                            [e]
                        ),
                        v = t && t.length > 0,
                        x = e && e.length > 0;
                    if (!x && !v) return null;
                    let g = {
                        overflowMenuToggleProps: i,
                        overflowMenuProps: l,
                        className: h,
                        style: y,
                    };
                    return (0, r.jsx)(c, {
                        value: { anchorRef: m },
                        children: (0, r.jsx)(n, {
                            value: f,
                            children: x
                                ? (0, r.jsx)(N, {
                                      value: p,
                                      children: (0, r.jsx)(W, {
                                          ...g,
                                          children: s,
                                      }),
                                  })
                                : (0, r.jsx)(W, { ...g, children: s }),
                        }),
                    });
                };
            try {
                W.displayName || (W.displayName = "InternalActionBar");
            } catch {}
            try {
                $.displayName || ($.displayName = "ActionBar");
            } catch {}
        },
        95378: (e, t, i) => {
            i.d(t, { kx: () => w, ao: () => b });
            var r,
                a,
                l = i(74848),
                n = i(20263),
                s = i(73017),
                o = i(29731),
                c = i(34164),
                d = i(96540),
                u = i(56825),
                m = i(35220),
                h = i(87670),
                y = i(46720),
                f = i(24347);
            let p = {
                container: "Selection-module__container--OQE4d",
                containerWithDragHandle:
                    "Selection-module__containerWithDragHandle--mLWh4",
                dragTrigger: "Selection-module__dragTrigger--SM4bZ",
                compact: "Selection-module__compact--azMKM",
                checkbox: "Selection-module__checkbox--X3ras",
                checkboxCompact: "Selection-module__checkboxCompact--zfQtx",
            };
            var v = i(60257),
                x = i(74501);
            let N = () => {
                let { variant: e } = (0, m.e)(),
                    { isSelectable: t, hasDragHandle: i } = (0, f.v)(),
                    { isSelected: r, onSelect: a } = (0, v.r)(),
                    { title: n } = (0, x.J)();
                return t
                    ? (0, l.jsxs)("div", {
                          className: i
                              ? p.containerWithDragHandle
                              : p.container,
                          ...(0, o.G)("list-view-item-selection"),
                          children: [
                              i &&
                                  (0, l.jsx)(h.BS.DragTrigger, {
                                      className: (0, c.$)(
                                          p.dragTrigger,
                                          "compact" === e && p.compact
                                      ),
                                  }),
                              (0, l.jsx)(y.A, {
                                  className:
                                      "compact" === e
                                          ? p.checkboxCompact
                                          : p.checkbox,
                                  checked: r,
                                  onChange: () => a(!r),
                                  "aria-label": `Select: ${n}`,
                                  "data-listview-component": "selection-input",
                                  ...(0, o.G)("list-view-item-selection-input"),
                              }),
                          ],
                      })
                    : null;
            };
            try {
                N.displayName || (N.displayName = "ListItemSelection");
            } catch {}
            let g = {
                anchor: "Title-module__anchor--GmXUE",
                heading: "Title-module__heading--s7YnL",
                compact: "Title-module__compact--eK6hD",
                container: "Title-module__container--XD9YG",
                trailingBadgesSpacer:
                    "Title-module__trailingBadgesSpacer--Son9W",
                trailingBadgesContainer:
                    "Title-module__trailingBadgesContainer--mijcn",
                inline: "Title-module__inline--oM0P7",
            };
            function C({
                children: e,
                containerStyle: t,
                containerClassName: i,
                headerContainerRef: r,
                headingStyle: a,
                headingClassName: n,
                headingRef: s,
                leadingBadge: d,
                trailingBadges: h,
                header: y,
            }) {
                let { variant: f } = (0, m.e)(),
                    { headingRef: p } = (0, x.J)(),
                    v = (0, u.m)("listitem");
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            ...(0, o.G)("list-view-item-title-container"),
                            style: t,
                            className: (0, c.$)(
                                g.container,
                                "compact" === f && g.compact,
                                i
                            ),
                            ref: r,
                            children: [
                                (0, l.jsxs)(v, {
                                    className: (0, c.$)(
                                        g.heading,
                                        "compact" === f && g.compact,
                                        n
                                    ),
                                    style: a,
                                    ref: (e) => {
                                        if (
                                            (p && (p.current = e),
                                            s && "current" in s)
                                        )
                                            try {
                                                s.current = e;
                                            } catch {}
                                    },
                                    ...(0, o.G)("list-view-item-title"),
                                    children: [d, y],
                                }),
                                h &&
                                    (0, l.jsx)("span", {
                                        className: g.trailingBadgesSpacer,
                                    }),
                                (0, l.jsx)("span", {
                                    className: g.trailingBadgesContainer,
                                    children: h,
                                }),
                                e,
                            ],
                        }),
                        (0, l.jsx)(N, {}),
                    ],
                });
            }
            function b({
                children: e,
                value: t,
                containerStyle: i,
                containerClassName: r,
                headerContainerRef: a,
                headingStyle: n,
                headingClassName: s,
                headingRef: o,
                leadingBadge: c,
                trailingBadges: u,
                anchorRef: m,
                ...h
            }) {
                let y = (0, d.useRef)(null),
                    f = m || y;
                return (
                    j({ anchorRef: f, ...h }),
                    (0, l.jsx)(C, {
                        header:
                            h.href || h.onClick
                                ? (0, l.jsx)(_, {
                                      anchorRef: f,
                                      ...h,
                                      children: (0, l.jsx)("span", {
                                          children: t,
                                      }),
                                  })
                                : (0, l.jsx)("span", { children: t }),
                        containerStyle: i,
                        containerClassName: r,
                        headerContainerRef: a,
                        headingStyle: n,
                        headingClassName: s,
                        headingRef: o,
                        leadingBadge: c,
                        trailingBadges: u,
                        children: e,
                    })
                );
            }
            function w({
                children: e,
                html: t,
                containerStyle: i,
                containerClassName: r,
                headerContainerRef: a,
                headingStyle: s,
                headingClassName: o,
                headingRef: c,
                leadingBadge: d,
                trailingBadges: u,
                ...m
            }) {
                return (
                    j(m),
                    (0, l.jsx)(C, {
                        header: (0, l.jsx)(n.BC, { html: t, ...m }),
                        containerStyle: i,
                        containerClassName: r,
                        headerContainerRef: a,
                        headingStyle: s,
                        headingClassName: o,
                        headingRef: c,
                        leadingBadge: d,
                        trailingBadges: u,
                        children: e,
                    })
                );
            }
            function _({
                anchorStyle: e,
                anchorClassName: t,
                anchorRef: i,
                linkProps: r,
                children: a,
                ...n
            }) {
                let { as: s = "a", ...u } = r ?? {},
                    m = (0, d.useRef)(null);
                return (0, l.jsx)(s, {
                    ...(0, o.G)("listitem-title-link"),
                    style: e,
                    ref: i || m,
                    "data-component": "listview-title-link",
                    className: (0, c.$)(g.anchor, g.inline, t),
                    ...n,
                    ...u,
                    children: a,
                });
            }
            let j = ({ href: e, onClick: t, anchorRef: i }) => {
                let { setTitleAction: r, headingRef: a } = (0, x.J)();
                return (
                    (0, d.useEffect)(() => {
                        (e || t) &&
                            r(() => (t) => {
                                if (e && (t.metaKey || t.ctrlKey))
                                    window.open(e, "_blank");
                                else if (i?.current) i.current.click();
                                else if (a?.current) {
                                    let e =
                                        a.current.querySelector("a, button");
                                    e && e.click();
                                }
                            });
                    }, [i, a, e, t, r]),
                    null
                );
            };
            try {
                C.displayName || (C.displayName = "InternalTitle");
            } catch {}
            try {
                (r = TitleTag).displayName || (r.displayName = "TitleTag");
            } catch {}
            try {
                b.displayName || (b.displayName = "ListItemTitle");
            } catch {}
            try {
                w.displayName || (w.displayName = "ListItemSafeHTMLTitle");
            } catch {}
            try {
                (a = function ({
                    children: e,
                    html: t,
                    containerStyle: i,
                    containerClassName: r,
                    headerContainerRef: a,
                    headingStyle: n,
                    headingClassName: o,
                    headingRef: c,
                    leadingBadge: d,
                    trailingBadges: u,
                    ...m
                }) {
                    return (
                        j(m),
                        (0, l.jsx)(C, {
                            header: (0, l.jsx)(s.JR, { html: t, ...m }),
                            containerStyle: i,
                            containerClassName: r,
                            headerContainerRef: a,
                            headingStyle: n,
                            headingClassName: o,
                            headingRef: c,
                            leadingBadge: d,
                            trailingBadges: u,
                            children: e,
                        })
                    );
                }).displayName || (a.displayName = "ListItemUnsafeHTMLTitle");
            } catch {}
            try {
                _.displayName || (_.displayName = "HeadingLink");
            } catch {}
        },
        97174: (e, t, i) => {
            i.d(t, { u: () => L });
            var r = i(74848),
                a = i(73189),
                l = i(29731),
                n = i(88431),
                s = i(80293),
                o = i(81960),
                c = i(34164),
                d = i(96540),
                u = i(50205),
                m = i(44569),
                h = i(11683),
                y = i(55966),
                f = i(45800);
            function p(e, t) {
                let i = e,
                    r = e.closest("[role=list] li");
                r && (i = r);
                let a = i.closest("[role=list]");
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
                for (; n !== i && ((n = l.nextNode()), !(++s > 500)); );
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
            function v(e) {
                let t = e.closest("[role=list]"),
                    i = t?.querySelector("[role=list] li");
                return i instanceof HTMLElement ? i : void 0;
            }
            function x(e) {
                let t = e.closest("[role=list]"),
                    i = t?.querySelectorAll("[role=list] li");
                if (!i || i.length < 1) return;
                let r = i[i.length - 1];
                if (r instanceof HTMLElement) return r;
            }
            function N(e, t) {
                let i = [
                        ...(0, y.K1)(document.documentElement, {
                            strict: !0,
                            onlyTabbable: !0,
                        }),
                    ],
                    r = i.indexOf(e);
                return "next" === t ? i[r + 1] : i[r - 1];
            }
            var g = i(75986),
                C = i(18377);
            let b = {
                ul: "ListView-module__ul--A_8jF",
                container: "ListView-module__container--rxCWy",
            };
            var w = i(53687),
                _ = i(24347),
                j = i(61015),
                S = i(35220);
            let L = ({
                    children: e,
                    hasDragHandle: t,
                    isSelectable: i,
                    onVariantChange: l = a.l,
                    pluralUnits: n,
                    selectedCount: o = 0,
                    singularUnits: c,
                    title: m,
                    titleHeaderTag: h,
                    totalCount: y,
                    variant: f = u.tp,
                    ...p
                }) => {
                    let [v, x] = (0, s.N)(f);
                    (0, d.useEffect)(() => {
                        l?.(v);
                    }, [l, v]);
                    let N = (0, d.useMemo)(
                        () => d.Children.toArray(e).length,
                        [e]
                    );
                    return (0, r.jsx)(g.JE, {
                        children: (0, r.jsx)(j.y, {
                            title: m,
                            titleHeaderTag: h,
                            children: (0, r.jsx)(S.H, {
                                variant: v,
                                setVariant: x,
                                children: (0, r.jsx)(_.W, {
                                    countOnPage: N,
                                    selectedCount: o,
                                    totalCount: y,
                                    singularUnits: c,
                                    pluralUnits: n,
                                    isSelectable: i,
                                    hasDragHandle: t,
                                    children: (0, r.jsx)(w.e, {
                                        children: (0, r.jsx)(C.w, {
                                            children: (0, r.jsx)(I, {
                                                ...p,
                                                children: e,
                                            }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    });
                },
                I = ({
                    ariaLabelledBy: e,
                    as: t,
                    children: i,
                    className: a,
                    itemsListClassName: s,
                    itemsListStyle: u,
                    listRef: C,
                    metadata: w,
                    role: _,
                    strictFocusZone: L,
                    ...I
                }) => {
                    let { idPrefix: A } = (0, g.If)(),
                        { title: M, titleHeaderTag: T } = (0, j.t)(),
                        { variant: E } = (0, S.e)(),
                        { containerRef: B } = (function (e = !0) {
                            let t = void 0 === e || e,
                                i =
                                    h.z0.ArrowVertical |
                                    h.z0.HomeAndEnd |
                                    h.z0.PageUpDown |
                                    h.z0.Tab,
                                r = (0, m.zw)() ? i | h.z0.JK : i,
                                { containerRef: a } = (0, f.G)({
                                    strict: t,
                                    bindKeys: r,
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
                                    getNextFocusable: (e, i, r) => {
                                        if (i instanceof HTMLElement) {
                                            if (
                                                "Tab" === r.key ||
                                                "Tab" === r.code
                                            ) {
                                                if (
                                                    r.shiftKey &&
                                                    i.id.includes(
                                                        "list-view-node"
                                                    )
                                                )
                                                    return N(i, "previous");
                                                let e =
                                                    i.closest("[role=list] li");
                                                if (!e) return;
                                                let a = [
                                                        ...(0, y.K1)(e, {
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
                                                let s = a.indexOf(r.target);
                                                return s !== a.length - 1 ||
                                                    r.shiftKey
                                                    ? s > 0
                                                        ? r.shiftKey
                                                            ? a[s - 1]
                                                            : a[s + 1]
                                                        : void 0
                                                    : N(i, "next");
                                            }
                                            if ("previous" === e)
                                                return p(i, e) || v(i);
                                            if ("next" === e)
                                                return p(i, e) || x(i);
                                            if ("start" === e) return v(i);
                                            if ("end" === e) return x(i);
                                        }
                                    },
                                });
                            return { containerRef: a };
                        })(L),
                        [P, R] = (0, d.useState)(!0);
                    ((0, d.useEffect)(() => {
                        C && (C.current = B.current);
                    }, [B, C]),
                        (0, n.N)(() => {
                            B.current &&
                                R(
                                    Array.from(
                                        B.current.querySelectorAll("li")
                                    ).some((e) => {
                                        let t = e.parentElement;
                                        for (; t && t !== B.current; ) {
                                            if (
                                                "UL" === t.tagName ||
                                                "OL" === t.tagName
                                            )
                                                return !1;
                                            t = t.parentElement;
                                        }
                                        return !0;
                                    })
                                );
                        }, [B, i]));
                    let k = e ?? `${A}-list-view-container-title`;
                    return (0, r.jsxs)("div", {
                        id: `${A}-list-view-container`,
                        className: (0, c.$)(b.container, a),
                        children: [
                            !e &&
                                (0, r.jsx)(o.A, {
                                    className: "sr-only",
                                    as: T,
                                    id: k,
                                    ...(0, l.G)("list-view-title"),
                                    children: M,
                                }),
                            w,
                            (0, r.jsx)(t || (P ? "ul" : "div"), {
                                className: (0, c.$)(b.ul, s),
                                style: u,
                                ref: B,
                                "aria-labelledby": P ? k : void 0,
                                tabIndex: -1,
                                role: (_ ?? P) ? "list" : void 0,
                                "data-listview-component": "items-list",
                                "data-density": E,
                                ...(0, l.G)("list-view-items"),
                                ...I,
                                children: i,
                            }),
                        ],
                    });
                };
            try {
                L.displayName || (L.displayName = "ListView");
            } catch {}
            try {
                I.displayName || (I.displayName = "ListViewContainer");
            } catch {}
        },
    },
]);
//# sourceMappingURL=packages_list-view_src_ListItem_ListItem_tsx-packages_list-view_src_ListItem_Title_tsx-packag-29fce3-4fd21e83323b.js.map
