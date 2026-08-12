import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getActivitiesPage, getActivityCount, PER_PAGE, toItem } from "@/lib/sanity";
import BackButton from "@/components/BackButton";
import Pagination from "@/components/Pagination";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Galeri - NexGen",
  description: "Semua aktivitas NexGen",
};

export default async function Galeri({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const pageNum = Math.max(1, Number.parseInt(params.page ?? "1", 10) || 1);

  let items: ReturnType<typeof toItem>[] = [];
  let total = 0;
  try {
    const [raw, count] = await Promise.all([
      getActivitiesPage(pageNum),
      getActivityCount(),
    ]);
    items = raw.map(toItem);
    total = count;
  } catch {
    items = [];
    total = 0;
  }

  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));

  return (
    <main className="min-h-screen bg-gradient-to-br from-village-start to-village-end">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <BackButton />
        <h1 className="u-title mt-6 mb-10 text-center text-4xl font-bold uppercase tracking-wide text-teal-brand">
          Galeri
        </h1>

        {items.length === 0 ? (
          <p className="mt-8 text-center text-slate-500">
            Belum ada kegiatan. Admin dapat menambahkan lewat studio.
          </p>
        ) : (
          <>
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
              {items.map((a) => {
                const img = (a.images ?? []).find((i) => i.url);
                return (
                  <div
                    key={a._id}
                    className="mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-lg"
                  >
                    {img && (
                      <div className="relative w-full">
                        <Image
                          src={img.url}
                          alt={a.title}
                          width={img.width ?? 400}
                          height={img.height ?? 300}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="h-auto w-full"
                        />
                      </div>
                    )}
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4">
                        <p className="text-sm font-medium text-slate-700">
                          {a.title}
                        </p>
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
                          className="shrink-0 text-teal-brand transition-transform group-open:rotate-180"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4">
                        <p className="text-sm leading-relaxed text-slate-600">
                          {a.description}
                        </p>
                        {(a.tag || a.date) && (
                          <div className="mt-3 flex flex-wrap items-center gap-2">
                            {a.date && (
                              <span className="rounded-full bg-chip px-3 py-1 text-xs font-medium text-teal-brand">
                                {a.date}
                              </span>
                            )}
                            {a.tag && (
                              <span className="rounded-full bg-chip px-3 py-1 text-xs font-medium text-teal-brand">
                                {a.tag}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </details>
                  </div>
                );
              })}
            </div>
            <Pagination current={pageNum} totalPages={totalPages} />
          </>
        )}

        <div className="mt-10 flex justify-center">
          <Link href="/" className="text-teal-brand underline-offset-4 transition hover:underline">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}