const partners = [
  "https://kduworld.com/wp-content/uploads/2025/02/Sperry-Marine.jpg",
  "https://kduworld.com/wp-content/uploads/2025/02/DEIF.jpg",
  "https://kduworld.com/wp-content/uploads/2025/02/Danelec.jpg",
  "https://kduworld.com/wp-content/uploads/2025/02/Hanla-1.jpg",
  "https://kduworld.com/wp-content/uploads/2025/12/2-1.png",
  "https://kduworld.com/wp-content/uploads/2025/02/Entel.jpg",
  "https://kduworld.com/wp-content/uploads/2025/02/EMRI.jpg",
  "https://kduworld.com/wp-content/uploads/2025/02/Seapower.jpg",
  "https://kduworld.com/wp-content/uploads/2025/02/LightPartner.jpg",
  "https://kduworld.com/wp-content/uploads/2025/02/LightPartner-1.jpg",
  "https://kduworld.com/wp-content/uploads/2025/02/Skipper.jpg",
  "https://kduworld.com/wp-content/uploads/2025/02/MSM.jpg",
  "https://kduworld.com/wp-content/uploads/2025/02/Steerprop.jpg",
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase leading-relaxed max-w-3xl mx-auto">
            We achieve project perfection through our strategic associations,
            join us.
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-5 mb-3" />
        </div>
      </div>

      {/* Marquee slider */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10" />

        <div className="flex animate-partners-marquee">
          {[...partners, ...partners].map((src, i) => (
            <div
              key={i}
              className="shrink-0 mx-3 bg-white rounded-lg p-3 flex items-center justify-center h-20 w-44 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <img
                src={src}
                alt={`Partner ${(i % partners.length) + 1}`}
                className="max-h-14 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href="mailto:marketing@kduworld.com"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-8 py-3.5 rounded-lg text-sm uppercase tracking-wider transition-colors"
        >
          Join Us
        </a>
      </div>

      <style jsx global>{`
        @keyframes partners-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-partners-marquee {
          animation: partners-marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
