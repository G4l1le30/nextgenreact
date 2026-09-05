import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { ActivityItem } from "@/components/ActivityGrid";

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
  slug?: { current: string } | string;
  description: string;
  content?: string;
  tag?: string;
  date?: string;
  images?: {
    _key?: string;
    crop?: unknown;
    hotspot?: unknown;
    asset?: {
      _ref?: string;
      w?: number;
      h?: number;
    } | null;
  }[];
}

const activityFields = `
  _id,
  title,
  "slug": slug.current,
  description,
  content,
  tag,
  date,
  images[] {
    _key,
    crop,
    hotspot,
    "asset": asset->{
      "_ref": _id,
      "w": metadata.dimensions.width,
      "h": metadata.dimensions.height
    }
  }
`;

export const PER_PAGE = 12;

export async function getActivityCount(keyword?: string): Promise<number> {
  if (keyword) {
    return sanity.fetch<number>(
      `count(*[_type == "activity" && published == true && (title match $kw || description match $kw)])`,
      { kw: `*${keyword}*` },
    );
  }
  return sanity.fetch<number>(
    `count(*[_type == "activity" && published == true])`,
  );
}

export async function getActivitiesPage(
  page: number,
  perPage: number = PER_PAGE,
  keyword?: string,
): Promise<Activity[]> {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const filter = keyword
    ? `*[_type == "activity" && published == true && (title match $kw || description match $kw)]`
    : `*[_type == "activity" && published == true]`;
  return sanity.fetch<Activity[]>(
    `${filter} | order(date desc) { ${activityFields} } [$start...$end]`,
    keyword ? { kw: `*${keyword}*`, start, end } : { start, end },
  );
}

export async function getAllActivitySlugs(): Promise<string[]> {
  try {
    const items = await sanity.fetch<{ slug?: string; _id: string }[]>(
      `*[_type == "activity" && published == true] { "slug": slug.current, _id }`,
    );
    const set = new Set<string>();
    items.forEach((it) => {
      if (it.slug) set.add(it.slug);
      if (it._id) set.add(it._id);
    });
    return Array.from(set);
  } catch {
    return [];
  }
}

export async function getActivityBySlug(slug: string): Promise<ActivityItem | null> {
  try {
    const activity = await sanity.fetch<Activity | null>(
      `*[_type == "activity" && published == true && (slug.current == $slug || _id == $slug)][0] { ${activityFields} }`,
      { slug },
    );
    return activity ? toItem(activity) : null;
  } catch {
    return null;
  }
}

export async function getRelatedActivities(
  currentId: string,
  limit: number = 3,
): Promise<ActivityItem[]> {
  try {
    const activities = await sanity.fetch<Activity[]>(
      `*[_type == "activity" && published == true && _id != $currentId] | order(date desc)[0...$limit] { ${activityFields} }`,
      { currentId, limit },
    );
    return activities.map(toItem);
  } catch {
    return [];
  }
}

export function toItem(a: Activity): ActivityItem {
  const slug = typeof a.slug === "string" ? a.slug : a.slug?.current;
  return {
    _id: a._id,
    title: a.title,
    slug,
    description: a.description,
    content: a.content,
    tag: a.tag,
    date: a.date,
    images: (a.images ?? []).flatMap((img) =>
      img.asset?._ref
        ? [
            {
              url: urlFor(img).width(1200).url(),
              width: img.asset.w,
              height: img.asset.h,
            },
          ]
        : [],
    ),
  };
}