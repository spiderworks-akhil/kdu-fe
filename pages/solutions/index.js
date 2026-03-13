import Head from "next/head";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHeroBanner from "@/components/PageHeroBanner";
import { solutions, iconMap } from "@/lib/solutionData";

export default function SolutionsIndex() {
  return (
    <>
      <Head>
        <title>Solutions | KDU</title>
        <meta
          name="description"
          content="KDU delivers comprehensive marine solutions including services & upgrades, new building, maritime training, port management, surveillance, and green ship solutions."
        />
      </Head>

      <PageHeroBanner
        title="Our Solutions"
        backgroundImage="https://kduworld.com/wp-content/uploads/2022/05/Solutions-1.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions" },
        ]}
      />

      {/* Solutions Listing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Solutions
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            <p className="text-text-gray max-w-2xl mx-auto leading-relaxed">
              From ship maintenance and new builds to maritime training and port
              management, KDU delivers end-to-end solutions tailored to your
              operational needs.
            </p>
          </div>

          <div className="space-y-8">
            {solutions.map((solution, i) => {
              const Icon = iconMap[solution.icon];
              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative h-64 lg:h-[360px] overflow-hidden ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                    style={{
                      backgroundImage: `url('${solution.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent lg:hidden" />
                  </div>

                  {/* Content */}
                  <div
                    className={`bg-section-bg p-8 md:p-12 flex flex-col justify-center ${
                      i % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {Icon && (
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                          <Icon size={20} />
                        </div>
                      )}
                      <p className="text-accent font-semibold text-sm uppercase tracking-widest">
                        {solution.title}
                      </p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                      {solution.tagline}
                    </h3>
                    <p className="text-text-gray leading-relaxed mb-6">
                      {solution.shortDesc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider group-hover:text-accent transition-colors">
                      Know More
                      <FiArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary relative overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a tailored solution for your project?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Our team of experts is ready to help you find the right solution for
            your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-8 py-3.5 rounded-lg uppercase tracking-wider transition-colors"
          >
            Contact Us
            <FiArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
