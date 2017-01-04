(function () {
	angular
	  .module('appPokemonList')
	  .factory('PokemonList', PokemonList);

	PokemonList.$inject = ['$http','$log','$q'];

	function PokemonList($http, $log, $q) {

       var pokemonlist = {
       	  GetPokemon: GetPokemon ,
       	  StorePokemon: StorePokemon,
          DisplayPokemon: DisplayPokemon,
          DisplayPokemonJSON: DisplayPokemonJSON
       };

       return pokemonlist;

		   function GetPokemon(id) {
		     return $http({ method: 'GET', url: 'http://pokeapi.co/api/v1/pokemon/'+id}).
                success(function(data) {
                    return data;
                }).
                error(function() {
                   $log.error('failure loading getPokemon(id) pokemonlist.service.js');
                });
		   }

		   function StorePokemon(id, data) {
         localStorage.setItem(id, JSON.stringify(data));
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

       function DisplayPokemon(model) {

        var key, 
            objPokemon,
            totalRegisters,
            getPokemonId,
            getPokemonName,
            getPokemonType;

         totalRegisters = localStorage.length;
         console.log(totalRegisters);
         for (index = 0; index <= totalRegisters-1; index++) {
            key = localStorage.key(index);
              objPokemon = JSON.parse(localStorage.getItem(key));

              getPokemonId = SetPokemonId(objPokemon);
              getPokemonName = SetPokemonName(objPokemon);
              getPokemonType = SetPokemonType(objPokemon);       


              model = model.concat([{id: getPokemonId, name: getPokemonName, types: getPokemonType }]);

             // $log.debug(getPokemonId + ' ' + getPokemonName + ' ' + getPokemonType);
           }
           return model;
      }
       
      function SetPokemonId (objPokemon) {
        return objPokemon.pkdx_id;
      }

      function SetPokemonName (objPokemon) {

        return objPokemon.name;
      }

      function SetPokemonType (objPokemon) {
         return objPokemon.types;
      }

	}   
})();
