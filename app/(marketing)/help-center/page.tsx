import type { Metadata } from "next";

import { CtaBanner } from "@/components/shared/CtaBanner";
import { PageIntro } from "@/components/shared/PageIntro";

export const metadata: Metadata = {
  title: "Help Center",
  description: "Find guides, troubleshooting, and support for Cobalt Analytix.",
};

export default function HelpCenterPage() {
  return (
    <>
      <PageIntro eyebrow="Help Center" title="How can we help?">
        Find resources, guides, and troubleshooting to get the most out of Cobalt Analytix. 
        If you need further assistance, our support team is ready to help.
      </PageIntro>

      <section className="mx-auto max-w-4xl px-5 pb-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-cobalt/10 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-extrabold text-ink">Getting Started</h3>
            <p className="mt-2 text-ink/70 text-sm leading-relaxed">
              Learn the basics of setting up your account, creating your first study, and understanding the dashboard.
            </p>
          </div>
          <div className="rounded-xl border border-cobalt/10 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-extrabold text-ink">Billing & Subscriptions</h3>
            <p className="mt-2 text-ink/70 text-sm leading-relaxed">
              Information on pay-per-study pricing, managing payment methods, and invoices.
            </p>
          </div>
          <div className="rounded-xl border border-cobalt/10 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-extrabold text-ink">Methodology</h3>
            <p className="mt-2 text-ink/70 text-sm leading-relaxed">
              Deep dive into how our AI-powered analysis works, panel quality, and research rigor.
            </p>
          </div>
          <div className="rounded-xl border border-cobalt/10 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-extrabold text-ink">Account Settings</h3>
            <p className="mt-2 text-ink/70 text-sm leading-relaxed">
              Manage your team members, notification preferences, and privacy settings.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner title="Still need help?" copy="Our support team is available to assist you." />
    </>
  );
}
