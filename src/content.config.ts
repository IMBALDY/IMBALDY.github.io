import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const optionalUrl = z.preprocess(
  (value) => value === "" || value == null ? undefined : value,
  z.string().url().optional(),
);

const optionalString = z.preprocess(
  (value) => value === "" || value == null ? undefined : value,
  z.string().optional(),
);

const optionalDate = z.preprocess(
  (value) => value === "" || value == null ? undefined : value,
  z.coerce.date().optional(),
);

const linkSchema = z.object({
  email: z.string().email(),
  scholar: z.string().url(),
  github: z.string().url(),
  orcid: z.string().url(),
  openreview: z.string().url(),
  bluesky: z.string().url(),
});

const profile = defineCollection({
  loader: glob({ base: "./src/content", pattern: "profile.json" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    affiliation: z.string(),
    location: z.string(),
    avatar: z.string(),
    avatarAlt: z.string(),
    intro: z.array(z.string()).length(2),
    interests: z.array(z.string()).min(1),
    selectedProjectsLimit: z.number().int().min(1).default(6),
    links: linkSchema,
  }),
});

const publication = defineCollection({
  loader: glob({ base: "./src/content/publications", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    order: z.number().int().default(0),
    authors: z.array(z.string()).min(1),
    equalContribution: z.boolean().default(false),
    firstAuthor: z.boolean().default(false),
    venue: z.string(),
    category: z.enum(["Conference", "Journal", "Preprint"]),
    status: z.enum(["Published", "Accepted", "Submitted", "Preprint"]),
    presentation: z.enum(["Poster", "Oral", "Spotlight"]).optional(),
    image: optionalString,
    imageAlt: optionalString,
    paper: optionalUrl,
    code: optionalUrl,
    project: optionalUrl,
  }).refine((data) => !data.image || Boolean(data.imageAlt), {
    message: "Publication image alt text is required when an image is set.",
    path: ["imageAlt"],
  }),
});

const project = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number().int(),
    order: z.number().int().default(0),
    image: z.string(),
    imageAlt: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.enum(["Active", "Completed", "Demo"]),
    website: optionalUrl,
    code: optionalUrl,
    paper: optionalUrl,
  }),
});

const writing = defineCollection({
  loader: glob({ base: "./src/content/writing", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    updated: optionalDate,
    category: z.enum(["Blog", "Essay", "Notes"]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    demo: z.boolean().default(false),
    cover: optionalString,
    coverAlt: optionalString,
  }).refine((data) => !data.cover || Boolean(data.coverAlt), {
    message: "Cover alt text is required when a cover image is set.",
    path: ["coverAlt"],
  }),
});

export const collections = { profile, publication, project, writing };
