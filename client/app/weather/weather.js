angular.module('parksAndEx.weather', []) 

.controller('weatherController', function($scope, weatherFactory, servicesFactory) {
  $scope.sevenDayForecast;
  $scope.todaysWeather;

  $scope.$on('forecast', function(event, args) {
    $scope.sevenDayForecast = args.forecast;
    $scope.todaysWeather = args.todaysWeather;
    $scope.$apply();
  });

  $scope.$on('list-set', function(event, args) {
    var coordinates = args[0].latlng;
    $scope.generateWeather(coordinates.lat, coordinates.lng);
  });

  $scope.$on('switch-park', function(event, args) {
    $scope.generateWeather(args.lat, args.lng);
  });

  $scope.generateWeather = function(lat, lon) {
    servicesFactory.getWeather(lat,lon);
  }
})

.factory('weatherFactory', function($rootScope) {

  function handleWeather(resp) {
    var today = resp.data.currently;
    var days = resp.data.daily.data;
    handleForecast(days, today)
  }

  function handleForecast(days, today){
    var forecast = {};
    var todaysWeather = {};
    for (var i = 0; i < days.length; i++) {
      var day = days[i];
      if (i > 0) {
        forecast[i - 1] =  {
          date: formatDate(day.time), 
          highTemp: Math.round(day.temperatureMax),
          lowTemp: Math.round(day.temperatureMin),
          description: day.summary,
          // icon: day.icon
        }
      } else {
        todaysWeather =  {
          date: formatDate(day.time),
          highTemp: Math.round(day.temperatureMax),
          lowTemp: Math.round(day.temperatureMin),
          description: day.summary,
          // icon: day.icon
        }
      }
    }
    todaysWeather.currTemp = Math.round(today.temperature);
    $rootScope.$broadcast('forecast', {
      forecast: forecast,
      todaysWeather: todaysWeather,
    });
  }


  function formatDate(timeStamp) { 
    var daysOfTheWeek = {0:'Sun', 1:'Mon', 2:'Tues', 3:'Wed', 4:'Thurs', 5:'Fri', 6:'Sat'};
    var date = new Date(timeStamp * 1000);
    // var dayOfMonth = date.getDate();  OPTIONAL, add in if wanted
    // var month = date.getMonth();
    var dayOfWeek = daysOfTheWeek[date.getDay()];
    return dayOfWeek;
  }

  return {
    handleWeather:handleWeather
  }
});
