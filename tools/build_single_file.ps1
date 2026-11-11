# build_single_file.ps1 — 将 DrivePage 打包为单文件自包含 HTML
# 内联 CSS / data.js / local-drivers.js / app.js，去掉 Google Fonts 外链
# 产物：<安装目录>\DrivePage_standalone.html
$ErrorActionPreference = 'Stop'
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

$root = Split-Path -Parent $PSScriptRoot
$htmlPath = Join-Path $root 'index.html'
$cssPath  = Join-Path $root 'assets\styles.css'
$dataPath = Join-Path $root 'assets\data.js'
$localPath = Join-Path $root 'assets\local-drivers.js'
$appPath  = Join-Path $root 'assets\app.js'
$outPath  = Join-Path $root 'DrivePage_standalone.html'

$html = [System.IO.File]::ReadAllText($htmlPath, $utf8NoBom)
$css  = [System.IO.File]::ReadAllText($cssPath, $utf8NoBom)
$data = [System.IO.File]::ReadAllText($dataPath, $utf8NoBom)
$local = [System.IO.File]::ReadAllText($localPath, $utf8NoBom)
$app  = [System.IO.File]::ReadAllText($appPath, $utf8NoBom)

# 1. 移除 Google Fonts 外链（preconnect + stylesheet）
$html = [regex]::Replace($html, '(?s)<link rel="preconnect" href="https://fonts\.googleapis\.com".*?</link>', '')
$html = [regex]::Replace($html, '(?s)<link rel="preconnect" href="https://fonts\.gstatic\.com"[^>]*>', '')
$html = [regex]::Replace($html, '(?s)<link href="https://fonts\.googleapis\.com[^>]*>', '')

# 2. 替换外链 css 为内联 <style>
# 使用 MatchEvaluator，避免 PowerShell 把 JS 中的 $&、$1 等当成替换占位符。
$html = [regex]::Replace(
    $html,
    '<link rel="stylesheet" href="assets/styles\.css"[^>]*>',
    { param($m) "<style>`n$css`n</style>" }
)

# 3. 替换外链 js 为内联 <script>
$html = [regex]::Replace(
    $html,
    '<script src="assets/data\.js"></script>',
    { param($m) "<script>`n$data`n</script>" }
)
$html = [regex]::Replace(
    $html,
    '<script src="assets/local-drivers\.js"[^>]*></script>',
    { param($m) "<script>`n$local`n</script>" }
)
$html = [regex]::Replace(
    $html,
    '<script src="assets/app\.js"></script>',
    { param($m) "<script>`n$app`n</script>" }
)

# 4. 图标外链保留（可内联 base64）——app.ico 太小，直接去掉引用避免缺失
$html = [regex]::Replace($html, '<link rel="icon" href="assets/app\.ico"[^>]*>', '')

[System.IO.File]::WriteAllText($outPath, $html, $utf8NoBom)
Write-Output ("已生成: {0}" -f $outPath)
Write-Output ("大小: {0} KB" -f [math]::Round((Get-Item $outPath).Length/1KB))
