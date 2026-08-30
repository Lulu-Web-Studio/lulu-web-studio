export enum ProjectStatus {
  Completed = "completed",
  InDevelopment = "in-development",
  ForSale = "for-sale",
}

export type CaseStudyResult = {
  metric: string;
  label: string;
};

export type CaseStudySiteLink = {
  title: string;
  description: string;
  href: string;
};

export type CaseStudy = {
  client: string;
  industry: string;
  location?: string;
  year: string;
  problem: string;
  approach: string;
  results: CaseStudyResult[];
  siteLinks?: CaseStudySiteLink[];
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  seoTitle: string;
  seoDescription: string;
};

export type Project = {
  id: string;
  /** URL slug for the case study page at /projects/[slug]. Omit to skip a case study page. */
  slug?: string;
  title: string;
  description: string;
  image: string;
  /** External live site URL. */
  href: string;
  featured: boolean;
  status: ProjectStatus;
  tags?: string[];
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    id: "all-heart-care",
    title: "All Heart Care",
    description:
      "Evidence-based adult psychiatric care website for a nurse practitioner in Jenkintown, Pennsylvania",
    image: "/images/projects/all-heart-care.png",
    href: "https://www.lisaberkowitzcrnp.com",
    featured: true,
    status: ProjectStatus.Completed,
    tags: ["Healthcare", "Next.js", "Sanity"],
  },
  {
    id: "open-court",
    title: "Open Court",
    description: "Casual tennis and pickleball tournament brackets with live scoring",
    image: "/images/projects/open-court-home.jpg",
    href: "https://www.open-court.net",
    featured: false,
    status: ProjectStatus.Completed,
    tags: ["Web Application", "Next.js", "TypeScript"],
  },
  {
    id: "gabby-lulu-portfolio",
    title: "Gabby Lulu Portfolio",
    description: "Personal portfolio website for a software engineer",
    image: "/images/projects/gabby-lulu-portfolio-home.jpg",
    href: "https://gabbylulu.com",
    featured: false,
    status: ProjectStatus.Completed,
    tags: ["Portfolio", "Web Development", "Next.js"],
  },
  {
    id: "charge-the-coast",
    title: "Charge The Coast",
    description: "Electric vehicle charging solutions website",
    image: '/images/projects/ctc-image.png',
    href: "https://www.chargethecoast.com",
    featured: true,
    status: ProjectStatus.Completed,
    tags: ["Web Development", "Next.js", "SEO"],
  },
  {
    id: "Sonino",
    title: "Sonino Painting & Contracting",
    description: "Professional remodeling and painting services.",
    image: "/images/projects/sonino-home.png",
    href: "https://www.soninopainting.com",
    featured: true,
    status: ProjectStatus.Completed,
    tags: ["Web Development", "Contracting", "Local SEO"],
  },
  {
    id: "facial-surgery-center",
    slug: "facial-surgery-center",
    title: "The Facial Surgery Center",
    description:
      "Patient-focused website for an oral and maxillofacial surgery practice in Trumbull, Connecticut",
    image: "/images/projects/fsc-image.webp",
    href: "https://www.facialsurgeryct.com",
    featured: true,
    status: ProjectStatus.Completed,
    tags: ["Web Development", "Healthcare", "Conversion"],
    caseStudy: {
      client: "The Facial Surgery Center",
      industry: "Oral & Maxillofacial Surgery",
      location: "Trumbull, Connecticut",
      year: "2025",
      problem:
        "The Facial Surgery Center needed a modern digital home that could make a broad range of oral and maxillofacial services easier to understand without overwhelming prospective patients. The experience also had to establish trust in the surgeons, support patients before and after treatment, and make it straightforward for people throughout Fairfield County to find relevant care and request an appointment.",
      approach:
        "We organized the site around the questions patients ask first: who will provide their care, what a procedure involves, how to prepare, and what to do next. A responsive design, focused navigation, detailed treatment pages, surgeon profiles, patient resources, local landing pages, and consistent appointment calls to action give every visitor a clearer route from research to contact.",
      results: [
        {metric: "14", label: "Detailed treatment pages"},
        {metric: "14", label: "Local service-area pages"},
        {metric: "2", label: "Surgeon profiles centered on credentials and trust"},
      ],
      siteLinks: [
        {
          title: "About the Practice",
          description:
            "Learn how the practice presents more than 30 years of patient-focused care in Trumbull.",
          href: "https://www.facialsurgeryct.com/about",
        },
        {
          title: "Meet the Doctors",
          description:
            "See the education, credentials, and clinical experience behind the practice.",
          href: "https://www.facialsurgeryct.com/about/meet-the-doctors",
        },
        {
          title: "Dental Implants",
          description:
            "Explore a treatment page designed to explain the process and long-term benefits clearly.",
          href: "https://www.facialsurgeryct.com/service/dental-implants",
        },
        {
          title: "Wisdom Teeth Removal",
          description:
            "Review patient-friendly guidance on treatment, recovery, and aftercare.",
          href: "https://www.facialsurgeryct.com/service/wisdom-teeth-removal",
        },
        {
          title: "Orthognathic Surgery",
          description:
            "See how a complex corrective jaw procedure is broken into approachable information.",
          href: "https://www.facialsurgeryct.com/service/orthognathic-surgery",
        },
        {
          title: "Minimally Invasive Jaw Surgery",
          description:
            "Learn how the site introduces an advanced treatment option and its potential benefits.",
          href:
            "https://www.facialsurgeryct.com/service/minimally-invasive-orthognathic-surgery",
        },
        {
          title: "Teeth in a Day",
          description:
            "Explore the dedicated All-On-X implant page and its clear treatment overview.",
          href: "https://www.facialsurgeryct.com/service/teeth-in-a-day",
        },
        {
          title: "What Patients Can Expect",
          description:
            "Follow the preparation guidance created to help patients feel informed before a visit.",
          href: "https://www.facialsurgeryct.com/for-patients/what-to-expect",
        },
        {
          title: "Areas the Practice Serves",
          description:
            "Browse the local hub connecting Fairfield County communities with relevant care.",
          href: "https://www.facialsurgeryct.com/areas-we-serve",
        },
        {
          title: "Contact the Practice",
          description:
            "See the focused appointment path that turns patient research into a clear next step.",
          href: "https://www.facialsurgeryct.com/contact",
        },
      ],
      techStack: ["Next.js", "Tailwind CSS", "Vercel", "Sanity", "Structured Data"],
      seoTitle: "Facial Surgery Center Website Case Study | Lulu Web Studio",
      seoDescription:
        "See how Lulu Web Studio redesigned The Facial Surgery Center website with detailed treatment pages, surgeon profiles, local pages, and clear patient pathways.",
    },
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
    tags: ["Non-Profit", "Web Development"],
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
export const getProjectsWithCaseStudies = () =>
  projects.filter((p): p is Project & {slug: string; caseStudy: CaseStudy} =>
    Boolean(p.slug && p.caseStudy)
  );
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
