import { defineNuxtConfig } from "nuxt3";
import vueJsx from "@vitejs/plugin-vue-jsx";

const config = {
  domain: process.env.DOMAIN,
  url: `https://${process.env.DOMAIN}`,
};

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    meta: [],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap",
      },
      { rel: "preconnect", href: "https://res.cloudinary.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "preconnect", href: "https://api.websitecarbon.com" },
      { rel: "preconnect", href: "https://unpkg.com" },
    ],
  },
  css: [
    "swiper/css",
    "@/assets/css/tailwind.css",
    "@/assets/css/main.css",
    "@/assets/css/highlight.css",
  ],
  buildModules: [
    "@vueuse/nuxt",
    "vue-plausible",
    "@unlighthouse/nuxt",
    "~/modules/sitemap",
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: ["@headlessui/vue", "@heroicons/vue", "vue-plausible"],
  },
  vite: {
    plugins: [vueJsx({})],
    // optimizeDeps: {
    //   exclude: ["highlight.js"],
    // },
    build: {
      target: "ESNext",
    },
  },
  publicRuntimeConfig: {
    domain: config.domain,
    url: config.url,
    plausible: {
      domain: config.domain,
    },
  },
  unlighthouse: {
    site: config.url,
  },
  router: {
    trailingSlash: true,
  },
  sitemap: {
    hostname: config.url,
    // dynamicRoutes: projects.map(
    //   (project) => `/projects/${project.locales.en.slug}`
    // ),
    dynamicRoutes: ["portfolio", "ynotes-app"].map(
      (project) => `/projects/${project}`
    ),
  },
});
