import { createFileRoute } from "@tanstack/react-router";
import { LegalDocument } from "@/components/site/LegalDocument";
import { legalDocuments } from "@/content/legal";

const doc = legalDocuments.terms;
const siteUrl = "https://calibiai.com";
const url = `${siteUrl}/${doc.path}`;

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `${doc.title} | Calibi AI` },
      { name: "description", content: doc.description },
      { property: "og:title", content: `${doc.title} | Calibi AI` },
      { property: "og:description", content: doc.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${doc.title} | Calibi AI` },
      { name: "twitter:description", content: doc.description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${doc.title} — Calibi AI`,
          url,
          description: doc.description,
          isPartOf: { "@type": "WebSite", name: "Calibi AI", url: siteUrl },
          lastReviewed: doc.lastUpdated,
          inLanguage: "en",
        }),
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return <LegalDocument doc={doc} />;
}
