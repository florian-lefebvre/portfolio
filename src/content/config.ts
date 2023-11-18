import { defineCollection, z } from "astro:content";

const experiences = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      image: z.object({ src: image(), alt: z.string() }),
      links: z.array(z.object({ href: z.string(), text: z.string() })),
    }),
});

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: z.object({ src: image(), alt: z.string() }),
      category: z.string(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  experiences,
  posts,
};
