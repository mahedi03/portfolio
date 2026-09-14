"use client";

import Image from "next/image";
import { agencyRatings } from "@/data/testimonials";

export function RatingsBar() {
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="container-wide">
        {/* Pure transparent logos blending seamlessly into the background */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {agencyRatings.map((item) => (
            <div
              key={item.platform}
              className="flex items-center justify-center transition-all duration-300 opacity-75 hover:opacity-100 hover:scale-105"
            >
              <Image
                src={item.logo}
                alt={item.platform}
                width={160}
                height={48}
                className="h-7 sm:h-8 md:h-9 w-auto max-w-[130px] sm:max-w-[160px] object-contain select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
