import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { InsightMeta } from "@/lib/insights-data";

export function InsightCard({ insight }: { insight: InsightMeta }) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] bg-sky">
        <Image src={insight.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-extrabold uppercase tracking-[.1em] text-cobalt">
          {insight.category} <span className="mx-1">•</span> {insight.readTime}
        </p>
        <h2 className="mt-3 text-base font-extrabold leading-snug tracking-[-0.02em]">{insight.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">{insight.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-cobalt">
          Read article <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
