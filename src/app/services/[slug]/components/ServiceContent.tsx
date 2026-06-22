"use client";

import {motion} from "framer-motion";
import {Check} from "lucide-react";
import Link from "next/link";
import HeaderText from "@/components/Text/HeaderText";
import SecondaryText from "@/components/Text/BodyText";
import {getRelatedServices, type Service} from "@/data/services";
import LogoMarquee from "./LogoMarquee";

interface ServiceContentProps {
  service: Service;
}

export default function ServiceContent({service}: ServiceContentProps) {
  const relatedServices = getRelatedServices(service.slug, 3);

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, x: -20},
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section className="bg-white rounded-t-[50px] -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 relative z-10 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="mb-16"
        >
          <SecondaryText className="text-neutral-600 leading-relaxed text-lg">
            {service.fullDescription}
          </SecondaryText>
        </motion.div>

        {service.seoSections && service.seoSections.length > 0 && (
          <div className="mb-16 space-y-10">
            {service.seoSections.map((section) => (
              <motion.div
                key={section.heading}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
              >
                <HeaderText
                  variant="small"
                  as="h2"
                  className="text-neutral-900 font-bold mb-4"
                >
                  {section.heading}
                </HeaderText>
                <SecondaryText className="text-neutral-600 leading-relaxed text-lg">
                  {section.body}
                </SecondaryText>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mb-16">
          <HeaderText
            variant="small"
            as="h2"
            className="text-neutral-900 font-bold mb-8"
          >
            What&apos;s Included
          </HeaderText>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-50px"}}
            className="grid gap-4 md:grid-cols-2"
          >
            {service.items.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 bg-neutral-50 rounded-xl p-5"
              >
                <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <SecondaryText className="text-neutral-900">
                  {item}
                </SecondaryText>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {service.faqs && service.faqs.length > 0 && (
          <div className="mb-16">
            <HeaderText
              variant="small"
              as="h2"
              className="text-neutral-900 font-bold mb-8"
            >
              {service.title} FAQs
            </HeaderText>
            <div className="space-y-5">
              {service.faqs.map((faq) => (
                <motion.div
                  key={faq.question}
                  initial={{opacity: 0, y: 16}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.5}}
                  className="rounded-2xl border border-neutral-200 bg-white p-6"
                >
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {faq.question}
                  </h3>
                  <SecondaryText className="text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </SecondaryText>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {service.slug === "logo-design" && (
          <div className="mb-16 -mx-6 lg:-mx-12">
            <LogoMarquee />
          </div>
        )}

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.2}}
          className="text-center bg-neutral-900 rounded-3xl p-12"
        >
          <HeaderText
            variant="small"
            as="h3"
            className="text-white font-bold mb-4"
          >
            Ready to Get Started?
          </HeaderText>
          <SecondaryText className="text-neutral-400 mb-8 max-w-md mx-auto">
            Let&apos;s discuss how we can help bring your vision to life.
          </SecondaryText>
          <motion.a
            href="/contact"
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 rounded-xl font-medium text-lg hover:bg-neutral-100 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Contact Us
          </motion.a>
        </motion.div>

        {relatedServices.length > 0 && (
          <div className="mt-20">
            <HeaderText
              variant="small"
              as="h2"
              className="text-neutral-900 font-bold mb-8"
            >
              Related Services
            </HeaderText>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group block rounded-2xl border border-neutral-200 bg-white p-6 hover:border-neutral-900 transition-colors"
                >
                  <div className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
                    {related.number}
                  </div>
                  <div className="text-xl font-semibold text-neutral-900 mb-2 group-hover:underline">
                    {related.title}
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {related.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.3}}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="text-neutral-600 hover:text-neutral-900 transition-colors inline-flex items-center gap-2"
          >
            <span>&larr;</span>
            <span>Back to All Services</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
