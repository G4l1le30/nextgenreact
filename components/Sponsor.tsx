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
    <section id="our-sponsor" className="text-center py-20 bg-dark-slate">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-3xl font-bold uppercase tracking-wide text-accent-lime md:text-4xl">
          Our Sponsor
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-slate-300">
          Kami berterima kasih kepada para sponsor dan mitra kerja sama kami.
        </p>
        <div className="overflow-hidden py-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 px-6">
          <div className="marquee-track items-center">
            {doubled.map((s, i) => (
              <Image
                key={`${s.alt}-${i}`}
                src={s.src}
                alt={s.alt}
                width={120}
                height={60}
                className="h-[60px] w-auto transition hover:scale-110 filter brightness-100 invert-0"
                unoptimized
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
