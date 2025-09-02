"use client"
import {useRef} from "react";
import {useScroll} from "framer-motion";
import {ReactOriginal, NextjsOriginal, TypescriptOriginal, NodejsOriginal} from 'devicons-react';
import Card from "../Card";

// Custom SVG components for platforms not in devicons
const SquarespaceLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        {/* Add your Squarespace SVG path here */}
        <path d="..." />
    </svg>
);

const WixLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        {/* Add your Wix SVG path here */}
        <path d="..." />
    </svg>
);

export const projects = [
    {
        title: "Paragon Exterior",
        description: `
     narbl is an advanced multi-LLM chatbot that leverages multiple language models simultaneously to provide exceptionally accurate and reliable responses. It's designed for situations when you need the highest level of precision and cannot afford misinformation.
     `,
        imgSrc: "/images/home/services/home.webp",
        color: "#274f9c",
        href: "https://l.narb.cc",
        techStack: (
            <>
                <ReactOriginal size="24" />
                <NextjsOriginal size="24" />
                <TypescriptOriginal size="24" />
            </>
        )
    },
    {
        title: "The Facial Surgery Center",
        description: `
     narby is an innovative geo-location app designed to improve the quality of life for its users. You can choose to use it individually or join/create a group with shared values and goals.
     `,
        // imgSrc: "/images/home/narby-demo.png",
        color: "#fbe8d9",
        href: "/project/narby",
        techStack: (
            <>
                <ReactOriginal size="24" />
                <NodejsOriginal size="24" />
                <TypescriptOriginal size="24" />
            </>
        )
    },
    {
        title: "narb",
        description: `
     An autonomous AI voice assistant
     that performs outbound phone calls on your behalf,
     handling product inquiries and appointment scheduling with human-like precision.
     `,
        imgSrc: "/images/what-to-expect/consult.png",
        color: "#4241b8",
        href: "/project/narba",
        techStack: (
            <>
                <NextjsOriginal size="24" />
                <TypescriptOriginal size="24" />
                <NodejsOriginal size="24" />
            </>
        )
    },
    {
        title: "Gabby Lulu's Portfolio",
        description: `
     A portfolio website showcasing creative works and projects, built with modern web technologies to provide an engaging user experience.
     `,
        imgSrc: "/images/home/portfolio-demo.png",
        color: "#1a1a1a",
        href: "/project/portfolio",
        techStack: (
            <>
                <SquarespaceLogo />
                <WixLogo />
            </>
        )
        
    },
    {
        title: "The Alon Group",
        description: `
     A portfolio website showcasing creative works and projects, built with modern web technologies to provide an engaging user experience.
     `,
        imgSrc: "/images/home/portfolio-demo.png",
        color: "#1a1a1a",
        href: "/project/portfolio",
        techStack: (
            <>
                <SquarespaceLogo />
                <WixLogo />
            </>
        )

    },
    {
        title: "Ganan Landscaping",
        description: `
     A portfolio website showcasing creative works and projects, built with modern web technologies to provide an engaging user experience.
     `,
        imgSrc: "/images/home/portfolio-demo.png",
        color: "#1a1a1a",
        href: "/project/portfolio",
        techStack: (
            <>
                <SquarespaceLogo />
                <WixLogo />
            </>
        )

    },
    {
        title: "Bagel Shop",
        description: `
     A portfolio website showcasing creative works and projects, built with modern web technologies to provide an engaging user experience.
     `,
        imgSrc: "/images/home/portfolio-demo.png",
        color: "#1a1a1a",
        href: "/project/portfolio",
        techStack: (
            <>
                <SquarespaceLogo />
                <WixLogo />
            </>
        )

    },
    {
        title: "Amber's Jewelry Boutique",
        description: `
     A portfolio website showcasing creative works and projects, built with modern web technologies to provide an engaging user experience.
     `,
        imgSrc: "/images/home/portfolio-demo.png",
        color: "#1a1a1a",
        href: "/project/portfolio",
        techStack: (
            <>
                <SquarespaceLogo />
                <WixLogo />
            </>
        )

    }
]

export default function Products() {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <div ref={container} className="relative z-10 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28">
            {
                projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i) * 0.05);
                    return (
                        <Card
                            title={project.title}
                            description={project.description}
                            color={project.color}
                            imageSrc={project.imgSrc}
                            techStack={project.techStack}
                            key={`p_${i}`}
                            i={i}
                            progress={scrollYProgress}
                            range={[i * .25, 1]}
                            targetScale={targetScale}
                            href={project.href}
                        />
                    )
                })
            }
        </div>
    )
}