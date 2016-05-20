angular.module('mainPage', [])

.controller("mainController", function($scope) {
  $scope.test = "Hello World!!!!";
  $scope.searchStatus = false;
  $scope.submitSearch = function(){
  	$scope.searchStatus = true;

  }
  
});
