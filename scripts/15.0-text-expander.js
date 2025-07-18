"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["vendors-node_modules_github_text-expander-element_dist_index_js"],
    {
        81028: () => {
            let Combobox = class Combobox {
                constructor(
                    t,
                    i,
                    {
                        tabInsertsSuggestions: n,
                        defaultFirstOption: s,
                        scrollIntoViewOptions: o,
                    } = {}
                ) {
                    (this.input = t),
                        (this.list = i),
                        (this.tabInsertsSuggestions = null == n || n),
                        (this.defaultFirstOption = null != s && s),
                        (this.scrollIntoViewOptions =
                            null != o
                                ? o
                                : {
                                      block: "nearest",
                                      inline: "nearest",
                                  }),
                        (this.isComposing = !1),
                        i.id ||
                            (i.id = `combobox-${Math.random()
                                .toString()
                                .slice(2, 6)}`),
                        (this.ctrlBindings =
                            !!navigator.userAgent.match(/Macintosh/)),
                        (this.keyboardEventHandler = (t) =>
                            (function (t, i) {
                                if (
                                    !t.shiftKey &&
                                    !t.metaKey &&
                                    !t.altKey &&
                                    (i.ctrlBindings || !t.ctrlKey) &&
                                    !i.isComposing
                                )
                                    switch (t.key) {
                                        case "Enter":
                                            e(i.input, i.list) &&
                                                t.preventDefault();
                                            break;
                                        case "Tab":
                                            i.tabInsertsSuggestions &&
                                                e(i.input, i.list) &&
                                                t.preventDefault();
                                            break;
                                        case "Escape":
                                            i.clearSelection();
                                            break;
                                        case "ArrowDown":
                                            i.navigate(1), t.preventDefault();
                                            break;
                                        case "ArrowUp":
                                            i.navigate(-1), t.preventDefault();
                                            break;
                                        case "n":
                                            i.ctrlBindings &&
                                                t.ctrlKey &&
                                                (i.navigate(1),
                                                t.preventDefault());
                                            break;
                                        case "p":
                                            i.ctrlBindings &&
                                                t.ctrlKey &&
                                                (i.navigate(-1),
                                                t.preventDefault());
                                            break;
                                        default:
                                            if (t.ctrlKey) break;
                                            i.clearSelection();
                                    }
                            })(t, this)),
                        (this.compositionEventHandler = (t) =>
                            (function (t, e) {
                                (e.isComposing = "compositionstart" === t.type),
                                    document.getElementById(
                                        e.input.getAttribute("aria-controls") ||
                                            ""
                                    ) && e.clearSelection();
                            })(t, this)),
                        (this.inputHandler = this.clearSelection.bind(this)),
                        t.setAttribute("role", "combobox"),
                        t.setAttribute("aria-controls", i.id),
                        t.setAttribute("aria-expanded", "false"),
                        t.setAttribute("aria-autocomplete", "list"),
                        t.setAttribute("aria-haspopup", "listbox");
                }
                destroy() {
                    this.clearSelection(),
                        this.stop(),
                        this.input.removeAttribute("role"),
                        this.input.removeAttribute("aria-controls"),
                        this.input.removeAttribute("aria-expanded"),
                        this.input.removeAttribute("aria-autocomplete"),
                        this.input.removeAttribute("aria-haspopup");
                }
                start() {
                    this.input.setAttribute("aria-expanded", "true"),
                        this.input.addEventListener(
                            "compositionstart",
                            this.compositionEventHandler
                        ),
                        this.input.addEventListener(
                            "compositionend",
                            this.compositionEventHandler
                        ),
                        this.input.addEventListener("input", this.inputHandler),
                        this.input.addEventListener(
                            "keydown",
                            this.keyboardEventHandler
                        ),
                        this.list.addEventListener("click", t),
                        this.indicateDefaultOption();
                }
                stop() {
                    this.clearSelection(),
                        this.input.setAttribute("aria-expanded", "false"),
                        this.input.removeEventListener(
                            "compositionstart",
                            this.compositionEventHandler
                        ),
                        this.input.removeEventListener(
                            "compositionend",
                            this.compositionEventHandler
                        ),
                        this.input.removeEventListener(
                            "input",
                            this.inputHandler
                        ),
                        this.input.removeEventListener(
                            "keydown",
                            this.keyboardEventHandler
                        ),
                        this.list.removeEventListener("click", t);
                }
                indicateDefaultOption() {
                    var t;
                    this.defaultFirstOption &&
                        (null ==
                            (t = Array.from(
                                this.list.querySelectorAll(
                                    '[role="option"]:not([aria-disabled="true"])'
                                )
                            ).filter(i)[0]) ||
                            t.setAttribute(
                                "data-combobox-option-default",
                                "true"
                            ));
                }
                navigate(t = 1) {
                    let e = Array.from(
                            this.list.querySelectorAll('[aria-selected="true"]')
                        ).filter(i)[0],
                        n = Array.from(
                            this.list.querySelectorAll('[role="option"]')
                        ).filter(i),
                        s = n.indexOf(e);
                    if (
                        (s === n.length - 1 && 1 === t) ||
                        (0 === s && -1 === t)
                    ) {
                        this.clearSelection(), this.input.focus();
                        return;
                    }
                    let o = 1 === t ? 0 : n.length - 1;
                    if (e && s >= 0) {
                        let e = s + t;
                        e >= 0 && e < n.length && (o = e);
                    }
                    let l = n[o];
                    if (l)
                        for (let t of n)
                            t.removeAttribute("data-combobox-option-default"),
                                l === t
                                    ? (this.input.setAttribute(
                                          "aria-activedescendant",
                                          l.id
                                      ),
                                      l.setAttribute("aria-selected", "true"),
                                      l.dispatchEvent(
                                          new Event("combobox-select", {
                                              bubbles: !0,
                                          })
                                      ),
                                      l.scrollIntoView(
                                          this.scrollIntoViewOptions
                                      ))
                                    : t.removeAttribute("aria-selected");
                }
                clearSelection() {
                    for (let t of (this.input.removeAttribute(
                        "aria-activedescendant"
                    ),
                    this.list.querySelectorAll('[aria-selected="true"]')))
                        t.removeAttribute("aria-selected");
                    this.indicateDefaultOption();
                }
            };
            function t(t) {
                if (!(t.target instanceof Element)) return;
                let e = t.target.closest('[role="option"]');
                if (e) {
                    var i, n;
                    "true" !== e.getAttribute("aria-disabled") &&
                        ((i = e),
                        (n = {
                            event: t,
                        }),
                        i.dispatchEvent(
                            new CustomEvent("combobox-commit", {
                                bubbles: !0,
                                detail: n,
                            })
                        ));
                }
            }
            function e(t, e) {
                let i = e.querySelector(
                    '[aria-selected="true"], [data-combobox-option-default="true"]'
                );
                return (
                    !!i &&
                    ("true" === i.getAttribute("aria-disabled") ||
                        (i.click(), !0))
                );
            }
            function i(t) {
                return (
                    !t.hidden &&
                    !(t instanceof HTMLInputElement && "hidden" === t.type) &&
                    (t.offsetWidth > 0 || t.offsetHeight > 0)
                );
            }
            let n = /\s|\(|\[/;
            let InputStyleCloneUpdateEvent = class InputStyleCloneUpdateEvent extends Event {
                constructor() {
                    super("update");
                }
            };
            let s = new WeakMap();
            let InputStyleClone = class InputStyleClone extends EventTarget {
                #t = new MutationObserver(() => this.#e());
                #i = new ResizeObserver(() => this.#n());
                #s;
                #o = document.createElement("div");
                #l = document.createElement("div");
                static for(t) {
                    let e = s.get(t);
                    return e || ((e = new InputStyleClone(t)), s.set(t, e)), e;
                }
                constructor(t) {
                    super(),
                        (this.#s = new WeakRef(t)),
                        (this.#o.style.position = "absolute"),
                        (this.#o.style.pointerEvents = "none"),
                        this.#o.setAttribute("aria-hidden", "true"),
                        this.#o.appendChild(this.#l),
                        (this.#l.style.pointerEvents = "none"),
                        (this.#l.style.userSelect = "none"),
                        (this.#l.style.overflow = "hidden"),
                        (this.#l.style.display = "block"),
                        (this.#l.style.visibility = "hidden"),
                        t instanceof HTMLTextAreaElement
                            ? ((this.#l.style.whiteSpace = "pre-wrap"),
                              (this.#l.style.wordWrap = "break-word"))
                            : ((this.#l.style.whiteSpace = "nowrap"),
                              (this.#l.style.display = "table-cell"),
                              (this.#l.style.verticalAlign = "middle")),
                        t.after(this.#o),
                        this.#e(),
                        this.#r(),
                        this.#t.observe(t, {
                            attributeFilter: ["style", "dir"],
                        }),
                        this.#i.observe(t),
                        document.addEventListener("scroll", this.#a, {
                            capture: !0,
                        }),
                        window.addEventListener("resize", this.#a, {
                            capture: !0,
                        }),
                        t.addEventListener("input", this.#h, {
                            capture: !0,
                        });
                }
                get element() {
                    return this.#l;
                }
                forceUpdate() {
                    this.#e(), this.#r();
                }
                disconnect() {
                    this.#o?.remove(),
                        this.#t.disconnect(),
                        this.#i.disconnect(),
                        document.removeEventListener("scroll", this.#a, {
                            capture: !0,
                        }),
                        window.removeEventListener("resize", this.#a, {
                            capture: !0,
                        });
                    let t = this.#u;
                    t &&
                        (t.removeEventListener("input", this.#h, {
                            capture: !0,
                        }),
                        s.delete(t));
                }
                get #u() {
                    returnthis.#s?.deref();
                }
                #c(t) {
                    let e = this.#u;
                    return e ? t(e) : this.disconnect();
                }
                #d = 0;
                #p = 0;
                #m() {
                    this.#c((t) => {
                        let e = window.getComputedStyle(t);
                        (this.#l.style.height = e.height),
                            (this.#l.style.width = e.width),
                            t.clientHeight !== this.#l.clientHeight &&
                                (this.#l.style.height = `calc(${e.height} + ${
                                    t.clientHeight - this.#l.clientHeight
                                }px)`),
                            t.clientWidth !== this.#l.clientWidth &&
                                (this.#l.style.width = `calc(${e.width} + ${
                                    t.clientWidth - this.#l.clientWidth
                                }px)`);
                        let i = t.getBoundingClientRect(),
                            n = this.#l.getBoundingClientRect();
                        (this.#d = this.#d + i.left - n.left),
                            (this.#p = this.#p + i.top - n.top),
                            (this.#l.style.transform = `translate(${
                                this.#d
                            }px, ${this.#p}px)`),
                            (this.#l.scrollTop = t.scrollTop),
                            (this.#l.scrollLeft = t.scrollLeft),
                            this.dispatchEvent(
                                new InputStyleCloneUpdateEvent()
                            );
                    });
                }
                #f = !1;
                #n() {
                    this.#f ||
                        ((this.#f = !0),
                        requestAnimationFrame(() => {
                            this.#m(), (this.#f = !1);
                        }));
                }
                #e() {
                    this.#c((t) => {
                        let e = window.getComputedStyle(t);
                        for (let t of o) this.#l.style[t] = e[t];
                        this.#n();
                    });
                }
                #r() {
                    this.#c((t) => {
                        (this.#l.textContent = t.value), this.#m();
                    });
                }
                #h = () => this.#r();
                #a = (t) => {
                    this.#c((e) => {
                        (t.target === document ||
                            t.target === window ||
                            (t.target instanceof Node &&
                                t.target.contains(e))) &&
                            this.#n();
                    });
                };
            };
            let o = [
                "direction",
                "writingMode",
                "unicodeBidi",
                "textOrientation",
                "boxSizing",
                "borderTopWidth",
                "borderRightWidth",
                "borderBottomWidth",
                "borderLeftWidth",
                "borderStyle",
                "paddingTop",
                "paddingRight",
                "paddingBottom",
                "paddingLeft",
                "fontStyle",
                "fontVariant",
                "fontWeight",
                "fontStretch",
                "fontSize",
                "fontSizeAdjust",
                "lineHeight",
                "fontFamily",
                "textAlign",
                "textTransform",
                "textIndent",
                "textDecoration",
                "letterSpacing",
                "wordSpacing",
                "tabSize",
                "MozTabSize",
            ];
            let InputRange = class InputRange {
                #v;
                #b;
                #g;
                constructor(t, e = 0, i = e) {
                    (this.#v = t), (this.#b = e), (this.#g = i);
                }
                static fromSelection(t) {
                    let { selectionStart: e, selectionEnd: i } = t;
                    return new InputRange(t, e ?? void 0, i ?? void 0);
                }
                get collapsed() {
                    return this.startOffset === this.endOffset;
                }
                get commonAncestorContainer() {
                    return this.#v;
                }
                get endContainer() {
                    return this.#v;
                }
                get startContainer() {
                    return this.#v;
                }
                get startOffset() {
                    return this.#b;
                }
                get endOffset() {
                    return this.#g;
                }
                setStartOffset(t) {
                    this.#b = this.#E(t);
                }
                setEndOffset(t) {
                    this.#g = this.#E(t);
                }
                collapse(t = !1) {
                    t
                        ? this.setEndOffset(this.startOffset)
                        : this.setStartOffset(this.endOffset);
                }
                cloneContents() {
                    return this.#x().cloneContents();
                }
                cloneRange() {
                    return new InputRange(
                        this.#v,
                        this.startOffset,
                        this.endOffset
                    );
                }
                getBoundingClientRect() {
                    return this.#x().getBoundingClientRect();
                }
                getClientRects() {
                    return this.#x().getClientRects();
                }
                toString() {
                    return this.#x().toString();
                }
                getStyleClone() {
                    return this.#y;
                }
                get #y() {
                    return InputStyleClone.for(this.#v);
                }
                get #l() {
                    return this.#y;
                }
                #E(t) {
                    return Math.max(0, Math.min(t, this.#v.value.length));
                }
                #x() {
                    let t = document.createRange(),
                        e = this.#l.element.childNodes[0];
                    return (
                        e &&
                            (t.setStart(e, this.startOffset),
                            t.setEnd(e, this.endOffset)),
                        t
                    );
                }
            };
            let l = new WeakMap();
            let TextExpander = class TextExpander {
                constructor(t, e) {
                    (this.expander = t),
                        (this.input = e),
                        (this.combobox = null),
                        (this.menu = null),
                        (this.match = null),
                        (this.justPasted = !1),
                        (this.lookBackIndex = 0),
                        (this.oninput = this.onInput.bind(this)),
                        (this.onpaste = this.onPaste.bind(this)),
                        (this.onkeydown = this.onKeydown.bind(this)),
                        (this.oncommit = this.onCommit.bind(this)),
                        (this.onmousedown = this.onMousedown.bind(this)),
                        (this.onblur = this.onBlur.bind(this)),
                        (this.interactingWithList = !1),
                        e.addEventListener("paste", this.onpaste),
                        e.addEventListener("input", this.oninput),
                        e.addEventListener("keydown", this.onkeydown),
                        e.addEventListener("blur", this.onblur);
                }
                destroy() {
                    this.input.removeEventListener("paste", this.onpaste),
                        this.input.removeEventListener("input", this.oninput),
                        this.input.removeEventListener(
                            "keydown",
                            this.onkeydown
                        ),
                        this.input.removeEventListener("blur", this.onblur);
                }
                dismissMenu() {
                    this.deactivate() &&
                        (this.lookBackIndex =
                            this.input.selectionEnd || this.lookBackIndex);
                }
                activate(t, e) {
                    var i, n;
                    (this.input === document.activeElement ||
                        this.input ===
                            (null ==
                            (n =
                                null == (i = document.activeElement)
                                    ? void 0
                                    : i.shadowRoot)
                                ? void 0
                                : n.activeElement)) &&
                        (this.deactivate(),
                        (this.menu = e),
                        e.id ||
                            (e.id = `text-expander-${Math.floor(
                                1e5 * Math.random()
                            ).toString()}`),
                        this.expander.append(e),
                        (this.combobox = new Combobox(this.input, e)),
                        this.expander.dispatchEvent(
                            new Event("text-expander-activate")
                        ),
                        this.positionMenu(e, t.position),
                        this.combobox.start(),
                        e.addEventListener("combobox-commit", this.oncommit),
                        e.addEventListener("mousedown", this.onmousedown),
                        this.combobox.navigate(1));
                }
                positionMenu(t, e) {
                    let i = new InputRange(
                            this.input,
                            e
                        ).getBoundingClientRect(),
                        n = {
                            left: i.left,
                            top: i.top + i.height,
                        },
                        s = t.getBoundingClientRect(),
                        o = {
                            left: n.left - s.left,
                            top: n.top - s.top,
                        };
                    if (0 !== o.left || 0 !== o.top) {
                        let e = getComputedStyle(t);
                        (t.style.left = e.left
                            ? `calc(${e.left} + ${o.left}px)`
                            : `${o.left}px`),
                            (t.style.top = e.top
                                ? `calc(${e.top} + ${o.top}px)`
                                : `${o.top}px`);
                    }
                }
                deactivate() {
                    let t = this.menu;
                    return (
                        !!t &&
                        !!this.combobox &&
                        (this.expander.dispatchEvent(
                            new Event("text-expander-deactivate")
                        ),
                        (this.menu = null),
                        t.removeEventListener("combobox-commit", this.oncommit),
                        t.removeEventListener("mousedown", this.onmousedown),
                        this.combobox.destroy(),
                        (this.combobox = null),
                        t.remove(),
                        !0)
                    );
                }
                onCommit({ target: t }) {
                    var e;
                    if (!(t instanceof HTMLElement) || !this.combobox) return;
                    let i = this.match;
                    if (!i) return;
                    let n = this.input.value.substring(
                            0,
                            i.position - i.key.length
                        ),
                        s = this.input.value.substring(
                            i.position + i.text.length
                        ),
                        o = {
                            item: t,
                            key: i.key,
                            value: null,
                            continue: !1,
                        };
                    if (
                        !this.expander.dispatchEvent(
                            new CustomEvent("text-expander-value", {
                                cancelable: !0,
                                detail: o,
                            })
                        ) ||
                        !o.value
                    )
                        return;
                    let l =
                        null != (e = this.expander.getAttribute("suffix"))
                            ? e
                            : " ";
                    o.continue && (l = "");
                    let r = `${o.value}${l}`;
                    this.input.value = n + r + s;
                    let a = n.length + r.length;
                    this.deactivate(),
                        this.input.focus({
                            preventScroll: !0,
                        }),
                        (this.input.selectionStart = a),
                        (this.input.selectionEnd = a),
                        o.continue ||
                            ((this.lookBackIndex = a), (this.match = null)),
                        this.expander.dispatchEvent(
                            new CustomEvent("text-expander-committed", {
                                cancelable: !1,
                                detail: {
                                    input: this.input,
                                },
                            })
                        );
                }
                onBlur() {
                    if (this.interactingWithList) {
                        this.interactingWithList = !1;
                        return;
                    }
                    this.deactivate();
                }
                onPaste() {
                    this.justPasted = !0;
                }
                async onInput() {
                    if (this.justPasted) {
                        this.justPasted = !1;
                        return;
                    }
                    let t = this.findMatch();
                    if (t) {
                        this.match = t;
                        let e = await this.notifyProviders(t);
                        if (!this.match) return;
                        e ? this.activate(t, e) : this.deactivate();
                    } else (this.match = null), this.deactivate();
                }
                findMatch() {
                    let t = this.input.selectionEnd || 0,
                        e = this.input.value;
                    for (let { key: i, multiWord: s } of (t <=
                        this.lookBackIndex && (this.lookBackIndex = t - 1),
                    this.expander.keys)) {
                        let o = (function (
                            t,
                            e,
                            i,
                            {
                                multiWord: s,
                                lookBackIndex: o,
                                lastMatchPosition: l,
                            } = {
                                multiWord: !1,
                                lookBackIndex: 0,
                                lastMatchPosition: null,
                            }
                        ) {
                            let r = t.lastIndexOf(e, i - 1);
                            if (-1 === r || r < o) return;
                            if (s) {
                                if (null != l) {
                                    if (l === r) return;
                                    r = l - e.length;
                                }
                                if (
                                    (" " === t[r + 1] &&
                                        i >= r + e.length + 1) ||
                                    t.lastIndexOf(
                                        `
`,
                                        i - 1
                                    ) > r ||
                                    t.lastIndexOf(".", i - 1) > r
                                )
                                    return;
                            } else if (t.lastIndexOf(" ", i - 1) > r) return;
                            let a = t[r - 1];
                            if (!a || n.test(a))
                                return {
                                    text: t.substring(r + e.length, i),
                                    position: r + e.length,
                                };
                        })(e, i, t, {
                            multiWord: s,
                            lookBackIndex: this.lookBackIndex,
                            lastMatchPosition: this.match
                                ? this.match.position
                                : null,
                        });
                        if (o)
                            return {
                                text: o.text,
                                key: i,
                                position: o.position,
                            };
                    }
                }
                async notifyProviders(t) {
                    let e = [],
                        i = new CustomEvent("text-expander-change", {
                            cancelable: !0,
                            detail: {
                                provide: (t) => e.push(t),
                                text: t.text,
                                key: t.key,
                            },
                        });
                    if (this.expander.dispatchEvent(i))
                        return (await Promise.all(e))
                            .filter((t) => t.matched)
                            .map((t) => t.fragment)[0];
                }
                onMousedown() {
                    this.interactingWithList = !0;
                }
                onKeydown(t) {
                    "Escape" === t.key &&
                        ((this.match = null),
                        this.deactivate() &&
                            ((this.lookBackIndex =
                                this.input.selectionEnd || this.lookBackIndex),
                            t.stopImmediatePropagation(),
                            t.preventDefault()));
                }
            };
            let TextExpanderElement = class TextExpanderElement extends HTMLElement {
                get keys() {
                    let t = this.getAttribute("keys"),
                        e = t ? t.split(" ") : [],
                        i = this.getAttribute("multiword"),
                        n = i ? i.split(" ") : [],
                        s = 0 === n.length && this.hasAttribute("multiword");
                    return e.map((t) => ({
                        key: t,
                        multiWord: s || n.includes(t),
                    }));
                }
                set keys(t) {
                    this.setAttribute("keys", t);
                }
                connectedCallback() {
                    let t = this.querySelector('input[type="text"], textarea');
                    if (
                        !(
                            t instanceof HTMLInputElement ||
                            t instanceof HTMLTextAreaElement
                        )
                    )
                        return;
                    let e = new TextExpander(this, t);
                    l.set(this, e);
                }
                disconnectedCallback() {
                    let t = l.get(this);
                    t && (t.destroy(), l.delete(this));
                }
                dismiss() {
                    let t = l.get(this);
                    t && t.dismissMenu();
                }
            };
            window.customElements.get("text-expander") ||
                ((window.TextExpanderElement = TextExpanderElement),
                window.customElements.define(
                    "text-expander",
                    TextExpanderElement
                ));
        },
    },
]);
//# sourceMappingURL=vendors-node_modules_github_text-expander-element_dist_index_js-2e363787e2f5.js.map
