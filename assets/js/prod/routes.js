"use strict";app.config(function($routeProvider,$locationProvider){$routeProvider.when("/",{templateUrl:"/views/home",controller:"homeCtrl"}).when("/page1",{templateUrl:"/views/page1",controller:"page1Ctrl"}).otherwise({redirectTo:"/404"}),$locationProvider.html5Mode({enabled:!0,requireBase:!1})});