(function() {
  angular
    .module('appSearch')
    .directive('search',Search);

    function Search() {
       return {
         restrict: 'AE',
         replace: true,
         templateUrl: 'app/components/search/search.template.html'
      };    
    }
})();



