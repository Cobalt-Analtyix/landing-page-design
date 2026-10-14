import type { Metadata } from "next";

import { LegalDocument, type LegalSection } from "@/components/shared/LegalDocument";
import { LEGAL_NAME, contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Cobalt Analytix collects, uses and protects personal information on this website.",
};

const sections: LegalSection[] = [
  {
    heading: "Information we collect",
    body: [
      "When you use our contact form, we collect the name, email address, company, phone number (if you provide one) and message you submit.",
      "When you subscribe to our newsletter, we collect your email address.",
      "We also collect basic, aggregated website analytics about how visitors use the site, such as pages viewed and general device and location information, to help us understand and improve it.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use contact details to respond to your enquiry and to discuss research projects with you. We use newsletter email addresses to send research insights and company updates.",
      "We do not sell your personal information, and we do not share it with third parties for their own marketing.",
    ],
  },
  {
    heading: "Where your information is stored",
    body: [
      "Form submissions and newsletter sign-ups are stored in a managed database hosted by our infrastructure providers. Website analytics are processed by our analytics provider. These providers handle data on our behalf and only to deliver their services.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "We keep enquiries for as long as needed to respond and to maintain a record of our relationship with you. You can ask us to delete your information at any time.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can unsubscribe from our newsletter at any time by contacting us. You can also ask us to access, correct or delete the personal information we hold about you.",
    ],
  },
  {
    heading: "Research participants",
    body: [
      "Participants in the studies we run are informed about how their responses will be used before they take part. This policy covers information collected through this website.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: ["We may update this policy from time to time. The date at the top of this page shows when it was last changed."],
  },
  {
    heading: "Contact us",
    body: [`For any questions about this policy or your information, email ${LEGAL_NAME} at ${contact.email}.`],
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Privacy Policy"
      intro="We keep this simple: here is what we collect through this website, why, and the choices you have."
      updated="October 2, 2026"
      sections={sections}
    />
  );
}
