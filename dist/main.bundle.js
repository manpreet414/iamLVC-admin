webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"app/theme/theme.module": [
		"../../../../../src/app/theme/theme.module.ts",
		"common",
		"theme.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".picker__year-display{color:#26a69a !important}\n.picker__year{display: none !important}\n.add-btn{    position: absolute; right: 30px;     top: 19px;}\n.btn{background:#58b392}\n.btn:hover{background:#26a69a}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_imageupload__ = __webpack_require__("../../../../ng2-imageupload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_imageupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_imageupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_ckeditor__ = __webpack_require__("../../../../ngx-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_app_shared_module__ = __webpack_require__("../../../../../src/app/shared/app-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_home_home_component__ = __webpack_require__("../../../../../src/app/auth/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_forget_password_forget_password_component__ = __webpack_require__("../../../../../src/app/auth/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_intl_tel_input__ = __webpack_require__("../../../../ngx-intl-tel-input/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__auth_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__auth_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__auth_forget_password_forget_password_component__["a" /* ForgetPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_13__auth_reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_imageupload__["ImageUploadModule"],
            __WEBPACK_IMPORTED_MODULE_4_ngx_ckeditor__["CKEditorModule"],
            __WEBPACK_IMPORTED_MODULE_14_ngx_toastr__["a" /* ToastrModule */].forRoot({
                timeOut: 3000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
            }),
            __WEBPACK_IMPORTED_MODULE_16_ngx_intl_tel_input__["a" /* NgxIntlTelInputModule */],
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__shared_app_shared_module__["a" /* AppSharedModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_home_home_component__ = __webpack_require__("../../../../../src/app/auth/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_forget_password_forget_password_component__ = __webpack_require__("../../../../../src/app/auth/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_4__auth_home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5__auth_login_login_component__["a" /* LoginComponent */],
    },
    {
        path: '',
        loadChildren: 'app/theme/theme.module#ThemeModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__["a" /* AuthGuard */]],
    },
    {
        path: 'forgot-password',
        component: __WEBPACK_IMPORTED_MODULE_6__auth_forget_password_forget_password_component__["a" /* ForgetPasswordComponent */],
    },
    {
        path: 'forgot-password/reset/:token',
        component: __WEBPACK_IMPORTED_MODULE_7__auth_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { useHash: true }), __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/auth/forget-password/forget-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngBusy]=\"busy\"></div>\n<div class=\"blog-login\">\n    <div class=\"blog-login-in\">\n        <form #resetPasswordForm=\"ngForm\" (ngSubmit)=\"sendEmail()\">\n            <img src=\"assets/images/symhiosislogo.png\" alt=\"\" />\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input type=\"text\" class=\"mb-text\" name=\"email\" id=\"email\" [(ngModel)]=\"userEmail\" #email=\"ngModel\" required email>\n                    <label for=\"email\">Email ID</label>\n\n                    <div *ngIf=\"email.errors && email.touched\" class=\"text-danger\">\n                      <p *ngIf=\"email.errors?.required\">Email address is mandatory.</p>\n                      <p *ngIf=\"email.errors?.email\">Please type valid email address.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type=\"submit\" class=\"waves-effect waves-light btn-large\" style=\"width: 100%;\" value=\"Submit\" [disabled]=\"!resetPasswordForm.valid\">\n                </div>\n            </div>\n            <a routerLink=\"/login\" class=\"for-pass\">Login</a>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/forget-password/forget-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/forget-password/forget-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("../../../../../src/app/auth/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgetPasswordComponent = (function () {
    function ForgetPasswordComponent(_router, _service, toastr) {
        this._router = _router;
        this._service = _service;
        this.toastr = toastr;
        this.userEmail = '';
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent.prototype.sendEmail = function () {
        var _this = this;
        this.busy = this._service.forgetPassword(this.userEmail).then(function (res) {
            _this.toastr.success("Reset password link has been sent to your registered email");
        }, function (error) {
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                _this.toastr.error(error.json().msg);
            }
            else {
                _this.toastr.error('Unable reset your password. Please try later.');
            }
        });
    };
    return ForgetPasswordComponent;
}());
ForgetPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'forget-password',
        template: __webpack_require__("../../../../../src/app/auth/forget-password/forget-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/forget-password/forget-password.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object])
], ForgetPasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=forget-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body_outer {\n\tbackground: url(" + escape(__webpack_require__("../../../../../src/assets/images/background.jpg")) + ") no-repeat center;\n\tposition: absolute;\n\tbackground-size: cover;\n\ttop: 0;\n\tbottom: 0;\n\tright: 0;\n\tleft: 0; text-align: center; padding: 44px 20px 20px 20px;\n}\n.logo_section {\n\tdisplay: inline-block; \n\ttext-align: center; \n\tmargin:0 auto; \n\tposition: absolute; \n\tleft: 0; \n\tright: 0;\n\twidth: 275px;\n}\n.nav_section {\n\tfloat: right; \n\tmargin: 0px; \n\tdisplay: inline-block;\n}\n.nav_section ul {\n\tdisplay: block; \n\tmargin:20px 0px;\n}\n.nav_section ul li {\n\tdisplay: inline-block; \n\tlist-style: none;\n}\n.nav_section ul li a {\n\ttext-decoration: none; \n\tcolor: #000; \n\tfont-size: 20px; \n\tfont-family: \"Myriad Pro\"; \n\tfont-weight: normal; \n\tpadding: 5px 10px;\n}\n.nav_section ul li a:after {\n\tcontent: '|';\n\tcolor: #000; \n\tfont-size: 20px; \n\tfloat: right;\n}\n.nav_section ul li:last-child a:after { content: ''; }\n.menu_section { float: left; margin: 20px 0 0 0; }\n.menu_section .dropdown-toggle:after { content: none; }\n.dropdown-menu {\n\twidth: 282px; \n\theight: 214px; \n\tborder-radius: 10px; \n\ttop: -10px !important; \n\tborder: 0px; \n\tbox-shadow: 0 0 8px rgba(0,0,0,0.2); \n\tpadding: 30px 43px 0 40px;\n}\n.menu_section ul { margin: 0px; padding: 0px; }\n.menu_section ul li { margin: 0px; padding: 0px; list-style: none; display: block; width: 100%; }\n.menu_section ul li a {\n\tmargin: 0px; \n\tpadding:20px 0px; \n\tfont-size: 24px; \n\tcolor: #000;\n\tdisplay: block; \n\tborder-bottom: 1px solid #e5e5e5;\n}\n.menu_section ul li:last-child a { border-bottom: 0px; }\n.menu_section ul li a:hover { text-decoration: none; }\n.cross_icon { display: block; clear: both; padding: 0 0px 5px 0; }\n\n@media(max-width:520px) {\n\t.nav_section { display: none; } \n}\n@media(max-width: 580px) {\n\t.logo_section { max-width: 200px; }\n\t.logo_section img { max-width: 100%; }\n}\n@media(max-width:480px) {\n\t.logo_section{ max-width: 150px; }\n\t.logo_section img { max-width: 100%; }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"body_outer\">\n    <div class=\"menu_section\">\n        <div ngbDropdown class=\"d-inline-block\">\n            <a href=\"#\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                <img src=\"../assets/images/icn_menu.svg\">\n            </a>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <a href=\"#\" class=\"cross_icon\">\n                    <img src=\"../assets/images/cross.svg\">\n                </a>\n                <ul>\n                    <li><a href=\"#/login\">Admin Login</a></li>\n                    <li><a href=\"#/login\">User Login</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"logo_section\">\n        <a href=\"#\">\n            <img src=\"../assets/images/logo.png\" alt=\"Logo\"/>\n        </a>\n    </div>\n\n    <nav class=\"nav_section\">\n        <ul>\n            <li><a href=\"#\">Help</a></li>\n            <li><a href=\"#\">About</a></li>\n        </ul>\n    </nav>\n</div> "

/***/ }),

