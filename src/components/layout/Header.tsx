"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-soft"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav
          className="flex h-18 items-center justify-between py-3"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="font-display text-2xl font-bold tracking-tight"
          >
            {siteConfig.shortName}
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenMegaMenu(item.label)}
                onMouseLeave={() => item.children && setOpenMegaMenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-md px-4 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                  aria-expanded={item.children ? openMegaMenu === item.label : undefined}
                  aria-haspopup={item.children ? "true" : undefined}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform",
                        openMegaMenu === item.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && openMegaMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 top-full z-50 mt-2 w-[820px] -translate-x-1/2 rounded-lg border border-border bg-card p-4 shadow-elevated"
                    >
                      <div className="grid grid-cols-2 gap-1 lg:grid-cols-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="rounded-md p-3 transition-colors hover:bg-muted"
                          >
                        <div className="text-base font-semibold text-card-foreground">
                              {child.label}
                            </div>
                            {child.description && (
                              <div className="mt-0.5 text-sm text-muted-foreground">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button asChild size="md" variant="primary">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="inline-flex size-10 items-center justify-center rounded-md lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </Container>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-border bg-background lg:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col gap-1">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    {item.children ? (
                      <button
                        type="button"
                        onClick={() => setOpenMobileMenu((current) => current === item.label ? null : item.label)}
                        aria-expanded={openMobileMenu === item.label}
                        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium hover:bg-muted"
                      >
                        {item.label}
                        <ChevronDown className={cn("size-4 transition-transform", openMobileMenu === item.label && "rotate-180")} />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.children && openMobileMenu === item.label && (
                      <ul className="ml-3 border-l border-border pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-md px-3 py-2.5 text-base text-muted-foreground hover:bg-muted hover:text-foreground"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-4 w-full">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Start a Project
                </Link>
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
