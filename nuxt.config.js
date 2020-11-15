import global from "./utils/global";
import getSiteMeta from "./utils/getSiteMeta";

const meta = getSiteMeta();

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: "en-GB"
    },
    title: global.siteTitle,
    titleTemplate: `%s - ${global.author}`,
    meta: [
      ...meta,
      { charset: "utf-8" },
      { name: "HandheldFriendly", content: "True" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  scss: ["@/assets/style/main"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/vue-silentbox.js", "~/plugins/icons.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-analytics"
  ],

  googleAnalytics: {
    id: "UA-155020188-3",
    autoTracking: {
      screenview: true
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    // "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content"
  ],

  hooks: {
    "content:file:beforeInsert": document => {
      if (document.extension === ".md") {
        const { time } = require("reading-time")(document.text);

        document.readingTime = time;
        document.createdAt = document.slug.substring(0, 10);
        document.slug = document.slug.substring(11);
        document.path = document.dir + "/" + document.slug;
        document.tags = document.tags.sort();
      }
    }
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css"
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  generate: {
    fallback: "404.html",
    async routes() {
      const { $content } = require("@nuxt/content");
      const projects = await $content("work")
        .only(["path", "tags", "dir"])
        .fetch();
      const articles = await $content("articles")
        .only(["path", "tags", "dir"])
        .fetch();
      const files = projects.concat(articles);
      var tags = [];
      files.forEach(file => {
        file.tags.forEach(tag => {
          var filename = `${file.dir}/tags/${tag}`;
          if (!tags.includes(filename)) {
            tags.push(filename);
          }
        });
      });
      return files
        .map(file => (file.path === "/index" ? "/" : file.path))
        .concat(tags);
    }
  }
};
