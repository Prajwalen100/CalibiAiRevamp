import { Check } from "lucide-react";
import { services, servicesSection } from "@/content/site";
import { cn } from "@/lib/utils";
import { DisplayHeading, Reveal, SectionLabel, StatFigure, splitStat } from "./primitives";

export function ServicesGrid() {
  return (
    <section id="services" className="bg-background py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="01" label="Capabilities" />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <DisplayHeading lineOne={servicesSection.heading} />
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground lg:justify-self-end">
              {servicesSection.sub}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const { figure, rest } = splitStat(service.stat);
            const wide = i === 0;
            return (
              <Reveal
                key={service.name}
                delay={(i % 3) * 0.06}
                className={cn(
                  "group flex flex-col bg-card p-6 transition-colors duration-500 hover:bg-secondary sm:p-8",
                  wide && "sm:col-span-2 lg:col-span-1",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="mono-label text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="tag-pill text-muted-foreground">{`0${i + 1} / 07`}</span>
                </div>

                <div className="mt-6 aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    className="editorial-img h-full w-full object-cover group-hover:scale-[1.03]"
                  />
                </div>

                <h3 className="display mt-7 text-2xl sm:text-[1.75rem]">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      <span className="min-w-0 text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-baseline gap-3 pt-8">
                  <StatFigure
                    value={figure}
                    className="display shrink-0 text-3xl text-accent sm:text-4xl"
                  />
                  <span className="mono-label min-w-0 text-muted-foreground">{rest}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
