webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"ui vertical masthead segment\">\n    <div class=\"ui container\">\n        <toaster-container></toaster-container>\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_aspirants_aspirants_component__ = __webpack_require__("../../../../../src/app/components/aspirants/aspirants.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_elcom_officers_elcom_officers_component__ = __webpack_require__("../../../../../src/app/components/elcom-officers/elcom-officers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_electoral_guidelines_electoral_guidelines_component__ = __webpack_require__("../../../../../src/app/components/electoral-guidelines/electoral-guidelines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_elcom_service__ = __webpack_require__("../../../../../src/app/services/elcom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_paystack_service__ = __webpack_require__("../../../../../src/app/services/paystack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_status_status_component__ = __webpack_require__("../../../../../src/app/components/status/status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_aspirant_service__ = __webpack_require__("../../../../../src/app/services/aspirant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_accreditation_accreditation_component__ = __webpack_require__("../../../../../src/app/components/accreditation/accreditation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_accreditation_service__ = __webpack_require__("../../../../../src/app/services/accreditation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_sms_service__ = __webpack_require__("../../../../../src/app/services/sms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_vote_vote_component__ = __webpack_require__("../../../../../src/app/components/vote/vote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_results_results_component__ = __webpack_require__("../../../../../src/app/components/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_vote_service__ = __webpack_require__("../../../../../src/app/services/vote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_receipt_receipt_component__ = __webpack_require__("../../../../../src/app/components/receipt/receipt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_reports_reports_component__ = __webpack_require__("../../../../../src/app/components/reports/reports.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'aspirants', component: __WEBPACK_IMPORTED_MODULE_16__components_aspirants_aspirants_component__["a" /* AspirantsComponent */] },
    { path: 'elcom-officers', component: __WEBPACK_IMPORTED_MODULE_17__components_elcom_officers_elcom_officers_component__["a" /* ElcomOfficersComponent */] },
    { path: 'electoral-guidelines', component: __WEBPACK_IMPORTED_MODULE_18__components_electoral_guidelines_electoral_guidelines_component__["a" /* ElectoralGuidelinesComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'status', component: __WEBPACK_IMPORTED_MODULE_21__components_status_status_component__["a" /* StatusComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'accreditation', component: __WEBPACK_IMPORTED_MODULE_24__components_accreditation_accreditation_component__["a" /* AccreditationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'vote', component: __WEBPACK_IMPORTED_MODULE_29__components_vote_vote_component__["a" /* VoteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'results', component: __WEBPACK_IMPORTED_MODULE_30__components_results_results_component__["a" /* ResultsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'receipt', component: __WEBPACK_IMPORTED_MODULE_32__components_receipt_receipt_component__["a" /* ReceiptComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_33__components_reports_reports_component__["a" /* ReportsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_electoral_guidelines_electoral_guidelines_component__["a" /* ElectoralGuidelinesComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_elcom_officers_elcom_officers_component__["a" /* ElcomOfficersComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_aspirants_aspirants_component__["a" /* AspirantsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_status_status_component__["a" /* StatusComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_accreditation_accreditation_component__["a" /* AccreditationComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_vote_vote_component__["a" /* VoteComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_results_results_component__["a" /* ResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_receipt_receipt_component__["a" /* ReceiptComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_reports_reports_component__["a" /* ReportsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["JsonpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_14_angular2_toaster__["a" /* ToasterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_19__services_elcom_service__["a" /* ElcomService */],
            __WEBPACK_IMPORTED_MODULE_20__services_paystack_service__["a" /* PaystackService */],
            __WEBPACK_IMPORTED_MODULE_22__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_23__services_aspirant_service__["a" /* AspirantService */],
            __WEBPACK_IMPORTED_MODULE_25__services_accreditation_service__["a" /* AccreditationService */],
            __WEBPACK_IMPORTED_MODULE_26__services_mail_service__["a" /* MailService */],
            __WEBPACK_IMPORTED_MODULE_27__services_sms_service__["a" /* SmsService */],
            __WEBPACK_IMPORTED_MODULE_28__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_31__services_vote_service__["a" /* VoteService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/accreditation/accreditation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/accreditation/accreditation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\" *ngIf=\"authService.loggedIn()\">\n    <div class=\"three wide column\">\n        <div class=\"ui fluid vertical menu\">\n            <a class=\"item\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('elcom')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/elcom-officers']\">ELCOM</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('aspirants')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/aspirants']\">Aspirants</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('accreditation')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/accreditation']\">Accreditation</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('password')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/resend-password']\">Passwords</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('vote')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/vote']\">Vote</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('results')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/results']\">Results</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('reports')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/reports']\">Reports</a>\n        </div>\n    </div>\n    <div class=\"thirteen wide column\">\n        <div class=\"ui segment\">\n            <div class=\"ui large message info\">\n                Accreditation is open from {{accreditationTime.startingDay}} to {{accreditationTime.closingDay}} between the hours of {{accreditationTime.startingTime}} - {{accreditationTime.closingTime}}.\n            </div>\n            <div class=\"ui stackable grid\">\n                <div class=\"six wide column center aligned\">\n                    <div class=\"ui massive message\">\n                        Total Accredited Students\n                        <div class=\"ui divider\"></div>\n                        <h1 id=\"accredited_students\"></h1>\n                    </div>\n                    <button type=\"button\" class=\"ui primary right labeled icon fluid button\" id=\"balanceBtn\" (click)=\"checkSMSBalance()\">\n                        <i class=\"send icon\"></i>\n                        Check SMS Balance\n                    </button>\n                </div>\n                <div class=\"ten wide column\">\n                    <div class=\"ui segment\">\n                        <div class=\"ui message success\" *ngIf=\"canAccredit()\">\n                            {{message}}\n                        </div>\n                        <form class=\"ui form\" autocomplete=\"off\" (submit)=\"onAccreditSubmit()\" *ngIf=\"canAccredit()\" id=\"accreditationForm\">\n                            <div class=\"ui stackable grid\">\n                                <div class=\"ten wide column\">\n                                    <div class=\"field\" id=\"matricno_div\">\n                                        <div class=\"ui fluid action input\">\n                                            <input type=\"text\" placeholder=\"Matric Number\" (keypress)=\"triggerSearch($event)\" [(ngModel)]=\"matricno\" name=\"matricno\" id=\"matricno\">\n                                            <button type=\"button\" class=\"ui primary right labeled icon button\" (click)=\"searchMatric()\" id=\"searchBtn\">\n                                                <i class=\"search icon\"></i>\n                                                Search\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div class=\"two fields\">\n                                        <div class=\"field\" id=\"first_name_div\">\n                                            <div class=\"ui input\">\n                                                <input type=\"text\" placeholder=\"First\" [(ngModel)]=\"firstname\" name=\"firstname\" id=\"firstname\" readonly=\"\">\n                                            </div>\n                                        </div>\n                                        <div class=\"field\" id=\"middle_name_div\">\n                                            <div class=\"ui input\">\n                                                <input type=\"text\" placeholder=\"Middle\" [(ngModel)]=\"middlename\" name=\"middlename\" id=\"middlename\" readonly=\"\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"field\" id=\"last_name_div\">\n                                        <div class=\"ui input\">\n                                            <input type=\"text\" placeholder=\"Last\" [(ngModel)]=\"lastname\" name=\"lastname\" id=\"lastname\" readonly=\"\">\n                                        </div>\n                                    </div>\n                                    <div class=\"field\" id=\"email_div\">\n                                        <div class=\"ui input\">\n                                            <input type=\"email\" placeholder=\"Email Addresss\" [(ngModel)]=\"email\" name=\"email\" id=\"email\">\n                                        </div>\n                                    </div>\n                                    <div class=\"field\" id=\"phone_div\">\n                                        <div class=\"ui input\">\n                                            <input type=\"tel\" placeholder=\"Phone\" [(ngModel)]=\"phone\" name=\"phone\" id=\"phone\">\n                                        </div>\n                                    </div>\n                                    <div class=\"field\" id=\"\">\n                                        <div class=\"ui input\">\n                                            <input type=\"text\" placeholder=\"Department\" [(ngModel)]=\"department\" name=\"department\" id=\"department\" readonly=\"\">\n                                        </div>\n                                    </div>\n                                    <div class=\"field\" id=\"\">\n                                        <div class=\"ui input\">\n                                            <input type=\"text\" placeholder=\"Course of study\" [(ngModel)]=\"course\" name=\"course\" id=\"course\" readonly=\"\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"six wide column\">\n                                    <div class=\"image center aligned\">\n                                        <img class=\"ui small fluid image\" id=\"picture\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX////MzMzJycnc3NzZ2dnV1dXS0tLW1tb5+fnz8/P8/Pzu7u729vbo6Ojx8fHp6enh4eEYveNFAAAFnUlEQVR4nO2dDdqqIBBG08xSs9z/am9kX6lhyjDjvOPlrMDzgPMDKIdDIpFIJBKJRCKRSCQSiUQikUigUV+uVVVdL7X2g0hQtccyy9+URXfbkWd9Pz+ksjFOs7tqPxoLzenL7mNZtuZHss3m9P4kjxftZ4yhnR2+oWRh1rFZGL+PY6f9qCTq80o/p5hV2o8bTrPe7+l41H7gUI5hgg/F0tTbWJehgs7R0Ey9hOs9Fe/aD76WK2EAe8VW+9HXQRa0onihC9pQrCP8nGKjLbBIGWeY5ej9RkAhMwd2t9HFC2altsQvKgZB7DqcwS+DfhWDi9EZYOcpyxx1wM7T2EQxUMTsM1quIXxQaMt44fMD7aQ4UuGHk7aOB1ZBxEHkHcIsO2sLfcHrBxhO78xDiJcT+XLhG22lMRErF3OA9cLcccaBFWv4/R6DiNQKs9XcI0Ok5VOJSYpVnApEUoe21oeoJdJ5gCo39nT/MsRZHj6KCCLlC6HXMMu1xd7ITFKg6lskGz4NUQo3oUADFGpk8r0D5fhCISUIszQsFUozmKpGThAlXYi9higNlFBV+jTE2IUSWMF4G2LU3mIJ/78wvGnLPbkJGmKUbcnQvuH+38P9x1LJfIiR8WtBQ5AmX9BQW+2FmCBM9yTXH6J0wHI9PsqCqdg6DcxON+dhqLEhylqbWNkGUrQJNvkgCf8guKqvLfZGLF1oi72RShcoyUIsXcAki+CvKVcb4hzGkNrHhwmlUrU3Tig9HE4ihih1t0Mm1KDsHjpEQg1QoBEKNShLGD0CgkAVjUOiqkE6uCfSIsI0hz0Sp6CB8r2DXRDsNZQ4vIeUDR3sGRFmBeMNu6G20BfcpSlWrnAw5wu8ScpduOFNUu5pihZJHaynTEG2tyewTlNtGS+MSR+sJv2D8cQCyJnEL/iWvhHjjIOtcsPq7ocwCQLWM38wJQy0znAIiyDwEDINIu5b6GAIp0A7Tj44cqK2wwLRy4qAbdOY2GN8OXKY6YlN+9rPv4Ii6s+QGEdmF4iIp6A9xRT6eoaBl7CHnDIQfw7lhxhtkHa1lyBVb/CZcAQl2iAuIM5DWbOxEmZ6CCvgUAcTliHEGuS+1wMlYWg/cxiErG8pVxxILYatQENY4gdv7b8JHsL/wNBGW/EhfJYaMwyPNNYMw7OFtfeQ8KGQsWxBqEuNZXxCb2GreaJs0WAeTpiDtBiFuvHrhXR239Q0JfjZaoGp24jaz70emp+h+/POREMz8zTiEyEbS6ZR30BZqL+jNtcMvIukqx3HiiXombaea6ReD/AuKdPBNtyQyvadJejLWJ8Yz5civow3Nr3eES4zsn8JDDZTq7U3cIcoAsXUmuvOvKkjyjCuuiKeppghvI2twAQdOJbKqzd1J+rXOyqOY1OIzc+RY9aqZMfbUXz4Po756b6t5OW+zeiNJMtuo+xRN4/B21jvTzIrWukDG7eu1LH7WOanrpGasU2hNHgTcjdj+S03iptrcZacM/Yin/YIOEmej08qrOEb8ngr4+uBirGxleBRD0T5XcH9HHkWcQRAqC3iJqcuJDeI8cVPXlICq5EBfBF+WuViZwB7QtfnBC88ECPolLHYRWOiBCxB2hQMUBT6H+kGrDyUI3hhhTir3kXB2xy2YIWh4EVxG7DiCz+52wy3YXH3UfAWtY1Y+vWLzA9zt2Rhu8NiLTPl928nbIeZF7+Cjd1cP+TXIO5iCH91UoKXU23K/GFcW03vPPM5UfvJ2Jj7sn8fccYxl/XlLm7amrnFt90M4dw0tdwXTvFPU+tdxRD/esY+0v0LX+Vmv28a4kv6VhfY/Pj+x7SfXOHw1aa7GkLfF5t7yhWO7xZqT7nC8V3W7CpXOKZlzb5yhWNa1ohdtanGdJrubpJOo+n+Jul0l6Y5EihInFdwWqZcxtiPKMj8A37EYhK2osujAAAAAElFTkSuQmCC\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"ui divider\"></div>\n                            <button type=\"submit\" class=\"ui right labeled icon green button disabled\" id=\"submitBtn\">\n                                <i class=\"checkmark icon\"></i>\n                                Accredit Student\n                            </button>\n                        </form>\n                        <div class=\"ui huge message error\" *ngIf=\"!canAccredit()\">\n                            {{message}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/accreditation/accreditation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccreditationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_elcom_service__ = __webpack_require__("../../../../../src/app/services/elcom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_accreditation_service__ = __webpack_require__("../../../../../src/app/services/accreditation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_sms_service__ = __webpack_require__("../../../../../src/app/services/sms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AccreditationComponent = (function () {
    function AccreditationComponent(toasterService, authService, router, elcomService, studentService, accreditationService, mailService, smsService) {
        this.toasterService = toasterService;
        this.authService = authService;
        this.router = router;
        this.elcomService = elcomService;
        this.studentService = studentService;
        this.accreditationService = accreditationService;
        this.mailService = mailService;
        this.smsService = smsService;
        this.accreditationTime = {
            startingDay: '2018-01-12',
            closingDay: '2018-01-30',
            startingTime: '00:00',
            closingTime: '23:00'
        };
    }
    AccreditationComponent.prototype.ngOnInit = function () {
        var userObj = JSON.parse(localStorage.user);
        var user_name = userObj.name;
        __WEBPACK_IMPORTED_MODULE_9_jquery__('#user_name').text(user_name);
        this.countAccreditedStudents();
        var dateObj = new Date();
        var month = '' + (dateObj.getUTCMonth() + 1); //months from 1-12
        if (month.length < 2)
            month = '0' + month;
        var day = '' + dateObj.getUTCDate();
        if (day.length < 2)
            day = '0' + day;
        var year = dateObj.getUTCFullYear();
        var todayDay = year + "-" + month + "-" + day;
        var hour = dateObj.getHours().toString();
        if (hour.length < 2)
            hour = '0' + hour;
        var minute = dateObj.getMinutes().toString();
        if (minute.length < 2)
            minute = '0' + minute;
        var todayTime = hour + ":" + minute;
        if (todayDay < this.accreditationTime.startingDay) {
            this.isAccreditationTime = false;
            this.message = 'Accreditation is not openned yet.';
        }
        else {
            if (todayDay > this.accreditationTime.closingDay) {
                this.isAccreditationTime = false;
                this.message = 'Accreditation day has passed.';
            }
            else {
                if (todayTime < this.accreditationTime.startingTime) {
                    this.isAccreditationTime = false;
                    this.message = 'It is not yet accreditation time.';
                }
                else {
                    if (todayTime > this.accreditationTime.closingTime) {
                        this.isAccreditationTime = false;
                        this.message = 'Accreditation time has elapsed.';
                    }
                    else {
                        this.isAccreditationTime = true;
                        this.message = 'Accreditation is open.';
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#matricno').trigger("focus");
                    }
                }
            }
        }
    };
    AccreditationComponent.prototype.canAccredit = function () {
        return this.isAccreditationTime;
    };
    AccreditationComponent.prototype.triggerSearch = function (event) {
        if (event.which == 13) {
            event.preventDefault();
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#searchBtn').trigger("click");
        }
    };
    AccreditationComponent.prototype.searchMatric = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_jquery__('#searchBtn').addClass("loading disabled");
        var matricno = __WEBPACK_IMPORTED_MODULE_9_jquery__('#matricno').val().replace(/\//g, "-").toUpperCase();
        if (matricno === "" || matricno === null) {
            this.toasterService.pop('error', 'Oops!', 'Please enter your matric number');
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#matricno').trigger('focus');
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#searchBtn').removeClass("loading disabled");
            return false;
        }
        // Check id student is an elcom officer first
        this.elcomService.getElcomOfficer(matricno).subscribe(function (response) {
            if (response.isElcom) {
                _this.toasterService.pop('error', 'Oops!', response.msg + ' and cannot be accredited');
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#searchBtn').removeClass("loading disabled");
                return false;
            }
            else {
                _this.studentService.getStudentRecord(matricno).subscribe(function (response) {
                    if (!response.success) {
                        _this.toasterService.pop('error', 'Oops!', response.msg);
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#picture').attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX////MzMzJycnc3NzZ2dnV1dXS0tLW1tb5+fnz8/P8/Pzu7u729vbo6Ojx8fHp6enh4eEYveNFAAAFnUlEQVR4nO2dDdqqIBBG08xSs9z/am9kX6lhyjDjvOPlrMDzgPMDKIdDIpFIJBKJRCKRSCQSiUQikUigUV+uVVVdL7X2g0hQtccyy9+URXfbkWd9Pz+ksjFOs7tqPxoLzenL7mNZtuZHss3m9P4kjxftZ4yhnR2+oWRh1rFZGL+PY6f9qCTq80o/p5hV2o8bTrPe7+l41H7gUI5hgg/F0tTbWJehgs7R0Ey9hOs9Fe/aD76WK2EAe8VW+9HXQRa0onihC9pQrCP8nGKjLbBIGWeY5ej9RkAhMwd2t9HFC2altsQvKgZB7DqcwS+DfhWDi9EZYOcpyxx1wM7T2EQxUMTsM1quIXxQaMt44fMD7aQ4UuGHk7aOB1ZBxEHkHcIsO2sLfcHrBxhO78xDiJcT+XLhG22lMRErF3OA9cLcccaBFWv4/R6DiNQKs9XcI0Ok5VOJSYpVnApEUoe21oeoJdJ5gCo39nT/MsRZHj6KCCLlC6HXMMu1xd7ITFKg6lskGz4NUQo3oUADFGpk8r0D5fhCISUIszQsFUozmKpGThAlXYi9higNlFBV+jTE2IUSWMF4G2LU3mIJ/78wvGnLPbkJGmKUbcnQvuH+38P9x1LJfIiR8WtBQ5AmX9BQW+2FmCBM9yTXH6J0wHI9PsqCqdg6DcxON+dhqLEhylqbWNkGUrQJNvkgCf8guKqvLfZGLF1oi72RShcoyUIsXcAki+CvKVcb4hzGkNrHhwmlUrU3Tig9HE4ihih1t0Mm1KDsHjpEQg1QoBEKNShLGD0CgkAVjUOiqkE6uCfSIsI0hz0Sp6CB8r2DXRDsNZQ4vIeUDR3sGRFmBeMNu6G20BfcpSlWrnAw5wu8ScpduOFNUu5pihZJHaynTEG2tyewTlNtGS+MSR+sJv2D8cQCyJnEL/iWvhHjjIOtcsPq7ocwCQLWM38wJQy0znAIiyDwEDINIu5b6GAIp0A7Tj44cqK2wwLRy4qAbdOY2GN8OXKY6YlN+9rPv4Ii6s+QGEdmF4iIp6A9xRT6eoaBl7CHnDIQfw7lhxhtkHa1lyBVb/CZcAQl2iAuIM5DWbOxEmZ6CCvgUAcTliHEGuS+1wMlYWg/cxiErG8pVxxILYatQENY4gdv7b8JHsL/wNBGW/EhfJYaMwyPNNYMw7OFtfeQ8KGQsWxBqEuNZXxCb2GreaJs0WAeTpiDtBiFuvHrhXR239Q0JfjZaoGp24jaz70emp+h+/POREMz8zTiEyEbS6ZR30BZqL+jNtcMvIukqx3HiiXombaea6ReD/AuKdPBNtyQyvadJejLWJ8Yz5civow3Nr3eES4zsn8JDDZTq7U3cIcoAsXUmuvOvKkjyjCuuiKeppghvI2twAQdOJbKqzd1J+rXOyqOY1OIzc+RY9aqZMfbUXz4Po756b6t5OW+zeiNJMtuo+xRN4/B21jvTzIrWukDG7eu1LH7WOanrpGasU2hNHgTcjdj+S03iptrcZacM/Yin/YIOEmej08qrOEb8ngr4+uBirGxleBRD0T5XcH9HHkWcQRAqC3iJqcuJDeI8cVPXlICq5EBfBF+WuViZwB7QtfnBC88ECPolLHYRWOiBCxB2hQMUBT6H+kGrDyUI3hhhTir3kXB2xy2YIWh4EVxG7DiCz+52wy3YXH3UfAWtY1Y+vWLzA9zt2Rhu8NiLTPl928nbIeZF7+Cjd1cP+TXIO5iCH91UoKXU23K/GFcW03vPPM5UfvJ2Jj7sn8fccYxl/XlLm7amrnFt90M4dw0tdwXTvFPU+tdxRD/esY+0v0LX+Vmv28a4kv6VhfY/Pj+x7SfXOHw1aa7GkLfF5t7yhWO7xZqT7nC8V3W7CpXOKZlzb5yhWNa1ohdtanGdJrubpJOo+n+Jul0l6Y5EihInFdwWqZcxtiPKMj8A37EYhK2osujAAAAAElFTkSuQmCC');
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#accreditationForm').trigger('reset');
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#submitBtn').addClass('disabled');
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#searchBtn').removeClass("loading disabled");
                    }
                    else {
                        var matricno = __WEBPACK_IMPORTED_MODULE_9_jquery__('#matricno').val();
                        var lastname = response.student_info.last_name;
                        var firstname = response.student_info.first_name;
                        var email = response.student_info.email;
                        var department = response.student_info.department;
                        var course = response.student_info.programme;
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#picture').attr('src', response.student_info.passport);
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#firstname').val(firstname);
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#lastname').val(lastname);
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#email').val(email);
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#department').val(department);
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#course').val(course);
                        _this.student = {
                            matricno: matricno,
                            studentName: firstname + ' ' + lastname,
                            email: email,
                            department: department,
                            course: course
                        };
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#submitBtn').removeClass('disabled');
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#searchBtn').removeClass("loading disabled");
                    }
                }, function (error) {
                    _this.toasterService.pop('error', 'Oops!', 'Search failed due to network/server error. Please try after a while');
                    __WEBPACK_IMPORTED_MODULE_9_jquery__('#searchBtn').removeClass("loading disabled");
                });
            }
        }, function (error) {
            _this.toasterService.pop('error', 'Oops!', 'Search failed due to network/server error. Please try after a while');
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#searchBtn').removeClass("loading disabled");
        });
    };
    AccreditationComponent.prototype.onAccreditSubmit = function () {
        var _this = this;
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="student_info"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Accrediting student.<br><br>Please wait...</h3></div></div></div></div></div>';
        __WEBPACK_IMPORTED_MODULE_9_jquery__('body').prepend(pageDimmer);
        var phone = __WEBPACK_IMPORTED_MODULE_9_jquery__('#phone').val();
        this.student.phone = phone;
        this.accreditationService.addStudent(this.student).subscribe(function (response) {
            if (response.success) {
                var user_1 = {
                    name: _this.student.studentName,
                    username: _this.student.matricno,
                    password: _this.randomPasswordString(),
                    user_role: 2
                };
                // Add user
                _this.authService.registerUser(user_1).subscribe(function (data) {
                    if (data.success) {
                        // Send mail
                        var mailDetails = {
                            to: _this.student.email || __WEBPACK_IMPORTED_MODULE_9_jquery__('#email').val(),
                            subject: 'Accreditation Successful',
                            text: 'You have been accredited to vote. Here are your login detail. \nUsername: ' + _this.student.matricno + ',\n Password: ' + user_1.password,
                            html: ''
                        };
                        _this.mailService.sendMail(mailDetails).subscribe(function (response) {
                            if (response.success) {
                                _this.toasterService.pop('success', 'Success', 'Email has been sent.');
                            }
                            else {
                                _this.toasterService.pop('error', 'Oops!', 'Could not send mail');
                            }
                        }, function (error) {
                            _this.toasterService.pop('error', 'Oops!', 'We just encountered a server error sending mail.');
                        });
                        // Send SMS
                        var smsDetails = {
                            recipient: _this.student.phone,
                            message: _this.student.studentName + ', you have been accredited to vote. Your Password to be used to login is: ' + user_1.password
                        };
                        _this.smsService.sendSMS(smsDetails).subscribe(function (response) {
                            if (response.success) {
                                _this.toasterService.pop('success', 'Success', 'Password has been sent to student\'s phone');
                            }
                            else {
                                _this.toasterService.pop('error', 'Oops!', response.msg);
                            }
                        }, function (error) {
                            _this.toasterService.pop('error', 'Oops!', 'We just encountered a server error sending SMS.');
                        });
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#picture').attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX////MzMzJycnc3NzZ2dnV1dXS0tLW1tb5+fnz8/P8/Pzu7u729vbo6Ojx8fHp6enh4eEYveNFAAAFnUlEQVR4nO2dDdqqIBBG08xSs9z/am9kX6lhyjDjvOPlrMDzgPMDKIdDIpFIJBKJRCKRSCQSiUQikUigUV+uVVVdL7X2g0hQtccyy9+URXfbkWd9Pz+ksjFOs7tqPxoLzenL7mNZtuZHss3m9P4kjxftZ4yhnR2+oWRh1rFZGL+PY6f9qCTq80o/p5hV2o8bTrPe7+l41H7gUI5hgg/F0tTbWJehgs7R0Ey9hOs9Fe/aD76WK2EAe8VW+9HXQRa0onihC9pQrCP8nGKjLbBIGWeY5ej9RkAhMwd2t9HFC2altsQvKgZB7DqcwS+DfhWDi9EZYOcpyxx1wM7T2EQxUMTsM1quIXxQaMt44fMD7aQ4UuGHk7aOB1ZBxEHkHcIsO2sLfcHrBxhO78xDiJcT+XLhG22lMRErF3OA9cLcccaBFWv4/R6DiNQKs9XcI0Ok5VOJSYpVnApEUoe21oeoJdJ5gCo39nT/MsRZHj6KCCLlC6HXMMu1xd7ITFKg6lskGz4NUQo3oUADFGpk8r0D5fhCISUIszQsFUozmKpGThAlXYi9higNlFBV+jTE2IUSWMF4G2LU3mIJ/78wvGnLPbkJGmKUbcnQvuH+38P9x1LJfIiR8WtBQ5AmX9BQW+2FmCBM9yTXH6J0wHI9PsqCqdg6DcxON+dhqLEhylqbWNkGUrQJNvkgCf8guKqvLfZGLF1oi72RShcoyUIsXcAki+CvKVcb4hzGkNrHhwmlUrU3Tig9HE4ihih1t0Mm1KDsHjpEQg1QoBEKNShLGD0CgkAVjUOiqkE6uCfSIsI0hz0Sp6CB8r2DXRDsNZQ4vIeUDR3sGRFmBeMNu6G20BfcpSlWrnAw5wu8ScpduOFNUu5pihZJHaynTEG2tyewTlNtGS+MSR+sJv2D8cQCyJnEL/iWvhHjjIOtcsPq7ocwCQLWM38wJQy0znAIiyDwEDINIu5b6GAIp0A7Tj44cqK2wwLRy4qAbdOY2GN8OXKY6YlN+9rPv4Ii6s+QGEdmF4iIp6A9xRT6eoaBl7CHnDIQfw7lhxhtkHa1lyBVb/CZcAQl2iAuIM5DWbOxEmZ6CCvgUAcTliHEGuS+1wMlYWg/cxiErG8pVxxILYatQENY4gdv7b8JHsL/wNBGW/EhfJYaMwyPNNYMw7OFtfeQ8KGQsWxBqEuNZXxCb2GreaJs0WAeTpiDtBiFuvHrhXR239Q0JfjZaoGp24jaz70emp+h+/POREMz8zTiEyEbS6ZR30BZqL+jNtcMvIukqx3HiiXombaea6ReD/AuKdPBNtyQyvadJejLWJ8Yz5civow3Nr3eES4zsn8JDDZTq7U3cIcoAsXUmuvOvKkjyjCuuiKeppghvI2twAQdOJbKqzd1J+rXOyqOY1OIzc+RY9aqZMfbUXz4Po756b6t5OW+zeiNJMtuo+xRN4/B21jvTzIrWukDG7eu1LH7WOanrpGasU2hNHgTcjdj+S03iptrcZacM/Yin/YIOEmej08qrOEb8ngr4+uBirGxleBRD0T5XcH9HHkWcQRAqC3iJqcuJDeI8cVPXlICq5EBfBF+WuViZwB7QtfnBC88ECPolLHYRWOiBCxB2hQMUBT6H+kGrDyUI3hhhTir3kXB2xy2YIWh4EVxG7DiCz+52wy3YXH3UfAWtY1Y+vWLzA9zt2Rhu8NiLTPl928nbIeZF7+Cjd1cP+TXIO5iCH91UoKXU23K/GFcW03vPPM5UfvJ2Jj7sn8fccYxl/XlLm7amrnFt90M4dw0tdwXTvFPU+tdxRD/esY+0v0LX+Vmv28a4kv6VhfY/Pj+x7SfXOHw1aa7GkLfF5t7yhWO7xZqT7nC8V3W7CpXOKZlzb5yhWNa1ohdtanGdJrubpJOo+n+Jul0l6Y5EihInFdwWqZcxtiPKMj8A37EYhK2osujAAAAAElFTkSuQmCC');
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#accreditationForm').trigger('reset');
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#submitBtn').addClass('disabled');
                    }
                    else {
                        _this.toasterService.pop('error', 'Oops!', 'Something went wrong adding student database');
                    }
                    _this.ngOnInit();
                    __WEBPACK_IMPORTED_MODULE_9_jquery__('#pageDimmer').remove();
                }, function (error) {
                    _this.toasterService.pop('error', 'Oops!', 'We just encountered a server error.');
                    __WEBPACK_IMPORTED_MODULE_9_jquery__('#pageDimmer').remove();
                });
            }
            else {
                _this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#pageDimmer').remove();
            }
        }, function (error) {
            _this.toasterService.pop('error', 'Oops!', 'We just encountered a server error.');
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#pageDimmer').remove();
        });
    };
    AccreditationComponent.prototype.randomPasswordString = function () {
        var length = 8;
        var chars = '#aA!';
        var mask = '';
        if (chars.indexOf('a') > -1)
            mask += 'abcdefghijklmnopqrstuvwxyz';
        if (chars.indexOf('A') > -1)
            mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (chars.indexOf('#') > -1)
            mask += '0123456789';
        if (chars.indexOf('!') > -1)
            mask += '!@#$*_-?.';
        var result = '';
        for (var i = length; i > 0; --i)
            result += mask[Math.round(Math.random() * (mask.length - 1))];
        return result;
    };
    AccreditationComponent.prototype.checkSMSBalance = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_jquery__('#balanceBtn').addClass('loading');
        this.smsService.checkBalance().subscribe(function (response) {
            if (response.success) {
                _this.toasterService.pop('success', 'Success', 'SMS Balance: ' + response.sms_balance);
            }
            else {
                _this.toasterService.pop('error', 'Oops!', response.msg);
            }
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#balanceBtn').removeClass('loading');
        }, function (error) {
            _this.toasterService.pop('error', 'Oops!', error);
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#balanceBtn').removeClass('loading');
        });
    };
    AccreditationComponent.prototype.countAccreditedStudents = function () {
        var _this = this;
        this.accreditationService.countAccreditedStudents().subscribe(function (response) {
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#accredited_students').text(response.number_of_students);
        }, function (error) {
            _this.toasterService.pop('error', 'Oops!', error);
        });
    };
    return AccreditationComponent;
}());
AccreditationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-accreditation',
        template: __webpack_require__("../../../../../src/app/components/accreditation/accreditation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/accreditation/accreditation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_elcom_service__["a" /* ElcomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_elcom_service__["a" /* ElcomService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_accreditation_service__["a" /* AccreditationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_accreditation_service__["a" /* AccreditationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_mail_service__["a" /* MailService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__services_sms_service__["a" /* SmsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_sms_service__["a" /* SmsService */]) === "function" && _h || Object])
], AccreditationComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=accreditation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/aspirants/aspirants.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/aspirants/aspirants.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui six special cards\" *ngIf=\"!authService.loggedIn()\">\n    <div class=\"card\" *ngFor=\"let aspirant of aspirants; let i = index\">\n        <div class=\"blurring dimmable image\">\n            <div class=\"ui dimmer\">\n                <div class=\"content\">\n                    <div class=\"center\">\n                        <div class=\"ui\">{{aspirant.reason}}</div>\n                    </div>\n                </div>\n            </div>\n            <img style=\"max-height: 180px;\" src=\"{{aspirant.picture}}\">\n        </div>\n        <div class=\"content\">\n            <a class=\"header\">{{aspirant.nickname}}</a>\n            <div class=\"meta\">\n                For {{aspirant.office}}\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"ui stackable grid\" *ngIf=\"authService.loggedIn()\">\n    <div class=\"three wide column\">\n        <div class=\"ui fluid vertical menu\">\n            <a class=\"item\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('elcom')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/elcom-officers']\">ELCOM</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('aspirants')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/aspirants']\">Aspirants</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('accreditation')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/accreditation']\">Accreditation</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('password')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/resend-password']\">Passwords</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('vote')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/vote']\">Vote</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('results')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/results']\">Results</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('reports')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/reports']\">Reports</a>\n        </div>\n    </div>\n    <div class=\"thirteen wide column\">\n        <div class=\"ui segment\">\n            <table class=\"ui compact celled definition table segment\">\n                <thead>\n                    <tr>\n                        <th></th><th>Full Names</th><th>Nickname</th><th>CGPA</th><th>Office</th><th>Reason for contesting</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let aspirant of aspirants; let i = index\">\n                        <td><img class=\"ui image\" style=\"max-height:100px;\" src=\"{{aspirant.picture}}\" /></td>\n                        <td>{{aspirant.firstname}} {{aspirant.middlename}} {{aspirant.lastname}}</td>\n                        <td>{{aspirant.nickname}}</td>\n                        <td>{{aspirant.cgpa}}</td>\n                        <td><span style=\"text-transform: capitalize;\">{{aspirant.office}}</span></td>\n                        <td>{{aspirant.reason}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/aspirants/aspirants.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AspirantsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_aspirant_service__ = __webpack_require__("../../../../../src/app/services/aspirant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AspirantsComponent = (function () {
    function AspirantsComponent(authService, aspirateService, toasterService, apiService) {
        this.authService = authService;
        this.aspirateService = aspirateService;
        this.toasterService = toasterService;
        this.apiService = apiService;
    }
    AspirantsComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            var userObj = JSON.parse(localStorage.user);
            var user_name = userObj.name;
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#user_name').text(user_name);
        }
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Please wait...</h3></div></div></div></div></div>';
        __WEBPACK_IMPORTED_MODULE_5_jquery__('body').prepend(pageDimmer);
        this.getAspirants();
    };
    AspirantsComponent.prototype.getAspirants = function () {
        var _this = this;
        this.aspirateService.getAspirants().subscribe(function (data) {
            if (data.success) {
                _this.aspirants = data.aspirants;
            }
            else {
                _this.toasterService.pop('info', 'Oops!', 'There are no aspirants registered yet');
            }
        }, function (err) {
            _this.toasterService.pop('error', 'Oops!', err);
            return false;
        });
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#pageDimmer').remove();
    };
    return AspirantsComponent;
}());
AspirantsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-aspirants',
        template: __webpack_require__("../../../../../src/app/components/aspirants/aspirants.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/aspirants/aspirants.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_aspirant_service__["a" /* AspirantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_aspirant_service__["a" /* AspirantService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */]) === "function" && _d || Object])
], AspirantsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=aspirants.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\">\n    <div class=\"two wide column\"></div>\n    <div class=\"twelve wide column\">\n        <div class=\"ui segment\">\n            <div class=\"ui three stackable cards\">\n                <a *ngIf=\"authService.canPerformTask('elcom')\" [routerLink]=\"['/elcom-officers']\" class=\"ui link grey card\" >\n                    <div class=\"content\">\n                        <div class=\"header\">ELCOM</div>\n                        <div class=\"description\">\n                            <span class=\"category\">Manage ELCOM officers.</span>\n                        </div>\n                    </div>\n                </a>\n                <a *ngIf=\"authService.canPerformTask('aspirants')\" [routerLink]=\"['/aspirants']\" class=\"ui link grey card\" >\n                    <div class=\"content\">\n                        <div class=\"header\">Aspirants</div>\n                        <div class=\"description\">\n                            <span class=\"category\">Manage registered aspirants.</span>\n                        </div>\n                    </div>\n                </a>\n                <a *ngIf=\"authService.canPerformTask('accreditation')\" [routerLink]=\"['/accreditation']\" class=\"ui link grey card\" >\n                    <div class=\"content\">\n                        <div class=\"header\">Accreditation</div>\n                        <div class=\"description\">\n                            <span class=\"category\">Accredit students for election.</span>\n                        </div>\n                    </div>\n                </a>\n                <a *ngIf=\"authService.canPerformTask('password')\" [routerLink]=\"['/resend-password']\" class=\"ui link grey card\" >\n                    <div class=\"content\">\n                        <div class=\"header\">Passwords</div>\n                        <div class=\"description\">\n                            <span class=\"category\">Resend password to student.</span>\n                        </div>\n                    </div>\n                </a>\n                <a *ngIf=\"authService.canPerformTask('vote')\" [routerLink]=\"['/vote']\" class=\"ui link grey card\" >\n                    <div class=\"content\">\n                        <div class=\"header\">Vote</div>\n                        <div class=\"description\">\n                            <span class=\"category\">Vote for aspirants.</span>\n                        </div>\n                    </div>\n                </a>\n                <a *ngIf=\"authService.canPerformTask('receipt')\" [routerLink]=\"['/receipt']\" class=\"ui link grey card\" >\n                    <div class=\"content\">\n                        <div class=\"header\">Vote Receipt</div>\n                        <div class=\"description\">\n                            <span class=\"category\">View vote slip.</span>\n                        </div>\n                    </div>\n                </a>\n                <a *ngIf=\"authService.canPerformTask('results')\" [routerLink]=\"['/results']\" class=\"ui link grey card\" >\n                    <div class=\"content\">\n                        <div class=\"header\">Election Results</div>\n                        <div class=\"description\">\n                            <span class=\"category\">View election results in realtime.</span>\n                        </div>\n                    </div>\n                </a>\n                <a *ngIf=\"authService.canPerformTask('reports')\" [routerLink]=\"['/reports']\" class=\"ui link grey card\" >\n                    <div class=\"content\">\n                        <div class=\"header\">Reports</div>\n                        <div class=\"description\">\n                            <span class=\"category\">Download reports.</span>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var userObj = JSON.parse(localStorage.user);
        var user_name = userObj.name;
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#user_name').text(user_name);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/elcom-officers/elcom-officers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/elcom-officers/elcom-officers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui six double cards\" *ngIf=\"!authService.loggedIn()\">\n    <div class=\"card\" *ngFor=\"let user of users; let i = index\">\n        <div class=\"content\">\n            <div class=\"header\">{{user.name}}</div>\n            <div class=\"meta\">-Position-</div>\n        </div>\n    </div>\n</div>\n\n<div class=\"ui stackable grid\" *ngIf=\"authService.loggedIn()\">\n    <div class=\"three wide column\">\n        <div class=\"ui fluid vertical menu\">\n            <a class=\"item\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('elcom')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/elcom-officers']\">ELCOM</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('aspirants')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/aspirants']\">Aspirants</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('accreditation')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/accreditation']\">Accreditation</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('password')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/resend-password']\">Passwords</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('vote')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/vote']\">Vote</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('results')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/results']\">Results</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('reports')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/reports']\">Reports</a>\n        </div>\n    </div>\n    <div class=\"nine wide column\">\n        <div class=\"ui segment\" id=\"supervisors\">\n            <table class=\"ui compact celled definition table\">\n                <thead>\n                    <tr>\n                        <th>SNo.</th><th>Username</th><th>Full Name</th><th></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let user of users; let i = index\">\n                        <td>{{i + 1}}</td>\n                        <td>{{user.username}}</td>\n                        <td>{{user.name}}</td>\n                        <td>\n                            <button type=\"button\" class=\"ui red icon fluid tiny button\" (click)=\"deleteElcom(user.username)\">\n                                <i class=\"trash icon\"></i>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"four wide column\">\n        <div class=\"ui segment\">\n            <div class=\"ui one top attached steps\">\n                <div class=\"active step\">\n                    <i class=\"user icon\"></i>\n                    <div class=\"content\">\n                        <div class=\"title\">Add ELCOM</div>\n                        <div class=\"description\">Enter student matric number</div>\n                    </div>\n                </div>\n            </div>\n            <form class=\"ui small form attached segment\" autocomplete=\"off\" (submit)=\"onAddOfficerSubmit()\" id=\"addElcomForm\">\n                <div class=\"field\" id=\"matricno_div\">\n                    <div class=\"ui fluid action input\">\n                        <input type=\"text\" placeholder=\"Matric Number\" (keypress)=\"triggerSearch($event)\" [(ngModel)]=\"username\" name=\"username\" id=\"username\">\n                        <button type=\"button\" class=\"ui primary right icon button\" (click)=\"searchMatric()\" id=\"searchBtn\">\n                            <i class=\"search icon\"></i>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"field\">\n                    <input type=\"text\" placeholder=\"Full Name\" [(ngModel)]=\"name\" name=\"name\" id=\"name\" readonly=\"\">\n                </div>\n                <div class=\"field\">\n                    <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\">\n                </div>\n                <div class=\"ui divider\"></div>\n                <button class=\"ui submit primary button fluid\" type=\"submit\"><i class=\"add icon\"></i>Add officer</button>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/elcom-officers/elcom-officers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElcomOfficersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_elcom_service__ = __webpack_require__("../../../../../src/app/services/elcom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_aspirant_service__ = __webpack_require__("../../../../../src/app/services/aspirant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ElcomOfficersComponent = (function () {
    function ElcomOfficersComponent(router, validateService, authService, toasterService, elcomService, studentService, aspirantService) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.toasterService = toasterService;
        this.elcomService = elcomService;
        this.studentService = studentService;
        this.aspirantService = aspirantService;
    }
    ElcomOfficersComponent.prototype.ngOnInit = function () {
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Please wait...</h3></div></div></div></div></div>';
        __WEBPACK_IMPORTED_MODULE_8_jquery__('body').prepend(pageDimmer);
        this.getElcomOfficers();
    };
    ElcomOfficersComponent.prototype.getElcomOfficers = function () {
        var _this = this;
        this.elcomService.getElcomOfficers().subscribe(function (data) {
            if (data.success) {
                _this.users = data.users;
            }
            else {
                _this.toasterService.pop('info', 'Oops!', 'There are no ELCOM officers yet');
            }
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#pageDimmer').remove();
        }, function (err) {
            _this.toasterService.pop('error', 'Oops!', err);
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#pageDimmer').remove();
        });
    };
    ElcomOfficersComponent.prototype.triggerSearch = function (event) {
        if (event.which == 13) {
            event.preventDefault();
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').trigger("click");
        }
    };
    ElcomOfficersComponent.prototype.searchMatric = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').addClass("loading disabled");
        var username = __WEBPACK_IMPORTED_MODULE_8_jquery__('#username').val().replace(/\//g, "-").toUpperCase();
        if (username === "" || username === null) {
            this.toasterService.pop('error', 'Oops!', 'Please enter student\'s matric number');
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#username').focus();
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').removeClass("loading disabled");
            return false;
        }
        // Check id student is an elcom officer first
        this.aspirantService.getAspirant(username).subscribe(function (response) {
            if (response.isAspirant) {
                _this.toasterService.pop('error', 'Oops!', response.msg + ' and cannot be an ELCOM member');
                __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').removeClass("loading disabled");
                return false;
            }
            else {
                _this.studentService.getStudentRecord(username).subscribe(function (response) {
                    if (!response.success) {
                        _this.toasterService.pop('error', 'Oops!', response.msg);
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#name').val('');
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').removeClass("loading disabled");
                    }
                    else {
                        var lastname = response.student_info.last_name;
                        var firstname = response.student_info.first_name;
                        var studentName = _this.name = firstname + ' ' + lastname;
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#name').val(studentName);
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').removeClass("loading disabled");
                    }
                }, function (error) {
                    _this.toasterService.pop('error', 'Oops!', 'Search failed due to server error. Please try after a while');
                    __WEBPACK_IMPORTED_MODULE_8_jquery__('#name').val('');
                    __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').removeClass("loading disabled");
                });
            }
        }, function (error) {
            _this.toasterService.pop('error', 'Oops!', 'Search failed due to network/server error. Please try after a while');
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#name').val('');
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').removeClass("loading disabled");
        });
    };
    ElcomOfficersComponent.prototype.onAddOfficerSubmit = function () {
        var _this = this;
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Adding ELCOM Officer.<br><br>Please wait...</h3></div></div></div></div></div>';
        __WEBPACK_IMPORTED_MODULE_8_jquery__('body').prepend(pageDimmer);
        var user = {
            name: this.name,
            username: this.username.toUpperCase(),
            password: this.password,
            user_role: 1
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.toasterService.pop('error', 'Oops!', 'Please fill in all fields');
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#pageDimmer').remove();
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', 'Success!', 'ELCOM officer registered and can log in');
                __WEBPACK_IMPORTED_MODULE_8_jquery__('#addElcomForm').trigger('reset');
            }
            else {
                _this.toasterService.pop('error', 'Oops!', 'Something went wrong');
            }
            _this.ngOnInit();
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#pageDimmer').remove();
            _this.router.navigate(['/elcom-officers']);
        });
    };
    ElcomOfficersComponent.prototype.deleteElcom = function (username) {
        var _this = this;
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Deleting ELCOM Officer.<br><br>Please wait...</h3></div></div></div></div></div>';
        __WEBPACK_IMPORTED_MODULE_8_jquery__('body').prepend(pageDimmer);
        username = username.replace(/\//g, ".").toUpperCase();
        if (username === null) {
            this.toasterService.pop('error', 'Oops!', 'Username not present');
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#pageDimmer').remove();
            return false;
        }
        else {
            this.elcomService.deleteElcomOfficer(username).subscribe(function (response) {
                if (response.success) {
                    _this.toasterService.pop('success', 'Success', 'ELCOM officer deleted');
                }
                else {
                    _this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                }
                _this.ngOnInit();
                __WEBPACK_IMPORTED_MODULE_8_jquery__('#pageDimmer').remove();
                _this.router.navigate(['/elcom-officers']);
            }, function (error) {
                _this.toasterService.pop('error', 'Oops!', 'Deleting failed due to server error. Please try after a while');
                __WEBPACK_IMPORTED_MODULE_8_jquery__('#pageDimmer').remove();
            });
        }
    };
    return ElcomOfficersComponent;
}());
ElcomOfficersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-elcom-officers',
        template: __webpack_require__("../../../../../src/app/components/elcom-officers/elcom-officers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/elcom-officers/elcom-officers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_elcom_service__["a" /* ElcomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_elcom_service__["a" /* ElcomService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_aspirant_service__["a" /* AspirantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_aspirant_service__["a" /* AspirantService */]) === "function" && _g || Object])
], ElcomOfficersComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=elcom-officers.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/electoral-guidelines/electoral-guidelines.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/electoral-guidelines/electoral-guidelines.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment\">\n    <div class=\"ui container\">\n        <h4>Guidelines</h4>\n        <p class=\"content\" style=\"text-align: justify;\">\n            The following are guidelines are of 'Article 10' of the reviewed student union constitution of FPTB, Bauchi.\n        </p>\n        <h4>ARTICLE 10</h4>\n        <h5>SECTION 1: Election.</h5>\n        <p>Prospective candidate(s) for any elective post must:</p>\n        <ol>\n            <li>\n                Be a matriculated and registered undergraduate student of Abubakar Tafawa Balewa\n                University, Bauchi.\n            </li>\n            <li>\n                Not be on probation and must possess a minimum of 2.50 C.G.P.A and must not\n                have more than nine (9) units of carry-over at the end of the previous academic year\n                and should not be one year behind his normal duration in the University.\n                Have fulfilled his financial obligation(s) to the Union.\n            </li>\n            <li>\n                Have fulfilled any other requirements set out in this Constitution by the Electoral\n                Committee.\n            </li>\n        </ol>\n\n        <p>Procedure for Seeking Redress for a Disqualification of Candidate(S)</p>\n        <ol>\n            <li>\n                Candidate seeking redress must do so to the judiciary committee within 24hrs in writing.\n            </li>\n            <li>\n                No candidate should be disqualified within 48 hrs before the election.\n            </li>\n        </ol>\n        <h5>SECTION 2: Rules and Regulations of Elections.</h5>\n        <ol>\n            <li>\n                Elections shall be by secret ballot.\n            </li>\n            <li>\n                Elections into S.U.E.C and PARLIAMENT shall be organised and conducted within the\n                first four (4) weeks of the Second Semester.\n            </li>\n            <li>\n                Elections shall be organised, conducted and supervised by the Electoral Committee.\n            </li>\n            <li>\n                The conduct of all elections shall be subject to the following rules:\n                <ol>\n                    <li>\n                        Elections into S.U.E.C and PARLIAMENT shall be conducted at Faculty levels\n                        under supervision of the Dean of the Faculty and his staff.\n                    </li>\n                    <li>\n                        Elections into H.E.C shall be conducted at the Hall level under the supervision\n                        of the Hall Warden and his staff.\n                    </li>\n                    <li>\n                        Prospective candidate(s) for any elective post shall have to be nominated in\n                        writing and passed to the Chairman of the Committee within a period\n                        specified by the Electoral Committee.\n                    </li>\n                    <li>\n                        No member of the Union shall propose or second more than one candidate\n                        for any elective post.\n                    </li>\n                    <li>\n                        Only members of the Union who fulfill their financial obligation(s) to the\n                        Union are eligible to nominate, second, vote and/or be voted for.\n                    </li>\n                    <li>\n                        In any election, each nomination papers shall bear the signatures of two\n                        proposers, two seconders and signed by the nominee.\n                    </li>\n                    <li>\n                        There shall be no voting by proxy and each voter shall be entitled to only one\n                        vote for any elective post.\n                    </li>\n                    <li>\n                        The Electoral Committee shall list in alphabetical order the names of\n                        candidates as they appear on the nomination papers and shall display the list\n                        of contestants on Students’ notice boards at least twenty four (24) hours\n                        before the commencement of campaigns. No names shall be added to the list\n                        after it has been displayed.\n                    </li>\n                    <li>\n                        The Electoral Committee shall commence counting of votes immediately\n                        after the elections and in the presence of the Dean of the Faculty, the Hall\n                        Warden and the Hall Supervisor where the elections took place.\n                    </li>\n                    <li>\n                        The Chairman of the Electoral Committee shall act as the Chief Returning\n                        Officer in all the elections.\n                    </li>\n                    <li>\n                        There shall be Presiding Officers, Polling clerks and Polling Assistants who\n                        must be from the Electoral Committee members.\n                    </li>\n                    <li>\n                        These Presiding Officers, Polling clerks and Polling Assistants shall be\n                        responsible for the conduct of elections into S.U.G in the various Faculty and\n                        Halls of residence, as the case may be.\n                    </li>\n                    <li>\n                        Results of the elections should be declared in each polling station in the\n                        presence of the Dean of the Faculty, or Hall Warden/ Hall Supervisor as the\n                        case may be, as well as agents of the contestants.\n                    </li>\n                    <li>\n                        The Presiding Officer, agents of contestants, Deans and/or Hall Wardens/Hall\n                        Supervisor and the security personnel must sign on the result sheet and each\n                        of them should be given a copy.\n                    </li>\n                    <li>\n                        The result shall be submitted to the Chief Returning Officer by the Presiding\n                        Officer.\n                    </li>\n                    <li>\n                        The Chief Returning Officer shall enter the scores of each candidate as they\n                        are brought in from the polling centres in the presence of the agents of the\n                        candidates and security personnel.\n                    </li>\n                    <li>\n                        The overall result shall be declared by the Chief Returning Officer and a copy\n                        be sent to the University Authority.\n                    </li>\n                </ol>\n            </li>\n            <li>\n                Before the commencement of voting, the Electoral Committee shall make necessary\n                arrangements for candidates contesting for elections into the various offices to\n                campaign for votes.\n            </li>\n            <li>\n                All campaigns shall end at least 24 hours before the commencement of voting.\n                In the event of a tie in an election in respect of any elective post(s), the Electoral\n                Committee shall within forty-eight (48) hours organise and conduct fresh elections\n                into such office(s).\n            </li>\n            <li>\n                Without prejudice to the provision of sub-section (ii) of this section, in case of\n                inability to conduct elections into S.U.E.C and PARLIAMENT within first 4 weeks of\n                the Second Semester of the new academic session, a new date shall be determined\n                by the University Authority.\n            </li>\n            <li>\n                Withdrawals of candidature by any candidate shall:\n                <ol>\n                    <li>\n                        Be made within 12 hours after exhibition of the list of candidates.\n                    </li>\n                    <li>\n                        Be made in writing to the Chairman of the Electoral Committee in respect of\n                        that decision.\n                    </li>\n                    <li>\n                        Not be accepted after the expiration of the 12 hours as provided in paragraph\n                        (1) above.\n                    </li>\n                </ol>\n            </li>\n            <li>\n                Subject to the provisions of this constitution, the Electoral Committee may make\n                guidelines for the orderly conduct of the elections which must be endorsed by the\n                University Authority.\n            </li>\n        </ol>\n\n        <h5>SECTION 3: Disqualification of Candidates for Elective Post</h5>\n        <p>Any candidate for an elective post shall be disqualified if:</p>\n        <ol>\n            <li>\n                His campaign strategies are based on religious or ethnic affiliation or any\n                form of sectionalism.\n            </li>\n            <li>\n                Found guilty of abuse of office, corruption, misappropriation of funds,\n                misconduct of any kind, cultism, drug abuse and criminal offences by any of\n                the following:\n                <ol>\n                    <li>\n                        A duly Constituted Nigerian Court of Law\n                    </li>\n                    <li>\n                        Any Students’ Union Association\n                    </li>\n                    <li>\n                        FPTB Students’ Disciplinary Committee\n                    </li>\n                    <li>\n                        Any organisation recognised by the Union\n                    </li>\n                </ol>\n            </li>\n            <li>\n                He is on the payroll or an affiliate of any political party or Labour Union.\n            </li>\n            <li>\n                He receives money or any form of aid or grant from the University Authorities\n                or external body(ies) for the purpose of his campaign.\n            </li>\n            <li>\n                He or his supporters use or attempts to use derogatory verbal phrases and or\n                physical violence to intimidate his opponents or their supporters.\n            </li>\n            <li>\n                He violates any of the provisions of this Constitution.\n            </li>\n        </ol>\n        <h5>SECTION 4: Order of Election</h5>\n        <p>\n            Elections into PARLIAMENT, S.U.E.C and H.E.C should be conducted based on the time table\n            provided by the Electoral Committee and in accordance with the provision of this\n            Constitution.\n        </p>\n        <h5>SECTION 5: Election Petition</h5>\n        <ol>\n            <li>\n                Election petitions against the decision(s) of the Electoral Committee shall be filed\n                with the Judicial Committee, copied to the Chairman Electoral Committee and Dean\n                of Students Affairs.\n            </li>\n            <li>\n                Election petitions shall be filed within twenty-four (24) hours after the declaration of\n                the result by the Electoral Committee.\n            </li>\n            <li>\n                The said petition shall be determined within four (4) days of its receipt by the Judicial\n                Committee.\n            </li>\n            <li>\n                The decisions of the Judicial Committee on any petition shall be sent to the\n                University Authority and the Security Department immediately.\n            </li>\n        </ol>\n        <h5>SECTION 6: Swearing in Ceremony</h5>\n        <ol>\n            <li>\n                Elected Officers of the Union shall not exercise any function unless and until sworn-\n                in, in accordance with the provisions of this Constitution.\n            </li>\n            <li>\n                The Oath of Office shall be administered on all elected members of the Union by the\n                Registrar not more than one week of the declaration of the election results.\n            </li>\n        </ol>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/electoral-guidelines/electoral-guidelines.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectoralGuidelinesComponent; });
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

