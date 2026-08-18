export default function Office() {
  return (
    <section id="our-office" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent-lime/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-brand">
            <span className="h-2 w-2 rounded-full bg-mid-green" />
            Lokasi Kami
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-teal-brand sm:text-4xl">
            Our Office
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Kunjungi kantor kami untuk konsultasi program edukasi, kemitraan CSR, dan koordinasi kegiatan.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl sm:p-4">
          <div className="overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d168.62077383208089!2d106.95457821238986!3d-6.196794576028409!2m3!1f219.1766009385501!2f0!3f0!3m2!1i1024!2i768!4f35!5e1!3m2!1sen!2sid!4v1754998604101!5m2!1sen!2sid"
              title="Google Maps - Lokasi Kantor NexGen"
              className="aspect-[16/9] w-full border-0 sm:aspect-[21/9]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}