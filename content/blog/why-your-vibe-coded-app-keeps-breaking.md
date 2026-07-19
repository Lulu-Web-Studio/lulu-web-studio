---
title: "Why Your Vibe-Coded App Keeps Breaking (And What Actually Fixes It)"
description: "The specific technical reasons AI-built apps from Lovable, Bolt, Replit, and Cursor start breaking as they grow, and what fixing them actually involves."
publishedAt: "2026-07-19"
image: "/images/blog/vibe-coded-app-debugging.jpg"
tags: ["Vibe Coding", "AI Development", "Debugging"]
---

Tools like Lovable, Bolt, Replit, Cursor, v0, and Base44 are good at one specific thing: turning a description into a working app fast. They are not good at holding the whole architecture of that app in mind while they patch it. That gap is where most vibe-coded apps start breaking, and it is a technical problem with specific causes, not a vague "AI is unreliable" problem.

Here are the actual failure modes I run into most, and what fixing each one involves.

## The database and the UI drift apart

You ask the AI to add a field to a form, a "notes" field, a status dropdown, whatever. The AI adds the input to the UI and wires it into the submit handler. What it often does not do reliably is update the database schema, the API response type, and every other place that reads that record.

The form saves. Nothing errors. The field just silently does not persist, or persists but never shows up on the page that lists those records, because that page was built against the old shape of the data.

In plain English, the app screen and the database are no longer talking about the same thing. Developers usually call this a schema-vs-code sync problem. Fixing it means comparing what the database actually stores against what every screen assumes it stores, not just checking the one screen where you noticed the bug.

## Row-level security is either missing or copy-pasted into uselessness

Most of these tools default to Supabase or a similar Postgres backend with row-level security, usually shortened to RLS. In plain terms, RLS is the rulebook that decides which rows of data each user is allowed to see or change. It is the difference between "users can only see their own data" and "any logged-in user can query anyone's records by changing an ID in the request."

The common patterns I see: RLS never turned on because the tutorial the AI was trained on skipped it, or a policy copy-pasted across every table with `USING (true)`, which turns the security check into a no-op. The app looks and works fine in testing, because you're testing as one user against your own data. It is not fine the moment a second user exists.

This is not a code review catch, either. You have to actually query the database as a different, unprivileged user and see what comes back.

## API keys and service-role credentials end up in client code

AI tools frequently write the fastest path to "the API call works," which sometimes means putting a secret key, a service-role key, or a payment provider's secret key directly into a client-side file because that is what made the sample code in the prompt response run. Client-side means code that ships to the browser. If a secret key is there, anyone who opens dev tools can read that key out of the page source.

Checking for this is a straightforward grep across the codebase for key-shaped strings and service-role usage, but it has to actually be done, because nothing about the app's visible behavior tells you it's wrong.

## One bug fix quietly breaks a different screen

This is the "fixed one thing, broke three things" pattern people describe most often. It happens because a lot of vibe-coded apps have the same logic implemented more than once, once inline in the component where it was first needed, then copy-pasted with small variations into two or three other components that needed something similar, instead of pulled into one shared function.

When a bug gets fixed by editing the copy in file A, files B and C still have the old, broken version. The AI does not necessarily know B and C exist, because nothing pointed it there, so it fixes exactly what it was shown and nothing else. The actual fix is finding every duplicated copy of that logic and either fixing all of them or consolidating them into one shared place so this stops happening again.

## Nothing catches the failure until a user hits it

Most vibe-coded apps have no error boundaries, no logging, and no automated tests. When something breaks, the first sign is a user reporting a blank screen or a silent failure, not a monitoring alert. That means every bug gets found in production, by a real user, after it already happened.

This one is less "find the bug" and more "make the next bug visible before a customer finds it." That usually means basic error boundaries around key pages, plus server-side logging on the API routes that actually matter: auth, payments, and anything that writes data.

## It works on localhost, then breaks the moment it's live

