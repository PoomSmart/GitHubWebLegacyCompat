(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    [
        "vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-b1c483",
    ],
    {
        15455: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s,
            });
            var i =
                /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
            let s = (function (e) {
                var t = Object.create(null);
                return function (r) {
                    return void 0 === t[r] && (t[r] = e(r)), t[r];
                };
            })(function (e) {
                return (
                    i.test(e) ||
                    (111 === e.charCodeAt(0) &&
                        110 === e.charCodeAt(1) &&
                        91 > e.charCodeAt(2))
                );
            });
        },
        8887: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i,
            });
            let i = function (e) {
                function t(e, t, i) {
                    var s = t.trim().split(p);
                    t = s;
                    var n = s.length,
                        a = e.length;
                    switch (a) {
                        case 0:
                        case 1:
                            var o = 0;
                            for (e = 0 === a ? "" : e[0] + " "; o < n; ++o)
                                t[o] = r(e, t[o], i).trim();
                            break;
                        default:
                            var c = (o = 0);
                            for (t = []; o < n; ++o)
                                for (var u = 0; u < a; ++u)
                                    t[c++] = r(e[u] + " ", s[o], i).trim();
                    }
                    return t;
                }
                function r(e, t, r) {
                    var i = t.charCodeAt(0);
                    switch ((33 > i && (i = (t = t.trim()).charCodeAt(0)), i)) {
                        case 38:
                            return t.replace(y, "$1" + e.trim());
                        case 58:
                            return e.trim() + t.replace(y, "$1" + e.trim());
                        default:
                            if (0 < +r && 0 < t.indexOf("\f"))
                                return t.replace(
                                    y,
                                    (58 === e.charCodeAt(0) ? "" : "$1") +
                                        e.trim()
                                );
                    }
                    return e + t;
                }
                function i(e, t, r, n) {
                    var a = e + ";",
                        o = 2 * t + 3 * r + 4 * n;
                    if (944 === o) {
                        e = a.indexOf(":", 9) + 1;
                        var c = a.substring(e, a.length - 1).trim();
                        return (
                            (c = a.substring(0, e).trim() + c + ";"),
                            1 === q || (2 === q && s(c, 1))
                                ? "-webkit-" + c + c
                                : c
                        );
                    }
                    if (0 === q || (2 === q && !s(a, 1))) return a;
                    switch (o) {
                        case 1015:
                            return 97 === a.charCodeAt(10)
                                ? "-webkit-" + a + a
                                : a;
                        case 951:
                            return 116 === a.charCodeAt(3)
                                ? "-webkit-" + a + a
                                : a;
                        case 963:
                            return 110 === a.charCodeAt(5)
                                ? "-webkit-" + a + a
                                : a;
                        case 1009:
                            if (100 !== a.charCodeAt(4)) break;
                        case 969:
                        case 942:
                            return "-webkit-" + a + a;
                        case 978:
                            return "-webkit-" + a + "-moz-" + a + a;
                        case 1019:
                        case 983:
                            return (
                                "-webkit-" + a + "-moz-" + a + "-ms-" + a + a
                            );
                        case 883:
                            if (45 === a.charCodeAt(8))
                                return "-webkit-" + a + a;
                            if (0 < a.indexOf("image-set(", 11))
                                return a.replace(S, "$1-webkit-$2") + a;
                            break;
                        case 932:
                            if (45 === a.charCodeAt(4))
                                switch (a.charCodeAt(5)) {
                                    case 103:
                                        return (
                                            "-webkit-box-" +
                                            a.replace("-grow", "") +
                                            "-webkit-" +
                                            a +
                                            "-ms-" +
                                            a.replace("grow", "positive") +
                                            a
                                        );
                                    case 115:
                                        return (
                                            "-webkit-" +
                                            a +
                                            "-ms-" +
                                            a.replace("shrink", "negative") +
                                            a
                                        );
                                    case 98:
                                        return (
                                            "-webkit-" +
                                            a +
                                            "-ms-" +
                                            a.replace(
                                                "basis",
                                                "preferred-size"
                                            ) +
                                            a
                                        );
                                }
                            return "-webkit-" + a + "-ms-" + a + a;
                        case 964:
                            return "-webkit-" + a + "-ms-flex-" + a + a;
                        case 1023:
                            if (99 !== a.charCodeAt(8)) break;
                            return (
                                "-webkit-box-pack" +
                                (c = a
                                    .substring(a.indexOf(":", 15))
                                    .replace("flex-", "")
                                    .replace("space-between", "justify")) +
                                "-webkit-" +
                                a +
                                "-ms-flex-pack" +
                                c +
                                a
                            );
                        case 1005:
                            return f.test(a)
                                ? a.replace(h, ":-webkit-") +
                                      a.replace(h, ":-moz-") +
                                      a
                                : a;
                        case 1e3:
                            switch (
                                ((t =
                                    (c = a.substring(13).trim()).indexOf("-") +
                                    1),
                                c.charCodeAt(0) + c.charCodeAt(t))
                            ) {
                                case 226:
                                    c = a.replace(v, "tb");
                                    break;
                                case 232:
                                    c = a.replace(v, "tb-rl");
                                    break;
                                case 220:
                                    c = a.replace(v, "lr");
                                    break;
                                default:
                                    return a;
                            }
                            return "-webkit-" + a + "-ms-" + c + a;
                        case 1017:
                            if (-1 === a.indexOf("sticky", 9)) break;
                        case 975:
                            switch (
                                ((t = (a = e).length - 10),
                                (o =
                                    (c = (
                                        33 === a.charCodeAt(t)
                                            ? a.substring(0, t)
                                            : a
                                    )
                                        .substring(e.indexOf(":", 7) + 1)
                                        .trim()).charCodeAt(0) +
                                    (0 | c.charCodeAt(7))))
                            ) {
                                case 203:
                                    if (111 > c.charCodeAt(8)) break;
                                case 115:
                                    a = a.replace(c, "-webkit-" + c) + ";" + a;
                                    break;
                                case 207:
                                case 102:
                                    a =
                                        a.replace(
                                            c,
                                            "-webkit-" +
                                                (102 < o ? "inline-" : "") +
                                                "box"
                                        ) +
                                        ";" +
                                        a.replace(c, "-webkit-" + c) +
                                        ";" +
                                        a.replace(c, "-ms-" + c + "box") +
                                        ";" +
                                        a;
                            }
                            return a + ";";
                        case 938:
                            if (45 === a.charCodeAt(5))
                                switch (a.charCodeAt(6)) {
                                    case 105:
                                        return (
                                            (c = a.replace("-items", "")),
                                            "-webkit-" +
                                                a +
                                                "-webkit-box-" +
                                                c +
                                                "-ms-flex-" +
                                                c +
                                                a
                                        );
                                    case 115:
                                        return (
                                            "-webkit-" +
                                            a +
                                            "-ms-flex-item-" +
                                            a.replace(C, "") +
                                            a
                                        );
                                    default:
                                        return (
                                            "-webkit-" +
                                            a +
                                            "-ms-flex-line-pack" +
                                            a
                                                .replace("align-content", "")
                                                .replace(C, "") +
                                            a
                                        );
                                }
                            break;
                        case 973:
                        case 989:
                            if (
                                45 !== a.charCodeAt(3) ||
                                122 === a.charCodeAt(4)
                            )
                                break;
                        case 931:
                        case 953:
                            if (!0 === O.test(e))
                                return 115 ===
                                    (c = e.substring(
                                        e.indexOf(":") + 1
                                    )).charCodeAt(0)
                                    ? i(
                                          e.replace(
                                              "stretch",
                                              "fill-available"
                                          ),
                                          t,
                                          r,
                                          n
                                      ).replace(":fill-available", ":stretch")
                                    : a.replace(c, "-webkit-" + c) +
                                          a.replace(
                                              c,
                                              "-moz-" + c.replace("fill-", "")
                                          ) +
                                          a;
                            break;
                        case 962:
                            if (
                                ((a =
                                    "-webkit-" +
                                    a +
                                    (102 === a.charCodeAt(5)
                                        ? "-ms-" + a
                                        : "") +
                                    a),
                                211 === r + n &&
                                    105 === a.charCodeAt(13) &&
                                    0 < a.indexOf("transform", 10))
                            )
                                return (
                                    a
                                        .substring(0, a.indexOf(";", 27) + 1)
                                        .replace(d, "$1-webkit-$2") + a
                                );
                    }
                    return a;
                }
                function s(e, t) {
                    var r = e.indexOf(1 === t ? ":" : "{"),
                        i = e.substring(0, 3 !== t ? r : 10);
                    return (
                        (r = e.substring(r + 1, e.length - 1)),
                        E(2 !== t ? i : i.replace(k, "$1"), r, t)
                    );
                }
                function n(e, t) {
                    var r = i(
                        t,
                        t.charCodeAt(0),
                        t.charCodeAt(1),
                        t.charCodeAt(2)
                    );
                    return r !== t + ";"
                        ? r.replace(A, " or ($1)").substring(4)
                        : "(" + t + ")";
                }
                function a(e, t, r, i, s, n, a, o, u, l) {
                    for (var h, f = 0, d = t; f < T; ++f)
                        switch (
                            (h = M[f].call(c, e, d, r, i, s, n, a, o, u, l))
                        ) {
                            case void 0:
                            case !1:
                            case !0:
                            case null:
                                break;
                            default:
                                d = h;
                        }
                    if (d !== t) return d;
                }
                function o(e) {
                    return (
                        void 0 !== (e = e.prefix) &&
                            ((E = null),
                            e
                                ? "function" != typeof e
                                    ? (q = 1)
                                    : ((q = 2), (E = e))
                                : (q = 0)),
                        o
                    );
                }
                function c(e, r) {
                    var o = e;
                    if (
                        (33 > o.charCodeAt(0) && (o = o.trim()),
                        (o = [o]),
                        0 < T)
                    ) {
                        var c = a(-1, r, o, o, j, x, 0, 0, 0, 0);
                        void 0 !== c && "string" == typeof c && (r = c);
                    }
                    var h = (function e(r, o, c, h, f) {
                        for (
                            var d,
                                p,
                                y,
                                v,
                                A,
                                C = 0,
                                k = 0,
                                O = 0,
                                S = 0,
                                M = 0,
                                E = 0,
                                D = (y = d = 0),
                                $ = 0,
                                Q = 0,
                                I = 0,
                                G = 0,
                                L = c.length,
                                U = L - 1,
                                z = "",
                                H = "",
                                K = "",
                                _ = "";
                            $ < L;

                        ) {
                            if (
                                ((p = c.charCodeAt($)),
                                $ === U &&
                                    0 !== k + S + O + C &&
                                    (0 !== k && (p = 47 === k ? 10 : 47),
                                    (S = O = C = 0),
                                    L++,
                                    U++),
                                0 === k + S + O + C)
                            ) {
                                if (
                                    $ === U &&
                                    (0 < Q && (z = z.replace(l, "")),
                                    0 < z.trim().length)
                                ) {
                                    switch (p) {
                                        case 32:
                                        case 9:
                                        case 59:
                                        case 13:
                                        case 10:
                                            break;
                                        default:
                                            z += c.charAt($);
                                    }
                                    p = 59;
                                }
                                switch (p) {
                                    case 123:
                                        for (
                                            d = (z = z.trim()).charCodeAt(0),
                                                y = 1,
                                                G = ++$;
                                            $ < L;

                                        ) {
                                            switch ((p = c.charCodeAt($))) {
                                                case 123:
                                                    y++;
                                                    break;
                                                case 125:
                                                    y--;
                                                    break;
                                                case 47:
                                                    switch (
                                                        (p = c.charCodeAt(
                                                            $ + 1
                                                        ))
                                                    ) {
                                                        case 42:
                                                        case 47:
                                                            e: {
                                                                for (
                                                                    D = $ + 1;
                                                                    D < U;
                                                                    ++D
                                                                )
                                                                    switch (
                                                                        c.charCodeAt(
                                                                            D
                                                                        )
                                                                    ) {
                                                                        case 47:
                                                                            if (
                                                                                42 ===
                                                                                    p &&
                                                                                42 ===
                                                                                    c.charCodeAt(
                                                                                        D -
                                                                                            1
                                                                                    ) &&
                                                                                $ +
                                                                                    2 !==
                                                                                    D
                                                                            ) {
                                                                                $ =
                                                                                    D +
                                                                                    1;
                                                                                break e;
                                                                            }
                                                                            break;
                                                                        case 10:
                                                                            if (
                                                                                47 ===
                                                                                p
                                                                            ) {
                                                                                $ =
                                                                                    D +
                                                                                    1;
                                                                                break e;
                                                                            }
                                                                    }
                                                                $ = D;
                                                            }
                                                    }
                                                    break;
                                                case 91:
                                                    p++;
                                                case 40:
                                                    p++;
                                                case 34:
                                                case 39:
                                                    for (
                                                        ;
                                                        $++ < U &&
                                                        c.charCodeAt($) !== p;

                                                    );
                                            }
                                            if (0 === y) break;
                                            $++;
                                        }
                                        if (
                                            ((y = c.substring(G, $)),
                                            0 === d &&
                                                (d = (z = z
                                                    .replace(u, "")
                                                    .trim()).charCodeAt(0)),
                                            64 === d)
                                        ) {
                                            switch (
                                                (0 < Q &&
                                                    (z = z.replace(l, "")),
                                                (p = z.charCodeAt(1)))
                                            ) {
                                                case 100:
                                                case 109:
                                                case 115:
                                                case 45:
                                                    Q = o;
                                                    break;
                                                default:
                                                    Q = F;
                                            }
                                            if (
                                                ((G = (y = e(o, Q, y, p, f + 1))
                                                    .length),
                                                0 < T &&
                                                    ((A = a(
                                                        3,
                                                        y,
                                                        (Q = t(F, z, I)),
                                                        o,
                                                        j,
                                                        x,
                                                        G,
                                                        p,
                                                        f,
                                                        h
                                                    )),
                                                    (z = Q.join("")),
                                                    void 0 !== A &&
                                                        0 ===
                                                            (G = (y = A.trim())
                                                                .length) &&
                                                        ((p = 0), (y = ""))),
                                                0 < G)
                                            )
                                                switch (p) {
                                                    case 115:
                                                        z = z.replace(w, n);
                                                    case 100:
                                                    case 109:
                                                    case 45:
                                                        y = z + "{" + y + "}";
                                                        break;
                                                    case 107:
                                                        (y =
                                                            (z = z.replace(
                                                                m,
                                                                "$1 $2"
                                                            )) +
                                                            "{" +
                                                            y +
                                                            "}"),
                                                            (y =
                                                                1 === q ||
                                                                (2 === q &&
                                                                    s(
                                                                        "@" + y,
                                                                        3
                                                                    ))
                                                                    ? "@-webkit-" +
                                                                      y +
                                                                      "@" +
                                                                      y
                                                                    : "@" + y);
                                                        break;
                                                    default:
                                                        (y = z + y),
                                                            112 === h &&
                                                                ((H += y),
                                                                (y = ""));
                                                }
                                            else y = "";
                                        } else
                                            y = e(o, t(o, z, I), y, h, f + 1);
                                        (K += y),
                                            (y = I = Q = D = d = 0),
                                            (z = ""),
                                            (p = c.charCodeAt(++$));
                                        break;
                                    case 125:
                                    case 59:
                                        if (
                                            1 <
                                            (G = (z = (
                                                0 < Q ? z.replace(l, "") : z
                                            ).trim()).length)
                                        )
                                            switch (
                                                (0 === D &&
                                                    (45 ===
                                                        (d = z.charCodeAt(0)) ||
                                                        (96 < d && 123 > d)) &&
                                                    (G = (z = z.replace(
                                                        " ",
                                                        ":"
                                                    )).length),
                                                0 < T &&
                                                    void 0 !==
                                                        (A = a(
                                                            1,
                                                            z,
                                                            o,
                                                            r,
                                                            j,
                                                            x,
                                                            H.length,
                                                            h,
                                                            f,
                                                            h
                                                        )) &&
                                                    0 ===
                                                        (G = (z = A.trim())
                                                            .length) &&
                                                    (z = "\0\0"),
                                                (d = z.charCodeAt(0)),
                                                (p = z.charCodeAt(1)),
                                                d)
                                            ) {
                                                case 0:
                                                    break;
                                                case 64:
                                                    if (105 === p || 99 === p) {
                                                        _ += z + c.charAt($);
                                                        break;
                                                    }
                                                default:
                                                    58 !==
                                                        z.charCodeAt(G - 1) &&
                                                        (H += i(
                                                            z,
                                                            d,
                                                            p,
                                                            z.charCodeAt(2)
                                                        ));
                                            }
                                        (I = Q = D = d = 0),
                                            (z = ""),
                                            (p = c.charCodeAt(++$));
                                }
                            }
                            switch (p) {
                                case 13:
                                case 10:
                                    47 === k
                                        ? (k = 0)
                                        : 0 === 1 + d &&
                                          107 !== h &&
                                          0 < z.length &&
                                          ((Q = 1), (z += "\0")),
                                        0 < T * R &&
                                            a(
                                                0,
                                                z,
                                                o,
                                                r,
                                                j,
                                                x,
                                                H.length,
                                                h,
                                                f,
                                                h
                                            ),
                                        (x = 1),
                                        j++;
                                    break;
                                case 59:
                                case 125:
                                    if (0 === k + S + O + C) {
                                        x++;
                                        break;
                                    }
                                default:
                                    switch ((x++, (v = c.charAt($)), p)) {
                                        case 9:
                                        case 32:
                                            if (0 === S + C + k)
                                                switch (M) {
                                                    case 44:
                                                    case 58:
                                                    case 9:
                                                    case 32:
                                                        v = "";
                                                        break;
                                                    default:
                                                        32 !== p && (v = " ");
                                                }
                                            break;
                                        case 0:
                                            v = "\\0";
                                            break;
                                        case 12:
                                            v = "\\f";
                                            break;
                                        case 11:
                                            v = "\\v";
                                            break;
                                        case 38:
                                            0 === S + k + C &&
                                                ((Q = I = 1), (v = "\f" + v));
                                            break;
                                        case 108:
                                            if (0 === S + k + C + P && 0 < D)
                                                switch ($ - D) {
                                                    case 2:
                                                        112 === M &&
                                                            58 ===
                                                                c.charCodeAt(
                                                                    $ - 3
                                                                ) &&
                                                            (P = M);
                                                    case 8:
                                                        111 === E && (P = E);
                                                }
                                            break;
                                        case 58:
                                            0 === S + k + C && (D = $);
                                            break;
                                        case 44:
                                            0 === k + O + S + C &&
                                                ((Q = 1), (v += "\r"));
                                            break;
                                        case 34:
                                        case 39:
                                            0 === k &&
                                                (S =
                                                    S === p
                                                        ? 0
                                                        : 0 === S
                                                        ? p
                                                        : S);
                                            break;
                                        case 91:
                                            0 === S + k + O && C++;
                                            break;
                                        case 93:
                                            0 === S + k + O && C--;
                                            break;
                                        case 41:
                                            0 === S + k + C && O--;
                                            break;
                                        case 40:
                                            0 === S + k + C &&
                                                (0 === d &&
                                                    (2 * M + 3 * E == 533 ||
                                                        (d = 1)),
                                                O++);
                                            break;
                                        case 64:
                                            0 === k + O + S + C + D + y &&
                                                (y = 1);
                                            break;
                                        case 42:
                                        case 47:
                                            if (!(0 < S + C + O))
                                                switch (k) {
                                                    case 0:
                                                        switch (
                                                            2 * p +
                                                            3 *
                                                                c.charCodeAt(
                                                                    $ + 1
                                                                )
                                                        ) {
                                                            case 235:
                                                                k = 47;
                                                                break;
                                                            case 220:
                                                                (G = $),
                                                                    (k = 42);
                                                        }
                                                        break;
                                                    case 42:
                                                        47 === p &&
                                                            42 === M &&
                                                            G + 2 !== $ &&
                                                            (33 ===
                                                                c.charCodeAt(
                                                                    G + 2
                                                                ) &&
                                                                (H +=
                                                                    c.substring(
                                                                        G,
                                                                        $ + 1
                                                                    )),
                                                            (v = ""),
                                                            (k = 0));
                                                }
                                    }
                                    0 === k && (z += v);
                            }
                            (E = M), (M = p), $++;
                        }
                        if (0 < (G = H.length)) {
                            if (
                                ((Q = o),
                                0 < T &&
                                    void 0 !==
                                        (A = a(2, H, Q, r, j, x, G, h, f, h)) &&
                                    0 === (H = A).length)
                            )
                                return _ + H + K;
                            if (
                                ((H = Q.join(",") + "{" + H + "}"), 0 != q * P)
                            ) {
                                switch ((2 !== q || s(H, 2) || (P = 0), P)) {
                                    case 111:
                                        H = H.replace(g, ":-moz-$1") + H;
                                        break;
                                    case 112:
                                        H =
                                            H.replace(b, "::-webkit-input-$1") +
                                            H.replace(b, "::-moz-$1") +
                                            H.replace(b, ":-ms-input-$1") +
                                            H;
                                }
                                P = 0;
                            }
                        }
                        return _ + H + K;
                    })(F, o, r, 0, 0);
                    return (
                        0 < T &&
                            void 0 !==
                                (c = a(-2, h, o, o, j, x, h.length, 0, 0, 0)) &&
                            (h = c),
                        (P = 0),
                        (x = j = 1),
                        h
                    );
                }
                var u = /^\0+/g,
                    l = /[\0\r\f]/g,
                    h = /: */g,
                    f = /zoo|gra/,
                    d = /([,: ])(transform)/g,
                    p = /,\r+?/g,
                    y = /([\t\r\n ])*\f?&/g,
                    m = /@(k\w+)\s*(\S*)\s*/,
                    b = /::(place)/g,
                    g = /:(read-only)/g,
                    v = /[svh]\w+-[tblr]{2}/,
                    w = /\(\s*(.*)\s*\)/g,
                    A = /([\s\S]*?);/g,
                    C = /-self|flex-/g,
                    k = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                    O = /stretch|:\s*\w+\-(?:conte|avail)/,
                    S = /([^-])(image-set\()/,
                    x = 1,
                    j = 1,
                    P = 0,
                    q = 1,
                    F = [],
                    M = [],
                    T = 0,
                    E = null,
                    R = 0,
                    D = "";
                return (
                    (c.use = function e(t) {
                        switch (t) {
                            case void 0:
                            case null:
                                T = M.length = 0;
                                break;
                            default:
                                if ("function" == typeof t) M[T++] = t;
                                else if ("object" == typeof t)
                                    for (var r = 0, i = t.length; r < i; ++r)
                                        e(t[r]);
                                else R = 0 | !!t;
                        }
                        return e;
                    }),
                    (c.set = o),
                    void 0 !== e && o(e),
                    c
                );
            };
        },
        17103: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i,
            });
            let i = {
                animationIterationCount: 1,
                borderImageOutset: 1,
                borderImageSlice: 1,
                borderImageWidth: 1,
                boxFlex: 1,
                boxFlexGroup: 1,
                boxOrdinalGroup: 1,
                columnCount: 1,
                columns: 1,
                flex: 1,
                flexGrow: 1,
                flexPositive: 1,
                flexShrink: 1,
                flexNegative: 1,
                flexOrder: 1,
                gridRow: 1,
                gridRowEnd: 1,
                gridRowSpan: 1,
                gridRowStart: 1,
                gridColumn: 1,
                gridColumnEnd: 1,
                gridColumnSpan: 1,
                gridColumnStart: 1,
                msGridRow: 1,
                msGridRowSpan: 1,
                msGridColumn: 1,
                msGridColumnSpan: 1,
                fontWeight: 1,
                lineHeight: 1,
                opacity: 1,
                order: 1,
                orphans: 1,
                tabSize: 1,
                widows: 1,
                zIndex: 1,
                zoom: 1,
                WebkitLineClamp: 1,
                fillOpacity: 1,
                floodOpacity: 1,
                stopOpacity: 1,
                strokeDasharray: 1,
                strokeDashoffset: 1,
                strokeMiterlimit: 1,
                strokeOpacity: 1,
                strokeWidth: 1,
            };
        },
        14744: (e) => {
            "use strict";
            var t = function (e) {
                    var t, i, s;
                    return (
                        !!(t = e) &&
                        "object" == typeof t &&
                        ((i = e),
                        "[object RegExp]" !==
                            (s = Object.prototype.toString.call(i)) &&
                            "[object Date]" !== s &&
                            i.$$typeof !== r)
                    );
                },
                r =
                    "function" == typeof Symbol && Symbol.for
                        ? Symbol.for("react.element")
                        : 60103;
            function i(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e)
                    ? o(Array.isArray(e) ? [] : {}, e, t)
                    : e;
            }
            function s(e, t, r) {
                return e.concat(t).map(function (e) {
                    return i(e, r);
                });
            }
            function n(e) {
                return Object.keys(e).concat(
                    Object.getOwnPropertySymbols
                        ? Object.getOwnPropertySymbols(e).filter(function (t) {
                              return Object.propertyIsEnumerable.call(e, t);
                          })
                        : []
                );
            }
            function a(e, t) {
                try {
                    return t in e;
                } catch (e) {
                    return !1;
                }
            }
            function o(e, r, c) {
                ((c = c || {}).arrayMerge = c.arrayMerge || s),
                    (c.isMergeableObject = c.isMergeableObject || t),
                    (c.cloneUnlessOtherwiseSpecified = i);
                var u,
                    l,
                    h = Array.isArray(r);
                return h !== Array.isArray(e)
                    ? i(r, c)
                    : h
                    ? c.arrayMerge(e, r, c)
                    : ((l = {}),
                      (u = c).isMergeableObject(e) &&
                          n(e).forEach(function (t) {
                              l[t] = i(e[t], u);
                          }),
                      n(r).forEach(function (t) {
                          (a(e, t) &&
                              !(
                                  Object.hasOwnProperty.call(e, t) &&
                                  Object.propertyIsEnumerable.call(e, t)
                              )) ||
                              (a(e, t) && u.isMergeableObject(r[t])
                                  ? (l[t] = (function (e, t) {
                                        if (!t.customMerge) return o;
                                        var r = t.customMerge(e);
                                        return "function" == typeof r ? r : o;
                                    })(t, u)(e[t], r[t], u))
                                  : (l[t] = i(r[t], u)));
                      }),
                      l);
            }
            (o.all = function (e, t) {
                if (!Array.isArray(e))
                    throw Error("first argument should be an array");
                return e.reduce(function (e, r) {
                    return o(e, r, t);
                }, {});
            }),
                (e.exports = o);
        },
        4146: (e, t, r) => {
            "use strict";
            var i = r(44363),
                s = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0,
                },
                n = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0,
                },
                a = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0,
                },
                o = {};
            function c(e) {
                return i.isMemo(e) ? a : o[e.$$typeof] || s;
            }
            (o[i.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
            }),
                (o[i.Memo] = a);
            var u = Object.defineProperty,
                l = Object.getOwnPropertyNames,
                h = Object.getOwnPropertySymbols,
                f = Object.getOwnPropertyDescriptor,
                d = Object.getPrototypeOf,
                p = Object.prototype;
            e.exports = function e(t, r, i) {
                if ("string" != typeof r) {
                    if (p) {
                        var s = d(r);
                        s && s !== p && e(t, s, i);
                    }
                    var a = l(r);
                    h && (a = a.concat(h(r)));
                    for (var o = c(t), y = c(r), m = 0; m < a.length; ++m) {
                        var b = a[m];
                        if (
                            !n[b] &&
                            !(i && i[b]) &&
                            !(y && y[b]) &&
                            !(o && o[b])
                        ) {
                            var g = f(r, b);
                            try {
                                u(t, b, g);
                            } catch (e) {}
                        }
                    }
                }
                return t;
            };
        },
        62383: (e, t, r) => {
            e = r.nmd(e);
            var i,
                s,
                n = "[object Map]",
                a = "[object Promise]",
                o = "[object Set]",
                c = "[object WeakMap]",
                u = "[object DataView]",
                l = /^\[object .+?Constructor\]$/,
                h =
                    "object" == typeof r.g &&
                    r.g &&
                    r.g.Object === Object &&
                    r.g,
                f =
                    "object" == typeof self &&
                    self &&
                    self.Object === Object &&
                    self,
                d = h || f || Function("return this")(),
                p = t && !t.nodeType && t,
                y = p && e && !e.nodeType && e,
                m = y && y.exports === p,
                b = Function.prototype,
                g = Object.prototype,
                v = d["__core-js_shared__"],
                w = (function () {
                    var e = /[^.]+$/.exec(
                        (v && v.keys && v.keys.IE_PROTO) || ""
                    );
                    return e ? "Symbol(src)_1." + e : "";
                })(),
                A = b.toString,
                C = g.hasOwnProperty,
                k = g.toString,
                O = RegExp(
                    "^" +
                        A.call(C)
                            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                            .replace(
                                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                                "$1.*?"
                            ) +
                        "$"
                ),
                S = m ? d.Buffer : void 0,
                x = g.propertyIsEnumerable,
                j = S ? S.isBuffer : void 0,
                P =
                    ((i = Object.keys),
                    (s = Object),
                    function (e) {
                        return i(s(e));
                    }),
                q = L(d, "DataView"),
                F = L(d, "Map"),
                M = L(d, "Promise"),
                T = L(d, "Set"),
                E = L(d, "WeakMap"),
                R = !x.call(
                    {
                        valueOf: 1,
                    },
                    "valueOf"
                ),
                D = z(q),
                $ = z(F),
                Q = z(M),
                I = z(T),
                G = z(E);
            function L(e, t) {
                var r,
                    i = null == e ? void 0 : e[t];
                return !(!W(i) || ((r = i), w && w in r)) &&
                    (N(i) ||
                    (function (e) {
                        var t = !1;
                        if (null != e && "function" != typeof e.toString)
                            try {
                                t = !!(e + "");
                            } catch (e) {}
                        return t;
                    })(i)
                        ? O
                        : l
                    ).test(z(i))
                    ? i
                    : void 0;
            }
            var U = function (e) {
                return k.call(e);
            };
            function z(e) {
                if (null != e) {
                    try {
                        return A.call(e);
                    } catch (e) {}
                    try {
                        return e + "";
                    } catch (e) {}
                }
                return "";
            }
            ((q && U(new q(new ArrayBuffer(1))) != u) ||
                (F && U(new F()) != n) ||
                (M && U(M.resolve()) != a) ||
                (T && U(new T()) != o) ||
                (E && U(new E()) != c)) &&
                (U = function (e) {
                    var t = k.call(e),
                        r = "[object Object]" == t ? e.constructor : void 0,
                        i = r ? z(r) : void 0;
                    if (i)
                        switch (i) {
                            case D:
                                return u;
                            case $:
                                return n;
                            case Q:
                                return a;
                            case I:
                                return o;
                            case G:
                                return c;
                        }
                    return t;
                });
            var H = Array.isArray;
            function K(e) {
                var t;
                return (
                    null != e &&
                    "number" == typeof (t = e.length) &&
                    t > -1 &&
                    t % 1 == 0 &&
                    t <= 0x1fffffffffffff &&
                    !N(e)
                );
            }
            var _ =
                j ||
                function () {
                    return !1;
                };
            function N(e) {
                var t = W(e) ? k.call(e) : "";
                return (
                    "[object Function]" == t ||
                    "[object GeneratorFunction]" == t
                );
            }
            function W(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t);
            }
            e.exports = function (e) {
                if (
                    K(e) &&
                    (H(e) ||
                        "string" == typeof e ||
                        "function" == typeof e.splice ||
                        _(e) ||
                        ((r = t = e) &&
                            "object" == typeof r &&
                            K(t) &&
                            C.call(e, "callee") &&
                            (!x.call(e, "callee") ||
                                "[object Arguments]" == k.call(e))))
                )
                    return !e.length;
                var t,
                    r,
                    i,
                    s = U(e);
                if (s == n || s == o) return !e.size;
                if (
                    R ||
                    ((i = e && e.constructor),
                    e === (("function" == typeof i && i.prototype) || g))
                )
                    return !P(e).length;
                for (var a in e) if (C.call(e, a)) return !1;
                return !0;
            };
        },
        61669: (e) => {
            e.exports = function (e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t);
            };
        },
        45228: (e) => {
            "use strict";
            var t = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable;
            e.exports = !(function () {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (
                        ((e[5] = "de"),
                        "5" === Object.getOwnPropertyNames(e)[0])
                    )
                        return !1;
                    for (var t = {}, r = 0; r < 10; r++)
                        t["_" + String.fromCharCode(r)] = r;
                    var i = Object.getOwnPropertyNames(t).map(function (e) {
                        return t[e];
                    });
                    if ("0123456789" !== i.join("")) return !1;
                    var s = {};
                    if (
                        ("abcdefghijklmnopqrst".split("").forEach(function (e) {
                            s[e] = e;
                        }),
                        "abcdefghijklmnopqrst" !==
                            Object.keys(Object.assign({}, s)).join(""))
                    )
                        return !1;
                    return !0;
                } catch (e) {
                    return !1;
                }
            })()
                ? function (e, s) {
                      for (
                          var n,
                              a,
                              o = (function (e) {
                                  if (null == e)
                                      throw TypeError(
                                          "Object.assign cannot be called with null or undefined"
                                      );
                                  return Object(e);
                              })(e),
                              c = 1;
                          c < arguments.length;
                          c++
                      ) {
                          for (var u in (n = Object(arguments[c])))
                              r.call(n, u) && (o[u] = n[u]);
                          if (t) {
                              a = t(n);
                              for (var l = 0; l < a.length; l++)
                                  i.call(n, a[l]) && (o[a[l]] = n[a[l]]);
                          }
                      }
                      return o;
                  }
                : Object.assign;
        },
        22799: (e, t) => {
            "use strict";
            var r,
                i = Symbol.for("react.element"),
                s = Symbol.for("react.portal"),
                n = Symbol.for("react.fragment"),
                a = Symbol.for("react.strict_mode"),
                o = Symbol.for("react.profiler"),
                c = Symbol.for("react.provider"),
                u = Symbol.for("react.context"),
                l = Symbol.for("react.server_context"),
                h = Symbol.for("react.forward_ref"),
                f = Symbol.for("react.suspense"),
                d = Symbol.for("react.suspense_list"),
                p = Symbol.for("react.memo"),
                y = Symbol.for("react.lazy"),
                m = Symbol.for("react.offscreen");
            function b(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case i:
                            switch ((e = e.type)) {
                                case n:
                                case o:
                                case a:
                                case f:
                                case d:
                                    return e;
                                default:
                                    switch ((e = e && e.$$typeof)) {
                                        case l:
                                        case u:
                                        case h:
                                        case y:
                                        case p:
                                        case c:
                                            return e;
                                        default:
                                            return t;
                                    }
                            }
                        case s:
                            return t;
                    }
                }
            }
            (r = Symbol.for("react.module.reference")),
                (t.ContextConsumer = u),
                (t.ContextProvider = c),
                (t.Element = i),
                (t.ForwardRef = h),
                (t.Fragment = n),
                (t.Lazy = y),
                (t.Memo = p),
                (t.Portal = s),
                (t.Profiler = o),
                (t.StrictMode = a),
                (t.Suspense = f),
                (t.SuspenseList = d),
                (t.isAsyncMode = function () {
                    return !1;
                }),
                (t.isConcurrentMode = function () {
                    return !1;
                }),
                (t.isContextConsumer = function (e) {
                    return b(e) === u;
                }),
                (t.isContextProvider = function (e) {
                    return b(e) === c;
                }),
                (t.isElement = function (e) {
                    return (
                        "object" == typeof e && null !== e && e.$$typeof === i
                    );
                }),
                (t.isForwardRef = function (e) {
                    return b(e) === h;
                }),
                (t.isFragment = function (e) {
                    return b(e) === n;
                }),
                (t.isLazy = function (e) {
                    return b(e) === y;
                }),
                (t.isMemo = function (e) {
                    return b(e) === p;
                }),
                (t.isPortal = function (e) {
                    return b(e) === s;
                }),
                (t.isProfiler = function (e) {
                    return b(e) === o;
                }),
                (t.isStrictMode = function (e) {
                    return b(e) === a;
                }),
                (t.isSuspense = function (e) {
                    return b(e) === f;
                }),
                (t.isSuspenseList = function (e) {
                    return b(e) === d;
                }),
                (t.isValidElementType = function (e) {
                    return (
                        "string" == typeof e ||
                        "function" == typeof e ||
                        e === n ||
                        e === o ||
                        e === a ||
                        e === f ||
                        e === d ||
                        e === m ||
                        ("object" == typeof e &&
                            null !== e &&
                            (e.$$typeof === y ||
                                e.$$typeof === p ||
                                e.$$typeof === c ||
                                e.$$typeof === u ||
                                e.$$typeof === h ||
                                e.$$typeof === r ||
                                void 0 !== e.getModuleId)) ||
                        !1
                    );
                }),
                (t.typeOf = b);
        },
        44363: (e, t, r) => {
            "use strict";
            e.exports = r(22799);
        },
        2833: (e) => {
            e.exports = function (e, t, r, i) {
                var s = r ? r.call(i, e, t) : void 0;
                if (void 0 !== s) return !!s;
                if (e === t) return !0;
                if ("object" != typeof e || !e || "object" != typeof t || !t)
                    return !1;
                var n = Object.keys(e),
                    a = Object.keys(t);
                if (n.length !== a.length) return !1;
                for (
                    var o = Object.prototype.hasOwnProperty.bind(t), c = 0;
                    c < n.length;
                    c++
                ) {
                    var u = n[c];
                    if (!o(u)) return !1;
                    var l = e[u],
                        h = t[u];
                    if (
                        !1 === (s = r ? r.call(i, l, h, u) : void 0) ||
                        (void 0 === s && l !== h)
                    )
                        return !1;
                }
                return !0;
            };
        },
        57304: (e, t, r) => {
            "use strict";
            r.d(t, {
                G1: () => h.G,
                Il: () => a.I,
                JX: () => y,
                Jt: () => i.Jt,
                NW: () => p.NW,
                Ox: () => p.Ox,
                PQ: () => u.P,
                Tp: () => l.T,
                Vg: () => c.V,
                Vy: () => m,
                XC: () => p.XC,
                Zp: () => s.Z,
                Zz: () => i.Zz,
                i9: () => p.i9,
                iF: () => b,
                pn: () => o.p,
                qU: () => i.qU,
                r7: () => d.r,
                xe: () => f.xe,
                yW: () => n.y,
            });
            var i = r(49236),
                s = r(75447),
                n = r(77638),
                a = r(3962),
                o = r(58523),
                c = r(96069),
                u = r(84995),
                l = r(43581),
                h = r(59756),
                f = r(89165),
                d = r(42049),
                p = r(38144);
            s.A.width, s.A.height, s.A.minWidth, s.A.minHeight;
            var y = s.A.maxWidth,
                m = (s.A.maxHeight, s.A.size, s.A.verticalAlign, s.A.display);
            s.A.overflow,
                s.A.overflowX,
                s.A.overflowY,
                n.A.opacity,
                a.A.fontSize,
                a.A.fontFamily,
                a.A.fontWeight,
                a.A.lineHeight,
                a.A.textAlign,
                a.A.fontStyle,
                a.A.letterSpacing,
                o.A.alignItems,
                o.A.alignContent,
                o.A.justifyItems,
                o.A.justifyContent,
                o.A.flexWrap,
                o.A.flexDirection,
                o.A.flex,
                o.A.flexGrow,
                o.A.flexShrink,
                o.A.flexBasis,
                o.A.justifySelf,
                o.A.alignSelf,
                o.A.order,
                c.A.gridGap,
                c.A.gridColumnGap,
                c.A.gridRowGap,
                c.A.gridColumn,
                c.A.gridRow,
                c.A.gridAutoFlow,
                c.A.gridAutoColumns,
                c.A.gridAutoRows,
                c.A.gridTemplateColumns,
                c.A.gridTemplateRows,
                c.A.gridTemplateAreas,
                c.A.gridArea,
                u.A.borderWidth,
                u.A.borderStyle,
                u.A.borderColor,
                u.A.borderTop,
                u.A.borderRight,
                u.A.borderBottom,
                u.A.borderLeft,
                u.A.borderRadius,
                l.A.backgroundImage,
                l.A.backgroundSize,
                l.A.backgroundPosition,
                l.A.backgroundRepeat,
                h.A.zIndex,
                h.A.top,
                h.A.right,
                h.A.bottom,
                h.A.left;
            var b = function (e) {
                var t = e.prop,
                    r = e.cssProperty,
                    s = e.alias,
                    n = e.key,
                    a = e.transformValue,
                    o = e.scale,
                    c = e.properties,
                    u = {};
                return (
                    (u[t] = (0, i.oK)({
                        properties: c,
                        property: r || t,
                        scale: n,
                        defaultScale: o,
                        transform: a,
                    })),
                    s && (u[s] = u[t]),
                    (0, i.Cp)(u)
                );
            };
        },
        29658: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => n,
            });
            var i = r(66500),
                s = r(24880),
                n = new (class extends i.Q {
                    #e;
                    #t;
                    #r;
                    constructor() {
                        super(),
                            (this.#r = (e) => {
                                if (!s.S$ && window.addEventListener) {
                                    let t = () => e();
                                    return (
                                        window.addEventListener(
                                            "visibilitychange",
                                            t,
                                            !1
                                        ),
                                        () => {
                                            window.removeEventListener(
                                                "visibilitychange",
                                                t
                                            );
                                        }
                                    );
                                }
                            });
                    }
                    onSubscribe() {
                        this.#t || this.setEventListener(this.#r);
                    }
                    onUnsubscribe() {
                        this.hasListeners() ||
                            (this.#t?.(), (this.#t = void 0));
                    }
                    setEventListener(e) {
                        (this.#r = e),
                            this.#t?.(),
                            (this.#t = e((e) => {
                                "boolean" == typeof e
                                    ? this.setFocused(e)
                                    : this.onFocus();
                            }));
                    }
                    setFocused(e) {
                        this.#e !== e && ((this.#e = e), this.onFocus());
                    }
                    onFocus() {
                        let e = this.isFocused();
                        this.listeners.forEach((t) => {
                            t(e);
                        });
                    }
                    isFocused() {
                        return "boolean" == typeof this.#e
                            ? this.#e
                            : globalThis.document?.visibilityState !== "hidden";
                    }
                })();
        },
        58959: (e, t, r) => {
            "use strict";
            r.d(t, {
                PL: () => s,
                RQ: () => c,
                rB: () => o,
            });
            var i = r(24880);
            function s(e) {
                return {
                    onFetch: (t, r) => {
                        let s = t.options,
                            o = t.fetchOptions?.meta?.fetchMore?.direction,
                            c = t.state.data?.pages || [],
                            u = t.state.data?.pageParams || [],
                            l = {
                                pages: [],
                                pageParams: [],
                            },
                            h = 0,
                            f = async () => {
                                let r = !1,
                                    f = (e) => {
                                        Object.defineProperty(e, "signal", {
                                            enumerable: !0,
                                            get: () => (
                                                t.signal.aborted
                                                    ? (r = !0)
                                                    : t.signal.addEventListener(
                                                          "abort",
                                                          () => {
                                                              r = !0;
                                                          }
                                                      ),
                                                t.signal
                                            ),
                                        });
                                    },
                                    d = (0, i.ZM)(t.options, t.fetchOptions),
                                    p = async (e, s, n) => {
                                        if (r) return Promise.reject();
                                        if (null == s && e.pages.length)
                                            return Promise.resolve(e);
                                        let a = {
                                            client: t.client,
                                            queryKey: t.queryKey,
                                            pageParam: s,
                                            direction: n
                                                ? "backward"
                                                : "forward",
                                            meta: t.options.meta,
                                        };
                                        f(a);
                                        let o = await d(a),
                                            { maxPages: c } = t.options,
                                            u = n ? i.ZZ : i.y9;
                                        return {
                                            pages: u(e.pages, o, c),
                                            pageParams: u(e.pageParams, s, c),
                                        };
                                    };
                                if (o && c.length) {
                                    let e = "backward" === o,
                                        t = {
                                            pages: c,
                                            pageParams: u,
                                        },
                                        r = (e ? a : n)(s, t);
                                    l = await p(t, r, e);
                                } else {
                                    let t = e ?? c.length;
                                    do {
                                        let e =
                                            0 === h
                                                ? u[0] ?? s.initialPageParam
                                                : n(s, l);
                                        if (h > 0 && null == e) break;
                                        (l = await p(l, e)), h++;
                                    } while (h < t);
                                }
                                return l;
                            };
                        t.options.persister
                            ? (t.fetchFn = () =>
                                  t.options.persister?.(
                                      f,
                                      {
                                          client: t.client,
                                          queryKey: t.queryKey,
                                          meta: t.options.meta,
                                          signal: t.signal,
                                      },
                                      r
                                  ))
                            : (t.fetchFn = f);
                    },
                };
            }
            function n(e, { pages: t, pageParams: r }) {
                let i = t.length - 1;
                return t.length > 0
                    ? e.getNextPageParam(t[i], t, r[i], r)
                    : void 0;
            }
            function a(e, { pages: t, pageParams: r }) {
                return t.length > 0
                    ? e.getPreviousPageParam?.(t[0], t, r[0], r)
                    : void 0;
            }
            function o(e, t) {
                return !!t && null != n(e, t);
            }
            function c(e, t) {
                return !!t && !!e.getPreviousPageParam && null != a(e, t);
            }
        },
        36158: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => o,
                s: () => a,
            });
            var i = r(26261),
                s = r(71692),
                n = r(58904),
                a = class extends s.k {
                    #i;
                    #s;
                    #n;
                    constructor(e) {
                        super(),
                            (this.mutationId = e.mutationId),
                            (this.#s = e.mutationCache),
                            (this.#i = []),
                            (this.state = e.state || o()),
                            this.setOptions(e.options),
                            this.scheduleGc();
                    }
                    setOptions(e) {
                        (this.options = e),
                            this.updateGcTime(this.options.gcTime);
                    }
                    get meta() {
                        return this.options.meta;
                    }
                    addObserver(e) {
                        this.#i.includes(e) ||
                            (this.#i.push(e),
                            this.clearGcTimeout(),
                            this.#s.notify({
                                type: "observerAdded",
                                mutation: this,
                                observer: e,
                            }));
                    }
                    removeObserver(e) {
                        (this.#i = this.#i.filter((t) => t !== e)),
                            this.scheduleGc(),
                            this.#s.notify({
                                type: "observerRemoved",
                                mutation: this,
                                observer: e,
                            });
                    }
                    optionalRemove() {
                        this.#i.length ||
                            ("pending" === this.state.status
                                ? this.scheduleGc()
                                : this.#s.remove(this));
                    }
                    continue() {
                        return (
                            this.#n?.continue() ??
                            this.execute(this.state.variables)
                        );
                    }
                    async execute(e) {
                        this.#n = (0, n.II)({
                            fn: () =>
                                this.options.mutationFn
                                    ? this.options.mutationFn(e)
                                    : Promise.reject(
                                          Error("No mutationFn found")
                                      ),
                            onFail: (e, t) => {
                                this.#a({
                                    type: "failed",
                                    failureCount: e,
                                    error: t,
                                });
                            },
                            onPause: () => {
                                this.#a({
                                    type: "pause",
                                });
                            },
                            onContinue: () => {
                                this.#a({
                                    type: "continue",
                                });
                            },
                            retry: this.options.retry ?? 0,
                            retryDelay: this.options.retryDelay,
                            networkMode: this.options.networkMode,
                            canRun: () => this.#s.canRun(this),
                        });
                        let t = "pending" === this.state.status,
                            r = !this.#n.canStart();
                        try {
                            if (!t) {
                                this.#a({
                                    type: "pending",
                                    variables: e,
                                    isPaused: r,
                                }),
                                    awaitthis.#s.config.onMutate?.(e, this);
                                let t = awaitthis.options.onMutate?.(e);
                                t !== this.state.context &&
                                    this.#a({
                                        type: "pending",
                                        context: t,
                                        variables: e,
                                        isPaused: r,
                                    });
                            }
                            let i = await this.#n.start();
                            return (
                                awaitthis.#s.config.onSuccess?.(
                                    i,
                                    e,
                                    this.state.context,
                                    this
                                ),
                                awaitthis.options.onSuccess?.(
                                    i,
                                    e,
                                    this.state.context
                                ),
                                awaitthis.#s.config.onSettled?.(
                                    i,
                                    null,
                                    this.state.variables,
                                    this.state.context,
                                    this
                                ),
                                awaitthis.options.onSettled?.(
                                    i,
                                    null,
                                    e,
                                    this.state.context
                                ),
                                this.#a({
                                    type: "success",
                                    data: i,
                                }),
                                i
                            );
                        } catch (t) {
                            try {
                                throw (
                                    (awaitthis.#s.config.onError?.(
                                        t,
                                        e,
                                        this.state.context,
                                        this
                                    ),
                                    awaitthis.options.onError?.(
                                        t,
                                        e,
                                        this.state.context
                                    ),
                                    awaitthis.#s.config.onSettled?.(
                                        void 0,
                                        t,
                                        this.state.variables,
                                        this.state.context,
                                        this
                                    ),
                                    awaitthis.options.onSettled?.(
                                        void 0,
                                        t,
                                        e,
                                        this.state.context
                                    ),
                                    t)
                                );
                            } finally {
                                this.#a({
                                    type: "error",
                                    error: t,
                                });
                            }
                        } finally {
                            this.#s.runNext(this);
                        }
                    }
                    #a(e) {
                        (this.state = ((t) => {
                            switch (e.type) {
                                case "failed":
                                    return {
                                        ...t,
                                        failureCount: e.failureCount,
                                        failureReason: e.error,
                                    };
                                case "pause":
                                    return {
                                        ...t,
                                        isPaused: !0,
                                    };
                                case "continue":
                                    return {
                                        ...t,
                                        isPaused: !1,
                                    };
                                case "pending":
                                    return {
                                        ...t,
                                        context: e.context,
                                        data: void 0,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        isPaused: e.isPaused,
                                        status: "pending",
                                        variables: e.variables,
                                        submittedAt: Date.now(),
                                    };
                                case "success":
                                    return {
                                        ...t,
                                        data: e.data,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        status: "success",
                                        isPaused: !1,
                                    };
                                case "error":
                                    return {
                                        ...t,
                                        data: void 0,
                                        error: e.error,
                                        failureCount: t.failureCount + 1,
                                        failureReason: e.error,
                                        isPaused: !1,
                                        status: "error",
                                    };
                            }
                        })(this.state)),
                            i.jG.batch(() => {
                                this.#i.forEach((t) => {
                                    t.onMutationUpdate(e);
                                }),
                                    this.#s.notify({
                                        mutation: this,
                                        type: "updated",
                                        action: e,
                                    });
                            });
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
        57678: (e, t, r) => {
            "use strict";
            r.d(t, {
                q: () => o,
            });
            var i = r(26261),
                s = r(36158),
                n = r(24880),
                a = r(66500),
                o = class extends a.Q {
                    constructor(e = {}) {
                        super(),
                            (this.config = e),
                            (this.#o = new Set()),
                            (this.#c = new Map()),
                            (this.#u = 0);
                    }
                    #o;
                    #c;
                    #u;
                    build(e, t, r) {
                        let i = new s.s({
                            mutationCache: this,
                            mutationId: ++this.#u,
                            options: e.defaultMutationOptions(t),
                            state: r,
                        });
                        return this.add(i), i;
                    }
                    add(e) {
                        this.#o.add(e);
                        let t = c(e);
                        if ("string" == typeof t) {
                            let r = this.#c.get(t);
                            r ? r.push(e) : this.#c.set(t, [e]);
                        }
                        this.notify({
                            type: "added",
                            mutation: e,
                        });
                    }
                    remove(e) {
                        if (this.#o.delete(e)) {
                            let t = c(e);
                            if ("string" == typeof t) {
                                let r = this.#c.get(t);
                                if (r)
                                    if (r.length > 1) {
                                        let t = r.indexOf(e);
                                        -1 !== t && r.splice(t, 1);
                                    } else r[0] === e && this.#c.delete(t);
                            }
                        }
                        this.notify({
                            type: "removed",
                            mutation: e,
                        });
                    }
                    canRun(e) {
                        let t = c(e);
                        if ("string" != typeof t) return !0;
                        {
                            let r = this.#c.get(t),
                                i = r?.find(
                                    (e) => "pending" === e.state.status
                                );
                            return !i || i === e;
                        }
                    }
                    runNext(e) {
                        let t = c(e);
                        if ("string" != typeof t) return Promise.resolve();
                        {
                            let r = this.#c
                                .get(t)
                                ?.find((t) => t !== e && t.state.isPaused);
                            return r?.continue() ?? Promise.resolve();
                        }
                    }
                    clear() {
                        i.jG.batch(() => {
                            this.#o.forEach((e) => {
                                this.notify({
                                    type: "removed",
                                    mutation: e,
                                });
                            }),
                                this.#o.clear(),
                                this.#c.clear();
                        });
                    }
                    getAll() {
                        return Array.from(this.#o);
                    }
                    find(e) {
                        let t = {
                            exact: !0,
                            ...e,
                        };
                        return this.getAll().find((e) => (0, n.nJ)(t, e));
                    }
                    findAll(e = {}) {
                        return this.getAll().filter((t) => (0, n.nJ)(e, t));
                    }
                    notify(e) {
                        i.jG.batch(() => {
                            this.listeners.forEach((t) => {
                                t(e);
                            });
                        });
                    }
                    resumePausedMutations() {
                        let e = this.getAll().filter((e) => e.state.isPaused);
                        return i.jG.batch(() =>
                            Promise.all(e.map((e) => e.continue().catch(n.lQ)))
                        );
                    }
                };
            function c(e) {
                returne.options.scope?.id;
            }
        },
        26261: (e, t, r) => {
            "use strict";
            r.d(t, {
                jG: () => s,
                x3: () => i,
            });
            var i = (e) => setTimeout(e, 0),
                s = (function () {
                    let e = [],
                        t = 0,
                        r = (e) => {
                            e();
                        },
                        s = (e) => {
                            e();
                        },
                        n = i,
                        a = (i) => {
                            t
                                ? e.push(i)
                                : n(() => {
                                      r(i);
                                  });
                        },
                        o = () => {
                            let t = e;
                            (e = []),
                                t.length &&
                                    n(() => {
                                        s(() => {
                                            t.forEach((e) => {
                                                r(e);
                                            });
                                        });
                                    });
                        };
                    return {
                        batch: (e) => {
                            let r;
                            t++;
                            try {
                                r = e();
                            } finally {
                                --t || o();
                            }
                            return r;
                        },
                        batchCalls:
                            (e) =>
                            (...t) => {
                                a(() => {
                                    e(...t);
                                });
                            },
                        schedule: a,
                        setNotifyFunction: (e) => {
                            r = e;
                        },
                        setBatchNotifyFunction: (e) => {
                            s = e;
                        },
                        setScheduler: (e) => {
                            n = e;
                        },
                    };
                })();
        },
        96035: (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => n,
            });
            var i = r(66500),
                s = r(24880),
                n = new (class extends i.Q {
                    #l = !0;
                    #t;
                    #r;
                    constructor() {
                        super(),
                            (this.#r = (e) => {
                                if (!s.S$ && window.addEventListener) {
                                    let t = () => e(!0),
                                        r = () => e(!1);
                                    return (
                                        window.addEventListener(
                                            "online",
                                            t,
                                            !1
                                        ),
                                        window.addEventListener(
                                            "offline",
                                            r,
                                            !1
                                        ),
                                        () => {
                                            window.removeEventListener(
                                                "online",
                                                t
                                            ),
                                                window.removeEventListener(
                                                    "offline",
                                                    r
                                                );
                                        }
                                    );
                                }
                            });
                    }
                    onSubscribe() {
                        this.#t || this.setEventListener(this.#r);
                    }
                    onUnsubscribe() {
                        this.hasListeners() ||
                            (this.#t?.(), (this.#t = void 0));
                    }
                    setEventListener(e) {
                        (this.#r = e),
                            this.#t?.(),
                            (this.#t = e(this.setOnline.bind(this)));
                    }
                    setOnline(e) {
                        this.#l !== e &&
                            ((this.#l = e),
                            this.listeners.forEach((t) => {
                                t(e);
                            }));
                    }
                    isOnline() {
                        return this.#l;
                    }
                })();
        },
        79757: (e, t, r) => {
            "use strict";
            r.d(t, {
                X: () => o,
                k: () => c,
            });
            var i = r(24880),
                s = r(26261),
                n = r(58904),
                a = r(71692),
                o = class extends a.k {
                    #h;
                    #f;
                    #d;
                    #p;
                    #n;
                    #y;
                    #m;
                    constructor(e) {
                        super(),
                            (this.#m = !1),
                            (this.#y = e.defaultOptions),
                            this.setOptions(e.options),
                            (this.observers = []),
                            (this.#p = e.client),
                            (this.#d = this.#p.getQueryCache()),
                            (this.queryKey = e.queryKey),
                            (this.queryHash = e.queryHash),
                            (this.#h = (function (e) {
                                let t =
                                        "function" == typeof e.initialData
                                            ? e.initialData()
                                            : e.initialData,
                                    r = void 0 !== t,
                                    i = r
                                        ? "function" ==
                                          typeof e.initialDataUpdatedAt
                                            ? e.initialDataUpdatedAt()
                                            : e.initialDataUpdatedAt
                                        : 0;
                                return {
                                    data: t,
                                    dataUpdateCount: 0,
                                    dataUpdatedAt: r ? i ?? Date.now() : 0,
                                    error: null,
                                    errorUpdateCount: 0,
                                    errorUpdatedAt: 0,
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null,
                                    fetchMeta: null,
                                    isInvalidated: !1,
                                    status: r ? "success" : "pending",
                                    fetchStatus: "idle",
                                };
                            })(this.options)),
                            (this.state = e.state ?? this.#h),
                            this.scheduleGc();
                    }
                    get meta() {
                        return this.options.meta;
                    }
                    get promise() {
                        returnthis.#n?.promise;
                    }
                    setOptions(e) {
                        (this.options = {
                            ...this.#y,
                            ...e,
                        }),
                            this.updateGcTime(this.options.gcTime);
                    }
                    optionalRemove() {
                        this.observers.length ||
                            "idle" !== this.state.fetchStatus ||
                            this.#d.remove(this);
                    }
                    setData(e, t) {
                        let r = (0, i.pl)(this.state.data, e, this.options);
                        return (
                            this.#a({
                                data: r,
                                type: "success",
                                dataUpdatedAt: t?.updatedAt,
                                manual: t?.manual,
                            }),
                            r
                        );
                    }
                    setState(e, t) {
                        this.#a({
                            type: "setState",
                            state: e,
                            setStateOptions: t,
                        });
                    }
                    cancel(e) {
                        let t = this.#n?.promise;
                        return (
                            this.#n?.cancel(e),
                            t ? t.then(i.lQ).catch(i.lQ) : Promise.resolve()
                        );
                    }
                    destroy() {
                        super.destroy(),
                            this.cancel({
                                silent: !0,
                            });
                    }
                    reset() {
                        this.destroy(), this.setState(this.#h);
                    }
                    isActive() {
                        return this.observers.some(
                            (e) => !1 !== (0, i.Eh)(e.options.enabled, this)
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
                                      (e) => e.getCurrentResult().isStale
                                  )
                                : void 0 === this.state.data)
                        );
                    }
                    isStaleByTime(e = 0) {
                        return (
                            this.state.isInvalidated ||
                            void 0 === this.state.data ||
                            !(0, i.j3)(this.state.dataUpdatedAt, e)
                        );
                    }
                    onFocus() {
                        let e = this.observers.find((e) =>
                            e.shouldFetchOnWindowFocus()
                        );
                        e?.refetch({
                            cancelRefetch: !1,
                        }),
                            this.#n?.continue();
                    }
                    onOnline() {
                        let e = this.observers.find((e) =>
                            e.shouldFetchOnReconnect()
                        );
                        e?.refetch({
                            cancelRefetch: !1,
                        }),
                            this.#n?.continue();
                    }
                    addObserver(e) {
                        this.observers.includes(e) ||
                            (this.observers.push(e),
                            this.clearGcTimeout(),
                            this.#d.notify({
                                type: "observerAdded",
                                query: this,
                                observer: e,
                            }));
                    }
                    removeObserver(e) {
                        this.observers.includes(e) &&
                            ((this.observers = this.observers.filter(
                                (t) => t !== e
                            )),
                            this.observers.length ||
                                (this.#n &&
                                    (this.#m
                                        ? this.#n.cancel({
                                              revert: !0,
                                          })
                                        : this.#n.cancelRetry()),
                                this.scheduleGc()),
                            this.#d.notify({
                                type: "observerRemoved",
                                query: this,
                                observer: e,
                            }));
                    }
                    getObserversCount() {
                        return this.observers.length;
                    }
                    invalidate() {
                        this.state.isInvalidated ||
                            this.#a({
                                type: "invalidate",
                            });
                    }
                    fetch(e, t) {
                        if ("idle" !== this.state.fetchStatus) {
                            if (void 0 !== this.state.data && t?.cancelRefetch)
                                this.cancel({
                                    silent: !0,
                                });
                            else if (this.#n)
                                return this.#n.continueRetry(), this.#n.promise;
                        }
                        if ((e && this.setOptions(e), !this.options.queryFn)) {
                            let e = this.observers.find(
                                (e) => e.options.queryFn
                            );
                            e && this.setOptions(e.options);
                        }
                        let r = new AbortController(),
                            s = (e) => {
                                Object.defineProperty(e, "signal", {
                                    enumerable: !0,
                                    get: () => ((this.#m = !0), r.signal),
                                });
                            },
                            a = {
                                fetchOptions: t,
                                options: this.options,
                                queryKey: this.queryKey,
                                client: this.#p,
                                state: this.state,
                                fetchFn: () => {
                                    let e = (0, i.ZM)(this.options, t),
                                        r = {
                                            client: this.#p,
                                            queryKey: this.queryKey,
                                            meta: this.meta,
                                        };
                                    return (s(r),
                                    (this.#m = !1),
                                    this.options.persister)
                                        ? this.options.persister(e, r, this)
                                        : e(r);
                                },
                            };
                        s(a),
                            this.options.behavior?.onFetch(a, this),
                            (this.#f = this.state),
                            ("idle" === this.state.fetchStatus ||
                                this.state.fetchMeta !==
                                    a.fetchOptions?.meta) &&
                                this.#a({
                                    type: "fetch",
                                    meta: a.fetchOptions?.meta,
                                });
                        let o = (e) => {
                            ((0, n.wm)(e) && e.silent) ||
                                this.#a({
                                    type: "error",
                                    error: e,
                                }),
                                (0, n.wm)(e) ||
                                    (this.#d.config.onError?.(e, this),
                                    this.#d.config.onSettled?.(
                                        this.state.data,
                                        e,
                                        this
                                    )),
                                this.scheduleGc();
                        };
                        return (
                            (this.#n = (0, n.II)({
                                initialPromise: t?.initialPromise,
                                fn: a.fetchFn,
                                abort: r.abort.bind(r),
                                onSuccess: (e) => {
                                    if (void 0 === e)
                                        return void o(
                                            Error(
                                                `${this.queryHash} data is undefined`
                                            )
                                        );
                                    try {
                                        this.setData(e);
                                    } catch (e) {
                                        o(e);
                                        return;
                                    }
                                    this.#d.config.onSuccess?.(e, this),
                                        this.#d.config.onSettled?.(
                                            e,
                                            this.state.error,
                                            this
                                        ),
                                        this.scheduleGc();
                                },
                                onError: o,
                                onFail: (e, t) => {
                                    this.#a({
                                        type: "failed",
                                        failureCount: e,
                                        error: t,
                                    });
                                },
                                onPause: () => {
                                    this.#a({
                                        type: "pause",
                                    });
                                },
                                onContinue: () => {
                                    this.#a({
                                        type: "continue",
                                    });
                                },
                                retry: a.options.retry,
                                retryDelay: a.options.retryDelay,
                                networkMode: a.options.networkMode,
                                canRun: () => !0,
                            })),
                            this.#n.start()
                        );
                    }
                    #a(e) {
                        (this.state = ((t) => {
                            switch (e.type) {
                                case "failed":
                                    return {
                                        ...t,
                                        fetchFailureCount: e.failureCount,
                                        fetchFailureReason: e.error,
                                    };
                                case "pause":
                                    return {
                                        ...t,
                                        fetchStatus: "paused",
                                    };
                                case "continue":
                                    return {
                                        ...t,
                                        fetchStatus: "fetching",
                                    };
                                case "fetch":
                                    return {
                                        ...t,
                                        ...c(t.data, this.options),
                                        fetchMeta: e.meta ?? null,
                                    };
                                case "success":
                                    return {
                                        ...t,
                                        data: e.data,
                                        dataUpdateCount: t.dataUpdateCount + 1,
                                        dataUpdatedAt:
                                            e.dataUpdatedAt ?? Date.now(),
                                        error: null,
                                        isInvalidated: !1,
                                        status: "success",
                                        ...(!e.manual && {
                                            fetchStatus: "idle",
                                            fetchFailureCount: 0,
                                            fetchFailureReason: null,
                                        }),
                                    };
                                case "error":
                                    let r = e.error;
                                    if ((0, n.wm)(r) && r.revert && this.#f)
                                        return {
                                            ...this.#f,
                                            fetchStatus: "idle",
                                        };
                                    return {
                                        ...t,
                                        error: r,
                                        errorUpdateCount:
                                            t.errorUpdateCount + 1,
                                        errorUpdatedAt: Date.now(),
                                        fetchFailureCount:
                                            t.fetchFailureCount + 1,
                                        fetchFailureReason: r,
                                        fetchStatus: "idle",
                                        status: "error",
                                    };
                                case "invalidate":
                                    return {
                                        ...t,
                                        isInvalidated: !0,
                                    };
                                case "setState":
                                    return {
                                        ...t,
                                        ...e.state,
                                    };
                            }
                        })(this.state)),
                            s.jG.batch(() => {
                                this.observers.forEach((e) => {
                                    e.onQueryUpdate();
                                }),
                                    this.#d.notify({
                                        query: this,
                                        type: "updated",
                                        action: e,
                                    });
                            });
                    }
                };
            function c(e, t) {
                return {
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchStatus: (0, n.v_)(t.networkMode)
                        ? "fetching"
                        : "paused",
                    ...(void 0 === e && {
                        error: null,
                        status: "pending",
                    }),
                };
            }
        },
        2471: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => o,
            });
            var i = r(24880),
                s = r(79757),
                n = r(26261),
                a = r(66500),
                o = class extends a.Q {
                    constructor(e = {}) {
                        super(), (this.config = e), (this.#b = new Map());
                    }
                    #b;
                    build(e, t, r) {
                        let n = t.queryKey,
                            a = t.queryHash ?? (0, i.F$)(n, t),
                            o = this.get(a);
                        return (
                            o ||
                                ((o = new s.X({
                                    client: e,
                                    queryKey: n,
                                    queryHash: a,
                                    options: e.defaultQueryOptions(t),
                                    state: r,
                                    defaultOptions: e.getQueryDefaults(n),
                                })),
                                this.add(o)),
                            o
                        );
                    }
                    add(e) {
                        this.#b.has(e.queryHash) ||
                            (this.#b.set(e.queryHash, e),
                            this.notify({
                                type: "added",
                                query: e,
                            }));
                    }
                    remove(e) {
                        let t = this.#b.get(e.queryHash);
                        t &&
                            (e.destroy(),
                            t === e && this.#b.delete(e.queryHash),
                            this.notify({
                                type: "removed",
                                query: e,
                            }));
                    }
                    clear() {
                        n.jG.batch(() => {
                            this.getAll().forEach((e) => {
                                this.remove(e);
                            });
                        });
                    }
                    get(e) {
                        return this.#b.get(e);
                    }
                    getAll() {
                        return [...this.#b.values()];
                    }
                    find(e) {
                        let t = {
                            exact: !0,
                            ...e,
                        };
                        return this.getAll().find((e) => (0, i.MK)(t, e));
                    }
                    findAll(e = {}) {
                        let t = this.getAll();
                        return Object.keys(e).length > 0
                            ? t.filter((t) => (0, i.MK)(e, t))
                            : t;
                    }
                    notify(e) {
                        n.jG.batch(() => {
                            this.listeners.forEach((t) => {
                                t(e);
                            });
                        });
                    }
                    onFocus() {
                        n.jG.batch(() => {
                            this.getAll().forEach((e) => {
                                e.onFocus();
                            });
                        });
                    }
                    onOnline() {
                        n.jG.batch(() => {
                            this.getAll().forEach((e) => {
                                e.onOnline();
                            });
                        });
                    }
                };
        },
        65490: (e, t, r) => {
            "use strict";
            r.d(t, {
                E: () => l,
            });
            var i = r(24880),
                s = r(2471),
                n = r(57678),
                a = r(29658),
                o = r(96035),
                c = r(26261),
                u = r(58959),
                l = class {
                    #g;
                    #s;
                    #y;
                    #v;
                    #w;
                    #A;
                    #C;
                    #k;
                    constructor(e = {}) {
                        (this.#g = e.queryCache || new s.$()),
                            (this.#s = e.mutationCache || new n.q()),
                            (this.#y = e.defaultOptions || {}),
                            (this.#v = new Map()),
                            (this.#w = new Map()),
                            (this.#A = 0);
                    }
                    mount() {
                        this.#A++,
                            1 === this.#A &&
                                ((this.#C = a.m.subscribe(async (e) => {
                                    e &&
                                        (await this.resumePausedMutations(),
                                        this.#g.onFocus());
                                })),
                                (this.#k = o.t.subscribe(async (e) => {
                                    e &&
                                        (await this.resumePausedMutations(),
                                        this.#g.onOnline());
                                })));
                    }
                    unmount() {
                        this.#A--,
                            0 === this.#A &&
                                (this.#C?.(),
                                (this.#C = void 0),
                                this.#k?.(),
                                (this.#k = void 0));
                    }
                    isFetching(e) {
                        return this.#g.findAll({
                            ...e,
                            fetchStatus: "fetching",
                        }).length;
                    }
                    isMutating(e) {
                        return this.#s.findAll({
                            ...e,
                            status: "pending",
                        }).length;
                    }
                    getQueryData(e) {
                        let t = this.defaultQueryOptions({
                            queryKey: e,
                        });
                        returnthis.#g.get(t.queryHash)?.state.data;
                    }
                    ensureQueryData(e) {
                        let t = this.defaultQueryOptions(e),
                            r = this.#g.build(this, t),
                            s = r.state.data;
                        return void 0 === s
                            ? this.fetchQuery(e)
                            : (e.revalidateIfStale &&
                                  r.isStaleByTime((0, i.d2)(t.staleTime, r)) &&
                                  this.prefetchQuery(t),
                              Promise.resolve(s));
                    }
                    getQueriesData(e) {
                        return this.#g
                            .findAll(e)
                            .map(({ queryKey: e, state: t }) => [e, t.data]);
                    }
                    setQueryData(e, t, r) {
                        let s = this.defaultQueryOptions({
                                queryKey: e,
                            }),
                            n = this.#g.get(s.queryHash),
                            a = n?.state.data,
                            o = (0, i.Zw)(t, a);
                        if (void 0 !== o)
                            return this.#g.build(this, s).setData(o, {
                                ...r,
                                manual: !0,
                            });
                    }
                    setQueriesData(e, t, r) {
                        return c.jG.batch(() =>
                            this.#g
                                .findAll(e)
                                .map(({ queryKey: e }) => [
                                    e,
                                    this.setQueryData(e, t, r),
                                ])
                        );
                    }
                    getQueryState(e) {
                        let t = this.defaultQueryOptions({
                            queryKey: e,
                        });
                        returnthis.#g.get(t.queryHash)?.state;
                    }
                    removeQueries(e) {
                        let t = this.#g;
                        c.jG.batch(() => {
                            t.findAll(e).forEach((e) => {
                                t.remove(e);
                            });
                        });
                    }
                    resetQueries(e, t) {
                        let r = this.#g;
                        return c.jG.batch(
                            () => (
                                r.findAll(e).forEach((e) => {
                                    e.reset();
                                }),
                                this.refetchQueries(
                                    {
                                        type: "active",
                                        ...e,
                                    },
                                    t
                                )
                            )
                        );
                    }
                    cancelQueries(e, t = {}) {
                        let r = {
                            revert: !0,
                            ...t,
                        };
                        return Promise.all(
                            c.jG.batch(() =>
                                this.#g.findAll(e).map((e) => e.cancel(r))
                            )
                        )
                            .then(i.lQ)
                            .catch(i.lQ);
                    }
                    invalidateQueries(e, t = {}) {
                        return c.jG.batch(() =>
                            (this.#g.findAll(e).forEach((e) => {
                                e.invalidate();
                            }),
                            e?.refetchType === "none")
                                ? Promise.resolve()
                                : this.refetchQueries(
                                      {
                                          ...e,
                                          type:
                                              e?.refetchType ??
                                              e?.type ??
                                              "active",
                                      },
                                      t
                                  )
                        );
                    }
                    refetchQueries(e, t = {}) {
                        let r = {
                            ...t,
                            cancelRefetch: t.cancelRefetch ?? !0,
                        };
                        return Promise.all(
                            c.jG.batch(() =>
                                this.#g
                                    .findAll(e)
                                    .filter((e) => !e.isDisabled())
                                    .map((e) => {
                                        let t = e.fetch(void 0, r);
                                        return (
                                            r.throwOnError ||
                                                (t = t.catch(i.lQ)),
                                            "paused" === e.state.fetchStatus
                                                ? Promise.resolve()
                                                : t
                                        );
                                    })
                            )
                        ).then(i.lQ);
                    }
                    fetchQuery(e) {
                        let t = this.defaultQueryOptions(e);
                        void 0 === t.retry && (t.retry = !1);
                        let r = this.#g.build(this, t);
                        return r.isStaleByTime((0, i.d2)(t.staleTime, r))
                            ? r.fetch(t)
                            : Promise.resolve(r.state.data);
                    }
                    prefetchQuery(e) {
                        return this.fetchQuery(e).then(i.lQ).catch(i.lQ);
                    }
                    fetchInfiniteQuery(e) {
                        return (
                            (e.behavior = (0, u.PL)(e.pages)),
                            this.fetchQuery(e)
                        );
                    }
                    prefetchInfiniteQuery(e) {
                        return this.fetchInfiniteQuery(e)
                            .then(i.lQ)
                            .catch(i.lQ);
                    }
                    ensureInfiniteQueryData(e) {
                        return (
                            (e.behavior = (0, u.PL)(e.pages)),
                            this.ensureQueryData(e)
                        );
                    }
                    resumePausedMutations() {
                        return o.t.isOnline()
                            ? this.#s.resumePausedMutations()
                            : Promise.resolve();
                    }
                    getQueryCache() {
                        return this.#g;
                    }
                    getMutationCache() {
                        return this.#s;
                    }
                    getDefaultOptions() {
                        return this.#y;
                    }
                    setDefaultOptions(e) {
                        this.#y = e;
                    }
                    setQueryDefaults(e, t) {
                        this.#v.set((0, i.EN)(e), {
                            queryKey: e,
                            defaultOptions: t,
                        });
                    }
                    getQueryDefaults(e) {
                        let t = [...this.#v.values()],
                            r = {};
                        return (
                            t.forEach((t) => {
                                (0, i.Cp)(e, t.queryKey) &&
                                    Object.assign(r, t.defaultOptions);
                            }),
                            r
                        );
                    }
                    setMutationDefaults(e, t) {
                        this.#w.set((0, i.EN)(e), {
                            mutationKey: e,
                            defaultOptions: t,
                        });
                    }
                    getMutationDefaults(e) {
                        let t = [...this.#w.values()],
                            r = {};
                        return (
                            t.forEach((t) => {
                                (0, i.Cp)(e, t.mutationKey) &&
                                    Object.assign(r, t.defaultOptions);
                            }),
                            r
                        );
                    }
                    defaultQueryOptions(e) {
                        if (e._defaulted) return e;
                        let t = {
                            ...this.#y.queries,
                            ...this.getQueryDefaults(e.queryKey),
                            ...e,
                            _defaulted: !0,
                        };
                        return (
                            t.queryHash ||
                                (t.queryHash = (0, i.F$)(t.queryKey, t)),
                            void 0 === t.refetchOnReconnect &&
                                (t.refetchOnReconnect =
                                    "always" !== t.networkMode),
                            void 0 === t.throwOnError &&
                                (t.throwOnError = !!t.suspense),
                            !t.networkMode &&
                                t.persister &&
                                (t.networkMode = "offlineFirst"),
                            t.queryFn === i.hT && (t.enabled = !1),
                            t
                        );
                    }
                    defaultMutationOptions(e) {
                        return e?._defaulted
                            ? e
                            : {
                                  ...this.#y.mutations,
                                  ...(e?.mutationKey &&
                                      this.getMutationDefaults(e.mutationKey)),
                                  ...e,
                                  _defaulted: !0,
                              };
                    }
                    clear() {
                        this.#g.clear(), this.#s.clear();
                    }
                };
        },
        71692: (e, t, r) => {
            "use strict";
            r.d(t, {
                k: () => s,
            });
            var i = r(24880),
                s = class {
                    #O;
                    destroy() {
                        this.clearGcTimeout();
                    }
                    scheduleGc() {
                        this.clearGcTimeout(),
                            (0, i.gn)(this.gcTime) &&
                                (this.#O = setTimeout(() => {
                                    this.optionalRemove();
                                }, this.gcTime));
                    }
                    updateGcTime(e) {
                        this.gcTime = Math.max(
                            this.gcTime || 0,
                            e ?? (i.S$ ? 1 / 0 : 3e5)
                        );
                    }
                    clearGcTimeout() {
                        this.#O && (clearTimeout(this.#O), (this.#O = void 0));
                    }
                };
        },
        58904: (e, t, r) => {
            "use strict";
            r.d(t, {
                II: () => h,
                cc: () => u,
                v_: () => c,
                wm: () => l,
            });
            var i = r(29658),
                s = r(96035),
                n = r(94658),
                a = r(24880);
            function o(e) {
                return Math.min(1e3 * 2 ** e, 3e4);
            }
            function c(e) {
                return (e ?? "online") !== "online" || s.t.isOnline();
            }
            var u = class extends Error {
                constructor(e) {
                    super("CancelledError"),
                        (this.revert = e?.revert),
                        (this.silent = e?.silent);
                }
            };
            function l(e) {
                return e instanceof u;
            }
            function h(e) {
                let t,
                    r = !1,
                    l = 0,
                    h = !1,
                    f = (0, n.T)(),
                    d = () =>
                        i.m.isFocused() &&
                        ("always" === e.networkMode || s.t.isOnline()) &&
                        e.canRun(),
                    p = () => c(e.networkMode) && e.canRun(),
                    y = (r) => {
                        h || ((h = !0), e.onSuccess?.(r), t?.(), f.resolve(r));
                    },
                    m = (r) => {
                        h || ((h = !0), e.onError?.(r), t?.(), f.reject(r));
                    },
                    b = () =>
                        new Promise((r) => {
                            (t = (e) => {
                                (h || d()) && r(e);
                            }),
                                e.onPause?.();
                        }).then(() => {
                            (t = void 0), h || e.onContinue?.();
                        }),
                    g = () => {
                        let t;
                        if (h) return;
                        let i = 0 === l ? e.initialPromise : void 0;
                        try {
                            t = i ?? e.fn();
                        } catch (e) {
                            t = Promise.reject(e);
                        }
                        Promise.resolve(t)
                            .then(y)
                            .catch((t) => {
                                if (h) return;
                                let i = e.retry ?? 3 * !a.S$,
                                    s = e.retryDelay ?? o,
                                    n = "function" == typeof s ? s(l, t) : s,
                                    c =
                                        !0 === i ||
                                        ("number" == typeof i && l < i) ||
                                        ("function" == typeof i && i(l, t));
                                if (r || !c) return void m(t);
                                l++,
                                    e.onFail?.(l, t),
                                    (0, a.yy)(n)
                                        .then(() => (d() ? void 0 : b()))
                                        .then(() => {
                                            r ? m(t) : g();
                                        });
                            });
                    };
                return {
                    promise: f,
                    cancel: (t) => {
                        h || (m(new u(t)), e.abort?.());
                    },
                    continue: () => (t?.(), f),
                    cancelRetry: () => {
                        r = !0;
                    },
                    continueRetry: () => {
                        r = !1;
                    },
                    canStart: p,
                    start: () => (p() ? g() : b().then(g), f),
                };
            }
        },
        66500: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => i,
            });
            var i = class {
                constructor() {
                    (this.listeners = new Set()),
                        (this.subscribe = this.subscribe.bind(this));
                }
                subscribe(e) {
                    return (
                        this.listeners.add(e),
                        this.onSubscribe(),
                        () => {
                            this.listeners.delete(e), this.onUnsubscribe();
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
        94658: (e, t, r) => {
            "use strict";
            function i() {
                let e,
                    t,
                    r = new Promise((r, i) => {
                        (e = r), (t = i);
                    });
                function i(e) {
                    Object.assign(r, e), delete r.resolve, delete r.reject;
                }
                return (
                    (r.status = "pending"),
                    r.catch(() => {}),
                    (r.resolve = (t) => {
                        i({
                            status: "fulfilled",
                            value: t,
                        }),
                            e(t);
                    }),
                    (r.reject = (e) => {
                        i({
                            status: "rejected",
                            reason: e,
                        }),
                            t(e);
                    }),
                    r
                );
            }
            r.d(t, {
                T: () => i,
            });
        },
        24880: (e, t, r) => {
            "use strict";
            r.d(t, {
                BH: () => y,
                Cp: () => p,
                EN: () => d,
                Eh: () => u,
                F$: () => f,
                MK: () => l,
                S$: () => i,
                ZM: () => x,
                ZZ: () => O,
                Zw: () => n,
                d2: () => c,
                f8: () => m,
                gn: () => a,
                hT: () => S,
                j3: () => o,
                lQ: () => s,
                nJ: () => h,
                pl: () => A,
                rX: () => C,
                y9: () => k,
                yy: () => w,
            });
            var i = "undefined" == typeof window || "Deno" in globalThis;
            function s() {}
            function n(e, t) {
                return "function" == typeof e ? e(t) : e;
            }
            function a(e) {
                return "number" == typeof e && e >= 0 && e !== 1 / 0;
            }
            function o(e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0);
            }
            function c(e, t) {
                return "function" == typeof e ? e(t) : e;
            }
            function u(e, t) {
                return "function" == typeof e ? e(t) : e;
            }
            function l(e, t) {
                let {
                    type: r = "all",
                    exact: i,
                    fetchStatus: s,
                    predicate: n,
                    queryKey: a,
                    stale: o,
                } = e;
                if (a) {
                    if (i) {
                        if (t.queryHash !== f(a, t.options)) return !1;
                    } else if (!p(t.queryKey, a)) return !1;
                }
                if ("all" !== r) {
                    let e = t.isActive();
                    if (("active" === r && !e) || ("inactive" === r && e))
                        return !1;
                }
                return (
                    ("boolean" != typeof o || t.isStale() === o) &&
                    (!s || s === t.state.fetchStatus) &&
                    (!n || !!n(t))
                );
            }
            function h(e, t) {
                let { exact: r, status: i, predicate: s, mutationKey: n } = e;
                if (n) {
                    if (!t.options.mutationKey) return !1;
                    if (r) {
                        if (d(t.options.mutationKey) !== d(n)) return !1;
                    } else if (!p(t.options.mutationKey, n)) return !1;
                }
                return (!i || t.state.status === i) && (!s || !!s(t));
            }
            function f(e, t) {
                return (t?.queryKeyHashFn || d)(e);
            }
            function d(e) {
                return JSON.stringify(e, (e, t) =>
                    g(t)
                        ? Object.keys(t)
                              .sort()
                              .reduce((e, r) => ((e[r] = t[r]), e), {})
                        : t
                );
            }
            function p(e, t) {
                return (
                    e === t ||
                    (typeof e == typeof t &&
                        !!e &&
                        !!t &&
                        "object" == typeof e &&
                        "object" == typeof t &&
                        !Object.keys(t).some((r) => !p(e[r], t[r])))
                );
            }
            function y(e, t) {
                if (e === t) return e;
                let r = b(e) && b(t);
                if (r || (g(e) && g(t))) {
                    let i = r ? e : Object.keys(e),
                        s = i.length,
                        n = r ? t : Object.keys(t),
                        a = n.length,
                        o = r ? [] : {},
                        c = 0;
                    for (let s = 0; s < a; s++) {
                        let a = r ? s : n[s];
                        ((!r && i.includes(a)) || r) &&
                        void 0 === e[a] &&
                        void 0 === t[a]
                            ? ((o[a] = void 0), c++)
                            : ((o[a] = y(e[a], t[a])),
                              o[a] === e[a] && void 0 !== e[a] && c++);
                    }
                    return s === a && c === s ? e : o;
                }
                return t;
            }
            function m(e, t) {
                if (!t || Object.keys(e).length !== Object.keys(t).length)
                    return !1;
                for (let r in e) if (e[r] !== t[r]) return !1;
                return !0;
            }
            function b(e) {
                return Array.isArray(e) && e.length === Object.keys(e).length;
            }
            function g(e) {
                if (!v(e)) return !1;
                let t = e.constructor;
                if (void 0 === t) return !0;
                let r = t.prototype;
                return (
                    !!v(r) &&
                    !!r.hasOwnProperty("isPrototypeOf") &&
                    Object.getPrototypeOf(e) === Object.prototype
                );
            }
            function v(e) {
                return "[object Object]" === Object.prototype.toString.call(e);
            }
            function w(e) {
                return new Promise((t) => {
                    setTimeout(t, e);
                });
            }
            function A(e, t, r) {
                return "function" == typeof r.structuralSharing
                    ? r.structuralSharing(e, t)
                    : !1 !== r.structuralSharing
                    ? y(e, t)
                    : t;
            }
            function C(e) {
                return e;
            }
            function k(e, t, r = 0) {
                let i = [...e, t];
                return r && i.length > r ? i.slice(1) : i;
            }
            function O(e, t, r = 0) {
                let i = [t, ...e];
                return r && i.length > r ? i.slice(0, -1) : i;
            }
            var S = Symbol();
            function x(e, t) {
                return !e.queryFn && t?.initialPromise
                    ? () => t.initialPromise
                    : e.queryFn && e.queryFn !== S
                    ? e.queryFn
                    : () =>
                          Promise.reject(
                              Error(`Missing queryFn: '${e.queryHash}'`)
                          );
            }
        },
        34164: (e, t, r) => {
            "use strict";
            function i() {
                for (var e, t, r = 0, i = "", s = arguments.length; r < s; r++)
                    (e = arguments[r]) &&
                        (t = (function e(t) {
                            var r,
                                i,
                                s = "";
                            if ("string" == typeof t || "number" == typeof t)
                                s += t;
                            else if ("object" == typeof t)
                                if (Array.isArray(t)) {
                                    var n = t.length;
                                    for (r = 0; r < n; r++)
                                        t[r] &&
                                            (i = e(t[r])) &&
                                            (s && (s += " "), (s += i));
                                } else
                                    for (i in t)
                                        t[i] && (s && (s += " "), (s += i));
                            return s;
                        })(e)) &&
                        (i && (i += " "), (i += t));
                return i;
            }
            r.d(t, {
                $: () => i,
                A: () => s,
            });
            let s = i;
        },
    },
]);
//# sourceMappingURL=vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-b1c483-53f522815198.js.map
