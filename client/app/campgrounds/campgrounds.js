angular.module('parksAndEx.campgrounds', [])

.controller('campgroundsController', function ($scope) {

	$scope.$on('initial-generate', function(event, args) {
		var trimmedinput = args.replace(/state/gi, "").replace(/park/gi, "").replace(/campground/gi, "").trim();
		var formattedinput = trimmedinput.split(' ').join('%20');
		ajaxCallForSpecificPark(formattedinput);
		
	});
	$scope.$on('switch-park', function(event, args) {
		console.log(args);
		var trimmedinput2 = args.name.replace(/state/gi, "").replace(/park/gi, "").replace(/campground/gi, "").trim();
		var formattedinput2 = trimmedinput2.split(' ').join('%20');
		ajaxCallForSpecificPark(formattedinput2);
	});

	    
	
	function ajaxCallForSpecificPark(input) {
		var url = "https://api.amp.active.com/camping/campgrounds/?pname=" + input +"&api_key=dr4texk5yrrhvfykvcbg5zza";
		var yql = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + url + '"') + '&format=json&callback=?';
   	console.log(url)
		$.ajax({
			type: 'GET',
			url: yql,
			async: false,
			crossDomain: true,
			dataType: 'json',
			success: function(data) {
				console.log(data);
				var contractID;
				var parkID;
				
				if (!data.query.results || data.query.results.resultset.result === undefined) {
				$scope.hideCampgrounds = true;
				$scope.$apply();
				}
				else if (Array.isArray(data.query.results.resultset.result)) {
					contractID = data.query.results.resultset.result[0].contractID;
					parkID = data.query.results.resultset.result[0].facilityID;
					$scope.hideCampgrounds = false;
					ajaxCallForSpecificParkDetails(contractID,parkID);
				} 
				
				else if (typeof data.query.results.resultset.result === 'object') {
					contractID = data.query.results.resultset.result.contractID;
					parkID = data.query.results.resultset.result.facilityID;
					$scope.hideCampgrounds = false;
					ajaxCallForSpecificParkDetails(contractID,parkID);
				}
				console.log(contractID, parkID);
			},
			failure: function(err) {
				console.log("ERR", err);
			}
		});
		
	
	}
	
	
	
	
	
	
	function ajaxCallForSpecificParkDetails(contractID, parkID) {
		var url = "https://api.amp.active.com/camping/campground/details?contractCode="+ contractID + "&parkId=" + parkID + "&api_key=dr4texk5yrrhvfykvcbg5zza";
		var yql = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + url + '"') + '&format=json&callback=?';	   
		$.ajax({
			type: 'GET',
			url: yql,
			async: false,
			crossDomain: true,
			dataType: 'json',
			success: function(data) {
				console.log(data);
				var traversed = data.query.results.detailDescription;
				var dataObject = {name: traversed.facility, 
									campgroundinfo:traversed.amenity, 
									description: traversed.description,
									contact:traversed.contact};

				
				$.extend( $scope, dataObject );
				 $scope.$apply();
			},
			failure: function(err) {
				console.log("ERR", err);
			}
		});
	};
});
