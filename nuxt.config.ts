import { defineNuxtConfig } from "nuxt3";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import hljs from "highlight.js";

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
      { rel: "icon", type: "image/png", href: "/pp.png" },
    ],
  },
  css: ["@/assets/css/main.css"],
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
  },
  vite: {
    plugins: [
      Vue({
        include: [/\.md$/],
      }),
      Markdown({
        markdownItOptions: {
          html: true,
          typographer: true,
          highlight: function (str: string, lang: string) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return hljs.highlight(str, { language: lang }).value;
              } catch (__) {}
            }

            return "";
          },
        },
      }),
    ],
  },
});
