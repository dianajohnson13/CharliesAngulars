angular.module('parksAndEx.weather', []) 

.controller('weatherController', function($scope, weatherFactory) {
  $scope.forecast;

  $scope.generateWeather = function(lat, lon) {
    weatherFactory.generateWeather(lat, lon);
  }

  // when should this happen:
    // whenever someone makes the search - do this from the search data
    // whenever someone chooses a location from the suggested parks
    // whenever the tab is shown...? no because it will already be available
        //should I get it everytime someone clicks on a different park OR when 
          //the search is made and then just swap through them as they are clicked on?
        // I think I could make them just when if the place is clicked on and then 
          // store them in a hash. Everytime they are needed, just check to see if
          // the hash contains them for that park (maybe timestamp it too). If its not contained
          // then I will run through the whole process, otherwise I will just display?
            //If I did this, I would probably seperate out curr temp and always re-run that
})

.factory('weatherFactory', function() {
  var apiKey = '4efbcc23711c1a198e5242ff3bd69d7a';
  var urlTodayStart = 'http://api.openweathermap.org/data/2.5/weather?'
  var urlSevenDayStart = 'http://api.openweathermap.org/data/2.5/forecast/daily?'
  
  var latitude;
  var longitude;

  var generateWeather = function(lat, lon) {
    latitude = lat;
    longitude = lon;

    httpGetAsync(setUrl(urlTodayStart), doSomethingWithTodaysForecast); // what are these do somethings?
    //httpGetAsync(setUrl(urlSevenDayStart), doSomethingWithSevenDayForecast);
  }

  var httpGetAsync = function(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        callback(xmlHttp.responseText);
      }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
  }

  var setUrl = function(urlStart) {
    return urlStart + 'lat=' + latitude + '&lon=' + longitude + '&APPID=' + apiKey;
  }

  // var formatDate = function(timeStamp) {
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
