(function() {
  angular
  	.module('appPokemonList')
  	.controller('PokemonListCtrl', PokemonListCtrl);

  	 PokemonListCtrl.$inject = ['$log','PokemonList','OrderBy','SearchText','SharedMenu'];

  	  function PokemonListCtrl($log, PokemonList, OrderBy, SearchText, SharedMenu) {
        var vm = this;
        vm.order = OrderBy.GetOrder();
        vm.setMenu = function() {
          SharedMenu.SetMainMenu(false);
        };
        PokemonList.DisplayPokemonJSON().then(function (data) {
          vm.pokemons = data;
        });
        vm.searchText = SearchText.GetTextToSearch();
  	  }
})();