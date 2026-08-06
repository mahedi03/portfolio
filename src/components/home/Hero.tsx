"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(60%_55%_at_15%_10%,_var(--color-primary)_0%,_transparent_68%),radial-gradient(45%_50%_at_90%_35%,_var(--color-accent)_0%,_transparent_70%)] opacity-[0.09]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] opacity-40 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-4xl text-[length:var(--text-hero)] font-display font-bold leading-[1.02] tracking-[-0.04em]"
          >
            Websites, SEO, and Ads that{" "}
            <span className="text-primary">actually grow</span> your business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9 lg:text-2xl"
          >
            A digital marketing specialist and full-stack developer helping
            businesses build fast websites, rank higher in search, and turn ad
            spend into measurable revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button asChild size="lg" className="group shadow-lg shadow-primary/20">
              <Link href="/contact">
                Start a Project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/cv/mahedi-hasan-cv.pdf" target="_blank" rel="noopener noreferrer">
                Download CV <Download className="size-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start"
          >
            <span>SEO strategy</span>
            <span className="text-border">•</span>
            <span>Paid advertising</span>
            <span className="text-border">•</span>
            <span>High-performance websites</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 lg:order-2"
        >
          <div className="relative mx-auto w-full max-w-[29rem] lg:mr-0">
            <div aria-hidden className="absolute -inset-6 -z-10 rounded-full" />
            <div className="relative overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-transparent">
                <Image
                  src="/Mahedi Hasan-transparent.png"
                  alt={`${siteConfig.author.name} — digital marketing specialist`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-[center_20%] saturate-[0.9]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