/***/ "../../../../../src/app/auth/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_service__ = __webpack_require__("../../../../../src/app/auth/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(_service, _router, toastr) {
        this._service = _service;
        this._router = _router;
        this.toastr = toastr;
        this.user = { email: "", password: "" };
        this.msg = '';
        this.isForgotPassword = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/auth/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/home/home.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Observable } from 'rxjs/Rx';




var HomeService = (function () {
    function HomeService(_router, http) {
        this._router = _router;
        this.http = http;
        this.rootUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].config.BASE_URL;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].config.API_URL;
    }
    HomeService.prototype.home = function () {
    };
    return HomeService;
}());
HomeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], HomeService);

var _a, _b;
//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blog-login-in a { display: unset; }\n.loginlink { margin-top: 25px; text-align: right; }\n.mt10 { margin-top: 10px; }\n.for-signup {\n    text-align: right;\n    padding-top: 15px;\n    font-size: 15px;\n    font-weight: 600;\n    color: #34A853;\n    letter-spacing: 1px;\n}\n.loginlink a:hover {\n    color: #075175;\n}\n.for-pass {\n    text-align: right;\n    padding-top: 15px;\n    font-size: 15px;\n    font-weight: 600;\n    color: #58b392;\n    letter-spacing: 1px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngBusy]=\"busy\"></div>\n<div class=\"blog-login\">\n    <div class=\"blog-login-in\">\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n            <img src=\"assets/images/symhiosislogo.png\" alt=\"\" />\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type=\"text\" class=\"mb-text\" name=\"email\" id=\"email\" pattern=\"^\\w+([\\.-]?\\w+)@[\\w-]{2,}([.][\\w]{2,}|[.][\\w-]{2,}[.][\\w]{2,})$\" minlength=\"3\" maxlength=\"50\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required email>\n                  <label for=\"email\">Email</label>\n\n                  <div *ngIf=\"email.errors && email.touched\" class=\"text-danger\">\n                    <p *ngIf=\"email.errors?.required\">Email address is mandatory.</p>\n                    <p *ngIf=\"email.errors.minlength\">Minimum of 3 characters</p>\n                    <p *ngIf=\"(email.errors?.minlength == ture) && (email.errors?.pattern)\">Please type valid email address.</p>\n                  </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input type=\"password\" class=\"mb-text\" name=\"password\" id=\"password\" minlength=\"3\" maxlength=\"20\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required>\n                    <label for=\"last_name\">Password</label>\n\n                    <div *ngIf=\"password.errors && password.touched\" class=\"text-danger\">\n                      <p *ngIf=\"password.errors?.required\">Password is mandatory.</p>\n                      <p *ngIf=\"password.errors.minlength\">Minimum of 3 characters</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type=\"submit\" class=\"waves-effect waves-light btn-large\" style=\"width: 100%;\" value=\"Login\" [disabled]=\"!loginForm.valid\">\n                </div>\n            </div>\n            <div class=\"row loginlink\">\n                <div class=\"col-md-12 mt10\">\n                    <a routerLink=\"/forgot-password\" class=\"for-pass\">Forgot Password?</a>\n                </div>\n            </div>\n            \n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/auth/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_service, _router, toastr) {
        this._service = _service;
        this._router = _router;
        this.toastr = toastr;
        this.user = { email: "", password: "" };
        this.msg = '';
        this.isForgotPassword = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('userID');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.busy = this._service.login(this.user).then(function (res) {
            var data = res.data;
            localStorage.setItem('userID', data._id);
            localStorage.setItem('isAdmin', data.is_admin);
            localStorage.setItem('token', res.token);
            localStorage.setItem('email', data.email);
            localStorage.setItem('name', data.name);
            _this.toastr.success('Logged in', 'Welcome', { timeOut: 3000, });
            _this._router.navigate(['/']);
        }, function (error) {
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                _this.toastr.error(error.json().msg);
            }
            else {
                _this.toastr.error('you are not able to login. Please try later.');
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var User = (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
    }
    return User;
}());

