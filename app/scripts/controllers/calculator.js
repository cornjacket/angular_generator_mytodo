'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:CalculatorCtrl
 * @description
 * # CalculatorCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('CalculatorCtrl', function ($scope, $log, localStorageService, locationService, userService) {

    $scope.loggedIn = userService.get() !== null;
    
    var blocksInStore = localStorageService.get('blocks');

    $scope.input = '';

    $scope.block = {
      date:    '',
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
      $scope.block.date = Date.now();
      $scope.block.lat = '25.3221';
      $scope.block.lon = '-123.5332';
      $scope.block.prediction1 = 1.2;
      $scope.block.prediction2 = 2.5;
      $scope.block.prediction3 = 2.2;
      $scope.block.prediction4 = 1.0;
      $scope.blocks.push($scope.block);
      $scope.block = {
            name:    '',
            lat:     '',
            lon:     '',
            zipcode: '',
            adj:     '0'
          };
          
    };
    
    $scope.removeBlock = function (index) {
      $scope.blocks.splice(index, 1);
    };
    
    
    console.log(locationService.someMethod());
    
    
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;    
    
    
    
    
  });  