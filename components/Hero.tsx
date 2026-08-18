import Image from "next/image";

const offerings = [
  {
    title: "Lingkungan Hidup",
    desc: "Edukasi sirkular ekonomi, daur ulang sampah & urban farming.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
  },
  {
    title: "Pembinaan Karakter",
    desc: "Penguatan moral, anti-bullying, kepemimpinan & empati generasi muda.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
  {
    title: "Kesehatan Terpadu",
    desc: "Pencegahan penyalahgunaan NAPZA, hidup sehat, & sanitasi sekolah.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          {/* Left Column: Deep Olive Accent Panel */}
          <div className="flex flex-col justify-between rounded-3xl bg-teal-dark p-8 text-white shadow-2xl lg:col-span-6 lg:p-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-lime/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-lime">
                <span className="h-2 w-2 rounded-full bg-accent-lime animate-pulse" />
                Inisiatif Masa Depan
              </div>

              <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Mendidik Generasi yang Peduli &amp;{" "}
                <span className="text-accent-lime">Berdampak</span>
              </h1>

              <p className="mb-8 text-base leading-relaxed text-slate-300 sm:text-lg">
                Program edukasi lingkungan, karakter, dan kesehatan berbasis aksi nyata untuk menciptakan perubahan berkelanjutan di sekolah dan komunitas.
              </p>

              <div className="mb-4 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-accent-lime">
                  Our Offerings
                </span>
                <span className="text-xs text-slate-400">3 Pilar Utama</span>
              </div>

              {/* 3 Offerings Cards */}
              <div className="grid gap-3 sm:grid-cols-3">
                {offerings.map((o) => (
                  <div
                    key={o.title}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-teal-brand/70 p-4 transition-all duration-300 hover:border-accent-lime/60 hover:bg-teal-brand"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-accent-lime text-teal-dark shadow-sm">
                      {o.icon}
                    </div>
                    <div>
                      <h2 className="mb-1 text-sm font-bold text-white">{o.title}</h2>
                      <p className="text-[11px] leading-relaxed text-slate-300 line-clamp-2">
                        {o.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
              <a
                href="#our-activity"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-lime px-6 py-3 text-sm font-bold text-teal-dark shadow-lg shadow-accent-lime/20 transition hover:bg-mid-green hover:text-white"
              >
                Lihat Kegiatan Kami
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a
                href="#about-us"
                className="inline-flex items-center text-sm font-medium text-slate-300 transition hover:text-accent-lime"
              >
                Pelajari Lebih Lanjut &darr;
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual with 3 Floating Badges */}
          <div className="relative flex flex-col justify-center rounded-3xl bg-white p-6 shadow-xl border border-slate-200/60 lg:col-span-6 lg:p-8">
            <div className="relative overflow-hidden rounded-2xl shadow-inner group">
              <Image
                src="/images/kegiatan1.jpg"
                alt="NexGen Kegiatan Lapangan"
                width={700}
                height={520}
                className="h-[360px] sm:h-[460px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-teal-dark/10 bg-accent-lime px-4 py-2 text-xs font-extrabold text-teal-dark shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105 sm:left-6 sm:top-6">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-dark text-accent-lime">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/></svg>
                </span>
                Edukasi Lapangan Aktif
              </div>

              {/* Floating Badge 2 - Top Right */}
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/40 bg-white/95 px-4 py-2 text-xs font-extrabold text-teal-brand shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105 sm:right-6 sm:top-6">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#619111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                100+ Mitra Sekolah
              </div>

              {/* Floating Badge 3 - Bottom Left */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-full border border-white/20 bg-mid-green/95 px-4 py-2 text-xs font-extrabold text-white shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105 sm:bottom-6 sm:left-6">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-mid-green">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </span>
                Dampak Berkelanjutan
              </div>
            </div>

            {/* Quick Caption under image */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                Workshop &amp; Simulasi Praktik Nyata
              </span>
              <span className="font-semibold text-teal-brand">NexGen Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}