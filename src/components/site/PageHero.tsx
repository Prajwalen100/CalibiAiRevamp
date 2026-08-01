import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Pill } from "./primitives";

export function PageHero({
  eyebrow,
  lineOne,
  lineTwo,
  sub,
  chips,
  aside,
}: {
  eyebrow: string;
  lineOne: string;
  lineTwo: string;
  sub: string;
  chips?: string[];
  aside?: ReactNode;
}) {
  return (
    <section className="bg-ink pb-16 pt-32 text-on-ink sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-48">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mono-label flex items-center gap-4 text-accent"
        >
          {eyebrow}
          <span aria-hidden className="h-px w-16 bg-ink-hairline" />
        </motion.p>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            className="display text-[2.5rem] leading-[0.94] sm:text-6xl lg:text-[5rem]"
          >
            {lineOne}
            <span className="block text-on-ink-muted">{lineTwo}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="min-w-0"
          >
            <span aria-hidden className="mb-6 block h-px w-full bg-ink-hairline" />
            <p className="max-w-xl text-base leading-relaxed text-on-ink-muted sm:text-lg">{sub}</p>
            {chips?.length ? (
              <div className="mt-7 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <Pill key={c} invert>
                    {c}
                  </Pill>
                ))}
              </div>
            ) : null}
            {aside}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
