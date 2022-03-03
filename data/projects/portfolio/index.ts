import { Project } from "~/types";
import { render } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

const project: Project = {
  global: {
    technologies: [
      "TypeScript",
      "Vue 3",
      "Nuxt 3",
      "Tailwind CSS",
      "VueUse",
      "Vercel",
      "SSR",
    ],
    imageUrl:
      "https://repository-images.githubusercontent.com/235597003/0d48eb00-1076-11eb-8768-bfb0e49462b2",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/florian-lefebvre/portfolio",
      },
    ],
  },
  locales: {
    en: {
      name: "Portfolio",
      content: render(contentEn),
      description:
        "Not much to say except that I am quite satisfied with the result.",
      slug: "portfolio",
      links: [
        {
          name: "Website",
          url: "https://florian-lefebvre.dev",
        },
      ],
    },
    fr: {
      name: "Portfolio",
      content: render(contentFr),
      description: "une description",
      slug: "portfolio",
      links: [],
    },
  },
};

export default project;
