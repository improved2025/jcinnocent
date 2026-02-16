import Image from "next/image";

export default function WorkshopsPage() {
  return (
    <main className="mx-auto max-w-[1240px] px-6 py-12 text-white">

      <div className="rounded-[40px] border border-white/10 bg-black/40 backdrop-blur p-8 md:p-12">

        <p className="text-[11px] tracking-[0.28em] text-white/55">WORKSHOPS</p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          AI Literacy Virtual Workshop
          <span className="block text-white/65">
            clarity before complexity.
          </span>
        </h1>

        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
          A free virtual session designed for pastors, leaders, and small business owners
          who want to understand AI without hype, fear, or confusion.
        </p>

        {/* Workshop Card */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[420px_1fr]">

          {/* Flyer */}
          <div className="rounded-[28px] border border-white/10 bg-black/40 p-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <div className="aspect-[3/4]">

                {/* Replace src once you upload flyer */}
                <Image
                  src="/images/workshop-flyer.png"
                  alt="AI Literacy Workshop Flyer"
                  fill
                  className="object-cover"
                />

              </div>
            </div>
          </div>

          {/* Details */}
          <div className="rounded-[28px] border border-white/10 bg-black/40 p-8">

            <div className="space-y-4 text-sm text-white/70">

              <div>
                <span className="text-white/50">Date:</span>{" "}
                Saturday, February 28
              </div>

              <div>
                <span className="text-white/50">Time:</span>{" "}
                12:00 Noon (EST)
              </div>

              <div>
                <span className="text-white/50">Format:</span>{" "}
                Live Virtual (Zoom)
              </div>

              <div>
                <span className="text-white/50">Cost:</span>{" "}
                Free (registration required)
              </div>

            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm leading-relaxed text-white/70">
                This workshop is for anyone who feels overwhelmed by AI or unsure where to begin.
                You’ll learn what AI actually is, where it fits in your work or ministry,
                and how to start using it responsibly and confidently.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">

              <a
                href="https://us02web.zoom.us/meeting/register/vV8mZUK1T6Kuajx_1kRMLg"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-amber-200 px-8 py-3 text-sm font-medium text-neutral-950 hover:opacity-90 transition"
              >
                Save My Seat
              </a>

              <span className="text-xs text-white/45">
                Limited spots available
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
