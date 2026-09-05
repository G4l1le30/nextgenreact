import Image from "next/image";

const sponsors = [
  { src: "/images/moorlife.jpg", alt: "Moorlife" },
  { src: "/images/topkopi.jpg", alt: "TopKopi" },
  { src: "/images/wingsmiesedap.png", alt: "Wings Mie Sedaap" },
  { src: "/images/lemonilo.png", alt: "Lemonilo" },
  { src: "/images/kalbefarma.png", alt: "Kalbe Farma" },
  { src: "/images/forisa.png", alt: "Forisa" },
  { src: "/images/freshcare.png", alt: "Freshcare" },
  { src: "/images/rabbani.png", alt: "Rabbani" },
  { src: "/images/swarapeduli.jpeg", alt: "Swara Peduli" },
];

export default function Sponsor() {
  return (
    <div>
      <div className="mb-6 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-lime">
          Mitra &amp; Sponsor Terpercaya
        </span>
        <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white">
          Tumbuh Bersama Mitra Berkelanjutan
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-slate-300">
          Didukung oleh berbagai brand dan institusi yang memiliki visi sama untuk kemajuan generasi muda.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white/[0.08] p-4 sm:p-6 shadow-xl border border-white/15 dark:bg-white/[0.04]">
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track items-center py-2">
            {/* Group 1 */}
            <div className="flex shrink-0 items-center gap-16 pr-16">
              {sponsors.map((s) => (
                <div
                  key={s.alt}
                  className="flex h-14 w-36 shrink-0 items-center justify-center rounded-xl bg-white/95 px-3 py-1 transition duration-300 hover:scale-105"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={140}
                    height={55}
                    className="max-h-11 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>

            {/* Group 2 (Duplicate for Seamless Infinite Loop) */}
            <div className="flex shrink-0 items-center gap-16 pr-16" aria-hidden="true">
              {sponsors.map((s, i) => (
                <div
                  key={`${s.alt}-dup-${i}`}
                  className="flex h-14 w-36 shrink-0 items-center justify-center rounded-xl bg-white/95 px-3 py-1 transition duration-300 hover:scale-105"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={140}
                    height={55}
                    className="max-h-11 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

