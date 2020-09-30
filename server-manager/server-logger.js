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
    displayServerLog

}