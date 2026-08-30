import React from "react";
import Link from "next/link";
import HeaderText from "@/components/Text/HeaderText";
import SecondaryText from "@/components/Text/BodyText";

const SERVICES = [
    {
        number: "01",
        title: "Website Design & Development",
        href: "/services/custom-website-development",
        blurb:
            "We build fast, responsive, and visually engaging websites tailored to your business. Our team uses modern frameworks like React, Next.js, and Tailwind CSS to create mobile-friendly designs optimized for user experience and search engine performance. Every project is coded cleanly, ensuring scalability, speed, and long-term maintainability. In many cases, we also develop websites on platforms like Shopify, Wix, and WordPress for businesses that prefer a flexible, user-friendly content management system without custom coding.",
        items: [
            "Custom Web Design",
            "Responsive Development",
            "Performance Optimization",
            "Shopify, Wix & WordPress Builds",
        ],
    },
    {
        number: "02",
        title: "SEO & Digital Marketing",
        href: "/services/seo",
        blurb:
            "We help your business rank higher and attract more customers through proven SEO strategies and Google Ads. From keyword research and on-page optimization to technical SEO and local search, we make sure your website gets discovered. We also manage backlinks, analytics, and paid advertising to maximize visibility and ROI.",
        items: [
            "Keyword Research & Strategy",
            "On-Page & Technical SEO",
            "Local SEO Optimization",
            "Google Ads Management",
        ],
    },
    {
        number: "03",
        title: "Logo Design",
        href: "/services/logo-design",
        blurb:
            "Your logo is the face of your brand. We design distinctive, versatile logos that communicate your brand values and resonate with your target audience. Every logo we create is crafted to work beautifully across all mediums and sizes.",
        items: [
            "Brand Discovery Session",
            "Multiple Concept Designs",
            "Unlimited Revisions",
            "Vector File Formats",
            "Brand Guidelines",
        ],
    },
    {
        number: "04",
        title: "App Development",
        href: "/services/mobile-app-design-services",
        blurb:
            "We design and develop scalable mobile and web applications that solve real problems and deliver seamless user experiences. Using technologies like React Native and Firebase, we build apps that are fast, secure, and cross-platform. From MVPs to enterprise solutions, we handle the full lifecycle from idea to deployment.",
        items: [
            "iOS & Android Apps",
            "Cross-Platform Solutions",
            "API Development",
            "UI/UX for Mobile",
            "App Store Deployment",
        ],
    },
    {
        number: "05",
        title: "Coding & Scripting Solutions",
        href: "/services/custom-scripting",
        blurb:
            "Need automation, custom integrations, or backend scripting? We provide coding and scripting services that streamline workflows, connect APIs, and handle repetitive tasks. Whether it's JavaScript, Python, or Rust, our scripts are lightweight, efficient, and secure—built to save you time and keep systems running smoothly.",
        items: [
            "API Integrations",
            "Automation Scripts",
            "Custom Tooling",
            "Database Scripting",
            "Cloud Functions & Serverless",
        ],
    },
];


export default function Services() {
    return (
        <section className="bg-white min-h-[80vh] flex items-center justify-center rounded-t-[50px] py-24 pb-40 relative z-10 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28">
            <div className=" w-5/6 mx-auto">
                {/* Section Eyebrow */}
                <SecondaryText as="h2" className="uppercase text-md text-neutral-500 text-center mb-10 md:mb-14 ">
                    Our Services
                </SecondaryText>
                {/* </div> */}

                <div className="divide-y divide-neutral-200">
                    {SERVICES.map((s, idx) => (
                        <Link
                            key={s.number}
                            href={s.href}
                            className="py-24 sm:py-40 flex flex-col sm:flex-row justify-between items-start group block hover:bg-neutral-50 transition-colors duration-300 -mx-6 px-6 rounded-2xl"
                        >
                            {/* Number */}
                            <div className="flex flex-row gap-x-5">
                                <span className="text-2xl md:text-3xl tabular-nums text-neutral-400 group-hover:text-neutral-600 transition-colors">
                                    {s.number}
                                </span>
                                {/* Title */}
                                <HeaderText as="h3" variant="small" className="col-span-10 md:col-span-4 w-3/4 leading-tight text-neutral-900 group-hover:text-neutral-700 transition-colors">
                                    {s.title}
                                </HeaderText>
                            </div>



                            {/* Right column: dot • blurb • list */}
                            <div className="col-span-12 md:col-span-7 md:ml-auto mt-6 md:mt-0">

                                <SecondaryText className="text-neutral-700 leading-relaxed max-w-2xl">
                                    {s.blurb}
                                </SecondaryText>

                                <ul className="mt-6 space-y-3 text-base tracking-wide text-neutral-900">
                                    {s.items.map((it) => (
                                        <li key={it} className="uppercase">
                                            {it}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
