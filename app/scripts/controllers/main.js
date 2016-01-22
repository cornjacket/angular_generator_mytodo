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

    $scope.block = {
      input: '',
      name: '',
      lat:  '',
      lon:  '',
      address: ''
    };
    $scope.blocks = blocksInStore || [];

    $scope.$watch('blocks', function () {
      localStorageService.set('blocks', $scope.blocks);
    }, true);
    
    
    $scope.addBlock = function () {
      console.log($scope.block);
      // check if $scope.block is valid. Right now it should be a lat,lon pair
      // grab the data and do a reverse lookup to get the valid address.
      // if it's valid then we will save the address info as well
      if ($scope.block.input.length !== 0) {
        var inputSplit = $scope.block.input.split(','); // right now assuming lat/lon
        $scope.block.lat = inputSplit[0];
        $scope.block.lon = inputSplit[1];
        console.log($scope.block.lat);
        console.log($scope.block.lon);
        var valid = $scope.block.lat !== undefined &&
                    $scope.block.lon !== undefined &&
                    $scope.block.lat.length !== 0 && 
                    $scope.block.lon.length !== 0;
      
        if (valid) {
          if ($scope.block.name.length === 0) {
            $scope.block.name = 'Block' + ($scope.blocks.length+1);
          }
          $scope.blocks.push($scope.block);
          $scope.block = {
            name: '',
            lat:  '',
            lon:  '',
            address: ''
          };
        }
      }
    };
    
    $scope.removeBlock = function (index) {
      $scope.blocks.splice(index, 1);
    };
  });
