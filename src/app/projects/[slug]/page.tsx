import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {ArrowUpRight} from "lucide-react";
import {
  getProjectBySlug,
  getProjectsWithCaseStudies,
  type Project,
  type CaseStudy,
} from "@/data/projects";

const SITE_URL = "https://www.luluwebstudio.com";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return getProjectsWithCaseStudies().map((p) => ({slug: p.slug}));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project?.caseStudy) {
    return {title: "Project Not Found"};
  }

  const canonical = `/projects/${project.slug}`;
  const {caseStudy} = project;

  return {
    title: caseStudy.seoTitle,
    description: caseStudy.seoDescription,
    alternates: {canonical},
    openGraph: {
      type: "article",
      url: canonical,
      title: caseStudy.seoTitle,
      description: caseStudy.seoDescription,
      images: [{url: project.image, alt: project.title}],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.seoTitle,
      description: caseStudy.seoDescription,
      images: [project.image],
    },
  };
}

function buildCaseStudyJsonLd(project: Project & {slug: string; caseStudy: CaseStudy}) {
  const pageUrl = `${SITE_URL}/projects/${project.slug}`;
  const {caseStudy} = project;

  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: caseStudy.seoTitle,
      description: caseStudy.seoDescription,
      datePublished: `${caseStudy.year}-01-01`,
      image: `${SITE_URL}${project.image}`,
      url: pageUrl,
      author: {"@id": `${SITE_URL}/#business`},
      publisher: {"@id": `${SITE_URL}/#business`},
      mainEntityOfPage: pageUrl,
      about: {
        "@type": "Organization",
        name: caseStudy.client,
        url: project.href,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {"@type": "ListItem", position: 1, name: "Home", item: SITE_URL},
        {"@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects`},
        {"@type": "ListItem", position: 3, name: project.title, item: pageUrl},
      ],
    },
  ];

  if (caseStudy.testimonial) {
    graph.push({
      "@type": "Review",
      itemReviewed: {"@id": `${SITE_URL}/#business`},
      reviewRating: {"@type": "Rating", ratingValue: "5", bestRating: "5"},
      author: {"@type": "Person", name: caseStudy.testimonial.author},
      reviewBody: caseStudy.testimonial.quote,
      datePublished: `${caseStudy.year}-06-01`,
    });
  }

  return {"@context": "https://schema.org", "@graph": graph};
}

export default async function ProjectCaseStudyPage(props: {
  params: Promise<Params>;
}) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project?.slug || !project.caseStudy) {
    notFound();
  }

  const caseStudy = project.caseStudy;

  return (
    <article className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildCaseStudyJsonLd(project as Project & {slug: string; caseStudy: CaseStudy})
          ),
        }}
      />

      {/* Hero */}
      <header className="relative">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} — ${caseStudy.industry} website by Lulu Web Studio`}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 -mt-24 md:-mt-40 pb-20 md:pb-28 relative z-10">
          <p className="uppercase text-xs sm:text-sm tracking-widest text-white/60 mb-6">
            Case Study · {caseStudy.industry}
            {caseStudy.location ? ` · ${caseStudy.location}` : ""} · {caseStudy.year}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            {project.description}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-black text-sm sm:text-base hover:bg-white/90 transition-colors"
            >
              Visit Live Site
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-white text-sm sm:text-base hover:border-white transition-colors"
            >
              Start a Project Like This
            </Link>
          </div>
        </div>
      </header>

      {/* Results metrics */}
      {caseStudy.results.length > 0 && (
        <section className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 py-24 md:py-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Results</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {caseStudy.results.map((r) => (
              <div
                key={r.label}
                className="rounded-2xl bg-white/5 border border-white/10 p-10 md:p-12"
              >
                <div className="text-4xl md:text-5xl font-bold mb-4">{r.metric}</div>
                <div className="text-white/70 text-sm leading-relaxed">{r.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Problem + Approach */}
      <section className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 pb-24 md:pb-32 grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The Problem</h2>
          <p className="text-white/80 leading-relaxed text-lg">{caseStudy.problem}</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Approach</h2>
          <p className="text-white/80 leading-relaxed text-lg">{caseStudy.approach}</p>
        </div>
      </section>

      {/* Live site pages */}
      {caseStudy.siteLinks && caseStudy.siteLinks.length > 0 && (
        <section className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 pb-24 md:pb-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">Explore the Website</h2>
          <p className="text-white/70 leading-relaxed text-lg max-w-3xl mb-10">
            Explore the finished experience through key pages created for the practice.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {caseStudy.siteLinks.map((siteLink) => (
              <a
                key={siteLink.href}
                href={siteLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-white/5 border border-white/10 p-7 md:p-8 hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-6 mb-3">
                  <h3 className="text-lg font-semibold">{siteLink.title}</h3>
                  <ArrowUpRight className="w-5 h-5 flex-shrink-0 text-white/50 group-hover:text-white transition-colors" />
                </div>
                <p className="text-white/65 leading-relaxed">{siteLink.description}</p>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Tech stack */}
      {caseStudy.techStack.length > 0 && (
        <section className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 pb-24 md:pb-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {caseStudy.techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-3 text-sm bg-white/10 border border-white/10 rounded-full text-white/90"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 pb-24 md:pb-32">
          <blockquote className="rounded-3xl bg-white/5 border border-white/10 p-12 md:p-20">
            <p className="text-2xl md:text-3xl leading-relaxed font-medium mb-12">
              &ldquo;{caseStudy.testimonial.quote}&rdquo;
            </p>
            <footer className="text-white/70">
              <div className="font-semibold text-white text-lg">{caseStudy.testimonial.author}</div>
              <div className="text-sm mt-1">{caseStudy.testimonial.role}</div>
            </footer>
          </blockquote>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 pb-32 md:pb-40">
        <div className="rounded-3xl bg-white text-black p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build something like this?
          </h2>
          <p className="text-neutral-600 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Tell us about your project and we&apos;ll get back to you within one business day.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-black px-10 py-5 text-white font-medium hover:bg-neutral-800 transition-colors"
          >
            Start Your Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <span>&larr;</span>
            <span>Back to All Projects</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
