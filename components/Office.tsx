export default function Office() {
  return (
    <section id="our-office" className="text-center">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-3xl font-bold uppercase tracking-wide text-teal-brand md:text-4xl">
          Our Office
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-slate-600">
          Detail lokasi dan info kantor kami untuk kemudahan akses dan
          konsultasi.
        </p>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d168.62077383208089!2d106.95457821238986!3d-6.196794576028409!2m3!1f219.1766009385501!2f0!3f0!3m2!1i1024!2i768!4f35!5e1!3m2!1sen!2sid!4v1754998604101!5m2!1sen!2sid"
            title="Google Maps - Lokasi Kantor NexGen"
            className="aspect-[16/10] w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}