angular.module('parksAndEx.weather', []) 

.controller('weatherController', function($scope, weatherFactory, servicesFactory) {
  $scope.sevenDayForecast;
  $scope.todaysWeather;

  $scope.$on('todaysWeather', function(event, args) {
    $scope.todaysWeather = args;
    $scope.$apply();
  });

  $scope.$on('sevenDayForecast', function(event, args) {
    $scope.sevenDayForecast = args.forecast;
    $scope.$apply();
  });

  $scope.$on('list-set', function(event, args) {
    var coordinates = args[0].latlng;
    $scope.generateWeather(coordinates.lat, coordinates.lng);
  });

  $scope.$on('switch-park', function(event, args) {
    $scope.generateWeather(args.lat, args.lng);
  });

  $scope.generateWeather = function(lat, lon, handleWeather) {
    latitude = lat;
    longitude = lon;

    servicesFactory.getWeather(37.8267,-122.423);
  }
})

.factory('weatherFactory', function($rootScope) {

  function handleWeather(resp) {
    console.log('handing weather', resp);
  }

  // function kelvinToFahrenheit(temp) {
  //   return (temp * 9/5) - 459.67;
  // }

  // function formatDate(timeStamp) { 
  //   var daysOfTheWeek = {0:'Sun', 1:'Mon', 2:'Tues', 3:'Wed', 4:'Thurs', 5:'Fri', 6:'Sat'};
  //   var date = new Date(timeStamp * 1000);
  //   // var dayOfMonth = date.getDate();  OPTIONAL, add in if wanted
  //   // var month = date.getMonth();
  //   var dayOfWeek = daysOfTheWeek[date.getDay()];
  //   return dayOfWeek;
  // }

  return {
    handleWeather:handleWeather
  }
});


// Sample API requests:
  // ex. seven day: 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=4efbcc23711c1a198e5242ff3bd69d7a'
  // ex. todays: 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&APPID=4efbcc23711c1a198e5242ff3bd69d7a'
