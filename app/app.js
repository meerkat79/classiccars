(function(){
	console.info('welcome to the classic car app');

	//The code pertaining to the app itself lives here
	var app = angular.module('showroom', []);

	app.controller('ShowroomController', function(){

		var cars = [{
			name: 'Ferrari',
			price: 115000,
			year: 1979,
			description: 'This is an excellent classic that has stood the test of time.',
			canPurchase: true,
			soldOut: false
		}];

		this.cars = cars;
		console.info(cars);

	});
	
})();