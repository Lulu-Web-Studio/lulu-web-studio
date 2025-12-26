export enum ProjectStatus {
  Completed = "completed",
  InDevelopment = "in-development",
  ForSale = "for-sale",
}

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  featured: boolean;
  status: ProjectStatus;
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: "charge-the-coast",
    title: "Charge The Coast",
    description: "Electric vehicle charging solutions website",
    image: "/images/projects/charge-the-coast1.webp",
    href: "https://www.chargethecoast.com",
    featured: true,
    status: ProjectStatus.Completed,
    tags: ["Web Development", "Next.js", "SEO"],
  },
  {
    id: "facial-surgery-center",
    title: "The Facial Surgery Center",
    description: "Healthcare website for facial surgery practice",
    image: "/images/projects/fsc-image.webp",
    href: "https://www.facialsurgeryct.com",
    featured: true,
    status: ProjectStatus.Completed,
    tags: ["Web Development", "Healthcare"],
  },
  {
    id: "alon-group",
    title: "The Alon Group",
    description: "Real estate brokerage website built on Wix",
    image: "/images/projects/alon-group.webp",
    href: "https://www.thealongroup.com",
    featured: true,
    status: ProjectStatus.Completed,
    tags: ["Real Estate", "Web Development", "Wix"],
  },
  {
    id: "ganan-landscaping",
    title: "Ganan Landscaping",
    description: "Professional landscaping services website on Squarespace",
    image: "/images/projects/ganan-home.webp",
    href: "https://www.gananlandscaping.com",
    featured: true,
    status: ProjectStatus.Completed,
    tags: ["Web Development", "Squarespace"],
  },
  {
    id: "isaacc18",
    title: "ISAACC18",
    description: "Non-profit organization website",
    image: "/images/projects/isaacc18-home.webp",
    href: "https://www.isaacc18.org",
    featured: false,
    status: ProjectStatus.Completed,
    tags: ["Non-Profit"],
  },
  {
    id: "amber-jewelry",
    title: "Amber's Jewelry Boutique",
    description: "E-commerce jewelry store",
    image: "/images/projects/amber-home.webp",
    href: "https://www.ambersjewelryboutique.com",
    featured: false,
    status: ProjectStatus.Completed,
    tags: ["E-commerce", "Jewelry"],
  },
  {
    id: "rapid-ash-response",
    title: "Rapid Ash Response",
    description: "Fire restoration website",
    image: "/images/projects/rapid-ash.webp",
    href: "https://www.rapidashresponse.com",
    featured: false,
    status: ProjectStatus.InDevelopment,
    tags: ["Fire Restoration", "Web Development"],
  },
  {
    "id": "funding-site",
    "title": "Money Lending Website",
    "description": "A website for a money lending business.",
    "image": "/images/projects/funding.webp",
    "href": "https://get-funding.vercel.app",
    "featured": false,
    "status": ProjectStatus.ForSale,
    "tags": ["Finance", "Lending"]
  },
  {
    "id": "non-profit-site",
    "title": "Non-Profit Organization Website",
    "description": "A website template for non-profit organizations.",
    "image": "/images/projects/org.webp",
    "href": "https://orginization-page-demo.vercel.app",
    "featured": false,
    "status": ProjectStatus.ForSale,
    "tags": ["Non-Profit", "Charity"]
  },
  {
    "id": "best-buy-furniture",
    "title": "Best Buy Furniture",
    "description": "E-commerce website for furniture store.",
    "image": "/images/projects/bbf.webp",
    "href": "https://bestbuy-furniture.com",
    "featured": true,
    "status": ProjectStatus.Completed,
    "tags": ["E-commerce", "Furniture", "Shopify"]
  }

];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getAllProjects = () => projects;
export const getCompletedProjects = () =>
  projects.filter((p) => p.status === ProjectStatus.Completed);
export const getInDevelopmentProjects = () =>
  projects.filter((p) => p.status === ProjectStatus.InDevelopment);
export const getForSaleProjects = () =>
  projects.filter((p) => p.status === ProjectStatus.ForSale);
