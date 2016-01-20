'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    
    var blocksInStore = localStorageService.get('blocks');

    $scope.block  = "";
    $scope.blocks = blocksInStore || [];

    $scope.$watch('blocks', function () {
      localStorageService.set('blocks', $scope.blocks);
    }, true);
    
    
    $scope.addBlock = function () {
      console.log($scope.block);
      if ($scope.block.length !== 0) {
        $scope.blocks.push($scope.block);
        $scope.block = '';
      }
    };
    $scope.removeBlock = function (index) {
      $scope.blocks.splice(index, 1);
    };
  });
