export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
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
    title: "Custom Website Design",
    shortDescription:
      "Stunning, responsive websites tailored to your brand and business goals.",
    fullDescription:
      "We create beautiful, high-performing websites that capture your brand essence and convert visitors into customers. Our design process focuses on user experience, accessibility, and modern aesthetics to ensure your online presence stands out from the competition.",
    items: [
      "Custom responsive design",
      "Mobile-first development",
      "SEO-optimized structure",
      "Fast loading performance",
      "Intuitive user experience",
      "Brand-consistent styling",
    ],
    image: "/images/services/website-design.jpg",
    seoTitle: "Custom Website Design Services | Lulu Web Studio",
    seoDescription: "Professional custom website design services. We create stunning, responsive websites tailored to your brand that convert visitors into customers.",
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
