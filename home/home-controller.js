(function () {
  'use strict';

  angular
    .module('HolidayApplication')
    .controller('HomeController', HomeController);
  HomeController.$inject = ["$http"];

  function HomeController($http) {
    
    var monthIndex, vm = this;
    vm.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    vm.holidays = [];
    vm.month = "";

    vm.showHolidays = function () {
      monthIndex = vm.months.indexOf(vm.month) + 1;
      $http({
        method: "GET",
        url: " https://holidayapi.com/v1/holidays?key=6c640c9c-42c2-475e-9f6d-c1f78b9edc89&country=US&year=2015&month=" + monthIndex
      }).then(function mySucces(response) {
        vm.holidays = response.data.holidays;
      }, function myError(response) {   
        //error handling code      
      });
    }
  }
})();