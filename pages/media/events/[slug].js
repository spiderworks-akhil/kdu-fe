import Head from "next/head";
import Link from "next/link";
import {
  FiMapPin,
  FiCalendar,
  FiCheckCircle,
  FiArrowRight,
  FiExternalLink,
} from "react-icons/fi";
import PageHeroBanner from "@/components/PageHeroBanner";
import { events, getEventBySlug, getRelatedEvents } from "@/lib/eventData";

export async function getStaticPaths() {
  const paths = events.map((e) => ({
    params: { slug: e.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const event = getEventBySlug(params.slug);
  const related = getRelatedEvents(params.slug, 3);
  return { props: { event, related } };
}

export default function EventDetail({ event, related }) {
  const isUpcoming = event.status === "upcoming";

  return (
    <>
      <Head>
        <title>{event.title} | Events | KDU</title>
        <meta name="description" content={event.excerpt} />
      </Head>

      <PageHeroBanner
        title={event.title}
        backgroundImage={event.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media", href: "#" },
          { label: "Events", href: "/media/events" },
          { label: event.title },
        ]}
      />

      {/* Event Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider ${
                    isUpcoming
                      ? "bg-accent/10 text-accent"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {isUpcoming ? "Upcoming" : "Past Event"}
                </span>
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                  {event.category}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                {event.title}
              </h2>

              <p className="text-text-gray leading-relaxed text-base md:text-lg mb-10">
                {event.description}
              </p>

              {/* Highlights */}
              {event.highlights && event.highlights.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-primary mb-5">
                    {isUpcoming ? "What to Expect" : "Event Highlights"}
                  </h3>
                  <ul className="space-y-3">
                    {event.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FiCheckCircle
                          size={18}
                          className="text-accent shrink-0 mt-0.5"
                        />
                        <span className="text-text-gray leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-section-bg rounded-xl p-8 sticky top-[120px]">
                <h3 className="text-primary font-bold text-lg mb-6">
                  Event Details
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <FiCalendar
                      size={20}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-xs text-text-gray uppercase tracking-wider mb-1">
                        Date
                      </p>
                      <p className="text-primary font-semibold text-sm">
                        {event.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiMapPin
                      size={20}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-xs text-text-gray uppercase tracking-wider mb-1">
                        Location
                      </p>
                      <p className="text-primary font-semibold text-sm">
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>

                {isUpcoming && event.registrationUrl && (
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-6 py-3.5 rounded-lg uppercase tracking-wider transition-colors"
                  >
                    Register Now
                    <FiExternalLink size={16} />
                  </a>
                )}

                <Link
                  href="/contact"
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg uppercase tracking-wider transition-colors text-sm"
                >
                  Contact Us
                  <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {related.length > 0 && (
        <section className="py-20 bg-section-bg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Explore More
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Other Events
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((evt) => (
                <Link
                  key={evt.slug}
                  href={`/media/events/${evt.slug}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1.5 rounded ${
                        evt.status === "upcoming" ? "bg-accent" : "bg-gray-600"
                      }`}
                    >
                      {evt.date}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-text-gray text-xs mb-3">
                      <FiMapPin size={12} className="text-accent" />
                      {evt.location}
                    </div>
                    <h3 className="text-primary font-bold text-base mb-2 leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                      {evt.title}
                    </h3>
                    <p className="text-text-gray text-sm leading-relaxed line-clamp-2">
                      {evt.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
