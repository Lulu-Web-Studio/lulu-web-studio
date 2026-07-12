import type {Metadata} from "next";
import HeroParallax from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import GoogleReviews from "@/components/home/GoogleReviews";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Custom Web Design & Development Agency",
  description:
    "Lulu Web Studio is a US digital agency building custom websites, mobile apps, and SEO strategies. We help businesses launch, grow, and convert online.",
  alternates: {canonical: "/"},
};

export default function HomePage() {
  return (
    <div>
      <HeroParallax />
      <Services />
      <FeaturedProjects />
      <GoogleReviews />
      <CTA />
    </div>
  );
}
