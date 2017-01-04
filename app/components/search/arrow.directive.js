(function() {
  angular
    .module('appSearch')
    .directive('arrow',Arrow);

    function Arrow() {
       return {
         restrict: 'AE',
         replace: true,
         templateUrl: 'app/components/search/arrow.template.html'
      };    
    }
})();



