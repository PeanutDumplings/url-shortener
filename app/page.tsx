// "use client";

// import { ModeToggle } from "@/components/ModeToggle";
// import { Input } from "@/components/ui/input";
// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <section className="w-[90%] mx-auto md:max-w-5xl">
//       <header>
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.2 }}
//           className="text-3xl font-bold text-center md:text-8xl text-white"
//         >
//           URL Shortener
//         </motion.h1>
//       </header>
//     </section>
//     // <main className="flex min-h-screen w-1/2 flex-col items-center justify-between p-4">
//     //   <ModeToggle />
//     //   <div className="w-1/2">
//     //     <Input type="email" placeholder="Email" />
//     //   </div>
//     // </main>
//   );
// }

"use client";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

// import ShortenedUrls from "@/components/shortened-urls"
// import UrlInput from "@/components/url-input"
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-8 py-10 md:px-16 flex items-center justify-center">
      <section className="w-[90%] mx-auto mt-20 md:max-w-5xl">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center md:text-6xl text-white"
        >
          URL Shortener
        </motion.h1>
        <div className="flex justify-center items-center ">
          <Input className="mt-10 w-1/2" />
        </div>
      </section>{" "}
    </main>
  );
}
