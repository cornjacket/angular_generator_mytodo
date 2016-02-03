'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService, $location) {
    
    // NOT SURE WHAT TO DO WITH THIS, IF THIS IS NEEDED. I WANT AN EASY WAY TO LOGIN FOR THE USER.
    
    var previousUser = localStorageService.get('previousUser');

    $scope.user = {};

    $scope.loggedIn = false;
    $scope.previousUser = previousUser || false;

    $scope.$watch('previousUser', function () {
      localStorageService.set('previousUser', $scope.previousUser);
    }, true);
    
    $scope.signup = function() {
      $location.path('/signup');
    };
    
    $scope.login = function() {
      console.log($scope.username + ' with a password of '+ $scope.password);
      $scope.loggedIn = true;
      $scope.user.name = $scope.username;
      $location.path('/dashboard');
    };
 
    $scope.logout = function() {
      $scope.loggedIn = false;
    };
 
    console.log('loggedIn : '+$scope.loggedIn);
 
  });
