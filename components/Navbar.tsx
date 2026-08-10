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
    <nav className="bg-dark-slate sticky top-0 z-50 shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center">
          <Image
            src="/images/logo3.jpg"
            alt="Logo"
            width={40}
            height={32}
            className="mr-2.5 rounded-[5px] object-cover"
            unoptimized
          />
          <span className="text-lg font-semibold text-white">NexGen</span>
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

        <div className={`${open ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-white/90 transition hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}