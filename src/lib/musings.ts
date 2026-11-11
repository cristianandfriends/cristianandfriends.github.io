import { getCollection, type CollectionEntry } from "astro:content";

export async function getPublishedMusings(): Promise<
  CollectionEntry<"musings">[]
> {
  const musings = await getCollection("musings", ({ data }) => !data.draft);
  return musings.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10).replaceAll("-", ".");
}

export function formatDateLong(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function readingTime(body: string | undefined): string {
  const words = (body ?? "").trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 210));
  return `${minutes} min read`;
}

export function tagClass(tag: string): string {
  switch (tag.toLowerCase()) {
    case "ai":
      return "tag-ai";
    case "security":
      return "tag-security";
    case "cities":
      return "tag-cities";
    case "math":
      return "tag-math";
    default:
      return "tag-systems";
  }
}
