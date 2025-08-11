"use client";

import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";
import Image from "next/image";
import Link from "next/link";

export default function HeroParallax() {
    return (
        <section className="relative h-screen ">
            <ParallaxBanner className="h-full w-full rounded-none">
                {/* Background image layer (slow) */}
                <ParallaxBannerLayer speed={-20}>
                    <div className="absolute inset-0">
                        <Image
                            src="/images/home/background.webp"
                            alt=""
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </ParallaxBannerLayer>

                {/* Midground decorative shapes */}
                <ParallaxBannerLayer speed={-10}>
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -left-24 top-16 h-64 w-64 rounded-full opacity-30 blur-3xl bg-yellow-300" />
                        <div className="absolute -right-16 bottom-24 h-56 w-56 rounded-full opacity-25 blur-3xl bg-blue-400" />
                    </div>
                </ParallaxBannerLayer>

                {/* Subtle gradient overlay (static) */}
                <ParallaxBannerLayer speed={0}>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/40" />
                </ParallaxBannerLayer>

                {/* Foreground content (slight opposite speed for depth) */}
                <ParallaxBannerLayer speed={8}>
                    <div className="relative z-10 mx-auto grid h-full w-[92%] max-w-6xl place-items-center text-center">
                        <div className="max-w-3xl">
                            <h1 className="text-balance font-semibold tracking-tight text-white leading-[0.95] text-4xl sm:text-6xl md:text-7xl">
                                Level 2 Charging, Installed Right
                            </h1>
                            <p className="mt-5 text-white/80 text-pretty text-base sm:text-lg">
                                Fast, safe, and code-compliant installs—backed by local pros and solid warranties.
                            </p>

                            <div className="mt-8 flex items-center justify-center gap-3">
                                <Link
                                    href="/get-estimate"
                                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-black text-sm sm:text-base"
                                >
                                    Start Charging Today
                                </Link>
                                <Link
                                    href="#how-it-works"
                                    className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-3 text-white text-sm sm:text-base"
                                >
                                    How it works
                                </Link>
                            </div>
                        </div>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </section>
    );
}
