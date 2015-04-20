(function () {

  'use strict';

  var app = angular.module('httpdocsApp');

  app.controller('TasksCtrl', ['$scope', 'tasksFactory', 'categoriesFactory',
    function ($scope, tasksFactory, categoriesFactory) {

      $scope.categories = categoriesFactory.query();

      tasksFactory.query().$promise.then(function (tasks) {
        $scope.tasks = tasks;
      });

      $scope.addTask = function () {
        tasksFactory.save($scope.task).$promise.then(function (data) {
          for (var i = 0; i < $scope.categories.length; i++) {
            if ($scope.categories[i].id === data.category) {
              data.category = $scope.categories[i];
              break;
            }
          }
          $scope.tasks.push(data);
          $scope.task = {};
        });
      };

      $scope.removeTask = function (id) {
        tasksFactory.remove({id: id}).$promise.then(function (data) {
          console.log(data.id);
          for (var i = 0; i < $scope.tasks.length; i++) {
            if ($scope.tasks[i].id === data.id) {
              $scope.tasks.splice(i, 1);
              break;
            }
          }
        });
      };

      $scope.makeTask = function (task) {
        tasksFactory.update({id: task.id, status: !task.status}).$promise.then(function () {
          for (var i = 0; i < $scope.tasks.length; i++) {
            if ($scope.tasks[i].id === task.id) {
              $scope.tasks[i].status = !task.status;
              break;
            }
          }
        });
      };

    }
  ]);

})();
