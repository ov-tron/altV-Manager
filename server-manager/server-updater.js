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

import fs from "fs"
import lodash from "lodash"
import download from "download"
import * as serverLogger from "./server-logger.js"
import { serverAssets } from "./server-assets.js"
const serverPlatform = serverLogger.getServerPlatform()


/*********************************************
 * Function: Retrieves Server's Update Data *
**********************************************/

export async function getServerUpdateData() {

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