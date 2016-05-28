angular.module('parksAndEx.Tabstoggle', [])

.controller('TabsCtrl', function ($scope) {
    $scope.tabs = [{
      title: 'Weather',
      url: 'one.tpl.html'
    }, {
      title: 'Reviews',
      url: 'two.tpl.html'
    }, {
      title: 'Feature3',
      url: 'three.tpl.html'
    }, {
      title: 'Feature4',
      url: 'four.tpl.html'
    }, {
      title: 'Feature5',
      url: 'five.tpl.html'
    }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
});