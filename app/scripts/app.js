'use strict';


function onGoogleReady () {
	angular.bootstrap(document.getElementsByTagName('body')[0], ['mytodoApp']);
	console.log("onGoogleReady() called");
}





/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule',
    'ui.map',
    'ui.event'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])  
  .config(function ($routeProvider) {
    $routeProvider
     /* .when('/', { // this should go to the dashboard for premium users and to ETo calculator for registered users
        templateUrl: 'views/calculator.html',
        controller: 'CalculatorCtrl',
        controllerAs: 'main'
      })*/    
/*      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'main'
      })
      .when('/snapshot', {
        templateUrl: 'views/snapshot.html',
        controller: 'SnapshotCtrl',
        controllerAs: 'about'
      })
      .when('/irrigation', {
        templateUrl: 'views/irrigation.html',
        controller: 'IrrigationCtrl',
        controllerAs: 'irrigation'
      })
      .when('/integration', {
        templateUrl: 'views/integration.html',
        controller: 'IntegrationCtrl',
        controllerAs: 'integration'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'settings'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl',
        controllerAs: 'services'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })*/
      .when('/eto_tracker', {
        templateUrl: 'views/calculator.html',
        controller: 'CalculatorCtrl',
        controllerAs: 'calculator'
      })
/*      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'map'
      })*/
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });


/*
angular.module('mytodoApp')
  .controller('MainController', function($scope) {

    $scope.mapOptions = {
      center: new google.maps.LatLng(25.197139, 55.274111),
      zoom: 15
    };
    
    $scope.addMarker = function(event, params) {
      new google.maps.Marker({
        map: $scope.MyMap,
        position: params[0].latLng
      });
    };

  });*/