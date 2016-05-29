angular.module('parksAndEx.description', [])

.controller('descriptionController', function($scope, descriptionFactory) {
    $scope.$on('list-set', function(event, args) {
        descriptionFactory.generate(args[0].name, $scope);
    });

}).factory('descriptionFactory', function($http) {

    var descriptionContent = "--";

    function getDescription(args, $scope) {

        var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + args.trim().split(" ").join("%20");
        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            contentType: "application/json",
            dataType: 'jsonp',
            success: function(data) {
                var key = Object.keys(data.query.pages)[0];
                var content = data.query.pages[key].extract;
                descriptionContent = content;
                $scope.$apply(function() {
                    $scope.description = content;
                });
                //console.log($scope.description);

            },
            failure: function(err) {
                console.log("ERR", err);
            }
        });
    }

    return {
        generate: getDescription
    };


});
