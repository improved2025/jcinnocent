export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Core gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-[#060914] to-neutral-900" />

      {/* Luxury texture image */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "url('/bg/luxure-1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Architectural shadow */}
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage: "url('/bg/luxure-2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Ambient gold glow */}
      <div className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full bg-amber-300/6 blur-[140px]" />

      {/* Cool blue counter glow */}
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-400/6 blur-[140px]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0.7))]" />

    </div>
  );
}
