import { ArrowUpRight, CalendarClock, Check, Video } from "lucide-react";
import { brand, consultSection } from "@/content/site";
import { DisplayHeading, Reveal, SectionLabel } from "./primitives";

const icons = [CalendarClock, Video, Check];

export function ConsultCta() {
  return (
    <section id="consultation" className="bg-background py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="04" label="Consultation" />
        </Reveal>

        <div className="mt-8 grid gap-px border border-border bg-border lg:grid-cols-[1.15fr_1fr]">
          <Reveal className="bg-card p-6 sm:p-10 lg:p-14">
            <DisplayHeading lineOne={consultSection.heading} />
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              {consultSection.sub}
            </p>

            <div className="mt-10 grid gap-px bg-border sm:grid-cols-3">
              {consultSection.chips.map((chip, i) => {
                const Icon = icons[i] ?? Check;
                return (
                  <div key={chip.title} className="bg-card py-5 sm:px-5">
                    <Icon className="h-4 w-4 text-accent" />
                    <p className="display mt-4 text-lg">{chip.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{chip.sub}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <a
                href={brand.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="mono-label group inline-flex items-center gap-3 bg-foreground px-6 py-4 text-primary-foreground transition-colors hover:bg-accent"
              >
                {consultSection.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <p className="mt-4 text-sm text-muted-foreground">{consultSection.microcopy}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="bg-secondary p-6 sm:p-10 lg:p-14">
            <h3 className="display text-2xl sm:text-3xl">{consultSection.expectHeading}</h3>
            <ol className="mt-8 border-t border-border">
              {consultSection.expect.map((item, i) => (
                <li key={item} className="flex items-start gap-5 border-b border-border py-5">
                  <span className="mono-label shrink-0 text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 text-sm leading-relaxed text-foreground/85">{item}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
