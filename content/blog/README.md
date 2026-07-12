# Writing a blog post

Add a new `.md` file in this folder. The filename (without `.md`) becomes the URL slug — `my-post.md` publishes at `/blog/my-post`.

## Frontmatter

```markdown
---
title: "Your Post Title"
description: "One or two sentences for previews, meta description, and social cards."
publishedAt: "2026-07-10"
tags: ["Tag One", "Tag Two"]
---

Your post content starts here, written in plain markdown.
```

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Used as the page `<h1>` and meta title. |
| `publishedAt` | yes | ISO date (`YYYY-MM-DD`). Controls sort order (newest first) everywhere. |
| `description` | no | Shown on the blog index, used for meta description, OG, and Twitter cards. |
| `image` | no | Local path under `/public`, e.g. `/images/blog/my-post.jpg`. |
| `tags` | no | Array of short labels, shown as pills. |
| `author` | no | Defaults to "Lulu Web Studio". |
| `updatedAt` | no | ISO date. Defaults to `publishedAt`. |
| `draft` | no | Set `true` to hide the post from the blog index, sitemap, and RSS feed while still being able to preview it locally at its URL in `npm run dev`. Drafts 404 in production. Remove the flag (or delete it) when ready to publish. |

## Workflow

1. Write the `.md` file here (Claude Code / Codex can draft the whole thing).
2. Preview locally with `npm run dev` at `/blog/<slug>`.
3. Commit and push — the post goes live on the next deploy.

No CMS, no database, no build step beyond a normal deploy.
