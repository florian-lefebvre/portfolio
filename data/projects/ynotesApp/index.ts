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
      {
        name: "Play Store",
        url: "https://play.google.com/store/apps/details?id=fr.ynotes",
      },
      {
        name: "App Store",
        url: "https://apps.apple.com/fr/app/ynotes/id1563624059",
      },
      {
        name: "EduWire organization",
        url: "https://github.com/EduWireApps",
      },
    ],
  },
  locales: {
    en: {
      name: "yNotes app",
      content: contentEn,
      description:
        "yNotes is a school life mobile application that connects French students to their school services. I've been its maintainer for around 7 months, and I learnt a lot of things along the way.",
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
