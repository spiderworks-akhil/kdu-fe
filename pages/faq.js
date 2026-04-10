import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import PageHeroBanner from "@/components/PageHeroBanner";
import { faqCategories } from "@/lib/faqData";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filtered =
    activeCategory === "all"
      ? faqCategories
      : faqCategories.filter((c) => c.slug === activeCategory);

  return (
    <>
      <Head>
        <title>FAQ | KDU</title>
        <meta
          name="description"
          content="Frequently asked questions about KDU Group — products, services, maritime solutions, careers, and more."
        />
      </Head>

      <PageHeroBanner
        title="Frequently Asked Questions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      {/* Category Filter + FAQ Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
            {/* Sidebar — Category Filter */}
            <aside className="lg:sticky lg:top-[120px] lg:self-start">
              <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
                Categories
              </h3>
              <nav className="space-y-1">
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setOpenFaq(null);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === "all"
                      ? "bg-primary text-white"
                      : "text-text-gray hover:bg-section-bg hover:text-primary"
                  }`}
                >
                  All Categories
                </button>
                {faqCategories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => {
                      setActiveCategory(cat.slug);
                      setOpenFaq(null);
                    }}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      activeCategory === cat.slug
                        ? "bg-primary text-white"
                        : "text-text-gray hover:bg-section-bg hover:text-primary"
                    }`}
                  >
                    {cat.name}
                    <span
                      className={`text-xs ${
                        activeCategory === cat.slug
                          ? "text-white/60"
                          : "text-text-gray/50"
                      }`}
                    >
                      {cat.faqs.length}
                    </span>
                  </button>
                ))}
              </nav>

              {/* Contact CTA */}
              <div className="mt-8 bg-primary rounded-xl p-5 text-center">
                <FiHelpCircle size={28} className="text-accent mx-auto mb-3" />
                <p className="text-white text-sm font-semibold mb-1">
                  Still have questions?
                </p>
                <p className="text-white/60 text-xs mb-4">
                  Our team is here to help.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-accent hover:bg-accent/80 text-white text-xs font-semibold px-5 py-2.5 rounded-lg uppercase tracking-wider transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </aside>

            {/* FAQ Accordions */}
            <div className="space-y-10">
              {filtered.map((cat) => (
                <div key={cat.slug} id={`faq-${cat.slug}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1.5 h-7 bg-accent rounded-full" />
                    <h2 className="text-xl md:text-2xl font-bold text-primary">
                      {cat.name}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {cat.faqs.map((faq, fi) => {
                      const faqId = `${cat.slug}-${fi}`;
                      const isOpen = openFaq === faqId;
                      return (
                        <div
                          key={faqId}
                          className="bg-section-bg rounded-xl border border-gray-200 overflow-hidden"
                        >
                          <button
                            onClick={() => toggleFaq(faqId)}
                            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-100 transition-colors gap-4"
                          >
                            <h3 className="text-primary font-semibold text-sm md:text-base">
                              {faq.question}
                            </h3>
                            <FiChevronDown
                              size={18}
                              className={`text-accent shrink-0 transition-transform duration-300 ${
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
                              <p className="px-6 pb-5 text-text-gray text-sm leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema for SEO */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqCategories.flatMap((cat) =>
                cat.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                }))
              ),
            }),
          }}
        />
      </Head>
    </>
  );
}
