# Huong Dan Chay SQL Cho Supabase

Thu muc `supabase_sql/` duoc dat ten file theo so thu tu de de theo doi bang nao duoc tao truoc, bang nao dung cho tinh nang nao.

## Thu tu chay de xuat

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

## Bang nao dung cho tinh nang nao

- `eras`
  - dung cho bo loc giai doan tren `timeline.html`
- `events`
  - dung cho danh sach su kien, trang timeline, trang chi tiet su kien
- `figures`
  - dung cho trang nhan vat lich su
- `event_figures`
  - lien ket nhieu-nhieu giua su kien va nhan vat
  - dung de mo rong trang chi tiet sau nay
- `sources`
  - luu nguon tai lieu hoc thuat, sach, website, bao tang, archive
- `event_sources`
  - gan nguon cho su kien
- `figure_sources`
  - gan nguon cho nhan vat
- `quiz_questions`
  - luu cau hoi quiz
- `quiz_options`
  - luu dap an cho quiz
- `event_related_moments`
  - luu cac moc boi canh / su kien lien doi cua moi su kien chinh
  - dung cho timeline cong va trang chi tiet su kien
- `event_materials`
  - luu link van ban, hinh anh, video minh hoa cho tung su kien
  - dung cho map popup va trang chi tiet su kien

## Luu y quan trong

- Bo loc `Tat ca` trong giao dien hien tai la tuy chon UI, khong can luu thanh mot dong trong bang `eras`.
- Cac file `90_*` tro di la seed data de dua bo du lieu hien tai trong `js/data.js` vao PostgreSQL.
- Cac bang `sources`, `event_sources`, `figure_sources` duoc tao san de tang gia tri hoc thuat cho khoa luan, du hien tai chua seed du lieu nguon.
- Hai bang `event_related_moments` va `event_materials` duoc them de frontend Supabase co day du du lieu tuong duong voi giao dien hien tai.
