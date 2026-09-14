"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { LinkedinIcon, GithubIcon, FacebookIcon } from "@/components/ui/social-icons";

export function Hero() {
  const socialLinks = [
    { name: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedinIcon },
    { name: "GitHub", href: siteConfig.social.github, icon: GithubIcon },
    { name: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
    { name: "WhatsApp", href: siteConfig.author.whatsapp, icon: MessageSquare },
  ];

  return (
    <section className="relative overflow-hidden pb-16 sm:pb-20 lg:pb-24">
      {/* Background ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(124,58,237,0.12),transparent_70%)]"
      />

      <div className="container-wide relative">

        {/* ══ 1. MAHEDI HASAN — normal flow, z-0, portrait sits in front ══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-0 text-center select-none pointer-events-none pt-10 lg:pt-14"
        >
          <h1 className="text-[clamp(3.5rem,9.5vw,9.5rem)] font-display font-black tracking-[-0.04em] uppercase leading-[0.9] flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-7">
            <span className="text-stroke-white transition-all">MAHEDI</span>
            <span className="text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">HASAN</span>
          </h1>
        </motion.div>

        {/* ══ 2. Portrait — absolute center, overlaps MAHEDI HASAN, z-20 ══ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 z-20"
          style={{ width: "clamp(300px, 44vw, 600px)" }}
        >
          <div className="relative w-full" style={{ aspectRatio: "2/3" }}>
            <Image
              src="/Mahedi Hasan-transparent.png"
              alt={`${siteConfig.author.name} — Portfolio`}
              fill
              priority
              className="object-contain object-top drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] filter contrast-[1.03] brightness-[1.02]"
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 440px, 600px"
            />
          </div>
        </motion.div>

        {/* ══ 3. Content row — starts BELOW MAHEDI HASAN, left & right of portrait ══ */}
        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-8 pt-6 lg:pt-8">

          {/* ── Left: Badge + Role + Bio + CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:max-w-[280px] xl:max-w-[320px] text-center lg:text-left"
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-surface/80 backdrop-blur-md px-4 py-2 text-xs font-semibold tracking-wide text-foreground shadow-sm mb-5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
              <span>Available for New Project</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white leading-tight">
              Growth Strategist &amp; Web Architect
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Designing digital products, high-converting Next.js applications, and semantic SEO frameworks built to turn search visibility into scalable revenue.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/90 shadow-[0_8px_25px_rgba(255,255,255,0.25)]"
              >
                <span>Let&apos;s collaborate</span>
                <ArrowUpRight className="size-4" />
              </Link>
              <a
                href="/cv/mahedi-hasan-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 backdrop-blur-sm px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-surface hover:text-white hover:border-white/40"
              >
                <span>Download CV</span>
                <Download className="size-4" />
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="text-white font-bold">4+ Years</span> Exp
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-white font-bold">50+</span> Projects
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-white font-bold">৳15L+</span> Revenue
              </span>
            </div>
          </motion.div>

          {/* ── Center spacer — invisible, reserves portrait width so left/right don't go behind portrait ── */}
          <div
            className="hidden lg:block flex-shrink-0"
            style={{ width: "clamp(300px, 44vw, 600px)" }}
            aria-hidden
          />

          {/* ── Right: Social Pills ── */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-full lg:max-w-[240px] xl:max-w-[280px] flex flex-row flex-wrap lg:flex-col items-center justify-center lg:items-end gap-3 pt-0 lg:pt-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-border/80 bg-surface/70 backdrop-blur-md px-5 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-white/50 hover:bg-white hover:text-black hover:scale-105 shadow-sm"
                >
                  <Icon className="size-4 transition-transform group-hover:scale-110" />
                  <span>{social.name}</span>
                  <ArrowUpRight className="size-3.5 opacity-60 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
