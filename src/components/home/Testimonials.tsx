"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getFeaturedTestimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function Testimonials() {
  const testimonials = getFeaturedTestimonials();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const total = testimonials.length;

  // Match visible cards per slide to viewport width (mobile: 1, tablet: 2, desktop: 3)
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1200) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setDirection(index >= activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Auto-advance every 6 seconds, pausing on hover/focus
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  if (total === 0) return null;

  const visibleItems = Array.from({ length: Math.min(visibleCount, total) }, (_, offset) => {
    const idx = (activeIndex + offset) % total;
    return { item: testimonials[idx], originalIndex: idx };
  });

  return (
    <section
      id="testimonials"
      className="relative py-14 sm:py-20 lg:py-24 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {/* Giant Faint Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-4 left-4 sm:left-12 select-none text-[clamp(3.25rem,11vw,11rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.025] leading-none z-0"
      >
        REVIEWS
      </div>

      <Container className="relative z-10">
        {/* Header + Desktop Navigation Controls */}
        <Reveal className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-display font-black tracking-tight text-white uppercase leading-tight">
              /CLIENT FEEDBACK
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
              What founders and marketing leads say about working with one connected partner across web, SEO, and paid media.
            </p>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="mr-1 font-mono text-xs text-muted-foreground tabular-nums">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="inline-flex size-10 sm:size-11 items-center justify-center rounded-full border border-border bg-surface/80 text-foreground backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-white hover:text-black active:scale-95"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="inline-flex size-10 sm:size-11 items-center justify-center rounded-full border border-border bg-surface/80 text-foreground backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-white hover:text-black active:scale-95"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </Reveal>

        {/* Carousel Track */}
        <div
          className="mt-8 sm:mt-10 overflow-hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={`${activeIndex}-${visibleCount}`}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 48 : -48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -48 : 48 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) nextSlide();
                else if (info.offset.x > 50) prevSlide();
              }}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 cursor-grab active:cursor-grabbing"
            >
              {visibleItems.map(({ item, originalIndex }, slotIdx) => {
                const isLead = slotIdx === 0;
                return (
                  <figure
                    key={`${item.id}-${originalIndex}`}
                    className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-6 sm:p-7 backdrop-blur-md transition-all duration-300 ${
                      isLead
                        ? "border-white/25 bg-surface/90 shadow-elevated"
                        : "border-border bg-card/75 hover:border-white/20 hover:bg-surface/80 shadow-soft"
                    }`}
                  >
                    {/* Subtle Decorative Quote Watermark */}
                    <Quote
                      aria-hidden
                      className="pointer-events-none absolute right-5 top-5 size-10 text-white/[0.05] transition-colors duration-300 group-hover:text-white/[0.1]"
                    />

                    <div>
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 text-accent" aria-label={`${item.rating} out of 5 stars`}>
                        {Array.from({ length: item.rating }).map((_, idx) => (
                          <Star key={idx} className="size-4 fill-current" />
                        ))}
                      </div>

                      {/* Quote Copy */}
                      <blockquote className="mt-5 text-sm sm:text-base leading-relaxed text-card-foreground/95">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                    </div>

                    {/* Author Footer with Realistic Human Portrait */}
                    <figcaption className="mt-6 flex items-center gap-3.5 border-t border-border/70 pt-5">
                      <div className="relative size-12 shrink-0 overflow-hidden rounded-full border border-white/20 bg-muted">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          sizes="48px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="truncate font-display text-sm sm:text-base font-bold text-white">
                          {item.name}
                        </div>
                        {(item.role || item.company) && (
                          <div className="truncate text-xs sm:text-sm text-muted-foreground">
                            {[item.role, item.company].filter(Boolean).join(", ")}
                          </div>
                        )}
                      </div>
                    </figcaption>
                  </figure>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Pagination Dots + Avatar Quick Selector */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
            {testimonials.map((t, idx) => {
              const active = idx === activeIndex;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`View testimonial from ${t.name}`}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active
                      ? "w-8 bg-white"
                      : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              );
            })}
          </div>

          {/* Mini Avatar Stack for Direct Jump */}
          <div className="hidden sm:flex items-center gap-2">
            {testimonials.map((t, idx) => {
              const active = idx === activeIndex;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Jump to ${t.name}`}
                  className={`relative size-9 overflow-hidden rounded-full border-2 transition-all duration-200 ${
                    active
                      ? "scale-110 border-white ring-2 ring-primary/40"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="36px"
                    className="object-cover object-top"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
