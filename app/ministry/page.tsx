"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const invitations = [
  { label: "Preaching Engagements", note: "Sundays, conferences, revivals" },
  { label: "Leadership & Mentorship", note: "Pastors, founders, teams" },
  { label: "Prayer & Prophetic Services", note: "Faith gatherings and special moments" },
];

const highlights = [
  { title: "Faith that becomes personal", desc: "Not God can. God will, for me." },
  { title: "Clarity in chaos", desc: "Stable inner life, disciplined outcomes." },
  { title: "Grace with spine", desc: "Warmth and truth without compromise." },
];

// Your real audio titles + file paths (must match /public/audio filenames exactly)
const audioMessages = [
  { title: "Can You Stand the Rain", src: "/audio/CAN YOU STAND THE RAIN.mp3" },
  { title: "Grow Your Faith", src: "/audio/GROW YOUR FAITH.mp3" },
  { title: "I Am Who God Says I Am", src: "/audio/I AM WHO GOD SAYS I AM.mp3" },
  { title: "I Choose Gratitude", src: "/audio/I CHOOSE GRATITUDE.mp3" },
  { title: "It's On You", src: "/audio/IT'S ON YOU.mp3" },
  { title: "Living a Relevant Life", src: "/audio/LIVING A RELEVANT LIFE.mp3" },
  { title: "Meeting the Holy Spirit", src: "/audio/MEETING THE HOLY SPIRIT.mp3" },
  { title: "Now, I Can See Well", src: "/audio/NOW, I CAN SEE WELL.mp3" },
  { title: "Stop Hiding", src: "/audio/STOP HIDING.mp3" },
  { title: "The Audacity of Hope", src: "/audio/THE AUDACITY OF HOPE.mp3" },
];

export default function MinistryPage() {
  const audioRef = useRef<HTMLDivElement>(null);

  const scrollToAudio = () => {
    audioRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen text-white">
      {/* Top edge */}
      <header className="border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5">
          <div className="leading-tight">
            <div className="text-sm tracking-wide text-white/90">Dr Jeff C. Innocent</div>
            <div className="text-[11px] tracking-[0.28em] text-white/50">MINISTRY</div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.ggichurch.org"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:border-white/25 hover:text-white transition"
            >
              Visit GGI Church
            </a>

            <a
              href="https://www.youtube.com/@jefinno"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:border-white/25 hover:text-white transition"
            >
              Watch on YouTube
            </a>

            <Link
              href="/booking"
              className="rounded-full bg-amber-200 px-5 py-2 text-sm font-medium text-neutral-950 hover:opacity-90 transition"
            >
              Invite Dr Jeff
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1240px] px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_460px] lg:items-stretch">
          {/* Copy */}
          <div className="rounded-[34px] border border-white/10 bg-black/40 backdrop-blur p-10">
            <p className="text-[11px] tracking-[0.28em] text-white/55">
              AUTHORITY • WARMTH • EXCELLENCE
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Ministry that builds faith
              <span className="block text-white/65">and strengthens purpose.</span>
            </h1>

            {/* Added: Senior Pastor line + church link */}
            <p className="mt-3 text-sm text-amber-200/80">
              Senior Pastor,{" "}
              <a
                href="https://www.ggichurch.org"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-white/15 underline-offset-4 hover:decoration-amber-200/70"
              >
                Grace &amp; Glory International Church
              </a>{" "}
              — Atlanta • Monrovia • Asaba
            </p>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              Clear teaching, deep conviction, and practical transformation. The goal is not inspiration alone.
              The goal is a faith life that produces results.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/@jefinno"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 hover:opacity-90 transition"
              >
                Watch Messages
              </a>

              <button
                type="button"
                onClick={scrollToAudio}
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 hover:border-white/25 hover:text-white transition"
              >
                Listen to Audio Messages
              </button>

              <Link
                href="/booking"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 hover:border-white/25 hover:text-white transition"
              >
                Request an Invitation
              </Link>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="text-[11px] tracking-[0.28em] text-white/50">HIGHLIGHTS</div>
              <div className="mt-5 grid gap-3">
                {highlights.map((h) => (
                  <div
                    key={h.title}
                    className="flex items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                  >
                    <div>
                      <div className="text-sm font-medium">{h.title}</div>
                      <div className="mt-1 text-xs text-white/65">{h.desc}</div>
                    </div>
                    <div className="text-amber-200/80">•</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Portrait panel */}
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-neutral-900 min-h-[520px]">
            <Image
              src="/images/portrait-1a.png"
              alt="Dr Jeff C. Innocent"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/15 via-transparent to-neutral-950/40" />
            <div className="absolute left-8 top-8 h-[2px] w-24 bg-amber-200/80" />

            <div className="absolute bottom-6 left-8 right-8">
              <div className="text-sm font-medium">Ministry Invitations</div>
              <div className="mt-1 text-xs text-white/70">
                Conferences • Revivals • Special Services • Leadership Sessions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Messages */}
      <section ref={audioRef} className="mx-auto max-w-[1240px] px-6 pb-12">
        <div className="rounded-[34px] border border-white/10 bg-black/40 backdrop-blur p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] tracking-[0.28em] text-white/50">AUDIO MESSAGES</div>
              <h2 className="mt-4 text-2xl font-semibold">Listen and build your faith.</h2>
              <p className="mt-3 max-w-2xl text-sm text-white/70">
                Click play to listen. These audio files are served from{" "}
                <span className="text-white/80">/public/audio/</span>.
              </p>
            </div>

            <a
              href="https://www.youtube.com/@jefinno"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 hover:border-white/25 hover:text-white transition"
            >
              Watch Video Messages
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {audioMessages.map((m) => (
              <div
                key={m.title}
                className="rounded-3xl border border-white/10 bg-neutral-950/40 p-7"
              >
                <div className="text-sm font-semibold text-amber-200 tracking-wide">
                  {m.title}
                </div>

                <audio controls preload="none" className="mt-4 w-full">
                  <source src={m.src} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invitations */}
      <section className="mx-auto max-w-[1240px] px-6 pb-12">
        <div className="rounded-[34px] border border-white/10 bg-black/40 backdrop-blur p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] tracking-[0.28em] text-white/50">INVITATIONS</div>
              <h2 className="mt-4 text-2xl font-semibold">Bring this ministry to your people.</h2>
              <p className="mt-3 max-w-2xl text-sm text-white/70">
                For serious invitations and confirmed schedules, use the booking request so we can respond
                with clarity and speed.
              </p>
            </div>

            <Link
              href="/booking"
              className="rounded-full bg-amber-200 px-6 py-3 text-sm font-medium text-neutral-950 hover:opacity-90 transition"
            >
              Request Booking
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {invitations.map((x) => (
              <div
                key={x.label}
                className="rounded-3xl border border-white/10 bg-neutral-950/40 p-7"
              >
                <div className="text-sm font-medium">{x.label}</div>
                <div className="mt-2 text-xs text-white/65">{x.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note: Footer is global in layout.tsx now */}
    </main>
  );
}
