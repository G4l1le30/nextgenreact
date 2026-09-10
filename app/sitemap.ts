import type { MetadataRoute } from "next";
import { sanity } from "@/lib/sanity";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nexgen.my.id";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/galeri`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  try {
    const activities = await sanity.fetch<{
      slug?: string;
      _id: string;
      _updatedAt?: string;
      date?: string;
    }[]>(
      `*[_type == "activity" && published == true] { "slug": slug.current, _id, _updatedAt, date }`
    );

    const activityRoutes: MetadataRoute.Sitemap = activities.map((act) => {
      const identifier = act.slug || act._id;
      return {
        url: `${SITE_URL}/aktivitas/${identifier}`,
        lastModified: act._updatedAt
          ? new Date(act._updatedAt)
          : act.date
          ? new Date(act.date)
          : new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      };
    });

    return [...staticRoutes, ...activityRoutes];
  } catch (err) {
    console.error("Gagal mengambil daftar aktivitas untuk sitemap:", err);
    return staticRoutes;
  }
}
