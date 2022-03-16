import { Project } from "~/types";
import { render } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

//   {
//     title: "yNotes app",
//     imageUrl:
//       "https://repository-images.githubusercontent.com/235597003/0d48eb00-1076-11eb-8768-bfb0e49462b2",
//     // description:
//     // "yNotes is a mobile application that retrieves data from the student life services used by most French schools. It reshapes and adds many features. I'm involved in the development and the design of the app.",
//     slug: "ynotes-app",
//     description: computed(() => t("test")),
//   },

const project: Project = {
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
      content: render(contentEn),
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
      content: render(contentFr),
      description: "une description",
      slug: "application-ynotes",
      links: [],
      type: "Application mobile",
    },
  },
};

export default project;
