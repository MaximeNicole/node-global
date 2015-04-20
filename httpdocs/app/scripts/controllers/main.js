'use strict';

/**
 * @ngdoc function
 * @name httpdocsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the httpdocsApp
 */
angular.module('httpdocsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
