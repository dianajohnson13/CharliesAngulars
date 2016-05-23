// build module, controller and factory for weather api
angular.module('ParksAndEx.weather', []) 
  //should not be on MainPage (curr mainPage is in homescreen.js) 
      // - need to put a module in app.js (name ParksAndEx)

.controller('WeatherController', function($scope, WeatherFactory) {
  $scope.forcast;

  $scope.getWeather = function() {
    WeatherController.requestWeather();
  }

})

.factory('WeatherFactory', function() {

  var requestWeather = function() {
    // will facilitate request for weather..
  }

  return {

  }
});