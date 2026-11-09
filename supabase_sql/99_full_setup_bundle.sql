-- AUTO-GENERATED SUPABASE SETUP BUNDLE
-- Generated at: 2026-04-14 10:44:39
-- Source folder: supabase_sql

-- ==================================================
-- BEGIN FILE: 01_enable_extensions_and_helpers.sql
-- ==================================================

create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
    new.updated_at = timezone('utc', now());
    return new;
end;
$$;

-- END FILE: 01_enable_extensions_and_helpers.sql

-- ==================================================
-- BEGIN FILE: 02_create_eras_table.sql
-- ==================================================

create table if not exists public.eras (
    id uuid primary key default gen_random_uuid(),
    slug text not null unique,
    name text not null,
    icon text,
    period_label text,
    start_year integer check (start_year is null or start_year between 0 and 3000),
    end_year integer check (end_year is null or end_year between 0 and 3000),
    sort_order integer not null unique,
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now())
);

drop trigger if exists trg_eras_set_updated_at on public.eras;

create trigger trg_eras_set_updated_at
before update on public.eras
for each row
execute function public.set_updated_at();

-- END FILE: 02_create_eras_table.sql

-- ==================================================
-- BEGIN FILE: 03_create_events_table.sql
-- ==================================================

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

-- END FILE: 03_create_events_table.sql

-- ==================================================
-- BEGIN FILE: 04_create_figures_table.sql
-- ==================================================

create table if not exists public.figures (
    id uuid primary key default gen_random_uuid(),
    slug text not null unique,
    primary_era_id uuid references public.eras(id) on delete set null,
    full_name text not null,
    display_title text not null,
    birth_year integer,
    death_year integer,
    years_label text not null,
    description text not null,
    image_url text,
    sort_order integer not null unique,
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now()),
    constraint figures_birth_death_check
        check (
            birth_year is null
            or death_year is null
            or birth_year <= death_year
        )
);

create index if not exists idx_figures_primary_era_id on public.figures(primary_era_id);

drop trigger if exists trg_figures_set_updated_at on public.figures;

create trigger trg_figures_set_updated_at
before update on public.figures
for each row
execute function public.set_updated_at();

-- END FILE: 04_create_figures_table.sql

-- ==================================================
-- BEGIN FILE: 05_create_event_figures_table.sql
-- ==================================================

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

-- END FILE: 05_create_event_figures_table.sql

-- ==================================================
-- BEGIN FILE: 06_create_sources_table.sql
-- ==================================================

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

-- END FILE: 06_create_sources_table.sql

-- ==================================================
-- BEGIN FILE: 07_create_event_sources_table.sql
-- ==================================================

create table if not exists public.event_sources (
    event_id uuid not null references public.events(id) on delete cascade,
    source_id uuid not null references public.sources(id) on delete cascade,
    citation_note text,
    sort_order integer not null default 0,
    created_at timestamptz not null default timezone('utc', now()),
    primary key (event_id, source_id)
);

create index if not exists idx_event_sources_source_id on public.event_sources(source_id);

-- END FILE: 07_create_event_sources_table.sql

-- ==================================================
-- BEGIN FILE: 08_create_figure_sources_table.sql
-- ==================================================

create table if not exists public.figure_sources (
    figure_id uuid not null references public.figures(id) on delete cascade,
    source_id uuid not null references public.sources(id) on delete cascade,
    citation_note text,
    sort_order integer not null default 0,
    created_at timestamptz not null default timezone('utc', now()),
    primary key (figure_id, source_id)
);

create index if not exists idx_figure_sources_source_id on public.figure_sources(source_id);

-- END FILE: 08_create_figure_sources_table.sql

-- ==================================================
-- BEGIN FILE: 09_create_quiz_questions_table.sql
-- ==================================================

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

-- END FILE: 09_create_quiz_questions_table.sql

-- ==================================================
-- BEGIN FILE: 10_create_quiz_options_table.sql
-- ==================================================

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

-- END FILE: 10_create_quiz_options_table.sql

-- ==================================================
-- BEGIN FILE: 12_create_event_related_moments_table.sql
-- ==================================================

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

-- END FILE: 12_create_event_related_moments_table.sql

-- ==================================================
-- BEGIN FILE: 13_create_event_materials_table.sql
-- ==================================================

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

-- END FILE: 13_create_event_materials_table.sql

-- ==================================================
-- BEGIN FILE: 11_create_public_read_policies.sql
-- ==================================================

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

-- END FILE: 11_create_public_read_policies.sql

-- ==================================================
-- BEGIN FILE: 90_seed_eras.sql
-- ==================================================

insert into public.eras (
    slug,
    name,
    icon,
    period_label,
    start_year,
    end_year,
    sort_order
)
values
    ('chong-phap', 'Kháng chiến chống Pháp', '⚔️', '1945-1954', 1945, 1954, 1),
    ('chong-my', 'Kháng chiến chống Mỹ', '🛡️', '1954-1975', 1954, 1975, 2),
    ('thong-nhat', 'Thống nhất đất nước', 'VN', '1975', 1975, 1975, 3)
on conflict (slug) do update
set
    name = excluded.name,
    icon = excluded.icon,
    period_label = excluded.period_label,
    start_year = excluded.start_year,
    end_year = excluded.end_year,
    sort_order = excluded.sort_order,
    updated_at = timezone('utc', now());

-- END FILE: 90_seed_eras.sql

-- ==================================================
-- BEGIN FILE: 91_seed_events.sql
-- ==================================================

