// ==================== DATA SERVICE: SUPABASE + LOCAL FALLBACK ====================
(function initAppDataService(global) {
    const DEFAULT_ERA_ID = 'chong-phap';
    const FALLBACK_DATA = JSON.parse(JSON.stringify(historicalData));
    let cachedData = null;
    let initPromise = null;
    let activeSource = 'local';
    let supabaseClient = null;

    function cloneFallbackData() {
        return JSON.parse(JSON.stringify(FALLBACK_DATA));
    }

    function getSupabaseConfig() {
        return global.APP_SUPABASE_CONFIG || {};
    }

    function hasSupabaseConfig(config) {
        return Boolean(
            config.enabled &&
            config.url &&
            config.anonKey &&
            global.supabase &&
            typeof global.supabase.createClient === 'function'
        );
    }

    function getLocalData() {
        return cloneFallbackData();
    }

    function parseFallbackYearFromDate(displayDate, fallbackYear) {
        const match = String(displayDate || '').match(/(\d{4})$/);
        return match ? Number(match[1]) : fallbackYear;
    }

    function createSupabaseBrowserClient(config) {
        if (supabaseClient) {
            return supabaseClient;
        }

        supabaseClient = global.supabase.createClient(config.url, config.anonKey, {
            auth: {
                persistSession: false,
                autoRefreshToken: false,
                detectSessionInUrl: false
            }
        });

        return supabaseClient;
    }

    async function runSelect(queryPromise, { tableName, optional = false } = {}) {
        const { data, error } = await queryPromise;

        if (error) {
            if (optional) {
                console.warn(`[appDataService] Optional table "${tableName}" is unavailable: ${error.message}`);
                return [];
            }

            throw error;
        }

        return data || [];
    }

    function groupRowsBy(rows, key) {
        return rows.reduce((map, row) => {
            const groupKey = row[key];
            if (!map.has(groupKey)) {
                map.set(groupKey, []);
            }
            map.get(groupKey).push(row);
            return map;
        }, new Map());
    }

    function deriveStats(baseStats, events, figures) {
        if (!events.length && !figures.length) {
            return { ...baseStats };
        }

        const eventYears = events.map(event => event.year).filter(Number.isFinite);
        const minYear = eventYears.length ? Math.min(...eventYears) : null;
        const maxYear = eventYears.length ? Math.max(...eventYears) : null;

        return {
            ...baseStats,
            events: events.length || baseStats.events,
            figures: figures.length || baseStats.figures,
            years: minYear !== null && maxYear !== null ? maxYear - minYear + 1 : baseStats.years,
            battles: baseStats.battles
        };
    }

    function buildEraList(eraRows) {
        const allEra = FALLBACK_DATA.eras.find(era => era.id === 'all');
        const remoteEras = eraRows.map(row => ({
            id: row.slug,
            name: row.name,
            icon: row.icon || '',
            period: row.period_label || ''
        }));

        return allEra ? [allEra, ...remoteEras] : remoteEras;
    }

    function buildEventList(eventRows, erasByUuid, relatedRows, materialRows) {
        const relatedByEventId = groupRowsBy(relatedRows, 'event_id');
        const materialsByEventId = groupRowsBy(materialRows, 'event_id');

        return eventRows.map(row => {
            const eventId = row.id;
            const stats = {};

            if (typeof row.stats_days === 'number') {
                stats.days = row.stats_days;
            }

            if (typeof row.stats_casualties === 'number') {
                stats.casualties = row.stats_casualties;
            }

            return {
                id: row.slug,
                year: row.year,
                date: row.display_date,
                title: row.title,
                category: row.category,
                description: row.description,
                significance: row.significance,
                image: row.image_url || '',
                era: erasByUuid.get(row.era_id)?.slug || DEFAULT_ERA_ID,
                featured: Boolean(row.is_featured),
                ...(Object.keys(stats).length ? { stats } : {}),
                relatedMoments: (relatedByEventId.get(eventId) || [])
                    .sort((a, b) => a.sort_order - b.sort_order)
                    .map(moment => ({
                        id: `${row.slug}-related-${moment.sort_order}`,
                        date: moment.display_date,
                        title: moment.title,
                        description: moment.description,
                        significance: moment.significance || '',
                        location: moment.location || '',
                        external: Boolean(moment.is_external),
                        image: moment.image_url || row.image_url || ''
                    })),
                materials: (materialsByEventId.get(eventId) || [])
                    .sort((a, b) => a.sort_order - b.sort_order)
                    .map(material => ({
                        type: material.material_type,
                        title: material.title,
                        source: material.source_label || '',
                        url: material.url,
                        note: material.note || ''
                    }))
            };
        });
    }

    function buildFigureList(figureRows, erasByUuid) {
        return figureRows.map(row => ({
            id: row.slug,
            name: row.full_name,
            title: row.display_title,
            years: row.years_label,
            description: row.description,
            image: row.image_url || '',
            era: erasByUuid.get(row.primary_era_id)?.slug || DEFAULT_ERA_ID
        }));
    }

    function buildQuizList(questionRows, optionRows) {
        const optionsByQuestionId = groupRowsBy(optionRows, 'question_id');

        return questionRows.map(row => {
            const options = (optionsByQuestionId.get(row.id) || [])
                .sort((a, b) => a.option_order - b.option_order);
            const correctOption = options.find(option => option.is_correct);

            return {
                id: row.question_number,
                question: row.question_text,
                options: options.map(option => option.option_text),
                correct: correctOption ? correctOption.option_text : '',
                explanation: row.explanation
            };
        });
    }

    async function fetchSupabaseData() {
        const config = getSupabaseConfig();
        const client = createSupabaseBrowserClient(config);

        const [
            eraRows,
            eventRows,
            figureRows,
            questionRows,
            optionRows,
            relatedMomentRows,
            materialRows
        ] = await Promise.all([
            runSelect(
                client
                    .from('eras')
                    .select('id, slug, name, icon, period_label, sort_order')
                    .order('sort_order'),
                { tableName: 'eras' }
            ),
            runSelect(
                client
                    .from('events')
                    .select('id, slug, era_id, title, category, event_date, display_date, year, description, significance, image_url, stats_days, stats_casualties, is_featured, sort_order')
                    .order('sort_order'),
                { tableName: 'events' }
            ),
            runSelect(
                client
                    .from('figures')
                    .select('id, slug, primary_era_id, full_name, display_title, years_label, description, image_url, sort_order')
                    .order('sort_order'),
                { tableName: 'figures' }
            ),
            runSelect(
                client
                    .from('quiz_questions')
                    .select('id, question_number, question_text, explanation, is_published')
                    .eq('is_published', true)
                    .order('question_number'),
                { tableName: 'quiz_questions' }
            ),
            runSelect(
                client
                    .from('quiz_options')
                    .select('id, question_id, option_order, option_text, is_correct')
                    .order('option_order'),
                { tableName: 'quiz_options' }
            ),
            runSelect(
                client
                    .from('event_related_moments')
                    .select('event_id, display_date, year, title, description, significance, location, image_url, is_external, sort_order')
                    .order('sort_order'),
                { tableName: 'event_related_moments', optional: true }
            ),
            runSelect(
                client
                    .from('event_materials')
                    .select('event_id, material_type, title, source_label, url, note, sort_order')
                    .order('sort_order'),
                { tableName: 'event_materials', optional: true }
            )
        ]);

        const erasByUuid = new Map(eraRows.map(row => [row.id, row]));
        const eras = buildEraList(eraRows);
        const events = buildEventList(eventRows, erasByUuid, relatedMomentRows, materialRows);
        const figures = buildFigureList(figureRows, erasByUuid);
        const quizQuestions = buildQuizList(questionRows, optionRows);

        return {
            ...cloneFallbackData(),
            eras,
            events,
            figures,
            quizQuestions,
            stats: deriveStats(FALLBACK_DATA.stats, events, figures)
        };
    }

    async function getData(forceRefresh = false) {
        if (cachedData && !forceRefresh) {
            return cachedData;
        }

        if (initPromise && !forceRefresh) {
            return initPromise;
        }

        initPromise = (async () => {
            const config = getSupabaseConfig();

            if (!hasSupabaseConfig(config)) {
                activeSource = 'local';
                cachedData = getLocalData();
                return cachedData;
            }

            try {
                cachedData = await fetchSupabaseData();
                activeSource = 'supabase';
                global.dispatchEvent(new CustomEvent('app-data-ready', {
                    detail: { source: activeSource }
                }));
                return cachedData;
            } catch (error) {
                console.warn('[appDataService] Falling back to local data because Supabase could not be loaded.', error);
                activeSource = 'local';
                cachedData = getLocalData();
                global.dispatchEvent(new CustomEvent('app-data-ready', {
                    detail: { source: activeSource, fallback: true }
                }));
                return cachedData;
            }
        })();

        return initPromise;
    }

    function getSyncData() {
        return cachedData || FALLBACK_DATA;
    }

    global.getAppDataSync = getSyncData;
    global.appDataService = {
        getData,
        getSyncData,
        getSource: () => activeSource,
        isUsingSupabase: () => activeSource === 'supabase',
        reset() {
            cachedData = null;
            initPromise = null;
            activeSource = 'local';
            supabaseClient = null;
        }
    };

    if (getSupabaseConfig().enabled) {
        getData().catch(() => undefined);
    }
})(window);
