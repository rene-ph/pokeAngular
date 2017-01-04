(function() {
  angular
  	.module('appSearch')
  	.controller('SearchCtrl', SearchCtrl);

  	 SearchCtrl.$inject = ['OrderBy', 'SearchText', '$scope'];

  	  function SearchCtrl(OrderBy,SearchText, $scope) {
        var vm = this;
        vm.order = OrderBy.AddOrder;
		vm.find = {};
		
		$scope.$watch('find.searchText', function(newVal){
			SearchText.AddTextToSearch(newVal);
		},true);

  	  }
})();