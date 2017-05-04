var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // Home View
        .state('home', {
            url: '/home',
            templateUrl: 'templates/homePage.html'
        })

        // Info Vies
        .state('about', {
            url: '/about',
            templateUrl: 'templates/info.html'
        });

         // Home View
        .state('soy', {
            url: '/como soy',
            templateUrl: 'templates/homePage.html'
        })
 // Home View
        .state('metas', {
            url: '/Mis metas',
            templateUrl: 'templates/homePage.html'
        })




