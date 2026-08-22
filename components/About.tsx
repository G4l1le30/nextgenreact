import Image from "next/image";

const values = [
  {
    title: "Simulasi & Praktik Nyata",
    desc: "Bukan sekadar ceramah teori. Siswa dan guru diajak langsung memilah sampah, simulasi evakuasi bencana, hingga pengenalan satwa.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
  },
  {
    title: "Kemitraan Resmi & Ahli",
    desc: "Berkolaborasi erat dengan BPBD untuk modul kebencanaan, instruktur satwa berpengalaman, serta fasilitator parenting profesional.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
  {
    title: "Sinergi Sekolah & Keluarga",
    desc: "Menghubungkan pembiasaan baik di sekolah dengan ketahanan keluarga di rumah melalui program parenting dan penguatan karakter.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about-us" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Board Container */}
        <div className="overflow-hidden rounded-3xl bg-white p-8 shadow-xl border border-slate-200/80 lg:p-14 dark:bg-[#151f0a] dark:border-white/10">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7">
              {/* Header Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-lime/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-brand dark:bg-accent-lime/20 dark:text-accent-lime">
                <span className="h-2 w-2 rounded-full bg-mid-green" />
                Tentang Kami
              </div>

              {/* Siapa Kami Headline */}
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-teal-brand sm:text-4xl dark:text-white">
                Siapa Kami?
              </h2>

              {/* Decorative Accent Line */}
              <div className="mb-6 h-1.5 w-16 rounded-full bg-accent-lime" />

              {/* Primary Narrative */}
              <p className="mb-6 text-lg font-medium leading-relaxed text-slate-800 sm:text-xl dark:text-slate-100">
                NexGen adalah inisiatif edukasi anak muda yang hadir langsung ke sekolah-sekolah di seluruh wilayah{" "}
                <span className="font-bold text-teal-brand underline decoration-accent-lime decoration-4 underline-offset-4 dark:text-accent-lime">
                  Jabodetabek
                </span>
                . Berawal dari Jakarta pada tahun 2023, kami menghadirkan simulasi praktik nyata untuk membangun generasi yang tangguh, peduli lingkungan, dan berkarakter.
              </p>

              <p className="mb-8 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                Kami mengintegrasikan 4 aspek fundamental dalam setiap kunjungan sekolah: pengelolaan sampah mandiri, edukasi satwa, kesiapsiagaan bencana berkolaborasi dengan BPBD, serta pendampingan parenting untuk menciptakan lingkungan belajar yang aman dan berdaya.
              </p>

              {/* 3 Core Value Pillars */}
              <div className="grid gap-4 sm:grid-cols-3">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition duration-300 hover:border-accent-lime hover:bg-accent-lime/10 hover:shadow-sm dark:border-white/5 dark:bg-white/5 dark:hover:border-accent-lime/40 dark:hover:bg-white/10"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-teal-brand text-accent-lime dark:bg-accent-lime dark:text-teal-dark">
                      {v.icon}
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-teal-brand dark:text-accent-lime">{v.title}</h3>
                      <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Graphic / Photo Area */}
            <div className="flex flex-col items-center justify-center lg:col-span-5">
              <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border-4 border-accent-lime/40 bg-teal-dark p-8 text-center text-white shadow-2xl">
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl bg-white p-3 shadow-lg">
                  <Image
                    src="/images/logo3.jpg"
                    alt="NexGen Logo"
                    width={112}
                    height={112}
                    className="h-full w-full object-cover rounded-xl"
                    unoptimized
                  />
                </div>

                <h3 className="mb-1 text-xl font-black tracking-tight text-accent-lime sm:text-2xl">
                  PT NEXT GENERATION INDONESIA
                </h3>
                <span className="mb-3 inline-block rounded-full bg-accent-lime/20 px-3 py-0.5 text-xs font-bold text-accent-lime">
                  (NEXGEN)
                </span>
                <p className="mb-6 text-xs text-slate-300">
                  Edukasi Sekolah, Mitigasi Kebencanaan BPBD &amp; Penguatan Karakter
                </p>

                <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4 text-left">
                  <div className="rounded-xl bg-white/5 p-3">
                    <span className="block text-lg font-black text-accent-lime">2023</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">Awal di Jakarta</span>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3">
                    <span className="block text-lg font-black text-accent-lime">Jabodetabek</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">Jangkauan Kini</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
