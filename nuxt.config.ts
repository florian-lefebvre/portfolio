import { defineNuxtConfig } from "nuxt3";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    meta: [],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "preconnect", href: "https://api.websitecarbon.com" },
      { rel: "preconnect", href: "https://unpkg.com" },
      { rel: "icon", type: "image/jpeg", href: "/pp.jpg" },
    ],
  },
  css: ["@/assets/css/main.css", "@/assets/css/highlight.css"],
  buildModules: ["@vueuse/nuxt"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: ["@headlessui/vue", "@heroicons/vue"],
  },
  vite: {
    plugins: [vueJsx({})],
  },
});
