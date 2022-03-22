import { defineProject } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: ["Electron", "Vue 2", "Tailwind CSS"],
    imageUrl:
      "https://opengraph.githubassets.com/4353f1efd328b1d86c9e5982260e2f5bb98a0ade5a361bbda9445fb2395072f4/florian-lefebvre/shortcuts-app",
    links: [],
  },
  locales: {
    en: {
      name: "Shortcuts App",
      content: contentEn,
      description:
        "I needed an application that would have shortcuts the same way Opera does, in the sidebar. So I coded it using Electron.js. It was really fun to do.",
      slug: "shortcuts-app",
      links: [
        {
          name: "Website",
          url: "https://supabase.com",
        },
      ],
      type: "Desktop app",
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
