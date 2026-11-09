create table if not exists public.event_related_moments (
    id uuid primary key default gen_random_uuid(),
    event_id uuid not null references public.events(id) on delete cascade,
    display_date text not null,
    year integer check (year is null or year between 0 and 3000),
    title text not null,
    description text not null,
    significance text,
    location text,
    image_url text,
    is_external boolean not null default false,
    sort_order smallint not null check (sort_order between 1 and 200),
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now()),
    unique (event_id, sort_order)
);

create index if not exists idx_event_related_moments_event_id
on public.event_related_moments(event_id);

create index if not exists idx_event_related_moments_year
on public.event_related_moments(year);

drop trigger if exists trg_event_related_moments_set_updated_at on public.event_related_moments;

create trigger trg_event_related_moments_set_updated_at
before update on public.event_related_moments
for each row
execute function public.set_updated_at();
