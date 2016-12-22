(function() {
  'use strict';
  angular
    .module('HolidayApplication')
    .controller('HolidayDetailsController', HolidayDetailsController);
  
  HolidayDetailsController.$inject = ["$http", "$stateParams"];
  
  function HolidayDetailsController($http, $stateParams) {
     var vm = this;
     vm.params = $stateParams;     
     vm.holidayDetails =[];    
  }
})();