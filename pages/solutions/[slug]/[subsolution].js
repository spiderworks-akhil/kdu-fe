import Head from "next/head";
import Link from "next/link";
import {
  FiCheckCircle,
  FiXCircle,
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";
import PageHeroBanner from "@/components/PageHeroBanner";
import {
  solutions,
  subSolutions,
  getSolutionBySlug,
  getSubSolutionBySlug,
} from "@/lib/solutionData";

export async function getStaticPaths() {
  const paths = subSolutions.map((s) => ({
    params: { slug: s.parentSlug, subsolution: s.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const parent = getSolutionBySlug(params.slug);
  const subSolution = getSubSolutionBySlug(params.slug, params.subsolution);
  return { props: { parent, subSolution } };
}

export default function SubSolutionDetail({ parent, subSolution }) {
  return (
    <>
      <Head>
        <title>{subSolution.title} | {parent.title} | KDU</title>
        <meta name="description" content={subSolution.description} />
      </Head>

      <PageHeroBanner
        title={subSolution.title}
        backgroundImage={subSolution.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: parent.title, href: `/solutions/${parent.slug}` },
          { label: subSolution.title },
        ]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                {subSolution.subtitle}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                {subSolution.title}
              </h2>
              <p className="text-text-gray leading-relaxed">
                {subSolution.description}
              </p>
            </div>
            {subSolution.logo && (
              <div className="flex items-center justify-center">
                <img
                  src={subSolution.logo}
                  alt={subSolution.title}
                  className="max-h-[200px] object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Comparison */}
      {subSolution.withoutFlame && subSolution.withFlame && (
        <section className="py-20 bg-section-bg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Why Upgrade
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                The FLAME Advantage
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Without */}
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-red-500 font-bold text-lg mb-6 flex items-center gap-2">
                  <FiXCircle size={22} />
                  Without FLAME
                </h3>
                <ul className="space-y-4">
                  {subSolution.withoutFlame.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiXCircle
                        size={16}
                        className="text-red-400 shrink-0 mt-0.5"
                      />
                      <span className="text-text-gray text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* With */}
              <div className="bg-white rounded-xl p-8 border border-accent/30 shadow-sm">
                <h3 className="text-accent font-bold text-lg mb-6 flex items-center gap-2">
                  <FiCheckCircle size={22} />
                  With FLAME
                </h3>
                <ul className="space-y-4">
                  {subSolution.withFlame.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
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
            </div>
          </div>
        </section>
      )}

      {/* System Diagram */}
      {subSolution.systemDiagram && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Architecture
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                System Diagram
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            </div>
            <div className="max-w-4xl mx-auto">
              <img
                src={subSolution.systemDiagram}
                alt={`${subSolution.title} System Diagram`}
                className="w-full rounded-xl shadow-lg"
              />
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
            Interested in {subSolution.title}?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Get in touch with our team for a customized consultation tailored to
            your requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-8 py-3.5 rounded-lg uppercase tracking-wider transition-colors"
            >
              Place an Enquiry
              <FiArrowRight size={16} />
            </Link>
            {subSolution.brochureUrl && (
              <a
                href={subSolution.brochureUrl}
                download
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-lg uppercase tracking-wider transition-colors"
              >
                <FiDownload size={16} />
                Download Brochure
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
