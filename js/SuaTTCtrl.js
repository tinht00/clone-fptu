app.controller("editCtrl", function ($scope, $http) {
    $scope.stu = [];
    $scope.student = {};
    $scope.index = -1;
    $http.get("js/Students.js").then(function (response) {
        $scope.stu = response.data;
    });
    $scope.edit = function (index) {
        $scope.index = index;
        $scope.student = angular.copy($scope.stu[index]);
    };
    $scope.update = function () {
        $scope.stu[$scope.index] = angular.copy($scope.student);
    };
    $scope.cancel = function () {
        $scope.student = {};
        $scope.index = -1;
    };
});