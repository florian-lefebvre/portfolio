import { defineProject } from "../utils";
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
      "Vercel",
      "SSR",
    ],
    imageUrl: useCloudinary({
      path: "global/og.jpg",
      id: "ekzloe",
      quality: 80,
    }),
    links: [
      {
        name: "GitHub",
        url: "https://github.com/florian-lefebvre/portfolio",
      },
    ],
  },
  locales: {
    en: {
      name: "Portfolio",
      content: contentEn,
      description:
        "The developer's portfolio acts as a showcase of his skills and projects. And I think the one you're currently on is a great example.",
      slug: "portfolio",
      links: [
        {
          name: "Website",
          url: "https://florian-lefebvre.dev",
        },
      ],
      type: "Website",
    },
    fr: {
      name: "Portfolio",
      content: contentFr,
      description: "une description",
      slug: "portfolio",
      links: [],
      type: "Site web",
    },
  },
});
