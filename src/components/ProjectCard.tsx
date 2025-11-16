"use client";

import {ArrowUpRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type {Project} from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  showTags?: boolean;
}

export default function ProjectCard({project, showTags = false}: ProjectCardProps) {
  return (
    <Link href={project.href} className="group block">
      <div className="space-y-6">
        {/* Project Image */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl md:text-3xl font-bold">
              {project.title}
            </h3>
            <ArrowUpRight className="w-6 h-6 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors" />
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            {project.description}
          </p>
          {showTags && project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-gray-900 rounded-full text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
