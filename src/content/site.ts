/**
 * Single source of truth for all Calibi AI copy.
 * Wording is preserved verbatim from the content inventory (memory.txt).
 */

import chatbotsImg from "@/assets/chatbots.webp";
import voiceImg from "@/assets/voice.webp";
import multiagentImg from "@/assets/multiagent.webp";
import bizautoImg from "@/assets/bizauto.webp";
import contentImg from "@/assets/content.webp";
import prebuiltImg from "@/assets/prebuilt.webp";
import consultImg from "@/assets/consult.webp";
import vrampImg from "@/assets/vramp.webp";
import devionxImg from "@/assets/devionx.webp";
import dermaImg from "@/assets/derma.webp";

export const brand = {
  name: "Calibi AI",
  tagline: "Premium AI Automation Solutions",
  email: "sales@calibiai.com",
  address: "Hinjewadi Phase 1, Pune, Maharashtra 411057",
  copyright: "© 2026 Calibi AI. All rights reserved.",
  footerDescription:
    "Premium AI automation, development, consulting, and training for businesses, colleges, and corporate teams.",
  calendly: "https://calendly.com/prajwalen100/30min",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Detailed Services", to: "/services" },
  { label: "Our Story", to: "/story" },
  { label: "Calibi AI Academy", to: "/academy" },
];

export const hero = {
  h1a: "Transform Your Business",
  h1b: "with AI Automation",
  sub: "Enterprise-grade AI solutions that automate workflows, enhance customer experiences, and drive measurable results. Join 50+ companies scaling with intelligent automation.",
  primaryCta: "Book a Free Consultation",
  secondaryCta: "View Case Studies",
  trustLabel: "TRUSTED BY",
  clients: ["Clevrr AI", "DevionX", "Colega AI"],
};

export type Service = {
  name: string;
  description: string;
  features: string[];
  stat: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    name: "AI Chatbots",
    description:
      "Intelligent conversational agents that understand context and provide human-like interactions",
    features: [
      "Natural language processing",
      "Multi-language support",
      "24/7 availability",
      "CRM integration",
    ],
    stat: "85% reduction in support tickets",
    image: chatbotsImg,
    alt: "Customer support specialist wearing a headset at a desk",
  },
  {
    name: "Voice Agents",
    description: "Advanced voice AI for phone systems, customer service, and automated calling",
    features: [
      "Real-time speech recognition",
      "Emotion detection",
      "Call routing automation",
      "Voice analytics",
    ],
    stat: "70% faster call resolution",
    image: voiceImg,
    alt: "Call centre agent speaking on a headset in an open-plan office",
  },
  {
    name: "Multi-Agent Systems",
    description: "Coordinated AI agents working together to solve complex business problems",
    features: [
      "Task orchestration",
      "Agent collaboration",
      "Workflow automation",
      "Decision intelligence",
    ],
    stat: "3x productivity increase",
    image: multiagentImg,
    alt: "Rows of servers inside a data centre",
  },
  {
    name: "Business Automation",
    description: "End-to-end process automation for operations, sales, and customer success",
    features: ["Process mining", "RPA integration", "Data synchronization", "Custom workflows"],
    stat: "60% time savings",
    image: bizautoImg,
    alt: "Warehouse operations team coordinating logistics",
  },
  {
    name: "Content Automation",
    description: "AI-powered content generation, optimization, and distribution at scale",
    features: [
      "SEO optimization",
      "Multi-format content",
      "Brand voice training",
      "Content scheduling",
    ],
    stat: "10x content output",
    image: contentImg,
    alt: "Content production workspace with laptop and notes",
  },
  {
    name: "Pre-Built Solutions",
    description: "Ready-to-deploy AI solutions for common business use cases",
    features: ["Quick deployment", "Customizable templates", "Industry-specific", "Plug-and-play"],
    stat: "Deploy in 48 hours",
    image: prebuiltImg,
    alt: "Abstract modular technology structure",
  },
  {
    name: "AI Consultation",
    description: "Strategic guidance on AI adoption, implementation, and optimization",
    features: [
      "AI readiness assessment",
      "ROI analysis",
      "Implementation roadmap",
      "Team training",
    ],
    stat: "200% average ROI",
    image: consultImg,
    alt: "Business strategy session around a meeting table",
  },
];

export const servicesSection = {
  heading: "AI Solutions for Every Need",
  sub: "Comprehensive AI automation services designed to transform your business operations",
};

