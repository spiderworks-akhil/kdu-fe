import Head from "next/head";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHeroBanner from "@/components/PageHeroBanner";
import { markets } from "@/lib/marketData";

export default function MarketsIndex() {
  return (
    <>
      <Head>
        <title>Markets | KDU</title>
        <meta
          name="description"
          content="KDU serves diverse market segments including Maritime, Naval, Industrial, Maritime Training, and Ports & Harbours with integrated solutions."
        />
      </Head>

      <PageHeroBanner
        title="Our Markets"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Markets" },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Industries We Serve
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Market Segments
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            <p className="text-text-gray max-w-2xl mx-auto leading-relaxed">
              KDU delivers innovative solutions across multiple market segments,
              leveraging global partnerships and deep domain expertise.
            </p>
          </div>

          <div className="space-y-8">
            {markets.map((market, i) => (
              <Link
                key={market.slug}
                href={`/markets/${market.slug}`}
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-64 lg:h-[360px] overflow-hidden ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={market.image}
                    alt={market.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent lg:hidden" />
                </div>

                {/* Content */}
                <div
                  className={`bg-section-bg p-8 md:p-12 flex flex-col justify-center ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                    {market.title}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                    {market.tagline}
                  </h3>
                  <p className="text-text-gray leading-relaxed mb-6">
                    {market.shortDesc}
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
