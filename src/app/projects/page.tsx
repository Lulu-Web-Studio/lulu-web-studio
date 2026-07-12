import type {Metadata} from "next";
import {
  getCompletedProjects,
  getInDevelopmentProjects,
  getForSaleProjects,
} from "@/data/projects";
import ProjectsClient from "./components/ProjectsClient";

const title = "Our Projects Portfolio";
const description =
  "Browse Lulu Web Studio's portfolio of websites, mobile apps, and digital products built for US businesses across web development, design, and marketing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {canonical: "/projects"},
  openGraph: {
    type: "website",
    url: "/projects",
    title,
    description,
    images: [{url: "/og-image.png", width: 1200, height: 630, alt: "Lulu Web Studio project portfolio"}],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
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
