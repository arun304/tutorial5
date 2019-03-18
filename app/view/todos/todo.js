app.controller('todosCtrl', function ($scope, $http) {
    $http.get("json/todos.json")
        .then(function (response) {
        $scope.todosData = response.data;
        });
});