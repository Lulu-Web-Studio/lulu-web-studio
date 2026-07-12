import {config} from "@/config";
import {motion} from "framer-motion";
import {ArrowUpRight} from "lucide-react";


export const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        // translateX: -20,
    },
    enter: (i: number) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.65,
            // delay: 0.5 + (i * 0.1),
            delay: 0.35 + i * 0.08, // slightly tighter cadence
            ease: [.215, .61, .355, 1] as const,
            opacity: {duration: 0.65} // was 0.35
        }
    }),
    exit: {
        opacity: 0,
        transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1] as const}
    }
}

const slideIn = {
    initial: {
        opacity: 0,
        y: 20
    },
    enter: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.75 + (i * 0.1),
            ease: [.215, .61, .355, 1] as const
        }
    }),
    exit: {
        opacity: 0,
        transition: {duration: 0.5, ease: "easeInOut" as const}
    }
}


export const links = [
    {
        title: "Projects",
        href: "/projects"
    },
    {
        title: "Services",
        href: "/services"
    },
    {
        title: "Blog",
        href: "/blog"
    },
    {
        title: "About",
        href: "/about"
    }
]

export const footerLinks = [
    {
        title: "LinkedIn",
        href: config.links.linkedin
    },
    {
        title: "Instagram",
        href: config.links.instagram
    },
    // {
    //     title: "Instagram",
    //     href: "/"
    // },
    // {
    //     title: "Twitter",
    //     href: "/"
    // }
]

export default function Nav() {
    return (

        <div className="flex flex-col justify-between h-full box-border p-6 sm:p-7 md:pt-9 md:px-9 md:pb-7">
            <div className="flex gap-1.5 flex-col">
                {
                    links.map((link, i) => {
                        const {title, href} = link;
                        return (
                            <div key={`b_${i}`} className="will-change-transform perspective-[120px] perspective-origin-bottom">
                                <motion.div
                                    custom={i}
                                    variants={perspective}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    <a href={href} className="no-underline text-black text-lg sm:text-xl md:text-2xl font-medium transition-all duration-300 hover:opacity-70 hover:translate-x-2 inline-block">
                                        {title}
                                    </a>
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>


            <div>
                <motion.a
                    className="group mb-4 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-base sm:text-lg font-semibold text-[#c9fd74] transition-all duration-300 hover:gap-3"
                    variants={slideIn}
                    custom={0}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    href="/contact#book"
                >
                    Book a Call
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </motion.a>
                <motion.a
                    className="block text-black text-xl sm:text-2xl md:text-3xl font-semibold duration-300 hover:opacity-60 hover:translate-x-1"
                    variants={slideIn}
                    custom={1}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    href={`tel:${config.phoneNumber.replace(/[^\d+]/g, "")}`}
                >
                    {config.phoneNumber}
                </motion.a>
                <motion.a
                    className="block text-black/70 text-sm sm:text-base mt-0.5 mb-3 duration-300 hover:opacity-60 hover:translate-x-1"
                    variants={slideIn}
                    custom={2}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    href={`mailto:${config.emailAddress}`}
                >
                    {config.emailAddress}
                </motion.a>

                <motion.div className="flex flex-wrap">
                {
                    footerLinks.map((link, i) => {
                        const {title, href} = link;
                        return (
                            <motion.a
                                className="w-1/2 mt-1.5 text-sm sm:text-base dark:text-black duration-300 hover:opacity-60 hover:translate-x-1"
                                variants={slideIn}
                                custom={i}
                                initial="initial"
                                animate="enter"
                                href={href}
                                exit="exit"
                                key={`f_${i}`}
                            >
                                {title}
                            </motion.a>
                        )
                    })
                }
                </motion.div>
            </div>
        </div>

    );
}
