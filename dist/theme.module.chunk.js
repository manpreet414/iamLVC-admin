webpackJsonp(["theme.module"],{

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

module.exports = "<div class=\"top-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ul>\n          <li *ngIf=\"!user\"><a href=\"#/login\"><span><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>Login</a></li>\n          <li *ngIf=\"user\"><a href=\"javascript:void(0)\"><span><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>Hi {{user}}</a></li>\n          <li>|</li>\n          <li *ngIf=\"!user\"><a href=\"javascript:void(0)\"><span><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>Register</a></li>\n          <li *ngIf=\"user\"><a (click)=\"logout()\">Logout</a></li>\n        </ul>\n        <div class=\"pull-right\">\n          <a href=\"javascript:void(0)\" class=\"dark-blue\">Start Now!</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"banner-wrap\">\n  <header>\n    <nav id=\"navbar-primary\" class=\"navbar\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n              <span class=\"pull-left mobile-logo\"><a href=\"#\"><img id=\"logo-navbar-middle\" src=\"assets/images/logo.png\" width=\"200\" alt=\"I am LYC\"></a></span>\n              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-primary-collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"navbar-primary-collapse\">\n              <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a href=\"#\">Home</a></li>\n                <li><a href=\"#\">Online Course</a></li>\n                <li><a href=\"#\">LVC Exercises</a></li>\n                <li class=\"brand-logo\"><a href=\"#\"><img id=\"logo-navbar-middle\" src=\"assets/images/logo.png\" width=\"200\" alt=\"I am LYC\"></a></li>\n                <li><a href=\"#\">I  Am LVC Videos</a></li>\n                <li><a href=\"#\">I Am LVC Story</a></li>\n              </ul>\n            </div>\n            <!-- /.navbar-collapse -->\n          </div>\n        </div>\n      </div>\n      <!-- /.container-fluid -->\n    </nav>\n  </header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"banner-text-wrap\">\n          <h1>\n\t        <span class=\"skyblue-text\">YOU ARE</span>\n\t        <br>\n\t        LOVEABLE<br>\n\t        VALUABLE<br>\n\t        CAPABLE<br>\n\t        </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"box-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h3>What We Offer</h3>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"step-wrap\">\n          <figure>\n            <img src=\"assets/images/Forma 1.png\" alt=\"Step 1\" />\n          </figure>\n          <h4>Get Membership</h4>\n          <p>After registration, take a brief survey about how lovable, valuable, and capable (LVC) you currently feel and how LVC you want to feel.</p>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"step-wrap\">\n          <figure>\n            <img src=\"assets/images/Shape 1.png\" alt=\"Step 1\" />\n          </figure>\n          <h4>Extensive Survey</h4>\n          <p>Based on your brief survey, your personalized course list will be created along with instruction.</p>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"step-wrap\">\n          <figure>\n            <img src=\"assets/images/Forma 1 (1).png\" alt=\"Step 1\" />\n          </figure>\n          <h4>Intervention Activities </h4>\n          <p>Each course will have 10-15 exercise, program will work best when it is done as per order and regularly. Mostly exercise will take 10-15 minuites and then you can implemet them all throughout day.</p>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"step-wrap\">\n          <figure>\n            <img src=\"assets/images/Forma 1 (2).png\" alt=\"Step 1\" />\n          </figure>\n          <h4>Daily Progress</h4>\n          <p>Each time you login and logout you will have short survey which will gage your all day progress and tell the importance pf each exercise you took for the day.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"banner-img\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h4>I Am LVC Vision</h4>\n        <p>I Am LVC will empower you to know you are lovable, valuable, and capable. When you know this, you will treat yourself with love, kindness, compassion, and respect. You will make choices that honor you and those around you. You will know that others are also inherently lovable, valuable, and capable. You will treat others with the same love, kindness, compassion, and respect with which you treat yourself. You will empower others to know that they are lovable, valuable, and capable. We will continue to spread this knowledge until every person knows they are lovable, valuable, and capable and treats others in kind.</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"box-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h3>Recent Article</h3>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"shadow-box\">\n          <div class=\"img-wrap\">\n            <img src=\"assets/images/Layer 19.png\" alt=\"\" />\n          </div>\n          <div class=\"text-wrap\">\n            <h4>Family Dynamics- To help your teen</h4>\n            <p>Families are imperfect. As a parent, you will say things you don’t mean and respond in ways you hadn’t intended. </p>\n            <a href=\"javascript:void(0)\" class=\"blue-border\">Read More</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"shadow-box\">\n          <div class=\"img-wrap\">\n            <img src=\"assets/images/Layer 20.png\" alt=\"\" />\n          </div>\n          <div class=\"text-wrap\">\n            <h4>The What, Why, And How Of Perfectionism</h4>\n            <p>Does your teen feel like what he/she achieves is never quite good enough?</p>\n            <a href=\"javascript:void(0)\" class=\"blue-border\">Read More</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"shadow-box\">\n          <div class=\"img-wrap\">\n            <img src=\"assets/images/Layer 21.png\" alt=\"\" />\n          </div>\n          <div class=\"text-wrap\">\n            <h4>Popping The Bubble Mentality</h4>\n            <p>‘‘What do I tell everybody?’’ Gina* asked me as tears streamed down her face. “It’s a small community, everyone is looking at us, judging us. We live in a bubble.”</p>\n            <a href=\"javascript:void(0)\" class=\"blue-border\">Read More</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"banner-text\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h4>What Is The Investment?</h4>\n        <p>Time: Approximately 10-15 minutes a day (some exercises will be shorter and some will be longer). The first day, when you are completing all the surveys and the introductory information, it will take 30-45 minutes.</p>\n        <p>Money: $XX/month. You may choose to have access to the course for as many or as few months as you would like. You may cancel your course subscription at any time and your course information will be saved in the system if you choose to come back at a later time. Your subscription will remain active until the end of the pre-paid month.</p>\n        <a href=\"javascript:void(0)\" class=\"white-border\">START NOW</a>\n        <h5>You are worth it!</h5>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"box-wrap testimonials\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h3>Testimonials</h3>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <div class=\"quote\"><i class=\"fa fa-quote-left\"></i></div>\n      </div>\n      <div class=\"col-sm-10\">\n        <div class=\"carousel slide\" id=\"fade-quote-carousel\" data-ride=\"carousel\" data-interval=\"3000\">\n          <!-- Carousel indicators -->\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#fade-quote-carousel\" data-slide-to=\"0\"></li>\n            <li data-target=\"#fade-quote-carousel\" data-slide-to=\"1\"></li>\n            <li data-target=\"#fade-quote-carousel\" data-slide-to=\"2\" class=\"active\"></li>\n            <li data-target=\"#fade-quote-carousel\" data-slide-to=\"3\"></li>\n            <li data-target=\"#fade-quote-carousel\" data-slide-to=\"4\"></li>\n            <li data-target=\"#fade-quote-carousel\" data-slide-to=\"5\"></li>\n          </ol>\n          <!-- Carousel items -->\n          <div class=\"carousel-inner\">\n            <div class=\"item\">\n              <div class=\"profile-circle\">\n                <img src=\"assets/images/user.png\" />\n              </div>\n              <blockquote>\n                <p>\"Therapy helped me to have confidence in myself and to not let anything put me down.\"</p>\n              </blockquote>\n              <p>- 16 year old male</p>\n            </div>\n            <div class=\"item\">\n              <div class=\"profile-circle\"><img src=\"assets/images/user.png\" /></div>\n              <blockquote>\n                <p>\"My daughter's therapist changed my daughter's life with humor and understanding while being close to me. My daughter could relate to her and trusted her, something which we have not experienced with other therapists. She gave our family loving support and I highly recommend her.\"</p>\n              </blockquote>\n              <p>- Mother of a 16 year old female</p>\n            </div>\n            <div class=\"active item\">\n              <div class=\"profile-circle\"><img src=\"assets/images/user.png\" /></div>\n              <blockquote>\n                <p>\"My daughter learned to recognize her negative thoughts and behaviors, and she learned how to manage them. We have seen major improvements in her interactions with others. She also seems to be happier and more confident.\" </p>\n              </blockquote>\n              <p>- Mother of an 15 year old female</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-1\">\n        <div class=\"quote\"><i class=\"fa fa-quote-right\"></i></div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <figure>\n          <img src=\"assets/images/whitelogo.png\" alt=\"\" />\n        </figure>\n        <nav class=\"navbar\" role=\"navigation\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a href=\"#\">Home</a></li>\n            <li><a href=\"#\">Services</a></li>\n            <li><a href=\"#\">About Us</a></li>\n            <li><a href=\"#\">FAQ</a></li>\n            <li><a href=\"#\">Testimonials</a></li>\n            <li><a href=\"#\">Article</a></li>\n            <li><a href=\"#\">Contact Us</a></li>\n          </ul>\n          <div class=\"footer-text\">\n            <p>Teen Therapy Center (formerly Los Gatos Teen Therapy) counsels families and teens in the San Jose Area.</p>\n            <p>Phone 408.389.3538 Fax 408.228.1988</p>\n            <p>246 Union Avenue, Los Gatos, CA 95032 <a href=\"Info@teentcsv.com\">Info@teentcsv.com</a></p>\n          </div>\n        </nav>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/theme/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
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

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem('name');
    };
    LayoutComponent.prototype.logout = function () {
        localStorage.removeItem('userID');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        this.user = null;
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/theme/layout/layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_layout_component__ = __webpack_require__("../../../../../src/app/theme/layout/layout.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__theme_routing_module__["a" /* ThemeRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__layout_layout_component__["a" /* LayoutComponent */]]
        })
    ], ThemeModule);
    return ThemeModule;
}());



/***/ })

});
//# sourceMappingURL=theme.module.chunk.js.map