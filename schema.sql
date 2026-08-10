-- Asset & Item Баталгаажуулалт — Supabase schema
-- Энэ SQL-ийг Supabase Dashboard -> SQL Editor дотор paste хийж "Run" дарна.

create table if not exists departments (
  id text primary key,
  name text not null,
  password text
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
  department text,
  criticality text,
  category text,
  date_in_service text,
  asset_cost text,
  asset_type text,
  deprn_method text,
  life_months text,
  location text,
  manufacturer text,
  model text,
  serial text
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
  note text,                    -- эх Тайлбар багана
  transaction_type text,        -- Oracle: Create | Sync
  org_code text,                -- Oracle: Item Master Organization Code
  item_status text,             -- Oracle: Active | Inactive
  item_type text,               -- Oracle item type
  primary_uom text,             -- Oracle primary UOM code
  item_class text,              -- Oracle item class / template
  source_system text            -- Oracle source system code
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

-- 11 алба нэгжийг departments хүснэгтэд оруулна (нууц үгтэй):
insert into departments (id, name, password) values
  ('dept_wctd', 'WCTD', 'Wctd2026#'),
  ('dept_hsd', 'HSD', 'Hsd2026#'),
  ('dept_tod', 'TOD', 'Tod2026#'),
  ('dept_eeod', 'EEOD', 'Eeod2026#'),
  ('dept_bod', 'BOD', 'Bod2026#'),
  ('dept_cd', 'CD', 'Cd2026#'),
  ('dept_mc', 'MC', 'Mc2026#'),
  ('dept_ica', 'ICA', 'Ica2026#'),
  ('dept_opr', 'OPR', 'Opr2026#'),
  ('dept_sd', 'SD', 'Sd2026#'),
  ('dept_ccl', 'CCL', 'Ccl2026#')
on conflict (id) do update set password = excluded.password;

-- Хэрэв departments хүснэгт өмнө нь үүссэн, password багана байхгүй бол:
-- alter table departments add column if not exists password text;

-- Полиси дахин идэвхжүүлэх:
create policy "allow all - departments" on departments for all using (true) with check (true);

-- ===== ОДОО БАЙГАА DB-Д ШИНЭ ORACLE FBDI БАГАНУУД НЭМЭХ =====
-- Хэрэв хүснэгтүүд аль хэдийн үүссэн бол эдгээрийг ажиллуулж дутуу баганыг нэмнэ:
alter table items add column if not exists transaction_type text;
alter table items add column if not exists org_code text;
alter table items add column if not exists item_status text;
alter table items add column if not exists item_type text;
alter table items add column if not exists primary_uom text;
alter table items add column if not exists item_class text;
alter table items add column if not exists source_system text;

alter table child_assets add column if not exists criticality text;
alter table child_assets add column if not exists category text;
alter table child_assets add column if not exists date_in_service text;
alter table child_assets add column if not exists asset_cost text;
alter table child_assets add column if not exists asset_type text;
alter table child_assets add column if not exists deprn_method text;
alter table child_assets add column if not exists life_months text;
alter table child_assets add column if not exists location text;
alter table child_assets add column if not exists manufacturer text;
alter table child_assets add column if not exists model text;
alter table child_assets add column if not exists serial text;

-- ===== ASSET ДЭЛГЭРЭНГҮЙ МЭДЭЭЛЛИЙН БАГАНА =====
alter table father_assets add column if not exists asset_group text;
alter table father_assets add column if not exists asset_group_desc text;
alter table father_assets add column if not exists asset_category text;
alter table father_assets add column if not exists process_area text;
alter table father_assets add column if not exists photo_url text;
alter table father_assets add column if not exists manual_url text;

-- ===== ITEM ДЭЛГЭРЭНГҮЙ МЭДЭЭЛЛИЙН БАГАНА =====
alter table items add column if not exists spec text;        -- Үзүүлэлт
alter table items add column if not exists equipment text;   -- Тоноглол
alter table items add column if not exists criticality text; -- Чухал түвшин (P1/P2/P3)
alter table items add column if not exists revised_name text; -- Зассан нэр
