import Link from "next/link";

export default function Pagination({
  current,
  totalPages,
  basePath = "/galeri",
}: {
  current: number;
  totalPages: number;
  basePath?: string;
}) {
  if (totalPages <= 1) return null;

  const href = (p: number) =>
    `${basePath}${p === 1 ? "" : `?page=${p}`}`;

  const base =
    "inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-medium transition";
  const active = "bg-teal-brand text-white";
  const idle = "bg-white text-teal-brand shadow hover:bg-chip";

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