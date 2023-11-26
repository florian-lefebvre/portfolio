import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import redirects from "./redirects.mjs";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://florian-lefebvre.dev",
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      experimentalThemes: {
        light: "github-light",
        dark: "one-dark-pro"
      }
    }
  },
  output: "hybrid",
  adapter: vercel(),
  redirects: {
    ...Object.fromEntries(Object.entries(redirects).map(([from, destination]) => [from, {
      destination,
      status: 308
    }]))
  }
});