var ElectoralGuidelinesComponent = (function () {
    function ElectoralGuidelinesComponent() {
    }
    ElectoralGuidelinesComponent.prototype.ngOnInit = function () {
    };
    return ElectoralGuidelinesComponent;
}());
ElectoralGuidelinesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-electoral-guidelines',
        template: __webpack_require__("../../../../../src/app/components/electoral-guidelines/electoral-guidelines.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/electoral-guidelines/electoral-guidelines.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ElectoralGuidelinesComponent);

//# sourceMappingURL=electoral-guidelines.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"introduction\">\n    <h1 class=\"ui inverted header\">\n        <span class=\"bigheader\">\n            E-Voting System\n        </span>\n        <br /><br />\n        <span class=\"tagline\">\n            Electoral transparency, accountability, security and accuracy.\n        </span>\n    </h1>\n    <div class=\"ui hidden divider\"></div>\n    <a *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/register']\" class=\"ui huge inverted download button\"><i class=\"icon credit card\"></i>Buy Form</a>\n    <a *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/login']\" class=\"ui huge inverted basic button\"><i class=\"icon sign in\"></i>Login</a>\n    <a *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/dashboard']\" class=\"ui huge inverted basic button\"><i class=\"icon dashboard\"></i>Dashboard</a>\n    <div class=\"ui hidden divider\"></div>\n    <div class=\"ui hidden divider\"></div>\n    <div *ngIf=\"!authService.loggedIn()\" class=\"ui fluid action huge input\">\n        <input type=\"text\" placeholder=\"Please enter your payent reference number here\" (keypress)=\"triggerProceed($event)\" [(ngModel)]=\"payment_ref\" maxlength=\"13\" name=\"payment_ref\" id=\"payment_ref\">\n        <button type=\"button\" class=\"ui primary right labeled icon button\" (click)=\"proceed()\" id=\"proceedBtn\">\n            <i class=\"arrow right icon\"></i>\n            Proceed\n        </button>\n    </div>\n</div>\n<div class=\"ui divider\"></div>\n<div class=\"ui container\">\n    <div class=\"ui stackable grid\">\n        <div class=\"sixteen wide column\">\n            <div class=\"ui horizontal segments\">\n                <div class=\"ui padded segment\">\n                    <p><img src=\"assets/images/working_on_app.JPG\" class=\"ui fluid image\" /></p>\n                </div>\n                <div class=\"ui padded segment\">\n                    <p><img src=\"assets/images/accreditation_exercise.jpg\" class=\"ui fluid image\" /></p>\n                </div>\n                <div class=\"ui padded segment\">\n                    <p><img src=\"assets/images/aluta_ground.JPG\" class=\"ui fluid image\" /></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(authService, router, toasterService) {
        this.authService = authService;
        this.router = router;
        this.toasterService = toasterService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.triggerProceed = function (event) {
        if (event.which == 13) {
            event.preventDefault();
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#proceedBtn').trigger("click");
        }
    };
    HomeComponent.prototype.proceed = function () {
        var payment_ref = __WEBPACK_IMPORTED_MODULE_4_jquery__('#payment_ref').val();
        console.log('Payment: ' + payment_ref);
        if (payment_ref === '' || payment_ref === null || isNaN(payment_ref) || !isFinite(payment_ref)) {
            this.toasterService.pop('error', 'Error', 'You have not supplied a valid payment reference number.');
            return false;
        }
        window.location.href = '/status?trxref=' + payment_ref + '&reference=' + payment_ref;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\">\n    <div class=\"five wide column\"></div>\n    <div class=\"six wide column\">\n        <div class=\"ui segment\">\n            <div class=\"ui one top attached steps\">\n                <div class=\"active step\">\n                    <i class=\"lock icon\"></i>\n                </div>\n            </div>\n            <form class=\"ui form attached segment\" autocomplete=\"off\" (submit)=\"onLoginSubmit()\">\n                <div class=\"required field\" id=\"username_div\">\n                    <div class=\"ui input\">\n                        <input type=\"text\" placeholder=\"Username/Matric No.\" required=\"\" [(ngModel)]=\"username\" name=\"username\">\n                    </div>\n                </div>\n                <div class=\"required field\" id=\"password_div\">\n                    <div class=\"ui input\">\n                        <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\">\n                    </div>\n                </div>\n                <div>\n                    <label>\n                        <a id=\"password-reset-modal-button\">Forgotten password?</a>\n                    </label>\n                </div>\n                <div class=\"ui divider\"></div>\n                <button class=\"large fluid ui primary button\" type=\"submit\"><i class=\"icon sign in\"></i>Login</button>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, authService, toasterService) {
        this.router = router;
        this.authService = authService;
        this.toasterService = toasterService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Logging you in... Please wait!</h3></div></div></div></div></div>';
        __WEBPACK_IMPORTED_MODULE_4_jquery__('body').prepend(pageDimmer);
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.toasterService.pop('success', 'Successful!', 'You are now logged in');
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.toasterService.pop('error', 'Oops!', data.msg);
                _this.router.navigate(['/login']);
            }
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#pageDimmer').remove();
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"ui container large secondary inverted menu\">\n    <a class=\"toc item\" id=\"menu_icon\">\n        <i class=\"content icon\"></i>\n        <img class=\"logo\" src=\"/assets/images/logo.png\">\n        &nbsp; NACOMSS AUK\n    </a>\n    <a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/']\" class=\"item\">\n        <img class=\"logo\" src=\"/assets/images/logo.png\">\n        &nbsp; NACOMSS AUK\n    </a>\n    <a class=\"ui item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/aspirants']\">Aspirants</a>\n    <a class=\"ui item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/elcom-officers']\">Elcom Officers</a>\n    <a class=\"ui item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/electoral-guidelines']\">Electoral Guidelines</a>\n\n    <span class=\"ui item\" *ngIf=\"authService.loggedIn()\">Welcome,&nbsp;<span id=\"user_name\"></span></span>\n    <a class=\"ui item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n    <a class=\"ui item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/profile']\">Profile</a>\n    <a class=\"ui item right\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"onLogoutClick()\" href=\"#\"><i class=\"power icon\"></i>Logout</a>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(router, authService, toasterService) {
        this.router = router;
        this.authService = authService;
        this.toasterService = toasterService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            var userObj = JSON.parse(localStorage.user);
            var user_name = userObj.name;
            $('#user_name').text(user_name);
        }
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.toasterService.pop('success', 'Successful', 'You are now logged out');
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n    <h2 class=\"page-header\">{{user.name}}</h2>\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n            Username: {{user.username}}\n        </li>\n        <li class=\"list-group-item\">\n            Email: {{user.email}}\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authSevice, router) {
        this.authSevice = authSevice;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSevice.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/receipt/receipt.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/receipt/receipt.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  receipt works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/receipt/receipt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptComponent; });
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

