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

function Card({ a }: { a: ActivityItem }) {
  const img = (a.images ?? []).find((i) => i.url);
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      {img && (
        <div className="relative aspect-video w-full">
          <Image
            src={img.url}
            alt={a.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-xl font-bold text-teal-brand">{a.title}</h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
          {a.description}
        </p>
        {(a.tag || a.date) && (
          <div className="mt-4 flex flex-wrap items-center gap-3">
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
      </div>
    </article>
  );
}

export default function ActivityGrid({
  activities,
}: {
  activities: ActivityItem[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {activities.map((a) => (
        <Card key={a._id} a={a} />
      ))}
    </div>
  );
}