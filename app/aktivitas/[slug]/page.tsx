import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getActivityBySlug,
  getAllActivitySlugs,
  getRelatedActivities,
  getActivitiesPage,
  toItem,
} from "@/lib/sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllActivitySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = await getActivityBySlug(slug);

  if (!activity) {
    return {
      title: "Aktivitas Tidak Ditemukan - NexGen",
      description: "Halaman aktivitas yang Anda cari tidak ditemukan.",
    };
  }

  const primaryImage = activity.images?.[0]?.url;

  return {
    title: `${activity.title} - NexGen`,
    description: activity.description,
    openGraph: {
      title: activity.title,
      description: activity.description,
      type: "article",
      images: primaryImage ? [{ url: primaryImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: activity.title,
      description: activity.description,
      images: primaryImage ? [primaryImage] : [],
    },
  };
}

export default async function ActivityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const activity = await getActivityBySlug(slug);

  if (!activity) {
    notFound();
  }

  const [related, recentRaw] = await Promise.all([
    getRelatedActivities(activity._id, 3),
    getActivitiesPage(1, 6),
  ]);
  const recentActivities = recentRaw.map(toItem).filter((item) => item._id !== activity._id);

  const primaryImage = activity.images?.[0];
  const galleryImages = activity.images?.slice(1) ?? [];

  // Paragraf artikel: ambil dari content jika ada, filter agar tidak menduplikasi description/lead
  const rawParagraphs = (activity.content || "")
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  const paragraphs = rawParagraphs.filter(
    (p) => p.toLowerCase() !== activity.description?.trim().toLowerCase()
  );

  const shareText = encodeURIComponent(
    `Baca dokumentasi kegiatan NexGen: "${activity.title}"`
  );
  const shareWaUrl = `https://wa.me/?text=${shareText}`;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50/70 py-8 sm:py-12 lg:py-16 dark:bg-[#0c1205]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Top Bar Action with Sidoarjo Back Button */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <BackButton href="/galeri" label="Ke Galeri" />

            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
            >
              <Link
                href="/"
                className="transition hover:text-teal-brand dark:hover:text-accent-lime"
              >
                Beranda
              </Link>
              <span>/</span>
              <Link
                href="/galeri"
                className="transition hover:text-teal-brand dark:hover:text-accent-lime"
              >
                Berita &amp; Aktivitas
              </Link>
              <span>/</span>
              <span className="max-w-[180px] sm:max-w-xs truncate font-semibold text-teal-brand dark:text-accent-lime">
                {activity.title}
              </span>
            </nav>
          </div>

          {/* Sidoarjo 2-Column News Detail Layout */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Column (8 cols): Main News Detail Article */}
            <div className="lg:col-span-8">
              <article className="rounded-2xl bg-white p-6 sm:p-10 shadow-sm border border-slate-200/80 dark:bg-[#151f0a] dark:border-white/10">
                {/* Sidoarjo news-head: Featured Image at Top */}
                {primaryImage && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm dark:bg-slate-800">
                    <Image
                      src={primaryImage.url}
                      alt={activity.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 760px"
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Article Title & Metadata Bar */}
                <header className="mt-6">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight text-teal-brand dark:text-white">
                    {activity.title}
                  </h1>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
                    <div className="flex flex-wrap items-center gap-2.5">
                      {activity.date && (
                        <span className="font-semibold text-slate-600 dark:text-slate-300">
                          {activity.date}
                        </span>
                      )}
                      <span>|</span>
                      {activity.tag ? (
                        <span className="rounded bg-accent-lime/40 px-2 py-0.5 text-[10px] font-bold text-teal-brand dark:bg-accent-lime/20 dark:text-accent-lime">
                          {activity.tag}
                        </span>
                      ) : (
                        <span>Tim Edukasi NexGen</span>
                      )}
                    </div>
                    <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                      Dokumentasi Resmi
                    </span>
                  </div>
                </header>

                {/* Sidoarjo news-desc: Article Text & Justified Formatting */}
                <div className="mt-6">
                  {/* Lead Summary Callout */}
                  {activity.description && (
                    <div className="mb-6 rounded-xl border-l-4 border-accent-lime bg-accent-lime/15 p-4 sm:p-5 text-xs sm:text-sm font-medium leading-relaxed text-teal-brand dark:text-accent-lime">
                      {activity.description}
                    </div>
                  )}

                  {/* Body Paragraphs */}
                  {paragraphs.length > 0 && (
                    <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200 text-justify">
                      {paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  )}

                  {/* Additional Photo Gallery Grid */}
                  {galleryImages.length > 0 && (
                    <div className="mt-10 pt-8 border-t border-slate-100 dark:border-white/10">
                      <div className="mb-4">
                        <h3 className="text-sm sm:text-base font-bold text-teal-brand dark:text-white">
                          Dokumentasi Foto Lapangan
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Foto kegiatan bersama para siswa, relawan, dan instruktur BPBD.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {galleryImages.map((img, idx) => (
                          <div
                            key={idx}
                            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 border border-slate-200/60 shadow-sm dark:bg-slate-800 dark:border-white/10"
                          >
                            <Image
                              src={img.url}
                              alt={`${activity.title} dokumentasi ${idx + 2}`}
                              fill
                              sizes="(max-width: 640px) 100vw, 360px"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Share & Interaction Bar */}
                  <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 dark:border-white/10 pt-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Bagikan Dokumentasi:
                    </span>
                    <div className="flex items-center gap-2.5">
                      <a
                        href={shareWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow transition hover:bg-emerald-700"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                        </svg>
                        Bagikan ke WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sidoarjo news-pagination Style Bottom Back Action */}
              <div className="mt-8 flex items-center justify-between">
                <BackButton href="/galeri" label="Ke Galeri" />
                <Link
                  href="/galeri"
                  className="group/btn relative inline-block text-xs font-bold tracking-wide text-teal-brand transition-all duration-300 hover:tracking-wider hover:text-mid-green dark:text-accent-lime dark:hover:text-white"
                >
                  <span>Lihat Semua Dokumentasi &rarr;</span>
                  <span className="block h-[1.5px] w-0 bg-teal-brand transition-all duration-300 group-hover/btn:w-full dark:bg-accent-lime" />
                </Link>
              </div>

              {/* Related Activities Section (Sidoarjo small-card style) */}
              {related.length > 0 && (
                <section className="mt-12">
                  <div className="mb-6 border-b border-slate-200 pb-3 dark:border-white/10">
                    <h2 className="text-lg font-bold uppercase tracking-wide text-teal-brand dark:text-white">
                      Dokumentasi Terkait
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {related.map((item) => {
                      const itemImg = item.images?.[0]?.url;
                      const itemUrl = `/aktivitas/${item.slug || item._id}`;
                      return (
                        <article
                          key={item._id}
                          className="flex flex-col justify-between rounded-2xl bg-white p-4 shadow-sm border border-slate-200/80 transition-all duration-300 hover:shadow-md dark:bg-[#151f0a] dark:border-white/10"
                        >
                          <div>
                            {/* Date */}
                            <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                              {item.date || "Dokumentasi"}
                            </span>

                            {/* Title */}
                            <h3 className="mt-1.5 text-xs sm:text-sm font-bold text-teal-brand line-clamp-2 min-h-[38px] hover:text-mid-green transition dark:text-white dark:hover:text-accent-lime">
                              <Link href={itemUrl}>{item.title}</Link>
                            </h3>

                            {/* Image */}
                            {itemImg && (
                              <Link
                                href={itemUrl}
                                className="relative my-2 block h-32 w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 group/img"
                              >
                                <Image
                                  src={itemImg}
                                  alt={item.title}
                                  fill
                                  sizes="(max-width: 640px) 100vw, 240px"
                                  className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                                />
                              </Link>
                            )}

                            {/* Excerpt */}
                            <p className="text-xs leading-relaxed text-slate-600 line-clamp-3 dark:text-slate-300 text-justify">
                              {item.description}
                            </p>
                          </div>

                          {/* btn-2 Style Link */}
                          <div className="mt-3 pt-2 border-t border-slate-100 dark:border-white/10">
                            <Link
                              href={itemUrl}
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
                </section>
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
