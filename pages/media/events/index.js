import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FiMapPin, FiCalendar, FiArrowRight } from "react-icons/fi";
import PageHeroBanner from "@/components/PageHeroBanner";
import { eventCategories, events, getEventsByCategory } from "@/lib/eventData";

export default function EventsIndex() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredEvents = getEventsByCategory(activeCategory);

  const upcoming = filteredEvents.filter((e) => e.status === "upcoming");
  const past = filteredEvents.filter((e) => e.status === "past");

  return (
    <>
      <Head>
        <title>Events | KDU</title>
        <meta
          name="description"
          content="Discover upcoming maritime exhibitions, training workshops, conferences, and webinars hosted or attended by KDU Group."
        />
      </Head>

      <PageHeroBanner
        title="Events"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media", href: "#" },
          { label: "Events" },
        ]}
      />

      {/* Category Filter */}
      <div className="sticky top-[100px] z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
            {eventCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-section-bg text-text-gray hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      {upcoming.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Don&apos;t Miss Out
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Upcoming Events
              </h2>
              <div className="w-16 h-1 bg-accent" />
            </div>

            <div className="space-y-6">
              {upcoming.map((event) => (
                <Link
                  key={event.slug}
                  href={`/media/events/${event.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div
                    className="relative h-64 lg:h-auto overflow-hidden"
                    style={{
                      backgroundImage: `url('${event.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent lg:hidden" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 bg-section-bg p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-text-gray">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar size={14} className="text-accent" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiMapPin size={14} className="text-accent" />
                        {event.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3 leading-tight group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-text-gray leading-relaxed mb-4">
                      {event.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider group-hover:text-accent transition-colors">
                      View Details
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
      )}

      {/* Past Events */}
      {past.length > 0 && (
        <section className="py-16 bg-section-bg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Look Back
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Past Events
              </h2>
              <div className="w-16 h-1 bg-accent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {past.map((event) => (
                <Link
                  key={event.slug}
                  href={`/media/events/${event.slug}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-gray-600 text-white text-xs font-bold px-3 py-1.5 rounded">
                      {event.date}
                    </div>
                    <div className="absolute top-4 right-4 bg-primary/90 text-white text-xs font-semibold px-3 py-1.5 rounded uppercase tracking-wider">
                      {event.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-text-gray text-xs mb-3">
                      <FiMapPin size={12} className="text-accent" />
                      {event.location}
                    </div>
                    <h3 className="text-primary font-bold text-base mb-3 leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-text-gray text-sm leading-relaxed line-clamp-3">
                      {event.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredEvents.length === 0 && (
        <section className="py-20 bg-white">
          <div className="text-center">
            <p className="text-text-gray text-lg">
              No events found in this category.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
