"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const DISPLAY_EMAIL = "contact@jcinnocent.com";
const RECEIVER_EMAIL = "jefinno73@gmail.com";

const purchaseLinks = {
  worldwide: {
    ebook: "https://payhip.com/b/4vwN7",
    audiobook: "https://payhip.com/b/WudDf",
    paperback: "https://www.amazon.com/dp/B0H5T7WV2L",
  },
  africa: {
    ebook: "https://selar.com/681m25y452",
    audiobook: "https://selar.com/4f02171457",
  },
};

const endorsements = [
  {
    name: "Rev. Christie Bature",
    role: "CEO, 180 Degrees Rehabilitation Center, Port Harcourt",
    image: "/images/endorsements/christie-bature.png",
    quote:
      "Unspoken Pain challenges readers to move beyond simplistic judgment and confront the devastating human reality of grief, loss, and survival. This thought-provoking work reminds us that a single sentence spoken in anguish should never define an entire life.",
  },
  {
    name: "Bishop Darlingston G. Johnson",
    role: "Presiding Prelate, Harvest Intercontinental Church",
    image: "/images/endorsements/darlingston-johnson.png",
    quote:
      "I admit this was a new perspective for me as well. We judged her solely by one sentence without taking into account historical and literary contexts. My eyes were opened.",
  },
  {
    name: "Pastor Bola Adepoju",
    role: "Woman on Purpose, Inc.",
    image: "/images/endorsements/bola-adepoju.png",
    quote:
      "Unspoken Pain is more than a reexamination of Job’s wife. It is a call for deeper grace, greater empathy, and more responsible biblical reflection.",
  },
  {
    name: "Apostle G. Thomas Dowie",
    role: "Kingdom Restoration Ministries International",
    image: "/images/endorsements/thomas-dowie.png",
    quote:
      "Dr. Innocent’s argument is both biblically grounded and pastorally sensitive. What makes this study especially valuable is its call for theological compassion.",
  },
  {
    name: "Dr. Mike Adebiyi, PhD",
    role: "Assistant General Overseer, Jubilee Christian Church International",
    image: "/images/endorsements/mike-adebiyi.png",
    quote:
      "This book skillfully confronts the tendency within religious culture to magnify the failures of wounded people while overlooking the burdens they carried before they broke.",
  },
  {
    name: "Bishop Francis B. Thomas",
    role: "Presiding Prelate, World Resurrection Ministries Inc.",
    image: "/images/endorsements/francis-thomas.png",
    quote:
      "The height of Christian maturity is balancing the spiritual with the physical, and this book nailed that. Unspoken Pain is a must-read for everyone.",
  },
  {
    name: "Dr. Maxwell Ubah",
    role: "Lead Pastor, House of Rest, Lagos",
    image: "/images/endorsements/maxwell-ubah.png",
    quote:
      "The insights could only have come from the Throne Room of Grace. It made me reexamine the labels I have often placed on people.",
  },
  {
    name: "Pastor Biola Rejoice-George",
    role: "Senior Pastor, Crystal Life Assembly",
    image: "/images/endorsements/biola-rejoice-george.png",
    quote:
      "This is a profound shift in perspective in the familiar biblical narrative of Job. It offers a compassionate lens on human frailty and the complex ways people react to profound loss.",
  },
  {
    name: "Archbishop Dr. Frederick T. Nah Jr.",
    role: "President, Five-Star Ministerial World Alliance",
    image: "/images/endorsements/frederick-nah.png",
    quote:
      "When I opened this book, I did not expect to encounter heaven. This is a voice from the throne room of God.",
  },
];

const audiences = [
  "Women who have carried silent pain.",
  "Pastors’ wives and women in ministry.",
  "Mothers who have suffered quietly.",
  "Anyone who has been judged before being understood.",
  "Readers seeking a deeper look at overlooked women in Scripture.",
];

