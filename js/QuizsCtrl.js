// ADAV
app.controller("adavCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/ADAV.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// ADBS
app.controller("adbsCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/ADBS.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// ADTE
app.controller("adteCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/ADTE.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// ADUI
app.controller("aduiCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/ADUI.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// ASNE
app.controller("asneCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/ASNE.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// CLCO
app.controller("clcoCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/CLCO.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// DBAV
app.controller("dbavCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/DBAV.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// DBBS
app.controller("dbbsCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/DBBS.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// GAME
app.controller("gameCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/GAME.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// HTCS
app.controller("htcsCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/HTCS.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// INMA
app.controller("inmaCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/INMA.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// JAAV
app.controller("jaavCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/JAAV.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// JABS
app.controller("jabsCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/JABS.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// JSPR
app.controller("jsprCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/JSPR.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// LAYO
app.controller("layoCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/LAYO.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// MOWE
app.controller("moweCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/MOWE.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// PHPP
app.controller("phppCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/PHPP.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// PMAG
app.controller("pmagCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/PMAG.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// VBPR
app.controller("vbprCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/VBPR.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1;
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});

// WEBU
app.controller("webuCtrl", function ($scope,$http) {
    $scope.quizs=[];

    $http.get("js/Quizs/WEBU.js").then(function (response) {
        $scope.quizs = response.data;
        $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    });

    $scope.prop = "Id";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.quizs.length / 1);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.prev = function () {
        if ($scope.begin > 0){
            $scope.begin-=1
        }
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 1){
            $scope.begin += 1;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 1;
    };
});
