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

module.exports = "<div class=\"box-wrap survey-wrap\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <h3>Contact Us</h3>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-8 col-sm-offset-2\">\n                    <div class=\"quest-wrap\">\n                        <form role=\"form\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control\" id=\"fname\" name=\"fname\" placeholder=\"Name\" required>\n                                    </div>\n                                </div>\n                                \n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" required>\n                                    </div>\n                                </div>\n                                \n                            </div>\n                            <div class=\"row\">\n                                \n                                <div class=\"col-sm-12\">\n                                    <div class=\"form-group\">\n                                        <textarea class=\"form-control\" type=\"textarea\" id=\"message\" placeholder=\"Message\" maxlength=\"140\" rows=\"7\"></textarea>                                                        \n                                    </div>\n                                </div>\n                                <div class=\"col-sm-12\">\n                                    <div class=\"text-center\">\n                                        <input type=\"submit\" name=\"question-submit\" id=\"question-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"Submit\">\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

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

/***/ "../../../../../src/app/pages/corporation/corporation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/corporation/corporation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-wrap-full\">\n    <img src=\"assets/images/corporations.jpg\" alt=\"\" />\n</div>\n<div class=\"box-wrap online-course corporation\">\n    \n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>Online Course for Corporations/Nonprofits</h3>\n            </div>\n            <div class=\"col-sm-12 text-center\" >\n                <p>When your employees know they are lovable, valuable, and capable and treat themselves and others in this way, you will see their workplace relationships improve, their problem-solving skills expand, and their productivity increase.</p>\n                <p>If you would like to receive additional information on purchasing the online course in bulk for your employees, please complete the below contact form and we will be in touch within 2 business days.</p>\n            </div>\n            \n        </div>\n    \n        <div class=\"row\">\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"quest-wrap\">\n                    <form role=\"form\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                             <label for=\"fname\">First Name</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"fname\" name=\"fname\" placeholder=\"First Name\" required=\"\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                            <label for=\"lname\">Last Name</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"lname\" name=\"lname\" placeholder=\"Last Name\" required=\"\">\n                                        </div>                                        \n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                            <label for=\"company\">Company Name</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"company\" name=\"company\" placeholder=\"Company Name\" required=\"\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                            <label for=\"email\">Email</label>                                            \n                                            <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" required=\"\">\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                            <label for=\"phone\">Phone Number</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"phone\" name=\"phone\" placeholder=\"Phone Number\" required=\"\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                            \n                                            <label for=\"employees\">Number of employees to access personalized courses</label>\n                                                <select class=\"form-control\" id=\"employees\">\n                                                <option>1-45</option>\n                                                <option>50-99</option>\n                                                <option>100-499</option>\n                                                <option>500-999</option>\n                                                <option>1,000-2,499</option>\n                                                <option>2,500-4,999</option>\n                                                <option>5,000-9,999</option>\n                                                <option>10,000-14,999</option>\n                                                <option>15,000-19,999</option>\n                                                <option>20,000+</option>\n                                                </select>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    \n                                    <div class=\"col-sm-12\">\n                                        <div class=\"form-group\">\n                                             <label for=\"message\">Is there anything else you would like us to know?</label>\n                                            <textarea class=\"form-control\" type=\"textarea\" id=\"message\" placeholder=\"Message\" maxlength=\"140\" rows=\"7\"></textarea>                                                        \n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"text-center\">\n                                            <input type=\"submit\" name=\"question-submit\" id=\"question-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"Submit\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n                </div>\n            </div>\n           \n            \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/corporation/corporation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorporationComponent; });
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

