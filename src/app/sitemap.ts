import type {MetadataRoute} from "next";
import {getAllServices} from "@/data/services";
import {getProjectsWithCaseStudies} from "@/data/projects";
import {getAllCities} from "@/data/cities";
import {getAllPosts} from "@/lib/blog";

const SITE_URL = "https://www.luluwebstudio.com";

function getBlogPostRoutes(): MetadataRoute.Sitemap {
  return getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1},
    {url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8},
    {url: `${SITE_URL}/services`, lastModified, changeFrequency: "monthly", priority: 0.9},
    {url: `${SITE_URL}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8},
    {url: `${SITE_URL}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7},
    {url: `${SITE_URL}/feed.xml`, lastModified, changeFrequency: "weekly", priority: 0.4},
    {url: `${SITE_URL}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6},
    {url: `${SITE_URL}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3},
    {url: `${SITE_URL}/terms-of-service`, lastModified, changeFrequency: "yearly", priority: 0.3},
  ];

  const serviceRoutes: MetadataRoute.Sitemap = getAllServices().map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = getProjectsWithCaseStudies().map(
    (project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const cities = getAllCities();
  const localRoutes: MetadataRoute.Sitemap = cities.flatMap((city) => [
    {
      url: `${SITE_URL}/custom-website-development/${city.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/seo/${city.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]);

  const blogPostRoutes = getBlogPostRoutes();

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...localRoutes,
    ...blogPostRoutes,
  ];
}
