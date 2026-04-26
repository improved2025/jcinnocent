import Link from "next/link";

export default function UnspokenPainPage() {
  return (
    <main className="min-h-screen text-white">
      {/* Hero */}
      <section className="mx-auto max-w-[1240px] px-6 py-12">
        <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-black/40 p-8 backdrop-blur md:p-14">
          <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-amber-200/10 blur-3xl" />

          <div className="relative max-w-4xl">
            <p className="text-[11px] tracking-[0.32em] text-amber-200/80">
              NEW BOOK
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-none md:text-7xl">
              UNSPOKEN PAIN
            </h1>

            <h2 className="mt-4 text-2xl font-medium text-white/70 md:text-3xl">
              The Untold Story of Job’s Wife
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              A bold reexamination of one of the most misunderstood women in Scripture.
            </p>

            <p className="mt-5 text-sm text-white/55">By Jeff C. Innocent</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book-cta"
                className="rounded-full bg-amber-200 px-7 py-3 text-sm font-medium text-neutral-950 transition hover:opacity-90"
              >
                Get the Book
              </a>

              <Link
                href="/booking"
                className="rounded-full border border-white/15 px-7 py-3 text-sm text-white/80 transition hover:border-white/25 hover:text-white"
              >
                Speaking Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto max-w-[1240px] px-6 pb-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-[11px] tracking-[0.28em] text-white/50">
              BOOK DESCRIPTION
            </p>

            <div className="mt-6 space-y-5 text-sm leading-relaxed text-white/72 md:text-base">
              <p>
                For generations, Job’s wife has been remembered by one painful sentence.
              </p>

              <p className="text-xl font-semibold text-amber-200">
                But what if we judged her too quickly?
              </p>

              <p>
                <span className="font-medium text-white">Unspoken Pain</span> revisits her
                story with compassion, depth, and fresh biblical reflection. This book looks
                beyond her words to consider her wounds, her losses, and the silent grief often
                overlooked in her story.
              </p>

              <p className="border-l border-amber-200/50 pl-5 text-white/80">
                This is not an excuse for pain.
                <br />
                It is an invitation to understand it.
              </p>
            </div>
          </div>

          <div className="rounded-[36px] border border-white/10 bg-black/40 p-8 md:p-10">
            <p className="text-[11px] tracking-[0.28em] text-white/50">
              CORE QUESTION
            </p>

            <h3 className="mt-5 text-2xl font-semibold leading-tight text-amber-200">
              What happens when a woman’s worst moment becomes her entire identity?
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Through the story of Job’s wife, <span className="text-white">Unspoken Pain</span>{" "}
              gives voice to women who have been misunderstood, judged, or reduced to one painful
              season.
            </p>
          </div>
        </div>
      </section>

      {/* Who should read */}
      <section className="mx-auto max-w-[1240px] px-6 pb-12">
        <div className="rounded-[36px] border border-white/10 bg-black/40 p-8 backdrop-blur md:p-10">
          <p className="text-[11px] tracking-[0.28em] text-white/50">
            WHO SHOULD READ IT
          </p>

          <h2 className="mt-4 text-3xl font-semibold">This book is for:</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Women who have carried silent pain.",
              "Pastor’s wives and women in ministry.",
              "Mothers who have suffered quietly.",
              "Anyone who has been judged before being understood.",
              "Readers who want a deeper look at overlooked women in Scripture.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/75"
              >
                <span className="mr-2 text-amber-200">•</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book-cta" className="mx-auto max-w-[1240px] px-6 pb-12">
        <div className="relative overflow-hidden rounded-[40px] border border-amber-200/20 bg-amber-200/10 p-8 md:p-12">
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] tracking-[0.28em] text-amber-200/80">
                GET YOUR COPY
              </p>

              <h2 className="mt-4 text-3xl font-semibold">
                Get your copy of UNSPOKEN PAIN
              </h2>

              <p className="mt-2 text-sm text-white/70">
                The untold story of Job’s wife.
              </p>
            </div>

            <a
              href="#"
              className="rounded-full bg-amber-200 px-8 py-3 text-sm font-medium text-neutral-950 transition hover:opacity-90"
            >
              Buy Now / Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* Author + Contact */}
      <section className="mx-auto max-w-[1240px] px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <p className="text-[11px] tracking-[0.28em] text-white/50">
              AUTHOR
            </p>

            <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
              Jeff C. Innocent is a pastor, author, and teacher whose writing brings biblical
              stories into honest conversation with real human pain.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <p className="text-[11px] tracking-[0.28em] text-white/50">
              CONTACT
            </p>

            <p className="mt-5 text-sm leading-relaxed text-white/70">
              For interviews, features, or speaking inquiries:
            </p>

            <a
              href="mailto:jefinno73@gmail.com"
              className="mt-3 inline-flex text-sm font-medium text-amber-200 hover:opacity-80"
            >
              jefinno73@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}