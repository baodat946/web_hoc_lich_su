create table if not exists public.figures (
    id uuid primary key default gen_random_uuid(),
    slug text not null unique,
    primary_era_id uuid references public.eras(id) on delete set null,
    full_name text not null,
    display_title text not null,
    birth_year integer,
    death_year integer,
    years_label text not null,
    description text not null,
    image_url text,
    sort_order integer not null unique,
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now()),
    constraint figures_birth_death_check
        check (
            birth_year is null
            or death_year is null
            or birth_year <= death_year
        )
);

create index if not exists idx_figures_primary_era_id on public.figures(primary_era_id);

drop trigger if exists trg_figures_set_updated_at on public.figures;

create trigger trg_figures_set_updated_at
before update on public.figures
for each row
execute function public.set_updated_at();
