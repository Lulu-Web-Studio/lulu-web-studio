// app/page.tsx (or any route)

import HeroParallax from "@/components/Hero";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <div>
      <HeroParallax />
      {/* rest of content */}



      <div className="bg-white h-[80vh] flex items-center justify-center rounded-t-[50px] relative z-10 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28">

      </div>
    
      <Projects/>
    </div>
  );
}
