import {motion} from "framer-motion";


export const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        // translateX: -20,
    },
    enter: (i:number) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.65,
            // delay: 0.5 + (i * 0.1),
            delay: 0.35 + i * 0.08, // slightly tighter cadence
            ease: [.215, .61, .355, 1],
            opacity: {duration: 0.65} // was 0.35
        }
    }),
    exit: {
        opacity: 0,
        transition: {duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1]}
    }
}

 const slideIn = {
    initial: {
        opacity: 0,
        y: 20
    },
    enter: (i:number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.75 + (i * 0.1),
            ease: [.215, .61, .355, 1]
        }
    }),
    exit: {
        opacity: 0,
        transition: {duration: 0.5, type: "tween", ease: "easeInOut"}
    }
}


export const links = [
    {
        title: "Projects",
        href: "/"
    },
    {
        title: "Agency",
        href: "/"
    },
    {
        title: "Expertise",
        href: "/"
    },
    {
        title: "Careers",
        href: "/"
    },
    {
        title: "Contact",
        href: "/"
    }
]

export const footerLinks = [
    {
        title: "Facebook",
        href: "/"
    },
    {
        title: "LinkedIn",
        href: "/"
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

        <div className="flex flex-col justify-between h-full box-border pt-24 pr-10 pb-12 pl-10">
            <div className="flex gap-2.5 flex-col">
                {
                    links.map((link, i) => {
                        const {title, href} = link;
                        return (
                            <div key={`b_${i}`} className="will-change-transform perspective-[120px] perspective-origin-bottom">
                                <motion.div
                                    href={href}
                                    custom={i}
                                    variants={perspective}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    <a className="no-underline text-black text-[32px]">
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
                            className="w-1/2 mt-1.5"
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
        // <div className="flex flex-col justify-between pt-[100px] px-10 pb-[50px] h-full box-border">
        //     <div className="flex flex-col gap-2.5">
        //         {links.map((link, i) => {
        //             const {title, href} = link;
        //             return (
        //                 <div
        //                     key={`b_${i}`}
        //                     className="[perspective:120px] [perspective-origin:bottom]"
        //                 >
        //                     <motion.a
        //                         href={href}
        //                         custom={i}
        //                         variants={perspective}
        //                         initial="initial"
        //                         animate="enter"
        //                         exit="exit"
        //                         className="no-underline text-black text-[46px]"
        //                     >
        //                         {title}
        //                     </motion.a>
        //                 </div>
        //             );
        //         })}
        //     </div>

        //     {/* no footer styles were provided in your SCSS; keeping this minimal */}
        //     <motion.div className="flex gap-4">
        //         {footerLinks.map((link, i) => {
        //             const {title, href} = link;
        //             return (
        //                 <motion.a
        //                     href={href}
        //                     variants={slideIn}
        //                     custom={i}
        //                     initial="initial"
        //                     animate="enter"
        //                     exit="exit"
        //                     key={`f_${i}`}
        //                     className="no-underline"
        //                 >
        //                     {title}
        //                 </motion.a>
        //             );
        //         })}
        //     </motion.div>
        // </div>
    );
}