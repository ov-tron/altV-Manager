/***************************************************************
 * Resource: Resource Loader
 * Script: handlers: loader.js
 * Server: -
 * Author: OvileAmriam
 * Developer: -
 * DOC: 23/09/2020 (OvileAmriam)
 * Desc: Resource Loader Handler
***************************************************************/


/************
 * Imports *
*************/

import { altManager } from "altv_library"
import * as settings_server from "../settings/server"
import * as settings_shared from "../settings/shared"


/***************************************
 * Events: On Any Resource Start/Stop *
****************************************/

altManager.on("anyResourceStart", function(resourceName) {

    if (resourceName === settings_shared.resourceName) {
        settings_server.serverResources.forEach(function(resourceName) {
            altManager.startResource(resourceName)
        })
        altManager.log("[Resource Loader]: Resources started successfully!")
    }

})

altManager.on("anyResourceStop", function(resourceName) {

    if (resourceName === settings_shared.resourceName) {
        settings_server.serverResources.forEach(function(resourceName) {
            altManager.stopResource(resourceName)
        })
        altManager.log("[Resource Loader]: Resources stopped successfully!")
    }

})