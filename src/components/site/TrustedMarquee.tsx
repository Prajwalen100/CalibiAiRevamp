import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Infinite, seam-free logo/partner marquee.
 *
 * Future-proof by design: pass any number of items — the track duplicates the
 * list and derives its duration from the item count, so adding organisations
 * later needs no other change. Pauses on hover/focus and falls back to a static
 * wrapped row when the visitor prefers reduced motion.
 */
export function TrustedMarquee({
  items,
  className,
  secondsPerItem = 4.5,
}: {
  items: string[];
  className?: string;
  secondsPerItem?: number;
}) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!items.length) return null;

  const Item = ({ label, ariaHidden }: { label: string; ariaHidden?: boolean }) => (
    <span
      aria-hidden={ariaHidden}
      className="display shrink-0 text-lg text-on-ink/70 transition-colors duration-300 hover:text-on-ink sm:text-2xl"
    >
      {label}
    </span>
  );

  if (reduced) {
    return (
      <div className={cn("flex min-w-0 flex-wrap items-center gap-x-8 gap-y-3 sm:gap-x-14", className)}>
        {items.map((c) => (
          <Item key={c} label={c} />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("marquee-mask group min-w-0 overflow-hidden", className)}>
      <div
        className="marquee-track flex w-max items-center gap-x-8 sm:gap-x-14"
        style={{ ["--marquee-duration" as string]: `${items.length * secondsPerItem}s` }}
      >
        {[0, 1].map((copy) =>
          items.map((c) => (
            <Item key={`${copy}-${c}`} label={c} ariaHidden={copy === 1 || undefined} />
          )),
        )}
      </div>
    </div>
  );
}