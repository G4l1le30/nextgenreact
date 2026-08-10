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
    <section id="about-us">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold uppercase tracking-wide text-teal-brand md:text-4xl">
          About Us
        </h2>
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="mb-4 text-slate-600">
              NexGen adalah program edukasi yang membangun generasi berkarakter,
              sehat, dan peduli lingkungan. Kami mengajarkan lewat pengalaman
              nyata, bukan sekadar materi, agar peserta langsung mampu
              menerapkannya dalam kehidupan sehari-hari.
            </p>
            <div className="mb-4 space-y-2">
              {items.map((i) => (
                <p key={i.title} className="text-slate-600">
                  <strong>{i.title}</strong> - {i.text}
                </p>
              ))}
            </div>
            <p className="text-slate-600">
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
              className="mx-auto rounded-[10px] shadow-md"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}