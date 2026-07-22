import type {Metadata} from "next";
import Link from "next/link";
import {config} from "@/config";

const title = "Terms of Service";
const description =
  "The terms that govern using Lulu Web Studio's website and services, including our $30/month website plan, hosting, payment, and ownership of completed work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {canonical: "/terms-of-service"},
  openGraph: {
    type: "website",
    url: "/terms-of-service",
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

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="max-w-5xl mx-auto px-6 lg:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <p className="uppercase text-xs sm:text-sm tracking-widest text-white/60 mb-5">
          Legal
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-8 text-lg text-white/70 max-w-2xl leading-relaxed">
          Last updated July 22, 2026.
        </p>
      </header>

      <section className="relative z-10 rounded-t-[50px] bg-white text-black py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-0">
          <div className="blog-content">
            <p>
              This page is general information about how Lulu Web Studio (&ldquo;we,&rdquo; &ldquo;us&rdquo;)
              works with clients — it is not a substitute for a signed project agreement,
              and it is not legal advice. If you have questions about your specific
              situation, we&apos;d recommend talking to an attorney.
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By using luluwebstudio.com or engaging Lulu Web Studio for a project, you
              agree to the terms described on this page. Specific projects may also be
              governed by a separate written agreement, which takes precedence over this
              page if the two conflict.
            </p>

            <h2>Our Services</h2>
            <p>
              We provide custom website development, SEO, logo design, mobile app design,
              custom scripting and automation, and related digital services, described in
              more detail on our <Link href="/services">services pages</Link>. Scope, pricing, and
              timelines for paid projects are agreed on a project-by-project basis before
              work begins.
            </p>

            <h2>The $30/Month Custom Website Plan</h2>
            <p>
              Our $30/month website plan works differently from a standard paid project, so the
              terms are spelled out here specifically:
            </p>
            <ul>
              <li>
                The plan covers a custom-designed homepage, About page, and Contact page,
                plus three rounds of design feedback before launch.
              </li>
              <li>
                The website and hosting are <strong>$30/month</strong>, billed by Lulu Web
                Studio, with a <strong>12-month minimum commitment</strong> starting from
                launch.
              </li>
              <li>
                Domain name registration is not included. You are responsible for owning
                and purchasing your own domain.
              </li>
              <li>
                We take on a limited number of $30/month website projects each month.
                Availability is not guaranteed and the plan may be paused or changed at
                any time.
              </li>
              <li>
                Lulu Web Studio owns the code for websites created under this plan. You can
                use your live site as an active client, and you may request the code once the
                12-month minimum term is complete. If you cancel before that term is up, you
                may be billed for the remaining balance of the term.
              </li>
            </ul>

            <h2>Payment</h2>
            <p>
              Paid services are billed according to the agreement made at the start of a
              project or booking. Recurring services, including the $30/month custom
              website plan, are billed monthly until canceled in accordance with any
              applicable minimum term.
            </p>

            <h2>Ownership and Intellectual Property</h2>
            <p>
              For website and mobile app projects — including the $30/month website plan —
              Lulu Web Studio retains ownership of the underlying code. You receive a
              license to use your live site or app as an active client. Once the applicable
              contract or minimum term is complete, you may request the code; we&apos;ll work
              out that transfer at that time.
            </p>
            <p>
              For custom scripting, automation, and coding-solution projects, you own the
              code and deliverables once the project is paid in full.
            </p>
            <p>
              Regardless of code ownership, we retain the right to showcase completed work
              in our own portfolio and marketing unless otherwise agreed in writing.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              We do our best to deliver reliable, well-built work, but we cannot guarantee
              specific business outcomes such as search rankings, traffic, or sales. To the
              extent permitted by law, Lulu Web Studio is not liable for indirect or
              consequential damages arising from the use of our services or website.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of the United States and the state in
              which Lulu Web Studio operates, without regard to conflict-of-law principles.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. Changes will be posted on this
              page with an updated date at the top.
            </p>

            <h2>Contact Us</h2>
            <p>
              Questions about these terms? Email us at{" "}
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
