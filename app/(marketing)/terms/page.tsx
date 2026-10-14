import type { Metadata } from "next";

import { LegalDocument, type LegalSection } from "@/components/shared/LegalDocument";
import { LEGAL_NAME, contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply when you use the Cobalt Analytix website.",
};

const sections: LegalSection[] = [
  {
    heading: "Using this website",
    body: [
      "By accessing this website you agree to these terms. If you do not agree, please do not use the site.",
      "You agree to use the website lawfully and not to interfere with its operation, attempt to gain unauthorised access, or submit content that is unlawful, misleading or harmful.",
    ],
  },
  {
    heading: "Our content",
    body: [
      `The text, graphics, logos, articles and other material on this website belong to ${LEGAL_NAME} or its licensors and are protected by intellectual property laws.`,
      "You may read, share links to and quote short extracts of our content with attribution. You may not copy, republish or modify it for commercial purposes without our written permission.",
    ],
  },
  {
    heading: "Information, not advice",
    body: [
      "The articles and insights we publish are provided for general information. They are not professional, legal or financial advice, and you should consider your own circumstances before relying on them.",
    ],
  },
  {
    heading: "Research services",
    body: [
      `Research projects are governed by a separate agreement or proposal agreed between you and ${LEGAL_NAME}. These terms apply only to your use of the website.`,
    ],
  },
  {
    heading: "Third-party links",
    body: [
      "This website may link to third-party sites such as social networks or booking tools. We do not control those sites and are not responsible for their content or practices.",
    ],
  },
  {
    heading: "Disclaimer and liability",
    body: [
      `We work to keep the website accurate and available, but it is provided as is without warranties of any kind. To the fullest extent permitted by law, ${LEGAL_NAME} is not liable for any loss arising from your use of, or inability to use, the website.`,
    ],
  },
  {
    heading: "Changes to these terms",
    body: ["We may update these terms from time to time. Continued use of the website after a change means you accept the updated terms."],
  },
  {
    heading: "Contact us",
    body: [`Questions about these terms? Email us at ${contact.email}.`],
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Terms of Use"
      intro="The ground rules for using the Cobalt Analytix website."
      updated="October 2, 2026"
      sections={sections}
    />
  );
}
