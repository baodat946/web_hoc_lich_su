create table if not exists public.event_sources (
    event_id uuid not null references public.events(id) on delete cascade,
    source_id uuid not null references public.sources(id) on delete cascade,
    citation_note text,
    sort_order integer not null default 0,
    created_at timestamptz not null default timezone('utc', now()),
    primary key (event_id, source_id)
);

create index if not exists idx_event_sources_source_id on public.event_sources(source_id);
