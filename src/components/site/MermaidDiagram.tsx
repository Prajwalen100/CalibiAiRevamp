import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Renders a Mermaid definition to inline SVG, themed to the editorial palette.
 *
 * Mermaid is ~1MB and touches `document`, so it is imported dynamically inside
 * an effect: it never enters the SSR bundle and only loads once a diagram is
 * actually on screen.
 */

/**
 * Palette resolved from the oklch design tokens in styles.css.
 * Mermaid's theme engine needs concrete hex values — it cannot parse
 * `var(--token)` or oklch(), so these are the sRGB equivalents.
 */
const PALETTE = {
  paper: "#f8f5f1",
  paperDeep: "#f0ece5",
  card: "#fdfbf7",
  ink: "#150f0b",
  mutedFg: "#605a54",
  accent: "#db4a05",
  accentFg: "#fcfaf6",
  hairline: "#d8d3cc",
};

let mermaidReady: Promise<typeof import("mermaid").default> | null = null;

async function loadMermaid() {
  if (!mermaidReady) {
    mermaidReady = import("mermaid").then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "base",
        fontFamily: '"Satoshi", "Inter", ui-sans-serif, system-ui, sans-serif',
        themeVariables: {
          background: PALETTE.card,
          primaryColor: PALETTE.paperDeep,
          primaryTextColor: PALETTE.ink,
          primaryBorderColor: PALETTE.hairline,
          secondaryColor: PALETTE.paper,
          secondaryTextColor: PALETTE.ink,
          secondaryBorderColor: PALETTE.hairline,
          tertiaryColor: PALETTE.card,
          tertiaryTextColor: PALETTE.ink,
          tertiaryBorderColor: PALETTE.hairline,
          lineColor: PALETTE.mutedFg,
          textColor: PALETTE.ink,
          mainBkg: PALETTE.paperDeep,
          nodeBorder: PALETTE.hairline,
          nodeTextColor: PALETTE.ink,
          clusterBkg: PALETTE.paper,
          clusterBorder: PALETTE.hairline,
          edgeLabelBackground: PALETTE.card,
          defaultLinkColor: PALETTE.mutedFg,
          titleColor: PALETTE.ink,
          fontSize: "14px",
        },
        flowchart: {
          curve: "basis",
          padding: 16,
          nodeSpacing: 44,
          rankSpacing: 52,
          useMaxWidth: true,
          htmlLabels: true,
        },
      });
      return mermaid;
    });
  }
  return mermaidReady;
}

export function MermaidDiagram({
  chart,
  caption,
  className,
}: {
  chart: string;
  caption?: string;
  className?: string;
}) {
  const reactId = useId();
  // Mermaid uses the id as a DOM/CSS selector, so strip React's ":r0:" colons.
  const domId = `mermaid-${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const [svg, setSvg] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      try {
        const mermaid = await loadMermaid();
        const { svg: rendered } = await mermaid.render(domId, chart);
        if (!cancelled) setSvg(rendered);
      } catch (error) {
        console.error("Mermaid failed to render diagram", error);
        if (!cancelled) setFailed(true);
      }
    })();

    return () => {
      cancelled = true;
      // mermaid.render leaves a temporary measuring node behind on error.
      document.getElementById(`d${domId}`)?.remove();
    };
  }, [chart, domId]);

  // Never hide the content: if Mermaid fails, show the readable source.
  if (failed) {
    return (
      <figure className={cn("border border-border bg-card", className)}>
        <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-muted-foreground">
          {chart}
        </pre>
        {caption ? (
          <figcaption className="mono-label border-t border-border px-6 py-4 text-muted-foreground">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={cn("border border-border bg-card", className)}>
      <div className="overflow-x-auto p-5 sm:p-8">
        {svg ? (
          <div
            ref={containerRef}
            className="mermaid-diagram flex min-w-fit justify-center"
            // Mermaid sanitizes its own output under securityLevel: "strict".
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ) : (
          <div
            className="flex min-h-[220px] items-center justify-center"
            role="status"
            aria-live="polite"
          >
            <span className="mono-label text-muted-foreground">Rendering diagram…</span>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="mono-label border-t border-border px-6 py-4 text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
