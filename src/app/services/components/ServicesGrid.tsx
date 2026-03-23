"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {ArrowUpRight} from "lucide-react";
import HeaderText from "@/components/Text/HeaderText";
import SecondaryText from "@/components/Text/BodyText";
import {getAllServices} from "@/data/services";

export default function ServicesGrid() {
  const services = getAllServices();

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 30},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section className="bg-white rounded-t-[50px] -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 relative z-10 py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-100px"}}
          className="grid gap-8 md:gap-12"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link
                href={`/services/${service.slug}`}
                className="group block bg-neutral-50 rounded-2xl p-8 md:p-12 transition-all hover:shadow-lg hover:bg-neutral-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-neutral-400 font-medium text-sm mb-2 block">
                      {service.number}
                    </span>
                    <HeaderText
                      variant="default"
                      as="h2"
                      className="text-neutral-900 font-bold mb-4 group-hover:text-neutral-700 transition-colors"
                    >
                      {service.title}
                    </HeaderText>
                    <SecondaryText className="text-neutral-600 max-w-xl">
                      {service.shortDescription}
                    </SecondaryText>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