This is the other version of "it worked yesterday." On your machine, every environment variable is set, you're the only one hitting the database, and a file you write to disk is still there five seconds later. None of that is guaranteed once the app is actually deployed.

The specific ways this shows up: an environment variable that exists in your local `.env` file but was never added to the hosting provider's dashboard, so a feature works locally and throws immediately in production. Or a function that writes an uploaded file, a generated PDF, or a cache to disk, which works locally but silently fails or vanishes in production because most serverless hosting gives you a filesystem that's read-only or wiped between requests. Or enough people use the app at once that you hit your database's connection limit, something that never shows up when you're the only one testing it.

None of this is something an AI tool catches by rereading the code, because the code is often fine on its own. It's the environment underneath it that's different, and nothing about local testing exposes that.

## Nothing stops one bad actor, or one busy day, from running up your bill

AI tools build API routes that work. They don't usually add rate limiting unless you specifically ask for it, and most people don't think to ask until after it's already a problem. A route that calls OpenAI, sends an email, or hits any paid third-party API with no limit on how often one user (or one script) can call it is exposed two ways: someone can hammer it and run up a usage-based bill fast, or it just falls over the first time real traffic shows up, because nothing about it was built to handle more than one request at a time.

This one is easy to miss in testing, specifically because you're the only person calling the route. It looks completely fine right up until it isn't.

## How to actually fix each one

If you want to check your own app before paying anyone, here's where to look, in order of how often each one bites people:

1. **Schema drift.** Open your database's table editor (Supabase, Postgres, or whatever you're on) side by side with your code's type definitions or API responses. For every field a form writes, confirm it has a matching column, and confirm every screen that reads that record was updated to include it. Don't trust "the form didn't error" as proof it saved correctly.
2. **RLS gaps.** Go into your RLS policies table by table. If RLS is turned off on a table containing user data, that is a security problem. If a policy reads `USING (true)`, that usually means the policy allows too much. Then actually test it: create a second test account and try to fetch another user's row through the app or a direct API call. If you get data back that isn't yours, that's the bug, usually fixed by writing a policy that filters on `auth.uid()` matching the row's owner column.
3. **Exposed keys.** Search your entire codebase for anything that looks like an API key or starts with common prefixes like `sk_` or `service_role` inside client-side files. In other words, look in files that ship to the browser, not server-only code. Anything found there needs to move to a server-side environment variable and be called through your own API route instead of directly from the browser.
4. **Duplicated logic.** Search for the function or block that had the bug you just fixed. If you find a second or third near-identical copy elsewhere in the codebase, that copy still has the old bug. Either patch every copy or, better, pull the logic into one shared function and have all three places call it.
5. **No visibility.** Wrap your key pages in error boundaries so a crash shows a message instead of a blank screen, and add basic server logs or an error tracking tool like Sentry on any route that touches auth, payments, or writes to the database. You want to hear about a failure before a user emails you about it.
6. **Environment parity.** Compare your local `.env` file against what's actually set in your hosting provider's dashboard, variable by variable. Then check every place your code writes a file — uploads, generated PDFs, caches — and confirm it's writing to a service built for it, like S3 or Supabase storage, instead of the local filesystem, which most serverless hosts don't persist between requests.
7. **No rate limiting.** Find every route that calls a paid API or does something expensive, and add a limit on how many times a single user or IP can call it in a given window. Most hosting providers and API gateways have a built-in way to do this that takes a few lines, not a rebuild.

None of this requires a rewrite. It requires actually reading the schema, the policies, and the code side by side instead of only reading the one screen where the symptom appeared.

## How to avoid these from the start

If you're still early in building with an AI tool, a few habits prevent most of the above before it happens:

