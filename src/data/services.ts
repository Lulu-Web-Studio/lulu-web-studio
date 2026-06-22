export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  seoSections?: {
    heading: string;
    body: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  items: string[];
  image: string;
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    id: "website-design",
    slug: "website-design",
    number: "01",
    title: "Custom Website Development",
    shortDescription:
      "Custom website development services for responsive, SEO-ready business websites.",
    fullDescription:
      "Our custom website development services create fast, responsive websites tailored to your brand, goals, and customer journey. As a custom website development company, Lulu Web Studio plans the structure, design, content flow, and launch details that help your site look polished, load quickly, and convert visitors into customers.",
    seoSections: [
      {
        heading: "Custom Website Development Services for Growing Brands",
        body: "A custom website should do more than look good. We build around your offer, audience, calls to action, SEO foundations, mobile experience, and long-term content needs so your site can support real business growth instead of feeling like a generic template.",
      },
      {
        heading: "A Custom Website Development Company With a Practical Process",
        body: "Every project starts with discovery, page planning, and design direction before moving into development. That keeps the work focused on the pages, features, integrations, and performance details your business actually needs.",
      },
      {
        heading: "Custom Ecommerce Website Development",
        body: "For stores and service businesses that sell online, custom ecommerce website development can include product pages, checkout planning, payment integrations, inventory-friendly structure, conversion-focused layouts, and room for future marketing campaigns.",
      },
    ],
    faqs: [
      {
        question: "How much does it cost to have a custom website built?",
        answer:
          "The cost of a custom website depends on the number of pages, design complexity, copywriting, ecommerce needs, integrations, and post-launch support. A small business site is usually simpler than a custom ecommerce website development project with checkout, product management, and advanced workflows.",
      },
      {
        question: "Can ChatGPT build a website?",
        answer:
          "ChatGPT can help plan pages, draft copy, generate code, and speed up parts of website development. A professional custom website development company still adds strategy, design judgment, QA, accessibility checks, performance work, and launch support.",
      },
      {
        question: "What are the 7 C's of website design?",
        answer:
          "The 7 C's are often described as context, content, community, customization, communication, connection, and commerce. For a business website, they are a useful reminder to build around the visitor's needs, clear messaging, conversion paths, and the systems that support the site after launch.",
      },
      {
        question: "What is custom website development?",
        answer:
          "Custom website development is the process of planning, designing, and building a website around a specific business instead of relying on a one-size-fits-all template. It can include custom layouts, CMS setup, ecommerce features, integrations, technical SEO, performance optimization, and launch support.",
      },
    ],
    items: [
      "Custom responsive website development",
      "Mobile-first development",
      "SEO-optimized structure",
      "Fast loading performance",
      "Intuitive user experience",
      "Custom ecommerce website development",
    ],
    image: "/images/services/website-design.jpg",
    seoTitle: "Custom Website Development Services | Lulu Web Studio",
    seoDescription: "Custom website development services for responsive, SEO-ready sites built around your brand, goals, ecommerce needs, and customer journey.",
  },
  {
    id: "seo",
    slug: "seo",
    number: "02",
    title: "SEO",
    shortDescription:
      "Boost your search rankings and drive organic traffic to your website.",
    fullDescription:
      "Our comprehensive SEO services help your business get found by the right customers. We combine technical optimization, content strategy, and link building to improve your search engine rankings and increase organic traffic that converts.",
    items: [
      "Technical SEO audit",
      "Keyword research & strategy",
      "On-page optimization",
      "Content optimization",
      "Local SEO",
      "Performance monitoring",
    ],
    image: "/images/services/seo.jpg",
    seoTitle: "SEO Services | Search Engine Optimization | Lulu Web Studio",
    seoDescription: "Boost your search rankings and drive organic traffic with our comprehensive SEO services. Technical audits, keyword strategy, and performance monitoring.",
  },
  {
    id: "logo-design",
    slug: "logo-design",
    number: "03",
    title: "Logo Design",
    shortDescription:
      "Memorable logos that capture your brand identity and make a lasting impression.",
    fullDescription:
      "Your logo is the face of your brand. We design distinctive, versatile logos that communicate your brand values and resonate with your target audience. Every logo we create is crafted to work beautifully across all mediums and sizes.",
    items: [
      "Brand discovery session",
      "Multiple concept designs",
      "Unlimited revisions",
      "Vector file formats",
      "Brand guidelines",
      "Social media assets",
    ],
    image: "/images/services/logo-design-hero.jpg",
    seoTitle: "Logo Design Services | Brand Identity | Lulu Web Studio",
    seoDescription: "Professional logo design services that capture your brand identity. Memorable, versatile logos with unlimited revisions and full brand guidelines.",
  },
  {
    id: "custom-scripting",
    slug: "custom-scripting",
    number: "04",
    title: "Custom Scripting & Coding Solutions",
    shortDescription:
      "Powerful automation and data processing solutions tailored to your business needs.",
    fullDescription:
      "We build custom scripts and coding solutions that automate repetitive tasks, process large datasets, and integrate disparate systems. Our solutions save you time, reduce errors, and streamline your operations. Some examples include data migration scripts, API integrations, custom PDF parsers, Shopify Liquid customizations, and workflow automations with Zapier.",
    items: [
      "Bulk data transfers",
      "Custom PDF parsers",
      "Invoice transformation",
      "Data migration scripts",
      "API integrations",
      "Workflow automation",
    ],
    image: "/images/services/custom-scripting.jpg",
    seoTitle: "Custom Scripting & Coding Solutions | Lulu Web Studio",
    seoDescription: "Custom scripting and automation solutions. Bulk data transfers, PDF parsers, invoice transformation, API integrations, and workflow automation.",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    number: "05",
    title: "Mobile App Development",
    shortDescription:
      "Native and cross-platform mobile apps that engage users and drive results.",
    fullDescription:
      "We design and develop mobile applications for iOS and Android that deliver exceptional user experiences. From concept to launch, we handle every aspect of app development to bring your vision to life.",
    items: [
      "iOS & Android development",
      "Cross-platform solutions",
      "UI/UX design",
      "App Store optimization",
      "Push notifications",
      "Analytics integration",
    ],
    image: "/images/services/mobile-app.jpg",
    seoTitle: "Mobile App Development | iOS & Android Apps | Lulu Web Studio",
    seoDescription: "Professional mobile app development for iOS and Android. Cross-platform solutions, UI/UX design, App Store optimization, and analytics integration.",
  },
];

export function getAllServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, limit = 3): Service[] {
  return services.filter((s) => s.slug !== slug).slice(0, limit);
}
