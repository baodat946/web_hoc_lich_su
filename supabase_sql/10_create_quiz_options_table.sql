create table if not exists public.quiz_options (
    id uuid primary key default gen_random_uuid(),
    question_id uuid not null references public.quiz_questions(id) on delete cascade,
    option_order smallint not null check (option_order between 1 and 10),
    option_text text not null,
    is_correct boolean not null default false,
    created_at timestamptz not null default timezone('utc', now()),
    unique (question_id, option_order)
);

create index if not exists idx_quiz_options_question_id on public.quiz_options(question_id);

create unique index if not exists idx_quiz_options_one_correct_per_question
on public.quiz_options(question_id)
where is_correct = true;
