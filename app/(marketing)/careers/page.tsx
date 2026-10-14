import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageIntro } from "@/components/shared/PageIntro";
import { getJobs } from "@/lib/careers";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles at Cobalt Analytix, including an internship with no experience required.",
};

export const dynamic = "force-dynamic";

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <>
      <PageIntro eyebrow="Careers" title="Build with us.">
        We are a small team and we like helping people start their careers. Take a look at our open roles.
      </PageIntro>
      <section className="mx-auto max-w-4xl px-5 pb-16 lg:px-8 lg:pb-24">
        <div className="grid gap-4">
          {jobs.length === 0 && (
            <p className="text-base text-ink/70">No open roles right now. Check back soon.</p>
          )}
          {jobs.map((job) => (
            <Link
              key={job.slug}
              href={`/careers/${job.slug}`}
              className="group rounded-2xl bg-white p-6 transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.1em] text-cobalt">
                {job.type} <span className="mx-1">•</span> {job.experience}
              </p>
              <h2 className="mt-3 text-xl font-extrabold tracking-[-0.02em]">{job.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{job.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-cobalt">
                View job description
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
