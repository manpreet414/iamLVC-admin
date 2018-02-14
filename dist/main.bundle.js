webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/home/home.module": [
		"../../../../../src/app/home/home.module.ts",
		"home.module"
	],
	"app/pages/pages.module": [
		"../../../../../src/app/pages/pages.module.ts",
		"pages.module"
	],
	"app/profile/profile.module": [
		"../../../../../src/app/profile/profile.module.ts",
		"profile.module"
	],
	"app/survey/survey.module": [
		"../../../../../src/app/survey/survey.module.ts",
		"survey.module"
	],
	"app/theme/theme.module": [
		"../../../../../src/app/theme/theme.module.ts",
		"theme.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/_models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_forget_password_forget_password_component__ = __webpack_require__("../../../../../src/app/auth/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_busy__ = __webpack_require__("../../../../angular2-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_busy__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__auth_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__auth_forget_password_forget_password_component__["a" /* ForgetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_10__auth_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_11__auth_register_register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_13_angular2_busy__["BusyModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["a" /* ToastrModule */].forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                }),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_forget_password_forget_password_component__ = __webpack_require__("../../../../../src/app/auth/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { ModuleWithProviders } from '@angular/core';




var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__auth_login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__auth_register_register_component__["a" /* RegisterComponent */],
    },
    {
        path: '',
        loadChildren: 'app/theme/theme.module#ThemeModule',
    },
    {
        path: 'forgot-password',
        component: __WEBPACK_IMPORTED_MODULE_5__auth_forget_password_forget_password_component__["a" /* ForgetPasswordComponent */],
    },
    {
        path: 'forgot-password/reset/:token',
        component: __WEBPACK_IMPORTED_MODULE_6__auth_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true }), __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/forget-password/forget-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngBusy]=\"busy\"></div>\n<section class=\"login-wrap\">\n   <div class=\"right-section\" id=\"right\">\n      <div class=\"content\">\n          <div class=\"table-cell-content\">\n              <div class=\"row\">\n                  <div class=\"col-sm-8 col-sm-offset-2\">\n                      <figure>\n                          <img src=\"assets/images/biggerlogo.png\" alt=\"\"/>\n                      </figure>\n                      <div class=\"panel panel-login\">\n                          <div class=\"panel-heading\">\n                              <div class=\"row\">\n                                  <div class=\"col-xs-12\">\n                                      <a class=\"active\" id=\"login-form-link\">FORGOT PASSWORD</a>\n                                  </div>\n                                  \n                              </div>\n                          </div>\n                          <div class=\"panel-body\">\n                              <div class=\"row\">\n                                  <div class=\"col-lg-12\">\n                                      <form id=\"login-form\" #resetPasswordForm=\"ngForm\" (ngSubmit)=\"sendEmail()\" role=\"form\" style=\"display: block;\">\n                                          <div class=\"form-group\">\n                                              <input type=\"text\" tabindex=\"2\" class=\"form-control\" name=\"email\" id=\"email\" [(ngModel)]=\"userEmail\" #email=\"ngModel\" required email placeholder=\"Email\">\n\n                                            <div *ngIf=\"email.errors && email.touched\" class=\"text-danger pull-left\">\n                                              <p style=\"color:red !important\" *ngIf=\"email.errors?.required\">Email address is mandatory.</p>\n                                              <p style=\"color:red !important\" *ngIf=\"email.errors?.email\">Please type valid email address.</p>\n                                            </div>\n                                          </div>\n                                          <div class=\"form-group\">\n                                              <div class=\"row\">\n                                                  <div class=\"col-sm-12\">\n                                                      <input type=\"submit\" name=\"reset-submit\" id=\"reset-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" [disabled]=\"!resetPasswordForm.valid\" value=\"Submit\">\n                                                      <br>\n                                                      <p><a href=\"#/login\" class=\"\">Back</a></p>\n                                                  </div>\n                                              </div>\n                                          </div>\n                                      </form>\n                                      \n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n               </div>\n          </div>\n      </div>\n  </div>\n    <div class=\"left-section\" id=\"left\">\n        <div class=\"overlap\"></div>\n            <div class=\"content\">\n                <div class=\"table-cell-content\">\n                    <h1>I AM LVC</h1>\n                    <p>I Am LVC empowers people to know they are lovable, valuable, and capable\n            and to treat themselves and others as lovable, valuable, and capable.</p>\n                </div>\n            </div>\n    </div>\n</section>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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




