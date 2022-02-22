app.controller("regCtrl", function ($scope, $http) {
    $scope.stu = [];
    $scope.student = {};
    $scope.index = -1;
    $http.get("js/Students.js").then(function (response) {
        $scope.stu = response.data;
    });
    $scope.insert = function (index) {
        if ($scope.student.username==null||$scope.student.fullname==null||$scope.student.gender==null
            ||$scope.student.email==null||$scope.student.password==null||$scope.student.birthday==null) {
            return;
        }else{
            $scope.stu.push(angular.copy($scope.student));
            $scope.student = {};
            $scope.index = -1;
        }

        $scope.cancel = function () {
            $scope.student = {};
            $scope.index = -1;
        };
    };
});