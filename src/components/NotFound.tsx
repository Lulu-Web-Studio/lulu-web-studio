"use client";

import React from 'react';
import Link from 'next/link';
import {DotLottieReact} from '@lottiefiles/dotlottie-react';

export const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-white px-6 text-center">
      <DotLottieReact
        src="/construction"
        loop
        autoplay
        slot="lottie"
        style={{width: '300px', height: '300px'}}
      />
      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-neutral-900 md:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-neutral-600">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white hover:bg-neutral-800 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-neutral-900 hover:border-neutral-900 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
