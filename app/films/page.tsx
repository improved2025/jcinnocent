// app/films/page.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type Film = {
  title: string;
  poster: string;
  trailer: string;
  synopsis: string;
};

const films: Film[] = [
  {
    title: "Film 1",
    poster: "/images/film-1.png",
    trailer: "/videos/film-1.mp4",
    synopsis:
      "Short synopsis goes here. Replace with a tight, compelling summary in 2–4 sentences.",
  },
  {
    title: "Film 2",
    poster: "/images/film-2.png",
    trailer: "/videos/film-2.mp4",
    synopsis:
      "Short synopsis goes here. Replace with a tight, compelling summary in 2–4 sentences.",
  },
  {
    title: "Film 3",
    poster: "/images/film-3.png",
    trailer: "/videos/film-3.mp4",
    synopsis:
      "Short synopsis goes here. Replace with a tight, compelling summary in 2–4 sentences.",
  },
];

export default function FilmsPage() {
  const [active, setActive] = useState(0);
  const film = films[active];

  const tabs = useMemo(
    () => films.map((f, i) => ({ label: f.title, i })),
    []
  );

  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-[#070b18] to-neutral-900" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-amber-300/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-400/5 blur-[120px]" />

      <section className="relative mx-auto max-w-[1240px] px-6 py-12">
        <div className="rounded-[40px] border border-white/10 bg-black/40 backdrop-blur p-8 md:p-12">

          <p className="text-[11px] tracking-[0.28em] text-white/55">FILMS</p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Films
            <span className="block text-white/65">
              stories crafted with meaning and excellence.
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
            Three featured films with posters, trailers, and synopsis.
          </p>

          {/* Selector */}
          <div className="mt-10 flex flex-wrap gap-3">
            {tabs.map((t) => (
              <button
                key={t.i}
                onClick={() => setActive(t.i)}
                className={
                  t.i === active
                    ? "rounded-full bg-amber-200 px-5 py-2 text-sm text-neutral-950"
                    : "rounded-full border border-white/15 px-5 py-2 text-sm text-white/70 hover:border-white/25 hover:text-white transition"
                }
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Film */}
          <div className="mt-8 grid gap-6 lg:grid-cols-[420px_1fr]">

            {/* Poster */}
            <div className="rounded-[28px] border border-white/10 bg-black/40 p-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <div className="aspect-[3/4]">
                  <Image
                    src={film.poster}
                    alt={film.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-4 text-xl font-semibold">{film.title}</div>
            </div>

            {/* Trailer + Synopsis */}
            <div className="rounded-[28px] border border-white/10 bg-black/40 p-6 md:p-8">

              <div className="text-[11px] tracking-[0.28em] text-white/50">
                TRAILER
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
                <video key={film.trailer} controls className="w-full">
                  <source src={film.trailer} type="video/mp4" />
                </video>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <div className="text-[11px] tracking-[0.28em] text-white/50">
                  SYNOPSIS
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {film.synopsis}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="/booking"
                  className="rounded-full bg-amber-200 px-6 py-3 text-sm font-medium text-neutral-950 hover:opacity-90 transition"
                >
                  Film Inquiries
                </a>

                <span className="text-xs text-white/45">
                  Distribution • Screenings • Partnerships
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
