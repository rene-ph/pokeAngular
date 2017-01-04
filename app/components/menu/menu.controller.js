(function() {
  angular
  	.module('appMenu')
  	.controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['$scope','SharedMenu'];

    function MenuCtrl($scope, SharedMenu) {
      vm = this;
      vm.isHidden = true;
      vm.isMainMenu = SharedMenu.GetMainMenu();
      vm.backmenu = function () {
         SharedMenu.SetMainMenu(true);
         history.go(-1);
      }
      vm.currentPage = "";
      vm.click = function (name) {
        vm.currentPage = name;
        vm.isHidden = true;
      }

      $scope.$watch( function() {
         return SharedMenu.GetMainMenu();
       },
      function (newValue, oldValue) {
        if (newValue != null) {
            vm.isMainMenu = newValue;
        }
    }, true);
        
    }

})();