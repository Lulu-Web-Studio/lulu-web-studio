"use client";

import {motion} from "framer-motion";
import {ArrowUpRight} from "lucide-react";
import Link from "next/link";
import {Parallax} from "react-scroll-parallax";
import {getFeaturedProjects} from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

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

  return (
    <section className="relative z-10 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 rounded-t-[50px] bg-black overflow-hidden">
      <Parallax speed={-5}>
        <div className="bg-black text-white py-32 md:py-52 ">
          <div className="w-5/6 max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, margin: "-100px"}}
            >
              {/* Header */}
              <motion.div
                variants={itemVariants}
                className="flex justify-between items-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Featured Projects
                </h2>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-lg"
                >
                  View all
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </motion.div>

              {/* Projects Grid */}
              <motion.div
                variants={containerVariants}
                className="grid md:grid-cols-2 gap-8 lg:gap-12"
              >
                {featuredProjects.map((project) => (
                  <motion.div key={project.id} variants={itemVariants}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Parallax>
    </section>
  );
}
