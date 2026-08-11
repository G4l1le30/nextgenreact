import Link from "next/link";

function pageHref(page: number) {
  return page === 1 ? "/" : `/?page=${page}`;
}

export default function Pagination({
  current,
  totalPages,
}: {
  current: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const base = "inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-medium transition";
  const active = "bg-teal-brand text-white";
  const idle = "bg-white text-teal-brand shadow hover:bg-chip";

  return (
    <nav className="mt-10 flex items-center justify-center gap-2">
      {current > 1 && (
        <Link href={pageHref(current - 1)} className={`${base} ${idle}`}>
          &larr; Prev
        </Link>
      )}

      {pages.map((p) => (
        <Link
          key={p}
          href={pageHref(p)}
          className={`${base} ${p === current ? active : idle}`}
          aria-current={p === current ? "page" : undefined}
        >
          {p}
        </Link>
      ))}

      {current < totalPages && (
        <Link href={pageHref(current + 1)} className={`${base} ${idle}`}>
          Next &rarr;
        </Link>
      )}
    </nav>
  );
}