insert into public.events (
    slug,
    era_id,
    title,
    category,
    event_date,
    display_date,
    year,
    description,
    significance,
    image_url,
    stats_days,
    stats_casualties,
    is_featured,
    sort_order
)
values
    (
        'cach-mang-thang-8',
        (select id from public.eras where slug = 'chong-phap'),
        'Cách mạng Tháng Tám',
        'Cách mạng',
        date '1945-08-19',
        '19/08/1945',
        1945,
        'Cuộc cách mạng do Đảng Cộng sản Đông Dương và Mặt trận Việt Minh lãnh đạo, lật đổ chế độ quân chủ và ách đô hộ của thực dân Pháp - phát xít Nhật.',
        'Mở ra kỷ nguyên mới cho dân tộc - kỷ nguyên độc lập, tự do. Lần đầu tiên nhân dân lao động nắm chính quyền trong tay.',
        'https://file3.qdnd.vn/data/images/0/2022/07/25/huyentrang_km/19-8-1967.jpg?dpi=150&quality=100&w=870',
        null,
        null,
        true,
        1
    ),
    (
        'doc-lap-1945',
        (select id from public.eras where slug = 'chong-phap'),
        'Tuyên ngôn Độc lập',
        'Sự kiện trọng đại',
        date '1945-09-02',
        '02/09/1945',
        1945,
        'Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.',
        'Sự kiện ngày 02/09/1945 không chỉ khai sinh nước Việt Nam Dân chủ Cộng hòa mà còn xác lập vị thế pháp lý và chính trị của nhà nước mới trước quốc dân và thế giới. Đây là bước chuyển từ thắng lợi của Tổng khởi nghĩa sang sự ra đời công khai của một chế độ mới.',
        'assets/events/tuyen-ngon-doc-lap-bing.webp',
        null,
        null,
        true,
        2
    ),
    (
        'khang-chien-1946',
        (select id from public.eras where slug = 'chong-phap'),
        'Toàn quốc kháng chiến',
        'Kháng chiến',
        date '1946-12-19',
        '19/12/1946',
        1946,
        'Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh vang lên, mở đầu cuộc kháng chiến trường kỳ chống thực dân Pháp.',
        'Toàn quốc kháng chiến là bước chuyển mang tính lịch sử từ nỗ lực giữ hòa bình để xây dựng nhà nước sang cuộc chiến tranh nhân dân lâu dài bảo vệ nền độc lập của dân tộc.',
        'assets/era-stages/stage-4/image2.jpeg',
        null,
        null,
        false,
        3
    ),
    (
        'chien-dich-bien-gioi',
        (select id from public.eras where slug = 'chong-phap'),
        'Chiến dịch Biên giới Thu Đông',
        'Chiến thắng',
        date '1950-09-16',
        '16/09/1950',
        1950,
        'Chiến dịch quân sự lớn đầu tiên do quân đội Việt Nam chủ động tiến công, phá vỡ thế bao vây của thực dân Pháp ở biên giới Việt — Trung.',
        'Chiến dịch Biên giới Thu Đông 1950 phá vỡ thế bao vây, khai thông biên giới, mở đường liên lạc quốc tế và đánh dấu bước chuyển quan trọng của cuộc kháng chiến sang thế chủ động hơn.',
        'assets/era-stages/stage-4/image4.jpeg',
        29,
        8000,
        false,
        4
    ),
    (
        'dien-bien-phu',
        (select id from public.eras where slug = 'chong-phap'),
        'Chiến thắng Điện Biên Phủ',
        'Chiến thắng',
        date '1954-05-07',
        '07/05/1954',
        1954,
        'Chiến thắng "lừng lẫy năm châu, chấn động địa cầu" — đánh dấu sự thất bại hoàn toàn của thực dân Pháp tại Việt Nam.',
        'Điện Biên Phủ là thắng lợi quân sự quyết định, làm phá sản hoàn toàn nỗ lực quân sự cuối cùng của thực dân Pháp ở Đông Dương.',
        'assets/era-stages/stage-7/image1.jpeg',
        56,
        16000,
        true,
        5
    ),
    (
        'hiep-dinh-geneva',
        (select id from public.eras where slug = 'chong-phap'),
        'Hiệp định Geneva',
        'Ngoại giao',
        date '1954-07-21',
        '21/07/1954',
        1954,
        'Hiệp định đình chỉ chiến sự ở Đông Dương, chia Việt Nam tạm thời theo vĩ tuyến 17, quy định tổng tuyển cử thống nhất vào năm 1956.',
        'Hiệp định Geneva ghi nhận thắng lợi ngoại giao lớn của nhân dân Việt Nam sau khi đã giành ưu thế quyết định trên chiến trường.',
        'assets/era-stages/stage-7/image3.jpeg',
        null,
        null,
        false,
        6
    ),
    (
        'duong-truong-son',
        (select id from public.eras where slug = 'chong-my'),
        'Mở đường Trường Sơn',
        'Chiến lược',
        date '1959-05-19',
        '19/05/1959',
        1959,
        'Đoàn 559 được thành lập, bắt đầu mở tuyến đường vận tải chiến lược xuyên dãy Trường Sơn từ Bắc vào Nam.',
        'Tuyến đường huyết mạch dài hàng nghìn km đã vận chuyển hàng triệu tấn vũ khí và binh lính, quyết định thắng lợi kháng chiến.',
        'https://images.unsplash.com/photo-1504567961542-e24d9439a724?w=600',
        null,
        null,
        false,
        7
    ),
    (
        'tet-mau-than',
        (select id from public.eras where slug = 'chong-my'),
        'Tổng tiến công Tết Mậu Thân',
        'Tổng tiến công',
        date '1968-01-30',
        '30/01/1968',
        1968,
        'Cuộc tổng tiến công và nổi dậy đồng loạt tại các thành phố miền Nam, tạo bước ngoặt quan trọng trong cuộc kháng chiến chống Mỹ.',
        'Làm sụp đổ chiến lược "Chiến tranh cục bộ", buộc Mỹ phải xuống thang chiến tranh và ngồi vào bàn đàm phán.',
        'assets/events/tet-mau-than-1968-qdnd.jpg',
        null,
        null,
        true,
        8
    ),
    (
        'hiep-dinh-paris',
        (select id from public.eras where slug = 'chong-my'),
        'Hiệp định Paris',
        'Ngoại giao',
        date '1973-01-27',
        '27/01/1973',
        1973,
        'Mỹ buộc phải ký Hiệp định Paris, cam kết tôn trọng độc lập, chủ quyền, toàn vẹn lãnh thổ của Việt Nam và rút quân khỏi miền Nam.',
        'Thắng lợi ngoại giao quyết định — Mỹ phải rút quân, tạo điều kiện cho cuộc tổng tiến công giải phóng miền Nam.',
        'https://images.unsplash.com/photo-1577083552431-6e5fd01f1ece?w=600',
        null,
        null,
        false,
        9
    ),
    (
        'phuoc-long',
        (select id from public.eras where slug = 'thong-nhat'),
        'Chiến thắng Phước Long',
        'Chiến thắng',
        date '1975-01-06',
        '06/01/1975',
        1975,
        'Quân giải phóng tiến công và giải phóng hoàn toàn tỉnh Phước Long — tỉnh đầu tiên ở miền Nam được giải phóng trọn vẹn.',
        'Trận thắng "thăm dò" quyết định: chứng minh Mỹ không quay lại can thiệp, mở đường cho cuộc tổng tiến công mùa Xuân 1975.',
        'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=600',
        null,
        null,
        false,
        10
    ),
    (
        'chien-dich-ho-chi-minh',
        (select id from public.eras where slug = 'thong-nhat'),
        'Chiến dịch Hồ Chí Minh',
        'Tổng tiến công',
        date '1975-04-26',
        '26/04/1975',
        1975,
        'Chiến dịch quân sự lớn nhất trong lịch sử Việt Nam, 5 cánh quân đồng loạt tiến vào Sài Gòn từ mọi hướng.',
        'Chiến dịch quyết định cuối cùng, tạo tiền đề trực tiếp cho sự kiện lịch sử 30/4/1975.',
        'https://images.unsplash.com/photo-1555921015-5532091f6026?w=600',
        5,
        0,
        false,
        11
    ),
    (
        'giai-phong-1975',
        (select id from public.eras where slug = 'thong-nhat'),
        'Giải phóng miền Nam, thống nhất đất nước',
        'Đại thắng',
        date '1975-04-30',
        '30/04/1975',
        1975,
        'Xe tăng quân giải phóng húc đổ cổng Dinh Độc Lập, cờ giải phóng tung bay trên nóc dinh — kết thúc 30 năm chiến tranh.',
        'Hoàn thành sự nghiệp giải phóng dân tộc, thống nhất Tổ quốc, mở ra kỷ nguyên mới — kỷ nguyên cả nước đi lên chủ nghĩa xã hội.',
        'https://images.unsplash.com/photo-1555921015-5532091f6026?w=600',
        null,
        null,
        true,
        12
    )
