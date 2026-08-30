import HeroParallax from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import GoogleReviews from "@/components/home/GoogleReviews";
import CTA from "@/components/home/CTA";

// Title, description, and canonical are inherited from the root layout —
// this page is the same URL ("/") the layout's own metadata already describes.

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
