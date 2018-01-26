webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
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
                __WEBPACK_IMPORTED_MODULE_10__auth_reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_forget_password_forget_password_component__ = __webpack_require__("../../../../../src/app/auth/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { ModuleWithProviders } from '@angular/core';



var appRoutes = [
    // {
    //   path: 'home',
    //   component: HomeComponent,
    // },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__auth_login_login_component__["a" /* LoginComponent */],
    },
    {
        path: '',
        loadChildren: 'app/theme/theme.module#ThemeModule',
    },
    {
        path: 'forgot-password',
        component: __WEBPACK_IMPORTED_MODULE_4__auth_forget_password_forget_password_component__["a" /* ForgetPasswordComponent */],
    },
    {
        path: 'forgot-password/reset/:token',
        component: __WEBPACK_IMPORTED_MODULE_5__auth_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
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

module.exports = "<!-- <div [ngBusy]=\"busy\"></div> -->\n<div class=\"blog-login\">\n    <div class=\"blog-login-in\">\n        <form #resetPasswordForm=\"ngForm\" (ngSubmit)=\"sendEmail()\">\n            <img src=\"assets/images/symhiosislogo.png\" alt=\"\" />\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input type=\"text\" class=\"mb-text\" name=\"email\" id=\"email\" [(ngModel)]=\"userEmail\" #email=\"ngModel\" required email>\n                    <label for=\"email\">Email ID</label>\n\n                    <div *ngIf=\"email.errors && email.touched\" class=\"text-danger\">\n                      <p *ngIf=\"email.errors?.required\">Email address is mandatory.</p>\n                      <p *ngIf=\"email.errors?.email\">Please type valid email address.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input type=\"submit\" class=\"waves-effect waves-light btn-large\" style=\"width: 100%;\" value=\"Submit\" [disabled]=\"!resetPasswordForm.valid\">\n                </div>\n            </div>\n            <a routerLink=\"/login\" class=\"for-pass\">Login</a>\n        </form>\n    </div>\n</div>\n"

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

module.exports = "<!-- <div [ngBusy]=\"busy\"></div> -->\n<section class=\"login-wrap\">\n    <div class=\"left-section\" id=\"left\">\n        <div class=\"overlap\"></div>\n        <div class=\"content\">\n            <div class=\"table-cell-content\">\n                <figure>\n                    <img src=\"assets/images/whitelogo.png\" alt=\"\"/>\n                </figure>\n                <h1>I AM LYC</h1>\n                <p>I Am LVC will empower you to know you are lovable, valuable, and capable. When you know this, you will treat yourself with love, kindness, compassion, and respect. </p>\n            </div>\n        </div>\n    </div>\n    <div class=\"right-section\" id=\"right\">\n        <div class=\"content\">\n            <div class=\"table-cell-content\">\n                <div class=\"row\">\n                    <div class=\"col-sm-8 col-sm-offset-2\">\n                        <div class=\"panel panel-login\">\n                            <div class=\"panel-heading\">\n                                <div class=\"row\">\n                                    <div class=\"col-xs-6\">\n                                        <a class=\"active\" id=\"login-form-link\">LOGIN</a>\n                                    </div>\n                                    <div class=\"col-xs-6\">\n                                        <a id=\"register-form-link\">REGISTER</a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"panel-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-lg-12\">\n                                        <form id=\"login-form\"  #loginForm=\"ngForm\" (ngSubmit)=\"login()\" role=\"form\" style=\"display: block;\">\n                                            <div class=\"form-group\">\n                                                <input type=\"text\" name=\"email\" id=\"email\" tabindex=\"1\" class=\"form-control\" pattern=\"^\\w+([\\.-]?\\w+)@[\\w-]{2,}([.][\\w]{2,}|[.][\\w-]{2,}[.][\\w]{2,})$\" minlength=\"3\" maxlength=\"50\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required email>\n\n                                                  <div *ngIf=\"email.errors && email.touched\" class=\"text-danger pull-left\">\n                                                    <p style=\"color:red !important\"*ngIf=\"email.errors?.required\">Email address is mandatory.</p>\n                                                    <p style=\"color:red !important\" *ngIf=\"email.errors.minlength\">Minimum of 3 characters</p>\n                                                    <p style=\"color:red !important\" *ngIf=\"(email.errors?.minlength == ture) && (email.errors?.pattern)\">Please type valid email address.</p>\n                                                  </div>\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <input type=\"password\" class=\"form-control\" tabindex=\"2\" name=\"password\" id=\"password\" minlength=\"3\" maxlength=\"20\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required>\n\n                                                <div *ngIf=\"password.errors && password.touched\" class=\"text-danger pull-left\">\n                                                  <p style=\"color:red !important\" *ngIf=\"password.errors?.required\">Password is mandatory.</p>\n                                                  <p style=\"color:red !important\" *ngIf=\"password.errors.minlength\">Minimum of 3 characters</p>\n                                                </div>\n                                            </div>\n                                            <div class=\"form-group text-center\">\n                                                <input type=\"checkbox\" tabindex=\"3\" class=\"\" name=\"remember\" id=\"remember\">\n                                                <label for=\"remember\"> Remember Me</label>\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-sm-12\">\n                                                        <input type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"Log In\" [disabled]=\"!loginForm.valid\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-lg-12\">\n                                                        <div class=\"text-center\">\n                                                            <a routerLink=\"/forgot-password\" tabindex=\"5\" class=\"forgot-password\">Forgot Password?</a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </form>\n                                        <form id=\"register-form\"  method=\"post\" role=\"form\" style=\"display: none;\">\n                                            <div class=\"form-group\">\n                                                <input type=\"text\" name=\"username\" id=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <input type=\"email\" name=\"email\" id=\"email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" value=\"\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <input type=\"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <input type=\"password\" name=\"confirm-password\" id=\"confirm-password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Confirm Password\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-sm-12\">\n                                                        <input type=\"submit\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"Register\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </form>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                 </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

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
        // busy: Promise<any>;
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
        // this.busy = 
        this._service.login(this.user).then(function (res) {
            var data = res.data;
            localStorage.setItem('userID', data._id);
            localStorage.setItem('isAdmin', data.is_admin);
            localStorage.setItem('token', res.token);
            localStorage.setItem('email', data.email);
            localStorage.setItem('name', data.name);
            _this.toastr.success(data.name, 'Welcome', { timeOut: 3000, });
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
        jQuery('#login-form-link').click(function (e) {
            jQuery("#login-form").delay(100).fadeIn(100);
            jQuery("#register-form").fadeOut(100);
            jQuery('#register-form-link').removeClass('active');
            jQuery(this).addClass('active');
            e.preventDefault();
        });
        jQuery('#register-form-link').click(function (e) {
            jQuery("#register-form").delay(100).fadeIn(100);
            jQuery("#login-form").fadeOut(100);
            jQuery('#login-form-link').removeClass('active');
            jQuery(this).addClass('active');
            e.preventDefault();
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
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], LoginService);
    return LoginService;
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

module.exports = "<!-- <div [ngBusy]=\"busy\"></div> -->\n<div class=\"blog-login\">\n    <div class=\"blog-login-in\">\n        <div *ngIf=\"error\">\n          <h2>{{error}}</h2>\n          <a *ngIf=\"isStaffToken\" routerLink=\"/login\" class=\"for-pass\">Login</a>\n        </div>\n        <div *ngIf=\"!token\">\n          <h2>Token not found</h2>\n          <a *ngIf=\"isStaffToken\" routerLink=\"/login\" class=\"for-pass\">Login</a>\n        </div>\n        <div *ngIf=\"passwordReset\">\n          <h2>\n            You password has been reset successfully. You can now login with new password.\n          </h2>\n          <a *ngIf=\"isStaffToken\" routerLink=\"/login\" class=\"for-pass\">Login</a>\n        </div>\n        <form #resetPasswordForm=\"ngForm\" *ngIf=\"token && !passwordReset && !error\" (ngSubmit)=\"resetPassword()\">\n            <img src=\"assets/images/symhiosislogo.png\" alt=\"\" />\n\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input id=\"password\" type=\"password\" class=\"validate\" name=\"password\"\n                  [(ngModel)]=\"user.password\" #password=\"ngModel\" minlength=\"6\" required>\n                  <label for=\"password\">Password</label>\n\n                  <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"text-danger\">\n                    <p *ngIf=\"password.errors.required\">Password is required.</p>\n                    <p *ngIf=\"password.errors.minlength\">Minimum of 6 characters</p>\n                  </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input id=\"confirm_password\" type=\"password\" class=\"validate\" name=\"confirmPassword\"\n                  [(ngModel)]=\"user.confirm\" #confirmPass=\"ngModel\" [equalTo]=\"password\" >\n                  <label for=\"password\">Confirm Password</label>\n\n                  <div *ngIf=\"confirmPass.invalid && (confirmPass.dirty || confirmPass.touched)\" class=\"text-danger\">\n                    <p *ngIf=\"confirmPass.errors.equalTo\">Password doesn't match.</p>\n                  </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <input type=\"submit\" class=\"waves-effect waves-light btn-large\" style=\"width: 100%;\" value=\"Reset Password\" [disabled]=\"!resetPasswordForm.valid\">\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

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
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset-password',
            providers: [__WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]],
            template: __webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
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
        API_URL: "https://iamlvcapi.herokuapp.com/api/v1/",
        uploadPath: "https://iamlvcapi.herokuapp.com/uploadedFiles/"
        // SOCKET_URL: "http://localhost:4001",
        // BASE_URL: "http://localhost:4001",
        // API_URL: "http://localhost:4001/api/v1/",
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