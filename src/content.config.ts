import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const game = z.enum(["sts1", "sts2"]);

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    repo: z.string().regex(/^[\w.-]+\/[\w.-]+$/).optional(),
    author: z.string(),
    games: z.array(game).min(1),
    category: z.enum(["interface", "modding", "library", "bot", "simulator", "dataset", "tool", "research"]),
    approaches: z.array(z.enum(["rules", "search", "rl", "imitation", "llm", "tooling"])).default([]),
    language: z.string().optional(),
    license: z.string().optional(),
    status: z.enum(["active", "maintained", "dormant", "archived"]),
    summary: z.string().max(240),
    featured: z.boolean().default(false),
  }),
});

const papers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/papers" }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number().int(),
    url: z.string().url(),
    kind: z.enum(["paper", "thesis", "post", "talk"]),
    games: z.array(game).min(1),
    approaches: z.array(z.enum(["rules", "search", "rl", "imitation", "llm", "tooling"])).default([]),
    takeaway: z.string().max(300),
  }),
});

const datasets = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/datasets" }),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    games: z.array(game).min(1),
    size: z.string(),
    format: z.string(),
    access: z.enum(["open", "on-request", "defunct"]),
    summary: z.string().max(300),
  }),
});

export const collections = { projects, papers, datasets };
