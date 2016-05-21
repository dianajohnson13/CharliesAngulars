angular.module('mainPage', [])

.controller("mainController", function($scope, mainFactory) {
  //$scope.test = mainFactory.getText();
  $scope.searchStatus = true;

  $scope.submitSearch = function(){
  	var filtered = mainFactory.filter("  death valley");
  	if(filtered){
	  	$scope.searchStatus = true;
	  	$scope.text = filtered;
	  }
	 else{
	 	$scope.test = "BAD DATA"
	 }
  	//call michaels API

  }
  
}).factory('mainFactory', function(){

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
