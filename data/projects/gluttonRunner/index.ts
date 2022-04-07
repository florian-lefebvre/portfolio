import { defineProject } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: ["UE4"],
    imageUrl:
      "https://play-lh.googleusercontent.com/QumqIA38lrkP-gyWGtI46XFtPtkbkFqogqO5jXogs8YwPLN2c2d8USs6B42b_ViVU2k=w1440-h620-rw",
    links: [
      {
        name: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.GirofleStudio.GluttonRunner",
      },
    ],
  },
  locales: {
    en: {
      name: "Glutton Runner",
      content: contentEn,
      description:
        "I started to code by doing games with Unreal Engine 4. For my first game (and only one sadly), I decided to go with something not to complex and chose to do an endless runner like Subway Surfers. It turned out to be more complicated than I thought",
      slug: "glutton-runner",
      links: [],
      type: "Game",
      wip: true,
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
