(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'infinity2k19';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_in_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sign-in/sign-up/sign-up.component */ "./src/app/sign-in/sign-up/sign-up.component.ts");
/* harmony import */ var _sign_in_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sign-in/login/login.component */ "./src/app/sign-in/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./request/request.component */ "./src/app/request/request.component.ts");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _request_success_request_success_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./request-success/request-success.component */ "./src/app/request-success/request-success.component.ts");
/* harmony import */ var _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./front-page/front-page.component */ "./src/app/front-page/front-page.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _bloodbanks_bloodbanks_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bloodbanks/bloodbanks.component */ "./src/app/bloodbanks/bloodbanks.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"],
                _sign_in_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"],
                _sign_in_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                _request_request_component__WEBPACK_IMPORTED_MODULE_15__["RequestComponent"],
                _request_success_request_success_component__WEBPACK_IMPORTED_MODULE_18__["RequestSuccessComponent"],
                _front_page_front_page_component__WEBPACK_IMPORTED_MODULE_19__["FrontPageComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_20__["MapComponent"],
                _bloodbanks_bloodbanks_component__WEBPACK_IMPORTED_MODULE_21__["BloodbanksComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCs22OmCK2LDwR3SbF6Qj6x9r3C-ICuDiM'
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'request', component: _request_request_component__WEBPACK_IMPORTED_MODULE_15__["RequestComponent"] },
                    { path: 'success', component: _request_success_request_success_component__WEBPACK_IMPORTED_MODULE_18__["RequestSuccessComponent"] },
                    { path: 'signup', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"] },
                    { path: 'login', component: _sign_in_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
                    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"] },
                    { path: 'banks', component: _bloodbanks_bloodbanks_component__WEBPACK_IMPORTED_MODULE_21__["BloodbanksComponent"] }
                ])
            ],
            providers: [_fetch_service__WEBPACK_IMPORTED_MODULE_16__["FetchService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bloodbanks/bloodbanks.component.css":
/*!*****************************************************!*\
  !*** ./src/app/bloodbanks/bloodbanks.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bloodbanks/bloodbanks.component.html":
/*!******************************************************!*\
  !*** ./src/app/bloodbanks/bloodbanks.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let data of allData\">\n  <div class=\"card\" style=\"width: 100vw;\">\n    <div class=\"card-body text-center\">\n      <h5 class=\"card-title\">{{data.h_name}}</h5>\n      <h6 class=\"card-subtitle mb-2 text-muted\">{{data.address}}</h6>\n      <p class=\"card-text\">Contact no. {{data.contact}}</p>\n      <a href=\"#\" class=\"card-link\">{{data.pincode}}</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bloodbanks/bloodbanks.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bloodbanks/bloodbanks.component.ts ***!
  \****************************************************/
/*! exports provided: BloodbanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloodbanksComponent", function() { return BloodbanksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BloodbanksComponent = /** @class */ (function () {
    function BloodbanksComponent() {
        this.allData = [
            {
                "id": 1,
                "state": "Andaman and Nicobar Islands",
                "city": "NA",
                "district": "Port Blair",
                "h_name": "G.B Pant Hospital",
                "address": "Atlanta Point",
                "pincode": 744104,
                "contact": "03192 230628",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "[=12]12",
                "longitude": "[=93]93"
            },
            {
                "id": 2,
                "state": "Andaman and Nicobar Islands",
                "city": "NA",
                "district": "Port Blair",
                "h_name": "I.N.H.S. Dhanvantri",
                "address": "Minni Bay",
                "pincode": 744103,
                "contact": "03192 248759",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 3,
                "state": "Andaman and Nicobar Islands",
                "city": "NA",
                "district": "Port Blair",
                "h_name": "Pillar Health Centre",
                "address": "Junglighat,Lamba Line, P.B. No.526",
                "pincode": 744103,
                "contact": "03192 233193, 03192 233993",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 4,
                "state": "Andhra Pradesh",
                "city": "Gudur",
                "district": "Nellore",
                "h_name": "A.P.Vidya Vidhana Parishad Community Hospital Blood Bank",
                "address": "Hospital Road",
                "pincode": 524101,
                "contact": "08624 251804",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 5,
                "state": "Andhra Pradesh",
                "city": "Bhimavaram",
                "district": "West Godavari",
                "h_name": "A.S.N. Raju Charitable Trust Blood Bank",
                "address": "Door No. 24-1-1, R.K. Plaza (Sarovar Complex), J.P. Road",
                "pincode": "NA",
                "contact": "0886 222558",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 6,
                "state": "Andhra Pradesh",
                "city": "Eluru",
                "district": "West Godavari",
                "h_name": "Alluri Sita Rama Raju Acadamy of Medical Sciences Blood Bank",
                "address": "Ground Floor, Hospital Block, NH5",
                "pincode": "NA",
                "contact": "08812 244484",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "http://asram.isram_hospitals/aboutus.php",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 7,
                "state": "Andhra Pradesh",
                "city": "Visakhapatnam",
                "district": "Visakhapatnam",
                "h_name": "Anil Neerukunda Hospital Blood Bank",
                "address": "Sangi Valasa, Bheemunipatnam (M)",
                "pincode": "NA",
                "contact": "08933 226961, 08933 226900",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 8,
                "state": "Andhra Pradesh",
                "city": "Visakhapatnam",
                "district": "Visakhapatnam",
                "h_name": "Apollo Hospitals Heart and Kidney Centre Blood Bank",
                "address": "Apollo Hospitals Entps. , 10-50-80, Heart and Kidney Center, 1st Floor, Waltair Main Road",
                "pincode": "NA",
                "contact": "0891 252619, 0891 252622",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 9,
                "state": "Andhra Pradesh",
                "city": "Proddutur",
                "district": "Kadapa",
                "h_name": "APVVP Area Hospital Blood Bank",
                "address": "Area Hospital Premises, Ground Floor",
                "pincode": "NA",
                "contact": "08562 253342, 08562 253154",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 10,
                "state": "Andhra Pradesh",
                "city": "Kadapa",
                "district": "Kadapa",
                "h_name": "APVVP Area Hospital Blood Bank",
                "address": "Area Hospital Premises, Muddanoor Road, Pulivendla",
                "pincode": "NA",
                "contact": "NA",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 11,
                "state": "Andhra Pradesh",
                "city": "Kavali",
                "district": "S.P.S.R Nellore",
                "h_name": "APVVP Area Hospital Blood Bank",
                "address": "APVVP Area Hospital Blood Bank, Kavali, S.P.S.R Nellore",
                "pincode": "NA",
                "contact": "08626 240167",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 12,
                "state": "Andhra Pradesh",
                "city": "Madanapally",
                "district": "Chittoor",
                "h_name": "APVVP Community Hospital",
                "address": "Area Hospital Premises",
                "pincode": "NA",
                "contact": "08572 22087",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "[=17]17",
                "longitude": "[=82]82"
            },
            {
                "id": 13,
                "state": "Andhra Pradesh",
                "city": "Tenali",
                "district": "Guntur",
                "h_name": "APVVP District Hospital Blood Bank",
                "address": "Ground Floor, Hospital Premises, Chenchupet",
                "pincode": "NA",
                "contact": "08644 228850",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 14,
                "state": "Andhra Pradesh",
                "city": "Anakapalle",
                "district": "Visakhapatnam",
                "h_name": "APVVP NT Rama Rao Vaidyalayam Blood Bank",
                "address": "Poolbagh Road",
                "pincode": "NA",
                "contact": "08924 223340",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 15,
                "state": "Andhra Pradesh",
                "city": "Nuzvid",
                "district": "Krishna",
                "h_name": "APVVP, Area Hospital Blood Bank",
                "address": "NA",
                "pincode": "NA",
                "contact": "08674 245040",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 16,
                "state": "Andhra Pradesh",
                "city": "Amalapuram",
                "district": "East Godavari",
                "h_name": "Area Hospital Blood Bank",
                "address": "Near Black Bridge, Moberlipeta",
                "pincode": "NA",
                "contact": "NA",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 17,
                "state": "Andhra Pradesh",
                "city": "Chittoor",
                "district": "Chittoor",
                "h_name": "Arogyavaram Medical Centre Blood Bank",
                "address": "Ground Floor, D.No. 16-1, Bartons Laboratory, AMC Sanitorium, Arogyavaram",
                "pincode": "NA",
                "contact": "NA",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 18,
                "state": "Andhra Pradesh",
                "city": "Visakhapatnam",
                "district": "Visakhapatnam",
                "h_name": "AS Raja Voluntary Blood Bank",
                "address": "AS Raja Voluntary Blood Bank, D.No. 10-50-11/7, 1st Floor, Virasi Centre, Waltair Main Road",
                "pincode": "NA",
                "contact": "0891 2543436, 0891 5563436",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 19,
                "state": "Andhra Pradesh",
                "city": "Palakollu",
                "district": "West Godavari",
                "h_name": "ASN Raju Charitable Trust Blood Bank",
                "address": "H.No. 15-5-4 and 16, I st and II nd Floor, Sri Satya Sai Complex, Bank Street",
                "pincode": "NA",
                "contact": "0886 222558",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 20,
                "state": "Andhra Pradesh",
                "city": "Tirumala",
                "district": "Chittoor",
                "h_name": "Aswini Hospital Blood Bank",
                "address": "Ground Floor, Aswini Hospital Premises, TTD",
                "pincode": "NA",
                "contact": "NA",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "[=14]14",
                "longitude": "[=79]79"
            },
            {
                "id": 21,
                "state": "Andhra Pradesh",
                "city": "Ongole",
                "district": "Prakasam",
                "h_name": "Belif Blood Bank",
                "address": "Sai Complex III Floor, Addanki Bus Stop Centre, Kurnool Road",
                "pincode": 523002,
                "contact": "0859 2222345",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 22,
                "state": "Andhra Pradesh",
                "city": "Tenali",
                "district": "Guntur",
                "h_name": "Best Rotary Blood Bank",
                "address": "D.No. 22-6-54, 1st Floor, Sarojininaidu Sreet, Kothapet",
                "pincode": 522201,
                "contact": "NA",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 23,
                "state": "Andhra Pradesh",
                "city": "Vijayawada",
                "district": "Krishna",
                "h_name": "Bethesda Blood Bank (A Unit of Bethesda Homes Voluntary Organisation)",
                "address": "D.No. 29-10-2, Ground Floor, Narasimharao Naidu Street, Suryaraopet",
                "pincode": "NA",
                "contact": "0866 2435888",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            },
            {
                "id": 24,
                "state": "Andhra Pradesh",
                "city": "Bhimavaram",
                "district": "West Godavari",
                "h_name": "Bhimavaram Hospitals Limited Blood Bank",
                "address": "64/6A, 6B/7A & 7B, I st Floor, Opp. SRKR Eng. Col., Juvvalapalem Road",
                "pincode": "NA",
                "contact": "08814 221111, 08814 221122, 08814 221133, 08814 221100",
                "helpline": "NA",
                "fax": "NA",
                "category": "NA",
                "website": "NA",
                "email": "NA",
                "blood_component": "NA",
                "blood_group": "NA",
                "service_time": "NA",
                "latitude": "NA",
                "longitude": "NA"
            }
        ];
    }
    BloodbanksComponent.prototype.ngOnInit = function () {
    };
    BloodbanksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bloodbanks',
            template: __webpack_require__(/*! ./bloodbanks.component.html */ "./src/app/bloodbanks/bloodbanks.component.html"),
            styles: [__webpack_require__(/*! ./bloodbanks.component.css */ "./src/app/bloodbanks/bloodbanks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BloodbanksComponent);
    return BloodbanksComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n  <h3>Pending Requests</h3>\n</div>\n\n<div class=\"col-11\">\n  <div class=\"card\" style=\"width: 90vw;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Mr. Abdul Baseer</h5>\n      <h6 class=\"card-subtitle mb-2 text-muted\">Need: B+</h6>\n      <p class=\"card-text\">Address: Santosh Nagar, Hyderabad.</p>\n      <button type=\"button\" class=\"btn btn-success\">Accept</button>\n  <button type=\"button\" class=\"btn btn-danger\">Pass</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-12\">\n  <h4><br>Completed Donations<br></h4>\n</div>\n\n<div class=\"col-9\">\n  <div class=\"card\" style=\"width: 90vw;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Mr.Shaik Shoeb </h5>\n      <h6 class=\"card-subtitle mb-2 text-muted\">Donated: B+</h6>\n      <p class=\"card-text\">Address: Malakpet, Hyderabad.</p>\n    </div>\n  </div>\n</div>\n<div class=\"col-9\">\n  <div class=\"card\" style=\"width: 90vw;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Mr. Shahab Uddin</h5>\n      <h6 class=\"card-subtitle mb-2 text-muted\">Donated: B+</h6>\n      <p class=\"card-text\">Address: Chanchalguda, Hyderabad.</p>\n    </div>\n  </div>\n</div>\n<div class=\"col-9\">\n  <div class=\"card\" style=\"width: 90vw;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Mr. Taha Mustafa</h5>\n      <h6 class=\"card-subtitle mb-2 text-muted\">Donated: B+</h6>\n      <p class=\"card-text\">Address: Kala Patthar, Hyderabad.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/fetch.service.ts":
/*!**********************************!*\
  !*** ./src/app/fetch.service.ts ***!
  \**********************************/
/*! exports provided: FetchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchService", function() { return FetchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FetchService = /** @class */ (function () {
    function FetchService(firebase) {
        this.firebase = firebase;
        this.users = firebase.list('/users');
    }
    FetchService.prototype.getData = function () {
        this.userData = this.firebase.list('userData');
        return this.userData.snapshotChanges();
    };
    FetchService.prototype.pushData = function (sendData) {
        console.log("aada rasta");
        this.userData.push(sendData);
        console.log("paun rasta");
    };
    FetchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], FetchService);
    return FetchService;
}());



/***/ }),

/***/ "./src/app/front-page/front-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/front-page/front-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/front-page/front-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/front-page/front-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/request']\" class=\"btn btn-danger fixed-bottom btn-lg btn-block\">Request</button>\n"

/***/ }),

