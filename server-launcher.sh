#!/bin/bash
set +v
printf "\033[33m"
echo "***************************************************************"
echo  "* Script: server-launcher.bat"
echo  "* Server: -"
echo  "* Author: OvileAmriam"
echo  "* Developer: -"
echo  "* DOC: 25/09/2020 (OvileAmriam)"
echo  "* Desc: Automated Server Installer/Updater/Launcher"
echo "***************************************************************"
echo

echo
echo "==^> Installing Server"
echo "======================="
echo
npm install --silent --no-warnings
printf "\033[33m"
ncu -u --silent
printf "\033[33m"
npm update --silent
printf "\033[33m"

echo
echo "==^> Launching Server"
echo "======================="
echo
npm run start --silent
export launcherCommand=altv-server
for a in ('dir "./resources" /b /a:d ^| findstr "[^[$]]"') do (
    export "launcherCommand=$launcherCommand --extra-res-folder resources/$a"
)
$launcherCommand