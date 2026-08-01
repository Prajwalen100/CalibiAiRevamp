import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionLabel } from "@/components/site/primitives";
import { productsPage } from "@/content/site";

const title = "Our Products | Calibi AI";
const description =
  "The trusted ecosystem for applied AI talent. Where ambitious engineering students build verified portfolios, and forward-thinking companies hire proven AI builders.";

export const Route = createFileRoute("/products")({
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
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow={productsPage.eyebrow}
        lineOne={productsPage.h1a}
        lineTwo={productsPage.h1b}
        sub={productsPage.sub}
      />

      <section className="bg-background py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionLabel index="01" label="Who It's For" />
          </Reveal>

          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
            {productsPage.cards.map((card, i) => (
              <Reveal
                key={card.title}
                delay={(i % 2) * 0.07}
                className="group flex flex-col bg-card p-6 transition-colors duration-500 hover:bg-secondary sm:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="mono-label text-accent">{card.index}</span>
                  <span className="tag-pill text-muted-foreground">{card.eyebrow}</span>
                </div>

                <h2 className="display mt-8 text-2xl sm:text-[1.75rem] lg:text-3xl">
                  {card.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {card.description}
                </p>

                <ul className="mt-7 space-y-2.5 border-t border-border pt-6">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      <span className="min-w-0 text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-label mt-auto inline-flex items-center gap-2 pt-8 text-foreground transition-colors hover:text-accent"
                >
                  {card.cta}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
