(function(){

	var app = angular.module('summary-showroom', []);

	app.directive('summaryDetails', function(){
		return{
			restrict: 'E',
			templateUrl: 'app/modules/summary/templates/main.html'
		};
	});	
})()
