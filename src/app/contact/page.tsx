import type {Metadata} from "next";
import ContactHero from "./components/ContactHero";
import ContactBooking from "./components/ContactBooking";
import ContactForm from "./components/ContactForm";
import ContactReview from "./components/ContactReview";

const title = "Contact Lulu Web Studio | Book a Call or Start Your Project";
const description =
  "Get in touch with Lulu Web Studio to start a website, app, or SEO project. Book a free general call or a paid debugging session, or send us a message.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {canonical: "/contact"},
  openGraph: {
    type: "website",
    url: "/contact",
    title,
    description,
    images: [{url: "/images/contact/contact-bg.webp", width: 1200, height: 630, alt: "Contact Lulu Web Studio"}],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/contact/contact-bg.webp"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactBooking />
      <ContactForm />
      <ContactReview />
    </div>
  );
}
