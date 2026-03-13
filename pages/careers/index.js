import { useState } from "react";
import Head from "next/head";
import {
  FiChevronDown,
  FiMapPin,
  FiCheckCircle,
  FiX,
  FiUpload,
  FiSend,
} from "react-icons/fi";
import PageHeroBanner from "@/components/PageHeroBanner";
import { jobOpenings } from "@/lib/careerData";

export default function CareersPage() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
  });

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    setShowForm(false);
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", position: "" });
  };

  return (
    <>
      <Head>
        <title>Careers | KDU</title>
        <meta
          name="description"
          content="Join KDU Group — explore career opportunities across technical, managerial & administrative positions in the maritime industry."
        />
      </Head>

      <PageHeroBanner
        title="Careers"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-text-gray leading-relaxed text-lg">
            As one of the leading Marine service provider in the UAE, we offer a
            range of career opportunities for an outstanding technical,
            managerial &amp; administrative positions to develop your career.
            Should you be interested in joining our energetic team &amp; feel you
            will be perfect for one of our current vacancies, don&apos;t
            hesitate to apply for it under our current vacancies. If you match
            with the current needs of the Company, our HR Department will contact
            you. Follow our social media for the most up to date vacancies and
            you can also drop in your CV/resumes directly here for our review if
            any opportunities arise in the meantime.
          </p>
        </div>
      </section>

      {/* Apply For Jobs - Accordion */}
      <section className="py-16 bg-section-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Apply For Jobs
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job, i) => {
              const isOpen = openAccordion === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-8 bg-accent rounded-full shrink-0" />
                      <h3 className="text-primary font-bold text-base md:text-lg">
                        {job.title}
                      </h3>
                    </div>
                    <FiChevronDown
                      size={20}
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
                      <div className="px-6 pb-6 pt-2">
                        {/* Location info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-text-gray mb-5">
                          <span className="flex items-center gap-1.5">
                            <FiMapPin size={14} className="text-accent" />
                            <strong>Job Location:</strong> {job.location}
                          </span>
                          <span>
                            <strong>Nationality:</strong> {job.nationality}
                          </span>
                        </div>

                        {/* Content blocks */}
                        {job.content.map((block, bi) => (
                          <div key={bi} className="mb-4">
                            {block.heading && (
                              <p className="text-primary font-semibold text-sm mb-2">
                                {block.heading}
                              </p>
                            )}
                            {block.text && (
                              <p
                                className="text-text-gray text-sm leading-relaxed mb-2"
                                dangerouslySetInnerHTML={{
                                  __html: block.text
                                    .replace(
                                      /\*\*(.*?)\*\*/g,
                                      "<strong>$1</strong>"
                                    ),
                                }}
                              />
                            )}
                            {block.items && (
                              <ul className="space-y-1.5">
                                {block.items.map((item, ii) => (
                                  <li
                                    key={ii}
                                    className="flex items-start gap-2.5 text-text-gray text-sm leading-relaxed"
                                  >
                                    <span className="text-accent mt-1.5 shrink-0">
                                      &bull;
                                    </span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}

                        {/* Apply button */}
                        <button
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              position: job.title,
                            }));
                            setShowForm(true);
                          }}
                          className="mt-4 inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-6 py-2.5 rounded-lg text-sm uppercase tracking-wider transition-colors"
                        >
                          <FiSend size={14} />
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative max-h-[90vh] overflow-y-auto"
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
                Apply for Position
              </h3>
              <p className="text-text-gray text-sm mb-6">
                {formData.position || "Submit your application"}
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <FiCheckCircle
                    size={48}
                    className="text-green-500 mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold text-primary mb-2">
                    Application Submitted!
                  </h4>
                  <p className="text-text-gray text-sm">
                    Thank you for your interest. Our HR team will review your
                    application and contact you if you match the current needs.
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
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Your Phone No <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Enter Your Phone No."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Applying For <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.position}
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Enter Applying Position"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">
                      Upload File <span className="text-red-500">*</span>
                    </label>
                    <label className="border-2 border-dashed border-gray-300 rounded-lg p-5 text-center hover:border-accent/50 transition-colors cursor-pointer block">
                      <FiUpload
                        size={24}
                        className="text-text-gray mx-auto mb-2"
                      />
                      <p className="text-text-gray text-sm">
                        Click to upload your CV
                      </p>
                      <p className="text-text-gray text-xs mt-1">
                        Maximum file size: 2 MB
                      </p>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/80 text-white font-semibold py-3 rounded-lg uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    Submit
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
