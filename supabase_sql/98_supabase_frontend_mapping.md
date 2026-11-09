# Supabase Frontend Mapping va Cach Bat Ket Noi

Tai lieu nay dung de tra loi 3 cau hoi quan trong:

1. Trong Supabase, can tao nhung bang nao?
2. Moi bang dang phuc vu phan nao tren website?
3. Can lam gi de frontend hien tai chuyen tu local data sang Supabase?

---

## 1. Tong quan luong du lieu hien tai

Frontend hien tai van la website tinh nhieu trang, khong co backend rieng.

Du lieu duoc doc theo thu tu:

1. `js/data.js`
   - bo du lieu local fallback
2. `js/supabase-config.js`
   - noi bat/tat ket noi Supabase
3. `js/data-service.js`
   - neu Supabase san sang thi doc tu DB
   - neu chua cau hinh hoac loi thi roi ve local fallback

Dieu nay co nghia la:

- Khi `enabled: false`, website van chay binh thuong bang local data.
- Khi `enabled: true` va thong tin dung, website se uu tien doc Supabase.
- Neu Supabase loi mang / sai key / thieu bang, site khong sap ngay ma van co the dung local fallback.

---

## 2. Bang nao dang phuc vu trang nao

### `eras`

Dung cho:

- bo loc giai doan tren `timeline.html`
- thong tin ten giai doan, icon, period
- phan era chip tren trang chi tiet su kien

Frontend lien quan:

- `js/data-service.js`
- `js/timeline.js`
- `js/event-detail.js`

### `events`

Dung cho:

- danh sach su kien chinh
- timeline ban do cong
- popup node tren timeline
- trang chi tiet su kien
- tim kiem toan site
- thong ke tong quan tren trang chu

Frontend lien quan:

- `js/data-service.js`
- `js/shared.js`
- `js/home.js`
- `js/timeline.js`
- `js/event-detail.js`

### `event_related_moments`

Dung cho:

- cac moc boi canh / su kien lien doi cua moi su kien chinh
- cac cham nho tren timeline cong
- muc `Boi canh / su kien lien doi` trong trang chi tiet

Frontend lien quan:

- `js/data-service.js`
- `js/timeline.js`
- `js/event-detail.js`

### `event_materials`

Dung cho:

- link van ban
- link video
- link tu lieu minh hoa
- phan source chips trong popup cua timeline
- phan `Nguon tu lieu da gan thu` tren trang chi tiet

Frontend lien quan:

- `js/data-service.js`
- `js/timeline.js`
- `js/event-detail.js`

### `figures`

Dung cho:

- trang `figures.html`
- tim kiem toan site
- thong ke nhan vat

Frontend lien quan:

- `js/data-service.js`
- `js/shared.js`
- `js/figures.js`
- `js/home.js`

### `quiz_questions`

Dung cho:

- noi dung cau hoi quiz
- giai thich dap an

Frontend lien quan:

- `js/data-service.js`
- `js/quiz.js`

### `quiz_options`

Dung cho:

- cac lua chon cua tung cau hoi
- xac dinh dap an dung

Frontend lien quan:

- `js/data-service.js`
- `js/quiz.js`

### `event_figures`

Trang hien tai chua render truc tiep, nhung bang nay da san sang cho:

- lien ket su kien voi nhan vat
- mo rong trang chi tiet su kien sau nay
- bo loc nhan vat theo su kien

### `sources`, `event_sources`, `figure_sources`

Trang hien tai chua doc truc tiep cac bang nay.

Vai tro cua nhom bang nay:

- tang gia tri hoc thuat
- cho phep gan nguon hoc thuat chuan hon trong giai doan tiep theo
- phu hop de trinh bay voi thay co rang he thong da co mo hinh du lieu trich dan

---

## 3. Mapping field chinh giua DB va frontend

### `events` -> object event trong frontend

- `slug` -> `id`
- `display_date` -> `date`
- `title` -> `title`
- `category` -> `category`
- `description` -> `description`
- `significance` -> `significance`
- `image_url` -> `image`
- `year` -> `year`
- `is_featured` -> `featured`
- `era_id` -> `era` thong qua bang `eras`
- `stats_days` / `stats_casualties` -> `stats`

### `event_related_moments` -> `relatedMoments`

- `display_date` -> `date`
- `title` -> `title`
- `description` -> `description`
- `significance` -> `significance`
- `location` -> `location`
- `image_url` -> `image`
- `is_external` -> `external`

### `event_materials` -> `materials`

- `material_type` -> `type`
- `title` -> `title`
- `source_label` -> `source`
- `url` -> `url`
- `note` -> `note`

### `figures` -> object figure trong frontend

- `slug` -> `id`
- `full_name` -> `name`
- `display_title` -> `title`
- `years_label` -> `years`
- `description` -> `description`
- `image_url` -> `image`
- `primary_era_id` -> `era`

### `quiz_questions` + `quiz_options` -> object quiz

- `question_text` -> `question`
- `option_text[]` -> `options`
- option co `is_correct = true` -> `correct`
- `explanation` -> `explanation`

---

