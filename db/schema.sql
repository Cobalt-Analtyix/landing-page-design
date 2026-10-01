-- Run this once against your Neon database (SQL editor in the Neon console,
-- or `psql "$DATABASE_URL" -f db/schema.sql`) before the waitlist form will work.

create table if not exists waitlist_signups (
  id bigint generated always as identity primary key,
  email text not null unique,
  created_at timestamptz not null default now()
);

-- Backs the "Reach us" contact form (components/landing/ContactWidget.tsx via
-- app/api/contact/route.ts). Every submission is stored here; read it from the
-- Neon SQL editor:  select * from contact_submissions order by created_at desc;
create table if not exists contact_submissions (
  id bigint generated always as identity primary key,
  name text not null,
  company text,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz not null default now()
);
