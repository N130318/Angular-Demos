(function(){
		var directiveDemoApp = angular.module('directiveDemoApp');

	directiveDemoApp.directive('helloUser',function(){
		return {
			template:'<span>Hello {{name}}</span>'
		}
	})
})()