on conflict (slug) do update
set
    era_id = excluded.era_id,
    title = excluded.title,
    category = excluded.category,
    event_date = excluded.event_date,
    display_date = excluded.display_date,
    year = excluded.year,
    description = excluded.description,
    significance = excluded.significance,
    image_url = excluded.image_url,
    stats_days = excluded.stats_days,
    stats_casualties = excluded.stats_casualties,
    is_featured = excluded.is_featured,
    sort_order = excluded.sort_order,
    updated_at = timezone('utc', now());

-- END FILE: 91_seed_events.sql

-- ==================================================
-- BEGIN FILE: 92_seed_figures.sql
-- ==================================================

insert into public.figures (
    slug,
    primary_era_id,
    full_name,
    display_title,
    birth_year,
    death_year,
    years_label,
    description,
    image_url,
    sort_order
)
values
    (
        'ho-chi-minh',
        (select id from public.eras where slug = 'chong-phap'),
        'Hồ Chí Minh',
        'Chủ tịch nước',
        1890,
        1969,
        '1890 – 1969',
        'Anh hùng giải phóng dân tộc, nhà văn hóa kiệt xuất. Người đã lãnh đạo nhân dân Việt Nam giành độc lập từ tay Pháp và Nhật.',
        'https://hochiminh.tuoitreiuh.vn/wp-content/uploads/2021/04/ChandungHCM-1890-1969.jpg',
        1
    ),
    (
        'vo-nguyen-giap',
        (select id from public.eras where slug = 'chong-phap'),
        'Võ Nguyên Giáp',
        'Đại tướng',
        1911,
        2013,
        '1911 – 2013',
        'Vị tướng huyền thoại, "Người anh cả" của Quân đội nhân dân Việt Nam. Chỉ huy chiến thắng Điện Biên Phủ lừng lẫy.',
        'https://tse3.mm.bing.net/th/id/OIP.fkOYi9YbTrZW4ZJo5byOLwHaK6?rs=1&pid=ImgDetMain&o=7&rm=3',
        2
    ),
    (
        'pham-van-dong',
        (select id from public.eras where slug = 'chong-phap'),
        'Phạm Văn Đồng',
        'Thủ tướng',
        1906,
        2000,
        '1906 – 2000',
        'Nhà cách mạng lỗi lạc, Thủ tướng Chính phủ Việt Nam trong suốt 32 năm, đại diện Việt Nam tại Hội nghị Geneva.',
        'https://tse3.mm.bing.net/th/id/OIP.NKZyxZOQY-UtmEV1z71LWAHaIR?rs=1&pid=ImgDetMain&o=7&rm=3',
        3
    ),
    (
        'truong-chinh',
        (select id from public.eras where slug = 'chong-phap'),
        'Trường Chinh',
        'Tổng Bí thư',
        1907,
        1988,
        '1907 – 1988',
        'Nhà lý luận cách mạng xuất sắc, tác giả "Đề cương về Văn hóa Việt Nam" 1943. Tổng Bí thư Đảng qua nhiều thời kỳ.',
        'https://tse3.mm.bing.net/th/id/OIP.58dSfCFbgK0n-sL5cG-iRAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
        4
    ),
    (
        'le-duan',
        (select id from public.eras where slug = 'chong-my'),
        'Lê Duẩn',
        'Tổng Bí thư',
        1907,
        1986,
        '1907 – 1986',
        'Kiến trúc sư của đường lối cách mạng miền Nam, Tổng Bí thư Đảng lãnh đạo cuộc kháng chiến chống Mỹ đến thắng lợi.',
        'https://tse1.mm.bing.net/th/id/OIP.bS4AiN-WRXfT0nzDXVaLbwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
        5
    ),
    (
        'nguyen-thi-minh-khai',
        (select id from public.eras where slug = 'chong-phap'),
        'Nguyễn Thị Minh Khai',
        'Nhà cách mạng',
        1910,
        1941,
        '1910 – 1941',
        'Nữ chiến sĩ cách mạng tiêu biểu, Bí thư Thành ủy Sài Gòn-Chợ Lớn. Biểu tượng của tinh thần bất khuất.',
        'https://bna.1cdn.vn/2024/10/19/minh-khai.jpg',
        6
    ),
    (
        'ton-duc-thang',
        (select id from public.eras where slug = 'chong-phap'),
        'Tôn Đức Thắng',
        'Chủ tịch nước',
        1888,
        1980,
        '1888 – 1980',
        'Nhà cách mạng lão thành, Chủ tịch nước kế nhiệm Hồ Chí Minh. Từng tham gia binh biến Hắc Hải năm 1919.',
        'https://khanhhoa.tdtu.edu.vn/sites/nhatrang/files/nhatrang/GioiThieu/ChuTichTonDucThang/Chu-tich-Ton-Duc-Thang.jpg',
        7
    ),
    (
        'nguyen-van-troi',
        (select id from public.eras where slug = 'chong-my'),
        'Nguyễn Văn Trỗi',
        'Anh hùng liệt sĩ',
        1940,
        1964,
        '1940 – 1964',
        'Chiến sĩ biệt động Sài Gòn, hy sinh anh dũng khi mưu sát Bộ trưởng Quốc phòng Mỹ McNamara. Biểu tượng tuổi trẻ hào hùng.',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtNGfF4SXIZxdBSOdoQiUG7vUsgi9I6odzanv0CI1tb2Gs-dSq36JvDApc1UoafvyUH5g9ayx0AgOdBAf-OD0oUiR1N_GOIzz9wLzUyTN-CN7YRkX6CzL8440SKDMH6p04qkpA29EmIwDOw2R3Usrl6gxzwFO_54dj8Ai4rjl0adt40wKBXXsN9Gb7hd8/s1600/431963903_122134216898124487_5453635784837641889_n.jpg',
        8
    )
on conflict (slug) do update
set
    primary_era_id = excluded.primary_era_id,
    full_name = excluded.full_name,
    display_title = excluded.display_title,
    birth_year = excluded.birth_year,
    death_year = excluded.death_year,
    years_label = excluded.years_label,
    description = excluded.description,
    image_url = excluded.image_url,
    sort_order = excluded.sort_order,
    updated_at = timezone('utc', now());

-- END FILE: 92_seed_figures.sql

-- ==================================================
-- BEGIN FILE: 93_seed_event_figures.sql
-- ==================================================

