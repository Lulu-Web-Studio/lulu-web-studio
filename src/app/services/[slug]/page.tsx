import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getAllServices, getServiceBySlug, type Service} from "@/data/services";
import ServiceHero from "./components/ServiceHero";
import ServiceContent from "./components/ServiceContent";

const SITE_URL = "https://www.luluwebstudio.com";

function buildServiceJsonLd(service: Service) {
  const serviceUrl = `${SITE_URL}/services/${service.slug}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: service.title,
      description: service.fullDescription,
      url: serviceUrl,
      image: `${SITE_URL}${service.image}`,
      provider: {"@id": `${SITE_URL}/#business`},
      areaServed: {"@type": "Country", name: "United States"},
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${service.title} Features`,
        itemListElement: service.items.map((item) => ({
          "@type": "Offer",
          itemOffered: {"@type": "Service", name: item},
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {"@type": "ListItem", position: 1, name: "Home", item: SITE_URL},
        {"@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services`},
        {"@type": "ListItem", position: 3, name: service.title, item: serviceUrl},
      ],
    },
  ];

  if (service.faqs && service.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${serviceUrl}#faq`,
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const params = await props.params;
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const canonical = `/services/${service.slug}`;

  return {
    title: {absolute: service.seoTitle},
    description: service.seoDescription,
    alternates: {canonical},
    openGraph: {
      type: "website",
      url: canonical,
      title: service.seoTitle,
      description: service.seoDescription,
      images: [{url: service.image, alt: service.title}],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
      images: [service.image],
    },
  };
}

export default async function ServicePage(props: {
  params: Promise<Params>;
}) {
  const params = await props.params;
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(buildServiceJsonLd(service))}}
      />
      <ServiceHero service={service} />
      <ServiceContent service={service} />
    </div>
  );
}
