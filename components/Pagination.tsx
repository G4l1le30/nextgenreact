import Link from "next/link";

export default function Pagination({
  current,
  totalPages,
  basePath = "/galeri",
  keyword,
}: {
  current: number;
  totalPages: number;
  basePath?: string;
  keyword?: string;
}) {
  if (totalPages <= 1) return null;

  const href = (p: number) => {
    const params = new URLSearchParams();
    if (p > 1) params.set("page", String(p));
    if (keyword) params.set("keyword", keyword);
    const qs = params.toString();
    return `${basePath}${qs ? `?${qs}` : ""}`;
  };

  const base =
    "inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-xs sm:text-sm font-semibold transition-all duration-200";
  const active =
    "bg-teal-brand text-accent-lime font-bold shadow-md dark:bg-accent-lime dark:text-teal-dark";
  const idle =
    "bg-white text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-100 hover:text-teal-brand dark:bg-white/10 dark:text-slate-300 dark:border-white/10 dark:hover:bg-accent-lime dark:hover:text-teal-brand";

  return (
    <nav className="mt-10 flex flex-wrap items-center justify-center gap-2">
      {current > 1 && (
        <Link href={href(current - 1)} className={`${base} ${idle}`}>
          &larr; Prev
        </Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <Link
          key={p}
          href={href(p)}
          className={`${base} ${p === current ? active : idle}`}
          aria-current={p === current ? "page" : undefined}
        >
          {p}
        </Link>
      ))}
      {current < totalPages && (
        <Link href={href(current + 1)} className={`${base} ${idle}`}>
          Next &rarr;
        </Link>
      )}
    </nav>
  );
}