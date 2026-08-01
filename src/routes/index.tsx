import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.webp";
import { CaseStudiesCarousel } from "@/components/site/CaseStudiesCarousel";
import { ConsultCta } from "@/components/site/ConsultCta";
import { Faq } from "@/components/site/Faq";
import { Hero } from "@/components/site/Hero";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { Testimonials } from "@/components/site/Testimonials";
import { brand, faqs } from "@/content/site";

const title = "Calibi AI — Premium AI Automation for Business";
const description =
  "Enterprise-grade AI chatbots, voice agents, and business automation. Book a free consultation with Calibi AI, a premium AI automation agency in Pune.";
const siteUrl = "https://animated-partners-glamour.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${siteUrl}/` },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: brand.name,
          description: brand.footerDescription,
          url: `${siteUrl}/`,
          email: brand.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Hinjewadi Phase 1",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "411057",
            addressCountry: "IN",
          },
          areaServed: "Worldwide",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <CaseStudiesCarousel />
      <ProcessTimeline />
      <ConsultCta />
      <Testimonials />
      <Faq />
    </>
  );
}
