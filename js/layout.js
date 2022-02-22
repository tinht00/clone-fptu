var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "Layout/Module/Home.html"
        })
        .when("/about", {
            templateUrl: "Layout/Module/GioiThieu.html"
        })
        .when("/quizs", {
            templateUrl: "Layout/Module/MonHoc_Thi.html",
            controller: "myCtrl"
        })
        .when("/contact", {
            templateUrl: "Layout/Module/LienHe.html"
        })
        .when("/feedback", {
            templateUrl: "Layout/Module/GopY.html",
            controller: "txCtrl"
        })
        .when("/faq", {
            templateUrl: "Layout/Module/HoiDap.html"
        })

        .when("/account/register", {
            templateUrl: "Layout/Module/Register.html",
            controller: "regCtrl"
        })
        .when("/login", {
            redirectTo: "/home"
        })
        .when("/account/edit-account", {
            templateUrl: "Layout/Module/SuaTT.html",
            controller: "editCtrl"
        })
        .when("/account/change-pwd", {
            templateUrl: "Layout/Module/DoiMK.html",
            controller: "dmkCtrl"
        })

        // QUIZ
        .when("/quizs/ADAV", {
            templateUrl: "Layout/Quizs.html",
            controller: "adavCtrl"
        })
        .when("/quizs/ADBS", {
            templateUrl: "Layout/Quizs.html",
            controller: "adbsCtrl"
        })
        .when("/quizs/ADTE", {
            templateUrl: "Layout/Quizs.html",
            controller: "adteCtrl"
        })
        .when("/quizs/ADUI", {
            templateUrl: "Layout/Quizs.html",
            controller: "aduiCtrl"
        })
        .when("/quizs/ASNE", {
            templateUrl: "Layout/Quizs.html",
            controller: "asneCtrl"
        })
        .when("/quizs/CLCO", {
            templateUrl: "Layout/Quizs.html",
            controller: "clcoCtrl"
        })
        .when("/quizs/DBAV", {
            templateUrl: "Layout/Quizs.html",
            controller: "dbavCtrl"
        })
        .when("/quizs/DBBS", {
            templateUrl: "Layout/Quizs.html",
            controller: "dbbsCtrl"
        })
        .when("/quizs/GAME", {
            templateUrl: "Layout/Quizs.html",
            controller: "gameCtrl"
        })
        .when("/quizs/HTCS", {
            templateUrl: "Layout/Quizs.html",
            controller: "htcsCtrl"
        })
        .when("/quizs/INMA", {
            templateUrl: "Layout/Quizs.html",
            controller: "inmaCtrl"
        })
        .when("/quizs/JAAV", {
            templateUrl: "Layout/Quizs.html",
            controller: "jaavCtrl"
        })
        .when("/quizs/JABS", {
            templateUrl: "Layout/Quizs.html",
            controller: "jabsCtrl"
        })
        .when("/quizs/JSPR", {
            templateUrl: "Layout/Quizs.html",
            controller: "jsprCtrl"
        })
        .when("/quizs/LAYO", {
            templateUrl: "Layout/Quizs.html",
            controller: "layoCtrl"
        })
        .when("/quizs/MOWE", {
            templateUrl: "Layout/Quizs.html",
            controller: "moweCtrl"
        })
        .when("/quizs/PHPP", {
            templateUrl: "Layout/Quizs.html",
            controller: "phppCtrl"
        })
        .when("/quizs/PMAG", {
            templateUrl: "Layout/Quizs.html",
            controller: "pmagCtrl"
        })
        .when("/quizs/VBPR", {
            templateUrl: "Layout/Quizs.html",
            controller: "vbprCtrl"
        })
        .when("/quizs/WEBU", {
            templateUrl: "Layout/Quizs.html",
            controller: "webuCtrl"
        })


        .otherwise({
            redirectTo: "/home"
        });
});
app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.loading = false;
    });
    $rootScope.$on('$routeChangeError', function () {
        $rootScope.loading = false;
        alert("Lỗi");
    });





});