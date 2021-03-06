webpackJsonp(["questionaire.module"],{

/***/ "../../../../../src/app/questionaire/form/form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".question-image{\n    width: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questionaire/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sb2-2-3\">\n    <ul class=\"nav nav-tabs tab-list\">\n          <li class=\"active\">\n            <a data-toggle=\"tab\" routerLink=\"/questionaire\">\n            <i class=\"fa fa-object-group \" aria-hidden=\"true\"></i> <span>Survey</span></a>\n          </li>\n          <li>\n              <a data-toggle=\"tab\" routerLink=\"/questionaire/user-questions\">\n                <i class=\"fa fa-question\" aria-hidden=\"true\"></i> <span>User Questions</span>\n              </a>\n            </li>\n      </ul>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"box-inn-sp\">\n                <div class=\"inn-title\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <h4 class=\"header-label\">{{ isEditable ? \"Edit\" : \"Add New\" }} Survey</h4>\n                    </div>\n                    <div class=\"col-md-6 text-right\">\n                      \n                    <a  class=\"waves-effect waves-light btn cancel submit-btn \" routerLink=\"/questionaire\" form=\"main-form\"> cancel</a>                        \n                      <a class=\"waves-effect waves-light btn teal lighten-2 submit-btn \" [ngClass]=\"{'disabled': !mainForm.valid || !mainForm.dirty || !mainForm.touched}\"  form=\"main-form\" (click)=\"save()\"> Next</a>\n                    </div>\n                  </div>\n                </div>\n                 <div class=\"tab-inn\">\n                    <div [ngBusy]=\"busy\"></div>\n                    <form #mainForm=\"ngForm\" id=\"main-form\" novalidate>\n                        <div class=\"row\">\n                            <div class=\"input-field col s6\">\n                                <input id=\"title\" type=\"text\" [(ngModel)]=\"item.title\" name=\"title\"\n                                  class=\"validate\" #title=\"ngModel\" required minlength=\"3\" maxlength=\"50\">\n                                <label for=\"title\" [ngClass]=\"{'active': item?.title}\">Title *</label>\n\n                                <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"text-danger\">\n                                  <p *ngIf=\"title.errors.required\">Title is required.</p>\n                                  <p *ngIf=\"title.errors.minlength\">Minimum of 3 characters</p>\n                                  <p *ngIf=\"title.errors.maxlength\">Maximum of 70 characters</p>\n                                </div>\n                            </div>\n\n                            <div class=\"input-field col s6\">\n                                <input id=\"description\" type=\"text\" [(ngModel)]=\"item.description\" name=\"description\">\n                                <label for=\"description\" [ngClass]=\"{'active': item?.description}\">Description</label>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div style=\"height:500px\"class=\"input-field col s6\" *ngIf=\"language==='en'\">\n                                <select  materialize=\"material_select\" [(ngModel)]=\"item.surveyType\" name=\"item.surveyType\" required=\"\">\n                                    <option value=\"\" disabled selected>Select Type</option>\n                                    <option *ngFor=\"let type of surveyType\"  [value]=\"type\">{{ type }}</option>\n                                </select>\n                            </div>\n                        </div>\n               <!-- <div class=\"row\" *ngIf=\"language==='en'\">\n                               \n                  <div class=\"input-field col s6\" >\n                      <div class=\"file-field input-field\">\n                        <div class=\"btn\">\n                          <span>Icon</span>\n                         <input  #myInput type=\"file\" name=\"file-7\" id=\"file-7\" class=\"inputfile inputfile-6\" data-multiple-caption=\"{count} files selected\" imageUpload\n                      (imageSelected)=\"uploadImage($event,'iconURL')\"\n                       accept=\".png, .jpg\"/>\n                        </div>\n                        <div class=\"file-path-wrapper\">\n                          <input class=\"file-path validate\" type=\"text\" #questionaireIcon=\"ngModel\" [(ngModel)]=\"ImageTextBox\" [ngModelOptions]=\"{standalone: true}\"\n                            id=\"questionaireicon\" required name=\"questionaireIcon\">\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"row\" *ngIf=\"language==='en'\">\n                          <div class=\"input-field col s6\">\n                              <div class=\"row\" *ngIf=\"item.smallIconURL && item._id\">\n                                  <div class=\"input-field col s6\">\n                                      <img class=\"category-image\" [src]=\"Preview\" alt=\"\">\n                                  </div>\n                              </div>\n                          </div>\n                  </div>\n                        \n               </div> -->\n                          <div class=\"clear\"></div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/questionaire/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionaire_service__ = __webpack_require__("../../../../../src/app/questionaire/questionaire.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_base_form__ = __webpack_require__("../../../../../src/app/shared/base-form.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormComponent = (function (_super) {
    __extends(FormComponent, _super);
    function FormComponent(router, activatedRoute, klassService, sanitizer) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.klassService = klassService;
        _this.sanitizer = sanitizer;
        _this.surveyType = ['breifSurvey', 'surveyCourse1', 'surveyCourse2', 'prePostSurvey', 'finalSurvey'];
        _this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.BASE_URL;
        return _this;
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.language = 'en';
        // subscribe to router event
        this.activatedRoute.params.subscribe(function (params) {
            _this.itemID = params['id'];
            if (_this.itemID) {
                _this.isEditable = true;
                _this.getItem();
            }
        });
    };
    FormComponent.prototype.getItem = function () {
        var _this = this;
        this.busy = this.klassService.getItem(this.itemID, this.language).then(function (res) {
            if (!res)
                return true;
            _this.item = res.data;
        });
    };
    FormComponent.prototype.createItem = function () {
        var _this = this;
        this.busy = this.klassService.addItem(this.item, this.language, 'questionnaire')
            .then(function (res) {
            if (!res)
                return true;
            _this.item = res;
            var id = res.data._id;
            var URL = '/questionaire/' + id + '/next';
            _this.router.navigate([URL]);
        });
    };
    FormComponent.prototype.updateItem = function () {
        /*    this.busy = this.klassService.updateItem(this.itemID, this.item, this.language, 'questionnaire').then((res) => {
              if(!res)
                return true;
              //this.form.form.markAsPristine();
              this.router.navigate(['/questionaire']);
              this.notificationsService.notify('success', this.constantMessages.questionUpdated);
            });*/
    };
    FormComponent.prototype.uploadImage = function (imageResult, docType) {
        this.myInputVariable.nativeElement.value = "";
        var object = {
            base64Data: imageResult.dataURL,
            type: "questionaireIcon"
        };
        // this.busy = this.klassService.uploads(object).then((res) => {
        //     if(!res)
        //       return true;
        //     if(res.data.fullPath){
        //         this.preview = this.baseUrl + res.data.fullPath ;
        //       this.item[docType] = res.data.fullPath;
        //       // this.notificationsService.notify('success', this.constantMessages.imageUplaoded);
        //     }else{
        //       // this.notificationsService.notify('error', this.constantMessages.errorMessage);
        //     }
        // });
    };
    return FormComponent;
}(__WEBPACK_IMPORTED_MODULE_5__shared_base_form__["a" /* BaseForm */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myInput'),
    __metadata("design:type", Object)
], FormComponent.prototype, "myInputVariable", void 0);
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        providers: [],
        template: __webpack_require__("../../../../../src/app/questionaire/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/questionaire/form/form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__questionaire_service__["a" /* QuestionaireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__questionaire_service__["a" /* QuestionaireService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object])
], FormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/questionaire/listing/listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-in {\n  width: 100%;\n}\n\n.image-out {\n  width: 35px;\n  height: 45px;\n  overflow: hidden;\n  float: left;\n  margin-right: 10px;\n}\n\n.opt-text {\n  line-height: 45px\n}\n\n\n@white: #ffffff;\n@lightBG: #dce1df;\n@salmon: #ff6666;\n\n@teal: #0096a0;\n@tealMid: #0ebac7;\n@tealContrast: #33ffff;\n@tealShade:\t#007c85;\n\n@darkGrey: #4f585e;\n\n\n\n\ndiv.cards {\n  margin: 40px auto;\n  max-width: 960px;\n  text-align: center;\n}\n\n  div.card img.q-imgages{\n  \t/*max-width: 160px !important;\n  \tmargin:0 0 0 0 ;*/\n\n    width: 140px;\n    height: 135px;\n    margin: 30px;\n  }\n\n\ndiv.card {\n  background: @white;\n  display: inline-block;\n  margin: 0 60px 25px 0;\n  max-width: 300px;\n  -webkit-perspective: 1000;\n          perspective: 1000;\n  position: relative;\n  transition: all 0.3s 0s ease-in;\n  z-index: 1;\n\n\n  div.card-title {\n    background: @white;\n    padding: 6px 15px 10px;\n    position: relative;\n    z-index: 0;\n    \n    a.toggle-info {\n      border-radius: 32px;\n      height: 32px;\n      padding: 0;\n      position: absolute;\n      right: 15px;\n      top: 10px;\n      width: 32px;\n      \n      span {\n        background: @white;\n        display: block;\n        height: 2px;\n        position: absolute;\n        top: 16px;\n        transition: all 0.15s 0s ease-out;\n        width: 12px;\n      }\n      \n      span.left {\n        right: 14px;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n      }\n      span.right {\n        left: 14px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n      }\n    }\n    \n  }\n\n  div.card-description {\n    padding: 0 15px 10px;\n    position: relative;\n    font-size: 14px;\n  }\n\n  div.card-actions {\n  \tbox-shadow: 0 2px 0px 0 rgba(0,0,0,0.075);\n    padding: 10px 15px 20px;\n    text-align: center;\n  }\n  \n  div.card-flap {\n    background: darken(@white,15);\n    position: absolute;\n    width: 100%;\n    -webkit-transform-origin: top;\n            transform-origin: top;\n    -webkit-transform: rotateX(-90deg);\n            transform: rotateX(-90deg);\n  }\n  div.flap1 {\n    transition: all 0.3s 0.3s ease-out;\n    z-index: -1;\n  }\n  div.flap2 {\n    transition: all 0.3s 0s ease-out;\n    z-index: -2;\n  }\n  \n}\n\ndiv.cards.showing {\n  div.card {\n    cursor: pointer;\n    opacity: 0.6;\n    -webkit-transform: scale(0.88);\n            transform: scale(0.88);\n  }\n}\n\n.no-touch  div.cards.showing {\n  div.card:hover {\n    opacity: 0.94;\n    -webkit-transform: scale(0.92);\n            transform: scale(0.92);\n  }\n}\n\ndiv.card.show {\n  opacity: 1 !important;\n  -webkit-transform: scale(1) !important;\n          transform: scale(1) !important;\n\n  div.card-title {\n    a.toggle-info {\n      background: @salmon !important;\n      span {\n        top: 15px;\n      }\n      span.left {\n        right: 10px;\n      }\n      span.right {\n        left: 10px;\n      }\n    }\n  }\n  div.card-flap {\n    background: @white;\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n  }\n  div.flap1 {\n    transition: all 0.3s 0s ease-out;\n  }\n  div.flap2 {\n    transition: all 0.3s 0.2s ease-out;\n  }\n}\n\na.del-card{\n  cursor: pointer; \n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questionaire/listing/listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sb2-2-3\">\n\n    <ul class=\"nav nav-tabs tab-list\">\n      <li class=\"active\">\n        <a data-toggle=\"tab\" routerLink=\"/questionaire\">\n        <i class=\"fa fa-object-group \" aria-hidden=\"true\"></i> <span>Survey</span></a>\n      </li>\n      <li >\n          <a data-toggle=\"tab\" routerLink=\"/questionaire/user-questions\">\n            <i class=\"fa fa-question\" aria-hidden=\"true\"></i> <span>User Questions</span>\n          </a>\n        </li>\n  </ul>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"box-inn-sp\">\n        <div class=\"inn-title\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <h4 class=\"header-label\">Survey</h4>\n            </div>\n\n            <div class=\"col-md-6 text-right\">\n              <!-- <form class=\"app-search\">\n                <input type=\"text\" placeholder=\"Search...\" class=\"form-control\" (keyup)=\"searchEquipment($event)\" [(ngModel)]=\"searchTerm\"\n                  name=\"searchTerm\">\n                <a href=\"javascript: void();\" (click)=\"searchEquipment($event)\"><i class=\"fa fa-search\"></i></a>\n              </form> -->\n            </div>\n\n            <div class=\"col-md-3 text-right\">\n              <a routerLink=\"/questionaire/new\" class=\"btn-floating btn-large waves-effect waves-light btn\"><i class=\"material-icons\">add</i></a>\n            </div>\n\n          </div>\n        </div>\n    \n    <div class=\"tab-inn\">\n\n\n<div class=\"cards\">\n\n  <div class=\"card\"  *ngFor=\"let item of items\">\n    <img *ngIf=\"item.iconURL\" src=\"{{baseUrl}}{{item.iconURL}}\" class=\"q-imgages\">\n    <img *ngIf=\"!item.iconURL\" src=\"assets/images/dummy.png\" class=\"q-imgages\">\n     <div class=\"card-title\">\n      <h2 class=\"h2-title capitalized\"  >\n          {{ item.title }}\n      </h2>\n    </div>\n    <div class=\"card-flap flap1\">\n      <div class=\"card-delete\">\n        <a (click)=\"openModal(item)\" class=\"del-card\">\n        <i aria-hidden=\"true\" class=\"fa fa-trash-o\"></i></a>\n      </div>\n    </div>\n  </div>\n\n</div>\n<!-- End cards section -->\n    </div>\n\n        <label *ngIf=\"items.length===0\" class=\"record-label\">No record found </label>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- https://www.ortery.com/wp-content/uploads/2015/11/ex-360-png-01.jpg -->\n<!-- Modal Structure -->\n<div id=\"modal1\" class=\"modal modal-fixed-footer\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\n\n  <div class=\"modal-content\">\n    <h2>Are you sure that you want to delete this question ?</h2>\n    <p  style=\"margin-top: 30px;\"> Once you delete a question, you cannot reverse it back!</p>\n  </div>\n\n  <div class=\"modal-footer\">\n    <a class=\"waves-effect waves-green btn-flat\" (click)=\"closeModal()\">Cancel</a>\n    <a class=\"waves-effect waves-light btn teal darken-1\" (click)=\"removeItem()\">Delete</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/questionaire/listing/listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_listing__ = __webpack_require__("../../../../../src/app/shared/listing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionaire_service__ = __webpack_require__("../../../../../src/app/questionaire/questionaire.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingComponent = (function (_super) {
    __extends(ListingComponent, _super);
    function ListingComponent(klassService) {
        var _this = _super.call(this) || this;
        _this.klassService = klassService;
        _this.queryString = {};
        _this.sortBy = "question";
        _this.sortOrder = "asc";
        _this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].config.BASE_URL;
        return _this;
    }
    ListingComponent.prototype.ngOnInit = function () {
        this.language = 'en';
        this.getItems();
    };
    ListingComponent.prototype.getItems = function () {
        var _this = this;
        this.items = [];
        this.busy = this.klassService.getItems(this.language, 'questionnaire').then(function (res) {
            if (!res)
                return true;
            _this.items = res.data.filter(function (_item) { return _item.is_deleted != true; });
            _this.tmpItems = _this.items;
            _this.itemsTotal = _this.items.length;
        });
    };
    ListingComponent.prototype.filterItems = function () {
        var _this = this;
        if (this.tmpItems.length == 0)
            this.tmpItems = this.items;
        this.items = this.tmpItems.filter(function (_item) {
            return _item.question.toLowerCase().lastIndexOf(_this.searchTerm.trim().toLowerCase()) != -1;
        });
    };
    ListingComponent.prototype.removeItem = function () {
        var _this = this;
        this.closeModal();
        this.item.is_deleted = true;
        this.busy = this.klassService.removeItem(this.item, this.language, 'questionnaire').then(function (res) {
            if (!res)
                return true;
            _this.item = null;
            _this.getItems();
        });
    };
    ListingComponent.prototype.toggleStatus = function (_item) {
        var id = _item._id;
        var obj = { _id: _item._id, is_active: _item.is_active };
        this.busy = this.klassService.toggleStatus(obj, this.language, "questionnaire/changeStatus").then(function (res) {
            if (!res)
                return true;
        });
    };
    return ListingComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_listing__["a" /* Listing */]));
ListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listing',
        template: __webpack_require__("../../../../../src/app/questionaire/listing/listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/questionaire/listing/listing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__questionaire_service__["a" /* QuestionaireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__questionaire_service__["a" /* QuestionaireService */]) === "function" && _a || Object])
], ListingComponent);

var _a;
//# sourceMappingURL=listing.component.js.map

/***/ }),