export type CaseStudy = {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  quote: string;
  author: string;
  /** Slug of the full article at /case-studies/$slug. */
  slug: string;
  link: string;
  image: string;
  alt: string;
  metrics: { label: string; before: string; after: string }[];
};

export const caseStudiesSection = {
  heading: "Proven Results Across Industries",
  sub: "Real transformations from companies that trusted us with their AI automation journey",
  cta: "Read Full Case Study",
};

export const caseStudies: CaseStudy[] = [
  {
    company: "VRAMP Automations",
    industry: "Manufacturing",
    challenge: "Manual customer support overwhelming team",
    solution: "AI Chatbot + Voice Agent Implementation",
    quote:
      "Calibi AI transformed our customer support. We're now handling 6x more customers with the same team size.",
    author: "— Swapnil Gulhane, Founder",
    slug: "vramp-automations",
    link: brand.calendly,
    image: vrampImg,
    alt: "Automated manufacturing line inside a factory",
    metrics: [
      { label: "response Time", before: "4 hours", after: "30 seconds" },
      { label: "satisfaction", before: "72%", after: "94%" },
      { label: "tickets", before: "500/day", after: "75/day" },
    ],
  },
  {
    company: "DevionX Technologies",
    industry: "Enterprise solutions",
    challenge:
      "DevionX faced bottlenecks in their development pipeline, with manual processes slowing down project delivery and increasing operational costs.",
    solution:
      "Implemented Small Language Models for code generation + automated workflow orchestration + optimized CI/CD pipelines.",
    quote:
      "Calibi expertise in Small Language Models and automation helped us deliver next-generation I solutions with significantly higher efficiency and lower operational costs. Their strategic approach transformed our workflow capabilities.",
    author: "— Ajay Bade, CEO",
    slug: "devionx-technologies",
    link: brand.calendly,
    image: devionxImg,
    alt: "Software engineer reviewing code on multiple screens",
    metrics: [
      { label: "processing Time", before: "24 hours", after: "2 hours" },
      { label: "accuracy", before: "85%", after: "99.5%" },
      { label: "costs", before: "$50k/month", after: "$15k/month" },
    ],
  },
  {
    company: "Dermaspace Clinic",
    industry: "Healthcare",
    challenge: "Patient scheduling and follow-up bottlenecks",
    solution: "Voice Agent + Workflow Automation",
    quote:
      "Our staff can now focus on patient care instead of administrative tasks. Game-changing for our practice.",
    author: "— Dr. Patil, Founder",
    slug: "dermaspace-clinic",
    link: brand.calendly,
    image: dermaImg,
    alt: "Clinician at a modern dermatology clinic consultation room",
    metrics: [
      { label: "no Shows", before: "25%", after: "5%" },
      { label: "admin Time", before: "40 hrs/week", after: "8 hrs/week" },
      { label: "patient Sat", before: "78%", after: "96%" },
    ],
  },
];

export const processSection = {
  heading: "Simple Process, Powerful Results",
  sub: "From consultation to deployment, we guide you every step of the way",
};

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    subtitle: "Discover & Strategize",
    description: "We analyze your business processes and identify automation opportunities",
    bullets: [
      "Initial discovery call to understand your needs",
      "Process mapping and pain point identification",
      "AI readiness assessment",
      "Custom solution proposal with ROI projections",
      "Timeline and resource planning",
    ],
    duration: "1-2 weeks",
  },
  {
    number: "02",
    title: "Development",
    subtitle: "Build & Train",
    description: "Our team builds and trains your custom AI solution",
    bullets: [
      "AI model selection and customization",
      "Integration with existing systems",
      "Training on your specific data and workflows",
      "Rigorous testing and quality assurance",
      "User acceptance testing with your team",
    ],
    duration: "4-8 weeks",
  },
  {
    number: "03",
    title: "Deployment",
    subtitle: "Launch & Optimize",
    description: "We deploy your solution and ensure smooth operation",
    bullets: [
      "Phased rollout to minimize disruption",
      "Team training and onboarding",
      "24/7 monitoring and support",
      "Performance optimization based on real data",
      "Continuous improvement and updates",
    ],
    duration: "Ongoing",
  },
];

export const consultSection = {
  heading: "Ready to Transform Your Business?",
  sub: "Book a free 30-minute consultation to discuss your AI automation needs. No commitment required.",
  chips: [
    { title: "30-Minute Call", sub: "Quick and focused discussion" },
    { title: "Virtual Meeting", sub: "Meet from anywhere" },
    { title: "Free Assessment", sub: "No strings attached" },
  ],
  expectHeading: "What to Expect:",
  expect: [
    "Discuss your current challenges and goals",
    "Explore AI automation opportunities",
    "Get a preliminary ROI estimate",
    "Receive a custom solution proposal",
    "Learn about our implementation process",
  ],
  cta: "Schedule Your Free Consultation",
  microcopy: "Available slots fill up quickly. Book now to secure your spot.",
};

