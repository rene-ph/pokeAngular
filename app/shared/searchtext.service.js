(function () {
	angular
	  .module('app')
	  .factory('SearchText',SearchText );

	function SearchText() {

       var textToSearch = {name: ""};

       var searchtext = {
       	  GetTextToSearch: GetTextToSearch,
          AddTextToSearch: AddTextToSearch
       };

       return searchtext;

       function GetTextToSearch() {
         return textToSearch;
       }

       function AddTextToSearch(text) {
          AddText(text);
       }

        /**
        * Returns the current stored variable. It could be id or -id;
        * param {String} text: text to be stored inside the array of textToSearch.
        */
       function AddText(text) {
         textToSearch["name"] = text;
       }
	}   
})();
