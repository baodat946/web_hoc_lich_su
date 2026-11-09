<<<<<<< HEAD
# Interactive History Timeline - Web Học Lịch Sử Việt Nam

## Tổng quan

Đây là website học lịch sử Việt Nam theo hướng trực quan, lấy giai đoạn `1945-1954` làm trọng tâm khóa luận. Dự án hiện là website tĩnh nhiều trang bằng `HTML + CSS + JavaScript`, có thêm lớp dữ liệu trung gian để có thể đọc từ `Supabase` hoặc quay về `local fallback` trong `js/data.js`.

Mục tiêu hiện tại không chỉ là hiển thị mốc sự kiện, mà là biến web thành một hệ thống học tập theo luồng:

`chọn giai đoạn -> đọc bối cảnh -> học từng chặng -> khám phá bản đồ sự kiện -> đi sâu vào từng sự kiện / mốc`

## Phạm vi học thuật chính

Phạm vi khóa luận chính thức vẫn là giai đoạn `1945-1954`, với các sự kiện trọng tâm:

- Cách mạng Tháng Tám 1945
- Tuyên ngôn Độc lập 02/09/1945
- Toàn quốc kháng chiến 19/12/1946
- Chiến dịch Biên giới Thu Đông 1950
- Chiến thắng Điện Biên Phủ 07/05/1954
- Hiệp định Geneva 21/07/1954

Dữ liệu các giai đoạn `1954-1975` và `1975` vẫn có trong mã nguồn như phần mở rộng demo, nhưng không phải trọng tâm học thuật chính của bản bảo vệ.

## Luồng học hiện tại của website

### 1. Cổng chọn giai đoạn

- `timeline.html`
- Đóng vai trò như trang chọn giai đoạn.
- Không mở bản đồ số hóa ngay từ đầu.

### 2. Trang học giai đoạn

- `era.html?era=...`
- Hiển thị:
  - bối cảnh quốc tế
  - bối cảnh trong nước
  - tình hình Việt Nam trong giai đoạn
  - các chặng phát triển chính
  - mục tiêu học tập
- Người dùng chỉ mở bản đồ số hóa khi chủ động bấm `Xem bản đồ khám phá các sự kiện`.

### 3. Trang học từng chặng

- `era-stage.html?era=...&stage=...`
- Dùng để học chi tiết từng chặng phát triển lớn trong một giai đoạn.
- Nội dung hiện được lấy và biên tập từ các file Word nguồn mà người dùng cung cấp.

### 4. Trang sự kiện / mốc lịch sử

- `event.html?id=...`
- `event.html?id=...&moment=...`
- Dùng để học chi tiết từng sự kiện lớn hoặc từng mốc liên đới.
- Ảnh và video có thể được chèn trực tiếp giữa các đoạn văn.
- Nguồn ngoài chỉ đóng vai trò `tham khảo thêm` ở cuối trang, không còn là nơi người học buộc phải rời web để đọc nội dung chính.

## Kiến trúc hiện tại

### Frontend

Website hiện có 7 trang HTML chính:

- `index.html`
- `timeline.html`
- `era.html`
- `era-stage.html`
- `event.html`
- `figures.html`
- `quiz.html`

### Lớp dữ liệu và Kiến trúc Backend (Hybrid Data Architecture)

Dự án sử dụng kiến trúc dữ liệu lai (Hybrid) để đảm bảo tính linh hoạt giữa việc phát triển nhanh và khả năng mở rộng lâu dài:

- **Lớp Dữ liệu Nội bộ (Local Data Layer - `js/data.js`):**
    - Đóng vai trò là "Single Source of Truth" trong giai đoạn phát triển và chuẩn hóa nội dung.
    - Cấu trúc dạng JSON Object phân cấp: `Eras -> EraDetails -> Stages -> Events -> Moments`.
    - **Ưu điểm:** Tốc độ truy xuất tức thì (0ms latency), hoạt động ngoại tuyến (Offline-first), dễ dàng kiểm soát phiên bản qua Git.

