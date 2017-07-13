webpackJsonp([1,4],{

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoriteService = (function () {
    function FavoriteService(http) {
        this.http = http;
    }
    FavoriteService.prototype.addToFav = function (movie) {
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        data.append('id', movie.id);
        data.append('title', movie.title);
        data.append('vote_average', movie.vote_average);
        data.append('poster_path', movie.poster_path);
        this.http
            .post('/api/addToFav', data)
            .subscribe(function (data) {
            var response = data.json();
            alert(response.message);
        }, function (error) {
            var response = error.json();
            alert(response.message);
        });
    };
    FavoriteService.prototype.getFavList = function () {
        return this.http.get('/api/getFavList')
            .map(function (res) { return res.json(); });
    };
    FavoriteService.prototype.deleteMovie = function (movieId, callback) {
        var body = {
            id: movieId
        };
        var obj = { id: movieId };
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            body: obj
        });
        this.http
            .delete('/api/deleteMovie', options)
            .subscribe(function (data) {
            var response = data.json();
            callback(response);
        }, function (error) {
            var response = error.json();
            alert(response.message);
        });
    };
    FavoriteService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], FavoriteService);
    return FavoriteService;
    var _a;
}());
//# sourceMappingURL=/home/nidhi/workspace/mean-app/src/favorite.service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.getMovies = function (movieString) {
        return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=0058d43a094e9d8f63318cf2d24d8f15&query=' + movieString)
            .map(function (res) { return res.json(); });
    };
    DashboardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], DashboardService);
    return DashboardService;
    var _a;
}());
//# sourceMappingURL=/home/nidhi/workspace/mean-app/src/dashboard.service.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
    }
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        data.append('email', username);
        data.append('password', password);
        this.http
            .post('/api/login', data)
            .subscribe(function (data) {
            var response = data.json();
            localStorage.setItem('token', response.token);
            _this.router.navigate(['/dashboard']);
            alert(response.message);
        }, function (error) {
            var response = error.json();
            alert(response.message);
        });
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginService);
    return LoginService;
    var _a, _b;
}());
//# sourceMappingURL=/home/nidhi/workspace/mean-app/src/login.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationService = (function () {
    function RegistrationService(http, router) {
        this.http = http;
        this.router = router;
    }
    RegistrationService.prototype.register = function (fname, lname, email, password) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        data.append('fname', fname);
        data.append('lname', lname);
        data.append('email', email);
        data.append('password', password);
        this.http
            .post('/api/register', data)
            .subscribe(function (data) {
            var response = data.json();
            _this.router.navigate(['/login']);
            alert(response.message);
        }, function (error) {
            var response = error.json();
            alert(response.message);
        });
    };
    RegistrationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RegistrationService);
    return RegistrationService;
    var _a, _b;
}());
//# sourceMappingURL=/home/nidhi/workspace/mean-app/src/registration.service.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 389;


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(508);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/nidhi/workspace/mean-app/src/main.js.map

/***/ }),

/***/ 507:
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/nidhi/workspace/mean-app/src/app.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registration_registration_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__logout_logout_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__favorite_favorite_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__registration_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__favorite_service__ = __webpack_require__(218);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















