/***************************************************************
 * Script: server-manager: server-updater.js
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
const lodash = require("lodash")
const download = require("download")
const serverLogger = require("./server-logger.js")
const serverPlatform = serverLogger.getServerPlatform()
const serverAssets = require("./server-assets.js").serverAssets


/*********************************************
 * Function: Retrieves Server's Update Data *
**********************************************/

async function getServerUpdateData() {

    var isServerUpdated = false, updateAssetIndex = false
    for (var assetIndex = 0; assetIndex < serverAssets.length; assetIndex++) {
        if (serverAssets[assetIndex][serverPlatform].endsWith("/update.json")) {
            updateAssetIndex = assetIndex
        }
    }
    if (updateAssetIndex !== false) {
        await new Promise((resolve, reject) => {
            fs.readFile("update.json", async function(error, currentServerDate) {
                if (!error) {
                    await download(serverAssets[updateAssetIndex][serverPlatform], "./cache/" + serverAssets[updateAssetIndex].filePath)
                        .then((latestServerDate) => {
                            if (lodash.isEqual(currentServerDate, latestServerDate)) {
                                isServerUpdated = true
                            }
                        })
                }
                resolve()
            })
        })
        return [isServerUpdated, updateAssetIndex]
    } else {
        return false
    }

}


/************
 * Exports *
*************/

module.exports = {

    getServerUpdateData

}