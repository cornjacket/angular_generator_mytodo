'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService, locationService) {
    
    var blocksInStore = localStorageService.get('blocks');

    $scope.input = '';

    var block = {
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
      console.log(block);
      // check if block is valid. Right now it should be a lat,lon pair
      // grab the data and do a reverse lookup to get the valid address.
      // if it's valid then we will save the address info as well
      if ($scope.input.length !== 0) {
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
    };
    
    $scope.removeBlock = function (index) {
      $scope.blocks.splice(index, 1);
    };
    
    
    console.log(locationService.someMethod());
    
  });
