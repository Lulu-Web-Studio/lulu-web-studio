import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getAllServices, getServiceBySlug} from "@/data/services";
import ServiceHero from "./components/ServiceHero";
import ServiceContent from "./components/ServiceContent";

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

  return {
    title: service.seoTitle,
    description: service.seoDescription,
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
      <ServiceHero service={service} />
      <ServiceContent service={service} />
    </div>
  );
}
