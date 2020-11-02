/***************************************************************
 * Script: altv_library: client: scripts: core.js
 * Server: -
 * Author: OvileAmriam
 * Developer: -
 * DOC: 25/09/2020 (OvileAmriam)
 * Desc: altV Library
***************************************************************/


/************
 * Imports *
*************/

import * as altClient from "alt-client"
import { cloneObject } from "../../utilities/shared.js"


/************
 * Exports *
*************/

export const altManager = cloneObject(altClient)