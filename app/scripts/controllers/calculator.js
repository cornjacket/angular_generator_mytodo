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

    $scope.mapOptions = {
      center: new google.maps.LatLng(25.197139, 55.274111),
      zoom: 15
    };
    
    $scope.addMarker = function(event, params) {
      console.log("addMarker() invoked.")
      new google.maps.Marker({
        map: $scope.MyMap,
        position: params[0].latLng
      });
    };


    $scope.loggedIn = userService.get() !== null;

    $scope.viewState = 0; // 0 = Manage Locations, 1 = Daily Prediction, 2 = Prediction History
    
    var blocksInStore    = localStorageService.get('blocks');
    var locationsInStore = localStorageService.get('locations');

    $scope.input = '';

    $scope.location = {
      name:    '',
      lat:     '',
      lon:     '',
      altitude: 0,
      address: '', // needed?
      adj:     0
    };

    $scope.block = {
      date:    '',
      name:    '',
      label:   '',
      lat:     '',
      lon:     '',
      address: '',
      adj:     0 // this previously was '0', maybe that was the problem
    };
    
    $scope.locations = locationsInStore || [];
    $scope.blocks    = blocksInStore || [];

    $scope.$watch('locations', function () {
      localStorageService.set('locations', $scope.locations);
    }, true);    

    $scope.$watch('blocks', function () {
      localStorageService.set('blocks', $scope.blocks);
    }, true);
    
    $scope.addLocation = function () {
      console.log($scope.location);
      if ($scope.location.name.length === 0) {
            $scope.location.name = 'Location' + ($scope.locations.length+1);
      }
      $scope.location.label = "AA" + ($scope.locations.length+1); // This will change later
      $scope.location.lat = '25.3221';
      $scope.location.lon = '-123.5332';
      $scope.location.altitude = 8.0;
      $scope.locations.push($scope.location);
      $scope.location = {
            name:    '',
            label:   '',
            lat:     '',
            lon:     '',
            altitude: 0,
            zipcode: '',
            adj:     0
          };
          
    };    
    
    
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
    
    $scope.removeLocation = function (index) {
      $scope.locations.splice(index, 1);
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