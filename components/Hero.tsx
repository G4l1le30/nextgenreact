export default function Hero() {
  return (
    <section
      className="bg-gradient-to-br from-village-start to-village-end text-center"
      style={{ padding: "120px 0" }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-5 text-4xl font-bold text-white md:text-5xl">
          Mendidik Generasi yang Peduli & Berdampak
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
          Program edukasi lingkungan, karakter, dan kesehatan untuk sekolah
          serta komunitas.
        </p>
        <a
          href="#our-activity"
          className="inline-block rounded-full bg-accent-lime px-8 py-3 font-bold text-teal-brand transition hover:bg-mid-green hover:text-white"
        >
          Lihat Kegiatan Kami
        </a>
      </div>
    </section>
  );
}