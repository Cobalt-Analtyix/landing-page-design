import { PageIntro } from "@/components/shared/PageIntro";

export type LegalSection = { heading: string; body: string[] };

export function LegalDocument({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title}>
        {intro}
      </PageIntro>
      <article className="mx-auto max-w-4xl px-5 pb-20 lg:px-8 lg:pb-28">
        <p className="text-sm text-ink/60">Last updated: {updated}</p>
        <div className="mt-8 grid gap-9">
          {sections.map(({ heading, body }) => (
            <section key={heading}>
              <h2 className="text-xl font-extrabold tracking-[-0.02em]">{heading}</h2>
              <div className="mt-3 grid gap-3 leading-relaxed text-ink/75">
                {body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
