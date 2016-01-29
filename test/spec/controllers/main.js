'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
    scope;

  var validBlock = {
     name: '',
     lat:  '25',
     lon:  '45',
     address: ''
  }

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have no items to start', function () {
    expect(scope.blocks.length).toBe(0);
  });
  
  it('should add items to the list', function () {
    scope.block = 'Test 1';
    scope.addBlock();
    expect(scope.blocks.length).toBe(1);
  });
  
  it('should add then remove an item from the list', function () {
    scope.block = 'Test 1';
    scope.addBlock();
    scope.removeBlock(0);
    expect(scope.blocks.length).toBe(0);
  });
  
  it('should not add an empty item to the list', function () {
    scope.block = '';
    scope.addBlock();
    expect(scope.blocks.length).toBe(0);
  });  
  
  
});
