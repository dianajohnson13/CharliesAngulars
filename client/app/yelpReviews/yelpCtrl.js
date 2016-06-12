angular.module('parksAndEx.yelpReviews',[])

.controller('yelpController', function($scope, getParks) {
  angular.extend($scope, getParks);

  $scope.$on('list-set', function(event, args) {
    var loc = args[0].latlng;
    
    getParks.postToServer([{name: args[0].name, lat: loc.lat, lng: loc.lng}]);
  });
  $scope.$on('switch-park', function(event, args) {
    getParks.postToServer([{name: args.name, lat: args.lat, lng: args.lng}]);
  });
})

.factory('getParks', function($http) {
  var parks = [];

  var formatPhone = function(phone) {
    return phone = "("+ phone.slice(0,3) + ") " + phone.slice(3, 6) + "-" + phone.slice(6, 10);
  };

  var postToServer = function(data) {
    parks.length = 0;
    data.forEach(function(term){
      if (term) {
        $http.post('/', [term])
        .then(function(response) {
          parks.push(response.data);
          response.data.phone = formatPhone(response.data.phone);
        }
        ,function() {
          console.log("fail");
        })
      }
    });
  };
  return {
    postToServer: postToServer,
    parks: parks,
    formatPhone: formatPhone
  };
});
