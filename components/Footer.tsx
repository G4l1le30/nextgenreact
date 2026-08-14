import Image from "next/image";

const quickLinks = [
  { href: "#about-us", label: "About Us" },
  { href: "#our-sponsor", label: "Our Sponsor" },
  { href: "#our-activity", label: "Our Activity" },
  { href: "#our-office", label: "Our Office" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-teal-brand">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-4 flex items-center gap-2.5">
              <Image
                src="/images/logo3.jpg"
                alt="Logo"
                width={40}
                height={32}
                className="rounded-lg object-cover"
                unoptimized
              />
              <span className="text-lg font-bold text-white">NexGen</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Program edukasi yang membangun generasi berkarakter, sehat, dan
              peduli lingkungan untuk sekolah serta komunitas.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-lime">
              Menu
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 transition hover:text-accent-lime"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-lime">
              Contact Us
            </h3>
            <p className="mb-1 text-sm text-white/70">info@nexgen1.com</p>
            <p className="mb-6 text-sm text-white/70">+62 812 3456 7890</p>

            <div className="flex gap-3">
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition hover:bg-accent-lime hover:text-teal-brand"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">
            &copy; 2025 NexGen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}