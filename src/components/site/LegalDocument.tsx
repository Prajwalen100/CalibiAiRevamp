import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, FileText, Mail, Printer, Scale, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/primitives";
import { brand } from "@/content/site";
import { cn } from "@/lib/utils";
import {
  legalDocuments,
  type LegalBlock,
  type LegalDocument as LegalDocumentType,
} from "@/content/legal";

/** Sticky table of contents with scroll-spy. */
function TableOfContents({ doc }: { doc: LegalDocumentType }) {
  const [active, setActive] = useState(doc.sections[0]?.id ?? "");
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        ticking.current = false;
        const offset = 160; // fixed nav + breathing room
        let current = doc.sections[0]?.id ?? "";
        for (const section of doc.sections) {
          const el = document.getElementById(section.id);
          if (!el) continue;
          if (el.getBoundingClientRect().top <= offset) current = section.id;
        }
        setActive(current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [doc]);

  return (
    <nav aria-label="On this page" className="no-print">
      <span className="mono-label text-muted-foreground">On this page</span>
      <ul className="mt-5 space-y-0.5 border-l border-border">
        {doc.sections.map((section, i) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group -ml-px flex items-baseline gap-3 border-l-2 py-2 pl-4 text-sm transition-all duration-300",
                  isActive
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "mono-label text-[10px] transition-colors",
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground/60 group-hover:text-muted-foreground",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-snug">{section.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function Block({ block }: { block: LegalBlock }) {
  return (
    <div className="space-y-5">
      {block.paragraphs?.map((p) => (
        <p key={p.slice(0, 40)} className="text-[15px] leading-[1.9] text-muted-foreground">
          {p}
        </p>
      ))}
      {block.subheading ? (
        <h3 className="display pt-2 text-lg text-foreground sm:text-xl">{block.subheading}</h3>
      ) : null}
      {block.bullets ? (
        <div>
          {block.bullets.title ? (
            <h3 className="display mb-4 text-lg text-foreground sm:text-xl">
              {block.bullets.title}
            </h3>
          ) : null}
          <ul className="space-y-3">
            {block.bullets.items.map((item) => (
              <li
                key={item.slice(0, 40)}
                className="flex items-start gap-3 text-sm leading-relaxed"
              >
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span className="min-w-0 text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function LegalDocument({ doc }: { doc: LegalDocumentType }) {
  const other = doc === legalDocuments.privacy ? legalDocuments.terms : legalDocuments.privacy;
  const otherPath: "/privacy-policy" | "/terms" =
    other.path === "terms" ? "/terms" : "/privacy-policy";
  const Icon = doc === legalDocuments.privacy ? ShieldCheck : Scale;
  const meta = useMemo(
    () => [
      { label: "Effective date", value: doc.effectiveDate },
      { label: "Last updated", value: doc.lastUpdated },
      { label: "Version", value: doc.version },
      { label: "Document owner", value: doc.owner },
    ],
    [doc],
  );

  return (
    <>
      <PageHero
        eyebrow="Legal & Compliance"
        lineOne={
          doc.title === "Privacy Policy"
            ? "Privacy"
            : doc.title === "Terms & Conditions"
              ? "Terms &"
              : doc.title
        }
        lineTwo={doc.title === "Privacy Policy" ? "Policy" : "Conditions"}
        sub={doc.tagline}
        chips={["Effective " + doc.effectiveDate, "Version " + doc.version]}
      />

      {/* Document header */}
      <section className="bg-background py-14 sm:py-18">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="no-print flex flex-wrap items-center gap-2">
            <Link
              to="/"
              className="mono-label text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <span aria-hidden className="text-muted-foreground/50">
              /
            </span>
            <span className="mono-label text-muted-foreground">Legal</span>
            <span aria-hidden className="text-muted-foreground/50">
              /
            </span>
            <span className="mono-label text-foreground">{doc.label}</span>
          </nav>

          <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-card">
                <Icon className="h-5 w-5 text-accent" />
              </span>
              <div>
                <h1 className="sr-only">{doc.title}</h1>
                <p className="mono-label text-accent">Document</p>
                <p className="mt-1 display text-2xl text-foreground sm:text-3xl">{doc.title}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="no-print inline-flex w-fit items-center gap-2 border border-border px-4 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Printer className="h-3.5 w-3.5" />
              Print / Save as PDF
            </button>
          </div>

          {/* Meta strip */}
          <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label} className="bg-card p-5">
                <span className="mono-label text-muted-foreground">{m.label}</span>
                <p className="mt-2 text-sm font-medium text-foreground">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Plain-English summary */}
          <div className="mt-10 border-l-2 border-accent bg-secondary p-6 sm:p-8">
            <span className="mono-label text-accent">In plain English</span>
            <p className="mt-3 max-w-3xl text-[15px] leading-[1.85] text-foreground/85">
              {doc.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Body: sticky TOC + sections */}
      <section className="bg-background pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[280px_minmax(0,1fr)] xl:gap-20">
            <div className="no-print lg:sticky lg:top-32 lg:self-start">
              <TableOfContents doc={doc} />
              <div className="mt-10 border border-border bg-card p-5">
                <span className="mono-label text-muted-foreground">Need a copy?</span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Email us and we'll send a PDF of this document, or use the print button above.
                </p>
                <a
                  href={`mailto:${brand.email}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  <Mail className="h-3.5 w-3.5 text-accent" />
                  {brand.email}
                </a>
              </div>
            </div>

            <div className="min-w-0 max-w-[46rem]">
              {doc.sections.map((section, i) => (
                <Reveal
                  key={section.id}
                  as="section"
                  className="scroll-mt-32 border-b border-border py-12 first:pt-0 last:border-b-0"
                >
                  <div className="flex items-baseline gap-4 sm:gap-5">
                    <span className="mono-label text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <h2
                      id={section.id}
                      className="display scroll-mt-32 text-[1.65rem] leading-tight text-foreground sm:text-3xl"
                    >
                      {section.title}
                    </h2>
                  </div>
                  <div className="mt-7 space-y-9 sm:pl-[3.25rem]">
                    {section.blocks.map((block, bi) => (
                      <Block key={bi} block={block} />
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ink py-20 text-on-ink sm:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <Reveal>
              <span className="mono-label text-accent">Questions?</span>
              <h2 className="display mt-6 text-3xl leading-tight sm:text-4xl lg:text-5xl">
                We're happy to walk you
                <span className="block text-on-ink-muted">through any part of this.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-on-ink-muted">
                If anything in this document is unclear, or you need a tailored data-processing
                agreement, DPA, or client onboarding paperwork, our team responds within two
                business days.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${brand.email}`}
                  className="group inline-flex items-center gap-2 border border-ink-hairline bg-transparent px-5 py-3 text-sm font-medium text-on-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                  {brand.email}
                </a>
                <a
                  href={brand.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Book a Free Consultation
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                to={otherPath}
                className="group block border border-ink-hairline p-7 transition-colors hover:border-accent sm:p-9"
              >
                <span className="flex items-center justify-between">
                  <FileText className="h-5 w-5 text-accent" />
                  <ArrowUpRight className="h-4 w-4 text-on-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </span>
                <span className="mono-label mt-7 block text-on-ink-muted">Related document</span>
                <span className="display mt-2 block text-2xl text-on-ink transition-colors group-hover:text-accent">
                  {other.label}
                </span>
                <span className="mt-3 block text-sm leading-relaxed text-on-ink-muted">
                  {other.tagline}
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
