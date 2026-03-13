import Head from "next/head";
import PageHeroBanner from "@/components/PageHeroBanner";
import {
  FiTarget,
  FiAward,
  FiUsers,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "50+", label: "Global Partners" },
  { value: "60K+", label: "Services Completed" },
  { value: "5K+", label: "Worldwide Clients" },
];

const visionPillars = [
  {
    icon: FiTarget,
    title: "Innovative Solutions",
    text: "Pioneering cutting-edge technologies tailored to marine and industrial needs.",
  },
  {
    icon: FiAward,
    title: "High Quality Product Supply",
    text: "Sourcing and delivering premium products from world-class manufacturers.",
  },
  {
    icon: FiUsers,
    title: "Efficient Workforce",
    text: "A team of skilled engineers and maritime professionals driving excellence.",
  },
  {
    icon: FiShield,
    title: "Dependable Services",
    text: "Reliable, round-the-clock service and support across the globe.",
  },
];

const timeline = [
  { year: "2005", text: "Company established under the leadership of Vinay Uchil in Dubai." },
  { year: "2006", text: "Completed first thruster control retrofit system for a marine vessel." },
  { year: "2007", text: "Successfully delivered first DP-2 upgrade project." },
  { year: "2008", text: "Initiated R&D for CMAC 3000 — an integrated vessel management system." },
  { year: "2009", text: "Partnered with DEIF A/S as exclusive Middle East distributor." },
  { year: "2010", text: "Completed first international DP-3 upgrade project." },
  { year: "2011", text: "Opened manufacturing facility in Sharjah Free Zone." },
  { year: "2012", text: "First supply of the in-house developed CMAC 3000 system." },
  { year: "2014", text: "Appointed as authorized Sperry Marine distributor." },
  { year: "2015", text: "Launched FLAME boiler control system; secured port traffic systems contract." },
  { year: "2017", text: "Expanded to Dubai Maritime City and opened Abu Dhabi facility." },
  { year: "2018", text: "Ventured into Maritime Domain Awareness Solutions." },
  { year: "2019", text: "Delivered first full-mission simulator to Al Balqa University, Jordan." },
  { year: "2020", text: "Partnered with One Ocean and MSM for fleet compliance solutions." },
  { year: "2021", text: "Commissioned VTMS system covering 4 major UAE ports." },
  { year: "2023", text: "Completed multiple IBS upgrades and VTMIS projects for offshore vessels." },
  { year: "2025", text: "Secured Fiber Optic Gyro retrofit orders and 11KV substation upgrades." },
];

const certifications = [
  "ISO 9001 — Quality Management System",
  "ISO 14001 — Environmental Management System",
  "ISO 45001 — Occupational Health & Safety",
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | KDU</title>
        <meta
          name="description"
          content="Established in 2005, KDU Group delivers innovative marine and industrial solutions globally through 50+ partnerships and an R&D facility at Dubai Maritime City."
        />
      </Head>

      <PageHeroBanner
        title="About Us"
        backgroundImage="https://kduworld.com/wp-content/uploads/2022/08/Main-Image-on-Home-Page2.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Company", href: "#" },
          { label: "About Us" },
        ]}
      />

      {/* About KDU Group */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://kduworld.com/wp-content/uploads/2022/08/Main-Image-on-Home-Page2.jpg"
                  alt="KDU Headquarters at Dubai Maritime City"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-lg -z-10 hidden lg:block" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg -z-10 hidden lg:block" />

              <div className="absolute -bottom-5 -right-3 md:bottom-6 md:right-6 bg-primary text-white rounded-2xl px-5 py-4 shadow-xl shadow-primary/30 z-10">
                <div className="text-4xl md:text-5xl font-extrabold text-accent leading-none">
                  20
                </div>
                <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider mt-1 leading-tight">
                  Years of
                  <br />
                  Service Excellence
                </div>
              </div>
            </div>

            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                About KDU Group
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                Bringing latest technology, efficient workforce, and customized
                solutions for your vessels &amp; industrial requirements.
              </h2>
              <p className="text-text-gray leading-relaxed mb-6">
                Established in 2005, KDU Group has been successfully delivering
                innovative solutions and products around the world through its
                collaborations with global change makers, proving its
                reliability &amp; expertise in both marine and industrial
                services.
              </p>
              <p className="text-text-gray leading-relaxed mb-8">
                Operating through 50+ partnerships and maintaining a dedicated
                R&amp;D facility at Dubai Maritime City, KDU is driven by a
                commitment to constant innovation — providing reliable,
                innovative, and economical services to clients worldwide.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="border-2 border-primary/15 rounded-xl p-4 text-center hover:border-accent/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="text-3xl md:text-4xl font-extrabold text-accent leading-none">
                      {stat.value}
                    </div>
                    <div className="w-6 h-0.5 bg-primary/20 mx-auto my-2" />
                    <p className="text-text-gray text-[11px] uppercase tracking-wider font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Our Vision
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Creating Customer Experiences That Can Never Be Forgotten
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            <p className="text-text-gray max-w-2xl mx-auto leading-relaxed">
              Through reliable, innovative solutions, we strive to be the most
              trusted partner for marine and industrial technology needs across
              the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionPillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/15 transition-colors">
                  <pillar.icon
                    size={28}
                    className="text-primary group-hover:text-accent transition-colors"
                  />
                </div>
                <h3 className="text-primary font-bold text-lg mb-3">
                  {pillar.title}
                </h3>
                <p className="text-text-gray text-sm leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History Timeline */}
      <section className="py-20 bg-primary relative overflow-hidden">
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
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              How It All Began
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our History
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 md:-translate-x-0.5" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10 shadow-[0_0_0_4px_rgba(232,172,47,0.2)]" />

                  {/* Content card */}
                  <div
                    className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded mb-2">
                      {item.year}
                    </span>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Quality Assurance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Certifications
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            <p className="text-text-gray max-w-2xl mx-auto leading-relaxed">
              KDU Group is ABS Certified and maintains internationally
              recognized standards for quality, environmental, and occupational
              health &amp; safety management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-section-bg rounded-xl p-8 text-center border border-gray-100 hover:border-accent/30 transition-colors"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheckCircle size={26} className="text-accent" />
                </div>
                <p className="text-primary font-bold text-sm leading-snug">
                  {cert}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-section-bg rounded-xl p-8 md:p-10 max-w-4xl mx-auto">
            <h3 className="text-primary font-bold text-xl mb-4 text-center">
              QHSE Policy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                  Quality
                </p>
                <p className="text-text-gray text-sm leading-relaxed">
                  Committed to delivering high quality customer service and
                  compliance with international standards.
                </p>
              </div>
              <div className="text-center">
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                  Health &amp; Safety
                </p>
                <p className="text-text-gray text-sm leading-relaxed">
                  Maintaining a safe, healthy workplace for all employees,
                  contractors, and visitors.
                </p>
              </div>
              <div className="text-center">
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                  Environment
                </p>
                <p className="text-text-gray text-sm leading-relaxed">
                  Focused on environmental protection and sustainable practices
                  across all operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
