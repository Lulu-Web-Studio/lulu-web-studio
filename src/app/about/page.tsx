import type {Metadata} from "next";
import AboutHero from "./components/AboutHero";
import AboutContent from "./components/AboutContent";

const title = "About Lulu Web Studio | Our Team & Approach";
const description =
  "Meet Lulu Web Studio — a US-based team of designers, developers, and marketers building custom websites, apps, and SEO strategies for growing businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {canonical: "/about"},
  openGraph: {
    type: "website",
    url: "/about",
    title,
    description,
    images: [{url: "/images/about/about-hero.jpg", width: 1200, height: 630, alt: "The Lulu Web Studio team"}],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/about/about-hero.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutContent />
    </div>
  );
}