/***/ "../../../../../src/app/questionaire/next/next.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".collapsible-header {\n    display: block;\n    cursor: pointer;\n    min-height: 3rem;\n    line-height: 3rem;\n    padding: 0 1rem;\n    background-color: #fff;\n    border-bottom: 1px solid #ddd;\n}\n\n.collapsible-body{\n\tdisplay: none;\n    padding: 8px 0 8px 35px ;\n    margin-top: 0px;\n    margin-bottom: 0px;\n\tborder: 1px solid #ddd;\n    box-sizing: border-box;\n}\n.collapsible-body p{\n\tmargin: 0;\n    padding: 2rem;\n}\nul li {\n    list-style-type: none;\n}\n.dragItem{\n  border:1px solid #aaa;\n  /*width:50%;*/\n  padding:8px 0 8px 10px ;\n  margin:5px 10px 5px 30px ;\n  cursor: crosshair;\n}\n.highlight{\n  border:solid 1px #0d0;\n}\n.droppable{\n    padding:10px;\n  border:1px solid #bbb;\n  min-height:60px;\n}\n.highlight{\n    border:solid 1px #0d0;\n}\n.dropItem{\n  display: block;\n  padding:5px 15px ;\n  margin:4px 1px 4px 40px; \n  border:1px solid #aaa;\n  background-color:#aaf;\n}\n\na.dropped-item{\n    float: right;\n    color: #df546e;\n    cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questionaire/next/next.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sb2-2-3\">\n\n    <ul class=\"nav nav-tabs tab-list\">\n      <li class=\"active\">\n        <a data-toggle=\"tab\" routerLink=\"/questionaire\">\n        <i class=\"fa fa-object-group \" aria-hidden=\"true\"></i> <span>Questionnaire</span></a>\n      </li>\n      <li >\n          <a data-toggle=\"tab\" routerLink=\"/questionaire/user-questions\">\n            <i class=\"fa fa-question\" aria-hidden=\"true\"></i> <span>User Questions</span>\n          </a>\n        </li>\n  </ul>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"box-inn-sp\">\n        <div class=\"inn-title\">\n          <div class=\"row\">\n            <div  class=\"col-md-3\">\n              <h4 class=\"header-label\">Add questionaire</h4>\n            </div>\n\n            <div class=\"col-md-3 text-right\">\n              &nbsp;\n            </div>\n            <div class=\"col-md-6 text-right\">\n              \n              <a class=\"waves-effect waves-light btn teal lighten-2 submit-btn \" form=\"main-form\" (click)=\"save()\"> Save & Exit</a>\n\n            </div>\n\n\n          </div>\n        </div>\n\n<!-- <div class=\"row\">\n  <div class=\"col-md-6\">\n\n <div *ngFor=\"let item of itemsToDrop\" [dragDirective]='item' [dragHightlight]=\"'highlight'\" (releaseDrop)=\"releaseDrop($event)\" class=\"dragItem\" >\n      <div class=\"genericBox\">\n        {{item.name}}\n        <p>{{item.content}}</p>\n      </div>\n</div>\n\n\n    <p>drop-area works!</p>\n    <div dropDirective (dropEvent)=\"addDropItem($event)\" class=\"droppable\" [dropHighlight]=\"'highlight'\" >\n        <div  *ngFor=\"let item of itemsDropped\" class=\"genericBox dropItem\">\n           {{item.name}}\n        <p>{{item.content}}</p>\n        </div>\n    </div>\n\n  </div>\n</div> -->\n\n    <div class=\"tab-inn\">\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n  <span><h4>User questions</h4></span>\n    <ul materialize=\"collapsible\" class=\"collapsible\" data-collapsible=\"accordion\">\n      <li *ngFor=\"let item of items; let i = index\">\n        <div class=\"collapsible-header\">{{item.name}}</div>\n          <div *ngFor=\"let val of item.userquestions; let i = index\" [dragDirective]='val' [dragHightlight]=\"'highlight'\"  class=\"collapsible-body dragItem\"><span>{{val.question}}</span></div>\n        <div *ngIf=\"item.userquestions.length === 0\" class=\"collapsible-body\"><span>Record Not Found</span></div>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"col-md-6\">\n  <span><h4 id=\"selectedQ\">Selected questions</h4></span>      \n  <ul materialize=\"collapsible\" class=\"collapsible\" data-collapsible=\"accordion\">\n        \n    <li *ngFor=\"let category of seletedItemsCategory; let i = index;\" dropDirective (dropEvent)=\"addDropItem($event,i)\" class=\"droppable\" [dropHighlight]=\"'highlight'\">\n      \n      <div class=\"collapsible-header\">{{category.name}}</div>\n        <div *ngFor=\"let droppedQuestion of category.itemsDropped; let j = index; \" class=\"collapsible-body genericBox dropItem\" >\n          <span>{{droppedQuestion.question}}</span>\n            <a (click)=\"reomveDroppedItem(droppedQuestion, i, j)\" class=\"dropped-item\" ><i class=\"material-icons Small\">delete_sweep</i></a>\n        </div>\n      \n    </li>\n\n  </ul>\n\n<!--     <ul materialize=\"collapsible\" class=\"collapsible\" data-collapsible=\"accordion\">\n        <li dropDirective (dropEvent)=\"addDropItem($event)\" class=\"droppable\" [dropHighlight]=\"'highlight'\">\n          <div class=\"collapsible-header\">Fourth</div>\n          <div class=\"collapsible-body genericBox dropItem\"  *ngFor=\"let item of itemsDropped\"><span>{{item.question}}</span></div>\n          <div *ngIf=\"itemsDropped.length === 0\" class=\"collapsible-body\"><span>Record Not Found</span></div>\n        </li>\n        <li>\n          <div class=\"collapsible-header\">Five</div>\n          <div class=\"collapsible-body\"><span>Lorem ipsum dolor sit amet.</span></div>\n        </li>\n        <li>\n          <div class=\"collapsible-header\">Six</div>\n          <div class=\"collapsible-body\"><span>Lorem ipsum dolor sit amet.</span></div>\n        </li>\n    </ul>\n -->    \n</div>\n\n</div>\n\n        \n    </div>\n\n        <!--  <label class=\"record-label\">No record found </label> -->\n      </div>\n    </div>\n  </div>\n</div>\n<!-- https://www.ortery.com/wp-content/uploads/2015/11/ex-360-png-01.jpg -->\n  <!-- Modal Structure \n<div id=\"modal1\" class=\"modal modal-fixed-footer\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\n\n  <div class=\"modal-content\">\n    <h2>Are you sure that you want to delete this question ?</h2>\n    <p  style=\"margin-top: 30px;\"> Once you delete a question, you cannot reverse it back!</p>\n  </div>\n\n  <div class=\"modal-footer\">\n    <a class=\"waves-effect waves-green btn-flat\" (click)=\"closeModal()\">Cancel</a>\n    <a class=\"waves-effect waves-light btn teal darken-1\" (click)=\"removeItem()\">Delete</a>\n  </div>\n</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/questionaire/next/next.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionaire_service__ = __webpack_require__("../../../../../src/app/questionaire/questionaire.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NextComponent = (function () {
    /*  private itemsToDrop:Array<Object> = [
        {
          name: 'Item to drop 1',
          content: 'desctiption 1'
        },
        {
          name: 'Item to drop 2',
          content: 'desctiption 2'
        },
        {
          name: 'Item to drop 3',
          content: 'desctiption 3'
        },
      ]
      private itemsDropped:Array<any> = [];*/
    function NextComponent(router, activatedRoute, klassService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.klassService = klassService;
        this.queryString = {};
        this.sortBy = "question";
        this.sortOrder = "asc";
        this.items = [];
        this.tmpItems = [];
        this.seletedItemsCategory = [];
        this.itemsTotal = null;
    }
    NextComponent.prototype.ngOnInit = function () {
        //$( "#selectedQ" ).hide();
        var _this = this;
        this.language = 'en';
        this.activatedRoute.params.subscribe(function (params) {
            _this.itemID = params['__id'];
        });
        this.getItems();
        this.getCategorySeletedQ();
    };
    NextComponent.prototype.getItems = function () {
        var _this = this;
        this.items = [];
        this.busy = this.klassService.getItems(this.language, 'userquestionsbycategory').then(function (res) {
            if (!res)
                return true;
            _this.items = res.data;
            _this.tmpItems = _this.items;
            _this.itemsTotal = _this.items.length;
            //this.notificationsService.notify('success', "Successfully Fetched and Drag & drop ready");
        });
    };
    NextComponent.prototype.getCategorySeletedQ = function () {
        var _this = this;
        this.items = [];
        this.busy = this.klassService.getItems(this.language, 'categories').then(function (res) {
            if (!res)
                return true;
            var selectedData = [];
            //console .log(this.seletedItems);
            selectedData = res.data;
            selectedData.forEach(function (row, index) {
                row["itemsDropped"] = [];
            });
            _this.seletedItemsCategory = selectedData;
        });
    };
    /* private releaseDrop(event){
       let index = this.items.itemsDropped.indexOf(event);
       if (index >= 0){
         this.items.itemsDropped.splice(index,1);
       }
     }*/
    NextComponent.prototype.addDropItem = function (event, indexOn) {
        /*console.log (event);
        console.log(this.seletedItemsCategory);
        console.log(indexOn);*/
        // var internalInstanceOfNotification = this.notificationsService;
        this.seletedItemsCategory.forEach(function (value, index) {
            //console.log(index+'======='+indexOn) ;
            if (index == indexOn) {
                if (value._id == event.categoryId) {
                    //console.log("val******************************", value.itemsDropped) ;
                    var droppedItems = value.itemsDropped;
                    if (droppedItems.length > 0) {
                        //console.log("dropped items ======================", droppedItems) ;
                        //droppedItems.forEach(function (row, index) {
                        //    console.log( "row-=-=-=-=-=-", row );
                        var valueArr = droppedItems.map(function (item) { return item.question; });
                        var arraycontainsturtles = (valueArr.indexOf(event.question) > -1);
                        //console.log(event.question);
                        //console.log(arraycontainsturtles) ;
                        if (arraycontainsturtles == false) {
                            value.itemsDropped.push(event);
                            console.log("Dropped");
                            // internalInstanceOfNotification.notify('success', "Dropped more item");
                        }
                        else {
                            console.log("Already exist");
                            // internalInstanceOfNotification.notify('error', "Already exist");
                        }
                        //});
                        // end droppedItems.forEach
                    }
                    else {
                        value.itemsDropped.push(event);
                        console.log("Dropped");
                        // internalInstanceOfNotification.notify('success', "Dropped");
                    }
                }
                else {
                    // internalInstanceOfNotification.notify('error', "Wrong Category");
                    console.log("Wrong Category");
                }
            }
        });
        //console.log(this.seletedItemsCategory);    
    };
    NextComponent.prototype.reomveDroppedItem = function (event, mainIndex, innerIndex) {
        /*console.log(event) ;
        console.log(mainIndex) ;
        console.log(innerIndex) ;*/
        console.log(this.seletedItemsCategory[mainIndex].itemsDropped[innerIndex]);
        this.seletedItemsCategory[mainIndex].itemsDropped.splice(innerIndex);
        //console.log(this.seletedItemsCategory);
        // this.notificationsService.notify('success', "Deleted successfully.");
    };
    NextComponent.prototype.save = function () {
        var _this = this;
        console.log(this.seletedItemsCategory);
        this.busy = this.klassService.updateItem(this.itemID, this.seletedItemsCategory, this.language, 'savequestions').then(function (res) {
            if (!res)
                return true;
            _this.router.navigate(['/questionaire']);
            // this.notificationsService.notify('success', "Saved successfully.");
        });
    };
    return NextComponent;
}());
NextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-next',
        template: __webpack_require__("../../../../../src/app/questionaire/next/next.component.html"),
        styles: [__webpack_require__("../../../../../src/app/questionaire/next/next.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__questionaire_service__["a" /* QuestionaireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__questionaire_service__["a" /* QuestionaireService */]) === "function" && _c || Object])
], NextComponent);

var _a, _b, _c;
//# sourceMappingURL=next.component.js.map

/***/ }),

/***/ "../../../../../src/app/questionaire/questionaire.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questionaire/questionaire.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/questionaire/questionaire.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionaireComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionaireComponent = (function () {
    function QuestionaireComponent() {
    }
    QuestionaireComponent.prototype.ngOnInit = function () {
    };
    return QuestionaireComponent;
}());
QuestionaireComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-questionaire',
        template: __webpack_require__("../../../../../src/app/questionaire/questionaire.component.html"),
        styles: [__webpack_require__("../../../../../src/app/questionaire/questionaire.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuestionaireComponent);

//# sourceMappingURL=questionaire.component.js.map

/***/ }),

/***/ "../../../../../src/app/questionaire/questionaire.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionaireModule", function() { return QuestionaireModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_shared_module__ = __webpack_require__("../../../../../src/app/shared/app-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionaire_routing__ = __webpack_require__("../../../../../src/app/questionaire/questionaire.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_imageupload__ = __webpack_require__("../../../../ng2-imageupload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_imageupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_imageupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular4_drag_drop__ = __webpack_require__("../../../../angular4-drag-drop/angular4-drag-drop.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionaire_component__ = __webpack_require__("../../../../../src/app/questionaire/questionaire.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_form_component__ = __webpack_require__("../../../../../src/app/questionaire/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__listing_listing_component__ = __webpack_require__("../../../../../src/app/questionaire/listing/listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_questions_listing_listing_component__ = __webpack_require__("../../../../../src/app/questionaire/user-questions/listing/listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_questions_form_form_component__ = __webpack_require__("../../../../../src/app/questionaire/user-questions/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_questions_view_view_component__ = __webpack_require__("../../../../../src/app/questionaire/user-questions/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__next_next_component__ = __webpack_require__("../../../../../src/app/questionaire/next/next.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__questionaire_service__ = __webpack_require__("../../../../../src/app/questionaire/questionaire.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_questions_user_questions_service__ = __webpack_require__("../../../../../src/app/questionaire/user-questions/user-questions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Import your library


//  angular4-drag-drop /** npm i angular4-drag-drop --save **/










var QuestionaireModule = (function () {
    function QuestionaireModule() {
    }
    return QuestionaireModule;
}());
QuestionaireModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_app_shared_module__["a" /* AppSharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__questionaire_routing__["a" /* QuestionaireRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_imageupload__["ImageUploadModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular4_drag_drop__["a" /* DragDropDirectiveModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__questionaire_service__["a" /* QuestionaireService */], __WEBPACK_IMPORTED_MODULE_14__user_questions_user_questions_service__["a" /* UserQuestionsService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__questionaire_component__["a" /* QuestionaireComponent */], __WEBPACK_IMPORTED_MODULE_7__form_form_component__["a" /* FormComponent */], __WEBPACK_IMPORTED_MODULE_8__listing_listing_component__["a" /* ListingComponent */], __WEBPACK_IMPORTED_MODULE_9__user_questions_listing_listing_component__["a" /* UserQuestionsListingComponent */], __WEBPACK_IMPORTED_MODULE_10__user_questions_form_form_component__["a" /* UserQuestionsFormComponent */], __WEBPACK_IMPORTED_MODULE_11__user_questions_view_view_component__["a" /* UserQuestionsViewComponent */], __WEBPACK_IMPORTED_MODULE_12__next_next_component__["a" /* NextComponent */]]
    })
], QuestionaireModule);

//# sourceMappingURL=questionaire.module.js.map

/***/ }),

/***/ "../../../../../src/app/questionaire/questionaire.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionaireRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionaire_component__ = __webpack_require__("../../../../../src/app/questionaire/questionaire.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_form_component__ = __webpack_require__("../../../../../src/app/questionaire/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listing_listing_component__ = __webpack_require__("../../../../../src/app/questionaire/listing/listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_questions_listing_listing_component__ = __webpack_require__("../../../../../src/app/questionaire/user-questions/listing/listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_questions_form_form_component__ = __webpack_require__("../../../../../src/app/questionaire/user-questions/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_questions_view_view_component__ = __webpack_require__("../../../../../src/app/questionaire/user-questions/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__next_next_component__ = __webpack_require__("../../../../../src/app/questionaire/next/next.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__questionaire_component__["a" /* QuestionaireComponent */],
        data: { title: 'Survey' },
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__listing_listing_component__["a" /* ListingComponent */], data: { title: '' } },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_3__form_form_component__["a" /* FormComponent */], data: { title: 'New' } },
            { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_3__form_form_component__["a" /* FormComponent */], data: { title: 'Edit' } },
            { path: ':__id/next', component: __WEBPACK_IMPORTED_MODULE_8__next_next_component__["a" /* NextComponent */], data: { title: 'Add question for Survey' } },
            { path: 'user-questions', component: __WEBPACK_IMPORTED_MODULE_5__user_questions_listing_listing_component__["a" /* UserQuestionsListingComponent */], data: { title: 'Questions' } },
            { path: 'user-questions/new', component: __WEBPACK_IMPORTED_MODULE_6__user_questions_form_form_component__["a" /* UserQuestionsFormComponent */], data: { title: 'Add questions' } },
            { path: 'user-questions/:id/view', component: __WEBPACK_IMPORTED_MODULE_7__user_questions_view_view_component__["a" /* UserQuestionsViewComponent */], data: { title: 'View User questions' } },
            { path: 'user-questions/:id/edit', component: __WEBPACK_IMPORTED_MODULE_6__user_questions_form_form_component__["a" /* UserQuestionsFormComponent */], data: { title: 'Edit User questions' } },
        ]
    }
];
var QuestionaireRoutingModule = (function () {
    function QuestionaireRoutingModule() {
    }
    return QuestionaireRoutingModule;
}());
QuestionaireRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], QuestionaireRoutingModule);

//# sourceMappingURL=questionaire.routing.js.map

/***/ }),

/***/ "../../../../../src/app/questionaire/questionaire.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionaireService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_base_service__ = __webpack_require__("../../../../../src/app/services/base-service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionaireService = (function (_super) {
    __extends(QuestionaireService, _super);
    function QuestionaireService(_router, http) {
        var _this = _super.call(this, http, 'questionnaire') || this;
        _this._router = _router;
        _this.http = http;
        return _this;
    }
    return QuestionaireService;
}(__WEBPACK_IMPORTED_MODULE_3__services_base_service__["a" /* BaseService */]));
QuestionaireService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], QuestionaireService);

var _a, _b;
//# sourceMappingURL=questionaire.service.js.map

/***/ }),

/***/ "../../../../../src/app/questionaire/user-questions/form/form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".question-image{\n    width: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questionaire/user-questions/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sb2-2-3\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"box-inn-sp\">\n                <div class=\"inn-title\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <h4 class=\"header-label\">{{ isEditable ? \"Edit\" : \"Add New\" }} User Question</h4>\n                    </div>\n                    <div class=\"col-md-6 text-right\">\n                      \n                    <a  class=\"waves-effect waves-light btn cancel submit-btn \" routerLink=\"/questionaire/user-questions\" form=\"main-form\"> cancel</a>                        \n                      <a class=\"waves-effect waves-light btn teal lighten-2 submit-btn \" [ngClass]=\"{'disabled': !mainForm.valid || !mainForm.dirty || !mainForm.touched}\"  form=\"main-form\" (click)=\"save()\"> submit</a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-inn\">\n                    <div [ngBusy]=\"busy\"></div>\n                    <form #mainForm=\"ngForm\" id=\"main-form\" novalidate>\n                    <div class=\"row\">\n                      <div class=\"col s12\">\n                        <ul class=\"tabs\" materialize=\"tabs\">\n                            <li class=\"tab col s3\"><a href=\"#test1\" class=\"active\">Main</a></li>\n                            <li *ngIf=\"isEditable\" class=\"tab col s3\"><a href=\"#test2\">Answer</a></li>\n                        </ul>\n                      </div>\n                      <div id=\"test1\" class=\"col s12 mt15\">\n                        <div class=\"row\">\n                           <div class=\"input-field col s6\" *ngIf=\"language==='en'\">\n                                <select materialize=\"material_select\" [disabled]=\"isEditable\"\n                                *ngIf=\"category.length > 0\" (change)=\"getCetagoryQuestion($event.target.value)\" required [(ngModel)]=\"item.categoryId\" name=\"item.categoryId\">\n                                      <option value=\"\" selected>Choose Category *</option>\n                                      <option *ngFor=\"let type of category\"  [value]=\"type._id\">\n                                        {{type.name}}\n                                      </option>\n                                </select>\n                            </div>\n\n                            <!-- <div class=\"input-field col s6\" *ngIf=\"language==='en'\">\n                                <select materialize=\"material_select\" [disabled]=\"isEditable\"\n                                   (change)=\"checkSelectedQuestion($event.target.value)\" [(ngModel)]=\"item.dependency\" name=\"item.dependency\">\n                                 <option value=\"\" selected>Primery Question</option>\n                                     <option *ngFor=\"let q of dependencyQuestions  let i = index\"  [value]=\"q._id\">\n                                        {{ q.question }}\n                                      </option>\n                                </select>\n                            </div> -->\n                        </div>  \n\n                        <div class=\"row\" *ngIf=\"showdependency\" >\n                            <div class=\"input-field col s6\">\n                              <input id=\"question\" type=\"text\" [(ngModel)]=\"item.dependencyAnswer\" name=\"answer\" readonly=\"readonly\" >\n                            </div>\n                        </div> \n\n                        <div class=\"row\">\n                          <div class=\"input-field col s6\">\n                                <input id=\"question\" type=\"text\" [(ngModel)]=\"item.question\" name=\"question\"\n                                  class=\"validate\" #question=\"ngModel\" required minlength=\"3\" maxlength=\"150\">\n                                <label for=\"question\" [ngClass]=\"{'active': item?.question}\">Question *</label>\n\n                                <div *ngIf=\"question.invalid && (question.dirty || question.touched)\" class=\"text-danger\">\n                                  <p *ngIf=\"question.errors.required\">Question is required.</p>\n                                  <p *ngIf=\"question.errors.minlength\">Minimum of 3 characters</p>\n                                  <p *ngIf=\"question.errors.maxlength\">Maximum of 120 characters</p>\n                                </div>\n                            </div>\n\n                            <div class=\"input-field col s6\" *ngIf=\"language==='en'\">\n                                <select  materialize=\"material_select\" [disabled]=\"isEditable\" [(ngModel)]=\"item.elementType\" name=\"item.elementType\">\n                                 <!-- <option value=\"\" disabled selected>Element Type</option> -->\n                                      <option *ngFor=\"let type of elementTypes\"  [value]=\"type\">\n                                        {{ type }}\n                                      </option>\n                                    </select>\n                            </div>\n\n                        </div>  \n\n                        <div class=\"row\">\n                          <!-- <div class=\"input-field col s6\" *ngIf=\"language==='en'\">\n                              <select  materialize=\"material_select\" [disabled]=\"isEditable\" [(ngModel)]=\"item.gender\" name=\"item.gender\">\n                                   <option *ngFor=\"let gender of genders\"  [value]=\"gender\">\n                                      {{ gender }}\n                                    </option>\n                                  </select>\n                          </div> -->\n                            <div class=\"input-field col s6\">\n                                <input id=\"variable\" type=\"text\" [(ngModel)]=\"item.variable\" name=\"variable\"\n                                class=\"validate\" #variable=\"ngModel\" required minlength=\"3\" maxlength=\"150\">\n                                <label for=\"variable\" [ngClass]=\"{'active': item?.variable}\">Question variable *</label>\n                                <div *ngIf=\"variable.invalid && (variable.dirty || variable.touched)\" class=\"text-danger\">\n                                    <p *ngIf=\"variable.errors.required\">Question variable is required.</p>\n                                    <p *ngIf=\"variable.errors.minlength\">Minimum of 3 characters</p>\n                                    <p *ngIf=\"variable.errors.maxlength\">Maximum of 120 characters</p>\n                                </div>\n                            </div>\n                            <div style=\"height:500px\" class=\"input-field col s6\" *ngIf=\"language==='en'\">\n                                <select  multiple materialize=\"material_select\" [(ngModel)]=\"item.interventions\" name=\"item.interventions\">\n                                    <option value=\"\" disabled selected>Select Interventions</option>\n                                    <option *ngFor=\"let type of input\"  [value]=\"type\">{{ type }}</option>\n                                </select>\n                            </div>\n\n                        </div>\n</div>\n\n\n\n<div *ngIf=\"isEditable\" id=\"test2\" class=\"col s12 mt15\">\n     \n    <div class=\"row\">\n      \n        <div class=\"col s3\">     \n          <div class=\"card-panel\">\n            <span class=\"blue-text text-darken-2\">\n            <h4 class=\"left-align\">\n                 Question and Answer\n            </h4>\n            </span>\n          </div>\n        </div>        \n        <div class=\"col s9\">\n          <div class=\"card-panel\">\n              <span class=\"blue-text text-darken-2\">\n                 {{item.question}}\n                 <h5 class=\"left-align\">\n                  {{item.elementType}}\n                  </h5>\n              </span>    \n          </div>    \n        </div>\n\n    </div>\n\n<div *ngIf=\"isAnswerOption\"  >\n\n  <div class=\"row\" *ngFor=\"let answerKey of item.answerKeys; let i = index;  trackBy:trackByIndex\">\n      \n        <div class=\"col s3\">     \n          <div class=\"card-panel\">\n            <span class=\"blue-text text-darken-2\">\n            <h4 class=\"left-align\">\n                 Answer option {{i+1}}\n            </h4>\n            </span>\n          </div>\n        </div>        \n        \n        <div class=\"col s9\">     \n          <div class=\"input-field col s3\">\n              <input id=\"displayText-{{answerKey.answer_id}}\" [(ngModel)]=\"answerKey.displayText\" placeholder=\"Enter Display text\" type=\"text\" name=\"answerOptions-{{answerKey.answer_id}}\">\n          </div>\n          <div class=\"input-field col s3\">\n              <input id=\"answerValue-{{answerKey.answer_id}}\" [(ngModel)]=\"answerKey.answerValue\" placeholder=\"Enter Answer Value\"  type=\"text\" name=\"answerValue-{{answerKey.answer_id}}\">\n          </div>\n          <!-- <div class=\"input-field col s1\">\n              <input id=\"answerScore-{{answerKey.answer_id}}\" [(ngModel)]=\"answerKey.answerScore\" placeholder=\"Score\" type=\"text\" name=\"answerScore-{{answerKey.answer_id}}\">\n          </div>\n          <div class=\"input-field col s2\">\n              <input id=\"displayOrder-{{answerKey.answer_id}}\" [(ngModel)]=\"answerKey.displayOrder\" placeholder=\"Sort Order\" type=\"text\" name=\"displayOrder-{{answerKey.answer_id}}\">\n          </div> -->\n          <div class=\"input-field col s1\">\n               <a (click)=\"removeOption()\" class=\"btn-floating btn-small waves-effect waves-light red\"><i class=\"material-icons\">remove</i></a>\n          </div>\n        </div>\n\n  </div>\n\n    <div class=\"row\">\n      <div class=\"col s3\">\n        <a (click)=\"addOption(item.answerKeys.length)\" class=\"btn-floating btn-large waves-effect waves-light green\"><i class=\"material-icons\">add</i></a>\n      </div>\n    </div> \n</div>\n\n\n</div>\n                    </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/questionaire/user-questions/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserQuestionsFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_questions_service__ = __webpack_require__("../../../../../src/app/questionaire/user-questions/user-questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_base_form__ = __webpack_require__("../../../../../src/app/shared/base-form.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserQuestionsFormComponent = (function (_super) {
    __extends(UserQuestionsFormComponent, _super);
    function UserQuestionsFormComponent(router, activatedRoute, klassService, 
        // private notificationsService: NotificationsService,
        sanitizer) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.klassService = klassService;
        _this.sanitizer = sanitizer;
        _this.category = [];
        _this.primary = false;
        _this.dependencyQuestions = [];
        _this.showdependency = false;
        _this.elementTypes = [];
        _this.genders = [];
        _this.isAnswerOption = false;
        // answers: any = [];
        _this.input = [];
        _this.minimum = 1;
        _this.maximum = 54;
        return _this;
    }
    UserQuestionsFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.language = 'en';
        this.getCategoryItems();
        this.item.categoryId = "";
        this.item.answerKeys = [];
        this.item.elementType = "Text";
        this.item.gender = "Both";
        this.elementTypes = ["Text", "Radio"];
        this.genders = ["Male", "Female", "Both"];
        // subscribe to router event
        this.activatedRoute.params.subscribe(function (params) {
            _this.itemID = params['id'];
            if (_this.itemID) {
                _this.isEditable = true;
                _this.getItem();
            }
        });
        this.interventionsList();
    };
    UserQuestionsFormComponent.prototype.getItem = function () {
        var _this = this;
        this.busy = this.klassService.getItem(this.itemID, this.language, 'userquestions/edit').then(function (res) {
            console.log(res);
            if (!res)
                return true;
            _this.item = res.data;
            console.log(res.data.answerKeys.length);
            if (_this.item.elementType == 'Radio' || _this.item.elementType == 'Scroll Bar') {
                if (res.data.answerKeys.length > 0) {
                    _this.item.answerKeys = res.data.answerKeys;
                }
            }
            _this.isAnswerOption = _this.item.elementType == 'Radio' || _this.item.elementType == 'Scroll Bar' ? true : false;
        });
    };
    UserQuestionsFormComponent.prototype.getCategoryItems = function () {
        var _this = this;
        this.busy = this.klassService.getItems(this.language, 'categories').then(function (res) {
            if (!res)
                return true;
            _this.category = res.data;
        });
    };
    UserQuestionsFormComponent.prototype.getCetagoryQuestion = function (categoryId) {
        var _this = this;
        this.dependencyQuestions = [];
        this.busy = this.klassService.getItems(this.language, 'categoryquestions/' + categoryId).then(function (res) {
            if (!res)
                return true;
            if (res.data.length > 0) {
                _this.dependencyQuestions = res.data;
                if (res.data.length > 0) {
                    _this.item.dependency = res.data[0]._id;
                }
            }
        });
    };
    UserQuestionsFormComponent.prototype.checkSelectedQuestion = function (qId) {
        if (qId != '') {
            this.showdependency = true;
            this.item.dependencyAnswer = "Yes";
        }
        else {
            this.showdependency = false;
        }
    };
    UserQuestionsFormComponent.prototype.createItem = function () {
        var _this = this;
        this.busy = this.klassService.addItem(this.item, this.language, 'userquestions')
            .then(function (res) {
            if (!res)
                return true;
            _this.item = res;
            _this.router.navigate(['/questionaire/user-questions']);
            // this.notificationsService.notify('success', this.constantMessages.questionCreated);
        });
    };
    UserQuestionsFormComponent.prototype.updateItem = function () {
        //console.log(this.answers) ;
        console.log(this.item);
        //this.item.answerKeys = this.answers ;
        this.busy = this.klassService.updateItem(this.itemID, this.item, this.language, 'userquestions').then(function (res) {
            if (!res)
                return true;
            //this.form.form.markAsPristine();
            // this.notificationsService.notify('success', this.constantMessages.questionUpdated);
        });
    };
    UserQuestionsFormComponent.prototype.addOption = function (optionLenght) {
        var answerOption_id = Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        console.log(answerOption_id);
        var newotpion = {
            answer_id: answerOption_id,
            displayText: "",
            answerValue: "",
            answerScore: "",
            displayOrder: ""
        };
        this.item.answerKeys.push(newotpion);
    };
    UserQuestionsFormComponent.prototype.removeOption = function () {
        if (this.item.answerKeys.length == 2) {
            // this.notificationsService.notify('error', "Can't remove less than two.");
            return false;
        }
        else {
            this.item.answerKeys.splice(-1, 1);
        }
    };
    UserQuestionsFormComponent.prototype.interventionsList = function () {
        for (var i = this.minimum; i <= this.maximum; i++) {
            this.input.push(i);
        }
        return this.input;
    };
    return UserQuestionsFormComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_base_form__["a" /* BaseForm */]));
UserQuestionsFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        providers: [],
        template: __webpack_require__("../../../../../src/app/questionaire/user-questions/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/questionaire/user-questions/form/form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_questions_service__["a" /* UserQuestionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_questions_service__["a" /* UserQuestionsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object])
], UserQuestionsFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/questionaire/user-questions/listing/listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-in {\n  width: 100%;\n}\n\n.image-out {\n  width: 35px;\n  height: 45px;\n  overflow: hidden;\n  float: left;\n  margin-right: 10px;\n}\n\n.opt-text {\n  line-height: 45px\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questionaire/user-questions/listing/listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sb2-2-3\">\n<ul class=\"nav nav-tabs tab-list\">\n      <li >\n        <a data-toggle=\"tab\" routerLink=\"/questionaire\">\n        <i class=\"fa fa-object-group \" aria-hidden=\"true\"></i> <span>Survey</span></a>\n      </li>\n      <li class=\"active\">\n          <a data-toggle=\"tab\" routerLink=\"/questionaire/user-questions\">\n            <i class=\"fa fa-question\" aria-hidden=\"true\"></i> <span>User Questions</span>\n          </a>\n        </li>\n  </ul>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"box-inn-sp\">\n        <div class=\"inn-title\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <h4 class=\"header-label\">User Questions</h4>\n            </div>\n\n            <div class=\"col-md-6 text-right\">\n              <form class=\"app-search\">\n                <input type=\"text\" placeholder=\"Search...\" class=\"form-control\" (keyup)=\"searchEquipment($event)\" [(ngModel)]=\"searchTerm\"\n                  name=\"searchTerm\">\n                <a href=\"javascript: void();\" (click)=\"searchEquipment($event)\"><i class=\"fa fa-search\"></i></a>\n              </form>\n            </div>\n\n            <div class=\"col-md-3 text-right\">\n              <a class=\"waves-effect waves-light btn\" routerLink=\"/questionaire/user-questions/new\"> Add New </a>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"tab-inn\">\n          <div class=\"table-responsive table-desi\">\n            <div [ngBusy]=\"busy\"></div>\n            <table class=\"table table-hover\" #mf=\"mfDataTable\" [mfData]=\"items\" [mfRowsOnPage]=\"rowsOnPage\" [mfActivePage]=\"activePage\"\n              [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\" [mfIsServerPagination]=\"false\" (mfOnPageChange)=\"onPageChange($event)\">\n              <thead>\n                <tr>\n                  <th>\n                    <mfDefaultSorter by=\"question\">Question</mfDefaultSorter>\n                  </th>\n                  <th>Category</th>\n                  <th class=\"center-align\">Status</th>\n                  <th class=\"center-align\">Actions</th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"mf.data.length > 0\">\n                <ng-template ngFor let-item [ngForOf]=\"mf.data\" let-i=\"index\">\n                  <tr>\n                    <td class=\"s-question\">\n                      <a class=\"opt-text\" routerLink=\"/questionaire/user-questions/{{item._id}}/view\"> {{ item.question}} </a>\n                    </td>\n                    <td class=\"s-categoryId\">\n                      {{ item.categoryId.name }}\n                    </td>\n\n                    <td class=\"center-align\">\n                      <div class=\"switch\">\n                        <label>\n                            <input type=\"checkbox\" id=\"active\"\n                              [(ngModel)]=\"item.is_active\" name=\"is_active\" (change)=\"toggleStatus(item)\">\n                            <span class=\"lever\"></span>\n                          </label>\n                      </div>\n                    </td>\n                    \n                    <td class=\"center-align\">\n                      <a href=\"javascript: void();\" (click)=\"openModal(item)\">\n                          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                      </a>\n                      <a routerLink=\"/questionaire/user-questions/{{item._id}}/edit\">\n                          <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                      </a>\n                    </td>\n                  </tr>\n                </ng-template>\n              </tbody>\n              <tfoot *ngIf=\"mf.data.length > 0\">\n                <tr>\n                  <td colspan=\"6\">\n                    <mfBootstrapPaginator [rowsOnPageSet]=\"rowsInTable\"></mfBootstrapPaginator>\n                  </td>\n                </tr>\n              </tfoot>\n              <tfoot *ngIf=\"mf.data.length === 0\">\n                <tr>\n                  <td colspan=\"12\" class=\"text-center\">\n                    <label class=\"record-label\">No record found </label>\n                  </td>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal Structure -->\n<div id=\"modal1\" class=\"modal modal-fixed-footer\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\n\n  <div class=\"modal-content\">\n    <h2>Are you sure that you want to delete this question ?</h2>\n    <p  style=\"margin-top: 30px;\"> Once you delete a question, you cannot reverse it back!</p>\n  </div>\n\n  <div class=\"modal-footer\">\n    <a class=\"waves-effect waves-green btn-flat\" (click)=\"closeModal()\">Cancel</a>\n    <a class=\"waves-effect waves-light btn teal darken-1\" (click)=\"removeItem()\">Delete</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/questionaire/user-questions/listing/listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserQuestionsListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_listing__ = __webpack_require__("../../../../../src/app/shared/listing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_questions_service__ = __webpack_require__("../../../../../src/app/questionaire/user-questions/user-questions.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserQuestionsListingComponent = (function (_super) {
    __extends(UserQuestionsListingComponent, _super);
    function UserQuestionsListingComponent(klassService) {
        var _this = _super.call(this) || this;
        _this.klassService = klassService;
        _this.queryString = {};
        _this.sortBy = "question";
        _this.sortOrder = "asc";
        return _this;
    }
    UserQuestionsListingComponent.prototype.ngOnInit = function () {
        this.language = 'en';
        this.getItems();
    };
    UserQuestionsListingComponent.prototype.getItems = function () {
        var _this = this;
        this.items = [];
        this.busy = this.klassService.getXItems(this.filterParams, this.language, 'allUserquestion').then(function (res) {
            if (!res)
                return true;
            _this.items = res.data.filter(function (_item) { return _item.is_deleted != true; });
            _this.tmpItems = _this.items;
            _this.itemsTotal = _this.items.length;
        });
    };
    UserQuestionsListingComponent.prototype.filterItems = function () {
        var _this = this;
        if (this.tmpItems.length == 0)
            this.tmpItems = this.items;
        this.items = this.tmpItems.filter(function (_item) {
            return _item.question.toLowerCase().lastIndexOf(_this.searchTerm.trim().toLowerCase()) != -1;
        });
    };
    UserQuestionsListingComponent.prototype.removeItem = function () {
        var _this = this;
        this.closeModal();
        this.item.is_deleted = true;
        this.busy = this.klassService.removeItem(this.item, this.language, 'question').then(function (res) {
            if (!res)
                return true;
            _this.item = null;
            _this.getItems();
        });
    };
    UserQuestionsListingComponent.prototype.toggleStatus = function (_item) {
        var id = _item._id;
        var obj = { _id: _item._id, is_active: _item.is_active };
        this.busy = this.klassService.toggleStatus(obj, this.language, "question/changeStatus").then(function (res) {
            if (!res)
                return true;
        });
    };
    return UserQuestionsListingComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_listing__["a" /* Listing */]));
UserQuestionsListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listing',
        template: __webpack_require__("../../../../../src/app/questionaire/user-questions/listing/listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/questionaire/user-questions/listing/listing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_questions_service__["a" /* UserQuestionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_questions_service__["a" /* UserQuestionsService */]) === "function" && _a || Object])
], UserQuestionsListingComponent);

var _a;
//# sourceMappingURL=listing.component.js.map

/***/ }),

/***/ "../../../../../src/app/questionaire/user-questions/user-questions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserQuestionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_base_service__ = __webpack_require__("../../../../../src/app/services/base-service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserQuestionsService = (function (_super) {
    __extends(UserQuestionsService, _super);
    function UserQuestionsService(_router, http) {
        var _this = _super.call(this, http, 'userquestions') || this;
        _this._router = _router;
        _this.http = http;
        return _this;
    }
    return UserQuestionsService;
}(__WEBPACK_IMPORTED_MODULE_3__services_base_service__["a" /* BaseService */]));
UserQuestionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], UserQuestionsService);

var _a, _b;
//# sourceMappingURL=user-questions.service.js.map

/***/ }),

/***/ "../../../../../src/app/questionaire/user-questions/view/view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .add-btn{    position: absolute; right: 30px;     top: 19px;} */\n\n.mt15 { margin-top: 15px; }\n.pb10 { padding-bottom: 10px; }\n.font600 { font-weight: 600; }\ninput:not([type]), input[type=text], input[type=password], input[type=email], input[type=url], input[type=time], input[type=date], input[type=datetime], input[type=datetime-local], input[type=tel], input[type=number], input[type=search], textarea.materialize-textarea {\n\tborder-bottom: 0px;\n}\n.tab-inn label { padding-bottom: 2px; font-size: 14px; }\n.input-field label { color: #2CBCD5; }\n.tabs .tab a { color: #A1A1A1; }\n.tabs .tab a:hover, .tabs .tab a.active { color: #0e76a8; }\n.certificate img { max-width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questionaire/user-questions/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"sb2-2-add-blog\">\n  \t<ul class=\"nav nav-tabs tab-list\">\n      <li >\n        <a data-toggle=\"tab\" routerLink=\"/questionaire\">\n        <i class=\"fa fa-object-group \" aria-hidden=\"true\"></i> <span>Survey</span></a>\n      </li>\n      <li class=\"active\">\n          <a data-toggle=\"tab\" routerLink=\"/questionaire/user-questions\">\n            <i class=\"fa fa-question\" aria-hidden=\"true\"></i> <span>User Questions</span>\n          </a>\n        </li>\n    </ul>\n\t\t\t<div class=\"\">\n  \t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t  \t\t\t\t\t<div class=\"box-inn-sp\">\n\n\t\t\t\t\t\t\t<div class=\"inn-title\">\n\t\t  \t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t  \t<h4 class=\"header-label\">User Question details</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 text-right\">\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"waves-effect waves-light btn cancel submit-btn \" routerLink=\"/questionaire/user-questions\" form=\"main-form\"> cancel</a>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t  \t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"tab-inn\">\n\t\t  \t\t\t\t\t\t<div [ngBusy]=\"busy\"></div>\n\n\t\t  \t\t\t\t\t\t<div class=\"row\">\n      \t\t\t\t\t\t\t\t<div id=\"test1\" class=\"col s12 mt15\">\n      \t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t              \t<div class=\"input-field col s6 \">\n\t\t\t\t\t\t\t              \t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t              \t\t\t<label class=\"active\">Category</label>\n\t\t\t\t\t\t\t              \t\t</div>\n\t\t\t\t\t\t\t              \t\t<div class=\"col-md-12 pb10 capitalize\">\n\t\t\t\t\t\t\t              \t\t\t{{item.categoryId?.name}}\n\t\t\t\t\t\t\t              \t\t</div>\n\t\t\t\t\t\t\t              \t</div>\n\n\t\t\t\t\t\t\t              \t<div class=\"input-field col s6\">\n\t\t\t\t\t\t\t                \t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t              \t\t\t<label class=\"active\">Dependency</label>\n\t\t\t\t\t\t\t              \t\t</div>\n\t\t\t\t\t\t\t              \t\t<div class=\"col-md-12 pb10 capitalize\">\n\t\t\t\t\t\t\t              \t\t\t{{item.dependency}}\n\t\t\t\t\t\t\t              \t\t</div>\n\t\t\t\t\t\t\t              \t</div>\n\t\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t\t            <div class=\"row\">\n\t\t\t\t\t\t\t              \t<div class=\"input-field col s6\">\n\t\t\t\t\t\t\t                \t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t              \t\t\t<label class=\"active\">Question</label>\n\t\t\t\t\t\t\t              \t\t</div>\n\t\t\t\t\t\t\t              \t\t<div class=\"col-md-12 pb10\">\n\t\t\t\t\t\t\t              \t\t\t{{item.question}}\n\t\t\t\t\t\t\t              \t\t</div>\n\t\t\t\t\t\t\t              \t</div>\n\n\t\t\t\t\t\t\t              \t<div class=\"input-field col s6\">\n\t\t\t\t\t\t\t                \t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t              \t\t\t<label class=\"active\">Element Type</label>\n\t\t\t\t\t\t\t              \t\t</div>\n\t\t\t\t\t\t\t              \t\t<div class=\"col-md-12 pb10\">\n\t\t\t\t\t\t\t              \t\t\t{{item.elementType}}\n\t\t\t\t\t\t\t              \t\t</div>\n\t\t\t\t\t\t\t              \t</div>\n\t\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t\t            <div class=\"row\">\n\t\t\t\t\t\t\t              \t<div class=\"input-field col s6\">\n\t\t\t\t\t\t\t                \t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t              \t\t\t<label class=\"active\">gender</label>\n\t\t\t\t\t\t\t              \t\t</div>\n\t\t\t\t\t\t\t              \t\t<div class=\"col-md-12 pb10\">\n\t\t\t\t\t\t\t              \t\t\t{{item.gender}}\n\t\t\t\t\t\t\t              \t\t</div>\n\t\t\t\t\t\t\t              \t</div>\n\t\t\t\t\t\t\t              \t<div class=\"input-field col s6\">\n\t\t\t\t\t\t\t                \t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t              \t\t\t<label class=\"active\">Status</label>\n\t\t\t\t\t\t\t              \t\t</div>\n\t\t\t\t\t\t\t              \t\t<div class=\"col-md-12 pb10\">{{item.is_active}}</div>\n\t\t\t\t\t\t\t              \t</div>\n\t\t\t\t\t\t\t            </div>\n      \t\t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t  \t\t\t\t\t</div>\n\t\t\t\t\t</div>\n  \t\t\t\t</div>\n\t\t\t</div>\n\t  \t\n  \t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/questionaire/user-questions/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserQuestionsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_questions_service__ = __webpack_require__("../../../../../src/app/questionaire/user-questions/user-questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserQuestionsViewComponent = (function () {
    function UserQuestionsViewComponent(router, activatedRoute, klassService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.klassService = klassService;
        this.itemID = null;
        this.item = {};
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.API_URL;
        this.socketUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.SOCKET_URL;
    }
    UserQuestionsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.itemID = params['id'];
            _this.getItem();
        });
    };
    UserQuestionsViewComponent.prototype.getItem = function () {
        var _this = this;
        this.busy = this.klassService.getItem(this.itemID, 'userquestions').then(function (res) {
            if (!res)
                return true;
            _this.item = res.data;
            console.log(_this.item);
        });
    };
    return UserQuestionsViewComponent;
}());
UserQuestionsViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view',
        template: __webpack_require__("../../../../../src/app/questionaire/user-questions/view/view.component.html"),
        providers: [],
        styles: [__webpack_require__("../../../../../src/app/questionaire/user-questions/view/view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__user_questions_service__["a" /* UserQuestionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_questions_service__["a" /* UserQuestionsService */]) === "function" && _c || Object])
], UserQuestionsViewComponent);

var _a, _b, _c;
//# sourceMappingURL=view.component.js.map

/***/ }),

/***/ "../../../../angular4-drag-drop/angular4-drag-drop.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropDirectiveModule; });
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* unused harmony export ɵc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");


