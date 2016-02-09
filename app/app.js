(function(){
	console.info('welcome to the classic car app');

	//The code pertaining to the app itself lives here
	var app = angular.module('showroom', []);

	app.controller('ShowroomController', function(){
		var car = {
			name: 'Ferrari',
			price: 115000,
			year: 1979
		}
	});
	
})();