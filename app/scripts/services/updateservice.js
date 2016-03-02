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

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
