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

    $scope.addMarker = function(event, params) {
      console.log("addMarker() invoked.");
      new google.maps.Marker({
        map: $scope.myMap,
        position: params[0].latLng
      });
      console.log(params[0]);
      // addMarker inits the form for adding a new location
      $scope.location = {
        name:    'Loc' + ($scope.locations.length+1),
        lat:     '36.961336', // these should come from google.maps
        lon:     '-120.060718', // these should come from google.maps
        altitude: 0,
        address: '', // needed?
        crop:    'figs',
        adj:     0
      };
      $scope.showLocationDetails = true;
      // there needs to be a lookup based on the zipcode, therefore there will be a lat/lon to zipcode conversion,
      // maybe this is done on the browser, maybe done on the server.
    };

    var update_dailies = function() {
      $scope.dailies = $scope.locations.map(function(location) {
          var prediction1 =  1.0; //(Math.floor((Math.random() ) + 1)+Math.random()).toFixed(2);
          var prediction2 =  1.0; //(Math.floor((Math.random() ) + 1)+Math.random()).toFixed(2);
          var prediction3 =  1.0; //(Math.floor((Math.random() ) + 1)+Math.random()).toFixed(2);
          var prediction4 =  1.0; //(Math.floor((Math.random() ) + 1)+Math.random()).toFixed(2);        
          
          return {
            date:                 Date.now(),
            name:                 location.name,
            prediction1:          prediction1,
            prediction2:          prediction2,
            prediction3:          prediction3,
            prediction4:          prediction4,
            fourDayETo_prediction: 5 //(prediction1+prediction2+prediction3+prediction4)
          };
        });
    };

    var update_history = function() {
      // for 30 days do the following
      //   iterate over each daily, 
      //     create a new history record and save each daily's values into new history record
      //     add i days to the new history record's date
      //     add new history record to the list of all histories
      console.log("Mocking history");
    
      var next_day_history; // keep track of all the updates for the next day
      $scope.history = [];
      for (var day=1; day<29; day=day+1) {
        next_day_history = $scope.dailies.map(function(daily) {
          //var num = Number(daily.prediction1)+Math.random();
          //num = num.toFixed(2);
          var offset      = Number(Math.random());
          var prediction1 = Number(daily.prediction1)+offset;
          var prediction2 = Number(daily.prediction2)+offset;
          var prediction3 = Number(daily.prediction3)+offset;
          var prediction4 = Number(daily.prediction4)+offset;
          var fourDayETo_prediction = Number((prediction1+prediction2+prediction3).toFixed(2)); //(prediction1+prediction2+prediction3+prediction4);
          return {
            date:                  new Date().setFullYear(2016, 1, day),
            name:                  daily.name,
            prediction1:           prediction1,
            prediction2:           prediction2,
            prediction3:           prediction3,
            prediction4:           prediction4,
            fourDayETo_prediction: fourDayETo_prediction
          };
        });
        $scope.history = $scope.history.concat(next_day_history);
        console.log(next_day_history);
      }
      console.log("Full history");
      console.log($scope.history);
    };

    $scope.findLocation = function () {
      console.log("findLocation() invoked");
      
      // instead of using an object, define each param of the existing object because the objec is being watched.
      console.log($scope.mapOptions);
      //$scope.mapOptions.center = new google.maps.LatLng(45.197139, -143.274111);
      // not sure 
     // $scope.mapOptions.zoom = 100;
    };
    
    $scope.addLocation = function () {
      console.log("addLocation invoked");
      $scope.locations.push($scope.location);
      $scope.location = {
            name:    '',
            lat:     '',
            lon:     '',
            altitude: 0,
            adj:     0
          };
      update_dailies();
      update_history();
      $scope.showLocationDetails = false;
    };    
    
    $scope.cancelAddLocation = function() {
      console.log("cancelAddLocation invoked");
      // need to remove the marker here...
      $scope.showLocationDetails = false;
    };  
    
    $scope.removeLocation = function (index) {
      $scope.locations.splice(index, 1);
      update_dailies();
      update_history();
    };

    $scope.showGraph           = true;
    $scope.showLocationDetails = false;
    var blocksInStore    = localStorageService.get('blocks');
    var locationsInStore = localStorageService.get('locations');

    $scope.locations = locationsInStore || [];
    $scope.blocks    = blocksInStore || [];

    $scope.location = {
      name:     'Loc' + ($scope.locations.length+1),
      lat:      '36.961336', // these should come from google.maps
      lon:      '-120.060718', // these should come from google.maps
      altitude: 0,
      address:  '', // needed?
      adj:      0
    };
 
    $scope.isCollapsed = false;

    $scope.mapOptions = {
      center: new google.maps.LatLng($scope.location.lat, $scope.location.lon),
      zoom: 12
    };

    $scope.loggedIn = userService.get() !== null;
    $scope.input = '';
    
    $scope.$watch('locations', function () {
      localStorageService.set('locations', $scope.locations);
    }, true);    

    $scope.$watch('blocks', function () {
      localStorageService.set('blocks', $scope.blocks);
    }, true);    
    
    update_dailies();
    update_history();
    
    console.log(locationService.someMethod());
    console.log($scope.mapOptions);
    
    //$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.labels = $scope.history.map(function(update, index, array) {
      return index+1; //update.date.toDateString;
    });
    console.log("$scope.labels");
    console.log($scope.labels);
    $scope.series = ['4D ETo Prediction', '2nd Day Prediction']; //'1st Day Prediction'
    
    $scope.data = [ 
      $scope.history.map(function(update) { return Number(update.fourDayETo_prediction); }), //prediction1); }), 
      $scope.history.map(function(update) { return Number(update.prediction2); })
    ];
      
    console.log("$scope.history's data incrementing. This failed");
    console.log($scope.data);  
      
/*    $scope.data = [
      $scope.history.map(function(elem, index, array) {
        return index;
      }),
      $scope.history.map(function(elem, index, array) {
        return 30-index;
      })
    ];
*/      
    console.log("$scope.history's data incrementing");
    console.log($scope.data);
    //$scope.data = [
    //  [65, 59, 80, 81, 56, 55, 40],
    //  [28, 48, 40, 19, 86, 27, 90]
    //];
    
    $scope.onClick = function (points, evt) {
    console.log(points, evt);
    };
    
});  