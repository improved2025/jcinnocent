export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-neutral-950 to-neutral-800 text-white px-10">
      <div className="max-w-5xl">
        <h1 className="text-6xl font-bold leading-tight">Dr Jeff C. Innocent</h1>

        <p className="mt-6 text-xl text-neutral-300">
          Faith-led leadership. Modern execution. Global impact.
        </p>

        <p className="mt-4 text-neutral-400">
          Pastor • AI Consultant • Author • Filmmaker • Builder
        </p>

        <div className="mt-10 flex gap-4">
          <a href="/booking" className="rounded-full bg-white text-black px-8 py-4">
            Request Booking
          </a>

          <a href="/ministry" className="rounded-full border border-white px-8 py-4">
            Explore Ministry
          </a>
        </div>
      </div>
    </section>
  );
}
