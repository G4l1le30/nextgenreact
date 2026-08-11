import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { ActivityItem } from "@/components/ActivityCarousel";

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

const query = `*[_type == "activity" && published == true] | order(date desc) {
  _id,
  title,
  description,
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
}`;

export async function getActivities(): Promise<Activity[]> {
  return sanity.fetch<Activity[]>(query);
}

export function toItem(a: Activity): ActivityItem {
  return {
    _id: a._id,
    title: a.title,
    description: a.description,
    tag: a.tag,
    date: a.date,
    images: (a.images ?? []).flatMap((img) =>
      img.asset?._ref
        ? [
            {
              url: urlFor(img).width(800).url(),
              width: img.asset.w,
              height: img.asset.h,
            },
          ]
        : [],
    ),
  };
}