"use client";

import { useState } from "react";

const bookingTypes = [
  "Ministry Invitation",
  "AI Consulting (General)",
  "Workshop / Training",
  "Film",
  "Business",
  "Interview / Podcast",
  "Other",
];

const preferredTimes = ["Morning", "Afternoon", "Evening", "Flexible"];

const contactMethods = ["Email", "Phone Call", "Text Message", "WhatsApp"];

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
  rows = 5,
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

export default function BookingForm() {
  const [bookingType, setBookingType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  function validate() {
    const e: string[] = [];
    if (!bookingType) e.push("Select a booking type.");
    if (!eventDate) e.push("Select an event date.");
    if (!preferredTime) e.push("Select a preferred time.");
    if (!contactMethod) e.push("Select a preferred contact method.");
    if (!fullName.trim()) e.push("Full name is required.");

    // Keep it simple: at least one contact detail
    if (!email.trim() && !phone.trim()) e.push("Provide an email or phone number.");

    return e;
  }

  async function submit() {
    const e = validate();
    setErrors(e);
    if (e.length) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingType,
          eventDate,
          preferredTime,
          contactMethod,
          fullName,
          organization,
          email,
          phone,
          notes,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      // simple success → redirect
      window.location.href = "/thank-you";
    } catch {
      setStatus("error");
      setErrors(["Something went wrong. Please try again."]);
    }
  }

  return (
    <div className="mt-8 rounded-[36px] border border-white/10 bg-white/5 p-8 md:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Booking type" hint="Required">
          <Select
            value={bookingType}
            onChange={setBookingType}
            options={bookingTypes}
            placeholder="Select"
          />
        </Field>

        <Field label="Event date" hint="Required">
          <Input value={eventDate} onChange={setEventDate} type="date" />
        </Field>

        <Field label="Preferred time" hint="Required">
          <Select
            value={preferredTime}
            onChange={setPreferredTime}
            options={preferredTimes}
            placeholder="Select"
          />
        </Field>

        <Field label="Preferred contact method" hint="Required">
          <Select
            value={contactMethod}
            onChange={setContactMethod}
            options={contactMethods}
            placeholder="Select"
          />
        </Field>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Field label="Full name" hint="Required">
          <Input value={fullName} onChange={setFullName} placeholder="Your full name" />
        </Field>

        <Field label="Organization" hint="Optional">
          <Input value={organization} onChange={setOrganization} placeholder="Church / Company / Team" />
        </Field>

        <Field label="Email" hint="Email or phone required">
          <Input value={email} onChange={setEmail} placeholder="you@email.com" type="email" />
        </Field>

        <Field label="Phone" hint="Email or phone required">
          <Input value={phone} onChange={setPhone} placeholder="+1 (___) ___-____" />
        </Field>
      </div>

      <div className="mt-6">
        <Field label="Notes" hint="Optional">
          <TextArea
            value={notes}
            onChange={setNotes}
            placeholder="Anything important I should know? Location, topic, audience, format, etc."
            rows={5}
          />
        </Field>
      </div>

      {errors.length ? (
        <div className="mt-6 rounded-3xl border border-red-500/30 bg-red-500/10 p-6">
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
          disabled={status === "submitting"}
          className="rounded-full bg-amber-200 px-8 py-3 text-sm font-medium text-neutral-950 hover:opacity-90 transition disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : "Submit"}
        </button>

        {status === "error" ? (
          <span className="text-xs text-red-200/90">
            Couldn’t submit. Try again.
          </span>
        ) : (
          <span className="text-xs text-white/45">
            You’ll be redirected after submission.
          </span>
        )}
      </div>
    </div>
  );
}
