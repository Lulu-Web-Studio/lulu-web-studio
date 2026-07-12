import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/blog");
const DEFAULT_AUTHOR = "Lulu Web Studio";

export interface PostMeta {
  slug: string;
  title: string;
  description: string | null;
  image: string | null;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  draft: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

function readPostFile(slug: string): Post {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const {data, content} = matter(raw);

  if (!data.title || !data.publishedAt) {
    throw new Error(`Post "${slug}" is missing required frontmatter (title, publishedAt).`);
  }

  return {
    slug,
    title: data.title,
    description: data.description ?? null,
    image: data.image ?? null,
    tags: data.tags ?? [],
    author: data.author ?? DEFAULT_AUTHOR,
    publishedAt: new Date(data.publishedAt).toISOString(),
    updatedAt: new Date(data.updatedAt ?? data.publishedAt).toISOString(),
    draft: data.draft ?? false,
    content,
  };
}

function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md") && file.toLowerCase() !== "readme.md")
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getAllSlugs()
    .map((slug) => readPostFile(slug))
    .filter((post) => !post.draft)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .map(({content, ...meta}) => meta);
}

export function getPostBySlug(slug: string): Post | null {
  if (!getAllSlugs().includes(slug)) return null;
  return readPostFile(slug);
}

export function formatPostDate(date: Date | string | null) {
  if (!date) return null;

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
