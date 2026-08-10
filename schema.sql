-- Asset & Item Баталгаажуулалт — Supabase schema
-- Энэ SQL-ийг Supabase Dashboard -> SQL Editor дотор paste хийж "Run" дарна.

create table if not exists departments (
  id text primary key,
  name text not null
);

create table if not exists father_assets (
  id text primary key,
  code text,
  name text not null,
  department text,
  source text
);

create table if not exists child_assets (
  id text primary key,
  father_id text not null references father_assets(id) on delete cascade,
  name text not null,
  qty text,
  department text
);

create table if not exists items (
  id text primary key,
  code text,
  name text not null,
  category text,
  min text,
  max text,
  uom text,
  department text,              -- менежерээр баталгаажсан эзэмшигч алба нэгж (эхэндээ NULL)
  suggested_department text,    -- эх файлаас гарсан лавлагаа (баталгаагүй, зөвхөн санал)
  status text default 'needs_review',  -- needs_review | active | remove_pending | removed
  note text                     -- эх Тайлбар багана
);

-- Хэрэв та ӨМНӨ нь schema.sql-ийг ажиллуулсан бол (items хүснэгт аль хэдийн байгаа бол)
-- эдгээр мөрүүдийг тусад нь ажиллуулж, дутуу баганыг нэмнэ үү:
-- alter table items add column if not exists department text;
-- alter table items add column if not exists suggested_department text;
-- alter table items add column if not exists status text default 'needs_review';
-- alter table items add column if not exists note text;

create table if not exists links (
  id text primary key,
  child_asset_id text not null references child_assets(id) on delete cascade,
  item_id text not null references items(id) on delete cascade,
  qty text,
  verified boolean default false,
  corr_category text,
  corr_min text,
  corr_max text,
  corr_uom text
);

-- Энэ бол дотоод хэрэглээний, нэвтрэлт шаардахгүй хэрэгсэл тул
-- Row Level Security-г идэвхжүүлээд, anon key-д бүрэн эрх өгнө.
-- (Хэрэв та ирээдүйд нэвтрэлт нэмбэл эдгээр policy-г нарийсгана.)

alter table departments enable row level security;
alter table father_assets enable row level security;
alter table child_assets enable row level security;
alter table items enable row level security;
alter table links enable row level security;

create policy "allow all - departments" on departments for all using (true) with check (true);
create policy "allow all - father_assets" on father_assets for all using (true) with check (true);
create policy "allow all - child_assets" on child_assets for all using (true) with check (true);
create policy "allow all - items" on items for all using (true) with check (true);
create policy "allow all - links" on links for all using (true) with check (true);

-- ===== 11 АЛБА НЭГЖИЙГ ИДЭВХЖҮҮЛЭХ =====
-- Эхлээд полиси хасна (доторхи INSERT-с гаргалцахын тулд):
drop policy if exists "allow all - departments" on departments;

-- 11 алба нэгжийг departments хүснэгтэд оруулна:
insert into departments (id, name) values
  ('dept_wctd', 'WCTD'),
  ('dept_hsd', 'HSD'),
  ('dept_tod', 'TOD'),
  ('dept_eeod', 'EEOD'),
  ('dept_bod', 'BOD'),
  ('dept_cd', 'CD'),
  ('dept_mc', 'MC'),
  ('dept_ica', 'ICA'),
  ('dept_opr', 'OPR'),
  ('dept_sd', 'SD'),
  ('dept_ccl', 'CCL')
on conflict (id) do nothing;

-- Полиси дахин идэвхжүүлэх:
create policy "allow all - departments" on departments for all using (true) with check (true);
