create table if not exists public.quiz_questions (
    id uuid primary key default gen_random_uuid(),
    question_number integer not null unique,
    era_id uuid references public.eras(id) on delete set null,
    event_id uuid references public.events(id) on delete set null,
    question_text text not null,
    explanation text not null,
    difficulty text not null default 'medium' check (difficulty in ('easy', 'medium', 'hard')),
    is_published boolean not null default true,
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists idx_quiz_questions_era_id on public.quiz_questions(era_id);
create index if not exists idx_quiz_questions_event_id on public.quiz_questions(event_id);

drop trigger if exists trg_quiz_questions_set_updated_at on public.quiz_questions;

create trigger trg_quiz_questions_set_updated_at
before update on public.quiz_questions
for each row
execute function public.set_updated_at();
