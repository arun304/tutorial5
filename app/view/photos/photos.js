app.controller('photoCtrl', function ($scope, $http) {
    $http.get("json/photos.json")
        .then(function (response) {
        $scope.myData = response;
        });
});