var ReceiptComponent = (function () {
    function ReceiptComponent() {
    }
    ReceiptComponent.prototype.ngOnInit = function () {
    };
    return ReceiptComponent;
}());
ReceiptComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-receipt',
        template: __webpack_require__("../../../../../src/app/components/receipt/receipt.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/receipt/receipt.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReceiptComponent);

//# sourceMappingURL=receipt.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\">\n  <div class=\"four wide column\"></div>\n  <div class=\"eight wide column\">\n    <div class=\"ui segment\">\n      <div class=\"ui one top attached steps\">\n        <div class=\"active step\">\n          <i class=\"user icon\"></i>\n          <div class=\"content\">\n            <div class=\"title\">Candidate form payment</div>\n            <div class=\"description\">Enter your matric number &amp; search</div>\n          </div>\n        </div>\n      </div>\n      <form class=\"ui form attached segment\" autocomplete=\"off\" (submit)=\"onPaySubmit()\">\n        <div class=\"two fields\">\n          <div class=\"field\">\n            <div class=\"ui input\">\n              <select class=\"ui fluid dropdown\" (change)=\"setOfficeAmount($event)\">\n                <option value=\"\">Select Office</option>\n                <option value=\"president\">President (Male)</option>\n                <option value=\"sec_gen\">Sectretary General (Male)</option>\n                <option value=\"vice_president_I\">Vice President I (Female)</option>\n                <option value=\"fin_sec\">Financial Secretary (Male)</option>\n                <option value=\"auditor\">Auditor General (Male)</option>\n                <option value=\"treasurer\">Treasurer (Male)</option>\n                <option value=\"software\">Software Director (Male)</option>\n                <option value=\"pro_I\">Public Relation Officer I – (Male)</option>\n                <option value=\"liason\">Liason Officer (Male)</option>\n                <option value=\"sports_dir\">Sports Director (Male)</option>\n                <option value=\"vice_president_II\">Vice President II (Male)</option>\n                <option value=\"asst_sec_gen\">Asst. Secretary General (Male)</option>\n                <option value=\"dir_of_socials\">Director of Socials (D.O.S) (Male)</option>\n                <option value=\"dir_of_business\">Business Director</option>\n                <option value=\"welfare\">Welfare Director</option>\n                <option value=\"dir_of_program\">Program Director (Male)</option>\n                <option value=\"dir_of_library\">Library Director</option>\n                <option value=\"asst_welfare\">Asst. Welfare Director</option>\n                <option value=\"asst_sport\">Asst. Sports Director (Male)</option>\n                <option value=\"pro_II\">Public Relation Officer II – (Male)</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"field\">\n            <div class=\"ui input\">\n              <input type=\"text\" value=\"\" placeholder=\"Amount in words\" id=\"amount_words\" readonly=\"\">\n            </div>\n          </div>\n        </div>\n        <div class=\"field\" id=\"matricno_div\">\n          <div class=\"ui fluid action input\">\n            <input type=\"text\" placeholder=\"Matric Number\" (keypress)=\"triggerSearch($event)\" [(ngModel)]=\"matricno\" name=\"matricno\"\n              id=\"matricno\">\n            <button type=\"button\" class=\"ui primary right labeled icon button\" (click)=\"searchMatric()\" id=\"searchBtn\">\n              <i class=\"search icon\"></i>\n              Get details\n            </button>\n          </div>\n        </div>\n        <div class=\"ui divider\"></div>\n        <div class=\"three fields\">\n          <div class=\"field\" id=\"first_name_div\">\n            <div class=\"ui input\">\n              <input type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"firstname\" name=\"firstname\" id=\"firstname\" readonly=\"\">\n            </div>\n          </div>\n          <div class=\"field\" id=\"middle_name_div\">\n            <div class=\"ui input\">\n              <input type=\"text\" placeholder=\"Middle Name\" [(ngModel)]=\"middlename\" name=\"middlename\" id=\"middlename\" readonly=\"\">\n            </div>\n          </div>\n          <div class=\"field\" id=\"last_name_div\">\n            <div class=\"ui input\">\n              <input type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"lastname\" name=\"lastname\" id=\"lastname\" readonly=\"\">\n            </div>\n          </div>\n        </div>\n        <div class=\"two fields\">\n          <div class=\"field\" id=\"email_div\">\n            <div class=\"ui input\">\n              <input type=\"email\" placeholder=\"Email Addresss\" [(ngModel)]=\"email\" name=\"email\" id=\"email\">\n            </div>\n          </div>\n          <div class=\"field\" id=\"phone_div\">\n            <div class=\"ui input\">\n              <input type=\"tel\" placeholder=\"Phone\" [(ngModel)]=\"phone\" name=\"phone\" id=\"phone\">\n            </div>\n          </div>\n        </div>\n        <div class=\"two fields\">\n          <div class=\"field\" id=\"\">\n            <div class=\"ui input\">\n              <input type=\"email\" placeholder=\"Department\" [(ngModel)]=\"department\" name=\"department\" id=\"department\" readonly=\"\">\n            </div>\n          </div>\n          <div class=\"field\" id=\"\">\n            <div class=\"ui input\">\n              <input type=\"text\" placeholder=\"Course of study\" [(ngModel)]=\"course\" name=\"course\" id=\"course\" readonly=\"\">\n            </div>\n          </div>\n        </div>\n        <div class=\"ui divider\"></div>\n        <button type=\"submit\" class=\"ui large fluid primary button\">\n          <i class=\"credit card icon\"></i> Pay now\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_paystack_service__ = __webpack_require__("../../../../../src/app/services/paystack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_elcom_service__ = __webpack_require__("../../../../../src/app/services/elcom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterComponent = (function () {
    function RegisterComponent(validateService, toasterService, authService, router, paystackService, studentService, elcomService) {
        this.validateService = validateService;
        this.toasterService = toasterService;
        this.authService = authService;
        this.router = router;
        this.paystackService = paystackService;
        this.studentService = studentService;
        this.elcomService = elcomService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var script = document.createElement('script');
        script.innerText = "$('select.dropdown').dropdown();";
        __WEBPACK_IMPORTED_MODULE_8_jquery__('body').append(script);
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.toasterService.pop('error', 'Oops!', 'Please fill in all fields');
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.toasterService.pop('error', 'Oops!', 'Please use a valid email');
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', 'Success!', 'You are now registered and can log in');
                _this.router.navigate(['/login']);
            }
            else {
                _this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.setOfficeAmount = function (event) {
        var office = event.target.value;
        var amount_words = null, amount = null;
        switch (office) {
            case "president":
                amount_words = "Five thousand (N5,000)";
                amount = 500000;
                break;
            case "sec_gen":
                amount_words = "Four thousand (N4,000)";
                amount = 400000;
                break;
            case "vice_president_I":
                amount_words = "Three thousand five hundred (N3,500)";
                amount = 350000;
                break;
            case "fin_sec":
                amount_words = "Three thousand five hundred (N3,500)";
                amount = 350000;
                break;
            case "auditor":
                amount_words = "Three thousand five hundred (N3,500)";
                amount = 350000;
                break;
            case "treasurer":
                amount_words = "Three thousand five hundred (N3,500)";
                amount = 350000;
                break;
            case "software":
                amount_words = "Three thousand five hundred (N3,500)";
                amount = 350000;
                break;
            case "pro_I":
                amount_words = "Three thousand five hundred (N3,500)";
                amount = 350000;
                break;
            case "liason":
                amount_words = "Three thousand five hundred (N3,500)";
                amount = 350000;
                break;
            case "sports_dir":
                amount_words = "Three thousand five hundred (N3,500)";
                amount = 350000;
                break;
            case "vice_president_II":
                amount_words = "Three thousand (N3,000)";
                amount = 300000;
                break;
            case "asst_sec_gen":
                amount_words = "Three thousand (N3,000)";
                amount = 300000;
                break;
            case "dir_of_socials":
                amount_words = "Three thousand (N3,000)";
                amount = 300000;
                break;
            case "dir_of_business":
                amount_words = "Three thousand (N3,000)";
                amount = 300000;
                break;
            case "welfare":
                amount_words = "Three thousand (N3,000)";
                amount = 300000;
                break;
            case "dir_of_program":
                amount_words = "Three thousand (N3,000)";
                amount = 300000;
                break;
            case "dir_of_library":
                amount_words = "Two thousand (N2,000)";
                amount = 200000;
                break;
            case "asst_welfare":
                amount_words = "Two thousand (N2,000)";
                amount = 200000;
                break;
            case "asst_sport":
                amount_words = "Two thousand (N2,000)";
                amount = 200000;
                break;
            case "pro_II":
                amount_words = "Two thousand (N2,000)";
                amount = 200000;
                break;
            default:
                amount_words = "Amount in words";
                amount = null;
                office = null;
                break;
        }
        __WEBPACK_IMPORTED_MODULE_8_jquery__("#amount_words").val(amount_words);
        this.office = office;
        this.amount = amount;
    };
    RegisterComponent.prototype.triggerSearch = function (event) {
        if (event.which == 13) {
            event.preventDefault();
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').trigger("click");
        }
    };
    RegisterComponent.prototype.searchMatric = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').addClass("loading disabled");
        var matricno = __WEBPACK_IMPORTED_MODULE_8_jquery__('#matricno').val().replace(/\//g, "-").toUpperCase();
        if (matricno === "" || matricno === null) {
            this.toasterService.pop('error', 'Oops!', 'Please enter your matric number');
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#matricno').focus();
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').removeClass("loading disabled");
            return false;
        }
        // Check id student is an elcom officer first
        this.elcomService.getElcomOfficer(matricno).subscribe(function (response) {
            if (response.isElcom) {
                _this.toasterService.pop('error', 'Oops!', response.msg + ' and cannot register as an aspirant');
                __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').removeClass("loading disabled");
                return false;
            }
            else {
                _this.studentService.getStudentRecord(matricno).subscribe(function (response) {
                    if (!response.success) {
                        _this.toasterService.pop('error', 'Oops!', response.msg);
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').removeClass("loading disabled");
                    }
                    else {
                        var matricno = __WEBPACK_IMPORTED_MODULE_8_jquery__('#matricno').val();
                        var lastname = response.student_info.last_name;
                        var firstname = response.student_info.first_name;
                        if (response.student_info.other_names)
                            var middlename = response.student_info.other_names;
                        var email = response.student_info.email;
                        var phone = null; //response.student_info.phoneNumber;
                        var department = response.student_info.department;
                        var course = response.student_info.programme;
                        var office = _this.office;
                        var amount = _this.amount;
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#firstname').val(firstname);
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#middlename').val(middlename);
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#lastname').val(lastname);
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#email').val(email);
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#phone').val(phone);
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#department').val(department);
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#course').val(course);
                        _this.aspirant = {
                            matricno: matricno,
                            firstname: firstname,
                            lastname: lastname,
                            email: email,
                            phone: phone,
                            office: office,
                            amount: amount
                        };
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').removeClass("loading disabled");
                    }
                }, function (error) {
                    _this.toasterService.pop('error', 'Oops!', 'Search failed due to server error. Please try after a while');
                    __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').removeClass("loading disabled");
                });
            }
        }, function (error) {
            _this.toasterService.pop('error', 'Oops!', 'Search failed due to network/server error. Please try after a while');
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').removeClass("loading disabled");
        });
    };
    RegisterComponent.prototype.onPaySubmit = function () {
        var _this = this;
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="student_info"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Connecting to Payment Service.<br><br>Please wait...</h3></div></div></div></div></div>';
        __WEBPACK_IMPORTED_MODULE_8_jquery__('body').prepend(pageDimmer);
        // Required Fields
        if (!this.validateService.validatePayerDetails(this.aspirant)) {
            this.toasterService.pop('error', 'Oops!', 'Please fill in all fields');
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#pageDimmer').remove();
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(this.aspirant.email)) {
            this.toasterService.pop('error', 'Oops!', 'Please use a valid email');
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#pageDimmer').remove();
            return false;
        }
        // Paystack create customer
        var customer = {
            email: this.aspirant.email,
            first_name: this.aspirant.firstname,
            last_name: this.aspirant.lastname,
            phone: this.aspirant.phone,
            metadata: {
                matric_number: this.aspirant.matricno.toUpperCase()
            }
        };
        this.paystackService.createCustomer(customer).subscribe(function (response) {
            if (response.status) {
                // Paystack initialize transaction
                var dataString = {
                    reference: Date.now(),
                    amount: _this.aspirant.amount,
                    email: _this.aspirant.email,
                    callback_url: window.location.host + "/status",
                    metadata: {
                        custom_fields: [
                            { display_name: "Payment For", variable_name: "payment_purpose", value: "FPTB SUG Aspirant Form" },
                            { display_name: "Office Aspiring For", variable_name: "office", value: _this.aspirant.office }
                        ]
                    },
                    subaccount: "ACCT_h0ei6f30smsz0mg",
                    bearer: "subaccount"
                };
                _this.paystackService.initializeTransaction(dataString).subscribe(function (response) {
                    if (response.status) {
                        _this.toasterService.pop('success', 'Success!', 'Authorization URL created. Redirecting...');
                        window.location.href = response.data.authorization_url;
                    }
                    else {
                        _this.toasterService.pop('error', 'Oops!', 'Failed to initialize transaction');
                        _this.router.navigate(['/register']);
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#pageDimmer').remove();
                    }
                });
            }
            else {
                _this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                _this.router.navigate(['/register']);
                __WEBPACK_IMPORTED_MODULE_8_jquery__('#pageDimmer').remove();
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_paystack_service__["a" /* PaystackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_paystack_service__["a" /* PaystackService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_student_service__["a" /* StudentService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_elcom_service__["a" /* ElcomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_elcom_service__["a" /* ElcomService */]) === "function" && _g || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\">\n    <div class=\"three wide column\">\n        <div class=\"ui fluid vertical menu\">\n            <a class=\"item\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('elcom')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/elcom-officers']\">ELCOM</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('aspirants')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/aspirants']\">Aspirants</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('accreditation')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/accreditation']\">Accreditation</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('password')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/resend-password']\">Passwords</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('vote')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/vote']\">Vote</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('receipt')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/receipt']\">Receipt</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('results')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/results']\">Results</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('reports')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/reports']\">Reports</a>\n        </div>\n    </div>\n    <div class=\"thirteen wide column\">\n        <div class=\"ui segment\">\n            <div class=\"ui three stackable cards\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"header\">ELCOM Members</div>\n                        <div class=\"description\">\n                            Download the list of ELCOM officers in the system.\n                        </div>\n                    </div>\n                    <div class=\"ui bottom attached button\" (click)=\"downloadElcomReport()\">\n                        <i class=\"download icon\"></i>\n                        Download File\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"header\">Aspirants</div>\n                        <div class=\"description\">\n                            Download the list of registered aspirants in the system.\n                        </div>\n                    </div>\n                    <div class=\"ui bottom attached button\" (click)=\"downloadAspirantsReport()\">\n                        <i class=\"download icon\"></i>\n                        Download File\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"header\">Accreditation</div>\n                        <div class=\"description\">\n                            Report on accreditation exercise showing all the accredited students.\n                        </div>\n                    </div>\n                    <div class=\"ui bottom attached button\" (click)=\"downloadAccreditationReport()\">\n                        <i class=\"download icon\"></i>\n                        Download Report\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"header\">Election Results</div>\n                        <div class=\"description\">\n                            Election results showing respective scores of the aspirants.\n                        </div>\n                    </div>\n                    <div class=\"ui bottom attached button\" (click)=\"downloadElectionResultsReport()\">\n                        <i class=\"download icon\"></i>\n                        Download Results\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_elcom_service__ = __webpack_require__("../../../../../src/app/services/elcom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_aspirant_service__ = __webpack_require__("../../../../../src/app/services/aspirant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ReportsComponent = (function () {
    function ReportsComponent(router, validateService, authService, toasterService, elcomService, studentService, aspirantService) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.toasterService = toasterService;
        this.elcomService = elcomService;
        this.studentService = studentService;
        this.aspirantService = aspirantService;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var userObj = JSON.parse(localStorage.user);
        var user_name = userObj.name;
        __WEBPACK_IMPORTED_MODULE_8_jquery__('#user_name').text(user_name);
    };
    ReportsComponent.prototype.downloadElcomReport = function () {
        // TODO: Write logic for downloading elcom members list
    };
    ReportsComponent.prototype.downloadAspirantsReport = function () {
        // TODO: Write logic for downloading aspirants details report
    };
    ReportsComponent.prototype.downloadAccreditationReport = function () {
        // TODO: Write logic for downloading accreditation report
    };
    ReportsComponent.prototype.downloadElectionResultsReport = function () {
        // TODO: Write logic for downloading election results
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__("../../../../../src/app/components/reports/reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/reports/reports.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_elcom_service__["a" /* ElcomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_elcom_service__["a" /* ElcomService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_aspirant_service__["a" /* AspirantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_aspirant_service__["a" /* AspirantService */]) === "function" && _g || Object])
], ReportsComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/results/results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\">\n    <div class=\"three wide column\">\n        <div class=\"ui fluid vertical menu\">\n            <a class=\"item\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('elcom')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/elcom-officers']\">ELCOM</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('aspirants')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/aspirants']\">Aspirants</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('accreditation')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/accreditation']\">Accreditation</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('password')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/resend-password']\">Passwords</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('vote')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/vote']\">Vote</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('receipt')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/receipt']\">Receipt</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('results')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/results']\">Results</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('reports')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/reports']\">Reports</a>\n        </div>\n    </div>\n    <div class=\"thirteen wide column\">\n        <div class=\"ui segment\">\n            <table class=\"ui compact celled definition table segment\">\n                <thead>\n                    <tr>\n                        <th></th><th>Full Names</th><th>Nickname</th><th>Office</th><th>Votes</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let aspirant of aspirants; let i = index\">\n                        <td><img class=\"ui image\" style=\"max-height:50px;\" src=\"{{this.apiService.getAPI()+aspirant.picture}}\" /></td>\n                        <td>{{aspirant.firstname}} {{aspirant.middlename}} {{aspirant.lastname}}</td>\n                        <td>{{aspirant.nickname}}</td>\n                        <td>{{aspirant.cgpa}}</td>\n                        <td><span style=\"text-transform: capitalize;\">{{aspirant.office}}</span></td>\n                        <td>{{aspirant.votes}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_aspirant_service__ = __webpack_require__("../../../../../src/app/services/aspirant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResultsComponent = (function () {
    function ResultsComponent(authService, aspirateService, toasterService, apiService) {
        this.authService = authService;
        this.aspirateService = aspirateService;
        this.toasterService = toasterService;
        this.apiService = apiService;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userObj = JSON.parse(localStorage.user);
        var user_name = userObj.name;
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#user_name').text(user_name);
        this.getAspirants();
        this.id = setInterval(function () { _this.getAspirants(); }, 1000 * 10 * 1);
    };
    ResultsComponent.prototype.ngOnDestroy = function () {
        if (this.id) {
            clearInterval(this.id);
        }
    };
    ResultsComponent.prototype.getAspirants = function () {
        var _this = this;
        this.aspirateService.getAspirants().subscribe(function (data) {
            _this.aspirants = data.aspirants;
            _this.toasterService.pop("info", "", "Election results will be refreshed again in the next 10secs.");
        }, function (err) {
            _this.toasterService.pop('error', 'Oops!', err);
            return false;
        });
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-results',
        template: __webpack_require__("../../../../../src/app/components/results/results.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/results/results.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_aspirant_service__["a" /* AspirantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_aspirant_service__["a" /* AspirantService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */]) === "function" && _d || Object])
], ResultsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/status/status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/status/status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\" id=\"msg_grid\">\n    <div class=\"four wide column\"></div>\n    <div class=\"eight wide column\">\n        <div id=\"message_wrapper\">\n            <div class=\"ui icon message\">\n                <i class=\"notched circle loading icon\"></i>\n                <div class=\"content\">\n                    <div class=\"header\">\n                        Just one second\n                    </div>\n                    <p>We're verifying your transaction.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"ui stackable grid\" *ngIf=\"getPaymentStatus()\">\n    <div class=\"three wide column\"></div>\n    <div class=\"ten wide column\">\n        <form class=\"ui form segment\" autocomplete=\"off\" (submit)=\"onAspirantSubmit()\">\n            <div class=\"ui four top attached steps\">\n                <div class=\"link active step\" (click)=\"showStep1()\" id=\"step1\">\n                    <i class=\"user icon\"></i>\n                    <div class=\"content\">\n                        <div class=\"title\">Step 1</div>\n                        <div class=\"description\">Details</div>\n                    </div>\n                </div>\n                <div class=\"link step\" (click)=\"showStep2()\" id=\"step2\">\n                    <i class=\"upload icon\"></i>\n                    <div class=\"content\">\n                        <div class=\"title\">Step 2</div>\n                        <div class=\"description\">Campaign Photo</div>\n                    </div>\n                </div>\n                <div class=\"link step\" (click)=\"showStep3()\" id=\"step3\">\n                    <i class=\"info icon\"></i>\n                    <div class=\"content\">\n                        <div class=\"title\">Step 3</div>\n                        <div class=\"description\">Confirmation</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"ui attached segment\">\n                <div class=\"\" id=\"step1_content\">\n                    <div class=\"field\"><label>1. Names of candidate</label></div>\n                    <div class=\"three fields\">\n                        <div class=\"field\" id=\"last_name_div\">\n                            <label for=\"lasname\">Last name</label>\n                            <div class=\"ui input\">\n                                <input type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"aspirant_model.lastname\" name=\"lastname\" id=\"lastname\" readonly=\"\" />\n                            </div>\n                        </div>\n                        <div class=\"field\" id=\"othernames_div\">\n                            <label for=\"firstname\">Othernames</label>\n                            <div class=\"ui input\">\n                                <input type=\"text\" placeholder=\"Othernames\" [(ngModel)]=\"othernames\" name=\"othernames\" id=\"othernames\" readonly=\"\" />\n                            </div>\n                        </div>\n                        <div class=\"field\" id=\"middle_name_div\">\n                            <label for=\"nickname\">Nickname</label>\n                            <div class=\"ui input\">\n                                <input type=\"text\" placeholder=\"Nickname\" [(ngModel)]=\"aspirant_model.nickname\" name=\"nickname\" id=\"nickname\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"two fields\">\n                        <div class=\"field\" id=\"email_div\">\n                            <label for=\"email\">2. Email address</label>\n                            <div class=\"ui input\">\n                                <input type=\"email\" placeholder=\"Email Addresss\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" readonly=\"\" />\n                            </div>\n                        </div>\n                        <div class=\"field\" id=\"phone_div\">\n                            <label for=\"phone\">3. Phone number (e.g. 08033344455)</label>\n                            <div class=\"ui input\">\n                                <input type=\"tel\" placeholder=\"Phone\" [(ngModel)]=\"phone\" name=\"phone\" id=\"phone\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"field\" id=\"address_div\">\n                        <label for=\"address\">4. Address</label>\n                        <input type=\"text\" placeholder=\"Addresss\" [(ngModel)]=\"aspirant_model.address\" name=\"address\" id=\"address\" />\n                    </div>\n                    <div class=\"two fields\">\n                        <div class=\"field\" id=\"\">\n                            <label for=\"department\">5. Department</label>\n                            <div class=\"ui input\">\n                                <input type=\"email\" placeholder=\"Department\" [(ngModel)]=\"department\" name=\"department\" id=\"department\" readonly=\"\" />\n                            </div>\n                        </div>\n                        <div class=\"field\" id=\"\">\n                            <label for=\"course\">6. Course of study</label>\n                            <div class=\"ui input\">\n                                <input type=\"text\" placeholder=\"Course of study\" [(ngModel)]=\"course\" name=\"course\" id=\"course\" readonly=\"\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"two fields\">\n                        <div class=\"field\" id=\"\">\n                            <label for=\"level\">7. Level</label>\n                            <div class=\"ui input\">\n                                <input type=\"text\" placeholder=\"Level of study\" [(ngModel)]=\"level\" name=\"level\" id=\"level\" readonly=\"\" />\n                            </div>\n                        </div>\n                        <div class=\"field\" id=\"\">\n                            <label for=\"level\">8. Current CGPA</label>\n                            <div class=\"ui input\">\n                                <input type=\"text\" placeholder=\"Current CGPA\" [(ngModel)]=\"aspirant_model.cgpa\" name=\"cgpa\" id=\"cgpa\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"field\">\n                        <label for=\"reason\">9. Reason for contesting</label>\n                        <div class=\"ui input\">\n                            <textarea placeholder=\"Reason for contesting\" [(ngModel)]=\"aspirant_model.reason\" name=\"reason\" id=\"reason\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"ui divider\"></div>\n                    <button type=\"button\" class=\"ui fluid button\" (click)=\"showStep2()\">Next<i class=\"arrow right icon\"></i></button>\n                </div>\n                <div class=\"hiddenContent\" id=\"step2_content\">\n                    <div class=\"ui stackable grid\">\n                        <div class=\"eight wide column\">\n                            <input type=\"file\" [(ngModel)]=\"picture\" name=\"picture\" id=\"picture\" accept=\"image/*\" required (change)=\"fileChange($event)\" />\n                        </div>\n                        <div class=\"eight wide column\">\n                            <div class=\"field\" style=\"text-align:center;\">\n                                <img [attr.src]='file_srcs[0]' alt=\"\" id=\"image_preview\"/>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui divider\"></div>\n                    <div class=\"two fields\">\n                        <div class=\"field\">\n                            <button type=\"button\" class=\"ui fluid button\" (click)=\"showStep1()\"><i class=\"arrow left icon\"></i>Back</button>\n                        </div>\n                        <div class=\"field\">\n                            <button type=\"button\" class=\"ui fluid button\" (click)=\"showStep3()\">Next<i class=\"arrow right icon\"></i></button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"hiddenContent\" id=\"step3_content\">\n                    <div class=\"ui stackable grid\">\n                        <div class=\"two wide column\"></div>\n                        <div class=\"twelve wide column\">\n                            <div class=\"ui segment\">\n                                <div class=\"field\">\n                                    <div class=\"ui toggle checkbox\">\n                                        <input type=\"checkbox\" (click)=\"enableSubmit()\" tabindex=\"0\" id=\"confirm\">\n                                        <label>\n                                            I certify that to my personal knowledge and subject to any conditions\n                                            required by the FPTB SUG ELCOM Bye-Laws, the information provided in the form\n                                            is accurate and up to date and is verifiable.\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <button type=\"submit\" class=\"ui large fluid submit button green disabled\" id=\"submit_btn\">\n                                <i class=\"save icon\"></i> Submit Form\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"ui divider\"></div>\n                    <button type=\"button\" class=\"ui fluid button\" (click)=\"showStep2()\"><i class=\"arrow left icon\"></i>Back</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/status/status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_paystack_service__ = __webpack_require__("../../../../../src/app/services/paystack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_aspirant_service__ = __webpack_require__("../../../../../src/app/services/aspirant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StatusComponent = (function () {
    function StatusComponent(validateService, toasterService, router, paystackService, studentService, aspirantService, changeDetectorRef) {
        this.validateService = validateService;
        this.toasterService = toasterService;
        this.router = router;
        this.paystackService = paystackService;
        this.studentService = studentService;
        this.aspirantService = aspirantService;
        this.changeDetectorRef = changeDetectorRef;
        this.aspirant_model = {
            matricno: '',
            firstname: '',
            middlename: '',
            lastname: '',
            nickname: '',
            address: '',
            cgpa: '',
            office: '',
            reason: '',
            picture: '',
            votes: 0,
        };
        this.path = '';
        this.file_srcs = [];
        this.debug_size_before = [];
        this.debug_size_after = [];
    }
    StatusComponent.prototype.ngOnInit = function () {
        this.reference = this.getUrlParameter(('reference' || 'trxref'));
        if (!this.reference) {
            this.paymentStatus = false;
            this.toasterService.pop('error', 'Sorry!', 'You must pay for a position before you can proceed.');
            this.router.navigate(['/register']);
            return false;
        }
        this.verifyTransaction();
    };
    StatusComponent.prototype.getUrlParameter = function (sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL.split('&'), sParameterName, i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
    StatusComponent.prototype.verifyTransaction = function () {
        var _this = this;
        this.paystackService.verifyTransaction(this.reference).subscribe(function (response) {
            if (response.status) {
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#message_wrapper').html('<div class="ui icon success message"><i class="checkmark icon"></i><div class="content"><div class="header">All done</div><p>We\'ve verified your transaction.</p></div></div>');
                _this.paymentStatus = true;
                _this.aspirant = {
                    matricno: response.data.customer.metadata.matric_number,
                    email: response.data.customer.email,
                    phone: response.data.customer.phone,
                    office: response.data.metadata.custom_fields[1].value,
                    reference: response.data.reference
                };
                var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Preparing Form.<br><br>Please wait...</h3></div></div></div></div></div>';
                __WEBPACK_IMPORTED_MODULE_7_jquery__('body').prepend(pageDimmer);
                _this.populateAspirantForm();
            }
            else {
                _this.paymentStatus = false;
                _this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#pageDimmer').remove();
                _this.router.navigate(['/register']);
            }
        }, function (error) {
            _this.toasterService.pop('error', 'Oops!', 'We just experienced a server error. Please refresh your browser');
            __WEBPACK_IMPORTED_MODULE_7_jquery__('#pageDimmer').remove();
            _this.router.navigate(['/register']);
        });
    };
    StatusComponent.prototype.getPaymentStatus = function () {
        return this.paymentStatus;
    };
    StatusComponent.prototype.populateAspirantForm = function () {
        var _this = this;
        var matricno = this.aspirant.matricno.replace(/\//g, "-");
        this.studentService.getStudentRecord(matricno).subscribe(function (response) {
            if (response.student_info === 'Record not Found!') {
                _this.toasterService.pop('error', 'Oops!', response.student_info);
            }
            else {
                _this.matricno = _this.aspirant_model.matricno = _this.aspirant.matricno;
                var lastname = _this.aspirant_model.lastname = response.student_info.last_name;
                var firstname = _this.aspirant_model.firstname = response.student_info.first_name;
                _this.aspirant_model.middlename = response.student_info.other_names;
                var email = response.student_info.email;
                var department = response.student_info.department;
                var course = response.student_info.programme;
                var level = response.student_info.class;
                var office = _this.aspirant_model.office = _this.aspirant.office;
                var amount = _this.aspirant.amount;
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#othernames').val(firstname + " " + response.student_info.other_names);
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#lastname').val(lastname);
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#email').val(email);
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#phone').val();
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#department').val(department);
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#course').val(course);
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#level').val(level);
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#pageDimmer').remove();
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#msg_grid').remove();
                _this.toasterService.pop('success', response.message, 'Please fill in all the empty fields in the form.');
            }
        }, function (error) {
            _this.toasterService.pop('error', 'Oops!', 'We just experienced a server error. Please refresh your browser');
            __WEBPACK_IMPORTED_MODULE_7_jquery__('#pageDimmer').remove();
        });
    };
    StatusComponent.prototype.showStep1 = function () {
        __WEBPACK_IMPORTED_MODULE_7_jquery__("#step2_content, #step3_content").addClass("hiddenContent");
        __WEBPACK_IMPORTED_MODULE_7_jquery__("#step2, #step3").removeClass("active");
        __WEBPACK_IMPORTED_MODULE_7_jquery__("#step1").addClass("active");
        __WEBPACK_IMPORTED_MODULE_7_jquery__("#step1_content").removeClass("hiddenContent");
    };
    StatusComponent.prototype.showStep2 = function () {
        __WEBPACK_IMPORTED_MODULE_7_jquery__("#step1_content, #step3_content").addClass("hiddenContent");
        __WEBPACK_IMPORTED_MODULE_7_jquery__("#step1, #step3").removeClass("active");
        __WEBPACK_IMPORTED_MODULE_7_jquery__("#step2").addClass("active");
        __WEBPACK_IMPORTED_MODULE_7_jquery__("#step2_content").removeClass("hiddenContent");
    };
    StatusComponent.prototype.showStep3 = function () {
        __WEBPACK_IMPORTED_MODULE_7_jquery__("#step1_content, #step2_content").addClass("hiddenContent");
        __WEBPACK_IMPORTED_MODULE_7_jquery__("#step1, #step2").removeClass("active");
        __WEBPACK_IMPORTED_MODULE_7_jquery__("#step3").addClass("active");
        __WEBPACK_IMPORTED_MODULE_7_jquery__("#step3_content").removeClass("hiddenContent");
    };
    StatusComponent.prototype.fileChange = function ($event) {
        this.file_srcs = [];
        this.readFiles($event.target.files);
    };
    StatusComponent.prototype.readFile = function (file, reader, callback) {
        var _this = this;
        reader.onload = function () {
            callback(reader.result);
            _this.aspirant_model.picture = reader.result;
        };
        reader.readAsDataURL(file);
    };
    StatusComponent.prototype.readFiles = function (files, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        // Create the file reader
        var reader = new FileReader();
        // If there is a file
        if (index in files) {
            // Start reading this file
            this.readFile(files[index], reader, function (result) {
                // Create an img element and add the image file data to it
                var img = document.createElement("img");
                img.src = result;
                // Send this img to the resize function (and wait for callback)
                _this.resize(img, 250, 250, function (resized_jpeg, before, after) {
                    // For debugging (size in bytes before and after)
                    _this.debug_size_before.push(before);
                    _this.debug_size_after.push(after);
                    // Add the resized jpeg img source to a list for preview
                    // This is also the file you want to upload. (either as a
                    // base64 string or img.src = resized_jpeg if you prefer a file).
                    _this.file_srcs.push(resized_jpeg);
                    // Read the next file;
                    _this.readFiles(files, index + 1);
                });
            });
        }
        else {
            // When all files are done This forces a change detection
            this.changeDetectorRef.detectChanges();
        }
    };
    StatusComponent.prototype.resize = function (img, MAX_WIDTH, MAX_HEIGHT, callback) {
        // This will wait until the img is loaded before calling this function
        return img.onload = function () {
            // Get the images current width and height
            var width = img.width;
            var height = img.height;
            // Set the WxH to fit the Max values (but maintain proportions)
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            }
            else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            // create a canvas object
            var canvas = document.createElement("canvas");
            // Set the canvas to the new calculated dimensions
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
            // Get this encoded as a jpeg
            // IMPORTANT: 'jpeg' NOT 'jpg'
            var dataUrl = canvas.toDataURL('image/jpeg');
            // callback with the results
            callback(dataUrl, img.src.length, dataUrl.length);
        };
    };
    StatusComponent.prototype.enableSubmit = function () {
        var confirmStatus = __WEBPACK_IMPORTED_MODULE_7_jquery__('#confirm').is(':checked');
        if (confirmStatus) {
            __WEBPACK_IMPORTED_MODULE_7_jquery__("#submit_btn").removeClass("disabled");
        }
        else {
            __WEBPACK_IMPORTED_MODULE_7_jquery__("#submit_btn").addClass("disabled");
        }
    };
    StatusComponent.prototype.onAspirantSubmit = function () {
        var _this = this;
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Submiting form...</h3></div></div></div></div></div>';
        __WEBPACK_IMPORTED_MODULE_7_jquery__('body').prepend(pageDimmer);
        // Required Fields
        if (!this.validateService.validateAspirant(this.aspirant_model)) {
            this.toasterService.pop('error', 'Oops!', 'Please fill in all fields');
            __WEBPACK_IMPORTED_MODULE_7_jquery__('#pageDimmer').remove();
            return false;
        }
        this.aspirantService.addAspirant(this.aspirant_model).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', 'Congratulations!', 'You are now registered as an aspirant');
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#pageDimmer').remove();
                _this.router.navigate(['/aspirants']);
            }
            else {
                _this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#pageDimmer').remove();
            }
        }, function (error) {
            this.toasterService.pop('error', 'Oops!', error);
            __WEBPACK_IMPORTED_MODULE_7_jquery__('#pageDimmer').remove();
            return false;
        });
    };
    return StatusComponent;
}());
StatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-status',
        template: __webpack_require__("../../../../../src/app/components/status/status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/status/status.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_paystack_service__["a" /* PaystackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_paystack_service__["a" /* PaystackService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_aspirant_service__["a" /* AspirantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_aspirant_service__["a" /* AspirantService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _g || Object])
], StatusComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=status.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/vote/vote.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vote/vote.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\" *ngIf=\"authService.loggedIn()\">\n    <div class=\"three wide column\">\n        <div class=\"ui fluid vertical menu\">\n            <a class=\"item\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('elcom')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/elcom-officers']\">ELCOM</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('aspirants')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/aspirants']\">Aspirants</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('accreditation')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/accreditation']\">Accreditation</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('password')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/resend-password']\">Passwords</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('vote')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/vote']\">Vote</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('receipt')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/receipt']\">Receipt</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('results')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/results']\">Results</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('reports')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/reports']\">Reports</a>\n        </div>\n    </div>\n    <div class=\"thirteen wide column\">\n        <div class=\"ui segment\" id=\"contain\">\n            <div class=\"ui message success\" *ngIf=\"canVote()\">\n                {{message}} on {{votingTime.votingDay}} between the hours of {{votingTime.startingTime}} - {{votingTime.closingTime}}.\n            </div>\n            <div class=\"ui message info\">\n                <p>\n                    To vote simply click on a checkbox attached to the candidate of choice, then click on submit vote at the bottom of the page.\n                </p>\n            </div>\n            <form class=\"ui form\" autocomplete=\"off\" (submit)=\"onVoteSubmit()\" *ngIf=\"canVote()\" id=\"votingForm\">\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of President</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"presidents\">\n                        <div class=\"card\" *ngFor=\"let president of presidents\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{president.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.president\" name=\"president\" value=\"{{president.matricno}}\">\n                                        <label>Vote {{ president.nickname }} as President</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"presidents<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of Vice President</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"vice_presidents\">\n                        <div class=\"card\" *ngFor=\"let vice_president of vice_presidents; let i = index\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{vice_president.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.vice_president\" name=\"vice_president\" value=\"{{vice_president.matricno}}\">\n                                        <label>Vote {{ vice_president.nickname }} as Vice President</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"vice_presidents<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of Sectretary General</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"sec_gens\">\n                        <div class=\"card\" *ngFor=\"let sec_gen of sec_gens; let i = index\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{sec_gen.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.sec_gen\" name=\"sec_gen\" value=\"{{sec_gen.matricno}}\">\n                                        <label>Vote {{ sec_gen.nickname }} as Secretary General</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"sec_gens<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of Asst. Secretary General</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"asst_sec_gens\">\n                        <div class=\"card\" *ngFor=\"let asst_sec_gen of asst_sec_gens; let i = index\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{asst_sec_gen.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.asst_sec_gen\" name=\"asst_sec_gen\" value=\"{{asst_sec_gen.matricno}}\">\n                                        <label>Vote {{ asst_sec_gen.nickname }} as Asst. Secretary General</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"asst_sec_gens<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of Financial Secretary</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"fin_secs\">\n                        <div class=\"card\" *ngFor=\"let fin_sec of fin_secs; let i = index\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{fin_sec.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.fin_sec\" name=\"fin_sec\" value=\"{{fin_sec.matricno}}\">\n                                        <label>Vote {{ fin_sec.nickname }} as Financial Secretary</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"fin_secs<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of Internal Auditor</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"auditors\">\n                        <div class=\"card\" *ngFor=\"let auditor of auditors; let i = index\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{auditor.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.auditor\" name=\"auditor\" value=\"{{auditor.matricno}}\">\n                                        <label>Vote {{ auditor.nickname }} as Internal Auditor</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"auditors<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of Treasurer</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"treasurers\">\n                        <div class=\"card\" *ngFor=\"let treasurer of treasurers; let i = index\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{treasurer.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.treasurer\" name=\"treasurer\" value=\"{{treasurer.matricno}}\">\n                                        <label>Vote {{ treasurer.nickname }} as Treasurer</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"treasurers<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of Welfare Officer I – (Male)</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"welfare_Is\">\n                        <div class=\"card\" *ngFor=\"let welfare_I of welfare_Is; let i = index\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{welfare_I.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.welfare_I\" name=\"welfare_I\" value=\"{{welfare_I.matricno}}\">\n                                        <label>Vote {{ welfare_I.nickname }} as Welfare Officer I – (Male)</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"welfare_Is<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of Welfare Officer II – (Female)</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"welfare_IIs\">\n                        <div class=\"card\" *ngFor=\"let welfare_II of welfare_IIs; let i = index\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{welfare_II.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.welfare_II\" name=\"welfare_II\" value=\"{{welfare_II.matricno}}\">\n                                        <label>Vote {{ welfare_II.nickname }} as Welfare Officer II – (Female)</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"welfare_IIs<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of Director of Socials (D.O.S)</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"dir_of_socialss\">\n                        <div class=\"card\" *ngFor=\"let dir_of_socials of dir_of_socialss; let i = index\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{dir_of_socials.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.dir_of_socials\" name=\"dir_of_socials\" value=\"{{dir_of_socials.matricno}}\">\n                                        <label>Vote {{ dir_of_socials.nickname }} as Director of Socials (D.O.S)</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"dir_of_socialss<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of Public Relation Officer I – (Male)</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"pro_Is\">\n                        <div class=\"card\" *ngFor=\"let pro_I of pro_Is; let i = index\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{pro_I.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.pro_I\" name=\"pro_I\" value=\"{{pro_I.matricno}}\">\n                                        <label>Vote {{ pro_I.nickname }} as Public Relation Officer I – (Male)</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"pro_Is<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of Public Relation Officer II – (Female)</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"pro_IIs\">\n                        <div class=\"card\" *ngFor=\"let pro_II of pro_IIs; let i = index\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{pro_II.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.pro_II\" name=\"pro_II\" value=\"{{pro_II.matricno}}\">\n                                        <label>Vote {{ pro_II.nickname }} as Public Relation Officer II – (Female)</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"pro_IIs<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of Provost Marshal</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"provosts\">\n                        <div class=\"card\" *ngFor=\"let provost of provosts; let i = index\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{provost.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.provost\" name=\"provost\" value=\"{{provost.matricno}}\">\n                                        <label>Vote {{ provost.nickname }} as Provost Marshal</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"provosts<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of Sales Director</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"sales_dirs\">\n                        <div class=\"card\" *ngFor=\"let sales_dir of sales_dirs; let i = index\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{sales_dir.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.sales_dir\" name=\"sales_dir\" value=\"{{sales_dir.matricno}}\">\n                                        <label>Vote {{ sales_dir.nickname }} as Sales Director</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"sales_dirs<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of Sports Director</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"sports_dirs\">\n                        <div class=\"card\" *ngFor=\"let sports_dir of sports_dirs; let i = index\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{sports_dir.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.sports_dir\" name=\"sports_dir\" value=\"{{sports_dir.matricno}}\">\n                                        <label>Vote {{ sports_dir.nickname }} as Sports Director</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"sports_dirs<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui segment\">\n                    <div class=\"ui message info\">\n                        <p>Aspirants for the office of Director of Food</p>\n                    </div>\n                    <div class=\"ui five raised cards\" *ngIf=\"dir_of_foods\">\n                        <div class=\"card\" *ngFor=\"let dir_of_food of dir_of_foods; let i = index\">\n                            <div class=\"image\">\n                                <img style=\"max-height: 110px;\" src=\"{{dir_of_food.picture}}\">\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"description\">\n                                    <div class=\"ui radio checkbox\">\n                                        <input type=\"radio\" [(ngModel)]=\"voteSlip.dir_of_food\" name=\"dir_of_food\" value=\"{{dir_of_food.matricno}}\">\n                                        <label>Vote {{ dir_of_food.nickname }} as Director of Food</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui message\" *ngIf=\"dir_of_foods<1\">\n                        No aspirants are contesting for this office\n                    </div>\n                </div>\n                <div class=\"ui divider\"></div>\n                <button type=\"submit\" class=\"ui right labeled icon green fluid button\" id=\"submitBtn\">\n                    <i class=\"checkmark icon\"></i>\n                    Submit Vote\n                </button>\n            </form>\n            <div class=\"ui huge message error\" *ngIf=\"!canVote()\">\n                {{message}}\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/vote/vote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_aspirant_service__ = __webpack_require__("../../../../../src/app/services/aspirant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_vote_service__ = __webpack_require__("../../../../../src/app/services/vote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var VoteComponent = (function () {
    function VoteComponent(toasterService, authService, router, mailService, aspirantService, apiService, voteService, studentService) {
        this.toasterService = toasterService;
        this.authService = authService;
        this.router = router;
        this.mailService = mailService;
        this.aspirantService = aspirantService;
        this.apiService = apiService;
        this.voteService = voteService;
        this.studentService = studentService;
        this.voteSlip = {
            matricno: String,
            president: String,
            vice_president: String,
            sec_gen: String,
            asst_sec_gen: String,
            fin_sec: String,
            auditor: String,
            treasurer: String,
            welfare_I: String,
            welfare_II: String,
            dir_of_socials: String,
            pro_I: String,
            pro_II: String,
            provost: String,
            sales_dir: String,
            sports_dir: String,
            dir_of_food: String,
        };
        this.votingTime = {
            votingDay: '2018-01-15',
            startingTime: '09:00',
            closingTime: '23:59'
        };
    }
    VoteComponent.prototype.ngOnInit = function () {
        var userObj = JSON.parse(localStorage.user);
        var user_name = userObj.name;
        this.voteSlip.matricno = userObj.username;
        __WEBPACK_IMPORTED_MODULE_9_jquery__('#user_name').text(user_name);
        var dateObj = new Date();
        var month = '' + (dateObj.getUTCMonth() + 1); //months from 1-12
        if (month.length < 2)
            month = '0' + month;
        var day = '' + dateObj.getUTCDate();
        if (day.length < 2)
            day = '0' + day;
        var year = dateObj.getUTCFullYear();
        var todayDay = year + "-" + month + "-" + day;
        var hour = dateObj.getHours().toString();
        if (hour.length < 2)
            hour = '0' + hour;
        var minute = dateObj.getMinutes().toString();
        if (minute.length < 2)
            minute = '0' + minute;
        var todayTime = hour + ":" + minute;
        if (todayDay < this.votingTime.votingDay) {
            this.isVotingTime = false;
            this.message = 'Voting is not openned yet.';
        }
        else {
            if (todayDay > this.votingTime.votingDay) {
                this.isVotingTime = false;
                this.message = 'Voting day has passed.';
            }
            else {
                if (todayTime < this.votingTime.startingTime) {
                    this.isVotingTime = false;
                    this.message = 'It is not yet voting time.';
                }
                else {
                    if (todayTime > this.votingTime.closingTime) {
                        this.isVotingTime = false;
                        this.message = 'Voting time has elapsed.';
                    }
                    else {
                        this.isVotingTime = true;
                        this.message = 'Voting is open';
                        this.getVoteStatus();
                    }
                }
            }
        }
    };
    VoteComponent.prototype.canVote = function () {
        return this.isVotingTime;
    };
    VoteComponent.prototype.hasVoted = function () {
        if (!this.voteStatus) {
            this.showSlip();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#votingForm").html('<div class="ui message red"><p>You have already voted for the aspirants you wish.<br><br>Thank you for exercising your rights.</p></div>');
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#votingForm").append('<a href="/receipt" class="ui button large green">View/Download your vote slip</a> <a href="/results" class="ui button large blue">View Election results</a>');
        }
    };
    VoteComponent.prototype.getVoteStatus = function () {
        var _this = this;
        var userObj = JSON.parse(localStorage.user);
        var matricno = userObj.username.replace(/\//g, "-");
        this.voteService.getVoteStatus(matricno).subscribe(function (response) {
            if (response.hasVoted) {
                _this.voteStatus = true;
            }
            else {
                _this.voteStatus = false;
            }
            _this.hasVoted();
        }, function (error) {
            _this.toasterService.pop('error', 'Oops!', 'We just experienced a server error. Please refresh your browser');
        });
    };
    VoteComponent.prototype.getAspirantsByOffice = function (office) {
        var _this = this;
        this.aspirantService.getAspirantsByOffice(office).subscribe(function (response) {
            if (response.success) {
                var aspirants = response.aspirants;
                if (office === 'president') {
                    _this.presidents = aspirants;
                }
                else if (office === 'vice_president') {
                    _this.vice_presidents = aspirants;
                }
                else if (office === 'sec_gen') {
                    _this.sec_gens = aspirants;
                }
                else if (office === 'asst_sec_gen') {
                    _this.asst_sec_gens = aspirants;
                }
                else if (office === 'fin_sec') {
                    _this.fin_secs = aspirants;
                }
                else if (office === 'auditor') {
                    _this.auditors = aspirants;
                }
                else if (office === 'treasurer') {
                    _this.treasurers = aspirants;
                }
                else if (office === 'welfare_I') {
                    _this.welfare_Is = aspirants;
                }
                else if (office === 'welfare_II') {
                    _this.welfare_IIs = aspirants;
                }
                else if (office === 'dir_of_socials') {
                    _this.dir_of_socialss = aspirants;
                }
                else if (office === 'pro_I') {
                    _this.pro_Is = aspirants;
                }
                else if (office === 'pro_II') {
                    _this.pro_IIs = aspirants;
                }
                else if (office === 'provost') {
                    _this.provosts = aspirants;
                }
                else if (office === 'sales_dir') {
                    _this.sales_dirs = aspirants;
                }
                else if (office === 'sports_dir') {
                    _this.sports_dirs = aspirants;
                }
                else if (office === 'dir_of_food') {
                    _this.dir_of_foods = aspirants;
                }
                else {
                    _this.toasterService.pop('error', 'Oops!', 'Office not available');
                }
            }
            else {
                if (office === 'president') {
                    _this.presidents = false;
                }
                else if (office === 'vice_president') {
                    _this.vice_presidents = false;
                }
                else if (office === 'sec_gen') {
                    _this.sec_gens = aspirants;
                }
                else if (office === 'asst_sec_gen') {
                    _this.asst_sec_gens = aspirants;
                }
                else if (office === 'fin_sec') {
                    _this.fin_secs = aspirants;
                }
                else if (office === 'auditor') {
                    _this.auditors = aspirants;
                }
                else if (office === 'treasurer') {
                    _this.treasurers = aspirants;
                }
                else if (office === 'welfare_I') {
                    _this.welfare_Is = aspirants;
                }
                else if (office === 'welfare_II') {
                    _this.welfare_IIs = aspirants;
                }
                else if (office === 'dir_of_socials') {
                    _this.dir_of_socialss = aspirants;
                }
                else if (office === 'pro_I') {
                    _this.pro_Is = aspirants;
                }
                else if (office === 'pro_II') {
                    _this.pro_IIs = aspirants;
                }
                else if (office === 'provost') {
                    _this.provosts = aspirants;
                }
                else if (office === 'sales_dir') {
                    _this.sales_dirs = aspirants;
                }
                else if (office === 'sports_dir') {
                    _this.sports_dirs = aspirants;
                }
                else if (office === 'dir_of_food') {
                    _this.dir_of_foods = aspirants;
                }
            }
        }, function (error) {
            _this.toasterService.pop('error', 'Oops!', 'We just encountered a server error fetching aspirants.');
        });
    };
    VoteComponent.prototype.showSlip = function () {
        this.getAspirantsByOffice('president');
        this.getAspirantsByOffice('vice_president');
        this.getAspirantsByOffice('sec_gen');
        this.getAspirantsByOffice('asst_sec_gen');
        this.getAspirantsByOffice('fin_sec');
        this.getAspirantsByOffice('auditor');
        this.getAspirantsByOffice('treasurer');
        this.getAspirantsByOffice('welfare_I');
        this.getAspirantsByOffice('welfare_II');
        this.getAspirantsByOffice('dir_of_socials');
        this.getAspirantsByOffice('pro_I');
        this.getAspirantsByOffice('pro_II');
        this.getAspirantsByOffice('provost');
        this.getAspirantsByOffice('sales_dir');
        this.getAspirantsByOffice('sports_dir');
        this.getAspirantsByOffice('dir_of_food');
    };
    VoteComponent.prototype.onVoteSubmit = function () {
        var _this = this;
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class=""><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Sumbitting your vote slip.<br><br>Please wait...</h3></div></div></div></div></div>';
        __WEBPACK_IMPORTED_MODULE_9_jquery__('body').prepend(pageDimmer);
        this.voteSlip = {
            matricno: this.voteSlip.matricno,
            president: this.voteSlip.president,
            vice_president: this.voteSlip.vice_president,
            sec_gen: this.voteSlip.sec_gen,
            asst_sec_gen: this.voteSlip.asst_sec_gen,
            fin_sec: this.voteSlip.fin_sec,
            auditor: this.voteSlip.auditor,
            treasurer: this.voteSlip.treasurer,
            welfare_I: this.voteSlip.welfare_I,
            welfare_II: this.voteSlip.welfare_II,
            dir_of_socials: this.voteSlip.dir_of_socials,
            pro_I: this.voteSlip.pro_I,
            pro_II: this.voteSlip.pro_II,
            provost: this.voteSlip.provost,
            sales_dir: this.voteSlip.sales_dir,
            sports_dir: this.voteSlip.sports_dir,
            dir_of_food: this.voteSlip.dir_of_food,
        };
        this.voteService.saveVote(this.voteSlip).subscribe(function (response) {
            if (response.success) {
                _this.toasterService.pop('success', 'Congratulations!', response.msg);
                _this.getVoteStatus();
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#pageDimmer').remove();
            }
            else {
                _this.toasterService.pop('error', 'Oops!', response.msg);
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#pageDimmer').remove();
            }
        }, function (error) {
            _this.toasterService.pop('error', 'Oops!', 'We just experienced a server error. Please refresh your browser');
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#pageDimmer').remove();
        });
    };
    VoteComponent.prototype.updateVoteStatus = function () {
    };
    VoteComponent.prototype.voterSlip = function () {
        // TODO: Get voter's vote receipt
    };
    return VoteComponent;
}());
VoteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vote',
        template: __webpack_require__("../../../../../src/app/components/vote/vote.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/vote/vote.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_mail_service__["a" /* MailService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_aspirant_service__["a" /* AspirantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_aspirant_service__["a" /* AspirantService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_api_service__["a" /* ApiService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_vote_service__["a" /* VoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_vote_service__["a" /* VoteService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_student_service__["a" /* StudentService */]) === "function" && _h || Object])
], VoteComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=vote.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authSevice, router) {
        this.authSevice = authSevice;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authSevice.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/accreditation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccreditationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccreditationService = (function () {
    function AccreditationService(http, authService, apiService) {
        this.http = http;
        this.authService = authService;
        this.apiService = apiService;
    }
    AccreditationService.prototype.addStudent = function (student) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiService.getAPI() + 'students/student', student, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    AccreditationService.prototype.countAccreditedStudents = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI() + 'students/count', { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    return AccreditationService;
}());
AccreditationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */]) === "function" && _c || Object])
], AccreditationService);

var _a, _b, _c;
//# sourceMappingURL=accreditation.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
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

var ApiService = (function () {
    function ApiService() {
    }
    ApiService.prototype.getAPI = function () {
        if (location.port === '4200') {
            return 'http://localhost:8080/';
        }
        else {
            return '';
        }
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ApiService);

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/aspirant.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AspirantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AspirantService = (function () {
    function AspirantService(http, authService, apiService) {
        this.http = http;
        this.authService = authService;
        this.apiService = apiService;
    }
    AspirantService.prototype.getAspirants = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI() + 'aspirants', { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    AspirantService.prototype.addAspirant = function (aspirant) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiService.getAPI() + 'aspirants/aspirant', aspirant, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    AspirantService.prototype.getAspirant = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log("ELCOM to add: " + username);
        return this.http.get(this.apiService.getAPI() + 'aspirants/aspirant/' + username, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    AspirantService.prototype.getAspirantsByOffice = function (office) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI() + 'aspirants/office/' + office, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    return AspirantService;
}());
AspirantService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */]) === "function" && _c || Object])
], AspirantService);

