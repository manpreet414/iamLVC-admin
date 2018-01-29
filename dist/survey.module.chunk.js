webpackJsonp(["survey.module"],{

/***/ "../../../../../src/app/survey/survey-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_component__ = __webpack_require__("../../../../../src/app/survey/survey.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__survey_component__["a" /* SurveyComponent */]
    }
];
var SurveyRoutingModule = /** @class */ (function () {
    function SurveyRoutingModule() {
    }
    SurveyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], SurveyRoutingModule);
    return SurveyRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/survey/survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/survey/survey.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sub-header></app-sub-header>\n<div class=\"box-wrap survey-wrap\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <h3>Survey to know you</h3>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-8 col-sm-offset-2\">\n                        <h5>You are just a step behind for a life chnaging experience. Help us to know you better</h5>\n                        <div class=\"progress\">\n                            <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:16.66666666666667%\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-8 col-sm-offset-2\">\n                        <div class=\"quest-wrap\">\n                            <h5>Question 1:-   On scale of 1-10, how much do you love yourself?</h5>\n                            <div class=\"row\">\n                                <div class=\"col-sm-4 col-xs-6\">\n                                    <div>\n                                        <input type=\"radio\" id=\"radio01\" name=\"radio\" />\n                                        <label for=\"radio01\"><span></span>01</label>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4 col-xs-6\">\n                                    <div>\n                                        <input type=\"radio\" id=\"radio02\" name=\"radio\" />\n                                        <label for=\"radio02\"><span></span>02</label>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4 col-xs-6\">\n                                    <div>\n                                        <input type=\"radio\" id=\"radio03\" name=\"radio\" />\n                                        <label for=\"radio03\"><span></span>03</label>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4 col-xs-6\">\n                                    <div>\n                                        <input type=\"radio\" id=\"radio04\" name=\"radio\" />\n                                        <label for=\"radio04\"><span></span>04</label>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4 col-xs-6\">\n                                    <div>\n                                        <input type=\"radio\" id=\"radio05\" name=\"radio\" />\n                                        <label for=\"radio05\"><span></span>05</label>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4 col-xs-6\">\n                                    <div>\n                                        <input type=\"radio\" id=\"radio06\" name=\"radio\" />\n                                        <label for=\"radio06\"><span></span>06</label>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4 col-xs-6\">\n                                    <div>\n                                        <input type=\"radio\" id=\"radio07\" name=\"radio\" />\n                                        <label for=\"radio07\"><span></span>07</label>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4 col-xs-6\">\n                                    <div>\n                                        <input type=\"radio\" id=\"radio08\" name=\"radio\" />\n                                        <label for=\"radio08\"><span></span>08</label>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4 col-xs-6\">\n                                    <div>\n                                        <input type=\"radio\" id=\"radio09\" name=\"radio\" />\n                                        <label for=\"radio09\"><span></span>09</label>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4 col-xs-6\">\n                                    <div>\n                                        <input type=\"radio\" id=\"radio10\" name=\"radio\" />\n                                        <label for=\"radio10\"><span></span>10</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"text-center\">\n                            <input type=\"submit\" name=\"question-submit\" id=\"question-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"Next\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>"

/***/ }),

/***/ "../../../../../src/app/survey/survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyComponent; });
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

var SurveyComponent = /** @class */ (function () {
    function SurveyComponent() {
    }
    SurveyComponent.prototype.ngOnInit = function () {
    };
    SurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-survey',
            template: __webpack_require__("../../../../../src/app/survey/survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/survey/survey.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/survey/survey.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyModule", function() { return SurveyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_routing_module__ = __webpack_require__("../../../../../src/app/survey/survey-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_component__ = __webpack_require__("../../../../../src/app/survey/survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SurveyModule = /** @class */ (function () {
    function SurveyModule() {
    }
    SurveyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__survey_routing_module__["a" /* SurveyRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__survey_component__["a" /* SurveyComponent */]]
        })
    ], SurveyModule);
    return SurveyModule;
}());



/***/ })

});
//# sourceMappingURL=survey.module.chunk.js.map