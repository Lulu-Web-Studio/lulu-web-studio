import {ArrowUpRight, Star} from "lucide-react";

const GOOGLE_REVIEW_URL = "https://g.page/r/CTaaOsUeBiuHEAI/review";

export default function ContactReview() {
  return (
    <section
      aria-labelledby="google-review-heading"
      className="bg-black px-6 py-24 text-white md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl border-y border-white/15 py-12 md:py-16">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)] lg:gap-20">
          <div>
            <div className="mb-8 flex gap-2" aria-hidden="true">
              {Array.from({length: 5}).map((_, index) => (
                <Star
                  key={index}
                  className="size-6 fill-[#c9fd74] text-[#c9fd74]"
                />
              ))}
            </div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-white/55 sm:text-sm">
              Google reviews
            </p>
            <h2
              id="google-review-heading"
              className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Worked with us?
              <br />
              <span className="text-white/55">Share the experience.</span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              Your Google review helps other business owners feel confident
              choosing Lulu Web Studio for web design, development, and SEO.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex w-full items-center justify-between rounded-2xl bg-[#c9fd74] px-6 py-5 text-lg font-semibold text-black transition-colors hover:bg-white sm:w-fit sm:min-w-80"
            >
              Leave a Google review
              <ArrowUpRight className="size-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
