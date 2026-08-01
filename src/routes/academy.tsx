import { createFileRoute } from "@tanstack/react-router";
import academyImg from "@/assets/academy.webp.asset.json";
import { AcademyContact } from "@/components/site/AcademyContact";
import { PageHero } from "@/components/site/PageHero";
import { DisplayHeading, Reveal, SectionLabel } from "@/components/site/primitives";
import { academyPage } from "@/content/site";

const title = "Calibi AI Academy — AI Training for Colleges & Corporates";
const description =
  "Practical AI workshops, bootcamps, and automation labs for colleges, placement cells, and corporate teams. Partner with Calibi AI Academy.";

export const Route = createFileRoute("/academy")({
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
  component: AcademyPage,
});

function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow={academyPage.eyebrow}
        lineOne={academyPage.h1a}
        lineTwo={academyPage.h1b}
        sub={academyPage.sub}
        chips={academyPage.chips}
      />

      <section className="bg-background py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-px border border-border bg-border lg:grid-cols-[1.1fr_1fr]">
            <Reveal className="bg-card p-6 sm:p-10 lg:p-14">
              <SectionLabel index="01" label="Workshops" />
              <DisplayHeading lineOne={academyPage.workshops.heading} className="mt-8" />
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                {academyPage.workshops.intro}
              </p>
              <div className="mt-10 grid gap-px bg-border sm:grid-cols-3">
                {academyPage.workshops.formats.map((fmt) => (
                  <div key={fmt.label} className="bg-card py-5 sm:px-5">
                    <p className="display text-3xl text-accent">{fmt.strong}</p>
                    <p className="mono-label mt-3 text-muted-foreground">{fmt.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="min-h-[280px] overflow-hidden bg-secondary lg:min-h-0">
              <img
                src={academyImg.url}
                alt="Students collaborating during a hands-on workshop session"
                loading="lazy"
                decoding="async"
                className="editorial-img h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-2">
            {academyPage.sections.map((section, i) => (
              <Reveal
                key={section.heading}
                delay={(i % 2) * 0.07}
                className="bg-card p-6 sm:p-10"
              >
                <span className="mono-label text-accent">
                  {String(i + 2).padStart(2, "0")}
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

      <AcademyContact />
    </>
  );
}