export const testimonialsSection = {
  heading: "Trusted by Industry Leaders",
  sub: "Don't just take our word for it—hear from the companies we've helped transform",
};

export const testimonials = [
  {
    quote:
      "Calibi AI didn't just implement a solution—they transformed our entire customer support operation. The AI chatbot handles complex queries with remarkable accuracy, and our team can now focus on high-value interactions.",
    initials: "KV",
    name: "Kartikey Vyas",
    role: "Founder, Prakior Solutions",
  },
  {
    quote:
      "Calibi expertise in Small Language Models and automation helped us deliver next-generation I solutions with significantly higher efficiency and lower operational costs. Their strategic approach transformed our workflow capabilities.",
    initials: "AB",
    name: "Ajay Bade",
    role: "Founder, DevionX Technologies",
  },
  {
    quote:
      "The voice agent system has revolutionized our patient scheduling. No-shows dropped from 25% to 5%, and our staff can finally focus on what matters—patient care.",
    initials: "DPP",
    name: "Dr. Poonam Patil",
    role: "Founder, Dermaspace Clinic",
  },
  {
    quote:
      "Partnering with AtoomAi has been one of the best decisions for our business. They've helped us outsource various AI services, including a powerful AI chatbot that now handles customer queries efficiently and around the clock. Their solutions have significantly reduced our support team's workload while improving response times and overall customer satisfaction.",
    initials: "RM",
    name: "Raghav Mishra",
    role: "co-Founder, Clevvr Ai",
  },
];

export const faqSection = {
  heading: "Frequently Asked Questions",
  sub: "Everything you need to know about our AI automation solutions",
  closing: "Still have questions?",
  closingCta: "Schedule a call with our team",
};

export const faqs = [
  {
    question: "What types of businesses can benefit from AI automation?",
    answer:
      "AI automation benefits businesses of all sizes across industries—from e-commerce and SaaS to healthcare and professional services. If you have repetitive tasks, customer interactions, or data processing needs, AI can help streamline operations and reduce costs.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Implementation timelines vary based on complexity. Simple solutions like chatbots can be deployed in 2-4 weeks, while comprehensive multi-agent systems may take 6-12 weeks. We provide detailed timelines during the consultation phase and work efficiently to minimize disruption.",
  },
  {
    question: "Do I need technical expertise to use your AI solutions?",
    answer:
      "No technical expertise required. We design our solutions to be user-friendly and provide comprehensive training for your team. Our interfaces are intuitive, and we offer ongoing support to ensure smooth operation.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "Security is our top priority. We implement enterprise-grade encryption, comply with GDPR and SOC 2 standards, and can deploy solutions on-premise or in your private cloud. All data handling follows strict security protocols and industry best practices.",
  },
  {
    question: "What kind of ROI can I expect?",
    answer:
      "Most clients see positive ROI within 3-6 months. Typical benefits include 60-80% reduction in operational costs, 3-5x productivity improvements, and 20-40% revenue increases through better customer experiences. We provide detailed ROI projections during consultation.",
  },
  {
    question: "Can your AI solutions integrate with our existing systems?",
    answer:
      "Yes, our solutions are designed for seamless integration. We work with popular platforms like Salesforce, HubSpot, Shopify, and custom systems via APIs. We assess your tech stack during consultation and ensure smooth integration.",
  },
  {
    question: "What happens if the AI makes a mistake?",
    answer:
      "We implement multiple safeguards including confidence thresholds, human-in-the-loop workflows, and continuous monitoring. Our systems learn from errors and improve over time. We also provide 24/7 support to address any issues immediately.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Absolutely. We provide 24/7 monitoring, regular updates, performance optimization, and dedicated support. Our team ensures your AI solutions continue to perform optimally and evolve with your business needs.",
  },
  {
    question: "How customizable are your AI solutions?",
    answer:
      "Highly customizable. While we offer pre-built solutions for common use cases, we specialize in custom development tailored to your specific workflows, brand voice, and business requirements. Every solution is designed around your unique needs.",
  },
  {
    question: "What's the difference between your chatbots and voice agents?",
    answer:
      "Chatbots handle text-based interactions on websites, apps, and messaging platforms. Voice agents manage phone calls with speech recognition and natural conversation capabilities. Both use advanced AI but are optimized for different communication channels.",
  },
];

