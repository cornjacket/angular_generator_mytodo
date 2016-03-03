'use strict';

describe('Service: predictionHistoryService', function () {

  // load the service's module
  beforeEach(module('mytodoApp'));

  // instantiate service
  var predictionHistoryService;
  beforeEach(inject(function (_predictionHistoryService_) {
    predictionHistoryService = _predictionHistoryService_;
  }));

  it('should do something', function () {
    expect(!!predictionHistoryService).toBe(true);
  });

});
