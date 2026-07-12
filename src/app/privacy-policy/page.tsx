import type {Metadata} from "next";
import {config} from "@/config";

const title = "Privacy Policy";
const description =
  "How Lulu Web Studio collects, uses, and protects the information you share with us through our contact form, call bookings, and other tools we use to run this site.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {canonical: "/privacy-policy"},
  openGraph: {
    type: "website",
    url: "/privacy-policy",
    title,
    description,
    images: [{url: "/og-image.png", width: 1200, height: 630, alt: "Lulu Web Studio"}],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="max-w-5xl mx-auto px-6 lg:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <p className="uppercase text-xs sm:text-sm tracking-widest text-white/60 mb-5">
          Legal
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-8 text-lg text-white/70 max-w-2xl leading-relaxed">
          Last updated July 10, 2026.
        </p>
      </header>

      <section className="relative z-10 rounded-t-[50px] bg-white text-black py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-0">
          <div className="blog-content">
            <p>
              This Privacy Policy explains what information Lulu Web Studio (&ldquo;we,&rdquo; &ldquo;us&rdquo;)
              collects through luluwebstudio.com, how we use it, and your options. By using
              this site, you agree to the practices described below.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us:
            </p>
            <ul>
              <li>
                <strong>Contact form.</strong> When you submit our contact form, we collect
                your name, email address, subject, and message so we can respond.
              </li>
              <li>
                <strong>Call booking.</strong> When you book a call through our scheduling
                widget, that request is handled by Cal.com, which collects your name, email,
                and scheduling details under its own privacy policy.
              </li>
              <li>
                <strong>Standard server logs.</strong> Like most websites, our hosting
                provider automatically logs basic technical information such as IP address
                and browser type for security and performance purposes.
              </li>
            </ul>
            <p>
              We do not currently run analytics or advertising tracking software on this
              site.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information you provide to respond to your inquiries, schedule and
              confirm calls, and communicate with you about projects you&apos;ve asked about. We
              do not sell, rent, or trade your personal information to third parties.
            </p>

            <h2>Cookies</h2>
            <p>
              This site stores a small amount of local data to remember your light or dark
              theme preference. We do not use advertising or cross-site tracking cookies.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We rely on a small number of third-party services to run this site and our
              business:
            </p>
            <ul>
              <li>
                <strong>Cal.com</strong> for call scheduling and booking.
              </li>
              <li>
                <strong>Google / Gmail</strong> to deliver contact form submissions to our
                inbox.
              </li>
            </ul>
            <p>
              Each of these providers has its own privacy policy governing how it handles
              your data.
            </p>

            <h2>Data Retention and Your Rights</h2>
            <p>
              We retain contact form submissions only as long as needed to respond to you and
              keep reasonable business records. You can request that we delete information
              we hold about you at any time by emailing us at{" "}
              <a href={`mailto:${config.emailAddress}`}>{config.emailAddress}</a>.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              This site is not directed at children under 13, and we do not knowingly
              collect information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on
              this page with an updated date at the top.
            </p>

            <h2>Contact Us</h2>
            <p>
              Questions about this policy? Email us at{" "}
              <a href={`mailto:${config.emailAddress}`}>{config.emailAddress}</a> or call{" "}
              <a href={`tel:${config.phoneNumber.replace(/[^\d+]/g, "")}`}>
                {config.phoneNumber}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
