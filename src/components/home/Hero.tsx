// "use client";
// import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";
// import Image from "next/image";
// import Link from "next/link";
// import HeaderText from "./Text/HeaderText";
// import SecondaryText from "./Text/BodyText";

// export default function HeroParallax() {
//     return (
//         <section className="relative h-screen md:h-[180vh]">
//             <ParallaxBanner className="h-full">
//                 <ParallaxBannerLayer speed={-20}>
//                     <div className="absolute inset-0">
//                         <Image
//                             src="/images/home/hero.jpg"
//                             alt=""
//                             fill
//                             priority
//                             className="object-cover"
//                         />
//                     </div>
//                 </ParallaxBannerLayer>

//                 {/* Dark scrim over image */}
//                 <ParallaxBannerLayer speed={-10}>
//                     <div className="absolute inset-0 bg-black/50" />
//                     {/* Bottom fade for extra contrast like the reference */}
//                     <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black/70" />
//                 </ParallaxBannerLayer>

//                 {/* Foreground content */}
//                 <ParallaxBannerLayer speed={8}>
//                     <div className="relative z-10 mx-auto flex h-full w-[92%] max-w-6xl items-center justify-start md:justify-around flex-col ">
//                         <div className="max-w-3xl text-center">
//                             <HeaderText variant="large" as="h1" className="tracking-tight text-white font-mono ">
//                                 Lulu Web Studio
//                             </HeaderText>
//                             <SecondaryText className="mt-5 text-white/80 text-pretty text-base sm:text-lg">
//                                 We create beautiful, functional websites that help your business grow.
//                             </SecondaryText>

//                             <div className="mt-8 flex items-center justify-center gap-3">
//                                 <Link
//                                     href="/get-estimate"
//                                     className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-black text-sm sm:text-base"
//                                 >
//                                     Start Charging Today
//                                 </Link>
//                                 <Link
//                                     href="#how-it-works"
//                                     className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-3 text-white text-sm sm:text-base"
//                                 >
//                                     How it works
//                                 </Link>
//                             </div>
//                         </div>


//                         <div className="flex flex-row w-full gap-10  justify-between ">



//                             {/* Left: Big headline + CTA */}
//                             <div className="flex flex-col justify-center">
//                                 <HeaderText className="text-white ">
//                                     We love &amp; live<br />architecture
//                                 </HeaderText>

//                                 <div className="mt-10">
//                                     <Link
//                                         href="/our-story"
//                                         className="group inline-flex items-center gap-4 text-white"
//                                     >
//                                         <span className="text-xl">Our Story</span>
//                                         <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40">
//                                             <svg
//                                                 className="h-5 w-5 transition -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                                                 viewBox="0 0 24 24"
//                                                 fill="none"
//                                                 stroke="currentColor"
//                                                 strokeWidth={1.8}
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                             >
//                                                 <path d="M7 17L17 7" />
//                                                 <path d="M8 7h9v9" />
//                                             </svg>
//                                         </span>
//                                     </Link>
//                                 </div>
//                             </div>

//                             {/* Right: Long copy + contact */}
//                             <div className="flex flex-col justify-center max-w-5/12">
//                                 <p className="text-white/90 text-lg leading-relaxed">
//                                     Arkitect creates luxurious, modern spaces where innovation
//                                     meets timeless elegance. Our designs push boundaries, blending
//                                     precision, creativity, and functionality.
//                                 </p>
//                                 <p className="mt-6 text-white/90 text-lg leading-relaxed">
//                                     With a commitment to excellence, we craft architectural
//                                     masterpieces that inspire and endure. Every project reflects
//                                     our passion for bold ideas, meticulous craftsmanship, and the
//                                     future of contemporary living.
//                                 </p>

//                                 <div className="mt-10 space-y-3">
//                                     <a
//                                         href="tel:+4917612345678"
//                                         className="block text-white text-xl hover:opacity-90"
//                                     >
//                                         +1234567890
//                                     </a>
//                                     <a
//                                         href="mailto:hello@example.com"
//                                         className="inline-block border-b border-white/50 text-white text-xl hover:border-white"
//                                     >
//                                         hello@example.com
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </ParallaxBannerLayer>
//             </ParallaxBanner>
//         </section>
//     );
// }
"use client";
import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";
import Image from "next/image";
import Link from "next/link";
import SecondaryText from "../Text/BodyText";
import HeaderText from "../Text/HeaderText";
import {config} from "@/config";


export default function HeroParallax() {
    return (
        <section className="relative h-[90vh] md:h-[180vh]">
            <ParallaxBanner className="h-full">
                <ParallaxBannerLayer speed={-20}>
                    <div className="absolute inset-0">
                        <Image
                            src="/images/home/hero.jpg"
                            alt=""
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
                    <div className="relative z-10 mx-auto flex h-full w-[92%] max-w-6xl flex-col items-center justify-center md:justify-around">
                        {/* Top Centered Intro */}
                        <div className="max-w-2xl text-center px-4">
                            <HeaderText
                                variant="large"
                                as="h1"
                                className="tracking-tight text-white"
                            >
                                Lulu Web Studio
                            </HeaderText>
                            <SecondaryText className="mt-4 text-white/80 text-base ">
                                Web development, software engineering, SEO, and digital solutions that elevate your brand and drive results.
                            </SecondaryText>

                            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-black text-sm sm:text-base"
                                >
                                    Get Started
                                </Link>
                                <Link
                                    href="#how-it-works"
                                    className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-2.5 text-white text-sm sm:text-base"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        {/* Two-column section */}
                        <div className="hidden mt-10 md:flex flex-col md:flex-row md:gap-12 w-full px-4">
                            {/* Left */}
                            <div className="flex flex-col justify-center text-center md:text-left md:w-1/2">
                                <HeaderText className="text-white text-2xl sm:text-3xl md:text-4xl">
                                    We craft digital<br />experiences
                                </HeaderText>

                                <div className="mt-6 md:mt-10">
                                    <Link
                                        href="/about"
                                        className="group inline-flex items-center gap-3 text-white"
                                    >
                                        <span className="text-lg sm:text-xl">About Us</span>
                                        <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/40">
                                            <svg
                                                className="h-5 w-5 transition -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={1.8}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M7 17L17 7" />
                                                <path d="M8 7h9v9" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            {/* Right */}
                            <div className="mt-8 md:mt-0 md:w-1/2 text-center md:text-left">
                                <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                                    Lulu Web Studio specializes in custom web development, software engineering,
                                    mobile apps, and digital marketing solutions that transform businesses. We combine
                                    cutting-edge technology with strategic thinking to deliver websites, applications,
                                    and custom software that are fast, beautiful, and built to convert.
                                </p>
                                <p className="mt-4 sm:mt-6 text-white/90 text-base sm:text-lg leading-relaxed">
                                    From responsive websites built with React and Next.js to comprehensive SEO strategies,
                                    custom app development, and general software engineering, we provide end-to-end digital
                                    services. Whether you need a new website, mobile app, custom software solution, or
                                    marketing campaign, we&apos;re here to help your business thrive online.
                                </p>

                                <div className="mt-6 sm:mt-10 space-y-2 sm:space-y-3">
                                    <a
                                        href={`tel:+${config.phoneNumber}`}
                                        className="block text-white text-lg sm:text-xl hover:opacity-90"
                                    >
                                        {config.phoneNumber}
                                    </a>
                                    <a
                                        href={`mailto:${config.emailAddress}`}
                                        className="inline-block border-b border-white/50 text-white text-lg sm:text-xl hover:border-white"
                                    >
                                        {config.emailAddress}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </section>
    );
}
