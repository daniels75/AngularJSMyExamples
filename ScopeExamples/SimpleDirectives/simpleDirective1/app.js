var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

app.directive('myDirective', function(){
    return {
      restrict: 'E',
      replace: true,
      template: '<a href="http://google.com">Click me to go to Google</a>'
    }
});

app.directive('myDirectiveWithArgsDontWork', function(){
return {
	restrict: 'A',
	replace: true,
	template: '<a href="{{myUrl}}">{{myLinkText}}</a>'
}
});

app.directive('myDirective1', function() {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      myUrl: '@',
      myLinkText: '@'
    },
    template: '<a href="{{myUrl}}">{{myLinkText}}</a>'
  };
});

app.directive('myDirective2', function() {
      return {
        restrict: 'A',
        replace: true,
        scope: {
          myUrl: '=someAttr',
          myLinkText: '@'
        },
        template: '\
          <div>\
            <label>My Url Field:</label>\
            <input type="text" ng-model="myUrl" />\
            <a href="{{myUrl}}">{{myLinkText}}</a>\
          </div>\
        '
      }
    });