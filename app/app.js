var app = angular.module('myApp', ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "view/photos/photos.html"
    })
    .when("/itsme", {
      templateUrl: "view/post/post.html"
    })
    .when("/my", {
      templateUrl: "view/todos/todos.html"
    })
    .when("/mine", {
      templateUrl: "view/users/users.html"
    })
    .when("/deals", {
      templateUrl: "view/deals/deals.html"
    })
});

      
