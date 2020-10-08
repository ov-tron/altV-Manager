/***************************************************************
 * Script: server-manager: server-installer.js
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
import download from "download"
import * as serverLogger from "./server-logger.js"
import * as serverUpdater from "./server-updater.js"
import { serverAssets } from "./server-assets.js"
const serverPlatform = serverLogger.getServerPlatform()
const serverLauncherData = serverLogger.getServerLauncherData()


/******************************
 * Function: Installs Server *
*******************************/

async function onInstallServer() {

    console.clear()
    serverLogger.displayServerLog("\n***************************************************************")
    serverLogger.displayServerLog("\n* Script: server-installer")
    serverLogger.displayServerLog("\n* Server: -")
    serverLogger.displayServerLog("\n* Author: OvileAmriam")
    serverLogger.displayServerLog("\n* Developer: -")
    serverLogger.displayServerLog("\n* DOC: 25/09/2020 (OvileAmriam)")
    serverLogger.displayServerLog("\n* Desc: Automated Server Installer/Updater/Launcher")
    serverLogger.displayServerLog("\n***************************************************************")

    await serverUpdater.getServerUpdateData()
        .then(async (serverUpdateData) => {
            if (serverUpdateData && !serverUpdateData[0]) {
                serverLogger.displayServerLog("\n\n\n==> Downloading Server Assets")
                serverLogger.displayServerLog("\n==============================")
                await new Promise(async (resolve, reject) => {
                    for (var assetIndex = 0; assetIndex < serverAssets.length; assetIndex++) {
                        serverLogger.displayServerLog("\n\n==> " + serverAssets[assetIndex][serverPlatform] + " [Downloading]")
                        await download(serverAssets[assetIndex][serverPlatform], serverAssets[assetIndex].filePath)
                            .then(() => {
                                process.stdout.clearLine()
                                process.stdout.cursorTo(0)
                                serverLogger.displayServerLog("==> " + serverAssets[assetIndex][serverPlatform] + " [Downloaded]")
                            })
                            .catch(() => {
                                process.stdout.clearLine()
                                process.stdout.cursorTo(0)
                                serverLogger.displayServerLog("==> " + serverAssets[assetIndex][serverPlatform] + " [Failed]")
                            })
                    }
                    resolve()
                })
                serverLogger.displayServerLog("\n")
                await new Promise((resolve, reject) => {
                    fs.writeFile(serverLauncherData[0], serverLauncherData[1] + "\n" + serverLauncherData[2], () => {
                        resolve()
                    })
                })
                serverLogger.displayServerLog("\n\n==> Server successfully installed!")
            } else {
                serverLogger.displayServerLog("\n\n\n==> Server already upto date!")
            }
        })
    serverLogger.displayServerLog("\n\n==> Hint: Use server-launcher to launch your server!\n")
    process.exit(0)

}
onInstallServer()