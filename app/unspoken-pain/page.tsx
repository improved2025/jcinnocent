import Image from "next/image";
import Link from "next/link";

const DISPLAY_EMAIL = "contact@jcinnocent.com";
const RECEIVER_EMAIL = "jefinno73@gmail.com";

export default function UnspokenPainPage() {
  return (
    <main className="min-h-screen bg-[#07080c] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,154,92,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 lg:px-10 lg:py-32">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-[#d7b36a]">
              New Book
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              UNSPOKEN
              <span className="block text-[#d7b36a]">PAIN</span>
            </h1>

            <p className="mt-6 text-xl font-medium text-white/85 md:text-2xl">
              The Untold Story of Job’s Wife
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
              A bold reexamination of one of the most misunderstood women in
              Scripture.
            </p>

            <p className="mt-6 text-sm uppercase tracking-[0.22em] text-white/50">
              By Jeff C. Innocent
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#get-book"
                className="rounded-full bg-[#d7b36a] px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-[#f0cf83]"
              >
                Get the Book
              </Link>

              <Link
                href={`mailto:${DISPLAY_EMAIL}?subject=Unspoken Pain Media Inquiry`}
                className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#d7b36a] hover:text-[#d7b36a]"
              >
                Media Inquiry
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <div className="absolute -inset-6 rounded-[2rem] bg-[#d7b36a]/15 blur-3xl" />
            <div className="relative rounded-[1.5rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
              <Image
                src="/unspoken-pain-cover.png"
                alt="Unspoken Pain book cover"
                width={800}
                height={1200}
                priority
                className="h-auto w-full rounded-[1rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            For generations, Job’s wife has been remembered by one painful
            sentence.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-white/72">
            <p>But what if we judged her too quickly?</p>

            <p>
              <em>Unspoken Pain</em> revisits her story with compassion, depth,
              and fresh biblical reflection. This book looks beyond her words to
              consider her wounds, her losses, and the silent grief often
              overlooked in her story.
            </p>

            <p className="text-xl font-semibold text-[#d7b36a]">
              This is not an excuse for pain. It is an invitation to understand
              it.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#d7b36a]">
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

          <div className="rounded-[2rem] border border-white/10 bg-[#d7b36a] p-8 text-black">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em]">
              Who Should Read It
            </p>

            <ul className="space-y-4 text-lg font-medium leading-7">
              <li>Women who have carried silent pain.</li>
              <li>Pastor’s wives and women in ministry.</li>
              <li>Mothers who have suffered quietly.</li>
              <li>Anyone judged before being understood.</li>
              <li>
                Readers seeking a deeper look at overlooked women in Scripture.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="get-book" className="bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d7b36a]">
            Available Soon
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Get your copy of UNSPOKEN PAIN
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            The untold story of Job’s wife. A book for readers ready to look
            again, listen deeper, and see pain with compassion.
          </p>

          <form
            action={`https://formsubmit.co/${RECEIVER_EMAIL}`}
            method="POST"
            className="mx-auto mt-10 grid max-w-xl gap-4 sm:grid-cols-[1fr_1fr_auto]"
          >
            <input type="hidden" name="_subject" value="UNSPOKEN PAIN — Waitlist" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="/thank-you" />

            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="rounded-full border border-white/10 bg-black/40 px-5 py-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#d7b36a]"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="rounded-full border border-white/10 bg-black/40 px-5 py-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#d7b36a]"
            />

            <button
              type="submit"
              className="rounded-full bg-[#d7b36a] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-[#f0cf83]"
            >
              Join
            </button>
          </form>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-10">
          <p className="text-lg leading-8 text-white/65">
            Jeff C. Innocent is a pastor, author, and teacher whose writing
            brings biblical stories into honest conversation with real human
            pain.
          </p>

          <p className="mt-8 text-sm uppercase tracking-[0.22em] text-white/45">
            For interviews, features, or speaking inquiries
          </p>

          <Link
            href={`mailto:${DISPLAY_EMAIL}?subject=Unspoken Pain Inquiry`}
            className="mt-3 inline-block text-lg font-semibold text-[#d7b36a] hover:text-[#f0cf83]"
          >
            {DISPLAY_EMAIL}
          </Link>
        </div>
      </section>
    </main>
  );
}