var __extends = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @license Angular v4.1.3
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This class should not be used directly by an application developer. Instead, use
 * {\@link Location}.
 *
 * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
 * agnostic.
 * This means that we can have different implementation of `PlatformLocation` for the different
 * platforms that angular supports. For example, `\@angular/platform-browser` provides an
 * implementation specific to the browser environment, while `\@angular/platform-webworker` provides
 * one suitable for use with web workers.
 *
 * The `PlatformLocation` class is used directly by all implementations of {\@link LocationStrategy}
 * when they need to interact with the DOM apis like pushState, popState, etc...
 *
 * {\@link LocationStrategy} in turn is used by the {\@link Location} service which is used directly
 * by the {\@link Router} in order to navigate between routes. Since all interactions between {\@link
 * Router} /
 * {\@link Location} / {\@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
 * class they are all platform independent.
 *
 * \@stable
 * @abstract
 */
var PlatformLocation = (function () {
    function PlatformLocation() {
    }
    /**
     * @abstract
     * @return {?}
     */
    PlatformLocation.prototype.getBaseHrefFromDOM = function () { };
    /**
     * @abstract
     * @param {?} fn
     * @return {?}
     */
    PlatformLocation.prototype.onPopState = function (fn) { };
    /**
     * @abstract
     * @param {?} fn
     * @return {?}
     */
    PlatformLocation.prototype.onHashChange = function (fn) { };
    /**
     * @abstract
     * @return {?}
     */
    PlatformLocation.prototype.pathname = function () { };
    /**
     * @abstract
     * @return {?}
     */
    PlatformLocation.prototype.search = function () { };
    /**
     * @abstract
     * @return {?}
     */
    PlatformLocation.prototype.hash = function () { };
    /**
     * @abstract
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    PlatformLocation.prototype.replaceState = function (state, title, url) { };
    /**
     * @abstract
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    PlatformLocation.prototype.pushState = function (state, title, url) { };
    /**
     * @abstract
     * @return {?}
     */
    PlatformLocation.prototype.forward = function () { };
    /**
     * @abstract
     * @return {?}
     */
    PlatformLocation.prototype.back = function () { };
    return PlatformLocation;
}());
/**
 * \@whatItDoes indicates when a location is initialized
 * \@experimental
 */
var LOCATION_INITIALIZED = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Location Initialized');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `LocationStrategy` is responsible for representing and reading route state
 * from the browser's URL. Angular provides two strategies:
 * {\@link HashLocationStrategy} and {\@link PathLocationStrategy}.
 *
 * This is used under the hood of the {\@link Location} service.
 *
 * Applications should use the {\@link Router} or {\@link Location} services to
 * interact with application route state.
 *
 * For instance, {\@link HashLocationStrategy} produces URLs like
 * `http://example.com#/foo`, and {\@link PathLocationStrategy} produces
 * `http://example.com/foo` as an equivalent URL.
 *
 * See these two classes for more.
 *
 * \@stable
 * @abstract
 */
var LocationStrategy = (function () {
    function LocationStrategy() {
    }
    /**
     * @abstract
     * @param {?=} includeHash
     * @return {?}
     */
    LocationStrategy.prototype.path = function (includeHash) { };
    /**
     * @abstract
     * @param {?} internal
     * @return {?}
     */
    LocationStrategy.prototype.prepareExternalUrl = function (internal) { };
    /**
     * @abstract
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    LocationStrategy.prototype.pushState = function (state, title, url, queryParams) { };
    /**
     * @abstract
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    LocationStrategy.prototype.replaceState = function (state, title, url, queryParams) { };
    /**
     * @abstract
     * @return {?}
     */
    LocationStrategy.prototype.forward = function () { };
    /**
     * @abstract
     * @return {?}
     */
    LocationStrategy.prototype.back = function () { };
    /**
     * @abstract
     * @param {?} fn
     * @return {?}
     */
    LocationStrategy.prototype.onPopState = function (fn) { };
    /**
     * @abstract
     * @return {?}
     */
    LocationStrategy.prototype.getBaseHref = function () { };
    return LocationStrategy;
}());
/**
 * The `APP_BASE_HREF` token represents the base href to be used with the
 * {\@link PathLocationStrategy}.
 *
 * If you're using {\@link PathLocationStrategy}, you must provide a provider to a string
 * representing the URL prefix that should be preserved when generating and recognizing
 * URLs.
 *
 * ### Example
 *
 * ```typescript
 * import {Component, NgModule} from '\@angular/core';
 * import {APP_BASE_HREF} from '\@angular/common';
 *
 * \@NgModule({
 *   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
 * })
 * class AppModule {}
 * ```
 *
 * \@stable
 */
var APP_BASE_HREF = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('appBaseHref');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes `Location` is a service that applications can use to interact with a browser's URL.
 * \@description
 * Depending on which {\@link LocationStrategy} is used, `Location` will either persist
 * to the URL's path or the URL's hash segment.
 *
 * Note: it's better to use {\@link Router#navigate} service to trigger route changes. Use
 * `Location` only if you need to interact with or create normalized URLs outside of
 * routing.
 *
 * `Location` is responsible for normalizing the URL against the application's base href.
 * A normalized URL is absolute from the URL host, includes the application's base href, and has no
 * trailing slash:
 * - `/my/app/user/123` is normalized
 * - `my/app/user/123` **is not** normalized
 * - `/my/app/user/123/` **is not** normalized
 *
 * ### Example
 * {\@example common/location/ts/path_location_component.ts region='LocationComponent'}
 * \@stable
 */
var Location = (function () {
    /**
     * @param {?} platformStrategy
     */
    function Location(platformStrategy) {
        var _this = this;
        /**
         * \@internal
         */
        this._subject = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._platformStrategy = platformStrategy;
        var browserBaseHref = this._platformStrategy.getBaseHref();
        this._baseHref = Location.stripTrailingSlash(_stripIndexHtml(browserBaseHref));
        this._platformStrategy.onPopState(function (ev) {
            _this._subject.emit({
                'url': _this.path(true),
                'pop': true,
                'type': ev.type,
            });
        });
    }
    /**
     * @param {?=} includeHash
     * @return {?}
     */
    Location.prototype.path = function (includeHash) {
        if (includeHash === void 0) { includeHash = false; }
        return this.normalize(this._platformStrategy.path(includeHash));
    };
    /**
     * Normalizes the given path and compares to the current normalized path.
     * @param {?} path
     * @param {?=} query
     * @return {?}
     */
    Location.prototype.isCurrentPathEqualTo = function (path, query) {
        if (query === void 0) { query = ''; }
        return this.path() == this.normalize(path + Location.normalizeQueryParams(query));
    };
    /**
     * Given a string representing a URL, returns the normalized URL path without leading or
     * trailing slashes.
     * @param {?} url
     * @return {?}
     */
    Location.prototype.normalize = function (url) {
        return Location.stripTrailingSlash(_stripBaseHref(this._baseHref, _stripIndexHtml(url)));
    };
    /**
     * Given a string representing a URL, returns the platform-specific external URL path.
     * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
     * before normalizing. This method will also add a hash if `HashLocationStrategy` is
     * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
     * @param {?} url
     * @return {?}
     */
    Location.prototype.prepareExternalUrl = function (url) {
        if (url && url[0] !== '/') {
            url = '/' + url;
        }
        return this._platformStrategy.prepareExternalUrl(url);
    };
    /**
     * Changes the browsers URL to the normalized version of the given URL, and pushes a
     * new item onto the platform's history.
     * @param {?} path
     * @param {?=} query
     * @return {?}
     */
    Location.prototype.go = function (path, query) {
        if (query === void 0) { query = ''; }
        this._platformStrategy.pushState(null, '', path, query);
    };
    /**
     * Changes the browsers URL to the normalized version of the given URL, and replaces
     * the top item on the platform's history stack.
     * @param {?} path
     * @param {?=} query
     * @return {?}
     */
    Location.prototype.replaceState = function (path, query) {
        if (query === void 0) { query = ''; }
        this._platformStrategy.replaceState(null, '', path, query);
    };
    /**
     * Navigates forward in the platform's history.
     * @return {?}
     */
    Location.prototype.forward = function () { this._platformStrategy.forward(); };
    /**
     * Navigates back in the platform's history.
     * @return {?}
     */
    Location.prototype.back = function () { this._platformStrategy.back(); };
    /**
     * Subscribe to the platform's `popState` events.
     * @param {?} onNext
     * @param {?=} onThrow
     * @param {?=} onReturn
     * @return {?}
     */
    Location.prototype.subscribe = function (onNext, onThrow, onReturn) {
        return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
    };
    /**
     * Given a string of url parameters, prepend with '?' if needed, otherwise return parameters as
     * is.
     * @param {?} params
     * @return {?}
     */
    Location.normalizeQueryParams = function (params) {
        return params && params[0] !== '?' ? '?' + params : params;
    };
    /**
     * Given 2 parts of a url, join them with a slash if needed.
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    Location.joinWithSlash = function (start, end) {
        if (start.length == 0) {
            return end;
        }
        if (end.length == 0) {
            return start;
        }
        var /** @type {?} */ slashes = 0;
        if (start.endsWith('/')) {
            slashes++;
        }
        if (end.startsWith('/')) {
            slashes++;
        }
        if (slashes == 2) {
            return start + end.substring(1);
        }
        if (slashes == 1) {
            return start + end;
        }
        return start + '/' + end;
    };
    /**
     * If url has a trailing slash, remove it, otherwise return url as is.
     * @param {?} url
     * @return {?}
     */
    Location.stripTrailingSlash = function (url) { return url.replace(/\/$/, ''); };
    return Location;
}());
Location.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
Location.ctorParameters = function () { return [
    { type: LocationStrategy, },
]; };
/**
 * @param {?} baseHref
 * @param {?} url
 * @return {?}
 */
function _stripBaseHref(baseHref, url) {
    return baseHref && url.startsWith(baseHref) ? url.substring(baseHref.length) : url;
}
/**
 * @param {?} url
 * @return {?}
 */
function _stripIndexHtml(url) {
    return url.replace(/\/index.html$/, '');
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Use URL hash for storing application location data.
 * \@description
 * `HashLocationStrategy` is a {\@link LocationStrategy} used to configure the
 * {\@link Location} service to represent its state in the
 * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
 * of the browser's URL.
 *
 * For instance, if you call `location.go('/foo')`, the browser's URL will become
 * `example.com#/foo`.
 *
 * ### Example
 *
 * {\@example common/location/ts/hash_location_component.ts region='LocationComponent'}
 *
 * \@stable
 */
var HashLocationStrategy = (function (_super) {
    __extends(HashLocationStrategy, _super);
    /**
     * @param {?} _platformLocation
     * @param {?=} _baseHref
     */
    function HashLocationStrategy(_platformLocation, _baseHref) {
        var _this = _super.call(this) || this;
        _this._platformLocation = _platformLocation;
        _this._baseHref = '';
        if (_baseHref != null) {
            _this._baseHref = _baseHref;
        }
        return _this;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    HashLocationStrategy.prototype.onPopState = function (fn) {
        this._platformLocation.onPopState(fn);
        this._platformLocation.onHashChange(fn);
    };
    /**
     * @return {?}
     */
    HashLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
    /**
     * @param {?=} includeHash
     * @return {?}
     */
    HashLocationStrategy.prototype.path = function (includeHash) {
        if (includeHash === void 0) { includeHash = false; }
        // the hash value is always prefixed with a `#`
        // and if it is empty then it will stay empty
        var /** @type {?} */ path = this._platformLocation.hash;
        if (path == null)
            path = '#';
        return path.length > 0 ? path.substring(1) : path;
    };
    /**
     * @param {?} internal
     * @return {?}
     */
    HashLocationStrategy.prototype.prepareExternalUrl = function (internal) {
        var /** @type {?} */ url = Location.joinWithSlash(this._baseHref, internal);
        return url.length > 0 ? ('#' + url) : url;
    };
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} path
     * @param {?} queryParams
     * @return {?}
     */
    HashLocationStrategy.prototype.pushState = function (state, title, path, queryParams) {
        var /** @type {?} */ url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
        if (url.length == 0) {
            url = this._platformLocation.pathname;
        }
        this._platformLocation.pushState(state, title, url);
    };
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} path
     * @param {?} queryParams
     * @return {?}
     */
    HashLocationStrategy.prototype.replaceState = function (state, title, path, queryParams) {
        var /** @type {?} */ url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
        if (url.length == 0) {
            url = this._platformLocation.pathname;
        }
        this._platformLocation.replaceState(state, title, url);
    };
    /**
     * @return {?}
     */
    HashLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
    /**
     * @return {?}
     */
    HashLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
    return HashLocationStrategy;
}(LocationStrategy));
HashLocationStrategy.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
HashLocationStrategy.ctorParameters = function () { return [
    { type: PlatformLocation, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [APP_BASE_HREF,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Use URL for storing application location data.
 * \@description
 * `PathLocationStrategy` is a {\@link LocationStrategy} used to configure the
 * {\@link Location} service to represent its state in the
 * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
 * browser's URL.
 *
 * If you're using `PathLocationStrategy`, you must provide a {\@link APP_BASE_HREF}
 * or add a base element to the document. This URL prefix that will be preserved
 * when generating and recognizing URLs.
 *
 * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
 * `location.go('/foo')`, the browser's URL will become
 * `example.com/my/app/foo`.
 *
 * Similarly, if you add `<base href='/my/app'/>` to the document and call
 * `location.go('/foo')`, the browser's URL will become
 * `example.com/my/app/foo`.
 *
 * ### Example
 *
 * {\@example common/location/ts/path_location_component.ts region='LocationComponent'}
 *
 * \@stable
 */
var PathLocationStrategy = (function (_super) {
    __extends(PathLocationStrategy, _super);
    /**
     * @param {?} _platformLocation
     * @param {?=} href
     */
    function PathLocationStrategy(_platformLocation, href) {
        var _this = _super.call(this) || this;
        _this._platformLocation = _platformLocation;
        if (href == null) {
            href = _this._platformLocation.getBaseHrefFromDOM();
        }
        if (href == null) {
            throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
        }
        _this._baseHref = href;
        return _this;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    PathLocationStrategy.prototype.onPopState = function (fn) {
        this._platformLocation.onPopState(fn);
        this._platformLocation.onHashChange(fn);
    };
    /**
     * @return {?}
     */
    PathLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
    /**
     * @param {?} internal
     * @return {?}
     */
    PathLocationStrategy.prototype.prepareExternalUrl = function (internal) {
        return Location.joinWithSlash(this._baseHref, internal);
    };
    /**
     * @param {?=} includeHash
     * @return {?}
     */
    PathLocationStrategy.prototype.path = function (includeHash) {
        if (includeHash === void 0) { includeHash = false; }
        var /** @type {?} */ pathname = this._platformLocation.pathname +
            Location.normalizeQueryParams(this._platformLocation.search);
        var /** @type {?} */ hash = this._platformLocation.hash;
        return hash && includeHash ? "" + pathname + hash : pathname;
    };
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    PathLocationStrategy.prototype.pushState = function (state, title, url, queryParams) {
        var /** @type {?} */ externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
        this._platformLocation.pushState(state, title, externalUrl);
    };
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    PathLocationStrategy.prototype.replaceState = function (state, title, url, queryParams) {
        var /** @type {?} */ externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
        this._platformLocation.replaceState(state, title, externalUrl);
    };
    /**
     * @return {?}
     */
    PathLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
    /**
     * @return {?}
     */
    PathLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
    return PathLocationStrategy;
}(LocationStrategy));
PathLocationStrategy.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
PathLocationStrategy.ctorParameters = function () { return [
    { type: PlatformLocation, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [APP_BASE_HREF,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@experimental
 * @abstract
 */
var NgLocalization = (function () {
    function NgLocalization() {
    }
    /**
     * @abstract
     * @param {?} value
     * @return {?}
     */
    NgLocalization.prototype.getPluralCategory = function (value) { };
    return NgLocalization;
}());
/**
 * Returns the plural category for a given value.
 * - "=value" when the case exists,
 * - the plural category otherwise
 *
 * \@internal
 * @param {?} value
 * @param {?} cases
 * @param {?} ngLocalization
 * @return {?}
 */
function getPluralCategory(value, cases, ngLocalization) {
    var /** @type {?} */ key = "=" + value;
    if (cases.indexOf(key) > -1) {
        return key;
    }
    key = ngLocalization.getPluralCategory(value);
    if (cases.indexOf(key) > -1) {
        return key;
    }
    if (cases.indexOf('other') > -1) {
        return 'other';
    }
    throw new Error("No plural message found for value \"" + value + "\"");
}
/**
 * Returns the plural case based on the locale
 *
 * \@experimental
 */
var NgLocaleLocalization = (function (_super) {
    __extends(NgLocaleLocalization, _super);
    /**
     * @param {?} locale
     */
    function NgLocaleLocalization(locale) {
        var _this = _super.call(this) || this;
        _this.locale = locale;
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NgLocaleLocalization.prototype.getPluralCategory = function (value) {
        var /** @type {?} */ plural = getPluralCase(this.locale, value);
        switch (plural) {
            case Plural.Zero:
                return 'zero';
            case Plural.One:
                return 'one';
            case Plural.Two:
                return 'two';
            case Plural.Few:
                return 'few';
            case Plural.Many:
                return 'many';
            default:
                return 'other';
        }
    };
    return NgLocaleLocalization;
}(NgLocalization));
NgLocaleLocalization.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
NgLocaleLocalization.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
]; };
var Plural = {};
Plural.Zero = 0;
Plural.One = 1;
Plural.Two = 2;
Plural.Few = 3;
Plural.Many = 4;
Plural.Other = 5;
Plural[Plural.Zero] = "Zero";
Plural[Plural.One] = "One";
Plural[Plural.Two] = "Two";
Plural[Plural.Few] = "Few";
Plural[Plural.Many] = "Many";
Plural[Plural.Other] = "Other";
/**
 * Returns the plural case based on the locale
 *
 * \@experimental
 * @param {?} locale
 * @param {?} nLike
 * @return {?}
 */
function getPluralCase(locale, nLike) {
    // TODO(vicb): lazy compute
    if (typeof nLike === 'string') {
        nLike = parseInt(/** @type {?} */ (nLike), 10);
    }
    var /** @type {?} */ n = (nLike);
    var /** @type {?} */ nDecimal = n.toString().replace(/^[^.]*\.?/, '');
    var /** @type {?} */ i = Math.floor(Math.abs(n));
    var /** @type {?} */ v = nDecimal.length;
    var /** @type {?} */ f = parseInt(nDecimal, 10);
    var /** @type {?} */ t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
    var /** @type {?} */ lang = locale.split('-')[0].toLowerCase();
    switch (lang) {
        case 'af':
        case 'asa':
        case 'az':
        case 'bem':
        case 'bez':
        case 'bg':
        case 'brx':
        case 'ce':
        case 'cgg':
        case 'chr':
        case 'ckb':
        case 'ee':
        case 'el':
        case 'eo':
        case 'es':
        case 'eu':
        case 'fo':
        case 'fur':
        case 'gsw':
        case 'ha':
        case 'haw':
        case 'hu':
        case 'jgo':
        case 'jmc':
        case 'ka':
        case 'kk':
        case 'kkj':
        case 'kl':
        case 'ks':
        case 'ksb':
        case 'ky':
        case 'lb':
        case 'lg':
        case 'mas':
        case 'mgo':
        case 'ml':
        case 'mn':
        case 'nb':
        case 'nd':
        case 'ne':
        case 'nn':
        case 'nnh':
        case 'nyn':
        case 'om':
        case 'or':
        case 'os':
        case 'ps':
        case 'rm':
        case 'rof':
        case 'rwk':
        case 'saq':
        case 'seh':
        case 'sn':
        case 'so':
        case 'sq':
        case 'ta':
        case 'te':
        case 'teo':
        case 'tk':
        case 'tr':
        case 'ug':
        case 'uz':
        case 'vo':
        case 'vun':
        case 'wae':
        case 'xog':
            if (n === 1)
                return Plural.One;
            return Plural.Other;
        case 'agq':
        case 'bas':
        case 'cu':
        case 'dav':
        case 'dje':
        case 'dua':
        case 'dyo':
        case 'ebu':
        case 'ewo':
        case 'guz':
        case 'kam':
        case 'khq':
        case 'ki':
        case 'kln':
        case 'kok':
        case 'ksf':
        case 'lrc':
        case 'lu':
        case 'luo':
        case 'luy':
        case 'mer':
        case 'mfe':
        case 'mgh':
        case 'mua':
        case 'mzn':
        case 'nmg':
        case 'nus':
        case 'qu':
        case 'rn':
        case 'rw':
        case 'sbp':
        case 'twq':
        case 'vai':
        case 'yav':
        case 'yue':
        case 'zgh':
        case 'ak':
        case 'ln':
        case 'mg':
        case 'pa':
        case 'ti':
            if (n === Math.floor(n) && n >= 0 && n <= 1)
                return Plural.One;
            return Plural.Other;
        case 'am':
        case 'as':
        case 'bn':
        case 'fa':
        case 'gu':
        case 'hi':
        case 'kn':
        case 'mr':
        case 'zu':
            if (i === 0 || n === 1)
                return Plural.One;
            return Plural.Other;
        case 'ar':
            if (n === 0)
                return Plural.Zero;
            if (n === 1)
                return Plural.One;
            if (n === 2)
                return Plural.Two;
            if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10)
                return Plural.Few;
            if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99)
                return Plural.Many;
            return Plural.Other;
        case 'ast':
        case 'ca':
        case 'de':
        case 'en':
        case 'et':
        case 'fi':
        case 'fy':
        case 'gl':
        case 'it':
        case 'nl':
        case 'sv':
        case 'sw':
        case 'ur':
        case 'yi':
            if (i === 1 && v === 0)
                return Plural.One;
            return Plural.Other;
        case 'be':
            if (n % 10 === 1 && !(n % 100 === 11))
                return Plural.One;
            if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 &&
                !(n % 100 >= 12 && n % 100 <= 14))
                return Plural.Few;
            if (n % 10 === 0 || n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9 ||
                n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14)
                return Plural.Many;
            return Plural.Other;
        case 'br':
            if (n % 10 === 1 && !(n % 100 === 11 || n % 100 === 71 || n % 100 === 91))
                return Plural.One;
            if (n % 10 === 2 && !(n % 100 === 12 || n % 100 === 72 || n % 100 === 92))
                return Plural.Two;
            if (n % 10 === Math.floor(n % 10) && (n % 10 >= 3 && n % 10 <= 4 || n % 10 === 9) &&
                !(n % 100 >= 10 && n % 100 <= 19 || n % 100 >= 70 && n % 100 <= 79 ||
                    n % 100 >= 90 && n % 100 <= 99))
                return Plural.Few;
            if (!(n === 0) && n % 1e6 === 0)
                return Plural.Many;
            return Plural.Other;
        case 'bs':
        case 'hr':
        case 'sr':
            if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11))
                return Plural.One;
            if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                !(i % 100 >= 12 && i % 100 <= 14) ||
                f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 &&
                    !(f % 100 >= 12 && f % 100 <= 14))
                return Plural.Few;
            return Plural.Other;
        case 'cs':
        case 'sk':
            if (i === 1 && v === 0)
                return Plural.One;
            if (i === Math.floor(i) && i >= 2 && i <= 4 && v === 0)
                return Plural.Few;
            if (!(v === 0))
                return Plural.Many;
            return Plural.Other;
        case 'cy':
            if (n === 0)
                return Plural.Zero;
            if (n === 1)
                return Plural.One;
            if (n === 2)
                return Plural.Two;
            if (n === 3)
                return Plural.Few;
            if (n === 6)
                return Plural.Many;
            return Plural.Other;
        case 'da':
            if (n === 1 || !(t === 0) && (i === 0 || i === 1))
                return Plural.One;
            return Plural.Other;
        case 'dsb':
        case 'hsb':
            if (v === 0 && i % 100 === 1 || f % 100 === 1)
                return Plural.One;
            if (v === 0 && i % 100 === 2 || f % 100 === 2)
                return Plural.Two;
            if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 ||
                f % 100 === Math.floor(f % 100) && f % 100 >= 3 && f % 100 <= 4)
                return Plural.Few;
            return Plural.Other;
        case 'ff':
        case 'fr':
        case 'hy':
        case 'kab':
            if (i === 0 || i === 1)
                return Plural.One;
            return Plural.Other;
        case 'fil':
            if (v === 0 && (i === 1 || i === 2 || i === 3) ||
                v === 0 && !(i % 10 === 4 || i % 10 === 6 || i % 10 === 9) ||
                !(v === 0) && !(f % 10 === 4 || f % 10 === 6 || f % 10 === 9))
                return Plural.One;
            return Plural.Other;
        case 'ga':
            if (n === 1)
                return Plural.One;
            if (n === 2)
                return Plural.Two;
            if (n === Math.floor(n) && n >= 3 && n <= 6)
                return Plural.Few;
            if (n === Math.floor(n) && n >= 7 && n <= 10)
                return Plural.Many;
            return Plural.Other;
        case 'gd':
            if (n === 1 || n === 11)
                return Plural.One;
            if (n === 2 || n === 12)
                return Plural.Two;
            if (n === Math.floor(n) && (n >= 3 && n <= 10 || n >= 13 && n <= 19))
                return Plural.Few;
            return Plural.Other;
        case 'gv':
            if (v === 0 && i % 10 === 1)
                return Plural.One;
            if (v === 0 && i % 10 === 2)
                return Plural.Two;
            if (v === 0 &&
                (i % 100 === 0 || i % 100 === 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80))
                return Plural.Few;
            if (!(v === 0))
                return Plural.Many;
            return Plural.Other;
        case 'he':
            if (i === 1 && v === 0)
                return Plural.One;
            if (i === 2 && v === 0)
                return Plural.Two;
            if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0)
                return Plural.Many;
            return Plural.Other;
        case 'is':
            if (t === 0 && i % 10 === 1 && !(i % 100 === 11) || !(t === 0))
                return Plural.One;
            return Plural.Other;
        case 'ksh':
            if (n === 0)
                return Plural.Zero;
            if (n === 1)
                return Plural.One;
            return Plural.Other;
        case 'kw':
        case 'naq':
        case 'se':
        case 'smn':
            if (n === 1)
                return Plural.One;
            if (n === 2)
                return Plural.Two;
            return Plural.Other;
        case 'lag':
            if (n === 0)
                return Plural.Zero;
            if ((i === 0 || i === 1) && !(n === 0))
                return Plural.One;
            return Plural.Other;
        case 'lt':
            if (n % 10 === 1 && !(n % 100 >= 11 && n % 100 <= 19))
                return Plural.One;
            if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 &&
                !(n % 100 >= 11 && n % 100 <= 19))
                return Plural.Few;
            if (!(f === 0))
                return Plural.Many;
            return Plural.Other;
        case 'lv':
        case 'prg':
            if (n % 10 === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 ||
                v === 2 && f % 100 === Math.floor(f % 100) && f % 100 >= 11 && f % 100 <= 19)
                return Plural.Zero;
            if (n % 10 === 1 && !(n % 100 === 11) || v === 2 && f % 10 === 1 && !(f % 100 === 11) ||
                !(v === 2) && f % 10 === 1)
                return Plural.One;
            return Plural.Other;
        case 'mk':
            if (v === 0 && i % 10 === 1 || f % 10 === 1)
                return Plural.One;
            return Plural.Other;
        case 'mt':
            if (n === 1)
                return Plural.One;
            if (n === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10)
                return Plural.Few;
            if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19)
                return Plural.Many;
            return Plural.Other;
        case 'pl':
            if (i === 1 && v === 0)
                return Plural.One;
            if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                !(i % 100 >= 12 && i % 100 <= 14))
                return Plural.Few;
            if (v === 0 && !(i === 1) && i % 10 === Math.floor(i % 10) && i % 10 >= 0 && i % 10 <= 1 ||
                v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
                v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 12 && i % 100 <= 14)
                return Plural.Many;
            return Plural.Other;
        case 'pt':
            if (n === Math.floor(n) && n >= 0 && n <= 2 && !(n === 2))
                return Plural.One;
            return Plural.Other;
        case 'ro':
            if (i === 1 && v === 0)
                return Plural.One;
            if (!(v === 0) || n === 0 ||
                !(n === 1) && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19)
                return Plural.Few;
            return Plural.Other;
        case 'ru':
        case 'uk':
            if (v === 0 && i % 10 === 1 && !(i % 100 === 11))
                return Plural.One;
            if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                !(i % 100 >= 12 && i % 100 <= 14))
                return Plural.Few;
            if (v === 0 && i % 10 === 0 ||
                v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
                v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14)
                return Plural.Many;
            return Plural.Other;
        case 'shi':
            if (i === 0 || n === 1)
                return Plural.One;
            if (n === Math.floor(n) && n >= 2 && n <= 10)
                return Plural.Few;
            return Plural.Other;
        case 'si':
            if (n === 0 || n === 1 || i === 0 && f === 1)
                return Plural.One;
            return Plural.Other;
        case 'sl':
            if (v === 0 && i % 100 === 1)
                return Plural.One;
            if (v === 0 && i % 100 === 2)
                return Plural.Two;
            if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 || !(v === 0))
                return Plural.Few;
            return Plural.Other;
        case 'tzm':
            if (n === Math.floor(n) && n >= 0 && n <= 1 || n === Math.floor(n) && n >= 11 && n <= 99)
                return Plural.One;
            return Plural.Other;
        default:
            return Plural.Other;
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 *
 * \@whatItDoes Adds and removes CSS classes on an HTML element.
 *
 * \@howToUse
 * ```
 *     <some-element [ngClass]="'first second'">...</some-element>
 *
 *     <some-element [ngClass]="['first', 'second']">...</some-element>
 *
 *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
 *
 *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
 *
 *     <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
 * ```
 *
 * \@description
 *
 * The CSS classes are updated as follows, depending on the type of the expression evaluation:
 * - `string` - the CSS classes listed in the string (space delimited) are added,
 * - `Array` - the CSS classes declared as Array elements are added,
 * - `Object` - keys are CSS classes that get added when the expression given in the value
 *              evaluates to a truthy value, otherwise they are removed.
 *
 * \@stable
 */
