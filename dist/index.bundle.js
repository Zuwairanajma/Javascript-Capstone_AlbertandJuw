/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/Screenshot 2023-08-09 215012.png */ \"./src/asset/Screenshot 2023-08-09 215012.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --main-color: #ff0;\r\n  --light-white: rgba(255, 255, 255, 0.5);\r\n  --light-black: rgba(0, 0, 0, 0.3);\r\n  --light-bg: rgba(255, 255, 255, 0.1);\r\n  --white: #fff;\r\n  --orange1: #d57d1f;\r\n  --box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\r\n  --font-family: \"Poppins\", sans-serif;\r\n  --orange: #4d088691;\r\n  --black: rgba(67, 33, 74, 0.945);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n  background: white;\r\n  height: 100vh;\r\n  background-color: #eee;\r\n  color: var(--black);\r\n}\r\n\r\nheader {\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  box-shadow: var(--box-shadow);\r\n  width: 100%;\r\n  padding: 0;\r\n  background-color: white;\r\n  position: sticky;\r\n}\r\n\r\n.meal-popup h4 span {\r\n  text-align: left;\r\n  font-weight: 500;\r\n  font-size: 1em;\r\n  margin-left: 0.3em;\r\n}\r\n\r\n.logo {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-size: cover;\r\n  height: 50px;\r\n  width: 350px;\r\n}\r\n\r\nheader .logo {\r\n  cursor: pointer;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  list-style: none;\r\n  margin: 10px;\r\n  color: orange;\r\n  place-items: center;\r\n  padding-left: 1em;\r\n  cursor: pointer;\r\n  gap: 10px;\r\n  font-size: 18px;\r\n}\r\n\r\nheader nav ul #meals {\r\n  margin: 0 1em 0 -3.5em;\r\n  font-weight: 500;\r\n  font-size: 1.1em;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  place-items: center;\r\n  width: 100%;\r\n  background-color: white;\r\n  height: 5em;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\nfooter h2 {\r\n  margin-left: 22em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.list-home {\r\n  justify-content: center;\r\n  margin-top: 8em;\r\n  width: 95%;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 290px);\r\n  column-gap: 104px;\r\n  row-gap: -50px;\r\n}\r\n\r\n.cont-popup p {\r\n  margin-right: 2em;\r\n  font-size: 1.2em;\r\n}\r\n\r\n.meal-popup p {\r\n  text-align: left;\r\n  margin: 1em 1em;\r\n  line-height: 2em;\r\n  font-size: 1.1em;\r\n  font-weight: 500;\r\n}\r\n\r\n.meal {\r\n  display: grid;\r\n  grid-template-rows: auto 25% 25%;\r\n  margin: 0 1em 5em 0;\r\n  width: 22em;\r\n  height: 30em;\r\n  background-color: white;\r\n  border-radius: 0.5em;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.meal .div-like {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: auto 0;\r\n  width: 100%;\r\n}\r\n\r\n.meal .div-like p {\r\n  text-align: left;\r\n  margin-left: 1em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.div-heart {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 10em;\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart {\r\n  margin-left: 1em;\r\n  font-size: 1.7em;\r\n  cursor: pointer;\r\n  color: orange;\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart:hover {\r\n  color: rgba(234, 53, 13, 0.7);\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart:active {\r\n  color: red;\r\n}\r\n\r\n.meal .div-like .div-heart label {\r\n  font-size: 1em;\r\n  color: var(--black);\r\n  margin-left: 1.2em;\r\n}\r\n\r\n.div-img {\r\n  place-self: center;\r\n  margin: 1em auto;\r\n}\r\n\r\n.meal img {\r\n  width: 17em;\r\n  border-radius: 0.5em;\r\n}\r\n\r\nbutton {\r\n  text-align: center;\r\n  background-color: orange;\r\n  color: white;\r\n  width: 8em;\r\n  height: 2.5em;\r\n  font-weight: 500;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: medium;\r\n  place-self: center;\r\n  cursor: pointer;\r\n  margin-bottom: 6em;\r\n  border: none;\r\n  border-radius: 0.5em;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.menu-random h2 {\r\n  margin: 3em 0 -3em 0;\r\n  font-size: 1.7em;\r\n  text-align: center;\r\n  color: orange;\r\n}\r\n\r\n.meal-popup {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  box-shadow: var(--box-shadow);\r\n  background-color: rgb(241, 240, 240);\r\n}\r\n\r\n.meal-popup h2 {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 2.5em;\r\n}\r\n\r\n.meal-popup h4 {\r\n  text-align: left;\r\n  font-weight: bold;\r\n  font-size: 1.2em;\r\n  margin: 1em 1em;\r\n}\r\n\r\n.meal-popup-div-img {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 1em auto;\r\n}\r\n\r\n.meal-popup-div-img img {\r\n  width: 35em;\r\n  height: 30em;\r\n  border-radius: 0.5em;\r\n}\r\n\r\n.meal-popup-comments-title {\r\n  margin-left: 1em;\r\n}\r\n\r\n.meal-popup-add-comment-form {\r\n  margin: 0 0 100px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.meal-popup-add-comment-form-username {\r\n  padding: 0.4em;\r\n  border: 2px solid var(--black);\r\n  border-radius: 0.3em;\r\n  margin-bottom: 1em;\r\n  font-family: var(--font-family);\r\n  width: 20em;\r\n}\r\n\r\n.meal-popup-add-comment-form-comment {\r\n  padding: 0.4em;\r\n  border: 2px solid var(--black);\r\n  border-radius: 0.3em;\r\n  width: 20em;\r\n  height: 8em;\r\n  margin-bottom: 1em;\r\n  font-family: var(--font-family);\r\n}\r\n\r\n@-webkit-keyframes change-color {\r\n  0% {\r\n    color: red;\r\n  }\r\n\r\n  100% {\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n@keyframes change-color {\r\n  0% {\r\n    color: red;\r\n  }\r\n\r\n  100% {\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n.meal-popup-add-comment-form-res {\r\n  -webkit-animation-name: change-color;\r\n  animation-name: change-color;\r\n  -webkit-animation-duration: 5s;\r\n  animation-duration: 5s;\r\n  font-size: 16px;\r\n  width: 256px;\r\n  font-weight: 300;\r\n  color: transparent;\r\n  text-align: center;\r\n}\r\n\r\n.cat-popup {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 2em;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  background-color: rgb(241, 240, 240);\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n}\r\n\r\n.cat-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.cat-popup-div img {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.cat-popup-div {\r\n  margin: 10px 0 10px 0;\r\n  text-align: center;\r\n}\r\n\r\n.cat-popup-div-p {\r\n  font-size: 32px;\r\n}\r\n\r\n.cont-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgb(241, 240, 240);\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  padding: 0 32px 0 32px;\r\n  width: 100%;\r\n}\r\n\r\n.cont-popup h2 {\r\n  margin-top: 2em;\r\n  font-size: 2em;\r\n}\r\n\r\n.cont-popup-div {\r\n  display: block;\r\n  flex-direction: row;\r\n}\r\n\r\n.cont-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.fa-times {\r\n  position: fixed;\r\n  top: 0.2em;\r\n  right: 1em;\r\n  color: var(--black);\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_mealDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mealDisplay */ \"./src/modules/mealDisplay.js\");\n\r\n\r\n\r\n\r\n(0,_modules_mealDisplay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./src/index.js?");

