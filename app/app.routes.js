(function() {
  angular
  		.module('app', ['ui.router', 'appMenu', 'appPokemonList','appSearch','appDescription'])
  		.config(configPokedex);
  		 
      configPokedex.$inject =  ['$stateProvider'];

  		function configPokedex($stateProvider) {

			  var pokemonList = {
			    name: 'allPokemons',
			    url: '/allPokemons',
          templateUrl: 'app/layouts/all_pokemons.html'
			  }

        var descriptions = {
          name: 'descriptions',
          url: '/descriptions/:id',
          templateUrl: 'app/layouts/descriptions.html'
        }

        var otherwise = {
          name: '#',
          url: '/'
        }

        $stateProvider.state(pokemonList);
        $stateProvider.state(descriptions);
        $stateProvider.state(otherwise);
  		}

})();