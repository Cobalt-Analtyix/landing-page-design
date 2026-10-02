import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/shared/CtaBanner";
import { getAllInsights, getInsightMarkdown, renderMarkdown } from "@/lib/insights";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllInsights().map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insightData = await getInsightMarkdown(slug);

  if (!insightData) {
    return { title: "Insight not found" };
  }

  return {
    title: insightData.insight.title,
    description: insightData.insight.excerpt,
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insightData = await getInsightMarkdown(slug);

  if (!insightData) {
    notFound();
  }

  const { insight, markdown } = insightData;
  const lines = markdown.split(/\r?\n/);
  const firstHeadingIndex = lines.findIndex((line) => line.trim().startsWith("# "));
  const content = firstHeadingIndex >= 0 ? lines.slice(firstHeadingIndex + 1).join("\n") : markdown;

  return (
    <>
      <section className="mx-auto max-w-5xl px-5 pt-12 lg:px-8 lg:pt-16">
        <Link href="/insights" className="text-sm font-bold text-cobalt hover:underline">
          ← All insights
        </Link>
        <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.14em] text-cobalt">
          {insight.category} <span className="mx-1">•</span> {insight.readTime}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
          {insight.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">{insight.excerpt}</p>
        <div className="relative mt-10 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image src={insight.image} alt="" fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 lg:px-8">
        <article>{renderMarkdown(content)}</article>
      </section>

      <CtaBanner />
    </>
  );
}
