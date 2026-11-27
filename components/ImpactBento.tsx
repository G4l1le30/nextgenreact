import Counter from "@/components/Counter";

export default function ImpactBento() {
  return (
    <div className="mt-12 sm:mt-16">
      <div className="mb-8 sm:mb-10 text-center">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent-lime/30 bg-accent-lime/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-lime">
          <span className="h-2 w-2 rounded-full bg-accent-lime animate-pulse" />
          Dampak &amp; Capaian
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          Dampak Nyata di Sekolah Se-Jabodetabek
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-xs sm:text-sm lg:text-base leading-relaxed text-slate-300">
          Capaian perjalanan NexGen sejak 2023 dalam mengedukasi siswa, guru, dan orang tua di Jakarta, Bogor, Depok, Tangerang, dan Bekasi.
        </p>
      </div>

      {/* 3-Card Bento Grid */}
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Bento Card 1: 15.000+ Siswa & Guru */}
        <div className="flex flex-col justify-between rounded-3xl bg-accent-lime p-5 sm:p-8 text-teal-dark shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-teal-brand/80">Total Penerima Manfaat</span>
            <div className="mt-3 sm:mt-4 text-4xl sm:text-5xl font-black tracking-tight text-teal-dark">
              <Counter to={15000} suffix="+" duration={2.2} />
            </div>
          </div>
          <div className="mt-6 sm:mt-8 border-t border-teal-dark/15 pt-3.5 sm:pt-4">
            <h3 className="text-sm sm:text-base font-bold text-teal-dark">Siswa, Guru &amp; Orang Tua</h3>
            <p className="mt-1 text-[11px] sm:text-xs text-teal-brand/85">
              Mengikuti pelatihan langsung di ruang kelas dan aula sekolah.
            </p>
          </div>
        </div>

        {/* Bento Card 2: 100+ Sesi Kunjungan Sekolah */}
        <div className="flex flex-col justify-between rounded-3xl bg-white/[0.08] p-5 sm:p-8 text-white shadow-xl border border-white/15 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl dark:bg-white/[0.04]">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-accent-lime">Ekspansi Wilayah</span>
            
            {/* Custom Bar Chart with Solid Grounded Baseline */}
            <div className="mt-3 sm:mt-4">
              {/* Bars: Grounded to a single shared baseline */}
              <div className="flex h-16 sm:h-20 items-end gap-2 sm:gap-2.5 border-b border-white/20 pb-0">
                <div className="flex h-full flex-1 items-end">
                  <div className="w-full rounded-t-md bg-accent-lime/40 h-[30%]" />
                </div>
                <div className="flex h-full flex-1 items-end">
                  <div className="w-full rounded-t-md bg-accent-lime/70 h-[55%]" />
                </div>
                <div className="flex h-full flex-1 items-end">
                  <div className="w-full rounded-t-md bg-mid-green h-[75%]" />
                </div>
                <div className="flex h-full flex-1 items-end">
                  <div className="w-full rounded-t-md bg-accent-lime h-full" />
                </div>
              </div>

              {/* Labels: Positioned below the baseline */}
              <div className="mt-2 grid grid-cols-4 gap-2 text-center">
                <span className="block text-[9px] sm:text-[10px] font-semibold text-slate-300 leading-tight">
                  2023 (JKT)
                </span>
                <span className="block text-[9px] sm:text-[10px] font-semibold text-slate-300 leading-tight">
                  BODETABEK
                </span>
                <span className="block text-[9px] sm:text-[10px] font-semibold text-slate-300 leading-tight">
                  Mitra BPBD
                </span>
                <span className="block text-[9px] sm:text-[10px] font-bold text-accent-lime leading-tight">
                  Kini
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-6 border-t border-white/15 pt-3.5 sm:pt-4">
            <h3 className="text-sm sm:text-base font-bold text-white">
              <Counter to={100} suffix="+" duration={1.8} /> Kunjungan Sekolah
            </h3>
            <p className="mt-1 text-[11px] sm:text-xs text-slate-300">
              Menjangkau puluhan sekolah TK, SD, SMP, &amp; SMA Se-Jabodetabek.
            </p>
          </div>
        </div>

        {/* Bento Card 3: Ecosystem Network Diagram */}
        <div className="flex flex-col justify-between rounded-3xl bg-white/[0.08] p-5 sm:p-8 text-white shadow-xl border border-white/15 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl dark:bg-white/[0.04]">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-accent-lime">Kolaborasi Lintas Sektor</span>
            
            {/* Circular Collaboration Graphic */}
            <div className="mt-3 sm:mt-4 flex items-center justify-center py-2">
              <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border-2 border-dashed border-accent-lime/40 bg-accent-lime/10">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-accent-lime text-teal-dark shadow-md">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/>
                  </svg>
                </div>
                {/* Orbital nodes */}
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 rounded-full bg-mid-green px-1.5 py-0.5 text-[8px] font-bold text-white shadow-sm">Sekolah</span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-teal-dark border border-accent-lime/40 px-1.5 py-0.5 text-[8px] font-bold text-accent-lime shadow-sm">BPBD</span>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-white/15 pt-3.5 sm:pt-4">
            <h3 className="text-sm sm:text-base font-bold text-white">Sinergi BPBD &amp; Ahli</h3>
            <p className="mt-1 text-[11px] sm:text-xs text-slate-300">
              Integrasi instruktur resmi BPBD, fasilitator satwa, &amp; pegiat lingkungan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


