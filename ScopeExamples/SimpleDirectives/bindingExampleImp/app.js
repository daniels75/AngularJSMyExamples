var app = angular.module('mainApp', []);

app.controller('HelloCtrl', function($scope) {
  $scope.name = 'World';
});

app.controller('MyDirectiveCtrl', function ($scope) {
        $scope.foo = 'Hello Dan!';
        $scope.updateFoo = function (newFoo) {
            $scope.foo = newFoo;
        }
});

app.directive('myComponent', function () {
        return {
            restrict:'E',
            scope:{
                /* NOTE: Normally I would set my attributes and bindings
                to be the same name but I wanted to delineate between 
                parent and isolated scope. */                
                isolatedAttributeFoo:'@attributeFoo',
                isolatedBindingFoo:'=bindingFoo',
                isolatedExpressionFoo:'&'
            }        
        };
});
    