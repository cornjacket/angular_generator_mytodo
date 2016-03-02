'use strict';

/**
 * @ngdoc service
 * @name mytodoApp.updateService
 * @description
 * # updateService
 * Factory in the mytodoApp.
 */
angular.module('mytodoApp')
  .factory('updateService', function () {
    // Service logic
    // ...

        // Public API here
    return {
      get: function (locations) {
        
          var dailies = locations.map(function(location) {
            var prediction1 =  1.0; 
            var prediction2 =  1.0; 
            var prediction3 =  1.0; 
            var prediction4 =  1.0;         
          
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
        
          return dailies;
      }
    };
    
  });
