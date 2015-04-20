'use strict';

/**
 * @ngdoc function
 * @name httpdocsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the httpdocsApp
 */
angular.module('httpdocsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
