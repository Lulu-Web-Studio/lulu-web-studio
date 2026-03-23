import type {Metadata} from "next";
import ServicesHero from "./components/ServicesHero";
import ServicesGrid from "./components/ServicesGrid";

export const metadata: Metadata = {
  title: "Our Services | Lulu Web Studio",
  description:
    "Explore our comprehensive digital services including custom website design, SEO optimization, and professional logo design.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesGrid />
    </div>
  );
}
