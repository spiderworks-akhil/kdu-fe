import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FiArrowRight, FiMapPin, FiClock } from "react-icons/fi";
import PageHeroBanner from "@/components/PageHeroBanner";
import {
  caseStudies,
  caseStudyCategories,
  getCaseStudiesByCategory,
} from "@/lib/caseStudyData";

export default function CaseStudiesIndex() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = getCaseStudiesByCategory(activeCategory);

  return (
    <>
      <Head>
        <title>Case Studies | KDU</title>
        <meta
          name="description"
          content="Explore KDU's real-world maritime projects — bridge retrofits, communication upgrades, power management solutions, and more."
        />
      </Head>

      <PageHeroBanner
        title="Case Studies"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies" },
        ]}
      />

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-text-gray leading-relaxed text-lg">
            Discover how KDU has helped clients across the maritime industry
            solve complex challenges with innovative solutions. Each case study
            highlights the problem, our approach, and the measurable results
            delivered.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-section-bg border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-4">
            {caseStudyCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-white text-text-gray border border-gray-200 hover:border-primary/30 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-4 left-4 bg-accent text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {cs.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-primary font-bold text-base mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                      {cs.title}
                    </h3>
                    <p className="text-text-gray text-sm leading-relaxed mb-4 line-clamp-3">
                      {cs.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-text-gray mb-4">
                      <span className="flex items-center gap-1">
                        <FiMapPin size={12} className="text-accent" />
                        {cs.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock size={12} className="text-accent" />
                        {cs.duration}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-2.5 transition-all">
                      Read Case Study
                      <FiArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-gray text-lg">
                No case studies found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
