'use strict';

describe('Service: elasticService', function () {

  // load the service's module
  beforeEach(module('elasticWebAppApp'));

  // instantiate service
  var elasticService;
  beforeEach(inject(function (_elasticService_) {
    elasticService = _elasticService_;
  }));

  it('should do something', function () {
    expect(!!elasticService).toBe(true);
  });

});
