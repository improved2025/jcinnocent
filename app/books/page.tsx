// app/books/page.tsx
import Image from "next/image";

const books = Array.from({ length: 10 }).map((_, i) => {
  const n = i + 1;
  return {
    id: n,
    title: `Book ${n}`,
    image: `/images/book${n}.png`, // upload later: public/images/book1.png ... book10.png
    description:
      "Short description goes here. Replace this with a concise, compelling summary of the book in 2–3 sentences.",
    amazonUrl: "https://amazon.com", // replace with each book’s link later
  };
});

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-[1240px] px-6 py-12">
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-[11px] tracking-[0.28em] text-white/55">BOOKS</p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Books
            <span className="block text-white/65">
              writing with purpose, clarity, and impact.
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
            Covers will be added soon. Each book has a dedicated space for a clear
            description and a direct Amazon purchase link.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((b) => (
              <article
                key={b.id}
                className="group rounded-[28px] border border-white/10 bg-neutral-950/60 p-6 transition hover:border-white/20"
              >
                {/* Cover */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className="aspect-[3/4] w-full">
                    <Image
                      src={b.image}
                      alt={`${b.title} cover`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* subtle overlay for premium look */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>

                {/* Title + Description */}
                <div className="mt-5">
                  <h2 className="text-lg font-semibold">{b.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {b.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={b.amazonUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-amber-200 px-5 py-2.5 text-sm font-medium text-neutral-950 transition hover:opacity-90"
                  >
                    Buy Now
                  </a>

                  <span className="text-xs text-white/45">
                    Amazon
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* small note */}
          <div className="mt-10 text-xs text-white/45">
            Upload covers to: <span className="text-white/70">public/images/</span> as{" "}
            <span className="text-white/70">
              book1.png … book10.png
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
