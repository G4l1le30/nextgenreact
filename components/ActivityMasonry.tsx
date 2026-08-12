"use client";

import { useState } from "react";
import Image from "next/image";
import type { ActivityItem } from "@/components/ActivityGrid";

function Item({ a, open, onToggle }: {
  a: ActivityItem;
  open: boolean;
  onToggle: () => void;
}) {
  const img = (a.images ?? []).find((i) => i.url);
  return (
    <div className="mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-lg">
      {img && (
        <div className="relative w-full">
          <Image
            src={img.url}
            alt={a.title}
            width={img.width ?? 400}
            height={img.height ?? 300}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full"
          />
        </div>
      )}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`activity-body-${a._id}`}
        className="flex w-full cursor-pointer items-center justify-between gap-3 p-4 text-left"
      >
        <p className="text-sm font-medium text-slate-700">{a.title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`shrink-0 text-teal-brand transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div id={`activity-body-${a._id}`} className="px-4 pb-4">
          <p className="text-sm leading-relaxed text-slate-600">{a.description}</p>
          {(a.tag || a.date) && (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {a.date && (
                <span className="rounded-full bg-chip px-3 py-1 text-xs font-medium text-teal-brand">
                  {a.date}
                </span>
              )}
              {a.tag && (
                <span className="rounded-full bg-chip px-3 py-1 text-xs font-medium text-teal-brand">
                  {a.tag}
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ActivityMasonry({
  activities,
}: {
  activities: ActivityItem[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
      {activities.map((a) => (
        <Item
          key={a._id}
          a={a}
          open={openId === a._id}
          onToggle={() => setOpenId(openId === a._id ? null : a._id)}
        />
      ))}
    </div>
  );
}