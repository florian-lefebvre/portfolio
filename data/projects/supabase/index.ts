import { defineProject } from "../utils";
import contentEn from "./content.en.md?raw";
import contentFr from "./content.fr.md?raw";

export default defineProject({
  global: {
    technologies: [
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "SSR",
      "Supabase",
      "React",
      "Next.js",
    ],
    imageUrl: "https://supabase.com/images/og/og-image.jpg",
    links: [],
  },
  locales: {
    en: {
      name: "Supabase",
      content: contentEn,
      description:
        "Supabase is an awesome open source project. I already contributed several times to the public website.",
      slug: "supabase",
      links: [
        {
          name: "Website",
          url: "https://supabase.com",
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
