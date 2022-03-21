import { defineProject } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: ["Dart", "Flutter", "Figma"],
    imageUrl:
      "https://repository-images.githubusercontent.com/235597003/0d48eb00-1076-11eb-8768-bfb0e49462b2",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/EduWireApps/ynotes",
      },
    ],
  },
  locales: {
    en: {
      name: "yNotes app",
      content: contentEn,
      description:
        "yNotes is a mobile application that retrieves data from the student life services used by most French schools. It reshapes and adds many features.",
      slug: "ynotes-app",
      links: [
        {
          name: "Website",
          url: "https://ynotes.fr",
        },
      ],
      type: "Mobile app",
    },
    fr: {
      name: "Application yNotes",
      content: contentFr,
      description: "une description",
      slug: "application-ynotes",
      links: [],
      type: "Application mobile",
    },
  },
});
