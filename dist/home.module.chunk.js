webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_activate_route_guard__ = __webpack_require__("../../../../../src/app/auth/activate-route-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_activate_route_guard__["a" /* ActiveRouteGuard */]]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
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

module.exports = "<div class=\"banner-wrap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"banner-text-wrap mani06011991\">\n                    <h1>\n                        <span class=\"skyblue-text\">YOU ARE</span><br>\n                        LOVEABLE<br>\n                        VALUABLE<br>\n                        CAPABLE<br>\n                    </h1>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"LVC-question\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 text-center\">\n                <h3 class=\"wow slideInTop\" data-wow-duration=\"0.8s\">Do you want to truly love yourself?</h3>\n                <h3 class=\"wow slideInLeft\"  data-wow-delay=\"1.8s\">Do you want to believe you are valuable?</h3>\n                <h3 class=\"wow slideInRight\" data-wow-delay=\"2.8s\">Do you want to know you are capable?</h3>\n                <h3 class=\"wow bounceInUp\" data-wow-delay=\"3.8s\">YOU ARE AND YOU ARE IN THE RIGHT PLACE!</h3>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"box-wrap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>What We Offer</h3>\n            </div>\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"step-wrap\">\n                    <a routerLink='/pages/online-course'>\n                        <figure>\n                            <img src=\"assets/images/onlinecourse.jpg\" alt=\"Step 1\"/>\n                        </figure>\n                        <h4>Online Course</h4>\n                        <p>Your I Am LVC personalized online course will empower you to know you are lovable, valuable, and capable and to treat yourself and others as lovable, valuable, and capable. After you complete a detailed survey, your personalized course with 30-55 intervention exercises will be created for you. You will complete one exercise 2-3 times per week. Most exercises will take 10-20 minutes to complete, and then you will practice implementing what you have learned throughout the coming days.</p>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"step-wrap\">\n                    <a  routerLink='/pages/group-coaching'>\n                        <figure>\n                            <img src=\"assets/images/Groupcoaching.jpg\" alt=\"Step 1\"/>\n                        </figure>\n                        <h4>Group Coaching</h4>\n                        <p>You will receive additional support through group coaching as you work through your personalized online course. You will have a place to ask your questions, to get clarification, and to receive guidance if you are stuck. You will receive support from others who are also seeking to know they are lovable, valuable, and capable.</p>\n                    </a>\n                </div>\n            </div>        \n            <div class=\"col-sm-6\">\n                <div class=\"step-wrap\">                    \n                    <a  routerLink='/pages/corporation'>\n                        <figure>\n                            <img src=\"assets/images/corporations.jpg\" alt=\"Step 1\"/>\n                        </figure>\n                        <h4>Online Course for Corporations/Nonprofits </h4>\n                        <p>Corporations and nonprofits can purchase access to the online course in bulk for their employees. When your employees know they are lovable, valuable, and capable and treat themselves and others in this way, you will see their workplace relationships improve, their problem-solving skills expand, and their productivity increase. </p>\n                    </a>\n                </div>\n            </div>\n                        \n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"step-wrap\">\n                    <a routerLink='/pages/talk-about-it'>\n                        <figure>\n                            <img src=\"assets/images/TalkAboutIt!.jpg\" alt=\"Step 1\"/>\n                        </figure>\n                        <h4>Talk About It! </h4>\n                        <p>Talk About It! enhances communication between teens and adults through fun and familiar card and dice games with a twist! Eight decks of topic-specific playing cards, each with 54 unique, thought-provoking questions, and 2 dice allow teens and adults to explore and talk about important topics while playing any of the 12 included games. Giving your teen the space to talk about these topics will help your teen know how lovable, valuable, and capable he/she is. The instructions are simple, the games are fun and entertaining, and every game brings you closer!</p>\n                     </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"banner-text\">\n    <div class=\"container\"> \n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h4>I Am LVC Vision</h4>   \n                <p>I Am LVC will empower you to know you are lovable, valuable, and capable. When you know this, you will treat yourself with love, kindness, compassion, and respect. You will make choices that honor you and those around you. You will know that others are also inherently lovable, valuable, and capable. You will treat others with the same love, kindness, compassion, and respect with which you treat yourself. You will empower others to know that they are lovable, valuable, and capable. We will continue to spread this knowledge until every person knows they are lovable, valuable, and capable and treats others in kind.</p>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"box-wrap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <div class=\"shadow-box\">\n                    <div class=\"img-wrap\">\n                        <img src=\"assets/images/womanrunner.jpg\" alt=\"\"/>\n                    </div>\n                    <div class=\"text-wrap\">\n                        <h4>I Am LVC Videos</h4>\n                        <p>Are you interested in hearing from others and learning how they overcame life’s hurdles to know they are lovable, valuable, and capable?</p>\n                        <a href=\"#/pages/videos\" class=\"blue-border\">Watch Here</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"shadow-box\">\n                    <div class=\"img-wrap\">\n                        <img src=\"assets/images/kidsuperheros.jpg\" alt=\"\"/>\n                    </div>\n                    <div class=\"text-wrap\">\n                        <h4>I Am LVC Story</h4>\n                        <p>Do you want to know why <br>we created I Am LVC?</p>\n                        <a href=\"#/pages/story\" class=\"blue-border\">Find Out Here</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"shadow-box\">\n                    <div class=\"img-wrap\">\n                        <img src=\"assets/images/girloutdoors.jpg\" alt=\"\"/>\n                    </div>\n                    <div class=\"text-wrap\">\n                        <h4>LVC Free Exercises</h4>\n                        <p>Begin your journey now to knowing you are lovable, valuable, and capable.</p>\n                        <a href=\"#/pages/free-exercise\" class=\"blue-border\">Download Now</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"banner-text\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h4>Lovable - Valuable - Capable</h4>   \n                <p><strong>Lovable</strong> - I am lovable. You are lovable. We are worthy of giving love to ourselves and others. We are worthy of receiving love from ourselves and others.</p>\n                <p><strong>Valuable</strong> - I am valuable. You are valuable. We have inherent worth and value.</p>\n                <p><strong>Capable</strong> - I am capable. You are capable. We have the ability to be and to do anything we want.</p>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"box-wrap testimonials\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>Testimonials</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-1\">\n                <div class=\"quote\"><i class=\"fa fa-quote-left\"></i></div>\n            </div>\n            <div class=\"col-sm-10\">\n                <div class=\"carousel slide\" id=\"fade-quote-carousel\" data-ride=\"carousel\" data-interval=30000>\n                    <!-- Carousel indicators -->\n                    <ol class=\"carousel-indicators\">\n                        <li data-target=\"#fade-quote-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n                        <li data-target=\"#fade-quote-carousel\" data-slide-to=\"1\"></li>\n                        <li data-target=\"#fade-quote-carousel\" data-slide-to=\"2\"></li>\n                    </ol>\n                    <!-- Carousel items -->\n                    <div class=\"carousel-inner\">\n                        <div class=\"item\">\n                            <div class=\"profile-circle\">\n                                <img src=\"assets/images/asian.jpg\" />\n                            </div>\n                            <blockquote>\n                                <p>\"I am so thankful for this course. I have finally learned to truly love myself.\"</p>\n                            </blockquote>     \n                        </div>\n                        <div class=\"item\">\n                            <div class=\"profile-circle\"><img src=\"assets/images/aa.jpg\" /></div>\n                            <blockquote>\n                                <p>\"I was really good at loving others, but I never felt that same love for myself. These exercises opened my eyes to a whole new way of seeing things. And now I can say that I really do love myself. Thank you!\"</p>\n                            </blockquote>\n                        </div>\n                        <div class=\"active item\">\n                            <div class=\"profile-circle\"><img src=\"assets/images/man.jpg\" /></div>\n                            <blockquote>\n                                <p>\"This course gave me a lot to think about. I was going through my life and thought things were mostly fine. I took the course because I wanted to feel more capable. I was astounded at how every exercise chosen for me brought me new perspectives. Not only do I now know I am capable, but I feel happier than I have in years.\" </p>\n                            </blockquote>\n                        </div>                                \n                    </div>\n        </div>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"quote\"><i class=\"fa fa-quote-right\"></i></div>\n            </div>\n        </div>\n    </div>\n</div>"

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
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
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