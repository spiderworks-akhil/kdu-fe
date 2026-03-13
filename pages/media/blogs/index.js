import { useState } from "react";
import Head from "next/head";
import BlogHeroBanner from "@/components/PageHeroBanner";
import BlogCard from "@/components/blog/BlogCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { blogPosts, getPostsByCategory } from "@/lib/blogData";

export default function BlogsIndex() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredPosts = getPostsByCategory(activeCategory);

  return (
    <>
      <Head>
        <title>Blogs | KDU</title>
        <meta
          name="description"
          content="Explore the latest insights, news, and technical articles from KDU's maritime technology experts."
        />
      </Head>

      <BlogHeroBanner
        title="Our Blogs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media", href: "#" },
          { label: "Blogs" },
        ]}
      />

      <CategoryFilter
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-gray text-lg">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
