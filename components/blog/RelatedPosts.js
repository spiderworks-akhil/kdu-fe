import BlogCard from "./BlogCard";

export default function RelatedPosts({ posts, basePath = "/media/blogs" }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            Keep Reading
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Related Posts
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} basePath={basePath} />
          ))}
        </div>
      </div>
    </section>
  );
}
