import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    categories: z.string(),
    image: z.string(),
    comments: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
