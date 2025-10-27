import HeroParallax from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <div>
      <HeroParallax />
      <Services />
      <Projects />
      <CTA />
    </div>
  );
}
