create table if not exists public.figure_sources (
    figure_id uuid not null references public.figures(id) on delete cascade,
    source_id uuid not null references public.sources(id) on delete cascade,
    citation_note text,
    sort_order integer not null default 0,
    created_at timestamptz not null default timezone('utc', now()),
    primary key (figure_id, source_id)
);

create index if not exists idx_figure_sources_source_id on public.figure_sources(source_id);