/***/ }),

/***/ "./src/modules/add-new-comment.js":
/*!****************************************!*\
  !*** ./src/modules/add-new-comment.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-comments.js */ \"./src/modules/display-comments.js\");\n\r\n\r\nasync function addNewComment(itemId, username, comment) {\r\n  const apiKey = 'LHYarZybqm9V0G7OV772';\r\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments/`;\r\n\r\n  try {\r\n    const response = await fetch(url, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: itemId,\r\n        username,\r\n        comment,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    });\r\n\r\n    if (!response.ok) {\r\n      throw new Error('Error adding new comment');\r\n    }\r\n\r\n    const parent = document.querySelector('.comments-container-meal-popup');\r\n    parent.innerHTML = '';\r\n\r\n    (0,_display_comments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(itemId, parent);\r\n  } catch (err) {\r\n    console.error('Error adding new comment:', err);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewComment);\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./src/modules/add-new-comment.js?");

/***/ }),

/***/ "./src/modules/display-comments.js":
/*!*****************************************!*\
  !*** ./src/modules/display-comments.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function displayCommentsList(id) {\r\n  const apiKey = 'LHYarZybqm9V0G7OV772';\r\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments?item_id=${id}`;\r\n\r\n  try {\r\n    const response = await fetch(url, {\r\n      method: 'GET',\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    });\r\n\r\n    if (!response.ok) {\r\n      throw new Error('Error fetching comments');\r\n    }\r\n\r\n    const data = await response.json();\r\n\r\n    const parent = document.querySelector('.comments-container-meal-popup');\r\n    parent.innerHTML = '';\r\n\r\n    const title = document.createElement('h3');\r\n    title.className = 'meal-popup-comments-title';\r\n    title.textContent = `Comments (${data.length || 0})`;\r\n    parent.appendChild(title);\r\n\r\n    data.forEach((comment) => {\r\n      const commentRow = document.createElement('p');\r\n      commentRow.className = 'meal-popup-comments-row';\r\n      commentRow.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;\r\n      parent.appendChild(commentRow);\r\n    });\r\n  } catch (err) {\r\n    console.error('Error fetching and displaying comments:', err);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCommentsList);\r\n\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./src/modules/display-comments.js?");

/***/ }),

