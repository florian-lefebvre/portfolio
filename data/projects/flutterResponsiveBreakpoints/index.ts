import { defineProject, githubOgImage } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: ["Dart", "Flutter", "Pub.dev"],
    imageUrl: githubOgImage(
      "florian-lefebvre",
      "flutter_responsive_breakpoints"
    ),
    links: [
      {
        name: "GitHub",
        url: "https://github.com/florian-lefebvre/flutter_responsive_breakpoints",
      },
      {
        name: "Pub.dev",
        url: "https://pub.dev/packages/flutter_responsive_breakpoints",
      },
    ],
  },
  locales: {
    en: {
      name: "flutter_responsive_breakpoints",
      content: contentEn,
      description:
        "I love Tailwind CSS and how easy it is to achieve great responsive designs quickly. I made this package to make my life easier with Flutter using the Tailwind CSS breakpoints to allow myself doing responsive apps quickly.",
      slug: "flutter-responsive-breakpoints",
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
