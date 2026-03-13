const logos = [
  "https://kduworld.com/wp-content/uploads/2022/06/1-1.png",
  "https://kduworld.com/wp-content/uploads/2022/08/2.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/3.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/4.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/5.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/6.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/7.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/8.png",
  "https://kduworld.com/wp-content/uploads/2022/06/9.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/10.png",
  "https://kduworld.com/wp-content/uploads/2022/06/11.png",
  "https://kduworld.com/wp-content/uploads/2022/06/12.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/13-1.png",
  "https://kduworld.com/wp-content/uploads/2022/06/14.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/15-1.png",
  "https://kduworld.com/wp-content/uploads/2022/06/16.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/17.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/18.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/19.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/20.png",
  "https://kduworld.com/wp-content/uploads/2022/06/21.png",
  "https://kduworld.com/wp-content/uploads/2022/06/22.png",
  "https://kduworld.com/wp-content/uploads/2022/06/23.png",
  "https://kduworld.com/wp-content/uploads/2022/06/24.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/25.png",
  "https://kduworld.com/wp-content/uploads/2022/06/26.png",
  "https://kduworld.com/wp-content/uploads/2022/06/27.png",
  "https://kduworld.com/wp-content/uploads/2022/06/28.png",
  "https://kduworld.com/wp-content/uploads/2022/06/29.png",
  "https://kduworld.com/wp-content/uploads/2022/06/30.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/31.png",
  "https://kduworld.com/wp-content/uploads/2022/06/32.jpg",
  "https://kduworld.com/wp-content/uploads/2022/06/33.png",
];

const row1 = logos.slice(0, 17);
const row2 = logos.slice(17);

function MarqueeRow({ images, direction = "left" }) {
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

      <div className={`flex ${animClass}`}>
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="shrink-0 mx-4 bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-20 w-40 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
          >
            <img
              src={src}
              alt={`Client ${(i % images.length) + 1}`}
              className="max-h-12 max-w-[120px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            Trusted Worldwide
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Clients
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-text-gray max-w-2xl mx-auto">
            We work with the world&apos;s leading marine and industrial
            companies, delivering excellence across the globe.
          </p>
        </div>
      </div>

      {/* Marquee rows - full width */}
      <div className="space-y-6">
        <MarqueeRow images={row1} direction="left" />
        <MarqueeRow images={row2} direction="right" />
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
