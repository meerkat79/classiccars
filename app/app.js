(function(){
	console.info('welcome to the classic car app');

	//The code pertaining to the app itself lives here
	var app = angular.module('showroom', []);

	app.controller('ShowroomController', function(){

		var cars = [
		{
			name: 'Ferrari',
			price: 155000,
			year: 1979,
			description: 'This is an excellent classic that has stood the test of time.',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					thumb: '',
					full: 'assets/img/FERRARI-308-GTSI.jpg'
				}
			]
		},
		{
			name: 'Bentley',
			price: 139000,
			year: 1967,
			description: 'This is an excellent classic that has stood the test of time.',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Jaguar',
			price: 120000,
			year: 1964,
			description: 'This is an excellent classic that has stood the test of time.',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Mercedes',
			price: 115000,
			year: 1958,
			description: 'This is an excellent classic that has stood the test of time.',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Porche',
			price: 124500,
			year: 1981,
			description: 'This is an excellent classic that has stood the test of time.',
			canPurchase: true,
			soldOut: false
		}];

		this.cars = cars;
		console.info(cars);

	});
	
})();