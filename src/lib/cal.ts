export type CalEventKey = "booking" | "debugging";

export interface CalEventOption {
  key: CalEventKey;
  title: string;
  eyebrow: string;
  description: string;
  priceLabel: string;
  durationLabel: string;
  eventSlug?: string;
}

const CAL_BASE_URL = "https://cal.com";

export const calEventOptions: CalEventOption[] = [
  {
    key: "booking",
    title: "General Project Call",
    eyebrow: "Free consultation",
    description:
      "Talk through a website, app, AI integration, SEO need, automation idea, or digital project before we map the next step.",
    priceLabel: "Free",
    durationLabel: "Discovery call",
    eventSlug: process.env.NEXT_PUBLIC_CAL_BOOKING_EVENT?.trim(),
  },
  {
    key: "debugging",
    title: "Debugging Call",
    eyebrow: "Paid working session",
    description:
      "Bring the broken app, AI-generated project, weird bug, or stuck feature and we will work through it together.",
    priceLabel: "Paid",
    durationLabel: "Hands-on help",
    eventSlug: process.env.NEXT_PUBLIC_CAL_DEBUGGING_EVENT?.trim(),
  },
];

export function getCalEventUrl(eventSlug?: string, embed = true) {
  const username = process.env.NEXT_PUBLIC_CAL_USERNAME?.trim();
  const slug = eventSlug?.trim();

  if (!username || !slug) return null;

  try {
    const url = new URL(
      `${CAL_BASE_URL}/${username.replace(/^\/+|\/+$/g, "")}/${slug.replace(/^\/+|\/+$/g, "")}`,
    );

    if (embed) {
      url.searchParams.set("embed", "true");
    }

    return url.toString();
  } catch {
    return null;
  }
}
