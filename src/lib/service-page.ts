import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export function getServiceForPage(slug: string) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return service;
}

export function getServicePageMetadata(slug: string): Metadata {
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [service.title, service.shortTitle],
  });
}
