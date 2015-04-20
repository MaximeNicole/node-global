(function () {

  'use strict';

  var app = angular.module('httpdocsApp');

  app.factory('tasksFactory', ['appConf', '$resource',
    function (appConf, $resource) {
      return $resource(appConf.api + '/tasks/:id', {id: '@id'},
        {
          'get': {method: 'GET'},
          'save': {method: 'POST'},
          'query': {method: 'GET', isArray: true},
          'remove': {method: 'DELETE'},
          'update': {method: 'PUT'}
        }
      );
    }
  ]);

})();
