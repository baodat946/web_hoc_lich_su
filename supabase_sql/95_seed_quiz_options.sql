-- Seed đáp án cho 50 câu hỏi quiz (đồng bộ từ js/data.js)
-- Mỗi câu có 4 options, 1 is_correct = true

insert into public.quiz_options (question_id, option_text, is_correct, option_order)
select q.id, v.option_text, v.is_correct, v.option_order
from public.quiz_questions q
join (values
    -- Câu 1
    (1, '1943', false, 1), (1, '1944', false, 2), (1, '1945', true, 3), (1, '1946', false, 4),
    -- Câu 2
    (2, 'Võ Nguyên Giáp', false, 1), (2, 'Hồ Chí Minh', true, 2), (2, 'Phạm Văn Đồng', false, 3), (2, 'Trường Chinh', false, 4),
    -- Câu 3
    (3, '19/8/1945', false, 1), (3, '2/9/1945', true, 2), (3, '6/1/1946', false, 3), (3, '19/12/1946', false, 4),
    -- Câu 4
    (4, '1953', false, 1), (4, '1954', true, 2), (4, '1955', false, 3), (4, '1956', false, 4),
    -- Câu 5
    (5, 'Lê Duẩn', false, 1), (5, 'Phạm Văn Đồng', false, 2), (5, 'Võ Nguyên Giáp', true, 3), (5, 'Trường Chinh', false, 4),
    -- Câu 6
    (6, '30/4/1975', true, 1), (6, '2/9/1945', false, 2), (6, '19/12/1946', false, 3), (6, '7/5/1954', false, 4),
    -- Câu 7
    (7, '1965', false, 1), (7, '1968', true, 2), (7, '1972', false, 3), (7, '1975', false, 4),
    -- Câu 8
    (8, '1971', false, 1), (8, '1972', false, 2), (8, '1973', true, 3), (8, '1974', false, 4),
    -- Câu 9
    (9, '1957', false, 1), (9, '1958', false, 2), (9, '1959', true, 3), (9, '1960', false, 4),
    -- Câu 10
    (10, 'Paris', false, 1), (10, 'Geneva', true, 2), (10, 'Moskva', false, 3), (10, 'Bắc Kinh', false, 4),
    -- Câu 11
    (11, '2/9/1945', false, 1), (11, '6/1/1946', true, 2), (11, '19/12/1946', false, 3), (11, '7/5/1954', false, 4),
    -- Câu 12
    (12, '19/8/1945', false, 1), (12, '2/9/1945', false, 2), (12, '19/12/1946', true, 3), (12, '10/10/1954', false, 4),
    -- Câu 13
    (13, '1948', false, 1), (13, '1949', false, 2), (13, '1950', true, 3), (13, '1951', false, 4),
    -- Câu 14
    (14, 'Nhà hát Lớn Hà Nội', false, 1), (14, 'Quảng trường Ba Đình, Hà Nội', true, 2), (14, 'Phủ Chủ tịch', false, 3), (14, 'Thành Huế', false, 4),
    -- Câu 15
    (15, 'Huế', false, 1), (15, 'Sài Gòn', false, 2), (15, 'Hà Nội', true, 3), (15, 'Hải Phòng', false, 4),
    -- Câu 16
    (16, 'Chi viện sức người và vật chất cho miền Nam', true, 1), (16, 'Mở rộng giao thương quốc tế', false, 2), (16, 'Đưa dân di cư ra Bắc', false, 3), (16, 'Bảo vệ biên giới phía Bắc', false, 4),
    -- Câu 17
    (17, 'Quân đội Pháp', false, 1), (17, 'Quân Mỹ và quân đồng minh của Mỹ', true, 2), (17, 'Quân Trung Hoa Dân quốc', false, 3), (17, 'Quân Nhật', false, 4),
    -- Câu 18
    (18, 'Vĩ tuyến 13', false, 1), (18, 'Vĩ tuyến 15', false, 2), (18, 'Vĩ tuyến 17', true, 3), (18, 'Vĩ tuyến 19', false, 4),
    -- Câu 19
    (19, '3 ngày', false, 1), (19, '5 ngày', true, 2), (19, '7 ngày', false, 3), (19, '10 ngày', false, 4),
    -- Câu 20
    (20, 'Buộc Mỹ xuống thang chiến tranh và chấp nhận đàm phán', true, 1), (20, 'Buộc Pháp ký Hiệp định Giơnevơ', false, 2), (20, 'Giải phóng hoàn toàn miền Nam', false, 3), (20, 'Mở ra đường Trường Sơn', false, 4),
    -- Câu 21
    (21, '6/3/1946', true, 1), (21, '14/9/1946', false, 2), (21, '19/12/1946', false, 3), (21, '7/5/1954', false, 4),
    -- Câu 22
    (22, '6/1/1946', false, 1), (22, '6/3/1946', false, 2), (22, '14/9/1946', true, 3), (22, '19/12/1946', false, 4),
    -- Câu 23
    (23, '1949', false, 1), (23, '1950', false, 2), (23, '1951', true, 3), (23, '1952', false, 4),
    -- Câu 24
    (24, 'Khai thông biên giới Việt - Trung, mở rộng liên lạc quốc tế', true, 1), (24, 'Giải phóng hoàn toàn Nam Bộ', false, 2), (24, 'Bảo vệ Hà Nội trước quân Pháp', false, 3), (24, 'Tạo điều kiện ký Hiệp định Paris', false, 4),
    -- Câu 25
    (25, '1951', false, 1), (25, '1952', false, 2), (25, '1953', true, 3), (25, '1954', false, 4),
    -- Câu 26
    (26, '1950', false, 1), (26, '1951', false, 2), (26, '1952', true, 3), (26, '1953', false, 4),
    -- Câu 27
    (27, 'Chiến dịch Việt Bắc', false, 1), (27, 'Chiến dịch Biên giới', false, 2), (27, 'Chiến dịch Điện Biên Phủ', true, 3), (27, 'Chiến dịch Hòa Bình', false, 4),
    -- Câu 28
    (28, '26/4/1954', false, 1), (28, '7/5/1954', false, 2), (28, '8/5/1954', true, 3), (28, '20/7/1954', false, 4),
    -- Câu 29
    (29, 'Quảng Trị', false, 1), (29, 'Phước Long', true, 2), (29, 'Bình Định', false, 3), (29, 'Tây Ninh', false, 4),
    -- Câu 30
    (30, '19/5/1959', true, 1), (30, '2/9/1959', false, 2), (30, '27/1/1973', false, 3), (30, '30/4/1975', false, 4),
    -- Câu 31
    (31, 'Kế hoạch Rơve', false, 1), (31, 'Kế hoạch Đờ Lát đơ Tátxinhi', false, 2), (31, 'Kế hoạch Nava', true, 3), (31, 'Kế hoạch Staley - Taylor', false, 4),
    -- Câu 32
    (32, 'A1', false, 1), (32, 'Độc Lập', false, 2), (32, 'C1', false, 3), (32, 'Him Lam', true, 4),
    -- Câu 33
    (33, 'Hội nghị Tân Trào', false, 1), (33, 'Hội nghị Trung ương 8', false, 2), (33, 'Hội nghị Vạn Phúc', true, 3), (33, 'Hội nghị Giơnevơ', false, 4),
    -- Câu 34
    (34, 'Mất quyền chủ động chiến lược', false, 1), (34, 'Giành quyền chủ động chiến lược trên chiến trường chính Bắc Bộ', true, 2), (34, 'Chuyển hẳn sang chiến tranh ở đô thị', false, 3), (34, 'Buộc Mỹ ký Hiệp định Paris', false, 4),
    -- Câu 35
    (35, '21/7/1954', false, 1), (35, '27/1/1973', true, 2), (35, '30/4/1975', false, 3), (35, '19/5/1959', false, 4),
    -- Câu 36
    (36, 'Buộc Pháp rút quân khỏi Đông Dương', false, 1), (36, 'Chứng tỏ Mỹ khó can thiệp trở lại bằng quân sự, củng cố thời cơ giải phóng hoàn toàn miền Nam', true, 2), (36, 'Mở đường Trường Sơn', false, 3), (36, 'Mở đầu Tổng tiến công Tết Mậu Thân', false, 4),
    -- Câu 37
    (37, 'Chiến dịch Tây Bắc 1952 → Chiến dịch Biên giới 1950 → Điện Biên Phủ 1954', false, 1), (37, 'Chiến dịch Biên giới 1950 → Chiến dịch Tây Bắc 1952 → Điện Biên Phủ 1954', true, 2), (37, 'Điện Biên Phủ 1954 → Chiến dịch Biên giới 1950 → Tây Bắc 1952', false, 3), (37, 'Chiến dịch Biên giới 1950 → Điện Biên Phủ 1954 → Chiến dịch Tây Bắc 1952', false, 4),
    -- Câu 38
    (38, 'Sông Hồng', false, 1), (38, 'Sông Cửu Long', false, 2), (38, 'Sông Bến Hải', true, 3), (38, 'Sông Thu Bồn', false, 4),
    -- Câu 39
    (39, 'Khoảng 30', false, 1), (39, 'Khoảng 60', false, 2), (39, 'Hơn 100', true, 3), (39, 'Gần 200', false, 4),
    -- Câu 40
    (40, 'Giải phóng Hà Nội', false, 1), (40, 'Giải phóng Sài Gòn - Gia Định, kết thúc chiến tranh', true, 2), (40, 'Khai thông biên giới Việt - Trung', false, 3), (40, 'Mở đầu đàm phán ở Paris', false, 4),
    -- Câu 41
    (41, 'Cách mạng Tháng Tám → Tuyên ngôn Độc lập → Tổng tuyển cử 6/1/1946 → Toàn quốc kháng chiến', true, 1), (41, 'Tuyên ngôn Độc lập → Cách mạng Tháng Tám → Toàn quốc kháng chiến → Tổng tuyển cử 6/1/1946', false, 2), (41, 'Cách mạng Tháng Tám → Tổng tuyển cử 6/1/1946 → Tuyên ngôn Độc lập → Toàn quốc kháng chiến', false, 3), (41, 'Tổng tuyển cử 6/1/1946 → Cách mạng Tháng Tám → Tuyên ngôn Độc lập → Toàn quốc kháng chiến', false, 4),
    -- Câu 42
    (42, 'Vì đây là trận đầu tiên ta sử dụng xe tăng', false, 1), (42, 'Vì chiến thắng này làm phá sản Kế hoạch Nava và buộc Pháp phải đàm phán kết thúc chiến tranh', true, 2), (42, 'Vì chiến thắng này diễn ra ở miền Nam', false, 3), (42, 'Vì sau đó Mỹ ký ngay Hiệp định Paris', false, 4),
    -- Câu 43
    (43, 'Buộc Pháp công nhận độc lập của Việt Nam', false, 1), (43, 'Buộc Mỹ rút quân, tạo so sánh lực lượng mới có lợi cho cách mạng miền Nam', true, 2), (43, 'Đưa cả nước lập tức thống nhất', false, 3), (43, 'Chấm dứt ngay mọi giao tranh trên toàn Đông Dương', false, 4),
    -- Câu 44
    (44, 'Chỉ tập trung phát triển công nghiệp nhẹ', false, 1), (44, 'Xây dựng chủ nghĩa xã hội và làm hậu phương lớn cho miền Nam', true, 2), (44, 'Chuẩn bị ký Hiệp định Giơnevơ lần hai', false, 3), (44, 'Rút toàn bộ lực lượng về nông thôn', false, 4),
    -- Câu 45
    (45, 'Vì đây là tuyến đường thương mại lớn nhất Đông Dương', false, 1), (45, 'Vì bảo đảm vận chuyển liên tục người và vật chất từ Bắc vào Nam trong suốt chiến tranh', true, 2), (45, 'Vì nối Hà Nội với Hải Phòng', false, 3), (45, 'Vì là nơi diễn ra Hội nghị Paris', false, 4),
    -- Câu 46
    (46, 'Tổng tuyển cử ngày 6/1/1946', false, 1), (46, 'Chiến thắng Điện Biên Phủ', true, 2), (46, 'Mở đường Trường Sơn', false, 3), (46, 'Tết Mậu Thân 1968', false, 4),
    -- Câu 47
    (47, 'Là biên giới quốc gia lâu dài của Việt Nam', false, 1), (47, 'Là giới tuyến quân sự tạm thời, không phải ranh giới chính trị lâu dài', true, 2), (47, 'Là đường biên giữa Việt Nam và Lào', false, 3), (47, 'Là ranh giới của khu căn cứ Việt Bắc', false, 4),
    -- Câu 48
    (48, 'Chiến thắng Điện Biên Phủ', false, 1), (48, 'Thắng lợi Phước Long', true, 2), (48, 'Hiệp định Paris', false, 3), (48, 'Tổng tuyển cử 1946', false, 4),
    -- Câu 49
    (49, 'Miền Bắc hoàn thành cải cách ruộng đất', false, 1), (49, 'Thủ đô Hà Nội được giải phóng, mở đầu thời kỳ hòa bình xây dựng ở miền Bắc', true, 2), (49, 'Mỹ rút hết quân khỏi Việt Nam', false, 3), (49, 'Đường Trường Sơn được mở', false, 4),
    -- Câu 50
    (50, 'Đều là những thắng lợi quyết định, tạo bước ngoặt lớn cho cách mạng Việt Nam', true, 1), (50, 'Đều diễn ra trong cùng một năm', false, 2), (50, 'Đều là kết quả trực tiếp của Hiệp định Paris', false, 3), (50, 'Đều chỉ có ý nghĩa trong phạm vi quân sự', false, 4)
) as v(question_number, option_text, is_correct, option_order)
on q.question_number = v.question_number
on conflict (question_id, option_order) do update
set
    option_text = excluded.option_text,
    is_correct  = excluded.is_correct;
