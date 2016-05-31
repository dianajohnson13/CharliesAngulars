angular.module('parksAndEx.services', [])

.factory('servicesFactory', function($http, weatherFactory) {
  var getWeather = function (lat, lng) {
    return $http({
      method: 'POST',
      url: '/weather',
      data: {latLng: [lat, lng]}
    })
    .then(function (resp) {
      weatherFactory.handleWeather(resp);
    });
  };

  return {
    getWeather: getWeather
  }
})
