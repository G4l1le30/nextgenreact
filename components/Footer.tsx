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
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand & Mission */}
          <div className="md:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="overflow-hidden rounded-xl border border-brand-olive/20 shadow-sm">
                <Image
                  src="/images/logo3.jpg"
                  alt="Logo NexGen"
                  width={44}
                  height={44}
                  className="h-11 w-11 object-cover"
                  unoptimized
                />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-teal-brand">NexGen</span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-mid-green">
                  Indonesia
                </span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600">
              Membangun generasi muda yang berkarakter, sehat, dan peduli lingkungan melalui pengalaman belajar nyata dan aksi kolaboratif.
            </p>
          </div>

          {/* Navigasi */}
          <div className="md:col-span-3">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-teal-brand">
              Menu Navigasi
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm font-medium text-slate-600 transition hover:text-teal-brand"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak & Media Sosial */}
          <div className="md:col-span-4">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-teal-brand">
              Kontak &amp; Informasi
            </h4>
            <p className="text-sm font-medium text-slate-700">info@nexgen1.com</p>
            <p className="mt-1 text-sm font-medium text-slate-700">+62 812 3456 7890</p>
            <p className="mt-2 text-xs text-slate-500">Jakarta &amp; Sekitarnya, Indonesia</p>

            <div className="mt-6 flex gap-3">
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
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-accent-lime hover:text-teal-brand"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} NexGen. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Syarat &amp; Ketentuan</a>
            <a href="#" className="hover:underline">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}