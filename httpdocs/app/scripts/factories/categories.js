(function () {

  'use strict';

  var app = angular.module('httpdocsApp');

  app.factory('categoriesFactory', ['appConf', '$resource',
    function (appConf, $resource) {
      return $resource(appConf.api + '/categories', {},
        {
          'get': {method: 'GET'},
          'save': {method: 'POST'},
          'query': {method: 'GET', isArray: true},
          'remove': {method: 'DELETE'}
        }
      );
    }
  ]);

})();
