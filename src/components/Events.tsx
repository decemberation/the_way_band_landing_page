import Image from "next/image";
import { getEvents } from "@/lib/airtable";

const gradientBg = "radial-gradient(circle at 70% 20%, rgba(255,209,102,.45), transparent 18%), radial-gradient(circle at 25% 80%, rgba(255,159,28,.35), transparent 28%), linear-gradient(135deg, #1e1e3a, #2d2d5a 100%)";

export default async function Events() {
  const events = await getEvents();

  return (
    <section id="events" className="py-16 bg-white">
      <div className="container">
        <h2
          className="text-[clamp(2rem,4vw,3.2rem)] font-serif font-normal text-[#1e1e3a] mb-8"
          style={{ fontVariant: "small-caps" }}
        >
          Upcoming Events
        </h2>

        {events.length === 0 ? (
          <p className="text-[#6b6b6b]">No upcoming events at the moment. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((event) => (
              <article key={event.id} className="bg-[#f5f0e8] rounded-2xl overflow-hidden">
                {/* Poster */}
                <div
                  className="relative"
                  style={{
                    aspectRatio: "16/10",
                    background: gradientBg,
                    ...(event.thumbnail ? {} : {}),
                  }}
                >
                  {event.thumbnail && (
                    <Image
                      src={event.thumbnail}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  {/* Overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 z-10">
                    {event.badge && (
                      <small className="inline-block px-2.5 py-1 mb-2 rounded-full text-[0.78rem] bg-white/20 text-white border border-white/20">
                        {event.badge}
                      </small>
                    )}
                    <h3 className="m-0 text-[1.2rem] font-bold text-white leading-tight">{event.title}</h3>
                  </div>
                </div>

                {/* Body */}
                <div className="px-5 py-4">
                  <div className="flex justify-between text-[0.88rem] text-[#6b6b6b] mb-2.5 font-medium">
                    <span>{event.date ? new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : ""}</span>
                    <span>{event.location}</span>
                  </div>
                  <p className="m-0 text-[#3a3a3a] leading-relaxed text-[0.95rem]">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
