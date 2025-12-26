"use client";

import {motion} from "framer-motion";
import {
  getCompletedProjects,
  getInDevelopmentProjects,
  getForSaleProjects,
} from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const completedProjects = getCompletedProjects();
  const inDevelopmentProjects = getInDevelopmentProjects();
  const forSaleProjects = getForSaleProjects();

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
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                All Projects
              </h1>
              <p className="text-gray-400 text-xl max-w-3xl">
                Explore our portfolio of successful projects across web
                development, design, and digital marketing.
              </p>
            </motion.div>

            {/* Completed Projects Grid */}
            {completedProjects.length > 0 && (
              <motion.div
                variants={containerVariants}
                className="grid md:grid-cols-2 gap-8 lg:gap-12"
              >
                {completedProjects.map((project) => (
                  <motion.div key={project.id} variants={itemVariants}>
                    <ProjectCard project={project} showTags />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* In Development Section */}
            {inDevelopmentProjects.length > 0 && (
              <>
                <motion.div variants={itemVariants} className="mt-24 mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    In Development
                  </h2>
                </motion.div>
                <motion.div
                  variants={containerVariants}
                  className="grid md:grid-cols-2 gap-8 lg:gap-12"
                >
                  {inDevelopmentProjects.map((project) => (
                    <motion.div key={project.id} variants={itemVariants}>
                      <ProjectCard project={project} showTags />
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}

            {/* For Sale Section */}
            {forSaleProjects.length > 0 && (
              <>
                <motion.div variants={itemVariants} className="mt-24 mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">For Sale</h2>
                </motion.div>
                <motion.div
                  variants={containerVariants}
                  className="grid md:grid-cols-2 gap-8 lg:gap-12"
                >
                  {forSaleProjects.map((project) => (
                    <motion.div key={project.id} variants={itemVariants}>
                      <ProjectCard project={project} showTags />
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
