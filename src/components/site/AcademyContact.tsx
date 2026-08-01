import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { academyPage, brand } from "@/content/site";
import { Pill, Reveal, SectionLabel } from "./primitives";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkodlvzw";

const f = academyPage.contact.fields;

const fieldClass =
  "w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mono-label text-muted-foreground">{label}</span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}

export function AcademyContact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="academy-contact" className="bg-background py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="05" label={academyPage.contact.eyebrow} />
        </Reveal>

        <div className="mt-8 grid gap-px border border-border bg-border lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="bg-secondary p-6 sm:p-10 lg:p-14">
            <h2 className="display text-3xl sm:text-4xl lg:text-[3.25rem]">
              {academyPage.contact.headingA}
              <span className="block text-muted-foreground">{academyPage.contact.headingB}</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {academyPage.contact.sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {academyPage.contact.chips.map((c) => (
                <Pill key={c}>{c}</Pill>
              ))}
            </div>
            <dl className="mt-12 space-y-6 border-t border-border pt-8">
              <div>
                <dt className="mono-label text-muted-foreground">
                  {academyPage.contact.emailLabel}
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${brand.email}`}
                    className="flex items-center gap-2.5 text-sm transition-colors hover:text-accent"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-accent" />
                    <span className="min-w-0 break-all">{brand.email}</span>
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mono-label text-muted-foreground">
                  {academyPage.contact.officeLabel}
                </dt>
                <dd className="mt-2 flex items-start gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="min-w-0">{brand.address}</span>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.08} className="bg-card p-6 sm:p-10 lg:p-14">
            <form
              className="grid gap-7 sm:grid-cols-2"
              action={FORMSPREE_ENDPOINT}
              method="POST"
              onSubmit={async (e) => {
                e.preventDefault();
                setSending(true);

                const form = e.currentTarget;
                const formData = new FormData(form);

                try {
                  const response = await fetch(FORMSPREE_ENDPOINT, {
                    method: "POST",
                    body: formData,
                    headers: {
                      Accept: "application/json",
                    },
                  });

                  if (response.ok) {
                    form.reset();
                    toast.success("Enquiry Sent!", {
                      description: "Thank you! We'll get back to you soon.",
                    });
                  } else {
                    const data = await response.json();
                    throw new Error(data.error || "Something went wrong");
                  }
                } catch (error) {
                  console.error("Form submission error:", error);
                  toast.error("Failed to send enquiry", {
                    description: "Please try again or email us directly at sales@calibiai.com",
                  });
                } finally {
                  setSending(false);
                }
              }}
            >
              <Field label={f.name}>
                <input required name="name" autoComplete="name" className={fieldClass} />
              </Field>
              <Field label={f.email}>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className={fieldClass}
                />
              </Field>
              <Field label={f.phone}>
                <input name="phone" autoComplete="tel" className={fieldClass} />
              </Field>
              <Field label={f.org}>
                <input name="organization" autoComplete="organization" className={fieldClass} />
              </Field>
              <Field label={f.partnershipType}>
                <select required name="partnershipType" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    {f.partnershipPlaceholder}
                  </option>
                  {f.partnershipOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={f.participants}>
                <input name="participants" inputMode="numeric" className={fieldClass} />
              </Field>
              <div className="sm:col-span-2">
                <Field label={f.message}>
                  <textarea name="message" rows={4} className={`${fieldClass} resize-none`} />
                </Field>
              </div>

              {/* Hidden fields for Formspree */}
              <input type="hidden" name="_subject" value="New Partnership Enquiry from Calibi AI Website" />
              <input type="hidden" name="_replyto" value={brand.email} />

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="mono-label group inline-flex w-full items-center justify-between gap-3 bg-foreground px-6 py-4 text-primary-foreground transition-colors hover:bg-accent disabled:opacity-60 sm:w-auto sm:justify-start"
                >
                  {academyPage.contact.submit}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
                <p className="mt-4 text-sm text-muted-foreground">{academyPage.contact.helper}</p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
