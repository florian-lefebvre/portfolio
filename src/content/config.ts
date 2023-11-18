import { defineCollection, z } from "astro:content";

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
  posts,
};
