var myApp = angular.module('app', ['mymodule']);

myApp.controller('MainCtrl', function($scope, helloWorld, helloWorldFromFactory, helloWorldFromService) {
  $scope.name = 'World';
      $scope.hellos = [
        helloWorld.sayHello(),
        helloWorldFromFactory.sayHello(),
        helloWorldFromService.sayHello()];
});

