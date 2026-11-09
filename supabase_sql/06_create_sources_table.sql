create table if not exists public.sources (
    id uuid primary key default gen_random_uuid(),
    slug text not null unique,
    source_type text not null check (
        source_type in ('textbook', 'website', 'archive', 'museum', 'journal', 'other')
    ),
    title text not null,
    author text,
    publisher text,
    publication_year integer,
    url text,
    citation_note text,
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now())
);

drop trigger if exists trg_sources_set_updated_at on public.sources;

create trigger trg_sources_set_updated_at
before update on public.sources
for each row
execute function public.set_updated_at();