var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(_router, _service, toastr) {
        this._router = _router;
        this._service = _service;
        this.toastr = toastr;
        this.userEmail = '';
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        this.formHandling();
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
    ForgetPasswordComponent.prototype.formHandling = function () {
        jQuery(document).ready(function () {
            function setHeight() {
                var windowHeight = jQuery(window).innerHeight();
                jQuery('#left').css('min-height', windowHeight);
                jQuery('#right').css('min-height', windowHeight);
                jQuery('.content').css('min-height', windowHeight);
            }
            ;
            setHeight();
            jQuery(window).resize(function () {
                setHeight();
            });
        });
    };
    ForgetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'forget-password',
            template: __webpack_require__("../../../../../src/app/auth/forget-password/forget-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/forget-password/forget-password.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



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

module.exports = "<div [ngBusy]=\"busy\"></div>\n<section class=\"login-wrap\">\n     <div class=\"right-section\" id=\"right\">\n        <div class=\"content\">\n            <div class=\"table-cell-content\">\n                <div class=\"row\">\n                    <div class=\"col-sm-8 col-sm-offset-2\">\n                        <figure>\n                            <img src=\"assets/images/biggerlogo.png\" alt=\"\"/>\n                        </figure>\n                        <div class=\"panel panel-login\">\n                            <div class=\"panel-heading\">\n                                <div class=\"row\">\n                                    <div class=\"col-xs-12\">\n                                        <a class=\"active\" id=\"login-form-link\">LOGIN</a>\n                                    </div>\n                                    \n                                </div>\n                            </div>\n                            <div class=\"panel-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-lg-12\">\n                                        <form id=\"login-form\"  #loginForm=\"ngForm\" (ngSubmit)=\"login()\" role=\"form\" style=\"display: block;\">\n                                            <div class=\"form-group\">\n                                                <input type=\"text\" placeholder=\"Email\" name=\"email\" id=\"email\" tabindex=\"1\" class=\"form-control\" pattern=\"^\\w+([\\.-]?\\w+)@[\\w-]{2,}([.][\\w]{2,}|[.][\\w-]{2,}[.][\\w]{2,})$\" minlength=\"3\" maxlength=\"50\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required email>\n\n                                                <div *ngIf=\"email.errors && email.touched\" class=\"text-danger pull-left\">\n                                                    <p style=\"color:red !important\"*ngIf=\"email.errors?.required\">Email address is mandatory.</p>\n                                                    <p style=\"color:red !important\" *ngIf=\"email.errors.minlength\">Minimum of 3 characters</p>\n                                                    <p style=\"color:red !important\" *ngIf=\"(email.errors?.minlength == ture) && (email.errors?.pattern)\">Please type valid email address.</p>\n                                                </div>\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <input type=\"password\" placeholder=\"Password\" class=\"form-control\" tabindex=\"2\" name=\"password\" id=\"password\" minlength=\"3\" maxlength=\"20\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required>\n\n                                                <div *ngIf=\"password.errors && password.touched\" class=\"text-danger pull-left\">\n                                                  <p style=\"color:red !important\" *ngIf=\"password.errors?.required\">Password is mandatory.</p>\n                                                  <p style=\"color:red !important\" *ngIf=\"password.errors.minlength\">Minimum of 3 characters</p>\n                                                </div>\n                                            </div>\n                                            <div class=\"form-group text-center\">\n                                                <input type=\"checkbox\" tabindex=\"3\" class=\"\" name=\"remember\" id=\"remember\">\n                                                <label for=\"remember\"> Remember Me</label>\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-sm-12\">\n                                                        <input type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" [disabled]=\"!loginForm.valid\" value=\"Log In\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-6\">\n                                                        <div class=\"text-center\">\n                                                            <a routerLink=\"/forgot-password\" tabindex=\"5\" class=\"forgot-password\">Forgot Password?</a>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-md-6\">\n                                                        <div class=\"text-center\">\n                                                            <a href=\"#/register\" tabindex=\"5\" class=\"forgot-password\">Register now!</a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </form>\n                                        \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                 </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"left-section\" id=\"left\">\n        <div class=\"overlap\"></div>\n        <div class=\"content\">\n            <div class=\"table-cell-content vertical-center\">\n                \n                <h1>I AM LVC</h1>\n                <p>I Am LVC empowers people to know they are lovable, valuable, and capable\nand to treat themselves and others as lovable, valuable, and capable.</p>\n            </div>\n        </div>\n    </div>\n   \n</section>\n"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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




var LoginComponent = /** @class */ (function () {
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
        this.formHandling();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.busy = this._service.login(this.user).then(function (res) {
            var data = res.data;
            localStorage.setItem('userID', data._id);
            localStorage.setItem('isAdmin', data.is_admin);
            localStorage.setItem('token', res.token);
            localStorage.setItem('email', data.email);
            localStorage.setItem('name', data.fullName);
            localStorage.setItem('firstName', data.firstName);
            _this.toastr.success(data.firstName, 'Welcome', { timeOut: 3000, });
            _this._router.navigate(['/survey']);
        }, function (error) {
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                _this.toastr.error(error.json().msg);
            }
            else {
                _this.toastr.error('you are not able to login. Please try later.');
            }
        });
    };
    LoginComponent.prototype.formHandling = function () {
        jQuery(document).ready(function () {
            function setHeight() {
                var windowHeight = jQuery(window).innerHeight();
                jQuery('#left').css('min-height', windowHeight);
                jQuery('#right').css('min-height', windowHeight);
                jQuery('.content').css('min-height', windowHeight);
            }
            ;
            setHeight();
            jQuery(window).resize(function () {
                setHeight();
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
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






// import { BaseService } from "../../services/base-service";

var User = /** @class */ (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
    }
    return User;
}());

var LoginService = /** @class */ (function () {
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
    LoginService.prototype.register = function (user) {
        return this.http.post(this.baseUrl + "register", user)
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
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngBusy]=\"busy\"></div>\n<section class=\"login-wrap register-wrap\">\n    <div class=\"right-section\" id=\"right\">\n        <div class=\"content\">\n            <div class=\"table-cell-content\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 col-md-offset-2\">\n                        <figure>\n                            <img src=\"assets/images/biggerlogo.png\" alt=\"\"/>\n                        </figure>\n                        <div class=\"panel panel-login\">\n                            <div class=\"panel-heading\">\n                                <div class=\"row\">\n                                    <div class=\"col-xs-12\">\n                                        <a class=\"active\" id=\"login-form-link\">Register For The I Am LVC Online Course</a>\n                                    </div>\n                                    \n                                </div>\n                            </div>\n                            <div class=\"panel-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-lg-12\">\n                                        <form id=\"login-form\"   #registerForm=\"ngForm\" (ngSubmit)=\"getToken()\" role=\"form\" style=\"display: block;\">\n                                            <div class=\"row\">\n                                                <div class=\"col-md-6\">\n                                                    <div class=\"form-group\">\n                                                        <input type=\"text\" name=\"firstName\" id=\"firstName\" tabindex=\"1\" class=\"form-control\" minlength=\"3\" maxlength=\"50\" [(ngModel)]=\"user.firstName\" #firstName=\"ngModel\" required  placeholder=\"First Name\">\n\n                                                        <div *ngIf=\"firstName.errors && firstName.touched\" class=\"text-danger pull-left\">\n                                                            <p style=\"color:red !important\"*ngIf=\"firstName.errors?.required\">First Name is mandatory.</p>\n                                                            <p style=\"color:red !important\" *ngIf=\"firstName.errors.minlength\">Minimum of 3 characters</p>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-6\">\n                                                    <div class=\"form-group\">\n                                                        <input type=\"text\" name=\"lastName\" id=\"lastName\" tabindex=\"1\" class=\"form-control\" minlength=\"3\" maxlength=\"50\" [(ngModel)]=\"user.lastName\" #lastName=\"ngModel\" required  placeholder=\"Last Name\">\n\n                                                        <div *ngIf=\"lastName.errors && lastName.touched\" class=\"text-danger pull-left\">\n                                                            <p style=\"color:red !important\"*ngIf=\"lastName.errors?.required\">Last Name is mandatory.</p>\n                                                            <p style=\"color:red !important\" *ngIf=\"lastName.errors.minlength\">Minimum of 3 characters</p>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-6\">\n                                                    <div class=\"form-group\">\n                                                        <input type=\"text\" name=\"email\" id=\"email\" tabindex=\"1\" class=\"form-control\" minlength=\"3\" maxlength=\"50\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required email placeholder=\"Email\">\n\n                                                        <div *ngIf=\"email.errors && email.touched\" class=\"text-danger pull-left\">\n                                                            <p style=\"color:red !important\"*ngIf=\"email.errors?.required\">Email address is mandatory.</p>\n                                                            <p style=\"color:red !important\" *ngIf=\"email.errors.minlength\">Minimum of 3 characters</p>\n                                                        </div>\n                                                    </div>\n                                                </div>                                                    \n                                                <div class=\"col-md-6\">\n                                                    <div class=\"form-group\">\n                                                        <input type=\"password\" class=\"form-control\" tabindex=\"2\" name=\"password\" id=\"password\" minlength=\"3\" maxlength=\"20\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required placeholder=\"Password\">\n\n                                                        <div *ngIf=\"password.errors && password.touched\" class=\"text-danger pull-left\">\n                                                          <p style=\"color:red !important\" *ngIf=\"password.errors?.required\">Password is mandatory.</p>\n                                                          <p style=\"color:red !important\" *ngIf=\"password.errors.minlength\">Minimum of 3 characters</p>\n                                                          </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12\">\n                                                    <div class=\"form-group\">\n                                                        <input type=\"date\" name=\"birthday\" id=\"birthday\" tabindex=\"1\" class=\"form-control\" placeholder=\"Birthday\" value=\"\" [(ngModel)]=\"user.dob\" >\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12\">\n                                                    <div class=\"form-group\">\n                                                        <input type=\"text\" name=\"address\" id=\"address\" tabindex=\"1\" class=\"form-control\" placeholder=\"Address\" value=\"\" [(ngModel)]=\"user.address\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <input type=\"text\" name=\"City\" id=\"City\" tabindex=\"1\" class=\"form-control\" placeholder=\"City\" value=\"\" [(ngModel)]=\"user.city\">\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <input type=\"text\" name=\"State\" id=\"address\" tabindex=\"1\" class=\"form-control\" placeholder=\"State\" value=\"\" [(ngModel)]=\"user.state\">\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <input type=\"text\" name=\"Zip Code\" id=\"ZipCode\" tabindex=\"1\" class=\"form-control\" placeholder=\"Zip Code\" value=\"\" [(ngModel)]=\"user.zipcode\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row radio-custom\">\n                                                        <div class=\"col-md-12\">\n                                                            <div>\n                                                                <input type=\"radio\" id=\"1month\" name=\"radio\" checked=\"checked\" />\n                                                                <label for=\"1month\"><span></span>1-month subscription - $63</label>\n                                                            </div>\n                                                           <!--<small>Billed monthly. Renews automatically. Cancel anytime.</small>-->\n                                                           \n                                                        </div>\n                                                        <div class=\"col-md-12\">\n                                                            <div>\n                                                                <input type=\"radio\" id=\"3month\" name=\"radio\" />\n                                                                <label for=\"3month\"><span></span>3-month subscription - $160.65 – 15% discount </label>\n                                                            </div>\n                                                            <small>After 3 months, renews automatically at the monthly rate. Cancel anytime.</small>\n                                                        </div>\n                                                        <div class=\"col-md-12\">\n                                                            <div>\n                                                                <input type=\"radio\" id=\"6month\" name=\"radio\" />\n                                                                <label for=\"6month\"><span></span>6-month subscription - $283.50 – 25% discount</label>\n                                                            </div>\n                                                            <small>After 6 months, renews automatically at the monthly rate. Cancel anytime</small>\n                                                        </div>\n                                                    </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12\">\n                                                    <div class=\"form-group\">\n                                                        <input type=\"text\" name=\"cardNumber\" id=\"cardNumber\" tabindex=\"1\" class=\"form-control\" [(ngModel)]=\"cardNumber\" placeholder=\"Card Number\" value=\"\" required=\"\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <input type=\"text\" name=\"expMonth\" id=\"expMonth\" tabindex=\"1\" class=\"form-control\"  [(ngModel)]=\"expMonth\" placeholder=\"Expiry Month\" value=\"\" required=\"\">\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <input type=\"text\" name=\"expYear\" id=\"expYear\" tabindex=\"1\" class=\"form-control\"  [(ngModel)]=\"expYear\" placeholder=\"Expiry Year\" value=\"\" required=\"\">\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <input type=\"text\" name=\"CVC\" id=\"CVC\" tabindex=\"2\" [(ngModel)]=\"CVC\" class=\"form-control\" placeholder=\"CVC\" required=\"\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-sm-12\">\n                                                        <input type=\"submit\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"Start Now!\" [disabled]=\"!registerForm.valid\">\n                                                        <!-- <p><small>$36</small></p> -->\n                                                        <p><small>Billed monthly. Renews automatically. Cancel anytime.</small></p>\n                                                        <p>Already registered? <a href=\"#/login\" class=\"\">Login here</a>.</p>\n                                                        \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            \n                                        </form>\n                                        \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                 </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"left-section\" id=\"left\">\n                <div class=\"content\">\n                    <div class=\"table-cell-content\">\n                        \n                        <h1>I AM LVC</h1>\n                        <p>The I Am LVC online course will empower you to know you are lovable, valuable, and capable and to treat yourself and others as lovable,\nvaluable, and capable.</p>\n                        <h3>How Does It Work ?</h3>\n                        <p>After you register, you will be taken first to a brief survey about how lovable, valuable, and capable (LVC) you currently feel and how LVC you want to feel. Then, you will be taken to a more detailed survey, where you will, through checking yes or no, identify the areas that have caused you not to feel LVC and those areas where you currently feel LVC. Based on the areas you select, your personalized course will be created for you.\n</p>\n                        <p>Next, your course list will populate, and you will be given instructions on how to proceed. Depending on your survey selection, your course will have between 30-55 exercises. The program works best when you do the exercises in the order provided and when you complete one exercise every 2-3 days, preferably in the morning. Most exercises will take 10-20 minutes to complete, and then you will practice implementing what you have learned throughout the next few days.\n</p>    \n                        <p>Each time you log in to the course and each time you complete an exercise, you will take a short survey about how LVC you currently feel. This will help you to gage your progress and the effectiveness of each exercise.</p>\n                        <h3>What Is The Investment?</h3>\n                        <p><b>Time : </b>Approximately 10-20 minutes every 2-3 days (some exercises will be shorter and some will be longer). The first day, when you are completing all the surveys and the introductory information, it will take 30-45 minutes.\n</p>\n                        <p><b>Money : </b>$63/month. You may choose to have access to the course for as many or as few months as you would like. Your credit card will be billed each month until you cancel your subscription. When you cancel your subscription, your course information will be saved in the system and available to you if you choose to come back at a later time. Your subscription will remain active until the end of the pre-paid month.</p>\n                        <p><b> You are worth</b></p>\n                    </div>\n                </div>\n            </div>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("../../../../../src/app/auth/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/_models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_service, _router, toastr) {
        this._service = _service;
        this._router = _router;
        this.toastr = toastr;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // this.cardNumber = 4242424242424242;
        // this.expMonth = 12;
        // this.expYear = 2022;
        // this.CVC = 123;
        this.formHandling();
    };
    RegisterComponent.prototype.getToken = function () {
        var _this = this;
        this.busy = Stripe.card.createToken({
            number: this.cardNumber,
            exp_month: this.expMonth,
            exp_year: this.expYear,
            cvc: this.CVC
        }, function (status, response) {
            console.log("resssssssssss", status, response);
            if (status === 200) {
                _this.user['token_id'] = response.id;
                _this.register();
                // this.message = `Success! Card token ${response.card.id}.`;
            }
            else {
                console.log("response.error.message", response.error.message);
                // this.toastr.error(response.error.message);
                _this.toastr.error('Card Information is not correct.');
            }
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.busy = this._service.register(this.user).then(function (res) {
            if (!res.error) {
                var data = res.data;
                _this.toastr.success(res.msg, '', { timeOut: 3000, });
                _this._router.navigate(['/login']);
            }
            else {
                _this.toastr.error(res.msg);
            }
        }, function (error) {
            console.log("errrr-=-=-=-=-=-=-", error);
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                _this.toastr.error(error.json().msg);
            }
            else {
                _this.toastr.error('you are not able to register. Please try later.');
            }
        });
    };
    RegisterComponent.prototype.formHandling = function () {
        jQuery(document).ready(function () {
            function setHeight() {
                var windowHeight = jQuery('#right').innerHeight();
                jQuery('#left').css('min-height', windowHeight);
                jQuery('#right').css('min-height', windowHeight);
                jQuery('.content').css('min-height', windowHeight);
            }
            ;
            setHeight();
            jQuery(window).resize(function () {
                setHeight();
            });
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/auth/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/register/register.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



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

module.exports = "<div [ngBusy]=\"busy\"></div>\n<section class=\"login-wrap\">\n   <div class=\"right-section\" id=\"right\">\n      <div class=\"content\">\n          <div class=\"table-cell-content\">\n              <div class=\"row\">\n                  <div class=\"col-sm-8 col-sm-offset-2\">\n                      <figure>\n                          <img src=\"assets/images/biggerlogo.png\" alt=\"\"/>\n                      </figure>\n                      <div class=\"panel panel-login\">\n                          <div class=\"panel-heading\">\n                              <div class=\"row\">\n                                  <div class=\"col-xs-12\">\n                                      <a class=\"active\" id=\"login-form-link\">RESET PASSWORD</a>\n                                  </div>\n                                  \n                              </div>\n                          </div>\n                          <div class=\"panel-body\">\n                              <div class=\"row\">\n                                  <div class=\"col-lg-12\">\n                                      <div *ngIf=\"passwordReset\">\n                                          <h2>\n                                            You password has been reset successfully. You can now login with new password.\n                                          </h2>\n                                          <a routerLink=\"/login\" class=\"for-pass\">Login</a>\n                                      </div>\n                                      <div *ngIf=\"error\">\n                                          <h2>\n                                            {{error}}\n                                          </h2>\n                                          <a routerLink=\"/login\" class=\"for-pass\">Login</a>\n                                      </div>\n                                      <form id=\"login-form\" #resetPasswordForm=\"ngForm\" *ngIf=\"token && !passwordReset && !error\" (ngSubmit)=\"resetPassword()\" role=\"form\" style=\"display: block;\">\n                                          <div class=\"form-group\">\n                                              <input id=\"password\"  tabindex=\"2\" type=\"password\" class=\"form-control\" name=\"password\"\n                                              [(ngModel)]=\"user.password\" #password=\"ngModel\" minlength=\"6\" placeholder=\"New Password\" required>\n\n                                              <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"text-danger pull-left\">\n                                                <p style=\"color:red !important\" *ngIf=\"password.errors.required\">Password is required.</p>\n                                                <p  style=\"color:red !important\"*ngIf=\"password.errors.minlength\">Minimum of 6 characters</p>\n                                              </div>\n                                          </div>\n                                          <div class=\"form-group\">\n                                              <input id=\"confirm_password\" tabindex=\"2\" type=\"password\" class=\"form-control\" name=\"confirmPassword\"\n                                                  [(ngModel)]=\"user.confirm\" #confirmPass=\"ngModel\" [equalTo]=\"password\" placeholder=\"Confirm Password\">\n\n                                                  <div *ngIf=\"confirmPass.invalid && (confirmPass.dirty || confirmPass.touched)\" class=\"text-danger pull-left\">\n                                                    <p style=\"color:red !important\" *ngIf=\"confirmPass.errors.equalTo\">Password doesn't match.</p>\n                                                  </div>\n                                          </div>\n                                          <div class=\"form-group\">\n                                              <div class=\"row\">\n                                                  <div class=\"col-sm-12\">\n                                                      <input type=\"submit\" name=\"reset-submit\" id=\"reset-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" [disabled]=\"!resetPasswordForm.valid\" value=\"Reset\">\n                                                  </div>\n                                              </div>\n                                          </div>\n                                      </form>\n                                      \n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n               </div>\n          </div>\n      </div>\n  </div>\n    <div class=\"left-section\" id=\"left\">\n        <div class=\"overlap\"></div>\n            <div class=\"content\">\n                <div class=\"table-cell-content\">\n                    <h1>I AM LVC</h1>\n                    <p>I Am LVC empowers people to know they are lovable, valuable, and capable\n            and to treat themselves and others as lovable, valuable, and capable.</p>\n                  </div>\n              </div>\n        </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/auth/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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




var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(router, toastr, activatedRoute, loginService) {
        this.router = router;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.user = {};
        this.token = '';
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
        });
        this.formHandling();
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
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
                _this.toastr.error(error.message);
            }
        });
    };
    ResetPasswordComponent.prototype.formHandling = function () {
        jQuery(document).ready(function () {
            function setHeight() {
                var windowHeight = jQuery(window).innerHeight();
                jQuery('#left').css('min-height', windowHeight);
                jQuery('#right').css('min-height', windowHeight);
                jQuery('.content').css('min-height', windowHeight);
            }
            ;
            setHeight();
            jQuery(window).resize(function () {
                setHeight();
            });
        });
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_header_sub_header_component__ = __webpack_require__("../../../../../src/app/shared/sub-header/sub-header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__sub_header_sub_header_component__["a" /* SubHeaderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__sub_header_sub_header_component__["a" /* SubHeaderComponent */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/sub-header/sub-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/sub-header/sub-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav id=\"navbar-primary\" class=\"navbar\" role=\"navigation\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <!-- Brand and toggle get grouped for better mobile display -->\n                    <div class=\"navbar-header\">\n                     <span class=\"pull-left mobile-logo\"><a href=\"#\"><img id=\"logo-navbar-middle\" src=\"assets/images/logo.png\" width=\"200\" alt=\"I am LYC\"></a></span>\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-primary-collapse\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-primary-collapse\">\n                        <ul *ngIf=\"!user\" class=\"nav navbar-nav\">\n                            <li [ngClass]=\"{'active':selectedLink == 'home'}\"><a (click)=\"layout('home','')\" href=\"#\">Home</a></li>\n                            <!--<li [ngClass]=\"{'active':selectedLink == 'onlinecource'}\"><a (click)=\"layout('onlinecource','pages/courseinstructions')\" href=\"javascript:void(0);\">Online Course</a></li>-->\n                            <li>\n                                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Online Course\n                                <span class=\"caret\"></span></a>\n                                <ul class=\"dropdown-menu\">\n                                <li><a href=\"#/pages/group-coaching\" routerLink='/pages/group-coaching'>Group Coaching</a></li>\n                                <li><a href=\"#/pages/corporation\">Online Course for Corporations/Nonprofits </a></li>\n                                </ul>\n                            </li>\n                            <li [ngClass]=\"{'active':selectedLink == 'freelvcexercises'}\" ><a (click)=\"layout('freelvcexercises','')\" href=\"javascript:void(0);\">Free LVC Exercises</a></li>\n                            <li [ngClass]=\"{'active':selectedLink == 'home'}\"  class=\"brand-logo\"><a (click)=\"layout('home','')\" href=\"#\"><img id=\"logo-navbar-middle\" src=\"assets/images/logo.png\" width=\"200\" alt=\"I am LYC\"></a></li>\n                            <li [ngClass]=\"{'active':selectedLink == 'videos'}\" ><a (click)=\"layout('videos','pages/videos')\" href=\"javascript:void(0);\">I  Am LVC Videos</a></li>\n                            <li [ngClass]=\"{'active':selectedLink == 'story'}\" ><a (click)=\"layout('story','pages/story')\" href=\"javascript:void(0);\">I Am LVC Story</a></li>\n                        </ul>\n\n                        <ul *ngIf=\"user\" class=\"nav navbar-nav\">\n                            <li [ngClass]=\"{'active':selectedLink == 'courseinstructions'}\"><a (click)=\"layout('courseinstructions','pages/courseinstructions')\" href=\"javascript:void(0);\">Course Instructions</a></li>\n                            <li [ngClass]=\"{'active':selectedLink == 'your-courses'}\"><a (click)=\"layout('your-courses','pages/your-course')\" href=\"javascript:void(0);\">Your Course</a></li>\n                            <li [ngClass]=\"{'active':selectedLink == 'home'}\"  class=\"brand-logo\"><a (click)=\"layout('home','')\" href=\"#\"><img id=\"logo-navbar-middle\" src=\"assets/images/logo.png\" width=\"200\" alt=\"I am LYC\"></a></li>\n                            <!--<li [ngClass]=\"{'active':selectedLink == 'editprofile'}\" ><a (click)=\"layout('editprofile','profile/edit')\" href=\"javascript:void(0);\">Edit Profile</a></li>-->\n                            <li ><a href=\"javascript:void(0);\">My Progress</a></li>\n                            <li><a (click)=\"logout()\" href=\"javascript:void(0);\">Logout</a></li>\n                        </ul>\n\n                    </div><!-- /.navbar-collapse -->\n                </div>\n            </div>\n        </div><!-- /.container-fluid -->\n    </nav>\n</header>"

/***/ }),

/***/ "../../../../../src/app/shared/sub-header/sub-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubHeaderComponent = /** @class */ (function () {
    function SubHeaderComponent(_router) {
        this._router = _router;
        this.Logout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedLink = 'home';
    }
    SubHeaderComponent.prototype.ngOnInit = function () {
    };
    SubHeaderComponent.prototype.layout = function (key, route) {
        this.selectedLink = key;
        this._router.navigate(['/' + route]);
    };
    SubHeaderComponent.prototype.logout = function () {
        this.Logout.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SubHeaderComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SubHeaderComponent.prototype, "Logout", void 0);
    SubHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sub-header',
            template: __webpack_require__("../../../../../src/app/shared/sub-header/sub-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/sub-header/sub-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SubHeaderComponent);
    return SubHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    config: {
        APP_NAME: "IamLVC",
        SOCKET_URL: "https://iamlvcapi.herokuapp.com",
        BASE_URL: "https://iamlvcapi.herokuapp.com",
        API_URL: "https://iamlvcapi.herokuapp.com/api/",
        uploadPath: "https://iamlvcapi.herokuapp.com/uploadedFiles/"
        // SOCKET_URL: "http://localhost:4001",
        // BASE_URL: "http://localhost:4001",
        // API_URL: "http://localhost:4001/api/",
        // uploadPath: "http://localhost:4001/uploadedFiles/"
        /*SOCKET_URL: "http://172.24.0.176:4001",
        BASE_URL: "http://172.24.0.176:4001/",
        API_URL: "http://172.24.0.176:4001/api/v1/",
        uploadPath: "http://172.24.0.176:4001/uploadedFiles/"*/
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map