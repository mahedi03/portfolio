# Premium Portfolio — Next.js 15

A production-ready, SEO-optimized personal/agency portfolio built with
Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer
Motion.

## Getting started

```bash
npm install
cp .env.example .env.local   # then edit NEXT_PUBLIC_SITE_URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — lint the codebase

## Project structure

```
src/
  app/                  Routes (App Router)
    about/
    services/[slug]/
    portfolio/[slug]/
    case-studies/[slug]/
    blog/[slug]/
    contact/
    api/contact/        Contact form submission endpoint
    sitemap.ts robots.ts manifest.ts
  components/
    home/ about/ services/ portfolio/ case-studies/ blog/ contact/
    layout/             Header, Footer, WhatsApp button
    ui/                 Button, Input, Textarea, Select, Container...
    shared/              Reveal, FAQAccordion, PageHero, ThemeProvider...
    seo/                JsonLd component
  data/                 All content — services, portfolio, blog, etc.
  lib/                  utils, seo (metadata builder), schema (JSON-LD), validations
  config/site.ts        Brand, contact info, social links, feature flags
  types/index.ts        Shared TypeScript types for all content
```

## Customizing content

Everything is data-driven. To update site content, edit the files in
`src/data/` — no component code needs to change for new services,
projects, case studies, or blog posts (new slugs are automatically routed
via `generateStaticParams`).

Start with `src/config/site.ts` to set your name, contact info, and social
links — most of the site pulls from there.

## Design system

Colors, spacing, radii, and fluid typography are defined as CSS custom
properties in `src/app/globals.css` (Tailwind v4 CSS-first config). Update
the OKLCH color values there to change the whole theme, including dark
mode (`[data-theme="dark"]`).

## SEO

- `src/lib/seo.ts` — builds Next.js `Metadata` (Open Graph, Twitter cards,
  canonical URLs, robots directives) for every page.
- `src/lib/schema.ts` — generates JSON-LD structured data (Person,
  Organization, Service, BlogPosting, BreadcrumbList, FAQPage, ItemList,
  etc.), rendered via the `<JsonLd />` component.
- `src/app/sitemap.ts` and `src/app/robots.ts` are generated dynamically
  from the data layer, so new content is automatically included.

## Contact form

`src/components/contact/ContactForm.tsx` posts to `src/app/api/contact/route.ts`,
which validates with Zod and currently logs the submission. Wire up real
delivery (Resend, SendGrid, a CRM webhook, etc.) in that route handler —
see the `TODO` comment inside it.

## Before deploying

- Replace all placeholder images in `/public` (portfolio, case-studies,
  blog, testimonials, og, logo, favicon) with real assets.
- Update `src/config/site.ts` with real name, contact details, and social
  URLs.
- Set `NEXT_PUBLIC_SITE_URL` in your production environment.
- Replace placeholder statistics in `src/data/statistics.ts` with real,
  verifiable numbers — never fabricated metrics.
- Wire up real contact form delivery in `src/app/api/contact/route.ts`.
- Fill in real testimonials, case study metrics, and portfolio results.

## Deployment

Optimized for [Vercel](https://vercel.com). Push to a Git repo and import
the project — no additional configuration required beyond the environment
variable above.
