const fs = require('fs');
const path = require('path');
const vm = require('vm');

const projectRoot = process.cwd();
const sqlDir = path.join(projectRoot, 'supabase_sql');
const dataSource = fs.readFileSync(path.join(projectRoot, 'js', 'data.js'), 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(dataSource + '\n;globalThis.__data = historicalData;', context);
const data = context.__data;

function sqlString(value) {
  return `'${String(value ?? '').replace(/'/g, "''")}'`;
}

function sqlNullableString(value) {
  if (value === null || value === undefined || value === '') return 'null';
  return sqlString(value);
}

function sqlBoolean(value) {
  return value ? 'true' : 'false';
}

function sqlNullableNumber(value) {
  return Number.isFinite(value) ? String(value) : 'null';
}

function toSqlDate(displayDate) {
  const match = String(displayDate).match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) {
    throw new Error(`Khong parse duoc ngay: ${displayDate}`);
  }
  const [, dd, mm, yyyy] = match;
  return `${yyyy}-${mm}-${dd}`;
}

function parseYearsLabel(label) {
  const years = String(label || '').match(/\d{4}/g) || [];
  return {
    birthYear: years[0] ? Number(years[0]) : null,
    deathYear: years[1] ? Number(years[1]) : null
  };
}

function parseEraPeriod(period) {
  const years = String(period || '').match(/\d{4}/g) || [];
  return {
    startYear: years[0] ? Number(years[0]) : null,
    endYear: years[1] ? Number(years[1]) : years[0] ? Number(years[0]) : null
  };
}

function writeFile(fileName, content) {
  fs.writeFileSync(path.join(sqlDir, fileName), content.trim() + '\n', 'utf8');
}

const eras = data.eras.filter(era => era.id !== 'all');
const eraValues = eras.map((era, index) => {
  const period = parseEraPeriod(era.period);
  return `    (${sqlString(era.id)}, ${sqlString(era.name)}, ${sqlString(era.icon)}, ${sqlString(era.period || '')}, ${sqlNullableNumber(period.startYear)}, ${sqlNullableNumber(period.endYear)}, ${index + 1})`;
}).join(',\n');

writeFile('90_seed_eras.sql', `
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
${eraValues}
on conflict (slug) do update
set
    name = excluded.name,
    icon = excluded.icon,
    period_label = excluded.period_label,
    start_year = excluded.start_year,
    end_year = excluded.end_year,
    sort_order = excluded.sort_order,
    updated_at = timezone('utc', now());
`);

const eventValues = data.events.map((event, index) => `
    (
        ${sqlString(event.id)},
        (select id from public.eras where slug = ${sqlString(event.era)}),
        ${sqlString(event.title)},
        ${sqlString(event.category)},
        date ${sqlString(toSqlDate(event.date))},
        ${sqlString(event.date)},
        ${event.year},
        ${sqlString(event.description)},
        ${sqlString(event.significance)},
        ${sqlNullableString(event.image)},
        ${sqlNullableNumber(event.stats?.days)},
        ${sqlNullableNumber(event.stats?.casualties)},
        ${sqlBoolean(Boolean(event.featured))},
        ${index + 1}
    )`).join(',');

writeFile('91_seed_events.sql', `
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
values${eventValues}
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
`);

const figureValues = data.figures.map((figure, index) => {
  const years = parseYearsLabel(figure.years);
  return `
    (
        ${sqlString(figure.id)},
        (select id from public.eras where slug = ${sqlString(figure.era)}),
        ${sqlString(figure.name)},
        ${sqlString(figure.title)},
        ${sqlNullableNumber(years.birthYear)},
        ${sqlNullableNumber(years.deathYear)},
        ${sqlString(figure.years)},
        ${sqlString(figure.description)},
        ${sqlNullableString(figure.image)},
        ${index + 1}
    )`;
}).join(',');

writeFile('92_seed_figures.sql', `
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
values${figureValues}
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
`);

const eventFigureLinks = [
  { event: 'cach-mang-thang-8', figure: 'ho-chi-minh', role: 'lãnh đạo', notes: 'Nhân vật trung tâm gắn với thắng lợi của Cách mạng Tháng Tám.', sort: 1 },
  { event: 'doc-lap-1945', figure: 'ho-chi-minh', role: 'nhân vật trung tâm', notes: 'Người đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình.', sort: 1 },
  { event: 'khang-chien-1946', figure: 'ho-chi-minh', role: 'người ra lời kêu gọi', notes: 'Gắn trực tiếp với Lời kêu gọi toàn quốc kháng chiến.', sort: 1 },
  { event: 'chien-dich-bien-gioi', figure: 'vo-nguyen-giap', role: 'chỉ huy', notes: 'Chiến dịch quân sự lớn đầu tiên do quân đội Việt Nam chủ động tiến công.', sort: 1 },
  { event: 'dien-bien-phu', figure: 'vo-nguyen-giap', role: 'tổng chỉ huy', notes: 'Nhân vật tiêu biểu gắn với chiến thắng Điện Biên Phủ.', sort: 1 },
  { event: 'hiep-dinh-geneva', figure: 'pham-van-dong', role: 'đại diện ngoại giao', notes: 'Đại diện Việt Nam tại Hội nghị Geneva.', sort: 1 },
  { event: 'tet-mau-than', figure: 'le-duan', role: 'lãnh đạo', notes: 'Gắn với vai trò lãnh đạo trong cuộc kháng chiến chống Mỹ.', sort: 1 },
  { event: 'hiep-dinh-paris', figure: 'le-duan', role: 'lãnh đạo', notes: 'Gắn với bối cảnh lãnh đạo chiến lược của giai đoạn đàm phán và thắng lợi ngoại giao.', sort: 1 },
  { event: 'chien-dich-ho-chi-minh', figure: 'le-duan', role: 'lãnh đạo', notes: 'Nhân vật lãnh đạo tiêu biểu của giai đoạn kết thúc kháng chiến chống Mỹ.', sort: 1 },
  { event: 'giai-phong-1975', figure: 'le-duan', role: 'lãnh đạo', notes: 'Gắn với thắng lợi thống nhất đất nước năm 1975.', sort: 1 },
  { event: 'giai-phong-1975', figure: 'ton-duc-thang', role: 'nguyên thủ quốc gia', notes: 'Là nguyên thủ quốc gia trong giai đoạn đất nước thống nhất.', sort: 2 }
];

