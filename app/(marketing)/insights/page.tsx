import type { Metadata } from "next";

import { InsightCard } from "@/components/shared/InsightCard";
import { PageIntro } from "@/components/shared/PageIntro";
import { getAllInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Research-backed thinking on the consumer behavior signals behind repeat purchase, from the Cobalt Analytix panel lab.",
};

export default function InsightsPage() {
  return (
    <>
      <PageIntro eyebrow="Insights" title="Research-backed thinking for FMCG teams.">
        Long-form articles from the Cobalt Analytix panel lab on the consumer behavior signals behind repeat
        purchase.
      </PageIntro>
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {getAllInsights().map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </section>
    </>
  );
}
