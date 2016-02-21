(function(){
	var app = angular.module('test-module',[]);

	app.directive('tempModule', function(){
		return {
			restrict: 'E',
			templateUrl: 'app/modules/temp/templates/main.html'
		};
	});

})()