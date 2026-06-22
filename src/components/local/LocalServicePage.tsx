import Link from "next/link";
import {ArrowUpRight, Check} from "lucide-react";
import type {City} from "@/data/cities";

const SITE_URL = "https://www.luluwebstudio.com";

export type LocalServiceKind = "custom-website-development" | "seo";

type ServiceCopy = {
  heading: string;
  intro: string;
  bullets: string[];
  faqs: {q: string; a: string}[];
  relatedServiceSlug: string;
  relatedServiceLabel: string;
  serviceSchemaName: string;
  serviceSchemaDescription: string;
};

const COPY: Record<LocalServiceKind, (city: City) => ServiceCopy> = {
  "custom-website-development": (city) => ({
    heading: `Web Design in ${city.name}, ${city.stateAbbr}`,
    intro: `Lulu Web Studio designs and builds custom websites for ${city.audienceLabel}. From small local shops to growing companies across ${city.metroDescription}, we build fast, mobile-first sites that rank on Google and turn visitors into customers.`,
    bullets: [
      `Custom design tailored to your ${city.name} brand and audience`,
      "Mobile-first development and accessibility built in",
      "Core Web Vitals optimization for fast load times",
      "On-page SEO baked into every page (titles, schema, internal links)",
      "Google Business Profile, local schema, and citation setup",
      "Ongoing support, hosting, and analytics",
    ],
    faqs: [
      {
        q: `How much does a custom website cost in ${city.name}?`,
        a: `Most ${city.name} small-business sites we build range from $4,000 to $15,000 depending on scope — number of pages, custom features, e-commerce, and integrations. We provide a fixed quote after a short discovery call.`,
      },
      {
        q: `How long does it take to build a website?`,
        a: `A standard marketing site for a ${city.name} business typically takes 4–8 weeks from kickoff to launch. More complex builds — e-commerce, custom apps, multi-language — take 8–16 weeks.`,
      },
      {
        q: `Do you work with businesses outside of ${city.name}?`,
        a: `Yes. We work with clients across ${city.metroDescription} and throughout the United States. Most of our work is remote, with optional on-site visits for ${city.name}-based clients.`,
      },
      {
        q: `What technology do you build on?`,
        a: `We default to Next.js, React, and Tailwind CSS hosted on Vercel — the same stack used by some of the fastest sites on the web. For clients who need a CMS, we add Sanity or Shopify. We can also work in WordPress, Wix, and Squarespace.`,
      },
    ],
    relatedServiceSlug: "seo",
    relatedServiceLabel: "SEO",
    serviceSchemaName: `Web Design in ${city.name}, ${city.stateAbbr}`,
    serviceSchemaDescription: `Custom web design and development for ${city.audienceLabel}. Fast, mobile-first websites optimized for SEO and conversion.`,
  }),
  seo: (city) => ({
    heading: `SEO Services in ${city.name}, ${city.stateAbbr}`,
    intro: `Lulu Web Studio runs technical, on-page, and local SEO campaigns for ${city.audienceLabel}. We help companies in ${city.metroDescription} climb the rankings, capture qualified search traffic, and turn it into real revenue.`,
    bullets: [
      `Local SEO targeting ${city.name} metro keywords and the map pack`,
      "Technical audits — Core Web Vitals, crawlability, structured data",
      "On-page optimization for every existing page",
      "Content strategy and topic clusters tied to your services",
      "Google Business Profile management and review acquisition",
      "Monthly reporting tied to leads, not just rankings",
    ],
    faqs: [
      {
        q: `How much does SEO cost in ${city.name}?`,
        a: `Most ${city.name} clients invest $1,500–$5,000 per month for ongoing SEO depending on competition and goals. We also offer one-time audits starting at $1,500 if you just want to know where you stand.`,
      },
      {
        q: `How long until I see results from SEO?`,
        a: `Local SEO often produces results in 60–90 days. Competitive national keywords typically take 6–12 months of consistent work to move meaningfully. We report transparently every month so you always see progress.`,
      },
      {
        q: `Do you guarantee #1 rankings?`,
        a: `No serious SEO agency guarantees rankings — anyone who does is lying. We do guarantee transparent reporting, consistent technical and content work, and steady improvement in qualified organic traffic.`,
      },
      {
        q: `Will SEO work for my industry?`,
        a: `We've run SEO for healthcare, contractors, non-profits, real estate, and e-commerce in ${city.name} and beyond. If your customers use Google to find services like yours, SEO will work — the only question is how long and how much investment.`,
      },
    ],
    relatedServiceSlug: "website-design",
    relatedServiceLabel: "Web Design",
    serviceSchemaName: `SEO Services in ${city.name}, ${city.stateAbbr}`,
    serviceSchemaDescription: `Local, technical, and on-page SEO services for ${city.audienceLabel}. Higher rankings, more qualified traffic, more leads.`,
  }),
};

