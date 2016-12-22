(function () {
    'use strict';
    
    var holidayApp = angular.module('HolidayApplication', ['ui.router', 'ngMaterial']);
    holidayApp.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                controller: "HomeController",
                controllerAs: "home"
            })
            .state('holidayDetails', {
                url: '/holiday-details/?name&date&observed&public',
                templateUrl: 'holiday-details/holiday-details.html',
                controller: "HolidayDetailsController",
                controllerAs: "details"

            });
    });

})();