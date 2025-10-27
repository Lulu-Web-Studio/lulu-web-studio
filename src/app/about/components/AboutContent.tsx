"use client";

import {motion} from "framer-motion";
import {Code, Rocket, Users, Lightbulb} from "lucide-react";
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
      icon: Code,
      title: "Clean Code",
      description: "We build with modern frameworks and best practices, ensuring your project is scalable and maintainable.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "From MVPs to enterprise solutions, we deliver high-quality work efficiently without compromising excellence.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We collaborate closely to understand your needs and exceed expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions that drive results.",
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
              Building Digital Experiences That Matter
            </HeaderText>
            <SecondaryText className="text-neutral-600 leading-relaxed text-lg">
              Lulu Web Studio is a full-service digital agency specializing in web development,
              software engineering, mobile apps, and digital marketing. We combine technical
              expertise with creative thinking to deliver solutions that help businesses thrive
              in the digital world.
            </SecondaryText>
          </motion.div>

          {/* Mission Statement */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="bg-neutral-50 rounded-3xl p-10 md:p-16">
              <SecondaryText as="p" className="uppercase text-sm tracking-widest text-neutral-500 mb-4 text-center">
                Our Mission
              </SecondaryText>
              <SecondaryText className="text-neutral-900 text-xl md:text-2xl leading-relaxed text-center">
                To empower businesses with innovative digital solutions that are beautifully
                designed, expertly engineered, and built to perform. We don&apos;t just write code—we
                craft experiences that connect, engage, and convert.
              </SecondaryText>
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

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <HeaderText as="h3" className="font-bold text-neutral-900 mb-4">
                Technologies We Use
              </HeaderText>
              <SecondaryText className="text-neutral-600 max-w-2xl mx-auto">
                We work with modern, battle-tested technologies that deliver performance,
                scalability, and reliability.
              </SecondaryText>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Python",
                "React Native",
                "Firebase",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-neutral-50 rounded-xl px-6 py-4 text-center font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>

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
