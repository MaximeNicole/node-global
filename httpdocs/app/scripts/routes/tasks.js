(function () {

  'use strict';

  var app = angular.module('httpdocsApp');

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      });
  });

})();