export default function UnspokenPainPage() {
  const [activeEndorsement, setActiveEndorsement] = useState(0);

  const [sampleName, setSampleName] = useState("");
  const [sampleEmail, setSampleEmail] = useState("");
  const [sampleSubmitting, setSampleSubmitting] = useState(false);
  const [sampleStatus, setSampleStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [sampleError, setSampleError] = useState("");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveEndorsement(
        (current) => (current + 1) % endorsements.length
      );
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  function showPreviousEndorsement() {
    setActiveEndorsement((current) =>
      current === 0 ? endorsements.length - 1 : current - 1
    );
  }

  function showNextEndorsement() {
    setActiveEndorsement(
      (current) => (current + 1) % endorsements.length
    );
  }

  async function submitSampleRequest(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSampleError("");
    setSampleStatus("idle");

    if (!sampleName.trim() || !sampleEmail.trim()) {
      setSampleError("Please enter your name and email.");
      setSampleStatus("error");
      return;
    }

    try {
      setSampleSubmitting(true);

      const response = await fetch(
        `https://formsubmit.co/ajax/${RECEIVER_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "UNSPOKEN PAIN — Free Chapters Request",
            _template: "table",
            _captcha: "false",
            name: sampleName,
            email: sampleEmail,
            request: "Free sample chapters from Unspoken Pain",
            source: "jcinnocent.com/unspoken-pain",
            message: `
UNSPOKEN PAIN — FREE CHAPTERS REQUEST

Name: ${sampleName}
Email: ${sampleEmail}
Request: Two to three free sample chapters
            `,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSampleStatus("success");
      setSampleName("");
      setSampleEmail("");
    } catch {
      setSampleStatus("error");
      setSampleError("Something went wrong. Please try again.");
    } finally {
      setSampleSubmitting(false);
    }
  }

  const endorsement = endorsements[activeEndorsement];

  return (
    <main className="min-h-screen bg-[#07080c] text-white">
      {/* HERO AND IMMEDIATE PURCHASE OPTIONS */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,154,92,0.25),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />

        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#d7b36a]/5 blur-[150px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d7b36a]/35 bg-[#d7b36a]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#d7b36a]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f0cf83]">
                Available Now
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[0.94] tracking-tight sm:text-6xl md:text-7xl">
              UNSPOKEN
              <span className="block text-[#d7b36a]">PAIN</span>
            </h1>

            <p className="mt-6 text-xl font-medium text-white/85 md:text-2xl">
              The Untold Story of Job’s Wife
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
              A bold reexamination of one of the most misunderstood women in
              Scripture.
            </p>

            <p className="mt-5 text-sm uppercase tracking-[0.22em] text-white/50">
              By Dr. Jeff C. Innocent
            </p>

            {/* Primary purchase buttons */}
            <div className="mt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#d7b36a]">
                Buy Worldwide
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                <a
                  href={purchaseLinks.worldwide.paperback}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#d7b36a] px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f0cf83]"
                >
                  Paperback
                </a>

                <a
                  href={purchaseLinks.worldwide.ebook}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#d7b36a]/50 bg-[#d7b36a]/10 px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-[#f0cf83] transition hover:bg-[#d7b36a] hover:text-black"
                >
                  eBook
                </a>

                <a
                  href={purchaseLinks.worldwide.audiobook}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#d7b36a] hover:text-[#d7b36a]"
                >
                  Audiobook
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-5 backdrop-blur">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7b36a]">
                    Nigeria &amp; Africa
                  </p>
                  <p className="mt-1 text-sm text-white/55">
                    Regional pricing and local payment options
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={purchaseLinks.africa.ebook}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f0cf83]"
                  >
                    Africa eBook
                  </a>

                  <a
                    href={purchaseLinks.africa.audiobook}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#d7b36a] hover:text-[#d7b36a]"
                  >
                    Africa Audiobook
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-3 text-sm text-white/60">
              <span className="tracking-[0.15em] text-[#d7b36a]">★★★★★</span>
              <span>
                Endorsed by respected pastors and Christian leaders.
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <div className="absolute -inset-10 rounded-[3rem] bg-[#d7b36a]/15 blur-3xl" />

            <div className="relative rounded-[1.75rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
              <Image
                src="/unspoken-pain-cover.png"
                alt="Unspoken Pain: The Untold Story of Job’s Wife book cover"
                width={800}
                height={1200}
                priority
                className="h-auto w-full rounded-[1.2rem] object-cover"
              />
            </div>

            <Link
              href="#endorsements"
              className="mx-auto mt-6 flex w-fit items-center gap-2 text-sm font-semibold text-[#d7b36a] transition hover:text-[#f0cf83]"
            >
              Read the endorsements
              <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ENDORSEMENT SLIDER */}
      <section
        id="endorsements"
        className="scroll-mt-28 border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d7b36a]">
              Endorsements
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              What respected Christian leaders are saying
            </h2>

            <p className="mt-5 text-base leading-7 text-white/60 md:text-lg">
              Trusted voices from ministry, leadership, counseling, and
              Christian scholarship respond to the message of{" "}
              <em>Unspoken Pain</em>.
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-6xl">
            <article className="grid overflow-hidden rounded-[2.25rem] border border-[#d7b36a]/25 bg-[#f6eddd] shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
              {/* Endorsement graphic */}
              <div className="relative min-h-[420px] bg-[#eee2cf] lg:min-h-[650px]">
                <Image
                  key={endorsement.image}
                  src={endorsement.image}
                  alt={`${endorsement.name} endorsement for Unspoken Pain`}
                  fill
                  priority={activeEndorsement < 2}
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>

              {/* Written endorsement */}
              <div className="flex flex-col justify-center bg-[#0a0b10] p-8 md:p-12">
                <div className="text-5xl leading-none text-[#d7b36a]">“</div>

                <blockquote className="mt-4 text-xl leading-9 text-white/85 md:text-2xl md:leading-10">
                  {endorsement.quote}
                </blockquote>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-xl font-semibold text-[#d7b36a]">
                    {endorsement.name}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    {endorsement.role}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <div className="text-sm text-white/45">
                    {String(activeEndorsement + 1).padStart(2, "0")} /{" "}
                    {String(endorsements.length).padStart(2, "0")}
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={showPreviousEndorsement}
                      aria-label="Previous endorsement"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#d7b36a] hover:text-[#d7b36a]"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={showNextEndorsement}
                      aria-label="Next endorsement"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d7b36a] text-black transition hover:bg-[#f0cf83]"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Slider navigation dots */}
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {endorsements.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveEndorsement(index)}
                  aria-label={`Show endorsement from ${item.name}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeEndorsement
                      ? "w-8 bg-[#d7b36a]"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Immediate post-proof purchase CTA */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-white/10 bg-black/30 p-7 text-center md:flex-row md:text-left">
            <div>
              <p className="text-sm font-semibold text-[#d7b36a]">
                Ready to read it for yourself?
              </p>

              <p className="mt-2 text-sm text-white/55">
                Choose paperback, eBook, or audiobook.
              </p>
            </div>

            <Link
              href="#buy"
              className="rounded-full bg-[#d7b36a] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:bg-[#f0cf83]"
            >
              Get the Book
            </Link>
          </div>
        </div>
      </section>

      {/* OFFICIAL BOOK TRAILER */}
      <section className="border-b border-white/10 bg-[#050609]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d7b36a]">
              Official Book Trailer
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              One painful sentence should not define an entire life
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              Watch the official trailer for{" "}
              <em className="text-white/80">Unspoken Pain</em> and discover the
              untold story behind one of Scripture&apos;s most misunderstood
              women.
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-5xl">
            <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[#d7b36a]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#d7b36a]/25 bg-black p-2 shadow-2xl">
              <video
                className="aspect-video h-auto w-full rounded-[1.45rem] bg-black object-contain"
                controls
                preload="metadata"
                playsInline
                aria-label="Official Unspoken Pain book trailer"
              >
                <source src="/unspoken-pain.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </div>
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#buy"
              className="rounded-full bg-[#d7b36a] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:bg-[#f0cf83]"
            >
              Get the Book
            </Link>

            <Link
              href="#free-chapters"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-[#d7b36a] hover:text-[#d7b36a]"
            >
              Read Free Chapters
            </Link>
          </div>
        </div>
      </section>

      {/* BOOK DESCRIPTION */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d7b36a]">
            The Story Reconsidered
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            For generations, Job’s wife has been remembered by one painful
            sentence.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-white/70">
            <p className="text-xl font-semibold text-white">
              But what if we judged her too quickly?
            </p>

            <p>
              <em>Unspoken Pain</em> revisits her story with compassion, depth,
              and fresh biblical reflection. This book looks beyond her words
              to consider her wounds, her losses, and the silent grief often
              overlooked in her story.
            </p>

            <p className="border-l-2 border-[#d7b36a] pl-6 text-xl font-semibold text-[#d7b36a]">
              This is not an excuse for pain. It is an invitation to understand
              it.
            </p>
          </div>
        </div>
      </section>

      {/* CORE MESSAGE AND AUDIENCE */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-black/30 p-8 md:p-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#d7b36a]">
              Core Question
            </p>

            <h2 className="text-3xl font-bold leading-tight">
              What happens when a woman’s worst moment becomes her entire
              identity?
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Through the story of Job’s wife, <em>Unspoken Pain</em> gives
              voice to women who have been misunderstood, judged, or reduced to
              one painful season.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d7b36a]/50 bg-[#d7b36a] p-8 text-black md:p-10">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em]">
              Who Should Read It
            </p>

            <ul className="space-y-4 text-base font-medium leading-7 md:text-lg">
              {audiences.map((audience) => (
                <li key={audience} className="flex items-start gap-3">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-black/70" />
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FULL PURCHASE SECTION */}
      <section id="buy" className="scroll-mt-28">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d7b36a]">
              Choose Your Edition
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Get Unspoken Pain today
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Select the format and payment option most convenient for your
              location.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Worldwide */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:p-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b36a]">
                    Worldwide
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    International Editions
                  </h3>
                </div>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">
                  USD
                </span>
              </div>

              <div className="mt-8 grid gap-4">
                <a
                  href={purchaseLinks.worldwide.paperback}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl bg-[#d7b36a] p-5 text-black transition hover:bg-[#f0cf83]"
                >
                  <div>
                    <div className="font-bold">Paperback</div>
                    <div className="mt-1 text-sm text-black/65">
                      Order through Amazon
                    </div>
                  </div>

                  <span className="text-xl">↗</span>
                </a>

                <a
                  href={purchaseLinks.worldwide.ebook}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#d7b36a]/60 hover:bg-[#d7b36a]/10"
                >
                  <div>
                    <div className="font-semibold text-[#d7b36a]">eBook</div>
                    <div className="mt-1 text-sm text-white/55">
                      Instant digital access
                    </div>
                  </div>

                  <span className="text-xl text-white/40 transition group-hover:text-[#d7b36a]">
                    ↗
                  </span>
                </a>

                <a
                  href={purchaseLinks.worldwide.audiobook}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#d7b36a]/60 hover:bg-[#d7b36a]/10"
                >
                  <div>
                    <div className="font-semibold text-[#d7b36a]">
                      Audiobook
                    </div>
                    <div className="mt-1 text-sm text-white/55">
                      Listen wherever you are
                    </div>
                  </div>

                  <span className="text-xl text-white/40 transition group-hover:text-[#d7b36a]">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Africa */}
            <div className="rounded-[2rem] border border-[#d7b36a]/25 bg-[#d7b36a]/[0.06] p-7 md:p-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b36a]">
                    Nigeria &amp; Africa
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    Regional Digital Editions
                  </h3>
                </div>

                <span className="rounded-full border border-[#d7b36a]/20 bg-[#d7b36a]/10 px-3 py-1 text-xs text-[#d7b36a]">
                  Local payment
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-white/60">
                Use these regional links for local payment and immediate
                digital access.
              </p>

              <div className="mt-8 grid gap-4">
                <a
                  href={purchaseLinks.africa.ebook}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:border-[#d7b36a]/60 hover:bg-[#d7b36a]/10"
                >
                  <div>
                    <div className="font-semibold text-[#d7b36a]">eBook</div>
                    <div className="mt-1 text-sm text-white/55">
                      Purchase through Selar
                    </div>
                  </div>

                  <span className="text-xl text-white/40 transition group-hover:text-[#d7b36a]">
                    ↗
                  </span>
                </a>

                <a
                  href={purchaseLinks.africa.audiobook}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:border-[#d7b36a]/60 hover:bg-[#d7b36a]/10"
                >
                  <div>
                    <div className="font-semibold text-[#d7b36a]">
                      Audiobook
                    </div>
                    <div className="mt-1 text-sm text-white/55">
                      Purchase through Selar
                    </div>
                  </div>

                  <span className="text-xl text-white/40 transition group-hover:text-[#d7b36a]">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREE CHAPTERS */}
      <section
        id="free-chapters"
        className="scroll-mt-28 border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[#d7b36a]/25 bg-gradient-to-br from-[#d7b36a]/15 via-white/[0.04] to-transparent p-8 md:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#d7b36a]/15 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_480px] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d7b36a]">
                  Read Before You Buy
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
                  Receive free sample chapters
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-white/65 md:text-lg">
                  Enter your name and email to request two to three
                  complimentary chapters from <em>Unspoken Pain</em>.
                </p>
              </div>

              <form
                onSubmit={submitSampleRequest}
                className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-black/35 p-6 backdrop-blur"
              >
                <div>
                  <label
                    htmlFor="sample-name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/50"
                  >
                    Name
                  </label>

                  <input
                    id="sample-name"
                    type="text"
                    required
                    value={sampleName}
                    onChange={(event) => setSampleName(event.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#d7b36a]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sample-email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/50"
                  >
                    Email
                  </label>

                  <input
                    id="sample-email"
                    type="email"
                    required
                    value={sampleEmail}
                    onChange={(event) => setSampleEmail(event.target.value)}
                    placeholder="you@email.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#d7b36a]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sampleSubmitting}
                  className="mt-1 rounded-full bg-[#d7b36a] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f0cf83] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sampleSubmitting
                    ? "Submitting..."
                    : "Send Me Free Chapters"}
                </button>

                {sampleStatus === "success" ? (
                  <p className="text-center text-sm font-medium text-[#e7c57d]">
                    Thank you. Your request has been received.
                  </p>
                ) : null}

                {sampleStatus === "error" && sampleError ? (
                  <p className="text-center text-sm text-red-300">
                    {sampleError}
                  </p>
                ) : null}

                <p className="text-center text-xs leading-5 text-white/35">
                  Your information will only be used for book-related updates
                  and sample chapters.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR BIO */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d7b36a]">
              About the Author
            </p>

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Dr. Jeff C. Innocent
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-white/70 md:text-lg">
              <p>
                Dr. Jeff C. Innocent is a pastor, author, and teacher who has
                spent over two decades bringing Scripture to life with clarity,
                depth, and uncommon honesty. He serves as Senior Pastor of Grace
                &amp; Glory International Church, with congregations in Atlanta,
                Georgia; Monrovia, Liberia; and Asaba, Nigeria.
              </p>

              <p>
                He holds a Doctorate in Theology and has dedicated his ministry
                to saying the things the church needs to hear, even when they
                are uncomfortable.
              </p>

              <p>
                The conviction behind <em>Unspoken Pain</em> is not new. Dr.
                Innocent has carried the burden of Job&apos;s wife for eight
                years, studying her story, building a case from Scripture, and
                refusing to speak until he had something worth saying. This
                book is the result of that wait.
              </p>

              <p>
                He lives and ministers in Atlanta, Georgia, with his family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d7b36a]">
            Overlooked. Misunderstood. Finally Heard.
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Read the story again
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Look beyond one painful sentence and enter the full human story of
            Job&apos;s wife.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            <a
              href={purchaseLinks.worldwide.paperback}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#d7b36a] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:bg-[#f0cf83]"
            >
              Paperback
            </a>

            <a
              href={purchaseLinks.worldwide.ebook}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#d7b36a]/50 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#d7b36a] transition hover:bg-[#d7b36a] hover:text-black"
            >
              eBook
            </a>

            <a
              href={purchaseLinks.worldwide.audiobook}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-[#d7b36a] hover:text-[#d7b36a]"
            >
              Audiobook
            </a>
          </div>

          <p className="mt-12 text-sm uppercase tracking-[0.2em] text-white/40">
            For interviews, features, bulk orders, or speaking inquiries
          </p>

          <Link
            href={`mailto:${DISPLAY_EMAIL}?subject=Unspoken Pain Inquiry`}
            className="mt-3 inline-block text-lg font-semibold text-[#d7b36a] transition hover:text-[#f0cf83]"
          >
            {DISPLAY_EMAIL}
          </Link>
        </div>
      </section>
    </main>
  );
}