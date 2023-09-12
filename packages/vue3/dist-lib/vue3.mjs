import { openBlock as r, createElementBlock as l, createElementVNode as t, renderSlot as _, defineComponent as m, Fragment as z, createVNode as s, withCtx as o, createTextVNode as e } from "vue";
const c = (n, a) => {
  const i = n.__vccOpts || n;
  for (const [d, u] of a)
    i[d] = u;
  return i;
}, v = {}, p = { class: "item" }, f = { class: "details" };
function g(n, a) {
  return r(), l("div", p, [
    t("i", null, [
      _(n.$slots, "icon", {}, void 0, !0)
    ]),
    t("div", f, [
      t("h3", null, [
        _(n.$slots, "heading", {}, void 0, !0)
      ]),
      _(n.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const h = /* @__PURE__ */ c(v, [["render", g], ["__scopeId", "data-v-fd0742eb"]]), w = {}, M = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "17",
  fill: "currentColor"
}, V = /* @__PURE__ */ t("path", { d: "M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z" }, null, -1), b = [
  V
];
function $(n, a) {
  return r(), l("svg", M, b);
}
const H = /* @__PURE__ */ c(w, [["render", $]]), k = {}, C = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "iconify iconify--mdi",
  width: "24",
  height: "24",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
}, y = /* @__PURE__ */ t("path", {
  d: "M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",
  fill: "currentColor"
}, null, -1), x = [
  y
];
function j(n, a) {
  return r(), l("svg", C, x);
}
const L = /* @__PURE__ */ c(k, [["render", j]]), I = {}, A = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "20",
  fill: "currentColor"
}, T = /* @__PURE__ */ t("path", { d: "M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z" }, null, -1), E = [
  T
];
function D(n, a) {
  return r(), l("svg", A, E);
}
const S = /* @__PURE__ */ c(I, [["render", D]]), B = {}, N = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
}, R = /* @__PURE__ */ t("path", { d: "M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z" }, null, -1), W = [
  R
];
function Y(n, a) {
  return r(), l("svg", N, W);
}
const q = /* @__PURE__ */ c(B, [["render", Y]]), G = {}, O = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
}, F = /* @__PURE__ */ t("path", { d: "M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z" }, null, -1), P = [
  F
];
function U(n, a) {
  return r(), l("svg", O, P);
}
const J = /* @__PURE__ */ c(G, [["render", U]]), K = /* @__PURE__ */ t("a", {
  href: "https://vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "official documentation", -1), Q = /* @__PURE__ */ t("a", {
  href: "https://vitejs.dev/guide/features.html",
  target: "_blank",
  rel: "noopener"
}, "Vite", -1), X = /* @__PURE__ */ t("a", {
  href: "https://code.visualstudio.com/",
  target: "_blank",
  rel: "noopener"
}, "VSCode", -1), Z = /* @__PURE__ */ t("a", {
  href: "https://github.com/johnsoncodehk/volar",
  target: "_blank",
  rel: "noopener"
}, "Volar", -1), e1 = /* @__PURE__ */ t("a", {
  href: "https://www.cypress.io/",
  target: "_blank",
  rel: "noopener"
}, "Cypress", -1), t1 = /* @__PURE__ */ t("a", {
  href: "https://on.cypress.io/component",
  target: "_blank"
}, "Cypress Component Testing", -1), o1 = /* @__PURE__ */ t("br", null, null, -1), n1 = /* @__PURE__ */ t("code", null, "README.md", -1), s1 = /* @__PURE__ */ t("a", {
  href: "https://pinia.vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "Pinia", -1), a1 = /* @__PURE__ */ t("a", {
  href: "https://router.vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "Vue Router", -1), r1 = /* @__PURE__ */ t("a", {
  href: "https://test-utils.vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "Vue Test Utils", -1), l1 = /* @__PURE__ */ t("a", {
  href: "https://github.com/vuejs/devtools",
  target: "_blank",
  rel: "noopener"
}, "Vue Dev Tools", -1), c1 = /* @__PURE__ */ t("a", {
  href: "https://github.com/vuejs/awesome-vue",
  target: "_blank",
  rel: "noopener"
}, "Awesome Vue", -1), h1 = /* @__PURE__ */ t("a", {
  href: "https://chat.vuejs.org",
  target: "_blank",
  rel: "noopener"
}, "Vue Land", -1), i1 = /* @__PURE__ */ t("a", {
  href: "https://stackoverflow.com/questions/tagged/vue.js",
  target: "_blank",
  rel: "noopener"
}, "StackOverflow", -1), _1 = /* @__PURE__ */ t("a", {
  href: "https://news.vuejs.org",
  target: "_blank",
  rel: "noopener"
}, "our mailing list", -1), m1 = /* @__PURE__ */ t("a", {
  href: "https://twitter.com/vuejs",
  target: "_blank",
  rel: "noopener"
}, "@vuejs", -1), d1 = /* @__PURE__ */ t("a", {
  href: "https://vuejs.org/sponsor/",
  target: "_blank",
  rel: "noopener"
}, "becoming a sponsor", -1), u1 = /* @__PURE__ */ m({
  __name: "TheWelcome",
  setup(n) {
    return (a, i) => (r(), l(z, null, [
      s(h, null, {
        icon: o(() => [
          s(H)
        ]),
        heading: o(() => [
          e("Documentation")
        ]),
        default: o(() => [
          e(" Vue’s "),
          K,
          e(" provides you with all information you need to get started. ")
        ]),
        _: 1
      }),
      s(h, null, {
        icon: o(() => [
          s(L)
        ]),
        heading: o(() => [
          e("Tooling")
        ]),
        default: o(() => [
          e(" This project is served and bundled with "),
          Q,
          e(". The recommended IDE setup is "),
          X,
          e(" + "),
          Z,
          e(". If you need to test your components and web pages, check out "),
          e1,
          e(" and "),
          t1,
          e(". "),
          o1,
          e(" More instructions are available in "),
          n1,
          e(". ")
        ]),
        _: 1
      }),
      s(h, null, {
        icon: o(() => [
          s(S)
        ]),
        heading: o(() => [
          e("Ecosystem")
        ]),
        default: o(() => [
          e(" Get official tools and libraries for your project: "),
          s1,
          e(", "),
          a1,
          e(", "),
          r1,
          e(", and "),
          l1,
          e(". If you need more resources, we suggest paying "),
          c1,
          e(" a visit. ")
        ]),
        _: 1
      }),
      s(h, null, {
        icon: o(() => [
          s(q)
        ]),
        heading: o(() => [
          e("Community")
        ]),
        default: o(() => [
          e(" Got stuck? Ask your question on "),
          h1,
          e(", our official Discord server, or "),
          i1,
          e(". You should also subscribe to "),
          _1,
          e(" and follow the official "),
          m1,
          e(" twitter account for latest news in the Vue world. ")
        ]),
        _: 1
      }),
      s(h, null, {
        icon: o(() => [
          s(J)
        ]),
        heading: o(() => [
          e("Support Vue")
        ]),
        default: o(() => [
          e(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),
          d1,
          e(". ")
        ]),
        _: 1
      })
    ], 64));
  }
}), v1 = /* @__PURE__ */ m({
  __name: "HomeView",
  setup(n) {
    return (a, i) => (r(), l("main", null, [
      s(u1)
    ]));
  }
});
export {
  v1 as default
};
