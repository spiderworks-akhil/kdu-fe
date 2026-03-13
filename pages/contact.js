import { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiChevronDown,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import PageHeroBanner from "@/components/PageHeroBanner";
import { offices } from "@/lib/contactData";

const WorldMap = dynamic(() => import("@/components/WorldMap"), {
  ssr: false,
  loading: () => (
    <div className="bg-primary/[0.03] rounded-2xl border border-gray-200 flex items-center justify-center" style={{ height: 450 }}>
      <p className="text-text-gray text-sm">Loading map...</p>
    </div>
  ),
});

export default function ContactPage() {
  const [activeCountry, setActiveCountry] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCountryChange = (index) => {
    setActiveCountry(index);
    setOpenAccordion(0);
  };

  const activeOffice = offices[activeCountry];

  return (
    <>
      <Head>
        <title>Contact Us | KDU</title>
        <meta
          name="description"
          content="Get in touch with KDU Group — reach our head office in Dubai or any of our global offices across UAE, India, China, Singapore, Ghana, Sri Lanka, Saudi Arabia, and Nigeria."
        />
      </Head>

      <PageHeroBanner
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* Head Office Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Head Office
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-section-bg rounded-xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <FiMapPin size={24} className="text-accent" />
              </div>
              <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
                Address
              </h3>
              <p className="text-text-gray text-sm leading-relaxed">
                P.O. Box: 90878, Dubai Maritime City (DMC), Dubai
              </p>
            </div>
            <div className="bg-section-bg rounded-xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <FiPhone size={24} className="text-accent" />
              </div>
              <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
                Phone No.
              </h3>
              <a
                href="tel:+97144310836"
                className="text-text-gray text-sm hover:text-accent transition-colors"
              >
                +971 4 431 0836
              </a>
            </div>
            <div className="bg-section-bg rounded-xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <FiMail size={24} className="text-accent" />
              </div>
              <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
                Email Address
              </h3>
              <a
                href="mailto:info@kduworld.com"
                className="text-text-gray text-sm hover:text-accent transition-colors"
              >
                info@kduworld.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices with Map */}
      <section className="py-16 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Global Presence
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Offices
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>

          {/* World Map */}
          <div className="max-w-5xl mx-auto mb-12">
            <WorldMap
              offices={offices}
              activeCountry={activeCountry}
              onCountryChange={handleCountryChange}
            />
          </div>

          {/* Country Tabs */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {offices.map((office, i) => (
              <button
                key={office.country}
                onClick={() => handleCountryChange(i)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCountry === i
                    ? "bg-accent text-white"
                    : "bg-white text-text-gray hover:bg-primary/10 hover:text-primary border border-gray-200"
                }`}
              >
                {office.country}
              </button>
            ))}
          </div>

          {/* Office Details - Accordion if multiple, card if single */}
          <div className="max-w-3xl mx-auto">
            {activeOffice.locations.length === 1 ? (
              <OfficeCard location={activeOffice.locations[0]} />
            ) : (
              <div className="space-y-3">
                {activeOffice.locations.map((loc, li) => {
                  const isOpen = openAccordion === li;
                  return (
                    <div
                      key={li}
                      className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleAccordion(li)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-7 bg-accent rounded-full shrink-0" />
                          <h3 className="text-primary font-bold text-base">
                            {loc.city}
                          </h3>
                        </div>
                        <FiChevronDown
                          size={18}
                          className={`text-primary shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-6 pb-5">
                            <OfficeInfo location={loc} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Send Us a Message
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-text-gray leading-relaxed mb-8">
                Whether you have a question about our products, services, or
                anything else, our team is ready to answer all your questions.
                Fill out the form and we&apos;ll get back to you as soon as
                possible.
              </p>

              {/* Google Map of Dubai head office */}
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  title="KDU Head Office Dubai"
                  src="https://maps.google.com/maps?q=KDU+Marine+Equipment+Trading+and+Maintenance+L.L.C+DMCC+DUBAI&t=m&z=14&output=embed&iwloc=near"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="bg-section-bg rounded-2xl p-8 md:p-10 border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <FiCheckCircle
                    size={48}
                    className="text-green-500 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-text-gray text-sm mb-6">
                    Thank you for reaching out. Our team will get back to you
                    shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                      });
                    }}
                    className="text-accent font-semibold hover:underline text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none bg-white"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/80 text-white font-semibold py-3.5 rounded-lg uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <FiSend size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function OfficeCard({ location }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <h3 className="text-primary font-bold text-lg mb-1">{location.city}</h3>
      <OfficeInfo location={location} />
    </div>
  );
}

function OfficeInfo({ location }) {
  return (
    <div className="space-y-3">
      <p className="text-primary font-semibold text-sm">{location.company}</p>
      <p className="text-text-gray text-sm leading-relaxed">
        {location.address}
      </p>
      <div className="flex flex-col gap-1.5 text-sm">
        {location.tel && (
          <span className="text-text-gray flex items-center gap-2">
            <FiPhone size={13} className="text-accent shrink-0" />
            Tel: {location.tel}
          </span>
        )}
        {location.mob && (
          <span className="text-text-gray flex items-center gap-2">
            <FiPhone size={13} className="text-accent shrink-0" />
            Mob: {location.mob}
          </span>
        )}
        {location.fax && (
          <span className="text-text-gray flex items-center gap-2">
            <FiPhone size={13} className="text-text-gray/50 shrink-0" />
            Fax: {location.fax}
          </span>
        )}
        {location.email && (
          <a
            href={`mailto:${location.email}`}
            className="text-text-gray hover:text-accent transition-colors flex items-center gap-2"
          >
            <FiMail size={13} className="text-accent shrink-0" />
            {location.email}
          </a>
        )}
      </div>
      {location.mapEmbed && (
        <div className="mt-4 rounded-lg overflow-hidden">
          <iframe
            title={location.company}
            src={location.mapEmbed}
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );
}
