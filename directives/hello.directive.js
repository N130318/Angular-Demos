(function(){
		var directiveDemoApp = angular.module('directiveDemoApp');

	directiveDemoApp.directive('helloUser',function(){
		return {
			template:'<span ng-click="showDetails()">Hello {{name}}</span>',
			controller: function($scope){
				$scope.showDetails = function(){
					alert("Student-AU 2017");
				}
			}
		}
	})
})()