import "./globals.css";
import "react-google-reviews/dist/index.css";
import type {Metadata, Viewport} from "next";
import {Footer} from "@/components/Footer";
import {ClientProviders} from "@/components/ClientProvider";
import SideMenu from "@/components/SideMenu";
import {SchemaMarkup} from "@/components/SchemaMarkup";

const SITE_URL = "https://www.luluwebstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Custom Web Design & Development Agency",
  description:
    "Lulu Web Studio is a US-based digital agency building custom websites, mobile apps, and SEO strategies that help businesses launch, grow, and convert online.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Lulu Web Studio",
    url: SITE_URL,
    title: "Custom Web Design & Development Agency",
    description:
      "Custom websites, mobile apps, SEO, and digital marketing for US businesses. We design, build, and optimize digital experiences that convert.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lulu Web Studio — Custom Web Design & Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Design & Development Agency",
    description:
      "Custom websites, mobile apps, SEO, and digital marketing for US businesses.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  // bg-[#191919]
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Lulu Web Studio Blog"
          href="/feed.xml"
        />
        <SchemaMarkup />
      </head>
      <body className="h-full bg-black">
        <div className="fixed inset-0 flex items-center justify-center p-4 md:p-6 lg:p-8">
          <div className="relative w-full h-full rounded-[50px]  overflow-hidden">
            <ClientProviders>
              <div
                id="scroll-container"
                className="scroll-container h-full overflow-y-auto "
              >
                <SideMenu />

                {children}
                <Footer />
              </div>
            </ClientProviders>
          </div>
        </div>
      </body>
    </html>
  );
}
