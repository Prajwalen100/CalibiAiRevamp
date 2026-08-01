import { createFileRoute } from "@tanstack/react-router";
import { CaseStudiesCarousel } from "@/components/site/CaseStudiesCarousel";
import { ConsultCta } from "@/components/site/ConsultCta";
import { Faq } from "@/components/site/Faq";
import { Hero } from "@/components/site/Hero";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { Testimonials } from "@/components/site/Testimonials";

const title = "Calibi AI — Premium AI Automation for Business";
const description =
  "Enterprise-grade AI chatbots, voice agents, and business automation. Book a free consultation with Calibi AI, a premium AI automation agency in Pune.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
