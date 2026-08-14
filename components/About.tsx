import Image from "next/image";

const items = [
  {
    title: "Lingkungan",
    text: "Edukasi lingkungan hidup, pengelolaan sampah & ekonomi sirkular, urban farming.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
  },
  {
    title: "Karakter",
    text: "Penguatan karakter, parenting, dan pencegahan perundungan.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
  {
    title: "Kesehatan",
    text: "Edukasi kesehatan dan pencegahan penyalahgunaan NAPZA.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about-us" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-white p-10 shadow-2xl md:p-16">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-mid-green">
            About Us
          </p>
          <h2 className="mb-12 text-center text-3xl font-extrabold text-teal-brand md:text-4xl">
            Program Edukasi Generasi Masa Depan
          </h2>

          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="mb-8 text-base leading-relaxed text-slate-600">
                NexGen adalah program edukasi yang membangun generasi berkarakter,
                sehat, dan peduli lingkungan. Kami mengajarkan lewat pengalaman
                nyata, bukan sekadar materi, agar peserta langsung mampu
                menerapkannya dalam kehidupan sehari-hari.
              </p>

              <div className="mb-8 grid gap-4 sm:grid-cols-3">
                {items.map((i) => (
                  <div
                    key={i.title}
                    className="rounded-2xl border border-accent-lime/30 bg-accent-lime/10 p-5 transition hover:border-accent-lime/60 hover:shadow-md"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-lime text-teal-brand">
                      {i.icon}
                    </div>
                    <h3 className="mb-1 text-sm font-bold text-teal-brand">{i.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-500">{i.text}</p>
                  </div>
                ))}
              </div>

              <p className="text-base leading-relaxed text-slate-600">
                Bersama sekolah, pemerintah, perusahaan, dan komunitas, NexGen
                menciptakan lingkungan belajar yang aman, sehat, dan
                berkelanjutan.
              </p>
            </div>

            <div className="flex items-center justify-center md:col-span-5">
              <Image
                src="/images/logo3.jpg"
                alt="NexGen Logo"
                width={280}
                height={280}
                className="rounded-3xl shadow-lg border-4 border-accent-lime/20"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}