insert into public.event_figures (
    event_id,
    figure_id,
    relation_role,
    notes,
    sort_order
)
values
    (
        (select id from public.events where slug = 'cach-mang-thang-8'),
        (select id from public.figures where slug = 'ho-chi-minh'),
        'lãnh đạo',
        'Nhân vật trung tâm gắn với thắng lợi của Cách mạng Tháng Tám.',
        1
    ),
    (
        (select id from public.events where slug = 'doc-lap-1945'),
        (select id from public.figures where slug = 'ho-chi-minh'),
        'nhân vật trung tâm',
        'Người đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình.',
        1
    ),
    (
        (select id from public.events where slug = 'khang-chien-1946'),
        (select id from public.figures where slug = 'ho-chi-minh'),
        'người ra lời kêu gọi',
        'Gắn trực tiếp với Lời kêu gọi toàn quốc kháng chiến.',
        1
    ),
    (
        (select id from public.events where slug = 'chien-dich-bien-gioi'),
        (select id from public.figures where slug = 'vo-nguyen-giap'),
        'chỉ huy',
        'Chiến dịch quân sự lớn đầu tiên do quân đội Việt Nam chủ động tiến công.',
        1
    ),
    (
        (select id from public.events where slug = 'dien-bien-phu'),
        (select id from public.figures where slug = 'vo-nguyen-giap'),
        'tổng chỉ huy',
        'Nhân vật tiêu biểu gắn với chiến thắng Điện Biên Phủ.',
        1
    ),
    (
        (select id from public.events where slug = 'hiep-dinh-geneva'),
        (select id from public.figures where slug = 'pham-van-dong'),
        'đại diện ngoại giao',
        'Đại diện Việt Nam tại Hội nghị Geneva.',
        1
    ),
    (
        (select id from public.events where slug = 'tet-mau-than'),
        (select id from public.figures where slug = 'le-duan'),
        'lãnh đạo',
        'Gắn với vai trò lãnh đạo trong cuộc kháng chiến chống Mỹ.',
        1
    ),
    (
        (select id from public.events where slug = 'hiep-dinh-paris'),
        (select id from public.figures where slug = 'le-duan'),
        'lãnh đạo',
        'Gắn với bối cảnh lãnh đạo chiến lược của giai đoạn đàm phán và thắng lợi ngoại giao.',
        1
    ),
    (
        (select id from public.events where slug = 'chien-dich-ho-chi-minh'),
        (select id from public.figures where slug = 'le-duan'),
        'lãnh đạo',
        'Nhân vật lãnh đạo tiêu biểu của giai đoạn kết thúc kháng chiến chống Mỹ.',
        1
    ),
    (
        (select id from public.events where slug = 'giai-phong-1975'),
        (select id from public.figures where slug = 'le-duan'),
        'lãnh đạo',
        'Gắn với thắng lợi thống nhất đất nước năm 1975.',
        1
    ),
    (
        (select id from public.events where slug = 'giai-phong-1975'),
        (select id from public.figures where slug = 'ton-duc-thang'),
        'nguyên thủ quốc gia',
        'Là nguyên thủ quốc gia trong giai đoạn đất nước thống nhất.',
        2
    )
on conflict (event_id, figure_id) do update
set
    relation_role = excluded.relation_role,
    notes = excluded.notes,
    sort_order = excluded.sort_order;

-- END FILE: 93_seed_event_figures.sql

-- ==================================================
-- BEGIN FILE: 94_seed_quiz_questions.sql
-- ==================================================

insert into public.quiz_questions (
    question_number,
    era_id,
    event_id,
    question_text,
    explanation,
    difficulty,
    is_published
)
values
    (
        1,
        (select id from public.eras where slug = 'chong-phap'),
        (select id from public.events where slug = 'cach-mang-thang-8'),
        'Cách mạng Tháng Tám diễn ra vào năm nào?',
        'Cách mạng Tháng Tám năm 1945 lật đổ chế độ phong kiến và ách đô hộ thực dân, mở ra kỷ nguyên độc lập.',
        'easy',
        true
    ),
    (
        2,
        (select id from public.eras where slug = 'chong-phap'),
        (select id from public.events where slug = 'dien-bien-phu'),
        'Chiến thắng Điện Biên Phủ diễn ra vào năm nào?',
        'Chiến thắng Điện Biên Phủ diễn ra ngày 7/5/1954, kết thúc 56 ngày đêm chiến đấu anh dũng.',
        'easy',
        true
    ),
    (
        3,
        (select id from public.eras where slug = 'chong-phap'),
        (select id from public.events where slug = 'doc-lap-1945'),
        'Ai là người đọc Tuyên ngôn Độc lập năm 1945?',
        'Chủ tịch Hồ Chí Minh đã đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình ngày 2/9/1945.',
        'easy',
        true
    ),
    (
        4,
        (select id from public.eras where slug = 'thong-nhat'),
        (select id from public.events where slug = 'giai-phong-1975'),
        'Ngày Giải phóng miền Nam là ngày nào?',
        'Ngày 30/4/1975, xe tăng quân giải phóng tiến vào Dinh Độc Lập, đánh dấu mốc son giải phóng miền Nam.',
        'easy',
        true
    ),
    (
        5,
        (select id from public.eras where slug = 'chong-phap'),
        (select id from public.events where slug = 'dien-bien-phu'),
        'Chiến dịch Điện Biên Phủ kéo dài bao nhiêu ngày?',
        'Chiến dịch Điện Biên Phủ kéo dài 56 ngày đêm từ 13/3 đến 7/5/1954.',
        'medium',
        true
    ),
    (
        6,
        (select id from public.eras where slug = 'chong-my'),
        (select id from public.events where slug = 'tet-mau-than'),
        'Tổng tiến công Tết Mậu Thân diễn ra năm nào?',
        'Tổng tiến công Tết Mậu Thân diễn ra đêm 30/1/1968, mở đầu bước ngoặt lớn trong kháng chiến chống Mỹ.',
        'easy',
        true
    ),
    (
        7,
        (select id from public.eras where slug = 'chong-my'),
        (select id from public.events where slug = 'hiep-dinh-paris'),
        'Hiệp định Paris được ký kết năm nào?',
        'Hiệp định Paris được ký ngày 27/1/1973, buộc Mỹ rút quân khỏi miền Nam Việt Nam.',
        'easy',
        true
    ),
    (
        8,
        (select id from public.eras where slug = 'chong-my'),
        (select id from public.events where slug = 'duong-truong-son'),
        'Đường Trường Sơn bắt đầu được mở vào năm nào?',
        'Đoàn 559 được thành lập ngày 19/5/1959 để mở đường Trường Sơn — tuyến huyết mạch vận tải chiến lược.',
        'medium',
        true
    ),
    (
        9,
        (select id from public.eras where slug = 'chong-phap'),
        (select id from public.events where slug = 'dien-bien-phu'),
        'Ai là Đại tướng chỉ huy chiến thắng Điện Biên Phủ?',
        'Đại tướng Võ Nguyên Giáp là Tổng chỉ huy chiến dịch Điện Biên Phủ, được bạn bè quốc tế ca ngợi là một trong những vị tướng vĩ đại nhất thế kỷ XX.',
        'medium',
        true
    ),
    (
        10,
        (select id from public.eras where slug = 'thong-nhat'),
        (select id from public.events where slug = 'chien-dich-ho-chi-minh'),
        'Chiến dịch Hồ Chí Minh diễn ra trong bao nhiêu ngày?',
        'Chiến dịch Hồ Chí Minh chỉ diễn ra trong 5 ngày (26/4 – 30/4/1975) nhưng là chiến dịch lớn nhất lịch sử.',
        'medium',
        true
    )
