@echo off
setlocal

cd /d "%~dp0"

if not exist node_modules (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo.
    echo Dependency installation failed. Run npm install from this folder and try again.
    pause
    exit /b 1
  )
)

echo Starting portfolio preview at http://127.0.0.1:5173/
start "" "http://127.0.0.1:5173/"
call npm run dev -- --port 5173
