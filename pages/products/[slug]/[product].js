import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FiArrowLeft, FiCheckCircle, FiDownload, FiFileText, FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { useInquiryCart } from "@/lib/InquiryCartContext";
import PageHeroBanner from "@/components/PageHeroBanner";
import {
  productCategories,
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
  toSlug,
} from "@/lib/productData";

export async function getStaticPaths() {
  const all = getAllProducts();
  const paths = all.map((p) => ({
    params: { slug: p.categorySlug, product: p.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug, params.product);
  const related = getRelatedProducts(params.slug, params.product, 4);
  return { props: { product, related } };
}

export default function ProductDetailPage({ product, related }) {
  const hasImages = product.images && product.images.length > 0;
  const [activeImage, setActiveImage] = useState(
    hasImages ? product.images[0] : product.categoryImage
  );
  const [quantity, setQuantity] = useState(1);
  const [showAddedPopup, setShowAddedPopup] = useState(false);
  const { addItem } = useInquiryCart();

  const handleAddToInquiry = () => {
    addItem(product, quantity);
    setShowAddedPopup(true);
  };

  return (
    <>
      <Head>
        <title>{product.name} | {product.categoryTitle} | KDU</title>
        <meta
          name="description"
          content={`${product.name} by ${product.manufacturer} — available from KDU, your trusted marine equipment partner in the Middle East.`}
        />
      </Head>

      <PageHeroBanner
        title={product.name}
        backgroundImage={product.categoryImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          {
            label: product.categoryTitle,
            href: `/products/${product.categorySlug}`,
          },
          { label: product.subcategory, href: `/products/${product.categorySlug}` },
          { label: product.name },
        ]}
      />

      {/* Product Detail */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div>
              <div className="bg-section-bg rounded-xl p-8 flex items-center justify-center">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full max-h-[400px] object-contain rounded-lg"
                />
              </div>
              {hasImages && product.images.length > 1 && (
                <div className="flex gap-3 mt-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(img)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === img
                          ? "border-accent shadow-md"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.manufacturer}
                </span>
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.subcategory}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                {product.name}
              </h1>

              <p className="text-text-gray leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="bg-section-bg rounded-xl p-6 mb-8">
                <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
                  Product Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-text-gray text-xs uppercase tracking-wider mb-1">
                      Manufacturer
                    </p>
                    <p className="text-primary font-semibold text-sm">
                      {product.manufacturer}
                    </p>
                  </div>
                  <div>
                    <p className="text-text-gray text-xs uppercase tracking-wider mb-1">
                      Category
                    </p>
                    <p className="text-primary font-semibold text-sm">
                      {product.categoryTitle}
                    </p>
                  </div>
                  <div>
                    <p className="text-text-gray text-xs uppercase tracking-wider mb-1">
                      Sub-category
                    </p>
                    <p className="text-primary font-semibold text-sm">
                      {product.subcategory}
                    </p>
                  </div>
                  <div>
                    <p className="text-text-gray text-xs uppercase tracking-wider mb-1">
                      Availability
                    </p>
                    <p className="text-accent font-semibold text-sm">
                      In Stock / On Order
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantity + Add to Inquiry */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-2.5 text-gray-500 hover:bg-gray-100 transition-colors"
                  >
                    <FiMinus size={16} />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-14 text-center text-sm font-semibold text-primary border-x border-gray-300 py-2.5 focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-2.5 text-gray-500 hover:bg-gray-100 transition-colors"
                  >
                    <FiPlus size={16} />
                  </button>
                </div>
                <button
                  onClick={handleAddToInquiry}
                  className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg text-sm uppercase tracking-wider transition-colors bg-accent hover:bg-accent/80 text-white"
                >
                  <FiShoppingCart size={16} />
                  Add to Inquiry
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/products/${product.categorySlug}`}
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg text-sm uppercase tracking-wider transition-colors"
                >
                  <FiArrowLeft size={14} />
                  All {product.categoryTitle}
                </Link>
              </div>

              {/* Brochures Download */}
              {product.brochures && product.brochures.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
                    Download Brochures
                  </h3>
                  <div className="space-y-2">
                    {product.brochures.map((brochure, i) => (
                      <a
                        key={i}
                        href={brochure.url}
                        download
                        className="flex items-center gap-3 bg-section-bg hover:bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 transition-colors group"
                      >
                        <FiFileText
                          size={18}
                          className="text-red-500 shrink-0"
                        />
                        <span className="flex-1 text-sm text-text-gray group-hover:text-primary transition-colors truncate">
                          {brochure.name}
                        </span>
                        <FiDownload
                          size={16}
                          className="text-white shrink-0"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      {product.features && product.features.length > 0 && (
        <section className="py-16 bg-section-bg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Key Features
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Why Choose {product.name}
              </h2>
              <ul className="space-y-4">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FiCheckCircle
                      size={20}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <span className="text-text-gray leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-20 bg-section-bg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                You May Also Need
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Related Products
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.categorySlug}/${item.slug}`}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 group"
                >
                  <span className="bg-accent/10 text-accent text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {item.manufacturer}
                  </span>
                  <h3 className="text-primary font-bold text-sm mt-3 mb-1 group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-text-gray text-xs">{item.subcategory}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Added to Cart Popup */}
      {showAddedPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setShowAddedPopup(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-sm relative p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <FiCheckCircle size={48} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">
              Product Added!
            </h3>
            <p className="text-text-gray text-sm mb-6">
              <span className="font-semibold text-primary">{product.name}</span>{" "}
              has been added to your inquiry cart. Would you like to inquire now?
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/inquiry-cart"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-6 py-3 rounded-lg text-sm uppercase tracking-wider transition-colors"
              >
                <FiShoppingCart size={16} />
                Inquire Now
              </Link>
              <button
                onClick={() => setShowAddedPopup(false)}
                className="text-sm text-text-gray hover:text-primary font-medium transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
