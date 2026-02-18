"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const portraits = [
  "/images/portrait-1a.png",
  "/images/portrait-2.png",
  "/images/portrait-3.png",
];

const lanes = [
  { label: "Ministry", href: "/ministry" },
  { label: "AI Consulting", href: "/ai-consulting" },
  { label: "Books", href: "/books" },
  { label: "Films", href: "/films" },
  { label: "Workshops", href: "/workshops" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

const platforms = [
  { name: "Manna", href: "https://getmanna.app" },
  { name: "Authored", href: "https://myauthored.com" },
  { name: "Improved Solutions", href: "https://improvedsolution.com" },
  { name: "GGI Church", href: "https://ggichurch.org" },
];

export default function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % portraits.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* HERO STAGE */}
      <section className="mx-auto grid max-w-[1240px] gap-10 px-6 py-12 lg:grid-cols-[1fr_520px]">
        {/* CINEMATIC PHOTO STAGE */}
        <div className="relative min-h-[520px] overflow-hidden rounded-[36px] border border-white/10 bg-neutral-900">
          {portraits.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt="Dr Jeff C. Innocent"
                fill
                priority={i === 0}
                className="object-cover object-center scale-[1.05] animate-[slowzoom_12s_linear_infinite]"
              />
            </div>
          ))}

          {/* cinematic curtain */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/15 via-transparent to-neutral-950/35" />

          {/* gold accent */}
          <div className="absolute left-10 top-10 h-[2px] w-24 bg-amber-200/80" />

          {/* caption */}
          <div className="absolute bottom-8 left-10 right-10 flex items-end justify-between">
            <div>
              <div className="text-xl font-semibold">Dr Jeff C. Innocent</div>
              <div className="mt-1 text-sm text-white/75">
                Pastor • AI Consultant • Author • Filmmaker
              </div>
            </div>
            <div className="hidden sm:block text-xs text-white/55">jcinnocent.com</div>
          </div>
        </div>

        {/* SIGNATURE PANEL */}
        <div className="rounded-[36px] border border-white/10 bg-neutral-950 p-10">
          <h1 className="text-4xl font-semibold leading-tight">
            Faith-led leadership.
            <span className="block text-white/65">Modern execution.</span>
          </h1>

          <p className="mt-6 text-sm leading-relaxed text-white/70">
            Clarity. Conviction. Excellence that shows in real life.
          </p>

          {/* INDEX */}
          <div className="mt-10">
            <div className="text-[11px] tracking-[0.28em] text-white/50">INDEX</div>

            <div className="mt-4 grid gap-2">
              {lanes.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 px-5 py-3 hover:border-white/20 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-7 text-xs text-white/45">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="text-sm font-medium">{l.label}</div>
                  </div>
                  <div className="text-white/35 group-hover:text-amber-200">↗</div>
                </Link>
              ))}
            </div>
          </div>

          {/* PLATFORMS */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <div className="text-[11px] tracking-[0.28em] text-white/50">PLATFORMS</div>

            <div className="mt-4 grid gap-2">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/80 hover:border-white/20 hover:text-white transition"
                >
                  <span>{p.name}</span>
                  <span className="text-white/35">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="rounded-full bg-amber-200 px-6 py-3 text-sm font-medium text-neutral-950 hover:opacity-90 transition"
            >
              Request Booking
            </Link>

            <a
              href="https://www.youtube.com/@jefinno"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 hover:border-white/25 hover:text-white transition"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="mx-auto max-w-[1240px] px-6 pb-12">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10">
          {/* subtle luxury glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-200/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
            <div>
              <p className="text-[11px] tracking-[0.28em] text-white/55">BIO</p>

              <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
                Dr Jeff C. Innocent
                <span className="block text-white/65">
                  authority, warmth, and excellence.
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70 md:text-base">
                <p>
                  Dr. Jeff C. Innocent is an entrepreneur, AI consultant, filmmaker, author,
                  and pastor helping leaders, ministries, and businesses bring ideas to life
                  through clarity, systems, and purpose.
                </p>

                <p>
                  He serves as CEO of Improved Solutions LLC and Improved Films LLC, and Senior
                  Pastor of Grace & Glory International Church with campuses in Atlanta, Monrovia,
                  and Asaba. He is known for clear teaching, prophetic insight, and results-driven
                  leadership.
                </p>

                <p>
                  Holding a doctorate in Theology, Dr. Innocent equips people to grow spiritually
                  while navigating real-world challenges, and trains organizations to adopt AI
                  responsibly for productivity, systems building, and future-ready impact.
                </p>
              </div>
            </div>

            {/* bio highlights */}
            <div className="rounded-[28px] border border-white/10 bg-neutral-950/50 p-8">
              <div className="text-[11px] tracking-[0.28em] text-white/50">FOCUS</div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold text-amber-200">Ministry</div>
                  <div className="mt-1 text-xs text-white/65">Teaching, prophetic clarity, leadership.</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold text-amber-200">AI Consulting</div>
                  <div className="mt-1 text-xs text-white/65">Responsible adoption, systems, execution.</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold text-amber-200">Books + Films</div>
                  <div className="mt-1 text-xs text-white/65">Storytelling, clarity, purpose-driven work.</div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:border-white/25 hover:text-white transition"
                >
                  Contact
                </Link>
                <Link
                  href="/booking"
                  className="rounded-full bg-amber-200 px-5 py-2 text-sm font-medium text-neutral-950 hover:opacity-90 transition"
                >
                  Book Dr Jeff
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-[1240px] px-6 pb-10 text-xs text-white/45">
        © {new Date().getFullYear()} Dr Jeff C. Innocent
      </footer>

      {/* slow zoom animation */}
      <style jsx global>{`
        @keyframes slowzoom {
          0% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1.12);
          }
        }
      `}</style>
    </main>
  );
}
