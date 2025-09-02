// "use client";
// import { config } from "@/config";
// import { Rss } from "lucide-react";
// import Link from "next/link";
// import { FunctionComponent } from "react";
// import { DarkModeToggle } from "./DarkModeToggle";
// import { Button } from "./ui/button";

// export const Footer: FunctionComponent = () => {
//   return (
//     <section className="mt-8 md:mt-16 mb-12">
//       <div className="flex items-center justify-between">
//         <div className="text-sm text-muted-foreground">
//           © {config.name.copyright} {new Date().getFullYear()}
//         </div>
//         <div className="text-xs text-muted-foreground hidden lg:block">
//           <Link
//             href={`${config.baseUrl}`}
//           >
//             More text
//           </Link>
//         </div>
//         <div>
//           <Link href="/rss">
//             <Button variant="ghost" className="p-2">
//               <Rss className="w-4 h-4" />
//             </Button>
//           </Link>
//           <DarkModeToggle />
//         </div>
//       </div>
//       <div className="text-xs text-muted-foreground lg:hidden">
//         <Link
//           href={`${config.baseUrl}`}
//         >
//           SOME MORE TEXT
//         </Link>
//       </div>
//     </section>
//   );
// };
import React, {FunctionComponent} from 'react'
// import Content from './Content';

export const Footer: FunctionComponent = () => {
    return (
      <div
        className='relative h-[800px] bg-gray-400'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
        <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
          <div className='h-[800px] sticky top-[calc(100vh-800px)]'>
            {/* <Content /> */}
          </div>
        </div>
      </div>
  )
}

