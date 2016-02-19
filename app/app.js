(function(){
	console.info('welcome to the classic car app');

	//The code pertaining to the app itself lives here
	var app = angular.module('showroom', []);

	app.directive('summaryDetails', function(){
		return{
			restrict: 'E',
			templateUrl: 'app/modules/summary/templates/main.html'
		};
	});	


	app.controller('ShowroomController', function(){

		this.cars = cars;
	});

	var cars = [
		{
			name: 'Bentley Continental',
			make: 'Bentley',
			model: 'Continental',
			price: 115000,
			year: 1964,
			canPurchase: true,
			soldOut: false,
			images:[
				{
					full: 'BENTLEY-CONTINENTAL-S3.jpg',
					thumb: 'BENTLEY-CONTINENTAL-S3_sml.jpg'
				}
			],
			description: '1964 Bently need I say more',
			specification: 'V8 engin kicks butt',
			reviews: [
				{
					stars: '5',
					msg:'What a car! I drove this when I was just a young lad. I ended up crashing it into a thicket but the car didn\'t even have a scratch.',
					author: 'John Doe'
				},
				{
					stars: '1',
					msg:'This car be old yo!',
					author: 'Michael Bubbles'
				},
				{
					stars: '3',
					msg:'This is a good classic car but not my first choice',
					author: 'Magnum PI'
				}
			]
		},
		{
			name: 'Ferrari 308 GTS',
			make: 'Ferrari',
			model: '308 GTS',			
			price: 110000,
			year: 1975,
			canPurchase: true,
			soldOut: false,
			images:[
				{
					full: 'FERRARI-308-GTSI.jpg',
					thumb: 'FERRARI-308-GTSI_sml.jpg'
				}
			],
			description: '1964 Bently need I say more',
			specification: 'V8 engin kicks butt',
			reviews: [
				{
					stars: '5',
					msg:'What a car! I drove this when I was just a young lad. I ended up crashing it into a thicket but the car didn\'t even have a scratch.',
					author: 'John Doe'
				},
				{
					stars: '1',
					msg:'This car be old yo!',
					author: 'Michael Bubbles'
				},
				{
					stars: '3',
					msg:'This is a good classic car but not my first choice',
					author: 'Magnum PI'
				}
			]		
		},
		{
			name: 'Jaguar E-Type',
			make: 'Jaguar',
			model: 'E-Type',			
			price: 130000,
			year: 1964,
			canPurchase: true,
			soldOut: false,
			images:[
				{
					full: 'JAGUAR-E-TYPE.jpg',
					thumb: 'JAGUAR-E-TYPE_sml.jpg'
				}
			],
			description: '1964 Bently need I say more',
			specification: 'V8 engin kicks butt',
			reviews: [
				{
					stars: '5',
					msg:'What a car! I drove this when I was just a young lad. I ended up crashing it into a thicket but the car didn\'t even have a scratch.',
					author: 'John Doe'
				},
				{
					stars: '1',
					msg:'This car be old yo!',
					author: 'Michael Bubbles'
				},
				{
					stars: '3',
					msg:'This is a good classic car but not my first choice',
					author: 'Magnum PI'
				}
			]				
		},
		{
			name: 'Mercedes Benz 190 SL',
			make: 'Mercedes Benz',
			model: '190 SL',		
			price: 40000,
			year: 1961,
			canPurchase: true,
			soldOut: false,
			images:[
				{
					full: 'MERCEDES-BENZ-190-SL.jpg',
					thumb: 'MERCEDES-BENZ-190-SL_sml.jpg'
				}
			],
			description: '1964 Bently need I say more',
			specification: 'V8 engin kicks butt',
			reviews: [
				{
					stars: '5',
					msg:'What a car! I drove this when I was just a young lad. I ended up crashing it into a thicket but the car didn\'t even have a scratch.',
					author: 'John Doe'
				},
				{
					stars: '1',
					msg:'This car be old yo!',
					author: 'Michael Bubbles'
				},
				{
					stars: '3',
					msg:'This is a good classic car but not my first choice',
					author: 'Magnum PI'
				}
			]				
		},
		{
			name: 'Porche 911',
			make: 'Porche',
			model: '911',			
			price: 83000,
			year: 1979,
			canPurchase: true,
			soldOut: false,
			images:[
				{
					full: 'PORSCHE-911.jpg',
					thumb: 'PORSCHE-911_sml.jpg'
				}
			],
			description: '1964 Bently need I say more',
			specification: 'V8 engin kicks butt',
			reviews: [
				{
					stars: '5',
					msg:'What a car! I drove this when I was just a young lad. I ended up crashing it into a thicket but the car didn\'t even have a scratch.',
					author: 'John Doe'
				},
				{
					stars: '1',
					msg:'This car be old yo!',
					author: 'Michael Bubbles'
				},
				{
					stars: '3',
					msg:'This is a good classic car but not my first choice',
					author: 'Magnum PI'
				}
			]					
		}				
	]

	app.controller('PanelController', function(){

		this.tab = 1;

		this.test = function(){
			console.warn('ctrl in operation');
		}

		this.selectTab = function (setTab){
			this.tab = setTab;
		}

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(car){
			car.reviews.push(this.review);

			this.review = {};
		};

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