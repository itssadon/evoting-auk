webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
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
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
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
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
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
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElcomService; });
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
    function ElcomService(http) {
        this.http = http;
    }
    ElcomService.prototype.getElcomOfficers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/elcom', { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    ElcomService.prototype.getElcomOfficer = function (matricno) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/elcom/' + matricno, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    return ElcomService;
}());
ElcomService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ElcomService);

var _a;
//# sourceMappingURL=elcom.service.js.map

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
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
    function StudentService(http) {
        this.http = http;
        this.apiUrl = 'https://atbu.edu.ng/api/vote/voterdetails/';
    }
    StudentService.prototype.getStudentRecord = function (matricno) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('proxy?url=' + this.apiUrl + matricno, { headers: headers }).map(this.extractData).catch(this.handleError);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], StudentService);

var _a;
//# sourceMappingURL=student.service.js.map

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
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
        if (aspirant.firstname == undefined || aspirant.lastname == undefined || aspirant.email == undefined || aspirant.phone == undefined || aspirant.office == undefined || aspirant.amount == undefined) {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AspirantService; });
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
    function AspirantService(http) {
        this.http = http;
    }
    AspirantService.prototype.getAspirants = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('aspirants', { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    AspirantService.prototype.addAspirant = function (aspirant) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('aspirants/aspirant', aspirant, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    AspirantService.prototype.getAspirant = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('aspirants/aspirant/' + id, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    return AspirantService;
}());
AspirantService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AspirantService);

var _a;
//# sourceMappingURL=aspirant.service.js.map

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaystackService; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PaystackService);

var _a;
//# sourceMappingURL=paystack.service.js.map

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccreditationService; });
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
    function AccreditationService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    AccreditationService.prototype.addStudent = function (student) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('students/student', student, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    return AccreditationService;
}());
AccreditationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AccreditationService);

var _a, _b;
//# sourceMappingURL=accreditation.service.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
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
    function MailService(http) {
        this.http = http;
    }
    MailService.prototype.sendMail = function (mailDetails) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('send', mailDetails, { headers: headers }).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    return MailService;
}());
MailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], MailService);

var _a;
//# sourceMappingURL=mail.service.js.map

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsService; });
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
    function SmsService(http) {
        this.http = http;
        this.apiUrlCredentials = 'https://api.smartsmssolutions.com/smsapi.php?username=sadon12&password=LIacAnuclommIc2';
    }
    SmsService.prototype.sendSMS = function (smsDetails) {
        var data = this.apiUrlCredentials + '&sender=SUG ELCOM&recipient=' + smsDetails.recipient + '&message=' + smsDetails.message;
        return this.http.get('sms?url=' + data).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    SmsService.prototype.checkBalance = function () {
        var data = this.apiUrlCredentials + '&balance=true';
        return this.http.get('sms?url=' + data).map(function (res) { return res.json(); }).catch(function (err) { return err.toString(); });
    };
    return SmsService;
}());
SmsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], SmsService);

var _a;
//# sourceMappingURL=sms.service.js.map

