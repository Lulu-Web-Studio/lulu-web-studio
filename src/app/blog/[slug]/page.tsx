import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {ArrowUpRight} from "lucide-react";
import {formatPostDate, getAllPosts, getPostBySlug} from "@/lib/blog";

const SITE_URL = "https://www.luluwebstudio.com";

interface Params {
  slug: string;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({slug: post.slug}));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {title: "Post Not Found"};
  }

  const canonical = `/blog/${post.slug}`;
  const title = post.title;
  const description =
    post.description ?? "Read the latest from Lulu Web Studio on websites, SEO, and digital growth.";

  return {
    title: {absolute: title},
    description,
    alternates: {canonical},
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      images: post.image ? [{url: post.image, alt: post.title}] : undefined,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage(props: {
  params: Promise<Params>;
}) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  // Drafts aren't in generateStaticParams, so their URL still renders on
  // demand here — useful for previewing in `next dev`. Block that fallback
  // in production so an unpublished draft never becomes reachable.
  if (!post || (post.draft && process.env.NODE_ENV === "production")) {
    notFound();
  }

  const publishedDate = formatPostDate(post.publishedAt);
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image ? [post.image] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {"@id": `${SITE_URL}/#business`},
    mainEntityOfPage: pageUrl,
    url: pageUrl,
  };

  return (
    <article className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />

      <header className="max-w-5xl mx-auto px-6 lg:px-12 pt-32 md:pt-44 pb-16">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span>&larr;</span>
          <span>Back to Blog</span>
        </Link>

        <p className="uppercase text-xs sm:text-sm tracking-widest text-white/60 mb-5">
          {publishedDate ?? "Lulu Web Studio"}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          {post.title}
        </h1>
        {post.description && (
          <p className="mt-8 text-lg md:text-xl text-white/75 max-w-3xl leading-relaxed">
            {post.description}
          </p>
        )}
        {post.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/75"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {post.image && (
        <div className="max-w-6xl mx-auto px-6 lg:px-12 pb-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-white/10">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
        </div>
      )}

      <section className="rounded-t-[50px] bg-white text-black py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-0">
          <div className="blog-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-20 rounded-3xl bg-black p-10 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want a website that works this hard?
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Lulu Web Studio builds custom websites, SEO systems, and digital tools for
              businesses ready to grow.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-black hover:bg-white/90 transition-colors"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
