import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllInsights } from "@/lib/insights";

export function InsightsPreview() {
  const insights = getAllInsights();

  return (
    <section id="insights" className="scroll-mt-20 px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[.35fr_.65fr]">
        <div>
          <SectionHeading copy="Trends, research findings and expert perspectives to help you stay ahead.">
            Perspective
            <br />
            to <span className="text-cobalt">fuel progress.</span>
          </SectionHeading>
          <Link href="/insights" className="mt-8 inline-block text-sm font-bold text-accent">
            Explore all insights <ArrowRight className="inline" size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {insights.map(({ slug, category, title, readTime }) => (
            <Link
              key={slug}
              href={`/insights/${slug}`}
              className="flex flex-col rounded-xl bg-white p-7 transition-transform hover:-translate-y-1"
            >
              <p className="text-xs font-extrabold uppercase tracking-[.1em] text-cobalt">{category}</p>
              <h3 className="mt-7 text-xl font-extrabold leading-tight tracking-[-.035em]">{title}</h3>
              <p className="mt-auto pt-9 text-sm text-ink/60">{readTime}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
