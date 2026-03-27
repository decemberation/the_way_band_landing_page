export default function VideoSection() {
  return (
    <section id="video" className="py-16 bg-[#f5f0e8]">
      <div className="container">
        <h2
          className="text-[clamp(2rem,4vw,3.2rem)] font-serif font-normal text-[#1e1e3a] mb-8"
          style={{ fontVariant: "small-caps" }}
        >
          Live Performance
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 items-stretch">
          {/* YouTube embed */}
          <div className="rounded-2xl overflow-hidden bg-black aspect-video">
            <iframe
              src="https://www.youtube.com/embed/AEdVaGGSj0g"
              title="Sao Anh Chưa Về - Lạc Du ft Quỳnh Nguyễn"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Info card */}
          <div className="bg-white rounded-2xl p-7 flex flex-col shadow-sm">
            <h3 className="text-[1.6rem] font-serif font-normal text-[#1e1e3a] mb-3">
              Sao Anh Chưa Về - Lạc Du ft Quỳnh Nguyễn (Live at The Way To Christmas 2025)
            </h3>
            <a
              href="#booking"
              className="mt-auto w-fit px-6 py-3 rounded-full font-bold text-sm tracking-wide uppercase bg-[#1e1e3a] text-white hover:bg-[#2d2d5a] transition-colors"
            >
              Request a Performance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
