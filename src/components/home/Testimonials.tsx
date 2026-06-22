import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {getAllTestimonials} from "@/data/testimonials";

const SITE_URL = "https://www.luluwebstudio.com";

function buildTestimonialsJsonLd() {
  const testimonials = getAllTestimonials();
  return {
    "@context": "https://schema.org",
    "@graph": testimonials.map((t) => ({
      "@type": "Review",
      itemReviewed: {"@id": `${SITE_URL}/#business`},
      reviewRating: {"@type": "Rating", ratingValue: "5", bestRating: "5"},
      author: {"@type": "Person", name: t.author},
      reviewBody: t.quote,
      datePublished: t.datePublished,
    })),
  };
}

export default function Testimonials() {
  const testimonials = getAllTestimonials();

  return (
    <section className="bg-black text-white py-20 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(buildTestimonialsJsonLd())}}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <p className="uppercase text-xs sm:text-sm tracking-widest text-white/60 mb-4">
            What clients say
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Trusted by US businesses building real things
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => {
            const content = (
              <>
                <p className="text-lg leading-relaxed text-white/90 mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="text-white/70">
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-sm">{t.role}</div>
                  {t.caseStudySlug && (
                    <div className="mt-4 inline-flex items-center gap-1 text-sm text-white/80 group-hover:text-white transition-colors">
                      Read the case study
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  )}
                </footer>
              </>
            );

            const className =
              "group flex flex-col h-full rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 hover:border-white/30 transition-colors";

            return t.caseStudySlug ? (
              <Link key={t.id} href={`/projects/${t.caseStudySlug}`} className={className}>
                {content}
              </Link>
            ) : (
              <blockquote key={t.id} className={className}>
                {content}
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}
