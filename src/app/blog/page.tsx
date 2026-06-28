import type {Metadata} from "next";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {formatPostDate, wisp} from "@/lib/wisp";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {absolute: "Blog | Lulu Web Studio"},
  description:
    "Read Lulu Web Studio articles on custom website development, SEO, design, ecommerce, and digital growth.",
  alternates: {canonical: "/blog"},
};

async function getPosts() {
  try {
    const result = await wisp.getPosts({limit: "all"});
    return result.posts;
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

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
                const date = formatPostDate(post.publishedAt ?? post.createdAt);

                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-colors hover:border-neutral-900"
                  >
                    <div
                      className="min-h-48 bg-neutral-100 bg-cover bg-center"
                      style={post.image ? {backgroundImage: `url(${post.image})`} : undefined}
                    />
                    <div className="flex flex-1 flex-col p-7">
                      <div className="mb-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag.id}
                            className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                          >
                            {tag.name}
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
                The blog is connected to Wisp and ready for publishing. New posts will appear
                here automatically as soon as they are published.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

