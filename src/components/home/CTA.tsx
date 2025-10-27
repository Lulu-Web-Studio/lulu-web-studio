import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeaderText from "@/components/Text/HeaderText";
import SecondaryText from "@/components/Text/BodyText";

export default function CTA() {
    return (
        <section className="bg-white min-h-[80vh] flex items-center justify-center rounded-t-[50px] py-24 pb-40 relative z-10 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28">
            <div className="w-5/6 mx-auto text-center">
                {/* Section Eyebrow */}
                <SecondaryText as="p" className="uppercase text-md text-neutral-500 mb-6">
                    Ready to Get Started?
                </SecondaryText>

                {/* Main Heading */}
                <HeaderText as="h2" variant="large" className="font-bold text-neutral-900 mb-8 leading-tight">
                    Let&apos;s Build Something <br />
                    <span className="text-neutral-600">Amazing Together</span>
                </HeaderText>

                {/* Supporting Text */}
                <SecondaryText className="text-neutral-700 leading-relaxed max-w-3xl mx-auto mb-12">
                    Whether you need a new website, an app, or custom development solutions,
                    we&apos;re here to bring your vision to life with modern technology and expert craftsmanship.
                </SecondaryText>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/contact"
                        className="group inline-flex items-center transition-all duration-500 rounded-full px-10 py-6 text-lg font-medium tracking-wide bg-neutral-900 text-white hover:bg-neutral-800 hover:scale-105 hover:shadow-2xl"
                    >
                        Get In Touch
                        <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                    <Link
                        href="/projects"
                        className="inline-flex items-center transition-all duration-500 rounded-full px-10 py-6 text-lg font-medium tracking-wide border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-50 hover:scale-105"
                    >
                        View Our Work
                    </Link>
                </div>
            </div>
        </section>
    );
}
