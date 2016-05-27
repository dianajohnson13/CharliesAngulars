angular.module('parksAndEx.weather', []) 

.controller('weatherController', function($scope, weatherFactory) {
  $scope.sevenDayForecast;
  $scope.todaysWeather;

  $scope.generateWeather = function(lat, lon) {
    weatherFactory.generateWeather(lat, lon);
  }

  $scope.$on('todaysWeather', function(event, args) {
    $scope.todaysWeather = args;
    console.log(args)
    //args currently contains just the current temp
  });

  $scope.generateWeather(37.77, -122.419); //hardcoded...
})

.factory('weatherFactory', function($rootScope) {
  var apiKey = '4efbcc23711c1a198e5242ff3bd69d7a';
  var urlTodayStart = 'http://api.openweathermap.org/data/2.5/weather?';
  var urlSevenDayStart = 'http://api.openweathermap.org/data/2.5/forecast/daily?';
  
  var latitude;
  var longitude;

  function generateWeather(lat, lon) {
    latitude = lat;
    longitude = lon;

    httpGetAsync(setUrl(urlTodayStart), handleTodaysForecast);
    //httpGetAsync(setUrl(urlSevenDayStart), handleSevenDayForecast);
  }

  function handleTodaysForecast(resp){
    console.log('today', resp);
    $rootScope.$broadcast('todaysWeather', { 
      currTemp: Math.round(kelvinToFahrenheit(resp.main.temp)),
      highTemp: Math.round(kelvinToFahrenheit(resp.main.temp_max)),
      lowTemp: Math.round(kelvinToFahrenheit(resp.main.temp_min)),
      description: resp.weather[0].description,
      icon: resp.weather[0].icon
    });
  }

  function handleSevenDayForecast(resp){
    console.log('sevenday', resp);
    //for each:  day, format date, high temp, low temp, description, icon
        // put all of these in a forcast obj
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

  // function formatDate(timeStamp) {
  //   var date = new Date(timeStamp * 1000);
  //   var day = date.getDate();
  // }

  return {
    generateWeather:generateWeather
  }
});


// Sample API requests:
  // ex. seven day: 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=4efbcc23711c1a198e5242ff3bd69d7a'
  // ex. todays: 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&APPID=4efbcc23711c1a198e5242ff3bd69d7a'
