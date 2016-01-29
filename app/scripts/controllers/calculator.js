'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:CalculatorCtrl
 * @description
 * # CalculatorCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('CalculatorCtrl', function ($scope, localStorageService, locationService) {
    
    var blocksInStore = localStorageService.get('blocks');

    $scope.input = '';

    $scope.block = {
      name:    '',
      lat:     '',
      lon:     '',
      address: '',
      adj:     '0'
    };
    $scope.blocks = blocksInStore || [];

    $scope.$watch('blocks', function () {
      localStorageService.set('blocks', $scope.blocks);
    }, true);
    
    
    $scope.addBlock = function () {
      console.log($scope.block);
      // check if block is valid. Right now it should be a lat,lon pair
      // grab the data and do a reverse lookup to get the valid address.
      // if it's valid then we will save the address info as well
/*      if ($scope.input.length !== 0) {
        var inputSplit = $scope.input.split(','); // right now assuming lat/lon
        block.lat = inputSplit[0];
        block.lon = inputSplit[1];
        console.log(block.lat);
        console.log(block.lon);
        var valid = block.lat !== undefined &&
                    block.lon !== undefined &&
                    block.lat.length !== 0 && 
                    block.lon.length !== 0;
      
        if (valid) {
          if (block.name.length === 0) {
            block.name = 'Block' + ($scope.blocks.length+1);
          }
          $scope.blocks.push(block);
          $scope.input = '';
          block = {
            name: '',
            lat:  '',
            lon:  '',
            address: ''
          };
        }
      }
*/      
      if ($scope.block.name.length === 0) {
            $scope.block.name = 'Block' + ($scope.blocks.length+1);
      }
      $scope.blocks.push($scope.block);
      $scope.block = {
            name:    '',
            lat:     '',
            lon:     '',
            address: '',
            adj:     '0'
          };
          
    };
    
    $scope.removeBlock = function (index) {
      $scope.blocks.splice(index, 1);
    };
    
    
    console.log(locationService.someMethod());
    
  });  
