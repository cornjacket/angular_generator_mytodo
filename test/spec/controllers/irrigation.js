'use strict';

describe('Controller: IrrigationCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var IrrigationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IrrigationCtrl = $controller('IrrigationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IrrigationCtrl.awesomeThings.length).toBe(3);
  });
});
