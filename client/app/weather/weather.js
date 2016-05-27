angular.module('parksAndEx.weather', []) 

.controller('weatherController', function($scope, weatherFactory) {
  $scope.forecast;

  $scope.generateWeather = function(lat, lon) {
    weatherFactory.generateWeather(lat, lon);
  }

  $scope.generateWeather(37.77, -122.419); //hardcoded...
})

.factory('weatherFactory', function() {
  var apiKey = '4efbcc23711c1a198e5242ff3bd69d7a';
  var urlTodayStart = 'http://api.openweathermap.org/data/2.5/weather?'
  var urlSevenDayStart = 'http://api.openweathermap.org/data/2.5/forecast/daily?'
  
  var latitude;
  var longitude;

  function generateWeather(lat, lon) {
    latitude = lat;
    longitude = lon;

    httpGetAsync(setUrl(urlTodayStart), doSomethingWithTodaysForecast);
    httpGetAsync(setUrl(urlSevenDayStart), doSomethingWithSevenDayForecast);
  }

  function doSomethingWithTodaysForecast(resp){
    // dont worry. I'll change these function names
    console.log('today', resp);
  }

  function doSomethingWithSevenDayForecast(resp){
    // dont worry. I'll change these function names
    console.log('sevenday', resp);
  }

  function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        callback(xmlHttp.responseText);
      }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
  }

  function setUrl(urlStart) {
    return urlStart + 'lat=' + latitude + '&lon=' + longitude + '&APPID=' + apiKey;
  }

  // function formatDate(timeStamp) {
  //   var date = new Date(timeStamp * 1000);
  //   var day = date.getDate();
  // }

  // function convertTemp() {
  //
  // }

  return {
    generateWeather:generateWeather
  }
});


// Sample API requests:
  // ex. seven day: 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=4efbcc23711c1a198e5242ff3bd69d7a'
  // ex. todays: 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&APPID=4efbcc23711c1a198e5242ff3bd69d7a'
