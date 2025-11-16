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
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/projects/paragon-home.webp",
    href: "https://paragonexterior.com",
    featured: true,
    tags: ["Web Development", "Next.js", "SEO", "Roofing"],
  },
  {
    id: "facial-surgery-center",
    title: "The Facial Surgery Center",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/projects/fsc-image.webp",
    href: "https://www.facialsurgeryct.com",
    featured: true,
    tags: ["Web Development", "Healthcare"],
  },
  {
    id: "alon-group",
    title: "The Alon Group",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/projects/alon-group.webp",
    href: "https://www.thealongroup.com",
    featured: true,
    tags: ["Real Estate", "Web Development", "Wix"],
  },
  {
    id: "ganan-landscaping",
    title: "Ganan Landscaping",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/projects/ganan-home.webp",
    href: "https://www.gananlandscaping.com",
    featured: true,
    tags: ["Web Development", "Squarespace"],
  },
  {
    id: "isaacc18",
    title: "ISAACC18",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/projects/isaacc18-home.webp",
    href: "https://www.isaacc18.org",
    featured: false,
    tags: ["Non-Profit"],
  },
  {
    id: "amber-jewelry",
    title: "Amber's Jewelry Boutique",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/projects/amber-home.webp",
    href: "https://www.ambersjewelryboutique.com",
    featured: false,
    tags: ["E-commerce", "Jewelry"],
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getAllProjects = () => projects;