/***/ "./src/modules/display-popup-comment.js":
/*!**********************************************!*\
  !*** ./src/modules/display-popup-comment.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _add_new_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-comment.js */ \"./src/modules/add-new-comment.js\");\n/* harmony import */ var _display_comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-comments.js */ \"./src/modules/display-comments.js\");\n\r\n\r\n\r\nconst mainSection = document.querySelector('header');\r\n\r\nfunction createMealPopup(data, id) {\r\n  const meal = document.createElement('div');\r\n  meal.className = 'meal-popup';\r\n\r\n  const closeIcon = document.createElement('a');\r\n  closeIcon.className = 'meal-popup-close-icon fa fa-times';\r\n  meal.appendChild(closeIcon);\r\n\r\n  closeIcon.addEventListener('click', () => {\r\n    meal.remove();\r\n  });\r\n\r\n  const div = document.createElement('div');\r\n  div.className = 'meal-popup-div-img';\r\n  meal.appendChild(div);\r\n\r\n  const img = document.createElement('img');\r\n  img.src = `${data.meals[0].strMealThumb}`;\r\n  div.appendChild(img);\r\n\r\n  const p1 = document.createElement('h2');\r\n  p1.textContent = `${data.meals[0].strMeal}`;\r\n  meal.appendChild(p1);\r\n\r\n  const p2 = document.createElement('p');\r\n  p2.textContent = `Category: ${data.meals[0].strCategory}`;\r\n  meal.appendChild(p2);\r\n\r\n  const p3 = document.createElement('p');\r\n  p3.textContent = `Area: ${data.meals[0].strArea}`;\r\n  meal.appendChild(p3);\r\n\r\n  const d = document.createElement('p');\r\n  d.textContent = `${data.meals[0].strInstructions}`;\r\n  meal.appendChild(d);\r\n\r\n  const commentsContainer = document.createElement('div');\r\n  commentsContainer.className = 'comments-container-meal-popup';\r\n  meal.appendChild(commentsContainer);\r\n\r\n  (0,_display_comments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id, commentsContainer);\r\n\r\n  const form = document.createElement('form');\r\n  form.className = 'meal-popup-add-comment-form';\r\n  meal.appendChild(form);\r\n\r\n  const formTitle = document.createElement('h3');\r\n  formTitle.className = 'meal-popup-add-comment-form-title';\r\n  formTitle.innerHTML = 'Add a comment';\r\n  form.appendChild(formTitle);\r\n\r\n  const formUsername = document.createElement('input');\r\n  formUsername.className = 'meal-popup-add-comment-form-username';\r\n  formUsername.setAttribute('placeholder', 'Your name');\r\n  form.appendChild(formUsername);\r\n\r\n  const formComment = document.createElement('textarea');\r\n  formComment.className = 'meal-popup-add-comment-form-comment';\r\n  formComment.setAttribute('placeholder', 'Your insights');\r\n  form.appendChild(formComment);\r\n\r\n  const formBtn = document.createElement('button');\r\n  formBtn.className = 'meal-popup-add-comment-form-btn';\r\n  formBtn.innerHTML = 'Comment';\r\n  form.appendChild(formBtn);\r\n\r\n  const formResContainer = document.createElement('p');\r\n  formResContainer.className = 'meal-popup-add-comment-form-res';\r\n  form.appendChild(formResContainer);\r\n\r\n  formBtn.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    if (formUsername.value && formComment.value) {\r\n      (0,_add_new_comment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, formUsername.value, formComment.value);\r\n      formUsername.value = '';\r\n      formComment.value = '';\r\n    } else {\r\n      const formRes = document.createElement('p');\r\n      formRes.className = 'meal-popup-add-comment-form-res';\r\n      formRes.innerHTML = 'Username and comment should not be empty';\r\n      formResContainer.innerHTML = '';\r\n      formResContainer.appendChild(formRes);\r\n    }\r\n  });\r\n\r\n  return meal;\r\n}\r\n\r\nfunction popupComment(id) {\r\n  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      const mealPopup = createMealPopup(data, id);\r\n      mainSection.appendChild(mealPopup);\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupComment);\r\n\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./src/modules/display-popup-comment.js?");

