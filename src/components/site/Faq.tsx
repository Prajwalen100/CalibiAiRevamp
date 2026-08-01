import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { brand, faqSection, faqs } from "@/content/site";
import { cn } from "@/lib/utils";
import { DisplayHeading, Reveal, SectionLabel } from "./primitives";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionLabel index="06" label="FAQ" />
            <DisplayHeading lineOne={faqSection.heading} className="mt-8" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {faqSection.sub}
            </p>
            <div className="mt-10">
              <p className="display text-xl">{faqSection.closing}</p>
              <a
                href={brand.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="mono-label group mt-3 inline-flex items-center gap-2 border-b border-foreground pb-1 transition-colors hover:border-accent hover:text-accent"
              >
                {faqSection.closingCta}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="border-t border-border">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.question} className="border-b border-border">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span className="display min-w-0 text-lg transition-colors group-hover:text-accent sm:text-2xl">
                        {item.question}
                      </span>
                      <Plus
                        className={cn(
                          "mt-1 h-4 w-4 shrink-0 text-accent transition-transform duration-300",
                          isOpen && "rotate-45",
                        )}
                      />
                    </button>
                  </h3>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-500 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <p className="min-h-0 max-w-2xl pb-7 text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
