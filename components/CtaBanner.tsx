import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl  shadow-2xl">
          {/* Background Image with Dark Olive Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/kegiatan2.jpg"
              alt="Workshop Edukasi Sekolah NexGen"
              fill
              className="object-cover  filter blur-[1px]"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/90 to-teal-brand/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-lime/40 bg-accent-lime/10 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-accent-lime">
              Kemitraan Sekolah Se-Jabodetabek
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Hadirkan Edukasi Praktik Nyata di Sekolah Anda.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Undang tim fasilitator NexGen bersama instruktur mitra untuk simulasi kebencanaan BPBD, workshop pemilahan sampah, edukasi satwa, atau sesi parenting interaktif.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/6281234567890?text=Halo%20NexGen,%20saya%20tertarik%20untuk%20mengundang%20NexGen%20ke%20sekolah%20kami%20di%20Jabodetabek."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-lime px-7 py-3.5 text-sm font-bold text-teal-dark shadow-lg transition duration-300 hover:bg-mid-green hover:text-white"
              >
                Jadwalkan Kunjungan Sekolah
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>

              <a
                href="#core-pillars"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20"
              >
                Lihat Silabus Program
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

