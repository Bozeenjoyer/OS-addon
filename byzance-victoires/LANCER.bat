@echo off
rem Lance le site en mode developpement (double-cliquer ce fichier).
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js n'est pas installe.
  echo Telechargez la version LTS sur https://nodejs.org/fr puis relancez ce fichier.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Premiere utilisation : installation des dependances...
  call npm install
)

echo Ouverture du site sur http://localhost:5173 ...
start "" http://localhost:5173
call npm run dev
pause
