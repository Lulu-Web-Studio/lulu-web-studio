
import { config } from "@/config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Providers} from "@/components/theme-provider";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    absolute: config.name.metadata.title.absolute,
    default: config.name.metadata.title.default,
    template: config.name.metadata.title.template,
  },
  description: config.name.metadata.description,

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={cn(
          "bg-black overflow-hidden font-sans min-h-screen",
          fontSans.variable
        )}
      >
          <Providers          >
            {/* The fixed frame */}
            <div
              className="
               inset-3 md:inset-4        
              rounded-[50px]        
              overflow-hidden                  
              bg-white                        
              flex flex-col
              relative            
              isolate            
              will-change-transform
            "
            >
              {/* Scrollable content inside frame */}
              <main className="flex-1 overflow-auto">
                <Header />
                {children}
                <Footer />
              </main>
            </div>
          </Providers>
      </body>
    </html>
  );
}
