import Image from "next/image";

const items = [
  {
    title: "Lingkungan",
    text: "edukasi lingkungan hidup, pengelolaan sampah & ekonomi sirkular, urban farming.",
  },
  {
    title: "Karakter",
    text: "penguatan karakter, parenting, dan pencegahan perundungan.",
  },
  {
    title: "Kesehatan",
    text: "edukasi kesehatan dan pencegahan penyalahgunaan NAPZA.",
  },
];

export default function About() {
  return (
    <section id="about-us" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-[24px] bg-white p-8 shadow-2xl md:p-12 text-slate-800">
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-wide text-teal-brand md:text-4xl">
            About Us
          </h2>
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="mb-6 text-slate-600 leading-relaxed">
                NexGen adalah program edukasi yang membangun generasi berkarakter,
                sehat, dan peduli lingkungan. Kami mengajarkan lewat pengalaman
                nyata, bukan sekadar materi, agar peserta langsung mampu
                menerapkannya dalam kehidupan sehari-hari.
              </p>
              <div className="mb-6 grid gap-4 sm:grid-cols-3">
                {items.map((i) => (
                  <div key={i.title} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <span className="inline-block rounded-md bg-accent-lime px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-brand mb-2">
                      {i.title}
                    </span>
                    <p className="text-xs text-slate-600 leading-normal">{i.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed">
                Bersama sekolah, pemerintah, perusahaan, dan komunitas, NexGen
                menciptakan lingkungan belajar yang aman, sehat, dan
                berkelanjutan.
              </p>
            </div>
            <div className="text-center md:col-span-4">
              <Image
                src="/images/logo3.jpg"
                alt="NexGen Logo"
                width={200}
                height={200}
                className="mx-auto rounded-[20px] shadow-md border-4 border-slate-100"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}