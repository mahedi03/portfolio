"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { agencyRatings } from "@/data/testimonials";

export function RatingsBar() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 overflow-hidden">
      <div className="container-wide">
        {/* Mobile & Tablet: Smooth seamless infinite horizontal logo carousel */}
        <div
          className="relative w-full overflow-hidden md:hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <motion.div
            className="flex w-max flex-nowrap items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 18,
                ease: "linear",
              },
            }}
          >
            {[0, 1].map((dupIndex) => (
              <div
                key={dupIndex}
                aria-hidden={dupIndex === 1}
                className="flex shrink-0 flex-nowrap items-center gap-10 pr-10"
              >
                {agencyRatings.map((item) => (
                  <div
                    key={`${dupIndex}-${item.platform}`}
                    className="flex shrink-0 items-center justify-center opacity-85"
                  >
                    <Image
                      src={item.logo}
                      alt={item.platform}
                      width={130}
                      height={36}
                      className="h-7 w-auto max-w-[115px] object-contain select-none pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop (md+): Single clean horizontal row */}
        <div className="hidden md:flex flex-nowrap items-center justify-center gap-10 lg:gap-16 xl:gap-20">
          {agencyRatings.map((item) => (
            <div
              key={item.platform}
              className="flex shrink-0 items-center justify-center transition-all duration-300 opacity-75 hover:opacity-100 hover:scale-105"
            >
              <Image
                src={item.logo}
                alt={item.platform}
                width={160}
                height={48}
                className="h-8 lg:h-9 w-auto max-w-[140px] lg:max-w-[160px] object-contain select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
