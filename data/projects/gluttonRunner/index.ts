import { defineProject } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: ["UE4"],
    imageUrl:
      "https://play-lh.googleusercontent.com/QumqIA38lrkP-gyWGtI46XFtPtkbkFqogqO5jXogs8YwPLN2c2d8USs6B42b_ViVU2k=w1440-h620-rw",
    links: [],
  },
  locales: {
    en: {
      name: "Glutton Runner",
      content: contentEn,
      description:
        "The first (and only) game I coded using UE4 was Glutton Runner, an endless game. Unfortunately, this engine was not adapted to my needs, so I paused the project. (It is unplayable)",
      slug: "glutton-runner",
      links: [
        {
          name: "Website",
          url: "https://www.ohf31.fr",
        },
      ],
      type: "Game",
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
