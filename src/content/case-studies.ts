/**
 * Long-form case study articles, opened from "Read Full Case Study".
 * Copy is preserved verbatim from the client-supplied articles.
 *
 * Mermaid sources are stored raw. Labels containing "&" are quoted because
 * a bare ampersand is Mermaid's multi-node separator.
 */

import dermaImg from "@/assets/derma.webp";
import devionxImg from "@/assets/devionx.webp";
import vrampImg from "@/assets/vramp.webp";

export type ImpactMetric = {
  label: string;
  before: string;
  after: string;
};

export type CaseStudyArticle = {
  slug: string;
  company: string;
  title: string;
  industry: string;
  /** Short summary shown in the hero and on listing cards. */
  summary: string;
  challengeLine: string;
  solutionLine: string;
  image: string;
  alt: string;
  overview: string[];
  challenge: {
    intro: string[];
    bullets: string[];
    outro: string;
  };
  solution: {
    paragraphs: string[];
  };
  flowchart: string;
  keyFeatures: string[];
  impact: {
    intro: string;
    metrics: ImpactMetric[];
    outro: string;
  };
  techStack: string[];
  results: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  conclusion: string;
};

export const caseStudyArticles: CaseStudyArticle[] = [
  {
    slug: "vramp-automations",
    company: "VRAMP Automations",
    title: "Transforming Customer Support with AI Chatbots & Voice Agents",
    industry: "Industrial Automation & Manufacturing",
    summary: "Managing a rapidly growing number of customer inquiries with a limited support team.",
    challengeLine:
      "Managing a rapidly growing number of customer inquiries with a limited support team.",
    solutionLine: "AI Chatbot + AI Voice Agent Implementation by CalibiAI",
    image: vrampImg,
    alt: "Automated manufacturing line inside a factory",
    overview: [
      "As VRAMP Automations expanded its operations, customer inquiries increased significantly across multiple channels, including the website, WhatsApp, email, and phone calls. The support team spent a considerable amount of time answering repetitive questions related to product specifications, quotations, warranties, installation guidance, and service requests.",
      "While the team maintained excellent service quality, the growing inquiry volume resulted in longer response times and increased operational pressure. VRAMP required a scalable solution that could deliver instant responses, improve customer experience, and reduce the manual workload without expanding the support team.",
      "CalibiAI designed and implemented an AI-powered customer support system combining an intelligent chatbot with an AI voice agent. The solution automated repetitive conversations while seamlessly routing complex cases to human representatives, allowing the support team to focus on high-value customer interactions.",
    ],
    challenge: {
      intro: [
        "Before implementing AI, every customer inquiry was handled manually. Support executives needed to read each message, search internal documentation, prepare an accurate response, and communicate with the customer individually. As daily inquiries grew, this process became increasingly time-consuming.",
        "The business faced several operational challenges:",
      ],
      bullets: [
        "Average customer response time reached 4 hours",
        "Support agents handled hundreds of repetitive queries daily",
        "Limited customer support outside business hours",
        "Increased workload affected productivity",
        "Scaling required hiring additional support staff",
      ],
      outro:
        "The company wanted a solution that could provide instant, accurate responses while maintaining the quality of customer interactions.",
    },
    solution: {
      paragraphs: [
        "CalibiAI developed a centralized AI customer support ecosystem powered by an intelligent chatbot and voice agent.",
        "The chatbot was integrated with the company website and messaging platforms to answer frequently asked questions instantly. The AI Voice Agent managed incoming calls using natural conversations, understanding customer intent and providing immediate assistance.",
        "The system was connected to VRAMP's internal knowledge base, enabling it to retrieve accurate product information, warranty policies, installation guides, and technical documentation in real time. Whenever a customer required advanced technical support, the conversation was automatically transferred to the appropriate support executive with the complete conversation history.",
        "This hybrid approach ensured that routine inquiries were fully automated while human experts remained available for complex situations.",
      ],
    },
    flowchart: `flowchart TD
    A[Customer Inquiry] --> B{Channel}
    B --> C[Website Chatbot]
    B --> D[WhatsApp]
    B --> E[Phone Call]
    C --> F[AI Chatbot]
    D --> F
    E --> G[AI Voice Agent]
    F --> H[Intent Detection]
    G --> H
    H --> I["Knowledge Base & Product Database"]
    I --> J{Issue Resolved?}
    J -->|Yes| K[Instant AI Response]
    J -->|No| L[Escalate to Human Support]
    K --> M[Customer Satisfaction]
    L --> N[Support Executive Resolution]
    M --> O[Conversation Logged in CRM]
    N --> O
    O --> P[Analytics Dashboard]`,
    keyFeatures: [
      "AI-powered Website Chatbot",
      "AI Voice Agent for incoming calls",
      "Automated FAQ responses",
      "Knowledge Base Integration",
      "Intelligent Ticket Escalation",
      "CRM Conversation Logging",
      "24×7 Customer Support",
      "Analytics & Performance Dashboard",
    ],
    impact: {
      intro:
        "The AI implementation significantly improved the efficiency of VRAMP's customer support operations.",
      metrics: [
        { label: "Response Time", before: "4 Hours", after: "30 Seconds" },
        { label: "Customer Satisfaction", before: "72%", after: "94%" },
        { label: "Daily Manual Tickets", before: "500", after: "75" },
        { label: "Support Capacity", before: "Standard", after: "6× Higher" },
      ],
      outro:
        "By automating repetitive customer interactions, the support team could dedicate more time to solving technical issues and building stronger customer relationships. The AI system ensured faster response times, consistent communication, and uninterrupted customer support throughout the day.",
    },
    techStack: [
      "Large Language Models (LLMs)",
      "AI Chatbot",
      "AI Voice Agent",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Database",
      "REST APIs",
      "n8n Automation",
      "CRM Integration",
      "Cloud Infrastructure",
    ],
    results:
      "Within weeks of deployment, VRAMP Automations achieved measurable business improvements. Average response time dropped from 4 hours to just 30 seconds, customer satisfaction increased from 72% to 94%, and daily manual support tickets decreased from 500 to only 75. Most importantly, the company was able to handle six times more customers with the same support team, eliminating the immediate need for additional hiring while creating a scalable customer support infrastructure.",
    testimonial: {
      quote:
        "CalibiAI transformed our customer support operations. We're now handling six times more customers with the same team size while delivering faster responses and a significantly better customer experience.",
      author: "Swapnil Gulhane",
      role: "Founder, VRAMP Automations",
    },
    conclusion:
      "The collaboration between CalibiAI and VRAMP Automations demonstrates how AI can transform customer support into a scalable business advantage. By combining conversational AI, voice automation, and intelligent knowledge retrieval, the company successfully reduced response times, improved customer satisfaction, and optimized operational efficiency. Today, VRAMP delivers faster, more consistent, and always-available customer support while empowering its team to focus on solving complex customer challenges and driving business growth.",
  },
  {
    slug: "devionx-technologies",
    company: "DevionX Technologies",
    title: "Accelerating Software Delivery with Small Language Models & Intelligent Automation",
    industry: "Software Development & Enterprise Solutions",
    summary:
      "Manual development workflows were slowing project delivery and increasing engineering costs.",
    challengeLine:
      "Manual development workflows were slowing project delivery and increasing engineering costs.",
    solutionLine:
      "Small Language Models (SLMs) + Automated Workflow Orchestration + Optimized CI/CD Pipelines",
    image: devionxImg,
    alt: "Software engineer reviewing code on multiple screens",
    overview: [
      "DevionX Technologies specializes in building enterprise software solutions for businesses across multiple industries. As the company scaled its engineering team and client projects, maintaining development speed and code quality became increasingly challenging. Developers spent a significant amount of time on repetitive tasks such as writing boilerplate code, reviewing pull requests, generating documentation, and manually managing deployment workflows.",
      "To improve engineering productivity without compromising quality, DevionX partnered with CalibiAI to modernize its software development lifecycle. By implementing Small Language Models (SLMs) for code generation and integrating intelligent workflow automation into the CI/CD pipeline, the company streamlined its development process from coding to deployment.",
    ],
    challenge: {
      intro: [
        "The existing software development lifecycle relied heavily on manual processes. Every feature required multiple rounds of code writing, reviews, testing, and deployment, resulting in longer release cycles and higher operational costs.",
        "The engineering team faced several key challenges:",
      ],
      bullets: [
        "Long development cycles delaying client deliveries",
        "Manual code reviews consuming engineering time",
        "Repetitive coding tasks reducing developer productivity",
        "Inefficient deployment workflows",
        "Increasing infrastructure and operational costs",
      ],
      outro:
        "As project complexity increased, these bottlenecks made it difficult to scale engineering operations efficiently.",
    },
    solution: {
      paragraphs: [
        "CalibiAI implemented an AI-powered development workflow using Small Language Models designed specifically for software engineering tasks.",
        "The solution assisted developers with intelligent code generation, documentation creation, and code optimization while integrating automated testing and deployment into the CI/CD pipeline. Routine engineering activities were automated, allowing developers to dedicate more time to architecture, innovation, and solving complex business problems.",
        "The AI system worked alongside developers rather than replacing them, ensuring high-quality code with human oversight at every critical stage.",
      ],
    },
    flowchart: `flowchart TD
    A[Developer Request] --> B[Small Language Model]
    B --> C[Code Generation]
    B --> D[Code Review]
    B --> E[Documentation]
    C --> F[Git Repository]
    F --> G[CI/CD Pipeline]
    G --> H[Automated Testing]
    H --> I{Tests Passed?}
    I -->|Yes| J[Production Deployment]
    I -->|No| K[Developer Review]
    K --> B
    J --> L["Monitoring & Analytics"]
    L --> M[Continuous Improvement]`,
    keyFeatures: [
      "AI-assisted Code Generation",
      "Automated Code Review Suggestions",
      "Intelligent Documentation Generation",
      "CI/CD Workflow Automation",
      "Automated Testing Integration",
      "Deployment Orchestration",
      "Performance Monitoring",
      "Engineering Analytics Dashboard",
    ],
    impact: {
      intro: "The AI implementation significantly improved software delivery efficiency.",
      metrics: [
        { label: "Processing Time", before: "24 Hours", after: "2 Hours" },
        { label: "Code Accuracy", before: "85%", after: "99.5%" },
        { label: "Operational Cost", before: "$50k/month", after: "$15k/month" },
        { label: "Deployment Speed", before: "Manual", after: "Fully Automated" },
      ],
      outro:
        "By automating repetitive engineering workflows, developers spent more time building high-value features while reducing project delivery timelines and infrastructure costs.",
    },
    techStack: [
      "Small Language Models (SLMs)",
      "Python",
      "FastAPI",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "REST APIs",
      "Cloud Infrastructure",
    ],
    results:
      "Within a few months of deployment, DevionX Technologies reduced feature processing time from 24 hours to just 2 hours, improved engineering accuracy from 85% to 99.5%, and lowered monthly operational costs from $50,000 to $15,000. The automated development pipeline enabled faster software releases, higher code quality, and a more scalable engineering workflow, allowing the team to deliver enterprise projects with greater speed and confidence.",
    testimonial: {
      quote:
        "CalibiAI's expertise in Small Language Models and workflow automation transformed the way our engineering team delivers software. We now build and deploy faster while maintaining exceptional code quality and significantly reducing operational costs.",
      author: "Ajay Bade",
      role: "CEO, DevionX Technologies",
    },
    conclusion:
      "The collaboration between CalibiAI and DevionX Technologies demonstrates how AI-powered software engineering can dramatically improve development efficiency. By combining Small Language Models with intelligent automation and optimized CI/CD pipelines, DevionX accelerated project delivery, reduced operational costs, and enhanced code quality. The result is a modern, scalable development ecosystem that empowers engineers to innovate faster while delivering reliable enterprise software.",
  },
  {
    slug: "dermaspace-clinic",
    company: "Dermaspace Clinic",
    title: "Transforming Patient Scheduling with AI Voice Agents & Workflow Automation",
    industry: "Healthcare & Dermatology",
    summary:
      "Managing patient appointments, reminders, and follow-ups manually created scheduling bottlenecks and increased administrative workload.",
    challengeLine:
      "Managing patient appointments, reminders, and follow-ups manually created scheduling bottlenecks and increased administrative workload.",
    solutionLine: "AI Voice Agent + Workflow Automation by CalibiAI",
    image: dermaImg,
    alt: "Clinician at a modern dermatology clinic consultation room",
    overview: [
      "Dermaspace Clinic is a growing dermatology practice serving hundreds of patients every month. As appointment requests increased, the administrative team found it difficult to manage scheduling, patient reminders, cancellations, and follow-up calls efficiently. Staff spent several hours each day handling repetitive administrative tasks, leaving less time to focus on delivering exceptional patient care.",
      "To improve operational efficiency and enhance the patient experience, Dermaspace Clinic partnered with CalibiAI to implement an AI-powered Voice Agent integrated with workflow automation. The solution automated appointment booking, reminders, follow-up communication, and rescheduling, allowing the clinic to streamline operations while maintaining a personalized experience for every patient.",
    ],
    challenge: {
      intro: [
        "Before automation, appointment management relied entirely on manual phone calls and administrative coordination. Every appointment required staff to check doctor availability, confirm schedules, send reminders, and follow up with patients after their visits.",
        "This manual process led to several operational challenges:",
      ],
      bullets: [
        "High number of missed appointments",
        "Administrative staff spending over 40 hours per week on scheduling tasks",
        "Delayed follow-up communication",
        "Increased workload during peak hours",
        "Reduced time available for patient care",
      ],
      outro:
        "The clinic required an intelligent solution that could automate routine administrative work while ensuring a seamless patient experience.",
    },
    solution: {
      paragraphs: [
        "CalibiAI deployed an AI Voice Agent capable of handling patient interactions throughout the appointment lifecycle. Patients could book appointments, receive confirmations, reschedule visits, and obtain clinic information through natural voice conversations.",
        "The AI system synchronized with the clinic's scheduling calendar to provide real-time appointment availability and automatically sent reminders before appointments. After consultations, automated follow-up messages and feedback requests helped improve patient engagement while reducing manual effort for clinic staff.",
        "Complex requests were seamlessly transferred to the administrative team whenever human assistance was required, ensuring a smooth and reliable patient experience.",
      ],
    },
    flowchart: `flowchart TD
    A[Patient Books Appointment] --> B[AI Voice Agent / Website]
    B --> C[Appointment Scheduling]
    C --> D["Calendar & Doctor Availability"]
    D --> E[Appointment Confirmation]
    E --> F[Automated Reminder]
    F --> G{Patient Confirms?}
    G -->|Yes| H[Visit Scheduled]
    G -->|No| I[Reschedule Automatically]
    H --> J[Consultation Completed]
    J --> K[Follow-up Reminder]
    K --> L[Feedback Collection]
    L --> M["CRM & Analytics Dashboard"]`,
    keyFeatures: [
      "AI Voice Agent for Appointment Booking",
      "Automated Appointment Scheduling",
      "Smart Reminder & Confirmation Calls",
      "Automatic Rescheduling",
      "Follow-up Communication",
      "Calendar Integration",
      "Patient Feedback Collection",
      "Analytics & Reporting Dashboard",
    ],
    impact: {
      intro:
        "The automation significantly improved operational efficiency and patient satisfaction.",
      metrics: [
        { label: "No-Show Rate", before: "25%", after: "5%" },
        { label: "Administrative Work", before: "40 hrs/week", after: "8 hrs/week" },
        { label: "Patient Satisfaction", before: "78%", after: "96%" },
        { label: "Appointment Management", before: "Manual", after: "Fully Automated" },
      ],
      outro:
        "By automating appointment scheduling and follow-up communication, the clinic dramatically reduced administrative workload while ensuring patients received timely reminders and personalized communication.",
    },
    techStack: [
      "AI Voice Agent",
      "Large Language Models (LLMs)",
      "Workflow Automation",
      "Calendar Integration",
      "CRM Integration",
      "REST APIs",
      "n8n Automation",
      "Cloud Infrastructure",
    ],
    results:
      "Within weeks of implementation, Dermaspace Clinic reduced patient no-shows from 25% to just 5%, decreased administrative scheduling time from 40 hours to only 8 hours per week, and increased patient satisfaction from 78% to 96%. The clinic's staff could now dedicate more time to patient care instead of administrative tasks, while patients benefited from a faster, more convenient appointment experience.",
    testimonial: {
      quote:
        "Our staff can now focus on patient care instead of administrative tasks. The AI Voice Agent has transformed the way we manage appointments and follow-ups, creating a smoother experience for both our team and our patients.",
      author: "Dr. Patil",
      role: "Founder, Dermaspace Clinic",
    },
    conclusion:
      "The collaboration between CalibiAI and Dermaspace Clinic demonstrates how AI-powered workflow automation can modernize healthcare operations. By implementing an intelligent Voice Agent and automated scheduling workflows, the clinic significantly reduced administrative effort, minimized missed appointments, and enhanced patient satisfaction. Today, Dermaspace Clinic operates with greater efficiency, allowing healthcare professionals to focus on what matters most—delivering exceptional patient care.",
  },
];

export const caseStudyArticleBySlug = new Map(caseStudyArticles.map((a) => [a.slug, a]));

export function getCaseStudyArticle(slug: string): CaseStudyArticle | undefined {
  return caseStudyArticleBySlug.get(slug);
}

/** Wraps around so the last article points back to the first. */
export function getNextCaseStudy(slug: string): CaseStudyArticle | undefined {
  const index = caseStudyArticles.findIndex((a) => a.slug === slug);
  if (index === -1) return undefined;
  return caseStudyArticles[(index + 1) % caseStudyArticles.length];
}
