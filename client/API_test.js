

// This example requires the Places library. Include the libraries=places
  // parameter when you first load the API. For example:
  // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

  var map;
  var infowindow;

  function initMap() {
  
	
	var pyrmont = {lat: -33.867, lng: 151.195};

	map = new google.maps.Map(document.getElementById('map'), {
	  center: pyrmont,
	  zoom: 15
	});

	infowindow = new google.maps.InfoWindow();
	var service = new google.maps.places.PlacesService(map);
	service.nearbySearch({
	  location: pyrmont,
	  radius: 500,
	  type: ['park']
	}, callback);
  }

  function callback(results, status) {
	if (status === google.maps.places.PlacesServiceStatus.OK) {
	  for (var i = 0; i < results.length; i++) {
		createMarker(results[i]);
	  }
	}
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






function handleAddress(input) {
	var formattedInput = input.split(' ').join('%20');
	httpGetAsync('https://maps.googleapis.com/maps/api/geocode/json?address=' + formattedInput + '&key=AIzaSyAvP71A4zQ3bBjri75-1y6AaLP3s-JfNO0', handleLocation);
	
}
handleAddress('Death Valley');

function handleLocation(input) {
	
	var inputJSON = JSON.parse(input);
	 
  
	
	var pyrmont = {lat: inputJSON.results[0].geometry.location.lat, lng: inputJSON.results[0].geometry.location.lng};

	map = new google.maps.Map(document.getElementById('map'), {
	  center: pyrmont,
	  zoom: 15
	});

	infowindow = new google.maps.InfoWindow();
	var service = new google.maps.places.PlacesService(map);
	service.nearbySearch({
	  location: pyrmont,
	  radius: 500,
	  type: ['park']
	}, callback);
  
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send();
}



function print (text) {
	console.log(JSON.parse(text));
}