const eventFigureValues = eventFigureLinks.map(link => `
    (
        (select id from public.events where slug = ${sqlString(link.event)}),
        (select id from public.figures where slug = ${sqlString(link.figure)}),
        ${sqlString(link.role)},
        ${sqlString(link.notes)},
        ${link.sort}
    )`).join(',');

writeFile('93_seed_event_figures.sql', `
insert into public.event_figures (
    event_id,
    figure_id,
    relation_role,
    notes,
    sort_order
)
values${eventFigureValues}
on conflict (event_id, figure_id) do update
set
    relation_role = excluded.relation_role,
    notes = excluded.notes,
    sort_order = excluded.sort_order;
`);

const quizQuestionLinks = {
  1: { era: 'chong-phap', event: 'cach-mang-thang-8', difficulty: 'easy' },
  2: { era: 'chong-phap', event: 'dien-bien-phu', difficulty: 'easy' },
  3: { era: 'chong-phap', event: 'doc-lap-1945', difficulty: 'easy' },
  4: { era: 'thong-nhat', event: 'giai-phong-1975', difficulty: 'easy' },
  5: { era: 'chong-phap', event: 'dien-bien-phu', difficulty: 'medium' },
  6: { era: 'chong-my', event: 'tet-mau-than', difficulty: 'easy' },
  7: { era: 'chong-my', event: 'hiep-dinh-paris', difficulty: 'easy' },
  8: { era: 'chong-my', event: 'duong-truong-son', difficulty: 'medium' },
  9: { era: 'chong-phap', event: 'dien-bien-phu', difficulty: 'medium' },
  10: { era: 'thong-nhat', event: 'chien-dich-ho-chi-minh', difficulty: 'medium' }
};

const quizQuestionValues = data.quizQuestions.map(question => {
  const link = quizQuestionLinks[question.id];
  if (!link) {
    throw new Error(`Thieu mapping cho quiz question ${question.id}`);
  }

  return `
    (
        ${question.id},
        (select id from public.eras where slug = ${sqlString(link.era)}),
        (select id from public.events where slug = ${sqlString(link.event)}),
        ${sqlString(question.question)},
        ${sqlString(question.explanation)},
        ${sqlString(link.difficulty)},
        true
    )`;
}).join(',');

writeFile('94_seed_quiz_questions.sql', `
insert into public.quiz_questions (
    question_number,
    era_id,
    event_id,
    question_text,
    explanation,
    difficulty,
    is_published
)
values${quizQuestionValues}
on conflict (question_number) do update
set
    era_id = excluded.era_id,
    event_id = excluded.event_id,
    question_text = excluded.question_text,
    explanation = excluded.explanation,
    difficulty = excluded.difficulty,
    is_published = excluded.is_published,
    updated_at = timezone('utc', now());
`);

const optionRows = [];
for (const question of data.quizQuestions) {
  question.options.forEach((option, index) => {
    optionRows.push(`    ((select id from public.quiz_questions where question_number = ${question.id}), ${index + 1}, ${sqlString(option)}, ${sqlBoolean(option === question.correct)})`);
  });
}

writeFile('95_seed_quiz_options.sql', `
insert into public.quiz_options (
    question_id,
    option_order,
    option_text,
    is_correct
)
values
${optionRows.join(',\n')}
on conflict (question_id, option_order) do update
set
    option_text = excluded.option_text,
    is_correct = excluded.is_correct;
`);

const relatedMomentRows = [];
for (const event of data.events) {
  (event.relatedMoments || []).forEach((moment, index) => {
    relatedMomentRows.push(`    ((select id from public.events where slug = ${sqlString(event.id)}), ${sqlString(moment.date || '')}, ${sqlNullableNumber(event.year)}, ${sqlString(moment.title || '')}, ${sqlString(moment.description || '')}, ${sqlNullableString(moment.significance || '')}, ${sqlNullableString(moment.location || '')}, ${sqlNullableString(moment.image || '')}, ${sqlBoolean(Boolean(moment.external))}, ${index + 1})`);
  });
}

writeFile('96_seed_event_related_moments.sql', `
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
${relatedMomentRows.join(',\n')}
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
`);

const materialRows = [];
for (const event of data.events) {
  (event.materials || []).forEach((material, index) => {
    materialRows.push(`    ((select id from public.events where slug = ${sqlString(event.id)}), ${sqlString(material.type || '')}, ${sqlString(material.title || '')}, ${sqlNullableString(material.source || '')}, ${sqlString(material.url || '')}, ${sqlNullableString(material.note || '')}, ${index + 1})`);
  });
}

writeFile('97_seed_event_materials.sql', `
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
${materialRows.join(',\n')}
on conflict (event_id, sort_order) do update
set
    material_type = excluded.material_type,
    title = excluded.title,
    source_label = excluded.source_label,
    url = excluded.url,
    note = excluded.note,
    updated_at = timezone('utc', now());
`);

console.log('Da tai sinh 90, 91, 92, 93, 94, 95, 96, 97 tu js/data.js');
