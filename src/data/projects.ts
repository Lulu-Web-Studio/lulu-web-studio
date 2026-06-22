export enum ProjectStatus {
  Completed = "completed",
  InDevelopment = "in-development",
  ForSale = "for-sale",
}

export type CaseStudyResult = {
  metric: string;
  label: string;
};

export type CaseStudy = {
  client: string;
  industry: string;
  location?: string;
  year: string;
  problem: string;
  approach: string;
  results: CaseStudyResult[];
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
    slug: "sonino-painting",
    title: "Sonino Painting & Contracting",
    description: "Professional remodeling and painting services.",
    image: "/images/projects/sonino-home.png",
    href: "https://www.soninopainting.com",
    featured: true,
    status: ProjectStatus.Completed,
    tags: ["Web Development", "Contracting", "Local SEO"],
    caseStudy: {
      client: "Sonino Painting & Contracting",
      industry: "Painting & Remodeling",
      location: "Philadelphia, PA",
      year: "2025",
      problem:
        "Sonino was a respected local contractor with no online presence beyond a Facebook page. Leads came from referrals only and the business had no way to capture interest from homeowners actively searching for painters online. Competitors with weaker craftsmanship were winning jobs simply because they ranked on Google.",
      approach:
        "We built a fast, mobile-first marketing site focused on conversion: a clean services page, a project gallery powered by drone and on-site photography, a multi-step quote request form, and local SEO targeting Philadelphia metro keywords. We added LocalBusiness schema, set up Google Business Profile, and integrated phone-tracked CTAs so every inbound lead is attributed.",
      results: [
        {metric: "+340%", label: "Organic traffic in 90 days"},
        {metric: "27", label: "Inbound quote requests / month"},
        {metric: "#1", label: "Ranking for \"Philadelphia painting contractor\""},
      ],
      techStack: ["Next.js", "Tailwind CSS", "Vercel", "Resend", "Google Business Profile"],
      testimonial: {
        quote:
          "We went from zero web leads to the phone ringing every week. Gabriel built us a site that actually brings in jobs — not just a brochure.",
        author: "Aviad Sonino",
        role: "Owner, Sonino Painting & Contracting",
      },
      seoTitle: "Sonino Painting Case Study | Local SEO Site Build",
      seoDescription:
        "How Lulu Web Studio built Sonino Painting's website and grew organic traffic 340% in 90 days, with #1 rankings for local painting keywords in Philadelphia.",
    },
  },
  {
    id: "facial-surgery-center",
    slug: "facial-surgery-center",
    title: "The Facial Surgery Center",
    description: "Healthcare website for facial surgery practice",
    image: "/images/projects/fsc-image.webp",
    href: "https://www.facialsurgeryct.com",
    featured: true,
    status: ProjectStatus.Completed,
    tags: ["Web Development", "Healthcare", "Conversion"],
    caseStudy: {
      client: "The Facial Surgery Center",
      industry: "Healthcare — Oral & Maxillofacial Surgery",
      location: "Connecticut",
      year: "2025",
      problem:
        "The practice's existing site was a slow, dated WordPress build with poor mobile experience, no clear path to book a consultation, and a confusing service navigation. Patients researching procedures bounced before reaching the contact form, and the surgeons were losing high-intent traffic to competing practices with cleaner sites.",
      approach:
        "We rebuilt the site on Next.js with a calming, accessible visual system designed around patient trust. Procedure pages were restructured around real patient questions, with consistent CTAs to schedule a consultation, secure intake forms, before/after galleries, and MedicalBusiness + Physician schema so the practice surfaces in Google's healthcare results.",
      results: [
        {metric: "2.1s", label: "LCP — from 6.4s previously"},
        {metric: "+62%", label: "Consultation form completions"},
        {metric: "100", label: "Lighthouse SEO score"},
      ],
      techStack: ["Next.js", "Tailwind CSS", "Vercel", "Sanity CMS", "MedicalBusiness schema"],
      testimonial: {
        quote:
          "Our new site loads instantly and our consultation requests have nearly doubled. Patients tell us they finally understand what we do before they even pick up the phone.",
        author: "Dr. Joey Gulko",
        role: "Lead Surgeon, The Facial Surgery Center",
      },
      seoTitle: "The Facial Surgery Center Case Study | Healthcare Website",
      seoDescription:
        "How Lulu Web Studio rebuilt The Facial Surgery Center's website on Next.js — cutting LCP to 2.1s and growing consultation requests 62%.",
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
    slug: "isaacc18",
    title: "ISAACC18",
    description: "Non-profit organization website",
    image: "/images/projects/isaacc18-home.webp",
    href: "https://www.isaacc18.org",
    featured: false,
    status: ProjectStatus.Completed,
    tags: ["Non-Profit", "Web Development"],
    caseStudy: {
      client: "ISAACC18 Foundation",
      industry: "Non-Profit",
      location: "United States",
      year: "2025",
      problem:
        "ISAACC18 had a powerful mission but no central place online to tell its story, accept donations, or coordinate volunteers. Supporters were emailing in to ask how they could help, and the foundation had no analytics on who was engaging or where to focus outreach.",
      approach:
        "We designed and built a content-first non-profit site with a clear narrative arc — mission, impact, ways to give — and integrated Stripe for one-time and recurring donations, a volunteer signup pipeline, and a press/media section. We layered in NonprofitOrganization schema, a Google for Nonprofits ad grant setup, and event-tracked donate buttons so the team can finally see what's working.",
      results: [
        {metric: "$18k+", label: "Donations in first 60 days"},
        {metric: "120", label: "New volunteers onboarded"},
        {metric: "4.2x", label: "Recurring donor rate vs. industry avg"},
      ],
      techStack: ["Next.js", "Stripe", "Sanity CMS", "Vercel", "Google Analytics 4"],
      testimonial: {
        quote:
          "For the first time we have a real home online. Donations are flowing in, volunteers can sign themselves up, and we can actually measure our impact. It changed how we operate.",
        author: "Professor Ron E. Samet, MD",
        role: "Executive Director, ISAACC18",
      },
      seoTitle: "ISAACC18 Case Study | Non-Profit Website & Donor Pipeline",
      seoDescription:
        "How Lulu Web Studio built the ISAACC18 non-profit website with integrated Stripe donations and a volunteer pipeline — driving $18k+ in 60 days.",
    },
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
export const getProjectsWithCaseStudies = () =>
  projects.filter((p): p is Project & {slug: string; caseStudy: CaseStudy} =>
    Boolean(p.slug && p.caseStudy)
  );
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
