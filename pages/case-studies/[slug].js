import Head from "next/head";
import Link from "next/link";
import {
  FiCheckCircle,
  FiMapPin,
  FiClock,
  FiUser,
  FiArrowRight,
  FiArrowLeft,
} from "react-icons/fi";
import PageHeroBanner from "@/components/PageHeroBanner";
import {
  caseStudies,
  getCaseStudyBySlug,
  getRelatedCaseStudies,
} from "@/lib/caseStudyData";

export async function getStaticPaths() {
  const paths = caseStudies.map((cs) => ({
    params: { slug: cs.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const caseStudy = getCaseStudyBySlug(params.slug);
  const related = getRelatedCaseStudies(params.slug, 3);
  return { props: { caseStudy, related } };
}

export default function CaseStudyDetail({ caseStudy, related }) {
  return (
    <>
      <Head>
        <title>{caseStudy.title} | Case Studies | KDU</title>
        <meta name="description" content={caseStudy.excerpt} />
      </Head>

      <PageHeroBanner
        title={caseStudy.title}
        backgroundImage={caseStudy.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: caseStudy.title },
        ]}
      />

      {/* Project Overview Bar */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <FiUser size={14} className="text-accent" />
              <span className="font-semibold text-white">Client:</span>
              {caseStudy.client}
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <FiMapPin size={14} className="text-accent" />
              <span className="font-semibold text-white">Location:</span>
              {caseStudy.location}
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <FiClock size={14} className="text-accent" />
              <span className="font-semibold text-white">Duration:</span>
              {caseStudy.duration}
            </div>
            <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {caseStudy.category}
            </span>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {/* Challenge */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              The Challenge
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              What the Client Faced
            </h2>
            <div className="w-12 h-1 bg-accent mb-6" />
            <p className="text-text-gray leading-relaxed text-base md:text-lg">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Solution */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Our Solution
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              How KDU Delivered
            </h2>
            <div className="w-12 h-1 bg-accent mb-6" />
            <p className="text-text-gray leading-relaxed text-base md:text-lg">
              {caseStudy.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Results
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Key Outcomes
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto" />
          </div>

          <div className="space-y-4">
            {caseStudy.results.map((result, i) => (
              <div
                key={i}
                className="bg-white rounded-xl px-6 py-5 border border-gray-200 flex items-start gap-4 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <FiCheckCircle size={16} className="text-accent" />
                </div>
                <p className="text-primary font-medium leading-relaxed">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-14 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Have a Similar Requirement?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Our team can design a tailored solution for your vessel or fleet.
            Get in touch to discuss your project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-8 py-3.5 rounded-lg uppercase tracking-wider transition-colors"
            >
              Contact Us
              <FiArrowRight size={16} />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded-lg uppercase tracking-wider transition-colors"
            >
              <FiArrowLeft size={16} />
              All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {related.length > 0 && (
        <section className="py-20 bg-section-bg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                More Projects
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Related Case Studies
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-3 left-3 bg-accent text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {cs.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-primary font-bold text-sm mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                      {cs.title}
                    </h3>
                    <p className="text-text-gray text-xs leading-relaxed line-clamp-2">
                      {cs.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
