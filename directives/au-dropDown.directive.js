(function() {
  var directiveDemoApp = angular.module('directiveDemoApp');

  directiveDemoApp.directive('auDropDown', function() {
    return {
      scope: {
        data: '=',
        displayVal: '@',
        //selectedVal: '=',

      },
      require: '?ngModel',

      template: '<select ng-options="d as d[displayVal] for d in data" ng-model="selectedVal"></select>',
      controller: function($scope) {

      },
      link: function(scope, elem, attrs, ngModelCtrl) {
        scope.$watch('selectedVal', function(newVal, oldVal) {
          if (newVal !== oldVal) {
            ngModelCtrl.$setViewValue(newVal);
          }
        })
      }
    }
  })
})()
