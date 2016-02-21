(function(){
	var app = angular.module('re-view', []);

	console.log('about to use the review ctrl');

	app.directive('reView', function(){
		return{
			restrict: 'E',
			templateUrl: 'app/modules/reviews/templates/main.html',
			controller: function(){
				this.review = {};
				this.addReview = function(car){
					car.reviews.push(this.review);
					this.review = {};
				};
			},
			controllerAs: 'reviewCtrl'
		};
	});

})()