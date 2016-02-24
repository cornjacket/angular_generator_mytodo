'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService, $location, userService) {
    
    
    // NOT SURE WHAT TO DO WITH THIS, IF THIS IS NEEDED. I WANT AN EASY WAY TO LOGIN FOR THE USER.
    
    var previousUser = localStorageService.get('previousUser');

    $scope.user = {};

    // fake userService just for quick testing
    $scope.loggedIn = userService.get() !== null;
    $scope.previousUser = previousUser || false;

    $scope.$watch('previousUser', function () {
      localStorageService.set('previousUser', $scope.previousUser);
    }, true);
    
    $scope.login = function() {
      console.log($scope.username + ' with a password of '+ $scope.password);
      userService.login($scope.username, $scope.password);
      $scope.user.name = userService.get();
      $scope.loggedIn = userService.get() !== null;
      if ($scope.loggedIn) {
        $location.path('/eto_tracker');
      }
    };
 
    $scope.logout = function() {
      $scope.username = null;
      $scope.password = null;
      userService.logout();
      $scope.loggedIn = false;
      $location.path('/');
    };
 
    console.log('loggedIn : '+$scope.loggedIn);
 
  });