## 4. Thu tu thao tac trong Supabase dashboard

### Buoc 1. Tao project

Trong Supabase dashboard:

1. Tao project moi
2. Cho database san sang

### Buoc 2. Mo SQL Editor

Trong project:

1. Vao `SQL Editor`
2. Chay cac file trong `supabase_sql/` theo dung thu tu da ghi trong:
   - `supabase_sql/00_run_order_and_table_map.md`

Thu tu thuc te nen chay:

1. `01_enable_extensions_and_helpers.sql`
2. `02_create_eras_table.sql`
3. `03_create_events_table.sql`
4. `04_create_figures_table.sql`
5. `05_create_event_figures_table.sql`
6. `06_create_sources_table.sql`
7. `07_create_event_sources_table.sql`
8. `08_create_figure_sources_table.sql`
9. `09_create_quiz_questions_table.sql`
10. `10_create_quiz_options_table.sql`
11. `12_create_event_related_moments_table.sql`
12. `13_create_event_materials_table.sql`
13. `11_create_public_read_policies.sql`
14. `90_seed_eras.sql`
15. `91_seed_events.sql`
16. `92_seed_figures.sql`
17. `93_seed_event_figures.sql`
18. `94_seed_quiz_questions.sql`
19. `95_seed_quiz_options.sql`
20. `96_seed_event_related_moments.sql`
21. `97_seed_event_materials.sql`

### Buoc 3. Lay thong tin API

Trong Supabase dashboard:

1. Vao `Project Settings`
2. Chon `API`
3. Copy:
   - `Project URL`
   - `anon public key`

### Buoc 4. Bat ket noi o frontend

Mo file:

- `js/supabase-config.js`

Sua thanh:

```js
window.APP_SUPABASE_CONFIG = window.APP_SUPABASE_CONFIG || {
    enabled: true,
    url: 'https://YOUR_PROJECT.supabase.co',
    anonKey: 'YOUR_ANON_KEY'
};
```

### Buoc 5. Chay lai local server

Tai thu muc project:

```powershell
python -m http.server 8000
```

Mo:

```text
http://localhost:8000
```

---

## 5. Cach kiem tra da doc Supabase that chua

Khi ket noi dung, ban co the kiem tra nhanh theo 3 cach:

### Cach 1. Sua data tren Supabase

Thu doi ten mot su kien trong bang `events`.

Neu refresh trang ma ten moi hien ra, frontend dang doc Supabase.

### Cach 2. Tat local data van khong nen dung cach nay

Khong can xoa local fallback.

Site hien tai duoc thiet ke de local fallback luon ton tai de tranh rui ro khi demo.

### Cach 3. Kiem tra hanh vi theo bang

- Sua `events` -> timeline va event detail thay doi
- Sua `figures` -> figures page thay doi
- Sua `quiz_questions` / `quiz_options` -> quiz thay doi
- Sua `event_related_moments` -> cham nho tren timeline va muc lien doi thay doi
- Sua `event_materials` -> popup timeline va nguon tu lieu trong event detail thay doi

---

## 6. Nhung file frontend dang dung Supabase

- `js/supabase-config.js`
- `js/data-service.js`
- `index.html`
- `timeline.html`
- `event.html`
- `figures.html`
- `quiz.html`

Trong cac trang tren, frontend da nap:

- Supabase JS CDN
- `js/supabase-config.js`
- `js/data-service.js`

---

## 7. Trang nao hien da ho tro du lieu tu DB

### `index.html`

Ho tro:

- thong ke tong quan
- feature cards van giu local content mo ta

### `timeline.html`

Ho tro:

- bo loc giai doan
- so luong su kien tung giai doan
- node su kien chinh
- node related moments
- materials trong popup

### `event.html`

Ho tro:

- thong tin chi tiet su kien
- related moments
- materials
- mini timeline
- dieu huong truoc / sau

### `figures.html`

Ho tro:

- doc danh sach nhan vat tu bang `figures`

### `quiz.html`

Ho tro:

- doc cau hoi tu `quiz_questions`
- doc lua chon tu `quiz_options`

---

## 8. Nhung gi nen noi voi thay co khi demo

Neu can trinh bay ngan gon, ban co the noi:

- He thong da tach du lieu khoi frontend hardcode.
- Frontend van la website tinh de de demo va de bao tri.
- Du lieu duoc quan ly tap trung tren Supabase.
- Co co che fallback local de tranh rui ro khi demo mat mang.
- CSDL da duoc mo hinh hoa thanh cac bang su kien, nhan vat, cau hoi, moc lien doi va tu lieu.

Day la diem rat de tao an tuong vi vua co tinh hoc thuat, vua co tinh thuc te khi trien khai.

---

## 9. Goi y buoc tiep theo

Sau khi ket noi Supabase thanh cong, buoc nen lam tiep la:

1. dua them nguon hoc thuat vao `sources`, `event_sources`, `figure_sources`
2. them giao dien nho hien `Dang dung Supabase` hay `Dang dung fallback local`
3. bo sung trang quan tri noi bo sau, neu muon nang cap thanh he thong quan ly hoc lieu