- **Turn on RLS the moment you create a table**, before you add any real data to it, and write the actual policy at the same time instead of "I'll secure it before launch."
- **Never let the AI put a secret key in a client component.** If a prompt response includes an API key directly in frontend code, that's a sign to ask for a server-side route instead, not to ship it as-is.
- **When you ask the AI to fix a bug, also ask it "where else in the codebase is this same logic used?"** before accepting the fix. That one extra question catches most of the duplicate-copy problem before it ships.
- **Add error boundaries and basic logging early**, not at launch. It costs almost nothing to set up and it's the difference between finding a bug yourself and a user finding it for you.
- **Actually test as a second user account**, not just your own admin account, before you consider a feature done. Most access-control bugs are invisible until you do this.
- **Check environment variables and file writes against production before you call a feature done**, not after a user hits an error the moment it's deployed. "It works on my machine" is not the same claim as "it works once it's live."
- **Add rate limiting to any route that costs you money per call, the same day you build the route**, not after the bill spikes or the app falls over under real traffic.

None of these take much longer than building the feature the first time. They just have to happen at the same time as the feature, not after something breaks.

## Give the AI the context it doesn't have by default

The root cause behind most of the bugs above is the same one: the AI doesn't remember what it built last week, doesn't know your schema unless it's in front of it, and starts fresh most conversations. You can close a lot of that gap yourself, and it matters more than which tool you're using.

**Prompt with the specifics, not just the request.** "Add a notes field to this form" leaves the AI guessing at what else needs to change. "Add a notes field to this form, add the column to the `submissions` table, update the type it maps to, and check the admin list page that reads these records" tells it exactly where to look. Before accepting a fix, it also helps to ask directly: "what else in this codebase does something similar?" or "does this table have RLS, and what does the policy check?" Those aren't advanced questions, they just point the AI at the parts of the app it wouldn't otherwise check on its own.

**Use a project-specific rules or skills file instead of re-explaining yourself every session.** Claude Code supports a `CLAUDE.md` file per project, Cursor has `.cursorrules`, and other tools have their own version of the same idea: a standing set of instructions the AI reads before touching anything. Put your actual conventions in it — which tables have RLS and what the policy pattern looks like, where shared logic lives so it doesn't get re-implemented in a fourth file, which routes are server-only. Claude also supports "skills," which are reusable, packaged instructions for a recurring task ("whenever a form field is added, update the schema, the type, and the list view that reads it") that you write once and every future session actually follows. This is the single highest-leverage habit here — it turns "the AI doesn't know my architecture" into "the AI reads a file that describes my architecture first."

**Keep a running decision log somewhere outside the chat.** Conversations get summarized or disappear, and two weeks later nobody, including you, remembers why a table is structured a certain way or which component three other screens secretly depend on. A separate place for this — Obsidian, Notion, or even one markdown file committed to the repo — where you note "this table has RLS, policy filters on `auth.uid()`," or "this function is used in three places, check all of them before editing," gives you and any AI tool something to check instead of relying on memory of a conversation from two weeks ago. Obsidian works well for this specifically because it's just local markdown files, so a note can be pasted straight into a prompt or the whole folder can sit next to your project rules file.

None of this replaces actually reading the code. It just means the AI starts from something better than a guess, which is where most of the bugs above come from in the first place.

## What a real debugging pass looks like

If your app is already past the point where these are easy DIY checks, or if you don't want to be the one tracing schema drift across twenty tables, this is the same process I run when someone brings me a vibe-coded app.

I start by pulling the actual database schema and comparing it to what the code assumes. Then I check RLS policies against a low-privilege test account, search for exposed keys, trace duplicated logic across components, check environment variables and file handling against the actual production environment, add rate limiting where it's missing, and add logging where there currently is none.

It's not a single quick prompt, but it's also not a rewrite. It's the same process above, run end to end on a codebase that's never had it run before.

If you're seeing any of the specific patterns above in an app built with Lovable, Bolt, Replit, Cursor, v0, or Base44, I do this kind of debugging work through Lulu Web Studio. Details are on the [vibe code debugging page](/services/vibe-code-debugging), or you can [book a debugging call](/contact?event=debugging#book) directly.
