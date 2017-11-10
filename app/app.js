(function(){

	//The code pertaining to the app itself lives here
	var app = angular.module('showroom', ['summary-showroom', 'product-panels', 'test-module', 're-view']);

	app.controller('ShowroomController', ['$http',function($http){

		var obj = this;

		obj.cars = [];

		$http.get('./data/data.json').success(function(data){
			obj.cars = data;
		});

		console.info(obj);

	}]);	
})();