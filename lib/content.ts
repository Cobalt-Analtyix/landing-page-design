import {
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FileText,
  MessageSquareText,
  Search,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export type IconItem = { title: string; copy: string; icon: LucideIcon; color?: string };

export const problems: IconItem[] = [
  { title: "Long Timelines", copy: "Weeks or months to get results.", icon: Clock3 },
  { title: "High Costs", copy: "Expensive, complex studies.", icon: CircleDollarSign },
  { title: "Overwhelming Reports", copy: "Hundreds of pages, hard to parse.", icon: FileText },
  {
    title: "Limited Flexibility",
    copy: "Traditional research isn’t built for today’s fast-moving businesses.",
    icon: CheckCircle2,
  },
];

export const processSteps: IconItem[] = [
  { title: "1. Understand", copy: "We dive deep into your business questions.", icon: Search },
  { title: "2. Research", copy: "We design and execute robust research using real consumers.", icon: CircleDollarSign },
  { title: "3. Analyze", copy: "We turn data into clear, meaningful insights.", icon: BarChart3 },
  { title: "4. Act", copy: "We help you apply insights to make confident decisions.", icon: CheckCircle2 },
];

export const services: IconItem[] = [
  { title: "Product Research", copy: "Test and validate product concepts and features.", icon: Search, color: "#ff8a3d" },
  { title: "Brand Research", copy: "Understand brand perception, positioning and brand health.", icon: Sparkles, color: "#10cbb4" },
  { title: "Customer Research", copy: "Know your customers deeper and uncover unmet needs.", icon: UsersRound, color: "#a32de8" },
  { title: "Market Research", copy: "Size opportunities and identify new growth areas.", icon: BarChart3, color: "#1a48e8" },
  { title: "Experience Research", copy: "Measure and improve customer experience across touchpoints.", icon: MessageSquareText, color: "#ff8a3d" },
];

export const features: IconItem[] = [
  { title: "Real Consumers", copy: "Access diverse, high-quality panels across 30+ markets.", icon: UsersRound, color: "#1a48e8" },
  { title: "AI-Powered Analysis", copy: "Get instant summaries, key insights and recommendations.", icon: Sparkles, color: "#10cbb4" },
  { title: "Flexible & Scalable", copy: "From single studies to continuous tracking.", icon: BarChart3, color: "#1a48e8" },
  { title: "Pay-per-Study", copy: "No long-term contracts. Only pay for what you need.", icon: CircleDollarSign, color: "#a32de8" },
];

export const faqs = [
  {
    question: "What does Cobalt Analytix do?",
    answer:
      "We run consumer research for businesses: surveys fielded to real consumers, analysed with AI-assisted tooling and our researchers, and delivered as clear findings and recommendations you can act on.",
  },
  {
    question: "How quickly can I get results?",
    answer:
      "Most studies are designed to deliver in days rather than weeks. The exact timeline depends on the audience, the number of markets and the length of the survey, and we confirm it with you before fieldwork starts.",
  },
  {
    question: "What kinds of research can you run?",
    answer:
      "Pricing, product, brand, customer, market and experience research. If your question is about how consumers think, choose or behave, we can usually design a study for it.",
  },
  {
    question: "Who are the respondents?",
    answer:
      "Real consumers from panels across 30+ markets. We screen for the audience you need, such as category buyers, specific age groups or regions, so the answers come from the people who matter to your decision.",
  },
  {
    question: "How does pricing work?",
    answer:
      "You pay per study, with no long-term contracts. Tell us what you want to learn through the contact page and we will scope the study and share a quote.",
  },
  {
    question: "What will I receive at the end of a study?",
    answer:
      "A summary of the key insights, the supporting data and clear recommendations. We focus on what the findings mean for your decision rather than handing over hundreds of pages to parse.",
  },
  {
    question: "How is my data handled?",
    answer:
      "Your study data belongs to you, and we never sell it. Our Privacy Policy explains what we collect through this website and how we use it.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send us a message through the contact page or book a call. We will talk through your business question and propose a research approach.",
  },
] as const;