/* ---------------- Services page ---------------- */

export const servicesPage = {
  eyebrow: "Detailed Services",
  h1a: "AI Services",
  h1b: "Built for Real Business Outcomes",
  sub: "From strategy to deployment, Calibi AI helps businesses, institutions, and teams adopt AI through practical systems that save time, improve operations, and create measurable value.",
  blocks: [
    {
      id: "business-automation",
      heading: "Business Automation",
      intro:
        "We automate repetitive business workflows across sales, operations, support, reporting, and internal team processes.",
      bullets: [
        "Workflow discovery and automation planning",
        "CRM, forms, sheets, email, and dashboard integrations",
        "Lead routing, follow-ups, reporting, and reminders",
        "AI-assisted internal process automation",
      ],
    },
    {
      id: "ai-consultation",
      heading: "AI Consultation",
      intro:
        "We help you identify the best AI opportunities, avoid tool confusion, and build a clear roadmap for implementation.",
      bullets: [
        "AI readiness assessment",
        "Use-case identification and ROI mapping",
        "Tool selection and architecture guidance",
        "Implementation roadmap and team enablement",
      ],
    },
    {
      id: "ai-development",
      heading: "AI Development",
      intro:
        "We build custom AI-powered products, internal tools, dashboards, copilots, and agentic workflows for your exact business needs.",
      bullets: [
        "Custom AI web apps and internal copilots",
        "AI agents for research, operations, and support",
        "API, database, and third-party integrations",
        "Secure deployment and iteration support",
      ],
    },
    {
      id: "ai-training",
      heading: "AI Training for Colleges & Corporates",
      intro:
        "We deliver practical AI training programs that help learners and teams apply AI in real workflows, not just understand the theory.",
      bullets: [
        "College workshops and student bootcamps",
        "Corporate AI productivity training",
        "Prompt engineering and automation labs",
        "Live projects, templates, and adoption playbooks",
      ],
    },
  ],
  howWeWork: {
    heading: "How We Work",
    intro:
      "We begin with discovery, map the highest-impact opportunities, design the solution, build fast prototypes, and then refine the system until it is usable by real teams. The focus is always practical: less noise, more outcomes.",
    steps: [
      {
        number: "01",
        title: "Discover",
        description:
          "We study your workflow, bottlenecks, team habits, and data flow before suggesting any AI system.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "We map the automation logic, user experience, integrations, and measurable outcomes.",
      },
      {
        number: "03",
        title: "Deploy",
        description:
          "We build, test, launch, train your team, and improve the system based on real usage.",
      },
    ],
  },
};

/* ---------------- Story page ---------------- */

export const storyPage = {
  eyebrow: "Our Story",
  h1a: "Making AI Practical",
  h1b: "for Businesses and Learners",
  sub: "Calibi AI exists to turn AI from a buzzword into working systems, trained teams, and real operational advantage.",
  sections: [
    {
      heading: "Why We Started",
      intro:
        "Most companies know AI is important, but they struggle to convert that awareness into clear workflows, useful tools, and measurable business value.",
      bullets: [
        "Too many tools, not enough implementation clarity",
        "Teams need practical training, not generic theory",
        "Businesses need systems that fit their workflow",
      ],
    },
    {
      heading: "What We Believe",
      intro:
        "AI should make work simpler, faster, and more creative. The best systems feel natural for teams and solve real problems quietly in the background.",
      bullets: [
        "Practical outcomes over hype",
        "Clean user experience over complexity",
        "Training and adoption alongside technology",
      ],
    },
    {
      heading: "Who We Help",
      intro:
        "We work with businesses, founders, institutions, colleges, departments, and teams who want to use AI with confidence and speed.",
      bullets: [
        "Companies adopting automation",
        "Teams building internal AI workflows",
        "Colleges preparing students for AI-first careers",
      ],
    },
    {
      heading: "Where We Are Going",
      intro:
        "Our vision is to build a practical AI ecosystem that combines automation services, custom development, consulting, and Academy partnerships.",
      bullets: [
        "More business-ready AI systems",
        "More hands-on AI learning programs",
        "More teams able to build with AI independently",
      ],
    },
  ],
  promise: {
    heading: "The Calibi AI Promise",
    intro:
      "We keep AI implementation clear, useful, and human. Every project should leave you with a better system, a smarter team, and a stronger path forward.",
    cards: [
      {
        title: "Built Around Clarity",
        description:
          "We translate AI complexity into clear workflows, simple choices, and systems people can actually use.",
      },
      {
        title: "Powered by Execution",
        description:
          "Our work lives in implementation: automation, development, training, and adoption inside real teams.",
      },
      {
        title: "Growing Through Academy",
        description:
          "Alongside business solutions, Calibi AI Academy helps colleges and corporates build practical AI capability.",
      },
    ],
  },
};

