'use strict';

/**
 * @ngdoc service
 * @name mytodoApp.locationService
 * @description
 * # locationService
 * Factory in the mytodoApp.
 */
angular.module('mytodoApp')
  .factory('locationService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
