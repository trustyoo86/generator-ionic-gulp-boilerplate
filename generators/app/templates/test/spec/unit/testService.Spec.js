describe('test service test', function () {
  'use strict';

  beforeEach(module('myApp'));

  it('test service get test', inject(function (testService) {
    expect(testService.getTest()).to.be.equal('test');
  }));
});