var NgClass = (function () {
    /**
     * @param {?} _iterableDiffers
     * @param {?} _keyValueDiffers
     * @param {?} _ngEl
     * @param {?} _renderer
     */
    function NgClass(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
        this._iterableDiffers = _iterableDiffers;
        this._keyValueDiffers = _keyValueDiffers;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
        this._initialClasses = [];
    }
    Object.defineProperty(NgClass.prototype, "klass", {
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            this._applyInitialClasses(true);
            this._initialClasses = typeof v === 'string' ? v.split(/\s+/) : [];
            this._applyInitialClasses(false);
            this._applyClasses(this._rawClass, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgClass.prototype, "ngClass", {
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            this._cleanupClasses(this._rawClass);
            this._iterableDiffer = null;
            this._keyValueDiffer = null;
            this._rawClass = typeof v === 'string' ? v.split(/\s+/) : v;
            if (this._rawClass) {
                if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisListLikeIterable"])(this._rawClass)) {
                    this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create();
                }
                else {
                    this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgClass.prototype.ngDoCheck = function () {
        if (this._iterableDiffer) {
            var /** @type {?} */ iterableChanges = this._iterableDiffer.diff(/** @type {?} */ (this._rawClass));
            if (iterableChanges) {
                this._applyIterableChanges(iterableChanges);
            }
        }
        else if (this._keyValueDiffer) {
            var /** @type {?} */ keyValueChanges = this._keyValueDiffer.diff(/** @type {?} */ (this._rawClass));
            if (keyValueChanges) {
                this._applyKeyValueChanges(keyValueChanges);
            }
        }
    };
    /**
     * @param {?} rawClassVal
     * @return {?}
     */
    NgClass.prototype._cleanupClasses = function (rawClassVal) {
        this._applyClasses(rawClassVal, true);
        this._applyInitialClasses(false);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgClass.prototype._applyKeyValueChanges = function (changes) {
        var _this = this;
        changes.forEachAddedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
        changes.forEachChangedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
        changes.forEachRemovedItem(function (record) {
            if (record.previousValue) {
                _this._toggleClass(record.key, false);
            }
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgClass.prototype._applyIterableChanges = function (changes) {
        var _this = this;
        changes.forEachAddedItem(function (record) {
            if (typeof record.item === 'string') {
                _this._toggleClass(record.item, true);
            }
            else {
                throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵstringify"])(record.item));
            }
        });
        changes.forEachRemovedItem(function (record) { return _this._toggleClass(record.item, false); });
    };
    /**
     * @param {?} isCleanup
     * @return {?}
     */
    NgClass.prototype._applyInitialClasses = function (isCleanup) {
        var _this = this;
        this._initialClasses.forEach(function (klass) { return _this._toggleClass(klass, !isCleanup); });
    };
    /**
     * @param {?} rawClassVal
     * @param {?} isCleanup
     * @return {?}
     */
    NgClass.prototype._applyClasses = function (rawClassVal, isCleanup) {
        var _this = this;
        if (rawClassVal) {
            if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                ((rawClassVal)).forEach(function (klass) { return _this._toggleClass(klass, !isCleanup); });
            }
            else {
                Object.keys(rawClassVal).forEach(function (klass) {
                    if (rawClassVal[klass] != null)
                        _this._toggleClass(klass, !isCleanup);
                });
            }
        }
    };
    /**
     * @param {?} klass
     * @param {?} enabled
     * @return {?}
     */
    NgClass.prototype._toggleClass = function (klass, enabled) {
        var _this = this;
        klass = klass.trim();
        if (klass) {
            klass.split(/\s+/g).forEach(function (klass) { _this._renderer.setElementClass(_this._ngEl.nativeElement, klass, !!enabled); });
        }
    };
    return NgClass;
}());
NgClass.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngClass]' },] },
];
/**
 * @nocollapse
 */
NgClass.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
NgClass.propDecorators = {
    'klass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class',] },],
    'ngClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Instantiates a single {\@link Component} type and inserts its Host View into current View.
 * `NgComponentOutlet` provides a declarative approach for dynamic component creation.
 *
 * `NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
 * any existing component will get destroyed.
 *
 * ### Fine tune control
 *
 * You can control the component creation process by using the following optional attributes:
 *
 * * `ngComponentOutletInjector`: Optional custom {\@link Injector} that will be used as parent for
 * the Component. Defaults to the injector of the current view container.
 *
 * * `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
 * section of the component, if exists.
 *
 * * `ngComponentOutletNgModuleFactory`: Optional module factory to allow dynamically loading other
 * module, then load a component from that module.
 *
 * ### Syntax
 *
 * Simple
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
 * ```
 *
 * Customized injector/content
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   injector: injectorExpression;
 *                                   content: contentNodesExpression;">
 * </ng-container>
 * ```
 *
 * Customized ngModuleFactory
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   ngModuleFactory: moduleFactory;">
 * </ng-container>
 * ```
 * ## Example
 *
 * {\@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}
 *
 * A more complete example with additional options:
 *
 * {\@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}
 * A more complete example with ngModuleFactory:
 *
 * {\@example common/ngComponentOutlet/ts/module.ts region='NgModuleFactoryExample'}
 *
 * \@experimental
 */
var NgComponentOutlet = (function () {
    /**
     * @param {?} _viewContainerRef
     */
    function NgComponentOutlet(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
        this._componentRef = null;
        this._moduleRef = null;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgComponentOutlet.prototype.ngOnChanges = function (changes) {
        this._viewContainerRef.clear();
        this._componentRef = null;
        if (this.ngComponentOutlet) {
            var /** @type {?} */ elInjector = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
            if (changes['ngComponentOutletNgModuleFactory']) {
                if (this._moduleRef)
                    this._moduleRef.destroy();
                if (this.ngComponentOutletNgModuleFactory) {
                    var /** @type {?} */ parentModule = elInjector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]);
                    this._moduleRef = this.ngComponentOutletNgModuleFactory.create(parentModule.injector);
                }
                else {
                    this._moduleRef = null;
                }
            }
            var /** @type {?} */ componentFactoryResolver = this._moduleRef ? this._moduleRef.componentFactoryResolver :
                elInjector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]);
            var /** @type {?} */ componentFactory = componentFactoryResolver.resolveComponentFactory(this.ngComponentOutlet);
            this._componentRef = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, elInjector, this.ngComponentOutletContent);
        }
    };
    /**
     * @return {?}
     */
    NgComponentOutlet.prototype.ngOnDestroy = function () {
        if (this._moduleRef)
            this._moduleRef.destroy();
    };
    return NgComponentOutlet;
}());
NgComponentOutlet.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngComponentOutlet]' },] },
];
/**
 * @nocollapse
 */
NgComponentOutlet.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
]; };
NgComponentOutlet.propDecorators = {
    'ngComponentOutlet': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ngComponentOutletInjector': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ngComponentOutletContent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ngComponentOutletNgModuleFactory': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@stable
 */
var NgForOfContext = (function () {
    /**
     * @param {?} $implicit
     * @param {?} ngForOf
     * @param {?} index
     * @param {?} count
     */
    function NgForOfContext($implicit, ngForOf, index, count) {
        this.$implicit = $implicit;
        this.ngForOf = ngForOf;
        this.index = index;
        this.count = count;
    }
    Object.defineProperty(NgForOfContext.prototype, "first", {
        /**
         * @return {?}
         */
        get: function () { return this.index === 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForOfContext.prototype, "last", {
        /**
         * @return {?}
         */
        get: function () { return this.index === this.count - 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForOfContext.prototype, "even", {
        /**
         * @return {?}
         */
        get: function () { return this.index % 2 === 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForOfContext.prototype, "odd", {
        /**
         * @return {?}
         */
        get: function () { return !this.even; },
        enumerable: true,
        configurable: true
    });
    return NgForOfContext;
}());
/**
 * The `NgForOf` directive instantiates a template once per item from an iterable. The context
 * for each instantiated template inherits from the outer context with the given loop variable
 * set to the current item from the iterable.
 *
 * ### Local Variables
 *
 * `NgForOf` provides several exported values that can be aliased to local variables:
 *
 * - `$implicit: T`: The value of the individual items in the iterable (`ngForOf`).
 * - `ngForOf: NgIterable<T>`: The value of the iterable expression. Useful when the expression is
 * more complex then a property access, for example when using the async pipe (`userStreams |
 * async`).
 * - `index: number`: The index of the current item in the iterable.
 * - `first: boolean`: True when the item is the first item in the iterable.
 * - `last: boolean`: True when the item is the last item in the iterable.
 * - `even: boolean`: True when the item has an even index in the iterable.
 * - `odd: boolean`: True when the item has an odd index in the iterable.
 *
 * ```
 * <li *ngFor="let user of userObservable | async as users; index as i; first as isFirst">
 *    {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
 * </li>
 * ```
 *
 * ### Change Propagation
 *
 * When the contents of the iterator changes, `NgForOf` makes the corresponding changes to the DOM:
 *
 * * When an item is added, a new instance of the template is added to the DOM.
 * * When an item is removed, its template instance is removed from the DOM.
 * * When items are reordered, their respective templates are reordered in the DOM.
 * * Otherwise, the DOM element for that item will remain the same.
 *
 * Angular uses object identity to track insertions and deletions within the iterator and reproduce
 * those changes in the DOM. This has important implications for animations and any stateful
 * controls (such as `<input>` elements which accept user input) that are present. Inserted rows can
 * be animated in, deleted rows can be animated out, and unchanged rows retain any unsaved state
 * such as user input.
 *
 * It is possible for the identities of elements in the iterator to change while the data does not.
 * This can happen, for example, if the iterator produced from an RPC to the server, and that
 * RPC is re-run. Even if the data hasn't changed, the second response will produce objects with
 * different identities, and Angular will tear down the entire DOM and rebuild it (as if all old
 * elements were deleted and all new elements inserted). This is an expensive operation and should
 * be avoided if possible.
 *
 * To customize the default tracking algorithm, `NgForOf` supports `trackBy` option.
 * `trackBy` takes a function which has two arguments: `index` and `item`.
 * If `trackBy` is given, Angular tracks changes by the return value of the function.
 *
 * ### Syntax
 *
 * - `<li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>`
 * - `<li template="ngFor let item of items; index as i; trackBy: trackByFn">...</li>`
 *
 * With `<ng-template>` element:
 *
 * ```
 * <ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
 *   <li>...</li>
 * </ng-template>
 * ```
 *
 * ### Example
 *
 * See a [live demo](http://plnkr.co/edit/KVuXxDp0qinGDyo307QW?p=preview) for a more detailed
 * example.
 *
 * \@stable
 */
var NgForOf = (function () {
    /**
     * @param {?} _viewContainer
     * @param {?} _template
     * @param {?} _differs
     */
    function NgForOf(_viewContainer, _template, _differs) {
        this._viewContainer = _viewContainer;
        this._template = _template;
        this._differs = _differs;
        this._differ = null;
    }
    Object.defineProperty(NgForOf.prototype, "ngForTrackBy", {
        /**
         * @return {?}
         */
        get: function () { return this._trackByFn; },
        /**
         * @param {?} fn
         * @return {?}
         */
        set: function (fn) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])() && fn != null && typeof fn !== 'function') {
                // TODO(vicb): use a log service once there is a public one available
                if ((console) && (console.warn)) {
                    console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ". " +
                        "See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.");
                }
            }
            this._trackByFn = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForOf.prototype, "ngForTemplate", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            // TODO(TS2.1): make TemplateRef<Partial<NgForRowOf<T>>> once we move to TS v2.1
            // The current type is too restrictive; a template that just uses index, for example,
            // should be acceptable.
            if (value) {
                this._template = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NgForOf.prototype.ngOnChanges = function (changes) {
        if ('ngForOf' in changes) {
            // React on ngForOf changes only once all inputs have been initialized
            var /** @type {?} */ value = changes['ngForOf'].currentValue;
            if (!this._differ && value) {
                try {
                    this._differ = this._differs.find(value).create(this.ngForTrackBy);
                }
                catch (e) {
                    throw new Error("Cannot find a differ supporting object '" + value + "' of type '" + getTypeNameForDebugging(value) + "'. NgFor only supports binding to Iterables such as Arrays.");
                }
            }
        }
    };
    /**
     * @return {?}
     */
    NgForOf.prototype.ngDoCheck = function () {
        if (this._differ) {
            var /** @type {?} */ changes = this._differ.diff(this.ngForOf);
            if (changes)
                this._applyChanges(changes);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgForOf.prototype._applyChanges = function (changes) {
        var _this = this;
        var /** @type {?} */ insertTuples = [];
        changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
            if (item.previousIndex == null) {
                var /** @type {?} */ view = _this._viewContainer.createEmbeddedView(_this._template, new NgForOfContext(/** @type {?} */ ((null)), _this.ngForOf, -1, -1), currentIndex);
                var /** @type {?} */ tuple = new RecordViewTuple(item, view);
                insertTuples.push(tuple);
            }
            else if (currentIndex == null) {
                _this._viewContainer.remove(adjustedPreviousIndex);
            }
            else {
                var /** @type {?} */ view = ((_this._viewContainer.get(adjustedPreviousIndex)));
                _this._viewContainer.move(view, currentIndex);
                var /** @type {?} */ tuple = new RecordViewTuple(item, /** @type {?} */ (view));
                insertTuples.push(tuple);
            }
        });
        for (var /** @type {?} */ i = 0; i < insertTuples.length; i++) {
            this._perViewChange(insertTuples[i].view, insertTuples[i].record);
        }
        for (var /** @type {?} */ i = 0, /** @type {?} */ ilen = this._viewContainer.length; i < ilen; i++) {
            var /** @type {?} */ viewRef = (this._viewContainer.get(i));
            viewRef.context.index = i;
            viewRef.context.count = ilen;
        }
        changes.forEachIdentityChange(function (record) {
            var /** @type {?} */ viewRef = (_this._viewContainer.get(record.currentIndex));
            viewRef.context.$implicit = record.item;
        });
    };
    /**
     * @param {?} view
     * @param {?} record
     * @return {?}
     */
    NgForOf.prototype._perViewChange = function (view, record) {
        view.context.$implicit = record.item;
    };
    return NgForOf;
}());
NgForOf.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngFor][ngForOf]' },] },
];
/**
 * @nocollapse
 */
NgForOf.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], },
]; };
NgForOf.propDecorators = {
    'ngForOf': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ngForTrackBy': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ngForTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var RecordViewTuple = (function () {
    /**
     * @param {?} record
     * @param {?} view
     */
    function RecordViewTuple(record, view) {
        this.record = record;
        this.view = view;
    }
    return RecordViewTuple;
}());
/**
 * @param {?} type
 * @return {?}
 */
function getTypeNameForDebugging(type) {
    return type['name'] || typeof type;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Conditionally includes a template based on the value of an `expression`.
 *
 * `ngIf` evaluates the `expression` and then renders the `then` or `else` template in its place
 * when expression is truthy or falsy respectively. Typically the:
 *  - `then` template is the inline template of `ngIf` unless bound to a different value.
 *  - `else` template is blank unless it is bound.
 *
 * ## Most common usage
 *
 * The most common usage of the `ngIf` directive is to conditionally show the inline template as
 * seen in this example:
 * {\@example common/ngIf/ts/module.ts region='NgIfSimple'}
 *
 * ## Showing an alternative template using `else`
 *
 * If it is necessary to display a template when the `expression` is falsy use the `else` template
 * binding as shown. Note that the `else` binding points to a `<ng-template>` labeled `#elseBlock`.
 * The template can be defined anywhere in the component view but is typically placed right after
 * `ngIf` for readability.
 *
 * {\@example common/ngIf/ts/module.ts region='NgIfElse'}
 *
 * ## Using non-inlined `then` template
 *
 * Usually the `then` template is the inlined template of the `ngIf`, but it can be changed using
 * a binding (just like `else`). Because `then` and `else` are bindings, the template references can
 * change at runtime as shown in this example.
 *
 * {\@example common/ngIf/ts/module.ts region='NgIfThenElse'}
 *
 * ## Storing conditional result in a variable
 *
 * A common pattern is that we need to show a set of properties from the same object. If the
 * object is undefined, then we have to use the safe-traversal-operator `?.` to guard against
 * dereferencing a `null` value. This is especially the case when waiting on async data such as
 * when using the `async` pipe as shown in folowing example:
 *
 * ```
 * Hello {{ (userStream|async)?.last }}, {{ (userStream|async)?.first }}!
 * ```
 *
 * There are several inefficiencies in the above example:
 *  - We create multiple subscriptions on `userStream`. One for each `async` pipe, or two in the
 *    example above.
 *  - We cannot display an alternative screen while waiting for the data to arrive asynchronously.
 *  - We have to use the safe-traversal-operator `?.` to access properties, which is cumbersome.
 *  - We have to place the `async` pipe in parenthesis.
 *
 * A better way to do this is to use `ngIf` and store the result of the condition in a local
 * variable as shown in the the example below:
 *
 * {\@example common/ngIf/ts/module.ts region='NgIfAs'}
 *
 * Notice that:
 *  - We use only one `async` pipe and hence only one subscription gets created.
 *  - `ngIf` stores the result of the `userStream|async` in the local variable `user`.
 *  - The local `user` can then be bound repeatedly in a more efficient way.
 *  - No need to use the safe-traversal-operator `?.` to access properties as `ngIf` will only
 *    display the data if `userStream` returns a value.
 *  - We can display an alternative template while waiting for the data.
 *
 * ### Syntax
 *
 * Simple form:
 * - `<div *ngIf="condition">...</div>`
 * - `<div template="ngIf condition">...</div>`
 * - `<ng-template [ngIf]="condition"><div>...</div></ng-template>`
 *
 * Form with an else block:
 * ```
 * <div *ngIf="condition; else elseBlock">...</div>
 * <ng-template #elseBlock>...</ng-template>
 * ```
 *
 * Form with a `then` and `else` block:
 * ```
 * <div *ngIf="condition; then thenBlock else elseBlock"></div>
 * <ng-template #thenBlock>...</ng-template>
 * <ng-template #elseBlock>...</ng-template>
 * ```
 *
 * Form with storing the value locally:
 * ```
 * <div *ngIf="condition as value; else elseBlock">{{value}}</div>
 * <ng-template #elseBlock>...</ng-template>
 * ```
 *
 * \@stable
 */
var NgIf = (function () {
    /**
     * @param {?} _viewContainer
     * @param {?} templateRef
     */
    function NgIf(_viewContainer, templateRef) {
        this._viewContainer = _viewContainer;
        this._context = new NgIfContext();
        this._thenTemplateRef = null;
        this._elseTemplateRef = null;
        this._thenViewRef = null;
        this._elseViewRef = null;
        this._thenTemplateRef = templateRef;
    }
    Object.defineProperty(NgIf.prototype, "ngIf", {
        /**
         * @param {?} condition
         * @return {?}
         */
        set: function (condition) {
            this._context.$implicit = this._context.ngIf = condition;
            this._updateView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgIf.prototype, "ngIfThen", {
        /**
         * @param {?} templateRef
         * @return {?}
         */
        set: function (templateRef) {
            this._thenTemplateRef = templateRef;
            this._thenViewRef = null; // clear previous view if any.
            this._updateView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgIf.prototype, "ngIfElse", {
        /**
         * @param {?} templateRef
         * @return {?}
         */
        set: function (templateRef) {
            this._elseTemplateRef = templateRef;
            this._elseViewRef = null; // clear previous view if any.
            this._updateView();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgIf.prototype._updateView = function () {
        if (this._context.$implicit) {
            if (!this._thenViewRef) {
                this._viewContainer.clear();
                this._elseViewRef = null;
                if (this._thenTemplateRef) {
                    this._thenViewRef =
                        this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
                }
            }
        }
        else {
            if (!this._elseViewRef) {
                this._viewContainer.clear();
                this._thenViewRef = null;
                if (this._elseTemplateRef) {
                    this._elseViewRef =
                        this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
                }
            }
        }
    };
    return NgIf;
}());
NgIf.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngIf]' },] },
];
/**
 * @nocollapse
 */
NgIf.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
]; };
NgIf.propDecorators = {
    'ngIf': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ngIfThen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ngIfElse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * \@stable
 */
var NgIfContext = (function () {
    function NgIfContext() {
        this.$implicit = null;
        this.ngIf = null;
    }
    return NgIfContext;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SwitchView = (function () {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _templateRef
     */
    function SwitchView(_viewContainerRef, _templateRef) {
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
        this._created = false;
    }
    /**
     * @return {?}
     */
    SwitchView.prototype.create = function () {
        this._created = true;
        this._viewContainerRef.createEmbeddedView(this._templateRef);
    };
    /**
     * @return {?}
     */
    SwitchView.prototype.destroy = function () {
        this._created = false;
        this._viewContainerRef.clear();
    };
    /**
     * @param {?} created
     * @return {?}
     */
    SwitchView.prototype.enforceState = function (created) {
        if (created && !this._created) {
            this.create();
        }
        else if (!created && this._created) {
            this.destroy();
        }
    };
    return SwitchView;
}());
/**
 * \@ngModule CommonModule
 *
 * \@whatItDoes Adds / removes DOM sub-trees when the nest match expressions matches the switch
 *             expression.
 *
 * \@howToUse
 * ```
 *     <container-element [ngSwitch]="switch_expression">
 *       <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *       <some-element *ngSwitchCase="match_expression_2">...</some-element>
 *       <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
 *       <ng-container *ngSwitchCase="match_expression_3">
 *         <!-- use a ng-container to group multiple root nodes -->
 *         <inner-element></inner-element>
 *         <inner-other-element></inner-other-element>
 *       </ng-container>
 *       <some-element *ngSwitchDefault>...</some-element>
 *     </container-element>
 * ```
 * \@description
 *
 * `NgSwitch` stamps out nested views when their match expression value matches the value of the
 * switch expression.
 *
 * In other words:
 * - you define a container element (where you place the directive with a switch expression on the
 * `[ngSwitch]="..."` attribute)
 * - you define inner views inside the `NgSwitch` and place a `*ngSwitchCase` attribute on the view
 * root elements.
 *
 * Elements within `NgSwitch` but outside of a `NgSwitchCase` or `NgSwitchDefault` directives will
 * be preserved at the location.
 *
 * The `ngSwitchCase` directive informs the parent `NgSwitch` of which view to display when the
 * expression is evaluated.
 * When no matching expression is found on a `ngSwitchCase` view, the `ngSwitchDefault` view is
 * stamped out.
 *
 * \@stable
 */
var NgSwitch = (function () {
    function NgSwitch() {
        this._defaultUsed = false;
        this._caseCount = 0;
        this._lastCaseCheckIndex = 0;
        this._lastCasesMatched = false;
    }
    Object.defineProperty(NgSwitch.prototype, "ngSwitch", {
        /**
         * @param {?} newValue
         * @return {?}
         */
        set: function (newValue) {
            this._ngSwitch = newValue;
            if (this._caseCount === 0) {
                this._updateDefaultCases(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @return {?}
     */
    NgSwitch.prototype._addCase = function () { return this._caseCount++; };
    /**
     * \@internal
     * @param {?} view
     * @return {?}
     */
    NgSwitch.prototype._addDefault = function (view) {
        if (!this._defaultViews) {
            this._defaultViews = [];
        }
        this._defaultViews.push(view);
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    NgSwitch.prototype._matchCase = function (value) {
        var /** @type {?} */ matched = value == this._ngSwitch;
        this._lastCasesMatched = this._lastCasesMatched || matched;
        this._lastCaseCheckIndex++;
        if (this._lastCaseCheckIndex === this._caseCount) {
            this._updateDefaultCases(!this._lastCasesMatched);
            this._lastCaseCheckIndex = 0;
            this._lastCasesMatched = false;
        }
        return matched;
    };
    /**
     * @param {?} useDefault
     * @return {?}
     */
    NgSwitch.prototype._updateDefaultCases = function (useDefault) {
        if (this._defaultViews && useDefault !== this._defaultUsed) {
            this._defaultUsed = useDefault;
            for (var /** @type {?} */ i = 0; i < this._defaultViews.length; i++) {
                var /** @type {?} */ defaultView = this._defaultViews[i];
                defaultView.enforceState(useDefault);
            }
        }
    };
    return NgSwitch;
}());
NgSwitch.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngSwitch]' },] },
];
/**
 * @nocollapse
 */
NgSwitch.ctorParameters = function () { return []; };
NgSwitch.propDecorators = {
    'ngSwitch': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * \@ngModule CommonModule
 *
 * \@whatItDoes Creates a view that will be added/removed from the parent {\@link NgSwitch} when the
 *             given expression evaluate to respectively the same/different value as the switch
 *             expression.
 *
 * \@howToUse
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
 * </container-element>
 * ```
 * \@description
 *
 * Insert the sub-tree when the expression evaluates to the same value as the enclosing switch
 * expression.
 *
 * If multiple match expressions match the switch expression value, all of them are displayed.
 *
 * See {\@link NgSwitch} for more details and example.
 *
 * \@stable
 */
var NgSwitchCase = (function () {
    /**
     * @param {?} viewContainer
     * @param {?} templateRef
     * @param {?} ngSwitch
     */
    function NgSwitchCase(viewContainer, templateRef, ngSwitch) {
        this.ngSwitch = ngSwitch;
        ngSwitch._addCase();
        this._view = new SwitchView(viewContainer, templateRef);
    }
    /**
     * @return {?}
     */
    NgSwitchCase.prototype.ngDoCheck = function () { this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase)); };
    return NgSwitchCase;
}());
NgSwitchCase.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngSwitchCase]' },] },
];
/**
 * @nocollapse
 */
NgSwitchCase.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
    { type: NgSwitch, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
]; };
NgSwitchCase.propDecorators = {
    'ngSwitchCase': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * \@ngModule CommonModule
 * \@whatItDoes Creates a view that is added to the parent {\@link NgSwitch} when no case expressions
 * match the
 *             switch expression.
 *
 * \@howToUse
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *   <some-other-element *ngSwitchDefault>...</some-other-element>
 * </container-element>
 * ```
 *
 * \@description
 *
 * Insert the sub-tree when no case expressions evaluate to the same value as the enclosing switch
 * expression.
 *
 * See {\@link NgSwitch} for more details and example.
 *
 * \@stable
 */
var NgSwitchDefault = (function () {
    /**
     * @param {?} viewContainer
     * @param {?} templateRef
     * @param {?} ngSwitch
     */
    function NgSwitchDefault(viewContainer, templateRef, ngSwitch) {
        ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
    }
    return NgSwitchDefault;
}());
NgSwitchDefault.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngSwitchDefault]' },] },
];
/**
 * @nocollapse
 */
NgSwitchDefault.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
    { type: NgSwitch, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 *
 * \@whatItDoes Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
 *
 * \@howToUse
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-template ngPluralCase="=0">there is nothing</ng-template>
 *   <ng-template ngPluralCase="=1">there is one</ng-template>
 *   <ng-template ngPluralCase="few">there are a few</ng-template>
 * </some-element>
 * ```
 *
 * \@description
 *
 * Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
 * that match the switch expression's pluralization category.
 *
 * To use this directive you must provide a container element that sets the `[ngPlural]` attribute
 * to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
 * expression:
 * - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
 *   matches the switch expression exactly,
 * - otherwise, the view will be treated as a "category match", and will only display if exact
 *   value matches aren't found and the value maps to its category for the defined locale.
 *
 * See http://cldr.unicode.org/index/cldr-spec/plural-rules
 *
 * \@experimental
 */
var NgPlural = (function () {
    /**
     * @param {?} _localization
     */
    function NgPlural(_localization) {
        this._localization = _localization;
        this._caseViews = {};
    }
    Object.defineProperty(NgPlural.prototype, "ngPlural", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._switchValue = value;
            this._updateView();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @param {?} switchView
     * @return {?}
     */
    NgPlural.prototype.addCase = function (value, switchView) { this._caseViews[value] = switchView; };
    /**
     * @return {?}
     */
    NgPlural.prototype._updateView = function () {
        this._clearViews();
        var /** @type {?} */ cases = Object.keys(this._caseViews);
        var /** @type {?} */ key = getPluralCategory(this._switchValue, cases, this._localization);
        this._activateView(this._caseViews[key]);
    };
    /**
     * @return {?}
     */
    NgPlural.prototype._clearViews = function () {
        if (this._activeView)
            this._activeView.destroy();
    };
    /**
     * @param {?} view
     * @return {?}
     */
    NgPlural.prototype._activateView = function (view) {
        if (view) {
            this._activeView = view;
            this._activeView.create();
        }
    };
    return NgPlural;
}());
NgPlural.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngPlural]' },] },
];
/**
 * @nocollapse
 */
NgPlural.ctorParameters = function () { return [
    { type: NgLocalization, },
]; };
NgPlural.propDecorators = {
    'ngPlural': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * \@ngModule CommonModule
 *
 * \@whatItDoes Creates a view that will be added/removed from the parent {\@link NgPlural} when the
 *             given expression matches the plural expression according to CLDR rules.
 *
 * \@howToUse
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-template ngPluralCase="=0">...</ng-template>
 *   <ng-template ngPluralCase="other">...</ng-template>
 * </some-element>
 * ```
 *
 * See {\@link NgPlural} for more details and example.
 *
 * \@experimental
 */
var NgPluralCase = (function () {
    /**
     * @param {?} value
     * @param {?} template
     * @param {?} viewContainer
     * @param {?} ngPlural
     */
    function NgPluralCase(value, template, viewContainer, ngPlural) {
        this.value = value;
        var isANumber = !isNaN(Number(value));
        ngPlural.addCase(isANumber ? "=" + value : value, new SwitchView(viewContainer, template));
    }
    return NgPluralCase;
}());
NgPluralCase.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngPluralCase]' },] },
];
/**
 * @nocollapse
 */
NgPluralCase.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"], args: ['ngPluralCase',] },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: NgPlural, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 *
 * \@whatItDoes Update an HTML element styles.
 *
 * \@howToUse
 * ```
 * <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
 *
 * <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
 *
 * <some-element [ngStyle]="objExp">...</some-element>
 * ```
 *
 * \@description
 *
 * The styles are updated according to the value of the expression evaluation:
 * - keys are style names with an optional `.<unit>` suffix (ie 'top.px', 'font-style.em'),
 * - values are the values assigned to those properties (expressed in the given unit).
 *
 * \@stable
 */
var NgStyle = (function () {
    /**
     * @param {?} _differs
     * @param {?} _ngEl
     * @param {?} _renderer
     */
    function NgStyle(_differs, _ngEl, _renderer) {
        this._differs = _differs;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
    }
    Object.defineProperty(NgStyle.prototype, "ngStyle", {
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            this._ngStyle = v;
            if (!this._differ && v) {
                this._differ = this._differs.find(v).create();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgStyle.prototype.ngDoCheck = function () {
        if (this._differ) {
            var /** @type {?} */ changes = this._differ.diff(this._ngStyle);
            if (changes) {
                this._applyChanges(changes);
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgStyle.prototype._applyChanges = function (changes) {
        var _this = this;
        changes.forEachRemovedItem(function (record) { return _this._setStyle(record.key, null); });
        changes.forEachAddedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
        changes.forEachChangedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
    };
    /**
     * @param {?} nameAndUnit
     * @param {?} value
     * @return {?}
     */
    NgStyle.prototype._setStyle = function (nameAndUnit, value) {
        var _a = nameAndUnit.split('.'), name = _a[0], unit = _a[1];
        value = value != null && unit ? "" + value + unit : value;
        this._renderer.setElementStyle(this._ngEl.nativeElement, name, /** @type {?} */ (value));
    };
    return NgStyle;
}());
NgStyle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngStyle]' },] },
];
/**
 * @nocollapse
 */
NgStyle.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
NgStyle.propDecorators = {
    'ngStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 *
 * \@whatItDoes Inserts an embedded view from a prepared `TemplateRef`
 *
 * \@howToUse
 * ```
 * <ng-container *ngTemplateOutlet="templateRefExp; context: contextExp"></ng-container>
 * ```
 *
 * \@description
 *
 * You can attach a context object to the `EmbeddedViewRef` by setting `[ngTemplateOutletContext]`.
 * `[ngTemplateOutletContext]` should be an object, the object's keys will be available for binding
 * by the local template `let` declarations.
 *
 * Note: using the key `$implicit` in the context object will set it's value as default.
 *
 * ## Example
 *
 * {\@example common/ngTemplateOutlet/ts/module.ts region='NgTemplateOutlet'}
 *
 * \@experimental
 */
var NgTemplateOutlet = (function () {
    /**
     * @param {?} _viewContainerRef
     */
    function NgTemplateOutlet(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    Object.defineProperty(NgTemplateOutlet.prototype, "ngOutletContext", {
        /**
         * @deprecated v4.0.0 - Renamed to ngTemplateOutletContext.
         * @param {?} context
         * @return {?}
         */
        set: function (context) { this.ngTemplateOutletContext = context; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NgTemplateOutlet.prototype.ngOnChanges = function (changes) {
        if (this._viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef));
        }
        if (this.ngTemplateOutlet) {
            this._viewRef = this._viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext);
        }
    };
    return NgTemplateOutlet;
}());
NgTemplateOutlet.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngTemplateOutlet]' },] },
];
/**
 * @nocollapse
 */
NgTemplateOutlet.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
]; };
NgTemplateOutlet.propDecorators = {
    'ngTemplateOutletContext': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ngTemplateOutlet': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ngOutletContext': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A collection of Angular directives that are likely to be used in each and every Angular
 * application.
 */
var COMMON_DIRECTIVES = [
    NgClass,
    NgComponentOutlet,
    NgForOf,
    NgIf,
    NgTemplateOutlet,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgPlural,
    NgPluralCase,
];
/**
 * A collection of deprecated directives that are no longer part of the core module.
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} type
 * @param {?} value
 * @return {?}
 */
function invalidPipeArgumentError(type, value) {
    return Error("InvalidPipeArgument: '" + value + "' for pipe '" + Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵstringify"])(type) + "'");
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ObservableStrategy = (function () {
    function ObservableStrategy() {
    }
    /**
     * @param {?} async
     * @param {?} updateLatestValue
     * @return {?}
     */
    ObservableStrategy.prototype.createSubscription = function (async, updateLatestValue) {
        return async.subscribe({ next: updateLatestValue, error: function (e) { throw e; } });
    };
    /**
     * @param {?} subscription
     * @return {?}
     */
    ObservableStrategy.prototype.dispose = function (subscription) { subscription.unsubscribe(); };
    /**
     * @param {?} subscription
     * @return {?}
     */
    ObservableStrategy.prototype.onDestroy = function (subscription) { subscription.unsubscribe(); };
    return ObservableStrategy;
}());
var PromiseStrategy = (function () {
    function PromiseStrategy() {
    }
    /**
     * @param {?} async
     * @param {?} updateLatestValue
     * @return {?}
     */
    PromiseStrategy.prototype.createSubscription = function (async, updateLatestValue) {
        return async.then(updateLatestValue, function (e) { throw e; });
    };
    /**
     * @param {?} subscription
     * @return {?}
     */
    PromiseStrategy.prototype.dispose = function (subscription) { };
    /**
     * @param {?} subscription
     * @return {?}
     */
    PromiseStrategy.prototype.onDestroy = function (subscription) { };
    return PromiseStrategy;
}());
var _promiseStrategy = new PromiseStrategy();
var _observableStrategy = new ObservableStrategy();
/**
 * \@ngModule CommonModule
 * \@whatItDoes Unwraps a value from an asynchronous primitive.
 * \@howToUse `observable_or_promise_expression | async`
 * \@description
 * The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
 * emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
 * changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
 * potential memory leaks.
 *
 *
 * ## Examples
 *
 * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
 * promise.
 *
 * {\@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}
 *
 * It's also possible to use `async` with Observables. The example below binds the `time` Observable
 * to the view. The Observable continuously updates the view with the current time.
 *
 * {\@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}
 *
 * \@stable
 */
var AsyncPipe = (function () {
    /**
     * @param {?} _ref
     */
    function AsyncPipe(_ref) {
        this._ref = _ref;
        this._latestValue = null;
        this._latestReturnedValue = null;
        this._subscription = null;
        this._obj = null;
        this._strategy = ((null));
    }
    /**
     * @return {?}
     */
    AsyncPipe.prototype.ngOnDestroy = function () {
        if (this._subscription) {
            this._dispose();
        }
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AsyncPipe.prototype.transform = function (obj) {
        if (!this._obj) {
            if (obj) {
                this._subscribe(obj);
            }
            this._latestReturnedValue = this._latestValue;
            return this._latestValue;
        }
        if (obj !== this._obj) {
            this._dispose();
            return this.transform(/** @type {?} */ (obj));
        }
        if (this._latestValue === this._latestReturnedValue) {
            return this._latestReturnedValue;
        }
        this._latestReturnedValue = this._latestValue;
        return __WEBPACK_IMPORTED_MODULE_0__angular_core__["WrappedValue"].wrap(this._latestValue);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AsyncPipe.prototype._subscribe = function (obj) {
        var _this = this;
        this._obj = obj;
        this._strategy = this._selectStrategy(obj);
        this._subscription = this._strategy.createSubscription(obj, function (value) { return _this._updateLatestValue(obj, value); });
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AsyncPipe.prototype._selectStrategy = function (obj) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisPromise"])(obj)) {
            return _promiseStrategy;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisObservable"])(obj)) {
            return _observableStrategy;
        }
        throw invalidPipeArgumentError(AsyncPipe, obj);
    };
    /**
     * @return {?}
     */
    AsyncPipe.prototype._dispose = function () {
        this._strategy.dispose(/** @type {?} */ ((this._subscription)));
        this._latestValue = null;
        this._latestReturnedValue = null;
        this._subscription = null;
        this._obj = null;
    };
    /**
     * @param {?} async
     * @param {?} value
     * @return {?}
     */
    AsyncPipe.prototype._updateLatestValue = function (async, value) {
        if (async === this._obj) {
            this._latestValue = value;
            this._ref.markForCheck();
        }
    };
    return AsyncPipe;
}());
AsyncPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'async', pure: false },] },
];
/**
 * @nocollapse
 */
AsyncPipe.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms text to lowercase.
 *
 * {\@example  common/pipes/ts/lowerupper_pipe.ts region='LowerUpperPipe' }
 *
 * \@stable
 */
var LowerCasePipe = (function () {
    function LowerCasePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    LowerCasePipe.prototype.transform = function (value) {
        if (!value)
            return value;
        if (typeof value !== 'string') {
            throw invalidPipeArgumentError(LowerCasePipe, value);
        }
        return value.toLowerCase();
    };
    return LowerCasePipe;
}());
LowerCasePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'lowercase' },] },
];
/**
 * @nocollapse
 */
LowerCasePipe.ctorParameters = function () { return []; };
/**
 * Helper method to transform a single word to titlecase.
 *
 * \@stable
 * @param {?} word
 * @return {?}
 */
function titleCaseWord(word) {
    if (!word)
        return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
}
/**
 * Transforms text to titlecase.
 *
 * \@stable
 */
var TitleCasePipe = (function () {
    function TitleCasePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TitleCasePipe.prototype.transform = function (value) {
        if (!value)
            return value;
        if (typeof value !== 'string') {
            throw invalidPipeArgumentError(TitleCasePipe, value);
        }
        return value.split(/\b/g).map(function (word) { return titleCaseWord(word); }).join('');
    };
    return TitleCasePipe;
}());
TitleCasePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'titlecase' },] },
];
/**
 * @nocollapse
 */
TitleCasePipe.ctorParameters = function () { return []; };
/**
 * Transforms text to uppercase.
 *
 * \@stable
 */
var UpperCasePipe = (function () {
    function UpperCasePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    UpperCasePipe.prototype.transform = function (value) {
        if (!value)
            return value;
        if (typeof value !== 'string') {
            throw invalidPipeArgumentError(UpperCasePipe, value);
        }
        return value.toUpperCase();
    };
    return UpperCasePipe;
}());
UpperCasePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'uppercase' },] },
];
/**
 * @nocollapse
 */
UpperCasePipe.ctorParameters = function () { return []; };
var NumberFormatStyle = {};
NumberFormatStyle.Decimal = 0;
NumberFormatStyle.Percent = 1;
NumberFormatStyle.Currency = 2;
NumberFormatStyle[NumberFormatStyle.Decimal] = "Decimal";
NumberFormatStyle[NumberFormatStyle.Percent] = "Percent";
NumberFormatStyle[NumberFormatStyle.Currency] = "Currency";
var NumberFormatter = (function () {
    function NumberFormatter() {
    }
    /**
     * @param {?} num
     * @param {?} locale
     * @param {?} style
     * @param {?=} __3
     * @return {?}
     */
    NumberFormatter.format = function (num, locale, style, _a) {
        var _b = _a === void 0 ? {} : _a, minimumIntegerDigits = _b.minimumIntegerDigits, minimumFractionDigits = _b.minimumFractionDigits, maximumFractionDigits = _b.maximumFractionDigits, currency = _b.currency, _c = _b.currencyAsSymbol, currencyAsSymbol = _c === void 0 ? false : _c;
        var /** @type {?} */ options = {
            minimumIntegerDigits: minimumIntegerDigits,
            minimumFractionDigits: minimumFractionDigits,
            maximumFractionDigits: maximumFractionDigits,
            style: NumberFormatStyle[style].toLowerCase()
        };
        if (style == NumberFormatStyle.Currency) {
            options.currency = typeof currency == 'string' ? currency : undefined;
            options.currencyDisplay = currencyAsSymbol ? 'symbol' : 'code';
        }
        return new Intl.NumberFormat(locale, options).format(num);
    };
    return NumberFormatter;
}());
var DATE_FORMATS_SPLIT = /((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/;
var PATTERN_ALIASES = {
    // Keys are quoted so they do not get renamed during closure compilation.
    'yMMMdjms': datePartGetterFactory(combine([
        digitCondition('year', 1),
        nameCondition('month', 3),
        digitCondition('day', 1),
        digitCondition('hour', 1),
        digitCondition('minute', 1),
        digitCondition('second', 1),
    ])),
    'yMdjm': datePartGetterFactory(combine([
        digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1),
        digitCondition('hour', 1), digitCondition('minute', 1)
    ])),
    'yMMMMEEEEd': datePartGetterFactory(combine([
        digitCondition('year', 1), nameCondition('month', 4), nameCondition('weekday', 4),
        digitCondition('day', 1)
    ])),
    'yMMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 4), digitCondition('day', 1)])),
    'yMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 3), digitCondition('day', 1)])),
    'yMd': datePartGetterFactory(combine([digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1)])),
    'jms': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('second', 1), digitCondition('minute', 1)])),
    'jm': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('minute', 1)]))
};
var DATE_FORMATS = {
    // Keys are quoted so they do not get renamed.
    'yyyy': datePartGetterFactory(digitCondition('year', 4)),
    'yy': datePartGetterFactory(digitCondition('year', 2)),
    'y': datePartGetterFactory(digitCondition('year', 1)),
    'MMMM': datePartGetterFactory(nameCondition('month', 4)),
    'MMM': datePartGetterFactory(nameCondition('month', 3)),
    'MM': datePartGetterFactory(digitCondition('month', 2)),
    'M': datePartGetterFactory(digitCondition('month', 1)),
    'LLLL': datePartGetterFactory(nameCondition('month', 4)),
    'L': datePartGetterFactory(nameCondition('month', 1)),
    'dd': datePartGetterFactory(digitCondition('day', 2)),
    'd': datePartGetterFactory(digitCondition('day', 1)),
    'HH': digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), false)))),
    'H': hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), false))),
    'hh': digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), true)))),
    'h': hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
    'jj': datePartGetterFactory(digitCondition('hour', 2)),
    'j': datePartGetterFactory(digitCondition('hour', 1)),
    'mm': digitModifier(datePartGetterFactory(digitCondition('minute', 2))),
    'm': datePartGetterFactory(digitCondition('minute', 1)),
    'ss': digitModifier(datePartGetterFactory(digitCondition('second', 2))),
    's': datePartGetterFactory(digitCondition('second', 1)),
    // while ISO 8601 requires fractions to be prefixed with `.` or `,`
    // we can be just safely rely on using `sss` since we currently don't support single or two digit
    // fractions
    'sss': datePartGetterFactory(digitCondition('second', 3)),
    'EEEE': datePartGetterFactory(nameCondition('weekday', 4)),
    'EEE': datePartGetterFactory(nameCondition('weekday', 3)),
    'EE': datePartGetterFactory(nameCondition('weekday', 2)),
    'E': datePartGetterFactory(nameCondition('weekday', 1)),
    'a': hourClockExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
    'Z': timeZoneGetter('short'),
    'z': timeZoneGetter('long'),
    'ww': datePartGetterFactory({}),
    // first Thursday of the year. not support ?
    'w': datePartGetterFactory({}),
    // of the year not support ?
    'G': datePartGetterFactory(nameCondition('era', 1)),
    'GG': datePartGetterFactory(nameCondition('era', 2)),
    'GGG': datePartGetterFactory(nameCondition('era', 3)),
    'GGGG': datePartGetterFactory(nameCondition('era', 4))
};
/**
 * @param {?} inner
 * @return {?}
 */
