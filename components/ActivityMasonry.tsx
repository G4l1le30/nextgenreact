"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ActivityItem } from "@/components/ActivityGrid";

function Item({ a, open, onToggle }: {
  a: ActivityItem;
  open: boolean;
  onToggle: () => void;
}) {
  const img = (a.images ?? []).find((i) => i.url);
  const detailUrl = `/aktivitas/${a.slug || a._id}`;

  return (
    <div className="mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-[#151f0a] dark:border dark:border-white/10">
      {img && (
        <Link href={detailUrl} className="relative w-full block group overflow-hidden">
          <Image
            src={img.url}
            alt={a.title}
            width={img.width ?? 400}
            height={img.height ?? 300}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      )}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`activity-body-${a._id}`}
        className="flex w-full cursor-pointer items-center justify-between gap-3 p-4 text-left"
      >
        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{a.title}</p>
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
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{a.description}</p>
          {(a.tag || a.date) && (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {a.date && (
                <span className="rounded-md bg-chip px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-brand">
                  {a.date}
                </span>
              )}
              {a.tag && (
                <span className="rounded-md bg-chip px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-brand">
                  {a.tag}
                </span>
              )}
            </div>
          )}
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex justify-end">
            <Link
              href={detailUrl}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-brand hover:text-mid-green dark:text-accent-lime transition"
            >
              Baca Artikel Lengkap
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
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