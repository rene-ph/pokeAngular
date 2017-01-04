(function () {
	angular
	  .module('app')
	  .factory('PokeQuery',PokeQuery );

    PokeQuery.$inject = ['$http','$q'];

	function PokeQuery($http, $q) {

     var pokemon = {
       	  GetPokemon: GetPokemon,
          DisplayPokemonJSON: DisplayPokemonJSON
       };

       return pokemon;

        /**
        * Gets the pokemon with the Id specified 
        * param {Object} jsonPokemon: JSON that contains all the pokemons
        * param {Int} Id: pokemon's ID to find in the JSON. 
        */
       function GetPokemon(jsonPokemon, Id) {
         for(index = 0; index <= jsonPokemon.length; index++) {
           if(jsonPokemon[index].id == Id) {
             return jsonPokemon[index];
            }
         } 
       }


        function DisplayPokemonJSON() {
         var deferred = $q.defer();
          $http.get('/pokemonJSON/pokemons.json')
            .success(function (data) {
               deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                $log.debug("error");
            });
          return deferred.promise;
       }
	}   
})();