- **Lớp Dữ liệu Đám mây (Cloud Database Layer - `Supabase`):**
    - Sử dụng PostgreSQL làm hệ quản trị cơ sở dữ liệu quan hệ.
    - Đã thiết kế đầy đủ Schema phản chiếu cấu trúc dữ liệu nội bộ (Xem trong `supabase_sql/`).
    - Kết nối qua RESTful API được cung cấp bởi Supabase Client SDK.
    - **Mục tiêu:** Lưu trữ các nội dung động, quản lý tài khoản người dùng, lưu lịch sử làm bài Quiz và phản hồi từ AI Assistant.

- **Lớp Dịch vụ Trung gian (Data Service Layer - `js/data-service.js`):**
    - Sử dụng mô hình **Repository Pattern** để trừu tượng hóa nguồn dữ liệu.
    - Luồng xử lý: `Yêu cầu dữ liệu -> Kiểm tra cấu hình Supabase (enabled?) -> [Nếu bật: Fetch từ Cloud] -> [Nếu tắt hoặc lỗi: Read từ Local Fallback]`.
    - Cơ chế này đảm bảo website không bao giờ bị "chết" nội dung ngay cả khi gặp sự cố kết nối backend.

### Logic theo trang

- `js/shared.js`
  - navbar
  - search modal
  - AI chat modal
  - back-to-top
  - scroll progress
- `js/home.js`
- `js/timeline.js`
- `js/event-detail.js`
- `js/figures.js`
- `js/quiz.js`

### Tài liệu và dữ liệu phụ trợ

- `ai_memory/`
  - bộ nhớ nội bộ của repo
- `du_lieu_lich_su/`
  - lưu link thô, ghi chú nguồn và tư liệu tham khảo
- `supabase_sql/`
  - schema, seed và tài liệu hỗ trợ Supabase
- `assets/era-stages/`
  - ảnh trích từ các file Word nguồn cho từng chặng

## Trạng thái dữ liệu hiện tại

Theo `js/data.js`, website hiện có:

- 12 sự kiện lịch sử
- 8 nhân vật lịch sử
- 10 câu hỏi quiz
- 4 mục trong `eras`:
  - `all`
  - `chong-phap`
  - `chong-my`
  - `thong-nhat`
- 3 `eraDetails` thực tế:
  - `chong-phap`
  - `chong-my`
  - `thong-nhat`

Riêng giai đoạn `1945-1954`:

- đã định nghĩa đủ 7 chặng phát triển
- đã hoàn thiện nội dung chi tiết cho cả 7 chặng:
  - `stage-1`
  - `stage-2`
  - `stage-3`
  - `stage-4`
  - `stage-5`
  - `stage-6`
  - `stage-7`
- đã trích ảnh từ Word cho:
  - `assets/era-stages/stage-1/`
  - `assets/era-stages/stage-3/`
  - `assets/era-stages/stage-4/`
  - `assets/era-stages/stage-6/`
  - `assets/era-stages/stage-7/`

Ngoài ra:

- nội dung tóm tắt trên bản đồ số hóa của cụm trọng tâm `1945-1954` đã được đồng bộ từ dữ liệu chặng
- sau vòng rà soát hiện tại, không còn node nào trong cụm này bị quá mỏng về nội dung chữ

## Các chức năng đã có

### 1. Trang chủ

- hero section
- thống kê tổng quan
- feature cards

### 2. Học theo giai đoạn

- `timeline.html` là cổng chọn giai đoạn
- `era.html` là bài học tổng quan của giai đoạn
- bản đồ số hóa chỉ mở sau khi người học chủ động yêu cầu

### 3. Học theo chặng

- `era-stage.html` hiển thị chi tiết từng chặng
- có thể chèn ảnh xen giữa bài
- có phần ghi nhớ nhanh, câu hỏi tự ôn tập và liên kết sang các sự kiện tiêu biểu

