import { useState, useEffect } from "react";
import MarketsSlider from "./MarketsSlider";

const slides = [
  {
    title: "SERVING EXPERTISE & EXCELLENCE GLOBALLY",
    subtitle:
      "Integrated solutions provider in Navigation, Communication, Electrical and Automation systems",
  },
  {
    title: "LEADING MARITIME & INDUSTRIAL SOLUTIONS PROVIDER",
    subtitle:
      "Trusted partner in the GCC region delivering innovative marine and industrial solutions",
  },
  {
    title: "RELIABILITY, INNOVATION & QUALITY",
    subtitle:
      "Proven track record of excellence with global partnerships and cutting-edge technology",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative h-[650px] md:h-[600px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary/80" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <h1
                key={current}
                className="text-3xl md:text-5xl lg:text-[52px] font-bold text-white leading-tight mb-6 animate-fadeIn"
              >
                {slides[current].title}
              </h1>
              <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#solutions"
                  className="bg-accent hover:bg-accent/80 text-white font-semibold px-8 py-3.5 text-sm uppercase tracking-wider transition-colors rounded"
                >
                  Learn More
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3.5 text-sm uppercase tracking-wider transition-colors rounded"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-32 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-accent w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Markets Slider - overlapping bottom of hero */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-10 -mt-16 md:-mt-20 pb-10">
        <MarketsSlider />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
