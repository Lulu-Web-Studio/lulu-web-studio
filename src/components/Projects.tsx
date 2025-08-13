"use client";

import {useRef} from "react";
import {motion, useScroll, useTransform, useSpring} from "framer-motion";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

type Project = {
    title: string;
    description: string;
    color: string;
    href: string;
};

const projects: Project[] = [
    {
        title: "narbl",
        description:
            "An advanced multi‑LLM chatbot that ensembles models to reduce hallucinations when accuracy matters most.",
        color: "#274f9c",
        href: "https://l.narb.cc",
    },
    {
        title: "narby",
        description:
            "A geo‑centric app for solo use or groups—share context, align plans, and improve daily logistics.",
        color: "#172f50",
        href: "/project/narby",
    },
    {
        title: "narba",
        description:
            "An autonomous voice agent for outbound calls—answers product questions and books appointments.",
        color: "#4241b8",
        href: "/project/narba",
    },
];

export default function Projects() {
    const railRef = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({
        // use the document scroller (your <main>)
        container: typeof window !== "undefined" ? undefined : undefined,
    });

    // smooth progress for the right-side rail
    const smooth = useSpring(scrollYProgress, {stiffness: 100, damping: 20});
    const railScaleY = useTransform(smooth, [0, 1], [0.05, 1]);

    return (
        <section aria-label="Projects" className="relative">
            {/* Progress rail */}
            <div className="pointer-events-none hidden md:block">
                <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40" ref={railRef}>
                    <div className="h-64 w-1 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                            style={{scaleY: railScaleY}}
                            className="origin-top h-full w-full bg-white/50"
                        />
                    </div>
                </div>
            </div>

            {/* Cards: each one full screen & snap-start */}
            {projects.map((p, idx) => (
                <ProjectSection key={idx} index={idx} {...p} />
            ))}
        </section>
    );
}

function ProjectSection({
    title,
    description,
    color,
    href,
    index,
}: Project & {index: number}) {
    const ref = useRef<HTMLDivElement | null>(null);

    // Observe this section entering the viewport to drive local animations
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "start start"],
    });

    // Scale and fade as the section reaches the top
    const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

    // Subtle parallax on body copy
    const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

    return (
        <section
            ref={ref}
            className="snap-start w-full min-h-[100svh] flex items-stretch"
        >
            <motion.div
                style={{scale, opacity, backgroundColor: color}}
                className="
          relative w-full min-h-[100svh]
          flex flex-col justify-center
          px-6 sm:px-8 md:px-16
        "
            >
                {/* Top label / index */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 text-white/70 text-sm tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                </div>

                <div className="max-w-6xl">
                    <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                        {title}
                    </h2>

                    <motion.p
                        style={{y}}
                        className="mt-6 text-white/90 text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed"
                    >
                        {description}
                    </motion.p>

                    <div className="mt-10">
                        <Link
                            href={href}
                            className="
                inline-flex items-center gap-3
                rounded-full border border-white/40 bg-white/10
                px-6 py-3 text-white
                backdrop-blur
                transition-all hover:bg-white hover:text-black
              "
                        >
                            Learn more
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>

                {/* Soft vignette at bottom for readability when overlapping next card */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
        </section>
    );
}
