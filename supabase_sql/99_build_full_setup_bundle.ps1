$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$outputPath = Join-Path $root '99_full_setup_bundle.sql'
$utf8NoBom = [System.Text.UTF8Encoding]::new($false)

$orderedFiles = @(
    '01_enable_extensions_and_helpers.sql',
    '02_create_eras_table.sql',
    '03_create_events_table.sql',
    '04_create_figures_table.sql',
    '05_create_event_figures_table.sql',
    '06_create_sources_table.sql',
    '07_create_event_sources_table.sql',
    '08_create_figure_sources_table.sql',
    '09_create_quiz_questions_table.sql',
    '10_create_quiz_options_table.sql',
    '12_create_event_related_moments_table.sql',
    '13_create_event_materials_table.sql',
    '11_create_public_read_policies.sql',
    '90_seed_eras.sql',
    '91_seed_events.sql',
    '92_seed_figures.sql',
    '93_seed_event_figures.sql',
    '94_seed_quiz_questions.sql',
    '95_seed_quiz_options.sql',
    '96_seed_event_related_moments.sql',
    '97_seed_event_materials.sql'
)

$missingFiles = $orderedFiles | Where-Object {
    -not (Test-Path -LiteralPath (Join-Path $root $_))
}

if ($missingFiles.Count -gt 0) {
    throw "Khong tim thay file: $($missingFiles -join ', ')"
}

$timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
$bundleText = @(
    '-- AUTO-GENERATED SUPABASE SETUP BUNDLE',
    "-- Generated at: $timestamp",
    '-- Source folder: supabase_sql',
    ''
) -join "`r`n"

foreach ($file in $orderedFiles) {
    $filePath = Join-Path $root $file
    $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8).TrimEnd()

    $bundleText += "`r`n-- =================================================="
    $bundleText += "`r`n-- BEGIN FILE: $file"
    $bundleText += "`r`n-- =================================================="
    $bundleText += "`r`n`r`n$content`r`n"
    $bundleText += "`r`n-- END FILE: $file`r`n"
}

[System.IO.File]::WriteAllText($outputPath, $bundleText, $utf8NoBom)
Write-Output "Da tao bundle: $outputPath"
