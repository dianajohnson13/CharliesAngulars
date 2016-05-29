angular.module('parksAndEx.toggleNavbar', [])

.controller('toggleNavbarController', function($scope) {
  $scope.tab1 = false;
  $scope.tab2 = false;
  $scope.tab3 = false;
  $scope.tab4 = false;
  $scope.tab5 = false;

  $scope.reset = function() {
  $scope.tab1 = false;
  $scope.tab2 = false;
  $scope.tab3 = false;
  $scope.tab4 = false;
  $scope.tab5 = false;
  }
});