/***/ }),

/***/ "./src/modules/items-count.js":
/*!************************************!*\
  !*** ./src/modules/items-count.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst count = () => {\r\n  const box = document.getElementById('meal-data');\r\n\r\n  const directChildren = box.children.length;\r\n  const cat = document.getElementById('meals');\r\n  cat.innerHTML = `Meals (${directChildren})`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (count);\r\n\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./src/modules/items-count.js?");

/***/ }),

/***/ "./src/modules/mealDisplay.js":
/*!************************************!*\
  !*** ./src/modules/mealDisplay.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_popup_comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-popup-comment */ \"./src/modules/display-popup-comment.js\");\n/* harmony import */ var _items_count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-count */ \"./src/modules/items-count.js\");\n/* harmony import */ var _new_like__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-like */ \"./src/modules/new-like.js\");\n\r\n\r\n\r\n\r\nasync function fetchLikesData(apikey, likeid) {\r\n  try {\r\n    apikey = 'tnE2k6P5BdZ2HCTjbd0V';\r\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apikey}/likes?`);\r\n    const data = await response.json();\r\n    return data.find((element) => element.item_id === likeid);\r\n  } catch (error) {\r\n    console.error('Error fetching likes data:', error);\r\n    return null;\r\n  }\r\n}\r\n\r\nfunction createLikeCountElement(likeData) {\r\n  const likeCount = document.createElement('span');\r\n  likeCount.innerHTML = `likes:${likeData.likes}`;\r\n  return likeCount;\r\n}\r\n\r\nfunction handleLikeClick(like, likeData, likeCount, likeid) {\r\n  like.addEventListener('click', async () => {\r\n    if (likeData) {\r\n      likeData.likes += 1;\r\n      likeCount.innerHTML = `likes:${likeData.likes}`;\r\n    }\r\n    await (0,_new_like__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(likeid);\r\n  });\r\n}\r\n\r\nfunction createMealElement(mealData, popupCallback) {\r\n  const list = document.createElement('div');\r\n  list.className = 'meal';\r\n\r\n  const div = document.createElement('div');\r\n  div.className = 'div-img';\r\n  list.appendChild(div);\r\n\r\n  const descrpt1 = document.createElement('img');\r\n  descrpt1.src = mealData.strMealThumb;\r\n  div.appendChild(descrpt1);\r\n\r\n  const div2 = document.createElement('div');\r\n  div2.className = 'div-like';\r\n  list.appendChild(div2);\r\n\r\n  const p = document.createElement('p');\r\n  p.textContent = mealData.strMeal;\r\n  div2.appendChild(p);\r\n\r\n  const div3 = document.createElement('div');\r\n  div3.className = 'div-heart';\r\n  div2.appendChild(div3);\r\n\r\n  const like = document.createElement('i');\r\n  like.className = 'fa-solid fa-heart';\r\n  const likeid = mealData.idMeal;\r\n  div3.appendChild(like);\r\n\r\n  const button = document.createElement('button');\r\n  button.id = likeid;\r\n  button.innerHTML = 'Comment';\r\n  list.appendChild(button);\r\n\r\n  button.addEventListener('click', () => {\r\n    popupCallback(likeid);\r\n  });\r\n\r\n  return { list, like, div3 };\r\n}\r\n\r\nasync function renderMeals(apikey) {\r\n  try {\r\n    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');\r\n    const data = await response.json();\r\n\r\n    const header = document.querySelector('.header');\r\n    const random = document.querySelector('.menu-random');\r\n    const listShow = document.querySelector('.list-home');\r\n    listShow.before(header);\r\n    listShow.before(random);\r\n\r\n    data.meals.forEach(async (mealData) => {\r\n      const { list, like, div3 } = createMealElement(mealData, _display_popup_comment__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n      listShow.append(list);\r\n\r\n      const likeData = await fetchLikesData(apikey, mealData.idMeal);\r\n      if (likeData) {\r\n        const likeCount = createLikeCountElement(likeData);\r\n        div3.appendChild(likeCount);\r\n\r\n        handleLikeClick(like, likeData, likeCount, mealData.idMeal);\r\n      }\r\n    });\r\n\r\n    (0,_items_count__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  } catch (error) {\r\n    console.error('Error rendering meals:', error);\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMeals);\r\n\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./src/modules/mealDisplay.js?");

/***/ }),

/***/ "./src/modules/new-like.js":
/*!*********************************!*\
  !*** ./src/modules/new-like.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function newLike(id) {\r\n  const apikey = 'LHYarZybqm9V0G7OV772';\r\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apikey}/likes/`;\r\n\r\n  try {\r\n    const response = await fetch(url, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: id,\r\n        likes: 1,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n        Accept: 'application/json',\r\n      },\r\n    });\r\n\r\n    if (!response.ok) {\r\n      throw new Error('Error adding new like');\r\n    }\r\n\r\n    // Optionally, return the parsed JSON response\r\n    return response.json();\r\n  } catch (error) {\r\n    console.error('Error adding new like:', error);\r\n    return { error: 'Error adding new like' }; // Return an error object\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newLike);\r\n\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./src/modules/new-like.js?");

/***/ }),

/***/ "./src/asset/Screenshot 2023-08-09 215012.png":
/*!****************************************************!*\
  !*** ./src/asset/Screenshot 2023-08-09 215012.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"14076340edda8cb779c5.png\";\n\n//# sourceURL=webpack://javascript-capstone_albertandjuw/./src/asset/Screenshot_2023-08-09_215012.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;