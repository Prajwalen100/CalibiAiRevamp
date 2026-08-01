import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero.webp";
import { brand, hero } from "@/content/site";
import { Pill } from "./primitives";
import { TrustedMarquee } from "./TrustedMarquee";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "14%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, reduced ? 1 : 0.35]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ink pb-14 pt-28 text-on-ink sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44"
    >
      <motion.img
        src={heroImg}
        alt="Structural lattice of a contemporary glass building, viewed from below"
        style={{ y: imageY }}
        className="drift-slow pointer-events-none absolute inset-0 h-[115%] w-full object-cover opacity-[0.22]"
        fetchPriority="high"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.175_0.012_60/0.55)_0%,oklch(0.175_0.012_60/0.9)_70%,var(--ink)_100%)]"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12"
      >
        <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Pill invert>Pune, India</Pill>
              <Pill invert>{brand.tagline}</Pill>
            </motion.div>

            <h1 className="display mt-8 text-[2.6rem] leading-[0.92] text-on-ink sm:text-6xl md:text-7xl lg:text-[5.75rem]">
              {hero.h1a.split(" ").map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  className="inline-block pr-[0.24em]"
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.06 * i, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                className="block text-on-ink-muted"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
              >
                {hero.h1b}
              </motion.span>
            </h1>
          </div>

          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <span aria-hidden className="mb-6 block h-px w-full bg-ink-hairline" />
            <p className="max-w-xl text-base leading-relaxed text-on-ink-muted sm:text-lg">
              {hero.sub}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={brand.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="mono-label group inline-flex items-center justify-between gap-3 bg-accent px-5 py-4 text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:justify-start"
              >
                {hero.primaryCta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#case-studies"
                className="mono-label group inline-flex items-center justify-between gap-3 border border-ink-hairline px-5 py-4 text-on-ink transition-colors hover:border-on-ink sm:justify-start"
              >
                {hero.secondaryCta}
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-6 border-t border-ink-hairline pt-6 sm:mt-24 sm:gap-10"
        >
          <span className="mono-label shrink-0 text-on-ink-muted">{hero.trustLabel}</span>
          <TrustedMarquee items={hero.clients} />
        </motion.div>
      </motion.div>
    </section>
  );
}
