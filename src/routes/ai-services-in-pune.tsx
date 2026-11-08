import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CaseStudiesCarousel } from "@/components/site/CaseStudiesCarousel";
import { ConsultCta } from "@/components/site/ConsultCta";
import { PageHero } from "@/components/site/PageHero";
import { Testimonials } from "@/components/site/Testimonials";
import { DisplayHeading, Pill, Reveal, SectionLabel } from "@/components/site/primitives";
import { brand, partner, puneLanding } from "@/content/site";

const title = "AI Services in Pune | Calibi AI — AI Automation Company";
const description =
  "AI services in Pune: Calibi AI builds AI chatbots, voice agents and business automation from Hinjewadi. Book a free consultation.";
const siteUrl = "https://calibiai.com";
const pageUrl = `${siteUrl}/ai-services-in-pune`;

export const Route = createFileRoute("/ai-services-in-pune")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${pageUrl}#business`,
          name: brand.name,
          description:
            "AI automation company in Pune building AI chatbots, voice agents, multi-agent systems and business automation.",
          url: pageUrl,
          email: brand.email,
          image: `${siteUrl}/icon-512.png`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Hinjewadi Phase 1",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "411057",
            addressCountry: "IN",
          },
          areaServed: [
            { "@type": "City", name: "Pune" },
            { "@type": "City", name: "Pimpri-Chinchwad" },
            { "@type": "AdministrativeArea", name: "Pune Metropolitan Region" },
          ],
          serviceType: [
            "AI chatbot development",
            "AI voice agents",
            "Multi-agent AI systems",
            "Business process automation",
            "AI consulting",
            "AI training",
          ],
          knowsAbout: puneLanding.whatWeDo.items.map((i) => i.name),
          memberOf: { "@type": "Organization", name: partner.name },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "AI services in Pune",
            itemListElement: puneLanding.whatWeDo.items.map((item) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: item.name,
                description: item.body,
                areaServed: { "@type": "City", name: "Pune" },
                provider: { "@type": "Organization", name: brand.name },
              },
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: puneLanding.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
            { "@type": "ListItem", position: 2, name: "AI Services in Pune", item: pageUrl },
          ],
        }),
      },
    ],
  }),
  component: PunePage,
});

function PunePage() {
  return (
    <>
      <PageHero
        eyebrow={puneLanding.eyebrow}
        lineOne={puneLanding.lineOne}
        lineTwo={puneLanding.lineTwo}
        sub={puneLanding.sub}
        chips={puneLanding.chips}
      />

      <section className="bg-background py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="max-w-3xl space-y-6">
              {puneLanding.intro.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              <nav aria-label="Related pages" className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { to: "/services", label: "Detailed AI services" },
                  { to: "/products", label: "Pre-built AI products" },
                  { to: "/academy", label: "AI training for teams & colleges" },
                  { to: "/story", label: "About Calibi AI" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                ))}
              </nav>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-background py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <SectionLabel index="01" label={puneLanding.whatWeDo.label} />
          <DisplayHeading className="mt-6 max-w-3xl" lineOne={puneLanding.whatWeDo.heading} />

          <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 lg:grid-cols-3">
            {puneLanding.whatWeDo.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.05}>
                <article className="h-full bg-background p-8">
                  <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link
              to="/services"
              className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              See every service in detail
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-background py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <SectionLabel index="02" label={puneLanding.areas.label} />
          <DisplayHeading className="mt-6 max-w-3xl" lineOne={puneLanding.areas.heading} />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {puneLanding.areas.body}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {puneLanding.areas.list.map((area) => (
              <Pill key={area}>{area}</Pill>
            ))}
          </div>
          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {partner.blurb}
          </p>
          <address className="mt-8 not-italic text-sm text-muted-foreground">
            <strong className="font-medium text-foreground">Calibi AI</strong>{" "}
            <span className="text-muted-foreground">
              {partner.relationship} {partner.name}
            </span>
            <br />
            {brand.address}
            <br />
            <a className="hover:text-foreground" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
          </address>
        </div>
      </section>

      <CaseStudiesCarousel />

      <Testimonials />

      <section className="border-t border-border bg-background py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <SectionLabel index="03" label="Questions" />
          <DisplayHeading className="mt-6 max-w-3xl" lineOne="AI services in Pune, answered" />
          <dl className="mt-14 max-w-3xl divide-y divide-border border-y border-border">
            {puneLanding.faqs.map((faq) => (
              <div key={faq.question} className="py-7">
                <dt className="text-base font-semibold text-foreground">{faq.question}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ConsultCta />
    </>
  );
}
