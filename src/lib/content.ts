import { getCollection } from "astro:content";

export const getProfile = async () => {
  const profiles = await getCollection("profile");
  const profile = profiles[0];

  if (!profile) {
    throw new Error("Profile content is missing.");
  }

  return profile.data;
};

export const getPublications = async () =>
  (await getCollection("publication")).sort(
    (first, second) =>
      second.data.year - first.data.year || second.data.order - first.data.order,
  );

export const getProjects = async () =>
  (await getCollection("project")).sort(
    (first, second) =>
      second.data.year - first.data.year || second.data.order - first.data.order,
  );

export const getWriting = async () =>
  (await getCollection("writing", ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  )).sort((first, second) => second.data.date.valueOf() - first.data.date.valueOf());

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);

export const estimateReadingTime = (body = "") =>
  Math.max(1, Math.ceil(body.trim().split(/\s+/).filter(Boolean).length / 220));