function digitModifier(inner) {
    return function (date, locale) {
        var /** @type {?} */ result = inner(date, locale);
        return result.length == 1 ? '0' + result : result;
    };
}
/**
 * @param {?} inner
 * @return {?}
 */
function hourClockExtractor(inner) {
    return function (date, locale) { return inner(date, locale).split(' ')[1]; };
}
/**
 * @param {?} inner
 * @return {?}
 */
function hourExtractor(inner) {
    return function (date, locale) { return inner(date, locale).split(' ')[0]; };
}
/**
 * @param {?} date
 * @param {?} locale
 * @param {?} options
 * @return {?}
 */
function intlDateFormat(date, locale, options) {
    return new Intl.DateTimeFormat(locale, options).format(date).replace(/[\u200e\u200f]/g, '');
}
/**
 * @param {?} timezone
 * @return {?}
 */
function timeZoneGetter(timezone) {
    // To workaround `Intl` API restriction for single timezone let format with 24 hours
    var /** @type {?} */ options = { hour: '2-digit', hour12: false, timeZoneName: timezone };
    return function (date, locale) {
        var /** @type {?} */ result = intlDateFormat(date, locale, options);
        // Then extract first 3 letters that related to hours
        return result ? result.substring(3) : '';
    };
}
/**
 * @param {?} options
 * @param {?} value
 * @return {?}
 */
