import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5">
        <Link href="/" className="leading-tight">
          <div className="text-sm tracking-wide text-white/90">Dr Jeff C. Innocent</div>
          <div className="text-[11px] tracking-[0.28em] text-white/50">
            AUTHORITY • WARMTH • EXCELLENCE
          </div>
        </Link>

        <nav className="hidden items-center gap-3 md:flex">
          <Link
            href="/ministry"
            className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 hover:border-white/25 hover:text-white transition"
          >
            Ministry
          </Link>
          <Link
            href="/ai-consulting"
            className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 hover:border-white/25 hover:text-white transition"
          >
            AI Consulting
          </Link>
          <Link
            href="/booking"
            className="rounded-full bg-amber-200 px-4 py-2 text-xs font-medium text-neutral-950 hover:opacity-90 transition"
          >
            Book
          </Link>
        </nav>
      </div>
    </header>
  );
}
