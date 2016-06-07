angular.module('parksAndEx.homescreen', [])

.controller('homescreenController', function($scope, $rootScope, homescreenFactory, $location) {
  
  $scope.searchStatus = false;

  $scope.submitSearch = function(input){
  	var filtered = homescreenFactory.filter(input);
  	if(filtered){
	  	$scope.searchStatus = true;
	  	$scope.text = filtered;
	  	$rootScope.$broadcast('initial-generate', filtered);
	  }
	 else{
	 	$scope.test = "BAD DATA"
	 	return false;
	 }
  }
  
}).factory('homescreenFactory', function(){

	var filterText = function(text){
		var filteredText = text.trim();
		if(text.length)
			return text;
		else{
			return false;
		}
	}
	return {filter:filterText};

});