/* ---------------- Academy page ---------------- */

export const academyPage = {
  eyebrow: "Calibi AI Academy",
  h1a: "AI Training Partnerships",
  h1b: "for Colleges & Corporates",
  sub: "We partner with colleges, departments, placement cells, innovation clubs, and corporate teams to deliver practical AI workshops that turn learners into builders.",
  chips: ["Prompt Engineering", "Automation Labs", "AI Product Building", "Career Skills"],
  workshops: {
    heading: "Hands-on AI Workshops",
    intro:
      "Practical sessions on AI tools, prompt engineering, business automation, AI product thinking, and real-world workflow building.",
    formats: [
      { strong: "1-3 Day", label: "Bootcamps" },
      { strong: "Live", label: "Project Labs" },
      { strong: "Custom", label: "Programs" },
    ],
  },
  sections: [
    {
      heading: "College Partnerships",
      intro:
        "We help colleges run modern AI programs that students can actually use in projects, internships, placements, and startups.",
      bullets: [
        "AI foundations and tool fluency workshops",
        "Prompt engineering and automation labs",
        "Mini project building with AI workflows",
        "Career-focused AI skill sessions",
      ],
    },
    {
      heading: "Corporate Training",
      intro:
        "We train teams to use AI inside their daily work with clear use cases, repeatable systems, and department-specific playbooks.",
      bullets: [
        "AI adoption for operations, sales, HR, and marketing",
        "Workflow automation and reporting systems",
        "Leadership AI awareness sessions",
        "Team productivity playbooks",
      ],
    },
    {
      heading: "Workshop Format",
      intro:
        "Each session is built around learning by doing, not lectures alone. Participants leave with templates and working examples.",
      bullets: [
        "Live demos and guided build sessions",
        "Hands-on exercises and team challenges",
        "Reusable prompts, templates, and workflows",
        "Final showcase and Q&A",
      ],
    },
    {
      heading: "Partner Outcomes",
      intro:
        "Our goal is to help institutions and companies become AI-ready with confidence, clarity, and practical execution.",
      bullets: [
        "Better AI awareness and adoption",
        "Real project experience for learners",
        "Improved productivity for teams",
        "Clear roadmap for next implementation steps",
      ],
    },
  ],
  contact: {
    eyebrow: "Training & Partnerships",
    headingA: "Bring Calibi AI Academy",
    headingB: "to your campus or company",
    sub: "Share a few details and we will prepare the right workshop, bootcamp, or partnership format for your institution or team.",
    chips: ["College workshops", "Corporate AI training", "Faculty and team enablement"],
    emailLabel: "Email",
    officeLabel: "Office",
    fields: {
      name: "Your Name",
      email: "Email",
      phone: "Phone Number",
      org: "College / Company",
      partnershipType: "Partnership Type",
      partnershipPlaceholder: "Select one",
      partnershipOptions: [
        "College AI Workshop",
        "Corporate AI Training",
        "Bootcamp Partnership",
        "Custom AI Program",
      ],
      participants: "Expected Participants",
      message: "Message",
    },
    submit: "Send Partnership Enquiry",
    helper: "Submits directly to Calibi AI Academy partnerships.",
  },
};

type FooterLinkItem = { label: string; to: string; hash?: string };

export const footerNav: {
  services: { heading: string; links: FooterLinkItem[] };
  company: { heading: string; links: FooterLinkItem[] };
} = {
  services: {
    heading: "Services We Offer",
    links: [
      { label: "Business Automation", to: "/services", hash: "business-automation" },
      { label: "AI Consultation", to: "/services", hash: "ai-consultation" },
      { label: "AI Development", to: "/services", hash: "ai-development" },
      { label: "AI Training", to: "/academy" },
    ],
  },
  company: {
    heading: "Company",
    links: [
      { label: "Our Story", to: "/story" },
      { label: "Calibi AI Academy", to: "/academy" },
      { label: "Detailed Services", to: "/services" },
      { label: "Partnership Enquiry", to: "/academy", hash: "academy-contact" },
    ],
  },
};
