import { CALENDLY_URL } from "@/lib/constants";

export const SITE_NAME = "Cobalt Analytix";

const env = (value: string | undefined) => value?.trim() || undefined;

// Contact details and social profiles come from NEXT_PUBLIC_* env vars (see .env.example).
// Optional values that are not set are simply not rendered anywhere on the site.
export const contact = {
  email: env(process.env.NEXT_PUBLIC_CONTACT_EMAIL) ?? "contact@cobaltanalytix.com",
  phone: env(process.env.NEXT_PUBLIC_CONTACT_PHONE),
  address: env(process.env.NEXT_PUBLIC_CONTACT_ADDRESS),
  bookingUrl: env(process.env.NEXT_PUBLIC_BOOKING_URL) ?? CALENDLY_URL,
};

const socialProfiles = [
  { id: "linkedin", label: "LinkedIn", url: env(process.env.NEXT_PUBLIC_LINKEDIN_URL) },
  { id: "x", label: "X", url: env(process.env.NEXT_PUBLIC_X_URL) },
  { id: "instagram", label: "Instagram", url: env(process.env.NEXT_PUBLIC_INSTAGRAM_URL) },
] as const;

export type SocialLink = { id: "linkedin" | "x" | "instagram"; label: string; url: string };

export const socials: SocialLink[] = socialProfiles.flatMap(({ id, label, url }) =>
  url ? [{ id, label, url }] : [],
);

export const navLinks = [
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About Us" },
] as const;

export const footerGroups = [
  {
    heading: "Product",
    links: [
      { href: "/#how", label: "How it works" },
      { href: "/#features", label: "Features" },
      { href: "/#solutions", label: "Solutions" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact Us" },
      { href: "/client-portal", label: "Client Portal" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/insights", label: "Insights" },
      { href: "/faq", label: "FAQ" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
    ],
  },
] as const;
