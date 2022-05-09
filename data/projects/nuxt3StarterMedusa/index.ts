import { defineProject, githubOgImage } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: [
      "TypeScript",
      "Vue 3",
      "Nuxt 3",
      "Tailwind CSS",
      "VueUse",
      "SSR",
      "Medusa",
      "Ecommerce",
    ],
    imageUrl: githubOgImage("florian-lefebvre", "nuxt3-starter-medusa"),
    links: [
      {
        name: "GitHub",
        url: "https://github.com/florian-lefebvre/nuxt3-starter-medusa",
      },
      {
        name: "Medusa",
        url: "https://medusajs.com/",
      },
    ],
  },
  locales: {
    en: {
      name: "Nuxt3 starter template for Medusa",
      content: contentEn,
      description:
        "This starter template allows developers to get started quickly with Medusa using a Nuxt3 storefront. It features most of the essential features of any ecommerce website.",
      slug: "nuxt3-starter-medusa",
      links: [],
      type: "Starter",
      wip: true,
    },
    fr: {
      name: "Portfolio",
      content: contentFr,
      description: "une description",
      slug: "site-web-ohf31",
      links: [],
      type: "Site web",
    },
  },
});
