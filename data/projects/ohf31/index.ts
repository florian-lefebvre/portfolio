import { defineProject } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
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
      "https://res.cloudinary.com/af68d22a-2043-4078-857c-f2db1a1406ec/image/upload/c_scale,w_1000/v1636657520/OHF31/ohf31-public-website/images/shared/og_image_bsrjhr.png",
    links: [],
  },
  locales: {
    en: {
      name: "OHF31",
      content: contentEn,
      description:
        "I finally finished v3 of the 1st site I made! That's a basic showcase site but I think it looks really great.",
      slug: "ohf31-website",
      links: [
        {
          name: "Website",
          url: "https://www.ohf31.fr",
        },
      ],
      type: "Website",
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
