export default {
  env: {
    profile: {
      email: "contact@florian-lefebvre.dev",
      linkedin: "https://www.linkedin.com/in/florian-lefebvre31/",
      github: "https://github.com/florian-lefebvre"
    }
  },
  ssr: false,
  target: "static",
  head: {
    title: "Florian LEFEBVRE's portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "I am a French student who likes to program on his free time since 2018, when I discovered programming with Unreal Engine 4. In December 2019, I started web development and since then, I can't stop: Tailwind CSS, Vue.js, Laravel... I have already done several projects but I still have a lot to learn. Feel free to check my Github page and contact me!"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://rsms.me/inter/inter.css"
      }
    ],
    htmlAttrs: {
      lang: "en"
    }
  },
  plugins: ["~/plugins/animxyz.js"],
  components: true,
  buildModules: [
    // https://color-mode.nuxtjs.org/
    "@nuxtjs/color-mode",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://ackee.nuxtjs.org/
    "@nuxtjs/ackee"
  ],
  tailwindcss: {
    jit: true,
    viewer: false
  },
  colorMode: {
    classSuffix: ""
  },
  generate: {
    fallback: "404.html"
  },
  ackee: {
    server: "https://analytics.florian-lefebvre.vercel.app",
    domainId: "58f547ca-1cf5-4a0f-8013-2a7a74c0af46"
  }
};
