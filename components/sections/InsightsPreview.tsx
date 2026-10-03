import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Lock, Zap, Mail, ShieldCheck } from "lucide-react";


import { SectionHeading } from "@/components/ui/SectionHeading";
import { INSIGHTS } from "@/lib/insights-data";

export function InsightsPreview() {
  const insights = INSIGHTS;

  return (
    <section id="insights" className="scroll-mt-20 px-5 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.3fr_.7fr]">
        <div className="flex flex-col justify-center pr-4">
          <SectionHeading>
            Perspective
            <br />
            to <span className="text-cobalt">fuel progress.</span>
          </SectionHeading>

          <p className="mt-4 text-sm text-ink/70 leading-relaxed">
            Trends, research findings and expert perspectives to help you stay ahead.
          </p>

          <Link href="/insights" className="mt-6 inline-block text-sm font-bold text-[#f7944f]">
            Explore all insights <ArrowRight className="ml-1 inline" size={18} strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {insights.slice(0, 3).map(({ slug, category, title, readTime, image }, index) => {
            const dummyDates = ["Jun 12, 2024", "Jun 5, 2024", "May 28, 2024"];
            return (
              <Link
                key={slug}
                href={`/insights/${slug}`}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(3,21,59,0.06)] transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[2/1] w-full bg-sky">
                  <Image src={image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col p-5 flex-1">
                  <span className="inline-block self-start rounded bg-cobalt/10 px-2 py-1 text-xs font-extrabold uppercase tracking-[0.1em] text-cobalt">
                    {category}
                  </span>
                  <h3 className="mt-3 text-base font-extrabold leading-snug tracking-[-.02em] text-ink">{title}</h3>
                  <div className="mt-auto pt-4 text-xs text-ink/50 font-medium tracking-wide uppercase">
                    {dummyDates[index]} <span className="mx-1.5 opacity-50">•</span> {readTime}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="relative mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-[#03153b] px-8 py-10 sm:px-10 md:flex-row">
        <Image
          src="/canva_elements/Contact_BG.png"
          alt=""
          fill
          className="absolute inset-0 scale-110 object-cover object-right opacity-80 pointer-events-none"
        />
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl">
            Ready to turn your<br />questions into decisions?
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/90">
            Talk to our team and discover how Cobalt can help you make faster, smarter and more confident decisions.
          </p>
        </div>
        <div className="relative z-10 w-full max-w-md mt-6 md:mt-0">
          <form className="relative flex w-full items-center rounded-full bg-white p-1">
            <div className="flex items-center justify-center pl-4 pr-2 text-ink/40">
              <Mail size={18} />
            </div>
            <input
              type="email"
              placeholder="Enter your work email"
              className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-ink outline-none placeholder:text-ink/40"
              required
            />
            <button
              type="submit"
              className="bg-[#1a48e8] px-6 py-3 md:px-8 rounded-full text-white font-bold text-sm transition-colors hover:bg-cobalt-dark flex items-center justify-center whitespace-nowrap"
            >
              Talk to an Expert <ArrowRight size={16} className="ml-2 hidden sm:block" />
            </button>
          </form>
          <div className="mt-4 flex flex-wrap items-center justify-between px-2 text-xs font-medium text-white/80">
            <span className="flex items-center gap-2"><Zap size={14} className="fill-[#1a48e8] text-[#1a48e8]" /> No sales call required</span>
            <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#1a48e8]" /> We respect your privacy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
