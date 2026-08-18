"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "#about-us", label: "About Us" },
  { href: "#collaboration-impact", label: "Kerja Sama & Dampak" },
  { href: "#our-activity", label: "Our Activity" },
  { href: "#core-pillars", label: "Program" },
  { href: "#our-office", label: "Our Office" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-brand-olive/10 bg-white/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="overflow-hidden rounded-xl border border-brand-olive/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo3.jpg"
              alt="NexGen Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-cover"
              unoptimized
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-teal-brand">NexGen</span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-mid-green">Edukasi & Karakter</span>
          </div>
        </a>

        {/* Mobile Hamburger */}
        <button
          className="rounded-lg p-2 text-teal-brand md:hidden hover:bg-black/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            open
              ? "absolute top-full left-0 right-0 border-b border-brand-olive/10 bg-white/95 px-6 pb-6 pt-4 shadow-xl backdrop-blur-lg block"
              : "hidden"
          } md:relative md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-semibold text-slate-700 transition hover:text-teal-brand"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 md:pt-0">
              <a
                href="#collaboration-impact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-xl bg-accent-lime px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-teal-brand shadow-sm transition hover:bg-mid-green hover:text-white"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}