var _a, _b, _c;
//# sourceMappingURL=aspirant.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiService.getAPI() + 'users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiService.getAPI() + 'users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI() + 'users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        //return tokenNotExpired();
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.canPerformTask = function (task) {
        var user = JSON.parse(localStorage.user);
        var user_role = user.user_role;
        if (task == 'elcom' && user_role == 0)
            return true;
        if (task == 'password' && user_role == 0)
            return true;
        if (task == 'aspirants' && (user_role == 0 || user_role == 1))
            return true;
        if (task == 'accreditation' && user_role == 1)
            return true;
        if (task == 'reports' && (user_role == 0 || user_role == 1))
            return true;
        if (task == 'results' && (user_role == 1 || user_role == 2))
            return true;
        if (task == 'vote' && user_role == 2)
            return true;
        if (task == 'receipt' && user_role == 2)
            return true;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/elcom.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElcomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ElcomService = (function () {
    function ElcomService(http, apiService, authService) {
        this.http = http;
        this.apiService = apiService;
        this.authService = authService;
    }
    ElcomService.prototype.getElcomOfficers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI() + 'users/elcom', { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    ElcomService.prototype.getElcomOfficer = function (matricno) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI() + 'users/elcom/' + matricno, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    ElcomService.prototype.deleteElcomOfficer = function (matricno) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.apiService.getAPI() + 'users/elcom/' + matricno, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    return ElcomService;
}());
ElcomService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], ElcomService);

