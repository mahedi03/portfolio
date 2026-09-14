"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  previewImage: string;
  description: string;
}

export function ExperienceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const experiences: ExperienceItem[] = [
    {
      id: "exp-1",
      company: "FrameCipher",
      role: "Founder & Web Architect",
      period: "2021 - Present",
      previewImage: "/portfolio/portfolio-2.jpg",
      description: "Building high-performance Next.js web applications, digital systems, and client delivery engines.",
    },
    {
      id: "exp-2",
      company: "Riha Web Tech",
      role: "Co-Founder & Digital Marketing Lead",
      period: "2022 - July 2024",
      previewImage: "/portfolio/portfolio-1.jpg",
      description: "Directing agency growth campaigns, paid advertising strategies, and technical SEO architecture until stepping down in July 2024.",
    },
    {
      id: "exp-3",
      company: "Tuval Semantic SEO Scaling",
      role: "Semantic SEO & Organic Strategy Lead",
      period: "2023 - 2024",
      previewImage: "/portfolio/portfolio-3.jpg",
      description: "Topical authority roadmap implementation using Koray Gübür's framework with 300%+ traffic growth.",
    },
    {
      id: "exp-4",
      company: "Sumon's Aroma E-Commerce",
      role: "Full-Funnel Paid Advertising Strategist",
      period: "2023 - 2024",
      previewImage: "/portfolio/portfolio-4.jpg",
      description: "Omnichannel Meta ads, messenger commerce scaling, and ROAS optimization.",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="experience" className="relative py-20 lg:py-28 overflow-hidden">
      <Container className="relative z-10">
        {/* Sleek Dark Obsidian Card matching frame_06 of video */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121318] p-8 sm:p-12 lg:p-16 shadow-2xl"
        >
          {/* Giant Faint Watermark behind the card */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-4 left-6 sm:left-10 select-none text-[clamp(4.2rem,11vw,11rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.03] leading-none z-0"
          >
            EXPERIENCE
          </div>

          <div className="relative z-10">
            {/* Header with /EXPERIENCE and Right Badge */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white uppercase">
                /EXPERIENCE
              </h2>
              <span className="text-sm sm:text-base font-semibold text-muted-foreground">
                4+ years of professional experience
              </span>
            </div>

            {/* Interactive Experience Rows */}
            <div className="mt-2 divide-y divide-white/10">
              {experiences.map((item, index) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between py-7 sm:py-9 transition-colors cursor-pointer"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white transition-colors group-hover:text-emerald-400">
                      {item.company}
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-base text-muted-foreground">
                      {item.role}
                    </p>
                  </div>

                  <div className="mt-3 sm:mt-0 text-sm sm:text-base font-medium text-muted-foreground group-hover:text-white transition-colors">
                    {item.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Tilt Mockup Card (Appears next to cursor on hover, matching video frame_07) */}
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: -3,
                  x: mousePos.x + 30,
                  y: mousePos.y - 120,
                }}
                exit={{ opacity: 0, scale: 0.8, rotate: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="pointer-events-none absolute hidden lg:block z-30 w-72 rounded-2xl overflow-hidden border border-white/20 bg-card p-3 shadow-2xl"
                style={{ top: 0, left: 0 }}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-black">
                  <Image
                    src={experiences[hoveredIndex].previewImage}
                    alt={experiences[hoveredIndex].company}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-white">
                    {experiences[hoveredIndex].company}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground line-clamp-2">
                    {experiences[hoveredIndex].description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
