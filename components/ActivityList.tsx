"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay },
  };
}

function CardBody({ a }: { a: ActivityItem }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      <h3 className="mb-4 text-xl font-bold text-teal-brand">{a.title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{a.description}</p>
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
  );
}

function isPortrait(img: ActivityImage) {
  return Boolean(
    img.width && img.height && img.height > img.width,
  );
}

function SinglePhotoCard({ a, img }: { a: ActivityItem; img: ActivityImage }) {
  if (isPortrait(img)) {
    return (
      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-6">
        <div className="relative aspect-square md:aspect-auto">
          <Image
            src={img.url}
            alt={a.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-xl object-cover shadow-md"
          />
        </div>
        <CardBody a={a} />
      </div>
    );
  }

  return (
    <div>
      <div className="relative mb-4 aspect-video">
        <Image
          src={img.url}
          alt={a.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-xl object-cover shadow-md"
        />
      </div>
      <CardBody a={a} />
    </div>
  );
}

function TwoPhotoCard({ a }: { a: ActivityItem }) {
  const [img1, img2] = a.images ?? [];
  return (
    <div>
      {(img1 || img2) && (
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {img1 ? (
            <div className="relative aspect-video">
              <Image
                src={img1.url}
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
                src={img2.url}
                alt={a.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl object-cover shadow-md"
              />
            </div>
          ) : null}
        </div>
      )}
      <CardBody a={a} />
    </div>
  );
}

function AutoCard({ a }: { a: ActivityItem }) {
  const imgs = (a.images ?? []).filter((i) => i.url);
  if (imgs.length === 0) return <CardBody a={a} />;
  if (imgs.length === 1) return <SinglePhotoCard a={a} img={imgs[0]} />;
  return <TwoPhotoCard a={a} />;
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
          <AutoCard a={a} />
        </motion.div>
      ))}
    </div>
  );
}