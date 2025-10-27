"use client";

import { motion } from "framer-motion";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Image from "next/image";
import HeaderText from "@/components/Text/HeaderText";
import SecondaryText from "@/components/Text/BodyText";

export default function ContactHero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh]">
      <ParallaxBanner className="h-full">
        {/* Background Image Layer */}
        <ParallaxBannerLayer speed={-20}>
          <div className="absolute inset-0">
            <Image
              src="/images/contact/contact-bg.webp"
              alt="Contact Hero"
              fill
              priority
              className="object-cover"
            />
          </div>
        </ParallaxBannerLayer>

        {/* Dark Overlay */}
        <ParallaxBannerLayer speed={-10}>
          <div className="absolute inset-0 bg-gradient-to-br bg-black/50" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black/70" />
        </ParallaxBannerLayer>

        {/* Foreground Content */}
        <ParallaxBannerLayer speed={8}>
          <div className="relative z-10 mx-auto flex h-full w-full items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const }}
              className="text-center max-w-4xl"
            >
              <SecondaryText as="p" className="uppercase text-sm tracking-widest text-neutral-400 mb-6">
                Get In Touch
              </SecondaryText>
              <HeaderText as="h1" variant="large" className="font-bold text-white mb-6 leading-tight">
                Let&apos;s Work
                <br />
                <span className="text-neutral-300">Together</span>
              </HeaderText>
            </motion.div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  );
}
