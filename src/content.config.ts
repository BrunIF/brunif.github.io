import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    avatar: z.string().optional(),
    projects: z
      .array(
        z.object({
          name: z.string(),
          description: z.string(),
          tags: z.array(z.string()).optional(),
          links: z
            .array(
              z.object({
                label: z.string(),
                href: z.string(),
                primary: z.boolean().optional(),
              })
            )
            .optional(),
        })
      )
      .optional(),
  }),
});

export const collections = { pages };
