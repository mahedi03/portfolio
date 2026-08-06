import type { Testimonial } from "@/types";

// These are sample testimonials for design preview only. Replace them with verified feedback before publishing.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aisha Rahman",
    avatar: "/testimonials/placeholder-1.jpg",
    quote:
      "The SEO strategy gave our website a clear direction. The technical SEO improvements, keyword research, and content strategy helped us build stronger organic visibility and attract more qualified enquiries.",
    rating: 5,
    featured: true,
  },
  {
    id: "t2",
    name: "Daniel Morgan",
    avatar: "/testimonials/placeholder-1.jpg",
    quote:
      "The local SEO work made our service area much easier to understand in search. Our Google Business Profile, on-page SEO, local landing pages, and conversion-focused website content now work together as one growth system.",
    rating: 5,
    featured: true,
  },
  {
    id: "t3",
    name: "Nadia Karim",
    avatar: "/testimonials/placeholder-1.jpg",
    quote:
      "We received a fast, professional website that looks polished and loads quickly. The Next.js development, responsive design, technical SEO, and clear user experience gave our brand a much stronger digital foundation.",
    rating: 5,
    featured: true,
  },
  {
    id: "t4",
    name: "Michael Foster",
    avatar: "/testimonials/placeholder-1.jpg",
    quote:
      "The digital marketing plan connected SEO, content marketing, Google Ads, and conversion tracking in a way that finally made performance easier to understand. Every recommendation was practical and focused on measurable growth.",
    rating: 5,
    featured: true,
  },
  {
    id: "t5",
    name: "Sofia Ahmed",
    avatar: "/testimonials/placeholder-1.jpg",
    quote:
      "The content marketing and SEO recommendations made our website much more useful for potential customers. Our service pages are clearer, our content strategy is more consistent, and our organic search foundation is stronger.",
    rating: 5,
    featured: true,
  },
  {
    id: "t6",
    name: "James Wilson",
    avatar: "/testimonials/placeholder-1.jpg",
    quote:
      "The Google Ads and conversion tracking setup gave us a much clearer view of campaign performance. From keyword targeting to landing page improvements, the work was focused on qualified leads and measurable return on investment.",
    rating: 5,
    featured: true,
  },
];

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.featured);
}
