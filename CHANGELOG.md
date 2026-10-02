# Changelog

## 2026-10-02

### Fixed
- Re-positioned the dotted background element from the Solutions section to the Problem section.
- Added `Inter` font in `app/layout.tsx` and removed default `Arial` from `globals.css` to fix font inconsistency across the website.
- Cleaned up folder structure by moving the new root transparent images to the `/public/canva_elements` folder and deleting them from the root.


### Removed
- Old landing page: `components/landing/*` (17 components) and `hooks/*`. The new home page is self-contained and nothing referenced them.
- `components/PageChrome.tsx` (old beige page shell, used fonts that are no longer loaded).
- `public/hero-dawn.jpg`, and `CONTACT_EMAIL` / `SUPPORT_EMAIL` from `lib/constants.ts` (only the old components used them).
- Commented-out `LandingPage` import in the home page.

### Changed
- Project reorganised into `components/{layout,sections,forms,shared,ui}`. `app/page.tsx` is now a short assembly of section components (Hero, Problem, Process, Solutions, Features, InsightsPreview).
- Pages moved into the `app/(marketing)/` route group with a shared header/footer layout.
- Page copy and lists moved out of JSX into `lib/content.ts`; navigation, footer links, contact details and socials live in `lib/site.ts`.
- About, Privacy, Insights and article pages restyled to the new design. Article renderer (`lib/insights.tsx`) now uses the new palette and fonts.
- Home "Insights" cards now show the real articles and link to them (previously made-up entries).
- Nav and footer links all resolve: anchors use `/#how`, `/#features`, `/#solutions`; dead footer entries (Careers, Pricing, Case Studies, Help Center, Sample Study) removed.
- Brand colour tokens added in `globals.css`; page titles use a `%s | Cobalt Analytix` template; `metadataBase` set.
- Sitemap now includes `/contact`, `/faq` and `/terms`.

### Added
- **Pages:** `/faq`, `/terms`, `/client-portal` (coming-soon page; header, mobile menu and footer buttons point here).
- **Contact page rebuilt:** working form (name, email, company, phone, message) with validation, loading, success and error states, plus email, optional phone/address, a booking link and socials. Submits to `/api/contact`.
- **Newsletter form** in the footer, submitting to `/api/waitlist`.
- **Clickable social links** (LinkedIn, X, Instagram) via `SocialLinks`; each only appears when its URL is set.
- **Honeypot spam check** in `/api/contact` (a filled hidden `website` field is ignored).
- **Env variables** (documented in `.env.example`): `NEXT_PUBLIC_CONTACT_EMAIL`, `_CONTACT_PHONE`, `_CONTACT_ADDRESS`, `_BOOKING_URL`, `_LINKEDIN_URL`, `_X_URL`, `_INSTAGRAM_URL`. Empty optional values are hidden. Email defaults to `contact@cobaltanalytix.com`; booking URL defaults to the existing Calendly link.

### Notes for the team
- Privacy and Terms copy was written from what the site does (contact form, newsletter, analytics) and needs legal review before launch.
- Contact and newsletter forms need `DATABASE_URL` set and `db/schema.sql` applied on Neon, otherwise submissions return an error.
- Still to decide: duplicate `next.config.ts`, unused boilerplate in `public/`, unused shadcn `components/ui/button.tsx`, and the root-level `canva_*` / `company_assets` folders.