var LoginService = (function () {
    function LoginService(_router, http) {
        this._router = _router;
        this.http = http;
        this.rootUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].config.BASE_URL;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].config.API_URL;
    }
    LoginService.prototype.logout = function () {
        localStorage.removeItem("user");
        this._router.navigate(['login']);
    };
    LoginService.prototype.login = function (user) {
        return this.http.post(this.baseUrl + "login", user)
            .toPromise().then(function (res) { return res.json(); });
    };
    LoginService.prototype.checkCredentials = function () {
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['login']);
        }
    };
    LoginService.prototype.forgetPassword = function (email) {
        var obj = { email: email };
        return this.http.post(this.baseUrl + 'forgotPassword/', obj)
            .toPromise().then(function (response) { return response.json(); });
    };
    LoginService.prototype.resetPassword = function (token, obj) {
        return this.http.post(this.baseUrl + 'reset/' + token, obj)
            .toPromise().then(function (response) { return response.json(); });
    };
    LoginService.prototype.resetStaffPassword = function (token, obj) {
        return this.http.post(this.baseUrl + 'resetpassword/' + token, obj)
            .toPromise().then(function (response) { return response.json(); });
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/reset-password/reset-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngBusy]=\"busy\"></div>\n<div class=\"blog-login\">\n    <div class=\"blog-login-in\">\n        <div *ngIf=\"error\">\n          <h2>{{error}}</h2>\n          <a *ngIf=\"isStaffToken\" routerLink=\"/login\" class=\"for-pass\">Login</a>\n        </div>\n        <div *ngIf=\"!token\">\n          <h2>Token not found</h2>\n          <a *ngIf=\"isStaffToken\" routerLink=\"/login\" class=\"for-pass\">Login</a>\n        </div>\n        <div *ngIf=\"passwordReset\">\n          <h2>\n            You password has been reset successfully. You can now login with new password.\n          </h2>\n          <a *ngIf=\"isStaffToken\" routerLink=\"/login\" class=\"for-pass\">Login</a>\n        </div>\n        <form #resetPasswordForm=\"ngForm\" *ngIf=\"token && !passwordReset && !error\" (ngSubmit)=\"resetPassword()\">\n            <img src=\"assets/images/symhiosislogo.png\" alt=\"\" />\n\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input id=\"password\" type=\"password\" class=\"validate\" name=\"password\"\n                  [(ngModel)]=\"user.password\" #password=\"ngModel\" minlength=\"6\" required>\n                  <label for=\"password\">Password</label>\n\n                  <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"text-danger\">\n                    <p *ngIf=\"password.errors.required\">Password is required.</p>\n                    <p *ngIf=\"password.errors.minlength\">Minimum of 6 characters</p>\n                  </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input id=\"confirm_password\" type=\"password\" class=\"validate\" name=\"confirmPassword\"\n                  [(ngModel)]=\"user.confirm\" #confirmPass=\"ngModel\" [equalTo]=\"password\" >\n                  <label for=\"password\">Confirm Password</label>\n\n                  <div *ngIf=\"confirmPass.invalid && (confirmPass.dirty || confirmPass.touched)\" class=\"text-danger\">\n                    <p *ngIf=\"confirmPass.errors.equalTo\">Password doesn't match.</p>\n                  </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input type=\"submit\" class=\"waves-effect waves-light btn-large\" style=\"width: 100%;\" value=\"Reset Password\" [disabled]=\"!resetPasswordForm.valid\">\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("../../../../../src/app/auth/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(router, toastr, activatedRoute, loginService) {
        this.router = router;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.user = {};
        this.token = '';
        this.isStaffToken = false;
        this.error = '';
        this.passwordReset = false;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.activatedRoute.params.subscribe(function (params) {
            if (params['token']) {
                _this.token = params['token'];
            }
            if (params['admin_token']) {
                _this.isStaffToken = true;
                _this.token = params['admin_token'];
            }
        });
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        if (this.isStaffToken) {
            this.emailToStaff();
        }
        else {
            this.emailToUser();
        }
    };
    ResetPasswordComponent.prototype.emailToStaff = function () {
        var _this = this;
        this.busy = this.loginService.resetStaffPassword(this.token, this.user).then(function (res) {
            _this.passwordReset = true;
        }, function (error) {
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                console.log(error.json().msg);
                _this.error = error.json().msg;
            }
            else {
                _this.error = 'Unable reset your password. Please try later.';
            }
        });
    };
    ResetPasswordComponent.prototype.emailToUser = function () {
        var _this = this;
        this.busy = this.loginService.resetPassword(this.token, this.user).then(function (res) {
            _this.passwordReset = true;
        }, function (error) {
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                console.log(error.json().msg);
                _this.error = error.json().msg;
            }
            else {
                _this.error = 'Unable reset your password. Please try later.';
            }
        });
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reset-password',
        providers: [__WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]],
        template: __webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]) === "function" && _d || Object])
], ResetPasswordComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=reset-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
        this.staffID = null;
        this.staffPermission = null;
    }
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        var self = this;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.verifyRoles = function () {
        var roles = '';
        var currentRole = null;
        switch (this.staffPermission) {
            case 1: {
                currentRole = "administrator";
                break;
            }
            case 2: {
                currentRole = "staff";
                break;
            }
        }
        if (currentRole == "administrator" || roles.indexOf(currentRole) > -1) {
            return true;
        }
        else {
            alert("You are not allowed to access this page.");
            return true;
        }
    };
    AuthGuard.prototype.checkLogin = function (url) {
        // if (this.authService.isLoggedIn) { return this.checkNewUser(url); }
        this.authService.redirectUrl = url;
        var sessionId = localStorage.getItem('token');
        if (sessionId == null || sessionId == "") {
            this.router.navigate(['login']);
            //this.router.navigate(['home']);
            return true;
        }
        else {
            return true;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(true).delay(1000).do(function (val) { return _this.isLoggedIn = true; });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/app-shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_busy__ = __webpack_require__("../../../../angular2-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_busy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable_pagination__ = __webpack_require__("../../../../angular2-datatable-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_datatable_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__socket_service__ = __webpack_require__("../../../../../src/app/shared/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_intl_tel_input__ = __webpack_require__("../../../../ngx-intl-tel-input/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppSharedModule = (function () {
    function AppSharedModule() {
    }
    return AppSharedModule;
}());
AppSharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_busy__["BusyModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_datatable_pagination__["NG2DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_10_ngx_intl_tel_input__["a" /* NgxIntlTelInputModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__socket_service__["a" /* SocketService */]],
        declarations: []
    })
], AppSharedModule);

