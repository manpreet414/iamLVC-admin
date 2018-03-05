webpackJsonp(["survey.module"],{

/***/ "../../../../../src/app/survey/breif/breif.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/survey/breif/breif.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box-wrap survey-wrap\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>I Am LVC Beginning Survey</h3>\n            </div>\n        </div>\n        <!-- <div class=\"row\">\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"progress\">\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"((selectedIndex*100)/questions.length)+'%'\">\n                    </div>\n                </div>\n            </div>\n        </div> -->\n        <div class=\"row\">\n            <div class=\"quest-wrap brief-wrap\">\n                <div class=\"col-sm-10 col-sm-offset-1\" *ngFor='let obj of questions| slice:skip:limit;let i=index;'>\n                    <h5>Question {{i+1+skip}}:  {{obj.question}} </h5>\n                    <div class=\"row\" *ngIf=\"obj.elementType == 'Radio'\">\n                        <div class=\"col-20\" *ngFor=\"let answer of obj.answerKeys;let j=index\">\n                            <div>\n                                <input type=\"radio\" id=\"radioID{{i}}{{j}}\" value=\"{{answer.answerValue}}\" [(ngModel)]=\"obj.answer\" name=\"radioBtn{{i}}\">\n                              <label for=\"radioID{{i}}{{j}}\"><span></span>{{answer.displayText}}</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"obj.elementType == 'Text'\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"form-group\">\n                                    <textarea id='answer' name=\"answer\" [(ngModel)]=\"obj.answer\" class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n            </div>\n            <div class=\"text-center\">\n                <input type=\"submit\" name=\"question-submit\" id=\"question-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"{{limit >= questions.length ? 'Submit':'Next'}}\" (click)=\"submitAnswer()\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/survey/breif/breif.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreifComponent; });
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




var BreifComponent = /** @class */ (function () {
    // public displayText:any;
    function BreifComponent(_router, toastr, _sharedService) {
        this._router = _router;
        this.toastr = toastr;
        this._sharedService = _sharedService;
        // public survey = {"_id":"5a8470a4049d9e001f6ed550","title":"Breif Survey 1","__v":0,"updatedAt":"2018-02-14T17:20:27.820Z","is_deleted":false,"categoryAndQuestions":[{"itemsDropped":[{"answerKeys":[],"is_deleted":false,"is_active":true,"__v":0,"dependency":"5a832d22b0bb90001f157687","variable":"I feel like a bad person","question":"I feel like a bad person","gender":"Both","elementType":"Text","categoryId":"5a8006830c6c56001f0e9554","_id":"5a832d61b0bb90001f15768a"},{"answerKeys":[{"answer_id":"aa11","displayText":"Yes","answerValue":"yes","answerScore":"","displayOrder":""},{"answer_id":"a31d","displayText":"No","answerValue":"No","answerScore":"","displayOrder":""},{"answer_id":"71fb","displayText":"third option","answerValue":"thirdoption","answerScore":"","displayOrder":""},{"answer_id":"a31d","displayText":"NoP","answerValue":"NoP","answerScore":"","displayOrder":""}],"is_deleted":false,"is_active":true,"__v":0,"variable":"I feel lonely","question":"I feel lonely","gender":"Both","elementType":"Radio","categoryId":"5a8006830c6c56001f0e9554","_id":"5a832d22b0bb90001f157687"}],"is_active":true,"is_deleted":false,"updatedAt":"2018-02-11T08:57:10.002Z","__v":0,"description":"lovable  description","name":"Lovable","_id":"5a8006830c6c56001f0e9554"},{"itemsDropped":[],"is_active":true,"is_deleted":false,"updatedAt":"2018-02-11T08:57:10.002Z","__v":0,"description":"Valuable description","name":"Valuable","_id":"5a80069e0c6c56001f0e9555"},{"itemsDropped":[{"answerKeys":[{"answer_id":"1cc1","displayText":"Yes","answerValue":"Yes","answerScore":"","displayOrder":""},{"answer_id":"d987","displayText":"No","answerValue":"No","answerScore":"","displayOrder":""}],"is_deleted":false,"is_active":true,"__v":0,"variable":"I feel guilt ","question":"I feel guilt ","gender":"Both","elementType":"Radio","categoryId":"5a8006ac0c6c56001f0e9556","_id":"5a832d4eb0bb90001f157689"}],"is_active":true,"is_deleted":false,"updatedAt":"2018-02-11T08:57:10.002Z","__v":0,"description":"Capable description","name":"Capable","_id":"5a8006ac0c6c56001f0e9556"}]};
        this.selectedSurvey = [];
        this.questions = [];
        this.skip = 0;
        this.limit = 6;
        this.selectedIndex = 0;
    }
    BreifComponent.prototype.ngOnInit = function () {
        this.getSurvey();
    };
    BreifComponent.prototype.getSurvey = function () {
        var _this = this;
        this.busy = this._sharedService.getSurvey('breifSurvey').then(function (res) {
            if (res.data)
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
    };
    // next() {
    // 	if(this.selectedIndex < (this.questions.length-1)) this.selectedIndex++;
    // 	else this.submitAnswer();
    // }
    BreifComponent.prototype.submitAnswer = function () {
        var _this = this;
        if (this.selectedIndex == 0) {
            this.skip += 6;
            this.limit += 6;
            this.selectedIndex += 1;
            return;
        }
        else if (this.selectedIndex == 1) {
            this.skip += 6;
            this.limit += 27;
            this.selectedIndex += 1;
            return;
        }
        if (this.limit < this.questions.length) {
            this.skip += 10;
            this.limit += 10;
            return;
        }
        var body = {
            userId: localStorage.getItem("userID"),
            surveyType: "breifSurvey",
            userSurvey: this.questions
        };
        this.busy = this._sharedService.submitSurvey(body).then(function (res) {
            _this.toastr.success('Survey Successfully Submited ', ' ', { timeOut: 3000, });
            _this._router.navigate(['/survey/survey-one']);
        }, function (error) {
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                _this.toastr.error(error.json().msg);
            }
            else {
                _this.toastr.error('you are not able to login. Please try later.');
            }
        });
    };
    BreifComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breif',
            template: __webpack_require__("../../../../../src/app/survey/breif/breif.component.html"),
            styles: [__webpack_require__("../../../../../src/app/survey/breif/breif.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */]])
    ], BreifComponent);
    return BreifComponent;
}());



/***/ }),

/***/ "../../../../../src/app/survey/exercise-list/exercise-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/survey/exercise-list/exercise-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid exercise-list\">\n\t<div class=\"col-sm-10 col-sm-offset-2\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-6\">\n\t\t\t<h4>Exercise </h4>\n\t\t</div>\n\t\t<div class=\"col-xs-6\">\n\t\t\t<h4>Time </h4>\n\t\t</div>\n\t</div>\n\t<div *ngFor=\"let obj of exerciseList;let i=index;let first=first\" class=\"row exercise-listing\">\n\t\t<div class=\"col-xs-6\" *ngIf=\"!first\">\n\t  \t\t    <a *ngIf=\"exerciseList[i-1]['is_submitted']\" href=\"#/survey/pre-survey/{{obj?._id}}\">{{obj?.interventionsId?.name}}</a>\n\t  \t\t    <span *ngIf=\"!exerciseList[i-1]['is_submitted']\">{{obj?.interventionsId?.name}}</span>\n\t\t</div>\n\t\t<div class=\"col-xs-6\" *ngIf=\"first\">\n  \t\t    <a *ngIf=\"!obj.is_submitted\" href=\"#/survey/pre-survey/{{obj?._id}}\">{{obj?.interventionsId?.name}}</a>\n  \t\t    <span *ngIf=\"obj.is_submitted\" >{{obj?.interventionsId?.name}}</span>\n\t\t</div>\n\t\t<div class=\"col-xs-6 timing\">\t\t\t\n\t\t\t({{obj?.interventionsId?.time}})\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"exerciseList.length == 0\" class=\"col-sm-12\">\n\t\tNo Exercise Available.\n\t</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/survey/exercise-list/exercise-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseListComponent; });
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




var ExerciseListComponent = /** @class */ (function () {
    function ExerciseListComponent(_router, toastr, _sharedService) {
        this._router = _router;
        this.toastr = toastr;
        this._sharedService = _sharedService;
        this.exerciseList = [];
    }
    ExerciseListComponent.prototype.ngOnInit = function () {
        this.getExercises();
    };
    ExerciseListComponent.prototype.getExercises = function () {
        var _this = this;
        var userID = localStorage.getItem('userID');
        this.busy = this._sharedService.getExercises(userID).then(function (res) {
            if (!res.error)
                _this.exerciseList = res.data;
        }, function (error) {
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                _this.toastr.error(error.json().msg);
            }
            else {
                _this.toastr.error('There are some problem please try later.');
            }
        });
    };
    ExerciseListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-exercise-list',
            template: __webpack_require__("../../../../../src/app/survey/exercise-list/exercise-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/survey/exercise-list/exercise-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */]])
    ], ExerciseListComponent);
    return ExerciseListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/survey/exercise/exercise.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/survey/exercise/exercise.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box-wrap survey-wrap main-exercise\">\n    <div class=\"container-fluid\">\n        <div class=\"\">\n            <form (ngSubmit)=\"submit()\" >\n                <div class=\"col-sm-12\">\n                    <h3>{{data?.interventionsId?.name}}</h3>\n                    <p class=\"text-center\">{{data?.interventionsId?.time}}</p>\n                </div>\n                <div  *ngFor=\"let obj of data?.interventionsId?.contents;let i=index\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"desc\" [innerHTML]='obj.content'></div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"\" *ngFor=\"let question of obj.questions;let j=index\" >\n                                <div class=\"form-group\" *ngIf=\"question.elementType == 'Text'\">\n                                    <label>{{question.question}} </label>\n                                    <div *ngFor=\"let answer of question.answerKeys;let k=index\">\n                                        <textarea name=\"texttype{{i}}{{j}}{{k}}\" id=\"texttype{{i}}{{j}}{{k}}\" [(ngModel)]=\"answer.textValue\" class=\"form-control\" ></textarea>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\" *ngIf=\"question.elementType == 'Radio'\">\n                                    <label>\n                                        {{question.question}}\n                                    </label>\n                                    <div class=\"inline-radio\" *ngFor=\"let answer of question.answerKeys;let k=index\">\n                                        <input type=\"radio\" id=\"radioID{{i}}{{j}}{{k}}\" value=\"{{answer.answerValue}}\" [(ngModel)]=\"question.answer\" name=\"radioBtn{{i}}{{j}}\">\n                                        <label for=\"radioID{{i}}{{j}}{{k}}\"><span></span>{{answer.displayText}}</label>\n                                    </div>\n                                </div>\n                                <!-- <div class=\"form-group\"*ngIf=\"question.elementType == 'InputBox'\" >\n                                    <label>{{question.question}} </label>\n                                    <input class=\"form-control\" />\n                                </div> -->\n                                <div class=\"form-group\" *ngIf=\"question.elementType == 'TextRefference'\">\n                                    <div class=\"col-xs-6\">\n                                        <label>Feeling Word</label>\n                                        <span *ngFor=\"let answer of question.answerKeys;let k=index\">\n                                            <textarea id=\"felling{{i}}{{j}}{{k}}\" name=\"felling{{i}}{{j}}{{k}}\" [(ngModel)]=\"answer.textValue\" class=\"form-control\"></textarea>\n                                        </span>\n                                    </div>\n                                    <div class=\"col-xs-6\">\n                                        <label>Time You Felt This Way</label>\n                                        <span *ngFor=\"let answer of question.answerKeys;let k=index\">\n                                            <textarea id=\"time{{i}}{{j}}{{k}}\" name=\"time{{i}}{{j}}{{k}}\" [(ngModel)]=\"answer.refferenceValue\" class=\"form-control\"></textarea>\n                                        </span>\n                                    </div>\n                                </div>\n                                <div class=\"form-inline\" *ngIf=\"question.elementType == 'singleWord'\">\n                                    <div class=\"form-group\">\n                                        <label for=\"textcontent\">I am:</label>\n                                        <input type=\"text\" [(ngModel)]=\"question['iam1']\" class=\"form-control\" id=\"loveable\"> ,\n                                        <input type=\"text\" [(ngModel)]=\"question['iam2']\" class=\"form-control\" id=\"valuable\"> ,\n                                        <label for=\"content\">and</label>\n                                        <input type=\"text\" [(ngModel)]=\"question['iam3']\" class=\"form-control\" id=\"capable\"> \n                                    </div>\n                                </div>\n                                <div class=\"form-inline\" *ngIf=\"question.elementType == 'Iam'\">\n                                    <div class=\"form-group\">\n                                        <label for=\"textcontent\">I am:</label>\n                                        <span *ngFor=\"let answer of question.answerKeys;let k=index\">\n                                        <input type=\"text\" [(ngModel)]=\"answer.textValue\" class=\"form-control\" id=\"loveable\"></span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\" *ngIf=\"data?.interventionsId?.homework\">\n                    <div class=\"homework\">\n                        <p><span class=\"icon\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></span>\n                            <span class=\"content\">{{data?.interventionsId?.homework}}</span></p>\n                    </div>\n                </div>\n                <div class=\"form-group\" *ngIf=\"data\">\n                    <input class=\"form-control btn blue-border\" id=\"exercise-submit\" name=\"exercise-submit\" tabindex=\"4\" type=\"submit\" value=\"Save & Continue\">\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/survey/exercise/exercise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseComponent; });
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




var ExerciseComponent = /** @class */ (function () {
    function ExerciseComponent(_router, toastr, _activateRouter, _sharedService) {
        this._router = _router;
        this.toastr = toastr;
        this._activateRouter = _activateRouter;
        this._sharedService = _sharedService;
    }
    ExerciseComponent.prototype.ngOnInit = function () {
        this.id = this._activateRouter.snapshot.params['id'];
        this.getExercise();
    };
    ExerciseComponent.prototype.getExercise = function () {
        var _this = this;
        this.busy = this._sharedService.getExercise(this.id).then(function (res) {
            if (!res.error)
                _this.data = res.data;
        }, function (error) {
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                _this.toastr.error(error.json().msg);
            }
            else {
                _this.toastr.error('There are some problem please try later.');
            }
        });
    };
    ExerciseComponent.prototype.submit = function () {
        var _this = this;
        this.busy = this._sharedService.submitExercise(this.data).then(function (res) {
            if (!res.error)
                _this._router.navigate(['/survey/post-survey/' + _this.id, { data: true }]);
        }, function (error) {
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                _this.toastr.error(error.json().msg);
            }
            else {
                _this.toastr.error('There are some problem please try later.');
            }
        });
    };
    ExerciseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-exercise',
            template: __webpack_require__("../../../../../src/app/survey/exercise/exercise.component.html"),
            styles: [__webpack_require__("../../../../../src/app/survey/exercise/exercise.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */]])
    ], ExerciseComponent);
    return ExerciseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/survey/prepost-survey/prepost-survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/survey/prepost-survey/prepost-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box-wrap survey-wrap\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>{{prePost}} Survey</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"quest-wrap brief-wrap\">\n                <div class=\"col-sm-10 col-sm-offset-1\" *ngFor='let obj of questions;let i=index;'>\n                    <h5>Question {{i+1}}:  {{obj.question}} </h5>\n                    <div class=\"row\" *ngIf=\"obj.elementType == 'Radio'\">\n                        <div class=\"col-20\" *ngFor=\"let answer of obj.answerKeys;let j=index\">\n                            <div>\n                                <input type=\"radio\" id=\"radioID{{i}}{{j}}\" value=\"{{answer.answerValue}}\" [(ngModel)]=\"obj.answer\" name=\"radioBtn{{i}}\">\n                              <label for=\"radioID{{i}}{{j}}\"><span></span>{{answer.displayText}}</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"obj.elementType == 'Text'\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"form-group\">\n                                    <textarea id='answer' name=\"answer\" [(ngModel)]=\"obj.answer\" class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n            </div>\n            <div class=\"text-center\" *ngIf=\"questions.length > 0\">\n                <input type=\"submit\" name=\"question-submit\" id=\"question-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"Submit\" (click)=\"submitAnswer()\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/survey/prepost-survey/prepost-survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrepostSurveyComponent; });
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




var PrepostSurveyComponent = /** @class */ (function () {
    function PrepostSurveyComponent(_router, toastr, _activateRouter, _sharedService) {
        var _this = this;
        this._router = _router;
        this.toastr = toastr;
        this._activateRouter = _activateRouter;
        this._sharedService = _sharedService;
        this.selectedSurvey = [];
        this.questions = [];
        this.exerciseID = '';
        this.prePost = 'Pre';
        this.exerciseID = this._activateRouter.snapshot.params['id'];
        this._router.events.subscribe(function (evt) {
            if ((evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                if (evt['url'].indexOf("post-survey") >= 0)
                    _this.prePost = 'Post';
            }
        });
    }
    PrepostSurveyComponent.prototype.ngOnInit = function () {
        this.getSurvey();
    };
    PrepostSurveyComponent.prototype.getSurvey = function () {
        var _this = this;
        this.busy = this._sharedService.getSurvey('prePostSurvey').then(function (res) {
            if (res.data)
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
    };
    PrepostSurveyComponent.prototype.submitAnswer = function () {
        var _this = this;
        var body = {
            userId: localStorage.getItem("userID"),
            surveyType: "prePostSurvey",
            userSurvey: this.questions,
            exerciseID: this.exerciseID,
            prePost: this.prePost
        };
        this.busy = this._sharedService.submitSurvey(body).then(function (res) {
            _this.toastr.success('Survey Successfully Submited ', ' ', { timeOut: 3000, });
            if (_this.prePost == "Post") {
                _this._router.navigate(['/survey/exercise-list']);
            }
            else {
                _this._router.navigate(['/survey/exercise/' + _this.exerciseID]);
            }
        }, function (error) {
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                _this.toastr.error(error.json().msg);
            }
            else {
                _this.toastr.error('you are not able to login. Please try later.');
            }
        });
    };
    PrepostSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-prepost-survey',
            template: __webpack_require__("../../../../../src/app/survey/prepost-survey/prepost-survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/survey/prepost-survey/prepost-survey.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */]])
    ], PrepostSurveyComponent);
    return PrepostSurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/survey/survey-one/survey-one.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/survey/survey-one/survey-one.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box-wrap survey-wrap your-course\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <h3> Creating Your Course - Survey 1</h3>\n            </div>\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"progress\">\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"((skip*100)/questions.length)+'%'\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"quiz-guide\">\n                    <p><b>Please check yes to any items that have CAUSED you to feel that you are not lovable, valuable, and/or capable.</b> <i>There may be some items that are true for you, but do not make you feel that you are not lovable, not valuable, or not capable. Please check no for these items.</i></p>\n                </div>  \n                <div class=\"quest-wrap\">\n                  <ul class=\"radio-custom\" *ngFor='let obj of questions| slice:skip:limit;let i=index;'>\n                    <li class=\"row\" >\n                        <div class=\"col-sm-9\">\n                          <h5><span>{{i+1+skip}}. </span>{{obj.question}}</h5>\n                        </div>\n                        <div class=\"col-sm-3\">\n                          <div class=\"row\">\n                            <div class=\"col-xs-6\" *ngFor=\"let answer of obj.answerKeys;let j=index\">\n                              <input type=\"radio\" id=\"radioID{{i}}{{j}}{{skip}}\" value=\"{{answer.answerValue}}\" [(ngModel)]=\"obj.answer\" name=\"radioBtn{{i}}{{skip}}\">\n                              <label for=\"radioID{{i}}{{j}}{{skip}}\"><span></span>{{answer.displayText}}</label>\n                            </div>\n                          </div>\n                        </div>\n                    </li>    \n                                          \n                   </ul>\n                </div>\n                <div class=\"text-center\" *ngIf=\"questions.length > 0\">\n                    <input type=\"submit\" name=\"question-submit\" id=\"question-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"{{limit >= questions.length ? 'Submit':'Next'}}\" (click)=\"submitAnswer()\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/survey/survey-one/survey-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyOneComponent; });
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




var SurveyOneComponent = /** @class */ (function () {
    function SurveyOneComponent(_router, toastr, _sharedService) {
        this._router = _router;
        this.toastr = toastr;
        this._sharedService = _sharedService;
        this.selectedSurvey = [];
        this.questions = [];
        this.skip = 0;
        this.limit = 20;
    }
    SurveyOneComponent.prototype.ngOnInit = function () {
        this.getSurvey();
    };
    SurveyOneComponent.prototype.getSurvey = function () {
        var _this = this;
        var key = 'surveyCourse1';
        this.busy = this._sharedService.getSurvey(key).then(function (res) {
            _this.selectedSurvey = res.data && res.data.categoryAndQuestions ? res.data.categoryAndQuestions : [];
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
    };
    SurveyOneComponent.prototype.submitAnswer = function () {
        var _this = this;
        if (this.limit < this.questions.length) {
            this.skip += 10;
            this.limit += 10;
            return;
        }
        var body = {
            userId: localStorage.getItem("userID"),
            surveyType: 'surveyCourse1',
            userSurvey: this.questions
        };
        this.busy = this._sharedService.submitSurvey(body).then(function (res) {
            _this.toastr.success('Survey Successfully Submited ', ' ', { timeOut: 3000, });
            _this._router.navigate(['/survey/survey-two']);
        }, function (error) {
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                _this.toastr.error(error.json().msg);
            }
            else {
                _this.toastr.error('you are not able to login. Please try later.');
            }
        });
    };
    SurveyOneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-survey-one',
            template: __webpack_require__("../../../../../src/app/survey/survey-one/survey-one.component.html"),
            styles: [__webpack_require__("../../../../../src/app/survey/survey-one/survey-one.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */]])
    ], SurveyOneComponent);
    return SurveyOneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/survey/survey-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breif_breif_component__ = __webpack_require__("../../../../../src/app/survey/breif/breif.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_one_survey_one_component__ = __webpack_require__("../../../../../src/app/survey/survey-one/survey-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__survey_two_survey_two_component__ = __webpack_require__("../../../../../src/app/survey/survey-two/survey-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exercise_exercise_component__ = __webpack_require__("../../../../../src/app/survey/exercise/exercise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__exercise_list_exercise_list_component__ = __webpack_require__("../../../../../src/app/survey/exercise-list/exercise-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__prepost_survey_prepost_survey_component__ = __webpack_require__("../../../../../src/app/survey/prepost-survey/prepost-survey.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'breif',
        component: __WEBPACK_IMPORTED_MODULE_2__breif_breif_component__["a" /* BreifComponent */]
    },
    {
        path: 'survey-one',
        component: __WEBPACK_IMPORTED_MODULE_3__survey_one_survey_one_component__["a" /* SurveyOneComponent */]
    },
    {
        path: 'survey-two',
        component: __WEBPACK_IMPORTED_MODULE_4__survey_two_survey_two_component__["a" /* SurveyTwoComponent */]
    },
    {
        path: 'exercise-list',
        component: __WEBPACK_IMPORTED_MODULE_6__exercise_list_exercise_list_component__["a" /* ExerciseListComponent */]
    },
    {
        path: 'exercise/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__exercise_exercise_component__["a" /* ExerciseComponent */]
    },
    {
        path: 'pre-survey/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__prepost_survey_prepost_survey_component__["a" /* PrepostSurveyComponent */]
    },
    {
        path: 'post-survey/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__prepost_survey_prepost_survey_component__["a" /* PrepostSurveyComponent */]
    }
];
var SurveyRoutingModule = /** @class */ (function () {
    function SurveyRoutingModule() {
    }
    SurveyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], SurveyRoutingModule);
    return SurveyRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/survey/survey-two/survey-two.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/survey/survey-two/survey-two.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box-wrap survey-wrap your-course\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <h3> Creating Your Course - Survey 2</h3>\n            </div>\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"progress\">\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"((skip*100)/questions.length)+'%'\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <div class=\"quiz-guide\">\n                    <p>\n                        <b>Please check yes for the things that you know about yourself or do (much of the time – not necessarily all of the time!) that contribute to you feeling lovable, valuable, capable.</b><i> Please check no if you do not know this about yourself or if you do not do it much of the time. </i>\n\n                    </p>\n                </div>\n                <div class=\"quest-wrap\">\n                  <ul class=\"radio-custom\" *ngFor='let obj of questions| slice:skip:limit;let i=index;'>\n                    <li class=\"row\" >\n                        <div class=\"col-sm-9\">\n                          <h5><span>{{i+1+skip}}. </span>{{obj.question}}</h5>\n                        </div>\n                        <div class=\"col-sm-3\">\n                          <div class=\"row\">\n                            <div class=\"col-xs-6\" *ngFor=\"let answer of obj.answerKeys;let j=index\">\n                              <input type=\"radio\" id=\"radioID{{i}}{{j}}{{skip}}\" value=\"{{answer.answerValue}}\" [(ngModel)]=\"obj.answer\" name=\"radioBtn{{i}}{{skip}}\">\n                              <label for=\"radioID{{i}}{{j}}{{skip}}\"><span></span>{{answer.displayText}}</label>\n                            </div>\n                          </div>\n                        </div>\n                    </li> \n                                          \n                   </ul>\n                </div>\n                <div class=\"text-center\">\n                    <input type=\"submit\" name=\"question-submit\" id=\"question-submit\" tabindex=\"4\" class=\"form-control btn blue-border\" value=\"{{limit >= questions.length ? 'Submit':'Next'}}\" (click)=\"submitAnswer()\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/survey/survey-two/survey-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyTwoComponent; });
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




var SurveyTwoComponent = /** @class */ (function () {
    function SurveyTwoComponent(_router, toastr, _sharedService) {
        this._router = _router;
        this.toastr = toastr;
        this._sharedService = _sharedService;
        this.selectedSurvey = [];
        this.questions = [];
        this.skip = 0;
        this.limit = 20;
    }
    SurveyTwoComponent.prototype.ngOnInit = function () {
        this.getSurvey();
    };
    SurveyTwoComponent.prototype.getSurvey = function () {
        var _this = this;
        var key = 'surveyCourse2';
        this.busy = this._sharedService.getSurvey(key).then(function (res) {
            _this.selectedSurvey = res.data && res.data.categoryAndQuestions ? res.data.categoryAndQuestions : [];
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
    };
    SurveyTwoComponent.prototype.submitAnswer = function () {
        var _this = this;
        if (this.limit < this.questions.length) {
            this.skip += 10;
            this.limit += 10;
            return;
        }
        var body = {
            userId: localStorage.getItem("userID"),
            surveyType: 'surveyCourse2',
            userSurvey: this.questions
        };
        this.busy = this._sharedService.submitSurvey(body).then(function (res) {
            _this.toastr.success('Survey Successfully Submited ', ' ', { timeOut: 3000, });
            _this._router.navigate(['/pages/courseinstructions']);
        }, function (error) {
            if (error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
                _this.toastr.error(error.json().msg);
            }
            else {
                _this.toastr.error('you are not able to login. Please try later.');
            }
        });
    };
    SurveyTwoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-survey-two',
            template: __webpack_require__("../../../../../src/app/survey/survey-two/survey-two.component.html"),
            styles: [__webpack_require__("../../../../../src/app/survey/survey-two/survey-two.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_shared_service__["a" /* SharedService */]])
    ], SurveyTwoComponent);
    return SurveyTwoComponent;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__breif_breif_component__ = __webpack_require__("../../../../../src/app/survey/breif/breif.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__survey_one_survey_one_component__ = __webpack_require__("../../../../../src/app/survey/survey-one/survey-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__survey_two_survey_two_component__ = __webpack_require__("../../../../../src/app/survey/survey-two/survey-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__exercise_exercise_component__ = __webpack_require__("../../../../../src/app/survey/exercise/exercise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__exercise_list_exercise_list_component__ = __webpack_require__("../../../../../src/app/survey/exercise-list/exercise-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__prepost_survey_prepost_survey_component__ = __webpack_require__("../../../../../src/app/survey/prepost-survey/prepost-survey.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomFormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__breif_breif_component__["a" /* BreifComponent */],
                __WEBPACK_IMPORTED_MODULE_7__survey_one_survey_one_component__["a" /* SurveyOneComponent */],
                __WEBPACK_IMPORTED_MODULE_8__survey_two_survey_two_component__["a" /* SurveyTwoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__exercise_exercise_component__["a" /* ExerciseComponent */],
                __WEBPACK_IMPORTED_MODULE_10__exercise_list_exercise_list_component__["a" /* ExerciseListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__prepost_survey_prepost_survey_component__["a" /* PrepostSurveyComponent */]
            ]
        })
    ], SurveyModule);
    return SurveyModule;
}());



/***/ })

});
//# sourceMappingURL=survey.module.chunk.js.map