var CorporationComponent = /** @class */ (function () {
    function CorporationComponent() {
    }
    CorporationComponent.prototype.ngOnInit = function () {
    };
    CorporationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-corporation',
            template: __webpack_require__("../../../../../src/app/pages/corporation/corporation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/corporation/corporation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CorporationComponent);
    return CorporationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/courseinstructions/courseinstructions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/courseinstructions/courseinstructions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box-wrap survey-wrap story editprofile\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>Course Instructions</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <p>This program works best when you do the exercises in the order provided and when you do one exercise every 2-3 days, preferably in the morning. The number of days you choose to have between each exercise will depend on how much you would like to practice implementing what you just learned before moving to the next exercise. Most exercises will take 10-20 minutes to complete, and then you will practice implementing them throughout the next few days.</p>\n                <p>In the list of the exercises that were chosen for you, it also lists the approximate amount of time each exercise will take to complete.</p>\n                <p>To set yourself up for success, we suggest that you plan out right now when you will do each exercise and that you block out the time in your calendar for the exercises each day. For example, if exercise one will take 20 minutes, you may choose to block out 6-6:20am for exercise 1 tomorrow. If exercise 2 will take 10 minutes, you may choose to block out 7-7:10am for exercise 2 a few days from now.</p>\n                <p>For as long as you choose to have access to the course, you can always go back and review past exercises.</p>\n                <p>Each time you log into the course and each time you complete an exercise, you will take a short survey. This will allow you to track the progress you are making as you proceed through the exercises.</p>\n            </div>\n            <div class=\"col-sm-12 text-center\">\n                <input type=\"submit\" [routerLink]=\"['/survey/main-survey']\" name=\"edit-submit\" id=\"edit-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"Proceed to my course!\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/courseinstructions/courseinstructions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseinstructionsComponent; });
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

var CourseinstructionsComponent = /** @class */ (function () {
    function CourseinstructionsComponent() {
    }
    CourseinstructionsComponent.prototype.ngOnInit = function () {
    };
    CourseinstructionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-courseinstructions',
            template: __webpack_require__("../../../../../src/app/pages/courseinstructions/courseinstructions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/courseinstructions/courseinstructions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CourseinstructionsComponent);
    return CourseinstructionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/free-exercise/free-exercise.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/free-exercise/free-exercise.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-wrap\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-sm-6\">\n              <div class=\"banner-text-wrap\">\n                  <h1 >\n                    <span class=\"skyblue-text\">YOU ARE</span><br>\n                    LOVEABLE<br>\n                    VALUABLE<br>\n                    CAPABLE<br>\n                  </h1>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"box-wrap online-course\">\n  <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h3>Free LVC Exercises</h3>\n        </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"freeExercise\" class=\"free-exercise\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        <h3 class=\"wow slideInTop\" data-wow-duration=\"1s\">Do you want to truly love yourself?</h3>\n        <h3 class=\"wow slideInLeft\" data-wow-delay=\"2s\">Do you want to believe you are valuable?</h3>\n        <h3 class=\"wow slideInRight\" data-wow-delay=\"3s\">Do you want to know you are capable?</h3>\n        <h3 class=\"wow bounceInUp\" data-wow-delay=\"4s\">YOU ARE AND YOU ARE IN THE RIGHT PLACE!</h3>\n      </div>\n    </div>\n  \n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center\" >\n        <p>I Am LVC empowers people to know they are lovable, valuable, and capable and to treat themselves and others as lovable, valuable, and capable.</p>\n      </div>    \n      <div class=\"col-sm-12\">\n        <p>Included in this packet are 5 exercises to begin you on your path to truly knowing you are lovable, valuable, and capable.</p>\n      </div>\n      <div class=\"col-sm-12\">\n          <a href=\"\" class=\"form-control btn blue-border\" type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\">Download Now!</a>\n      </div>\n      \n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"myModal\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n    \n          <!-- Modal Header -->\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Enter Email</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n    \n          <!-- Modal body -->\n          <div class=\"modal-body\">\n            <input type=\"email\" class=\"form-control\" placeholder=\"Enter Your Email\"/>\n          </div>\n    \n          <!-- Modal footer -->\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\" btn blue-border\" data-dismiss=\"modal\" (click)=\"emailSubmit()\">Submit</button>\n          </div>\n    \n        </div>\n      </div>\n    </div>\n</div>\n<div *ngIf=\"!freeExercise\" class=\"free-exercise\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        <h3>Your free LVC exercises have been emailed to you!</h3>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/free-exercise/free-exercise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreeExerciseComponent; });
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

var FreeExerciseComponent = /** @class */ (function () {
    function FreeExerciseComponent() {
        this.freeExercise = true;
    }
    FreeExerciseComponent.prototype.ngOnInit = function () {
    };
    FreeExerciseComponent.prototype.emailSubmit = function () {
        this.freeExercise = false;
    };
    FreeExerciseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-free-exercise',
            template: __webpack_require__("../../../../../src/app/pages/free-exercise/free-exercise.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/free-exercise/free-exercise.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FreeExerciseComponent);
    return FreeExerciseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/group-coaching/group-coaching.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/group-coaching/group-coaching.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"banner-wrap-full\">\n    <img src=\"assets/images/Groupcoaching.jpg\" alt=\"\" />\n</div>\n<div class=\"box-wrap online-course\">\n    \n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>Group Coaching</h3>\n            </div>\n            <div class=\"col-sm-12 text-center\" >\n                <p>The group coaching program is currently being developed.</p>\n                <p>If you are interested in group coaching and would like to be notified when the program is launching, please enter your contact information below.</p>\n            </div>\n            \n        </div>\n    \n        <div class=\"row\">\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"quest-wrap\">\n                    <form role=\"form\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"fname\" name=\"fname\" placeholder=\"First Name\" required=\"\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"lname\" name=\"lname\" placeholder=\"Last Name\" required=\"\">\n                                </div>                                        \n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" required=\"\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"Address\" required=\"\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            \n                            <div class=\"col-sm-12\">\n                                <div class=\"form-group\">\n                                    <textarea class=\"form-control\" type=\"textarea\" id=\"message\" placeholder=\"Message\" maxlength=\"140\" rows=\"7\"></textarea>                                                        \n                                </div>\n                            </div>\n                            <div class=\"col-sm-12\">\n                                <div class=\"text-center\">\n                                    <input type=\"submit\" name=\"question-submit\" id=\"question-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"Submit\">\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n           \n            \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/group-coaching/group-coaching.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupCoachingComponent; });
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

var GroupCoachingComponent = /** @class */ (function () {
    function GroupCoachingComponent() {
    }
    GroupCoachingComponent.prototype.ngOnInit = function () {
    };
    GroupCoachingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-group-coaching',
            template: __webpack_require__("../../../../../src/app/pages/group-coaching/group-coaching.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/group-coaching/group-coaching.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GroupCoachingComponent);
    return GroupCoachingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/online-course/online-course.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/online-course/online-course.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"box-wrap online-course\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>Online Course</h3>\n            </div>\n            <div class=\"col-sm-12 text-center\" >\n                <p>The I Am LVC online course will empower you to know you are lovable, valuable, and capable and to treat yourself and others as lovable, valuable, and capable.</p>\n                \n            </div>\n            <div class=\"col-sm-12\">\n                <a href=\"\" class=\"form-control btn blue-border\">Start Now!</a>\n            </div>\n        </div>\n    \n        <div class=\"row\">\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"quest-wrap\">\n                    <figure>\n                        <img src=\"assets/images/onlinecourse.jpg\" alt=\"\" />\n                    </figure>\n                </div>\n            </div>\n            <div class=\"col-sm-12\">\n               <h4>How Does It Works?</h4>\n               <p>After you register, you will be taken first to a brief survey about how lovable, valuable, and capable (LVC) you currently feel and how LVC you want to feel. Then, you will be taken to a more detailed survey, where you will, through checking yes or no, identify the areas that have caused you not to feel LVC and those areas where you currently feel LVC. Based on the areas you select, your personalized course will be created for you.</p>\n               <p>Next, your course list will populate, and you will be given instructions on how to proceed. Depending on your survey selection, your course will have between 30-55 exercises. The program works best when you do the exercises in the order provided and when you complete one exercise every 2-3 days, preferably in the morning. Most exercises will take 10-20 minutes to complete, and then you will practice implementing what you have learned throughout the next few days.</p>\n               <p>Each time you log in to the course and each time you complete an exercise, you will take a short survey about how LVC you currently feel. This will help you to gage your progress and the effectiveness of each exercise.</p>\n               \n            </div>\n            <div class=\"col-sm-12\">\n               <h4>What Is The Investment?</h4>\n               <p><b>Time : </b>Approximately 10-20 minutes every 2-3 days (some exercises will be shorter and some will be longer). The first day, when you are completing all the surveys and the introductory information, it will take 30-45 minutes.\n</p>\n                <p><b>Money : </b>$63/month. You may choose to have access to the course for as many or as few months as you would like. Your credit card will be billed each month until you cancel your subscription. When you cancel your subscription, your course information will be saved in the system and available to you if you choose to come back at a later time. Your subscription will remain active until the end of the pre-paid month.\n                </p>\n            </div>\n            <div class=\"col-sm-12\">\n                <a href=\"\" class=\"form-control btn blue-border\">Start Now!</a>\n            </div>\n            <div class=\"col-sm-12\"><p><b>You are worth it!</b></p></div>\n            \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/online-course/online-course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineCourseComponent; });
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

var OnlineCourseComponent = /** @class */ (function () {
    function OnlineCourseComponent() {
    }
    OnlineCourseComponent.prototype.ngOnInit = function () {
    };
    OnlineCourseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-online-course',
            template: __webpack_require__("../../../../../src/app/pages/online-course/online-course.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/online-course/online-course.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OnlineCourseComponent);
    return OnlineCourseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_activate_route_guard__ = __webpack_require__("../../../../../src/app/auth/activate-route-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contactus_contactus_component__ = __webpack_require__("../../../../../src/app/pages/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__story_story_component__ = __webpack_require__("../../../../../src/app/pages/story/story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__videos_videos_component__ = __webpack_require__("../../../../../src/app/pages/videos/videos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__courseinstructions_courseinstructions_component__ = __webpack_require__("../../../../../src/app/pages/courseinstructions/courseinstructions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__talk_about_it_talk_about_it_component__ = __webpack_require__("../../../../../src/app/pages/talk-about-it/talk-about-it.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__group_coaching_group_coaching_component__ = __webpack_require__("../../../../../src/app/pages/group-coaching/group-coaching.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__online_course_online_course_component__ = __webpack_require__("../../../../../src/app/pages/online-course/online-course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__corporation_corporation_component__ = __webpack_require__("../../../../../src/app/pages/corporation/corporation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__your_courses_your_courses_component__ = __webpack_require__("../../../../../src/app/pages/your-courses/your-courses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__free_exercise_free_exercise_component__ = __webpack_require__("../../../../../src/app/pages/free-exercise/free-exercise.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: 'contactus',
        component: __WEBPACK_IMPORTED_MODULE_3__contactus_contactus_component__["a" /* ContactusComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_activate_route_guard__["a" /* ActiveRouteGuard */]]
    },
    {
        path: 'story',
        component: __WEBPACK_IMPORTED_MODULE_4__story_story_component__["a" /* StoryComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_activate_route_guard__["a" /* ActiveRouteGuard */]]
    },
    {
        path: 'videos',
        component: __WEBPACK_IMPORTED_MODULE_5__videos_videos_component__["a" /* VideosComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_activate_route_guard__["a" /* ActiveRouteGuard */]]
    },
    {
        path: 'courseinstructions',
        component: __WEBPACK_IMPORTED_MODULE_6__courseinstructions_courseinstructions_component__["a" /* CourseinstructionsComponent */]
    },
    {
        path: 'talk-about-it',
        component: __WEBPACK_IMPORTED_MODULE_7__talk_about_it_talk_about_it_component__["a" /* TalkAboutItComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_activate_route_guard__["a" /* ActiveRouteGuard */]]
    },
    {
        path: 'group-coaching',
        component: __WEBPACK_IMPORTED_MODULE_8__group_coaching_group_coaching_component__["a" /* GroupCoachingComponent */]
    },
    {
        path: 'online-course',
        component: __WEBPACK_IMPORTED_MODULE_9__online_course_online_course_component__["a" /* OnlineCourseComponent */]
    },
    {
        path: 'corporation',
        component: __WEBPACK_IMPORTED_MODULE_10__corporation_corporation_component__["a" /* CorporationComponent */]
    },
    {
        path: 'your-course',
        component: __WEBPACK_IMPORTED_MODULE_11__your_courses_your_courses_component__["a" /* YourCoursesComponent */]
    },
    {
        path: 'free-exercise',
        component: __WEBPACK_IMPORTED_MODULE_12__free_exercise_free_exercise_component__["a" /* FreeExerciseComponent */]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__courseinstructions_courseinstructions_component__ = __webpack_require__("../../../../../src/app/pages/courseinstructions/courseinstructions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__talk_about_it_talk_about_it_component__ = __webpack_require__("../../../../../src/app/pages/talk-about-it/talk-about-it.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__group_coaching_group_coaching_component__ = __webpack_require__("../../../../../src/app/pages/group-coaching/group-coaching.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__online_course_online_course_component__ = __webpack_require__("../../../../../src/app/pages/online-course/online-course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__corporation_corporation_component__ = __webpack_require__("../../../../../src/app/pages/corporation/corporation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__your_courses_your_courses_component__ = __webpack_require__("../../../../../src/app/pages/your-courses/your-courses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__free_exercise_free_exercise_component__ = __webpack_require__("../../../../../src/app/pages/free-exercise/free-exercise.component.ts");
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
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__contactus_contactus_component__["a" /* ContactusComponent */],
                __WEBPACK_IMPORTED_MODULE_5__story_story_component__["a" /* StoryComponent */],
                __WEBPACK_IMPORTED_MODULE_6__videos_videos_component__["a" /* VideosComponent */],
                __WEBPACK_IMPORTED_MODULE_7__courseinstructions_courseinstructions_component__["a" /* CourseinstructionsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__talk_about_it_talk_about_it_component__["a" /* TalkAboutItComponent */],
                __WEBPACK_IMPORTED_MODULE_9__group_coaching_group_coaching_component__["a" /* GroupCoachingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__online_course_online_course_component__["a" /* OnlineCourseComponent */],
                __WEBPACK_IMPORTED_MODULE_11__corporation_corporation_component__["a" /* CorporationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__your_courses_your_courses_component__["a" /* YourCoursesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__free_exercise_free_exercise_component__["a" /* FreeExerciseComponent */]
            ]
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

module.exports = "<div class=\"box-wrap survey-wrap story\">\n\t<div class=\"container\">\n\t    <div class=\"row\">\n\t        <div class=\"col-sm-12\">\n\t            <h3>I am LVC Story</h3>\n\t        </div>\n\t    </div>\n\t    <div class=\"row\">\n\t        <div class=\"col-sm-4 col-sm-offset-4\">\n\t            <div class=\"quest-wrap\">\n\t                <figure>\n\t                    <img src=\"assets/images/Lindsay.jpg\" alt=\"\" />\n\t                </figure>\n\t            </div>\n\t        </div>\n\t        <div class=\"col-sm-12\">\n\t            <p>Hi! My name is Lindsay Smith and I am a Licensed Clinical Social Worker and the founder of I Am LVC. I would like to share a little bit about why I created I Am LVC.</p>\n\t            <p>In 6th grade I had 2 best friends and the 3 of us spent every moment outside of class together. We would walk the halls together, eat lunch together, and hang out together after school and on the weekends. We were inseparable. I felt so full of love and life when I was with them. One day we were on break in between 2nd and 3rd period and I went to the lawn to hang out with them, as we did every day. Only that day, they told me that they didn’t want me to be in their group anymore. I was crushed. It felt like my world was crumbling. I had belonged. I was part of something. I had felt loved and included and worthy. All of that came crashing down in an instant. I was sobbing and was absolutely overwhelmed with feelings I didn’t understand. I couldn’t pull myself together. I had never felt so unloved and so unworthy.In 6th grade I had 2 best friends and the 3 of us spent every moment outside of class together. We would walk the halls together, eat lunch together, and hang out together after school and on the weekends. We were inseparable. I felt so full of love and life when I was with them. One day we were on break in between 2nd and 3rd period and I went to the lawn to hang out with them, as we did every day. Only that day, they told me that they didn’t want me to be in their group anymore. I was crushed. It felt like my world was crumbling. I had belonged. I was part of something. I had felt loved and included and worthy. All of that came crashing down in an instant. I was sobbing and was absolutely overwhelmed with feelings I didn’t understand. I couldn’t pull myself together.</p>\n\t            <p>Although I was not conscious of it until I was an adult, this one moment from 6th grade affected everything in my life from that point forward. I carried these feelings of being unlovable and unworthy into every friendship, every relationship, every action, and every choice from that day forward – I just didn’t know it. These feelings were locked so deep within me that I was unconsciously living from a place of unworthiness. I know it may seem crazy to you that this one thing impacted my life so deeply, but the truth is that many of us have single (or multiple) incidents that greatly affect how we feel about ourselves and thereby how we treat ourselves, how we treat others, and how we live our lives. Once I came to really understand this, then I was able to focus on learning how to love myself, to know my value, and to know that I am capable.</p>\n\t            <p>I created I Am LVC to empower you to know you are lovable, valuable, and capable and to treat ourselves and others as lovable, valuable, and capable.</p>\n\t        </div>\n\t    </div>\n\t</div>\n</div>"

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

/***/ "../../../../../src/app/pages/talk-about-it/talk-about-it.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/talk-about-it/talk-about-it.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box-wrap online-course\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>TALK ABOUT IT!<sup>TM</sup></h3>\n                <h4>The ultimate communication game!</h4>\n                <h4>12 fun games that bring you closer</h4>\n            </div>\n            <div class=\"col-sm-4 col-sm-offset-4\">\n                <div class=\"quest-wrap\">\n                <img src=\"assets/images/TalkAboutIt!.jpg\" alt=\"\" /></div>\n            </div>\n            <div class=\"col-sm-12 text-center\" >\n                <p>Would you like the teens in your life to open up to you more?\nThe new card and dice game, Talk About It!, helps parents, therapists, educators, and others build strong relationships with teens in a fun, simple, and low-pressure way!\n</p>\n                \n            </div>\n            <div class=\"col-sm-12\">\n                <a href=\"http://talk-about-it9.mybigcommerce.com/talk-about-it-bringing-teens-families-closer-12-fun-games-in-1-box/\" class=\"form-control btn blue-border\">Get Talk About It! </a>\n            </div>\n            <div class=\"col-sm-12\">\n                <p>With 12 games in one, Talk About It! can be used during family game nights, at the dinner table, in therapy sessions, classrooms, group meetings, and more. Eight topic decks and two dice will get everyone engaged in a game of their choice while opening the door to communication. Topics include Icebreakers, Values, Family, Friendships, Self-Esteem, Stress, Feelings, and Situations. Use one topic deck today to play Go Fish and a different topic deck tomorrow to play the dice game Knock Out.\n</p>\n            </div>\n            <div class=\"col-sm-12\">\n                <img src=\"assets/images/Cards.png\" alt=\"\" />\n            </div>\n            <div class=\"col-sm-12\">\n                <a href=\"http://talk-about-it9.mybigcommerce.com/talk-about-it-bringing-teens-families-closer-12-fun-games-in-1-box/\" class=\"form-control btn blue-border\">Get Talk About It! </a>\n            </div>\n        </div>\n    \n        </div>\n    </div>\n        <div class=\"box-wrap testimonials talk-testimonial\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <h4>What are people saying about Talk About It?<sup>TM</sup></h4>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-1\">\n                        <div class=\"quote\"><i class=\"fa fa-quote-left\"></i></div>\n                    </div>\n                    <div class=\"col-sm-10\">\n                        <div class=\"carousel slide\" id=\"fade-quote-carousel\" data-ride=\"carousel\" data-interval=10000>\n                            <!-- Carousel indicators -->\n                            <ol class=\"carousel-indicators\">\n                                <li data-target=\"#fade-quote-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n                                <li data-target=\"#fade-quote-carousel\" data-slide-to=\"1\"></li>\n                                <li data-target=\"#fade-quote-carousel\" data-slide-to=\"2\"></li>\n                                <li data-target=\"#fade-quote-carousel\" data-slide-to=\"3\"></li>\n                                <li data-target=\"#fade-quote-carousel\" data-slide-to=\"4\"></li>\n                                <li data-target=\"#fade-quote-carousel\" data-slide-to=\"5\"></li>\n                                <li data-target=\"#fade-quote-carousel\" data-slide-to=\"6\"></li>\n                                <li data-target=\"#fade-quote-carousel\" data-slide-to=\"7\"></li>\n                                <li data-target=\"#fade-quote-carousel\" data-slide-to=\"8\"></li>\n                            </ol>\n                            <!-- Carousel items -->\n                            <div class=\"carousel-inner\">\n                                <div class=\"item\">                                            \n                                    <blockquote>\n                                        <p>I can’t tell you how much fun we had. Learned so much too!!<br>\n                                            This puts a whole new spin on “game night”!<br>\n                                            I will highly recommend this game to every parent with teens or preteens or even college!<br>\n                                            Really any age is good!<br>\n                                            I loved it!<br>\n                                            Thank you!                                                    </p>\n                                            <p><em>— Raquel Alderman, Mother of a 16-year-old, author of <a href=\"RaisingTeensBlog.com\">RaisingTeensBlog.com</a></em></p>\n                                    </blockquote>\t    \n                                </div>\n                                <div class=\"item\">                                           \n                                    <blockquote>\n                                        <p>I can’t think of a better way to have meaningful interactions between teens and adults in their lives than by playing Talk About It! I am really looking forward to using this resource on my middle school and high school campus.</p>\n                                        <p><em>— Melissa Mayes, Head of School at Fusion Academy, Los Gatos, California</em></p>\n                                    </blockquote>\n                                </div>\n                                <div class=\"active item\">                                            \n                                    <blockquote>\n                                        <p>I’m not usually that into games, but this was really fun. It made it easy to talk about things I wouldn’t normally bring up.</p>\n                                        <p><em>— 15-year-old male</em></p>\n                                    </blockquote>\n                                </div>    \n                                <div class=\"item\">                                            \n                                    <blockquote>\n                                        <p>As a mother of 5 children, I struggle to keep my children engaged in a leading conversation. Most times I feel second to social media. This game is perfect. It is fun, friendly, and brings out the elephant in the room without awkwardness.</p>\n                                        <p><em>— Tina Alzaga, Eagle, Idaho</em></p>\n                                    </blockquote>\n                                </div>      \n                                <div class=\"item\">                                           \n                                    <blockquote>\n                                        <p>I really enjoyed playing this game. The questions were thought provoking and it was a good conversation starter. I also liked that it changed pace quickly</p>\n                                        <p><em>— 18-year-old female</em></p>\n                                    </blockquote>\n                                </div>\n                                <div class=\"item\">                                           \n                                    <blockquote>\n                                        <p>The game was a great communication tool. My daughter felt like we were playing a game, while I was learning about her.</p>\n                                        <p><em>— Stacy Brooks, mother of 3, San Jose, California</em></p>\n                                    </blockquote>\n                                </div>\n                                <div class=\"item\">                                           \n                                    <blockquote>\n                                        <p>My teen clients love playing games, yet a lot of the games are outdated. Talk About It! gives us a refreshing way to connect with our clients and allows them to easily open up. I love that we can use it in therapy and my clients can also play it at home with their families</p>\n                                        <p><em>— Jassmen Berube, Marriage Family Therapist, Los Gatos, California</em></p>\n                                    </blockquote>\n                                </div>\n                                <div class=\"item\">                                           \n                                    <blockquote>\n                                        <p>I got to learn more about my mom. I like that we got to talk about things that we wouldn’t have otherwise talked about. This was fun!</p>\n                                        <p><em>— 14-year-old female</em></p>\n                                    </blockquote>\n                                </div>\n                                                    \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-1\">\n                        <div class=\"quote\"><i class=\"fa fa-quote-right\"></i></div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <p><small>(The names of those 18 and under are not revealed for confidentiality purposes.)</small></p>\n                    </div>\n                    <div class=\"col-sm-12\">\n                <a href=\"http://talk-about-it9.mybigcommerce.com/talk-about-it-bringing-teens-families-closer-12-fun-games-in-1-box/\" class=\"form-control btn blue-border\">Get Talk About It! </a>\n            </div>\n                </div>\n            </div>\n        </div>"

/***/ }),

/***/ "../../../../../src/app/pages/talk-about-it/talk-about-it.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkAboutItComponent; });
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

var TalkAboutItComponent = /** @class */ (function () {
    function TalkAboutItComponent() {
    }
    TalkAboutItComponent.prototype.ngOnInit = function () {
    };
    TalkAboutItComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-talk-about-it',
            template: __webpack_require__("../../../../../src/app/pages/talk-about-it/talk-about-it.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/talk-about-it/talk-about-it.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TalkAboutItComponent);
    return TalkAboutItComponent;
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



/***/ }),

/***/ "../../../../../src/app/pages/your-courses/your-courses.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/your-courses/your-courses.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box-wrap survey-wrap your-course\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <h3> Creating Your Course - Survey 1</h3>\n            </div>\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"quest-wrap\">\n                  <ul class=\"radio-custom\">\n                    <li class=\"row\">\n                        <div class=\"col-sm-9\">\n                          <h5><span>1. </span>I feel lonely</h5>\n                        </div>\n                        <div class=\"col-sm-3\">\n                          <div class=\"row\">\n                            <div class=\"col-xs-6\">\n                              <input type=\"radio\" id=\"radio1a\" name=\"radio\">\n                              <label for=\"radio1a\"><span></span>Yes</label>\n                            </div>\n                            <div class=\"col-xs-6\">\n                              <input type=\"radio\" id=\"radio1b\" name=\"radio\">\n                              <label for=\"radio1b\"><span></span>No</label>\n                            </div>\n                          </div>\n                        </div>\n                    </li>\n                    <li class=\"row\">\n                        <div class=\"col-sm-9\">\n                          <h5><span>2. </span>I do not make myself a priority</h5>\n                        </div>\n                        <div class=\"col-sm-3\">\n                          <div class=\"row\">\n                            <div class=\"col-xs-6\">\n                              <input type=\"radio\" id=\"radio2a\" name=\"radio\">\n                              <label for=\"radio2a\"><span></span>Yes</label>\n                            </div>\n                            <div class=\"col-xs-6\">\n                              <input type=\"radio\" id=\"radio2b\" name=\"radio\">\n                              <label for=\"radio2b\"><span></span>No</label>\n                            </div>\n                          </div>\n                        </div>\n                    </li>\n                    <li class=\"row\">\n                      <div class=\"col-sm-9\">\n                        <h5><span>3. </span>I feel guilt </h5>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div class=\"row\">\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio3a\" name=\"radio\">\n                            <label for=\"radio3a\"><span></span>Yes</label>\n                          </div>\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio3b\" name=\"radio\">\n                            <label for=\"radio3b\"><span></span>No</label>\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                    <li class=\"row\">\n                      <div class=\"col-sm-9\">\n                        <h5><span>4. </span>I feel like a bad person</h5>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div class=\"row\">\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio4a\" name=\"radio\">\n                            <label for=\"radio4a\"><span></span>Yes</label>\n                          </div>\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio4b\" name=\"radio\">\n                            <label for=\"radio4b\"><span></span>No</label>\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                    <li class=\"row\">\n                      <div class=\"col-sm-9\">\n                        <h5><span>5. </span>I worry about what others think about me</h5>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div class=\"row\">\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio5a\" name=\"radio\">\n                            <label for=\"radio5a\"><span></span>Yes</label>\n                          </div>\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio5b\" name=\"radio\">\n                            <label for=\"radio5b\"><span></span>No</label>\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                    <li class=\"row\">\n                      <div class=\"col-sm-9\">\n                        <h5><span>6. </span>I feel useless</h5>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div class=\"row\">\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio6a\" name=\"radio\">\n                            <label for=\"radio6a\"><span></span>Yes</label>\n                          </div>\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio6b\" name=\"radio\">\n                            <label for=\"radio6b\"><span></span>No</label>\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                    <li class=\"row\">\n                      <div class=\"col-sm-9\">\n                        <h5><span>7. </span>I feel like my unique qualities are not important</h5>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div class=\"row\">\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio7a\" name=\"radio\">\n                            <label for=\"radio01\"><span></span>Yes</label>\n                          </div>\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio7b\" name=\"radio\">\n                            <label for=\"radio7b\"><span></span>No</label>\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                    <li class=\"row\">\n                      <div class=\"col-sm-9\">\n                        <h5><span>8. </span>I do not see any good within myself</h5>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div class=\"row\">\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio8a\" name=\"radio\">\n                            <label for=\"radio01\"><span></span>Yes</label>\n                          </div>\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio8b\" name=\"radio\">\n                            <label for=\"radio8b\"><span></span>No</label>\n                          </div>\n                        </div>\n                      </div>\n                    </li>         \n                    <li class=\"row\">\n                      <div class=\"col-sm-9\">\n                        <h5><span>9. </span>I feel unworthy</h5>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div class=\"row\">\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio9a\" name=\"radio\">\n                            <label for=\"radio9a\"><span></span>Yes</label>\n                          </div>\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio9b\" name=\"radio\">\n                            <label for=\"radio9b\"><span></span>No</label>\n                          </div>\n                        </div>\n                      </div>\n                    </li>         \n                    <li class=\"row\">\n                      <div class=\"col-sm-9\">\n                        <h5><span>10. </span>I feel unaccepting of myself </h5>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div class=\"row\">\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio10a\" name=\"radio\">\n                            <label for=\"radio10a\"><span></span>Yes</label>\n                          </div>\n                          <div class=\"col-xs-6\">\n                            <input type=\"radio\" id=\"radio10b\" name=\"radio\">\n                            <label for=\"radio10b\"><span></span>No</label>\n                          </div>\n                        </div>\n                      </div>\n                    </li>           \n                                          \n                   </ul>\n                </div>\n                <div class=\"text-center\">\n                    <input type=\"submit\" name=\"question-submit\" id=\"question-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"Next\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/your-courses/your-courses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YourCoursesComponent; });
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

var YourCoursesComponent = /** @class */ (function () {
    function YourCoursesComponent() {
    }
    YourCoursesComponent.prototype.ngOnInit = function () {
    };
    YourCoursesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-your-courses',
            template: __webpack_require__("../../../../../src/app/pages/your-courses/your-courses.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/your-courses/your-courses.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], YourCoursesComponent);
    return YourCoursesComponent;
}());



/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map