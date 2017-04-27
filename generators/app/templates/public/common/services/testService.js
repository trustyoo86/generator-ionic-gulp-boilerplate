/**
 * test service
 * @ngdoc service
 * @name testService
 */
var testService = function () {
  return {
    getTest : function () {
      return 'test';
    }
  }
};

app.service('testService', testService);
