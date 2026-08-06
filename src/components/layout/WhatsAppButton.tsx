"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  if (!siteConfig.features.whatsappFloatingButton) return null;

  return (
    <a
      href={siteConfig.author.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex size-14 items-center justify-center rounded-full bg-success text-success-foreground shadow-elevated transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
