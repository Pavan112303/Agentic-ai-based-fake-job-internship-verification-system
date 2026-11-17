@echo off
setlocal

pushd "%~dp0"

if not exist ".venv\Scripts\python.exe" (
    echo Python virtual environment not found.
    echo Create it with: py -3.10 -m venv .venv
    pause
    exit /b 1
)

if not exist "frontend\node_modules\vite\bin\vite.js" (
    echo Frontend dependencies not found.
    echo Install them with: cd frontend ^&^& npm install
    pause
    exit /b 1
)

start "HireGuard AI Backend" /D . cmd /k ".venv\Scripts\python.exe -m uvicorn server:app --reload"
start "HireGuard AI Frontend" /D frontend cmd /k "node.exe node_modules\vite\bin\vite.js --host 127.0.0.1"

echo Backend:  http://127.0.0.1:8000
echo Frontend: http://127.0.0.1:5173
echo.
echo Two terminal windows were opened. Close those windows to stop the servers.
pause
popd
