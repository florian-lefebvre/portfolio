import { defineProject, githubOgImage } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: ["Bootstrap"],
    imageUrl: githubOgImage("florian-lefebvre", "barcode-generator"),
    links: [
      {
        name: "GitHub",
        url: "https://github.com/florian-lefebvre/barcode-generator",
      },
    ],
  },
  locales: {
    en: {
      name: "Barcode generator",
      content: contentEn,
      description:
        "In high school, I had a friend who often lost her lunch card, which the school made repay. But a barcode is generated from a number, so I made a simple website for that.",
      slug: "barcode-generator",
      links: [
        {
          name: "Website",
          url: "https://florian-lefebvre.github.io/barcode-generator/",
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
