
import React from "react";

const SERVICES = [
    {
        number: "01",
        title: "Website Design & Development",
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
        blurb:
            "We help your business rank higher and attract more customers through proven SEO strategies and digital marketing campaigns. From keyword research and on-page optimization to content strategy and local SEO, we make sure your website gets discovered. We also manage backlinks, analytics, and targeted ad campaigns to maximize visibility and ROI.",
        items: [
            "Keyword Research & Strategy",
            "On-Page & Technical SEO",
            "Local SEO Optimization",
            "Content Marketing",
            "PPC & Social Campaigns",
        ],
    },
    {
        number: "03",
        title: "App Development",
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
        number: "04",
        title: "Coding & Scripting Solutions",
        blurb:
            "Need automation, custom integrations, or backend scripting? We provide coding and scripting services that streamline workflows, connect APIs, and handle repetitive tasks. Whether it’s JavaScript, Python, or Rust, our scripts are lightweight, efficient, and secure—built to save you time and keep systems running smoothly.",
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
                <p className="uppercase text-md text-neutral-500 text-center mb-10 md:mb-14 ">
                    Our Services
                </p>
                {/* </div> */}

                <div className="divide-y divide-neutral-200">
                    {SERVICES.map((s, idx) => (
                        <div
                            key={s.number}
                            className="py-24 sm:py-40 flex flex-col sm:flex-row justify-between items-start"
                        >
                            {/* Number */}
                            <div className="flex flex-row gap-x-5">
                                <span className="text-2xl md:text-3xl tabular-nums text-neutral-400">
                                    {s.number}
                                </span>
                                {/* Title */}
                                <h3 className="col-span-10 md:col-span-4 text-[22px] md:text-[28px] leading-tight text-neutral-900">
                                    {s.title}
                                </h3>
                            </div>



                            {/* Right column: dot • blurb • list */}
                            <div className="col-span-12 md:col-span-7 md:ml-auto mt-6 md:mt-0">

                                <p className="text-neutral-700 leading-relaxed text-base md:text-[17px] max-w-2xl">
                                    {s.blurb}
                                </p>

                                <ul className="mt-6 space-y-3 text-sm tracking-wide text-neutral-900">
                                    {s.items.map((it) => (
                                        <li key={it} className="uppercase">
                                            {it}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
