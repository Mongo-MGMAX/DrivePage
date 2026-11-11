@echo off
chcp 65001 >nul
cd /d "%~dp0\.."
echo.
echo   正在扫描 drivers 目录并建立索引...
echo.
where python >nul 2>nul
if not errorlevel 1 (
    python "%~dp0scan_drivers.py"
) else (
    py "%~dp0scan_drivers.py"
)
echo.
pause
