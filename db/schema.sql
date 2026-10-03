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

-- Open roles shown on /careers and /careers/[slug] (read via lib/careers.ts).
-- Add a role with an insert; hide one with: update jobs set is_open = false where slug = '...';
create table if not exists jobs (
  id bigint generated always as identity primary key,
  slug text not null unique,
  title text not null,
  type text not null,
  experience text not null,
  summary text not null,
  about text not null,
  responsibilities text[] not null default '{}',
  requirements text[] not null default '{}',
  nice_to_have text[] not null default '{}',
  perks text[] not null default '{}',
  is_open boolean not null default true,
  created_at timestamptz not null default now()
);

insert into jobs (slug, title, type, experience, summary, about, responsibilities, requirements, nice_to_have, perks)
values (
  'software-engineer-intern',
  'Software Engineer Intern',
  'Internship',
  'No experience required',
  'Learn by building real features with our engineers. Curious beginners are welcome — we will teach you the rest.',
  'You will join our small engineering team and work on the product our clients use to understand their customers. This role is built for people starting their careers: no prior experience or degree is expected, only curiosity and the will to learn.',
  array[
    'Build and improve features on our website and client-facing tools alongside a mentor',
    'Write clean, readable code and learn how to review and test it',
    'Investigate and fix bugs, starting with small, well-scoped issues',
    'Share what you learn and ask questions early and often'
  ],
  array[
    'Interest in software development and problem solving',
    'Basic familiarity with any programming language (coursework and personal projects count)',
    'Willingness to learn quickly and take feedback well',
    'Clear written and spoken communication'
  ],
  array[
    'Exposure to JavaScript, TypeScript or React',
    'A GitHub profile or small projects you can show us (not required)'
  ],
  array[
    'One-on-one mentorship from our engineers',
    'Hands-on work on real, shipped features',
    'A chance to grow with the team'
  ]
)
on conflict (slug) do nothing;

-- Fixed-window counters behind lib/rate-limit.ts (one row per key per time window).
create table if not exists rate_limits (
  key text not null,
  window_start bigint not null,
  count int not null default 0,
  primary key (key, window_start)
);
