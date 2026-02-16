"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

// ✅ Direct all AI coaching applications here:
const RECEIVER_EMAIL = "jefinno73@gmail.com";

const goals = [
  "Grow my business using AI",
  "Improve church communication and systems",
  "Build content systems that scale",
  "Automate operations / admin work",
  "Learn AI properly (not random tips)",
  "Other",
];

const readiness = ["I’m ready to start now", "I’m ready in 2–4 weeks", "I’m exploring options"];

const budget = ["I can invest in coaching", "I need a payment plan", "Not sure yet"];

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-4">
        <div className="text-sm font-medium text-white/90">{label}</div>
        {hint ? <div className="text-xs text-white/45">{hint}</div> : null}
      </div>
      {children}
    </div>
  );
}

function Input({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-white/10 bg-neutral-950/50 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 outline-none transition focus:border-white/25"
    />
  );
}

function TextArea({
  value,
  onChange,
  placeholder,
  rows = 6,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full resize-none rounded-2xl border border-white/10 bg-neutral-950/50 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 outline-none transition focus:border-white/25"
    />
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder = "Select",
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-2xl border border-white/10 bg-neutral-950/50 px-4 py-3 text-sm text-white/90 outline-none transition focus:border-white/25"
    >
      <option value="" className="bg-neutral-950">
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o} className="bg-neutral-950">
          {o}
        </option>
      ))}
    </select>
  );
}

