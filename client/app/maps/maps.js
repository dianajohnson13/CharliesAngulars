angular.module('parksAndEx.maps', [])
    .controller('mapsController', function($scope, mapFactory) {

        $scope.toggleSize = function($event){
        	$("#map").toggleClass("smallMap fullMap");
        	mapFactory.resize();
        }
    })

.factory('mapFactory', function($http) {

    function resize(){
      	google.maps.event.trigger(map, "resize");
    }

    function httpGetAsync(theUrl, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send();
    }

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
    }

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    function locationHandler (input) {
        var inputJSON = JSON.parse(input);
        var location = {
            lat: inputJSON.results[0].geometry.location.lat,
            lng: inputJSON.results[0].geometry.location.lng
        };
        map = new google.maps.Map(document.getElementById('map'), {
            center: location,
            zoom: 15
        });
        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: location,
            radius: 500,
            type: ['park']
        }, callback);

    }

    function generateMap(searchInput) {
    	var url = ["https://maps.googleapis.com/maps/api/geocode/json?address=",
        "&key=AIzaSyAvP71A4zQ3bBjri75-1y6AaLP3s-JfNO0"];
        var formatInput = formatSearch(searchInput, url);
        httpGetAsync(formatInput, locationHandler);
    }

    function formatSearch(unformatted, url) {
        var formatted = url[0] + unformatted.trim().split(' ').join('%20') + url[1];
        return formatted;
    }

    return {generate: generateMap,
    		resize: resize};

});
