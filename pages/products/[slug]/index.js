import { useState, useMemo, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { FiArrowRight, FiPlay, FiSearch, FiX } from "react-icons/fi";
import PageHeroBanner from "@/components/PageHeroBanner";
import {
  productCategories,
  getProductCategoryBySlug,
  toSlug,
} from "@/lib/productData";

export async function getStaticPaths() {
  const paths = productCategories.map((c) => ({ params: { slug: c.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = getProductCategoryBySlug(params.slug);
  const otherCategories = productCategories
    .filter((c) => c.slug !== params.slug)
    .map(({ slug, title, image }) => ({ slug, title, image }));
  return { props: { category, otherCategories } };
}

function groupByManufacturer(items) {
  const groups = {};
  items.forEach((item) => {
    if (!groups[item.manufacturer]) groups[item.manufacturer] = [];
    groups[item.manufacturer].push(item);
  });
  return Object.entries(groups);
}

export default function ProductCategoryPage({ category, otherCategories }) {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedManufacturers, setSelectedManufacturers] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const productGridRef = useRef(null);

  const scrollToGrid = () => {
    productGridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Extract all unique subcategory names and manufacturers
  const allSubcategories = useMemo(
    () => category.subcategories.map((s) => s.name),
    [category]
  );

  const allManufacturers = useMemo(() => {
    const set = new Set();
    category.subcategories.forEach((sub) =>
      sub.items.forEach((item) => set.add(item.manufacturer))
    );
    return [...set].sort();
  }, [category]);

  // Filter subcategories based on active filters
  const filteredSubcategories = useMemo(() => {
    const q = search.toLowerCase().trim();

    return category.subcategories
      .filter((sub) => {
        if (selectedCategories.length > 0 && !selectedCategories.includes(sub.name))
          return false;
        return true;
      })
      .map((sub) => {
        let items = sub.items;

        if (selectedManufacturers.length > 0) {
          items = items.filter((item) =>
            selectedManufacturers.includes(item.manufacturer)
          );
        }

        if (q) {
          items = items.filter(
            (item) =>
              item.product.toLowerCase().includes(q) ||
              item.manufacturer.toLowerCase().includes(q) ||
              sub.name.toLowerCase().includes(q)
          );
        }

        return { ...sub, items };
      })
      .filter((sub) => sub.items.length > 0);
  }, [category, search, selectedCategories, selectedManufacturers]);

  const toggleCategory = (name) => {
    setSelectedCategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
    scrollToGrid();
  };

  const toggleManufacturer = (name) => {
    setSelectedManufacturers((prev) =>
      prev.includes(name) ? prev.filter((m) => m !== name) : [...prev, name]
    );
    scrollToGrid();
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedCategories([]);
    setSelectedManufacturers([]);
  };

  const hasActiveFilters =
    search || selectedCategories.length > 0 || selectedManufacturers.length > 0;

  const filterSidebar = (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="block text-primary font-bold text-sm uppercase tracking-wider mb-3">
          Search Products
        </label>
        <div className="relative">
          <FiSearch
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or brand..."
            className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <FiX size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-primary font-bold text-sm uppercase tracking-wider mb-3">
          Category
        </label>
        <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
          {allSubcategories.map((name) => (
            <label
              key={name}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(name)}
                onChange={() => toggleCategory(name)}
                className="w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent cursor-pointer"
              />
              <span className="text-sm text-text-gray group-hover:text-primary transition-colors">
                {name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Manufacturer Filter */}
      <div>
        <label className="block text-primary font-bold text-sm uppercase tracking-wider mb-3">
          Manufacturer
        </label>
        <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
          {allManufacturers.map((name) => (
            <label
              key={name}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedManufacturers.includes(name)}
                onChange={() => toggleManufacturer(name)}
                className="w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent cursor-pointer"
              />
              <span className="text-sm text-text-gray group-hover:text-primary transition-colors">
                {name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="w-full text-sm text-accent hover:text-accent/80 font-semibold py-2 border border-accent/30 rounded-lg hover:bg-accent/5 transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <>
      <Head>
        <title>{category.title} Products | KDU</title>
        <meta name="description" content={category.desc} />
      </Head>

      <PageHeroBanner
        title={category.title}
        backgroundImage={category.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: category.title },
        ]}
      />

      {/* Product Listings with Sidebar */}
      <section className="py-16 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile filter toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-semibold text-primary shadow-sm"
            >
              <FiSearch size={16} />
              Filters
              {hasActiveFilters && (
                <span className="bg-accent text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {selectedCategories.length + selectedManufacturers.length + (search ? 1 : 0)}
                </span>
              )}
            </button>
          </div>

          {/* Mobile filter panel */}
          {showMobileFilters && (
            <div className="lg:hidden mb-6 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              {filterSidebar}
            </div>
          )}

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-[280px] shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto overscroll-contain p-5">
                {filterSidebar}
              </div>
            </aside>

            {/* Product Grid */}
            <div ref={productGridRef} className="flex-1 min-w-0 scroll-mt-24">
              {filteredSubcategories.length === 0 ? (
                <div className="bg-white rounded-xl p-12 text-center shadow-sm">
                  <p className="text-text-gray text-lg mb-2">No products found</p>
                  <p className="text-text-gray/60 text-sm mb-4">
                    Try adjusting your filters or search term.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="text-accent font-semibold text-sm hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="columns-1 md:columns-2 gap-5 space-y-5">
                  {filteredSubcategories.map((sub) => {
                    const groups = groupByManufacturer(sub.items);
                    return (
                      <div
                        key={sub.name}
                        className="break-inside-avoid bg-white rounded-lg overflow-hidden shadow-sm"
                      >
                        {/* Category header bar */}
                        <div className="bg-primary px-5 py-3">
                          <h3 className="text-white font-bold text-sm uppercase tracking-wider">
                            {sub.name}
                          </h3>
                        </div>

                        {/* Products grouped by manufacturer */}
                        <div className="px-5 py-4 space-y-4">
                          {groups.map(([manufacturer, items]) => (
                            <div key={manufacturer}>
                              <p className="text-primary font-bold text-xs uppercase tracking-wider mb-2">
                                {manufacturer}
                              </p>
                              <ul className="space-y-1.5">
                                {items.map((item, j) => (
                                  <li key={j}>
                                    <Link
                                      href={`/products/${category.slug}/${toSlug(item.product)}`}
                                      className="flex items-start gap-2 text-text-gray text-sm hover:text-accent transition-colors"
                                    >
                                      <FiPlay
                                        size={8}
                                        className="mt-1.5 shrink-0 fill-current"
                                      />
                                      <span>{item.product}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

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
            Need {category.title} equipment for your vessel?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Contact our specialists for product recommendations, quotations, and
            technical support tailored to your requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-8 py-3.5 rounded-lg uppercase tracking-wider transition-colors"
          >
            Request a Quote
            <FiArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Explore More
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Other Product Segments
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {otherCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group relative rounded-xl overflow-hidden h-[200px]"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-primary-dark/20" />
                <div className="relative h-full flex flex-col justify-end p-5">
                  <h3 className="text-white font-bold text-sm">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
