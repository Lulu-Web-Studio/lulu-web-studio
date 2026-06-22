import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getAllCities, getCityBySlug} from "@/data/cities";
import LocalServicePage, {getLocalCopy} from "@/components/local/LocalServicePage";

interface Params {
  city: string;
}

export async function generateStaticParams() {
  return getAllCities().map((c) => ({city: c.slug}));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const params = await props.params;
  const city = getCityBySlug(params.city);
  if (!city) return {title: "Page Not Found"};

  const copy = getLocalCopy("seo", city);
  const canonical = `/seo/${city.slug}`;
  const title = `${copy.heading} | Lulu Web Studio`;

  return {
    title,
    description: copy.serviceSchemaDescription,
    alternates: {canonical},
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description: copy.serviceSchemaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: copy.serviceSchemaDescription,
    },
  };
}

export default async function SeoCityPage(props: {
  params: Promise<Params>;
}) {
  const params = await props.params;
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  return <LocalServicePage kind="seo" city={city} />;
}
