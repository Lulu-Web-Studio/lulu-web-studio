"use client";
import {useTransform, motion, useScroll} from "framer-motion";
import {useRef} from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import {ArrowRight} from "lucide-react";
import HeaderText from "@/components/Text/HeaderText";
import SecondaryText from "@/components/Text/BodyText";


export type CardDesignProps = {
    backgroundColor: string; // Tailwind class like "bg-blue-600"
    textColor: string; // Tailwind class like "text-white"
    accentColor: string; // Tailwind class like "bg-blue-600"
    accentColor2: string; // Tailwind class like "bg-blue-800"
    techStack: React.ReactNode;
    imageSrc: string;
    imageAlt?: string;
}

export interface CardProps {
    i: number;

    title: string;
    slug?: string;
    description: string;
    href: string;
    externalUrl?: string;
    design: CardDesignProps;
    isLast?: boolean;
}

const Card = ({
    i,
    title,
    description,
    href,
    design,
    isLast = false,
}: CardProps) => {
    const container = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    // const scale = useTransform(progress, range, [1, targetScale]);
    const contentY = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.8, 1]);

    return (
        <div ref={container} className={clsx(design.textColor, "min-h-screen flex items-center justify-center sticky top-0", isLast ? "rounded-t-[50px]" : "rounded-[50px]")}>
            <motion.div
                className={clsx(
                    design.backgroundColor,
                    "relative flex flex-col w-full h-screen origin-top overflow-hidden p-8 sm:p-10 md:p-12 lg:p-16",
                    isLast ? "rounded-t-[50px]" : "rounded-[50px]"
                )}
            >

                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 0.3, duration: 0.5}}
                    className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20"
                >
                    <div className="flex gap-2 p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                        {design.techStack}
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    style={{y: contentY, opacity: contentOpacity}}
                    className="relative z-10 h-full flex flex-col justify-around"
                >

                    <div className="flex flex-row w-full justify-between items-center">
                        <div className="w-1/2">
                            <HeaderText as="h2" className="text-left m-0 font-bold mb-6 sm:mb-8 leading-tight">
                                {title}
                            </HeaderText>
                        </div>

                        <div>
                            {design.imageSrc === "undefined"
                                ? <></> : <Image
                                    src={design.imageSrc}
                                    alt={design.imageAlt || ""}
                                    width={160}
                                    height={160}
                                    priority={i === 0}
                                    className="object-contain w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
                                />}
                        </div>

                    </div>


                    <p className="leading-relaxed text-base sm:text-lg md:text-xl max-w-3xl">
                        {description}
                    </p>

                    <div className="pb-6">
                        <Link
                            href={href}
                            className={clsx(
                                design.accentColor,
                                `border-2 border-current`,
                                "group inline-flex items-center transition-all duration-500 rounded-full px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-medium tracking-wide hover:scale-105 hover:shadow-2xl text-white"
                            )}
                        >
                            Learn More
                            <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Card;