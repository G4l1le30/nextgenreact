"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export type ActivityImage = {
  url: string;
  width?: number;
  height?: number;
};

export type ActivityItem = {
  _id: string;
  title: string;
  description: string;
  tag?: string;
  date?: string;
  images?: ActivityImage[];
};

function Collage({ a }: { a: ActivityItem }) {
  const imgs = (a.images ?? []).filter((i) => i.url);
  if (imgs.length === 0) return null;

  return (
    <div className="mb-4 grid grid-cols-1 gap-3">
      {imgs.slice(0, 2).map((img) => (
        <div key={img.url} className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src={img.url}
            alt={a.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function Card({ a }: { a: ActivityItem }) {
  return (
    <article className="w-[340px] shrink-0 snap-start rounded-2xl bg-white p-4 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      <Collage a={a} />
      <h3 className="mb-2 text-xl font-bold text-teal-brand">{a.title}</h3>
      <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
        {a.description}
      </p>
      {(a.tag || a.date) && (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {a.date && (
            <span className="rounded-full bg-chip px-3 py-1 text-sm font-medium text-teal-brand">
              {a.date}
            </span>
          )}
          {a.tag && (
            <span className="rounded-full bg-chip px-3 py-1 text-sm font-medium text-teal-brand">
              {a.tag}
            </span>
          )}
        </div>
      )}
    </article>
  );
}

const arrowClass =
  "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-teal-brand shadow-lg transition hover:bg-chip disabled:opacity-40";

export default function ActivityCarousel({
  activities,
}: {
  activities: ActivityItem[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  function updateArrows() {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    el?.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el?.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  function scroll(dir: -1 | 1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 352, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Scroll kiri"
        onClick={() => scroll(-1)}
        disabled={!canPrev}
        className={`${arrowClass} -left-5`}
      >
        &larr;
      </button>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
      >
        {activities.map((a) => (
          <Card key={a._id} a={a} />
        ))}
      </div>
      <button
        type="button"
        aria-label="Scroll kanan"
        onClick={() => scroll(1)}
        disabled={!canNext}
        className={`${arrowClass} -right-5`}
      >
        &rarr;
      </button>
    </div>
  );
}