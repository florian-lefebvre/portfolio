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
    imageUrl:
      "https://res.cloudinary.com/af68d22a-2043-4078-857c-f2db1a1406ec/image/upload/c_scale/v1641930868/Regiolangues/og_sup891.jpg",
    links: [],
  },
  locales: {
    en: {
      name: "Régiolangues",
      content: contentEn,
      description:
        "RégioLangues is a website I made for my brother. I was only involved in the coding, not the data. Its goal: gather resources around the web on the topic of French regional languages. It uses Supabase for the backend.",
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