interface LocalServicePageProps {
  kind: LocalServiceKind;
  city: City;
}

export function buildLocalServiceJsonLd({kind, city}: LocalServicePageProps) {
  const copy = COPY[kind](city);
  const pageUrl = `${SITE_URL}/${kind}/${city.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: copy.serviceSchemaName,
        description: copy.serviceSchemaDescription,
        url: pageUrl,
        provider: {"@id": `${SITE_URL}/#business`},
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: {"@type": "State", name: city.state},
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: copy.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {"@type": "Answer", text: faq.a},
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {"@type": "ListItem", position: 1, name: "Home", item: SITE_URL},
          {
            "@type": "ListItem",
            position: 2,
            name: kind === "custom-website-development" ? "Web Design" : "SEO",
            item: `${SITE_URL}/${kind}`,
          },
          {"@type": "ListItem", position: 3, name: city.name, item: pageUrl},
        ],
      },
    ],
  };
}

export default function LocalServicePage({kind, city}: LocalServicePageProps) {
  const copy = COPY[kind](city);
  const otherKind: LocalServiceKind = kind === "custom-website-development" ? "seo" : "custom-website-development";
  const otherKindLabel = otherKind === "seo" ? "SEO" : "Web Design";

  return (
    <article className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildLocalServiceJsonLd({kind, city})),
        }}
      />

      <header className="max-w-5xl mx-auto px-6 lg:px-12 pt-32 md:pt-40 pb-12">
        <p className="uppercase text-xs sm:text-sm tracking-widest text-white/60 mb-4">
          {city.name}, {city.stateAbbr} · {kind === "custom-website-development" ? "Web Design" : "SEO"}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          {copy.heading}
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
          {copy.intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black text-sm sm:text-base hover:bg-white/90 transition-colors"
          >
            Get a Free Quote
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href={`/services/${kind === "custom-website-development" ? "website-design" : "seo"}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-white text-sm sm:text-base hover:border-white transition-colors"
          >
            Learn about our {kind === "custom-website-development" ? "web design" : "SEO"} process
          </Link>
        </div>
      </header>

      {/* What's included */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          What&apos;s included
        </h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {copy.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-4 rounded-2xl bg-white/5 border border-white/10 p-5"
            >
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-black" />
              </div>
              <span className="text-white/90">{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          {city.name} FAQs
        </h2>
        <div className="space-y-6">
          {copy.faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
              <p className="text-white/80 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-link to sibling service */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-20">
        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10">
          <p className="text-white/70 mb-2 text-sm uppercase tracking-widest">
            Also offered in {city.name}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {otherKindLabel} in {city.name}
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl">
            Pairing {kind === "custom-website-development" ? "a new website" : "SEO"} with{" "}
            {kind === "custom-website-development" ? "ongoing SEO" : "a modern website"} is how most of
            our {city.name} clients compound results. See how we can help.
          </p>
          <Link
            href={`/${otherKind}/${city.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black hover:bg-white/90 transition-colors"
          >
            {otherKindLabel} in {city.name}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-24">
        <div className="rounded-3xl bg-white text-black p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to grow your {city.name} business?
          </h2>
          <p className="text-neutral-600 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll get back to you within one business day.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-white font-medium hover:bg-neutral-800 transition-colors"
          >
            Start the Conversation
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}

export function getLocalCopy(kind: LocalServiceKind, city: City) {
  return COPY[kind](city);
}