var _a, _b, _c;
//# sourceMappingURL=elcom.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/mail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MailService = (function () {
    function MailService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
    }
    MailService.prototype.sendMail = function (mailDetails) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiService.getAPI() + 'messaging/mail/', mailDetails, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    return MailService;
}());
MailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _b || Object])
], MailService);

var _a, _b;
//# sourceMappingURL=mail.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/paystack.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaystackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var secret = 'sk_test_1cb9868b1a74a0b1e81c3fbb377033cb06862b76';
var live_secret = 'sk_live_2d3ca6a2fa4fcdb3e5dfdfb071748629c896fe43';
var PaystackService = (function () {
    function PaystackService(http) {
        this.http = http;
    }
    PaystackService.prototype.createCustomer = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', 'Bearer ' + secret);
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://api.paystack.co/customer', data, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    PaystackService.prototype.initializeTransaction = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', 'Bearer ' + secret);
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://api.paystack.co/transaction/initialize', data, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    PaystackService.prototype.verifyTransaction = function (reference) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', 'Bearer ' + secret);
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://api.paystack.co/transaction/verify/' + reference, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    return PaystackService;
}());
PaystackService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PaystackService);

var _a;
//# sourceMappingURL=paystack.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/sms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SmsService = (function () {
    function SmsService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.apiUrlCredentials = 'https://api.smartsmssolutions.com/smsapi.php?username=sadon12&password=LIacAnuclommIc2';
    }
    SmsService.prototype.sendSMS = function (smsDetails) {
        return this.http.post(this.apiService.getAPI() + 'messaging/sms/', smsDetails).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    SmsService.prototype.checkBalance = function () {
        return this.http.get(this.apiService.getAPI() + '/messaging/sms/').map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    return SmsService;
}());
SmsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _b || Object])
], SmsService);

