app.controller('usersCtrl', function ($scope, $http) {
    $http.get("json/users.json")
        .then(function (response) {
        $scope.usersData = response.data;
        });
});