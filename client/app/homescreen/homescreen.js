angular.module('parksAndEx.homescreen', [])

.controller('homescreenController', function($scope, homescreenFactory, mapFactory, $location) {
  //$scope.test = mainFactory.getText();
  $scope.searchStatus = false;

  $scope.submitSearch = function(input){
    console.log(input)
  	var filtered = homescreenFactory.filter(input);
  	if(filtered){
	  	$scope.searchStatus = true;
	  	$scope.text = filtered;
	  	mapFactory.generate(filtered);
	  }
	 else{
	 	$scope.test = "BAD DATA"
	 }
  	//call michaels API

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
