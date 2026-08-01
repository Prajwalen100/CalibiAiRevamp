import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { caseStudies, caseStudiesSection } from "@/content/site";
import { cn } from "@/lib/utils";
import { DisplayHeading, Reveal, SectionLabel } from "./primitives";

export function CaseStudiesCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    return () => {
      embla.off("select", onSelect);
      embla.off("reInit", onSelect);
    };
  }, [embla]);

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section id="case-studies" className="bg-ink py-20 text-on-ink sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="02" label="Case Studies" invert />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <DisplayHeading lineOne={caseStudiesSection.heading} invert />
            <p className="max-w-lg text-base leading-relaxed text-on-ink-muted lg:justify-self-end">
              {caseStudiesSection.sub}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {caseStudies.map((study, i) => (
              <article
                key={study.company}
                className="min-w-0 flex-[0_0_100%] pr-0 lg:flex-[0_0_88%] lg:pr-6"
              >
                <div className="grid h-full gap-px bg-ink-hairline lg:grid-cols-[1.05fr_1fr]">
                  <div className="relative min-h-[260px] overflow-hidden bg-ink sm:min-h-[340px]">
                    <img
                      src={study.image}
                      alt={study.alt}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover opacity-70 grayscale transition-all duration-700 hover:opacity-95 hover:grayscale-0"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-2 bg-[linear-gradient(0deg,oklch(0.175_0.012_60/0.92),transparent)] p-5 sm:p-6">
                      <span className="tag-pill tag-pill-invert bg-ink/60">{study.industry}</span>
                      <span className="mono-label text-accent">{`0${i + 1} / 03`}</span>
                    </div>
                  </div>

                  <div className="flex flex-col bg-ink p-6 sm:p-8 lg:p-10">
                    <h3 className="display text-3xl sm:text-4xl">{study.company}</h3>

                    <dl className="mt-7 space-y-5">
                      <div>
                        <dt className="mono-label text-accent">Challenge</dt>
                        <dd className="mt-2 text-sm leading-relaxed text-on-ink-muted">
                          {study.challenge}
                        </dd>
                      </div>
                      <div>
                        <dt className="mono-label text-accent">Solution</dt>
                        <dd className="mt-2 text-sm leading-relaxed text-on-ink-muted">
                          {study.solution}
                        </dd>
                      </div>
                    </dl>

                    <blockquote className="mt-7 border-l border-accent pl-5">
                      <p className="text-base leading-relaxed text-on-ink sm:text-lg">
                        {study.quote}
                      </p>
                      <footer className="mono-label mt-3 text-on-ink-muted">{study.author}</footer>
                    </blockquote>

                    <div className="mt-8">
                      <h4 className="mono-label text-on-ink-muted">Before &amp; After</h4>
                      <div className="mt-4 grid gap-px bg-ink-hairline sm:grid-cols-3">
                        {study.metrics.map((m) => (
                          <div key={m.label} className="bg-ink p-4">
                            <p className="mono-label text-on-ink-muted">{m.label}</p>
                            <p className="mt-3 text-sm text-on-ink-muted line-through decoration-accent/70">
                              {m.before}
                            </p>
                            <p className="display mt-1 text-2xl text-on-ink">{m.after}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono-label group mt-8 inline-flex items-center gap-2 self-start border-b border-ink-hairline pb-1 text-on-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      {caseStudiesSection.cta}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {caseStudies.map((s, i) => (
              <button
                key={s.company}
                type="button"
                aria-label={`Go to ${s.company} case study`}
                onClick={() => embla?.scrollTo(i)}
                className={cn(
                  "h-1 w-10 transition-colors",
                  selected === i ? "bg-accent" : "bg-ink-hairline hover:bg-on-ink-muted",
                )}
              />
            ))}
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="inline-flex h-11 w-11 items-center justify-center border border-ink-hairline transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="inline-flex h-11 w-11 items-center justify-center border border-ink-hairline transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