/***/ "./src/app/front-page/front-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/front-page/front-page.component.ts ***!
  \****************************************************/
/*! exports provided: FrontPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontPageComponent", function() { return FrontPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrontPageComponent = /** @class */ (function () {
    function FrontPageComponent() {
    }
    FrontPageComponent.prototype.ngOnInit = function () {
    };
    FrontPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-front-page',
            template: __webpack_require__(/*! ./front-page.component.html */ "./src/app/front-page/front-page.component.html"),
            styles: [__webpack_require__(/*! ./front-page.component.css */ "./src/app/front-page/front-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FrontPageComponent);
    return FrontPageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n    height: 80vh;\n  }\n  "

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-11\">\n        <div class=\"col-sm-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Donate Blood</h5>\n                    <p class=\"card-text\">Register yourself at our website to donate blood when needed.</p>\n                    <a [routerLink]=\"['/signup']\" class=\"btn btn-danger\">Donate</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Need Blood?</h5>\n                    <p class=\"card-text\">Get the required blood within minutes with our community.</p>\n                    <a [routerLink]=\"['/request']\" class=\"btn btn-primary\">Get Blood</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<button [routerLink]=\"['/request']\" class=\"btn btn-danger fixed-bottom btn-lg btn-block\">Request</button>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(get) {
        this.get = get;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allData = this.get.getData().subscribe(function (data) {
            _this.allData = data;
            (function (error) {
                console.log(error);
            });
        });
        console.log(this.allData);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_1__["FetchService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n    height: 300px;\n  }\n  "

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n  <agm-marker [latitude]=\"lat1\" [longitude]=\"lng1\"></agm-marker>\n  <agm-marker [latitude]=\"lat2\" [longitude]=\"lng2\"></agm-marker>\n  <agm-marker [latitude]=\"lat3\" [longitude]=\"lng3\"></agm-marker>\n  <agm-marker [latitude]=\"lat4\" [longitude]=\"lng4\"></agm-marker>\n  <agm-marker [latitude]=\"lat5\" [longitude]=\"lng5\"></agm-marker>\n  <agm-marker [latitude]=\"lat6\" [longitude]=\"lng6\"></agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.lat = 17.3850;
        this.lng = 78.4867;
        this.lat2 = 17.2850;
        this.lng2 = 78.4867;
        this.lat3 = 17.3450;
        this.lng3 = 78.4467;
        this.lat4 = 17.3650;
        this.lng4 = 78.4267;
        this.lat5 = 17.3950;
        this.lng5 = 78.4267;
        this.lat6 = 17.3350;
        this.lng6 = 78.4287;
        this.lat7 = 17.3250;
        this.lng7 = 78.4787;
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">CandidFella</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/request-success/request-success.component.css":
/*!***************************************************************!*\
  !*** ./src/app/request-success/request-success.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/request-success/request-success.component.html":
/*!****************************************************************!*\
  !*** ./src/app/request-success/request-success.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\">\n  <div class=\"card-header\">\n    Submitted Successfully\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Success</h5>\n    <p class=\"card-text\">Your request has been forwarded to the respective donors.</p>\n  </div>\n  <app-map></app-map>\n  <a [routerLink]=\"['/banks']\" class=\"btn btn-primary\">Blood Banks near me.</a>\n  <div class=\"card-footer text-muted\">\n    Please be patient </div>\n</div>\n"

/***/ }),

/***/ "./src/app/request-success/request-success.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/request-success/request-success.component.ts ***!
  \**************************************************************/
/*! exports provided: RequestSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestSuccessComponent", function() { return RequestSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestSuccessComponent = /** @class */ (function () {
    function RequestSuccessComponent() {
        this.lat = 17.3850;
        this.lng = 78.4867;
    }
    RequestSuccessComponent.prototype.ngOnInit = function () {
    };
    RequestSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-success',
            template: __webpack_require__(/*! ./request-success.component.html */ "./src/app/request-success/request-success.component.html"),
            styles: [__webpack_require__(/*! ./request-success.component.css */ "./src/app/request-success/request-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestSuccessComponent);
    return RequestSuccessComponent;
}());



/***/ }),

/***/ "./src/app/request/request.component.css":
/*!***********************************************!*\
  !*** ./src/app/request/request.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c-padd{\n    padding: 5px;\n}"

/***/ }),

