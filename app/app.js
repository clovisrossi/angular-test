'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
    $locationProvider.html5Mode(true);
        
    
    $routeProvider
    .when('/', {
        templateUrl : 'app/views/home.html',
        controller : 'HomeCtrl',
    })
    .when('/about', {
        templateUrl: 'app/views/about.html',
        controller : 'AboutCtrl',
    })
    .when('/contact', { 
        templateUrl: 'app/views/contact.html',
        controller: 'ContactCtrl',
    })
    .otherwise({redirectTo: '/'});
});

app.controller('HomeCtrl', function($rootScope, $location)
{
    $rootScope.activetab = $location.path();
});
   
app.controller('AboutCtrl', function($rootScope, $location)
{
    $rootScope.activetab = $location.path();
});

app.controller('ContactCtrl', function($rootScope, $location)
{
    $rootScope.activetab = $location.path();
});