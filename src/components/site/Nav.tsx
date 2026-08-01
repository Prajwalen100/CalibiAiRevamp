import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { brand, nav } from "@/content/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 transition-colors duration-500 sm:px-8 lg:px-12",
          scrolled ? "border-b border-border" : "border-b border-transparent",
        )}
      >
        <Link to="/" className="flex min-w-0 items-baseline gap-2.5" aria-label="Calibi AI home">
          <span
            className={cn(
              "display truncate text-xl leading-none transition-colors duration-500",
              scrolled ? "text-foreground" : "text-on-ink",
            )}
          >
            {brand.name}
          </span>
          <span className="mono-label hidden text-accent sm:inline">AI Automation</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "mono-label relative py-1 transition-colors duration-300",
                  scrolled
                    ? active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                    : active
                      ? "text-on-ink"
                      : "text-on-ink-muted hover:text-on-ink",
                )}
              >
                {item.label}
                {active ? (
                  <span aria-hidden className="absolute -bottom-0.5 left-0 h-full w-full border-b border-accent" />
                ) : null}
              </Link>
            );
          })}
          <a
            href={brand.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mono-label group inline-flex items-center gap-2 border px-4 py-2.5 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground",
              scrolled
                ? "border-foreground bg-foreground text-primary-foreground"
                : "border-ink-hairline bg-transparent text-on-ink",
            )}
          >
            Book a Free Consultation
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </nav>



        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-border lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open ? (
        <div className="border-b border-border bg-background px-5 pb-7 pt-2 sm:px-8 lg:hidden">
          <nav className="flex flex-col">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-baseline justify-between border-b border-border py-4"
              >
                <span className="display text-2xl">{item.label}</span>
                <span className="mono-label text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </nav>
          <a
            href={brand.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label mt-6 flex items-center justify-between bg-foreground px-4 py-3.5 text-primary-foreground"
          >
            Book a Free Consultation
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      ) : null}
    </header>
  );
}
