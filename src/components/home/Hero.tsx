"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Download, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { LinkedinIcon, GithubIcon, FacebookIcon } from "@/components/ui/social-icons";

function HeroCounter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) {
      setDisplay(0);
      return;
    }

    let rafId = 0;
    const duration = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function Hero() {
  const socialLinks = [
    { name: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
    { name: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedinIcon },
    { name: "GitHub", href: siteConfig.social.github, icon: GithubIcon },
    { name: "WhatsApp", href: siteConfig.author.whatsapp, icon: MessageSquare },
  ];

  return (
    <section className="relative overflow-hidden pb-12 sm:pb-16 lg:pb-20">
      {/* Background ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(124,58,237,0.14),transparent_70%)]"
      />

      {/* Hero Portrait Background Shadow / Silhouette for 3D studio depth */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute left-1/2 top-4 sm:top-6 lg:-top-2 -translate-x-1/2 -z-10 w-[min(340px,88vw)] sm:w-[420px] lg:w-[clamp(340px,42vw,640px)] aspect-square opacity-70 [mask-image:linear-gradient(to_bottom,#000_55%,transparent_100%)]"
      >
        {/* Dark cast shadow */}
        <Image
          src="/mahedi-hasan-transparent.webp"
          alt=""
          fill
          aria-hidden
          sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 640px"
          className="object-contain object-top translate-y-2 scale-105 brightness-0 opacity-60 blur-[8px] drop-shadow-[0_0_50px_rgba(124,58,237,0.45)]"
        />
        {/* Subtle luminous rim silhouette */}
        <Image
          src="/mahedi-hasan-transparent.webp"
          alt=""
          fill
          aria-hidden
          sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 640px"
          className="object-contain object-top scale-[1.03] brightness-0 invert opacity-[0.05] blur-[2px]"
        />
      </div>

      <div className="container-wide relative">

        {/* 1. MAHEDI HASAN - normal flow, z-0, portrait sits in front */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-0 text-center select-none pointer-events-none pt-6 sm:pt-10 lg:pt-12"
        >
          <h1 className="text-[clamp(2.75rem,9vw,9.25rem)] font-display font-black tracking-[-0.04em] uppercase leading-[0.9] flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 lg:gap-x-7">
            <span className="text-stroke-white transition-all">MAHEDI</span>
            <span className="text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">HASAN</span>
          </h1>
        </motion.div>

        {/* 2. Portrait - in-flow on mobile/tablet, absolute on desktop (overlaps MAHEDI HASAN) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="pointer-events-none relative z-20 mx-auto -mt-8 sm:-mt-16 lg:mt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0 w-[min(280px,76vw)] sm:w-[340px] lg:w-[clamp(280px,35vw,540px)]"
        >
          <div className="relative w-full aspect-square">
            <Image
              src="/mahedi-hasan-transparent.webp"
              alt={`${siteConfig.author.name} Portfolio`}
              fill
              priority
              className="object-contain object-top drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] filter contrast-[1.03] brightness-[1.02]"
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 540px"
            />
          </div>
        </motion.div>

        {/* 3. Content row - on mobile sits below portrait; on desktop flanks portrait left & right */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 xl:gap-8 pt-4 lg:pt-6 xl:pt-8">

          {/* Left: Badge + Role + Bio + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-md lg:max-w-[270px] xl:max-w-[320px] text-center lg:text-left"
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-surface/80 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold tracking-wide text-foreground shadow-sm mb-4 sm:mb-5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
              <span>Available for New Project</span>
            </div>

            <h2 className="text-xl sm:text-2xl xl:text-3xl font-display font-bold tracking-tight text-white leading-tight">
              Growth Strategist &amp; Web Architect
            </h2>
            <p className="mt-3 sm:mt-4 text-sm xl:text-base leading-relaxed text-muted-foreground">
              I build and connect the pieces that make a business grow online: high-performance websites, search systems, and paid-media funnels treated as one revenue engine, not five separate hires.
            </p>

            <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 xl:px-6 py-2.5 xl:py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/90 shadow-[0_8px_25px_rgba(255,255,255,0.25)]"
              >
                <span>Let&apos;s collaborate</span>
                <ArrowUpRight className="size-4" />
              </Link>
              <a
                href="/cv/mahedi-hasan-cv.pdf"
                download="mahedi-hasan-cv.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 backdrop-blur-sm px-4 xl:px-5 py-2.5 xl:py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-surface hover:text-white hover:border-white/40"
              >
                <span>Download CV</span>
                <Download className="size-4" />
              </a>
            </div>

          </motion.div>

          {/* Center spacer - invisible, reserves portrait width and height on desktop */}
          <div
            className="hidden lg:block flex-shrink-0 lg:min-h-[clamp(220px,28vw,420px)]"
            style={{ width: "clamp(280px, 35vw, 540px)" }}
            aria-hidden
          />

          {/* Right: Social Pills */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-full lg:max-w-[200px] xl:max-w-[240px] flex flex-row flex-wrap lg:flex-col items-center justify-center lg:items-end gap-2.5 sm:gap-3 pt-0 lg:pt-2 xl:pt-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-full border border-border/80 bg-surface/70 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-white/50 hover:bg-white hover:text-black hover:scale-105 shadow-sm"
                >
                  <Icon className="size-4 transition-transform group-hover:scale-110" />
                  <span>{social.name}</span>
                  <ArrowUpRight className="size-3.5 opacity-60 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Quick metrics - single line on mobile & desktop, re-animates every time it scrolls into view */}
        <div className="relative z-30 mt-8 lg:mt-10 flex flex-nowrap items-center justify-center gap-x-2.5 sm:gap-x-8 lg:gap-x-10 whitespace-nowrap">
          <div className="flex items-baseline gap-1 sm:gap-2">
            <span className="font-display text-lg sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              <HeroCounter value={4} suffix="+" />
            </span>
            <span className="text-[11px] sm:text-sm lg:text-base font-semibold text-muted-foreground">
              Years Exp
            </span>
          </div>

          <span className="text-sm sm:text-xl text-border select-none" aria-hidden>•</span>

          <div className="flex items-baseline gap-1 sm:gap-2">
            <span className="font-display text-lg sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              <HeroCounter value={50} suffix="+" />
            </span>
            <span className="text-[11px] sm:text-sm lg:text-base font-semibold text-muted-foreground">
              Projects
            </span>
          </div>

          <span className="text-sm sm:text-xl text-border select-none" aria-hidden>•</span>

          <div className="flex items-baseline gap-1 sm:gap-2">
            <span className="font-display text-lg sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              <HeroCounter value={15} prefix="৳" suffix="L+" />
            </span>
            <span className="text-[11px] sm:text-sm lg:text-base font-semibold text-muted-foreground">
              Revenue
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
