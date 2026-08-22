import Link from "next/link";
import { getActivitiesPage, toItem } from "@/lib/sanity";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CollaborationImpact from "@/components/CollaborationImpact";
import ActivityGrid from "@/components/ActivityGrid";
import CorePillars from "@/components/CorePillars";
import CtaBanner from "@/components/CtaBanner";
import Office from "@/components/Office";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export default async function Home() {
  let recent: ReturnType<typeof toItem>[] = [];
  try {
    recent = (await getActivitiesPage(1, 6)).map(toItem);
  } catch {
    recent = [];
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* 1. Hero Section (Split Layout) */}
        <Hero />

        {/* 2. About Us Section ("Siapa Kami?") */}
        <About />

        {/* 3. Kerja Sama & Dampak (Sponsor + Bento Grid) - in between About Us and Our Activity */}
        <CollaborationImpact />

        {/* 4. Our Activity Section (Sanity CMS Showcase) */}
        <section id="our-activity" className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent-lime/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-brand dark:bg-accent-lime/20 dark:text-accent-lime">
                <span className="h-2 w-2 rounded-full bg-mid-green" />
                Dokumentasi Kegiatan
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-teal-brand sm:text-4xl dark:text-white">
                Our Activity
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
                Dokumentasi ragam aktivitas, workshop, sosialisasi, dan aksi nyata yang dilaksanakan oleh NexGen bersama mitra.
              </p>
            </div>

            {recent.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm dark:border-white/10 dark:bg-[#151f0a]">
                <p className="text-slate-500 text-sm dark:text-slate-400">
                  Belum ada kegiatan. Admin dapat menambahkan kegiatan baru melalui Sanity Studio.
                </p>
              </div>
            ) : (
              <>
                <ActivityGrid activities={recent} />
                <div className="mt-12 flex justify-center">
                  <Link
                    href="/galeri"
                    className="inline-flex items-center gap-2 rounded-2xl bg-teal-brand px-8 py-3.5 font-bold text-accent-lime shadow-lg shadow-teal-brand/20 transition hover:bg-teal-dark hover:text-white"
                  >
                    Lihat Semua Aktivitas
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>

        {/* 5. Core Pillars / Program Unggulan (4 Dark Olive Cards) */}
        <CorePillars />

        {/* 6. Pre-Footer CTA Banner */}
        <CtaBanner />

        {/* 7. Office Location */}
        <Office />
      </main>
      <Footer />
    </>
  );
}