// Define the routes
var ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_6__registration_registration_component__["a" /* RegistrationComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'logout',
        component: __WEBPACK_IMPORTED_MODULE_11__logout_logout_component__["a" /* LogoutComponent */]
    },
    {
        path: 'favorite',
        component: __WEBPACK_IMPORTED_MODULE_12__favorite_favorite_component__["a" /* FavoriteComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__favorite_favorite_component__["a" /* FavoriteComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(ROUTES) // Add routes to the app
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__registration_service__["a" /* RegistrationService */], __WEBPACK_IMPORTED_MODULE_14__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_15__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_16__favorite_service__["a" /* FavoriteService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/nidhi/workspace/mean-app/src/app.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorite_service__ = __webpack_require__(218);
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
    function DashboardComponent(moviesService, favoriteService) {
        this.moviesService = moviesService;
        this.favoriteService = favoriteService;
        this.heading = "Search Your Favorite Movie";
        this.imagePath = "assets/movie.png";
        this.ratingImg = "assets/rating.jpg";
        this.favIcon = "assets/favorite.jpg";
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.searchMovie = function (movieName) {
        var _this = this;
        this.moviesService.getMovies(movieName).subscribe(function (movies) {
            _this.movies = movies.results;
            console.log(_this.movies);
        });
    };
    DashboardComponent.prototype.addToFav = function (event) {
        var target = event.currentTarget;
        var selectedId = target.attributes.id.nodeValue;
        this.favMovie = this.movies.filter(function (movie) {
            return movie.id == selectedId;
        });
        this.favoriteService.addToFav(this.favMovie[0]);
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(677),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__favorite_service__["a" /* FavoriteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__favorite_service__["a" /* FavoriteService */]) === 'function' && _b) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/nidhi/workspace/mean-app/src/dashboard.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favorite_service__ = __webpack_require__(218);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoriteComponent = (function () {
    function FavoriteComponent(favoriteService) {
        this.favoriteService = favoriteService;
        this.favoriteLogo = "assets/favorite.jpg";
        this.heading = "Your Favorite List";
        this.deleteIcon = "assets/delete.png";
        this.getFavList();
    }
    FavoriteComponent.prototype.ngOnInit = function () {
    };
    FavoriteComponent.prototype.getFavList = function () {
        var _this = this;
        this.favoriteService.getFavList().subscribe(function (movies) {
            _this.movies = movies;
        });
    };
    FavoriteComponent.prototype.deleteMovie = function (event) {
        var _this = this;
        var target = event.currentTarget;
        var selectedId = target.attributes.id.nodeValue;
        this.favoriteService.deleteMovie(selectedId, function (response) {
            _this.movies = _this.movies.filter(function (movie) {
                return movie.id !== selectedId;
            });
            alert(response.message);
        });
    };
    FavoriteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-favorite',
            template: __webpack_require__(678),
            styles: [__webpack_require__(672)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__favorite_service__["a" /* FavoriteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__favorite_service__["a" /* FavoriteService */]) === 'function' && _a) || Object])
    ], FavoriteComponent);
    return FavoriteComponent;
    var _a;
}());
//# sourceMappingURL=/home/nidhi/workspace/mean-app/src/favorite.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function HomeComponent() {
        this.heading = "Movie Search Portal";
        this.imagePath = "assets/movie.png";
        this.subheading = "Please Login to Search your Favourite Movies...";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(679),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/nidhi/workspace/mean-app/src/home.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__(333);
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
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.loginLogo = "assets/login.png";
        this.option = { username: "", password: "" };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var username = this.option.username;
        var password = this.option.password;
        this.loginService.login(username, password);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(680),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === 'function' && _a) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
