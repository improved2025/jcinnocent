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
    title: "Face to Face",
    poster: "/images/film-1.png",
    trailer: "https://www.youtube.com/embed/UIHPzaqbJ3E",
    synopsis: `An ambitious Uber driver picks up a passenger who is his perfect look alike, but they may have a lot more in common than just physical features.

Michael soon realizes that he has come face to face with himself as the story and experiences of this strange passenger are nothing but a cautionary tale.`,
  },
  {
    title: "The Rising Sun",
    poster: "/images/film-2.png",
    trailer: "https://www.youtube.com/embed/x-HCBaAvv1M",
    synopsis: `The demand for palm oil exploration referred to as Red Gold in West Africa became very high in the 1700s.

In a slave camp at the heart of the Bight of Biafra, a woman stands against British tyranny even in the face of death. Based on true events, after trying to negotiate unity between the Arochukwu and NRI kingdoms, an unexpected stranger offers help. Can she trust the son of the man she calls master in her quest to restore dignity in the land of The Rising Sun?`,
  },
  {
    title: "Finding Me",
    poster: "/images/film-3.png",
    trailer: "",
    synopsis: `In a relationship built on criticism and control, a plus-size woman slowly loses herself trying to become acceptable.

Mocked for her body and shrinking herself for approval, she eventually confronts a hard truth: the problem was never her size. Finding Me is an emotional journey of self-worth, identity, and courage.`,
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

      {/* Background */}
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

              <div className="mt-4 text-xl font-semibold text-amber-200">
                {film.title}
              </div>
            </div>

            {/* Trailer + Synopsis */}
            <div className="rounded-[28px] border border-white/10 bg-black/40 p-6 md:p-8">

              <div className="text-[11px] tracking-[0.28em] text-white/50">
                TRAILER
              </div>

              {film.trailer ? (
                <iframe
                  src={film.trailer}
                  className="mt-4 w-full aspect-video rounded-2xl border border-white/10"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="mt-4 rounded-2xl border border-white/10 p-6 text-sm text-white/60">
                  Trailer coming soon.
                </div>
              )}

              <div className="mt-8 border-t border-white/10 pt-8">
                <div className="text-[11px] tracking-[0.28em] text-white/50">
                  SYNOPSIS
                </div>

                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/70">
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
