/**
 * Structured content for Calibi AI's legal documents.
 * Section ids are used as in-page anchors and in the table of contents.
 */

export interface LegalBlock {
  /** Prose paragraphs. */
  paragraphs?: string[];
  /** Sub-heading that groups following bullets or paragraphs. */
  subheading?: string;
  /** Bullet list, optionally titled. */
  bullets?: { title?: string; items: string[] };
}

export interface LegalSection {
  id: string;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  /** URL path without leading slash, e.g. "privacy-policy". */
  path: string;
  /** Short label used in nav, footer, cross-links. */
  label: string;
  /** Document title (h1 / <title>). */
  title: string;
  /** SEO meta description. */
  description: string;
  /** One-line descriptor shown under the title. */
  tagline: string;
  /** Document meta. */
  effectiveDate: string;
  lastUpdated: string;
  version: string;
  owner: string;
  /** Executive summary shown at the top of the page. */
  summary: string;
  sections: LegalSection[];
}

const privacy: LegalDocument = {
  path: "privacy-policy",
  label: "Privacy Policy",
  title: "Privacy Policy",
  description:
    "How Calibi AI collects, uses, shares, and protects personal information across its website, AI products, consulting engagements, and academy programs.",
  tagline: "How we collect, use, and protect your personal information.",
  effectiveDate: "September 14, 2026",
  lastUpdated: "September 14, 2026",
  version: "1.0",
  owner: "Calibi AI — Data Protection Officer",
  summary:
    "This Privacy Policy explains, in plain language, what personal information Calibi AI collects, why we collect it, how we keep it secure, and the choices and rights you have over it. It applies to our website, applications, AI products, consulting services, and the Calibi AI Academy.",
  sections: [
    {
      id: "introduction",
      title: "Introduction & Scope",
      blocks: [
        {
          paragraphs: [
            "Calibi AI (\u201cCalibi AI\u201d, \u201cwe\u201d, \u201cus\u201d, or \u201cour\u201d) is an artificial-intelligence services company headquartered in Hinjewadi Phase 1, Pune, Maharashtra 411057, India. We design, build, and operate AI systems — chatbots, voice agents, multi-agent platforms, business automation, pre-built solutions, and consulting and training programs — for businesses, educational institutions, and corporate teams.",
            "This Privacy Policy describes how we collect, use, disclose, retain, and protect personal information when you visit our website (calibiai.com), use our products, engage our services, or interact with us through any channel (email, phone, calendars, and third-party tools). By accessing or using our services, you acknowledge that you have read and understood this Policy.",
            "We have designed this Policy to be consistent with applicable data-protection laws, including the Digital Personal Data Protection Act, 2023 (DPDP Act) of India and, where applicable, the General Data Protection Regulation (GDPR) of the European Union. Where this Policy is stricter than local law, we follow the stricter standard.",
          ],
        },
      ],
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      blocks: [
        {
          paragraphs: [
            "We collect only the information we reasonably need to provide, secure, and improve our services. The categories below describe what we may collect and how.",
          ],
        },
        {
          bullets: {
            title: "Information you provide directly",
            items: [
              "Identity and contact details — name, business name, email address, phone number, and postal address when you register, subscribe, or contact us.",
              "Professional information — job title, organisation, and company size shared through consultation forms, proposal requests, or academy enrolments.",
              "Content you submit — messages, documents, datasets, specifications, and feedback sent to us during a consultation, engagement, or support request.",
              "Payment information — billing details and transaction references processed through our payment providers (we do not store full card numbers on our servers).",
            ],
          },
        },
        {
          bullets: {
            title: "Information collected automatically",
            items: [
              "Device and connection data — IP address, browser type and version, device identifiers, operating system, and referring pages.",
              "Usage data — pages visited, time spent, features used, and interactions with our website and products, collected through analytics and logging tools.",
              "Communication data — logs of emails, support tickets, and chat transcripts where we use email and messaging services to communicate with you.",
            ],
          },
        },
        {
          bullets: {
            title: "Information used inside our AI products",
            items: [
              "Prompts, queries, and conversation transcripts processed by AI chatbots, voice agents, and multi-agent systems that we build for or with you.",
              "Voice recordings and audio metadata where a service includes voice interaction and where consent is obtained.",
              "Business data connected through integrations (CRM, helpdesk, calendars, document systems) strictly to the extent required to operate the service you have purchased.",
            ],
          },
        },
      ],
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      blocks: [
        {
          paragraphs: [
            "We use personal information for the purposes below. Each purpose is tied to a legitimate need in delivering our services or complying with the law.",
          ],
        },
        {
          bullets: {
            items: [
              "To deliver, operate, and maintain our website, products, and services, including billing, provisioning, and access management.",
              "To respond to enquiries, provide customer support, and process requests made through our channels.",
              "To design, build, test, and improve AI systems for a client engagement, in accordance with the terms of the applicable engagement.",
              "To send service communications, transactional notices, and — only with your consent — marketing communications about our services and the Academy.",
              "To personalise your experience and measure the performance of our website and products.",
              "To detect, prevent, and investigate security incidents, fraud, and misuse, and to comply with legal and regulatory obligations.",
              "To enforce our terms and protect our rights, property, and safety, and that of our clients and teams.",
            ],
          },
        },
      ],
    },
    {
      id: "legal-bases",
      title: "Legal Bases for Processing",
      blocks: [
        {
          paragraphs: [
            "Under the DPDP Act and GDPR, we process personal information only where we have a valid legal basis. Depending on your location and the context, we rely on one or more of the following:",
          ],
        },
        {
          bullets: {
            items: [
              "Consent — where you have given consent, for example to receive marketing communications or to use a product that processes your data.",
              "Performance of a contract — where processing is necessary to provide the services you have requested or contracted.",
              "Legitimate interests — where processing is necessary for our or a third party's legitimate interests, such as security, analytics, and business development, and those interests are not overridden by your rights.",
              "Legal obligation — where we must process information to comply with applicable laws, regulations, or court orders.",
              "Requested public interest task — where processing supports a task carried out in the public interest under applicable law.",
            ],
          },
        },
      ],
    },
    {
      id: "sharing-disclosure",
      title: "How We Share Information",
      blocks: [
        {
          paragraphs: [
            "We do not sell, rent, or trade personal information. We share it only in the limited circumstances below, always under appropriate contractual safeguards such as data-processing agreements.",
          ],
        },
        {
          bullets: {
            title: "Service providers and processors",
            items: [
              "Cloud infrastructure and AI model providers used to host and run our products (for example, compute, storage, and large-language-model APIs).",
              "Business tools — email, calendar scheduling, CRM, analytics, and support platforms used to operate the company.",
              "Payment processors that handle invoices and subscriptions on our behalf.",
            ],
          },
        },
        {
          bullets: {
            title: "Other disclosures",
            items: [
              "Clients and partners — where you engage us in a joint project, information is shared with the client as described in your engagement terms.",
              "Legal and regulatory authorities — where required by law, court order, or a bona fide request from a government authority.",
              "Corporate transactions — in connection with a merger, acquisition, or sale of assets, with prior notice to you where lawful.",
            ],
          },
        },
      ],
    },
    {
      id: "international-transfers",
      title: "International Data Transfers",
      blocks: [
        {
          paragraphs: [
            "We are based in India and use service providers around the world. This means personal information you share with us may be transferred to, and processed in, countries other than yours, including the United States and the European Economic Area.",
            "For such transfers we rely on the safeguards permitted by applicable law — for example, standard contractual clauses under the GDPR, the data-transfer mechanisms available under the DPDP Act, or the recipient's recognised adequacy. We remain accountable for the security of your information whenever and wherever it is processed.",
          ],
        },
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention",
      blocks: [
        {
          paragraphs: [
            "We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, tax, accounting, or audit requirements, resolve disputes, and enforce our agreements.",
            "Retention periods vary by category: contractual and billing records are kept for the duration of the engagement plus the period required by applicable law; website analytics data is retained for a limited rolling window; and marketing consent data is deleted when you opt out. When retention periods expire, we securely delete or anonymise the information in a manner consistent with good practice.",
          ],
        },
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights & Choices",
      blocks: [
        {
          paragraphs: [
            "Depending on your location and the information involved, you may have the following rights. We honour requests promptly and without unreasonable delay.",
          ],
        },
        {
          bullets: {
            items: [
              "Access — request a copy of the personal information we hold about you.",
              "Correction — ask us to correct inaccurate or incomplete information.",
              "Deletion — request erasure of your personal information, subject to our legal obligations to retain certain records.",
              "Withdrawal of consent — withdraw consent at any time where processing is based on consent; this does not affect the lawfulness of processing that took place before withdrawal.",
              "Objection and restriction — object to certain processing (including marketing) or request restriction of use.",
              "Data portability — request your data in a structured, commonly used, machine-readable format.",
              "Grievance redressal — under the DPDP Act, you may lodge a complaint with the Data Protection Board of India; we also provide an internal grievance mechanism via the contact details below.",
            ],
          },
        },
        {
          paragraphs: [
            "To exercise any of these rights, email us at sales@calibiai.com and describe your request. We will verify your identity where appropriate and respond within the timeframes required by applicable law. You may also ask us to limit processing for the purpose of verifying your identity.",
          ],
        },
      ],
    },
    {
      id: "cookies",
      title: "Cookies & Tracking Technologies",
      blocks: [
        {
          paragraphs: [
            "Our website uses cookies and similar technologies (such as local storage and analytics identifiers) to operate the site, remember preferences, and understand how visitors use it so we can improve it.",
          ],
        },
        {
          bullets: {
            items: [
              "Strictly necessary — required for core functions such as security and network management; these cannot be switched off.",
              "Analytics and performance — help us understand traffic patterns and feature usage in aggregated form.",
              "Functional — remember your preferences, such as language or layout choices, to improve your experience.",
              "Marketing — where you have consented, used to deliver relevant messages; you can withdraw consent at any time.",
            ],
          },
        },
        {
          paragraphs: [
            "You can control or delete cookies through your browser settings at any time. Disabling certain cookies may affect the functionality of parts of the site. We do not use third-party advertising trackers on the site.",
          ],
        },
      ],
    },
    {
      id: "security",
      title: "Data Security",
      blocks: [
        {
          paragraphs: [
            "We implement administrative, technical, and physical safeguards designed to protect personal information against unauthorised access, alteration, disclosure, or destruction. These measures evolve as technology and risk change.",
          ],
        },
        {
          bullets: {
            items: [
              "Encryption of data in transit (TLS) and, where appropriate, at rest.",
              "Role-based access controls and the principle of least privilege for employee and contractor access.",
              "Network security, monitoring, and logging to detect and respond to incidents.",
              "Secure development practices and access review for the AI systems and integrations we operate.",
              "Training and confidentiality obligations for all personnel who handle personal information.",
            ],
          },
        },
        {
          paragraphs: [
            "No method of transmission over the internet, or method of electronic storage, is 100% secure. We cannot guarantee absolute security, but we commit to investigating and responding to any suspected breach in line with the next section.",
          ],
        },
      ],
    },
    {
      id: "data-breach",
      title: "Data Breach Notification",
      blocks: [
        {
          paragraphs: [
            "In the unlikely event of a personal-data breach that is likely to result in a risk to your rights and freedoms, we will notify you and the relevant regulator(s) without undue delay, as required by the DPDP Act, GDPR, and other applicable laws.",
            "Any notification will describe, in clear language, the nature of the breach, the categories of information affected, the steps we have taken or plan to take, and what you can do to protect yourself. We will also notify affected individuals where a high risk is involved, unless a specific legal exemption applies.",
          ],
        },
      ],
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      blocks: [
        {
          paragraphs: [
            "Our services are directed to businesses, professionals, and educational institutions and are not intended for children under the age of consent under applicable law (generally 18, and 13 for certain online services in some jurisdictions). We do not knowingly collect personal information from children. If you believe a child has provided us personal information, please contact us and we will take steps to delete it.",
          ],
        },
      ],
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      blocks: [
        {
          paragraphs: [
            "We may update this Privacy Policy from time to time to reflect changes in our practices, services, technology, or legal requirements. The \u201cLast updated\u201d date at the top of this page will always show when it was last revised.",
            "For material changes, we will provide notice through the website and, where appropriate and lawful, by email before the change takes effect. Continued use of our services after a revised policy takes effect constitutes acceptance of the updated terms.",
          ],
        },
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      blocks: [
        {
          paragraphs: [
            "If you have questions, concerns, or requests about this Privacy Policy or our data practices, please contact our Data Protection Officer:",
          ],
        },
        {
          bullets: {
            items: [
              "By email — sales@calibiai.com (subject: \u201cPrivacy enquiry\u201d).",
              "By post — Calibi AI, Hinjewadi Phase 1, Pune, Maharashtra 411057, India.",
            ],
          },
        },
        {
          paragraphs: [
            "We aim to acknowledge requests within 5 business days and resolve them without undue delay. You also have the right to escalate any matter to the Data Protection Board of India or your local data-protection authority.",
          ],
        },
      ],
    },
  ],
};

const terms: LegalDocument = {
  path: "terms",
  label: "Terms & Conditions",
  title: "Terms & Conditions",
  description:
    "The terms governing use of Calibi AI's website, AI products, development, automation, consulting, and training services — including IP, confidentiality, fees, warranties, and liability.",
  tagline: "The terms that govern how you use our website and services.",
  effectiveDate: "September 14, 2026",
  lastUpdated: "September 14, 2026",
  version: "1.0",
  owner: "Calibi AI — Legal",
  summary:
    "These Terms & Conditions (\u201cTerms\u201d) form the agreement between you and Calibi AI when you use our website, subscribe to our products, or engage our development, automation, consulting, and training services. Please read them carefully before proceeding.",
  sections: [
    {
      id: "agreement",
      title: "Agreement & Acceptance",
      blocks: [
        {
          paragraphs: [
            "By accessing calibiai.com, requesting a consultation, signing an engagement letter, or using any Calibi AI product or service (collectively, the \u201cServices\u201d), you agree to be bound by these Terms. If you are acting on behalf of a company or other organisation, you represent that you have authority to bind that organisation, and \u201cyou\u201d refers to that organisation.",
            "Where a signed engagement letter, statement of work, or product agreement supplements or conflicts with these Terms, the more specific document prevails for the subject matter it covers. If you do not agree to these Terms, please discontinue use of the Services.",
          ],
        },
      ],
    },
    {
      id: "our-services",
      title: "Description of Our Services",
      blocks: [
        {
          paragraphs: [
            "Calibi AI provides premium AI and automation services, which may include, among others:",
          ],
        },
        {
          bullets: {
            items: [
              "AI chatbots and conversational agents, including multi-channel and multi-language deployment.",
              "Voice agents and telephony automation, including inbound and outbound workflows.",
              "Multi-agent systems and custom AI development tailored to a client's processes.",
              "Business process automation, RPA, and workflow integration with third-party systems.",
              "Pre-built, ready-to-deploy AI solutions for common business use cases.",
              "AI strategy, architecture, and implementation consulting.",
              "Training and upskilling programs delivered through the Calibi AI Academy for individuals, colleges, and corporate teams.",
            ],
          },
        },
        {
          paragraphs: [
            "The scope, deliverables, timelines, and acceptance criteria for each engagement are set out in the applicable proposal, statement of work, or order form. Where those documents are silent, these Terms apply.",
          ],
        },
      ],
    },
    {
      id: "client-obligations",
      title: "Client Responsibilities",
      blocks: [
        {
          paragraphs: ["To deliver quality work, we rely on you to:"],
        },
        {
          bullets: {
            items: [
              "Provide timely access to the systems, data, credentials, documentation, and personnel we reasonably need, in accordance with your own security policies.",
              "Ensure that the data you provide to us is lawfully obtained and that you have all rights, licences, and consents necessary for us to use it in connection with the Services.",
              "Appoint a single point of contact who can respond to our requests and confirm decisions on your behalf.",
              "Review, test, and accept (or raise written objections to) deliverables within the periods specified in the engagement documents.",
              "Use the Services lawfully, and comply with all applicable laws, including data-protection, employment, consumer-protection, and telecommunications laws where relevant.",
            ],
          },
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      blocks: [
        {
          paragraphs: [
            "Client materials. You retain all rights in the data, content, and materials you provide to us (\u201cClient Materials\u201d). You grant us a limited, non-exclusive licence to use Client Materials solely to perform the Services for you.",
            "Our materials. All pre-existing tools, frameworks, templates, methods, and know-how used in delivering the Services remain the property of Calibi AI (\u201cCalibi Materials\u201d). We grant you a non-exclusive, non-transferable licence to use any deliverables to the extent specified in the engagement documents and to the extent necessary for their intended purpose.",
            "Deliverables. Ownership of custom deliverables is determined by the applicable engagement documents. Unless otherwise agreed in writing, you receive a perpetual, irrevocable licence to use deliverables licensed to you; Calibi AI retains the right to reuse general know-how, techniques, and improvements that are not confidential Client Materials.",
            "Third-party components. Deliverables may include open-source or third-party components subject to their own licences. We will make reasonable efforts to identify significant third-party components in deliverables; you are responsible for complying with those licences in your use of the deliverables.",
          ],
        },
      ],
    },
    {
      id: "confidentiality",
      title: "Confidentiality",
      blocks: [
        {
          paragraphs: [
            "Each party may be given access to the other's confidential and proprietary information, including business plans, pricing, technical documentation, prompts and configurations, and customer data (\u201cConfidential Information\u201d). The receiving party will use Confidential Information only to perform its obligations, protect it with at least the same degree of care it uses for its own confidential information (and no less than reasonable care), and not disclose it to third parties without prior written consent.",
            "Confidential Information excludes information that is (a) publicly available through no fault of the receiving party, (b) already known to the receiving party, (c) independently developed without use of the other party's Confidential Information, or (d) lawfully received from a third party without restriction. Disclosure is also permitted where required by law or court order, provided the disclosing party is notified where lawful so it may seek protection.",
            "These obligations survive termination for a period of five (5) years, except for trade secrets, which are protected for as long as they remain trade secrets under applicable law.",
          ],
        },
      ],
    },
    {
      id: "fees-payment",
      title: "Fees, Invoicing & Payment",
      blocks: [
        {
          paragraphs: [
            "The fees for the Services are set out in the applicable proposal, engagement letter, or order form. Fees quoted are exclusive of applicable taxes (GST and similar), which are additional unless expressly stated otherwise. Subscription products are billed in advance on the cycle stated at purchase and renew automatically until cancelled.",
          ],
        },
        {
          bullets: {
            items: [
              "Invoices are due within 14 days of the invoice date unless a different period is stated in the engagement documents.",
              "Late amounts may accrue interest at 1.5% per month (or the maximum permitted by law, whichever is lower) from the due date until paid.",
              "Calibi AI may suspend work or Services for substantially overdue amounts after 7 days' written notice, without liability for any resulting delay.",
              "Costs expressly agreed as reimbursable (e.g., third-party licences and infrastructure) are billed at cost plus any agreed markup.",
            ],
          },
        },
      ],
    },
    {
      id: "testing-acceptance",
      title: "Testing & Acceptance of Deliverables",
      blocks: [
        {
          paragraphs: [
            "When a deliverable is submitted, you will have the acceptance period stated in the engagement documents (default: 10 business days) to test it and notify us in writing of any non-conformity, describing the defect in reasonable detail. Deliverables not objected to within the acceptance period are deemed accepted.",
            "We will correct defects that materially fail to conform to the agreed specifications and resubmit them for a short further review (default: 5 business days). Our obligation under this section is limited to one (1) correction cycle per deliverable, after which you may, at your option, (a) accept the deliverable with a pro-rata fee reduction, or (b) terminate the affected work item and receive a refund of fees paid for unaccepted work.",
          ],
        },
      ],
    },
    {
      id: "warranties-disclaimers",
      title: "Warranties & Disclaimers",
      blocks: [
        {
          paragraphs: [
            "We warrant that the Services will be performed in a professional and workmanlike manner consistent with industry standards, that deliverables will conform materially to their agreed specifications for the warranty period (default: 90 days after acceptance), and that we will have the necessary rights and licences to perform the Services.",
          ],
        },
        {
          paragraphs: [
            "Except as expressly stated, the Services, deliverables, and AI outputs are provided \u201cas is\u201d and \u201cas available\u201d. AI systems can produce outputs that are inaccurate, incomplete, or inconsistent, and we do not warrant that outputs will be error-free, non-infringing, or fit for a particular purpose. You are responsible for reviewing AI-generated outputs and for making your own decisions, and for obtaining your own professional advice where required. To the maximum extent permitted by law, we disclaim all other warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.",
          ],
        },
      ],
    },
    {
      id: "indemnification",
      title: "Indemnification",
      blocks: [
        {
          paragraphs: [
            "You agree to defend, indemnify, and hold harmless Calibi AI and its officers, employees, and contractors from and against third-party claims, damages, and reasonable costs (including legal fees) to the extent arising from: (a) your Client Materials or instructions; (b) your use of the Services or deliverables in breach of these Terms or applicable law; or (c) your products, services, or communications other than our deliverables.",
            "Calibi AI agrees to indemnify you against third-party claims that a deliverable, as delivered and used within its intended purpose, infringes a patent, copyright, or trade-mark, provided you promptly notify us, give us sole control of the defence, and permit us to procure a licence, modify, or replace the infringing part where practicable.",
          ],
        },
      ],
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      blocks: [
        {
          paragraphs: [
            "To the maximum extent permitted by law, neither party will be liable for any indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, data, or goodwill, even if advised of the possibility.",
            "Each party's total aggregate liability arising out of or relating to the Services (whether in contract, tort, or otherwise) is capped at the fees paid or payable by you to Calibi AI in the twelve (12) months preceding the event giving rise to the claim. The caps do not apply to your payment obligations, your indemnification obligations, a party's breach of confidentiality, or liability that cannot be limited under applicable law.",
          ],
        },
      ],
    },
    {
      id: "termination",
      title: "Termination & Suspension",
      blocks: [
        {
          paragraphs: [
            "Either party may terminate an engagement on 30 days' written notice, earlier in the case of a material breach that remains uncured for 14 days after written notice, or for insolvency. On termination, you will pay for all Services properly performed through the termination date, and we will deliver all work-in-progress completed to that date, subject to payment.",
            "We may suspend or terminate Services immediately where continued performance would violate the law, where a material security risk exists, or where payments are substantially overdue after notice. Our termination rights are without prejudice to any other remedy available at law.",
            "Sections that by their nature should survive — including ownership, confidentiality, warranties, indemnification, limitation of liability, and dispute resolution — survive termination or expiry of the engagement.",
          ],
        },
      ],
    },
    {
      id: "independent-contractor",
      title: "Independent Contractor",
      blocks: [
        {
          paragraphs: [
            "Calibi AI is an independent contractor. Nothing in these Terms or in the engagement creates an agency, partnership, joint-venture, or employment relationship. Neither party has authority to bind the other, and no employee or contractor of one party is an employee or agent of the other.",
          ],
        },
      ],
    },
    {
      id: "force-majeure",
      title: "Force Majeure",
      blocks: [
        {
          paragraphs: [
            "Neither party is liable for delay or failure to perform (other than payment obligations) caused by events beyond its reasonable control, including natural disasters, war, terrorism, pandemics, governmental action, power or telecommunications failures, and failures of third-party infrastructure or model providers. The affected party will use reasonable efforts to mitigate the impact and resume performance as soon as practicable.",
          ],
        },
      ],
    },
    {
      id: "disputes",
      title: "Governing Law & Dispute Resolution",
      blocks: [
        {
          paragraphs: [
            "These Terms and any engagement are governed by the laws of India, without regard to conflict-of-laws rules. The parties will first attempt to resolve any dispute informally through good-faith negotiation between senior representatives for 30 days.",
            "If the dispute is not resolved, it will be referred to a sole arbitrator appointed in accordance with the Arbitration and Conciliation Act, 1996, with the seat of arbitration in Pune, Maharashtra, and the proceedings conducted in English. Each party bears its own costs unless the arbitrator directs otherwise. Nothing prevents either party from seeking urgent injunctive relief in a court of competent jurisdiction to protect its intellectual property or confidential information.",
          ],
        },
      ],
    },
    {
      id: "general",
      title: "General Provisions",
      blocks: [
        {
          bullets: {
            items: [
              "Entire agreement — these Terms, together with any signed engagement documents, constitute the entire agreement on their subject matter and supersede prior discussions.",
              "Amendments — material changes must be made in writing and signed by both parties; site-notice changes to these online Terms are permitted for website use and do not override signed engagement terms.",
              "Assignment — you may not assign these Terms without our written consent; we may assign them to an affiliate or successor in connection with a corporate transaction.",
              "Severability — if any provision is held invalid or unenforceable, the remaining provisions continue in full force.",
              "Waiver — a failure to enforce any provision is not a waiver of future enforcement.",
              "Notices — notices under these Terms are valid when delivered by email (with confirmation of receipt) or by courier to the address or email specified in the engagement documents or the footer of our website.",
            ],
          },
        },
      ],
    },
    {
      id: "contact",
      title: "Contact",
      blocks: [
        {
          paragraphs: ["Questions about these Terms can be directed to:"],
        },
        {
          bullets: {
            items: [
              "By email — sales@calibiai.com (subject: \u201cLegal enquiry\u201d).",
              "By post — Calibi AI, Hinjewadi Phase 1, Pune, Maharashtra 411057, India.",
            ],
          },
        },
      ],
    },
  ],
};

export const legalDocuments: Record<"privacy" | "terms", LegalDocument> = {
  privacy,
  terms,
};
