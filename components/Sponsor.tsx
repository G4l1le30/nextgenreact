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
        <span className="text-xs font-bold uppercase tracking-widest text-mid-green">
          Mitra &amp; Sponsor Terpercaya
        </span>
        <h3 className="mt-1 text-xl font-bold text-teal-brand sm:text-2xl">
          Tumbuh Bersama Mitra Berkelanjutan
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-xs text-slate-500 sm:text-sm">
          Didukung oleh berbagai brand dan institusi yang memiliki visi sama untuk kemajuan generasi muda.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-md border border-slate-200/70">
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track items-center py-2">
            {doubled.map((s, i) => (
              <div
                key={`${s.alt}-${i}`}
                className="flex h-14 w-36 shrink-0 items-center justify-center grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={140}
                  height={55}
                  className="max-h-12 w-auto object-contain"
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

