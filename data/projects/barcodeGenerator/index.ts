import { defineProject } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: ["Bootstrap"],
    imageUrl:
      "https://opengraph.githubassets.com/24f8acad0396f9fb2de954b100b3f48ac95939a14d7adf8d7e2f936df311e49d/florian-lefebvre/barcode-generator",
    links: [],
  },
  locales: {
    en: {
      name: "Barcode generator",
      content: contentEn,
      description:
        "The name speaks for itself. I made this very small site for a friend of mine from high school.",
      slug: "barcode-generator",
      links: [
        {
          name: "Website",
          url: "https://supabase.com",
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
