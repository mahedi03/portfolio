import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import {
  organizationSchema,
  personSchema,
  websiteSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SkipToContent } from "@/components/shared/SkipToContent";

// ---- Font optimization: next/font self-hosts and eliminates layout shift ---
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-var",
  display: "swap",
});

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display-var",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = buildMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} antialiased`}>
        <JsonLd data={[personSchema(), organizationSchema(), websiteSchema()]} />
        <ThemeProvider>
          <SkipToContent />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
