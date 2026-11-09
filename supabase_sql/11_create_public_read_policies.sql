grant usage on schema public to anon, authenticated;

grant select on public.eras to anon, authenticated;
grant select on public.events to anon, authenticated;
grant select on public.figures to anon, authenticated;
grant select on public.event_figures to anon, authenticated;
grant select on public.sources to anon, authenticated;
grant select on public.event_sources to anon, authenticated;
grant select on public.figure_sources to anon, authenticated;
grant select on public.quiz_questions to anon, authenticated;
grant select on public.quiz_options to anon, authenticated;
grant select on public.event_related_moments to anon, authenticated;
grant select on public.event_materials to anon, authenticated;

alter table public.eras enable row level security;
alter table public.events enable row level security;
alter table public.figures enable row level security;
alter table public.event_figures enable row level security;
alter table public.sources enable row level security;
alter table public.event_sources enable row level security;
alter table public.figure_sources enable row level security;
alter table public.quiz_questions enable row level security;
alter table public.quiz_options enable row level security;
alter table public.event_related_moments enable row level security;
alter table public.event_materials enable row level security;

drop policy if exists public_read_eras on public.eras;
create policy public_read_eras
on public.eras
for select
to anon, authenticated
using (true);

drop policy if exists public_read_events on public.events;
create policy public_read_events
on public.events
for select
to anon, authenticated
using (true);

drop policy if exists public_read_figures on public.figures;
create policy public_read_figures
on public.figures
for select
to anon, authenticated
using (true);

drop policy if exists public_read_event_figures on public.event_figures;
create policy public_read_event_figures
on public.event_figures
for select
to anon, authenticated
using (true);

drop policy if exists public_read_sources on public.sources;
create policy public_read_sources
on public.sources
for select
to anon, authenticated
using (true);

drop policy if exists public_read_event_sources on public.event_sources;
create policy public_read_event_sources
on public.event_sources
for select
to anon, authenticated
using (true);

drop policy if exists public_read_figure_sources on public.figure_sources;
create policy public_read_figure_sources
on public.figure_sources
for select
to anon, authenticated
using (true);

drop policy if exists public_read_quiz_questions on public.quiz_questions;
create policy public_read_quiz_questions
on public.quiz_questions
for select
to anon, authenticated
using (true);

drop policy if exists public_read_quiz_options on public.quiz_options;
create policy public_read_quiz_options
on public.quiz_options
for select
to anon, authenticated
using (true);

drop policy if exists public_read_event_related_moments on public.event_related_moments;
create policy public_read_event_related_moments
on public.event_related_moments
for select
to anon, authenticated
using (true);

drop policy if exists public_read_event_materials on public.event_materials;
create policy public_read_event_materials
on public.event_materials
for select
to anon, authenticated
using (true);
