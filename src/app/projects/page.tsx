import type {Metadata} from "next";
import {
  getCompletedProjects,
  getInDevelopmentProjects,
  getForSaleProjects,
} from "@/data/projects";
import ProjectsClient from "./components/ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects | Lulu Web Studio Portfolio",
  description:
    "Browse Lulu Web Studio's portfolio of websites, mobile apps, and digital products built for US businesses across web development, design, and marketing.",
  alternates: {canonical: "/projects"},
};

export default function ProjectsPage() {
  return (
    <ProjectsClient
      completedProjects={getCompletedProjects()}
      inDevelopmentProjects={getInDevelopmentProjects()}
      forSaleProjects={getForSaleProjects()}
    />
  );
}
