import Link from "next/link";

export default function BlogCard({ post, basePath = "/media/blogs" }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <Link href={`${basePath}/${post.slug}`}>
        <div className="relative overflow-hidden h-52">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded">
            {post.date}
          </div>
          <div className="absolute top-4 right-4 bg-primary/90 text-white text-xs font-semibold px-3 py-1.5 rounded uppercase tracking-wider">
            {post.category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-primary font-bold text-base mb-3 leading-snug line-clamp-2 group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <p className="text-text-gray text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider hover:text-accent transition-colors inline-flex items-center gap-1">
            Read More
            <span className="group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
