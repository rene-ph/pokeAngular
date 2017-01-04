(function() {
  angular
  	.module('appDescription')
  	.controller('DescriptionCtrl', DescriptionCtrl);

  	 DescriptionCtrl.$inject = ['$stateParams', 'PokeQuery'];

  	  function DescriptionCtrl($stateParams, PokeQuery) {
        var vm = this;
        vm.evolutions = [];

        PokeQuery.DisplayPokemonJSON().then(function (data) {
          vm.pokemon = PokeQuery.GetPokemon(data, $stateParams.id);
          GetPokemonEvolutions();
        }); 
 
        function GetPokemonEvolutions() {           
          PokeQuery.DisplayPokemonJSON().then(function (data) {
            for(pointer = 0; pointer < vm.pokemon.evolution.length; pointer++) {
               vm.evolutions.push(PokeQuery.GetPokemon(data, vm.pokemon.evolution[pointer]));
            }
          }); 
        }

  	  }
})();