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
    links: [
      {
        name: "GitHub",
        url: "https://github.com/supabase/supabase",
      },
      {
        name: "Pull Requests",
        url: "https://github.com/supabase/supabase/pulls?q=is%3Apr+author%3Aflorian-lefebvre",
      },
    ],
  },
  locales: {
    en: {
      name: "Supabase",
      content: contentEn,
      description:
        "Supabase is the open source Firebase alternative. It allows to create a backend in less than 2 minutes with a Postgres database, authentication, instant APIs, realtime subscriptions, storage and serverless functions.",
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
