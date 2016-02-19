'use strict';

/**
 * @ngdoc service
 * @name mytodoApp.userService
 * @description
 * # userService
 * Factory in the mytodoApp.
 */
angular.module('mytodoApp')
  .factory('userService', function () {
    // Service logic
    // ...

    // very simple factory stub for now with no backend
    var username = null;

    // Public API here
    return {
      get: function () {
        return username;
      },
      login: function(name, password) {
        if (password === '1234') { 
          username = name;
        }
      },
      logout: function() {
        username = null;
      }
    };
  });
