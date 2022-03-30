import { defineProject, githubOgImage } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: ["Dart", "Flutter"],
    imageUrl: githubOgImage("EduWireApps", "ynotes-packages"),
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
      links: [],
      type: "Package",
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