### 4. Học theo sự kiện / mốc

- `event.html` hỗ trợ:
  - trang sự kiện chính
  - trang mốc liên đới
- có thể hiển thị:
  - phần khái quát
  - phần học tập có cấu trúc
  - ảnh / video chèn trực tiếp
  - câu hỏi ôn tập
  - nguồn tham khảo cuối trang

### 5. Nhân vật lịch sử

- `figures.html`
- đọc dữ liệu qua lớp `data-service`

### 6. Quiz

- `quiz.html`
- quiz 10 câu hỏi
- có đáp án và giải thích

### 7. Tìm kiếm và AI chat mock

- search modal toàn site
- AI chat hiện vẫn là mock theo keyword

### 8. Hạ tầng Supabase

- frontend đã sẵn sàng kết nối Supabase
- đã có file cấu hình và bộ SQL
- tuy nhiên ở thời điểm hiện tại, nội dung học liệu dài vẫn đang được chuẩn hóa trước trong `js/data.js`

## Cách chạy dự án

### Cách 1. Server cục bộ

```bash
python -m http.server 8000
```

Sau đó truy cập:

```text
http://localhost:8000
```

### Cách 2. Live Server trong VS Code

- cài extension `Live Server`
- mở `index.html`
- chọn `Open with Live Server`

## Trạng thái và Lộ trình Triển khai Backend (Supabase)
 
- `js/supabase-config.js` đã được cấu hình đầy đủ `URL` và `Service Key`.
- **Trạng thái hiện tại:** `enabled: false` (Chế độ duy trì dữ liệu Local).
- **Lý do chưa kích hoạt chính thức làm nguồn chính:**
    1. **Chu kỳ lặp (Iteration Cycle):** Nội dung lịch sử giai đoạn `1945-1954` đang trong quá trình rà soát và tinh chỉnh câu chữ. Việc sửa đổi trên file JSON/JS cục bộ cho phép xem kết quả tức thì mà không bị ảnh hưởng bởi độ trễ mạng hoặc giới hạn API.
    2. **Đảm bảo tính sẵn sàng (Availability):** Trong buổi bảo vệ khóa luận, việc sử dụng dữ liệu Local giúp loại bỏ hoàn toàn rủi ro về kết nối internet hoặc lỗi dịch vụ từ bên thứ ba.
    3. **Tính nhất quán (Consistency):** Khi nội dung đã được chuẩn hóa 100% và đóng gói ổn định, việc đồng bộ (Sync) lên Supabase sẽ được thực hiện một lần duy nhất để đảm bảo tính nhất quán giữa bản offline và online.
- **Kế hoạch tiếp theo:** Sau khi nghiệm thu nội dung, sẽ bật `enabled: true` và thực hiện `migration` dữ liệu từ `js/data.js` lên các bảng PostgreSQL trên Supabase.

## Hạn chế hiện tại

- một số mốc của `1945-1954` vẫn còn thiếu ảnh minh họa riêng
- video minh họa chưa phủ đều cho toàn bộ sự kiện / mốc
- một số ảnh vẫn mang tính minh họa, chưa phải toàn bộ đều là tư liệu lịch sử chuẩn hóa
- AI chat vẫn là mock
- Supabase chưa phải nguồn học liệu chính thức cho nội dung dài hiện tại

## Hướng phát triển tiếp theo

- tiếp tục đồng bộ sâu nội dung chặng với trang sự kiện / mốc khi có thêm tư liệu
- chuẩn hóa ảnh, video và caption minh họa
- đưa cấu trúc học liệu đã ổn định sang Supabase
- sau đó mới mở rộng đều hơn cho các giai đoạn `1954-1975` và `1975`

---

**Made for Vietnamese students**

*Học lịch sử - Hiểu hiện tại - Hướng tương lai*
=======
# web_hoc_lich_su
>>>>>>> 377e0b8c0ad5c3b582a6d31877fb2ccf95385081
