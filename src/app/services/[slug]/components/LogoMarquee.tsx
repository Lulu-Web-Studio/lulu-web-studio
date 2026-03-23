"use client";

import {motion} from "framer-motion";
import Image from "next/image";

const logos = [
  {src: "/images/home/clients/sonino-logo.png", alt: "Sonino Painting & Contracting", href: "https://www.soninopainting.com"},
  {src: "/images/home/clients/fsc-icon.svg", alt: "Facial Surgery Center", href: "https://www.facialsurgeryct.com"},
  {src: "/images/home/clients/alon-group-svg.svg", alt: "The Alon Group", href: "https://www.thealongroup.com"},
  {src: "/images/home/clients/ganan-land.png", alt: "Ganan Landscaping", href: "https://www.gananlandscaping.com"},
  {src: "/images/home/clients/isaacc18.webp", alt: "ISAACC18", href: "https://www.isaacc18.org"},
];

export default function LogoMarquee() {
  return (
    <section className="py-16 bg-neutral-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <p className="text-neutral-500 text-sm uppercase tracking-widest">
          Logos We&apos;ve Created
        </p>
      </div>
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{x: ["0%", "-50%"]}}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <a
                key={index}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-32 h-20 relative grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
