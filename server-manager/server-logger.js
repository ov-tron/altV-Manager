/***************************************************************
 * Script: server-manager:server-logger.js
 * Server: -
 * Author: OvileAmriam
 * Developer: -
 * DOC: 25/09/2020 (OvileAmriam)
 * Desc: Automated Server Installer/Updater/Launcher
***************************************************************/


/******************************************
 * Function: Retrieves Server's Platform *
*******************************************/

function getServerPlatform() {

    return process.platform === "win32" ? "windows" : "linux"
    
}


/***********************************************
 * Function: Retrieves Server Launcher's Data *
************************************************/

function getServerLauncherData() {

    const serverPlatform = getServerPlatform()
    const launcherFormat = serverPlatform === "windows" ?  "server-launcher.bat" : "server-launcher.sh"
    const launcherPrefix = serverPlatform === "windows" ?  "@echo off\ncall npm run start --silent" : "#!/bin/bash\nset echo off\nnpm run start --silent"
    return [launcherFormat, launcherPrefix]

}


/**********************************
 * Function: Displays Server Log *
***********************************/

function displayServerLog(log) {

    return process.stdout.write("\x1b[93m" + log + "\x1b[39m")

}


/************
 * Exports *
*************/

module.exports = {

    getServerPlatform,
    getServerLauncherData,
    displayServerLog

}