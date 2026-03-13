import Head from "next/head";
import PageHeroBanner from "@/components/PageHeroBanner";

const strategicPartners = [
  {
    name: "Sperry Marine",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/Sperry-Marine_Logo_Strapline_CMYK_Af-scaled.jpg",
  },
  {
    name: "DEIF",
    logo: "https://kduworld.com/wp-content/uploads/2024/07/Untitled-design-21.png",
  },
  {
    name: "Hanla",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/hanla-270x135-1.jpg",
  },
  {
    name: "One Ocean",
    logo: "https://kduworld.com/wp-content/uploads/2025/12/2-1.png",
  },
  {
    name: "MSM",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/msm-270x135-1.jpg",
  },
  {
    name: "ICS",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/ICS.jpg",
  },
  {
    name: "Danelec",
    logo: "https://kduworld.com/wp-content/uploads/2025/02/Danelec.jpg",
  },
  {
    name: "Entel",
    logo: "https://kduworld.com/wp-content/uploads/2025/01/Entel-Charcoal2-1.jpg",
  },
  {
    name: "Kangrim",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/kangrim.jpg",
  },
  {
    name: "Terma",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/terma.jpg",
  },
  {
    name: "Steerprop",
    logo: "https://kduworld.com/wp-content/uploads/2024/07/Untitled-design-19.png",
  },
  {
    name: "EMRI",
    logo: "https://kduworld.com/wp-content/uploads/2022/06/EMRI.jpg",
  },
  {
    name: "Lightpartner",
    logo: "https://kduworld.com/wp-content/uploads/2023/03/Lightpartner.png",
  },
  {
    name: "N.E.",
    logo: "https://kduworld.com/wp-content/uploads/2024/05/N_E_logo-1.png",
  },
  {
    name: "Seapower",
    logo: "https://kduworld.com/wp-content/uploads/2025/02/Seapower-1.jpg",
  },
];

const partners = [
  {
    name: "Jotron",
    logo: "https://kduworld.com/wp-content/uploads/2022/06/jotron-vector-logo-2022.png",
  },
  {
    name: "Cobham",
    logo: "https://kduworld.com/wp-content/uploads/2022/06/cobham-vector-logo.png",
  },
  {
    name: "Ineech",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/ineechV2.jpg",
  },
  {
    name: "Modootel",
    logo: "https://kduworld.com/wp-content/uploads/2022/06/Modootel.png",
  },
  {
    name: "Kraft",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/KraftV2.jpg",
  },
  {
    name: "Veinland",
    logo: "https://kduworld.com/wp-content/uploads/2022/06/Veinland-2.png",
  },
  {
    name: "Lilly",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/LillyV2.jpg",
  },
  {
    name: "Measurement",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/measurement.jpg",
  },
  {
    name: "Navitron",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/navitron.jpg",
  },
  {
    name: "Omnisense",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/OmnisenseV2.jpg",
  },
  {
    name: "Orolia",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/orolia.jpg",
  },
  {
    name: "Rivertrace",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/rivertrace.jpg",
  },
  {
    name: "Rockson",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/RocksonV2.jpg",
  },
  {
    name: "SCM",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/scm.jpg",
  },
  {
    name: "ITU",
    logo: "https://kduworld.com/wp-content/uploads/2022/06/ITU.jpg",
  },
  {
    name: "Siemenz",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/SiemenzV2.jpg",
  },
  {
    name: "Simrad",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/simrad.jpg",
  },
  {
    name: "Skipper",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/skipper-1-1.png",
  },
  {
    name: "SM Electrics",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/sm-electrics.jpg",
  },
  {
    name: "Technoton",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/Technoton.jpg",
  },
  {
    name: "Vingtor",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/vingtor-e1633953152862.jpg",
  },
  {
    name: "Zollner",
    logo: "https://kduworld.com/wp-content/uploads/2022/04/zollner.jpg",
  },
  {
    name: "Mavili",
    logo: "https://kduworld.com/wp-content/uploads/2023/01/Mavili.jpg",
  },
  {
    name: "Hullmos",
    logo: "https://kduworld.com/wp-content/uploads/2022/06/Hullmos-Logo-.png",
  },
  {
    name: "EM-Trak",
    logo: "https://kduworld.com/wp-content/uploads/2022/06/em-trak.png",
  },
  {
    name: "SpecsVision",
    logo: "https://kduworld.com/wp-content/uploads/2024/05/SPECSVISION-logo-1-300x87.png",
  },
  {
    name: "Cassens & Plath",
    logo: "https://kduworld.com/wp-content/uploads/2024/07/Untitled-design-20.png",
  },
  {
    name: "Ocean Voyager",
    logo: "https://kduworld.com/wp-content/uploads/2025/02/Premium-Camapaign-1080-x-1080-1024x1024.jpg",
  },
];

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
