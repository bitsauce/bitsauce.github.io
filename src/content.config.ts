import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(['graphics', 'ml', 'misc']),
      period: z.string().optional(),
      order: z.number(),
      featured: z.boolean().default(false),
      orientation: z.enum(['landscape', 'portrait']).default('landscape'),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      media: z
        .array(
          z.union([
            z.object({ image: image(), alt: z.string() }),
            z.object({ video: z.string(), poster: image(), alt: z.string() }),
          ]),
        )
        .min(1),
    }),
});

export const collections = { projects };
