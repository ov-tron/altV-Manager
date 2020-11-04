/***************************************************************
 * Script: altv_library: client: scripts: webviews.js
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
import { altManager } from "./core.js"


/**************
 * Variables *
***************/

const createdWebViews = []


/*****************************
 * Custom Web View Handlers *
******************************/

altManager.WebView = function(...argArray) {

    if (!argArray || argArray.length <= 0) {
        return false
    } else {
        const createdWebView = new altClient.WebView(...argArray)
        if (!createdWebView || !createdWebView.valid) {
            return false
        } else {
            createdWebViews.push(createdWebView)
            return createdWebView
        }
    }

}