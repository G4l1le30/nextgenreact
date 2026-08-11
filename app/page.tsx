import { getActivitiesPage, getActivityCount, toItem } from "@/lib/sanity";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sponsor from "@/components/Sponsor";
import ActivityFeed from "@/components/ActivityFeed";
import Office from "@/components/Office";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export default async function Home() {
  let initial: ReturnType<typeof toItem>[] = [];
  let total = 0;
  try {
    const [raw, count] = await Promise.all([
      getActivitiesPage(1),
      getActivityCount(),
    ]);
    initial = raw.map(toItem);
    total = count;
  } catch {
    initial = [];
    total = 0;
  }

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
              {total === 0 ? (
                <p className="mt-8 text-center text-slate-500">
                  Belum ada kegiatan. Admin dapat menambahkan lewat studio.
                </p>
              ) : (
                <ActivityFeed initial={initial} total={total} />
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