import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { brand, footerNav } from "@/content/site";

function FooterLink({
  to,
  hash,
  label,
}: {
  to: string;
  hash?: string | undefined;
  label: string;
}) {
  return (
    <li>
      <Link
        to={to}
        {...(hash ? { hash } : {})}

        className="group inline-flex items-center gap-1.5 text-sm text-on-ink-muted transition-colors hover:text-on-ink"
      >
        <span
          aria-hidden
          className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4"
        />
        {label}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-on-ink">
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="min-w-0">
            <div className="display text-3xl sm:text-4xl">{brand.name}</div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-on-ink-muted">
              {brand.footerDescription}
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-3 text-sm text-on-ink transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span className="min-w-0 break-all">{brand.email}</span>
              </a>
              <p className="flex items-start gap-3 text-sm text-on-ink-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="min-w-0">{brand.address}</span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="mono-label text-on-ink-muted">{footerNav.services.heading}</h2>
            <ul className="mt-6 space-y-3.5">
              {footerNav.services.links.map((l) => (
                <FooterLink key={l.label} to={l.to} hash={l.hash} label={l.label} />
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mono-label text-on-ink-muted">{footerNav.company.heading}</h2>
            <ul className="mt-6 space-y-3.5">
              {footerNav.company.links.map((l) => (
                <FooterLink key={l.label} to={l.to} hash={l.hash} label={l.label} />
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-ink-hairline pt-6">
          <p className="mono-label min-w-0 text-on-ink-muted">{brand.copyright}</p>
          <a
            href={brand.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label group inline-flex shrink-0 items-center gap-2 text-on-ink transition-colors hover:text-accent"
          >
            {brand.tagline}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
