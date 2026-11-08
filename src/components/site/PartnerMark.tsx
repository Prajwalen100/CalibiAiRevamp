import { Handshake } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 0.61, 0.36, 1] as const;

/** Container that staggers its letters in. */
const phrase: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.028, delayChildren: 0.12 } },
};

/** One glyph: lifts up out of a soft blur, settles with no bounce. */
const glyph: Variants = {
  hidden: { opacity: 0, y: "0.45em", filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE },
  },
};

/** The handshake: leans in, meets in the middle, then holds. */
const shake: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -18 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: [-18, 6, -3, 0],
    transition: {
      opacity: { duration: 0.3, ease: EASE },
      scale: { type: "spring", stiffness: 420, damping: 18, mass: 0.6 },
      rotate: { duration: 0.75, ease: EASE, times: [0, 0.45, 0.72, 1] },
    },
  },
};

function Letters({ text, className }: { text: string; className?: string }) {
  return (
    <span className={cn("inline-flex", className)} aria-hidden>
      {text.split("").map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          variants={glyph}
          className="inline-block will-change-transform"
          {...(ch === " " ? { style: { width: "0.42em" } } : {})}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

/**
 * Nav lockup: the constant "Calibi AI (handshake) MindLyft AI" partnership
 * credit, animated in once on mount.
 */
export function NavPartnerMark({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <span className={cn("mono-label inline-flex items-center gap-1.5 text-accent", className)}>
        <Handshake className="h-3.5 w-3.5" aria-hidden />
        MindLyft AI
      </span>
    );
  }

  return (
    <motion.span
      variants={phrase}
      initial="hidden"
      animate="show"
      className={cn(
        "mono-label inline-flex items-center gap-1.5 whitespace-nowrap text-accent",
        className,
      )}
    >
      <span className="sr-only">Calibi AI in partnership with MindLyft AI</span>
      <motion.span variants={shake} className="inline-flex origin-bottom">
        <Handshake className="h-3.5 w-3.5" aria-hidden />
      </motion.span>
      <span className="relative inline-flex">
        <Letters text="MindLyft AI" />
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
          className="absolute -bottom-1 left-0 h-px w-full origin-left bg-accent/60"
        />
      </span>
    </motion.span>
  );
}

/**
 * Footer credit: "Powered by (handshake) MindLyft AI", revealed on scroll
 * with the same letter cadence plus a slow shine across the name.
 */
export function FooterPartnerMark({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <span
        className={cn("mono-label inline-flex items-center gap-2 text-on-ink-muted", className)}
      >
        Powered by
        <Handshake className="h-3.5 w-3.5 text-accent" aria-hidden />
        <span className="text-on-ink">MindLyft AI</span>
      </span>
    );
  }

  return (
    <motion.span
      variants={phrase}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={cn("mono-label group inline-flex items-center gap-2 text-on-ink-muted", className)}
    >
      <span className="sr-only">Powered by MindLyft AI</span>
      <Letters text="Powered by" />
      <motion.span variants={shake} className="inline-flex origin-bottom text-accent">
        <Handshake className="h-4 w-4" aria-hidden />
      </motion.span>
      <span className="relative inline-flex overflow-hidden text-on-ink">
        <Letters text="MindLyft AI" />
        <motion.span
          aria-hidden
          initial={{ x: "-130%" }}
          whileInView={{ x: "130%" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: EASE, delay: 0.75 }}
          className="pointer-events-none absolute inset-y-0 w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-accent/35 to-transparent"
        />
      </span>
    </motion.span>
  );
}
