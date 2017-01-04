(function() {
  angular
  	.module('appPokemonList')
  	.directive('pokemonList', PokemonList);

  	function PokemonList() {
  		 return {
         restrict: 'AE',
         scope: {
           pkmid: '@pkmid',
           pkmname: '@pkmname',
           pkmtype: '@pkmtype',
           imageid: '@imageid',
           showicons: '@showicons',
           pkmlvl: '@pkmlvl',
           showlvl: '@showlvl',
           setmenu: '&'
      	 },
      	 templateUrl: 'app/components/pokemonList/pokemonlist.template.html',
          link: function(scope, elem, attr) {
            scope.type = JSON.parse(scope.pkmtype);
        }
  		}; 		
  	}
})();










