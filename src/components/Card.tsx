
// "use client";
// import {useTransform, motion, useScroll, MotionValue} from "framer-motion";
// import {useRef} from "react";
// import clsx from "clsx";
// import Link from "next/link";
// import {ArrowRight} from "lucide-react";


// interface CardProps {
//     i: number;
//     progress: MotionValue<number>;
//     range: number[];
//     targetScale: number;
//     title: string;
//     description: string;
//     color: string;
//     href: string;
// }

// const Card = ({i, progress, range, targetScale, title, description, color, href}: CardProps) => {
//     const container = useRef(null);
//     const {scrollYProgress} = useScroll({
//         target: container,
//         offset: ["start end", "start start"],
//     });

//     const scale = useTransform(progress, range, [1, targetScale]);

//     // Create subtle animations for the content
//     const contentY = useTransform(scrollYProgress, [0, 1], [20, 0]);
//     const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.8, 1]);

//     return (
//         <div ref={container} className="min-h-screen flex rounded-[50px] items-center justify-center sticky top-0 ">
//             <motion.div
//                 style={{
//                     backgroundColor: color,
//                     scale,

//                 }}
//                 className={clsx(
//                     "flex flex-col relative w-full rounded-[50px]  origin-top",
//                     "h-screen",
//                     "p-8 sm:p-10 md:p-12 lg:p-16",
//                     ""
//                 )}
//             >
//                 <motion.div
//                     style={{y: contentY, opacity: contentOpacity}}
//                     className="h-full flex flex-col justify-center"
//                 >
//                     <div className="mb-6 sm:mb-8">
//                         <div className="w-16 h-1 bg-white/80 rounded-full"></div>
//                     </div>

//                     <h2 className="text-white text-left m-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
//                         {title}
//                     </h2>

//                     <div className="flex-1 flex flex-col justify-center mb-8 sm:mb-10">
//                         <p

//                             className="leading-relaxed text-white/90 text-base sm:text-lg md:text-xl max-w-3xl first-letter:text-3xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:text-white"
//                         >
//                             {description}
//                         </p>
//                     </div>

//                     <div className="flex justify-start">
//                         <button
//                             className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500 rounded-full px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-medium tracking-wide hover:scale-105 hover:shadow-2xl hover:border-white"


//                         >
//                             <Link href={href}>
//                                 Learn More
//                                 <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
//                             </Link>
//                         </button>
//                     </div>

//                     <div className="absolute inset-0 opacity-5 pointer-events-none">
//                         <div className="absolute top-10 right-10 w-32 h-32 border border-white rounded-full"></div>
//                         <div className="absolute bottom-20 left-10 w-24 h-24 border border-white rounded-full"></div>
//                         <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white rounded-full"></div>
//                     </div>
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// };

// export default Card;

// "use client";
// import {useTransform, motion, useScroll, MotionValue} from "framer-motion";
// import {useRef} from "react";
// import clsx from "clsx";
// import Link from "next/link";
// import Image from "next/image";
// import {ArrowRight} from "lucide-react";

// interface CardProps {
//     i: number;
//     progress: MotionValue<number>;
//     range: number[];
//     targetScale: number;
//     title: string;
//     description: string;
//     color: string;           // fallback color
//     href: string;
//     imageSrc?: string;       // NEW
// }

// const Card = ({
//     i,
//     progress,
//     range,
//     targetScale,
//     title,
//     description,
//     color,
//     href,
//     imageSrc,
// }: CardProps) => {
//     const container = useRef<HTMLDivElement | null>(null);
//     const {scrollYProgress} = useScroll({
//         target: container,
//         offset: ["start end", "start start"],
//     });

//     const scale = useTransform(progress, range, [1, targetScale]);
//     const contentY = useTransform(scrollYProgress, [0, 1], [20, 0]);
//     const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.8, 1]);

//     return (
//         <div ref={container} className="min-h-screen flex rounded-[50px] items-center justify-center sticky top-0">
//             <motion.div
//                 style={{scale, backgroundColor: color}}
//                 className={clsx(
//                     "relative flex flex-col w-full h-screen origin-top rounded-[50px] overflow-hidden",
//                     "p-8 sm:p-10 md:p-12 lg:p-16"
//                 )}
//             >
//                 {/* Background image */}
//                 {imageSrc && (
//                     <>
//                         <Image
//                             src={imageSrc}
//                             alt=""
//                             fill
//                             priority={i === 0}
//                             sizes="100vw"
//                             className="absolute inset-0 object-cover"
//                         />
//                         {/* Dark overlay */}
//                         <div className="absolute inset-0 bg-black/60 pointer-events-none" />
//                         {/* Optional bottom fade for contrast */}
//                         <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black/70 pointer-events-none" />
//                     </>
//                 )}

