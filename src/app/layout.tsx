import "./globals.css";
import type {Metadata} from "next";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {ClientProviders} from "@/components/ClientProvider";

export const metadata: Metadata = {
  title: "Framed Site",
  description: "Rounded-frame layout demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-[#191919]">
        <div className="fixed inset-0 flex items-center justify-center p-4 md:p-6 lg:p-8">
          <div className="relative w-full h-full rounded-[50px] border border-white/10 overflow-hidden">
            <ClientProviders>
              <div
                id="scroll-container"
                className="scroll-container h-full overflow-y-auto "
              >
                <Header />
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

