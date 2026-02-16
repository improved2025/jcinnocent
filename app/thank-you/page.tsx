// app/thank-you/page.tsx
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5">
          <div className="leading-tight">
            <div className="text-sm tracking-wide text-white/90">
              Dr Jeff C. Innocent
            </div>
            <div className="text-[11px] tracking-[0.28em] text-white/50">
              APPLICATION RECEIVED
            </div>
          </div>

          <Link
            href="/ai-consulting"
            className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:border-white/25 hover:text-white transition"
          >
            Back to AI Consulting
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-[1240px] px-6 py-12">
        <div className="rounded-[36px] border border-white/10 bg-neutral-950 p-10 md:p-14">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.28em] text-white/55">
                SUCCESS
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Thank you.
                <span className="block text-white/65">
                  Your application has been submitted.
                </span>
              </h1>

              <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
                I’ve received your details. If you’re a fit for the 6-week 1:1
                coaching, you’ll hear back with next steps.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/ai-consulting"
                  className="rounded-full bg-amber-200 px-7 py-3 text-sm font-medium text-neutral-950 hover:opacity-90 transition"
                >
                  Return to AI Consulting
                </Link>

                <Link
                  href="/"
                  className="rounded-full border border-white/15 px-7 py-3 text-sm text-white/80 hover:border-white/25 hover:text-white transition"
                >
                  Go Home
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[420px]">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
                <div className="text-[11px] tracking-[0.28em] text-white/50">
                  WHAT HAPPENS NEXT
                </div>

                <ul className="mt-5 space-y-3 text-sm text-white/70">
                  <li className="flex gap-2">
                    <span className="text-amber-200/80">•</span>
                    <span>I review your application.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-200/80">•</span>
                    <span>If accepted, you’ll receive next steps by email.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-200/80">•</span>
                    <span>
                      If not a fit, you’ll still receive a clear response.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 rounded-2xl border border-white/10 bg-neutral-950/50 p-5 text-xs text-white/60">
                  Tip: check your spam folder if you don’t see a reply.
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 text-xs text-white/45">
          © {new Date().getFullYear()} Dr Jeff C. Innocent
        </footer>
      </section>
    </main>
  );
}
