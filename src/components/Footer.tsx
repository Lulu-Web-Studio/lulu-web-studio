import {config} from '@/config';
import {cities} from '@/data/cities';
import Image from 'next/image';
import Link from 'next/link';
import React, {FunctionComponent} from 'react'


const locationLinks = cities.flatMap((city) => [
  {title: `Web Design in ${city.name}`, href: `/custom-website-development/${city.slug}`},
  {title: `SEO in ${city.name}`, href: `/seo/${city.slug}`},
]);

const footerLinks = [
  {title: "Services", href: "/services"},
  {title: "Projects", href: "/projects"},
  {title: "Blog", href: "/blog"},
  {title: "About", href: "/about"},
  {title: "Contact", href: "/contact"},
];

const socialLinks = [
  // {title: "Twitter", href: "https://twitter.com"},
  {title: "LinkedIn", href: config.links.linkedin},
  {title: "Instagram", href: config.links.instagram},
  // {title: "GitHub", href: "https://github.com"},
];

export const Footer: FunctionComponent = () => {
  return (
    <div className='bg-[#0034ff]'>
      <div className=' h-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between py-12 md:py-20'>
        {/* Logo/Icon Section */}
        <Link
          href="/"
          className='flex items-center justify-center md:justify-start mb-8 md:mb-0'>
          <Image
            src="/images/footer-icon.png"
            alt="Lulu Web Studio logo"
            width={300}
            height={300}
            className='w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain'
          />
        </Link>

        {/* Links Section */}
        <div className='flex flex-col items-center md:items-end space-y-8 md:space-y-12 text-center md:text-right'>
          {/* Main Navigation Links */}
          <nav className='flex flex-col space-y-3 md:space-y-4'>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-white text-xl md:text-2xl lg:text-3xl font-medium hover:opacity-70 transition-opacity duration-200'
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className='flex flex-col md:flex-row md:gap-6 space-y-2 md:space-y-0'>
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className='text-white/80 text-sm md:text-base hover:text-white transition-colors duration-200'
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className='text-white/60 text-xs md:text-sm'>
            © {new Date().getFullYear()} {config.name.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Areas We Serve */}
      <nav
        aria-label="Areas we serve"
        className='max-w-7xl mx-auto px-6 pb-10 text-center md:text-left'
      >
        <h2 className='text-white/80 text-sm font-medium uppercase tracking-widest mb-4'>
          Areas We Serve
        </h2>
        <ul className='flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2'>
          {locationLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className='text-white/60 text-xs md:text-sm hover:text-white transition-colors duration-200'
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  )
}
