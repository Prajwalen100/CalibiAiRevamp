import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { DisplayHeading, Reveal, SectionLabel } from "@/components/site/primitives";
import { storyPage } from "@/content/site";

const title = "Our Story | Calibi AI";
const description =
  "Calibi AI exists to turn AI from a buzzword into working systems, trained teams, and real operational advantage for businesses and learners.";

export const Route = createFileRoute("/story")({
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
  component: StoryPage,
});

function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow={storyPage.eyebrow}
        lineOne={storyPage.h1a}
        lineTwo={storyPage.h1b}
        sub={storyPage.sub}
      />

      <section className="bg-background py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {storyPage.sections.map((section, i) => (
              <Reveal
                key={section.heading}
                delay={(i % 2) * 0.07}
                className="bg-card p-6 sm:p-10"
              >
                <span className="mono-label text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display mt-6 text-3xl sm:text-4xl">{section.heading}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {section.intro}
                </p>
                <ul className="mt-7 space-y-3 border-t border-border pt-6">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span className="min-w-0 text-foreground/85">{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionLabel index="05" label="Promise" />
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
              <DisplayHeading lineOne={storyPage.promise.heading} />
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:justify-self-end">
                {storyPage.promise.intro}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            {storyPage.promise.cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.07} className="bg-background p-6 sm:p-9">
                <span aria-hidden className="block h-px w-12 bg-accent" />
                <h3 className="display mt-7 text-2xl sm:text-[1.75rem]">{card.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
