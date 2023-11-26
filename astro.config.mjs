import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://florian-lefebvre.dev",
  integrations: [tailwind(), mdx()],
  markdown: {
    shikiConfig: {
      experimentalThemes: {
        light: 'github-light',
        dark: 'one-dark-pro'
      }
    }
  }
});