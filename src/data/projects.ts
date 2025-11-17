export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  featured: boolean;
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: "paragon-exterior",
    title: "Paragon Exterior",
    description: "Modern roofing company website built with Next.js and SEO optimization",
    image: "/images/projects/paragon-home.webp",
    href: "https://paragonexterior.com",
    featured: true,
    tags: ["Web Development", "Next.js", "SEO", "Roofing"],
  },
  {
    id: "facial-surgery-center",
    title: "The Facial Surgery Center",
    description: "Healthcare website for facial surgery practice",
    image: "/images/projects/fsc-image.webp",
    href: "https://www.facialsurgeryct.com",
    featured: true,
    tags: ["Web Development", "Healthcare"],
  },
  {
    id: "alon-group",
    title: "The Alon Group",
    description: "Real estate brokerage website built on Wix",
    image: "/images/projects/alon-group.webp",
    href: "https://www.thealongroup.com",
    featured: true,
    tags: ["Real Estate", "Web Development", "Wix"],
  },
  {
    id: "ganan-landscaping",
    title: "Ganan Landscaping",
    description: "Professional landscaping services website on Squarespace",
    image: "/images/projects/ganan-home.webp",
    href: "https://www.gananlandscaping.com",
    featured: true,
    tags: ["Web Development", "Squarespace"],
  },
  {
    id: "isaacc18",
    title: "ISAACC18",
    description: "Non-profit organization website",
    image: "/images/projects/isaacc18-home.webp",
    href: "https://www.isaacc18.org",
    featured: false,
    tags: ["Non-Profit"],
  },
  {
    id: "amber-jewelry",
    title: "Amber's Jewelry Boutique",
    description: "E-commerce jewelry store",
    image: "/images/projects/amber-home.webp",
    href: "https://www.ambersjewelryboutique.com",
    featured: false,
    tags: ["E-commerce", "Jewelry"],
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getAllProjects = () => projects;
