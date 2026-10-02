import type { Metadata } from "next";

import { CtaBanner } from "@/components/shared/CtaBanner";
import { PageIntro } from "@/components/shared/PageIntro";
import { IconBadge } from "@/components/ui/IconBadge";
import { features, services } from "@/lib/content";
import { Clock3, Sparkles, UsersRound } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Cobalt Analytix helps businesses understand their customers through research that is faster, simpler and built for real-world impact.",
};

const principles = [
  {
    title: "Speed that respects decisions",
    copy: "Research is only useful if it arrives before the decision is made. We design every study around getting you answers in days, not weeks.",
    icon: Clock3,
    color: "#1a48e8",
  },
  {
    title: "Real consumers, real signal",
    copy: "Our panels span 30+ markets, and we screen for the audience that matters to your question so the answers reflect your actual customers.",
    icon: UsersRound,
    color: "#a32de8",
  },
  {
    title: "Insight you can act on",
    copy: "AI-assisted analysis and our researchers turn raw responses into clear findings and recommendations, not hundreds of pages to parse.",
    icon: Sparkles,
    color: "#10cbb4",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About us"
        title={
          <>
            Market research shouldn&apos;t <span className="text-cobalt">take six weeks.</span>
          </>
        }
      >
        Cobalt Analytix helps businesses understand their customers through research that is faster, simpler and
        built for real-world impact.
      </PageIntro>

      <section className="mx-auto grid max-w-4xl gap-5 px-5 pb-16 text-lg leading-relaxed text-ink/75 lg:px-8">
        <p>
          Teams making real decisions about pricing, products and positioning are too often stuck waiting weeks for
          research that costs more than they planned to spend. By the time the report lands, the decision has already
          been made on instinct.
        </p>
        <p>
          We built Cobalt Analytix to change that. We combine fast fieldwork with real consumers, AI-powered analysis
          that reads every response, and researchers who turn the findings into recommendations you can act on. You
          pay per study, with no long-term contracts.
        </p>
      </section>

      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold tracking-[-0.04em]">What we believe</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {principles.map(({ title, copy, icon, color }) => (
              <article key={title} className="rounded-xl bg-white p-6">
                <IconBadge icon={icon} color={color} />
                <h3 className="mt-5 font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 sm:p-12">
          <h2 className="text-3xl font-extrabold tracking-[-0.04em]">What we research</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 text-ink/75 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, copy }) => (
              <li key={title}>
                <span className="font-bold text-ink">{title}.</span> {copy}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink/60">
            {features.map((feature) => feature.title).join(" · ")}
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
