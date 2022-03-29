import { defineProject } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: ["Dart", "Flutter"],
    imageUrl:
      "https://repository-images.githubusercontent.com/235597003/0d48eb00-1076-11eb-8768-bfb0e49462b2",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/EduWireApps/ynotes-packages",
      },
    ],
  },
  locales: {
    en: {
      name: "ynotes-packages",
      content: contentEn,
      description:
        "As yNotes was getting bigger and bigger, it became hard to keep a consistent design across the whole app. So I made a Flutter package to help with that. It features components, theming and more.",
      slug: "ynotes-packages",
      links: [
        {
          name: "Website",
          url: "https://ynotes.fr",
        },
      ],
      type: "Flutter package",
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
