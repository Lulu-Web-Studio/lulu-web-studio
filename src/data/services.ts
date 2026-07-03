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
    id: "custom-website-development",
    slug: "custom-website-development",
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
    id: "mobile-app-design-services",
    slug: "mobile-app-design-services",
    number: "05",
    title: "Mobile App Design Services",
    shortDescription:
      "Mobile app design services for clear, polished iOS and Android experiences.",
    fullDescription:
      "Our mobile app design services help turn your idea into a clear, usable app experience before development starts. Lulu Web Studio plans the user flow, screen structure, visual direction, and interface details so your iOS or Android app feels polished, easy to use, and ready for the next stage of development.",
    seoSections: [
      {
        heading: "Mobile App Design Services for iOS and Android",
        body: "A good app starts with the way people move through it. We map the main screens, user actions, navigation, and calls to action so the app feels simple instead of confusing.",
      },
      {
        heading: "UX and UI Design Before Development",
        body: "Mobile app design is where the product gets organized. We focus on UX, UI, wireframes, visual styling, and interactive design decisions before the build gets expensive to change.",
      },
      {
        heading: "From App Idea to Development-Ready Screens",
        body: "Whether you need a prototype, MVP, or full app design, we create screens and design direction that can guide development, investor conversations, or internal planning.",
      },
    ],
    faqs: [
      {
        question: "What are mobile app design services?",
        answer:
          "Mobile app design services cover the planning and visual design of an app before or during development. That can include user flows, wireframes, UI design, prototypes, screen layouts, and design systems for iOS, Android, or cross-platform apps.",
      },
      {
        question: "Do I need app design before app development?",
        answer:
          "In most cases, yes. Designing the app first helps clarify what needs to be built, how users will move through it, and what the final product should feel like. It also reduces expensive changes once development starts.",
      },
      {
        question: "Can you design and develop the mobile app?",
        answer:
          "Yes. We can help with mobile app design and development planning, then support the build depending on the scope. Some clients need design files and prototypes first, while others need help taking the app through development and launch.",
      },
    ],
    items: [
      "Mobile app UX design",
      "iOS and Android UI design",
      "Wireframes and user flows",
      "Clickable app prototypes",
      "Design systems for apps",
      "Development-ready screens",
    ],
    image: "/images/services/mobile-app.jpg",
    seoTitle: "Mobile App Design Services | Lulu Web Studio",
    seoDescription: "Mobile app design services for iOS and Android apps, including UX, UI, wireframes, prototypes, and development-ready screens.",
  },
  {
    id: "vibe-code-debugging",
    slug: "vibe-code-debugging",
    number: "06",
    title: "Vibe Code Debugging & Fixes",
    shortDescription:
      "Stuck with a broken app you built with AI? We debug and fix vibe-coded projects — first 30 minutes free.",
    fullDescription:
      "AI tools like Lovable, Bolt, Replit, Cursor, and v0 make it fast to get a first version of an app running. But once something breaks — or the AI starts fixing one bug by creating three more — most vibe coders hit a wall. We read the actual codebase, find what's really wrong, and fix it, so your app is stable instead of one prompt away from breaking again.",
    seoSections: [
      {
        heading: "Debugging Help for Apps Built with AI Coding Tools",
        body: "Vibe coding gets you a working prototype fast, but debugging is where most AI-generated projects get stuck. We work directly in your Lovable, Bolt, Replit, Cursor, v0, or Base44 project, trace the actual cause of a bug instead of guessing, and fix it without breaking the rest of the app.",
      },
      {
        heading: "Free 30-Minute Diagnostic Call",
        body: "Send over your project and book a free 30-minute call. We'll look at your codebase, tell you what's actually broken and why, and give you a straight answer on what it takes to fix — no obligation to hire us afterward.",
      },
      {
        heading: "From Broken Prototype to Production-Ready",
        body: "Beyond one-off bug fixes, we clean up structure, fix security and data-handling issues common in AI-generated code, and get the app stable enough to actually launch and grow on.",
      },
    ],
    faqs: [
      {
        question: "What is vibe coding?",
        answer:
          "Vibe coding is building an app by describing what you want to an AI tool instead of writing code line by line. It's fast for getting a first version running, but it can leave behind bugs, security gaps, and messy structure that are hard to fix without reading the underlying code.",
      },
      {
        question: "Can you fix apps built with Lovable, Bolt, Replit, or Cursor?",
        answer:
          "Yes. We regularly debug and fix projects built with Lovable, Bolt, Replit, Cursor, v0, Base44, and similar AI coding tools, whether the codebase came from one tool or was patched together across several.",
      },
      {
        question: "How does the free 30-minute session work?",
        answer:
          "Share access to your project before the call. In the first 30 minutes, we look at the code, identify what's actually causing the bug or crash, and explain it in plain terms. If it's a quick fix, we may resolve it on the spot. If it needs more work, we'll quote it clearly before starting.",
      },
      {
        question: "Why does my AI-generated code keep breaking?",
        answer:
          "AI coding tools often fix one bug by editing code elsewhere, which can introduce new bugs without warning. Without someone reviewing the full picture, small issues compound. We audit the whole codebase, not just the one broken feature, so fixes actually hold.",
      },
    ],
    items: [
      "Free 30-minute diagnostic call",
      "Bug fixes for Lovable, Bolt, Replit, Cursor, v0, and Base44 apps",
      "Full codebase review and cleanup",
      "Security and data-handling fixes",
      "Performance and stability fixes",
      "Ongoing support after launch",
    ],
    image: "/images/services/custom-scripting.jpg",
    seoTitle: "Vibe Code Debugging & Bug Fixes | Free 30-Min Call | Lulu Web Studio",
    seoDescription: "Stuck with a broken vibe-coded app? We debug and fix apps built with Lovable, Bolt, Replit, Cursor, and v0. First 30 minutes free.",
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
