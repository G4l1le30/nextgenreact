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
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-accent-lime">
      {img && (
        <div className="viewfinder-bracket relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <Image
            src={img.url}
            alt={a.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {(a.tag || a.date) && (
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {a.tag && (
                <span className="rounded-md bg-accent-lime/60 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-teal-brand">
                  {a.tag}
                </span>
              )}
              {a.date && (
                <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                  {a.date}
                </span>
              )}
            </div>
          )}
          <h3 className="mb-2 text-lg font-bold text-teal-brand line-clamp-2 group-hover:text-mid-green transition-colors">
            {a.title}
          </h3>
          <p className="line-clamp-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
            {a.description}
          </p>
        </div>
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