//# sourceMappingURL=/home/nidhi/workspace/mean-app/src/login.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(151);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(router) {
        this.router = router;
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-logout',
            template: ''
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a;
}());
//# sourceMappingURL=/home/nidhi/workspace/mean-app/src/logout.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
        this.token = localStorage.getItem('token');
        if (this.token != null) {
            this.template = "\n        <a href=\"/dashboard\" style=\"padding:5px;\">Dashboard</a>\n        <a href=\"favorite\" style=\"padding:5px;\">Favorite</a>\n        <a href=\"logout\" style=\"padding:5px;\">Logout</a>\n      ";
        }
        else {
            this.template = "\n        <a href=\"/\" style=\"padding:5px;\">Home</a>\n        <a href=\"register\" style=\"padding:5px;\">Register</a>\n        <a href=\"login\" style=\"padding:5px;\">Login</a>\n      ";
        }
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-nav',
            template: "<div style=\"text-align: right;margin-right: 10px;margin-top:10px;\" [innerHtml]=\"template\"></div>",
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
//# sourceMappingURL=/home/nidhi/workspace/mean-app/src/nav.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registration_service__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationComponent = (function () {
    function RegistrationComponent(registrationService) {
        this.registrationService = registrationService;
        this.registerLogo = "assets/register.jpg";
        this.option = { firstname: "", lastname: "", email: "", password: "" };
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.register = function () {
        var fname = this.option.firstname;
        var lname = this.option.lastname;
        var email = this.option.email;
        var password = this.option.password;
        this.registrationService.register(fname, lname, email, password);
    };
    RegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__(681),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__registration_service__["a" /* RegistrationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__registration_service__["a" /* RegistrationService */]) === 'function' && _a) || Object])
    ], RegistrationComponent);
    return RegistrationComponent;
    var _a;
}());
//# sourceMappingURL=/home/nidhi/workspace/mean-app/src/registration.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/nidhi/workspace/mean-app/src/environment.js.map

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948; /* green */\n  padding-left: 3px;\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442; /* red */\n  padding-left: 3px;\n}\n"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948; /* green */\n  padding-left: 3px;\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442; /* red */\n  padding-left: 3px;\n}\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav><br/>\n<div style=\"text-align: center;border-style: groove;padding: 10px;\">\n  <img src={{imagePath}} alt=\"MOVIE LOGO\" height=\"150px\" width=\"150px\" />\n  <h2>{{heading}}</h2>\n  <input type=\"text\" placeholder=\"Search Movie\" #movieName>\n  <button (click)=\"searchMovie(movieName.value)\">Search</button>\n</div>\n<div style=\"width: 95%;text-align: center;margin:10px;\">\n  <div *ngFor=\"let movie of movies\">\n    <img src=\"https://image.tmdb.org/t/p/w500/{{movie.poster_path}}\" alt=\"Movie Poster\" height=\"250px\" width=\"350px\" />\n    <h4>{{ movie.title }} - {{movie.vote_average}} - <img src={{ratingImg}} alt=\"Rating Logo\" height=\"20px\" width=\"20px\" /></h4>\n    <!-- <img src={{favIcon}} id={{movie.id}} alt=\"Add to Favorite\" height=\"100px\" width=\"100px\" /> -->\n    <!-- <button id={{movie.id}} (click)=\"addToFav($event)\">Add to Fav</button> -->\n    <img src={{favIcon}} style=\"padding-left:5px;\" (click)=\"addToFav($event)\" id={{movie.id}} alt=\"Add to Favorites Movie\" height=\"50px\" width=\"50px\" />\n    <hr/>\n  </div>\n</div>\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav><br/>\n<div style=\"text-align: center;border-style: groove;padding: 10px;\">\n  <img src={{favoriteLogo}} alt=\"MOVIE LOGO\" height=\"150px\" width=\"150px\" />\n  <h2>{{heading}}</h2>\n</div>\n<div style=\"width: 95%;text-align: center;margin:10px;\">\n  <div *ngFor=\"let movie of movies\">\n    <h3>{{ movie.title}} - {{ movie.vote_average}}</h3>\n    <img src=\"https://image.tmdb.org/t/p/w500/{{movie.poster_path}}\" alt=\"Movie Poster\" height=\"250px\" width=\"350px\" />\n    <img src={{deleteIcon}} style=\"padding-left:5px;\" (click)=\"deleteMovie($event)\" id={{movie.id}} alt=\"Delete Movie\" height=\"50px\" width=\"50px\" />\n    <hr/>\n  </div>\n</div>\n"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav><br/>\n<div style=\"text-align: center;border-style: groove;\">\n  <img src=\"{{imagePath}}\" alt=\"MOVIE LOGO\" height=\"150px\" width=\"150px\" />\n  <h2>{{heading}}</h2>\n  <p>{{subheading}}</p>\n</div>\n"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav><br/>\n<div style=\"text-align: center;border-style: groove;padding: 5px;\">\n  <img src={{loginLogo}} alt=\"LOGIN LOGO\" height=\"100px\" width=\"100px\" />\n  <h2>Login</h2>\n  <form (submit)=\"login()\">\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" name=\"username\" required [(ngModel)]=\"option.username\" #username=\"ngModel\"/><br/>\n      <div *ngIf=\"username.errors && (username.dirty || username.touched)\" class=\"alert alert-danger\">\n        <div [hidden]=\"!username.errors.required\">\n          Username is required.\n        </div>\n      </div>\n    </div>\n    <label>Password</label>\n    <input type=\"password\" name=\"password\" required minlength=\"5\" [(ngModel)]=\"option.password\" #password=\"ngModel\"/><br/><br/>\n    <div *ngIf=\"password.errors && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n      <div [hidden]=\"!password.errors.required\">\n        Password is required.\n      </div>\n      <div [hidden]=\"!password.errors.minlength\">\n        Password is minimum of 5 character.\n      </div>\n    </div>\n    <button type=\"submit\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav><br/>\n<div style=\"text-align: center;border-style: groove;padding: 5px;\">\n    <img src={{registerLogo}} alt=\"REGISTER LOGO\" height=\"100px\" width=\"200px\" />\n    <h2>Register</h2>\n    <form (submit)=\"register()\">\n      <div class=\"form-group\">\n        <label>First Name</label>\n        <input type=\"text\" name=\"firstname\" required [(ngModel)]=\"option.firstname\" #firstname=\"ngModel\"/><br/>\n        <div *ngIf=\"firstname.errors && (firstname.dirty || firstname.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!firstname.errors.required\">\n            Firstname is required.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Last Name</label>\n        <input type=\"text\" name=\"lastname\" required [(ngModel)]=\"option.lastname\" #lastname=\"ngModel\"/><br/>\n        <div *ngIf=\"lastname.errors && (lastname.dirty || lastname.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!lastname.errors.required\">\n            Lastname is required.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Email ID</label>\n        <input type=\"email\" name=\"email\" required [(ngModel)]=\"option.email\" #email=\"ngModel\"/><br/>\n        <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!email.errors.required\">\n            Email is required.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" name=\"password\" required minlength=\"5\" [(ngModel)]=\"option.password\" #password=\"ngModel\"/><br/><br/>\n        <div *ngIf=\"password.errors && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!password.errors.required\">\n            Password is required.\n          </div>\n          <div [hidden]=\"!password.errors.minlength\">\n            Password is minimum of 5 character.\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\">Submit</button>\n    </form>\n  </div>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ })

},[699]);
//# sourceMappingURL=main.bundle.map