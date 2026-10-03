import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-4xl px-5 pb-10 pt-14 lg:px-8 lg:pt-20">
      <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-cobalt">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-5xl">{title}</h1>
      {children && <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75">{children}</p>}
    </section>
  );
}
