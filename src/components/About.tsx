"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  /* Parallax on the photo */
  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      const offset = rect.top * 0.25;
      imgRef.current.style.backgroundPositionY = `calc(50% + ${offset}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Fade-in when text scrolls into view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      {/* Full-width parallax photo */}
      <div
        ref={imgRef}
        className="w-full h-[420px] bg-cover bg-center"
        style={{ backgroundImage: "url('/group_photo.jpg')" }}
        aria-hidden="true"
      />

      {/* Light content area */}
      <div className="bg-[#f5f0e8] py-16 px-6">
        <div
          ref={textRef}
          className="max-w-2xl mx-auto text-center transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
          }}
        >
          <h2
            className="text-[clamp(2.4rem,5vw,3.8rem)] font-serif font-normal text-[#1e1e3a] mb-6 leading-tight"
            style={{ fontVariant: "small-caps" }}
          >
            About Us
          </h2>
          <p className="text-[1.05rem] leading-relaxed text-[#2c2c2c]">
            <strong>The Way Band</strong> is a group of young Vietnamese musicians based in
            San Jose, California. We bring energy, emotion, and genuine connection to every
            stage — from intimate gatherings to large music nights. Our sound blends
            Vietnamese roots with contemporary styles, creating performances that feel both
            familiar and fresh.
          </p>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-[#2c2c2c]">
            Whether it&apos;s a private event, a community showcase, or a late-night music
            session, we show up ready to make the moment unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
}
