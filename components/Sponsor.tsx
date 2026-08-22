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
];

export default function Sponsor() {
  const doubled = [...sponsors, ...sponsors];
  return (
    <div>
      <div className="mb-6 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-mid-green dark:text-accent-lime">
          Mitra &amp; Sponsor Terpercaya
        </span>
        <h3 className="mt-1 text-xl font-bold text-teal-brand sm:text-2xl dark:text-white">
          Tumbuh Bersama Mitra Berkelanjutan
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-xs text-slate-500 sm:text-sm dark:text-slate-400">
          Didukung oleh berbagai brand dan institusi yang memiliki visi sama untuk kemajuan generasi muda.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-md border border-slate-200/70 dark:bg-[#151f0a] dark:border-white/10">
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track items-center py-2">
            {doubled.map((s, i) => (
              <div
                key={`${s.alt}-${i}`}
                className="flex h-14 w-36 shrink-0 items-center justify-center rounded-xl transition duration-300 hover:scale-105 dark:bg-white/90 dark:px-3 dark:py-1"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={140}
                  height={55}
                  className="max-h-11 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

