import BookingForm from "../components/BookingForm";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-[1240px] px-6 py-12">
        <div className="rounded-[40px] border border-white/10 bg-neutral-950 p-8 md:p-12">
          <p className="text-[11px] tracking-[0.28em] text-white/55">
            BOOKING
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Request a booking
            <span className="block text-white/65">simple and direct.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            Ministry invitations, consulting, workshops, film conversations, and business engagements.
          </p>

          <BookingForm />
        </div>
      </section>
    </main>
  );
}
