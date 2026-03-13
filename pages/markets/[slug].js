import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  FiCheckCircle,
  FiArrowRight,
  FiDownload,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import PageHeroBanner from "@/components/PageHeroBanner";
import { markets, getMarketBySlug } from "@/lib/marketData";

export async function getStaticPaths() {
  const paths = markets.map((m) => ({ params: { slug: m.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const market = getMarketBySlug(params.slug);
  const otherMarkets = markets.filter((m) => m.slug !== params.slug);
  return { props: { market, otherMarkets } };
}

export default function MarketDetail({ market, otherMarkets }) {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send form data to API
    setSubmitted(true);
  };

  const closeModal = () => {
    setShowQuoteForm(false);
    setSubmitted(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>{market.title} | Markets | KDU</title>
        <meta name="description" content={market.shortDesc} />
      </Head>

      <PageHeroBanner
        title={market.tagline}
        backgroundImage={market.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: market.title },
        ]}
      />

      {/* Intro + Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Overview
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                {market.tagline}
              </h2>
              <p className="text-text-gray leading-relaxed mb-4">
                {market.intro}
              </p>
              {market.subIntro && (
                <p className="text-text-gray leading-relaxed">
                  {market.subIntro}
                </p>
              )}
            </div>

            <div>
              <h3 className="text-primary font-bold text-xl mb-6">
                Key Capabilities
              </h3>
              <ul className="space-y-4">
                {market.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FiCheckCircle
                      size={20}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <span className="text-text-gray leading-relaxed">
                      {cap}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Segments (if any) */}
      {market.segments.length > 0 && (
        <section className="py-20 bg-section-bg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Sectors
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Market Segments
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {market.segments.map((seg, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <span className="text-primary font-bold text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-primary font-bold text-lg mb-3">
                    {seg.name}
                  </h3>
                  <p className="text-text-gray text-sm leading-relaxed">
                    {seg.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Services Accordion */}
      {market.detailedServices?.map((section, si) => (
        <section key={si} className="py-20 bg-section-bg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-6">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Detailed Overview
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {section.title}
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            </div>
            <p className="text-text-gray leading-relaxed text-center max-w-4xl mx-auto mb-12">
              {section.description}
            </p>

            <div className="space-y-4 max-w-4xl mx-auto">
              {section.categories.map((cat, ci) => {
                const isOpen = openAccordion === `${si}-${ci}`;
                return (
                  <div
                    key={ci}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(`${si}-${ci}`)}
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
                                {sub.items.map((item, ii) => (
                                  <li
                                    key={ii}
                                    className="flex items-start gap-3"
                                  >
                                    <FiCheckCircle
                                      size={16}
                                      className="text-accent shrink-0 mt-0.5"
                                    />
                                    <span className="text-text-gray text-sm leading-relaxed">
                                      {item}
                                    </span>
                                  </li>
                                ))}
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
      ))}

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
            Interested in our {market.title} solutions?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Get in touch with our team for a customized consultation and
            quotation tailored to your requirements.
          </p>
          <button
            onClick={() => setShowQuoteForm(true)}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-8 py-3.5 rounded-lg uppercase tracking-wider transition-colors"
          >
            Request a Quote
            <FiArrowRight size={16} />
          </button>

          {/* Downloads */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-white mb-6">Downloads</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/downloads/company-profile.pdf"
                download
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-6 py-4 transition-colors min-w-[240px]"
              >
                <FiDownload size={20} className="text-accent shrink-0" />
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">Company Profile</p>
                  <p className="text-white/50 text-xs">Download .pdf</p>
                </div>
              </a>
              <a
                href="/downloads/brochure.pdf"
                download
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-6 py-4 transition-colors min-w-[240px]"
              >
                <FiDownload size={20} className="text-accent shrink-0" />
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">Brochure</p>
                  <p className="text-white/50 text-xs">Download .pdf</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Markets */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Explore More
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Other Markets
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherMarkets.map((m) => (
              <Link
                key={m.slug}
                href={`/markets/${m.slug}`}
                className="group relative rounded-xl overflow-hidden h-[240px]"
              >
                <img
                  src={m.image}
                  alt={m.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-primary-dark/20" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {m.title}
                  </h3>
                  <p className="text-white/60 text-xs line-clamp-2">
                    {m.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FiX size={22} />
            </button>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-1">
                Request a Quote
              </h3>
              <p className="text-text-gray text-sm mb-6">
                {market.title} solutions
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <FiCheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-primary mb-2">
                    Thank You!
                  </h4>
                  <p className="text-text-gray text-sm">
                    We&apos;ve received your request and will get back to you shortly.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-6 text-accent font-semibold hover:underline text-sm"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/80 text-white font-semibold py-3 rounded-lg uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    Submit Request
                    <FiArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
