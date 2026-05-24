import type {Metadata} from "next";
import AboutHero from "./components/AboutHero";
import AboutContent from "./components/AboutContent";

export const metadata: Metadata = {
  title: "About Lulu Web Studio | Our Team & Approach",
  description:
    "Meet Lulu Web Studio — a US-based team of designers, developers, and marketers building custom websites, apps, and SEO strategies for growing businesses.",
  alternates: {canonical: "/about"},
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutContent />
    </div>
  );
}
