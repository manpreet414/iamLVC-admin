webpackJsonp(["survey.module"],{

/***/ "../../../../../src/app/survey/main-survey/main-survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/survey/main-survey/main-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box-wrap survey-wrap\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>Survey Course -1</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <!-- <div class=\"col-sm-8 col-sm-offset-2\">\n                <h5>You are just a step behind for a life chnaging experience. Help us to know you better</h5>\n            </div> -->\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"quest-wrap\" [class.hidden]=\"selectedIndex!==i\" *ngFor='let obj of questions;let i=index;'>\n                    <h5>Question {{i+1}}:-  {{obj.question}} </h5>\n                    <div class=\"row\" *ngIf=\"obj.elementType == 'Radio'\">\n                        <div class=\"col-sm-4 col-xs-6\" *ngFor=\"let answer of obj.answerKeys;let j=index\">\n                            <div>\n                                <input type=\"radio\" id=\"{{answer.answerValue}}\" value=\"{{answer.answerValue}}\" [(ngModel)]=\"obj.answer\" name=\"radioBtn\" />\n                                <label for=\"{{answer.answerValue}}\"><span></span>{{answer.displayText}}</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"obj.elementType == 'Text'\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <textarea id='answer' name=\"answer\" [(ngModel)]=\"obj.answer\" class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\n                            </div>\n                        </div>\n                    </div> \n                <div class=\"text-center\">\n                    <input type=\"submit\" name=\"question-submit\" id=\"question-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"{{selectedIndex == (questions.length-1) ? 'Submit' : 'Next'}}\" (click)=\"next()\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/survey/main-survey/main-survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__ = __webpack_require__("../../../../../src/app/shared/services/shared.service.ts");
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




var MainSurveyComponent = /** @class */ (function () {
    function MainSurveyComponent(_router, toastr, _sharedService) {
        this._router = _router;
        this.toastr = toastr;
        this._sharedService = _sharedService;
        this.selectedSurvey = [];
        this.questions = [];
        this.selectedIndex = 0;
        this.myarray = ['A', 'B', 'C'];
    }
    MainSurveyComponent.prototype.ngOnInit = function () {
        this.getSurvey();
    };
    MainSurveyComponent.prototype.getSurvey = function () {
        var _this = this;
        this.busy = this._sharedService.getSurvey('mainSurvey').then(function (res) {
            _this.selectedSurvey = res.data.categoryAndQuestions;
            _this.selectedSurvey.forEach(function (object) {
                object.itemsDropped.forEach(function (obj) {
                    _this.questions.push(obj);
                });
            });
        }, function (error) {
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                _this.toastr.error(error.json().msg);
            }
            else {
                _this.toastr.error('you are not able to login. Please try later.');
            }
        });
        console.log("this.questions", this.questions);
    };
    MainSurveyComponent.prototype.next = function () {
        if (this.selectedIndex < (this.questions.length - 1))
            this.selectedIndex++;
        else
            this.submitAnswer();
    };
    MainSurveyComponent.prototype.submitAnswer = function () {
        var _this = this;
        var body = {
            useId: localStorage.getItem("userID"),
            surveyType: "mainSurvey",
            userSurvey: this.questions
        };
        this.busy = this._sharedService.submitSurvey(body).then(function (res) {
            _this.toastr.success('Survey Successfully Submited ', '.', { timeOut: 3000, });
            _this._router.navigate(['/pages/your-course']);
        }, function (error) {
            console.log("error in submit answer", error);
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                _this.toastr.error(error.json().msg);
            }
            else {
                _this.toastr.error('you are not able to login. Please try later.');
            }
        });
    };
    MainSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-survey',
            template: __webpack_require__("../../../../../src/app/survey/main-survey/main-survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/survey/main-survey/main-survey.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */]])
    ], MainSurveyComponent);
    return MainSurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/survey/survey-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_component__ = __webpack_require__("../../../../../src/app/survey/survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_survey_main_survey_component__ = __webpack_require__("../../../../../src/app/survey/main-survey/main-survey.component.ts");
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
    },
    {
        path: 'main-survey',
        component: __WEBPACK_IMPORTED_MODULE_3__main_survey_main_survey_component__["a" /* MainSurveyComponent */]
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
exports.push([module.i, ".hidden{\n    display: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/survey/survey.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box-wrap survey-wrap\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>Survey to know you</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <h5>You are just a step behind for a life chnaging experience. Help us to know you better</h5>\n                <!-- <div class=\"progress\">\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:16.66666666666667%\">\n                    </div>\n                </div> -->\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"quest-wrap\" [class.hidden]=\"selectedIndex!==i\" *ngFor='let obj of questions;let i=index;'>\n                    <h5>Question {{i+1}}:-  {{obj.question}} </h5>\n                    <div class=\"row\" *ngIf=\"obj.elementType == 'Radio'\">\n                        <div class=\"col-sm-4 col-xs-6\" *ngFor=\"let answer of obj.answerKeys;let j=index\">\n                            <div>\n                                <input type=\"radio\" id=\"{{answer.answerValue}}\" value=\"{{answer.answerValue}}\" [(ngModel)]=\"obj.answer\" name=\"radioBtn\" />\n                                <label for=\"{{answer.answerValue}}\"><span></span>{{answer.displayText}}</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"obj.elementType == 'Text'\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"form-group\">\n                                    <textarea id='answer' name=\"answer\" [(ngModel)]=\"obj.answer\" class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\n                                </div>\n                            </div>\n                        </div> \n                        <!-- <div class=\"col-sm-4 col-xs-6\">\n                            <div>\n                                <label for=\"radio02\"><span></span>02</label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4 col-xs-6\">\n                            <div>\n                                <input type=\"radio\" id=\"radio03\" name=\"radio\" />\n                                <label for=\"radio03\"><span></span>03</label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4 col-xs-6\">\n                            <div>\n                                <input type=\"radio\" id=\"radio04\" name=\"radio\" />\n                                <label for=\"radio04\"><span></span>04</label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4 col-xs-6\">\n                            <div>\n                                <input type=\"radio\" id=\"radio05\" name=\"radio\" />\n                                <label for=\"radio05\"><span></span>05</label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4 col-xs-6\">\n                            <div>\n                                <input type=\"radio\" id=\"radio06\" name=\"radio\" />\n                                <label for=\"radio06\"><span></span>06</label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4 col-xs-6\">\n                            <div>\n                                <input type=\"radio\" id=\"radio07\" name=\"radio\" />\n                                <label for=\"radio07\"><span></span>07</label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4 col-xs-6\">\n                            <div>\n                                <input type=\"radio\" id=\"radio08\" name=\"radio\" />\n                                <label for=\"radio08\"><span></span>08</label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4 col-xs-6\">\n                            <div>\n                                <input type=\"radio\" id=\"radio09\" name=\"radio\" />\n                                <label for=\"radio09\"><span></span>09</label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4 col-xs-6\">\n                            <div>\n                                <input type=\"radio\" id=\"radio10\" name=\"radio\" />\n                                <label for=\"radio10\"><span></span>10</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\" *ngIf=\"obj.elementType == 'Text'\">\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\n                        </div>\n                    </div> -->\n                <!-- <div class=\"quest-wrap\" *ngIf=\"next\">\n                    <h5>Question 1:-   Why is it important to you to love yourself?</h5>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <textarea class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n                <div class=\"text-center\">\n                    <input type=\"submit\" name=\"question-submit\" id=\"question-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"{{selectedIndex == (questions.length-1) ? 'Submit' : 'Next'}}\" (click)=\"next()\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/survey/survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__ = __webpack_require__("../../../../../src/app/shared/services/shared.service.ts");
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




var SurveyComponent = /** @class */ (function () {
    function SurveyComponent(_router, toastr, _sharedService) {
        this._router = _router;
        this.toastr = toastr;
        this._sharedService = _sharedService;
        // public survey = {"_id":"5a8470a4049d9e001f6ed550","title":"Breif Survey 1","__v":0,"updatedAt":"2018-02-14T17:20:27.820Z","is_deleted":false,"categoryAndQuestions":[{"itemsDropped":[{"answerKeys":[],"is_deleted":false,"is_active":true,"__v":0,"dependency":"5a832d22b0bb90001f157687","variable":"I feel like a bad person","question":"I feel like a bad person","gender":"Both","elementType":"Text","categoryId":"5a8006830c6c56001f0e9554","_id":"5a832d61b0bb90001f15768a"},{"answerKeys":[{"answer_id":"aa11","displayText":"Yes","answerValue":"yes","answerScore":"","displayOrder":""},{"answer_id":"a31d","displayText":"No","answerValue":"No","answerScore":"","displayOrder":""},{"answer_id":"71fb","displayText":"third option","answerValue":"thirdoption","answerScore":"","displayOrder":""},{"answer_id":"a31d","displayText":"NoP","answerValue":"NoP","answerScore":"","displayOrder":""}],"is_deleted":false,"is_active":true,"__v":0,"variable":"I feel lonely","question":"I feel lonely","gender":"Both","elementType":"Radio","categoryId":"5a8006830c6c56001f0e9554","_id":"5a832d22b0bb90001f157687"}],"is_active":true,"is_deleted":false,"updatedAt":"2018-02-11T08:57:10.002Z","__v":0,"description":"lovable  description","name":"Lovable","_id":"5a8006830c6c56001f0e9554"},{"itemsDropped":[],"is_active":true,"is_deleted":false,"updatedAt":"2018-02-11T08:57:10.002Z","__v":0,"description":"Valuable description","name":"Valuable","_id":"5a80069e0c6c56001f0e9555"},{"itemsDropped":[{"answerKeys":[{"answer_id":"1cc1","displayText":"Yes","answerValue":"Yes","answerScore":"","displayOrder":""},{"answer_id":"d987","displayText":"No","answerValue":"No","answerScore":"","displayOrder":""}],"is_deleted":false,"is_active":true,"__v":0,"variable":"I feel guilt ","question":"I feel guilt ","gender":"Both","elementType":"Radio","categoryId":"5a8006ac0c6c56001f0e9556","_id":"5a832d4eb0bb90001f157689"}],"is_active":true,"is_deleted":false,"updatedAt":"2018-02-11T08:57:10.002Z","__v":0,"description":"Capable description","name":"Capable","_id":"5a8006ac0c6c56001f0e9556"}]};
        this.selectedSurvey = [];
        this.questions = [];
        this.selectedIndex = 0;
        this.myarray = ['A', 'B', 'C'];
    }
    SurveyComponent.prototype.ngOnInit = function () {
        this.getSurvey();
    };
    SurveyComponent.prototype.getSurvey = function () {
        var _this = this;
        this.busy = this._sharedService.getSurvey('berifSurvey').then(function (res) {
            console.log("eeeeeeeeeeeeeeefetch surveyyyyyyyyyye,res-=-=-=-", res);
            _this.selectedSurvey = res.data.categoryAndQuestions;
            _this.selectedSurvey.forEach(function (object) {
                object.itemsDropped.forEach(function (obj) {
                    _this.questions.push(obj);
                });
            });
        }, function (error) {
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                _this.toastr.error(error.json().msg);
            }
            else {
                _this.toastr.error('you are not able to login. Please try later.');
            }
        });
        console.log("this.questions", this.questions);
    };
    SurveyComponent.prototype.next = function () {
        if (this.selectedIndex < (this.questions.length - 1))
            this.selectedIndex++;
        else
            this.submitAnswer();
    };
    SurveyComponent.prototype.submitAnswer = function () {
        var _this = this;
        console.log("answer Submited");
        var body = {
            useId: localStorage.getItem("userID"),
            surveyType: "breifSurvey",
            userSurvey: this.questions
        };
        this.busy = this._sharedService.submitSurvey(body).then(function (res) {
            console.log("submited response", res);
            _this.toastr.success('Survey Successfully Submited ', '.', { timeOut: 3000, });
            _this._router.navigate(['/pages/courseinstructions']);
        }, function (error) {
            console.log("error in submit answer", error);
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                _this.toastr.error(error.json().msg);
            }
            else {
                _this.toastr.error('you are not able to login. Please try later.');
            }
        });
    };
    SurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-survey',
            template: __webpack_require__("../../../../../src/app/survey/survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/survey/survey.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__survey_routing_module__ = __webpack_require__("../../../../../src/app/survey/survey-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__survey_component__ = __webpack_require__("../../../../../src/app/survey/survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_survey_main_survey_component__ = __webpack_require__("../../../../../src/app/survey/main-survey/main-survey.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_4__survey_routing_module__["a" /* SurveyRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomFormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__survey_component__["a" /* SurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_survey_main_survey_component__["a" /* MainSurveyComponent */]
            ]
        })
    ], SurveyModule);
    return SurveyModule;
}());



/***/ })

});
//# sourceMappingURL=survey.module.chunk.js.map