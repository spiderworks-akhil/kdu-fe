import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  FiCheckCircle,
  FiArrowRight,
  FiChevronDown,
} from "react-icons/fi";
import PageHeroBanner from "@/components/PageHeroBanner";
import { solutions, getSolutionBySlug, iconMap, getSubSolutionsByParent } from "@/lib/solutionData";

export async function getStaticPaths() {
  const paths = solutions.map((s) => ({ params: { slug: s.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const solution = getSolutionBySlug(params.slug);
  const otherSolutions = solutions.filter((s) => s.slug !== params.slug);
  const subSolutions = getSubSolutionsByParent(params.slug);
  const subSolutionTitles = subSolutions.reduce((acc, s) => {
    acc[s.title] = s.slug;
    return acc;
  }, {});
  return { props: { solution, otherSolutions, subSolutionTitles } };
}

export default function SolutionDetail({ solution, otherSolutions, subSolutionTitles }) {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>{solution.title} | Solutions | KDU</title>
        <meta name="description" content={solution.shortDesc} />
      </Head>

      <PageHeroBanner
        title={solution.tagline}
        backgroundImage={solution.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: solution.title },
        ]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Overview
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                {solution.subtitle}
              </h2>
              <p className="text-text-gray leading-relaxed">
                {solution.shortDesc}
              </p>
            </div>
            <div
              className="h-[300px] lg:h-[400px] rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url('${solution.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Service Categories Accordion */}
      {solution.categories && solution.categories.length > 0 && (
        <section className="py-20 bg-section-bg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Systems & Services
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {solution.categories.map((cat, ci) => {
                const isOpen = openAccordion === ci;
                return (
                  <div
                    key={ci}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(ci)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-8 bg-accent rounded-full shrink-0" />
                        <h3 className="text-primary font-bold text-lg">
                          {cat.name}
                        </h3>
                      </div>
                      <FiChevronDown
                        size={20}
                        className={`text-primary shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-2 space-y-5">
                          {cat.subcategories.map((sub, subi) => (
                            <div key={subi}>
                              {sub.name && (
                                <h4 className="text-primary font-semibold text-sm mb-3 uppercase tracking-wide">
                                  {sub.name}
                                </h4>
                              )}
                              <ul className="space-y-2">
                                {sub.items.map((item, ii) => {
                                  const subSlug = subSolutionTitles[item];
                                  return (
                                    <li
                                      key={ii}
                                      className="flex items-start gap-3"
                                    >
                                      <FiCheckCircle
                                        size={16}
                                        className="text-accent shrink-0 mt-0.5"
                                      />
                                      {subSlug ? (
                                        <Link
                                          href={`/solutions/${solution.slug}/${subSlug}`}
                                          className="text-accent text-sm leading-relaxed hover:underline font-medium"
                                        >
                                          {item}
                                        </Link>
                                      ) : (
                                        <span className="text-text-gray text-sm leading-relaxed">
                                          {item}
                                        </span>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

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
            Interested in our {solution.title} solutions?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Get in touch with our team for a customized consultation tailored to
            your requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-8 py-3.5 rounded-lg uppercase tracking-wider transition-colors"
          >
            Place Enquiry
            <FiArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Other Solutions */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Explore More
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Other Solutions
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {otherSolutions.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group relative rounded-xl overflow-hidden h-[220px]"
                style={{
                  backgroundImage: `url('${s.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-primary-dark/20 group-hover:from-primary-dark/95 transition-colors duration-300" />
                <div className="relative h-full flex flex-col justify-end p-5">
                  <h3 className="text-white font-bold text-sm mb-1">
                    {s.title}
                  </h3>
                  <p className="text-white/60 text-xs line-clamp-2">
                    {s.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
