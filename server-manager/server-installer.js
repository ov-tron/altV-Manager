/***************************************************************
 * Script: server-manager:server-installer.js
 * Server: -
 * Author: OvileAmriam
 * Developer: -
 * DOC: 25/09/2020 (OvileAmriam)
 * Desc: Automated Server Installer/Updater/Launcher
***************************************************************/


/************
 * Imports *
*************/

const download = require("download")
const serverLogger = require("./server-logger.js")
const serverPlatform = serverLogger.getServerPlatform()
const serverAssets = [
    /*
    {
        windows: "https://cdn.altv.mp/server/release/x64_win32/data/vehmodels.bin",
        linux: "https://cdn.altv.mp/server/release/x64_linux/data/vehmodels.bin",
        filePath: "./data"
    },
    {
        windows: "https://cdn.altv.mp/server/release/x64_win32/data/vehmods.bin",
        linux: "https://cdn.altv.mp/server/release/x64_linux/data/vehmods.bin",
        filePath: "./data"
    },
    {
        windows: "https://cdn.altv.mp/js-module/release/x64_win32/modules/js-module/js-module.dll",
        linux: "https://cdn.altv.mp/js-module/release/x64_linux/modules/js-module/libjs-module.so",
        filePath: "./modules/js-module"
    },
    {
        windows: "https://cdn.altv.mp/js-module/release/x64_win32/modules/js-module/libnode.dll",
        linux: "https://cdn.altv.mp/js-module/release/x64_linux/modules/js-module/libnode.so.72",
        filePath: "./modules/js-module"
    },
    */
    {
        windows: "https://cdn.altv.mp/server/release/x64_win32/altv-server.exe",
        linux: "https://cdn.altv.mp/server/release/x64_linux/altv-server",
        filePath: "."
    },
    {
        windows: "https://cdn.altv.mp/js-module/release/x64_win32/update.json",
        linux: "https://cdn.altv.mp/js-module/release/x64_linux/update.json",
        filePath: "."
    }
]


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

    // TODO: CREATE HERE `server-launcher` using script :D not within respo
    serverLogger.displayServerLog("\n\n==> Server successfully installed! [Hint: Use server-launcher to launch your server!]")
    process.exit(0)

}
onInstallServer()