"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export function HeroImageVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-[380px] items-center justify-center sm:max-w-[440px] lg:max-w-[480px]">
      {/* 1. BACKGROUND SHADOW CREATED USING THE USER'S OWN IMAGE */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10"
      >
        {/* The user's image rendered as an animated, blurred silhouette backdrop shadow */}
        <motion.div
          animate={{
            scale: [1.03, 1.08, 1.03],
            opacity: [0.6, 0.85, 0.6],
            y: [8, 14, 8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative h-[430px] w-[330px] sm:h-[510px] sm:w-[390px]"
        >
          {/* Black/tinted silhouette shadow using CSS filters on the actual image */}
          <div className="relative size-full filter blur-2xl brightness-0 opacity-80 contrast-200">
            <Image
              src="/Mahedi Hasan-transparent.png"
              alt=""
              fill
              sizes="(max-width: 768px) 330px, 390px"
              priority
              className="object-contain object-bottom select-none"
            />
          </div>

          {/* Soft secondary color ambient shadow flare for subtle depth */}
          <div className="absolute inset-0 filter blur-3xl opacity-40 mix-blend-screen bg-gradient-to-t from-primary/30 via-indigo-600/20 to-transparent rounded-full" />
        </motion.div>
      </div>

      {/* 2. MAIN CRISP FOREGROUND IMAGE (Seamlessly blended with page background - NO BOX, NO CARDS, NO FLOATING CHIPS) */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative z-10 flex w-full justify-center"
      >
        <div className="relative h-[420px] w-[320px] sm:h-[500px] sm:w-[380px]">
          {/* Natural drop-shadow on the silhouette */}
          <div className="relative size-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]">
            <Image
              src="/Mahedi Hasan-transparent.png"
              alt={`${siteConfig.author.name} — Portfolio`}
              fill
              sizes="(max-width: 768px) 320px, 380px"
              priority
              className="object-contain object-bottom select-none"
            />
          </div>

          {/* Smooth bottom gradient fade so torso melts seamlessly into the page background */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}
