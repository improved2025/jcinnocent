// app/components/Footer.tsx
import Link from "next/link";

function IconWrap({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/10"
    >
      <span className="opacity-80 transition group-hover:opacity-100">{children}</span>
    </a>
  );
}

// Minimal inline SVG icons (no extra installs)
const Icons = {
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.6V5c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.7V11H7v3h2.6v8h3.9z" />
    </svg>
  ),
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zM17.8 6.7a.9.9 0 1 1-.9-.9.9.9 0 0 1 .9.9z" />
    </svg>
  ),
  tiktok: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.7 7.2c-1-.7-1.6-1.8-1.7-3h-2.7v10.2c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2 1-2.2 2.2-2.2c.4 0 .7.1 1 .2V9.7c-.3-.1-.7-.1-1-.1-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5V10c1 .7 2.2 1.1 3.4 1.1V8.4c-.6 0-1.3-.2-1.8-.6z" />
    </svg>
  ),
  youtube: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.8 4.6 12 4.6 12 4.6s-5.8 0-7.5.5A3 3 0 0 0 2.4 7.2 31.4 31.4 0 0 0 2 12a31.4 31.4 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 22 12a31.4 31.4 0 0 0-.4-4.8zM10.2 15.3V8.7L16 12l-5.8 3.3z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-neutral-950 text-white">
      <div className="mx-auto max-w-[1240px] px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm tracking-wide text-white/90">Dr Jeff C. Innocent</div>
            <div className="mt-2 text-xs text-white/55">Authority • Warmth • Excellence</div>
            <div className="mt-4 text-xs text-white/45">© {new Date().getFullYear()} jcinnocent.com</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="mr-2 hidden text-[11px] tracking-[0.28em] text-white/45 md:block">
              CONNECT
            </div>

            <IconWrap href="https://www.facebook.com/jeffinnocent" label="Facebook">
              {Icons.facebook}
            </IconWrap>
            <IconWrap href="https://www.instagram.com/drjcinnocent" label="Instagram">
              {Icons.instagram}
            </IconWrap>
            <IconWrap href="https://www.tiktok.com/@drjcinnocent" label="TikTok">
              {Icons.tiktok}
            </IconWrap>
            <IconWrap href="https://www.youtube.com/@jefinno" label="YouTube">
              {Icons.youtube}
            </IconWrap>
          </div>
        </div>
      </div>
    </footer>
  );
}
