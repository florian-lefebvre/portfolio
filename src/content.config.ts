import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const experiences = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/experiences" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      image: z.object({ src: image(), alt: z.string() }),
      links: z
        .array(z.object({ href: z.string(), text: z.string() }))
        .optional()
        .default([]),
    }),
});

const legal = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/legal" }),
  schema: z.object({ title: z.string(), description: z.string() }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/posts" }),
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

const techs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/techs" }),
  schema: z.object({
    name: z.string(),
    href: z.string().url(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/testimonials" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      image: image(),
      href: z.string().url(),
      draft: z.boolean().optional().default(false),
    }),
});

const texts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/texts" }),
  schema: z.object({}),
});

export const collections = {
  experiences,
  legal,
  posts,
  techs,
  testimonials,
  texts,
};
