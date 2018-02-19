webpackJsonp(["theme.module"],{

/***/ "../../../../../src/app/theme/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <figure>\n                    <img src=\"assets/images/whitelogo.png\" alt=\"\" />\n                </figure>\n                <div class=\"footer-text\">\n                    <nav class=\"navbar\" role=\"navigation\">\n                        <ul class=\"nav navbar-nav\">\n                            <li class=\"active\"><a href=\"#\">Home</a></li>\n                            <li><a href=\"#/pages/courseinstructions\">Online Course</a></li>\n                            <li><a href=\"javascript:void(0)\">Free LVC Exercises</a></li>\n                            <li><a href=\"#/pages/videos\">I  Am LVC Videos</a></li>\n                            <li><a href=\"#/pages/story\">I Am LVC Story</a></li>\n                            <li><a href=\"#/pages/contactus\">Contact Us</a></li>\n                        </ul>  \n                    </nav>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/theme/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/theme/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-header\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <ul>\n                    <li *ngIf=\"!user\"><a href=\"#/login\"><span><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>Login</a></li>\n                    <li *ngIf=\"user\"><a href=\"javascript:void(0)\"><span><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>My Account</a></li>\n                    <li *ngIf=\"!user\" >|</li>\n                    <li *ngIf=\"!user\"><a href=\"#/register\"><span><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>Register</a></li>\n                </ul>\n                <div *ngIf=\"!user\" class=\"pull-right\">\n                    <a href=\"#/register\" class=\"dark-blue\">Start Now!</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-sub-header *ngIf=\"!user\" [user]=\"user\" (Logout)=\"logout()\"></app-sub-header>\n"

/***/ }),

/***/ "../../../../../src/app/theme/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem('name');
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('userID');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        this.user = null;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/theme/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\t<div class=\"wrapper\"  *ngIf =\"user\">\n\t\t<!-- <div *ngIf =\"user\" [ngClass]=\"{'sidebarClass':!user}\"> -->\n\t\t<nav id=\"sidebar\">\n\t\t\t<ul class=\"list-unstyled components\">\n\t\t\t\t<li class=\"active\">\n\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t<span><i class=\"fas fa-edit\"></i></span>\n\t\t\t\t\t\t<span class=\"hide-text\">Brief Survey</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<span><i class=\"fas fa-list-ul\"></i></span>\n\t\t\t\t\t\t<span class=\"hide-text\">Course Instructions</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"#pageSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\">\n\t\t\t\t\t\t<span><i class=\"fas fa-bookmark\"></i></span>\n\t\t\t\t\t\t<span class=\"hide-text\">My Course</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<ul class=\"collapse list-unstyled\" id=\"pageSubmenu\">\n\t\t\t\t\t\t<li><a href=\"#\">Exercise 1</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Exercise 2</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Exercise 3</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<span><i class=\"fas fa-chart-line\"></i></span>\n\t\t\t\t\t\t<span class=\"hide-text\">My Progress</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</nav>\n\t\t\t\t<!-- Page Content Holder -->\n\t\t<div id=\"content\" >\n\t\t\t<nav class=\"navbar navbar-default\">\n\t\t\t\t<div class=\"container-fluid\">\n\n\t\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t\t<button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info navbar-btn\" (click)=\"btnToggle()\">\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-align-left\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<a href=#><img alt=\"\" src=\"assets/images/logo.png\"></a>\n\t\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t\t<li><a href=\"#/profile/edit\"><i class=\"fas fa-edit\"></i> Edit Profile</a></li>\n\t\t\t\t\t\t\t<li><a (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i> Logout</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t\t<div  class=\"after-login-content\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\n\t\t\t</div>\n\t\n\t\t</div>\n\t</div>\n\t<div  *ngIf =\"!user\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n\t<!-- </div> -->\n\t\n<app-footer *ngIf =\"!user\"></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/theme/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
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


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(_router) {
        this._router = _router;
        this.wrapperHeight();
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem('name');
        console.log("this.user", this.user);
        this.btnToggle();
    };
    LayoutComponent.prototype.logout = function () {
        localStorage.removeItem('userID');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        this.user = null;
        this._router.navigate(['/']);
    };
    LayoutComponent.prototype.btnToggle = function () {
        jQuery(document).ready(function () {
            jQuery('#sidebarCollapse').on('click', function () {
                jQuery('#sidebar').toggleClass('active');
                jQuery('#content').toggleClass('active');
            });
        });
    };
    LayoutComponent.prototype.wrapperHeight = function () {
        jQuery(document).ready(function () {
            this.heightDiv = jQuery("#content").height();
            jQuery(".wrapper").css("height", this.heightDiv + "px");
            jQuery("#sidebar").css("height", this.heightDiv + "px");
        });
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/theme/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/theme-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_layout_component__ = __webpack_require__("../../../../../src/app/theme/layout/layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_layout_component__["a" /* LayoutComponent */],
        children: [
            {
                path: '',
                loadChildren: 'app/home/home.module#HomeModule'
            },
            {
                path: 'survey',
                loadChildren: 'app/survey/survey.module#SurveyModule'
            },
            {
                path: 'pages',
                loadChildren: 'app/pages/pages.module#PagesModule'
            },
            {
                path: 'profile',
                loadChildren: 'app/profile/profile.module#ProfileModule'
            }
        ]
    }
];
var ThemeRoutingModule = /** @class */ (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/theme.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_routing_module__ = __webpack_require__("../../../../../src/app/theme/theme-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_layout_component__ = __webpack_require__("../../../../../src/app/theme/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/theme/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/theme/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__theme_routing_module__["a" /* ThemeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__layout_layout_component__["a" /* LayoutComponent */], __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */]]
        })
    ], ThemeModule);
    return ThemeModule;
}());



/***/ })

});
//# sourceMappingURL=theme.module.chunk.js.map