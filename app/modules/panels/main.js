(function(){
	var app = angular.module('product-panels', []);

		app.directive('productPanels', function(){
		return{
			restrict: 'E',
			templateUrl: 'app/modules/panels/templates/main.html',
			controller: function(){
				this.tab = 1;

				this.selectTab = function (setTab){
					this.tab = setTab;
				}

				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				}
			},
			controllerAs: 'panel'			
		};

	});

})()
