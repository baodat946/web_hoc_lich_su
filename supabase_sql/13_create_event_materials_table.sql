create table if not exists public.event_materials (
    id uuid primary key default gen_random_uuid(),
    event_id uuid not null references public.events(id) on delete cascade,
    material_type text not null,
    title text not null,
    source_label text,
    url text not null,
    note text,
    sort_order smallint not null check (sort_order between 1 and 100),
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now()),
    unique (event_id, sort_order)
);

create index if not exists idx_event_materials_event_id
on public.event_materials(event_id);

drop trigger if exists trg_event_materials_set_updated_at on public.event_materials;

create trigger trg_event_materials_set_updated_at
before update on public.event_materials
for each row
execute function public.set_updated_at();
