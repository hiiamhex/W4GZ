-- W4GZ on-site forms (brief Update 8) — own Postgres schema.
-- Run once in your Supabase/Postgres project. The app writes server-side only,
-- via the service role; row-level security blocks the anon/public role entirely.

create extension if not exists "pgcrypto";

create table if not exists public.form_submissions (
  id          uuid primary key default gen_random_uuid(),
  kind        text not null check (kind in ('apply', 'graduation')),
  data        jsonb not null,           -- the answers (or {"enc": "..."} if app-layer encrypted)
  ip_hash     text,                     -- hashed, never the raw IP
  created_at  timestamptz not null default now()
);

create index if not exists form_submissions_kind_created_idx
  on public.form_submissions (kind, created_at desc);

-- Lock it down: only the service-role key (server-side) may read/write.
alter table public.form_submissions enable row level security;
-- (No policies for anon/authenticated → those roles get nothing. The service
--  role bypasses RLS by design, which is what the Route Handlers use.)
