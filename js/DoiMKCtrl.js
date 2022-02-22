
app.controller("dmkCtrl", function ($scope, $http) {
    var stu = [];
    $http.get("js/Students.js").then(function (response) {
        $scope.stu = response.data;
    });
    $scope.update = function () {
        for( var i = 0; i < $scope.stu.length; i++){
            if($scope.user == $scope.stu[i].username && $scope.passw == $scope.stu[i].password
            && $scope.newpassw == $scope.xnpassw){
                alert("Đổi mật khẩu thành công & mật khẩu mới là: " + $scope.newpassw);
                $scope.user = "";
                $scope.passw = "";
                $scope.newpassw = "";
                $scope.xnpassw = "";
                break;
            }
        }
    };

});