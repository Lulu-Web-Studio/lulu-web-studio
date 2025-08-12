
// // import { config } from "@/config";
// // import { cn } from "@/lib/utils";
// // import type { Metadata } from "next";
// // import { Inter } from "next/font/google";
// // import "./globals.css";
// // import {Header} from "@/components/Header";
// // import {Footer} from "@/components/Footer";
// // import {Providers} from "@/components/theme-provider";

// // const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

// // export const metadata: Metadata = {
// //   title: {
// //     absolute: config.name.metadata.title.absolute,
// //     default: config.name.metadata.title.default,
// //     template: config.name.metadata.title.template,
// //   },
// //   description: config.name.metadata.description,

// // };

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en" className="bg-black">
// //       <body
// //         className={cn(
// //           "bg-black m-5 font-sans min-h-screen",
// //           fontSans.variable
// //         )}
// //       >
// //           <Providers
// //           >
// //             {/* The fixed frame */}
// //             <div
// //               className="
// //               inset-3 md:inset-4        
// //               rounded-[50px]        
// //               overflow-hidden                  
                       
// //               flex flex-col
// //             "
// //             >
// //               {/* Scrollable content inside frame */}
// //               <main className="flex-1 overflow-auto">
// //                 <Header />
// //                 {children}
// //                 <Footer />
// //               </main>
// //             </div>
// //           </Providers>
// //       </body>
// //     </html>
// //   );
// // }


// // app/layout.tsx
// "use client";

// import {cn} from "@/lib/utils";
// import {Inter} from "next/font/google";
// import "./globals.css";
// import {Header} from "@/components/Header";
// import {Footer} from "@/components/Footer";
// import {Providers} from "@/components/theme-provider";

// const fontSans = Inter({subsets: ["latin"], variable: "--font-sans"});

// export default function RootLayout({children}: {children: React.ReactNode}) {
//   return (
//     <html lang="en" className="overflow-x-hidden bg-[#191919]">
//       <body
//         className={cn(
//           // Arkitect-style outer: dark bg, 16px padding around the inner canvas
//           // "min-h-screen bg-[#191919] p-4 sm:p-4 font-sans",
//           "sticky",
//           // No margin here; padding creates the “gutter” like Framer
//           fontSans.variable
//         )}
//       >
//         <Providers>
//           {/* The framed inner canvas */}
//           <div
//           className="min-h-screen rounded-[50px] h-min w-auto p-4 flex flex-col flex-nowrap justify-start relative overflow-visible"
//             // className="
//             //    inset-4             
//             //   rounded-[32px]            
//             //   bg-white
//             //   overflow-hidden            
//             //   absolute isolate           
//             //   flex flex-col
//             // "
//           >
//             {/* Inner scroller only scrolls vertically */}
//             <main className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
//               <Header />
//               {children}
//               <Footer />
//             </main>
//           </div>
//         </Providers>
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
import clsx from "clsx";
import "./globals.css";
import type {Metadata} from "next";
import {Providers} from "@/components/theme-provider";
import {ClientProviders} from "@/components/ClientProvider";

export const metadata: Metadata = {
  title: "Framed Site",
  description: "Rounded-frame layout demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full`}>
        {/* Outer scrollable container - enables rubber band with frame */}
        <div className="outer-scroll-container h-full overflow-auto bg-[#191919]">

          {/* Tall wrapper that enables overscroll */}
          <div className="min-h-[110vh]">

            {/* Centering container */}
            <div className="h-screen flex items-center justify-center p-4 md:p-6 lg:p-8">

              {/* Rounded frame container with border */}
              <div className="relative w-full h-full rounded-[38px] border border-white/10 overflow-hidden">

                <ClientProviders>
                  {children}
                </ClientProviders>

              </div>

            </div>

          </div>

        </div>
      </body>
    </html>
  )
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="h-full">
//       <body className={`h-full overflow-hidden`}>
//         {/* Outer container with matte background - fills entire viewport */}
//         <div className="fixed inset-0 bg-[#191919] flex items-center justify-center p-4">

//           {/* Rounded frame container with border */}
//           <div className="relative w-full h-full max-w-none rounded-[56px] ring-1 ring-white/10 overflow-hidden transform-gpu isolation-isolate">

//             {/* Inner scrollable content area */}
//             <div className="w-full h-full overflow-auto overscroll-contain">
//               <Providers>
//                 {/* Content wrapper - ensures proper containment */}
//                 <div className="relative min-h-full transform-gpu isolation-isolate">
//                   {children}
//                 </div>
//               </Providers>
//             </div>

//           </div>

//         </div>
//       </body>
//     </html>
//   )
// }
