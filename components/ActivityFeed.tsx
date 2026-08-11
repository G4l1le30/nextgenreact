"use client";

import { useState } from "react";
import { getActivitiesPage, toItem } from "@/lib/sanity";
import ActivityList, { type ActivityItem } from "./ActivityList";

export default function ActivityFeed({
  initial,
  total,
}: {
  initial: ActivityItem[];
  total: number;
}) {
  const [items, setItems] = useState(initial);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const hasMore = items.length < total;

  async function loadMore() {
    setLoading(true);
    try {
      const next = (await getActivitiesPage(page + 1)).map(toItem);
      setItems((prev) => {
        const seen = new Set(prev.map((p) => p._id));
        return [...prev, ...next.filter((n) => !seen.has(n._id))];
      });
      setPage((p) => p + 1);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <ActivityList activities={items} />
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={loadMore}
            disabled={loading}
            className="rounded-full bg-teal-brand px-8 py-3 font-semibold text-white shadow transition hover:bg-teal-700 disabled:opacity-60"
          >
            {loading ? "Memuat..." : "Muat Lebih Kegiatan"}
          </button>
        </div>
      )}
    </div>
  );
}