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
printf "\033[33m"
printf "\033[33m"
printf "\033[33m"

echo
echo "==^> Launching Server"
echo "======================="
echo
export launcherCommand=altv-server
for a in ('dir "./resources" /b /a:d ^| findstr "[^[$]]"') do (
    export "launcherCommand=$launcherCommand --extra-res-folder resources/$a"
)
$launcherCommand