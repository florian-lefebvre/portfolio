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
      path: "projects/ohf31-website/thumbnail.png",
      id: "wptmjq",
      dpr: "2.0",
      quality: 80,
    }),
    links: [],
  },
  locales: {
    en: {
      name: "OHF31",
      content: contentEn,
      description:
        "This website is a basic showcase site I made for my orchestra. It's already its 3rd version and probabaly not the last. That's actually the one that got me started with web development.",
      slug: "ohf31-website",
      links: [
        {
          name: "Website",
          url: "https://www.ohf31.fr",
        },
      ],
      type: "Website",
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
