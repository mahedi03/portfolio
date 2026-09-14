import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
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
import { SkipToContent } from "@/components/shared/SkipToContent";
import { AmbientBackground } from "@/components/ui/AmbientBackground";

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
    { color: "#0a0a0f" },
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
    <html lang={siteConfig.language} data-theme="dark" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} antialiased`}>
        <JsonLd
          data={[
            personSchema(),
            organizationSchema(),
            websiteSchema(),
          ]}
        />
        <ThemeProvider>
          <AmbientBackground />
          <SkipToContent />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
        <Script
          id="firebase-analytics"
          type="module"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
              import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";

              const firebaseConfig = {
                apiKey: "AIzaSyCukMqVbIK1K7gFk3shKSjlqebluq_WR6w",
                authDomain: "mahedi-portfolio-254b5.firebaseapp.com",
                projectId: "mahedi-portfolio-254b5",
                storageBucket: "mahedi-portfolio-254b5.firebasestorage.app",
                messagingSenderId: "28782655803",
                appId: "1:28782655803:web:ec78db7c18dd56e7159f1e",
                measurementId: "G-SPWM5GPDWY"
              };

              const app = initializeApp(firebaseConfig);
              const analytics = getAnalytics(app);
            `,
          }}
        />
      </body>
    </html>
  );
}
