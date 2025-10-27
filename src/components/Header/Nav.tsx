import {config} from "@/config";
import {motion} from "framer-motion";


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
        href: "/"
    },
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Contact",
        href: "/contact"
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
    {
        title: "Instagram",
        href: "/"
    },
    {
        title: "Twitter",
        href: "/"
    }
]

export default function Nav() {
    return (

        <div className="flex flex-col justify-between h-full box-border p-6 sm:p-8 md:pt-16 md:px-10 md:pb-10">
            <div className="flex gap-2.5 flex-col">
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
                                    <a href={href} className="no-underline text-black text-xl sm:text-2xl md:text-3xl font-medium transition-all duration-300 hover:opacity-70 hover:translate-x-2 inline-block">
                                        {title}
                                    </a>
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>


            <motion.div className="flex flex-wrap">
                {
                    footerLinks.map((link, i) => {
                        const {title, href} = link;
                        return (
                            <motion.a
                                className="w-1/2 mt-1.5 text-sm sm:text-base transition-all duration-300 hover:opacity-60 hover:translate-x-1"
                                variants={slideIn}
                                custom={i}
                                initial="initial"
                                animate="enter"
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

    );
}