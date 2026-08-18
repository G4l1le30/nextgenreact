import Counter from "@/components/Counter";

export default function ImpactBento() {
  return (
    <div className="mt-16">
      <div className="mb-10 text-center">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent-lime/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-brand">
          <span className="h-2 w-2 rounded-full bg-mid-green" />
          Dampak Terukur
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-teal-brand sm:text-4xl">
          Dampak Nyata Bersama NexGen
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Metrik dan komitmen kami untuk memberikan kontribusi nyata yang terukur bagi pengembangan karakter dan kelestarian lingkungan.
        </p>
      </div>

      {/* 4-Card Bento Grid inspired by Figma Reference */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Bento Card 1: 15.000+ Siswa */}
        <div className="flex flex-col justify-between rounded-3xl bg-accent-lime p-8 text-teal-dark shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-brand/80">Jangkauan Edukasi</span>
            <div className="mt-4 text-5xl font-black tracking-tight text-teal-dark">
              <Counter to={15000} suffix="+" duration={2.2} />
            </div>
          </div>
          <div className="mt-8 border-t border-teal-dark/15 pt-4">
            <h3 className="text-base font-bold text-teal-dark">Siswa &amp; Pemuda Terbina</h3>
            <p className="mt-1 text-xs text-teal-brand/85">
              Menjangkau puluhan sekolah di berbagai wilayah dengan materi interaktif.
            </p>
          </div>
        </div>

        {/* Bento Card 2: Bar Graph Activity Growth */}
        <div className="flex flex-col justify-between rounded-3xl bg-white p-8 text-teal-dark shadow-lg border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-mid-green">Konsistensi Program</span>
            
            {/* Custom SVG Bar Chart */}
            <div className="mt-4 flex items-end justify-between gap-2 h-24 pt-2">
              <div className="flex flex-col items-center gap-1.5 w-full">
                <div className="w-full rounded-t-md bg-accent-lime/60 h-10" />
                <span className="text-[10px] text-slate-400 font-semibold">Q1</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 w-full">
                <div className="w-full rounded-t-md bg-accent-lime/80 h-14" />
                <span className="text-[10px] text-slate-400 font-semibold">Q2</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 w-full">
                <div className="w-full rounded-t-md bg-mid-green h-18" />
                <span className="text-[10px] text-slate-400 font-semibold">Q3</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 w-full">
                <div className="w-full rounded-t-md bg-teal-brand h-22" />
                <span className="text-[10px] text-teal-brand font-bold">Q4</span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-4">
            <h3 className="text-base font-bold text-teal-brand">
              <Counter to={85} suffix="+" duration={1.8} /> Program Terlaksana
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Pertumbuhan frekuensi pelatihan &amp; workshop secara eksponensial.
            </p>
          </div>
        </div>

        {/* Bento Card 3: Ecosystem Network Diagram */}
        <div className="flex flex-col justify-between rounded-3xl bg-white p-8 text-teal-dark shadow-lg border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-mid-green">Jejaring Mitra</span>
            
            {/* Circular Collaboration Graphic */}
            <div className="mt-4 flex items-center justify-center py-2">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-mid-green/40 bg-accent-lime/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-brand text-accent-lime shadow-md">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/>
                  </svg>
                </div>
                {/* Orbital nodes */}
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 rounded-full bg-mid-green px-1.5 py-0.5 text-[8px] font-bold text-white shadow-sm">Sekolah</span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-teal-dark px-1.5 py-0.5 text-[8px] font-bold text-white shadow-sm">Komunitas</span>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-slate-100 pt-4">
            <h3 className="text-base font-bold text-teal-brand">Ekosistem Kolaboratif</h3>
            <p className="mt-1 text-xs text-slate-500">
              Menghubungkan instansi pendidikan, pemerintah &amp; sektor swasta.
            </p>
          </div>
        </div>

        {/* Bento Card 4: 98% Kepuasan */}
        <div className="flex flex-col justify-between rounded-3xl bg-accent-lime p-8 text-teal-dark shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-brand/80">Tingkat Kepuasan</span>
            <div className="mt-4 text-5xl font-black tracking-tight text-teal-dark">
              <Counter to={98} suffix="%" duration={2.0} />
            </div>
          </div>
          <div className="mt-8 border-t border-teal-dark/15 pt-4">
            <h3 className="text-base font-bold text-teal-dark">Evaluasi Positif</h3>
            <p className="mt-1 text-xs text-teal-brand/85">
              Peserta &amp; guru menilai modul kami aplikatif dan menyenangkan.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

