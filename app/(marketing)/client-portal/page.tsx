import type { Metadata } from "next";
import { LogIn } from "lucide-react";

import { CtaButton } from "@/components/ui/CtaButton";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Portal",
  description: "The Cobalt Analytix client portal is coming soon.",
  robots: { index: false },
};

export default function ClientPortalPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-20 text-center lg:py-28">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-cobalt text-white ring-8 ring-cobalt/10">
        <LogIn size={28} aria-hidden="true" />
      </div>
      <h1 className="mt-8 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
        Client portal, <span className="text-cobalt">coming soon.</span>
      </h1>
      <p className="mt-6 text-base leading-relaxed text-ink/75">
        We&apos;re building a secure place for you to follow your studies and open your results. Until it launches,
        your Cobalt Analytix contact will share project updates and findings directly. You can also reach us at{" "}
        <a href={`mailto:${contact.email}`} className="font-bold text-cobalt hover:underline">
          {contact.email}
        </a>
        .
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <CtaButton href="/contact">Contact us</CtaButton>
        <CtaButton href="/" variant="outline" arrow={false}>
          Back to home
        </CtaButton>
      </div>
    </section>
  );
}
