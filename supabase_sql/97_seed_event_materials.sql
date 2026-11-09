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
