(function () {
	angular
	  .module('app')
	  .factory('OrderBy',OrderBy );

	function OrderBy() {
   
       var state = ['id'];

       var orderby = {
       	  GetOrder: GetOrder,
          AddOrder: AddOrder
       };

       return orderby;
   
        /**
        * Returns the current stored variable. It could be id or -id;
        */
       function GetOrder() {
         return state;
       }

        /**
        * Executes the function to add a new value inside the state variable. 
        */
       function AddOrder() {
         ToggleOnOff();
       }

        /**
        * Stores the string id or -id inside the variable state. Everytime is called it switches 
        * between id and -id. 
        */
       function ToggleOnOff() {
         if(state.length > 0 && state[0] === 'id') {
           state.pop();
           state.push('-id');
        } else if(state.length > 0 && state[0] === '-id'){
           state.pop();
           state.push('id');
        } else {
           state.push('id');
        }
       }
	}   
})();