var _a, _b;
//# sourceMappingURL=sms.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentService = (function () {
    function StudentService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.apiUrl = 'http://api.fptb.edu.ng/student/';
    }
    StudentService.prototype.getStudentRecord = function (matricno) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI() + 'students/student/' + matricno, { headers: headers }).map(this.extractData).catch(this.handleError);
    };
    StudentService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    StudentService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return StudentService;
}());
StudentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */]) === "function" && _b || Object])
], StudentService);

var _a, _b;
//# sourceMappingURL=student.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
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

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validatePayerDetails = function (aspirant) {
        if (aspirant.firstname == undefined || aspirant.lastname == undefined || aspirant.email == undefined || aspirant.office == undefined || aspirant.amount == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateAspirant = function (aspirant) {
        if (aspirant.matricno == undefined ||
            aspirant.firstname == undefined ||
            aspirant.middlename == undefined ||
            aspirant.lastname == undefined ||
            aspirant.nickname == undefined ||
            aspirant.address == undefined ||
            aspirant.cgpa == undefined ||
            aspirant.office == undefined ||
            aspirant.reason == undefined ||
            aspirant.picture == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/vote.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VoteService = (function () {
    function VoteService(http, apiService, authService) {
        this.http = http;
        this.apiService = apiService;
        this.authService = authService;
    }
    VoteService.prototype.getVoteStatus = function (matricno) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.apiService.getAPI() + 'vote/status/' + matricno, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    VoteService.prototype.saveVote = function (voteSlip) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiService.getAPI() + 'vote', voteSlip, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    return VoteService;
}());
VoteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], VoteService);

var _a, _b, _c;
//# sourceMappingURL=vote.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map