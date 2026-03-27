const events = [
  {
    badge: "Featured Collaboration",
    title: "NASA × The Way",
    date: "Mar 16",
    location: "San Jose, CA",
    desc: "A collaborative live music night with a cinematic black-and-gold event style.",
  },
  {
    badge: "Private Event",
    title: "Golden Hour Session",
    date: "Apr 12",
    location: "Bay Area",
    desc: "Warm acoustic-forward performance concept for celebrations and intimate gatherings.",
  },
  {
    badge: "Community Night",
    title: "Voices of San Jose",
    date: "May 03",
    location: "Downtown SJ",
    desc: "Prototype slot for a future showcase, fundraiser, or local cultural event.",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-16 bg-white">
      <div className="container">
        <h2
          className="text-[clamp(2rem,4vw,3.2rem)] font-serif font-normal text-[#1e1e3a] mb-8"
          style={{ fontVariant: "small-caps" }}
        >
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map(({ badge, title, date, location, desc }) => (
            <article key={title} className="bg-[#f5f0e8] rounded-2xl overflow-hidden">
              {/* Poster */}
              <div
                className="relative"
                style={{
                  aspectRatio: "16/10",
                  background:
                    "radial-gradient(circle at 70% 20%, rgba(255,209,102,.45), transparent 18%), radial-gradient(circle at 25% 80%, rgba(255,159,28,.35), transparent 28%), linear-gradient(135deg, #1e1e3a, #2d2d5a 100%)",
                }}
              >
                <div className="absolute inset-x-4 bottom-4">
                  <small className="inline-block px-2.5 py-1 mb-2 rounded-full text-[0.78rem] bg-white/20 text-white border border-white/20">
                    {badge}
                  </small>
                  <h3 className="m-0 text-[1.2rem] font-bold text-white leading-tight">{title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="px-5 py-4">
                <div className="flex justify-between text-[0.88rem] text-[#6b6b6b] mb-2.5 font-medium">
                  <span>{date}</span>
                  <span>{location}</span>
                </div>
                <p className="m-0 text-[#3a3a3a] leading-relaxed text-[0.95rem]">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
