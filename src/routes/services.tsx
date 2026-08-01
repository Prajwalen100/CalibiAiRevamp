import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { DisplayHeading, Reveal, SectionLabel } from "@/components/site/primitives";
import { brand, servicesPage } from "@/content/site";

const title = "Detailed AI Services | Calibi AI";
const description =
  "Business automation, AI consultation, AI development, and AI training for colleges and corporates — delivered as practical systems by Calibi AI.";
const siteUrl = "https://animated-partners-glamour.lovable.app";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/services` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/services` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: servicesPage.blocks.map((block, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: block.title,
              description: block.sub,
              provider: { "@type": "Organization", name: brand.name },
              areaServed: "Worldwide",
            },
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={servicesPage.eyebrow}
        lineOne={servicesPage.h1a}
        lineTwo={servicesPage.h1b}
        sub={servicesPage.sub}
      />

      <section className="bg-background py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="border-t border-border">
            {servicesPage.blocks.map((block, i) => (
              <Reveal
                key={block.id}
                delay={0.04 * i}
                className="group grid gap-8 border-b border-border py-12 lg:grid-cols-[auto_1fr_1.05fr] lg:gap-16"
              >
                <span
                  id={block.id}
                  className="mono-label scroll-mt-28 text-accent lg:pt-3"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display min-w-0 text-3xl sm:text-4xl lg:text-[2.75rem]">
                  {block.heading}
                </h2>
                <div className="min-w-0">
                  <p className="text-base leading-relaxed text-muted-foreground">{block.intro}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm">
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span className="min-w-0 text-foreground/85">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-on-ink sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionLabel index="05" label="Method" invert />
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
              <DisplayHeading lineOne={servicesPage.howWeWork.heading} invert />
              <p className="max-w-xl text-base leading-relaxed text-on-ink-muted lg:justify-self-end">
                {servicesPage.howWeWork.intro}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-px bg-ink-hairline md:grid-cols-3">
            {servicesPage.howWeWork.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.07} className="bg-ink p-6 sm:p-9">
                <span className="display text-5xl text-on-ink-muted/50">{step.number}</span>
                <h3 className="display mt-8 text-2xl sm:text-3xl">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-on-ink-muted">{step.description}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-14">
            <a
              href={brand.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label group inline-flex items-center gap-3 bg-accent px-6 py-4 text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Book a Free Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
