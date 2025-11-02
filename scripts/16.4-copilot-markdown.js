"use strict";
(globalThis.webpackChunk_github_ui_github_ui =
    globalThis.webpackChunk_github_ui_github_ui || []).push([
    ["packages_copilot-markdown_MarkdownRenderer_tsx"],
    {
        4817: (e, t, n) => {
            n.d(t, {
                To: () => Z,
                sX: () => J,
            });
            var r = n(74848),
                a = n(21728),
                o = n(96540),
                l = n(85094),
                s = n(98755);
            let i = {
                container: "CodeBlock-module__container--QRI4L",
                copyContent: "CodeBlock-module__copyContent--BH7EX",
                copyButton: "CodeBlock-module__copyButton--eyFr8",
                assistive: "CodeBlock-module__assistive--IJ9ks",
                header: "CodeBlock-module__header--K8Zrp",
                immersive: "CodeBlock-module__immersive--D8NjT",
                code: "CodeBlock-module__code--gyjSL",
                codeContainer: "CodeBlock-module__codeContainer--snQei",
                copyContainer: "CodeBlock-module__copyContainer--jLoHL",
                languageName: "CodeBlock-module__languageName--fxI6n",
                codeWrap: "CodeBlock-module__codeWrap--UMQo8",
            };
            var c = n(23967),
                d = n(31339),
                m = n(57826),
                u = n(34164),
                p = n(53419),
                h = n(39876),
                f = n(26108),
                g = n(38621),
                y = n(22072);
            let v = () => {
                let e,
                    t = (0, a.c)(1);
                return (
                    t[0] === Symbol.for("react.memo_cache_sentinel")
                        ? ((e = (0, r.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              fill: "none",
                              viewBox: "0 0 16 16",
                              "aria-hidden": "true",
                              children: (0, r.jsx)("path", {
                                  stroke: "currentColor",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "1.5",
                                  d: "M1 13h3M1 8h14M1 3h14",
                              }),
                          })),
                          (t[0] = e))
                        : (e = t[0]),
                    e
                );
            };
            try {
                v.displayName || (v.displayName = "UnwrapIcon");
            } catch {}
            let _ = () => {
                let e,
                    t = (0, a.c)(1);
                return (
                    t[0] === Symbol.for("react.memo_cache_sentinel")
                        ? ((e = (0, r.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              fill: "none",
                              viewBox: "0 0 16 16",
                              "aria-hidden": "true",
                              children: [
                                  (0, r.jsx)("path", {
                                      stroke: "currentColor",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "1.5",
                                      d: "M1 13h3M1 3h14",
                                  }),
                                  (0, r.jsx)("path", {
                                      fill: "currentColor",
                                      fillRule: "evenodd",
                                      d: "M1 7.25a.75.75 0 0 0 0 1.5h11.5a1.75 1.75 0 1 1 0 3.5H9.536v-.464a.679.679 0 0 0-1.086-.543l-1.619 1.214a.68.68 0 0 0 0 1.086l1.619 1.214a.679.679 0 0 0 1.086-.543v-.464H12.5a3.25 3.25 0 0 0 0-6.5z",
                                      clipRule: "evenodd",
                                  }),
                              ],
                          })),
                          (t[0] = e))
                        : (e = t[0]),
                    e
                );
            };
            try {
                _.displayName || (_.displayName = "WrapIcon");
            } catch {}
            function x(e) {
                let t,
                    n,
                    l,
                    x,
                    C,
                    b,
                    k,
                    N,
                    j,
                    w,
                    R,
                    $,
                    L,
                    S,
                    B,
                    I = (0, a.c)(50),
                    {
                        language: M,
                        children: O,
                        code: D,
                        startOffset: E,
                        endOffset: T,
                    } = e;
                I[0] !== M
                    ? ((t = (0, c.vL)(M)), (I[0] = M), (I[1] = t))
                    : (t = I[1]);
                let { color: A, name: F } = t,
                    H = (0, o.useId)(),
                    {
                        copilotAnnotations: P,
                        chatMode: W,
                        wrapCodeLines: K,
                        onWrapCodeLinesChange: V,
                    } = (0, o.useContext)(m.F),
                    [U, Y] = (0, o.useState)(!1),
                    { publicCodeReferences: z, codeVulnerabilities: Q } = (0,
                    h.R)(P, E, T);
                I[2] !== W || I[3] !== V || I[4] !== K
                    ? ((n = () => {
                          (V?.(!K),
                              (0, p.BI)("dotcom_chat.activate", {
                                  target: K
                                      ? "CODE_BLOCK_UNWRAP"
                                      : "CODE_BLOCK_WRAP",
                                  mode: W,
                              }));
                      }),
                      (I[2] = W),
                      (I[3] = V),
                      (I[4] = K),
                      (I[5] = n))
                    : (n = I[5]);
                let q = n,
                    J = "immersive" === W,
                    X = "assistive" === W;
                (I[6] !== J || I[7] !== X
                    ? ((l = (0, u.$)(i.container, {
                          [i.immersive]: J,
                          [i.assistive]: X,
                      })),
                      (I[6] = J),
                      (I[7] = X),
                      (I[8] = l))
                    : (l = I[8]),
                    I[9] !== A
                        ? ((x = (0, r.jsx)(d.q, {
                              color: A,
                          })),
                          (I[9] = A),
                          (I[10] = x))
                        : (x = I[10]));
                let Z = F || "Code";
                (I[11] !== H || I[12] !== Z
                    ? ((C = (0, r.jsx)("span", {
                          id: H,
                          className: i.languageName,
                          children: Z,
                      })),
                      (I[11] = H),
                      (I[12] = Z),
                      (I[13] = C))
                    : (C = I[13]),
                    I[14] !== V || I[15] !== q || I[16] !== K
                        ? ((b =
                              V &&
                              (0, r.jsx)(f.K, {
                                  variant: "invisible",
                                  icon: K ? v : _,
                                  "aria-label": K ? "Unwrap" : "Wrap",
                                  onClick: q,
                              })),
                          (I[14] = V),
                          (I[15] = q),
                          (I[16] = K),
                          (I[17] = b))
                        : (b = I[17]),
                    I[18] !== W || I[19] !== Q || I[20] !== z.length
                        ? ((k =
                              (z.length > 0 || Q.length > 0) &&
                              (0, r.jsx)(f.K, {
                                  variant: "invisible",
                                  icon: g.ShieldIcon,
                                  "aria-label": "Code insights",
                                  onClick: () => {
                                      (Y(!0),
                                          (0, p.BI)("dotcom_chat.activate", {
                                              target: "CODE_BLOCK_SHIELD",
                                              mode: W,
                                          }));
                                  },
                              })),
                          (I[18] = W),
                          (I[19] = Q),
                          (I[20] = z.length),
                          (I[21] = k))
                        : (k = I[21]),
                    I[22] !== k || I[23] !== x || I[24] !== C || I[25] !== b
                        ? ((N = (0, r.jsxs)("div", {
                              className: i.header,
                              children: [x, C, b, k],
                          })),
                          (I[22] = k),
                          (I[23] = x),
                          (I[24] = C),
                          (I[25] = b),
                          (I[26] = N))
                        : (N = I[26]),
                    I[27] !== W
                        ? ((j = () => {
                              (0, p.BI)("dotcom_chat.activate", {
                                  target: "CODE_BLOCK_COPY",
                                  mode: W,
                              });
                          }),
                          (I[27] = W),
                          (I[28] = j))
                        : (j = I[28]),
                    I[29] !== D || I[30] !== j
                        ? ((w = (0, r.jsx)("div", {
                              className: i.copyContainer,
                              children: (0, r.jsx)("div", {
                                  className: i.copyContent,
                                  children: (0, r.jsx)(s.T, {
                                      textToCopy: D,
                                      ariaLabel: "Copy code",
                                      className: i.copyButton,
                                      onCopy: j,
                                  }),
                              }),
                          })),
                          (I[29] = D),
                          (I[30] = j),
                          (I[31] = w))
                        : (w = I[31]));
                let G = K && i.codeWrap;
                return (
                    I[32] !== G
                        ? ((R = (0, u.$)(G)), (I[32] = G), (I[33] = R))
                        : (R = I[33]),
                    I[34] !== O || I[35] !== R
                        ? (($ = (0, r.jsx)("div", {
                              className: i.codeContainer,
                              children: (0, r.jsx)("pre", {
                                  className: i.code,
                                  tabIndex: 0,
                                  children: (0, r.jsx)("code", {
                                      className: R,
                                      children: O,
                                  }),
                              }),
                          })),
                          (I[34] = O),
                          (I[35] = R),
                          (I[36] = $))
                        : ($ = I[36]),
                    I[37] !== H ||
                    I[38] !== N ||
                    I[39] !== w ||
                    I[40] !== $ ||
                    I[41] !== l
                        ? ((L = (0, r.jsxs)("figure", {
                              className: l,
                              "aria-labelledby": H,
                              children: [N, w, $],
                          })),
                          (I[37] = H),
                          (I[38] = N),
                          (I[39] = w),
                          (I[40] = $),
                          (I[41] = l),
                          (I[42] = L))
                        : (L = I[42]),
                    I[43] !== Q || I[44] !== U || I[45] !== z
                        ? ((S =
                              U &&
                              (0, r.jsx)(y.t, {
                                  publicCodeReferences: z,
                                  codeVulnerabilities: Q,
                                  onClose: () => Y(!1),
                              })),
                          (I[43] = Q),
                          (I[44] = U),
                          (I[45] = z),
                          (I[46] = S))
                        : (S = I[46]),
                    I[47] !== L || I[48] !== S
                        ? ((B = (0, r.jsxs)(r.Fragment, {
                              children: [L, S],
                          })),
                          (I[47] = L),
                          (I[48] = S),
                          (I[49] = B))
                        : (B = I[49]),
                    B
                );
            }
            try {
                x.displayName || (x.displayName = "CodeBlock");
            } catch {}
            var C = n(47970);
            let b = "data-codeblock-props",
                k = (0, l.F)(b),
                N = {
                    code: (e, t) => {
                        let n = (0, l.k)(e, b);
                        return n
                            ? (0, r.jsx)(x, {
                                  ...n,
                                  children: e.children,
                              })
                            : t;
                    },
                };
            var j = n(15514),
                w = n(76814);
            let R = [
                    "raw.githubusercontent.com/",
                    "private-user-images.githubusercontent.com/",
                    "avatars.githubusercontent.com/",
                    "gist.github.com/assets/",
                    "github.com/user-attachments/assets/",
                ],
                $ = (e, t) =>
                    (0, C.YR)(e, (e, n, r) => {
                        if (
                            "element" === e.type &&
                            "img" === e.tagName &&
                            "src" in e.properties
                        ) {
                            let a,
                                o = e.properties.src;
                            try {
                                a = new URL(o, window.location.origin);
                            } catch {}
                            let l = a ? a.hostname + a.pathname : "";
                            if (!a || !R.some((e) => l.startsWith(e))) {
                                let a = (0, j.s)(t, e) ?? "";
                                if (r && "number" == typeof n)
                                    return (
                                        (r.children[n] = {
                                            type: "element",
                                            tagName: "span",
                                            properties: {},
                                            children: [
                                                {
                                                    type: "text",
                                                    value: a,
                                                },
                                            ],
                                        }),
                                        [w._Z, n]
                                    );
                            }
                        }
                    }),
                L = [
                    {
                        open: /(?:^|\\n)\$\$/,
                        close: /\$\$/,
                    },
                ],
                S = [
                    {
                        open: /\$`/,
                        close: /`\$/,
                    },
                    {
                        open: /\$\$(?! )/,
                        close: /(?:^|[^ ])(?=\$\$)\$\$/,
                    },
                    {
                        open: /\$(?![ $])/,
                        close: /(?:^|[^ $])(?=\$)\$/,
                    },
                ],
                B = new Set(["math"]);
            var I = n(95459);
            function M(e) {
                return {
                    type: "displaymath",
                    value: e,
                    data: {
                        hName: "math-renderer",
                        hProperties: {
                            className: "js-display-math",
                            style: "display: block; text-align: center;",
                        },
                        hChildren: [
                            {
                                type: "text",
                                value: e,
                            },
                        ],
                    },
                };
            }
            let O = {
                    displayDelimiters: [
                        ...L,
                        {
                            open: /\[\s/,
                            close: /\s\]/,
                        },
                    ],
                    inlineDelimiters: [
                        ...S,
                        {
                            open: /\( /,
                            close: / \)/,
                        },
                    ],
                },
                D = {
                    "math-renderer": ({
                        node: e,
                        children: t,
                        className: n,
                        ...r
                    }) =>
                        (0, o.createElement)(
                            "math-renderer",
                            {
                                ...r,
                                class: n,
                            },
                            t
                        ),
                },
                E = (e) =>
                    (0, C.YR)(e, (e) => {
                        "element" === e.type &&
                            !(
                                "a" === e.tagName &&
                                "href" in e.properties &&
                                e.properties.href.startsWith("#")
                            ) &&
                            (("a" === e.tagName || "target" in e.properties) &&
                                ((e.properties.target = "_blank"),
                                (e.properties.rel = "noopener noreferrer")),
                            !("target" in e.properties) &&
                                ("xlink:href" in e.properties ||
                                    "href" in e.properties) &&
                                (e.properties["xlink:show"] = "new"));
                    }),
                T = {
                    container: "MarkdownRenderer-module__container--dNKcF",
                    fadeInContent:
                        "MarkdownRenderer-module__fadeInContent--e9SCi",
                    noFade: "MarkdownRenderer-module__noFade--P7umO",
                };
            var A = n(32269),
                F = n(91905),
                H = n(23144),
                P = n(16961);
            let W = Symbol("renderFallthrough"),
                K = {
                    entries: (e) => Object.entries(e),
                };
            function V(e) {
                let t = {};
                for (let n of e)
                    for (let [e, r] of K.entries(n))
                        if (r) {
                            let n = t[e];
                            t[e] = (t) => {
                                let a = r(t, W);
                                return a !== W
                                    ? a
                                    : (n?.(t) ?? (0, o.createElement)(e, t));
                            };
                        }
                return t;
            }
            function U(e) {
                return e.map((e) => e.reactComponents).filter((e) => !!e);
            }
            var Y = n(74313);
            let z = /^\s*$/,
                Q = [
                    [/^\s`/, /^[^\s]`/, "`"],
                    [/^\s_/, /^[^\s]_/, "_"],
                    [/^\s\*\*/, /^[^\s]\*\*/, "**"],
                    [/^\s~~/, /^[^\s]~~/, "~~"],
                    [/^\s\*/, /^[^\s]\*/, "*"],
                    [/^\s\[/, /^[^\s]\]/, "](#)"],
                    [/^\]\(/, /^[^\s]\)/, ")"],
                ];
            var q = n(54571);
            let J = T.noFade,
                X = [],
                Z = (0, o.forwardRef)(function (e, t) {
                    let n,
                        l,
                        s,
                        i,
                        c,
                        d,
                        p,
                        h,
                        f,
                        g,
                        y,
                        v,
                        _,
                        x,
                        b,
                        j,
                        R,
                        W,
                        K,
                        J,
                        Z = (0, a.c)(48),
                        {
                            className: ea,
                            markdown: eo,
                            chatMode: el,
                            openLinksInCurrentTab: es,
                            extensions: ei,
                            isStreaming: ec,
                            accessibleHeader: ed,
                            copilotAnnotations: em,
                            wrapCodeLines: eu,
                            onWrapCodeLinesChange: ep,
                        } = e,
                        eh = void 0 === ei ? X : ei,
                        [ef, eg] = (0, o.useState)(ec ?? !1);
                    (Z[0] !== ec
                        ? ((n = () => {
                              if (ec) eg(!0);
                              else {
                                  let e = setTimeout(() => {
                                      eg(!1);
                                  }, 750);
                                  return () => clearTimeout(e);
                              }
                          }),
                          (l = [ec]),
                          (Z[0] = ec),
                          (Z[1] = n),
                          (Z[2] = l))
                        : ((n = Z[1]), (l = Z[2])),
                        (0, o.useEffect)(n, l),
                        Z[3] === Symbol.for("react.memo_cache_sentinel")
                            ? ((s = {
                                  transformMarkdown: (e) =>
                                      (0, C.YR)(e, "code", (e) => {
                                          e.data = {
                                              ...e.data,
                                              hName: "code",
                                              hProperties: {
                                                  [k]: JSON.stringify({
                                                      language: e.lang ?? "",
                                                      code: e.value,
                                                      startOffset:
                                                          e.position?.start
                                                              .offset ?? -1,
                                                      endOffset:
                                                          e.position?.end
                                                              .offset ?? -1,
                                                  }),
                                              },
                                          };
                                      }),
                                  transformHtml: (e) =>
                                      (0, C.YR)(e, "element", (e, t, n) => {
                                          let r = e.children?.[0];
                                          n &&
                                              void 0 !== t &&
                                              "pre" === e.tagName &&
                                              e.children?.length === 1 &&
                                              r?.type === "element" &&
                                              "code" === r.tagName &&
                                              k in r.properties &&
                                              n.children.splice(t, 1, r);
                                      }),
                                  reactComponents: N,
                              }),
                              (i = {
                                  transformMarkdown: (
                                      ({
                                          displayDelimiters: e = L,
                                          inlineDelimiters: t = S,
                                          codeBlockLanguages: n = B,
                                      } = {}) =>
                                      (r) => {
                                          (((e) => {
                                              let t = e.map(
                                                  ({ open: e, close: t }) =>
                                                      RegExp(
                                                          `(?:^|\\n) *${e.source}((?:
|.)+?)${t.source}(?= *(?:\\n|$))`,
                                                          "g"
                                                      )
                                              );
                                              return (e) =>
                                                  (0, I.T)(
                                                      e,
                                                      t.map((e) => [
                                                          e,
                                                          (e, t) => M(t),
                                                      ])
                                                  );
                                          })(e)(r),
                                              ((e) =>
                                                  (0, C.YR)(
                                                      e,
                                                      "code",
                                                      (e, t, r) => {
                                                          e.lang &&
                                                              n.has(e.lang) &&
                                                              r &&
                                                              void 0 !== t &&
                                                              r.children.splice(
                                                                  t,
                                                                  1,
                                                                  M(e.value)
                                                              );
                                                      }
                                                  ))(r),
                                              ((e) => {
                                                  let t = e.map(
                                                      ({ open: e, close: t }) =>
                                                          RegExp(
                                                              `(?:^|[^a-z0-9])(?=${e.source})${e.source}(.+?)${t.source}(?![a-z0-9])`,
                                                              "g"
                                                          )
                                                  );
                                                  return (e) =>
                                                      (0, I.T)(
                                                          e,
                                                          t.map((e) => [
                                                              e,
                                                              (e, t) => {
                                                                  var n;
                                                                  return {
                                                                      type: "inlinemath",
                                                                      value: (n =
                                                                          t),
                                                                      data: {
                                                                          hName: "math-renderer",
                                                                          hProperties:
                                                                              {
                                                                                  className:
                                                                                      "js-inline-math",
                                                                                  style: "display: inline-block;",
                                                                              },
                                                                          hChildren:
                                                                              [
                                                                                  {
                                                                                      type: "text",
                                                                                      value: n,
                                                                                  },
                                                                              ],
                                                                      },
                                                                  };
                                                              },
                                                          ])
                                                      );
                                              })(t)(r));
                                      }
                                  )(O),
                                  reactComponents: D,
                              }),
                              (Z[3] = s),
                              (Z[4] = i))
                            : ((s = Z[3]), (i = Z[4])),
                        Z[5] !== es
                            ? ((c = (function ({ openLinksInCurrentTab: e }) {
                                  return {
                                      transformHtml: e ? void 0 : E,
                                  };
                              })({
                                  openLinksInCurrentTab: es,
                              })),
                              (Z[5] = es),
                              (Z[6] = c))
                            : (c = Z[6]),
                        Z[7] !== ef
                            ? ((d = (function ({ isStreaming: e }) {
                                  return e
                                      ? {
                                            preprocessMarkdown: (
                                                e
                                            ) => `${(function (e) {
                                                let t = new Set();
                                                for (
                                                    let n = -1,
                                                        r = ` ${e.slice(0, 2)}`;
                                                    n <= e.length - 3;
                                                    n++, r = e.slice(n, n + 3)
                                                )
                                                    for (let [e, n, a] of Q)
                                                        if (
                                                            !t.has(a) &&
                                                            e.test(r)
                                                        ) {
                                                            t.add(a);
                                                            break;
                                                        } else if (
                                                            t.has(a) &&
                                                            n.test(r)
                                                        ) {
                                                            t.delete(a);
                                                            break;
                                                        }
                                                for (let n of Array.from(
                                                    t
                                                ).reverse())
                                                    e += n;
                                                return e;
                                            })(e)}
\uE000`,
                                            transformMarkdown: (e) =>
                                                (0, w.VG)(e, (e, t) => {
                                                    if (
                                                        "value" in e &&
                                                        e.value?.includes(
                                                            "\uE000"
                                                        )
                                                    )
                                                        for (let n of ((e.value =
                                                            e.value.replace(
                                                                "\uE000",
                                                                ""
                                                            )),
                                                        (e.isStreaming = !0),
                                                        t))
                                                            n.isStreaming = !0;
                                                }),
                                            transformHtml: (e) =>
                                                (0, C.YR)(
                                                    e,
                                                    "text",
                                                    (e, t, n) => {
                                                        if (
                                                            void 0 === n ||
                                                            void 0 === t ||
                                                            z.test(e.value)
                                                        )
                                                            return;
                                                        let r = e.value
                                                            .split(" ")
                                                            .map(
                                                                (
                                                                    e,
                                                                    t,
                                                                    {
                                                                        length: n,
                                                                    }
                                                                ) => {
                                                                    let r =
                                                                        t <
                                                                        n - 1
                                                                            ? `${e} `
                                                                            : e;
                                                                    return z.test(
                                                                        r
                                                                    )
                                                                        ? {
                                                                              type: "text",
                                                                              value: r,
                                                                          }
                                                                        : (0,
                                                                          Y.h)(
                                                                              "span",
                                                                              r
                                                                          );
                                                                }
                                                            );
                                                        return (
                                                            n.children.splice(
                                                                t,
                                                                1,
                                                                ...r
                                                            ),
                                                            t + r.length
                                                        );
                                                    }
                                                ),
                                        }
                                      : {};
                              })({
                                  isStreaming: ef,
                              })),
                              (Z[7] = ef),
                              (Z[8] = d))
                            : (d = Z[8]),
                        Z[9] === Symbol.for("react.memo_cache_sentinel")
                            ? ((p = {
                                  transformHtml: $,
                              }),
                              (Z[9] = p))
                            : (p = Z[9]),
                        Z[10] !== eh || Z[11] !== c || Z[12] !== d
                            ? ((h = [s, i, c, d, p, ...eh]),
                              (Z[10] = eh),
                              (Z[11] = c),
                              (Z[12] = d),
                              (Z[13] = h))
                            : (h = Z[13]));
                    let ey = h;
                    Z[14] !== ey
                        ? ((f = [F.A, ...ey.map(G).filter(ee)]),
                          (Z[14] = ey),
                          (Z[15] = f))
                        : (f = Z[15]);
                    let ev = f;
                    (Z[16] !== ey
                        ? ((g = () => [
                              [
                                  H.A,
                                  {
                                      languages: P.l,
                                  },
                              ],
                              ...ey.map(et).filter(en),
                          ]),
                          (Z[16] = ey),
                          (Z[17] = g))
                        : (g = Z[17]),
                        Z[18] === Symbol.for("react.memo_cache_sentinel")
                            ? ((y = []), (v = []), (Z[18] = y), (Z[19] = v))
                            : ((y = Z[18]), (v = Z[19])));
                    let [e_] = (0, q.I)(g, y, v),
                        ex = (function (e) {
                            let t,
                                n,
                                r,
                                l = (0, a.c)(5);
                            l[0] !== e
                                ? ((t = () => V(U(e))), (l[0] = e), (l[1] = t))
                                : (t = l[1]);
                            let [s, i] = (0, o.useState)(t),
                                c = (0, o.useRef)(e);
                            return (
                                l[2] !== e
                                    ? ((n = () => {
                                          let t = U(c.current),
                                              n = U(e);
                                          c.current = e;
                                          let r = null;
                                          for (let [e, a] of (t.length !==
                                              n.length &&
                                              (r = Error(
                                                  "A `MarkdownRenderer` extension containing a `reactComponents` field was added or removed. React extensions must remain referentially constant."
                                              )),
                                          t.entries()))
                                              a !== n[e] &&
                                                  (r =
                                                      Error(`The \`reactComponents\` field in at least one \`MarkdownRenderer\` extension changed, or extensions containing \`reactComponent\` fields were reordered. React extensions must remain referentially constant.
NOTE: This error may be safely ignored if it occurs due to hot-reloading in local development.`));
                                          r &&
                                              (i(V(n)),
                                              (async () => {
                                                  throw r;
                                              })());
                                      }),
                                      (r = [e]),
                                      (l[2] = e),
                                      (l[3] = n),
                                      (l[4] = r))
                                    : ((n = l[3]), (r = l[4])),
                                (0, o.useEffect)(n, r),
                                s
                            );
                        })(ey);
                    Z[20] !== ey || Z[21] !== eo
                        ? ((_ = ey.reduce(er, eo)),
                          (Z[20] = ey),
                          (Z[21] = eo),
                          (Z[22] = _))
                        : (_ = Z[22]);
                    let eC = _;
                    Z[23] !== el ||
                    Z[24] !== em ||
                    Z[25] !== ec ||
                    Z[26] !== ep ||
                    Z[27] !== eu
                        ? ((x = {
                              isStreaming: ec,
                              chatMode: el,
                              copilotAnnotations: em,
                              wrapCodeLines: eu,
                              onWrapCodeLinesChange: ep,
                          }),
                          (Z[23] = el),
                          (Z[24] = em),
                          (Z[25] = ec),
                          (Z[26] = ep),
                          (Z[27] = eu),
                          (Z[28] = x))
                        : (x = Z[28]);
                    let eb = x;
                    Z[29] !== ed
                        ? ((b =
                              ed &&
                              (0, r.jsx)("h3", {
                                  className: "sr-only",
                                  children: ed,
                              })),
                          (Z[29] = ed),
                          (Z[30] = b))
                        : (b = Z[30]);
                    let ek = ef && T.fadeInContent;
                    return (
                        Z[31] !== ea || Z[32] !== ek
                            ? ((j = (0, u.$)(
                                  "markdown-body",
                                  T.container,
                                  ea,
                                  ek
                              )),
                              (Z[31] = ea),
                              (Z[32] = ek),
                              (Z[33] = j))
                            : (j = Z[33]),
                        Z[34] === Symbol.for("react.memo_cache_sentinel")
                            ? ((R = {
                                  "--MarkdownRenderer_streaming-fade-duration":
                                      "750ms",
                              }),
                              (Z[34] = R))
                            : (R = Z[34]),
                        Z[35] !== ex ||
                        Z[36] !== eC ||
                        Z[37] !== e_ ||
                        Z[38] !== ev
                            ? ((W = (0, r.jsx)(A.o, {
                                  remarkPlugins: ev,
                                  rehypePlugins: e_,
                                  components: ex,
                                  children: eC,
                              })),
                              (Z[35] = ex),
                              (Z[36] = eC),
                              (Z[37] = e_),
                              (Z[38] = ev),
                              (Z[39] = W))
                            : (W = Z[39]),
                        Z[40] !== t || Z[41] !== j || Z[42] !== W
                            ? ((K = (0, r.jsx)("div", {
                                  ref: t,
                                  className: j,
                                  style: R,
                                  "data-copilot-markdown": !0,
                                  children: W,
                              })),
                              (Z[40] = t),
                              (Z[41] = j),
                              (Z[42] = W),
                              (Z[43] = K))
                            : (K = Z[43]),
                        Z[44] !== eb || Z[45] !== b || Z[46] !== K
                            ? ((J = (0, r.jsxs)(m.F.Provider, {
                                  value: eb,
                                  children: [b, K],
                              })),
                              (Z[44] = eb),
                              (Z[45] = b),
                              (Z[46] = K),
                              (Z[47] = J))
                            : (J = Z[47]),
                        J
                    );
                });
            try {
                Z.displayName || (Z.displayName = "MarkdownRenderer");
            } catch {}
            function G(e) {
                return e.transformMarkdown ? () => e.transformMarkdown : void 0;
            }
            function ee(e) {
                return !!e;
            }
            function et(e) {
                return e.transformHtml ? () => e.transformHtml : void 0;
            }
            function en(e) {
                return !!e;
            }
            function er(e, t) {
                return t.preprocessMarkdown?.(e) ?? e;
            }
        },
        22072: (e, t, n) => {
            n.d(t, {
                t: () => f,
            });
            var r = n(74848),
                a = n(21728),
                o = n(15220),
                l = n(38621),
                s = n(5524),
                i = n(77430);
            let c = {
                summary: "AnnotationsList-module__summary--s4Hbl",
                summaryText: "AnnotationsList-module__summaryText--fuV8i",
                chevron: "AnnotationsList-module__chevron--bQbqF",
                items: "AnnotationsList-module__items--bRsb6",
            };
            function d(e) {
                let t,
                    n,
                    o,
                    i,
                    d,
                    m = (0, a.c)(11),
                    { summary: u, icon: p, children: h } = e;
                return (
                    m[0] === Symbol.for("react.memo_cache_sentinel")
                        ? ((t = (0, r.jsx)("span", {
                              className: c.chevron,
                              children: (0, r.jsx)(l.ChevronRightIcon, {
                                  size: "small",
                              }),
                          })),
                          (m[0] = t))
                        : (t = m[0]),
                    m[1] !== u
                        ? ((n = (0, r.jsx)("span", {
                              className: c.summaryText,
                              children: u,
                          })),
                          (m[1] = u),
                          (m[2] = n))
                        : (n = m[2]),
                    m[3] !== p || m[4] !== n
                        ? ((o = (0, r.jsxs)("summary", {
                              className: c.summary,
                              children: [t, p, " ", n],
                          })),
                          (m[3] = p),
                          (m[4] = n),
                          (m[5] = o))
                        : (o = m[5]),
                    m[6] !== h
                        ? ((i = (0, r.jsx)("div", {
                              className: c.items,
                              children: (0, r.jsx)(s.l, {
                                  variant: "full",
                                  children: h,
                              }),
                          })),
                          (m[6] = h),
                          (m[7] = i))
                        : (i = m[7]),
                    m[8] !== o || m[9] !== i
                        ? ((d = (0, r.jsxs)("details", {
                              children: [o, i],
                          })),
                          (m[8] = o),
                          (m[9] = i),
                          (m[10] = d))
                        : (d = m[10]),
                    d
                );
            }
            try {
                d.displayName || (d.displayName = "AnnotationsList");
            } catch {}
            function m(e) {
                let t,
                    n = (0, a.c)(3),
                    { references: o } = e;
                if (n[0] !== o) {
                    let e,
                        a = (function (e) {
                            let t = new Map();
                            for (let n of e) {
                                let e = (function (e) {
                                    let t =
                                        /^https?:\/\/github\.com\/([^/]+)\/([^/]+)/.exec(
                                            e
                                        );
                                    return t && t[1] && t[2]
                                        ? {
                                              owner: t[1],
                                              name: t[2],
                                          }
                                        : null;
                                })(n.sourceURL);
                                if (!e) continue;
                                let { owner: r, name: a } = e;
                                t.set(a, {
                                    name: a,
                                    owner: r,
                                    url: `https://github.com/${r}/${a}`,
                                    license:
                                        "NOASSERTION" === n.license
                                            ? null
                                            : n.license,
                                });
                            }
                            return Array.from(t.values()).sort((e, t) =>
                                e.name.localeCompare(t.name)
                            );
                        })(o);
                    (n[2] === Symbol.for("react.memo_cache_sentinel")
                        ? ((e = (0, r.jsx)("span", {
                              style: {
                                  color: "var(--fgColor-muted)",
                              },
                              children: (0, r.jsx)(l.LawIcon, {}),
                          })),
                          (n[2] = e))
                        : (e = n[2]),
                        (t = (0, r.jsx)(d, {
                            icon: e,
                            summary: `Public code references from ${a.length} ${1 === a.length ? "repository" : "repositories"}`,
                            children: a.map(u),
                        })),
                        (n[0] = o),
                        (n[1] = t));
                } else t = n[1];
                return t;
            }
            function u(e) {
                return (0, r.jsxs)(
                    s.l.LinkItem,
                    {
                        href: e.url,
                        tabIndex: void 0,
                        children: [
                            (0, r.jsx)(s.l.LeadingVisual, {
                                children: (0, r.jsx)(i.r, {
                                    src: `https://github.com/${e.owner}.png`,
                                    alt: `@${e.owner} avatar`,
                                    size: 20,
                                }),
                            }),
                            e.owner,
                            "/",
                            e.name,
                            (0, r.jsx)(s.l.Description, {
                                children: e.license
                                    ? `${e.license} license`
                                    : "No license",
                            }),
                        ],
                    },
                    e.name
                );
            }
            try {
                m.displayName || (m.displayName = "ReferenceAnnotations");
            } catch {}
            function p(e) {
                let t,
                    n,
                    o,
                    s = (0, a.c)(6),
                    { vulnerabilities: i } = e;
                s[0] === Symbol.for("react.memo_cache_sentinel")
                    ? ((t = (0, r.jsx)("span", {
                          style: {
                              color: "var(--fgColor-attention)",
                          },
                          children: (0, r.jsx)(l.AlertIcon, {}),
                      })),
                      (s[0] = t))
                    : (t = s[0]);
                let c = `${i.length} ${1 === i.length ? "vulnerability" : "vulnerabilities"} detected`;
                return (
                    s[1] !== i
                        ? ((n = i.map(h)), (s[1] = i), (s[2] = n))
                        : (n = s[2]),
                    s[3] !== c || s[4] !== n
                        ? ((o = (0, r.jsx)(d, {
                              icon: t,
                              summary: c,
                              children: n,
                          })),
                          (s[3] = c),
                          (s[4] = n),
                          (s[5] = o))
                        : (o = s[5]),
                    o
                );
            }
            function h(e, t) {
                return (0, r.jsxs)(
                    s.l.Item,
                    {
                        children: [
                            e.uiType,
                            (0, r.jsx)(s.l.Description, {
                                variant: "block",
                                children: e.uiDescription,
                            }),
                        ],
                    },
                    t
                );
            }
            try {
                p.displayName || (p.displayName = "VulnerabilityAnnotations");
            } catch {}
            let f = (e) => {
                let t,
                    n,
                    l,
                    s,
                    i = (0, a.c)(10),
                    {
                        publicCodeReferences: c,
                        codeVulnerabilities: d,
                        onClose: u,
                    } = e;
                i[0] !== u
                    ? ((t = () => {
                          u();
                      }),
                      (i[0] = u),
                      (i[1] = t))
                    : (t = i[1]);
                let h = t;
                return (
                    i[2] !== c
                        ? ((n =
                              c &&
                              c.length > 0 &&
                              (0, r.jsx)(m, {
                                  references: c.map(g),
                              })),
                          (i[2] = c),
                          (i[3] = n))
                        : (n = i[3]),
                    i[4] !== d
                        ? ((l =
                              d &&
                              d.length > 0 &&
                              (0, r.jsx)(p, {
                                  vulnerabilities: d.map(y),
                              })),
                          (i[4] = d),
                          (i[5] = l))
                        : (l = i[5]),
                    i[6] !== h || i[7] !== n || i[8] !== l
                        ? ((s = (0, r.jsxs)(o.l, {
                              title: "Code insights",
                              subtitle:
                                  "Find matches across our platform or check for code vulnerabilities.",
                              onClose: h,
                              width: "xlarge",
                              children: [n, l],
                          })),
                          (i[6] = h),
                          (i[7] = n),
                          (i[8] = l),
                          (i[9] = s))
                        : (s = i[9]),
                    s
                );
            };
            try {
                f.displayName || (f.displayName = "CodeInsightsDialog");
            } catch {}
            function g(e) {
                return e.details;
            }
            function y(e) {
                return e.details;
            }
        },
        31339: (e, t, n) => {
            n.d(t, {
                q: () => l,
            });
            var r = n(74848),
                a = n(21728);
            let o = {
                languageDot: "LanguageDot-module__languageDot--O6n2z",
                languageDotCompact:
                    "LanguageDot-module__languageDotCompact--V51gt",
            };
            function l(e) {
                let t,
                    n,
                    l = (0, a.c)(5),
                    { color: s, variant: i } = e;
                l[0] !== s
                    ? ((t = {
                          backgroundColor: s,
                      }),
                      (l[0] = s),
                      (l[1] = t))
                    : (t = l[1]);
                let c = "compact" === i ? o.languageDotCompact : o.languageDot;
                return (
                    l[2] !== t || l[3] !== c
                        ? ((n = (0, r.jsx)("span", {
                              style: t,
                              className: c,
                          })),
                          (l[2] = t),
                          (l[3] = c),
                          (l[4] = n))
                        : (n = l[4]),
                    n
                );
            }
            try {
                l.displayName || (l.displayName = "LanguageDot");
            } catch {}
        },
        39876: (e, t, n) => {
            n.d(t, {
                R: () => a,
            });
            var r = n(96540);
            function a(e, t, n) {
                let {
                    publicCodeReferences: a = [],
                    codeVulnerabilities: o = [],
                } = (0, r.useMemo)(() => {
                    if (void 0 === t || void 0 === n || !e)
                        return {
                            publicCodeReferences: [],
                            codeVulnerabilities: [],
                        };
                    let { PublicCodeReference: r, CodeVulnerability: a } = e;
                    return {
                        publicCodeReferences: r?.filter(
                            (e) => e.startOffset >= t && e.endOffset <= n
                        ),
                        codeVulnerabilities: a?.filter(
                            (e) => e.startOffset >= t && e.endOffset <= n
                        ),
                    };
                }, [e, t, n]);
                return {
                    publicCodeReferences: a,
                    codeVulnerabilities: o,
                };
            }
        },
        57826: (e, t, n) => {
            n.d(t, {
                F: () => r,
            });
            let r = (0, n(96540).createContext)({});
            try {
                r.displayName || (r.displayName = "ExtensionContext");
            } catch {}
        },
        85094: (e, t, n) => {
            function r(e, t) {
                return t in e && "string" == typeof e[t]
                    ? JSON.parse(e[t])
                    : null;
            }
            n.d(t, {
                F: () => a,
                k: () => r,
            });
            let a = (e) =>
                e.replaceAll(/-\w/g, (e) => e[1]?.toUpperCase() ?? "");
        },
    },
]);
//# sourceMappingURL=packages_copilot-markdown_MarkdownRenderer_tsx-483289588751.js.map
