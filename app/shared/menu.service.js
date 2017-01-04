(function () {
	angular
	  .module('app')
	  .factory('SharedMenu',SharedMenu );

	function SharedMenu() {

       var isMainMenu = true;
         
       var sharedmenu = {
         SetMainMenu : SetMainMenu,
         GetMainMenu : GetMainMenu
       };

       return sharedmenu;
   
        /**
        * Sets if we are going to render a menu or a title. 
        */
       function SetMainMenu(isMenu) {
         isMainMenu = isMenu;
       }

        /**
        * Retrives if its a menu or title. 
        */
       function GetMainMenu() {
         return isMainMenu;
       }

	}   
})();
