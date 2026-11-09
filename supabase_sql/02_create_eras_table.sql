create table if not exists public.eras (
    id uuid primary key default gen_random_uuid(),
    slug text not null unique,
    name text not null,
    icon text,
    period_label text,
    start_year integer check (start_year is null or start_year between 0 and 3000),
    end_year integer check (end_year is null or end_year between 0 and 3000),
    sort_order integer not null unique,
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now())
);

drop trigger if exists trg_eras_set_updated_at on public.eras;

create trigger trg_eras_set_updated_at
before update on public.eras
for each row
execute function public.set_updated_at();
