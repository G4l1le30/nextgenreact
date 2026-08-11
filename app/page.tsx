import { urlFor, getActivitiesPage, getActivityCount, PER_PAGE } from "@/lib/sanity";
import type { Activity } from "@/lib/sanity";
import type { ActivityItem } from "@/components/ActivityList";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sponsor from "@/components/Sponsor";
import ActivityList from "@/components/ActivityList";
import Pagination from "@/components/Pagination";
import Office from "@/components/Office";
import Footer from "@/components/Footer";

export const revalidate = 3600;

function toItem(a: Activity): ActivityItem {
  return {
    _id: a._id,
    title: a.title,
    description: a.description,
    tag: a.tag,
    date: a.date,
    layout: a.layout,
    images: (a.images ?? [])
      .map((img) => (img.asset?._ref ? urlFor(img).width(800).url() : null))
      .filter((u): u is string => Boolean(u)),
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const pageNum = Math.max(1, Number.parseInt(params.page ?? "1", 10) || 1);

  let activities: ActivityItem[] = [];
  let total = 0;
  try {
    const [raw, count] = await Promise.all([
      getActivitiesPage(pageNum),
      getActivityCount(),
    ]);
    activities = raw.map(toItem);
    total = count;
  } catch {
    activities = [];
    total = 0;
  }

  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sponsor />
        <section id="our-activity">
          <div className="bg-gradient-to-br from-village-start to-village-end py-20">
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="mb-4 text-center text-3xl font-bold uppercase tracking-wide text-teal-brand md:text-4xl">
                Our Activity
              </h2>
              <p className="mx-auto mb-4 max-w-2xl text-center text-slate-600">
                Di sini, Anda dapat melihat berbagai kegiatan yang dilaksanakan
                oleh NexGen
              </p>
              {activities.length === 0 ? (
                <p className="mt-8 text-center text-slate-500">
                  Belum ada kegiatan. Admin dapat menambahkan lewat studio.
                </p>
              ) : (
                <>
                  <ActivityList activities={activities} />
                  <Pagination current={pageNum} totalPages={totalPages} />
                </>
              )}
            </div>
          </div>
        </section>
        <Office />
      </main>
      <Footer />
    </>
  );
}