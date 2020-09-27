@echo off
setlocal enabledelayedexpansion
color 0e
@echo ***************************************************************
@echo  * Script: server-launcher.bat
@echo  * Server: -
@echo  * Author: OvileAmriam
@echo  * Developer: -
@echo  * DOC: 25/09/2020 (OvileAmriam)
@echo  * Desc: Automated Server Installer/Updater/Launcher
@echo ***************************************************************
@echo:

@echo:
@echo ==^> Installing Server
@echo =======================
@echo:
call npm install --silent --no-warnings
color 0e
call ncu -u --silent
color 0e
call npm update --silent
color 0e

@echo:
@echo ==^> Launching Server
@echo =======================
@echo:
call npm run start --silent
set launcherCommand=altv-server.exe
for /F "delims=" %%a in ('dir "./resources" /b /a:d ^| findstr "[^[$]]"') do (
    set "launcherCommand=!launcherCommand! --extra-res-folder resources/%%a"
)
%launcherCommand%