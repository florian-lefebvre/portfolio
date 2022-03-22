import { defineProject } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: ["Dart", "Flutter", "Pub.dev"],
    imageUrl:
      "https://opengraph.githubassets.com/05094bc55a174a971afa3e61a68b368fb0b812fdfd8129a5e7afbdf7981c06d8/florian-lefebvre/flutter_responsive_breakpoints",
    links: [],
  },
  locales: {
    en: {
      name: "flutter_responsive_breakpoints",
      content: contentEn,
      description:
        "I love Tailwind CSS and how easy it is to achieve great responsive designs quickly. I made this package to make my life easier with Flutter using the Tailwind CSS breakpoints.",
      slug: "flutter-responsive-breakpoints",
      links: [
        {
          name: "Website",
          url: "https://ynotes.fr",
        },
      ],
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
