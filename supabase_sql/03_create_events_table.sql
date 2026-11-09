create table if not exists public.events (
    id uuid primary key default gen_random_uuid(),
    slug text not null unique,
    era_id uuid not null references public.eras(id) on delete restrict,
    title text not null,
    category text not null,
    event_date date not null,
    display_date text not null,
    year integer not null check (year between 0 and 3000),
    description text not null,
    significance text not null,
    image_url text,
    stats_days integer check (stats_days is null or stats_days >= 0),
    stats_casualties integer check (stats_casualties is null or stats_casualties >= 0),
    is_featured boolean not null default false,
    sort_order integer not null unique,
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists idx_events_era_id on public.events(era_id);
create index if not exists idx_events_year on public.events(year);
create index if not exists idx_events_event_date on public.events(event_date);

drop trigger if exists trg_events_set_updated_at on public.events;

create trigger trg_events_set_updated_at
before update on public.events
for each row
execute function public.set_updated_at();
