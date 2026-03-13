import Head from "next/head";
import PageHeroBanner from "@/components/PageHeroBanner";
import TableOfContents from "@/components/blog/TableOfContents";
import AuthorBio from "@/components/blog/AuthorBio";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { newsPosts, getNewsBySlug, getRelatedNews } from "@/lib/newsData";

export async function getStaticPaths() {
  const paths = newsPosts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getNewsBySlug(params.slug);
  const related = getRelatedNews(params.slug, 3);
  return { props: { post, related } };
}

export default function NewsDetail({ post, related }) {
  return (
    <>
      <Head>
        <title>{post.title} | KDU News</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <PageHeroBanner
        title={post.title}
        backgroundImage={post.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media", href: "#" },
          { label: "News", href: "/media/news" },
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

      <RelatedPosts posts={related} basePath="/media/news" />
    </>
  );
}
