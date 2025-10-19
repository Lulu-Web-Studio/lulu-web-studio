"use client";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Image from "next/image";
import HeaderText from "./Text/HeaderText";
import SecondaryText from "./Text/BodyText";

interface ProjectHeroProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt?: string;
    backgroundColor?: string;
    textColor?: string;
}

export default function ProjectHero({
    title,
    description,
    imageSrc,
    imageAlt = "",
    backgroundColor = "bg-[#152D47]",
    textColor = "text-white"
}: ProjectHeroProps) {
    return (
        <section className="relative h-[90vh] md:h-[180vh]">
            <ParallaxBanner className="h-full">
                <ParallaxBannerLayer speed={-20}>
                    <div className="absolute inset-0">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </ParallaxBannerLayer>

                {/* Overlay + fade */}
                <ParallaxBannerLayer speed={-10}>
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black/70" />
                </ParallaxBannerLayer>

                {/* Foreground */}
                <ParallaxBannerLayer speed={8}>
                    <div className="relative z-10 mx-auto flex h-full w-[92%] max-w-6xl flex-col items-center justify-center">
                        <div className="max-w-3xl text-center px-4">
                            <HeaderText
                                variant="large"
                                as="h1"
                                className={`tracking-tight ${textColor} font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
                            >
                                {title}
                            </HeaderText>
                            <SecondaryText className={`mt-6 ${textColor}/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto`}>
                                {description}
                            </SecondaryText>
                        </div>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </section>
    );
}
