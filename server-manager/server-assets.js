/***************************************************************
 * Script: server-manager: server-assets.js
 * Server: -
 * Author: OvileAmriam
 * Developer: -
 * DOC: 25/09/2020 (OvileAmriam)
 * Desc: Automated Server Installer/Updater/Launcher
***************************************************************/


/************
 * Exports *
*************/

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

module.exports = {

    serverAssets

}