"use client";

export default function Booking() {
  return (
    <section id="booking" className="py-16 bg-[#f5f0e8]">
      <div className="container">

        {/* Section heading */}
        <div className="text-center mb-10">
          <h2
            className="text-[clamp(2rem,4vw,3.2rem)] font-serif font-normal text-[#1e1e3a] leading-tight"
            style={{ fontVariant: "small-caps" }}
          >
            Book Us Pleaseee 🥹🥹🥹
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* Photo */}
          <div className="rounded-2xl overflow-hidden h-[320px] lg:h-auto lg:max-h-[420px]">
            <img
              src="/please_book.jpg"
              alt="The Way Band performing"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form */}
          <form className="bg-white rounded-2xl shadow-sm p-6 grid grid-cols-2 gap-3">

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#1e1e3a] tracking-wide uppercase">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="border border-[#d4cfc7] rounded-xl px-4 py-3 text-[#1a1a1a] placeholder:text-[#aaa] outline-none focus:border-[#1e1e3a] transition-colors bg-[#faf8f5]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#1e1e3a] tracking-wide uppercase">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="border border-[#d4cfc7] rounded-xl px-4 py-3 text-[#1a1a1a] placeholder:text-[#aaa] outline-none focus:border-[#1e1e3a] transition-colors bg-[#faf8f5]"
              />
            </div>

            {/* Event Date */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#1e1e3a] tracking-wide uppercase">Event Date</label>
              <input
                type="date"
                className="border border-[#d4cfc7] rounded-xl px-4 py-3 text-[#1a1a1a] outline-none focus:border-[#1e1e3a] transition-colors bg-[#faf8f5]"
              />
            </div>

            {/* Event Type */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#1e1e3a] tracking-wide uppercase">Event Type</label>
              <select className="border border-[#d4cfc7] rounded-xl px-4 py-3 text-[#1a1a1a] outline-none focus:border-[#1e1e3a] transition-colors bg-[#faf8f5]">
                <option>Wedding</option>
                <option>Private Party</option>
                <option>Community Event</option>
                <option>Live Show</option>
                <option>Collaboration</option>
              </select>
            </div>

            {/* Message */}
            <div className="col-span-2 flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#1e1e3a] tracking-wide uppercase">Message</label>
              <textarea
                placeholder="Tell us about your event, venue, and vibe."
                rows={5}
                className="border border-[#d4cfc7] rounded-xl px-4 py-3 text-[#1a1a1a] placeholder:text-[#aaa] outline-none focus:border-[#1e1e3a] transition-colors bg-[#faf8f5] resize-y"
              />
            </div>

            {/* Submit */}
            <div className="col-span-2">
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full font-bold text-sm tracking-wide uppercase bg-[#1e1e3a] text-white hover:bg-[#2d2d5a] transition-colors cursor-pointer"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