/***/ }),
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 103;


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(124);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(193),
        styles: [__webpack_require__(180)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_toaster__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_aspirants_aspirants_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_elcom_officers_elcom_officers_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_electoral_guidelines_electoral_guidelines_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_elcom_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_paystack_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_status_status_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_student_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_aspirant_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_accreditation_accreditation_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_accreditation_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_mail_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_sms_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    { path: 'accreditation', component: __WEBPACK_IMPORTED_MODULE_24__components_accreditation_accreditation_component__["a" /* AccreditationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
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
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["JsonpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
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
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_elcom_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_student_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_accreditation_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_mail_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_sms_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccreditationComponent; });
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
            startingDay: '2017-04-02',
            closingDay: '2017-10-04',
            startingTime: '09:00',
            closingTime: '23:50'
        };
    }
    AccreditationComponent.prototype.ngOnInit = function () {
        var userObj = JSON.parse(localStorage.user);
        var user_name = userObj.name;
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
        var matricno = __WEBPACK_IMPORTED_MODULE_9_jquery__('#matricno').val().replace(/\//g, ".").toUpperCase();
        if (matricno === "" || matricno === null) {
            this.toasterService.pop('error', 'Oops!', 'Please enter your matric number');
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#matricno').focus();
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
                    if (response.content === 'Record not Found!') {
                        _this.toasterService.pop('error', 'Oops!', response.content);
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#picture').attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX////MzMzJycnc3NzZ2dnV1dXS0tLW1tb5+fnz8/P8/Pzu7u729vbo6Ojx8fHp6enh4eEYveNFAAAFnUlEQVR4nO2dDdqqIBBG08xSs9z/am9kX6lhyjDjvOPlrMDzgPMDKIdDIpFIJBKJRCKRSCQSiUQikUigUV+uVVVdL7X2g0hQtccyy9+URXfbkWd9Pz+ksjFOs7tqPxoLzenL7mNZtuZHss3m9P4kjxftZ4yhnR2+oWRh1rFZGL+PY6f9qCTq80o/p5hV2o8bTrPe7+l41H7gUI5hgg/F0tTbWJehgs7R0Ey9hOs9Fe/aD76WK2EAe8VW+9HXQRa0onihC9pQrCP8nGKjLbBIGWeY5ej9RkAhMwd2t9HFC2altsQvKgZB7DqcwS+DfhWDi9EZYOcpyxx1wM7T2EQxUMTsM1quIXxQaMt44fMD7aQ4UuGHk7aOB1ZBxEHkHcIsO2sLfcHrBxhO78xDiJcT+XLhG22lMRErF3OA9cLcccaBFWv4/R6DiNQKs9XcI0Ok5VOJSYpVnApEUoe21oeoJdJ5gCo39nT/MsRZHj6KCCLlC6HXMMu1xd7ITFKg6lskGz4NUQo3oUADFGpk8r0D5fhCISUIszQsFUozmKpGThAlXYi9higNlFBV+jTE2IUSWMF4G2LU3mIJ/78wvGnLPbkJGmKUbcnQvuH+38P9x1LJfIiR8WtBQ5AmX9BQW+2FmCBM9yTXH6J0wHI9PsqCqdg6DcxON+dhqLEhylqbWNkGUrQJNvkgCf8guKqvLfZGLF1oi72RShcoyUIsXcAki+CvKVcb4hzGkNrHhwmlUrU3Tig9HE4ihih1t0Mm1KDsHjpEQg1QoBEKNShLGD0CgkAVjUOiqkE6uCfSIsI0hz0Sp6CB8r2DXRDsNZQ4vIeUDR3sGRFmBeMNu6G20BfcpSlWrnAw5wu8ScpduOFNUu5pihZJHaynTEG2tyewTlNtGS+MSR+sJv2D8cQCyJnEL/iWvhHjjIOtcsPq7ocwCQLWM38wJQy0znAIiyDwEDINIu5b6GAIp0A7Tj44cqK2wwLRy4qAbdOY2GN8OXKY6YlN+9rPv4Ii6s+QGEdmF4iIp6A9xRT6eoaBl7CHnDIQfw7lhxhtkHa1lyBVb/CZcAQl2iAuIM5DWbOxEmZ6CCvgUAcTliHEGuS+1wMlYWg/cxiErG8pVxxILYatQENY4gdv7b8JHsL/wNBGW/EhfJYaMwyPNNYMw7OFtfeQ8KGQsWxBqEuNZXxCb2GreaJs0WAeTpiDtBiFuvHrhXR239Q0JfjZaoGp24jaz70emp+h+/POREMz8zTiEyEbS6ZR30BZqL+jNtcMvIukqx3HiiXombaea6ReD/AuKdPBNtyQyvadJejLWJ8Yz5civow3Nr3eES4zsn8JDDZTq7U3cIcoAsXUmuvOvKkjyjCuuiKeppghvI2twAQdOJbKqzd1J+rXOyqOY1OIzc+RY9aqZMfbUXz4Po756b6t5OW+zeiNJMtuo+xRN4/B21jvTzIrWukDG7eu1LH7WOanrpGasU2hNHgTcjdj+S03iptrcZacM/Yin/YIOEmej08qrOEb8ngr4+uBirGxleBRD0T5XcH9HHkWcQRAqC3iJqcuJDeI8cVPXlICq5EBfBF+WuViZwB7QtfnBC88ECPolLHYRWOiBCxB2hQMUBT6H+kGrDyUI3hhhTir3kXB2xy2YIWh4EVxG7DiCz+52wy3YXH3UfAWtY1Y+vWLzA9zt2Rhu8NiLTPl928nbIeZF7+Cjd1cP+TXIO5iCH91UoKXU23K/GFcW03vPPM5UfvJ2Jj7sn8fccYxl/XlLm7amrnFt90M4dw0tdwXTvFPU+tdxRD/esY+0v0LX+Vmv28a4kv6VhfY/Pj+x7SfXOHw1aa7GkLfF5t7yhWO7xZqT7nC8V3W7CpXOKZlzb5yhWNa1ohdtanGdJrubpJOo+n+Jul0l6Y5EihInFdwWqZcxtiPKMj8A37EYhK2osujAAAAAElFTkSuQmCC');
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#accreditationForm').trigger('reset');
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#submitBtn').addClass('disabled');
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#searchBtn').removeClass("loading disabled");
                    }
                    else {
                        var matricno = response.content.regNumber;
                        var studentName = response.content.studentName.split(" ");
                        var lastname = studentName[0];
                        var firstname = studentName[1];
                        if (studentName[2])
                            var middlename = studentName[2];
                        var email = response.content.email;
                        var phone = response.content.phoneNumber;
                        var department = response.content.deptName;
                        var course = response.content.optionName;
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#picture').attr('src', 'https://atbu.edu.ng/' + response.content.picURL);
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#firstname').val(firstname);
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#middlename').val(middlename);
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#lastname').val(lastname);
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#email').val(email);
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#phone').val(phone);
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#department').val(department);
                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#course').val(course);
                        _this.student = {
                            matricno: matricno,
                            studentName: response.content.studentName,
                            email: email,
                            phone: phone,
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
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Accrediting student.<br><be>Please wait...</h3></div></div></div></div></div>';
        __WEBPACK_IMPORTED_MODULE_9_jquery__('body').prepend(pageDimmer);
        this.accreditationService.addStudent(this.student).subscribe(function (response) {
            if (response.status) {
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
                            to: _this.student.email,
                            subject: 'Accreditation Successful',
                            text: 'You have been accredited to vote. Here are your login detail. Username:' + _this.student.matricno + ', Password: ' + user_1.password,
                            html: ''
                        };
                        _this.mailService.sendMail(mailDetails).subscribe(function (response) {
                            if (response.success) {
                                _this.toasterService.pop('success', 'Success', 'Email has been sent.');
                                var smsDetails = {
                                    recipient: _this.student.phone,
                                    message: _this.student.studentName + ', you have been accredited to vote. Your Password is ' + user_1.password + ' to be used to login'
                                };
                                _this.smsService.sendSMS(smsDetails).subscribe(function (response) {
                                    console.log(response);
                                    if (response) {
                                        _this.toasterService.pop('success', 'Success', 'Password has been sent to student\'s phone');
                                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#accreditationForm').trigger('reset');
                                        __WEBPACK_IMPORTED_MODULE_9_jquery__('#submitBtn').addClass('disabled');
                                    }
                                    else {
                                        _this.toasterService.pop('error', 'Oops!', 'Could not send SMS');
                                    }
                                }, function (error) {
                                    _this.toasterService.pop('error', 'Oops!', 'We just encountered a server error.');
                                });
                            }
                            else {
                                _this.toasterService.pop('error', 'Oops!', 'Could not send mail');
                            }
                        }, function (error) {
                            _this.toasterService.pop('error', 'Oops!', 'We just encountered a server error.');
                        });
                    }
                    else {
                        _this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                    }
                    __WEBPACK_IMPORTED_MODULE_9_jquery__('#pageDimmer').remove();
                    //this.router.navigate(['/accreditation']);
                });
            }
            else {
                _this.toasterService.pop('error', 'Oops!', 'Something went wrong');
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#pageDimmer').remove();
            }
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
            mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
        var result = '';
        for (var i = length; i > 0; --i)
            result += mask[Math.round(Math.random() * (mask.length - 1))];
        return result;
    };
    AccreditationComponent.prototype.testSMS = function () {
        var _this = this;
        this.smsService.checkBalance().subscribe(function (response) {
            _this.toasterService.pop('success', 'Success', 'SMS Balance: ' + response);
        }, function (error) {
            _this.toasterService.pop('error', 'Oops!', error);
        });
    };
    AccreditationComponent.prototype.testSendSMS = function () {
        var _this = this;
        var smsDetails = {
            recipient: '08060686834',
            message: 'Sadiq, you have been accredited to vote. Your Password is testPassword to be used to login.'
        };
        this.smsService.sendSMS(smsDetails).subscribe(function (response) {
            console.log(JSON.parse(response));
            _this.toasterService.pop('success', 'Success', response);
        }, function (error) {
            _this.toasterService.pop('error', 'Oops!', error);
        });
    };
    return AccreditationComponent;
}());
AccreditationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-accreditation',
        template: __webpack_require__(194),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_elcom_service__["a" /* ElcomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_elcom_service__["a" /* ElcomService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_accreditation_service__["a" /* AccreditationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_accreditation_service__["a" /* AccreditationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_mail_service__["a" /* MailService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__services_sms_service__["a" /* SmsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_sms_service__["a" /* SmsService */]) === "function" && _h || Object])
], AccreditationComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=accreditation.component.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_aspirant_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AspirantsComponent; });
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
    function AspirantsComponent(authService, aspirateService, toasterService) {
        this.authService = authService;
        this.aspirateService = aspirateService;
        this.toasterService = toasterService;
    }
    AspirantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            var userObj = JSON.parse(localStorage.user);
            var user_name = userObj.name;
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#user_name').text(user_name);
        }
        this.aspirateService.getAspirants().subscribe(function (data) {
            _this.aspirants = data.aspirants;
        }, function (err) {
            _this.toasterService.pop('error', 'Oops!', err);
            return false;
        });
    };
    return AspirantsComponent;
}());
AspirantsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-aspirants',
        template: __webpack_require__(195),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_aspirant_service__["a" /* AspirantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_aspirant_service__["a" /* AspirantService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], AspirantsComponent);

var _a, _b, _c;
//# sourceMappingURL=aspirants.component.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(196),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_elcom_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElcomOfficersComponent; });
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
    function ElcomOfficersComponent(router, validateService, authService, toasterService, elcomService) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.toasterService = toasterService;
        this.elcomService = elcomService;
    }
    ElcomOfficersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.elcomService.getElcomOfficers().subscribe(function (data) {
            _this.users = data.users;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ElcomOfficersComponent.prototype.onAddOfficerSubmit = function () {
        var _this = this;
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Please wait...</h3></div></div></div></div></div>';
        __WEBPACK_IMPORTED_MODULE_6_jquery__('body').prepend(pageDimmer);
        var user = {
            name: this.name,
            username: this.username,
            password: this.password,
            user_role: 1
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.toasterService.pop('error', 'Oops!', 'Please fill in all fields');
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#pageDimmer').remove();
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', 'Success!', 'ELCOM officer registered and can log in');
            }
            else {
                _this.toasterService.pop('error', 'Oops!', 'Something went wrong');
            }
            _this.ngOnInit();
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#pageDimmer').remove();
            _this.router.navigate(['/elcom-officers']);
        });
    };
    return ElcomOfficersComponent;
}());
ElcomOfficersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-elcom-officers',
        template: __webpack_require__(197),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_elcom_service__["a" /* ElcomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_elcom_service__["a" /* ElcomService */]) === "function" && _e || Object])
], ElcomOfficersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=elcom-officers.component.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectoralGuidelinesComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-electoral-guidelines',
        template: __webpack_require__(198),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [])
], ElectoralGuidelinesComponent);

