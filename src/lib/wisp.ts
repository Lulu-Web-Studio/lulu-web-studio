import {buildWispClient} from "@wisp-cms/client";

export const WISP_BLOG_ID = process.env.NEXT_PUBLIC_WISP_BLOG_ID;

if (!WISP_BLOG_ID) {
  throw new Error("Missing NEXT_PUBLIC_WISP_BLOG_ID environment variable.");
}

export const wisp = buildWispClient({
  blogId: WISP_BLOG_ID,
});

export function formatPostDate(date: Date | string | null) {
  if (!date) return null;

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
