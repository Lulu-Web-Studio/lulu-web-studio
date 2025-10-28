"use client";

import React from 'react';
import {DotLottieReact} from '@lottiefiles/dotlottie-react';

export const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <DotLottieReact
        src="/construction"
        loop
        autoplay
        slot="lottie"
        style={{width: '300px', height: '300px'}}
      />
    </div>
  );
};
