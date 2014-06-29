var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.tweets = [{
    "author": "mrvdot",
    "text": "Check out my new Angular widget!"
  }, {
    "author": "mrvdot",
    "text": "I love directives!"
  }];

  $scope.posts = [{
      "title": "Multiple Ajax Image Upload without Refreshing Page using Jquery.",
      "url": "http://www.9lessons.info/2013/08/multiple-ajax-image-upload-refreshing.html",
      "banner": "multiple.jpg",
      "description": "Some Text1",
      "time": "Tuesday, August 6, 2013",
      "author": "Srinivas Tamada"
    }, {
      "title": "Wall Script 6.0",
      "url": "http://www.9lessons.info/2013/07/wall-script.html",
      "banner": "WallBanner.jpg",
      "description": "Some Text2",
      "time": "MONDAY, JULY 29, 2013",
      "author": "Srinivas Tamada"
    }, {
      "title": "Simple Drop Down Menu with Jquery and CSS",
      "url": "http://www.9lessons.info/2012/06/simple-drop-down-menu-with-jquery-and.html",
      "banner": "dropdown.png",
      "description": "Some Text3",
      "time": "WEDNESDAY, JUNE 20, 2012",
      "author": "Ravi Tamada"
    }

  ];





});