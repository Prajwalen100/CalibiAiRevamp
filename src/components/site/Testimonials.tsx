import { Quote } from "lucide-react";
import { testimonials, testimonialsSection } from "@/content/site";
import { cn } from "@/lib/utils";
import { DisplayHeading, Reveal, SectionLabel } from "./primitives";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="05" label="Testimonials" />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <DisplayHeading lineOne={testimonialsSection.heading} />
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground lg:justify-self-end">
              {testimonialsSection.sub}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 2) * 0.07}
              className={cn(
                "flex flex-col bg-card p-6 sm:p-9",
                i === 3 && "md:col-span-2",
              )}
            >
              <Quote className="h-5 w-5 shrink-0 text-accent" />
              <blockquote className="mt-6 text-base leading-relaxed text-foreground/90 sm:text-lg">
                {t.quote}
              </blockquote>
              <div className="mt-auto flex items-center gap-4 pt-8">
                <span className="mono-label grid h-11 w-11 shrink-0 place-items-center border border-border text-accent">
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <p className="display truncate text-lg">{t.name}</p>
                  <p className="mono-label truncate text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
