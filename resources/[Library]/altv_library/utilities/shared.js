/***************************************************************
 * Script: altv_library: utilities: shared.js
 * Server: -
 * Author: OvileAmriam
 * Developer: -
 * DOC: 25/09/2020 (OvileAmriam)
 * Desc: Shared Utilities
***************************************************************/


/************
 * Exports *
*************/

export function cloneObject(object) {

    if (typeof(object) !== "object") {
        return false
    } else {
        var clonedObject = {}
        for(var i in object) {
            if(object[i] && typeof(object[i]) === "object") {
                clonedObject[i] = cloneObject(object[i])
            } else {
                clonedObject[i] = object[i]
            }
        }
        return clonedObject
    }

}