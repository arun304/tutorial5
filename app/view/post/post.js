app.controller('postCtrl', function ($scope, $http) {
    $http.get("json/post.json")
        .then(function (response) {
        $scope.postData = response.data;
        });
});