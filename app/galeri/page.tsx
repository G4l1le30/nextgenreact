import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getActivitiesPage, getActivityCount, toItem } from "@/lib/sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import Pagination from "@/components/Pagination";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Berita & Aktivitas - NexGen",
  description: "Dokumentasi kegiatan edukasi bencana, konservasi satwa, dan kemitraan sekolah NexGen se-Jabodetabek.",
};

const ITEMS_PER_PAGE = 10;

export default async function Galeri({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; keyword?: string }>;
}) {
  const params = await searchParams;
  const pageNum = Math.max(1, Number.parseInt(params.page ?? "1", 10) || 1);
  const keyword = params.keyword?.trim() || "";

  let items: ReturnType<typeof toItem>[] = [];
  let total = 0;
  let recentActivities: ReturnType<typeof toItem>[] = [];

  try {
    const [raw, count, recentRaw] = await Promise.all([
      getActivitiesPage(pageNum, ITEMS_PER_PAGE, keyword),
      getActivityCount(keyword),
      pageNum === 1 && !keyword ? Promise.resolve([]) : getActivitiesPage(1, 6),
    ]);
    items = raw.map(toItem);
    total = count;
    recentActivities = recentRaw.length > 0 ? recentRaw.map(toItem) : items.slice(0, 6);
  } catch {
    items = [];
    total = 0;
    recentActivities = [];
  }

  const totalPages = Math.max(1, Math.ceil(total / ITEMS_PER_PAGE));

  // Di halaman 1 tanpa keyword, pisahkan kartu pertama sebagai large-card
  const showLargeCard = pageNum === 1 && !keyword && items.length > 0;
  const featuredItem = showLargeCard ? items[0] : null;
  const cardItems = showLargeCard ? items.slice(1) : items;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50/70 py-8 sm:py-12 lg:py-16 dark:bg-[#0c1205]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Top Bar Action */}
          <div className="mb-6 flex items-center justify-between">
            <BackButton href="/" label="Kembali" />
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Dokumentasi Resmi
            </span>
          </div>

          {/* Section Title (u-title style) */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-teal-brand dark:text-white">
              Berita &amp; Aktivitas
            </h1>
            <div className="mt-2 h-1 w-20 rounded-full bg-accent-lime" />
          </div>

          {/* Sidoarjo 2-Column Layout */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Column (8 cols): Main News Stream */}
            <div className="lg:col-span-8">
              {/* Search Bar Form (form-style Sidoarjo) */}
              <form action="/galeri" method="GET" className="mb-8 flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    name="keyword"
                    defaultValue={keyword}
                    placeholder="Masukkan kata kunci..."
                    className="w-full rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs sm:text-sm text-slate-800 shadow-sm focus:border-teal-brand focus:outline-none dark:border-white/10 dark:bg-[#151f0a] dark:text-white"
                  />
                  {keyword && (
                    <Link
                      href="/galeri"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white"
                    >
                      Reset
                    </Link>
                  )}
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-teal-brand px-6 py-2.5 text-xs sm:text-sm font-bold text-accent-lime shadow transition hover:bg-mid-green hover:text-white dark:bg-accent-lime dark:text-teal-dark dark:hover:bg-white"
                >
                  Cari
                </button>
              </form>

              {/* Status Pencarian jika ada keyword */}
              {keyword && (
                <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-3 text-xs sm:text-sm text-slate-600 dark:border-white/10 dark:text-slate-400">
                  <p>
                    Hasil pencarian: <span className="font-bold text-teal-brand dark:text-accent-lime">&ldquo;{keyword}&rdquo;</span> ({total} kegiatan ditemukan)
                  </p>
                  <Link href="/galeri" className="font-semibold text-mid-green hover:underline dark:text-accent-lime">
                    Tampilkan Semua
                  </Link>
                </div>
              )}

              {items.length === 0 ? (
                <div className="rounded-2xl bg-white p-12 text-center shadow-sm border border-slate-200 dark:bg-[#151f0a] dark:border-white/10">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Tidak ada kegiatan yang cocok dengan kata kunci &ldquo;{keyword}&rdquo;.
                  </p>
                  <Link
                    href="/galeri"
                    className="mt-4 inline-block rounded-full bg-teal-brand px-5 py-2 text-xs font-bold text-accent-lime"
                  >
                    Kembali ke Semua Kegiatan
                  </Link>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Sidoarjo large-card (Featured Hero News Item) */}
                  {featuredItem && (
                    <div className="relative h-[360px] sm:h-[400px] w-full overflow-hidden rounded-2xl shadow-md border border-slate-200 group dark:border-white/10">
                      {featuredItem.images?.[0]?.url && (
                        <Image
                          src={featuredItem.images[0].url}
                          alt={featuredItem.title}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 760px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40" />

                      {/* Content Box Overlay (card-content Sidoarjo) */}
                      <div className="absolute top-0 left-0 h-full w-full sm:w-3/5 bg-teal-dark/90 p-6 sm:p-8 flex flex-col justify-between text-white backdrop-blur-sm sm:rounded-l-2xl">
                        <div>
                          <div className="flex items-center gap-2">
                            {featuredItem.date && (
                              <span className="text-xs font-semibold text-accent-lime uppercase tracking-wider">
                                {featuredItem.date}
                              </span>
                            )}
                            {featuredItem.tag && (
                              <span className="rounded bg-accent-lime/20 px-2 py-0.5 text-[10px] font-bold text-accent-lime">
                                {featuredItem.tag}
                              </span>
                            )}
                          </div>
                          <h2 className="mt-3 text-lg sm:text-xl font-extrabold leading-snug line-clamp-3 text-white">
                            <Link
                              href={`/aktivitas/${featuredItem.slug || featuredItem._id}`}
                              className="hover:text-accent-lime transition"
                            >
                              {featuredItem.title}
                            </Link>
                          </h2>
                          <p className="mt-3 text-xs sm:text-sm text-slate-200 line-clamp-3 leading-relaxed">
                            {featuredItem.description}
                          </p>
                        </div>

                        <div className="pt-4">
                          <Link
                            href={`/aktivitas/${featuredItem.slug || featuredItem._id}`}
                            className="group/btn relative inline-block text-xs sm:text-sm font-bold tracking-wide text-accent-lime transition-all duration-300 hover:tracking-wider hover:text-white"
                          >
                            <span>Selengkapnya</span>
                            <span className="block h-[2px] w-0 bg-accent-lime transition-all duration-300 group-hover/btn:w-full" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Sidoarjo small-card Grid (3 Columns) */}
                  {cardItems.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {cardItems.map((item) => {
                        const img = item.images?.[0]?.url;
                        const detailUrl = `/aktivitas/${item.slug || item._id}`;

                        return (
                          <article
                            key={item._id}
                            className="flex flex-col justify-between rounded-2xl bg-white p-4 shadow-sm border border-slate-200/80 transition-all duration-300 hover:shadow-md dark:bg-[#151f0a] dark:border-white/10"
                          >
                            <div>
                              {/* 1. Date Span at Top */}
                              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                                <span>{item.date || "Dokumentasi"}</span>
                                {item.tag && (
                                  <span className="rounded bg-accent-lime/40 px-1.5 py-0.5 text-[9px] font-bold text-teal-brand dark:bg-accent-lime/20 dark:text-accent-lime">
                                    {item.tag}
                                  </span>
                                )}
                              </div>

                              {/* 2. Title (2-lines clamp) */}
                              <h3 className="mt-2 text-sm font-bold text-teal-brand line-clamp-2 min-h-[40px] hover:text-mid-green transition dark:text-white dark:hover:text-accent-lime">
                                <Link href={detailUrl}>{item.title}</Link>
                              </h3>

                              {/* 3. Image in Middle */}
                              {img && (
                                <Link
                                  href={detailUrl}
                                  className="relative my-2.5 block h-40 w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 group/img"
                                >
                                  <Image
                                    src={img}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 240px"
                                    className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                                  />
                                </Link>
                              )}

                              {/* 4. Excerpt Paragraph (line-clamp-4) */}
                              <p className="text-xs leading-relaxed text-slate-600 line-clamp-4 dark:text-slate-300 text-justify">
                                {item.description}
                              </p>
                            </div>

                            {/* 5. Button-2 Style Link with Underline Animation */}
                            <div className="mt-4 pt-2 border-t border-slate-100 dark:border-white/10">
                              <Link
                                href={detailUrl}
                                className="group/btn relative inline-block text-xs font-bold tracking-wide text-teal-brand transition-all duration-300 hover:tracking-wider hover:text-mid-green dark:text-accent-lime dark:hover:text-white"
                              >
                                <span>Selengkapnya</span>
                                <span className="block h-[1.5px] w-0 bg-teal-brand transition-all duration-300 group-hover/btn:w-full dark:bg-accent-lime" />
                              </Link>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  )}

                  {/* Pagination */}
                  <Pagination current={pageNum} totalPages={totalPages} keyword={keyword} />
                </div>
              )}
            </div>

            {/* Right Column (4 cols): Sidoarjo Sidebar (.news-tab & CTA) */}
            <aside className="space-y-6 lg:col-span-4">
              {/* Sidoarjo news-tab Box: Aktivitas Terkini */}
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200/80 dark:bg-[#151f0a] dark:border-white/10">
                <div className="mb-4 border-b border-slate-100 pb-3 dark:border-white/10">
                  <h2 className="text-base font-bold uppercase tracking-wide text-teal-brand dark:text-white">
                    Aktivitas Terkini
                  </h2>
                </div>

                <ul className="divide-y divide-slate-100 dark:divide-white/10">
                  {recentActivities.map((r) => {
                    const rUrl = `/aktivitas/${r.slug || r._id}`;
                    return (
                      <li key={r._id} className="py-3 first:pt-0 last:pb-0">
                        {r.date && (
                          <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                            {r.date}
                          </span>
                        )}
                        <Link
                          href={rUrl}
                          className="mt-1 block text-xs sm:text-sm font-semibold leading-snug text-slate-700 transition hover:text-mid-green hover:underline dark:text-slate-200 dark:hover:text-accent-lime line-clamp-2"
                        >
                          {r.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Sidebar Box: Kemitraan Sekolah Sidoarjo CTA Style */}
              <div className="rounded-2xl bg-teal-dark p-6 text-white shadow-md border border-teal-brand/40">
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent-lime">
                  Kemitraan Sekolah
                </span>
                <h3 className="mt-2 text-base font-extrabold text-white leading-snug">
                  Ingin Mengadakan Kegiatan Serupa di Sekolah Anda?
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Tim NexGen siap memfasilitasi simulasi kebencanaan BPBD, pilah sampah organik/anorganik, dan edukasi satwa langsung ke sekolah.
                </p>
                <a
                  href="https://wa.me/6285883259710?text=Halo%20NexGen,%20saya%20tertarik%20untuk%20mengundang%20NexGen%20ke%20sekolah%20kami."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-lime px-4 py-2.5 text-xs font-bold text-teal-dark shadow transition hover:bg-mid-green hover:text-white"
                >
                  Hubungi via WhatsApp &rarr;
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}