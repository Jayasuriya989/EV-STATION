function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var observable_slim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! observable-slim */
    "./node_modules/observable-slim/observable-slim.js");
    /* harmony import */


    var observable_slim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(observable_slim__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chartjs-plugin-annotation */
    "./node_modules/chartjs-plugin-annotation/src/index.js");
    /* harmony import */


    var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _utils_ChartChargePlans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./utils/ChartChargePlans */
    "./src/app/utils/ChartChargePlans.ts");
    /* harmony import */


    var _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fuse-tree-circuit-diagram/fuse-tree-circuit-diagram-dialog */
    "./src/app/fuse-tree-circuit-diagram/fuse-tree-circuit-diagram-dialog.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var _c0 = ["inputHours"];
    var _c1 = ["inputMinutes"];
    var _c2 = ["inputSeconds"];

    function AppComponent_div_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Aggregated charge plans");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r4.restApiResponse.chartAggregatedChargePlans.chartData)("labels", ctx_r4.restApiResponse.chartAggregatedChargePlans.chartLabels)("options", ctx_r4.restApiResponse.chartAggregatedChargePlans.chartOptions)("colors", ctx_r4.restApiResponse.chartAggregatedChargePlans.chartColors)("legend", ctx_r4.restApiResponse.chartAggregatedChargePlans.chartLegend)("chartType", ctx_r4.restApiResponse.chartAggregatedChargePlans.chartType)("plugins", ctx_r4.restApiResponse.chartAggregatedChargePlans.chartPlugins);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(_snackBar, httpClient, fuseTreeCircuitDiagramDialog) {
        _classCallCheck(this, AppComponent);

        this._snackBar = _snackBar;
        this.httpClient = httpClient;
        this.fuseTreeCircuitDiagramDialog = fuseTreeCircuitDiagramDialog;
        this.localStorageKey = "data"; // Data structure persisted in local storage

        this.data = {
          request: this.getInitialRequest(),
          settings: this.getInitialSettings()
        };
        this.originalApiRequest = null; // Response from server and potential error

        this.restApiResponse = {
          jsonContent: null,
          chartAggregatedChargePlans: null,
          error: {
            name: "",
            message: ""
          }
        };
        var dataInLocalStorage = this.isPersistedInLocalStorage();

        if (dataInLocalStorage === true) {
          console.log("Initializing from local storage...");
          this.initFromLocalStorage();
        } else {
          console.log("No data found in local storage, using initial values");
        }

        console.log(this.data);
        this.applyObserverFunctions(this.data);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Register annotations in chart
          // https://stackoverflow.com/questions/51664741/chartjs-plugin-annotations-not-displayed-in-angular-5
          var namedChartAnnotation = chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_2__;
          namedChartAnnotation["id"] = "annotation";
          chart_js__WEBPACK_IMPORTED_MODULE_3__["pluginService"].register(namedChartAnnotation);
        }
      }, {
        key: "onClickShowFuseTreeCircuitDiagram",
        value: function onClickShowFuseTreeCircuitDiagram() {
          var dialogRef = this.fuseTreeCircuitDiagramDialog.open(_fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_dialog__WEBPACK_IMPORTED_MODULE_5__["FuseTreeCircuitDiagramDialog"], {
            width: "95%",
            height: "95%",
            data: {
              state: this.data.request.state,
              appParent: this
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
          });
        }
      }, {
        key: "onClickResetData",
        value: function onClickResetData() {
          this.data.request = this.getInitialRequest();
          this.data.settings = this.getInitialSettings();
        }
      }, {
        key: "onClickSendRequest",
        value: function onClickSendRequest() {
          var _this = this;

          var port = window.location.port === "4200" ? 8080 : window.location.port; // If in angular dev environment: Use 8080 (port of server in dev environment)

          var url = window.location.protocol + "//" + window.location.hostname + ":" + port + "/api/v1/OptimizeChargingProfiles";
          this.resetResponseError();
          this.restApiResponse.jsonContent = null; // Save original request for result chart (in case currentTimeSeconds and the fuseTree is changed)

          this.originalApiRequest = this.deepClone(this.data.request);
          this.httpClient.post(url, this.data.request).subscribe(function (response) {
            _this.restApiResponse.jsonContent = response;

            _this.refreshChartChargePlans();

            console.log("Result from server:");
            console.log(response);
          }, function (error) {
            console.log("An error occured.");
            console.log(error);

            if (error.error) {
              // For REST API exceptions, use message returned by server
              // For semantic errors (example: try to optimize with car that hasn't arrived yet)
              if (error.error.exceptionName) {
                _this.setResponseError({
                  name: error.error.exceptionName + " (Status: " + error.status + ")",
                  message: error.error.exceptionMessage
                });
              } else {
                // For syntax errors (example: JSON could not be constructed)
                _this.setResponseError({
                  name: error.error.status + " (Status: " + error.status + ")",
                  message: error.error.message
                });
              }
            } else {
              // For network exceptions, use browser error 
              _this.setResponseError(error);
            }
          });
        }
      }, {
        key: "resetResponseError",
        value: function resetResponseError() {
          this.setResponseError({
            name: "",
            message: ""
          });
        }
      }, {
        key: "setResponseError",
        value: function setResponseError(error) {
          this.restApiResponse.error = error;
        }
      }, {
        key: "refreshChartChargePlans",
        value: function refreshChartChargePlans() {
          console.log("Refreshing chart...");
          this.restApiResponse.chartAggregatedChargePlans = _utils_ChartChargePlans__WEBPACK_IMPORTED_MODULE_4__["ChartChargePlans"].getAggregatedChargePlans(this.originalApiRequest, this.restApiResponse.jsonContent, this.data.settings.chartChargePlans);
        }
      }, {
        key: "isPersistedInLocalStorage",
        value: function isPersistedInLocalStorage() {
          return localStorage.getItem(this.localStorageKey) !== null;
        }
      }, {
        key: "initFromLocalStorage",
        value: function initFromLocalStorage() {
          var savedData = JSON.parse(localStorage.getItem(this.localStorageKey));
          this.data = savedData;
        }
      }, {
        key: "persistToLocalStorage",
        value: function persistToLocalStorage() {
          console.log("Persisting to local storage...");
          localStorage.setItem(this.localStorageKey, JSON.stringify(this.data));
          this.openSnackBar("Data and settings have been saved.", "Dismiss");
        }
      }, {
        key: "applyObserverFunctions",
        value: function applyObserverFunctions(data) {
          try {
            var self = this;
            this.data = observable_slim__WEBPACK_IMPORTED_MODULE_1__["create"](data, false, function (changes) {
              self.persistToLocalStorage.call(self);
            });
          } catch (error) {
            console.log("Error loading data from local storage!");
            console.log(error);
          }
        }
      }, {
        key: "getNextFuseID",
        value: function getNextFuseID() {
          var highestFuseID = -1;
          this.traverseFuses(this.data.request.state.fuseTree.rootFuse, function (fuse) {
            if (fuse.id > highestFuseID) highestFuseID = fuse.id;
          });
          return highestFuseID + 1;
        }
      }, {
        key: "getNextChargingStationID",
        value: function getNextChargingStationID() {
          var highestID = -1;
          this.traverseFuses(this.data.request.state.fuseTree.rootFuse, function (fuse) {
            var _iterator = _createForOfIteratorHelper(fuse.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var child = _step.value;

                if (child["@type"] === "ChargingStation" && child.id > highestID) {
                  highestID = child.id;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
          return highestID + 1;
        }
      }, {
        key: "deleteFuseTreeNode",
        value: function deleteFuseTreeNode(fuseTreeNodeParam) {
          console.log("Deleting " + fuseTreeNodeParam["@type"] + " (id=" + fuseTreeNodeParam.id + ") from tree..."); // First delete all cars under this fuseTreeNode
          // First delete all EVs, charging stations and carAssignments that are children of this fuseTreeNode

          this.deleteAssignedCarsUnderFuseTreeNode(fuseTreeNodeParam); // Traverse tree until found
          // fuseTreeNodeParam can be charging station or fuse

          this.traverseFuses(this.data.request.state.fuseTree.rootFuse, function (fuse) {
            if (fuse.children.indexOf(fuseTreeNodeParam) !== -1) {
              fuse.children.splice(fuse.children.indexOf(fuseTreeNodeParam), 1);
              return;
            }
          });
        }
      }, {
        key: "deleteAssignedCarsUnderFuseTreeNode",
        value: function deleteAssignedCarsUnderFuseTreeNode(fuseTreeNodeParam) {
          console.log("Deleting all assigned cars under " + fuseTreeNodeParam["@type"] + " (id=" + fuseTreeNodeParam.id + ")");
          this.traverseFuses(fuseTreeNodeParam, function (fuseTreeNode) {
            var _iterator2 = _createForOfIteratorHelper(fuseTreeNode.children),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var child = _step2.value;
                console.log("Checking " + child["@type"] + " id=" + child.id + " for cars...");

                if (child["@type"] === "ChargingStation") {
                  if (this.isChargingStationAssigned(child) === true) {
                    this.deleteCar(child);
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          });
        }
      }, {
        key: "traverseFuses",
        value: function traverseFuses(fuse, callbackFunction) {
          var fuses = [fuse];

          while (fuses.length > 0) {
            var currentFuse = fuses.pop();
            if (!currentFuse.children) continue;
            callbackFunction.call(this, currentFuse);

            var _iterator3 = _createForOfIteratorHelper(currentFuse.children),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var child = _step3.value;
                fuses.push(child);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      }, {
        key: "getMaximumFuseTreeNodeDepth",
        value: function getMaximumFuseTreeNodeDepth(fuseTreeNode, depth) {
          // Charging station has no fuse children
          if (fuseTreeNode.children === undefined || fuseTreeNode.children.length === 0) return depth;
          var maxDepth = 0;

          var _iterator4 = _createForOfIteratorHelper(fuseTreeNode.children),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var child = _step4.value;
              var childDepth = this.getMaximumFuseTreeNodeDepth(child, depth + 1);

              if (childDepth > maxDepth) {
                maxDepth = childDepth;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return maxDepth;
        }
      }, {
        key: "addFuseChild",
        value: function addFuseChild(fuse) {
          var newFuse = this.buildFuse(this.getNextFuseID(), 32);
          fuse.children.push(newFuse);
        }
      }, {
        key: "addChargingStationChild",
        value: function addChargingStationChild(fuse) {
          var newChargingStation = this.buildChargingStation(this.getNextChargingStationID());
          fuse.children.push(newChargingStation);
        }
      }, {
        key: "isChargingStationAssigned",
        value: function isChargingStationAssigned(chargingStation) {
          return this.getCarAssignment(chargingStation.id) !== null;
        }
      }, {
        key: "getNextCarID",
        value: function getNextCarID() {
          var maxID = -1;
          this.data.request.state.cars.forEach(function (car) {
            if (maxID < car.id) {
              maxID = car.id;
            }
          });
          return maxID + 1;
        }
      }, {
        key: "addCar",
        value: function addCar(chargingStation) {
          var newCar = this.buildCar(this.getNextCarID());
          this.data.request.state.cars.push(newCar);
          this.data.request.state.carAssignments.push({
            carID: newCar.id,
            chargingStationID: chargingStation.id
          });
        }
      }, {
        key: "deleteCar",
        value: function deleteCar(chargingStation) {
          var carAssignment = this.getCarAssignment(chargingStation.id);
          var car = this.getCar(carAssignment.carID);
          console.log("Deleting car with id=" + car.id + " and car assignment");
          this.getCars().splice(this.getCars().indexOf(car), 1);
          this.getCarAssignments().splice(this.getCarAssignments().indexOf(carAssignment), 1);
        }
      }, {
        key: "getNumberOfCars",
        value: function getNumberOfCars() {
          return this.data.request.state.cars.length;
        }
      }, {
        key: "getCars",
        value: function getCars() {
          return this.data.request.state.cars;
        }
      }, {
        key: "getCar",
        value: function getCar(carID) {
          var _iterator5 = _createForOfIteratorHelper(this.data.request.state.cars),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var car = _step5.value;

              if (car.id === carID) {
                return car;
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          return null;
        }
      }, {
        key: "getCarAssignments",
        value: function getCarAssignments() {
          return this.data.request.state.carAssignments;
        }
      }, {
        key: "getCarAssignment",
        value: function getCarAssignment(chargingStationID) {
          var _iterator6 = _createForOfIteratorHelper(this.data.request.state.carAssignments),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var carAssignment = _step6.value;

              if (carAssignment.chargingStationID === chargingStationID) {
                return carAssignment;
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          return null;
        }
      }, {
        key: "getAssignedCar",
        value: function getAssignedCar(chargingStationID) {
          var carAssignment = this.getCarAssignment(chargingStationID);

          if (carAssignment !== null) {
            return this.getCar(carAssignment.carID);
          }

          return null;
        }
      }, {
        key: "getAssignedCarByFuseTreeNode",
        value: function getAssignedCarByFuseTreeNode(fuseTreeNode) {
          if (fuseTreeNode["@type"] === "ChargingStation") {
            return this.getAssignedCar(fuseTreeNode.id);
          } else {
            return null;
          }
        }
      }, {
        key: "buildCar",
        value: function buildCar(id) {
          return {
            id: id,
            canLoadPhase1: 1,
            canLoadPhase2: 1,
            canLoadPhase3: 1,
            timestampArrival: 8 * 3600,
            carType: "BEV",
            maxCapacity: 100,
            minLoadingState: 50,
            startCapacity: 10,
            minCurrent: 18,
            minCurrentPerPhase: 6,
            maxCurrent: 96,
            maxCurrentPerPhase: 32
          };
        }
      }, {
        key: "getInitialSettings",
        value: function getInitialSettings() {
          return {
            requestJSONExpanded: false,
            responseExpanded: true,
            chartChargePlans: {
              showCurrentTime: true,
              showIndividualCarPlans: true,
              showInfrastructureLimit: true
            }
          };
        }
      }, {
        key: "getInitialRequest",
        value: function getInitialRequest() {
          var fuseTree = this.getInitialFuseTree();
          return {
            event: {
              eventType: "Reoptimize"
            },
            state: {
              currentTimeSeconds: 12 * 3600,
              cars: [this.buildCar(0)],
              fuseTree: fuseTree,
              carAssignments: [{
                carID: 0,
                chargingStationID: 0
              }]
            }
          };
        }
      }, {
        key: "getInitialFuseTree",
        value: function getInitialFuseTree() {
          var fuse0 = this.buildFuse(0, 144);
          var fuse1_0 = this.buildFuse(1, 77);
          var fuse1_1 = this.buildFuse(2, 77);
          fuse0.children = [fuse1_0, fuse1_1];
          var chargingStation1 = this.buildChargingStation(0);
          var chargingStation2 = this.buildChargingStation(1);
          fuse1_0.children = [chargingStation1, chargingStation2];
          var chargingStation3 = this.buildChargingStation(2);
          var chargingStation4 = this.buildChargingStation(3);
          fuse1_1.children = [chargingStation3, chargingStation4];
          var fuseTree = {
            rootFuse: fuse0
          };
          return fuseTree;
        }
      }, {
        key: "getChargingStationsFromFuseTree",
        value: function getChargingStationsFromFuseTree(fuseTree) {
          var chargingStations = [];
          this.traverseFuses(fuseTree.rootFuse, function (fuse) {
            var _iterator7 = _createForOfIteratorHelper(fuse.children),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var child = _step7.value;

                if (child["@type"] === "ChargingStation") {
                  chargingStations.push(child);
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          });
          return chargingStations;
        }
      }, {
        key: "buildFuse",
        value: function buildFuse(id, fuseSize) {
          return {
            "@type": "Fuse",
            id: id,
            fusePhase1: fuseSize,
            fusePhase2: fuseSize,
            fusePhase3: fuseSize,
            children: []
          };
        }
      }, {
        key: "buildChargingStation",
        value: function buildChargingStation(id) {
          return {
            "@type": "ChargingStation",
            id: id,
            fusePhase1: 32,
            fusePhase2: 32,
            fusePhase3: 32,
            // Initial charge stations have no phase rotation
            phaseToGrid: {
              PHASE_1: "PHASE_1",
              PHASE_2: "PHASE_2",
              PHASE_3: "PHASE_3"
            },
            phaseToChargingStation: {
              PHASE_1: "PHASE_1",
              PHASE_2: "PHASE_2",
              PHASE_3: "PHASE_3"
            }
          };
        }
      }, {
        key: "getTimeHours",
        value: function getTimeHours() {
          return Math.floor(this.data.request.state.currentTimeSeconds / 3600);
        }
      }, {
        key: "getTimeMinutes",
        value: function getTimeMinutes() {
          return Math.floor(this.data.request.state.currentTimeSeconds % 3600 / 60);
        }
      }, {
        key: "getTimeSeconds",
        value: function getTimeSeconds() {
          return this.data.request.state.currentTimeSeconds % 60;
        }
      }, {
        key: "refreshCurrentTimeSeconds",
        value: function refreshCurrentTimeSeconds() {
          this.data.request.state.currentTimeSeconds = parseInt(this.inputHours.nativeElement.value) * 3600 + parseInt(this.inputMinutes.nativeElement.value) * 60 + parseInt(this.inputSeconds.nativeElement.value);
        }
      }, {
        key: "floor",
        value: function floor(n) {
          return Math.floor(n);
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this._snackBar.open(message, action, {
            duration: 1000
          });
        }
      }, {
        key: "deepClone",
        value: function deepClone(object) {
          return JSON.parse(JSON.stringify(object));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputHours = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputMinutes = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputSeconds = _t.first);
        }
      },
      decls: 71,
      vars: 20,
      consts: [["id", "divContainer"], [3, "multi"], [3, "expanded"], ["matPanelInputParameters", ""], [1, "floatLeft", "clearBoth"], ["appearance", "outline", 1, "floatLeft", "inputClockComponent"], ["matInput", "", "type", "number", "min", "0", "name", "inputHours", 3, "max", "value", "change"], ["inputHours", ""], ["matInput", "", "type", "number", "min", "0", "name", "inputMinutes", 3, "max", "value", "change"], ["inputMinutes", ""], ["matInput", "", "type", "number", "min", "0", "name", "inputSeconds", 3, "max", "value", "change"], ["inputSeconds", ""], [3, "fuseTreeNode", "depth", "appParent"], [1, "floatRight", "clearBoth"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "floatLeft"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "floatLeft", "clearBoth", 2, "margin-top", "5px"], [3, "expanded", "opened", "closed"], [3, "restApiRequest"], [4, "ngIf"], ["name", "checkboxShowInfrastructureLimit", "ngDefaultControl", "", 1, "checkboxChartSetting", 3, "ngModel", "change", "ngModelChange"], ["name", "checkboxShowCurrentTime", "ngDefaultControl", "", 1, "checkboxChartSetting", 3, "ngModel", "change", "ngModelChange"], ["name", "checkboxShowIndividualCarPlans", "ngDefaultControl", "", 1, "checkboxChartSetting", 3, "ngModel", "change", "ngModelChange"], [3, "restApiResponse"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Enter data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hours");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_15_listener() {
            return ctx.refreshCurrentTimeSeconds();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Minutes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_20_listener() {
            return ctx.refreshCurrentTimeSeconds();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Seconds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_25_listener() {
            return ctx.refreshCurrentTimeSeconds();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Charging infrastructure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-fuse-tree-component", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_32_listener() {
            return ctx.onClickResetData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Reset data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_37_listener() {
            return ctx.onClickShowFuseTreeCircuitDiagram();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Show circuit diagram of fuse tree ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_42_listener() {
            return ctx.onClickSendRequest();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Optimize charge plans (send request to server) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-expansion-panel", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function AppComponent_Template_mat_expansion_panel_opened_46_listener() {
            return ctx.data.settings.requestJSONExpanded = true;
          })("closed", function AppComponent_Template_mat_expansion_panel_closed_46_listener() {
            return ctx.data.settings.requestJSONExpanded = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " REST Request ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " View JSON request that is sent to server ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-request-json-component", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-expansion-panel", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function AppComponent_Template_mat_expansion_panel_opened_53_listener() {
            return ctx.data.settings.responseExpanded = true;
          })("closed", function AppComponent_Template_mat_expansion_panel_closed_53_listener() {
            return ctx.data.settings.responseExpanded = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Results ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " View JSON response and results ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AppComponent_div_59_Template, 4, 7, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Chart settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-checkbox", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_mat_checkbox_change_63_listener() {
            return ctx.refreshChartChargePlans();
          })("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_63_listener($event) {
            return ctx.data.settings.chartChargePlans.showInfrastructureLimit = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Show infrastructure limit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-checkbox", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_mat_checkbox_change_65_listener() {
            return ctx.refreshChartChargePlans();
          })("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_65_listener($event) {
            return ctx.data.settings.chartChargePlans.showCurrentTime = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Show current time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-checkbox", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_mat_checkbox_change_67_listener() {
            return ctx.refreshChartChargePlans();
          })("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_67_listener($event) {
            return ctx.data.settings.chartChargePlans.showIndividualCarPlans = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Show individual car plans");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "app-result-json-component", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Time (seconds after midnight: ", ctx.data.request.state.currentTimeSeconds, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 23)("value", ctx.getTimeHours());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 59)("value", ctx.getTimeMinutes());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 23)("value", ctx.getTimeSeconds());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fuseTreeNode", ctx.data.request.state.fuseTree.rootFuse)("depth", 0)("appParent", ctx);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.data.settings.requestJSONExpanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("restApiRequest", ctx.data.request);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.data.settings.responseExpanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.restApiResponse.chartAggregatedChargePlans !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.settings.chartChargePlans.showInfrastructureLimit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.settings.chartChargePlans.showCurrentTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.settings.chartChargePlans.showIndividualCarPlans);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("restApiResponse", ctx.restApiResponse);
        }
      },
      styles: [".inputClockComponent[_ngcontent-%COMP%] {\r\n    width: 100px; \r\n}\r\n\r\n\r\n.checkboxChartSetting[_ngcontent-%COMP%] {\r\n    float: left; \r\n    clear: both; \r\n    margin-left: 20px; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmlucHV0Q2xvY2tDb21wb25lbnQge1xyXG4gICAgd2lkdGg6IDEwMHB4OyBcclxufVxyXG5cclxuXHJcbi5jaGVja2JveENoYXJ0U2V0dGluZyB7XHJcbiAgICBmbG9hdDogbGVmdDsgXHJcbiAgICBjbGVhcjogYm90aDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDsgXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }];
      }, {
        inputHours: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["inputHours"]
        }],
        inputMinutes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["inputMinutes"]
        }],
        inputSeconds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["inputSeconds"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _fuse_tree_component_fuse_tree_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./fuse-tree-component/fuse-tree-component.component */
    "./src/app/fuse-tree-component/fuse-tree-component.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _result_json_component_result_json_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./result-json-component/result-json-component.component */
    "./src/app/result-json-component/result-json-component.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var ng_json_view__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng-json-view */
    "./node_modules/ng-json-view/fesm2015/ng-json-view.js");
    /* harmony import */


    var _request_json_component_request_json_component_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./request-json-component/request-json-component.component */
    "./src/app/request-json-component/request-json-component.component.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./fuse-tree-circuit-diagram/fuse-tree-circuit-diagram.component */
    "./src/app/fuse-tree-circuit-diagram/fuse-tree-circuit-diagram.component.ts");
    /* harmony import */


    var _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./fuse-tree-circuit-diagram/fuse-tree-circuit-diagram-dialog */
    "./src/app/fuse-tree-circuit-diagram/fuse-tree-circuit-diagram-dialog.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/esm2015/text-field.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_20__["ChartsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], ng_json_view__WEBPACK_IMPORTED_MODULE_18__["NgxJsonViewModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _fuse_tree_component_fuse_tree_component_component__WEBPACK_IMPORTED_MODULE_10__["FuseTreeComponentComponent"], _result_json_component_result_json_component_component__WEBPACK_IMPORTED_MODULE_15__["ResultJsonComponentComponent"], _request_json_component_request_json_component_component__WEBPACK_IMPORTED_MODULE_19__["RequestJsonComponentComponent"], _fuse_tree_component_fuse_tree_component_component__WEBPACK_IMPORTED_MODULE_10__["EditFuseTreeComponentDialog"], _fuse_tree_component_fuse_tree_component_component__WEBPACK_IMPORTED_MODULE_10__["EditCarDialog"], _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_component__WEBPACK_IMPORTED_MODULE_21__["FuseTreeCircuitDiagramComponent"], _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_dialog__WEBPACK_IMPORTED_MODULE_22__["FuseTreeCircuitDiagramDialog"], _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_component__WEBPACK_IMPORTED_MODULE_21__["FuseCircuitDiagram"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_20__["ChartsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], ng_json_view__WEBPACK_IMPORTED_MODULE_18__["NgxJsonViewModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _fuse_tree_component_fuse_tree_component_component__WEBPACK_IMPORTED_MODULE_10__["FuseTreeComponentComponent"], _result_json_component_result_json_component_component__WEBPACK_IMPORTED_MODULE_15__["ResultJsonComponentComponent"], _request_json_component_request_json_component_component__WEBPACK_IMPORTED_MODULE_19__["RequestJsonComponentComponent"], _fuse_tree_component_fuse_tree_component_component__WEBPACK_IMPORTED_MODULE_10__["EditFuseTreeComponentDialog"], _fuse_tree_component_fuse_tree_component_component__WEBPACK_IMPORTED_MODULE_10__["EditCarDialog"], _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_component__WEBPACK_IMPORTED_MODULE_21__["FuseTreeCircuitDiagramComponent"], _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_dialog__WEBPACK_IMPORTED_MODULE_22__["FuseTreeCircuitDiagramDialog"], _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_component__WEBPACK_IMPORTED_MODULE_21__["FuseCircuitDiagram"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_20__["ChartsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], ng_json_view__WEBPACK_IMPORTED_MODULE_18__["NgxJsonViewModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_l"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogActions"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__["Dir"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioButton"], ng2_charts__WEBPACK_IMPORTED_MODULE_20__["BaseChartDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelActionRow"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOptgroup"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxRequiredValidator"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarContainer"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_27__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_27__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], ng_json_view__WEBPACK_IMPORTED_MODULE_18__["NgxJsonViewComponent"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _fuse_tree_component_fuse_tree_component_component__WEBPACK_IMPORTED_MODULE_10__["FuseTreeComponentComponent"], _result_json_component_result_json_component_component__WEBPACK_IMPORTED_MODULE_15__["ResultJsonComponentComponent"], _request_json_component_request_json_component_component__WEBPACK_IMPORTED_MODULE_19__["RequestJsonComponentComponent"], _fuse_tree_component_fuse_tree_component_component__WEBPACK_IMPORTED_MODULE_10__["EditFuseTreeComponentDialog"], _fuse_tree_component_fuse_tree_component_component__WEBPACK_IMPORTED_MODULE_10__["EditCarDialog"], _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_component__WEBPACK_IMPORTED_MODULE_21__["FuseTreeCircuitDiagramComponent"], _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_dialog__WEBPACK_IMPORTED_MODULE_22__["FuseTreeCircuitDiagramDialog"], _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_component__WEBPACK_IMPORTED_MODULE_21__["FuseCircuitDiagram"]], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]]);

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_dialog__WEBPACK_IMPORTED_MODULE_22__["FuseTreeCircuitDiagramDialog"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_l"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogActions"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__["Dir"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioButton"], ng2_charts__WEBPACK_IMPORTED_MODULE_20__["BaseChartDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelActionRow"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOptgroup"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxRequiredValidator"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarContainer"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_27__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_27__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], ng_json_view__WEBPACK_IMPORTED_MODULE_18__["NgxJsonViewComponent"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _fuse_tree_component_fuse_tree_component_component__WEBPACK_IMPORTED_MODULE_10__["FuseTreeComponentComponent"], _result_json_component_result_json_component_component__WEBPACK_IMPORTED_MODULE_15__["ResultJsonComponentComponent"], _request_json_component_request_json_component_component__WEBPACK_IMPORTED_MODULE_19__["RequestJsonComponentComponent"], _fuse_tree_component_fuse_tree_component_component__WEBPACK_IMPORTED_MODULE_10__["EditFuseTreeComponentDialog"], _fuse_tree_component_fuse_tree_component_component__WEBPACK_IMPORTED_MODULE_10__["EditCarDialog"], _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_component__WEBPACK_IMPORTED_MODULE_21__["FuseTreeCircuitDiagramComponent"], _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_dialog__WEBPACK_IMPORTED_MODULE_22__["FuseTreeCircuitDiagramDialog"], _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_component__WEBPACK_IMPORTED_MODULE_21__["FuseCircuitDiagram"]], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/fuse-tree-circuit-diagram/fuse-tree-circuit-diagram-dialog.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/fuse-tree-circuit-diagram/fuse-tree-circuit-diagram-dialog.ts ***!
    \*******************************************************************************/

  /*! exports provided: FuseTreeCircuitDiagramDialog */

  /***/
  function srcAppFuseTreeCircuitDiagramFuseTreeCircuitDiagramDialogTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FuseTreeCircuitDiagramDialog", function () {
      return FuseTreeCircuitDiagramDialog;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../utils/Utils */
    "./src/app/utils/Utils.ts");
    /* harmony import */


    var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @svgdotjs/svg.js */
    "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");

    var FuseTreeCircuitDiagramDialog = /*#__PURE__*/function () {
      function FuseTreeCircuitDiagramDialog(dialogRef, data) {
        _classCallCheck(this, FuseTreeCircuitDiagramDialog);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(FuseTreeCircuitDiagramDialog, [{
        key: "onClickClose",
        value: function onClickClose() {
          this.dialogRef.close();
        }
      }, {
        key: "onClickSave",
        value: function onClickSave() {
          //const svgCircuitDiagram: Element = document.getElementsByClassName("svgCircuitDiagram")[0];
          //const svgContent = svgCircuitDiagram.outerHTML; 
          var svgContent = Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_3__["SVG"])(".svgCircuitDiagram").svg();

          _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].createFileDownload("fuseTreeCircuitDiagram.svg", svgContent);
        }
      }]);

      return FuseTreeCircuitDiagramDialog;
    }();

    FuseTreeCircuitDiagramDialog.ɵfac = function FuseTreeCircuitDiagramDialog_Factory(t) {
      return new (t || FuseTreeCircuitDiagramDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    FuseTreeCircuitDiagramDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FuseTreeCircuitDiagramDialog,
      selectors: [["fuse-tree-circuit-diagram-dialog"]],
      decls: 16,
      vars: 3,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 2, "height", "83%", "max-height", "9999px", "width", "100%"], [3, "phaseMatching", "fuseTreeNode", "appParent"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-raised-button", "", 1, "floatLeft", 3, "click"], ["mat-button", "", "mat-raised-button", "", 1, "floatRight", 3, "click"]],
      template: function FuseTreeCircuitDiagramDialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fuse tree circuit diagram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hint: You can pan across and zoom in on the circuit diagram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-fuse-tree-circuit-diagram", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FuseTreeCircuitDiagramDialog_Template_button_click_8_listener() {
            return ctx.onClickClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " OK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FuseTreeCircuitDiagramDialog_Template_button_click_12_listener() {
            return ctx.onClickSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "save_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Save as SVG file ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("phaseMatching", null)("fuseTreeNode", ctx.data.state.fuseTree.rootFuse)("appParent", ctx.data.appParent);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FuseTreeCircuitDiagramDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'fuse-tree-circuit-diagram-dialog',
          templateUrl: 'fuse-tree-circuit-diagram-dialog.html'
        }]
      }], function () {
        return [{
          type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/fuse-tree-circuit-diagram/fuse-tree-circuit-diagram.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/fuse-tree-circuit-diagram/fuse-tree-circuit-diagram.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: FuseTreeCircuitDiagramComponent, FuseCircuitDiagram */

  /***/
  function srcAppFuseTreeCircuitDiagramFuseTreeCircuitDiagramComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FuseTreeCircuitDiagramComponent", function () {
      return FuseTreeCircuitDiagramComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FuseCircuitDiagram", function () {
      return FuseCircuitDiagram;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/Utils */
    "./src/app/utils/Utils.ts");
    /* harmony import */


    var panzoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! panzoom */
    "./node_modules/panzoom/index.js");
    /* harmony import */


    var panzoom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(panzoom__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    function FuseTreeCircuitDiagramComponent__svg_g_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "line", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "text", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Phase 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "line", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "text", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Phase 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "line", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "text", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Phase 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r33.circuitDiagram.legend.width)("height", ctx_r33.circuitDiagram.legend.padding + 3 * ctx_r33.circuitDiagram.cable.phaseMargin)("x", ctx_r33.getLegendX())("y", ctx_r33.circuitDiagram.legend.marginTop);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r33.getLegendX() + ctx_r33.circuitDiagram.legend.padding)("y1", ctx_r33.circuitDiagram.legend.marginTop + ctx_r33.circuitDiagram.legend.padding)("x2", ctx_r33.getLegendX() + ctx_r33.circuitDiagram.legend.width - ctx_r33.circuitDiagram.legend.padding)("y2", ctx_r33.circuitDiagram.legend.marginTop + ctx_r33.circuitDiagram.legend.padding);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r33.getLegendX() + ctx_r33.circuitDiagram.legend.padding)("y", ctx_r33.circuitDiagram.legend.marginTop + ctx_r33.circuitDiagram.legend.padding + ctx_r33.circuitDiagram.cable.phaseMargin - 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r33.getLegendX() + ctx_r33.circuitDiagram.legend.padding)("y1", ctx_r33.circuitDiagram.legend.marginTop + ctx_r33.circuitDiagram.legend.padding + ctx_r33.circuitDiagram.cable.phaseMargin)("x2", ctx_r33.getLegendX() + ctx_r33.circuitDiagram.legend.width - ctx_r33.circuitDiagram.legend.padding)("y2", ctx_r33.circuitDiagram.legend.marginTop + ctx_r33.circuitDiagram.legend.padding + ctx_r33.circuitDiagram.cable.phaseMargin);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r33.getLegendX() + ctx_r33.circuitDiagram.legend.padding)("y", ctx_r33.circuitDiagram.legend.marginTop + ctx_r33.circuitDiagram.legend.padding + 2 * ctx_r33.circuitDiagram.cable.phaseMargin - 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r33.getLegendX() + ctx_r33.circuitDiagram.legend.padding)("y1", ctx_r33.circuitDiagram.legend.marginTop + ctx_r33.circuitDiagram.legend.padding + 2 * ctx_r33.circuitDiagram.cable.phaseMargin)("x2", ctx_r33.getLegendX() + ctx_r33.circuitDiagram.legend.width - ctx_r33.circuitDiagram.legend.padding)("y2", ctx_r33.circuitDiagram.legend.marginTop + ctx_r33.circuitDiagram.legend.padding + 2 * ctx_r33.circuitDiagram.cable.phaseMargin);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r33.getLegendX() + ctx_r33.circuitDiagram.legend.padding)("y", ctx_r33.circuitDiagram.legend.marginTop + ctx_r33.circuitDiagram.legend.padding + 3 * ctx_r33.circuitDiagram.cable.phaseMargin - 5);
      }
    }

    var _c0 = function _c0(a2, a3) {
      return [0, 0, a2, a3];
    };

    var _c1 = ["fuse-circuit-diagram", ""];

    function FuseCircuitDiagram__svg_g_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "circleConnectorPoint" + ctx_r34.getLeftCablePhase());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r34.getLeftCableX())("cy", ctx_r34.getLeftCableToNodeY1())("r", ctx_r34.settings.connectorPoint.radius);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "circleConnectorPoint" + ctx_r34.getMiddleCablePhase());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r34.getNodeCenterX())("cy", ctx_r34.getMiddleCableToNodeY1())("r", ctx_r34.settings.connectorPoint.radius);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "circleConnectorPoint" + ctx_r34.getRightCablePhase());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r34.getRightCableX())("cy", ctx_r34.getRightCableToNodeY1())("r", ctx_r34.settings.connectorPoint.radius);
      }
    }

    function FuseCircuitDiagram__svg_g_10__svg_g_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "line", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "line", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "line", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r39.getLeftCableX())("y1", ctx_r39.getLeftCableFromNodeY2())("x2", ctx_r39.getRightCableX() + ctx_r39.fuseTreeNode.children.length * ctx_r39.settings.columnWidth + ctx_r39.settings.cable.horizontalX2Offset)("y2", ctx_r39.getLeftCableFromNodeY2());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r39.getNodeCenterX())("y1", ctx_r39.getMiddleCableFromNodeY2())("x2", ctx_r39.getRightCableX() + ctx_r39.fuseTreeNode.children.length * ctx_r39.settings.columnWidth + ctx_r39.settings.cable.horizontalX2Offset)("y2", ctx_r39.getMiddleCableFromNodeY2());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r39.getRightCableX())("y1", ctx_r39.getRightCableFromNodeY2())("x2", ctx_r39.getRightCableX() + ctx_r39.fuseTreeNode.children.length * ctx_r39.settings.columnWidth + ctx_r39.settings.cable.horizontalX2Offset)("y2", ctx_r39.getRightCableFromNodeY2());
      }
    }

    function FuseCircuitDiagram__svg_g_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "line", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "line", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "line", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FuseCircuitDiagram__svg_g_10__svg_g_4_Template, 4, 12, "g", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "lineCable" + ctx_r35.getLeftCablePhase());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r35.getLeftCableX())("y1", ctx_r35.getNodeBottomY())("x2", ctx_r35.getLeftCableX())("y2", ctx_r35.getLeftCableFromNodeY2());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "lineCable" + ctx_r35.getMiddleCablePhase());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r35.getNodeCenterX())("y1", ctx_r35.getNodeBottomY())("x2", ctx_r35.getNodeCenterX())("y2", ctx_r35.getMiddleCableFromNodeY2());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "lineCable" + ctx_r35.getRightCablePhase());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r35.getRightCableX())("y1", ctx_r35.getNodeBottomY())("x2", ctx_r35.getRightCableX())("y2", ctx_r35.getRightCableFromNodeY2());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.isChargingStation() === false);
      }
    }

    function FuseCircuitDiagram__svg_g_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "text", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tspan", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tspan", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx_r36.getNodeWidth())("height", ctx_r36.getNodeHeight())("x", ctx_r36.getNodeX())("y", ctx_r36.getNodeBottomY() + ctx_r36.settings.cable.lengthWithoutPhases);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("y", ctx_r36.getNodeCenterY() + ctx_r36.settings.cable.lengthWithoutPhases + ctx_r36.settings.fuse.height);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r36.getNodeCenterX());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r36.getAssignedTitleLabel());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r36.getNodeCenterX());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r36.getAssignedValueLabel());
      }
    }

    function FuseCircuitDiagram__svg_g_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "text", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phase 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "line", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "text", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Phase 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "line", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "text", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Phase 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "line", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", 0)("y", ctx_r37.getNodeY() - ctx_r37.settings.cable.lengthWithoutPhases - ctx_r37.settings.cable.phaseMargin - 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", 0)("y1", ctx_r37.getNodeY() - ctx_r37.settings.cable.lengthWithoutPhases - ctx_r37.getCableLengthByPhase("PHASE_1"))("x2", ctx_r37.fuseTreeCircuitDiagram.getMaximumSVGWidth())("y2", ctx_r37.getNodeY() - ctx_r37.settings.cable.lengthWithoutPhases - ctx_r37.getCableLengthByPhase("PHASE_1"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", 0)("y", ctx_r37.getNodeY() - ctx_r37.settings.cable.lengthWithoutPhases - 0 * ctx_r37.settings.cable.phaseMargin - 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", 0)("y1", ctx_r37.getNodeY() - ctx_r37.settings.cable.lengthWithoutPhases - ctx_r37.getCableLengthByPhase("PHASE_2"))("x2", ctx_r37.fuseTreeCircuitDiagram.getMaximumSVGWidth())("y2", ctx_r37.getNodeY() - ctx_r37.settings.cable.lengthWithoutPhases - ctx_r37.getCableLengthByPhase("PHASE_2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", 0)("y", ctx_r37.getNodeY() - ctx_r37.settings.cable.lengthWithoutPhases + 1 * ctx_r37.settings.cable.phaseMargin - 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", 0)("y1", ctx_r37.getNodeY() - ctx_r37.settings.cable.lengthWithoutPhases - ctx_r37.getCableLengthByPhase("PHASE_3"))("x2", ctx_r37.fuseTreeCircuitDiagram.getMaximumSVGWidth())("y2", ctx_r37.getNodeY() - ctx_r37.settings.cable.lengthWithoutPhases - ctx_r37.getCableLengthByPhase("PHASE_3"));
      }
    }

    function FuseCircuitDiagram__svg_g_13__svg_g_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "g", 12);
      }

      if (rf & 2) {
        var fuseTreeNodeChild_r41 = ctx.$implicit;
        var childIndex_r42 = ctx.index;

        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fuseTreeNode", fuseTreeNodeChild_r41)("fuseTreeCircuitDiagram", ctx_r40.fuseTreeCircuitDiagram)("appParent", ctx_r40.appParent)("fuseTreeNodeParent", ctx_r40.fuseTreeNode)("rowIndex", ctx_r40.rowIndex + 1 + ctx_r40.getSumFollowingSiblingDepth())("columnIndex", ctx_r40.columnIndex + 1 + childIndex_r42);
      }
    }

    function FuseCircuitDiagram__svg_g_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FuseCircuitDiagram__svg_g_13__svg_g_1_Template, 1, 6, "g", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r38.fuseTreeNode.children);
      }
    }

    var FuseTreeCircuitDiagramComponent = /*#__PURE__*/function () {
      /**
       * Generate SVG based on state:
       * Fuse tree and assigned cars
       */
      function FuseTreeCircuitDiagramComponent() {
        _classCallCheck(this, FuseTreeCircuitDiagramComponent);

        this.circuitDiagram = {
          marginLeft: 50,
          marginTop: -1,
          marginBottom: -1,
          rowHeight: -1,
          rowBuffer: 80,
          columnWidth: 190,
          // margin between cables
          cable: {
            phaseMargin: 20,
            lengthWithoutPhases: 30,
            horizontalX2Offset: 10
          },
          connectorPoint: {
            radius: 2
          },
          // The fuse rectangle itself
          fuse: {
            width: 170,
            height: 40
          },
          // Charge stations
          chargeStation: {
            width: 170,
            height: 40
          },
          // Legend (top right)
          legend: {
            width: 100,
            padding: 5,
            marginTop: 5,
            marginRight: 5
          }
        };
        var c = this.circuitDiagram;
        this.circuitDiagram.marginTop = c.cable.lengthWithoutPhases + 2 * c.cable.phaseMargin + c.connectorPoint.radius; //this.circuitDiagram.marginBottom = 2*c.chargeStation.height + c.cable.lengthWithoutPhases; 

        this.circuitDiagram.marginBottom = 0;
        this.circuitDiagram.rowHeight = c.fuse.height + 2 * c.cable.lengthWithoutPhases + 2 * c.cable.phaseMargin + c.rowBuffer;
        console.log("Using circuit diagram settings: ");
        console.log(this.circuitDiagram);
      }

      _createClass(FuseTreeCircuitDiagramComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isExplicitPhaseMatching() === false) {
            this.setSVGPanAndZoom();
          }
        }
        /**
         * Without any scaling, what is maximum height that we want?
         * maximumRowIndex * rowHeight + marginTop + marginBottom
         */

      }, {
        key: "getMaximumSVGHeight",
        value: function getMaximumSVGHeight() {
          if (this.fuseTreeNode["@type"] === "ChargingStation") {
            // If we are showing a single charging station, no need to show a whole row
            var _result = this.circuitDiagram.marginTop + // Includes cable leading to station
            this.circuitDiagram.chargeStation.height * 2 + // rect for charge station and car
            this.circuitDiagram.cable.lengthWithoutPhases; // between station and car 
            //console.log("Init circuit diagram for a charging station with result height=" + result);


            return _result;
          }

          var maximumRowIndex = this.getMaximumRowIndex(this.fuseTreeNode, 0);
          var result = (maximumRowIndex + 1) * this.circuitDiagram.rowHeight + this.circuitDiagram.marginTop + this.circuitDiagram.marginBottom; //console.log("Init circuit diagram with maximumRowIndex=" + maximumRowIndex + ", each row=" + this.circuitDiagram.rowHeight  + ". result height=" + result); 

          return result;
        }
        /**
         * Without any scaling, what is the maximum width we want?
         * maximumColumnIndex * columnWidth + marginLeft * 2
         */

      }, {
        key: "getMaximumSVGWidth",
        value: function getMaximumSVGWidth() {
          var maximumColumnIndex = this.getMaximumColumnIndex(this.fuseTreeNode, 0);
          var result = (maximumColumnIndex + 1) * this.circuitDiagram.columnWidth + this.circuitDiagram.marginLeft * 2; //console.log("Init circuit diagram with maximumColumnIndex=" + maximumColumnIndex + ", each column=" + this.circuitDiagram.columnWidth  + ". result width=" + result); 

          return result;
        }
        /**
         *
         * Compute via tree depth, what is the deepest rowIndex we need to go
         *
         * From example below: maximum row index is 7
         **/

      }, {
        key: "getMaximumRowIndex",
        value: function getMaximumRowIndex(fuseTreeNode, depth) {
          if (fuseTreeNode["@type"] === "ChargingStation") return depth;
          if (fuseTreeNode.children.length === 0) return depth;
          var maxRowIndex = 0;

          var _iterator8 = _createForOfIteratorHelper(fuseTreeNode.children),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var child = _step8.value;
              // How much will rowIndex increase due to following siblings?
              var sumFollowingSiblingDepth = this.getSumFollowingSiblingDepth(child, fuseTreeNode); // How do children impact this?

              var childMaxRowIndex = this.getMaximumRowIndex(child, depth + 1);

              if (sumFollowingSiblingDepth + childMaxRowIndex > maxRowIndex) {
                maxRowIndex = sumFollowingSiblingDepth + childMaxRowIndex;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }

          return maxRowIndex;
        }
        /**
         * From example below: maximum col index is 5
         */

      }, {
        key: "getMaximumColumnIndex",
        value: function getMaximumColumnIndex(fuseTreeNode, depth) {
          var _this2 = this;

          if (fuseTreeNode["@type"] === "ChargingStation") return depth;
          if (fuseTreeNode.children.length === 0) return depth;
          var maxColumnIndex = 0;
          fuseTreeNode.children.forEach(function (child, childIndex) {
            var columnIndex = childIndex + _this2.getMaximumColumnIndex(child, depth + 1);

            if (columnIndex > maxColumnIndex) {
              maxColumnIndex = columnIndex;
            }
          });
          return maxColumnIndex;
        }
        /**
         * Of the siblings after this element in the parent's children array: What is the sum of their maximum depth?
         *
         * Example:
         *
         * Fuse (rowIndex=0) <-- Result = 0
         * ---- Fuse (rowIndex=1) <-- Result = 3
         *      ---- Fuse (rowIndex=5) <--- Result = 1
         *           ---- Fuse (rowIndex=7)
         *      ---- Fuse (rowIndex=5)
         *           ---- Fuse (rowIndex=6)
         * ---- Fuse (rowIndex=1) <-- Result = 2
         *      ---- ChargeStation (RowIndex=4) <-- Result = 0
         *      ---- Fuse (RowIndex=4) <-- Result = 0
         * ---- Fuse (rowIndex=1) <-- Result = 0
         *      ---- Fuse (rowIndex=2) <-- Result = 0
         *           ---- Fuse (rowIndex=3) <--- Result = 0
         */

      }, {
        key: "getSumFollowingSiblingDepth",
        value: function getSumFollowingSiblingDepth(fuseTreeNode, fuseTreeNodeParent) {
          if (fuseTreeNodeParent === null) return 0; // Root fuse has no parent

          var followingSiblings = []; // Find the siblings that follow this fuseTreeNode

          var foundInChildrenArray = false;

          var _iterator9 = _createForOfIteratorHelper(fuseTreeNodeParent.children),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var sibling = _step9.value;

              if (foundInChildrenArray === true) {
                followingSiblings.push(sibling);
              }

              if (sibling.id === fuseTreeNode.id && sibling["@type"] === fuseTreeNode["@type"]) {
                foundInChildrenArray = true;
              }
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          var sumFollowingSiblingDepth = 0;

          for (var _i = 0, _followingSiblings = followingSiblings; _i < _followingSiblings.length; _i++) {
            var followingSibling = _followingSiblings[_i];
            var siblingMaximumDepth = this.appParent.getMaximumFuseTreeNodeDepth(followingSibling, 0);
            sumFollowingSiblingDepth += siblingMaximumDepth;
          } // console.log("getSumFollowingSiblingDepth: Returning " + sumFollowingSiblingDepth + " for " + this.fuseTreeNode["@type"] + ", id=" + this.fuseTreeNode.id);


          return sumFollowingSiblingDepth;
        }
      }, {
        key: "getSVGElement",
        value: function getSVGElement() {
          return document.getElementsByClassName("svgCircuitDiagram")[0];
        }
      }, {
        key: "getScaledSVG",
        value: function getScaledSVG() {
          var svgCircuitDiagram = this.getSVGElement();
          var maxSVGWidth = this.getMaximumSVGWidth();
          var maxSVGHeight = this.getMaximumSVGHeight();
          var svgAspectRatio = maxSVGWidth / maxSVGHeight; // ratio > 1 ==> svg is wider than tall

          var parentElement = svgCircuitDiagram.parentElement.parentElement; // parentElement is <app-fuse-tree-circuit-diagram>, parent of that is <div>

          var computedStyle = getComputedStyle(parentElement);
          var maxElementWidth = parentElement.clientWidth - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight);
          var maxElementHeight = parentElement.clientHeight; // 0.75*window.innerHeight; // If viewing complete circuit diagram: use 0.75 

          console.log("Using maxElementHeight=" + maxElementHeight);
          var elementAspectRatio = maxElementWidth / maxElementHeight; // ratio > 1 ==> element can be wider than it is tall 

          if (svgAspectRatio > elementAspectRatio) {
            // SVG has higher width:height ratio than element ==> restrict height
            //console.log("here with ratio=" + svgAspectRatio + ", elementRatio=" + elementAspectRatio + ". Restricting height to: " + (maxElementWidth/svgAspectRatio)); 
            return {
              width: maxElementWidth,
              height: Math.ceil(maxElementWidth / svgAspectRatio)
            };
          } else {
            // SVG has lower ratio than element ==> restrict width
            //console.log("here with ratio=" + svgAspectRatio + ", elementRatio=" + elementAspectRatio + ". Restricting width"); 
            return {
              width: Math.ceil(maxElementHeight * svgAspectRatio),
              height: maxElementHeight
            };
          }
        }
      }, {
        key: "getScaledSVGWidth",
        value: function getScaledSVGWidth() {
          return this.getScaledSVG().width;
        }
        /**
         * Get tree depth: What is the deepest we need to go?
         */

      }, {
        key: "getScaledSVGHeight",
        value: function getScaledSVGHeight() {
          return this.getScaledSVG().height;
        }
      }, {
        key: "getLegendX",
        value: function getLegendX() {
          return this.getMaximumSVGWidth() - this.circuitDiagram.legend.width - this.circuitDiagram.legend.marginRight;
        }
      }, {
        key: "isExplicitPhaseMatching",
        value: function isExplicitPhaseMatching() {
          return this.phaseMatching !== null && this.phaseMatching !== undefined;
        }
      }, {
        key: "setSVGPanAndZoom",
        value: function setSVGPanAndZoom() {
          // panzoom wants first <g> element, not the root element
          var groupInSVG = document.querySelector(".svgCircuitDiagram > .groupFuseCircuitDiagram");
          console.log("Activating pan and zoom on element:");
          console.log(groupInSVG);
          panzoom__WEBPACK_IMPORTED_MODULE_2___default.a(groupInSVG);
        }
      }]);

      return FuseTreeCircuitDiagramComponent;
    }();

    FuseTreeCircuitDiagramComponent.ɵfac = function FuseTreeCircuitDiagramComponent_Factory(t) {
      return new (t || FuseTreeCircuitDiagramComponent)();
    };

    FuseTreeCircuitDiagramComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FuseTreeCircuitDiagramComponent,
      selectors: [["app-fuse-tree-circuit-diagram"]],
      inputs: {
        fuseTreeNode: "fuseTreeNode",
        appParent: "appParent",
        phaseMatching: "phaseMatching"
      },
      decls: 8,
      vars: 14,
      consts: [[1, "svgCircuitDiagram"], ["svgCircuitDiagram", ""], ["type", "text/css"], [4, "ngIf"], ["fuse-circuit-diagram", "", 1, "groupFuseCircuitDiagram", 3, "fuseTreeNode", "fuseTreeNodeParent", "fuseTreeCircuitDiagram", "appParent", "phaseMatching", "rowIndex", "columnIndex"], [1, "rectFuse"], [1, "lineCablePHASE_1"], [1, "textPhase"], [1, "lineCablePHASE_2"], [1, "lineCablePHASE_3"]],
      template: function FuseTreeCircuitDiagramComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "style", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " .svgCircuitDiagram { margin: 0 auto; display: block; } .lineCable { stroke: black; } .lineCablePHASE_1 { stroke: brown; } .lineCablePHASE_2 { stroke: black; } .lineCablePHASE_3 { stroke: gray; } .circleConnectorPointPHASE_1 { stroke: brown; fill: brown; } .circleConnectorPointPHASE_2 { stroke: black; fill: black; } .circleConnectorPointPHASE_3 { stroke: gray; fill: gray; } .rectFuse { stroke: black; fill: white; } .textFuse { text-anchor: middle; dominant-baseline: middle; /* centers on y axis */ } .textPhase { text-anchor: start; } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FuseTreeCircuitDiagramComponent__svg_g_5_Template, 11, 22, "g", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "g", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " >\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx.getScaledSVGWidth())("height", ctx.getScaledSVGHeight())("viewBox", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx.getMaximumSVGWidth(), ctx.getMaximumSVGHeight()));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phaseMatching === null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fuseTreeNode", ctx.fuseTreeNode)("fuseTreeNodeParent", null)("fuseTreeCircuitDiagram", ctx)("appParent", ctx.appParent)("phaseMatching", ctx.phaseMatching)("rowIndex", 0)("columnIndex", 0);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], FuseCircuitDiagram];
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1c2UtdHJlZS1jaXJjdWl0LWRpYWdyYW0vZnVzZS10cmVlLWNpcmN1aXQtZGlhZ3JhbS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FuseTreeCircuitDiagramComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fuse-tree-circuit-diagram',
          templateUrl: './fuse-tree-circuit-diagram.component.html',
          styleUrls: ['./fuse-tree-circuit-diagram.component.css']
        }]
      }], function () {
        return [];
      }, {
        fuseTreeNode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appParent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        phaseMatching: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * Single component of the fuse circuit diagram
     * Fuse (cables leading to and from)
     * Charging station (cables leading to) + car
     */


    var FuseCircuitDiagram = /*#__PURE__*/function () {
      function FuseCircuitDiagram() {
        _classCallCheck(this, FuseCircuitDiagram);
      }

      _createClass(FuseCircuitDiagram, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.settings = this.fuseTreeCircuitDiagram.circuitDiagram; //console.log("using explicit phaseMatching="); 
          //console.log(this.phaseMatching); 
        }
      }, {
        key: "isRootFuse",
        value: function isRootFuse() {
          return this.fuseTreeNode["@type"] === "Fuse" && this.fuseTreeNode.id === 0;
        }
      }, {
        key: "isChargingStation",
        value: function isChargingStation() {
          return this.fuseTreeNode["@type"] === "ChargingStation";
        }
      }, {
        key: "isExplicitPhaseMatching",
        value: function isExplicitPhaseMatching() {
          return this.fuseTreeCircuitDiagram.isExplicitPhaseMatching();
        }
      }, {
        key: "getPhaseMatching",
        value: function getPhaseMatching() {
          if (this.isExplicitPhaseMatching() === true) {
            return this.phaseMatching;
          } else {
            return this.fuseTreeNode.phaseToGrid;
          }
        }
      }, {
        key: "getCableLengthByPhase",
        value: function getCableLengthByPhase(phase) {
          switch (phase) {
            case "PHASE_1":
              return 2 * this.settings.cable.phaseMargin;

            case "PHASE_2":
              return 1 * this.settings.cable.phaseMargin;

            case "PHASE_3":
              return 0 * this.settings.cable.phaseMargin;
          }
        }
      }, {
        key: "getFuseTreeNodeTitleLabel",
        value: function getFuseTreeNodeTitleLabel() {
          return this.fuseTreeNode['@type'] + " (id=" + this.fuseTreeNode.id + ")";
        }
      }, {
        key: "getFuseTreeNodeValueLabel",
        value: function getFuseTreeNodeValueLabel() {
          return _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getFuseTreeNodeLabel(this.fuseTreeNode);
        }
      }, {
        key: "getAssignedTitleLabel",
        value: function getAssignedTitleLabel() {
          return "Car (id=" + this.getAssignedCar().id + ")";
        }
      }, {
        key: "getAssignedValueLabel",
        value: function getAssignedValueLabel() {
          return _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getCarLabel(this.getAssignedCar());
        }
      }, {
        key: "getNodeWidth",
        value: function getNodeWidth() {
          return this.isChargingStation() ? this.settings.chargeStation.width : this.settings.fuse.width;
        }
      }, {
        key: "getNodeHeight",
        value: function getNodeHeight() {
          return this.isChargingStation() ? this.settings.chargeStation.height : this.settings.fuse.height;
        }
      }, {
        key: "getNodeX",
        value: function getNodeX() {
          return this.settings.marginLeft + this.columnIndex * this.settings.columnWidth;
        }
      }, {
        key: "getNodeCenterX",
        value: function getNodeCenterX() {
          return this.getNodeX() + this.getNodeWidth() / 2;
        }
      }, {
        key: "getNodeY",
        value: function getNodeY() {
          return this.settings.marginTop + this.rowIndex * this.settings.rowHeight;
        }
      }, {
        key: "getNodeCenterY",
        value: function getNodeCenterY() {
          return this.getNodeY() + this.getNodeHeight() / 2;
        }
      }, {
        key: "getNodeBottomY",
        value: function getNodeBottomY() {
          return this.getNodeY() + this.getNodeHeight();
        }
      }, {
        key: "getLeftCableX",
        value: function getLeftCableX() {
          return this.getNodeCenterX() - this.settings.cable.phaseMargin;
        }
      }, {
        key: "getMiddleCableX",
        value: function getMiddleCableX() {
          return this.getNodeCenterX();
        }
      }, {
        key: "getRightCableX",
        value: function getRightCableX() {
          return this.getNodeCenterX() + this.settings.cable.phaseMargin;
        }
      }, {
        key: "getLeftCablePhase",
        value: function getLeftCablePhase() {
          if (this.isChargingStation() === false) {
            return "PHASE_1";
          } else {
            return this.getPhaseMatching().PHASE_1;
          }
        }
      }, {
        key: "getMiddleCablePhase",
        value: function getMiddleCablePhase() {
          if (this.isChargingStation() === false) {
            return "PHASE_2";
          } else {
            return this.getPhaseMatching().PHASE_2;
          }
        }
      }, {
        key: "getRightCablePhase",
        value: function getRightCablePhase() {
          if (this.isChargingStation() === false) {
            return "PHASE_3";
          } else {
            return this.getPhaseMatching().PHASE_3;
          }
        }
        /**
         * Top of the line going to the node
         * Left cable (phase 1 of charging station)
         */

      }, {
        key: "getLeftCableToNodeY1",
        value: function getLeftCableToNodeY1() {
          if (this.isRootFuse()) {
            return this.getNodeY() - this.settings.cable.lengthWithoutPhases;
          } else if (this.isChargingStation()) {
            return this.getNodeY() - this.settings.cable.lengthWithoutPhases - this.getCableLengthByPhase(this.getPhaseMatching().PHASE_1);
          } else {
            return this.getNodeY() - this.settings.cable.lengthWithoutPhases - 2 * this.settings.cable.phaseMargin;
          }
        }
        /**
         * Middle cable (phase 2 of charging station)
         */

      }, {
        key: "getMiddleCableToNodeY1",
        value: function getMiddleCableToNodeY1() {
          if (this.isRootFuse()) {
            return this.getNodeY() - this.settings.cable.lengthWithoutPhases;
          } else if (this.isChargingStation()) {
            return this.getNodeY() - this.settings.cable.lengthWithoutPhases - this.getCableLengthByPhase(this.getPhaseMatching().PHASE_2);
          } else {
            return this.getNodeY() - this.settings.cable.lengthWithoutPhases - 1 * this.settings.cable.phaseMargin;
          }
        }
      }, {
        key: "getRightCableToNodeY1",
        value: function getRightCableToNodeY1() {
          if (this.isRootFuse()) {
            return this.getNodeY() - this.settings.cable.lengthWithoutPhases;
          } else if (this.isChargingStation()) {
            return this.getNodeY() - this.settings.cable.lengthWithoutPhases - this.getCableLengthByPhase(this.getPhaseMatching().PHASE_3);
          } else {
            return this.getNodeY() - this.settings.cable.lengthWithoutPhases - 0 * this.settings.cable.phaseMargin;
          }
        }
        /**
         * Bottom of the line going away from the node
         * Must reach children
         */

      }, {
        key: "getCableFromNodeY2",
        value: function getCableFromNodeY2() {
          var childRowIndexOffset = this.getSumFollowingSiblingDepth();
          return this.getNodeBottomY() + this.settings.cable.lengthWithoutPhases + this.settings.rowBuffer + childRowIndexOffset * this.settings.rowHeight;
        }
      }, {
        key: "getLeftCableFromNodeY2",
        value: function getLeftCableFromNodeY2() {
          if (this.isChargingStation()) {
            return this.getNodeBottomY() + this.settings.cable.lengthWithoutPhases;
          } else {
            return this.getCableFromNodeY2();
          }
        }
      }, {
        key: "getMiddleCableFromNodeY2",
        value: function getMiddleCableFromNodeY2() {
          if (this.isChargingStation()) {
            return this.getNodeBottomY() + this.settings.cable.lengthWithoutPhases;
          } else {
            return this.getCableFromNodeY2() + 1 * this.settings.cable.phaseMargin;
          }
        }
      }, {
        key: "getRightCableFromNodeY2",
        value: function getRightCableFromNodeY2() {
          if (this.isChargingStation()) {
            return this.getNodeBottomY() + this.settings.cable.lengthWithoutPhases;
          } else {
            return this.getCableFromNodeY2() + 2 * this.settings.cable.phaseMargin;
          }
        }
      }, {
        key: "getAssignedCar",
        value: function getAssignedCar() {
          return this.appParent.getAssignedCarByFuseTreeNode(this.fuseTreeNode);
        }
      }, {
        key: "getSumFollowingSiblingDepth",
        value: function getSumFollowingSiblingDepth() {
          return this.fuseTreeCircuitDiagram.getSumFollowingSiblingDepth(this.fuseTreeNode, this.fuseTreeNodeParent);
        }
      }]);

      return FuseCircuitDiagram;
    }();

    FuseCircuitDiagram.ɵfac = function FuseCircuitDiagram_Factory(t) {
      return new (t || FuseCircuitDiagram)();
    };

    FuseCircuitDiagram.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FuseCircuitDiagram,
      selectors: [["", "fuse-circuit-diagram", ""]],
      inputs: {
        appParent: "appParent",
        fuseTreeCircuitDiagram: "fuseTreeCircuitDiagram",
        fuseTreeNode: "fuseTreeNode",
        fuseTreeNodeParent: "fuseTreeNodeParent",
        phaseMatching: "phaseMatching",
        rowIndex: "rowIndex",
        columnIndex: "columnIndex"
      },
      attrs: _c1,
      decls: 14,
      vars: 29,
      consts: [[3, "ngClass"], [4, "ngIf"], [1, "rectFuse"], [1, "textFuse"], ["dy", "-6"], ["dy", "16"], [1, "lineCablePHASE_1"], [1, "lineCablePHASE_2"], [1, "lineCablePHASE_3"], ["dy", "14"], [1, "textPhase"], ["fuse-circuit-diagram", "", 3, "fuseTreeNode", "fuseTreeCircuitDiagram", "appParent", "fuseTreeNodeParent", "rowIndex", "columnIndex", 4, "ngFor", "ngForOf"], ["fuse-circuit-diagram", "", 3, "fuseTreeNode", "fuseTreeCircuitDiagram", "appParent", "fuseTreeNodeParent", "rowIndex", "columnIndex"]],
      template: function FuseCircuitDiagram_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "line", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "line", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "line", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FuseCircuitDiagram__svg_g_3_Template, 4, 12, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "text", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tspan", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tspan", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FuseCircuitDiagram__svg_g_10_Template, 5, 16, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FuseCircuitDiagram__svg_g_11_Template, 7, 9, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FuseCircuitDiagram__svg_g_12_Template, 10, 18, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FuseCircuitDiagram__svg_g_13_Template, 2, 1, "g", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "lineCable" + ctx.getLeftCablePhase());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.getLeftCableX())("y1", ctx.getLeftCableToNodeY1())("x2", ctx.getLeftCableX())("y2", ctx.getNodeY());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "lineCable" + ctx.getMiddleCablePhase());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.getNodeCenterX())("y1", ctx.getMiddleCableToNodeY1())("x2", ctx.getNodeCenterX())("y2", ctx.getNodeY());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "lineCable" + ctx.getRightCablePhase());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.getRightCableX())("y1", ctx.getRightCableToNodeY1())("x2", ctx.getRightCableX())("y2", ctx.getNodeY());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRootFuse() === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx.getNodeWidth())("height", ctx.getNodeHeight())("x", ctx.getNodeX())("y", ctx.getNodeY());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("y", ctx.getNodeCenterY());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx.getNodeCenterX());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getFuseTreeNodeTitleLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx.getNodeCenterX());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getFuseTreeNodeValueLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isChargingStation() === true || ctx.fuseTreeNode.children.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getAssignedCar() !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExplicitPhaseMatching() === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isChargingStation() === false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], FuseCircuitDiagram],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FuseCircuitDiagram, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[fuse-circuit-diagram]',
          templateUrl: 'fuse-circuit-diagram.html'
        }]
      }], null, {
        appParent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fuseTreeCircuitDiagram: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fuseTreeNode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fuseTreeNodeParent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        phaseMatching: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rowIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        columnIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/fuse-tree-component/fuse-tree-component.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/fuse-tree-component/fuse-tree-component.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FuseTreeComponentComponent, EditFuseTreeComponentDialog, EditCarDialog */

  /***/
  function srcAppFuseTreeComponentFuseTreeComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FuseTreeComponentComponent", function () {
      return FuseTreeComponentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditFuseTreeComponentDialog", function () {
      return EditFuseTreeComponentDialog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCarDialog", function () {
      return EditCarDialog;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/Utils */
    "./src/app/utils/Utils.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../fuse-tree-circuit-diagram/fuse-tree-circuit-diagram.component */
    "./src/app/fuse-tree-circuit-diagram/fuse-tree-circuit-diagram.component.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");

    function FuseTreeComponentComponent_mat_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ev_station");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FuseTreeComponentComponent_mat_icon_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "settings_input_hdmi");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FuseTreeComponentComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FuseTreeComponentComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.onClickAddCar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add car ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FuseTreeComponentComponent_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FuseTreeComponentComponent_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.onClickDeleteFuseTreeNode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FuseTreeComponentComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "directions_car");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FuseTreeComponentComponent_div_13_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.onClickEditCar(ctx_r16.getAssignedCar());
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "create");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FuseTreeComponentComponent_div_13_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.onClickDeleteCar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Car (id=", ctx_r9.getAssignedCar().id, "): ", ctx_r9.getCarPowerLabel(), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalidValue", ctx_r9.isTimestampArrivalValid() === false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" , arrival: ", ctx_r9.toHH_MM(ctx_r9.getAssignedCar().timestampArrival), " ");
      }
    }

    function FuseTreeComponentComponent_div_14_app_fuse_tree_component_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-fuse-tree-component", 13);
      }

      if (rf & 2) {
        var childNode_r20 = ctx.$implicit;

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("depth", ctx_r19.depth + 1)("fuseTreeNode", childNode_r20)("appParent", ctx_r19.appParent);
      }
    }

    function FuseTreeComponentComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FuseTreeComponentComponent_div_14_app_fuse_tree_component_1_Template, 1, 3, "app-fuse-tree-component", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FuseTreeComponentComponent_div_14_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.onClickAddFuseChild();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add fuse ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FuseTreeComponentComponent_div_14_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.onClickAddChargingStationChild();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Add charging station ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.fuseTreeNode.children);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", 5, "px")("margin-left", 0, "px");
      }
    }

    function FuseTreeComponentComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
      }
    }

    function EditFuseTreeComponentDialog_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", root fuse");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditFuseTreeComponentDialog_div_20_mat_radio_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditFuseTreeComponentDialog_div_20_mat_radio_button_4_Template_mat_radio_button_change_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var phaseMatching_r27 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r28.onChangeChargingStationPhaseMatching(phaseMatching_r27.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-fuse-tree-circuit-diagram", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var phaseMatching_r27 = ctx.$implicit;

        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", phaseMatching_r27.value)("checked", ctx_r26.isRadioButtonPhaseMatchingChecked(phaseMatching_r27.value));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", phaseMatching_r27.label.split(";")[0], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", phaseMatching_r27.label.split(";")[1], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", phaseMatching_r27.label.split(";")[2], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("phaseMatching", phaseMatching_r27.value)("fuseTreeNode", ctx_r26.data.fuseTreeNode)("appParent", ctx_r26.data.appParent);
      }
    }

    function EditFuseTreeComponentDialog_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phase assignment (Phase at charging station \u27F7 phase at grid) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-radio-group", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditFuseTreeComponentDialog_div_20_mat_radio_button_4_Template, 11, 8, "mat-radio-button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.phaseMatchings);
      }
    }

    var FuseTreeComponentComponent = /*#__PURE__*/function () {
      function FuseTreeComponentComponent(editFuseTreeComponentDialog, editCarDialog) {
        _classCallCheck(this, FuseTreeComponentComponent);

        this.editFuseTreeComponentDialog = editFuseTreeComponentDialog;
        this.editCarDialog = editCarDialog;
      }

      _createClass(FuseTreeComponentComponent, [{
        key: "getAssignedCar",
        value: function getAssignedCar() {
          var result = this.appParent.getAssignedCarByFuseTreeNode(this.fuseTreeNode);
          return result;
        }
      }, {
        key: "getFuseTreeNodeLabel",
        value: function getFuseTreeNodeLabel(fuseTreeNode) {
          return _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getFuseTreeNodeLabel(fuseTreeNode);
        }
      }, {
        key: "onClickDeleteFuseTreeNode",
        value: function onClickDeleteFuseTreeNode() {
          this.appParent.deleteFuseTreeNode(this.fuseTreeNode);
        }
      }, {
        key: "onClickAddFuseChild",
        value: function onClickAddFuseChild() {
          this.appParent.addFuseChild(this.fuseTreeNode);
        }
      }, {
        key: "onClickAddChargingStationChild",
        value: function onClickAddChargingStationChild() {
          this.appParent.addChargingStationChild(this.fuseTreeNode);
        }
      }, {
        key: "onClickAddCar",
        value: function onClickAddCar() {
          this.appParent.addCar(this.fuseTreeNode);
        }
      }, {
        key: "onClickDeleteCar",
        value: function onClickDeleteCar() {
          this.appParent.deleteCar(this.fuseTreeNode);
        }
      }, {
        key: "isTimestampArrivalValid",
        value: function isTimestampArrivalValid() {
          return this.appParent.data.request.state.currentTimeSeconds >= this.getAssignedCar().timestampArrival;
        }
      }, {
        key: "toHH_MM",
        value: function toHH_MM(timestamp) {
          return _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].toHH_MM(timestamp);
        }
      }, {
        key: "getCarPowerLabel",
        value: function getCarPowerLabel() {
          return _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getCarLabel(this.getAssignedCar());
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickEditFuseTreeNode",
        value: function onClickEditFuseTreeNode(fuseTreeNode) {
          var dialogRef = this.editFuseTreeComponentDialog.open(EditFuseTreeComponentDialog, {
            width: "75%",
            data: {
              fuseTreeNode: fuseTreeNode,
              appParent: this.appParent
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
          });
        }
      }, {
        key: "onClickEditCar",
        value: function onClickEditCar(car) {
          var dialogRef = this.editCarDialog.open(EditCarDialog, {
            width: "75%",
            data: {
              car: car,
              appParent: this.appParent
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
          });
        }
      }]);

      return FuseTreeComponentComponent;
    }();

    FuseTreeComponentComponent.ɵfac = function FuseTreeComponentComponent_Factory(t) {
      return new (t || FuseTreeComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    FuseTreeComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FuseTreeComponentComponent,
      selectors: [["app-fuse-tree-component"]],
      inputs: {
        fuseTreeNode: "fuseTreeNode",
        depth: "depth",
        appParent: "appParent"
      },
      decls: 16,
      vars: 12,
      consts: [[1, "divFuseTreeComponentContainer", "clearBoth", "floatLeft"], [1, "floatLeft", "clearBoth"], [1, "floatLeft", 2, "display", "inline-block"], [1, "icon-text"], [4, "ngIf"], ["mat-raised-button", "", "class", "buttonChangeInfrastructure", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 1, "buttonChangeInfrastructure", 3, "click"], ["class", "divCarContainer floatLeft clearBoth icon-text blueBorderLeft", 4, "ngIf"], ["class", "blueBorderLeft floatLeft clearBoth", 4, "ngIf"], ["class", "floatLeft", "class", "floatLeft clearBoth", 4, "ngIf"], [1, "divCarContainer", "floatLeft", "clearBoth", "icon-text", "blueBorderLeft"], [1, "blueBorderLeft", "floatLeft", "clearBoth"], [3, "depth", "fuseTreeNode", "appParent", 4, "ngFor", "ngForOf"], [3, "depth", "fuseTreeNode", "appParent"]],
      template: function FuseTreeComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FuseTreeComponentComponent_mat_icon_4_Template, 2, 0, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FuseTreeComponentComponent_mat_icon_5_Template, 2, 0, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FuseTreeComponentComponent_button_7_Template, 4, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FuseTreeComponentComponent_Template_button_click_8_listener() {
            return ctx.onClickEditFuseTreeNode(ctx.fuseTreeNode);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FuseTreeComponentComponent_button_12_Template, 4, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FuseTreeComponentComponent_div_13_Template, 15, 5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FuseTreeComponentComponent_div_14_Template, 11, 5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FuseTreeComponentComponent_div_15_Template, 1, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", 40, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fuseTreeNode["@type"] == "ChargingStation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fuseTreeNode["@type"] == "Fuse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.fuseTreeNode["@type"], " (id=", ctx.fuseTreeNode.id, "): ", ctx.getFuseTreeNodeLabel(ctx.fuseTreeNode), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fuseTreeNode["@type"] == "ChargingStation" && ctx.getAssignedCar() == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fuseTreeNode.id > 0 || ctx.fuseTreeNode["@type"] == "ChargingStation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fuseTreeNode["@type"] === "ChargingStation" && ctx.getAssignedCar() !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fuseTreeNode["@type"] == "Fuse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], FuseTreeComponentComponent],
      styles: [".divFuseTreeComponentContainer[_ngcontent-%COMP%] {\r\n    padding: 0px 0px 0px 0px; \r\n    margin-bottom: 5px; \r\n    margin-top: 5px; \r\n}\r\n\r\n.blueBorderLeft[_ngcontent-%COMP%] {\r\n    border-left: 1px dotted blue; \r\n}\r\n\r\n.icon-text[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.buttonChangeInfrastructure[_ngcontent-%COMP%] {\r\n    margin-left: 5px; \r\n}\r\n\r\n.divCarContainer[_ngcontent-%COMP%] {\r\n    padding-left: 20px; \r\n    margin-top: 5px; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVzZS10cmVlLWNvbXBvbmVudC9mdXNlLXRyZWUtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLHdCQUF3QixFQUFFLDBCQUEwQjtJQUNwRCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Z1c2UtdHJlZS1jb21wb25lbnQvZnVzZS10cmVlLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZGl2RnVzZVRyZWVDb21wb25lbnRDb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4OyAvKiB0b3AgcmlnaHQgYm90dG9tIGxlZnQgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDVweDsgXHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7IFxyXG59XHJcblxyXG4uYmx1ZUJvcmRlckxlZnQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkb3R0ZWQgYmx1ZTsgXHJcbn1cclxuXHJcbi5pY29uLXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b25DaGFuZ2VJbmZyYXN0cnVjdHVyZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4OyBcclxufVxyXG5cclxuXHJcbi5kaXZDYXJDb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyBcclxuICAgIG1hcmdpbi10b3A6IDVweDsgXHJcbn1cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FuseTreeComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fuse-tree-component',
          templateUrl: './fuse-tree-component.component.html',
          styleUrls: ['./fuse-tree-component.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, {
        fuseTreeNode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        depth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appParent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var EditFuseTreeComponentDialog = /*#__PURE__*/function () {
      function EditFuseTreeComponentDialog(dialogRef, data) {
        _classCallCheck(this, EditFuseTreeComponentDialog);

        this.dialogRef = dialogRef;
        this.data = data;
        this.phaseMatchings = [{
          label: "Phase 1 ⟷ Phase 1;Phase 2 ⟷ Phase 2; Phase 3 ⟷ Phase 3",
          value: {
            PHASE_1: "PHASE_1",
            PHASE_2: "PHASE_2",
            PHASE_3: "PHASE_3"
          }
        }, {
          label: "Phase 1 ⟷ Phase 2;Phase 2 ⟷ Phase 3;Phase 3 ⟷ Phase 1",
          value: {
            PHASE_1: "PHASE_2",
            PHASE_2: "PHASE_3",
            PHASE_3: "PHASE_1"
          }
        }, {
          label: "Phase 1 ⟷ Phase 3;Phase 2 ⟷ Phase 1;Phase 3 ⟷ Phase 2",
          value: {
            PHASE_1: "PHASE_3",
            PHASE_2: "PHASE_1",
            PHASE_3: "PHASE_2"
          }
        }];
      }

      _createClass(EditFuseTreeComponentDialog, [{
        key: "getPowerW",
        value: function getPowerW() {
          return _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getFusePowerLimitW(this.data.fuseTreeNode);
        }
      }, {
        key: "getChargingStationPhaseMatching",
        value: function getChargingStationPhaseMatching() {
          return this.data.fuseTreeNode["phaseToGrid"];
        }
      }, {
        key: "getChargingStationPhaseMatchingToChargingStation",
        value: function getChargingStationPhaseMatchingToChargingStation() {
          return this.data.fuseTreeNode["phaseToChargingStation"];
        }
      }, {
        key: "onChangeChargingStationPhaseMatching",
        value: function onChangeChargingStationPhaseMatching(newPhaseMatching) {
          // Set charging station to new phase matching
          // Example with 231 matching: 
          // phaseMatchingToGrid: { PHASE_1: PHASE_2, PHASE_2: PHASE_3, PHASE_3: PHASE_1 }
          // --> I'm at the charging station and using its first phase. I'm drawing power from grid's second phase. 
          // phaseMatchingToChargingStation: { PHASE_2: PHASE_1, PHASE_3: PHASE_2, PHASE_1: PHASE_3 }
          // --> I'm at the grid and looking at its first phase. Charging station is drawing on its 3rd phase. 
          var phaseMatching = this.getChargingStationPhaseMatching();
          phaseMatching.PHASE_1 = newPhaseMatching.PHASE_1;
          phaseMatching.PHASE_2 = newPhaseMatching.PHASE_2;
          phaseMatching.PHASE_3 = newPhaseMatching.PHASE_3;
          var phaseMatchingToChargingStation = this.getChargingStationPhaseMatchingToChargingStation();
          phaseMatchingToChargingStation[newPhaseMatching.PHASE_1] = "PHASE_1";
          phaseMatchingToChargingStation[newPhaseMatching.PHASE_2] = "PHASE_2";
          phaseMatchingToChargingStation[newPhaseMatching.PHASE_3] = "PHASE_3";
        }
      }, {
        key: "isRadioButtonPhaseMatchingChecked",
        value: function isRadioButtonPhaseMatchingChecked(phaseMatching) {
          return phaseMatching.PHASE_1 === this.getChargingStationPhaseMatching().PHASE_1 && phaseMatching.PHASE_2 === this.getChargingStationPhaseMatching().PHASE_2 && phaseMatching.PHASE_3 === this.getChargingStationPhaseMatching().PHASE_3;
        }
      }, {
        key: "onClickClose",
        value: function onClickClose() {
          this.dialogRef.close();
        }
      }]);

      return EditFuseTreeComponentDialog;
    }();

    EditFuseTreeComponentDialog.ɵfac = function EditFuseTreeComponentDialog_Factory(t) {
      return new (t || EditFuseTreeComponentDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
    };

    EditFuseTreeComponentDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditFuseTreeComponentDialog,
      selectors: [["edit-fuse-tree-component-dialog"]],
      decls: 26,
      vars: 8,
      consts: [["mat-dialog-title", ""], [4, "ngIf"], ["mat-dialog-content", ""], [1, "formEditDialog"], ["appearance", "outline", 1, "inputEditDialog"], ["name", "inputFuse", "type", "number", "matInput", "", "placeholder", "Phase 1 (ampere)", 3, "ngModel", "ngModelChange"], ["name", "inputFuse", "type", "number", "matInput", "", "placeholder", "Phase 2 (ampere)", 3, "ngModel", "ngModelChange"], ["name", "inputFuse", "type", "number", "matInput", "", "placeholder", "Phase 3 (ampere)", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-raised-button", "", 3, "click"], ["id", "phaseAssignmentRadioGroupLabel"], ["name", "nameRadioGroupPhaseMatching", "aria-labelledby", "phaseAssignmentRadioGroupLabel", 1, "radioGroupPhaseMatching"], ["class", "radioButtonPhaseMatching", "style", "width: 100%", 3, "value", "checked", "change", 4, "ngFor", "ngForOf"], [1, "radioButtonPhaseMatching", 2, "width", "100%", 3, "value", "checked", "change"], [2, "height", "129px", "width", "100%"], [1, "floatLeft", "centerVertically", 2, "width", "45%"], [1, "floatRight", 2, "width", "45%", "height", "100%"], [3, "phaseMatching", "fuseTreeNode", "appParent"]],
      template: function EditFuseTreeComponentDialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditFuseTreeComponentDialog_span_2_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Current limit phase 1 (ampere)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditFuseTreeComponentDialog_Template_input_ngModelChange_11_listener($event) {
            return ctx.data.fuseTreeNode["fusePhase1"] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Current limit phase 2 (ampere)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditFuseTreeComponentDialog_Template_input_ngModelChange_15_listener($event) {
            return ctx.data.fuseTreeNode["fusePhase2"] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Current limit phase 3 (ampere)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditFuseTreeComponentDialog_Template_input_ngModelChange_19_listener($event) {
            return ctx.data.fuseTreeNode["fusePhase3"] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditFuseTreeComponentDialog_div_20_Template, 5, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditFuseTreeComponentDialog_Template_button_click_22_listener() {
            return ctx.onClickClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Ok ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Editing ", ctx.data.fuseTreeNode["@type"], " (id=", ctx.data.fuseTreeNode.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.fuseTreeNode.id === 0 && ctx.data.fuseTreeNode["@type"] === "Fuse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Power rating (kW): ", ctx.getPowerW() / 1000, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.fuseTreeNode["fusePhase1"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.fuseTreeNode["fusePhase2"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.fuseTreeNode["fusePhase3"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.fuseTreeNode["@type"] === "ChargingStation");
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioButton"], _fuse_tree_circuit_diagram_fuse_tree_circuit_diagram_component__WEBPACK_IMPORTED_MODULE_10__["FuseTreeCircuitDiagramComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditFuseTreeComponentDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'edit-fuse-tree-component-dialog',
          templateUrl: './edit-fuse-tree-component-dialog.html'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();

    var EditCarDialog = /*#__PURE__*/function () {
      function EditCarDialog(dialogRef, data) {
        _classCallCheck(this, EditCarDialog);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(EditCarDialog, [{
        key: "getEVPowerW",
        value: function getEVPowerW() {
          return this.data.car.maxCurrent * 230;
        }
      }, {
        key: "getSoC",
        value: function getSoC() {
          return this.data.car.startCapacity / this.data.car.maxCapacity;
        }
      }, {
        key: "getMinSoC",
        value: function getMinSoC() {
          return this.data.car.minLoadingState / this.data.car.maxCapacity;
        }
      }, {
        key: "getSumUsedPhases",
        value: function getSumUsedPhases() {
          return this.data.car.canLoadPhase1 + this.data.car.canLoadPhase2 + this.data.car.canLoadPhase3;
        }
      }, {
        key: "onChangeCanLoadPhase1",
        value: function onChangeCanLoadPhase1(event) {
          this.data.car.canLoadPhase1 = event.checked ? 1 : 0;
          this.refreshTotalCurrentBasedOnPhases();
        }
      }, {
        key: "onChangeCanLoadPhase2",
        value: function onChangeCanLoadPhase2(event) {
          this.data.car.canLoadPhase2 = event.checked ? 1 : 0;
          this.refreshTotalCurrentBasedOnPhases();
        }
      }, {
        key: "onChangeCanLoadPhase3",
        value: function onChangeCanLoadPhase3(event) {
          this.data.car.canLoadPhase3 = event.checked ? 1 : 0;
          this.refreshTotalCurrentBasedOnPhases();
        }
      }, {
        key: "refreshTotalCurrentBasedOnPhases",
        value: function refreshTotalCurrentBasedOnPhases() {
          this.data.car.minCurrent = this.data.car.minCurrentPerPhase * this.getSumUsedPhases();
          this.data.car.maxCurrent = this.data.car.maxCurrentPerPhase * this.getSumUsedPhases();
        }
      }, {
        key: "onClickClose",
        value: function onClickClose() {
          this.dialogRef.close();
        }
      }]);

      return EditCarDialog;
    }();

    EditCarDialog.ɵfac = function EditCarDialog_Factory(t) {
      return new (t || EditCarDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
    };

    EditCarDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditCarDialog,
      selectors: [["edit-car-dialog"]],
      decls: 74,
      vars: 18,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "formEditDialog"], [1, "divEditDialogContainer"], ["appearance", "outline", 1, "inputEditDialog"], ["name", "inputStartCapacity", "type", "number", "matInput", "", "placeholder", "Start capacity", 3, "ngModel", "ngModelChange"], ["name", "inputMinCapacity", "type", "number", "matInput", "", "placeholder", "Battery minimum capacity", 3, "ngModel", "ngModelChange"], ["name", "inputArrivalTime", "type", "number", "matInput", "", "placeholder", "Arrival time", 3, "ngModel", "ngModelChange"], ["name", "inputDepartureTime", "type", "number", "matInput", "", "placeholder", "Departure time", 3, "ngModel", "ngModelChange"], ["name", "inputName", "type", "text", "matInput", "", "placeholder", "Car name", 3, "ngModel", "ngModelChange"], [3, "value", "valueChange"], ["value", "BEV"], ["value", "PHEV"], ["name", "inputMaxCapacity", "type", "number", "matInput", "", "placeholder", "Battery maximum capacity", 3, "ngModel", "ngModelChange"], ["name", "inputMinCurrent", "type", "number", "matInput", "", "placeholder", "Minimum current per phase", 3, "ngModel", "ngModelChange", "change"], ["name", "inputMaxCurrent", "type", "number", "matInput", "", "placeholder", "Maximum current per phase", 3, "ngModel", "ngModelChange", "change"], ["name", "inputCanLoadPhase1", "ngDefaultControl", "", 1, "checkboxChartSetting", 3, "disabled", "checked", "change"], ["name", "inputCanLoadPhase2", "ngDefaultControl", "", 1, "checkboxChartSetting", 3, "checked", "change"], ["name", "inputCanLoadPhase3", "ngDefaultControl", "", 1, "checkboxChartSetting", 3, "checked", "change"], ["name", "inputModelname", "type", "text", "matInput", "", "placeholder", "Model name", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-raised-button", "", 3, "click"]],
      template: function EditCarDialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Individual car data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Start capacity (ampere hours)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditCarDialog_Template_input_ngModelChange_10_listener($event) {
            return ctx.data.car.startCapacity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Minimum required capacity (ampere hours)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditCarDialog_Template_input_ngModelChange_14_listener($event) {
            return ctx.data.car.minLoadingState = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Arrival time (seconds after midnight)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditCarDialog_Template_input_ngModelChange_18_listener($event) {
            return ctx.data.car.timestampArrival = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Departure time (seconds after midnight, optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditCarDialog_Template_input_ngModelChange_22_listener($event) {
            return ctx.data.car.timestampDeparture = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Car name (optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditCarDialog_Template_input_ngModelChange_26_listener($event) {
            return ctx.data.car.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Car model data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Car type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EditCarDialog_Template_mat_select_valueChange_33_listener($event) {
            return ctx.data.car.carType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Battery electric vehicle (BEV)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Plug-in hybrid electric vehicle (PHEV) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Battery maximum capacity (ampere hours)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditCarDialog_Template_input_ngModelChange_41_listener($event) {
            return ctx.data.car.maxCapacity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Minimum current per phase (ampere)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditCarDialog_Template_input_ngModelChange_45_listener($event) {
            return ctx.data.car.minCurrentPerPhase = $event;
          })("change", function EditCarDialog_Template_input_change_45_listener() {
            return ctx.refreshTotalCurrentBasedOnPhases();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Maximum current per phase (ampere)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditCarDialog_Template_input_ngModelChange_49_listener($event) {
            return ctx.data.car.maxCurrentPerPhase = $event;
          })("change", function EditCarDialog_Template_input_change_49_listener() {
            return ctx.refreshTotalCurrentBasedOnPhases();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-checkbox", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditCarDialog_Template_mat_checkbox_change_50_listener($event) {
            return ctx.onChangeCanLoadPhase1($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Can charge on phase 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-checkbox", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditCarDialog_Template_mat_checkbox_change_52_listener($event) {
            return ctx.onChangeCanLoadPhase2($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Can charge on phase 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-checkbox", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditCarDialog_Template_mat_checkbox_change_54_listener($event) {
            return ctx.onChangeCanLoadPhase3($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Can charge on phase 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Car model name (optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditCarDialog_Template_input_ngModelChange_59_listener($event) {
            return ctx.data.car.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCarDialog_Template_button_click_70_listener() {
            return ctx.onClickClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Ok ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Editing Car (id=", ctx.data.car.id, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.car.startCapacity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.car.minLoadingState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.car.timestampArrival);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.car.timestampDeparture);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.car.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.data.car.carType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.car.maxCapacity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.car.minCurrentPerPhase);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.car.maxCurrentPerPhase);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("checked", ctx.data.car.canLoadPhase1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.data.car.canLoadPhase2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.data.car.canLoadPhase3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.car.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Power rating: ", ctx.getEVPowerW() / 1000, "kW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Starting state of charge (SoC): ", ctx.getSoC(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Minimum state of charge (SoC): ", ctx.getMinSoC(), "");
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditCarDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'edit-car-dialog',
          templateUrl: 'edit-car-dialog.html'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/request-json-component/request-json-component.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/request-json-component/request-json-component.component.ts ***!
    \****************************************************************************/

  /*! exports provided: RequestJsonComponentComponent */

  /***/
  function srcAppRequestJsonComponentRequestJsonComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestJsonComponentComponent", function () {
      return RequestJsonComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/Utils */
    "./src/app/utils/Utils.ts");
    /* harmony import */


    var ng_json_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-json-view */
    "./node_modules/ng-json-view/fesm2015/ng-json-view.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var RequestJsonComponentComponent = /*#__PURE__*/function () {
      function RequestJsonComponentComponent() {
        _classCallCheck(this, RequestJsonComponentComponent);
      }

      _createClass(RequestJsonComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickDownloadApiRequest",
        value: function onClickDownloadApiRequest() {
          var content = JSON.stringify(this.restApiRequest, null, 4);

          _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].createFileDownload("apiRequest.json", content);
        }
      }]);

      return RequestJsonComponentComponent;
    }();

    RequestJsonComponentComponent.ɵfac = function RequestJsonComponentComponent_Factory(t) {
      return new (t || RequestJsonComponentComponent)();
    };

    RequestJsonComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RequestJsonComponentComponent,
      selectors: [["app-request-json-component"]],
      inputs: {
        restApiRequest: "restApiRequest"
      },
      decls: 6,
      vars: 2,
      consts: [[3, "data", "levelOpen"], ["mat-button", "", "mat-raised-button", "", 3, "click"]],
      template: function RequestJsonComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-json-view", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestJsonComponentComponent_Template_button_click_2_listener() {
            return ctx.onClickDownloadApiRequest();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "save_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Save API request as JSON\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.restApiRequest)("levelOpen", 3);
        }
      },
      directives: [ng_json_view__WEBPACK_IMPORTED_MODULE_2__["NgxJsonViewComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3QtanNvbi1jb21wb25lbnQvcmVxdWVzdC1qc29uLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestJsonComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-request-json-component',
          templateUrl: './request-json-component.component.html',
          styleUrls: ['./request-json-component.component.css']
        }]
      }], function () {
        return [];
      }, {
        restApiRequest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/result-json-component/result-json-component.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/result-json-component/result-json-component.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ResultJsonComponentComponent */

  /***/
  function srcAppResultJsonComponentResultJsonComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultJsonComponentComponent", function () {
      return ResultJsonComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ng_json_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-json-view */
    "./node_modules/ng-json-view/fesm2015/ng-json-view.js");

    function ResultJsonComponentComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "REST API JSON result");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-json-view", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r30.restApiResponse.jsonContent)("levelOpen", 2);
      }
    }

    function ResultJsonComponentComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("An error has occured: ", ctx_r31.restApiResponse.error.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r31.restApiResponse.error.message);
      }
    }

    var ResultJsonComponentComponent = /*#__PURE__*/function () {
      function ResultJsonComponentComponent() {
        _classCallCheck(this, ResultJsonComponentComponent);
      }

      _createClass(ResultJsonComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResultJsonComponentComponent;
    }();

    ResultJsonComponentComponent.ɵfac = function ResultJsonComponentComponent_Factory(t) {
      return new (t || ResultJsonComponentComponent)();
    };

    ResultJsonComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultJsonComponentComponent,
      selectors: [["app-result-json-component"]],
      inputs: {
        restApiResponse: "restApiResponse"
      },
      decls: 2,
      vars: 2,
      consts: [["class", "floatLeft clearBoth", 4, "ngIf"], [1, "floatLeft", "clearBoth"], [3, "data", "levelOpen"]],
      template: function ResultJsonComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResultJsonComponentComponent_div_0_Template, 4, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultJsonComponentComponent_div_1_Template, 5, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.restApiResponse.jsonContent !== null && ctx.restApiResponse.error.name === "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.restApiResponse.error.name !== "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_json_view__WEBPACK_IMPORTED_MODULE_2__["NgxJsonViewComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC1qc29uLWNvbXBvbmVudC9yZXN1bHQtanNvbi1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultJsonComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-result-json-component',
          templateUrl: './result-json-component.component.html',
          styleUrls: ['./result-json-component.component.css']
        }]
      }], function () {
        return [];
      }, {
        restApiResponse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/utils/ChartChargePlans.ts":
  /*!*******************************************!*\
    !*** ./src/app/utils/ChartChargePlans.ts ***!
    \*******************************************/

  /*! exports provided: ChartChargePlans */

  /***/
  function srcAppUtilsChartChargePlansTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartChargePlans", function () {
      return ChartChargePlans;
    });
    /* harmony import */


    var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Utils */
    "./src/app/utils/Utils.ts");

    var ChartChargePlans = /*#__PURE__*/function () {
      function ChartChargePlans() {
        _classCallCheck(this, ChartChargePlans);
      }

      _createClass(ChartChargePlans, null, [{
        key: "getXAxisRange",
        value: function getXAxisRange(jsonContent) {
          var tMin = Number.MAX_VALUE; // First available car timestamp

          var tMax = -1; // Last available car timestamp 

          jsonContent.cars.forEach(function (car, index) {
            if (tMin > car.timestampArrival) tMin = car.timestampArrival;

            if (car.timestampDeparture == 0) {
              // If any car has a timeStamp departure of 0, set tMax = end of day
              tMax = 24 * 3600;
            }

            if (tMax < car.timestampDeparture) {
              tMax = car.timestampDeparture;
            }
          });
          tMin = Math.max(0, tMin - 7 * ChartChargePlans.timeslotLength);
          tMax = Math.min(24 * 3600, tMax + ChartChargePlans.timeslotLength);
          return {
            tMin: tMin,
            tMax: tMax
          };
        }
      }, {
        key: "getAggregatedChargePlansData",
        value: function getAggregatedChargePlansData(jsonContent, xAxisRange) {
          var tMin = xAxisRange.tMin;
          var tMax = xAxisRange.tMax; // Create values for a step chart
          // A single line: Sum of all charge plans per timeslot
          // Begin xValues with xMin

          var xValues = [tMin];
          var yValues = [0];

          var _loop = function _loop(timeslot) {
            // Each timeslot is 15 minutes
            // Each car has a charge plan with array of length 96
            // Each element is single phase charging in Ampere  
            var t = timeslot * ChartChargePlans.timeslotLength;
            if (t < tMin || t > tMax) return "continue";
            var sumChargePlansW = jsonContent.cars.map(function (car) {
              return car.currentPlan[timeslot] * (car.canLoadPhase1 + car.canLoadPhase2 + car.canLoadPhase3) * 230;
            } // How much Watt (W) will this EV draw at 230V?
            ).reduce(function (a, b) {
              return a + b;
            }, 0);
            sumChargePlansW = _Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].roundToNDecimals(sumChargePlansW, 3);
            xValues.push(t);
            yValues.push(sumChargePlansW);
          };

          for (var timeslot = 0; timeslot < 24 * 4; timeslot++) {
            var _ret = _loop(timeslot);

            if (_ret === "continue") continue;
          } // Add a final point at tMax


          xValues.push(tMax);
          yValues.push(0);
          return {
            xValues: xValues,
            yValues: yValues
          };
        }
      }, {
        key: "getIndividualChargePlansData",
        value: function getIndividualChargePlansData(jsonContent, xAxisRange) {
          var tMin = xAxisRange.tMin;
          var tMax = xAxisRange.tMax; // Create values for a step chart
          // A single line: One charge plan
          // Begin xValues with xMin

          var xValues = [tMin];
          var individualChargePlans = []; // Initialize charge plans by looping over cars once

          jsonContent.cars.forEach(function (car) {
            individualChargePlans.push({
              carID: car.id,
              carName: car.name,
              carModelName: car.modelName,
              yValues: [0]
            });
          });

          var _loop2 = function _loop2(timeslot) {
            // Each timeslot is 15 minutes
            // Each car has a charge plan with array of length 96
            // Each element is single phase charging in Ampere  
            var t = timeslot * ChartChargePlans.timeslotLength;
            if (t < tMin || t > tMax) return "continue"; // Add one line per car 
            // Cumulative, example at timeslot=0: 1st car has 22kW. 2nd car also has 22kW, but should show at 44kW (so that the cars stack)

            var cumulativePowerW = 0;
            jsonContent.cars.forEach(function (car, index) {
              var powerW = car.currentPlan[timeslot] * (car.canLoadPhase1 + car.canLoadPhase2 + car.canLoadPhase3) * 230;
              individualChargePlans[index].yValues.push(powerW + cumulativePowerW);
              cumulativePowerW += powerW;
            });
            xValues.push(t);
          };

          for (var timeslot = 0; timeslot < 24 * 4; timeslot++) {
            var _ret2 = _loop2(timeslot);

            if (_ret2 === "continue") continue;
          } // Add a final point at tMax


          xValues.push(tMax);
          jsonContent.cars.forEach(function (car, index) {
            individualChargePlans[index].yValues.push(0);
          });
          return {
            xValues: xValues,
            individualChargePlans: individualChargePlans
          };
        }
      }, {
        key: "getAggregatedChargePlans",
        value: function getAggregatedChargePlans(originalRequest, jsonContent, chartSettings) {
          var xAxisRange = this.getXAxisRange(jsonContent);
          var chartData = [];
          var xValues;

          if (chartSettings.showIndividualCarPlans === false) {
            var chargePlansData = this.getAggregatedChargePlansData(jsonContent, xAxisRange);
            xValues = chargePlansData.xValues;
            chartData.push({
              data: chargePlansData.yValues,
              label: "Charge plans",
              steppedLine: true
            });
          } else {
            var _chargePlansData = this.getIndividualChargePlansData(jsonContent, xAxisRange);

            xValues = _chargePlansData.xValues;

            _chargePlansData.individualChargePlans.forEach(function (individualChargePlan) {
              chartData.push({
                data: individualChargePlan.yValues,
                label: "Car id=" + individualChargePlan.carID,
                steppedLine: true
              });
            });
          }

          var chartLabels = xValues.map(function (n) {
            return _Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].toHH_MM(n);
          });
          var result = {
            chartData: chartData,
            chartLabels: chartLabels,
            chartOptions: {
              responsive: true,
              scales: {
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Time'
                  }
                }],
                yAxes: [{
                  // Add buffer so that infrastructure annotation label is not cut off
                  ticks: {
                    suggestedMax: _Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getInfrastructureLimitW(originalRequest.state.fuseTree) * 1.1
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Power (W)'
                  }
                }]
              },
              annotation: this.getChartAnnotations(originalRequest, jsonContent, chartSettings)
            },
            chartColors: [{
              borderColor: 'black',
              backgroundColor: 'rgba(255,255,0,0.28)'
            }],
            chartLegend: true,
            chartPlugins: [],
            chartType: "line"
          };
          console.log("Visualizing chart with data:");
          console.log(result);
          return result;
        }
      }, {
        key: "getChartAnnotations",
        value: function getChartAnnotations(originalRequest, jsonContent, chartSettings) {
          var maxInfrastructurePowerW = _Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getInfrastructureLimitW(originalRequest.state.fuseTree); // Use time=now (vertical line)


          var timeNow = originalRequest.state.currentTimeSeconds;
          var annotations = [];

          if (chartSettings.showInfrastructureLimit === true) {
            annotations.push({
              // Infrastructure limit horizontal line
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y-axis-0',
              value: maxInfrastructurePowerW,
              borderColor: 'red',
              borderWidth: 2,
              borderDash: [5, 5],
              label: {
                enabled: true,
                content: "Infrastructure limit (root fuse): " + maxInfrastructurePowerW + "W",
                yAdjust: -17
              }
            });
          }

          if (chartSettings.showCurrentTime === true) {
            annotations.push({
              // Current time vertical line
              type: 'line',
              mode: 'vertical',
              scaleID: 'x-axis-0',
              value: _Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].toHH_MM(timeNow),
              borderColor: 'blue',
              borderWidth: 2,
              borderDash: [5, 5],
              label: {
                enabled: true,
                content: "Current time",
                xAdjust: -45
              }
            });
          } // https://codepen.io/jordanwillis/pen/qrXJLW


          return {
            annotations: annotations
          };
        }
      }]);

      return ChartChargePlans;
    }();

    ChartChargePlans.timeslotLength = 15 * 60;
    /***/
  },

  /***/
  "./src/app/utils/Utils.ts":
  /*!********************************!*\
    !*** ./src/app/utils/Utils.ts ***!
    \********************************/

  /*! exports provided: Utils */

  /***/
  function srcAppUtilsUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Utils", function () {
      return Utils;
    });

    var Utils = /*#__PURE__*/function () {
      function Utils() {
        _classCallCheck(this, Utils);
      }

      _createClass(Utils, null, [{
        key: "roundToNDecimals",
        value: function roundToNDecimals(myNumber, nDecimals) {
          var rounder = Math.pow(10, nDecimals);
          return Math.round(myNumber * rounder) / rounder;
        }
      }, {
        key: "toHH_MM_SS",
        value: function toHH_MM_SS(secondsAfterMidnight) {
          var date = new Date(null);
          date.setSeconds(secondsAfterMidnight);
          var result = date.toISOString().substr(11, 8);
          return result;
        }
      }, {
        key: "toHH_MM",
        value: function toHH_MM(secondsAfterMidnight) {
          var date = new Date(null);
          date.setSeconds(secondsAfterMidnight);
          var result = date.toISOString().substr(11, 5);
          return result;
        }
      }, {
        key: "getInfrastructureLimitW",
        value: function getInfrastructureLimitW(fuseTree) {
          var rootFuse = fuseTree.rootFuse;
          return this.getFusePowerLimitW(rootFuse);
        }
      }, {
        key: "getFusePowerLimitW",
        value: function getFusePowerLimitW(fuseTreeNode) {
          return (fuseTreeNode["fusePhase1"] + fuseTreeNode["fusePhase2"] + fuseTreeNode["fusePhase3"]) * 230;
        }
      }, {
        key: "getFuseTreeNodeLabel",
        value: function getFuseTreeNodeLabel(fuseTreeNode) {
          var label;

          if (fuseTreeNode["fusePhase1"] === fuseTreeNode["fusePhase2"] && fuseTreeNode["fusePhase2"] === fuseTreeNode["fusePhase3"]) {
            label = fuseTreeNode["fusePhase1"] + "A~3";
          } else {
            label = fuseTreeNode["fusePhase1"] + "A/" + fuseTreeNode["fusePhase2"] + "A/" + fuseTreeNode["fusePhase3"] + "A";
          }

          var powerKW = Utils.getFusePowerLimitW(fuseTreeNode) / 1000;
          label += " (" + Utils.roundToNDecimals(powerKW, 3) + "kW)";
          return label;
        }
      }, {
        key: "getCarLabel",
        value: function getCarLabel(car) {
          var sumUsedPhases = car.canLoadPhase1 + car.canLoadPhase2 + car.canLoadPhase3;
          return car.maxCurrentPerPhase + "A~" + sumUsedPhases + " (" + car.maxCurrent * 230 / 1000 + "kW)";
        } // https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server

      }, {
        key: "createFileDownload",
        value: function createFileDownload(filename, text) {
          var element = document.createElement('a');
          element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
          element.setAttribute('download', filename);
          element.style.display = 'none';
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
        }
      }]);

      return Utils;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\surid\OneDrive\Desktop\ev station\ca-ev-smart-charging\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map