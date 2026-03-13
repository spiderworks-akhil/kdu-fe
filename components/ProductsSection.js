import { useState } from "react";
import {
  FiNavigation,
  FiRadio,
  FiZap,
  FiCpu,
  FiShield,
  FiSun,
  FiArrowRight,
} from "react-icons/fi";

const products = [
  {
    icon: <FiNavigation size={24} />,
    title: "Navigation",
    desc: "Gyrocompasses, radar systems, ECDIS, autopilots, and voyage data recorders",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    count: "25+",
  },
  {
    icon: <FiRadio size={24} />,
    title: "Communication",
    desc: "GMDSS, VSAT, VHF, MF/HF and satellite communication systems",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    count: "18+",
  },
  {
    icon: <FiZap size={24} />,
    title: "Electrical",
    desc: "Switchboards, power management, protection relays and distribution systems",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    count: "30+",
  },
  {
    icon: <FiCpu size={24} />,
    title: "Automation",
    desc: "Alarm monitoring, power management, engine room automation and control",
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80",
    count: "20+",
  },
  {
    icon: <FiShield size={24} />,
    title: "Fleet Compliance",
    desc: "Regulatory compliance solutions for fleet management and safety",
    image:
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&q=80",
    count: "15+",
  },
  {
    icon: <FiSun size={24} />,
    title: "Aids to Navigation",
    desc: "Lighthouse, buoys, lanterns and marine signaling equipment",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=600&q=80",
    count: "12+",
  },
];

export default function ProductsSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            Explore Our Range
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Products
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-text-gray max-w-2xl mx-auto leading-relaxed">
            KDU brings the latest technology through global partnerships to suit
            all your requirements.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-[280px]"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background Image */}
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Default State — gradient overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  hovered === i ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/60 to-primary/20" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center text-white">
                      {product.icon}
                    </div>
                    <div className="bg-accent/90 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {product.count} Products
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-1">
                    {product.title}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-2">
                    {product.desc}
                  </p>
                </div>
              </div>

              {/* Hover State — expanded info */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  hovered === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 bg-primary-dark/90" />
                <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-5">
                    <span className="text-3xl">{product.icon}</span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">
                    {product.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {product.desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-5 py-2.5 rounded-lg text-sm uppercase tracking-wider transition-colors"
                  >
                    View Products
                    <FiArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
