import type {MetadataRoute} from "next";
import {getAllServices} from "@/data/services";

const SITE_URL = "https://www.luluwebstudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1},
    {url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8},
    {url: `${SITE_URL}/services`, lastModified, changeFrequency: "monthly", priority: 0.9},
    {url: `${SITE_URL}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8},
    {url: `${SITE_URL}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6},
  ];

  const serviceRoutes: MetadataRoute.Sitemap = getAllServices().map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
