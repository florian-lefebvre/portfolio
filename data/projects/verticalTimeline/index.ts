import { defineProject } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

// https://play.tailwindcss.com/C28av051Nx

export default defineProject({
  global: {
    technologies: ["CSS grid", "CSS flexbox", "Tailwind CSS"],
    imageUrl: useCloudinary({
      path: "projects/vertical-timeline/thumbnail.png",
      id: "mj9ecz",
    }),
    links: [
      {
        name: "Tailwind components",
        url: "https://tailwindcomponents.com/component/vertical-timeline",
      },
    ],
  },
  locales: {
    en: {
      name: "Vertical timeline",
      content: contentEn,
      description:
        "As I was doing the 3rd version of my portfolio, I wanted to add a vertical timeline to it. I didn't find anything great online so I made my own. And because I thought it was quite great, I published it on tailwindcomponents.com.",
      slug: "vertical-timeline",
      links: [],
      type: "Component",
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
