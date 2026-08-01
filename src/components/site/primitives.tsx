import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Scroll-reveal wrapper: subtle rise + fade, once. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const MotionTag = as === "li" ? motion.li : as === "section" ? motion.section : motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** Numbered editorial section label: "01 / SERVICES" with a hairline rule. */
export function SectionLabel({
  index,
  label,
  invert = false,
  className,
}: {
  index: string;
  label: string;
  invert?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="mono-label text-accent">{index}</span>
      <span
        aria-hidden
        className={cn("h-px w-8 shrink-0", invert ? "bg-ink-hairline" : "bg-hairline")}
      />
      <span className={cn("mono-label", invert ? "text-on-ink-muted" : "text-muted-foreground")}>
        {label}
      </span>
    </div>
  );
}

export function Pill({
  children,
  invert = false,
  className,
}: {
  children: ReactNode;
  invert?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("tag-pill", invert && "tag-pill-invert", className)}>{children}</span>
  );
}

/** Oversized display headline, optional accent second line. */
export function DisplayHeading({
  lineOne,
  lineTwo,
  invert = false,
  size = "lg",
  as: Tag = "h2",
  className,
}: {
  lineOne: string;
  lineTwo?: string;
  invert?: boolean;
  size?: "lg" | "xl";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "display",
        size === "xl"
          ? "text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          : "text-[2.1rem] sm:text-5xl md:text-[3.75rem]",
        invert ? "text-on-ink" : "text-foreground",
        className,
      )}
    >
      {lineOne}
      {lineTwo ? (
        <>
          <br />
          <span className={invert ? "text-on-ink-muted" : "text-muted-foreground"}>{lineTwo}</span>
        </>
      ) : null}
    </Tag>
  );
}

/** Count-up numeral for proof points. Falls back to the literal string. */
export function StatFigure({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  const numeric = match?.[2] ?? "";
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView || !numeric) return;
    const target = parseFloat(numeric);
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / 900, 1);
      setShown(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric]);

  if (!match || !numeric) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const decimals = numeric.includes(".") ? 1 : 0;
  return (
    <span ref={ref} className={className}>
      {match[1]}
      {inView ? shown.toFixed(decimals) : numeric}
      {match[3]}
    </span>
  );
}

/** Splits "85% reduction in support tickets" into figure + remainder. */
export function splitStat(stat: string) {
  const m = stat.match(/^(\S+)\s+(.*)$/);
  return m ? { figure: m[1] ?? stat, rest: m[2] ?? "" } : { figure: stat, rest: "" };
}

