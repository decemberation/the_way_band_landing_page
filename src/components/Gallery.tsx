const photos = [
  "/gphoto_1.jpg",
  "/gphoto_2.jpg",
  "/gphoto_3.jpg",
  "/gphoto_4.jpg",
  "/gphoto_5.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container">
        <h2
          className="text-[clamp(2rem,4vw,3.2rem)] font-serif font-normal text-[#1e1e3a] mb-8"
          style={{ fontVariant: "small-caps" }}
        >
          Gallery
        </h2>

        {/* Desktop: 2fr 1fr 1fr grid */}
        <div className="hidden md:grid grid-cols-[2fr_1fr_1fr] gap-4">
          <div className="min-h-[496px] rounded-2xl overflow-hidden">
            <img src={photos[0]} alt="Gallery 1" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1 min-h-[240px] rounded-2xl overflow-hidden">
              <img src={photos[1]} alt="Gallery 2" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-h-[240px] rounded-2xl overflow-hidden">
              <img src={photos[2]} alt="Gallery 3" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1 min-h-[240px] rounded-2xl overflow-hidden">
              <img src={photos[3]} alt="Gallery 4" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-h-[240px] rounded-2xl overflow-hidden">
              <img src={photos[4]} alt="Gallery 5" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="md:hidden grid gap-4">
          {photos.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden min-h-[260px]">
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
