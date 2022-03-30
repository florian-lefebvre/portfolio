import { defineProject } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: [
      "TypeScript",
      "Vue 2",
      "Nuxt 2",
      "Tailwind CSS",
      "Vercel",
      "SSG",
      "Supabase",
    ],
    imageUrl: useCloudinary({
      path: "projects/regiolangues/thumbnail.png",
      id: "fpu59m",
      dpr: "2.0",
    }),
    links: [],
  },
  locales: {
    en: {
      name: "Régiolangues",
      content: contentEn,
      description:
        "RégioLangues is a website I made, on the technical side (i.e. he takes care of the content), for my brother. Its aim is to gather resources around the web on the topic of French regional languages.",
      slug: "regiolangues",
      links: [
        {
          name: "Website",
          url: "https://regiolangues.fr",
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
