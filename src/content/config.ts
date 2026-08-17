import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default("Matheus Costa"),
    authorRole: z.string().optional().default("UX/UI Designer & Dev Front-end"),
    authorAvatar: z.string().optional().default("/assets/matheus.webp"),
    authorBio: z.string().optional().default("Especialista em UX/UI Design e Desenvolvimento Front-end em São José do Rio Preto/SP. Criação de sites de alta conversão, soluções digitais orientadas a SEO e performance."),
    categories: z.string(),
    image: z.string(),
    imageCaption: z.string().optional(),
    comments: z.boolean().optional(),
    slug: z.string().optional(),
    updatedDate: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
