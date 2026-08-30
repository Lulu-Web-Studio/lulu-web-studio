"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import {Eye, MessageCircle, Users, Code} from "lucide-react";
import HeaderText from "@/components/Text/HeaderText";
import SecondaryText from "@/components/Text/BodyText";

export default function AboutContent() {
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
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  const values = [
    {
      icon: MessageCircle,
      title: "Direct access",
      description: "You talk to the people actually building your site — no account managers, no layers, no getting lost in a queue.",
    },
    {
      icon: Eye,
      title: "An eye for what works",
      description: "Design decisions are made by feel and by data: what looks right, and what actually gets people to click, call, or buy.",
    },
    {
      icon: Code,
      title: "Modern, maintainable code",
      description: "Every site is built on a current stack — fast, scalable, and easy to hand off or extend later.",
    },
    {
      icon: Users,
      title: "Small by design",
      description: "We stay a small team on purpose, so every project gets real attention instead of being one of a hundred accounts.",
    },
  ];

  return (
    <section className="bg-white rounded-t-[50px] relative z-10 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 py-20 md:py-32 pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-100px"}}
          className="space-y-20"
        >
          {/* Introduction */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center">
            <HeaderText as="h2" className="font-bold text-neutral-900 mb-6">
              Started With an Eye for What Works
            </HeaderText>
            <SecondaryText className="text-neutral-600 leading-relaxed text-lg">
              Lulu Web Studio started in college, out of a knack for noticing what made a
              page work — what looked good, and what people actually wanted to see and click
              on. That instinct is still the foundation of every site we build: design paired
              with real engineering, so it looks right and performs.
            </SecondaryText>
          </motion.div>

          {/* Founder */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="bg-neutral-50 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-14">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 bg-neutral-200">
                <Image
                  src="/images/about/founder.jpg"
                  alt="Gabriel Lulu, founder of Lulu Web Studio"
                  fill
                  sizes="(max-width: 768px) 160px, 192px"
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <SecondaryText as="p" className="uppercase text-sm tracking-widest text-neutral-500 mb-3">
                  Founder
                </SecondaryText>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  Gabriel Lulu
                </h3>
                <SecondaryText className="text-neutral-700 text-lg md:text-xl leading-relaxed">
                  &ldquo;I still work directly on every project that comes through the studio.
                  We&apos;ve kept the team small on purpose — it means you&apos;re talking to the
                  person actually building your site, not an account manager relaying notes.&rdquo;
                </SecondaryText>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div>
            <motion.div variants={itemVariants} className="text-center mb-12">
              <HeaderText as="h3" className="font-bold text-neutral-900 mb-4">
                What Drives Us
              </HeaderText>
              <SecondaryText className="text-neutral-600 max-w-2xl mx-auto">
                Our values guide every project we take on and every relationship we build.
              </SecondaryText>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-white border border-neutral-200 rounded-2xl p-8 hover:border-neutral-900 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-6 p-4 bg-neutral-100 rounded-xl w-fit group-hover:bg-neutral-900 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-neutral-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <HeaderText as="h3" className="font-bold text-neutral-900 mb-6">
              Ready to Start Your Project?
            </HeaderText>
            <SecondaryText className="text-neutral-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s talk about how we can help bring your ideas to life with custom
              web development, mobile apps, or digital marketing solutions.
            </SecondaryText>
            <motion.a
              href="/contact"
              whileHover={{scale: 1.02}}
              whileTap={{scale: 0.98}}
              className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white rounded-xl font-medium text-lg hover:bg-neutral-800 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
