import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['News', 'Security', 'Safety', 'Facility Management', 'Cleaning', 'Metro Fix']).default('News'),
    image: z.string().optional(), // path under src/assets, e.g. images/services/safety-fire-drill-demo.webp
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