on conflict (question_number) do update
set
    era_id = excluded.era_id,
    event_id = excluded.event_id,
    question_text = excluded.question_text,
    explanation = excluded.explanation,
    difficulty = excluded.difficulty,
    is_published = excluded.is_published,
    updated_at = timezone('utc', now());

-- END FILE: 94_seed_quiz_questions.sql

-- ==================================================
-- BEGIN FILE: 95_seed_quiz_options.sql
-- ==================================================

insert into public.quiz_options (
    question_id,
    option_order,
    option_text,
    is_correct
)
values
    ((select id from public.quiz_questions where question_number = 1), 1, '1943', false),
    ((select id from public.quiz_questions where question_number = 1), 2, '1944', false),
    ((select id from public.quiz_questions where question_number = 1), 3, '1945', true),
    ((select id from public.quiz_questions where question_number = 1), 4, '1946', false),
    ((select id from public.quiz_questions where question_number = 2), 1, '1953', false),
    ((select id from public.quiz_questions where question_number = 2), 2, '1954', true),
    ((select id from public.quiz_questions where question_number = 2), 3, '1955', false),
    ((select id from public.quiz_questions where question_number = 2), 4, '1956', false),
    ((select id from public.quiz_questions where question_number = 3), 1, 'Võ Nguyên Giáp', false),
    ((select id from public.quiz_questions where question_number = 3), 2, 'Hồ Chí Minh', true),
    ((select id from public.quiz_questions where question_number = 3), 3, 'Phạm Văn Đồng', false),
    ((select id from public.quiz_questions where question_number = 3), 4, 'Trường Chinh', false),
    ((select id from public.quiz_questions where question_number = 4), 1, '30/4/1975', true),
    ((select id from public.quiz_questions where question_number = 4), 2, '2/9/1945', false),
    ((select id from public.quiz_questions where question_number = 4), 3, '19/12/1946', false),
    ((select id from public.quiz_questions where question_number = 4), 4, '7/5/1954', false),
    ((select id from public.quiz_questions where question_number = 5), 1, '46 ngày', false),
    ((select id from public.quiz_questions where question_number = 5), 2, '56 ngày', true),
    ((select id from public.quiz_questions where question_number = 5), 3, '66 ngày', false),
    ((select id from public.quiz_questions where question_number = 5), 4, '76 ngày', false),
    ((select id from public.quiz_questions where question_number = 6), 1, '1965', false),
    ((select id from public.quiz_questions where question_number = 6), 2, '1968', true),
    ((select id from public.quiz_questions where question_number = 6), 3, '1972', false),
    ((select id from public.quiz_questions where question_number = 6), 4, '1975', false),
    ((select id from public.quiz_questions where question_number = 7), 1, '1971', false),
    ((select id from public.quiz_questions where question_number = 7), 2, '1972', false),
    ((select id from public.quiz_questions where question_number = 7), 3, '1973', true),
    ((select id from public.quiz_questions where question_number = 7), 4, '1974', false),
    ((select id from public.quiz_questions where question_number = 8), 1, '1957', false),
    ((select id from public.quiz_questions where question_number = 8), 2, '1958', false),
    ((select id from public.quiz_questions where question_number = 8), 3, '1959', true),
    ((select id from public.quiz_questions where question_number = 8), 4, '1960', false),
    ((select id from public.quiz_questions where question_number = 9), 1, 'Lê Duẩn', false),
    ((select id from public.quiz_questions where question_number = 9), 2, 'Phạm Văn Đồng', false),
    ((select id from public.quiz_questions where question_number = 9), 3, 'Võ Nguyên Giáp', true),
    ((select id from public.quiz_questions where question_number = 9), 4, 'Trường Chinh', false),
    ((select id from public.quiz_questions where question_number = 10), 1, '3 ngày', false),
    ((select id from public.quiz_questions where question_number = 10), 2, '5 ngày', true),
    ((select id from public.quiz_questions where question_number = 10), 3, '7 ngày', false),
    ((select id from public.quiz_questions where question_number = 10), 4, '10 ngày', false)
on conflict (question_id, option_order) do update
set
    option_text = excluded.option_text,
    is_correct = excluded.is_correct;

-- END FILE: 95_seed_quiz_options.sql

-- ==================================================
-- BEGIN FILE: 96_seed_event_related_moments.sql
-- ==================================================

