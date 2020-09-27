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

import * as alt from "alt-server"


/******************************
 * Events: On Resource Start *
*******************************/

alt.on("resourceStart", function(errored) {

    if (!errored) {
        alt.log("[Example Resource]: Resource started successfully!")
    } else {
        alt.log("[Example Resource]: Failed to start resource!")
    }

})