/***************************************************************
 * Resource: Example Resource
 * Script: server: server.js
 * Server: Pacivic Roleplay
 * Author: OvileAmriam
 * Developer: -
 * DOC: 23/09/2020 (OvileAmriam)
 * Desc: Server Sided
***************************************************************/


/************
 * Imports *
*************/

import { altManager } from "../../../[Library]/altv_library/server"


/******************************
 * Events: On Resource Start *
*******************************/

altManager.on("resourceStart", function(errored) {

    if (!errored) {
        altManager.log("[Example Resource]: Resource started successfully!")
    } else {
        altManager.log("[Example Resource]: Failed to start resource!")
    }

})