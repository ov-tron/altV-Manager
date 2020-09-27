#!/bin/bash
set echo off
printf "\033[33m"
echo "***************************************************************"
echo  "* Script: server-launcher.sh"
echo  "* Server: -"
echo  "* Author: OvileAmriam"
echo  "* Developer: -"
echo  "* DOC: 25/09/2020 (OvileAmriam)"
echo  "* Desc: Automated Server Installer/Updater/Launcher"
echo "***************************************************************"
echo ""

echo ""
echo "==> Installing Server"
echo "======================="
echo ""
npm install --silent --no-warnings
printf "\033[33m"
ncu -u --silent
printf "\033[33m"
npm update --silent
printf "\033[33m"

echo ""
echo "==> Launching Server"
echo "======================="
echo ""
npm run start --silent
export launcherCommand=altv-server
for a in resources/*
    do export "launcherCommand=$launcherCommand --extra-res-folder $a"
done
$launcherCommand