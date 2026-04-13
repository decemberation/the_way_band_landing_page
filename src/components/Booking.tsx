"use client";

import Image from "next/image";
import { useState } from "react";

const inputClass = "border border-[#d4cfc7] rounded-xl px-4 py-3 text-[#1a1a1a] placeholder:text-[#aaa] outline-none focus:border-[#1e1e3a] transition-colors bg-[#faf8f5]";

export default function Booking() {
  const [form, setForm] = useState({ name: "", email: "", date: "", eventType: "Wedding", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
    } else {
      const data = await res.json();
      setErrorMsg(data.error ?? "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

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
          <div className="relative rounded-2xl overflow-hidden h-[320px] lg:h-auto lg:max-h-[420px]">
            <Image src="/please_book.jpg" alt="The Way Band performing" fill className="object-cover" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 grid grid-cols-2 gap-3">

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#1e1e3a] tracking-wide uppercase">Name</label>
              <input name="name" type="text" placeholder="Your name" required value={form.name} onChange={handleChange} className={inputClass} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#1e1e3a] tracking-wide uppercase">Email</label>
              <input name="email" type="email" placeholder="you@example.com" required value={form.email} onChange={handleChange} className={inputClass} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#1e1e3a] tracking-wide uppercase">Event Date</label>
              <input name="date" type="date" value={form.date} onChange={handleChange} className={inputClass} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#1e1e3a] tracking-wide uppercase">Event Type</label>
              <select name="eventType" value={form.eventType} onChange={handleChange} className={inputClass}>
                <option>Wedding</option>
                <option>Private Party</option>
                <option>Community Event</option>
                <option>Live Show</option>
                <option>Collaboration</option>
              </select>
            </div>

            <div className="col-span-2 flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#1e1e3a] tracking-wide uppercase">Message</label>
              <textarea name="message" placeholder="Tell us about your event, venue, and vibe." rows={5} value={form.message} onChange={handleChange} className={`${inputClass} resize-y`} />
            </div>

            <div className="col-span-2 flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-7 py-3.5 rounded-full font-bold text-sm tracking-wide uppercase bg-[#1e1e3a] text-white hover:bg-[#2d2d5a] transition-colors cursor-pointer disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Inquiry"}
              </button>
              {status === "success" && <p className="text-green-600 text-sm font-medium">Sent! We'll be in touch soon.</p>}
              {status === "error" && <p className="text-red-500 text-sm font-medium">{errorMsg}</p>}
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
