@echo off
setlocal
set "ROOT=%~dp0"
set "INDEX=%ROOT%index.html"
set "URL=file:///%INDEX:\=/%"

set "EDGE=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
if not exist "%EDGE%" set "EDGE=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
if not exist "%EDGE%" set "EDGE=%LocalAppData%\Microsoft\Edge\Application\msedge.exe"

if exist "%EDGE%" (
  start "" "%EDGE%" --app="%URL%" --window-size=1480,940 --window-position=center --no-first-run --no-default-browser-check --disable-features=Translate
) else (
  start "" "%ROOT%DrivePage_standalone.html"
)
endlocal
