import RSS from "rss";
import {getAllPosts} from "@/lib/blog";

const SITE_URL = "https://www.luluwebstudio.com";

export const dynamic = "force-static";

export function GET() {
  const feed = new RSS({
    title: "Lulu Web Studio Blog",
    description: "Notes on websites, SEO, and digital growth.",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/feed.xml`,
    language: "en",
  });

  getAllPosts().forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description ?? "",
      url: `${SITE_URL}/blog/${post.slug}`,
      guid: `${SITE_URL}/blog/${post.slug}`,
      categories: post.tags,
      author: post.author,
      date: post.publishedAt,
    });
  });

  return new Response(feed.xml({indent: true}), {
    headers: {"Content-Type": "application/rss+xml; charset=utf-8"},
  });
}
