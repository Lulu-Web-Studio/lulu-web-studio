import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {formatPostDate, getAllPosts} from "@/lib/blog";

const title = "Blog — Web Design, SEO & Digital Growth Insights";
const description =
  "Read Lulu Web Studio articles on custom website development, SEO, design, ecommerce, and digital growth — practical thinking for growing businesses.";

export const metadata: Metadata = {
  title: {absolute: title},
  description,
  alternates: {canonical: "/blog"},
  openGraph: {
    type: "website",
    url: "/blog",
    title,
    description,
    images: [{url: "/og-image.png", width: 1200, height: 630, alt: "Lulu Web Studio Blog"}],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <p className="uppercase text-xs sm:text-sm tracking-widest text-white/60 mb-5">
          Lulu Web Studio Blog
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl">
          Notes on websites, SEO, and digital growth
        </h1>
        <p className="mt-8 text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
          Practical thinking for businesses planning better websites, sharper search strategy,
          and digital systems that actually support growth.
        </p>
      </header>

      <section className="relative z-10 rounded-t-[50px] bg-white text-black py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const date = formatPostDate(post.publishedAt);

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-colors hover:border-neutral-900"
                  >
                    <div className="relative min-h-48 bg-neutral-100">
                      {post.image && (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <div className="mb-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-2xl font-bold leading-tight group-hover:underline">
                        {post.title}
                      </h2>
                      {post.description && (
                        <p className="mt-4 text-neutral-600 leading-relaxed">
                          {post.description}
                        </p>
                      )}
                      <div className="mt-auto pt-8 flex items-center justify-between text-sm text-neutral-500">
                        <span>{date}</span>
                        <span className="inline-flex items-center gap-1 text-neutral-900">
                          Read
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-200 bg-neutral-50 p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Blog posts are coming soon
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Drop a markdown file in <code>content/blog</code> and it will appear
                here automatically on the next deploy.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
