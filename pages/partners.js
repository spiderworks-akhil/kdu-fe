import Head from "next/head";
import PageHeroBanner from "@/components/PageHeroBanner";
import { strategicPartners, partners } from "@/lib/partnerData";

function LogoCard({ partner, large }) {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-100 flex items-center justify-center group hover:shadow-lg hover:border-accent/30 transition-all duration-300 ${
        large ? "p-6 h-32 md:h-36" : "p-4 h-24 md:h-28"
      }`}
    >
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}

export default function PartnersPage() {
  return (
    <>
      <Head>
        <title>Partners | KDU</title>
        <meta
          name="description"
          content="KDU Group collaborates with 50+ global partners to deliver innovative marine and industrial solutions worldwide."
        />
      </Head>

      <PageHeroBanner
        title="Our Partners"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Company", href: "#" },
          { label: "Partners" },
        ]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Global Collaborations
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Strategic Partners
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            <p className="text-text-gray max-w-2xl mx-auto leading-relaxed">
              Established in 2005, KDU Group has been successfully delivering
              innovative solutions and products worldwide through collaborations
              with global change makers, proving its reliability &amp; expertise
              in marine and industrial services.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {strategicPartners.map((partner) => (
              <LogoCard key={partner.name} partner={partner} large />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Our Network
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Partners
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {partners.map((partner) => (
              <LogoCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