function hour12Modify(options, value) {
    options.hour12 = value;
    return options;
}
/**
 * @param {?} prop
 * @param {?} len
 * @return {?}
 */
function digitCondition(prop, len) {
    var /** @type {?} */ result = {};
    result[prop] = len === 2 ? '2-digit' : 'numeric';
    return result;
}
/**
 * @param {?} prop
 * @param {?} len
 * @return {?}
 */
function nameCondition(prop, len) {
    var /** @type {?} */ result = {};
    if (len < 4) {
        result[prop] = len > 1 ? 'short' : 'narrow';
    }
    else {
        result[prop] = 'long';
    }
    return result;
}
/**
 * @param {?} options
 * @return {?}
 */
function combine(options) {
    return ((Object)).assign.apply(((Object)), [{}].concat(options));
}
/**
 * @param {?} ret
 * @return {?}
 */
function datePartGetterFactory(ret) {
    return function (date, locale) { return intlDateFormat(date, locale, ret); };
}
var DATE_FORMATTER_CACHE = new Map();
/**
 * @param {?} format
 * @param {?} date
 * @param {?} locale
 * @return {?}
 */
function dateFormatter(format, date, locale) {
    var /** @type {?} */ fn = PATTERN_ALIASES[format];
    if (fn)
        return fn(date, locale);
    var /** @type {?} */ cacheKey = format;
    var /** @type {?} */ parts = DATE_FORMATTER_CACHE.get(cacheKey);
    if (!parts) {
        parts = [];
        var /** @type {?} */ match = void 0;
        DATE_FORMATS_SPLIT.exec(format);
        var /** @type {?} */ _format = format;
        while (_format) {
            match = DATE_FORMATS_SPLIT.exec(_format);
            if (match) {
                parts = parts.concat(match.slice(1));
                _format = ((parts.pop()));
            }
            else {
                parts.push(_format);
                _format = null;
            }
        }
        DATE_FORMATTER_CACHE.set(cacheKey, parts);
    }
    return parts.reduce(function (text, part) {
        var /** @type {?} */ fn = DATE_FORMATS[part];
        return text + (fn ? fn(date, locale) : partToTime(part));
    }, '');
}
/**
 * @param {?} part
 * @return {?}
 */
function partToTime(part) {
    return part === '\'\'' ? '\'' : part.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
}
var DateFormatter = (function () {
    function DateFormatter() {
    }
    /**
     * @param {?} date
     * @param {?} locale
     * @param {?} pattern
     * @return {?}
     */
    DateFormatter.format = function (date, locale, pattern) {
        return dateFormatter(pattern, date, locale);
    };
    return DateFormatter;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
/**
 * @param {?} pipe
 * @param {?} locale
 * @param {?} value
 * @param {?} style
 * @param {?=} digits
 * @param {?=} currency
 * @param {?=} currencyAsSymbol
 * @return {?}
 */
function formatNumber(pipe, locale, value, style, digits, currency, currencyAsSymbol) {
    if (currency === void 0) { currency = null; }
    if (currencyAsSymbol === void 0) { currencyAsSymbol = false; }
    if (value == null)
        return null;
    // Convert strings to numbers
    value = typeof value === 'string' && isNumeric(value) ? +value : value;
    if (typeof value !== 'number') {
        throw invalidPipeArgumentError(pipe, value);
    }
    var /** @type {?} */ minInt = undefined;
    var /** @type {?} */ minFraction = undefined;
    var /** @type {?} */ maxFraction = undefined;
    if (style !== NumberFormatStyle.Currency) {
        // rely on Intl default for currency
        minInt = 1;
        minFraction = 0;
        maxFraction = 3;
    }
    if (digits) {
        var /** @type {?} */ parts = digits.match(_NUMBER_FORMAT_REGEXP);
        if (parts === null) {
            throw new Error(digits + " is not a valid digit info for number pipes");
        }
        if (parts[1] != null) {
            minInt = parseIntAutoRadix(parts[1]);
        }
        if (parts[3] != null) {
            minFraction = parseIntAutoRadix(parts[3]);
        }
        if (parts[5] != null) {
            maxFraction = parseIntAutoRadix(parts[5]);
        }
    }
    return NumberFormatter.format(/** @type {?} */ (value), locale, style, {
        minimumIntegerDigits: minInt,
        minimumFractionDigits: minFraction,
        maximumFractionDigits: maxFraction,
        currency: currency,
        currencyAsSymbol: currencyAsSymbol,
    });
}
/**
 * \@ngModule CommonModule
 * \@whatItDoes Formats a number according to locale rules.
 * \@howToUse `number_expression | number[:digitInfo]`
 *
 * Formats a number as text. Group sizing and separator and other locale-specific
 * configurations are based on the active locale.
 *
 * where `expression` is a number:
 *  - `digitInfo` is a `string` which has a following format: <br>
 *     <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>
 *   - `minIntegerDigits` is the minimum number of integer digits to use. Defaults to `1`.
 *   - `minFractionDigits` is the minimum number of digits after fraction. Defaults to `0`.
 *   - `maxFractionDigits` is the maximum number of digits after fraction. Defaults to `3`.
 *
 * For more information on the acceptable range for each of these numbers and other
 * details see your native internationalization library.
 *
 * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
 * and may require a polyfill. See {\@linkDocs guide/browser-support} for details.
 *
 * ### Example
 *
 * {\@example common/pipes/ts/number_pipe.ts region='NumberPipe'}
 *
 * \@stable
 */
var DecimalPipe = (function () {
    /**
     * @param {?} _locale
     */
    function DecimalPipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} value
     * @param {?=} digits
     * @return {?}
     */
    DecimalPipe.prototype.transform = function (value, digits) {
        return formatNumber(DecimalPipe, this._locale, value, NumberFormatStyle.Decimal, digits);
    };
    return DecimalPipe;
}());
DecimalPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'number' },] },
];
/**
 * @nocollapse
 */
DecimalPipe.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
]; };
/**
 * \@ngModule CommonModule
 * \@whatItDoes Formats a number as a percentage according to locale rules.
 * \@howToUse `number_expression | percent[:digitInfo]`
 *
 * \@description
 *
 * Formats a number as percentage.
 *
 * - `digitInfo` See {\@link DecimalPipe} for detailed description.
 *
 * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
 * and may require a polyfill. See {\@linkDocs guide/browser-support} for details.
 *
 * ### Example
 *
 * {\@example common/pipes/ts/number_pipe.ts region='PercentPipe'}
 *
 * \@stable
 */
var PercentPipe = (function () {
    /**
     * @param {?} _locale
     */
    function PercentPipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} value
     * @param {?=} digits
     * @return {?}
     */
    PercentPipe.prototype.transform = function (value, digits) {
        return formatNumber(PercentPipe, this._locale, value, NumberFormatStyle.Percent, digits);
    };
    return PercentPipe;
}());
PercentPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'percent' },] },
];
/**
 * @nocollapse
 */
PercentPipe.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
]; };
/**
 * \@ngModule CommonModule
 * \@whatItDoes Formats a number as currency using locale rules.
 * \@howToUse `number_expression | currency[:currencyCode[:symbolDisplay[:digitInfo]]]`
 * \@description
 *
 * Use `currency` to format a number as currency.
 *
 * - `currencyCode` is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, such
 *    as `USD` for the US dollar and `EUR` for the euro.
 * - `symbolDisplay` is a boolean indicating whether to use the currency symbol or code.
 *   - `true`: use symbol (e.g. `$`).
 *   - `false`(default): use code (e.g. `USD`).
 * - `digitInfo` See {\@link DecimalPipe} for detailed description.
 *
 * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
 * and may require a polyfill. See {\@linkDocs guide/browser-support} for details.
 *
 * ### Example
 *
 * {\@example common/pipes/ts/number_pipe.ts region='CurrencyPipe'}
 *
 * \@stable
 */
var CurrencyPipe = (function () {
    /**
     * @param {?} _locale
     */
    function CurrencyPipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} symbolDisplay
     * @param {?=} digits
     * @return {?}
     */
    CurrencyPipe.prototype.transform = function (value, currencyCode, symbolDisplay, digits) {
        if (currencyCode === void 0) { currencyCode = 'USD'; }
        if (symbolDisplay === void 0) { symbolDisplay = false; }
        return formatNumber(CurrencyPipe, this._locale, value, NumberFormatStyle.Currency, digits, currencyCode, symbolDisplay);
    };
    return CurrencyPipe;
}());
CurrencyPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'currency' },] },
];
/**
 * @nocollapse
 */
CurrencyPipe.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
]; };
/**
 * @param {?} text
 * @return {?}
 */
function parseIntAutoRadix(text) {
    var /** @type {?} */ result = parseInt(text);
    if (isNaN(result)) {
        throw new Error('Invalid integer literal when parsing ' + text);
    }
    return result;
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumeric(value) {
    return !isNaN(value - parseFloat(value));
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ISO8601_DATE_REGEX = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
/**
 * \@ngModule CommonModule
 * \@whatItDoes Formats a date according to locale rules.
 * \@howToUse `date_expression | date[:format]`
 * \@description
 *
 * Where:
 * - `expression` is a date object or a number (milliseconds since UTC epoch) or an ISO string
 * (https://www.w3.org/TR/NOTE-datetime).
 * - `format` indicates which date/time components to include. The format can be predefined as
 *   shown below or custom as shown in the table.
 *   - `'medium'`: equivalent to `'yMMMdjms'` (e.g. `Sep 3, 2010, 12:05:08 PM` for `en-US`)
 *   - `'short'`: equivalent to `'yMdjm'` (e.g. `9/3/2010, 12:05 PM` for `en-US`)
 *   - `'fullDate'`: equivalent to `'yMMMMEEEEd'` (e.g. `Friday, September 3, 2010` for `en-US`)
 *   - `'longDate'`: equivalent to `'yMMMMd'` (e.g. `September 3, 2010` for `en-US`)
 *   - `'mediumDate'`: equivalent to `'yMMMd'` (e.g. `Sep 3, 2010` for `en-US`)
 *   - `'shortDate'`: equivalent to `'yMd'` (e.g. `9/3/2010` for `en-US`)
 *   - `'mediumTime'`: equivalent to `'jms'` (e.g. `12:05:08 PM` for `en-US`)
 *   - `'shortTime'`: equivalent to `'jm'` (e.g. `12:05 PM` for `en-US`)
 *
 *
 *  | Component | Symbol | Narrow | Short Form   | Long Form         | Numeric   | 2-digit   |
 *  |-----------|:------:|--------|--------------|-------------------|-----------|-----------|
 *  | era       |   G    | G (A)  | GGG (AD)     | GGGG (Anno Domini)| -         | -         |
 *  | year      |   y    | -      | -            | -                 | y (2015)  | yy (15)   |
 *  | month     |   M    | L (S)  | MMM (Sep)    | MMMM (September)  | M (9)     | MM (09)   |
 *  | day       |   d    | -      | -            | -                 | d (3)     | dd (03)   |
 *  | weekday   |   E    | E (S)  | EEE (Sun)    | EEEE (Sunday)     | -         | -         |
 *  | hour      |   j    | -      | -            | -                 | j (13)    | jj (13)   |
 *  | hour12    |   h    | -      | -            | -                 | h (1 PM)  | hh (01 PM)|
 *  | hour24    |   H    | -      | -            | -                 | H (13)    | HH (13)   |
 *  | minute    |   m    | -      | -            | -                 | m (5)     | mm (05)   |
 *  | second    |   s    | -      | -            | -                 | s (9)     | ss (09)   |
 *  | timezone  |   z    | -      | -            | z (Pacific Standard Time)| -  | -         |
 *  | timezone  |   Z    | -      | Z (GMT-8:00) | -                 | -         | -         |
 *  | timezone  |   a    | -      | a (PM)       | -                 | -         | -         |
 *
 * In javascript, only the components specified will be respected (not the ordering,
 * punctuations, ...) and details of the formatting will be dependent on the locale.
 *
 * Timezone of the formatted text will be the local system timezone of the end-user's machine.
 *
 * When the expression is a ISO string without time (e.g. 2016-09-19) the time zone offset is not
 * applied and the formatted text will have the same day, month and year of the expression.
 *
 * WARNINGS:
 * - this pipe is marked as pure hence it will not be re-evaluated when the input is mutated.
 *   Instead users should treat the date as an immutable object and change the reference when the
 *   pipe needs to re-run (this is to avoid reformatting the date on every change detection run
 *   which would be an expensive operation).
 * - this pipe uses the Internationalization API. Therefore it is only reliable in Chrome and Opera
 *   browsers.
 *
 * ### Examples
 *
 * Assuming `dateObj` is (year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11)
 * in the _local_ time and locale is 'en-US':
 *
 * ```
 *     {{ dateObj | date }}               // output is 'Jun 15, 2015'
 *     {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
 *     {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
 *     {{ dateObj | date:'mmss' }}        // output is '43:11'
 * ```
 *
 * {\@example common/pipes/ts/date_pipe.ts region='DatePipe'}
 *
 * \@stable
 */
var DatePipe = (function () {
    /**
     * @param {?} _locale
     */
    function DatePipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} value
     * @param {?=} pattern
     * @return {?}
     */
    DatePipe.prototype.transform = function (value, pattern) {
        if (pattern === void 0) { pattern = 'mediumDate'; }
        var /** @type {?} */ date;
        if (isBlank(value) || value !== value)
            return null;
        if (typeof value === 'string') {
            value = value.trim();
        }
        if (isDate(value)) {
            date = value;
        }
        else if (isNumeric(value)) {
            date = new Date(parseFloat(value));
        }
        else if (typeof value === 'string' && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
            /**
            * For ISO Strings without time the day, month and year must be extracted from the ISO String
            * before Date creation to avoid time offset and errors in the new Date.
            * If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
            * date, some browsers (e.g. IE 9) will throw an invalid Date error
            * If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the timeoffset
            * is applied
            * Note: ISO months are 0 for January, 1 for February, ...
            */
            var _a = value.split('-').map(function (val) { return parseInt(val, 10); }), y = _a[0], m = _a[1], d = _a[2];
            date = new Date(y, m - 1, d);
        }
        else {
            date = new Date(value);
        }
        if (!isDate(date)) {
            var /** @type {?} */ match = void 0;
            if ((typeof value === 'string') && (match = value.match(ISO8601_DATE_REGEX))) {
                date = isoStringToDate(match);
            }
            else {
                throw invalidPipeArgumentError(DatePipe, value);
            }
        }
        return DateFormatter.format(date, this._locale, DatePipe._ALIASES[pattern] || pattern);
    };
    return DatePipe;
}());
/**
 * \@internal
 */
DatePipe._ALIASES = {
    'medium': 'yMMMdjms',
    'short': 'yMdjm',
    'fullDate': 'yMMMMEEEEd',
    'longDate': 'yMMMMd',
    'mediumDate': 'yMMMd',
    'shortDate': 'yMd',
    'mediumTime': 'jms',
    'shortTime': 'jm'
};
DatePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'date', pure: true },] },
];
/**
 * @nocollapse
 */
