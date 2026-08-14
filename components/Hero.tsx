import Image from "next/image";

const offerings = [
  {
    label: "Lingkungan",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
  },
  {
    label: "Karakter",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
  {
    label: "Kesehatan",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      className="bg-gradient-to-br from-village-start to-village-end"
      style={{ padding: "100px 0 120px" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Left column */}
        <div>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Mendidik Generasi yang Peduli &amp;&nbsp;Berdampak
          </h1>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-300">
            Program edukasi lingkungan, karakter, dan kesehatan untuk sekolah
            serta komunitas.
          </p>

          <div className="mb-10 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Our offerings
          </div>
          <div className="mb-10 flex flex-wrap gap-3">
            {offerings.map((o) => (
              <span
                key={o.label}
                className="inline-flex items-center gap-2 rounded-xl border border-mid-green/40 bg-teal-brand px-4 py-2.5 text-sm font-semibold text-white"
              >
                {o.icon}
                {o.label}
              </span>
            ))}
          </div>

          <a
            href="#our-activity"
            className="inline-block rounded-xl bg-accent-lime px-8 py-3.5 font-bold text-teal-brand shadow-lg shadow-accent-lime/20 transition hover:bg-mid-green hover:text-white hover:shadow-mid-green/30"
          >
            Lihat Kegiatan Kami
          </a>
        </div>

        {/* Right column - hero image with floating badges */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/kegiatan1.jpg"
              alt="NexGen Kegiatan"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
              priority
              unoptimized
            />
          </div>

          {/* Floating badge - top-left */}
          <div className="absolute -left-4 top-8 flex items-center gap-2 rounded-full bg-accent-lime px-4 py-2 text-xs font-bold text-teal-brand shadow-lg md:-left-8">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/></svg>
            Edukasi Aktif
          </div>

          {/* Floating badge - top-right */}
          <div className="absolute -right-2 top-1/4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-teal-brand shadow-lg md:-right-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#619111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Berdampak!
          </div>

          {/* Floating badge - bottom */}
          <div className="absolute -bottom-4 left-8 flex items-center gap-2 rounded-full bg-mid-green px-4 py-2 text-xs font-bold text-white shadow-lg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Komunitas Peduli
          </div>
        </div>
      </div>
    </section>
  );
}