/*! ArcGIS API for JavaScript 4.9 | Copyright (c) 2018 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
define(["dojo/Deferred"],function(o){var e={getJsonData:function(e,t){if(t){var r=new o,n=new XMLHttpRequest;return n.open("GET",e,!0),n.onload=function(e){if(4===n.readyState)if(200===n.status){var t=JSON.parse(n.responseText);r.resolve(t)}else console.error(n.statusText)},n.onerror=function(e){console.error(n.statusText),r.reject(e)},n.send(),r}var s=new XMLHttpRequest;if(s.open("GET",e,!1),s.send(),200===s.status)return JSON.parse(s.responseText)}};return e});