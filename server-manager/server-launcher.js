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

import fs from "fs"
import path from "path"
import runAll from "npm-run-all"
import * as serverLogger from "./server-logger.js"
import * as serverUpdater from "./server-updater.js"
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
    serverLogger.displayServerLog("\n=====================")
    await serverUpdater.getServerUpdateData()
        .then((serverUpdateData) => {
            if (serverUpdateData && !serverUpdateData[0]) {
                serverLogger.displayServerLog("\n\n==> Server update available!")
                serverLogger.displayServerLog("\n\n==> Hint: Use npm run server:install to update to latest build!")
            }
        })
    serverLogger.displayServerLog("\n")
    await runAll(["server:update"], {parallel: false})
        .then(async () => {
            await new Promise((resolve, reject) => {
                fs.readdir(path.join(path.resolve(), "/resources"), (error, directoryList) => { 
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
        .then(() => {
            serverLogger.displayServerLog("\n==> Server successfully launched!\n\n")
        })
        .catch(() => {
            serverLogger.displayServerLog("\n==> Server launch failed!\n\n")
        })
    process.exit(0)

}
onLaunchServer()