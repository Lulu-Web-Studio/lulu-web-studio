import HeroParallax from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <div>
      <HeroParallax />
      <Services />
      <FeaturedProjects />
      <CTA />
    </div>
  );
}
