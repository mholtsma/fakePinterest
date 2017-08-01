var app = angular.module('fakePinterest', []);

app.controller('mainCtrl', [
  '$scope',
  function($scope) {
    $scope.test = 'Hello, World!';
  }
])