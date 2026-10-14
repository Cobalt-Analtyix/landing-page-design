import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";

import { CtaBanner } from "@/components/shared/CtaBanner";
import { PageIntro } from "@/components/shared/PageIntro";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about how Cobalt Analytix research works.",
};

export default function FaqPage() {
  return (
    <>
      <PageIntro eyebrow="FAQ" title="Questions, answered.">
        Everything you might want to know before starting your first study. Can&apos;t find your answer? Get in
        touch.
      </PageIntro>
      <section className="mx-auto max-w-4xl px-5 pb-16 lg:px-8">
        <div className="grid gap-3">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group rounded-xl bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold [&::-webkit-details-marker]:hidden">
                {question}
                <ChevronDown
                  size={20}
                  className="shrink-0 text-cobalt transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-ink/75">{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <CtaBanner title="Still have a question?" copy="Our team is happy to talk through your research needs." />
    </>
  );
}
