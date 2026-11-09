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
