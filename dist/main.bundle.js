webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12\">\n                <h1>User Registration</h1>\n            </div>\n        </div>\n    \n        <div class=\"row\" *ngIf=\"!isSubmitted\">\n            <div class=\"col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12\">\n                <form #regForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n                    <div class=\"form-group\">\n                        <div>\n                            <label for=\"email\">Email Address</label>\n                        </div>\n                        \n                        <input id=\"email\" #email=\"ngModel\" name=\"email\" type=\"text\" [(ngModel)]=\"model.email\" placeholder=\"you@domain.com\" class=\"form-control\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required/> \n                        <div *ngIf=\"email.errors && (email.touched || isSubmitted)\">\n                            <div [hidden]=\"!email.errors.required && email.dirty\" class=\"help-block alert alert-danger\">\n                                Email is required.\n                            </div>\n                            <div [hidden]=\"!email.errors.pattern\" class=\"help-block alert alert-danger\">\n                                <span class=\"help-block alert\">\n                                Email is invalid.\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <div>\n                            <label for=\"password\">Password {{password.errors.required}}</label>\n                        </div>\n                        <input id=\"password\" #password=\"ngModel\" name=\"password\" type=\"password\" [(ngModel)]=\"model.password\" placeholder=\"something secret\" class=\"form-control\" pattern=\"^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$\" required/>         \n                        <div *ngIf=\"password.errors && (password.touched || isSubmitted)\">\n                                <div [hidden]=\"!password.errors.required && password.dirty\" class=\"help-block alert alert-danger\">\n                                    Password is required.\n                                </div>\n                                <div [hidden]=\"!password.errors.pattern\" class=\"help-block alert alert-danger\">\n                                    <span class=\"help-block alert\">Password must include special characters (!@#$%^&*). Alphanumeric and both uppercase & lowercase.\n                                    </span>\n                                </div>\n                            </div> \n                    </div>\n                    <div class=\"form-group\">\n                        <div>\n                            <label for=\"confirmpassword\">Confirm Password</label>\n                        </div>\n                        <input id=\"confirmpassword\" #confirmpassword=\"ngModel\" name=\"confirmpassword\" [(ngModel)]=\"model.confirmPassword\" type=\"password\" placeholder=\"something secret\"  class=\"form-control\" required [required]=\"model.password\"/>\n                        <div *ngIf=\"confirmpassword.errors && (confirmpassword.touched || isSubmitted)\">\n                                <div [hidden]=\"!confirmpassword.errors.required && confirmpassword.dirty\" class=\"help-block alert alert-danger\">\n                                    Confirm Password is required.\n                                </div>\n                        </div>\n                        <div *ngIf=\"confirmpassword.dirty\" [hidden]=\"!(model.confirmPassword != model.password)\" class=\"help-block alert alert-danger\">\n                                <span class=\"help-block alert alert-danger\">\n                                    Password do not match.\n                                </span>\n\n                        </div>      \n                    </div>\n\n                    <div class=\"form-group\">\n                        <div>\n                            <label for=\"firstName\">First Name </label>\n                        </div>\n                        <input id=\"firstName\" #firstName=\"ngModel\" name=\"firstName\" type=\"text\" [(ngModel)]=\"model.firstName\" placeholder=\"Emily\" class=\"form-control\" required/>\n                        <div *ngIf=\"firstName.errors && (firstName.touched || isSubmitted)\">\n                                <div [hidden]=\"!firstName.errors.required && firstName.dirty\" class=\"help-block alert alert-danger\">\n                                    First Name is required.\n                                </div>\n                        </div> \n                    </div>\n\n                    <div class=\"form-group\">\n                        <div>\n                            <label for=\"lastName\">Last Name </label>\n                        </div>\n                        <input id=\"lastName\" #lastName=\"ngModel\" name=\"lastName\" type=\"text\" [(ngModel)]=\"model.lastName\" placeholder=\"Tan\" class=\"form-control\" required/>\n                        <div *ngIf=\"lastName.errors && (lastName.touched || isSubmitted)\">\n                                <div [hidden]=\"!lastName.errors.required && lastName.dirty\" class=\"help-block alert alert-danger\">\n                                    Last Name is required.\n                                </div>\n                        </div> \n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"gender\">Gender</label>\n                        <br/>\n                        <input name=\"gender\" type=\"radio\" [(ngModel)]=\"model.gender\" value=\"{{gender[0]}}\"/> Male\n                        <br/>\n                        <input name=\"gender\" type=\"radio\" [(ngModel)]=\"model.gender\" value=\"{{gender[1]}}\" /> Female\n                    </div>\n                    \n                    <div class=\"form-group\">\n                        <label for=\"dob\">Date of Birth</label>\n                        <input id=\"dob\" name=\"dob\" type=\"date\" #dateOfBirth=\"ngModel\" class=\"form-control\" [(ngModel)]=\"model.dateOfBirth\"  value=\"{{ model.dateOfBirth}}\" required/>\n                        <div *ngIf=\"dateOfBirth.errors && (dateOfBirth.touched || isSubmitted)\">\n                                <div [hidden]=\"!dateOfBirth.errors.required && dateOfBirth.dirty\" class=\"help-block alert alert-danger\">\n                                    Date of Birth is required.\n                                </div>\n                        </div>  \n                    </div>\n                    \n                    <div class=\"form-group\">\n                            <label for=\"address\">Address</label>\n                            <textarea rows=\"4\" cols=\"50\" id=\"address\" name=\"address\" #address=\"ngModel\" class=\"form-control\" [(ngModel)]=\"model.address\" required>\n                            </textarea>\n                            <div *ngIf=\"address.errors && (address.touched || isSubmitted)\">\n                                    <div [hidden]=\"!address.errors.required && address.dirty\" class=\"help-block alert alert-danger\">\n                                        Address is required.\n                                    </div>\n                            </div>  \n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"nationality\">Nationality</label>\n                        <select class=\"form-control\" #nationality=\"ngModel\" id=\"nationality\" [(ngModel)]=\"model.nationality\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"onChange($event)\" required>\n                            <option *ngFor=\"let nationality of nationalities\" [ngValue]=\"nationality.value\">{{nationality.desc}}</option>\n                        </select>\n                        <p *ngIf=\"nationalities.length > 3\">{{ ' There are more than 3 countries in the list !' | uppercase }}</p>\n                        <div *ngIf=\"nationality.errors && (nationality.touched || isSubmitted)\">\n                                <div [hidden]=\"!nationality.errors.required && nationality.dirty\" class=\"help-block alert alert-danger\">\n                                    Nationality is required.\n                                </div>\n                        </div>\n                        \n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"contactNumber\">Contact Number</label>\n                        <input id=\"contactNumber\"  #contactNumber=\"ngModel\" name=\"contactNumber\" type=\"text\" class=\"form-control\"  [(ngModel)]=\"model.contactNumber\" minlength=\"8\" maxlength=\"8\" pattern=\"[0-9]*\" required/>\n                        <div *ngIf=\"contactNumber.errors && (contactNumber.touched || isSubmitted)\">\n                                <div [hidden]=\"!contactNumber.errors.required && contactNumber.dirty\" class=\"help-block alert alert-danger\">\n                                    Contact Number is required.\n                                </div>\n                                <div [hidden]=\"!contactNumber.errors.pattern\" class=\"help-block alert alert-danger\">\n                                    <span class=\"help-block alert\">Contact No. is invalid\n                                    </span>\n                                </div>\n                                <div [hidden]=\"!contactNumber.errors.minlength\" class=\"help-block alert alert-danger\">\n                                    <span class=\"help-block alert\">Contact No. must be at least 8 digit long.\n                                    </span>\n                                </div>\n                        </div>\n                        \n                    </div>\n\n                    <div class=\"form-group\">\n                        <hr/>\n                        <button type=\"submit\" [disabled]=\"!regForm.form.valid\" class=\"btn btn-success\">Submit</button>\n                        <button type=\"reset\" class=\"btn btn-danger\" (click)=\"regForm.reset()\">Reset</button>\n                    </div>\n                </form>\n    \n            </div>\n        </div>\n        \n        <div class=\"row\" *ngIf=\"isSubmitted\">\n            <div class=\"col-6\" [ngStyle]=\"{'background-color':'grey'}\">\n                    <div class=\"form-group\">\n                            <label >{{model.email}}</label> \n                    </div>\n                    <div class=\"form-group\">\n                            <label >{{model.firstName}}</label> \n                    </div>\n                    <div class=\"form-group\">\n                            <label >{{model.lastName}}</label> \n                    </div>\n                    <div class=\"form-group\">\n                            <label >{{model.gender}}</label> \n                    </div>\n                    <div class=\"form-group\">\n                            <label >{{model.address}}</label> \n                    </div>    \n                    <div class=\"form-group\">\n                            <label >{{model.dateOfBirth}}</label> \n                    </div>\n                    <div class=\"form-group\">\n                            <label >{{model.nationality}}</label> \n                    </div>\n                    <div class=\"form-group\">\n                            <label >{{model.contactNumber}}</label> \n                    </div>\n            </div>\n        </div>\n        \n    </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_registration_user__ = __webpack_require__("../../../../../src/app/shared/registration-user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.model = null;
        this.gender = ['M', 'F'];
        this.nationalities = [{ desc: 'Singapore', value: 'SG' },
            { desc: 'Malaysia', value: 'MY' },
            { desc: 'Thailand', value: 'TH' },
            { desc: 'Vietnam', value: 'VN' }];
        this.isSubmitted = false;
        this.result = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__shared_registration_user__["a" /* RegistrationUser */]('', '', '', '', '', '', null, '', 'MY', '');
    };
    // this is to handle when I click on a submit or save button.
    AppComponent.prototype.onSubmit = function () {
        console.log(this.model.email);
        console.log(this.model.password);
        console.log(this.model.confirmPassword);
        console.log(this.model.firstName);
        console.log(this.model.lastName);
        console.log(this.model.gender);
        console.log(this.model.dateOfBirth);
        console.log(this.model.address);
        console.log(this.model.nationality);
        console.log(this.model.contactNumber);
        this.isSubmitted = true;
    };
    AppComponent.prototype.onChange = function (event) {
        // empty function.
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/registration-user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationUser; });
var RegistrationUser = /** @class */ (function () {
    function RegistrationUser(email, password, confirmPassword, firstName, lastName, gender, dateOfBirth, address, nationality, contactNumber) {
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.nationality = nationality;
        this.contactNumber = contactNumber;
    }
    return RegistrationUser;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map