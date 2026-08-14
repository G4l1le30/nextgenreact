"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "#about-us", label: "About Us" },
  { href: "#our-sponsor", label: "Our Sponsor" },
  { href: "#our-activity", label: "Our Activity" },
  { href: "#our-office", label: "Our Office" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-dark-slate/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/images/logo3.jpg"
            alt="Logo"
            width={40}
            height={32}
            className="rounded-lg object-cover"
            unoptimized
          />
          <span className="text-lg font-bold text-white">NexGen</span>
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div className={`${open ? "block absolute top-full left-0 right-0 bg-dark-slate/95 backdrop-blur-md border-b border-white/5 px-6 pb-6 pt-4" : "hidden"} md:relative md:block md:bg-transparent md:border-0 md:p-0`}>
          <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-white/70 transition hover:text-accent-lime"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#our-activity"
                onClick={() => setOpen(false)}
                className="inline-block rounded-xl bg-accent-lime px-5 py-2 text-sm font-bold text-teal-brand transition hover:bg-mid-green hover:text-white"
              >
                Get started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}