"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { mainNav, serviceMegaMenuGroups } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { getLucideIcon } from "@/lib/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  const [selectedMegaGroup, setSelectedMegaGroup] = useState<(typeof serviceMegaMenuGroups)[number]["label"]>(serviceMegaMenuGroups[0].label);

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
                onMouseEnter={() => {
                  if (item.children) {
                    setOpenMegaMenu(item.label);
                    setSelectedMegaGroup(serviceMegaMenuGroups[0].label);
                  }
                }}
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
                      className="fixed left-1/2 top-[4.5rem] z-50 w-[min(1120px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-elevated"
                    >
                      <div className="grid min-h-[420px] grid-cols-[0.85fr_1.15fr_0.9fr] gap-3">
                        <div className="max-h-[min(70vh,620px)] overflow-y-auto rounded-xl bg-muted/50 p-2">
                          <div className="px-3 pb-2 pt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Explore services</div>
                          <div className="space-y-1">
                            {serviceMegaMenuGroups.map((group) => {
                              const Icon = getLucideIcon(group.icon);
                              const active = selectedMegaGroup === group.label;
                              return (
                                <button
                                  key={group.label}
                                  type="button"
                                  onMouseEnter={() => setSelectedMegaGroup(group.label)}
                                  onFocus={() => setSelectedMegaGroup(group.label)}
                                  className={cn("flex w-full items-center gap-3 rounded-xl px-4 py-4 text-left transition-colors", active ? "bg-card shadow-soft" : "hover:bg-card/70")}
                                >
                                  <Icon className={cn("size-5 shrink-0", active ? "text-primary" : "text-muted-foreground")} />
                                  <span className="min-w-0 flex-1 text-sm font-semibold text-card-foreground">{group.label}</span>
                                  <ChevronRight className={cn("size-4 shrink-0", active ? "text-primary" : "text-muted-foreground")} />
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {(() => {
                          const group = serviceMegaMenuGroups.find((entry) => entry.label === selectedMegaGroup) ?? serviceMegaMenuGroups[0];
                          return (
                            <div className="max-h-[min(70vh,620px)] overflow-y-auto px-3 py-2">
                              <div className="flex items-center justify-between border-b border-border pb-4">
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{group.label}</p>
                                  <p className="mt-1 text-sm text-muted-foreground">{group.description}</p>
                                </div>
                                <Link href={group.href} className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground" aria-label={`View all ${group.label} services`}>
                                  <ArrowRight className="size-4" />
                                </Link>
                              </div>
                              <div className="mt-2 divide-y divide-border">
                                {group.items.map((child) => (
                                  <Link key={child.href} href={child.href} className="group flex items-center justify-between gap-4 py-4 transition-colors">
                                    <span>
                                      <span className="block text-base font-medium text-card-foreground group-hover:text-primary">{child.label}</span>
                                      <span className="mt-1 block text-sm text-muted-foreground">{child.description}</span>
                                    </span>
                                    <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })()}

                        <div className="relative hidden overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/20 p-6 lg:block">
                          <div className="absolute -right-10 -top-10 size-36 rounded-full bg-primary/15 blur-2xl" />
                          <div className="relative flex h-full flex-col justify-between">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Topical growth system</p>
                              <h3 className="mt-4 text-xl font-display font-bold tracking-tight text-card-foreground">Build a connected marketing engine.</h3>
                              <p className="mt-3 text-sm leading-6 text-muted-foreground">Start with the service that matches your goal, then connect search, content, paid media, and conversion into one clear growth path.</p>
                            </div>
                            <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary">Explore all services <ArrowRight className="size-4" /></Link>
                          </div>
                        </div>
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
                      <div className="ml-3 space-y-3 border-l border-border pl-3">
                        {item.label === "Services" ? serviceMegaMenuGroups.map((group) => (
                          <div key={group.label} className="rounded-lg bg-muted/50 p-2">
                            <Link href={group.href} onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-sm font-semibold text-foreground">{group.label}</Link>
                            <div className="grid gap-0.5">
                              {group.items.map((child) => <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-card hover:text-foreground">{child.label}</Link>)}
                            </div>
                          </div>
                        )) : item.children.map((child) => (
                          <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2.5 text-base text-muted-foreground hover:bg-muted hover:text-foreground">{child.label}</Link>
                        ))}
                      </div>
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
