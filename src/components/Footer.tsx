import Image from 'next/image';
import Link from 'next/link';
import React, {FunctionComponent} from 'react'

const FOOTER_HEIGHT = 600;

const footerLinks = [
  {title: "Projects", href: "/projects"},
  {title: "About", href: "/about"},
  {title: "Services", href: "/services"},
  {title: "Contact", href: "/contact"},
];

const socialLinks = [
  {title: "Twitter", href: "https://twitter.com"},
  {title: "LinkedIn", href: "https://linkedin.com"},
  {title: "Instagram", href: "https://instagram.com"},
  {title: "GitHub", href: "https://github.com"},
];

export const Footer: FunctionComponent = () => {
  return (
    <div
      className='relative bg-[#0034ff]'
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        height: `${FOOTER_HEIGHT}px`
      }}
    >
      <div
        className='relative -top-[100vh]'
        style={{height: `calc(100vh + ${FOOTER_HEIGHT}px)`}}
      >
        <div
          className='sticky px-6 md:px-12 lg:px-16'
          style={{
            height: `${FOOTER_HEIGHT}px`,
            top: `calc(100vh - ${FOOTER_HEIGHT}px)`
          }}
        >
          <div className='h-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between py-12 md:py-20'>
            {/* Logo/Icon Section */}
            <Link
              href="/"
              className='flex items-center justify-center md:justify-start mb-8 md:mb-0'>
              <Image
                src="/images/footer-icon.png"
                alt="Footer Image"
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
                © {new Date().getFullYear()} Lulu Web Studio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

