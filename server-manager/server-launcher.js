/***************************************************************
 * Script: server-manager: server-launcher.js
 * Server: -
 * Author: OvileAmriam
 * Developer: -
 * DOC: 25/09/2020 (OvileAmriam)
 * Desc: Automated Server Installer/Updater/Launcher
***************************************************************/


/************
 * Imports *
*************/

const fs = require("fs")
const path = require("path")
const runAll = require("npm-run-all")
const serverLogger = require("./server-logger.js")
const serverLauncherData = serverLogger.getServerLauncherData()


/******************************
 * Function: Launches Server *
*******************************/

async function onLaunchServer() {

    console.clear()
    serverLogger.displayServerLog("\n***************************************************************")
    serverLogger.displayServerLog("\n* Script: server-launcher")
    serverLogger.displayServerLog("\n* Server: -")
    serverLogger.displayServerLog("\n* Author: OvileAmriam")
    serverLogger.displayServerLog("\n* Developer: -")
    serverLogger.displayServerLog("\n* DOC: 25/09/2020 (OvileAmriam)")
    serverLogger.displayServerLog("\n* Desc: Automated Server Installer/Updater/Launcher")
    serverLogger.displayServerLog("\n***************************************************************")

    serverLogger.displayServerLog("\n\n\n==> Launching Server")
    serverLogger.displayServerLog("\n=====================\n")
    await runAll(["server:update"], {parallel: false})
        .then(async () => {
            serverLogger.displayServerLog("\n==> Server successfully launched!\n")
            await new Promise((resolve, reject) => {
                fs.readdir(path.join(__dirname, '../resources'), (error, directoryList) => { 
                    if (!error) {
                        for(var i = 0; i < directoryList.length; i++) {
                            const directoryName = directoryList[i]
                            if (directoryName[0] == "[" && directoryName[directoryName.length - 1] == "]") {
                                serverLauncherData[2] = serverLauncherData[2] + " --extra-res-folder resources/" + directoryName
                            }
                        }
                    }
                    resolve()
                })
            })
            await new Promise((resolve, reject) => {
                fs.writeFile(serverLauncherData[0], serverLauncherData[1] + "\n" + serverLauncherData[2], () => {
                    resolve()
                })
            })
        })
        .catch(() => {
            serverLogger.displayServerLog("\n==> Server launch failed!\n")
        })
    process.exit(0)

}
onLaunchServer()