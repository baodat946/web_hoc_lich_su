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
