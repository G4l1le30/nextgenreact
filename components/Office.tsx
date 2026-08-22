export default function Office() {
  return (
    <section id="our-office" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80 dark:bg-[#0c1205] dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent-lime/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-brand dark:bg-accent-lime/20 dark:text-accent-lime">
            <span className="h-2 w-2 rounded-full bg-mid-green" />
            Kantor Pusat &amp; Operasional
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-teal-brand sm:text-4xl dark:text-white">
            Lokasi Kantor Kami
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
            Kunjungi kantor resmi PT NEXT GENERATION INDONESIA untuk koordinasi kunjungan sekolah, kemitraan CSR, dan audiensi program edukasi.
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          {/* Address & Details Card */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl border border-slate-200 lg:col-span-5 dark:bg-[#151f0a] dark:border-white/10">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-teal-brand/10 px-3 py-1 text-xs font-bold text-teal-brand dark:bg-accent-lime/20 dark:text-accent-lime">
                Legal Entity
              </div>
              <h3 className="text-xl font-extrabold text-teal-brand sm:text-2xl dark:text-white">
                PT NEXT GENERATION INDONESIA
              </h3>
              <p className="mt-1 text-xs font-semibold text-mid-green dark:text-accent-lime">
                (NEXGEN)
              </p>

              <div className="mt-6 space-y-4 border-t border-slate-100 dark:border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-lime text-teal-dark">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Alamat Lengkap</span>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                      Jl. Raya Penggilingan Gang Al - Aziz, RT.10/RW.4, Penggilingan, Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13940
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-lime text-teal-dark">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/></svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Jangkauan Layanan</span>
                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                      Seluruh Wilayah Se-Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-100 dark:border-white/10 pt-6">
              <a
                href="https://maps.app.goo.gl/EPuG4hXyVa7LED356"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-brand px-5 py-3 text-sm font-bold text-accent-lime shadow-md transition hover:bg-teal-dark hover:text-white dark:bg-accent-lime dark:text-teal-dark dark:hover:bg-mid-green dark:hover:text-white"
              >
                Buka di Google Maps
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl lg:col-span-7 dark:bg-[#151f0a] dark:border-white/10">
            <div className="h-full overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4251147779774!2d106.9404289!3d-6.2075254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698bb2c24483a9%3A0xc3f6197171e21b76!2sPenggilingan%2C%20Cakung%2C%20East%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                title="Google Maps - Lokasi Kantor PT NEXT GENERATION INDONESIA"
                className="min-h-[360px] h-full w-full border-0 rounded-xl"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
