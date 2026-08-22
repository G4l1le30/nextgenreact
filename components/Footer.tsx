import Image from "next/image";

const quickLinks = [
  { href: "#about-us", label: "About Us" },
  { href: "#collaboration-impact", label: "Kerja Sama & Dampak" },
  { href: "#our-activity", label: "Our Activity" },
  { href: "#core-pillars", label: "Program Unggulan" },
  { href: "#our-office", label: "Our Office" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:bg-[#080d03] dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand & Mission */}
          <div className="md:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="overflow-hidden rounded-xl border border-brand-olive/20 shadow-sm dark:border-white/20">
                <Image
                  src="/images/logo3.jpg"
                  alt="Logo PT NEXT GENERATION INDONESIA"
                  width={44}
                  height={44}
                  className="h-11 w-11 object-cover"
                  unoptimized
                />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-teal-brand sm:text-xl dark:text-white">
                  PT NEXT GENERATION INDONESIA
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-mid-green dark:text-accent-lime">
                  (NEXGEN)
                </span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Inisiatif edukasi interaktif ke sekolah-sekolah Se-Jabodetabek berfokus pada pengelolaan sampah mandiri, edukasi satwa, kesiapsiagaan bencana bersama BPBD, dan parenting sejak 2023.
            </p>
          </div>

          {/* Navigasi */}
          <div className="md:col-span-3">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-teal-brand dark:text-accent-lime">
              Menu Navigasi
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm font-medium text-slate-600 transition hover:text-teal-brand dark:text-slate-400 dark:hover:text-accent-lime"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak & Alamat Kantor */}
          <div className="md:col-span-4">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-teal-brand dark:text-accent-lime">
              Kantor &amp; Kontak
            </h4>
            <p className="text-xs leading-relaxed text-slate-600 mb-3 dark:text-slate-400">
              Jl. Raya Penggilingan Gang Al - Aziz, RT.10/RW.4, Penggilingan, Kec. Cakung, Kota Jakarta Timur, DKI Jakarta 13940
            </p>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">info@nexgen1.com</p>
            <p className="mt-0.5 text-sm font-medium text-slate-700 dark:text-slate-200">+62 812 3456 7890</p>

            <div className="mt-5 flex gap-3">
              {[
                {
                  label: "Instagram",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  ),
                },
                {
                  label: "Facebook",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  ),
                },
                {
                  label: "WhatsApp",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-accent-lime hover:text-teal-brand dark:bg-white/10 dark:text-slate-300 dark:hover:bg-accent-lime dark:hover:text-teal-dark"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row dark:border-white/10 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} PT NEXT GENERATION INDONESIA (NEXGEN). All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Syarat &amp; Ketentuan</a>
            <a href="#" className="hover:underline">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