//# sourceMappingURL=app-shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SocketService = (function () {
    function SocketService() {
    }
    //   socketUrl;
    SocketService.prototype.sendMessage = function (message) {
        console.log("Message sending...");
        this.socket.emit('', message);
        console.log("Message sent!");
    };
    SocketService.prototype.getMessages = function () {
        var _this = this;
        var SOCKET_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.SOCKET_URL;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(SOCKET_URL);
            _this.socket.on(localStorage.getItem('userID'), function (data) {
                console.log("Notification recieved", data);
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "../../../../../src/assets/images/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.c3b5da561431a0c125dd.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// config: {
// "APP_NAME": "Holistic",
//   "BASE_URL": "http://localhost:4000/",
//   "API_URL": "http://localhost:4000/api/v1/"
// }
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    envName: "devLocal",
    config: {
        APP_NAME: "Holistic",
        SOCKET_URL: "https://iamlvcapi.herokuapp.com",
        BASE_URL: "https://iamlvcapi.herokuapp.com",
        API_URL: "https://iamlvcapi.herokuapp.com/api/v1/",
        uploadPath: "https://iamlvcapi.herokuapp.com/uploadedFiles/"
        /*SOCKET_URL: "http://172.24.0.176:4001",
        BASE_URL: "http://172.24.0.176:4001/",
        API_URL: "http://172.24.0.176:4001/api/v1/",
        uploadPath: "http://172.24.0.176:4001/uploadedFiles/"*/
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map