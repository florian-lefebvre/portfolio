import { defineProject } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: ["CSS grid", "CSS flexbox", "Tailwind CSS"],
    imageUrl:
      "https://tailwindcomponents.com/storage/2240/temp42270.png?v=2022-03-22 20:01:51",
    links: [],
  },
  locales: {
    en: {
      name: "Vertical timeline",
      content: contentEn,
      description:
        "The CSS grid timeline component of my journey through this portfolio can also be found on tailwindcomponents.com.",
      slug: "vertical-timeline",
      links: [
        {
          name: "Website",
          url: "https://supabase.com",
        },
      ],
      type: "Component",
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
