import Head from "next/head";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHeroBanner from "@/components/PageHeroBanner";
import { productCategories, iconMap } from "@/lib/productData";

export default function ProductsIndex() {
  return (
    <>
      <Head>
        <title>Products | KDU</title>
        <meta
          name="description"
          content="Explore KDU's comprehensive range of marine products across Navigation, Communication, Electrical, Automation, Fleet Compliance, and Aids to Navigation."
        />
      </Head>

      <PageHeroBanner
        title="Our Products"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Explore Our Range
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Product Segments
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            <p className="text-text-gray max-w-2xl mx-auto leading-relaxed">
              KDU brings the latest technology through global partnerships,
              offering a comprehensive portfolio of marine equipment and
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => {
              const Icon = iconMap[cat.icon];
              return (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="group relative rounded-2xl overflow-hidden h-[300px] block"
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/60 to-primary/20" />
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center text-white">
                        <Icon size={22} />
                      </div>
                      <div className="bg-accent/90 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {cat.subcategories.reduce((sum, s) => sum + s.items.length, 0)}+ Products
                      </div>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-white/60 text-sm line-clamp-2">
                      {cat.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
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
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Our team can help you source the right equipment and solutions for
            your vessel or project requirements.
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
