import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const markets = [
  {
    title: "Industrial",
    description:
      "Comprehensive system portfolio and engineering capability for all industrial requirements.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80",
    href: "/markets/industrial",
  },
  {
    title: "Maritime",
    description:
      "Integrated solutions provider in Navigation, Communication, Electrical and Automation systems for every types of vessels.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
    href: "/markets/maritime",
  },
  {
    title: "Naval",
    description:
      "Integrated Repair, Retrofit & Re-engineering services for naval vessels.",
    image:
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&q=80",
    href: "/markets/naval",
  },
  {
    title: "Ports & Harbours",
    description:
      "The Complete Maritime Domain Awareness & Aids to Navigation Expert.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=600&q=80",
    href: "/markets/ports",
  },
  {
    title: "Maritime Training",
    description:
      "Technology-enabled high-intensity simulation-based training solutions for maritime professionals.",
    image:
      "https://images.unsplash.com/photo-1524069290683-0457abeb8064?w=600&q=80",
    href: "/markets/training",
  },
];

export default function MarketsSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxStart = Math.max(0, markets.length - visibleCount);

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(maxStart, i + 1));

  const visibleMarkets = markets.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={prev}
        disabled={startIndex === 0}
        className="absolute -left-1 md:-left-5 top-[calc(50%+15px)] md:top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 bg-white/90 text-primary rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <FiChevronLeft size={20} />
      </button>

      {/* Cards */}
      <div
        ref={containerRef}
        className="grid gap-5"
        style={{
          gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
        }}
      >
        {visibleMarkets.map((market, i) => (
          <a
            key={market.title}
            href={market.href}
            className="group relative rounded-lg overflow-hidden h-[280px] block"
          >
            {/* Background Image */}
            <img
              src={market.image}
              alt={market.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/60 to-primary-dark/30 group-hover:from-primary-dark/95 group-hover:via-primary-dark/70 transition-all duration-300" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-lg uppercase mb-2 tracking-wide">
                {market.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">
                {market.description}
              </p>
              <span className="text-white text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2 group-hover:text-accent transition-colors">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        disabled={startIndex >= maxStart}
        className="absolute -right-1 md:-right-5 top-[calc(50%+15px)] md:top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 bg-white/90 text-primary rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );
}
