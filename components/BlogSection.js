const blogs = [
  {
    title: "DM100 S-VDR G3 and DM100 VDR G3 – Next Generation Voyage Data Recording",
    date: "January 15, 2024",
    excerpt:
      "Explore the latest in voyage data recording technology with the DM100 series, featuring enhanced storage and compliance capabilities.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
  },
  {
    title: "AGC 150 Automatic Transfer Switch – Reliable Power Switching Solutions",
    date: "December 10, 2023",
    excerpt:
      "The DEIF AGC 150 offers seamless automatic power transfer switching for marine and industrial applications with advanced monitoring.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
  },
  {
    title: "NAVIGAT 100 vs 200 Gyrocompass – Complete Comparison Guide",
    date: "November 22, 2023",
    excerpt:
      "A detailed comparison between the NAVIGAT 100 and 200 gyrocompass systems, helping you choose the right solution for your vessel.",
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">
            Our Blogs
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded">
                  {blog.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-primary font-bold text-base mb-3 leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>
                <p className="text-text-gray text-sm leading-relaxed mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <a
                  href="#"
                  className="text-primary font-semibold text-sm uppercase tracking-wider hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  Read More
                  <span className="group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
