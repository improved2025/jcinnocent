const platforms = [
  { name: "Manna", url: "https://getmanna.app", desc: "Daily spiritual nourishment" },
  { name: "Authored", url: "https://myauthored.com", desc: "Guided writing for authors" },
  { name: "Improved Solutions", url: "https://improvedsolution.com", desc: "Branding and publishing" },
  { name: "GGI Church", url: "https://ggichurch.org", desc: "Faith community" },
];

export default function PlatformGrid() {
  return (
    <section className="py-24 bg-neutral-100">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-6">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-gray-600">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
