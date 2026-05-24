import type {Metadata} from "next";
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Lulu Web Studio | Start Your Project",
  description:
    "Get in touch with Lulu Web Studio to start a website, app, or SEO project. We work with US businesses of every size — let's build something great.",
  alternates: {canonical: "/contact"},
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactForm />
    </div>
  );
}
