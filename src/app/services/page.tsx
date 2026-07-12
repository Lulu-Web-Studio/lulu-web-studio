import type {Metadata} from "next";
import ServicesHero from "./components/ServicesHero";
import ServicesGrid from "./components/ServicesGrid";

const title = "Our Services";
const description =
  "Explore our comprehensive digital services: custom website design, SEO, mobile app development, logo design, and custom scripting solutions.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {canonical: "/services"},
  openGraph: {
    type: "website",
    url: "/services",
    title,
    description,
    images: [{url: "/images/services/new-hero-service.jpg", width: 1200, height: 630, alt: "Lulu Web Studio services"}],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/services/new-hero-service.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesGrid />
    </div>
  );
}
