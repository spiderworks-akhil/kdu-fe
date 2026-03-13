import { useState } from "react";
import Head from "next/head";
import PageHeroBanner from "@/components/PageHeroBanner";
import BlogCard from "@/components/blog/BlogCard";
import { newsCategories, newsPosts, getNewsByCategory } from "@/lib/newsData";

export default function NewsIndex() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredPosts = getNewsByCategory(activeCategory);

  return (
    <>
      <Head>
        <title>News | KDU</title>
        <meta
          name="description"
          content="Stay updated with the latest news, announcements, and press releases from KDU Group — your trusted maritime technology partner."
        />
      </Head>

      <PageHeroBanner
        title="Latest News"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media", href: "#" },
          { label: "News" },
        ]}
      />

      {/* Category Filter */}
      <div className="sticky top-[100px] z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
            {newsCategories.map((cat) => (
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} basePath="/media/news" />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-gray text-lg">
                No news found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
