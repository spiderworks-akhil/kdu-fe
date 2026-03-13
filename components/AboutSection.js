const stats = [
  { value: "12+", label: "Countries Worldwide" },
  { value: "38+", label: "Global Partners" },
  { value: "60K+", label: "Services Completed" },
  { value: "5K+", label: "Worldwide Clients" },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Dotted world map pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://kduworld.com/wp-content/uploads/2022/04/world-map-dotte.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://kduworld.com/wp-content/uploads/2022/08/Main-Image-on-Home-Page2.jpg"
                alt="About KDU"
                className="w-full h-[420px] object-cover"
              />
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-lg -z-10 hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/10 rounded-lg -z-10 hidden lg:block" />

            {/* 20 Years Badge */}
            <div className="absolute -bottom-5 -right-3 md:bottom-6 md:right-6 bg-primary text-white rounded-2xl px-5 py-4 shadow-xl shadow-primary/30 z-10">
              <div className="text-4xl md:text-5xl font-extrabold text-accent leading-none">
                20
              </div>
              <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider mt-1 leading-tight">
                Years of<br />Service Excellence
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              About Company
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Bringing latest technology, efficient workforce, reliability for
              your vessels & other industrial requirements.
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Established in 2005, KDU Group has been successfully delivering
              innovative solutions and products around the world through its
              collaborations with global change makers, proving its reliability
              &amp; expertise in both marine and industrial services.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="border-2 border-white/15 rounded-xl p-4 text-center hover:border-accent/50 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-accent leading-none">
                    {stat.value}
                  </div>
                  <div className="w-6 h-0.5 bg-white/30 mx-auto my-2" />
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
