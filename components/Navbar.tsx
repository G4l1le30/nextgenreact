"use client";

import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

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
    <nav className="sticky top-0 z-50 border-b border-brand-olive/10 bg-white/85 backdrop-blur-md transition-all dark:border-white/10 dark:bg-[#0c1205]/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="overflow-hidden rounded-xl border border-brand-olive/20 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:border-white/20">
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
            <span className="text-xl font-extrabold tracking-tight text-teal-brand dark:text-white">
              NexGen
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-mid-green dark:text-accent-lime">
              Edukasi &amp; Karakter
            </span>
          </div>
        </a>

        {/* Right Section on Desktop: Nav Links + ThemeToggle + CTA */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block text-sm font-semibold text-slate-700 transition hover:text-teal-brand dark:text-slate-300 dark:hover:text-accent-lime"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 border-l border-slate-200 pl-6 dark:border-white/15">
            <ThemeToggle />
            <a
              href="#collaboration-impact"
              className="inline-flex items-center justify-center rounded-xl bg-accent-lime px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-teal-brand shadow-sm transition hover:bg-mid-green hover:text-white"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Mobile Right Controls: ThemeToggle + Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="rounded-lg p-2 text-teal-brand dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
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
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`${
            open
              ? "absolute top-full left-0 right-0 border-b border-brand-olive/10 bg-white/95 px-6 pb-6 pt-4 shadow-xl backdrop-blur-lg block dark:border-white/10 dark:bg-[#0c1205]/95"
              : "hidden"
          } md:hidden`}
        >
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-semibold text-slate-700 transition hover:text-teal-brand dark:text-slate-300 dark:hover:text-accent-lime"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#collaboration-impact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-xl bg-accent-lime px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-teal-brand shadow-sm transition hover:bg-mid-green hover:text-white"
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