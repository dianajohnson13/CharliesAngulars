angular.module('parksAndEx.tabsToggle', [])

.controller('tabsController', function($scope) {
  $scope.tab1 = false;
  $scope.tab2 = false;
  $scope.tab3 = false;
  $scope.tab4 = false;
  $scope.tab5 = false;

  $scope.currTab = 'tab1';

  $scope.switchTabs = function(selectedTab) {
    $scope[$scope.currTab] = false;
    $scope.currTab = selectedTab;
    $scope[selectedTab] = true;
  }
});
