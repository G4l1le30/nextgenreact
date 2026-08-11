"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type ActivityItem = {
  _id: string;
  title: string;
  description: string;
  tag?: string;
  date?: string;
  layout: "duo" | "single";
  images?: string[];
};

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay },
  };
}

function DuoCard({ a }: { a: ActivityItem }) {
  const [img1, img2] = a.images ?? [];
  return (
    <div>
      {(img1 || img2) && (
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {img1 ? (
            <div className="relative aspect-video">
              <Image
                src={img1}
                alt={a.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl object-cover shadow-md"
              />
            </div>
          ) : null}
          {img2 ? (
            <div className="relative aspect-video">
              <Image
                src={img2}
                alt={a.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl object-cover shadow-md"
              />
            </div>
          ) : null}
        </div>
      )}
      <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
        <h3 className="mb-4 text-xl font-bold text-teal-brand">{a.title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">
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
      </div>
    </div>
  );
}

function SingleCard({ a }: { a: ActivityItem }) {
  return (
    <div className="h-full overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      {a.images?.[0] && (
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={a.images[0]}
            alt={a.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-teal-brand">{a.title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">
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
      </div>
    </div>
  );
}

export default function ActivityList({
  activities,
}: {
  activities: ActivityItem[];
}) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
      {activities.map((a, i) => (
        <motion.div key={a._id} {...fadeUp((i % 2) * 0.15)}>
          {a.layout === "duo" ? <DuoCard a={a} /> : <SingleCard a={a} />}
        </motion.div>
      ))}
    </div>
  );
}