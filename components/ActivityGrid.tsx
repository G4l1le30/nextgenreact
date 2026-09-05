import Image from "next/image";
import Link from "next/link";

export type ActivityImage = {
  url: string;
  width?: number;
  height?: number;
};

export type ActivityItem = {
  _id: string;
  title: string;
  slug?: string;
  description: string;
  content?: string;
  tag?: string;
  date?: string;
  images?: ActivityImage[];
};

function Card({ a }: { a: ActivityItem }) {
  const img = (a.images ?? []).find((i) => i.url);
  const detailUrl = `/aktivitas/${a.slug || a._id}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-accent-lime dark:bg-[#151f0a] dark:border-white/10 dark:hover:border-accent-lime">
      {img && (
        <Link href={detailUrl} className="viewfinder-bracket relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 block">
          <Image
            src={img.url}
            alt={a.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
        </Link>
      )}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          {(a.tag || a.date) && (
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {a.tag && (
                <span className="rounded-md bg-accent-lime/60 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-teal-brand dark:bg-accent-lime/20 dark:text-accent-lime">
                  {a.tag}
                </span>
              )}
              {a.date && (
                <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                  {a.date}
                </span>
              )}
            </div>
          )}
          <h3 className="mb-2 text-base sm:text-lg font-bold text-teal-brand line-clamp-2 group-hover:text-mid-green transition-colors dark:text-white dark:group-hover:text-accent-lime">
            <Link href={detailUrl} className="hover:underline">
              {a.title}
            </Link>
          </h3>
          <p className="line-clamp-3 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300">
            {a.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
          <Link
            href={detailUrl}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-brand transition group-hover:text-mid-green dark:text-accent-lime dark:group-hover:text-white"
          >
            Baca Selengkapnya
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
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