/***************************************************************
 * Script: altv_library: server: scripts: core.js
 * Server: -
 * Author: OvileAmriam
 * Developer: -
 * DOC: 25/09/2020 (OvileAmriam)
 * Desc: altV Library
***************************************************************/


/************
 * Imports *
*************/

import * as altServer from "alt-server"
import { cloneObject } from "../../utilities/shared.js"


/************
 * Exports *
*************/

export const altManager = cloneObject(altServer)