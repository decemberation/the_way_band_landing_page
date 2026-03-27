const metrics = [
  { value: "89+", label: "Followers growing with every show" },
  { value: "16", label: "Posts and event moments shared" },
  { value: "Live", label: "Built for community and connection" },
];

export default function Hero() {
  return (
    <header className="py-14 md:py-16">
      <div className="container grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
        {/* ── Copy ── */}
        <div>
          <span className="pill">🎤 Young Viet voices in San Jose</span>

          <h1
            className="mt-3.5 mb-4 font-extrabold leading-[0.96] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2.7rem, 5.8vw, 5rem)" }}
          >
            Music that brings people together.
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed max-w-[62ch] mb-7">
            The Way Band creates warm, memorable live moments for concerts, private events,
            celebrations, and community nights. Modern, heartfelt, and full of energy.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3.5 mb-7">
            <a href="#booking" className="btn-primary">
              Book The Band
            </a>
            <a href="#video" className="btn-secondary">
              Watch Live
            </a>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 max-w-xl sm:grid-cols-3">
            {metrics.map(({ value, label }) => (
              <div
                key={value}
                className="border border-white/[0.12] rounded-[18px] px-4 py-4 backdrop-blur-sm"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <strong className="block text-xl mb-1">{value}</strong>
                <span className="text-slate-300 text-[0.93rem] leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Band card ── */}
        <div
          className="relative min-h-[560px] overflow-hidden border border-white/[0.12] rounded-[30px]"
          style={{
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            background:
              "linear-gradient(180deg, rgba(0,0,0,.08), rgba(0,0,0,.45)), radial-gradient(circle at 75% 20%, rgba(255,209,102,.24), transparent 25%), linear-gradient(135deg, rgba(30,58,138,.85), rgba(15,23,42,.92) 35%, rgba(17,24,39,.95) 100%)",
          }}
        >
          {/* Inner glow ring */}
          <div
            className="absolute inset-[18px] rounded-3xl pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,.09), transparent 45%)",
            }}
          />

          {/* Overlay with caption + mock members */}
          <div
            className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-4"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(5,10,22,.82) 35%, rgba(5,10,22,.95))",
            }}
          >
            {/* Caption */}
            <div>
              <h3 className="text-2xl font-bold mb-1.5">The Way Band</h3>
              <p className="text-[#dbe4f2] leading-relaxed m-0">
                Singing, jamming, and bonding over a shared love for music — with a polished,
                event-ready presence.
              </p>
            </div>

            {/* Mock band member placeholders */}
            <div className="grid grid-cols-3 gap-3 mt-auto">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-[18px] border border-white/[0.12]"
                  style={{
                    aspectRatio: "3/4",
                    background:
                      "radial-gradient(circle at 50% 20%, rgba(255,255,255,.26), transparent 18%), linear-gradient(180deg, rgba(255,255,255,.12), transparent 25%), linear-gradient(180deg, rgba(255,209,102,.18), rgba(30,58,138,.18)), linear-gradient(180deg, #3f3f46, #1f2937)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
