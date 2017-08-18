var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/overview", {
      templateUrl : "main.html",
      controller: "mainController"
    })
    .otherwise({
      templateUrl : "main.html",
      controller: "mainController"
    });
});
