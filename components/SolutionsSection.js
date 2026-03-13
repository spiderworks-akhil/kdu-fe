import { useState } from "react";
import { FiSettings, FiAnchor, FiBookOpen, FiTool, FiArrowRight } from "react-icons/fi";

const solutions = [
  {
    icon: <FiSettings />,
    title: "Services & Upgrades",
    description:
      "Ship maintenance, technological modifications & upgrades with 24/7 crew availability across MENA region.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    stats: "24/7",
    statsLabel: "Crew Availability",
  },
  {
    icon: <FiAnchor />,
    title: "Port Management",
    description:
      "Maritime data awareness, vessel traffic monitoring and situational control for ports & harbours.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=600&q=80",
    stats: "100+",
    statsLabel: "Ports Managed",
  },
  {
    icon: <FiBookOpen />,
    title: "Solutions Training",
    description:
      "Simulation-based nautical student training providing risk-free, cost-effective maritime education.",
    image:
      "https://images.unsplash.com/photo-1524069290683-0457abeb8064?w=600&q=80",
    stats: "500+",
    statsLabel: "Trained Experts",
  },
  {
    icon: <FiTool />,
    title: "New Building",
    description:
      "Complete vessel solutions from design to delivery with global agency associations and partnerships.",
    image:
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&q=80",
    stats: "50+",
    statsLabel: "Vessels Delivered",
  },
];

export default function SolutionsSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="solutions" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Solutions
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-text-gray max-w-2xl mx-auto leading-relaxed">
            KDU Group provides all your essential requirements under one roof.
            Our wide range of services aim to meet and exceed your expectations.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left - Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {solutions.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`group relative text-left p-5 rounded-xl transition-all duration-400 border ${
                  active === i
                    ? "bg-primary border-primary shadow-lg shadow-primary/20"
                    : "bg-white border-gray-100 hover:border-primary/30 hover:shadow-md"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-xl transition-colors duration-300 ${
                      active === i
                        ? "bg-white/20 text-white"
                        : "bg-primary/5 text-primary"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className={`font-bold text-base uppercase tracking-wide transition-colors duration-300 ${
                          active === i ? "text-white" : "text-primary"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <FiArrowRight
                        className={`shrink-0 transition-all duration-300 ${
                          active === i
                            ? "text-accent translate-x-0 opacity-100"
                            : "text-gray-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                        size={16}
                      />
                    </div>
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-300 ${
                        active === i ? "text-white/70" : "text-text-gray"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Active indicator bar */}
                {active === i && (
                  <div className="absolute left-0 top-4 bottom-4 w-1 bg-accent rounded-r" />
                )}
              </button>
            ))}
          </div>

          {/* Right - Visual Card */}
          <div className="lg:col-span-7 relative min-h-[400px] rounded-2xl overflow-hidden group">
            {/* Background Image */}
            <img
              key={active}
              src={solutions[active].image}
              alt={solutions[active].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent" />

            {/* Content at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              {/* Stat badge */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-5">
                <span className="text-accent text-2xl font-extrabold">
                  {solutions[active].stats}
                </span>
                <span className="text-white/80 text-xs uppercase tracking-wider">
                  {solutions[active].statsLabel}
                </span>
              </div>

              <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
                {solutions[active].title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-md mb-5">
                {solutions[active].description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-6 py-3 rounded-lg text-sm uppercase tracking-wider transition-colors"
              >
                Learn More
                <FiArrowRight size={16} />
              </a>
            </div>

            {/* Step indicators */}
            <div className="absolute top-6 right-6 flex items-center gap-1.5">
              {solutions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-accent" : "w-3 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
