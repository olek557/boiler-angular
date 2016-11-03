// 'use strict';


    var app = angular.module('myApp', []);
    var some = [];

    app.controller('AdviserController', function($scope, $http) {
        var film = this;
        film.items = [];
        film.items[0] = "Test";
        $scope.filmScope = [];
        // that.item;
         $http.get( "http://134.249.116.199:3000/api/a96ed253-fb2c-4ff6-9e37-ff1c5935b7ca/movies/4")
            .then(function(responce){
                $scope.film = responce.data;
                console.log(responce.data);
            });
    });
    // app.controller('MainCntl', function($scope, $http) {

    // });
// });