//# sourceMappingURL=electoral-guidelines.component.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(199),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Please wait...</h3></div></div></div></div></div>';
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(200),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(201),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(202),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_paystack_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_student_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_elcom_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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
                amount_words = "Ten thousand (N10,000)";
                amount = 1000000;
                break;
            case "vice_president":
                amount_words = "Six thousand (N6,000)";
                amount = 600000;
                break;
            case "sec_gen":
                amount_words = "Eight thousand (N6,000)";
                amount = 800000;
                break;
            case "asst_sec_gen":
                amount_words = "Five thousand (N5,000)";
                amount = 500000;
                break;
            case "fin_sec":
                amount_words = "Eight thousand (N8,000)";
                amount = 800000;
                break;
            case "auditor":
                amount_words = "Six thousand (N6,000)";
                amount = 600000;
                break;
            case "treasurer":
                amount_words = "Six thousand (N6,000)";
                amount = 600000;
                break;
            case "welfare_I":
                amount_words = "Five thousand (N5,000)";
                amount = 500000;
                break;
            case "welfare_II":
                amount_words = "Four thousand (N4,000)";
                amount = 400000;
                break;
            case "dir_of_socials":
                amount_words = "Six thousand (N6,000)";
                amount = 600000;
                break;
            case "pro_I":
                amount_words = "Five thousand (N5,000)";
                amount = 500000;
                break;
            case "pro_II":
                amount_words = "Four thousand (N4,000)";
                amount = 400000;
                break;
            case "provost":
                amount_words = "Six thousand (N6,000)";
                amount = 600000;
                break;
            case "sales_dir":
                amount_words = "Six thousand (N6,000)";
                amount = 600000;
                break;
            case "sports_dir":
                amount_words = "Six thousand (N6,000)";
                amount = 600000;
                break;
            case "dir_of_food":
                amount_words = "Six thousand (N6,000)";
                amount = 600000;
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
        var matricno = __WEBPACK_IMPORTED_MODULE_8_jquery__('#matricno').val().replace(/\//g, ".").toUpperCase();
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
                    if (response.content === 'Record not Found!') {
                        _this.toasterService.pop('error', 'Oops!', response.content);
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#searchBtn').removeClass("loading disabled");
                    }
                    else {
                        var matricno = response.content.regNumber;
                        var studentName = response.content.studentName.split(" ");
                        var lastname = studentName[0];
                        var firstname = studentName[1];
                        if (studentName[2])
                            var middlename = studentName[2];
                        var email = response.content.email;
                        var phone = response.content.phoneNumber;
                        var department = response.content.deptName;
                        var course = response.content.optionName;
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
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Please wait...</h3></div></div></div></div></div>';
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
                            { display_name: "Payment For", variable_name: "payment_purpose", value: "ATBU SUG Aspirant Form" },
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(203),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_paystack_service__["a" /* PaystackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_paystack_service__["a" /* PaystackService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_student_service__["a" /* StudentService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_elcom_service__["a" /* ElcomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_elcom_service__["a" /* ElcomService */]) === "function" && _g || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=register.component.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_paystack_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_student_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_aspirant_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
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
                _this.paymentStatus = true;
                _this.aspirant = {
                    matricno: response.data.customer.metadata.matric_number,
                    email: response.data.customer.email,
                    phone: response.data.customer.phone,
                    office: response.data.metadata.custom_fields[1].value,
                    reference: response.data.reference
                };
                var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Please wait...</h3></div></div></div></div></div>';
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
        var matricno = this.aspirant.matricno.replace(/\//g, ".");
        this.studentService.getStudentRecord(matricno).subscribe(function (response) {
            if (response.content === 'Record not Found!') {
                _this.toasterService.pop('error', 'Oops!', response.content);
            }
            else {
                var matricno = _this.aspirant_model.matricno = response.content.regNumber;
                var studentName = response.content.studentName.split(" ");
                var lastname = _this.aspirant_model.lastname = studentName[0];
                var firstname = _this.aspirant_model.firstname = studentName[1];
                if (studentName[2])
                    var middlename = _this.aspirant_model.middlename = studentName[2];
                var email = response.content.email;
                var phone = response.content.phoneNumber;
                var department = response.content.deptName;
                var course = response.content.optionName;
                var level = response.content.levelId + "00 Level";
                var office = _this.aspirant_model.office = _this.aspirant.office;
                var amount = _this.aspirant.amount;
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#othernames').val(firstname + " " + middlename);
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#lastname').val(lastname);
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#email').val(email);
                __WEBPACK_IMPORTED_MODULE_7_jquery__('#phone').val(phone);
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
        var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="content"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Please wait...</h3></div></div></div></div></div>';
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-status',
        template: __webpack_require__(204),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_paystack_service__["a" /* PaystackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_paystack_service__["a" /* PaystackService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_aspirant_service__["a" /* AspirantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_aspirant_service__["a" /* AspirantService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _g || Object])
], StatusComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=status.component.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),
/* 124 */
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
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 192 */,
/* 193 */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"ui vertical masthead segment\">\n    <div class=\"ui container\">\n        <toaster-container></toaster-container>\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\" *ngIf=\"authService.loggedIn()\">\n    <div class=\"three wide column\">\n        <div class=\"ui fluid vertical menu\">\n            <a class=\"item\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('elcom')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/elcom-officers']\">ELCOM</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('aspirants')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/aspirants']\">Aspirants</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('accreditation')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/accreditation']\">Accreditation</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('password')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/resend-password']\">Passwords</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('vote')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/vote']\">Vote</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('results')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/results']\">Results</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('reports')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/reports']\">Reports</a>\n        </div>\n    </div>\n    <div class=\"thirteen wide column\">\n        <div class=\"ui segment\">\n            <div class=\"ui large message info\">\n                Accreditation is open from {{accreditationTime.startingDay}} to {{accreditationTime.closingDay}} between the hours of {{accreditationTime.startingTime}} - {{accreditationTime.closingTime}}.\n            </div>\n            <div class=\"ui stackable grid\">\n                <div class=\"six wide column center aligned\">\n                    <div class=\"ui massive message\">\n                        Total Accredited Students\n                        <div class=\"ui divider\"></div>\n                        <span id=\"accredited_students\"></span>\n                    </div>\n                </div>\n                <div class=\"ten wide column\">\n                    <div class=\"ui segment\">\n                        <div class=\"ui message success\" *ngIf=\"canAccredit()\">\n                            {{message}}\n                        </div>\n                        <form class=\"ui form\" autocomplete=\"off\" (submit)=\"onAccreditSubmit()\" *ngIf=\"canAccredit()\" id=\"accreditationForm\">\n                            <div class=\"ui stackable grid\">\n                                <div class=\"ten wide column\">\n                                    <div class=\"field\" id=\"matricno_div\">\n                                        <div class=\"ui fluid action input\">\n                                            <input type=\"text\" placeholder=\"Matric Number\" (keypress)=\"triggerSearch($event)\" [(ngModel)]=\"matricno\" name=\"matricno\" id=\"matricno\">\n                                            <button type=\"button\" class=\"ui primary right labeled icon button\" (click)=\"searchMatric()\" id=\"searchBtn\">\n                                                <i class=\"search icon\"></i>\n                                                Search\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div class=\"two fields\">\n                                        <div class=\"field\" id=\"first_name_div\">\n                                            <div class=\"ui input\">\n                                                <input type=\"text\" placeholder=\"First\" [(ngModel)]=\"firstname\" name=\"firstname\" id=\"firstname\" readonly=\"\">\n                                            </div>\n                                        </div>\n                                        <div class=\"field\" id=\"middle_name_div\">\n                                            <div class=\"ui input\">\n                                                <input type=\"text\" placeholder=\"Middle\" [(ngModel)]=\"middlename\" name=\"middlename\" id=\"middlename\" readonly=\"\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"field\" id=\"last_name_div\">\n                                        <div class=\"ui input\">\n                                            <input type=\"text\" placeholder=\"Last\" [(ngModel)]=\"lastname\" name=\"lastname\" id=\"lastname\" readonly=\"\">\n                                        </div>\n                                    </div>\n                                    <div class=\"field\" id=\"email_div\">\n                                        <div class=\"ui input\">\n                                            <input type=\"email\" placeholder=\"Email Addresss\" [(ngModel)]=\"email\" name=\"email\" id=\"email\">\n                                        </div>\n                                    </div>\n                                    <div class=\"field\" id=\"phone_div\">\n                                        <div class=\"ui input\">\n                                            <input type=\"tel\" placeholder=\"Phone\" [(ngModel)]=\"phone\" name=\"phone\" id=\"phone\" readonly=\"\">\n                                        </div>\n                                    </div>\n                                    <div class=\"field\" id=\"\">\n                                        <div class=\"ui input\">\n                                            <input type=\"text\" placeholder=\"Department\" [(ngModel)]=\"department\" name=\"department\" id=\"department\" readonly=\"\">\n                                        </div>\n                                    </div>\n                                    <div class=\"field\" id=\"\">\n                                        <div class=\"ui input\">\n                                            <input type=\"text\" placeholder=\"Course of study\" [(ngModel)]=\"course\" name=\"course\" id=\"course\" readonly=\"\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"six wide column\">\n                                    <div class=\"image center aligned\">\n                                        <img class=\"ui small fluid image\" id=\"picture\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX////MzMzJycnc3NzZ2dnV1dXS0tLW1tb5+fnz8/P8/Pzu7u729vbo6Ojx8fHp6enh4eEYveNFAAAFnUlEQVR4nO2dDdqqIBBG08xSs9z/am9kX6lhyjDjvOPlrMDzgPMDKIdDIpFIJBKJRCKRSCQSiUQikUigUV+uVVVdL7X2g0hQtccyy9+URXfbkWd9Pz+ksjFOs7tqPxoLzenL7mNZtuZHss3m9P4kjxftZ4yhnR2+oWRh1rFZGL+PY6f9qCTq80o/p5hV2o8bTrPe7+l41H7gUI5hgg/F0tTbWJehgs7R0Ey9hOs9Fe/aD76WK2EAe8VW+9HXQRa0onihC9pQrCP8nGKjLbBIGWeY5ej9RkAhMwd2t9HFC2altsQvKgZB7DqcwS+DfhWDi9EZYOcpyxx1wM7T2EQxUMTsM1quIXxQaMt44fMD7aQ4UuGHk7aOB1ZBxEHkHcIsO2sLfcHrBxhO78xDiJcT+XLhG22lMRErF3OA9cLcccaBFWv4/R6DiNQKs9XcI0Ok5VOJSYpVnApEUoe21oeoJdJ5gCo39nT/MsRZHj6KCCLlC6HXMMu1xd7ITFKg6lskGz4NUQo3oUADFGpk8r0D5fhCISUIszQsFUozmKpGThAlXYi9higNlFBV+jTE2IUSWMF4G2LU3mIJ/78wvGnLPbkJGmKUbcnQvuH+38P9x1LJfIiR8WtBQ5AmX9BQW+2FmCBM9yTXH6J0wHI9PsqCqdg6DcxON+dhqLEhylqbWNkGUrQJNvkgCf8guKqvLfZGLF1oi72RShcoyUIsXcAki+CvKVcb4hzGkNrHhwmlUrU3Tig9HE4ihih1t0Mm1KDsHjpEQg1QoBEKNShLGD0CgkAVjUOiqkE6uCfSIsI0hz0Sp6CB8r2DXRDsNZQ4vIeUDR3sGRFmBeMNu6G20BfcpSlWrnAw5wu8ScpduOFNUu5pihZJHaynTEG2tyewTlNtGS+MSR+sJv2D8cQCyJnEL/iWvhHjjIOtcsPq7ocwCQLWM38wJQy0znAIiyDwEDINIu5b6GAIp0A7Tj44cqK2wwLRy4qAbdOY2GN8OXKY6YlN+9rPv4Ii6s+QGEdmF4iIp6A9xRT6eoaBl7CHnDIQfw7lhxhtkHa1lyBVb/CZcAQl2iAuIM5DWbOxEmZ6CCvgUAcTliHEGuS+1wMlYWg/cxiErG8pVxxILYatQENY4gdv7b8JHsL/wNBGW/EhfJYaMwyPNNYMw7OFtfeQ8KGQsWxBqEuNZXxCb2GreaJs0WAeTpiDtBiFuvHrhXR239Q0JfjZaoGp24jaz70emp+h+/POREMz8zTiEyEbS6ZR30BZqL+jNtcMvIukqx3HiiXombaea6ReD/AuKdPBNtyQyvadJejLWJ8Yz5civow3Nr3eES4zsn8JDDZTq7U3cIcoAsXUmuvOvKkjyjCuuiKeppghvI2twAQdOJbKqzd1J+rXOyqOY1OIzc+RY9aqZMfbUXz4Po756b6t5OW+zeiNJMtuo+xRN4/B21jvTzIrWukDG7eu1LH7WOanrpGasU2hNHgTcjdj+S03iptrcZacM/Yin/YIOEmej08qrOEb8ngr4+uBirGxleBRD0T5XcH9HHkWcQRAqC3iJqcuJDeI8cVPXlICq5EBfBF+WuViZwB7QtfnBC88ECPolLHYRWOiBCxB2hQMUBT6H+kGrDyUI3hhhTir3kXB2xy2YIWh4EVxG7DiCz+52wy3YXH3UfAWtY1Y+vWLzA9zt2Rhu8NiLTPl928nbIeZF7+Cjd1cP+TXIO5iCH91UoKXU23K/GFcW03vPPM5UfvJ2Jj7sn8fccYxl/XlLm7amrnFt90M4dw0tdwXTvFPU+tdxRD/esY+0v0LX+Vmv28a4kv6VhfY/Pj+x7SfXOHw1aa7GkLfF5t7yhWO7xZqT7nC8V3W7CpXOKZlzb5yhWNa1ohdtanGdJrubpJOo+n+Jul0l6Y5EihInFdwWqZcxtiPKMj8A37EYhK2osujAAAAAElFTkSuQmCC\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"ui divider\"></div>\n                            <button type=\"submit\" class=\"ui right labeled icon green button disabled\" id=\"submitBtn\">\n                                <i class=\"checkmark icon\"></i>\n                                Accredit Student\n                            </button>\n                            <button type=\"button\" class=\"ui primary button\" id=\"\" (click)=\"testSMS()\">\n                                <i class=\"checkmark icon\"></i>\n                                Get Balance\n                            </button>\n                            <button type=\"button\" class=\"ui red button\" id=\"\" (click)=\"testSendSMS()\">\n                                <i class=\"checkmark icon\"></i>\n                                Send test SMS\n                            </button>\n                        </form>\n                        <div class=\"ui huge message error\" *ngIf=\"!canAccredit()\">\n                            {{message}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui four doubling raised cards\" *ngIf=\"!authService.loggedIn()\">\n    <div class=\"card\" *ngFor=\"let aspirant of aspirants; let i = index\">\n        <div class=\"image\">\n            <img style=\"max-height: 220px;\" src=\"http://localhost:3000{{aspirant.picture}}\">\n        </div>\n        <div class=\"content\">\n            <div class=\"header\">{{aspirant.lastname}}, {{aspirant.firstname}} {{aspirant.middlename}}</div>\n            <div class=\"meta\">\n                <label class=\"ui red label\">{{aspirant.nickname}}</label>\n            </div>\n            <div class=\"description\">\n                {{aspirant.reason}}\n            </div>\n        </div>\n        <div class=\"extra content center aligned\">\n            <label class=\"ui blue label\" style=\"text-transform: capitalize;\">\n                For {{aspirant.office}}\n            </label>\n        </div>\n    </div>\n</div>\n\n<div class=\"ui stackable grid\" *ngIf=\"authService.loggedIn()\">\n    <div class=\"three wide column\">\n        <div class=\"ui fluid vertical menu\">\n            <a class=\"item\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('elcom')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/elcom-officers']\">ELCOM</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('aspirants')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/aspirants']\">Aspirants</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('accreditation')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/accreditation']\">Accreditation</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('password')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/resend-password']\">Passwords</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('vote')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/vote']\">Vote</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('results')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/results']\">Results</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('reports')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/reports']\">Reports</a>\n        </div>\n    </div>\n    <div class=\"thirteen wide column\">\n        <div class=\"ui segment\">\n            <table class=\"ui compact celled definition table segment\">\n                <thead>\n                    <tr>\n                        <th>SNo.</th><th>Full Names</th><th>Nickname</th><th>CGPA</th><th>Office</th><th>Reason for contesting</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let aspirant of aspirants; let i = index\">\n                        <td>{{i + 1}}</td>\n                        <td>{{aspirant.firstname}} {{aspirant.middlename}} {{aspirant.lastname}}</td>\n                        <td>{{aspirant.nickname}}</td>\n                        <td>\n                            {{aspirant.cgpa}}\n                        </td>\n                        <td>\n                            <span style=\"text-transform: capitalize;\">{{aspirant.office}}</span>\n                        </td>\n                        <td>\n                            {{aspirant.reason}}\n                        </td>\n                        <td>\n                            <img class=\"ui fluid image\" src=\"http://localhost:3000{{aspirant.picture}}\" />\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\">\n    <div class=\"two wide column\"></div>\n    <div class=\"twelve wide column\">\n        <div class=\"ui segment\">\n            <div class=\"ui three stackable cards\">\n                <a *ngIf=\"authService.canPerformTask('elcom')\" [routerLink]=\"['/elcom-officers']\" class=\"ui link grey card\" >\n                    <div class=\"content\">\n                        <div class=\"header\">ELCOM</div>\n                        <div class=\"description\">\n                            <span class=\"category\">Manage ELCOM officers.</span>\n                        </div>\n                    </div>\n                </a>\n                <a *ngIf=\"authService.canPerformTask('aspirants')\" [routerLink]=\"['/aspirants']\" class=\"ui link grey card\" >\n                    <div class=\"content\">\n                        <div class=\"header\">Aspirants</div>\n                        <div class=\"description\">\n                            <span class=\"category\">Manage registered aspirants.</span>\n                        </div>\n                    </div>\n                </a>\n                <a *ngIf=\"authService.canPerformTask('accreditation')\" [routerLink]=\"['/accreditation']\" class=\"ui link grey card\" >\n                    <div class=\"content\">\n                        <div class=\"header\">Accreditation</div>\n                        <div class=\"description\">\n                            <span class=\"category\">Accredit students for election.</span>\n                        </div>\n                    </div>\n                </a>\n                <a *ngIf=\"authService.canPerformTask('password')\" [routerLink]=\"['/resend-password']\" class=\"ui link grey card\" >\n                    <div class=\"content\">\n                        <div class=\"header\">Passwords</div>\n                        <div class=\"description\">\n                            <span class=\"category\">Resend password to student.</span>\n                        </div>\n                    </div>\n                </a>\n                <a *ngIf=\"authService.canPerformTask('vote')\" [routerLink]=\"['/vote']\" class=\"ui link grey card\" >\n                    <div class=\"content\">\n                        <div class=\"header\">Vote</div>\n                        <div class=\"description\">\n                            <span class=\"category\">Vote for aspirants.</span>\n                        </div>\n                    </div>\n                </a>\n                <a *ngIf=\"authService.canPerformTask('results')\" [routerLink]=\"['/results']\" class=\"ui link grey card\" >\n                    <div class=\"content\">\n                        <div class=\"header\">Election Results</div>\n                        <div class=\"description\">\n                            <span class=\"category\">View election results in realtime.</span>\n                        </div>\n                    </div>\n                </a>\n                <a *ngIf=\"authService.canPerformTask('reports')\" [routerLink]=\"['/reports']\" class=\"ui link grey card\" >\n                    <div class=\"content\">\n                        <div class=\"header\">Reports</div>\n                        <div class=\"description\">\n                            <span class=\"category\">Download reports.</span>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\" *ngIf=\"!authService.loggedIn()\">\n    <div class=\"three wide column\"></div>\n    <div class=\"nine wide column\">\n        <div class=\"ui segment\" id=\"supervisors\">\n            <table class=\"ui compact celled definition table\">\n                <thead>\n                    <tr>\n                        <th>SNo.</th><th>Username</th><th>Full Name</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let user of users; let i = index\">\n                        <td>{{i + 1}}</td>\n                        <td>{{user.username}}</td>\n                        <td>{{user.name}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n\n<div class=\"ui stackable grid\" *ngIf=\"authService.loggedIn()\">\n    <div class=\"three wide column\">\n        <div class=\"ui fluid vertical menu\">\n            <a class=\"item\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('elcom')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/elcom-officers']\">ELCOM</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('aspirants')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/aspirants']\">Aspirants</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('accreditation')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/accreditation']\">Accreditation</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('password')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/resend-password']\">Passwords</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('vote')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/vote']\">Vote</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('results')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/results']\">Results</a>\n            <a class=\"item\" *ngIf=\"authService.canPerformTask('reports')\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/reports']\">Reports</a>\n        </div>\n    </div>\n    <div class=\"nine wide column\">\n        <div class=\"ui segment\" id=\"supervisors\">\n            <table class=\"ui compact celled definition table\">\n                <thead>\n                    <tr>\n                        <th>SNo.</th><th>Username</th><th>Full Name</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let user of users; let i = index\">\n                        <td>{{i + 1}}</td>\n                        <td>{{user.username}}</td>\n                        <td>{{user.name}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"four wide column\">\n        <div class=\"ui segment\">\n            <div class=\"ui one top attached steps\">\n                <div class=\"active step\">\n                    <i class=\"user icon\"></i>\n                </div>\n            </div>\n            <form class=\"ui small form attached segment\" autocomplete=\"off\" (submit)=\"onAddOfficerSubmit()\">\n                <div class=\"field\">\n                    <div class=\"ui corner labeled input\">\n                        <input type=\"text\" placeholder=\"Matric number\" [(ngModel)]=\"username\" name=\"username\">\n                        <div class=\"ui corner label\">\n                            <i class=\"asterisk icon red\"></i>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"field\">\n                    <div class=\"ui corner labeled input\">\n                        <input type=\"text\" placeholder=\"Full Name\" [(ngModel)]=\"name\" name=\"name\">\n                        <div class=\"ui corner label\">\n                            <i class=\"asterisk icon red\"></i>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"field\">\n                    <div class=\"ui corner labeled input\">\n                        <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\">\n                        <div class=\"ui corner label\">\n                            <i class=\"asterisk icon red\"></i>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui divider\"></div>\n                <button class=\"ui submit primary button fluid\" type=\"submit\"><i class=\"add icon\"></i>Add officer</button>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment\">\n    <div class=\"ui container\">\n        <h4>Guidelines</h4>\n        <p class=\"content\" style=\"text-align: justify;\">\n            The following are guidelines are of 'Article 10' of the reviewed student union constitution of ATBU, Bauchi.\n        </p>\n        <h4>ARTICLE 10</h4>\n        <h5>SECTION 1: Election.</h5>\n        <p>Prospective candidate(s) for any elective post must:</p>\n        <ol>\n            <li>\n                Be a matriculated and registered undergraduate student of Abubakar Tafawa Balewa\n                University, Bauchi.\n            </li>\n            <li>\n                Not be on probation and must possess a minimum of 2.50 C.G.P.A and must not\n                have more than nine (9) units of carry-over at the end of the previous academic year\n                and should not be one year behind his normal duration in the University.\n                Have fulfilled his financial obligation(s) to the Union.\n            </li>\n            <li>\n                Have fulfilled any other requirements set out in this Constitution by the Electoral\n                Committee.\n            </li>\n        </ol>\n\n        <p>Procedure for Seeking Redress for a Disqualification of Candidate(S)</p>\n        <ol>\n            <li>\n                Candidate seeking redress must do so to the judiciary committee within 24hrs in writing.\n            </li>\n            <li>\n                No candidate should be disqualified within 48 hrs before the election.\n            </li>\n        </ol>\n        <h5>SECTION 2: Rules and Regulations of Elections.</h5>\n        <ol>\n            <li>\n                Elections shall be by secret ballot.\n            </li>\n            <li>\n                Elections into S.U.E.C and PARLIAMENT shall be organised and conducted within the\n                first four (4) weeks of the Second Semester.\n            </li>\n            <li>\n                Elections shall be organised, conducted and supervised by the Electoral Committee.\n            </li>\n            <li>\n                The conduct of all elections shall be subject to the following rules:\n                <ol>\n                    <li>\n                        Elections into S.U.E.C and PARLIAMENT shall be conducted at Faculty levels\n                        under supervision of the Dean of the Faculty and his staff.\n                    </li>\n                    <li>\n                        Elections into H.E.C shall be conducted at the Hall level under the supervision\n                        of the Hall Warden and his staff.\n                    </li>\n                    <li>\n                        Prospective candidate(s) for any elective post shall have to be nominated in\n                        writing and passed to the Chairman of the Committee within a period\n                        specified by the Electoral Committee.\n                    </li>\n                    <li>\n                        No member of the Union shall propose or second more than one candidate\n                        for any elective post.\n                    </li>\n                    <li>\n                        Only members of the Union who fulfill their financial obligation(s) to the\n                        Union are eligible to nominate, second, vote and/or be voted for.\n                    </li>\n                    <li>\n                        In any election, each nomination papers shall bear the signatures of two\n                        proposers, two seconders and signed by the nominee.\n                    </li>\n                    <li>\n                        There shall be no voting by proxy and each voter shall be entitled to only one\n                        vote for any elective post.\n                    </li>\n                    <li>\n                        The Electoral Committee shall list in alphabetical order the names of\n                        candidates as they appear on the nomination papers and shall display the list\n                        of contestants on Students’ notice boards at least twenty four (24) hours\n                        before the commencement of campaigns. No names shall be added to the list\n                        after it has been displayed.\n                    </li>\n                    <li>\n                        The Electoral Committee shall commence counting of votes immediately\n                        after the elections and in the presence of the Dean of the Faculty, the Hall\n                        Warden and the Hall Supervisor where the elections took place.\n                    </li>\n                    <li>\n                        The Chairman of the Electoral Committee shall act as the Chief Returning\n                        Officer in all the elections.\n                    </li>\n                    <li>\n                        There shall be Presiding Officers, Polling clerks and Polling Assistants who\n                        must be from the Electoral Committee members.\n                    </li>\n                    <li>\n                        These Presiding Officers, Polling clerks and Polling Assistants shall be\n                        responsible for the conduct of elections into S.U.G in the various Faculty and\n                        Halls of residence, as the case may be.\n                    </li>\n                    <li>\n                        Results of the elections should be declared in each polling station in the\n                        presence of the Dean of the Faculty, or Hall Warden/ Hall Supervisor as the\n                        case may be, as well as agents of the contestants.\n                    </li>\n                    <li>\n                        The Presiding Officer, agents of contestants, Deans and/or Hall Wardens/Hall\n                        Supervisor and the security personnel must sign on the result sheet and each\n                        of them should be given a copy.\n                    </li>\n                    <li>\n                        The result shall be submitted to the Chief Returning Officer by the Presiding\n                        Officer.\n                    </li>\n                    <li>\n                        The Chief Returning Officer shall enter the scores of each candidate as they\n                        are brought in from the polling centres in the presence of the agents of the\n                        candidates and security personnel.\n                    </li>\n                    <li>\n                        The overall result shall be declared by the Chief Returning Officer and a copy\n                        be sent to the University Authority.\n                    </li>\n                </ol>\n            </li>\n            <li>\n                Before the commencement of voting, the Electoral Committee shall make necessary\n                arrangements for candidates contesting for elections into the various offices to\n                campaign for votes.\n            </li>\n            <li>\n                All campaigns shall end at least 24 hours before the commencement of voting.\n                In the event of a tie in an election in respect of any elective post(s), the Electoral\n                Committee shall within forty-eight (48) hours organise and conduct fresh elections\n                into such office(s).\n            </li>\n            <li>\n                Without prejudice to the provision of sub-section (ii) of this section, in case of\n                inability to conduct elections into S.U.E.C and PARLIAMENT within first 4 weeks of\n                the Second Semester of the new academic session, a new date shall be determined\n                by the University Authority.\n            </li>\n            <li>\n                Withdrawals of candidature by any candidate shall:\n                <ol>\n                    <li>\n                        Be made within 12 hours after exhibition of the list of candidates.\n                    </li>\n                    <li>\n                        Be made in writing to the Chairman of the Electoral Committee in respect of\n                        that decision.\n                    </li>\n                    <li>\n                        Not be accepted after the expiration of the 12 hours as provided in paragraph\n                        (1) above.\n                    </li>\n                </ol>\n            </li>\n            <li>\n                Subject to the provisions of this constitution, the Electoral Committee may make\n                guidelines for the orderly conduct of the elections which must be endorsed by the\n                University Authority.\n            </li>\n        </ol>\n\n        <h5>SECTION 3: Disqualification of Candidates for Elective Post</h5>\n        <p>Any candidate for an elective post shall be disqualified if:</p>\n        <ol>\n            <li>\n                His campaign strategies are based on religious or ethnic affiliation or any\n                form of sectionalism.\n            </li>\n            <li>\n                Found guilty of abuse of office, corruption, misappropriation of funds,\n                misconduct of any kind, cultism, drug abuse and criminal offences by any of\n                the following:\n                <ol>\n                    <li>\n                        A duly Constituted Nigerian Court of Law\n                    </li>\n                    <li>\n                        Any Students’ Union Association\n                    </li>\n                    <li>\n                        ATBU Students’ Disciplinary Committee\n                    </li>\n                    <li>\n                        Any organisation recognised by the Union\n                    </li>\n                </ol>\n            </li>\n            <li>\n                He is on the payroll or an affiliate of any political party or Labour Union.\n            </li>\n            <li>\n                He receives money or any form of aid or grant from the University Authorities\n                or external body(ies) for the purpose of his campaign.\n            </li>\n            <li>\n                He or his supporters use or attempts to use derogatory verbal phrases and or\n                physical violence to intimidate his opponents or their supporters.\n            </li>\n            <li>\n                He violates any of the provisions of this Constitution.\n            </li>\n        </ol>\n        <h5>SECTION 4: Order of Election</h5>\n        <p>\n            Elections into PARLIAMENT, S.U.E.C and H.E.C should be conducted based on the time table\n            provided by the Electoral Committee and in accordance with the provision of this\n            Constitution.\n        </p>\n        <h5>SECTION 5: Election Petition</h5>\n        <ol>\n            <li>\n                Election petitions against the decision(s) of the Electoral Committee shall be filed\n                with the Judicial Committee, copied to the Chairman Electoral Committee and Dean\n                of Students Affairs.\n            </li>\n            <li>\n                Election petitions shall be filed within twenty-four (24) hours after the declaration of\n                the result by the Electoral Committee.\n            </li>\n            <li>\n                The said petition shall be determined within four (4) days of its receipt by the Judicial\n                Committee.\n            </li>\n            <li>\n                The decisions of the Judicial Committee on any petition shall be sent to the\n                University Authority and the Security Department immediately.\n            </li>\n        </ol>\n        <h5>SECTION 6: Swearing in Ceremony</h5>\n        <ol>\n            <li>\n                Elected Officers of the Union shall not exercise any function unless and until sworn-\n                in, in accordance with the provisions of this Constitution.\n            </li>\n            <li>\n                The Oath of Office shall be administered on all elected members of the Union by the\n                Registrar not more than one week of the declaration of the election results.\n            </li>\n        </ol>\n    </div>\n</div>\n"

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "<div class=\"introduction\">\n    <h1 class=\"ui inverted header\">\n        <span class=\"bigheader\">\n            E-Voting System\n        </span>\n        <div class=\"ui divider\"></div>\n        <span class=\"tagline\">\n            Electoral transparency, accountability, security and accuracy.\n        </span>\n    </h1>\n    <div class=\"ui hidden divider\"></div>\n\n    <a *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/register']\" class=\"ui huge inverted download button\"><i class=\"icon credit card\"></i>Buy Form</a>\n    <a *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/login']\" class=\"ui huge inverted basic button\"><i class=\"icon sign in\"></i>Login</a>\n    <a *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/dashboard']\" class=\"ui huge inverted basic button\"><i class=\"icon dashboard\"></i>Dashboard</a>\n</div>\n<div class=\"ui hidden divider\"></div>\n<div class=\"ui container\">\n    <div class=\"ui stackable grid\">\n        <div class=\"sixteen wide column\">\n            <div class=\"ui horizontal segments\">\n                <div class=\"ui padded segment\">\n                    <p></p>\n                </div>\n                <div class=\"ui padded segment\">\n                    <p></p>\n                </div>\n                <div class=\"ui padded segment\">\n                    <p></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\">\n    <div class=\"five wide column\"></div>\n    <div class=\"six wide column\">\n        <div class=\"ui segment\">\n            <div class=\"ui one top attached steps\">\n                <div class=\"active step\">\n                    <i class=\"lock icon\"></i>\n                </div>\n            </div>\n            <form class=\"ui form attached segment\" autocomplete=\"off\" (submit)=\"onLoginSubmit()\">\n                <div class=\"required field\" id=\"username_div\">\n                    <div class=\"ui input\">\n                        <input type=\"text\" placeholder=\"Username/Matric No.\" required=\"\" [(ngModel)]=\"username\" name=\"username\">\n                    </div>\n                </div>\n                <div class=\"required field\" id=\"password_div\">\n                    <div class=\"ui input\">\n                        <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\">\n                    </div>\n                </div>\n                <div>\n                    <label>\n                        <a id=\"password-reset-modal-button\">Forgotten password?</a>\n                    </label>\n                </div>\n                <div class=\"ui divider\"></div>\n                <button class=\"large fluid ui primary button\" type=\"submit\"><i class=\"icon sign in\"></i>Login</button>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"ui menu\">\n    <div class=\"ui container\">\n        <a class=\"toc item\" id=\"menu_icon\">\n            <i class=\"content icon\"></i>\n            <img class=\"logo\" src=\"/assets/images/ATBU.png\">\n            &nbsp; SUG ATBU\n        </a>\n        <a [routerLink]=\"['/']\" class=\"item\">\n            <img class=\"logo\" src=\"/assets/images/ATBU.png\">\n            &nbsp; SUG ATBU\n        </a>\n        <a class=\"ui item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/aspirants']\">Aspirants</a>\n        <a class=\"ui item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/elcom-officers']\">Elcom Officers</a>\n        <a class=\"ui item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/electoral-guidelines']\">Electoral Guidelines</a>\n\n        <span class=\"ui item\" *ngIf=\"authService.loggedIn()\">Welcome,&nbsp;<span id=\"user_name\"></span></span>\n        <a class=\"ui item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n        <a class=\"ui item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/profile']\">Profile</a>\n        <a class=\"ui item right\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"onLogoutClick()\" href=\"#\"><i class=\"power icon\"></i>Logout</a>\n    </div>\n</nav>\n"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n    <h2 class=\"page-header\">{{user.name}}</h2>\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n            Username: {{user.username}}\n        </li>\n        <li class=\"list-group-item\">\n            Email: {{user.email}}\n        </li>\n    </ul>\n</div>\n"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\">\n    <div class=\"four wide column\"></div>\n    <div class=\"eight wide column\">\n        <div class=\"ui segment\">\n            <div class=\"ui one top attached steps\">\n                <div class=\"active step\">\n                    <i class=\"user icon\"></i>\n                    <div class=\"content\">\n                        <div class=\"title\">Candidate form payment</div>\n                        <div class=\"description\">Enter your matric number &amp; search</div>\n                    </div>\n                </div>\n            </div>\n            <form class=\"ui form attached segment\" autocomplete=\"off\" (submit)=\"onPaySubmit()\">\n                <div class=\"two fields\">\n                    <div class=\"field\">\n                        <div class=\"ui input\">\n                            <select class=\"ui fluid dropdown\" (change)=\"setOfficeAmount($event)\">\n                                <option value=\"\">Select Office</option>\n                                <option value=\"president\">President</option>\n                                <option value=\"vice_president\">Vice President</option>\n                                <option value=\"sec_gen\">Sectretary General</option>\n                                <option value=\"asst_sec_gen\">Asst. Secretary General</option>\n                                <option value=\"fin_sec\">Financial Secretary</option>\n                                <option value=\"auditor\">Internal Auditor</option>\n                                <option value=\"treasurer\">Treasurer</option>\n                                <option value=\"welfare_I\">Welfare Officer I – (Male)</option>\n                                <option value=\"welfare_II\">Welfare Officer II – (Female)</option>\n                                <option value=\"dir_of_socials\">Director of Socials (D.O.S)</option>\n                                <option value=\"pro_I\">Public Relation Officer I – (Male)</option>\n                                <option value=\"pro_II\">Public Relation Officer II – (Female)</option>\n                                <option value=\"provost\">Provost Marshal</option>\n                                <option value=\"sales_dir\">Sales Director</option>\n                                <option value=\"sports_dir\">Sports Director</option>\n                                <option value=\"dir_of_food\">Director of Food</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"field\">\n                        <div class=\"ui input\">\n                            <input type=\"text\" value=\"\" placeholder=\"Amount in words\" id=\"amount_words\" readonly=\"\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"field\" id=\"matricno_div\">\n                    <div class=\"ui fluid action input\">\n                        <input type=\"text\" placeholder=\"Matric Number\" (keypress)=\"triggerSearch($event)\" [(ngModel)]=\"matricno\" name=\"matricno\" id=\"matricno\">\n                        <button type=\"button\" class=\"ui primary right labeled icon button\" (click)=\"searchMatric()\" id=\"searchBtn\">\n                            <i class=\"search icon\"></i>\n                            Get details\n                        </button>\n                    </div>\n                </div>\n                <div class=\"ui divider\"></div>\n                <div class=\"three fields\">\n                    <div class=\"field\" id=\"first_name_div\">\n                        <div class=\"ui input\">\n                            <input type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"firstname\" name=\"firstname\" id=\"firstname\" readonly=\"\">\n                        </div>\n                    </div>\n                    <div class=\"field\" id=\"middle_name_div\">\n                        <div class=\"ui input\">\n                            <input type=\"text\" placeholder=\"Middle Name\" [(ngModel)]=\"middlename\" name=\"middlename\" id=\"middlename\" readonly=\"\">\n                        </div>\n                    </div>\n                    <div class=\"field\" id=\"last_name_div\">\n                        <div class=\"ui input\">\n                            <input type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"lastname\" name=\"lastname\" id=\"lastname\" readonly=\"\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"two fields\">\n                    <div class=\"field\" id=\"email_div\">\n                        <div class=\"ui input\">\n                            <input type=\"email\" placeholder=\"Email Addresss\" [(ngModel)]=\"email\" name=\"email\" id=\"email\">\n                        </div>\n                    </div>\n                    <div class=\"field\" id=\"phone_div\">\n                        <div class=\"ui input\">\n                            <input type=\"tel\" placeholder=\"Phone\" [(ngModel)]=\"phone\" name=\"phone\" id=\"phone\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"two fields\">\n                    <div class=\"field\" id=\"\">\n                        <div class=\"ui input\">\n                            <input type=\"email\" placeholder=\"Department\" [(ngModel)]=\"department\" name=\"department\" id=\"department\" readonly=\"\">\n                        </div>\n                    </div>\n                    <div class=\"field\" id=\"\">\n                        <div class=\"ui input\">\n                            <input type=\"text\" placeholder=\"Course of study\" [(ngModel)]=\"course\" name=\"course\" id=\"course\" readonly=\"\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui divider\"></div>\n                <button type=\"submit\" class=\"ui large fluid primary button\">\n                    <i class=\"credit card icon\"></i> Pay now\n                </button>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid\" id=\"msg_grid\">\n    <div class=\"four wide column\"></div>\n    <div class=\"eight wide column\">\n        <div id=\"message_wrapper\">\n            <div class=\"ui icon message\">\n                <i class=\"notched circle loading icon\"></i>\n                <div class=\"content\">\n                    <div class=\"header\">\n                        Just one second\n                    </div>\n                    <p>We're verifying your transaction.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"ui stackable grid\" *ngIf=\"getPaymentStatus()\">\n    <div class=\"three wide column\"></div>\n    <div class=\"ten wide column\">\n        <form class=\"ui form segment\" autocomplete=\"off\" (submit)=\"onAspirantSubmit()\">\n            <div class=\"ui four top attached steps\">\n                <div class=\"link active step\" (click)=\"showStep1()\" id=\"step1\">\n                    <i class=\"user icon\"></i>\n                    <div class=\"content\">\n                        <div class=\"title\">Step 1</div>\n                        <div class=\"description\">Details</div>\n                    </div>\n                </div>\n                <div class=\"link step\" (click)=\"showStep2()\" id=\"step2\">\n                    <i class=\"upload icon\"></i>\n                    <div class=\"content\">\n                        <div class=\"title\">Step 2</div>\n                        <div class=\"description\">Campaign Photo</div>\n                    </div>\n                </div>\n                <div class=\"link step\" (click)=\"showStep3()\" id=\"step3\">\n                    <i class=\"info icon\"></i>\n                    <div class=\"content\">\n                        <div class=\"title\">Step 3</div>\n                        <div class=\"description\">Confirmation</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"ui attached segment\">\n                <div class=\"\" id=\"step1_content\">\n                    <div class=\"field\"><label>1. Names of candidate</label></div>\n                    <div class=\"three fields\">\n                        <div class=\"field\" id=\"last_name_div\">\n                            <label for=\"lasname\">Last name</label>\n                            <div class=\"ui input\">\n                                <input type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"aspirant_model.lastname\" name=\"lastname\" id=\"lastname\" readonly=\"\" />\n                            </div>\n                        </div>\n                        <div class=\"field\" id=\"othernames_div\">\n                            <label for=\"firstname\">Othernames</label>\n                            <div class=\"ui input\">\n                                <input type=\"text\" placeholder=\"Othernames\" [(ngModel)]=\"othernames\" name=\"othernames\" id=\"othernames\" readonly=\"\" />\n                            </div>\n                        </div>\n                        <div class=\"field\" id=\"middle_name_div\">\n                            <label for=\"nickname\">Nickname</label>\n                            <div class=\"ui input\">\n                                <input type=\"text\" placeholder=\"Nickname\" [(ngModel)]=\"aspirant_model.nickname\" name=\"nickname\" id=\"nickname\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"two fields\">\n                        <div class=\"field\" id=\"email_div\">\n                            <label for=\"email\">2. Email address</label>\n                            <div class=\"ui input\">\n                                <input type=\"email\" placeholder=\"Email Addresss\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" readonly=\"\" />\n                            </div>\n                        </div>\n                        <div class=\"field\" id=\"phone_div\">\n                            <label for=\"phone\">3. Phone number (e.g. 08033344455)</label>\n                            <div class=\"ui input\">\n                                <input type=\"tel\" placeholder=\"Phone\" [(ngModel)]=\"phone\" name=\"phone\" id=\"phone\" readonly=\"\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"field\" id=\"address_div\">\n                        <label for=\"address\">4. Address</label>\n                        <input type=\"text\" placeholder=\"Addresss\" [(ngModel)]=\"aspirant_model.address\" name=\"address\" id=\"address\" />\n                    </div>\n                    <div class=\"two fields\">\n                        <div class=\"field\" id=\"\">\n                            <label for=\"department\">5. Department</label>\n                            <div class=\"ui input\">\n                                <input type=\"email\" placeholder=\"Department\" [(ngModel)]=\"department\" name=\"department\" id=\"department\" readonly=\"\" />\n                            </div>\n                        </div>\n                        <div class=\"field\" id=\"\">\n                            <label for=\"course\">6. Course of study</label>\n                            <div class=\"ui input\">\n                                <input type=\"text\" placeholder=\"Course of study\" [(ngModel)]=\"course\" name=\"course\" id=\"course\" readonly=\"\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"two fields\">\n                        <div class=\"field\" id=\"\">\n                            <label for=\"level\">7. Level</label>\n                            <div class=\"ui input\">\n                                <input type=\"text\" placeholder=\"Level of study\" [(ngModel)]=\"level\" name=\"level\" id=\"level\" readonly=\"\" />\n                            </div>\n                        </div>\n                        <div class=\"field\" id=\"\">\n                            <label for=\"level\">8. Current CGPA</label>\n                            <div class=\"ui input\">\n                                <input type=\"text\" placeholder=\"Current CGPA\" [(ngModel)]=\"aspirant_model.cgpa\" name=\"cgpa\" id=\"cgpa\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"field\">\n                        <label for=\"reason\">9. Reason for contesting</label>\n                        <div class=\"ui input\">\n                            <textarea placeholder=\"Reason for contesting\" [(ngModel)]=\"aspirant_model.reason\" name=\"reason\" id=\"reason\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"ui divider\"></div>\n                    <button type=\"button\" class=\"ui fluid button\" (click)=\"showStep2()\">Next<i class=\"arrow right icon\"></i></button>\n                </div>\n                <div class=\"hiddenContent\" id=\"step2_content\">\n                    <div class=\"ui stackable grid\">\n                        <div class=\"eight wide column\">\n                            <input type=\"file\" [(ngModel)]=\"picture\" name=\"picture\" id=\"picture\" accept=\"image/*\" required (change)=\"fileChange($event)\" />\n                        </div>\n                        <div class=\"eight wide column\">\n                            <div class=\"field\" style=\"text-align:center;\">\n                                <img [attr.src]='file_srcs[0]' alt=\"\" id=\"image_preview\"/>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ui divider\"></div>\n                    <div class=\"two fields\">\n                        <div class=\"field\">\n                            <button type=\"button\" class=\"ui fluid button\" (click)=\"showStep1()\"><i class=\"arrow left icon\"></i>Back</button>\n                        </div>\n                        <div class=\"field\">\n                            <button type=\"button\" class=\"ui fluid button\" (click)=\"showStep3()\">Next<i class=\"arrow right icon\"></i></button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"hiddenContent\" id=\"step3_content\">\n                    <div class=\"ui stackable grid\">\n                        <div class=\"two wide column\"></div>\n                        <div class=\"twelve wide column\">\n                            <div class=\"ui segment\">\n                                <div class=\"field\">\n                                    <div class=\"ui toggle checkbox\">\n                                        <input type=\"checkbox\" (click)=\"enableSubmit()\" tabindex=\"0\" id=\"confirm\">\n                                        <label>\n                                            I certify that to my personal knowledge and subject to any conditions\n                                            required by the ATBU SUG ELCOM Bye-Laws, the information provided in the form\n                                            is accurate and up to date and is verifiable.\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <button type=\"submit\" class=\"ui large fluid submit button green disabled\" id=\"submit_btn\">\n                                <i class=\"save icon\"></i> Submit Form\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"ui divider\"></div>\n                    <button type=\"button\" class=\"ui fluid button\" (click)=\"showStep2()\"><i class=\"arrow left icon\"></i>Back</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(104);


/***/ })
],[239]);
//# sourceMappingURL=main.bundle.js.map