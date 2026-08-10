export default function Hero() {
  return (
    <section className="text-center">
      <div
        className="bg-gradient-to-br from-village-start to-village-end"
        style={{ padding: "120px 0" }}
      >
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="mb-5 text-4xl font-bold text-dark-slate md:text-5xl">
            Mendidik Generasi yang Peduli & Berdampak
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
            Program edukasi lingkungan, karakter, dan kesehatan untuk sekolah
            serta komunitas.
          </p>
          <a
            href="#our-activity"
            className="inline-block rounded-full bg-teal-brand px-8 py-3 font-semibold text-white transition hover:bg-teal-dark"
          >
            Lihat Kegiatan Kami
          </a>
        </div>
      </div>
    </section>
  );
}