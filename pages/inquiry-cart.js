import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  FiTrash2,
  FiMinus,
  FiPlus,
  FiArrowRight,
  FiShoppingCart,
  FiX,
  FiCheckCircle,
  FiChevronDown,
} from "react-icons/fi";
import PageHeroBanner from "@/components/PageHeroBanner";
import { useInquiryCart } from "@/lib/InquiryCartContext";

const countryCodes = [
  { code: "+971", country: "UAE" },
  { code: "+966", country: "KSA" },
  { code: "+968", country: "Oman" },
  { code: "+974", country: "Qatar" },
  { code: "+973", country: "Bahrain" },
  { code: "+965", country: "Kuwait" },
  { code: "+91", country: "India" },
  { code: "+44", country: "UK" },
  { code: "+1", country: "US" },
  { code: "+65", country: "Singapore" },
  { code: "+234", country: "Nigeria" },
  { code: "+27", country: "South Africa" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+82", country: "South Korea" },
  { code: "+61", country: "Australia" },
];

export default function InquiryCartPage() {
  const { items, updateQuantity, removeItem, clearCart } = useInquiryCart();
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+971",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send inquiry data to API along with cart items
    setSubmitted(true);
  };

  const closeModal = () => {
    setShowInquiryForm(false);
    if (submitted) {
      clearCart();
      setSubmitted(false);
    }
    setFormData({ name: "", email: "", countryCode: "+971", phone: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>Inquiry Cart | KDU</title>
        <meta name="description" content="Review your selected products and submit an inquiry to KDU." />
      </Head>

      <PageHeroBanner
        title="Inquiry Cart"
        backgroundImage="https://kduworld.com/wp-content/uploads/2022/07/1.-Navigation-1.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Inquiry Cart" },
        ]}
      />

      <section className="py-16 bg-section-bg min-h-[50vh]">
        <div className="max-w-5xl mx-auto px-4">
          {items.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center shadow-sm">
              <FiShoppingCart size={48} className="text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-primary mb-2">
                Your inquiry cart is empty
              </h2>
              <p className="text-text-gray text-sm mb-6">
                Browse our products and add items you&apos;d like to inquire about.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-6 py-3 rounded-lg text-sm uppercase tracking-wider transition-colors"
              >
                Browse Products
                <FiArrowRight size={14} />
              </Link>
            </div>
          ) : (
            <>
              {/* Cart Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-primary">
                  {items.length} {items.length === 1 ? "Product" : "Products"} for Inquiry
                </h2>
                <button
                  onClick={clearCart}
                  className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Cart Items */}
              <div className="space-y-4 mb-8">
                {items.map((item) => (
                  <div
                    key={item.slug}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex gap-5 items-start"
                  >
                    {/* Product Image */}
                    <Link
                      href={`/products/${item.categorySlug}/${item.slug}`}
                      className="w-20 h-20 rounded-lg overflow-hidden bg-section-bg shrink-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/products/${item.categorySlug}/${item.slug}`}
                        className="text-primary font-bold text-sm hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-text-gray text-xs mt-0.5">
                        {item.manufacturer} &middot; {item.subcategory}
                      </p>
                      <p className="text-text-gray/60 text-xs mt-0.5">
                        {item.categoryTitle}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shrink-0">
                      <button
                        onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                        className="px-2.5 py-2 text-gray-500 hover:bg-gray-100 transition-colors"
                      >
                        <FiMinus size={14} />
                      </button>
                      <span className="w-10 text-center text-sm font-semibold text-primary border-x border-gray-300 py-2">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                        className="px-2.5 py-2 text-gray-500 hover:bg-gray-100 transition-colors"
                      >
                        <FiPlus size={14} />
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.slug)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1 shrink-0"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Summary + Inquiry Button */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-text-gray text-sm">
                    Total Products:{" "}
                    <span className="text-primary font-bold">{items.length}</span>
                    &nbsp;&middot;&nbsp;Total Quantity:{" "}
                    <span className="text-primary font-bold">
                      {items.reduce((sum, i) => sum + i.quantity, 0)}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => setShowInquiryForm(true)}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-8 py-3.5 rounded-lg uppercase tracking-wider transition-colors"
                >
                  Submit Inquiry
                  <FiArrowRight size={16} />
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Inquiry Form Modal */}
      {showInquiryForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FiX size={22} />
            </button>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-1">
                Submit Inquiry
              </h3>
              <p className="text-text-gray text-sm mb-6">
                {items.length} {items.length === 1 ? "product" : "products"} selected
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <FiCheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-primary mb-2">
                    Inquiry Submitted!
                  </h4>
                  <p className="text-text-gray text-sm">
                    Thank you for your interest. Our team will review your inquiry and
                    get back to you shortly.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-6 text-accent font-semibold hover:underline text-sm"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Phone
                    </label>
                    <div className="flex gap-2">
                      <div className="relative shrink-0">
                        <select
                          value={formData.countryCode}
                          onChange={(e) =>
                            setFormData({ ...formData, countryCode: e.target.value })
                          }
                          className="appearance-none w-[110px] border border-gray-300 rounded-lg px-3 py-2.5 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                        >
                          {countryCodes.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.code} {c.country}
                            </option>
                          ))}
                        </select>
                        <FiChevronDown
                          size={14}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                      </div>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                      placeholder="Any additional details or requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/80 text-white font-semibold py-3 rounded-lg uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    Submit Inquiry
                    <FiArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
