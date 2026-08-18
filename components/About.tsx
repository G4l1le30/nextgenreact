import Image from "next/image";

const values = [
  {
    title: "Aksi Nyata & Praktik",
    desc: "Bukan sekadar ceramah teori, setiap program didesain dengan simulasi dan pengalaman interaktif.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
  },
  {
    title: "Kolaboratif & Terbuka",
    desc: "Bermitra erat dengan sekolah, institusi pemerintah, korporasi, dan komunitas akar rumput.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
  {
    title: "Dampak Jangka Panjang",
    desc: "Membentuk kebiasaan positif dan budaya kepedulian yang berkelanjutan bagi generasi masa depan.",
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
        <div className="overflow-hidden rounded-3xl bg-white p-8 shadow-xl border border-slate-200/80 lg:p-14">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7">
              {/* Header Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-lime/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-brand">
                <span className="h-2 w-2 rounded-full bg-mid-green" />
                About Us
              </div>

              {/* Siapa Kami Headline */}
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-teal-brand sm:text-4xl">
                Siapa Kami?
              </h2>

              {/* Decorative Accent Line */}
              <div className="mb-6 h-1.5 w-16 rounded-full bg-accent-lime" />

              {/* Primary Narrative from Figma */}
              <p className="mb-6 text-xl font-medium leading-relaxed text-slate-800">
                NexGen adalah komunitas anak muda yang peduli terhadap{" "}
                <span className="font-bold text-teal-brand underline decoration-accent-lime decoration-4 underline-offset-4">
                  lingkungan, karakter, dan kesehatan
                </span>
                . Kami percaya perubahan kecil yang konsisten bisa membawa dampak besar.
              </p>

              <p className="mb-8 text-base leading-relaxed text-slate-600">
                Kami hadir untuk memfasilitasi generasi muda dengan keterampilan hidup, kesadaran ekologis, dan ketahanan moral. Melalui pendekatan partisipatif, kami mengubah ruang belajar menjadi laboratorium pengalaman yang menginspirasi.
              </p>

              {/* 3 Core Value Pillars */}
              <div className="grid gap-4 sm:grid-cols-3">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition duration-300 hover:border-accent-lime hover:bg-accent-lime/10 hover:shadow-sm"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-teal-brand text-accent-lime">
                      {v.icon}
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-teal-brand">{v.title}</h3>
                      <p className="text-xs leading-relaxed text-slate-500">{v.desc}</p>
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

                <h3 className="mb-2 text-2xl font-black tracking-tight text-accent-lime">
                  NexGen Indonesia
                </h3>
                <p className="mb-6 text-xs text-slate-300">
                  Membangun Ekosistem Pembelajaran Karakter &amp; Lingkungan Terdepan
                </p>

                <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4 text-left">
                  <div className="rounded-xl bg-white/5 p-3">
                    <span className="block text-lg font-black text-accent-lime">2023</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">Tahun Berdiri</span>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3">
                    <span className="block text-lg font-black text-accent-lime">Nasional</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">Jangkauan Gerakan</span>
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