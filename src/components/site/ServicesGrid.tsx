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
            const total = services.length;
            // Count-agnostic: fill the trailing gap so no dead space is left.
            const lgRemainder = total % 3;
            const inLastLgRow = lgRemainder !== 0 && i >= total - lgRemainder;
            const lgSpan =
              inLastLgRow && lgRemainder === 1
                ? "lg:col-span-3"
                : inLastLgRow && lgRemainder === 2 && i === total - 2
                  ? "lg:col-span-2"
                  : "lg:col-span-1";
            // First card widens on 2-col so the trailing row stays full.
            const smWide = i === 0 || (total % 2 === 1 && i === total - 1);
            const banner = lgSpan === "lg:col-span-3";
            return (
              <Reveal
                key={service.name}
                delay={(i % 3) * 0.06}
                className={cn(
                  "group flex flex-col bg-card p-6 transition-colors duration-500 hover:bg-secondary sm:p-8",
                  smWide && "sm:col-span-2",
                  lgSpan,
                )}
              >
                <div className={cn("flex items-start justify-between gap-4", banner && "lg:hidden")}>
                  <span className="mono-label text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="tag-pill text-muted-foreground">{`0${i + 1} / 07`}</span>
                </div>
                {banner ? (
                  <div className="hidden items-start justify-between gap-4 lg:flex">
                    <span className="mono-label text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span className="tag-pill text-muted-foreground">{`0${i + 1} / 07`}</span>
                  </div>
                ) : null}

                <div
                  className={cn(
                    "mt-6 flex flex-col",
                    banner && "lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12",
                  )}
                >
                <div className={cn("aspect-[16/10] overflow-hidden bg-secondary", banner && "lg:h-full lg:aspect-auto lg:min-h-[19rem]")}>
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    className="editorial-img h-full w-full object-cover group-hover:scale-[1.03]"
                  />
                </div>
                <div className={cn("flex min-w-0 flex-1 flex-col", banner && "lg:mt-0")}>
                <h3 className={cn("display mt-7 text-2xl sm:text-[1.75rem]", banner && "lg:mt-0 lg:text-4xl")}>{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className={cn("mt-6 space-y-2.5", banner && "lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-2.5 lg:space-y-0")}>
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
                </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
