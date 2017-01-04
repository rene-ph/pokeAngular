(function() {
  angular
  	.module('appMenu')
  	.directive('menuItem', MenuItem);

  	function MenuItem() {
  		 return {
      	restrict: 'AE',
      	replace: 'true',
      	scope: {
         title: '@',
         page: '@',
         icon: '@'
      	},
      	templateUrl: 'app/components/menu/menu.template.html'
  		}; 		
  	}
  	
})();