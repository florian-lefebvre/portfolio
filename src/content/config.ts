import { defineCollection, z } from "astro:content";

const projectSchema = (image: any) =>
  z.object({
    title: z.string(),
    date: z.string(),
    image: z.object({ src: image(), alt: z.string() }),
    links: z.array(z.object({ href: z.string(), text: z.string() })),
  });

const experiences = defineCollection({
  type: "content",
  schema: ({ image }) => projectSchema(image),
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

const projects = defineCollection({
  type: "content",
  schema: ({ image }) => projectSchema(image),
});

const testimonials = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      image: image(),
    }),
});

export const collections = {
  experiences,
  posts,
  projects,
  testimonials,
};