insert into public.event_related_moments (
    event_id,
    display_date,
    year,
    title,
    description,
    significance,
    location,
    image_url,
    is_external,
    sort_order
)
values
    ((select id from public.events where slug = 'cach-mang-thang-8'), '13/08/1945', 1945, 'Ban hành Quân lệnh số 1', 'Ủy ban Khởi nghĩa toàn quốc phát lệnh, hiệu triệu toàn dân vùng dậy tổng khởi nghĩa.', 'Quân lệnh số 1 là tín hiệu hành động có tính quyết định, chuyển chủ trương khởi nghĩa thành mệnh lệnh thực tế trên phạm vi cả nước.', 'Tân Trào', 'https://th.bing.com/th/id/R.625c1b9cf5e6e65f948acfa169e35366?rik=XkBxMPOx2zmO6Q&riu=http%3a%2f%2fcuutnxpvietnam.org.vn%2fwp-content%2fuploads%2f2021%2f08%2fq2-720x955.jpg&ehk=VFdetk%2b33F%2bsvvcsWcvtlfsFZsDAa4czClx%2br7uKdxA%3d&risl=&pid=ImgRaw&r=0', false, 1),
    ((select id from public.events where slug = 'cach-mang-thang-8'), '16/08/1945', 1945, 'Đại hội Quốc dân họp ở Tân Trào', 'Đại hội thông qua chủ trương Tổng khởi nghĩa, 10 chính sách lớn của Việt Minh và cử ra Ủy ban Dân tộc Giải phóng Việt Nam.', 'Đây là sự kiện chính trị có ý nghĩa như tiền thân của Quốc hội Việt Nam, đồng thời củng cố tính chính danh cho sự lãnh đạo của cách mạng trước giờ khởi nghĩa.', 'Tân Trào', 'https://mediafile.qdnd.vn/images/2022/8/15/nnnx1608.jpg', false, 2),
    ((select id from public.events where slug = 'cach-mang-thang-8'), '19/08/1945', 1945, 'Hà Nội giành chính quyền', 'Quần chúng cách mạng và các đoàn thể cứu quốc làm chủ Quảng trường Nhà hát Lớn, mở đầu thắng lợi quyết định của Tổng khởi nghĩa.', 'Thắng lợi ở Hà Nội có tác dụng cổ vũ và dẫn dắt phong trào giành chính quyền trên phạm vi cả nước.', 'Hà Nội', 'https://bcp.cdnchinhphu.vn/thumb_w/777/Uploaded/buithuhuong/2020_08_19/19%20thang%208.jpg', false, 3),
    ((select id from public.events where slug = 'cach-mang-thang-8'), '23/08/1945', 1945, 'Khởi nghĩa thắng lợi ở Huế', 'Cố đô Huế giành chính quyền về tay nhân dân, làm lung lay tận gốc chế độ quân chủ cũ.', 'Thắng lợi ở Huế góp phần quyết định làm tan rã triều đình phong kiến, mở đường cho việc Bảo Đại thoái vị.', 'Huế', 'https://cdn.nhandan.vn/images/e2614f80f5d365abde6bcd54168d150f8ece975a7f59cafd6990ff5bc868b48aeb7065b5c81a8b9c153073956d4112f027f1e9b62e1c9e8e8027ce11485ab03c/1-7598.jpg.avif', false, 4),
    ((select id from public.events where slug = 'cach-mang-thang-8'), '25/08/1945', 1945, 'Khởi nghĩa thắng lợi ở Sài Gòn - Gia Định', 'Phong trào giành chính quyền lan tới Nam Bộ, hoàn thiện thắng lợi của Tổng khởi nghĩa trên phạm vi cả nước.', 'Thắng lợi ở Sài Gòn - Gia Định hoàn tất bước phát triển lớn của Tổng khởi nghĩa ở Nam Bộ, góp phần khẳng định chính quyền đã về tay nhân dân trên phạm vi cả nước.', 'Sài Gòn - Gia Định', null, false, 5),
    ((select id from public.events where slug = 'doc-lap-1945'), '28/08/1945', 1945, 'Chính phủ Lâm thời ra mắt quốc dân', 'Chính phủ Cách mạng Lâm thời Việt Nam Dân chủ Cộng hòa được công bố để chuẩn bị cho ngày độc lập.', 'Việc ra mắt Chính phủ Lâm thời đánh dấu bước chuyển từ bộ máy lãnh đạo Tổng khởi nghĩa sang một chính quyền trung ương công khai của quốc gia mới, chuẩn bị trực tiếp cho ngày độc lập.', 'Hà Nội', 'assets/era-stages/stage-1/image3.jpeg', false, 1),
    ((select id from public.events where slug = 'doc-lap-1945'), '30/08/1945', 1945, 'Vua Bảo Đại thoái vị', 'Chế độ quân chủ nhà Nguyễn chính thức chấm dứt, tạo cơ sở chính trị cho nhà nước mới.', 'Sự kiện Bảo Đại thoái vị chấm dứt vai trò chính trị của chế độ quân chủ nhà Nguyễn, tạo điều kiện để chính quyền cách mạng xác lập vị thế chính danh của nhà nước mới trên phạm vi toàn quốc.', 'Huế', 'assets/era-stages/stage-1/image6.jpeg', false, 2),
    ((select id from public.events where slug = 'doc-lap-1945'), '03/09/1945', 1945, 'Phiên họp đầu tiên của Chính phủ', 'Chính phủ đề ra những nhiệm vụ cấp bách như chống đói, chống dốt và tổ chức tổng tuyển cử.', 'Phiên họp đầu tiên của Chính phủ lâm thời cho thấy nhà nước mới không chỉ tuyên bố độc lập mà còn lập tức bắt tay vào giải quyết những nhiệm vụ cấp bách nhất của quốc gia.', 'Hà Nội', null, false, 3),
    ((select id from public.events where slug = 'doc-lap-1945'), '06/01/1946', 1945, 'Tổng tuyển cử đầu tiên', 'Nhân dân cả nước đi bầu Quốc hội khóa I, củng cố tính chính danh của chính quyền cách mạng.', 'Cuộc Tổng tuyển cử ngày 06/01/1946 là bước khẳng định rõ nhất bản chất dân chủ của nhà nước Việt Nam mới, đưa chính quyền cách mạng từ thắng lợi khởi nghĩa sang hình thức nhà nước có cơ sở đại diện hợp hiến và hợp pháp.', 'Toàn quốc', null, false, 4),
    ((select id from public.events where slug = 'khang-chien-1946'), '09/11/1946', 1946, 'Thông qua Hiến pháp 1946', 'Quốc hội khóa I thông qua bản Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa, củng cố nền tảng pháp lý của chế độ mới.', 'Hiến pháp 1946 xác lập nền tảng pháp lý đầu tiên của nước Việt Nam Dân chủ Cộng hòa.', 'Hà Nội', 'assets/era-stages/stage-4/image1.jpeg', false, 1),
    ((select id from public.events where slug = 'khang-chien-1946'), '18/12/1946', 1946, 'Pháp gửi tối hậu thư ở Hà Nội', 'Thực dân Pháp đòi tước quyền kiểm soát an ninh, đẩy tình hình đến bờ vực chiến tranh toàn diện.', 'Tối hậu thư của Pháp ở Hà Nội là dấu hiệu trực tiếp cho thấy thực dân Pháp quyết dùng vũ lực để áp đặt lại ách thống trị.', 'Hà Nội', null, false, 2),
    ((select id from public.events where slug = 'khang-chien-1946'), '19/12/1946', 1946, 'Cuộc chiến đấu ở Hà Nội bùng nổ', 'Các lực lượng vũ trang và nhân dân thủ đô nổ súng, giam chân địch để bảo toàn lực lượng kháng chiến lâu dài.', 'Cuộc chiến đấu ở Hà Nội mở đầu thực tế cho toàn quốc kháng chiến.', 'Hà Nội', null, false, 3),
    ((select id from public.events where slug = 'khang-chien-1946'), '20/12/1946', 1946, 'Lời kêu gọi Toàn quốc kháng chiến được truyền đi', 'Lời hiệu triệu của Chủ tịch Hồ Chí Minh lan rộng, cổ vũ toàn dân bước vào cuộc kháng chiến trường kỳ.', 'Lời kêu gọi Toàn quốc kháng chiến là văn kiện hiệu triệu có sức lay động cả dân tộc trong thời khắc quyết định.', 'Toàn quốc', null, false, 4),
    ((select id from public.events where slug = 'khang-chien-1946'), '17/02/1947', 1946, 'Trung đoàn Thủ đô rút khỏi Liên khu I', 'Lực lượng chiến đấu hoàn thành nhiệm vụ giam chân địch ở Hà Nội, chuyển sang giai đoạn kháng chiến lâu dài.', 'Việc Trung đoàn Thủ đô rút khỏi Liên khu I cho thấy nghệ thuật giam chân địch và bảo toàn lực lượng đã được thực hiện thành công.', 'Hà Nội', null, false, 5),
    ((select id from public.events where slug = 'khang-chien-1946'), '22/12/1947', 1946, 'Chiến thắng Việt Bắc Thu Đông 1947', 'Quân và dân ta đập tan cuộc tiến công quy mô lớn của Pháp lên căn cứ địa Việt Bắc, bảo vệ cơ quan đầu não kháng chiến.', 'Chiến thắng Việt Bắc Thu Đông 1947 phá tan âm mưu tiêu diệt cơ quan đầu não kháng chiến của thực dân Pháp.', 'Việt Bắc', 'assets/era-stages/stage-4/image2.jpeg', false, 6),
    ((select id from public.events where slug = 'chien-dich-bien-gioi'), '18/01/1950', 1950, 'Các nước xã hội chủ nghĩa công nhận Việt Nam', 'Bắt đầu từ Trung Quốc, nhiều nước xã hội chủ nghĩa lần lượt công nhận và đặt quan hệ ngoại giao với Việt Nam Dân chủ Cộng hòa.', 'Năm 1950, Việt Nam Dân chủ Cộng hòa phá thế cô lập trên trường quốc tế bằng thắng lợi ngoại giao rất lớn.', 'Quốc tế', null, false, 1),
    ((select id from public.events where slug = 'chien-dich-bien-gioi'), '12/02/1950', 1950, 'Lệnh Tổng động viên được ban hành', 'Chính phủ phát lệnh tổng động viên, huy động sức người, sức của cho giai đoạn phản công mới của cuộc kháng chiến.', 'Lệnh Tổng động viên thể hiện sự huy động cao độ của toàn dân cho nhiệm vụ kháng chiến.', 'Toàn quốc', 'assets/era-stages/stage-4/image3.jpeg', false, 2),
    ((select id from public.events where slug = 'chien-dich-bien-gioi'), '16/09/1950', 1950, 'Mở màn đánh Đông Khê', 'Quân ta nổ súng vào cứ điểm Đông Khê, mở đầu chiến dịch Biên giới Thu Đông 1950.', 'Trận Đông Khê mở màn cho Chiến dịch Biên giới và tạo thế chủ động cho quân ta.', 'Đông Khê', 'assets/era-stages/stage-4/image4.jpeg', false, 3),
    ((select id from public.events where slug = 'chien-dich-bien-gioi'), '18/09/1950', 1950, 'Đông Khê bị tiêu diệt', 'Cứ điểm quan trọng trên đường số 4 bị hạ, làm rung chuyển hệ thống phòng thủ của Pháp ở biên giới.', 'Việc tiêu diệt Đông Khê làm sụp đổ một mắt xích quan trọng trong hệ thống phòng thủ biên giới của Pháp.', 'Đông Khê', null, false, 4),
    ((select id from public.events where slug = 'chien-dich-bien-gioi'), '03/10/1950', 1950, 'Pháp rút khỏi Cao Bằng', 'Đối phương buộc phải bỏ Cao Bằng, tạo thời cơ cho quân ta liên tiếp đánh các cánh quân cơ động.', 'Việc Pháp rút khỏi Cao Bằng cho thấy hệ thống phòng ngự của chúng trên biên giới đã bị đẩy vào thế sụp đổ.', 'Cao Bằng', null, false, 5),
    ((select id from public.events where slug = 'chien-dich-bien-gioi'), '08/10/1950', 1950, 'Các binh đoàn ứng cứu bị đánh thiệt hại nặng', 'Quân ta chặn đánh liên tục trên đường số 4, làm tan rã ý đồ hợp điểm của quân Pháp.', 'Các binh đoàn ứng cứu bị đánh thiệt hại nặng chứng tỏ quân ta đã làm chủ nhịp phát triển của toàn chiến dịch.', 'Đường số 4', null, false, 6),
    ((select id from public.events where slug = 'chien-dich-bien-gioi'), '22/10/1950', 1950, 'Chiến dịch kết thúc thắng lợi', 'Toàn tuyến biên giới được khai thông, thế chủ động chiến lược chuyển hẳn về phía ta.', 'Chiến dịch Biên giới kết thúc thắng lợi đã mở thông đường liên lạc quốc tế và chuyển cục diện chiến tranh theo hướng có lợi cho ta.', 'Biên giới Việt - Trung', null, false, 7),
    ((select id from public.events where slug = 'dien-bien-phu'), '19/02/1951', 1954, 'Đại hội Đảng toàn quốc lần thứ II', 'Đại hội xác định đường lối kháng chiến toàn dân, toàn diện, trường kỳ và đưa Đảng Lao động Việt Nam ra hoạt động công khai.', 'Đại hội II là cột mốc quan trọng về đường lối, tổ chức và vai trò lãnh đạo của Đảng trong kháng chiến.', 'Chiêm Hóa, Tuyên Quang', 'assets/era-stages/stage-6/image1.jpeg', false, 1),
    ((select id from public.events where slug = 'dien-bien-phu'), '23/02/1952', 1954, 'Chiến thắng Hòa Bình', 'Cuộc tiến công Đông Xuân 1951-1952 kết thúc thắng lợi, phá sản một kế hoạch chiến tranh lớn của địch.', 'Chiến thắng Hòa Bình phá sản một kế hoạch chiến tranh lớn của địch và mở rộng vùng giải phóng.', 'Hòa Bình', 'assets/era-stages/stage-6/image3.jpeg', false, 2),
    ((select id from public.events where slug = 'dien-bien-phu'), '10/12/1952', 1954, 'Chiến thắng Tây Bắc', 'Chiến dịch Tây Bắc giải phóng vùng chiến lược rộng lớn, tạo điều kiện nhiều mặt cho Điện Biên Phủ sau này.', 'Chiến thắng Tây Bắc năm 1952 vừa mở rộng vùng giải phóng, vừa trực tiếp chuẩn bị địa bàn và điều kiện cho Điện Biên Phủ.', 'Tây Bắc', 'assets/era-stages/stage-6/image5.jpeg', false, 3),
    ((select id from public.events where slug = 'dien-bien-phu'), '19/12/1953', 1954, 'Ban bố Luật cải cách ruộng đất', 'Luật cải cách ruộng đất được công bố, tạo thêm chỗ dựa xã hội cho kháng chiến và động viên lực lượng nông dân.', 'Luật cải cách ruộng đất tạo thêm cơ sở xã hội, động lực chính trị và hậu phương cho cuộc kháng chiến.', 'Toàn quốc', 'assets/era-stages/stage-6/image5.jpeg', false, 4),
    ((select id from public.events where slug = 'dien-bien-phu'), '13/03/1954', 1954, 'Mở màn trận Điện Biên Phủ', 'Quân ta tiến công cụm cứ điểm Him Lam, mở đầu chiến dịch quyết chiến chiến lược.', 'Trận mở màn ngày 13/03/1954 đánh dấu thời điểm chiến dịch Điện Biên Phủ chính thức bắt đầu.', 'Điện Biên Phủ', 'assets/era-stages/stage-7/image1.jpeg', false, 5),
    ((select id from public.events where slug = 'dien-bien-phu'), '30/03/1954', 1954, 'Bước vào đợt tiến công thứ hai', 'Quân ta đánh mạnh vào khu trung tâm, làm suy sụp hệ thống phòng ngự then chốt của tập đoàn cứ điểm.', 'Đợt tiến công thứ hai làm suy sụp hệ thống phòng ngự then chốt của địch ở khu trung tâm.', 'Điện Biên Phủ', null, false, 6),
    ((select id from public.events where slug = 'dien-bien-phu'), '01/05/1954', 1954, 'Tổng công kích đợt cuối', 'Các mũi tiến công đồng loạt siết chặt khu trung tâm Mường Thanh và Hồng Cúm.', 'Tổng công kích đợt cuối là bước quyết định để kết thúc hoàn toàn chiến dịch Điện Biên Phủ.', 'Điện Biên Phủ', null, false, 7),
    ((select id from public.events where slug = 'dien-bien-phu'), '07/05/1954', 1954, 'Bắt sống tướng De Castries', 'Bộ chỉ huy địch bị đánh sập, toàn bộ tập đoàn cứ điểm Điện Biên Phủ đầu hàng.', 'Việc bắt sống tướng De Castries đánh dấu sự sụp đổ hoàn toàn của tập đoàn cứ điểm Điện Biên Phủ.', 'Mường Thanh', 'assets/era-stages/stage-7/image2.jpeg', false, 8),
    ((select id from public.events where slug = 'hiep-dinh-geneva'), '26/04/1954', 1954, 'Hội nghị Geneva khai mạc', 'Các cường quốc và các bên liên quan nhóm họp để bàn về việc lập lại hòa bình ở châu Á, trong đó có Đông Dương.', 'Hội nghị Geneva khai mạc là bước mở đầu của quá trình chuyển thắng lợi trên chiến trường thành thắng lợi ngoại giao.', 'Geneva, Thụy Sĩ', 'assets/era-stages/stage-7/image4.jpeg', false, 1),
    ((select id from public.events where slug = 'hiep-dinh-geneva'), '08/05/1954', 1954, 'Bắt đầu bàn về Đông Dương', 'Sau thắng lợi Điện Biên Phủ, vấn đề chấm dứt chiến tranh ở Đông Dương được đưa vào thương lượng trực tiếp.', 'Việc chính thức bàn về Đông Dương sau Điện Biên Phủ cho thấy chiến thắng trên chiến trường đã tạo ra tác động trực tiếp lên bàn đàm phán.', 'Geneva, Thụy Sĩ', null, false, 2),
    ((select id from public.events where slug = 'hiep-dinh-geneva'), '10/10/1954', 1954, 'Giải phóng Thủ đô Hà Nội', 'Quân dân ta tiếp quản Thủ đô, khép lại thắng lợi của chặng kết thúc kháng chiến chống Pháp và mở đầu thời kỳ mới ở miền Bắc.', 'Giải phóng Thủ đô Hà Nội là dấu mốc hoàn chỉnh của thắng lợi 1945-1954 trên địa bàn trung tâm chính trị của miền Bắc.', 'Hà Nội', 'assets/era-stages/stage-7/image5.jpeg', false, 3)
