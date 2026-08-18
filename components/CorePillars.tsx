export default function CorePillars() {
  const pillars = [
    {
      title: "Edukasi Lingkungan",
      desc: "Pengelolaan sampah mandiri, ekonomi sirkular, urban farming, dan penghijauan sekolah.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      title: "Penguatan Karakter",
      desc: "Anti-bullying, etika digital, kepemimpinan pemuda, integritas, dan empati sosial.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Kesehatan Terpadu",
      desc: "Pencegahan penyalahgunaan NAPZA, edukasi gizi seimbang, dan gaya hidup aktif.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      title: "Pemberdayaan Komunitas",
      desc: "Jejaring kerelawanan pemuda, workshop praktis, dan kolaborasi aksi sosial akar rumput.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section id="core-pillars" className="py-20 lg:py-24 bg-white border-y border-slate-200/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent-lime/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-brand">
            <span className="h-2 w-2 rounded-full bg-mid-green" />
            Program Unggulan
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-teal-brand sm:text-4xl">
            Fondasi Pembinaan Holistik
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Modul terintegrasi yang menggabungkan pembentukan kesadaran lingkungan, ketahanan mental, dan kepedulian sosial.
          </p>
        </div>

        {/* 4 Dark Olive Square Cards inspired by Figma "First Class Software" */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col justify-between rounded-3xl bg-teal-dark p-7 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-teal-brand hover:shadow-2xl"
            >
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-accent-lime transition-transform duration-300 group-hover:scale-110 group-hover:border-accent-lime/50">
                  {p.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white group-hover:text-accent-lime transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-300 line-clamp-3">
                  {p.desc}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold text-accent-lime">
                <span>Modul Terverifikasi</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
