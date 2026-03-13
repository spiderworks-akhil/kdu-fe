import Head from "next/head";
import BlogHeroBanner from "@/components/PageHeroBanner";
import TableOfContents from "@/components/blog/TableOfContents";
import AuthorBio from "@/components/blog/AuthorBio";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { blogPosts, getBlogBySlug, getRelatedPosts } from "@/lib/blogData";

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getBlogBySlug(params.slug);
  const related = getRelatedPosts(params.slug, 3);
  return { props: { post, related } };
}

export default function BlogDetail({ post, related }) {
  return (
    <>
      <Head>
        <title>{post.title} | KDU Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <BlogHeroBanner
        title={post.title}
        backgroundImage={post.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media", href: "#" },
          { label: "Blogs", href: "/media/blogs" },
          { label: post.title },
        ]}
        meta={{
          date: post.date,
          author: post.author.name,
          category: post.category,
        }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Table of Contents - left sidebar */}
            <div className="lg:col-span-3">
              <TableOfContents sections={post.sections} />
            </div>

            {/* Content */}
            <div className="lg:col-span-9">
              <div className="max-w-none">
                {post.sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="mb-12 scroll-mt-[120px]"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      {section.heading}
                    </h2>
                    <div className="w-12 h-1 bg-accent mb-6" />
                    <p className="text-text-gray leading-relaxed text-base md:text-lg">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Author Bio */}
              <div className="mt-16 pt-10 border-t border-gray-200">
                <AuthorBio author={post.author} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedPosts posts={related} />
    </>
  );
}
