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