DatePipe.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
]; };
/**
 * @param {?} obj
 * @return {?}
 */
function isBlank(obj) {
    return obj == null || obj === '';
}
/**
 * @param {?} obj
 * @return {?}
 */
function isDate(obj) {
    return obj instanceof Date && !isNaN(obj.valueOf());
}
/**
 * @param {?} match
 * @return {?}
 */
function isoStringToDate(match) {
    var /** @type {?} */ date = new Date(0);
    var /** @type {?} */ tzHour = 0;
    var /** @type {?} */ tzMin = 0;
    var /** @type {?} */ dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
    var /** @type {?} */ timeSetter = match[8] ? date.setUTCHours : date.setHours;
    if (match[9]) {
        tzHour = toInt(match[9] + match[10]);
        tzMin = toInt(match[9] + match[11]);
    }
    dateSetter.call(date, toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
    var /** @type {?} */ h = toInt(match[4] || '0') - tzHour;
    var /** @type {?} */ m = toInt(match[5] || '0') - tzMin;
    var /** @type {?} */ s = toInt(match[6] || '0');
    var /** @type {?} */ ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
    timeSetter.call(date, h, m, s, ms);
    return date;
}
/**
 * @param {?} str
 * @return {?}
 */
function toInt(str) {
    return parseInt(str, 10);
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _INTERPOLATION_REGEXP = /#/g;
/**
 * \@ngModule CommonModule
 * \@whatItDoes Maps a value to a string that pluralizes the value according to locale rules.
 * \@howToUse `expression | i18nPlural:mapping`
 * \@description
 *
 *  Where:
 *  - `expression` is a number.
 *  - `mapping` is an object that mimics the ICU format, see
 *    http://userguide.icu-project.org/formatparse/messages
 *
 *  ## Example
 *
 * {\@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}
 *
 * \@experimental
 */
var I18nPluralPipe = (function () {
    /**
     * @param {?} _localization
     */
    function I18nPluralPipe(_localization) {
        this._localization = _localization;
    }
    /**
     * @param {?} value
     * @param {?} pluralMap
     * @return {?}
     */
    I18nPluralPipe.prototype.transform = function (value, pluralMap) {
        if (value == null)
            return '';
        if (typeof pluralMap !== 'object' || pluralMap === null) {
            throw invalidPipeArgumentError(I18nPluralPipe, pluralMap);
        }
        var /** @type {?} */ key = getPluralCategory(value, Object.keys(pluralMap), this._localization);
        return pluralMap[key].replace(_INTERPOLATION_REGEXP, value.toString());
    };
    return I18nPluralPipe;
}());
I18nPluralPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'i18nPlural', pure: true },] },
];
/**
 * @nocollapse
 */
I18nPluralPipe.ctorParameters = function () { return [
    { type: NgLocalization, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 * \@whatItDoes Generic selector that displays the string that matches the current value.
 * \@howToUse `expression | i18nSelect:mapping`
 * \@description
 *
 *  Where `mapping` is an object that indicates the text that should be displayed
 *  for different values of the provided `expression`.
 *  If none of the keys of the mapping match the value of the `expression`, then the content
 *  of the `other` key is returned when present, otherwise an empty string is returned.
 *
 *  ## Example
 *
 * {\@example common/pipes/ts/i18n_pipe.ts region='I18nSelectPipeComponent'}
 *
 *  \@experimental
 */
var I18nSelectPipe = (function () {
    function I18nSelectPipe() {
    }
    /**
     * @param {?} value
     * @param {?} mapping
     * @return {?}
     */
    I18nSelectPipe.prototype.transform = function (value, mapping) {
        if (value == null)
            return '';
        if (typeof mapping !== 'object' || typeof value !== 'string') {
            throw invalidPipeArgumentError(I18nSelectPipe, mapping);
        }
        if (mapping.hasOwnProperty(value)) {
            return mapping[value];
        }
        if (mapping.hasOwnProperty('other')) {
            return mapping['other'];
        }
        return '';
    };
    return I18nSelectPipe;
}());
I18nSelectPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'i18nSelect', pure: true },] },
];
/**
 * @nocollapse
 */
I18nSelectPipe.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 * \@whatItDoes Converts value into JSON string.
 * \@howToUse `expression | json`
 * \@description
 *
 * Converts value into string using `JSON.stringify`. Useful for debugging.
 *
 * ### Example
 * {\@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
 *
 * \@stable
 */
var JsonPipe = (function () {
    function JsonPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    JsonPipe.prototype.transform = function (value) { return JSON.stringify(value, null, 2); };
    return JsonPipe;
}());
JsonPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'json', pure: false },] },
];
/**
 * @nocollapse
 */
JsonPipe.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 * \@whatItDoes Creates a new List or String containing a subset (slice) of the elements.
 * \@howToUse `array_or_string_expression | slice:start[:end]`
 * \@description
 *
 * Where the input expression is a `List` or `String`, and:
 * - `start`: The starting index of the subset to return.
 *   - **a positive integer**: return the item at `start` index and all items after
 *     in the list or string expression.
 *   - **a negative integer**: return the item at `start` index from the end and all items after
 *     in the list or string expression.
 *   - **if positive and greater than the size of the expression**: return an empty list or string.
 *   - **if negative and greater than the size of the expression**: return entire list or string.
 * - `end`: The ending index of the subset to return.
 *   - **omitted**: return all items until the end.
 *   - **if positive**: return all items before `end` index of the list or string.
 *   - **if negative**: return all items before `end` index from the end of the list or string.
 *
 * All behavior is based on the expected behavior of the JavaScript API `Array.prototype.slice()`
 * and `String.prototype.slice()`.
 *
 * When operating on a [List], the returned list is always a copy even when all
 * the elements are being returned.
 *
 * When operating on a blank value, the pipe returns the blank value.
 *
 * ## List Example
 *
 * This `ngFor` example:
 *
 * {\@example common/pipes/ts/slice_pipe.ts region='SlicePipe_list'}
 *
 * produces the following:
 *
 *     <li>b</li>
 *     <li>c</li>
 *
 * ## String Examples
 *
 * {\@example common/pipes/ts/slice_pipe.ts region='SlicePipe_string'}
 *
 * \@stable
 */
var SlicePipe = (function () {
    function SlicePipe() {
    }
    /**
     * @param {?} value
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    SlicePipe.prototype.transform = function (value, start, end) {
        if (value == null)
            return value;
        if (!this.supports(value)) {
            throw invalidPipeArgumentError(SlicePipe, value);
        }
        return value.slice(start, end);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    SlicePipe.prototype.supports = function (obj) { return typeof obj === 'string' || Array.isArray(obj); };
    return SlicePipe;
}());
SlicePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'slice', pure: false },] },
];
/**
 * @nocollapse
 */
SlicePipe.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * This module provides a set of common Pipes.
 */
/**
 * A collection of Angular pipes that are likely to be used in each and every application.
 */
var COMMON_PIPES = [
    AsyncPipe,
    UpperCasePipe,
    LowerCasePipe,
    JsonPipe,
    SlicePipe,
    DecimalPipe,
    PercentPipe,
    TitleCasePipe,
    CurrencyPipe,
    DatePipe,
    I18nPluralPipe,
    I18nSelectPipe,
];
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The module that includes all the basic Angular directives like {\@link NgIf}, {\@link NgForOf}, ...
 *
 * \@stable
 */
var CommonModule = (function () {
    function CommonModule() {
    }
    return CommonModule;
}());
CommonModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [COMMON_DIRECTIVES, COMMON_PIPES],
                exports: [COMMON_DIRECTIVES, COMMON_PIPES],
                providers: [
                    { provide: NgLocalization, useClass: NgLocaleLocalization },
                ],
            },] },
];
/**
 * @nocollapse
 */
CommonModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
/**
 * \@stable
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Version"]('4.1.3');

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof commonjsGlobal !== 'undefined' && commonjsGlobal;
var _root = __window || __global || __self;
var root_1 = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();


var root = {
	root: root_1
};

function isFunction(x) {
    return typeof x === 'function';
}
var isFunction_2 = isFunction;


var isFunction_1 = {
	isFunction: isFunction_2
};

var isArray_1 = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });


var isArray = {
	isArray: isArray_1
};

function isObject(x) {
    return x != null && typeof x === 'object';
}
var isObject_2 = isObject;


var isObject_1 = {
	isObject: isObject_2
};

// typeof any so that it we don't have to cast when comparing a result to the error object
var errorObject_1 = { e: {} };


var errorObject = {
	errorObject: errorObject_1
};

var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject.errorObject.e = e;
        return errorObject.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
var tryCatch_2 = tryCatch;



var tryCatch_1 = {
	tryCatch: tryCatch_2
};

var __extends$3 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends$3(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
var UnsubscriptionError_2 = UnsubscriptionError;


var UnsubscriptionError_1 = {
	UnsubscriptionError: UnsubscriptionError_2
};

/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject.errorObject.e.errors) : [errorObject.errorObject.e]);
            }
        }
        if (isArray.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
var Subscription_2 = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}


var Subscription_1 = {
	Subscription: Subscription_2
};

var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};


var Observer = {
	empty: empty
};

var rxSubscriber = createCommonjsModule(function (module, exports) {
"use strict";

var Symbol = root.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;

});

var __extends$2 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends$2(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
var Subscriber_2 = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends$2(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));


var Subscriber_1 = {
	Subscriber: Subscriber_2
};

function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber.rxSubscriber]) {
            return nextOrObserver[rxSubscriber.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
var toSubscriber_2 = toSubscriber;


var toSubscriber_1 = {
	toSubscriber: toSubscriber_2
};

var observable = createCommonjsModule(function (module, exports) {
"use strict";

function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.observable = getSymbolObservable(root.root);
/**
 * @deprecated use observable instead
 */
exports.$$observable = exports.observable;

});

/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable$$1 = new Observable();
        observable$$1.source = this;
        observable$$1.operator = operator;
        return observable$$1;
    };
    /**
     * Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
     *
     * <span class="informal">Use it when you have all these Observables, but still nothing is happening.</span>
     *
     * `subscribe` is not a regular operator, but a method that calls Observables internal `subscribe` function. It
     * might be for example a function that you passed to a {@link create} static factory, but most of the time it is
     * a library implementation, which defines what and when will be emitted by an Observable. This means that calling
     * `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often
     * thought.
     *
     * Apart from starting the execution of an Observable, this method allows you to listen for values
     * that an Observable emits, as well as for when it completes or errors. You can achieve this in two
     * following ways.
     *
     * The first way is creating an object that implements {@link Observer} interface. It should have methods
     * defined by that interface, but note that it should be just a regular JavaScript object, which you can create
     * yourself in any way you want (ES6 class, classic function constructor, object literal etc.). In particular do
     * not attempt to use any RxJS implementation details to create Observers - you don't need them. Remember also
     * that your object does not have to implement all methods. If you find yourself creating a method that doesn't
     * do anything, you can simply omit it. Note however, that if `error` method is not provided, all errors will
     * be left uncaught.
     *
     * The second way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
     * This means you can provide three functions as arguments to `subscribe`, where first function is equivalent
     * of a `next` method, second of an `error` method and third of a `complete` method. Just as in case of Observer,
     * if you do not need to listen for something, you can omit a function, preferably by passing `undefined` or `null`,
     * since `subscribe` recognizes these functions by where they were placed in function call. When it comes
     * to `error` function, just as before, if not provided, errors emitted by an Observable will be thrown.
     *
     * Whatever style of calling `subscribe` you use, in both cases it returns a Subscription object.
     * This object allows you to call `unsubscribe` on it, which in turn will stop work that an Observable does and will clean
     * up all resources that an Observable used. Note that cancelling a subscription will not call `complete` callback
     * provided to `subscribe` function, which is reserved for a regular completion signal that comes from an Observable.
     *
     * Remember that callbacks provided to `subscribe` are not guaranteed to be called asynchronously.
     * It is an Observable itself that decides when these functions will be called. For example {@link of}
     * by default emits all its values synchronously. Always check documentation for how given Observable
     * will behave when subscribed and if its default behavior can be modified with a {@link Scheduler}.
     *
     * @example <caption>Subscribe with an Observer</caption>
     * const sumObserver = {
     *   sum: 0,
     *   next(value) {
     *     console.log('Adding: ' + value);
     *     this.sum = this.sum + value;
     *   },
     *   error() { // We actually could just remote this method,
     *   },        // since we do not really care about errors right now.
     *   complete() {
     *     console.log('Sum equals: ' + this.sum);
     *   }
     * };
     *
     * Rx.Observable.of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
     * .subscribe(sumObserver);
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Subscribe with functions</caption>
     * let sum = 0;
     *
     * Rx.Observable.of(1, 2, 3)
     * .subscribe(
     *   function(value) {
     *     console.log('Adding: ' + value);
     *     sum = sum + value;
     *   },
     *   undefined,
     *   function() {
     *     console.log('Sum equals: ' + sum);
     *   }
     * );
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Cancel a subscription</caption>
     * const subscription = Rx.Observable.interval(1000).subscribe(
     *   num => console.log(num),
     *   undefined,
     *   () => console.log('completed!') // Will not be called, even
     * );                                // when cancelling subscription
     *
     *
     * setTimeout(() => {
     *   subscription.unsubscribe();
     *   console.log('unsubscribed!');
     * }, 2500);
     *
     * // Logs:
     * // 0 after 1s
     * // 1 after 2s
     * // "unsubscribed!" after 2,5s
     *
     *
     * @param {Observer|Function} observerOrNext (optional) Either an observer with methods to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the subscribed
     *  Observable.
     * @param {Function} error (optional) A handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled.
     * @param {Function} complete (optional) A handler for a terminal event resulting from successful completion.
     * @return {ISubscription} a subscription reference to the registered handlers
     * @method subscribe
     */
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this.source ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root.root.Rx && root.root.Rx.config && root.root.Rx.config.Promise) {
                PromiseCtor = root.root.Rx.config.Promise;
            }
            else if (root.root.Promise) {
                PromiseCtor = root.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable.observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
var Observable_2 = Observable;


var Observable_1 = {
	Observable: Observable_2
};

var __extends$4 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an action is invalid because the object has been
 * unsubscribed.
 *
 * @see {@link Subject}
 * @see {@link BehaviorSubject}
 *
 * @class ObjectUnsubscribedError
 */
var ObjectUnsubscribedError = (function (_super) {
    __extends$4(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
        var err = _super.call(this, 'object unsubscribed');
        this.name = err.name = 'ObjectUnsubscribedError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ObjectUnsubscribedError;
}(Error));
var ObjectUnsubscribedError_2 = ObjectUnsubscribedError;


var ObjectUnsubscribedError_1 = {
	ObjectUnsubscribedError: ObjectUnsubscribedError_2
};

var __extends$5 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubjectSubscription = (function (_super) {
    __extends$5(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        _super.call(this);
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
var SubjectSubscription_2 = SubjectSubscription;


var SubjectSubscription_1 = {
	SubjectSubscription: SubjectSubscription_2
};

var __extends$1 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






/**
 * @class SubjectSubscriber<T>
 */
var SubjectSubscriber = (function (_super) {
    __extends$1(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        _super.call(this, destination);
        this.destination = destination;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
/**
 * @class Subject<T>
 */
var Subject = (function (_super) {
    __extends$1(Subject, _super);
    function Subject() {
        _super.call(this);
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    Subject.prototype[rxSubscriber.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
var Subject_2 = Subject;
/**
 * @class AnonymousSubject<T>
 */
var AnonymousSubject = (function (_super) {
    __extends$1(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        _super.call(this);
        this.destination = destination;
        this.source = source;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));

var DragDropDirectiveService = (function () {
    function DragDropDirectiveService() {
        this.dropItem = new Subject_2();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    DragDropDirectiveService.prototype.setDropItem = function (item) {
        this.dropItem.next(item);
    };
    /**
     * @return {?}
     */
    DragDropDirectiveService.prototype.getDropItem = function () {
        return this.dropItem.asObservable();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    DragDropDirectiveService.prototype.setDragItem = function (item) {
        this.draggedItem = item;
    };
    /**
     * @return {?}
     */
    DragDropDirectiveService.prototype.getDragItem = function () {
        return this.draggedItem;
    };
    return DragDropDirectiveService;
}());
DragDropDirectiveService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
DragDropDirectiveService.ctorParameters = function () { return []; };

var DragDirective = (function () {
    /**
     * @param {?} el
     * @param {?} dragDropDirectiveService
     */
    function DragDirective(el, dragDropDirectiveService) {
        this.el = el;
        this.dragDropDirectiveService = dragDropDirectiveService;
        this.releaseDrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.startDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.highlighted = false;
        this.el.nativeElement.draggable = 'true';
    }
    /**
     * @return {?}
     */
    DragDirective.prototype.onMouseEnter = function () {
        this.highlight();
    };
    /**
     * @return {?}
     */
    DragDirective.prototype.onMouseOut = function () {
        this.highlight();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DragDirective.prototype.onDragStart = function (event) {
        var _this = this;
        // html draggable will not transfer an object, so we stringify it
        var /** @type {?} */ transferObject = { object: this.draggedItem, id: 'draggedItemID-' + new Date().getTime() };
        var /** @type {?} */ transferObjectString = JSON.stringify(transferObject);
        event.dataTransfer.setData("text", transferObjectString);
        this.dragDropDirectiveService.setDragItem(this.draggedItem);
        this.dropSubscription = this.dragDropDirectiveService.getDropItem().subscribe(function (item) {
            _this.emitDraggedItem(_this.draggedItem);
        });
        this.startDrag.emit(this.draggedItem);
    };
    /**
     * @return {?}
     */
    DragDirective.prototype.onDragEnd = function () {
        if (typeof this.dropSubscription !== 'undefined') {
            this.dropSubscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    DragDirective.prototype.ngOnDestroy = function () {
        if (typeof this.dropSubscription !== 'undefined') {
            this.dropSubscription.unsubscribe();
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    DragDirective.prototype.emitDraggedItem = function (item) {
        this.releaseDrop.emit(item);
        this.dropSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    DragDirective.prototype.highlight = function () {
        if (this.cssHighlight) {
            if (!this.highlighted) {
                this.el.nativeElement.classList.add(this.cssHighlight);
            }
            else {
                this.el.nativeElement.classList.remove(this.cssHighlight);
            }
        }
        this.highlighted = !this.highlighted;
    };
    return DragDirective;
}());
DragDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[dragDirective]'
            },] },
];
/**
 * @nocollapse
 */
DragDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: DragDropDirectiveService, },
]; };
DragDirective.propDecorators = {
    'draggedItem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['dragDirective',] },],
    'cssHighlight': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['dragHightlight',] },],
    'releaseDrop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'startDrag': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onMouseEnter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseenter',] },],
    'onMouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseleave',] },],
    'onDragStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['dragstart', ['$event'],] },],
    'onDragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['dragend',] },],
};

var DropDirective = (function () {
    /**
     * @param {?} el
     * @param {?} dragDropDirectiveService
     */
    function DropDirective(el, dragDropDirectiveService) {
        this.el = el;
        this.dragDropDirectiveService = dragDropDirectiveService;
        this.dropEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragenterEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragleaveEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dropEventMouse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragoverMouseEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.highlighted = false;
    }
    /**
     * @return {?}
     */
    DropDirective.prototype.onDragEnter = function () {
        this.dragItem = this.dragDropDirectiveService.getDragItem();
        this.dragenterEvent.emit(this.dragItem);
        //this.highlighted = true;
        this.highlight();
    };
    /**
     * @return {?}
     */
    DropDirective.prototype.onDragLeave = function () {
        this.dragItem = this.dragDropDirectiveService.getDragItem();
        this.dragleaveEvent.emit(this.dragItem);
        //this.highlighted = false;
        this.highlight();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DropDirective.prototype.onDragOver = function (event) {
        event.preventDefault();
        this.dragoverMouseEvent.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DropDirective.prototype.onDrop = function (event) {
        // check to see if we are getting what was sent. text/plain
        var /** @type {?} */ eventData = event.dataTransfer.getData('text');
        if (eventData && event.dataTransfer.files.length == 0) {
            event.preventDefault();
            // since html draggable will not transer an object, we need to parse are string
            var /** @type {?} */ transferredObjectString = JSON.parse(eventData);
            var /** @type {?} */ transferredObjectID = transferredObjectString.id;
            var /** @type {?} */ transferredObject = transferredObjectString.object;
            this.dropEvent.emit(transferredObject);
            this.dragDropDirectiveService.setDropItem(transferredObjectID);
        }
        this.dropEventMouse.emit(event);
        this.highlight();
    };
    /**
     * @return {?}
     */
    DropDirective.prototype.highlight = function () {
        if (this.cssHighlight) {
            if (!this.highlighted) {
                this.el.nativeElement.classList.add(this.cssHighlight);
            }
            else {
                this.el.nativeElement.classList.remove(this.cssHighlight);
            }
        }
        this.highlighted = !this.highlighted;
    };
    return DropDirective;
}());
DropDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[dropDirective]'
            },] },
];
/**
 * @nocollapse
 */
DropDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: DragDropDirectiveService, },
]; };
DropDirective.propDecorators = {
    'cssHighlight': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['dropHighlight',] },],
    'dropEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dragenterEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dragleaveEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dropEventMouse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dragoverMouseEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onDragEnter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['dragenter',] },],
    'onDragLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['dragleave',] },],
    'onDragOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['dragover', ['$event'],] },],
    'onDrop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['drop', ['$event'],] },],
};

var DragDropDirectiveModule = (function () {
    function DragDropDirectiveModule() {
    }
    return DragDropDirectiveModule;
}());
DragDropDirectiveModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    DragDirective,
                    DropDirective
                ],
                providers: [
                    DragDropDirectiveService
                ],
                exports: [
                    DragDirective,
                    DropDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
DragDropDirectiveModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=angular4-drag-drop.es5.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ })

});
//# sourceMappingURL=questionaire.module.chunk.js.map