//                 {/* Foreground content */}
//                 <motion.div
//                     style={{y: contentY, opacity: contentOpacity}}
//                     className="relative z-10 h-full flex flex-col justify-center"
//                 >
//                     <div className="mb-6 sm:mb-8">
//                         <div className="w-16 h-1 bg-white/80 rounded-full"></div>
//                     </div>

//                     <h2 className="text-white text-left m-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
//                         {title}
//                     </h2>

//                     <div className="flex-1 flex flex-col justify-center mb-8 sm:mb-10">
//                         <p className="leading-relaxed text-white/90 text-base sm:text-lg md:text-xl max-w-3xl first-letter:text-3xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:text-white">
//                             {description}
//                         </p>
//                     </div>

//                     <div className="flex justify-start">
//                         {/* Make the Link the clickable element instead of nesting inside a button */}
//                         <Link
//                             href={href}
//                             className="group inline-flex items-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500 rounded-full px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-medium tracking-wide hover:scale-105 hover:shadow-2xl hover:border-white"
//                         >
//                             Learn More
//                             <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
//                         </Link>
//                     </div>

//                     {/* Decorative rings (kept subtle above overlay) */}
//                     <div className="absolute inset-0 opacity-5 pointer-events-none">
//                         <div className="absolute top-10 right-10 w-32 h-32 border border-white rounded-full"></div>
//                         <div className="absolute bottom-20 left-10 w-24 h-24 border border-white rounded-full"></div>
//                         <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white rounded-full"></div>
//                     </div>
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// };

// export default Card;



"use client";
import {useTransform, motion, useScroll, MotionValue} from "framer-motion";
import {useRef} from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import {ArrowRight} from "lucide-react";

interface CardProps {
    i: number;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
    title: string;
    description: string;
    color: string;
    href: string;
    imageSrc?: string;
    textColor?: string; // NEW: Optional text color
    techStack?: React.ReactNode;  // NEW: Flexible tech stack component
}

const Card = ({
    i,
    progress,
    range,
    targetScale,
    title,
    description,
    color,
    href,
    imageSrc,
    techStack,
    textColor = "text-white", // Default to white text
}: CardProps) => {
    const container = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const scale = useTransform(progress, range, [1, targetScale]);
    const contentY = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.8, 1]);

    return (
        <div ref={container} className={clsx(textColor, "min-h-screen  flex rounded-[50px] items-center justify-center sticky top-0")}>
            <motion.div
                style={{scale, backgroundColor: color}}
                className={clsx(
                    "relative flex flex-col w-full h-screen origin-top rounded-[50px] overflow-hidden",
                    "p-8 sm:p-10 md:p-12 lg:p-16"
                )}
            >
                {/* Background image */}
                {imageSrc && (
                    <>
                        <Image
                            src={imageSrc}
                            alt=""
                            fill
                            priority={i === 0}
                            sizes="100vw"
                            className="absolute inset-0 object-cover"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
                        {/* Optional bottom fade for contrast */}
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black/70 pointer-events-none" />
                    </>
                )}

                {/* Tech Stack - Top Right */}
                {techStack && (
                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{delay: 0.3, duration: 0.5}}
                        className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20"
                    >
                        <div className="flex gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                            {techStack}
                        </div>
                    </motion.div>
                )}

                {/* Foreground content */}
                <motion.div
                    style={{y: contentY, opacity: contentOpacity}}
                    className="relative z-10 h-full flex flex-col justify-around "
                >
                    <div>
                        <div className="w-16 h-1 mb-6 sm:mb-8 bg-white/80 rounded-full"></div>

                        <h2 className=" text-left m-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                            {title}
                        </h2>
                    </div>


                    <p className="leading-relaxed  text-base sm:text-lg md:text-xl max-w-3xl ">
                        {description}
                    </p>

                    <div className="">
                        <Link
                            href={href}
                            className="group inline-flex items-center bg-white/10 backdrop-blur-sm border-2 border-white/30  hover:bg-white hover:text-black transition-all duration-500 rounded-full px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-medium tracking-wide hover:scale-105 hover:shadow-2xl hover:border-white"
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