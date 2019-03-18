app.controller('dealsCtrl', function ($scope, $http) {
    $http.get("json/photos.json")
        .then(function (response) {
        $scope.dealData= response;
        });
});