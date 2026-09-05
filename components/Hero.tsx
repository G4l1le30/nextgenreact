import Image from "next/image";

const offerings = [
  {
    title: "Pengelolaan Sampah",
    desc: "Pemilahan organik/anorganik, komposting sekolah, & sirkular ekonomi.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
  },
  {
    title: "Satwa Liar & BPBD",
    desc: "Edukasi satwa sekitar & simulasi tanggap bencana resmi bersama BPBD.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
  },
  {
    title: "Parenting & Karakter",
    desc: "Sinergi keluarga-sekolah, komunikasi positif & anti-perundungan (bullying).",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-[20px] pb-[55px]"
      style={{ paddingTop: "20px", paddingBottom: "55px" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-stretch gap-6 sm:gap-8 lg:grid-cols-12">
          {/* Left Column: Deep Olive Accent Panel */}
          <div
            className="flex flex-col justify-between rounded-3xl bg-teal-dark px-5 sm:px-8 lg:px-12 py-6 text-white shadow-2xl lg:col-span-6"
            style={{ paddingTop: "24px", paddingBottom: "24px" }}
          >
            <div>
              <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-accent-lime/30 bg-white/5 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-accent-lime">
                <span className="h-2 w-2 rounded-full bg-accent-lime animate-pulse" />
                Edukasi Sekolah Se-Jabodetabek • Est. 2023
              </div>

              <h1 className="mb-3 sm:mb-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Mendidik Generasi Sekolah yang Tangguh, Peduli &amp;{" "}
                <span className="text-accent-lime">Berdampak</span>
              </h1>

              <p className="mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-300">
                Program edukasi interaktif ke sekolah-sekolah: pengelolaan sampah, edukasi satwa, kesiapsiagaan bencana bersama BPBD, dan penguatan parenting.
              </p>

              <div className="mb-3 sm:mb-4 flex items-center justify-between border-t border-white/10 pt-4 sm:pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-accent-lime">
                  Aktivitas Utama
                </span>
              </div>

              {/* 3 Offerings Cards */}
              <div className="grid gap-2.5 sm:gap-3 sm:grid-cols-3">
                {offerings.map((o) => (
                  <div
                    key={o.title}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-teal-brand/70 p-3 sm:p-4 transition-all duration-300 hover:border-accent-lime/60 hover:bg-teal-brand"
                  >
                    <div className="mb-2 sm:mb-3 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-accent-lime text-teal-dark shadow-sm">
                      {o.icon}
                    </div>
                    <div>
                      <h2 className="mb-1 text-xs sm:text-sm font-bold text-white">{o.title}</h2>
                      <p className="text-[10px] sm:text-[11px] leading-relaxed text-slate-300 line-clamp-2">
                        {o.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 border-t border-white/10 pt-5 sm:pt-6">
              <a
                href="#core-pillars"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-accent-lime px-6 py-3 text-sm font-bold text-teal-dark shadow-lg shadow-accent-lime/20 transition hover:bg-mid-green hover:text-white"
              >
                Jelajahi 4 Program Kami
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a
                href="#about-us"
                className="inline-flex items-center text-sm font-medium text-slate-300 transition hover:text-accent-lime"
              >
                Kisah NexGen &darr;
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual with 3 Floating Badges */}
          <div className="relative flex flex-col justify-center rounded-3xl bg-white p-4 sm:p-6 lg:p-8 shadow-xl border border-slate-200/60 lg:col-span-6 dark:bg-[#151f0a] dark:border-white/10">
            <div className="relative overflow-hidden rounded-2xl shadow-inner group">
              <Image
                src="/images/kegiatan1.jpg"
                alt="Edukasi Lapangan Sekolah NexGen"
                width={700}
                height={520}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="h-[280px] sm:h-[460px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute left-2.5 top-2.5 sm:left-6 sm:top-6 flex items-center gap-1.5 sm:gap-2 rounded-full border border-teal-dark/10 bg-accent-lime px-2.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-extrabold text-teal-dark shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105">
                <span className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-teal-dark text-accent-lime">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/></svg>
                </span>
                Kolaborasi Resmi BPBD
              </div>

              {/* Floating Badge 2 - Top Right */}
              <div className="absolute right-2.5 top-2.5 sm:right-6 sm:top-6 flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/40 bg-white/95 px-2.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-extrabold text-teal-brand shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105 dark:bg-slate-900/90 dark:text-accent-lime dark:border-white/20">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#619111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Se-Jabodetabek
              </div>

              {/* Floating Badge 3 - Bottom Left */}
              <div className="absolute bottom-2.5 left-2.5 sm:bottom-6 sm:left-6 flex items-center gap-1.5 sm:gap-2.5 rounded-full border border-white/20 bg-mid-green/95 px-2.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-extrabold text-white shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105">
                <span className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-white text-mid-green">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </span>
                Simulasi Praktik Langsung
              </div>
            </div>

            {/* Quick Caption under image */}
            <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                Kunjungan Edukasi Sekolah
              </span>
              <span className="font-semibold text-teal-brand text-[11px] sm:text-xs dark:text-accent-lime">NexGen Jabodetabek</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
