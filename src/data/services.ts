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
  ctaHref?: string;
  ctaLabel?: string;
  disclaimer?: {
    points: string[];
  };
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
    seoTitle: "Custom Website Development Services",
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
    seoSections: [
      {
        heading: "Technical SEO That Fixes What's Holding You Back",
        body: "Before we write a word of content, we audit crawlability, site speed, Core Web Vitals, structured data, and indexation. Most ranking problems trace back to technical issues Google can't see past — we find and fix those first.",
      },
      {
        heading: "On-Page and Content Optimization Built Around Intent",
        body: "We map keyword research to what your customers actually search for at each stage of their decision, then optimize titles, headings, internal links, and page content so every page has a clear job to do in search results.",
      },
      {
        heading: "Local SEO for Businesses That Serve a Service Area",
        body: "For businesses with a physical location or service area, we build out Google Business Profile optimization, local schema, and citation consistency so you show up in the map pack, not just the organic results below it.",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to work?",
        answer:
          "Local SEO often shows measurable movement in 60–90 days. Competitive national keywords usually take 6–12 months of consistent technical and content work. We report monthly so you can see qualified traffic and rankings move over time.",
      },
      {
        question: "What's included in an SEO audit?",
        answer:
          "A technical crawl for indexation and Core Web Vitals issues, an on-page review of titles, headings, and content for every key page, a backlink and competitor gap analysis, and a prioritized action plan ranked by impact.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No legitimate SEO provider can guarantee specific rankings — search algorithms change constantly and rankings depend on factors outside anyone's full control. We guarantee transparent reporting, consistent technical and content work, and steady improvement in qualified organic traffic.",
      },
      {
        question: "Is SEO better than paid ads?",
        answer:
          "They solve different problems. Paid ads produce traffic immediately but stop the moment you stop paying. SEO takes longer to build but compounds — pages you rank for keep sending traffic without an ongoing per-click cost. Most businesses benefit from both, weighted differently depending on budget and timeline.",
      },
    ],
    items: [
      "Technical SEO audit",
      "Keyword research & strategy",
      "On-page optimization",
      "Content optimization",
      "Local SEO",
      "Performance monitoring",
    ],
    image: "/images/services/seo.jpg",
    seoTitle: "SEO Services | Search Engine Optimization",
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
    seoSections: [
      {
        heading: "Logo Design Grounded in Brand Strategy",
        body: "Before we sketch a single concept, we talk through your audience, positioning, and competitors. A logo that isn't grounded in strategy is just decoration — ours are built to actually represent what makes your business different.",
      },
      {
        heading: "Multiple Concepts, Not One Guess",
        body: "We present several distinct directions rather than one design and a hope. That gives you real options to react to instead of a single take-it-or-leave-it logo.",
      },
      {
        heading: "Delivered Ready to Use Everywhere",
        body: "Every final logo ships as vector files (SVG, EPS, AI) plus PNG exports, with a brand guidelines document covering color codes, spacing, and usage rules so it looks consistent on your website, packaging, and social channels.",
      },
    ],
    faqs: [
      {
        question: "How much does professional logo design cost?",
        answer:
          "Logo design pricing depends on the number of concepts, revision rounds, and whether you need a full brand identity system (color palette, typography, guidelines) alongside the mark itself. We provide a fixed quote after a short discovery call.",
      },
      {
        question: "How many logo concepts will I see?",
        answer:
          "We typically present multiple distinct concept directions in the first round, then refine your chosen direction through unlimited revisions until it's right.",
      },
      {
        question: "What files do I get with my final logo?",
        answer:
          "You receive vector formats (SVG, EPS, AI) for anything that needs to scale — print, signage, merchandise — plus PNG exports for web and social use, along with a brand guidelines document.",
      },
      {
        question: "Can you design a full brand identity, not just a logo?",
        answer:
          "Yes. Alongside the logo we can develop a color palette, typography system, and social media assets so your brand looks consistent everywhere it shows up.",
      },
    ],
    items: [
      "Brand discovery session",
      "Multiple concept designs",
      "Unlimited revisions",
      "Vector file formats",
      "Brand guidelines",
      "Social media assets",
    ],
    image: "/images/services/logo-design-hero.jpg",
    seoTitle: "Logo Design Services | Brand Identity",
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
    seoSections: [
      {
        heading: "Automation Built Around Your Actual Workflow",
        body: "We start by mapping the manual, repetitive steps costing your team the most time — bulk data transfers, invoice processing, order syncing — then script around your existing tools instead of asking you to replace them.",
      },
      {
        heading: "Custom Integrations Between Systems That Don't Talk",
        body: "Most businesses run on a mix of platforms that were never designed to work together. We write the API integrations and data transformations that connect them, so information moves automatically instead of through manual copy-paste.",
      },
      {
        heading: "Reliable Scripts, Not Fragile One-Offs",
        body: "Scripts that break silently cost more than the manual work they replaced. We build with error handling, logging, and clear documentation so automations keep running and are easy to hand off or extend later.",
      },
    ],
    faqs: [
      {
        question: "What kinds of tasks can be automated with custom scripting?",
        answer:
          "Common examples include bulk data transfers between systems, custom PDF parsing and invoice transformation, data migrations between platforms, API integrations that sync inventory or orders, and Zapier-style workflow automations for repetitive manual tasks.",
      },
      {
        question: "What languages and tools do you use?",
        answer:
          "We build with JavaScript/TypeScript and Python most often, depending on the task, and integrate with platforms like Shopify (Liquid), Zapier, and whatever APIs your existing systems expose.",
      },
      {
        question: "Can you connect two systems that don't normally work together?",
        answer:
          "Yes — this is one of the most common requests we get. If both systems expose an API or allow data export/import, we can typically build a script or integration that keeps them in sync automatically.",
      },
      {
        question: "How do you price custom scripting projects?",
        answer:
          "Pricing depends on the complexity of the data, how many systems are involved, and whether the automation needs to run on a schedule or handle edge cases and errors gracefully. We scope the task on a call and provide a fixed quote before starting.",
      },
    ],
    items: [
      "Bulk data transfers",
      "Custom PDF parsers",
      "Invoice transformation",
      "Data migration scripts",
      "API integrations",
      "Workflow automation",
    ],
    image: "/images/services/custom-scripting.jpg",
    seoTitle: "Custom Scripting & Coding Solutions",
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
    seoTitle: "Mobile App Design Services",
    seoDescription: "Mobile app design services for iOS and Android apps, including UX research, UI design, wireframes, clickable prototypes, and development-ready screens.",
  },
  {
    id: "vibe-code-debugging",
    slug: "vibe-code-debugging",
    number: "06",
    title: "Vibe Code Debugging & Fixes",
    shortDescription:
      "Stuck with a broken app you built with AI? Book a paid debugging session for hands-on help.",
    fullDescription:
      "AI tools like Lovable, Bolt, Replit, Cursor, and v0 make it fast to get a first version of an app running. But once something breaks — or the AI starts fixing one bug by creating three more — most vibe coders hit a wall. We read the actual codebase, find what's really wrong, and fix it, so your app is stable instead of one prompt away from breaking again.",
    seoSections: [
      {
        heading: "Debugging Help for Apps Built with AI Coding Tools",
        body: "Vibe coding gets you a working prototype fast, but debugging is where most AI-generated projects get stuck. We work directly in your Lovable, Bolt, Replit, Cursor, v0, or Base44 project, trace the actual cause of a bug instead of guessing, and fix it without breaking the rest of the app.",
      },
      {
        heading: "Paid Debugging Calls for Vibe-Coded Apps",
        body: "Book a debugging session when you need focused technical help, not another round of guesses. We look at the code, trace what is actually causing the bug, and explain the fix in plain terms while we work.",
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
        question: "How does the debugging session work?",
        answer:
          "Share access to your project before the call. During the session, we look at the code, identify what's actually causing the bug or crash, and explain it in plain terms. If it's a quick fix, we may resolve it on the spot. If it needs more work, we'll quote it clearly before starting.",
      },
      {
        question: "Why does my AI-generated code keep breaking?",
        answer:
          "AI coding tools often fix one bug by editing code elsewhere, which can introduce new bugs without warning. Without someone reviewing the full picture, small issues compound. We audit the whole codebase, not just the one broken feature, so fixes actually hold.",
      },
    ],
    items: [
      "Paid debugging call for AI-built apps",
      "Bug fixes for Lovable, Bolt, Replit, Cursor, v0, and Base44 apps",
      "Full codebase review and cleanup",
      "Security and data-handling fixes",
      "Performance and stability fixes",
      "Ongoing support after launch",
    ],
    image: "/images/services/custom-scripting.jpg",
    seoTitle: "Vibe Code Debugging & Bug Fixes",
    seoDescription: "Stuck with a broken vibe-coded app? Book a paid debugging call for apps built with Lovable, Bolt, Replit, Cursor, v0, and similar AI coding tools.",
    ctaHref: "/contact?event=debugging#book",
    ctaLabel: "Book a Debugging Call",
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
