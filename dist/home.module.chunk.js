webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-wrap\">\n    <app-sub-header></app-sub-header>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-offset-6 col-sm-6\">\n                <div class=\"banner-text-wrap\">\n                    <h1>\n                        <span class=\"skyblue-text\">YOU ARE</span><br>\n                        LOVEABLE<br>\n                        VALUABLE<br>\n                        CAPABLE<br>\n                    </h1>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"LVC-question\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 text-center\">\n                <h3 class=\"wow slideInTop\" data-wow-duration=\"1s\">Do you want to truly love yourself?</h3>\n                <h3 class=\"wow slideInLeft\"  data-wow-delay=\"2s\">Do you want to believe you are valuable?</h3>\n                <h3 class=\"wow slideInRight\" data-wow-delay=\"3s\">Do you want to know you are capable?</h3>\n                <p class=\"wow bounceInUp\" data-wow-delay=\"4s\">If you said yes to any of these, you are at right place!</p>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"box-wrap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>What We Offer</h3>\n            </div>\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"step-wrap\">\n                    <figure>\n                        <img src=\"assets/images/online.png\" alt=\"Step 1\"/>\n                    </figure>\n                    <h4>Online Course</h4>\n                    <p>The I Am LVC personalized online course will empower you to know you are lovable, valuable, and capable and to treat yourself and others as lovable, valuable, and capable.</p>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"step-wrap\">\n                    <figure>\n                        <img src=\"assets/images/target.png\" alt=\"Step 1\"/>\n                    </figure>\n                    <h4>How Do You Personalize It?</h4>\n                    <p>After you register, you will take an extensive survey, where you will, through checking yes or no, identify the areas that have caused you not to feel lovable, valuable, and capable and those areas where you currently do feel this way. We will use this information to create your personalized course.</p>\n                </div>\n            </div>        \n            <div class=\"col-sm-6\">\n                <div class=\"step-wrap\">\n                    <figure>\n                        <img src=\"assets/images/data-flow-chart.png\" alt=\"Step 1\"/>\n                    </figure>\n                    <h4>How Does It Work?</h4>\n                    <p>Your course will have anywhere from 15 to over 30 intervention exercises. You can do one exercise each morning or just 2-3 per week. Most exercises will take 10-20 minutes to complete, and then you will practice implementing what you have learned throughout the day.</p>\n                </div>\n            </div>\n                        \n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"step-wrap\">\n                    <figure>\n                        <img src=\"assets/images/graphic-progression.png\" alt=\"Step 1\"/>\n                    </figure>\n                    <h4>Daily Progress</h4>\n                    <p>Each time you login into or out of the course, you will take a short survey. These results will help you to track your overall progress toward knowing you are lovable, valuable, and capable.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"banner-img\">\n    <div class=\"container\"> \n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h4>I Am LVC Vision</h4>   \n                <p>I Am LVC will empower you to know you are lovable, valuable, and capable. When you know this, you will treat yourself with love, kindness, compassion, and respect. You will make choices that honor you and those around you. You will know that others are also inherently lovable, valuable, and capable. You will treat others with the same love, kindness, compassion, and respect with which you treat yourself. You will empower others to know that they are lovable, valuable, and capable. We will continue to spread this knowledge until every person knows they are lovable, valuable, and capable and treats others in kind.</p>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"box-wrap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <div class=\"shadow-box\">\n                    <div class=\"img-wrap\">\n                        <img src=\"assets/images/womanrunner.jpg\" alt=\"\"/>\n                    </div>\n                    <div class=\"text-wrap\">\n                        <h4>I Am LVC Videos</h4>\n                        <p>Are you interested in hearing from others and learning how they overcame life’s hurdles to know they are lovable, valuable, and capable?</p>\n                        <a href=\"https://www.iamlvc.org/\" class=\"blue-border\">Watch Here</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"shadow-box\">\n                    <div class=\"img-wrap\">\n                        <img src=\"assets/images/kidsuperheros.jpg\" alt=\"\"/>\n                    </div>\n                    <div class=\"text-wrap\">\n                        <h4>I Am LVC Story</h4>\n                        <p>Do you want to know why <br>we created I Am LVC?</p>\n                        <a href=\"https://www.iamlvc.org/story/\" class=\"blue-border\">Find Out Here</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"shadow-box\">\n                    <div class=\"img-wrap\">\n                        <img src=\"assets/images/girloutdoors.jpg\" alt=\"\"/>\n                    </div>\n                    <div class=\"text-wrap\">\n                        <h4>LVC Free Exercises</h4>\n                        <p>Begin your journey now to knowing you are lovable, valuable, and capable.</p>\n                        <a href=\"javascript:void(0)\" class=\"blue-border\">Download Now</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"banner-text\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h4>Lovable - Valuable - Capable</h4>   \n                <p><strong>Lovable</strong> - I am lovable. You are lovable. We are worthy of giving love to ourselves and others. We are worthy of receiving love from ourselves and others.</p>\n                <p><strong>Valuable</strong> - I am valuable. You are valuable. We have inherent worth and value.</p>\n                <p><strong>Capable</strong> - I am capable. You are capable. We have the ability to be and to do anything we want.</p>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"box-wrap testimonials\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>Testimonials</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-1\">\n                <div class=\"quote\"><i class=\"fa fa-quote-left\"></i></div>\n            </div>\n            <div class=\"col-sm-10\">\n                <div class=\"carousel slide\" id=\"fade-quote-carousel\" data-ride=\"carousel\" data-interval=30000>\n                    <!-- Carousel indicators -->\n                    <ol class=\"carousel-indicators\">\n                        <li data-target=\"#fade-quote-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n                        <li data-target=\"#fade-quote-carousel\" data-slide-to=\"1\"></li>\n                        <li data-target=\"#fade-quote-carousel\" data-slide-to=\"2\"></li>\n                    </ol>\n                    <!-- Carousel items -->\n                    <div class=\"carousel-inner\">\n                        <div class=\"item\">\n                            <div class=\"profile-circle\">\n                                <img src=\"assets/images/asian.jpg\" />\n                            </div>\n                            <blockquote>\n                                <p>\"I am so thankful for this course. I have finally learned to truly love myself.\"</p>\n                            </blockquote>     \n                        </div>\n                        <div class=\"item\">\n                            <div class=\"profile-circle\"><img src=\"assets/images/aa.jpg\" /></div>\n                            <blockquote>\n                                <p>\"I was really good at loving others, but I never felt that same love for myself. These exercises opened my eyes to a whole new way of seeing things. And now I can say that I really do love myself. Thank you!\"</p>\n                            </blockquote>\n                        </div>\n                        <div class=\"active item\">\n                            <div class=\"profile-circle\"><img src=\"assets/images/man.jpg\" /></div>\n                            <blockquote>\n                                <p>\"This course gave me a lot to think about. I was going through my life and thought things were mostly fine. I took the course because I wanted to feel more capable. I was astounded at how every exercise chosen for me brought me new perspectives. Not only do I now know I am capable, but I feel happier than I have in years.\" </p>\n                            </blockquote>\n                        </div>                                \n                    </div>\n        </div>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"quote\"><i class=\"fa fa-quote-right\"></i></div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map