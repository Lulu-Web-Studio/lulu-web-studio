"use client";

import {useEffect, useState} from "react";
import {ParallaxProvider} from "react-scroll-parallax";
import {ThemeProvider} from "next-themes";

export function ClientProviders({children}: {children: React.ReactNode}) {
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    setScrollContainer(document.getElementById("scroll-container"));
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ParallaxProvider scrollContainer={scrollContainer ?? undefined}>
        {children}
      </ParallaxProvider>
    </ThemeProvider>
  );
}
