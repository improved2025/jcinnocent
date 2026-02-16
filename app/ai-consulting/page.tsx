import Link from "next/link";
import Image from "next/image";

const pillars = [
  {
    title: "Strategy",
    desc: "We define the highest-leverage AI use cases, the risks, and the roadmap.",
  },
  {
    title: "Implementation",
    desc: "We build the workflows, prompts, automations, and systems that actually run.",
  },
  {
    title: "Training",
    desc: "Your team learns a repeatable method, not one-off tricks.",
  },
];

const offers = [
  {
    title: "AI Readiness & Opportunity Audit",
    bullets: ["Use-case discovery", "Risk and policy review", "Quick wins + 30-day plan"],
  },
  {
    title: "AI Workflow Buildout",
    bullets: ["Content + ops automation", "Custom GPT workflows", "Templates and playbooks"],
  },
  {
    title: "Executive + Team Training",
    bullets: ["Leadership session", "Role-based training", "Hands-on workshop delivery"],
  },
];

const audience = [
  { title: "Pastors & church leadership", desc: "Save time, sharpen communication, protect integrity." },
  { title: "Small businesses", desc: "Increase output without increasing payroll." },
  { title: "Creators & teams", desc: "Consistent content, better systems, faster execution." },
];

export default function AIConsultingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section className="mx-auto max-w-[1240px] px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_460px] lg:items-stretch">
          {/* Copy panel */}
          <div className="rounded-[34px] border border-white/10 bg-neutral-950 p-10">
            <p className="text-[11px] tracking-[0.28em] text-white/55">
              CLARITY • SYSTEMS • RESULTS
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              AI that improves output
              <span className="block text-white/65">without losing your voice.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              I help leaders and teams use AI with discipline. Not hype. Not confusion.
              We build workflows that save time, improve consistency, and protect quality.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {/* PRIVATE COACHING INTAKE */}
              <Link
                href="/ai-coaching/apply"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 hover:opacity-90 transition"
              >
                Start Here (Coaching Application)
              </Link>

              {/* GENERAL BUSINESS */}
              <Link
                href="/booking"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 hover:border-white/25 hover:text-white transition"
              >
                Request Consulting
              </Link>

              <Link
                href="/workshops"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 hover:border-white/25 hover:text-white transition"
              >
                View Workshops
              </Link>
            </div>

            {/* Pillars */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="text-[11px] tracking-[0.28em] text-white/50">HOW I WORK</div>
              <div className="mt-5 grid gap-3">
                {pillars.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">{p.title}</div>
                      <div className="text-amber-200/80">•</div>
                    </div>
                    <div className="mt-2 text-xs text-white/65">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-neutral-900 min-h-[520px]">
            <Image
              src="/images/portrait-2.png"
              alt="AI consulting portrait"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/15 via-transparent to-neutral-950/40" />

            <div className="absolute bottom-6 left-8 right-8">
              <div className="text-sm font-medium">
                Free Workshop → Private Application → 6 Week Coaching
              </div>
              <div className="mt-1 text-xs text-white/70">
                Coaching is selective.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="mx-auto max-w-[1240px] px-6 pb-12">
        <div className="rounded-[34px] border border-white/10 bg-white/5 p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] tracking-[0.28em] text-white/50">
                OFFERINGS
              </div>
              <h2 className="mt-4 text-2xl font-semibold">
                Practical engagements, built for speed.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/70">
                You’ll leave with clear deliverables: workflows, templates, playbooks, and a plan your team can run.
              </p>
            </div>

            {/* PRIVATE INTAKE */}
            <Link
              href="/ai-coaching/apply"
              className="rounded-full bg-amber-200 px-6 py-3 text-sm font-medium text-neutral-950 hover:opacity-90 transition"
            >
              Start Here
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {offers.map((o) => (
              <div
                key={o.title}
                className="rounded-3xl border border-white/10 bg-neutral-950/40 p-7"
              >
                <div className="text-sm font-medium">{o.title}</div>
                <ul className="mt-4 space-y-2 text-xs text-white/70">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-[2px] text-amber-200/80">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it’s for */}
      <section className="mx-auto max-w-[1240px] px-6 pb-12">
        <div className="grid gap-4 md:grid-cols-3">
          {audience.map((a) => (
            <div
              key={a.title}
              className="rounded-3xl border border-white/10 bg-neutral-950 p-8"
            >
              <div className="text-[11px] tracking-[0.28em] text-white/50">
                WHO IT’S FOR
              </div>
              <div className="mt-4 text-lg font-semibold">{a.title}</div>
              <p className="mt-3 text-sm text-white/70">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Note: Footer is global in app/layout.tsx now */}
    </main>
  );
}
