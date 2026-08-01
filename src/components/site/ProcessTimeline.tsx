import { processSection, processSteps } from "@/content/site";
import { DisplayHeading, Reveal, SectionLabel } from "./primitives";

export function ProcessTimeline() {
  return (
    <section id="process" className="bg-secondary py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="03" label="Process" />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <DisplayHeading lineOne={processSection.heading} />
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground lg:justify-self-end">
              {processSection.sub}
            </p>
          </div>
        </Reveal>

        <ol className="mt-14 border-t border-border">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 0.05}
              className="group grid gap-6 border-b border-border py-10 md:grid-cols-[auto_1fr_1.1fr] md:gap-10 lg:gap-16"
            >
              <span className="display text-5xl leading-none text-muted-foreground/40 transition-colors duration-500 group-hover:text-accent md:text-7xl">
                {step.number}
              </span>

              <div className="min-w-0">
                <h3 className="display text-3xl md:text-4xl">{step.title}</h3>
                <p className="mono-label mt-3 text-accent">{step.subtitle}</p>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                <p className="mono-label mt-6 inline-flex items-center gap-2 border border-border px-3 py-2">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="text-foreground">{step.duration}</span>
                </p>
              </div>

              <ul className="min-w-0 space-y-3 md:pt-2">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    <span className="min-w-0 text-foreground/80">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
