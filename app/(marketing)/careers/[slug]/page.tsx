import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail } from "lucide-react";

import { getJob } from "@/lib/careers";
import { contact } from "@/lib/site";

type JobPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJob(slug);
  return job ? { title: job.title, description: job.summary } : { title: "Role not found" };
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-xl font-extrabold tracking-[-0.02em]">{title}</h2>
      <ul className="mt-3 grid list-disc gap-2 pl-5 text-base leading-relaxed text-ink/75">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) {
    notFound();
  }

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(`Application: ${job.title}`)}&body=${encodeURIComponent(
    "Hi,\n\nI would like to apply for the " + job.title + " role.\n\nName:\nLinks (GitHub / portfolio / LinkedIn):\n\nA few lines about yourself:\n\nI have attached my resume.\n",
  )}`;

  return (
    <section className="mx-auto max-w-3xl px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-16">
      <Link href="/careers" className="text-sm font-bold text-cobalt hover:underline">
        ← All roles
      </Link>
      <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.14em] text-cobalt">
        {job.type} <span className="mx-1">•</span> {job.experience}
      </p>
      <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl">{job.title}</h1>
      <p className="mt-5 text-base leading-relaxed text-ink/75">{job.about}</p>

      <div className="mt-10 grid gap-10">
        <List title="What you will do" items={job.responsibilities} />
        <List title="What we are looking for" items={job.requirements} />
        <List title="Nice to have" items={job.niceToHave} />
        <List title="What you get" items={job.perks} />
      </div>

      <div className="mt-12 rounded-2xl bg-navy p-6 text-white sm:p-8">
        <h2 className="text-xl font-extrabold tracking-[-0.02em]">How to apply</h2>
        <p className="mt-3 text-base leading-relaxed text-white/80">
          Email your resume (or a short note about yourself) to{" "}
          <a href={mailto} className="font-bold underline">
            {contact.email}
          </a>{" "}
          with the subject “Application: {job.title}”.
        </p>
        <a
          href={mailto}
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-dark"
        >
          <Mail size={16} aria-hidden="true" />
          Apply by email
        </a>
      </div>
    </section>
  );
}
