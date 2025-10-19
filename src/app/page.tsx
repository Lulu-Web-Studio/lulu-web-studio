// app/page.tsx (or any route)

import HeroParallax from "@/components/Hero";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import CTA from "@/components/home/CTA";

export default function HomePage() {


  return (
    <div>


      <HeroParallax />

      {/* rest of content */}



      <Services/>


      <Projects/>


      <CTA />
      {/* <div className="bg-white min-h-[80vh] flex items-center justify-center rounded-t-[50px] relative z-10 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28">
       
      </div> */}
    </div>
  );
}
