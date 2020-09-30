/***************************************************************
 * Script: server-logger.js
 * Server: -
 * Author: OvileAmriam
 * Developer: -
 * DOC: 25/09/2020 (OvileAmriam)
 * Desc: Automated Server Installer/Updater/Launcher
***************************************************************/


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

    displayServerLog

}