import { defineProject } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: [
      "Vue 2",
      "Nuxt 2",
      "GitHub Pages",
      "SSG",
      "AnimXYZ",
      "Tailwind CSS",
    ],
    imageUrl: useCloudinary({
      path: "projects/ynotes-website/thumbnail.png",
      id: "z2sdkb",
      dpr: "2.0",
    }),
    links: [
      {
        name: "GitHub",
        url: "https://github.com/EduWireApps/ynotes-website",
      },
    ],
  },
  locales: {
    en: {
      name: "yNotes website",
      content: contentEn,
      description:
        "At yNotes, we needed a support center and a more consistent website, so I made a new website from scratch. This allowed me to discover animations and learn how to make a more modern design.",
      slug: "ynotes-website",
      links: [
        {
          name: "Website",
          url: "https://ynotes.fr",
        },
        {
          name: "Website (archived)",
          url: "https://archive.ynotes.fr",
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