export default function AICoachingApplyPage() {
  const router = useRouter();

  // Identity
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  // Context
  const [whoYouAre, setWhoYouAre] = useState("");
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [otherGoal, setOtherGoal] = useState("");
  const [currentSituation, setCurrentSituation] = useState("");
  const [biggestBlocker, setBiggestBlocker] = useState("");

  // AI maturity
  const [aiUseNow, setAiUseNow] = useState("");
  const [tools, setTools] = useState("");
  const [workflow, setWorkflow] = useState("");

  // Program fit
  const [readinessLevel, setReadinessLevel] = useState("");
  const [timeCommitment, setTimeCommitment] = useState("");
  const [budgetMindset, setBudgetMindset] = useState("");
  const [whyNow, setWhyNow] = useState("");
  const [successLooksLike, setSuccessLooksLike] = useState("");

  // Funnel tracking
  const [workshopAttended, setWorkshopAttended] = useState("Yes");
  const [workshopDate, setWorkshopDate] = useState("");

  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const preview = useMemo(() => {
    const goalLine = primaryGoal === "Other" ? otherGoal : primaryGoal;
    return [
      "JCINNOCENT.COM — AI Coaching Application (6-week 1:1)",
      "",
      "APPLICANT",
      `Name: ${name || "—"}`,
      `Email: ${email || "—"}`,
      phone ? `Phone: ${phone}` : null,
      city ? `City: ${city}` : null,
      "",
      "WORKSHOP",
      `Attended free AI workshop: ${workshopAttended}`,
      workshopDate ? `Workshop date: ${workshopDate}` : null,
      "",
      "FIT + CONTEXT",
      `Who you are: ${whoYouAre || "—"}`,
      `Primary goal: ${goalLine || "—"}`,
      "",
      "CURRENT SITUATION",
      currentSituation || "—",
      "",
      "BIGGEST BLOCKER",
      biggestBlocker || "—",
      "",
      "AI TODAY",
      `How you use AI now: ${aiUseNow || "—"}`,
      `Tools you use: ${tools || "—"}`,
      `One workflow you want built: ${workflow || "—"}`,
      "",
      "READINESS",
      `Readiness: ${readinessLevel || "—"}`,
      `Time commitment weekly: ${timeCommitment || "—"}`,
      `Budget mindset: ${budgetMindset || "—"}`,
      "",
      "WHY NOW",
      whyNow || "—",
      "",
      "SUCCESS LOOKS LIKE",
      successLooksLike || "—",
    ]
      .filter(Boolean)
      .join("\n");
  }, [
    name,
    email,
    phone,
    city,
    workshopAttended,
    workshopDate,
    whoYouAre,
    primaryGoal,
    otherGoal,
    currentSituation,
    biggestBlocker,
    aiUseNow,
    tools,
    workflow,
    readinessLevel,
    timeCommitment,
    budgetMindset,
    whyNow,
    successLooksLike,
  ]);

  function validate() {
    const e: string[] = [];
    if (!name.trim()) e.push("Name is required.");
    if (!email.trim()) e.push("Email is required.");
    if (!whoYouAre.trim()) e.push("Who you are is required.");
    if (!primaryGoal.trim()) e.push("Primary goal is required.");
    if (primaryGoal === "Other" && !otherGoal.trim()) e.push("Other goal is required.");
    if (!currentSituation.trim()) e.push("Current situation is required.");
    if (!biggestBlocker.trim()) e.push("Biggest blocker is required.");
    if (!workflow.trim()) e.push("Workflow request is required.");
    if (!readinessLevel.trim()) e.push("Readiness is required.");
    if (!timeCommitment.trim()) e.push("Time commitment is required.");
    if (!budgetMindset.trim()) e.push("Budget mindset is required.");
    if (!whyNow.trim()) e.push("Why now is required.");
    if (!successLooksLike.trim()) e.push("Success definition is required.");
    return e;
  }

  async function submit() {
    const e = validate();
    setErrors(e);
    if (e.length) return;

    try {
      setSubmitting(true);

      // ✅ FormSubmit needs a POST; we send fields (not just a blob)
      const payload = {
        _subject: "AI Coaching Application — Dr Jeff C. Innocent",
        _template: "table",
        _captcha: "false",
        name,
        email,
        phone,
        city,
        workshopAttended,
        workshopDate,
        whoYouAre,
        primaryGoal: primaryGoal === "Other" ? otherGoal : primaryGoal,
        currentSituation,
        biggestBlocker,
        aiUseNow,
        tools,
        workflow,
        readinessLevel,
        timeCommitment,
        budgetMindset,
        whyNow,
        successLooksLike,
        // keeps your nice preview too
        message: preview,
      };

      const res = await fetch(`https://formsubmit.co/ajax/${RECEIVER_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      router.push("/thank-you");
    } catch {
      setErrors(["Something went wrong. Please try again in a moment."]);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5">
          <div className="leading-tight">
            <div className="text-sm tracking-wide text-white/90">Dr Jeff C. Innocent</div>
            <div className="text-[11px] tracking-[0.28em] text-white/50">AI COACHING APPLICATION</div>
          </div>

          <Link
            href="/ai-consulting"
            className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:border-white/25 hover:text-white transition"
          >
            Back to AI Consulting
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-[1240px] px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="rounded-[36px] border border-white/10 bg-neutral-950 p-10">
            <p className="text-[11px] tracking-[0.28em] text-white/55">6-WEEK 1:1 COACHING</p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Application
              <span className="block text-white/65">serious people only.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              This is a selective program. If accepted, we build systems with you for six weeks: workflow,
              execution, and measurable progress.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={submit}
                disabled={submitting}
                className="rounded-full bg-amber-200 px-6 py-3 text-sm font-medium text-neutral-950 hover:opacity-90 transition disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </div>

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-10">
            <div className="text-[11px] tracking-[0.28em] text-white/50">WHAT MATTERS</div>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <span className="text-amber-200/80">•</span>
                <span>Specific goal and urgency</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-200/80">•</span>
                <span>Willingness to implement weekly</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-200/80">•</span>
                <span>Respect for process and timelines</span>
              </li>
            </ul>
            <div className="mt-8 rounded-3xl border border-white/10 bg-neutral-950/40 p-6 text-xs text-white/60">
              Tip: vague answers = slower approval.
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[36px] border border-white/10 bg-neutral-950 p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="text-[11px] tracking-[0.28em] text-white/50">IDENTITY</div>

              <Field label="Full name" hint="Required">
                <Input value={name} onChange={setName} placeholder="Your full name" />
              </Field>

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Email" hint="Required">
                  <Input value={email} onChange={setEmail} placeholder="you@email.com" type="email" />
                </Field>
                <Field label="Phone (optional)">
                  <Input value={phone} onChange={setPhone} placeholder="+1 (___) ___-____" />
                </Field>
              </div>

              <Field label="City / Location (optional)">
                <Input value={city} onChange={setCity} placeholder="City, State, Country" />
              </Field>

              <div className="border-t border-white/10 pt-8">
                <div className="text-[11px] tracking-[0.28em] text-white/50">WORKSHOP</div>
              </div>

              <Field label="Did you attend my free AI workshop?">
                <Select
                  value={workshopAttended}
                  onChange={setWorkshopAttended}
                  options={["Yes", "No"]}
                  placeholder="Select"
                />
              </Field>

              <Field label="If yes, which date? (optional)">
                <Input value={workshopDate} onChange={setWorkshopDate} type="date" />
              </Field>

              <div className="border-t border-white/10 pt-8">
                <div className="text-[11px] tracking-[0.28em] text-white/50">FIT + CONTEXT</div>
              </div>

              <Field label="Who are you?" hint="Required">
                <TextArea
                  value={whoYouAre}
                  onChange={setWhoYouAre}
                  placeholder="Your role, what you lead, what you’re building."
                  rows={5}
                />
              </Field>

              <Field label="Primary goal" hint="Required">
                <Select value={primaryGoal} onChange={setPrimaryGoal} options={goals} placeholder="Select" />
              </Field>

              {primaryGoal === "Other" ? (
                <Field label="Other goal" hint="Required">
                  <Input value={otherGoal} onChange={setOtherGoal} placeholder="Specify your goal" />
                </Field>
              ) : null}
            </div>

            <div className="space-y-8">
              <div className="text-[11px] tracking-[0.28em] text-white/50">CURRENT REALITY</div>

              <Field label="Describe your current situation" hint="Required">
                <TextArea
                  value={currentSituation}
                  onChange={setCurrentSituation}
                  placeholder="Where are you now? What have you tried? What’s not working?"
                  rows={6}
                />
              </Field>

              <Field label="What is your biggest blocker?" hint="Required">
                <TextArea
                  value={biggestBlocker}
                  onChange={setBiggestBlocker}
                  placeholder="Time, clarity, team, systems, consistency, skill—be specific."
                  rows={5}
                />
              </Field>

              <div className="border-t border-white/10 pt-8">
                <div className="text-[11px] tracking-[0.28em] text-white/50">AI TODAY</div>
              </div>

              <Field label="How do you currently use AI?">
                <TextArea value={aiUseNow} onChange={setAiUseNow} placeholder="What do you use it for today?" rows={4} />
              </Field>

              <Field label="Tools you use (optional)">
                <Input value={tools} onChange={setTools} placeholder="ChatGPT, Canva, Notion, Zapier, etc." />
              </Field>

              <Field label="One workflow you want built" hint="Required">
                <TextArea
                  value={workflow}
                  onChange={setWorkflow}
                  placeholder="Example: weekly sermon + social clips workflow, lead-gen system, admin automation..."
                  rows={5}
                />
              </Field>

              <div className="border-t border-white/10 pt-8">
                <div className="text-[11px] tracking-[0.28em] text-white/50">READINESS</div>
              </div>

              <Field label="Readiness" hint="Required">
                <Select value={readinessLevel} onChange={setReadinessLevel} options={readiness} placeholder="Select" />
              </Field>

              <Field label="Weekly time commitment (hours)" hint="Required">
                <Input value={timeCommitment} onChange={setTimeCommitment} placeholder="Example: 3–5 hours weekly" />
              </Field>

              <Field label="Budget mindset" hint="Required">
                <Select value={budgetMindset} onChange={setBudgetMindset} options={budget} placeholder="Select" />
              </Field>

              <Field label="Why now?" hint="Required">
                <TextArea
                  value={whyNow}
                  onChange={setWhyNow}
                  placeholder="What happens if nothing changes in the next 90 days?"
                  rows={4}
                />
              </Field>

              <Field label="Define success" hint="Required">
                <TextArea
                  value={successLooksLike}
                  onChange={setSuccessLooksLike}
                  placeholder="What will be true at the end of 6 weeks?"
                  rows={4}
                />
              </Field>
            </div>
          </div>

          {errors.length ? (
            <div className="mt-8 rounded-3xl border border-red-500/30 bg-red-500/10 p-6">
              <div className="text-sm font-medium text-red-200">Please fix:</div>
              <ul className="mt-3 space-y-2 text-sm text-red-100/80">
                {errors.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="text-red-200">•</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={submit}
              disabled={submitting}
              className="rounded-full bg-amber-200 px-8 py-3 text-sm font-medium text-neutral-950 hover:opacity-90 transition disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </div>

        <footer className="mt-10 text-xs text-white/45">© {new Date().getFullYear()} Dr Jeff C. Innocent</footer>
      </section>
    </main>
  );
}