on conflict (event_id, sort_order) do update
set
    display_date = excluded.display_date,
    year = excluded.year,
    title = excluded.title,
    description = excluded.description,
    significance = excluded.significance,
    location = excluded.location,
    image_url = excluded.image_url,
    is_external = excluded.is_external,
    updated_at = timezone('utc', now());

-- END FILE: 96_seed_event_related_moments.sql

-- ==================================================
-- BEGIN FILE: 97_seed_event_materials.sql
-- ==================================================

insert into public.event_materials (
    event_id,
    material_type,
    title,
    source_label,
    url,
    note,
    sort_order
)
values
    ((select id from public.events where slug = 'cach-mang-thang-8'), 'Nguồn nội dung', 'Ngày 19-8-1945: Cách mạng Tháng Tám thành công', 'Báo Quân đội nhân dân', 'https://www.qdnd.vn/tu-lieu-ho-so/ngay-nay-nam-xua/ngay-19-8-1945-cach-mang-thang-tam-thanh-cong-700812', 'Nguồn bài viết chính cho sự kiện Cách mạng Tháng Tám.', 1),
    ((select id from public.events where slug = 'cach-mang-thang-8'), 'Ảnh minh họa', 'Trang nhất Báo Quân đội nhân dân ngày 19/08/1967', 'Báo Quân đội nhân dân', 'https://file3.qdnd.vn/data/images/0/2022/07/25/huyentrang_km/19-8-1967.jpg?dpi=150&quality=100&w=870', 'Ảnh minh họa do QĐND cung cấp, dùng để gợi nhắc dấu ấn lịch sử của Cách mạng Tháng Tám.', 2),
    ((select id from public.events where slug = 'cach-mang-thang-8'), 'Video tham khảo', 'Trang tổng hợp video liên quan trên Bing', 'Bing Video', 'https://www.bing.com/videos/riverview/relatedvideo?q=c%c3%a1ch+m%e1%ba%a1ng+th%c3%a1ng+8++n%c4%83km+1945&mid=67AA582926979379B75767AA582926979379B757&FORM=VIRE', 'Link tổng hợp để dò chủ đề, nên ưu tiên thay bằng link video gốc khi có thể.', 3),
    ((select id from public.events where slug = 'cach-mang-thang-8'), 'Video minh họa', 'Video YouTube về Cách mạng Tháng Tám năm 1945', 'YouTube', 'https://youtu.be/u7kjhRCfj2o?si=YyQw628JO33NMFVL', 'Video minh họa chung cho không khí và diễn biến của Cách mạng Tháng Tám.', 4),
    ((select id from public.events where slug = 'doc-lap-1945'), 'Video minh họa', 'Bác Hồ đọc Tuyên ngôn Độc lập', 'YouTube', 'https://youtu.be/xRKUB3fUTJM?si=6O4LgxybkxwyPKFz', 'Video tư liệu phù hợp với mốc 02/09/1945, dùng để minh họa trực tiếp cho trang Tuyên ngôn Độc lập.', 1),
    ((select id from public.events where slug = 'doc-lap-1945'), 'Ảnh tư liệu', 'Minh họa sự kiện Tuyên ngôn Độc lập', 'Tư liệu sự kiện', 'assets/events/tuyen-ngon-doc-lap-bing.webp', 'Ảnh minh họa được dùng cho thẻ sự kiện và phần chi tiết của mốc 02/09/1945.', 2),
    ((select id from public.events where slug = 'doc-lap-1945'), 'Nguồn giai đoạn', 'Giai đoạn 1945-1954: Kháng chiến và kiến quốc', 'Cổng TTĐT Chính phủ', 'https://chinhphu.vn/giai-doan-1945-1954-khang-chien-va-kien-quoc', 'Nguồn nền cho cụm bài học từ Chính phủ lâm thời đến ngày độc lập.', 3),
    ((select id from public.events where slug = 'tet-mau-than'), 'Ảnh tư liệu', 'Tân Sơn Nhất trong Tết Mậu Thân 1968', 'Báo Quân đội nhân dân', 'assets/events/tet-mau-than-1968-qdnd.jpg', 'Ảnh tư liệu chiến sự được dùng làm ảnh chính và ảnh minh họa trong trang chi tiết của sự kiện.', 1)
on conflict (event_id, sort_order) do update
set
    material_type = excluded.material_type,
    title = excluded.title,
    source_label = excluded.source_label,
    url = excluded.url,
    note = excluded.note,
    updated_at = timezone('utc', now());

-- END FILE: 97_seed_event_materials.sql
