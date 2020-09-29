/***************************************************************
 * Script: server-installer.js
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
const serverPlatform = process.platform === "win32" ? "windows" : "linux"
const serverAssets = [
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

function displayLogMessage(message) {

    return process.stdout.write("\x1b[93m" + message + "\x1b[39m")

}

(async function onInstallServer() {

    displayLogMessage("\033c")
    displayLogMessage("\n***************************************************************")
    displayLogMessage("\n* Script: server-installer.js")
    displayLogMessage("\n* Server: -")
    displayLogMessage("\n* Author: OvileAmriam")
    displayLogMessage("\n* Developer: -")
    displayLogMessage("\n* DOC: 25/09/2020 (OvileAmriam)")
    displayLogMessage("\n* Desc: Automated Server Installer/Updater/Launcher")
    displayLogMessage("\n***************************************************************")

    displayLogMessage("\n\n\n==> Downloading Server FIles")
    displayLogMessage("\n=============================\n")
    await new Promise(async (resolve, reject) => {
        for (var assetIndex = 0; assetIndex < serverAssets.length; assetIndex++) {
            displayLogMessage("\n")
            displayLogMessage("==> " + serverAssets[assetIndex][serverPlatform] + " [Downloading]")
            await download(serverAssets[assetIndex][serverPlatform], serverAssets[assetIndex].filePath)
                .then(() => {
                    process.stdout.clearLine()
                    process.stdout.cursorTo(0)
                    displayLogMessage("==> " + serverAssets[assetIndex][serverPlatform] + " [Download Successful]")
                })
                .catch(() => {
                    process.stdout.clearLine()
                    process.stdout.cursorTo(0)
                    displayLogMessage("==> " + serverAssets[assetIndex][serverPlatform] + " [Download Failed]")
                })
        }
        resolve()
    })
    displayLogMessage("\n")
    
    // TODO: CREATE HERE `server-launcher` using script :D not within respo
    displayLogMessage("\n\n==> Server successfully installed! [Hint: Use ./server-launcher to launch your server!" + "]")
    process.exit(0)

}) ()