export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Florian LEFEBVRE's portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "I am a French student who likes to program on his free time since 2018, when I discovered programming with Unreal Engine 4. In December 2019, I started web development and since then, I can't stop: Tailwind CSS, Vue.js, Laravel... I have already done several projects but I still have a lot to learn. Feel free to check my Github page and contact me!" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://rsms.me/inter/inter.css"
      }
    ],
    script: [
      {
        hid: "websitecarbon",
        src: "https://unpkg.com/website-carbon-badges@1.1.1/b.min.js",
        defer: true
      }
    ],
    htmlAttrs: {
      lang: "en"
    }
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/animxyz.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://color-mode.nuxtjs.org/
    "@nuxtjs/color-mode",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://github.com/teamnovu/nuxt-breaky
    // "@teamnovu/nuxt-breaky"
    // "@teamnovu/nuxt-breaky": "^1.2.2",
  ],

  // tailwindcss: {
  //   exposeConfig: true
  // },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // https://color-mode.nuxtjs.org/
  colorMode: {
    classSuffix: ""
  }
};
