import { defineProject } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: ["Electron", "Vue 2", "Tailwind CSS"],
    imageUrl: useCloudinary({
      path: "projects/shortcuts-app/thumbnail.jpg",
      id: "quyaiq",
    }),
    links: [
      {
        name: "GitHub",
        url: "https://github.com/florian-lefebvre/shortcuts-app",
      },
    ],
  },
  locales: {
    en: {
      name: "Shortcuts App",
      content: contentEn,
      description:
        "At the time, I was using Opera GX as my main browser and I really liked the website shortcuts that lived in the sidebar. And actually, I thought it would be useful to have an app dedicated to this feature so guess what? I did it of course!",
      slug: "shortcuts-app",
      links: [],
      type: "Desktop app",
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
