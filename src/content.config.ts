import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const musings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/musings" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { musings };