/***/ "./src/app/request/request.component.html":
/*!************************************************!*\
  !*** ./src/app/request/request.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"col-11\"><form>\n  <div class=\"form-group row\">\n    <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Name</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Name\" [(ngModel)]=\"name\" name=\"userName\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Email</label>\n    <div class=\"col-sm-10\">\n      <input type=\"email\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"userEmail\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Mobile Number</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Mobile Number\" [(ngModel)]=\"number\" name=\"userMobile\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Address</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Address\" [(ngModel)]=\"address\" name=\"userAddress\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Pin Code</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Pin Code\" [(ngModel)]=\"pincode\" name=\"userPincode\">\n    </div>\n  </div>\n\n\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-10\">\n      <button (click)=\"onSubmit()\" [routerLink]=\"['/success']\" class=\"btn btn-primary\">SUBMIT</button>\n    </div>\n  </div>\n</form></div>"

/***/ }),

/***/ "./src/app/request/request.component.ts":
/*!**********************************************!*\
  !*** ./src/app/request/request.component.ts ***!
  \**********************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestComponent = /** @class */ (function () {
    function RequestComponent(post) {
        this.post = post;
        this.sendData = {
            name: this.Name,
            email: this.Email,
            number: this.Number,
            address: this.Address,
            pincode: this.Pincode,
        };
    }
    RequestComponent.prototype.ngOnInit = function () {
    };
    RequestComponent.prototype.onSubmit = function () {
        this.post.pushData(this.sendData);
        console.log("submitted");
    };
    RequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! ./request.component.html */ "./src/app/request/request.component.html"),
            styles: [__webpack_require__(/*! ./request.component.css */ "./src/app/request/request.component.css")]
        }),
        __metadata("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_1__["FetchService"]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/sign-in/login/login.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/sign-in/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-11\">\n  <form>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputEmail4\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputPassword4\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\n      </div>\n    </div>\n    <div class=\"col-5\"><button [routerLink]=\"['/dashboard']\" type=\"submit\" class=\"btn btn-primary btn-lg\">Log in</button></div>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/sign-in/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sign-in/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/sign-in/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/sign-in/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-12\"><h3 class=\"text-center\">Sign up</h3></div>\n<div class=\"col-11\">\n  <form>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputEmail4\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputPassword4\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputAddress\">Address</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\">\n    </div>\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputCity\">City</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputCity\">\n      </div>\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputState\">State</label>\n        <select id=\"inputState\" class=\"form-control\">\n          <option selected>Choose...</option>\n          <option>...</option>\n        </select>\n      </div>\n      <div class=\"form-group col-md-2\">\n        <label for=\"inputZip\">Zip</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputZip\">\n      </div>\n    </div>\n\n    <div class=\"row\"> \n      <div class=\"col-5\"><button [routerLink]=\"['/dashboard']\" type=\"submit\" class=\"btn btn-primary btn-lg\">Sign up</button></div>  \n      <div class=\"col2\"><h1> / </h1></div> \n      <div class=\"col-5\"><button [routerLink]=\"['/login']\" type=\"submit\" class=\"btn btn-primary btn-lg\">Log in</button></div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-up/sign-up.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sign-in/sign-up/sign-up.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/sign-up/sign-up.component.html":
/*!********************************************************!*\
  !*** ./src/app/sign-in/sign-up/sign-up.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sign-up works!\n</p>\n"

/***/ }),

/***/ "./src/app/sign-in/sign-up/sign-up.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sign-in/sign-up/sign-up.component.ts ***!
  \******************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-in/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-in/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyATPUWLh4xiUodVZoWrXRC3ft1mWpzFrlc",
        authDomain: "infinity2k19-candidfella.firebaseapp.com",
        databaseURL: "https://infinity2k19-candidfella.firebaseio.com",
        projectId: "infinity2k19-candidfella",
        storageBucket: "infinity2k19-candidfella.appspot.com",
        messagingSenderId: "3842117574"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/syedvali/infinity2k19/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map