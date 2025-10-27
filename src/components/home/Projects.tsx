"use client"
import {useRef} from "react";
import {useScroll} from "framer-motion";
import {ReactOriginal, NextjsOriginal, TypescriptOriginal, NodejsOriginal} from 'devicons-react';
import Card, {CardProps} from "../Card";
import Image from "next/image";
import SquarespaceLogo from "../icons/SquarespaceLogo";
import WixLogo from "../icons/WixLogo";
import StripeLogo from "../icons/StripeLogo";


export const projects: Omit<CardProps, 'i' | 'progress' | 'range' | 'targetScale'>[] = [
    {
        title: "Paragon Exterior",
        slug: "paragon-exterior",
        description: `Professional exterior contracting services specializing in roofing, siding, and home renovations. Built a modern, mobile-responsive website with project galleries, service pages, and integrated contact forms to showcase their craftsmanship and generate leads.`,
        href: "https://paragonexterior.com",
        externalUrl: "https://paragonexterior.com",
        design: {
            backgroundColor: "bg-[#152D47]",
            textColor: "text-white",
            accentColor: "bg-amber-600",
            accentColor2: "bg-amber-400",
            techStack: (
                <>
                    <ReactOriginal size="24" />
                    <NextjsOriginal size="24" />
                    <TypescriptOriginal size="24" />
                </>
            ),
            imageSrc: "/images/home/clients/paragon-icon.png",
            imageAlt: "Paragon Exterior logo"
        }
    },
    {
        title: "The Facial Surgery Center",
        slug: "facial-surgery-center",
        description: `Premier facial plastic surgery practice specializing in rhinoplasty, facelifts, and reconstructive procedures. Developed a HIPAA-compliant website with patient portal, virtual consultations, before/after galleries, and appointment scheduling system.`,
        href: "https://facialsurgeryct.com",
        externalUrl: "https://facialsurgeryct.com",
        design: {
            backgroundColor: "bg-[#fbe8d9]",
            textColor: "text-gray-900",
            accentColor: "bg-[#005D64]",
            accentColor2: "bg-[#005D64]",
            techStack: (
                <>
                    <ReactOriginal size="24" />
                    <NextjsOriginal size="24" />
                    <TypescriptOriginal size="24" />
                </>
            ),
            imageSrc: "/images/home/clients/fsc-icon.svg",
            imageAlt: "Facial Surgery Center logo"
        }
    },
    {
        title: "The Alon Group",
        slug: "alon-group",
        description: `Real estate investment and development firm specializing in residential and commercial properties. Created a sleek, modern website with property listings, investor relations portal, and integrated CRM to streamline lead management and showcase their portfolio.`,
        href: "https://www.thealongroup.com",
        externalUrl: "https://www.thealongroup.com",
        design: {
            backgroundColor: "bg-[#1e1e1e]",
            textColor: "text-white",
            accentColor: "bg-[#a26029]",
            accentColor2: "bg-black",
            imageSrc: "/images/home/clients/alon-group-svg.svg",
            techStack: (
                <>
                    <WixLogo size={25} />
                </>
            )
        }

    },
    {
        title: "Ganan Landscaping",
        slug: "ganan-landscaping",
        description: `Full-service landscaping company offering design, installation, and maintenance services for residential and commercial properties. Developed a visually stunning website with interactive project galleries, service descriptions, and integrated booking system to attract new clients and showcase their expertise.`,
        href: "https://www.gananlandscaping.com",
        externalUrl: "https://gananlandscaping.com",
        design: {
            backgroundColor: "bg-[#e0e0dc]",
            textColor: "text-black",
            accentColor: "bg-[#008002]",
            accentColor2: "bg-[#008002]",
            imageSrc: "/images/home/clients/ganan-land.png",
            techStack: (
                <>
                    <SquarespaceLogo size={25} />
                </>
            )
        }
    },
    {
        title: "ISAACC18",
        slug: "isaacc18",
        description: `ISAACC18 ( International Support Of Anesthesia And Critical Care in Israel ) is a dedicated international network of over 200 experienced volunteer anesthesiologists and critical care physicians committed to supporting the Israeli Anesthesia and Critical Care community with clinical staffing, education, and collaborative academic partnerships that foster excellence in medical care in Israel and around the world.`,
        href: "https://www.isaacc18.org",
        externalUrl: "https://isaacc18.org",
        design: {
            backgroundColor: "bg-white",
            textColor: "text-[#1f3a8a]",
            accentColor: "bg-[#1f3a8a]",
            accentColor2: "bg-[#1f3a8a]",
            techStack: (
                <>
                    <ReactOriginal size="24" />
                    <NextjsOriginal size="24" />
                    <TypescriptOriginal size="24" />
                </>
            ),
            imageSrc: "/images/home/clients/isaacc18.webp",
            imageAlt: "ISAACC18 logo"
        }

    },
    {
        title: "Amber's Jewelry Boutique",
        slug: "amber-jewelry",
        description: `Elegant jewelry boutique featuring handcrafted pieces and custom designs. Created an e-commerce platform with stunning product galleries, custom jewelry configurator, secure payment processing, and appointment booking for personal consultations.`,
        href: "https://www.ambersjewelryboutique.com",
        design: {
            backgroundColor: "bg-[whitesmoke]",
            textColor: "text-gray-900",
            accentColor: "bg-[#c42747]",
            accentColor2: "bg-[#c42747]",
            techStack: (
                <>
                    <ReactOriginal size="24" />
                    <NextjsOriginal size="24" />
                    <TypescriptOriginal size="24" />
                    <StripeLogo size={24} />
                </>
            ),
            imageAlt: "Amber's Jewelry Boutique logo",
            imageSrc: "undefined"
        }
    }
]

export default function Products() {
    const container = useRef(null);

    return (
        <div ref={container} className="relative z-10 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28">
            {
                projects.map((project, i) => {
                    return (
                        <Card
                            key={`p_${i}`}
                            i={i}
                            title={project.title}
                            slug={project.slug}
                            description={project.description}
                            href={project.href}
                            externalUrl={project.externalUrl}
                            design={project.design}
                            isLast={i === projects.length - 1}
                        />
                    )
                })
            }
        </div>
    )
}