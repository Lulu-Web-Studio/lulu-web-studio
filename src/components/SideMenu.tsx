"use client"
import React, {useState} from 'react'
import {motion} from 'framer-motion';
import {AnimatePresence,} from 'framer-motion';
import Nav from './Header/Nav';

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
]

export default function SideMenu() {
  return (
      <Index />
  )
}






const menu = {
    open: {
        width: "min(85vw, 350px)",
        height: "min(60vh, 450px)",
        top: "-25px",
        right: "-25px",
        transition: {duration: 0.75, ease: [0.76, 0, 0.24, 1] as const}
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: {duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] as const}
    }
}

const Index = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        // <div className="fixed right-14 top-14">
        //     <Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}} />
        // </div>

        <div className="fixed right-14 top-14 z-50">
            <motion.div
                className="bg-[#c9fd74] rounded-3xl"
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>
            </motion.div>
            <Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}} />
        </div>
    )
}

export function Button({
    isActive,
    toggleMenu,
}: {
    isActive: boolean;
    toggleMenu: () => void;
}) {
    return (
        <div className="absolute top-0 right-0 w-[100px] h-[40px] cursor-pointer rounded-[25px] overflow-hidden">
            <motion.div
                className="relative w-full h-full"
                animate={{top: isActive ? "-100%" : "0%"}}
                transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1] as const}}
            >
                {/* .el (first) */}
                <div
                    className="group w-full h-full bg-[#c9fd74] text-black"
                    onClick={toggleMenu}
                >
                    <PerspectiveText label="Menu" />
                </div>

                {/* .el:nth-of-type(2) */}
                <div
                    className="group w-full h-full bg-black text-[#c9fd74]"
                    onClick={toggleMenu}
                >
                    <PerspectiveText label="Close" />
                </div>
            </motion.div>
        </div>
    );
}

function PerspectiveText({label}: {label: string}) {
    return (
        <div className="relative flex flex-col justify-center items-center h-full w-full [transform-style:preserve-3d] transition-transform duration-[750ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] group-hover:[transform:rotateX(90deg)]">
            {/* p:first-of-type */}
            <p className="m-0 pointer-events-none uppercase transition-all duration-[750ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full group-hover:opacity-0">
                {label}
            </p>

            {/* p:nth-of-type(2) */}
            <p className="absolute m-0 pointer-events-none uppercase origin-bottom [transform:rotateX(-90deg)_translateY(9px)] opacity-0 transition-all duration-[750ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] group-hover:opacity-100">
                {label}
            </p>
        </div>
    );
}




