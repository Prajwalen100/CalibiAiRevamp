import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MermaidDiagram } from "@/components/site/MermaidDiagram";
import { DisplayHeading, Pill, Reveal, SectionLabel } from "@/components/site/primitives";
import { brand } from "@/content/site";
import {
  getCaseStudyArticle,
  getNextCaseStudy,
  type CaseStudyArticle,
} from "@/content/case-studies";

const siteUrl = "https://calibiai.com";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const article = getCaseStudyArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const article = loaderData?.article;
    if (!article) return {};

    const title = `${article.title} | Calibi AI Case Study`;
    const description = `${article.company} — ${article.summary}`;
    const url = `${siteUrl}/case-studies/${article.slug}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description,
            about: article.industry,
            author: { "@type": "Organization", name: brand.name },
            publisher: { "@type": "Organization", name: brand.name },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        },
      ],
    };
  },
  component: CaseStudyArticlePage,
});

function CaseStudyArticlePage() {
  const { article } = Route.useLoaderData();
  const next = getNextCaseStudy(article.slug);

  return (
    <article>
      <ArticleHero article={article} />
      <OverviewSection article={article} />
      <ChallengeSolutionSection article={article} />
      <FlowchartSection article={article} />
      <FeaturesAndStackSection article={article} />
      <ImpactSection article={article} />
      <ResultsSection article={article} />
      <ClosingSection article={article} next={next} />
    </article>
  );
}

function ArticleHero({ article }: { article: CaseStudyArticle }) {
  return (
    <section className="bg-ink pb-16 pt-32 text-on-ink sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-48">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Link
          to="/"
          hash="case-studies"
          className="mono-label group inline-flex items-center gap-2 text-on-ink-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          All Case Studies
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div>
            <p className="mono-label flex items-center gap-4 text-accent">
              Case Study
              <span aria-hidden className="h-px w-16 bg-ink-hairline" />
            </p>
            <h1 className="display mt-7 text-[2.2rem] leading-[0.98] sm:text-5xl lg:text-[4.25rem]">
              {article.title}
            </h1>
          </div>

          <div className="min-w-0">
            <span aria-hidden className="mb-6 block h-px w-full bg-ink-hairline" />
            <dl className="space-y-5">
              <div>
                <dt className="mono-label text-accent">Client</dt>
                <dd className="display mt-2 text-2xl text-on-ink sm:text-3xl">{article.company}</dd>
              </div>
              <div>
                <dt className="mono-label text-accent">Industry</dt>
                <dd className="mt-2 text-sm leading-relaxed text-on-ink-muted">
                  {article.industry}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 grid gap-px bg-ink-hairline lg:grid-cols-[1.05fr_1fr]">
          <div className="relative min-h-[240px] overflow-hidden bg-ink sm:min-h-[320px]">
            <img
              src={article.image}
              alt={article.alt}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover opacity-75 grayscale transition-all duration-700 hover:opacity-95 hover:grayscale-0"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,oklch(0.175_0.012_60/0.92),transparent)] p-5 sm:p-6">
              <Pill invert className="bg-ink/60">
                {article.industry}
              </Pill>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-7 bg-ink p-6 sm:p-8 lg:p-10">
            <div>
              <h2 className="mono-label text-accent">Challenge</h2>
              <p className="mt-3 text-base leading-relaxed text-on-ink-muted">
                {article.challengeLine}
              </p>
            </div>
            <span aria-hidden className="block h-px w-full bg-ink-hairline" />
            <div>
              <h2 className="mono-label text-accent">Solution</h2>
              <p className="mt-3 text-base leading-relaxed text-on-ink">{article.solutionLine}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewSection({ article }: { article: CaseStudyArticle }) {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="01" label="Overview" />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
            <DisplayHeading lineOne="The starting point" />
            <div className="space-y-5">
              {article.overview.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ChallengeSolutionSection({ article }: { article: CaseStudyArticle }) {
  return (
    <section className="bg-secondary py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="02" label="Challenge & Solution" />
        </Reveal>

        <div className="mt-12 grid gap-px bg-border lg:grid-cols-2">
          <Reveal className="bg-background p-6 sm:p-9 lg:p-10">
            <h2 className="display text-3xl sm:text-4xl">The Challenge</h2>
            <div className="mt-6 space-y-4">
              {article.challenge.intro.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="mt-7 space-y-3 border-t border-border pt-6">
              {article.challenge.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span className="min-w-0 text-foreground/85">{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-border pt-6 text-base leading-relaxed text-muted-foreground">
              {article.challenge.outro}
            </p>
          </Reveal>

          <Reveal delay={0.07} className="bg-background p-6 sm:p-9 lg:p-10">
            <h2 className="display text-3xl sm:text-4xl">Our Solution</h2>
            <div className="mt-6 space-y-4">
              {article.solution.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FlowchartSection({ article }: { article: CaseStudyArticle }) {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="03" label="How It Works" />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <DisplayHeading lineOne="Solution architecture" />
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground lg:justify-self-end">
              End-to-end flow of the deployed system, from the first customer touchpoint through to
              analytics.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.07} className="mt-12">
          <MermaidDiagram
            chart={article.flowchart}
            caption={`${article.company} — automated workflow`}
          />
        </Reveal>
      </div>
    </section>
  );
}

function FeaturesAndStackSection({ article }: { article: CaseStudyArticle }) {
  return (
    <section className="bg-secondary py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="04" label="What We Built" />
        </Reveal>

        <div className="mt-12 grid gap-px bg-border lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="bg-background p-6 sm:p-9 lg:p-10">
            <h2 className="display text-3xl sm:text-4xl">Key Features</h2>
            <ul className="mt-8 grid gap-px bg-border sm:grid-cols-2">
              {article.keyFeatures.map((feature, i) => (
                <li key={feature} className="flex items-start gap-4 bg-background p-5">
                  <span className="mono-label shrink-0 text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 text-sm leading-relaxed text-foreground/85">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.07} className="bg-background p-6 sm:p-9 lg:p-10">
            <h2 className="display text-3xl sm:text-4xl">Technology Stack</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {article.techStack.map((tech) => (
                <Pill key={tech}>{tech}</Pill>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ImpactSection({ article }: { article: CaseStudyArticle }) {
  return (
    <section className="bg-ink py-20 text-on-ink sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="05" label="Business Impact" invert />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <DisplayHeading lineOne="Before & after" invert />
            <p className="max-w-lg text-base leading-relaxed text-on-ink-muted lg:justify-self-end">
              {article.impact.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px bg-ink-hairline sm:grid-cols-2 lg:grid-cols-4">
          {article.impact.metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.06} className="bg-ink p-6 sm:p-8">
              <p className="mono-label text-on-ink-muted">{metric.label}</p>
              <p className="mt-5 text-sm text-on-ink-muted line-through decoration-accent/70">
                {metric.before}
              </p>
              <p className="display mt-2 text-3xl text-on-ink sm:text-4xl">{metric.after}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-3xl border-t border-ink-hairline pt-8 text-base leading-relaxed text-on-ink-muted">
            {article.impact.outro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ResultsSection({ article }: { article: CaseStudyArticle }) {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="06" label="Results" />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
            <DisplayHeading lineOne="Measured outcomes" />
            <div>
              <p className="text-base leading-relaxed text-muted-foreground">{article.results}</p>

              <blockquote className="mt-10 border-l border-accent pl-6 sm:pl-8">
                <p className="display text-xl leading-snug text-foreground sm:text-2xl">
                  “{article.testimonial.quote}”
                </p>
                <footer className="mt-5">
                  <p className="text-sm font-medium text-foreground">
                    {article.testimonial.author}
                  </p>
                  <p className="mono-label mt-1 text-muted-foreground">
                    {article.testimonial.role}
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ClosingSection({
  article,
  next,
}: {
  article: CaseStudyArticle;
  next: CaseStudyArticle | undefined;
}) {
  return (
    <section className="bg-secondary py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="07" label="Conclusion" />
          <p className="mt-8 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {article.conclusion}
          </p>
        </Reveal>

        <Reveal delay={0.07} className="mt-14 grid gap-px bg-border lg:grid-cols-2">
          <div className="flex flex-col justify-between gap-8 bg-background p-6 sm:p-9 lg:p-10">
            <div>
              <h2 className="mono-label text-accent">Start Your Project</h2>
              <p className="display mt-6 text-3xl sm:text-4xl">Ready for results like these?</p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Book a free consultation and we&apos;ll map the highest-impact automation
                opportunities in your business.
              </p>
            </div>
            <a
              href={brand.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label group inline-flex items-center gap-2 self-start border border-foreground bg-foreground px-5 py-3 text-primary-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              Book a Free Consultation
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {next ? (
            <div className="flex flex-col justify-between gap-8 bg-background p-6 sm:p-9 lg:p-10">
              <div>
                <h2 className="mono-label text-accent">Next Case Study</h2>
                <p className="display mt-6 text-3xl sm:text-4xl">{next.company}</p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {next.summary}
                </p>
              </div>
              <Link
                to="/case-studies/$slug"
                params={{ slug: next.slug }}
                className="mono-label group inline-flex items-center gap-2 self-start border-b border-border pb-1 text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Read Full Case Study
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
