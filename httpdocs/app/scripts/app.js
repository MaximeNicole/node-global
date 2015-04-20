(function () {

  'use strict';

  /**
   * @ngdoc overview
   * @name httpdocsApp
   * @description
   * # httpdocsApp
   *
   * Main module of the application.
   */
  var app = angular.module('httpdocsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

  app.value('appConf', {
    api: 'http://localhost:1337'
  });

})();
