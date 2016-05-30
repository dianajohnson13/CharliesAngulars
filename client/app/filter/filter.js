angular.module('parksAndEx.filter', [])

.controller('filterController', function ($scope,$rootScope, filterFactory) {
	$scope.$on('initial-generate', function(event, args) {
    	input_global = args;
		filterFactory.generate(args, $scope, $rootScope);
	});
	$scope.rerenderAll = function (param1, param2) {
		console.log(param1, param2);
		$rootScope.$broadcast('switch-park', {
      lat: param1,
      lng: param2
    });
	};
	$scope.toggleSize = function($event){
  	$("#map").toggleClass("smallMap fullMap");
  	filterFactory.resize();
  }
	
	
}).factory('filterFactory', function($http) {
	function resize(){
    google.maps.event.trigger(map, "resize");
  }
 	var $scope = null;
 	var $rootScope = null;
	function callbackFn(results, status) {
		if (status === google.maps.places.PlacesServiceStatus.OK) {
		results.map(function(element, index, collection){
		var lat = element.geometry.location.lat()
		var lng = element.geometry.location.lng();
		element.latlng={lat:lat, lng:lng}
		});
		var temp;
		for(var i = 1; i < results.length; i++) {
			if (results[i].name.toUpperCase() === input_global.toUpperCase()) {
			temp = results[i];
			results.splice(i);
			results.unshift(temp);
			}
		}
		$scope.locations = results;
		$rootScope.$broadcast('list-set', results);
		console.log(results);
		$scope.$apply();
		  for (var i = 0; i < results.length; i++) {
			createMarker(results[i]);
		  }
		}
	};
	function createMarker(place) {
		var placeLoc = place.geometry.location;
		var marker = new google.maps.Marker({
		  map: map,
		  position: place.geometry.location
		});
		google.maps.event.addListener(marker, 'click', function() {
		  infowindow.setContent(place.name);
		  infowindow.open(map, this);
		});
	}; 

	function handleAddress(input, scope, rootScope) {
		$scope = scope;
		$rootScope = rootScope;
		var formattedInput = input.split(' ').join('%20');
		httpGetAsync('https://maps.googleapis.com/maps/api/geocode/json?address=' + formattedInput + '&key=AIzaSyAvP71A4zQ3bBjri75-1y6AaLP3s-JfNO0', handleLocation);
	};
	function handleLocation(input) {
		
		var inputJSON = JSON.parse(input);
		if (!inputJSON.results.length) {
			return false;
		}
		var location = {lat: inputJSON.results[0].geometry.location.lat, lng: inputJSON.results[0].geometry.location.lng};
		map = new google.maps.Map(document.getElementById('map'), {
		  center: location,
		  zoom: 12
		});  //not good must not generate map twice
		infowindow = new google.maps.InfoWindow();
		var service = new google.maps.places.PlacesService(map);
		service.nearbySearch({
		  location: location,
		  radius: 25000,
		  type: ['park']
		}, callbackFn);
	};
	function httpGetAsync(theUrl, callback)
	{
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function() { 
			if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
				callback(xmlHttp.responseText);
		}
		xmlHttp.open("GET", theUrl, true); // true for asynchronous 
		xmlHttp.send();
	};

	return {generate: handleAddress,
					resize:resize};

});

var input_global;
