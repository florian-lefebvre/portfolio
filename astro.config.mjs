// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import redirects from "./redirects.mjs";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://florian-lefebvre.dev",
  output: "static",
  adapter: netlify(),
  integrations: [tailwind(), mdx(), sitemap()],
  experimental: {
    fonts: [
      {
        name: "Inter",
        cssVariable: "--font-inter",
        provider: fontProviders.fontsource(),
        weights: [400, 500, 600, 700],
        styles: ["normal"],
        subsets: ["latin"],
        fallbacks: ["sans-serif"],
      },
      {
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono",
        provider: fontProviders.fontsource(),
        weights: [400],
        styles: ["normal", "italic"],
        subsets: ["latin"],
        fallbacks: ["monospace"],
      },
    ],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "one-dark-pro",
      },
    },
  },
  redirects: {
    ...Object.fromEntries(
      Object.entries(redirects).map(([from, destination]) => [
        from,
        {
          destination,
          status: 308,
        },
      ])
    ),
  },
});
