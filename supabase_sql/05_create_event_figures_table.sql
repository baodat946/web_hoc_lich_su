create table if not exists public.event_figures (
    event_id uuid not null references public.events(id) on delete cascade,
    figure_id uuid not null references public.figures(id) on delete cascade,
    relation_role text not null default 'related',
    notes text,
    sort_order integer not null default 0,
    created_at timestamptz not null default timezone('utc', now()),
    primary key (event_id, figure_id)
);

create index if not exists idx_event_figures_figure_id on public.event_figures(figure_id);
