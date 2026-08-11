import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(sanity);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface Activity {
  _id: string;
  title: string;
  description: string;
  tag?: string;
  date?: string;
  layout: "duo" | "single";
  images?: {
    _key?: string;
    asset?: { _ref: string } | null;
  }[];
}

const query = `*[_type == "activity" && published == true] | order(date desc) {
  _id,
  title,
  description,
  tag,
  date,
  layout,
  images
}`;

export const PER_PAGE = 6;

export async function getActivityCount(): Promise<number> {
  return sanity.fetch<number>(
    `count(*[_type == "activity" && published == true])`,
  );
}

export async function getActivitiesPage(
  page: number,
): Promise<Activity[]> {
  const start = (page - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  return sanity.fetch<Activity[]>(
    `${query} [$start...$end]`,
    { start, end },
  );
}