var promiseApp = angular.module('promiseApp');
promiseApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "promises/promise-demo1.html",
      controller: "Demo1Controller"
    })
    .when("/demo2", {
      templateUrl: "promises/promise-demo2.html",
      controller: "Demo2Controller",
      controllerAs: "vm"
    })
    .otherwise({
      redirectTo: "/"
    });
  //$locationProvider.html5Mode(true);
});
