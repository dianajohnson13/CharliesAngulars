angular.module('parksAndEx.weather', []) 

.controller('weatherController', function($scope, weatherFactory) {
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
    weatherFactory.generateWeather(coordinates.lat, coordinates.lng);
  });

  $scope.$on('switch-park', function(event, args) {
    weatherFactory.generateWeather(args.lat, args.lng);
  });
})

.factory('weatherFactory', function($rootScope) {
  var apiKey = '4efbcc23711c1a198e5242ff3bd69d7a';
  var urlTodayStart = '//api.openweathermap.org/data/2.5/weather?';
  var urlSevenDayStart = '//api.openweathermap.org/data/2.5/forecast/daily?';
  
  var latitude;
  var longitude;

  function generateWeather(lat, lon) {
    latitude = lat;
    longitude = lon;

    httpGetAsync(setUrl(urlTodayStart), handleTodaysForecast);
    httpGetAsync(setUrl(urlSevenDayStart), handleSevenDayForecast);
  }

  function handleTodaysForecast(resp){
    $rootScope.$broadcast('todaysWeather', { 
      currTemp: Math.round(kelvinToFahrenheit(resp.main.temp)),
      highTemp: Math.round(kelvinToFahrenheit(resp.main.temp_max)),
      lowTemp: Math.round(kelvinToFahrenheit(resp.main.temp_min)),
      description: resp.weather[0].description,
      iconLink: '//openweathermap.org/img/w/' + resp.weather[0].icon + '.png'
    });
  }

  function handleSevenDayForecast(resp){
    var forecast = {};
    var allDays = resp.list;
    for (var i = 1; i < resp.list.length; i++) {
      var day = allDays[i];
      forecast[i] =  {
        date: formatDate(day.dt), /// FINISH THIS FUNCTION
        highTemp: Math.round(kelvinToFahrenheit(day.temp.max)),
        lowTemp: Math.round(kelvinToFahrenheit(day.temp.min)),
        description: day.weather[0].description,
        iconLink: '//openweathermap.org/img/w/' + day.weather[0].icon + '.png'
      }
    }
    $rootScope.$broadcast('sevenDayForecast', {
      forecast: forecast
    });
  }

  function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        callback(JSON.parse(xmlHttp.responseText));
      }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
  }

  function setUrl(urlStart) {
    return urlStart + 'lat=' + latitude + '&lon=' + longitude + '&APPID=' + apiKey;
  }

  function kelvinToFahrenheit(temp) {
    return (temp * 9/5) - 459.67;
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
    generateWeather:generateWeather
  }
});


// Sample API requests:
  // ex. seven day: 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=4efbcc23711c1a198e5242ff3bd69d7a'
  // ex. todays: 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&APPID=4efbcc23711c1a198e5242ff3bd69d7a'
