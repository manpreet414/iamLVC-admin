webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/contactus/contactus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/contactus/contactus.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box-wrap survey-wrap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>Contact Us</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"quest-wrap\">\n                    <form role=\"form\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"fname\" name=\"fname\" placeholder=\"First Name\" required>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"lname\" name=\"lname\" placeholder=\"Last Name\" required>\n                                </div>                                        \n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" required>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"mobile\" name=\"mobile\" placeholder=\"Mobile Number\" required>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"Address\" required>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-12\">\n                                <div class=\"form-group\">\n                                    <textarea class=\"form-control\" type=\"textarea\" id=\"message\" placeholder=\"Message\" maxlength=\"140\" rows=\"7\"></textarea>                                                        \n                                </div>\n                            </div>\n                            <div class=\"col-sm-12\">\n                                <div class=\"text-center\">\n                                    <input type=\"submit\" name=\"question-submit\" id=\"question-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"Submit\">\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/contactus/contactus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
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

var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__("../../../../../src/app/pages/contactus/contactus.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactus_contactus_component__ = __webpack_require__("../../../../../src/app/pages/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__story_story_component__ = __webpack_require__("../../../../../src/app/pages/story/story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__videos_videos_component__ = __webpack_require__("../../../../../src/app/pages/videos/videos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'contactus',
        component: __WEBPACK_IMPORTED_MODULE_2__contactus_contactus_component__["a" /* ContactusComponent */]
    },
    {
        path: 'story',
        component: __WEBPACK_IMPORTED_MODULE_3__story_story_component__["a" /* StoryComponent */]
    },
    {
        path: 'videos',
        component: __WEBPACK_IMPORTED_MODULE_4__videos_videos_component__["a" /* VideosComponent */]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__ = __webpack_require__("../../../../../src/app/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contactus_contactus_component__ = __webpack_require__("../../../../../src/app/pages/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__story_story_component__ = __webpack_require__("../../../../../src/app/pages/story/story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__videos_videos_component__ = __webpack_require__("../../../../../src/app/pages/videos/videos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__["a" /* PagesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__contactus_contactus_component__["a" /* ContactusComponent */], __WEBPACK_IMPORTED_MODULE_5__story_story_component__["a" /* StoryComponent */], __WEBPACK_IMPORTED_MODULE_6__videos_videos_component__["a" /* VideosComponent */]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/story/story.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/story/story.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box-wrap survey-wrap story\">\n\t<div class=\"container\">\n\t    <div class=\"row\">\n\t        <div class=\"col-sm-12\">\n\t            <h3>I am LVC Story</h3>\n\t        </div>\n\t    </div>\n\t    <div class=\"row\">\n\t        <div class=\"col-sm-4 col-sm-offset-4\">\n\t            <div class=\"quest-wrap\">\n\t                <figure>\n\t                    <img src=\"assets/images/Lindsay.jpg\" alt=\"\" />\n\t                </figure>\n\t            </div>\n\t        </div>\n\t        <div class=\"col-sm-12\">\n\t            <p>Hi! My name is Lindsay Smith and I am a Licensed Clinical Social Worker and the founder of I Am LVC. I would like to share a little bit about why I created I Am LVC.</p>\n\t            <p>In 6th grade I had 2 best friends and the 3 of us spent every moment outside of class together. We would walk the halls together, eat lunch together, and hang out together after school and on the weekends. We were inseparable. I felt so full of love and life when I was with them. One day we were on break in between 2nd and 3rd period and I went to the lawn to hang out with them, as we did every day. Only that day, they told me that they didn’t want me to be in their group anymore. I was crushed. It felt like my world was crumbling. I had belonged. I was part of something. I had felt loved and included and worthy. All of that came crashing down in an instant. I was sobbing and was absolutely overwhelmed with feelings I didn’t understand. I couldn’t pull myself together. I had never felt so unloved and so unworthy.In 6th grade I had 2 best friends and the 3 of us spent every moment outside of class together. We would walk the halls together, eat lunch together, and hang out together after school and on the weekends. We were inseparable. I felt so full of love and life when I was with them. One day we were on break in between 2nd and 3rd period and I went to the lawn to hang out with them, as we did every day. Only that day, they told me that they didn’t want me to be in their group anymore. I was crushed. It felt like my world was crumbling. I had belonged. I was part of something. I had felt loved and included and worthy. All of that came crashing down in an instant. I was sobbing and was absolutely overwhelmed with feelings I didn’t understand. I couldn’t pull myself together. I had never felt so unloved and so unworthy.</p>\n\t            <p>Although I was not conscious of it until I was an adult, this one moment from 6th grade affected everything in my life from that point forward. I carried these feelings of being unlovable and unworthy into every friendship, every relationship, every action, and every choice from that day forward – I just didn’t know it. These feelings were locked so deep within me that I was unconsciously living from a place of unworthiness. I know it may seem crazy to you that this one thing impacted my life so deeply, but the truth is that many of us have single (or multiple) incidents that greatly affect how we feel about ourselves and thereby how we treat ourselves, how we treat others, and how we live our lives. Once I came to really understand this, then I was able to focus on learning how to love myself, to know my value, and to know that I am capable.</p>\n\t            <p>I created I Am LVC to empower you to know you are lovable, valuable, and capable and to treat ourselves and others as lovable, valuable, and capable.</p>\n\t        </div>\n\t    </div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/story/story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryComponent; });
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

var StoryComponent = /** @class */ (function () {
    function StoryComponent() {
    }
    StoryComponent.prototype.ngOnInit = function () {
    };
    StoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-story',
            template: __webpack_require__("../../../../../src/app/pages/story/story.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/story/story.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/videos/videos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/videos/videos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box-wrap survey-wrap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>I Am LVC Videos</h3>\n            </div>\n        </div>                \n    </div>\n    <ul class=\"team-list\">\n        <li>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"video-wrap\">\n                           <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/XJfjYGZIvQI\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <p>Lindsay shares about why she started I Am LVC and her struggle in coming to know that she is lovable.</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"video-wrap\">\n                            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/yQHv3j32Uyw\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <p>Cristina shares her journey of chasing love for many years before truly finding love within herself.</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"video-wrap\">\n                            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/m0iO3sMQdi4\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <p>Brendon shares his journey from job loss and bankruptcy to coming to know that he is valuable and capable.</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"video-wrap\">\n                            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/OSs3_g1MK4A\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <p>Lana talks about discovering her own love and worth through her process of accepting that she is a lesbian and coming out.</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"video-wrap\">\n                            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/bhgohxqdByM\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <p>Colleen shares her journey to self love after years of childhood sexual abuse.</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"video-wrap\">\n                            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/PB42Ppgj-n8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <p>Violeta talks about discovering her limiting beliefs, how she freed herself of them, and coming to know that she truly is valuable and capable.</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"video-wrap\">\n                            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/hlmFSXr7wH8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <p>Ariana talks about going from a place of never feeling good enough, even struggling with suicidal thoughts, to learning to how to really love herself.</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"video-wrap\">\n                            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/-B24ZdioZEQ\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <p>Donna shares her journey to self-love – starting in an abusive foster home, feeling invisible, learning to listen to the quiet voice within, and breaking the cycle of violence.</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"video-wrap\">\n                            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/0fYyXsc0qR0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <p>Radcliffe shares about knowing his value and about deep connections created through authenticity.</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"video-wrap\">\n                            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/r56i5c-SjXQ\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <p>Radcliffe shares about knowing his value and about deep connections created through authenticity.Amina shares about how she came to know that she is truly lovable.</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"video-wrap\">\n                            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/o1ms-2RRd_8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <p>Lana shares how she overcame fear and doubt to prove to herself how capable she really is.</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"video-wrap\">\n                            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/UDqetrRfTFM\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <p>Jamie shares her journey in discovering that she is more capable than she first believed.</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"video-wrap\">\n                            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/-aUwt3nOF2k\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <p>Rebecca describes how she learned to trust herself and believe in her capabilities.</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"video-wrap\">\n                            <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/eE-nphQwHgM\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <p>She talks about learning to listen to her body and to use self-care as a way to love and value herself.</p>\n                    </div>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/videos/videos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosComponent; });
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

var VideosComponent = /** @class */ (function () {
    function VideosComponent() {
    }
    VideosComponent.prototype.ngOnInit = function () {
    };
    VideosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__("../../../../../src/app/pages/videos/videos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/videos/videos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map