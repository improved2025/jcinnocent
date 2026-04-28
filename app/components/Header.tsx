"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Unspoken Pain", href: "/unspoken-pain", featured: true },
  { label: "Ministry", href: "/ministry" },
  { label: "AI Consulting", href: "/ai-consulting" },
  { label: "Books", href: "/books" },
  { label: "Films", href: "/films" },
  { label: "Workshops", href: "/workshops" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5">
        
        {/* LOGO */}
        <Link href="/" onClick={() => setOpen(false)} className="leading-tight">
          <div className="text-sm tracking-wide text-white/90">
            Dr Jeff C. Innocent
          </div>
          <div className="text-[10px] tracking-[0.22em] text-white/50 sm:text-[11px] sm:tracking-[0.28em]">
            AUTHORITY • WARMTH • EXCELLENCE
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-3 lg:flex">
          {navLinks.slice(0, 4).map((link) =>
            link.featured ? (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-full bg-amber-200 px-5 py-2 text-xs font-medium text-neutral-950 transition hover:opacity-90"
              >
                {link.label}
                <span className="rounded-full border border-neutral-950/30 px-2 py-[2px] text-[9px] font-semibold">
                  NEW
                </span>
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 transition hover:border-white/25 hover:text-white"
              >
                {link.label}
              </Link>
            )
          )}

          {/* Book button stays clean */}
          <Link
            href="/booking"
            className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 transition hover:border-white/25 hover:text-white"
          >
            Book
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
        >
          <span className="text-xl">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-neutral-950/95 px-6 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-[1240px] gap-3">
            {navLinks.map((link) =>
              link.featured ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl bg-amber-200 px-5 py-4 text-sm font-semibold text-neutral-950"
                >
                  <span>{link.label}</span>
                  <span className="rounded-full border border-neutral-950/30 px-2 py-[2px] text-[9px] font-bold">
                    NEW
                  </span>
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 px-5 py-4 text-sm text-white/80 transition hover:border-white/25 hover:text-white"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}