import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Overall excellent performance – service, support & timely delivery. KDU has been a reliable partner for our fleet maintenance needs.",
    author: "JASMUND SHIPPING",
  },
  {
    quote:
      "Timely intimation & responses to enquiries and excellent technical proficiency. Professional team with deep domain expertise.",
    author: "Allianz Middle East",
  },
  {
    quote:
      "Very hardworking Engineers – excellent quality of work and timely attendance. Highly recommended for marine electronics services.",
    author: "Maersk",
  },
  {
    quote:
      "Excellent response & on-time spare part delivery onboard. Consistent and dependable service across all our vessels.",
    author: "Bahri (ADNOC)",
  },
  {
    quote:
      "Excellent customer support & pleasure to work with your company. Their dedication to quality is unmatched in the region.",
    author: "Ocean Pearl Ship Management",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white rounded-xl p-10 md:p-14 shadow-lg text-center relative">
            <FaQuoteLeft className="text-accent/20 text-5xl mx-auto mb-6" />
            <p className="text-text-gray text-lg leading-relaxed mb-8 italic">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-4" />
            <h4 className="text-primary font-bold text-sm uppercase tracking-wider">
              {testimonials[current].author}
            </h4>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors shadow-lg"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors shadow-lg"
          >
            <FiChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-accent w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
