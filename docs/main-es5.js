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
  "./src/app/app/app-routing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/app/app-routing.module.ts ***!
    \*******************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: '/cms/overview'
    }, {
      path: 'cms',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-pages-module */
        [__webpack_require__.e("default~pages-pages-module~software-research-software-research-module"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null,
        /*! ../pages/pages.module */
        "./src/app/pages/pages.module.ts")).then(function (m) {
          return m.PagesModule;
        });
      }
    }, {
      path: 'software',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | software-research-software-research-module */
        [__webpack_require__.e("default~pages-pages-module~software-research-software-research-module"), __webpack_require__.e("software-research-software-research-module")]).then(__webpack_require__.bind(null,
        /*! ../software-research/software-research.module */
        "./src/app/software-research/software-research.module.ts")).then(function (m) {
          return m.SoftwareResearchModule;
        });
      }
    }];

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
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true,
        enableTracing: false
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true,
            enableTracing: false
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app/app.module.ts":
  /*!***********************************!*\
    !*** ./src/app/app/app.module.ts ***!
    \***********************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ng-zorro-antd/card */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app/app-routing.module.ts");
    /* harmony import */


    var _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./icons-provider.module */
    "./src/app/app/icons-provider.module.ts");
    /* harmony import */


    var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/layout */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js");
    /* harmony import */


    var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd/menu */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/i18n */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/locales/en */
    "./node_modules/@angular/common/locales/en.js");
    /* harmony import */


    var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var _container_app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./container/app.component */
    "./src/app/app/container/app.component.ts");
    /* harmony import */


    var _scene_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./scene/side-menu/side-menu.component */
    "./src/app/app/scene/side-menu/side-menu.component.ts");
    /* harmony import */


    var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng-zorro-antd/table */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12___default.a);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_container_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"],
        useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["en_US"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__["IconsProviderModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_0__["NzCardModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_container_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _scene_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_15__["SideMenuComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__["IconsProviderModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_0__["NzCardModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_container_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _scene_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_15__["SideMenuComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__["IconsProviderModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_0__["NzCardModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]],
          providers: [{
            provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"],
            useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["en_US"]
          }],
          bootstrap: [_container_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app/container/app.component.ts":
  /*!************************************************!*\
    !*** ./src/app/app/container/app.component.ts ***!
    \************************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppContainerAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/layout.service */
    "./src/app/app/service/layout.service.ts");
    /* harmony import */


    var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/layout */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js");
    /* harmony import */


    var _scene_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../scene/side-menu/side-menu.component */
    "./src/app/app/scene/side-menu/side-menu.component.ts");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(layoutService, router, route) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.layoutService = layoutService;
        this.router = router;
        this.route = route;
        this.isCollapsed = true;
        this.title = 'HTML';
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isLoading$ = this.setupIsLoading();
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            _this.currentUrl = event.url.split('/')[1] ? event.url.split('/')[1] : 'cms';
            _this.title = _this.currentUrl === 'software' ? 'Software for business' : 'HTML';

            _this.setupCategories();
          }
        });
      }

      _createClass(AppComponent, [{
        key: "setupIsLoading",
        value: function setupIsLoading() {
          return this.isLoading.asObservable();
        }
      }, {
        key: "setupCategories",
        value: function setupCategories() {
          this.categories$ = this.layoutService.getCategories(this.currentUrl);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 16,
      vars: 8,
      consts: [[1, "app-layout"], ["nzCollapsible", "", "nzWidth", "350px", "nzBreakpoint", "md", 1, "menu-sidebar", 3, "nzCollapsed", "nzTrigger", "nzCollapsedChange"], [1, "sidebar-logo"], ["src", "/assets/logo.png", "alt", "logo"], [3, "menu", "isCollapsed"], [1, "app-header"], [1, "header-trigger", 3, "click"], ["nz-icon", "", 1, "trigger", 3, "nzType"], [1, "inner-content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-sider", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCollapsedChange", function AppComponent_Template_nz_sider_nzCollapsedChange_1_listener($event) {
            return ctx.isCollapsed = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-side-menu", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_11_listener() {
            return ctx.isCollapsed = !ctx.isCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tmp_3_0 = null;
          var currVal_3 = (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.categories$)) == null ? null : tmp_3_0.menu;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCollapsed", ctx.isCollapsed)("nzTrigger", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Learning ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menu", currVal_3)("isCollapsed", ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.isCollapsed ? "menu-unfold" : "menu-fold");
        }
      },
      directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzSiderComponent"], _scene_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_5__["SideMenuComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzHeaderComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.app-layout[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.menu-sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  min-height: 100vh;\n  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);\n}\n\n.header-trigger[_ngcontent-%COMP%] {\n  height: 64px;\n  padding: 20px 24px;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s, padding 0s;\n}\n\n.trigger[_ngcontent-%COMP%]:hover {\n  color: #1890ff;\n}\n\n.sidebar-logo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 64px;\n  padding-left: 24px;\n  overflow: hidden;\n  line-height: 64px;\n  background: #001529;\n  transition: all 0.3s;\n}\n\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  vertical-align: middle;\n}\n\n.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 0 20px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\n\nnz-header[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 100%;\n  z-index: 2;\n}\n\n.app-header[_ngcontent-%COMP%] {\n  position: relative;\n  height: 64px;\n  padding: 0;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n}\n\nnz-content[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n\n.inner-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpbGFzaC9Eb2N1bWVudHMvR2l0SHViL2xlYXJuLWh0bWwvc3JjL2FwcC9hcHAvY29udGFpbmVyL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwL2NvbnRhaW5lci9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAvY29udGFpbmVyL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuLmFwcC1sYXlvdXQge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5tZW51LXNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBib3gtc2hhZG93OiAycHggMCA2cHggcmdiYSgwLDIxLDQxLC4zNSk7XHJcbn1cclxuXHJcbi5oZWFkZXItdHJpZ2dlciB7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MscGFkZGluZyAwcztcclxufVxyXG5cclxuLnRyaWdnZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTg5MGZmO1xyXG59XHJcblxyXG4uc2lkZWJhci1sb2dvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDE1Mjk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxufVxyXG5cclxuLnNpZGViYXItbG9nbyBpbWcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnNpZGViYXItbG9nbyBoMSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCAwIDAgMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LWZhbWlseTogQXZlbmlyLEhlbHZldGljYSBOZXVlLEFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbm56LWhlYWRlciB7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uYXBwLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNjRweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwyMSw0MSwuMDgpO1xyXG59XHJcblxyXG5uei1jb250ZW50IHtcclxuICBtYXJnaW46IDI0cHg7XHJcbn1cclxuXHJcbi5pbm5lci1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmFwcC1sYXlvdXQge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubWVudS1zaWRlYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJveC1zaGFkb3c6IDJweCAwIDZweCByZ2JhKDAsIDIxLCA0MSwgMC4zNSk7XG59XG5cbi5oZWFkZXItdHJpZ2dlciB7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MsIHBhZGRpbmcgMHM7XG59XG5cbi50cmlnZ2VyOmhvdmVyIHtcbiAgY29sb3I6ICMxODkwZmY7XG59XG5cbi5zaWRlYmFyLWxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZDogIzAwMTUyOTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5zaWRlYmFyLWxvZ28gaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2lkZWJhci1sb2dvIGgxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSBOZXVlLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5uei1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbn1cblxuLmFwcC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMjEsIDQxLCAwLjA4KTtcbn1cblxubnotY29udGVudCB7XG4gIG1hcmdpbjogMjRweDtcbn1cblxuLmlubmVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _service_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app/icons-provider.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/app/icons-provider.module.ts ***!
    \**********************************************/

  /*! exports provided: IconsProviderModule */

  /***/
  function srcAppAppIconsProviderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function () {
      return IconsProviderModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ant-design/icons-angular/icons */
    "./node_modules/@ant-design/icons-angular/__ivy_ngcc__/fesm2015/ant-design-icons-angular-icons.js");

    var icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["FormOutline"]];

    var IconsProviderModule = function IconsProviderModule() {
      _classCallCheck(this, IconsProviderModule);
    };

    IconsProviderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IconsProviderModule
    });
    IconsProviderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IconsProviderModule_Factory(t) {
        return new (t || IconsProviderModule)();
      },
      providers: [{
        provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"],
        useValue: icons
      }],
      imports: [[ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsProviderModule, {
        imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
        exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsProviderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
          exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
          providers: [{
            provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"],
            useValue: icons
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app/scene/side-menu/side-menu.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/app/scene/side-menu/side-menu.component.ts ***!
    \************************************************************/

  /*! exports provided: SideMenuComponent */

  /***/
  function srcAppAppSceneSideMenuSideMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function () {
      return SideMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-zorro-antd/menu */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function SideMenuComponent_ng_container_1_li_1_ul_1_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subCategory_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", subCategory_r4.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subCategory_r4.title);
      }
    }

    function SideMenuComponent_ng_container_1_li_1_ul_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideMenuComponent_ng_container_1_li_1_ul_1_li_1_Template, 3, 2, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subCategory_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subCategory_r4.visible);
      }
    }

    function SideMenuComponent_ng_container_1_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideMenuComponent_ng_container_1_li_1_ul_1_Template, 2, 1, "ul", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", category_r1.categoryName)("nzIcon", category_r1.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r1 == null ? null : category_r1.subCategory);
      }
    }

    function SideMenuComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideMenuComponent_ng_container_1_li_1_Template, 2, 3, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var category_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r1.visible);
      }
    }

    var SideMenuComponent = /*#__PURE__*/function () {
      function SideMenuComponent() {
        _classCallCheck(this, SideMenuComponent);
      }

      _createClass(SideMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SideMenuComponent;
    }();

    SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) {
      return new (t || SideMenuComponent)();
    };

    SideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideMenuComponent,
      selectors: [["app-side-menu"]],
      inputs: {
        isCollapsed: "isCollapsed",
        menu: "menu"
      },
      decls: 2,
      vars: 1,
      consts: [["nz-menu", "", "nzTheme", "dark", "nzMode", "inline"], [4, "ngFor", "ngForOf"], ["nz-submenu", "", 3, "nzTitle", "nzIcon", 4, "ngIf"], ["nz-submenu", "", 3, "nzTitle", "nzIcon"], ["nz-menu-item", "", "nzMatchRouter", "", 4, "ngIf"], ["nz-menu-item", "", "nzMatchRouter", ""], [3, "routerLink"]],
      template: function SideMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideMenuComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu == null ? null : ctx.menu.category);
        }
      },
      directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__["NzSubMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__["NzMenuItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC9zY2VuZS9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-side-menu',
          templateUrl: './side-menu.component.html',
          styleUrls: ['./side-menu.component.scss']
        }]
      }], function () {
        return [];
      }, {
        isCollapsed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        menu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app/service/layout.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/app/service/layout.service.ts ***!
    \***********************************************/

  /*! exports provided: LayoutService */

  /***/
  function srcAppAppServiceLayoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
      return LayoutService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var path = '/assets/data';

    var LayoutService = /*#__PURE__*/function () {
      function LayoutService(http) {
        _classCallCheck(this, LayoutService);

        this.http = http;
      }

      _createClass(LayoutService, [{
        key: "getCategories",
        value: function getCategories(currentURL) {
          var loadJson = currentURL === 'software' ? 'software.json' : 'side-menu.json';
          return this.http.get("".concat(path, "/").concat(loadJson));
        }
      }]);

      return LayoutService;
    }();

    LayoutService.ɵfac = function LayoutService_Factory(t) {
      return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LayoutService,
      factory: LayoutService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app/app.module */
    "./src/app/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! /Users/abhilash/Documents/GitHub/learn-html/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map