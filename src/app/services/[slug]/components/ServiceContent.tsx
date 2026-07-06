"use client";

import {motion} from "framer-motion";
import {ArrowUpRight, Plus} from "lucide-react";
import Link from "next/link";
import HeaderText from "@/components/Text/HeaderText";
import SecondaryText from "@/components/Text/BodyText";
import {getRelatedServices, type Service} from "@/data/services";
import LogoMarquee from "./LogoMarquee";

interface ServiceContentProps {
  service: Service;
}

const MONO = {fontFamily: "'JetBrains Mono', monospace"};

function SectionLabel({index, children}: {index: string; children: React.ReactNode}) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span style={MONO} className="text-sm text-neutral-400">
        {index}
      </span>
      <span
        style={MONO}
        className="text-xs uppercase tracking-[0.25em] text-neutral-500"
      >
        {children}
      </span>
      <span className="flex-1 border-t border-neutral-200 self-center" />
    </div>
  );
}

export default function ServiceContent({service}: ServiceContentProps) {
  const relatedServices = getRelatedServices(service.slug, 3);

  const reveal = {
    initial: {opacity: 0, y: 24},
    whileInView: {opacity: 1, y: 0},
    viewport: {once: true, margin: "-60px"},
    transition: {duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const},
  };

  return (
    <section className="bg-white rounded-t-[50px] -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 relative z-10 py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Standfirst — oversized lead paragraph */}
        <motion.div {...reveal} className="mb-24 md:mb-32">
          <SectionLabel index="/01">Overview</SectionLabel>
          <p className="text-2xl sm:text-3xl md:text-4xl leading-snug md:leading-snug font-medium text-neutral-900 max-w-4xl text-pretty">
            {service.fullDescription}
          </p>
        </motion.div>

        {/* Editorial sections — heading left, body right */}
        {service.seoSections && service.seoSections.length > 0 && (
          <div className="mb-24 md:mb-32">
            <SectionLabel index="/02">In Detail</SectionLabel>
            <div>
              {service.seoSections.map((section, i) => (
                <motion.div
                  key={section.heading}
                  {...reveal}
                  className="grid md:grid-cols-12 gap-4 md:gap-10 py-10 md:py-14 border-t border-neutral-200 first:border-t-0 first:pt-0"
                >
                  <span
                    style={MONO}
                    className="md:col-span-1 text-sm text-neutral-400 pt-1"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <HeaderText
                    variant="small"
                    as="h2"
                    className="md:col-span-5 text-neutral-900 font-bold leading-tight text-balance"
                  >
                    {section.heading}
                  </HeaderText>
                  <SecondaryText className="md:col-span-6 text-neutral-600 leading-relaxed">
                    {section.body}
                  </SecondaryText>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* What's included — ruled index list */}
        <motion.div {...reveal} className="mb-24 md:mb-32">
          <SectionLabel index={service.seoSections?.length ? "/03" : "/02"}>
            What&apos;s Included
          </SectionLabel>
          <h2 className="sr-only">What&apos;s Included</h2>
          <ul className="grid md:grid-cols-2 md:gap-x-16">
            {service.items.map((item, index) => (
              <li
                key={index}
                className="group flex items-baseline gap-5 border-b border-neutral-200 py-5 md:py-6"
              >
                <span style={MONO} className="text-xs text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg md:text-xl font-medium text-neutral-900 transition-transform duration-300 group-hover:translate-x-2">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* FAQs — ruled accordion */}
        {service.faqs && service.faqs.length > 0 && (
          <motion.div {...reveal} className="mb-24 md:mb-32">
            <SectionLabel index={service.seoSections?.length ? "/04" : "/03"}>
              Questions
            </SectionLabel>
            <h2 className="sr-only">{service.title} FAQs</h2>
            <div className="border-t border-neutral-200">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="group border-b border-neutral-200">
                  <summary className="flex items-center justify-between gap-6 py-6 md:py-8 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 text-balance">
                      {faq.question}
                    </h3>
                    <Plus className="w-5 h-5 flex-shrink-0 text-neutral-400 transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <SecondaryText className="text-neutral-600 leading-relaxed pb-8 max-w-3xl">
                    {faq.answer}
                  </SecondaryText>
                </details>
              ))}
            </div>
          </motion.div>
        )}

        {service.slug === "logo-design" && (
          <div className="mb-24 -mx-6 lg:-mx-12">
            <LogoMarquee />
          </div>
        )}
      </div>

      {/* CTA — full-bleed black band */}
      <motion.div {...reveal} className="bg-neutral-950 py-24 md:py-36 my-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <span
            style={MONO}
            className="block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-8"
          >
            Next Step
          </span>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight max-w-4xl mb-12 text-balance">
            Let&apos;s make this the easy part of your week.
          </h3>
          <motion.a
            href="/contact"
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-neutral-950 font-medium text-lg hover:bg-neutral-200 transition-colors"
          >
            Start the Conversation
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>

      {/* Related services — ruled rows */}
      {relatedServices.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-16">
          <SectionLabel index="//">More Services</SectionLabel>
          <h2 className="sr-only">Related Services</h2>
          <div className="border-t border-neutral-200">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group grid md:grid-cols-12 items-baseline gap-2 md:gap-10 border-b border-neutral-200 py-6 md:py-8"
              >
                <span style={MONO} className="md:col-span-1 text-sm text-neutral-400">
                  {related.number}
                </span>
                <span className="md:col-span-5 text-2xl md:text-3xl font-bold text-neutral-900 transition-transform duration-300 group-hover:translate-x-2">
                  {related.title}
                </span>
                <span className="md:col-span-5 text-neutral-500 text-base leading-relaxed hidden md:block">
                  {related.shortDescription}
                </span>
                <span className="md:col-span-1 hidden md:flex justify-end">
                  <ArrowUpRight className="w-6 h-6 text-neutral-300 transition-all duration-300 group-hover:text-neutral-900 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="text-neutral-500 hover:text-neutral-900 transition-colors inline-flex items-center gap-2"
            >
              <span>&larr;</span>
              <span>Back to All Services</span>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
